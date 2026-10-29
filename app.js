(function(){
var root=document.documentElement;root.classList.add("js");
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
/* en-tête : ombre légère dès qu'on défile */
var hd=document.getElementById("hd");
function solid(){if(hd)hd.classList.toggle("solid",window.scrollY>8)}
solid();window.addEventListener("scroll",solid,{passive:true});
/* apparitions douces */
var els=[].slice.call(document.querySelectorAll(".every h2,.amen li,.suite .sh,.suite .gal,.facts li,.suite .tx,.suite .park,.book,.nancy h2,.walk li,.stan,.see h3,.places li,.host,.gift"));
els.forEach(function(el){el.classList.add("rv");var p=el.parentElement,i=p?[].indexOf.call(p.children,el):0;el.style.setProperty("--d",Math.min(i,8)*.06+"s")});
if("IntersectionObserver" in window&&!reduce){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{rootMargin:"0px 0px -6% 0px",threshold:.05});els.forEach(function(el){io.observe(el)})}
else els.forEach(function(el){el.classList.add("in")});
/* langue : fermer le menu en cliquant ailleurs */
var lg=document.querySelector(".lang");
if(lg){document.addEventListener("click",function(e){if(lg.open&&!lg.contains(e.target))lg.open=false});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&lg.open){lg.open=false;lg.querySelector("summary").focus()}})}
/* visionneuse */
var lb=document.getElementById("lb");if(!lb)return;
var im=lb.querySelector("img"),cnt=lb.querySelector(".cnt"),list=[],k=0,back=null;
function show(i){k=(i+list.length)%list.length;im.src=list[k].getAttribute("data-full");if(cnt)cnt.textContent=(k+1)+" / "+list.length;lb.hidden=false;document.body.style.overflow="hidden"}
function close(){lb.hidden=true;document.body.style.overflow="";if(back)back.focus()}
document.querySelectorAll(".gal").forEach(function(g){var bs=[].slice.call(g.querySelectorAll(".g"));
  bs.forEach(function(b,i){b.addEventListener("click",function(){list=bs;back=b;show(i);lb.querySelector(".x").focus()})});
  var all=g.querySelector("[data-all]");if(all)all.addEventListener("click",function(){list=bs;back=all;show(0);lb.querySelector(".x").focus()})});
lb.addEventListener("click",function(e){var c=e.target.closest("button");if(e.target===lb||(c&&c.classList.contains("x")))close();else if(c&&c.classList.contains("p"))show(k-1);else if(c&&c.classList.contains("n"))show(k+1)});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(k-1);if(e.key==="ArrowRight")show(k+1)});
var sx=0;lb.addEventListener("touchstart",function(e){sx=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(k+(d<0?1:-1))});
})();
