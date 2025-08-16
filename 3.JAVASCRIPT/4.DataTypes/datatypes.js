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
// JavaScript'te tüm sayılar (tam, ondalık, negatif, exponential) Number tipindedir.
let yas = 25;
let pi = 3.14;
console.log("Number örnekleri:", yas, pi);

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
let num4 = 123e5; // 12300000 == 123 * 10^5
let num5 = 123e-5; // 0.00123 == 123 * 10^-5
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

// String Metodları
// JavaScript'te stringler üzerinde işlem yapmak için birçok metod bulunur.

let metin = " JavaScript öğreniyorum! ";

// length: String uzunluğunu verir
console.log("Uzunluk:", metin.length); // 24

// toUpperCase: Tüm harfleri büyük yapar
console.log("Büyük harf:", metin.toUpperCase()); // " JAVASCRIPT ÖĞRENİYORUM! "

// toLowerCase: Tüm harfleri küçük yapar
console.log("Küçük harf:", metin.toLowerCase()); // " javascript öğreniyorum! "

// slice: Belirli bir aralıktaki karakterleri alır
console.log("slice(1, 11):", metin.slice(1, 11)); // "JavaScript"

// substring: slice'a benzer, negatif indeksleri desteklemez
console.log("substring(1, 11):", metin.substring(1, 11)); // "JavaScript"

// replace: Metin içinde bir kısmı değiştirir
console.log("replace:", metin.replace("öğreniyorum", "seviyorum")); // " JavaScript seviyorum! "

// includes: Belirli bir alt metni içerip içermediğini kontrol eder
console.log("includes 'Script':", metin.includes("Script")); // true

// indexOf: Alt metnin ilk geçtiği indeksi verir
console.log("indexOf 'öğreniyorum':", metin.indexOf("öğreniyorum")); // 12

// split: String'i diziye çevirir
let kelimeler = metin.split(" ");
console.log("split ile dizi:", kelimeler); // ["", "JavaScript", "öğreniyorum!", ""]

// trim: Baş ve sondaki boşlukları kaldırır
console.log("trim:", metin.trim()); // "JavaScript öğreniyorum!"

// concat: Stringleri birleştirir
let s1 = "Merhaba";
let s2 = "Dünya";
console.log("concat:", s1.concat(" ", s2)); // "Merhaba Dünya"

// Açıklama:
// String metodları ile metin üzerinde arama, değiştirme, bölme, birleştirme gibi işlemler kolayca yapılabilir.

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

// Array (Dizi) Metodları
// JavaScript'te diziler üzerinde işlem yapmak için birçok metod bulunur.

let sayilar = [1, 2, 3, 4, 5];

// push: Diziye sona eleman ekler
sayilar.push(6);
console.log("push ile ekleme:", sayilar); // [1,2,3,4,5,6]

// pop: Dizinin son elemanını çıkarır
let sonEleman = sayilar.pop();
console.log("pop ile çıkarılan:", sonEleman, "Sonrası:", sayilar); // 6, [1,2,3,4,5]

// shift: Dizinin ilk elemanını çıkarır
let ilkEleman = sayilar.shift();
console.log("shift ile çıkarılan:", ilkEleman, "Sonrası:", sayilar); // 1, [2,3,4,5]

// unshift: Diziye başa eleman ekler
sayilar.unshift(0);
console.log("unshift ile başa ekleme:", sayilar); // [0,2,3,4,5]

// concat: İki diziyi birleştirir
let yeniDizi = sayilar.concat([7,8]);
console.log("concat ile birleştirme:", yeniDizi); // [0,2,3,4,5,7,8]

// join: Diziyi stringe çevirir
console.log("join ile string:", sayilar.join("-")); // "0-2-3-4-5"

// slice: Dizinin bir bölümünü alır
console.log("slice(1,3):", sayilar.slice(1,3)); // [2,3]

// splice: Diziye eleman ekler/çıkarır
sayilar.splice(2, 1, 99); // 2. indeksten 1 eleman çıkar, yerine 99 ekler
console.log("splice ile güncelleme:", sayilar); // [0,2,99,4,5]

