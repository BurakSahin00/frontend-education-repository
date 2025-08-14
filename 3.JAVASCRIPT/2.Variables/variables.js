// 1️⃣ var: Eski yöntem, function scope'a sahiptir, tekrar tanımlanabilir
var name = "Ahmet";
var name = "Mehmet"; // ✅ Tekrar tanımlanabilir
console.log("var ile:", name); // Mehmet

// 2️⃣ let: Modern yöntem, block scope'a sahiptir, tekrar tanımlanamaz ama değeri değiştirilebilir
let age = 25;
// let age = 30; // ❌ Tekrar tanımlanamaz (SyntaxError)
age = 30; // ✅ Değeri değiştirilebilir
console.log("let ile:", age); // 30

// 3️⃣ const: Sabit değerler için, block scope'a sahiptir, tekrar tanımlanamaz ve değeri değiştirilemez
const PI = 3.14159;
// PI = 3.14; // ❌ Değeri değiştirilemez (TypeError)
console.log("const ile:", PI); // 3.14159

// 4️⃣ Scope farkı örneği:
{
    var cityVar = "İstanbul"; // block dışından erişilebilir (var)
    let cityLet = "Ankara";   // block dışından erişilemez
    const cityConst = "İzmir"; // block dışından erişilemez
}

console.log(cityVar); // ✅ İstanbul
// console.log(cityLet);  // ❌ Hata: cityLet is not defined
// console.log(cityConst); // ❌ Hata: cityConst is not defined


//Blok kapsamı (block scope)
{
  let blockVar = "Ben sadece bu blok içindeyim";
  console.log("Blok içinden:", blockVar); // Ekrana yazdırılabilir
}
// console.log(blockVar); // ReferenceError: blockVar is not defined

//Yeniden tanımlama kontrolü
let redeclare = "Ilk tanım";
// let redeclare = "Ikinci tanım"; // SyntaxError: Identifier 'redeclare' has already been declared

{
  let redeclare = "Blok içi tanım - geçerli";
  console.log("Blok içi redeclare:", redeclare); // İzin verilir — blok kapsamı farklı
}
console.log("Dışarı redeclare:", redeclare);    // Blok dışı orijinal değeri gösterir

//Temporal Dead Zone (TDZ) ve hoisting
// console.log(hoistTest); // ReferenceError: Cannot access 'hoistTest' before initialization
let hoistTest = "Hoisted ama safe zone'da";
// console.log(hoistTest); // Şimdi tanımlandığı için erişilebilir

//Global değişken ve window/globalThis ilişkisi
let globalLet = "Ben globalLet'um";
var globalVar = "Ben var ile globalMapping'im";
console.log("window.globalVar:", window.globalVar);      // Tanımlı => "Ben var ile globalMapping'im"
console.log("window.globalLet:", window.globalLet);      // undefined — let ile bağlanmadı

//Sabit bir değer tanımlama
const DAYS_IN_WEEK = 7; // Değeri değiştirilemez
// DAYS_IN_WEEK = 8; // TypeError: Assignment to constant variable

//Dizi oluşturma
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";      // ✅ İçerik değiştirilebilir
cars.push("Audi");       // ✅ Yeni eleman eklenebilir
// cars = ["Toyota"];    // ❌ Hata: Assignment to constant variable

//Obje oluşturma
const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";       // ✅ Özellik değiştirilebilir
car.owner = "Johnson";   // ✅ Yeni özellik eklenebilir
// car = { type: "Volvo" }; // ❌ Hata: Assignment to constant variable

//Block scope örneği
const X = 10;
{
  const X = 2;
  console.log("Blok içi X:", X); // 2
}
console.log("Blok dışı X:", X);   // 10

//TDZ ve Hoisting örneği
// console.log(Y); // ReferenceError: Cannot access 'Y' before initialization
const Y = 5;
console.log("Y:", Y); // 5
