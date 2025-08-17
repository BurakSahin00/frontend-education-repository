/* ================= TYPESCRIPT OBJECT TYPES =================
   Object Types: Nesnelerin tipini tanımlamak için kullanılır.
   Özellikler, metotlar, interface, type ve örnekler aşağıda verilmiştir.
*/

/*
Basit object tanımı:
Bir nesnenin sahip olacağı property'leri doğrudan tip tanımı ile belirleyebilirsin.
Burada 'name' ve 'age' property'leri zorunlu ve tipleri string/number.
*/
let userObj: { name: string; age: number } = {
  name: "Burak",
  age: 30
};

/*
Fonksiyona object tipinde argüman gönderme:
Fonksiyonun parametresinde object tipini belirterek, sadece o tipte nesne almasını sağlayabilirsin.
*/
function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} (${user.age})`);
}
printUser(userObj);

/*
Optional (isteğe bağlı) property:
Bir property'nin sonuna '?' koyarsan, o property'nin tanımlanması zorunlu olmaz.
Burada 'model' property'si opsiyonel, 'brand' ise zorunlu.
*/
let car: { brand: string; model?: string } = {
  brand: "Toyota"
};

/*
Readonly property:
Bir property'yi 'readonly' ile tanımlarsan, o property'nin değeri sonradan değiştirilemez.
Burada 'x' sadece okunabilir, 'y' ise değiştirilebilir.
*/
let point: { readonly x: number; y: number } = {
  x: 10,
  y: 20
};
// point.x = 5; // Hata: x değiştirilemez

/*
Index signature (dinamik anahtarlar):
Nesnenin anahtarları dinamik olacaksa, [key: string]: number şeklinde tanımlanır.
Burada her anahtar bir string, değeri ise number.
*/
let salaries: { [key: string]: number } = {
  Ali: 3000,
  Veli: 3500
};

/*
Interface ile object tipi tanımlama:
Interface, tekrar kullanılabilir ve genişletilebilir nesne tipleri tanımlamak için kullanılır.
Burada 'Product' interface'i ile bir ürünün sahip olacağı property'ler belirleniyor.
*/
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // optional
}
let product: Product = {
  id: 1,
  name: "Laptop",
  price: 15000
};

/*
Type ile object tipi tanımlama:
Type anahtar kelimesi ile nesne tipleri tanımlanabilir. Interface'e benzer, ancak daha esnek ve birleşik tipler oluşturmak için kullanılır.
*/
type Address = {
  city: string;
  country: string;
};

let address: Address = {
  city: "İstanbul",
  country: "Türkiye"
};

/*
Object metodu:
Bir nesneye fonksiyon (metot) ekleyebilirsin. Burada 'greet' metodu, nesnenin içindeki 'name' property'ini kullanarak bir mesaj yazdırıyor.
*/
type PersonObjType = {
  name: string;
  greet(): void;
};

let personObj: PersonObjType = {
  name: "Ayşe",
  greet() {
    console.log(`Merhaba, ben ${this.name}`);
  }
};

personObj.greet();

/*
Açıklamalar:
- Object Types ile nesnelerin sahip olacağı özellikler ve metotlar tanımlanır.
- Interface ve type ile tekrar kullanılabilir ve daha esnek tipler oluşturulabilir.
- Optional, readonly ve index signature gibi özelliklerle nesne tipleri özelleştirilebilir.
*/

/*
================= TYPESCRIPT ENUMS =================
Enum: Sabit değerler kümesi tanımlamak için kullanılır. Kodun okunabilirliğini ve yönetimini artırır.
*/

// Sayısal enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
let move: Direction = Direction.Left;
console.log(move); // 2

/*
Enum üyelerine varsayılan olarak 0'dan başlayarak sayısal değer atanır. İstersen elle değer verebilirsin:
*/
enum Status {
  Success = 1,
  Error = 500,
  Pending = 0
}
let currentStatus: Status = Status.Error;
console.log(currentStatus); // 500

/*
String enum:
Her üyeye string değer atanabilir.
*/
enum ColorEnum {
  Red = "Kırmızı",
  Green = "Yeşil",
  Blue = "Mavi"
}
let favoriteColorEnum: ColorEnum = ColorEnum.Green;
console.log(favoriteColorEnum); // "Yeşil"

/*
Enum ile object kullanımı:
Bir nesnenin property'lerinde enum tipini kullanabilirsin.
*/
type Task = {
  title: string;
  status: Status;
};

let myTask: Task = {
  title: "Ödev",
  status: Status.Pending
};

/*
Enum açıklamaları:
- Enum'lar kodun okunabilirliğini artırır ve sabit değerleri yönetmeyi kolaylaştırır.
- Sayısal ve string enum tanımlanabilir.
- Enum'lar object tiplerinde property olarak kullanılabilir.
*/


