import useDark from "../../Hooks/useDark"


const Sidenav = () => {
      const dark = useDark()
      return (
            <div 
            className={` h-full w-full  border-r ${dark?"border-r-gray-700":'border-gray-300'} `}>
                  
            </div>
      );
};

export default Sidenav;