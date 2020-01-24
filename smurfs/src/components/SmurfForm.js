import React, { useState } from 'react';


const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height:""
        });
    };

    const handleChanges = e => {

        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChanges}
                    value={newSmurf.name} />
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={handleChanges}
                    value={newSmurf.age} />
                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <button type="submit">Add the Blue Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm; 