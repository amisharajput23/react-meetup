import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetUpPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import reactDom from 'react-dom';
import Layout from './Components/layout/Layout';
function App() {
  return (
    <Layout>
      
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
    </Layout>
  )
}

export default App;
