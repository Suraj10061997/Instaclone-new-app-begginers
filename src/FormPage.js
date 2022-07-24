import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './App.css';
import "./FormPage.css";
import axios from "axios";
const FormPage = (props) => {
  
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [file,setFile] = useState();
  // const [formLoading,setFormLoading]=useState(true);
 
  const OnFileChange = (event) =>{
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
        description,
        location,
        author,
        file
    })
    if(file && description && author && location){

          const formData = new FormData();
          formData.append("testImage",file);
          formData.append("description",description);
          formData.append("author",author);
          formData.append("location",location);
          const config={
            headers:{
              "content-type":"multipart/form-data",
            }
          }
          axios.post("http://localhost:5000",
            formData,config
        )
          .then((res)=>{
            console.log(res);

          })
          .catch((err)=>{
            console.log(err,"fetching failed");
          })
          navigate("/landing",{replace:true});
  
    }
    else{
        alert("Kindly select an image!!!");
    }

  }

  return (
    <div className="wrapper" style={{height:"100vh"}}>
    <Header></Header>
    <form className="form" onSubmit={handleSubmit}>

        <div>
            <input className="image-upload"
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={OnFileChange}
            />
        </div>

        <div className="author-location-div">
                <div className="author-div">
                    <input className="author"
                    name="author"
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required />
                </div>
                
                <div className="location-div">
                <input className="location"
                name="location"
                type="text"
                placeholder="Location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required />
                </div>
        </div>
        
        <div className="description-div">
        <input className="description"
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required />
        </div> 

        
   
      <button className="button">Post</button>
    </form>
    </div>
  );
}

export default FormPage;