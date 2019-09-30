import React,{ Component } from 'react';
import './App.css';
import TextCounter from './components/textCounter/TextCounter';
import SelectAndShow from './components/selectAndShow/SelectAndShow';
import MyForm from './components/myForm/MyForm';

class App extends Component {

  render(){
    return(
      <div>
        <TextCounter limit={10} />
        <hr />
        <SelectAndShow />
        <hr />
        <MyForm />
      </div>
    );
  };
}
export default App;
