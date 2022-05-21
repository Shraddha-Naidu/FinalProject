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
      ${toDo.name}
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
      <td>
        <form method="POST" action="/toDos/ ${toDo.completed}">
          <button id="complete-to-do-button" name="${toDo.id}" type="submit"
            class="btn btn-outline-primary">Complete</button>
        </form>
      </td>
      <td>
      <form method="POST" action="/toDos/delete/ ${toDo.id}">
        <button id="delete-to-do-button" name="${toDo.id}" type="submit"
          class="btn btn-outline-primary">Delete</button>
      </form>
    </td>
    </tr>
`
return $toDo;
}

// Renderer
const renderToDos = function (toDos) {
  $.each(toDos, function(key, value) {
    console.log(value)
    $("#to-do-container").prepend(createToDo(value))
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
          console.log("LOADERDATA", data)
          renderToDos(data);
          });
      };
        loadToDos();
    });
  // Submit Handler
  $("#addToDoForm").on('submit', function(event) {
    event.preventDefault();
    $.ajax( { 
      method: 'POST',
      url: "/toDos",
      data: $(this).serialize()
    })
    .then(() => {
      loadToDos()
    })
  });
  

