import React, {useState} from 'react';
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";


function App() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowSignupForm(false);
    };

    const handleSignupClick = () => {
        setShowSignupForm(true);
        setShowLoginForm(false);
    };

    return (
        <div className="App bg-amber-800">
            <h1>Welcome to my App</h1>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleSignupClick}>Signup</button>
            {showLoginForm && <LoginForm/>}
            {showSignupForm && <SignupForm/>}
        </div>
    );
}

export default App;