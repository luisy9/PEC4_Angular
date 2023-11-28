1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la
directiva estructural NgFor:
 - index: Para ver el indice de los elementos que estamos mostrando con el bucle.
 - even: True cuando el elemento tiene un índice par en el iterable.
 - odd: True cuando el elemento tiene un índice impar en el iterable.
 - first: True cuando el item es el primero en se iterado
 - last: True cuando el item es el ultimo en se iterado

2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon
ejemplos de uso

 - La función trackBy se utiliza para mejorar el rendimiento de los ngFors cuando estan iterando listas dinamicas, 
 es decir que estas listas pueden ir cambiando.

3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la
razón tanto si es si posible como si no lo es.
 - Sí que es posible, por ejemplo nosotros podemos tener un div con con dos estructuras simultaneas que sean
    in ngIf y un ngFor, <div *ngIf="showElement" *ngFor="let item of elementsList"></div>
    Lo que esta pasando aquí es lo siguiente primero si showElement es true empezara con el for, y a la vez que se hace el for
    ira comprobando si showElement es true, si en algun momento showElement es false no se hara esa iteración.
    