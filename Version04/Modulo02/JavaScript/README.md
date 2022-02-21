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
    <span>background</span><span >:</span><span>rgba</span><span>(</span>0<span>,</span>0<span>,</span>200<span>,</span>0.3<span>)</span><span>;</span>
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
        <span>let</span> name <span>=</span> <span>prompt</span><span>(</span><span >'Enter a new name'</span><span>)</span><span>;</span>
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
                <li><a href="https://developer.mozilla.org/en/Apps/Fundamentals/Audio_and_video_delivery">APIs de audio y video</a> como <a href="https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement"><code>HTMLMediaElement</code></a> y <a href="https://developer.mozilla.org/en/docs/Web/API/WebRTC_API" title="WebRTC"><code>WebRTC</code></a> te permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y video directamente en una página web, o tomar video de tu cámara web y mostrarlo en la computadora de otra persona (prueba nuestra sencilla <a href="http://chrisdavidmills.github.io/snapshot/" rel=" noopener">demostración instantánea</a> para hacerte una idea).</li>
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
  <span>const</span> buttons <span>=</span> document<span>.</span><span>querySelectorAll</span><span>(</span><span>'button'</span><span >)</span><span>;</span>
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
                <li><a class="link-https external" href="https://github.com/nzakas/computer-science-in-javascript/" rel="noopener">Colección de estructura de datos común y algoritmos comunes en JavaScript de Nicholas Zakas.</a></li>
                <li><a href="https://github.com/monmohan/DataStructures_In_Javascript" rel="noopener">Estructuras de datos implementadas en JavaScript</a></li>
            </ul>
        </div>
    </article>
</div>