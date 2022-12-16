// import './App.css';
import './scss/App.scss';
import React from 'react';
import Card from './components/Card';
import Loader from './components/Loader';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 117,
      advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
      isLoading: false
    }
    this.handleSubmit = this.changeAdvice.bind(this);
  }

  getRandomInt = (min, max) =>  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setLoader = () => {
    this.setState({
      isLoading: true
    })

    setTimeout(() => 
    this.setState({
        isLoading: false
      })
      , 
    1000);
  }

  async fetchData() {
    const response = await fetch(`https://api.adviceslip.com/advice/${this.getRandomInt(1, 100)}`);
    const json = await response.json();
    this.setState({
      index: json.slip.id || 0,
      advice: json.slip.advice || ''
    })
  }

  changeAdvice() {
    this.setLoader();
    this.fetchData();  
  }

  render() {
    return (
      <div className="App"> 
          <Card 
            index={this.state.index}
            advice={this.state.advice}
            loading={this.state.isLoading}
            onClick={this.handleSubmit}
          />
        {this.state.isLoading && <Loader />} 
        <Footer />
      </div>
    );
  }
}

export default App;
