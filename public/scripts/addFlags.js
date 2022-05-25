function openAddFlagForm() {
  document.getElementById("addFlag").style.display = "block";
  document.getElementById("openFlagButton").style.display = "none";
}

function closeAddFlagForm() {
  document.getElementById("addFlag").style.display = "none";
  document.getElementById("openFlagButton").style.display = "block";
}
// with jQuery to avoid page reload
const createFlag = function (flag) {

  let $flag = `
    <tr">
      <td>
      ${flag.added_at}
      </td>
      <td>
      ${flag.ended_at}
      </td>
      <td>
      ${flag.notes}
      </td>
    </tr>
`
  return $flag;
}


// Renderer
const renderFlags = function (flags) {
  for (let i = 0; i < flags.length; i++) {
    $("#flag-container").prepend(createFlag(flags[i]))
  }
};


$(document).ready(function () {
  const pathname = window.location.pathname;
  const id = window.location.pathname.substr(12, pathname.length)
  // Submit Handler
  $("#addFlagForm").on('submit', function (event) {

    // event.preventDefault();
    $.ajax({
      method: 'POST',
      url: `/clientfile/${id}/flags`,
      data: $(this).serialize()
    })
      .then(() => {
        loadFlags()
      })
      .catch((e) => {
        console.log(e);
      });

    // Loader
    const loadFlags = function () {
      $.ajax({
        type: "GET",
        url: "/clientfile",
      })
        .then((data) => {

          $("#flag-container").empty()
          renderFlags(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    loadFlags();
  });
})
