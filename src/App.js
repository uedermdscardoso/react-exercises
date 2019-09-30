import React,{ Component } from 'react';
import './App.css';
import TextCounter from './components/textCounter/TextCounter';
import SelectAndShow from './components/selectAndShow/SelectAndShow';

class App extends Component {
  render(){
    return(
      <div>
        <TextCounter limit={10}></TextCounter>
        <hr />
        <SelectAndShow></SelectAndShow>
      </div>
    );
  };
}
export default App;
