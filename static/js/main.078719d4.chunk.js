(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,o,i){"use strict";i.r(o);var a=i(0),t=i.n(a),n=i(20),r=i.n(n),c=(i(90),i(29)),s=i(30),d=i(33),l=i(31),p=i(32),m=i(22),u=(i(92),i(73)),h=i.n(u),g=i(78),b=i.n(g),w=i(75),f=i.n(w),v=i(17),E=i.n(v),y=i(76),z=i.n(y),N=i(77),S=i.n(N),x=(i(94),function(e){function o(e){var i;return Object(c.a)(this,o),(i=Object(d.a)(this,Object(l.a)(o).call(this,e))).handleChange=function(e){return function(o,a){i.setState({expanded:!!a&&e})}},i.state={expanded:null,seccionPrev:""},i}return Object(p.a)(o,e),Object(s.a)(o,[{key:"render",value:function(){var e=this,o=this.state.expanded,i=this.props.webs;return t.a.createElement("div",{className:"evita-menu"},i.map(function(a,n){return t.a.createElement("div",{key:n},n>0?a.tipo!==i[n-1].tipo?t.a.createElement("h4",{className:"titulo-tipo"},a.tipo.toUpperCase()):null:t.a.createElement("h4",{className:"titulo-tipo"},a.tipo.toUpperCase()),t.a.createElement(h.a,{className:"espacio",key:a.id,expanded:o==="panel"+a.id,onChange:e.handleChange("panel"+a.id)},t.a.createElement(f.a,{expandIcon:t.a.createElement(z.a,null)},t.a.createElement("div",{style:{display:"flex",alignItems:"center"}},t.a.createElement(S.a,{style:{width:a.icono.size,height:a.icono.size,borderRadius:0,marginRight:"10px"},src:a.icono.url}),t.a.createElement(E.a,null,a.nombre),t.a.createElement(E.a,null,t.a.createElement("span",{className:"ES"===a.idioma?"idiomaES":"idiomaEN"},a.idioma)))),t.a.createElement(b.a,{className:"detalles"},t.a.createElement(E.a,null,a.descripcion,t.a.createElement("br",null),t.a.createElement("br",null),t.a.createElement("a",{href:a.url},a.url)))))}))}}]),o}(t.a.Component)),j=i(34),C=i(79),k=i.n(C),q=i(80),O=i.n(q),T=i(82),A=i.n(T),R=i(21),I=i(83),B=i(81),P=i.n(B);var L=Object(I.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},title:Object(j.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(R.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(j.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var o=e.classes;return t.a.createElement("div",{className:o.root},t.a.createElement(k.a,null,t.a.createElement(O.a,null,t.a.createElement(E.a,{className:o.title,variant:"h6",color:"inherit",noWrap:!0},"Webs interesantes"),t.a.createElement("div",{className:o.grow}),t.a.createElement("div",{className:o.search},t.a.createElement("div",{className:o.searchIcon},t.a.createElement(P.a,null)),t.a.createElement(A.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},onChange:e.onchange})))))}),D=i(84),G=function(e){function o(e){var i;return Object(c.a)(this,o),(i=Object(d.a)(this,Object(l.a)(o).call(this,e))).state={webs:D.webs,busqueda:[]},i.filtrarBusqueda=i.filtrarBusqueda.bind(Object(m.a)(Object(m.a)(i))),i}return Object(p.a)(o,e),Object(s.a)(o,[{key:"filtrarBusqueda",value:function(e){var o=new RegExp(e.target.value,"gi"),i=this.state.webs.filter(function(e){return e.nombre.match(o)});this.setState({busqueda:i})}},{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement(L,{onchange:this.filtrarBusqueda}),t.a.createElement(x,{webs:this.state.busqueda.length>0?this.state.busqueda:this.state.webs}),t.a.createElement("footer",{className:"pie-pagina"},'"Made on Earth by Human."'))}}]),o}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(t.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e){e.exports={webs:[{id:1,nombre:"tutorialspoint",url:"http://www.tutorialspoint.com/",icono:{url:"http://www.tutorialspoint.com/favicon.ico",size:32},descripcion:"Plataforma de cursos relacionados con la inform\xe1tica(programaci\xf3n, dise\xf1o, animaci\xf3n 3D, machine learning...) totalmente GRATUITOS.",idioma:"EN",tipo:"educacion"},{id:2,nombre:"formacarm",url:"https://www.formacarm.es/portal/",icono:{url:"https://www.formacarm.es/portal/img/favicon.ico",size:16},descripcion:"Plataforma de e-formaci\xf3n de la Comunidad Aut\xf3noma de la Regi\xf3n de Murcia donde se imparten cursos de distintas tem\xe1ticas y GRATUITOS.",idioma:"ES",tipo:"educacion"},{id:8,nombre:"europass",url:"https://europass.cedefop.europa.eu/es",icono:{url:"https://europass.cedefop.europa.eu/sites/all/themes/europass_foundation/favicon.ico",size:32},descripcion:"Plataforma para personas que quieren trabajar o formarse en Europa. Herramienta muy \xfatil que te ayuda a conseguir los documentos necesarios para dicho fin.",idioma:"ES",tipo:"educacion"},{id:11,nombre:"linux from scratch",url:"http://www.linuxfromscratch.org/",icono:{url:"http://www.linuxfromscratch.org/favicon.ico",size:16},descripcion:"Proyecto que te proporciona paso a paso las instrucciones para customizar tu propio sistema Linux manejando su c\xf3digo fuente.",idioma:"EN",tipo:"educacion"},{id:13,nombre:"pluralsight",url:"https://www.pluralsight.com/",icono:{url:"https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/favicons/favicon-32x32.png",size:32},descripcion:"Plataforma online de cursos relacionados con la inform\xe1tica y la tecnolog\xeda.",idioma:"EN",tipo:"educacion"},{id:14,nombre:"freeCodeCamp",url:"https://www.freecodecamp.org/",icono:{url:"https://s3.amazonaws.com/freecodecamp/favicons/favicon-32x32.png",size:32},descripcion:"Peque\xf1a plataforma sin \xe1nimo de lucro que ayuda a millones de personas a aprender a programar GRATUITAMENTE.",idioma:"EN",tipo:"educacion"},{id:15,nombre:"codecademy",url:"https://www.codecademy.com/",icono:{url:"https://www.codecademy.com/favicon.ico",size:32},descripcion:"Plataforma online para aprender a programar. GRATUITO.",idioma:"EN",tipo:"educacion"},{id:19,nombre:"Google Act\xedvate",url:"https://www.google.es/landing/activate/home/",icono:{url:"https://www.google.es/favicon.ico",size:32},descripcion:"Plataforma de formaci\xf3n en competencias digitales de Google.",idioma:"ES",tipo:"educacion"},{id:20,nombre:"Class central",url:"https://www.class-central.com/",icono:{url:"https://www.class-central.com/favicon.ico",size:32},descripcion:"Buscador de cursos MOOC de las mejores universidades del mundo.",idioma:"EN",tipo:"educacion"},{id:24,nombre:"Nestor Braidot",url:"https://braidot.com/",icono:{url:"https://braidot.com/wp-content/uploads/2018/12/cropped-NB-FAVICON-32x32.png",size:32},descripcion:"Uno de los especialistas en neurociencia m\xe1s importantes. Aprende un poco m\xe1s sobre \xe9l, entra en la biblioteca o apuntate a su instituto.",idioma:"ES",tipo:"educacion"},{id:32,nombre:"courseroot",url:"https://courseroot.com/",icono:{url:"https://courseroot.com/img/favicon.png",size:32},descripcion:"La mayor base de datos de tutoriales y cursos online filtrados seg\xfan su precio, dificultad, calidad de certificado...",idioma:"EN",tipo:"educacion"},{id:38,nombre:"CISCO",url:"https://www.netacad.com/es",icono:{url:"http://www.myiconfinder.com/uploads/iconsets/256-256-1dfedd385bb8e3d6686fa7bda30da1e0-Cisco.png",size:32},descripcion:"Buscador de academias cercanas donde se impartan cursos de IT respaldados por CISCO.",idioma:"ES",tipo:"educacion"},{id:41,nombre:"Tutoriales en pdf",url:"http://tutorialesenpdf.com/",icono:{url:"http://tutorialesenpdf.com/favicon.ico",size:32},descripcion:"Como su propio nombre indica, web donde encontrar tutoriales en espa\xf1ol y en formato pdf para poder descargar.",idioma:"ES",tipo:"educacion"},{id:42,nombre:"Khan Academy",url:"https://es.khanacademy.org/",icono:{url:"https://es.khanacademy.org/favicon.ico",size:32},descripcion:"Plataforma online que imparte cursos sobre matem\xe1ticas, ciencia, econom\xeda y finanzas y computaci\xf3n. GRATUITO.",idioma:"ES",tipo:"educacion"},{id:46,nombre:"Dive into deep learning",url:"http://d2l.ai/",icono:{url:"https://d2l.ai/_static/gluon_s2.png",size:32},descripcion:"Un libro interactivo sobre deep learning que incluye c\xf3digo, matem\xe1ticas y debates",idioma:"EN",tipo:"educacion"},{id:47,nombre:"80000 hours",url:"https://80000hours.org/",icono:{url:"https://80000hours.org/favicon-144.png",size:32},descripcion:"\xbfQuieres ayudar a mejorar el mundo y no sabes que carrera estudiar? Ellos te ayudar\xe1n a escoger.",idioma:"EN",tipo:"educacion"},{id:49,nombre:"hackr.io",url:"https://hackr.io/",icono:{url:"https://hackr.io/assets/images/code-images/code-favicon-32x32.png",size:32},descripcion:"Buscador de cursos relacionados con la programaci\xf3n y el dise\xf1o.",idioma:"EN",tipo:"educacion"},{id:54,nombre:"hack yourself first",url:"https://hack-yourself-first.com/",icono:{url:"https://hack-yourself-first.com/favicon.ico",size:16},descripcion:"P\xe1gina web dise\xf1ada para seguir un tutorial de hacking. Aprende los problemas de seguridad que hay en la red y a c\xf3mo solventarlos.",idioma:"EN",tipo:"educacion"},{id:3,nombre:"Piskel",url:"https://www.piskelapp.com/",icono:{url:"https://www.piskelapp.com/static/resources/favicon.png",size:32},descripcion:"Editor online gratuito para crear sprites animados y pixel art.",idioma:"EN",tipo:"informatica"},{id:4,nombre:"elhacker",url:"https://www.elhacker.net/",icono:{url:"https://www.elhacker.net/inclusiones/plantillas/006/favicon.ico",size:16},descripcion:"Foro en espa\xf1ol sobre hacking. Discusiones, debates, foro, war-zone...",idioma:"ES",tipo:"informatica"},{id:5,nombre:"CodePen",url:"https://codepen.io/",icono:{url:"https://codepen.io/favicons/favicon-32x32.png",size:32},descripcion:"Editor online de programaci\xf3n. Comparte con la comunidad tus creaciones, observa y analiza la de los dem\xe1s.",idioma:"EN",tipo:"informatica"},{id:6,nombre:"pixabay",url:"https://pixabay.com/",icono:{url:"https://pixabay.com/favicon-32x32.png",size:32},descripcion:"La mejor fuente de im\xe1genes y videos gratis. Todas son registradas en el dominio p\xfablico luego son gratuitas para uso comercial.",idioma:"ES",tipo:"informatica"},{id:7,nombre:"virustotal",url:"https://www.virustotal.com/es/",icono:{url:"https://virustotalcloud.appspot.com/static/img/favicon.ico",size:16},descripcion:"Servicio de escaneo de virus, malware y URL online.",idioma:"ES",tipo:"informatica"},{id:9,nombre:"iconspedia",url:"https://www.iconspedia.com/",icono:{url:"https://duin9q2mqqbim.cloudfront.net/common/images/favicon.ico",size:32},descripcion:"Selecci\xf3n de iconos GRATUITOS para usar en tus p\xe1ginas webs, apps...",idioma:"EN",tipo:"informatica"},{id:12,nombre:"Hacker News",url:"https://news.ycombinator.com/",icono:{url:"https://news.ycombinator.com/favicon.ico",size:32},descripcion:"Sitio web de noticias que se centra en la inform\xe1tica y el esp\xedritu empresarial.",idioma:"EN",tipo:"informatica"},{id:17,nombre:"CodinGame",url:"https://www.codingame.com/",icono:{url:"https://static.codingame.com/assets/favicon_32_32.3e3c075c.png",size:32},descripcion:"Plataforma en l\xednea para desarrolladores que te permite jugar con la programaci\xf3n con rompecabezas cada vez m\xe1s dif\xedciles.",idioma:"EN",tipo:"informatica"},{id:18,nombre:"bigml",url:"https://bigml.com/",icono:{url:"https://static.bigml.com/static/favicon.ico?v=2",size:32},descripcion:"Plataforma l\xedder de Machine Learning.",idioma:"EN",tipo:"informatica"},{id:22,nombre:"Sejda",url:"https://www.sejda.com/es",icono:{url:"https://www.sejda.com/images/icon_128.png",size:32},descripcion:"Editor online de archivos en formato PDF.",idioma:"ES",tipo:"informatica"},{id:27,nombre:"Ciberseguridad",url:"https://ciberseguridad.blog/",icono:{url:"https://ciberseguridad.blog/favicon.ico",size:32},descripcion:"Blog de ciberseguridad.",idioma:"ES",tipo:"informatica"},{id:28,nombre:"bestofjs",url:"https://bestofjs.org/",icono:{url:"https://bestofjs.org/favicon.ico",size:32},descripcion:"El lugar donde encontrar los mejores proyectos open-source de JS, HTML y CSS y los frameworks m\xe1s populares.",idioma:"EN",tipo:"informatica"},{id:29,nombre:"Hetzner",url:"https://www.hetzner.com/",icono:{url:"https://www.hetzner.com/themes/hetzner/images/favicons/favicon-32x32.png",size:32},descripcion:"Cloud, web hosting, servidores dedicados...",idioma:"EN",tipo:"informatica"},{id:36,nombre:"Tiobe",url:"https://www.tiobe.com/tiobe-index/",icono:{url:"https://www.tiobe.com/images/tiobe.ico",size:32},descripcion:"Indicador de la popularidad de los lenguajes de programaci\xf3n.",idioma:"EN",tipo:"informatica"},{id:37,nombre:"egghead",url:"https://egghead.io/",icono:{url:"https://egghead.io/favicon.ico?v=2",size:32},descripcion:"V\xeddeo cursos para aprender las mejores herramientas y frameworks de JavaScript.",idioma:"EN",tipo:"informatica"},{id:40,nombre:"Cults.",url:"https://cults3d.com/es",icono:{url:"https://assets.cults3d.com/assets/favicons/cults-8b86bca460ece165f3132f09fb73eadb48db60a34b7440caf6a8dbea60d43d26.ico",size:32},descripcion:"Descubre y descarga los mejores modelos 3D para tu impresora 3D.",idioma:"ES",tipo:"informatica"},{id:43,nombre:"web.dev",url:"https://web.dev/",icono:{url:"https://www.gstatic.com/devrel-devsite/va3924c39307739d800f82408fea31f63e5aecef014afe52ca8e18e5929f28833/web/images/favicon@2x.png",size:32},descripcion:"Ayuda a los desarrolladores a aprender y aplicar las capacidades modernas de las webs para sus propios sitios y aplicaciones.",idioma:"EN",tipo:"informatica"},{id:44,nombre:"regex101",url:"https://regex101.com/",icono:{url:"https://regex101.com/static/assets/favicon-32x32.png",size:32},descripcion:"Editor online para probar expresiones regulares.",idioma:"EN",tipo:"informatica"},{id:45,nombre:"Kaggle",url:"https://www.kaggle.com/",icono:{url:"https://www.kaggle.com/static/images/favicon.ico",size:32},descripcion:"Comunidad en l\xednea de Data Science y Machine Learning.",idioma:"EN",tipo:"informatica"},{id:53,nombre:"ahrefsblog",url:"https://ahrefs.com/blog/google-advanced-search-operators/",icono:{url:"https://cdn.ahrefs.com/favicon.ico?20190204-000",size:32},descripcion:"Post muy interesante sobre los operadores avanzados de b\xfasqueda en Google.",idioma:"EN",tipo:"informatica"},{id:31,nombre:"Root",url:"https://root.cern.ch/",icono:{url:"https://d35c7d8c.web.cern.ch/sites/d35c7d8c.web.cern.ch/files/favicon6.ico",size:16},descripcion:"Herramienta de software cient\xedfico modular. Big data, an\xe1lisis estad\xedstico...",idioma:"EN",tipo:"ciencia"},{id:34,nombre:"FamiLinx",url:"http://familinx.org/index.html",icono:{url:"http://familinx.org/img/familinx.jpg",size:32},descripcion:"Recurso cient\xedfico de informaci\xf3n geneal\xf3gica y demogr\xe1fica de 10 millones de personas de los \xfaltimos 500 a\xf1os.",idioma:"EN",tipo:"ciencia"},{id:35,nombre:"DNA Land",url:"https://dna.land/",icono:{url:"https://dna.land/static/splash/img/dna-land/logo-large.png",size:32},descripcion:"Aprende mas sobre tu ADN y contribuye a una importante b\xfasqueda cient\xedfica.",idioma:"EN",tipo:"ciencia"},{id:55,nombre:"LED Center",url:"http://led.linear1.org/",icono:{url:"http://led.linear1.org/i/closeup.jpg",size:32},descripcion:"Un buen recurso para la gente interesada en los LEDs.",idioma:"EN",tipo:"ciencia"},{id:52,nombre:"Open source radio telescopes",url:"http://opensourceradiotelescopes.org/",icono:{url:"https://i1.wp.com/opensourceradiotelescopes.org/wp-content/uploads/2017/03/cropped-OSRTpic.png?fit=32%2C32",size:32},descripcion:"Base de datos y centro de colaboraci\xf3n para la construcci\xf3n de radio telescopios astron\xf3micos a cualquier nivel.",idioma:"EN",tipo:"ciencia"},{id:21,nombre:"idealo",url:"https://www.idealo.es/",icono:{url:"https://cdn.idealo.com/storage/ipc/favicon.ico",size:32},descripcion:"Comparador de precios y ofertas online.",idioma:"ES",tipo:"compras"},{id:23,nombre:"Chollometro",url:"https://www.chollometro.com/",icono:{url:"https://www.chollometro.com/favicon.ico",size:32},descripcion:"Comunidad donde publicar los chollos que vas encontrando o los que encuentran otros. No te pierdas ni una buena oferta.",idioma:"ES",tipo:"compras"},{id:10,nombre:"pcs",url:"https://www.procyclingstats.com/",icono:{url:"https://www.procyclingstats.com/images/favicons/apple-icon-57x57.png",size:32},descripcion:"Base de datos sobre ciclismo. Todos los n\xfameros que tienes que saber.",idioma:"EN",tipo:"deportes"},{id:33,nombre:"Toolbox from Strava",url:"https://www.marcellobrivio.com/projects/strava-toolbox/",icono:{url:"https://www.marcellobrivio.com/projects/strava-toolbox/img/favicon-32x32.png?v=5AAJppeRmM",size:32},descripcion:"Crea una clasificaci\xf3n de distintas categor\xedas con los usuarios de Strava. Compara tu actividad con el resto de usuarios.",idioma:"EN",tipo:"deportes"},{id:39,nombre:"Football club Elo",url:"http://clubelo.com/",icono:{url:"http://clubelo.com/favicon.png",size:32},descripcion:"Estad\xedsticas de f\xfatbol.",idioma:"EN",tipo:"deportes"},{id:16,nombre:"lmgtfy",url:"http://es.lmgtfy.com/",icono:{url:"http://es.lmgtfy.com/favicon-32x32.png",size:32},descripcion:"\xbfHarto de buscar en Google las preguntas que tus amigos te hacen y que ellos mismos tendr\xedan que hacerle al famoso buscador en lugar de a ti? Este es el sitio perfecto para ense\xf1arles c\xf3mo se hace.",idioma:"ES",tipo:"entretenimiento"},{id:25,nombre:"Classic reload",url:"https://classicreload.com/",icono:{url:"https://classicreload.com/sites/default/files/favicon.ico",size:16},descripcion:"Juegos online de SEGA, MS-DOS, Amiga...",idioma:"EN",tipo:"entretenimiento"},{id:26,nombre:"MuySencillo",url:"https://www.muysencillo.com/",icono:{url:"https://www.muysencillo.com/wp-content/uploads/2015/05/favicon-muysencillo.png",size:32},descripcion:"Sitio web que te muestra distintos 'Life kacks'.",idioma:"ES",tipo:"entretenimiento"},{id:48,nombre:"Gemioli",url:"https://gemioli.com/",icono:{url:"https://gemioli.com/favicon-32x32.png",size:32},descripcion:"Desarrollador de videojuegos web. Juega con ellos en el navegador.",idioma:"EN",tipo:"entretenimiento"},{id:50,nombre:"Meetup",url:"https://www.meetup.com/es-ES/",icono:{url:"https://www.meetup.com/mu_static/es-ES/favicon.a6878039.ico",size:32},descripcion:"Queda con gente cercana a ti y con tus mismos gustos.",idioma:"ES",tipo:"entretenimiento"},{id:51,nombre:"archive",url:"https://archive.org/",icono:{url:"https://archive.org/images/glogo.jpg",size:32},descripcion:"Biblioteca sin \xe1nimo de lucro de millones de libros, pel\xedculas, software, m\xfasica, webs...",idioma:"EN",tipo:"entretenimiento"},{id:30,nombre:"Novatos trading club",url:"https://www.novatostradingclub.com/",icono:{url:"https://www.novatostradingclub.com/wp-content/uploads/2016/08/xfavicon.png.pagespeed.ic.NzduhdcTzn.webp",size:32},descripcion:"Comunidad en la que aprender sobre trading e inversiones.",idioma:"ES",tipo:"economia"}]}},85:function(e,o,i){e.exports=i(215)},90:function(e,o,i){},92:function(e,o,i){},94:function(e,o,i){}},[[85,2,1]]]);
//# sourceMappingURL=main.078719d4.chunk.js.map