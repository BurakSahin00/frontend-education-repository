# Angular

# Farklı Teknolojiler Neden Kullanılıyor?

## 1. Web geliştirmede neden kütüphane/framework kullanıyoruz?

Başta web sadece **HTML + CSS + JavaScript** ile geliştiriliyordu. Ancak projeler büyüdükçe şu problemler çıktı:

- **Kod karmaşası:** JavaScript dosyaları büyüdükçe okunması ve yönetilmesi zorlaştı.
- **Yeniden kullanılabilirlik eksikliği:** Aynı kod parçalarını tekrar tekrar yazmak gerekiyordu.
- **Durum yönetimi (state management) sorunu:** Kullanıcı arayüzündeki veriler arttıkça, bu verilerin güncel tutulması zorlaştı.
- **Performans sorunları:** DOM’un (tarayıcıdaki sayfa yapısı) sürekli güncellenmesi yavaş çalışıyordu.
- **Takım çalışması zorluğu:** Büyük ekiplerde organize bir yapı olmadan herkes kafasına göre kod yazıyordu.

## 2. Kütüphane (Library) nedir?

- **Kütüphane**, belli bir problemi çözmek için hazırlanmış **araç setidir**.
- Senin kontrolünde çalışır. Yani **sen kütüphaneyi çağırırsın**, işini yapar, kontrol yine sende olur.
- Örnek:
    - **jQuery** → DOM işlemleri ve AJAX’ı kolaylaştırır.
    - **Lodash** → JavaScript için yardımcı fonksiyonlar.
    - **Chart.js** → Grafik çizmek için kütüphane.

📌 Özet: *Kütüphane = yardımcı paket. Kontrol sende.*

## **3. Framework nedir?**

- **Framework**, bir proje geliştirme için sana **hazır bir yapı ve kurallar** sunar.
- Burada **kontrol çerçevede (framework) olur**, sen onun kurallarına göre hareket edersin.
- Örnek:
    - **Angular** → MVC yapısına sahip, güçlü bir tam kapsamlı framework.
    - **Django (Python)** → Web geliştirme için hazır yapı.
    - **Spring Boot (Java)** → Backend framework.

## 4. Kütüphane ile Framework farkı

Bunu çok bilinen bir kavramla anlatırlar: **Inversion of Control (Kontrolün Ters Çevrilmesi)**

- **Kütüphane** → Sen çağırırsın (kontrol sende).
- **Framework** → O seni çağırır, sen onun içine kodunu yazarsın (kontrol onda).

Örnek:

- React çoğu zaman bir **kütüphane** olarak geçer çünkü sadece “UI katmanı” için araç verir, geri kalanını sen belirlersin.
- Angular ise tam bir **framework**’tür çünkü proje yapısından dependency injection’a kadar her şeyi belirler.

## 5. Neden farklı frameworkler/kütüphaneler var?

Çünkü herkesin **ihtiyacı farklı**:

- Küçük projelerde → Hafif kütüphaneler (React, Vue, Svelte).
- Büyük ve kurumsal projelerde → Tüm kuralları olan frameworkler (Angular, Ember).
- Esnek isteyenler → Kendi mimarisini kurabileceği kütüphaneler.
- Düzen isteyenler → Hazır kurallarıyla gelen frameworkler.

# Angular Nedir?

Angular, geliştiricilere **hızlı ve güvenilir web uygulamaları** oluşturma gücü veren bir **web framework'ü**dür. Google’da çalışan özel bir ekip tarafından geliştirilen Angular, araçlar, API’ler ve kütüphanelerden oluşan geniş bir yapı seti sunarak geliştirme sürecini sadeleştirir ve hızlandırır.

## Angular’ın Öne Çıkan Özellikleri

### 1.1 Yapılandırılmış Bileşen Modeli ve Dependency Injection

Angular, bileşen temelli (component-based) bir mimari sunar. Kodunuzu **iyi kapsüllenmiş parçalara ayırarak** daha modüler, yeniden kullanılabilir ve test edilebilir hale getirir. Ayrıca, esnek bir **dependency injection (bağımlılık enjeksiyonu)** sistemiyle kod bağımlılıklarını yönetmenizi kolaylaştırır.

### 1.2 Fine-Grained Reactivity (İnce Taneleşmiş Tepkime)

Angular’ın yeni reaktivite modeli (Signals), derleme zamanı optimizasyonlarıyla birlikte çalışarak uygulamalarda **hızlı durum güncellemeleri** sağlar. Durumun nerede ve nasıl kullanıldığını izleyerek, değişikliklerin yalnızca gerçekten gerekli yerlere uygulanmasını mümkün kılar

### 1.3 Performans: SSR, SSG, Hydration ve Deferred Loading

Angular, **Sunucu Tarafı Render (SSR)** ve **Statik Site Oluşturma (SSG)** gibi gelişmiş performans tekniklerini destekler. Ayrıca, DOM’un tam olarak yeniden yüklenmesi yerine, nesnelerin “canlandırılmasını” sağlayan **hydration** ve `@defer` bloklarıyla **tembel yükleme (deferred loading)** sayesinde performans iyileştirmeleri sağlar.

### 1.4 Birinci Sınıf Modüller: Routing, Forms vb.

Angular, rota yönetimi (Routing), form işleme ve doğrulama (Forms) gibi yaygın ihtiyaçlar için **önceden oluşturulmuş, resmi (first-party)** modüller sunar. Bu sayede uyumlu ve entegre çömler kullanarak geliştirmeyi kolaylaştırır.

### 1.5 Geliştirmeyi Hızlandıran Araçlar

**Angular CLI**: Tek bir komutla proje oluşturma, geliştirme, test ve dağıtımı kolaylaştıran güçlü bir komut satırı aracıdır.

**Angular DevTools**: Tarayıcı geliştirici araçlarına entegre çalışan, bileşen ağacı, dependency injection yapısı ve performans analizleri sunan bir eklentidir.

### 1.6 Güvence ve Kararlılık

- Angular, **Google’un dev mono-repo’su**nda her commit’in yüz binlerce test ile doğrular.
- **Zaman tabanlı sürüm takvimi**, uzun süreli destek (LTS) pencereleri ve otomatik geçiş şemaları sayesinde (automated migration schematics), stabilite ve geriye dönük uyumluluk sağlanır

### 1.7 Ölçeklenebilirlik, Uluslararasılaşma (i18n) ve Güvenlik

- Angular, büyük ekipler ve kod tabanları için uygun **yüksek ölçekli mimari çözümler** sunar.
- **Uluslararasılaştırma (i18n)**: Çoklu dil desteği, mesaj çevirileri ve locale formatları gibi yerel özellikleri yönetme imkânı sağlar.
- **Varsayılan olarak güvenlik**: HTML sterilizasyonu ve trusted types gibi özelliklerle XSS ve CSRF gibi yaygın web güvenlik açıklarına karşı güvenlik önlemleri içerir.

### 1.8 Modern Yapı Süreçleri: Vite ve ESBuild

Angular CLI, **Vite** ve **esbuild** gibi modern araçlarla entegre edilmiştir. Bu sayede yüz binlerce satırlık projeler bile **bir dakikadan kısa sürede** derlenebilir ve çalıştırılabilir.

### 1.9 Açık Kaynak ve Canlı Topluluk

- Angular, açık kaynaklıdır ve tüm kodlar GitHub'da mevcuttur. Geliştirici topluluğu aktif olarak katkı sağlar.
- **Topluluk, eğitim materyalleri, bloglar, podcastler ve Angular Google Developer Experts** gibi destek yapılarıyla zengindir.

### 1.10 Google Ekosistemiyle Entegrasyon

Angular, Google’ın diğer teknolojileriyle (örneğin Firebase, TensorFlow, Flutter, Material Design, Google Cloud ve Chrome performans iyileştirmeleri gibi) yakından entegredir.

## Angular CLI Nedir?

**Angular CLI**, `@angular/cli` paketine ait komut satırı arayüzü aracıdır. `ng` adlı bir ikili (binary) içerir ve Angular uygulamaları ile kütüphaneler oluşturmayı, geliştirmeyi, test etmeyi, dağıtmayı ve bakımını komut satırı üzerinden kolayca yönetmeyi sağlar [angular.dev](https://angular.dev/tools/cli?utm_source=chatgpt.com).

---

### Temel Komutlar ve Açıklamaları

Paylaşılan komut referansına göre (CLI Reference), Angular CLI aşağıdaki başlıca komutları içerir:

| Komut | Açıklama |
| --- | --- |
| `ng new` | Yeni bir Angular workspace ve uygulama oluşturur. |
| `ng generate` (`ng g`) | Projeye bileşen, servis, modül gibi ögeler ekler. |
| `ng serve` | Geliştirme sunucusunu başlatır, kod değişimlerinde yeniden derler. |
| `ng build` | Uygulamayı veya kütüphaneyi derler. |
| `ng test` | Birim testleri çalıştırır. |
| `ng lint` | Kodun statik analizini yapar. |
| `ng e2e` | Uçtan uca testleri koşturur. |
| `ng add` | Projeye üçüncü parti kütüphaneyi entegre eder. |
| `ng update` | CLI ve bağımlılıkları günceller. |
| `ng deploy` | Uygulamayı dağıtım için hazırlar. |
| `ng version` | Mevcut CLI sürümünü gösterir. |
| `ng analytics`, `ng cache`, `ng config` ... | CLI ayar yönetimi ve yapılandırmaları içindir. |

---

### Öne Çıkan Komutlar Detayları

### `ng new`

Yeni bir Angular projesi ve workspace başlatır. Yapılandırmalar (routing, stylesheet türü, test dahil edilmesi vs.) için interaktif sorular sunar.

Workspace içinde uygulama dosyaları `src/` klasörüne yerleştirilir. Ayrıca `--no-create-application` ile yalnızca workspace oluşturulabilir, uygulama sonrada eklenebilir.

### `ng generate` (`ng g`)

Component’ten servise, modülden pipe’a kadar çeşitli yapı taşları oluşturmanızı sağlar.

Örneğin: `ng g component my-comp` ile TypeScript, HTML ve CSS dosyaları oluşturulur.

- `-standalone`, `-inline-template`, `-skip-tests` gibi bayraklarla davranışı özelleştirebilirsin [angular.dev](https://angular.dev/cli/generate/component?utm_source=chatgpt.com).

### `ng serve`

Geliştirme sunucusu başlatır, değişiklikleri izleyip otomatik yeniden yükleme sağlar. Açılışta browser'ı otomatik açma (`--open/-o`) gibi seçenekler içerir.

### `ng build`

Projeyi derleyip üretim dosyalarını oluşturur. `ng build --configuration production` gibi ayarlarla üretime hazır hale getirir.

Ayrıca ön tanımlı olarak AOT (Ahead-of-Time) derleme uygular.

### `ng config`

`angular.json` içindeki yapılandırmaları CLI üzerinden okuma ve değiştirme imkânı tanır. Küresel ayarları `--global` bayrağıyla düzenleyebilirsin.

### Diğer Komutlar

- **`ng add`**: Özellikle Angular Material gibi kütüphaneleri proje ile kolayca bütünleştirir.
- **`ng update`**: CLI ve proje bağımlılıklarını günceller.
- **`ng test`, `ng lint`, `ng e2e`**: Test ve kod kalitesi kontrolü için vazgeçilmez araçlardır.

---

## Workspace ve Geliştirme Akışı

1. `ng new my-app` – Yeni proje oluştur.
2. `cd my-app` – Dizine geçiş yap.
3. `ng serve --open` — Projeyi yerel sunucuda çalıştır ve otomatik olarak aç.
4. `ng g component`, `ng g service` gibi komutlarla kod üretimini hızlandır.
5. `ng build --configuration production` — Üretime hazır derleme yap.
6. `ng deploy` — Sunucuya veya buluta göndermek için kullan.

## Component

### Component Tanımlama

Her bileşen birkaç ana parçadan oluşur:

- Angular tarafından kullanılan bazı yapılandırmaları içeren bir **@Component dekoratörü**.
- DOM’a neyin render edileceğini kontrol eden bir **HTML şablonu**.
- Bileşenin HTML içinde nasıl kullanılacağını tanımlayan bir **CSS seçici**.
- Kullanıcı girişini işleme veya sunucuya istek gönderme gibi davranışları içeren bir **TypeScript sınıfı**.

```tsx
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; } ` /*Optional*/,
})
export class UserProfile { /* Your component code goes here */ }
```

HTML ve CSS dosyaları istenilirse dosya kaynağı olarak da kullanılabilir.

```tsx
// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}
```

```html
<!-- user-profile.html -->
<h1>User profile</h1>
<p>This is the user profile page</p>
```

```css
/* user-profile.css */
h1 {
  font-size: 3em;
}
```

### Component Kullanımı

Bir uygulamayı, birden fazla bileşeni bir araya getirerek oluşturursun.

Örneğin, bir **kullanıcı profili sayfası** geliştiriyorsan, sayfayı şu bileşenlere ayırabilirsin:

- **UserProfile**
- **UserBiography**
- **ProfilePhoto**
- **UserAddress**

Burada **UserProfile bileşeni**, son sayfayı oluşturmak için birkaç farklı bileşeni kullanır.

### Component Anatomisi

Bir bileşeni projene dahil edip kullanmak için şunları yapman gerekir:

1. Kullanmak istediğin bileşen için, kendi bileşeninin **TypeScript dosyasına bir import ifadesi** ekle.
2. Kendi **@Component dekoratöründe**, kullanmak istediğin bileşeni `imports` dizisine ekle.
3. Kendi bileşeninin **şablonunda (template)**, kullanmak istediğin bileşenin **selector** değeriyle eşleşen bir HTML elementi ekle.

```tsx
// user-profile.ts
import {ProfilePhoto} from 'profile-photo.ts';
@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: `
    <h1>User profile</h1>
    <profile-photo />
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {
  // Component behavior is defined in here
}
```

Her bileşenin sahip olması gerekenler şunlardır:

- **TypeScript sınıfı:** Kullanıcı girdilerini işlemek veya sunucudan veri çekmek gibi davranışları tanımlar.
- **HTML şablonu:** DOM’a neyin render edileceğini kontrol eder.
- **CSS seçici:** Bileşenin HTML içinde nasıl kullanılacağını tanımlar.

Angular’a özgü bilgileri bir bileşene eklemek için, TypeScript sınıfının üstüne **@Component dekoratörü** eklenir.

```tsx
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
})
export class ProfilePhoto { }
```

@Component dekoratörüne aktarılan nesneye, bileşenin **metadata’sı (üst verisi)** denir. Bu metadata; **selector**, **template** ve bu rehber boyunca açıklanan diğer özellikleri içerir.

Bileşenler, isteğe bağlı olarak kendi DOM’una uygulanacak **CSS stillerinin** bir listesini de içerebilir.

```tsx
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
  styles: `img { border-radius: 50%; }`,
})
export class ProfilePhoto { }
```

Varsayılan olarak, bir bileşenin stilleri yalnızca o bileşenin şablonunda tanımlanan öğeleri etkiler.

Alternatif olarak, şablonunuzu ve stillerinizi **ayrı dosyalarda** yazmayı da tercih edebilirsiniz.

```tsx
@Component({
  selector: 'profile-photo',
  templateUrl: 'profile-photo.html',
  styleUrl: 'profile-photo.css',
})
export class ProfilePhoto { }
```

Bir bileşeni, direktifi veya pipe’ı kullanmak için, onu **@Component dekoratöründeki `imports` dizisine** eklemeniz gerekir.

```tsx
import {ProfilePhoto} from './profile-photo';
@Component({
  // Import the `ProfilePhoto` component in
  // order to use it in this component's template.
  imports: [ProfilePhoto],
  /* ... */
})
export class UserProfile { }
```

Varsayılan olarak Angular bileşenleri **standalone (bağımsız)** olarak tanımlanır. Bu, onları doğrudan başka bileşenlerin `imports` dizisine ekleyebileceğiniz anlamına gelir. Daha eski bir Angular sürümüyle oluşturulmuş bileşenlerde ise, @Component dekoratöründe **`standalone: false`** belirtilmiş olabilir. Bu tür bileşenler için (standalone olmayanlar), bileşenin tanımlandığı **NgModule’ü import etmeniz** gerekir.

Her bileşen bir **CSS seçici (selector)** tanımlar:

```tsx
@Component({
  selector: 'profile-photo',
  ...
})
export class ProfilePhoto { }
```

Bir bileşeni göstermek için, diğer bileşenlerin şablonunda bu seçiciye karşılık gelen bir **HTML elementi** oluşturursunuz:

```tsx
@Component({
  selector: 'profile-photo',
})
export class ProfilePhoto { }

@Component({
  imports: [ProfilePhoto],
  template: `<profile-photo />`
})
export class UserProfile { }
```

Angular, karşılaştığı her uygun HTML elementi için bileşenin bir örneğini (instance) oluşturur. Bir bileşenin seçicisine uyan DOM elementi, o bileşenin **host elementi (barındırıcı öğesi)** olarak adlandırılır. Bir bileşenin şablonunun içeriği, host elementinin içine render edilir.

Bir bileşen tarafından render edilen DOM, yani o bileşenin şablonuna karşılık gelen içerik, o bileşenin **view’u (görünümü)** olarak adlandırılır.

```tsx
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // host element <app-root>
  template: `
    <h1>Hoşgeldiniz!</h1>
    <app-user></app-user>
    <app-footer></app-footer>
  `
})
export class AppComponent {}

// user.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user', // host element <app-user>
  template: `
    <p>Kullanıcı: Ahmet</p>
  `
})
export class UserComponent {}

// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer', // host element <app-footer>
  template: `
    <footer>Telif Hakkı © 2025</footer>
  `
})
export class FooterComponent {}
```

```html
<app-root> <!-- AppComponent'in host elementi -->
  <h1>Hoşgeldiniz!</h1>

  <app-user> <!-- UserComponent'in host elementi -->
    <p>Kullanıcı: Ahmet</p> <!-- UserComponent'in view'u -->
  </app-user>

  <app-footer> <!-- FooterComponent'in host elementi -->
    <footer>Telif Hakkı © 2025</footer> <!-- FooterComponent'in view'u -->
  </app-footer>
</app-root>
```

Bileşenleri bu şekilde bir araya getirerek, Angular uygulamanızı bir **bileşen ağacı** (tree of components) olarak düşünebilirsiniz.

![image.png](image.png)

### Seçiçiler (Selectors)

Her bileşen, bileşenin nasıl kullanılacağını belirleyen bir **CSS seçici (selector)** tanımlar:

```tsx
@Component({
  selector: 'profile-photo',
  ...
})
export class ProfilePhoto { }
```

Bir bileşeni, diğer bileşenlerin şablonlarında bu seçiciyle eşleşen bir **HTML elementi** oluşturarak kullanırsınız:

```tsx
@Component({
  template: `
    <profile-photo />
    <button>Upload a new profile photo</button>`,
  ...,
})
export class UserProfile { }
```

Angular, seçicileri **derleme zamanında (compile-time)** statik olarak eşleştirir. Çalışma zamanında (run-time), ister Angular bindingleriyle ister DOM API’leriyle DOM üzerinde yapılan değişiklikler, render edilen bileşenleri etkilemez.

Bir element yalnızca **bir bileşen seçiciyle** eşleşebilir. Eğer bir element birden fazla bileşen seçiciyle eşleşirse, Angular hata verir.

Bileşen seçicilerinde **büyük/küçük harf duyarlılığı (case-sensitive)** vardır.

### Seçici Tipleri

- Tip Seçicisi (Type Selector)
    - HTML etiket adına göre eşleşir.
    
    ```tsx
    @Component({
      selector: 'profile-photo',
      template: `<p>Profil fotoğrafı bileşeni</p>`
    })
    export class ProfilePhotoComponent {}
    ```
    
    ```html
    <profile-photo></profile-photo>
    ```
    
- Attribute Selector (Öznitelik seçici)
    - HTML elementinin bir attribute’a sahip olmasına göre eşleşir.
    
    ```tsx
    @Component({
      selector: '[dropzone]',
      template: `<p>Dropzone bileşeni</p>`
    })
    export class DropzoneComponent {}
    ```
    
    ```html
    <div dropzone></div>
    ```
    
- Class Selector (Sınıf seçici)
    - Bir CSS sınıfına göre eşleşir.
    
    ```tsx
    @Component({
      selector: '.menu-item',
      template: `<p>Menü öğesi bileşeni</p>`
    })
    export class MenuItemComponent {}
    ```
    
    ```html
    <div class="menu-item"></div>
    ```
    
- `:not` pseudo-class kullanımı
    - Angular, yalnızca :not pseudo-class seçicisini destekler. Bu sayede belirli elementleri seçiciden hariç tutabilirsin.
    
    ```tsx
    @Component({
      selector: '[dropzone]:not(textarea)',
      ...
    })
    export class DropZone { }
    ```
    
    .(incelemeye devam edilecek)
    

### Stiller (Styling)

Bileşenler, isteğe bağlı olarak yalnızca o bileşenin DOM’una uygulanan CSS stillerini içerebilir.

```tsx
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
  styles: ` img { border-radius: 50%; } `,
})
export class ProfilePhoto { }
```

```tsx
@Component({
  selector: 'profile-photo',
  templateUrl: 'profile-photo.html',
  styleUrl: 'profile-photo.css',
})
export class ProfilePhoto { }
```

Her bileşenin, framework’ün bileşenin stillerini nasıl kapsayacağını (scope) belirleyen bir görünüm kapsülleme (view encapsulation) ayarı vardır. Üç tür kapsülleme modu vardır: *Emulated*, *ShadowDom* ve *None*. Bu modu, @Component dekoratöründe belirtebilirsiniz.

- `WievEncapsulation.Emulated` : CSS stili, Component’in kendisine uygulanır.
    
    ```tsx
    @Component({
      selector: 'app-card',
      template: `<div class="box">Merhaba</div>`,
      styles: [`.box { color: red; }`],
      encapsulation: ViewEncapsulation.Emulated
    })
    export class CardComponent {}
    ```
    
    ```html
    <div _ngcontent-abc123 class="box">Merhaba</div>
    
    <style>
    .box[_ngcontent-abc123] { color: red; }
    </style>
    ```
    
- `WievEncapsulation.ShadowDom` : CSS stili, Component içerisindeki elementlere uygulanır.
    
    ```tsx
    @Component({
      selector: 'app-card',
      template: `<div class="box">Merhaba</div>`,
      styles: [`.box { color: red; }`],
      encapsulation: ViewEncapsulation.ShadowDom
    })
    export class CardComponent {}
    ```
    
    ```html
    <app-card>
      #shadow-root
        <style>.box { color: red; }</style>
        <div class="box">Merhaba</div>
    </app-card>
    ```
    
- `WievEncapsulation.None` : Tüm encapsulationları kaldırır ve CSS stili, bütün dayfa için global CSS gibi davranmaya başlar.
    
    ```tsx
    @Component({
      selector: 'app-card',
      template: `<div class="box">Merhaba</div>`,
      styles: [`.box { color: red; }`],
      encapsulation: ViewEncapsulation.None
    })
    export class CardComponent {}
    ```
    
    ```html
    <div class="box">Merhaba</div>
    
    <style>
    .box { color: red; }   <!-- Bu kural tüm sayfadaki .box’lara uygulanır -->
    </style>
    
    ```
    

### Input Özellikleri ile Veri Alma (Accepting data with input properties)

