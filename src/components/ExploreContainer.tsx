import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
       <img id="image" src="resources/download.gif" alt="No image"></img>
       <h5>Planet 3d Holographic image</h5>
    </div>
  );
};

export default ExploreContainer;
