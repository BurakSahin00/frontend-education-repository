/* ================= TYPESCRIPT CLASSES =================
   Classes: Nesne tabanlı programlamada veri ve davranışları bir arada tutmak için kullanılır.
   Tanımlama, constructor, property, method, inheritance, access modifier, static, readonly, interface implement örnekleri ve açıklamaları aşağıda verilmiştir.
*/

/*
Temel class tanımı:
Bir class, property ve metotları bir arada tutar.
*/
class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Merhaba, ben ${this.name} (${this.age})`);
  }
}
let personClass1 = new PersonClass("Burak", 30);
personClass1.greet();

/*
Inheritance (kalıtım):
Bir class başka bir class'tan miras alabilir.
*/
class StudentClass extends PersonClass {
  studentNo: number;

  constructor(name: string, age: number, studentNo: number) {
    super(name, age);
    this.studentNo = studentNo;
  }

  study(): void {
    console.log(`${this.name} ders çalışıyor.`);
  }
}
let studentClass1 = new StudentClass("Ayşe", 22, 101);
studentClass1.greet();
studentClass1.study();

/*
Access modifiers:
Property ve metotların erişim seviyesini belirler.
- public: Her yerden erişilebilir
- private: Sadece class içinde erişilebilir
- protected: Class ve alt classlarda erişilebilir
*/
class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}
let account = new BankAccount("Ali", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

/*
Readonly property:
Sadece okunabilir, sonradan değiştirilemez.
*/
class Car {
  readonly brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}
let car1 = new Car("Toyota");
console.log(car1.brand);
// car1.brand = "Honda"; // Hata: readonly property değiştirilemez

/*
Static property ve method:
Class'a ait, nesneye ait olmayan özellikler/metotlar.
*/
class MathUtil {
  static PI: number = 3.14;
  static square(x: number): number {
    return x * x;
  }
}
console.log(MathUtil.PI);
console.log(MathUtil.square(5));

/*
Class ile interface implement etme:
Bir class, bir interface'in kurallarını uygulayabilir.
*/
interface Logger {
  log(message: string): void;
}
class AppLogger implements Logger {
  log(message: string): void {
    console.log("Log:", message);
  }
}
let logger = new AppLogger();
logger.log("Uygulama başlatıldı.");

/*
Açıklamalar:
- Class ile nesne tabanlı programlama yapılır.
- Constructor ile property'ler başlatılır.
- Inheritance ile kod tekrarını azaltabilirsin.
- Access modifier, static, readonly ile erişim ve davranışları kontrol edebilirsin.
- Interface implement ile kurallı class'lar oluşturabilirsin.
*/
