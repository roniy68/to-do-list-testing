import { getTasks, saveTasks } from './localStorage.js';

const updateStatusTask = (st, index) => {
  const tasks = getTasks();
  tasks[index].completed = st;
  saveTasks(tasks);
};

const clearAllCompleted = () => {
  const tasks = getTasks();
  const result = tasks.filter((item) => item.completed === false);
  result.forEach((item, index) => {
    item.index = index + 1;
  });
  saveTasks(result);
  return result;
};

const clearBtnAll = () => {
  const btnClear = document.getElementById('clear-completed');

  btnClear.addEventListener('click', () => {
    clearAllCompleted();
    // window.location.reload();
  });
};

export { updateStatusTask, clearBtnAll, clearAllCompleted };