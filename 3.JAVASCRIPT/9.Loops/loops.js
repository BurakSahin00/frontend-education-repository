// JavaScript Döngü Yapıları
// Döngüler, bir işlemi birden fazla kez otomatik olarak gerçekleştirmek için kullanılır.

// 1. For Döngüsü
// Belirli bir sayıda tekrarlamak için kullanılır.
// Sıklıkla dizi veya sayı aralıklarında kullanılır.
for (let i = 0; i < 5; i++) {
	console.log("For Döngüsü: i = " + i);
}
// Açıklama:
// i = 0'dan başlar, i < 5 olduğu sürece döngü devam eder ve her seferinde i bir artar.
// Sonuç: 0, 1, 2, 3, 4 ekrana yazdırılır.

// 2. For/In Döngüsü
// Bir nesnenin (object) tüm özelliklerinde gezinmek için kullanılır.
let person = { ad: "Ali", yas: 25, sehir: "Ankara" };
for (let key in person) {
	console.log(key + ": " + person[key]);
}
// Açıklama:
// for/in döngüsü, nesnenin her bir anahtarını (property) döner ve değerini ekrana yazdırır.
// Sonuç: ad: Ali, yas: 25, sehir: Ankara

// 3. For/Of Döngüsü
// Dizi, string veya diğer iterable (tekrarlanabilir) yapılarda değerlerde gezinmek için kullanılır.
let renkler = ["kırmızı", "mavi", "yeşil"];
for (let renk of renkler) {
	console.log("Renk: " + renk);
}
// Açıklama:
// for/of döngüsü, dizinin her bir elemanını sırayla döner ve ekrana yazdırır.
// Sonuç: Renk: kırmızı, Renk: mavi, Renk: yeşil

// 4. While Döngüsü
// Koşul doğru olduğu sürece döngü devam eder.
let j = 0;
while (j < 5) {
	console.log("While Döngüsü: j = " + j);
	j++;
}
// Açıklama:
// j = 0'dan başlar, j < 5 olduğu sürece döngü devam eder ve her seferinde j bir artar.
// Sonuç: 0, 1, 2, 3, 4 ekrana yazdırılır.

// 5. Do...While Döngüsü
// En az bir kez çalışır, sonra koşulu kontrol eder.
let k = 0;
do {
	console.log("Do...While Döngüsü: k = " + k);
	k++;
} while (k < 5);
// Açıklama:
// Döngü gövdesi en az bir kez çalışır, sonra k < 5 koşulu kontrol edilir.
// Sonuç: 0, 1, 2, 3, 4 ekrana yazdırılır.
