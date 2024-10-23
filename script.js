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




function createList(inputValue){

	const li = document.createElement('li');
	li.classList.add('flex', 'justify-between', 'items-center', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'hover:bg-gray-100', 'm-8', 'duration-200');

	const firstDiv = document.createElement("div");
	firstDiv.classList.add('w-full');

	const span = document.createElement("span");
	span.classList.add('flex-grow', 'text-lg', 'font-semibold');

	const lastDiv = document.createElement("div");
	lastDiv.classList.add('flex', 'gap-2', 'w-full', 'justify-end-full');

	const editAndSaveBtn = document.createElement("button");
	editAndSaveBtn.classList.add('edit-btn', 'bg-blue-500', 'hover:bg-blue-600', 'text-white', 'px-3', 'rounded-lg', 'w-20');

	const deletBtn = document.createElement("button");
	deletBtn.classList.add('delete-btn', 'bg-red-500', 'hover:bg-red-600', 'text-white', 'px-3', 'rounded-lg', 'w-20');

	firstDiv.appendChild(span)
	lastDiv.appendChild(editAndSaveBtn, deletBtn)
	li.appendChild(firstDiv, lastDiv)
	AllList.appendChild(li)

}