import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';


const PrivateRoute = ({children}) => {
      const {user} = useContext(AuthContext)
       
      if(user){
            return children
      }
      else{
          return  <Navigate to="/login"/>
      }
};

PrivateRoute.propTypes = {
      children: PropTypes.node.isRequired
}
export default PrivateRoute;