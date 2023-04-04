import React, {useState} from 'react';
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./inputs/SubmitButton";
import API_URLS from "../api";


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(API_URLS.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
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
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <SubmitButton label="Log In"/>
        </form>
    );
}

export default LoginForm;
