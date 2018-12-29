$(document).ready(function(){

/*! Fades in page on load */
$('body').fadeIn(1000);
});


	var tekst1 =  "Rama łączy wszystkie elementy drona w jedną całość. Ważne by była zarówno lekka jak i posiadała dużo miejsca na montaż wszystkich niezbędnych urządzeń. Najlepsze ramy są wykonane z włókna węglowego z nacięciami pozwalającymi na łatwy montaż kamer oraz elektroniki.";
	var tekst2 =  "Silniki uniosą drona i od nich będzie zależało jego przyspieszenie. W naszej konstrukcji wykorzystujemy cztery silniki. Ważna uwaga: należy zakupić dwa silniki zgodne z ruchem wskazówek zegara (clock-wise CW) oraz dwa przeciwne do ruchu wskazówek zegara (counter-clock-wise CCW). Różnią się one gwintem, na którym osadzone jest śmigło.";
	var tekst3 =  "Regulator ESC (Electronic Speed Controller) zapewnia komunikację pomiędzy silnikami a kontrolerem lotu. W zależności od informacji która przyjdzie z radia, ESC zmieni prędkość silnika pozwalając na zmianę kierunku lotu oraz prędkości. Do budowy tego drona potrzebne będą cztery regulatory ESC (po jednym na każdy silnik).";
	var tekst4 =  "Bateria zasili drona aby mógł utrzymywać się w powietrzu, oraz dostarczy mu wystarczająco dużo mocy by wykonać najbardziej wymyślne ewolucje. Zaproponowana bateria o pojemności 2200mAh to idealny balans pomiędzy jej pojemnością a wagą.";
	var tekst5 =  "Śmigła uniosą drona w powietrze. Bardzo często ulegają zniszczeniu przy zderzeniu, dlatego warto mieć kilka dodatkowych sztuk. Należy pamiętać by zakupić po dwa śmigła zgodne z ruchem wskazówek zegara (clock-wise CW) oraz przeciwne do ruchu wskazówek zegara (counter-clock-wise CCW). Różnią się one kształtem zależnym od kierunku obrotu.";
	var tekst6 =  "Na komunikację z dronem składają się dwa elementy: nadajnik radiowy oraz odbiornik. Nadajnik pozwoli na pełną kontrolę nad ruchami drona. Odbiornik przetworzy sygnał a następnie przekarze informację dalej do poszczególnych elementów elektroniki.";
	var tekst7 =  "To mały mózg drona. Otrzymuje informacje z odbiornika radiowego a następnie przekazuje konkretne polecenia do regulatorów ESC (Electronic Speed Controller) które zarządzają każdym z silników. Posiada również zestaw sensorów takich jak żyroskop czy kompas które pozwalają na orientację w terenie.";
	var tekst8 =  "Rozdzielacz mocy PDB (Power Distribution Board) pomaga rozdzielić napięcie pomiędzy różnymi componentami takimi jak ESC lub kamerą. Usprawnia ona lutowanie elementów oraz pozwala na lepszą organizację przewodów.";
	var tekst9 =  "Gogle FPV pozwalają pilotowi przenieść się na pokład drona, bez odrywania od ziemi. Gogle powinny zapewniać komfort użytkowania.";
	var tekst10 =  "To co pozwala człowiekowi nawigować dronem to zmysł wzroku. W przypadku FPV przeniesiony został ten zmysł na pokład drona. Na układ pozwalający widzieć obraz z perspektywy drona składają się: kamera oraz transmiter wideo.";
	// var tekst11 =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis pharetra quam. Nulla posuere cursus tellus id dapibus. Nullam placerat justo non fringilla rutrum. Aenean vitae cursus enim. Aliquam vel nibh vel justo lacinia venenatis at ac massa.  ";

	var link1 = "https://abc-rc.pl/product-pol-5882-Rama-Carbon-QAV-250-Mini-Quadcopter-FPV-z-amortyzacja-ZMR-250.html";
	var link2 = "https://www.banggood.com/EMAX-MT1806-KV2280-Brushless-Motor-For-Multirotor-p-933931.html?akmClientCountry=PL&&ID=521309&cur_warehouse=CN";
	var link3 = "https://www.banggood.com/Emax-Simonk-Series-12A-20A-25A-30A-40A-ESC-For-Quadcopter-QAV-250-p-918126.html?akmClientCountry=PL&&ID=45170&cur_warehouse=CN";
	var link4 = "https://www.banggood.com/ZOP-Power-11_1V-2200MAH-35C-Lipo-Battery-T-Plug-p-990754.html?akmClientCountry=PL&&cur_warehouse=CN";
	var link5 = "https://www.gearbest.com/rc-quadcopters-parts/pp_128589.html";
	var link6 = "https://www.banggood.com/FlySky-FS-i6-2_4G-6CH-AFHDS-RC-Transmitter-With-FS-iA6-Receiver-p-922606.html?akmClientCountry=PL&&ID=42482&cur_warehouse=CN";
	var link7 = "https://www.banggood.com/OpenPilot-CC3D-Flight-Controller-STM32-32-bit-Flexiport-p-937044.html?akmClientCountry=PL&&cur_warehouse=CN";
	var link8 = "https://www.banggood.com/ESC-Connection-Board-Distribution-Board-For-Multi-Axis-Model-p-941273.html?akmClientCountry=PL&&cur_warehouse=CN";
	var link9 = "http://ace-radio-controlled-models.shoplightspeed.com/ufo-fpv-ufo-fpv-diy-58g-40ch-5-inch-800-x-480-hd-s.html";
	var link10 = "https://www.banggood.com/Eachine-700TVL-13-CMOS-PALNTSC-2_6mm-148-Degree-Wide-Angle-FPV-Camera-W-32CH-200mW-Transmitter-p-970051.html?version=3&akmClientCountry=PL&&akmClientCountry=PL&cur_warehouse=CN";
	// var link11 = "https://abc-rc.pl/product-pol-5882-Rama-Carbon-QAV-250-Mini-Quadcopter-FPV-z-amortyzacja-ZMR-250.html";

	var numer=1;
	var text=0;
	var lin=0;


  function elementy(nr)
{
	numer=nr;

	// wybór obrazka
	var plik = "<img src=\"elementy/element"+numer+".png\" width=\"60%\" max-height=\"auto\"/>";
	document.getElementById("obraz").innerHTML = plik;

	// wybór tekstu
	var tekst=[tekst1, tekst2, tekst3, tekst4, tekst5, tekst6, tekst7, tekst8, tekst9, tekst10];
	var text=nr-1;
	document.getElementById("tekst").innerHTML = tekst[text];

	// wybór linku
	var link=[link1, link2, link3, link4, link5, link6, link7, link8, link9, link10];
	var lin=nr-1;
	var href = "<a href=\""+link[lin]+"\"><div class=\"kup\">Kup ten element</div></a>";
	document.getElementById("sklep").innerHTML = href;

}
