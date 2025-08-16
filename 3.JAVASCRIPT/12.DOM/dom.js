// JavaScript HTML DOM - Sadeleştirilmiş Genel Bilgiler ve Temel Örnekler

// 1. Element Seçimi
let baslik = document.getElementById("myTitle");
let kutular = document.getElementsByClassName("kutu");
let paragraflar = document.getElementsByTagName("p");
let ilkDiv = document.querySelector("div");
let tumDivler = document.querySelectorAll("div");

// 2. İçerik ve Özellik Değiştirme
baslik.innerHTML = "Yeni Başlık";
baslik.setAttribute("class", "vurgulu");
baslik.style.color = "red";

// 3. Element Ekleme ve Silme
let yeniParagraf = document.createElement("p");
yeniParagraf.textContent = "Yeni paragraf eklendi!";
document.body.appendChild(yeniParagraf);
document.body.removeChild(yeniParagraf);

// 4. Olaylar
baslik.onclick = function() {
	alert("Başlığa tıklandı!");
};

// 5. Navigasyon ve Node
let parentBaslik = baslik.parentNode;
let childrenDiv = ilkDiv.children;
let firstChildDiv = ilkDiv.firstChild;
let lastChildDiv = ilkDiv.lastChild;

// 6. Koleksiyonlar ve NodeList
nodelist = document.querySelectorAll("p"); // NodeList
let pCollectionHTML = document.getElementsByTagName("p"); // HTMLCollection
nodelist.forEach(function(item) {
	item.style.color = "purple";
});

// 7. Animasyon
function hareketEt() {
	let elem = document.getElementById("animKutu");
	let pos = 0;
	let id = setInterval(function() {
		if (pos >= 350) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.left = pos + "px";
		}
	}, 10);
}

// 8. Form Doğrulama
function validateForm() {
	let x = document.forms["myForm"]["ad"].value;
	if (x == "") {
		alert("Ad alanı boş bırakılamaz!");
		return false;
	}
}

// Açıklama:
// Bu dosyada DOM'un temel konuları sade ve kısa örneklerle gösterilmiştir. Element seçimi, içerik/stil değiştirme, ekleme/silme, olaylar, navigasyon, koleksiyonlar, animasyon ve form doğrulama konuları özetlenmiştir.


// HTML DOM ile Element İçeriği ve Özelliklerini Değiştirme

// 1. innerHTML
// Elementin HTML içeriğini okuma ve değiştirme
document.getElementById("myDiv").innerHTML = "<b>Yeni içerik</b>";

// 2. textContent
// Sadece metin içeriğini okuma ve değiştirme
document.getElementById("myDiv").textContent = "Sadece metin";

// 3. value
// input, textarea gibi form elemanlarının değerini okuma ve değiştirme
document.getElementById("myInput").value = "Yeni değer";

// 4. src
// img etiketinin kaynak adresini değiştirme
document.getElementById("myImg").src = "yeni-resim.jpg";

// 5. href
// a etiketinin bağlantı adresini değiştirme
document.getElementById("myLink").href = "https://www.example.com";

// 6. style
// Elementin stilini değiştirme
document.getElementById("myDiv").style.color = "blue";
document.getElementById("myDiv").style.backgroundColor = "yellow";

// 7. attribute
// setAttribute ile herhangi bir attribute'u değiştirme
document.getElementById("myDiv").setAttribute("class", "vurgulu");
// getAttribute ile attribute'u okuma
let sinif = document.getElementById("myDiv").getAttribute("class");

// Açıklama:
// HTML DOM ile elementlerin içeriği, metni, değeri, bağlantısı, resmi, stili ve attribute'ları kolayca okunabilir ve değiştirilebilir.


// Form Validation (Doğrulama)

// 1. Basit Form Doğrulama
// Bir formun boş olup olmadığını kontrol etme
function validateForm() {
	let x = document.forms["myForm"]["ad"].value;
	if (x == "") {
		alert("Ad alanı boş bırakılamaz!");
		return false;
	}
}

// 2. Sayı Doğrulama
function validateNumber() {
	let y = document.getElementById("yasInput").value;
	if (isNaN(y) || y < 1 || y > 100) {
		alert("Lütfen 1 ile 100 arasında bir sayı giriniz!");
		return false;
	}
}

// 3. Email Doğrulama
function validateEmail() {
	let email = document.getElementById("emailInput").value;
	let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!pattern.test(email)) {
		alert("Geçerli bir e-posta adresi giriniz!");
		return false;
	}
}

// Açıklama:
// Form doğrulama ile kullanıcıdan alınan verilerin geçerli olup olmadığı kontrol edilir. Boş alan, sayı aralığı, e-posta formatı gibi kontroller yapılabilir.


