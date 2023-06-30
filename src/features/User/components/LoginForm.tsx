import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [account, setAccount] = useState(false);

  const { createAccount } = useContext(UserContext)!;

  const { login } = useContext(UserContext)!;

  return (
    <div className="flex flex-col justify-center h-[90%] sm:w-[95%] w-[500px] bg-white rounded-lg px-5 py-5 shadow-lg">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-5">{account ? "Login" : "Create Account"}</h1>
        <div className="InputsContainer flex flex-col gap-4">
        {!account && (<input
            placeholder="Full Name"
            className="self-stretch shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />)}

          <input
            placeholder="Email"
            className="self-stretch shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            className="self-stretch shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => account ? login(email, password) : createAccount(name, email, password)}
        >
          {account ? "Login" : "Create Account"}
        </button>

        <button className="w-fit text-gray-700 hover:text-blue-600" onClick={() => setAccount(!account)}>Already have an account?</button>
      </div>
    </div>
  );
}

export default LoginForm;
