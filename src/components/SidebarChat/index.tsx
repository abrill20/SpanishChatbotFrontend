import axios from "axios";
import DropdownButton from "../DropdownButton";
import expandDownUrl from "/src/assets/icons/expand-down.png";

function SidebarChat({
  id,
  title,
  createdAt,
  onClick,
  isSelected,
  removeChat,
}: Chat & { onClick: () => void } & { removeChat: (id: number) => void }) {
  
  const deleteChat = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    axios
      .delete(`http://localhost:8000/chat/${id}`, { withCredentials: true })
      .then(() => {
        console.log("deleted chat");
        removeChat(id);
      });
  };

  const createdAtDate  = new Date(createdAt);
  // Check if createdAtDate is today
  const createdAtString = createdAtDate.toLocaleDateString() === new Date().toLocaleDateString() ? createdAtDate.toLocaleTimeString().slice(0, -3) : createdAtDate.toLocaleDateString();

  const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae floppy filppy.";

  return (
    <button
      className={`SidebarChat flex flex-col p-4 self-stretch rounded-lg mx-4 hover:bg-slate-200 transition-all duration-200 ease-linear group ${
        isSelected ? "bg-slate-200" : "bg-white"
      } `}
      onClick={onClick}
    >
      <div className="flex justify-between self-stretch">
        <div className="font-sans font-normal text-base overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </div>
        {/* cast createdAt to datetime then make it a simple format */}
        <div className="font-sans font-extralight text-sm ">
          {createdAtString}
        </div>
      </div>
      <div className="flex justify-between self-stretch">
        <div className="text-sm font-sans font-light overflow-hidden text-ellipsis whitespace-nowrap">
          {placeholderText}
        </div>
        <DropdownButton showOnlyOnHover={true} onButtonClick={deleteChat} iconURL={expandDownUrl} buttonText="Delete" />
      </div>
    </button>
  );
}

export default SidebarChat;
