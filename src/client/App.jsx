// import { Button } from "@material-tailwind/react";
import SingleRecipe from "./components/SingleRecipe";
import SubmitRecipe from "./components/SubmitRecipe";
import { Route, Routes } from "react-router-dom";

export default function App() {
  // const products = useGetProductsQuery();

  // const [load, setLoad] = useState(true);

  // useEffect(() => {
  //    setLoad(products.isLoading);
  // }, [products]);

  const loadedRouter = (
     <>
        <Routes>
           {/* <Route path="/recipe/:id" element={<SingleRecipe/>} /> */}
           <Route path="/recipesubmit" element={<SubmitRecipe />} />
        </Routes>
     </>
  );

  return loadedRouter;
}
