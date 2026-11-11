import { useState } from 'react';
import { SERVICES_DATA, WHATSAPP_NUMBERS } from '../services/i18nData';
import { WhatsAppIcon } from './BrandIcons';

export function LeadForm({ t, lang, preselectedService = '', onSuccess }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState(
    preselectedService || SERVICES_DATA[0].title[lang]
  );
  const [selectedWa, setSelectedWa] = useState(WHATSAPP_NUMBERS[0].raw);
  const [task, setTask] = useState('');
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name || name.trim().length < 2) {
      newErrors.name = t.form.errors.name;
    }
    const cleanContact = contact.trim();
    const isPhoneOrEmail =
      cleanContact.length >= 5 &&
      (/^[+\d\s()-]{5,}$/.test(cleanContact) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact) ||
        cleanContact.startsWith('@'));
    if (!isPhoneOrEmail) {
      newErrors.contact = t.form.errors.contact;
    }
    if (!task || task.trim().length < 5) {
      newErrors.task = t.form.errors.task;
    }
    if (!consent) {
      newErrors.consent = t.form.errors.consent;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsappUrl = (phoneRaw, payloadObj) => {
    const lines =
      lang === 'es'
        ? [
            `¡Hola, VitaNeX Digital Studio! 👋`,
            `👤 Nombre: ${payloadObj.name}`,
            `📞 Contacto: ${payloadObj.contact}`,
            `💼 Servicio: ${payloadObj.service}`,
            `📝 Proyecto: ${payloadObj.task}`
          ]
        : lang === 'en'
          ? [
              `Hello, VitaNeX Digital Studio! 👋`,
              `👤 Name: ${payloadObj.name}`,
              `📞 Contact: ${payloadObj.contact}`,
              `💼 Service: ${payloadObj.service}`,
              `📝 Project: ${payloadObj.task}`
            ]
          : [
              `Здравствуйте, VitaNeX Digital Studio! 👋`,
              `👤 Имя: ${payloadObj.name}`,
              `📞 Контакт: ${payloadObj.contact}`,
              `💼 Направление: ${payloadObj.service}`,
              `📝 Задача: ${payloadObj.task}`
            ];

    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e) => {
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
      task: task.trim(),
      targetPhone: selectedWa
    };

    const waUrl = buildWhatsappUrl(selectedWa, payload);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitting(false);
    setName('');
    setContact('');
    setTask('');
    setErrors({});
    if (onSuccess) onSuccess({ ...payload, waUrl });
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

      {/* Choose which WhatsApp number receives the message */}
      <div className="form-group">
        <label className="form-label">{t.form.whatsappTargetLabel}</label>
        <div className="wa-target-selector">
          {WHATSAPP_NUMBERS.map((phone) => (
            <button
              key={phone.raw}
              type="button"
              className={`wa-target-option ${selectedWa === phone.raw ? 'active' : ''}`}
              onClick={() => setSelectedWa(phone.raw)}
            >
              <WhatsAppIcon size={20} />
              <div className="wa-target-text">
                <span className="wa-target-num">{phone.display}</span>
                <span className="wa-target-reg">{phone.region[lang]}</span>
              </div>
            </button>
          ))}
        </div>
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

      <p className="wa-direct-hint">{t.form.directHint}</p>

      <div className="form-submit-actions">
        <button
          type="submit"
          className="btn-neon-submit wa-submit-btn"
          disabled={submitting}
        >
          <WhatsAppIcon size={22} />
          <span>{submitting ? t.form.submittingBtn : t.form.submitBtn}</span>
        </button>
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
              <WhatsAppIcon size={18} />
              <span>WhatsApp: {p.display}</span>
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
