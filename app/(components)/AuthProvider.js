"use client";

import { SessionProvider } from "next-auth/react";


// adding the session ability
// so that you can extract user info from session by like getSession() 
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