Bir bileşen kullanırken genellikle ona bazı veriler göndermek istersiniz. Bileşen, kabul ettiği verileri **inputs** (girdi özellikleri) olarak tanımlar.

```tsx
import {Component, input} from '@angular/core';
@Component({/*...*/})
export class CustomSlider {
  // Declare an input named 'value' with a default value of zero.
  // TypeScript infers that this input is a number, returning InputSignal<number>.
  value = input(0);
}
```

Şablonda bu şekilde bağlayabilirsiniz:

```html
<custom-slider [value]="50" />
```

Eğer bir input’un varsayılan değeri yoksa ve değer verilmezse, değeri **undefined** olur.  İstersen türü **explicit (açıkça)** de belirtebilirsin:

```tsx
@Component({/*...*/})
export class CustomSlider {
  // Produces an InputSignal<number | undefined> because `value` may not be set.
  value = input<number>();
}
```

- Angular, **inputs’u derleme zamanında (compile-time)** kaydeder. Run-time’da input ekleyemez veya kaldıramazsınız.
- `input()` fonksiyonu Angular derleyicisi için özel bir anlam taşır; sadece component ve directive property initializers içinde çağrılabilir.
- Bir component sınıfını genişlettiğinizde (extends), input’lar **alt sınıfa miras** olarak geçer.
- **Input isimleri büyük/küçük harf duyarlıdır (case-sensitive).**

`input` Fonksiyonu Nedir?

Angular’da bir **component’e veri göndermek** istediğinizde, **input properties** kullanırsınız.

- `input()` fonksiyonu, bir **InputSignal** döndürür.
- Bu signal yalnızca **okunabilir (read-only)** bir sinyaldir.

```tsx
import { Component, input, computed } from '@angular/core';

@Component({/*...*/})
export class CustomSlider {
  // 'value' adında bir input tanımla ve varsayılan değer olarak 0 ver
  value = input(0);

  // 'label' adında bir computed signal oluştur ve value'yu kullan
  label = computed(() => `The slider's value is ${this.value()}`);
}
```

`input()` ile oluşturulan signal **sadece okunabilir**.

- Yani component içinde bu değeri değiştiremezsiniz.
- Değeri değiştirmek isteyen parent component, **template üzerinden** değer gönderir:

```html
<custom-slider [value]="50"></custom-slider>
```

Required Input

Eğer input **zorunlu** ise `input.required()` kullanılır:

```tsx
@Component({/*...*/})
export class CustomSlider {
  // 'value' input’u zorunlu
  value = input.required<number>();
}
```

- Bu durumda Angular, template’de component kullanılırken `value` input’unun **verilmesini zorunlu kılar**.
- Eksikse, derleme zamanında hata alırsınız.

> Not: Required input’lar, otomatik olarak undefined tipini içermez. Yani input mutlaka set edilmeli.
> 

**Input Config (Yapılandırma)**

`input()` fonksiyonu bir **config nesnesi** alabilir. Bu nesne, input’un davranışını değiştirmek için kullanılır.

En yaygın kullanım şekli: **transform fonksiyonu**.

**Input Transform Nedir?**

**Transform**, Angular template üzerinden bir input değeri setlediğinde bu değeri **önceden işleyen bir fonksiyon**dur.

- Değer, transform fonksiyonundan geçtikten sonra component içindeki input signal’a atanır.
- Genellikle input değerini normalize etmek veya farklı tipleri kabul etmek için kullanılır.

```tsx
@Component({
  selector: 'custom-slider',
  /*...*/
})
export class CustomSlider {
  label = input('', {transform: trimString});
}
function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}
```

```html
<custom-slider [label]="systemVolume" />
```

Burada `systemVolume` değiştiğinde Angular otomatik olarak `trimString` fonksiyonunu çalıştırır ve sonucu `label` input’una atar.

- **Statik analiz edilebilir olmalı**
    - Transform fonksiyonu build-time sırasında Angular tarafından anlaşılabilir olmalı.
    - Koşullu veya dinamik olarak belirlenen fonksiyonlar kullanılamaz.
- **Saf (pure) fonksiyon olmalı**
    - Fonksiyon dış duruma bağımlı olmamalı.
    - Aksi takdirde beklenmeyen davranışlar oluşabilir.
- **Type Checking**
    - Transform fonksiyonunun parametre tipi, template üzerinden input’a hangi değerlerin atanabileceğini belirler.

```tsx
@Component({/*...*/})
export class CustomSlider {
  widthPx = input('', { transform: appendPx });
}

function appendPx(value: number): string {
  return `${value}px`;
}
```

Template’de `widthPx` input’u sayı alır ama component içinde **string** olarak kullanılır: `"50px"` 

**Angular’ın Hazır Transform Fonksiyonları**

1. **booleanAttribute** → Boolean değerler için.
    - Attribute varsa `true`, yoksa `false`.
    - `"false"` string’i Angular’da boolean `false` olarak işlenir.
2. **numberAttribute** → Number değerler için.
    - Sayıya çevirmeye çalışır, başarısız olursa `NaN` döner.

**Input Aliases Nedir?**

Angular’da bir component’in input property’sinin **template içinde farklı bir isimle** kullanılmasını istiyorsanız, **alias** özelliğini kullanabilirsiniz.

- Alias, **TypeScript kodundaki property adını değiştirmez**, sadece template’te kullanılacak ismi değiştirir.
- Genellikle **DOM element property isimleri ile çakışmaları önlemek** veya **eski isimleri koruyup yeni isim vermek** için kullanılır.

```tsx
@Component({/*...*/})
export class CustomSlider {
  // TypeScript tarafında 'value' olarak kullanılır
  // Template'te ise 'sliderValue' olarak bağlanır
  value = input(0, { alias: 'sliderValue' });
}
```

```html
<!-- Template'te alias kullanılır -->
<custom-slider [sliderValue]="50"></custom-slider>
```

- TypeScript tarafında hala `this.value` üzerinden erişim sağlanır.
- Template’te `[sliderValue]` kullanılır.

Ne Zaman Kullanılır?

1. **Property isim çakışmalarını önlemek**
    - Örneğin, bir native DOM elementi (`value`, `checked` vb.) ile aynı isim çakışıyorsa alias kullanabilirsiniz.
2. **Eski API veya isimleri korumak**
    - Component property ismini değiştirmek istediğinizde, eski template’leri bozmamak için alias kullanabilirsiniz.

**Model Inputs Nedir?**

- Model input, normal bir input gibi **parent component’ten veri almak** için kullanılır.
- Ancak farkı, **component’in kendi içinde bu input’a yeni değerler yazabilmesidir**.
- Böylece **iki yönlü binding (two-way binding)** yapılabilir ve parent component’e yeni değerler otomatik olarak iletilir.

```tsx
@Component({ /* ... */})
export class CustomSlider {
  // Define a model input named "value".
  value = model(0);
  increment() {
    // Update the model input with a new value, propagating the value to any bindings. 
    this.value.update(oldValue => oldValue + 10);
  }
}
@Component({
  /* ... */
  // Using the two-way binding syntax means that any changes to the slider's
  // value automatically propagate back to the `volume` signal.
  // Note that this binding uses the signal *instance*, not the signal value.
  template: `<custom-slider [(value)]="volume" />`,
})
export class MediaControls {
  // Create a writable signal for the `volume` local state. 
  volume = signal(0);
}
```

- Burada `CustomSlider` component’i `value` model input’una yeni değerler yazabilir.
- Bu değerler otomatik olarak parent component’teki `volume` sinyaline aktarılır.
- Özetle: **value ve volume her zaman senkronizedir.**

> Önemli: Two-way binding’de sinyalin kendisi aktarılır, değeri değil.
> 

| Özellik | Normal Input | Model Input |
| --- | --- | --- |
| Parent → Child veri aktarımı | ✅ | ✅ |
| Child → Parent veri aktarımı | ❌ | ✅ |
| Read-only | ✅ | Hayır |
| Two-way binding desteği | ❌ | ✅ |
| Input transform | ✅ | ❌ |

**Implicit Change Events**

- Model input oluşturulduğunda Angular otomatik olarak **“Change”** isimli bir output oluşturur.
- Örneğin `checked = model(false)` tanımlandığında, Angular otomatik olarak **`checkedChange`** event’i oluşturur.
- `set` veya `update` çağrıldığında bu event emit edilir ve parent component dinleyebilir.

```tsx
@Directive({ /* ... */ })
export class CustomCheckbox {
  checked = model(false); // -> otomatik olarak checkedChange output’u oluşur
}
```

**Özelleştirme**

- Normal input’larda olduğu gibi **alias** veya **required** belirlenebilir.
- Ancak **input transform** desteklenmez.

**Ne Zaman Kullanılır?**

- Component’in **kullanıcı etkileşimi ile bir değer değiştirmesi gerekiyorsa** model input kullanılır.
- Tipik kullanım alanları:
    - Form kontrol component’leri (date picker, combobox, slider vb.)
    - Custom input component’leri

**@Input Dekoratörü ile Input Tanımlama**

```tsx
@Component({...})
export class CustomSlider {
  @Input() value = 0;
}
```

- `@Input()` dekoratörü, bir property’nin **parent component’ten veri alabileceğini** belirtir.
- Template içinde bağlamak aynıdır:

```html
<custom-slider [value]="50"></custom-slider>
```

**Özelleştirme Seçenekleri**

1. **Required Inputs**

- Bir input’un **her zaman değer alması gerektiğini** belirlemek için kullanılır.

```tsx
@Component({...})
export class CustomSlider {
  @Input({ required: true }) value = 0;
}

```

- Eğer required input verilmezse, Angular build-time’da hata verir.

---

2. **Input Transforms**

- Input değerini Angular component’e set ederken **dönüştürmek** için kullanılır.

```tsx
@Component({...})
export class CustomSlider {
  @Input({ transform: trimString }) label = '';
}

function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}

```

---

3. **Input Aliases**

- Template içinde input’a farklı bir isim vermek için kullanılır.

```tsx
@Component({...})
export class CustomSlider {
  @Input({ alias: 'sliderValue' }) value = 0;
}

```

```html
<custom-slider [sliderValue]="50"></custom-slider>

```

- Alias, TypeScript tarafındaki property adını değiştirmez.
- Ayrıca alias, dekoratörün ilk parametresi olarak da verilebilir.

---

4. **Getters ve Setters ile Inputs**

- Getter ve setter kullanarak input tanımlayabilirsiniz:

```tsx
export class CustomSlider {
  @Input()
  get value(): number { return this.internalValue; }
  set value(newValue: number) { this.internalValue = newValue; }
  private internalValue = 0;
}

```

- Sadece setter tanımlayarak **write-only input** da oluşturabilirsiniz:

```tsx
export class CustomSlider {
  @Input()
  set value(newValue: number) { this.internalValue = newValue; }
  private internalValue = 0;
}

```

> Ancak mümkünse getter/setter yerine input transform kullanmak daha performanslıdır. Angular input setter’ı birden fazla çağırabilir, ağır işlemler performansı düşürebilir.
> 

---

5. **@Component Dekoratörü ile Inputs**

- Input’lar ayrıca `@Component` dekoratöründeki `inputs` property’si ile de tanımlanabilir.
- Özellikle **base class’tan miras alınan property’leri** input yapmak için kullanışlıdır:

```tsx
@Component({
  ...,
  inputs: ['disabled']
})
export class CustomSlider extends BaseSlider { }

```

- Alias eklemek için:

```tsx
@Component({
  ...,
  inputs: ['disabled: sliderDisabled']
})
export class CustomSlider extends BaseSlider { }

```

### Angular’da **Custom Events (Özel Olaylar)**

Angular component’leri, kendi özel event’lerini (çıkış olaylarını) tanımlayabilir. Bunun için `output()` fonksiyonu kullanılır.

```tsx
@Component({/*...*/})
export class ExpandablePanel {
  panelClosed = output<void>();
}
```

```html
<expandable-panel (panelClosed)="savePanelState()" />
```

Burada `panelClosed`, component’in dışarıya bildirdiği bir olaydır. Parent (ebeveyn) component bu event’i `(panelClosed)` ile dinleyebilir.

**`output()` Fonksiyonunun Çalışma Mantığı**

- `output()` fonksiyonu, bir **OutputEmitterRef** döndürür.
- Event’i tetiklemek için `.emit()` metodu çağrılır.

```tsx
this.panelClosed.emit(); // event'i fırlatır
```

Bu sayede parent component’te bağlı olan `savePanelState()` fonksiyonu çalışır.

**Angular Custom Events Özellikleri**

1. **Native olaylara benzer**
    - Custom events, tarayıcıdaki `click`, `input` gibi olaylara benzer şekilde çalışır.
2. **Event bubbling yok**
    - Angular’daki custom events **DOM üzerinde bubble etmez**.
    - Yani bir event sadece tanımlandığı component’ten parent component’e bildirilir, DOM ağacında yukarıya doğru otomatik yayılmaz.
3. **Case-sensitive (Büyük/küçük harf duyarlı)**
    - Output isimleri büyük-küçük harfe duyarlıdır.
    - Örn: `panelClosed` ile `panelclosed` farklıdır.
4. **Kalıtımda (Inheritance) miras alınır**
    - Bir component başka bir component’ten extend edilirse, tanımlanan outputs’lar child class’a da geçer.
5. **Sadece component/directive property initializer içinde çağrılabilir**
    - `output()` fonksiyonunun Angular derleyicisi (compiler) için özel bir anlamı vardır.
    - Bu yüzden yalnızca component ve directive’lerin property initializer kısmında kullanılabilir.

**Angular’da Event Data Göndermek**

Bir custom event (`output`) sadece tetiklenmekle kalmaz, aynı zamanda **veri taşıyabilir**.

Bu sayede child component bir olay meydana geldiğinde parent component’e ilgili bilgiyi iletebilir.

`emit()` metodunu çağırırken parametre geçebilirsin:

```tsx
// Basit (primitive) bir değer göndermek
this.valueChanged.emit(7);

// Nesne (custom event object) göndermek
this.thumbDropped.emit({
  pointerX: 123,
  pointerY: 456,
});
```

Burada:

- `valueChanged` → bir sayısal değer gönderiyor.
- `thumbDropped` → X ve Y koordinatları olan bir nesne gönderiyor.

**Parent Component’te Veriyi Yakalamak**

Template içinde event’i dinlerken, Angular özel bir değişken sunar: **`$event`**

Bu değişken emit edilen değeri temsil eder.

```html
<custom-slider (valueChanged)="logValue($event)" />
```

- `valueChanged` tetiklendiğinde, emit edilen değer `$event` ile alınır.
- Eğer `emit(7)` çağrılmışsa `$event = 7`
- Eğer `emit({ pointerX: 123, pointerY: 456 })` çağrılmışsa `$event = { pointerX: 123, pointerY: 456 }`

**Örnek Kullanım**

**Child Component (`CustomSlider`):**

```tsx
@Component({...})
export class CustomSlider {
  valueChanged = output<number>();

  changeValue(newValue: number) {
    this.valueChanged.emit(newValue);
  }
}
```

**Parent Component (MediaControls):**

```html
<custom-slider (valueChanged)="onSliderChange($event)" />
```

```tsx
export class MediaControls {
  onSliderChange(value: number) {
    console.log("Yeni slider değeri:", value);
  }
}
```

**Angular’da Output İsimlerini Özelleştirme**

Normalde bir `output()` tanımladığında, event’in adı **property adıyla** aynı olur.

Ama bazen, bu ismi **template tarafında farklı** kullanmak isteyebilirsin.

Bunun için `output({ alias: '...' })` parametresini kullanabilirsin.

```tsx
@Component({/*...*/})
export class CustomSlider {
  changed = output({ alias: 'valueChanged' });
}
```

Burada:

- TypeScript kodunda property adı hâlâ `changed`
- Ama template tarafında `(valueChanged)` olarak kullanılabiliyor

**Parent Component Kullanımı**

```html
<custom-slider (valueChanged)="saveVolume()" />
```

Bu durumda:

- Angular `valueChanged` event’ini yakalar,
- Ama aslında `changed` isimli property’ye bağlıdır.

**Notlar**

- **Alias**, yalnızca **HTML template kullanımını** etkiler. TypeScript tarafında hâlâ orijinal property ismini (`changed`) kullanırsın.
- Bu özellik **çok sık kullanılmamalıdır**, çünkü component’in anlaşılmasını zorlaştırabilir.
- Ancak şu durumlarda faydalıdır:
    1. Mevcut bir property’nin ismini değiştirmek istediğinde, ama geriye dönük uyumluluğu korumak istiyorsan
    2. Native DOM event isimleriyle çakışma riskini önlemek istiyorsan (ör. `click`, `change` gibi)

**Subscribing to Outputs Programmatically**

Normalde Angular’da bir output event’ine **template üzerinden** `(eventName)="handler()"` şeklinde abone oluruz.

Ama bazen component’i **dinamik** olarak oluştururuz (`ViewContainerRef.createComponent` ile).

Bu durumda event binding’i template üzerinden yapamayız. İşte burada **programatik subscription** devreye girer.

**Örnek: Dinamik Component Oluşturma**

```tsx
const someComponentRef: ComponentRef<SomeComponent> =
  viewContainerRef.createComponent(SomeComponent);
```

Bu kod ile `SomeComponent` dinamik olarak ekrana yerleştirildi.

Şimdi `SomeComponent` içerisinde bir output event’i olduğunu varsayalım:

```tsx
@Component({...})
export class SomeComponent {
  someEventProperty = output<string>();
}
```

**Event’e Kod Üzerinden Abone Olma**

```tsx
someComponentRef.instance.someEventProperty.subscribe(eventData => {
  console.log("Event geldi:", eventData);
});
```

Burada:

- `someEventProperty` bir **output()**
- `.subscribe(...)` ile programatik olarak abone olabiliyoruz
- `eventData` parametresi `.emit()` ile gönderilen veriyi temsil ediyor

**Angular’ın Otomatik Cleanup Özelliği**

- Angular, **component yok edildiğinde (destroy)** o component’in output event subscriptionlarını otomatik temizler.
- Yani **memory leak riski** yoktur.

**Manuel Unsubscribe**

Bazı özel durumlarda event’ten elle çıkmak isteyebilirsin.

`subscribe` sana bir `OutputRefSubscription` döner. Bunun `.unsubscribe()` metodu vardır:

```tsx
const eventSubscription = someComponentRef.instance.someEventProperty.subscribe(data => {
  console.log(data);
});

// Daha sonra gerekli olduğunda:
eventSubscription.unsubscribe();
```

Bu yaklaşım, uzun ömürlü componentlerde veya lifecycle yönetimi yapılırken faydalıdır.

**`@Output` Dekoratörü ile Output Tanımlama**

Angular’da **custom event** tanımlamanın eski ve klasik yolu `@Output` dekoratörüdür.

Bu yöntem hala tam olarak destekleniyor ama Angular ekibi **yeni projeler için `output()` sinyal tabanlı API**’yi öneriyor.

**Basit Kullanım**

```tsx
@Component({/*...*/})
export class ExpandablePanel {
  @Output() panelClosed = new EventEmitter<void>();
}

```

Burada:

- `@Output()` → Angular’a bu property’nin bir **output event** olduğunu söyler.
- `EventEmitter<T>` → event’in taşıyacağı verinin tipini belirtir (`void` olursa veri göndermez).

Event’i **emit etmek** için:

```tsx
this.panelClosed.emit();

```

Template’te kullanımı:

```html
<expandable-panel (panelClosed)="savePanelState()" />

```

**Aliases with @Output**

Bir output event’ine **alias (takma ad)** verebilirsin.

Böylece template’te farklı bir isimle kullanılabilir.

```tsx
@Component({/*...*/})
export class CustomSlider {
  @Output('valueChanged') changed = new EventEmitter<number>();
}

```

Kullanımı:

```html
<custom-slider (valueChanged)="saveVolume()" />

```

📌 Dikkat:

Alias sadece **HTML template’teki ismi** değiştirir, TypeScript kodunda property’nin adı **`changed`** olarak kalır.

**Outputs’u @Component Dekoratöründe Tanımlama**

Bazı durumlarda `@Output` dekoratörü yerine doğrudan `@Component` içindeki `outputs` array’i kullanılabilir.

Özellikle **base class’tan miras alınan property**’leri output olarak göstermek istediğinde faydalıdır.

**Örnek: Miras ile gelen output**

```tsx
// BaseSlider sınıfında valueChanged isimli bir output var diyelim
@Component({
  /*...*/
  outputs: ['valueChanged'],
})
export class CustomSlider extends BaseSlider {}

```

Template’te:

```html
<custom-slider (valueChanged)="onValueChanged($event)" />

```

**Alias ile Kullanım**

Output’a alias vermek için `outputs` listesinde `propertyName: aliasName` yazılır:

```tsx
@Component({
  /*...*/
  outputs: ['valueChanged: volumeChanged'],
})
export class CustomSlider extends BaseSlider {}

```

Template’te:

```html
<custom-slider (volumeChanged)="onVolumeChanged($event)" />

```

Burada:

- Class içinde event adı hâlâ `valueChanged`
- Template’te ise `volumeChanged`

### Content Projection (İçerik Yansıtma) Nedir?

Angular’da bazen bir component oluştururuz ama bu component’in içine dışarıdan içerik eklenmesini isteriz.
Örneğin bir custom card bileşeni düşünelim. Card’ın genel görünümü hep aynı olacak ama içine konulacak yazı, buton veya görsel farklı olabilir.

İşte bu noktada Angular bize `<ng-content>` adlı özel bir yapı sunar.

- <ng-content> → dışarıdan gönderilen içeriğin yansıtılacağı bir placeholder.
- Önemli nokta: <ng-content> kendisi DOM’a bir element eklemez. Sadece “buraya dışarıdan içerik gelecek” der.

```ts
@Component({
  selector: 'custom-card',
  template: `
    <div class="card-shadow">
      <ng-content></ng-content>
    </div>
  `
})
export class CustomCard {}
```

```html
<custom-card>
  <h3>Başlık</h3>
  <p>Bu içerik dışarıdan geldi.</p>
</custom-card>
```

```html
<custom-card>
  <div class="card-shadow">
    <h3>Başlık</h3>
    <p>Bu içerik dışarıdan geldi.</p>
  </div>
</custom-card>
```

#### Çoklu Content Kullanımı

Bazen card’ın farklı bölümlerine farklı içerikler koymak isteriz.
Örneğin: bir başlık alanı, bir gövde alanı olsun.

```ts
@Component({
  selector: 'custom-card',
  template: `
    <div class="card-shadow">
      <header class="card-header">
        <ng-content select="[card-title]"></ng-content>
      </header>
      <section class="card-body">
        <ng-content select="[card-body]"></ng-content>
      </section>
    </div>
  `
})
export class CustomCard {}
```

```html
<custom-card>
  <h2 card-title>Yapılacaklar</h2>
  <p card-body>Bugün Angular çalışılacak.</p>
</custom-card>
```

```html
<custom-card>
  <div class="card-shadow">
    <header class="card-header">
      <h2 card-title>Yapılacaklar</h2>
    </header>
    <section class="card-body">
      <p card-body>Bugün Angular çalışılacak.</p>
    </section>
  </div>
