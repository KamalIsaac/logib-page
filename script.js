document.getElementById(`form`).addEventListener(`submit`, function (e) {
  e.preventDefault();

  const username = document.getElementById(`username`).ariaValueMax.trim();
  const password = document.getElementById(`password`).value;
  const password2 = document.getElementById(`password2`).value;

  const error = document.getElementById(`error`);

  const validUsername = "admin";
  const validPassword = "12345";

  if (
    username === validUsername &&
    password === validPassword &&
    password2 === validPassword
  ) {
    error.style.color = "green";
    error.textContent = "Login Berhasil";
  } else {
    error.style.color = "red";
    error.textContent = "Username atau Password Salah!";
  }
});
