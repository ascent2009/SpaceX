import React from 'react';
import './style.css';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
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
    }

  componentDidMount() {
    this.updateRocket();
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
  
  render () {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features rocketFeatures={this.state.rocketFeatures} rocket={this.state.rocket}/>
        {/* <Details /> */}
        {/* <Calendar /> */}
        <Footer />
      </>
    );
  }
}

export default App;