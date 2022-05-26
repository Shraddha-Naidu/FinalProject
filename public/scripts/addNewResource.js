//appends an "active" class when the ADD button is clicked
$(".open").on("click", function() {
  $(".new-resource-modal, .new-resource-input").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".cancel, .new-resource-modal").on("click", function() {
  $(".new-resource-modal, .new-resource-input").removeClass("active");
});
// FUNCTIONS //

// Create New Resource Element//
const newResource = function(resource) {

}

//Pulls and renders all resources
const renderResources = function(allResources) {

}

//Loads resources
const loadResources = function() {

}


//DOM//

$(document).ready(function() {})