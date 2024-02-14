// un script asynchrone
console.log('Hello')
setTimeout(() => console.log('T1'), 500) // TASK QUEUE
console.log('END')

// un script synchrone
const synchroneFunc = () => {
    console.log("Start function");
}

console.log("Start");
synchroneFunc();
console.log("End");