//= require js/uswds.min.js

(function ($) {
  $(document).ready(function () {
    $('.usa-menu-collapsible').each(function () {
      let $this = $(this),
          $handle = $this.find('[aria-controls]'),
          id = $handle.attr('aria-controls'),
          $content = $this.find('#' + $handle.attr('aria-controls')),
          open = ($handle.attr('aria-expanded') == 'true');
      
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
          $handle.attr('aria-expanded', 'true');
        }
        else {
          $this.removeClass('open');
          $handle.attr('aria-expanded', 'false');
        }
      }
    });
  });
})(jQuery);