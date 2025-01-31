import React, { useEffect, useState, useRef } from 'react';

export const MediaCarousel = ({ media }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false); // Custom full-screen state
    const mediaContainerRef = useRef(null);
    const videoRef = useRef(null); // Reference to the video element
  
    useEffect(() => {
      const handleFullScreenChange = () => {
        const isNowFullScreen = !!document.fullscreenElement;
        setIsFullScreen(isNowFullScreen);
      };
  
      document.addEventListener('fullscreenchange', handleFullScreenChange);
  
      return () => {
        document.removeEventListener('fullscreenchange', handleFullScreenChange);
      };
    }, []);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? media.length - 1 : prevIndex - 1
      );
    };
  
    const toggleFullScreen = () => {
      if (isFullScreen) {
        document.exitFullscreen();
      } else if (mediaContainerRef.current.requestFullscreen) {
        mediaContainerRef.current.requestFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    };
  
    const handleMediaChange = () => {
      const currentMedia = media[currentIndex];
      if (isFullScreen && currentMedia.endsWith('.mp4') && videoRef.current) {
        // Exit custom full-screen
        document.exitFullscreen().then(() => {
          // Enter native full-screen for video
          videoRef.current.requestFullscreen();
        });
      }
    };
  
    useEffect(() => {
      handleMediaChange();
    }, [currentIndex]);
  
    const currentMedia = media[currentIndex];
  
    return (
      <div
        ref={mediaContainerRef}
        className={`relative h-80 ${isFullScreen ? 'fullscreen-active' : ''}`}
        style={{ backgroundColor: 'black' }}
      >
        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute ${
                isFullScreen ? 'left-2' : 'left-[-1.6rem]'
              } top-1/2 transform -translate-y-1/2 bg-lightButton hover:bg-lightButtonHover text-black p-2 rounded-full dark:bg-darkTool dark:hover:bg-hoverDarkTool dark:text-white z-50`}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className={`absolute ${
                isFullScreen ? 'right-2' : 'right-[-1.6rem]'
              } top-1/2 transform -translate-y-1/2 bg-lightButton hover:bg-lightButtonHover text-black p-2 rounded-full dark:bg-darkTool dark:hover:bg-hoverDarkTool dark:text-white z-50`}
            >
              &gt;
            </button>
          </>
        )}
        <div className="w-full h-full flex justify-center items-center">
          {currentMedia.includes('youtube.com/embed') ? (
            <iframe
              src={currentMedia}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          ) : currentMedia.endsWith('.mp4') ? (
            <video
              ref={videoRef}
              src={currentMedia}
              className="w-full h-full object-contain rounded-lg"
              controls
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={currentMedia}
                alt={`Media ${currentIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute bottom-2 right-2 bg-transparent text-white hover:text-gray-300 p-2 hidden sm:block"
                onClick={toggleFullScreen}
              >
                <i
                  className={`fas ${isFullScreen ? 'fa-compress' : 'fa-expand'} text-lg`}
                ></i>
              </button>
            </div>
          )}
        </div>
      </div>
    );
};