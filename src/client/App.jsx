import { StickyNavbar } from "./components/Nav";
import { DrawerWithNavigation } from "./components/Drawer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayCategory from "./components/DisplayCategory";
import SubmitRecipe from "./components/SubmitRecipe";
import Home from "./components/Home";
import CommunityBoard from "./components/CommunityBoard";
import LoginPage from "./components/Login";
import UserProfile from "./components/UserProfile";
import RecentRecipes from "./components/RecentRecipes";
import SingleRecipe from "./components/SingleRecipe";
import About from "./components/About";
import RegisterPage from "./components/Register";
import EditRecipe from "./components/EditRecipe";
import Footer from "./components/Footer";
import AllRecipes from "./components/AllRecipes";
import Search from "./components/Search";


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
        <Route path="/editrecipe" element={<EditRecipe />} />
        <Route path="/temp" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}
