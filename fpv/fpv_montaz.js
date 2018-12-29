$(document).ready(function(){

/*! Fades in page on load */
$('body').fadeIn(1000);
});


	var tekst1 =  "Tutaj będzie opis jak powinno się lutować";
	var tekst2 =  "Tutaj będzie instrukcja jak złożyć ramę";
	var tekst3 =  "Tu będzie schemat elektryczny";
	var tekst4 =  "Bateria zasili drona aby mógł utrzymywać się w powietrzu, oraz dostarczy mu wystarczająco dużo mocy by wykonać najbardziej wymyślne ewolucje. Zaproponowana bateria o pojemności 2200mAh to idealny balans pomiędzy jej pojemnością a wagą.";
	var tekst5 =  "Śmigła uniosą drona w powietrze. Bardzo często ulegają zniszczeniu przy zderzeniu, dlatego warto mieć kilka dodatkowych sztuk. Należy pamiętać by zakupić po dwa śmigła zgodne z ruchem wskazówek zegara (clock-wise CW) oraz przeciwne do ruchu wskazówek zegara (counter-clock-wise CCW). Różnią się one kształtem zależnym od kierunku obrotu.";
	var tekst6 =  "Na komunikację z dronem składają się dwa elementy: nadajnik radiowy oraz odbiornik. Nadajnik pozwoli na pełną kontrolę nad ruchami drona. Odbiornik przetworzy sygnał a następnie przekarze informację dalej do poszczególnych elementów elektroniki.";
	var tekst7 =  "To mały mózg drona. Otrzymuje informacje z odbiornika radiowego a następnie przekazuje konkretne polecenia do regulatorów ESC (Electronic Speed Controller) które zarządzają każdym z silników. Posiada również zestaw sensorów takich jak żyroskop czy kompas które pozwalają na orientację w terenie.";

	var numer=1;
	var text=0;
	var lin=0;


  function kroki(nr)
{
	numer=nr;

	// wybór obrazka
	var plik = "<img src=\"elementy/element"+numer+".png\" width=\"60%\" max-height=\"auto\"/>";
	document.getElementById("obraz").innerHTML = plik;

	// wybór tekstu
	var tekst=[tekst1, tekst2, tekst3, tekst4, tekst5, tekst6, tekst7];
	var text=nr-1;
	document.getElementById("tekst").innerHTML = tekst[text];
}
