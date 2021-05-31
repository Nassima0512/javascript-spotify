
const ajouter = document.getElementsByTagName("button")[0];
const buttons = document.querySelectorAll("button")
//const supprimer =document.querySelector('#secondSection button')


buttons.forEach(function (city) {
	
});

/*ajouter.addEventListener('click' , () =>{
    
    const newLi=document.createElement('li');
    const btnRemove=document.createElement('button');
    const textbtn = document.createTextNode("Supprimer");

    btnRemove.append(textbtn)
    
    newLi.append(document.getElementsByTagName('li')[0].textContent);
    const ul1=document.querySelector("#secondSection li");
    newLi.append(btnRemove)
    ul1.append(newLi);

    btnRemove.addEventListener("click", ()=>{
        newLi.remove();
    })
});*/

function add(){
    
    const newLi=document.createElement('li');
    const btnRemove=document.createElement('button');
    const textbtn = document.createTextNode("Supprimer");

    btnRemove.append(textbtn)
    
    newLi.append(document.getElementsByTagName('li')[0].textContent);
    const ul1=document.querySelector("#secondSection li");
    newLi.append(btnRemove)
    ul1.append(newLi);

    btnRemove.addEventListener("click", ()=>{
        newLi.remove();
    })
    


}










