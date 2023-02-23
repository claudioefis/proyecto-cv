
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const consulta = document.getElementById("Textarea1")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()

  let warnings =""
  let entrar = false
  let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML =""
  if(nombre.value.length <3 ) {
      warnings += 'El nombre no es valido <br>'
      entrar = true
  }

  if(apellido.value.length <1) {
    warnings += 'El apellido no es valido <br>'
    entrar = true
}

  console.log(regexEmail.test(email.value))
  if (!regexEmail.test(email.value)){
    warnings += 'El email no es valido <br>'
    entrar = true 
  }
  if(entrar){
    parrafo.innerHTML = warnings
  }
  
})
   