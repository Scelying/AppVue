# Diplomado en Desarrollo Web Full Stack Front End + Back End
## _UdeCataluña_

![](https://i.ibb.co/rbzdqdR/FOTO.png)


### Módulo 2
  
### Introducción
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript).


<div align="justify">
    <article>
        <h1>¿Qué es JavaScript?</h1>     
        <p>¡Bienvenido al curso de JavaScript para principiantes de MDN! En este artículo veremos JavaScript desde un alto nivel, respondiendo preguntas como "¿Qué es?" y "¿Qué puedes hacer con él?", y asegúrate de estar cómodo con el propósito de JavaScript.</p>
        <table>
            <tbody>
                <tr>
                    <th scope="row">Prerrequisitos:</th>
                    <td>Conocimientos básicos de informática, conocimientos básicos de HTML y CSS.</td>
                </tr>
                <tr>
                    <th scope="row">Objetivo:</th>
                    <td>Familiarizarte con lo que es JavaScript, lo que puede hacer y cómo encaja en un sitio web.</td>
                </tr>
            </tbody>
        </table>
        <h2>
            <a href="#una_definición_de_alto_nivel" title="Permalink to Una definición de alto nivel">Una definición de alto nivel</a>
        </h2>
        <div>
            <p>JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (<a href="https://developer.mozilla.org/en/docs/Learn/HTML">HTML</a> y <a href="https://developer.mozilla.org/en/docs/Learn/CSS">CSS</a>) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.</p>
            <p><img alt="" src="https://mdn.mozillademos.org/files/13502/cake.png" style="display: block; margin: 0 auto;" loading="lazy"></p>
            <ul>
                <li><a href="https://developer.mozilla.org/en/docs/Glossary/HTML">HTML</a> es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.</li>
                <li><a href="https://developer.mozilla.org/en/docs/Glossary/CSS">CSS</a> es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.</li>
                <li><a href="https://developer.mozilla.org/en/docs/Glossary/JavaScript">JavaScript</a> es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).</li>
            </ul>
            <p>Las tres capas se superponen muy bien. Tomemos una etiqueta de texto simple como ejemplo. Podemos marcarla usando HTML para darle estructura y propósito:</p>
            <div>
            <pre><code><span><span><span>&lt;</span>p</span><span>&gt;</span></span>Player 1: Chris<span><span><span>&lt;/</span>p</span><span>&gt;</span></span></code></pre>
            </div>
            <p><img alt="" src="https://mdn.mozillademos.org/files/13422/just-html.png" loading="lazy"></p>
            <p>Luego, podemos agregar algo de CSS a la mezcla para que se vea bien:</p>
            <div>
                <pre><code><span>p </span><span>{</span>
    <span>font-family</span><span>:</span><span>'helvetica neue'</span><span>,</span> helvetica<span>,</span> sans-serif<span>;</span>
    <span>letter-spacing</span><span>:</span> 1px<span>;</span>
    <span>text-transform</span><span>:</span> uppercase<span>;</span>
    <span>text-align</span><span>:</span> center<span>;</span>
    <span>border</span><span>:</span> 2px solid <span>rgba</span><span>(</span>0<span>,</span>0<span>,</span>200<span>,</span>0.6<span>)</span><span>;</span>
    <span>background</span><span>:</span><span>rgba</span><span>(</span>0<span>,</span>0<span>,</span>200<span>,</span>0.3<span>)</span><span>;</span>
    <span>color</span><span>:</span><span>rgba</span><span>(</span>0<span>,</span>0<span>,</span>200<span>,</span>0.6<span>)</span><span>;</span>
    <span>box-shadow</span><span>:</span> 1px 1px 2px <span>rgba</span><span>(</span>0<span>,</span>0<span>,</span>200<span>,</span>0.4<span>)</span><span>;</span>
    <span>border-radius</span><span>:</span>10px<span>;</span>
    <span>padding</span><span>:</span> 3px 10px<span>;</span>
    <span>display</span><span>:</span> inline-block<span>;</span>
    <span>cursor</span><span>:</span> pointer<span>;</span>
  <span>}</span></code></pre>
            </div>
            <p>Y finalmente, podemos agregar algo de JavaScript para implementar un comportamiento dinámico:</p>
            <div>
            <pre><code><span>const</span> para <span>=</span> document<span>.</span><span>querySelector</span><span>(</span><span>'p'</span><span>)</span><span>;</span>
    <span></span>        
    <span>para.</span><span>addEventListener</span><span>(</span><span>'click'</span><span>,</span> updateName<span>)</span><span>;</span>
    <span></span> 
    <span>function</span> <span>updateName</span><span>(</span><span>)</span> <span>{</span>
        <span>let</span> name <span>=</span> <span>prompt</span><span>(</span><span>'Enter a new name'</span><span>)</span><span>;</span>
        <span>para.</span>textContent <span>=</span> <span>'Player 1: '</span> <span>+</span> name<span>;</span>
    <span>}</span>
</code></pre>
            </div>
            <p>Intenta hacer clic en esta última versión de la etiqueta de texto para ver qué sucede (ten en cuenta también que puedes encontrar esta demostración en GitHub — ¡consulta el <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/javascript-label.html" rel="noopener">código fuente</a> o <a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html" rel="noopener">ejecútalo en vivo</a>)!</p>
            <p>JavaScript puede hacer mucho más que eso — exploremos qué con más detalle.</p>
        </div>
        <h2>
            <a href="#entonces_¿qué_puede_hacer_realmente" title="Permalink to Entonces, ¿qué puede hacer realmente?">Entonces, ¿qué puede hacer realmente?</a>
        </h2>
        <div>
            <p>El núcleo del lenguaje JavaScript de lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas como:</p>
            <ul>
                <li>Almacenar valores útiles dentro de variables. En el ejemplo anterior, por ejemplo, pedimos que ingreses un nuevo nombre y luego almacenamos ese nombre en una variable llamada <code>name</code>.</li>
                <li>Operaciones sobre fragmentos de texto (conocidas como "cadenas" (<code>strings</code>) en programación). En el ejemplo anterior, tomamos la cadena "<code>Player1</code>:" y la unimos a la variable <code>name</code> para crear la etiqueta de texto completa, p. ej. ''<code>Player1: Chris</code>".</li>
                <li>Y ejecuta código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento <code><a href="https://developer.mozilla.org/en/docs/Web/API/Element/click_event" title="https://developer.mozilla.org/en/docs/Web/Reference/Events/click">click</a></code> en nuestro ejemplo anterior para detectar cuándo se hace clic en el botón y luego ejecutar el código que actualiza la etiqueta de texto.</li>
                <li>¡Y mucho más!</li>
            </ul>
            <p>Sin embargo, lo que aún es más emocionante es la funcionalidad construida sobre el lenguaje JavaScript de lado del cliente. Las denominadas <strong>interfaces de programación de aplicaciones</strong> (<strong>API</strong>) te proporcionan superpoderes adicionales para utilizar en tu código JavaScript.</p>
            <p>Las API son conjuntos de bloques de construcción de código listos para usar que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar. Hacen lo mismo para la programación que los kits de muebles prefabricados para la construcción de viviendas — es mucho más fácil tomar paneles precortados y atornillarlos para hacer una estantería que elaborar el diseño tú mismo, que ir y encontrar la madera correcta, cortar todos los paneles del tamaño y la forma correctos, buscar los tornillos del tamaño correcto y <em>luego</em> júntalos para hacer una estantería.</p>
            <p>Generalmente se dividen en dos categorías.</p>
            <p><img alt="" src="https://mdn.mozillademos.org/files/13508/browser.png" style="display: block; margin: 0px auto;" loading="lazy"></p>
            <p>Las <strong>APIs del navegador</strong> están integradas en tu navegador web y pueden exponer datos del entorno informático circundante o realizar tareas complejas y útiles. Por ejemplo:</p>
            <ul>
                <li>La <a href="https://developer.mozilla.org/en/docs/Web/API/Document_Object_Model" title=" API del DOM (<code>Document Object Model</code>)"><code> API del DOM (<code>Document Object Model</code>)</code></a> te permite manipular HTML y CSS, crear, eliminar y cambiar el HTML, aplicar dinámicamente nuevos estilos a tu página, etc. Cada vez que ves aparecer una ventana emergente en una página, o se muestra algún nuevo contenido (como vimos anteriormente en nuestra sencilla demostración), por ejemplo, ese es el DOM en acción.</li>
                <li>La <a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor  considera contribuir !"><code>API de Geolocalización</code></a> recupera información geográfica. Así es como <a href="https://www.google.com/maps" rel="noopener">Google Maps</a> puede encontrar tu ubicación y trazarla en un mapa.</li>
                <li>Las APIs <a href="https://developer.mozilla.org/en/docs/Web/API/Canvas_API" title="Canvas"><code>Canvas</code></a> y <a href="https://developer.mozilla.org/en/docs/Web/API/WebGL_API" title="WebGL"><code>WebGL</code></a> te permiten crear gráficos animados en 2D y 3D. Las personas están haciendo cosas increíbles con estas tecnologías web — consulta <a href="https://www.chromeexperiments.com" rel="noopener">Experimentos de Chrome</a> y <a href="https://webglsamples.org/" rel="noopener">webglsamples</a>.</li>
                <li><a href="https://developer.mozilla.org/en/Apps/Fundamentals/Audio_and_video_delivery">APIs de audio y video</a> como <a href="https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement"><code>HTMLMediaElement</code></a> y <a href="https://developer.mozilla.org/en/docs/Web/API/WebRTC_API" title="WebRTC"><code>WebRTC</code></a> te permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y video directamente en una página web, o tomar video de tu cámara web y mostrarlo en la computadora de otra persona (prueba nuestra sencilla <a href="http://chrisdavidmills.github.io/snapshot/" rel="noopener">demostración instantánea</a> para hacerte una idea).</li>
            </ul>
            <div>
                <p><strong>Nota</strong>: Muchas de las demostraciones anteriores no funcionarán en un navegador antiguo — al experimentar, es una buena idea utilizar un navegador moderno como Firefox, Chrome, Edge u Opera para ejecutar tu código. Deberás considerar las <a href="https://developer.mozilla.org/en/docs/Learn/Tools_and_testing/Cross_browser_testing">pruebas en varios navegadores</a> con más detalle cuando estés más cerca de entregar el código de producción (es decir, código real que usarán los clientes reales).</p>
            </div>
            <p>Las <strong>APIs de terceros</strong> no están integradas en el navegador de forma predeterminada y, por lo general, debes obtener su código e información de algún lugar de la Web. Por ejemplo:</p>
            <ul>
                <li>La <a href="https://dev.twitter.com/overview/documentation" rel="noopener">API de Twitter</a> te permite hacer cosas como mostrar tus últimos tweets en tu sitio web.</li>
                <li>La <a href="https://developers.google.com/maps/" rel="noopener">API de Google Maps</a> y la <a href="https://wiki.openstreetmap.org/wiki/API" rel="noopener">API de OpenStreetMap</a> te permiten insertar mapas personalizados en tu sitio web y otras funciones similares.</li>
            </ul>
            <div>
                <p><strong>Nota</strong>: estas APIs son avanzadas y no cubriremos ninguna de ellas en este módulo. Puedes obtener más información sobre estas en nuestro <a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/Client-side_web_APIs">módulo de APIs web de lado del cliente</a>.</p>
            </div>
            <p>¡También hay mucho más disponible! Sin embargo, no te emociones demasiado todavía. No podrás crear el próximo Facebook, Google Maps o Instagram después de estudiar JavaScript durante 24 horas — hay muchos conceptos básicos que cubrir primero. Y es por eso que estás aquí — ¡sigamos adelante!</p>
        </div>
        <h2>
            <a href="#¿qué_está_haciendo_javascript_en_tu_página" title="Permalink to ¿Qué está haciendo JavaScript en tu página?">¿Qué está haciendo JavaScript en tu página?</a>
        </h2>
        <div>
            <p>Aquí, de hecho, comenzaremos a ver algo de código y, mientras lo hacemos, exploraremos lo que realmente sucede cuando ejecutas JavaScript en tu página.</p>
            <p>Recapitulemos brevemente sobre la historia de lo que sucede cuando cargas una página web en un navegador (de lo que hablamos por primera vez en nuestro artículo <a href="https://developer.mozilla.org/en/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#how_does_css_actually_work">Cómo funciona CSS</a>). Cuando cargas una página web en tu navegador, estás ejecutando tu código (HTML, CSS y JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma materias primas (el código) y genera un producto (la página web).</p>
            <p><img alt="" src="https://mdn.mozillademos.org/files/13504/execution.png" style="display: block; margin: 0 auto;" loading="lazy"></p>
            <p>Un uso muy común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través de la API del modelo de objetos del documento (como se mencionó anteriormente). Ten en cuenta que el código de tus documentos web generalmente se cargan y ejecutan en el orden en que aparece en la página. Si JavaScript se carga e intenta ejecutarse antes de que se hayan cargado el HTML y el CSS al que afecta, pueden producirse errores. Aprenderás formas de evitar esto más adelante en el artículo, en la sección <a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Script_loading_strategies" aria-current="page">Estrategias de carga de scripts</a>.</p>
        </div>
        <h3 id="seguridad_del_navegador">
            <a href="#seguridad_del_navegador" title="Permalink to Seguridad del navegador">Seguridad del navegador</a>
        </h3>
        <div>
            <p>Cada pestaña del navegador tiene su propio depósito separado para ejecutar código (estos depósitos se denominan "entornos de ejecución" en términos técnicos) — esto significa que, en la mayoría de los casos, el código de cada pestaña se ejecuta de forma completamente independiente y el código de una pestaña no puede afectar el código en otra pestaña, o en otro sitio web. Esta es una buena medida de seguridad — si este no fuera el caso, los piratas podrían comenzar a escribir código para robar información de otros sitios web y otras cosas muy malas.</p>
            <div>
                <p><strong>Nota</strong>: Existen formas de enviar código y datos entre diferentes sitios web/pestañas de manera segura, pero estas son técnicas avanzadas que no cubriremos en este curso.</p>
            </div>
        </div>
        <h3>
            <a href="#orden_de_ejecución_de_javascript" title="Permalink to Orden de ejecución de JavaScript">Orden de ejecución de JavaScript</a>
        </h3>
        <div>
            <p>Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo. Esto significa que debes tener cuidado con el orden en el que colocas las cosas. Por ejemplo, volvamos al bloque de JavaScript que vimos en nuestro primer ejemplo:</p>
            <div>
            <pre><code><span>const</span> para <span>=</span> document<span>.</span><span>querySelector</span><span>(</span><span>'p'</span><span>)</span><span>;</span>
            <span></span>
<span>para.</span><span>addEventListener</span><span>(</span><span>'click'</span><span>,</span> updateName<span>)</span><span>;</span>
            <span></span>
<span>function</span><span>updateName</span><span>(</span><span>)</span> <span>{</span>
  <span>let</span> name <span>=</span> <span>prompt</span><span>(</span><span>'Enter a new name'</span><span>)</span><span>;</span>
  para<span>.</span>textContent <span>=</span> <span>'Player 1: '</span> <span>+</span> name<span>;</span>
<span>}</span></code></pre>
            </div>
            <p>Aquí seleccionamos un párrafo de texto (línea 1), luego adjuntamos un detector de eventos (línea 3) de modo que cuando se hace clic en el párrafo, el bloque de código <code>updateName()</code> (líneas 5-8) se ejecuta. El bloque de código <code>updateName()</code> (estos tipos de bloques de código reutilizables se denominan "funciones") pide al usuario un nuevo nombre y luego inserta ese nombre en el párrafo para actualizar la pantalla.</p>
            <p>Si cambiaras el orden de las dos primeras líneas de código, ya no funcionaría — en su lugar, obtendrías un error en la <a href="https://developer.mozilla.org/en/docs/Learn/Common_questions/What_are_browser_developer_tools">consola del desarrollador del navegador</a> — <code>TypeError: para is undefined</code>. Esto significa que el objeto <code>para</code> aún no existe, por lo que no podemos agregarle un detector de eventos.</p>
            <div>
                <p><strong>Nota</strong>: Este es un error muy común; debes tener cuidado de que los objetos a los que se hace referencia en tu código existan antes de intentar hacer algo con ellos.</p>
            </div>
        </div>
        <h3 id="código_interpretado_versus_compilado">
            <a href="#código_interpretado_versus_compilado" title="Permalink to Código interpretado versus compilado">Código interpretado versus compilado</a>
        </h3>
        <div>
            <p>Es posible que escuches los términos <strong>interpretados</strong> y <strong>compilados</strong> en el contexto de la programación. En los lenguajes interpretados, el código se ejecuta de arriba a abajo y el resultado de ejecutar el código se devuelve inmediatamente. No tienes que transformar el código en una forma diferente antes de que el navegador lo ejecute. El código se recibe en su forma de texto amigable para el programador y se procesa directamente desde allí.</p>
            <p>Los lenguajes compilados, por otro lado, se transforman (compilan) a código máquina antes de que sean ejecutados por la computadora. Por ejemplo, C/C++ se compila a código máquina que luego ejecuta la computadora. El programa se ejecuta desde un formato binario, que se generó a partir del código fuente del programa original.</p>
            <p>JavaScript es un lenguaje de programación interpretado ligero. El navegador web recibe el código JavaScript en su forma de texto original y ejecuta el script a partir de ahí. Desde un punto de vista técnico, la mayoría de los intérpretes de JavaScript modernos utilizan una técnica llamada <strong>compilación en tiempo real</strong> para mejorar el rendimiento; el código fuente de JavaScript se compila en un formato binario más rápido mientras se usa el script, de modo que se pueda ejecutar lo más rápido posible. Sin embargo, JavaScript todavía se considera un lenguaje interpretado, ya que la compilación se maneja en el entorno de ejecución, en lugar de antes.</p>
            <p>Ambos tipos de lenguaje tienen ventajas, pero no las abordaremos ahora.</p>
        </div>
        <h3>
            <a href="#código_de_lado_del_servidor_versus_de_lado_del_cliente" title="Permalink to Código de lado del servidor versus de lado del cliente">Código de lado del servidor versus de lado del cliente</a>
        </h3>
        <div>
            <p>También puedes escuchar los términos código <strong>de lado del servidor</strong> y <strong>de lado del cliente</strong>, especialmente en el contexto del desarrollo web. El código de lado del cliente es un código que se ejecuta en la computadora del usuario — cuando se ve una página web, el código de lado del cliente de la página se descarga, luego se ejecuta y se muestra en el navegador. En este módulo estamos hablando explícitamente de <strong>JavaScript de lado del cliente</strong>.</p>
            <p>El código de lado del servidor, por otro lado, se ejecuta en el servidor, luego sus resultados se descargan y se muestran en el navegador. Ejemplos de lenguajes web populares de lado del servidor incluyen a ¡PHP, Python, Ruby, ASP.NET y... JavaScript! JavaScript también se puede utilizar como lenguaje de lado del servidor, por ejemplo, en el popular entorno Node.js — puedes obtener más información sobre JavaScript de lado del servidor en nuestro tema <a href="https://developer.mozilla.org/en/docs/Learn/Server-side">Sitios web dinámicos — Programación de lado del servidor</a>.</p>
        </div>
        <h3>
            <a href="#código_dinámico_versus_estático" title="Permalink to Código dinámico versus estático">Código dinámico versus estático</a>
        </h3>
        <div>
            <p>La palabra <strong>dinámico</strong> se usa para describir tanto a JavaScript de lado del cliente como a los lenguajes de lado del servidor — se refiere a la capacidad de actualizar la visualización de una página web/aplicación para mostrar diferentes cosas en diferentes circunstancias, generando contenido nuevo según sea necesario. El código de lado del servidor genera dinámicamente nuevo contenido en el servidor, p. ej. extraer datos de una base de datos, mientras que JavaScript de lado del cliente genera dinámicamente nuevo contenido dentro del navegador del cliente, p. ej. creando una nueva tabla HTML, llenándola con los datos solicitados al servidor y luego mostrando la tabla en una página web que se muestra al usuario. El significado es ligeramente diferente en los dos contextos, pero relacionado, y ambos enfoques (de lado del servidor y de lado del cliente) generalmente funcionan juntos.</p>
            <p>Una página web sin contenido que se actualiza dinámicamente se denomina <strong>estática</strong> — simplemente muestra el mismo contenido todo el tiempo.</p>
        </div>
        <h2>
            <a href="#¿cómo_agregas_javascript_a_tu_página" title="Permalink to ¿Cómo agregas JavaScript a tu página?">¿Cómo agregas JavaScript a tu página?</a>
        </h2>
        <div>
            <p>JavaScript se aplica a tu página HTML de manera similar a CSS. Mientras que CSS usa elementos <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a> para aplicar hojas de estilo externas y elementos <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a> para aplicar hojas de estilo internas a HTML, JavaScript solo necesita un amigo en el mundo de HTML: el elemento {htmlelement("script")}}. Aprendamos cómo funciona esto.</p>
        </div>
        <h3 id="javascript_interno">
        <a href="#javascript_interno" title="Permalink to JavaScript interno">JavaScript interno</a>
        </h3>
        <div>
            <ol>
                <li>En primer lugar, haz una copia local de nuestro archivo de ejemplo <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript.html" rel="noopener">apply-javascript.html</a>. Guárdalo en un directorio en algún lugar accesible.</li>
                <li>Abre el archivo en tu navegador web y en tu editor de texto. Verás que el HTML crea una página web simple que contiene un botón en el que se puede hacer clic.</li>
                <li>A continuación, ve a tu editor de texto y agrega lo siguiente en tu <code>head</code>, justo antes de tu etiqueta de cierre <code>&lt;/head&gt;</code>:
                <div>
                <pre><code><span><span><span>&lt;</span>script</span><span>&gt;</span></span><span><span>
    <span>// JavaScript va aquí</span></span></span><span><span>
