import Header from "./components/Header";
import Item from "./components/Item";
import Checkout from "./components/Checkout";
import { useReducer } from "react";
import { initialCartState, reducer } from "./Reducers/CartReducer";
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialCartState);
  return (
    <div>
      <Header />
      <Item />
    </div>
  );
};

export default App;
