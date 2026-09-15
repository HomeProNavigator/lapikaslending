/* Event delegation so the mobile menu works after navbar.html is injected.
   insertAdjacentHTML does not run <script> tags inside the include. */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('#mobile-menu-btn');
    if (!btn) return;
    var nav = btn.closest('nav');
    var menu = (nav && nav.querySelector('#mobile-menu')) || document.getElementById('mobile-menu');
    if (!menu) return;
    e.preventDefault();
    menu.classList.toggle('hidden');
    var icon = btn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });
})();
