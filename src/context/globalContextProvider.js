import React, { useState, createContext} from 'react';
import useReduce from './useReduce';

const Context = createContext();

function GlobalContextProvider({children}) {
  const {state, dispatch} = useReduce();
  const {loading, jobs} = state;
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage ] = useState(6);

  const totalPages = activePage * perPage;
  const firstPage = totalPages - perPage;
  const activeJobs = !loading && jobs && jobs.slice(firstPage, totalPages);

  return (
    <Context.Provider value={{state, dispatch, activeJobs, totalPages, activePage, setActivePage}}>
       {children}
    </Context.Provider>
  )
}

export{ GlobalContextProvider, Context}
