/* ================= TYPESCRIPT ARRAYS =================
   Array: Aynı tipte birden fazla değeri tutan veri yapısıdır.
   Tanımlama, erişim, metotlar ve örnekler aşağıda verilmiştir.
*/

// number array
let numbersArray: number[] = [1, 2, 3, 4, 5];
// string array
let fruits: string[] = ["Elma", "Armut", "Muz"];
// boolean array
let flags: boolean[] = [true, false, true];

// Array metotları
numbers.push(6); // sona ekler
fruits.pop();    // sondan siler
let firstFruit = fruits[0]; // ilk elemana erişim

// Generic array tanımı
let scores: Array<number> = [10, 20, 30];

/*
Array açıklamaları:
- Dizi elemanlarına indeks ile erişilir (0'dan başlar).
- push, pop, shift, unshift gibi metotlar ile eleman ekleme/çıkarma yapılabilir.
- Array tipini [] ile veya Array<T> ile tanımlayabilirsin.
*/

/* ================= TYPESCRIPT TUPLES =================
   Tuple: Farklı tipte sabit sayıda eleman tutan veri yapısıdır.
   Tanımlama, erişim ve örnekler aşağıda verilmiştir.
*/

// Basit tuple
let personTuple2: [string, number] = ["Burak", 30];
// Tuple ile fonksiyon dönüşü
function getUser(): [string, number] {
  return ["Ayşe", 25];
}
let userInfo = getUser();

// Tuple array
let pointsTuple: [number, number][] = [ [1,2], [3,4], [5,6] ];

/*
Tuple açıklamaları:
- Tuple'lar sabit sayıda ve sıralı tipte değer tutar.
- Her elemanın tipi ve sırası önemlidir.
- Tuple'lar genellikle fonksiyonlardan birden fazla farklı tipte değer döndürmek için kullanılır.
*/
