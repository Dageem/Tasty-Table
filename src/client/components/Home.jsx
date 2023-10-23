import Carousel from "./Carousel";
import RecentRecipes from "./RecentRecipes";
import Examples from "./Examples";

function Home() {
  return (
    <div className="w-[95%] ml-[2.5%] md:w-[95%] md:ml-[2.5%] lg:w-[70%] lg:ml-[15%]">
      <div className="my-[40px]"><Carousel /></div>
      <div className="my-[40px]"><Examples /></div>
      <div className="my-[40px]"><RecentRecipes /></div>
    </div>
  );
}

export default Home;
