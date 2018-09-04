# Guía de estilo para Git

Esta guía de estilo para Git tiene como objetivo mantener un orden y coherencia en las herramientas desarrolladas por la comunidad de HorchataJS. Este documento es un trabajo abierto a mejoras y cualquier sugerencia o cambio es bienvenido.

# Tabla de contenido

1.  [Branches](#branches)
2.  [Commits](#commits)
3.  [Mensajes](#mensajes)
4.  [Pull Requests](#pull-requests)
5.  [Recursos](#recursos)

## Branches

* `master` - rama estable del proyecto.
* `develop` - rama por defecto, contiene los útimos cambios y arreglos.

- Usa nombres _cortos_ y _descriptivos_ para tus ramas o branches:

  ```shell
  # bien
  $ git checkout -b migracion-de-api

  # mal - poco descriptivo
  $ git checkout -b simple_arreglo
  ```

- Identificadores correspondientes a problemas, tickets, o issues de un
  servicio externo como aquellos de Github pueden ser usados para nombrar
  tus branches. Por ejemplo:

  ```shell
  # GitHub Issue #15
  $ git checkout -b issue-15
  ```

- Usa _guiones_ para separar palabras.

- Elimina tu branch del repositorio remoto después de haber sido
  integrado a menos que sea necesario guardarlo.

  Consejo: Usa el comando a continuación desde "master" para mostrar
  branches integrados:

  ```shell
  $ git branch --merged | grep -v "\*"
  ```

- _Nota_: toda nueva rama debe comenzar en `develop` y regresar a `develop` nuevamente.

## Commits

* Cada commit debe de estar compuesto por un solo _cambio lógico_. No
  debes de tener varios _cambios lógicos_ en un commit. Por ejemplo, si
  un cambio corrige un error y, a la vez, optimiza el rendimiento de un
  aspecto de la aplicación, debes separarlo en dos commits.

* Realiza commits _temprano_ y _frecuentemente_. Commits que son
  pequeños y autónomos son más fáciles de entender y revertir si algo sale
  mal.

* Los commits deben de ser ordenados _lógicamente_. Por ejemplo,
  si el _commit A_ depende de los cambios hechos en _commit B_, entonces,
  el _commit B_ debe de realizarse antes del _commit A_.

## Mensajes

* Usa tu editor y no tu terminal cuando escribes un mensaje para el
  commit. Realizar commits desde la terminal te hace pensar que es
  necesario hacer que quepa todo en una sola linea lo cual usualmente
  resulta en mensajes ambiguos y poco informativos.

  ```shell
  # bien
  $ git commit

  # mal
  $ git commit -m "Correción rápida"
  ```

* La línea de resumen, es decir, la primera linea del mensaje de commit,
  debe ser _descriptiva_ y al igual _concisa_. Idealmente, esta línea
  no debe de tener más de _50 caracteres_. Debe de hacer uso correcto de
  mayúsculas y también debe ser escrita en el imperativo. No es
  necesario que termine en punto final puesto que sirve como el _título_
  del commit.

  ```shell
  # bien - modo imperativo, usa mayúsculas y tiene menos de 50 caracteres
  Marcar registros como obsoletos tras falla

  # malo
  Arreglé ActiveModel::Mensajes de error cuando AR fue usado correctamente fuera de Rails
  ```

* Después del título debe ir una línea en blanco seguida por una
  descripción más a fondo del commit. Cada línea debe de tener 72
  caracteres o menos y debe de explicar la _razón_ por la cual el cambio
  era necesario. Preguntas acerca de cómo el cambio tomó lugar son
  respondidas por el cambio en sí y sus efectos. El mensaje también debe
  de vincular otros recursos relacionados como el número de un issue
  correspondiente:

  ```shell
  Resumen corto de no más de 50 caracteres.

  Texto opcional detallando aspectors del cambio en el commit donde
  cada linea debe tener un máximo de 72 caracteres.

  Vínculos a recursos relacionados pueden ser agregados al final del
  mensaje:

  Corrige: #56, #78
  Véase también: #12, #34

  Fuente http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
  ```

* El mensaje debe ser escrito en español y preferiblemente comenzar con un verbo conjugado en tiempo presente.

  ```shell
  # bien - tiempo presente
  Agregar nuevo elemento en el menú principal

  # malo
  Quité función que transforma oraciones
  ```

## Pull Requests

* Cada pull request debe tener una descripción que debe explicar qué se hizo y cómo afecta el proyecto.
* La descripción de un pull request debe estar escrita en español.
* El pull request debe mencionarse al final el/los issues que fueron resueltos (si existen): "`Corrige: #123`".
* Los pull request deben ser pequeños y concisos.
* Los commits en el pull request deben seguir las estilo de código del proyecto.
* _Nota_: la rama `target` de todo pull request siempre debe ser `develop`.

## Recursos

1.  [Try github](https://try.github.io/levels/1/challenges/1)
2.  [Atlassian git tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository/)
3.  [Git cheat sheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
4.  [Github help: user collaborating](https://help.github.com/categories/collaborating/)

# Licencia

"[Git Style Guide](https://github.com/agis/git-style-guide)" por [Agis Anastasopoulos](http://agis.io), bajo [CC BY](https://creativecommons.org/licenses/by/4.0/) / Traducido por [Johnny Ruiz](https://github.com/jeko2000) / Modificado para apegarse al estilo de trabajo de la comunidad HorchataJS.
