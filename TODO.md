FRONT

El usuario se loguea y entra a la página de usuario que de momento sólo le muestra un botón de cerrar sesion.
El botón si tiene funcionalidad ya que si se pulsa borra el local storage y puede volverse a ir a la home y nos lleva de nuevo la login.

He puesto en la funcion requireAuth que si hay login vaya a user, y si no lo hay vaya a login, y funciona, pero en cambio, el enlace en la página de user de home, no funciona y no te lleva ahí aunque cierres sesion... revisarlo




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
