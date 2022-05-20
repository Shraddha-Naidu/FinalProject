$(document).ready(function () {

  $(".toggle-button").click(function () {
    const pathname = window.location.pathname;
    const id = window.location.pathname.substr(9, pathname.length)
    if ($(this).hasClass('btn-danger')) {
      $.post("/clients/status", { status: true, id }, function (data) {
        $('.toggle-button').removeClass('btn-danger').addClass('btn-success').text('In-Process');
        $(this).addClass('btn-success').removeClass('btn-danger');
      })
    }

    else if ($(this).hasClass('btn-success')) {
      $.post("/clients/status", { status: false, id }, function (data) {
        $('.toggle-button').removeClass('btn-success').addClass('btn-danger').text('Inactive');
        $(this).addClass('btn-danger').removeClass('btn-success');
      })
    }
  })
})