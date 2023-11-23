import { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/defaultLayout";
import { Product as ProductInerface } from "../../myTypes/types";
import { useProductsStore } from "../../stores/productsStore";
import { useParams } from "react-router-dom";
import { Button, Image, Spinner } from "@chakra-ui/react";

const Product = () => {
  const [currentProduct, setCurrentProduct] = useState<null | ProductInerface>(
    null
  );
  const {
    isLoading,
    getProduct,
    setProductToCart,
    cartProducts,
    removeCartProduct,
  } = useProductsStore((state) => ({
    isLoading: state.isLoading,
    getProduct: state.getProductById,
    setProductToCart: state.setCartProduct,
    cartProducts: state.cartProducts,
    removeCartProduct: state.removeCartProduct,
  }));
  const routerParams = useParams();

  useEffect(() => {
    (async () => {
      if (routerParams.id) {
        const product = await getProduct(+routerParams.id);
        setCurrentProduct(product);
      }
    })();
  }, []);

  const isProductInCart = () => {
    const isProductInCart = cartProducts.some(
      (p) => p.id === currentProduct?.id
    );

    return isProductInCart;
  };

  const handleCartClick = () => {
    if (!currentProduct) return;

    const isInCart = isProductInCart();

    if (!isInCart) {
      setProductToCart(currentProduct);
    } else {
      removeCartProduct(currentProduct.id);
    }
  };

  const MainContent = ({ children }: { children: React.ReactNode }) => {
    if (isLoading)
      return (
        <div className="py-20 justify-center flex">
          <Spinner color="#56B280" size={"xl"} />
        </div>
      );

    return <>{children}</>;
  };

  return (
    <>
      <DefaultLayout>
        <MainContent>
          <div className="py-10">
            <div className="flex justify-center items-center gap-10">
              <div className="max-w-[540px]">
                <div className="w-[540px] h-[433px] flex items-center justify-center bg-gray-100 rounded-xl mb-5">
                  <Image src={`/products/${currentProduct?.img}.png`} />
                </div>
                <div className="flex flex-col gap-2 text-center text-[22px] font-medium">
                  All hand-made with natural soy wax, Candleaf is made for your
                  pleasure moments.
                  <span className="text-primary"> 🚚 FREE SHIPPING</span>
                </div>
              </div>
              <div>
                <div className="text-black text-2xl font-medium mb-2">
                  {currentProduct?.title}d
                </div>
                <div className="text-primary text-2xl font-medium mb-5">
                  ${currentProduct?.price}
                </div>
                <Button
                  colorScheme={isProductInCart() ? "gray" : "green"}
                  paddingX={20}
                  onClick={handleCartClick}
                >
                  {isProductInCart()
                    ? "Remove from cart"
                    : "Add product to cart"}
                </Button>
              </div>
            </div>
          </div>
        </MainContent>
      </DefaultLayout>
    </>
  );
};

export default Product;
