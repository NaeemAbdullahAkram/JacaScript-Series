const STATUS_TODO = "To Do";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";

let tasks = [
  { id: 1, title: "Complete lab tasks", status: STATUS_TODO },
  { id: 2, title: "Create a pdf file", status: STATUS_IN_PROGRESS },
  { id: 3, title: "Create Task zips", status: STATUS_DONE }
];

function addTask(title) {
  let newTask = { id: tasks.length + 1, title, status: STATUS_TODO };
  tasks.push(newTask);
}

function updateTaskStatus(taskId, newStatus) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].status = newStatus;
  }
}

var taskCount = tasks.length;

addTask("Submit the Task");
updateTaskStatus(2, STATUS_DONE);
console.log(tasks);
console.log("Total tasks:", taskCount);