<span>&lt;/</span>script</span><span>&gt;</span></span></code></pre>
                </div>
                </li>
                <li>Ahora agregaremos algo de JavaScript dentro de nuestro elemento <a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code> <small>(en-US)</small></a> para que la página haga algo más interesante — agrega el siguiente código justo debajo de la línea "// El código JavaScript va aquí":
                    <div><pre><code>document<span>.</span><span>addEventListener</span><span>(</span><span>"DOMContentLoaded"</span><span>,</span> <span>function</span><span>(</span><span>)</span> <span>{</span>
  <span>function</span> <span>createParagraph</span><span>(</span><span>)</span> <span>{</span>
    <span></span>
    <span>let</span> para <span">=</span> document<span>.</span><span>createElement</span><span>(</span><span>'p'</span><span>)</span><span>;</span>
    para<span>.</span>textContent <span>=</span> <span>'You clicked the button!'</span><span>;</span>
    document<span>.</span>body<span>.</span><span>appendChild</span><span>(</span>para<span>)</span><span>;</span>
  <span>}</span>
  <span></span>
  <span>const</span> buttons <span>=</span> document<span>.</span><span>querySelectorAll</span><span>(</span><span>'button'</span><span>)</span><span>;</span>
  <span></span>
  <span>for</span><span>(</span><span>let</span> i <span>=</span> <span>0</span><span>;</span> i <span>&lt;</span> buttons<span>.</span>length <span>;</span> i<span>++</span><span>)</span> <span>{</span>
    buttons<span>[</span>i<span>]</span><span>.</span><span>addEventListener</span><span>(</span><span>'click'</span><span>,</span> createParagraph<span>)</span><span>;</span>
  <span>}</span>
<span>}</span><span>)</span><span>;</span></code></pre></div>
                </li>
                <li>Guarda tu archivo y actualiza el navegador — ahora deberías ver que cuando haces clic en el botón, se genera un nuevo párrafo y se coloca debajo.</li>
            </ol>
            <div>
                <p><strong>Nota</strong>: Si tu ejemplo no parece funcionar, sigue los pasos nuevamente y verifica que hiciste todo bien. ¿Guardaste tu copia local del código de inicio como un archivo <code>.html</code>? ¿Agregaste tu elemento <a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code> <small>(en-US)</small></a> justo antes de la etiqueta <code>&lt;/head&gt;</code>? ¿Ingresaste el JavaScript exactamente como se muestra? <strong>JavaScript distingue entre mayúsculas y minúsculas y es muy exigente, por lo que debes ingresar la sintaxis exactamente como se muestra; de lo contrario, es posible que no funcione.</strong></p>
            </div>
            <div>
                <p><strong>Nota</strong>: Puedes ver esta versión en GitHub como <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html" rel="noopener">apply-javascript-internal.html</a> o (<a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html" rel="noopener">verla en vivo también</a>).</p>
            </div>
        </div>
        <h3 id="javascript_externo">
            <a href="#javascript_externo" title="Permalink to JavaScript externo">JavaScript externo</a>
        </h3>
        <div>
            <p>Esto funciona muy bien, pero ¿y si quisiéramos poner nuestro JavaScript en un archivo externo? Exploremos esto ahora.</p>
            <ol>
                <li>Primero, crea un nuevo archivo en el mismo directorio que tu archivo HTML del ejemplo. Como nombre ponle <code>script.js</code>; asegúrate de que el nombre tenga la extensión <code>.js</code>, ya que así es como se reconoce como JavaScript.</li>
                <li>Reemplaza tu elemento <a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code> <small>(en-US)</small></a> actual con lo siguiente:
                <div>
                <pre><code><span><span
                ><span>&lt;</span>script</span> <span>src</span><span><span>=</span><span>"</span>script.js<span>"</span></span> <span>defer</span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span></code></pre>
                </div>
                </li>
                <li>Dentro de <code>script.js</code>, agrega el siguiente script:
                <div>
                <pre><code><span>function</span> <span>createParagraph</span><span>(</span><span>)</span> <span>{</span>
  <span>let</span> para <span>=</span> document<span>.</span><span>createElement</span><span>(</span><span>'p'</span><span>)</span><span>;</span>
  para<span>.</span>textContent <span>=</span> <span>'You clicked the button!'</span><span>;</span>
  document<span>.</span>body<span>.</span><span>appendChild</span><span>(</span>para<span>)</span><span>;</span>
<span>}</span>
<span></span>
<span>const</span> buttons <span>=</span> document<span>.</span><span>querySelectorAll</span><span>(</span><span>'button'</span><span>)</span><span>;</span>
<span></span>
<span>for</span><span>(</span><span>let</span> i <span>=</span> <span>0</span><span>;</span> i <span>&lt;</span> buttons<span>.</span>length <span>;</span> i<span>++</span><span>)</span> <span>{</span>
  buttons<span>[</span>i<span>]</span><span>.</span><span>addEventListener</span><span>(</span><span>'click'</span><span>,</span> createParagraph<span>)</span><span>;</span>
<span>}</span></code></pre>
                </div>
                </li>
                <li>Guarda y actualiza tu navegador, ¡y deberías ver lo mismo! Funciona igual, pero ahora tenemos nuestro JavaScript en un archivo externo. Por lo general, esto es bueno en términos de organización de tu código y para hacerlo reutilizable en varios archivos HTML. Además, el HTML es más fácil de leer sin grandes trozos de script en él.</li>
            </ol>
            <div>
                <p><strong>Nota</strong>: Puedes ver esta versión en GitHub como <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html" rel="noopener">apply-javascript-external.html</a> y <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/script.js" rel="noopener">script.js</a> (<a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html" rel="noopener">verla en vivo también</a>).</p>
            </div>
        </div>
        <h3>
            <a href="#controladores_de_javascript_en_línea" title="Permalink to Controladores de JavaScript en línea">Controladores de JavaScript en línea</a>
        </h3>
        <div>
            <p>Ten en cuenta que a veces te encontrarás con fragmentos de código JavaScript real dentro de HTML. Podría verse algo similar a esto:</p>
            <div>
                <div>
                <pre><code><span>function</span> <span>createParagraph</span><span>(</span><span>)</span> <span>{</span>
  <span>let</span> para <span>=</span> document<span>.</span><span>createElement</span><span>(</span><span>'p'</span><span>)</span><span>;</span>
  para<span>.</span>textContent <span>=</span> <span>'You clicked the button!'</span><span>;</span>
  document<span>.</span>body<span>.</span><span>appendChild</span><span>(</span>para<span>)</span><span>;</span>
<span>}</span></code></pre>
                </div>
                <div>
                <pre><code><span><span><span>&lt;</span>button</span> <span><span>onclick</span><span><span>=</span><span>"</span><span><span>createParagraph</span><span>(</span><span>)</span></span><span>"</span></span></span><span>&gt;</span></span>Click me!<span><span><span>&lt;/</span>button</span><span>&gt;</span></span></code></pre>
                </div>
            </div>
            <p>Puedes probar esta versión de nuestra demostración a continuación.</p>
            <p>Esta demostración tiene exactamente la misma funcionalidad que en las dos secciones anteriores, excepto que el elemento <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/button"><code>&lt;button&gt;</code></a> incluye un controlador <code>onclick</code> en línea para que la función se ejecute cuando se presiona el botón .</p>
            <p><strong>Sin embargo, no hagas esto</strong>. Es una mala práctica contaminar tu HTML con JavaScript, y es ineficiente; tendrías que incluir el atributo <code>onclick="createParagraph()"</code> en cada botón al que desees que se aplique JavaScript.</p>
            <p>El uso de una construcción de JavaScript pura te permite seleccionar todos los botones usando una instrucción. El código que usamos anteriormente para cumplir este propósito se ve así:</p>
            <div>
            <pre><code><span>const</span> buttons <span>=</span> document<span>.</span><span>querySelectorAll</span><span>(</span><span>'button'</span><span>)</span><span>;</span>
            <span></span>
<span>for</span><span>(</span><span>let</span> i <span>=</span> <span>0</span><span>;</span> i <span>&lt;</span> buttons<span>.</span>length <span>;</span> i<span>++</span><span>)</span> <span>{</span>
  buttons<span>[</span>i<span>]</span><span>.</span><span>addEventListener</span><span>(</span><span>'click'</span><span>,</span> createParagraph<span>)</span><span>;</span>
<span>}</span></code></pre>
            </div>
            <p>Esto puede ser un poco más largo que el atributo <code>onclick</code>, pero funcionará para todos los botones, sin importar cuántos haya en la página, ni cuántos se agreguen o eliminen. No es necesario cambiar el JavaScript.</p>
            <div>
                <p><strong>Nota</strong>: Intenta editar tu versión de <code>apply-javascript.html</code> y agrega algunos botones más en el archivo. Cuando la vuelvas a cargar, deberías encontrar que todos los botones al hacer clic crearán un párrafo. Limpio, ¿eh?</p>
            </div>
        </div>
        <h3>
            <a href="#estrategias_para_la_carga_de_scripts" title="Permalink to Estrategias para la carga de scripts">Estrategias para la carga de scripts</a>
        </h3>
        <div>
            <p>Hay una serie de problemas relacionados con la carga de los scripts en el momento adecuado. ¡Nada es tan simple como parece! Un problema común es que todo el HTML de una página se carga en el orden en que aparece. Si estás utilizando JavaScript para manipular elementos en la página (o exactamente, el <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" title="Currently only available in English (US)">Modelo de objetos del documento (en-US)</a>), tu código no funcionará si el JavaScript se carga y procesa antes que el HTML que estás intentando haga algo.</p>
            <p>En los ejemplos de código anteriores, en los ejemplos internos y externos, JavaScript se carga y se ejecuta en el encabezado del documento, antes de analizar el cuerpo HTML. Esto podría causar un error, por lo que hemos utilizado algunas construcciones para solucionarlo.</p>
            <p>En el ejemplo interno, puedes ver esta estructura alrededor del código:</p>
            <div><pre><code>document<span>.</span><span>addEventListener</span><span>(</span><span>"DOMContentLoaded"</span><span>,</span> <span>function</span><span>(</span><span>)</span> <span>{</span>
  <span>...</span>
<span>}</span><span>)</span><span>;</span></code></pre>
            </div>
            <p>Este es un detector de eventos, que escucha el evento "DOMContentLoaded" del navegador, lo cual significa que el cuerpo HTML está completamente cargado y analizado. El JavaScript dentro de este bloque no se ejecutará hasta que se active ese evento, por lo que se evita el error (<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" title="Currently only available in English (US)">aprenderás sobre los eventos (en-US)</a> más adelante en el curso).</p>
            <p>En el ejemplo externo, usamos una función de JavaScript más moderno para resolver el problema, el atributo <code>defer</code>, que le dice al navegador que continúe descargando el contenido HTML una vez que se ha alcanzado la etiqueta del elemento <code>&lt;script&gt;</code>.</p>
            <div>
            <pre><code><span>&lt;</span>script src<span>=</span><span>"script.js"</span> defer<span>&gt;</span><span>&lt;</span><span>/</span>script<span>&gt;</span></code></pre>
            </div>
            <p>En este caso, tanto el script como el HTML se cargarán simultáneamente y el código funcionará.</p>
            <div>
                <p><strong>Nota</strong>: En el caso externo, no necesitamos usar el evento <code>DOMContentLoaded</code> porque el atributo <code>defer</code> nos resolvió el problema. No usamos la solución <code>defer</code> para el ejemplo interno de JavaScript porque <code>defer</code> solo funciona para scripts externos.</p>
            </div>
            <p>Una solución pasada de moda a este problema solía ser colocar tu elemento <code>script</code> justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta <code>&lt;/body&gt;</code>), para que se cargara después de haber procesado todo el HTML. El problema con esta solución es que la carga/procesamiento del script está completamente bloqueado hasta que se haya cargado el DOM HTML. En sitios muy grandes con mucho JavaScript, esto puede causar un importante problema de rendimiento y ralentizar tu sitio.</p>
            <h4 id="async_y_defer">
                <code>async</code> y <code>defer</code>
            </h4>
            <p>En realidad, hay dos modernas características que podemos usar para evitar el problema del bloqueo de <code>script</code>: <code>async</code> y <code>defer</code> (que vimos anteriormente). Veamos la diferencia entre estas dos.</p>
            <p>Los scripts cargados con el atributo <code>async</code> (ve más abajo) descargarán el <code>script</code> sin bloquear el renderizado de la página y lo ejecutará tan pronto como el <code>script</code> se termine de descargar. No tienes garantía de que los <code>script</code>s se ejecuten en un orden específico, solo que no detendrán la visualización del resto de la página. Es mejor usar <code>async</code> cuando los <code>script</code>s de la página se ejecutan de forma independiente y no dependen de ningún otro <code>script</code> de la página.</p>
            <p>Por ejemplo, si tienes los siguientes elementos <code>script</code>:</p>
            <div>
            <pre><code><span><span><span>&lt;</span>script</span> <span>async</span> <span>src</span><span><span>=</span><span>"</span>js/vendor/jquery.js<span>"</span></span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span>
            <span></span>
<span><span><span>&lt;</span>script</span> <span>async</span> <span>src</span><span><span>=</span><span>"</span>js/script2.js<span>"</span></span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span>
<span></span>
<span><span><span>&lt;</span>script</span> <span>async</span> <span>src</span><span><span>=</span><span>"</span>js/script3.js<span>"</span></span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span></code></pre>
            </div>
            <p>No puedes confiar en el orden en que se cargarán los <code>script</code>s. <code>jquery.js</code> se puede cargar antes o después de <code>script2.js</code> y <code>script3.js</code> y si este es el caso, cualquier función en esos <code>script</code>s dependiendo de <code>jquery</code> producirá un error porque <code>jquery</code> no se definirá en el momento en que se ejecute el <code>script</code>.</p>
            <p><code>async</code> se debe usar cuando tienes un montón de <code>script</code>s en segundo plano para cargar, y solo deseas ponerlos en su lugar lo antes posible. Por ejemplo, tal vez tengas algunos archivos de datos del juego para cargar, que serán necesarios cuando el juego realmente comience, pero por ahora solo deseas continuar mostrando la introducción del juego, los títulos y el lobby, sin que se bloqueen al cargar el <code>script</code>.</p>
            <p>Los <code>script</code>s cargados con el atributo <code>defer</code> (ve a continuación) se ejecutarán en el orden en que aparecen en la página y los ejecutará tan pronto como se descarguen el <code>script</code> y el contenido:</p>
            <div>
            <pre><code><span><span><span>&lt;</span>script</span> <span>defer</span> <span>src</span><span><span>=</span><span>"</span>js/vendor/jquery.js<span>"</span></span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span>
<span></span>
<span><span><span>&lt;</span>script</span> <span>defer</span> <span>src</span><span><span>=</span><span>"</span>js/script2.js<span>"</span></span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span>
<span></span>
<span><span><span>&lt;</span>script</span> <span>defer</span> <span>src</span><span><span>=</span><span>"</span>js/script3.js<span>"</span></span><span>&gt;</span></span><span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span></code></pre>
            </div>
            <p>Todos los <code>script</code>s con el atributo <code>defer</code> se cargarán en el orden en que aparecen en la página. Entonces, en el segundo ejemplo, podemos estar seguros de que <code>jquery.js</code> se cargará antes que <code>script2.js</code> y <code>script3.js</code> y que <code>script2.js</code> se cargará antes de <code>script3.js</code>. No se ejecutarán hasta que se haya cargado todo el contenido de la página, lo cual es útil si tus <code>script</code>s dependen de que el DOM esté en su lugar (por ejemplo, modifican uno o más elementos de la página).</p>
            <p>Para resumir:</p>
            <ul>
                <li><code>async</code> y <code>defer</code> indican al navegador que descargue los <code>script</code>s en un hilo separado, mientras que el resto de la página (el DOM, etc.) se descarga, por lo que los <code>script</code>s no bloquean la carga de la página.</li>
                <li>Si tus <code>script</code>s se deben ejecutar inmediatamente y no tienen ninguna dependencia, utiliza <code>async</code>.</li>
                <li>Si tus <code>script</code>s necesitan esperar a ser procesados y dependen de otros <code>script</code>s y/o del DOM en su lugar, cárgalos usando <code>defer</code>y coloca tus elementos <code>&lt;script&gt;</code> correspondientes en el orden que desees que el navegador los ejecute.</li>
            </ul>
        </div>
        <h2>
            <a href="#comentarios" title="Permalink to Comentarios">Comentarios</a>
        </h2>
        <div>
            <p>Al igual que con HTML y CSS, es posible escribir comentarios en tu código JavaScript que el navegador ignorará y que existen simplemente para proporcionar instrucciones a tus compañeros desarrolladores sobre cómo funciona el código (y a ti, si regresas a tu código después de seis meses y no puedes recordar lo que hiciste). Los comentarios son muy útiles y deberías utilizarlos con frecuencia, especialmente para aplicaciones grandes. Hay dos tipos:</p>
            <ul>
                <li>Un comentario de una sola línea se escribe después de una doble barra inclinada (//), p. ej.
                <div>
                <pre><code><span>// soy un comentario</span></code></pre>
                </div>
                </li>
                <li>Se escribe un comentario de varias líneas entre las cadenas /* y */, p. ej.
                <div>
                <pre><code><span>/*
  Yo también soy
  un comentario
*/</span></code></pre>
                </div>
                </li>
            </ul>
            <p>Entonces, por ejemplo, podríamos anotar el JavaScript de nuestra última demostración con comentarios como este:</p>
            <div>
            <pre><code><span>// Función: crea un nuevo párrafo y lo agrega al final del cuerpo HTML.</span>
            <span></span>
<span>function</span> <span>createParagraph</span><span>(</span><span>)</span> <span>{</span>
  <span>let</span> para <span>=</span> document<span>.</span><span>createElement</span><span>(</span><span>'p'</span><span>)</span><span>;</span>
  para<span>.</span>textContent <span>=</span> <span>'You clicked the button!'</span><span>;</span>
  document<span>.</span>body<span>.</span><span>appendChild</span><span>(</span>para<span>)</span><span>;</span>
<span>}</span>
<span></span>
<span>/*
  1. Obtiene referencias de todos los botones de la página en un formato de arreglo.
  2. Recorre todos los botones y agrega un detector de eventos 'click' a cada uno.
</span>
<span>
  Cuando se presione cualquier botón, se ejecutará la función createParagraph().
*/</span>
<span></span>
<span>const</span> buttons <span>=</span> document<span>.</span><span>querySelectorAll</span><span>(</span><span>'button'</span><span>)</span><span>;</span>
<span></span>
<span>for</span> <span>(</span><span>let</span> i <span>=</span> <span>0</span><span>;</span> i <span>&lt;</span> buttons<span>.</span>length <span>;</span> i<span>++</span><span>)</span> <span>{</span>
  buttons<span>[</span>i<span>]</span><span>.</span><span>addEventListener</span><span>(</span><span>'click'</span><span>,</span> createParagraph<span>)</span><span>;</span>
<span>}</span></code></pre>
            </div>
            <div>
                <p><strong>Nota</strong>: En general, más comentarios suelen ser mejor que menos, pero debes tener cuidado si agregas muchos comentarios para explicar qué son las variables (los nombres de tus variables tal vez deberían ser más intuitivos), o para explicar operaciones muy simples (tal vez tu código sea demasiado complicado).</p>
            </div>
        </div>
        <h2>
            <a href="#resumen" title="Permalink to Resumen">Resumen</a>
        </h2>
        <div>
            <p>Así que ahí tienes, tu primer paso en el mundo de JavaScript. Comenzamos solo con teoría, para comenzar a acostumbrarte a por qué usarías JavaScript y qué tipo de cosas puedes hacer con él. En el camino, viste algunos ejemplos de código y aprendiste cómo encaja JavaScript con el resto del código en tu sitio web, entre otras cosas.</p>
            <p>JavaScript puede parecer un poco abrumador en este momento, pero no te preocupes — en este curso, te guiaremos en pasos simples que tendrán sentido en el futuro. En el próximo artículo, <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash" title="Currently only available in English (US)">nos sumergiremos directamente en lo práctico (en-US)</a>, lo que te permitirá comenzar directamente y crear tus propios ejemplos de JavaScript.</p>
            <ul>
            </ul>
            <p></p>
            <ul>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps"> Overview: First steps</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/A_first_splash"> Siguiente  </a></li>
            </ul>
            <p></p>
        </div>
        <h2>
            <a href="#en_este_modulo" title="Permalink to En este modulo">En este modulo</a>
        </h2>
        <div>
            <ul>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/What_is_JavaScript" aria-current="page">¿Qué es JavaScript?</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/A_first_splash">Primer contacto con JavaScript</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/What_went_wrong">¿Qué salió mal? Solución de problemas de JavaScript</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/Variables">Almacenamiento de la información que necesita — Variables</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/Math">Matemáticas básicas en JavaScript — números y operadores</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/Strings">Manejo de texto — cadenas en JavaScript</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/Useful_string_methods">Métodos de cadena útiles</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/Arrays">Arreglos</a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/First_steps/Silly_story_generator">Evaluación: Generador de historias tontas</a></li>
            </ul>
        </div>
    </article>
</div>

### Tipos de datos y estructuras en JavaScript
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures).

<div align="justify">
    <article lang="es">
        <h1>Tipos de datos y estructuras en JavaScript</h1>
        <div>
            <div></div>
            <p>Todos los lenguajes de programación tienen estructuras de datos integradas, pero estas a menudo difieren de un lenguaje a otro. Este artículo intenta enumerar las estructuras de datos integradas disponibles en JavaScript y las propiedades que tienen. Estas se pueden utilizar para construir otras estructuras de datos. Siempre que es posible, se hacen comparaciones con otros lenguajes.</p>
        </div>
        <h2 id="tipado_dinámico">
            <a href="#tipado_dinámico" title="Permalink to Tipado dinámico">Tipado dinámico</a>
        </h2>
        <div>
            <p>JavaScript es un lenguaje <em>débilmente tipado</em> y <em>dinámico</em>. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:</p>
            <div>
            <pre><code><span>let</span> foo <span>=</span> <span>42</span><span>;</span>    <span>// foo ahora es un número</span>
<span>foo =</span> <span>'bar'</span><span>;</span> <span>// foo ahora es un string</span>
<span>foo =</span> <span>true</span><span>;</span>  <span>// foo ahora es un booleano</span>
</code></pre>
            </div>
        </div>
        <h2 id="estructuras_y_tipos_de_datos">
            <a href="#estructuras_y_tipos_de_datos" title="Permalink to Estructuras y tipos de datos">Estructuras y tipos de datos</a>
        </h2>
        <div>
            <p>El último estándar ECMAScript define nueve tipos:</p>
            <ul>
                <li>Seis <strong>tipos de datos</strong> <a href="https://developer.mozilla.org/en/docs/Glossary/Primitive">primitivos</a>, controlados por el <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof"><code>operador typeof</code></a>
                <ul>
                    <li><a href="https://developer.mozilla.org/en/docs/Glossary/undefined">Undefined</a>: <code>typeof instance === "undefined"</code></li>
                    <li><a href="https://developer.mozilla.org/en/docs/Glossary/Boolean">Boolean</a>: <code>typeof instance === "boolean"</code></li>
                    <li><a href="https://developer.mozilla.org/en/docs/Glossary/Number">Number</a>: <code>typeof instance === "number"</code></li>
                    <li><a href="https://developer.mozilla.org/en/docs/Glossary/String">String</a>: <code>typeof instance === "string"</code></li>
                    <li><a href="https://developer.mozilla.org/en/docs/Glossary/BigInt">BigInt</a>: <code>typeof instance === "bigint"</code></li>
                    <li><a href="https://developer.mozilla.org/en/docs/Glossary/Symbol">Symbol</a>: <code>typeof instance === "symbol"</code></li>
                </ul>
                </li>
                <li><a href="https://developer.mozilla.org/en/docs/Glossary/Null">Null</a>: <code>typeof instance === "object"</code>. Tipo <a href="https://developer.mozilla.org/en/docs/Glossary/Primitive">primitivo</a> especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra <code>null</code>;</li>
                <li><a href="https://developer.mozilla.org/en/docs/Glossary/Object">Object</a>: <code>typeof instance === "object"</code>. Tipo estructural especial que no es de datos pero para cualquier instancia de objeto <a href="https://developer.mozilla.org/en/docs/Learn/JavaScript/Objects#the_constructor">construido</a> que también se utiliza como estructuras de datos: new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a>, new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>, new <a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor  considera contribuir !"><code>Map</code></a>, new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a>, new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"><code>WeakMap</code></a>, new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet</code></a>, new <a href="/es/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a> y casi todo lo hecho con la <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new">palabra clave <code>new</code></a>;</li>
                <li><a href="https://developer.mozilla.org/en/docs/Glossary/Function">Function</a><span>: una estructura sin datos, aunque también responde al operador <code>typeof</code>: </span><code>typeof instance === "function"</code>. Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor <code>Object</code>.</li>
            </ul>
            <p>Ten en cuenta que el único propósito valioso del uso del operador <code>typeof</code> es verificar el tipo de dato. Si deseamos verificar cualquier Tipo Estructural derivado de <code>Object</code>, no tiene sentido usar <code>typeof</code> para eso, ya que siempre recibiremos "<code>object</code>". La forma correcta de comprobar qué tipo de Objeto estamos usando es la palabra clave <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a>. Pero incluso en ese caso, puede haber conceptos erróneos.</p>
        </div>
        <h2 id="valores_primitivos">
            <a href="#valores_primitivos" title="Permalink to Valores primitivos">Valores primitivos</a>
        </h2>
        <div>
            <p>Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo (y a diferencia de C), las cadenas son inmutables. Nos referimos a los valores de estos tipos como "<em>valores primitivos</em>".</p>
        </div>
        <h3 id="tipo_boolean">
            <a href="#tipo_boolean" title="Permalink to Tipo Boolean">Tipo <code>Boolean</code></a>
        </h3>
        <div>
            <p><code>Boolean</code> representa una entidad lógica y puede tener dos valores: <code>true</code> y <code>false</code>. Consulta <a href="https://developer.mozilla.org/en/docs/Glossary/Boolean">Boolean</a> y <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a> para obtener más detalles.</p>
        </div>
        <h3 id="tipo_null">
            <a href="#tipo_null" title="Permalink to Tipo Null">Tipo <code>Null</code></a>
        </h3>
        <div>
            <p>El tipo <code>Null</code> tiene exactamente un valor: <code>null</code>. Consulta <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> y <a href="https://developer.mozilla.org/en/docs/Glossary/Null">Null</a> para obtener más detalles.</p>
        </div>
        <h3 id="tipo_undefined">
            <a href="#tipo_undefined" title="Permalink to Tipo Undefined">Tipo <code>Undefined</code></a>
        </h3>
        <div>
            <p>Una variable a la que no se le ha asignado un valor tiene el valor <code>undefined</code>. Consulta <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> y <a href="https://developer.mozilla.org/en/docs/Glossary/undefined">Undefined</a> para obtener más detalles.</p>
        </div>
        <h3 id="tipo_number">
            <a href="#tipo_number" title="Permalink to Tipo Number">Tipo <code>Number</code></a>
        </h3>
        <div>
            <p>ECMAScript tiene dos tipos numéricos integrados: <strong><code>Number</code></strong> y <strong><code>BigInt</code></strong> (ve más abajo).</p>
            <p>El tipo <code>Number</code> es un <a href="https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisión" rel="noopener">valor en formato binario de 64 bits de doble precisión IEEE 754</a> (números entre -(2<sup>53</sup> - 1) y 2<sup>53</sup> - 1). Además de representar números de punto flotante, el tipo <code>Number</code> tiene tres valores simbólicos: <code>+Infinity</code>, <code>-Infinity</code> y <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a> ("<strong>N</strong>ot a <strong>N</strong>umber" o No es un número).</p>
            <p>Para verificar el valor disponible más grande o el valor más pequeño disponible dentro de <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Infinity"><code>±Infinity</code></a>, puedes usar las constantes <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE"><code>Number.MAX_VALUE</code></a> o <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE"><code>Number.MIN_VALUE</code></a>.</p>
            <div id="sect2">
                <p><strong>A partir de ECMAScript 2015</strong>, también puedes comprobar si un número está en el rango de números de punto flotante de doble precisión mediante <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger"><code>Number.isSafeInteger()</code></a> así como <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"><code>Number.MAX_SAFE_INTEGER</code></a> y <a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"><code>Number.MIN_SAFE_INTEGER</code> <small>(en-US)</small></a>.</p>
                <p>Más allá de este rango, los enteros en JavaScript ya no son seguros y serán una aproximación de punto flotante de doble precisión del valor.</p>
            </div>
            <p>El tipo <code>number</code> solo tiene un entero con dos representaciones: <code>0</code> se representa como <code>-0</code> y <code>+0</code>. (<code>0</code> es un alias de <code>+0</code>).</p>
            <p>En la praxis, esto casi no tiene impacto. Por ejemplo, <code>+0 === -0</code> es <code>true</code>. Sin embargo, puedes notar esto cuando divides entre cero:</p>
            <div>
            <pre><code><span>&gt;</span> <span>42</span> <span>/</span> <span>+</span><span>0</span>
<span>Infinity</span>
<span>&gt;</span> <span>42</span> <span>/</span> <span>-</span><span>0</span>
<span>-</span><span>Infinity</span>
</code></pre>
            </div>
            <p>Aunque un <code>number</code> a menudo representa solo su valor, JavaScript proporciona <a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators"><code>operadores binarios (bitwise)</code> <small>(en-US)</small></a>.</p>
            <div id="sect3">
                <p><strong>Precaución</strong>: Aunque los operadores bit a bit se <em>pueden</em> usar para representar múltiples valores Booleanos dentro de un solo número usando el <a href="https://es.wikipedia.org/wiki/Máscara_(informática)" rel="noopener">enmascaramiento de bits</a>, esto generalmente se considera una mala práctica. JavaScript ofrece otros medios para representar un conjunto de valores booleanos (como un arreglo de valores booleanos o un objeto con valores booleanos asignados a propiedades con nombre). El enmascaramiento de bits también tiende a hacer que el código sea más difícil de leer, comprender y mantener.</p>
            </div>
            <p>Posiblemente sea necesario utilizar estas técnicas en entornos muy restringidos, como cuando se intenta hacer frente a las limitaciones del almacenamiento local, o en casos extremos (como cuando cada bit de la red cuenta). Esta técnica solo se debe considerar cuando sea la última medida que se pueda tomar para optimizar el tamaño.</p>
        </div>
        <h3 id="tipo_bigint">
            <a href="#tipo_bigint" title="Permalink to Tipo BigInt">Tipo <code>BigInt</code></a>
        </h3>
        <div>
            <p>El tipo <a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor  considera contribuir !"><code>BigInt</code></a> es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. Con <code>BigInt</code>s, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para <code>Number</code>s.</p>
            <p>Un <code>BigInt</code> se crea agregando <code>n</code> al final de un número entero o llamando al constructor.</p>
            <p>Puedes obtener el valor más seguro que se puede incrementar con <code>Number</code>s utilizando la constante <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"><code>Number.MAX_SAFE_INTEGER</code></a>. Con la introducción de <code>BigInt</code>s, puedes operar con números más allá de <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"><code>Number.MAX_SAFE_INTEGER</code></a>.</p>
            <p>Este ejemplo demuestra, dónde, incrementando el <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"><code>Number.MAX_SAFE_INTEGER</code></a> devuelve el resultado esperado:</p>
            <div>
            <pre><code><span>&gt;</span> <span>const</span> x <span>=</span> <span>2n</span> <span>**</span> <span>53n</span><span>;</span>
<span>9007199254740992n</span>
<span>&gt;</span> <span>const</span> y <span>=</span> x <span>+</span> <span>1n</span><span>;</span>
<span>9007199254740993n</span>
</code></pre>
            </div>
            <p>Puedes utilizar los operadores <code>+</code>, <code>*</code>, <code>-</code>, <code>**</code> y <code>%</code> con <code>BigInt</code>s, igual que con <code>Number</code>s. Un <code>BigInt</code> no es estrictamente igual a un <code>Number</code>, pero lo es en términos generales.</p>
            <p>Un <code>BigInt</code> se comporta como un <code>Number</code> en los casos en que se convierte a <code>Boolean</code>: <code>if</code>, <code>||</code>, <code>&amp;&amp;</code>, <code>Boolean</code>, <code>!</code>.</p>
            <p>Los <code>BigInt</code> no se pueden utilizar indistintamente con los <code>Number</code>. En su lugar, se lanzará un <a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor  considera contribuir !"><code>TypeError</code></a>.</p>
        </div>
        <h3 id="tipo_string">
            <a href="#tipo_string" title="Permalink to Tipo String">Tipo <code>String</code></a>
        </h3>
        <div>
            <p>El tipo <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a> de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento del <code>String</code> ocupa una posición en la cadena. El primer elemento está en el índice <code>0</code>, el siguiente en el índice <code>1</code>, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene.</p>
            <p>A diferencia de algunos lenguajes de programación (tal como C), las cadenas de JavaScript son inmutables. Esto significa que una vez que se crea una cadena, no es posible modificarla.</p>
            <p>Sin embargo, todavía es posible crear otra cadena basada en una operación en la cadena original. Por ejemplo:</p>
            <ul>
                <li>Una subcadena de la original seleccionando letras individuales o usando <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr"><code>String.substr()</code></a>.</li>
                <li>Una concatenación de dos cadenas usando el operador de concatenación (<code>+</code>) o <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/concat"><code>String.concat()</code></a>.</li>
            </ul>
            <h4 id="¡ten_cuidado_de_no_convertir_a_cadenas_tu_código!">¡Ten cuidado de no "convertir a cadenas" tu código!</h4>
            <p>Puede resultar tentador utilizar cadenas para representar datos complejos. Hacer esto viene con beneficios a corto plazo:</p>
            <ul>
                <li>Es fácil construir cadenas complejas con concatenación.</li>
                <li>Las cadenas son fáciles de depurar (lo que ves impreso siempre es lo que está en la cadena).</li>
                <li>Las cadenas son el denominador común de muchas APIs (<a href="https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement" title="HTMLInputElement">campos de entrada —<code>input</code>s—</a>, <a href="https://developer.mozilla.org/en/docs/Storage" title="This is a link to an unwritten page">valores de almacenamiento local</a>, respuestas <a href="https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest" title="Usa objetos XMLHttpRequest (XHR) para interactuar con servidores. Puedes recuperar datos de una URL sin tener que actualizar la página completa. Esto permite que una página web actualice solo parte de su contenido sin interrumpir lo que el usuario está haciendo."><code>XMLHttpRequest</code></a> cuando se usa <code>responseText</code>, etc.) y puede resultar tentador trabajar solo con cadenas.</li>
            </ul>
            <p>Con las convenciones, es posible representar cualquier estructura de datos en una cadena. Esto no la convierte en una buena idea. Por ejemplo, con un separador, se podría emular una lista (mientras que un arreglo de JavaScript sería más adecuado). Desafortunadamente, cuando el separador se usa en uno de los elementos de la "lista", la lista se rompe. Se puede elegir un caracter de escape, etc. Todo esto requiere convenciones y crea una innecesaria carga de mantenimiento.</p>
            <p>Utiliza cadenas para datos textuales. Cuando quieras representar datos complejos, <em>procesa</em> las cadenas y usa la abstracción adecuada.</p>
        </div>
        <h3 id="tipo_symbol">
            <a href="#tipo_symbol" title="Permalink to Tipo Symbol">Tipo <code>Symbol</code></a>
        </h3>
        <div>
            <p>Un símbolo es un valor primitivo <strong>único</strong> e <strong>inmutable</strong> y se puede utilizar como clave de una propiedad de objeto (ve más abajo). En algunos lenguajes de programación, los símbolos se denominan "átomos".</p>
            <p>Para obtener más detalles, consulta <a href="https://developer.mozilla.org/en/docs/Glossary/Symbol">Symbol</a> y el contenedor de objetos <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a> en JavaScript.</p></div><h2 id="objetos"><a href="#objetos" title="Permalink to Objetos">Objetos</a></h2><div><p>En ciencias de la computación, un objeto es un valor en la memoria al que posiblemente hace referencia un <a href="https://developer.mozilla.org/en/docs/Glossary/Identifier">identificador</a>.</p>
        </div>
        <h3 id="propiedades">
            <a href="#propiedades" title="Permalink to Propiedades">Propiedades</a>
        </h3>
        <div>
            <p>En JavaScript, los objetos se pueden ver como una colección de propiedades. Con la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals" title="Currently only available in English (US)">sintaxis de objeto literal (en-US)</a>, se inicia un conjunto limitado de propiedades; luego se pueden agregar y eliminar propiedades. Los valores de propiedad pueden ser valores de cualquier tipo, incluidos otros objetos, lo que permite construir estructuras de datos complejas. Las propiedades se identifican mediante valores <em>clave</em>. Un valor <em>clave</em> es un valor de cadena o un símbolo.</p>
            <p>Hay dos tipos de propiedades de objeto que tienen ciertos atributos: la propiedad <em>data</em> y la propiedad <em>accessor</em>.</p>
            <div id="sect4">
                <p><strong>Nota</strong>: Cada propiedad tiene <em>atributos correspondientes</em>. Los atributos, internamente los utiliza el motor JavaScript, por lo que no puedes acceder a ellos directamente. Es por eso que los atributos se enumeran entre corchetes dobles, en lugar de simples.</p>
                <p>Consulta <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a> para obtener más información.</p>
            </div>
            <h4 id="propiedad_data">Propiedad <code>Data</code></h4>
            <p>Asocia una clave con un valor y tiene los siguientes atributos:</p>
            <table>
                <caption>Atributos de una propiedad <code>data</code></caption>
                <thead>
                    <tr>
                        <th scope="col">Atributo</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Valor predeterminado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>[[Value]]</td>
                    <td>Cualquier tipo de JavaScript</td>
                    <td>El valor recuperado por un captador de acceso <code>get</code> a la propiedad.</td>
                    <td><code>undefined</code></td>
                    </tr>
                    <tr>
                    <td>[[Writable]]</td>
                    <td><code>Boolean</code></td>
                    <td>Si es <code>false</code>, el [[Value]] de la propiedad no se puede cambiar.</td>
                    <td><code>false</code></td>
                    </tr>
                    <tr>
                    <td>[[Enumerable]]</td>
                    <td><code>Boolean</code></td>
                    <td>
                        <p>Si es <code>true</code>, la propiedad se enumerará en bucles <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a>.<br>
                        Consulta también <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerabilidad y posesión de propiedades</a>.</p>
                    </td>
                    <td><code>false</code></td>
                    </tr>
                    <tr>
                    <td>[[Configurable]]</td>
                    <td><code>Boolean</code></td>
                    <td>Si es <code>false</code>, la propiedad no se puede eliminar, no se puede cambiar a una propiedad de acceso descriptor y los atributos que no sean [[Value]] y [[Writable]] no se pueden cambiar.</td>
                    <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>Atributos obsoletos (a partir de ECMAScript 3, renombrado en ECMAScript 5)</caption>
                <thead>
                    <tr>
                    <th scope="col">Atributo</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>Read-only</code></td>
                    <td><code>Boolean</code></td>
                    <td>Estado inverso del atributo ES5 [[Writable]].</td>
                    </tr>
                    <tr>
                    <td><code>DontEnum</code></td>
                    <td><code>Boolean</code></td>
                    <td>Estado inverso del atributo ES5 [[Enumerable]].</td>
                    </tr>
                    <tr>
                    <td><code>DontDelete</code></td>
                    <td><code>Boolean</code></td>
                    <td>Estado inverso del atributo ES5 [[Configurable]].</td>
                    </tr>
                </tbody>
            </table>
            <h4 id="propiedad_accessor">Propiedad <code>Accessor</code></h4>
            <p>Asocia una clave con una de las dos funciones de acceso (<code>get</code> y <code>set</code>) para recuperar o almacenar un valor y tiene los siguientes atributos:</p>
            <table>
                <caption>Atributos de una propiedad <code>accessor</code></caption>
                <thead>
                    <tr>
                    <th scope="col">Atributo</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Valor predeterminado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>[[Get]]</td>
                    <td>Objeto <code>Function</code> o <code>undefined</code></td>
                    <td>La función se llama con una lista de argumentos vacía y recupera el valor de la propiedad cada vez que se realiza un acceso al valor.<br>
                        Consulta también <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get" title="Currently only available in English (US)">get (en-US)</a>.</td>
                    <td><code>undefined</code></td>
                    </tr>
                    <tr>
                    <td>[[Set]]</td>
                    <td>Objeto <code>Function</code> o <code>undefined</code></td>
                    <td>La función se llama con un argumento que contiene el valor asignado y se ejecuta siempre que se intenta cambiar una propiedad específica.<br>
                        Consulta también <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set" title="Currently only available in English (US)">set (en-US)</a>.</td>
                    <td><code>undefined</code></td>
                    </tr>
                    <tr>
                    <td>[[Enumerable]]</td>
                    <td><code>Boolean</code></td>
                    <td>Si es <code>true</code>, la propiedad se enumerará en bucles <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a>.</td>
                    <td><code>false</code></td>
                    </tr>
                    <tr>
                    <td>[[Configurable]]</td>
                    <td><code>Boolean</code></td>
                    <td>Si es <code>false</code>, la propiedad no se puede eliminar y no se puede cambiar a una propiedad de datos.</td>
                    <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="objetos_y_funciones_normales">
            <a href="#objetos_y_funciones_normales" title="Permalink to Objetos y funciones &quot;normales&quot;">Objetos y funciones "normales"</a>
        </h3>
        <div>
            <p>Un objeto JavaScript es una asociación entre <em>claves</em> y <em>valores</em>. Las claves son cadenas (o <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>s), y los <em>valores</em> pueden ser cualquier cosa. Esto hace que los objetos se ajusten naturalmente a <a href="http://en.wikipedia.org/wiki/Hash_table" rel="noopener"><code>hashmaps</code></a>.</p>
            <p>Las funciones son objetos regulares con la capacidad adicional de ser <em>invocables</em>.</p></div><h3 id="fechas"><a href="#fechas" title="Permalink to Fechas">Fechas</a></h3><div><p>Al representar fechas, la mejor opción es utilizar la utilidad <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code> incorporada</a> en JavaScript.</p>
        </div>
        <h3 id="colecciones_indexadas_arreglos_y_arreglos_tipados">
            <a href="#colecciones_indexadas_arreglos_y_arreglos_tipados" title="Permalink to Colecciones indexadas: arreglos y arreglos tipados">Colecciones indexadas: arreglos y arreglos tipados</a>
        </h3>
        <div>
            <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="Currently only available in English (US)">Los arreglos (en-US)</a> son objetos regulares para los que existe una relación particular entre las propiedades de clave entera y la Propiedad <code>length</code>.</p>
            <p>Además, los arreglos heredan de <code>Array.prototype</code>, que les proporciona un puñado de convenientes métodos para manipular arreglos. Por ejemplo, <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="es/JavaScript/Reference/Global_Objects/Array/indexOf"><code>indexOf</code></a> (buscando un valor en el arreglo) o <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push" title="es/JavaScript/Reference/Global_Objects/Array/push"><code>push</code></a> (agrega un elemento al arreglo), y así sucesivamente. Esto hace que el <code>Array</code> sea un candidato perfecto para representar listas o conjuntos.</p>
            <p>Los <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Typed_arrays">Arreglos tipados</a> son nuevos en JavaScript con ECMAScript 2015 y presentan una vista similar a un arreglo de un búfer de datos binarios subyacente. La siguiente tabla ayuda a determinar los tipos de datos equivalentes en C:</p>
            <table>
                <thead>
                    <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Intervalo de valores</th>
                    <th scope="col">Tamaño en bytes</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Tipo de IDL web</th>
                    <th scope="col">Tipo C equivalente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Int8Array</code></a></td>
                        <td><code>-128</code> a <code>127</code></td>
                        <td>1</td>
                        <td>Dos enteros complementarios de 8 bits con signo</td>
                        <td><code>byte</code></td>
                        <td><code>int8_t</code></td>
                    </tr>
                    <tr>
                        <td><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a></td>
                        <td><code>0</code> a <code>255</code></td>
                        <td>1</td>
                        <td>Entero de 8-bit sin signo</td>
                        <td><code>octet</code></td>
                        <td><code>uint8_t</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Uint8ClampedArray</code></a></td>
                        <td><code>0</code> a <code>255</code></td>
                        <td>1</td>
                        <td>Entero de 8 bits sin signo (sujeto)</td>
                        <td><code>octet</code></td>
                        <td><code>uint8_t</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Int16Array</code></a></td>
                        <td><code>-32768</code> a <code>32767</code></td>
                        <td>2</td>
                        <td>Dos enteros complementarios de 16 bits con signo</td>
                        <td><code>short</code></td>
                        <td><code>int16_t</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Uint16Array</code></a></td>
                        <td><code>0</code> a <code>65535</code></td>
                        <td>2</td>
                        <td>Entero de 16 bits sin signo</td>
                        <td><code>Short sin signo</code></td>
                        <td><code>uint16_t</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Int32Array</code></a></td>
                        <td><code>-2147483648</code> a <code>2147483647</code></td>
                        <td>4</td>
                        <td>dos enteros complementarios de 32 bits con signo</td>
                        <td><code>long</code></td>
                        <td><code>int32_t</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Uint32Array</code></a></td>
                        <td><code>0</code> a <code>4294967295</code></td>
                        <td>4</td>
                        <td>Enteros de 32 bits sin signo</td>
                        <td><code>long sin signo</code></td>
                        <td><code>uint32_t</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Float32Array</code></a></td>
                        <td><code>1.2</code><span>×</span><code>10<sup>-38</sup></code> a <code>3.4</code><span>×</span><code>10<sup>38</sup></code></td>
                        <td>4</td>
                        <td>Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., <code>1.1234567</code>)</td>
                        <td><code>float sin restricciones</code></td>
                        <td><code>float</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Float64Array</code></a></td>
                        <td><code>5.0</code><span>×</span><code>10<sup>-324</sup></code> a <code>1.8</code><span>×</span><code>10<sup>308</sup></code></td>
                        <td>8</td>
                        <td>Número de coma flotante IEEE de 64 bits (16 dígitos significativos, p. ej., <code>1.123...15</code>)</td>
                        <td><code>doble sin restricciones</code></td>
                        <td><code>double</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>BigInt64Array</code></a></td>
                        <td><code>-2<sup>63</sup></code> a <code>2<sup>63</sup>-1</code></td>
                        <td>8</td>
                        <td>Dos enteros complementarios de 64 bits con signo</td>
                        <td><code>bigint</code></td>
                        <td><code>int64_t (long long con signo)</code></td>
                    </tr>
                    <tr>
                        <td><a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>BigUint64Array</code></a></td>
                        <td><code>0</code> a <code>2<sup>64</sup>-1</code></td>
                        <td>8</td>
                        <td>Entero de 64 bits sin signo</td>
                        <td><code>bigint</code></td>
                        <td><code>uint64_t (long long sin signo)</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3 id="colecciones_con_clave_mapas_conjuntos_weakmaps_weaksets">
            <a href="#colecciones_con_clave_mapas_conjuntos_weakmaps_weaksets" title="Permalink to Colecciones con clave: mapas, conjuntos, WeakMaps, WeakSets">Colecciones con clave: mapas, conjuntos, <code>WeakMaps</code>, <code>WeakSets</code></a>
        </h3>
        <div>
            <p>Estas estructuras de datos, introducidas en ECMAScript Edition 6, toman referencias a objetos como claves. <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a> y <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet</code></a> representan un conjunto de objetos, mientras que <a title="La documentación acerca de este tema no ha sido escrita todavía . ¡Por favor considera contribuir !"><code>Map</code></a> y <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"><code>WeakMap</code></a> se asocian un valor a un objeto.</p>
            <p>La diferencia entre <code>Map</code>s y <code>WeakMap</code>s es que en el primero, las claves de objeto se pueden enumerar. Esto permite la optimización de la recolección de basura en el último caso.</p>
            <p>Se podrían implementar <code>Map</code>s y <code>Set</code>s en ECMAScript 5 puro. Sin embargo, dado que los objetos no se pueden comparar (en el sentido de <code>&lt;</code> "menor que", por ejemplo), el rendimiento de búsqueda sería necesariamente lineal. Las implementaciones nativas de ellos (incluidos los <code>WeakMap</code>s) pueden tener un rendimiento de búsqueda que es aproximadamente logarítmico al tiempo constante.</p>
            <p>Por lo general, para vincular datos a un nodo DOM, se pueden establecer propiedades directamente en el objeto o usar atributos <code>data-*</code>. Esto tiene la desventaja de que los datos están disponibles para cualquier script que se ejecute en el mismo contexto. Los <code>Map</code>s y <code>WeakMap</code>s facilitan la vinculación <em>privada</em> de datos a un objeto.</p>
        </div>
        <h3 id="datos_estructurados_json">
            <a href="#datos_estructurados_json" title="Permalink to Datos estructurados: JSON">Datos estructurados: JSON</a>
        </h3>
        <div>
            <p>JSON (<strong>J</strong>ava <strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation) es un formato ligero de intercambio de datos, derivado de JavaScript, pero utilizado por muchos lenguajes de programación. JSON crea estructuras de datos universales.</p>
            <p>Consulta <a href="https://developer.mozilla.org/en/docs/Glossary/JSON">JSON</a> y <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON"><code>JSON</code></a> para obtener más detalles.</p>
        </div>
        <h3 id="más_objetos_en_la_biblioteca_estándar">
            <a href="#más_objetos_en_la_biblioteca_estándar" title="Permalink to Más objetos en la biblioteca estándar">Más objetos en la biblioteca estándar</a>
        </h3>
        <div>
            <p>JavaScript tiene una biblioteca estándar de objetos integrados.</p>
            <p>Échale un vistazo a la <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects">referencia</a> para conocer más objetos.</p>
        </div>
        <h2 id="determinación_de_tipos_usando_el_operador_typeof">
            <a href="#determinación_de_tipos_usando_el_operador_typeof" title="Permalink to Determinación de tipos usando el operador typeof">Determinación de tipos usando el operador <code>typeof</code></a>
        </h2>
        <div>
            <p>El operador <code>typeof</code> te puede ayudar a encontrar el tipo de tu variable.</p>
            <p>Lee la <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/typeof">página de referencia</a> para obtener más detalles y casos extremos.</p>
        </div>
        <h2 id="especificaciones">
            <a href="#especificaciones" title="Permalink to Especificaciones">Especificaciones</a>
        </h2>
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Especificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values" hreflang="en" lang="en" rel="noopener">ECMAScript (ECMA-262)<br><small lang="es">La definición de 'Tipos Data y Values ECMAScript' en esta especificación.</small></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 id="ve_también">
            <a href="#ve_también" title="Permalink to Ve también">Ve también</a>
        </h2>
        <div>
            <ul>
                <li><a  href="https://github.com/nzakas/computer-science-in-javascript/" rel="noopener">Colección de estructura de datos común y algoritmos comunes en JavaScript de Nicholas Zakas.</a></li>
                <li><a href="https://github.com/monmohan/DataStructures_In_Javascript" rel="noopener">Estructuras de datos implementadas en JavaScript</a></li>
            </ul>
        </div>
    </article>
</div>

### Callbacks
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Glossary/Callback_function).

