/*--------------------------------------panel boczny wysuwanie----------------------------*/
document.querySelector(".panel_boczny .guzik").addEventListener("click",function(){
	document.querySelector(".panel_boczny").classList.toggle("aktywny");
});


/*--------------------------------------sprawdzanie pól mailowych-----------------------------------------------*/

function sprawdzMail()

{
	var tytul_mail = document.getElementById("tytul_mail").value;
	var mail = document.getElementById("mail").value;
	var tekst = document.getElementById("tekst").value;
	
	
	var regula_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var regula = /^[a-zA-Z ]{2,30}$/;
	
	if(!mail.match(regula_mail) || mail == ""){
		alert("błędny mail");
		return false;
	}
	else if(!tytul_mail.match(regula) || tytul_mail == "")
	{
		alert("Wpisz tytuł maila");
		return false;
	}
	else if(tekst == "")
	{
		alert("Wpisz treść maila");
		return false;
	}
	else{
		alert("Wysłano");
	}
}
/*-----------------------------------------------------------------------------------------------------------*/