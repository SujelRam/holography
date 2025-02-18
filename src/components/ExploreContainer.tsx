import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
       <div id="d1">
         <img id="image" src="resources/bg.png" alt="No image"></img>
         <h5 id="text">Atom 3D Holography</h5>
       </div>

       <div id="video-container">
         <button id="back-button">Back</button>
         <video id="video" src="resources/Atom 3d animation.mp4" loop controls></video>
       </div>
      <script src="components/video.js">
      </script>
    </div>
  );
};

export default ExploreContainer;
