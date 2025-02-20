import { Input, Textarea } from "@material-tailwind/react";
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
                 <div className=" p-4  theme-border border">

                   <form action="" className=" space-y-4" >
                        <Input label="Enter task title"  variant="static"/>
                        <Textarea label="Enter task description"  variant="static"/>
                        <MyButton  fullwidth={true}>Create Task</MyButton>
                   </form>
                 </div>
            </div>
      );
};

export default Sidenav;