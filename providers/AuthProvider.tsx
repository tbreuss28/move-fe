import { createContext, PropsWithChildren, useState } from "react";

import { User } from "@types";

interface Auth {
  user?: User;
  setUser: (user: User) => void;
}

export const Context = createContext<Auth>({
  user: undefined,
  setUser: () => {},
});

export const Consumer = Context.Consumer;

export const Provider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User>();
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
