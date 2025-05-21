document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('achievement-list');
      data.achievements.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = "list-disc ml-5 text-gray-200";
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error('Error loading achievements:', err);
    });
});
