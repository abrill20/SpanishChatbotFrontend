import { useContext } from "react";
import SidebarChat from "./SidebarChat";
import { ConversationContext } from "../features/Chat/context/ConversationContext";

function SidebarChatsView({
  setChats,
  chats,
}: {
  setChats: (chats: Chat[]) => void;
  chats: Chat[];
}) {

  const { selectedConversation, selectConversation } = useContext(ConversationContext);

  const handleConversationClick = (conversationId: number) => {
    console.log('conversationId', conversationId);
    selectConversation(conversationId);
  };


  const removeChat = (id: number) => {
    setChats(chats.filter((chat) => chat.id !== id));
    selectConversation(chats[0].id);
  }

  return (
    <>
      <div className="SidebarChatsView flex flex-col grow items-start self-stretch overflow-y-scroll gap-2">
        {chats.map((chat) => (
          <SidebarChat
            key={chat.id}
            {...chat}
            removeChat={removeChat}
            onClick={() => handleConversationClick(chat.id)}
            isSelected={selectedConversation === chat.id}
          />
        ))}
      </div>

    </>
  );
}

export default SidebarChatsView;
