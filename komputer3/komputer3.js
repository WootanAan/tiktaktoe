var kotak = [];
var winner = "kosong";

function cek(index) {
	if(winner == "kosong") {
		if(kotak[index - 1] != true && kotak[index - 1] != false) {
			kotak[index - 1] = true;
			document.getElementById('kotak'+index).style = "border-radius: 0; background-color: blue";
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
		document.getElementById('kotak'+acak).style = "border-radius: 0; background-color: yellow";
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
		document.getElementById('selamat').innerHTML = "pemain menang";
		document.getElementById('restart').style = "display: block;";
	} else if(pemenang = "komputer") {
		winner = "komputer";
		document.getElementById('selamat').innerHTML = "komputer menang";
		document.getElementById('restart').style = "display: block;";
	}
}

function ulang() {
	document.getElementById('restart').style = "display: none;";
	kotak = [];
	winner = "kosong";
	for(i = 1; i <= 9; i++) {
		document.getElementById('kotak'+i).style = "border-radius: 50%; background-color: red";
	}
	document.getElementById('selamat').innerHTML = "";
}