import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/initialData';

export default function TransactionEditModal({ transaction, isOpen, onClose, onUpdateTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Düzenlenecek işlem değiştiğinde form state'ini güncelle
  useEffect(() => {
    if (transaction) {
      setTitle(transaction.title || '');
      setAmount(transaction.amount || '');
      setType(transaction.type || 'income');
      setCategory(transaction.category || '');
      setDate(transaction.date || '');
      setDescription(transaction.description || '');
      setError('');
    }
  }, [transaction]);

  const handleTypeChange = (newType) => {
    setType(newType);
    setCategory(newType === 'income' ? CATEGORIES.INCOME[0] : CATEGORIES.EXPENSE[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Lütfen işlem başlığını giriniz.');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Lütfen geçerli ve sıfırdan büyük bir tutar giriniz.');
      return;
    }

    const updatedData = {
      ...transaction,
      title: title.trim(),
      amount: numAmount,
      type,
      category,
      date,
      description: description.trim()
    };

    onUpdateTransaction(updatedData);
    onClose();
  };

  if (!isOpen || !transaction) return null;

  const currentCategories = type === 'income' ? CATEGORIES.INCOME : CATEGORIES.EXPENSE;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 23, 61, 0.65)', backdropFilter: 'blur(3px)' }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="modal-header bg-fb-navy text-white px-4 py-3">
            <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
              <i className="bi bi-pencil-square text-fb-yellow"></i>
              İşlemi Güncelle / Düzenle
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Kapat"
            ></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              {error && (
                <div className="alert alert-danger py-2 px-3 small d-flex align-items-center gap-2 rounded-3 mb-3">
                  <i className="bi bi-exclamation-triangle-fill"></i>
                  <span>{error}</span>
                </div>
              )}

              {/* Tür Seçimi */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-secondary small">İşlem Türü</label>
                <div className="btn-group w-100" role="group">
                  <button
                    type="button"
                    className={`btn py-2 fw-semibold ${
                      type === 'income' ? 'btn-success text-white' : 'btn-outline-secondary'
                    }`}
                    onClick={() => handleTypeChange('income')}
                  >
                    <i className="bi bi-arrow-up-right me-1"></i> Gelir
                  </button>
                  <button
                    type="button"
                    className={`btn py-2 fw-semibold ${
                      type === 'expense' ? 'btn-danger text-white' : 'btn-outline-secondary'
                    }`}
                    onClick={() => handleTypeChange('expense')}
                  >
                    <i className="bi bi-arrow-down-left me-1"></i> Gider
                  </button>
                </div>
              </div>

              {/* Başlık */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-secondary small">
                  İşlem Başlığı <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Tutar */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-secondary small">
                  Tutar (₺) <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light fw-bold">₺</span>
                  <input
                    type="number"
                    step="any"
                    min="1"
                    className="form-control rounded-end-3"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Kategori ve Tarih */}
              <div className="row g-2 mb-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold text-secondary small">Kategori</label>
                  <select
                    className="form-select rounded-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {currentCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold text-secondary small">Tarih</label>
                  <input
                    type="date"
                    className="form-control rounded-3"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Açıklama */}
              <div className="mb-2">
                <label className="form-label fw-semibold text-secondary small">Açıklama</label>
                <textarea
                  className="form-control rounded-3"
                  rows="2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer bg-light px-4 py-3">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill px-3"
                onClick={onClose}
              >
                İptal
              </button>
              <button
                type="submit"
                className="btn btn-fb-yellow rounded-pill px-4 shadow-sm"
              >
                <i className="bi bi-save me-1"></i> Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
