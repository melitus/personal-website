import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

import Footer from './footer';

class About extends Component{
 render() {
   return(
     <div className="contact-body">
       <Grid className="contact-grid">
         <Cell col={6}>
           <h2>Sunday Aroh</h2>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a focused and ambitious Senior/Lead Front End Developer with solid experience creating sites, applications and tooling for a wide range of clients and sectors including financial, commercial, retail, automotive and advertising for global recognised companies such as BBC and Saatchi & Saatchi. I have a broad knowledge of JavaScript, am proficient in a number of modern frameworks (React, Angular, Vue, Redux) and have experience managing and mentoring front end teams.

My passion for web development coupled with my ability to pick up new skills quickly means that I stay on top of most relevant technologies and directions. I achieve this by attending various conferences and talks around Europe and spending my free time experimenting and getting to grips with modern development trends that may not be a fit for my current projects. I'm currently most excited about functional programming patterns with tools such as Ramda and ReasonMl and modern API approaches such as GraphQl.

Due to my previous exposure and familiarity with backend technologies I am also comfortable taking ownership of the full stack and have experience in Node, PHP, Python and Scala as well as various database languages. I also have experience in Agile, prototyping and waterfall development methodologies as well as tools like JIRA.

In recent positions I have been given the responsibility to perform in a lead capacity, where I can help and mentor more junior developers. I have found this to be a rewarding part of my role, It has also helped to learn the technologies better through teaching.

I also have an interest and good understanding of UX and design, and I will always try to work with designers to help them translate their ideas into usable and scalable systems.
              </p>
               <p>Creativity is a breed of history and perspective.</p>
					<p>

						I've realized that anything innovative has stemmed from an original
						idea that someone else had. Taking something that is great, and
						remaking into something that is your own is an amazing feeling, and
						that's why I've fallen in love with web development.
					</p>
          <p>
          When I’ m not coding, I love to go to the countryside to recharge, watch Film Noir and mystery movies, listen to music, ponder over surrealist art, and create exotic cuisine.
						Outside of that, I love to read, play my ukulele, and play
						intramural sports. As of late, I am exploring the daunting world of
						writing.
					</p>
         </Cell>
         </Grid>
         <Footer />
        </div>
   )
 }
}

export default About;
