async function redirecionar_admin(params) {
    const authenticated = await active_session();
    if (authenticated) {
        window.location.href = 'admin.html';
    }
}
redirecionar_admin()

window.onload = async function() {
    carregar_tarefas()
    carregar_avisos()

}