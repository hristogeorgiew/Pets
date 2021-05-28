import { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            age: 18,
            bio: 'Lorem',
            occupation: 'zzz'
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }

    onSubmitHandlerTwo(e) {
        e.preventDefault();
        const {username, age} = this.state;
        console.log(username);
        console.log(age);
    }

   //onUsernameChangeHandler(e){
   //    this.setState({username: e.target.value})
   //}

   //onAgeChangeHandler(e){
   //    this.setState({age: e.target.value})
   //}

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }


render() {
    return (
        <div>
            <h1>Demo Form</h1>

            <form onSubmit={this.onSubmitHandler}>
                <label htmlFor="username">User Name:</label>
                <input id="username" type="text" value={this.state.username} name="username" onChange={this.onChangeHandler.bind(this)} />
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" name="age" value={this.state.age} onChange={this.onChangeHandler.bind(this)} />

                <label htmlFor="occupation">Occupation</label>
                <select name="occupation" id="occupation" onChange={this.onChangeHandler.bind(this)} value={this.state.occupation}>
                    <option value="it">IT</option>
                    <option value="engineer">Engineer</option>
                </select>

                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="bio" onChange={this.onChangeHandler.bind(this)} value={this.state.bio}></textarea>
                <br />
                <input type="submit" value="Изпрати" />
                <input type="submit" value="Изпрати" onClick={this.onSubmitHandlerTwo.bind(this)}/>
            </form>
        </div>
    );

}
}


export default Demo;