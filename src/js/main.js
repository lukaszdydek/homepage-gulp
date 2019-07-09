function pokaz() {
    document.getElementById("ukryty").innerHTML = "Czesiek Paczesiek to mój pseudonim. Czytaj następne strony, a dowiesz się cokolwiek o nim.";
}
function ukryj() {
    document.getElementById("ukryty").innerHTML = "...";
}

/* Druga funkcja*/

const name = 'Łukasz';
const age = 34;

alert(`Nazywam się ${name} i mam ${age} lata.`); /* "``" oznacza literał i jego formatowanie jest odzwierciedlane podczas wyświetlania, np. twardy Enter itp. Literały są polecane zamiast metody z plusami.*/

/* Trzecia funkcja*/
const pusty = document.querySelector('.about__paragraph--pusty, .about__paragraph--js');
console.log(pusty.innerHTML);
pusty.innerHTML = '<p style="font-size:25px; color:gray;">Jestem akapitem, który się pojawia!!!</p>';

/* Warunki*/


/* Warunek prosty*/
const tak = 'znam matematykę'
if (5 == 6) {
    console.log(tak);
} else {
    console.log('o nie!');
}

/* Warunek złożony*/
if ((age >= 30) && (age <= 39)) {
    console.log('Witaj trzydziestolatku!');
} else if ((age >= 20) && (age <= 29)) { 
    console.log('Witaj dwudziestolatku!');
} else if (age > 40) { 
    console.log('Witaj stary!');
} else {
    console.log ('Po prostu witaj!');
}

/* Warunek prosty skrócony zapis*/
const wiek = (35 > age) ? 'Jesteś starszy ode mnie' : 'Jesteś młodszy ode mnie'; {
    console.log(wiek);
}

/* Warunek złożony z konkretnymi przypadkami "switch"*/
const samochod = "Toyota";
switch (samochod) {
    case "Toyota":
    console.log("Masz Toyotę");
    break;
    case "Suzuki":
    console.log("Masz Suzuki");
    break;
    default:
    console.log("Masz Hyundaia");
    break;
}


/* Funkcja w połączeniu z operacją wyświetlenia*/
const laptopPrice = 3000;
const monthlyEarnings = 4100;
function monthlySavings() {
return monthlyEarnings - laptopPrice;
};

document.getElementById("funkcja").innerHTML = "Środki pozostałe po zakupie laptopa wyniosą " + monthlySavings() + ".";

/*Funkcja strzałkowa, powitalna*/
const welcome = (age, name) => {
welcome(31, 'Łukasz');
};

console.log("Witaj " + name + ", masz " + age + " lata!");

/* Przycisk drugi*/

const button = document.querySelector('.button__drugi');
button.addEventListener('click', ukryj);

/* Przycisk arrow*/
const btnarrow = document.querySelector('.button__arrow');
const pierwsza = 5;
const druga = 6;
function mnozenie() {
    return pierwsza * druga;
    };
btnarrow.addEventListener('click', (e) => {
    const wynik = document.querySelector('.wynikMnozenia');
    wynik.innerHTML = mnozenie();
}); 
/* włączenie nasłuchiwanie ('typ interakcji', funkcja strzałkowa = funkcja w jednym mmiejscu*, e = event = parametry zdarzenia*/
