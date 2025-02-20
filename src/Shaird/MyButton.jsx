import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import useDark from "../Hooks/useDark";


const MyButton = ({children , text}) => {
      const dark = useDark()
      return (
            <Button 
            variant={text&&"text"}
            className={` rounded ${!text && dark?"bg-secondary-dark":"bg-primary-light"} cursor-pointer  ${text&&"bg-transparent   theme-text"}`}
            >{children}</Button>
      );
};
MyButton.propTypes = {
      children: PropTypes.node.isRequired ,
      text: PropTypes.bool.isRequired,
}
export default MyButton;