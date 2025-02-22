import { useContext, useState } from "react";
import useDark from "../../Hooks/useDark";
import MyButton from "../../Shaird/MyButton";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import useTasks from "../../Hooks/useTasks";
import toast from "react-hot-toast";

const Sidenav = () => {
  const [sowForm, setSowForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const { refetch } = useTasks();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { user } = useContext(AuthContext);
  const dark = useDark();
  const handleCreateTask = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const timestamp = new Date().toISOString();
    const userEmail = user.email;
    if (!title) {
      setLoading(false);
      return toast.error("Title is required");
    }
    const task = {
      title,
      description,
      timestamp,
      userEmail,
      category: "todo",
      
    };
    axios
      .post(`${apiUrl}/tasks`, task)
      .then(() => {
        refetch();
        form.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div
      className={` h-full w-full  border-r ${
        dark
          ? "border-r-gray-700 theme-card-bg"
          : "border-gray-300 theme-card-bg"
      } `}
    >
      <div className=" p-4 w-full " onClick={() => setSowForm(!sowForm)}>
        <MyButton fullwidth>create new task</MyButton>
      </div>
      <div className=" p-4  theme-border border">
        <form
          onSubmit={handleCreateTask}
          action=""
          className={` space-y-4 duration-200 ${sowForm && "hidden"}`}
        >
          <input
            name="title"
            className=" w-full py-2 px-3 border color-text  rounded"
            placeholder=" Enter task title"
            type="text"
          />
          <textarea
            placeholder="Descroption"
            name="description"
            className=" w-full resize-none py-2 px-3 border color-text rounded "
            id=""
          ></textarea>
          <button className=" w-full ">
            {" "}
            <MyButton loading={loading} fullwidth={true}>
              Create Task
            </MyButton>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidenav;
