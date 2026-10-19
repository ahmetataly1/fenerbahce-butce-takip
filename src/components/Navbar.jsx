import React from 'react';

export default function Navbar({ onOpenAddModal, onResetData }) {
  return (
    <header>
      <div className="fb-stripes"></div>
      <nav className="navbar navbar-expand-lg bg-fb-gradient navbar-dark py-3 shadow">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-3 text-white fw-bold" href="#">
            {/* Fenerbahçe Amblem / Logo SVG */}
            <div
              className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{
                width: '46px',
                height: '46px',
                background: 'linear-gradient(135deg, #ffd100 0%, #ffe600 100%)',
                border: '2px solid #ffffff'
              }}
            >
              <i className="bi bi-shield-fill-check text-fb-navy fs-4"></i>
            </div>
            <div>
              <div className="d-flex align-items-center gap-2">
                <span className="fs-5 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  Fenerbahçe SK
                </span>
                <span className="badge bg-fb-yellow text-dark fw-bold rounded-pill px-2 py-1" style={{ fontSize: '0.7rem' }}>
                  KAP & Finans
                </span>
              </div>
              <small className="text-light opacity-75 d-block fw-normal" style={{ fontSize: '0.8rem' }}>
                Şeffaf Kulüp Bütçesi ve Gelir-Gider Takip Portalı
              </small>
            </div>
          </a>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <button
              type="button"
              className="btn btn-outline-light btn-sm px-3 d-flex align-items-center gap-2 rounded-pill"
              onClick={onResetData}
              title="İlk örnek verileri tekrar yükle"
            >
              <i className="bi bi-arrow-counterclockwise"></i>
              <span>Verileri Sıfırla</span>
            </button>

            <button
              type="button"
              className="btn btn-fb-yellow btn-sm px-3 py-2 d-flex align-items-center gap-2 rounded-pill shadow-sm"
              onClick={onOpenAddModal}
            >
              <i className="bi bi-plus-circle-fill fs-6"></i>
              <span>Yeni Gelir / Gider Ekle</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
