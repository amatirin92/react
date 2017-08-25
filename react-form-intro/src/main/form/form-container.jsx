import React, { Component } from 'react';
import FormComponent from "./form-component";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName: "",
            email: ""
        }
    }
    handleInput = () => {
        console.log(e.target);
        this.setState({
            
        })
    }
    render(){
        return (
        <formComponent/>
        );
    }
}

export default FormContainer;