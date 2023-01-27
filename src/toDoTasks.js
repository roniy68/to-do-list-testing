import { getTasks, saveTasks } from './localStorage.js';

const add = (task) => {
  let tasks = getTasks();
  task.index = tasks.length + 1;
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
};

const remove = (taskIndex) => {
  const tasks = getTasks();
  const index = tasks.findIndex((item) => item.index === taskIndex);
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
  saveTasks(tasks);
};

const modify = (description, index) => {
  const tasks = getTasks();
  tasks[index].description = description;
  saveTasks(tasks);
};

export { add, remove, modify };
