// Karşılaştırma Operatörleri (Comparisons)
// == eşitlik, === veri tipiyle eşitlik, != eşit değil, !== veri tipiyle eşit değil
// > büyük, < küçük, >= büyük eşit, <= küçük eşit

let a = 5;
let b = "5";
let c = 7;

// == (eşitlik, veri tipi bakmaz)
console.log("a == b:", a == b); // true

// === (eşitlik, veri tipi de bakar)
console.log("a === b:", a === b); // false

// != (eşit değil, veri tipi bakmaz)
console.log("a != b:", a != b); // false

// !== (eşit değil, veri tipi de bakar)
console.log("a !== b:", a !== b); // true

// > (büyük)
console.log("c > a:", c > a); // true

// < (küçük)
console.log("a < c:", a < c); // true

// >= (büyük eşit)
console.log("a >= b:", a >= b); // true

// <= (küçük eşit)
console.log("a <= b:", a <= b); // true

// Karşılaştırma ile boolean sonuç
let sonucKarsilastirma = a > c;
console.log("a > c sonucu:", sonucKarsilastirma); // false

// Karşılaştırma stringlerde
let str1 = "apple";
let str2 = "banana";
console.log("str1 < str2:", str1 < str2); // true (alfabetik karşılaştırma)

// Karşılaştırma ile if kullanımı
if (a === 5) {
	console.log("a tam olarak 5'tir ve tipi de number'dır.");
}
// JavaScript Veri Tipleri Örnekleri

// 1. Number (Sayı)
let yas = 25;
let pi = 3.14;
console.log("Number örnekleri:", yas, pi);

// 1. Number (Sayı)
// JavaScript'te tüm sayılar (tam, ondalık, negatif, exponential) Number tipindedir.

// Tam sayı
let num1 = 100;
console.log("Tam sayı:", num1); // 100

// Ondalık sayı
let num2 = 3.14;
console.log("Ondalık sayı:", num2); // 3.14

// Negatif sayı
let num3 = -7;
console.log("Negatif sayı:", num3); // -7

// Exponential notation
let num4 = 123e5; // 12300000
let num5 = 123e-5; // 0.00123
console.log("Exponential notation (büyük):", num4);
console.log("Exponential notation (küçük):", num5);

// Ondalık hassasiyeti
let num6 = 0.2 + 0.1;
console.log("0.2 + 0.1:", num6); // 0.30000000000000004

// Tam sayı hassasiyeti (15 basamak)
let num7 = 999999999999999; // 15 basamak doğru
let num8 = 9999999999999999; // 16 basamakta hassasiyet kaybı
console.log("15 basamak doğru:", num7);
console.log("16 basamakta hassasiyet kaybı:", num8);

// Number tipinde string ile sayı
let num9 = "100";
console.log("String sayı:", num9); // "100"
console.log("typeof num9:", typeof num9); // string

// Number tipinde aritmetik işlemler
let num10 = 10;
let num11 = 20;
let toplam = num10 + num11;
console.log("Aritmetik toplama:", toplam); // 30

// Number tipinde string ile aritmetik
let num12 = "10";
let num13 = 20;
let sonuc1 = num12 + num13; // string + number = string birleştirme
console.log("String + number toplama:", sonuc1); // "1020"

let sonuc2 = num12 - num13; // string - number = aritmetik çıkarma
console.log("String - number çıkarma:", sonuc2); // -10

// Number tipinde NaN (Not a Number)
let num14 = 100 / "Apple";
console.log("NaN örneği:", num14); // NaN
console.log("NaN bir sayı mı?:", typeof num14); // number

// Number tipinde Infinity
let num15 = 1 / 0;
console.log("Infinity örneği:", num15); // Infinity

let num16 = -1 / 0;
console.log("-Infinity örneği:", num16); // -Infinity


// 2. String (Metin)
let isim = "Burak";
let mesaj = 'Merhaba!';
console.log("String örnekleri:", isim, mesaj);

// 3. Boolean (Mantıksal)
let aktif = true;
let gectiMi = false;
console.log("Boolean örnekleri:", aktif, gectiMi);

