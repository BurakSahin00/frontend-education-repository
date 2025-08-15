// JavaScript Eventler (Olaylar) Konu Anlatımı ve Örnekler

// 1. Click Event (Tıklama)
// Bir elemente tıklandığında tetiklenir.
document.getElementById("btnClick").onclick = function() {
  console.log("Butona tıklandı!");
};

// 2. Mouseover Event (Üzerine Gelme)
// Bir elementin üzerine gelindiğinde tetiklenir.
document.getElementById("divHover").onmouseover = function() {
  console.log("Div'in üzerine gelindi!");
};

// 3. Change Event (Değişiklik)
// Bir inputun değeri değiştiğinde tetiklenir.
document.getElementById("inputChange").onchange = function() {
  console.log("Input değişti:", this.value);
};

// 4. Keydown Event (Tuşa Basma)
// Bir inputta herhangi bir tuşa basıldığında tetiklenir.
document.getElementById("inputKey").onkeydown = function(e) {
  console.log("Basılan tuş:", e.key);
};

// 5. Load Event (Sayfa Yüklendiğinde)
// Sayfa tamamen yüklendiğinde tetiklenir.
window.onload = function() {
  console.log("Sayfa yüklendi!");
};

// Diğer yaygın eventler:
// dblclick: Çift tıklama
// focus: Bir inputa odaklanma
// blur: Odak kaybı
// submit: Form gönderme
// resize: Pencere boyutu değişince
// scroll: Sayfa kaydırılınca
