import refs from './js/refs';
import { handleSubmitTask, initPage, handleDeleteTask, } from './js/tasks';
import { changeThem } from './js/theme-switcher';

document.addEventListener('DOMContentLoaded', initPage);
refs.formEl.addEventListener('submit', handleSubmitTask);
refs.listEl.addEventListener('click', handleDeleteTask);
refs.changeThemBtn.addEventListener('click', changeThem);
