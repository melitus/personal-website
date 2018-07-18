import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component{
 render() {
   return(
     <div className="contact-body">
       <Grid className="contact-grid">
         <Cell col={6}>
           <h2>Sunday Aroh</h2>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development
              and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js
              and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Mongoose,
              Lodash, Express, body-parser, socket.io, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4,
              React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI and Native-Base for React Native.
              </p>
         </Cell>
         </Grid>
        </div>
   )
 }
}

export default About;
