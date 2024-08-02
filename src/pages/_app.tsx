import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const UserIdContext = createContext({
  userId: 0,
  setUserId: (id: number) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [userId, setUserId] = useState<number>(0);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      <Component {...pageProps} />
    </UserIdContext.Provider>
  );
}
