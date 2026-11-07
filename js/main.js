/**
 * ATCENTER — PREMIUM AUTOMOTIVE BODY REPAIR STUDIO
 * Pure Vanilla JavaScript ES6+ · Zero External Libraries
 */

/* ==========================================================================
   1. VERIFIED DATA MODELS (Stages, Before/After Pairs, Real Works Gallery)
   ========================================================================== */

export const SCROLL_STAGES = [
  {
    index: 0,
    label: "ЭТАП 01 / 04 · ЭКСПОЗИЦИЯ КУЗОВА",
    heading: "Первичная дефектовка и оценка повреждений",
    description:
      "Оцениваем характер деформации навесных панелей и скрытых силовых элементов. Определяем, какие детали можно спасти бережной рихтовкой или технологией PDR без дорогостоящей замены.",
    layer: "front",
    scale: 1.0,
    tx: "0%",
    ty: "0%",
    blueprintOpacity: 0.15,
  },
  {
    index: 1,
    label: "ЭТАП 02 / 04 · ГЕОМЕТРИЯ И СТАПЕЛЬ",
    heading: "Выверка контрольных точек и заводских зазоров",
    description:
      "На стапельном стенде восстанавливаем силовую структуру кузова, вытягиваем лонжероны, стойки и проёмы дверей. Выставляем равномерные заводские зазоры сопряжённых элементов.",
    layer: "front",
    scale: 1.09,
    tx: "-2%",
    ty: "1%",
    blueprintOpacity: 0.95,
  },
  {
    index: 2,
    label: "ЭТАП 03 / 04 · КОЛОРИСТИКА И МАКРО-ДЕТАЛЬ",
    heading: "Компьютерный подбор эмали и камерная окраска",
    description:
      "Крупный план переднего крыла и колёсной арки: многослойное нанесение базы и высокопрочного лака в герметичной камере с учётом естественного выцветания соседних панелей.",
    layer: "macro",
    scale: 1.04,
    tx: "0%",
    ty: "0%",
    blueprintOpacity: 0.25,
  },
  {
    index: 3,
    label: "ЭТАП 04 / 04 · ФИНАЛЬНАЯ КОМПОЗИЦИЯ",
    heading: "Полностью собранный автомобиль и заводской блик",
    description:
      "После высокотемпературной сушки, сборки навесных деталей и финишной полировки кузов возвращает глубокое зеркальное отражение и правильную геометрию линий.",
    layer: "finale",
    scale: 1.0,
    tx: "0%",
    ty: "0%",
    blueprintOpacity: 0,
  },
];

