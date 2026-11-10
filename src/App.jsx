import { useState, useEffect } from 'react';
import {
  TRANSLATIONS,
  WHATSAPP_NUMBERS,
  SERVICES_DATA,
  PORTFOLIO_CASES,
  EXPERTISE_INDUSTRIES,
  ABOUT_FEATURES,
  TESTIMONIALS,
  BLOG_POSTS
} from './services/i18nData';
import { MatrixCanvas, MatrixIntroOverlay } from './components/MatrixRain';
import { HeaderSidebar } from './components/HeaderSidebar';
import { LeadForm, SuccessPopup } from './components/LeadFormSection';
import './App.css';

export function App() {
  // Language persisted in localStorage (RU / EN / ES)
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('vitanex_lang');
    return saved && TRANSLATIONS[saved] ? saved : 'ru';
  });

  const setLang = (code) => {
    localStorage.setItem('vitanex_lang', code);
    setLangState(code);
    document.documentElement.lang = code;
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.ru;

  // Theme mode: 'contrast' combines Dark Cyber Hero + Clean White/Dark alternating sections; 'dark' is full Cyberpunk Dark
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('vitanex_theme') || 'contrast';
  });

  useEffect(() => {
    localStorage.setItem('vitanex_theme', themeMode);
  }, [themeMode]);

  // Matrix Digital Rain Intro & Background state
  const [showIntro, setShowIntro] = useState(true);
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  // Navigation state (Multi-page SPA with hash sync)
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);
  const [selectedCase, setSelectedCase] = useState(PORTFOLIO_CASES[0]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('All');

  // Lead Modal & Success Popup state
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [successPayload, setSuccessPayload] = useState(null);

  // PWA Install Prompt
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallPwa = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  const navigateTo = (page, item = null) => {
    if (page === 'service-detail' && item) {
      setSelectedService(item);
    }
    if (page === 'case-detail' && item) {
      setSelectedCase(item);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLeadModal = (serviceTitle = '') => {
    setModalService(serviceTitle);
    setLeadModalOpen(true);
  };

  const categories = ['All', 'Web', 'FinTech', 'E-Commerce', 'B2B / CRM'];
  const filteredCases =
    portfolioFilter === 'All'
      ? PORTFOLIO_CASES
      : PORTFOLIO_CASES.filter((c) => c.category === portfolioFilter);

  return (
    <div className={`app-shell theme-${themeMode}`}>
      {/* Matrix Falling Digits Intro when opening the website */}
      {showIntro && (
        <MatrixIntroOverlay
          t={t}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Header & Slide-out Sidebar matching reference photos */}
      <HeaderSidebar
        lang={lang}
        setLang={setLang}
        t={t}
        activePage={activePage}
        navigateTo={navigateTo}
        onOpenLeadModal={openLeadModal}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        matrixEnabled={matrixEnabled}
        setMatrixEnabled={setMatrixEnabled}
        onReplayIntro={() => setShowIntro(true)}
        canInstallPwa={Boolean(deferredPrompt)}
        onInstallPwa={handleInstallPwa}
      />

      {/* MAIN CONTENT ROUTER */}
      <main className="main-content">
        {/* ==================== HOME PAGE ==================== */}
        {activePage === 'home' && (
          <>
            {/* HERO SECTION WITH MATRIX DIGITAL RAIN + WEZOM TYPOGRAPHY + ROUND "ОБСУДИТЬ ПРОЕКТ" BUTTON */}
            <section className="wezom-hero-section">
              {matrixEnabled && <MatrixCanvas opacity={0.42} speed={1} />}
              <div className="hero-glow-orb orb-cyan" />
              <div className="hero-glow-orb orb-purple" />

              <div className="section-container hero-inner">
                <div className="hero-top-badge">
                  <span className="pulse-dot" />
                  {t.hero.badge}
                </div>

                {/* Giant Split Typography from Reference Photos 3, 4, 5 */}
                <div className="wezom-giant-grid">
                  <div className="giant-row row-1">
                    <h1 className="giant-word gradient-cyber">
                      {t.hero.line1}
                    </h1>
                  </div>

                  <div className="giant-row row-2">
                    <div className="giant-word text-white">
                      {t.hero.line2}
                    </div>
                    <p className="wezom-side-mission">
                      {t.hero.sideText}
                    </p>
                  </div>

                  <div className="giant-row row-3">
                    <div className="giant-word text-white">
                      {t.hero.line3}
                    </div>

                    {/* Signature Round Blue/Violet "↗ ОБСУДИТЬ ПРОЕКТ" Button from Reference Photo */}
                    <button
                      type="button"
                      className="discuss-circle-btn"
                      onClick={() => openLeadModal()}
                    >
                      <span className="circle-arrow">↗</span>
                      <span className="circle-text">
                        {t.hero.discussBtn}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Brand Showcase & 3 Core Pillars from VitaNeX Poster */}
                <div className="hero-showcase-grid">
                  <div className="hero-pillars-list">
                    {t.hero.pillars.map((p, idx) => (
                      <div key={idx} className="hero-pillar-card">
                        <div className="pillar-icon-box">
                          {p.icon === 'globe' ? '🌐' : p.icon === 'zap' ? '⚡' : '🛡'}
                        </div>
                        <div>
                          <h3 className="pillar-title">{p.title}</h3>
                          <p className="pillar-desc">{p.desc}</p>
                        </div>
                      </div>
                    ))}

                    <div className="hero-quick-contacts">
                      {WHATSAPP_NUMBERS.map((phone) => (
                        <a
                          key={phone.raw}
                          href={phone.url}
                          target="_blank"
                          rel="noreferrer"
                          className="hero-wa-chip"
                        >
                          <span className="wa-online-dot" />
                          WhatsApp: <strong>{phone.display}</strong>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hero-poster-card">
                    <img
                      src="./assets/vitanex-promo.jpg"
                      alt="VitaNeX Digital Studio — Создание сайтов под ключ"
                      className="hero-poster-img"
                    />
                  </div>
                </div>

                {/* Key Metrics Bar */}
                <div className="hero-stats-bar">
                  {t.hero.stats.map((st, i) => (
                    <div key={i} className="stat-item">
                      <div className="stat-value">{st.value}</div>
                      <div className="stat-label">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICES SECTION (Clean White/Contrast or Dark depending on theme) */}
            <section className="content-section surface-alt">
              <div className="section-container">
                <div className="section-header-row">
                  <div>
                    <span className="section-tag">{t.sections.servicesTag}</span>
                    <h2 className="section-heading">{t.sections.servicesTitle}</h2>
                    <p className="section-sub">{t.sections.servicesSubtitle}</p>
                  </div>
                  <button
                    type="button"
                    className="btn-outline-cyber"
                    onClick={() => navigateTo('services')}
                  >
                    {t.sections.allServicesBtn} ↗
                  </button>
                </div>

                <div className="services-grid">
                  {SERVICES_DATA.map((srv) => (
                    <article
                      key={srv.id}
                      className="service-card"
                      onClick={() => navigateTo('service-detail', srv)}
                    >
                      <div className="service-card-top">
                        <span className="service-number">{srv.number}</span>
                        <span className="service-timeline">{srv.timeline[lang]}</span>
                      </div>
                      <h3 className="service-card-title">{srv.title[lang]}</h3>
                      <p className="service-card-desc">{srv.shortDesc[lang]}</p>
                      <div className="service-stack-tags">
                        {srv.stack.map((tech) => (
                          <span key={tech} className="stack-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="service-card-footer">
                        <span className="link-arrow">
                          {t.sections.detailsBtn} ↗
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* FEATURED PORTFOLIO / CASES SECTION */}
            <section className="content-section surface-dark">
              <div className="section-container">
                <div className="section-header-row">
                  <div>
                    <span className="section-tag">{t.sections.casesTag}</span>
                    <h2 className="section-heading">{t.sections.casesTitle}</h2>
                    <p className="section-sub">{t.sections.casesSubtitle}</p>
                  </div>
                  <button
                    type="button"
                    className="btn-outline-cyber"
                    onClick={() => navigateTo('portfolio')}
                  >
                    {t.sections.allCasesBtn} ↗
                  </button>
                </div>

                <div className="filter-pills-row">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`filter-pill ${portfolioFilter === cat ? 'active' : ''}`}
                      onClick={() => setPortfolioFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="cases-grid">
                  {filteredCases.map((c) => (
                    <article
                      key={c.id}
                      className="case-card"
                      style={{ backgroundImage: c.gradient }}
                      onClick={() => navigateTo('case-detail', c)}
                    >
                      <div className="case-card-meta">
                        <span className="case-cat-badge">{c.category}</span>
                        <span className="case-industry">{c.industry[lang]}</span>
                      </div>
                      <h3 className="case-card-title">{c.title[lang]}</h3>
                      <p className="case-card-desc">{c.challenge[lang]}</p>

                      <div className="case-metric-box">
                        <div className="case-metric-val">{c.metric}</div>
                        <div className="case-metric-lbl">{c.metricLabel[lang]}</div>
                      </div>

                      <div className="service-stack-tags">
                        {c.stack.map((s) => (
                          <span key={s} className="stack-tag">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="case-card-action">
                        <span>{t.sections.viewCaseBtn} ↗</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* INDUSTRY EXPERTISE SECTION */}
            <section className="content-section surface-alt">
              <div className="section-container">
                <div className="section-header-row">
                  <div>
                    <span className="section-tag">{t.sections.expertiseTag}</span>
                    <h2 className="section-heading">{t.sections.expertiseTitle}</h2>
                    <p className="section-sub">{t.sections.expertiseSubtitle}</p>
                  </div>
                </div>

                <div className="expertise-grid">
                  {EXPERTISE_INDUSTRIES.map((ind) => (
                    <div key={ind.code} className="expertise-card">
                      <span className="expertise-code">{ind.code}</span>
                      <h3 className="expertise-title">{ind.title[lang]}</h3>
                      <p className="expertise-desc">{ind.desc[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ABOUT COMPANY & WORKFLOW + TRUST TESTIMONIALS */}
            <section className="content-section surface-dark">
              <div className="section-container">
                <div className="about-split-layout">
                  <div className="about-brand-col">
                    <span className="section-tag">{t.sections.aboutTag}</span>
                    <h2 className="section-heading">{t.sections.aboutTitle}</h2>
                    <p className="section-sub">{t.sections.aboutSubtitle}</p>
                    <div className="about-logo-showcase">
                      <img
                        src="./assets/vitanex-logo.jpg"
                        alt="VitaNeX Digital Studio"
                        className="about-logo-large"
                      />
                    </div>
                  </div>

                  <div className="about-steps-col">
                    {ABOUT_FEATURES.map((feat) => (
                      <div key={feat.step} className="workflow-step-card">
                        <div className="step-badge">{feat.step}</div>
                        <div>
                          <h3 className="step-title">{feat.title[lang]}</h3>
                          <p className="step-desc">{feat.desc[lang]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div className="testimonials-block">
                  <span className="section-tag">{t.sections.trustTag}</span>
                  <h3 className="section-heading small-heading">
                    {t.sections.trustTitle}
                  </h3>
                  <div className="testimonials-grid">
                    {TESTIMONIALS.map((item, idx) => (
                      <div key={idx} className="testimonial-card">
                        <p className="testimonial-quote">{item.text[lang]}</p>
                        <div className="testimonial-author">{item.author}</div>
                        <div className="testimonial-role">{item.role[lang]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* LEAD GENERATION FORM SECTION ("ОБСУДИТЬ ПРОЕКТ") */}
            <section id="discuss-project" className="content-section surface-lead">
              <div className="section-container">
                <div className="lead-section-grid">
                  <div className="lead-info-col">
                    <span className="section-tag">{t.sections.contactTag}</span>
                    <h2 className="section-heading">{t.sections.contactTitle}</h2>
                    <p className="section-sub">{t.sections.contactSubtitle}</p>

                    <div className="lead-contact-cards">
                      {WHATSAPP_NUMBERS.map((phone) => (
                        <a
                          key={phone.raw}
                          href={phone.url}
                          target="_blank"
                          rel="noreferrer"
                          className="lead-wa-card"
                        >
                          <div className="wa-card-badge">WhatsApp 24/7</div>
                          <div className="wa-card-number">{phone.display}</div>
                          <div className="wa-card-region">{phone.region[lang]}</div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="lead-form-col">
                    <LeadForm
                      t={t}
                      lang={lang}
                      onSuccess={(payload) => setSuccessPayload(payload)}
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== SERVICES PAGE ==================== */}
        {activePage === 'services' && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <span className="section-tag">{t.sections.servicesTag}</span>
              <h1 className="page-hero-title">{t.sections.servicesTitle}</h1>
              <p className="section-sub">{t.sections.servicesSubtitle}</p>

              <div className="services-grid">
                {SERVICES_DATA.map((srv) => (
                  <article
                    key={srv.id}
                    className="service-card"
                    onClick={() => navigateTo('service-detail', srv)}
                  >
                    <div className="service-card-top">
                      <span className="service-number">{srv.number}</span>
                      <span className="service-timeline">{srv.timeline[lang]}</span>
                    </div>
                    <h2 className="service-card-title">{srv.title[lang]}</h2>
                    <p className="service-card-desc">{srv.fullDesc[lang]}</p>
                    <div className="service-stack-tags">
                      {srv.stack.map((tech) => (
                        <span key={tech} className="stack-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="service-card-footer">
                      <span className="link-arrow">
                        {t.sections.detailsBtn} ↗
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== SINGLE SERVICE DETAIL PAGE ==================== */}
        {activePage === 'service-detail' && selectedService && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <button
                type="button"
                className="back-nav-btn"
                onClick={() => navigateTo('services')}
              >
                ← {t.sections.allServicesBtn}
              </button>

              <div className="detail-hero-card">
                <div className="service-card-top">
                  <span className="service-number">{selectedService.number}</span>
                  <span className="service-timeline">
                    {selectedService.timeline[lang]}
                  </span>
                </div>
                <h1 className="page-hero-title">{selectedService.title[lang]}</h1>
                <p className="detail-lead-p">{selectedService.fullDesc[lang]}</p>

                <div className="detail-deliverables">
                  {selectedService.deliverables[lang].map((item, i) => (
                    <div key={i} className="deliverable-item">
                      <span className="check-neon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="service-stack-tags">
                  {selectedService.stack.map((tech) => (
                    <span key={tech} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="detail-cta-row">
                  <button
                    type="button"
                    className="btn-neon-submit"
                    onClick={() => openLeadModal(selectedService.title[lang])}
                  >
                    ↗ {t.sections.orderServiceBtn}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== PORTFOLIO PAGE ==================== */}
        {activePage === 'portfolio' && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <span className="section-tag">{t.sections.casesTag}</span>
              <h1 className="page-hero-title">{t.sections.casesTitle}</h1>
              <p className="section-sub">{t.sections.casesSubtitle}</p>

              <div className="filter-pills-row">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill ${portfolioFilter === cat ? 'active' : ''}`}
                    onClick={() => setPortfolioFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="cases-grid">
                {filteredCases.map((c) => (
                  <article
                    key={c.id}
                    className="case-card"
                    style={{ backgroundImage: c.gradient }}
                    onClick={() => navigateTo('case-detail', c)}
                  >
                    <div className="case-card-meta">
                      <span className="case-cat-badge">{c.category}</span>
                      <span className="case-industry">{c.industry[lang]}</span>
                    </div>
                    <h2 className="case-card-title">{c.title[lang]}</h2>
                    <p className="case-card-desc">{c.challenge[lang]}</p>
                    <div className="case-metric-box">
                      <div className="case-metric-val">{c.metric}</div>
                      <div className="case-metric-lbl">{c.metricLabel[lang]}</div>
                    </div>
                    <div className="case-card-action">
                      <span>{t.sections.viewCaseBtn} ↗</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== SINGLE CASE STUDY DETAIL PAGE ==================== */}
        {activePage === 'case-detail' && selectedCase && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <button
                type="button"
                className="back-nav-btn"
                onClick={() => navigateTo('portfolio')}
              >
                ← {t.sections.allCasesBtn}
              </button>

              <div className="detail-hero-card">
                <div className="case-card-meta">
                  <span className="case-cat-badge">{selectedCase.category}</span>
                  <span className="case-industry">
                    {selectedCase.industry[lang]}
                  </span>
                </div>
                <h1 className="page-hero-title">{selectedCase.title[lang]}</h1>

                <div className="case-metric-box highlight">
                  <div className="case-metric-val">{selectedCase.metric}</div>
                  <div className="case-metric-lbl">
                    {selectedCase.metricLabel[lang]}
                  </div>
                </div>

                <div className="case-breakdown-grid">
                  <div className="case-block">
                    <h3>01 // ЗАДАЧА / CHALLENGE</h3>
                    <p>{selectedCase.challenge[lang]}</p>
                  </div>
                  <div className="case-block">
                    <h3>02 // РЕШЕНИЕ / SOLUTION</h3>
                    <p>{selectedCase.solution[lang]}</p>
                  </div>
                  <div className="case-block">
                    <h3>03 // РЕЗУЛЬТАТ / RESULT</h3>
                    <p>{selectedCase.result[lang]}</p>
                  </div>
                </div>

                <div className="service-stack-tags">
                  {selectedCase.stack.map((tech) => (
                    <span key={tech} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="detail-cta-row">
                  <button
                    type="button"
                    className="btn-neon-submit"
                    onClick={() => openLeadModal(selectedCase.title[lang])}
                  >
                    ↗ {t.nav.discussProject}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== EXPERTISE PAGE ==================== */}
        {activePage === 'expertise' && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <span className="section-tag">{t.sections.expertiseTag}</span>
              <h1 className="page-hero-title">{t.sections.expertiseTitle}</h1>
              <p className="section-sub">{t.sections.expertiseSubtitle}</p>

              <div className="expertise-grid">
                {EXPERTISE_INDUSTRIES.map((ind) => (
                  <div key={ind.code} className="expertise-card">
                    <span className="expertise-code">{ind.code}</span>
                    <h2 className="expertise-title">{ind.title[lang]}</h2>
                    <p className="expertise-desc">{ind.desc[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== ABOUT US PAGE ==================== */}
        {activePage === 'about' && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <div className="about-split-layout">
                <div className="about-brand-col">
                  <span className="section-tag">{t.sections.aboutTag}</span>
                  <h1 className="page-hero-title">{t.sections.aboutTitle}</h1>
                  <p className="section-sub">{t.sections.aboutSubtitle}</p>
                  <img
                    src="./assets/vitanex-promo.jpg"
                    alt="VitaNeX Digital Studio"
                    className="hero-poster-img"
                  />
                </div>
                <div className="about-steps-col">
                  {ABOUT_FEATURES.map((feat) => (
                    <div key={feat.step} className="workflow-step-card">
                      <div className="step-badge">{feat.step}</div>
                      <div>
                        <h3 className="step-title">{feat.title[lang]}</h3>
                        <p className="step-desc">{feat.desc[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== BLOG PAGE ==================== */}
        {activePage === 'blog' && (
          <section className="content-section page-top-offset surface-dark">
            <div className="section-container">
              <span className="section-tag">{t.sections.blogTag}</span>
              <h1 className="page-hero-title">{t.sections.blogTitle}</h1>

              <div className="services-grid">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="service-card"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="service-card-top">
                      <span className="stack-tag">{post.tag}</span>
                      <span className="service-timeline">{post.readTime}</span>
                    </div>
                    <h2 className="service-card-title">{post.title[lang]}</h2>
                    <p className="service-card-desc">{post.excerpt[lang]}</p>
                    <div className="service-card-footer">
                      <span className="link-arrow">Read Article ↗</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== CONTACTS PAGE ==================== */}
        {activePage === 'contacts' && (
          <section className="content-section page-top-offset surface-lead">
            <div className="section-container">
              <div className="lead-section-grid">
                <div className="lead-info-col">
                  <span className="section-tag">{t.sections.contactTag}</span>
                  <h1 className="page-hero-title">{t.sections.contactTitle}</h1>
                  <p className="section-sub">{t.sections.contactSubtitle}</p>

                  <div className="lead-contact-cards">
                    {WHATSAPP_NUMBERS.map((phone) => (
                      <a
                        key={phone.raw}
                        href={phone.url}
                        target="_blank"
                        rel="noreferrer"
                        className="lead-wa-card"
                      >
                        <div className="wa-card-badge">WhatsApp 24/7</div>
                        <div className="wa-card-number">{phone.display}</div>
                        <div className="wa-card-region">{phone.region[lang]}</div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="lead-form-col">
                  <LeadForm
                    t={t}
                    lang={lang}
                    onSuccess={(payload) => setSuccessPayload(payload)}
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="vitanex-footer">
        <div className="section-container footer-grid">
          <div className="footer-brand-col">
            <div className="brand-logo-btn" onClick={() => navigateTo('home')}>
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
            </div>
            <p className="footer-tagline">
              IDEAS QUE HACEN CRECER TU NEGOCIO • RU / EN / ES
            </p>
          </div>

          <div className="footer-links-col">
            <button type="button" onClick={() => navigateTo('services')}>
              {t.nav.services}
            </button>
            <button type="button" onClick={() => navigateTo('expertise')}>
              {t.nav.expertise}
            </button>
            <button type="button" onClick={() => navigateTo('portfolio')}>
              {t.nav.cases}
            </button>
            <button type="button" onClick={() => navigateTo('about')}>
              {t.nav.company}
            </button>
            <button type="button" onClick={() => navigateTo('blog')}>
              {t.nav.blog}
            </button>
            <button type="button" onClick={() => navigateTo('contacts')}>
              {t.nav.contacts}
            </button>
          </div>

          <div className="footer-wa-col">
            {WHATSAPP_NUMBERS.map((phone) => (
              <a
                key={phone.raw}
                href={phone.url}
                target="_blank"
                rel="noreferrer"
                className="footer-wa-link"
              >
                WhatsApp: {phone.display}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} VitaNeX Digital Studio. All rights reserved. PWA Enabled.
        </div>
      </footer>

      {/* Floating Circular "↗ ОБСУДИТЬ ПРОЕКТ" Button for instant access on scroll */}
      <button
        type="button"
        className="floating-discuss-circle"
        onClick={() => openLeadModal()}
        aria-label={t.nav.discussProject}
      >
        <span className="circle-arrow">↗</span>
        <span>{t.hero.discussBtn}</span>
      </button>

      {/* Modal Lead Form ("СВЯЗАТЬСЯ С НАМИ" / "ОБСУДИТЬ ПРОЕКТ") */}
      {leadModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setLeadModalOpen(false)}
        >
          <div
            className="lead-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lead-modal-header">
              <div>
                <span className="section-tag">{t.sections.contactTag}</span>
                <h3>{t.sections.contactTitle}</h3>
              </div>
              <button
                type="button"
                className="sidebar-close-btn"
                onClick={() => setLeadModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <LeadForm
              t={t}
              lang={lang}
              preselectedService={modalService}
              onSuccess={(payload) => {
                setLeadModalOpen(false);
                setSuccessPayload(payload);
              }}
            />
          </div>
        </div>
      )}

      {/* Blog Post Reader Modal */}
      {selectedPost && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="lead-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lead-modal-header">
              <span className="stack-tag">{selectedPost.tag}</span>
              <button
                type="button"
                className="sidebar-close-btn"
                onClick={() => setSelectedPost(null)}
              >
                ✕
              </button>
            </div>
            <h2 className="service-card-title">{selectedPost.title[lang]}</h2>
            <p className="detail-lead-p">{selectedPost.content[lang]}</p>
            <button
              type="button"
              className="btn-neon-submit"
              onClick={() => {
                setSelectedPost(null);
                openLeadModal();
              }}
            >
              ↗ {t.nav.discussProject}
            </button>
          </div>
        </div>
      )}

      {/* Success Notification Popup */}
      <SuccessPopup
        payload={successPayload}
        t={t}
        onClose={() => setSuccessPayload(null)}
      />
    </div>
  );
}

export default App;
