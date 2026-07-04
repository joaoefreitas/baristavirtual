const CLASSIFICACOES = ['Hoje', 'Amanhã', 'Nesta semana', 'Próximos 30 dias']

function inicioDoDia(data) {
    const copia = new Date(data)
    copia.setHours(0, 0, 0, 0)
    return copia
}

function parseData(dataEntrega) {
    if (!dataEntrega) return null
    const [parteData] = String(dataEntrega).split('T')
    const [ano, mes, dia] = parteData.split('-').map(Number)
    return inicioDoDia(new Date(ano, mes - 1, dia))
}

function fimDaSemana(hoje) {
    const fim = inicioDoDia(hoje)
    const diaSemana = fim.getDay()
    const diasRestantes = diaSemana === 0 ? 0 : 7 - diaSemana
    fim.setDate(fim.getDate() + diasRestantes)
    return fim
}

function limite30Dias(hoje) {
    const limite = inicioDoDia(hoje)
    limite.setDate(limite.getDate() + 30)
    return limite
}

function classificarTarefa(dataEntrega) {
    const entrega = parseData(dataEntrega)
    if (!entrega) return null

    const hoje = inicioDoDia(new Date())
    const amanha = inicioDoDia(new Date(hoje))
    amanha.setDate(amanha.getDate() + 1)

    if (entrega <= hoje) return 'Hoje'
    if (entrega.getTime() === amanha.getTime()) return 'Amanhã'
    if (entrega <= fimDaSemana(hoje)) return 'Nesta semana'
    if (entrega <= limite30Dias(hoje)) return 'Próximos 30 dias'

    return null
}

function agruparPorClassificacao(tarefas) {
    const grupos = Object.fromEntries(CLASSIFICACOES.map(nome => [nome, []]))

    for (const tarefa of tarefas) {
        const grupo = classificarTarefa(tarefa.data_entrega)
        if (grupo) grupos[grupo].push(tarefa)
    }

    for (const nome of CLASSIFICACOES) {
        grupos[nome].sort((a, b) => parseData(a.data_entrega) - parseData(b.data_entrega))
    }

    return grupos
}

function renderizarGrupo(nome, tarefas) {
    if (tarefas.length === 0) return ''

    const itens = tarefas
        .map(t => `<li><h3>${t.materia}</h3><p>${t.descricao}</p><span class="prazo">Prazo: ${t.data_entrega}</span></li>`)
        .join('')

    return `
        <section>
            <h2>${nome}</h2>
            <ul>${itens}</ul>
        </section>
    `
}

function renderizarTarefas(tarefas) {
    const grupos = agruparPorClassificacao(tarefas)
    const html = CLASSIFICACOES.map(nome => renderizarGrupo(nome, grupos[nome])).join('')
    document.getElementById('tabela-dever').innerHTML = html || '<p>Nenhuma tarefa neste período.</p>'
}

async function carregar_tarefas() {
    const resposta = await supabase.from('tarefas').select('*')
    const tarefas = resposta.data
    const error = resposta.error


    if (error) {
        console.error('Erro ao buscar dados:', error)
        return
    }

    renderizarTarefas(tarefas ?? [])
}
