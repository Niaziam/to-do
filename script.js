const AllList = document.getElementById("allList");
const input = document.getElementById("input");
const addBtn = document.getElementById("addTask");




addBtn.addEventListener('click', () => {
	if (input.value == '') {
		alert('add your task')
	}
	else {
		createList(input.value.trim())
		input.value = "";
	}
})




