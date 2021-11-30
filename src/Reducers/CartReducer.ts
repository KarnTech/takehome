import Rings from "../Rings.json";
export interface RingDetails {
  Material: string;
  Stone: string[];
  "Engraving Font": string;
  Engraving: string[];
  "Ring Size": number;
}
export interface Ring {
  id: number;
  name: string;
  img: string;
  price: number;
  retailPrice: number;
  saving: number;
  details: RingDetails;
  discount: number;
}
export interface CheckoutInfo {
  "Item Total": number;
  "Gift Wrap"?: number;
  discounts?: number;
  total: number;
}
export interface Cart {
  items: Ring[] | [];
  checkoutDetails: CheckoutInfo;
}

const getTotalPrice = (state?: typeof initialCartState) => {
  let total = 0;
  Object.values(state ? state.items : Rings).forEach(
    (ring) => (total += ring.price)
  );
  return total;
};
const getTotalDiscount = (state?: typeof initialCartState) => {
  let total = 0;
  Object.values(state ? state.items : Rings).forEach(
    (ring) => (total += ring.discount)
  );
  return total;
};

export const initialCartState: Cart = {
  items: Object.values(Rings).map((ring) => ring),
  checkoutDetails: {
    "Item Total": getTotalPrice(),
    "Gift Wrap": Object.values(Rings).length * 4.99,
    discounts: getTotalDiscount(),
    total: getTotalPrice() + getTotalDiscount() + 4.99,
  },
};

export enum actionKind {
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE = "UPDATE",
}
interface actionType {
  type: actionKind;
  payload: number;
}
export const reducer = (state: typeof initialCartState, action: actionType) => {
  const { type, payload } = action;
  switch (type) {
    case actionKind.ADD:
      //filter out the item using ID
      return { ...state };
    case actionKind.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
        checkoutDetails: {
          ...state.checkoutDetails,
          "Item Total": getTotalPrice(state),
          discounts: getTotalDiscount(state),
          total: getTotalPrice(state) + getTotalDiscount(state) + 4.99,
        },
      };
    case actionKind.UPDATE:
      return {
        ...state,
        checkoutDetails: {
          ...state.checkoutDetails,
          "Item Total": getTotalPrice(state),
          discounts: getTotalDiscount(state),
          "Gift Wrap": state.items.length * 4.99,
          total:
            getTotalPrice(state) +
            getTotalDiscount(state) +
            state.items.length * 2,
        },
      };
  }
};
export default reducer;
