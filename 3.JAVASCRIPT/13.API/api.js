// JavaScript API Nedir?
// API (Application Programming Interface), hazır fonksiyonlar ve nesneler sunan bir arayüzdür.
// Web API'ler tarayıcıda yerleşiktir (DOM, geolocation, fetch, localStorage vb.).
// Harici API'ler ise internet üzerinden veri sağlar (ör. hava durumu, haber, döviz kurları).

// 1. Web API Örneği: Tarayıcıda yerleşik fonksiyonlar
// localStorage ile veri saklama
localStorage.setItem("kullanici", "Burak");
let kullanici = localStorage.getItem("kullanici");
console.log("Kayıtlı kullanıcı:", kullanici);

// 2. Harici API Örneği: fetch ile veri çekme
// fetch, web üzerinden veri almak için kullanılan bir Web API'dir.
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(data => {
		console.log("API'den gelen veri:", data);
	});

// 3. Geolocation API: Kullanıcının konumunu almak
// (Tarayıcı destekliyorsa)
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log("Enlem:", position.coords.latitude);
		console.log("Boylam:", position.coords.longitude);
	});
} else {
	console.log("Geolocation API desteklenmiyor.");
}

// Açıklama:
// - Web API'ler, tarayıcıda hazır olarak bulunur ve JavaScript ile kolayca kullanılabilir.
// - Harici API'ler, başka bir sunucudan veri almak için fetch gibi fonksiyonlarla kullanılır.
// - API'ler sayesinde veri çekme, veri saklama, konum alma gibi işlemler yapılabilir.


// ================= Constraint Validation API (Form Doğrulama) =================
// HTML5 ile gelen bu API, input ve form elemanlarının doğrulama durumunu kontrol etmeye ve hata mesajlarını özelleştirmeye yarar.

// 1. checkValidity() ile geçerlilik kontrolü
let input = document.createElement("input");
input.type = "email";
input.value = "hatalıemail";
if (!input.checkValidity()) {
	console.log("Geçersiz değer: ", input.validationMessage);
}

// 2. setCustomValidity() ile özel hata mesajı
input.setCustomValidity("Lütfen geçerli bir e-posta giriniz!");
if (!input.checkValidity()) {
	console.log("Özel hata mesajı:", input.validationMessage);
}
input.setCustomValidity(""); // Hata mesajını temizler

// 3. validity nesnesi ile detaylı kontrol
console.log("valueMissing:", input.validity.valueMissing); // Zorunlu alan boş mu?
console.log("typeMismatch:", input.validity.typeMismatch); // Tür (ör. email) hatası var mı?

// 4. Form submit engelleme örneği
// (Gerçek formda kullanmak için aşağıdaki kodu bir submit eventine ekleyebilirsiniz)
function validateMyForm(event) {
	let formInput = document.getElementById("formInput");
	if (!formInput.checkValidity()) {
		formInput.setCustomValidity("Bu alanı doldurmak zorundasınız!");
		alert(formInput.validationMessage);
		event.preventDefault(); // Formun gönderilmesini engeller
	} else {
		formInput.setCustomValidity("");
	}
}

// Açıklama:
// - checkValidity() ile input veya formun geçerli olup olmadığı kontrol edilir.
// - setCustomValidity() ile kendi hata mesajınızı tanımlayabilirsiniz.
// - validity nesnesi ile hangi doğrulama hatasının oluştuğunu görebilirsiniz.
// - Formun submit olmasını engellemek için event.preventDefault() kullanılır.


// ================= Web Storage API (localStorage & sessionStorage) =================
// Web Storage API, tarayıcıda veri saklamak için kullanılır. İki türü vardır:
// - localStorage: Veriler kalıcıdır, tarayıcı kapansa bile silinmez.
// - sessionStorage: Veriler geçicidir, sekme veya pencere kapandığında silinir.

// 1. localStorage ile veri saklama
localStorage.setItem("ad", "Burak"); // Anahtar-değer olarak veri ekler
let ad = localStorage.getItem("ad"); // Veriyi okur
console.log("localStorage'dan ad:", ad);

