export const WHATSAPP_NUMBERS = [
  {
    raw: '584123776184',
    display: '+58 412 377 6184',
    region: { ru: 'Латинская Америка / Global', en: 'Latin America / Global', es: 'Latinoamérica / Global' },
    url: 'https://wa.me/584123776184'
  },
  {
    raw: '995596000770',
    display: '+995 596 000 770',
    region: { ru: 'Европа и СНГ / Global', en: 'Europe & CIS / Global', es: 'Europa y CEI / Global' },
    url: 'https://wa.me/995596000770'
  }
];

export const TRANSLATIONS = {
  ru: {
    meta: {
      code: 'RU',
      name: 'Русский'
    },
    nav: {
      services: 'УСЛУГИ',
      expertise: 'ЭКСПЕРТИЗА',
      cases: 'КЕЙСЫ',
      company: 'КОМПАНИЯ',
      blog: 'БЛОГ',
      contacts: 'КОНТАКТЫ',
      contactUs: 'СВЯЗАТЬСЯ С НАМИ',
      discussProject: 'ОБСУДИТЬ ПРОЕКТ',
      whatsappLabel: 'WhatsApp 24/7 — 2 линии',
      installPwa: 'Установить PWA',
      matrixToggle: 'Матрица',
      themeDark: 'Неон Тёмная',
      themeContrast: 'Контраст Белый/Тёмный'
    },
    matrixIntro: {
      subtitle: 'INITIALIZING CYBER-CORE // VITANEX DIGITAL STUDIO',
      tagline: 'IDEAS QUE HACEN CRECER TU NEGOCIO',
      skip: 'Войти на сайт ↗'
    },
    hero: {
      badge: 'VITANEX DIGITAL STUDIO • СОЗДАНИЕ САЙТОВ ПОД КЛЮЧ',
      line1: 'IT & DIGITAL',
      line2: 'РЕШЕНИЯ',
      sideText: 'РАЗРАБАТЫВАЕМ IT-ЭКОСИСТЕМЫ И ПОМОГАЕМ ТРАНСФОРМИРОВАТЬ B2B И B2C БИЗНЕС',
      line3: 'ДЛЯ БИЗНЕСА',
      discussBtn: 'ОБСУДИТЬ\nПРОЕКТ',
      secondaryBtn: 'Смотреть кейсы',
      pillars: [
        {
          icon: 'globe',
          title: 'НА ЯЗЫКАХ: РУССКИЙ / ENGLISH / ESPAÑOL',
          desc: 'Мультиязычные платформы для международного масштабирования'
        },
        {
          icon: 'zap',
          title: 'КОРОТКИЕ СРОКИ',
          desc: 'Быстрый запуск MVP и корпоративных сайтов без потери качества'
        },
        {
          icon: 'shield',
          title: 'РАБОТАЕМ ПО ДОГОВОРУ',
          desc: 'Фиксируем сроки, смету, SLA и передачу исходного кода'
        }
      ],
      stats: [
        { value: '140+', label: 'Реализованных проектов' },
        { value: '3', label: 'Языковых рынка (RU / EN / ES)' },
        { value: '99.4%', label: 'Соблюдение дедлайнов по договору' },
        { value: '24/7', label: 'Поддержка в WhatsApp и Telegram' }
      ]
    },
    sections: {
      servicesTag: '// НАШИ НАПРАВЛЕНИЯ',
      servicesTitle: 'Комплексные IT-услуги для роста продаж',
      servicesSubtitle: 'Проектируем, разрабатываем и масштабируем цифровые продукты с высокой конверсией и безупречной архитектурой.',
      allServicesBtn: 'Все услуги',
      detailsBtn: 'Подробнее об услуге',
      orderServiceBtn: 'Заказать разработку',
      expertiseTag: '// ОТРАСЛЕВАЯ ЭКСПЕРТИЗА',
      expertiseTitle: 'Глубокое понимание специфики вашего рынка',
      expertiseSubtitle: 'Создаем решения, адаптированные под бизнес-процессы конкретных индустрий B2B и B2C.',
      casesTag: '// ПОРТФОЛИО И КЕЙСЫ',
      casesTitle: 'Проекты, которые приносят измеримый результат',
      casesSubtitle: 'Реальные кейсы трансформации бизнеса: от архитектуры до роста выручки.',
      viewCaseBtn: 'Изучить кейс',
      allCasesBtn: 'Все проекты портфолио',
      aboutTag: '// О КОМПАНИИ VITANEX',
      aboutTitle: 'Технологический партнёр полного цикла',
      aboutSubtitle: 'Мы объединяем инженерную точность, киберпанк-эстетику будущего и строгую бизнес-аналитику в стиле ведущих европейских digital-агентств.',
      trustTag: '// ДОВЕРИЕ И ОТЗЫВЫ',
      trustTitle: 'Почему компании выбирают VitaNeX Digital Studio',
      blogTag: '// БЛОГ И АНАЛИТИКА',
      blogTitle: 'Экспертные статьи о разработке и бизнесе',
      contactTag: '// НАЧАТЬ СОТРУДНИЧЕСТВО',
      contactTitle: 'Готовы обсудить ваш проект?',
      contactSubtitle: 'Оставьте заявку — мы проведём бесплатный аудит задачи, подготовим архитектуру и расчёт стоимости в течение 2 часов.'
    },
    form: {
      nameLabel: 'Ваше имя *',
      namePlaceholder: 'Александр Иванов',
      contactLabel: 'Телефон / WhatsApp / Email *',
      contactPlaceholder: '+58 412 ... или email@domain.com',
      serviceLabel: 'Интересующее направление',
      taskLabel: 'Описание задачи *',
      taskPlaceholder: 'Расскажите о вашем проекте, целях и желаемых сроках...',
      consentLabel: 'Я согласен(на) на обработку персональных данных и условия политики конфиденциальности *',
      submitBtn: 'ОТПРАВИТЬ ЗАЯВКУ',
      submittingBtn: 'ОТПРАВКА...',
      sendViaWhatsapp: 'Написать сразу в WhatsApp',
      tgSettingsToggle: 'Настройки интеграции Telegram Bot API',
      tgBotTokenPlaceholder: 'Telegram Bot Token (опционально)',
      tgChatIdPlaceholder: 'Telegram Chat ID (опционально)',
      tgHint: 'По умолчанию заявка сохраняется и формирует мгновенное уведомление. Укажите Bot Token и Chat ID для прямой отправки в ваш Telegram-канал.',
      errors: {
        name: 'Пожалуйста, укажите ваше имя (минимум 2 символа)',
        contact: 'Укажите корректный телефон или Email для связи',
        task: 'Кратко опишите вашу задачу (минимум 10 символов)',
        consent: 'Необходимо подтвердить согласие на обработку данных'
      },
      successTitle: 'Заявка успешно отправлена!',
      successMessage: 'Спасибо за обращение в VitaNeX Digital Studio. Наш ведущий менеджер свяжется с вами в ближайшее время через WhatsApp или указанный контакт.',
      closeBtn: 'Отлично, жду связи'
    }
  },
  en: {
    meta: {
      code: 'EN',
      name: 'English'
    },
    nav: {
      services: 'SERVICES',
      expertise: 'EXPERTISE',
      cases: 'CASES',
      company: 'COMPANY',
      blog: 'BLOG',
      contacts: 'CONTACTS',
      contactUs: 'CONTACT US',
      discussProject: 'DISCUSS PROJECT',
      whatsappLabel: 'WhatsApp 24/7 — 2 Lines',
      installPwa: 'Install PWA',
      matrixToggle: 'Matrix FX',
      themeDark: 'Neon Dark',
      themeContrast: 'Contrast Light/Dark'
    },
    matrixIntro: {
      subtitle: 'INITIALIZING CYBER-CORE // VITANEX DIGITAL STUDIO',
      tagline: 'IDEAS QUE HACEN CRECER TU NEGOCIO',
      skip: 'Enter Website ↗'
    },
    hero: {
      badge: 'VITANEX DIGITAL STUDIO • TURNKEY WEB & PWA DEVELOPMENT',
      line1: 'IT & DIGITAL',
      line2: 'SOLUTIONS',
      sideText: 'WE ENGINEER IT ECOSYSTEMS AND HELP TRANSFORM B2B AND B2C ENTERPRISES GLOBALLY',
      line3: 'FOR BUSINESS',
      discussBtn: 'DISCUSS\nPROJECT',
      secondaryBtn: 'Explore Cases',
      pillars: [
        {
          icon: 'globe',
          title: 'LANGUAGES: РУССКИЙ / ENGLISH / ESPAÑOL',
          desc: 'Multilingual platforms engineered for international scaling'
        },
        {
          icon: 'zap',
          title: 'RAPID DELIVERY',
          desc: 'Fast MVP and corporate launches without compromising code quality'
        },
        {
          icon: 'shield',
          title: 'OFFICIAL CONTRACT',
          desc: 'Guaranteed milestones, transparent budgets, SLA & full IP ownership'
        }
      ],
      stats: [
        { value: '140+', label: 'Delivered Projects' },
        { value: '3', label: 'Core Markets (RU / EN / ES)' },
        { value: '99.4%', label: 'On-Time Contract Delivery' },
        { value: '24/7', label: 'WhatsApp & Telegram Support' }
      ]
    },
    sections: {
      servicesTag: '// OUR CAPABILITIES',
      servicesTitle: 'End-to-End IT Services to Scale Your Revenue',
      servicesSubtitle: 'We architect, design, and build high-converting digital products with bulletproof engineering.',
      allServicesBtn: 'All Services',
      detailsBtn: 'Service Details',
      orderServiceBtn: 'Order Development',
      expertiseTag: '// INDUSTRY EXPERTISE',
      expertiseTitle: 'Deep Domain Knowledge Across Key Verticals',
      expertiseSubtitle: 'Tailored digital ecosystems engineered around real B2B and B2C workflows.',
      casesTag: '// PORTFOLIO & CASE STUDIES',
      casesTitle: 'Projects That Deliver Measurable ROI',
      casesSubtitle: 'Real digital transformation case studies: from system architecture to revenue growth.',
      viewCaseBtn: 'Read Case Study',
      allCasesBtn: 'All Portfolio Cases',
      aboutTag: '// ABOUT VITANEX',
      aboutTitle: 'Full-Cycle Technology Partner',
      aboutSubtitle: 'We combine engineering precision, next-gen cyberpunk aesthetics, and strict business analytics inspired by top global digital agencies.',
      trustTag: '// TRUST & TESTIMONIALS',
      trustTitle: 'Why Ambitious Brands Choose VitaNeX Digital Studio',
      blogTag: '// INSIGHTS & BLOG',
      blogTitle: 'Expert Articles on Engineering & Digital Growth',
      contactTag: '// START COLLABORATION',
      contactTitle: 'Ready to Discuss Your Project?',
      contactSubtitle: 'Leave a request — we will conduct a free technical audit and prepare an architecture & budget proposal within 2 hours.'
    },
    form: {
      nameLabel: 'Your Name *',
      namePlaceholder: 'Alex Morgan',
      contactLabel: 'Phone / WhatsApp / Email *',
      contactPlaceholder: '+58 412 ... or email@domain.com',
      serviceLabel: 'Service of Interest',
      taskLabel: 'Project Description *',
      taskPlaceholder: 'Tell us about your project goals, features, and timeline...',
      consentLabel: 'I agree to the processing of personal data and privacy policy *',
      submitBtn: 'SEND REQUEST',
      submittingBtn: 'SENDING...',
      sendViaWhatsapp: 'Chat Directly on WhatsApp',
      tgSettingsToggle: 'Telegram Bot API Integration Settings',
      tgBotTokenPlaceholder: 'Telegram Bot Token (optional)',
      tgChatIdPlaceholder: 'Telegram Chat ID (optional)',
      tgHint: 'Leads are logged automatically. Provide a Bot Token & Chat ID to forward leads directly to your Telegram channel.',
      errors: {
        name: 'Please enter your name (at least 2 characters)',
        contact: 'Please enter a valid phone number or email',
        task: 'Please describe your project (at least 10 characters)',
        consent: 'Please accept the data processing agreement'
      },
      successTitle: 'Request Successfully Sent!',
      successMessage: 'Thank you for contacting VitaNeX Digital Studio. Our lead architect will reach out shortly via WhatsApp or your specified contact.',
      closeBtn: 'Great, thank you'
    }
  },
  es: {
    meta: {
      code: 'ES',
      name: 'Español'
    },
    nav: {
      services: 'SERVICIOS',
      expertise: 'EXPERIENCIA',
      cases: 'CASOS',
      company: 'EMPRESA',
      blog: 'BLOG',
      contacts: 'CONTACTOS',
      contactUs: 'CONTÁCTANOS',
      discussProject: 'DISCUTIR PROYECTO',
      whatsappLabel: 'WhatsApp 24/7 — 2 Líneas',
      installPwa: 'Instalar PWA',
      matrixToggle: 'Efecto Matrix',
      themeDark: 'Neón Oscuro',
      themeContrast: 'Contraste Blanco/Oscuro'
    },
    matrixIntro: {
      subtitle: 'INITIALIZING CYBER-CORE // VITANEX DIGITAL STUDIO',
      tagline: 'IDEAS QUE HACEN CRECER TU NEGOCIO',
      skip: 'Entrar al sitio ↗'
    },
    hero: {
      badge: 'VITANEX DIGITAL STUDIO • DESARROLLO WEB Y PWA LLAVE EN MANO',
      line1: 'IT & DIGITAL',
      line2: 'SOLUCIONES',
      sideText: 'DESARROLLAMOS ECOSISTEMAS IT Y AYUDAMOS A TRANSFORMAR NEGOCIOS B2B Y B2C',
      line3: 'PARA EMPRESAS',
      discussBtn: 'DISCUTIR\nPROYECTO',
      secondaryBtn: 'Ver Portafolio',
      pillars: [
        {
          icon: 'globe',
          title: 'EN IDIOMAS: РУССКИЙ / ENGLISH / ESPAÑOL',
          desc: 'Plataformas multilingües listas para escalar internacionalmente'
        },
        {
          icon: 'zap',
          title: 'PLAZOS CORTOS',
          desc: 'Lanzamiento rápido de sitios corporativos y MVP con máxima calidad'
        },
        {
          icon: 'shield',
          title: 'TRABAJAMOS POR CONTRATO',
          desc: 'Plazos garantizados, presupuesto fijo, SLA y entrega total del código'
        }
      ],
      stats: [
        { value: '140+', label: 'Proyectos Completados' },
        { value: '3', label: 'Mercados Idiomáticos (RU / EN / ES)' },
        { value: '99.4%', label: 'Entregas a Tiempo por Contrato' },
        { value: '24/7', label: 'Soporte en WhatsApp y Telegram' }
      ]
    },
    sections: {
      servicesTag: '// NUESTROS SERVICIOS',
      servicesTitle: 'Servicios IT Integrales para Multiplicar tus Ventas',
      servicesSubtitle: 'Diseñamos, desarrollamos y escalamos productos digitales de alta conversión con arquitectura moderna.',
      allServicesBtn: 'Todos los Servicios',
      detailsBtn: 'Detalles del servicio',
      orderServiceBtn: 'Solicitar Desarrollo',
      expertiseTag: '// EXPERIENCIA SECTORIAL',
      expertiseTitle: 'Comprensión Profunda de tu Industria',
      expertiseSubtitle: 'Creamos soluciones adaptadas a los procesos de negocio B2B y B2C de cada sector.',
      casesTag: '// PORTAFOLIO Y CASOS DE ÉXITO',
      casesTitle: 'Proyectos que Generan Resultados Medibles',
      casesSubtitle: 'Casos reales de transformación digital: desde la arquitectura hasta el crecimiento en ventas.',
      viewCaseBtn: 'Ver Caso Completo',
      allCasesBtn: 'Ver Todo el Portafolio',
      aboutTag: '// SOBRE VITANEX',
      aboutTitle: 'Socio Tecnológico de Ciclo Completo',
      aboutSubtitle: 'Combinamos precisión de ingeniería, estética cyberpunk neón y analítica de negocios para hacer crecer tu empresa.',
      trustTag: '// CONFIANZA Y TESTIMONIOS',
      trustTitle: 'Por Qué las Empresas Eligen VitaNeX Digital Studio',
      blogTag: '// BLOG Y ARTÍCULOS',
      blogTitle: 'Artículos Expertos sobre Desarrollo y Negocios',
      contactTag: '// INICIAR PROYECTO',
      contactTitle: '¿Listo para Discutir tu Proyecto?',
      contactSubtitle: 'Déjanos tu solicitud — realizaremos una auditoría gratuita y prepararemos una propuesta técnica en menos de 2 horas.'
    },
    form: {
      nameLabel: 'Tu Nombre *',
      namePlaceholder: 'Carlos Mendoza',
      contactLabel: 'Teléfono / WhatsApp / Email *',
      contactPlaceholder: '+58 412 ... o email@dominio.com',
      serviceLabel: 'Servicio de Interés',
      taskLabel: 'Descripción del Proyecto *',
      taskPlaceholder: 'Cuéntanos sobre tu proyecto, objetivos y plazos...',
      consentLabel: 'Acepto el procesamiento de datos personales y la política de privacidad *',
      submitBtn: 'ENVIAR SOLICITUD',
      submittingBtn: 'ENVIANDO...',
      sendViaWhatsapp: 'Escribir directo por WhatsApp',
      tgSettingsToggle: 'Configuración de Telegram Bot API',
      tgBotTokenPlaceholder: 'Telegram Bot Token (opcional)',
      tgChatIdPlaceholder: 'Telegram Chat ID (opcional)',
      tgHint: 'Las solicitudes se guardan automáticamente. Ingresa tu Bot Token y Chat ID para envío directo a Telegram.',
      errors: {
        name: 'Por favor ingresa tu nombre (mínimo 2 caracteres)',
        contact: 'Ingresa un teléfono o correo electrónico válido',
        task: 'Describe brevemente tu proyecto (mínimo 10 caracteres)',
        consent: 'Debes aceptar el consentimiento de datos'
      },
      successTitle: '¡Solicitud Enviada con Éxito!',
      successMessage: 'Gracias por contactar a VitaNeX Digital Studio. Nuestro equipo se comunicará contigo muy pronto vía WhatsApp.',
      closeBtn: 'Excelente, gracias'
    }
  }
};

