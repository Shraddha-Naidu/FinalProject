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
    <tr id="toDo-${toDo.todoid}">
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
    
          <button class="btn btn-outline-primary" id="${toDo.todoid}" onClick="delete_click(this.id)" type="submit">Delete</button>
         
      </td>
      <td>

        <button  class="btn btn-outline-primary" id="${toDo.todoid}" onClick="complete_click(this.id)"
         type="submit">Complete</button>
    
    </td>
    </tr>
`
return $toDo;
}

// Renderer
const renderToDos = function (toDos) {
  $.each(toDos, function(key, value) {
    $("#to-do-container").prepend(createToDo(value))
  })
};

const delete_click = function(clicked_id)
{
    const id = clicked_id;
    console.log(id)
    $.ajax( { 
      method: 'POST',
      url: "/toDos/delete",
      data: {id}
    })
    .then(() => {
      $(`#toDo-${id}`).remove()
    })
    .catch((e) => {
      console.log(e);
    });


}

const complete_click = function(clicked_id)
{
    const id = clicked_id;
    console.log(id)
    $.ajax( { 
      method: 'POST',
      url: "/toDos/completed",
      data: {id}
    })
    .then(() => {
      const val = $(`#toDo-${id}`)
      .text("Task completed")
    })
    .catch((e) => {
      console.log(e);
    });


}

$(document).ready(function() {
 

  // Submit Handler
  $("#addToDoForm").on('submit', function(event) {
    event.preventDefault();
    $.ajax( { 
      method: 'POST',
      url: "/toDos",
      data: $(this).serialize()
    })
    .then(() => {
      console.log("Hello")
      loadToDos()
    })
    .catch((e) => {
      console.log(e);
    });

      // Loader
      const loadToDos = function() {
        $.ajax({
          type: "GET",
          url: "/toDos",
        })
          .then((data) => {;
          console.log("LOADERDATA", data)
          renderToDos(data);
          })
          .catch((e) => {
            console.log(e);
          });
      };
        loadToDos();
    });
  })
