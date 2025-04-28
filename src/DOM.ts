import { Usuario } from "./Usuario";

//Ej11
export function mostrarUsuariosEnDOM(usuarios: Usuario[]): void {
    const contenedor = document.getElementById("lista-usuarios");
    if (!contenedor) return;
    
    contenedor.innerHTML = usuarios
        .map(u => `<li>${u.nombre} - ${u.email}</li>`)
        .join("");
    
    // Mostrar en consola también
    usuarios.forEach(u => u.mostrarEnConsola("Usuario mostrado"));
}
