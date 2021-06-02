
const search=document.getElementById('search');
const rechercher = document.getElementsByTagName("button")[0];

rechercher.addEventListener('click', async() =>{
  const textSearch=search.value;
   //const userAccessToken="BQBR6VxQ-luy8jfT65f58X0j2UrbuHzQAFsXUU09wu5mngYXyngRu0fY_-rgzlcbGMBeAOhLptwLy4FZ8HOJ9pQXE3qqiYQIryhwpDs5ibyatAedSWENsKZS8WMa9LIr_fG-ClMDQLtRTi4yvVd-wOCbWfSjTfxvxf6VpAR6SwcyHSP9zA";
   const userAccessToken="BQAOMFN7vQiSi7kO7yWaz8oyTSC__-nMXSnwG9VJqKe4BGkktAApabRzZL8VHCahBMkGNTwzaDSEhmWR1M7U3ofAvcLygV1Mn6LFH-u65XElU0-tmFKLNnPZktI5JuDZ6E1ZRTXQMaIxY6Yf29ZLuoVH2tJx3pw";
   const options={
     method: "GET",
     "Content-type": "application/json",
     headers: {
       Authorization: `Bearer ${userAccessToken}`
     }};
  
  //const url='https://api.spotify.com/v1/search?q=$search&type=artist';
   const url=`https://api.spotify.com/v1/search?q=${textSearch}&type=artist`;
   fetch(url, options)
     .then(response => response.json())
     .then(data=>{ 
      console.log(data);
      const newId = document.createElement('p');
      const newName = document.createElement('p');
      const newHref = document.createElement('p');
      const newUri = document.createElement('p');
      newId.textContent = `${data.artists.items[0].id}`;
			newName.textContent = `${data.artists.items[0].name}`; 
			newHref.textContent = `${data.artists.items[0].href}`; 
      newUri.textContent = `${data.artists.items[0].uri}`;
			const newImg = document.createElement('img');
			newImg.style.width = "30px";
			newImg.setAttribute("src", `${data.artists.items[0].images[0].url}`);
			
      addListe(newId,newName,newHref,newImg,newUri);
  });
});

function addListe(newId,newName,newHref,newImg,newUri){
  const newLi=document.createElement('li');
  const btnAdd=document.createElement('button');
  const textbtn = document.createTextNode("Ajouter");

  btnAdd.append(textbtn)
  newLi.append(newId,newName,newHref,newImg,newUri);
  const ul1=document.querySelector("#firstSection ul");
  newLi.append(btnAdd)
  ul1.append(newLi);
  btnAdd.addEventListener("click", ()=>{
    addPlaList(newId,newName,newHref,newImg,newUri);
    newLi.remove();
    textbtn.remove();
  });
}

function addPlaList(newId,newName,newHref,newImg,newUri){
  const newLi=document.createElement('li');
  const btnRemove=document.createElement('button');
  const textbtn = document.createTextNode("Supprimer");

  btnRemove.append(textbtn)
  newLi.append(newId,newName,newHref,newImg,newUri);
  const ul1=document.querySelector("#secondSection ul");
  newLi.append(btnRemove)
  ul1.append(newLi);
  
  btnRemove.addEventListener("click", ()=>{
    newLi.remove();
    textbtn.remove();
  });
}

