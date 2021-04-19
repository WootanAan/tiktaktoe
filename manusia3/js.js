var kotak = [];
var winner = "kosong";
var css = "border-radius: 0; top: 0; left: 0; box-shadow: 0 0 20px rgba(255,255,255,0.3);";
var giliran = "player1";

function cek(index) {
	if(winner == "kosong") {
		css = "border-radius: 0; top: 0; left: 0; box-shadow: 0 0 20px rgba(255,255,255,0.3);";
		if(kotak[index - 1] != "player1" && kotak[index - 1] != "player2") {
			kotak[index - 1] = giliran;
			if(giliran == "player1") {
				document.getElementById('selamat').innerHTML = "giliran player2";
				document.getElementById('kotak'+index).style = "background: #194DFF;" + css;
				giliran = "player2";
			} else if(giliran == "player2") {
				document.getElementById('selamat').innerHTML = "giliran player1";
				document.getElementById('kotak'+index).style = "background: #FF9210;" + css;
				giliran = "player1";
			}
			menangkah();
		}
	}
}

function menangkah(){
	for(i = 0; i < 9; i+=3) {
		if(kotak[i] == "player1" && kotak[i + 1] == "player1" && kotak[i + 2] == "player1") {
			menang("player1");
		} else if(kotak[i] == "player2" && kotak[i + 1] == "player2" && kotak[i + 2] == "player2") {
			menang("player2");
		}
	}
	for(i = 0; i < 3; i++) {
		if(kotak[i] == "player1" && kotak[i + 3] == "player1" && kotak[i + 6] == "player1") {
			menang("player1");
		} else if(kotak[i] == "player2" && kotak[i + 3] == "player2" && kotak[i + 6] == "player2") {
			menang("player2");
		}
	}
	if(winner == "kosong") {
		if(kotak[0] != null && kotak[1] != null && kotak[2] != null && kotak[3] != null && kotak[4] != null && kotak[5] != null && kotak[6] != null && kotak[7] != null && kotak[8] != null) {
			menang("seri");
		}
	}
}

function menang(pemenang) {
	if(pemenang == "player1") {
		winner = "player1";
		giliran = "player1";
		document.getElementById('selamat').innerHTML = "player1 MENANG";
		document.getElementById('restart').style = "display: block;";
	} else if(pemenang == "player2") {
		winner = "player2";
		giliran = "player1";
		document.getElementById('selamat').innerHTML = "player2 MENANG";
		document.getElementById('restart').style = "display: block;";
	} else if(pemenang == "seri") {
		giliran = "player1";
		document.getElementById('selamat').innerHTML = "seri";
		document.getElementById('restart').style = "display: block;";
	}
}

function ulang() {
	document.getElementById('restart').style = "display: none;";
	css = "border-radius: 50%; top: -10px; left: 12px; box-shadow: -12px 10px 5px rgba(0,0,0,0.3);";
	kotak = [];
	winner = "kosong";
	for(i = 1; i <= 9; i++) {
		document.getElementById('kotak'+i).style = "background-color: red;" + css;
	}
	document.getElementById('selamat').innerHTML = "";
}