export const SERVICES_DATA = [
  {
    id: 'turnkey-websites',
    number: '01',
    icon: 'layout',
    stack: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    timeline: { ru: 'от 10 дней', en: 'from 10 days', es: 'desde 10 días' },
    title: {
      ru: 'Создание сайтов под ключ',
      en: 'Turnkey Website Development',
      es: 'Desarrollo de Sitios Web Llave en Mano'
    },
    shortDesc: {
      ru: 'Корпоративные многостраничные сайты, имиджевые порталы и высококонверсионные лендинги для B2B и B2C.',
      en: 'Multi-page corporate websites, brand portals, and high-converting landing pages for B2B and B2C.',
      es: 'Sitios corporativos multipágina, portales empresariales y landing pages de alta conversión.'
    },
    fullDesc: {
      ru: 'Проектируем и разрабатываем современные корпоративные платформы с индивидуальным кибер- или минималистичным дизайном, мгновенной загрузкой, мультиязычностью (RU/EN/ES) и полной SEO-готовностью.',
      en: 'We architect and develop modern corporate platforms with custom neon or clean minimalist design, instant loading speeds, multilingual support (RU/EN/ES), and full SEO readiness.',
      es: 'Diseñamos y desarrollamos plataformas corporativas modernas con diseño exclusivo, carga ultrarrápida, soporte multilingüe (RU/EN/ES) y optimización SEO completa.'
    },
    deliverables: {
      ru: [
        'Анализ конкурентов и проектирование UX-прототипа',
        'Уникальный адаптивный UI-дизайн (Mobile First)',
        'Фронтенд на React / Next.js с анимациями 60 FPS',
        'Интеграция с Telegram, WhatsApp, CRM и аналитикой'
      ],
      en: [
        'Competitor research & interactive UX wireframing',
        'Custom responsive UI design (Mobile First)',
        'React / Next.js frontend with 60 FPS animations',
        'Telegram, WhatsApp, CRM & analytics integrations'
      ],
      es: [
        'Análisis de competencia y prototipado UX interactivo',
        'Diseño UI adaptable exclusivo (Mobile First)',
        'Frontend en React / Next.js con animaciones fluidas',
        'Integración con Telegram, WhatsApp, CRM y analítica'
      ]
    }
  },
  {
    id: 'pwa-mobile',
    number: '02',
    icon: 'smartphone',
    stack: ['PWA', 'Service Workers', 'React Native', 'Web Push', 'IndexedDB'],
    timeline: { ru: 'от 14 дней', en: 'from 14 days', es: 'desde 14 días' },
    title: {
      ru: 'Мобильные приложения и PWA',
      en: 'Mobile Apps & Progressive Web Apps (PWA)',
      es: 'Aplicaciones Móviles y PWA'
    },
    shortDesc: {
      ru: 'Установка прямо из браузера на iOS и Android без комиссий сторов, офлайн-режим и высокая скорость.',
      en: 'Direct browser installation on iOS & Android with zero app-store fees, offline mode, and native speed.',
      es: 'Instalación directa en iOS y Android desde el navegador, modo sin conexión y rendimiento nativo.'
    },
    fullDesc: {
      ru: 'Создаем кроссплатформенные мобильные приложения и Progressive Web Apps (PWA), которые устанавливаются на главный экран смартфона в 1 клик, работают без интернета и удерживают клиентов.',
      en: 'We build cross-platform mobile apps and Progressive Web Apps (PWA) that install onto the home screen in one tap, work offline via Service Workers, and boost customer retention.',
      es: 'Creamos aplicaciones móviles multiplataforma y PWA que se instalan en la pantalla de inicio en 1 clic y funcionan incluso sin conexión a internet.'
    },
    deliverables: {
      ru: [
        'Web Manifest + кастомный сценарий установки на iOS/Android',
        'Service Worker с умным кэшированием статики и офлайн-доступом',
        'Нативный UX с плавными жестами и быстрым откликом',
        'Синхронизация данных и Push-уведомления'
      ],
      en: [
        'Web Manifest + custom iOS/Android install prompts',
        'Service Worker with smart asset caching & offline mode',
        'App-like UX with smooth gestures and instant response',
        'Background data sync and Web Push notifications'
      ],
      es: [
        'Web Manifest + instalación guiada en iOS y Android',
        'Service Worker con caché inteligente y modo offline',
        'Experiencia nativa con gestos fluidos y respuesta inmediata',
        'Sincronización de datos y notificaciones Push'
      ]
    }
  },
  {
    id: 'ecommerce-b2b',
    number: '03',
    icon: 'shopping',
    stack: ['Next.js Commerce', 'Stripe / Crypto', 'Headless CMS', 'PostgreSQL', 'Redis'],
    timeline: { ru: 'от 21 дня', en: 'from 21 days', es: 'desde 21 días' },
    title: {
      ru: 'E-Commerce и B2B-порталы',
      en: 'E-Commerce & B2B Portals',
      es: 'E-Commerce y Portales B2B'
    },
    shortDesc: {
      ru: 'Интернет-магазины, маркетплейсы и оптовые кабинеты с международным эквайрингом и синхронизацией склада.',
      en: 'Online stores, marketplaces, and wholesale B2B portals with global payment gateways and ERP sync.',
      es: 'Tiendas online, marketplaces y portales mayoristas B2B con pasarelas de pago internacionales.'
    },
    fullDesc: {
      ru: 'Разрабатываем масштабируемые E-Commerce решения, рассчитанные на высокие нагрузки, десятки тысяч SKU, персональные прайс-листы и мгновенную фильтрацию.',
      en: 'We engineer scalable E-Commerce ecosystems designed for high traffic, tens of thousands of SKUs, personalized B2B pricing tiers, and sub-second catalog filtering.',
      es: 'Desarrollamos soluciones E-Commerce escalables para alto tráfico, miles de productos, precios personalizados B2B y filtrado instantáneo.'
    },
    deliverables: {
      ru: [
        'Умный каталог с мультифильтрами и мгновенным поиском',
        'Личные кабинеты дилеров и оптовых покупателей',
        'Подключение международных оплат и мультивалютности',
        'Двусторонняя интеграция с CRM, 1С, ERP и складом'
      ],
      en: [
        'Smart catalog with faceted filters & instant search',
        'Dealer & wholesale customer portals',
        'Global multi-currency payment gateway integration',
        'Two-way sync with CRM, ERP, and warehouse systems'
      ],
      es: [
        'Catálogo inteligente con filtros avanzados y búsqueda rápida',
        'Paneles privados para distribuidores y clientes B2B',
        'Pagos internacionales y soporte multimoneda',
        'Integración bidireccional con CRM, ERP e inventario'
      ]
    }
  },
  {
    id: 'ui-ux-cyber-design',
    number: '04',
    icon: 'palette',
    stack: ['Figma', 'Design Systems', 'WebGL / Canvas', 'Motion UI', '3D Assets'],
    timeline: { ru: 'от 7 дней', en: 'from 7 days', es: 'desde 7 días' },
    title: {
      ru: 'UI/UX Дизайн и Кибер-Айдентика',
      en: 'UI/UX Design & Cyber Brand Identity',
      es: 'Diseño UI/UX e Identidad Visual'
    },
    shortDesc: {
      ru: 'Проектирование интерфейсов, дизайн-систем и запоминающегося визуального стиля с фокусом на конверсию.',
      en: 'User interface engineering, scalable design systems, and memorable visual identity focused on conversion.',
      es: 'Diseño de interfaces, sistemas de diseño escalables e identidad visual enfocada en la conversión.'
    },
    fullDesc: {
      ru: 'Создаём визуальный код бренда — от строгого корпоративного минимализма с воздухом до смелого неонового киберпанка с интерактивной графикой и 3D-элементами.',
      en: 'We craft your brand’s visual DNA — from clean corporate minimalism with generous whitespace to bold neon cyberpunk interfaces with interactive Canvas and 3D visuals.',
      es: 'Creamos el ADN visual de tu marca: desde minimalismo corporativo limpio hasta estética cyberpunk neón con gráficos interactivos.'
    },
    deliverables: {
      ru: [
        'CJM (карта пути клиента) и интерактивные прототипы в Figma',
        'Полный UI-Kit и компонентная дизайн-система (Dark & Light)',
        'Интерактивные микро-анимации и кастомные эффекты',
        'Брендбук, логотип и рекламные креативы'
      ],
      en: [
        'Customer Journey Mapping & interactive Figma prototypes',
        'Complete UI-Kit & component design system (Dark & Light)',
        'Interactive micro-animations and custom Canvas effects',
        'Brandbook, logo design, and promotional creatives'
      ],
      es: [
        'Mapa de experiencia del cliente y prototipos en Figma',
        'UI-Kit completo y sistema de diseño (Modo Oscuro y Claro)',
        'Microanimaciones interactivas y efectos visuales',
        'Manual de marca, logotipo y piezas publicitarias'
      ]
    }
  },
  {
    id: 'ai-crm-automation',
    number: '05',
    icon: 'cpu',
    stack: ['Gemini AI', 'OpenAI API', 'Telegram Bot API', 'Python / Node.js', 'Webhooks'],
    timeline: { ru: 'от 10 дней', en: 'from 10 days', es: 'desde 10 días' },
    title: {
      ru: 'AI-решения, Боты и Автоматизация',
      en: 'AI Solutions, Bots & Business Automation',
      es: 'Soluciones IA, Bots y Automatización'
    },
    shortDesc: {
      ru: 'Внедрение ИИ-ассистентов, Telegram Web Apps, автоматизация лидогенерации и внутренних процессов.',
      en: 'AI assistants, Telegram Mini Apps, automated lead routing, and custom business workflow systems.',
      es: 'Asistentes de IA, Telegram Mini Apps, automatización de ventas y procesos internos.'
    },
    fullDesc: {
      ru: 'Автоматизируем рутину и ускоряем обработку заявок в 10 раз: умные боты в Telegram и WhatsApp, AI-консультанты на сайте и кастомные дашборды аналитики.',
      en: 'Eliminate manual bottlenecks and accelerate lead response 10x with smart Telegram & WhatsApp bots, website AI sales assistants, and custom analytics dashboards.',
      es: 'Automatizamos tareas repetitivas y aceleramos la atención al cliente 10x con bots en Telegram y WhatsApp, asistentes IA y paneles de control.'
    },
    deliverables: {
      ru: [
        'Интеграция форм сайта с Telegram Bot API и WhatsApp',
        'Разработка Telegram Mini Apps (TMA) под ключ',
        'Внедрение мультиязычных AI-консультантов 24/7',
        'Автоматические воронки продаж и отчётность руководителю'
      ],
      en: [
        'Direct website integration with Telegram Bot API & WhatsApp',
        'Turnkey Telegram Mini Apps (TMA) development',
        '24/7 multilingual AI sales & support assistants',
        'Automated sales pipelines and executive dashboards'
      ],
      es: [
        'Integración directa con Telegram Bot API y WhatsApp',
        'Desarrollo de Telegram Mini Apps (TMA) llave en mano',
        'Asistentes de IA multilingües activos 24/7',
        'Embudos de venta automatizados y reportes en tiempo real'
      ]
    }
  },
  {
    id: 'seo-growth',
    number: '06',
    icon: 'trending',
    stack: ['Technical SEO', 'Schema.org', 'Core Web Vitals', 'GA4', 'A/B Testing'],
    timeline: { ru: 'постоянный рост', en: 'ongoing growth', es: 'crecimiento continuo' },
    title: {
      ru: 'SEO-оптимизация и Масштабирование',
      en: 'International SEO & Digital Growth',
      es: 'SEO Internacional y Crecimiento Digital'
    },
    shortDesc: {
      ru: 'Вывод в ТОП поисковых систем на рынках СНГ, Европы и Латинской Америки, оптимизация Core Web Vitals.',
      en: 'Search engine dominance across CIS, European, and LATAM markets with 98+ Lighthouse performance.',
      es: 'Posicionamiento en Google para mercados de Latinoamérica, Europa y CEI con máximo rendimiento.'
    },
    fullDesc: {
      ru: 'Заботимся о том, чтобы сайт не просто выглядел эффектно, но и приводил целевых клиентов из органического поиска на русском, английском и испанском языках.',
      en: 'We ensure your platform not only looks extraordinary, but systematically attracts high-intent organic traffic across Russian, English, and Spanish search markets.',
      es: 'Aseguramos que tu sitio no solo impacte visualmente, sino que atraiga clientes reales desde Google en español, inglés y ruso.'
    },
    deliverables: {
      ru: [
        'Техническая SEO-архитектура и микроразметка Schema.org',
        'Оптимизация скорости загрузки до 95–100 баллов PageSpeed',
        'Мультирегиональная локализация (hreflang RU / EN / ES)',
        'Сквозная веб-аналитика и повышение конверсии (CRO)'
      ],
      en: [
        'Technical SEO architecture & Schema.org structured data',
        'PageSpeed & Core Web Vitals optimization (95–100 score)',
        'Multi-regional localization (RU / EN / ES hreflang)',
        'End-to-end conversion rate optimization (CRO)'
      ],
      es: [
        'Arquitectura SEO técnica y datos estructurados Schema.org',
        'Optimización de velocidad PageSpeed (95–100 puntos)',
        'Localización multirregional (RU / EN / ES)',
        'Analítica avanzada y optimización de conversión (CRO)'
      ]
    }
  }
];

