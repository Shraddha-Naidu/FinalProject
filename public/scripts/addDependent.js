const createDependent = function (dependent) {

  let $dependent = `
    <tr">
      <td>
      ${dependent.dependent_name}
      </td>
      <td>
      ${dependent.dependent_phone}
      </td>
      <td>
      ${dependent.dependent_email}
      </td>
      <td>
      ${dependent.relationship}
      </td>
    </tr>
`
  return $dependent;
}


// Renderer
const renderDependents = function (dependents) {
  for (let i = 0; i < dependents.length; i++) {
    $("#dependent-container").prepend(createDependent(dependents[i]))
  }
};


$(document).ready(function () {
  const pathname = window.location.pathname;
  const id = window.location.pathname.substr(12, pathname.length)
  // Submit Handler
  $("#addDependentForm").on('submit', function (event) {
    // event.preventDefault();
    $.ajax({
      method: 'POST',
      url: `/clientfile/${id}/dependents`,
      data: $(this).serialize()
    })
      .then(() => {
        loadDependents()
      })
      .catch((e) => {
        console.log(e);
      });

    // Loader
    const loadDependents = function () {
      $.ajax({
        type: "GET",
        url: "/clientfile",
      })
        .then((data) => {

          $("#dependent-container").empty()
          renderDependents(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    loadDependents();
  });
})
