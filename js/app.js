(function(){
'use strict';
var IMG={
 "recepcion": "img/recepcion.jpg",
 "refracto": "img/refracto.jpg",
 "enologo": "img/enologo.jpg",
 "bar": "img/bar.jpg",
 "cajas": "img/cajas.jpg",
 "lab": "img/lab.jpg",
 "camion": "img/camion.jpg",
 "brindis": "img/brindis.jpg",
 "uvas1": "img/uvas1.jpg",
 "racimo": "img/racimo.jpg",
 "uvas3": "img/uvas3.jpg",
 "logo": "img/logo.png",
 "botella": "img/botella.jpg",
 "dorado": "img/dorado.jpg",
 "tanques": "img/tanques.jpg",
 "prensa": "img/prensa.jpg",
 "vina": "img/vina.jpg",
 "manos": "img/manos.jpg",
 "embot": "img/embot.jpg"
};
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function li(a){return '<li><b>'+a[0]+'</b> '+a[1]+'</li>'}
function fmt(n){return Math.round(n).toLocaleString('es-CO')}
var CAP={logo:'Logo de Purple Haze',botella:'Botella de vino tinto joven con uvas y copas',dorado:'Vino blanco joven en botella de vidrio con uvas verdes',tanques:'Tanques de acero inoxidable con camisa de frío (imagen de referencia)',prensa:'Prensa de uva tradicional (imagen de referencia)',vina:'Racimos de uva en el viñedo',manos:'Viticultor sosteniendo uva recién cosechada',embot:'Línea de embotellado de vino',enologo:'Enólogo y equipo catando vino tinto',bar:'Bar y restaurante: el cliente final',cajas:'Cajas de vino listas para despacho',lab:'Laboratorio: análisis del vino antes de embotellar',camion:'Camión con uva llegando a recepción',brindis:'Brindis con vino tinto',uvas1:'Manos con uva oscura recién cosechada',racimo:'Racimo de uva madurando en la vid',uvas3:'Uvas verdes y moradas',recepcion:'Operarios descargando uva en la recepción de la bodega',refracto:'Medición del azúcar (°Brix) de la uva con un refractómetro'};
function hydrate(root){$$('img[data-img]',root).forEach(function(im){var k=im.dataset.img; if(IMG[k]) im.src=IMG[k]; if(!im.getAttribute('alt')) im.alt=CAP[k]||''})}

/* navegación y progreso */
var topEl=$('#top');
$$('[data-go]').forEach(function(a){a.addEventListener('click',function(e){
  var t=$(a.getAttribute('href')); if(!t) return; e.preventDefault();
  var y=Math.max(0,t.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||0)-56);
  try{window.scrollTo({top:y,left:0,behavior:'instant'})}catch(_){window.scrollTo(0,y)}
});});
function onScroll(){var h=document.documentElement.scrollHeight-innerHeight; topEl.style.setProperty('--p',h>0?Math.min(1,scrollY/h):0)}
addEventListener('scroll',onScroll,{passive:true}); onScroll();
var tabLinks=$$('.tabs a');
var secEls=$$('[data-sec]');
function setCur(id){tabLinks.forEach(function(a){a.setAttribute('aria-current',a.getAttribute('href')==='#'+id?'true':'false')})}
function updateCur(){
  var cur=secEls[0]&&secEls[0].id, mark=Math.min(160,innerHeight*.3);
  secEls.forEach(function(s){if(s.getBoundingClientRect().top<=mark) cur=s.id});
  if(innerHeight+(window.pageYOffset||0)>=document.documentElement.scrollHeight-4) cur=secEls[secEls.length-1].id;
  setCur(cur);
}
var tick=false;
addEventListener('scroll',function(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;updateCur()})},{passive:true}); addEventListener('resize',updateCur); updateCur();
tabLinks.forEach(function(a){a.addEventListener('click',function(){setCur(a.getAttribute('href').slice(1))})});

