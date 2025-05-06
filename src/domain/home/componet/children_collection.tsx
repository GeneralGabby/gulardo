import { motion, Variants } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { childrenCollectionsData } from "../../../lib/data";
import Card from "../../../common/card";

// Animation variants for the parent container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 0.5, // Initial delay before animations start
    },
  },
};

// Animation variants for each card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // Start from the bottom
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function ChildrenCollection() {
  return (
    <motion.div
      className="container mx-auto mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="space-y-4 mb-12 flex justify-between"
        variants={cardVariants}
      >
        <div></div>
        <div className="text-right">
          <h2 className="text-2xl">
            <span className="underline text-4xl underline-offset-8 font-bold decoration-pink-500/30">
              Children’s
            </span>{" "}
            Collections
          </h2>
          <p className="max-w-2xl py-6">
            We provide you with the largest trending wears collection for any
            season. You can choose a classy design according to your preferences
            and send an email right to us. We are super fast and we update
            immediately.
          </p>
        </div>
      </motion.div>

      {/* Bento Grid Section */}
      <motion.div className="grid md:grid-cols-3 gap-6 p-6">
        {/* Left Column */}
        <motion.div className="space-y-6">
          {childrenCollectionsData.slice(0, 2).map((item, _index) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Card image={item.image} title={item.title} price={item.price} />
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Column */}
        <motion.div className="items-center justify-center md:space-y-6 md:mt-16">
          <motion.div variants={cardVariants}>
            <Card
              image={childrenCollectionsData[4].image}
              title={childrenCollectionsData[4].title}
              price={childrenCollectionsData[4].price}
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <button className="hidden bg-black text-white rounded-full text-sm font-semibold md:flex items-center justify-center p-4 w-full hover:bg-gray-800 transition">
              EXPLORE MORE PRODUCTS <FaArrowRightLong className="ml-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="space-y-6 md:-mt-16">
          {childrenCollectionsData.slice(2, 4).map((item, _index) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Card image={item.image} title={item.title} price={item.price} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Button */}
        <motion.div variants={cardVariants}>
          <button className="lg:hidden bg-black text-white rounded-full text-sm font-semibold flex items-center justify-center p-4 w-full hover:bg-gray-800 transition">
            EXPLORE MORE PRODUCTS <FaArrowRightLong className="ml-4" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
