import { getTasks, saveTasks } from './localStorage.js';

const add = (task) => {
  const tasks = getTasks();
  task.index = tasks.length;
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
};

const remove = (taskIndex) => {
  const tasks = getTasks();
  const index = tasks.findIndex((item) => item.index === taskIndex);
  tasks.splice(index, 1);
  // for (let i = index; i < tasks.length; i += 1) {
  //   tasks[i].index -= 1;
  // }
  tasks.forEach((item, i) => { item.index = i + 1 });
  saveTasks(tasks);
  return tasks;
};

const modify = (description, index) => {
  const tasks = getTasks();
  tasks[index].description = description;
  saveTasks(tasks);
};

export { add, remove, modify };
