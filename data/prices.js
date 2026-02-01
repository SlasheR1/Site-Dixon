// Цены по сериям Samsung — DIXON SC
// Серия определяется по началу названия модели

const PRICE_DATA = [
  { model: "A01 Core SM-A013F", display: 3500, battery: 3700, back: 1900 },
  { model: "A01 SM-A015F", display: 5300, battery: 4400, back: 2400 },
  { model: "A02 SM-A022G/DS", display: 4900, battery: 3900, back: 2000 },
  { model: "A02s SM-A025F", display: 3900, battery: 4700, back: 2500 },
  { model: "A03 Core SM-A032F", display: 4800, battery: 4500, back: 2500 },
  { model: "A03s SM-A037F", display: 4900, battery: 4800, back: 2300 },
  { model: "A05 SM-A055F", display: 4900, battery: 4400, back: 2100 },
  { model: "A05s SM-A057F", display: 4900, battery: 4500, back: 2000 },
  { model: "A10 SM-A105F", display: 7100, battery: 4200, back: 2500 },
  { model: "A11 SM-A115F", display: 4500, battery: 4900, back: 2600 },
  { model: "A12 Nacho SM-A127F", display: 4600, battery: 4200, back: 2500 },
  { model: "A12 SM-A125F", display: 4700, battery: 4200, back: 2500 },
  { model: "A13 SM-A135F", display: 4900, battery: 4200, back: 2300 },
  { model: "A14 SM-A145F", display: 5200, battery: 4200, back: 2000 },
  { model: "A15 SM-A155F/DSN", display: 4800, battery: 4200, back: 2100 },
  { model: "A16 SM-A165F/DSN", display: 5100, battery: null, back: null },
  { model: "A20 SM-A205F", display: 5800, battery: 4600, back: 2500 },
  { model: "A20S SM-A207F", display: 6600, battery: 5100, back: null },
  { model: "A21S SM-A217F", display: 5500, battery: 4200, back: 2500 },
  { model: "A22 SM-A225F/DSN", display: 5100, battery: 4500, back: 2500 },
  { model: "A23 SM-A235F/DSN", display: 4900, battery: null, back: null },
  { model: "A24 SM-A245F/DSN", display: 6700, battery: 4900, back: 2200 },
  { model: "A25 SM-A256E/DSN", display: 8200, battery: 4400, back: 2200 },
  { model: "A30 SM-A305FN", display: 6100, battery: 4600, back: 2800 },
  { model: "A30S SM-A307FN", display: 5700, battery: 4600, back: 2900 },
  { model: "A31 SM-A315F", display: 6500, battery: 4500, back: 2400 },
  { model: "A32 SM-A325F", display: 7900, battery: 3600, back: 2500 },
  { model: "A33 5G SM-A336B", display: 7500, battery: 4800, back: 2500 },
  { model: "A34 5G SM-A346E (без рамы)", display: 7500, battery: 4800, back: 2600 },
  { model: "A34 5G SM-A346E (с рамой)", display: 8700, battery: 4800, back: 2600 },
  { model: "A35 SM-A356E/DS", display: 8200, battery: 4600, back: 2600 },
  { model: "A40 SM-A405F", display: 5800, battery: 4300, back: 2600 },
  { model: "A41 SM-A415F", display: 6100, battery: 4500, back: 2600 },
  { model: "A50 SM-A505F", display: 6900, battery: 4900, back: 2800 },
  { model: "A51 SM-A515F", display: 6950, battery: 4500, back: 2500 },
  { model: "A52 SM-A525F", display: 8600, battery: 5000, back: 2700 },
  { model: "A53 5G SM-A536E", display: 9000, battery: 5500, back: 3000 },
  { model: "A54 5G SM-A546E", display: 9000, battery: 5500, back: 3200 },
  { model: "A55 SM-A556E/DS (без рамы)", display: 8900, battery: 5200, back: 3200 },
  { model: "A55 SM-A556E/DS (с рамой)", display: 12300, battery: 5200, back: 3200 },
  { model: "A6+ SM-A5605F (с рамой)", display: 6700, battery: 4700, back: 3200 },
  { model: "A70 SM-A705F", display: 8800, battery: 4700, back: 2600 },
  { model: "A71 SM-A715F", display: 9300, battery: 5100, back: 2600 },
  { model: "A72 SM-A725F", display: 8500, battery: 5200, back: 2800 },
  { model: "A73 SM-A736F", display: 7500, battery: 4500, back: 3500 },
  { model: "M01 SM-M015F", display: 5800, battery: 5100, back: 2200 },
  { model: "M11 SM-M115F", display: 6400, battery: 5600, back: 2700 },
  { model: "M12 SM-M127F/DSN", display: 5200, battery: 4400, back: 2500 },
  { model: "M21 SM-M215F", display: 6700, battery: 5200, back: 2500 },
  { model: "M30s SM-M307FN", display: 5200, battery: 5200, back: 2500 },
  { model: "M31 SM-M315F", display: 6200, battery: 5200, back: 2500 },
  { model: "M31S SM-M317F", display: 7400, battery: 5400, back: 2500 },
  { model: "M32 SM-M325F", display: 6500, battery: 4900, back: 2500 },
  { model: "M51 SM-M515F", display: 9700, battery: 5500, back: 2500 },
  { model: "M52 5G SM-M526B", display: 9000, battery: 4700, back: 2800 },
  { model: "Note 10 SM-N970F", display: 27300, battery: 5000, back: 4200 },
  { model: "Note 10 SM-N970F (SILVER)", display: 19900, battery: 5000, back: 4600 },
  { model: "Note 10+ SM-N975F", display: 23400, battery: 5200, back: 4300 },
  { model: "Note 20 SM-N980F", display: 16800, battery: 5800, back: null },
  { model: "Note 20 Ultra 256 SM-N985F", display: 22600, battery: 6200, back: 4600 },
  { model: "Note 20 Ultra 512 SM-N986B", display: 22600, battery: 6000, back: 4600 },
  { model: "Note 8 SM-N950F", display: 14900, battery: 4900, back: 4000 },
  { model: "Note 9 SM-N960F", display: 17500, battery: 4800, back: 4300 },
  { model: "S10 SM-G973FD", display: 19600, battery: 4800, back: 4300 },
  { model: "S10+ SM-G975FD", display: 18400, battery: 5100, back: 4200 },
  { model: "S10E SM-G970FD", display: 11200, battery: 4800, back: 4100 },
  { model: "S20 FE SM-G780F", display: 8900, battery: 5200, back: 3200 },
  { model: "S20 SM-G980F", display: 18300, battery: 5600, back: 4400 },
  { model: "S20 Ultra SM-G988B", display: 19800, battery: 6200, back: 4800 },
  { model: "S20+ SM-G985F", display: 18700, battery: 5800, back: 4400 },
  { model: "S21 FE 5G SM-G990B", display: 12900, battery: 5000, back: 3100 },
  { model: "S21 Plus SM-G996B", display: 16200, battery: 5500, back: 5500 },
  { model: "S21 SM-G991B", display: 15100, battery: 5200, back: 3600 },
  { model: "S21 Ultra SM-G998B", display: 22000, battery: 6100, back: 5300 },
  { model: "S22 Plus SM-S906B (без рамы)", display: 15800, battery: 6000, back: 4300 },
  { model: "S22 SM-S901B (с рамой)", display: 15600, battery: 5200, back: 4200 },
  { model: "S22 Ultra SM-S908B (с рамой)", display: 22000, battery: 6000, back: 5300 },
  { model: "S23 FE SM-S711B/DS (без рамы)", display: 9200, battery: 5500, back: 3600 },
  { model: "S23 Plus SM-S916B/DS (с рамой)", display: 16600, battery: 5700, back: 4700 },
  { model: "S23 SM-S911B/DS (с рамой)", display: 16500, battery: 5500, back: 4600 },
  { model: "S23 Ultra SM-S918B/DS (без рамы)", display: 18000, battery: 5800, back: 6200 },
  { model: "S23 Ultra SM-S918B/DS (с рамой)", display: 22000, battery: 5800, back: 6200 },
  { model: "S24 SM-S921B/DS (без рамы)", display: 12400, battery: 6400, back: 4800 },
  { model: "S24 SM-S921B/DS (с рамой)", display: 16200, battery: 6400, back: 4800 },
  { model: "S24 FE SM-S721B/DS (без рамы)", display: 8000, battery: 5800, back: 4200 },
  { model: "S24 FE SM-S721B/DS (с рамой)", display: 11000, battery: 5800, back: 4200 },
  { model: "S24 Plus SM-S926B/DS (без рамы)", display: 15000, battery: 6200, back: 4800 },
  { model: "S24 Ultra SM-S928B/DS (без рамы)", display: 20500, battery: 6200, back: 5400 },
  { model: "S25 SM-S931B/DS Dark Blue (без рамы)", display: 12000, battery: 6500, back: 5500 },
  { model: "S25 SM-S931B/DS Dark Blue (с рамой)", display: 16500, battery: 6500, back: 5500 },
  { model: "S25+ SM-S936B/DS Dark Blue (без рамы)", display: 20200, battery: 7200, back: 5300 },
  { model: "S25 Ultra SM-S938B/DS Black (без рамы)", display: 20500, battery: 7400, back: 5800 },
  { model: "S6 Edge SM-G925F", display: null, battery: 4000, back: null },
  { model: "S7 Edge SM-G935FD", display: 12900, battery: 5200, back: 4300 },
  { model: "S7 SM-G930FD", display: 6400, battery: 4900, back: 3800 },
  { model: "S8 SM-G950FD", display: 12400, battery: 4800, back: 3800 },
  { model: "S8+ SM-G955FD", display: 12600, battery: 5500, back: 3900 },
  { model: "S9 SM-G960FD", display: 13000, battery: 5200, back: 4000 },
  { model: "S9+ SM-G965FD", display: 14000, battery: 5400, back: 4100 },
  { model: "Tab S9 FE + SM-X616B", display: 16300, battery: 8100, back: 9800 },
  { model: "Tab S9 FE 5G SM-X516B", display: 14600, battery: 7300, back: 9800 },
  { model: "Tab S9 SM-X716B", display: 19900, battery: 7800, back: 11700 },
  { model: "Z Flip 3 SM-F711B", display: 28000, battery: "9900 (замена двух АКБ)", back: 4300 },
  { model: "Z Flip 4 SM-F721B", display: 33800, battery: "9900 (замена двух АКБ)", back: 4800 },
  { model: "Z Flip 5 SM-F731B Beige", display: 30200, battery: "9900 (замена двух АКБ)", back: 4600 },
  { model: "Z Flip 5 SM-F731B Light Pink", display: 30200, battery: "9900 (замена двух АКБ)", back: 4600 },
  { model: "Z Flip 5 SM-F731B Lime Green", display: 30200, battery: "9900 (замена двух АКБ)", back: 4600 },
  { model: "Z Flip 5 SM-F731B Gray", display: 30200, battery: "9900 (замена двух АКБ)", back: 4600 },
  { model: "Z Flip 6 SM-F741B", display: 30300, battery: "10500 (замена двух АКБ)", back: 4800 },
  { model: "Z Fold 2 SM-F916B", display: 74900, battery: "9900 (замена двух АКБ)", back: 5800 },
  { model: "Z Fold 3 SM-F926B", display: 56600, battery: "9900 (замена двух АКБ)", back: 6000 },
  { model: "Z Fold 4 SM-F936B/DS", display: 52500, battery: "9900 (замена двух АКБ)", back: 5900 },
  { model: "Z Fold 5 SM-F946B/DS", display: 55800, battery: "9900 (замена двух АКБ)", back: 6000 },
  { model: "Z Fold 6 SM-F956B", display: 49990, battery: "9900 (замена двух АКБ)", back: 6200 },
  { model: "Z Fold 7 SM-F966B", display: 59900, battery: "замена двух АКБ", back: null },
];

