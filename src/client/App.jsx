import { Button } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import CommunityBoard from "./components/CommunityBoard";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/communityboard" element={<CommunityBoard />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>
    </div>
  );
}
