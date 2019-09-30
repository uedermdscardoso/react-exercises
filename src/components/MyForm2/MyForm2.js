import React, { Component } from 'react';
import './MyForm2.css';

class MyForm2 extends Component {

    constructor(props){
        super(props);
        
        this.inputName = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(this.inputName.current.value); //Exibe o valor digitado
        event.preventDefault(); //Tirar o comportamento padrão de redirecionar a outra página

    }

    render(){
        const { state } = this;

        // /> -- Self closed
        //Dependente do estado do formulário e não do react
        return(
            <div>
                <h1>Form 2</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name"  ref={this.inputName} />
                    
                    <input type="submit" value="Enviar" />
                </form>                
            </div>
        );
    };
}
export default MyForm2;