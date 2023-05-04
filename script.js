function guardarNombre() {
      let nombreUsuario = document.getElementById("Txtusuario").value;
      if(nombreUsuario == "")
      {
        alert("Necesita ingresar un usuario")
      }      
    }
function cambiarValor(){
        let i=document.getElementById("botonSeguir").value;  
        if(i == "Seguir")
        {
            let i=document.getElementById("botonSeguir").value = "Siguiendo";  
            let masSeguidores = document.querySelector(".seguidores > b")
            masSeguidores.innerHTML = "1201"
        }else if(i != "Seguir")
        {
            let i=document.getElementById("botonSeguir").value = "Seguir";  
            let masSeguidores = document.querySelector(".seguidores > b")
            masSeguidores.innerHTML = "1200"
        }       
    }
function darLike(){
       let j=document.getElementById("BtnMeGusta").value;  
    if(j == "Me Gusta")
    {
        let j=document.getElementById("BtnMeGusta").value = "Quitar";  
        let maslikes = document.querySelector(".likes > b")
        maslikes.innerHTML = "201"
    }else if(j != "Me Gusta")
    {
        let j=document.getElementById("BtnMeGusta").value = "Me Gusta";  
        let maslikes = document.querySelector(".likes > b")
        maslikes.innerHTML = "200"
    }    
}


function comentar(){
    debugger
    let nombreUsuario = document.getElementById("Txtusuario").value;
    let textoComentario = document.getElementById('TxtComentar').value;
    let texto = document.createTextNode(nombreUsuario +':'+ textoComentario);
    let parrafo = document.createElement('p')
    parrafo.appendChild(texto);
    
    document.getElementById('coments').appendChild(parrafo)
    

}
document.getElementById('BtnComentar')
    .addEventListener('click', comentar);

