/* EMP - MOSTRAR CARTAS */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cell');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('shown'); // Corrige el uso de toggle
        });
    });

    setTimeout(() => {
        let shown = document.querySelectorAll('.shown');
        shown.forEach(card => card.classList.remove('shown')); // Corrige cómo se elimina la clase
    }, 3000);
});