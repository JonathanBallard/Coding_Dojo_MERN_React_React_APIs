
import React, { useState, useEffect } from 'react';


function Poke(props){

    return (
        <div key={props.index}>
            {props.name}
        </div>
    )

}




export default Poke;


