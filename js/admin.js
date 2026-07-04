async function redirecionar_homepage() {
    const authenticated = await active_session
    if (!active_session) {
        window.location.href = 'login.html'
    }
}
redirecionar_homepage()

active_session()
admin_mostrar_tarefas()
admin_mostrar_avisos()


