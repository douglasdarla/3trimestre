//criar referencia ao form
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const altura = Number(form.inAltura.value)

   //calcule o peso ideal
   let peso
    if (masculino) {
       peso = 22 * Math.pow(altura, 2)
   } else {
       peso = 21 * Math.pow(altura, 2)
   }
    //apresenta a resposta
    resp.innerText = `${nome} seu peso ideal é: ${peso.toFixed(3)}Kg`
})

//segundo ouvinte. limpa o conteudo de h3

form.addEventListener("reset", (e) => {
    resp.innerText = ""
})