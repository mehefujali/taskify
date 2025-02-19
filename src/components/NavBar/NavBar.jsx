const NavBar = () => {
  return (
    <div className=" bg-background-light  border-b border-b-gray-300">
      <div className=" w-full   flex justify-between items-center">
        <div className=" h-full w-fit">
          <img
            className=" w-full h-14"
            src="https://i.imgur.com/K5EaXia.png"
            alt=""
          />
        </div>
        <div className=" h-full w-fit mx-5">
            <div className=" cursor-pointer ">
                  <img className=" w-8 rounded-full border-2 border-primary-light" src="https://i.imgur.com/jo9GwJQ.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
