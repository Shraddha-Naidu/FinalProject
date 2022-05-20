 // To Do Form 

function openAddToDoForm() {
  document.getElementById("addToDo").style.display = "block";
  document.getElementById("openToDoButton").style.display = "none";
}

function closeAddToDoForm() {
  document.getElementById("addToDo").style.display = "none";
  document.getElementById("openToDoButton").style.display = "block";
}

// Refactoring ToDo Add/Complete/Delete/Undo-Delete 
// with jQuery to avoid page reload

const createToDo = function(toDo) {
  let $toDo = `
    <tr>
      <td>
      </td>
      <td>
      ${toDo.item}
      </td>
      <td>
      ${toDo.date}
      
      </td>
      <td>
      ${toDo.time}
      
      </td>
      <td>
      ${toDo.completed}
      </td>
    </tr>

`
return $toDo;
}

const renderToDos = function (toDos) {
  // toDos.forEach((element) => {
  //   $(".to-do-container").prepend(createToDo(element));
  // });
  $.each(toDos, function(key, value) {
    console.log(value)
    $(".to-do-container").prepend(createToDo(value))
  })
};

$(document).ready(function() {
    // Loader
    const loadToDos = function() {
      $.ajax({
        type: "GET",
        url: "/toDos",
      })
        .then((data) => {;
        console.log("DATA", data)
        renderToDos(data);
        });
    };
      loadToDos();
  });
    

  // Submit Handler
  $("#addToDoForm").on('submit', function(event) {
    event.preventDefault();
    clientName = 
    $('#addToDoForm').serialize()
    $.ajax( { 
      method: 'POST',
      url: "/toDos",
      data: $(this).serialize()
    })
    .then((data) => {
      console.log("DATA", data)
      loadToDos()
    })
    .catch((e) => {
      console.log(e);
    });

  });
  

