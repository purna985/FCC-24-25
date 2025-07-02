import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// LinkedIn SVG Icon
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" style={{ display: 'inline' }}>
    <path d="M29 0h-26c-1.7 0-3 1.3-3 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3v-26c0-1.7-1.3-3-3-3zM9.4 27h-4.3v-13.1h4.3v13.1zM7.3 12.1c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.3-1.1 2.5-2.5 2.5zM27 27h-4.3v-6.7c0-1.6 0-3.7-2.2-3.7-2.2 0-2.5 1.7-2.5 3.5v6.9h-4.3v-13.1h4.1v1.8h0.1c0.6-1.1 2-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5v7z"/>
  </svg>
);

const chromaGridCss = `
.chroma-grid {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(var(--cols, 3), 320px);
  grid-auto-rows: auto;
  justify-content: center;
  gap: 0.75rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;

  --x: 50%;
  --y: 50%;
  --r: 220px;
}

@media (max-width: 1124px) {
  .chroma-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 320px));
    gap: 0.5rem;
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .chroma-grid {
    grid-template-columns: 320px;
    gap: 0.75rem;
    padding: 1rem;
  }
}

.chroma-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #333;
  transition: border-color 0.3s ease;
  background: var(--card-gradient);

  --mouse-x: 50%;
  --mouse-y: 50%;
  --spotlight-color: rgba(255, 255, 255, 0.3);
}

.chroma-card:hover {
  border-color: var(--card-border);
}

.chroma-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y),
      var(--spotlight-color),
      transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 2;
}

.chroma-card:hover::before {
  opacity: 1;
}

.chroma-img-wrapper {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  background: transparent;
  transition: background 0.3s ease;
}

.chroma-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

.chroma-info {
  position: relative;
  z-index: 1;
  padding: 0.75rem 1rem;
  color: #fff;
  font-family: system-ui, sans-serif;
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 0.25rem;
  column-gap: 0.75rem;
}

.chroma-info .role,
.chroma-info .handle {
  color: #aaa;
}

.chroma-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  backdrop-filter: grayscale(1) brightness(0.78);
  -webkit-backdrop-filter: grayscale(1) brightness(0.78);
  background: rgba(0, 0, 0, 0.001);

  mask-image: radial-gradient(circle var(--r) at var(--x) var(--y),
      transparent 0%,
      transparent 15%,
      rgba(0, 0, 0, 0.10) 30%,
      rgba(0, 0, 0, 0.22) 45%,
      rgba(0, 0, 0, 0.35) 60%,
      rgba(0, 0, 0, 0.50) 75%,
      rgba(0, 0, 0, 0.68) 88%,
      white 100%);
  -webkit-mask-image: radial-gradient(circle var(--r) at var(--x) var(--y),
      transparent 0%,
      transparent 15%,
      rgba(0, 0, 0, 0.10) 30%,
      rgba(0, 0, 0, 0.22) 45%,
      rgba(0, 0, 0, 0.35) 60%,
      rgba(0, 0, 0, 0.50) 75%,
      rgba(0, 0, 0, 0.68) 88%,
      white 100%);
}

.chroma-fade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;
  backdrop-filter: grayscale(1) brightness(0.78);
  -webkit-backdrop-filter: grayscale(1) brightness(0.78);
  background: rgba(0, 0, 0, 0.001);

  mask-image: radial-gradient(circle var(--r) at var(--x) var(--y),
      white 0%,
      white 15%,
      rgba(255, 255, 255, 0.90) 30%,
      rgba(255, 255, 255, 0.78) 45%,
      rgba(255, 255, 255, 0.65) 60%,
      rgba(255, 255, 255, 0.50) 75%,
      rgba(255, 255, 255, 0.32) 88%,
      transparent 100%);
  -webkit-mask-image: radial-gradient(circle var(--r) at var(--x) var(--y),
      white 0%,
      white 15%,
      rgba(255, 255, 255, 0.90) 30%,
      rgba(255, 255, 255, 0.78) 45%,
      rgba(255, 255, 255, 0.65) 60%,
      rgba(255, 255, 255, 0.50) 75%,
      rgba(255, 255, 255, 0.32) 88%,
      transparent 100%);

  opacity: 1;
  transition: opacity 0.25s ease;
}
`;

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!document.getElementById("chroma-grid-style")) {
      const style = document.createElement("style");
      style.id = "chroma-grid-style";
      style.innerHTML = chromaGridCss;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--r": `${radius}px`,
        "--cols": columns,
        "--rows": rows,
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            "--card-border": c.borderColor || "transparent",
            "--card-gradient": c.gradient,
            cursor: c.url ? "pointer" : "default",
          }}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
            <a
              href={c.url || "#"}
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              onClick={e => { if (!c.url) e.preventDefault(); }}
              style={{
                opacity: c.url ? 1 : 0.5,
                pointerEvents: c.url ? 'auto' : 'none',
                cursor: c.url ? 'pointer' : 'not-allowed'
              }}
            >
              <LinkedInIcon />
            </a>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
