// import styles
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SidebarChatsView from "./SidebarChatsView";
import SidebarProfileView from "./SidebarProfileView";
import { UserContext } from "../features/User/context/UserContext";

function AppSidebar() {

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const hideSidebar = () => {
    setToggleSidebar(false);
  }


  const [chats, setChats] = useState<Chat[]>([]);

  const { user } = useContext(UserContext)!;

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:8000/chat", { withCredentials: true })
        .then((response) => {
          console.log(response);
          setChats(response.data);
        });
    }
  }, []);

  

  return (
    <>
    <div className="flex self-stretch">
      <div className={`AppSidebar transition-all sm:absolute sm:h-full sm:left-0 flex flex-col items-center self-stretch gap-2 w-[350px] ${toggleSidebar ? "sm:w-[350px]" : "sm:w-0" } bg-white shadow-lg z-10`}>
        <SidebarProfileView setChats={setChats} chats={chats} hideSidebar={hideSidebar} />
        <SidebarChatsView setChats={setChats} chats={chats}  />
      </div>
    </div>
    <div className="absolute top-3 left-3 flex flex-col items-center justify-center gap-2">
      <button className=" text-white bg-contain bg-center h-7 w-7 rounded-md" style={{backgroundImage: "url(/src/assets/icons/menu.png)"}} onClick={() => setToggleSidebar(!toggleSidebar)}></button>
    </div>
    </>
  );
}

export default AppSidebar;
