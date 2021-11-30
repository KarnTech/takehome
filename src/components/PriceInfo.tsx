import { Ring } from "../Reducers/CartReducer";
import { isMobile } from "../utils";
interface PriceInfoProps {
  item: Ring;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ item }) => {
  return (
    <div className="text-center mb-120">
      <p className="font-bold md:text-3xl text-2xl">
        {`${"$" + (Math.round(item.price * 100) / 100).toFixed(2)}`}
      </p>
      {isMobile() && (
        <p className="font-semibold md:text-lg mb-32">
          {"Retail " +
            "$" +
            (Math.round(item.retailPrice * 100) / 100).toFixed(2) +
            " | " +
            "SAVE " +
            "$" +
            (Math.round(item.saving * 100) / 100).toFixed(0)}
        </p>
      )}
    </div>
  );
};

export default PriceInfo;
