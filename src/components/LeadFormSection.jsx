import { useState } from 'react';
import { SERVICES_DATA, WHATSAPP_NUMBERS } from '../services/i18nData';

export function LeadForm({ t, lang, preselectedService = '', onSuccess }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState(
    preselectedService || SERVICES_DATA[0].title[lang]
  );
  const [task, setTask] = useState('');
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Optional Telegram Bot API settings (stored in localStorage so owner can configure from UI or env)
  const [showTgConfig, setShowTgConfig] = useState(false);
  const [tgToken, setTgToken] = useState(
    () => localStorage.getItem('vitanex_tg_token') || import.meta.env.VITE_TG_BOT_TOKEN || ''
  );
  const [tgChatId, setTgChatId] = useState(
    () => localStorage.getItem('vitanex_tg_chat_id') || import.meta.env.VITE_TG_CHAT_ID || ''
  );

  const validate = () => {
    const newErrors = {};
    if (!name || name.trim().length < 2) {
      newErrors.name = t.form.errors.name;
    }
    const cleanContact = contact.trim();
    const isPhoneOrEmail =
      cleanContact.length >= 6 &&
      (/^[+\d\s()-]{6,}$/.test(cleanContact) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact) ||
        cleanContact.startsWith('@'));
    if (!isPhoneOrEmail) {
      newErrors.contact = t.form.errors.contact;
    }
    if (!task || task.trim().length < 10) {
      newErrors.task = t.form.errors.task;
    }
    if (!consent) {
      newErrors.consent = t.form.errors.consent;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const payload = {
      id: Date.now(),
      date: new Date().toISOString(),
      lang: lang.toUpperCase(),
      name: name.trim(),
      contact: contact.trim(),
      service,
      task: task.trim()
    };

    // Save lead to localStorage log
    try {
      const existing = JSON.parse(localStorage.getItem('vitanex_leads') || '[]');
      existing.unshift(payload);
      localStorage.setItem('vitanex_leads', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // ignore storage errors
    }

    // Send to Telegram Bot API if token & chat_id are provided
    if (tgToken && tgChatId) {
      localStorage.setItem('vitanex_tg_token', tgToken);
      localStorage.setItem('vitanex_tg_chat_id', tgChatId);
      const text = [
        `🚀 *Новая заявка VitaNeX Digital Studio*`,
        `👤 *Имя:* ${payload.name}`,
        `📞 *Контакт:* ${payload.contact}`,
        `💼 *Услуга:* ${payload.service}`,
        `📝 *Задача:* ${payload.task}`,
        `🌐 *Язык:* ${payload.lang}`
      ].join('\n');

      try {
        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: tgChatId,
            text,
            parse_mode: 'Markdown'
          })
        });
      } catch {
        // Fallback gracefully if network or token fails
      }
    } else {
      await new Promise((r) => setTimeout(r, 550));
    }

    setSubmitting(false);
    setName('');
    setContact('');
    setTask('');
    setErrors({});
    if (onSuccess) onSuccess(payload);
  };

  const buildWhatsappUrl = (phoneRaw) => {
    const msg = encodeURIComponent(
      `Здравствуйте, VitaNeX Digital Studio!\nИмя: ${name || '-'}\nКонтакт: ${contact || '-'}\nУслуга: ${service}\nЗадача: ${task || 'Хочу обсудить разработку проекта'}`
    );
    return `https://wa.me/${phoneRaw}?text=${msg}`;
  };

  return (
    <form className="vitanex-lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label">{t.form.nameLabel}</label>
          <input
            type="text"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            placeholder={t.form.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">{t.form.contactLabel}</label>
          <input
            type="text"
            className={`form-input ${errors.contact ? 'input-error' : ''}`}
            placeholder={t.form.contactPlaceholder}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {errors.contact && (
            <span className="error-text">{errors.contact}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">{t.form.serviceLabel}</label>
        <select
          className="form-input form-select"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {SERVICES_DATA.map((srv) => (
            <option key={srv.id} value={srv.title[lang]}>
              {srv.number} — {srv.title[lang]}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">{t.form.taskLabel}</label>
        <textarea
          rows={4}
          className={`form-input form-textarea ${errors.task ? 'input-error' : ''}`}
          placeholder={t.form.taskPlaceholder}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {errors.task && <span className="error-text">{errors.task}</span>}
      </div>

      <div className="form-checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>{t.form.consentLabel}</span>
        </label>
        {errors.consent && (
          <span className="error-text">{errors.consent}</span>
        )}
      </div>

      {/* Telegram Bot API Optional Config Accordion */}
      <div className="tg-config-box">
        <button
          type="button"
          className="tg-config-toggle"
          onClick={() => setShowTgConfig(!showTgConfig)}
        >
          ⚙ {t.form.tgSettingsToggle} {showTgConfig ? '▲' : '▼'}
        </button>
        {showTgConfig && (
          <div className="tg-config-Body">
            <p className="tg-hint">{t.form.tgHint}</p>
            <div className="form-row-2">
              <input
                type="password"
                className="form-input compact"
                placeholder={t.form.tgBotTokenPlaceholder}
                value={tgToken}
                onChange={(e) => setTgToken(e.target.value)}
              />
              <input
                type="text"
                className="form-input compact"
                placeholder={t.form.tgChatIdPlaceholder}
                value={tgChatId}
                onChange={(e) => setTgChatId(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="form-submit-actions">
        <button
          type="submit"
          className="btn-neon-submit"
          disabled={submitting}
        >
          {submitting ? t.form.submittingBtn : `↗ ${t.form.submitBtn}`}
        </button>

        <div className="direct-wa-buttons">
          {WHATSAPP_NUMBERS.map((phone) => (
            <a
              key={phone.raw}
              href={buildWhatsappUrl(phone.raw)}
              target="_blank"
              rel="noreferrer"
              className="btn-wa-direct"
            >
              WhatsApp {phone.display}
            </a>
          ))}
        </div>
      </div>
    </form>
  );
}

export function SuccessPopup({ payload, t, onClose }) {
  if (!payload) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="success-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="success-icon-ring">✓</div>
        <h3 className="success-title">{t.form.successTitle}</h3>
        <p className="success-desc">{t.form.successMessage}</p>
        <div className="success-summary">
          <div>
            <strong>{payload.name}</strong> • {payload.contact}
          </div>
          <div className="summary-service">{payload.service}</div>
        </div>
        <div className="popup-wa-row">
          {WHATSAPP_NUMBERS.map((p) => (
            <a
              key={p.raw}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="btn-wa-direct"
            >
              WhatsApp: {p.display}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="btn-neon-submit full-width"
          onClick={onClose}
        >
          {t.form.closeBtn}
        </button>
      </div>
    </div>
  );
}
