var x=9;
var y=9;

var chessBoard = document.getElementById('chessBoard');

for (var i=0; i<y; i++){
    var row = chessBoard.appendChild(document.createElement('div'));
    for (var j=0; j<x; j++){
        row.appendChild(document.createElement('span'));
    }
};


var divId = document.getElementsByTagName('div');
    for (var i = 1; i <= y; i++) {
  	divId[i].id = 'div' + i;
	};

var spanId = document.getElementsByTagName('span');
    for (var j = 0; j <= 80; j++) {
  	spanId[j].id = 'span' + j;
	};

var letters = document.getElementsByTagName('span');
	for (a = 1; a < y; a++) {
		switch(a) {
  		case 1:  
    		letters[a].innerText = "a"
    		break;
  		case 2: 
  			letters[a].innerText = "b"
    		break;
    	case 3: 
    		letters[a].innerText = "c"
    		break;
    	case 4: 
    		letters[a].innerText = "d"
    		break;
    	case 5: 
    		letters[a].innerText = "e"
    		break;
    	case 6: 
    		letters[a].innerText = "f"
    		break;
    	case 7: 
    		letters[a].innerText = "g"
    		break;
    	case 8: 
    		letters[a].innerText = "h"
    		break;
	};
};


var numbers = document.getElementsByTagName('span');
	for (b = 9; b <= 72; b++) {
		switch(b) {
		case 9:
			numbers[b].innerText = '1'
    		break;
  		case 18: 
  			numbers[b].innerText = '2'
    		break;
    	case 27: 
    		numbers[b].innerText = '3'
    		break;
    	case 36: 
    		numbers[b].innerText = '4'
    		break;
    	case 45: 
    		numbers[b].innerText = '5'
    		break;
    	case 54: 
    		numbers[b].innerText = '6'
    		break;
    	case 63: 
    		numbers[b].innerText = '7'
    		break;
    	case 72: 
    		numbers[b].innerText = '8'
    		break;
	};
}; 