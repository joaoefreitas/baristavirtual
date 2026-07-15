const formAvisos = document.getElementById("form-avisos");
const titulo = document.getElementById("titulo");
const descricao_aviso = document.getElementById("descricao_aviso");
const expira = document.getElementById("expira");

formAvisos.addEventListener("submit", async function (event) {
  event.preventDefault();

  const resposta = await supabase.from("avisos").insert({
    titulo: titulo.value,
    descricao: descricao_aviso.value,
    expira: expira.value,
    autor: userID,
  });

  if (resposta.error) {
    console.error("Erro ao adicionar aviso:", resposta.error);
    return;
  } else {
    console.log("Aviso adicionado com sucesso");
    alert("Aviso adicionado com sucesso");
    window.location.reload();
  }
});

async function admin_mostrar_avisos(params) {
  const { data, error } = await supabase.from("avisos").select("*");
  if (error) {
    console.error(error);
  }
  lista = document.getElementById("lista-avisos");

  lista.innerHTML = "";

  lista.innerHTML = data
    .map(
      (data) => `
        <div>
            <h2>${data.titulo}</h2>
            <p>${data.descricao}</p>
            <p>Expira: ${data.expira}</p>
            <button onclick="deletar_objeto(${data.id}, 'aviso')">Apagar aviso</button>
        </div>
        `,
    )
    .join("");
}
