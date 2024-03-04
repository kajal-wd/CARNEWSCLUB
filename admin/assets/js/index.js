console.log("hello");
const showcross =()=>{
    let crossbox = document.querySelector(".cross");
    crossbox.style.display= 'inline-block';
}

const cutcross =()=>{
    let crossbox = document.querySelector(".cross");
    let inputbox = document.querySelector(".left-header-content input");
    inputbox.value = "";
    inputbox.placeholder = 'Search';
    crossbox.style.display= 'none';
}

