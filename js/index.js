const cards_container = document.querySelector('.card-container')
const cards = document.querySelectorAll('.card')

const cards_list = [
    {'img': '../img/lisa.jpeg', 'angle': '-5deg', 'x': '5%', 'y': '15%', 'caption': 'Lisa on Altai - 2022'},
    {'img': '../img/lisa1.jpeg', 'angle': '-1deg', 'x': '-10%', 'y': '-20%', 'caption': 'Lisa in sauna - 2021'},
    {'img': '../img/lisa2.jpeg', 'angle': '-4deg', 'x': '-20%', 'y': '5%', 'caption': 'Lisa - 2020'},
    {'img': '../img/lisa3.jpeg', 'angle': '7deg', 'x': '10%', 'y': '-7%', 'caption': 'Lisa - 2021'},
    {'img': '../img/lisa15.jpg', 'angle': '-7deg', 'x': '20%', 'y': '-20%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa16.jpg', 'angle': '10deg', 'x': '50%', 'y': '-20%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa17.jpg', 'angle': '-10deg', 'x': '1%', 'y': '-50%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa18.jpg', 'angle': '6deg', 'x': '-60%', 'y': '-40%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa19.jpg', 'angle': '-6deg', 'x': '50%', 'y': '30%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa20.jpg', 'angle': '8deg', 'x': '40%', 'y': '50%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa14.jpeg', 'angle': '12deg', 'x': '-50%', 'y': '-20%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa13.jpeg', 'angle': '-12deg', 'x': '-80%', 'y': '-15%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa12.jpeg', 'angle': '15deg', 'x': '-90%', 'y': '15%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa11.jpeg', 'angle': '15deg', 'x': '95%', 'y': '25%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa10.jpeg', 'angle': '15deg', 'x': '90%', 'y': '55%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa9.jpeg', 'angle': '15deg', 'x': '100%', 'y': '-25%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa8.jpeg', 'angle': '15deg', 'x': '95%', 'y': '-50%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa7.jpeg', 'angle': '15deg', 'x': '-65%', 'y': '40%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa6.jpeg', 'angle': '-15deg', 'x': '-45%', 'y': '30%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa4.jpeg', 'angle': '15deg', 'x': '-90%', 'y': '-40%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa5.jpeg', 'angle': '-15deg', 'x': '65%', 'y': '-50%', 'caption': 'Simba - 2022'},
    {'img': '../img/tolpa.jpeg', 'angle': '-15deg', 'x': '-15%', 'y': '50%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa21.jpg', 'angle': '-15deg', 'x': '-15%', 'y': '80%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa22.jpg', 'angle': '15deg', 'x': '15%', 'y': '80%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa23.jpg', 'angle': '10deg', 'x': '35%', 'y': '85%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa24.jpg', 'angle': '-10deg', 'x': '55%', 'y': '85%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa25.jpg', 'angle': '-10deg', 'x': '75%', 'y': '85%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa26.jpg', 'angle': '10deg', 'x': '-75%', 'y': '85%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa27.jpg', 'angle': '10deg', 'x': '-55%', 'y': '85%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa28.jpg', 'angle': '5deg', 'x': '-25%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa29.jpg', 'angle': '-5deg', 'x': '25%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa30.jpg', 'angle': '25deg', 'x': '45%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa31.jpg', 'angle': '25deg', 'x': '65%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa32.jpg', 'angle': '-35deg', 'x': '85%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa33.jpg', 'angle': '-35deg', 'x': '-85%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa34.jpg', 'angle': '35deg', 'x': '-65%', 'y': '105%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa35.jpg', 'angle': '15deg', 'x': '-65%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa36.jpg', 'angle': '15deg', 'x': '-85%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa37.jpg', 'angle': '15deg', 'x': '85%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa38.jpg', 'angle': '5deg', 'x': '65%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa39.jpg', 'angle': '-5deg', 'x': '45%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa40.jpg', 'angle': '5deg', 'x': '25%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa41.jpg', 'angle': '15deg', 'x': '5%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa42.jpg', 'angle': '-25deg', 'x': '-15%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa43.jpg', 'angle': '25deg', 'x': '-35%', 'y': '125%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa44.jpg', 'angle': '25deg', 'x': '-35%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa45.jpg', 'angle': '-35deg', 'x': '-55%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa46.jpg', 'angle': '35deg', 'x': '-75%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa47.jpg', 'angle': '5deg', 'x': '75%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa48.jpg', 'angle': '-5deg', 'x': '55%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa49.jpg', 'angle': '15deg', 'x': '35%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa50.jpg', 'angle': '-15deg', 'x': '15%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa51.jpg', 'angle': '25deg', 'x': '-5%', 'y': '145%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa52.jpg', 'angle': '-25deg', 'x': '-5%', 'y': '165%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa53.jpg', 'angle': '35deg', 'x': '-25%', 'y': '165%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa54.jpg', 'angle': '-35deg', 'x': '-45%', 'y': '165%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa55.jpg', 'angle': '30deg', 'x': '-65%', 'y': '165%', 'caption': 'Simba - 2022'},
    {'img': '../img/lisa56.jpg', 'angle': '-30deg', 'x': '-85%', 'y': '165%', 'caption': 'Simba - 2022'},
]

const create_card = (img, angle, x, y, caption) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('active')
    card.style = "--image: url('" + img + "'); --angle: " + angle + "; --x: " + x + "; --y: " + y + "; --caption: '" + caption + "'"
    cards_container.append(card)
}

cards_list.map(card => {
    create_card(card.img, card.angle, card.x, card.y, card.caption)
})

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