export const PORTFOLIO_CASES = [
  {
    id: 'azure-luxury-estates',
    category: 'Web',
    industry: { ru: 'Недвижимость / Luxury Real Estate', en: 'Luxury Real Estate', es: 'Bienes Raíces de Lujo' },
    title: {
      ru: 'Azure Villa & Estates — Платформа элитной недвижимости + PWA',
      en: 'Azure Villa & Estates — Luxury Real Estate Platform & PWA',
      es: 'Azure Villa & Estates — Plataforma Inmobiliaria de Lujo + PWA'
    },
    metric: '+240% заявок',
    metricLabel: {
      ru: 'Рост конверсии из мобильного трафика за 3 месяца',
      en: 'Mobile conversion growth within 90 days',
      es: 'Crecimiento de conversión móvil en 3 meses'
    },
    stack: ['React', 'Next.js', 'PWA', 'Tailwind CSS', 'Three.js', 'Telegram API'],
    challenge: {
      ru: 'Международному агентству элитной недвижимости требовался имиджевый мультиязычный портал (RU/EN/ES) с мгновенной загрузкой HD-рендеров вилл, интерактивным подбором объектов и возможностью работы как мобильное приложение у брокеров.',
      en: 'An international luxury real estate brokerage needed a multilingual portal (RU/EN/ES) with instant HD villa showcases, interactive property filtering, and offline PWA access for field agents.',
      es: 'Una agencia inmobiliaria internacional necesitaba un portal multilingüe (RU/EN/ES) con galerías HD instantáneas, filtros interactivos y modo PWA para agentes.'
    },
    solution: {
      ru: 'Разработали кастомную платформу с неоновыми акцентами, умным фильтром по 18 параметрам, 3D-турами, PWA-модулем и прямой отправкой лидов в WhatsApp и Telegram конкретному брокеру.',
      en: 'Engineered a bespoke platform with smart 18-parameter filtering, virtual tours, installable PWA architecture, and instant WhatsApp/Telegram lead routing.',
      es: 'Desarrollamos una plataforma a medida con filtros inteligentes, tours virtuales, módulo PWA instalable y envío directo de prospectos a WhatsApp y Telegram.'
    },
    result: {
      ru: 'Скорость загрузки страниц составила 0.7 сек. Конверсия в заявку выросла на 240%, а 38% постоянных инвесторов установили PWA-приложение на смартфон.',
      en: 'Page load time dropped to 0.7s. Lead conversion surged by 240%, and 38% of repeat investors installed the PWA directly on their smartphones.',
      es: 'El tiempo de carga bajó a 0.7s. La conversión aumentó un 240% y el 38% de los inversores instalaron la PWA en sus teléfonos.'
    },
    gradient: 'linear-gradient(135deg, #00f0ff22 0%, #7928ca44 100%)'
  },
  {
    id: 'neopay-fintech',
    category: 'FinTech',
    industry: { ru: 'Финтех и Платежные системы', en: 'FinTech & Payments', es: 'FinTech y Pagos Digitales' },
    title: {
      ru: 'NeoPay Global — Мультивалютный B2B Финтех-сервис',
      en: 'NeoPay Global — Multi-Currency B2B FinTech Ecosystem',
      es: 'NeoPay Global — Ecosistema FinTech B2B Multimoneda'
    },
    metric: '$18M+ оборот',
    metricLabel: {
      ru: 'Объём транзакций через новый веб-кабинет за первые полгода',
      en: 'Transaction volume processed in the first 6 months',
      es: 'Volumen procesado en los primeros 6 meses'
    },
    stack: ['React 19', 'TypeScript', 'WebSockets', 'Chart.js', 'Node.js'],
    challenge: {
      ru: 'Создать высоконадежный B2B-дашборд и презентационный сайт для международного платежного сервиса на рынках Латинской Америки и Европы.',
      en: 'Build a high-trust corporate portal and real-time B2B dashboard for a cross-border payment provider operating across LATAM and Europe.',
      es: 'Construir un portal corporativo y panel B2B en tiempo real para una plataforma de pagos internacionales en Latinoamérica y Europa.'
    },
    solution: {
      ru: 'Спроектировали строгий кибер-интерфейс с темами Dark/Light, калькулятором курсов в реальном времени по WebSockets и бесшовной онбординг-формой.',
      en: 'Designed a dual-theme cyber interface with real-time WebSocket FX calculators, compliance workflows, and frictionless B2B onboarding.',
      es: 'Diseñamos una interfaz con modo oscuro/claro, calculadora de divisas en tiempo real por WebSockets y registro B2B automatizado.'
    },
    result: {
      ru: 'Время регистрации корпоративного клиента сократилось с 3 дней до 15 минут, показатель отказов снизился на 62%.',
      en: 'Corporate onboarding time dropped from 3 days to 15 minutes, while bounce rates decreased by 62%.',
      es: 'El tiempo de registro corporativo se redujo de 3 días a 15 minutos y la tasa de rebote bajó un 62%.'
    },
    gradient: 'linear-gradient(135deg, #b829ff33 0%, #00d2ff33 100%)'
  },
  {
    id: 'cybermart-ecommerce',
    category: 'E-Commerce',
    industry: { ru: 'Ритейл и Электроника', en: 'Retail & Electronics', es: 'Retail y Electrónica' },
    title: {
      ru: 'CyberPulse Store — Омниканальный маркетплейс электроники',
      en: 'CyberPulse Store — Omnichannel Electronics Marketplace',
      es: 'CyberPulse Store — Marketplace Omnicanal de Electrónica'
    },
    metric: '+185% чек',
    metricLabel: {
      ru: 'Увеличение выручки за счёт AI-рекомендаций и PWA',
      en: 'Revenue growth driven by AI recommendations & PWA',
      es: 'Aumento de ingresos con recomendaciones IA y PWA'
    },
    stack: ['Next.js', 'PWA', 'Tailwind CSS', 'ElasticSearch', 'Stripe'],
    challenge: {
      ru: 'Существующий интернет-магазин клиента медленно работал на смартфонах и терял до 70% покупателей на этапе оформления корзины.',
      en: 'The client’s legacy store suffered from slow mobile performance and 70% cart abandonment during checkout.',
      es: 'La tienda anterior era lenta en móviles y perdía hasta el 70% de los usuarios en el carrito de compras.'
    },
    solution: {
      ru: 'Перевели фронтенд на архитектуру React + PWA с мгновенным поиском за 0.05 сек, оформлением заказа в 1 шаг и интеграцией с WhatsApp для подтверждения доставки.',
      en: 'Migrated to a React + PWA storefront with 50ms instant search, one-step checkout, and automated WhatsApp order confirmations.',
      es: 'Migramos a una arquitectura React + PWA con búsqueda en 50ms, pago en 1 paso y confirmación automática por WhatsApp.'
    },
    result: {
      ru: 'Рост мобильных продаж в 2.8 раза, оценка Google PageSpeed выросла с 34 до 98 баллов.',
      en: 'Mobile sales grew 2.8x and Google PageSpeed score jumped from 34 to 98.',
      es: 'Las ventas móviles crecieron 2.8 veces y la puntuación en Google PageSpeed subió de 34 a 98.'
    },
    gradient: 'linear-gradient(135deg, #00f0ff33 0%, #10b98133 100%)'
  },
  {
    id: 'transglobal-logistics',
    category: 'B2B / CRM',
    industry: { ru: 'Логистика и Дистрибуция', en: 'Logistics & Supply Chain', es: 'Logística y Cadena de Suministro' },
    title: {
      ru: 'TransGlobal Cargo — ERP-портал и трекинг грузов 24/7',
      en: 'TransGlobal Cargo — B2B ERP Portal & Live Cargo Tracking',
      es: 'TransGlobal Cargo — Portal B2B y Rastreo de Carga 24/7'
    },
    metric: '-75% нагрузки',
    metricLabel: {
      ru: 'Снижение рутинных звонков в отдел логистики',
      en: 'Reduction in manual support calls to dispatchers',
      es: 'Reducción de llamadas manuales al equipo de soporte'
    },
    stack: ['React', 'REST API', 'PWA', 'Telegram Bot API', 'Mapbox'],
    challenge: {
      ru: 'Объединить разрозненные таблицы маршрутов в единый клиентский веб-портал с интерактивной картой и автоматическими уведомлениями на 3 языках.',
      en: 'Unify fragmented shipment spreadsheets into a single multilingual client portal with live map tracking and automated alerts.',
      es: 'Unificar hojas de cálculo dispersas en un portal multilingüe con mapa en vivo y alertas automáticas.'
    },
    solution: {
      ru: 'Создали личный кабинет клиента + калькулятор фрахта и синхронизацию статусов с Telegram и WhatsApp.',
      en: 'Built a self-service client portal, instant freight calculator, and live status notifications via Telegram and WhatsApp.',
      es: 'Creamos un portal de autogestión, calculadora de fletes instantánea y notificaciones en vivo por Telegram y WhatsApp.'
    },
    result: {
      ru: 'Автоматизировано 85% клиентских запросов, количество новых B2B-контрактов с сайта выросло на 160%.',
      en: 'Automated 85% of status inquiries and increased inbound B2B contract requests by 160%.',
      es: 'Se automatizó el 85% de las consultas y las solicitudes de contratos B2B aumentaron un 160%.'
    },
    gradient: 'linear-gradient(135deg, #6366f133 0%, #ec489933 100%)'
  }
];

