import useDark from "../../Hooks/useDark"
import MyButton from '../../Shaird/MyButton';


const Sidenav = () => {
      const dark = useDark()
      return (
            <div 
            className={` h-full w-full  border-r ${dark?"border-r-gray-700 theme-card-bg":'border-gray-300 theme-card-bg'} `}>
                 <div className=" p-4 w-full ">
                 <MyButton>+ create task</MyButton>
                 </div>
            </div>
      );
};

export default Sidenav;