
//Dessa maneira será atribuído todo objeto. SOMENTE ASSIM ACONTECE UMA ATRIBUIÇÃO POR OBJETO COMPLETO.
//Na verdade somente o module.exports será exportado. O exports aponta para o module.exports, então se o exports receber alguma atribuição, sua referência a module.exports será perdida
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite'
    }
}