import { StickyNavbar } from "./pages/nav/comps/Nav";
import { DrawerWithNavigation } from "./pages/nav/comps/Drawer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayCategory from "./pages/displayCategory/DisplayCategory";
import SubmitRecipe from "./pages/SubmitRecipe";
import Home from "./pages/home/Home";
import CommunityBoard from "./pages/communityBoard/CommunityBoard";
import LoginPage from "./pages/loginRegister/Login";
import UserProfile from "./pages/profile/UserProfile";
import SingleRecipe from "./pages/singleRecipe/SingleRecipe";
import About from "./pages/about/About";
import RegisterPage from "./pages/loginRegister/Register";
import EditRecipe from "./pages/EditRecipe";
import Footer from "./pages/footer/Footer";
import AllRecipes from "./pages/allRecipes/AllRecipes";
import SearchResults from "./pages/SearchResults";

export default function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div id="app-container">
      <StickyNavbar openDrawer={openDrawer} />
      <DrawerWithNavigation open={open} closeDrawer={closeDrawer} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<DisplayCategory />} />
        <Route path="/recipesubmit" element={<SubmitRecipe />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/communityboard" element={<CommunityBoard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/allrecipes" element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/editrecipe/:id" element={<EditRecipe />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}
