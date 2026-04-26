import {
  getTaskFromStore,
  initTaskStore,
  setTaskToStore,
} from './local-storage-api';
import { renderAllTasksLS, renderTask } from './render-tasks';

export function handleSubmitTask(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.currentTarget.elements;
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '')
    return alert('Заповніть всі поля!');
  const task = {
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };
  setTaskToStore(task);
  renderTask(task);
  event.currentTarget.reset();
}
export function initPage() {
  initTaskStore();
  renderAllTasksLS(getTaskFromStore());
}
