// Bu bir tek satırlık yorumdur.
// JavaScript'te kodu açıklamak veya not eklemek için kullanılır.

// ====== Literaller (Sabit Değerler) ======
10.5;             // Ondalık sayı (Number literal)
"Hello World";    // Çift tırnak ile tanımlanmış string literal
'Merhaba Dünya';  // Tek tırnak ile tanımlanmış string literal

// ====== Değişken Bildirimi ======
// var, let, const ile değişken tanımlayabiliriz.
// let => değeri sonradan değiştirilebilir.
// const => değeri sonradan değiştirilemez.

let myName = "Ali";     // String değer
const pi = 3.14159;   // Sayı değeri (sabit)
var age = 25;         // Eski tip değişken tanımı (tercih edilmiyor)

// ====== Operatörler ve Atama ======
let x = 5;     // "=" atama operatörü
let y = 10;
let toplam = x + y;   // "+" toplama operatörü
let carpim = x * y;   // "*" çarpma operatörü

// ====== İfadeler (Expressions) ======
let mesaj = "Toplam: " + toplam; // String + Number => String birleşimi
let sonuc = (x + y) * 2;         // Parantez öncelik kuralları

// ====== Yorum Satırları ======
/*
  Bu bir çok satırlı yorumdur.
  Büyük kod bloklarını açıklamak için kullanılır.
*/

// ====== Büyük/Küçük Harf Duyarlılığı ======
let myVar = 100;
let myvar = 200; // myVar ile farklı değişkendir

// 📌 JavaScript değişken isimlendirme kuralları:
// 1. Harf, _ (alt çizgi) veya $ ile başlamalıdır (rakamla başlayamaz).
// 2. Harf, rakam, _ veya $ içerebilir (boşluk ve özel karakterler kullanılamaz).
// 3. Büyük/küçük harf duyarlıdır (age ve Age farklı değişkenlerdir).
// 4. Anahtar kelimeler (let, var, if, else vb.) değişken adı olamaz.

// 📌 Camel Case nedir?
// - İlk kelime tamamen küçük harfle başlar, sonraki kelimelerin ilk harfi büyük olur.
// - JavaScript'te değişken ve fonksiyon adlarında yaygın olarak kullanılır.

// ====== Konsola Yazdırma ======
console.log("Merhaba " + myName); // Ekrana: Merhaba Ali
console.log("Pi sayısı: " + pi);
console.log(mesaj); // Toplam: 15
console.log("Sonuç: " + sonuc);
console.log("myVar:", myVar, "| myvar:", myvar);