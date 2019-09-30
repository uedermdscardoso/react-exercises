import React, { Component } from 'react';
import './SelectAndShow.css';

class SelectAndShow extends Component{
    
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'None'
        };
    }
    
    handleChange(event){
        const element = event.target; 
        let val = element.value;
        if(element.value === "Month")
            val = 'None';

        this.setState({
            value: val
        });
    };

    render(){
        const {state, props} = this;

        let months = ["January", "February", "March", "Abril", "May", "June", "July", "August", "September", "October", "November", "December"];

        return(
            <div>
                <h1>*** Select And Show ***</h1>
                <select ref="selectBox" onChange={this.handleChange}>
                    <option value="Month">Month</option>
                    {
                        months.map(month => {
                            return(
                                <option value={month}>{ month }</option>
                            );
                        })
                    }
                </select>
                <br />
                <div>
                    <p> Value selected: { this.state.value } </p>
                </div>
            </div>
        );
    };
}
export default SelectAndShow;