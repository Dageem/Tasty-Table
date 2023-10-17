import { StickyNavbar } from "./components/Nav";
import { DrawerWithNavigation } from "./components/Drawer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayCategory from "./components/DisplayCategory";
import SubmitRecipe from "./components/SubmitRecipe";
import Home from "./components/Home";
import CommunityBoard from "./components/CommunityBoard";
import LoginPage from "./components/Login";
import RecentRecipes from "./components/RecentRecipes";



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
          <Route path="/temp" element={<RecentRecipes />} />
      </Routes>
    </div>
  );
}