</custom-card>
```

- `<ng-content>` component’in kendi şablonunun bir parçasıdır, ama DOM’a doğrudan bir element eklemez.

- İçerik her zaman build-time’da Angular compiler tarafından işlenir. Runtime’da ng-content eklenip çıkarılamaz.

- `<ng-content>` üzerine ngIf, ngFor, ngSwitch gibi yapılar koyamazsın. (Bunun yerine @if, @for gibi template fragments kullanılır.)

### Component Lifecycle

Angular component veya directive’ler, oluşturulma → değişim → yok edilme süreçlerinde farklı aşamalardan geçer.

Her aşamada Angular bize Lifecycle Hook metodları sunar. Bu metodlar sayesinde component’in yaşam döngüsüne müdahale edebiliriz.

#### Angular Component Lifecycle Aşamaları

1. Oluşturulma (Creation)
  - Angular component’i belleğe alır, constructor çalışır.
  - Component’in @Input() değerleri atanır.
  - Template parse edilir, HTML oluşturulur.
  - Bu aşamada ngOnInit ve ngAfterViewInit devreye girer.

2. Değişim (Change Detection)

  - @Input() değerleri değişirse, Angular bunu fark eder.
  - Değişiklikleri yakalamak için ngOnChanges kullanılır.
  - Template içindeki data binding’ler güncellenir.

3. Görünüm Güncellenmesi (View Update)
  - DOM render edilir.
  - View veya içerik (child componentler, ng-content) güncellenebilir.
  - Bu aşamada ngAfterContentChecked, ngAfterViewChecked gibi hook’lar çalışır.

4. Yok edilme (Destruction)
  - Component DOM’dan kaldırılır.
  - Angular ngOnDestroy hook’unu çağırır.
  - Bu noktada temizlik (unsubscribe, timer temizliği, eventListener kaldırma) yapılır.

#### Lifecycle Hookları

1. `constructor()`
  - TypeScript’in class constructor’ıdır.
  - Component instance’ı oluşturulurken çağrılır.
  - Data injection (Dependency Injection) yapılır.
  - Ancak DOM hazır değildir. @Input() değerleri de henüz tam olarak alınmamış olabilir.
  - Kullanım:
    - Servis enjeksiyonu
    - İlk değer atamaları
    - Amaç dışı: API çağrısı veya DOM erişimi (çünkü component henüz yüklenmemiştir).


2. `ngOnChanges(changes: SimpleChanges)`
  - @Input() değerleri her değiştiğinde çalışır.
  - changes parametresi, değişen property’lerin eski ve yeni değerlerini içerir.
  - Component ilk kez render edilirken de çağrılır.
  - Kullanım:
    - @Input() ile gelen verilere tepki vermek
    - Parent → Child veri değişimlerini yakalamak

  - Örnek:
  ```ts
  ngOnChanges(changes: SimpleChanges) {
    if (changes['todoItem']) {
      console.log("Todo değişti:", changes['todoItem'].currentValue);
    }
  }
  ```

3. `ngOnInit()`

   * Component ilk kez initialize edildiğinde (constructor + input binding tamamlandıktan sonra) çağrılır.

   * En çok kullanılan hook’tur.

   * Sadece bir kere çalışır.

   * Kullanım:

     * API çağrıları (ilk data çekme)
     * Başlangıç ayarları
     * @Input() değerleri üzerinden işleme başlama

   * Örnek:

   ```ts
   ngOnInit() {
     this.loadTodos();
   }
   ```

4. `ngDoCheck()`

   * Angular’ın change detection mekanizması çalıştığında çağrılır.
   * Çok sık (her CD cycle’da) tetiklenir.
   * Performans maliyetli olabilir.
   * Kullanım:

     * Angular’ın fark etmediği (derin nesne değişimleri gibi) değişiklikleri kontrol etmek
     * Custom change detection


5. `ngAfterContentInit()`

   * `<ng-content>` ile component içine dışarıdan içerik (projection) eklendikten sonra çalışır.
   * Sadece bir kez çağrılır.
   * Kullanım:

     * Projected content üzerinde ilk ayarları yapmak

6. `ngAfterContentChecked()`

   * İçerik (`ng-content`) her değiştiğinde çağrılır.
   * `ngAfterContentInit`’ten sonra tekrar tekrar çalışabilir.
   * Kullanım:

     * Projected content değişimlerini kontrol etmek

7. `ngAfterViewInit()`

   * Component’in template’i ve child componentleri DOM’a render edildikten sonra çalışır.

   * Sadece bir kez çalışır.

   * Kullanım:

     * `ViewChild` / `ViewChildren` ile DOM elementlerine erişmek
     * 3rd party kütüphane (chart, map, slider vb.) init etmek

   * Örnek:

   ```ts
   @ViewChild('inputRef') inputElement!: ElementRef;

   ngAfterViewInit() {
     this.inputElement.nativeElement.focus();
   }
   ```

8. `ngAfterViewChecked()`

   * View (component + child componentler) her güncellemeden sonra çağrılır.
   * Sık tetiklenebilir, performans maliyetli olabilir.
   * Kullanım:

     * View güncellemeleri sonrası yapılacak kontroller
     * Çok dikkatli kullanılmalı

9. `ngOnDestroy()`

   * Component DOM’dan kaldırılmadan hemen önce çağrılır.

   * Temizlik işleri yapılır.

   * Kullanım:

     * Subscription’ları unsubscribe etmek
     * `setInterval`, `setTimeout` temizlemek
     * Event listener kaldırmak

   * Örnek:

   ```ts
   private subscription!: Subscription;

   ngOnInit() {
     this.subscription = this.todoService.todos$.subscribe();
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
   ```

---


## Signal

### Signal Türleri

Angular’da, **state (durum)** oluşturmak ve yönetmek için **signal** kullanırsın. Bir **signal** , bir değerin etrafına sarılmış hafif (lightweight) bir yapıdır.

**Signal**, bir değerin etrafını saran ve bu değer değiştiğinde ilgili tüketicileri (consumers) bilgilendiren bir yapıdır.

Signal’ler **primitif değerlerden karmaşık veri yapılarına** kadar herhangi bir değeri içerebilir.

- Signal’in değerini okumak için **getter fonksiyonunu** çağırırsınız. Bu sayede Angular, signal’in nerelerde kullanıldığını takip edebilir.
- Signal’ler **yazılabilir (writable)** veya **salt okunur (read-only)** olabilir.

```tsx
import {signal} from '@angular/core';
// Create a signal with the `signal` function.
const firstName = signal('Morgan');
// Read a signal value by calling it— signals are functions.
console.log(firstName());
// Change the value of this signal by calling its `set` method with a new value.
firstName.set('Jaime');
// You can also use the `update` method to change the value
// based on the previous value.
firstName.update(name => name.toUpperCase());
```

- Writable Signals: değerini doğrudan güncellemek için bir API sağlar. Writable signal’ler, **`signal`** fonksiyonunu çağırarak ve başlangıç değerini vererek oluşturulur, tipleri `WritableSignal` olarak geçer:
    
    ```tsx
    const count = signal(0);
    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + count());
    ```
    
    Bir writable signal’in değerini değiştirmek için iki yöntem vardır:
    
    1. **.set()** → Değeri doğrudan ayarlamak için:
        
        ```tsx
        count.set(3);
        ```
        
    2. **.update()** → Önceki değere göre yeni bir değer hesaplamak için:
        
        ```tsx
        // Increment the count by 1.
        count.update(value => value + 1);
        ```
        
- Computed Signals: **Computed signal**, yalnızca okunabilen (read-only) signal’lerdir ve değerlerini **diğer signal’lerden türetirler**. **`computed`** fonksiyonu ile ve bir **derivation (türetilme)** belirterek tanımlanır.
    
    ```tsx
    const count: WritableSignal<number> = signal(0);
    const doubleCount: Signal<number> = computed(() => count() * 2);
    ```
    
    **`doubleCount` signal’i, `count` signal’ine bağlıdır. `count` her güncellendiğinde, Angular `doubleCount`’un da güncellenmesi gerektiğini bilir.** Yani **computed signal**, bağımlı olduğu signal değiştiğinde otomatik olarak kendini günceller.
    
    - Computed signal’ler **tembel (lazy) bir şekilde değerlendirilir** ve **önbelleğe alınır (memoized)**.
    - Örneğin `doubleCount` signal’inin türetme (derivation) fonksiyonu, değeri **ilk kez okunana kadar çalışmaz**.
    - Değer hesaplandıktan sonra **önbelleğe alınır**. Aynı değeri tekrar okuduğunuzda, yeniden hesaplanmaz; önbellekten gelir.
    - Computed signal’ler içinde **ağır hesaplamaları güvenle yapabilirsiniz**.

### Effects Kullanımı

- **Signal’lar değiştiğinde tetiklenen yan etkiler (side effects)** oluşturmanı sağlar.
- `effect(() => { ... })` fonksiyonu içinde sinyal okuduğunda, Angular bu sinyali **dependency** olarak kaydeder.
- O sinyalin değeri değiştiğinde → effect tekrar çalışır.
- Her zaman **en az 1 kez** çalışır (ilk tanımlandığında).
- **Asenkron** çalışır, yani Angular’ın change detection döngüsü sırasında tetiklenir.

```tsx
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

**Effects’in kullanım alanları**

- **Debugging / Analytics** → Kullanıcı hangi verileri ne zaman değiştirdi?
- **localStorage senkronizasyonu** → Signal değiştiğinde otomatik kaydet.
- **Custom DOM manipülasyonu** → Angular şablonuyla yapılamayan özel işlemler.
- **3rd party UI** → Örn. Chart.js, D3.js, Canvas API ile çizim yapmak.

**Effects ne zaman kullanılmamalı?**

- **State güncellemek için** (başka bir signal’in değerini değiştirmek için) effect kullanma.
- Çünkü effect her çalıştığında başka bir signal güncellerse → bu da effect’in tekrar tetiklenmesine yol açabilir.
    - Bu durumda:
        - **Sonsuz döngü (infinite loop)**
        - **ExpressionChangedAfterItHasBeenChecked hataları**
        - Gereksiz change detection tetiklenmeleri olur.

### Injection Context

**Effect injection context nedir?**

- Angular’da `effect()` **her yerde** çağrılamaz.
- Bunun sebebi, Angular’ın effect’leri **lifecycle ve change detection** sürecine bağlamasıdır.
- Yani Angular’ın bilmesi gerekiyor: *“Bu effect hangi component/directive/service’e bağlıdır?”*
- İşte buna **injection context** deniyor.

**Nerelerde injection context vardır?**

- Component constructor’ı
- Directive constructor’ı
- Service constructor’ı

Bu yüzden en basit yöntem: `effect()`’i **constructor içinde** oluşturmak.

```tsx
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    });
  }
}
```

effect bir class field’a da atanabilir. Bu durumda effect’in işlevi daha rahat anlaşılabilir.

```tsx
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  private loggingEffect = effect(() => {
    console.log(`The count is: ${this.count()}`);
  });
}
```

Constructor dışında kullanmak (Injector ile):

```tsx
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  private injector = inject(Injector);
  initializeLogging(): void {
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    }, {injector: this.injector});
  }
}
```

Burada `injector` parametresi sayesinde, Angular bu effect’in hangi context’e bağlı olduğunu öğreniyor.

### Effect LifeCycle

Normal davranış

- Angular’da bir `effect()` tanımladığında, o effect **hangi context’te** (component, directive, service) oluşturulduysa, context yok edilince (destroy) **otomatik olarak** temizlenir.
    
    Örneğin bir component kapandığında, onun içindeki tüm effect’ler de **otomatik yok olur**.
    
    Bu sayede **memory leak (bellek sızıntısı)** riski ortadan kalkar.
    

Manuel yok etme (EffectRef)

- Her `effect()` çağrısı aslında bir `EffectRef` döner.
- Bunun üzerinde `.destroy()` metodu vardır → istediğin zaman effect’i **manuel** olarak durdurabilirsin.

```tsx
@Component({...})
export class CounterComponent {
  count = signal(0);

  private counterEffect = effect(() => {
    console.log(`Count is: ${this.count()}`);
  });

  stopEffect() {
    this.counterEffect.destroy();
  }
}
```

Burada `stopEffect()` çağrıldığında artık `count` değişse bile `console.log` çalışmaz.

`manualCleanup` seçeneği

- Eğer bir effect **otomatik yok olmasın**, sadece sen `.destroy()` dediğinde yok olsun istiyorsan → `manualCleanup: true` kullanılır:

```tsx
@Component({...})
export class CounterComponent {
  count = signal(0);

  private loggingEffect = effect(
    () => {
      console.log(`Count is: ${this.count()}`);
    },
    { manualCleanup: true }
  );

  ngOnDestroy() {
    // Elle temizlemeyi unutma yoksa memory leak olur!
    this.loggingEffect.destroy();
  }
}
```

Burada Angular component’i destroy ettiğinde **effect otomatik kapanmaz**, senin `.destroy()` demen gerekir. Bu yüzden **çok dikkatli kullanılmalı**.

### LinkedSignal

- **`signal` gibi mutable** (yani `.set()` edebilirsin).
- Ama aynı zamanda **başka sinyallere bağlıdır** (yani `computed` gibi).
- Eğer bağlı olduğu sinyal(ler) değişirse, sen `.set()` etmesen bile kendini günceller.
- Böylece **state’in her zaman geçerli (valid) kalır**.

```tsx
@Component({/* ... */})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();
  // Initialize selectedOption to the first shipping option.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);
  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
}

const shippingOptions = signal(['Ground', 'Air', 'Sea']);
const selectedOption = linkedSignal(() => shippingOptions()[0]);
console.log(selectedOption()); // 'Ground'
selectedOption.set(shippingOptions()[2]);
console.log(selectedOption()); // 'Sea'
shippingOptions.set(['Email', 'Will Call', 'Postal service']);
console.log(selectedOption()); // 'Email'
```

Yeni davranış (source + computation)

Burada `linkedSignal` bir **konfigürasyon objesi** alıyor:

```tsx
interface ShippingMethod {
  id: number;
  name: string;
}
@Component({/* ... */})
export class ShippingMethodPicker {
  constructor() {
    this.changeShipping(2);
    this.changeShippingOptions();
    console.log(this.selectedOption()); // {"id":1,"name":"Sea"}
  }
  shippingOptions = signal<ShippingMethod[]>([
    { id: 0, name: 'Ground' },
    { id: 1, name: 'Air' },
    { id: 2, name: 'Sea' },
  ]);
  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    // `selectedOption` is set to the `computation` result whenever this `source` changes.
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      // If the newOptions contain the previously selected option, preserve that selection.
      // Otherwise, default to the first option.
      return (
        newOptions.find((opt) => opt.name === previous?.value.name) ?? newOptions[0]
      );
    },
  });
  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
  changeShippingOptions() {
    this.shippingOptions.set([
      { id: 0, name: 'Email' },
      { id: 1, name: 'Sea' },
      { id: 2, name: 'Postal Service' },
    ]);
  }
}
```

- **`source`** → `shippingOptions` sinyali.
- **`computation`** → `newOptions` (yeni gelen liste) ve `previous` (önceki seçilen değer) parametreleriyle çalışıyor.

Buradaki mantık:

1. Yeni gelen listede kullanıcı daha önce seçtiği ID varsa → onu **koru**.
2. Yoksa → **ilk elemana fallback** yap.

Örnek Davranış Modeli:

```tsx
// Başlangıç shippingOptions
[
  { id: 0, name: 'Ground' },
  { id: 1, name: 'Air' },
  { id: 2, name: 'Sea' }
]

// Kullanıcı "Sea" seçti
selectedOption = { id: 2, name: "Sea" }

// shippingOptions değişiyor
[
  { id: 0, name: 'Email' },
  { id: 1, name: 'Sea' },
  { id: 2, name: 'Postal Service' }
]

// computation kontrol ediyor: önceki değer "Sea" yeni listede var mı? ✅
// O zaman "Sea" seçili kalıyor
```

Angular **her set() çağrısında veya computation sonucu değiştiğinde** linkedSignal’in değerini yeni değerle karşılaştırır.

- Eğer **farklıysa** → downstream (yani bu linkedSignal’i kullanan computed’lar, effect’ler, template’ler) tetiklenir.
- Eğer **aynıysa** → değişiklik yayılmaz, performans korunur.

Varsayılan karşılaştırma **referans eşitliği (`===`)**’dir.

Ama sen `equal` fonksiyonunu vererek "eşitlik" tanımını değiştirebilirsin.

```tsx
const activeUser = signal({id: 123, name: 'Morgan', isAdmin: true});
const activeUserEditCopy = linkedSignal(() => activeUser(), {
  // Consider the user as the same if it's the same `id`.
  equal: (a, b) => a.id === b.id,
});
// Or, if separating `source` and `computation`
const activeUserEditCopy = linkedSignal({
  source: activeUser,
  computation: user => user,
  equal: (a, b) => a.id === b.id,
});
```

## Templates

Template (Şablon) nedir?

Angular’daki **template**, temel olarak **HTML** üzerine kurulur ama ekstra özellikler içerir:

- **Data binding** → Component içindeki verileri template’e bağlama
- **Event listening** → Kullanıcı etkileşimlerini dinleme (click, input vb.)
- **Variables** → Geçici değişkenler tanımlama
- **Control flow** → Koşul ve döngü mantıkları (`ngIf`, `ngFor`)

Angular, bu template’leri derleyerek **JavaScript koduna çevirir**. Bunun faydaları:

- Template’lerin daha hızlı çalışması
- Angular’ın **otomatik render optimizasyonları** yapabilmesi

Standard HTML’den farkları

1. **Yorumlar**
    - Template içindeki `<!-- yorum -->` HTML çıktısına dahil edilmez.
2. **Component ve directive elementleri**
    - Self-close edilebilir: `<UserProfile />`
3. **Özel karakterler**
    - `[]`, `()` gibi karakterler Angular için özel anlam taşır (binding ve event listener).
4. **@ karakteri**
    - Angular’da dinamik davranış ekler (`@if`, `@for` gibi kontrol yapıları)
    - Literal `@` kullanmak için `&commat;` veya `&#64;` yazılır
5. **Boşluklar**
    - Angular gereksiz boşlukları otomatik olarak yok sayar veya birleştirir
6. **Yer tutucu comment node’lar**
    - Dinamik içerik için Angular sayfaya comment node ekleyebilir, ama geliştirici bunu görmezden gelebilir
7. **Desteklenmeyen HTML elementleri**
    - `<script>` gibi elementler Angular template’lerinde desteklenmez

## Dependency Injection

### Angular’da Dependency Injection (DI)

**Dependency Injection (Bağımlılık Enjeksiyonu)** Angular’ın temel kavramlarından biridir.

Angular’ın yapısına gömülüdür ve şu yapılarda bağımlılıkların yönetilmesini sağlar:

- **Component**
- **Directive**
- **Pipe**
- **Injectable (Service)**

Bu yapıların ihtiyaç duyduğu bağımlılıkları Angular **otomatik olarak enjekte eder**.

---

**DI Sisteminde İki Rol**

1. **Dependency Consumer (Bağımlılığı Tüketen)**
    - Bir **class** veya Angular yapısıdır.
    - Çalışmak için başka bir servise veya objeye ihtiyaç duyar.
    - Örneğin bir `Component`, bir `Service` kullanmak istediğinde bağımlılık tüketici olur.
2. **Dependency Provider (Bağımlılığı Sağlayan)**
    - İhtiyaç duyulan bağımlılığı sağlayan taraftır.
    - Genellikle `@Injectable()` ile işaretlenmiş **Service** sınıflarıdır.
    - Sağlayıcıyı Angular’a tanıtmak için `providers` kullanılır.

---

**Injector Nedir?**

Angular’da **Consumer** ile **Provider** arasındaki bağlantıyı sağlayan şey **Injector**’dür.

- Bir **consumer** (örn. component) bağımlılık ister → `constructor(private service: MyService) {}`
- Angular’ın **injector** mekanizması devreye girer.
- Injector önce kendi **registry (kayıt defteri)** içinde bu bağımlılık var mı diye kontrol eder.
    - Eğer **varsa** → mevcut instance verilir.
    - Eğer **yoksa** → yeni bir instance oluşturulur ve kayda eklenir.

📌 Bu sayede aynı servisin farklı componentlerde tekrar tekrar new’lenmesine gerek kalmaz.

---

**Root Injector**

- Angular uygulaması **başlatıldığında (bootstrap)** otomatik olarak bir **root injector** oluşturur.
- Bu root injector tüm uygulamaya yayılır.
- Çoğu durumda senin manuel olarak injector oluşturman gerekmez, çünkü Angular bu işi senin için yapar.

---

**Dependency Türleri**

Sadece class’lar değil:

- Fonksiyonlar
- Objeler
- String veya Boolean gibi primitive tipler
- Hatta başka herhangi bir tip

de Angular’da **dependency** olarak tanımlanıp enjekte edilebilir.

📌 Bunun için **Dependency Providers** kullanılır (ör. `useValue`, `useClass`, `useFactory`, `useExisting`).

### Angular’da Dependency (Bağımlılık) Sağlama

Bir sınıfı (ör. **HeroService**) başka bir yerde bağımlılık olarak kullanabilmek için önce bu sınıfı **DI (Dependency Injection)** sistemine tanıtmamız gerekir. Bunun için şu adımlar izlenir:

---

**1. `@Injectable` ile işaretleme**

Bir sınıfın **injectable (enjekte edilebilir)** olduğunu belirtmek için `@Injectable()` dekoratörü eklenir:

```tsx
@Injectable()
class HeroService {}

```

Bu, Angular’a bu sınıfın bir **bağımlılık olarak enjekte edilebileceğini** bildirir.

---

**2. Dependency (Servis) Sağlama Yöntemleri**

Bir bağımlılık (ör. `HeroService`) farklı seviyelerde **provider** olarak tanımlanabilir:

**Tercih edilen yöntem: `providedIn: 'root'`**

- `@Injectable` içine `providedIn` eklenir:

```tsx
@Injectable({
  providedIn: 'root'
})
class HeroService {}

```

- Bu durumda Angular uygulama için **tek bir global instance** oluşturur.
- Tüm uygulamada kullanılabilir.
- Kullanılmayan servisler **tree-shaking** sayesinde otomatik olarak uygulamadan atılır (bundle küçülür).
- En iyi uygulama (best practice) budur.

---

**📍 Component seviyesinde sağlama**

- Servisi sadece belirli bir component ve onun alt componentleri için kullanılabilir hale getiririz.

```tsx
@Component({
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}

```

- Bu durumda:
    - `HeroListComponent` oluşturulduğunda **yeni bir HeroService instance’ı** oluşur.
    - Her yeni component örneği kendi servis kopyasını alır.
- **Not:** Bu yöntem kullanıldığında, servis her durumda uygulamaya dahil edilir (kullanılsın veya kullanılmasın).

---

**📍 ApplicationConfig ile sağlama**

- Angular 15+ ile gelen **standalone uygulamalar** için kullanılan yöntemdir.
- `bootstrapApplication` fonksiyonuna geçirilen `ApplicationConfig` içinde `providers` tanımlanır.

```tsx
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HeroService },
  ]
};

```

`main.ts` içerisinde:

```tsx
bootstrapApplication(AppComponent, appConfig);

```

- Bu sayede servis, tüm uygulama genelinde kullanılabilir hale gelir.
- **Not:** Bu yöntemle tanımlanan servisler her zaman uygulamaya dahil edilir (tree-shaking avantajı yok).

---

**📍 NgModule tabanlı uygulamalarda sağlama**

- `@NgModule` içerisindeki `providers` alanında servis sağlanabilir.

