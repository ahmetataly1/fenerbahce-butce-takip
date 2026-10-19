import React from 'react';
import { formatCurrency, formatShortCurrency } from '../utils/formatters';

export default function BudgetCharts({ transactions }) {
  // Gelir kategorisi bazında gruplama
  const incomeByCategory = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
      return acc;
    }, {});

  // Gider kategorisi bazında gruplama
  const expenseByCategory = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
      return acc;
    }, {});

  const totalIncome = Object.values(incomeByCategory).reduce((a, b) => a + b, 0);
  const totalExpense = Object.values(expenseByCategory).reduce((a, b) => a + b, 0);

  // Sıralı diziye dönüştürme
  const sortedIncomeCategories = Object.entries(incomeByCategory).sort((a, b) => b[1] - a[1]);
  const sortedExpenseCategories = Object.entries(expenseByCategory).sort((a, b) => b[1] - a[1]);

  return (
    <section className="row g-4 mb-4" aria-label="Kategori Analizi">
      {/* Gelir Dağılımı */}
      <div className="col-12 col-lg-6">
        <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
          <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <h5 className="fw-bold mb-0 text-success d-flex align-items-center gap-2">
              <i className="bi bi-pie-chart-fill"></i>
              Gelir Kaynakları Dağılımı
            </h5>
            <span className="badge bg-success-subtle text-success rounded-pill fw-bold">
              {formatShortCurrency(totalIncome)}
            </span>
          </div>

          {sortedIncomeCategories.length > 0 ? (
            <div className="d-flex flex-column gap-3">
              {sortedIncomeCategories.map(([category, amount]) => {
                const percent = totalIncome > 0 ? Math.round((amount / totalIncome) * 100) : 0;
                return (
                  <div key={category}>
                    <div className="d-flex justify-content-between align-items-center small mb-1">
                      <span className="fw-semibold text-dark">{category}</span>
                      <span className="text-secondary">
                        <strong className="text-success">{formatCurrency(amount)}</strong> ({percent}%)
                      </span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${percent}%` }}
                        aria-valuenow={percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted small">Henüz gelir kaydı bulunmuyor.</p>
          )}
        </div>
      </div>

      {/* Gider Dağılımı */}
      <div className="col-12 col-lg-6">
        <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
          <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
            <h5 className="fw-bold mb-0 text-danger d-flex align-items-center gap-2">
              <i className="bi bi-pie-chart-fill"></i>
              Harcama & Gider Dağılımı
            </h5>
            <span className="badge bg-danger-subtle text-danger rounded-pill fw-bold">
              {formatShortCurrency(totalExpense)}
            </span>
          </div>

          {sortedExpenseCategories.length > 0 ? (
            <div className="d-flex flex-column gap-3">
              {sortedExpenseCategories.map(([category, amount]) => {
                const percent = totalExpense > 0 ? Math.round((amount / totalExpense) * 100) : 0;
                return (
                  <div key={category}>
                    <div className="d-flex justify-content-between align-items-center small mb-1">
                      <span className="fw-semibold text-dark">{category}</span>
                      <span className="text-secondary">
                        <strong className="text-danger">{formatCurrency(amount)}</strong> ({percent}%)
                      </span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: `${percent}%` }}
                        aria-valuenow={percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted small">Henüz gider kaydı bulunmuyor.</p>
          )}
        </div>
      </div>
    </section>
  );
}
