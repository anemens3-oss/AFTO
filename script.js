/**
 * AFTO-СЕРВИС (afto-service.ru) — MODERN AUTOMOTIVE ENGINEERING
 * Pure Vanilla JavaScript ES6+ Module · Zero External Libraries
 */

/* ==========================================================================
   1. PURE LOGIC FUNCTIONS (Exported for Deterministic Unit Tests & Browser)
   ========================================================================== */

/**
 * Formats an integer amount in Russian Rubles with non-breaking spaces.
 * @param {number} amount
 * @param {boolean} withFromPrefix
 * @returns {string}
 */
export function formatRubles(amount, withFromPrefix = true) {
  const num = Number(amount);
  if (!Number.isFinite(num) || num <= 0) {
    return 'По запросу';
  }
  const formatted = Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return withFromPrefix ? `от ${formatted} ₽` : `${formatted} ₽`;
}

/**
 * Normalizes a phone string into a valid RFC3966 tel: URI.
 * @param {string} rawPhone
 * @returns {string}
 */
export function formatPhoneTelLink(rawPhone) {
  const digits = String(rawPhone || '').replace(/[^\d+]/g, '');
  if (digits.startsWith('+7') && digits.length === 12) {
    return `tel:${digits}`;
  }
  const cleanDigits = digits.replace(/\D/g, '');
  if (cleanDigits.length === 11 && (cleanDigits.startsWith('7') || cleanDigits.startsWith('8'))) {
    return `tel:+7${cleanDigits.slice(1)}`;
  }
  return 'tel:+74951509003';
}

/**
 * Filters the 12 service categories by department and search query.
 * @param {Array<{id: string, dept: string, title: string, keywords: string}>} categories
 * @param {string} activeDept
 * @param {string} searchQuery
 * @returns {Array<string>} Matching category IDs
 */
export function filterServiceCategories(categories, activeDept = 'all', searchQuery = '') {
  if (!Array.isArray(categories)) return [];
  const deptNorm = String(activeDept || 'all').trim().toLowerCase();
  const queryNorm = String(searchQuery || '').trim().toLowerCase();

  return categories
    .filter((cat) => {
      const deptMatch = deptNorm === 'all' || String(cat.dept || '').toLowerCase() === deptNorm;
      if (!deptMatch) return false;
      if (!queryNorm) return true;
      const haystack = `${cat.title || ''} ${cat.keywords || ''}`.toLowerCase();
      return haystack.includes(queryNorm);
    })
    .map((cat) => cat.id);
}

/**
 * Filters price list rows by category and search query.
 * @param {Array<{id: string, category: string, name: string, note?: string, priceFrom: number}>} items
 * @param {string} activeCategory
 * @param {string} searchQuery
 * @returns {Array<{id: string, category: string, name: string, note?: string, priceFrom: number}>}
 */
export function filterPriceItems(items, activeCategory = 'all', searchQuery = '') {
  if (!Array.isArray(items)) return [];
  const catNorm = String(activeCategory || 'all').trim().toLowerCase();
  const queryNorm = String(searchQuery || '').trim().toLowerCase();

  return items.filter((item) => {
    const catMatch = catNorm === 'all' || String(item.category || '').toLowerCase() === catNorm;
    if (!catMatch) return false;
    if (!queryNorm) return true;
    const haystack = `${item.name || ''} ${item.note || ''} ${item.category || ''}`.toLowerCase();
    return haystack.includes(queryNorm);
  });
}

/**
 * Calculates the approximate starting sum for selected price list items.
 * @param {Array<{id: string, name: string, priceFrom: number}>} selectedItems
 * @returns {{count: number, totalFrom: number, formattedTotal: string}}
 */
export function calculateEstimateTotal(selectedItems) {
  if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
    return {
      count: 0,
      totalFrom: 0,
      formattedTotal: '0 ₽',
    };
  }
  const totalFrom = selectedItems.reduce((sum, item) => {
    const val = Number(item?.priceFrom);
    return sum + (Number.isFinite(val) && val > 0 ? val : 0);
  }, 0);

  return {
    count: selectedItems.length,
    totalFrom,
    formattedTotal: formatRubles(totalFrom, true),
  };
}