/* ---------- PUNTO 2 ---------- */
var SYS={
 entradas:{k:'Lo que entra',t:'Entradas',def:'Todo lo que el sistema recibe del entorno para poder funcionar: materia, energía, información, personas y dinero.',items:[
  ['Uva fresca','comprada a viticultores locales; se revisan °Brix y acidez al recibirla.'],
  ['Insumos enológicos','levaduras seleccionadas y sulfitos.'],
  ['Empaque','botellas de vidrio oscuro, corchos sintéticos, cápsulas y etiquetas.'],
  ['Agua tratada y energía','lavado y sanitización de la bodega; frío continuo en los tanques.'],
  ['Personas','enólogo en consultoría, operarios de bodega, equipo comercial y administrativo.'],
  ['Información','recetas enológicas estandarizadas, manuales BPM y criterios de aceptación de la uva.'],
  ['Capital','CAPEX en planta y maquinaria, sin comprar tierras, y OPEX para uva, empaques y nómina.']]},
 proceso:{k:'Lo que transforma',t:'Proceso',def:'El conjunto de actividades que convierte las entradas en salidas. En el modelo matemático es la función f de Y = f(X).',items:[
  ['1. Recepción y selección','se descartan racimos dañados y se mide el °Brix.'],
  ['2. Prensado','se extrae el mosto y se separan cáscaras y semillas.'],
  ['3. Fermentación','tanques con frío controlado; las levaduras convierten el azúcar en alcohol.'],
  ['4. Filtrado y clarificación','se retiran residuos y se agregan sulfitos; sin barrica.'],
  ['5. Embotellado y etiquetado','vidrio oscuro, corcho sintético y cápsula bajo BPM.'],
  ['Modelo','X son los kg de uva comprada y Y los litros de vino joven.']]},
 salidas:{k:'Lo que sale',t:'Salidas',def:'Lo que el sistema entrega al entorno. En Purple Haze la salida es el mismo objetivo, ya cumplido: lo que se quería lograr es lo que sale.',items:[
  ['Objetivo cumplido','Maximizar la eficiencia operativa y la rentabilidad financiera desde el primer año con vino joven de calidad.'],
  ['Vino joven','embotellado, filtrado, sellado y etiquetado: Moody Blues y Golden Experience.'],
  ['Subproducto','cáscaras y semillas que se venden a destilerías o se entregan a cooperativas agrícolas para compostaje.'],
  ['Servicios','logística y distribución, control de lotes, fichas de inocuidad y soporte comercial.'],
  ['Información','ingresos por ventas, pago de impuestos y reportes de trazabilidad.']]},
 objetivo:{k:'La razón de ser',t:'Objetivo',def:'Lo que el sistema quiere lograr. Se redacta con un verbo en infinitivo (-ar, -er, -ir), orienta su diseño y permite medir si funciona.',items:[
  ['Objetivo','Maximizar la eficiencia operativa y la rentabilidad financiera desde el primer año con vino joven de calidad.'],
  ['Cómo','economía circular y rotación rápida: uvas seleccionadas de proveedores locales y solo vino joven en tanques de acero inoxidable.'],
  ['Resultado esperado','un ciclo de transformación corto y de alta calidad.']]},
 entorno:{k:'Lo que rodea',t:'Entorno',def:'Lo que está fuera del límite del sistema pero lo influye y es influido por él.',items:[
  ['Viticultores locales','determinan la oferta, el costo y los °Brix de la uva.'],
  ['INVIMA y DIAN','fijan el marco de inocuidad BPM y el régimen tributario de licores.'],
  ['Mercado','restaurantes, bares y distribuidores regionales con demanda variable; por eso los ciclos son flexibles, de 90 días.'],
  ['Límite','dentro está lo que Purple Haze controla (planta, personal, recetas, inventario y compras); fuera está lo que la influye pero no controla (viticultores, mercado, INVIMA y DIAN).']]},
 retro:{k:'Lo que regresa',t:'Retroalimentación',def:'Información sobre las salidas que vuelve al sistema para corregirlo (equilibrio) o amplificarlo (refuerzo).',items:[
  ['Recepción','el °Brix medido decide si la uva se acepta o se rechaza antes de prensar.'],
  ['Fermentación','la temperatura del mosto activa o frena las camisas de frío.'],
  ['Laboratorio','el análisis previo al embotellado autoriza el filtrado final o corrige el lote.'],
  ['Mercado','ventas y pedidos orientan cuánta uva comprar en el siguiente ciclo de 90 días.'],
  ['Tipo','casi todas son de equilibrio: corrigen desvíos. La de ventas y capital se refuerza (punto 7).']]}
};
var RC={entradas:'var(--vine)',proceso:'var(--wine-t)',salidas:'var(--gold)',objetivo:'var(--violet)',entorno:'var(--slate)',retro:'var(--copper)'};
var ORDER=['entorno','objetivo','entradas','proceso','salidas','retro'];
var SF={
 entradas:[['camion','Uva fresca de viticultores locales llegando a recepción']],
 proceso:[['tanques','Fermentación en tanques con camisa de frío (imagen de referencia)']],
 salidas:[['botella','Moody Blues'],['dorado','Golden Experience']],
 objetivo:[['uvas3','Vino joven de calidad desde el primer año']],
 entorno:[['vina','Los viticultores locales son parte del entorno']],
 retro:[['lab','El análisis de laboratorio previo al embotellado cierra el control']]
};
function sdFig(k){
  var a=SF[k], two=a.length>1;
  $('#sd-fig').innerHTML=a.map(function(x){return '<figure class="fig"><div class="ph" style="--ar:'+(two?'1/1':'4/3')+'"><img data-img="'+x[0]+'" alt="'+CAP[x[0]]+'"></div><figcaption>'+x[1]+'</figcaption></figure>'}).join('');
  hydrate($('#sd-fig'));
}
function selSys(k){
  var d=SYS[k]; if(!d) return;
  $$('#sysmap [data-key]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.key===k))});
  $('#sys-detail').style.setProperty('--rc',RC[k]); $('#sd-k').textContent=d.k; $('#sd-t').textContent=d.t; $('#sd-def').textContent=d.def;
  $('#sd-list').innerHTML=d.items.map(li).join(''); sdFig(k);
}
var tourT=null,tourI=0,tourBtn=$('#tour');
function tourStop(){ if(tourT){clearInterval(tourT);tourT=null} tourBtn.textContent='Recorrer el sistema'; tourBtn.setAttribute('aria-pressed','false'); }
function tourStep(){ selSys(ORDER[tourI%ORDER.length]); tourI++; }
tourBtn.addEventListener('click',function(){
  if(tourT){tourStop();return}
  tourBtn.textContent='Pausar recorrido'; tourBtn.setAttribute('aria-pressed','true'); tourStep(); tourT=setInterval(tourStep,3400);
});
$$('#sysmap [data-key]').forEach(function(b){b.addEventListener('click',function(){tourStop();selSys(b.dataset.key)})});
selSys('proceso');
var IC={
 uva:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7.5" cy="9" r="2.3"/><circle cx="12" cy="9" r="2.3"/><circle cx="16.5" cy="9" r="2.3"/><circle cx="9.7" cy="13.4" r="2.3"/><circle cx="14.3" cy="13.4" r="2.3"/><circle cx="12" cy="17.8" r="2.3"/><path d="M12 6.7V3.5M12 4.5c2-1.3 4-1.1 5.2 0"/></svg>',
 prensa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="3" width="12" height="3.5" rx="1"/><path d="M12 6.5V12"/><rect x="4" y="12" width="16" height="3.5" rx="1"/><path d="M6 15.5V21h12v-5.5"/></svg>',
 tanque:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="12" height="13" rx="3"/><path d="M6 9h12M9 17v3.5M15 17v3.5"/><circle cx="10.5" cy="12.5" r=".7"/><circle cx="13.5" cy="14.5" r=".7"/></svg>',
 filtro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16l-6 7.2V19l-4 2v-8.8z"/></svg>',
 botella:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3h4v4.2c0 1.2 2 2.2 2 4.3V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-8.5c0-2.1 2-3.1 2-4.3z"/><path d="M8 14.5h8"/></svg>'
};
var ST=[['uva','Recepción','Recepción y selección','var(--vine)'],['prensa','Prensado','Prensado','var(--wine-t)'],['tanque','Fermentación','Fermentación','var(--wine-t)'],['filtro','Filtrado','Filtrado y clarificación','var(--wine-t)'],['botella','Embotellado','Embotellado y etiquetado','var(--gold)']];
var RP={uva:'camion',prensa:'prensa',tanque:'tanques',filtro:null,botella:'embot'};
$('#route').innerHTML=ST.map(function(x){return '<li><span class="badge'+(RP[x[0]]?'':' ico')+'">'+(RP[x[0]]?'<img data-img="'+RP[x[0]]+'" alt="'+x[1]+'">':IC[x[0]])+'</span><span>'+x[1]+'</span></li>'}).join('');
hydrate($('#route'));
$('.stages').innerHTML=ST.map(function(x){return '<li>'+IC[x[0]]+x[2]+'</li>'}).join('');

/* ---------- PUNTO 3 ---------- */
var BL=[
 {n:1,t:'Estructuras estáticas',r:'present',cl:'Armazones y mapas: un edificio, un esqueleto, la tabla periódica.',ph:'La bodega como estructura: la distribución de tanques, prensa y embotelladora, y el plano de la planta.'},
 {n:2,t:'Sistemas dinámicos simples',r:'present',cl:'Movimientos predecibles, como un reloj o una máquina.',ph:'La prensa, las bombas y la línea de embotellado: repiten movimientos programados sin decidir nada.'},
 {n:3,t:'Sistemas cibernéticos',r:'core',cl:'Se autorregulan hacia una meta mediante retroalimentación, como un termostato.',ph:'Las camisas de frío regulan la temperatura del mosto, el °Brix se controla al recibir la uva y el laboratorio valida antes de embotellar.'},
 {n:4,t:'Sistemas abiertos',r:'core',cl:'Intercambian materia, energía e información con el entorno y se mantienen así, como una célula.',ph:'Recibe uva, insumos, energía y capital; entrega vino joven, subproductos y servicios; depende de las normas y del mercado.'},
 {n:5,t:'Genético-societal',r:'present',cl:'Seres vivos con partes especializadas, como las plantas.',ph:'La vid del viticultor que da la uva y las levaduras que fermentan: organismos vivos que trabajan dentro del proceso.'},
 {n:6,t:'Sistemas animales',r:'none',cl:'Movilidad, receptores especializados y una imagen del entorno.',ph:'No hay animales en el sistema. Este nivel solo aparece como parte del nivel humano, que los incluye.'},
 {n:7,t:'Sistemas humanos',r:'core',cl:'Autoconciencia, lenguaje y capacidad de interpretar el entorno.',ph:'El enólogo supervisa la receta y decide ajustes, los operarios manejan tanques y embotellado, y el equipo comercial negocia compras y ventas.'},
 {n:8,t:'Organizaciones sociales',r:'core',cl:'Personas con roles, comunicación y valores comunes, como una empresa.',ph:'Purple Haze como organización: roles definidos, protocolos BPM y relaciones con viticultores, restaurantes, bares y entidades reguladoras.'},
 {n:9,t:'Sistemas trascendentales',r:'ref',cl:'Las preguntas últimas, el sentido y lo que no se puede conocer del todo.',ph:'Nivel de reflexión, no operativo: preguntas de fondo que cualquier empresa puede hacerse, como para qué produce vino joven y qué valores quiere que transmita la marca.'}
];
var RL={core:'Núcleo',present:'Presente',none:'No aplica',ref:'Reflexivo'};
var RLL={core:'Nivel central del sistema',present:'Presente en el sistema',none:'Sin aplicación directa',ref:'Nivel de reflexión'};
var ladder=$('#ladder');
BL.slice().reverse().forEach(function(b){
  var btn=document.createElement('button'); btn.type='button'; btn.className='lv'; btn.dataset.n=b.n; btn.dataset.r=b.r; btn.setAttribute('aria-pressed','false');
  btn.style.setProperty('--w',(52+(b.n-1)*6)+'%');
  btn.innerHTML='<span class="n">'+b.n+'</span><span class="nm">'+b.t+'</span><span class="bd">'+RL[b.r]+'</span>';
  btn.addEventListener('click',function(){selB(b.n)});
  ladder.appendChild(btn);
});
var BF={1:'tanques',2:'prensa',3:'lab',4:'vina',5:'racimo',7:'enologo',8:'bar',9:'brindis'};
function selB(n){
  var b=BL[n-1];
  $$('.lv').forEach(function(x){x.setAttribute('aria-pressed',String(+x.dataset.n===n))});
  $('#b-detail').innerHTML=(BF[n]?'<figure class="fig" style="margin-bottom:14px"><div class="ph" style="--ar:16/9"><img data-img="'+BF[n]+'" alt="'+CAP[BF[n]]+'"></div></figure>':'')+'<p class="eyebrow">Nivel '+b.n+' de 9</p><h3>'+b.t+'</h3><span class="rel '+(b.r==='core'?'core':'')+'">'+RLL[b.r]+'</span><h4 style="margin-top:16px">Ejemplo clásico</h4><p>'+b.cl+'</p><h4>En Purple Haze</h4><p>'+b.ph+'</p>'; hydrate($('#b-detail'));
}
$('#b-focus').addEventListener('change',function(e){ladder.classList.toggle('focus',e.target.checked)});
selB(4);

/* ---------- PUNTO 4 ---------- */
var SP=[
 {t:'Concentración',d:'¿Los elementos están reunidos en un solo lugar o repartidos?',l:'Concentrado',r:'Disperso',x:20,w:'La producción ocurre en una sola planta: tanques, prensa y embotelladora comparten bodega. Lo disperso son los viticultores, que están en el entorno.'},
 {t:'Centralización',d:'¿Las decisiones se toman en un punto o en varios?',l:'Centralizado',r:'Descentralizado',x:24,w:'Las decisiones críticas pasan por el enólogo y el laboratorio: aceptar o rechazar uva, ajustar la fermentación y autorizar el embotellado.'},
 {t:'Resiliencia',d:'¿Puede absorber una perturbación y volver a funcionar?',l:'Resiliente',r:'Frágil',x:40,w:'Varios viticultores locales y un ciclo corto ayudan a recuperarse. Pero depende de uva fresca sin inventario y de pocas personas y equipos clave.'},
 {t:'Flexibilidad',d:'¿Puede cambiar su forma de operar cuando cambia el entorno?',l:'Rígido',r:'Flexible',x:64,w:'Los ciclos de 90 días permiten ajustar la compra y la producción a la demanda. La receta estandarizada y las BPM limitan las variaciones dentro de cada lote.'},
 {t:'Apertura',d:'¿Intercambia materia, energía e información con el entorno?',l:'Abierto',r:'Cerrado',x:10,w:'Recibe uva, insumos, energía y capital, y entrega vino, subproductos y servicios. Depende de las normas de higiene y del mercado.'},
 {t:'Complejidad',d:'¿Cuántos elementos tiene y cuánto se influyen entre sí?',l:'Simple',r:'Complejo',x:76,w:'Producción, organización y logística y toma de decisiones se afectan mutuamente. Si el proveedor entrega uva mala, cambian la fermentación, el filtrado y el vino final.'},
 {t:'Origen',d:'¿Lo crearon las personas o existe en la naturaleza?',l:'Artificial',r:'Natural',x:12,w:'Fue diseñado para producir y vender vino joven con rentabilidad. Se apoya en procesos naturales, como la fermentación.'},
 {t:'Estado',d:'¿Se mantiene estable o cambia en el tiempo?',l:'Estable',r:'Dinámico',x:62,w:'Dentro de un lote sigue una receta fija y es estable. A lo largo del año se adapta a la demanda y tiene temporadas altas y bajas de ventas.'}
];
var specs=$('#specs');
specs.innerHTML=SP.map(function(s){
  return '<div class="spec"><h3>'+s.t+'</h3><p class="d">'+s.d+'</p><div class="track" style="--x:'+s.x+'%"><span class="mk"></span></div><div class="ends"><span class="'+(s.x<45?'on':'')+'">'+s.l+'</span><span class="'+(s.x>55?'on':'')+'">'+s.r+'</span></div><p class="why">'+s.w+'</p></div>';
}).join('');
if('IntersectionObserver' in window && !reduce){
  var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io2.unobserve(e.target)}})},{threshold:.4});
  $$('.spec').forEach(function(s){io2.observe(s)});
}
var EV=[
 {t:'Uva con °Brix bajo',p:'Llega un lote de uva que no cumple el °Brix ni la acidez.',a:'Recepción lo mide y decide el rechazo antes de prensar. Se pide uva a otro viticultor local. La calidad queda protegida y el costo es un retraso corto.',m:[['Producción',70],['Calidad',92],['Caja',78]],v:'Resiliencia alta',c:'ok',n:'Hay control en la entrada y varios proveedores locales.'},
 {t:'Falla el frío',p:'Las camisas de frío dejan de enfriar en plena fermentación.',a:'El enólogo puede ajustar levadura y tiempos, pero sin frío la temperatura sube y el lote se arriesga. Es un punto único de falla.',m:[['Producción',45],['Calidad',35],['Caja',50]],v:'Resiliencia baja',c:'bad',n:'Conviene mantenimiento preventivo y un plan de respaldo para el frío.'},
 {t:'Sin enólogo',p:'El enólogo no está disponible durante una semana de fermentación.',a:'La receta estandarizada y los manuales BPM sostienen lo básico. Las decisiones de ajuste y de autorización esperan a que vuelva y se forma un cuello de botella.',m:[['Producción',62],['Calidad',60],['Caja',80]],v:'Resiliencia media',c:'mid',n:'Es la consecuencia de un sistema centralizado.'},
 {t:'Cae la demanda',p:'Bares y restaurantes piden menos vino durante un ciclo.',a:'El ciclo dura 90 días y no hay añejamiento, así que no queda vino inmovilizado por años. Se compra menos uva en el siguiente ciclo y se busca otro canal.',m:[['Producción',85],['Calidad',92],['Caja',58]],v:'Resiliencia alta',c:'ok',n:'La flexibilidad del ciclo corto absorbe el golpe.'}
];
var evBox=$('#events');
EV.forEach(function(e,i){
  var b=document.createElement('button'); b.type='button'; b.className='ev'; b.textContent=e.t; b.setAttribute('aria-pressed','false');
  b.addEventListener('click',function(){selEv(i)}); evBox.appendChild(b);
});
var EVF=['uvas1','tanques','enologo','bar'];
function selEv(i){
  var e=EV[i];
  $$('.ev').forEach(function(b,j){b.setAttribute('aria-pressed',String(j===i))});
  $('#res').innerHTML='<div><figure class="fig" style="margin-bottom:14px"><div class="ph" style="--ar:21/9"><img data-img="'+EVF[i]+'" alt="'+CAP[EVF[i]]+'"></div></figure><p class="eyebrow">Qué pasa</p><p style="margin:6px 0 14px">'+e.p+'</p><h4>Cómo responde el sistema</h4><p>'+e.a+'</p></div><div><h4>Efecto sobre el sistema</h4>'+
    e.m.map(function(m){return '<div class="meter"><span>'+m[0]+'</span><div class="bar"><i style="--v:'+m[1]+'%"></i></div></div>'}).join('')+
    '<span class="verdict '+e.c+'">'+e.v+'</span><p class="hint" style="margin-top:8px">'+e.n+' Valoración cualitativa del equipo, no es una medición.</p></div>'; hydrate($('#res'));
}
selEv(0);

