/* PNG Events Hub - shared site script
   Each feature only runs if its elements exist on the current page. */
(function () {
    'use strict';

    /* 1. Mobile menu toggle */
    function initNavToggle() {
        var toggle = document.querySelector('.nav-toggle');
        var list = document.getElementById('nav-list');
        if (!toggle || !list) return;

        function setOpen(open) {
            list.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        }

        toggle.addEventListener('click', function () {
            setOpen(toggle.getAttribute('aria-expanded') !== 'true');
        });

        // Close when a link is clicked
        list.addEventListener('click', function (e) {
            if (e.target.closest('a')) setOpen(false);
        });

        // Close with Escape and return focus to the button
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
                setOpen(false);
                toggle.focus();
            }
        });
    }

    /* 2. Hero search: send the term to events.html?q=... */
    function initHeroSearch() {
        var form = document.getElementById('hero-search');
        var input = document.getElementById('hero-q');
        if (!form || !input) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var q = input.value.trim();
            window.location.href = 'events.html' + (q ? '?q=' + encodeURIComponent(q) : '');
        });
    }

    /* 3. Event filtering (used on events.html, safe on other pages)
       Optional elements:
         - input[type="search"] or #event-search  -> keyword search
         - [data-filter] buttons                  -> category filter ("all" shows everything)
         - #no-results                            -> message shown when nothing matches */
    function initEventFilter() {
        var cards = Array.prototype.slice.call(document.querySelectorAll('.event-card'));
        if (!cards.length) return;

        var searchInput = document.getElementById('event-search') ||
            document.querySelector('main input[type="search"]:not(#hero-q)');
        var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
        var noResults = document.getElementById('no-results');

        var params = new URLSearchParams(window.location.search);
        var state = { query: (params.get('q') || '').toLowerCase().trim(), category: 'all' };

        if (searchInput && state.query) searchInput.value = params.get('q');

        function apply() {
            var visible = 0;
            cards.forEach(function (card) {
                var text = card.textContent.toLowerCase();
                var cat = (card.getAttribute('data-category') || '').toLowerCase();
                var matchQuery = !state.query || text.indexOf(state.query) !== -1;
                var matchCat = state.category === 'all' || cat === state.category;
                var show = matchQuery && matchCat;
                card.hidden = !show;
                if (show) visible++;
            });
            if (noResults) noResults.hidden = visible !== 0;
        }

        // Only filter on pages that actually have filter controls or a ?q= term
        if (!searchInput && !buttons.length && !state.query) return;

        if (searchInput) {
            searchInput.addEventListener('input', function () {
                state.query = searchInput.value.toLowerCase().trim();
                apply();
            });
        }

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                state.category = (btn.getAttribute('data-filter') || 'all').toLowerCase();
                buttons.forEach(function (b) {
                    b.setAttribute('aria-pressed', String(b === btn));
                });
                apply();
            });
        });

        apply();
    }

    /* 4. Mark the current page in the nav */
    function initCurrentPage() {
        var page = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#nav-list a').forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === page) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initNavToggle();
        initHeroSearch();
        initEventFilter();
        initCurrentPage();
    });
})();