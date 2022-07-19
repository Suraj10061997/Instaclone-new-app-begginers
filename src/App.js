// import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FrontPage from './FrontPage';


//top part pictures
import pic4 from "./images/nested_circle.png";
import pic5 from "./images/insta_camera.png";

//rest all are logos 
import pic6 from "./images/insta_heart.png";
import pic7 from "./images/insta_rocket.png";
import pic8 from "./images/insta_three_dots.png";





function App() {
  const [users, setUsers] = useState([]);
  const GetData = async() =>{
    const response = await fetch("http://localhost:3004/user");
    const users=await response.json();
    setUsers(users);
    console.log(users);
  }
    useEffect(()=> {
        GetData();
    }, []);
  //create the header 
  let Top = (props) =>{
    return(
      <div className='top'>
        <div className='image-container-1'>
          <img className='img' src={props.nested_circle} alt=""></img>
        </div>
        <span className='top-text'>Instaclone</span>
        <div className='image-container-2'>
          <img className='img' src={props.insta_camera} alt=""></img>
        </div>
      </div>
    )
  }

  //create the cards
  let Cards = (props) =>{
    return(
      <div className='card'>

        <div className='part-1'>
          <div>
            <div className='name-text'>{props.value.name}</div>
            <div className='location-text'>{props.value.location}</div>
          </div>
          <div className='three-dots-container'>
            <img src={props.three_dots} alt=""></img>
          </div>
        </div>

        <div className='part-2'>
          <img src={props.value.PostImage} alt=""></img>
        </div>

        <div className='part-3'>
          <div>
            <div className='heart-rocket-container'>
              <div className='heart-container'>
                <img src={props.heart} alt=""></img>
              </div>
              <span className='rocket-container'>
                <img src={props.rocket} alt=""></img>
              </span>
            </div>
            <div className='like-text-container'>{props.value.likes} likes</div>
          </div>
          <div className='date-text-container'>{props.value.date}</div>
        </div>

        <div className='part-4'>
          <div className='description-text-container'>{props.value.description}</div>
        </div>
      </div>
    )
  }

return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage></FrontPage>}></Route>
      <Route path="landing" element={
        <div className='wrapper'>
        <Top nested_circle={pic4} insta_camera={pic5}></Top>
        {users.map(function(value,index){
          return(<Cards
            value={value}
            three_dots={pic8} 
            heart={pic6} rocket={pic7}
            >
            </Cards>)
        })}
      </div>
      }></Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
