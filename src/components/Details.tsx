import { Ring } from "../Reducers/CartReducer";

interface DetailsProps {
  item: Ring;
}

const Details: React.FC<DetailsProps> = ({ item }) => {
  return (
    <div className="px-20 w-400 mx-auto mb-80">
      {Object.entries(item.details).map(([key, value], i) => {
        if (Array.isArray(value)) {
          return value.map((val, i) => (
            <div className="flex justify-between my-5" key={i}>
              <p className="text-base text-gray-dark font-medium">
                {key + " " + (i + 1) + ":"}
              </p>
              <p className="w-1/2 text-base text-gray-dark text-left font-light">
                {val}
              </p>
            </div>
          ));
        } else
          return (
            <div className="flex justify-between my-5" key={i}>
              <p className="text-base text-gray-dark font-medium">
                {key + ":"}
              </p>
              <p className="text-base w-1/2 text-gray-dark font-light ">
                {value}
              </p>
            </div>
          );
      })}
    </div>
  );
};

export default Details;
