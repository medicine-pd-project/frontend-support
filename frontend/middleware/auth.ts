export default defineNuxtRouteMiddleware((to, from) => {
  // skip middleware on server
  if (process.server) return;
  // or only skip middleware on initial client load
  // const nuxtApp = useNuxtApp();
  // if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
  //   return;

  const user = useState("user");

  // if (!user.value) return navigateTo("/login", { external: true });
});
