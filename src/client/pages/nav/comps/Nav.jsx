import React from "react";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../../reducers/auth";
import { useSelector } from "react-redux";
import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Search from "../../home/comps/Search";
import { useNavigate } from "react-router-dom";

export function StickyNavbar({ openDrawer }) {
  const [openNav, setOpenNav] = useState(false);
  const [logout] = useLogoutMutation();
  const user = useSelector((state) => state.auth.credentials.user) || "";

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navigate = useNavigate();
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-orange-600"
      >
        <Link to={"/"} onClick={() => setOpenNav(false)}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-orange-600"
      >
        <Link to={"/about"} onClick={() => setOpenNav(false)}>
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-orange-600"
      >
        <Link to={"/map"} onClick={() => setOpenNav(false)}>
          Map
        </Link>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-bold hover:text-orange-600"
      >
        {!user.userId && (
          <Link to={"/login"} onClick={() => setOpenNav(false)}>
            Login/Register
          </Link>
        )}
        {user.userId && (
          <Link to={"/profile"} onClick={() => setOpenNav(false)}>
            Profile
          </Link>
        )}
      </Typography>
      <li>
        {user.userId && (
          <button
            onClick={() => {
              logout();
              setOpenNav(false);
              navigate("/")
            }}
          >
            <span className="p-1 font-bold hover:text-orange-600">Logout</span>
          </button>
        )}
      </li>
      <div className="flex items-center"><Search /></div>
    </ul>
  );

  return (
    <nav className=" w-full sticky top-0 z-50 p-5 shadow-md bg-white">
      <div className="flex items-center justify-between text-blue-gray-900 h-[20px]">
        <Typography
          as={Link}
          to={"/"}
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_290,h_104/https://www.tastytablecatering.com/wp-content/uploads/2022/12/1665697050237-removebg-preview-1.png"
            alt=""
            className="h-[40px]"
          />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
      </Collapse>
    </nav>
  );
}
