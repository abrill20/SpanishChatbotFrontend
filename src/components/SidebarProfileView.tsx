import { useContext } from "react";
import { UserContext } from "../features/User/context/UserContext";
import DropdownButton from "./DropdownButton";
import axios from "axios";
import { ConversationContext } from "../features/Chat/context/ConversationContext";
import userCircleUrl from "/src/assets/icons/user_circle.png"
import newChatUrl from "/src/assets/icons/new_chat.png"
import closeUrl from "/src/assets/icons/close.png"
import meetballsMenuUrl from "/src/assets/icons/meetballs_menu.png"

function SidebarProfileView({
  setChats,
  chats,
  hideSidebar
}: {
  setChats: (chats: Chat[]) => void;
  chats: Chat[];
  hideSidebar: () => void;
}) {

  const { selectConversation } = useContext(ConversationContext);

  const newChat = async () => {
    const chatName = prompt("Enter a chat name");
    if (chatName) {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/chat/`,
        { title: chatName },
        { withCredentials: true }
      );
      console.log(response.data);
      setChats([...chats, response.data.chat]);
      selectConversation(response.data.chat.id);
    }
  };

  const { user, logout } = useContext(UserContext)!;
  return (
    <div className="SidebarProfileView flex justify-between items-center p-4 gap-3 self-stretch">
      <div className="flex items-center gap-3">
        <div
          className="avatar w-10 h-10  bg-cover bg-center"
          style={{ backgroundImage: `url(${userCircleUrl})` }}
        ></div>
        <div className="username font-semibold text-xl font-sans">
          {user?.name}
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <button
          className="NewChat hover:bg-slate-200 hover:w-7 hover:h-7 transition-all rounded-md p-2 w-6 h-6 bg-center bg-contain"
          onClick={newChat}
          style={{ backgroundImage: `url(${newChatUrl})` }}
        ></button>
        <DropdownButton
          showOnlyOnHover={false}
          onButtonClick={logout}
          iconURL={meetballsMenuUrl}
          buttonText="Logout"
        />
        <button className="hidden sm:block closeSidebar w-6 h-6 bg-contain bg-center" style={{backgroundImage: `url(${closeUrl}`}} onClick={hideSidebar}></button>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default SidebarProfileView;
