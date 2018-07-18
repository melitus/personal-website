import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';

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
      <div>
        <h1>This is react</h1>
      </div>
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
        {this.toggleCategories()}
        </section>
      </div>
    )
  }

 }


export default Projects;
