import './Usertwo.css';
import Card from './Card';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Usertwo(){

    return (
        <>
        <div className='Navbarmain'>
<div className='winnoisetxt'><span id="txtwinnoise">Winnoise</span><span id="iconlogo"><YouTubeIcon/></span></div>
</div>

<div className='userone_heading'>For Two Users</div>

        <div className='usertwo_main'>
        <Card src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" name="user 1"/>
        <Card src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" name="user 2"/>
        </div>
        </>
    )

}


export default Usertwo;