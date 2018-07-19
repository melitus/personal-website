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

class Footers extends Component {

  render() {
    return(


      <Footer  size="mega" className="footer">
         <div className="fWrapper">
         <FooterSection className="fInner" type="middle">
                 <FooterDropDownSection title="More about Me">
            <List>
            <h3>Find me on:</h3>

              <ListItem>
              <ListItemContent icon="person">Bryan Cranston</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent icon="person">Aaron Paul</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
              </ListItem>
           </List>
        </FooterDropDownSection>
    </FooterSection>
         <FooterSection className="fInner" type="middle">
                 <FooterDropDownSection title="More about Me">
            <List>
            <h3>Find me on:</h3>

              <ListItem>
              <ListItemContent icon="person">Bryan Cranston</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent icon="person">Aaron Paul</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
              </ListItem>
           </List>
        </FooterDropDownSection>
    </FooterSection>
         <FooterSection className="fInner" type="middle">
                 <FooterDropDownSection title="More about Me">
            <List>
            <h3>Find me on:</h3>

              <ListItem>
              <ListItemContent icon="person">Bryan Cranston</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent icon="person">Aaron Paul</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
              </ListItem>
           </List>
        </FooterDropDownSection>
    </FooterSection>

         </div>
    <div style={{textAlign:'center'}}>
      <strong>Copyright &copy; Sunday Aroh 2018</strong>
    </div>
</Footer>


    )
  }
}

export default Footers;
