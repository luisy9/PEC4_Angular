# Ejercicio 6

1.  ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo
    de uso de cada uno de ellos. 
        - Emulated View Encapsulation -> Es el encapsulamiento predeterminado de Angular, es la manera tradicional de agregar estilos al componente,
            mediante clases, tags, id.

        - Shadow DOM View Encapsulation -> El shadow DOM proporciona una manera de encapsular los estilos mas eficiente, los estilos estan bien independientes
            para cada componente.

        - None View Encapsulation -> Si aplicas esta propiedad no se realizara ningun encapsulamiento de estilos, así que los estilos seran globales.

2.  ¿Que es el Shadow DOM?
    - El shadow DOM proporciona una manera de encapsular los estilos mas eficiente, los estilos estan bien independientes
      para cada componente, cada componente tiene su propio DOM.

3. ¿Qué es el changeDetection?
    - El changeDetection se refiera a al proceso que Angular utiliza para identificar y aplicar los cambios en los datos de la aplicación para luego
        actualizar la interfaz de el usuario en su consecuencia.
        La detección de cambios es fundamental para mantener la vista sincronizada con el estado actual de la aplicación.


4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo
    debes usar una y otra? Ventajas e inconvenientes.
        - La diferencia entre el default y el OnPush esta en que en el default , Angular estara pendiente a todos los cambios que nosotros hacemos en el DOM,
        pero en cambio con el onPush lo que pasa es que Angular solo esta pendiente a unos cambios en concreto que son las signals, ademas mejora enormemente la 
        velocidad y perfomance de Angular.
    
    Default -> Ventajas: - Es facil de entender este modelo en concreto, ademas de que maneja automaticamente los cambios en Angular.
               Desventajas: - Puede haber una posible sobrecarga, ya que como Angular checkea todos los componentes de la apliación.
                            - Puede haber un rendimiento menos optimizado y menos control de todo lo que se ejecuta en la app.

    OnPush -> Ventajas: - Mejora el rendimiento y velocidad de la app
                        - Proporciona un mejor control sobre la aplicación
                        - Reduce las actualizaciones de componentes incesarias.

5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo
    se disparan los hooks OnChanges, OnInit, AfterViewInit y
    OnDestroy, puesto que son los más utilizados.
        Ciclo de vida de Angular -> Lo primero en ejecutarse es el constructor, en este punto las propiedades del component aun no han sido inicializadas.
        Luego del constructor va el OnChanges, que se ejecuta cada vez que haya propiedades de entrada.
        Luego del OnChange va el OnInit, en el OnInit en este metodo se pueden hacer inicializaciones adicionales despues de que se cree en componente.
        El hook AfterViewInit se ejecuta despues de que se haya inicializado las vistas del componente padre e hijo.
        Ademas luego hay otro metodo que se ejecuta antes de que se destruya el componente que se llama onDestroy, este hook esta pensado para realizar tareas de limpieza y 
        para liberar recursos.