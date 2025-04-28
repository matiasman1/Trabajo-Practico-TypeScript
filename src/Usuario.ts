import { EntidadBase, TipoEntidadBase, crearEntidadBase } from './Generico';

//Ej1
export interface Usuario extends EntidadBase {
    edad: number;
    email: string;
    activo: boolean;
    cambiarEstado(): void;
}

export type TipoUsuario = TipoEntidadBase & {
    edad: number;
    email: string;
    activo: boolean;
    cambiarEstado(): void;
}

// La interfaz permite la extensión y la implementación en clases.
// Los tipos son más versátiles para definir uniones, intersecciones y alias,
// pero no se pueden reabrir ni extender una vez creados.

// Función fábrica para Usuario
export function crearUsuario(id: number, nombre: string, edad: number, email: string, activo: boolean): Usuario {
    return crearEntidadBase<Usuario>(id, nombre, {
        edad,
        email,
        activo,
        cambiarEstado() {
            this.activo = !this.activo;
        }
    });
}

//Ej2
export const usuarios: Usuario[] = [
    crearUsuario(1, "Ana", 28, "ana@mail.com", true),
    crearUsuario(2, "Luis", 32, "luis@mail.com", false),
    crearUsuario(3, "Carlos", 25, "carlos@mail.com", true),
];

const usuariosActivos = usuarios.filter(u => u.activo);
console.log('Usuarios Activos:', usuariosActivos);

//Ej3
export class ClaseUsuario implements Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.activo = activo;
    }

    cambiarEstado(): void {
        this.activo = !this.activo;
    }
    
    mostrarEnConsola(mensaje?: string): void {
        if (mensaje) {
            console.log(`${mensaje}:`, this);
        } else {
            console.log(`Usuario ${this.id}:`, this);
        }
    }
}

// Creación de instancias y demostración en consola.
const usuario1 = new ClaseUsuario(1, "María", 30, "maria@mail.com", true);
const usuario2 = new ClaseUsuario(2, "Pedro", 35, "pedro@mail.com", false);

usuario1.mostrarEnConsola();
usuario2.mostrarEnConsola();

usuario2.cambiarEstado();
usuario2.mostrarEnConsola('Usuario 2 luego de cambiar estado');

//Ej4
export class UsuarioAdmin extends ClaseUsuario {
    permisos: string[];

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
        super(id, nombre, edad, email, activo);
        this.permisos = permisos;
    }
}

// Creación de una instancia de UsuarioAdmin
const admin = new UsuarioAdmin(3, "Laura", 40, "laura@mail.com", true, ["crear", "eliminar", "modificar"]);
admin.mostrarEnConsola('Usuario Administrador');