export const BEFORE_AFTER_CASES = [
  {
    id: "opel-gtc",
    tag: "РЕАЛЬНЫЙ ПРОЕКТ · БЕЗ ЗАМЕНЫ ДЕТАЛЕЙ",
    title: "Opel Astra GTC — Рихтовка и локальная покраска порога, двери и крыла",
    description:
      "Автомобиль поступил с глубокой продольной притёртостью и замятием левой стороны. Выполнена рихтовка порога, двери и крыла без замены деталей, нанесение антикоррозийного грунта и покраска с плавным переходом.",
    works: "Рихтовка крыла, двери и порога, локальный окрас переходом",
    result: "Зазоры в заводском допуске, родные детали полностью сохранены",
    beforeImg: "assets/images/case2-local-1.jpg",
    beforeAlt: "До ремонта: сильная продольная вмятина и притёртость двери, крыла и порога белого Opel Astra GTC",
    afterImg: "assets/images/case2-local-4.jpg",
    afterAlt: "После ремонта: идеально ровная левая боковина того же белого Opel Astra GTC",
  },
  {
    id: "audi-q3",
    tag: "КУЗОВНОЙ РЕМОНТ ПОСЛЕ ДТП · РИХТОВКА ПРОЁМА",
    title: "Audi Q3 — Восстановление правой задней двери, крыла и проёма после удара",
    description:
      "Серьёзный боковой удар привёл к замятию правой задней двери, арки крыла и деформации дверного проёма. Проведена вытяжка проёма, рихтовка металла и окраска в сложный бронзово-коричневый металлик.",
    works: "Стапельная доводка проёма, кузовной ремонт и покраска боковины",
    result: "Силовая геометрия проёма восстановлена, точное попадание в сложный цвет",
    beforeImg: "assets/images/case4-crash-1.jpg",
    beforeAlt: "До ремонта: сильное замятие правой задней двери и арки крыла коричневого Audi Q3",
    afterImg: "assets/images/case4-crash-5.jpg",
    afterAlt: "После ремонта: полностью восстановленная правая сторона коричневого Audi Q3",
  },
  {
    id: "bumper-pp",
    tag: "РЕМОНТ ПЛАСТИКА · СВАРКА ПОЛИПРОПИЛЕНА PP",
    title: "Кроссовер — Сварка сквозного пробоя переднего бампера и покраска",
    description:
      "Восстановили треснувший пластиковый бампер после зимнего наезда на препятствие. Выполнена сварка полипропилена (PP) с внутренней стороны, восстановление креплений и полная окраска в камере с пластификатором.",
    works: "Сварка трещин полипропилена PP, эластичный грунт, покраска в камере",
    result: "Жёсткость бампера и все крепления восстановлены без покупки новой детали",
    beforeImg: "assets/images/case3-bumper-1.jpg",
    beforeAlt: "До ремонта: сквозной разрыв и трещины правого нижнего угла переднего бампера",
    afterImg: "assets/images/case3-bumper-4.jpg",
    afterAlt: "После ремонта: восстановленный и окрашенный угол переднего бампера с заводским блеском",
  },
  {
    id: "kia-hood",
    tag: "РИХТОВКА РЕБРА ЖЁСТКОСТИ · ПОКРАСКА В КАМЕРЕ",
    title: "KIA — Устранение острого залома передней кромки капота",
    description:
      "Острый залом на передней кромке капота над решёткой радиатора требовал точной вытяжки металла с сохранением внутреннего герметика и последующей окраски в камере.",
    works: "Вытяжка и рихтовка передней кромки капота, подготовка и окраска",
    result: "Геометрия кромки и заводская шагрень полностью восстановлены",
    beforeImg: "assets/images/real-work-728.jpg",
    beforeAlt: "До ремонта: острый залом и вмятина на передней кромке белого капота KIA",
    afterImg: "assets/images/real-work-736.jpg",
    afterAlt: "После ремонта: выпрямленный и свежеокрашенный белый капот KIA в цехе ATCenter",
  },
];