```tsx
@NgModule({
  declarations: [AppComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

- Bu durumda servis, **ilgili modüldeki tüm component/directive/pipe’larda** kullanılabilir.
- Eğer başka modüllerle paylaşılıyorsa aynı **ModuleInjector** üzerinden paylaşılır.
- Daha karmaşık senaryolarda **Hierarchical Injectors** (hiyerarşik enjektörler) devreye girer.

### **Angular’da Bağımlılık Enjeksiyonu (Injecting/Consuming a Dependency)**

Bir servisi (veya başka bir dependency’yi) kullanabilmek için Angular’ın sunduğu **`inject` fonksiyonunu** kullanırız.

---

**1. `inject` Fonksiyonunun Kullanımı**

Angular’ın `inject` fonksiyonu, bir bağımlılığı **Injector** üzerinden alır.

Örnek:

```tsx
import { inject, Component } from '@angular/core';

@Component({/* ... */})
export class UserProfile {
  // Property initializer içinde kullanılabilir
  private userClient = inject(UserClient);

  constructor() {
    // Constructor içinde de kullanılabilir
    const logger = inject(Logger);
  }
}

```

---

**2. Nerelerde Kullanılır?**

- Çoğunlukla şu yapılarda bağımlılık almak için kullanılır:
    - **Component**
    - **Directive**
    - **Service**
    - **Pipe**
- Kullanım yerleri:
    - Sınıfın **property initializer** kısmında
    - Sınıfın **constructor**’ında

---

**3. Angular’ın Çalışma Mantığı**

1. Angular, bir component’in (veya başka sınıfın) **hangi servislere ihtiyaç duyduğunu** keşfeder.
2. **Injector**’da bu servisin hazır bir instance’ı olup olmadığını kontrol eder.
    - Eğer varsa → doğrudan o instance kullanılır.
    - Eğer yoksa → Angular, registered provider kullanarak **yeni bir instance** oluşturur.
    - Yeni oluşturulan instance Injector’a eklenir ve tekrar gerektiğinde oradan kullanılır.
3. Tüm bağımlılıklar çözüldükten sonra Angular, component’in **constructor’unu çağırır** ve gerekli servisleri enjekte eder.

![image.png](image%201.png)

### Injectable Service nedir?

- **Service** → Tek bir sorumluluğu olan, tekrar kullanılabilir sınıflardır.
- Örneğin:
    - Todo ekleme/silme/güncelleme işlemleri (`TodoService`)
    - Sunucudan veri çekme (`ApiService`)
    - Kullanıcı oturum yönetimi (`AuthService`)
    - Loglama (`LoggerService`)

Bu sayede:

- Component → sadece **görsel (UI) işlerle ilgilenir**
- Service → **iş mantığı (business logic) ve veri yönetimiyle ilgilenir**

```tsx
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // root seviyesinde tekil instance olarak sağlanır
})
export class TodoService {
  private todos: string[] = [];

  getTodos(): string[] {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

```

```tsx
import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2>Todo List</h2>
    <ul>
      <li *ngFor="let todo of todos">{{ todo }}</li>
    </ul>
    <input [(ngModel)]="newTodo" placeholder="Add todo" />
    <button (click)="addTodo()">Add</button>
  `
})
export class TodoListComponent {
  todos: string[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }
}

```

**Neden önemli?**

1. **Tekrar kullanılabilirlik** → Aynı servisi birden fazla component kullanabilir.
2. **Test edilebilirlik** → Service bağımsız test edilebilir.
3. **Daha temiz kod** → Component sadece UI ile ilgilenir.
4. **Kolay değiştirilebilirlik** → Farklı senaryolarda farklı servis sağlayıcıları kullanılabilir.

**Service Oluşturma**

Angular CLI ile `TodoService` oluşturuyoruz:

```bash
ng generate service todos/todo
```

Bu komut şu dosyayı oluşturur: **src/app/todos/todo.service.ts. Örnek olarak servisi oluşturalım:**

```tsx
import { Injectable } from '@angular/core';
import { TODOS } from './mock-todos';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = TODOS;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  updateTodo(updated: Todo): void {
    this.todos = this.todos.map(t => t.id === updated.id ? updated : t);
  }
}

```

Sahte veriler (Mock) oluşturarak bu servisi kullanabiliriz.

```tsx
import { Todo, TodoStatus, TodoPriority } from './todo.model';

export const TODOS: Todo[] = [
  {
    id: '1',
    title: 'Learn Angular Services',
    description: 'Understand how dependency injection works',
    status: TodoStatus.InProgress,
    priority: TodoPriority.High,
    parentId: null,
    dueDate: new Date('2025-08-30'),
    createdAt: new Date(),
    tags: ['angular', 'learning']
  },
  {
    id: '2',
    title: 'Build Todo App',
    description: 'Use Angular components and services',
    status: TodoStatus.Pending,
    priority: TodoPriority.Medium,
    parentId: null,
    dueDate: new Date('2025-09-01'),
    createdAt: new Date(),
    tags: ['project', 'practice']
  }
];

```

**Service İçinde Başka Service Kullanma**

Bir Logger Service oluşturarak bunu TodoService içerisinde kullanabiliriz:

```tsx
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log('[LoggerService]:', message);
  }
}
```

`inject` fonksiyonunu kullanarak servisleri farklı servisler ve componentler içerisinde kullanabiliriz:

```tsx
import { Injectable, inject } from '@angular/core';
import { TODOS } from './mock-todos';
import { Todo } from './todo.model';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = TODOS;
  private logger = inject(LoggerService);

  getTodos(): Todo[] {
    this.logger.log('Fetching todos...');
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.logger.log(`Adding todo: ${todo.title}`);
    this.todos.push(todo);
  }
}
```

### Provider Token Mantığı

Angular’da provider tanımlarken `provide` anahtarına **token** veriyoruz. Bu token genelde bir class oluyor (örn: `LoggerService`), ama illa class olmak zorunda değil. Bu token üzerinden hangi değerle eşleneceğini de `useClass`, `useExisting`, `useValue` veya `useFactory` ile belirliyoruz.

**Class Providers: `useClass`**

`LoggerService` yerine alternatif bir implementasyon (ör. `BetterLoggerService`) kullanmak istediğini düşünelim.

```tsx
@Injectable()
export class LoggerService {
  log(message: string) {
    console.log('Default Logger:', message);
  }
}

@Injectable()
export class BetterLoggerService extends LoggerService {
  override log(message: string) {
    console.log('✨ Better Logger:', message.toUpperCase());
  }
}
```

👉 App module ya da component’te:

```tsx
providers: [
  { provide: LoggerService, useClass: BetterLoggerService }
]
```

Artık `inject(LoggerService)` çağıran her yerde `BetterLoggerService` instance’ı gelir.

**Alias Providers: `useExisting`**

Diyelim ki `TodoLoggerService` diye özel bir logger yazdın. Ama `LoggerService` isteyenler de aynı objeyi alsın istiyorsun.

```tsx
@Injectable()
export class TodoLoggerService {
  log(message: string) {
    console.log('[Todo Log]', message);
  }
}
```

👉 Provider:

```tsx
providers: [
  TodoLoggerService,
  { provide: LoggerService, useExisting: TodoLoggerService }
]
```

⚠️ Eğer `useClass` kullansaydın, **iki ayrı instance** yaratılırdı. `useExisting` ise aynı objeyi paylaşır.

**Factory Providers: `useFactory`**

Diyelim ki `TodoService` sadece **authorized** kullanıcı için gizli task’leri gösteriyor.

```tsx
@Injectable()
export class TodoService {
  constructor(private logger: LoggerService, private isAuthorized: boolean) {}

  getTodos() {
    const state = this.isAuthorized ? 'authorized' : 'guest';
    this.logger.log(`Fetching todos for ${state}`);
    return this.isAuthorized
      ? TODOS
      : TODOS.filter(todo => !todo.isPrivate);
  }
}
```

👉 Factory tanımı:

```tsx
//todo.service.provider.ts
export function todoServiceFactory(
  logger: LoggerService,
  userService: UserService
) {
  return new TodoService(logger, userService.user.isAuthorized);
}

export const todoServiceProvider = {
  provide: TodoService,
  useFactory: todoServiceFactory,
  deps: [LoggerService, UserService]
};
```

👉 Module’de:

```tsx
providers: [todoServiceProvider]
```

Böylece `UserService`’ten gelen authorization bilgisine göre `TodoService` instance’ı üretilir.

**Value Providers: `useValue`**

Bunu en çok **config** veya **sabit değerler** için kullanıyoruz.

```tsx
export const APP_CONFIG = {
  appName: 'Todo Application',
  version: '2.0',
  allowGuests: true
};
```

👉 Provider:

```tsx
providers: [
  { provide: 'AppConfig', useValue: APP_CONFIG }
]
```

👉 Component içinde:

```tsx
import { inject } from '@angular/core';

@Component({...})
export class TodoListComponent {
  private config = inject<any>('AppConfig');

  ngOnInit() {
    console.log(this.config.appName); // "Todo Application"
  }
}
```

**InjectionToken**

- **Class** tabanlı servislerde → sınıfın kendisi provider token olur (`LoggerService`, `TodoService` gibi).
- Ama **interface** veya **sabit değer** (config objesi, string, boolean vs.) için → runtime’da TypeScript interface yok olur, Angular da bunu token olarak kullanamaz.
- Bu durumda `InjectionToken` kullanıyoruz.

```tsx
//app.config.ts
import { InjectionToken } from '@angular/core';

export interface TodoAppConfig {
  appName: string;
  maxTodos: number;
  allowGuests: boolean;
}

export const TODO_APP_CONFIG = new InjectionToken<TodoAppConfig>('todo.app.config');
```

```tsx
//app.module.ts
import { InjectionToken } from '@angular/core';

export interface TodoAppConfig {
  appName: string;
  maxTodos: number;
  allowGuests: boolean;
}

export const TODO_APP_CONFIG = new InjectionToken<TodoAppConfig>('todo.app.config');

```

```tsx
//todo-list.component.ts
import { Component, inject } from '@angular/core';
import { TODO_APP_CONFIG, TodoAppConfig } from '../app.config';

@Component({
  selector: 'app-todo-list',
  template: `<h2>{{ title }}</h2>`
})
export class TodoListComponent {
  private config = inject(TODO_APP_CONFIG);
  title = this.config.appName;
}
```

### Injection Context Nedir?

Injection context, Angular’ın **hangi injector’un** (provider’ları resolve eden mekanizma) aktif olduğunu bildiği çalışma anıdır.

Böylece `inject(SomeService)` dediğinde Angular hangi instance’ı vermesi gerektiğini bilir.

**Class Constructors ve Injection Context**

- Angular, bir **class’ı (component, service, directive vs.)** instantiate ettiğinde bunu **injection context** içinde yapar.
- Yani constructor çalıştığında, Angular DI sistemi aktif olur ve `inject()` kullanılabilir.
- Bu sayede class içindeki herhangi bir dependency’yi doğrudan alabilirsin.

```tsx
@Injectable()
export class Service1 {
  log() { console.log('Service1 log'); }
}

@Injectable()
export class Service2 {
  log() { console.log('Service2 log'); }
}

@Component({...})
export class MyComponent  {
  private service1: Service1;
  private service2: Service2 = inject(Service2); // field initializer, injection context var

  constructor() {
    this.service1 = inject(Service1); // constructor içinde de injection context var
  }

  testServices() {
    this.service1.log(); // Service1 log
    this.service2.log(); // Service2 log
  }
}
```

## Routers

### Angular’da Route (Rota) Nedir?

Angular’da **rota**, bir **URL yolunu (path)** belirli bir **component** ile eşleştiren bir nesnedir.

Yani kullanıcı tarayıcıda bir adrese girdiğinde, hangi component’in ekranda gösterileceğini Angular Router belirler.

```tsx
import { AdminPage } from './app-admin/app-admin.component';
const adminPage = {
  path: 'admin',
  component: AdminPage
}
```

**Angular’da Route Yönetimi**

Uygulamalarda genelde **tüm rotalar (routes)** tek bir dosyada tanımlanır. Bu dosya Angular CLI ile oluşturulan projelerde varsayılan olarak: `src/app/app.routes.ts` içerisinde bulunur.

```tsx
import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page.component';
import { AdminPage } from './about-page/admin-page.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'admin',
    component: AdminPage,
  },
];
```

**Angular’da Router’ı Uygulamaya Ekleme**

Angular uygulamasını başlatırken (`bootstrap` aşamasında), bir **configuration object (uygulama yapılandırması)** kullanılır. Bu yapılandırmanın içinde `providers` dizisi bulunur. İşte router da burada **provideRouter(routes)** ile eklenir.

```tsx
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // ...
  ]
};
```

**Angular’da Route URL Paths**

**1. Static URL Paths (Statik Yollar)**

Statik yollar sabit ve önceden belirlenmiş URL’lerdir.

👉 Bu yolların parametresi olmaz ve birebir eşleşme yapılır.

**Örnek:**

- `/admin`
- `/blog`
- `/settings/account`

```tsx
const routes: Routes = [
  { path: 'admin', component: AdminPage },
  { path: 'blog', component: BlogPage },
];
```

---

**2. Parameterized URL Paths (Parametreli Yollar)**

URL içerisine **dinamik parametre** alabilirsin. Parametreler `:` ile tanımlanır.

**Örnek:**

```tsx
const routes: Routes = [
  { path: 'user/:id', component: UserProfile }
];

```

👉 Bu durumda:

- `/user/leeroy`
- `/user/jenkins`

her ikisi de **UserProfile** bileşenini açar.

Ama bileşen içinde `id` parametresini okuyup farklı kullanıcı bilgilerini gösterebilirsin.

📌 **Kurallar:**

- Parametre ismi harfle başlamalı (`a-z`, `A-Z`)
- Harf, rakam, `_` ve  kullanılabilir

👉 Çoklu parametre de kullanabilirsin:

```tsx
const routes: Routes = [
  { path: 'user/:id/:socialMedia', component: SocialMediaFeed },
  { path: 'user/:id', component: UserProfile },
];

```

Bu durumda:

- `/user/leeroy/youtube`
- `/user/leeroy/bluesky`

URL’leri farklı içerikler gösterebilir.

---

**3. Wildcard Routes (Joker Yollar)**

Eğer kullanıcı **tanımlanmamış bir path** girerse, onu yakalamak için `**` (çift yıldız) kullanılır.

Genelde **404 - Page Not Found** sayfası için kullanılır.

**Örnek:**

```tsx
const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'user/:id', component: UserProfile },
  { path: '**', component: NotFound } // En sona yazılır!
];

```

👉 `/asdxyz` gibi bilinmeyen her şey `NotFound` bileşenini gösterir.

**Angular Route Matching Kuralları**

👉 Angular **"first-match wins"** (ilk eşleşen kazanır) stratejisini kullanır.

Yani:

- Router URL’yi baştan sona okur.
- İlk eşleşen route bulunduğunda **daha sonrakilere bakmaz**.

---

📌 Örnek

```tsx
const routes: Routes = [
  { path: '', component: HomeComponent },              // 1. Boş path (/)
  { path: 'users/new', component: NewUserComponent },  // 2. Statik - en özel
  { path: 'users/:id', component: UserDetailComponent }, // 3. Dinamik
  { path: 'users', component: UsersComponent },        // 4. Statik - daha genel
  { path: '**', component: NotFoundComponent }         // 5. Wildcard - her zaman en son
];
```

---

🔎 `/users/new` URL’si girildiğinde:

1. `''` → eşleşmez
2. `'users/new'` → eşleşir ✅ → **Router burada durur!**
3. `'users/:id'` → kontrol edilmez
4. `'users'` → kontrol edilmez
5. `'**'` → kontrol edilmez

**Angular’da Route Component Yükleme Stratejileri**

**1. Eager Loading (Önceden Yükleme)**

- Komponentler uygulama ilk açıldığında **JavaScript bundle** içine dahil edilir.
- Kullanıcı daha o sayfaya gitmeden kod zaten indirilmiştir.
- Avantaj:
    - Kullanıcı sayfalar arası geçiş yaparken **çok hızlıdır** (çünkü kod hazırdır).
- Dezavantaj:
    - **İlk sayfa yüklemesi daha yavaş olur**, çünkü tüm sayfaların kodu en başta indirilir.

📌 Örnek:

```tsx
import { Routes } from "@angular/router";
import { HomePage } from "./components/home/home-page"
import { LoginPage } from "./components/auth/login-page"

export const routes: Routes = [
  { path: "", component: HomePage },
  { path: "login", component: LoginPage }
];
```

---

**2. Lazy Loading (İhtiyaç Olduğunda Yükleme)**

- Komponentler sadece kullanıcı ilgili route’a gittiğinde yüklenir.
- Angular burada **dynamic import** kullanır.
- Avantaj:
    - **İlk sayfa yüklenmesi çok hızlıdır**, çünkü sadece gerekli olan kod indirilir.
- Dezavantaj:
    - Kullanıcı ilgili sayfaya ilk kez girdiğinde **ekstra yükleme süresi** olur.

📌 Örnek:

```tsx
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./components/auth/login-page").then(m => m.LoginPage)
  },
  {
    path: "",
    loadComponent: () => import("./components/home/home-page").then(m => m.HomePage)
  }
];
```

---

**⚖️ Hangi Durumda Hangisi Kullanılmalı?**

- **Eager Loading** 👉
    - Ana sayfa (landing page)
    - Herkesin mutlaka göreceği ekranlar (ör: Home, Dashboard)
    - Küçük ve hafif komponentler
- **Lazy Loading** 👉
    - Daha az kullanılan sayfalar (ör: Ayarlar, Admin, Detay sayfaları)
    - Büyük ve bağımlılıkları çok olan modüller
    - Uygulamanın daha hızlı açılmasını istediğiniz durumlar

**Redirects (Yönlendirmeler)**

Redirects, bir route’a gelen isteği **başka bir route’a yönlendirmek** için kullanılır.

Özellikle:

- Route kaldırıldığında
- Eski linkler/bookmarklar hâlâ kullanıldığında
- Alternatif URL sağlamak gerektiğinde

kullanışlıdır.

📌 Örnek:

```tsx
import { Routes } from '@angular/router';
import { BlogComponent } from './home/blog.component';

const routes: Routes = [
  {
    path: 'articles',
    redirectTo: '/blog', // /articles isteği otomatik olarak /blog’a yönlendirilecek
  },
  {
    path: 'blog',
    component: BlogComponent
  },
];

```

👉 Kullanıcı `/articles` yazarsa, Angular otomatik olarak `/blog` route’una yönlendirir.

⚠️ Not:

`redirectTo` kullanıldığında genelde `pathMatch` da tanımlanır:

- `pathMatch: 'full'` → yalnızca tam eşleşmede yönlendirir.
- `pathMatch: 'prefix'` → ilgili prefix ile başlayan tüm path’leri yönlendirir.

**Page Titles (Sayfa Başlıkları)**

Angular, route aktif olduğunda **sayfa başlığını otomatik güncelleyebilir**.

Bu başlıklar:

- **SEO için** önemlidir,
- **Erişilebilirlik** açısından ekran okuyucular için anlamlıdır.

📌 Statik başlık örneği:

```tsx
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us'
  },
];
```

---

**Dinamik Sayfa Başlıkları (Resolver ile)**

Sayfa başlığını URL parametreleri veya query parametrelerden dinamik almak istiyorsak, **`ResolveFn`** kullanılabilir.

📌 Örnek:

```tsx
import { Routes, ResolveFn } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    title: titleResolver
  }
];
```

👉 Eğer kullanıcı `/products?id=123` URL’sine giderse, sayfa başlığı `"123"` olarak ayarlanır.

**Özel TitleStrategy Kullanımı**

Daha gelişmiş bir senaryoda (örneğin her başlığa sitenin adı otomatik eklensin: `"MyApp | Page Title"`) kendi **`TitleStrategy`** servisini yazabilirsin.

📌 Örnek:

```tsx
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`MyApp | ${title}`);
    }
  }
}

```

Sonra bunu `main.ts` veya `app.config.ts` dosyasında provider olarak ekliyorsun:

```tsx
import { provideRouter, withTitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from './custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withTitleStrategy(CustomTitleStrategy))
  ]
};
```

### Route-level Providers (Yönlendirme Seviyesi Servis Sağlayıcıları)

Normalde servisleri `AppModule` ya da `@Injectable({providedIn: 'root'})` ile global olarak kullanabiliyoruz.

Ama bazı durumlarda her route için farklı servisler ya da dependency injection ayarları gerekebilir. İşte bu noktada **route-level providers** devreye giriyor.

---

🛠️ Mantık

- `providers` özelliğini route tanımına ekleyebiliyorsun.
- Bu `providers`, yalnızca o route ve onun **children** route’larında geçerli oluyor.
- Böylece **farklı route’lar için farklı servis/konfigürasyon** kullanabilirsin.

---

📌 Örnek Senaryo

Admin panelinde özel bir servis kullanıyorsun ve bir API key gerekiyor diyelim.

Ama normal kullanıcı sayfalarında bu servise gerek yok.

```tsx
import { Routes } from '@angular/router';
import { AdminService } from './services/admin.service';
import { ADMIN_API_KEY } from './tokens/admin-api.token';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';

export const routes: Routes = [
  {
    path: 'admin',
    providers: [
      AdminService,
      { provide: ADMIN_API_KEY, useValue: '12345' }, // Sadece admin route’unda geçerli
    ],
    children: [
      { path: 'users', component: AdminUsersComponent },
      { path: 'teams', component: AdminTeamsComponent },
    ],
  },
  // diğer uygulama route’ları burada...
];
```

👉 Burada:

- `AdminService` sadece `admin` route’u ve alt route’larında enjekte edilebilir.
- `ADMIN_API_KEY` yalnızca admin kısmına özgüdür. Normal `/home`, `/about` gibi route’larda bu injection bulunmaz.

---

🎯 Kullanım Senaryoları

- Admin ve user için **farklı servisler** kullanmak.
- Route bazlı **farklı API key / config** sağlamak.
- Büyük uygulamalarda bazı servisleri **lazy-loaded route**’larla birlikte yüklemek (gereksiz yere app bundle’ına dahil etmemek).

### Route Data (Statik / Dinamik Veri)

✅ Statik Data

Route tanımına `data` ekleyerek **sabit bilgiler** geçebilirsin.

Örnek: sayfa bazlı analytics ID, başlık, izin bilgisi vb.

```tsx
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { analyticsId: '123', title: 'Ana Sayfa' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { analyticsId: '456', title: 'Hakkımızda' }
  }
];

```

👉 Bu bilgiyi komponent içinde **ActivatedRoute** ile alabilirsin:

```tsx
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<h1>{{ title }}</h1>`
})
export class HomeComponent {
  title = '';

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data['title'];
  }
}

```

**Dinamik Data (Resolver ile)**

Eğer route açılırken **API’den veri çekmek** veya dinamik bir bilgi sağlamak istiyorsan **resolver** kullanılır.

```tsx
import { ResolveFn } from '@angular/router';

export const productResolver: ResolveFn<string> = (route) => {
  const productId = route.paramMap.get('id');
  return `Ürün-${productId}`;
};

