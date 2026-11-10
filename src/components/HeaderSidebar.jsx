import { useState } from 'react';
import {
  WHATSAPP_NUMBERS,
  SERVICES_DATA,
  EXPERTISE_INDUSTRIES
} from '../services/i18nData';

export function HeaderSidebar({
  lang,
  setLang,
  t,
  activePage,
  navigateTo,
  onOpenLeadModal,
  themeMode,
  setThemeMode,
  matrixEnabled,
  setMatrixEnabled,
  onReplayIntro,
  canInstallPwa,
  onInstallPwa
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (page, item = null) => {
    navigateTo(page, item);
    setDrawerOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="wezom-header">
        <div className="header-container">
          {/* Brand Logo */}
          <button
            type="button"
            className="brand-logo-btn"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="./assets/vitanex-logo.jpg"
              alt="VitaNeX Logo"
              className="brand-logo-img"
            />
            <div className="brand-logo-text">
              <span className="brand-name">
                Vita<span className="brand-accent">NeX</span>
              </span>
              <span className="brand-sub">DIGITAL STUDIO</span>
            </div>
          </button>

          {/* Main Navigation matching Wezom reference photo */}
          <nav className="main-nav" aria-label="Main Navigation">
            {/* УСЛУГИ ⌄ */}
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                {t.nav.services}
                <span className="chevron">⌄</span>
              </button>
              {activeDropdown === 'services' && (
                <div className="mega-dropdown">
                  <div className="mega-dropdown-grid">
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        className="mega-dropdown-card"
                        onClick={() => handleNavClick('service-detail', srv)}
                      >
                        <span className="mega-num">{srv.number}</span>
                        <div>
                          <div className="mega-title">{srv.title[lang]}</div>
                          <div className="mega-desc">{srv.shortDesc[lang]}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ЭКСПЕРТИЗА ⌄ */}
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveDropdown('expertise')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link ${activePage === 'expertise' ? 'active' : ''}`}
                onClick={() => handleNavClick('expertise')}
              >
                {t.nav.expertise}
                <span className="chevron">⌄</span>
              </button>
              {activeDropdown === 'expertise' && (
                <div className="mega-dropdown">
                  <div className="mega-dropdown-grid">
                    {EXPERTISE_INDUSTRIES.map((ind) => (
                      <button
                        key={ind.code}
                        type="button"
                        className="mega-dropdown-card"
                        onClick={() => handleNavClick('expertise')}
                      >
                        <span className="mega-num">{ind.code}</span>
                        <div>
                          <div className="mega-title">{ind.title[lang]}</div>
                          <div className="mega-desc">{ind.desc[lang]}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* КЕЙСЫ */}
            <button
              type="button"
              className={`nav-link ${activePage === 'portfolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('portfolio')}
            >
              {t.nav.cases}
            </button>

            {/* КОМПАНИЯ ⌄ */}
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                {t.nav.company}
                <span className="chevron">⌄</span>
              </button>
              {activeDropdown === 'company' && (
                <div className="mega-dropdown compact-dropdown">
                  <button
                    type="button"
                    className="mega-dropdown-card"
                    onClick={() => handleNavClick('about')}
                  >
                    <span className="mega-num">01</span>
                    <div className="mega-title">{t.sections.aboutTitle}</div>
                  </button>
                  <button
                    type="button"
                    className="mega-dropdown-card"
                    onClick={() => handleNavClick('portfolio')}
                  >
                    <span className="mega-num">02</span>
                    <div className="mega-title">{t.nav.cases}</div>
                  </button>
                  <button
                    type="button"
                    className="mega-dropdown-card"
                    onClick={() => handleNavClick('contacts')}
                  >
                    <span className="mega-num">03</span>
                    <div className="mega-title">{t.nav.contacts}</div>
                  </button>
                </div>
              )}
            </div>

            {/* БЛОГ */}
            <button
              type="button"
              className={`nav-link ${activePage === 'blog' ? 'active' : ''}`}
              onClick={() => handleNavClick('blog')}
            >
              {t.nav.blog}
            </button>

            {/* КОНТАКТЫ */}
            <button
              type="button"
              className={`nav-link ${activePage === 'contacts' ? 'active' : ''}`}
              onClick={() => handleNavClick('contacts')}
            >
              {t.nav.contacts}
            </button>
          </nav>

          {/* Right Action Area matching photo: Phone numbers + White Pill Button + RU ⌄ + Drawer button */}
          <div className="header-actions">
            {/* WhatsApp Two Numbers Block */}
            <div
              className="header-phones-wrapper"
              onMouseEnter={() => setPhoneMenuOpen(true)}
              onMouseLeave={() => setPhoneMenuOpen(false)}
            >
              <div className="header-phones-trigger">
                <a
                  href={WHATSAPP_NUMBERS[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="header-phone-main"
                >
                  <span className="wa-dot" />
                  {WHATSAPP_NUMBERS[0].display}
                </a>
                <a
                  href={WHATSAPP_NUMBERS[1].url}
                  target="_blank"
                  rel="noreferrer"
                  className="header-phone-sub"
                >
                  WhatsApp: {WHATSAPP_NUMBERS[1].display} ⌄
                </a>
              </div>

              {phoneMenuOpen && (
                <div className="phones-dropdown">
                  <div className="phones-dropdown-label">{t.nav.whatsappLabel}</div>
                  {WHATSAPP_NUMBERS.map((phone) => (
                    <a
                      key={phone.raw}
                      href={phone.url}
                      target="_blank"
                      rel="noreferrer"
                      className="phone-dropdown-item"
                    >
                      <span className="wa-badge">WhatsApp</span>
                      <div>
                        <div className="phone-number-strong">{phone.display}</div>
                        <div className="phone-region">{phone.region[lang]}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* White Pill Button "СВЯЗАТЬСЯ С НАМИ" from reference photo */}
            <button
              type="button"
              className="btn-contact-pill"
              onClick={() => onOpenLeadModal()}
            >
              {t.nav.contactUs}
            </button>

            {/* Language Selector RU ⌄ */}
            <div className="lang-selector-wrapper">
              <button
                type="button"
                className="lang-trigger-btn"
                onClick={() => setLangMenuOpen((v) => !v)}
                aria-label="Select Language"
              >
                {lang.toUpperCase()} <span className="chevron">⌄</span>
              </button>
              {langMenuOpen && (
                <div className="lang-dropdown">
                  {['ru', 'en', 'es'].map((code) => (
                    <button
                      key={code}
                      type="button"
                      className={`lang-option ${lang === code ? 'selected' : ''}`}
                      onClick={() => {
                        setLang(code);
                        setLangMenuOpen(false);
                      }}
                    >
                      <span>{code.toUpperCase()}</span>
                      <span className="lang-name">
                        {code === 'ru' ? 'Русский' : code === 'en' ? 'English' : 'Español'}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Switcher (Dark Neon vs Contrast Light/Dark) */}
            <button
              type="button"
              className="icon-util-btn"
              onClick={() =>
                setThemeMode(themeMode === 'dark' ? 'contrast' : 'dark')
              }
              title={
                themeMode === 'dark' ? t.nav.themeContrast : t.nav.themeDark
              }
            >
              {themeMode === 'dark' ? '☀' : '☾'}
            </button>

            {/* Sidebar / Drawer Open Button */}
            <button
              type="button"
              className="drawer-toggle-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Navigation Drawer"
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line short" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Sidebar / Drawer (Mobile & Desktop Wezom-style Sidebar) */}
      {drawerOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setDrawerOpen(false)}
        >
          <aside
            className="sidebar-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sidebar-top">
              <div className="brand-logo-btn">
                <img
                  src="./assets/vitanex-logo.jpg"
                  alt="VitaNeX"
                  className="brand-logo-img"
                />
                <div className="brand-logo-text">
                  <span className="brand-name">
                    Vita<span className="brand-accent">NeX</span>
                  </span>
                  <span className="brand-sub">DIGITAL STUDIO</span>
                </div>
              </div>
              <button
                type="button"
                className="sidebar-close-btn"
                onClick={() => setDrawerOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Language Pills in Sidebar */}
            <div className="sidebar-langs">
              {['ru', 'en', 'es'].map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`sidebar-lang-pill ${lang === code ? 'active' : ''}`}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
              <button
                type="button"
                className="sidebar-lang-pill"
                onClick={() =>
                  setThemeMode(themeMode === 'dark' ? 'contrast' : 'dark')
                }
              >
                {themeMode === 'dark' ? '☀ Light/Dark' : '☾ Cyber Dark'}
              </button>
            </div>

            {/* Main Links */}
            <div className="sidebar-nav-list">
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('home')}
              >
                <span>00</span> HOME // VITANEX
              </button>
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('services')}
              >
                <span>01</span> {t.nav.services}
              </button>
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('expertise')}
              >
                <span>02</span> {t.nav.expertise}
              </button>
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('portfolio')}
              >
                <span>03</span> {t.nav.cases}
              </button>
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('about')}
              >
                <span>04</span> {t.nav.company}
              </button>
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('blog')}
              >
                <span>05</span> {t.nav.blog}
              </button>
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('contacts')}
              >
                <span>06</span> {t.nav.contacts}
              </button>
            </div>

            {/* Two WhatsApp Contacts inside Sidebar */}
            <div className="sidebar-contacts-box">
              <div className="sidebar-box-label">{t.nav.whatsappLabel}</div>
              {WHATSAPP_NUMBERS.map((phone) => (
                <a
                  key={phone.raw}
                  href={phone.url}
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-wa-link"
                >
                  <span className="wa-icon-circle">WA</span>
                  <div>
                    <div className="sidebar-wa-num">{phone.display}</div>
                    <div className="sidebar-wa-reg">{phone.region[lang]}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Utilities & Circular CTA Button inside Sidebar */}
            <div className="sidebar-footer-actions">
              <div className="sidebar-toggles">
                <button
                  type="button"
                  className={`util-chip ${matrixEnabled ? 'active' : ''}`}
                  onClick={() => setMatrixEnabled(!matrixEnabled)}
                >
                  {t.nav.matrixToggle}: {matrixEnabled ? 'ON' : 'OFF'}
                </button>
                <button
                  type="button"
                  className="util-chip"
                  onClick={() => {
                    setDrawerOpen(false);
                    onReplayIntro();
                  }}
                >
                  ▶ Matrix Intro
                </button>
                {canInstallPwa && (
                  <button
                    type="button"
                    className="util-chip pwa-chip"
                    onClick={onInstallPwa}
                  >
                    ⬇ {t.nav.installPwa}
                  </button>
                )}
              </div>

              <button
                type="button"
                className="btn-contact-pill full-width"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenLeadModal();
                }}
              >
                ↗ {t.nav.discussProject}
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
