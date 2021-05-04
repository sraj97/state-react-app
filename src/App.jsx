import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import Cerys from './components/Cerys';
import Sam from './components/Sam';
const App = () => {
    
    const [count, setCount] = useState(0);

    const[person, setPerson] = useState(true); 

    // the curly braces bellow mean you are assigning the state as an empty object, it's just a placeholder which we then fill via the api fetch call
    const[randomPerson, setRandomPerson] = useState({}); 

//---------------------------------------------------------------------------------------------------------
    //useEffect example

    // useEffect takes 2 parameters 
    //1. a call back (contains what we want to happen when the useEffect runs)
    //2. dependencies (array), with an empty array this will only run on the initial render 

    // useEffect(() => {
    //     console.log("this only runs the first time the component mounts");
    //   }, []);

    //   useEffect(() => {
    //     console.log("this runs when the component mounts and when count updates");
    //   }, [count]);

    //   useEffect(() => {
    //     console.log("this runs when the component mounts and when person updates");
    //   }, [person]);

    //   useEffect(() => {
    //     console.log("this runs whenever any state changes... and on the initial mount");
    //   });
//---------------------------------------------------------------------------------------------------------

    const getRandomPerson = () => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(json => setRandomPerson(json))
        .catch(err => console.log(err))
    };

    useEffect(() => {
        getRandomPerson();
    }, []);

    const incrementCounter = () => {
        setCount(count + 1);
    }

    const decrementCounter = () => {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick ={decrementCounter}>-</button>
            <Counter count = {count} />
            <button onClick ={incrementCounter}>+</button>

            <section style={{border: "2px solid black"}}>
                <button onClick={() => setPerson(!person)}>Change Person</button>
                {person ? <Cerys /> : <Sam />} 
            </section>
        </>
    )
}

export default App


