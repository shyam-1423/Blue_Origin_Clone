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
      $('#videoFrame').attr('src', 'https://youtu.be/1YOL89kY8Og');
      $('#videoModal').modal('show');
    });

    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoFrame').attr('src', '');
    });
});
function carousel() {
    return {
      currentSlide: 0,
      isPlaying: false,
      interval: null,
      goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.pause();
      },
      play() {
        this.isPlaying = true;
        this.interval = setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.$refs.carousel.children.length;
        }, 5000);
      },
      pause() {
        clearInterval(this.interval);
        this.isPlaying = false;
      },
      togglePlayPause() {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
      }
    };
  }