<div align="justify">
    <article lang="es">
        <h1>Función Callback</h1>
        <div>
            <p>Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.</p>
            <p>Ejemplo:</p>
            <div>
            <pre><code><span>function</span> <span>saludar</span><span>(</span><span>nombre</span><span>)</span> <span>{</span>
  <span>alert</span><span>(</span><span>'Hola '</span> <span>+</span> nombre<span>)</span><span>;</span>
<span>}</span>
<span></span>
<span>function</span> <span>procesarEntradaUsuario</span><span>(</span><span>callback</span><span>)</span> <span>{</span>
  <span>var</span> nombre <span>=</span> <span>prompt</span><span>(</span><span>'Por favor ingresa tu nombre.'</span><span>)</span><span>;</span>
  <span>callback</span><span>(</span>nombre<span>)</span><span>;</span>
<span>}</span>
<span></span>
<span>procesarEntradaUsuario</span><span>(</span>saludar<span>)</span><span>;</span></code></pre>
            </div>
            <p>El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.</p>
            <p>Sin embargo,&nbsp;tenga en&nbsp;cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se&nbsp;haya completado&nbsp;una&nbsp;operación a sincrónica&nbsp; — estas se denominan devoluciones de llamada asincrónicas.&nbsp;Por ejemplo, nuestro sencillo ejemplo de <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html" rel="noopener">maps-example.html</a>&nbsp;(<a href="https://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html" rel="noopener">ver en vivo</a>)&nbsp;utiliza la API de Google Maps y la API de geolocalización para mostrar un mapa de la ubicación actual de su dispositivo.</p>
            <p>Como obtener las coordenadas del dispositivo de su GPS es asíncrono (no sabemos exactamente cuándo se devolverán los datos), el método&nbsp;<a href="https://developer.mozilla.org/en/docs/Web/API/Geolocation/getCurrentPosition"><code>Geolocation.getCurrentPosition()</code></a> toma una función de devolución de llamada anónima como parámetro, que a su vez toma los datos de coordenadas devueltos como un parámetro.&nbsp;Esta función solo se ejecuta cuando se devuelven los datos de coordenadas.
            </p>
        </div>
        <h2 id="aprende_más">
            <a href="#aprende_más" title="Permalink to Aprende más"><strong>Aprende más</strong></a>
        </h2>
        <div></div>
        <h3 id="conocimientos_generales">
            <a href="#conocimientos_generales" title="Permalink to Conocimientos generales"><strong>Conocimientos generales</strong></a>
        </h3>
        <div>
            <ul>
                <li><a href="https://es.wikipedia.org/wiki/Callback_(inform%C3%A1tica)" rel="noopener">Callback</a>&nbsp;en Wikipedia</li>
            </ul>
        </div>
    </article>
