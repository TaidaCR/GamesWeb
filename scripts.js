/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */


//QUIEN GANA
document.addEventListener("DOMContentLoaded",  () => {
    
    let score = document.querySelector(".score");

    function checkResult() {
        let Jug1 = document.querySelector(".tab1 .active i");
        let Jug2 = document.querySelector(".tab2 .active i");
        
        if (Jug1 && Jug2) {
            let J1 = Jug1.getAttribute('class');
            let J2 = Jug2.getAttribute('class');

            if (J1 === J2){
                score.textContent= "Empate";
            } else if ((J1==="fa-sharp-duotone fa-solid fa-hand-back-fist" && J2==="fa-duotone fa-solid fa-scissors")||
                        (J1==="fa-duotone fa-solid fa-file" && J2==="fa-sharp-duotone fa-solid fa-hand-back-fist")||
                        (J1==="fa-duotone fa-solid fa-scissors" && J2==="fa-duotone fa-solid fa-file")){
                score.textContent = "Gana el Jugador 1";
            }else{
                score.textContent = "Gana el Jugador 2";
            }
            score.style.display="block"
        }
    }
    

    let tab1 = document.querySelector(".tab1");
    let tab2 = document.querySelector(".tab2");

    tab1.addEventListener("click", checkResult);
    tab2.addEventListener("click", checkResult);

    score.style.display="none"

});

//ELECCION ACTIVE
document.addEventListener("DOMContentLoaded", () => {

    let optionArray=document.querySelectorAll(".option");

    optionArray.forEach(option => {
        option.addEventListener("click", () => {
            option.classList.toggle("active");
        });
    });

})

