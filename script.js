var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var output5 = document.getElementById("output5");
var output6 = document.getElementById("output6");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

input5.addEventListener("click", function addTask(){
    var getTask = input4.value.trim();
    if (getTask.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.classList.add("output6");
        listItem.textContent = getTask
        output5.appendChild(listItem);
        listItem.textContent = capitalizeFirstLetter(getTask);
        input4.value = "";

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("output6");

        removeButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(removeButton)

        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("completeButton");
        completeButton.style.color = "green";

        var taskCounter = document.getElementById("output9");

        completeButton.addEventListener("click", function() {
            listItem.remove();
            taskCounter = taskCounter.textContent++
        });

        listItem.appendChild(completeButton);

        
    }
});

input4.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        input5.click();
    }
}); 


