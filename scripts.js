//PPT - QUIEN GANA 3
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

        setTimeout(() => {
            score.style.display = "none";
            let activeArray=document.querySelectorAll(".active");

            activeArray.forEach(active => {
                active.classList.toggle("active");
            
            });
                }, 4000);
            }
    
    let tab1 = document.querySelector(".tab1");
    let tab2 = document.querySelector(".tab2");

    tab1.addEventListener("click", checkResult);
    tab2.addEventListener("click", checkResult);
});

//PPT - ELECCION ACTIVE
document.addEventListener("DOMContentLoaded", () => {

    let optionArray=document.querySelectorAll(".option");

    optionArray.forEach(option => {
        option.addEventListener("click", () => {
            option.classList.toggle("active");
        });
    });
})

//TER - SELECCION CELDA --> PLAYER
document.addEventListener("DOMContentLoaded", () => {
    let playerArray = document.querySelectorAll(".cell");
    let clickCount = 0;

    playerArray.forEach(cell => {
        cell.addEventListener("click", () => {
            if (!cell.classList.contains("player1") && !cell.classList.contains("player2")) {
                if (clickCount % 2 === 0) {
                    cell.classList.add("player1");
                } else {
                    cell.classList.add("player2");
                }
                clickCount++;
            }
        });
    });

    /*LÓGICA DE GANADOR*/
    function checkWinner () {
        const cells = document.querySelectorAll('.cell');
        const rows = [];
        const columns = [];

        let score = document.querySelector(".score");

        /*ROWS*/
        for(let i=0; i<cells.length; i+=3){
            rows.push([cells[i], cells[i+1], cells [i+2]]);
        }

        /*COLUMNS*/
        for(let i=0; i<3; i++){
            columns.push([cells[i], cells[i+3], cells [i+6]]);
        }

        /*DIAGONAL */
        const diags = [[cells[0], cells[4], cells [8]],[cells[2], cells[4], cells [6]]];

        const rowContainClass = rows.some(row => row.every(cell => cell.classList.contains("player1")));
        const columnContainClass = columns.some(column => column.every(cell => cell.classList.contains("player1")));
        const rowContainClass2 = rows.some(row => row.every(cell => cell.classList.contains("player2")));
        const columnContainClass2 = columns.some(column => column.every(cell => cell.classList.contains("player2")));
        const diagContainClass = diags.some(diag => diag.every(cell => cell.classList.contains("player1")));
        const diagContainClass2 = diags.some(diag => diag.every(cell => cell.classList.contains("player2")));


        if (rowContainClass || columnContainClass || diagContainClass){
            score.textContent= "Gana el jugador 1"
            score.style.display = "block";
        }else if (rowContainClass2 || columnContainClass2 || diagContainClass2){
            score.textContent= "Gana el jugador 2"
            score.style.display = "block";
        }
    }

    let table = document.querySelector(".main-table");

    table.addEventListener("click", checkWinner);

    setTimeout(() => {
        let playerArray=document.querySelectorAll(".cell");

        playerArray.forEach(player => {
            player.className("cell")
        
        });
            }, 4000);
});

