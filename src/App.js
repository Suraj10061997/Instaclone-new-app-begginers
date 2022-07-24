// import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FrontPage from './FrontPage';
import FormPage from './FormPage';
import PostView from './PostView';
import axios from "axios";

// /https://www.youtube.com/watch?v=Z_D4w6HmT8k
//https://62dbd756e705d101a6a568cb--mellow-vacherin-42e0ed.netlify.app/

function App() {

  const [data,setData]=useState([]);
  // const [loading,setLoading]=useState(true);


  useEffect(()=>{
    // alert("FETCHING DATA TAKES TIME , KINDLY WAIT AND REFRESH THE BROWSER IN SMALL INTERVAL");
    axios
      .get("https://instaclone-new-app-2.herokuapp.com/")
      .then((res)=>{
        setData(res.data.reverse());
        // setLoading(false);
      })
      .catch((err)=>console.log(err,"it has an error"));
  },[data])


  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage></FrontPage>}></Route>
      <Route path="landing" element={<PostView data={data} ></PostView>}></Route>
      <Route path="form" element={<FormPage></FormPage>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
