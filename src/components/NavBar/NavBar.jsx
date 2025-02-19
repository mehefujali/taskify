import { IconButton } from "@material-tailwind/react";
import { HiMoon } from "react-icons/hi";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";

const NavBar = () => {
      const {theme , toggleTheme} = useContext(ThemeContext)
      console.log(theme)
  return (
    <div className="   border-b border-b-gray-300 ">
      <div className=" w-full   flex justify-between items-center">
        <div className=" h-full w-fit">
          <img
            className=" w-full h-14"
            src="https://i.imgur.com/K5EaXia.png"
            alt=""
          />
        </div>
        <div className=" h-full w-fit mx-5 flex items-center gap-2">
            <div>
                  <IconButton onClick={toggleTheme} variant="text" className=" rounded-full cursor-pointer"><HiMoon className=" text-2xl"/></IconButton>
            </div>
            <div className=" cursor-pointer ">
                  <img className=" w-8 rounded-full border-2 border-primary-light" src="https://i.imgur.com/jo9GwJQ.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
