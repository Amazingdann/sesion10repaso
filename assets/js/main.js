console.log("Entro al main.js");
const body= document.querySelector("body");

function btnCambiarColor(){
    console.log("entró a cambiar color");
    setTimeout(cambiarColor, 1000)
    console.log("debería ejecutar al Final el cambio de color");
    //cambiarcolor();   
    //setInterval(cambiarColor, 1000)
}
function cambiarColor(){
    //console.log("estácambiaando el color")
    const randomcolor = Math.floor(Math.random()*16777215).toString(16);
   // console.log("al color:" + randomcolor)
    body.style.backgroundColor = "#"+randomcolor;
}
