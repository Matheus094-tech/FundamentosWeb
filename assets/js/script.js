/*var - codigo todo
let - só dentro do escopo {}
JS é Case Sensitive = reconhce maisculo e minisculo
por tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validarNome() {
        let txtNome = document.querySelector("#txtNome")
        if (nome.value.length < 3){
            txtNome.innerHTML = "Nome inválido!"
            txtNome.style.color = "red"
    }   else {
            txtNome.innerHTML = "Nome válido"
            txtNome.style.color = "green"
            nomeOk = true
    }
}

    function validarEmail () {
       let txtEmail = document.querySelector("#txtEmail")

        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            txtEmail.innerHTML = "Email Inválido"
            txtEmail.style.color = "red"
    }   else {
            txtEmail.innerHTML = "Email válido"
            txtEmail.style.color = "green"
            emailOk = true
        }
    }

    function validarAssunto () {
        let txtAssunto = document.querySelector("#txtAssunto")

        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = "Assunto ultrapassa o limite de 100 caracteres"
            txtAssunto.style.color = "red"
    }   else {
            txtAssunto.innerHTML = ""
            assuntoOk = true
        }
    }

    function validarEnviar (){
        if (nomeOk == true && emailOk == true && assuntoOk == true){
            alert ("Formulário enviado com sucesso!")
    }   else {
            alert ("Preencha o formulário correntamente antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal (){
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}