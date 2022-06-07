//----------------dzień tygodnia-----------------------------
function czas_aktualny(){
var poniedzialek = document.getElementById("pon");
var wtorek = document.getElementById("wt");
var sroda = document.getElementById("sr");
var czwartek = document.getElementById("czw");
var piatek = document.getElementById("pia");
var sobota = document.getElementById("sob");
var niedziela = document.getElementById("nied");

var data = new Date();
var dzien = data.getDay();

 switch(dzien){
    case 0: niedziela.style.opacity = '1'; break;
    case 1: poniedzialek.style.opacity = '1'; break;
    case 2: wtorek.style.opacity = '1'; break;
    case 3: sroda.style.opacity = '1'; break;
    case 4: czwartek.style.opacity = '1'; break;
    case 5: piatek.style.opacity = '1'; break;
    case 6: sobota.style.opacity = '1'; break;
    default: console.log("blad dnia tygodnia"); break;
  }
  
 //--------------------miesiac, rok i dzien miesiaca-------------------------------
  var dzien_mies = document.getElementById("dzien");
  var miesiac = document.getElementById("miesiac");
  var rok = document.getElementById("rok");
  
	var miesiac_numer = data.getMonth();
	var rok_numer = data.getFullYear();
	var dzien_m = data.getUTCDate();
  
  function podmien(dopodmiany, podmiana) {
    miesiac.innerHTML = miesiac.innerHTML.replace(dopodmiany, podmiana);
}
	rok.innerHTML = rok.innerHTML.replace(" ", rok_numer);
	dzien_mies.innerHTML = dzien_mies.innerHTML.replace(" ", dzien_m);


 switch(miesiac_numer){
    case 0: podmien(" ", "styczeń"); break;
    case 1: podmien(" ", "luty"); break;
    case 2: podmien(" ", "marzec"); break;
    case 3: podmien(" ", "kwiecień"); break;
    case 4: podmien(" ", "maj"); break;
    case 5: podmien(" ", "czerwiec"); break;
    case 6: podmien(" ", "lipiec"); break;
	case 7: podmien(" ", "sierpień"); break;
	case 8: podmien(" ", "wrzesień"); break;
	case 9: podmien(" ", "październik"); break;
	case 10: podmien(" ", "listopad"); break;
	case 11: podmien(" ", "grudzień"); break;
    default: console.log("blad miesiaca"); break;
  }
  //-----------------------------zegar----------------------------------
  var godzina = document.getElementById("godzina");
  var minuta = document.getElementById("minuta");
  var sekunda = document.getElementById("sekunda");
			let czas = new Date();
			let godz = data.getHours();
			let min = data.getMinutes();
			let sek = data.getSeconds();
			
			godz = godz<10? '0'+godz: godz;
			min = min<10? '0'+min: min;
			sek = sek<10? '0'+sek: sek; 
			
			godzina.innerHTML = godz;
			minuta.innerHTML = min;
			sekunda.innerHTML = sek;
}
	setInterval(czas_aktualny,1000);




















