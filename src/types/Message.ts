// Message type
// import { User } from "./User";

// send or receive message type
enum MessageType {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
}


export type Message = {
  id: string;
  content: string;
  type: MessageType;
}
