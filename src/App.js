import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Header from './components/header/Header.js';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer.js';
import Features from './components/features/Features.js';
import Details from './components/details/Details.js';
import Calendar from './components/calendar/Calendar.js';
import FetchData from './service/FetchData.js';

class App extends React.Component {
  fetchData = new FetchData();
  state = {
      rocket: 'Falcon 1',
      rocketFeatures: null,
      rockets: [],
      company: null,
      details: null,
    }

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }
  
  updateRocket () {
    this.fetchData.getRocket()
      .then(data => {this.setState({ rockets: data.map(item => item.name) })
          return data})
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }, () => console.log(this.state)), 
      )
  }

  changeRocket = (rocket) => {
    this.setState({rocket}, this.updateRocket);
  }

  updateCompany = () => {
    this.fetchData.getCompany()
      .then(data => this.setState({company: data}))
  }
  
  render () {
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        
        <Route exact path="/" render={() => this.state.company && <Home company={this.state.company} />} />
          

        <Route exact path="/rocket" render={() => this.state.rocketFeatures && <Features {...this.state.rocketFeatures} rocket={this.state.rocket}/>} />
          
          
                     
        <Route exact path="/details/:id" component={Details} />          
      
        <Route exact path="/calendar" component={Calendar} />
        
        {this.state.company && <Footer {...this.state.company.links}/>}
      </BrowserRouter>
    );
  }
}

export default App;