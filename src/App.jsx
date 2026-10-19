import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BudgetSummary from './components/BudgetSummary';
import BudgetCharts from './components/BudgetCharts';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import TransactionEditModal from './components/TransactionEditModal';
import Footer from './components/Footer';
import { loadTransactions, saveTransactions, resetToDefaultTransactions } from './utils/localStorage';

export default function App() {
  // ReactJS Temelleri: useState ve useEffect kullanımı
  const [transactions, setTransactions] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [notification, setNotification] = useState(null);

  // İlk yüklemede LocalStorage'dan verileri çek
  useEffect(() => {
    const loadedData = loadTransactions();
    setTransactions(loadedData);
  }, []);

  // Bildirim gösterme yardımcısı
  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // CRUD 1: Ekle (Create)
  const handleAddTransaction = (newTx) => {
    const updated = [newTx, ...transactions];
    setTransactions(updated);
    saveTransactions(updated);
    showToast(`"${newTx.title}" başarıyla sisteme eklendi.`, 'success');
  };

  // CRUD 2: Güncelle (Update)
  const handleUpdateTransaction = (updatedTx) => {
    const updated = transactions.map((t) => (t.id === updatedTx.id ? updatedTx : t));
    setTransactions(updated);
    saveTransactions(updated);
    showToast(`"${updatedTx.title}" başarıyla güncellendi.`, 'info');
  };

  // CRUD 3: Sil (Delete)
  const handleDeleteTransaction = (id, title) => {
    const confirmed = window.confirm(`"${title}" kaydını silmek istediğinize emin misiniz?`);
    if (confirmed) {
      const updated = transactions.filter((t) => t.id !== id);
      setTransactions(updated);
      saveTransactions(updated);
      showToast(`"${title}" kaydı bütçeden silindi.`, 'warning');
    }
  };

  // Varsayılan Verilere Sıfırla
  const handleResetData = () => {
    const confirmed = window.confirm(
      'Tüm bütçe verileri Fenerbahçe SK örnek başlangıç verilerine sıfırlanacaktır. Onaylıyor musunuz?'
    );
    if (confirmed) {
      const defaults = resetToDefaultTransactions();
      setTransactions(defaults);
      showToast('Bütçe kayıtları varsayılan Fenerbahçe verilerine sıfırlandı.', 'primary');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Toast Bildirim Alanı */}
      {notification && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 9999, maxWidth: '400px' }}
        >
          <div
            className={`alert alert-${notification.type} alert-dismissible fade show shadow-lg border-0 d-flex align-items-center gap-2 rounded-3`}
            role="alert"
          >
            <i
              className={`bi ${
                notification.type === 'success'
                  ? 'bi-check-circle-fill'
                  : notification.type === 'warning'
                  ? 'bi-trash-fill'
                  : 'bi-info-circle-fill'
              } fs-5`}
            ></i>
            <div className="flex-grow-1 small fw-semibold">{notification.message}</div>
            <button
              type="button"
              className="btn-close"
              onClick={() => setNotification(null)}
              aria-label="Kapat"
            ></button>
          </div>
        </div>
      )}

      {/* Üst Menü */}
      <Navbar
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onResetData={handleResetData}
      />

      {/* Ana İçerik (Semantik Main) */}
      <main className="container my-4 flex-grow-1">
        {/* Tanıtım / Banner */}
        <section className="bg-fb-gradient text-white rounded-4 p-4 p-md-5 mb-4 shadow position-relative overflow-hidden">
          <div className="position-relative" style={{ zIndex: 2, maxWidth: '780px' }}>
            <span className="badge bg-fb-yellow text-dark fw-bold px-3 py-1 rounded-pill mb-2">
              <i className="bi bi-star-fill text-dark me-1"></i> 2024 - 2025 Sezonu Finansal Tablo
            </span>
            <h1 className="display-6 fw-bold mb-2">
              Fenerbahçe Spor Kulübü Şeffaf Bütçe Portalı
            </h1>
            <p className="lead fs-6 text-light opacity-90 mb-4">
              Kulübümüzün transfer gelirleri, sponsorlukları, stadyum hasılatı ve tüm gider kalemleri 
              şeffaf bir şekilde listelenmektedir. Yeni gelir/gider ekleyebilir, kayıtları düzenleyebilir 
              ve anlık bütçe dengesini takip edebilirsiniz.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-fb-yellow rounded-pill px-4 py-2"
                onClick={() => setIsAddModalOpen(true)}
              >
                <i className="bi bi-plus-circle me-1"></i> Yeni Kayıt Ekle
              </button>
              <a
                href="#islem-listesi"
                className="btn btn-outline-light rounded-pill px-4 py-2"
              >
                <i className="bi bi-arrow-down-circle me-1"></i> Kayıtları İncele
              </a>
            </div>
          </div>
          {/* Arka plan dekoratif filigran */}
          <div
            className="position-absolute end-0 top-50 translate-middle-y opacity-10 pe-4 d-none d-lg-block"
            style={{ pointerEvents: 'none' }}
          >
            <i className="bi bi-shield-shaded" style={{ fontSize: '15rem', color: '#ffd100' }}></i>
          </div>
        </section>

        {/* 1. Finansal Özet Göstergeleri (Toplam Gelir, Gider, Kasa) */}
        <BudgetSummary transactions={transactions} />

        {/* 2. Kategori Dağılım Grafikleri (HTML/CSS Progress Bar ile) */}
        <BudgetCharts transactions={transactions} />

        {/* 3. CRUD İşlem Listesi (Arama, Filtre, Güncelle, Sil) */}
        <div id="islem-listesi">
          <TransactionList
            transactions={transactions}
            onEdit={(tx) => setEditingTransaction(tx)}
            onDelete={handleDeleteTransaction}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />
        </div>
      </main>

      {/* Ekleme Modalı (Create) */}
      <TransactionForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTransaction={handleAddTransaction}
      />

      {/* Güncelleme Modalı (Update) */}
      <TransactionEditModal
        transaction={editingTransaction}
        isOpen={Boolean(editingTransaction)}
        onClose={() => setEditingTransaction(null)}
        onUpdateTransaction={handleUpdateTransaction}
      />

      {/* Alt Bilgi (Semantik Footer) */}
      <Footer />
    </div>
  );
}
