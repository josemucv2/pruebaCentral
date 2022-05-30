# Proyecto Prueba Central (SPA)
   
   Hola Mi nombre es Jose Martinez, en el siguiente archivo les explicare como se llevo acabo dicho proyecto

## Descripcion del proyecto
    
    Inicie el proyecto creando desde la consola de GIT BASH el vue create-app prueba-central
    Donde se selecciono VUE/CLI2 a peticion de los evaluadores

    Luego de ello se procedio a realizar lo que fue la maquetacion total de la pagina eso con el fin, de tomar encuentas medidas, margenes, posiciones, entre otras cosas para luego, agregarle la data estatica. que se muestra

    luego se procedio a realizar la creacion de las componentes necesarias como lo fue, metodos de pago, y  utilizando el router de VUE para realizar la reactividad de los link en el SideNav

    luego de ello, se procedio a realizar la instalacion de vuex manualmente, aunque se que tambien al momento de crear el proyecto se puede personalizar la instalacion seleccionando como tecnologias, vuex y router.

    La seccion de metodos de pago se realizo en una componente aparte para que manejara su propia logica con el store, a pesar de que no se realizo una seccion completa del HOME del usuario para agregar cuentas, se tomo una pequeña seccion del home, en la seccion de 'estadisticas' coloando un boton que cambia una variable de vista y en el momento de que lo precionas, te cambia solo la seccion de "estadisticas" y "activos" a "metodos de pago" y viceversa.

    los metodos de pago los lo meneje directamente desde el store de vuex de tal manera que todos los componentes tengan acceso a las cuentas realizando el flujo de vuex, desde el componente emito la accion, luego el store escucha esa accion, y la mutacion realiza el cambio del state.

    A nivel de diseño tome la desicion, de realizar la maquetacion vanilla con el fin de demostrar los conocimientos de CSS y el FlexBox. Sin Embargo, para el formulario en los metodos de pago, utilice bootstrap de forma local.. A a nivel de movil, ciertamente, y pido disculpas que no este 100% adaptado, hay ciertos detalles en los diseños en los cuales describire:
         
## Detalles en los diseños
* Icono de Pagar: EL icono de pagar, tiene varios elementos a considerar, por lo que si tuve complicaciones al momento de mostrarlo en pantalla ya que un elemento se me sobpreponia sobre otro.
* Icono Central + : dicho icono lo hice responsive eliminando varios elemento al momento de se ingresa desde el movil dejando los vectores que conforma la C y el vector +.

* la tabla del CRUD, al momento de se agregan los metodos de pago, no se adapta 100% al movil y me amplia ciertos margenes, si logro mejorarlo, durante el dia. les hago el push y les aviso del cambio. Diseño en La PC.

### Espero que les guste el proyecto
  
Saludos Cordiales.

----

Jose Martinez




