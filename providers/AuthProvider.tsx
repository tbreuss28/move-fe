import Router from "next/router";
import { createContext, PropsWithChildren, useContext, useState } from "react";

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

export const withUser = <P extends object>(
  Component: React.ComponentType<P>
) => (props: P & { user: User }) => {
  const { user } = useContext(Context);
  if (typeof window !== 'undefined' && !user) {
    Router.push("/login");
  }
  return <Component {...props} user={user} />;
};
