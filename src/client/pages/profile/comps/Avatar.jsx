import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Button from "./Button";
import { useEditMutation } from "../../../reducers/auth";
import { useGetUsersQuery } from "../../../reducers/api";
import { data } from "autoprefixer";
import { useParams } from "react-router-dom";

function Avatar({ mod }) {
  const { id } = useParams();
  const me = useSelector((state) => state.auth.credentials.user);
  const [edit, { isLoading }] = useEditMutation();
  const fileButton = useRef(null);
  const {
    data: user,
    isLoading: loading,
    isError,
    refetch,
  } = useGetUsersQuery({ refetchOnMountOrArgChange: true });
  //   const [loadings, setLoading] = useState(false);
  //   const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file); 
  
    const base64 = await convertBase64(file);
    console.log("Converted base64:", base64); 
  
    edit({ image: base64 })
      .unwrap()
      .then((response) => {
        console.log("Edit response:", response); 
        refetch(); 
      })
      .catch((error) => {
        console.error("Edit error:", error); 
      });
  };
  
  

  if (loading) {
    return <div>Loading...</div>;
  }

  //   useEffect(() => {
  //     if (loading) {
  //       setLoading(true);
  //     } else if (user && user.image) {
  //       dispatch(edit(user.image)); // Set initial comments to Redux state
  //       setLoad(false); // Set load to false after initial comments are loaded
  //       setLoading(false); // Set loading to false after comments are loaded
  //     }
  //   }, [user, loading, dispatch]);

  //   console.log(me);
  return (
    <>
    {console.log("Current user state:", me)}
      <div className={"avatar"}>
        {!me.image ? (
          <FontAwesomeIcon icon={faUser} className="text-5xl" />
        ) : (
          <img
            alt={"profile"}
            src={`${me.image}`}
            style={{ width: "180px", height: "180px" }}
          />
        )}
      </div>
      <div className="text-blue-gray-900 flex justify-center text-xs underline">
        {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
        {mod && (
          <input
            ref={fileButton}
            type={"file"}
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png"
            onChange={uploadImage}
          />
        )}
        {mod && (
          <Button
            click={() => fileButton.current.click()}
            vl={"Change Image"}
            theme={"submit"}
          />
        )}
      </div>
    </>
  );
}

export default Avatar;