```

Sonra route’a bağlarsın:

```tsx
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: { productName: productResolver }
  }
];
```

Komponent içinde alırsın:

```tsx
constructor(private route: ActivatedRoute) {
  this.route.data.subscribe(data => {
    console.log(data['productName']); // "Ürün-42"
  });
}
```

### Nested Routes (Child Routes)

Bazen bir sayfa altında alt görünümler olabilir.

Mesela `/product/42/info` ve `/product/42/reviews` gibi.

```tsx
export const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
    children: [
      { path: 'info', component: ProductInfoComponent },
      { path: 'reviews', component: ProductReviewsComponent }
    ]
  }
];
```

👉 `ProductComponent` içine bir `<router-outlet>` eklersin:

```html
<!-- product.component.html -->
<article>
  <h1>Ürün {{ id }}</h1>
  <nav>
    <a [routerLink]="['info']">Bilgi</a>
    <a [routerLink]="['reviews']">Yorumlar</a>
  </nav>

  <router-outlet></router-outlet>
</article>
```

Bu durumda:

- `/product/42/info` → `ProductInfoComponent` içeride render edilir.
- `/product/42/reviews` → `ProductReviewsComponent` içeride render edilir.

Yani sadece iç `<router-outlet>` güncellenir, ana sayfa reload olmaz.

### RouterOutlet Nedir?

`<router-outlet>` Angular yönlendiricisinin **bileşeni render edeceği yer**i işaretler.

Yani URL değiştiğinde hangi komponentin gösterileceğini Angular bu noktaya ekler.

Örnek şablon:

```html
<app-header></app-header>
<router-outlet></router-outlet> <!-- Buraya route komponenti yerleştirilir -->
<app-footer></app-footer>
```

- `<app-header>` ve `<app-footer>` sabittir, sayfalar arası geçişlerde değişmez.
- `<router-outlet>` içindeki içerik URL’ye bağlı olarak değişir.

---

🔹 Basit Route Örneği

```tsx
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'products', component: ProductsComponent, title: 'Our Products' }
];
```

- `/` → `HomeComponent` gösterilir
- `/products` → `ProductsComponent` gösterilir

---

### Control route access with guards

#### Route Guard Return Types

Angular’da **route guard**’lar, bir route’a erişim izni verilip verilmeyeceğini belirleyen fonksiyonlardır.
Bu fonksiyonların geri dönüş tipi birkaç farklı şekildedir:

* **`boolean`**

  * `true` → route’a erişime izin verilir.
  * `false` → erişim engellenir.

* **`UrlTree`**

  * Kullanıcı engellenirse, doğrudan başka bir route’a yönlendirmek için `Router.createUrlTree()` ile döndürülebilir.
  * Örn: login sayfasına yönlendirme.

* **`Observable<boolean | UrlTree>`**

  * Asenkron işlemler için kullanılır. Örn: API’ye istek atıp kullanıcı yetkisini doğrulama.

* **`Promise<boolean | UrlTree>`**

  * Asenkron işlemleri `Promise` üzerinden çözmek için kullanılır.

👉 Kısaca:

```ts
boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
```

---

#### Types of Route Guards

Angular’da 5 ana tip route guard bulunur:

1. **CanActivate** → Belirli bir route’a erişim izni kontrolü.
2. **CanActivateChild** → Bir route’un child route’larına erişim izni kontrolü.
3. **CanDeactivate** → Route’tan ayrılırken izin kontrolü.
4. **CanMatch** → Route’un URL pattern’ine uygun olup olmadığını kontrol eder.
5. **Resolve** → Route yüklenmeden önce gerekli veriyi yükler. (Senin listende yok ama Angular’ın 5’lisinde vardır.)

---

#### CanActivate

* Belirli bir route’a gidilip gidilemeyeceğini kontrol eder.
* Kullanım alanı:

  * Kullanıcının giriş yapıp yapmadığını kontrol etmek
  * Role-based access kontrolü

**Örnek:**

```ts
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
```

---

#### CanActivateChild

* **Child route’lara erişim iznini** kontrol eder.
* Eğer parent route erişilebilir ama child route’lar kısıtlanmak isteniyorsa kullanılır.

**Örnek:**

```ts
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean | UrlTree {
    return this.authService.hasRole('admin') 
      ? true 
      : this.router.createUrlTree(['/forbidden']);
  }
}
```

---

#### CanDeactivate

* Kullanıcı route’tan ayrılmak istediğinde devreye girer.
* Özellikle **kaydedilmemiş formları** olan sayfalarda kullanılır.
* Kullanıcı sayfadan çıkmadan önce uyarı gösterebilir.

**Örnek:**

```ts
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({ providedIn: 'root' })
export class PendingChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

**Component içinde:**

```ts
export class EditProfileComponent implements CanComponentDeactivate {
  hasUnsavedChanges = true;

  canDeactivate(): boolean {
    return this.hasUnsavedChanges 
      ? confirm("Kaydedilmemiş değişiklikler var. Çıkmak istediğinizden emin misiniz?")
      : true;
  }
}
```

---

#### CanMatch

* Angular 14+ ile gelmiştir.
* Bir route’un **URL pattern’ine uygun olup olmadığını** kontrol eder.
* Lazy-loaded modüllerde daha esnek routing sağlar.

**Örnek:**

```ts
@Injectable({ providedIn: 'root' })
export class FeatureFlagGuard implements CanMatch {
  constructor(private featureService: FeatureService) {}

  canMatch(): boolean {
    return this.featureService.isFeatureEnabled('newDashboard');
  }
}
```

Burada feature flag kapalıysa route hiç eşleşmez.

---

#### Applying Guards to Routes

Guard’lar route’lara `canActivate`, `canActivateChild`, `canDeactivate`, `canMatch` property’leri ile eklenir.

**Örnek Routing Module:**

```ts
const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admin',
    canActivateChild: [AdminGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canDeactivate: [PendingChangesGuard]
  },
  {
    path: 'beta-dashboard',
    loadChildren: () => import('./beta/beta.module').then(m => m.BetaModule),
    canMatch: [FeatureFlagGuard]
  }
];
```

---

✅ **Özet:**

* `CanActivate` → route erişimini kontrol eder.
* `CanActivateChild` → child route erişimini kontrol eder.
* `CanDeactivate` → route’tan çıkarken kontrol yapar.
* `CanMatch` → route eşleşmesini kontrol eder.
* Return type → `boolean | UrlTree | Observable | Promise`.


### Router Data Resolves

Angular’da **Router Data Resolver** mekanizması, bir route etkinleştirilmeden (render edilmeden) önce gerekli olan verilerin yüklenmesini sağlar. Bu sayede component açıldığında ihtiyaç duyduğu veri hazır bulunur. Özellikle API’den veri çekilmesi gereken durumlarda kullanıcı deneyimini iyileştirir.

---

#### What are data resolvers?

* Resolver, Angular’ın **routing mekanizması** içerisinde çalışan özel bir servis sınıfıdır.
* Route aktif olmadan önce çalışır ve gerekli veriyi yükler.
* Veriler yüklendikten sonra navigation (yönlendirme) tamamlanır.

---

#### Why use data resolvers?

* Component açıldığında **veri hazır** olur.
* Component içinde `ngOnInit` içinde API çağrısı yapmaya gerek kalmaz.
* Kullanıcı boş ekran veya loading spinner görmek yerine direkt veriyi görür.
* Navigation akışına **kontrollü veri yükleme** sağlar.

---

#### Creating a resolver

Bir resolver, Angular’ın `Resolve<T>` interface’ini implement eden bir service’tir.

```ts
@Injectable({ providedIn: 'root' })
export class TodoResolver implements Resolve<Todo[]> {
  constructor(private todoService: TodoService) {}

  resolve(): Observable<Todo[]> {
    return this.todoService.getTodos(); // API çağrısı
  }
}
```

---

#### Configuring routes with resolvers

Route tanımında `resolve` property’si kullanılır.

```ts
const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent,
    resolve: {
      todos: TodoResolver
    }
  }
];
```

* Burada `todos` key’i ile `TodoResolver` bağlandı.
* Component açılmadan önce resolver çalışacak ve API’den gelen veriler yüklenecek.

---

#### Accessing resolved data in components

Resolver’dan dönen veriler `ActivatedRoute` aracılığıyla veya Angular 17 ile gelen `withComponentInputBinding` ile erişilebilir.

###### Using ActivatedRoute

```ts
@Component({...})
export class TodoListComponent implements OnInit {
  todos!: Todo[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.todos = this.route.snapshot.data['todos'];
  }
}
```

##### Using withComponentInputBinding

Angular 17 ile birlikte `withComponentInputBinding` özelliği geldi. Bu sayede resolver’dan dönen veri doğrudan component input’una bağlanabilir.

```ts
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input() todos!: Todo[];
}
```

Router konfigurasyonu:

```ts
provideRouter(routes, withComponentInputBinding());
```

Bu durumda `resolve` ile dönen `todos` otomatik olarak component’in `@Input() todos` property’sine aktarılır.

---

#### Error handling in resolvers

Resolver içerisinde hata oluşursa, Angular navigation’u durdurabilir veya özel bir route’a yönlendirebilir.

##### Centralize error handling in with NavigationErrorHandler

`NavigationErrorHandler` kullanarak global seviyede error handling yapılabilir.

```ts
provideRouter(routes, withNavigationErrorHandler((error) => {
  console.error('Navigation Error:', error);
  return redirectTo(['/error']);
}));
```

##### Managing errors through a subscription to router events

Router’ın `events` akışı dinlenerek hata yönetilebilir.

```ts
this.router.events.subscribe(event => {
  if (event instanceof NavigationError) {
    console.error('Navigation failed:', event.error);
    this.router.navigate(['/error']);
  }
});
```

##### Handling errors directly in the resolver

Hata doğrudan resolver içinde yakalanabilir.

```ts
resolve(): Observable<Todo[]> {
  return this.todoService.getTodos().pipe(
    catchError(() => {
      return of([]); // boş liste döndür
    })
  );
}
```

---

#### Navigation loading considerations

Resolver’lar bazen uzun süren API çağrılarına bağlı olabilir. Bu durumda kullanıcıya **yükleniyor bildirimi** vermek gerekir.

##### Providing navigation feedback

* Global loading spinner kullanılabilir.
* Router’ın `NavigationStart` ve `NavigationEnd` event’leri dinlenerek yükleme animasyonu gösterilebilir.

```ts
this.router.events.subscribe(event => {
  if (event instanceof NavigationStart) {
    this.loading = true;
  } else if (event instanceof NavigationEnd || event instanceof NavigationError) {
    this.loading = false;
  }
});
```

---

#### Best practices

1. Resolver sadece **gereken veriyi** getirmeli, ağır işlemler yapmamalıdır.
2. Hata yönetimi mutlaka düşünülmelidir. Kullanıcı boş ekranda kalmamalıdır.
3. Resolver ile dönen veriler component içinde **direct access** ile kullanılmalıdır.
4. Eğer veri component için **kritik değilse**, resolver yerine component içinde API çağrısı yapılabilir.
5. Lazy-loaded modüllerde resolver kullanımı veri yükleme sürecini optimize edebilir.

---

Harika — Angular üzerinden **Lazy Loading** ve **Render (rendering / change-detection) optimizasyonu** konularını detaylı, örnekli ve pratiğe dönük şekilde anlattım. Aşağıda hem kavramsal açıklamalar hem de uygulamada kullanabileceğin kod örnekleri, dikkat edilmesi gereken noktalar ve kontrol listesi var.

### Lazy Loading — Nedir, neden kullanılır?

**Amaç:** Uygulamanın ilk yüklenme (initial load) boyutunu küçültmek; sadece ihtiyaç duyulan kodu (route, component, asset) indirmek. Bu sayede Time-to-Interactive (TTI) ve ilk render hızlanır. Angular’da bunun en yaygın şekli route tabanlı code-splitting’dir (feature module veya standalone component lazy-load). 

#### 1) Route-level (NgModule) lazy loading — klasik kullanım

```ts
// app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
                                .then(m => m.AdminModule)
  }
];
```

* `loadChildren` ile dinamik import kullanılır; bu, derleme sırasında route'a özel chunk (JS dosyası) oluşturur ve kullanıcı o route'a geldiğinde indirilir. 

#### 2) Standalone component lazy loading — modern/tercih edilen yol

Angular’ın modern sürümlerinde **standalone components** ve router’da `loadComponent` ile doğrudan component lazy-load etmek mümkün. Bu yapı, modüllere bağlılığı azaltır ve daha ince granüler yüklemeye izin verir. Örnek:

```ts
// routes.ts
const routes: Routes = [
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component')
                             .then(c => c.SettingsComponent)
  }
];
```

* Angular ekibi “standalone-first” ve `loadComponent` kullanımını teşvik ediyor; bu yaklaşım performans ve geliştirme basitliği getiriyor. 

#### 3) Preloading stratejileri

* `PreloadAllModules` gibi hazır stratejilerle, uygulama yüklenirken arka planda lazy modüller “önceden” indirilebilir — böylece ilk navigasyon hızlı olur ama ağda yedeklemeye gider. Ayrıca **Custom Preloading** yazarak sadece belirli modülleri seçebilirsin. 

#### 4) Component / template seviyesinde geciktirme

* `ViewContainerRef.createComponent()` veya dinamik `import()` + `loadComponent` yoluyla bileşeni runtime’da yükleyebilirsin (ör. modals, heavy widget’lar). Yeni Angular sürümleri route dışında da deferrable / lazy-view yetenekleri getiriyor. (Son versiyonlarda injection-context iyileştirmeleri var.) 

---

### Render / Change-detection Optimizasyonu — Temel kavramlar ve pratik teknikler

Angular’ın performans darboğazlarının büyük bölümü **change detection (CD)** kaynaklıdır. Doğru stratejiyle framework’ün sürekli her şeyi kontrol etmesini engelleyip render maliyetini düşürebilirsin. Angular’ın resmi performans rehberine bakmak iyi bir başlangıç. 

#### 1) ChangeDetectionStrategy.OnPush

```ts
@Component({
  selector: 'my-widget',
  template: `...`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyWidget {
  @Input() data!: SomeType;
}
```

* `OnPush`: Angular, bileşeni sadece **input referansı değiştiğinde**, bir olay tetiklendiğinde veya `markForCheck/detectChanges` çağrıldığında kontrol eder. Bu, subtree’leri atlamaya izin vererek performansı ciddi iyileştirir — fakat **immutable** veri / referans değişimi kullanmalısın, yoksa güncellemeler görünmez. 

##### İyi pratikler with OnPush

* Nesneleri mutasyona uğratma; yeni referans oluştur (spread / structuredClone).
* `async` pipe kullan: `items$ | async` -> abonelik ve change-detection yönetimini otomatik yapar.
* Eğer dış kaynaklı bir olayla güncelleme gerekiyorsa `ChangeDetectorRef.markForCheck()` veya `detectChanges()` kullan.

#### 2) `async` pipe ve RxJS kullanımına dikkat

* `async` pipe hem memory leak’i önler hem de OnPush ile güzel çalışır. Component’te manuel subscribe yerine View tarafında `| async` tercih et. (Giriş/çıkış akışlarını sinyaller veya observables ile tasarla.)

#### 3) \*ngFor — trackBy kullan

```html
<div *ngFor="let item of items; trackBy: trackById">
  {{item.name}}
</div>
```

```ts
trackById(index: number, item: Item) { return item.id; }
```

* `trackBy` DOM yeniden oluşturmayı minimize eder; liste elemanlarının referansla değişimi durumunda bile gereksiz re-render engellenir.

#### 4) Ağır template hesaplamalarından kaçın

* Template içinde fonksiyon çağırma veya hesaplama yapma (ör. `{{ heavyCalc(x) }}`) performans killer’ıdır. Bunun yerine hesapları component’te/pipe’ta yap, ve **pure pipes** kullan.

#### 5) ChangeDetectorRef: detach / markForCheck / detectChanges

* `cdr.detach()` ile view’ı change detection döngüsünden çıkartıp gerektiğinde elle `detectChanges()` çağırabilirsin. Bu güçlü ama sorumluluk ister — senin manuel trigger’larını doğru koyman lazım. ([angular.io][10])

#### 6) ngZone.runOutsideAngular

* Çok sık çalışan DOM/scroll/animation/event handler’ları Angular zone’u tetiklemeden (`runOutsideAngular`) çalıştır; UI olaylarında gerektiğinde `run()` ile Angular’a geri dön. Bu, CD invoke sayısını azaltır.

#### 7) Büyük listeler → Virtual scroll (CDK)

* Çok uzun listeleri DOM’a tamamen render etmek yerine `@angular/cdk`’in `cdk-virtual-scroll-viewport` kullan; sadece görünürdekileri render eder.

```html
<cdk-virtual-scroll-viewport itemSize="50" class="viewport">
  <div *cdkVirtualFor="let item of items">{{item.name}}</div>
</cdk-virtual-scroll-viewport>
```

* Bu yaklaşım hem bellek hem hesaplama maliyetini büyük ölçüde düşürür.

#### 8) Görseller ve asset’ler

* `loading="lazy"` ile native lazy-loading; daha kontrollü davranmak için `IntersectionObserver` ile custom lazy-load yap.
* Büyük görselleri optimal formatta sun (AVIF/WebP), responsive srcset kullan.

#### 9) SSR / Prerender / Hydration

* İlk render’ı server’da verip HTML’yi kullanıcıya göndermek TTI’yi iyileştirir. Angular Universal ile SSR / prerender (SSG) yapabilirsin; modern Angular sürümleri incremental hydration gibi özellikler ekliyor. SSR, SEO için de kritik. ([angular.dev][13], [ANGULARarchitects][14])

#### 10) Production build & AOT

* Prod build’lerde AOT, tree-shaking, minification vs. etkin olmalı. `ng build` CLI’si production yapılandırmasını kullanır (Angular CLI sürümüne göre `--configuration production` veya varsayılan prod config). AOT compilation uygulamayı tarayıcıda daha hızlı render eder. ([angular.dev][15])

---

#### Pratik performans kontrol / profiling araçları

* **Angular DevTools**: change-detection profilini gör, hangi component’in kaç kere çalıştığını tespit et.
* **Chrome DevTools Performance** (Angular entegrasyonu ile): long tasks, scripting time, paint vs layout vs composite.
* **Bundle analyzer / source-map explorer**: Hangi paketler büyük kontrolü için.

---

#### Hatalar / Tuzaklar (dikkat et)

* `OnPush` kullanıp mutable verilerle çalışmak → güncellemeler görünmez.
* AppModule’e lazily yüklenmesi gereken modülleri import etmek → lazy-loading iptal olur.
* Çok fazla küçük web request (çok sayıda küçük JS chunk) → ağ overhead; chunk stratejisini test et.
* Virtual scroll için itemSize sabit değilse ekstra dikkat (variable-size çözümleri karmaşık).

---

#### Hızlı kontrol listesi (what-to-do)

1. Route’ları lazy-load ile böl. (modules veya standalone components). 
2. Önemli subtree’lerde `OnPush` uygulayıp immutable veri kullan. 
3. Uzun listeler için CDK virtual scroll kullan.
4. Görsellerde `loading="lazy"` ve responsive/modern format kullan.
5. Prod build + AOT + bundle analiz (ng build --configuration=production). 
6. Profiling ile gerçek darboğazı bul; varsayımsal optimizasyonlarla zaman harcama. (Angular DevTools + Chrome DevTools).

---

#### Örnek yol haritası (proje üzerinde çalışırken)

1. Basit bir demo app oluştur (routes: home, dashboard, admin).
2. `admin`’i lazy-load et: `loadChildren` (veya standalone ise `loadComponent`). Test: network tab’ta route’a gidince chunk iniyor mu?
3. Dashboard’da büyük bir liste varsa `cdk-virtual-scroll` ile değiştir. Test: performans farkını ölç. 
4. Kritik bileşenlerde `OnPush` uygula, veriyi immutable olarak gönder. Test: Angular DevTools ile change-detection sayısını ölç. 
5. Prod build ve bundle analiz: hangi paketler büyük, shared module’lar neler? `ng build --configuration production` çalıştır. 

---


### RxJS

#### RxJS Nedir?

* **RxJS = Reactive Extensions for JavaScript**
* Asenkron ve event tabanlı programlama için **Observable** tabanlı bir kütüphanedir.
* Promise’lere benzer ama **daha güçlüdür** çünkü:

  * Birden fazla değeri zaman içinde yönetebilir.
  * Veri akışlarını (streams) üzerinde **transform, filter, combine** gibi işlemler yapmaya izin verir.
  * Event’ler, HTTP istekleri, WebSocket bağlantıları, interval’ler gibi her türlü asenkron işlemi yönetebilir.

---

#### Temel Kavramlar

##### 1. Observable

* Bir **veri kaynağı**dır (event, HTTP, timer, array vb.).
* “Akış” (stream) halinde değer üretir.
* Tek değer değil, zaman içinde **sınırsız sayıda değer** üretebilir.

👉 Basit örnek:

```ts
import { Observable } from 'rxjs';

const obs = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

obs.subscribe({
  next: value => console.log('Gelen:', value),
  complete: () => console.log('Bitti!')
});
// Çıktı: Gelen: 1, Gelen: 2, Gelen: 3, Bitti!
```

---

##### 2. Observer

* Observable’dan gelen verileri **tüketen (dinleyen)** taraftır.
* 3 ana callback vardır:

  * `next`: Yeni değer geldiğinde
  * `error`: Hata oluştuğunda
  * `complete`: Veri akışı tamamlandığında

---

##### 3. Subscription

* `subscribe()` çağrıldığında oluşur.
* Bu aslında **Observable ile Observer arasındaki bağlantıdır**.
* `unsubscribe()` ile bağlantıyı kesebiliriz → **memory leak önleme!**

---

##### 4. Operators (Operatörler)

* Asıl gücü burada!
* Observable’dan gelen veriyi **dönüştürmek, filtrelemek, birleştirmek** için kullanılır.
* **Pipeable operators** şeklinde zincirlenir (`pipe()` ile).

📌 Örnek:

```ts
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(
    filter(x => x % 2 === 0),   // sadece çiftler
    map(x => x * 10)           // 10 ile çarp
  )
  .subscribe(result => console.log(result));
// Çıktı: 20, 40
```

---

#### 📌 Yaygın Operatörler

##### Transformation (Dönüştürme)

* `map` → değer dönüştürme
* `switchMap`, `mergeMap`, `concatMap`, `exhaustMap` → iç içe observable yönetimi

##### Filtering (Filtreleme)

* `filter` → koşula göre değerleri süzme
* `take`, `takeUntil`, `first`, `skip`

##### Combination (Birleştirme)

* `combineLatest`, `forkJoin`, `concat`, `merge`, `zip`

##### Creation (Oluşturma)

* `of`, `from`, `interval`, `timer`, `fromEvent`

---

#####  Hot vs Cold Observables

* **Cold Observable** → Her subscribe eden kendi akışını başlatır (örn. `httpClient.get`).
* **Hot Observable** → Kaynak tüm dinleyicilere aynı anda veri yollar (örn. mouse event).

---

#### RxJS ve Angular

Angular’da RxJS çok kritik:

* `HttpClient` → `Observable` döner
* `FormControl.valueChanges` → `Observable` döner
* `EventEmitter` → aslında `Observable` tabanlıdır
* Router param değişimleri → `Observable`
* AsyncPipe (`| async`) → Observable’ları otomatik subscribe/unsubscribe eder

---

#### Gerçek Hayat Senaryoları

##### 1. API Çağrısı

```ts
this.http.get<User[]>('/api/users')
  .pipe(
    map(users => users.filter(u => u.active)) // sadece aktif kullanıcılar
  )
  .subscribe(activeUsers => console.log(activeUsers));
```

##### 2. Live Search (switchMap ile)

```ts
this.searchInput.valueChanges
  .pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(query => this.http.get(`/api/search?q=${query}`))
  )
  .subscribe(result => this.results = result);
```

