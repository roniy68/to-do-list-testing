const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
  return tasks;
}

const saveTasks = (tasks) => {
  localStorage.setItem('toDoList', JSON.stringify(tasks));
}

export { getTasks, saveTasks };