export const EXPERTISE_INDUSTRIES = [
  {
    code: '01',
    title: { ru: 'E-Commerce & Retail', en: 'E-Commerce & Retail', es: 'E-Commerce y Retail' },
    desc: {
      ru: 'Маркетплейсы, D2C бренды, каталоги с высокой конверсией и интеграцией с учетными системами.',
      en: 'High-converting marketplaces, D2C brands, and ERP-connected storefronts.',
      es: 'Marketplaces, tiendas D2C y catálogos conectados con sistemas de inventario.'
    }
  },
  {
    code: '02',
    title: { ru: 'FinTech & Banking', en: 'FinTech & Banking', es: 'FinTech y Banca' },
    desc: {
      ru: 'Платежные сервисы, крипто-платформы, инвестиционные кабинеты и безопасные B2B-порталы.',
      en: 'Payment gateways, Web3 platforms, investor dashboards, and secure B2B portals.',
      es: 'Pasarelas de pago, plataformas Web3, paneles de inversión y portales seguros.'
    }
  },
  {
    code: '03',
    title: { ru: 'Недвижимость и Строительство', en: 'Real Estate & PropTech', es: 'Inmobiliaria y Construcción' },
    desc: {
      ru: 'Сайты застройщиков и агентств с интерактивными шахматками, 3D-турами и лидогенерацией.',
      en: 'Developer and brokerage portals with interactive floorplans, 3D tours, and CRM routing.',
      es: 'Portales para constructoras y agencias con planos interactivos y captación de leads.'
    }
  },
  {
    code: '04',
    title: { ru: 'Логистика и Автобизнес', en: 'Logistics & Automotive', es: 'Logística y Automotriz' },
    desc: {
      ru: 'Калькуляторы доставки, системы отслеживания грузов и дилерские кабинеты.',
      en: 'Freight calculators, real-time fleet tracking portals, and dealer management systems.',
      es: 'Calculadoras de envíos, rastreo de flotas en tiempo real y portales de distribuidores.'
    }
  },
  {
    code: '05',
    title: { ru: 'Медицина и EdTech', en: 'Healthcare & EdTech', es: 'Salud y Educación Online' },
    desc: {
      ru: 'Платформы онлайн-обучения, сервисы записи пациентов и PWA-приложения клиник.',
      en: 'LMS platforms, telemedicine booking portals, and clinic PWA applications.',
      es: 'Plataformas educativas LMS, reserva de citas médicas y aplicaciones PWA.'
    }
  },
  {
    code: '06',
    title: { ru: 'HoReCa и Сервисы', en: 'HoReCa & On-Demand Services', es: 'HoReCa y Servicios' },
    desc: {
      ru: 'Сайты доставки, системы бронирования, программы лояльности и QR-меню в формате PWA.',
      en: 'Delivery ecosystems, booking engines, loyalty apps, and instant PWA QR-menus.',
      es: 'Sistemas de delivery, reservas online, programas de fidelidad y menús PWA.'
    }
  }
];

