// import styles
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SidebarChatsView from "./SidebarChatsView";
import SidebarProfileView from "./SidebarProfileView";
import { UserContext } from "../features/User/context/UserContext";
import menuUrl from "/src/assets/icons/menu.png"

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
        .get(`${import.meta.env.VITE_API}/chat`, { withCredentials: true })
        .then((response) => {
          console.log(response);
          setChats(response.data);
        });
    }
  }, []);

  

  return (
    <>
    <div className={`flex sm:absolute sm:left-0 sm:top-0 sm:bottom-0 self-stretch ${!toggleSidebar && "sm:-translate-x-[350px]"} transition-all`}>
      <div className={`AppSidebar flex flex-col items-center self-stretch gap-2 w-[350px] bg-white shadow-lg z-10`}>
        <SidebarProfileView setChats={setChats} chats={chats} hideSidebar={hideSidebar} />
        <SidebarChatsView setChats={setChats} chats={chats}  />
      </div>
    </div>
    <div className="absolute top-3 left-3 flex flex-col items-center justify-center gap-2">
      <button className=" text-white bg-contain bg-center h-7 w-7 rounded-md" style={{backgroundImage: `url(${menuUrl})`}} onClick={() => setToggleSidebar(!toggleSidebar)}></button>
    </div>
    </>
  );
}

export default AppSidebar;
