const rizzLord = "S8VpAUi2kPtV9sXLAEkYoBvjtEmWWzDx";

const giphy = `https://api.giphy.com/v1/gifs/translate?api_key=${rizzLord}&s=`;

 const memeSearch =async (query )=>{
   const url = giphy+query;

   try{
    const res =  await fetch(url);
    const data = await res.json();
    const imgUrl = data?.data?.images?.original?.url || null;
    console.log(imgUrl);
    return imgUrl; 
   }catch(err){
    console.log('giphy fetch error', err);
    return null;
   }
 }

export{
    memeSearch,
}