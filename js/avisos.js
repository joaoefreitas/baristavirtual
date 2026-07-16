async function carregar_avisos() {
  const resposta = await supabase.from("avisos").select("*");
  const avisos = resposta.data;
  const error = resposta.error;

  if (error) {
    console.error("Erro ao buscar dados:", error);
    return;
  }

  tabela = document.getElementById("tabela-avisos");

  console.log(avisos);
  if (avisos.length === 0 || !avisos) {
    tabela.innerHTML = "<p>Não há avisos postados</p>";
    return;
  }
  tabela.innerHTML = avisos
    .map(
      (aviso) => `
    <div>
    <h2>${aviso.titulo}</h2>
    <p>${aviso.descricao}</p>
    </div>
    `,
    )
    .join("");
}
