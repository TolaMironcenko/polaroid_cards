const cards_container = document.querySelector('.card-container')
const cards = document.querySelectorAll('.card')

const clear_active = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active')
    }
}

cards_container.addEventListener('click', (e) => {
    if (e.target.classList.contains('active') && e.target.classList.contains('card')) {
        e.target.classList.remove('active')
    } else {
        clear_active()
        e.target.classList.add('active')
    }
})

