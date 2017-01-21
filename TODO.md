Convierto el componente en clase

Al intentar editar clase veo que sigue mostrando complet clase. Pienso que es porque le digo que navege a classroom/:id y piensa que edit-class o serch-class es un id.

Cambio las url de estas aunque me extraña que tenga que ser así.

No se puede entrar directamente a la calse porque dice que no la puedes recuperar porque no estas autentificado. Se puede quitar la autorización en el server pero incluso así da error porque no tiene las props... no se porque ve la classroom como undefined. Si se pasa el status directamente desde los maps state to props al componentWillMount y se hace un console.log se ve que no tiene ni status ni specificclassroom que si están en el redux... ¿porqué?

#
TODO

##
New corporative color
Hay que salvar el archivo que he puesto en el raíz en 'client/node_modules/bootstrap/dist/css/bootstrap.min.css'. No se sube automáticamente porque está dentro de node_modules;

##
Implement notification system
Poner un sistema de notificaciones como el de Javier que indique todos los exitos y errores que envia el back

##
Create a squeleton for user
Mantener el Jumbotron exterior en todas las páginas de usario y variar únicamente el interior creando diferentes componentes.
Alinear mejor el botón de cerrar sesión.

##
List user classroom in his profile
Cuando el usuario no tiene ninguna clase debe mostrar un mensaje informándole e instándole a crear su primera clase

##
Create classrroms
Mirar como almacenar las horas, actualmente se almacenan como string y habrá que cambiarlo para enviar alertas

Eliminar del formulario la url y generarla automáticamente

##
Edit classroom
La fecha no se recupera y hay que ponerla de nuevo... hay que solucionarlo, además de modificar el diseño para incluir la fecha y la hora.
Solucionar que el teacher sea undefined al principio (ver documentación)

#
DOCUMENTACIÓN (¿Documentar un proceso es crear la documentación?)

##List classrooms user follow in his profile
Al apuntarse a una clase, pasa de nuevo el problema de que la specificclassroom tarda un poco más que en pintarse la página por primera vez y entonces en ese momento el classroom y la consola da un error de que no puede hacer map de undefined, pero sólo es un error en consola que no se si tendremos que solucionar.

##
User can Sing Up to a classroom
El back no dejaba apuntarse porque no era el profesor (obviamente). Es una decisión de funcionalidad si se puede apuntar el alumno o debe mandar solicitud al profesor, pero yo de momento voy a dejar que se apunte el alumno.

El ordenador portatil no me deja apuntar a clases, al intentar hacer post a una direccion me dice que la clase no existe, aunque si se hace get si se obtiene la información.... he pensado que es porque hay un método Classroom.get supongo que copiado del de user, y lo mismo nosotros tendríamos que utilizar Classroom.getone ya que se llama getone el método nuestro que obtiene la información de una sola clase, pero no se... juraría que en el otro ordenador si soy capaz de apuntarme a una clase.... luego lo miraré.

Efectivamente no me ha dejado apuntarme tampoco desde el otro ordenador... no se porqué, de hecho hay usuarios apuntados a alguna clase con lo que en su momento funcionó, que fue cuando lo subí....ahora no doy con el error.

Sólo deja apuntarse a clases recien creadas... ¡¡Misterio!!

##
Edit classroom
Para hacer que el profesor pueda editar la clase y el alumno apuntarse hay que comprobar si el usuario es el profesor. El problema es que la función de getOneClassRoom que es la que devuelve specificclassroom tarda un poco más que en pintarse la página por primera vez y entonces en ese momento el profesor es undefined. Lo he solucionado cambiando en ClassroomOwner en lugar de setImmediate el cambio de página setTimeout poniendo medio segundo, lo que da tiempo a que llegue la información, pero creo que es un poco chapuza.....Pasa lo mismo a la vuelta de actualizar una clase pero ahí lo he dejado para que se pueda comprobar.

##
Show complete classroom
Tenemos todas las clases en un array, pero no soy capaz de acceder al contenido de un array concreto, tengo que recorrer todo el array y quedarme sólo con las que quiero. Mi primera idea es filtralas para que quede una sóla, pero tendría que filtrarla por ID, pero ¿cómo me puede llegar esa información?
Puedo poner enlaces que lleven a /clases/id, pero no se como crear esas páginas dinámicamente.
Puedo hacer como con editar perfil que pongo el pefil del usuario, pero como he dicho no puedo acceder a sólo los datos de una clase
Puedo hacer un filtro que muestre sólo la clase con determinada ID, pero ¿como me llega esa ID? Se puede enviar información en JS por url como hace PHP con GET
Puedo hacer una nueva consulta a la BBDD y almacenar en el estado la información de una sola clase aunque se almacenaría información redundante en el estado.

