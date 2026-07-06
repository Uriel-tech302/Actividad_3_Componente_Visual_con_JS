# Componente Visual JS: Toast Notification Dinámico

**Autor:** Uriel Espinoza de la Rosa  
**Carrera:** Ingeniería en Sistemas Computacionales, ITO  
**Materia:** Programación Web  

## ¿Qué problema resuelve?

En el desarrollo de interfaces modernas, es necesario informar al usuario sobre el estado de sus acciones por este motivo crearemos los componente  que resuelve este problema proporcionando notificaciones flotantes (Toasts) que son estéticamente agradables, no bloquean la pantalla, se ocultan automáticamente tras un tiempo definido y **son altamente reutilizables**, permitiendo generar múltiples alertas simultáneas en pantalla inyectando dinámicamente HTML desde JavaScript.

## Instalación

Solo necesitas incluir la hoja de estilos en el `<head>` y el script de la lógica antes del cierre del `</body>`:

```html
<!-- En el <head> -->
<link rel="stylesheet" href="css/componente.css">

<!-- Antes de cerrar </body> -->
<script src="js/componente.js"></script>
```
## Uso y Ejemplos de Código
El componente es 100% dinámico y no requiere agregar contenedores en el HTML manualmente.

** 1. Notificación de Éxito
Al confirmar una acción, se invoca con el parámetro 'success'.

```html
// Mostrará una tarjeta verde durante 4 segundos (4000ms)
mostrarToast('¡Artículo agregado al carrito con éxito!', 'success', 4000);
```
2. Notificación de Error
Al ocurrir una falla en el sistema, se utiliza el parámetro 'error'. Al omitir el tiempo, utiliza el valor por defecto de 3000ms.

```html
// Mostrará una tarjeta roja
mostrarToast('Error de sistema: No hay stock disponible.', 'error');
```

3. Notificación de Información
Ideal para avisos neutrales.
```html
// Mostrará una tarjeta azul
mostrarToast('Tienes nuevos mensajes en tu bandeja.', 'info');
```
