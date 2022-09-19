// Basic Types
console.log("hi");
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "string"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let productId: string | number = 22;
productId = 23;
productId = "23";

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Up);

// Objects
type User = { id: number; name: string };

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId=<number>cid
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

// Void
function loggingOut(message: string | number): void {
  console.log(message);
}
loggingOut("true");

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?:number
}

const user1: UserInterface = {
  id: 2,
  name: "Brad",
};

