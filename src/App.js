import React, { Component } from 'react';
import logo from './logo.svg';
import Events from './Components/Events';

import styled from 'styled-components';

import './App.css';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: palevioletred;
  color: white;
  border: 2px solid palevioletred;
`;

class App extends Component {
  constructor(){
    super();
    this.sortNew = this.sortNew.bind(this);
    this.state = {
      data:[],
      newFirst:false,
    }
  }

  sortNew(){
    this.setState({
      newFirst:true,
    })
  }

  reload(){
    window.location.reload();
  }

  componentDidMount(){

    // I CHAGED THE API - THE EVENT DATA HAD A BAD STRUCTURE
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then(findresponese => 
    {
        this.setState({      
            data:findresponese.movies,
        })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jonas testing React</h1>
        </header>
        <Wrapper>
          <Button onClick={this.sortNew} >Sort - (New first)</Button>
          <Button primary onClick={this.reload} >Reload - (Old First)</Button>
          <Events datas={this.state.data} sortMe={this.state.newFirst} />
        </Wrapper>
        
      </div>
    );
  }
}

export default App;