// HTML DOM ile CSS Stillerini Okuma ve Değiştirme

// 1. Stil Okuma
// Bir elementin mevcut stilini okumak için
let renk = document.getElementById("myDiv").style.color;
console.log("Div'in rengi:", renk);

// 2. Stil Değiştirme
// Bir elementin stilini değiştirmek için
document.getElementById("myDiv").style.color = "blue";
document.getElementById("myDiv").style.backgroundColor = "yellow";
document.getElementById("myDiv").style.fontSize = "20px";

// 3. Birden Fazla Stil Değiştirme
let kutu = document.getElementById("kutu1");
kutu.style.cssText = "border: 2px solid red; padding: 10px; background: #eee;";

// 4. getComputedStyle
// Elementin tüm hesaplanmış stilini almak için
let computed = window.getComputedStyle(document.getElementById("myDiv"));
console.log("Hesaplanmış arka plan rengi:", computed.backgroundColor);

// Açıklama:
// HTML DOM ile elementlerin stilleri okunabilir ve değiştirilebilir. style özelliği ile doğrudan, cssText ile topluca, getComputedStyle ile tüm stil bilgisi alınabilir.


// HTML DOM ile Animasyon (Hareket)

// 1. Basit Animasyon: Bir kutuyu sağa hareket ettirme
function hareketEt() {
	let elem = document.getElementById("animKutu");
	let pos = 0;
	let id = setInterval(frame, 10);
	function frame() {
		if (pos >= 350) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.left = pos + "px";
		}
	}
}

// 2. Animasyon başlatmak için bir butona tıklanabilir
// <button onclick="hareketEt()">Animasyonu Başlat</button>
// <div id="animKutu" style="position:absolute;width:100px;height:100px;background:red;"></div>

// Açıklama:
// setInterval ile belirli aralıklarla stil değiştirerek animasyon yapılabilir. style.left/top ile konum değiştirilir.


// HTML DOM Events (Olaylar)

// 1. Olay Türleri
// onclick, ondblclick, onmouseover, onmouseout, onkeydown, onkeyup, onchange, onsubmit, vb.

// 2. Olay Ekleme
// HTML'de doğrudan:
// <button onclick="alert('Tıklandı!')">Tıkla</button>

// JavaScript ile:
let btn = document.getElementById("myBtn");
btn.onclick = function() {
	alert("Butona tıklandı!");
};

// addEventListener ile:

let count = 0;

btn.addEventListener("mouseover", function() {
    (count % 2 === 0) ? btn.style.background = "yellow" : btn.style.background = "orange";
	count++;
});

// 3. Olay Nesnesi
btn.addEventListener("click", function(event) {
	console.log("Olay tipi:", event.type);
	console.log("Tıklanan element:", event.target);
});

// 4. Olayı Kaldırma
function tiklamaFonksiyonu() {
	alert("Butona bir kez tıklandı!");
}
btn.addEventListener("click", tiklamaFonksiyonu);
btn.removeEventListener("click", tiklamaFonksiyonu);

// Açıklama:
// DOM olayları ile kullanıcı etkileşimleri (tıklama, klavye, fare, form) yakalanabilir ve işlenebilir. addEventListener ile birden fazla olay eklenebilir ve kaldırılabilir.


// addEventListener

// 1. Temel Kullanım
let kutu2 = document.getElementById("kutu2");
kutu2.addEventListener("click", function() {
	kutu2.style.background = "green";
	alert("Kutuya tıklandı!");
});

// 2. Birden Fazla Olay Eklemek
kutu2.addEventListener("mouseover", function() {
	kutu2.style.border = "2px solid blue";
});
kutu2.addEventListener("mouseout", function() {
	kutu2.style.border = "";
});

// 3. Olayı Kaldırmak
function kutuTikla() {
	alert("Kutuya bir kez tıklandı!");
}
kutu2.addEventListener("click", kutuTikla);
kutu2.removeEventListener("click", kutuTikla);

// 4. Olay Nesnesi
kutu2.addEventListener("click", function(event) {
	console.log("Olay tipi:", event.type);
	console.log("Tıklanan element:", event.target);
});

// Açıklama:
// addEventListener ile bir elemente birden fazla olay eklenebilir, kaldırılabilir ve olay nesnesi ile detaylara erişilebilir.


// HTML DOM Navigation (Navigasyon)

// 1. parentNode
// Bir elementin üst (parent) düğümünü verir
let paragrafEl = document.getElementById("myP");
let parentParagraf = paragrafEl.parentNode;
console.log("Paragrafın üst düğümü:", parentParagraf);

