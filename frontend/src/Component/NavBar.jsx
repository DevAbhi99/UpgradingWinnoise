import './NavBar.css';
import YouTubeIcon from '@mui/icons-material/YouTube';

function NavBar(){
    return (
        <>
<div className='Navbarmain'>
<div className='winnoisetxt'><span id="txtwinnoise">Winnoise</span><span id="iconlogo"><YouTubeIcon/></span></div>
<span id="signbtn"><a href="http://localhost:3000/login"><button id="btnsign">Login</button></a></span>
</div>

        </>
    )
}

export default NavBar;