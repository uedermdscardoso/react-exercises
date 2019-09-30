import React,{ Component } from 'react';
import './App.css';
import TextCounter from './components/textCounter/TextCounter';

class App extends Component {
  render(){
    return(
      <TextCounter limit={10}></TextCounter>
    );
  };
}
export default App;
