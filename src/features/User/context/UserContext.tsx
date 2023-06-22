// UserContext.tsx
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { User } from '../../../types/User';

interface UserContextType {
  user: User | null;
  logout: () => void;
  login: (email: string, password: string) => void;
  createAccount: (name: string, email: string, password: string) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  logout: () => {},
  login: (_email: string, _password: string) => {},
  createAccount: (_name: string, _email: string, _password: string) => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    axios.get('http://localhost:8000/user/logout', { withCredentials: true })
      .then(response => {
        console.log(response);
        setUser(null);
      }
    );
  }

  const createAccount = (name: string, email: string, password: string) => {
    console.log("create new account: ", name, email, password);
    axios
      .post(
        "http://localhost:8000/user/register/",
        {
          username: name,
          email,
          password,
        }, {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        setUser(response.data);
      });
  }

  const login = (email: string, password: string) => {
    axios
      .post(
        "http://localhost:8000/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        setUser(response.data);
      });
  }

  useEffect(() => {
    axios.get('http://localhost:8000/user', { withCredentials: true })
      .then((response) => {
        console.log("data", response.data);
        setUser(response.data);
      })
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, login, createAccount }}>
      {children}
    </UserContext.Provider>
  );
}