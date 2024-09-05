AOS.init();
$(document).ready(function () {
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
    //video 
    $('#modal__trigger').click(function() {
      $('#videoFrame').attr('src', 'https://www.youtube-nocookie.com/embed/Nyn2gOimRfM?rel=0');
      $('#videoModal').modal('show');
    });

    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoFrame').attr('src', '');
    });
});