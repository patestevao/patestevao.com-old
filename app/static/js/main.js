var originalNav = document.getElementById('navigation');

window.onload = function() {
    var nav = document.getElementById('navigation');

    if (window.innerWidth <= 670) {
        nav.parentNode.removeChild(nav);
        createMobileNav();
    }
};

window.addEventListener('resize', function() {
    var nav = document.getElementById('navigation');
    if (window.innerWidth <= 670) {
        nav.parentNode.removeChild(nav);
        createMobileNav();
    } else if (window.innerWidth > 670) {
        var mobileNav = document.getElementById('mobile-nav');
        mobileNav.parentNode.removeChild(mobileNav);
        recreateOriginalNav();
    }
});

function recreateOriginalNav() {
    var newNav = document.createElement('nav');
    newNav.setAttribute('id','navigation');
    var navList = document.createElement('ul');
    navList.setAttribute('id', 'nav-list');
    var homeItem = document.createElement('li');
    homeItem.classList.add('nav-item');
    var homeLink = document.createElement('a');
    homeLink.classList.add('nav-link');
    var homeText = document.createTextNode('Home');
    homeLink.setAttribute('href', '/');
    var infographicItem = document.createElement('li');
    infographicItem.classList.add('nav-item');
    var infographicLink = document.createElement('a');
    var infographicLink = document.createElement('a');
    infographicLink.classList.add('nav-link');
    var infographicText = document.createTextNode('Infographics');
    infographicLink.setAttribute('href', '/infograficos');

    homeLink.appendChild(homeText);
    homeItem.appendChild(homeLink);
    infographicLink.appendChild(infographicText);
    infographicItem.appendChild(infographicLink);
    navList.appendChild(homeItem);
    navList.appendChild(infographicItem);
    newNav.appendChild(navList);

    var contact = document.getElementById('contact-container');
    var right = document.getElementById('right');
    right.insertBefore(newNav, contact);
}

function createMobileNav() {
    var mobileNavDiv = document.createElement('div');
    mobileNavDiv.setAttribute('id','mobile-nav');
    var mobileNavList = document.createElement('ul');
    mobileNavList.classList.add('mobile-nav-list');
    mobileNavDiv.appendChild(mobileNavList);
    var mobileNavArray = ['Home', 'Infographics', 'Contact'];
    var hrefArray = ["/", "/infograficos",
        "#contact-container" ];


    for (var i = 0; i < mobileNavArray.length; i++) {
        var item = mobileNavArray[i];
        var mobileNavItem = document.createElement('li');
        mobileNavItem.classList.add('mobile-nav-item');
        var mobileNavLink = document.createElement('a');
        mobileNavLink.classList.add('mobile-nav-link');
        mobileNavLink.href = String(hrefArray[i]);
        var mobileNavContent = document.createTextNode(item);
        mobileNavLink.appendChild(mobileNavContent);
        mobileNavItem.appendChild(mobileNavLink);
        mobileNavList.appendChild(mobileNavItem);
    }

    document.body.appendChild(mobileNavDiv);
}