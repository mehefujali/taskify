import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Auth/Login";
import PrivateRoute from "../Private/PrivateRoute";


const router = createBrowserRouter([
      {
            path:'/',
            element:<PrivateRoute> <Main/></PrivateRoute>,

      },
      {
            path:'/login',
            element: <Login/>,
      }
])


export default router