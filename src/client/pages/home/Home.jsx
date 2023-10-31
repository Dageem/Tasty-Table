import Carousel from "./comps/Carousel";
import RecentRecipes from "./comps/RecentRecipes";
import Examples from "./comps/Examples";
import HomeHead from "./comps/HomeHead";

function Home() {
  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900">
      <div className="my-[40px]">
        <HomeHead />
      </div>
      <div className="my-[40px]">
        <Examples />
      </div>
      <div className="my-[40px]">
        <Carousel />
      </div>
      <div className="my-[40px]">
        <RecentRecipes />
      </div>
    </div>
  );
}

export default Home;
