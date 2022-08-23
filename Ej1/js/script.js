const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (inputText.value) localStorage.setItem("text", inputText.value);
  else localStorage.removeItem("text");
});

// Escribe el código a continuación

window.addEventListener("DOMContentLoaded", () =>{
  if(localStorage.getItem("text") == null){
    alert("Por favor ingresa un texto");
  } else {
    alert(localStorage.getItem("text")); 
  }
}
)