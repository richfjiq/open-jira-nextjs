import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

interface Props {
  children: ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: Id Lorem anim dolor elit.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'En progreso: Ea eiusmod et sint velit aliquip exercitation qui velit do voluptate irure.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Terminada: Ullamco commodo sit voluptate nostrud ad magna dolore minim eu magna incididunt laboris.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
