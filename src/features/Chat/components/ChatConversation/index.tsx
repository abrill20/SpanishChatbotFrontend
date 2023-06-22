import { Message } from "../../../../types/Message";
import MessageView from "../MessageView";
import { useContext, useEffect } from "react";
import { ConversationContext } from "../../context/ConversationContext";
import axios from "axios";

function ChatConversation({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}) {

  const { selectedConversation } = useContext(ConversationContext)!;

  useEffect(() => {
    if (selectedConversation) {
      axios
        .get(`http://localhost:8000/chat/${selectedConversation}/messages`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          setMessages(response.data);
        });
    }
  }, [selectedConversation]);

  return (
    <div className="ChatConversation px-8 w-full flex flex-col-reverse gap-4 overflow-y-scroll grow">
      {messages.map((message) => (
        <MessageView key={message.id} {...message} />
      ))}
    </div>
  );
}

export default ChatConversation;
