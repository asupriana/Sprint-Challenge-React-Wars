import React from 'react'

function Character(props) {
    return (
        <div className='character'>
            <h3>{props.character.name}</h3>
            <p>Height: {props.character.height} cm</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p># of Species: {props.character.species.length}</p>
        </div>
    )
}

export default Character