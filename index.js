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
