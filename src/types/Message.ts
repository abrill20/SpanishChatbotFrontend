// Message type
// import { User } from "./User";

// send or receive message type
export enum MessageType {
  SENT = "SENT",
  RECEIVED = "RECEIVED",
}


export type Message = {
  id: string;
  content: string;
  correction?: string | null;
  type: MessageType;
}