</div>

### Promesas
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise).

<div align="justify">
    <article lang="es">
        <h1>Promise</h1>
        <div>
            <div id="sect1"></div>
            <p>El objeto <strong><code>Promise</code></strong> (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.</p>
        </div>
        <h2 id="sintaxis">
            <a href="#sintaxis" title="Permalink to Sintaxis">Sintaxis</a>
        </h2>
        <div>
            <pre>new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );</pre>
        </div>
        <h3 id="parámetros">
            <a href="#parámetros" title="Permalink to Parámetros">Parámetros</a>
        </h3>
        <div>
            <dl>
                <dt id="ejecutor">ejecutor</dt>
                <dd>Una función con los argumentos <code>resolver</code> y <code>rechazar</code>. La función <code>ejecutor</code> es ejecutada inmediatamente por la implementación de la Promesa, pasándole las funciones <code>resolver</code> y <code>rechazar</code> (el ejecutor es llamado incluso antes de que el constructor de la <code>Promesa</code> devuelva el objeto creado). Las funciones <code>resolver</code> y <code>rechazar</code>, al ser llamadas, resuelven o rechazan la promesa, respectivamente. Normalmente el ejecutor inicia un trabajo asíncrono, y luego, una vez que es completado, llama a la función <code>resolver</code> para resolver la promesa o la rechaza si ha ocurrido un error.<br>
                Si un error es lanzado en la función ejecutor, la promesa es rechazada y el valor de retorno del ejecutor es rechazado.</dd>
            </dl>
        </div>
        <h2 id="descripción">
            <a href="#descripción" title="Permalink to Descripción">Descripción</a>
        </h2>
        <div>
            <p>Una <strong>Promesa</strong> es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una <em>promesa</em> de suministrar el valor en algún momento en el futuro.</p>
            <p>Una <code>Promesa</code> se encuentra en uno de los siguientes estados:</p>
            <ul>
                <li><em>pendiente (pending)</em>: estado inicial, no cumplida o rechazada.</li>
                <li><em>cumplida (fulfilled)</em>: significa que la operación se completó satisfactoriamente.</li>
                <li><em>rechazada (rejected)</em>: significa que la operación falló.</li>
            </ul>
            <p>Una promesa pendiente puede ser <em>cumplida</em> con un valor, o <em>rechazada</em> con una razón (error). Cuando cualquiera de estas dos opciones sucede, los métodos asociados, encolados por el método <em>then</em> de la promesa, son llamados. (Si la promesa ya ha sido cumplida o rechazada en el momento que es anexado su correspondiente manejador, el manejador será llamado, de tal manera que no exista una condición de carrera entre la operación asíncrona siendo completada y los manejadores siendo anexados)</p>
            <p>Como los métodos <code><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"><code>Promise.prototype.then()</code></a></code> y <code><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"><code>Promise.prototype.catch()</code></a></code> retornan promesas, éstas pueden ser encadenadas.</p>
            <p><img alt="" src="https://mdn.mozillademos.org/files/8633/promises.png" loading="lazy"></p>
            <div id="sect2">
            <p><strong>No confundir con:</strong> Varios lenguajes tienen mecanismos para evaluar perezosamente y postergar una computación, a los que también les llaman "promesas" - p.ej.: Scheme. Las promesas en JavaScript representan procesos que ya están sucediendo, y pueden ser encadenados con funciones callback. Si lo que se busca es evaluar perezosamente una expresión, se debe considerar la función <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">flecha </a> (arrow function) sin argumentos: <code>f = () =&gt;&nbsp;<em>expresión</em></code> para crear la expresión evaluada perezosamente, y <code>f()</code> para evaluar.</p>
        </div>
        <div id="settlednote">
            <p><strong>Nota</strong>: Una promesa se dice que está <em>determinada (settled)</em> si se ha cumplido o si se ha rechazado, pero no está pendiente. Con promesas también se usa el término <em>resuelta</em> — esto significa que la promesa está determinada, o que se encuentra bloqueada dentro de una cadena de promesas. <a href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md" rel="noopener">States and fates</a> de Domenic Denicola contiene mas detalles sobre la terminología de las promesas.</p>
        </div>
    </div>
    <h2 id="propiedades">
        <a href="#propiedades" title="Permalink to Propiedades">Propiedades</a>
    </h2>
    <div>
        <dl>
            <dt id="promise.length"><code>Promise.length</code></dt>
            <dd>Propiedad longitud cuyo valor es siempre 1 (numero de argumentos del constructor).</dd>
            <dt id="promise.prototype_en-us"><a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise.prototype</code> <small>(en-US)</small></a></dt>
            <dd>Representa el prototipo del constructor&nbsp;<code>Promise</code>.</dd>
        </dl>
    </div>
    <h2 id="métodos">
        <a href="#métodos" title="Permalink to Métodos">Métodos</a>
    </h2>
    <div>
        <dl>
            <dt id="promise.alliterable"><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"><code>Promise.all(iterable)</code></a></dt>
            <dd>Devuelve una de dos promesas: una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas, o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada. Si la promesa retornada es cumplida, lo hace&nbsp;con un&nbsp;arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable. Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas</dd>
            <dt id="promise.raceiterable"><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"><code>Promise.race(iterable)</code></a></dt>
            <dd>Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.</dd>
        </dl>
        <dl>
            <dt id="promise.rejectreason"><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject"><code>Promise.reject(reason)</code></a></dt>
            <dd>Devuelve un objeto&nbsp;<code>Promise</code>&nbsp;que es rechazado con la razón dada.</dd>
        </dl>
        <dl>
            <dt id="promise.resolvevalue"><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"><code>Promise.resolve(value)</code></a></dt>
            <dd>Devuelve un objeto&nbsp;<code>Promise</code>&nbsp;que es resuelto con el valor dado. Si el valor es un&nbsp;<em>thenable</em> (p.ej. tiene un método&nbsp;<code>then</code>), la promesa devuelta "seguirá"&nbsp;este&nbsp;thenable, adoptando su eventual estado; de lo contrario la promesa devuelta será cumplida con el valor. Generalmente, si se quiere saber si un valor es una promesa o no, se podría usar - <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"><code>Promise.resolve(value)</code></a> y trabajar con el valor devuelto como una promesa.</dd>
        </dl>
        </div>
            <h2 id="prototipo_promise">
                <a href="#prototipo_promise" title="Permalink to Prototipo&nbsp;Promise">Prototipo&nbsp;<code>Promise</code></a>
            </h2>
            <div></div>
            <h3 id="propiedades_2">
                <a href="#propiedades_2" title="Permalink to Propiedades">Propiedades</a>
            </h3>
            <div>
                <p>{{page('en-US/Web/JavaScript/Reference/Global_Objects/Promise/prototype','Properties')}}</p>
            </div>
            <h3 id="métodos_2">
                <a href="#métodos_2" title="Permalink to Métodos">Métodos</a>
            </h3>
            <div>
                <p>{{page('en-US/Web/JavaScript/Reference/Global_Objects/Promise/prototype','Methods')}}</p>
            </div>
            <h2 id="ejemplos">
                <a href="#ejemplos" title="Permalink to Ejemplos">Ejemplos</a>
            </h2>
            <div></div>
            <h3 id="súper_simple_¡10_líneas!">
                <a href="#súper_simple_¡10_líneas!" title="Permalink to Súper simple (¡10 líneas!)">Súper simple (¡10 líneas!)</a>
            </h3>
            <div>
                <div>
                <pre><code><span>let</span> miPrimeraPromise <span>=</span> <span>new</span> <span>Promise</span><span>(</span><span>(</span><span>resolve<span>,</span> reject</span><span>)</span> <span>=&gt;</span> <span>{</span>
  <span>// Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.</span>
  <span>// En este ejemplo, usamos setTimeout(...) para simular código asíncrono.</span>
  <span>// En la vida real, probablemente uses algo como XHR o una API HTML5.</span>
  <span>setTimeout</span><span>(</span><span>function</span><span>(</span><span>)</span><span>{</span>
    <span>resolve</span><span>(</span><span>"¡Éxito!"</span><span>)</span><span>;</span> <span>// ¡Todo salió bien!</span>
  <span>}</span><span>,</span> <span>250</span><span>)</span><span>;</span>
<span>}</span><span>)</span><span>;</span>

