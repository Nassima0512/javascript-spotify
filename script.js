
//Token
const userAccessToken="BQC9RpXIYmVqGK2nl1vu8B70HpMVm9RekE5nHGSnsSbV1dLmElaoJy8AcewQvGnwTPrlULoVq3fyM7ClCXkWhZSNb-fX-xQEQTTDnl7s33kB9vfmxN7TGeQwy80Z_v_aGCreUj8rfHF4cBkUJpXnuWn4nQXKzIKhrRHxhHHByNZLPS5fgmjHaHQbqryLL5vBVziKYVNHfgxtibBayBcMQj__Azld1CsE4uidTMtCVS0i2aPRjNReP96ZdVN-Gx6OOX04F8DGtBl8OjIPDBx2O1ArjPOjL60i519zW8iG";

const search=document.getElementById('search');
const rechercher = document.getElementsByTagName("button")[0];
const ajouterPlayList = document.querySelector("#secondSection button");
const sauvegarder = document.querySelector("#user button");
const userId="s1yqmvrlrf7jyo8se3sp4k9na";



//##############################################//##############################################//##############################################

//Recherche résultat


rechercher.addEventListener('click', () =>{
  const textSearch=search.value;
  const options={ 
   method: "GET",
     "Content-type": "application/json",
     headers: {
     Authorization: `Bearer ${userAccessToken}`
     }};
  
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


//Affichage résultat

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
    addPlayList(newId,newName,newImg,newUri,newMarket);
    newLi.remove();
    textbtn.remove();
  });
}


//Affichage playlist

function addPlayList(newId,newName,newImg,newUri,newMarket){
  const newLi=document.createElement('li');
  const btnRemove=document.createElement('button');
  const textbtn = document.createTextNode("Supprimer");

  btnRemove.append(textbtn)
  newLi.append(newName,newImg);
  const ul1=document.querySelector("#secondSection ul");
  newLi.append(btnRemove)
  ul1.append(newLi);
  
  btnRemove.addEventListener("click", ()=>{
    newLi.remove();
    textbtn.remove();
  });
}



//##############################################//##############################################//##############################################


//Création playlist
//https://api.spotify.com/v1/users/{user_id}/playlists

ajouterPlayList.addEventListener('click' , ()=>{

  const data = { "name": "New Playlist",
  "description": "New playlist description",
  "public": false
  } ;
  const options={
    method: "POST",
    "Content-type": "application/json",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    Authorization: `Bearer ${userAccessToken}`
    }};


const url=`https://api.spotify.com/v1/users/${userId}/playlists`;

fetch(url, options)
            .then(response => response.json())
            .then(data=>{ //response.json-> conversion json vers javascript
            console.log(data);
  const newId = document.createElement('p');
  const newName = document.createElement('p');
  const newUri = document.createElement('p');
  newId.textContent = `${data.id}`;
  newName.textContent = `${data.name}`; 
  newUri.textContent = `${data.uri}`;
  addListeSpotify(newId,newName,newUri);
  });
});

//Appel affichage playlist

function addListeSpotify(newId,newName,newUri){
  const newLi=document.createElement('li');
  const btnAdd=document.createElement('button');
  const textbtn = document.createTextNode("Supprimer");

  btnAdd.append(textbtn)
  newLi.append(newId,newName,newUri);
  const ul1=document.querySelector("#thirdsection ul");
  newLi.append(btnAdd)
  ul1.append(newLi);
  btnAdd.addEventListener("click", ()=>{
    //addPlaList(newId,newName,newUri);
    newLi.remove();
    textbtn.remove();
  });

 
}

//##############################################//##############################################//##############################################

//Sauvegarder playlist
//https://api.spotify.com/v1/playlists/{playlist_id}/tracks

/*sauvegarder.addEventListener('click', ()=> {
  
  const options={
    method: "POST",
    "Content-type": "application/json",
     headers: {
      'Content-Type': 'application/json',
    Authorization: `Bearer ${userAccessToken}`
    }};


//const url=`https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
const url=`https://api.spotify.com/v1/playlists/650p3KBiLlcYFau36f6fTc/tracks`;

fetch(url, options)
            .then(response => response.json())
            .then(data=>{ //response.json-> conversion json vers javascript
            console.log(data);
  /*const newId = document.createElement('p');
  const newName = document.createElement('p');
  const newUri = document.createElement('p');
  newId.textContent = `${data.id}`;
  newName.textContent = `${data.name}`; 
  newUri.textContent = `${data.uri}`;
  addListeSpotify(newId,newName,newUri);
  });
});*/


