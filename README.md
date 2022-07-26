# RICARDO LOPEZ
## README DONDE VOY A IR COMENTANDO LAS ENTREGAS
Comision 31220

## Clase 1: Crear la APP utilizando CLI
- 11/06/2022: Subo la primer entrega de la clase. Aqui modifiqué titulo, letras y agregue un componente llamado SaludoAlPie donde justamente, saludo al pie de la pagina. Desde Index.js envío el nombre del saludo a imprimirse en pantalla.

## Clase 2: Agregado de NavBar / Cuerpo 
- 15/6/2022: Subo la segunda entrega de la clase. Aqui coloque el Navbar explicado en clase y estuve viendo como subirlo via Boostrap. Tambien agregue al cuerpo CARDS para ir colocando cosas.

## Clase 3: Agrego Carrito de Compras y itemListContainer 
- 18/06/2022: Subo la tercera entrega de la clase. Aquí ya deje el NAV de boostrap. Agrego a la derecha del mismo el carrito. Estoy agregando una imagen PNG en vez de importar un icono de fontasome (cosa que seguramente haga despues). En la funcion que llamo desde APP, le agregue una linea para separar rapidamente el nav del cuerpo. Es provisoria. El mensaje que muestro en pantalla, entre " " se encuentra la propiedad enviada por la funcion.

## Clase 4: Contador con Botón
- 22/06/2022: Subo la cuarta entrega de la clase. Aquí estoy mostrando la informacion en el ItemListContainer. En él estoy colocando el stock disponible, muestro la cantidad que va a incrementarse o decrementarse segun se seleccione. En el caso de llegar hasta el stock, indica que no hay mas stock y no suma mas. En el caso de llegar a 0, se indica que el carrito esta vacio. Al apretar Reiniciar, el valor vuelve a 1. 

## Clase 5: Catálogo con MAPS y Promises
- 28/06/2022: Subo la quinta entrega de la clase. Aqui estoy adaptando el proyecto al uso de un JSON. Utilizando un Fetch (con un TimeOut de 2segundos), traigo la informacion que la levanta ItemListConteiner, que luego se la pasa a ItemList quien la acomoda en PROPS de acuerdo al nombre de cada item y por último, es Item quien genera las cards de Booster.
En esta etapa deje los botones de sumar y restar, agregar carrito y reiniciar en cada CARDS. En una proxima entrega seguramente deje estos botones para el momento de entrar el detalle en particular.

## Clase 6: Detalle de Producto
- 3/07/2022: Subo la sexta entrega de la clase. En esta entrega, cambié el concepto de la pagina. Ahora es un e-commerce de muñecos/letras tejidos. Debjo del NAVBAR coloco el detalle de un producto. Arme 1 fila con 3 columnas: foto chiquita, foto grande, detalle del producto. En mi caso, el FETCH no me funciona si no agrego el HEADERS. Ademas, en el ItemDetailContainer, agregue un condicional para que, cuando se hace la lectura del JSON id===1, renderice el producto luego de ser leido. Sin este condicional, no me funcionaba.

## Clase 7: Primera Entrega del Proyecto Final
- 6/07/2022: Subo la septima entrega de la clase, o sea, la primera entrega del Proyecto Final. Voy a comentar en que consiste la pagina:
    - Se trata de un ecommerce de "muñecos" "muñecas" "letras" tejidas en crochet. Las cuales, son las categorias de mi proyecto
    - La pagina arranca en el HOME donde se muestran todos los productos, indicando la categoria, el nombre, la imagen, una breve descripcion, precio, stock y boton VER MAS
    - En el NavBar, se encuentra el logo de la pagina, el nombre de la pagina (Tiende OnLine PiguArte), las 3 categorias y el logo del Carrito
    - Estoy utilizando Boostrap en casi todos los elementos para hacer mas amigable el estilado y el ordenamiento
    - Tambien tiene instalado el react-router-dom para realizar la navegacion entre paginas
    - Navegacion:
        - Haciendo clic en cada categoria, se reacomoda segun la seleccion
        - Haciendo clic en la imagen del producto o en el boton VER MAS, se ejecuta el ItemDetail
        - En el ItemDetail se muestras 2 columnas, una con un Carousel de Boostrap con 2 imagenes (cada 2 segundos cambian) y otra con datos del producto
        - Agregué los botones para sumar producto al carrito (no realizado todavia). Al llegar al stock o a 0, hay un mensaje de advertencia. Ademas, el boton de reinicio en 1.
        - Haciendo clic en el logo de la pagina se redirige al HOME
        - Haciendo clic en el carrito, se va a una pagina con una imagen y un cartel de ComingSoon. Haciendo clic en la imagen se vuelve al HOME
        - Escribiendo cualquier ruta no definida, redirige al HOME
    - Casi todas los JS tiene su archivo CSS.
    - La informacion esta almacenada en un JSON en la carpeta PUBLIC.
    - Utilizo FLAGS (usesState) para poder detectar cuando ya tengo realizada la lectura con FETCH (useEffect) y para saber en que momento puedo mostrar en pantalla los productos
    - Utilizo TimeOut para simular la lectura sobre una base de datos (useEffect).
    - Con estos FLAGS muestro mensajes de CARGANDO / CARGANDO DETALLE

