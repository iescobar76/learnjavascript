var myString="ivan";
var st2= myString+ " Escobar";
var arr = ["one", "two", "three"];
var obj= { "name": "iescobar", "Hobbies": ["Books", "VideoGames"], "age": "43"};
var num=52;
var x=num+5;
console.log(num);
console.log(st2);
console.log(arr[1]);
console.log (obj.Hobbies);
console.log(x);

if (x==57){
	console.log("YEA DUDE");
	}
else
	console.log("DAM");
switch(x){
	case 57:
		console.log("57");
		break;
	case 55: 
		console.log("55");
		break;
	default:
		console.log("DAMMMM");
		break;
}


var i=1;
while (i<5){
	console.log("Iteration " +i);
	i++;
}

console.log("FOR LOOP");
for (var x=1; x <=3; x++) {
	for (var y=1; y<=3; y++){
		console.log(x + "X" + y + "=" + (x*y));
		}
	}
	
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (var idx in days){
	console.log("It's " + days[idx]);
	}

console.log("SALIDA NUEVA");
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (var idx in days){
	if (days[idx] == "Wednesday")
		continue;
	console.log("It's " + days[idx]);
	}
	
function hola(){
	console.log("Hola Mundo");
	}
hola();
console.log(" ");

function greeting (name, city){
	console.log("Hello " + name);
	console.log(". How is the weather in " + city);
	}

var name = "Ivan";
greeting(name,"Atizapunk");

//Variable Scope
var myVar=1;
function writeIt(){
	var myVar=2;
		console.log("Variable = " +myVar);
		writeMore();
	}
function writeMore(){
	console.log("Variable = " +myVar);
	}
writeIt();

var x = new Number ("5");
console.log(x);
var y=5;
console.log(y);
console.log(typeof(x));
console.log(typeof(y));
//Working with objects and properties

var obj= {

	name:"My Object",
	value: 7,
	getValue: function() {return this.value;}
	};


console.log (obj.name);
console.log (obj.getValue());

var user = new Object();
user.first="Ivan";
user.last="Escobar";
user.getName=function(){return this.first + " " + this.last;}

console.log(user.getName());

//prototyping

//nice
