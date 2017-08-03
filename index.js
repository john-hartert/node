const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is the filename?', (filename) => {
    console.log('You said: ' + filename);
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
            
        }
        console.log('i found it!');
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
    });
 });