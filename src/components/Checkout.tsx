import { CheckoutInfo } from "../Reducers/CartReducer";
import { CheckoutButton } from ".";
const Checkout: React.FC<CheckoutInfo> = (props) => {
  return (
    <>
      <div className="container mx-auto border-t-2 border-green-default mx-5 mb-10"></div>
      <div className="container mx-auto md:flex justify-center md:justify-between">
        <div>
          {Object.entries(props).map(([key, value], i) => (
            <div className="flex justify-between my-5 w-400 mx-auto px-20">
              <p className="text-tiny text-gray-dark font-bold">
                {key.toUpperCase() + ":"}
              </p>
              <p className="text-tiny text-gray-dark ">
                {"$" + (Math.round(value * 100) / 100).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="border-t-2 border-green-default mx-5 mt-10 w-400 mx-auto"></div>
          <div className="flex justify-between my-5 w-400 mx-auto px-20">
            <p className="text-tiny text-blue-default font-bold">TOTAL:</p>
            <p className="text-tiny text-blue-default font-bold">
              {"$" + (Math.round(props.total * 100) / 100).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-end my-5 w-400 mx-auto px-20">
            <p className="text-xs text-gray-dark text-right cursor-pointer">
              PROMO CODE?
            </p>
          </div>
        </div>
        <div>
          <CheckoutButton />
        </div>
      </div>
    </>
  );
};

export default Checkout;
