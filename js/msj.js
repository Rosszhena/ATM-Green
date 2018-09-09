const btn = document.getElementById("btn");

const sendMessage = (event) => {
console.log("Envia mensaje");
  fetch("http://localhost:3000/")
}


btn.addEventListener('click', sendMessage)