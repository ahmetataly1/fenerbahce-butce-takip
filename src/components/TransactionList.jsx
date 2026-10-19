import React, { useState, useMemo } from 'react';
import TransactionItem from './TransactionItem';
import { CATEGORIES } from '../data/initialData';

export default function TransactionList({ transactions, onEdit, onDelete, onOpenAddModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all'); // 'all' | 'income' | 'expense'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc'); // 'date-desc' | 'date-asc' | 'amount-desc' | 'amount-asc'

  // Tüm kategorilerin listesi (filtreleme için)
  const allCategories = useMemo(() => {
    return Array.from(new Set([...CATEGORIES.INCOME, ...CATEGORIES.EXPENSE]));
  }, []);

  // Javascript filtreleme ve sıralama temelleri (filter, sort)
  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((item) => {
        // Tür Filtresi
        if (typeFilter !== 'all' && item.type !== typeFilter) return false;
        // Kategori Filtresi
        if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
        // Arama Filtresi (başlık veya açıklamada ara)
        if (searchTerm.trim() !== '') {
          const term = searchTerm.toLowerCase();
          const matchTitle = item.title?.toLowerCase().includes(term);
          const matchDesc = item.description?.toLowerCase().includes(term);
          const matchCat = item.category?.toLowerCase().includes(term);
          if (!matchTitle && !matchDesc && !matchCat) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
        if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
        if (sortBy === 'amount-desc') return Number(b.amount) - Number(a.amount);
        if (sortBy === 'amount-asc') return Number(a.amount) - Number(b.amount);
        return 0;
      });
  }, [transactions, searchTerm, typeFilter, categoryFilter, sortBy]);

  return (
    <section className="bg-white rounded-4 p-4 shadow-sm border mb-5">
      {/* Liste Başlığı ve Filtre Kontrolleri */}
      <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1 d-flex align-items-center gap-2 text-fb-navy">
            <i className="bi bi-receipt-cutoff text-fb-yellow"></i>
            Finansal İşlem Hareketleri
          </h4>
          <p className="text-secondary small mb-0">
            Kulübün tüm resmi gelir ve gider kalemlerini filtreleyebilir, güncelleyebilir veya silebilirsiniz.
          </p>
        </div>

        {/* Tür Butonları (Tümü / Gelirler / Giderler) */}
        <div className="btn-group rounded-pill p-1 bg-light border align-self-stretch align-self-lg-auto" role="group">
          <button
            type="button"
            className={`btn btn-sm rounded-pill px-3 fw-semibold ${
              typeFilter === 'all' ? 'btn-fb-yellow shadow-sm' : 'btn-light text-secondary'
            }`}
            onClick={() => setTypeFilter('all')}
          >
            Tümü ({transactions.length})
          </button>
          <button
            type="button"
            className={`btn btn-sm rounded-pill px-3 fw-semibold ${
              typeFilter === 'income' ? 'btn-success text-white shadow-sm' : 'btn-light text-secondary'
            }`}
            onClick={() => setTypeFilter('income')}
          >
            Gelirler ({transactions.filter((t) => t.type === 'income').length})
          </button>
          <button
            type="button"
            className={`btn btn-sm rounded-pill px-3 fw-semibold ${
              typeFilter === 'expense' ? 'btn-danger text-white shadow-sm' : 'btn-light text-secondary'
            }`}
            onClick={() => setTypeFilter('expense')}
          >
            Giderler ({transactions.filter((t) => t.type === 'expense').length})
          </button>
        </div>
      </div>

      {/* Arama, Kategori ve Sıralama Çubuğu */}
      <div className="row g-2 mb-4 bg-light p-3 rounded-3 border">
        {/* Arama Çubuğu */}
        <div className="col-12 col-md-5">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0 text-secondary">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control bg-white border-start-0"
              placeholder="İşlem veya transfer ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary border-start-0 bg-white"
                type="button"
                onClick={() => setSearchTerm('')}
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>
        </div>

        {/* Kategori Filtresi */}
        <div className="col-12 col-sm-6 col-md-4">
          <select
            className="form-select bg-white"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Tüm Kategoriler</option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sıralama */}
        <div className="col-12 col-sm-6 col-md-3">
          <select
            className="form-select bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date-desc">Tarih: En Yeni</option>
            <option value="date-asc">Tarih: En Eski</option>
            <option value="amount-desc">Tutar: En Yüksek</option>
            <option value="amount-asc">Tutar: En Düşük</option>
          </select>
        </div>
      </div>

      {/* Sonuç Sayısı ve Liste */}
      <div className="d-flex justify-content-between align-items-center mb-3 text-secondary small">
        <span>
          Toplam <strong>{filteredTransactions.length}</strong> kayıt listeleniyor
        </span>
        {(searchTerm || typeFilter !== 'all' || categoryFilter !== 'all') && (
          <button
            className="btn btn-link btn-sm text-decoration-none p-0 text-primary"
            onClick={() => {
              setSearchTerm('');
              setTypeFilter('all');
              setCategoryFilter('all');
            }}
          >
            <i className="bi bi-x-circle me-1"></i>Filtreleri Temizle
          </button>
        )}
      </div>

      {/* Liste Öğeleri veya Boş Durum */}
      {filteredTransactions.length > 0 ? (
        <div className="transaction-list">
          {filteredTransactions.map((tx) => (
            <TransactionItem
              key={tx.id}
              transaction={tx}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-5 border rounded-3 bg-light">
          <div className="text-muted mb-3">
            <i className="bi bi-inbox fs-1 opacity-50"></i>
          </div>
          <h5 className="fw-bold text-secondary">Eşleşen İşlem Bulunamadı</h5>
          <p className="text-muted small mb-3">
            Arama kriterlerinizi değiştirebilir veya yeni bir bütçe kalemi ekleyebilirsiniz.
          </p>
          <button
            type="button"
            className="btn btn-fb-yellow btn-sm rounded-pill px-3"
            onClick={onOpenAddModal}
          >
            <i className="bi bi-plus-circle me-1"></i> Yeni İşlem Ekle
          </button>
        </div>
      )}
    </section>
  );
}
