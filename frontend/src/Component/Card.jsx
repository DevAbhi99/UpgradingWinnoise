import './Card.css';

function Card(props){

return (
    <>
    <div className='userprofile'>
   <div className='profileimg'><img id="imgprofile" src={props.src}/></div>
   <div className='profilebtn'><a href="https://winnoise.com/"><button id="btnprofile">{props.name}</button></a></div>
   
    </div>
    </>
)

}

export default Card;