export const ABOUT_FEATURES = [
  {
    step: '01',
    title: { ru: 'Бизнес-аналитика и Стратегия', en: 'Discovery & Architecture', es: 'Análisis y Estrategia' },
    desc: {
      ru: 'Изучаем ваш рынок, конкурентов и воронку продаж. Формируем четкое ТЗ и фиксируем результат в договоре.',
      en: 'We analyze your market, competitors, and sales funnel to lock in a crystal-clear specification and contract.',
      es: 'Estudiamos tu mercado y embudo de ventas para definir una arquitectura clara garantizada por contrato.'
    }
  },
  {
    step: '02',
    title: { ru: 'UI/UX Прототип и Дизайн', en: 'UI/UX Prototyping & Design', es: 'Prototipado y Diseño UI/UX' },
    desc: {
      ru: 'Создаем уникальный визуальный стиль (неон, минимализм или корпоративная классика) с продуманным путем пользователя.',
      en: 'We craft a distinctive visual system (cyber-neon or clean corporate) engineered for maximum user conversion.',
      es: 'Diseñamos una interfaz única y memorable pensada para guiar al usuario hacia la compra o contacto.'
    }
  },
  {
    step: '03',
    title: { ru: 'Чистый код и PWA-модуль', en: 'Clean Engineering & PWA', es: 'Desarrollo Limpio y PWA' },
    desc: {
      ru: 'Разрабатываем быстрый фронтенд на React, настраиваем Service Worker для установки на смартфоны и подключаем интеграции.',
      en: 'We build ultra-fast React interfaces, configure offline-ready PWA Service Workers, and connect your APIs.',
      es: 'Desarrollamos en React con máxima velocidad, configuramos el módulo PWA instalable e integramos WhatsApp/Telegram.'
    }
  },
  {
    step: '04',
    title: { ru: 'Запуск, SEO и Поддержка 24/7', en: 'Launch, SEO & 24/7 Support', es: 'Lanzamiento, SEO y Soporte 24/7' },
    desc: {
      ru: 'Тестируем на всех устройствах, выводим на боевой домен, обучаем команду и обеспечиваем техническое развитие.',
      en: 'Full QA across devices, production deployment, team onboarding, and continuous growth support.',
      es: 'Pruebas exhaustivas en todos los dispositivos, despliegue en producción y acompañamiento técnico continuo.'
    }
  }
];

