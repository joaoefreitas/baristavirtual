let userID = null;

async function active_session() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError) {
    return error;
  }
  if (user) {
    userID = user.id;
    return true;
  } else {
    return false;
  }
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Erro ao deslogar:", error);
  } else {
    window.location.href = "index.html";
  }
}
