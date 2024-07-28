import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [hasFocus, setHasFocus] = useState(document.hasFocus());

    useEffect(() => {
        const handleFocus = () => setHasFocus(true);
        const handleBlur = () => setHasFocus(false);

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

// Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>Does Window Have Focus?</h1>
                    <div className="focus">
                        <p>Focus: <span id="focus">{hasFocus.toString()}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;