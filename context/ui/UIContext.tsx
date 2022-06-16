import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (arg: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