// indexOf: Elemanın indeksini bulur
console.log("indexOf 99:", sayilar.indexOf(99)); // 2

// includes: Elemanın olup olmadığını kontrol eder
console.log("includes 4:", sayilar.includes(4)); // true

// reverse: Diziyi ters çevirir
sayilar.reverse();
console.log("reverse ile ters çevirme:", sayilar); // [5,4,99,2,0]

// sort: Diziyi sıralar
let karisik = [3,1,4,2];
karisik.sort();
console.log("sort ile sıralama:", karisik); // [1,2,3,4]

// map: Her eleman için işlem yapar, yeni dizi döner
let kareler = sayilar.map(x => x * x);
console.log("map ile kareler:", kareler); // [25,16,9801,4,0]

// filter: Şarta uyan elemanları döner
let ciftler = sayilar.filter(x => x % 2 === 0);
console.log("filter ile çiftler:", ciftler); // [4, 9801, 0]

// find: Şarta uyan ilk elemanı döner
let ilkCift = sayilar.find(x => x % 2 === 0);
console.log("find ile ilk çift:", ilkCift); // 4

// forEach: Her eleman için işlem yapar
sayilar.forEach(x => console.log("forEach ile eleman:", x));

// Açıklama:
// Array metodları ile dizi üzerinde ekleme, çıkarma, arama, sıralama, dönüştürme gibi işlemler kolayca yapılabilir.


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

// instanceof Operatörü Örnekleri
// instanceof, bir nesnenin belirli bir veri tipine (constructor'a) ait olup olmadığını kontrol eder.

let arr = [];
let obj = {};
let tarih = new Date();
let fonksiyon = function() {};

console.log("arr instanceof Array:", arr instanceof Array); // true
console.log("obj instanceof Object:", obj instanceof Object); // true
console.log("tarih instanceof Date:", tarih instanceof Date); // true
console.log("fonksiyon instanceof Function:", fonksiyon instanceof Function); // true
console.log("arr instanceof Object:", arr instanceof Object); // true (Array, Object'ın alt türüdür)

// Açıklama:
// instanceof ile bir değişkenin hangi türden (constructor'dan) oluşturulduğu kontrol edilir.
// Özellikle karmaşık veri tiplerinde ve nesne tabanlı programlamada faydalıdır.

// toString() ve Type Conversion (Tür Dönüşümü) Örnekleri

// 1. toString() Metodu
// Bir değeri string'e (metne) dönüştürmek için kullanılır.
let sayi = 123;
let metinSayi = sayi.toString();
console.log("toString ile sayı string oldu:", metinSayi, "Türü:", typeof metinSayi); // "123", string

let dizi = [1, 2, 3];
let diziStr = dizi.toString();
console.log("toString ile dizi string oldu:", diziStr, "Türü:", typeof diziStr); // "1,2,3", string

let tarihObj = new Date();
console.log("toString ile tarih:", tarihObj.toString()); // Tarihi string olarak gösterir

// 2. Type Conversion (Tür Dönüşümü)
// Bir veri tipini başka bir tipe dönüştürmek için kullanılır.

// String'den Number'a
let strNum = "456";
let numDeger = Number(strNum);
console.log("Number ile string'den sayıya:", numDeger, typeof numDeger); // 456, number

// Number'dan String'e
let numDeger2 = 789;
let strDeger2 = String(numDeger2);
console.log("String ile sayıdan string'e:", strDeger2, typeof strDeger2); // "789", string

// Boolean'dan Number'a
let boolDeger = true;
let numBool = Number(boolDeger);
console.log("Boolean'dan Number'a:", numBool); // true -> 1

// Number'dan Boolean'a
let numBool2 = Boolean(0);
console.log("Number'dan Boolean'a:", numBool2); // 0 -> false

// String'den Boolean'a
let strBool = Boolean("");
console.log("Boş string'den Boolean'a:", strBool); // "" -> false

// Açıklama:
// JavaScript'te tür dönüşümleri Number(), String(), Boolean() gibi fonksiyonlarla yapılabilir.
// Otomatik (implicit) ve manuel (explicit) dönüşümler mümkündür.