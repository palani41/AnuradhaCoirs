// CUSTOM GOOGLE TRANSLATE WITH SEARCH & FLAGS

(function () {
  // Mapping of Google Translate language codes to flag codes (for FlagCDN)
  const languageFlags = {
    'en': 'us',
    'ta': 'in',
    'hi': 'in',
    'ar': 'sa',
    'zh-CN': 'cn',
    'zh-TW': 'tw',
    'fr': 'fr',
    'de': 'de',
    'es': 'es',
    'it': 'it',
    'ja': 'jp',
    'ko': 'kr',
    'nl': 'nl',
    'pt': 'pt',
    'ru': 'ru',
    'tr': 'tr',
    'vi': 'vn',
    'pl': 'pl',
    'th': 'th',
    'sv': 'se',
    'ms': 'my',
    'bn': 'bd',
    'id': 'id',
    'da': 'dk',
    'fi': 'fi',
    'el': 'gr',
    'iw': 'il',
    'he': 'il',
    'no': 'no',
    'uk': 'ua',
    'cs': 'cz',
    'ro': 'ro',
    'hu': 'hu',
    'fa': 'ir',
    'sk': 'sk',
    'bg': 'bg',
    'hr': 'hr',
    'lt': 'lt',
    'lv': 'lv',
    'sl': 'si',
    'et': 'ee'
  };

  // Fallback flag URL (globe icon)
  const fallbackFlagUrl = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23032f2f" class="bi bi-globe" viewBox="0 0 16 16"%3E%3Cpath d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.424-1.248 1.05-1.67 1.832H7.5zM6.13 4.1a5 5 0 0 0-.53 1.68h1.39zm-1.8 1.68a6 6 0 0 1 .502-1.832c-.52.562-.9 1.258-1.077 2.015h.575zm-.575 1.06h1.076a5 5 0 0 0 .53 1.68H4.33a6 6 0 0 1-.502-1.832zM7.5 8.5H6.13a5 5 0 0 0 .53 1.68h.84zm0 2.74h-1.67a6 6 0 0 1 1.67-1.832zm.5-9.163v1.832h1.67a6 6 0 0 0-1.67-1.832m1.112 1.832A5 5 0 0 1 9.87 4.1h-1.39zm1.218 0c.177.757.557 1.453 1.077 2.015h-.575a6 6 0 0 0-.502-1.832M11.67 5.78a5 5 0 0 1-.53 1.68h-1.39V5.78zM9.87 8.5a5 5 0 0 1-.53 1.68H7.5V8.5zm1.8-1.68a6 6 0 0 1-.502 1.832c.52-.562.9-1.258 1.077-2.015zm-.502 2.892a5 5 0 0 1 .53-1.68h1.39v1.68zm-1.218 0H8.5V9.72h1.39a5 5 0 0 1 .53 1.68zM8.5 12.603V10.78h1.67a6 6 0 0 1-1.67 1.832M13.67 8c0 .757-.08 1.493-.232 2.202h-.575c.177-.757.257-1.493.257-2.202s-.08-1.445-.257-2.202h.575c.152.709.232 1.445.232 2.202M2.33 8c0-.757.08-1.493.232-2.202h.575c-.177.757-.257 1.493-.257 2.202s.08 1.445.257 2.202h-.575C2.41 9.493 2.33 8.757 2.33 8"/%3E%3C/svg%3E';

  // Helper to read cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // Get flag image URL for a given language code
  function getFlagUrl(code) {
    const flag = languageFlags[code];
    if (flag) {
      return `https://flagcdn.com/w20/${flag}.png`;
    }
    return fallbackFlagUrl;
  }

  // Build the custom dropdown UI
  function buildCustomDropdown(combo, container) {
    // Check if we already built it
    if (container.querySelector('.custom-translate-dropdown')) return;

    // Retrieve initial language from cookie/combo
    let activeLangCode = 'en';
    const googtrans = getCookie('googtrans');
    if (googtrans) {
      const parts = googtrans.split('/');
      if (parts.length > 2) {
        activeLangCode = parts[parts.length - 1];
      }
    } else if (combo.value) {
      activeLangCode = combo.value;
    }

    // Prepare list of languages from the original Google combo options
    const options = Array.from(combo.options);
    const languagesList = [];

    options.forEach(opt => {
      // Skip placeholder/empty option
      if (!opt.value) return;
      
      let langName = opt.text;
      // Clean up language names if necessary
      if (langName.toLowerCase() === 'select language') return;

      languagesList.push({
        code: opt.value,
        name: langName
      });
    });

    // If English is not in the options (sometimes it isn't, as it's the page language)
    // we make sure English is available as the reset translation option
    if (!languagesList.some(l => l.code === 'en')) {
      languagesList.unshift({ code: 'en', name: 'English' });
    }

    // Sort languages alphabetically
    languagesList.sort((a, b) => a.name.localeCompare(b.name));

    // Find active language object
    let activeLang = languagesList.find(l => l.code === activeLangCode) || { code: 'en', name: 'English' };

    // Create custom dropdown HTML elements
    const dropdownWrap = document.createElement('div');
    dropdownWrap.className = 'custom-translate-dropdown';

    const btn = document.createElement('button');
    btn.className = 'custom-translate-btn';
    btn.type = 'button';
    
    const activeFlagImg = document.createElement('img');
    activeFlagImg.className = 'btn-flag';
    activeFlagImg.src = getFlagUrl(activeLang.code);
    activeFlagImg.alt = activeLang.name;
    // Handle loading errors for flags
    activeFlagImg.onerror = () => { activeFlagImg.src = fallbackFlagUrl; };

    const btnText = document.createElement('span');
    btnText.className = 'btn-text';
    btnText.textContent = activeLang.name;

    const chevron = document.createElement('i');
    chevron.className = 'bi bi-chevron-down chevron-icon';

    btn.appendChild(activeFlagImg);
    btn.appendChild(btnText);
    btn.appendChild(chevron);

    const menu = document.createElement('div');
    menu.className = 'custom-translate-menu';

    const searchWrap = document.createElement('div');
    searchWrap.className = 'custom-translate-search-wrap';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'custom-translate-search';
    searchInput.placeholder = 'Search language...';

    searchWrap.appendChild(searchInput);
    menu.appendChild(searchWrap);

    const listUl = document.createElement('ul');
    listUl.className = 'custom-translate-list';

    languagesList.forEach(lang => {
      const li = document.createElement('li');
      li.setAttribute('data-lang', lang.code);
      if (lang.code === activeLang.code) {
        li.className = 'active';
      }

      const flagImg = document.createElement('img');
      flagImg.className = 'list-flag';
      flagImg.src = getFlagUrl(lang.code);
      flagImg.alt = lang.name;
      flagImg.onerror = () => { flagImg.src = fallbackFlagUrl; };

      const nameSpan = document.createElement('span');
      nameSpan.textContent = lang.name;

      li.appendChild(flagImg);
      li.appendChild(nameSpan);
      listUl.appendChild(li);

      // List item click handler
      li.addEventListener('click', () => {
        // Update combo and trigger change event
        combo.value = lang.code;
        // Trigger both standard change and jQuery change if available
        combo.dispatchEvent(new Event('change', { bubbles: true }));
        if (window.jQuery) {
          jQuery(combo).change();
        }

        // Update UI
        activeFlagImg.src = getFlagUrl(lang.code);
        btnText.textContent = lang.name;
        
        // Mark active item
        menu.querySelectorAll('li').forEach(item => item.classList.remove('active'));
        li.className = 'active';

        // Close menu
        menu.classList.remove('show');
        dropdownWrap.classList.remove('open');
        searchInput.value = '';
        // Reset list visibility
        listUl.querySelectorAll('li').forEach(item => item.style.display = 'flex');
      });
    });

    menu.appendChild(listUl);
    dropdownWrap.appendChild(btn);
    dropdownWrap.appendChild(menu);

    // Append dropdown to nav-item (insert it before or in place of google_translate_element)
    container.parentNode.insertBefore(dropdownWrap, container);

    // Toggle menu visibility
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('show');
      
      // Close any other menus if open, though we only have one
      menu.classList.toggle('show');
      dropdownWrap.classList.toggle('open');
      
      if (!isOpen) {
        searchInput.focus();
      }
    });

    // Search input filter logic
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = listUl.querySelectorAll('li');

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!dropdownWrap.contains(e.target)) {
        menu.classList.remove('show');
        dropdownWrap.classList.remove('open');
      }
    });
  }

  // Initialize monitoring
  function init() {
    let checkInterval = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo');
      const container = document.getElementById('google_translate_element');
      
      if (combo && container && combo.options && combo.options.length > 1) {
        clearInterval(checkInterval);
        buildCustomDropdown(combo, container);
      }
    }, 150);

    // Clear interval after 15 seconds to prevent memory leak if google translate fails to load
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 15000);
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
