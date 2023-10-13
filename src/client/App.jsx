
import { StickyNavbar } from "./components/Nav";
import { DrawerWithNavigation } from "./components/Drawer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayCategory from "./components/DisplayCategory";


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
          <Route path="/categories" element={<DisplayCategory />} />
      </Routes>
    </div>
  );
}
