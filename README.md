# 🟡🔵 Fenerbahçe SK - Şeffaf Bütçe ve Gelir-Gider Takip Portalı

Bu proje, **Web Geliştirme; JavaScript Proje Yönergesi** kapsamında geliştirilmiş; modern **ReactJS** kütüphanesi, **Bootstrap 5** framework'ü ve **LocalStorage** kalıcılığı kullanan kapsamlı bir finansal takip ve CRUD uygulamasıdır.

Fenerbahçe Spor Kulübü'nün kamuoyuna ve KAP'a sunduğu şeffaf finansal yaklaşımından ilham alınarak hazırlanmıştır. Kulübün transfer, sponsorluk, maç günü ve operasyonel gelir-gider kalemlerini takip etmeyi sağlar.

---

## 🌟 Proje Özellikleri ve Yönerge Çıktıları

### 1. 🧱 HTML Temelleri
* Semantik HTML5 etiketleri (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`) kullanıldı.
* Erişilebilir form alanları, etiketler (`<label>`), `aria-` öznitelikleri ve modal pencereler tanımlandı.
* SEO uyumlu `meta` etiketleri ve favicon entegrasyonu yapıldı.

### 2. 🎨 CSS Temelleri & Bootstrap 5
* **Bootstrap 5.3** ve **Bootstrap Icons** kütüphaneleri kurulup projeye entegre edildi.
* Kulübün resmi renkleri (Lacivert: `#002d72`, Sarı: `#ffd100`) CSS değişkenleri (`:root`) ile özel sınıflara (`.bg-fb-gradient`, `.btn-fb-yellow` vb.) dönüştürüldü.
* Grid sistemi (`row`, `col-12 col-md-4`) ile mobil, tablet ve masaüstü tam responsive (duyarlı) tasarım sağlandı.
* Mikro etkileşimler, yumuşak geçişler (transitions) ve animasyonlar (`@keyframes fadeIn`) eklendi.

### 3. ⚡ JavaScript (ES6+) Temelleri
* **Array Metotları:** `map()`, `filter()`, `reduce()`, `sort()` gibi temel ve ileri düzey dizilim fonksiyonları kullanıldı.
* **LocalStorage API:** Tüm ekleme, güncelleme ve silme işlemleri tarayıcı hafızasına (`localStorage`) anında kaydedilir ve sayfa yenilense de kaybolmaz.
* **Intl.NumberFormat:** Para birimleri Türk Lirası (`₺`) formatında ve dinamik olarak biçimlendirildi.

### 4. ⚛️ ReactJS Kütüphane Temelleri
* **Bileşen Mimarisi (Component-Based):** Proje modüler bileşenlere ayrıldı (`Navbar`, `BudgetSummary`, `BudgetCharts`, `TransactionList`, `TransactionItem`, `TransactionForm`, `TransactionEditModal`, `Footer`).
* **React Hooks:** 
  * `useState`: Form girdileri, modal kontrolleri, filtreler ve bildirimlerin durum yönetimi.
  * `useEffect`: Sayfa açılışında LocalStorage'dan veri okuma ve durum senkronizasyonu.
  * `useMemo`: Arama ve filtreleme işlemlerinde performans optimizasyonu.
* **Props & State İletişimi:** Alt bileşenler ile üst bileşenler arasında temiz veri ve fonksiyon akışı.

---

## 📋 CRUD İşlemleri (Yönerge Gereksinimleri)

| İşlem | Açıklama |
| :--- | :--- |
| **1. Ekle (Create)** | "Yeni Gelir / Gider Ekle" butonu ile açılan modal üzerinden başlık, tutar, kategori, tarih ve açıklama bilgileriyle yeni kayıt eklenir. |
| **2. Listele (Read)** | Tüm kayıtlar aranabilir, türe göre (Tümü, Gelirler, Giderler), kategoriye göre filtrelenebilir ve tarihe/tutara göre sıralanabilir. |
| **3. Güncelle (Update)** | Her işlem satırındaki düzenle butonu (`pencil`) ile modal açılır ve mevcut bilgiler anında güncellenir. |
| **4. Sil (Delete)** | Sil butonu (`trash`) tıklandığında kullanıcıdan onay alınarak kayıt bütçeden ve yerel hafızadan güvenle silinir. |

---

## 📁 Proje Dosya Ağacı

```text
fenerbahce-butce-takip/
├── index.html                   # Semantik ana HTML şablonu
├── netlify.toml                 # Netlify tek tıkla canlıya alma ayarları
├── package.json                 # Bağımlılıklar (React 18, Bootstrap 5, Vite)
├── vite.config.js               # Vite yapılandırması
├── src/
│   ├── main.jsx                 # Uygulama giriş noktası ve CSS importları
│   ├── App.jsx                  # Ana state ve sayfa düzeni
│   ├── index.css                # Özel tema ve renk stilleri
│   ├── components/
│   │   ├── Navbar.jsx           # Üst menü ve amblem
│   │   ├── BudgetSummary.jsx    # Gelir, gider ve net bakiye kartları
│   │   ├── BudgetCharts.jsx     # Gelir ve harcama kategori dağılım barları
│   │   ├── TransactionList.jsx  # Arama, filtreleme ve listeleme
│   │   ├── TransactionItem.jsx  # Tekil işlem satırı / kartı
│   │   ├── TransactionForm.jsx  # Yeni kayıt ekleme modalı (Create)
│   │   ├── TransactionEditModal.jsx # Kayıt güncelleme modalı (Update)
│   │   └── Footer.jsx           # Semantik alt bilgi ve proje künyesi
│   ├── data/
│   │   └── initialData.js       # Fenerbahçe gerçekçi başlangıç verileri
│   └── utils/
│       ├── formatters.js        # Para birimi ve tarih biçimlendirme
│       └── localStorage.js      # Tarayıcı hafıza yöneticisi
└── dist/                        # Netlify yayını için hazır derlenmiş üretim kodları
```

---

## 🚀 Yerel Olarak Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# 1. Proje dizinine girin
cd fenerbahce-butce-takip

# 2. Gerekli bağımlılıkları yükleyin
npm install

# 3. Geliştirici sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresine giderek projeyi test edebilirsiniz.

---

## 🌐 Yayına Alma (Netlify) & GitHub'a Yükleme

### Adım 1: GitHub Reposu Oluşturma ve Yükleme
```bash
git init
git add .
git commit -m "feat: Fenerbahce butce takibi React projesi tamamlandi"
git branch -M main
git remote add origin https://github.com/ahmetataly1/fenerbahce-butce-takip.git
git push -u origin main
```

### Adım 2: Netlify ile Canlıya Alma
1. [netlify.com](https://www.netlify.com/) adresine ücretsiz üye olun veya giriş yapın.
2. **"Add new site"** -> **"Import an existing project"** -> **"GitHub"** seçin.
3. Reponuzu seçin. Projede yer alan `netlify.toml` dosyası sayesinde ayarlar otomatik algılanır:
   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`
4. **"Deploy Site"** butonuna basarak 1 dakika içerisinde canlı linkinizi elde edin!
