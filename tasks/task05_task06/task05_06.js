(function($, window) {
  $(function() {
    $('#btn').jpostal({
      click: '#btn',
      postcode: [
        '#zip'
      ],
      address: {
        '#pref': '%3',
        '#city': '%4',
        '#street': '%5'
      }
    });
  });
})(jQuery, window);