/* ---------- PUNTO 5 ---------- */
var K={ideal:.70,meta:1200,precio:38000,costoOp:22000,botL:.75,margen:.20};
var DEF={kg:2000,r:.62,pu:5000,v:90};
function setSl(o){ $('#s-kg').value=o.kg; $('#s-r').value=o.r; $('#s-pu').value=o.pu; $('#s-v').value=o.v; calc(); }
function ring(id,pct){
  var p=Math.max(0,Math.min(100,pct)), st=p>=95?'ok':(p>=70?'mid':'bad');
  var c=$('#rg-'+id); c.setAttribute('stroke-dasharray',p+' '+(100-p)); c.dataset.st=st; $('#rt-'+id).textContent=Math.round(p)+'%';
}
function calc(){
  var kg=+$('#s-kg').value, r=+$('#s-r').value, pu=+$('#s-pu').value, v=+$('#s-v').value/100;
  var L=kg*r, bot=L/K.botL, costo=kg*pu+bot*K.costoOp, ing=bot*v*K.precio;
  var mg=ing>0?(ing-costo)/ing:-1;
  var ef=Math.min(r/K.ideal,1)*100, ec=Math.min(L/K.meta,1)*100, et=Math.max(0,Math.min(mg/K.margen,1))*100;
  $('#v-kg').textContent=fmt(kg)+' kg'; $('#v-r').textContent=r.toFixed(2).replace('.',',')+' L por kg'; $('#v-pu').textContent='$'+fmt(pu)+' por kg'; $('#v-v').textContent=Math.round(v*100)+' %';
  ring('ef',ef); ring('ec',ec); ring('et',et);
  $('#cp-ef').textContent= ef>=90?'Aprovecha la uva casi al máximo.':(ef>=75?'Hay merma: revisar selección y prensado.':'Mucha merma: se pierde uva antes de llegar al tanque.');
  $('#cp-ec').textContent= L>=K.meta?'Meta de 1.200 L cumplida.':'Faltan '+fmt(K.meta-L)+' L para la meta del ciclo.';
  $('#cp-et').textContent= mg>=K.margen?'Margen de '+Math.round(mg*100)+' %: alcanza o supera la referencia de 20 %.':(mg>0?'Margen de '+Math.round(mg*100)+' %, por debajo de la referencia de 20 %.':'Se pierde dinero: margen de '+Math.round(mg*100)+' %.');
  $('#o-L').textContent=fmt(L); $('#o-b').textContent=fmt(bot); $('#o-c').textContent='$'+fmt(costo/bot); $('#o-m').textContent=Math.round(mg*100)+' %';
}
['#s-kg','#s-r','#s-pu','#s-v'].forEach(function(s){$(s).addEventListener('input',calc)});
$('#pr-pos').addEventListener('click',function(){setSl({kg:2000,r:.68,pu:5000,v:98})});
$('#pr-neg').addEventListener('click',function(){setSl({kg:2000,r:.50,pu:6500,v:70})});
$('#pr-def').addEventListener('click',function(){setSl(DEF)});
calc();
var CASES=[
 {t:'Eficiencia',pos:{h:'Producción',p:'La selección en recepción y un prensado sin desperdicio dejan casi toda la uva como mosto. El rendimiento sube de 0,62 a 0,68 L por kg con los mismos kg comprados.',i:'Indicador: litros por kg de uva'},
  neg:{h:'Economía',p:'El lote rinde mucho, pero se pagó uva más cara y se encendió el frío de más. Cada botella cuesta más de lo que el mercado paga: se produjo bien en lo técnico y mal en el gasto.',i:'Indicador: costo por botella'}},
 {t:'Eficacia',pos:{h:'Producción',p:'Se embotella la meta del ciclo, 1.200 L, dentro de los 90 días y con los pedidos acordados.',i:'Indicador: litros producidos ÷ meta'},
  neg:{h:'Economía',p:'Se rechaza uva en recepción y faltan litros para cubrir los pedidos acordados. Se pierden ventas y la meta del ciclo no se cumple.',i:'Indicador: pedidos cumplidos'}},
 {t:'Efectividad',pos:{h:'Producción',p:'Se produce el volumen planeado, con la calidad prometida, y se vende casi todo. Se logra la rentabilidad del primer año con los recursos previstos.',i:'Indicador: margen frente a la referencia de 20 %'},
  neg:{h:'Economía',p:'Se produjo bien y a tiempo, pero la demanda de bares y restaurantes cae. El vino queda en bodega, se inmoviliza el capital y no se logra la rentabilidad.',i:'Indicador: margen frente a la referencia de 20 %'}}
];
$('#cases').innerHTML=CASES.map(function(c){
  function card(k,o,sg,lab){return '<div class="case '+k+'"><div class="h"><span class="sg" aria-hidden="true">'+sg+'</span><span>'+lab+' · '+o.h+'</span></div><p>'+o.p+'</p><p class="ind">'+o.i+'</p></div>'}
  return '<div class="case-row"><h3>'+c.t+'</h3>'+card('pos',c.pos,'+','Positivo')+card('neg',c.neg,'−','Negativo')+'</div>';
}).join('');

