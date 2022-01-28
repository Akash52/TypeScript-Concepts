import axios from "axios";

//Interface ?

//Interface is used to define the shape of the data that is being returned.

// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interface Todo {
//   id: number
//   title: string
//   completed: boolean
// }

// axios.get(url).then((response) => {
//   const todo = response.data as Todo

//   const ID = todo.id
//   const title = todo.title
//   const completed = todo.completed

//   console.log(`
//     The Todo with ID: ${ID}
//     Has a title of: ${title}
//     Is it finished? ${completed}
//     `)
// })

// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interface Todo {
//   id: number
//   title: string
//   completed: boolean
// }

// axios.get(url).then((response) => {
//   const todo = response.data as Todo

//   const ID = todo.id
//   const title = todo.title
//   const completed = todo.completed

//Here we see incorrect order of parameters.

//   logTodo(ID, title, completed)
// })

// const logTodo = (id: number, title: string, completed: boolean) => {
//   console.log(`
//     The Todo with ID: ${id}
//     Has a title of: ${title}
//     Is it finished? ${completed}
//     `)
// }

//Type in TypeScript

//Type Annotations
//Code that is written in TypeScript is known as Type Annotations.

const apples: number = 5;
const speed: string = "fast";
const hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Type inference
//Type inference is a feature of TypeScript that allows the compiler to infer the type of a variable or parameter.

//Any
//Any is a type that can be of any type.

//Typescript can not figure out the type of the variable.

// const json = '{"x": 10, "y": 20}'
// const coordinates = JSON.parse(json)
// console.log(coordinates)

//Here we fix it

//1) Whene a function returns the 'any' type, we must specify the type of the return value.

//1st way

const json2 = '{"x": 10, "y": 20}';
const coordinates2 = JSON.parse(json2) as { x: number; y: number };
console.log(coordinates2);

//2nd way

const json3 = '{"x": 10, "y": 20}';
const coordinates3: { x: number; y: number } = JSON.parse(json3);
console.log(coordinates3);

// 2) When we declare a variable on one line and initialize it later,

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
    break;
  }
}

// 3) Variable whose type cannot be inferred correctly.

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    break;
  }
}

//Type annotations for functions

const add = (a: number, b: number): number => {
  return a + b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number) => a * b;

//void function
//void is used to specify that a function doesn't return a value.

const logger = (message: string): void => {
  console.log(message);
};

//Never

//Never is a type that represents the absence of a value.

const throwError = (message: string): never => {
  throw new Error(message);
};

//Type Inference for functions

//Here typescript knows that the return type of the function is number.

const add2 = (a: number, b: number) => {
  return a + b;
};

//Destructuring with Annotations

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

//Object destructuring

const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

//If we want to destructure multiple properties from an object, we can use the following syntax:
const { age , name }: { age: number,name:string } = profile;

//These Create Problems Whene Deifferent Types are used.
// const {age , name }:number = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

//Array in TypeScript

const cars:string[] = ["Ford", "Chevy", "Honda"];

//Type inference for Arrays
const bikes = ["Suzuki", "Yamaha", "Kawasaki"];

//Type script doesn't know empty type of the array.
const carMakers = []; //Any

//2d Array
const carsByMake: string[][] = [["F150"], ["Corvette"], ["Camaro"]];

//Help with inference when extracting values from an array

const bike = bikes[0];
const myBike = bikes.pop();


