import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import Footer from '../components/Footer/Footer';
import img from '../assets/images/santino.jpeg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sunday Aroh</h2>
            <img
              src={img}
              alt="avatar"
              style={{height: '250px'}}
              className="profile-pic"
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full Stack Software Developer |Trainer |Entrepreneur</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (234) 8061329356
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (234) 8061329356
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    asmelitus@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    melisunday
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
        <Footer />
      </div>
    )
  }
}
export default Contact;
