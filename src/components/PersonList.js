import React, { useState } from 'react';

function PersonList() {
    const [persons, setpersons] = useState([{
        username: 'Ajit',
        age: 10
    }, {
        username: 'Ajay',
        age: 20
    }]);
    return <div>
        {persons.map((person, index) => {
            return <p key={index}> {person.username}</p>
        })}
    </div>;
}

export default PersonList;
