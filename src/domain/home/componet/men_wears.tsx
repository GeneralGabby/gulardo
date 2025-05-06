import { motion, Variants } from "framer-motion";
import BentoCard from "../../../common/bento_card";
import { menWearsData } from "../../../lib/data";

// Animation variants for the parent container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};

// Animation variants for each card
const cardVariants: Variants = {
  hidden: (custom: number) => ({
    opacity: 0,
    x: custom % 2 === 0 ? -50 : 50,
    y: custom % 3 === 0 ? 50 : 0,
    rotate: custom % 4 === 0 ? -10 : 10,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function MenWears() {
  return (
    <motion.div
      className="container mx-auto -mt-20"
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="grid md:grid-cols-3 gap-6 p-6">
        {menWearsData.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            className={item.id === 6 ? "md:col-span-1" : ""}
          >
            <BentoCard
              image={item.image}
              title={item.title}
              price={item.price}
              isFeatured={item.isFeatured}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