Me decido por esta última. Necesito crear un nuevo endpoint para obtener sólo la información de una clase (el que hay obtiene todas las clases)... supongo que lo normal sería meterlo en el server get de classroom, pero ya tiene el get de todas las clases y se exporta como default... a lo mejor se pueden meter más, pero no se como hacerlo.

A la hora de hacer el enlace lo voy a mandar a complete-classroom, pero para ello tengo que tener unas mapDispatchToProps, el problema es que como lo hizo Javier es una clase ya que recibe sus propios props, y para pasarle el mapDispatchToProps necesito que sea una constante.... buso en Internet y encuentro esto https://github.com/reactjs/redux/issues/693 que me funciona.

Consigo crear una nueva entrada en el state que intento llamar SpecificClassroom... mogollón de problemas, al final descubro que es que no se pueden poner mayúscuas y me funciona con specificclassroom.

Ya me pasó al crear el array de classrooms que si el initialState esta vacio 'casca', hay que ponerle que es un array vacio.... lo mismo me ha pasado con specificclassroom.

He añadido campos descripción y url en el formulario de craear clase. La descripción si valdrá, pero la url, que será la que se insertará al emitirse tiene que generarse automáticamente.

##
List user classroom in his profile
Tenemos todas las clases en un array, pero no soy capaz de acceder al contenido de un array concreto, tengo que recorrer todo el array y quedarme sólo con las que quiero. Actualmente lo hago con un map y un selector ternario, que actua como filtro, pero supongo que sería mejor hacerlo directamente con un filtro

##
Refresh the localstorage when edit profile. Can refresh page.
Me costó darme cuenta de porqué al recargar la página no leía correctamente los datos. El caso es que el usuario no se está leyendo del stado sino del localstorage, así que cada vez que cambio el estado del usuario tengo que volver a grabarlo en el localstorage.. ¿Por qué no se está leyendo directamente del estado?








He tenido que cambiar nombres a funciones onclick (clickedit y demás)... supongo que en la misma página no pueden llamarse igual pero si en diferentes ¿no?




BACK
### CLASES
Crear los test
- No se porqué en el main tengo que poner import clase from './class'; porque no me deja importar class.
Los test dependen unos de otros y eso es malo, ya lo dijo Javier.
Yo tengo que crear la clase, guardarme su id para luego poder recuperarla y es complicado.
Para poder hacerlo cuando se crea la clase no me vale con que se cree, me la tiene que devolver para poder recuperar el id, y además parece lógico para mostrarle al usuario la clase que ha creado. Para ello añado res.send(clase); al final del archivo create, pero al hacerlo, y aunque pasa el test, da este error: error: [experts-server] error duing request: Error: Can't set headers after they are sent.

Añadir funciones de autentificación de usuarios al añadir los usuarios a las clases.


HECHO
- Añadir usuarios a la clase:
Me dió mogollón de problemas el formato de los arrays, no se si son [] o {}, en cada sitio lo he tenido que poneer de un modo.
  Aunque en el create clase he puesto que el array de students se cree como vacio ([]) por default, no me lo creaba y he tenido que ponerlo también en la creación del archivo.

- Poner hora a la clase
Si se pone con formato 0:00 se la traga. Supongo que la transformaremos nosotros a ese formato cuando la cojamos del front)

He añadido el boleano isPublic a las clases, que toma por defecto el valor de true. y he puesto que los estudiantes solo puedan registrarse si las clases son públicas. Funciona bien pero no se como cambiar el valor de ese atributo desde Postman, porque al enviarle un valor como false, 1 o cualquier otro, la consola me da error de Value for isPublic must be a boolean or null

-


- De momento dejo comentado en el create que devuelva el json, que lo necesiteré si quiero hacer test del get.




Borrar clases

### USUARIOS
Borrar usuario


### Cosas de juan

Para desactivar el Touchpad:

sudo modprobe -r psmouse
Para activar el Touchpad:

sudo modprobe psmouse


{
  "name": "lasequero",
  "date": "2017-11-02T23:00:00.000Z",
  "hour": "00:00",
  "teacher": "573ad3ed-e866-4e81-bef4-eedea43ed7a2",
  "students": [],
  "id": "48a672fd-a541-41a9-bd34-fc32a4fc970f"
}


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGZAamFsc2RmLmVzIiwiaWQiOiI1NzNhZDNlZC1lODY2LTRlODEtYmVmNC1lZWRlYTQzZWQ3YTIiLCJsb2dpbiI6ImFsdmFybyIsIm5hbWUiOiJxdWVybyIsInJlZ2lzdHJhdGlvbkRhdGUiOiIyMDE2LTExLTEyVDE4OjExOjI0LjY5NVoiLCJzdXJuYW1lIjoiYWx2YXJvIiwiaWF0IjoxNDc4OTc0Mjg3fQ.ZUZSVfOyiVFYUzbgKcw3KyiiKAILy1ofW7JiQsp8uQc


### - Mirar el update de usuario para el name y surname.
