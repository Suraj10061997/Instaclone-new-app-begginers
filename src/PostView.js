import React from "react";
import Header from "./Header";
import "./App.css";
//rest all are logos 
import pic6 from "./images/insta_heart.png";
import pic7 from "./images/insta_rocket.png";
import pic8 from "./images/insta_three_dots.png";

let months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];  
let today = new Date();
let date=months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();

const PostView = (props) =>{
    const {data} = props;
    // console.log(loading);
    // if(loading === true){
    //     return(
    //         <div>
    //             <h1>Loading.....</h1>
    //         </div>
            
    //     )
    // }
    return(
        <div className='wrapper'>
        <Header></Header>
        {data.map((singleData)=>{
        //   console.log(singleData);
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
      </div>
    )
}

export default PostView;