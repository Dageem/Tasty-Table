// import React, { useState, useEffect } from "react";
// import { useEditRecipeMutation, useGetTagsQuery } from "../reducers/api";
// import { useSelector, useDispatch } from "react-redux";
// import {useParams, useNavigate} from "react-router-dom";
// import { api } from "../reducers/api"

// function EditRecipe(){
// // redux 
// const me = useSelector((state) => state.auth.credentials.user)
// const recipe = useSelector(state =>state.data.recipe);

// const { id } = useParams();
// const dispatch = useDispatch();

// // API and Edit 
// const { data, isLoading, error } = useGetTagsQuery();
// const [editRecipe] = useEditRecipeMutation();
// if (isLoading) return <div>Loading tags...</div>;
// if (error) return <div>Error loading tags!</div>;

// // Local State 
// const [name, setName] = useState("");
// const [details, setDetails] = useState("");
// const [desc, setDesc] = useState("");
// const [instructions, setInstructions] = useState("");
// const [imageUrl, setImageUrl] = useState("");
// const [image2Url, setImage2Url] = useState("");
// const [image3Url, setImage3Url] = useState("");
// const [tags, setTags] = useState([{ name: "" }]);
// const [ingredients, setIngredients] = useState([
//   { name: "", measurement: "" },
// ]);
// const [change, setChange] = useState(false)

// useEffect(() => {
//   if (id) {
//     dispatch(api.endpoints.getRecipeById.initiate(id));
//   }
// }, [id]);

// // update local state 
//   useEffect(() => {
//     if (recipe && recipe.recipetags) {
//       console.log("recipe.recipetags before setting state:", recipe.recipetags);
//       setName(recipe.name || "");
//       setDetails(recipe.details || "");
//       setDesc(recipe.desc || "");
//       setInstructions(recipe.instructions || "");
//       setImageUrl(recipe.imageUrl || "");
//       setImage2Url(recipe.image2Url || "");
//       setImage3Url(recipe.image3Url || "");
//       setTags(recipe.recipetags.map((i) => {
//         return i.tag
//     }))
//       setIngredients(recipe.Ingredient_recipe || [{ name: "", measurement: "" }]);
//     }
//   }, [recipe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const recipeData = {
//       id: id,
//       name,
//       details,
//       desc,
//       instructions,
//       imageUrl,
//       image2Url,
//       image3Url,
//       userId: me.userId,  
//       tags,
//       ingredients,
//     };

    
    
//     try {
//       const response = await editRecipe(recipeData);
//       console.log(response);
//     } catch (error) {
//       console.error("Error creating recipe:", error);
//     }
//   }; 

//   if (isLoading) return <div>Loading tags...</div>;
//   if (error) return <div>Error loading tags!</div>;

  
//   //      Toggle Logic 
//   //     // Check if the tag is already included in the tags array

//   //       // If it is, remove the tag and return a new array
//   // 
//   //  
//   //       // If it's not, add the tag and return a new array

//   const toggleTag = (tag)=>{
//     const result=tags;
//     if(result.includes(tag)){
//         const index = result.indexOf(tag);
//         result.splice(index,1);
//     }else{
//         result.push(tag);
//     }

//     setTags(result);
//     setChange(!change)
// }
// useEffect(() => {
// }, [change])




//   const navigate = useNavigate();
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
//       <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
//         <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
//           Go Back
//         </button>
//         {/* Name input */}
//         <input className="border-2 w-full rounded mb-4" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//         {/* Details input */}
//         <textarea className="border-2 h-20 w-full rounded mb-4" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Details"></textarea>
//         {/* Description input */}
//         {/* <textarea className="border-2 h-40 w-full rounded mb-4" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"></textarea> */}
//         {/* Instructions input */}
//         <textarea className="border-2 p-2 w-full h-40 rounded mb-4" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions"></textarea>
//         {/* Image URL inputs */}
//         <input className="border-2 p-2 w-full rounded mb-4" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
//         <input className="border-2 p-2 w-full rounded mb-4" value={image2Url} onChange={(e) => setImage2Url(e.target.value)} placeholder="Image 2 URL" />
//         <input className="border-2 p-2 w-full rounded mb-4" value={image3Url} onChange={(e) => setImage3Url(e.target.value)} placeholder="Image 3 URL" />
        
