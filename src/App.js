import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import './App.css';
import Main from './routes/main'

const App = () => (

  <div className="demo-big-content">
  <Layout>
      <Header className="header-color" title="Sunday Aroh" scroll>
          <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/printresume">Print Resume</Link>
          </Navigation>
      </Header>
      <Content>
          <div className="page-content" />
          <Main />
      </Content>
  </Layout>
</div>
)

export default App;
