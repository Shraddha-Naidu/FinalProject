// Add to ToDos Button 

function openAddToDoForm() {
  document.getElementById("addToDoForm").style.display = "block";
  document.getElementById("openToDoButton").style.display = "none";
}

function closeAddToDoForm() {
  document.getElementById("addToDoForm").style.display = "none";
  document.getElementById("openToDoButton").style.display = "block";
}

const addToDoForm = document.getElementById("addToDoForm");

addToDoForm.addEventListener("submit", function(event) {
    
  event.preventDefault();
  
    var request = new XMLHttpRequest();
    var url = "/toDos";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var jsonData = JSON.parse(request.response);
            console.log(jsonData);
        }
    };

}); 