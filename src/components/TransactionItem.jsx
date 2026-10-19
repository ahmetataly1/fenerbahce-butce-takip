import React from 'react';
import { formatCurrency, formatDate } from '../utils/formatters';

export default function TransactionItem({ transaction, onEdit, onDelete }) {
  const isIncome = transaction.type === 'income';

  return (
    <article className="card transaction-card p-3 mb-2 animate-fade-in">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
        {/* Sol Alan: İkon + Başlık + Detaylar */}
        <div className="d-flex align-items-center gap-3">
          <div
            className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${
              isIncome ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'
            }`}
            style={{ width: '46px', height: '46px' }}
          >
            <i className={`bi ${isIncome ? 'bi-arrow-down-left-circle-fill' : 'bi-arrow-up-right-circle-fill'} fs-4`}></i>
          </div>

          <div>
            <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
              <h5 className="mb-0 fw-bold fs-6 text-dark">{transaction.title}</h5>
              <span className={`badge ${isIncome ? 'badge-income' : 'badge-expense'} rounded-pill`}>
                {isIncome ? 'Kulüp Geliri' : 'Kulüp Gideri'}
              </span>
              <span className="badge badge-fb rounded-pill">
                {transaction.category}
              </span>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small">
              <span>
                <i className="bi bi-calendar3 me-1"></i>
                {formatDate(transaction.date)}
              </span>
              {transaction.description && (
                <span className="text-truncate" style={{ maxWidth: '350px' }} title={transaction.description}>
                  <i className="bi bi-info-circle me-1"></i>
                  {transaction.description}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Sağ Alan: Tutar ve Aksiyon Butonları */}
        <div className="d-flex align-items-center justify-content-between justify-content-md-end w-100 w-md-auto gap-3 pt-2 pt-md-0 border-top border-md-0">
          <div className="text-start text-md-end">
            <span
              className={`fs-5 fw-bold ${isIncome ? 'text-success' : 'text-danger'}`}
              style={{ letterSpacing: '-0.3px' }}
            >
              {isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}
            </span>
          </div>

          <div className="d-flex align-items-center gap-1">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '34px', height: '34px' }}
              title="İşlemi Düzenle"
              onClick={() => onEdit(transaction)}
            >
              <i className="bi bi-pencil-fill" style={{ fontSize: '0.8rem' }}></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '34px', height: '34px' }}
              title="İşlemi Sil"
              onClick={() => onDelete(transaction.id, transaction.title)}
            >
              <i className="bi bi-trash-fill" style={{ fontSize: '0.8rem' }}></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
