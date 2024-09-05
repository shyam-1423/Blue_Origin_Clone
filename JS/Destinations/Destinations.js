$(document).ready(function () {
    // Toggle side navigation
    $('#side-nav-trigger').on('click', function () {
      $('.HeaderSideNavigationModal').toggleClass('show');
      $('.HeaderSideNavigationModalOverlay').toggleClass('show');
    });
  
    // Close side navigation
    $('#side-nav-close').on('click', function () {
      $('.HeaderSideNavigationModal').removeClass('show');
      $('.HeaderSideNavigationModalOverlay').removeClass('show');
    });
  
    // Close side navigation when clicking outside
    $('.HeaderSideNavigationModalOverlay').on('click', function () {
      $('.HeaderSideNavigationModal').removeClass('show');
      $('.HeaderSideNavigationModalOverlay').removeClass('show');
    });

    // Show dropdown on hover
    $('.nav-item.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(400);
        }, function() {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(400);
    });
    // Hamburger 
    function myFunction(x) {
      x.classList.toggle("change");
    }
  });