export const GALLERY_CASES = {
  "audi-q3": {
    category: "КУЗОВНОЙ РЕМОНТ ПОСЛЕ ДТП · АРХИВ ATCENTER",
    title: "Audi Q3 — Восстановление правой боковины и дверного проёма",
    photos: [
      {
        src: "assets/images/case4-crash-1.jpg",
        caption: "Состояние ДО ремонта: деформация правой задней двери, крыла и прилегающего порога после бокового удара.",
      },
      {
        src: "assets/images/case4-crash-2.jpg",
        caption: "Этап разборки и дефектовки скрытых повреждений дверного проёма в кузовном цехе.",
      },
      {
        src: "assets/images/case4-crash-3.jpg",
        caption: "Вытяжка, рихтовка и чистовая доводка геометрии проёма и порога перед грунтованием.",
      },
      {
        src: "assets/images/case4-crash-5.jpg",
        caption: "Финальный результат ПОСЛЕ покраски в камере и сборки: заводские зазоры и точное совпадение бронзового металлика.",
      },
    ],
  },
  "opel-gtc": {
    category: "ЛОКАЛЬНАЯ ПОКРАСКА И РИХТОВКА · АРХИВ ATCENTER",
    title: "Opel Astra GTC — Кузовной ремонт порога, двери и переднего крыла",
    photos: [
      {
        src: "assets/images/case2-local-1.jpg",
        caption: "Состояние ДО ремонта: глубокая продольная притёртость по левому крылу, двери и порогу.",
      },
      {
        src: "assets/images/case2-local-2.jpg",
        caption: "Крупный план характера деформации ребра жёсткости перед рихтовкой без замены деталей.",
      },
      {
        src: "assets/images/case2-local-3.jpg",
        caption: "Вид после восстановления геометрии и окраски с плавным переходом (ракурс 3/4 сзади).",
      },
      {
        src: "assets/images/case2-local-4.jpg",
        caption: "Результат ПОСЛЕ ремонта: ровная плоскость боковины и точное попадание в белый цвет.",
      },
    ],
  },
  "full-suv-paint": {
    category: "ПОЛНАЯ ПОКРАСКА АВТОМОБИЛЯ · КАМЕРА ATCENTER",
    title: "Внедорожник — Полная покраска кузова и проёмов с разборкой",
    photos: [
      {
        src: "assets/images/case1-paint-1.jpg",
        caption: "Снятые навесные элементы (крылья, двери) на стендах внутри покрасочной камеры ATCenter.",
      },
      {
        src: "assets/images/case1-paint-2.jpg",
        caption: "Маскировка проёмов и подготовка кузова внедорожника к многослойному нанесению базы и лака.",
      },
      {
        src: "assets/images/case1-paint-3.jpg",
        caption: "Контроль подготовки боковины и заднего крыла перед подачей автомобиля в камеру.",
      },
      {
        src: "assets/images/case1-paint-4.jpg",
        caption: "Кузов с окрашенными дверными проёмами перед финальной сборкой навесных деталей.",
      },
    ],
  },
  "nissan-xtrail": {
    category: "СТАПЕЛЬНЫЕ РАБОТЫ И ГЕОМЕТРИЯ · ЦЕХ ATCENTER",
    title: "Nissan X-Trail — Стапельная вытяжка задней части кузова",
    photos: [
      {
        src: "assets/images/case5-xtrail-1.jpg",
        caption: "Состояние ДО ремонта: удар в заднюю часть с повреждением крышки багажника, бампера и задней панели.",
      },
      {
        src: "assets/images/case5-xtrail-3.jpg",
        caption: "Силовая вытяжка задней панели на гидравлическом стапеле в цехе ATCenter (на фоне покрасочной камеры).",
      },
      {
        src: "assets/images/case5-xtrail-2.jpg",
        caption: "Доводка правого заднего крыла и выставление заводских зазоров проёма крышки багажника и фонаря.",
      },
    ],
  },
  "bumper-pp": {
    category: "РЕМОНТ И ПОКРАСКА БАМПЕРОВ · АРХИВ ATCENTER",
    title: "Кроссовер — Сварка разрыва полипропиленового бампера и покраска",
    photos: [
      {
        src: "assets/images/case3-bumper-1.jpg",
        caption: "Состояние ДО ремонта: сквозной пробой и трещины в нижней части переднего бампера под противотуманной фарой.",
      },
      {
        src: "assets/images/case3-bumper-2.jpg",
        caption: "Демонтаж бампера и подготовка зоны разрыва к термосварке полипропилена (PP) с внутренней стороны.",
      },
      {
        src: "assets/images/case3-bumper-3.jpg",
        caption: "Выведение формы угла бампера и нанесение эластичного грунта по пластику.",
      },
      {
        src: "assets/images/case3-bumper-4.jpg",
        caption: "Результат ПОСЛЕ окраски в камере с пластификатором и установки бампера на автомобиль.",
      },
    ],
  },
  "kia-hood": {
    category: "РИХТОВКА И ПОКРАСКА · АРХИВ ATCENTER",
    title: "KIA — Выпрямление залома передней кромки капота",
    photos: [
      {
        src: "assets/images/real-work-728.jpg",
        caption: "Состояние ДО ремонта: сложный залом на ребре жёсткости передней кромки капота.",
      },
      {
        src: "assets/images/real-work-736.jpg",
        caption: "Результат ПОСЛЕ рихтовки и окраски капота в камере: идеальный блик линейных ламп без шагрени и пыли.",
      },
    ],
  },
  "tucson-rear": {
    category: "СТАПЕЛЬНЫЕ И КУЗОВНЫЕ РАБОТЫ · АРХИВ ATCENTER",
    title: "Hyundai Tucson — Восстановление задней панели и замена крышки багажника",
    photos: [
      {
        src: "assets/images/case6-rear-1.jpg",
        caption: "Состояние ДО ремонта: автомобиль после удара в заднюю часть с разрушением крышки багажника.",
      },
      {
        src: "assets/images/case6-rear-2.jpg",
        caption: "Установка новой крышки багажника, стапельная вытяжка задней панели и подгонка зазоров в цехе.",
      },
      {
        src: "assets/images/case6-rear-3.jpg",
        caption: "Доводка сопряжения заднего правого крыла и проёма фонаря перед подачей в покрасочную камеру.",
      },
    ],
  },
  "subaru-ceramic": {
    category: "КОЛОРИСТИКА И ЗАЩИТНЫЙ КЕРАМИЧЕСКИЙ ЛАК · АРХИВ ATCENTER",
    title: "Subaru Outback — Сложная окраска и укрытие керамическим лаком",
    photos: [
      {
        src: "assets/images/real-work-753.jpg",
        caption: "Вид сбоку: многослойное лакокрасочное покрытие с защитным керамическим лаком и полировкой в зеркало.",
      },
      {
        src: "assets/images/real-work-756.jpg",
        caption: "Ракурс 3/4 сзади: плавный переход на штатный тёмно-синий цвет кузова и идеальная глубина глянца.",
      },
      {
        src: "assets/images/real-work-765.jpg",
        caption: "Проверка качества лакового слоя и переходов при естественном дневном освещении.",
      },
    ],
  },
};

