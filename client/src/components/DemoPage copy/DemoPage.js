import { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }

    onUsernameChangeHandler(e){
        this.setState({username: e.target.value})
    }


render() {
    return (
        <div>
            <h1>Demo Form</h1>

            <form onSubmit={this.onSubmitHandler}>
                <label htmlFor="username">User Name:</label>
                <input id="username" type="text" value={this.state.username} name="username" onChange={this.onUsernameChangeHandler.bind(this)} />
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" name="age" defaultValue="18" />
                <br />
                <input type="submit" value="Изпрати" />
            </form>
        </div>
    );

}
}


export default Demo;