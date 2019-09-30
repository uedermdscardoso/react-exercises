import React, { Component } from 'react';
import './TextCounter.css';

class TextCounter extends Component{
    
    static defaultProps = {
        limit: 15
    }

    constructor(props){
        
        super(props);
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const element = event.target;
        let total = element.value.length;
        if(total <= this.props.limit)
            this.setState({
                totalChars: total,
                text: element.value
            });
    }

    render(){
        const {props, state} = this; 

        return(
            <div>
                <h1>*** Counter ***</h1>
                <textarea onChange={this.handleChange} value={state.text} />

                <div>
                    <strong>Total: { state.totalChars } / { props.limit } </strong>
                </div>
            </div>
        )
    }
}
export default TextCounter;