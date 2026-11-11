import { useState } from 'react';
import {
  WHATSAPP_NUMBERS,
  INSTAGRAM_INFO,
  SERVICES_DATA,
  EXPERTISE_INDUSTRIES
} from '../services/i18nData';
import { VitaNexLogo, WhatsAppIcon, InstagramIcon } from './BrandIcons';

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
          {/* Brand Logo with sharp rotating vector circle */}
          <button
            type="button"
            className="brand-logo-btn"
            onClick={() => handleNavClick('home')}
          >
            <VitaNexLogo size={62} />
            <div className="brand-logo-text">
              <span className="brand-name">
                Vita<span className="brand-accent">NeX</span>
              </span>
              <span className="brand-sub">DIGITAL STUDIO</span>
            </div>
          </button>

          {/* Main Navigation */}
          <nav className="main-nav" aria-label="Main Navigation">
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

            <button
              type="button"
              className={`nav-link ${activePage === 'portfolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('portfolio')}
            >
              {t.nav.cases}
            </button>

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

            <button
              type="button"
              className={`nav-link ${activePage === 'blog' ? 'active' : ''}`}
              onClick={() => handleNavClick('blog')}
            >
              {t.nav.blog}
            </button>

            <button
              type="button"
              className={`nav-link ${activePage === 'contacts' ? 'active' : ''}`}
              onClick={() => handleNavClick('contacts')}
            >
              {t.nav.contacts}
            </button>
          </nav>

          {/* Right Actions: WhatsApp Numbers + Contact Pill + Install PWA + Language + Theme Toggle + Drawer */}
          <div className="header-actions">
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
                  <WhatsAppIcon size={18} />
                  <span>{WHATSAPP_NUMBERS[0].display}</span>
                </a>
                <a
                  href={WHATSAPP_NUMBERS[1].url}
                  target="_blank"
                  rel="noreferrer"
                  className="header-phone-sub"
                >
                  <WhatsAppIcon size={15} />
                  <span>{WHATSAPP_NUMBERS[1].display} ⌄</span>
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
                      <WhatsAppIcon size={26} />
                      <div>
                        <div className="phone-number-strong">{phone.display}</div>
                        <div className="phone-region">{phone.region[lang]}</div>
                      </div>
                    </a>
                  ))}
                  <a
                    href={INSTAGRAM_INFO.url}
                    target="_blank"
                    rel="noreferrer"
                    className="phone-dropdown-item insta-item"
                  >
                    <InstagramIcon size={26} />
                    <div>
                      <div className="phone-number-strong">{INSTAGRAM_INFO.handle}</div>
                      <div className="phone-region">Instagram</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Pill Button "СВЯЗАТЬСЯ С НАМИ" */}
            <button
              type="button"
              className="btn-contact-pill"
              onClick={() => onOpenLeadModal()}
            >
              {t.nav.contactUs}
            </button>

            {/* Always-Visible Install PWA Button (works on iPhone, Android & PC) */}
            <button
              type="button"
              className="header-pwa-btn"
              onClick={onInstallPwa}
              title={t.nav.installPwa}
            >
              <span>📲</span>
              <span className="pwa-btn-text">PWA</span>
            </button>

            {/* Language Selector RU / EN / ES */}
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

            {/* Theme Switcher Button: Dark vs Light */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={() =>
                setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
              }
              title={
                themeMode === 'dark' ? t.nav.themeLight : t.nav.themeDark
              }
            >
              <span className="theme-icon">
                {themeMode === 'dark' ? '☀' : '☾'}
              </span>
              <span className="theme-label">
                {themeMode === 'dark' ? t.nav.themeLight : t.nav.themeDark}
              </span>
            </button>

            {/* Sidebar / Drawer Open Button */}
            <button
              type="button"
              className="drawer-toggle-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Sidebar Menu"
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line short" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Sidebar / Drawer */}
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
              <div
                className="brand-logo-btn"
                onClick={() => handleNavClick('home')}
              >
                <VitaNexLogo size={58} />
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

            {/* Prominent Install App (PWA) Button inside Mobile/Desktop Sidebar */}
            <button
              type="button"
              className="sidebar-pwa-banner-btn"
              onClick={() => {
                setDrawerOpen(false);
                onInstallPwa();
              }}
            >
              <span>📲 {t.nav.installPwa}</span>
              <span className="pwa-os-tags">iOS • Android</span>
            </button>

            {/* Language & Theme Pills in Sidebar */}
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
                className={`sidebar-lang-pill ${themeMode === 'dark' ? 'active' : ''}`}
                onClick={() => setThemeMode('dark')}
              >
                ☾ {t.nav.themeDark}
              </button>
              <button
                type="button"
                className={`sidebar-lang-pill ${themeMode === 'light' ? 'active' : ''}`}
                onClick={() => setThemeMode('light')}
              >
                ☀ {t.nav.themeLight}
              </button>
            </div>

            {/* Main Links */}
            <div className="sidebar-nav-list">
              <button
                type="button"
                className="sidebar-nav-item"
                onClick={() => handleNavClick('home')}
              >
                <span>00</span> {t.nav.home}
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

            {/* Two WhatsApp Contacts + Instagram inside Sidebar */}
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
                  <WhatsAppIcon size={32} />
                  <div>
                    <div className="sidebar-wa-num">{phone.display}</div>
                    <div className="sidebar-wa-reg">{phone.region[lang]}</div>
                  </div>
                </a>
              ))}
              <a
                href={INSTAGRAM_INFO.url}
                target="_blank"
                rel="noreferrer"
                className="sidebar-wa-link"
              >
                <InstagramIcon size={32} />
                <div>
                  <div className="sidebar-wa-num">{INSTAGRAM_INFO.handle}</div>
                  <div className="sidebar-wa-reg">{INSTAGRAM_INFO.label[lang]}</div>
                </div>
              </a>
            </div>

            {/* Utilities & CTA Button inside Sidebar */}
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
                  ▶ {t.nav.matrixIntroBtn}
                </button>
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
