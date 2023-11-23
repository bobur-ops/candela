import { Image } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
  id: number;
  name: string;
  text: string;
  stars: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ id, name, text, stars }) => {
  return (
    <div className=" w-full max-w-[350px] bg-white shadow-md rounded-md p-8">
      <div className="mb-3 w-20 mx-auto h-20 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src={`./testimonials/${id}.png`}
          className="object-cover object-center"
        />
      </div>
      <div className="flex justify-center gap-1 mb-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar
            key={i}
            fontSize={28}
            className={`${stars > i ? "text-primary" : "text-gray-200"} `}
          />
        ))}
      </div>
      <div className="font-medium text-center text-lg mb-1.5">{text}</div>
      <div className="text-dark-1 text-center">{name}</div>
    </div>
  );
};

export default Testimonial;
