
import React, { useState, useEffect } from 'react';
import Poke from './poke';

function Pokemon(){
    let testVar = fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
    //create a poke for each instance of pokemon that only shows name
    
    console.log(testVar)


    return (
        <>
            <div id="fetchBtn" className="btn btn-lg btn-primary mt-5">Fetch Pokemon</div>
        </>
    )

}




export default Pokemon;


