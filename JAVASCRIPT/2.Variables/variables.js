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