# PaisesApp


## RouterModule



El archivo que contiene las rutas es llamado  app-routing.module.ts

* Pasos de configuración:

    - Se importa en el archivo app.module.ts
    - Se crea una constante de tipo Routes la cual va a guardar las rutas de nuestros componentes Ejemplo:
        ```
         const routes: Routes =[
                {
            path:'',   <--- ruta base
            component: PorPaisComponent, <-- componente o vista que cargara la ruta base
            pathMatch: 'full' <-- señala esta ruta base como la predeterminada para ser la vista principal
         },
         {
             path:'region',   <--- ruta region
             component: PorRegionComponent, <-- carga el componente/vista region
         }
         ]
        ```
    - Ya creado el arreglo con nuestras rutas se configura el decorador de nuestro Router module @NgModule con los provedores y directivas de ensutadores, ejemplo:

    ```
            @NgModule({
        imports: [
            RouterModule.forRoot(routes)
            ],
        exports: [
            RouterModule
            ],
        })
        export class AppRoutingModule {}
    ```
    *** Se importan las rutas y se exporta el RouterModule ***

    -router-outlet es una etiqueta especial en Angular que sirve para mostrar los componentes hijos de un componente. Por defecto todos los componentes son hijos del componente AppComponent, por lo que si incluímos esta etiqueta dentro de la vista de AppComponent, se renderizará cada uno de los componentes del routing dependiendo de la página en la que nos encontremos.

    ```
    <div class="col">
        <router-outlet></router-outlet>
    </div>

    ```

## Router Link

Esta directiva permite navegar hacia las rutas sin hacer refresh o recargar la página; al estar creando una SPA y si se hace un reflesh, se perdería el estado de la aplicación.

Se remplaza los href por routerLink, ejemplo:
```
    <nav>
    <a routerLink="/home">Inicio</a>
    <a routerLink="/posts">Posts</a>
    </nav>

```

Cada componente que requiera usar de Router Link necesitara que su modulo respectivo tenga iumportado RouterModule, no se podran usar las propiedades de Router link como:
routerLink, routerLinkActive, routerLinkActiveOptions
