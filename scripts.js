

$(function() { // umieszczaymy w tym by mieć pewność, że wszystko wykona się po załadowaniu strony (DOMu)
	


// NOWE ID
	function randomString() { // funkcja, która będzie nam generowała id - każde unikalne
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'; // zmienna, będąca ciągiem znaków z którego będziemy wybierać losowo jeden do id
		var str = ''; // wartość początkowa naszego stringa, który będzie id
		var i = 0; // "zmienna pomocnicza" dla pętki for
		for (i = 0; i < 10; i++) { // pętla for, która bierze i = 0, wykonuje to co niżej, robi to tak długo dopuki jeszcze i < 10, po każdym wykonani dodaje do i 1
	    	str += chars[Math.floor(Math.random() * chars.length)]; // do pustego na początku stringa str dodaje zakażdym razem jedną losową liczbę [NIE KUMAM JAK DZIAŁA TO DZIAŁANIE Z MNOŻNIKIEM]
		}
		return str; // za każdym razem zwraca stringa z 9 losowo wybranymi znakami, z którego będziemy robić unikalne id
	};
// NOWA KOLUMNA
	function Column(name) { // funkcja toworząca klasę column - czyli taką matrycę do robienia kolejnych - wszystkie będa wygladały tak somo, podstawową róznicą będzie nazwa danej kolumny (jest w parametrze funkcji)
		var self = this; // zmienna która zapobiega gubieniu kontekstu przy używaniu funkcji w funckcji
		this.id = randomString(); // parametr id danej kolumny - będzi się ustawiał z losowej funkcji randomString
		this.name = name; // parametr nazwy - z parametru funkcji
		this.$element = createColumn(); // stworzenie nowego elementu przy użyciu finkcji
		function createColumn() {
			var $column = $('<div>').addClass('column'); // tworzy sam kontener columny
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name); // tworzy nazwę kolumny pobierając ją z parametru funkcji tworzącej kolumnę
			var $columnCardList = $('<ul>').addClass('column-card-list'); //tworzy listę dla karteczek
			var $columnDelete = $('<button>').addClass('btn-delete').text('usuń kolumnę'); // tworzy button do usuwania kolumny
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę'); // tworzy button do dodawania karteczek

			$columnDelete.click(function() { // podpiana funkcję pod buuton do usuwania kolumny
        		self.removeColumn();
			});

			$columnAddCard.click(function() { //podpina funkcję pod button do dodawania karteczek
        		self.addCard(new Card(prompt("Wpisz nazwę karty"))); // po kliku na button wykona add Card z tym co wpiszemy w prompt jako parametrem funkcji
			});

			$column.append($columnTitle).append($columnDelete).append($columnAddCard).append($columnCardList); //metada dodająca po kolei elementy kolumny
			return $column; // i w efekcie powyższego zwraca całą kolumnę ze wszystkimi jej elementami
		}
	};

	Column.prototype = { // mechanizm tworzenia kolumny 
		addCard: function(card) {
			this.$element.children('ul').append(card.$element); // do kolumny doda ul z nazwą jak w parametrze, który podany został w prompcie
		},
		removeColumn: function() { 
			this.$element.remove(); // funkcja usuwania kolumny podpięta wcześniej pod odpowiedni, tworzomy w kolumnie przycisk
		}
	};

	function Card(description) { // tutaj większość dzieje się jak w funkcji towrzącej klasę kolumny
		var self = this;
		this.id = randomString();
		this.description = description;
		this.$element = createCard();
		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');
			$cardDelete.click(function(){
       			 self.removeCard();
			});
			$card.append($cardDelete).append($cardDescription);
			return $card;
		};
	};
	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	}

	var board = { // ponieważ nie tworzymyw tym przypadku wielu tablic nie ma klasy i mechanizmu o po prostu obiekt, który zostanie stowrzony
		name: 'Tablica Kanban', // parametr nazwy
		addColumn: function(column) { // towrzy kolumny (na podstwie wcześniejszego (i późniejszego kodu)) 
			this.$element.append(column.$element); // dodaje kolumne do this.elementu - w tym przypadku określonego jQuerowo poniżej - kontenra board
			initSortable(); // wywołuje funkcję, która pozwoala na drag and drop w kolumnach
		},
		$element: $('#board .column-container') // okreslenie elementu do którego odwołuje się funkcja w obiekcie
	};

	function initSortable() { // funkcja pozwalająca na zostosowanie metody z dodatkowej biblioteki  - pozowalające na drag and drop
		$('.column-card-list').sortable({ // wybieramy wszysstkie element z listy ul kolumny za pomocą klasy, która dodaliśmy w klasie  kolumny. metoda sortable (z dodatkowej biblioteki) pozwala na drag and drop
			connectWith: '.column-card-list', // wybieramy elementy z klasą gdzie ma działać metoda
			placeholder: 'card-placeholder' // wybieramy element, któy może się podświetlac po najechani
		}).disableSelection(); // metoda zapobiegająca mozliwości zaznaczania tekstu
	}

	$('.create-column').click(function(){ // do przycisku (już w html) dodamy funkcję tworzącą nowe kolumny 
		var name = prompt('Wpisz nazwę kolumny'); // nazwą będzie to co wpiszemy w prompt
		var column = new Column(name); // na podtawie klasy stworzy kolumnę z nazwą (parametrem name) ja kw prompt
    	board.addColumn(column); // wyświetli nową kolumnę
	});

	// TWORZENIE KOLUMN // na podstawie klas i mechanizmów (prototypów) stowrzymy od razu nowe kolumny
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');

	// DODAWANIE KOLUMN DO TABLICY // wyświetlimy stworzone wyżej kolumny na tablicy
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// TWORZENIE NOWYCH EGZEMPLARZY KART // jak wyżej tylko z kartami
	var card1 = new Card('Nowe zadanie');
	var card2 = new Card('Stworzyc tablice kanban');

	// DODAWANIE KART DO KOLUMN // jak wyżej tylko z kartami
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);







})