/* ---------- PUNTO 6 ---------- */
var FAL=[
 {n:'Post hoc ergo propter hoc',s:'Después de esto, por lo tanto a consecuencia de esto',def:'Ocurre cuando se asume que, porque un evento sucedió después de otro, el primero fue necesariamente la causa del segundo únicamente por orden temporal.',ex:'El lunes se cambió la levadura y el viernes el lote salió mejor. Se concluye que la levadura mejoró el vino, sin revisar el °Brix de la uva ni la temperatura de ese tanque.',fix:'Buscar explicaciones alternativas: cambiar una sola variable a la vez, registrar °Brix, temperatura y lote, y comparar con un lote que siga la receta anterior (grupo de control).'},
 {n:'Cum hoc ergo propter hoc',s:'Correlación no implica causalidad',def:'Consiste en asumir que la asociación estadística entre dos fenómenos demuestra una relación de causa y efecto directa, pasando por alto otras interpretaciones.',ex:'Los meses con más botellas vendidas son también los meses con más reclamos de clientes. Se concluye que vender más empeora el vino, pero solo se midió que las dos cosas ocurren a la vez.',fix:'Verificar el mecanismo causal: ¿cómo exactamente vender más dañaría el vino? Comprobar si la relación se repite en otros ciclos y, si es posible, probarla con un lote de control.'},
 {n:'Causa común o variable omitida',s:'Una tercera variable mueve a las dos',def:'Se presenta cuando dos variables están correlacionadas, pero no porque una cause a la otra, sino porque ambas son provocadas por un tercer factor subyacente.',ex:'Los lotes con más uva rechazada tienen más reclamos de clientes. El culpable no es el rechazo: ambos dependen del proveedor y del clima de esa cosecha.',fix:'Buscar variables ocultas: separar los datos por proveedor, cosecha y lote antes de sacar conclusiones.'},
 {n:'Causa simple',s:'Sobresimplificación: un solo culpable',def:'Ocurre cuando se reduce un problema o fenómeno complejo a una sola causa, ignorando que la realidad suele ser multifactorial.',ex:'Un lote salió con defectos y se culpa al operario de turno. También influyen la uva, la temperatura, la levadura, la higiene y los tiempos.',fix:'Dibujar el diagrama causal completo y revisar todas las variables antes de asignar responsabilidades.'}
];
var fl=$('#fl');
FAL.forEach(function(f,i){
  var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-pressed','false');
  b.innerHTML='<strong>'+f.n+'</strong><span>'+f.s+'</span>'; b.addEventListener('click',function(){selF(i)}); fl.appendChild(b);
});
function selF(i){
  var f=FAL[i];
  $$('#fl button').forEach(function(b,j){b.setAttribute('aria-pressed',String(i===j))});
  $('#fd').innerHTML='<p class="eyebrow">Falacia '+(i+1)+' de '+FAL.length+'</p><h3>'+f.n+'</h3><h4>Qué es</h4><p>'+f.def+'</p><h4>En Purple Haze</h4><p>'+f.ex+'</p><h4>Cómo evitarla</h4><p>'+f.fix+'</p>';
}
selF(0);
/* ---------- PUNTO 7 ---------- */
var LOOPS=[
 {id:'R1',name:'Calidad y ventas',nodes:[['Calidad','del vino'],['Reputación','de la marca'],['Ventas','pedidos'],['Capital','para uva buena']],signs:[1,1,1,1],delay:-1,
   q1:'Registrar en cada ciclo los °Brix y la acidez de cada lote, los pedidos de bares y restaurantes y sus comentarios. Con eso sabemos si el círculo de calidad y ventas está subiendo o bajando.',
   q2:'Si la calidad se traduce en más pedidos, reinvertimos esa ganancia en mejor uva y más control. Si la calidad cae, usamos la alerta para cortar el círculo antes de que baje la reputación.',
   q3:['Reinvertir parte de las ventas en uva con mejor °Brix y en control de calidad.','Rechazar en recepción la uva fuera de norma: es el freno del lado vicioso.','Ponerle techo: crecer solo hasta lo que permiten los tanques y la demanda local.']},
 {id:'B1',name:'Temperatura en fermentación',nodes:[['Temperatura','del mosto'],['Desviación','frente a la receta'],['Refrigeración','camisas de frío']],signs:[1,1,-1],delay:-1,
   q1:'Medir la temperatura de cada tanque con frecuencia y compararla con la que fija la receta. La diferencia es la información que activa la corrección.',
   q2:'Cada desviación activa las camisas de frío. Si un tanque se desvía seguido, se revisa el equipo y se ajusta con el enólogo el plan de fermentación.',
   q3:['Termómetros confiables y lectura frecuente en cada tanque.','Mantenimiento preventivo de las camisas de frío para no perder la capacidad de corregir.','Temperatura objetivo escrita en la receta, con el enólogo decidiendo los ajustes.']},
 {id:'B2',name:'Inventario y producción',nodes:[['Inventario','de vino joven'],['Brecha','frente a la meta'],['Producción','compra de uva']],signs:[-1,1,1],delay:2,
   q1:'Contar el inventario de vino joven y los pedidos de bares y restaurantes, y compararlos con la meta del ciclo. La brecha dice cuánta uva comprar.',
   q2:'La brecha ajusta la compra de uva del siguiente ciclo. Como lo que se compra hoy será vino en 90 días, la corrección llega con retardo y por eso se decide con anticipación.',
   q3:['Planificar con 90 días de anticipación.','Producir solo vino joven, sin añejamiento, para acortar el retardo.','No sobrecorregir: no comprar uva de más por un faltante de hoy; usar los pedidos como señal.']}
];
var GEN={
 R:['Es un círculo que se amplifica solo: cada vuelta aumenta el cambio.','Si va a favor (virtuoso), alimentarlo y ponerle un techo realista.','Si va en contra (vicioso), cortarlo pronto en el eslabón más débil.'],
 B:['Es un círculo que busca una meta y corrige desvíos.','Tener una meta clara y medirla con datos confiables.','Darle capacidad de corrección al actuador y reducir el retardo. Con retardo largo, no sobrecorregir.']
};
var cur={i:0,signs:LOOPS[0].signs.slice()};
var segBox=$('#seg');
LOOPS.forEach(function(L,i){
  var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-pressed','false');
  b.dataset.t=L.id.charAt(0); b.innerHTML='<b>'+L.id+'</b><span>'+L.name+'</span>'; b.addEventListener('click',function(){cur={i:i,signs:L.signs.slice()};drawLoop()}); segBox.appendChild(b);
});
function edge(P,C,w,h){
  var dx=C.x-P.x, dy=C.y-P.y, sx=dx?(w/2+7)/Math.abs(dx):1e9, sy=dy?(h/2+7)/Math.abs(dy):1e9, s=Math.min(sx,sy);
  return {x:P.x+dx*s,y:P.y+dy*s};
}
var LF={R1:'manos',B1:'tanques',B2:'cajas'};
function drawLoop(){
  var L=LOOPS[cur.i], n=L.nodes.length, W=156, H=54, cx=280, cy=190;
  var ang=n===4?[-90,0,90,180]:[-90,30,150];
  var P=ang.map(function(a){return {x:cx+190*Math.cos(a*Math.PI/180),y:cy+120*Math.sin(a*Math.PI/180)}});
  $$('#seg button').forEach(function(b,j){b.setAttribute('aria-pressed',String(j===cur.i))});
  var links='',signs='',dots='',delay='';
  for(var i=0;i<n;i++){
    var A=P[i],B=P[(i+1)%n],mx=(A.x+B.x)/2,my=(A.y+B.y)/2;
    var C={x:cx+(mx-cx)*1.5,y:cy+(my-cy)*1.5};
    var S=edge(A,C,W,H),E=edge(B,C,W,H);
    var d='M'+S.x.toFixed(1)+' '+S.y.toFixed(1)+' Q'+C.x.toFixed(1)+' '+C.y.toFixed(1)+' '+E.x.toFixed(1)+' '+E.y.toFixed(1);
    links+='<path class="lnk" d="'+d+'" marker-end="url(#ah)"/>';
    var m={x:.25*S.x+.5*C.x+.25*E.x,y:.25*S.y+.5*C.y+.25*E.y};
    var neg=cur.signs[i]<0;
    signs+='<g class="sgn '+(neg?'neg':'')+'" data-i="'+i+'" tabindex="0" role="button" aria-label="Enlace de '+L.nodes[i][0]+' a '+L.nodes[(i+1)%n][0]+': signo '+(neg?'negativo':'positivo')+'. Pulsa para cambiarlo"><circle cx="'+m.x.toFixed(1)+'" cy="'+m.y.toFixed(1)+'" r="16"/><text x="'+m.x.toFixed(1)+'" y="'+(m.y+1).toFixed(1)+'">'+(neg?'−':'+')+'</text></g>';
    if(!reduce){
      var T=(1/n),b0=(i*1.1).toFixed(2),du=(n*1.1).toFixed(2);
      dots+='<circle class="dot" r="4" opacity="0"><animateMotion dur="'+du+'s" begin="'+b0+'s" repeatCount="indefinite" path="'+d+'" keyPoints="0;1;1" keyTimes="0;'+T.toFixed(3)+';1" calcMode="linear"/><animate attributeName="opacity" dur="'+du+'s" begin="'+b0+'s" repeatCount="indefinite" values="1;1;0;0" keyTimes="0;'+(T-.01).toFixed(3)+';'+T.toFixed(3)+';1"/></circle>';
    }
    if(L.delay===i){
      var t=.25,q=1-t;
      var px=q*q*S.x+2*q*t*C.x+t*t*E.x, py=q*q*S.y+2*q*t*C.y+t*t*E.y;
      var tx=2*q*(C.x-S.x)+2*t*(E.x-C.x), ty=2*q*(C.y-S.y)+2*t*(E.y-C.y), tl=Math.hypot(tx,ty); tx/=tl; ty/=tl;
      var nx=-ty, ny=tx, out=((px-cx)*nx+(py-cy)*ny)>=0?1:-1; nx*=out; ny*=out;
      delay+='<line class="dly" x1="'+(px-tx*3.5-nx*10).toFixed(1)+'" y1="'+(py-ty*3.5-ny*10).toFixed(1)+'" x2="'+(px-tx*3.5+nx*10).toFixed(1)+'" y2="'+(py-ty*3.5+ny*10).toFixed(1)+'"/><line class="dly" x1="'+(px+tx*3.5-nx*10).toFixed(1)+'" y1="'+(py+ty*3.5-ny*10).toFixed(1)+'" x2="'+(px+tx*3.5+nx*10).toFixed(1)+'" y2="'+(py+ty*3.5+ny*10).toFixed(1)+'"/><text class="dly-t" x="'+(px+nx*26).toFixed(1)+'" y="'+(py+ny*26+4).toFixed(1)+'">retardo</text>';
    }
  }
  var nodes=P.map(function(p,i){
    var l=L.nodes[i];
    return '<g class="nd"><rect x="'+(p.x-W/2).toFixed(1)+'" y="'+(p.y-H/2).toFixed(1)+'" width="'+W+'" height="'+H+'" rx="5"/><text x="'+p.x.toFixed(1)+'" y="'+(p.y-9).toFixed(1)+'">'+l[0]+'</text><text class="s" x="'+p.x.toFixed(1)+'" y="'+(p.y+11).toFixed(1)+'">'+l[1]+'</text></g>';
  }).join('');
  var negN=cur.signs.filter(function(s){return s<0}).length, type=negN%2===0?'R':'B';
  var same=cur.signs.every(function(s,k){return s===L.signs[k]});
  var cid=same?L.id:type;
  $('#lp-svg').innerHTML='<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9 Z" style="fill:var(--faint)"/></marker></defs>'+links+delay+nodes+signs+dots+'<text class="ctr-id '+type+'" x="'+cx+'" y="'+(cy-6)+'">'+cid+'</text><text class="ctr-t" x="'+cx+'" y="'+(cy+24)+'">'+(type==='R'?'Refuerzo':'Equilibrio')+'</text>';
  $$('#lp-svg .sgn').forEach(function(g){
    var i=+g.dataset.i;
    g.addEventListener('click',function(){flip(i)});
    g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();flip(i)}});
    g.addEventListener('mouseenter',function(){readLink(i)});
    g.addEventListener('focus',function(){readLink(i)});
  });
  var im=$('#lp-img'); im.dataset.img=LF[L.id]; im.src=IMG[LF[L.id]]; im.alt=CAP[LF[L.id]];
  $('#lp-type').textContent=type==='R'?'Refuerzo (positivo)':'Equilibrio (negativo)';
  $('#lp-rule').textContent='Signos negativos: '+negN+' ('+(negN%2===0?'par':'impar')+'), así que el bucle es de '+(type==='R'?'refuerzo':'equilibrio')+'.';
  var q3=$('#lp-q3');
  if(same) q3.innerHTML='<div><span class="qn">1</span><h4>¿Qué haremos con esa información?</h4><p>'+L.q1+'</p></div><div><span class="qn">2</span><h4>¿Cómo usaremos la retroalimentación para mejorar los resultados?</h4><p>'+L.q2+'</p></div><div><span class="qn">3</span><h4>¿Qué estrategias tomaremos para mejorar los resultados iniciales?</h4><ul class="todo">'+L.q3.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul></div>';
  else q3.innerHTML='<p class="warn">Cambiaste signos: este diagrama ya no representa la situación de Purple Haze. Como regla general, un bucle de '+(type==='R'?'refuerzo se alimenta si va a favor y se corta pronto si va en contra':'equilibrio necesita una meta clara, datos confiables y capacidad de corregir')+'. Pulsa «Restablecer signos» para volver.</p>';
  drawCurve(type, same&&L.delay>=0);
}
function readLink(i){
  var L=LOOPS[cur.i], n=L.nodes.length, a=L.nodes[i].join(' '), b=L.nodes[(i+1)%n].join(' '), neg=cur.signs[i]<0;
  $('#lp-read').textContent='Si «'+a+'» sube, «'+b+'» '+(neg?'baja (signo −, sentido contrario).':'sube (signo +, mismo sentido).');
}
function flip(i){
  cur.signs[i]*=-1; drawLoop();
  var g=$('#lp-svg .sgn[data-i="'+i+'"]'); if(g){g.focus(); readLink(i)}
}
$('#lp-reset').addEventListener('click',function(){cur.signs=LOOPS[cur.i].signs.slice();drawLoop();$('#lp-read').textContent='Pulsa un signo (+ o −) para cambiarlo.'});
function drawCurve(type,delayed){
  var N=90,W=300,Hh=120,pl=6,pr=6,pt=8,pb=8;
  function X(t){return pl+t/N*(W-pl-pr)}
  function Y(v){return Hh-pb-Math.max(0,Math.min(1.1,v))*(Hh-pt-pb)/1.1}
  var s='<line class="ax" x1="'+pl+'" y1="'+(Hh-pb)+'" x2="'+(W-pr)+'" y2="'+(Hh-pb)+'"/><line class="ax" x1="'+pl+'" y1="'+pt+'" x2="'+pl+'" y2="'+(Hh-pb)+'"/>';
  var i,p1='',p2='',leg;
  if(type==='R'){
    var k=Math.log(1/.35)/N;
    for(i=0;i<=N;i++){p1+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(.35*Math.exp(k*i)).toFixed(1)+' '; p2+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(.35*Math.exp(-k*i*1.6)).toFixed(1)+' ';}
    s+='<path class="c2" d="'+p2+'"/><path class="c1 draw" pathLength="1" d="'+p1+'"/>';
    leg='<span><i style="color:var(--pos)"></i>A favor: sube sin parar</span><span><i style="color:var(--neg);border-top-style:dashed"></i>En contra: cae sin parar</span>';
  }else{
    var d=delayed?6:0,kk=delayed?.2:.15,G=.7,xs=[.12];
    for(i=0;i<N;i++){var lag=xs[Math.max(0,i-d)]; xs.push(xs[i]+kk*(G-lag));}
    for(i=0;i<=N;i++){p1+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(xs[i]).toFixed(1)+' ';}
    s+='<line class="goal-l" x1="'+pl+'" y1="'+Y(G).toFixed(1)+'" x2="'+(W-pr)+'" y2="'+Y(G).toFixed(1)+'"/><path class="c1 draw" pathLength="1" d="'+p1+'"/>';
    leg='<span><i style="color:var(--slate)"></i>'+(delayed?'Con retardo: oscila antes de asentarse':'Se acerca a la meta')+'</span><span><i style="color:var(--faint);border-top-style:dashed"></i>Meta</span>';
  }
  $('#lp-cv').setAttribute('class','cv '+type);
  $('#lp-cv').innerHTML=s;
  $('#lp-leg').innerHTML=leg+'<span>El tiempo avanza hacia la derecha</span>';
}
drawLoop();

