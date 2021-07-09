import React, { Component } from 'react';
import './demo.css';

const options = [
    {label: 'IT', value: 'it'},
    {label: 'Engineer', value: 'enginner'},
    {label: 'Java', value: 'java'},
]


class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            age: 18,
            bio: 'Lorem Ipson',
            occupation: 'Java', 
            errors: {
                email: false
            }
        }

        this.emailInput = React.createRef();
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(e){
        e.preventDefault();
        const {username, age} = this.state;
        console.log(this.state);

        if(!this.emailInput.current.value.includes('@')){
            this.setState({errors: {email: true}});
            this.emailInput.current.focus();
        }
        //.current Означава текущата референция
        console.log(this.emailInput.current.value);

    }
   
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Demo Form</h1>

                <form>
                    <label htmlFor="username">User Name:</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={this.state.username} 
                        name="username" 
                        onChange={this.onChangeHandler} 
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        ref={this.emailInput} 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="example@gmail.com"
                    />
                    <div 
                        className={`input-validation ${this.state.errors.email && 'show'}`}
                    >
                        Invalid Email:
                    </div>
                    
                    <label htmlFor="age">Age:</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={this.state.age} 
                        name="age" 
                        onChange={this.onChangeHandler}
                    />
                    <br />

                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio" value={this.state.bio} onChange={this.onChangeHandler} />

                    <label htmlFor="occupation">Occupation</label>
                    <select name="occupation" id="occupation" onChange={this.onChangeHandler} value={this.state.occupation}>
                       {options.map( x => 
                            <option key={x.value} value={x.value}>{x.label}</option>
                        )}
                    </select>

                    <input 
                        type="submit"  
                        value="Изпрати" 
                        onClick={this.onSubmitHandler.bind(this)}
                    />
                </form>
            </div>

        );

    }
}


export default Demo;