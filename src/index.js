import router from "./routes";

//ejecuta router en la carga
window.addEventListener("load", router);
//ejecuta router si cambia el hash (url)
window.addEventListener("hashchange", router);
