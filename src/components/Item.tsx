import { actionKind } from "../Reducers/CartReducer";
import { isMobile } from "../utils";
import { Details, ItemHeader, PriceInfo, Image, Checkout } from "./index";
import { useReducer } from "react";
import { initialCartState, reducer } from "../Reducers/CartReducer";

const Item = () => {
  const [{ items, checkoutDetails }, dispatch] = useReducer(
    reducer,
    initialCartState
  );
  return (
    <>
      {items.length === 0 ? (
        <div className="text-center text-bold my-30">Please Slect and Item</div>
      ) : (
        items.map((item, i) => (
          <div key={i} className="container mx-auto">
            {isMobile() ? (
              <>
                <div className="border-t-2 border-blue-border mx-5"></div>
                <div className="text-right h-60 text-3xl">X</div>
                <ItemHeader name={item.name} img={item.img} />
                <Image img={item.img} />
                <PriceInfo item={item} />
                <Details item={item} />
              </>
            ) : (
              <>
                <div className="border-t-2 border-blue-border mx-5"></div>
                <div
                  onClick={() => {
                    console.log(item.id);
                    dispatch({ type: actionKind.REMOVE, payload: item.id });
                    dispatch({
                      type: actionKind.UPDATE,
                      payload: item.id,
                    });
                  }}
                  className="text-right h-60 text-4xl py-10 text-blue-default cursor-pointer">
                  X
                </div>
                <div className="flex">
                  <Image img={item.img} />
                  <div>
                    <ItemHeader name={item.name} img={item.img} />
                    <Details item={item} />
                  </div>
                  <PriceInfo item={item} />
                </div>
              </>
            )}
          </div>
        ))
      )}
      <Checkout {...checkoutDetails} />
    </>
  );
};

export default Item;
