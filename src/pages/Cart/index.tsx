import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/defaultLayout";
import { ROUTES } from "../../config/router";
import { Product } from "../../myTypes/types";
import { Button, Image } from "@chakra-ui/react";
import { useCallback } from "react";
import { useCartStore } from "../../stores/cartStore";

const CartItem = ({
  product,
  removeItem,
}: {
  product: Product;
  removeItem: (id: number) => void;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between ">
      <div className="col-span-2 flex items-center gap-7">
        <Link
          to={`/product/${product.id}`}
          className=" w-[160px] h-[120] bg-gray-100 rounded-md flex items-center justify-center"
        >
          <Image src={`/products/${product.img}.png`} />
        </Link>
        <div className="">
          <div className="font-medium text-[26px]">{product.title}</div>
          <div className=" text-primary font-medium text-lg">
            {product.price}$
          </div>
        </div>
      </div>
      <div
        className="my-auto text-primary font-medium"
        onClick={() => removeItem(product.id)}
      >
        <Button>Remove</Button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartItems, removeCartItem } = useCartStore((state) => ({
    cartItems: state.cartItems,
    removeCartItem: state.removeCartProduct,
  }));

  const getTotalPrice = useCallback(() => {
    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);

    return total;
  }, [cartItems]);

  return (
    <>
      <DefaultLayout>
        <div className="max-w-7xl mx-auto py-16 px-3">
          <div className="text-[26px] font-medium text-center mb-4">
            Your cart items
          </div>
          <Link to={ROUTES.HOME} className="mb-14">
            <div className="underline text-primary text-lg text-center">
              Back to shopping
            </div>
          </Link>
          <div className="mt-5">
            <div className="border-b border-gray-100 space-y-5 pb-5">
              {!cartItems.length ? (
                <div className="py-10 font-medium text-[22px]">
                  There are no items
                </div>
              ) : (
                <>
                  {cartItems.map((i) => (
                    <CartItem
                      key={i.id}
                      product={i}
                      removeItem={(id: number) => removeCartItem(id)}
                    />
                  ))}
                </>
              )}
            </div>
            <div className="py-5 flex justify-end gap-10 items-center">
              <div className="font-medium text-xl">
                Total: {getTotalPrice()}
              </div>
              <Button colorScheme="green">Checkout</Button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Cart;
