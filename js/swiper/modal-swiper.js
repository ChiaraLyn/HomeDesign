
//modals for counters in discover.html
$('#cards').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget); // Button that triggered the modal
  let mod_title = button.data('mod-title'); // Extract info from data-* attributes
  let grab_img = button.data('img');
  let grab_text = button.data('mod-text'); 


  var modal = $(this);
  modal.find('.modal-title').text(mod_title);
  modal.find('.modal-body').html('<img src="' + grab_img + '" alt="" width="200" height="200">' + '<p>' + grab_text +'</p>');
});