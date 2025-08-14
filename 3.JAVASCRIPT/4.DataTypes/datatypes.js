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
// JavaScript Veri Tipleri Örnekleri

// 1. Number (Sayı)
let yas = 25;
let pi = 3.14;
console.log("Number örnekleri:", yas, pi);

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

// 9.Array (Dizi)
let sayilar = [1, 2, 3, 4];
let isimler = ["Ali", "Veli", "Ayşe"];
console.log("Array örnekleri:", sayilar, isimler);


// Exponential Notation (Üstel Gösterim) Örnekleri

// Büyük sayıları daha kısa yazmak için kullanılır
let buyuk = 1e6; // 1 milyon (1 * 10^6)
let kucuk = 2.5e-3; // 0.0025 (2.5 * 10^-3)
let bilimsel = 7.12e4; // 71200 (7.12 * 10^4)

console.log("Exponential Notation ile büyük sayı:", buyuk); // 1000000
console.log("Exponential Notation ile küçük sayı:", kucuk); // 0.0025
console.log("Exponential Notation ile bilimsel sayı:", bilimsel); // 71200






