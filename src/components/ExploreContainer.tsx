import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <div id="d1">
        <a id="a1" href="resources/0218 (1).mp4"><img id="image" src="resources/0218 (1).gif" alt="No image"></img>
       <h5 id="text">Planet 3d Holographic image</h5></a>
      </div>
    </div>
  );
};

export default ExploreContainer;
