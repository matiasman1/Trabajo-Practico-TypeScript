import { Usuario, crearUsuario } from './Usuario';

//Ej9
function obtenerDatos(): Promise<Usuario[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            const datos: Usuario[] = [
                crearUsuario(101, "Simulacion 1", 22, "sim1@mail.com", true),
                crearUsuario(102, "Simulacion 2", 27, "sim2@mail.com", false),
                crearUsuario(103, "Simulacion 3", 31, "sim3@mail.com", true)
            ];
            resolve(datos);
        }, 1000); // Reducido a 1 segundo para pruebas más rápidas
    });
}

export async function mostrarEj9() {
    console.log('Iniciando obtención de datos simulados...');
    const datos = await obtenerDatos();
    console.log('Datos simulados obtenidos:');
    datos.forEach(dato => dato.mostrarEnConsola());
    return datos;
}

//Ej10
export async function mostrarEj10() {
    try {
        console.log('Iniciando petición a API externa...');
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await respuesta.json();
        console.log('Usuarios de API externa:', data);
        return data;
    } catch (error) {
        console.error("Error al obtener usuarios de la API:", error);
        return null;
    }
}