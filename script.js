(function(){
  let sections, navButtons, indicator, year, modal, modalBody, modalClose;
  
  // Project data
  const projects = {
    'compute-marketplace': {
      title: 'Decentralized Compute Marketplace',
      description: 'A full-stack decentralized marketplace for compute resources where requesters can submit jobs and providers execute them using Docker containers, with payments handled through Ethereum smart contracts.',
      content: `
        <h1>Decentralized Compute Marketplace</h1>
        
        <div class="architecture-diagram">
          <img src="images/compute-marketplace-diagram.svg" alt="Architecture Diagram">
        </div>
        
        <h2>Overview</h2>
        <p>A comprehensive Web3 platform that enables distributed computing through a decentralized marketplace. Users can submit compute jobs, and providers execute them in isolated Docker containers with automatic payment processing through Ethereum smart contracts.</p>
        
        <h2>Architecture</h2>
        <p>The system consists of four main components working together to create a complete job lifecycle:</p>
        
        <div class="features">
          <div class="feature-item">
            <h4>Smart Contract</h4>
            <p>Ethereum-based escrow system handling secure payments and job funding</p>
          </div>
          <div class="feature-item">
            <h4>Coordinator</h4>
            <p>RESTful API service managing job lifecycle and provider matching</p>
          </div>
          <div class="feature-item">
            <h4>CLI Interface</h4>
            <p>Command-line tool for requesters to create, fund, and manage jobs</p>
          </div>
          <div class="feature-item">
            <h4>Provider Agent</h4>
            <p>Go-based service that polls for jobs and executes them in Docker containers</p>
          </div>
        </div>
        
        <h2>Job Lifecycle</h2>
        <p>The complete workflow from job creation to payment release:</p>
        <ul>
          <li><span class="highlight">CREATED</span> - Job submitted via CLI with specifications</li>
          <li><span class="highlight">FUNDED</span> - Requester deposits ETH into escrow contract</li>
          <li><span class="highlight">MATCHED</span> - Coordinator assigns job to available provider</li>
          <li><span class="highlight">RUNNING</span> - Provider agent executes job in Docker container</li>
          <li><span class="highlight">RESULT_SUBMITTED</span> - Provider submits results with SHA-256 verification</li>
          <li><span class="highlight">ACCEPTED</span> - Requester accepts results, payment released to provider</li>
        </ul>
        
        <h2>Key Features</h2>
        <ul>
          <li><strong>Smart Contract Escrow:</strong> Secure payment handling with automatic release mechanisms</li>
          <li><strong>Docker Isolation:</strong> Jobs run in isolated containers with resource limits</li>
          <li><strong>SHA-256 Verification:</strong> Cryptographic verification of job outputs</li>
          <li><strong>RESTful API:</strong> Complete job management through HTTP endpoints</li>
          <li><strong>CLI Interface:</strong> User-friendly command-line tool for job operations</li>
          <li><strong>Automated Execution:</strong> Provider agents automatically poll and execute jobs</li>
        </ul>
        
        <h2>Technical Implementation</h2>
        <p>Built with a modern tech stack emphasizing security, scalability, and developer experience:</p>
        
        <div class="tech-stack">
          <span class="tag">Solidity</span>
          <span class="tag">Foundry</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Node.js</span>
          <span class="tag">Express.js</span>
          <span class="tag">SQLite</span>
          <span class="tag">Go</span>
          <span class="tag">Docker</span>
          <span class="tag">Ethereum</span>
          <span class="tag">Ethers.js</span>
          <span class="tag">Zod</span>
        </div>
        
        <h2>Security Considerations</h2>
        <p>This MVP implements foundational security measures while acknowledging areas for production enhancement:</p>
        <ul>
          <li>Smart contract escrow prevents payment disputes</li>
          <li>Docker container isolation protects host systems</li>
          <li>SHA-256 hash verification ensures output integrity</li>
          <li>Input validation through Zod schemas</li>
          <li>Capability dropping and network restrictions in containers</li>
        </ul>
        
        <h2>Development Process</h2>
        <p>The project demonstrates full-stack development capabilities across multiple technologies:</p>
        <ul>
          <li>Smart contract development with comprehensive testing</li>
          <li>RESTful API design with proper error handling</li>
          <li>CLI tool development with user-friendly interfaces</li>
          <li>Container orchestration and security implementation</li>
          <li>Cross-language integration (Solidity, TypeScript, Go)</li>
        </ul>
      `,
      techStack: ['Solidity', 'TypeScript', 'Go', 'Docker', 'Ethereum', 'Node.js']
    },
    'portfolio-site': {
      title: 'Portfolio Website',
      description: 'A minimal, fast-loading single-page portfolio built with vanilla HTML/CSS/JS—no frameworks, no bloat.',
      content: `
        <h1>Portfolio Website</h1>
        
        <h2>Overview</h2>
        <p>A clean, minimal portfolio website designed for speed and simplicity. Built entirely with vanilla web technologies to demonstrate core frontend development skills without framework dependencies.</p>
        
        <h2>Design Philosophy</h2>
        <p>This site embodies the principle of "less is more" - intentionally minimal and fast, reflecting how I approach engineering problems. Every element serves a purpose, and there's no unnecessary complexity.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li><strong>Single Page Application:</strong> Smooth navigation between sections without page reloads</li>
          <li><strong>Dark Theme:</strong> Professional dark color scheme optimized for readability</li>
          <li><strong>Responsive Design:</strong> Adapts seamlessly across desktop and mobile devices</li>
          <li><strong>Fast Loading:</strong> Minimal dependencies and optimized assets</li>
          <li><strong>Interactive Elements:</strong> Smooth animations and hover effects</li>
          <li><strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation</li>
        </ul>
        
        <h2>Technical Implementation</h2>
        <p>Built with modern vanilla web technologies:</p>
        
        <div class="tech-stack">
          <span class="tag">HTML5</span>
          <span class="tag">CSS3</span>
          <span class="tag">JavaScript ES6+</span>
          <span class="tag">CSS Grid</span>
          <span class="tag">CSS Flexbox</span>
          <span class="tag">CSS Custom Properties</span>
        </div>
        
        <h2>Performance Optimizations</h2>
        <ul>
          <li>No external frameworks or libraries</li>
          <li>Minimal HTTP requests</li>
          <li>Optimized images and assets</li>
          <li>Efficient CSS with custom properties</li>
          <li>Lightweight JavaScript with modern APIs</li>
        </ul>
        
        <h2>Development Approach</h2>
        <p>This project showcases fundamental web development skills and attention to detail:</p>
        <ul>
          <li>Semantic HTML structure</li>
          <li>Modern CSS layout techniques</li>
          <li>Vanilla JavaScript DOM manipulation</li>
          <li>Progressive enhancement principles</li>
          <li>Cross-browser compatibility</li>
        </ul>
      `,
      techStack: ['HTML', 'CSS', 'JavaScript']
    }
  };
  
  function init(){
    sections = Array.from(document.querySelectorAll('[data-section]'));
    navButtons = Array.from(document.querySelectorAll('[data-nav]'));
    indicator = document.querySelector('.nav .indicator');
    year = document.getElementById('year');
    modal = document.getElementById('project-modal');
    modalBody = document.querySelector('.modal-body');
    modalClose = document.querySelector('.modal-close');

    if(year){ year.textContent = new Date().getFullYear(); }

    // Click handling
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
        const target = btn.getAttribute('data-target') || (href ? href.replace('#','') : 'about');
        if(href && href.startsWith('#')) e.preventDefault();
        activate(target);
      });
    });

    // Project card click handling
    document.querySelectorAll('.card[data-project]').forEach(card => {
      card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
      });
    });

    // Modal close handling
    if(modalClose) {
      modalClose.addEventListener('click', closeModal);
    }
    
    if(modal) {
      modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
      });
    }

    // Keyboard handling
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
        closeModal();
      }
    });

    // Initial setup
    const fromHash = (location.hash || '#about').replace('#','');
    const exists = sections.some(s => s.id === fromHash);
    activate(exists ? fromHash : 'about');
    
    // Delay indicator positioning to avoid layout issues
    requestAnimationFrame(() => {
      moveIndicator();
    });
  }

  function openProjectModal(projectId) {
    const project = projects[projectId];
    if(!project) return;
    
    modalBody.innerHTML = project.content;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    modalClose.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

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

  // Use DOMContentLoaded for faster initialization
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('resize', moveIndicator);
})();


