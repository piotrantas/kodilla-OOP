
function Telefon(marka, cena, kolor) { //funkcja tworząca naszą kalsę telefon - klasa to matryca szablon do tworzenia obiektów. W parametrze funkcji określamy dane, które będziemy podawać tworząc konktretny telefon. Klasa ma tworzyć obiekty, więc tak jak w obiekcie musimy utworzyć parametry, które będziemy pózniej wypełniali danymi.
	
	this.marka = marka; // parametr obiektu. jego wartość to to samo co określamy w paramtrze funcji . Dodajemu tu też słowo this - oznacza to, że, ma się to odnosić do tego (this) obiektu, którym się zajmujemy, który stworzymy. bez tego funkcja odnosząca się do parametru obiektu, a mielibyśmy więcej obiektów z tym samym PARAMETREM, funkcja nie wiedziałaby do czego się odnieść, albo odnioslaby się do do całego DOMu, który nie ma takiego paramteru do jakiego się odwołujemy [CHYBA O TO CHODZI]
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() { // mamy klasę, czyli matrycę, którą wyżej stowrzyliśmy. Teraz tworzymy dla niej mechanizm, który po wypełnieniu tej matrycy danymi coś z nimi zrobi. Więc dla klasy Telefon tworzymy prototyp, którego mechanizmem będzie metoda printInfo, która z kolei wykona funkcję wyświelającą w konsoli to co tam jej kazaliśmy
	var warranty = this.cena / 10;
	console.log("Marka tego telefonu to " + this.marka + ", kolor to " + this.molor + ", a cena to " + this.cena + " zł," + " zaś przedłużona gwarancja to wydatek " + warranty + "zł."); //wyświetli w konsoli to co tam kazaliśmy. Za this... podstawi wartości parametrów, obiektu, które wstawiliśmy tworząc dany obiekt za pomocą klasy/matrycy
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny");  // to jest konstruktor, czyli metoda, gdzie konstuujemy obiekt za pomocą klasy/matrycy, właściwie konstruujemy nową instancję klasy - tworzymy zmienną , której wartością będzie: najpierw instrukcja new, tworzymy coś nowego, póżniej przywołanie funkcji, tworzącej klasę/matrycę a w jej parametrach to co ma się podstawić w odpwoednich właściwościach parametrów nowego obiektów. Czyli tworzymy coś mniej więcej takiego: var iPhone6S = { this.marka = 'Apple', this.kolor = 'srebrny', this.cena = 2250 }

var Note = new Telefon("Samsung", 2500, "Burning red");

//czyli mamy już stowrzoną matrycę(klasę) do robienia tlefonów(obiektów/instancji klasy), póżniej tworzymy na tej podstwie nowe telefony korzystając z metody konstuującej z instrukcą new.
// póżniej (właściwmie troszkę wcześniej to napisaliśmy) piszemy co chcemy zrobić z tym obiektem czyli robimy mechanizm(prototyp)
// teraz możemy wywołać funkcję prinInfo dla nowego obiektu: np. iPhone6S.printInfo() - wywołanie weżmie nowostworzony obiekt iPhone6S i wykona funkcję printInfo, czyli wykonsolguj odpowiednie dane pobierając je z wartości parametrów tego(this) obiektu, którym się zajmujemy



// miało być inne słowo w drugim komentarzu - poprawiłem wielkimi literami



iPhone6S.printInfo();
Note.printInfo();




