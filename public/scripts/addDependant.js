function openAddDependantForm() {
  document.getElementById("addDependant").style.display = "block";
  document.getElementById("openDependantButton").style.display = "none";
}

function closeAddDependantForm() {
  document.getElementById("addDependant").style.display = "none";
  document.getElementById("openDependantButton").style.display = "block";
}
// with jQuery to avoid page reload
const createDependant = function (dependant) {

  let $dependant = `
    <tr">
      <td>
      ${dependant.added_at}
      </td>
      <td>
      ${dependant.ended_at}
      </td>
      <td>
      ${dependant.notes}
      </td>
    </tr>
`
  return $dependant;
}


// Renderer
const renderDependants = function (dependants) {
  for (let i = 0; i < dependants.length; i++) {
    $("#dependant-container").prepend(createDependant(dependants[i]))
  }
};


$(document).ready(function () {
  const pathname = window.location.pathname;
  const id = window.location.pathname.substr(12, pathname.length)
  // Submit Handler
  $("#addDependantForm").on('submit', function (event) {

    // event.preventDefault();
    $.ajax({
      method: 'POST',
      url: `/clientfile/${id}/dependants`,
      data: $(this).serialize()
    })
      .then(() => {
        loadDependants()
      })
      .catch((e) => {
        console.log(e);
      });

    // Loader
    const loadDependants = function () {
      $.ajax({
        type: "GET",
        url: "/clientfile",
      })
        .then((data) => {

          $("#dependant-container").empty()
          renderDependants(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    loadDependants();
  });
})
