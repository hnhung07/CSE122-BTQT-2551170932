const note = document.getElementById('note');

function updateNote() {
  const isDark = document.body.classList.contains('dark');
  note.textContent = `Đây là giao diện ở chế độ ${isDark ? 'TỐI (đang bật)' : 'SÁNG (đang tắt)'}.`;
}

document.getElementById('toggle').onclick = () => {
  document.body.classList.toggle('dark');
  updateNote();
};

updateNote();