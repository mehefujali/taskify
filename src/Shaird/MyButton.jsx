import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";


const MyButton = ({children,dark}) => {
      return (
            <Button 
            className={` rounded ${dark?"bg-secondary-light":"bg-primary-light"} cursor-pointer `}
            >{children}</Button>
      );
};
MyButton.propTypes = {
      children: PropTypes.node.isRequired ,
      dark: PropTypes.bool.isRequired,
}
export default MyButton;