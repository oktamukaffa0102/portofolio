// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-button');
const overlay = document.getElementById('mobile-menu-overlay');
const closeBtn = document.getElementById('close-mobile-menu');

function openMobileMenu(){ if(!overlay) return; overlay.classList.remove('hidden'); document.body.style.overflow='hidden'; }
function closeMobileMenu(){ if(!overlay) return; overlay.classList.add('hidden'); document.body.style.overflow=''; }

if(mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
if(closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
if(overlay){ overlay.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeMobileMenu)); }

// Mark active nav based on current path
(function() {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a.nav-link').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href.endsWith(path)) { a.classList.add('nav-active'); }
  });
})();
