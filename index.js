///////////////////////////////3 budai padaryti masyva/////////////////////////////////
//1budas
const array = [];
array[0] = "eat";
array[1] = "sleep";
array[2] = "read";
console.log(array);
//2budas
const array1 = new Array("game", "sleep", "repeat");
console.log(array1);
//3budas
const masyvas = Array.of("game", "sleep", "repeat");
console.log(masyvas);

// pvz array kurimas
const naujasArray = new Array(10).fill(20).map((el, index) => el + 1);
console.log(naujasArray);

//  "paiimti" ka nors is masyvo
array[array.length - 1];
console.log(array[array.length - 1]);
console.log(array[array.length - 2]);
console.log(array.at(-3));
console.log(array[2]);

// array destructuring
const arr = ["saule", "menulis", "venera","saturnas","marsas","zeme"];
const[
    pirmas,
    antras,
    trecias,
] = arr;
console.log(pirmas);
console.log(antras);
console.log(trecias);
let x = 5;
console.log(Array.isArray(arr));
console.log(Array.isArray(x));

// metodai pavyzdziai
//forEach
const skaiciai = [2,3,4,7,8,9];
let sum = 0;
skaiciai.forEach(num =>{
    console.log(num);
});
console.log(skaiciai);
//
arr.forEach((el, index)=>{
    console.log(el, index);
});
//map
const arr2 = ["eat", "eat more","eat even even more", "sleep"];
let result = arr2.map((index, el)=>{
    console.log(index,el);
});
let rezultatas = skaiciai.map(num => num * 2).filter(num => num > 5);
console.log(rezultatas);

//reduce
//1pvz
const skaiciukai = [6,7,4,8,3,8,55];
const initialValue = 0;
const total = skaiciukai.reduce((accumulator, currentValue) => accumulator + currentValue,
initialValue,
);
console.log(total);
//2pvz
const total2 = skaiciukai.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
},0);

//add ir remove
skaiciukai.push(0);
skaiciukai.push("w");
skaiciukai.push(0);
skaiciukai.push("galima", "daug", "reiksmiu","ideti","dingau");
console.log(skaiciukai);
skaiciukai.pop();
console.log(skaiciukai);
skaiciukai.unshift("hello");
console.log(skaiciukai);
skaiciukai.shift();
console.log(skaiciukai);

skaiciukai.splice(5,0,'idedu');
console.log(skaiciukai);

//slice, zinant ju index'a

const medziai = ["liepa", "azuolas", "berzas", "egle","drebule"];
const pakeisti = medziai.slice(1,3);
console.log(pakeisti);

//filter

const ivairusSk = [1,6,5,7,-3,-44, 20,535,4,-3];
const rezultatas2 = ivairusSk.filter(function(el){
    return el < 0;
});
console.log(rezultatas2);
// find, pirma rasta elementa rodo
const rasti = ivairusSk.find((el) => el > 20);
console.log(rasti);


//findIndex, sugazina pirma rasta elementa kuri tenkina salyga

const isLargeNumber = (element) => element >= 20;
console.log(ivairusSk.findIndex(isLargeNumber));

//indexOf

console.log(ivairusSk.indexOf(6));

//includes, grazina true false

const pets = ["dog", "cat","parrot","snake"];
console.log(pets.includes("cat"));
console.log(pets.includes("dragon"));

//sort, "sutvarko" array, pakeicia elementu eile
const sortas = ivairusSk.sort();
console.log(sortas)

//concat
console.log(pets.concat(["rat","mouse"]));


////// spread, leidizia iterable, array arba stringui, buti praplestu
const pirmasMasyvas = ["vienas","du","trys"];
const antrasMasyvas = [...pirmasMasyvas,"keturi","penki"];
console.log(antrasMasyvas);
//////rest, surenka kelis elementus ir sutrumpina(sujungia) juos i viena elementa(array)

const {a,b, ...others} = {a : 1, b: 2,c: 3};
console.log(others);

console.log(pets instanceof Array);
console.log(Array.isArray(pets));