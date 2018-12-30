$(document).ready(function(){

/*! Fades in page on load */
$('body').fadeIn(1000);
});


	var tekst1 =  "Przewody łączące elektroniczne elementy drona muszą zostać przylutowane aby zapewnić stabilne połączenie i odpowienie przewodnictwo. To nic trudnego. <br> Do lutowania potrzebne będą: <ul><li>lutownica</li><li>cyna</li><li>kalafonia</li></ul> <br> UWAGA: Nie należy dotykać grotu lutownicy po nagrzaniu, ponieważ grozi to bardzo poważnym oparzeniem. <br><br>Instrukcja lutowania:<ul><li>Zdejmij izolację z końcówek przewodów.</li><li>Jeśli jest to tak zwana linka (na przewód składa się dużo cienkich drucików w jednej izolacji) należy zakręcić końcówkę tak aby nie odstawał żaden drucik.</li><li>Końcówkę przewodu nagrzej lutownicą a następnie włóż ją do pojemnika z kalafonią.</li><li>Ponownie nagrzej końcówkę a po 2-4 sekundach przyłóż cynę (do przewodu, nie do grota). Cyna powinna się stopić i rozlać równomiernie po końcówce przewodu.</li><li>Gdy na przewodzie znajdzie się odpowiednia ilość cyny oddal ją. </li><li>Przyłóż końcówkę z nałożoną cyną do elementu, z którym chcesz ją połączyć.</li><li>Do końcówki przewodu przyłóż lutownicę.</li><li>Gdy końcówka się nagrzeje cyna zgromadzona na niej rozleje się na element z którym ją łączymy.</li><li>Odejmij lutownicę i odczekaj sekundę nie ruszając przewodu i elementu.</li><li>Gdy cyna zastygnie lut jest gotowy!</li></ul>";
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
	var plik = "<img src=\"kroki/krok"+numer+".png\" width=\"60%\" max-height=\"auto\"/>";
	document.getElementById("obraz").innerHTML = plik;

	// wybór tekstu
	var tekst=[tekst1, tekst2, tekst3, tekst4, tekst5, tekst6, tekst7];
	var text=nr-1;
	document.getElementById("tekst").innerHTML = tekst[text];
}