## Clase 8: Sincronizar Counter
    - 10/07/2022: Subo la octava entrega de la clase. La sincronizacion del counter.
    *IMPORTANTE*: Como almacenar los items en un archivo JSON no me funcionaba en Github PAGES, ahora utilizo la lectra de un archivo JSX por medio de PROMISE, no por FETCH. Ahora funciona en PAGES.
        - Segun el desafio, tenia que separar la responsabilidad del ItemCount, lo cual esta realizado.
        - Cuando hago clic en AgregarCarrito, desaparece la posibilidad de agregar otro item y aparece el boton de ir al carrito. En Consola se deja expreso la cantidad del carrito (cantCart)
        - Haciendo clic en el boton de ir a carrito, va a una ruta VACIA de '/cart'

## Clase 9: Cart Context
    - 10/07/2022: Subo la novena entrega de la clase. El Cart Context.
        - Cart Context esta creado y en el App como Provider
        - Al hacer clic en Agregar Carrito, se genera el array CART con el detalle del item agregado y la cantidad (item, cantidad). Esto se imprime en consola.
        - No acepta duplicado. En el caso de volver a agregar el item, suma la cantidad del item sin agregar un nuevo item por separado.
        - Se agregan los metodos recomendados (addItem, removeItem, clear, isInCart).
        - Hoy en dia, solo se utiliza addItem y isInCart. El primero agrega el item al array del carrito y el ultimo (isInCart) para que no se agregue el mismo item como componente del vector por separado. 
        - Por el momento no se utiliza el removeItem y el Clear ya que eso se vera cuando se realice el componente del CARRITO (por ahora no implementado)

## Clase 10: Cart View
    - 17/07/2022: Subo la decima entrega de la clase. El Cart View
        - En esta entrega estoy agregando la seccion del carrito
        - La pagina tiene una imagen de background
        - Se generan 2 columans:
            - Una con el detalle del item
                - Titulo / Categoria / Unidades / Precio unitario / Precio total
            - Otra con el detalle del total
                - Total de items a comprar
                - Precio total a pagar
        - En cada item se encuentra el boton ELIMINAR ITEM (funcion removeItem)
        - Los items no se duplican (funcion isInCart)
        - Se encuentra un boton de eliminar carrito (funcion clear)
        - Los botones LIMPIAR CARRITO Y FINALIZAR COMPRA, tienen condicionales
            - Si el carrito esta vacio, estan desabilitados con un color gris
            - Cuando el carrito tiene al menos 1 item, cambiar de color y cumple su funcion
        - Si no hay productos en el carrito, el cardWidget no se muestra (condicional)

## Clase 11: Firebase I
    -20/07/22: Subo la onceava entrega de la clase. Leer la informacion desde Firebase.
        - Generé en Firebase una coleccion llamada PruebaPiguarte / Ya no tomo los datos desde un archivo JSX
        - Leo la informacion desde item list container utilizando useparams para filtrar por categoria o para renderizar todos los productos.
        - Eliminé la gran mayoria de fotos de ASSETS/Images (solo quedan icono de carrito y fondo para CART)
        - desde item detail container, utilizo una funcion creada en Assets/Services/firestore.js para que la promesa sea leida correctamente.
        - Ademas, coloqué condicional al momento de ver el ItemCount para que, cuando el valor seleccionado sea 0, se deshabilite el enviar al carrito el producto.

## Clase 12: Firebase II
    -25/07/22: Subo la doceava entrega de la clase. Firebase II
        - En esta entrega, estoy agregando:
            - Logica para que, si no hay productos en stock, haya un MODAL avisando que no hay stock y por ende, no se puede agregar a carrito
            - Si se finaliza compra, se agrega genera una coleccion llamada "oc" (orden de compra)
            - Alli se agregan todos los datos del cliente (nombre, apellido, mail, telefono y fecha)
            - Al momento de finalizar la compra
                - Aparece un modal con mensaje
                - Ademas, se actualiza el stock de producto segun la compra
                - Se vacia el carrito
        - Creo haber cumplido con el desafio