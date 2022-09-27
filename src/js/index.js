{
	console && console.log('%c careers@stormid.com ', 'background: #272727; color: #ffffff');
}

// error handling function

function handleError(err) {
	console.log('oops!');
	console.log(err);
}

// retrieve tasks from api

const tasks = "http://localhost:4000/api/todo";
const taskData = fetch(tasks);

// store retrieved data in variable

const responseData = taskData.then((response) => response.json());

// create task elements

responseData.then((data) => {
	for (let i = 0; i < data.length; i++) {
		const listItem = document.createElement("LI");
		listItem.classList.add('todo-list__item-container');
		const input = document.createElement("INPUT");
		input.type = "checkbox";
		input.classList.add("checkbox")
		input.id = data[i].id;
		const label = document.createElement("LABEL");
		label.textContent = `${data[i].title}`;
		label.setAttribute("for", input.id);
		if (data[i].isDone == 1) {
			label.classList.add('todo-list__item--checked')
			input.setAttribute("checked", "checked");
		} else {
			label.classList.add('todo-list--unchecked');
		}
		listItem.appendChild(input);
		listItem.appendChild(label);
		const listIncomplete = document.getElementById("to-do-list");
		const listComplete = document.getElementById("to-do-list--complete");
		if (data[i].isDone == "1") {
			listComplete.appendChild(listItem);
		} else {
			listIncomplete.appendChild(listItem);
		}
	}
})
.catch(handleError);

const toDoList = Array.from(document.getElementsByTagName("li"));
console.log(toDoList); 

	for (let i = 0; i < toDoList.length; i++) {
  		const span = document.createElement("SPAN");
  		const hideButton = document.createTextNode("\u00D7");
  		span.className = "hide";
  		span.appendChild(hideButton);
  		toDoList[i].appendChild(span);
}

const hide = document.getElementsByClassName("hide");
for (let i = 0; i < hide.length; i++) {
	hide[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
	}
}