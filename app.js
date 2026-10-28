(function(){
var ov=document.getElementById("ov"),lb=document.getElementById("langb"),ss=document.getElementById("suitesel");
if(ss)ss.addEventListener("change",function(){var t=document.querySelector(ss.value);if(t)t.scrollIntoView({behavior:"smooth",block:"start"});history.replaceState(null,"",ss.value)});
var nvs=[].slice.call(document.querySelectorAll(".nv")),hd=document.querySelector(".hd"),root=document.documentElement;
var secs=["suites","nancy","cadeaux","contact"].map(function(id){return document.getElementById(id)}).filter(Boolean);
var AC={"suite-35":["#B4577A","#E49AB2","#F6E3EA"],"suite-si-calme":["#3F8466","#8CC7A9","#DCEFE4"],"suite-saint-georges":["#4F5DB8","#98A3E6","#E0E4F8"]};
var cur="suite-35";
function theme(id){if(!AC[id])id="suite-35";cur=id;var c=AC[id];root.style.setProperty("--acc",c[0]);root.style.setProperty("--acc2",c[1]);root.style.setProperty("--accs",c[2]);var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=c[0];try{localStorage.setItem("sdc-suite",id)}catch(e){}}
function size(){var h=hd?hd.offsetHeight:170;root.style.setProperty("--hh",h+"px")}
try{var sv=localStorage.getItem("sdc-suite");if(sv&&AC[sv])theme(sv);else theme("suite-35")}catch(e){theme("suite-35")}
if(ss)ss.value=AC[cur]?"#"+cur:"#suites";
function go(v){var t=document.querySelector(v);if(t)t.scrollIntoView({behavior:"smooth",block:"start"});try{history.replaceState(null,"",v)}catch(e){}}
if(ss)ss.addEventListener("change",function(){var id=ss.value.slice(1);if(AC[id])theme(id);go(ss.value)});
function spy(){var y=window.scrollY+(hd?hd.offsetHeight:170)+30,cs=null;secs.forEach(function(x){if(x.offsetTop<=y)cs=x.id});
 nvs.forEach(function(a){var k=a.getAttribute("data-s");a.classList.toggle("on",(k==="gifts"?"cadeaux":k)===cs)});
 if(cs==="suites"){var f=null;Object.keys(AC).forEach(function(i){var el=document.getElementById(i);if(el&&el.offsetTop<=y+40)f=i});
  if(f&&f!==cur){theme(f)}if(ss&&document.activeElement!==ss)ss.value=f?"#"+f:"#suites"}}
size();window.addEventListener("resize",size);
window.addEventListener("scroll",spy,{passive:true});spy();setTimeout(size,400);
if(lb&&ov){lb.addEventListener("click",function(){ov.hidden=false});
 ov.addEventListener("click",function(e){if(e.target===ov||e.target.hasAttribute("data-x"))ov.hidden=true});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")ov.hidden=true})}
var lbx=document.getElementById("lb");if(!lbx)return;
var im=lbx.querySelector("img"),list=[],k=0;
function show(i){k=(i+list.length)%list.length;im.src=list[k].getAttribute("data-full");lbx.hidden=false}
document.querySelectorAll(".mosaic").forEach(function(m){var bs=[].slice.call(m.querySelectorAll(".g"));
 bs.forEach(function(x,i){x.addEventListener("click",function(){list=bs;show(i)})})});
lbx.addEventListener("click",function(e){var c=e.target.className;if(c==="x"||e.target===lbx)lbx.hidden=true;else if(c==="p")show(k-1);else if(c==="n")show(k+1)});
document.addEventListener("keydown",function(e){if(lbx.hidden)return;if(e.key==="Escape")lbx.hidden=true;if(e.key==="ArrowLeft")show(k-1);if(e.key==="ArrowRight")show(k+1)});
})();
