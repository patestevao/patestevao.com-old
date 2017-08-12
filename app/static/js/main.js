var originalNav = document.getElementById('navigation');

window.onload = function() {
    var nav = document.getElementById('navigation');

    if (window.innerWidth <= 670) {
        nav.parentNode.removeChild(nav);
        createMobileNav();
    }
};

function createMobileNav() {
    var mobileNavDiv = document.createElement('div');
    mobileNavDiv.setAttribute('id','mobile-nav');
    var mobileNavList = document.createElement('ul');
    mobileNavList.classList.add('mobile-nav-list');
    mobileNavDiv.appendChild(mobileNavList);
    var mobileNavArray = ['Home', 'Portfolio', 'Contact'];
    var hrefArray = ["/", "/portfolio",
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
