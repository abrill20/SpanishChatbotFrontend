import ChatPage from "./features/Chat/pages/ChatPage";
import LoginForm from "./features/User/components/LoginForm";
import AppSidebar from "./components/AppSidebar";
import { useContext } from "react";
import { UserContext } from "./features/User/context/UserContext";
import { ConversationProvider } from "./features/Chat/context/ConversationContext";

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <ConversationProvider>
          <AppSidebar />
          <ChatPage />
        </ConversationProvider>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default AppContent;