// Определяем серию по названию модели
function getSeries(modelName) {
  if (/^A\d/i.test(modelName)) return "A";
  if (/^M\d/i.test(modelName)) return "M";
  if (/^Note\s/i.test(modelName)) return "Note";
  if (/^S\d|^S2[0-5]/i.test(modelName)) return "S";
  if (/^Tab\s/i.test(modelName)) return "Tab";
  if (/^Z Flip/i.test(modelName)) return "Z Flip";
  if (/^Z Fold/i.test(modelName)) return "Z Fold";
  return "Other";
}

// Группировка по сериям для UI
const SERIES_ORDER = ["A", "M", "Note", "S", "Tab", "Z Flip", "Z Fold"];
const SERIES_LABELS = {
  "A": "Серия A",
  "M": "Серия M",
  "Note": "Galaxy Note",
  "S": "Серия S",
  "Tab": "Galaxy Tab",
  "Z Flip": "Z Flip",
  "Z Fold": "Z Fold",
};

function getPricesBySeries() {
  // Данные из админки (localStorage) приоритетнее — их подставляет app.js в window.PRICE_DATA
  const data = (typeof window !== 'undefined' && window.PRICE_DATA && Array.isArray(window.PRICE_DATA))
    ? window.PRICE_DATA
    : PRICE_DATA;
  const bySeries = {};
  data.forEach((row) => {
    const s = getSeries(row.model);
    if (!bySeries[s]) bySeries[s] = [];
    bySeries[s].push(row);
  });
  return bySeries;
}
