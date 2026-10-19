import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-fb-navy text-white pt-5 pb-4 mt-auto border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="fw-bold text-fb-yellow fs-5">FENERBAHÇE SK</span>
              <span className="badge bg-light text-dark small">Bütçe Portalı</span>
            </div>
            <p className="text-light opacity-75 small mb-3" style={{ lineHeight: '1.6' }}>
              Bu proje, Modern Web Geliştirme (JavaScript & ReactJS) eğitim yönergesine uygun olarak, 
              CRUD mimarisi, Bootstrap 5 tasarımı ve LocalStorage kalıcılığı kullanılarak hazırlanmıştır.
            </p>
            <div className="d-flex align-items-center gap-2 text-warning small">
              <i className="bi bi-shield-lock-fill"></i>
              <span>Veriler tarayıcınızın yerel hafızasında (LocalStorage) güvenle saklanır.</span>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <h6 className="text-fb-yellow fw-bold text-uppercase small mb-3">Kullanılan Teknolojiler</h6>
            <ul className="list-unstyled text-light opacity-75 small d-flex flex-column gap-2 mb-0">
              <li><i className="bi bi-check2 text-warning me-1"></i> HTML5 Semantik Yapı</li>
              <li><i className="bi bi-check2 text-warning me-1"></i> CSS3 & Bootstrap 5</li>
              <li><i className="bi bi-check2 text-warning me-1"></i> Modern JavaScript (ES6+)</li>
              <li><i className="bi bi-check2 text-warning me-1"></i> React 18 (Hooks & State)</li>
              <li><i className="bi bi-check2 text-warning me-1"></i> Tarayıcı LocalStorage API</li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <h6 className="text-fb-yellow fw-bold text-uppercase small mb-3">Yönerge Kriterleri</h6>
            <ul className="list-unstyled text-light opacity-75 small d-flex flex-column gap-2 mb-0">
              <li><i className="bi bi-check-circle-fill text-success me-1"></i> 1x Ekleme (Create)</li>
              <li><i className="bi bi-check-circle-fill text-success me-1"></i> 1x Listeleme (Read)</li>
              <li><i className="bi bi-check-circle-fill text-success me-1"></i> 1x Güncelleme (Update)</li>
              <li><i className="bi bi-check-circle-fill text-success me-1"></i> 1x Silme (Delete)</li>
              <li><i className="bi bi-check-circle-fill text-success me-1"></i> Netlify & GitHub Hazır</li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />

        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 small text-light opacity-75">
          <span>&copy; {new Date().getFullYear()} Fenerbahçe Bütçe Takip Uygulaması</span>
          <span className="text-fb-yellow">#SevdamızFenerbahçe • Sarı Lacivert</span>
        </div>
      </div>
      <div className="fb-stripes mt-4"></div>
    </footer>
  );
}
