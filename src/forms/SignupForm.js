import React, {useState} from 'react';
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./inputs/SubmitButton";
import StringInput from "./inputs/StringInput";
import API_URLS from "../api";


function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(API_URLS.SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, username}),
        });
        const data = await response.json();
        if (response.ok) {
            // Traitement en cas de succès
        } else {
            setError(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <EmailInput value={email} onChange={setEmail}/>
            <PasswordInput value={password} onChange={setPassword}/>
            <StringInput value={username} label="Username" onChange={setUsername}/>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <SubmitButton label="Sign In"/>
        </form>
    );
}

export default SignupForm;
