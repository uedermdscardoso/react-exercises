import React,{ Component } from 'react';
import './App.css';
import TextCounter from './components/TextCounter/TextCounter';
import SelectAndShow from './components/SelectAndShow/SelectAndShow';
import MyForm from './components/MyForm/MyForm';
import MyForm2 from './components/MyForm2/MyForm2';
import DefaultValue from './components/DefaultValue/DefaultValue';

class App extends Component {

  render(){
    return(
      <div>
        <TextCounter limit={10} />
        <hr />
        <SelectAndShow />
        <hr />
        <MyForm />
        <hr />
        <MyForm2 />
        <hr />
        <DefaultValue />
      </div>
    );
  };
}
export default App;