//         {/* Tags */}
//         {/* <div>
//           <button type="button" className="bg-green-300 text-white p-2 rounded mb-4 hover:bg-green-800" onClick={() => setTags([...tags, { name: "" }])}>
//             Add Tag
//           </button>
//           {tags.map((tag, index) => (
//             <div key={`tag-${index}`} className="flex flex-wrap -mx-3 mb-2">
//               {console.log(tag)}
//               <div className="w-full px-3 mb-6 md:mb-0">
//                 <input
//                   type="text"
//                   placeholder="Tag Name"
//                   value={tag.name}
//                   onChange={(e) => {
//                     const newTags = [...tags];
//                     newTags[index].name = e.target.value;
//                     setTags(newTags);
//                   }}
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 />
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() => {
//                     const newTags = tags.filter((_, idx) => idx !== index);
//                     setTags(newTags);
//                   }}
//                 >
//                   Remove Tag
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div> */}

//          {/* Display all available tags from the API */}
//          {data && data.map((apiTag, index) => {
//           const isSelected = tags.some(tag => tag.name === apiTag.name);
//           return (
//             <button
//               key={apiTag.id}
//               type="button"
//               className={`inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${
//                 isSelected ? 'bg-blue-500 text-white' : ''
//               }`}
//               onClick={() => toggleTag(apiTag.name)}
//             >
//               {apiTag.name}
//             </button>
//           );
//         })}
        
