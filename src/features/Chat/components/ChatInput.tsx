import { useContext, useState } from "react";
import { ConversationContext } from "../context/ConversationContext";
import { UserContext } from "../../User/context/UserContext";
import axios from "axios";
import { Message, MessageType } from "../../../types/Message";
import sendUrl from "/src/assets/icons/send.png"

function ChatInput({
  messages,
  setMessages,
  setResponsePending
}: {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  setResponsePending: (responsePending: boolean) => void;
}) {
  const [message, setMessage] = useState("");

  const { selectedConversation } = useContext(ConversationContext);
  const { user } = useContext(UserContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selectedConversation && user) {
      setResponsePending(true);
      setMessages([
        {
          id: Math.random().toString(),
          content: message,
          type: "SENT" as MessageType,
        },
        ...messages,
      ]);
      axios
        .post(
          `${import.meta.env.VITE_API}/message/`,
          {
            chatId: selectedConversation,
            content: message,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
          setResponsePending(false);
          setMessages([
            response.data.chatBotMessage,
            response.data.message,
            ...messages,
          ]);
          setMessage("");
        });
    }
  };

  return (
    <div className="ChatInputContainer flex justify-center self-center w-full bg-slate-300 p-6">
      <div className="flex py-2 px-4 w-[90%] rounded-lg bg-white ">
        <input
          className="ChatInput__input flex grow font-sans font-normal text-base"
          placeholder="Type a message here!"
          type="text"
          value={message}
          onChange={handleInputChange}
        />
        <button
          className="ChatInput__button flex justify-center items-center bg-blue-500 rounded-lg w-7 h-7"
          type="submit"
          onClick={handleSubmit}
          disabled={!message}
        >
          <div className="w-6 h-6 bg-contain bg-center" style={{backgroundImage: `url(${sendUrl})`}}></div>
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
