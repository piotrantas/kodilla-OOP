function Button(text) { // funkcja tworząca klasę button z parametrem text
	this.text = text || 'Hello'; // klasa z jednym parametrem o wartości text lub (||) jęsli nie podano parametru w konstrutorze wartość 'Hello'
}

Button.prototype = { //prototyp, mechanizm, który będzie coś robił z stowrzonym przyciskiem, w tym przypadku m.in wyświetlał na stronie
	create: function() { // metoda (jQuery) tworząca
		var self = this; // zmienna self ]NIE DO KOŃCA KUMAM O CO CHODZI]. Mówimy, że self to to samo co this?
		this.$element = $( '<button>' ); //tworzymy button (poprzez jQuery)
		this.$element.text(this.text); // dodajemy do button text (ten który był parametrem stworzonego obiektu)
		this.$element.click(function() { // ustawiamy clik na buttonie, który wykona funkcję alertującą
			alert(self.text); // alertujemy/wyświetlamy w wyskakującym oknie tekst - odwołujemy się tu do self, które, jak wcześniej określiliśmy jest tym samym co this. Musimy tak zrobić, bo mamy tu funkcję w funkcji i js gubi kontekst, w ten sposób mu go wskazujemy
		});
		$('body').append(this.$element); // dodajemy (przez jQuery) tak stworzony button
	}
}
var btn1 = new Button('Hello!'); //konstruktor buttona poprzez instrukcję new z parametrem 'Hello!'. Gdybyśmy go nie podali, to wyświetliłby to co po lub(||) w cunkcji klasy
btn1.create(); //wywołanie tworzenia butona na podstawie danych ze zmiennej btn1
