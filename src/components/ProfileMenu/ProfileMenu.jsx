import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";

export function ProfileMenu() {
      const {user,signOutUser} = useContext(AuthContext)
  return (
    <Menu className=" theme-bg">
      <MenuHandler>
        <Avatar
         size="sm"
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer"
          src={user?.photoURL}
        />
      </MenuHandler>
      <MenuList  className="theme-bg">
        
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem onClick={signOutUser} className="flex items-center gap-2  theme-text">
          <FaSignOutAlt/>
          <Typography variant="small" className=" theme-text" >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
