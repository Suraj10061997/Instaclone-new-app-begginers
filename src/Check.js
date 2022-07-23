import React  from "react";

const Check = ({data}) =>{
    console.log("got it--->"+data[0]);
    return(
        <>
            {data.map((val)=>{
                <h1>{val}</h1>
            })}
        </>
    )
}

export default Check;