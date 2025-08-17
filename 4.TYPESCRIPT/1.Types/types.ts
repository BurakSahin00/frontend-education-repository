/* ================= TYPESCRIPT SIMPLE TYPES =================
   Simple Types: number, string, boolean, null, undefined, any
   Her tipin açıklaması ve örneği aşağıda verilmiştir.
*/

// number: Sayısal değerler için kullanılır
let ageSimple: number = 25;
let priceSimple: number = 99.99;
let hexSimple: number = 0xff;
let binarySimple: number = 0b1010;
let octalSimple: number = 0o744;

// string: Metinsel ifadeler için kullanılır
let firstNameSimple: string = "Burak";
let greetingSimple: string = `Merhaba, ${firstNameSimple}!`;

// boolean: true veya false değerleri için kullanılır
let isActiveSimple: boolean = true;
let isCompletedSimple: boolean = false;

/*
null: Bilinçli olarak "değer yok" anlamı taşır. Bir değişkene null atanırsa, o değişkenin kasıtlı olarak boş olduğu belirtilir.
Örnek:
let emptyValue: null = null;
*/
let emptyValue: null = null;

/*
undefined: Bir değişken tanımlanmış ama değer atanmamışsa, değeri undefined olur. Genellikle fonksiyonlarda bir değer dönmezse de undefined döner.
Örnek:
let notAssigned: undefined = undefined;
let notSet: number | undefined; // Değer atanmamış, undefined
*/
let notAssigned: undefined = undefined;
let notSet: number | undefined; // Değer atanmamış, undefined

/*
any: Herhangi bir tip olabilir. TypeScript'in tip kontrolünü devre dışı bırakır. Genellikle dışarıdan gelen verilerde veya hızlı prototiplemede kullanılır.
*/
let randomValue: any = "Merhaba";
randomValue = 42;
randomValue = true;
randomValue = [1, 2, 3];

/*
unknown: any gibi her türlü değeri alabilir, fakat doğrudan işlem yapmadan önce tip kontrolü gerektirir. Daha güvenli bir alternatiftir.
*/
let valueUnknown: unknown = "test";
valueUnknown = 123;
if (typeof valueUnknown === "string") {
  console.log(valueUnknown.toUpperCase());
}


/* ================= TYPESCRIPT SPECIAL TYPES =================
   Special Types: array, tuple, enum, void, never, object
   Her tipin açıklaması ve örneği aşağıda verilmiştir.
*/

// array: Aynı tipte birden fazla değeri tutar
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ali", "Veli", "Ayşe"];

// tuple: Farklı tipte sabit sayıda eleman tutar
let personTuple: [string, number] = ["Burak", 30];

// enum: Sabit değerler kümesi tanımlar
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

// void: Fonksiyonun değer döndürmediğini belirtir
function logMessage(message: string): void {
  console.log(message);
}

// never: Fonksiyonun asla değer döndürmeyeceğini belirtir (ör: hata fırlatır)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function infiniteLoop(): never {
  while (true) {}
}

// object: Nesne tipini belirtir
let userObject: object = { name: "Burak", age: 30 };

/*
Açıklamalar:
- Simple Types temel veri tipleridir ve en sık kullanılanlardır.
- Special Types ise daha gelişmiş ve özel durumlar için kullanılır.
- Her tipin örneği ve açıklaması kodun üstünde veya yanında verilmiştir.
*/
