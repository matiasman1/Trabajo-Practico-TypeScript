import { EntidadBase, TipoEntidadBase, crearEntidadBase } from './Generico';

//Ej5
export interface Producto extends EntidadBase {
    precio: number;
    stock: number;
}

export type TipoProducto = TipoEntidadBase & {
    precio: number;
    stock: number;
}

// Función fábrica para Producto
export function crearProducto(id: number, nombre: string, precio: number, stock: number): Producto {
    return crearEntidadBase<Producto>(id, nombre, {
        precio,
        stock
    });
}

const productos: Producto[] = [
    crearProducto(1, "Producto A", 100, 5),
    crearProducto(2, "Producto B", 200, 0),
    crearProducto(3, "Producto C", 150, 10),
];

export function mostrarEj5() {
    console.log('Lista de productos:', productos);
    
    // Usando .map() para obtener los nombres
    const nombres = productos.map(p => p.nombre);
    console.log('Nombres de productos:', nombres);

    // Usando .filter() para productos con stock > 0
    const productosEnStock = productos.filter(p => p.stock > 0);
    console.log('Productos en stock:', productosEnStock);
}

//Ej6
export function mostrarEj6() {
    // Ordenar de menor a mayor precio
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    console.log('Productos ordenados por precio:', productosOrdenados);

    // Agregar un nuevo producto usando .push()
    const nuevoProducto = crearProducto(4, "Producto D", 80, 20);
    productos.push(nuevoProducto);
    console.log('Producto agregado:', nuevoProducto);
    console.log('Lista actualizada:', productos);

    // Eliminar el último producto usando .pop()
    const eliminado = productos.pop();
    console.log('Producto eliminado:', eliminado);
    console.log('Productos tras eliminar el último elemento:', productos);

    // Mostrar todos los productos
    productos.forEach(p => p.mostrarEnConsola('Detalle de producto'));
}
