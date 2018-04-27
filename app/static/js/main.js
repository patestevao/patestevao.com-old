var originalNav = document.getElementById('navigation');

window.onload = function() {
    var nav = document.getElementById('navigation');

    if (window.innerWidth <= 670) {
        nav.parentNode.removeChild(nav);
        document.body.appendChild(nav);
        mobileStyleNav();
    }
};

function mobileStyleNav() {
  document.getElementById('navigation').classList.add('mobile-nav');
  document.getElementById('nav-list').classList.add('mobile-nav-list');
  var navItems = document.getElementsByClassName('nav-item');
  for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.add('mobile-nav-item');
  }
  var navLinks = document.getElementsByClassName('nav-link');
  for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.add('mobile-nav-link');
  }
  document.getElementById('contact-item').style.display = "inline-block";
}

// Smooth scrolling
$(document).ready(function() {
    $('a[href*="#"]').not('a[href="#"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});
