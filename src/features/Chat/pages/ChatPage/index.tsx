// import ChatHeader from "../../components/ChatHeader";
import ChatConversation from "../../components/ChatConversation";
import ChatInput from "../../components/ChatInput";
import { useState } from "react";


import { Message } from "../../../../types/Message";

// chat page
function ChatPage() {

  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="flex w-full items-stretch self-stretch">
        <div className="ChatPage flex flex-col gap-2 justify-between grow bg-slate-200 self-stretch">
          {/* <ChatHeader /> */}
          <ChatConversation messages={messages} setMessages={setMessages} />
          <ChatInput messages={messages} setMessages={setMessages} />
        </div>
      </div>
  )
}

export default ChatPage;