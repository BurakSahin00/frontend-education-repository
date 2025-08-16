// JavaScript Objects (Nesneler)

// 1. Definition (Tanım)
// Nesneler, birden fazla veriyi ve fonksiyonu bir arada tutan yapılardır.
let araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020
};
console.log("Nesne tanımı örneği:", araba);

// 2. Constructor (Yapıcı Fonksiyon)
// Nesne oluşturmak için constructor fonksiyonlar kullanılabilir.
function Person(ad, yas) {
  this.ad = ad;
  this.yas = yas;
}
let kisi1 = new Person("Ali", 25);
console.log("Constructor ile nesne:", kisi1);

// 3. this Anahtar Kelimesi
// this, nesne içindeki özelliğe/metoda erişmek için kullanılır.
let kisi2 = {
  ad: "Zeynep",
  yas: 30,
  selamla: function() {
    return "Merhaba, ben " + this.ad;
  }
};
console.log("this ile erişim:", kisi2.selamla());

// 4. Destructuring (Parçalama)
// Nesne içindeki değerleri kolayca değişkenlere ayırmak için kullanılır.
let kitap = { ad: "JS", yazar: "Burak", sayfa: 200 };
let { ad, yazar } = kitap;
console.log("Destructuring ile ad:", ad);
console.log("Destructuring ile yazar:", yazar);

// 5. Prototyping (Prototip Kullanımı)
// Tüm nesneler Object prototipinden türetilir. Prototip ile ortak özellik/metot eklenebilir.
Person.prototype.selamla = function() {
  return "Selam, ben " + this.ad;
};
console.log("Prototip metodu:", kisi1.selamla());

// 6. Methods (Metotlar)
// Nesne içinde fonksiyon tanımlayarak metot oluşturulur.
let hesap = {
  sayi: 10,
  karesiniAl: function() {
    return this.sayi * this.sayi;
  }
};
console.log("Metot örneği:", hesap.karesiniAl());

// Arrow function ile metot (this bağlamı farklıdır)
let hesap2 = {
  sayi: 5,
  karesiniAl: () => {
    // Arrow function'da this global scope'u gösterir
    return hesap2.sayi * hesap2.sayi;
  }
};
console.log("Arrow function ile metot:", hesap2.karesiniAl());

// 7. Properties (Özellikler)
// Özelliklere nokta veya köşeli parantez ile erişim, ekleme, silme
let ogrenci = { ad: "Mehmet", yas: 22 };
console.log("Özellik erişimi:", ogrenci.ad);
ogrenci.sınıf = "12A";
console.log("Özellik ekleme:", ogrenci.sınıf);
delete ogrenci.yas;
console.log("Özellik silme:", ogrenci);

// 8. Get/Set (Getter ve Setter)
// Nesne özelliklerine kontrollü erişim için get/set kullanılabilir.
let urun = {
  _fiyat: 100,
  get fiyat() {
    return this._fiyat;
  },
  set fiyat(value) {
    if (value > 0) this._fiyat = value;
  }
};
console.log("Getter ile fiyat:", urun.fiyat);
urun.fiyat = 150;
console.log("Setter ile yeni fiyat:", urun.fiyat);

// 9. Protection (Koruma)
// Nesne özelliklerini dışarıdan değiştirilmesini engellemek için Object.freeze ve Object.seal kullanılabilir.
let ayar = { tema: "koyu", dil: "tr" };
Object.freeze(ayar);
ayar.tema = "açık"; // Değişmez
console.log("Object.freeze ile koruma:", ayar);

let ayar2 = { tema: "koyu" };
Object.seal(ayar2);
ayar2.tema = "açık"; // Değişir
delete ayar2.tema; // Silinemez
console.log("Object.seal ile koruma:", ayar2);

// Nesneyi konsolda göstermek
console.log("Nesne gösterimi:", ogrenci);

// JSON olarak stringe dönüştürmek
let jsonOgrenci = JSON.stringify(ogrenci);
console.log("JSON formatında:", jsonOgrenci);
