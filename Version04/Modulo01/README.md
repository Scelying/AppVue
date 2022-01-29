# Diplomado en Desarrollo Web Full Stack Front End + Back End
## _UdeCataluña_

![](https://i.ibb.co/rbzdqdR/FOTO.png)

## Introducción al Desarrollo Web
### Módulo 1

<p align="justify"> Este módulo se centra en:</p>

<details>
  <summary><code>git</code></summary>
  
  [Ir a la documentación oficial de git](https://git-scm.com/docs)
  
  ### Introducción
  ####  Toda la refencia aca descrita en adelante se tomo de atlassian. [Ir a atlassian para mas información](https://www.atlassian.com/es/git/tutorials/what-is-git)
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
  
  ####  Toda la refencia aca descrita en adelante se tomo de Git. [Ir a Git para mas información](https://git-scm.com/docs/git)
  
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
  
  ####  Toda la refencia aca descrita en adelante se tomo de Git. [Ir a Git para mas información](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
  
  ### Los tres Estados
  
  <p align="justify"> Ahora presta atención. Esto es lo más importante que debes recordar acerca de Git si quieres que el resto de tu proceso de aprendizaje prosiga sin problemas. Git tiene tres estados principales en los que se pueden encontrar tus archivos: confirmado (committed), modificado (modified), y preparado (staged).</p>
 
  <ol>
    <li> Confirmado: significa que los datos están almacenados de manera segura en tu base de datos local.</li>
    <li> Modificado: significa que has modificado el archivo pero todavía no lo has confirmado a tu base de datos.</li>
    <li> Preparado: significa que has marcado un archivo modificado en su versión actual para que vaya en tu próxima confirmación.</li>
  </ol>
  
  <p align="justify"> Esto nos lleva a las tres secciones principales de un proyecto de Git: El directorio de Git (Git directory), el directorio de trabajo (working directory), y el área de preparación (staging area).</p>
 
  <img src="https://git-scm.com/book/en/v2/images/areas.png" />
  
  <ol>
    <li> El directorio de Git es donde se almacenan los metadatos y la base de datos de objetos para tu proyecto. Es la parte más importante de Git, y es lo que se copia cuando clonas un repositorio desde otra computadora.</li>
    <li> El directorio de trabajo es una copia de una versión del proyecto. Estos archivos se sacan de la base de datos comprimida en el directorio de Git, y se colocan en disco para que los puedas usar o modificar.</li>
    <li> El área de preparación es un archivo, generalmente contenido en tu directorio de Git, que almacena información acerca de lo que va a ir en tu próxima confirmación. A veces se le denomina índice (“index”), pero se está convirtiendo en estándar el referirse a ella como el área de preparación.</li>
  </ol>
  
  <p align="justify"> El flujo de trabajo básico en Git es algo así:</p>
  
  <ul>
    <li> Modificas una serie de archivos en tu directorio de trabajo.</li>
    <li> Preparas los archivos, añadiéndolos a tu área de preparación.</li>
    <li> Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación y almacena esa copia instantánea de manera permanente en tu directorio de Git.</li>
  </ul>
</details>
<details>
  <summary>Github</summary>
  
  [Ir a la página oficial de Github](https://github.com/)
  
  ### Introducción
  ####  Toda la refencia aca descrita en adelante se tomo de Digital.gov. [Ir a Digital.gov para mas información](https://digital.gov/resources/an-introduction-github/)
  
  <p align="justify"> GitHub es una interfaz basada en la web que utiliza Git , el software de control de versiones de código abierto que permite que varias personas realicen cambios independientes en las páginas web al mismo tiempo. Como señala Carpenter, debido a que permite la colaboración en tiempo real, GitHub alienta a los equipos a trabajar juntos para crear y editar el contenido de su sitio.</p>
  
  ### Terminología en GitHub
  
  <p align="justify"> Durante el video, Carpenter define algunos de los términos comunes que los equipos deberán comprender al usar GitHub. Ellos son:</p>
  
  <ol>
    <li> <strong>Repository (repo)</strong>: una carpeta en la que se almacenan todos los archivos y sus historiales de versión.</li>
    <li> <strong>Branch</strong>: un espacio de trabajo en el que puede realizar cambios que no afectarán al sitio activo.</li>
    <li> <strong>Markdown (.md)</strong>: una forma de escribir en Github que convierte texto sin formato en código de GitHub. Sitios como Atom y Sublime Text son ejemplos de recursos gratuitos para desarrolladores que utilizan Markdown.</li>
    <li> <strong>Commit Changes </strong>: un registro guardado de un cambio realizado en un archivo dentro del repositorio.</li>
    <li> <strong>Pull Request (PR) </strong>: la forma de solicitar que los cambios realizados en una rama se fusionen con otra rama que también permite que varios usuarios vean, discutan y revisen el trabajo que se está realizando.</li>
    <li> <strong>Merge </strong>: después de que se aprueba una solicitud de extracción, la confirmación se extraerá (o fusionará) de una rama a otra y luego se implementará en el sitio en vivo.</li>
  </ol>
</details>
<details>
  <summary>HTML5</summary>
  
  [Ir a la página oficial de Developer mozilla para HTML](https://developer.mozilla.org/es/docs/Web/HTML)
  
  ### Introducción
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/HTML)
  
  ### HTML: Lenguaje de etiquetas de hipertexto
  
  <p align="justify"> <strong>HTML</strong> (Lenguaje de Marcas de Hipertexto, del inglés <i>HyperText Markup Language</i>) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web <a href="https://developer.mozilla.org/es/docs/Web/CSS">(CSS)</a> o la funcionalidad/comportamiento <a href="https://developer.mozilla.org/es/docs/Web/JavaScriptS">(JavaScript)</a>.</p>
  
  <p align="justify"> "Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la <i>«World Wide Web»</i> (Red Informática Mundial).</p>
  
  <p align="justify"> HTML utiliza "marcas" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. Las  marcas HTML incluyen "elementos" especiales como <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/head"> &lt;head&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/title"> &lt;title&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/body"> &lt;body&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/header"> &lt;header&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/footer"> &lt;footer&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/article"> &lt;articlr&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/section"> &lt;section&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/p"> &lt;p&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/div"> &lt;div&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/span"> &lt;span&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/img"> &lt;img&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/aside"> &lt;aside&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/audio"> &lt;audio&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/canvas"> &lt;canvas&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/datalist"> &lt;datalist&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/details"> &lt;details&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/embed"> &lt;embed&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/nav"> &lt;nav&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/output"> &lt;output&gt;</a> (en-US), <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/progress"> &lt;progress&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/video"> &lt;video&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/ul"> &lt;ul&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/ol"> &lt;ol&gt;</a>, <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/li"> &lt;li&gt;</a> y muchos otros.</p>
  
  <p align="justify"> Un elemento HTML se distingue de otro texto en un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por "<" y ">". El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta <code>&lt;title&gt;</code> se puede escribir como <code>&lt;Title&gt;</code>, <code>&lt;TITLE&gt;</code> o de cualquier otra forma.</p>
  
  <p align="justify"> Otros recursos: </p>
  
  <ol>
    <li><a href="https://www.w3schools.com/html/default.asp"> W3Schools</a></li>
    <li><a href="https://www.youtube.com/c/GustavoGarciaBlanco"> Canal de youtube de Gustavo Adolfo Garcia Blanco</a></li>
  </ol>
  
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Glossary/HTML5)
  
  ### HTML5
  
  <p align="justify"> La última versión estable de <a href="https://developer.mozilla.org/es/docs/Glossary/HTML"> HTML</a>, HTML5 convierte a HTML de un simple formato de marcado para estructurar documentos en una plataforma completa de desarrollo de aplicaciones. Entre otras características, HTML5 incluye nuevos elementos y <a href="https://developer.mozilla.org/es/docs/Glossary/API"> API</a> de <a href="https://developer.mozilla.org/es/docs/Glossary/JavaScript"> JavaScript</a> para mejorar el almacenamiento, la multimedia y el acceso al hardware.</p>
  
  <p align="justify"> Otros recursos: </p>
  
  <ol>
    <li><a href="https://www.w3schools.com/html/default.asp"> W3Schools</a></li>
    <li><a href="https://www.youtube.com/c/GustavoGarciaBlanco"> Canal de youtube de Gustavo Adolfo Garcia Blanco</a></li>
  </ol>
  
  ####  Toda la refencia aca descrita en adelante se tomo de W3C. [Ir a w3C](https://www.w3.org/standards/semanticweb/)
  
  ### Web Semántica
  
  <p align="justify"> Además de la clásica "Web de documentos", el W3C está ayudando a construir una pila de tecnología para respaldar una "Web de datos", el tipo de datos que se encuentran en las bases de datos. El objetivo final de la Web de datos es permitir que las computadoras realicen un trabajo más útil y desarrollar sistemas que puedan admitir interacciones confiables a través de la red. El término “Web Semántica” se refiere a la visión del W3C de la Web de datos enlazados. Las tecnologías de la Web Semántica permiten a las personas crear almacenes de datos en la Web, crear vocabularios y escribir reglas para el manejo de datos. Los datos vinculados están potenciados por tecnologías como RDF, SPARQL, OWL y SKOS.</p>
  
  <dl>
    <dt><a href="https://www.w3.org/standards/semanticweb/data">Datos vinculados</a></dt>
    <dd>La Web Semántica es una Web de datos: de fechas, títulos, números de pieza, propiedades químicas y cualquier otro dato que uno pueda concebir. RDF proporciona la base para publicar y vincular sus datos. Varias tecnologías le permiten incrustar datos en documentos (RDFa, GRDDL) o exponer lo que tiene en bases de datos SQL, o hacerlo disponible como archivos RDF.</dd>
    <dt><a href="https://www.w3.org/standards/semanticweb/ontology">Vocabularios</a></dt>
    <dd>A veces puede ser importante o valioso organizar los datos. Usando OWL (para construir vocabularios u "ontologías") y SKOS (para diseñar sistemas de organización del conocimiento) es posible enriquecer los datos con un significado adicional, lo que permite que más personas (y más máquinas) hagan más con los datos.</dd>
    <dt><a href="https://www.w3.org/standards/semanticweb/query">Consulta</a></dt>
    <dd>Los lenguajes de consulta van de la mano con las bases de datos. Si la Web Semántica se ve como una base de datos global, entonces es fácil entender por qué se necesitaría un lenguaje de consulta para esos datos. SPARQL es el lenguaje de consulta de la Web Semántica.</dd>
    <dt><a href="https://www.w3.org/standards/semanticweb/inference">Inferencia</a></dt>
    <dd>Cerca de la parte superior de la pila de la Web Semántica, se encuentra la inferencia: razonamiento sobre datos a través de reglas. El trabajo del W3C sobre reglas, principalmente a través de RIF y OWL, se centra en traducir entre lenguajes de reglas e intercambiar reglas entre diferentes sistemas.</dd>
    <dt><a href="https://www.w3.org/standards/semanticweb/applications">Aplicaciones verticales</a></dt>
    <dd>W3C está trabajando con diferentes industrias, por ejemplo, en el cuidado de la salud y las ciencias de la vida, el gobierno electrónico y la energía, para mejorar la colaboración, la investigación y el desarrollo, y la adopción de la innovación a través de la tecnología de la Web Semántica. Por ejemplo, al ayudar en la toma de decisiones en la investigación clínica, las tecnologías de la Web Semántica unirán muchas formas de información biológica y médica entre instituciones.</dd>
  </dl>
  
  <p align="justify"> Otros recursos: </p>
  
  <ol>
    <li><a href="https://devopedia.org/semantic-web"> Devopedia</a></li>
    <li><a href="https://dbpedia.org/page/Semantic_Web"> DBpedia</a></li>
    <li><a href="https://www.sciencedirect.com/topics/computer-science/semantic-web-technology"> ScienceDirect</a></li>
  </ol>
</details>

<details>
  <summary>CSS3</summary>
  
  [Ir a la página oficial de Developer mozilla para CSS](https://developer.mozilla.org/es/docs/Web/CSS)
  
  ### Introducción
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS)
  
  ### CSS
  
  <p align="justify"> <strong>Hojas de Estilo en Cascada</strong> (del inglés <i>Cascading Style Sheets</i>) o <strong>CSS</strong> es el lenguaje de <a href="https://developer.mozilla.org/es/docs/Web/API/StyleSheet">estilos</a> utilizado para describir la presentación de documentos <a href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a> o <a href="https://developer.mozilla.org/en-US/docs/Web/XML">XML</a> (en-US) (incluyendo varios languages basados en XML como <a href="https://developer.mozilla.org/es/docs/Web/SVG">SVG</a>, <a href="https://developer.mozilla.org/es/docs/Web/MathML">MathML</a> o <a href="https://developer.mozilla.org/es/docs/Glossary/XHTML">XHTML</a>). CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios.</p>
  
  <p align="justify"> <strong>CSS</strong> es uno de los lenguajes base de la <i>Open Web</i> y posee una <a href="https://www.w3.org/Style/CSS/#specs">especificación estandarizada</a> por parte del W3C. Anteriormente , el desarrollo de varias partes de las especificaciones de CSS era realizado de manera sincrónica, lo que permiía el versionado de las recomendaciones. Probablemente habrás escuchado acerca de CSS1, CSS2.1, CSS3. Sin embargo, CSS4 nunca se ha lanzado como una versión oficial.</p>
  
  <p align="justify"> Desde CSS3, el alcance de las especificaciones se incrementó de forma significativa y el progreso de los diferentes modulos de CSS comenzó a mostrar varias diferencias, lo que hizo más efectivo desarrollar y publicar recomendaciones separadas por módulos. En vez de versionar las especificaciones de CSS, la W3C actualmente realiza una captura de las ultimas espcificaciones estables de CSS.</p>
  
  ### Introducción CSS
  <p align="justify"> Si eres nuevo en el desarrollo web, asegúrate de leer nuestro artículo de <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics">conceptos básicos de CSS</a> para saber qué es CSS y cómo usarlo.</p>
  
  ### Tutoriales CSS
  <p align="justify"> Nuestra <a href="https://developer.mozilla.org/es/docs/Learn/CSS">área de aprendizaje de CSS</a> contiene una gran cantidad de tutoriales que te llevan desde el nivel de principiante hasta el nivel de competencia, cubriendo todos los aspectos fundamentales.</p>
  
  ### Referencia CSS
  <p align="justify"> Nuestra <a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference">exhaustiva referencia de CSS</a> para desarrolladores web experimentados describe cada propiedad y concepto de CSS.</p>
  
  <p align="justify"> Nuestra <a href="https://developer.mozilla.org/es/docs/Learn/CSS">área de aprendizaje CSS</a>  presenta múltiples módulos que enseñan CSS desde cero — no se requieren conocimientos previos.</p>
  
  <dl>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps">Primeros pasos en CSS</a></dt>
    <dd>CSS es utilizado para diseñar y dar estilo a las páginas web, por ejemplo, alterando la fuente, color, tamaño y espaciado del contenido, dividirlo en múltiples columnas o agregar animaciones y otras características decorativas. Este módulo proporciona un suave comienzo hacia el dominio de CSS con los conceptos básicos acerca de su funcionamiento, la sintaxis y la manera en que puedes comenzar a utilizarlo para agregar estilos al HTML.</dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks">Bloques de construcción CSS</a></dt>
    <dd>Este módulo continúa a partir de donde dejó el módulo de <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps">primeros pasos de CSS</a>. Ahora que has adquirido familiaridad con el lenguaje y su sintaxis, y has ganado cierta experiencia básica con su uso, es hora de profundizar un poco más. Este módulo analiza la cascada y la herencia, todos los tipos de selectores que tenemos disponibles, unidades, tamaño, estilo de fondos y bordes, depuración (<i>debugging</i>) y mucho más.</dd>
    <dd>El propósito de este módulo es proporcionarte un set de herramientas para escribir CSS competente y ayudarte a entender todas la teoría esencial antes de avanzar hacia cuestiones más específicas como <a href="https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text">estilo de textos</a> y <a href="https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout">diseño CSS</a>.</dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text">Estilo de texto</a></dt>
    <dd>Con los conceptos básicos del lenguaje CSS cubiertos, el siguiente tema de CSS en el que debes concentrarte es dar estilo al texto, una de las cosas más comunes que harás con CSS. Aquí veremos los fundamentos del estilo del texto, incluida la configuración de la fuente, negrita, cursiva, espaciado entre líneas y letras, sombras y otras características del texto. Terminaremos el módulo analizando la aplicación de fuentes personalizadas a tu página y en el estilo de listas y enlaces.</dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout">Diseño de CSS</a></dt>
    <dd>En este punto ya hemos analizado los fundamentos de CSS, cómo dar estilo al texto y cómo diseñar y manipular las cajas en las que se encuentra el contenido. Ahora es el momento de ver cómo colocar sus cajas en el lugar correcto en relación con la pantalla del dispositivo y entre sí. Hemos cubierto los requisitos previos necesarios para que ahora puedas profundizar en el diseño de CSS, mirando diferentes configuraciones de pantalla, métodos de diseño tradicionales que implican flotación y posicionamiento, y nuevas herramientas de diseño como flexbox, grid y posicionamiento, asi como algunas técnicas de herencia que quizas desees conocer.</dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Learn/CSS/Howto">Uso de CSS para resolver problemas comunes</a></dt>
    <dd>proporciona enlaces a secciones de contenido que explican cómo usar CSS para resolver problemas muy comunes al crear una página web.</dd>
  </dl>
  
  <p align="justify"> Otros recursos: </p>
  
  <ol>
    <li><a href="https://www.w3schools.com/css/"> W3Schools</a></li>
    <li><a href="https://css-tricks.com/"> CSS-TRICKS</a></li>
  </ol>
  
  ### Selectores CSS
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  
  <p align="justify"> Los <strong>selectores</strong> definen sobre qué elementos se aplicará un conjunto de reglas CSS.</p>
  
  #### Selectores Básicos
  <dl>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors">Selector de tipo</a></dt>
    <dd>Selecciona todos los elementos que coinciden con el nombre del elemento especificado.</dd>
    <dd><strong>Sintaxis:</strong><code><i>eltname</i></code></dd>
    <dd><strong>Ejemplo:</strong><code>input</code> se aplicará a cualquier elemento <code>&lt;input&gt;</code></dd>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors">Selector de clase</a></dt>
    <dd>Selecciona todos los elementos que tienen el atributo de class especificado.</dt>
    <dd><strong>Sintaxis:</strong><code><i>.classname</i></code></dd>
    <dd><strong>Ejemplo:</strong><code>.index</code> seleccionará cualquier elemento que tenga la clase <i>"index"</i></dd>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors">Selector de ID</a></dt>
    <dd>Selecciona un elemento basándose en el valor de su atributo <code>id</code>. Solo puede haber un elemento con un determinado ID dentro de un documento.</dt>
    <dd><strong>Sintaxis:</strong><code><i>#idname</i></code></dd>
    <dd><strong>Ejemplo:</strong><code>#toc</code> se aplicará a cualquier elemento que tenga el ID <i>"toc"</i></dd>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors">Selector universal</a></dt>
    <dd>Selecciona todos los elementos. Opcionalmente, puede estar restringido a un espacio de nombre específico o a todos los espacios de nombres.</dd>
    <dd><strong>Sintaxis:</strong><code>* ns | * * | *</code></dd>
    <dd><strong>Ejemplo:</strong><code>*</code> se aplicará a todos los elementos del documento.</dd>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">Selector de atributo</a></dt>
    <dd>Selecciona elementos basándose en el valor de un determinado atributo.</dd>
    <dd><strong>Sintaxis:</strong><code>[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]</code></dd>
    <dd><strong>Ejemplo:</strong><code>[autoplay]</code> seleccionará todos los elementos que tengan el atributo "autoplay" establecido (a cualquier valor).</dd>
  </dl>
  
  ### Combinadores CSS
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  
  <dl>
    <dt><a href="https://developer.mozilla.org/es/docs/Web/CSS/Adjacent_sibling_combinator">Combinador de hermanos adyacentes</a></dt>
    <dd>El combinador <code>+</code> selecciona hermanos adyacentes. Esto quiere decir que el segundo elemento sigue directamente al primero y ambos comparten el mismo elemento padre.</dt>
    <dd><strong>Sintaxis:</strong><code><i>A + B</i></code></dd>
    <dd><strong>Ejemplo:</strong>La regla <code>h2 + p</code> se aplicará a todos los elementos <code>&lt;p&gt;</code> que siguen directamente a un elemento <code>&lt;h2&gt;</code> (en-US).</code></dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Web/CSS/General_sibling_combinator">Combinador general de hermanos</a></dt>
    <dd>El combinador <code>~</code> selecciona hermanos. Esto quiere decir que el segundo elemento sigue al primero (no necesariamente de forma inmediata) y ambos comparten el mismo elemento padre.</dt>
    <dd><strong>Sintaxis:</strong><code><i>A ~ B</i></code></dd>
    <dd><strong>Ejemplo:</strong>la regla <code>p ~ span</code> se aplicará a todos los elementos <code>&lt;span&gt;</code> que siguen un elemento <code>&lt;p&gt;</code>.</dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Web/CSS/Child_combinator">Combinador de hijo</a></dt>
    <dd>El combinador <code>></code> selecciona los elementos que son hijos directos del primer elemento.</dd>
    <dd><strong>Sintaxis:</strong><code><i>A > B</i></code></dd>
    <dd><strong>Ejemplo:</strong>La regla <code>ul > li</code> se aplicará a todos los elementos <code>&lt;li&gt;</code> que son hijos directos de un elemento <code>&lt;ul&gt;</code></dd>
    <dt><a href="https://developer.mozilla.org/es/docs/Web/CSS/Descendant_combinator">Combinador de descendientes</a></dt>
    <dd>El combinador <code> </code> selecciona los elementos que son descendientes del primer elemento.</dd>
    <dd><strong>Sintaxis:</strong><code>A B</code></dd>
    <dd><strong>Ejemplo:</strong>La regla<code>div span</code> se aplicará a todos los elementos <code>&lt;span&gt;</code> que están dentro de un elemento <code>&lt;div&gt;</code>.</dd>
    <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator">Combinador de columna</a></dt>
    <dd>El combinador <code>||</code> selecciona los elementos especificados pertenecientes a una columna.</dd>
    <dd><strong>Sintaxis:</strong><code><i>A || B</i></code></dd>
    <dd><strong>Ejemplo:</strong><code>col || td</code> seleccionará todos los elementos <code>&lt;td&gt;</code> que pertenezcan al ámbito de <code>&lt;col&gt;</code> .</dd>
  </dl>
  
  ### Pseudoclases
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)
  
  <p align="justify"> Una <strong>pseudoclase CSS</strong> es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo, <a href="https://developer.mozilla.org/es/docs/Web/CSS/:hover"><code>:hover</code></a> aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.</p>
  
  <img src="https://miro.medium.com/max/1400/0*z8Cwb4xBiF5nSsKf" />
  
  <p align="justify"> Las pseudoclases, junto con los pseudoelementos, permiten aplicar un estilo a un elemento no sólo en relación con el contenido del árbol de documento, sino también en relación a factores externos como el historial del navegador (<a href="https://developer.mozilla.org/es/docs/Web/CSS/:visited"><code>:visited</code></a>, por ejemplo), el estado de su contenido (como <a href="https://developer.mozilla.org/es/docs/Web/CSS/:checked"><code>:checked</code></a> en algunos elementos de formulario), o la posición del ratón (como <a href="https://developer.mozilla.org/es/docs/Web/CSS/:hover"><code>:hover</code></a> que permite saber si el ratón está encima de un elemento o no).</p>
  
  <p align="justify"> Nota: En lugar de usar pseudoclases, <a href="https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements"><code>pseudo-elements</code></a> puede usarse para dar estilo a una parte específica de un elemento.</p>
  
  #### Sintaxis
  
  <p align="justify"><code>selector:pseudoclase {propiedad: Valor;}</code></p>
  
  <p align="justify">Al igual que las clases, se pueden concatenar la cantidad de pseudoclases que se deseen en un selector</p>
  
  ### Pseudoelementos
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements)
  
  <p align="justify"> Al igual que las <a href="https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes"><code>pseudo-classes</code></a>, los pseudo-elementos se añaden a los selectores, pero en cambio, no describen un estado especial sino que, permiten añadir estilos a una parte concreta del documento. Por ejemplo, el pseudoelemento <a href="https://developer.mozilla.org/es/docs/Web/CSS/::first-line"><code>::first-line</code></a> selecciona solo la primera línea del elemento especificado por el selector.</p>
  
  #### Sintaxis
  
  <p align="justify"><code>selector::pseudoclase {propiedad: Valor;}</code></p>
  
  #### Notas
  
  <p align="justify">De vez en cuando se utilizan dos puntos dobles (::) en vez de solo uno (:). Esto forma parte de CSS3 y de un intento para distinguir pseudo-elementos de pseudo-clases.</p>
  
  <p align="justify"><code>::selection</code> siempre se escribe con dos puntos dobles (::).</p>
  
  <p align="justify">Solo se puede usar un pseudo-elemento por selector. Debe aparecer después del selector simple..</p>
  
  ### Especificidad
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/Specificity)
  
  <p align="justify"> La <strong>especificidad</strong> es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados. La especificidad está basada en las reglas de coincidencia que están compuestas por diferentes tipos de selectores CSS.</p>
  
  #### ¿Cómo se calcula?
  
  <p align="justify"> La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número correspondiente de cada <a href="https://developer.mozilla.org/es/docs/Web/CSS/Specificity#tipos_de_selectores">tipo de selector</a>. Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS. La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones. Según las reglas de CSS, en caso de que un elemento sea objeto de una declaración directa, esta siempre tendrá preferencia sobre las reglas heredadas de su ancestro.</p>
  
  <p align="justify"> Nota: La proximidad de elementos en el árbol del documento no tiene efecto en la especificidad.</p>
  
  #### Tipos de selectores
  
  <ol start="0">
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/Type_selectors">Selectores de tipo</a> (p.e., <code>h1</code>) y pseudo-elementos (p.e., <code>::before</code>).</li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/Class_selectors">Selectores de clase</a> (p.e., <code>.example</code>), selectores de atributos (p.e., <code>[type="radio"]</code>)y pseudoclases (p.e., <code>:hover</code>).</li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/ID_selectors">Selectores de ID</a> (p.e., <code>#example</code>).</li>
  </ol>
  
  <p align="justify"> El selector universal (<a href="https://developer.mozilla.org/es/docs/Web/CSS/Universal_selectors">*</a>), los combinadores (<a href="https://developer.mozilla.org/es/docs/Web/CSS/Adjacent_sibling_combinator">+</a>, <a href="https://developer.mozilla.org/es/docs/Web/CSS/Child_combinator">></a>, <a href="https://developer.mozilla.org/es/docs/Web/CSS/General_sibling_combinator">~</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">' '</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator">||</a> (en-US)) y la pseudo-clase de negación (<a href="https://developer.mozilla.org/es/docs/Web/CSS/:not">:not()</a>) no tienen efecto sobre la especificidad. (Sin embargo, los selectores declarados dentro de :not() si lo tienen.)</p>
  
  <p align="justify">Para más información, visita <a href="https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#especificidad">"Especificidad" en "Cascada y herencia"</a>, también puedes visitar: <a href="https://specifishity.com/">https://specifishity.com</a>.</p>
  
  <p align="justify">Los estilos <i>inline</i> añadidos a un elemento (p.e., <code>style="font-weight:bold"</code>) siempre sobrescriben a cualquier estilo escrito en hojas de estilo externas, por lo que se puede decir que tienen la mayor especificidad.</p>
  
  #### La excepción !important
  
  <p align="justify">Cuando se emplea important en una declaración de estilo, esta declaración sobrescribe a cualquier otra. Aunque técnicamente <code>!important</code>  no tiene nada que ver con especificidad, interactúa directamente con esta. Sin embargo, el uso de <code>!important</code> es una <strong>mala práctica</strong> y debería evitarse porque hace que el código sea más difícil de depurar al romper la <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade">cascada (artículo en inglés)</a> natural de las hojas de estilo. Cuando dos declaraciones en conflicto con el !important son aplicadas al mismo elemento, se aplicará la declaración con mayor especificidad. </p>
  <p align="justify">Cuando se emplea important en una declaración de estilo, esta declaración sobrescribe a cualquier otra. Aunque técnicamente <code>!important</code>  no tiene nada que ver con especificidad, interactúa directamente con esta. Sin embargo, el uso de <code>!important</code> es una <strong>mala práctica</strong> y debería evitarse porque hace que el código sea más difícil de depurar al romper la <a href="cascada">(artículo en inglés) </a> natural de las hojas de estilo. Cuando dos declaraciones en conflicto con el <code>!important</code> son aplicadas al mismo elemento, se aplicará la declaración con mayor especificidad. </p>
  
  ### Propiedad display
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/display)
  
  <p align="justify"> La propiedad CSS <strong>display</strong> especifica si un elemento es tratado como <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout">block or inline element</a> y el diseño usado por sus hijos, como <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout">flow layout(Diseño de Flujo)</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">grid</a>(Cuadricula) o <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">flex</a>(Flexible). </p>
  
  <p align="justify"> Formalmente la propiedad <code>display</code> establece los tipos de visualización interna y externa de un elemento. La tipo externa establece la participacion de un elemento en <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout">flow layout</a>; la tipo interna establece el layout(Diseño) de los hijos. Algunos valores de <code>display</code> estan totalmente definidos con sus especificaciones propias; por ejemplo el detalle de que pasa cuando <code>display: flex</code> es declarado y definido en la especificacion de Modelo Flexible de Caja(Flexible Box Model specification) de CSS. <strong>Vea</strong> la siguientes tablas para mas especificaciones individuales. </p>
  
  <p align="justify"> Además de los Diferentes Tipos de caja de Visualizacion, el valor de <code>none</code> permite Desactivar la Visualizacion de un Elemento; cuando no se utiliza <code>none</code>, todos los elementos descendentes también quedan desactivados. El documento se procesa como si el elemento no existiera en el árbol de documentos.</p>
  
  <img src="https://www.freecodecamp.org/news/content/images/2021/08/display-property-values.png" />
    
  #### Sintaxis
  
  <p align="justify"> La propiedad <code>display</code> se especifica mediante valores de palabras clave. Los valores de palabras clave se agrupan en seis categorías:</p>
  
  <ol>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/display#display-outside">&lt;display-outside&gt;</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/display#display-inside">&lt;display-inside&gt;</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/display#display-listitem">&lt;display-listitem&gt;</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/display#display-internal">&lt;display-internal&gt;</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/display#display-box">&lt;display-box&gt;</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS/display#display-legacy">&lt;display-legacy&gt;</a></li>
  </ol>
  
  <p align="justify"> En la actualidad, es mejor especificar <code>display</code> utilizando una sola palabra clave; aunque las últimas especificaciones permiten combinar algunas palabras clave, esto aún no está bien soportado por los navegadores.</p>
  
  ### Propiedad position
  ####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla. [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/position)
  
  <p align="justify"> La propiedad <strong>position</strong> de <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> especifica cómo un elemento es posicionado en el documento. Las propiedades <a href="https://developer.mozilla.org/es/docs/Web/CSS/top">top</a>, <a href="https://developer.mozilla.org/es/docs/Web/CSS/right">right</a>, <a href="https://developer.mozilla.org/es/docs/Web/CSS/bottom">bottom</a>, y <a href="https://developer.mozilla.org/es/docs/Web/CSS/left">left</a> determinan la ubicación final de los elementos posicionados. </p>
    
  #### Tipos de posicionamiento
  
  <ul>
    <li>Un <strong>elemento posicionado</strong> es un elemento cuyo valor <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value">computado</a> de <code>position</code> es <code>relative</code>, <code>absolute</code>, <code>fixed</code>, o <code>sticky</code>. (En otras palabras, cualquiera excepto <code>static</code>).</li>
    <li>Un <strong>elemento posicionado relativamente</strong> es un elemento cuyo valor <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value">computado</a> de <code>position</code> es <code>relative</code>. Las propiedades <a href="https://developer.mozilla.org/es/docs/Web/CSS/top">top</a> y <a href="https://developer.mozilla.org/es/docs/Web/CSS/bottom">bottom</a> especifican el desplazamiento vertical desde su posición original; las propiedades <a href="https://developer.mozilla.org/es/docs/Web/CSS/left">left</a> y <a href="https://developer.mozilla.org/es/docs/Web/CSS/right">right</a> especifican su desplazamiento horizontal.</li>
    <li>Un elemento <strong>posicionado absolutamente</strong> es un elemento cuyo valor <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value">computado</a> de <code>position</code> es <code>absolute</code> o <code>fixed</code>. Las propiedades <a href="https://developer.mozilla.org/es/docs/Web/CSS/top">top</a>, <a href="https://developer.mozilla.org/es/docs/Web/CSS/right">right</a>, <a href="https://developer.mozilla.org/es/docs/Web/CSS/bottom">bottom</a>, y  <a href="https://developer.mozilla.org/es/docs/Web/CSS/left">left</a> especifican el desplazamiento desde los bordes del <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">bloque contenedor</a> del elemento. (El bloque contenedor es el ancestro relativo al cual el elemento está posicionado). Si el elemento tiene márgenes, se agregarán al desplazamiento. el elemento establece un nuevo contexto de formato de bloque para su contenido</li>
    <li>Un <strong>elemento posicionado fijamente</strong> es un elemento cuyo valor de <code>position</code> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value">computado</a> es <code>sticky</code>. Es tratado como un elemento posicionado relativamente hasta que su <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">bloque contenedor</a> cruza un límite establecido (como por ejemplo dando a <a href="https://developer.mozilla.org/es/docs/Web/CSS/top">top</a> cualquier valor distinto de auto), dentro de su flujo principal (o el contenedor dentro del cual se mueve), desde el cual es tratado como "fijo" hasta que alcance el borde opuesto de su <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">bloque contenedor</a>.</li>
  </ul>
</details>