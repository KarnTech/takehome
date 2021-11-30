const CheckoutButton = () => {
  return (
    <>
      <div className="md:w-400 w-300 mx-auto flex justify-center bg-green-default cursor-pointer h-40 mt-30">
        <div className="text-white text-center py-10">Secure Checkout</div>
      </div>
      <div className="my-10 md:text-tiny text-xs text-center font-bold text-green-default">
        FREE SHIPPING | 99 DAY RETURNS | 1 YR WARRANTY
      </div>
    </>
  );
};

export default CheckoutButton;