##### 3. Timer / Interval

```ts
import { interval } from 'rxjs';

interval(1000).subscribe(sec => console.log(`Saniye: ${sec}`));
```

---

#### Neden RxJS?

✅ Daha güçlü asenkron yönetim
✅ Event ve data stream’lerini kolay işleme
✅ Angular ile native uyum
✅ Memory leak’leri önleme imkanı
✅ Kod okunabilirliği artar

---

🔑 **Özet:**
RxJS = Asenkron veri akışlarını yönetmek için **Observable + Operatörler** kombinasyonu.

* **map/filter** → veri dönüştürme / filtreleme
* **switchMap/mergeMap** → iç içe Observable yönetimi
* **combineLatest/forkJoin** → farklı akışları birleştirme
* Angular’da **neredeyse her yerde** Observable vardır.

---


## Formlar

Uygulamalarda formlar; kullanıcı girişi, profil güncelleme, hassas bilgi girme ve benzeri veri giriş işlemleri için kullanılır.
Angular’da formlar iki farklı yaklaşımla yönetilebilir:

- Template-driven formlar

- Reactive formlar

Her iki yaklaşım da:

1. Kullanıcıdan gelen girdileri yakalar,

2. Girdileri doğrular,

3. Form modeli ve veri modelini günceller,

4. Değişiklikleri takip etmeye imkân tanır.

| **Form Türü**             | **Detaylar**                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reactive Forms**        | Formun nesne modeline **doğrudan ve açık erişim** sağlar. Template-driven formlara göre daha sağlamdır; **ölçeklenebilir, yeniden kullanılabilir ve test edilebilir**. Eğer uygulamanızda formlar önemli bir yer tutuyorsa veya reaktif yaklaşımları zaten kullanıyorsanız, **reactive forms** tercih edilmelidir.                  |
| **Template-driven Forms** | Formun nesne modelini şablondaki **directive’ler** üzerinden yönetir. Basit formlar (ör. e-posta kayıt formu) için uygundur. **Kolay eklenebilir** ancak **ölçeklenebilirlik açısından zayıftır**. Sadece temel gereksinimler varsa ve mantık şablon üzerinden yönetilebiliyorsa, **template-driven forms** iyi bir seçim olabilir. |

| **Özellik**                 | **Reactive Forms**                                                                                  | **Template-driven Forms**                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Form modelinin kurulumu** | Açıkça, component sınıfında tanımlanır                                                              | Dolaylı olarak, template içindeki directive’ler ile oluşturulur |
| **Veri modeli**             | Yapılandırılmış ve **immutable** (değiştirilemez)                                                   | Yapılandırılmamış ve **mutable** (değiştirilebilir)             |
| **Veri akışı**              | **Senkron**                                                                                         | **Asenkron**                                                    |
| **Form doğrulama**          | Fonksiyonlarla yapılır                                                                              | Directive’lerle yapılır                                         |
| **Ölçeklenebilirlik**       | Daha ölçeklenebilir, büyük ve karmaşık formlar için uygundur. Form modelleri tekrar kullanılabilir. | Basit senaryolar için uygundur, ölçeklenebilirlik zayıftır.     |

### Form Modeli Kurulumu: Reactive vs Template-driven

Angular’da form kontrolü için kullanılan temel sınıflar her iki yaklaşımda da ortaktır:

- FormControl → Tek bir input alanının değerini ve doğrulama durumunu takip eder.
  - Reactive
  ```ts
  const title = new FormControl<string>('', { nonNullable: true });
  title.value;              // string
  title.valid;              // boolean
  title.valueChanges;       // Observable<string>
  ```
  - Template-Driven
  ```html
  <form #userForm="ngForm">
  <input 
    name="username" 
    [(ngModel)]="user.username" 
    required
  />
  </form>
  ```

  ```ts
  console.log(userForm.controls['username'].value);   // input değeri
  console.log(userForm.controls['username'].valid);   // valid mi değil mi
  ```
  
- FormGroup → Birden fazla form kontrolünü (form elemanını) birlikte takip eder.

  - Reactive
  ```ts
  const todoForm = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>(''),
    dueDate: new FormControl<Date | null>(null),
  });
  todoForm.value; // { title: string; description: string | null; dueDate: Date | null }
  ```
  - Template-Driven
  ```html
  <form #profileForm="ngForm">
    <input name="firstName" [(ngModel)]="profile.firstName" />
    <input name="lastName" [(ngModel)]="profile.lastName" />
  </form>
  ```

  ```ts
  export class TagsComponent {
    tags: string[] = ['work', 'urgent'];
  }
  ```

- FormArray → Dinamik şekilde birden fazla kontrolü dizi halinde takip eder.
  - Reactive
  ```ts
  const tags = new FormArray<FormControl<string>>([
    new FormControl('work'),
    new FormControl('urgent'),
  ]);
  ```
  - Template-Driven
  ```html
  <form #tagsForm="ngForm">
    <div *ngFor="let tag of tags; let i = index">
      <input [(ngModel)]="tags[i]" name="tag{{i}}" />
    </div>
  </form>
  ```
  ```ts
  export class TagsComponent {
    tags: string[] = ['work', 'urgent'];
  }
  ```
- ControlValueAccessor → Angular form kontrolleri ile DOM elementleri arasında köprü görevi görür.

#### Reactive Forms (Reaktif Formlar)

- Form modeli explicit (açıkça) component sınıfında tanımlanır.

- `[formControl]` directive’i ile input alanına bağlanır.

- Form model (TypeScript tarafı) her zaman kaynak kabul edilir.

- Yani, input’taki değer değiştiğinde model güncellenir, model değiştiğinde input da güncellenir.

Örnek:

```ts
@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `,
  imports: [ReactiveFormsModule],
})
export class FavoriteColorReactiveComponent {
  favoriteColorControl = new FormControl('');
}
```
#### Template-driven Forms (Şablon Tabanlı Formlar)

- Form modeli implicit (örtük) şekilde template üzerinden yönetilir.
- [(ngModel)] directive’i, input alanı ile TypeScript tarafındaki değişkeni bağlar.
- Burada kaynak template’tir; yani, NgModel otomatik olarak form kontrolünü oluşturur ve yönetir.

Örnek:
```ts
@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
  imports: [FormsModule],
})
export class FavoriteColorTemplateComponent {
  favoriteColor = '';
}

```

### Formlarda Veri Akışı

#### Reactive Forms – Data Flow

- View → Model (Kullanıcı bir şey yazdığında)
  - Kullanıcı input’a değer girer.
  - `<input>` elementi bir input event yayar.
  - ControlValueAccessor bu değeri yakalar ve FormControl.setValue() çağırır.
  - FormControl, yeni değeri valueChanges Observable üzerinden yayar.
  - Bu observable’a abone olan tüm observer’lar (component içindeki logic, servisler vs.) yeni değeri alır.
  - Anında, senkron şekilde model güncellenir.

![View to Model](ReactiveViewToModel.png)

- Model → View (Kod tarafında değer değiştiğinde)
  - Component kodunda favoriteColorControl.setValue("Red") çağrılır.
  - FormControl, yeni değeri günceller ve valueChanges Observable üzerinden yayar.
  - Observer’lar bu yeni değeri alır.
  - ControlValueAccessor, `<input>` alanına güncel değeri yazar.
  - Kodda değişiklik olduğunda UI hemen senkronize olur.

![Model to View](ReactiveModelToView.png)

- Reactive Forms’ta her input, doğrudan bir FormControl instance ile bağlıdır.
- Veri akışı tek yönlü observable zincirleriyle gerçekleşir:
  - Kullanıcı değiştirirse → FormControl anında güncellenir.
  - Kod değiştirirse → input anında güncellenir.
- Senkron çalışır, UI’nin render süresine bağlı değildir.

#### Template-Driven Forms - Data Flow

- View → Model (Kullanıcı input girdiğinde akış)
  - Kullanıcı input’a "Blue" yazıyor.
  - `<input>` bir input event fırlatıyor.
  - ControlValueAccessor, bu değeri yakalıyor ve FormControl.setValue() çağırıyor.
  - FormControl, yeni değeri valueChanges observable üzerinden fırlatıyor.
  - Bu değeri dinleyen varsa, onlar da hemen güncelleniyor.
  - Aynı anda ControlValueAccessor, NgModel.viewToModelUpdate() çağırıyor → bu da ngModelChange event’ini tetikliyor.
  - [(ngModel)] sayesinde component’teki property (favoriteColor) da otomatik güncelleniyor.

  Yani burada hem FormControl güncelleniyor, hem de component property’si güncelleniyor.

  ![View to Model](TemplateViewToModel.png)

- Model → View (Component property değiştiğinde akış)
  - Diyelim ki component’te favoriteColor = "Red"; olarak değişti.
  - Angular’ın Change Detection (değişiklik kontrolü) mekanizması çalışıyor.
  - NgModel directive’in ngOnChanges metodu tetikleniyor.
  - Bu, FormControl içindeki değeri güncellemek için bir async task sıraya koyuyor.
  - İlk Change Detection tamamlanıyor.
  - Sonraki "tick" (zaman dilimi) geldiğinde, async task çalışıyor → FormControl değeri güncelleniyor.
  - FormControl yine valueChanges fırlatıyor → subscriber’lar haberdar oluyor.
  - ControlValueAccessor, input elementinin değerini güncelliyor (input kutusu artık "Red" gösteriyor).

  Not: Burada async (ikinci tur Change Detection) kullanılmasının sebebi, Angular’da "ExpressionChangedAfterItHasBeenChecked" hatasını önlemek. Çünkü input binding ile gelen değer, CD sırasında değişirse hata veriyor.

  ![View to Model](image.png)

### Veri Modeli Türleri

#### Reactive Forms → Immutable (Değiştirilemez)

- Reactive form’larda data model immutability prensibine göre çalışır.

- Yani bir FormControl’de değer değiştiğinde eski model güncellenmez, onun yerine yeni bir değer/nesne döner.

- Bu sayede her değişiklik ayrı bir event (valueChanges) olarak yakalanabilir → kolayca takip edilebilir.

- Change detection (Angular’ın güncelleme mekanizması) daha verimli olur çünkü sadece gerçekten yeni değer geldiğinde tetiklenir.

- Ayrıca valueChanges zaten bir Observable olduğu için RxJS operatörleriyle (map, filter, debounceTime vs.) kolayca entegre edebilirsin.

```ts
  const control = new FormControl('blue');

  control.valueChanges.subscribe(value => console.log(value));

  control.setValue('red'); // "red" -> yeni bir değer
  control.setValue('green'); // "green" -> yine yeni bir değer

```

Burada her seferinde yeni bir değer üretiliyor, Angular sadece değişen değeri takip ediyor.

#### Template-driven Forms → Mutable (Değiştirilebilir)

- Template-driven form’larda model [(ngModel)] ile iki yönlü binding (two-way binding) kullanır.
- Yani component’teki property doğrudan güncellenir, yeni nesne oluşturulmaz.
- Bu da Angular’ın change detection mekanizmasını daha fazla çalıştırmasına sebep olabilir.
- Çünkü her değişiklikte “bu değer gerçekten değişti mi?” diye tekrar kontrol yapması gerekir.


### Form Doğrulamaları

Form doğrulama, kullanıcıdan alınan verilerin geçerli ve beklenen formatta olmasını sağlamak için kullanılan temel bir özelliktir. Bu, zorunlu alanlar, minimum/maximum uzunluk kontrolleri, email formatı gibi kontrolleri içerir. Ayrıca bazı durumlarda dış API’ler ile kontrol yaparak örneğin kullanıcı adının önceden alınmış olup olmadığını da doğrulayabilirsiniz.

#### Reactive Forms

Reactive Forms, TypeScript tarafında formun mantığını ve doğrulama kurallarını tanımlamanıza olanak sağlar. Bu yöntemde form, tamamen bileşen (component) içinde yönetilir.

Özellikleri:

  - Form kontrolleri (FormControl) ve form grupları (FormGroup) kullanılır.

  - Doğrulamalar, validator fonksiyonları olarak tanımlanır ve her kontrolün üzerine eklenir.

  - Dinamik olarak form kontrol ekleme veya kaldırma kolaydır.

  - Örnek: Zorunlu alan ve minimum uzunluk doğrulaması

  ```ts
  import { Component } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';

  @Component({
    selector: 'app-reactive-form',
    template: `
      <form [formGroup]="userForm" (ngSubmit)="submit()">
        <input formControlName="username" placeholder="Kullanıcı Adı">
        <div *ngIf="userForm.controls['username'].invalid && userForm.controls['username'].touched">
        Kullanıcı adı zorunludur ve en az 3 karakter olmalıdır.
        </div>

        <input formControlName="email" placeholder="Email">
        <div *ngIf="userForm.controls['email'].invalid && userForm.controls['email'].touched">
        Geçerli bir email giriniz.
        </div>

      <button type="submit" [disabled]="userForm.invalid">Gönder</button>
    </form>
  `
})
  export class ReactiveFormComponent {
    userForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
  });

    submit() {
      console.log(this.userForm.value);
    }
  }

  ```

#### Template-Driven Forms

- Template-Driven Forms, form ve doğrulama kurallarının HTML şablonu içinde tanımlandığı yaklaşımdır. Bu yöntem daha basit ve küçük formlar için uygundur.

Özellikleri:

  - Form doğrulama direktifleri (required, minlength, email vb.) HTML içinde kullanılır.

  - Custom validator yapmak için direktif oluşturmanız gerekir.

  - Form kontrolü ve doğrulama Angular tarafından otomatik olarak yönetilir.

```html
<form #userForm="ngForm" (ngSubmit)="submit(userForm)">
  <input name="username" ngModel required minlength="3" placeholder="Kullanıcı Adı">
  <div *ngIf="userForm.controls.username?.invalid && userForm.controls.username?.touched">
    Kullanıcı adı zorunludur ve en az 3 karakter olmalıdır.
  </div>

  <input name="email" ngModel required email placeholder="Email">
  <div *ngIf="userForm.controls.email?.invalid && userForm.controls.email?.touched">
    Geçerli bir email giriniz.
  </div>

  <button type="submit" [disabled]="userForm.invalid">Gönder</button>
</form>
```

## NgZorro

NgZorro (NG-ZORRO), Angular için geliştirilmiş bir UI Component Library’dir.

- Ant Design tasarım sistemine dayanır (React için olan Ant Design
 kütüphanesinin Angular uyarlaması).

- Amaç: kurumsal web uygulamaları için modern, tutarlı ve kullanıcı dostu arayüz bileşenleri sunmaktır.

 Yani Angular’da Material gibi bir UI kütüphanesi kullanmak yerine, NgZorro ile Ant Design’ın hazır bileşenlerini kullanabilirsin.

### Temel Özellikleri

- Zengin Component Seti
- Butonlar, tablolar, modal pencereler, formlar, menüler, ikonlar, layout sistemleri vb.
- Özellikle tablo (Table) ve form bileşenleri çok güçlüdür.
- Ant Design Uyumluluğu
- Tüm componentler Ant Design sistemine uygun tasarlanmıştır.
- Modern, minimalist ve kurumsal bir görünüm sağlar.
- Responsive & Grid System
- 24 sütunlu Grid sistemi içerir (Bootstrap’e benzer).
- Mobil uyumluluk için duyarlı tasarım destekler.
- Uluslararasılaştırma (i18n) Desteği
- Türkçe dahil olmak üzere birçok dil desteği vardır.
- Tema ve Stil Özelleştirme
- Less / CSS Variables ile kolayca tema değiştirilebilir.
- Kendi kurumsal renklerinize uyarlayabilirsiniz.

### Butonlar
```ts

```

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-button-size',
  imports: [FormsModule, NzButtonModule, NzIconModule, NzRadioModule, NzSpaceModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">Large</label>
      <label nz-radio-button nzValue="default">Default</label>
      <label nz-radio-button nzValue="small">Small</label>
    </nz-radio-group>
    <br />
    <br />
    <button nz-button [nzSize]="size" nzType="primary">Primary</button>
    <button nz-button [nzSize]="size" nzType="default">Default</button>
    <button nz-button [nzSize]="size" nzType="dashed">Dashed</button>
    <a nz-button [nzSize]="size" nzType="link">Link</a>
    <br />
    <button nz-button nzType="primary" [nzSize]="size">
      <nz-icon nzType="download" />
    </button>
    <button nz-button nzType="primary" [nzSize]="size" nzShape="circle">
      <nz-icon nzType="download" />
    </button>
    <button nz-button nzType="primary" [nzSize]="size" nzShape="round">
      <nz-icon nzType="download" />
    </button>
    <button nz-button nzType="primary" [nzSize]="size" nzShape="round">
      <nz-icon nzType="download" />
      Download
    </button>
    <button nz-button nzType="primary" [nzSize]="size">
      <nz-icon nzType="download" />
      Download
    </button>
    <br />
    <nz-space-compact [nzSize]="size">
      <button nz-button nzType="primary">
        <nz-icon nzType="left" />
        Backward
      </button>
      <button nz-button nzType="primary">
        Forward
        <nz-icon nzType="right" />
      </button>
    </nz-space-compact>
  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ]
})
export class NzDemoButtonSizeComponent {
  size: NzButtonSize = 'large';
}
```

### Layout

```ts
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-top-side-2',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal" class="header-menu">
          <li nz-menu-item nzSelected>nav 1</li>
          <li nz-menu-item>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-layout>
        <nz-sider nzWidth="200px" nzTheme="light">
          <ul nz-menu nzMode="inline" class="sider-menu">
            <li nz-submenu nzOpen nzIcon="user" nzTitle="subnav 1">
              <ul>
                <li nz-menu-item nzSelected>option1</li>
                <li nz-menu-item>option2</li>
                <li nz-menu-item>option3</li>
                <li nz-menu-item>option4</li>
              </ul>
            </li>
            <li nz-submenu nzTitle="subnav 2" nzIcon="laptop">
              <ul>
                <li nz-menu-item>option5</li>
                <li nz-menu-item>option6</li>
                <li nz-menu-item>option7</li>
                <li nz-menu-item>option8</li>
              </ul>
            </li>
            <li nz-submenu nzTitle="subnav 3" nzIcon="notification">
              <ul>
                <li nz-menu-item>option9</li>
                <li nz-menu-item>option10</li>
                <li nz-menu-item>option11</li>
                <li nz-menu-item>option12</li>
              </ul>
            </li>
          </ul>
        </nz-sider>
        <nz-layout class="inner-layout">
          <nz-breadcrumb>
            <nz-breadcrumb-item>Home</nz-breadcrumb-item>
            <nz-breadcrumb-item>List</nz-breadcrumb-item>
            <nz-breadcrumb-item>App</nz-breadcrumb-item>
          </nz-breadcrumb>
          <nz-content>Content</nz-content>
        </nz-layout>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 30px 16px 0;
        float: left;
      }

      .header-menu {
        line-height: 64px;
      }

      .sider-menu {
        height: 100%;
        border-right: 0;
      }

      .inner-layout {
        padding: 0 24px 24px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      nz-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
    `
  ]
})
export class NzDemoLayoutTopSide2Component {}
```

### Formlar

```ts
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-form-normal-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group nzPrefixIcon="user">
            <input type="text" nz-input formControlName="username" placeholder="Username" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input type="password" nz-input formControlName="password" placeholder="Password" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <div nz-row class="login-form-margin">
        <div nz-col [nzSpan]="12">
          <label nz-checkbox formControlName="remember">
            <span>Remember me</span>
          </label>
        </div>
        <div nz-col [nzSpan]="12">
          <a class="login-form-forgot">Forgot password</a>
        </div>
      </div>
      <button nz-button class="login-form-button login-form-margin" [nzType]="'primary'">Log in</button>
      Or
      <a>register now!</a>
    </form>
  `,
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form-margin {
        margin-bottom: 16px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `
  ]
})
export class NzDemoFormNormalLoginComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
```

### Card

```ts
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-card-basic',
  imports: [NzCardModule],
  template: `
    <nz-card style="width:300px;" nzTitle="Card title" [nzExtra]="extraTemplate">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `,
  styles: [
    `
      p {
        margin: 0;
      }
    `
  ]
})
export class NzDemoCardBasicComponent {}
```

### Notification
```ts
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'nz-demo-notification-basic',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="primary" (click)="createNotification()">Open the notification box</button>`
})
export class NzDemoNotificationBasicComponent {
  constructor(private notification: NzNotificationService) {}

  createNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
```



## 🔹 DOM Yapısı

1. `/products` ziyaret edildiğinde:

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-products></app-products>
<app-footer></app-footer>
```

1. `/` (ana sayfa) ziyaret edildiğinde:

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-home></app-home>
<app-footer></app-footer>
```

> <router-outlet> her zaman DOM’da kalır. Angular sadece ilgili route komponentini outlet’in hemen yanına ekler.
> 

**İç İçe (Child) Rotalar**

Bazen bir uygulamada sadece sayfanın bir kısmının değişmesini istersiniz; tüm sayfanın yeniden yüklenmesi yerine belirli bir bölüm güncellenir.

Bunu yapmak için **child routes (alt rotalar)** kullanılır.

### Örnek

`SettingsComponent` içinde farklı paneller göstermek için child route kullanabiliriz:

```html
<!-- settings.component.html -->
<h1>Settings</h1>
<nav>
  <ul>
    <li><a routerLink="profile">Profile</a></li>
    <li><a routerLink="security">Security</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>

```

- Buradaki `<router-outlet>` child route’ları render eder.

Rota Tanımı

```tsx
const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'security', component: SecurityComponent },
    ],
  },
];

```

- `/settings/profile` → `ProfileComponent`
- `/settings/security` → `SecurityComponent`

> Parent component’in kendi <router-outlet>’i olmalıdır.
> 

---

**Named (İsimlendirilmiş) Outlets**

Bazı sayfalarda birden fazla outlet olabilir.

Her outlet’e benzersiz bir isim vererek, hangi içerik hangi outlet’e render edilecek belirleyebilirsiniz.

```html
<app-header></app-header>
<router-outlet></router-outlet> <!-- primary -->
<router-outlet name="read-more"></router-outlet>
<router-outlet name="additional-actions"></router-outlet>
<app-footer></app-footer>

```

**Route Tanımı**

```tsx
{
  path: 'user/:id',
  component: UserDetails,
  outlet: 'additional-actions'
}

```

- Bu route sadece `additional-actions` isimli outlet’e render edilir.
- Primary outlet varsayılan olarak isimlendirilmiş outlet’in adı `'primary'`tır.

**Router Outlet Olayları**

| Olay | Açıklama |
| --- | --- |
| **activate** | Yeni bir component oluşturulduğunda tetiklenir. |
| **deactivate** | Mevcut component yok edildiğinde tetiklenir. |
| **attach** | `RouteReuseStrategy` ile subtree attach edildiğinde tetiklenir. |
| **detach** | `RouteReuseStrategy` ile subtree detach edildiğinde tetiklenir. |

---

**🔹 Kullanım Örneği**

```html
<router-outlet
  (activate)="onActivate($event)"
  (deactivate)="onDeactivate($event)"
  (attach)="onAttach($event)"
  (detach)="onDetach($event)"
></router-outlet>

```

**Component içinde event handler’lar:**

```tsx
export class AppComponent {
  onActivate(componentRef: any) {
    console.log('Component activated:', componentRef);
  }

  onDeactivate(componentRef: any) {
    console.log('Component deactivated:', componentRef);
  }

  onAttach(componentRef: any) {
    console.log('Component attached:', componentRef);
  }

  onDetach(componentRef: any) {
    console.log('Component detached:', componentRef);
  }
}

```

