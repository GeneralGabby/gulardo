import ChildrenCollection from "../componet/children_collection";
import Hero from "../componet/hero";
import MenWears from "../componet/men_wears";
import TrendingCollection from "../componet/trending_collection";

export default function HomeView() {
  return (
    <>
      <Hero />
      <MenWears/>
      <TrendingCollection />
      <ChildrenCollection />
    </>
  );
}
