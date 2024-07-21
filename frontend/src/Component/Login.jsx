import React, {useState} from 'react';
import './Login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){

const [email,setEmail]=useState();
const [password,setPassword]=useState();
const navigate=useNavigate();

const handleLogin=(e)=>{

    e.preventDefault();

    const data = {
        email: email,
        password: password
    };

    axios.post('http://localhost:5000/login', data)
        .then(response => {
            const userType = response.data.user;
            switch(userType) {
                case 1:
                    navigate('/userone');
                    break;
                case 2:
                    navigate('/usertwo');
                    break;
                case 3:
                    navigate('/userthree');
                    break;
                case 4:
                    navigate('/userfour');
                    break;
                default:
                    alert('Unknown user type');
            }

        })
        .catch(error => {
            console.error('Error logging in', error);
            alert('Invalid email or password');
        });



}

    return (
        <>
      
      <div className='Navbarmain'>
        <div className='arrowback'><a href="http://localhost:3000/"><button id="arrowicon"><ArrowBackIcon/></button></a></div>
<div className='winnoisetxtone'><span id="txtwinnoise">Winnoise</span><span id="iconlogo"><YouTubeIcon/></span></div>
</div>

<div className='signup_main'>
        <div className='emailfield'><span id="emailtxt">Enter email</span><span><input type="text" id="txtemail" onChange={(e)=>setEmail(e.target.value)} /></span></div>
        <div className='passwordfield'><span id="pwdtxt">Enter password</span><span><input type="password" id="txtpwd" onChange={(e)=>setPassword(e.target.value)}/></span></div>
        <div className='btnstart'><button id="startbtn" onClick={handleLogin}>Login</button></div>
    </div>


        </>
    )
}

export default Login;