- `$event` parametresi, ilgili component’in instance’ını verir.
- Bu olaylar, özellikle **state management**, **analytics tracking** veya **custom animations** için çok kullanışlıdır.

Angular’da **RouterLink** kullanımı, geleneksel `<a href="">` etiketleri yerine Angular Router’ı kullanarak uygulama içinde gezinmeyi sağlar. Böylece sayfa yeniden yüklenmez ve SPA (Single Page Application) davranışı korunur.

---

**🔹 Temel Kullanım**

```tsx
import { RouterLink } from '@angular/router';

@Component({
  template: `
    <nav>
      <a routerLink="/user-profile">User Profile</a>
      <a routerLink="/settings">Settings</a>
    </nav>
  `,
  imports: [RouterLink]
})
export class AppComponent {}

```

- `routerLink="/user-profile"` → `/user-profile` path’ine gider.
- `RouterLink` direktifi, Angular Router’ın route yönetimini kullanır.

---

**🔹 Absolute ve Relative URL’ler**

- **Absolute URL**: Tüm path ve domain belirtilir. Örn:

```html
<a href="https://www.angular.dev/essentials">Angular Essentials Guide</a>

```

- **Relative URL**: Bulunulan route’a göre yol belirlenir. Örn:

```html
<a href="/essentials">Angular Essentials Guide</a>

```

**İpucu:** Relative URL’ler uygulama içinde daha taşınabilir ve bakımı kolaydır.

---

**🔹 Relative Path Kullanımı**

- String ile:

```html
<!-- /dashboard path’ine gider -->
<a routerLink="dashboard">Dashboard</a>

```

- Array ile (dynamic params için):

```html
<a [routerLink]="['user', currentUserId]">Current User</a>

```

- `/` ile başlayan path → root’dan başlar (absolute), `/` olmadan → current route’a göre hesaplanır (relative).

Örnek: Kullanıcı `/settings` altında iken farklı navigasyonlar:

```html
<!-- Relative -->
<a routerLink="notifications">Notifications</a> <!-- /settings/notifications -->

<!-- Absolute -->
<a routerLink="/settings/notifications">Notifications</a> <!-- /settings/notifications -->

<!-- Dynamic path -->
<a routerLink="/team/123/user/456">User 456</a>
<a [routerLink]="['/team', teamId, 'user', userId]">Current User</a>

```

**Router Servisini Kullanmak**

`Router` servisini inject ederek kullanabilirsiniz:

```tsx
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<button (click)="navigateToProfile()">View Profile</button>`
})
export class DashboardComponent {
  private router = inject(Router);

  navigateToProfile() {
    // Basit yönlendirme
    this.router.navigate(['/profile']);

    // Route parametreleri ile yönlendirme
    this.router.navigate(['/users', userId]);

    // Query parametreleri ile yönlendirme
    this.router.navigate(['/search'], {
      queryParams: { category: 'books', sort: 'price' }
    });
  }
}

