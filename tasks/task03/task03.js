(function($, window) {

  $(function() {
    alert('first');
    $('#get_bank_list').on('click', function(e) {
      alert('click');

      $.getJSON(
        'https://raw.githubusercontent.com/zengin-code/source-data/master/data/banks.json',
        'get'
      ).done(function(data, status, xhr) {
        alert('done');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).fail(function(data, status, err) {
        alert('fail');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).always(function() {
        alert('always');
      });

      alert('under ajax');
    });
    alert('last');
  });
  
})(jQuery, window);
