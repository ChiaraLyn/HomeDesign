
//modals for discover.html/counters
$('#mod').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget); // Button that triggered the modal
  let mod_title = button.data('mod-title'); // Extract info from data-* attributes
  let grab_img = button.data('img');
  let grab_text = button.data('mod-text'); 


  var modal = $(this);
  modal.find('.modal-title').text(mod_title);
  modal.find('.modal-body').html('<img src="' + grab_img + '" alt="" width="150" height="150">' + '<p>' + grab_text +'</p>');
});