import React from 'react';

function EmailInput({value, onChange}) {
    const handleEmailChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label htmlFor="email"> Email </label>
            <input
                type="email"
                id="email"
                name="email"
                value={value}
                onChange={handleEmailChange}
                required
            />
        </div>
    );
}

export default EmailInput;