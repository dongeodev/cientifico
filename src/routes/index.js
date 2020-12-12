import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  //lee la url
  let hash = getHash();
  //fija la ruta a la cual ir
  let route = await resolveRoutes(hash);
  //busca el componente a renderizar
  //routes[route] es braket notation for acceder al elemento
  //igual que routes.'/contact'
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
