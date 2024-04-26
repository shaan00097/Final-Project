import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useContext, useEffect, useState } from "react";
import darkenColor from "../../CommonComponents/ColorDarker.js";
import axios from "../../api/axios";
import Spinner from "../../CommonComponents/SpinFunction";
import { MyContext } from "../..";
import { useSnackbar } from "../../CommonComponents/SnackBarContext";

export default function UserPage() {
  const [color, setColor] = useState("#1F8A70");
  const [foundUser, setUserState] = useState(false);
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser,updateUserID ,userID,setLocation,userlocation} = useContext(MyContext);
  const {openSnackbar, closeSnackbar} = useSnackbar();

  let darkColor = color;

  useEffect(() => {
    axios
      .get("/user/userDashBoard")
      .then((response) => {

        localStorage.setItem('userInfo', JSON.stringify(response));
        setUserState(true);
        updateUser(response.data.name);
        setUser(response.data.name);
        updateUserID(response.data.id)
        console.log(userID)
        setIsLoading(true);
        
      })
      .catch((error) => {
        setUserState(false);
        setUser("");
        setIsLoading(false);
      });
  }, []);

  darkColor = darkenColor(darkColor, 40);

  return (
    <>
      {!foundUser ? (
        Spinner(isLoading, "Page Not Found 404", setIsLoading, "none")
      ) : (
        <>
          <Navbar
            color={color}
            hoverColor={darkColor}
            setColor={setColor}
            name={user}
          />
          <Sidebar
            bordeColor={darkColor}
            backColor={color}
            backHoverColor={darkenColor(darkColor, 20)}
          />
        </>
      )}
    </>
  );
}