/**
 * Safely wraps an index around a list of portfolio items for Lightbox navigation.
 * @param {Array<Object>} items
 * @param {number} targetIndex
 * @returns {{index: number, item: Object | null, total: number}}
 */
export function getLightboxItemByIndex(items, targetIndex) {
  if (!Array.isArray(items) || items.length === 0) {
    return { index: 0, item: null, total: 0 };
  }
  const total = items.length;
  const wrapped = ((Number(targetIndex) % total) + total) % total;
  return {
    index: wrapped,
    item: items[wrapped],
    total,
  };
}

/* ==========================================================================
   2. VERIFIED PORTFOLIO CASES DATA (From afto-service.ru Gallery Directions)
   ========================================================================== */
export const PORTFOLIO_WORKS = [
  {
    id: 'work-volvo-to',
    category: 'maintenance',
    categoryLabel: 'Техническое обслуживание и диагностика',
    title: 'Регламентное ТО и комплексная диагностика Volvo XC90',
    summary:
      'Плановое техническое обслуживание со сменой моторного масла, масляного, воздушного и салонного фильтров, ревизией тормозных узлов и компьютерным чтением электронных блоков.',
    specs: 'Слесарный цех и отдел диагностики · Запчасти со склада техцентра',
    image: 'assets/images/afto-hero-engineering.jpg',
    alt: 'Иллюстративная визуализация сервисного поста ТО и диагностики автомобиля на подъёмнике',
  },
  {
    id: 'work-mazda-color',
    category: 'bodywork',
    categoryLabel: 'Кузовной цех и сложная колористика',
    title: 'Трёхслойная покраска и колеровка эксклюзивных цветов Mazda (46G, 41V, 46V)',
    summary:
      'Подбор рецептуры и многослойное нанесение сложных заводских покрытий Soul Red / Soul Red Crystal (41V, 46V) и Machine Grey (46G) в покрасочной камере с выверкой переходов.',
    specs: 'Кузовной и малярный цех · Компьютерная колеровка трёхслойных эмалей',
    image: 'assets/images/afto-paint-coloristics.jpg',
    alt: 'Иллюстративная визуализация окрашенного крыла и двери глубокого красного металлика в малярной камере',
  },
  {
    id: 'work-engine-grm',
    category: 'engine',
    categoryLabel: 'Двигатель, ГРМ и электрооборудование',
    title: 'Замена комплекта ГРМ и компьютерная диагностика ДВС (Audi, Skoda, Volkswagen)',
    summary:
      'Инструментальная проверка фаз газораспределения, замена ремней и цепей ГРМ с натяжителями и роликами, проверка систем зажигания и охлаждения двигателя.',
    specs: 'Слесарный цех · Базовая стоимость замены ремня ГРМ от 5 500 ₽',
    image: 'assets/images/afto-diagnostics-engine.jpg',
    alt: 'Иллюстративная визуализация диагностики двигателя и привода ГРМ в техцентре',
  },
  {
    id: 'work-chassis-3d',
    category: 'chassis',
    categoryLabel: 'Подвеска, рулевое и 3D развал-схождение',
    title: 'Ремонт рычагов подвески и регулировка 3D сход-развала (Mercedes-Benz, BMW, Toyota)',
    summary:
      'Дефектовка ходовой части, замена сайлентблоков, шаровых опор, ступичных подшипников и финишная регулировка углов установки колёс на 3D-стенде.',
    specs: 'Слесарный цех и пост сход-развала · Регулировка от 6 500 ₽',
    image: 'assets/images/afto-chassis-alignment.jpg',
    alt: 'Иллюстративная визуализация колеса и подвески автомобиля с мишенями 3D развал-схождения',
  },
  {
    id: 'work-brakes-akpp',
    category: 'transmission',
    categoryLabel: 'Тормозная система и трансмиссия (АКПП / МКПП)',
    title: 'Обслуживание тормозных суппортов, замена дисков и аппаратная замена масла в АКПП',
    summary:
      'Замена передних и задних тормозных дисков и колодок, профилактика направляющих суппортов, замена фильтра и полная замена рабочей жидкости в автоматической коробке передач.',
    specs: 'Агрегатный участок · Замена колодок от 1 080 ₽ · Замена масла АКПП от 3 500 ₽',
    image: 'assets/images/afto-transmission-brake.jpg',
    alt: 'Иллюстративная визуализация обслуживания тормозного диска, суппорта и узлов коробки передач',
  },
  {
    id: 'work-body-geometry',
    category: 'bodywork',
    categoryLabel: 'Кузовной ремонт и детейлинг',
    title: 'Восстановление геометрии кузова, локальный окрас и полировка (Range Rover, Hyundai, Honda)',
    summary:
      'Стапельные и рихтовочные работы, замена и регулировка зазоров дверей и бамперов, удаление вмятин без покраски (PDR) и финишная защитная полировка кузова и стёкол.',
    specs: 'Кузовной цех · Восстановление геометрии от 3 500 ₽ · PDR от 5 000 ₽',
    image: 'assets/images/afto-paint-coloristics.jpg',
    alt: 'Иллюстративная визуализация кузовного восстановления и контроля качества лакокрасочного слоя',
  },
];

