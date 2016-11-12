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

- Poner hora a la clase
Si se pone con formato 0:00 se la traga. Supongo que la transformaremos nosotros a ese formato cuando la cojamos del front)

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
