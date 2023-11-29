let i= 0;


//el while se ejecuta mientras una condicion sea verdadera
while (i < 100) {
    if (i % 15=== 0) {
        console.log(`${i} FIZZ BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`);
    }
    i++;
}