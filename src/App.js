import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetUpPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import reactDom from 'react-dom';
import MainNavigation from './Components/layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact = {true}>
          <AllMeetUpsPage/> 
      </Route>
      <Route path='/new-meetup'>
          <NewMeetUpPage/> 
      </Route>
      <Route path='/favorites'>
          <FavoritesPage/> 
      </Route>
      </Switch>
    </div>
  )
}

export default App;
