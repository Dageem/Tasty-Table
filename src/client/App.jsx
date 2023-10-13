import { StickyNavbar } from "./components/Nav";
import { DrawerWithNavigation } from "./components/Drawer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayCategory from "./components/DisplayCategory";
import SubmitRecipe from "./components/SubmitRecipe";
import CommunityBoard from "./components/CommunityBoard";
import LoginPage from "./components/Login";


export default function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <div>
        <StickyNavbar openDrawer={openDrawer} />
        <DrawerWithNavigation open={open} closeDrawer={closeDrawer} />
      </div>
      <Routes>
          <Route path="/communityboard" element={<CommunityBoard />} />
          <Route path="/categories" element={<DisplayCategory />} />
          <Route path="/recipesubmit" element={<SubmitRecipe />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
