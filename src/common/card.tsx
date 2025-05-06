import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title?: string;
  price?: string;
  isFeatured?: boolean;
}

const Card = ({ image, title, price }: CardProps) => {
  return (
    <motion.div
      className="relative bg-[#F4F7FA] hover:shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <h1 className="text-xl pb-2 font-semibold">{title}</h1>
        <p className="">{price}</p>
      </div>
      <div className="flex items-center justify-center">
        <img src={image} alt={title || "Product Image"} className="" />
      </div>
    </motion.div>
  );
};

export default Card;
