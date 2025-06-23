const { func } = require("joi")

const txtEmail = document.getElementById("txtEmail")
function cadastrarEmail(){
    console.log(txtEmail.value)
}
function editarEmail(){
    txtEmail.disable = false
}