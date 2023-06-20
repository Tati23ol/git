const dadosEmai = document.querySelector(".email_Login")
const dadosSenha = document.querySelector(".senha_Login")



const botaoLogin = document.querySelector(".btn_login")

botaoLogin.addEventListener('click', function (evt){
    evt.preventDefault() 
    validarIten()

})

function validarIten() {
    const dadosEm = dadosEmai.value;
    const dadosSe = dadosSenha.value;

    const cadastroArmazenado = localStorage.getItem('cadastro');
    const clienteArmazenado = JSON.parse(cadastroArmazenado);
    
    if (clienteArmazenado && dadosEm === clienteArmazenado.email && dadosSe === clienteArmazenado.senha) {

      window.open("/pag/pag.html")
    } else {
      alert('Tente novamente.');
    }
}
