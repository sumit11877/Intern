let tasks = [];

// SELECT ELEMENTS
const taskInput      = document.querySelector('#taskInput');
const prioritySelect = document.querySelector('#prioritySelect');
const addBtn         = document.querySelector('#addBtn');
const taskList       = document.querySelector('#taskList');

const totalCount   = document.querySelector('#totalCount');
const doneCount    = document.querySelector('#doneCount');
const pendingCount = document.querySelector('#pendingCount');

// ADD TASK
const addTask = () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    priority: prioritySelect.value,
    isDone: false,
    createdAt: new Date().toLocaleTimeString()
  });

  taskInput.value = '';
  renderTasks();
};

// TOGGLE TASK
const toggleTask = (id) => {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, isDone: !task.isDone } : task
  );

  renderTasks();
};

// DELETE TASK
const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
};

// RENDER TASKS
const renderTasks = () => {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');

    li.className = `task-item priority-${task.priority} ${task.isDone ? 'done' : ''}`;

    li.innerHTML = `
      <span class='task-text'>${task.text}</span>
      <span class='task-meta'>${task.priority.toUpperCase()} · ${task.createdAt}</span>
      <div class='actions'>
        <button onclick='toggleTask(${task.id})'>
          ${task.isDone ? 'Undo' : 'Done'}
        </button>
        <button onclick='deleteTask(${task.id})'>Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateStats();

  // BONUS: save to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// UPDATE STATS
const updateStats = () => {
  const total = tasks.length;
  const done = tasks.filter(t => t.isDone).length;
  const pending = total - done;

  totalCount.textContent = `Total: ${total}`;
  doneCount.textContent = `Done: ${done}`;
  pendingCount.textContent = `Pending: ${pending}`;
};

// EVENTS
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

// LOAD FROM LOCAL STORAGE (BONUS)
const saved = JSON.parse(localStorage.getItem('tasks'));
if (saved) {
  tasks = saved;
} else {
  // PRELOAD TASKS
  tasks = [
    { id:1, text:'Learn DOM', priority:'high', isDone:false, createdAt:'10:00 AM' },
    { id:2, text:'Practice JS', priority:'medium', isDone:false, createdAt:'10:05 AM' },
    { id:3, text:'Revise React', priority:'low', isDone:false, createdAt:'10:10 AM' }
  ];
}

renderTasks();

window.toggleTask = toggleTask;
window.deleteTask = deleteTask;