// 2. localStorage'dan veri silme
localStorage.removeItem("ad"); // Belirli bir anahtarı siler
localStorage.clear(); // Tüm verileri siler

// 3. sessionStorage ile veri saklama
sessionStorage.setItem("oturum", "aktif");
let oturum = sessionStorage.getItem("oturum");
console.log("sessionStorage'dan oturum:", oturum);

// 4. sessionStorage'dan veri silme
sessionStorage.removeItem("oturum");
sessionStorage.clear();

// 5. localStorage ile nesne saklama (JSON ile)
let kullaniciObj = { ad: "Burak", yas: 30 };
localStorage.setItem("kullaniciObj", JSON.stringify(kullaniciObj));
let obj = JSON.parse(localStorage.getItem("kullaniciObj"));
console.log("localStorage'dan nesne:", obj);

// Açıklama:
// - localStorage ve sessionStorage ile anahtar-değer şeklinde veri saklanabilir.
// - localStorage verileri kalıcıdır, sessionStorage ise geçicidir.
// - Sadece string veri saklanabilir, nesneler için JSON.stringify ve JSON.parse kullanılır.


// ================= Fetch API =================
// Fetch API, web üzerinden veri almak veya göndermek için kullanılır. Modern tarayıcılarda yerleşiktir.

// 1. Temel fetch ile veri çekme
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.text()) // Yanıtı metin olarak alır
	.then(data => {
		console.log("Fetch ile gelen metin:", data);
	});

// 2. JSON veri çekme
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json()) // Yanıtı JSON olarak alır
	.then(data => {
		console.log("Fetch ile gelen JSON:", data);
	});

// 3. Hata yakalama (catch)
fetch('https://jsonplaceholder.typicode.com/yanlisadres')
	.then(response => {
		if (!response.ok) {
			throw new Error('Ağ hatası veya veri bulunamadı!');
		}
		return response.json();
	})
	.then(data => {
		console.log("Hatalı fetch sonucu:", data);
	})
	.catch(error => {
		console.log("Fetch hatası:", error.message);
	});

// 4. POST ile veri gönderme
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({ title: 'Deneme', body: 'Merhaba', userId: 1 })
})
	.then(response => response.json())
	.then(data => {
		console.log("POST ile gönderilen verinin cevabı:", data);
	});

// Açıklama:
// - fetch ile veri çekmek için URL yeterlidir, yanıtı .text() veya .json() ile alabilirsiniz.
// - .catch ile hata yakalanabilir.
// - POST, PUT, DELETE gibi HTTP metodları ile veri gönderebilir veya silebilirsiniz.


// ================= Fetch API - Tüm HTTP Metodları ile Örnekler =================
// GET: Veri çekmek için kullanılır
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(data => {
		console.log("GET ile veri çekildi:", data);
	});

// POST: Yeni veri eklemek için kullanılır
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({ title: 'Yeni Başlık', body: 'Yeni içerik', userId: 1 })
})
	.then(response => response.json())
	.then(data => {
		console.log("POST ile veri eklendi:", data);
	});

// PUT: Var olan veriyi tamamen güncellemek için kullanılır
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({ id: 1, title: 'Güncellenmiş Başlık', body: 'Güncellenmiş içerik', userId: 1 })
})
	.then(response => response.json())
	.then(data => {
		console.log("PUT ile veri güncellendi:", data);
	});

// PATCH: Var olan verinin bir kısmını güncellemek için kullanılır
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({ title: 'Sadece başlık güncellendi' })
})
	.then(response => response.json())
	.then(data => {
		console.log("PATCH ile veri kısmen güncellendi:", data);
	});

// DELETE: Veri silmek için kullanılır
fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'DELETE'
})
	.then(response => {
		if (response.ok) {
			console.log("DELETE ile veri silindi.");
		} else {
			console.log("DELETE işlemi başarısız oldu.");
		}
	});

// Açıklama:
// - GET: Sunucudan veri almak için
// - POST: Sunucuya yeni veri eklemek için
// - PUT: Var olan veriyi tamamen değiştirmek için
// - PATCH: Var olan verinin bir kısmını değiştirmek için
// - DELETE: Sunucudan veri silmek için