export const TESTIMONIALS = [
  {
    author: 'Alejandro Vargas',
    role: { ru: 'CEO, Vargas Real Estate Group', en: 'CEO, Vargas Real Estate Group', es: 'CEO, Vargas Real Estate Group' },
    text: {
      ru: '«Команда VitaNeX разработала для нас сайт и PWA на трех языках (ES/EN/RU) в рекордные сроки. Клиенты в восторге от дизайна и скорости работы на телефонах!»',
      en: '“VitaNeX delivered our trilingual (ES/EN/RU) real estate platform and PWA ahead of schedule. Clients love the neon-clean aesthetic and instant mobile speed!”',
      es: '«El equipo de VitaNeX desarrolló nuestra plataforma trilingüe (ES/EN/RU) y PWA en tiempo récord. ¡Nuestros clientes aman la velocidad y el diseño!»'
    }
  },
  {
    author: 'Дмитрий Соколов',
    role: { ru: 'Основатель логистической компании CargoLine', en: 'Founder, CargoLine Logistics', es: 'Fundador, CargoLine Logistics' },
    text: {
      ru: '«Всё чётко по договору. Сделали мощный корпоративный портал с интеграцией заявок прямо в Telegram и WhatsApp. Конверсия выросла уже в первый месяц.»',
      en: '“Everything was delivered strictly by contract. They built a powerful corporate portal with instant Telegram & WhatsApp lead routing. Conversions jumped in month one.”',
      es: '«Todo cumplido estrictamente por contrato. Crearon un portal corporativo potente conectado directo a Telegram y WhatsApp.»'
    }
  },
  {
    author: 'Elena Rostova',
    role: { ru: 'CMO, FinTech проект NeoPay', en: 'CMO, NeoPay FinTech', es: 'CMO, NeoPay FinTech' },
    text: {
      ru: '«Редкое сочетание крутого кибер-дизайна и глубокого понимания B2B-продаж. Сайт легко переключается между тёмной и светлой темой и работает как часы.»',
      en: '“A rare blend of striking cyber design and deep B2B sales logic. The dual dark/light theme and PWA experience exceeded all expectations.”',
      es: '«Una combinación única de diseño impactante y enfoque en ventas B2B. El sitio funciona perfecto tanto en modo oscuro como claro.»'
    }
  }
];

