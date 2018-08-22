//Import Dependencies.
import React, { Component } from 'react';

//Import component modules.
import FooterLinks from './partials/FooterLinks.jsx';
import FooterCopyright from './partials/FooterCopyright.jsx';

//Import Styles.
import styles from './footer.scss';


//Creating global navigation element.
class Footer extends Component {
    render(){
        return (
            <footer className="clearfix">
                <div className="container">
                    <FooterLinks />
                    <FooterCopyright />
                </div>
            </footer>
        );
    }
}

export default Footer;