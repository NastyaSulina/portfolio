import "./style.css";

interface LinkCard {
  icon: string;
  title: string;
  sub: string;
  href: string;
  subClass?: string;
  featured?: boolean;
  arrowColor: string;
}

interface Content {
  comment: string;
  firstName: string;
  lastName: string;
  bio: string;
  exp: string;
  status: string;
  techComment: string;
  footer: { status: string; year: string };
}

const icons = {
  resume: `<svg class="icon-green" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>`,
  linkedin: `<svg class="icon-linkedin" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg class="icon-fg"       viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  leetcode: `<svg class="icon-leet"     viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
  email: `<svg class="icon-purple"   viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  wordle: `<svg class="icon-green"    viewBox="0 0 24 24" fill="none" stroke-width="1.5"><rect x="2" y="2" width="5" height="5" rx="0.5"/><rect x="10" y="2" width="5" height="5" rx="0.5"/><rect x="18" y="2" width="5" height="5" rx="0.5"/><rect x="2" y="10" width="5" height="5" rx="0.5"/><rect x="10" y="10" width="5" height="5" rx="0.5"/><rect x="18" y="10" width="5" height="5" rx="0.5"/><rect x="2" y="18" width="5" height="5" rx="0.5"/><rect x="10" y="18" width="5" height="5" rx="0.5"/><rect x="18" y="18" width="5" height="5" rx="0.5"/></svg>`,
  sun: `<svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
};

const arrow = () =>
  `<svg viewBox="0 0 18 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="0" y1="6" x2="13" y2="6"/>
    <polyline points="8,1.5 13,6 8,10.5"/>
  </svg>`;

const year = new Date().getFullYear();

const i18n: Record<string, Content> = {
  en: {
    comment: "// frontend engineer",
    firstName: "anastasiia",
    lastName: "sulina",
    bio: 'I build clean, fast and accessible interfaces with <span class="hl-react">React</span> and <span class="hl-ts">TypeScript</span>.',
    exp: "<strong>3+</strong> years of experience building web applications and UI components.",
    status: 'remote <span class="sep">|</span> open to relocation',
    techComment: "// tech stack",
    footer: { status: "available for new opportunities", year: `© ${year}` },
  },
  ru: {
    comment: "// фронтенд-разработчик",
    firstName: "анастасия",
    lastName: "сулина",
    bio: 'Разрабатываю чистые, быстрые и доступные интерфейсы на <span class="hl-react">React</span> и <span class="hl-ts">TypeScript</span>.',
    exp: "<strong>3+</strong> года опыта в разработке веб-приложений и UI-компонентов.",
    status: 'удалённо <span class="sep">|</span> готова к релокации',
    techComment: "// стек технологий",
    footer: { status: "открыта к новым предложениям", year: `© ${year}` },
  },
};

const links: LinkCard[] = [
  {
    icon: icons.resume,
    title: "Resume",
    sub: "PDF",
    href: "https://drive.google.com/file/d/1SE8PP0Eu4LA-HLw47qr-Bvk4ljWy1A4Q/view?usp=sharing",
    arrowColor: "var(--green)",
  },
  {
    icon: icons.linkedin,
    title: "LinkedIn",
    sub: "profile",
    href: "https://www.linkedin.com/in/imgrau",
    arrowColor: "var(--blue)",
  },
  {
    icon: icons.github,
    title: "GitHub",
    sub: "account",
    href: "https://github.com/NastyaSulina",
    arrowColor: "currentColor",
  },
  {
    icon: icons.leetcode,
    title: "LeetCode",
    sub: "profile",
    href: "https://leetcode.com/u/NastyaSulina/",
    arrowColor: "var(--orange)",
  },
  {
    icon: icons.email,
    title: "Email",
    sub: "imgrau.dev@gmail.com",
    href: "mailto:imgrau.dev@gmail.com",
    subClass: "email",
    arrowColor: "var(--purple)",
  },
  {
    icon: icons.wordle,
    title: "Wordle",
    sub: "got a free minute? ",
    href: "https://wordle.imgrau.com",
    subClass: "wordle",
    featured: true,
    arrowColor: "var(--green)",
  },
];

