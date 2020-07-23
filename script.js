let button1 = document.getElementById("but1")
let ans1 = document.getElementById("first")
let mainBlog = document.getElementById("mblog")


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

