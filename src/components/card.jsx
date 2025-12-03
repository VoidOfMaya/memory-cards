import { useState,useEffect } from 'react';
import { fetchPhoto } from '../Logic/api';

import '../styles/card.css'
;
function Card({onClicked, onseSecondClick}){
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState(false);
    //hchecks image loading correctly 
    function imageLoads(link){
        return new Promise(resolve=>{
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = link;
        })
    }
    //handelling photo load
    useEffect(()=>{
        async function load(){
            let validImg = null

            while(!validImg){
                const photo = await fetchPhoto();
                const works = await imageLoads(photo)
                if(works){
                    validImg = photo
                }
            }
            
            setImage(validImg);            
        }
        load();

    },[])
    function handleClick(){
        if(!status){
            setStatus(true);
            onClicked(status);
        }else{
            onseSecondClick();
        }
    }
    return(
    <div className="card"
        onClick={handleClick}
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