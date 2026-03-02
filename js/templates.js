const CoDHRTemplates = {
    header: (params) => `
<header id="navbar" class="main-header site-header--alt show-for-medium">
    <nav class="utility-nav utility-nav--department">
        <div class="utility-nav__container">
            <div class="site-header__back">
                <a href="https://www.tamu.edu/" target="_blank">
                    <svg>
                        <use href="#aux_arrow-up-right"></use>
                    </svg>
                    Texas A&amp;M University
                </a>
            </div>
            <div class="utility-nav__right">
                <ul class="utility-nav__ctas"></ul>
            </div>
        </div>
    </nav>

    <div class="site-header__identity">
        <div class="identity">
            <a href="/">
                <div class="identity__logo">
                    <img alt="Texas A&amp;M University logo" src="https://aux.tamu.edu/logos/boxTAM.svg" />
                </div>
                <div class="identity__wordmark">
                    <span class="wordmark__small">Texas A&amp;M University</span>
                    <span class="wordmark__large">Center of Digital Humanities Research</span>
                </div>
            </a>
        </div>
    </div>
    <nav class="site-header__nav">
        <ol class="menu">
            <li class="menu-item"><a href="about.html" ${params.page === 'About' ? 'class="active"' : ''}>About</a></li>
            <li class="menu-item"><a href="projects.html" ${params.page === 'Projects' ? 'class="active"' : ''}>Projects</a></li>
            <li class="menu-item"><a href="programs.html" ${params.page === 'Programs' ? 'class="active"' : ''}>Programs</a></li>
        </ol>
    </nav>
</header>

<header class="mobile-header site-header--alt show-for-small-only" id="mobile-navbar">
    <div class="site-header__back">
        <a href="https://www.tamu.edu/">
            <svg>
                <use href="#aux_arrow-up-right"></use>
            </svg>
            Texas A&amp;M University
        </a>
    </div>
    <div class="mobile-header__identity">
        <div class="identity">
            <a href="/">
                <div class="identity__logo">
                    <img alt="Texas A&amp;M University logo" src="https://aux.tamu.edu/logos/boxTAM.svg" />
                </div>
                <div class="identity__wordmark">
                    <span class="wordmark__small">Texas A&amp;M University</span>
                    <span class="wordmark__large">Center of Digital Humanities Research</span>
                </div>
            </a>
        </div>
    </div>
    <div class="mobile-toggle">
        <button class="mobile-toggle__menu mobile-nav__menu" aria-expanded="false" aria-pressed="false" data-mobilemenu="menu-mobile">
            Menu
            <div class="menu__icon"><span></span></div>
        </button>
    </div>
    <div class="nav-overlay" style="display: none;">
        <div class="mobile-nav" style="display: none;">
            <div class="mobile-nav__top">
                <button aria-controls="menu-mobile" aria-expanded="false" aria-pressed="false" class="close" data-mobile="menu-mobile" title="close mobile menu">
                    Close
                </button>
            </div>
            <div class="mobile-nav__primary">
                <a class="mobile-nav__item" href="about.html" ${params.page === 'About' ? 'class="active"' : ''}>About</a>
                <a class="mobile-nav__item" href="projects.html" ${params.page === 'Projects' ? 'class="active"' : ''}>Projects</a>
                <a class="mobile-nav__item" href="programs.html" ${params.page === 'Programs' ? 'class="active"' : ''}>Programs</a>
            </div>
        </div>
    </div>
</header>
    `,
    footer: (params) => `
<footer class="footer--slim">
  <div class="footer__container">
    <div class="footer__columns"><div class="footer__column footer__column--identity">
    
    <div class="identity">
      <a href="#">
        <div class="identity__logo">
          <img alt="Texas A&amp;M University logo" src="https://aux.tamu.edu/logos/boxTAM.svg">
        </div>
        <div class="identity__wordmark">
          <span class="wordmark__small">Texas A&amp;M University </span>
          <span class="wordmark__large">Center of Digital Humanities Research</span>
        </div>
      </a>
    </div>
  
  </div> <div class="footer__column">
    <span class="column__header">Visit Us</span>
    <address>
      <p>Evans Library Annex, 5th Floor</p>
      <p>Texas A&amp;M University</p>
      <p>College Station, TX 77843</p>
    </address>
  </div></div>
  </div>
  <div class="footer__compliance-wrapper">
    <div class="footer__compliance">
      <ul class="compliance__list">
        <li>© ${new Date().getFullYear()} <a href="https://www.tamu.edu/">Texas A&amp;M University</a></li>
        <li><a href="https://library.tamu.edu/about/compliance">Site Policies</a></li>
        <li><a href="https://library.tamu.edu/services/accessibility">Accessibility</a></li>
      </ul>
    </div>
  </div>
</footer>
    `,
    project: (params) => `
<div id="project-${params.id}" class="card card--inline card--program">
<div class="card__image">
    <img src="${params.image}" alt="${params.name}">
</div>
<div class="card__content">

    <ul class="tag-collection ">
        ${params.people.join('\n')}
    </ul>

    <span class="ns-h3 card-content__program "><a href="${params.link}" class="link--cta" target="_blank">${params.name}</a></span>
    <p class="card__description">
        ${params.desc}
    </p>
</div>
</div>
    `,
    projectPI: (params) => `
<li>
    <a href="${params.link}" target="_blank" tabindex="0" class="tag tag--category tag--person">
        <svg><use href="#aux_circle-user"></use></svg>
        ${params.name}
    </a>
</li>
    `,
    featuredProject: (params) => `
<div class="card card--inline">
    <div class="card__image">
        <img src="${params.image}" alt="${params.name}">
    </div>
    <div class="card__content">
        <div class="heading-group">
            <h3>${params.name}</h3>
        </div>

        <p>
            ${params.desc}
        </p>

        <a href="projects.html#project-${params.id}" class="link--cta-leading">Read more about this project</a>
    </div>
</div>
    `,
    collaborator: (params) => `
<a href="${params.link}" target="_blank" aria-label="${params.name}" class="directory__listing">
    <div class="listing__info">
        <span class="name">${params.name}</span>
        <span class="title">${params.rank}, ${params.dept}</span>
    </div>
    <img alt="#" src="https://aggieux.tamu.edu/assets/no-photo-BueebA7L.jpg">
</a>
    `
}