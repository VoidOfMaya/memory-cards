import { useState,useEffect } from 'react';
import { fetchPhoto } from '../Logic/api';

import '../styles/card.css'
;
function Card({hasbeenCLicked = false}){
    const [status, setStatus] = useState(false);
    const [image, setImage] = useState(null);

    //color change for development purposes
    const [bgColor, setBgColor] = useState("white");
      
    //handelling gif load
    useEffect(()=>{
        const photo =fetchPhoto()
        setImage(photo);
    },[])

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
        <img src={image} alt="randomly generated photo"
                         height='300px'
                         width='300px'></img>
        <h3>card example </h3>

    </div>
)
}
export{
    Card
}