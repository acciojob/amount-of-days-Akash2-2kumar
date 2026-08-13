//your JS code here. If required.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const num = Number(input);
	daysOfAYear(num);
    rl.close();
});
function daysOfAYear(num){
	if(num%400==0){
		return(366);
	}else if(num%100==0){
		return(365);
	}else if(num%4==0){
		return(366);
	}else{
		return(365);
	}
}