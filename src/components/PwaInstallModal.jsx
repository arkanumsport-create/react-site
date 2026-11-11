import { useState } from 'react';
import { VitaNexLogo } from './BrandIcons';

const PWA_GUIDE_TEXT = {
  ru: {
    badge: 'УСТАНОВКА МОБИЛЬНОГО ПРИЛОЖЕНИЯ (PWA)',
    title: 'Установите VitaNeX на главный экран телефона',
    subtitle:
      'Приложение работает быстро, открывается во весь экран без адресной строки и доступно даже без интернета.',
    instantInstallBtn: '📲 Установить приложение в 1 клик',
    tabIos: '🍏 iPhone / iPad (iOS)',
    tabAndroid: '🤖 Android',
    iosSteps: [
      {
        num: '01',
        title: 'Нажмите кнопку «Поделиться» ⬆',
        desc: 'На нижней панели Safari (или в правом верхнем углу Chrome на iPhone) нажмите иконку квадрата со стрелкой вверх.'
      },
      {
        num: '02',
        title: 'Выберите «На экран „Домой“» ➕',
        desc: 'Прокрутите список действий немного вниз и нажмите на пункт «На экран „Домой“» (Add to Home Screen).'
      },
      {
        num: '03',
        title: 'Нажмите «Добавить»',
        desc: 'В правом верхнем углу нажмите «Добавить» — фирменная иконка VitaNeX появится на вашем экране!'
      }
    ],
    androidSteps: [
      {
        num: '01',
        title: 'Откройте меню браузера «⋮»',
        desc: 'В браузере Chrome (или другом браузере на Android) нажмите на три точки в правом верхнем углу экрана.'
      },
      {
        num: '02',
        title: 'Нажмите «Установить приложение» 📲',
        desc: 'В появившемся меню выберите пункт «Установить приложение» или «Добавить на главный экран».'
      },
      {
        num: '03',
        title: 'Подтвердите установку',
        desc: 'Нажмите «Установить» во всплывающем окне — приложение VitaNeX появится среди ваших программ!'
      }
    ],
    closeBtn: 'Понятно, спасибо'
  },
  en: {
    badge: 'INSTALL MOBILE APP (PWA)',
    title: 'Install VitaNeX on Your Home Screen',
    subtitle:
      'Launches full-screen like a native app, loads instantly, and works offline.',
    instantInstallBtn: '📲 Install App in 1 Tap',
    tabIos: '🍏 iPhone / iPad (iOS)',
    tabAndroid: '🤖 Android',
    iosSteps: [
      {
        num: '01',
        title: 'Tap the "Share" button ⬆',
        desc: 'At the bottom of Safari (or top-right in Chrome on iPhone), tap the Share icon (square with an upward arrow).'
      },
      {
        num: '02',
        title: 'Select "Add to Home Screen" ➕',
        desc: 'Scroll down the share sheet and tap "Add to Home Screen".'
      },
      {
        num: '03',
        title: 'Tap "Add"',
        desc: 'Tap "Add" in the top-right corner — the VitaNeX app icon will appear right on your home screen!'
      }
    ],
    androidSteps: [
      {
        num: '01',
        title: 'Open the browser menu "⋮"',
        desc: 'In Chrome on Android, tap the three dots icon in the top-right corner.'
      },
      {
        num: '02',
        title: 'Tap "Install app" 📲',
        desc: 'Select "Install app" or "Add to Home screen" from the menu.'
      },
      {
        num: '03',
        title: 'Confirm installation',
        desc: 'Tap "Install" in the prompt — VitaNeX will be installed on your phone!'
      }
    ],
    closeBtn: 'Got it'
  },
  es: {
    badge: 'INSTALAR APLICACIÓN MÓVIL (PWA)',
    title: 'Instala VitaNeX en tu Pantalla de Inicio',
    subtitle:
      'Se abre a pantalla completa como una app nativa, carga al instante y funciona sin conexión.',
    instantInstallBtn: '📲 Instalar Aplicación en 1 Clic',
    tabIos: '🍏 iPhone / iPad (iOS)',
    tabAndroid: '🤖 Android',
    iosSteps: [
      {
        num: '01',
        title: 'Toca el botón «Compartir» ⬆',
        desc: 'En la barra inferior de Safari (o arriba a la derecha en Chrome para iPhone), toca el icono de compartir.'
      },
      {
        num: '02',
        title: 'Selecciona «Agregar a inicio» ➕',
        desc: 'Desliza hacia abajo en el menú y selecciona «Agregar a la pantalla de inicio».'
      },
      {
        num: '03',
        title: 'Pulsa «Agregar»',
        desc: 'Toca «Agregar» en la esquina superior derecha — ¡el icono de VitaNeX aparecerá en tu pantalla!'
      }
    ],
    androidSteps: [
      {
        num: '01',
        title: 'Abre el menú del navegador «⋮»',
        desc: 'En Chrome para Android, toca los tres puntos en la esquina superior derecha.'
      },
      {
        num: '02',
        title: 'Selecciona «Instalar aplicación» 📲',
        desc: 'Elige «Instalar aplicación» o «Agregar a la pantalla principal».'
      },
      {
        num: '03',
        title: 'Confirma la instalación',
        desc: 'Pulsa «Instalar» en la ventana emergente y la app VitaNeX quedará instalada.'
      }
    ],
    closeBtn: 'Entendido'
  }
};

export function PwaInstallModal({
  isOpen,
  onClose,
  lang,
  canDirectInstall,
  onDirectInstall
}) {
  const isIosDevice =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [activeTab, setActiveTab] = useState(isIosDevice ? 'ios' : 'android');

  if (!isOpen) return null;

  const g = PWA_GUIDE_TEXT[lang] || PWA_GUIDE_TEXT.ru;
  const steps = activeTab === 'ios' ? g.iosSteps : g.androidSteps;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="lead-modal-card pwa-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lead-modal-header">
          <div className="pwa-modal-brand">
            <VitaNexLogo size={56} />
            <div>
              <span className="section-tag">{g.badge}</span>
              <h3 className="pwa-modal-title">{g.title}</h3>
            </div>
          </div>
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <p className="pwa-modal-sub">{g.subtitle}</p>

        {canDirectInstall && (
          <div className="pwa-direct-box">
            <button
              type="button"
              className="btn-neon-submit full-width"
              onClick={onDirectInstall}
            >
              {g.instantInstallBtn}
            </button>
          </div>
        )}

        {/* Platform Switcher Tabs: iPhone (iOS) vs Android */}
        <div className="pwa-platform-tabs">
          <button
            type="button"
            className={`pwa-tab-btn ${activeTab === 'ios' ? 'active' : ''}`}
            onClick={() => setActiveTab('ios')}
          >
            {g.tabIos}
          </button>
          <button
            type="button"
            className={`pwa-tab-btn ${activeTab === 'android' ? 'active' : ''}`}
            onClick={() => setActiveTab('android')}
          >
            {g.tabAndroid}
          </button>
        </div>

        {/* 3 Step-by-Step Cards */}
        <div className="pwa-steps-list">
          {steps.map((step) => (
            <div key={step.num} className="pwa-step-item">
              <div className="step-badge">{step.num}</div>
              <div>
                <div className="pwa-step-title">{step.title}</div>
                <div className="pwa-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn-contact-pill full-width"
          onClick={onClose}
        >
          {g.closeBtn}
        </button>
      </div>
    </div>
  );
}
