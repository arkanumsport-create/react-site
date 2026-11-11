import { useState, useEffect } from 'react';
import {
  TRANSLATIONS,
  WHATSAPP_NUMBERS,
  INSTAGRAM_INFO,
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
import { VitaNexLogo, WhatsAppIcon, InstagramIcon } from './components/BrandIcons';
import { PwaInstallModal } from './components/PwaInstallModal';
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

  // Theme mode: 'dark' keeps the site in its signature Dark Cyber Neon state;
  // 'light' turns the entire site bright/white with crisp, readable dark text
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem('vitanex_theme_v2');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('vitanex_theme_v2', themeMode);
  }, [themeMode]);

  // Matrix Digital Rain Intro & Background state
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.__skipIntro) return false;
      const elapsed = Date.now() - (window.__introStartTime || Date.now());
      if (elapsed >= 1750) return false;
    }
    return true;
  });
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  // Navigation state
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);
  const [selectedCase, setSelectedCase] = useState(PORTFOLIO_CASES[0]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('All');

  // Track scroll position so small circle only appears when scrolling down
  const [showFloatingCircle, setShowFloatingCircle] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 460) {
        setShowFloatingCircle(true);
      } else {
        setShowFloatingCircle(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lead Modal & Success Popup state
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [successPayload, setSuccessPayload] = useState(null);

  // PWA Install Prompt & Interactive Mobile Guide Modal
  const [deferredPrompt, setDeferredPrompt] = useState(
    () => (typeof window !== 'undefined' && window.__deferredPwaPrompt) || null
  );
  const [pwaGuideOpen, setPwaGuideOpen] = useState(false);

  useEffect(() => {
    const syncPrompt = () => {
      if (window.__deferredPwaPrompt) {
        setDeferredPrompt(window.__deferredPwaPrompt);
      }
    };
    const handler = (e) => {
      e.preventDefault();
      window.__deferredPwaPrompt = e;
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('pwa-prompt-ready', syncPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('pwa-prompt-ready', syncPrompt);
    };
  }, []);

  const triggerNativeInstall = async () => {
    const promptEvent = deferredPrompt || window.__deferredPwaPrompt;
    if (!promptEvent) return;
    promptEvent.prompt();
    await promptEvent.userChoice;
    window.__deferredPwaPrompt = null;
    setDeferredPrompt(null);
    setPwaGuideOpen(false);
  };

  const handleInstallPwa = async () => {
    const promptEvent = deferredPrompt || window.__deferredPwaPrompt;
    if (promptEvent) {
      await triggerNativeInstall();
    } else {
      setPwaGuideOpen(true);
    }
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

  const isStandalonePwa =
    typeof window !== 'undefined' &&
    (window.navigator.standalone === true ||
      window.matchMedia('(display-mode: standalone)').matches);

  return (
    <div
      className={`app-shell theme-${themeMode} ${isStandalonePwa ? 'pwa-standalone' : ''}`}
    >
      {/* Matrix Falling Digits Intro when opening the website */}
      {showIntro && (
        <MatrixIntroOverlay
          t={t}
          lang={lang}
          setLang={setLang}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Header & Slide-out Sidebar */}
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
        onReplayIntro={() => {
          window.__introStartTime = Date.now();
          setShowIntro(true);
        }}
        canInstallPwa={Boolean(deferredPrompt)}
        onInstallPwa={handleInstallPwa}
      />

      {/* MAIN CONTENT ROUTER */}
      <main className="main-content">
        {/* ==================== HOME PAGE ==================== */}
        {activePage === 'home' && (
          <>
            {/* HERO SECTION */}
            <section className="wezom-hero-section">
              {matrixEnabled && (
                <MatrixCanvas
                  opacity={themeMode === 'light' ? 0.22 : 0.42}
                  lightMode={themeMode === 'light'}
                  speed={1}
                />
              )}
              <div className="hero-glow-orb orb-cyan" />
              <div className="hero-glow-orb orb-purple" />

              <div className="section-container hero-inner">
                <div className="hero-top-badge">
                  <span className="pulse-dot" />
                  {t.hero.badge}
                </div>
                <div className="hero-red-slogan">{t.matrixIntro.tagline}</div>

                {/* Giant Split Typography + Single Big Circle CTA Button */}
                <div className="wezom-giant-grid">
                  <div className="giant-row row-1">
                    <h1 className="giant-word gradient-cyber">
                      {t.hero.line1}
                    </h1>
                  </div>

                  <div className="giant-row row-2">
                    <div className="giant-word hero-main-word">
                      {t.hero.line2}
                    </div>
                    <p className="wezom-side-mission">
                      {t.hero.sideText}
                    </p>
                  </div>

                  <div className="giant-row row-3">
                    <div className="giant-word hero-main-word">
                      {t.hero.line3}
                    </div>

                    {/* Single Big Round Button "↗ ОБСУДИТЬ ПРОЕКТ" on Hero */}
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

                {/* Hero Showcase: 3 Pillars on the left + Person Working at Laptop on the right */}
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
                          <WhatsAppIcon size={18} />
                          <span>
                            WhatsApp: <strong>{phone.display}</strong>
                          </span>
                        </a>
                      ))}
                      <a
                        href={INSTAGRAM_INFO.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-wa-chip insta-chip"
                      >
                        <InstagramIcon size={18} />
                        <span>
                          Instagram: <strong>{INSTAGRAM_INFO.handle}</strong>
                        </span>
                      </a>
                      <button
                        type="button"
                        className="hero-wa-chip pwa-hero-chip"
                        onClick={handleInstallPwa}
                      >
                        <span>📲</span>
                        <strong>{t.nav.installPwa}</strong>
                      </button>
                    </div>
                  </div>

                  {/* Hero Video replacing the static photo on the Home page */}
                  <div className="hero-workspace-card">
                    {!showIntro && (
                      <video
                        src="./assets/vitanex-hero.mp4"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="hero-workspace-video"
                      >
                        <source src="./assets/vitanex-hero.mp4" type="video/mp4" />
                        <source src="./assets/vitanex-hero.mp4" type="video/quicktime" />
                      </video>
                    )}
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

            {/* SERVICES SECTION */}
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
            <section className="content-section surface-primary">
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
                      {cat === 'All' ? t.sections.filterAll : cat}
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
                        <div className="case-metric-val">{c.metric[lang]}</div>
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

            {/* ABOUT COMPANY (WITH VIDEO) & WORKFLOW + TRUST TESTIMONIALS */}
            <section className="content-section surface-primary">
              <div className="section-container">
                <div className="about-split-layout">
                  <div className="about-brand-col">
                    <span className="section-tag">{t.sections.aboutTag}</span>
                    <h2 className="section-heading">{t.sections.aboutTitle}</h2>
                    <p className="section-sub">{t.sections.aboutSubtitle}</p>
                    <div className="company-video-wrapper">
                      {!showIntro && (
                        <video
                          src="./assets/vitanex-company.mp4"
                          controls
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="company-showcase-video"
                        />
                      )}
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

            {/* LEAD GENERATION FORM SECTION ("ОБСУДИТЬ ПРОЕКТ" / CONTACTS) */}
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
                          <WhatsAppIcon size={36} />
                          <div>
                            <div className="wa-card-badge">WhatsApp 24/7</div>
                            <div className="wa-card-number">{phone.display}</div>
                            <div className="wa-card-region">{phone.region[lang]}</div>
                          </div>
                        </a>
                      ))}

                      {/* Instagram Link & Icon */}
                      <a
                        href={INSTAGRAM_INFO.url}
                        target="_blank"
                        rel="noreferrer"
                        className="lead-wa-card insta-card"
                      >
                        <InstagramIcon size={36} />
                        <div>
                          <div className="wa-card-badge insta-badge">Instagram</div>
                          <div className="wa-card-number">{INSTAGRAM_INFO.handle}</div>
                          <div className="wa-card-region">{INSTAGRAM_INFO.label[lang]}</div>
                        </div>
                      </a>
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
          <section className="content-section page-top-offset surface-primary">
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
          <section className="content-section page-top-offset surface-primary">
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
          <section className="content-section page-top-offset surface-primary">
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
                    {cat === 'All' ? t.sections.filterAll : cat}
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
                      <div className="case-metric-val">{c.metric[lang]}</div>
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
          <section className="content-section page-top-offset surface-primary">
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
                  <div className="case-metric-val">{selectedCase.metric[lang]}</div>
                  <div className="case-metric-lbl">
                    {selectedCase.metricLabel[lang]}
                  </div>
                </div>

                <div className="case-breakdown-grid">
                  <div className="case-block">
                    <h3>{t.sections.challengeTitle}</h3>
                    <p>{selectedCase.challenge[lang]}</p>
                  </div>
                  <div className="case-block">
                    <h3>{t.sections.solutionTitle}</h3>
                    <p>{selectedCase.solution[lang]}</p>
                  </div>
                  <div className="case-block">
                    <h3>{t.sections.resultTitle}</h3>
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
          <section className="content-section page-top-offset surface-primary">
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

        {/* ==================== ABOUT US / COMPANY PAGE (WITH VIDEO) ==================== */}
        {activePage === 'about' && (
          <section className="content-section page-top-offset surface-primary">
            <div className="section-container">
              <div className="about-split-layout">
                <div className="about-brand-col">
                  <span className="section-tag">{t.sections.aboutTag}</span>
                  <h1 className="page-hero-title">{t.sections.aboutTitle}</h1>
                  <p className="section-sub">{t.sections.aboutSubtitle}</p>
                  <div className="company-video-wrapper">
                    <video
                      src="./assets/vitanex-company.mp4"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="company-showcase-video"
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
            </div>
          </section>
        )}

        {/* ==================== BLOG PAGE ==================== */}
        {activePage === 'blog' && (
          <section className="content-section page-top-offset surface-primary">
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
                      <span className="link-arrow">
                        {t.sections.readArticleBtn}
                      </span>
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
                        <WhatsAppIcon size={36} />
                        <div>
                          <div className="wa-card-badge">WhatsApp 24/7</div>
                          <div className="wa-card-number">{phone.display}</div>
                          <div className="wa-card-region">{phone.region[lang]}</div>
                        </div>
                      </a>
                    ))}

                    {/* Instagram Link & Icon in Contacts Tab */}
                    <a
                      href={INSTAGRAM_INFO.url}
                      target="_blank"
                      rel="noreferrer"
                      className="lead-wa-card insta-card"
                    >
                      <InstagramIcon size={36} />
                      <div>
                        <div className="wa-card-badge insta-badge">Instagram</div>
                        <div className="wa-card-number">{INSTAGRAM_INFO.handle}</div>
                        <div className="wa-card-region">{INSTAGRAM_INFO.label[lang]}</div>
                      </div>
                    </a>
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

      {/* FOOTER (with sharp rotating logo + WhatsApp icons next to numbers + Instagram icon) */}
      <footer className="vitanex-footer">
        <div className="section-container footer-grid">
          <div className="footer-brand-col">
            <button
              type="button"
              className="brand-logo-btn"
              onClick={() => navigateTo('home')}
            >
              <VitaNexLogo size={68} />
              <div className="brand-logo-text">
                <span className="brand-name">
                  Vita<span className="brand-accent">NeX</span>
                </span>
                <span className="brand-sub">DIGITAL STUDIO</span>
              </div>
            </button>
            <p className="footer-tagline">
              {t.matrixIntro.tagline} • RU / EN / ES
            </p>
          </div>

          <div className="footer-links-col">
            <button type="button" onClick={() => navigateTo('home')}>
              {t.nav.home}
            </button>
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
                <WhatsAppIcon size={20} />
                <span>{phone.display}</span>
              </a>
            ))}
            <a
              href={INSTAGRAM_INFO.url}
              target="_blank"
              rel="noreferrer"
              className="footer-wa-link insta-footer-link"
            >
              <InstagramIcon size={20} />
              <span>{INSTAGRAM_INFO.handle}</span>
            </a>
            <button
              type="button"
              className="footer-pwa-install-btn"
              onClick={handleInstallPwa}
            >
              📲 {t.nav.installPwa}
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} VitaNeX Digital Studio. {t.sections.footerRights}
        </div>
      </footer>

      {/* Interactive PWA Install Guide Modal for iPhone (iOS) & Android */}
      <PwaInstallModal
        isOpen={pwaGuideOpen}
        onClose={() => setPwaGuideOpen(false)}
        lang={lang}
        canDirectInstall={Boolean(deferredPrompt)}
        onDirectInstall={triggerNativeInstall}
      />

      {/* Small Floating Circle Button "↗ ОБСУДИТЬ ПРОЕКТ" — appears ONLY when scrolling down */}
      <button
        type="button"
        className={`floating-discuss-circle ${showFloatingCircle ? 'visible' : 'hidden'}`}
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
