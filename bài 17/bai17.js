const form = document.querySelector('#container');
const inputs = form.querySelectorAll('input');

const rules = {
  name: (value) => (value.trim() ? '' : 'Vui lòng nhập họ và tên'),

  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ''
      : 'Email không hợp lệ (thiếu tên miền)',

  password: (value) =>
    value.length >= 6 ? '' : 'Mật khẩu phải có ít nhất 6 ký tự',

  confirm: (value) =>
    value && value === form.querySelector('#password').value
      ? ''
      : 'Mật khẩu xác nhận không khớp',
};

function validateField(input) {
  const card = input.closest('.card');
  const message = card.querySelector('.message');
  const error = rules[input.name](input.value);

  card.classList.remove('valid', 'invalid');
  card.classList.add(error ? 'invalid' : 'valid');
  message.textContent = error ? `✗ ${error}` : '✓ Hợp lệ';

  return !error;
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    validateField(input);

    if (input.name === 'password') {
      validateField(form.querySelector('#confirm'));
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const results = [...inputs].map(validateField); 
  if (results.every(Boolean)) {
    alert('Đăng ký thành công!');
  }
});

inputs.forEach(validateField);