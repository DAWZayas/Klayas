Recuperar las clases.
Al hacer el componente ClassroomOwner, si lo intento importar desde el index de componentes me da error, tengo que importarlo directamente del archivo.

#
TODO

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

#
DOCUMENTACIÓN (¿Documentar un proceso es crear la documentación?)

##
Show complete classroom
Tenemos todas las clases en un array, pero no soy capaz de acceder al contenido de un array concreto, tengo que recorrer todo el array y quedarme sólo con las que quiero. Mi primera idea es filtralas para que quede una sóla, pero tendría que filtrarla por ID, pero ¿cómo me puede llegar esa información?
Puedo poner enlaces que lleven a /clases/id, pero no se como crear esas páginas dinámicamente.
Puedo hacer como con editar perfil que pongo el pefil del usuario, pero como he dicho no puedo acceder a sólo los datos de una clase
Puedo hacer un filtro que muestre sólo la clase con determinada ID, pero ¿como me llega esa ID? Se puede enviar información en JS por url como hace PHP con GET
Puedo hacer una nueva consulta a la BBDD y almacenar en el estado la información de una sola clase aunque se almacenaría información redundante en el estado.


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
