//createNewClient (clientData)
//Render and add to all clients
//Load clients for user
//add onSubmit

/// FUNCTIONS ///


/// DOM ///

/* $(document).ready(function () {
//on Click Add New Client
$("#intake-form").on('submit', function (event) {
  alert("New Client Added")
  event.preventDefault();//prevents default submission behaviour

  var $form = $(this),
  url = $form.attr('action');

  var sendData = $.post(url, {
    name: $('#name').val(),
    age: $('#age').val(),
    phone: $('#phone').val(),
    email: $('#email').val(),
    housed: $('#housed').val(),
    address: $('#address').val(),
    locations: $('#locations').val(),
    citizenship: $('#citizenship').val(),
    dependents: $('#dependents').val(),
    dependentList: $('#dependentList').val(),
    reosurces: [
      counselling,
      housing,
      Legal,
      addictions,
      child_care,
      shelter,
      career
    ],
    known_locations: $('#known_locations'),
    applied_date: ('#applie_date')
  })
  })
});
 */