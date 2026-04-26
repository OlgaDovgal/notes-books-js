export function setTaskToStore(task) {
  const tasks = getTaskFromStore() || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function getTaskFromStore() {
  return JSON.parse(localStorage.getItem('tasks'));
}
export function initTaskStore() {
  const tasks = getTaskFromStore() || [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
