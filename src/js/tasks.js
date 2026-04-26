import { nanoid } from 'nanoid';
import {
  getTaskFromStore,
  initTaskStore,
  setTaskToStore,
  removeTaskFromStore,
  getThemStore
} from './local-storage-api';
import { renderAllTasksLS, renderTask } from './render-tasks';
import refs from './refs';

export function handleSubmitTask(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.currentTarget.elements;
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '')
    return alert('Заповніть всі поля!');
  const task = {
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
    id: nanoid()
  };
  setTaskToStore(task);
  renderTask(task);
  event.currentTarget.reset();
}
export function initPage() {
  initTaskStore();
  renderAllTasksLS(getTaskFromStore());
  if (getThemStore() === "theme-dark") {
    refs.body.classList.add("theme-dark");
  } else {
    refs.body.classList.remove("theme-dark");
  }
}

export function handleDeleteTask(event) {
  if (event.target.nodeName !== "BUTTON") return;
  const liElement = event.target.parentElement;
  const id = liElement.dataset.id;
  liElement.remove();
  removeTaskFromStore(id);
}