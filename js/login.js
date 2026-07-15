const formLogin = document.getElementById("form-login");
const matricula = document.getElementById("matricula");
const senha = document.getElementById("senha");

formLogin.addEventListener("submit", async function (event) {
  event.preventDefault();

  const user_matricula = `${matricula.value}@internal.com`;
  const user_senha = senha.value;

  const resposta = await supabase.auth.signInWithPassword({
    email: user_matricula,
    password: user_senha,
  });

  if (resposta.error) {
    if (resposta.error == "AuthApiError: Invalid login credentials") {
      document.getElementById("resultado-login").innerHTML =
        "Matrícula e/ou senha incorretos";
      console.error("Credenciais incorretas");
    }
    console.error("Erro ao fazer login:", resposta.error);
    return;
  } else {
    console.log("Login realizado com sucesso, redirecionando...");
    window.location.href = "admin.html";
  }
});
