const navbutton = document.querySelector('.menuButton');
const navigation = document.querySelector('.navigation__base');

navbutton.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation__mobile');
    if (navigation.class = 'navigation__base navigation__mobile') {
        navbutton.innerHTML = "&#10005;";
        
    } else {
        navbutton.innerHTML = "&#9776;";
    };

});