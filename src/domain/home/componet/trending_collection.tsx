import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { trendingCollectionsData } from "../../../lib/data";
import Card from "../../../common/card";

export default function TrendingCollections() {
  return (
    <motion.div
      className="container mx-auto mt-10 md:mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Header Section */}
      <div className="space-y-4 px-4 md:px-0 mb-12">
        <h2 className="text-2xl">
          <span className="underline text-4xl underline-offset-8 font-bold decoration-pink-500/30">
            Trending’s
          </span>{" "}
          Collections
        </h2>
        <p className="max-w-2xl py-6">
          We provide you with the largest trending wears collection for any
          season. You can chose a classy design according to your preferences
          and send an email right to us. We are super fast and we update
          immediately.
        </p>
      </div>

      {/* Bento Grid Section */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {/* Left Column */}
        <div className="space-y-6">
          <Card
            image={trendingCollectionsData[0].image}
            title={trendingCollectionsData[0].title}
            price={trendingCollectionsData[0].price}
          />
          <Card
            image={trendingCollectionsData[1].image}
            title={trendingCollectionsData[1].title}
            price={trendingCollectionsData[1].price}
          />
        </div>

        {/* Middle Column */}
        <div className="items-center justify-center space-y-6 md:mt-16">
          <Card
            image={trendingCollectionsData[4].image}
            title={trendingCollectionsData[4].title}
            price={trendingCollectionsData[4].price}
          />
          <button className="bg-black text-white rounded-full text-sm font-semibold flex items-center justify-center p-4 w-full hover:bg-gray-800 transition">
            EXPLORE MORE PRODUCTS <FaArrowRightLong className="ml-4" />
          </button>
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:-mt-16">
          <Card
            image={trendingCollectionsData[2].image}
            title={trendingCollectionsData[2].title}
            price={trendingCollectionsData[2].price}
          />
          <Card
            image={trendingCollectionsData[3].image}
            title={trendingCollectionsData[3].title}
            price={trendingCollectionsData[3].price}
          />
        </div>
      </div>
    </motion.div>
  );
}
