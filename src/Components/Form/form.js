import React from 'react';
import './style.css'

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            phone:"",
            gender:"",
            password:""
        }
    }

    onNameChange = (event) => {
        this.setState(
            {name: event.target.value}
        )
    }

    onEmailChange = (event) => {
        this.setState(
            {email: event.target.value}
        )
    }

    onPhoneChange = (event) => {
        this.setState(
            {phone: event.target.value}
        )
    }

    onGenderChange = (event) => {
        this.setState(
            {gender: event.target.value}
        )

    }

    onPasswordChange = (event) => {
        this.setState(
            {password:event.target.value}
        )
    }

    
    onSubmit = () =>{ 
        
        if(this.state.phone === '' || 
        this.state.phone.length !==10){
            window.alert("Invalid Phone Number!")
            return;

        }
        window.alert(`
        Name: ${this.state.name}
        Email: ${this.state.email}
        Phone: ${this.state.phone}
        Gender: ${this.state.gender}
        Password: ${this.state.password}
        `)
        
        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            name:"",
            email:"",
            phone:"",
            gender:"",
            password:""
        })

    }

    render = () => {
        return (
            <div className="form-body"> 
                <p className="title"> <u>User Form</u></p>
                
                <input 
                onChange={this.onNameChange}
                value={this.state.name}
                className="input-style" 
                type="text" 
                placeholder="Enter your Name"/>
                
                <input onChange={this.onEmailChange}
                value={this.state.email}
                className="input-style" 
                type="email" 
                placeholder="Enter your E-mail ID"/>
                
                <input onChange={this.onPhoneChange}
                value={this.state.phone}
                className="input-style" 
                type="text" 
                placeholder="Enter your Phone Number"/>

                <select onChange={this.onGenderChange}
                value={this.state.gender}
                className="input-style">
                    <option>Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender Male">Transgender Male</option>
                    <option value="Transgender Female">Transgender Female</option>
                    <option value="Other">Other</option>
                </select>

                <input onChange={this.onPasswordChange}
                value={this.state.password}
                className="input-style" 
                type="password"
                placeholder="Enter your Password"/>

                <button onClick={this.onSubmit} className="submit-btn">SUBMIT</button>
                <button onClick={this.clearForm} className="clear-btn"> Clear Form </button>

            </div>

        )

    }
}

export default Form; 