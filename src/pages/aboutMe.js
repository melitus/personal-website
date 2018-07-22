import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

import Footer from '../components/footer/footer';

const About = () =>(
  <section className="success" id="about">
    <div className="sectionwrapper">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <p className="about-me-paragraph">Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development
            and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js
            and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Mongoose,
            Lodash, Express, body-parser, socket.io, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4,
            React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI and Native-Base for React Native.</p>
        </div>

      </div>
    </div>
  </section>
)

export default About;
