let closeButton = document.getElementById("closebut")
let button1 = document.getElementById("but1")
let ans1 = document.getElementById("first")
let button2 = document.getElementById("but2")
let ans2 = document.getElementById("second")

let close =() =>{
    ans1.style.display='none';
    button1.innerHTML="Find Answer";
    ans2.style.display='none';
    button2.innerHTML="Find Answer"    
}

closeButton.onclick = close

button1.onclick=()=>{
    if(ans1.style.display==='none'){
        ans1.style.display='inline';
        button1.innerHTML="Squeeze Answer"
}
    else{
        ans1.style.display='none';
        button1.innerHTML="Find Answer"
}
}
button2.onclick=()=>{
    if(ans2.style.display==='none'){
        ans2.style.display='inline';
        button2.innerHTML="Squeeze Answer"
}
    else{
        ans2.style.display='none';
        button2.innerHTML="Find Answer"
}
}
