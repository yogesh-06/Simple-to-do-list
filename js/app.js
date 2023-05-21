var todoList = [
	{ content: 'Watch Movie', status: 'incomplete' },
	{ content: 'Read Novel', status: 'incomplete' }
];

var isUpdate = false;
var indexToUpdate = -1;

function renderTodoList() {
	var todoListString = '';

	for (let index = 0; index < todoList.length; index++) {
		todoListString += "<li class='list-group-item'>" + todoList[index]['content'];
		todoListString +=
			"<button class='btn btn-info float-right ml-2 mr-2' onclick='deleteTask(" + index + ")'>Delete</button>";
		if (todoList[index].status === 'incomplete') {
			todoListString +=
				"<button class='btn btn-warning float-right' onclick='toggleStatus(" + index + ")'>Complete</button>";

			todoListString +=
				"<button class='btn btn-success float-right  ml-2 mr-2' onclick='editTask(" +
				index +
				")'>Edit</button>";
		}

		if (todoList[index].status === 'complete') {
			todoListString +=
				"<button class='btn btn-danger float-right' onclick='toggleStatus(" + index + ")'>Revert</button>";
		}

		todoListString += '</li>';
	}

	document.getElementById('todoList').innerHTML = todoListString;
}

function addTask() {
	if (isUpdate === false) {
		let currentTask = document.getElementById('task').value;
		let task = { content: currentTask, status: 'incomplete' };
		todoList.push(task);
	} else if (isUpdate === true) {
		let currentTask = document.getElementById('task').value;
		let task = { content: currentTask, status: 'incomplete' };
		todoList[indexToUpdate] = task;
		isUpdate = false;
		indexToUpdate = -1;
		document.getElementById('addBtn').innerHTML = 'Add';
		document.getElementById('addBtn').classList = 'btn btn-success btn-block';
	}

	document.getElementById('task').value = '';
	renderTodoList();
}

function toggleStatus(indexToDelete) {
	console.log(indexToDelete);

	// if (todoList[indexToDelete].status === 'complete') {
	// 	todoList[indexToDelete].status = 'incomplete';
	// } else if (todoList[indexToDelete].status === 'incomplete') {
	// 	todoList[indexToDelete].status = 'complete';
	// }

	todoList[indexToDelete].status = todoList[indexToDelete].status === 'complete' ? 'incomplete' : 'complete';

	renderTodoList();
}

function deleteTask(indexToDelete) {
	todoList.splice(indexToDelete, 1);
	renderTodoList();
}

function editTask(indexToEdit) {
	isUpdate = true;
	indexToUpdate = indexToEdit;
	document.getElementById('task').value = todoList[indexToEdit].content;
	document.getElementById('addBtn').innerHTML = 'Update';
	document.getElementById('addBtn').classList = 'btn btn-warning btn-block';
}

renderTodoList();
