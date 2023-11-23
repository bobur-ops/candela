import { Button, Icon, Image, Spinner } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/defaultLayout";
import { useProductsStore } from "../../stores/productsStore";
import { useEffect } from "react";
import ProductItem from "../../components/ProductItem";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  const {
    products,
    isLoading,
    getAllProducts,
    popularProducts,
    getPopularProducts,
  } = useProductsStore((state) => ({
    products: state.products,
    isLoading: state.isLoading,
    getAllProducts: state.getAllProducts,
    getPopularProducts: state.getPopularProducts,
    popularProducts: state.popularProducts,
  }));

  useEffect(() => {
    getAllProducts();
    getPopularProducts();
  }, []);

  const advantages = [
    "Eco-sustainable:All recyclable materials, 0% CO2 emissions",
    "Hyphoallergenic: 100% natural, human friendly ingredients ",
    "Handmade: All candles are craftly made with love.",
    "Long burning: No more waste. Created for last long.",
  ];

  const testimonials = [
    {
      id: 1,
      name: "Luisa",
      text: "“I love it! No more air fresheners”",
      stars: 4,
    },
    {
      id: 2,
      name: "Edoardo",
      text: "“Raccomended for everyone”",
      stars: 5,
    },
    {
      id: 3,
      name: "Mart",
      text: "“Looks very natural, the smell is awesome”",
      stars: 4,
    },
  ];

  return (
    <>
      <DefaultLayout>
        <div className="">
          <div
            className="py-[150px] bg-cover bg-center px-3"
            style={{ backgroundImage: "url('./bg-image.png')" }}
          >
            <div className="mx-auto w-full px-2 max-w-[730px] pt-[34px] pb-[63px] text-center backdrop-blur-[12px] bg-white bg-opacity-80">
              <div className="text-[40px] text-custom-black">
                🌱 <br /> The nature candle
              </div>
              <div className="text-center max-w-[537px] mx-auto text-lg text-custom-black mb-11">
                All handmade with natural soy wax, Candleaf is a companion for
                all your pleasure moments{" "}
              </div>
              <Button paddingX={"44px"} colorScheme="green">
                Discovery our collection
              </Button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-3">
            <div className="py-[90px]">
              <div className="text-center text-[40px] mb-[15px] font-medium">
                Products
              </div>
              <div className="text-center text-dark-1 text-lg font-medium mb-[60px]">
                Order it for you or for your beloved ones
              </div>
              {isLoading && (
                <div className="flex justify-center">
                  <Spinner size={"xl"} color="#56B280" />
                </div>
              )}
              {products.length !== 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px]">
                  {products.map((p) => (
                    <Link to={`/product/${p.id}`} key={p.id}>
                      <ProductItem product={p} />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div id="about" className="bg-[#F7F8FA] px-3">
            <div className="max-w-7xl mx-auto py-[120px] grid  xl:grid-cols-2">
              <div className="mx-auto my-auto">
                <div className="text-dark-2 text-[40px] mb-4 font-semibold">
                  Clean and fragrant soy wax
                </div>
                <div className="text-primary mb-10">
                  Made for your home and for your wellness
                </div>
                <div className="space-y-2.5">
                  {advantages.map((a, index) => (
                    <div key={a + index} className="flex items-center gap-2">
                      <div className="">
                        <Icon as={IoIosCheckmarkCircleOutline} />
                      </div>
                      <div className="text-medium ">{a}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-auto mx-auto flex items-center">
                <Image src="./about-section.png" />
              </div>
            </div>
          </div>
          <div id="testimonials" className="bg-primary bg-opacity-10 px-3">
            <div className="py-[90px]">
              <div className="text-center font-semibold text-[40px] mb-[15px]">
                Testimonials
              </div>
              <div className="text-center text-dark-1 font-medium mb-7">
                Some quotes from our happy customers
              </div>
              <div className="flex justify-center flex-wrap gap-8">
                {testimonials.map((t) => (
                  <Testimonial key={t.id} {...t} />
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-3">
            <div className="py-[90px]">
              <div className="text-center text-[40px] mb-[15px] font-medium">
                Popular
              </div>
              <div className="text-center text-dark-1 text-lg font-medium mb-[60px]">
                Order it for you or for your beloved ones
              </div>
              {popularProducts.length !== 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px]">
                  {popularProducts.map((p) => (
                    <Link to={`/product/${p.id}`} key={p.id}>
                      <ProductItem product={p} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center">
                  <Spinner size={"xl"} color="#56B280" />
                </div>
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
