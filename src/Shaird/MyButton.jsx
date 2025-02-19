import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import useDark from "../Hooks/useDark";


const MyButton = ({children}) => {
      const dark = useDark()
      return (
            <Button 
            className={` rounded ${dark?"bg-secondary-dark":"bg-primary-light"} cursor-pointer `}
            >{children}</Button>
      );
};
MyButton.propTypes = {
      children: PropTypes.node.isRequired ,
      dark: PropTypes.bool.isRequired,
}
export default MyButton;