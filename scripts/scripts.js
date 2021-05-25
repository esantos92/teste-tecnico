const submit =document.querySelector("#btnSubmit")

submit.addEventListener("click", (send) => {
  send.preventDefault();

  const textContent = document.querySelector("#comentario")

  const comment = textContent.value;

  const toReproduct = new Object();
  toReproduct.text= comment

  console.log(toReproduct)
})