/* ==========================================================================
   3. BROWSER DOM INITIALIZATION
   ========================================================================== */
function initApp() {
  if (typeof document === 'undefined') return;

  initMobileNavigation();
  initServicesMatrix();
  initPriceListExplorer();
  initWorksPortfolioAndLightbox();
  initScrollReveal();
}

/**
 * Mobile Menu Drawer Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  const setOpenState = (isOpen) => {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    drawer.classList.toggle('is-open', isOpen);
    drawer.setAttribute('aria-hidden', String(!isOpen));
  };

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setOpenState(!expanded);
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpenState(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setOpenState(false);
      toggleBtn.focus();
    }
  });
}

/**
 * 12-Category Services Matrix (Department Filter, Search & Expandable Rows)
 */
function initServicesMatrix() {
  const matrixContainer = document.getElementById('service-matrix-list');
  if (!matrixContainer) return;

  const serviceRows = Array.from(matrixContainer.querySelectorAll('.service-row'));
  const deptFilterBtns = Array.from(document.querySelectorAll('[data-dept-filter]'));
  const searchInput = document.getElementById('services-search');
  const visibleCountEl = document.getElementById('services-visible-count');
  const expandAllBtn = document.getElementById('expand-all-services');
  const collapseAllBtn = document.getElementById('collapse-all-services');

  let activeDept = 'all';
  let searchQuery = '';

  const categoriesData = serviceRows.map((row) => ({
    id: row.id,
    dept: row.getAttribute('data-dept') || '',
    title: row.getAttribute('data-title') || '',
    keywords: row.textContent || '',
  }));

  const updateFilteredServices = () => {
    const matchedIds = new Set(filterServiceCategories(categoriesData, activeDept, searchQuery));
    serviceRows.forEach((row) => {
      const isVisible = matchedIds.has(row.id);
      row.hidden = !isVisible;
    });
    if (visibleCountEl) {
      visibleCountEl.textContent = String(matchedIds.size);
    }
  };

  deptFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeDept = btn.getAttribute('data-dept-filter') || 'all';
      deptFilterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      updateFilteredServices();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      updateFilteredServices();
    });
  }

  // Row disclosure toggles
  serviceRows.forEach((row) => {
    const toggleBtn = row.querySelector('[data-service-toggle]');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const isExpanded = row.classList.contains('is-expanded');
      const nextState = !isExpanded;
      row.classList.toggle('is-expanded', nextState);
      toggleBtn.setAttribute('aria-expanded', String(nextState));
      const labelSpan = toggleBtn.querySelector('.toggle-btn-label');
      if (labelSpan) {
        labelSpan.textContent = nextState ? 'Свернуть перечень' : 'Состав работ и цены';
      }
    });
  });

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      serviceRows.forEach((row) => {
        if (!row.hidden) {
          row.classList.add('is-expanded');
          const btn = row.querySelector('[data-service-toggle]');
          if (btn) {
            btn.setAttribute('aria-expanded', 'true');
            const labelSpan = btn.querySelector('.toggle-btn-label');
            if (labelSpan) labelSpan.textContent = 'Свернуть перечень';
          }
        }
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      serviceRows.forEach((row) => {
        row.classList.remove('is-expanded');
        const btn = row.querySelector('[data-service-toggle]');
        if (btn) {
          btn.setAttribute('aria-expanded', 'false');
          const labelSpan = btn.querySelector('.toggle-btn-label');
          if (labelSpan) labelSpan.textContent = 'Состав работ и цены';
        }
      });
    });
  }
}

