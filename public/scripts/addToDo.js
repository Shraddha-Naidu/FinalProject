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
  <div class="to-do-container">
    <tr>
      <td>
        ${toDo.name}
      </td>
      <td>
      ${toDo.result1[0].item}
      </td>
      <td>
      ${toDo.result1[0].date}
      
      </td>
      <td>
      ${toDo.result1[0].time}
      
      </td>
      <td>
      ${toDo.result1[0].completed}
      </td>
    </tr>
    </div>

`
return $toDo;
}

$(document).ready(function() {

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
      $(".to-do-container").prepend(createToDo(data));
    })
    .catch((e) => {
      console.log(e);
    });

  });
})
  

