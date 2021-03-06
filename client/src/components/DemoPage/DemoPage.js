const Demo = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }

    const onUsernameChangeHandler = (e) => {
        console.log(e.target.value);
    }


    return(
        <div>
            <h1>Demo Form</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">User Name:</label>
                <input id="username" type="text" name="username" onChange={onUsernameChangeHandler}/>
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" name="age"/>
                <br />
                <input type="submit" value="Изпрати"/>
            </form>
        </div>
    );
}

export default Demo;