import { Message, MessageType } from "../../../types/Message";
import MessageView from "./MessageView";
import { useContext, useEffect } from "react";
import { ConversationContext } from "../context/ConversationContext";
import axios from "axios";

function ChatConversation({
  messages,
  setMessages,
  responsePending,
}: {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  responsePending: boolean;
}) {
  const { selectedConversation } = useContext(ConversationContext)!;

  useEffect(() => {
    if (selectedConversation) {
      axios
        .get(
          `${import.meta.env.VITE_API}/chat/${selectedConversation}/messages`,
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          setMessages(response.data);
        });
    }
  }, [selectedConversation]);

  return (
    <div className="ChatConversation px-8 pt-5 w-full flex flex-col-reverse gap-4 overflow-y-scroll grow">
      {responsePending && (
      <MessageView id="pending" content="0" type={MessageType.RECEIVED}/>
      )}
      {messages.map((message) => (
        <MessageView key={message.id} {...message} />
      ))}
    </div>
  );
}

export default ChatConversation;
