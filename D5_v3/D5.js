/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("ESERCIZIO 1");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
	console.log(pets[i]);
}

/* ESERCIZIO 2
  Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2");

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3");

for (let i = pets.length - 1; i >= 0; i--) {
	console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("ESERCIZIO 4");

const first = pets.shift();
pets.push(first);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
	{
		brand: "Ford",
		model: "Fiesta",
		color: "red",
		trims: ["titanium", "st", "active"],
	},
	{
		brand: "Peugeot",
		model: "208",
		color: "blue",
		trims: ["allure", "GT"],
	},
	{
		brand: "Volkswagen",
		model: "Polo",
		color: "black",
		trims: ["life", "style", "r-line"],
	},
];

console.log("ESERCIZIO 5");

for (let i = 0; i < cars.length; i++) {
	cars[i].licensePlate = "plate5" + i;
	console.log(cars[i]);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6");

const newObject = {
	brand: "Audi",
	model: "A3",
	color: "black",
	trims: ["standard", "life"],
	licensePlate: "plate98",
};

cars.push(newObject);

const deletedTrims = [];

for (let i = 0; i < cars.length; i++) {
	deletedTrims.push(cars[i].trims);
	delete cars[i].trims;
	console.log(cars[i]);
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
	cars[i].trims = deletedTrims[i];
	let first = cars[i].trims.shift();
	justTrims.push(first);
}

console.log(justTrims);

// console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 8");

for (let i = 0; i < cars.length; i++) {
	if (cars[i].color.charAt(0) === "b") {
		console.log(cars[i].brand + " " + cars[i].model + ", color: " + cars[i].color + " -Fizz");
	} else {
		console.log(cars[i].brand + " " + cars[i].model + ", color: " + cars[i].color + " -Buzz");
	}
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 9");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;

while (numericArray[i] !== 32) {
	console.log(numericArray[i]);

	i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("ESERCIZIO 10");

const charactersArray = ["g", "n", "u", "z", "d"];

charactersArray.indexOf("z");

const myNumericArray = [];

for (let i = 0; i < charactersArray.length; i++) {
	switch (charactersArray[i]) {
		case "a":
			myNumericArray.push(1);
			break;
		case "b":
			myNumericArray.push(2);
			break;
		case "c":
			myNumericArray.push(3);
			break;
		case "d":
			myNumericArray.push(4);
			break;
		case "e":
			myNumericArray.push(5);
			break;
		case "f":
			myNumericArray.push(6);
			break;
		case "g":
			myNumericArray.push(7);
			break;
		case "h":
			myNumericArray.push(8);
			break;
		case "i":
			myNumericArray.push(9);
			break;
		case "j":
			myNumericArray.push(10);
			break;
		case "k":
			myNumericArray.push(11);
			break;
		case "l":
			myNumericArray.push(12);
			break;
		case "m":
			myNumericArray.push(13);
			break;
		case "n":
			myNumericArray.push(14);
			break;
		case "o":
			myNumericArray.push(15);
			break;
		case "p":
			myNumericArray.push(16);
			break;
		case "q":
			myNumericArray.push(17);
			break;
		case "r":
			myNumericArray.push(18);
			break;
		case "s":
			myNumericArray.push(19);
			break;
		case "t":
			myNumericArray.push(20);
			break;
		case "u":
			myNumericArray.push(21);
			break;
		case "v":
			myNumericArray.push(22);
			break;
		case "w":
			myNumericArray.push(23);
			break;
		case "x":
			myNumericArray.push(24);
			break;
		case "y":
			myNumericArray.push(25);
			break;
		case "z":
			myNumericArray.push(26);
			break;
	}
}
console.log(charactersArray);
console.log(myNumericArray);
