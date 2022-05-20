$(document).ready(function () {
  let t = $('#ExportDataTable').DataTable({
    "order": [[1, 'asc']],
    lengthChange: true,
    buttons: ['copy', 'excel', 'pdf', 'print', 'colvis']
  });
  t.buttons().container()
    .appendTo('#ExportDataTable_wrapper .row:eq(0)');
});