import { memo } from "react";
import { Product } from "../myTypes/types";
import { Image } from "@chakra-ui/react";

const ProductItem: React.FC<{ product: Product }> = memo(({ product }) => {
  return (
    <div
      key={product.id}
      className="mx-auto bg-gray-50 shadow-md rounded-md overflow-hidden cursor-pointer"
    >
      <Image src={`./products/${product.img}.png`} alt="" />
      <div className="font-medium bg-white py-2.5 px-6">
        <div className="text-left">{product.title}</div>
        <div className="text-right text-primary">{product.price}$</div>
      </div>
    </div>
  );
});

export default ProductItem;
