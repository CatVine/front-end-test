{
	console && console.log('%c careers@stormid.com ', 'background: #272727; color: #ffffff');
}

const toDoList = document.getElementsByTagName("LI");
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

function handleError(err) {
	console.log('oops!');
	console.log(err);
}

const toDo = document.querySelector(".toDoItem")
const tasks = "http://localhost:4000/api/todo";
const taskData = fetch(tasks);

taskData.then((response) => response.json())
.then((data) => {
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
		listItem.appendChild(input);
		listItem.appendChild(label);
		const list = document.getElementById("to-do-list");
		list.appendChild(listItem);
	}
})
.catch(handleError);

// toDo.textContent = `${data[0].title}`;
// console.log(data);
// 	console.log(data[0].title);
// 	console.log(data[1].title);
// 	console.log(data[2].title);