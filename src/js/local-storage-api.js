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
export function removeTaskFromStore(id) {
  const tasks = getTaskFromStore();
  const filteredTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}
export function setThemStore(theme) {
  localStorage.setItem('theme', theme);
}
export function getThemStore() {
  return localStorage.getItem('theme');
}