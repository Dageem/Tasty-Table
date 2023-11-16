import React, { useState, useEffect } from "react";
// import {
//   useGetPopTagsQuery,
//   useGetRecipeByIdQuery,
//   useGetTagsQuery,
// } from "../../../reducers/auth";
import { useEditMutation } from "../../../reducers/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function AuthFillOut() {
  const me = useSelector((state) => state.auth.credentials.user);
  const navigate = useNavigate();
  const [edit, { isLoading: isEditing, error: editError }] = useEditMutation();
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  // Initialize form data
  useEffect(() => {
    if (me) {
      setFormData({
        username: me.username || '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      });
    }
  }, [me]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.error("New passwords do not match!");
      return;
    }
  
    try {
      await edit({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
        username: formData.username,
        id: me.userId,
      }).unwrap();
      toast.success("Password updated successfully!");
      navigate('/profile');
    } catch (error) {
        // console.error('Failed to update:', error);
        // Check for a specific status code in the error
        if (error.status === 409) {
          toast.error("Username already taken!");
        } else if (error.status === 401) {
          toast.error("Current password is incorrect.");
        } else {
          toast.error(error.data?.message || "Failed to update profile");
        }
      }
    };
  

  if (isEditing) return <div>Loading...</div>;
//   if (editError) return <div>Error: Failed to Update Password! </div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
      {/* <ToastContainer /> */}
      <form className="bg-white p-8 rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2" onSubmit={handleSubmit}>
            <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-green-200" onClick={() => navigate("/profile")}>
              Go Back
            </button>
        <h1 className="text-xl mb-4 font-semibold p-2">Username:</h1>
        <input
          name="username"
          className="border-2 w-full rounded mb-4"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <h1 className="text-xl mb-4 font-semibold">Please Enter Your Current Password:</h1>
        <input
          type="password"
          name="currentPassword"
          className="border-2 w-full rounded mb-4"
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder="Current Password"
        />
        <h1 className="text-xl mb-4 font-semibold">Please Enter Your New Password:</h1>
        <input
          type="password"
          name="newPassword"
          className="border-2 w-full rounded mb-4"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="New Password"
        />
        <h1 className="text-xl mb-4 font-semibold">Please Confirm Your New Password:</h1>
        <input
          type="password"
          name="confirmNewPassword"
          className="border-2 w-full rounded mb-4"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          placeholder="Confirm New Password"
        />
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="relative w-full p-2 text-white-600 bg-blue-500 border-2 border-indigo-600 rounded-full shadow-2xl transition-all duration-500 ease-out text-white overflow-hidden group hover:bg-blue-gray-700"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthFillOut;
