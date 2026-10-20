const form = document.getElementById('registerForm');
form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } 
  else {
      event.preventDefault();
      alert('Đăng ký thành công!');
      }
      form.classList.add('was-validated');
});

form.addEventListener('reset', function () {
  form.classList.remove('was-validated');
});