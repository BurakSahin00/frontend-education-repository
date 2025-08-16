
// JavaScript Classes (Sınıflar)

// 1. Class Tanımı
// Sınıflar, nesne tabanlı programlamada bir şablon oluşturmak için kullanılır.
class Araba {
	constructor(marka, model) {
		this.marka = marka;
		this.model = model;
	}
	bilgi() {
		return `${this.marka} ${this.model}`;
	}
}
let araba1 = new Araba("Toyota", "Corolla");
console.log("Class ile nesne:", araba1.bilgi());

// 2. Constructor (Yapıcı Metot)
// constructor metodu, sınıftan nesne oluşturulurken çalışır ve özellikleri başlatır.
class Kisi {
	constructor(ad, yas) {
		this.ad = ad;
		this.yas = yas;
	}
}
let kisi1 = new Kisi("Ayşe", 28);
console.log("Constructor ile nesne:", kisi1);

// 3. Methods (Sınıf Metotları)
// Sınıf içinde fonksiyon tanımlayarak metot oluşturulur.
class Hesap {
	constructor(sayi) {
		this.sayi = sayi;
	}
	kare() {
		return this.sayi * this.sayi;
	}
}
let hesap1 = new Hesap(5);
console.log("Sınıf metodu:", hesap1.kare());

// 4. Properties (Sınıf Özellikleri)
// Sınıf özellikleri constructor içinde tanımlanır.
class Ogrenci {
	constructor(ad, sinif) {
		this.ad = ad;
		this.sinif = sinif;
	}
}
let ogrenci1 = new Ogrenci("Mehmet", "12A");
console.log("Sınıf özelliği:", ogrenci1.ad, ogrenci1.sinif);

// 5. Static Methods & Properties (Statik Metot ve Özellikler)
// Statik metotlar/özellikler, sınıfın kendisine ait olup nesne üzerinden erişilemez.
class Matematik {
	static topla(a, b) {
		return a + b;
	}
	static PI = 3.14;
}
console.log("Statik metot:", Matematik.topla(2,3));
console.log("Statik özellik:", Matematik.PI);

// 6. Inheritance (Kalıtım)
// Bir sınıf başka bir sınıftan özellik ve metotları miras alabilir.
class Hayvan {
	constructor(ad) {
		this.ad = ad;
	}
	ses() {
		return "Ses yok";
	}
}
class Kedi extends Hayvan {
	ses() {
		return "Miyav";
	}
}
let kedi1 = new Kedi("Pamuk");
console.log("Kalıtım örneği:", kedi1.ad, kedi1.ses());

// 7. super Anahtar Kelimesi
// Alt sınıfta üst sınıfın metotlarını çağırmak için kullanılır.
class Kopek extends Hayvan {
	ses() {
		return super.ses() + " ve Hav Hav";
	}
}
let kopek1 = new Kopek("Karabas");
console.log("super ile üst sınıf metodu:", kopek1.ses());

// 8. Get/Set (Getter ve Setter)
// Sınıf özelliklerine kontrollü erişim için get/set kullanılabilir.
class Urun {
	constructor(fiyat) {
		this._fiyat = fiyat;
	}
	get fiyat() {
		return this._fiyat;
	}
	set fiyat(value) {
		if (value > 0) this._fiyat = value;
	}
}
let urun1 = new Urun(100);
console.log("Getter ile fiyat:", urun1.fiyat);
urun1.fiyat = 150;
console.log("Setter ile yeni fiyat:", urun1.fiyat);

// 9. Private Properties & Methods (Özel Özellik ve Metotlar)
// # ile başlayan özellik/metotlar sadece sınıf içinde erişilebilir.
class Gizli {
	#sifre = "1234";
	sifreyiGoster() {
		return this.#sifre;
	}
}
let gizli1 = new Gizli();
console.log("Private property:", gizli1.sifreyiGoster());

// 10. Class Expression
// Sınıflar, değişkene atanarak da tanımlanabilir.
let Hayvan2 = class {
	constructor(ad) {
		this.ad = ad;
	}
};
let hayvan2 = new Hayvan2("Kuş");
console.log("Class expression:", hayvan2.ad);

// 11. Instanceof
// Bir nesnenin hangi sınıftan türetildiğini kontrol etmek için kullanılır.
console.log("araba1 instanceof Araba:", araba1 instanceof Araba); // true
console.log("kedi1 instanceof Hayvan:", kedi1 instanceof Hayvan); // true

// Açıklama:
// Sınıflar ile nesne tabanlı programlama daha düzenli ve okunabilir hale gelir. Kalıtım, kapsülleme, polimorfizm gibi OOP kavramları kolayca uygulanabilir.
