import { createMarkup, createMarkupAll } from './markup-tasks';
import refs from './refs';

export function renderTask(task) {
  refs.listEl.insertAdjacentHTML('beforeend', createMarkup(task));
}
export function renderAllTasksLS(tasks) {
  refs.listEl.innerHTML = createMarkupAll(tasks);
}
