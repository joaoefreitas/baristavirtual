async function deletar_objeto(id, tipo) {
    if (tipo == 'tarefa') {
        const { error } = await supabase.from('tarefas').delete().eq('id', id);
        if (error) {
            console.error(`Erro ao apagar a tarefa: ${error}`)
            return
        }
        window.location.reload()
    }
    else if (tipo == 'aviso') {
        const { error } = await supabase.from('avisos').delete().eq('id', id);
        if (error) {
            console.error(`Erro ao apagar a tarefa: ${error}`)
            return
        }
        window.location.reload()
    }
}