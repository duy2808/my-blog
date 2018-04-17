
/*var numberButtons = document.getElementsByClassName("numberbutton");
for (var i=0; i < numberButtons.length; i++) {
	numberButtons[i].onclick = numberClick;
}


function numberClick() {
	var number = this.innerHTML ;
	document.getElementById("myInput").value += number;
}*/

//initial value 
var screen = document.getElementsByClassName("screen")[0];
	screen.value = 0;

//clear
var clear = document.getElementsByClassName("numberbuttonC")[0];
	clear.onclick = function () {
	screen.value= 0;
}
//numbers
var numbers = document.getElementsByClassName("numberbutton");
 for(var i = 0; i< numbers.length; i++)
 	numbers[i].onclick = function () {
 		if ( screen.value === 0 && this.innerHTML !== 0) {
 			screen.value = "";
 			screen.value += this.innerHTML;
 		}
 		else if ( screen.value === 0 && this.innerHTML === 0) {
 			screen.value = 0;
 		}
 		else {
 			screen.value = this.innerHTML;
 		}
 	}


 //if
 /*if (screen.value == 0 && this.innerHTML == 0 ) {
 	screen.value = 0;
 } else (screen.value == 0 && this.innerHTML != 0) {
 	screen.value += this.innerHTML;
 }*/

/*var numberbutton1 = document.getElementsByClassName("numberbutton1")[0];
numberbutton1.onclick = function () {
	console.log(this.innerHTML);
	screen.value+=this.innerHTML;
}*/
