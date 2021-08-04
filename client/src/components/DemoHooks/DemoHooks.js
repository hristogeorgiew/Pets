import React,{useState, useEffect} from 'react'
import useFetch from '../../hooks/userFetch';

function DemoHooks() {
    const [state, setState] = useState({
        count: 0,
        step: 1
    });

    //const [character, setCharacter] = useState({})
    const [character, isCharacterLoading] = useFetch(`https://swapi.dev/api/people/${state.step}`);
    //
    //useEffect(() => {
    //    fetch('https://swapi.dev/api/people/1')
    //        .then(res => res.json())
    //        .then(result => setCharacter(result))
    //}, [state.step])
    //
    const onCounterButtonClickHandler = () => {
        setState(oldState => ({...oldState, count: oldState.count + oldState.step}));
    };

    const selectOnChangeHandler = (e) => {
        const stepValue = Number(e.target.value);

        setState(oldState => ({...oldState, step: stepValue}))
    }

    return (
        <div>
            <h1>{isCharacterLoading ? 'Loading...' : character.name} - Counter</h1>
            <div>{state.count}</div>
            <button onClick={onCounterButtonClickHandler}>Increment</button>
            <label htmlFor="step">Step</label>
            <select name="step" id="step" onChange={selectOnChangeHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    )
}

export default DemoHooks