miPrimeraPromise<span>.</span><span>then</span><span>(</span><span>(</span><span>successMessage</span><span>)</span> <span>=&gt;</span> <span>{</span>
  <span>// succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.</span>
  <span>// No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.</span>
  console<span>.</span><span>log</span><span>(</span><span>"¡Sí! "</span> <span>+</span> successMessage<span>)</span><span>;</span>
<span>}</span><span>)</span><span>;</span></code></pre>
                </div>
            </div>
            <h3 id="creando_una_promise">
                <a href="#creando_una_promise" title="Permalink to Creando una Promise">Creando una Promise</a>
            </h3>
            <div>
                <p>Este pequeño ejemplo muestra el mecanismo de una <code>Promise</code>. El método <code>testPromise()</code>&nbsp;se llama cada vez que se pulsa el <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/button"><code>&lt;button&gt;</code></a>. Esto crea una promesa que se cumplirá, aplicando <a title="Currently only available in English (US)" href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"><code>window.setTimeout()</code> <small>(en-US)</small></a>, al contador de la promesa (partiendo desde 1) aleatoriamente cada 1-3 segundos. El constructor de la Promise() es usado para crear dicha promesa.</p>
                <p>El cumplimiento de la promesa simplemente se registra, a través de una llamada de retorno al cumplirse&nbsp;utilizando <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"><code>p1.then()</code></a>. A los pocos registros muestra cómo la parte síncrona del método se desacopla de la finalización asíncrona de la promesa.</p>
                <div>
                <pre><code><span>'use strict'</span><span>;</span>
<span>var</span> promiseCount <span>=</span> <span>0</span><span>;</span>
<span></span>
<span>function</span> <span>testPromise</span><span>(</span><span>)</span> <span>{</span>
  <span>var</span> thisPromiseCount <span>=</span> <span>++</span>promiseCount<span>;</span>
<span></span>
  <span>var</span> log <span>=</span> document<span>.</span><span>getElementById</span><span>(</span><span>'log'</span><span>)</span><span>;</span>
  log<span>.</span><span>insertAdjacentHTML</span><span>(</span><span>'beforeend'</span><span>,</span> thisPromiseCount <span>+</span>
    <span>') Comenzó (&lt;small&gt;Comenzó el código sincrónico&lt;/small&gt;)&lt;br/&gt;'</span><span>)</span><span>;</span>
<span></span>
  <span>// Hacemos una promesa: prometemos un contador numérico de esta promesa,</span>
  <span>// empezando por 1 (después de esperar 3s)</span>
  <span>var</span> p1 <span>=</span> <span>new</span> <span>Promise</span><span>(</span>
    <span>// La función resolvedora es llamada con la</span>
    <span>// habilidad de resolver o rechazar la promesa</span>
    <span>function</span><span>(</span><span>resolve<span>,</span> reject</span><span>)</span> <span>{</span>
      log<span>.</span><span>insertAdjacentHTML</span><span>(</span><span>'beforeend'</span><span>,</span> thisPromiseCount <span>+</span>
        <span>') Comenzó la promesa (&lt;small&gt;Código asíncrono comenzó&lt;/small&gt;)&lt;br/&gt;'</span><span>)</span><span>;</span>
<span></span>
      <span>// Esto es solo un ejemplo para crear asincronismo</span>
      window<span>.</span><span>setTimeout</span><span>(</span>
        <span>function</span><span>(</span><span>)</span> <span>{</span>
          <span>// ¡Cumplimos la promesa!</span>
          <span>resolve</span><span>(</span>thisPromiseCount<span>)</span><span>;</span>
        <span>}</span><span>,</span> Math<span>.</span><span>random</span><span>(</span><span>)</span> <span>*</span> <span>2000</span> <span>+</span> <span">1000</span><span>)</span><span>;</span>
    <span>}</span>
  <span>)</span><span>;</span>
<span></span>
  <span>// Definimos qué hacer cuando la promesa es resuelta/cumplida con la llamada</span>
  <span>// al método then(). La llamada al método catch() define qué hacer si</span>
  <span>// la promesa es rechazada</span>
  p1<span>.</span><span>then</span><span>(</span>
    <span>// Registrar el valor de la promesa cumplida</span>
    <span>function</span><span>(</span><span>val</span><span>)</span> <span>{</span>
      log<span>.</span><span>insertAdjacentHTML</span><span>(</span><span>'beforeend'</span><span>,</span> val <span>+</span>
        <span>') Promesa cumplida (&lt;small&gt;Código asíncrono terminado.&lt;/small&gt;)&lt;br/&gt;'</span><span>)</span><span>;</span>
    <span>}</span><span>)</span>
  <span>.</span><span>catch</span><span>(</span>
    <span>// Registrar la razón del rechazo</span>
    <span>function</span><span>(</span><span>reason</span><span>)</span> <span>{</span>
      console<span>.</span><span>log</span><span>(</span><span>'Manejar promesa rechazada ('</span><span>+</span>reason<span>+</span><span>') aquí.'</span><span>)</span><span>;</span>
    <span>}</span><span>)</span><span>;</span>

  log<span>.</span><span>insertAdjacentHTML</span><span>(</span><span>'beforeend'</span><span>,</span> thisPromiseCount <span>+</span>
    <span>') Promesa hecha (&lt;small&gt;Código síncrono terminado. &lt;/small&gt;)&lt;br/&gt;'</span><span>)</span><span>;</span>
<span>}</span>
</code></pre>
                </div>
                <div>
                <pre><code><span>if</span> <span>(</span><span>"Promise"</span> <span>in</span> window<span>)</span> <span>{</span>
  <span>var</span> btn <span>=</span> document<span>.</span><span>getElementById</span><span>(</span><span>"btn"</span><span>)</span><span>;</span>
  btn<span>.</span><span>addEventListener</span><span>(</span><span>"click"</span><span>,</span>testPromise<span>)</span><span>;</span>
<span>}</span> <span>else</span> <span>{</span>
  log <span>=</span> document<span>.</span><span>getElementById</span><span>(</span><span>'log'</span><span>)</span><span>;</span>
  log<span>.</span>innerHTML <span>=</span> <span>"El ejemplo en vivo no está disponible ya que tu navegador no soporta la interfaz &lt;code&gt;Promise&lt;code&gt;."</span><span>;</span>
<span>}</span>
</code></pre>
                </div>
                <p>Este ejemplo es ejecutado cuando pulsas el botón. Necesitas un navegador que soporte <code>Promise</code>. Al pulsar el botón varias veces en un período corto de tiempo, verás las diferentes promesas siendo cumplidas una tras otra.</p>  
                <p></p>
            </div>
            <h2 id="cargando_una_imagen_con_xhr">
                <a href="#cargando_una_imagen_con_xhr" title="Permalink to Cargando una imagen con&nbsp;XHR">Cargando una imagen con&nbsp;XHR</a>
            </h2>
            <div>
                <p>Otro ejemplo sencillo utilizando <code>Promise</code> y <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> para cargar una imagen está disponible en el repositorio <a href="https://github.com/mdn/js-examples/tree/master/promises-test"  rel="noopener">js-examples</a> de MDN en GitHub. También puedes <a href="https://mdn.github.io/js-examples/promises-test/"  rel="noopener">verlo en acción</a>. Cada paso está comentado y te permite seguir de cerca la arquitectura detrás de las Promesas y XHR.</p>
            </div>
            <h2 id="especificaciones">
                <a href="#especificaciones" title="Permalink to Especificaciones">Especificaciones</a>
            </h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th scope="col">Specification</th>
                            <th scope="col">Status</th>
                            <th scope="col">Comment</th>
                        </tr>
                    <tr>
                        <td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects" hreflang="en" lang="en"  rel="noopener">ECMAScript 2015 (6th Edition, ECMA-262)<br><small lang="es">La definición de 'Promise' en esta especificación.</small></a></td>
                        <td><span>Standard</span></td>
                        <td>Initial definition in an ECMA standard.</td>
                    </tr>
                    <tr>
                        <td><a href="https://tc39.es/ecma262/#sec-promise-objects" hreflang="en" lang="en" rel="noopener">ECMAScript (ECMA-262)<br><small lang="es">La definición de 'Promise' en esta especificación.</small></a></td>
                        <td><span>Living Standard</span></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 id="compatibilidad_de_navegadores">
            <a href="#compatibilidad_de_navegadores" title="Permalink to Compatibilidad de navegadores">Compatibilidad de navegadores</a>
        </h2>
        <div>
            <p>No compatibility data found for <code>javascript/promise</code>.<br><a href="#on-github">Check for problems with this page</a> or contribute missing data to <a href="https://github.com/mdn/browser-compat-data">mdn/browser-compat-data</a>.</p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
        <h2 id="ver_también">
            <a href="#ver_también" title="Permalink to Ver también">Ver también</a>
        </h2>
        <div>
            <ul>
                <li><a href="https://promisesaplus.com/"  rel="noopener">Promises/A+ specification</a></li>
                <li><a href="https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53"  rel="noopener">Venkatraman.R - JS Promise (Part 1,&nbsp;Basics)</a></li>
                <li><a href="https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski"  rel="noopener">Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and&nbsp;RSVP.js)</a></li>
                <li><a href="https://www.html5rocks.com/en/tutorials/es6/promises/"  rel="noopener">Jake Archibald: JavaScript Promises: There and Back Again</a></li>
                <li><a href="https://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript"  rel="noopener">Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript</a></li>
                <li><a href="https://www.mattgreer.org/articles/promises-in-wicked-detail/"  rel="noopener">Matt Greer: JavaScript Promises ... In Wicked Detail</a></li>
                <li><a href="https://www.promisejs.org/"  rel="noopener">Forbes Lindesay: promisejs.org</a></li>
                <li><a href="https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html"  rel="noopener">Nolan Lawson: We have a problem with promises — Common mistakes with promises</a></li>
                <li><a href="https://github.com/jakearchibald/es6-promise/"  rel="noopener">Promise polyfill</a></li>
                <li><a href="https://www.udacity.com/course/javascript-promises--ud898"  rel="noopener">Udacity: JavaScript Promises</a></li>
            </ul>
        </div>
    </article>
