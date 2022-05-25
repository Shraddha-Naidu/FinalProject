const createUpdate = function (update) {
  let $update = `
    <tr id="update-${update.updateid}">
      <td>
      ${update.date}
      </td>
      <td>
      ${update.description}
      </td>
    </tr>
`
  return $update;
}


// Renderer
const renderUpdates = function (updates) {
  for (let i = 0; i < updates.length; i++) {
    $("#update-container").prepend(createUpdate(updates[i]))
  }
};


$(document).ready(function () {
  // Submit Handler
  $("#addUpdateForm").on('submit', function (event) {
    const pathname = window.location.pathname;
    const id = window.location.pathname.substr(12, pathname.length)
    // event.preventDefault();
    $.ajax({
      method: 'POST',
      url: `/clientfile/${id}/updates`,
      data: $(this).serialize()
    })
      .then(() => {
        loadUpdates()
      })
      .catch((e) => {
        console.log(e);
      });

    // Loader
    const loadUpdates = function () {
      $.ajax({
        type: "GET",
        url: "/clientfile",
      })
        .then((data) => {

          $("#update-container").empty()
          renderUpdates(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    loadUpdates();
  });
});