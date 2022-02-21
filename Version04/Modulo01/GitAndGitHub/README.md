# Diplomado en Desarrollo Web Full Stack Front End + Back End
## _UdeCataluña_

![](https://i.ibb.co/rbzdqdR/FOTO.png)

## Git - GitHub
### Módulo 1
  
[Ir a la documentación oficial de git](https://git-scm.com/docs)
  
### Introducción
####  Toda la referencia aca descrita en adelante se tomo de atlassian. [Ir a atlassian para mas información](https://www.atlassian.com/es/git/tutorials/what-is-git)
<p align="justify"> Hoy en día, Git es, con diferencia, el sistema de control de versiones moderno más utilizado del mundo. Git es un proyecto de código abierto maduro y con un mantenimiento activo que desarrolló originalmente Linus Torvalds, el famoso creador del kernel del sistema operativo Linux, en 2005. Un asombroso número de proyectos de software dependen de Git para el control de versiones, incluidos proyectos comerciales y de código abierto. Los desarrolladores que han trabajado con Git cuentan con una buena representación en la base de talentos disponibles para el desarrollo de software, y este sistema funciona a la perfección en una amplia variedad de sistemas operativos e IDE (entornos de desarrollo integrados).</p>

<p align="justify"> Git, que presenta una arquitectura distribuida, es un ejemplo de DVCS (sistema de control de versiones distribuido, por sus siglas en inglés). En lugar de tener un único espacio para todo el historial de versiones del software, como sucede de manera habitual en los sistemas de control de versiones antaño populares, como CVS o Subversion (también conocido como SVN), en Git, la copia de trabajo del código de cada desarrollador es también un repositorio que puede albergar el historial completo de todos los cambios.</p>
      
<p align="justify"> Además de contar con una arquitectura distribuida, Git se ha diseñado teniendo en cuenta el rendimiento, la seguridad y la flexibilidad.</p>
  
### Rendimiento
<p align="justify"> Las características básicas de rendimiento de Git son muy sólidas en comparación con muchas otras alternativas. La confirmación de nuevos cambios, la ramificación, la fusión y la comparación de versiones anteriores se han optimizado en favor del rendimiento. Los algoritmos implementados en Git aprovechan el profundo conocimiento sobre los atributos comunes de los auténticos árboles de archivos de código fuente, cómo suelen modificarse con el paso del tiempo y cuáles son los patrones de acceso.</p>
  
<p align="justify"> A diferencia de algunos programas de software de control de versiones, Git no se deja engañar por los nombres de los archivos a la hora de determinar cuál debería ser el almacenamiento y el historial de versiones del árbol de archivos; en lugar de ello, se centra en el contenido del propio archivo. Al fin y al cabo, los archivos de código fuente se cambian de nombre, se dividen y se reorganizan con frecuencia. El formato de objeto de los archivos del repositorio de Git emplea una combinación de codificación delta (que almacena las diferencias de contenido) y compresión, y guarda explícitamente el contenido de los directorios y los objetos de metadatos de las versiones.</p>
    
<p align="justify"> Su arquitectura distribuida también permite disfrutar de importantes ventajas en términos de rendimiento.</p>
   
<p align="justify"> Por ejemplo, supongamos que una desarrolladora, Alice, hace cambios en el código fuente (añade una función para la próxima versión 2.0) y, luego, los confirma con mensajes descriptivos. Después, trabaja en una segunda función y confirma también esos cambios. De forma natural, estos se almacenan como elementos independientes de trabajo en el historial de versiones. A continuación, Alice cambia a la rama de la versión 1.3 del mismo software para corregir un error que afecta únicamente a esa versión anterior. El objetivo es permitir al equipo de Alice lanzar una publicación de corrección de errores, la versión 1.3.1, antes de que la 2.0 esté lista. Tras ello, Alice puede volver a la rama 2.0 para seguir trabajando en las nuevas funciones de la versión. Todo esto puede tener lugar sin necesidad de acceso a la red y, por consiguiente, es un proceso rápido y fiable. Alice podría incluso hacerlo mientras viaja en avión. Cuando esté lista para enviar al repositorio remoto todos los cambios confirmados de modo individual, bastará con que utilice un solo comando.</p>
  
### Seguridad
<p align="justify"> Git se ha diseñado con la principal prioridad de conservar la integridad del código fuente gestionado. El contenido de los archivos y las verdaderas relaciones entre estos y los directorios, las versiones, las etiquetas y las confirmaciones, todos ellos objetos del repositorio de Git, están protegidos con un algoritmo de hash criptográficamente seguro llamado "SHA1". De este modo, se salvaguarda el código y el historial de cambios frente a las modificaciones accidentales y maliciosas, y se garantiza que el historial sea totalmente trazable.</p>
  
<p align="justify"> Con Git, puedes tener la certeza de contar con un auténtico historial de contenido de tu código fuente.</p>
    
<p align="justify"> Algunos otros sistemas de control de versiones carecen de protección contra las modificaciones ocultas realizadas con posterioridad, algo que puede suponer una grave vulnerabilidad de seguridad de la información para cualquier organización que se base en el desarrollo de software.</p>
  
### Flexibilidad
<p align="justify"> Uno de los objetivos clave de Git en cuanto al diseño es la flexibilidad. Git es flexible en varios aspectos: en la capacidad para varios tipos de flujos de trabajo de desarrollo no lineal, en su eficiencia en proyectos tanto grandes como pequeños y en su compatibilidad con numerosos sistemas y protocolos.</p>
  
<p align="justify"> Git se ha ideado para posibilitar la ramificación y el etiquetado como procesos de primera importancia (a diferencia de SVN) y las operaciones que afectan a las ramas y las etiquetas (como la fusión o la reversión) también se almacenan en el historial de cambios. No todos los sistemas de control de versiones ofrecen este nivel de seguimiento.</p>
  
### Control de versiones con Git
<p align="justify"> Git es la mejor opción para la mayoría de los equipos de software actuales. Aunque cada equipo es diferente y debería realizar su propio análisis, aquí recogemos los principales motivos por los que destaca el control de versiones de Git con respecto a otras alternativas:</p>
  
#### Git es una excelente herramienta
<p align="justify"> Git tiene la funcionalidad, el rendimiento, la seguridad y la flexibilidad que la mayoría de los equipos y desarrolladores individuales necesitan. Estas cualidades de Git se detallan más arriba. En las comparaciones directas con gran parte de las demás alternativas, Git resulta muy ventajoso para muchos equipos.</p>
  
#### Git es un estándar de facto
<p align="justify"> Git es la herramienta con el mayor índice de adopción de su clase, lo que la hace muy atractiva por las siguientes razones. En Atlassian, casi todo el código fuente de nuestros proyectos se gestiona en Git.</p>
  
<p align="justify"> Un gran número de desarrolladores ya tienen experiencia con Git y una parte importante de los graduados universitarios puede que solo haya aprendido a usar dicha solución. Aunque algunas organizaciones puedan necesitar escalar la curva de aprendizaje al migrar a Git desde otro sistema de control de versiones, muchos de sus desarrolladores actuales y futuros no precisan de formación para utilizar esta herramienta.</p>
  
<p align="justify"> Además de las ventajas que brinda disponer de una amplia base de talentos, el predominio de Git también implica que muchos servicios y herramientas de software de terceros ya están integrados con Git, incluidos los IDE, y nuestras propias herramientas, como el cliente de escritorio de DVCS, <a href="https://www.sourcetreeapp.com/">Sourcetree</a>; el software de seguimiento de proyectos e incidencias, <a href="https://www.atlassian.com/es/software/jira">Jira</a>; y el servicio de alojamiento de código, <a href="https://bitbucket.org/product/es/">Bitbucket</a>.</p>
  
<p align="justify"> Si eres un desarrollador sin experiencia que quiere adquirir valiosas destrezas con herramientas de desarrollo de software, en lo que se refiere al control de versiones, Git debería estar en tu lista.</p>
  
#### Git es un proyecto de código abierto de calidad
<p align="justify"> Git es un proyecto de código abierto muy bien respaldado con más de una década de gestión de gran fiabilidad. Los encargados de mantener el proyecto han demostrado un criterio equilibrado y un enfoque maduro para satisfacer las necesidades a largo plazo de sus usuarios con publicaciones periódicas que mejoran la facilidad de uso y la funcionalidad. La calidad del software de código abierto resulta sencilla de analizar y un sinnúmero de empresas dependen en gran medida de esa calidad.</p>
  
<p align="justify"> Git goza de una amplia base de usuarios y de un gran apoyo por parte de la comunidad. La documentación es excepcional y para nada escasa, ya que incluye libros, tutoriales y sitios web especializados, así como podcasts y tutoriales en vídeo.</p>
  
<p align="justify"> El hecho de que sea de código abierto reduce el coste para los desarrolladores aficionados, puesto que pueden utilizar Git sin necesidad de pagar ninguna cuota. En lo que respecta a los proyectos de código abierto, no cabe duda de que Git es el sucesor de las anteriores generaciones de los exitosos sistemas de control de versiones de código abierto, SVN y CVS.</p>
  
#### Git es un proyecto de código abierto de calidad
<p align="justify"> Git es un proyecto de código abierto muy bien respaldado con más de una década de gestión de gran fiabilidad. Los encargados de mantener el proyecto han demostrado un criterio equilibrado y un enfoque maduro para satisfacer las necesidades a largo plazo de sus usuarios con publicaciones periódicas que mejoran la facilidad de uso y la funcionalidad. La calidad del software de código abierto resulta sencilla de analizar y un sinnúmero de empresas dependen en gran medida de esa calidad.</p>
  
<p align="justify"> Git goza de una amplia base de usuarios y de un gran apoyo por parte de la comunidad. La documentación es excepcional y para nada escasa, ya que incluye libros, tutoriales y sitios web especializados, así como podcasts y tutoriales en vídeo.</p>
  
<p align="justify"> El hecho de que sea de código abierto reduce el coste para los desarrolladores aficionados, puesto que pueden utilizar Git sin necesidad de pagar ninguna cuota. En lo que respecta a los proyectos de código abierto, no cabe duda de que Git es el sucesor de las anteriores generaciones de los exitosos sistemas de control de versiones de código abierto, SVN y CVS.</p>
  
#### Críticas de Git
<p align="justify"> Una crítica habitual sobre Git es que puede resultar difícil aprender a utilizarlo. Los usuarios nuevos y los procedentes de otros sistemas desconocerán parte de la terminología de Git, ya que esta puede ser diferente; por ejemplo, revert en Git tiene un significado distinto que en SVN o CVS. No obstante, Git es una herramienta muy competente y ofrece multitud de posibilidades a sus usuarios. Aprender a aprovechar estas posibilidades puede llevar un tiempo, pero una vez asimilados los nuevos conocimientos, el equipo puede hacer uso de ellos para acelerar su desarrollo.</p>
  
<p align="justify"> Para los equipos que provienen de un sistema de control de versiones no distribuido, el hecho de contar con un repositorio central puede parecer una buena funcionalidad que no quieren perder. Sin embargo, aunque Git se ha diseñado como un sistema de control de versiones distribuido (DVCS), con él puedes seguir teniendo un repositorio oficial convencional donde se almacenen todos los cambios del software. En Git, como el repositorio de cada desarrollador lo incluye todo, no es necesario que su trabajo se vea limitado por la disponibilidad y el rendimiento del servidor "central". Durante las interrupciones o la ausencia de conexión, los desarrolladores pueden continuar consultando todo el historial del proyecto. Gracias a la flexibilidad y la arquitectura distribuida de Git, puedes trabajar como de costumbre, pero disfrutando de las ventajas adicionales de Git, algunas de las cuales puede que ni siquiera supieras que necesitabas.</p>
  
<p align="justify"> Ahora que entiendes en qué consiste el control de versiones, qué es Git y por qué los equipos de software deberían utilizarlo, sigue leyendo para descubrir los beneficios que Git puede aportar en toda la organización.</p>
  
####  Toda la referencia aca descrita en adelante se tomo de Git. [Ir a Git para mas información](https://git-scm.com/docs/git)
  
### Comandos Básicos
```git add```
Agrega contenido de archivo al índice.
  
```git branch```
Lista, crea o elimina ramas.
  
```git config```
Obtiene y configura el repositorio o las opciones globales.
  
```git checkout```
Cambia de rama o restaura los archivos del árbol de trabajo.
  
```git clean```
Elimina archivos sin seguimiento del árbol de trabajo.
  
```git clone```
Clona un repositorio en un nuevo directorio.
  
```git commit```
Registra cambios en el repositorio.
  
```git diff```
Muestra cambios entre confirmaciones, confirmación y árbol de trabajo, etc.
  
```git fetch```
Descarga objetos y referencias de otro repositorio.
  
```git init```
Crea un repositorio Git vacío o reinicia uno existente.
  
```git merge```
Une dos o más historias de dasrrollo juntas.
  
```git mv```
Mueve o cambia el nombre de un archivo, un directorio o un enlace simbólico.
  
```git pull```
Obtiene e integra con otro repositorio o una rama local.
  
```git push```
Actualiza referencias remotas junto con objetos asociados.
  
```git rebase```
Vuelve a aplicar compromisos encima de otro base.
  
```git remote```
Administra un conjunto de repositorios rastreados.
  
```git revert```
Restaura archivos del árbol de trabajo.
  
```git rm```
Elimina archivos del árbol de trabajo y del índice.
  
```git stash```
Guarda los cambios en un directorio de trabajo sucio.
  
```git status```
Muestra el estado del árbol de trabajo.
  
####  Toda la referencia aca descrita en adelante se tomo de Git. [Ir a Git para mas información](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
  
### Los tres Estados
  
<p align="justify"> Ahora presta atención. Esto es lo más importante que debes recordar acerca de Git si quieres que el resto de tu proceso de aprendizaje prosiga sin problemas. Git tiene tres estados principales en los que se pueden encontrar tus archivos: confirmado (committed), modificado (modified), y preparado (staged).</p>
 
<ol align="justify">
  <li> Confirmado: significa que los datos están almacenados de manera segura en tu base de datos local.</li>
  <li> Modificado: significa que has modificado el archivo pero todavía no lo has confirmado a tu base de datos.</li>
  <li> Preparado: significa que has marcado un archivo modificado en su versión actual para que vaya en tu próxima confirmación.</li>
</ol>
  
<p align="justify"> Esto nos lleva a las tres secciones principales de un proyecto de Git: El directorio de Git (Git directory), el directorio de trabajo (working directory), y el área de preparación (staging area).</p>
 
<img src="https://git-scm.com/book/en/v2/images/areas.png" />
  
<ol align="justify">
  <li> El directorio de Git es donde se almacenan los metadatos y la base de datos de objetos para tu proyecto. Es la parte más importante de Git, y es lo que se copia cuando clonas un repositorio desde otra computadora.</li>
  <li> El directorio de trabajo es una copia de una versión del proyecto. Estos archivos se sacan de la base de datos comprimida en el directorio de Git, y se colocan en disco para que los puedas usar o modificar.</li>
  <li> El área de preparación es un archivo, generalmente contenido en tu directorio de Git, que almacena información acerca de lo que va a ir en tu próxima confirmación. A veces se le denomina índice (“index”), pero se está convirtiendo en estándar el referirse a ella como el área de preparación.</li>
</ol>
  
<p align="justify"> El flujo de trabajo básico en Git es algo así:</p>
  
<ul align="justify">
  <li> Modificas una serie de archivos en tu directorio de trabajo.</li>
  <li> Preparas los archivos, añadiéndolos a tu área de preparación.</li>
  <li> Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación y almacena esa copia instantánea de manera permanente en tu directorio de Git.</li>
</ul>
  
## Github
  
[Ir a la página oficial de Github](https://github.com/)
  
### Introducción
####  Toda la referencia aca descrita en adelante se tomo de Digital.gov. [Ir a Digital.gov para mas información](https://digital.gov/resources/an-introduction-github/)
  
<p align="justify"> GitHub es una interfaz basada en la web que utiliza Git , el software de control de versiones de código abierto que permite que varias personas realicen cambios independientes en las páginas web al mismo tiempo. Como señala Carpenter, debido a que permite la colaboración en tiempo real, GitHub alienta a los equipos a trabajar juntos para crear y editar el contenido de su sitio.</p>
  
### Terminología en GitHub
  
<p align="justify"> Durante el video, Carpenter define algunos de los términos comunes que los equipos deberán comprender al usar GitHub. Ellos son:</p>
  
<ol align="justify">
  <li> <strong>Repository (repo)</strong>: una carpeta en la que se almacenan todos los archivos y sus historiales de versión.</li>
  <li> <strong>Branch</strong>: un espacio de trabajo en el que puede realizar cambios que no afectarán al sitio activo.</li>
  <li> <strong>Markdown (.md)</strong>: una forma de escribir en Github que convierte texto sin formato en código de GitHub. Sitios como Atom y Sublime Text son ejemplos de recursos gratuitos para desarrolladores que utilizan Markdown.</li>
  <li> <strong>Commit Changes </strong>: un registro guardado de un cambio realizado en un archivo dentro del repositorio.</li>
  <li> <strong>Pull Request (PR) </strong>: la forma de solicitar que los cambios realizados en una rama se fusionen con otra rama que también permite que varios usuarios vean, discutan y revisen el trabajo que se está realizando.</li>
  <li> <strong>Merge </strong>: después de que se aprueba una solicitud de extracción, la confirmación se extraerá (o fusionará) de una rama a otra y luego se implementará en el sitio en vivo.</li>
</ol>