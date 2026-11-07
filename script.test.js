import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatRubles,
  formatPhoneTelLink,
  filterServiceCategories,
  filterPriceItems,
  calculateEstimateTotal,
  getLightboxItemByIndex,
  PORTFOLIO_WORKS,
} from './script.js';

test('formatRubles formats confirmed Russian Ruble amounts with space thousand separators', () => {
  assert.equal(formatRubles(650, true), 'от 650 ₽');
  assert.equal(formatRubles(1080, true), 'от 1 080 ₽');
  assert.equal(formatRubles(16000, false), '16 000 ₽');
  assert.equal(formatRubles(0, true), 'По запросу');
});

test('formatPhoneTelLink normalizes official AFTO-service phone to tel:+74951509003', () => {
  assert.equal(formatPhoneTelLink('+7 (495) 150-90-03'), 'tel:+74951509003');
  assert.equal(formatPhoneTelLink('8 (495) 150-90-03'), 'tel:+74951509003');
});

test('filterServiceCategories filters the 12 service categories by department and search keyword', () => {
  const sampleCategories = [
    { id: 'cat-01', dept: 'mechanical', title: 'Техническое обслуживание', keywords: 'масло фильтры свечи ТО' },
    { id: 'cat-02', dept: 'diagnostics', title: 'Диагностика', keywords: 'компьютерная диагностика ЭБУ коды' },
    { id: 'cat-09', dept: 'bodywork', title: 'Кузовной ремонт и покраска', keywords: 'стапель покраска 46G 46V PDR' },
  ];

  assert.deepEqual(filterServiceCategories(sampleCategories, 'all', ''), ['cat-01', 'cat-02', 'cat-09']);
  assert.deepEqual(filterServiceCategories(sampleCategories, 'bodywork', ''), ['cat-09']);
  assert.deepEqual(filterServiceCategories(sampleCategories, 'all', 'ЭБУ'), ['cat-02']);
});

test('filterPriceItems filters confirmed price list entries by category and search query', () => {
  const samplePrices = [
    { id: 'p1', category: 'to', name: 'Замена масла в ДВС', priceFrom: 650 },
    { id: 'p2', category: 'brakes', name: 'Замена тормозных колодок', priceFrom: 1080 },
    { id: 'p3', category: 'engine', name: 'Замена ремня ГРМ с роликами', priceFrom: 5500 },
  ];

  assert.equal(filterPriceItems(samplePrices, 'all', '').length, 3);
  assert.equal(filterPriceItems(samplePrices, 'brakes', '').length, 1);
  assert.equal(filterPriceItems(samplePrices, 'all', 'грм')[0].id, 'p3');
});

test('calculateEstimateTotal sums selected price items accurately', () => {
  const empty = calculateEstimateTotal([]);
  assert.equal(empty.count, 0);
  assert.equal(empty.totalFrom, 0);

  const selected = calculateEstimateTotal([
    { id: 'p1', name: 'Замена масла в ДВС', priceFrom: 650 },
    { id: 'p2', name: 'Замена тормозных колодок', priceFrom: 1080 },
    { id: 'p3', name: 'Регулировка сход-развала 3D', priceFrom: 6500 },
  ]);
  assert.equal(selected.count, 3);
  assert.equal(selected.totalFrom, 8230);
  assert.equal(selected.formattedTotal, 'от 8 230 ₽');
});

test('getLightboxItemByIndex wraps around portfolio works and uses relative asset paths', () => {
  assert.ok(PORTFOLIO_WORKS.length >= 6);
  for (const work of PORTFOLIO_WORKS) {
    assert.ok(
      work.image.startsWith('assets/images/'),
      `Expected relative path starting with assets/images/, got ${work.image}`
    );
  }
  const first = getLightboxItemByIndex(PORTFOLIO_WORKS, 0);
  assert.equal(first.index, 0);
  const wrappedPrev = getLightboxItemByIndex(PORTFOLIO_WORKS, -1);
  assert.equal(wrappedPrev.index, PORTFOLIO_WORKS.length - 1);
});
