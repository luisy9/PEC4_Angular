# Ejercicio 2 - Hola Mundo en Angular

1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular
   utilizando Angular CLI denominado ecommerce?
    - ng new ecommerce

2. Explica brevemente la
   estructura y ficheros que ha generado Angular CLI
   1. Ficheros de configuración en la raíz del proyecto
    - tsconfig.app.json -> Es un archivo de configuracion de TypeScript especifico 
    para la compilación del proyecto de Angular.
    - angular.json -> Es un fichero clave en un proyecto de Angular, contiene la configuración para Angular CLI.
    - package.json -> Es un fichero que sirve para describir información sobre el proyecto, como que paquetes estan instalados,
    como se llama el proyecto, comandos para inicializar el proyecto y compilarlo...
    - .editorconfig -> Sirve para utilizar un estilo de codigo especifico,
    en este archivo lo que se aplican son distintas reglas para el codigo.
    - .gitignore -> Sirve para ignorar ficheros o carpetas en concreto, para evitar que se suban a github.

    1. Directorio node_modules

        - node_modules -> Es donde se almacenan todas las dependencias instaladas en el proyecto.

    1. Directorio src

        - index.html -> En este archivo index.html lo que sucedera es que en el <app-root></app-root>
        es donde se cargara toda la aplicación que estemos llamando en el main.ts.
        - main.ts -> Este fichero se utiliza para arrancar la applicacion de angular y el entorno de 
        ejecución del navegador.
        - styles.css -> Es el archivo donde se escribiran las lineas para definir los estilo de tu app de Angular.

    1. Directorio app
        - app.component.* -> Es el componente principal de la aplicacion, es el componente 
        que se carga cuando la apliacion de Angular se inicia.
        - app.module.ts -> En Angular, los módulos son una forma de organizar y estructurar la aplicación,
        y el AppModule es el módulo raíz que contiene los componentes, servicios y otros recursos necesarios para que la aplicación funcione.

3. Explica cada uno de los siguientes decoradores generados por
Angular CLI, detallando cada una de las propiedades que se definen en:

    1. app.module.ts - @NgModule (declarations, imports, providers, bootstrap) -> NgModule es un modulo para organizar la app en bloques funcionales.

        - declarations -> Aquí se especifican los componentes, directivas y pipes que pertenecen al modulo.
        - imports -> Se especifican otros modulos cuyos exports son necesarios para que los componentes funcionene correctamente.
        - providers -> Se utiliza para configuara los servicios que el modulo proporcionara, 
        y que estarán disponibles para la inyección de dependecias en otros componentes.
        - bootstrap -> Es el componente que se renderizara primero en el modulo.

    2. app.component.ts - @Component (selector, templateUrl, styleUrls)
        - selector -> nombre de el selector para importar el componente.
        - templateUrl -> url de el componente
        - styleUrl -> url donde esta el fichero de estilos del componente.

3.  ¿Es posible poder inyectar el template y los estilos en línea de un
componente sin necesidad de especificarlos en templateUrl, styleUrls?
¿Es recomendable hacer esto?
    - Sí que es posibles hacer esto, pero no es recomendable, porque no se podria hacer reutilización del codigo, ademas de que es mejor tenerlo en archivos separados por la facilidad para la gestión y organización del codigo.