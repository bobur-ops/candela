import { Icon, Image } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/router";
import { useProductsStore } from "../stores/productsStore";

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const { cartItems } = useProductsStore((state) => ({
    cartItems: state.cartProducts,
  }));

  const footerLinks = [
    {
      title: "Discovery",
      links: ["New season", "Most searched", "Most selled"],
    },
    {
      title: "About",
      links: ["Help", "Most searched", "Most selled"],
    },
    {
      title: "Info",
      links: ["Contact us", "Privacy Policies", "Terms & Conditions"],
    },
  ];

  return (
    <div>
      <header className="py-5 px-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to={ROUTES.HOME} className="">
            <Image src="/logo.svg" />
          </Link>
          <div className="flex items-center gap-4">
            <Icon
              as={CiUser}
              w={"28px"}
              h={"28px"}
              strokeWidth={1.1}
              cursor={"pointer"}
            />
            <div className="relative">
              <Link to={ROUTES.CART}>
                <Icon
                  as={AiOutlineShoppingCart}
                  w={"28px"}
                  h={"28px"}
                  strokeWidth={1.1}
                  cursor={"pointer"}
                />
              </Link>
              {cartItems.length !== 0 ? (
                <div className="absolute -right-2.5 -top-2.5 w-5 text-white font-medium h-5 bg-primary rounded-full flex items-center justify-center">
                  {cartItems.length}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
      <main className=""> {children} </main>
      <footer className="bg-custom-black pt-[60px]">
        <div className="max-w-7xl px-3 mx-auto border-t mb-[115px]">
          <div className="grid lg:grid-cols-2 ">
            <div className="max-w-[235px]">
              <Image src="/footer-logo.svg" />
              <div className="text-white ">
                Your natural candle made for your home and for your wellness.
              </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-between py-5">
              {footerLinks.map((i, idx) => (
                <div key={idx} className="text-white font-medium space-y-6">
                  <div className="text-primary">{i.title}</div>
                  <div className="space-y-5">
                    {i.links.map((l, index) => (
                      <div key={index} className="cursor-pointer">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#E5E5E5]">
          <div className="max-w-7xl mx-auto flex justify-between py-6 text-dark-1">
            <div className="">©Candleaf All Rights Reserved. </div>
            <div className="">Designed with ❤️ by uxbly</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