export const BLOG_POSTS = [
  {
    id: 'why-pwa-2026',
    date: '2026',
    readTime: '4 min',
    tag: 'PWA & Mobile',
    title: {
      ru: 'Почему PWA-сайт заменяет дорогое нативное приложение для 90% бизнеса',
      en: 'Why a Progressive Web App (PWA) Replaces Expensive Native Apps for 90% of Businesses',
      es: 'Por qué un sitio PWA reemplaza una app nativa costosa para el 90% de las empresas'
    },
    excerpt: {
      ru: 'Разбираем, как технология Service Workers и Web Manifest позволяет устанавливать ваш сайт на iOS и Android в 1 клик без комиссий App Store и Google Play.',
      en: 'How Service Workers and Web Manifest let customers install your website on iOS & Android in one tap without App Store fees.',
      es: 'Cómo la tecnología PWA permite instalar tu sitio web en iOS y Android en un clic sin comisiones de tiendas.'
    },
    content: {
      ru: 'Progressive Web App (PWA) объединяет охват обычного веб-сайта и удобство мобильного приложения. Пользователь заходит на ваш сайт по рекламе или из Google, нажимает «Установить на экран» и получает иконку вашей компании на рабочем столе смартфона. При этом вы экономите до 70% бюджета на разработку отдельных приложений под iOS и Android, а обновления доставляются мгновенно.',
      en: 'A Progressive Web App (PWA) merges the reach of the web with the retention of a native mobile app. Visitors land on your site from search or ads, tap "Install", and get your branded icon right on their home screen — saving up to 70% compared to maintaining separate iOS and Android codebases.',
      es: 'Una Aplicación Web Progresiva (PWA) combina el alcance de la web con la comodidad de una app móvil. Tus clientes instalan tu sitio directamente en su pantalla de inicio, ahorrando hasta un 70% en costos de desarrollo.'
    }
  },
  {
    id: 'multilingual-scaling',
    date: '2026',
    readTime: '5 min',
    tag: 'Global Growth',
    title: {
      ru: 'Выход на рынки Латинской Америки, Европы и СНГ: секреты мультиязычных сайтов (RU / EN / ES)',
      en: 'Scaling Across LATAM, Europe & CIS: Architecture of High-Converting Multilingual Sites (RU / EN / ES)',
      es: 'Escalando en Latinoamérica y Europa: Claves de un sitio web multilingüe (RU / EN / ES)'
    },
    excerpt: {
      ru: 'Как правильно спроектировать локализацию, быструю связь через WhatsApp и локальное SEO для кратного роста экспортных продаж.',
      en: 'Best practices for localization, instant WhatsApp communication, and multi-regional SEO.',
      es: 'Mejores prácticas de localización, contacto directo por WhatsApp y SEO internacional.'
    },
    content: {
      ru: 'Локализация сайта на три ключевых языка — Русский, Английский и Испанский — открывает доступ к аудитории более 2 миллиардов платежеспособных клиентов. Важно не просто перевести интерфейс, но и адаптировать каналы связи: прямые линии WhatsApp, Telegram-интеграцию и мгновенную смену языка с сохранением выбора пользователя.',
      en: 'Supporting Russian, English, and Spanish opens your business to over 2 billion digital consumers. Beyond translation, conversion depends on localized communication channels like instant WhatsApp lines, Telegram automation, and persistent language preferences.',
      es: 'Contar con versiones en Español, Inglés y Ruso abre tu negocio a mercados globales. Además de la traducción, es clave integrar líneas directas de WhatsApp y Telegram para cerrar ventas rápido.'
    }
  },
  {
    id: 'wezom-cyber-ux',
    date: '2026',
    readTime: '3 min',
    tag: 'UI/UX & Design',
    title: {
      ru: 'Чистая корпоративная структура + Киберпанк-неон: как выделиться среди серых конкурентов',
      en: 'Clean Corporate Structure Meets Cyberpunk Neon: Standing Out in a Crowded Market',
      es: 'Estructura Corporativa Limpia + Neón Cyberpunk: Cómo destacar frente a tu competencia'
    },
    excerpt: {
      ru: 'Сочетание выверенной сетки с воздухом, контрастных тем (Dark/Light) и неоновых акцентов увеличивает удержание внимания на 65%.',
      en: 'Combining structured whitespace, Dark/Light contrast themes, and neon accents increases user engagement by 65%.',
      es: 'Combinar una estructura limpia con acentos neón y temas claro/oscuro aumenta la retención de usuarios un 65%.'
    },
    content: {
      ru: 'Современный B2B и B2C покупатель принимает решение о доверии к компании за первые 3 секунды на сайте. Крупная типографика, интерактивная цифровая матрица в фирменных бирюзово-фиолетовых цветах и удобный доступ к кейсам и кнопке «Обсудить проект» формируют образ технологического лидера.',
      en: 'Modern B2B and B2C buyers judge brand authority within the first 3 seconds. Bold typography, custom turquoise-and-purple digital rain effects, and frictionless access to case studies and the "Discuss Project" CTA position your company as an industry leader.',
      es: 'Los clientes actuales evalúan la autoridad de tu marca en los primeros 3 segundos. Una tipografía potente, efectos interactivos en colores turquesa y púrpura neón y acceso rápido a tus casos de éxito posicionan a tu empresa como líder.'
    }
  }
];
