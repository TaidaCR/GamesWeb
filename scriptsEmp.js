/* EMP - MOSTRAR CARTAS */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cell');
    let activeCards = []; // Para rastrear las cartas mostradas

    let p1=document.querySelector('.p1');
    let p2=document.querySelector('.p2');

    let player1=document.querySelector('.counter1');
    let player2=document.querySelector('.counter2');

    let counter=0;
    let counter1=0;
    let counter2=0;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('shown')) {
                // Mostrar la carta si no está mostrada
                card.classList.add('shown');
                activeCards.push(card);

                let card1=activeCards[0].getAttribute('class');
                    console.log(card1);
                let card2=activeCards[1].getAttribute('class');
                    console.log(card2);
                counter++;
                

                // Si ya hay 2 cartas mostradas, esconderlas después de 3 segundos
                if (activeCards.length === 2) {
                    if (card1===card2){
                        activeCards[0].classList.add('guessed');
                        activeCards[1].classList.add('guessed');
                        if (counter%2===0){
                            counter2+=1;
                            p2.textContent=counter2;

                        }else if (counter%2!==0){
                            counter1+=1;
                            p1.textContent=counter1;
                        }
                    }
                    setTimeout(() => {
                        activeCards.forEach(activeCard => activeCard.classList.remove('shown'));
                        activeCards = []; // Reiniciar las cartas activas
                    }, 900);
                }

                if (Array.from(cards).every(card => card.classList.contains('guessed'))) {
                    let ganador = document.querySelector('.ganador');
                
                    if (counter1 > counter2) {
                        ganador.textContent = 'GANA JUGADOR 1';
                    } else if (counter2 > counter1) {
                        ganador.textContent = 'GANA JUGADOR 2';
                    } else {
                        ganador.textContent = 'EMPATE';
                    }
                }

                player1.classList.toggle('active');
                player2.classList.toggle('active');
            }
        });
    });
});
