import { IconButton } from "@material-tailwind/react";
import { HiMoon } from "react-icons/hi";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import { FaSun } from "react-icons/fa";
import useDark from "../../Hooks/useDark";

import { ProfileMenu } from "../ProfileMenu/ProfileMenu";

const NavBar = () => {
     
      const {theme , toggleTheme} = useContext(ThemeContext)
      const dark = useDark()
      console.log(theme)
     
  return (
    <div className={`   border-b ${dark?"border-b-gray-700  theme-card-bg":'border-gray-300 theme-card-bg'} `}>
      <div className=" w-full   flex justify-between items-center">
        <div className=" h-full w-fit">
          <img
             
            className={` w-full h-14 ${dark?' invert brightness-0':' '}`}
            src="https://i.imgur.com/K5EaXia.png"
            alt=""
          />
        </div>
        <div className=" h-full w-fit mx-5 flex items-center gap-2">
            <div>
                  <IconButton onClick={toggleTheme} variant="text" className=" rounded-full cursor-pointer">{theme==="light"?<HiMoon className=" text-2xl"/>:<FaSun className=" text-2xl text-text-dark"/>}</IconButton>
            </div>
            <div className=" cursor-pointer ">
                

                  <ProfileMenu></ProfileMenu>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
