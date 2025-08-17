/* ================= TYPESCRIPT TYPE ALIASES & INTERFACES =================
   Type Alias ve Interface: Nesne, fonksiyon ve veri tiplerini tanımlamak ve yeniden kullanmak için kullanılır.
   Farkları, kullanım şekilleri ve örnekler aşağıda açıklanmıştır.
*/

/*
Type Alias:
Type anahtar kelimesi ile bir tipe takma ad (alias) verilir. Hem nesne hem de primitive tipler için kullanılabilir.
*/
type UserAlias = {
  name: string;
  age: number;
};
let userA: UserAlias = { name: "Ali", age: 25 };

// Primitive type alias
type ID = number;
let userId: ID = 123;

// Union type alias
type StatusType = "active" | "inactive" | "pending";
let currentStatusAlias: StatusType = "active";

/*
Interface:
Interface ile nesne tipleri tanımlanır. Özellikle class ve object yapılarında kullanılır. Genişletilebilir ve birden fazla interface birleştirilebilir.
*/
interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description?: string; // optional
}
let productA: ProductInterface = {
  id: 1,
  name: "Telefon",
  price: 8000
};

// Interface genişletme
interface ElectronicProduct extends ProductInterface {
  warranty: number;
}
let laptop: ElectronicProduct = {
  id: 2,
  name: "Laptop",
  price: 15000,
  warranty: 2
};

// Birden fazla interface implement etme
interface Logger {
  log(message: string): void;
}
class Service implements ProductInterface, Logger {
  id: number;
  name: string;
  price: number;
  log(message: string) {
    console.log("Log:", message);
  }
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
let serviceA = new Service(3, "Bakım", 500);
serviceA.log("Servis oluşturuldu.");

/*
Type Alias vs Interface:
- Type ile union, intersection ve primitive tipler tanımlanabilir.
- Interface ise sadece nesne ve class yapıları için uygundur.
- Interface genişletilebilir, type ise birleştirilebilir (intersection).
*/

// Intersection type alias
type Admin = {
  admin: true;
};
type AdminUser = UserAlias & Admin;
let adminA: AdminUser = { name: "Veli", age: 40, admin: true };

/*
Union type ile fonksiyon örneği:
Bir fonksiyonun parametresi birden fazla tip alabilir. Örneğin hem string hem number kabul eden bir fonksiyon:
*/
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID (string):", id.toUpperCase());
  } else {
    console.log("ID (number):", id);
  }
}
printId("abc123"); // ID (string): ABC123
printId(456);       // ID (number): 456

/*
Açıklamalar:
- Type Alias ve Interface ile kodun tekrar kullanılabilirliği ve okunabilirliği artar.
- Type ile union/intersection, interface ile genişletme ve implement işlemleri yapılabilir.
*/
