import { StickyNavbar } from "./pages/nav/comps/Nav";
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
import EditRecipe from "./pages/profile/edit/EditRecipe";
import Footer from "./pages/footer/Footer";
import AllRecipes from "./pages/allRecipes/AllRecipes";
import BasicMap from "./pages/map/map";
import SearchResults from "./pages/SearchResults";

import Visualize from "./pages/profile/comps/Visualize";
import Account from "./pages/profile/comps/Account";
import Saved from "./pages/profile/comps/Saved";
import RecipesRender from "./pages/profile/comps/Recipes";

export default function App() {


  return (
    <div id="app-container">
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<DisplayCategory />} />
        <Route path="/recipesubmit" element={<SubmitRecipe />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/communityboard" element={<CommunityBoard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<UserProfile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/visualize" element={<Visualize />} />
          <Route path="/recipes" element={<RecipesRender />} />
        <Route path="/about" element={<About />} />
        <Route path="/allrecipes" element={<AllRecipes />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/editrecipe/:id" element={<EditRecipe />} />
        <Route path="/map" element={<BasicMap />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}
