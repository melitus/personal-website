import React, { Component } from 'react';

//Import component modules.
import FooterLinks from './partials/footerLinks.jsx';
import FooterCopyright from './partials/footerCopyright.jsx';

//Import Styles.
import styles from './footer.scss';

//Creating global navigation element.
class Footer extends Component {
    render(){
        return (
          <footer class="page-footer font-small blue">

<div class="footer-copyright text-center py-3">© 2018 Copyright:
  <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
</div>

</footer>

        );
    }
}

//Export Modules.
export default Footer;
