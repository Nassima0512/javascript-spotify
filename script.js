
const search=document.getElementById('search');
const rechercher = document.getElementsByTagName("button")[0];
const sauvegarder = document.querySelector("#user button");
rechercher.addEventListener('click', () =>{
  const textSearch=search.value;
   //const userAccessToken="BQBR6VxQ-luy8jfT65f58X0j2UrbuHzQAFsXUU09wu5mngYXyngRu0fY_-rgzlcbGMBeAOhLptwLy4FZ8HOJ9pQXE3qqiYQIryhwpDs5ibyatAedSWENsKZS8WMa9LIr_fG-ClMDQLtRTi4yvVd-wOCbWfSjTfxvxf6VpAR6SwcyHSP9zA";
   const userAccessToken="BQCCAuSK7lLKl1BjjE_VZr88nXHjAkvKIOheaZNZ5Jwibb05YA7Cby0az2OYu16lfii6TAuKKMKrZwwnR_GimSq6u0RUB5sJH9R217PeqqyXpJqwY4BFNMwo6YDaMhF4yEbPOfvQQ23BPIpPdAnZ4yVbqspE0UrM_NbmueEYNwqMZe7CDw";
   const options={
     method: "GET",
     "Content-type": "application/json",
     headers: {
     Authorization: `Bearer ${userAccessToken}`
     }};
  
  //const url='https://api.spotify.com/v1/search?q=$search&type=artist';
   const url=`https://api.spotify.com/v1/search?q=${textSearch}&type=track`;
   fetch(url, options)
     .then(response => response.json())
     .then(data=>{ 
      console.log(data);
      const newId = document.createElement('p');
      const newName = document.createElement('p');
      const newHref = document.createElement('p');
      const newUri = document.createElement('p');
      const newMarket = document.createElement('p');
      
      newId.textContent = `${data.tracks.items[0].id}`;
			newName.textContent = `${data.tracks.items[0].name}`; 
		  newHref.textContent = `${data.tracks.items[0].href}`; 
      newUri.textContent = `${data.tracks.items[0].uri}`;
      newMarket.textContent = `${data.tracks.items[0].available_markets}`;
			const newImg = document.createElement('img');
			newImg.style.width = "40px";
			newImg.setAttribute("src", `${data.tracks.items[0].album.images[0].url}`);
			
      addListe(newId,newName,newImg,newUri,newMarket);
  });
});

function addListe(newId,newName,newImg,newUri,newMarket){
  const newLi=document.createElement('li');
  const btnAdd=document.createElement('button');
  const textbtn = document.createTextNode("Ajouter");

  btnAdd.append(textbtn)
  newLi.append(newName,newImg);
  const ul1=document.querySelector("#firstSection ul");
  newLi.append(btnAdd)
  ul1.append(newLi);
  btnAdd.addEventListener("click", ()=>{
    addPlaList(newId,newName,newImg,newUri,newMarket);
    newLi.remove();
    textbtn.remove();
  });
}

function addPlaList(newId,newName,newImg,newUri,newMarket){
  const newLi=document.createElement('li');
  const btnRemove=document.createElement('button');
  const textbtn = document.createTextNode("Supprimer");

  btnRemove.append(textbtn)
  newLi.append(newId,newName,newImg,newUri,newMarket);
  const ul1=document.querySelector("#secondSection ul");
  newLi.append(btnRemove)
  ul1.append(newLi);
  
  btnRemove.addEventListener("click", ()=>{
    newLi.remove();
    textbtn.remove();
  });
}

sauvegarder.addEventListener('click', ()=> {

})

