/*
* Global Variables
*/
var ding = document.getElementById("ding");
// creating a var to hold the ul so that i can append the li element to it
var list = document.querySelector('ul');
//creating a var that will hold the users inputted value
var eventInput = document.querySelector('#event');
//creating a var to hold the button element so that i can create a onlcik function
var eventButton = document.querySelector('button'); 

eventButton.onclick = function() {
    //if the user doesn't input a value give them an error message and reset
    if(eventInput.value == "") {
        alert("You must input an event it cannot be empty");
    }
    else {
    //newEvent holds the users inputted value
    var newEvent = eventInput.value;
    //set the value in the textbox back to empty
    eventInput.value = "";

    /*
    * Creating new elements once the add button is hit
    */
    var listEvent = document.createElement('li');
    //creating the checkbox and setting the attributes necessary
    var listEventChkBox = document.createElement('input');
    listEventChkBox.setAttribute("type", "checkbox", "id", "chkbox", "name", "chkbox");
    //creating labels for the checkboxes
    var chkBoxEventText = document.createElement('label');
    chkBoxEventText.setAttribute("for", "chkbox", "id", "chkLbl");
    //button to remove tasks
    var listDeleteButton = document.createElement('button');
    listDeleteButton.setAttribute("id", "delete");
    listDeleteButton.textContent = "Del";
    }
    /*
    * Appeding all our new elements to the parents ul element
    */
    listEvent.appendChild(listEventChkBox);
    listEvent.appendChild(chkBoxEventText);
    chkBoxEventText.textContent = newEvent;
    listEvent.appendChild(listDeleteButton);
    list.appendChild(listEvent);

    /*
    * Event handlers
    */
    // Event handler to remove tasks
    listDeleteButton.onclick = function() {
        list.removeChild(listEvent);
    }

    //Event handler to apply styles when the boxes are checked or unchecked
    listEvent.addEventListener('change', (checked) => {
        if(listEventChkBox.checked) {
            chkBoxEventText.style.setProperty("text-decoration", "line-through");
            listEvent.style.setProperty("background-color", "green");
            listEvent.removeChild(listDeleteButton);
            listEvent.removeChild(listEventChkBox);
            list.appendChild(listEvent);
            //plays ding when button is clicked
            dingNoise();
        }
    });

    /*
    * Extra functions
    */
    //function to add ding noise
    function dingNoise() {
        ding.play();
    }
}