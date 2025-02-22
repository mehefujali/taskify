import { RiLoader4Line } from "react-icons/ri";

const Loading = () => {
      return (
            <div className=" w-full  min-h-screen flex justify-center items-center">
                 <h1 className=" text-xl flex items-center gap-2"><RiLoader4Line className=" text-5xl animate-spin" /></h1>  
            </div>
      );
};

export default Loading;