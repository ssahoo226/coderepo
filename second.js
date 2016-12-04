function main (a,func) {
	console.log("Value of a\t" + a); 
	func();
}

function sec () {
	console.log("inside callback");
}

main(5,sec);
console.log("after main")