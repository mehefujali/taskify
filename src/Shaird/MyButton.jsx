import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import useDark from "../Hooks/useDark";


const MyButton = ({children , text,fullwidth ,loading}) => {
      const dark = useDark()
      return (
            <Button 
            loading={loading}
            fullWidth={fullwidth}
            variant={text&&"text"}
            className={` rounded ${!text && dark?"bg-gray-200 text-black":"bg-primary-light"} cursor-pointer justify-center  ${text&&"bg-transparent   theme-text"}`}
            >{children}</Button>
      );
};
MyButton.propTypes = {
      children: PropTypes.node.isRequired ,
      text: PropTypes.bool.isRequired,
      fullwidth: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
}
export default MyButton;