</div>

### Async / await
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function).
<div align="justify">
    <article lang="es"><h1>Función async</h1>
        <div>
            <div id="sect1">
                <div id="sect2"></div>
                <p>La declaración de función&nbsp;<code><strong>async</strong></code>&nbsp;define&nbsp;una&nbsp;<em>función asíncrona</em>, la cual devuelve un objeto <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a>.</p>
                <div id="sect3">
                    <p>Es posible definir también funciones asíncronas a través de una&nbsp;<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/async_function">expresión de función async</a>.</p>
                </div>
            </div>
            <div id="sect4"></div>
            <p>The source for this interactive demo is stored in a GitHub repository. If you'd like to contribute to the interactive demo project, please clone <a href="https://github.com/mdn/interactive-examples" rel="noopener">https://github.com/mdn/interactive-examples</a> and send us a pull request.</p>
        </div>
        <h2 id="sintaxis">
            <a href="#sintaxis" title="Permalink to Sintaxis">Sintaxis</a>
        </h2>
        <div>
        <pre>async function <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>
        </div>
        <h3 id="parámetros">
            <a href="#parámetros" title="Permalink to Parámetros">Parámetros</a>
        </h3>
        <div>
            <dl>
                <dt id="name"><code>name</code></dt>
                <dd>El nombre de la función.</dd>
            </dl>
            <dl>
                <dt id="param"><code>param</code></dt>
                <dd>El nombre de un argumento que se debe pasar a la función.</dd>
            </dl>
            <dl>
                <dt id="statements"><code>statements</code></dt>
                <dd>Las declaraciones que conforman el cuerpo de la función.</dd>
            </dl>
        </div>
        <h3 id="valor_de_retorno">
            <a href="#valor_de_retorno" title="Permalink to Valor de retorno">Valor de retorno</a>
        </h3>
        <div>
            <p>Un objeto <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a>, que representa una función asíncrona que ejecuta el código contenido dentro de la función.</p>
        </div>
        <h2 id="descripción">
            <a href="#descripción" title="Permalink to Descripción">Descripción</a>
        </h2>
        <div>
            <p>Cuando se llama a una función&nbsp;<code>async</code>, esta devuelve un elemento&nbsp;<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a>. Cuando la función&nbsp;<code>async</code> devuelve un valor,&nbsp;<code>Promise</code> se resolverá con el valor devuelto.&nbsp;Si la función&nbsp;<code>async</code> genera una excepción o algún valor, <code>Promise</code> se rechazará con el valor generado.</p>
            <p>Una función&nbsp;<code>async</code>&nbsp;puede contener una expresión <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a>, la cual pausa la ejecución de la función asíncrona y espera la resolución de la&nbsp;<code>Promise</code>&nbsp;pasada y, a continuación, reanuda la ejecución de la función&nbsp;<code>async</code> y devuelve el valor resuelto.</p>
            <div id="sect5">
                <p>La finalidad de las funciones&nbsp;<code>async</code>/<code>await</code> es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de&nbsp;<code>Promises</code>. Del mismo modo que las&nbsp;<code>Promises</code>&nbsp;son semejantes a las devoluciones de llamadas estructuradas, <code>async</code>/<code>await</code>&nbsp;se asemejan a una combinación de generadores y promesas.</p>
            </div>
        </div>
        <h2 id="ejemplos">
            <a href="#ejemplos" title="Permalink to Ejemplos">Ejemplos</a>
        </h2>
        <div></div>
        <h3 id="ejemplo_sencillo">
            <a href="#ejemplo_sencillo" title="Permalink to Ejemplo sencillo">Ejemplo sencillo</a>
        </h3>
        <div>
            <div>
            <pre><code><span>function</span> <span>resolveAfter2Seconds</span><span>(</span><span>x</span><span>)</span> <span>{</span>
  <span>return</span> <span>new</span> <span>Promise</span><span>(</span><span>resolve</span> <span>=&gt;</span> <span>{</span>
    <span>setTimeout</span><span>(</span><span>(</span><span>)</span> <span>=&gt;</span> <span>{</span>
      <span>resolve</span><span>(</span>x<span>)</span><span>;</span>
    <span>}</span><span>,</span> <span>2000</span><span>)</span><span>;</span>
  <span>}</span><span>)</span><span>;</span>
<span>}</span>
<span></span>
<span>async</span> <span>function</span> <span>add1</span><span>(</span><span>x</span><span>)</span> <span>{</span>
  <span>const</span> a <span>=</span> <span>await</span> <span>resolveAfter2Seconds</span><span>(</span><span>20</span><span>)</span><span>;</span>
  <span>const</span> b <span>=</span> <span>await</span> <span>resolveAfter2Seconds</span><span>(</span><span>30</span><span>)</span><span>;</span>
  <span>return</span> x <span>+</span> a <span>+</span> b<span>;</span>
<span>}</span>
<span></span>
<span>add1</span><span>(</span><span>10</span><span>)</span><span>.</span><span>then</span><span>(</span><span>v</span> <span>=&gt;</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span>v<span>)</span><span>;</span>  <span>>// prints 60 after 4 seconds.</span>
<span>}</span><span>)</span><span>;</span>
<span></span>
<span>async</span> <span>function</span> <span>add2</span><span>(</span><span>x</span><span>)</span> <span>{</span>
  <span>const</span> p_a <span>=</span> <span>resolveAfter2Seconds</span><span>(</span><span>20</span><span>)</span><span>;</span>
  <span>const</span> p_b <span>=</span> <span>resolveAfter2Seconds</span><span>(</span><span>30</span><span>)</span><span>;</span>
  <span>return</span> x <span>+</span> <span>await</span> p_a <span>+</span> <span>await</span> p_b<span>;</span>
<span>}</span>
<span></span>
<span>add2</span><span>(</span><span>10</span><span>)</span><span>.</span><span>then</span><span>(</span><span>v</span> <span>=&gt;</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span>v<span>)</span><span>;</span>  <span>>// prints 60 after 2 seconds.</span>
<span>}</span><span>)</span><span>;</span>
</code></pre>
            </div>
            <div id="sect6">
                <p><strong>No se deben confundir&nbsp;await y Promise.all:</strong> En <code>add1</code>, la ejecución se suspende durante dos segundos correspondientes al primer operador&nbsp;<code>await</code>, y luego durante otros dos segundos correspondientes al segundo&nbsp;<code>await</code>. El segundo temporizador no se crea hasta que el primero no se haya disparado ya. En <code>add2</code>, ambos temporizadores se crean y, acto seguido, ambos reciben&nbsp;<code>await</code>. Esto provoca la resolución en dos segundos y no cuatro, ya que los temporizadores se ejecutaron de manera simultánea. Sin embargo, ambas llamadas&nbsp;<code>await</code>&nbsp;aún pueden ejecutarse en series, no en paralelo: esto&nbsp;<strong>no</strong>&nbsp;constituye ninguna aplicación automática de&nbsp;<code>Promise.all</code>. Si se desea aplicar&nbsp;<code>await</code>&nbsp;a dos o más promesas en paralelo, es preciso utilizar&nbsp;<code>Promise.all</code>.</p>
            </div>
        </div>
        <h3 id="reescritura_de_una_cadena_de_promesas_con_una_función_async">
            <a href="#reescritura_de_una_cadena_de_promesas_con_una_función_async" title="Permalink to Reescritura de una cadena de promesas con una función&nbsp;async">Reescritura de una cadena de promesas con una función&nbsp;<code>async</code></a>
        </h3>
        <div>
            <p>Una API que devuelva una&nbsp;<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a> tendrá como resultado una cadena de promesas, y dividirá la función en muchas partes.&nbsp;Estudie este código:</p>
            <div>
            <pre><code><span>function</span> <span>getProcessedData</span><span>(</span><span>url</span><span>)</span> <span>{</span>
  <span>return</span> <span>downloadData</span><span>(</span>url<span>)</span> <span>>// returns a promise</span>
    <span>.</span><span>catch</span><span>(</span><span>e</span> <span>=&gt;</span> <span>{</span>
      <span>return</span> <span>downloadFallbackData</span><span>(</span>url<span>)</span>  <span>>// returns a promise</span>
    <span>}</span><span>)</span>
    <span>.</span><span>then</span><span>(</span><span>v</span> <span>=&gt;</span> <span>{</span>
      <span>return</span> <span>processDataInWorker</span><span>(</span>v<span>)</span><span>;</span> <span>>// returns a promise</span>
    <span>}</span><span>)</span><span>;</span>
<span>}</span>
</code></pre>
            </div>
            <p>Es posible reescribirlo utilizando un solo operador&nbsp;<code>async</code> de esta manera:</p>
            <div>
            <pre><code><span>async</span> <span>function</span> <span>getProcessedData</span><span>(</span><span>url</span><span>)</span> <span>{</span>
  <span>let</span> v<span>;</span>
  <span>try</span> <span>{</span>
    v <span>=</span> <span>await</span> <span>downloadData</span><span>(</span>url<span>)</span><span>;</span>
  <span>}</span> <span>catch</span><span>(</span>e<span>)</span> <span>{</span>
    v <span>=</span> <span>await</span> <span>downloadFallbackData</span><span>(</span>url<span>)</span><span>;</span>
  <span>}</span>
  <span>return</span> <span>processDataInWorker</span><span>(</span>v<span>)</span><span>;</span>
<span>}</span>
</code></pre>
            </div>
            <p>Observe que, en el ejemplo anterior, no hay ninguna instrucción&nbsp;<code>await</code> dentro de la instrucción&nbsp;<code>return</code>, porque el valor de retorno de una&nbsp;<code>async function</code>&nbsp;queda implícitamente dentro de un <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"><code>Promise.resolve</code></a>.</p>
        </div>
        <h2 id="especificaciones">
            <a href="#especificaciones" title="Permalink to Especificaciones">Especificaciones</a>
        </h2>
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Especificación</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="https://tc39.es/ecma262/#sec-async-function-definitions" hreflang="en" lang="en"  rel="noopener">ECMAScript (ECMA-262)<br><small lang="es">La definición de 'Función async' en esta especificación.</small></a></td>
                        <td><span>Living Standard</span></td>
                        <td>Definición inicial en ES2017.</td>
                        </tr>
                        <tr>
                        <td><a href="https://www.ecma-international.org/ecma-262/8.0/#sec-async-function-definitions" hreflang="en" lang="en"  rel="noopener">ECMAScript 2017 (ECMA-262)<br><small lang="es">La definición de 'Función async' en esta especificación.</small></a></td>
                        <td><span>Standard</span></td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 id="compatibilidad_entre_navegadores">
            <a href="#compatibilidad_entre_navegadores" title="Permalink to Compatibilidad entre navegadores">Compatibilidad entre navegadores</a>
        </h2>
        <a href="https://github.com/mdn/browser-compat-data/issues/new?body=%3C%21--+Tips%3A+where+applicable%2C+specify+browser+name%2C+browser+version%2C+and+mobile+operating+system+version+--%3E%0A%0A%23%23%23%23+What+information+was+incorrect%2C+unhelpful%2C+or+incomplete%3F%0A%0A%23%23%23%23+What+did+you+expect+to+see%3F%0A%0A%23%23%23%23+Did+you+test+this%3F+If+so%2C+how%3F%0A%0A%0A%3C%21--+Do+not+make+changes+below+this+line+--%3E%0A%3Cdetails%3E%0A%3Csummary%3EMDN+page+report+details%3C%2Fsummary%3E%0A%0A*+Query%3A+%60javascript.statements.async_function%60%0A*+MDN+URL%3A+https%3A%2F%2Fdeveloper.mozilla.org%2Fes%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fasync_function%0A*+Report+started%3A+2022-02-21T20%3A08%3A00.958Z%0A%0A%3C%2Fdetails%3E&amp;title=javascript.statements.async_function+-+%3CPUT+TITLE+HERE%3E" target="_blank" rel="noopener noreferrer" title="Report an issue with this compatibility data">Report problems with this compatibility data on GitHub</a>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <th colspan="6" title="desktop"><span>desktop</span></th>
                    <th colspan="6" title="mobile"><span>mobile</span></th>
                    <th colspan="2" title="server"><span>server</span></th>
                </tr>
                <tr>
                    <td></td>
                    <th><span>Chrome</span></th>
                    <th><span>Edge</span></th>
                    <th><span>Firefox</span></th>
                    <th><span>Internet Explorer</span></th>
                    <th><span>Opera</span></th>
                    <th><span>Safari</span></th>
                    <th><span>WebView Android</span></th>
                    <th><span>Chrome Android</span></th>
                    <th><span>Firefox for Android</span></th>
                    <th><span>Opera Android</span></th>
                    <th><span>Safari on iOS</span></th>
                    <th><span>Samsung Internet</span></th>
                    <th><span>Deno</span></th>
                    <th><span>Node.js</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><div><span><code>async function</code> statement</span></div></th>
                    <td aria-expanded="false" title="Released 2016-12-01"><span>Chrome</span><abbr title="Full support"><span>Full support</span></abbr><span>55</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-04-05"><span>Edge</span><abbr title="Full support"><span>Full support</span></abbr><span>15</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-03-07"><span>Firefox</span><abbr title="Full support"><span>Full support</span></abbr><span>52</span><div></div></td>
                    <td aria-expanded="false"><span>Internet Explorer</span><abbr title="No support"><span>No support</span></abbr><span>No</span><div></div></td>
                    <td aria-expanded="false" title="Released 2016-12-13"><span>Opera</span><abbr title="Full support"><span>Full support</span></abbr><span>42</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-03-27"><span >Safari</span><abbr title="Full support"><span>Full support</span></abbr><span>10.1</span><div></div></td>
                    <td aria-expanded="false" title="Released 2016-12-06"><span >WebView Android</span><abbr title="Full support"><span>Full support</span></abbr><span>55</span><div></div></td>
                    <td aria-expanded="false" title="Released 2016-12-06"><span>Chrome Android</span><abbr title="Full support"><span>Full support</span></abbr><span>55</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-03-07"><span>Firefox for Android</span><abbr title="Full support"><span>Full support</span></abbr><span>52</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-01-21"><span >Opera Android</span><abbr  title="Full support"><span>Full support</span></abbr><span>42</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-03-27"><span >Safari on iOS</span><abbr title="Full support"><span>Full support</span></abbr><span>10.3</span><div></div></td>
                    <td aria-expanded="false" title="Released 2017-08-23"><span >Samsung Internet</span><abbr title="Full support"><span>Full support</span></abbr><span>6.0</span><div></div></td>
                    <td aria-expanded="false" title="Released 2020-05-13"><span>Deno</span><abbr title="Full support"><span>Full support</span></abbr><span>1.0</span><div></div></td>
                    <td aria-expanded="false" tabindex="0" title="Released 2017-02-21"><span >Node.js</span><abbr title="Full support"><span>Full support</span></abbr><span>7.6.0</span><div></div><button type="button" title="Open implementation notes" ><span>Open</span><i aria-hidden="true"></i></button></td>
                </tr>
            </tbody>
        </table>
        <section>
            <h3 id="Legend">Legend</h3>
            <dl>
                <div>
                    <dt><span><abbr title="Full support"><span>Full support</span></abbr></span></dt>
                    <dd>Full support</dd>
                </div>
                <div>
                    <dt><span><abbr title="No support"><span>No support</span></abbr></span></dt>
                    <dd>No support</dd>
                </div>
                <div>
                    <dt><abbr title="User must explicitly enable this feature."></abbr></dt>
                    <dd>User must explicitly enable this feature.</dd>
                </div>
            </dl>
        </section>
        <div>
            <div id="sect7">
                <p></p>
                <p></p>
            </div>
        </div>
        <h2 id="véase_también">
            <a href="#véase_también" title="Permalink to Véase también">Véase también</a>
        </h2>
        <div>
            <ul>
                <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/async_function"><code>Expresión de función async</code></a></li>
                <li>Objeto <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"><code>AsyncFunction</code></a></li>
                <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a></li>
                <li><a href="https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/" rel="noopener">«Decorar funciones&nbsp;async de JavaScript» en innolitics.com</a>&nbsp;(en inglés)</li>
            </ul>
        </div>
    </article>
</div>

