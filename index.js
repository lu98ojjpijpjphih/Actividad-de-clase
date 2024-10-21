let boton1 = document.querySelector("#b1")
let boton2 = document.querySelector("#b2")
let boton3 = document.querySelector("#b3")
let p = document.querySelector("p")

boton1.onclick = function(){
p.style.color = 'pink'

}

boton2.onclick = function(){
    p.style.fontSize = '50px'
}

boton3.onclick = function(){
    p.style.backgroundColor = 'green'
}

