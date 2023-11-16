import { useParams } from "react-router-dom";
import {
  useGetRecipeByIdQuery,
  useSaveRecipeMutation,
  api,
} from "../../../reducers/api";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserId } from "../../../reducers/auth";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function SingleHead() {
  const { id } = useParams();
  const { data: recipe } = useGetRecipeByIdQuery(id);
  const [saveRecipe] = useSaveRecipeMutation();
  const userId = useSelector(selectCurrentUserId);

  const backupImage =
    "https://hexclad.com/cdn/shop/files/Hexclad_13Pc_8Qt_Lid_FryPanHandles_BLACK_1024x1024.jpg?v=1686775048";

  const handleSaveRecipe = async () => {
    if (!userId) {
      console.log("User not logged in");
      return;
    }
    try {
      await saveRecipe({ userId, recipeId: recipe.id });
      console.log("Recipe saved!");
      toast.success("Recipe saved successfully!");
    } catch (error) {
      console.error("Failed to save recipe", error);
    }
  };

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 lg:grid lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h1 className="text-3xl  font-bold mb-3">{recipe.name}</h1>
          <p className="text-xl  mb-5">{recipe.details}</p>
          <div className="">
            <button
              onClick={handleSaveRecipe}
              className="text-blue-gray-900 font-semibold border border-blue-gray-900 border-solid py-2 px-2 mr-2 hover:text-white hover:bg-blue-gray-900"
            >
              Save Recipe
            </button>
            {/* <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            /> */}
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="col-span-1 flex items-center justify-center text-center">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQH10ABaP0vlPw/profile-displayphoto-shrink_800_800/0/1566569501300?e=2147483647&v=beta&t=4oURRlcat1xowixQtOT6p1JmYm5rE2mW2WiAY3zaPqk"
              alt=""
              className="h-[150px] rounded-full"
            />
            <h1 className="text-md ml-2">
              <strong className="text-md md:text-lg">
                Guaranteed delicious!
              </strong>{" "}
              <br />
              <p className="italic">
                "We think everybody should be able to enjoy restaurant quality
                meals at home" <strong>-Chef Daniel</strong>
              </p>
            </h1>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-12">
        <img
          src={recipe.imageUrl || backupImage}
          alt="recipe-image"
          onError={(e) => {
            e.target.src = backupImage;
          }}
          className="col-span-2 w-full h-[400px] md:h-[600px] xl:h-[800px]"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="col-span-1 hidden lg:block">
          <a
            href="https://www.amazon.com/Cooking-Dummies-Computer-Tech/dp/0764552503/ref=asc_df_0764552503/?tag=hyprod-20&linkCode=df0&hvadid=265933302123&hvpos=&hvnetw=g&hvrand=12173538260040523448&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9051588&hvtargid=pla-583583437151&psc=1&mcid=7b1da4703a063cf49a2e4c9bfb31f950"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="w-full h-[300px] xl:h-[400px] bg-cover bg-center relative hover:opacity-70 cursor-pointer"
              style={{
                backgroundImage: `url(https://cookdinehost.com/cdn/shop/products/WEB_AD_Cookbook-promo-photo-16.jpg?v=1692339216&width=1200)`,
              }}
            >
              <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl text-center text-black rounded p-1 w-[55%] bg-white opacity-80 font-bold mt-4">
                Our Cookbook
              </h1>
            </div>
          </a>
          <Link to="/allrecipes">
            <div
              className="w-full h-[300px] xl:h-[400px] bg-cover bg-center relative hover:opacity-70 cursor-pointer"
              style={{
                backgroundImage: `url(https://assets3.thrillist.com/v1/image/3130793/828x1500/flatten;scale;webp=auto;jpeg_quality=60.jpg)`,
              }}
            >
              <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl text-center text-black rounded p-1 w-[55%] bg-white opacity-80 font-bold mt-4">
                All Recipes
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
