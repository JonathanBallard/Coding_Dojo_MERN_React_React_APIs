import React, {useState, useEffect} from 'react';


function AllPokemon(props){
    const [state, setState] = useState([]);

    // async function fetchPoke(){
    //     try {
    //         const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
    //         console.log(resp)
    //         return resp
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    // let resp = fetchPoke();
    // console.log('TEST', resp)

    

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
            .then(response => response.json())
            .then(response => setState(response.results))
    }, []);

    console.log(state)
    return (
        <div>
            <ul>
                {state.length > 0 && state.map((person, index)=>{
                    return (<li key={index}>{state[index].name}</li>)
                })}
            </ul>
        </div>

    )

}


export default AllPokemon;

