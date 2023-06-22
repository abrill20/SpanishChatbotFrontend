import { UserProvider } from "./features/User/context/UserContext";
import AppContent from "./AppContent";

import './index.css'

function App() {

  return (
    <div className="App flex absolute inset-0 justify-center items-center bg-slate-200">
      <UserProvider>
        <AppContent />
      </UserProvider>
    </div>
  );

}

export default App;