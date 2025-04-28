import { mostrarUsuariosEnDOM } from './DOM';
import { usuarios, ClaseUsuario, UsuarioAdmin } from './Usuario';
import './Producto'; // Importación para ejecución de Producto (Ej5 y Ej6)
import './Generico'; // Importación para ejecución de Generico (Ej7 y Ej8)
import './API'; // Importación para ejecución de API (Ej9 y Ej10)
import { mostrarEj5 } from './Producto';
import { mostrarEj6 } from './Producto';
import { mostrarEj7 } from './Generico';
import { mostrarEj8 } from './Generico';
import { mostrarEj9 } from './API';
import { mostrarEj10 } from './API';

// Función para mostrar encabezado de los ejercicios
function mostrarEjercicio(archivo: string, ejercicio: string) {
    console.log(`\n==========================================`);
    console.log(`===== ${archivo}: ${ejercicio} =====`);
    console.log(`==========================================\n`);
}

// Función principal para ejecutar todos los ejercicios en orden
async function ejecutarEjercicios() {
    // Mostrar ejercicios del archivo Usuario.ts
    mostrarEjercicio("Usuario.ts", "Ej1 - Definición de interfaz y tipo");
    console.log('Interfaz Usuario y Tipo TipoUsuario definidos');

    mostrarEjercicio("Usuario.ts", "Ej2 - Filtro de usuarios activos");
    console.log('Usuarios:', usuarios);
    const usuariosActivos = usuarios.filter(u => u.activo);
    console.log('Usuarios Activos:', usuariosActivos);

    mostrarEjercicio("Usuario.ts", "Ej3 - Implementación de clase");
    const usuario1 = new ClaseUsuario(10, "María", 30, "maria@mail.com", true);
    const usuario2 = new ClaseUsuario(11, "Pedro", 35, "pedro@mail.com", false);
    usuario1.mostrarEnConsola("Usuario 1");
    usuario2.mostrarEnConsola("Usuario 2");
    usuario2.cambiarEstado();
    usuario2.mostrarEnConsola("Usuario 2 después de cambiar estado");

    mostrarEjercicio("Usuario.ts", "Ej4 - Clase extendida");
    const admin = new UsuarioAdmin(12, "Laura", 40, "laura@mail.com", true, ["crear", "eliminar", "modificar"]);
    admin.mostrarEnConsola('Usuario Administrador');

    // Mostrar ejercicios del archivo Producto.ts
    mostrarEjercicio("Producto.ts", "Ej5 - Map y Filter con productos");
    mostrarEj5();

    mostrarEjercicio("Producto.ts", "Ej6 - Operaciones con arrays");
    mostrarEj6();

    // Mostrar ejercicios del archivo Generico.ts
    mostrarEjercicio("Generico.ts", "Ej7 - Función genérica");
    mostrarEj7();

    mostrarEjercicio("Generico.ts", "Ej8 - Clase genérica");
    mostrarEj8();

    // Mostrar ejercicios del archivo API.ts
    mostrarEjercicio("API.ts", "Ej9 - Promise y async/await");
    await mostrarEj9();

    mostrarEjercicio("API.ts", "Ej10 - Fetch API");
    await mostrarEj10();

    // Mostrar ejercicios del archivo DOM.ts
    mostrarEjercicio("DOM.ts", "Ej11 - Manipulación del DOM");
    const botonMostrar = document.getElementById("btn-render");
    if (botonMostrar) {
        console.log('Botón de renderizado encontrado. Click para mostrar usuarios en DOM');
        botonMostrar.addEventListener("click", () => {
            mostrarUsuariosEnDOM(usuarios);
        });
    } else {
        console.log('Botón de renderizado no encontrado. Mostrando usuarios directamente:');
        mostrarUsuariosEnDOM(usuarios);
    }
}

// Ejecutar todos los ejercicios cuando se cargue la página
ejecutarEjercicios().catch(error => {
    console.error("Error al ejecutar los ejercicios:", error);
});
