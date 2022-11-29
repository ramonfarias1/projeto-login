function mostrarSenha() {
    let iconeOlho = document.getElementById('iconeOlho')
    let inputSenha = document.getElementById('senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        iconeOlho.innerHTML = 'visibility_off'
    } else {
        inputSenha.setAttribute('type', 'password')
        iconeOlho.innerHTML = 'visibility'
    }
}