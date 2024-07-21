import React, { useState } from 'react';
import './Mainpage.css';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Mainpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        // Validate email format and password length
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Invalid email format');
            return;
        }

        if (password.length < 6 || password.length > 30) {
            alert('Password must be between 6 to 30 characters');
            return;
        }

        const data = { email, password, user };

        axios.post('http://localhost:5000/signup', data)
            .then(response => {
                if (user === '1') {
                    navigate('/userone');
                } else if (user === '2') {
                    navigate('/usertwo');
                } else if (user === '3') {
                    navigate('/userthree');
                } else if (user === '4') {
                    navigate('/userfour');
                } else {
                    alert('Choose a valid user');
                }
            })
            .catch(error => {
                console.error('There was an error signing up!', error);
            });
    };

    return (
        <>
            <NavBar />
            <div className='headingmain'>Unlimited movies, TV shows and more</div>
            <div className='maininfo'>
                <span id="infoone">Watch wherever you want.</span>
                <span id="infotwo">Ready to watch? Enter your email address and just signup</span>
            </div>
            <div className='signup_main'>
                <div className='emailfield'>
                    <span id="emailtxt">Enter email</span>
                    <span>
                        <input type="text" id="txtemail" onChange={(e) => setEmail(e.target.value)} />
                    </span>
                </div>
                <div className='passwordfield'>
                    <span id="pwdtxt">Enter password</span>
                    <span>
                        <input type="password" id="txtpwd" onChange={(e) => setPassword(e.target.value)} />
                    </span>
                </div>
                <div className='userfield'>
                    <span id="usertxt">Enter the no. of user</span>
                    <span id="userno">
                        <select id="userdesign" onChange={(e) => setUser(e.target.value)}>
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </span>
                </div>
                <div className='btnstart'>
                    <button id="startbtn" onClick={handleStart}>Start</button>
                </div>
            </div>
        </>
    );
}

export default Mainpage;