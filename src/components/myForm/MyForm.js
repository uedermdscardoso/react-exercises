import React, { Component } from 'react';
import './MyForm.css';

class MyForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'abc',
            message: 'Message',
            languageDefault: 'Javascript',
        }

        this.languages = [
            { "name": "Java", "value": "java"},
            { "name": "C++", "value": "c++"},
            { "name": "C#", "value": "c#"},
            { "name": "PHP", "value": "php"},
            { "name": "Javascript", "value": "javascript"},
            { "name": "Python", "value": "python"},
            { "name": "Ruby", "value": "ruby"}
        ];

        this.handleChange = this.handleChange.bind(this);
    }

    //Lidar com as mudanças realizadas no estado do input
    handleChange(event){
        const target = event.target,
              value = target.type === 'checkbox' ? target.checked : target.value,
              name = target.name;
        this.setState({
            [name]: value
        });
    }

    render(){
        const { state } = this;

        // /> -- Self closed
        return(
            <div>
                <h1>Form</h1>
                <form>
                    <label>Name: </label>
                    <input type="text" name="name" value={state.name} onChange={this.handleChange} /> {state.name}
                    
                    <br />
                    <textarea value={state.message} name="message" onChange={this.handleChange} /> 
                    <br />
                    
                    <select value={state.languageDefault} name="languageDefault" onChange={this.handleChange}>
                        {
                            this.languages.map(language => {
                                return (
                                    <option value={language.value}>{language.name}</option>
                                );
                            })
                        }
                    </select>
                    <br />
                    <input type="submit" value="Enviar" />
                </form>                
            </div>
        );
    };
}
export default MyForm;