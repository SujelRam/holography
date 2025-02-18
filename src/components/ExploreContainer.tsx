import React, { useRef } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) { 
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).mozRequestFullScreen) { 
        (videoRef.current as any).mozRequestFullScreen();
      } else if ((videoRef.current as any).msRequestFullscreen) { 
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };
  return (
    <div id="container">
      <div id="d1">
        <video
          id="image"
          ref={videoRef}
          src="resources/Atom 3d animation.mp4"
          loop
          autoPlay
          muted
          controls
          onClick={handleFullScreen}
        ></video>
        <h5 id="text">Atom 3D Holography</h5>
      </div>
    </div>
  );
};

export default ExploreContainer;

