import React from 'react';

function PasswordInput({value, onChange}) {
    const handlePasswordChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="password">Password </label>
            <input
                type="password"
                id="password"
                name="password"
                value={value}
                onChange={handlePasswordChange}
                minLength="8"
                required
            />
        </div>
    );
}

export default PasswordInput;