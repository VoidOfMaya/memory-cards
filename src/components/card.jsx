import { useState } from 'react';
import '../styles/card.css'
;
function Card({photo, hasbeenCLicked = false}){
    const [status, setStatus] = useState(false)
    //color change for development purposes
    const [bgColor, setBgColor] = useState("white");

    return(
    <div className="card"
        onClick={()=>{
            if(!hasbeenCLicked){
                setStatus(true);
                setBgColor(bgColor === "white" ? "lightblue" : "white");
                console.log(status)
                
            }
         }}
        style={{backgroundColor: bgColor}}
        >
        <img src={photo} alt="randomly generated photo"
                         height='300px'
                         width='300px'></img>
        <h3>card example </h3>

    </div>
)
}
export{
    Card
}