(function(){
var hd=document.getElementById("hd"),hero=document.querySelector(".hero");
function solid(){var lim=hero?hero.offsetHeight-80:40;hd.classList.toggle("solid",window.scrollY>lim)}
if(hd){solid();window.addEventListener("scroll",solid,{passive:true});window.addEventListener("resize",solid)}
var lb=document.getElementById("lb");if(!lb)return;
var im=lb.querySelector("img"),list=[],k=0,back=null;
function show(i){k=(i+list.length)%list.length;im.src=list[k].getAttribute("data-full");lb.hidden=false}
function close(){lb.hidden=true;if(back)back.focus()}
document.querySelectorAll(".gal").forEach(function(g){var bs=[].slice.call(g.querySelectorAll(".g"));
  bs.forEach(function(b,i){b.addEventListener("click",function(){list=bs;back=b;show(i);lb.querySelector(".x").focus()})})});
lb.addEventListener("click",function(e){var c=e.target.className;if(c==="x"||e.target===lb)close();else if(c==="p")show(k-1);else if(c==="n")show(k+1)});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(k-1);if(e.key==="ArrowRight")show(k+1)});
})();
