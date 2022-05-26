// FUNCTIONS //

// Create New Resource Element//
const newResource = function(resource) {
  let $resource = `
  <tr>
    <td>
      ${resource.provider}
    </td>
    <td>
      ${resource.resource_type}
    </td>
    <td>
      ${resource.provider_email}
    </td>
    <td>
      ${resource.provider_phone}
    </td>
    <td>
      ${resource.provider_address}
    </td>
</tr>
  `
  return $resource
}

//Pulls and renders all resources
const renderResources = function(allResources) {
  for (let i = 0; i < flags.length; i++) {
    $("#resources").prepend(newResource(allResources[i]))
  }
}

// Loads Resources
const loadResources = function () {
  $.ajax({
    type: "GET",
    url: "/resources",
  })
    .then((data) => {

      $("#resources").empty()
      renderResources(data);
    })
    .catch((e) => {
      console.log(e);
    });
};




//DOM//

$(document).ready(function() {

  loadResources();
  
  $(".new-resource-form").on('submit', function (event) {
    // event.preventDefault();
    $.ajax({
      method: 'POST',
      url: `/resources`,
      data: $(this).serialize()
    })
      .then(() => {
        loadResources()
      })
      .catch((e) => {
        console.log(e);
      });

  })
})