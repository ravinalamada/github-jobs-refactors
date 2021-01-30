import React, { useContext } from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages/home';
import JobDetails from './containers/jobDetails'

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/:jobId"><JobDetails /></Route>
      </Switch>
    </>
  )
}
