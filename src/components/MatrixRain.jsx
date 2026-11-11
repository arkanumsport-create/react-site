import { useEffect, useRef } from 'react';
import { VitaNexLogo } from './BrandIcons';

const MATRIX_CHARS = '012345678901234567890123456789VITANEX<>/{}[]+$#@*';

const NEON_COLORS = [
  '#00f0ff',
  '#00d2ff',
  '#38bdf8',
  '#b829ff',
  '#d946ef',
  '#8b5cf6'
];

export function MatrixCanvas({ opacity = 0.38, lightMode = false, speed = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    let columns = Math.ceil(width / fontSize);
    let drops = Array.from({ length: columns }, () => Math.random() * -40);
    let colColors = Array.from(
      { length: columns },
      (_, i) => NEON_COLORS[i % NEON_COLORS.length]
    );

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -20);
      colColors = Array.from(
        { length: columns },
        (_, i) => NEON_COLORS[i % NEON_COLORS.length]
      );
    };

    window.addEventListener('resize', handleResize);

    let lastTime = 0;
    const interval = 38 / speed;

    const render = (timestamp) => {
      animationId = requestAnimationFrame(render);
      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      ctx.fillStyle = lightMode
        ? 'rgba(255, 255, 255, 0.16)'
        : 'rgba(6, 7, 17, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `700 ${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char =
          MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const baseColor = colColors[i];

        if (Math.random() > 0.78) {
          ctx.fillStyle = lightMode ? '#6d28d9' : '#e0ffff';
          ctx.shadowColor = baseColor;
          ctx.shadowBlur = lightMode ? 3 : 12;
        } else {
          ctx.fillStyle = lightMode ? '#0284c7' : baseColor;
          ctx.shadowColor = baseColor;
          ctx.shadowBlur = lightMode ? 2 : 8;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
          colColors[i] =
            NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
        }
        drops[i] += 0.85;
      }
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [lightMode, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

export function MatrixIntroOverlay({ onComplete, t, lang, setLang }) {
  useEffect(() => {
    const start = (typeof window !== 'undefined' && window.__introStartTime) || Date.now();
    const elapsed = Date.now() - start;
    const remaining = Math.max(250, 1800 - elapsed);
    const timer = setTimeout(() => {
      onComplete();
    }, remaining);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="matrix-intro-overlay" onClick={onComplete}>
      <MatrixCanvas opacity={0.92} speed={1.45} />
      <div className="matrix-intro-content" onClick={(e) => e.stopPropagation()}>
        {setLang && (
          <div className="matrix-intro-langs">
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
          </div>
        )}
        <div className="matrix-logo-center">
          <VitaNexLogo size={136} />
        </div>
        <div className="matrix-intro-code">{t.matrixIntro.subtitle}</div>
        <h2 className="matrix-intro-title">
          <span className="text-cyan">Vita</span>
          <span className="text-purple">NeX</span> DIGITAL STUDIO
        </h2>
        <p className="matrix-intro-tagline">{t.matrixIntro.tagline}</p>
        <div className="matrix-progress-bar">
          <div className="matrix-progress-fill" />
        </div>
        <button
          type="button"
          className="matrix-skip-btn"
          onClick={onComplete}
        >
          {t.matrixIntro.skip}
        </button>
      </div>
    </div>
  );
}
