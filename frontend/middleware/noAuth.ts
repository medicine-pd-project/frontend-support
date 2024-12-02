export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  const user = useState("user");

  // if (user.value) return navigateTo("/chats", { external: true });
});
