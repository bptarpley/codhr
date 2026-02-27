const CoDHRTemplates = {
    header: (params) => `
<header id="navbar" class="main-header site-header--alt show-for-medium">
    <nav class="utility-nav utility-nav--department">
        <div class="utility-nav__container">
            <div class="site-header__back">
                <a href="#">
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
        <div class="search">
            <form class="search__form">
                <label for="search" class="sr-only">Search</label>
                <input type="search" name="search" placeholder="" id="search" class="search__input" />

                <button type="submit" class="btn btn--primary btn--icon">
                    Search
                    <svg>
                        <use href="#aux_magnifying-glass"></use>
                    </svg>
                </button>
            </form>
        </div>
    </div>
    <nav class="site-header__nav">
        <ol class="menu">
            <li class="menu-item"><a href="about.html">About</a></li>
            <li class="menu-item"><a href="projects.html">Projects</a></li>
            <li class="menu-item"><a href="programs.html">Programs</a></li>
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
            <a href="#">
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
        <button class="mobile-toggle__quicklinks-search">
            Search
            <svg>
                <use href="#aux_search"></use>
            </svg>
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
                <a class="mobile-nav__item" href="about.html">About</a>
                <a class="mobile-nav__item" href="projects.html">Projects</a>
                <a class="mobile-nav__item" href="programs.html">Programs</a>
            </div>
        </div>

        <div class="mobile-search" style="display: none;">
            <div class="mobile-search__top">
                <span class="mobile-search__heading">Search</span>

                <button class="close" aria-controls="quicklinks-search" aria-expanded="false" aria-pressed="false" data-megamenu="quicklinks-search" title="close quicklinks and search">
                    Close
                </button>
            </div>

            <div class="mobile-search__container">
                <div class="search">
                    <form class="search__form">
                        <label for="search" class="sr-only">Search</label>

                        <input type="search" name="search" placeholder="" id="search" class="search__input" />

                        <button type="submit" class="btn btn--primary btn--icon">
                            Search

                            <svg>
                                <use href="#aux_angles-right"></use>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
    `,
    footer: (params) => `
<footer class="footer--slim">
    <div class="footer__container">
        <div class="footer__columns">
            <div class="footer__column footer__column--identity">
                <div class="identity identity--stacked">
                    <a href="#">
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
            <div class="footer__column column__links">
                <span class="column__header">Footer Column Heading</span>

                <div class="link-list link-list--leading">
                    <ul>
                        <li>
                            <a href="#">This is a link</a>
                        </li>
                        <li>
                            <a href="#">This is a link</a>
                        </li>
                        <li>
                            <a href="#">This is a link</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__column column__links">
                <span class="column__header">Footer Column Heading</span>

                <div class="link-list link-list--leading">
                    <ul>
                        <li>
                            <a href="#">This is a link</a>
                        </li>
                        <li>
                            <a href="#">This is a link</a>
                        </li>
                        <li>
                            <a href="#">This is a link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__compliance-wrapper">
        <div class="footer__compliance">
            <ul class="compliance__list">
                <li>
                    © 2025
                    <a href="#">Texas A&amp;M University</a>
                </li>
                <li><a href="#">Site Policies</a></li>
                <li><a href="#">Accessibility</a></li>
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
<div class="aux-accordion aux-accordion--publication" id="accordionItem-${params.id}">
    <span id="accordionID-${params.id}">
        <h3>
            <button aria-expanded="false" aria-label="${params.name}" class="aux-accordion-trigger" aria-controls="sect${params.id}">
                <span class="aux-accordion__title">
                    <span class="superhead">${params.rank}</span>
                    <span class="ns-h3">${params.name}</span>
                </span>
            </button>
        </h3>
    </span>
    <div class="aux-accordion-panel" hidden="" role="region" aria-labelledby="accordionID-${params.id} sect${params.id}" id="sect${params.id}">
        ${params.projectList}
    </div>
</div>
    `
}