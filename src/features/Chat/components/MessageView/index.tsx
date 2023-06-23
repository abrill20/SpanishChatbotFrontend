// import Message type
import { Message } from "../../../../types/Message";

function MessageView({ content, type, correction }: Message) {
  return (
    // classname with type of message
    <div className={`Message first:my-3 flex flex-col ${
      type == "RECEIVED"
        ? "self-start mr-8"
        : "self-end"
    }`}>
      <div
        className={`MainMessage ${!correction && "rounded-b-lg shadow-md"} ${
          type == "RECEIVED"
            ? "rounded-tr-lg bg-white"
            : "rounded-tl-lg bg-blue-300"
        } `}
      >
        <div className="p-2 font-sans font-normal break-words">{content}</div>
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
