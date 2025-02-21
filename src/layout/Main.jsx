import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar/NavBar";
import Sidenav from "../components/Sidenav/Sidenav";
import Tasks from "../components/Tasks/Tasks";

const Main = () => {
  return (
    <div className=" max-w-[1920px] mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <NavBar />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12 h-[calc(100vh-57px)] ">
        <div className="  md:col-span-3 xl:col-span-2  h-full   ">
          <Sidenav />
        </div>
        <div className=" p-5  md:col-span-9 xl:col-span-10 h-full overflow-y-auto">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Main;