/**
 * Interactive Price List Filter, Search & Client-Side Estimate Shortlist
 */
function initPriceListExplorer() {
  const priceTable = document.getElementById('price-ledger-table');
  if (!priceTable) return;

  const rows = Array.from(priceTable.querySelectorAll('tbody tr[data-price-id]'));
  const filterBtns = Array.from(document.querySelectorAll('[data-price-filter]'));
  const searchInput = document.getElementById('price-search-input');
  const countBadge = document.getElementById('price-visible-count');
  const estimateListEl = document.getElementById('estimate-shortlist');
  const estimateTotalEl = document.getElementById('estimate-total-value');
  const estimateClearBtn = document.getElementById('estimate-clear-btn');

  let activeCategory = 'all';
  let searchQuery = '';
  const selectedMap = new Map();

  const itemsData = rows.map((row) => ({
    id: row.getAttribute('data-price-id') || '',
    category: row.getAttribute('data-price-cat') || '',
    name: row.getAttribute('data-price-name') || '',
    note: row.textContent || '',
    priceFrom: Number(row.getAttribute('data-price-from') || 0),
  }));

  const updateFilteredPriceRows = () => {
    const matched = filterPriceItems(itemsData, activeCategory, searchQuery);
    const matchedIds = new Set(matched.map((item) => item.id));
    rows.forEach((row) => {
      const id = row.getAttribute('data-price-id') || '';
      row.hidden = !matchedIds.has(id);
    });
    if (countBadge) {
      countBadge.textContent = String(matchedIds.size);
    }
  };

  const renderEstimateShortlist = () => {
    if (!estimateListEl || !estimateTotalEl) return;
    const selectedItems = Array.from(selectedMap.values());
    const summary = calculateEstimateTotal(selectedItems);

    estimateTotalEl.textContent = summary.formattedTotal;

    if (selectedItems.length === 0) {
      estimateListEl.innerHTML =
        '<li class="estimate-empty">Отметьте нужные услуги кнопкой «+ В расчёт» в таблице, чтобы сложить базовую ориентировочную стоимость перед звонком мастеру.</li>';
      if (estimateClearBtn) estimateClearBtn.hidden = true;
      return;
    }

    if (estimateClearBtn) estimateClearBtn.hidden = false;
    estimateListEl.innerHTML = '';

    selectedItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'estimate-item';

      const nameSpan = document.createElement('span');
      nameSpan.textContent = `${item.name} (${formatRubles(item.priceFrom, true)})`;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'estimate-remove-btn';
      removeBtn.setAttribute('aria-label', `Убрать из расчёта: ${item.name}`);
      removeBtn.textContent = '× Убрать';
      removeBtn.addEventListener('click', () => {
        selectedMap.delete(item.id);
        syncRowButtons();
        renderEstimateShortlist();
      });

      li.appendChild(nameSpan);
      li.appendChild(removeBtn);
      estimateListEl.appendChild(li);
    });
  };

  const syncRowButtons = () => {
    rows.forEach((row) => {
      const id = row.getAttribute('data-price-id') || '';
      const btn = row.querySelector('[data-estimate-add]');
      if (!btn) return;
      const isSelected = selectedMap.has(id);
      btn.classList.toggle('is-selected', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
      btn.textContent = isSelected ? '✓ В расчёте' : '+ В расчёт';
    });
  };

  rows.forEach((row) => {
    const btn = row.querySelector('[data-estimate-add]');
    if (!btn) return;
    const id = row.getAttribute('data-price-id') || '';
    const name = row.getAttribute('data-price-name') || '';
    const priceFrom = Number(row.getAttribute('data-price-from') || 0);

    btn.addEventListener('click', () => {
      if (selectedMap.has(id)) {
        selectedMap.delete(id);
      } else {
        selectedMap.set(id, { id, name, priceFrom });
      }
      syncRowButtons();
      renderEstimateShortlist();
    });
  });

  if (estimateClearBtn) {
    estimateClearBtn.addEventListener('click', () => {
      selectedMap.clear();
      syncRowButtons();
      renderEstimateShortlist();
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-price-filter') || 'all';
      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      updateFilteredPriceRows();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      updateFilteredPriceRows();
    });
  }

  renderEstimateShortlist();
}

