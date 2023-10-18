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
import About from "./components/About";
import RegisterPage from "./components/Register";


export default function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>

        <StickyNavbar openDrawer={openDrawer} />
        <DrawerWithNavigation open={open} closeDrawer={closeDrawer} />

      <Routes>
          <Route path="/communityboard" element={<CommunityBoard />} />
          <Route path="/categories/:category" element={<DisplayCategory />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipesubmit" element={<SubmitRecipe />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
