// import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import FrontPage from './FrontPage';
import FormPage from './FormPage';


//top part pictures
import pic4 from "./images/nested_circle.png";
import pic5 from "./images/insta_camera.png";

//rest all are logos 
import pic6 from "./images/insta_heart.png";
import pic7 from "./images/insta_rocket.png";
import pic8 from "./images/insta_three_dots.png";

import axios from "axios";

let months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];  
let today = new Date();
let date=months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();




function App() {

const [data,setData]=useState([]);

//create the header 
let Top = (props) =>{
  const {nested_circle,insta_camera}=props;
  return(
    <div className='top'>
      <div className='image-container-1'>
        <img className='img' src={nested_circle} alt=""></img>
      </div>
      <span className='top-text'>Instaclone</span>
      <Link to="/form"><div className='image-container-2'>
        <img className='img' src={insta_camera} alt=""></img>
      </div></Link>
    </div>
  )
}


  useEffect(()=>{
    alert("FETCHING DATA TAKES TIME , KINDLY WAIT AND REFRESH THE BROWSER IN SMALL INTERVAL");
    axios
      .get("http://localhost:5000")
      .then((res)=>setData(res.data.reverse()))
      .catch((err)=>console.log(err,"it has an error"));
  },[])
  return(
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<FrontPage></FrontPage>}></Route>
      <Route path="landing" element={

      <div className='wrapper'>
        <Top nested_circle={pic4} insta_camera={pic5}></Top>
        {data.map((singleData)=>{
          console.log(singleData);
          const base64String = btoa(new Uint8Array(singleData.img.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
              }, ''));
          return(
            <>
                  <div className='card'>

                  <div className='part-1'>
                    <div>
                      <div className='name-text'>{singleData.author}</div>
                      <div className='location-text'>{singleData.location}</div>
                    </div>
                    <div className='three-dots-container'>
                      <img src={pic8} alt=""></img>
                    </div>
                  </div>

                  <div className='part-2'>
                    <img src={`data:image/png;base64,${base64String}`} alt=""/>
                  </div>

                  <div className='part-3'>
                    <div>
                      <div className='heart-rocket-container'>
                        <div className='heart-container'>
                          <img src={pic6} alt=""></img>
                        </div>
                        <span className='rocket-container'>
                          <img src={pic7} alt=""></img>
                        </span>
                      </div>
                      <div className='like-text-container'>{`${Math.floor((Math.random() * 10) + 1)} likes`}</div>
                    </div>
                    <div className='date-text-container'>{date}</div>
                  </div>

                  <div className='part-4'>
                    <div className='description-text-container'>{singleData.description}</div>
                  </div>
                  </div>
            </>
          )
        })}
      </div>}></Route>
      <Route path="form" element={<FormPage nested_circle={pic4} insta_camera={pic5}></FormPage>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