/**
 * Works Portfolio Filter & Accessible Lightbox Modal
 */
function initWorksPortfolioAndLightbox() {
  const worksGrid = document.getElementById('works-bento-grid');
  const filterBtns = Array.from(document.querySelectorAll('[data-works-filter]'));
  const dialog = document.getElementById('works-lightbox');

  if (worksGrid && filterBtns.length > 0) {
    const cards = Array.from(worksGrid.querySelectorAll('.work-card'));
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-works-filter') || 'all';
        filterBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        cards.forEach((card) => {
          const cat = card.getAttribute('data-work-cat') || '';
          card.hidden = filterVal !== 'all' && cat !== filterVal;
        });
      });
    });
  }

  if (!dialog) return;

  const imgEl = document.getElementById('lightbox-image');
  const catEl = document.getElementById('lightbox-category');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const specsEl = document.getElementById('lightbox-specs');
  const counterEl = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentIndex = 0;
  let lastTriggerEl = null;

  const renderLightboxSlide = (targetIndex) => {
    const { index, item, total } = getLightboxItemByIndex(PORTFOLIO_WORKS, targetIndex);
    if (!item) return;
    currentIndex = index;

    if (imgEl) {
      imgEl.src = item.image;
      imgEl.alt = item.alt;
    }
    if (catEl) catEl.textContent = item.categoryLabel;
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.summary;
    if (specsEl) specsEl.textContent = item.specs;
    if (counterEl) counterEl.textContent = `0${index + 1} / 0${total}`;
  };

  const openLightbox = (workId, triggerEl) => {
    const foundIdx = PORTFOLIO_WORKS.findIndex((w) => w.id === workId);
    lastTriggerEl = triggerEl || null;
    renderLightboxSlide(foundIdx >= 0 ? foundIdx : 0);
    dialog.setAttribute('open', '');
    dialog.setAttribute('aria-hidden', 'false');
    if (closeBtn) closeBtn.focus();
  };

  const closeLightbox = () => {
    dialog.removeAttribute('open');
    dialog.setAttribute('aria-hidden', 'true');
    if (lastTriggerEl && typeof lastTriggerEl.focus === 'function') {
      lastTriggerEl.focus();
    }
  };

  document.querySelectorAll('[data-open-work]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const workId = btn.getAttribute('data-open-work') || '';
      openLightbox(workId, btn);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => renderLightboxSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => renderLightboxSlide(currentIndex + 1));

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!dialog.hasAttribute('open')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      renderLightboxSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      renderLightboxSlide(currentIndex - 1);
    }
  });
}

/**
 * Section Active Nav Highlight via IntersectionObserver
 */
function initScrollReveal() {
  if (typeof IntersectionObserver === 'undefined') return;

  const navLinks = Array.from(document.querySelectorAll('.primary-nav .nav-link[href^="#"]'));
  if (navLinks.length === 0) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        if (!id) return;
        navLinks.forEach((link) => {
          const isMatch = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('is-active', isMatch);
        });
      });
    },
    { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
  );

  document.querySelectorAll('main section[id]').forEach((sec) => {
    sectionObserver.observe(sec);
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
