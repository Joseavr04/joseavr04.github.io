(function(){
  var root=document.documentElement,key="vg-lang";
  function set(l){
    root.setAttribute("data-lang",l);root.lang=l;
    var b=document.getElementById("lang");
    if(b){b.textContent=l==="es"?"English":"Español";b.setAttribute("aria-label",l==="es"?"Switch to English":"Cambiar a español");}
    var t=document.querySelector("title[data-"+l+"]");
    if(t)document.title=t.getAttribute("data-"+l);
  }
  var saved="es";
  try{saved=localStorage.getItem(key)||"es";}catch(e){}
  set(saved);
  var b=document.getElementById("lang");
  if(b)b.addEventListener("click",function(){
    var n=root.getAttribute("data-lang")==="es"?"en":"es";
    set(n);try{localStorage.setItem(key,n);}catch(e){}
  });
})();