/* ==========================================================================
   2. PURE LOGIC FUNCTIONS (Exported for fast Node unit testing)
   ========================================================================== */

/**
 * Clamps a numeric percentage value to [0, 100] rounded to 1 decimal place.
 */
export function clampSliderPercentage(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return 50;
  return Math.min(100, Math.max(0, Math.round(num * 10) / 10));
}

/**
 * Computes Before/After slider percentage from pointer X coordinate and bounding rect.
 */
export function computePointerPercentage(clientX, rectLeft, rectWidth) {
  if (!rectWidth || rectWidth <= 0) return 50;
  const raw = ((clientX - rectLeft) / rectWidth) * 100;
  return clampSliderPercentage(raw);
}

/**
 * Computes the active scroll stage (0..3) and normalized progress (0..1)
 * given scroll metrics for the sticky scroll car showcase section.
 */
export function calculateScrollStage(scrollY, viewportHeight, sectionTop, sectionHeight) {
  const scrollableDistance = Math.max(1, sectionHeight - viewportHeight);
  const rawProgress = (scrollY - sectionTop) / scrollableDistance;
  const progress = Math.min(1, Math.max(0, rawProgress));

  let stageIndex = 0;
  if (progress >= 0.75) {
    stageIndex = 3;
  } else if (progress >= 0.5) {
    stageIndex = 2;
  } else if (progress >= 0.25) {
    stageIndex = 1;
  }

  const stageSpec = SCROLL_STAGES[stageIndex] || SCROLL_STAGES[0];
  return {
    progress: Math.round(progress * 1000) / 1000,
    stageIndex,
    ...stageSpec,
  };
}

/**
 * Filters an array of gallery descriptor objects `{ id, categories }` by category tag.
 */
export function filterGalleryByCategory(items, category) {
  if (!Array.isArray(items)) return [];
  const normalized = (category || "all").trim().toLowerCase();
  if (!normalized || normalized === "all") {
    return items.map((item) => item.id);
  }
  return items
    .filter((item) => {
      const cats = String(item.categories || "")
        .toLowerCase()
        .split(/\s+/);
      return cats.includes(normalized);
    })
    .map((item) => item.id);
}

/**
 * Builds direct phone, WhatsApp, and Telegram URLs from a branch phone string.
 */
export function buildBranchContactLinks(rawPhone) {
  const digits = String(rawPhone || "").replace(/\D+/g, "");
  const normalized = digits.startsWith("8") && digits.length === 11 ? "7" + digits.slice(1) : digits;
  return {
    telHref: `tel:+${normalized}`,
    whatsappHref: `https://wa.me/${normalized}`,
    telegramHref: `https://t.me/+${normalized}`,
  };
}

/* ==========================================================================
   3. DOM CONTROLLERS (Browser Runtime)
   ========================================================================== */

function initApp() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js-anim-ready");

  initImageFallbacks();
  initMobileNavigation();
  initScrollReveal(prefersReducedMotion);
  initScrollCarShowcase(prefersReducedMotion);
  initWorksGalleryAndLightbox();
  initBeforeAfterSlider();
}

