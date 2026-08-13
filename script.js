//your JS code here. If required.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const num = Number(input);

    if(num%400==0){
		console.log(366);
	}else if(num%100==0){
		console.log(365);
	}else if(num%4==0){
		console.log(366);
	}else{
		console.log(365);
	}

    rl.close();
});