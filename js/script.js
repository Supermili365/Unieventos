document.getElementById("loginBtn").onclick=function(){

window.location.href="login.html"

}


let proximosEventos=[

{
nombre:"Semana Cultural",
categoria:"cultura",
descripcion:"Evento cultural universitario.",
img:"https://cdn-icons-png.flaticon.com/512/854/854878.png"
},

{
nombre:"Club de Lectura",
categoria:"lectura",
descripcion:"Reunión para amantes de los libros.",
img:"https://cdn-icons-png.flaticon.com/512/29/29302.png"
},

{
nombre:"Festival de la Felicidad",
categoria:"festival",
descripcion:"Festival con música y actividades.",
img:"https://cdn-icons-png.flaticon.com/512/616/616489.png"
}

]

function mostrarEventos(){

let contenedor=document.getElementById("proximosEventos")

contenedor.innerHTML=""

let texto=document.getElementById("buscar").value.toLowerCase()

let categoria=document.getElementById("categoria").value


let filtrados=proximosEventos.filter(e=>{

let t=e.nombre.toLowerCase().includes(texto)

let c=categoria==="todos" || e.categoria===categoria

return t && c

})


document.getElementById("mensajeProximos").style.display=

filtrados.length===0?"block":"none"


filtrados.forEach(e=>{

let card=document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="${e.img}">
<p>${e.nombre}</p>

`

card.onclick=function(){

verDetalle(e)

}

contenedor.appendChild(card)

})

}

function verDetalle(e){

document.querySelector(".container").style.display="none"

let d=document.getElementById("detalleEvento")

d.classList.remove("oculto")

document.getElementById("tituloDetalle").innerText=e.nombre
document.getElementById("imgDetalle").src=e.img
document.getElementById("descDetalle").innerText=e.descripcion

}

function volver(){

location.reload()

}


document.getElementById("buscar").addEventListener("keyup",mostrarEventos)
document.getElementById("categoria").addEventListener("change",mostrarEventos)

mostrarEventos()

const userBtn = document.getElementById("userBtn");
const menuUsuario = document.getElementById("menuUsuario");
const cerrarMenu = document.getElementById("cerrarMenu");
const overlay = document.getElementById("overlay");

userBtn.addEventListener("click", function () {
  menuUsuario.classList.add("activo");
  overlay.classList.add("activo");
});

cerrarMenu.addEventListener("click", function () {
  menuUsuario.classList.remove("activo");
  overlay.classList.remove("activo");
});

overlay.addEventListener("click", function () {
  menuUsuario.classList.remove("activo");
  overlay.classList.remove("activo");
});

const loginBtn = document.getElementById("loginBtn");

if(loginBtn){
    loginBtn.addEventListener("click", function(){
        window.location.href = "login.html";
    });
}

function volver(){
    document.getElementById("detalleEvento").classList.add("oculto");
}