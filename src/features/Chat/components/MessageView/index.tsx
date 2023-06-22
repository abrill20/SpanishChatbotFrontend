// import Message type
import { Message } from "../../../../types/Message";

function MessageView({ content, type }: Message) {
  return (
    // classname with type of message
    <div className={`message first:my-3 flex flex-col gap-2 rounded-b-lg shadow-sm ${type == "RECEIVED" 
    ? "rounded-tr-lg bg-white self-start" 
    : "rounded-tl-lg bg-blue-300 self-end"}`}>
      <div className="p-2 font-sans font-normal break-words">
          {content}
      </div>
    </div>
  );
}

export default MessageView;
