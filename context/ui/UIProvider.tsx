import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode;
}

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setIsAddingEntry = (arg: boolean) => {
    dispatch({ type: 'UI - Set Is Adding Entry', payload: arg });
  };

  const startDragging = () => {
    dispatch({ type: 'UI - Start Dragging' });
  };

  const endDragging = () => {
    dispatch({ type: 'UI - End Dragging' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        // Methods
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        endDragging,
        startDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
