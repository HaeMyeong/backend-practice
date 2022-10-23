'use strict';

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const registerButton = document.querySelector('#button');

registerButton.addEventListener('click', register);

function register() {
  if (!id.value) return alert('아이디를 입력해주세요');
  if (password.value !== confirmPassword.value) return alert('비밀번호가 일치하지 않습니다');

  const req = {
    id: id.value,
    password: password.value,
  };

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  }).then((res) => {
    return res.json();
  }).then((res) => {
    if (res.success) {
      location.href = '/login';
    } else {
      alert(res.message);
    }
  })
    .catch((err) => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
};