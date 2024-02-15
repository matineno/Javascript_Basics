

/*
    Nested for loops
*/

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    console.log(`i: ${i} | j: ${j}`);
}
}

console.log();

// Labeled statements
// first: for (let i = 0; i < 3; i++) {
//     second: for (let j = 0; j < 3; j++) {
//     console.log(`i: ${i} | j: ${j}`);
// }
// }

outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i == 2) break;
        console.log(`i: ${i} | j: ${j}`);
}
}

console.log();

outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === j) continue inner;
        console.log(`i: ${i} | j: ${j}`);
}
}