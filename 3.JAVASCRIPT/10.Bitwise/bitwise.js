// Bitwise Operatörler (Bit Düzeyinde İşlemler)
// Bitwise operatörler, sayıları ikili (binary) düzeyde işler. Her bit üzerinde işlem yapar.

// 1. AND (&)
// Her iki bit 1 ise sonuç 1 olur.
let x = 5; // 0101
let y = 3; // 0011
console.log("AND (x & y):", x & y); // 1 (0001)

// 2. OR (|)
// En az bir bit 1 ise sonuç 1 olur.
console.log("OR (x | y):", x | y); // 7 (0111)

// 3. XOR (^)
// Bitler farklıysa sonuç 1 olur.
console.log("XOR (x ^ y):", x ^ y); // 6 (0110)

// 4. NOT (~) (One's Complement)
// Bitleri ters çevirir (1->0, 0->1). Sonuç negatif olur.
console.log("NOT (~x):", ~x); // -6

// 5. Sol Kaydırma (<<)
// Bitleri sola kaydırır, her kaydırma 2 ile çarpma anlamına gelir.
console.log("Sol Kaydırma (x << 1):", x << 1); // 10 (1010)

// 6. Sağ Kaydırma (>>)
// Bitleri sağa kaydırır, her kaydırma 2'ye bölme anlamına gelir.
console.log("Sağ Kaydırma (x >> 1):", x >> 1); // 2 (0010)

// 7. Sıfırla Sağ Kaydırma (>>>)
// Negatif sayılarda soldaki bitleri sıfırla doldurur.
let z = -5;
console.log("Sıfırla Sağ Kaydırma (z >>> 1):", z >>> 1); // Büyük pozitif bir sayı

// Açıklama:
// Bitwise operatörler genellikle düşük seviyeli işlemlerde, performans gerektiren uygulamalarda ve mask işlemlerinde kullanılır.

// Bitwise Assignment (Atama) Operatörleri
// Bitwise işlemleri, değişkenin mevcut değerini güncelleyerek atama yapar.

let a = 5; // 0101
let b = 3; // 0011

a &= b; // a = a & b
console.log("a &= b sonucu:", a); // 1

a |= b; // a = a | b
console.log("a |= b sonucu:", a); // 3

a ^= b; // a = a ^ b
console.log("a ^= b sonucu:", a); // 0

a = 5;
a <<= 1; // a = a << 1
console.log("a <<= 1 sonucu:", a); // 10

a >>= 2; // a = a >> 2
console.log("a >>= 2 sonucu:", a); // 2

a = -5;
a >>>= 1; // a = a >>> 1
console.log("a >>>= 1 sonucu:", a); // Büyük pozitif bir sayı

// Açıklama:
// Bitwise assignment operatörleri, hem bitwise işlemi hem de atamayı bir arada yapar.
// &=, |=, ^=, <<=, >>=, >>>= şeklinde kullanılır.
