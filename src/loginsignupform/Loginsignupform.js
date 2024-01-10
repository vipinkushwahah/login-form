import './Loginsignupform.css';
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react';
import signup_icon from '../assets/signup.png'
import user_icon from '../assets/user.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/reset-password.png'
import { useState } from 'react'
const Loginsignupform = () => {
    const [action, setaction] = useState("Login");
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    useEffect(() => {
        VanillaTilt.init(document.querySelector('.hadder'), {
            max: 5,
            speed: 100,
            glare: true,
            'max-glare': 0.50
        })
    })

    const handlechange = (name, event) => {
        setDetails((prv) => {
            return {
                ...prv,
                [name]: event.target.value
            }
        })
    };

    const login = () => {
        console.log(details)
        setaction("Login")
    }

    const signUp = () => {
        console.log(details)
        setaction("Sign Up")
    }

    return (
        <div className="container">
            <div className="hadder">
                <div className="haddimg">
                    <h1>
                        <img src={signup_icon} alt="signup-icon" />
                        {action}
                    </h1>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Login" ? <div></div> : <div className='inputa'>
                        <img src={user_icon} alt='user-icon' />
                        <input type='text' placeholder='Enter Your Name' onChange={(e) => handlechange("name", e)} />
                    </div>}

                    <div className='inputa'>
                        <img src={email_icon} alt='user-icon' />
                        <input type='text' placeholder='Enter Your E-mail' onChange={(e) => handlechange("email", e)} />
                    </div>
                    <div className='inputa'>
                        <img src={password_icon} alt='user-icon' />
                        <input type='text' placeholder='Enter Your Password' onChange={(e) => handlechange("password", e)} />
                    </div>
                </div>
                <div className='lost-password'>Forgot-Password? <span>Click here!</span></div>
                <div className='submit-container'>
                    <div className={action === "Login" ? "Submit " : "Submit"}>
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                    <div className={action === "sign Up" ? "Submit " : "Submit"} >
                        <button onClick={login}>Login</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Loginsignupform