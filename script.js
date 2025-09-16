(function(){
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const navButtons = Array.from(document.querySelectorAll('[data-nav]'));
  const indicator = document.querySelector('.nav .indicator');
  const year = document.getElementById('year');

  if(year){ year.textContent = new Date().getFullYear(); }

  function activate(targetId){
    sections.forEach(section => {
      const isTarget = section.id === targetId;
      section.toggleAttribute('hidden', !isTarget);
      section.classList.toggle('is-active', isTarget);
    });
    navButtons.forEach(btn => {
      const btnTarget = btn.getAttribute('data-target') || (btn.getAttribute('href') || '').replace('#','');
      btn.setAttribute('aria-current', btnTarget === targetId ? 'page' : 'false');
    });
    moveIndicator();
    const activeSection = document.getElementById(targetId);
    if(activeSection) activeSection.focus({preventScroll:true});
    history.replaceState(null, '', `#${targetId}`);
  }

  function getCurrentNav(){
    return document.querySelector('[data-nav][aria-current="page"]') || document.querySelector('[data-nav][data-target="about"]');
  }

  function moveIndicator(){
    const current = getCurrentNav();
    if(!current || !indicator) return;
    const nav = current.parentElement;
    const rectNav = nav.getBoundingClientRect();
    const rectBtn = current.getBoundingClientRect();
    const indicatorWidth = parseFloat(getComputedStyle(indicator).width);
    const centerX = rectBtn.left - rectNav.left + (rectBtn.width / 2);
    const x = centerX - (indicatorWidth / 2);
    indicator.style.transform = `translateX(${x}px)`;
  }

  // Click handling
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      const target = btn.getAttribute('data-target') || (href ? href.replace('#','') : 'about');
      if(href && href.startsWith('#')) e.preventDefault();
      activate(target);
    });
  });

  // On load, respect hash
  window.addEventListener('load', () => {
    const fromHash = (location.hash || '#about').replace('#','');
    const exists = sections.some(s => s.id === fromHash);
    activate(exists ? fromHash : 'about');
    moveIndicator();
  });

  window.addEventListener('resize', moveIndicator);
})();


