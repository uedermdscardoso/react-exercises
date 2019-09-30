import React, { Component } from 'react';
import './Request.css';

class Request extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        };
   
        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(event){
        //console.log(this.inputName.current.value); //Exibe o valor digitado
        event.preventDefault(); //Tirar o comportamento padrão de redirecionar a outra página

        fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.items
                });
                //console.log(data);
            })
    }

    render(){
        const { state } = this;

        return(
            <div>
                <h1>Form 4 - Request</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name"  ref={this.inputName} />
                    
                    <input type="submit" value="Enviar" />

                    <ul>
                        {
                            state.list.map(item => {
                                return(<li>{item.full_name}</li>);
                            })
                        }
                    </ul>
                </form>      
            </div>
        );
    };
}
export default Request;