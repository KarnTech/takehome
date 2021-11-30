import "./styles.css";
interface ItemHeaderProps {
  name: string;
  img: string;
}

const ItemHeader: React.FC<ItemHeaderProps> = ({ name, img }) => {
  return (
    <div className="text-center container md:ml-20 md:mb-30 md:text-left">
      <p className="text-blue-default text-base md:text-lg my-5">
        YOUR PERSONALIZED
      </p>
      <p className="font-bold md:text-tiny text-tiny">{name}</p>
    </div>
  );
};

export default ItemHeader;
