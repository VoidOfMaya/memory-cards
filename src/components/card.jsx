import '../styles/card.css'
;
function Card({photo}){

    return(
    <div className="card">
        <img src={photo} alt="randomly generated photo"
                         height='300px'
                         width='300px'></img>
        <h3>card example</h3>

    </div>
)
}
export{
    Card
}