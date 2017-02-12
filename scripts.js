
function Telefon(marka, cena, kolor) { 
	
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() { 
	var warranty = this.cena / 10;
	console.log("Marka tego telefonu to " + this.marka + ", kolor to " + this.molor + ", a cena to " + this.cena + " zł," + " zaś przedłużona gwarancja to wydatek " + warranty + "zł.");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny");  

var Note = new Telefon("Samsung", 2500, "Burning red");





iPhone6S.printInfo();
Note.printInfo();




