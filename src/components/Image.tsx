interface ImageProps {
  img: string;
}

const Image: React.FC<ImageProps> = ({ img }) => {
  return <img className="h-300 md:h-400 mx-auto" src={img} alt=""></img>;
};

export default Image;
