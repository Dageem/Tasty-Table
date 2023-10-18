import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../reducers/api";
import flags from "../assets/flags.png"

export default function SingleRecipe() {
   const { id } = useParams();
   const { data, isLoading } = useGetRecipeByIdQuery(id);
   const navigate = useNavigate();

   const flagBorderStyle = {
      borderImageSource: "../assets/flags.png",
      borderImageRepeat: "repeat",
      borderImageSlice: 30,
      borderImageWidth: "4px"
   };

   return (
      <div className="min-h-screen bg-gray-100 py-5 px-4 sm:px-6 lg:px-8">
         {isLoading ? (
            <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
         ) : !data ? (
            <h1>Recipe Not Found</h1>
         ) : (  
            <div className="bg-white p-8 rounded-xl shadow-md w-full" style={flagBorderStyle}>
                <button 
                   className="mb-6 bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600"
                   onClick={() => navigate("/")}
                >
                   Go Back
                </button>
                <h1 className="text-4xl font-bold mb-6">{data.name}</h1>
                <p className="mb-6 text-xl text-gray-700">{data.details}</p>
                <p className="mb-6 text-xl text-gray-700">{data.desc}</p>
                <p className="mb-6 text-xl text-gray-700">{data.instructions}</p>
                <img
                    className="h-auto w-4/5 ml-4 rounded-lg object-cover object-center mt-6"
                    src={data.imageUrl}
                    alt="Recipe image"
                />
            </div>
         )}
      </div>
   );
}
