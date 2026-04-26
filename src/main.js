import refs from './js/refs';
import { handleSubmitTask, initPage } from './js/tasks';

document.addEventListener('DOMContentLoaded', initPage);
refs.formEl.addEventListener('submit', handleSubmitTask);
