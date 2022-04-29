//= require js/uswds.min.js

(function ($) {
  $(document).ready(function () {
    $('.usa-menu-collapsible').each(function () {
      let $this = $(this),
          $handle = $this.find('[aria-controls]'),
          open = $handle.attr('aria-expanded') == 'true',
          $content = $this.find('#' + $handle.attr('aria-controls'));
      
      // we didn't find the required elements, bail out
      if ($handle.length == 0 || $content.length == 0) {
        return;
      }
      
      $handle.click(function () {
        open = !open;
        handleChange();
      });
      
      handleChange();
      
      function handleChange() {
        if (open) {
          $this.addClass('open');
        }
        else {
          $this.removeClass('open');
        }
      }
    });
  });
})(jQuery);