function initGutter(): void {
  const gutter = document.querySelector<HTMLElement>(".gutter")!;
  const lineH = 24;
  const count = Math.ceil(window.innerHeight / lineH) + 2;
  for (let i = 1; i <= count; i++) {
    const span = document.createElement("span");
    span.style.height = `${lineH}px`;
    span.textContent = String(i).padStart(2, "0");
    gutter.appendChild(span);
  }
}

function render(lang: string): void {
  const t = i18n[lang];
  const app = document.getElementById("app")!;
  const isDarkNow =
    document.documentElement.getAttribute("data-theme") !== "light";

  app.innerHTML = `
    <header>
      <a class="logo" href="/">imgrau.com <span class="logo-cursor"></span></a>
      <div class="header-controls">
        <div class="theme-switch">
          <span class="ctrl-label">THEME</span>
          <button class="theme-btn ${!isDarkNow ? "active" : ""}" data-theme-val="light" aria-label="Light theme">${icons.sun}</button>
          <button class="theme-btn ${isDarkNow ? "active" : ""}" data-theme-val="dark" aria-label="Dark theme">${icons.moon}</button>
        </div>
        <span class="header-divider">|</span>
        <div class="lang-switch">
          <span class="ctrl-label">LANGUAGE</span>
          <button class="lang-btn ${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
          <button class="lang-btn ${lang === "ru" ? "active" : ""}" data-lang="ru">RU</button>
        </div>
      </div>
    </header>

    <main>
      <div class="hero">
        <p class="hero-comment">${t.comment}</p>
        <h1 class="hero-name">
          <span class="first">${t.firstName}</span>
          <span class="last">${t.lastName}</span>
        </h1>
        <p class="hero-bio">${t.bio}</p>
        <p class="hero-exp">${t.exp}</p>
        <p class="hero-status">${t.status}</p>
      </div>

      <div class="tech-section">
        <p class="tech-comment">${t.techComment}</p>
        <div class="tech-stack">
          <div class="tech-row">
            <span class="tech-item ts">TS</span>
            <span class="tech-sep">|</span>
            <span class="tech-item js">JS</span>
            <span class="tech-sep">|</span>
            <span class="tech-item">React</span>
            <span class="tech-sep">|</span>
            <span class="tech-item">Next.js</span>
          </div>
          <div class="tech-row">
            <span class="tech-item">Node.js</span>
            <span class="tech-sep">|</span>
            <span class="tech-item">Redux</span>
            <span class="tech-sep">|</span>
            <span class="tech-item">MobX</span>
          </div>
        </div>
      </div>
    </main>

    <div class="links-grid">
      ${links
        .map(
          (l) => `
        <a class="link-card${l.featured ? " featured" : ""}"
           href="${l.href}"
           target="${l.href.startsWith("mailto") ? "_self" : "_blank"}"
           rel="noopener noreferrer">
          <span class="card-icon">${l.icon}</span>
          <span class="card-text">
            <span class="card-title">${l.title}</span>
            <span class="card-sub ${l.subClass ?? ""}">${l.sub}</span>
          </span>
          <span class="link-arrow" style="color:${l.arrowColor}">${arrow()}</span>
        </a>
      `,
        )
        .join("")}
    </div>

    <footer>
      <div class="footer-left">
        <span>&gt;</span>
        <span class="footer-available">${t.footer.status}</span>
        <span class="footer-cursor"></span>
      </div>
      <div class="footer-right">
        <span>${t.footer.year}</span>
        <span class="footer-cursor-static"></span>
      </div>
    </footer>
  `;

  attachHandlers(lang);
  reveal();
}

function reveal(): void {
  const els = document.querySelectorAll<HTMLElement>(
    ".hero-comment, .hero-name .first, .hero-name .last, .hero-bio, .hero-exp, .hero-status, .tech-comment, .tech-stack, .links-grid",
  );
  els.forEach((el, i) =>
    setTimeout(() => el.classList.add("revealed"), i * 50),
  );
}

function attachHandlers(lang: string): void {
  const root = document.documentElement;

  document.querySelectorAll<HTMLButtonElement>(".theme-btn").forEach((b) => {
    b.addEventListener("click", () => {
      const val = b.dataset.themeVal!;
      root.setAttribute("data-theme", val);
      document
        .querySelectorAll<HTMLButtonElement>(".theme-btn")
        .forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.themeVal === val);
        });
    });
  });

  document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => {
      if (b.dataset.lang !== lang) render(b.dataset.lang!);
    });
  });
}

initGutter();
render("en");