// 4. Undefined (Tanımsız)
let aciklama;
console.log("Undefined örneği:", aciklama);

// 5. Null (Boş/Tanımlı değil)
let sonuc = null;
console.log("Null örneği:", sonuc);

// 6. Object (Nesne)
let kisi = {
	ad: "Burak",
	yas: 30
};
console.log("Object örneği:", kisi);

// 7. Symbol (Benzersiz ve değiştirilemez değer)
let sembol = Symbol("id");
console.log("Symbol örneği:", sembol);

// 8. BigInt (Çok büyük sayılar için)
let buyukSayi = 1234567890123456789012345678901234567890n;
console.log("BigInt örneği:", buyukSayi);

let buyukSayi2 = BigInt("1234567890123456789012345678901234567890");
console.log("BigInt string ile örnek:", buyukSayi2);

// 9. Array (Dizi)
// Birden fazla değeri tek bir değişkende tutmak için kullanılır.

// Dizi tanımlama
let meyveler = ["Elma", "Armut", "Muz"];
console.log("Dizi örneği:", meyveler);

// Dizi elemanlarına erişim (indeks ile)
console.log("İlk meyve:", meyveler[0]); // "Elma"
console.log("Son meyve:", meyveler[meyveler.length - 1]); // "Muz"

// Dizi elemanını değiştirme
meyveler[1] = "Kiraz";
console.log("Güncellenmiş dizi:", meyveler);

// Dizi uzunluğu
console.log("Dizi uzunluğu:", meyveler.length);

// Diziye eleman ekleme (push)
meyveler.push("Portakal");
console.log("Push ile ekleme:", meyveler);

// Diziye başa eleman ekleme (unshift)
meyveler.unshift("Kivi");
console.log("Unshift ile başa ekleme:", meyveler);

// Diziden son elemanı çıkarma (pop)
let son = meyveler.pop();
console.log("Pop ile çıkarılan:", son);
console.log("Pop sonrası dizi:", meyveler);

// Diziden ilk elemanı çıkarma (shift)
let ilk = meyveler.shift();
console.log("Shift ile çıkarılan:", ilk);
console.log("Shift sonrası dizi:", meyveler);

// Dizi içinde arama (indexOf)
let muzIndex = meyveler.indexOf("Muz");
console.log("Muz'un indeksi:", muzIndex);

// Dizi birleştirme (concat)
let sebzeler = ["Havuç", "Brokoli"];
let gida = meyveler.concat(sebzeler);
console.log("Birleşik dizi:", gida);

// Dizi döngüsü (for)
for (let i = 0; i < meyveler.length; i++) {
	console.log("Meyve:", meyveler[i]);
}

// Dizi döngüsü (for...of)
for (let meyve of meyveler) {
	console.log("for...of ile meyve:", meyve);
}

// Dizi türü kontrolü
console.log("Array mi?:", Array.isArray(meyveler));


// Exponential Notation (Üstel Gösterim) Örnekleri

// Büyük sayıları daha kısa yazmak için kullanılır
let buyuk = 1e6; // 1 milyon (1 * 10^6)
let kucuk = 2.5e-3; // 0.0025 (2.5 * 10^-3)
let bilimsel = 7.12e4; // 71200 (7.12 * 10^4)

console.log("Exponential Notation ile büyük sayı:", buyuk); // 1000000
console.log("Exponential Notation ile küçük sayı:", kucuk); // 0.0025
console.log("Exponential Notation ile bilimsel sayı:", bilimsel); // 71200


// typeof Operatörü Örnekleri

console.log("typeof yas:", typeof yas); // number
console.log("typeof pi:", typeof pi); // number
console.log("typeof isim:", typeof isim); // string
console.log("typeof aktif:", typeof aktif); // boolean
console.log("typeof aciklama:", typeof aciklama); // undefined
console.log("typeof sonuc:", typeof sonuc); // object (null için JS'te özel durum)
console.log("typeof kisi:", typeof kisi); // object
console.log("typeof sembol:", typeof sembol); // symbol
console.log("typeof buyukSayi:", typeof buyukSayi); // bigint
console.log("typeof sayilar:", typeof sayilar); // object (diziler de object'tir)




