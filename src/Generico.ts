// Interfaz base para entidades con id y nombre
export interface EntidadBase {
    id: number;
    nombre: string;
    
    // Método para mostrar en la consola
    mostrarEnConsola(mensaje?: string): void;
}

// Tipo base para entidades con id y nombre
export type TipoEntidadBase = {
    id: number;
    nombre: string;
    
    // Método para mostrar en la consola
    mostrarEnConsola(mensaje?: string): void;
}

// Función fábrica para crear instancias de EntidadBase
export function crearEntidadBase<T extends EntidadBase>(id: number, nombre: string, propiedadesExtra?: Partial<Omit<T, 'id' | 'nombre' | 'mostrarEnConsola'>>): T {
    return {
        id,
        nombre,
        mostrarEnConsola(mensaje?: string) {
            if (mensaje) {
                console.log(`${mensaje}:`, this);
            } else {
                console.log(`Entidad ${this.id}:`, this);
            }
        },
        ...propiedadesExtra
    } as T;
}

//Ej7

import { Usuario, usuarios } from './Usuario';

function obtenerElementoAleatorio<T>(arr: T[]): T {
    const indice = Math.floor(Math.random() * arr.length);
    return arr[indice];
}

export function mostrarEj7() {
    // Pruebas:
    const numeros = [1, 2, 3, 4, 5];
    console.log('Array de números:', numeros);
    console.log('Número aleatorio:', obtenerElementoAleatorio(numeros));

    const palabras = ["hola", "chau", "bienvenido"];
    console.log('Array de palabras:', palabras);
    console.log('Palabra aleatoria:', obtenerElementoAleatorio(palabras));

    console.log('Array de usuarios:', usuarios);
    var usuarioAleatorio = obtenerElementoAleatorio(usuarios);
    usuarioAleatorio.mostrarEnConsola('Usuario aleatorio');
}

//Ej8

interface Caja<T> {
    contenido: T;
}

class ClaseCaja<T> implements Caja<T> {
    contenido: T;
    constructor(contenido: T) {
        this.contenido = contenido;
    }
}

export function mostrarEj8() {
    // Prueba con distintos tipos:
    const cajaNumero = new ClaseCaja<number>(123);
    const cajaString = new ClaseCaja<string>("contenido en caja");
    const cajaUsuario = new ClaseCaja<Usuario>(usuarios[0]);

    console.log('Caja con número:', cajaNumero);
    console.log('Caja con string:', cajaString);
    console.log('Caja con usuario:', cajaUsuario);
}

