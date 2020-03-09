function validar(){


  var usuario, senha ;

  usuario = "admin";
  senha = "123456";

    /*   if (usuario != document.getElementById("usuario").value){
          document.getElementById("validarUsuario").innerHTML = "Usuario incorreto!"
      } */


      if(usuario != document.getElementById("usuario").value || 
         senha != document.getElementById("senha").value){

          alert("Usuário ou senha incorretos!")

      }



 }