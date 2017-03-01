var TIMER=1;
var SPEED=10;
var WRAPPER="main";
var CONFIRMA;
var ARGUMENTO;
var OBJETO;
function pageWidth(){return window.innerWidth!=null?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body!=null?document.body.clientWidth:null
}function pageHeight(){return window.innerHeight!=null?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body!=null?document.body.clientHeight:null
}function topPosition(){return typeof window.pageYOffset!="undefined"?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0
}function leftPosition(){return typeof window.pageXOffset!="undefined"?window.pageXOffset:document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft?document.body.scrollLeft:0
}function confirmacion(h,f,g,e){CONFIRMA=true;
ARGUMENTO=e;
OBJETO=g;
showDialog(h,f,"warning",false)
}function showDialog(v,i,y,N){if(!y){y="error"
}var D;
var G;
var w;
var I;
var E;
var H;
if(!document.getElementById("dialog")){D=document.createElement("div");
D.id="dialog";
G=document.createElement("div");
G.id="dialog-header";
I=document.createElement("div");
I.id="dialog-title";
w=document.createElement("div");
w.id="dialog-close";
E=document.createElement("div");
E.id="dialog-content";
H=document.createElement("div");
H.id="dialog-mask";
document.body.appendChild(H);
document.body.appendChild(D);
D.setAttribute("onkeydown","hideDialog()");
D.appendChild(G);
G.appendChild(I);
G.appendChild(w);
D.appendChild(E);
w.setAttribute("onclick","hideDialog()");
w.onclick=hideDialog
}else{D=document.getElementById("dialog");
G=document.getElementById("dialog-header");
I=document.getElementById("dialog-title");
w=document.getElementById("dialog-close");
E=document.getElementById("dialog-content");
H=document.getElementById("dialog-mask");
H.style.visibility="visible";
D.style.visibility="visible"
}D.style.opacity=0;
D.style.filter="alpha(opacity=0)";
D.alpha=0;
var A=pageWidth();
var J=pageHeight();
var F=leftPosition();
var x=topPosition();
var C=D.offsetWidth;
var z=D.offsetHeight;
var K=x+(J/3)-(z/2);
var M=F+(A/2)-(C/2);
D.style.top=K+"px";
D.style.left=M+"px";
G.className=y+"header";
I.innerHTML=v;
E.className=y;
E.innerHTML="";
mensaje=i.split("|");
for(var L=0;
L<mensaje.length;
L++){if(mensaje[L]!=""){E.innerHTML=E.innerHTML+mensaje[L]+"<br>"
}}if(CONFIRMA==true){E.innerHTML=E.innerHTML+'<table width="100%" height="160px"><tr><td class="labelmensaje"  style="vertical-align: bottom;" ><input type="submit" class="botonadvertencia" name="aveIngreso"   id="aveIngreso" value="Si" onclick="doPostBack1();"/></td><td class="alignLeft"  style="vertical-align: bottom;" ><input type="submit" class="botonadvertencia" name="avIngreso"   id="avIngreso" value="No" onclick="hideDialog();"  /></td></tr></table>'
}var B=document.getElementById(WRAPPER);
H.style.height=B.offsetHeight+"px";
D.timer=setInterval("fadeDialog(1)",TIMER);
if(N){w.style.visibility="hidden";
window.setTimeout("hideDialog()",(N*1000))
}else{w.style.visibility="visible"
}CONFIRMA=false
}function doPostBack1(){var b=document.forms[0];
b.__EVENTTARGET.value=OBJETO;
b.__EVENTARGUMENT.value=ARGUMENTO;
b.submit()
}function hideDialog(){var b=document.getElementById("dialog");
clearInterval(b.timer);
b.timer=setInterval("fadeDialog(0)",TIMER)
}function fadeDialog(e){if(e==null){e=1
}var d=document.getElementById("dialog");
var f;
if(e==1){f=d.alpha+SPEED
}else{f=d.alpha-SPEED
}d.alpha=f;
d.style.opacity=(f/100);
d.style.filter="alpha(opacity="+f+")";
if(f>=99){clearInterval(d.timer);
d.timer=null
}else{if(f<=1){d.style.visibility="hidden";
document.getElementById("dialog-mask").style.visibility="hidden";
clearInterval(d.timer)
}}}function AbrirVentana(b){window.open(b,"","dialogWidth:600px; dialogHeight:500px; center:yes ; scroll:no; resizable:no;modal=yes;toolbar:no; copyhistory:no; menubar:no; status:no ; addressbar:no;�); window.location.href=window.location.href;")
};