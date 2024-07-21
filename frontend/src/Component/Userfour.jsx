import './Userfour.css';
import Card from './Card';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Userfour(){

    return (
        <>
                       <div className='Navbarmain'>
<div className='winnoisetxt'><span id="txtwinnoise">Winnoise</span><span id="iconlogo"><YouTubeIcon/></span></div>
</div>

<div className='userone_heading'>For Four Users</div>

        <div className='userthree_main'>
            <div className='firstrow'>
        <Card src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" name="user 1"/>
        <Card src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" name="user 2"/>
        </div>
        <div className='second_row'>
        <Card src="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755" name="user 3"/>
        <span id="fourthuser"><Card src="https://wallpapers.com/images/file/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg" name="user 4"/></span>
        </div>
        </div>
        </>
    )

}


export default Userfour;