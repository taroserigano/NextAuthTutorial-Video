"use client";

import { SessionProvider } from "next-auth/react";


// adding the session ability
// so that you can extract user info from session by like:
// const session = await getServerSession(options);

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
