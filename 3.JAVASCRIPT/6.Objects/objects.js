// JavaScript Nesneler (Object) Konu Anlatımı ve Örnekler

// 1. Object (Nesne) Tanımlama
let araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020
};
console.log("Nesne örneği:", araba);

// 2. Object Properties (Nesne Özellikleri)
// Özelliklere nokta veya köşeli parantez ile erişim
console.log("Marka:", araba.marka); // Nokta gösterimi
console.log("Model:", araba["model"]); // Köşeli parantez gösterimi

// Özellik ekleme
araba.renk = "Kırmızı";
console.log("Renk eklendi:", araba.renk);

// Özellik silme
delete araba.yil;
console.log("Yıl silindi:", araba);

// 3. Object Methods (Nesne Metotları)
let kisi = {
  ad: "Ayşe",
  soyad: "Yılmaz",
  yas: 28,
  tamIsim: function() {
    return this.ad + " " + this.soyad;
  }
};
console.log("Tam isim:", kisi.tamIsim());

// Arrow function ile metot (this bağlamı farklıdır)
let hesap = {
  sayi: 10,
  karesiniAl: () => {
    // Arrow function'da this global scope'u gösterir
    return hesap.sayi * hesap.sayi;
  }
};
console.log("Kare:", hesap.karesiniAl());

// 4. Object Display (Nesneyi Gösterme)
// Konsolda doğrudan nesneyi yazmak
console.log("Kişi nesnesi:", kisi);

// JSON olarak stringe dönüştürmek
let jsonKisi = JSON.stringify(kisi);
console.log("JSON formatında:", jsonKisi);
