import React, { useRef } from 'react';
import './ExploreContainer.css';
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';


interface ContainerProps {
  name: string;
}
function Example() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
  );
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
      <div id="d2">
        <img
          id="image1"
          src="resources/download.gif"
          onClick={handleFullScreen}
        ></img>
        <h5 id="text2">Jupiter Planet</h5>
      </div>
      <div id="d3">
        <video
          id="image2"
          ref={videoRef}
          src="resources/videoplayback.mp4"
          loop
          autoPlay
          muted
          controls
          onClick={handleFullScreen}
        ></video>
        <h5 id="text3">Atom 3D Holography</h5>
      </div>
      <div id="d4">
        <video
          id="image3"
          ref={videoRef}
          src="resources/Atom 3d animation.mp4"
          loop
          autoPlay
          muted
          controls
          onClick={handleFullScreen}
        ></video>
        <h5 id="text4">Atom 3D Holography</h5>
      </div>
    </div>
  );
};

export default ExploreContainer;

