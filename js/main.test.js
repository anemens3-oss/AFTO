import test from "node:test";
import assert from "node:assert/strict";
import {
  clampSliderPercentage,
  computePointerPercentage,
  calculateScrollStage,
  filterGalleryByCategory,
  buildBranchContactLinks,
  BEFORE_AFTER_CASES,
  GALLERY_CASES,
} from "./main.js";

test("clampSliderPercentage clamps values to [0, 100] and handles invalid input", () => {
  assert.equal(clampSliderPercentage(50), 50);
  assert.equal(clampSliderPercentage(-15), 0);
  assert.equal(clampSliderPercentage(125), 100);
  assert.equal(clampSliderPercentage("33.34"), 33.3);
  assert.equal(clampSliderPercentage("invalid"), 50);
});

test("computePointerPercentage maps clientX within bounding box accurately", () => {
  assert.equal(computePointerPercentage(300, 100, 400), 50);
  assert.equal(computePointerPercentage(100, 100, 400), 0);
  assert.equal(computePointerPercentage(500, 100, 400), 100);
  assert.equal(computePointerPercentage(200, 100, 0), 50);
});

test("calculateScrollStage transitions cleanly across all 4 Dodge Challenger stages", () => {
  const s0 = calculateScrollStage(1000, 900, 1000, 3000);
  assert.equal(s0.stageIndex, 0);
  assert.equal(s0.layer, "front");

  const s1 = calculateScrollStage(1650, 900, 1000, 3000);
  assert.equal(s1.stageIndex, 1);
  assert.equal(s1.blueprintOpacity, 0.95);

  const s2 = calculateScrollStage(2200, 900, 1000, 3000);
  assert.equal(s2.stageIndex, 2);
  assert.equal(s2.layer, "macro");

  const s3 = calculateScrollStage(2900, 900, 1000, 3000);
  assert.equal(s3.stageIndex, 3);
  assert.equal(s3.layer, "finale");
});

test("filterGalleryByCategory returns matching real work cases", () => {
  const sample = [
    { id: "audi-q3", categories: "collision stapel" },
    { id: "full-suv-paint", categories: "paint" },
    { id: "bumper-pp", categories: "bumper paint" },
  ];
  assert.deepEqual(filterGalleryByCategory(sample, "all"), ["audi-q3", "full-suv-paint", "bumper-pp"]);
  assert.deepEqual(filterGalleryByCategory(sample, "stapel"), ["audi-q3"]);
  assert.deepEqual(filterGalleryByCategory(sample, "paint"), ["full-suv-paint", "bumper-pp"]);
  assert.deepEqual(filterGalleryByCategory(sample, "bumper"), ["bumper-pp"]);
});

test("buildBranchContactLinks formats verified ATCenter branch phone numbers", () => {
  const zhulebino = buildBranchContactLinks("+7 (966) 109-03-89");
  assert.equal(zhulebino.telHref, "tel:+79661090389");
  assert.equal(zhulebino.whatsappHref, "https://wa.me/79661090389");
  assert.equal(zhulebino.telegramHref, "https://t.me/+79661090389");

  const kozhukhovskaya = buildBranchContactLinks("8 (915) 428-79-89");
  assert.equal(kozhukhovskaya.telHref, "tel:+79154287989");
  assert.equal(kozhukhovskaya.whatsappHref, "https://wa.me/79154287989");
});

test("all Before/After and Gallery image paths use relative assets/images/ paths", () => {
  for (const item of BEFORE_AFTER_CASES) {
    assert.ok(item.beforeImg.startsWith("assets/images/"), `Invalid beforeImg path: ${item.beforeImg}`);
    assert.ok(item.afterImg.startsWith("assets/images/"), `Invalid afterImg path: ${item.afterImg}`);
  }
  for (const [caseId, data] of Object.entries(GALLERY_CASES)) {
    assert.ok(data.photos.length >= 2, `Case ${caseId} must have at least 2 photos`);
    for (const p of data.photos) {
      assert.ok(p.src.startsWith("assets/images/"), `Invalid gallery photo path: ${p.src}`);
    }
  }
});
