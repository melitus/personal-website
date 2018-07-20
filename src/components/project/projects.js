import React, {Component} from 'react';
import {
   Tabs,
   Tab,
   Grid,
   Cell,
   Card,
   CardTitle,
   CardActions,
   CardText,
   Button,
   CardMenu,
   IconButton } from 'react-mdl';

   import Footer from '../footer/footer';


class Projects extends Component{
  constructor(props){
    super(props)

    this.state ={
      activeTab:0
    };
  }
  onchangeTabListerner = tabId => {
    this.setState({
      activeTab: tabId
    })
  }

toggleCategories(){
  if(this.state.activeTab == 0){
    return(
      <div className="projects-grid">
      {/*Project 1 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height:'176px', background:
         'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
            React project #1
         </CardTitle>
         <CardText>Browse through react projects </CardText>
         <CardActions border>
            <Button colored>Github</Button>
            <Button colored>code</Button>
            <Button colored>Live Demo</Button>
         </CardActions>
         <CardMenu style={{color:'#fff'}}>
            <IconButton name='share' />
         </CardMenu>
       </Card>

       {/*Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height:'176px', background:
          'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
             React project #2
          </CardTitle>
          <CardText>Browse through react projects </CardText>
          <CardActions border>
             <Button colored>Github</Button>
             <Button colored>code</Button>
             <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
             <IconButton name='share' />
          </CardMenu>
        </Card>

        {/*Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height:'176px', background:
           'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
              React project #3
           </CardTitle>
           <CardText>Browse through react projects </CardText>
           <CardActions border>
              <Button colored>Github</Button>
              <Button colored>code</Button>
              <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color:'#fff'}}>
              <IconButton name='share' />
           </CardMenu>
         </Card>

      </div>

    )
  } else if (this.state.activeTab == 1) {
    return(
    <div><h1>This is React Native</h1></div>
    )
  } else if (this.state.activeTab == 2) {
    return(
      <div><h1>This is Mongodb</h1></div>
    )
  }else if (this.state.activeTab == 3) {
    return(
          <div><h1>This is  Rest Api</h1></div>
    )
  }
}

  render(){
    return(
      <div className="category-tab">
        <Tabs activeTab={this.state.activeTab} onChange={this.onchangeTabListerner}>
           <Tab>React</Tab>
           <Tab>React-Native</Tab>
           <Tab>MongoDb</Tab>
           <Tab>Rest Api</Tab>
        </Tabs>


          <Grid >
            <Cell col={12}>
               <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
<Footer />
      </div>
    )
  }

 }


export default Projects;
