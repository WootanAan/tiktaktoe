var kotak = [];
var winner = "kosong";
var css = "border-radius: 0; top: 0; left: 0; box-shadow: 0 0 20px rgba(255,255,255,0.3);";

function cek(index) {
	if(winner == "kosong") {
		css = "border-radius: 0; top: 0; left: 0; box-shadow: 0 0 20px rgba(255,255,255,0.3);";
		if(kotak[index - 1] != true && kotak[index - 1] != false) {
			kotak[index - 1] = true;
			document.getElementById('kotak'+index).style = "background-color: #B4D5FF;" + css;
			menangkah();
			if(winner == "kosong") {
				setTimeout(komputer, 300);
			}
		}
	}
}

function komputer() {
	var acak = (Math.floor(Math.random() * 9) + 1);
	if(kotak[acak - 1] == true || kotak[acak - 1] == false) {
		komputer();
	} else {
		kotak[acak - 1] = false;
		document.getElementById('kotak'+acak).style = "background-color: #FF9210;" + css;
	}
	menangkah();
}

function menangkah(){
	for(i = 0; i < 9; i+=3) {
		if(kotak[i] == true && kotak[i + 1] == true && kotak[i + 2] == true) {
			menang("pemain");
		} else if(kotak[i] == false && kotak[i + 1] == false && kotak[i + 2] == false) {
			menang("komputer");
		}
	}
	for(i = 0; i < 3; i++) {
		if(kotak[i] == true && kotak[i + 3] == true && kotak[i + 6] == true) {
			menang("pemain");
		} else if(kotak[i] == false && kotak[i + 3] == false && kotak[i + 6] == false) {
			menang("komputer");
		}
	}
	if(kotak[0] != null && kotak[1] != null && kotak[2] != null && kotak[3] != null && kotak[4] != null && kotak[5] != null && kotak[6] != null && kotak[7] != null && kotak[8] != null) {
		document.getElementById('restart').style = "display: block;";
	}
}

function menang(pemenang) {
	if(pemenang == "pemain") {
		winner = "pemain";
		document.getElementById('selamat').innerHTML = "PEMAIAN MENANG";
		document.getElementById('restart').style = "display: block;";
	} else if(pemenang = "komputer") {
		winner = "komputer";
		document.getElementById('selamat').innerHTML = "KOMPUTER MENANG";
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
