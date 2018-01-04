import React from 'react';

const person = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                <span>Name: </span><label>{props.person.name}</label>
                <input type="text" onChange={props.changed} value={props.person.name} ></input>
            </div>
            <div>
                <span>Last Name: </span><span>{props.person.lastname}</span>
            </div>
            <div onClick={props.click}>
                <span>Age: </span><span>{props.person.age}</span>
            </div>
        </div>
    );
};

export default person;