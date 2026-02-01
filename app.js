(function () {
  'use strict';

  // ——— Бургер-меню ———
  var burger = document.querySelector('.burger');
  var navMobile = document.querySelector('.nav-mobile');
  if (burger && navMobile) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      navMobile.classList.toggle('open');
      document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
    });
    navMobile.querySelectorAll('.nav-mobile__link').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('active');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ——— Скрытие хедера при скролле вниз ———
  var header = document.querySelector('.header');
  var lastScroll = 0;
  if (header) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 80) {
        if (y > lastScroll) header.classList.add('hidden');
        else header.classList.remove('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScroll = y;
    }, { passive: true });
  }

  // ——— Цены: табы серий и таблица ———
  if (typeof PRICE_DATA === 'undefined' || typeof getPricesBySeries === 'undefined') return;

  var bySeries = getPricesBySeries();
  var tabsContainer = document.querySelector('.prices__tabs');
  var tbody = document.querySelector('.prices-table tbody');

  function formatPrice(val) {
    if (val == null || val === '') return null;
    if (typeof val === 'string') return val;
    return val.toLocaleString('ru-RU') + ' ₽';
  }

  function renderTable(seriesKey) {
    var rows = bySeries[seriesKey] || [];
    tbody.innerHTML = rows
      .map(function (row, i) {
        var display = formatPrice(row.display);
        var battery = formatPrice(row.battery);
        var back = formatPrice(row.back);
        return (
          '<tr class="prices-table__row" style="animation: fadeIn 0.4s ease ' +
          (i * 0.02) +
          's backwards">' +
          '<td>' + escapeHtml(row.model) + '</td>' +
          '<td>' + (display != null ? display : '<span class="price-empty">—</span>') + '</td>' +
          '<td>' + (battery != null ? battery : '<span class="price-empty">—</span>') + '</td>' +
          '<td>' + (back != null ? back : '<span class="price-empty">—</span>') + '</td>' +
          '</tr>'
        );
      })
      .join('');
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  SERIES_ORDER.forEach(function (key) {
    if (!bySeries[key] || bySeries[key].length === 0) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'prices__tab' + (tabsContainer.children.length === 0 ? ' active' : '');
    btn.setAttribute('role', 'tab');
    btn.textContent = SERIES_LABELS[key] || key;
    btn.addEventListener('click', function () {
      document.querySelectorAll('.prices__tabs .prices__tab').forEach(function (t) {
        t.classList.remove('active');
      });
      btn.classList.add('active');
      renderTable(key);
    });
    tabsContainer.appendChild(btn);
  });

  var firstSeries = SERIES_ORDER.find(function (key) {
    return bySeries[key] && bySeries[key].length > 0;
  });
  if (firstSeries) renderTable(firstSeries);

  // ——— Плавное появление блоков при скролле ———
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fault-card, .adv-card, .section-title').forEach(function (el) {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
})();
