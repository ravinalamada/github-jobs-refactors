import React, {createContext} from 'react';
import useReduce from './useReduce';

const Context = createContext();

function GlobalContextProvider({children}) {
  const {state, dispatch} = useReduce()

  return (
    <Context.Provider value={{state, dispatch}}>
       {children}
    </Context.Provider>
  )
}

export{ GlobalContextProvider, Context}
