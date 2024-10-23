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




function createList(inputValue) {

	const li = document.createElement('li');
	li.classList.add('flex', 'justify-between', 'items-center', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'm-5', 'hover:bg-gray-100', 'duration-200');

	const firstDiv = document.createElement("div");
	firstDiv.classList.add('w-full');

	const p = document.createElement("p");
	p.classList.add('flex-grow', 'text-lg', 'font-semibold', 'w-[300px]');
	p.innerText = inputValue;

	const lastDiv = document.createElement("div");
	lastDiv.classList.add('flex', 'gap-2', 'w-full', 'justify-end', 'w-full');

	const editBtn = document.createElement("button");
	editBtn.classList.add('edit-btn', 'bg-blue-500', 'hover:bg-blue-600', 'text-white', 'px-3', 'py-2', 'rounded-lg', 'w-20');
	editBtn.innerHTML = `
	<i id="save" class="fa-solid fa-edit"></i> Edit
	`;

	const deletBtn = document.createElement("button");
	deletBtn.classList.add('delete-btn', 'bg-red-500', 'hover:bg-red-600', 'text-white', 'px-3', 'py-2', 'rounded-lg', 'w-26');
	deletBtn.innerHTML = `
	<i class="fa-solid fa-trash"></i> Delete
	`;

	firstDiv.appendChild(p)
	lastDiv.append(editBtn, deletBtn)
	li.append(firstDiv, lastDiv)
	AllList.appendChild(li)


	deletBtn.addEventListener('click', () => {
		AllList.removeChild(li)
	})

	editBtn.addEventListener('click', () => {
		editButton(p, firstDiv, lastDiv, editBtn)
	})
}


function editButton(inputValue, firstDiv, lastDiv, editBtn) {
	const input = document.createElement("input");
	input.type = 'text';
	input.classList.add('bg-white', 'w-full', 'h-10', 'text-lg', 'font-semibold', 'focus:ring-4', 'focus:ring-teal-400', 'duration-200', 'outline-none', 'rounded-lg', 'shadow-xl')
	input.value = inputValue.innerText;

	const SaveBtn = document.createElement("button");
	SaveBtn.classList.add('edit-btn', 'bg-blue-500', 'hover:bg-blue-600', 'text-white', 'px-3', 'py-2', 'rounded-lg', 'w-20');
	SaveBtn.innerHTML = `
	<i class="fa-solid fa-save"></i> Save
	`;

	firstDiv.removeChild(inputValue)
	firstDiv.appendChild(input)
	lastDiv.replaceChild(SaveBtn, editBtn)

	SaveBtn.addEventListener('click', () => {
		inputValue.innerText = input.value;

		firstDiv.removeChild(input)
		firstDiv.appendChild(inputValue)
		lastDiv.replaceChild(editBtn, SaveBtn)
	})

}