### Hoisting
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Glossary/Hoisting).
<div align="justify">
    <article lang="es">
        <h1>Hoisting</h1>
        <div>
            <p>Hoisting es un término que&nbsp;<em>no</em>&nbsp;encontrará&nbsp;utilizado en ninguna especificación previa a&nbsp;<a href="https://www.ecma-international.org/ecma-262/6.0/index.html"  rel="noopener">ECMAScript® 2015 Language Specification</a>. El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto puede ser un poco confuso al principio.</p>
            <p>Conceptualmente,&nbsp;por ejemplo, una estricta definición de&nbsp;hoisting sugiere que&nbsp;las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son <strong>asignadas en memoria</strong> durante la fase de <u>compilación,</u>&nbsp;pero quedan exactamente en dónde las has escrito en el código.</p>
        </div>
        <h2 id="aprenda_más">
            <a href="#aprenda_más" title="Permalink to Aprenda más">Aprenda más</a>
        </h2>
        <div></div>
        <h3 id="ejemplo_técnico">
            <a href="#ejemplo_técnico" title="Permalink to Ejemplo técnico">Ejemplo técnico</a>
        </h3>
        <div>
            <p>Una de las ventajas en JavaScript de colocar (<strong>ponerlas en memoria</strong>) las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el código. Por ejemplo:&nbsp;</p>
            <div>
            <pre><code><span>function</span> <span>nombreDelGato</span><span>(</span><span>nombre</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span>"El nombre de mi gato es "</span> <span>+</span> nombre<span>)</span><span>;</span>
<span>}</span>
<span></span>
<span>nombreDelGato</span><span>(</span><span>"Maurizzio"</span><span>)</span><span>;</span>
<span>/*
El resultado del código es: "El nombre de mi gato es Maurizzio"
*/</span>
</code></pre>
            </div>
            <p>El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:</p>
            <div>
            <pre><code><span>nombreDelGato</span><span>(</span><span>"Dumas"</span><span>)</span><span>;</span>
<span></span>
<span>function</span> <span>nombreDelGato</span><span>(</span><span>nombre</span><span>)</span> <span>{</span>
  console<span>.</span><span>log</span><span>(</span><span>"El nombre de mi gato es "</span> <span>+</span> nombre<span>)</span><span>;</span>
<span>}</span>
<span>/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/</span>
</code></pre>
            </div>
            <p>Como se puede observar, aunque&nbsp;primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript.&nbsp;</p>
            <p>Hoisting se lleva también bien con otros tipos&nbsp;de datos y variables.&nbsp;Observemos&nbsp;el siguiente ejemplo:</p></div><h3 id="ejemplo_técnico_2"><a href="#ejemplo_técnico_2" title="Permalink to Ejemplo técnico">Ejemplo técnico</a></h3><div><div><pre><code><span>var</span> x <span>=</span> <span>5</span><span>;</span>
<span></span>
<span>(</span><span>function</span> <span>(</span><span>)</span> <span>{</span>
    console<span>.</span><span>log</span><span>(</span><span>"x:"</span><span>,</span> x<span>)</span><span>;</span> <span>// no obtenemos '5' sino 'undefined'</span>
    <span>var</span> x <span>=</span> <span>10</span><span>;</span>
    console<span>.</span><span>log</span><span>(</span><span>"x:"</span><span>,</span> x<span>)</span><span>;</span> <span>// 10</span>
<span>}</span><span>(</span><span>)</span><span>)</span><span>;</span>
</code></pre>
            </div>
            <p>¿No hemos obtenido lo esperado?, como&nbsp;la declaración de variables se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es igual a declararla al inicio del mismo. Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable se <strong>eleva</strong> y pasa a declararse <strong>al comienzo de su contexto</strong>, en este caso la función que la contiene.</p>
            <p>El&nbsp;ejemplo anterior se entiende implícitamente como:</p>
            <div>
            <pre><code><span>var</span> x <span>=</span> <span>5</span><span>;</span>
<span></span>
<span>(</span><span>function</span> <span>(</span><span>)</span> <span>{</span>
    <span>var</span> x<span>;</span> <span>// Se elevo la declaración</span>
    console<span>.</span><span>log</span><span>(</span><span>"x:"</span><span>,</span> x<span>)</span><span>;</span> <span>// undefined</span>
    x <span>=</span> <span>10</span><span>;</span>
    console<span>.</span><span>log</span><span>(</span><span>"x:"</span><span>,</span> x<span>)</span><span>;</span> <span>// 10</span>
<span>}</span><span>(</span><span>)</span><span>)</span><span>;</span>
</code></pre>
            </div>
            <p>JavaScript sólo utiliza el hoisting&nbsp;en <strong>declaraciones</strong>, no&nbsp;inicializaciones. Si está utilizando una variable que <strong>es declarada e inicializada después &nbsp;</strong>(está después en el código)&nbsp;<strong>de usarla</strong>, el valor será <code>undefined</code>. El siguiente ejemplo demuestra ese comportamiento:</p>
            <div>
            <pre><code><span>var</span> x <span>=</span> <span>1</span><span>;</span> <span>// Inicializa x</span>
console<span>.</span><span>log</span><span>(</span>x <span>+</span> <span>" "</span> <span>+</span> y<span>)</span><span>;</span> <span>// '1 undefined'</span>
<span>var</span> y <span>=</span> <span>2</span><span>;</span> <span>// Inicializa y</span>
</code></pre>
            </div>
            <p>Como se puede apreciar&nbsp;<strong>la elevación afecta la declaración</strong>&nbsp;de variables, pero&nbsp;<strong>no su inicialización</strong>. El valor será asignado&nbsp;exactamente cuando la sentencia de asignación sea alcanzada.</p>
            <p>El&nbsp;ejemplo anterior se entiende implícitamente como:</p>
            <div>
            <pre><code><span>var</span> x <span>=</span> <span>1</span><span>;</span> <span>// Inicializa x</span>
<span>var</span> y<span>;</span><span>// Se elevo la declaración</span>
console<span>.</span><span>log</span><span>(</span>x <span>+</span> <span>" "</span> <span>+</span> y<span>)</span><span>;</span> <span>// '1 undefined'</span>
y <span>=</span> <span>2</span><span>;</span> <span>// Inicializa y</span>
</code></pre>
            </div>
        </div>
        <h3 id="referencia_técnica">
            <a href="#referencia_técnica" title="Permalink to Referencia técnica">Referencia técnica</a>
        </h3>
        <div>
            <ul>
                <li><a href="https://www.udemy.com/understand-javascript/"  rel="noopener">JavaScript: Understanding the Weird Parts</a> - Udemy.com Course</li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var">var statement</a> - MDN</li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function">function statement</a> - MDN</li>
            </ul>
        </div>
    </article>
</div>

### DOM
####  Toda la refencia aca descrita en adelante se tomo de Developer Mozilla [Ir a Developer Mozilla](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction).

<div align="justify">
    <article lang="es">
        <h1>Introducción</h1>
        <div>
            <p>&nbsp;</p>
            <p>Ésta sección da una breve introducción conceptual del <a href="https://developer.mozilla.org/en/DOM">DOM</a>: qué es, cómo proporciona la estructura para los documentos <a href="https://developer.mozilla.org/en/HTML">HTML</a> y <a href="https://developer.mozilla.org/en/XML">XML</a>, cómo se accede a él, y cómo esta <a href="https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones" rel="noopener">"API"</a> presenta la información de referencia y ejemplos.</p>
        </div>
        <h2 id=".c2.bfqu.c3.a9_es_el_dom.3f">
            <a href="#.c2.bfqu.c3.a9_es_el_dom.3f" title="Permalink to ¿Qué es el DOM?">¿Qué es el DOM?</a>
        </h2>
        <div>
            <p>El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.</p>
            <p>Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento. El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.</p>
            <p>El <a href="https://www.w3.org/DOM/" rel="noopener">W3C DOM</a> estándar forma la base del funcionamiento del DOM en muchos navegadores modernos. Varios navegadores ofrecen extensiones más allá del estándar W3C, hay que ir con extremo cuidado al utilizarlas en la web, ya que los documentos pueden ser consultados por navegadores que tienen DOMs diferentes.</p>
            <p>Por ejemplo, el DOM de W3C especifica que el método <code>getElementsByTagName</code> en el código de abajo debe devolver una lista de todos los elementos <code>&lt;p&gt;</code> del documento:</p>
            <div>
            <pre><code>paragraphs <span>=</span> document<span>.</span><span>getElementsByTagName</span> <span>(</span><span>"p"</span><span>)</span><span>;</span>
<span>// paragraphs[0] es el primer elemento &lt;p&gt;</span>
<span>// paragraphs[1] es el segundo elemento &lt;p&gt;, etc.</span>
<span>alert</span> <span>(</span>paragraphs <span>[</span><span>0</span><span>]</span><span>.</span>nodeName<span>)</span><span>;</span>
</code></pre>
            </div>
            <p>Todas las propiedades, métodos y eventos disponibles para la manipulación y la creación de páginas web está organizado dentro de objetos. Un ejemplo: el objeto <code>document</code> representa al documento mismo, el objeto <code>table</code> hace funcionar la interfaz especial <code>HTMLTableElement</code> del DOM para acceder a tablas HTML, y así sucesivamente. Ésta documentación procura una relación objeto-por-objeto del DOM que funciona con los navegadores basados en Gecko.</p>
        </div>
        <h2 id="dom_y_javascript">
            <a href="#dom_y_javascript" title="Permalink to DOM y JavaScript">DOM y JavaScript</a>
        </h2>
        <div>
            <p>El ejemplo corto de abajo, como casi todos los ejemplos de esta referencia, es <a href="https://developer.mozilla.org/en/JavaScript">JavaScript</a>. Es decir, es <em>escrito</em> en JavaScript pero <em>utiliza</em> el DOM para acceder al documento y a sus elementos. El DOM no es un lenguaje de programación pero sin él, el lenguaje JavaScript no tiene ningún modelo o noción de las páginas web, de la páginas XML ni de los elementos con los cuales es usualmente relacionado. Cada elemento -"el documento íntegro, el título, las tablas dentro del documento, los títulos de las tablas, el texto dentro de las celdas de las tablas"- es parte del modelo de objeto del documento para cada documento, así se puede acceder y manipularlos utilizando el DOM y un lenguaje de escritura, como JavaScript.</p>
            <p>En el comienzo, JavaScript y el DOM estaban herméticamente enlazados, pero después se desarrollaron como entidades separadas. El contenido de la página es almacenado en DOM y el acceso y la manipulación se hace vía JavaScript, podría representarse aproximadamente así:</p>
            <p>API(web o página XML) = DOM + JS(lenguaje de script)</p>
            <p>El DOM fue diseñado para ser independiente de cualquier lenguaje de programación particular, hace que la presentación estructural del documento sea disponible desde un simple y consistente API. Aunque en este manual nos centramos exclusivamente en JavaScript, la directrices del DOM pueden construirse para cualquier lenguaje, así lo demuestra el siguiente ejemplo de Python:</p>
            <div>
            <pre><code><span># Ejemplo DOM de Python</span>
<span>import</span> xml<span>.</span>dom<span>.</span>minidom <span>as</span> m
doc <span>=</span> m<span>.</span>parse<span>(</span><span>"C:\\Projects\\Py\\chap1.xml"</span><span>)</span><span>;</span>
doc<span>.</span>nodeName <span># Propiedad DOM del objeto document;</span>
p_list <span>=</span> doc<span>.</span>getElementsByTagName<span>(</span><span>"para"</span><span>)</span><span>;</span></code></pre>
            </div>
        </div>
        <h2 id=".c2.bfc.c3.b3mo_se_accede_al_dom.3f">
            <a href="#.c2.bfc.c3.b3mo_se_accede_al_dom.3f" title="Permalink to ¿Cómo se accede al DOM?">¿Cómo se accede al DOM?</a>
        </h2>
        <div>
            <p>No se tiene que hacer nada especial para empezar a utilizar el DOM. Los diferentes navegadores tienen directrices DOM distintas, y éstas directrices tienen diversos grados de conformidad al actual estándar DOM (un tema que se intenta evitar en este manual), pero todos los navegadores web usan el modelo de objeto de documento para hacer accesibles las páginas web al script.</p>
            <p>Cuando se crea un script –esté en un elemento <code>&lt;SCRIPT&gt;</code> o incluido en una página web por la instrucción de cargar un script– inmediatamente está disponible para usarlo con el API, accediendo así a los elementos <code><a href="https://developer.mozilla.org/en/DOM/document">document</a></code> o <code><a href="https://developer.mozilla.org/en/DOM/window">window</a></code>, para manipular el documento mismo o sus diferentes partes, las cuales son los varios elementos de una página web. La programación DOM hace algo tan simple como lo siguiente, lo cual abre un mensaje de alerta usando la función <code><a href="https://developer.mozilla.org/en/DOM/window.alert">alert()</a></code> desde el objeto <code><a href="https://developer.mozilla.org/en/DOM/window">window</a></code>, o permite métodos DOM más sofisticados para crear realmente un nuevo contenido, como en el largo ejemplo de más abajo.</p>
            <div>
            <pre><code><span><span><span>&lt;</span>body</span> <span><span>onload</span><span><span>=</span><span>"</span><span>window<span>.</span><span>alert</span><span>(</span><span>'Bienvenido a mi página!'</span><span>)</span><span>;</span></span><span>"</span></span></span><span>&gt;</span></span>
</code></pre>
            </div>
            <p>Aparte del elemento <code>&lt;script&gt;</code> en el cual JavaScript es definido, el ejemplo siguiente muestra la función a ejecutar cuando el documento se está cargando (y que el DOM completo es disponible para su uso). Esta función crea un nuevo elemento <code>H1</code>, le pone texto y después lo agrega al árbol del documento:</p>
            <div>
            <pre><code><span><span><span>&lt;</span>html</span><span>&gt;</span></span>
  <span><span><span>&lt;</span>head</span><span>&gt;</span></span>
    <span><span><span>&lt;</span>script</span><span>&gt;</span></span><span><span>
       <span>// ejecuta esta función cuando se cargue el documento</span>
       window<span>.</span><span>onload</span> <span>=</span> <span>function</span><span>(</span><span>)</span> <span>{</span>
<span></span>
         <span>// crea dinámicamente un par de elementos HTML en una página vacia</span>
         <span>var</span> heading <span>=</span> document<span>.</span><span>createElement</span><span>(</span><span>"h1"</span><span>)</span><span>;</span>
         <span>var</span> heading_text <span>=</span> document<span>.</span><span>createTextNode</span><span>(</span><span>"el texto que desee"</span><span>)</span><span>;</span>
         heading<span>.</span><span>appendChild</span><span>(</span>heading_text<span>)</span><span>;</span>
         document<span>.</span>body<span>.</span><span>appendChild</span><span>(</span>heading<span>)</span><span>;</span>
      <span>}</span>
    </span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span>
  <span><span><span>&lt;/</span>head</span><span>&gt;</span></span>
  <span><span><span>&lt;</span>body</span><span>&gt;</span></span>
  <span><span><span>&lt;/</span>body</span><span>&gt;</span></span>
<span><span><span>&lt;/</span>html</span><span>&gt;</span></span></code></pre>
            </div>
        </div>
        <h2 id="tipos_de_datos_importantes">
            <a href="#tipos_de_datos_importantes" title="Permalink to Tipos de datos importantes">Tipos de datos importantes</a>
        </h2>
        <div>
            <p>Esta parte intenta describir, de la manera más simple posible, los diferentes objetos y tipos. Pero hay que conocer una cantidad de tipos de datos diferentes que son utilizados por el API. Para simplificarlo, los ejemplos de sintaxis en esta API se refieren a nodos como <code>elements</code>, a una lista de nodos como <code>nodeLists</code> (o simples <code>elementos</code>) y a nodos de <code>atributo</code> como <code>attributes</code>.</p>
            <p>La siguiente tabla describe brevemente estos tipos de datos.</p>
            <table>
                <tbody>
                    <tr>
                        <td><code>document</code></td>
                        <td>Cuando un miembro devuelve un objeto del tipo <code>document</code> (por ejemplo, la propiedad <strong>ownerDocument</strong> de un elemento devuelve el documento "<code>document</code>" al cual pertenece), este objeto es la raíz del objeto documento en sí mismo. El capítulo <a href="https://developer.mozilla.org/en/DOM/documento">La referencia al documento (<code>document</code>) de DOM</a> lo explica con más detalles.</td>
                    </tr>
                    <tr>
                        <td><code>element</code></td>
                        <td><code>element</code> se refiere a un elemento o a un nodo de tipo de elemento "<code>element</code>" devuelto por un miembro del API de DOM. Dicho de otra manera, por ejemplo, el método <code>document.createElement()</code> devuelve un objeto referido a un <code>nodo</code>, lo que significa que este método devuelve el elemento que acaba de ser creado en el DOM. Los objetos <code>element</code> ponen en funcionamiento a la interfaz <code>Element</code> del DOM y también a la interfaz de nodo "<code>Node</code>" más básica, las cuales son incluidas en esta referencia.</td>
                    </tr>
                    <tr>
                        <td><code>nodeList</code></td>
                        <td>Una "<code>nodeList</code>" es una serie de elementos, parecido a lo que devuelve el método <code>document.getElementsByTagName()</code>. Se accede a los items de la <code>nodeList</code> de cualquiera de las siguientes dos formas:
                            <ul>
                            <li>list.item (1)</li>
                            <li>lista [1]</li>
                            </ul>
                        <p>Ambas maneras son equivalentes. En la primera, <strong>item()</strong> es el método del objeto <code>nodeList</code>. En la última se utiliza la típica sintaxis de acceso a listas para llegar al segundo ítem de la lista.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><code>attribute</code></td>
                        <td>Cuando un atributo ("<code>attribute</code>") es devuelto por un miembro (por ej., por el método <strong>createAttribute()</strong>), es una referencia a un objeto que expone una interfaz particular (aunque limitada) a los atributos. Los atributos son nodos en el DOM igual que los elementos, pero no suelen usarse así.</td>
                    </tr>
                    <tr>
                        <td><code>NamedNodeMap</code></td>
                        <td>Un <code>namedNodeMap</code> es una serie, pero los ítems son accesibles tanto por el nombre o por un índice, este último caso es meramente una conveniencia para enumerar ya que no están en ningún orden en particular en la lista. Un <code>NamedNodeMap</code> es un método de ítem() por esa razón, y permite poner o quitar ítems en un <code>NamedNodeMap</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 id="interfaces_del_dom">
            <a href="#interfaces_del_dom" title="Permalink to Interfaces del DOM">Interfaces del DOM</a>
        </h2>
        <div>
            <p>Uno de los propósitos de esta guía es minimizar el hablar de interfaces abstractas, heredadas y otros detalles de funcionamiento. Más bien, concentrarse sobre los objetos en el DOM y sobre las actuales <em>cosas</em> que se pueden usar para manipular la jerarquía de DOM. Desde el punto de vista del programador web, es bastante indiferente saber que la representación del objeto del elemento <code>HTML form</code> toma la propidedad <strong>name</strong> desde la interfaz <code>HTMLFormElement</code> pero que las propiedades <code><strong>className</strong> </code>se toman desde la propia interfaz <code>HTMLElement</code>. En ambos casos, la propiedad está sólo en el objeto <code>form</code>.</p>
            <p>Pero puede resultar confuso el funcionamiento de la fuerte relación entre objetos e interfaces en el DOM, por eso esta sección intentará hablar un poquito sobre las interfaces actuales en la especificación del DOM y de como se dispone de ellas.</p>
        </div>
        <h2 id="interfaces_y_objetos">
            <a href="#interfaces_y_objetos" title="Permalink to Interfaces y objetos">Interfaces y objetos</a>
        </h2>
        <div>
            <p>En algunos casos un objeto pone en ejecución a una sola interfaz. Pero a menudo un objeto toma prestada una tabla HTML (<code>table</code>) desde muchas interfaces diversas. El objeto table, por ejemplo, pone en funcionamiento una <a href="https://developer.mozilla.org/en/DOM/tabla">Interfaz especial del elemento table HTML</a>, la cual incluye métodos como <code>createCaption</code> y <code>insertRow</code>. Pero como también es un elemento HTML, table pone en marcha a la interfaz del <code>Element</code> descrita en el capítulo <a href="https://developer.mozilla.org/en/Referencia_DOM_de_Gecko/elemento">La referencia al elemento del DOM</a>. Y finalmente, puesto que un elemento HTML es también, por lo que concierna al DOM, un nodo en el árbol de nodos que hace el modelo de objeto para una página web o XML, el elemento de table hace funcionar la interfaz más básica de <code>Node</code>, desde el cual deriva <code>Element</code>.</p>
            <p>La referencia a un objeto <code>table</code>, como en el ejemplo siguiente, utiliza estas interfaces intercambiables sobre el objeto.</p>
            <div>
            <pre><code><span>var</span> table <span>=</span> document<span>.</span><span>getElementById</span><span>(</span><span>"table"</span><span>)</span><span>;</span>
