import React from 'react';

function StringInput({value, label, onChange}) {
    const handleStringChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="username">{label} </label>
            <input
                type="text"
                id="username"
                name="username"
                value={value}
                onChange={handleStringChange}
                minLength="1"
                required
            />
        </div>
    );
}

export default StringInput;