
// JavaScript Fonksiyonlar: Konu Anlatımı ve Örnekler

// 1. Fonksiyon Nedir?
// Fonksiyonlar, belirli bir işlemi gerçekleştiren kod bloklarıdır. Tekrar kullanılabilir ve parametre alabilirler.

// 2. Fonksiyon Tanımlama
function selamVer() {
	console.log("Merhaba!");
}
selamVer(); // Fonksiyonu çağırma

// 3. Parametreli Fonksiyon
function topla(a, b) {
	return a + b;
}
console.log("Toplam:", topla(3, 5)); // 8

// 4. Varsayılan Parametre
function carp(x, y = 2) {
	return x * y;
}
console.log("Varsayılan parametre ile çarpma:", carp(4)); // 8

// 5. Fonksiyon İfadesi (Function Expression)
const cikarma = function(a, b) {
	return a - b;
};
console.log("Çıkarma:", cikarma(10, 3)); // 7

// 6. Arrow Function (Ok Fonksiyonu)
const bolme = (a, b) => a / b;
console.log("Bölme:", bolme(10, 2)); // 5

// 7. İç İçe Fonksiyonlar (Nested Functions)
function disFonksiyon() {
	function icFonksiyon() {
		return "İç fonksiyon çalıştı";
	}
	return icFonksiyon();
}
console.log(disFonksiyon());

// 8. Callback Fonksiyon
function islemYap(a, b, callback) {
	return callback(a, b);
}
console.log("Callback ile çarpma:", islemYap(3, 4, (x, y) => x * y)); // 12

// 9. Recursive (Özyinelemeli) Fonksiyon
function faktoriyel(n) {
	if (n <= 1) return 1;
	return n * faktoriyel(n - 1);
}
console.log("Faktoriyel:", faktoriyel(5)); // 120

// 10. Fonksiyonlarda Scope (Kapsam)
let globalDegisken = "Global";
function kapsamiGoster() {
	let lokalDegisken = "Lokal";
	console.log(globalDegisken); // Global
	console.log(lokalDegisken);  // Lokal
}
kapsamiGoster();
// console.log(lokalDegisken); // Hata: lokalDegisken tanımsız
