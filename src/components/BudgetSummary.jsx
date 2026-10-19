import React from 'react';
import { formatCurrency, formatShortCurrency } from '../utils/formatters';

export default function BudgetSummary({ transactions }) {
  // JavaScript temelleri: reduce, filter vb.
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const netBalance = totalIncome - totalExpense;
  const isSurplus = netBalance >= 0;

  // Harcama oranı
  const expenseRatio = totalIncome > 0 ? Math.min(100, Math.round((totalExpense / totalIncome) * 100)) : 0;

  return (
    <section className="my-4" aria-label="Bütçe Özet Göstergeleri">
      <div className="row g-3">
        {/* Toplam Gelir Kartı */}
        <div className="col-12 col-md-4">
          <div className="card stat-card card-income h-100 bg-white p-3 p-xl-4 shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-secondary fw-semibold text-uppercase small" style={{ letterSpacing: '0.5px' }}>
                Toplam Kulüp Geliri
              </span>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', backgroundColor: '#d1fae5', color: '#059669' }}
              >
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
            </div>
            <h3 className="fw-bold text-success mb-1">
              {formatCurrency(totalIncome)}
            </h3>
            <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
              <small className="text-muted">
                {transactions.filter((t) => t.type === 'income').length} Gelir Kalemi
              </small>
              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill">
                {formatShortCurrency(totalIncome)}
              </span>
            </div>
          </div>
        </div>

        {/* Toplam Gider Kartı */}
        <div className="col-12 col-md-4">
          <div className="card stat-card card-expense h-100 bg-white p-3 p-xl-4 shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-secondary fw-semibold text-uppercase small" style={{ letterSpacing: '0.5px' }}>
                Toplam Kulüp Gideri
              </span>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', backgroundColor: '#fee2e2', color: '#dc2626' }}
              >
                <i className="bi bi-graph-down-arrow fs-5"></i>
              </div>
            </div>
            <h3 className="fw-bold text-danger mb-1">
              {formatCurrency(totalExpense)}
            </h3>
            <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
              <small className="text-muted">
                {transactions.filter((t) => t.type === 'expense').length} Gider Kalemi
              </small>
              <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill">
                {formatShortCurrency(totalExpense)}
              </span>
            </div>
          </div>
        </div>

        {/* Net Kasa / Bütçe Dengesi */}
        <div className="col-12 col-md-4">
          <div className="card stat-card card-balance h-100 bg-white p-3 p-xl-4 shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-secondary fw-semibold text-uppercase small" style={{ letterSpacing: '0.5px' }}>
                Net Finansal Denge (Kasa)
              </span>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: isSurplus ? '#e0e7ff' : '#fef2f2',
                  color: isSurplus ? '#002d72' : '#dc2626'
                }}
              >
                <i className={`bi ${isSurplus ? 'bi-wallet2' : 'bi-exclamation-triangle-fill'} fs-5`}></i>
              </div>
            </div>
            <h3 className={`fw-bold mb-1 ${isSurplus ? 'text-primary' : 'text-danger'}`}>
              {isSurplus ? `+${formatCurrency(netBalance)}` : formatCurrency(netBalance)}
            </h3>
            <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
              <small className="text-muted">
                Gelir Karşılama: <span className="fw-semibold">%{expenseRatio} harcandı</span>
              </small>
              <span className={`badge rounded-pill ${isSurplus ? 'bg-primary-subtle text-primary' : 'bg-danger-subtle text-danger'}`}>
                {isSurplus ? 'Bütçe Fazlası' : 'Bütçe Açığı'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
