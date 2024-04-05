# Git & GitHub

## ¿Como empiezo a usar el repositorio?

Lo primero que debes hacer es una bifurcacion de mi codigo, entonces vas a presionar el boton `fork` y crear "un nuevo repositorio" a tu nombre, pero con mi codigo a disposicion.

Una vez hayas realizado la bifurcacion debes clonar el repositorio en un espacio apropiado, por ejemplo en el escritorio. Vas a presionar `clic derecho` y seleccionas la opción `open git bash here` para tener la terminal en la ubicacion del escritorio.

Antes de realizar cualquier cosa con la terminal debes asegurarte de tener tu cuenta de github vinculada a tu windows (o linux), entonces, vas a buscar las `credenciales de windows` en la busqueda del windows con la tecla de windows o presionando el boton de windows en la barra de tareas; una vez hayas presionado la opcion de credenciales debes asegurarte de ir a la categoria de `credenciales de windows` y en el caso de que haya unas credenciales diferentes a las tuyas debes eliminar la informacion presionando la opcion de `git:https://github.com` y luego eliminar del boton `eliminar`.

Despues de haber echo la eliminacion y/o verificacion de las credenciales puedes continuar configurando git a tu nombre (si ya tienes tus credenciales ignoras los pasos y continuas con el `git clone`), entonces vas a realizar los siguientes pasos:

        git config --global user.name "username"

Con el comando anterior puedes agregar tu usuario; por ende, debes modificar la informacion dentro de las comillas por tu nombre de usuario de github.

        git config --global user.email "email"

Con el comando anterior puedes agregar tu correo electronico; por ende, debes modificar la informacion dentro de las comillas por tu correo electronico de github.

Despues de haber realizado los pasos anteriores puedes utilizar git con tu informacion, entonces, puedes clonar el repositorio copiando el enlace que se genera en el boton `code` de la bifurcacion realizada previamente.

        git clone

El comando anterior te ayuda a clonar un repositorio, pero antes de presionar enter debes agregar el enlace del repositorio que copias desde el boton `code` por ejemplo, `git clone https://github.com/jfelipeq14/js.git` (no debes copiar el ejemplo. Tu enlace debe tener tu nombre de usuario).

Cuando el proceso haya terminado ahora debes cambiar el directorio (carpeta)

        cd js/

En este caso va aparecer la rama en la que estas ubicado/a y por defecto debe decir `develop` entonces, debes crear una rama con tu nombre para empezar a trabajar

        git checkout -b nombre

Con el comando anterior vas a poder crear una rama y pasarse a ella para utilizarla. Justo en ese momento vas a poder modificar lo que quieras del repositorio y lo primero que debes hacer es crear una carpeta con tu nombre, que puedes hacer desde la terminal o con el visual studio code

- Abrir vscode y crear la carpeta desde ahi

        code .

- Crear la carpeta desde la terminal

        mkdir nombre

Con el comando anterior puedes crear una carpeta (directorio) nueva; por ende, debes modificar la informacion en vez de `nombre` debes poner tu nombre. Justo en ese momento abres el visual studio code para trabajar de inmediato con el comando `code .` y si quieres crear los archivos desde la terminal

        touch nombreArchivo.extension

Con el comando anterior vas a poder crear un archivo y debes tener en cuenta que debes poner el nombre del archivo y la extension que necesitas. Por ejemplo, `juan.html` o `juan.js`.

Con la explicacion previa ya tienes la primera parte de como usar un repositorio, crear carpetas y crear archivos y todo esto desde la terminal. Siempre despues de cada comando se presiona enter para que funcione el mismo.

## ¿Como puedo subir los cambios?

Una vez hayas realizado cambios en el repositorio y estes seguro de que las cosas funcionan perfectamente debes subir cambios para generar un versionamiento y poder llevar un control más preciso del codigo.

        git add .

Con el comando anterior vas a indicarle a git que todos los cambios que tengas van a ser tenidos en cuenta para llevarlos al versionamiento.

        git commit -m "mensaje"

Con el comando anterior vas a indicarle a git que los cambios que ya reconocio les va a asignar un mensaje para poder llevar un orden de lo que estas haciendo, entonces la informacion que hay dentro de las comillas debe decir e indicar que hace tu commit (como afecta o que agregas) para que no solo tu lleves el control, sino tambien el resto de colaboradores.

        git push origin nombreRama

Con el comando anterior vas a indicarle a git que los cambios que tienes en este momento los va a subir al github (la nube).

Algo muy importante que debes tener en cuenta es que luego de subir los cambios debes crear una PR (pull request) que lo que hace es decirle al dueño del repositorio que tu tienes cambios utiles para su repositorio; por ende, cada uno de los commits debe ser descriptivo con lo que hace y/o con lo que se agrega en el mismo. El paso que continua seria presionar el boton `compare & pull request` y luego de agregar una descripcion (opcional) vas a crear el pull request con el boton `create pull request` y lo más probable es que si no hay conflictos tus cambios van a ser tenidos en cuenta para continuar con el desarrollo.

## ¿Como puedo obtener los cambios?

Una vez echo el merge (combinar la informacion de todos los colaboradores y la que ya habia por defecto) lo que sigue es obtener los cambios en tu repositorio; por ende, debes buscar tu repositorio (el que tiene tu nombre) y presionar el boton `sync fork` una vez presionado el boton abre un modal pequeño que permite actualizar la rama en el caso de que hayan cambios, entonces, presionas el boton `update branch` y ya tienes los cambios que haya en el repositorio principal.

No termina ahi, debes ir a la terminal de git y/o a la terminal del vscode para continuar con los pasos

        git fetch origin develop

Con el comando anterior vas a poder preguntarle a git si reconoce cambios en la nube (github) y se va a preparar para recibirlos, entonces, esto ayuda a tener al dia la informacion.

        git pull origin develop

Con el comando anterior vas a poder obtener la informacion que ha sido modificada por otros colaboradores o por ti, entonces, asi es como vas a tener al dia tu codigo para poder seguir trabajando con la informacion completamente actualizada. La idea es llevar la informacion a la par del repositorio principal y evitar conflictos.