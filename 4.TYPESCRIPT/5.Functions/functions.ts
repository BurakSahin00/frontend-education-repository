/* ================= TYPESCRIPT FUNCTIONS =================
   Fonksiyonlar: Kodun tekrar kullanılabilirliğini ve organizasyonunu sağlar.
   Tanımlama, parametreler, dönüş tipi, opsiyonel/varsayılan parametreler, anonim ve arrow fonksiyonlar, overload ve rest parametreler örneklerle açıklanmıştır.
*/

/*
Temel fonksiyon tanımı:
Fonksiyonun parametre tipleri ve dönüş tipi belirtilir.
*/
function add(a: number, b: number): number {
  return a + b;
}
let sum = add(3, 5); // 8

/*
Opsiyonel parametre:
Bir parametrenin sonuna '?' koyarsan, o parametre isteğe bağlı olur.
*/
function greet(name: string, message?: string): string {
  return message ? `${message}, ${name}` : `Merhaba, ${name}`;
}
greet("Burak"); // Merhaba, Burak
greet("Burak", "Hoşgeldin"); // Hoşgeldin, Burak

/*
Varsayılan parametre:
Bir parametreye varsayılan değer atanabilir.
*/
function multiply(a: number, b: number = 2): number {
  return a * b;
}
multiply(4); // 8

/*
Anonim fonksiyon:
Fonksiyon bir değişkene atanabilir.
*/
const sayHello = function(name: string): void {
  console.log(`Hello, ${name}`);
};
sayHello("Ayşe");

/*
Arrow fonksiyon:
Daha kısa fonksiyon tanımı için kullanılır.
*/
const square = (x: number): number => x * x;
square(6); // 36

/*
Fonksiyon overload:
Aynı isimle farklı parametre tipleriyle fonksiyon tanımlanabilir.
*/
function showInfo(id: number): void;
function showInfo(id: string): void;
function showInfo(id: any): void {
  if (typeof id === "number") {
    console.log(`ID (number): ${id}`);
  } else {
    console.log(`ID (string): ${id}`);
  }
}
showInfo(123);
showInfo("abc");

/*
Rest parametre:
Bir fonksiyona sınırsız sayıda argüman göndermek için kullanılır.
*/
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3, 4); // 10

/*
Fonksiyonun dönüş tipi void:
Fonksiyon bir değer döndürmüyorsa void kullanılır.
*/
function logMessage(msg: string): void {
  console.log(msg);
}

/*
Fonksiyonun dönüş tipi never:
Fonksiyon asla normal şekilde tamamlanmazsa (ör: hata fırlatırsa) never kullanılır.
*/
function throwError(message: string): never {
  throw new Error(message);
}

/*
Açıklamalar:
- Fonksiyonlar kodun tekrar kullanılabilirliğini sağlar.
- Parametre ve dönüş tipleri ile kodun güvenliği ve okunabilirliği artar.
- Opsiyonel, varsayılan, rest parametreler ve overload ile esnek fonksiyonlar yazılabilir.
*/
