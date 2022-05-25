$(document).ready(function () {
  let t = $('#ExportDataTable').DataTable({
    "order": [[1, 'asc']],
    lengthChange: true,
    buttons: [
      {
        extend: 'copy',
        text: 'COPY',
        exportOptions: {
          columns: ':visible'
        }
      },

      {
        extend: 'excel',
        text: 'EXCEL',
        exportOptions: {
          columns: ':visible'
        }
      },
      {
        extend: 'pdf',
        text: 'PDF',
        exportOptions: {
          columns: ':visible'
        }
      },
      {
        extend: 'print',
        text: 'PRINT',
        exportOptions: {
          columns: ':visible'
        }
      },
      {
        extend: 'colvis',
        text: 'COLUMN FILTER',
        exportOptions: {
          columns: ':visible'
        }
      },
    ]
  });
  t.buttons().container()
    .appendTo('#ExportDataTable_wrapper .row:eq(0)');
});