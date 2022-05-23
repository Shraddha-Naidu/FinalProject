$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  let actions = $(".updateTable td:last-child").html();
  // Append table with add row form on add new button click
  $(".add-newUpdate").click(function () {

    $(this).attr("disabled", "disabled");
    let index = $("table.updateTable tbody tr:last-child").index();
    let row = '<tr>' +
      '<td><input type="date" class="date" name="application" id="application"></td>' +
      '<td><input type="text" class="form-control" name="name" id="description"></td>' +
      '<td>' + actions + '</td>' +
      '</tr>';
    $("table.updateTable").prepend(row);
    $("table.updateTable tbody tr").eq(index - 1).find(".add, .edit").toggle();
    $('[data-toggle="tooltip"]').tooltip();

  });
  // Add row on add button click
  $(document).on("click", ".add", function () {
    let empty = false;
    let input = $(this).parents("tr").find('input[type="text"]');
    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass("error");
        empty = true;
      } else {
        $(this).removeClass("error");
      }
    });
    $(this).parents("tr").find(".error").first().focus();
    if (!empty) {
      input.each(function () {
        $(this).parent("td").html($(this).val());
      });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-newUpdate").removeAttr("disabled");
    }
  });
  // Edit row on edit button click
  $(document).on("click", ".edit", function () {
    $(this).parents("tr").find("td:not(:last-child)").each(function () {
      $(this).html('<input type="date" class="form-control" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-newUpdate").attr("disabled", "disabled");
  });
  // Delete row on delete button click
  $(document).on("click", ".delete", function () {
    $(this).parents("tr").remove();
    $(".add-newUpdate").removeAttr("disabled");
  });

});