import './Userone.css';
import Card from './Card';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Userone(){

    return (
        <>

<div className='Navbarmain'>
<div className='winnoisetxt'><span id="txtwinnoise">Winnoise</span><span id="iconlogo"><YouTubeIcon/></span></div>
</div>

<div className='userone_heading'>For one user</div>

        <div className='userone_main'>
        <Card src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" name="user 1"/>
        </div>
        </>
    )

}


export default Userone;
