import React, { useState } from "react";
import { useRegisterMutation, useLoginMutation } from "../../reducers/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  const sendRegister = async () => {
    return navigate("/register");
  };

  const handleLogin = async () => {
    try {
      await login({ username, password }).unwrap();
      setSuccessMessage("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed!");
    }

    setTimeout(() => {
      setUsername("");
      setPassword("");
      setSuccessMessage("");
      setErrorMessage("");
    }, 2000);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-21 w-auto"
          src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_290,h_104/https://www.tastytablecatering.com/wp-content/uploads/2022/12/1665697050237-removebg-preview-1.png"
          alt="Tasty-Table"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              autoComplete="username"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
{/*             <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div> */}
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleLogin}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
          {/* <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            /> */}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <button className="butt" onClick={sendRegister}>
              Register
            </button>
          </a>
        </p>
      </div>
      <div>
        {successMessage && (
          <div className="success-alert">{successMessage}</div>
        )}
        {errorMessage && <div className="error-alert">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
