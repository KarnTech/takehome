import logo from "../images/jewlr_logo.png";
const Header = () => {
  return (
    <div className="flex justify-between px-10 py-10 container mx-auto">
      <img src={logo} alt="" className="w-125 h-auto my-10" />
      <p className="my-auto text-2xl">Shopping Cart</p>
    </div>
  );
};
export default Header;