//         {/* Ingredients */}
//         <div>
//           <button type="button" className="bg-green-300 text-white p-2 rounded mb-4 hover:bg-green-800" onClick={() => setIngredients([...ingredients, { name: "", measurement: "" }])}>
//             Add Ingredient
//           </button>
//           {ingredients.map((ingredient, index) => (
//             <div key={`ingredient-${index}`} className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <input
//                   type="text"
//                   placeholder="Ingredient Name"
//                   value={ingredient.name}
//                   onChange={(e) => {
//                     const newIngredients = [...ingredients];
//                     newIngredients[index].name = e.target.value;
//                     setIngredients(newIngredients);
//                   }}
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <input
//                   type="text"
//                   placeholder="Measurement"
//                   value={ingredient.measurement}
//                   onChange={(e) => {
//                     const newIngredients = [...ingredients];
//                     newIngredients[index].measurement = e.target.value;
//                     setIngredients(newIngredients);
//                   }}
//                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 />
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() => {
//                     const newIngredients = ingredients.filter((_, idx) => idx !== index);
//                     setIngredients(newIngredients);
//                   }}
//                 >
//                   Remove Ingredient
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Update Recipe
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
  
//   export default EditRecipe;
  





// more code: 
// {data && data.map((apiTag, index) => {
//     const isSelected = formData.tags.some(tag => tag.name === apiTag.name);
//     return (
//     <>
//       <div className="w-full px-3 mb-6 md:mb-0">
//       <label htmlFor="currentTags" className="block text-gray-700 font-bold mb-2">Your Current Tags:</label>
//       <textarea
//         id="currentTags"
//         readOnly
//         value={formData.tags.map(tag => tag.name).join(', ')}
//         className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none"
//         />
//       </div>
//       <div className="w-full px-3 mb-6 md:mb-0">
//         <label className="block text-gray-700 font-bold mb-2">Popular Tags:</label>
//         {data.tag.map((tag) => (
//           <Tag
//             key={tag.id}
//             active={isTagSelected(tag)}
//             onClick={() => toggleTag(tag)}
//             // ... other props you might have for the Tag component
//           />
//         ))}
//       </div>
//       <button
//         key={apiTag.id}
//         type="button"
//         className={`inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${
//           isSelected ? 'bg-blue-500 text-white' : ''
//         }`}
//         onClick={() => toggleTag(apiTag.name)}
//       >
//         {apiTag.name}
//       </button>
//     </> 


// Ok, this is my current code: function EditRecipe(){
//     // redux 
//     const me = useSelector((state) => state.auth.credentials.user)
//     const recipe = useSelector(state =>state.data.recipe);
//     const [isBoot, setIsBoot] = useState(false);
    
    
//     const { id } = useParams();
//     const dispatch = useDispatch();
    
//     // // // API and Edit 
//     const { data, isLoading, error } = useGetTagsQuery();
//     const [editRecipe, { isLoading: isEditing, error: editError }] = useEditRecipeMutation();
    
//     const [formData, setFormData] = useState({
//       name: "",
//       details: "",
//       desc: "",
//       instructions: "",
//       imageUrl: "",
//       image2Url: "",
//       image3Url: "",
//       tags: [{ name: "" }],
//       ingredients: [{ name: "", measurement: "" }]
//     });
    
    
//     useEffect(() => {
//       if (id) {
//         dispatch(api.endpoints.getRecipeById.initiate(id));
//       }
//     }, [id]);
    
//     // update local state 
//     useEffect(() => {
//       if (recipe) {
//         const {
//           name,
//           details,use
//           desc,
//           instructions,
//           imageUrl,
//           image2Url,
//           image3Url,
//           recipetags,
//           Ingredient_recipe
//         }
//         = recipe;
//         console.log('Ingredient_recipe:', Ingredient_recipe);
    
//         setFormData({
//           name: name || "",
//           details: details || "",
//           desc: desc || "",
//           instructions: instructions || "",
//           imageUrl: imageUrl || "",
//           image2Url: image2Url || "",
//           image3Url: image3Url || "",
//           tags: recipetags ? recipetags.map(tagItem => tagItem.tag) : [{ name: "" }],
//           ingredients: Ingredient_recipe ? Ingredient_recipe.map(ingredientItem => ({
//             name: ingredientItem?.ingredient?.name || "Unknown Ingredient", 
//             measurement: ingredientItem.measurement || ""
//           })) : [{ name: "", measurement: "" }],
//         });
//       }
//     }, [recipe]);
    
    
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//           ...prevData,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = async (event) => {
//         event.preventDefault(); 
//         setIsBoot(true);
      
//         const updatePayload = {
//           ...formData,
//           // If the userId should be included in the update, uncomment the line below
//           userId: me.id, 
//           id: id 
//         };
      
//         try {
          
//           const updatedRecipe = await editRecipe(updatePayload).unwrap();
//           api.util.invalidateTags([{ type: 'Recipe', id: id }]);
//           // Handle the success, e.g., by showing a success message
//           // or redirecting the user
//           console.log('Edit Recipe Response:', updatedRecipe);
    
//         // After dispatching the edit action, manually trigger refetching
//         dispatch(api.endpoints.getRecipeById.initiate(id));
//           console.log('Recipe updated successfully');
//         } catch (err) {
        
//           console.error('Failed to update recipe', err);
//         }
//       };
      
    
      
//       //      Toggle Logic (retrieved from the Api)
//       //     // Check if the tag is already included in the tags array
    
//       //       // If it is, remove the tag and return a new array
//       // 
//       //  
//       //       // If it's not, add the tag and return a new array
//       const toggleTag = (tagName) => {
        
//         const updatedTags = formData.tags.includes(tagName)
//           ? formData.tags.filter(tag => tag !== tagName)
//           : [...formData.tags, tagName];
      
//         setFormData({
//           ...formData,
//           tags: updatedTags
//         });
        
//       };
    
//       const removeTag = (tagName) => {
//         const updatedTags = formData.tags.filter(tag => tag.name !== tagName);
      
//         setFormData({
//           ...formData,
//           tags: updatedTags
//         });
//       };
    
//       // const removeIng = (ingName) => {
//       //   const updatedIngs = formData.ingredients.filter(ing => ing.name !== ingName);
      
//       //   setFormData({
//       //     ...formData,
//       //     ings: updatedIngs
//       //   });
//       // };
      
    
    
    
//       const navigate = useNavigate();
//       return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
//         {isBoot ? ( <div>isBooting...</div> ) : (
//           <>
//           {isEditing && <div>Updating recipe...</div>}
//           {isLoading && <div>Loading tags...</div>}
//           {error && <div>Error loading tags!</div>}
//           {!recipe && <div>Loading recipe...</div>}
//         {!isLoading && !error && recipe && !isEditing && (
//           <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
//             <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
//               Go Back
//             </button>
          
//             <input 
//               name="name"
//               className="border-2 w-full rounded mb-4" 
//               value={formData.name} 
//               onChange={handleChange} 
//               placeholder="Name" 
//             />
//             <textarea 
//               name="details"
//               className="border-2 h-20 w-full rounded mb-4" 
//               value={formData.details} 
//               onChange={handleChange} 
//               placeholder="Details"
//             ></textarea>
//               <textarea 
//               name="description"
//               className="border-2 h20 w-full rounded mb-4"
//               value={formData.desc}
//               onChange={handleChange}
//               placeholder="description"
//               />
//               <input 
//               name="imageUrl"
//               className="border-2 w-full rounded mb-4"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               placeholder= "imageUrl"
//               />
//               <input 
//               name="image2Url"
//               className="border-2 w-full rounded mb-4"
//               value={formData.image2Url}
//               onChange={handleChange}
//               placeholder="image2Url"
//               />
//               <input 
//               name="image3Url"
//               className="border-2 w-full rounded mb-4"
//               value={formData.image3Url}
//               onChange={handleChange}
//               placeholder="image3Url"
//               />
          
    
//              {/* Display all available tags from the API */}
             
//             {/* Section for Your Current Tags */}
           
//             <div className="w-full px-3 mb-6 md:mb-0">
//                   <label htmlFor="currentTags" className="block text-gray-700 text-sm font-bold mb-2">
//                     Your Current Tags:
//                   </label>
//                   <div className="flex flex-wrap gap-2 p-3 bg-gray-200 rounded">
//                     {formData.tags.map((tag, index) => (
//                       <div key={index} className="relative group">
//                         <button
//                           type="button"
//                           className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center"
//                           onClick={() => removeTag(tag.name)}
//                         >
//                           &ndash;
//                         </button>
//                         <div className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
//                           {tag.name}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
    
//             {/* Section for Popular Tags */}
//             {data && (
//               <div className="w-full px-3 mb-6 md:mb-0">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Popular Tags (click to add or remove):
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {data.map((apiTag) => {
//                     const isSelected = formData.tags.some(tag => tag.name === apiTag.name);
//                     return (
//                       <button
//                         key={apiTag.id}
//                         type="button"
//                         className={`px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${isSelected ? 'bg-blue-500 text-white' : ''}`}
//                         onClick={() => toggleTag(apiTag)}
//                       >
//                         {apiTag.name}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
    
//             <EditRecipeIngredients
//               ingredients={formData.ingredients}
//               setIngredients={(newIngredients) =>
//                 setFormData({ ...formData, ingredients: newIngredients })
//               }
//             />
    
            
//             {/* Submit Button */}
//                  <div className="flex justify-center">
//                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                      Update Recipe
//                    </button>
//                 </div>
//             </form>
//             )}
//           </>
//         )}
//       </div>      
//       );
//     }
      
//       export default EditRecipe;


// import React, { useState, useEffect } from "react";
// import { useGetTagsQuery } from "../../../reducers/api";
// import { useEditRecipeMutation } from "../../../reducers/api";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {useParams, useNavigate} from "react-router-dom";
// import EditRecipeIngredients from "./comps/EditRecipeIngredients"

// import { api } from "../../../reducers/api"


// function EditRecipe() {
//   // Redux state and hooks
//   const me = useSelector((state) => state.auth.credentials.user);
//   const recipe = useSelector((state) => state.data.recipe);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Local component state
//   const [isBoot, setIsBoot] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [hasSubmitted, setHasSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     details: '',
//     desc: '',
//     instructions: '',
//     imageUrl: '',
//     image2Url: '',
//     image3Url: '',
//     tags: [{ name: '' }],
//     ingredients: [{ name: '', measurement: '' }],
//   });

//   // API calls and mutations
//   const { data, isLoading, error } = useGetTagsQuery();
//   const [editRecipe, { isLoading: isEditing, error: editError }] = useEditRecipeMutation();

//   // Fetch recipe data on component mount or id change
//   useEffect(() => {
//     if (id && !hasSubmitted) {
//       setIsBoot(true);
//       dispatch(api.endpoints.getRecipeById.initiate(id))
//         .unwrap()
//         .then((data) => {
//           // Handle success if needed
//         })
//         .catch((error) => {
//           // Handle error if needed
//         })
//         .finally(() => {
//           setIsBoot(false); // End loading state
//         });
//     }
//   }, [id, dispatch, hasSubmitted]);

//   // Update local state when recipe changes
//   useEffect(() => {
//     if (recipe && !hasSubmitted) {
//       const {
//         name = '',
//         details = '',
//         desc = '',
//         instructions = '',
//         imageUrl = '',
//         image2Url = '',
//         image3Url = '',
//         recipetags = [],
//         Ingredient_recipe = []
//       } = recipe;

//       setFormData({
//         name,
//         details,
//         desc,
//         instructions,
//         imageUrl,
//         image2Url,
//         image3Url,
//         tags: recipetags.map((tagItem) => ({ name: tagItem.tag })),
//         ingredients: Ingredient_recipe.map((ingredientItem) => ({
//           name: ingredientItem.ingredient?.name || '',
//           measurement: ingredientItem.measurement || '',
//         })),
//       });
//     }
//   }, [recipe, hasSubmitted]);

//   // Handlers for form changes and submission
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const toggleTag = (apiTag) => {
//     const tagExists = formData.tags.some((tag) => tag.name === apiTag.name);
//     const updatedTags = tagExists
//       ? formData.tags.filter((tag) => tag.name !== apiTag.name)
//       : [...formData.tags, { name: apiTag.name }];

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       tags: updatedTags,
//     }));
//   };

//   const removeTag = (tagName) => {
//     const updatedTags = formData.tags.filter((tag) => tag.name !== tagName);

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       tags: updatedTags,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsBoot(true);
//     setIsSubmitting(true);

//     const updatePayload = {
//       ...formData,
//       userId: me.id,
//       id: id,
//     };

//     try {
//       const updatedRecipe = await editRecipe(updatePayload).unwrap();
//       api.util.invalidateTags([{ type: 'Recipe', id }]);
//       setHasSubmitted(true);
//       // Navigate to some route if needed after success
//       navigate('/some-success-route');
//     } catch (error) {
//       // Handle the error, maybe set an error message in state to display to the user
//     } finally {
//       setIsBoot(false);
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
//     {isBoot ? ( <div>isBooting...</div> ) : (
//       <>
//       {isEditing && <div>Updating recipe...</div>}
//       {isLoading && <div>Loading tags...</div>}
//       {error && <div>Error loading tags!</div>}
//       {!recipe && <div>Loading recipe...</div>}
//     {!isLoading && !error && recipe && !isEditing && (
//       <form className="bg-white p-8 rounded-lg shadow-md w-7/10 mx-auto" onSubmit={handleSubmit}>
//         <button className="border-2 p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50" onClick={() => navigate("/profile")}>
//           Go Back
//         </button>
      
//         <input 
//           name="name"
//           className="border-2 w-full rounded mb-4" 
//           value={formData.name} 
//           onChange={handleChange} 
//           placeholder="Name" 
//         />
//         <textarea 
//           name="details"
//           className="border-2 h-20 w-full rounded mb-4" 
//           value={formData.details} 
//           onChange={handleChange} 
//           placeholder="Details"
//         ></textarea>
//           <textarea 
//           name="description"
//           className="border-2 h20 w-full rounded mb-4"
//           value={formData.desc}
//           onChange={handleChange}
//           placeholder="description"
//           />
//           <input 
//           name="imageUrl"
//           className="border-2 w-full rounded mb-4"
//           value={formData.imageUrl}
//           onChange={handleChange}
//           placeholder= "imageUrl"
//           />
//           <input 
//           name="image2Url"
//           className="border-2 w-full rounded mb-4"
//           value={formData.image2Url}
//           onChange={handleChange}
//           placeholder="image2Url"
//           />
//           <input 
//           name="image3Url"
//           className="border-2 w-full rounded mb-4"
//           value={formData.image3Url}
//           onChange={handleChange}
//           placeholder="image3Url"
//           />
      

//          {/* Display all available tags from the API */}
         
//         {/* Section for Your Current Tags */}
       
//         <div className="w-full px-3 mb-6 md:mb-0">
//               <label htmlFor="currentTags" className="block text-gray-700 text-sm font-bold mb-2">
//                 Your Current Tags:
//               </label>
//               <div className="flex flex-wrap gap-2 p-3 bg-gray-200 rounded">
//                 {formData.tags.map((tag, index) => (
//                   <div key={index} className="relative group">
//                     <button
//                       type="button"
//                       className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center"
//                       onClick={() => removeTag(tag.name)}
//                     >
//                       &ndash;
//                     </button>
//                     <div className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
//                       {tag.name}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//         {/* Section for Popular Tags */}
//         {data && (
//           <div className="w-full px-3 mb-6 md:mb-0">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Popular Tags (click to add or remove):
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {data.map((apiTag) => {
//                 const isSelected = formData.tags.some(tag => tag.name === apiTag.name);
//                 return (
//                   <button
//                     key={apiTag.id}
//                     type="button"
//                     className={`px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 ${isSelected ? 'bg-blue-500 text-white' : ''}`}
//                     onClick={() => toggleTag(apiTag)}
//                   >
//                     {apiTag.name}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         <EditRecipeIngredients
//           ingredients={formData.ingredients}
//           setIngredients={(newIngredients) =>
//             setFormData({ ...formData, ingredients: newIngredients })
//           }
//         />

        
//         {/* Submit Button */}
//              <div className="flex justify-center">
//                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isSubmitting}>
//                 {isSubmitting ? 'Updating...' : 'Update Recipe'}
//                </button>
//             </div>
//         </form>
//         )}
//       </>
//     )}
//   </div>      
//   );
// }
  
//   export default EditRecipe;