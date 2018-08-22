import React, { Component } from 'react';

import styles from '../footer.scss';

const FooterLinks =() => {

        return(
            <div>
                <ul className="clearfix">
                    <li><a target="_blank" href="https://github.com/melitus"><i className="fa fa-2x fa-github"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/arohsunday"><i className="fa fa-2x fa-linkedin-square"></i></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/aroh.melitus"><i className="fa fa-2x fa-facebook-square"></i></a></li>
                    <li><a href="mailto:&#106;&#111;&#115;&#104;&#117;&#097;&#115;&#112;&#101;&#097;&#114;&#115;&#050;&#057;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"><i className="fa fa-2x fa-envelope"></i></a></li>
                    <li><a target="_blank" href="http://stackoverflow.com/users"><i className="fa fa-2x fa-stack-overflow"></i></a></li>
                </ul>
            </div>
        )
    
}

export default FooterLinks;