```

- `router.navigate()` → Array şeklinde path segmentleri alır, query parametre veya relative path desteği vardır.

**Relative Path ile Navigasyon**

`relativeTo` parametresi ile mevcut route’a göre yönlendirme yapabilirsiniz:

```tsx
import { Router, ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <button (click)="navigateToEdit()">Edit User</button>
    <button (click)="navigateToParent()">Back to List</button>
  `
})
export class UserDetailComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  navigateToEdit() {
    // Mevcut route: /users/123 → /users/123/edit
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  navigateToParent() {
    // Mevcut route: /users/123 → /users
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}

```

**router.navigateByUrl()**

- `navigateByUrl()` yöntemi, tüm URL’i string olarak verip yönlendirme yapmanızı sağlar.
- Absolute ve complex URL’lerde daha uygundur.

```tsx
// Standart yönlendirme
router.navigateByUrl('/products');

// Nested route
router.navigateByUrl('/products/featured');

// URL parametre ve fragment
router.navigateByUrl('/products/123?view=details#reviews');

// Query parametre ile
router.navigateByUrl('/search?category=books&sortBy=price');

// Mevcut URL’i history’de değiştirmek
router.navigateByUrl('/checkout', { replaceUrl: true });

```

## Dinamik Arayüzler

Angular’da **binding (bağlama)**, bir bileşenin şablonu ile verisi arasında dinamik bir bağlantı oluşturur. Bu bağlantı sayesinde, bileşenin verisinde yapılan değişiklikler otomatik olarak render edilen şablona yansır.

```tsx
@Component({
  selector: 'user-profile',
  template: `<h1>Profile for {{userName()}}</h1>`,
})
export class TodoListItem {
  userName = signal('pro_programmer_123');
}
```

Angular bileşeni render ettiğinde, şunu görürsünüz:

```tsx
<h1>Profile for pro_programmer_123</h1>
```

Angular, bir sinyalin (signal) değeri değiştiğinde binding’i (bağlamayı) otomatik olarak güncel tutar. Yukarıdaki örneğe dayanarak, eğer **userName** sinyalinin değerini güncellersek:

```tsx
this.userName.set('cool_coder_789');
```

**Render edilen sayfa, yeni değeri yansıtacak şekilde güncellenir:**

```tsx
<h1>Profile for cool_coder_789</h1>
```

Angular, köşeli parantezler (`[]`) kullanarak dinamik değerlerin DOM özelliklerine (**properties**) bağlanmasını destekler.

```tsx
@Component({
  /*...*/
  // Set the `disabled` property of the button based on the value of `isValidUserId`.
  template: `<button [disabled]="isValidUserId()">Save changes</button>`,
})
export class UserProfile {
  isValidUserId = signal(false);
}
```

Ayrıca, öznitelik adının önüne `attr.` ekleyerek HTML özniteliklerine (**attributes**) de bağlama yapabilirsiniz.

```tsx
<!-- Bind the `role` attribute on the `<ul>` element to value of `listRole`. -->
<ul [attr.role]="listRole()">
```

Angular, bağlanan değer değiştiğinde DOM özelliklerini ve öznitelikleri otomatik olarak günceller.

Angular, şablonunuzdaki bir elemana **parantezler** (`()`) kullanarak olay dinleyicileri (**event listeners**) eklemenize izin verir.

```tsx
@Component({
  /*...*/
  // Add an 'click' event handler that calls the `cancelSubscription` method. 
  template: `<button (click)="cancelSubscription()">Cancel subscription</button>`,
})
export class UserProfile {
  /* ... */
  
  cancelSubscription() { /* Your event handling code goes here. */  }
}
```

Eğer olay nesnesini (event object) dinleyicinize iletmeniz gerekirse, fonksiyon çağrısının içinde Angular’ın yerleşik **`$event`** değişkenini kullanabilirsiniz.

```tsx
@Component({
  /*...*/
  // Add an 'click' event handler that calls the `cancelSubscription` method. 
  template: `<button (click)="cancelSubscription($event)">Cancel subscription</button>`,
})
export class UserProfile {
  /* ... */
  
  cancelSubscription(event: Event) { /* Your event handling code goes here. */  }
}
```

Angular’da bir şablonun bölümlerini koşullu olarak gizlemek veya göstermek için **@if bloğunu** kullanabilirsiniz.

```tsx
<h1>User profile</h1>
@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
}
```

**@if bloğu**, isteğe bağlı olarak bir **@else bloğunu** da destekler.

```tsx
<h1>User profile</h1>
@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
} @else {
  <h2>User settings</h2>
  <!-- ... -->  
}
```

Bir şablonun belirli bir kısmını birden fazla kez tekrarlamak için Angular’ın **@for bloğunu** kullanabilirsiniz.

```tsx
<h1>User profile</h1>
<ul class="user-badge-list">
  @for (badge of badges(); track badge.id) {
    <li class="user-badge">{{badge.name}}</li>
  }
</ul>
```

Angular, **@for** tarafından oluşturulan DOM elemanlarıyla veriyi ilişkilendirmek için örnekte de gösterildiği gibi **track** anahtar kelimesini kullanır.

## Bağımlılık Enjeksiyonlu Modüler Tasarım

Bileşenler arasında mantık (logic) paylaşmanız gerektiğinde, Angular **dependency injection (bağımlılık enjeksiyonu)** tasarım desenini kullanır. Bu sayede, tek bir “doğru kaynak”tan (single source of truth) yönetilen ve farklı bileşenlere enjekte edilebilen bir **servis** oluşturabilirsiniz.

**Servisler**, yeniden kullanılabilir kod parçalarıdır ve bileşenlere enjekte edilebilir.

Bir bileşen tanımlamaya benzer şekilde, servisler de aşağıdaki parçalardan oluşur:

- **TypeScript dekoratörü:** `@Injectable` kullanılarak sınıfın Angular servisi olarak tanımlanmasını sağlar. Ayrıca, `providedIn` özelliği ile servisin uygulamanın hangi kısmında erişilebilir olacağını belirleyebilirsiniz (genellikle `'root'` kullanılır, bu sayede servis uygulamanın her yerinden erişilebilir olur).
- **TypeScript sınıfı:** Servis enjekte edildiğinde erişilebilecek kodu tanımlar.

```tsx
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class Calculator {
  add(x: number, y: number) {
    return x + y;
  }
}
```

Bir bileşende bir servisi kullanmak istediğinizde yapmanız gerekenler şunlardır:

1. Servisi **import** edin.
2. Servisin enjekte edileceği bir **sınıf alanı** (class field) tanımlayın. Bu alanı, servisi oluşturan yerleşik **`inject`** fonksiyonunun çağrısının sonucuna atayın.

Aşağıda, bunu **Receipt** bileşeninde nasıl yapabileceğinize dair bir örnek gösterilmiştir:

```tsx
import { Component, inject } from '@angular/core';
import { Calculator } from './calculator';
@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
}
```

## HTTPClient

## 1. Genel Bakış

Angular, `@angular/common/http` paketinde yer alan `HttpClient` servisi ile HTTP üzerinden Backend ile iletişimi kolaylaştırır. Bu servis, **tip güvenli yanıtlar**, **düzgün hata yönetimi**, **istek/yanıt müdahalesi (interceptor)** ve **gelişmiş test araçları** sunar [angular.dev](https://angular.dev/guide/http?utm_source=chatgpt.com).

---

## 2. `HttpClient` Kurulumu

### a) Angular'ın yeni yaklaşımı (`provideHttpClient`)

Angular ından itibaren `HttpClient`, `provideHttpClient` fonksiyonu ile uygulama yapılandırmasına eklenir:

```tsx
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};

```

Ya da hâlâ eski `NgModule` bazlı yapı kullanıyorsan:

```tsx
@NgModule({
  providers: [ provideHttpClient() ]
})
export class AppModule {}

```

Ek opsiyonlarla davranış özelleştirme imkânı da mevcuttur, örneğin:

- `withFetch()` — Modern `fetch` API’sini kullanır (upload progress gibi bazı özellikleri eksiktir)
- `withJsonpSupport()` — `jsonp()` desteği ekler, ancak mümkünse CORS tercih edilmelidir
- `withXsrfConfiguration()` veya `withNoXsrfProtection()` — XSRF korumasını yapılandırır veya devre dışı bırakır
- `withInterceptors()` / `withInterceptorsFromDi()` — Fonksiyonel veya DI tabanlı interceptor’lar tanımlamaya yarar [angular.dev](https://angular.dev/guide/http/setup?utm_source=chatgpt.com).

---

## 3. HTTP İsteklerini Yapılandırmak ve Kullanmak

### a) Temel HTTP Metodları

`HttpClient`, RESTful API çağrıları için şu metodları sağlar:

- `get<T>()`: JSON, text, blob, arraybuffer gibi tiplerde veri alabilir (örneğin `http.get<Config>('/api/config')`) [angular.dev](https://angular.dev/guide/http/making-requests?utm_source=chatgpt.com)[Angular University](https://blog.angular-university.io/angular-http/?utm_source=chatgpt.com).
- `post<T>()`, `put<T>()`, `patch<T>()`, `delete<T>()`: Veriyi sunucuya göndermek ve güncellemek için kullanılır [Angular University](https://blog.angular-university.io/angular-http/?utm_source=chatgpt.com)[angular.io](https://angular.io/guide/http-send-data-to-server?utm_source=chatgpt.com).

### b) `responseType` Kullanımı

Varsayılan olarak JSON sonucu alırsın, ancak `responseType` parametresi ile farklı türleri belirleyebilirsin:

| `responseType` | Açıklama |
| --- | --- |
| `'json'` | (Varsayılan) JSON olarak alır |
| `'text'` | Düz metin döner |
| `'arraybuffer'` | Ham byte verisi içerir |
| `'blob'` | `Blob` tipi veri döner |

```tsx
http.get('/path', { responseType: 'text' as const })

```

Önemli: `responseType`, literal türde (`'text' as const`) olmalıdır [angular.dev](https://angular.dev/guide/http/making-requests?utm_source=chatgpt.com).

---

## 4. RxJS ve Observable Yapısına Detaylar

- `HttpClient` metodları, **RxJS Observable** döner.
- İsteği başlatmak için `.subscribe()` çağrılmalıdır.
- Her yeni abonelik (subscribe) yeni bir HTTP isteği oluşturur [Angular University](https://blog.angular-university.io/angular-http/?utm_source=chatgpt.com)[angular.dev](https://angular.dev/guide/http/making-requests?utm_source=chatgpt.com).

Bu sınırlamalardan kaçınmak için `shareReplay` gibi operatörler kullanılabilir:

> “Bu operatör, AJAX sonuçlarını önbelleğe almak için idealdir…” Angular University
> 

İstekleri birleştirmek için `forkJoin`, sıralamak için `switchMap` operatörleri kullanılabilir [Angular University](https://blog.angular-university.io/angular-http/?utm_source=chatgpt.com).

---

## 5. Interceptor ile Taleplerin Müdahalesi

`HttpClient` interceptors sayesinde istek ve yanıt akışını manipüle edebilirsin:

- **Fonksiyonel interceptor** (tercih edilen yaklaşımdır)
- Uygulamanın her yerinden istek geçişinde:
    - Yetkilendirme başlıkları ekleyebilirsin,
    - Hataları yeniden deneyebilir,
    - İstekleri önbelleğe alabilir,
    - Zaman aşımı, loglama, “loading spinner” tetikleme gibi işlemler tanımlayabilirsin [angular.dev](https://angular.dev/guide/http/interceptors?utm_source=chatgpt.com).

Örnek:

```tsx
export function loggingInterceptor(req, next) {
  console.log(req.url);
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'response:', event.status);
    }
  }));
}

provideHttpClient({
  providers: [
    provideHttpClient(withInterceptors([loggingInterceptor]))
  ]
});

```

---

## 6. Test Edilebilirlik

Angular HTTP testi, isteklerin beklendiği gibi yapıldığını doğrulamayı kolaylaştırır. `HttpClientTestingModule` ve `HttpTestingController` ile test süreci desteklenir [v17.angular.io](https://v17.angular.io/guide/http-test-requests?utm_source=chatgpt.com).

---

## 7. Özet Tablo

| Konu | Açıklama |
| --- | --- |
| Kurulum | `provideHttpClient()` veya `HttpClientModule` |
| HTTP Metodları | `get`, `post`, `put`, `patch`, `delete` |
| Tip Güvenliği | `http.get<T>()` vs `Observable<Object>` |
| `responseType` | `'json'`, `'text'`, `'arraybuffer'`, `'blob'` |
| Observable Davranış | Soğuk (cold) stream, abonelik başlatır |
| RxJS Operatörleri | `shareReplay`, `forkJoin`, `switchMap` |
| Interceptor'lar | Fonksiyonel önerilir, birçok kullanım senaryosu |
| Test Desteği | `HttpTestingController` ile birim test imkânı |

## JWT ve jwt.io Nedir?

- **JWT**, "JSON Web Token" anlamına gelir; açık, endüstri standardı bir formattır (RFC 7519) ve JSON nesneleri aracılığıyla güvenli bilgi iletimi sağlar [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com)[Vikipedi](https://en.wikipedia.org/wiki/JSON_Web_Token?utm_source=chatgpt.com).
- **jwt.io**, JWT'leri tarayıcı içinde **kodlamak**, **çözmek** (decode), **doğrulamak** ve **üretmek** için kullanılan interaktif bir araç sunan bir web sitesi ve Auth0 tarafından destekleniyor [JSON Web Tokens - jwt.io](https://jwt.io/?utm_source=chatgpt.com)[JSON Web Tokens - jwt.io](https://www.jwt.io/).

---

## jwt.io’nun Özellikleri

1. **JWT Debugger**:
    - JWT'yi tarayıcı ortamında güvenli şekilde decode, doğrulama ve oluşturma işlemleri yapılır; site token’ı dışarı göndermez [JSON Web Tokens - jwt.io](https://jwt.io/?utm_source=chatgpt.com).
    - Kullanıcı, bir JWT yapıştırarak bu işlemleri gerçekleştirebilir. Ayrıca `Generate example` seçeneğiyle örnek tokenlar üretebilir.
2. **Güvenlik Uyarısı**:
    - Debug işlemi tamamen yerelde (kullanıcının tarayıcısında) gerçekleşir. Token veya içerdiği hassas bilgilerin güvenliği açısından dikkatli olunmalıdır [JSON Web Tokens - jwt.io](https://jwt.io/?utm_source=chatgpt.com).
3. **Kaynaklar**:
    - **Introduction**: JWT yapısı, kullanım nedenleri ve çalışması hakkında ayrıntılı açıklamalar içerir [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com).
    - **Libraries**: JWT işlemlerini kolaylaştırmak için birçok programlama dili ve algoritmada (HMAC, RSA, ECDSA gibi) kullanılabilir kütüphaneler listelenmiştir [JSON Web Tokens - jwt.io](https://jwt.io/libraries?utm_source=chatgpt.com).

---

## JWT’in Yapısı ve Çalışma Mantığı

### Yapı:

JWT üç bölümden oluşur: **Header**, **Payload** ve **Signature**, her biri Base64Url ile kodlanıp nokta (.) ile ayrılır [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com)[Vikipedi](https://en.wikipedia.org/wiki/JSON_Web_Token?utm_source=chatgpt.com).

- **Header (Başlık)**: Algoritma (`alg`: HS256, RS256 vb.) ve token tipi (`typ`: JWT) gibi bilgiler içerir [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com)[Vikipedi](https://en.wikipedia.org/wiki/JSON_Web_Token?utm_source=chatgpt.com).
- **Payload (Yük)**: `iss`, `exp`, `sub`, `aud` gibi kayıtlı (registered) claim’lerin yanı sıra, özel kullanım için tanımlanan public veya private claim’ler içerir [JSON Web Tokens - jwt.io+1](https://jwt.io/introduction?utm_source=chatgpt.com).
- **Signature (İmza)**: Header ve Payload bölümünün, belirtilen algoritma ve gizli anahtar veya özel anahtarla imzalanmasıyla oluşur; token’ın bütünlüğünü ve doğruluğunu sağlar [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com)[Vikipedi](https://en.wikipedia.org/wiki/JSON_Web_Token?utm_source=chatgpt.com).

### Çalışma Süreci:

1. Kullanıcı giriş yapar → sunucu JWT oluşturur ve imzalar.
2. Token, kullanıcıya (istemciye) gönderilir.
3. İstemci, korumalı isteklere Authorization header’ında `Bearer <token>` olarak token’ı ekleyerek gönderir.
4. Sunucu, token’ın imzasını doğrular ve payload içindeki claim'lere göre işlemi yürütür [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com)[GeeksforGeeks](https://www.geeksforgeeks.org/web-tech/json-web-token-jwt/?utm_source=chatgpt.com).

---

## JWT Kullanım Alanları & Avantajları

### Ne Zaman Kullanılır?

- **Yetkilendirme (Authorization)**: Giriş sonrası her istekte token kullanılarak erişimler kontrol edilir. Tekil oturum (SSO) senaryolarında sık tercih edilir [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com).
- **Bilgi Paylaşımı (Information Exchange)**: Gönderenin kimliği doğrulanabilir; içeriğin değiştirilmediği garanti edilir [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com).

### Avantajları:

- **Stateless (Durumsuz) Yapı**: Sunucu tarafında oturum bilgisi saklamaya gerek kalmaz, bu da ölçeklenebilirliği artırır [supertokens.com](https://supertokens.com/blog/what-is-jwt?utm_source=chatgpt.com)[blog.algomaster.io](https://blog.algomaster.io/p/json-web-tokens?utm_source=chatgpt.com).
- **Kompakt ve URL-uyumlu**: JSON yapısı ve Base64 kodlama sayesinde daha küçük boyutlu ve HTTP üzerinden taşımaya uygundur [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com)[Vikipedi](https://en.wikipedia.org/wiki/JSON_Web_Token?utm_source=chatgpt.com).
- **Kolay işlenebilir**: JSON formatı birçok dilde kolay pars edilebilir; XML tabanlı SAML’a göre daha sade ve kullanışlıdır [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com).

---

## Doğrulama (Validation) ve Kontrol (Verification) Arasındaki Fark

- **Validation**: Token yapısının, formatının ve içerdiği claim’lerin (örneğin `exp`, `iat`, `nbf`) mantıksal doğruluğunu kontrol eder [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com).
- **Verification**: Token’ın imzasının geçerliliğini, issuer (`iss`) ve audience (`aud`) gibi claim’lerin beklenen değerlere sahip olduğunu doğrular [JSON Web Tokens - jwt.io](https://jwt.io/introduction?utm_source=chatgpt.com).

Bu iki işlem genelde bir arada kullanılarak tam bir güvenlik kontrolü sağlanır.

Tabii! 😊 Frontend Development’ta **State Management (Durum Yönetimi)** kavramını detaylıca anlatayım.

# State Management

## 🔹 1. State (Durum) Nedir?

**State**, bir uygulamanın o anki “veri durumunu” temsil eder.
Frontend uygulamalarında kullanıcı etkileşimleri, API’den gelen veriler veya uygulamanın kendi iç mantığı ile bu **state** sürekli değişir.

Örnek:

* Bir “To-Do” uygulamasında yapılacak işler listesi (`tasks`).
* Bir e-ticaret sitesinde kullanıcının sepeti (`cart`).
* Kullanıcının giriş yapıp yapmadığını gösteren bilgi (`isLoggedIn`).

---

## 🔹 2. State Neden Yönetilmeli?

Uygulamalar büyüdükçe, state karmaşıklaşır. Yönetilmezse:

* **Kod tekrarı** artar,
* **Hatalar** daha sık görülür,
* Komponentler arasında veri paylaşımı zorlaşır.

Bu yüzden state’i **doğru organize etmek** gerekir.

---

## 🔹 3. State Türleri

State yönetimini daha iyi anlamak için state’i **katmanlara** ayırabiliriz:

1. **Local State (Yerel Durum)**

   * Sadece ilgili component içinde geçerlidir.
   * Örn: Input’a girilen metin (`inputValue`).
   * React’te `useState` veya Angular’da `@Input/@Output` ile yönetilir.

2. **Shared State (Paylaşılan Durum)**

   * Birden fazla component’in erişmesi gerekir.
   * Örn: Kullanıcının giriş bilgisi (`user`).
   * Çözüm: Context API, props drilling veya state management kütüphaneleri.

3. **Global State (Küresel Durum)**

   * Tüm uygulama için ortaktır.
   * Örn: Tema (dark/light mode), oturum durumu.
   * Redux, Zustand, MobX gibi kütüphanelerle yönetilir.

4. **Server State (Sunucu Durumu)**

   * API’den gelen asenkron veriler.
   * Örn: Ürünler listesi (`products`), kullanıcı profili.
   * Çözüm: React Query, SWR gibi kütüphaneler.

5. **URL State (Adres Çubuğu Durumu)**

   * Route, query parametreleri, hash.
   * Örn: `/products?page=2&filter=cheap`.

---

## 🔹 4. State Management Yöntemleri

### a) Basit Uygulamalar İçin

* Local state (`useState`, `useReducer`)
* Componentler arası veri aktarımı (props)

### b) Orta Büyüklükte Uygulamalar İçin

* **Context API (React)**
* Angular’da **Service** yapısı

### c) Büyük Ölçekli Uygulamalar İçin

* **Redux** (React dünyasında en yaygın)
* **MobX** (daha az boilerplate, observable tabanlı)
* **Zustand** (minimal, modern)
* **Recoil** (Facebook tarafından, kolay öğrenilebilir)
* **NgRx** (Angular için Redux benzeri yapı)
* **Vuex / Pinia** (Vue.js için)

---

## 🔹 5. State Management Prensipleri

1. **Tek Gerçek Kaynak (Single Source of Truth)**

   * State merkezi bir yerde tutulmalı.
   * Örn: Redux Store.

2. **Salt Okunur (Immutable) State**

   * State doğrudan değiştirilmez, action ile değiştirilir.
   * Örn: `state.count = 1` yerine `setCount(count + 1)`.

3. **Değişiklikler Tahmin Edilebilir Olmalı**

   * Reducer fonksiyonları gibi saf fonksiyonlarla state değiştirilmeli.

---

## 🔹 6. State Yönetimi İçin Örnek Akış

### React + Redux örneği:

1. **State** → Store’da tutulur.
2. **Action** → Kullanıcı etkileşimi ile tetiklenir.
3. **Reducer** → State’i günceller.
4. **UI** → Yeni state ile render olur.

Örn: “Sepete ürün ekle” işlemi

```js
// Action
{ type: "ADD_TO_CART", payload: product }

// Reducer
function cartReducer(state, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
}
```

---

## 🔹 7. Doğru Yöntemi Seçmek İçin İpuçları

* Uygulama **küçük** → Local State yeterlidir.
* Orta ölçek + birkaç shared state → Context API.
* Büyük ölçek + karmaşık etkileşim → Redux, Zustand, MobX.
* Çok fazla API çağrısı → React Query veya SWR ile yönet.

---

# 🔹 1. Local State (Component İçinde Yönetim)

En basit yöntem: state, component içinde tutulur.

### `todo.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
```

### `todo.component.html`

```html
<div>
  <h2>Todo List</h2>
  <input [(ngModel)]="newTodo" placeholder="Add new todo" />
  <button (click)="addTodo()">Add</button>

  <ul>
    <li *ngFor="let todo of todos; let i = index">
      {{ todo }}
      <button (click)="removeTodo(i)">❌</button>
    </li>
  </ul>
</div>
```

👉 Burada state (`todos`) sadece bu component içinde geçerli. Başka bir component erişemez.

---

# 🔹 2. Service ile State Management

**Service** kullanarak state’i component dışına taşıyabiliriz.
Bu sayede farklı componentler aynı state’e erişebilir.

### `todo.service.ts`

```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<string[]>([]);
  todos$ = this.todosSubject.asObservable();

  get todos(): string[] {
    return this.todosSubject.value;
  }

  addTodo(todo: string) {
    const updated = [...this.todos, todo];
    this.todosSubject.next(updated);
  }

  removeTodo(index: number) {
    const updated = this.todos.filter((_, i) => i !== index);
    this.todosSubject.next(updated);
  }
}
```

### `todo.component.ts`

```ts
import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todos$ = this.todoService.todos$;
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }
}
```

### `todo.component.html`

```html
<div>
  <h2>Todo List (Service)</h2>
  <input [(ngModel)]="newTodo" placeholder="Add new todo" />
  <button (click)="addTodo()">Add</button>

  <ul>
    <li *ngFor="let todo of (todos$ | async); let i = index">
      {{ todo }}
      <button (click)="removeTodo(i)">❌</button>
    </li>
  </ul>
</div>
```

👉 Burada state **service**’te tutuluyor ve componentler `todos$` üzerinden dinleyebiliyor.
**Reactive** bir yaklaşım: state değiştiğinde UI otomatik güncelleniyor.

---

# 🔹 3. NgRx ile State Management (Redux Mantığı)

**NgRx**, Angular için Redux tarzı global state management kütüphanesidir.
Akış şu şekilde işler:

* **Action** → Kullanıcı etkileşimini temsil eder.
* **Reducer** → State’i nasıl değiştireceğimizi tanımlar.
* **Store** → Uygulamanın global state’ini saklar.
* **Selector** → State’in belirli parçalarını çeker.

---

### a) Action

`todo.actions.ts`

```ts
import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: string }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ index: number }>()
);
```

---

### b) Reducer

`todo.reducer.ts`

```ts
import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.actions';

export const initialState: string[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(removeTodo, (state, { index }) => state.filter((_, i) => i !== index))
);
```

---

### c) Selector

`todo.selectors.ts`

```ts
import { createFeatureSelector } from '@ngrx/store';

export const selectTodos = createFeatureSelector<string[]>('todos');
```

---

### d) Module’de Reducer Kaydı

`app.module.ts`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todoReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

### e) Component Kullanımı

`todo.component.ts`

```ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.actions';
import { selectTodos } from './todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  todos$ = this.store.select(selectTodos);
  newTodo: string = '';

  constructor(private store: Store) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.store.dispatch(addTodo({ todo: this.newTodo.trim() }));
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.store.dispatch(removeTodo({ index }));
  }
}
```

### f) HTML

```html
<div>
  <h2>Todo List (NgRx)</h2>
  <input [(ngModel)]="newTodo" placeholder="Add new todo" />
  <button (click)="addTodo()">Add</button>

  <ul>
    <li *ngFor="let todo of (todos$ | async); let i = index">
      {{ todo }}
      <button (click)="removeTodo(i)">❌</button>
    </li>
  </ul>
</div>
```

---


# 🔹 1. Temeller

Frontend uygulamalarında **state**, uygulamanın o anki durumunu saklayan veridir.
Örneğin bir **Todo App**’te:

* Yapılacaklar listesi (`todos`)
* Kullanıcı giriş durumu (`isLoggedIn`)
* Tema seçimi (`darkMode`)

State sürekli değişir. Bu değişim kontrol edilmezse, uygulama karmaşık hale gelir.
👉 Çözüm: **State Management**

---

# 🔹 2. Store (Depo)

**Store**, uygulamanın state’ini saklayan **tek merkezi yer**dir.

* Uygulamanın “beyni” gibi çalışır.
* Tüm componentler buradan veri okur ve güncellemeleri buraya gönderir.
* Angular’da `@ngrx/store` ile kullanılır.

Örneğin bir `Todo Store`:

```ts
export interface AppState {
  todos: string[];
}
```

---

# 🔹 3. Actions (Eylemler)

**Actions**, “Ne oldu?” sorusunun cevabıdır.

* Kullanıcı veya sistem tarafından tetiklenir.
* State’in nasıl değişeceğini değil, **ne yapılacağını** belirtir.
* Sadece bir **tip** ve **opsiyonel veri (payload)** içerir.

Örn:

```ts
import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: string }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ index: number }>()
);
```

* `[Todo] Add Todo` → “Todo alanında yeni bir görev eklendi.”
* Payload: `{ todo: "Ders çalış" }`

---

# 🔹 4. Reducers

**Reducer**, “State nasıl değişecek?” sorusunun cevabıdır.

* Saf fonksiyondur (aynı input → aynı output).
* Mevcut state’i alır, action’a göre yeni state döner.
* **State immutable (değiştirilemez)** olduğu için, kopya alınarak güncellenir.

Örn:

```ts
import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.actions';

export const initialState: string[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(removeTodo, (state, { index }) => state.filter((_, i) => i !== index))
);
```

Burada:

* `addTodo` geldiğinde → eski liste + yeni todo ekleniyor.
* `removeTodo` geldiğinde → ilgili index siliniyor.

---

# 🔹 5. Store–Action–Reducer Döngüsü

1. **UI (component)** bir kullanıcı olayı algılar.
   → Örn: “Add” butonuna tıklanır.
2. **Action dispatch edilir** (gönderilir).
   → `this.store.dispatch(addTodo({ todo: "Alışveriş yap" }));`
3. **Reducer**, gelen action’a göre state’i günceller.
   → Yeni state hesaplanır.
4. **Store**, yeni state’i saklar.
5. **UI**, Store’daki state’i abonelik (`select`) ile dinler ve otomatik güncellenir.

---

# 🔹 6. Todo App Örneği (Basitleştirilmiş)

### Component (UI → Action)

```ts
this.store.dispatch(addTodo({ todo: "Angular öğren" }));
```

### Reducer (Action → Yeni State)

```ts
on(addTodo, (state, { todo }) => [...state, todo])
```

### Store (Uygulamanın merkezi state’i)

```ts
StoreModule.forRoot({ todos: todoReducer })
```

### Component (Store → UI)

```ts
todos$ = this.store.select('todos');
```

---

## 🔹 SEO (Search Engine Optimization) – Arama Motoru Optimizasyonu

SEO, web sitelerinin Google, Bing gibi arama motorlarında daha üst sıralarda çıkabilmesi için yapılan iyileştirmelerin bütünüdür.
Amaç: **Organik trafik artırmak.**

### SEO’nun Temel Unsurları

1. **Teknik SEO**

   * Site hızı (PageSpeed, Core Web Vitals)
   * Mobil uyumluluk (responsive design)
   * URL yapısı (kısa, açıklayıcı ve anahtar kelime dostu)
   * Sitemap.xml ve robots.txt dosyaları
   * SSL sertifikası (https\://)

2. **On-Page SEO**

   * Doğru başlık etiketleri (H1, H2, H3…)
   * Meta title & description (anahtar kelime uyumlu)
   * Görsel optimizasyonu (alt etiketler, boyutlar)
   * İç linkleme (site içi bağlantılar)
   * Kullanıcı deneyimi (okunabilirlik, erişilebilirlik)

3. **Off-Page SEO**

   * Backlinkler (başka sitelerden referans bağlantılar)
   * Sosyal medya paylaşımları
   * Güvenilirlik ve otorite (Domain Authority, Page Authority)

---

## 🔹 SSR (Server-Side Rendering) – Sunucu Taraflı Render

SSR, bir web sayfasının HTML çıktısının **sunucuda hazırlanıp tarayıcıya gönderilmesi** yöntemidir.
Özellikle **JavaScript frameworkleri (React, Next.js, Angular Universal, Nuxt.js)** ile önem kazanmıştır.

### SSR’nin Mantığı

* **CSR (Client-Side Rendering)**’de (React, Angular gibi klasik SPA’larda), tarayıcıya boş bir HTML iskeleti gönderilir, içerik **JavaScript ile tarayıcıda** yüklenir.
* **SSR**’de ise sunucu, sayfayı tam işlenmiş HTML olarak gönderir. Tarayıcı bu HTML’yi doğrudan görüntüler, ardından JavaScript interaktifliği ekler.

### SSR’nin Avantajları

✅ **SEO dostu:** Arama motorları HTML içeriğini hemen görebilir (JS yüklenmesini beklemek gerekmez).
✅ **Daha hızlı ilk yükleme (TTFB):** Kullanıcı daha hızlı içerik görür.
✅ **Paylaşımda düzgün önizleme:** Sosyal medya linkleri için meta tag’ler doğru çıkar.

### SSR’nin Dezavantajları

❌ Sunucu yükü artar (her istekte HTML render edilmesi gerekir).
❌ Önbellekleme ve performans optimizasyonu daha karmaşıktır.
❌ CSR’ye göre geliştirme süreci biraz daha zahmetli olabilir.

---

## 🔹 SEO & SSR İlişkisi

* Google, JavaScript’i çalıştırabilir ama **her zaman %100 doğru render edemez** (özellikle dinamik içeriklerde).
* SSR ile sayfanın içeriği **sunucuda hazırlandığı için** Google botları sayfanın içeriğini direkt görür → **SEO’ya büyük katkı sağlar.**

### Örnek Senaryo

* Eğer bir blog veya e-ticaret sitesi yapıyorsan → SSR veya **SSG (Static Site Generation)** kullanmak SEO için kritik.
* Eğer sadece dashboard tarzı, login gerektiren bir uygulama yapıyorsan → SSR’ye gerek yok, CSR yeterli.

---

📌 **Kısacası:**

* **SEO:** Sitenin arama motorlarında görünürlüğünü artırmaya yönelik tüm çalışmalar.
* **SSR:** Özellikle SEO uyumluluğu için dinamik web uygulamalarında kullanılan güçlü bir yöntem.

---

# XSS (Cross-Site Scripting)

**Tanım:** Bir uygulamanın kullanıcıya dönmeden önce veya kullanıcı tarayıcısında çalıştırdığı HTML/JS içine kötü niyetli kod enjekte edilmesi. Sonuç: oturum çalınması, sayfa içi işlem yapma, keylogger, kötü yönlendirme vb.

**Türleri**

* **Reflected XSS:** Kullanıcı girdisi (URL param, form alanı) sunucuda işlenmeden geri döndürülür ve tarayıcıda çalışır. (ör. `?q=<script>...`)
* **Stored XSS:** Kötü içerik DB, yorum, profil gibi kalıcı alana kaydedilir; başka kullanıcılar açtığında çalışır.
* **DOM-based XSS:** Sunucu tarafı değişiklik yok; client-side JS, DOM içeriğini kötü veriye göre oluşturur (ör. `element.innerHTML = location.hash`).

**Örnek (vulnerable — DOM XSS):**

```html
<!-- index.html -->
<div id="out"></div>
<script>
  // KÖTÜ: URL hash'i doğrudan innerHTML'e yazmak
  document.getElementById('out').innerHTML = location.hash.substring(1);
</script>
```

Saldırgan: `https://site.com/#<img src=x onerror=alert(1)>`

**Düzeltme / Korunma**

* **Context-sensitive output encoding** (HTML, attribute, JS, URL, CSS için ayrı encode). Örneğin HTML içerik için `textContent`/`innerText` kullan.
* **Sanitization**: Kullanıcıdan gelen HTML kabul edilecekse güvenli hale getir (ör. DOMPurify).
* **Framework güvenlik özellikleri**: React/Vue gibi frameworkler otomatik escape yapar; `dangerouslySetInnerHTML` kullanıyorsan mutlaka sanitize et.
* **CSP (Content Security Policy)**: `script-src` kısıtlayarak inline script'leri ve dış domainleri sınırlamak XSS etkisini azaltır.
* **HttpOnly cookie**: JS ile çalınmayı engeller (ama tüm XSS etkilerini durdurmaz).
* **Trusted Types**: modern tarayıcılarda DOM XSS riskini azaltmaya yardımcı olur.

**Kodla fix (DOMPurify örneği):**

```html
<script src="https://unpkg.com/dompurify@2.3.6/dist/purify.min.js"></script>
<script>
  const safe = DOMPurify.sanitize(location.hash.substring(1));
  document.getElementById('out').innerHTML = safe;
  // ya da: element.textContent = kullanıcı_metni; // tamamen güvenli (html yoksa)
</script>
```

---

# CSRF (Cross-Site Request Forgery)

**Tanım:** Kullanıcının tarayıcısında aktif olan kimlik bilgilerini (cookie vs) kullanarak, saldırganın hedef uygulamaya *kullanıcı adına* istek göndermesi. Kullanıcı farkında olmadan para transferi, parola değişikliği gibi işlemler tetiklenebilir.

**Saldırı akışı (basit):**

1. Kullanıcı bankaya girişli.
2. Saldırgan kendi sitesine bir form koyar:

```html
<form action="https://bank.example/transfer" method="POST" id="f">
  <input name="to" value="attacker">
  <input name="amount" value="1000">
</form>
<script>document.getElementById('f').submit();</script>
```

3. Tarayıcı cookie'leri otomatik gönderir → işlem gerçekleşir.

**Korunma teknikleri**

* **Synchronizer token pattern (CSRF token):** Her kullanıcı oturumu için rastgele token oluştur, formlara gizli input olarak ekle, sunucuda doğrula.
* **SameSite cookie:** `SameSite=Lax`/`Strict` ile üçüncü taraf isteklerde cookie gönderimini sınırla. (Modern tarayıcılarda güçlü bir koruma sağlar.)
* **Double-submit cookie:** Sunucu tarafından verilen token cookie'de saklanır ve formda/post header'ında tekrar gönderilir; sunucu iki token'ı karşılaştırır.
* **Custom headers / CORS:** XHR/fetch ile gönderilen özel header'lar (ör. `X-Requested-With`) cross-site basit isteklerde otomatik gönderilmez — fakat bu tek başına güvenlik garantisi değildir.
* **Require re-auth for sensitive ops:** Para transferleri gibi kritik işlemlerde OTP/şifre yeniden iste.
* **Not using cookies for auth:** Token (Bearer) authentication ile (localStorage veya başka) ve CORS kontrolü ile CSRF riski farklı yönetilir — dikkat: localStorage token'ı XSS'e karşı hassastır.

**Basit Node/Express örneği (fikir):**

```js
// sunucu: token oluştur
req.session.csrfToken = crypto.randomBytes(24).toString('hex');
res.locals.csrfToken = req.session.csrfToken; // template'e verilerek formlara eklenir

// form içinde:
<input type="hidden" name="_csrf" value="{{csrfToken}}">

// POST kontrolü:
if (req.body._csrf !== req.session.csrfToken) return res.status(403).send('CSRF fail');
```

---

# DOM Sanitizer (sanitization ve tarayıcı tarafı sanitizasyon araçları)

**Nedir / neden önemli:** Kullanıcılardan gelen HTML/markup içeriğini **güvenli** hale getirmek: script, event handler (onerror), `javascript:` protokolü gibi zararlı parçaları çıkarır veya kaçış/encode eder. `sanitize` → *içeriği güvenli hale getirir*; `escape`/`encode` ise raw içerikte özel karakterleri gösterilir hale getirir.

**Popüler yaklaşımlar**

* **Server-side sanitization:** Sunucuda gelen HTML/Markdown'ı sanitize et. (DB'ye kaydetmeden önce)
* **Client-side sanitization:** Tarayıcıya gönderilen HTML'i DOMPurify gibi kütüphanelerle temizle; veya sunucu zaten temizlediyse doğrudan `innerHTML` kullan.
* **Allowed-list (whitelist) politikası:** Hangi tag/attribute izinli, hangisi yasak — tersine düşün: izinli olanları belirle, gerisini at.
* **Trusted Types (tarayıcı API):** `innerHTML` atamalarının tipini kısıtlayarak sadece güvenilir kaynaklı HTML kabul edilmesini sağlayabilir.

**DOMPurify örneği (kullanım çok yaygın):**

```js
// npm veya CDN ile DOMPurify ekle
const clean = DOMPurify.sanitize(dirtyHtml, {ALLOWED_TAGS: ['b','i','a','p','ul','li'], ALLOWED_ATTR: ['href']});
el.innerHTML = clean;
```

**Dikkat edilmesi gerekenler**

* `sanitize` *bazı* riskleri azaltır ama CSP, input validation ve encoding ile birlikte kullanılmalı.
* Sanitize edip DB'ye kaydederken, daha sonra başka bir yerde farklı contextte (attribute, JS context) kullanırsanız tekrar encode/sanitize gereklidir.
* **Sanitization ≠ güvenli hale getirme garantisi**: yanlış yapılandırılmış sanitizer veya yanlış kullanım (ör. sanitize etmeyi unutmak) risk yaratır.

---

# Maskeleme (Masking)

**Anlamları / kullanım alanları**

1. **UI Input Masking:** Kullanıcı arayüzünde gösterimsel maskeleme (kredi kartı numarasını `•••• •••• •••• 1234` göstermek; telefon numarası formatı vs). Ama bu yalnızca *görsel*; veri hala saklanıyor olabilir.
2. **Data Masking (gizleme / redaction):** Veritabanı/raporlarda PII’yi (kişisel veri) azaltmak için veri kısmını gizleme. Örn. loglarda TCKN/SSN tamamen saklanmaz, sadece hash/portioned form tutulur.
3. **Tokenization / Format-preserving encryption:** Hassas verinin yerine token koyma; gerçek değeri güvenli bir vault’ta saklama.
4. **Masking in logs / UIs:** Uygulama loglarında veya hata raporlarında hassas alanları maskele.

**Neden önemli:** GDPR/KVKK/PCI gibi düzenlemeler; ayrıca veri sızıntısı durumunda etkiyi azaltır.

**Basit örnek — JS ile maskeleme (kredi kartı):**

```js
function maskCard(cardNumber) {
  // sadece son 4 göster
  return cardNumber.replace(/\d(?=\d{4})/g, '*');
}
console.log(maskCard("4111222233334444")); // ************4444
```

**Server-side kurallar**

* Hassas veriyi **loglama**: asla tam olarak loglama. Maskelenmiş veya hashlenmiş tut.
* Veritabanında hassas veriyi saklarken **encryption at rest** ya da tokenization kullan.
* UI’da gösterirken **geri-doğrulama / re-auth**: tam değeri göstermek gerekiyorsa kullanıcıdan parola/OTP iste.

**Maskeleme vs Şifreleme**

* **Maskeleme** gösterimi sınırlar; veri hala plaintext olabilir (UI mask).
* **Şifreleme** verinin gizliliğini sağlar (decryption anahtarı olmadan okunamaz).
* **Tokenization** ise gerçek veriyi token ile değiştirir.

---

# Pratik Güvenlik Kontrol Listesi (Quick Checklist)

* XSS için:

  * Her çıkış bağlamına göre encode et (HTML, attribute, JS, URL).
  * `innerHTML` yerine `textContent`/`innerText` kullan; `innerHTML` gerekiyorsa sanitize et (DOMPurify).
  * CSP uygula (report-only ile test et), Trusted Types değerlendir.
  * Framework'lerin güvenlik özelliklerini kullan (React, Angular).
* CSRF için:

  * Önemli state-changing isteklerde CSRF token doğrula.
  * Cookie’lerde `SameSite=Lax/Strict`, `HttpOnly`, `Secure` kullan.
  * Kritik işlemler için re-authentication veya 2FA iste.
* Sanitizer için:

  * Güvenilir, iyi bakılan bir kütüphane kullan (örn. DOMPurify).
  * Sunucu tarafında da sanitize et; istemci tarafı sadece ek koruma.
* Maskeleme için:

  * Hassas verileri loglama/paylaşmadan önce maskele.
  * Veri saklarken encryption/tokenization kullan.
  * UI’da sadece gerekli bilgiyi göster, tam bilgiye erişim kontrolü koy.

---

# Kaynak/Kitaplık önerileri (kısa)

* **DOMPurify** — HTML sanitize için (çok kullanılan, performanslı).
* **Trusted Types** — tarayıcı tabanlı koruma yaklaşımları.
* **Helmet** (Express) — HTTP header güvenlik başlıkları kolayca ekler.
* **csurf** (Express) — CSRF koruması için middleware.
* OWASP rehberleri — XSS/CSRF/Output Encoding konularında iyi uygulamalar (OWASP'ı referans al; frameworklerin kendi dokümantasyonları da önemli).