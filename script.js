(function(){
 var r=document.documentElement,K="vg-lang",$=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
 function set(l){r.setAttribute("data-lang",l);r.lang=l;var b=$("#lang");b.textContent=l==="es"?"English":"Español";var t=$("title[data-"+l+"]");if(t)document.title=t.getAttribute("data-"+l)}
 var s="es";try{s=localStorage.getItem(K)||"es"}catch(e){}set(s);
 $("#lang").addEventListener("click",function(){var n=r.getAttribute("data-lang")==="es"?"en":"es";set(n);try{localStorage.setItem(K,n)}catch(e){}});
 /* tabs */
 var tabs=$$(".tab");
 function pick(t,f){tabs.forEach(function(x){var on=x===t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute("aria-controls")).hidden=!on});if(f)t.focus()}
 tabs.forEach(function(t,i){t.addEventListener("click",function(){pick(t)});t.addEventListener("keydown",function(e){var k=e.key,n=k==="ArrowDown"||k==="ArrowRight"?1:k==="ArrowUp"||k==="ArrowLeft"?-1:0;if(n){e.preventDefault();pick(tabs[(i+n+tabs.length)%tabs.length],1)}})});
 /* mobile menu */
 var h=$(".site-header"),m=$("#menu");
 m.addEventListener("click",function(){var o=h.classList.toggle("open");m.setAttribute("aria-expanded",o)});
 $$("nav a").forEach(function(a){a.addEventListener("click",function(){h.classList.remove("open");m.setAttribute("aria-expanded",false)})});
 /* header shadow */
 addEventListener("scroll",function(){h.classList.toggle("stuck",scrollY>10)},{passive:true});
 /* reveal on scroll */
 var rv=$$(".rv");
 if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});rv.forEach(function(e){io.observe(e)})}else rv.forEach(function(e){e.classList.add("in")});
 $("#y").textContent=new Date().getFullYear();
})();