/**
 * Ensures zero broken image frames by providing an inline SVG technical fallback if an image fails.
 */
function initImageFallbacks() {
  const fallbackSvg =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <rect width="800" height="600" fill="#13161e"/>
        <line x1="0" y1="300" x2="800" y2="300" stroke="rgba(217,30,42,0.35)" stroke-width="1"/>
        <text x="400" y="290" fill="#f4f6f8" font-family="monospace" font-size="18" text-anchor="middle">ATCENTER · BODY REPAIR STUDIO</text>
        <text x="400" y="322" fill="#a5adba" font-family="sans-serif" font-size="13" text-anchor="middle">Фотография кузовного цеха</text>
      </svg>`
    );

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "true";
        img.src = fallbackSvg;
      },
      { once: true }
    );
  });
}

/**
 * Mobile Menu Drawer toggle, keyboard Escape handling, and link auto-close.
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-drawer-close");
  const drawer = document.getElementById("mobile-menu-drawer");
  if (!toggleBtn || !drawer) return;

  const setDrawerState = (open) => {
    toggleBtn.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    drawer.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    setDrawerState(!isOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => setDrawerState(false));
  }

  drawer.querySelectorAll("[data-drawer-link]").forEach((link) => {
    link.addEventListener("click", () => setDrawerState(false));
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      setDrawerState(false);
      toggleBtn.focus();
    }
  });
}

/**
 * IntersectionObserver for smooth reveal of section headers and editorial blocks.
 */
function initScrollReveal(prefersReducedMotion) {
  const items = document.querySelectorAll(".reveal-item");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/**
 * Dodge Challenger SRT Hellcat Scroll Car Animation & Interactive Stage Controller.
 */
function initScrollCarShowcase(prefersReducedMotion) {
  const root = document.documentElement;
  const heroSection = document.getElementById("hero");
  const scrollSection = document.getElementById("scroll-showcase");
  const layerFront = document.getElementById("car-layer-front");
  const layerMacro = document.getElementById("car-layer-macro");
  const layerFinale = document.getElementById("car-layer-finale");
  const stepLabel = document.getElementById("stage-step-label");
  const stepHeading = document.getElementById("stage-step-heading");
  const stepDesc = document.getElementById("stage-step-desc");
  const progressReadout = document.getElementById("scroll-progress-readout");
  const stageButtons = document.querySelectorAll("[data-stage-btn]");

  let currentStageIndex = -1;
  let manualOverrideUntil = 0;

  const applyStageVisuals = (stageIndex, customProgress) => {
    const spec = SCROLL_STAGES[stageIndex] || SCROLL_STAGES[0];
    const progressValue =
      typeof customProgress === "number" ? Math.max(0.12, customProgress) : (stageIndex + 1) / 4;

    root.style.setProperty("--scroll-progress", String(progressValue));
    root.style.setProperty("--car-rig-scale", prefersReducedMotion ? "1" : String(spec.scale));
    root.style.setProperty("--car-rig-tx", prefersReducedMotion ? "0%" : spec.tx);
    root.style.setProperty("--car-rig-ty", prefersReducedMotion ? "0%" : spec.ty);
    root.style.setProperty("--blueprint-opacity", String(spec.blueprintOpacity));

    if (progressReadout) {
      progressReadout.textContent = `0${stageIndex + 1} / 04`;
    }

    if (currentStageIndex === stageIndex) return;
    currentStageIndex = stageIndex;
    document.body.setAttribute("data-scroll-stage", String(stageIndex));

    if (layerFront && layerMacro && layerFinale) {
      layerFront.classList.toggle("is-active", spec.layer === "front");
      layerMacro.classList.toggle("is-active", spec.layer === "macro");
      layerFinale.classList.toggle("is-active", spec.layer === "finale");
    }

    if (stepLabel) stepLabel.textContent = spec.label;
    if (stepHeading) stepHeading.textContent = spec.heading;
    if (stepDesc) stepDesc.textContent = spec.description;

    stageButtons.forEach((btn) => {
      const idx = Number(btn.getAttribute("data-stage-btn"));
      const active = idx === stageIndex;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
  };

  // Initialize Stage 0 immediately
  applyStageVisuals(0, 0.25);

  // Interactive Stage Tabs (work on both desktop and mobile)
  stageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetStage = Number(btn.getAttribute("data-stage-btn")) || 0;
      manualOverrideUntil = Date.now() + 1800;
      applyStageVisuals(targetStage, (targetStage + 1) / 4);
    });
  });

  // Scroll-driven rAF loop
  let ticking = false;
  const onScrollFrame = () => {
    ticking = false;
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight || 900;

    // Subtle Hero Dodge Challenger camera push
    if (heroSection && !prefersReducedMotion) {
      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.bottom > 0 && heroRect.top < vh) {
        const heroRatio = Math.min(1, Math.max(0, -heroRect.top / Math.max(1, heroRect.height)));
        const scale = (1 + heroRatio * 0.08).toFixed(4);
        const ty = Math.round(heroRatio * 28);
        root.style.setProperty("--hero-car-scale", scale);
        root.style.setProperty("--hero-car-ty", `${ty}px`);
      }
    }

    // Sticky Scroll Showcase progression
    if (scrollSection && Date.now() > manualOverrideUntil && window.innerWidth > 860) {
      const rect = scrollSection.getBoundingClientRect();
      const sectionTop = scrollY + rect.top;
      const sectionHeight = scrollSection.offsetHeight;
      if (rect.bottom > 0 && rect.top < vh) {
        const computed = calculateScrollStage(scrollY, vh, sectionTop, sectionHeight);
        applyStageVisuals(computed.stageIndex, Math.max(0.15, computed.progress));
      }
    }
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScrollFrame);
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Real Works Gallery Filter & Accessible Custom Lightbox with Touch + Keyboard support.
 */
function initWorksGalleryAndLightbox() {
  const filterBtns = document.querySelectorAll("[data-gallery-filter]");
  const workCards = Array.from(document.querySelectorAll(".work-card"));

  const cardDescriptors = workCards.map((card) => ({
    id: card.getAttribute("data-case-id") || "",
    categories: card.getAttribute("data-category") || "",
    element: card,
  }));

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-gallery-filter") || "all";
      const visibleIds = new Set(filterGalleryByCategory(cardDescriptors, cat));

      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      cardDescriptors.forEach((desc) => {
        const show = visibleIds.has(desc.id);
        desc.element.classList.toggle("is-hidden", !show);
      });
    });
  });

  // Custom Lightbox Controller
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");
  const mainImg = document.getElementById("lightbox-main-img");
  const captionEl = document.getElementById("lightbox-caption");
  const titleEl = document.getElementById("lightbox-title");
  const categoryEl = document.getElementById("lightbox-category");
  const counterEl = document.getElementById("lightbox-counter");
  const thumbsContainer = document.getElementById("lightbox-thumbs");

  if (!modal || !mainImg) return;

  let activeCaseId = null;
  let activePhotoIdx = 0;
  let lastTriggerEl = null;

  const renderLightboxSlide = () => {
    const caseData = GALLERY_CASES[activeCaseId];
    if (!caseData || !caseData.photos.length) return;

    const total = caseData.photos.length;
    activePhotoIdx = ((activePhotoIdx % total) + total) % total;
    const photo = caseData.photos[activePhotoIdx];

    if (categoryEl) categoryEl.textContent = caseData.category;
    if (titleEl) titleEl.textContent = caseData.title;
    if (counterEl) counterEl.textContent = `${activePhotoIdx + 1} / ${total}`;
    mainImg.src = photo.src;
    mainImg.alt = `${caseData.title} — фото ${activePhotoIdx + 1}`;
    if (captionEl) captionEl.textContent = photo.caption;

    if (thumbsContainer) {
      thumbsContainer.innerHTML = "";
      caseData.photos.forEach((p, idx) => {
        const thumbBtn = document.createElement("button");
        thumbBtn.type = "button";
        thumbBtn.className = `lightbox-thumb-btn${idx === activePhotoIdx ? " is-active" : ""}`;
        thumbBtn.setAttribute("aria-label", `Показать фото ${idx + 1}`);
        const img = document.createElement("img");
        img.src = p.src;
        img.alt = "";
        thumbBtn.appendChild(img);
        thumbBtn.addEventListener("click", () => {
          activePhotoIdx = idx;
          renderLightboxSlide();
        });
        thumbsContainer.appendChild(thumbBtn);
      });
    }
  };

  const openLightbox = (caseId, triggerEl) => {
    if (!GALLERY_CASES[caseId]) return;
    activeCaseId = caseId;
    activePhotoIdx = 0;
    lastTriggerEl = triggerEl || null;
    renderLightboxSlide();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  };

  const closeLightbox = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastTriggerEl && typeof lastTriggerEl.focus === "function") {
      lastTriggerEl.focus();
    }
  };

  document.querySelectorAll("[data-open-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const caseId = trigger.getAttribute("data-open-lightbox");
      openLightbox(caseId, trigger);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      activePhotoIdx -= 1;
      renderLightboxSlide();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      activePhotoIdx += 1;
      renderLightboxSlide();
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      activePhotoIdx -= 1;
      renderLightboxSlide();
    } else if (e.key === "ArrowRight") {
      activePhotoIdx += 1;
      renderLightboxSlide();
    }
  });

  // Mobile touch swipe support inside Lightbox
  let touchStartX = 0;
  modal.addEventListener(
    "touchstart",
    (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].clientX;
      }
    },
    { passive: true }
  );

  modal.addEventListener(
    "touchend",
    (e) => {
      if (!e.changedTouches || !e.changedTouches[0]) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 45) {
        activePhotoIdx += dx < 0 ? 1 : -1;
        renderLightboxSlide();
      }
    },
    { passive: true }
  );
}

/**
 * Interactive Before / After Slider with 4 real verified pairs and range/pointer/preset controls.
 */
function initBeforeAfterSlider() {
  const viewport = document.getElementById("ba-slider-viewport");
  const rangeInput = document.getElementById("ba-range-input");
  const imgBefore = document.getElementById("ba-img-before");
  const imgAfter = document.getElementById("ba-img-after");
  const caseTag = document.getElementById("ba-case-tag");
  const caseTitle = document.getElementById("ba-case-title");
  const caseDesc = document.getElementById("ba-case-desc");
  const caseWorks = document.getElementById("ba-case-works");
  const caseResult = document.getElementById("ba-case-result");
  const posReadout = document.getElementById("ba-pos-readout");
  const caseTabs = document.querySelectorAll("[data-ba-case]");
  const presetBtns = document.querySelectorAll("[data-ba-preset]");

  if (!viewport || !rangeInput) return;

  const setSliderPosition = (percent) => {
    const clamped = clampSliderPercentage(percent);
    viewport.style.setProperty("--ba-pos", `${clamped}%`);
    rangeInput.value = String(clamped);
    if (posReadout) {
      const beforeRounded = Math.round(clamped);
      posReadout.textContent = `${beforeRounded}% До / ${100 - beforeRounded}% После`;
    }
    presetBtns.forEach((btn) => {
      const target = Number(btn.getAttribute("data-ba-preset"));
      btn.classList.toggle("is-active", Math.abs(target - clamped) <= 5);
    });
  };

  rangeInput.addEventListener("input", (e) => {
    setSliderPosition(e.target.value);
  });

  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = Number(btn.getAttribute("data-ba-preset"));
      setSliderPosition(val);
    });
  });

  caseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = Number(tab.getAttribute("data-ba-case")) || 0;
      const data = BEFORE_AFTER_CASES[idx];
      if (!data) return;

      caseTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });

      if (imgBefore) {
        imgBefore.src = data.beforeImg;
        imgBefore.alt = data.beforeAlt;
      }
      if (imgAfter) {
        imgAfter.src = data.afterImg;
        imgAfter.alt = data.afterAlt;
      }
      if (caseTag) caseTag.textContent = data.tag;
      if (caseTitle) caseTitle.textContent = data.title;
      if (caseDesc) caseDesc.textContent = data.description;
      if (caseWorks) caseWorks.textContent = data.works;
      if (caseResult) caseResult.textContent = data.result;

      setSliderPosition(50);
    });
  });
}

// Execute when running in browser DOM
if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}
