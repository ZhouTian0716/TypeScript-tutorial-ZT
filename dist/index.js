"use strict";
// Basic Types
console.log("hi");
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "string"];
// Tuple
let person = [1, "Brad", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let productId = 22;
productId = 23;
productId = "23";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId=<number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void
function loggingOut(message) {
    console.log(message);
}
loggingOut("true");
const user1 = {
    id: 2,
    name: "Brad",
};
