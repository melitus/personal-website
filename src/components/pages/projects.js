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
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height:'175px', background:
         'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>
            React project #1
         </CardTitle>
         <CardText>Browse through react projects</CardText>
         <CardActions border>
            <Button colored>Github</Button>
            <Button colored>codementor</Button>
            <Button colored>LiveDemo</Button>
         </CardActions>
       </Card>
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

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
               <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }

 }


export default Projects;
