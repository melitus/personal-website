import React, { Component } from 'react';
import {
  Footer,
  List,
  Cell,
  ListItemContent,
  ListItem,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList} from 'react-mdl';

  import SocialMedia from './social_media';

class Footers extends Component {

  render() {
    return(

      <footer>
            <div className='row'>
                <div className='twelve columns'>
                <SocialMedia />
                    <ul className='copyright'>
                        <li>
                            This site is developed in React.js by&nbsp;
                            <a
                                href='https://suddi.github.io'
                                title='Sudharshan Ravindran'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Sudharshan Ravindran
                            </a> from the original design of Ceevee from&nbsp;
                            <a
                                href='http://www.styleshout.com/'
                                title='Styleshout'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Styleshout
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='go-top'>
                    <a className='smoothscroll' title='Back to Top' href='#home'>
                        <i className='icon-up-open'/>
                    </a>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footers;
