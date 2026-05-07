let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

let list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
${task.text} (${task.priority})

<button class="delete" onclick="deleteTask(${index})">X</button>
`;

li.onclick = function(){
task.completed = !task.completed;
saveTasks();
renderTasks();
};

list.appendChild(li);

});
}

function addTask(){

let text = document.getElementById("taskInput").value;
let priority = document.getElementById("priority").value;

if(text===""){
alert("Enter task");
return;
}

tasks.push({
text:text,
priority:priority,
completed:false
});

saveTasks();
renderTasks();

document.getElementById("taskInput").value="";
}

function deleteTask(index){

tasks.splice(index,1);
saveTasks();
renderTasks();

}

renderTasks();