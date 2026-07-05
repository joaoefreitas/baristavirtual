
async function carregar_avisos() {
    const resposta = await supabase.from('avisos').select('*')
    const avisos = resposta.data
    const error = resposta.error

    if (error) {
        console.error('Erro ao buscar dados:', error)
        return
    }

    tabela = document.getElementById('tabela-avisos')
    tabela.innerHTML = avisos.map(aviso => `
        <div>
            <h2>${aviso.titulo}</h2>
            <p>${aviso.descricao}</p>
        </div>
    `).join('')



}