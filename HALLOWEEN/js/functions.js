/***********************************/
/*    JavaScript Halloween Party   */
/***********************************/

function show(element) {
    document.getElementById(element).style.visibility="visible"; /* Hace visible el elemento */
}   

function hide(element) {
    document.getElementById(element).style.visibility="hidden"; /* Esconde el elemento */
}

function sound(element) {
    document.getElementById(element).play(); /* Reproduce el sonido */
}

function silence(element) {
    document.getElementById(element).pause(); /* Pausa el sonido */
}