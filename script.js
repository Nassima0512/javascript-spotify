
//const ajouter = document.getElementsByTagName("button")[0];

//Cible des li de result
const li1=document.getElementById("li1");
const li2=document.getElementById("li2");
const li3=document.getElementById("li3");
const li4=document.getElementById("li4");
const li5=document.getElementById("li5");

// Lecture des valeurs de dataset

const li1t=li1.dataset.text;
const li2t=li2.dataset.text;
const li3t=li3.dataset.text;
const li4t=li4.dataset.text;
const li5t=li5.dataset.text;

//Controle des index de dataset et affectation

function add(index){
    
    if(index===1){
        index=li1t;
        addli(index);
    }
    if(index===2){
        index=li2t;
        addli(index);
    }
    if(index===3){
        index=li3t;
        addli(index);
    }
    if(index===4){
        index=li4t;
        addli(index);
    }
    if(index===5){
        index=li5t;
        addli(index);
    }
}

function addli(index){
    const newLi=document.createElement('li');
    const btnRemove=document.createElement('button');
    const textbtn = document.createTextNode("Supprimer");

    btnRemove.append(textbtn)
    newLi.append(index);
    const ul1=document.querySelector("#secondSection li");
    newLi.append(btnRemove)
    ul1.append(newLi);

    btnRemove.addEventListener("click", ()=>{
        newLi.remove();
    });
}




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






