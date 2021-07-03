import { createContext, PropsWithChildren, useState } from "react";

interface Search {
  searchTerm?: string;
  setSearchTerm: (searchTerm: string) => void;
  resetSearchTerm: () => void;
}

export const Context = createContext<Search>({
  searchTerm: "",
  setSearchTerm: () => "",
  resetSearchTerm: () => "",
});
export const Consumer = Context.Consumer;

export const Provider = ({ children }: PropsWithChildren<{}>) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  return (
    <Context.Provider
      value={{
        searchTerm,
        setSearchTerm,
        resetSearchTerm: () => setSearchTerm(undefined),
      }}
    >
      {children}
    </Context.Provider>
  );
};
