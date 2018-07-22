import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

import Footer from '../components/footer/footer';
import img from '../assets/images/santino.jpeg';
import SocialMedia from '../components/socialmedia/social_media';


class Landing extends Component{

 render() {
   return(
     <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
           <Cell col={12}>
               <img
               src ={img}
               alt="avatar"
               className="profile-pic"
               />
               <div className="banner-text">
                  <h1>Fulstack Software Engineer</h1>
                  <hr />
                  <p>HTML/CSS |React |Redux |JavaScript |React-Native |MongoDb |Nodejs |Express.js |Spring Boot |Microservice
                   |Docker |Hapi.js |Java |Spring Boot |Linux |CICD |Heroku |Agile Methodology |Bash</p>

                   <SocialMedia />
               </div>
           </Cell>
       </Grid>
       <Footer />
     </div>
   )
 }
}

export default Landing;
