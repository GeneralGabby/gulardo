import { motion } from "framer-motion";

interface BentoCardProps {
  image: string;
  title?: string;
  price?: string;
  isFeatured?: boolean;
}

const BentoCard = ({ image, title, price, isFeatured }: BentoCardProps) => {
  return (
    <motion.div
      className="relative bg-[#f4f7fa] hover:shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {isFeatured && (
        <div className="p-4 flex justify-between items-start">
          <div>
            <h1 className="text-xl pb-2 font-semibold">{title}</h1>
            <p className="">{price}</p>
          </div>
          <div className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
            New Arrival
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <img src={image} alt={title || "Product Image"} className="" />
      </div>
    </motion.div>
  );
};

export default BentoCard;
