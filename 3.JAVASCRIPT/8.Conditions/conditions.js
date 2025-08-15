// JavaScript Koşul Yapıları

// 1. If-Else
// Belirli bir koşula göre kodun farklı bölümlerinin çalışmasını sağlar.
let saat = 15;
if (saat < 12) {
	console.log("Günaydın!");
} else if (saat < 18) {
	console.log("İyi günler!");
} else {
	console.log("İyi akşamlar!");
}

// 2. If ile Boolean kontrolü
let isOpen = true;
if (isOpen) {
	console.log("Açık!");
} else {
	console.log("Kapalı!");
}

// 3. Ternary ile kısa if-else
let yas = 20;
let mesaj = (yas >= 18) ? "Yetişkin" : "Çocuk";
console.log(mesaj);

// 4. Switch
// Bir değişkenin birden fazla olası değeri için farklı kodlar çalıştırmak için kullanılır.
let gun = "Çarşamba";
switch (gun) {
	case "Pazartesi":
		console.log("Haftanın ilk günü");
		break;
	case "Çarşamba":
		console.log("Haftanın ortası");
		break;
	case "Cuma":
		console.log("Hafta sonu yaklaşıyor");
		break;
	default:
		console.log("Sıradan bir gün");
}

// 5. Switch ile sayı örneği
let sayi = 2;
switch (sayi) {
	case 1:
		console.log("Bir");
		break;
	case 2:
		console.log("İki");
		break;
	case 3:
		console.log("Üç");
		break;
	default:
		console.log("Bilinmeyen sayı");
}

// 6. Switch'te strict (===) karşılaştırma
// Switch yapısı, case değerlerini === ile (hem değer hem tip) karşılaştırır.
let deger = "2";
switch (deger) {
	case 2:
		console.log("Number 2 ile eşleşti");
		break;
	case "2":
		console.log("String '2' ile eşleşti");
		break;
	default:
		console.log("Hiçbiri eşleşmedi");
}

// 7. Common Code Blocks (Ortak Kod Blokları)
// Birden fazla case için aynı kodu çalıştırmak istediğimizde, case'leri arka arkaya yazıp break eklemeden ortak kod bloğu oluşturabiliriz.
// Bu, kod tekrarını önler ve okunabilirliği artırır.

let renk = "kırmızı";
switch (renk) {
	case "kırmızı":
	case "mavi":
	case "yeşil":
		console.log("Bir ana renk seçtiniz!"); // Ortak kod bloğu
		break;
	case "sarı":
		console.log("Sarı seçildi!");
		break;
	default:
		console.log("Bilinmeyen renk");
}
// Açıklama:
// "kırmızı", "mavi" veya "yeşil" seçilirse, ortak kod bloğu çalışır ve "Bir ana renk seçtiniz!" yazdırılır.
// Sadece "sarı" seçilirse farklı bir mesaj gösterilir.
