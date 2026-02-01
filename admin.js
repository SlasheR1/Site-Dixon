(function () {
  'use strict';

  // ——— Логин и пароль (поменяй на свои и не публикуй в открытый доступ) ———
  var ADMIN_LOGIN = 'dixon';
  var ADMIN_PASS = 'dixon2024';

  var loginEl = document.getElementById('admin-login');
  var editorEl = document.getElementById('admin-editor');
  var loginForm = document.getElementById('admin-login-form');
  var loginError = document.getElementById('admin-login-error');

  function checkAuth() {
    if (sessionStorage.getItem('dixon_admin') === '1') {
      loginEl.classList.add('hidden');
      editorEl.classList.add('active');
      initEditor();
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var user = document.getElementById('admin-user').value.trim();
      var pass = document.getElementById('admin-pass').value;
      if (user === ADMIN_LOGIN && pass === ADMIN_PASS) {
        loginError.style.display = 'none';
        sessionStorage.setItem('dixon_admin', '1');
        loginEl.classList.add('hidden');
        editorEl.classList.add('active');
        initEditor();
      } else {
        loginError.style.display = 'block';
      }
    });
  }

  document.getElementById('admin-logout').addEventListener('click', function () {
    sessionStorage.removeItem('dixon_admin');
    location.reload();
  });

  function getData() {
    try {
      var s = localStorage.getItem('dixon_prices');
      if (s) return JSON.parse(s);
    } catch (e) {}
    return PRICE_DATA.map(function (r) {
      return { model: r.model, display: r.display, battery: r.battery, back: r.back };
    });
  }

  function buildBySeriesWithIndex(data) {
    var bySeries = {};
    for (var idx = 0; idx < data.length; idx++) {
      var s = getSeries(data[idx].model);
      if (!bySeries[s]) bySeries[s] = [];
      bySeries[s].push({ model: data[idx].model, display: data[idx].display, battery: data[idx].battery, back: data[idx].back, _i: idx });
    }
    return bySeries;
  }

  function initEditor() {
    var data = getData();
    var bySeries = buildBySeriesWithIndex(data);
    var tabsContainer = document.getElementById('admin-tabs');
    var panelsContainer = document.getElementById('admin-panels');

    tabsContainer.innerHTML = '';
    panelsContainer.innerHTML = '';

    SERIES_ORDER.forEach(function (key) {
      var rows = bySeries[key] || [];
      if (rows.length === 0) return;

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'admin__tab' + (tabsContainer.children.length === 0 ? ' active' : '');
      btn.setAttribute('role', 'tab');
      btn.textContent = SERIES_LABELS[key] || key;
      btn.dataset.series = key;
      tabsContainer.appendChild(btn);

      var panel = document.createElement('div');
      panel.className = 'admin-panel' + (tabsContainer.children.length === 1 ? ' active' : '');
      panel.dataset.series = key;
      panel.innerHTML =
        '<div class="admin-table-wrap">' +
        '<table class="admin-table">' +
        '<thead><tr><th>Модель</th><th>Дисплей</th><th>Аккумулятор</th><th>Задняя крышка</th></tr></thead>' +
        '<tbody id="admin-tbody-' + key + '"></tbody>' +
        '</table></div>';
      panelsContainer.appendChild(panel);

      var tbody = document.getElementById('admin-tbody-' + key);
      rows.forEach(function (row) {
        var tr = document.createElement('tr');
        tr.dataset.index = row._i;
        tr.innerHTML =
          '<td>' + escapeHtml(row.model) + '</td>' +
          '<td><input type="text" data-field="display" value="' + escapeValue(row.display) + '"></td>' +
          '<td><input type="text" data-field="battery" value="' + escapeValue(row.battery) + '"></td>' +
          '<td><input type="text" data-field="back" value="' + escapeValue(row.back) + '"></td>';
        tbody.appendChild(tr);
      });
    });

    tabsContainer.querySelectorAll('.admin__tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabsContainer.querySelectorAll('.admin__tab').forEach(function (t) { t.classList.remove('active'); });
        panelsContainer.querySelectorAll('.admin-panel').forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var panel = panelsContainer.querySelector('.admin-panel[data-series="' + tab.dataset.series + '"]');
        if (panel) panel.classList.add('active');
      });
    });

    document.getElementById('admin-save').onclick = function () {
      var inputs = panelsContainer.querySelectorAll('.admin-table tbody tr');
      inputs.forEach(function (tr) {
        var idx = parseInt(tr.dataset.index, 10);
        var cells = tr.querySelectorAll('input[data-field]');
        cells.forEach(function (input) {
          var field = input.dataset.field;
          var val = input.value.trim();
          if (val === '') {
            data[idx][field] = null;
          } else {
            var num = parseInt(val.replace(/\s+/g, ''), 10);
            data[idx][field] = isNaN(num) ? val : num;
          }
        });
      });
      try {
        localStorage.setItem('dixon_prices', JSON.stringify(data));
        alert('Цены сохранены. Обновите главную страницу (F5), чтобы увидеть изменения.');
      } catch (e) {
        alert('Ошибка сохранения: ' + e.message);
      }
    };

    document.getElementById('admin-reset').onclick = function () {
      if (!confirm('Вернуть все цены из исходного файла? Сохранённые изменения будут удалены.')) return;
      localStorage.removeItem('dixon_prices');
      alert('Сброшено. Обновите страницу.');
      location.reload();
    };
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function escapeValue(v) {
    if (v == null || v === '') return '';
    return escapeHtml(String(v));
  }

  checkAuth();
})();
