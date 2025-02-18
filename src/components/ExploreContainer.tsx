import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <div id="d1">
       <img id="image" src="resources/download.gif" alt="No image"></img>
       <h5 id="text">Planet 3d Holographic image</h5>
      </div>
    </div>
  );
};

export default ExploreContainer;