// 2. childNodes
// Bir elementin tüm alt (child) düğümlerini verir
let divEl = document.getElementById("myDiv");
let childrenDivEl = divEl.childNodes;
console.log("Div'in alt düğümleri:", childrenDivEl);

// 3. firstChild & lastChild
// İlk ve son alt düğümü verir
let firstChildDivEl = divEl.firstChild;
let lastChildDivEl = divEl.lastChild;
console.log("İlk alt düğüm:", firstChildDivEl);
console.log("Son alt düğüm:", lastChildDivEl);

// 4. nextSibling & previousSibling
// Sonraki ve önceki kardeş düğümü verir
let nextSiblingParagraf = paragrafEl.nextSibling;
let prevSiblingParagraf = paragrafEl.previousSibling;
console.log("Sonraki kardeş:", nextSiblingParagraf);
console.log("Önceki kardeş:", prevSiblingParagraf);

// 5. children
// Sadece element (nodeType 1) olan alt düğümleri verir
let divChildrenEl = divEl.children;
console.log("Div'in element çocukları:", divChildrenEl);

// Açıklama:
// DOM navigasyon metotları ile bir elementin üst, alt, kardeş ve çocuk düğümlerine kolayca erişilebilir.


// HTML DOM Nodes (Düğümler)

// 1. Node Türleri
// Element Node: HTML elementleri (nodeType 1)
// Text Node: Metin içerikleri (nodeType 3)
// Comment Node: Yorumlar (nodeType 8)

let divNodeEl = document.getElementById("myDiv");
console.log("Node Type:", divNodeEl.nodeType); // 1

let textNodeEl = divNodeEl.firstChild;
console.log("Text Node Type:", textNodeEl.nodeType); // 3

// 2. NodeName
console.log("divNode nodeName:", divNodeEl.nodeName); // DIV
console.log("textNode nodeName:", textNodeEl.nodeName); // #text

// 3. NodeValue
console.log("textNode nodeValue:", textNodeEl.nodeValue); // Metin içeriği

// 4. Node Oluşturma
let yeniTextNode = document.createTextNode("Yeni metin düğümü");
divNodeEl.appendChild(yeniTextNode);

// 5. Node Silme
divNodeEl.removeChild(yeniTextNode);

// Açıklama:
// DOM'da her şey bir node'dur. Element, metin, yorum gibi farklı node türleri vardır. nodeType, nodeName, nodeValue ile node'lar hakkında bilgi alınabilir.


// HTML DOM Collections (Koleksiyonlar)

// 1. HTMLCollection
// getElementsByTagName, getElementsByClassName gibi metotlar HTMLCollection döndürür
let pCollectionExample = document.getElementsByTagName("p");
console.log("HTMLCollection örneği:", pCollectionExample);

// 2. NodeList
// querySelectorAll gibi metotlar NodeList döndürür
let divList = document.querySelectorAll("div");
console.log("NodeList örneği:", divList);

// 3. Koleksiyonlarda Dolaşmak
// HTMLCollection ve NodeList üzerinde for ile dolaşılabilir
for (let i = 0; i < pCollection.length; i++) {
	console.log("HTMLCollection p:", pCollection[i]);
}

divList.forEach(function(div) {
	console.log("NodeList div:", div);
});

// 4. Canlı ve Statik Koleksiyonlar
// HTMLCollection canlıdır (sayfa değişince otomatik güncellenir)
// NodeList genellikle statiktir (değişmez)

// Açıklama:
// DOM koleksiyonları, birden fazla elementi bir arada tutar. HTMLCollection ve NodeList ile elementler üzerinde kolayca dolaşılabilir.


// HTML DOM NodeList

// 1. NodeList Nedir?
// querySelectorAll gibi metotlar NodeList döndürür
let nodelistExample = document.querySelectorAll("p");
console.log("NodeList örneği:", nodelistExample);

// 2. NodeList ile Dolaşmak
// forEach ile tüm elemanlarda gezilebilir
nodelist.forEach(function(item) {
	item.style.color = "purple";
	console.log("NodeList elemanı:", item);
});

// 3. length Özelliği
console.log("NodeList uzunluğu:", nodelist.length);

// 4. Canlı ve Statik NodeList
// querySelectorAll ile alınan NodeList statiktir (değişmez)
// getElementsByClassName ile alınan HTMLCollection canlıdır (değişir)

// Açıklama:
// NodeList, birden fazla elementi bir arada tutar ve forEach ile kolayca dolaşılabilir. Statik olduğu için sayfa değişse bile otomatik güncellenmez.
