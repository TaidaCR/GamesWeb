/* EMP - MOSTRAR CARTAS */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cell');
    let activeCards = []; // Para rastrear las cartas mostradas
    let p1=document.querySelector('.p1').textContent;
    let p2=document.querySelector('.p2');
    let counter=0;

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
                            p2=p2+1;
                            p2.textContent=p2;
                        }else if (counter%2!==0){
                            p1=p1+1;
                            p1.textContent=p1;
                        }
                    }
                    setTimeout(() => {
                        activeCards.forEach(activeCard => activeCard.classList.remove('shown'));
                        activeCards = []; // Reiniciar las cartas activas
                    }, 900);
                }
            }
        });
    });
});
