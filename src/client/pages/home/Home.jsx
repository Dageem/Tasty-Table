import Carousel from "./comps/Carousel";
import RecentRecipes from "./comps/RecentRecipes";
import Examples from "./comps/Examples";
import HomeHead from "./comps/HomeHead";
import TempFeature from "./comps/TempFeature";
import Newsletter from "./comps/NewsLetter";

function Home() {
  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen lg:w-[70%] lg:ml-[15%] text-blue-gray-900">
      <div className="my-[40px] lg:my-[60px]">
        <HomeHead />
      </div>
      <div className="my-[40px] lg:my-[60px]">
        <Examples />
      </div>
      <div className="my-[40px] lg:my-[60px]">
        <Carousel />
      </div>
      <div className="my-[40px] lg:my-[60px]">
        <RecentRecipes />
      </div>
      {/* <div className="my-[40px] lg:my-[60px]">
        <Newsletter />
      </div> */}
      <div className="hidden xl:block my-[40px] mb-[4rem] lg:my-[60px]">
        <TempFeature />
      </div>
    </div>
  );
}

export default Home;
