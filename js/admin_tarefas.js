const formTarefas = document.getElementById('form-tarefas');
const materia = document.getElementById('materia');
const descricao_tarefa = document.getElementById('descricao_tarefa');
const tarefa_data = document.getElementById('tarefa_data');

formTarefas.addEventListener('submit', async function(event) {
    event.preventDefault();

    const resposta = await supabase.from('tarefas').insert({
        materia: materia.value,
        descricao: descricao_tarefa.value,
        data_entrega: tarefa_data.value,
        autor: userID
        });

    if (resposta.error) {
        console.error('Erro ao adicionar tarefa:', resposta.error);
        return;
    }
    else {
        console.log('Tarefa adicionada com sucesso');
        alert('Tarefa adicionada com sucesso');
        window.location.reload();
    }
});

async function admin_mostrar_tarefas() {
    const { data, error } = await supabase.from('tarefas').select('*');
    if (error) {
        console.error(error);
    }
    lista = document.getElementById('lista-tarefas');

    lista.innerHTML = data.map(data => `
        <div>
            <h2>${data.materia}</h2>
            <p>${data.descricao}</p>
            <p>Prazo: ${data.data_entrega}</p>
            <button onclick="deletar_objeto(${data.id}, 'tarefa')">Apagar tarefa</button>
        </div>`).join('')
}