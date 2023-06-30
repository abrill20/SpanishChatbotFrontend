// import Message type
import { Message } from "../../../types/Message";

function MessageView({ id, content, type, correction }: Message) {
  const dot = `dot bg-[#6CAD96]  rounded-full animate-mercury-typing-animation h-3 w-3`;

  return (
    // classname with type of message
    <div
      className={`Message first:my-3 flex flex-col ${
        type == "RECEIVED" ? "self-start mr-8" : "self-end"
      }`}
    >
      <div
        className={`MainMessage ${!correction && "rounded-b-lg shadow-md"} ${
          type == "RECEIVED"
            ? "rounded-tr-lg bg-white"
            : "rounded-tl-lg bg-blue-300"
        } `}
      >
        {id == "pending" ? (
          <div className="chat-bubble p-3 inline-block">
            <div className="typing flex gap-2 items-center h-4">
              <div className={`${dot} [animation-delay:200ms]`}></div>
              <div className={`${dot} [animation-delay:300ms]`}></div>
              <div className={`${dot} [animation-delay:400ms]`}></div>
            </div>
          </div>
        ) : (
          <div className="p-2 font-sans font-normal break-words">{content}</div>
        )}
      </div>
      <div
        className={`CorrectionMessage bg-red-200 rounded-b-lg shadow-md ${
          correction ? "block" : "hidden"
        }`}
      >
        <div className="p-2 font-sans font-normal break-words">
          {correction}
        </div>
      </div>
    </div>
  );
}

export default MessageView;
