// ARİTMETİK İŞLEMLER
let a = 10;
let b = 5;

// Toplama
console.log("a + b:", a + b);

// Çıkarma
console.log("a - b:", a - b);

// Çarpma
console.log("a * b:", a * b);

// Bölme
console.log("a / b:", a / b);

// Mod alma (kalanı bulma)
console.log("a % b:", a % b);

// Üs alma (a'nın b. kuvveti)
console.log("a ** b:", a ** b);

// Bir artırma (a = a + 1)
a++;
console.log("a++:", a);

// Bir azaltma (a = a - 1)
a--;
console.log("a--:", a);

// İşlem önceliği: önce çarpma, sonra toplama
let x = a * b + 10;
console.log("a * b + 10:", x); // Çarpma önce, sonra toplama.

// İşlem önceliği: önce bölme, sonra çarpma
let y = a / b * 10;
console.log("a / b * 10:", y); // Bölme önce, sonra çarpma.

// ATAMA İŞLEMLERİ

let z = 50;

// z'yi 10 artır (z = z + 10)
z += 10;
console.log("z += 10:", z);

// z'den 5 çıkar (z = z - 5)
z -= 5;
console.log("z -= 5:", z);

// z'yi 2 ile çarp (z = z * 2)
z *= 2;
console.log("z *= 2:", z);

// z'yi 4'e böl (z = z / 4)
z /= 4;
console.log("z /= 4:", z);

// z'nin karesini al (z = z ** 2)
z **= 2;
console.log("z **= 2:", z);

// z'yi 3 ile bölümünden kalanı bul (z = z % 3)
z %= 3;
console.log("z %= 3:", z);

// LOGICAL ASSIGNMENT OPERATÖRLERİ

// &&= (ve ile atama): Sol taraf true ise sağ taraf atanır
let isActive = true;
isActive &&= false; // isActive true olduğu için false atanır
console.log("isActive &&= false:", isActive); // false

let isReady = false;
isReady &&= true; // isReady false olduğu için değişmez
console.log("isReady &&= true:", isReady); // false

// ||= (veya ile atama): Sol taraf false ise sağ taraf atanır
let myname = "";
myname ||= "Anonim"; // myname boş olduğu için "Anonim" atanır
console.log("myname ||= 'Anonim':", myname); // "Anonim"

let user = "Burak";
user ||= "Anonim"; // user dolu olduğu için değişmez
console.log("user ||= 'Anonim':", user); // "Burak"

// ??= (nullish ile atama): Sol taraf null veya undefined ise sağ taraf atanır
let age;
age ??= 18; // age undefined olduğu için 18 atanır
console.log("age ??= 18:", age); // 18

let score = null;
score ??= 100; // score null olduğu için 100 atanır
console.log("score ??= 100:", score); // 100

let points = 50;
points ??= 100; // points tanımlı olduğu için değişmez
console.log("points ??= 100:", points); // 50

// TERNARY OPERATÖRÜ

// Koşullu ifade: (koşul ? doğruysa : yanlışsa)
let not = 75;
let durum = not >= 50 ? "Geçti" : "Kaldı";
console.log("Ternary ile durum:", durum); // "Geçti"

let yas = 17;
let yetiskinMi = yas >= 18 ? "Evet" : "Hayır";
console.log("Ternary ile yetişkin mi:", yetiskinMi); // "Hayır"

// SPREAD OPERATÖRÜ (...)

// Dizi kopyalama ve birleştirme
const dizi1 = [1, 2, 3];
const dizi2 = [4, 5];
const birlesik = [...dizi1, ...dizi2];
console.log("Spread ile birleştirme:", birlesik); // [1, 2, 3, 4, 5]

// Diziye eleman ekleme
const yeniDizi = [0, ...dizi1, 4];
console.log("Spread ile yeni dizi:", yeniDizi); // [0, 1, 2, 3, 4]

// Obje kopyalama ve ekleme
const kisi = { ad: "Burak", yas: 30 };
const ekBilgi = { sehir: "İstanbul" };
const yeniKisi = { ...kisi, ...ekBilgi };
console.log("Spread ile yeni obje:", yeniKisi); // { ad: "Burak", yas: 30, sehir: "İstanbul" }