/* ---------- EXTRA: ARQUETIPOS ---------- */
var ARQ=[
 {n:'Límites del crecimiento',en:'Limits to growth',img:'tanques',ar:'5/4',arm:'16/10',
  def:'Un proceso crece rápido impulsado por un factor positivo, pero ese mismo crecimiento choca con un límite (recursos, saturación, capacidad) que lo frena e incluso puede provocar un colapso.',
  story:['Los bares y restaurantes prueban el vino, les gusta y piden más.','Para cumplir, Purple Haze entrega más vino en cada ciclo de 90 días.','Los tanques y la uva de los viticultores locales son finitos: al llevarlos al tope se apura la fermentación o se acepta uva de menor °Brix.','La calidad baja, la reputación se resiente y el crecimiento se frena.'],
  sig:'Las ventas suben y, casi al mismo tiempo, aparecen más reclamos, lotes rechazados o entregas que se alargan.',
  act:['Identificar el límite antes de llegar a él: tanques y uva local.','Medir el uso de capacidad cada ciclo y fijar un tope de pedidos que se puedan atender con calidad.','Ampliar la capacidad (tanques y viticultores) con anticipación.'],
  loops:[['R','refuerzo','Crecimiento','más pedidos, más vino entregado, mejor reputación y otra vez más pedidos.'],['B','equilibrio','Límite','más vino entregado, más uso de la capacidad, baja la calidad, cae la reputación y se frenan los pedidos.']],
  lev:'Ampliar la capacidad antes de llegar al límite, en lugar de empujar más las ventas.'},
 {n:'Desplazamiento de la carga',en:'Shifting the burden',img:'recepcion',ar:'5/4',arm:'16/10',
  def:'Un problema de fondo se atiende con un parche sintomático en lugar de la solución fundamental, que es más lenta o difícil. Con el tiempo se pierde la capacidad de aplicar la solución de fondo y se crea dependencia del parche.',
  story:['Los pedidos de bares y restaurantes superan los litros que habrá en el ciclo: ese es el problema de fondo.','Parche: comprar uva de emergencia a cualquier proveedor, a veces sin revisar con el mismo cuidado el °Brix y la acidez.','De fondo: acordar volumen y calidad con los viticultores locales con 90 días de anticipación. Es más lento y exige visitas.','Mientras el parche funciona, nadie invierte en esos acuerdos: crece la dependencia, sube el costo de la uva y la calidad se vuelve irregular.'],
  sig:'La uva de emergencia ya se compra en casi todos los ciclos y no hay acuerdos de volumen con los viticultores.',
  act:['Dejar la compra de emergencia solo como excepción, con los mismos criterios de °Brix y acidez de recepción.','Acordar con 2 o 3 viticultores locales volumen, calidad y fechas con un ciclo de anticipación.','Medir qué porcentaje de la uva fue de emergencia en cada ciclo.'],
  loops:[['B1','equilibrio','Parche','faltan litros, se compra uva de emergencia y el faltante se cubre rápido.'],['B2','equilibrio','Solución de fondo','los acuerdos con viticultores también evitan el faltante, pero tardan en dar resultados.'],['R','refuerzo','Dependencia','cuanto más se compra de emergencia, menos se trabaja en los acuerdos y vuelven los faltantes.']],
  lev:'Fortalecer los acuerdos con viticultores y dejar la compra de emergencia solo como excepción.'},
 {n:'Erosión de metas',en:'Eroding goals',img:'refracto',ar:'4/5',arm:'4/5',
  def:'Existe una brecha entre la situación actual y la meta. En lugar de tomar acciones difíciles para alcanzarla, se baja poco a poco la meta para que la realidad no parezca tan mala.',
  story:['La receta fija la meta: uva dentro de la norma de °Brix y acidez, que se compara con cada lote.','Si hay brecha, lo correcto es actuar sobre el lote: rechazar uva fuera de norma o ajustar la fermentación.','Con pedidos urgentes, aceptar un poco menos parece razonable: «con este °Brix también se vende».','Cada ciclo la meta baja un poco y la calidad la sigue. Nadie decidió bajar el estándar, pero el estándar bajó.'],
  sig:'Cambia el lenguaje: «esta vez lo dejamos pasar» o «así también se vende» se vuelve costumbre.',
  act:['Dejar la meta escrita en la receta y no cambiarla sin decisión formal del equipo y del enólogo.','Comparar siempre con la meta original, no con la del ciclo anterior.','Actuar sobre la calidad real: rechazar uva fuera de norma aunque retrase un lote.'],
  loops:[['B1','equilibrio','Corregir la calidad','si hay brecha se actúa sobre el lote y la calidad real sube, aunque con retardo.'],['B2','equilibrio','Bajar la meta','con presión por entregar es más fácil bajar la meta que mejorar el lote, y la brecha se cierra sin que mejore nada.']],
  lev:'Fijar la meta como ancla y atacar la brecha, no el número.'}
];
var aq={i:0};
var aqSeg=$('#aq-seg');
ARQ.forEach(function(A,i){
  var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-pressed','false');
  b.innerHTML='<b>'+(i+1)+'</b><span>'+A.n+'</span>';
  b.addEventListener('click',function(){aq.i=i;arqDraw()}); aqSeg.appendChild(b);
});
function arqDraw(){
  var A=ARQ[aq.i];
  $$('#aq-seg button').forEach(function(b,j){b.setAttribute('aria-pressed',String(j===aq.i))});
  $('#aq-n').textContent='Arquetipo '+(aq.i+1)+' de 3';
  $('#aq-name').textContent=A.n; $('#aq-en').textContent=A.en; $('#aq-def').textContent=A.def;
  $('#aq-story').innerHTML=A.story.map(function(t){return '<li>'+t+'</li>'}).join('');
  $('#aq-sig').textContent=A.sig;
  $('#aq-act').innerHTML=A.act.map(function(t){return '<li>'+t+'</li>'}).join('');
  $('#aq-loops').innerHTML=A.loops.map(function(l){return '<li><b>'+l[0]+' ('+l[1]+') · '+l[2]+':</b> '+l[3]+'</li>'}).join('');
  $('#aq-lev').innerHTML='<b>Punto de apalancamiento:</b> '+A.lev;
  var im=$('#aq-img'); im.style.setProperty('--ar',A.ar); im.style.setProperty('--arm',A.arm); im.src=IMG[A.img]; im.alt=CAP[A.img]; $('#aq-cap').textContent=CAP[A.img];
}
arqDraw();
hydrate(document);
})();
