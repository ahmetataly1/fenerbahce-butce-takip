// Fenerbahçe SK 2024-2025 Sezonu Şeffaf Finansal Başlangıç Verileri
export const CATEGORIES = {
  INCOME: [
    'Transfer Geliri',
    'Sponsorluk & Reklam',
    'Maç Günü & Bilet Satışı',
    'Mağazacılık (Fenerium)',
    'Yayın & Turnuva Gelirleri',
    'Diğer Gelirler'
  ],
  EXPENSE: [
    'Transfer Bonservis Gideri',
    'Sporcu & Personel Maaşları',
    'Amatör Şubeler Desteği',
    'Tesis & Stadyum Operasyonu',
    'Lojistik, Seyahat & Kamp',
    'Finansman & Vergi Giderleri',
    'Diğer Giderler'
  ]
};

export const INITIAL_TRANSACTIONS = [
  {
    id: 'fb-tx-1',
    title: 'Ferdi Kadıoğlu Transfer Geliri (Brighton)',
    amount: 1050000000,
    type: 'income', // 'income' | 'expense'
    category: 'Transfer Geliri',
    date: '2024-08-27',
    description: 'Premier Lig ekibi Brighton kulübüne yapılan rekor transfer satışı ve bonuslar.',
    currency: '₺'
  },
  {
    id: 'fb-tx-2',
    title: 'Otokoç Ana Göğüs Sponsorluğu',
    amount: 320000000,
    type: 'income',
    category: 'Sponsorluk & Reklam',
    date: '2024-07-01',
    description: '2024-2025 Sezonu Futbol A Takımı resmi göğüs sponsorluk anlaşması taksiti.',
    currency: '₺'
  },
  {
    id: 'fb-tx-3',
    title: 'Ülker Stadyumu Kombine & VIP Loca Satışları',
    amount: 430000000,
    type: 'income',
    category: 'Maç Günü & Bilet Satışı',
    date: '2024-07-15',
    description: 'Tüm tribünler ve VIP locaların rekor sürede tükenen kombine kart hasılatı.',
    currency: '₺'
  },
  {
    id: 'fb-tx-4',
    title: 'Fenerium Yeni Sezon Forma & Ürün Satışları',
    amount: 390000000,
    type: 'income',
    category: 'Mağazacılık (Fenerium)',
    date: '2024-08-10',
    description: 'Çubuklu, Sarı ve Lacivert formaların mağaza ve e-ticaret satış rekoru.',
    currency: '₺'
  },
  {
    id: 'fb-tx-5',
    title: 'UEFA Avrupa Ligi Katılım & Yayın Payı',
    amount: 215000000,
    type: 'income',
    category: 'Yayın & Turnuva Gelirleri',
    date: '2024-09-05',
    description: 'UEFA kulüp katsayısı ve lig aşaması katılım primi havuzu.',
    currency: '₺'
  },
  {
    id: 'fb-tx-6',
    title: 'Youssef En-Nesyri Bonservis Bedeli',
    amount: 685000000,
    type: 'expense',
    category: 'Transfer Bonservis Gideri',
    date: '2024-07-25',
    description: 'Sevilla kulübünden forvet transferi için ödenen resmi bonservis bedeli.',
    currency: '₺'
  },
  {
    id: 'fb-tx-7',
    title: 'Futbol A Takım Oyuncu & Teknik Heyet Maaşları',
    amount: 520000000,
    type: 'expense',
    category: 'Sporcu & Personel Maaşları',
    date: '2024-08-31',
    description: 'Dönemsel hakediş, maç başı primler ve teknik kadro maaş ödemeleri.',
    currency: '₺'
  },
  {
    id: 'fb-tx-8',
    title: 'Fenerbahçe Beko & Kadın Basketbol Şube Bütçesi',
    amount: 250000000,
    type: 'expense',
    category: 'Amatör Şubeler Desteği',
    date: '2024-08-05',
    description: 'EuroLeague ve lig operasyonları için basketbol branşlarına aktarılan kulüp katkısı.',
    currency: '₺'
  },
  {
    id: 'fb-tx-9',
    title: 'Ülker Stadyumu & Samandıra Tesisleri Yenileme',
    amount: 65000000,
    type: 'expense',
    category: 'Tesis & Stadyum Operasyonu',
    date: '2024-06-20',
    description: 'Hibrit çim yenilemesi, aydınlatma sistemleri ve antrenman sahası modernizasyonu.',
    currency: '₺'
  },
  {
    id: 'fb-tx-10',
    title: 'Avrupa Deplasmanları Özel Uçak & Otel Lojistiği',
    amount: 32000000,
    type: 'expense',
    category: 'Lojistik, Seyahat & Kamp',
    date: '2024-09-20',
    description: 'Futbol ve Basketbol takımlarının Avrupa seyahatleri kiralık uçak ve konaklama giderleri.',
    currency: '₺'
  }
];
