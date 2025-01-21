# E-commerce de Snacks Importados

## Descripción
Este proyecto es una plataforma de e-commerce enfocada en la venta de productos importados de Estados Unidos, como snacks, golosinas, bebidas y ediciones especiales. Los usuarios pueden navegar por diferentes categorías, ver detalles de productos, y realizar compras de manera sencilla.

## Tecnologías Utilizadas
- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Para la navegación entre las diferentes páginas de la aplicación.
- **Bootstrap**: Framework CSS para el diseño y estilos de la aplicación.
- **React Bootstrap**: Componentes Bootstrap adaptados para React.
- **React DOM**: Para manejar el DOM en React.
- **SweetAlert**: Librería para mostrar alertas personalizadas.
- **SweetAlert React Content**: Integración de SweetAlert con React.
- **Firebase**: Utilizado como base de datos para almacenar la información de los pedidos.

## Características
- **Navegación por Categorías**: Los usuarios pueden explorar productos en las categorías de snacks, golosinas, bebidas y ediciones especiales desde el navbar.
- **Detalles de Producto**: Cada producto tiene un botón "Ver más" que lleva a una página de detalles, donde se puede agregar al carrito y seleccionar la cantidad deseada.
- **Carrito de Compras**: Los usuarios pueden ver los productos agregados al carrito, eliminar productos específicos, vaciar el carrito, y proceder a confirmar la compra.
- **Formulario de Orden**: Después de confirmar la compra, los usuarios son redirigidos a un formulario donde deben ingresar la información de la orden, la cual se guardará en la base de datos de Firebase.
- **Restricciones**: El formulario de orden sólo es accesible si hay productos en el carrito.

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/CamilaMartinez6/nom-nom-market
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd <NOMBRE_DEL_DIRECTORIO>
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```



