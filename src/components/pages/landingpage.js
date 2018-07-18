import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
 render() {
   return(
     <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
           <Cell col={12}>
               <img
               src ="https://www.shareicon.net/download/2015/09/18/103161_man_512x512.png"
               alt="avatar"
               className="avatar-img"
               />
               <div className="banner-text">
                  <h1>Fulstack Software Engineer</h1>
                  <hr />
                  <p>HTML/CSS |React |Redux |React-Native |MongoDb |Nodejs |Express.js |Spring Boot |Microservice
                   |Docker</p>
                   <div className="social-links">

                   {/*linkedin */}
                   <a href="http://google.com" rel="noopner noreferrer"  target="_blank">
                   <i className ="fa fa-linkedin-square" aria-hidden="true" />
                   </a>

                   {/*Github */}
                   <a href="http://github" rel="noopner noreferrer"  target="_blank">
                   <i className ="fa fa-github-square" aria-hidden="true" />
                   </a>

                   {/*Twitter */}
                   <a href="http://twitter.com" rel="noopner noreferrer"  target="_blank">
                   <i className ="fa fa-twitter-square" aria-hidden="true" />
                   </a>

                   {/*Facebook */}
                   <a href="http://twitter.com" rel="noopner noreferrer"  target="_blank">
                   <i className ="fa fa-facebook-square" aria-hidden="true" />
                   </a>

                   </div>
               </div>
           </Cell>
       </Grid>
     </div>
   )
 }
}

export default Landing;
