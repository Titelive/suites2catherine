(function(){
/* apparitions au défilement */
var root=document.documentElement;root.classList.add("js");
var sel=[".every h2",".every li",".suite .g.main",".suite .strip li",".suite h3",".suite .addr",".suite .facts li",".suite .tx > p",".suite .buy",".award",
 ".nancy h2",".walk li",".nt h3",".stan",".see h3",".places li",".gift",".contact"];
var els=[].slice.call(document.querySelectorAll(sel.join(",")));
els.forEach(function(el){el.classList.add("rv");var p=el.parentElement,i=p?[].indexOf.call(p.children,el):0;el.style.setProperty("--d",Math.min(i,8)*0.07+"s")});
/* la grande photo (masquée au départ) et la bande de vignettes se déclenchent sur leur galerie */
function trig(el){return el.closest(".gal")||el}
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;
  els.forEach(function(el){if(trig(el)===x.target)el.classList.add("in")});io.unobserve(x.target)})},{rootMargin:"0px 0px -8% 0px",threshold:.05});
 var seen=[];els.forEach(function(el){var t=trig(el);if(seen.indexOf(t)<0){seen.push(t);io.observe(t)}});
}else els.forEach(function(el){el.classList.add("in")});
/* léger mouvement des arches de l'accueil au défilement */
var ar=[].slice.call(document.querySelectorAll(".arches li")),tick=false;
function par(){tick=false;var y=window.scrollY;if(y>innerHeight*1.5)return;ar.forEach(function(li,i){li.style.setProperty("--py",(-y*(i===1?.12:.06)).toFixed(1)+"px")})}
if(ar.length&&!matchMedia("(prefers-reduced-motion:reduce)").matches)window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(par)}},{passive:true});
var hd=document.getElementById("hd"),hero=document.querySelector(".hero");
function solid(){var lim=hero?hero.offsetHeight-80:40;hd.classList.toggle("solid",window.scrollY>lim)}
if(hd){solid();window.addEventListener("scroll",solid,{passive:true});window.addEventListener("resize",solid)}
var lg=document.querySelector(".lang");
if(lg){document.addEventListener("click",function(e){if(lg.open&&!lg.contains(e.target))lg.open=false});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&lg.open){lg.open=false;lg.querySelector("summary").focus()}})}
var lb=document.getElementById("lb");if(!lb)return;
var im=lb.querySelector("img"),list=[],k=0,back=null;
function show(i){k=(i+list.length)%list.length;im.src=list[k].getAttribute("data-full");lb.hidden=false}
function close(){lb.hidden=true;if(back)back.focus()}
document.querySelectorAll(".gal").forEach(function(g){var bs=[].slice.call(g.querySelectorAll(".g"));
  bs.forEach(function(b,i){b.addEventListener("click",function(){list=bs;back=b;show(i);lb.querySelector(".x").focus()})})});
lb.addEventListener("click",function(e){var c=e.target.className;if(c==="x"||e.target===lb)close();else if(c==="p")show(k-1);else if(c==="n")show(k+1)});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(k-1);if(e.key==="ArrowRight")show(k+1)});
})();
