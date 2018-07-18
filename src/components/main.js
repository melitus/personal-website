import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './pages/landingpage';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';

const Main = () =>(
  <Switch>
  <Route exact path ='/' component={LandingPage} />
  </Switch>
)

export default Main;
