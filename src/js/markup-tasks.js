export function createMarkup({ name, description }) {
  return ` <li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${name}</h3>
        <p>${description}</p>
      </li>
`;
}
export function createMarkupAll(tasks) {
  return tasks.map(task => createMarkup(task)).join('');
}
