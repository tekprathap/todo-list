const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggling completed
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  todoInput.value = '';
});