<span>var</span> tableAttrs <span>=</span> table<span>.</span>attributes<span>;</span> <span>// Node/interfaz Element</span>
<span>for</span> <span>(</span><span>var</span> i <span>=</span> <span>0</span><span>;</span> i <span>&lt;</span> tableAttrs<span>.</span>length<span>;</span> i<span>++</span><span>)</span> <span>{</span>
  <span>// interfaz HTMLTableElement: atributo border</span>
  <span>if</span><span>(</span>tableAttrs<span>[</span>i<span>]</span><span>.</span>nodeName<span>.</span><span>toLowerCase</span><span>(</span><span>)</span> <span>==</span> <span>"border"</span><span>)</span>
    table<span>.</span>border <span>=</span> <span>"1"</span><span>;</span>
<span>}</span>
<span>// interfaz HTMLTableElement: atributo summary</span>
table<span>.</span>summary <span>=</span> <span>"nota: borde aumentado"</span><span>;</span></code></pre>
            </div>
        </div>
        <h2 id="interfaces_esenciales_en_el_dom">
            <a href="#interfaces_esenciales_en_el_dom" title="Permalink to Interfaces esenciales en el DOM">Interfaces esenciales en el DOM</a>
        </h2>
        <div>
            <p>Esta sección lista las interfaces más comúnmente utilizadas en el DOM. La idea no es describir qué hacen estas APIs pero sí dar una idea de las clases de métodos y propiedades que se encuentran con el uso del DOM. Muchos ejemplos de uso común de esta API se encuentran en el capítulo <a href="https://developer.mozilla.org/es/Referencia_DOM_de_Gecko/Ejemplos">Ejemplos DOM</a> al final de este manual.</p>
            <p><code>document</code> y <code>window</code> son objetos cuya interfaces son generalmente muy usadas en la programación de DOM. En término simple, el objeto <code>window</code> representa algo como podría ser el navegador, y el objeto <code>document</code> es la raíz del documento en sí. <code>Element</code> hereda de la interfaz genérica <code>Node</code>, y juntos, estas dos interfaces proporcionan muchos métodos y propiedades utilizables sobre los elementos individuales. Éstos elementos pueden igualmente tener interfaces específicas según el tipo de datos representados, como en el ejemplo anterior del objeto <code>table</code>. Lo siguiente es una breve lista de los APIS comunes en la web y en las páginas escritas en XML utilizando el DOM.</p>
            <ul>
                <li><code><a href="https://developer.mozilla.org/en/DOM/document.getElementById">document.getElementById</a>(id)</code></li>
                <li><code>element.<a href="https://developer.mozilla.org/en/DOM/element.getElementsByTagName">getElementsByTagName</a>(name)</code></li>
                <li><code><a href="https://developer.mozilla.org/en/DOM/document.createElement">document.createElement</a>(name)</code></li>
                <li><code>parentNode.<a href="https://developer.mozilla.org/en/DOM/element.appendChild">appendChild</a>(node)</code></li>
                <li><code>element.<a href="https://developer.mozilla.org/en/DOM/element.innerHTML">innerHTML</a></code></li>
                <li><code>element.<a href="https://developer.mozilla.org/en/DOM/element.style">style</a>.left</code></li>
                <li><code>element.<a href="https://developer.mozilla.org/en/DOM/element.setAttribute">setAttribute</a></code></li>
                <li><code>element.<a href="https://developer.mozilla.org/en/DOM/element.getAttribute">element.getAttribute</a></code></li>
                <li><code>element.<a href="https://developer.mozilla.org/en/DOM/element.addEventListener">addEventListener</a></code></li>
                <li><code><a href="https://developer.mozilla.org/en/DOM/window.content">window.content</a></code></li>
                <li><code><a href="https://developer.mozilla.org/en/DOM/window.onload">window.onload</a></code></li>
                <li><code><a href="https://developer.mozilla.org/en/DOM/window.dump">window.dump</a></code></li>
                <li><code><a href="https://developer.mozilla.org/en/DOM/window.scrollTo">window.scrollTo</a></code></li>
            </ul>
        </div>
        <h2 id="probando_el_api_del_dom">
            <a href="#probando_el_api_del_dom" title="Permalink to Probando el API del DOM">Probando el API del DOM</a>
        </h2>
        <div>
            <p>Ésta parte procura ejemplos para todas las interfaces usadas en el desarrollo web. En algunos casos, los ejemplos son páginas HTML enteras, con el acceso del DOM a un elemento de &lt;script&gt;, la interfaz necesaria (por ejemplo, botones) para la ejecución del script en un formulario, y también que los elementos HTML sobre los cuales opera el DOM se listen. Según el caso, los ejemplos se pueden copiar y pegar en un documento web para probarlos.</p>
            <p>No es el caso donde los ejemplos son muchos más concisos. Para la ejecución de estos ejemplos que sólo demuestran la relación básica entre la interfaz y los elementos HTML, resulta útil tener una página de prueba en la cual las interfaces serán fácilmente accesibles por los scripts. La muy simple página siguiente proporciona en las cabeceras un elemento de script en el cual se pondrán las funciones para testar la interfaz elegida, algunos elementos HTML con atributos que se puedan leer, editar y también manipular, así como la interfaz web necesaria para llamar esas funciones desde el navegador.</p>
            <p>Para probar y ver como trabajan en la plataforma del navegador las interfaces del DOM, esta página de prueba o una nueva similar son factibles. El contenido de la función <code>test()</code> se puede actualizar según la necesidad, para crear más botones o poner más elementos.</p>
            <div>
            <pre><code><span><span><span>&lt;</span>html</span><span>&gt;</span></span>
  <span><span><span>&lt;</span>head</span><span>&gt;</span></span>
    <span><span><span>&lt;</span>title</span><span>&gt;</span></span>Pruebas DOM<span><span><span>&lt;/</span>title</span><span>&gt;</span></span>
    <span><span><span>&lt;</span>script</span> <span>type</span><span><span>=</span><span>"</span>application/javascript<span>"</span></span><span>&gt;</span></span><span><span>
    <span>function</span> <span>setBodyAttr</span><span>(</span><span>attr<span>,</span> value</span><span>)</span><span>{</span>
      <span>if</span> <span>(</span>document<span>.</span>body<span>)</span> <span>eval</span><span>(</span><span>'document.body.'</span><span>+</span>attr<span>+</span><span>'="'</span><span>+</span>value<span>+</span><span>'"'</span><span>)</span><span>;</span>
      <span>else</span> <span>notSupported</span><span>(</span><span>)</span><span>;</span>
    <span>}</span>
    </span></span><span><span><span>&lt;/</span>script</span><span>&gt;</span></span>
  <span><span><span>&lt;/</span>head</span><span>&gt;</span></span>
  <span><span><span>&lt;</span>body</span><span>&gt;</span></span>
    <span><span><span>&lt;</span>div</span> <span><span>style</span><span><span>=</span><span>"</span><span><span>margin</span><span>:</span> .5in<span>;</span> <span>height</span><span>:</span> 400<span>;</span></span><span>"</span></span></span><span>&gt;</span></span>
      <span><span><span>&lt;</span>p</span><span>&gt;</span></span><span><span><span>&lt;</span>b</span><span>&gt;</span></span><span><span><span>&lt;</span>tt</span><span>&gt;</span></span>texto<span><span><span>&lt;/</span>tt</span><span>&gt;</span></span><span><span><span>&lt;/</span>b</span><span>&gt;</span></span><span><span><span>&lt;/</span>p</span><span>&gt;</span></span>
      <span><span><span>&lt;</span>form</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>select</span> <span><span>onChange</span><span><span>=</span><span>"</span><span><span>setBodyAttr</span><span>(</span><span>'text'</span><span>,</span>
        <span>this</span><span>.</span>options<span>[</span><span>this</span><span>.</span>selectedIndex<span>]</span><span>.</span>value<span>)</span><span>;</span></span><span>"</span></span></span><span>&gt;</span></span>
          <span><span><span>&lt;</span>option</span> <span>value</span><span><span>=</span><span>"</span>black<span>"</span></span><span>&gt;</span></span>negro
          <span><span><span>&lt;</span>option</span> <span>value</span><span><span>=</span><span>"</span>darkblue<span>"</span></span><span>&gt;</span></span>azul oscuro
        <span><span><span>&lt;/</span>select</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>p</span><span>&gt;</span></span><span><span><span>&lt;</span>b</span><span>&gt;</span></span><span><span><span>&lt;</span>tt</span><span>&gt;</span></span>bgColor<span><span><span>&lt;/</span>tt</span><span>&gt;</span></span><span><span><span>&lt;/</span>b</span><span>&gt;</span></span><span><span><span>&lt;/</span>p</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>select</span> <span><span>onChange</span><span><span>=</span><span>"</span><span><span>setBodyAttr</span><span>(</span><span>'bgColor'</span><span>,</span>
        <span>this</span><span>.</span>options<span>[</span><span>this</span><span>.</span>selectedIndex<span>]</span><span>.</span>value<span>)</span><span>;</span></span><span>"</span></span></span><span>&gt;</span></span>
          <span><span><span>&lt;</span>option</span> <span>value</span><span><span>=</span><span>"</span>white<span>"</span></span><span>&gt;</span></span>blanco
          <span><span><span>&lt;</span>option</span> <span>value</span><span><span>=</span><span>"</span>lightgrey<span>"</span></span><span>&gt;</span></span>gris
        <span><span><span>&lt;/</span>select</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>p</span><span>&gt;</span></span><span><span><span>&lt;</span>b</span><span>&gt;</span></span><span><span><span>&lt;</span>tt</span><span>&gt;</span></span>link<span><span><span>&lt;/</span>tt</span><span>&gt;</span></span><span><span><span>&lt;/</span>b</span><span>&gt;</span></span><span><span><span>&lt;/</span>p</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>select</span> <span><span>onChange</span><span><span>=</span><span>"</span><span><span>setBodyAttr</span><span>(</span><span>'link'</span><span>,</span>
        <span>this</span><span>.</span>options<span>[</span><span>this</span><span>.</span>selectedIndex<span>]</span><span>.</span>value<span>)</span><span>;</span></span><span>"</span></span></span><span>&gt;</span></span>
          <span><span><span>&lt;</span>option</span> <span>value</span><span><span>=</span><span>"</span>blue<span>"</span></span><span>&gt;</span></span>azul
          <span><span><span>&lt;</span>option</span> <span>value</span><span><span>=</span><span>"</span>green<span>"</span></span><span>&gt;</span></span>verde
        <span><span><span>&lt;/</span>select</span><span>&gt;</span></span>  <span><span><span>&lt;</span>small</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>a</span> <span>href</span><span><span>=</span><span>"</span>http://www.brownhen.com/dom_api_top.html<span>"</span></span> <span>id</span><span><span>=</span><span>"</span>sample<span>"</span></span><span>&gt;</span></span>
        (sample link)<span><span><span>&lt;/</span>a</span><span>&gt;</span></span><span><span><span>&lt;/</span>small</span><span>&gt;</span></span><span><span><span>&lt;</span>br</span><span>&gt;</span></span>
      <span><span><span>&lt;/</span>form</span><span>&gt;</span></span>
      <span><span><span>&lt;</span>form</span><span>&gt;</span></span>
        <span><span><span>&lt;</span>input</span> <span>type</span><span><span>=</span><span>"</span>button<span>"</span></span> <span>value</span><span><span>=</span><span>"</span>version<span>"</span></span> <span><span>onclick</span><span><span>=</span><span>"</span><span><span>ver</span><span>(</span><span>)</span></span><span>"</span></span></span> <span>/&gt;</span></span>
      <span><span><span>&lt;/</span>form</span><span>&gt;</span></span>
    <span><span><span>&lt;/</span>div</span><span>&gt;</span></span>
  <span><span><span>&lt;/</span>body</span><span>&gt;</span></span>
<span><span><span>&lt;/</span>html</span><span>&gt;</span></span></code></pre>
            </div>
            <p>La creación de una página de prueba con una paleta de botones, campos de texto u otros elementos HTML, permitirá testar una gran cantidad de interfaces en un mismo documento, por ejemplo una serie de propiedades que afectan a los colores de una página web. Lo siguiente permite hacerse una idea de como pueden agruparse las interfaces para probarlas.</p>
            <p>Figura 0.1 Muestra DOM página de prueba</p>
            <p><img alt="" src="https://developer.mozilla.org/@api/deki/files/173/=DOM_Ref_Introduction_to_the_DOM.gif" loading="lazy"></p>
            <p>En este ejemplo, los menúes desplegables actualizan dinámicamente los aspectos de la página web accesibles al DOM como el color de fondo (<code>bgColor</code>), de los hiper-enlaces (<code>aLink</code>), y el del texto (<code>text</code>). El hecho de diseñar páginas, testar las interfaces que se encuentren a lo largo de la lectura son una parte importante del aprendizaje para una utilización eficaz del DOM.</p>
        </div>
        <h2 id="otros_enlaces">
            <a href="#otros_enlaces" title="Permalink to Otros enlaces"><strong>Otros enlaces</strong></a>
        </h2>
        <div>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">Referencia DOM</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">Introducción al DOM</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events">Eventos y el DOM</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples">Ejemplos</a></li>
            </ul>
            <div id="s3gt_translate_tooltip_mini" style="background: initial !important; border: initial !important; border-radius: initial !important; border-collapse: initial !important; direction: ltr !important; font-weight: initial !important; height: initial !important; letter-spacing: initial !important; max-width: initial !important; min-height: initial !important; margin: auto !important; outline: initial !important; padding: initial !important; position: absolute; text-align: initial !important; text-shadow: initial !important; width: initial !important; display: initial !important; color: inherit !important; font-size: 13px !important; font-family: X-LocaleSpecific,sans-serif,Tahoma,Helvetica !important; line-height: 13px !important; vertical-align: top !important; white-space: inherit !important; left: 10px; top: 35px; opacity: 0.85;">
                <div id="s3gt_translate_tooltip_mini_logo" title="Traducir texto seleccionado">&nbsp;</div>
                <div id="s3gt_translate_tooltip_mini_sound" title="Reproducir">&nbsp;</div>
                <div id="s3gt_translate_tooltip_mini_copy" title="Copy text to Clipboard">&nbsp;</div>
            </div>
            <div id="s3gt_translate_tooltip_mini" style="background: initial !important; border: initial !important; border-radius: initial !important; border-collapse: initial !important; direction: ltr !important; font-weight: initial !important; height: initial !important; letter-spacing: initial !important; max-width: initial !important; min-height: initial !important; margin: auto !important; outline: initial !important; padding: initial !important; position: absolute; text-align: initial !important; text-shadow: initial !important; width: initial !important; display: initial !important; color: inherit !important; font-size: 13px !important; font-family: X-LocaleSpecific,sans-serif,Tahoma,Helvetica !important; line-height: 13px !important; vertical-align: top !important; white-space: inherit !important; left: 39px; top: 1952px; opacity: 0.45;">
                <div id="s3gt_translate_tooltip_mini_logo" title="Traducir texto seleccionado">&nbsp;</div>
                <div id="s3gt_translate_tooltip_mini_sound" title="Escuchar">&nbsp;</div>
                <div id="s3gt_translate_tooltip_mini_copy" title="Copiar texto al Portapapeles">&nbsp;</div>
            </div>
            <div id="s3gt_translate_tooltip_mini" style="background: initial !important; border: initial !important; border-radius: initial !important; border-collapse: initial !important; direction: ltr !important; font-weight: initial !important; height: initial !important; letter-spacing: initial !important; max-width: initial !important; min-height: initial !important; margin: auto !important; outline: initial !important; padding: initial !important; position: absolute; text-align: initial !important; text-shadow: initial !important; width: initial !important; display: initial !important; color: inherit !important; font-size: 13px !important; font-family: X-LocaleSpecific,sans-serif,Tahoma,Helvetica !important; line-height: 13px !important; vertical-align: top !important; white-space: inherit !important; left: 307px; top: 1961px; opacity: 0;">
                <div id="s3gt_translate_tooltip_mini_logo" title="Traducir texto seleccionado">&nbsp;</div>
                <div id="s3gt_translate_tooltip_mini_sound" title="Escuchar">&nbsp;</div>
                <div id="s3gt_translate_tooltip_mini_copy" title="Copiar texto al Portapapeles">&nbsp;</div>
            </div>
        </div>
    </article>
</div>