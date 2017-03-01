var divanterior="";
var rowanterior="";
var visible="";
var NombreUsuario;
function Redireccionar(b){}function SalirPagina(b){window.parent.document.getElementById("contenido").contentWindow.NombreUsuario="";
VerUsuario(window);
window.parent.document.getElementById("contenido").contentWindow.location.replace(b+"?salir=si")
}function CaducaSesion(){window.parent.document.getElementById("contenido").contentWindow.NombreUsuario=""
}function ValidarFormato(m,p){var n=m.keyCode;
var j=String.fromCharCode(n);
var l=n;
if(p=="ReadOnly"){return false
}else{if((l>=8&&l<=46&&l!=32)){return true
}if((l>=96&&l<=105)){l-=48
}var k=String.fromCharCode(l);
var o=new RegExp(p);
valido=o.test(k);
if(p=="[0-9]"&&valido==true){if(m.shiftKey){l-=16
}k=String.fromCharCode(l);
valido=o.test(k)
}return valido
}}function ValidarFormatoCompleto(k,l,n){var j=l;
if(n=="ReadOnly"){return false
}else{if((j>=8&&j<=46)){return true
}if((j>=96&&j<=105)){j-=48
}var h=k.children[0].value+String.fromCharCode(j);
var m=new RegExp(n);
return m.test(h)
}}function getCaret(f){if(f.selectionStart){return f.selectionStart
}else{if(document.selection){f.focus();
var g=document.selection.createRange();
if(g==null){return 0
}var j=f.createTextRange(),h=j.duplicate();
j.moveToBookmark(g.getBookmark());
h.setEndPoint("EndToStart",j);
return h.text.length
}}return 0
}function validarForma(g,d){if(g!=""){boton=document.getElementById(g)
}Page_ClientValidate(d);
cadena="";
for(var f=0;
f<Page_Validators.length;
f++){if(Page_Validators[f].validationGroup==d&&!Page_Validators[f].isvalid){cadena=cadena+Page_Validators[f].errormessage+"|"
}}if(cadena!=""){showDialog("Error",cadena,"error");
Page_BlockSubmit=false
}else{if(g!=""){boton.style.display="none"
}}}function CambiarVista(h,j){var f=document.getElementById(h);
var g=document.getElementById("img"+h);
if(f.style.display=="none"){f.style.display="inline";
if(j=="alt"){g.src="../Imagenes/expand_button_white_alt_down.png"
}else{g.src="../Imagenes/Expand_Button_white_Down.png"
}g.alt="Close to view other customers"
}else{f.style.display="none";
if(j=="alt"){g.src="../Imagenes/Expand_button_white_alt.png"
}else{g.src="../Imagenes/Expand_button_white.png"
}g.alt="Expand to show orders"
}}function switchViews(h,j){var f=document.getElementById(h);
var g=document.getElementById("img"+h);
CambiarVista(h,j);
visible=f.style.display;
if(rowanterior!=""&&divanterior!=h){CambiarVista(divanterior,rowanterior)
}if(visible!="none"){rowanterior=j;
divanterior=h
}else{rowanterior="";
divanterior=""
}}function unformattext(b){return b.replace(/\$|\,/g,"")
}function formatCurrencyWithOut(g){g=g.toString().replace(/\$|\,/g,"");
if(isNaN(g)){g="0"
}sign=(g==(g=Math.abs(g)));
var d=0;
g=Math.floor(g*100+d);
cents=g%100;
g=Math.floor(g/100).toString();
if(cents<"10"){cents="0"+cents
}for(var f=0;
f<Math.floor((g.length-(1+f))/3);
f++){g=g.substring(0,g.length-(4*f+3))+","+g.substring(g.length-(4*f+3))
}if(g==""){g=0
}return(((sign)?"":"-")+g)
}function enfocar(b){control=document.getElementById(b);
maximo=control.getAttribute("maximo");
control.setAttribute("maximo",control.maxLength);
control.maxLength=maximo;
pos=getCaret(control);
control.value=unformattext(control.value);
focus(b,pos)
}function desenfocar(b){control=document.getElementById(b);
control.value=formatCurrencyWithOut(control.value);
maximo=control.getAttribute("maximo");
control.setAttribute("maximo",control.maxLength);
control.maxLength=maximo
}function OnCheckBoxCheckChanged(g){var l=window.event!=window.undefined?window.event.srcElement:g.target;
var h=(l.tagName.toLowerCase()=="input"&&l.type=="checkbox");
if(h){var k=GetParentByTagName("table",l);
var j=k.nextSibling;
if(j&&j.nodeType==1){if(j.tagName.toLowerCase()=="div"){CheckUncheckChildren(k.nextSibling,l.checked)
}}CheckUncheckParents(l,l.checked)
}}function CheckUncheckChildren(k,g){var j=k.getElementsByTagName("input");
var h=j.length;
for(var l=0;
l<h;
l++){j[l].checked=g
}}function CheckUncheckParents(r,k){var o=GetParentByTagName("div",r);
var q=o.previousSibling;
if(q){var l;
if(!k){var n=AreOneSiblingChecked(r);
if(!n){l=false
}else{return
}}else{l=true
}var m=q.getElementsByTagName("input");
if(m.length>0){var p=m[0];
p.checked=l;
CheckUncheckParents(p,l)
}}}function AreAllSiblingsChecked(h){var k=GetParentByTagName("div",h);
var g=k.childNodes.length;
for(var j=0;
j<g;
j++){if(k.childNodes[j].nodeType==1){if(k.childNodes[j].tagName.toLowerCase()=="table"){var l=k.childNodes[j].getElementsByTagName("input")[0];
if(!l.checked){return false
}}}}return true
}function AreOneSiblingChecked(h){var k=GetParentByTagName("div",h);
var g=k.childNodes.length;
for(var j=0;
j<g;
j++){if(k.childNodes[j].nodeType==1){if(k.childNodes[j].tagName.toLowerCase()=="table"){var l=k.childNodes[j].getElementsByTagName("input")[0];
if(l.checked){return true
}}}}return false
}function GetParentByTagName(g,d){var f=d.parentNode;
while(f.tagName.toLowerCase()!=g.toLowerCase()){f=f.parentNode
}return f
}function AbrirPagina(c,d){window.open(c+"?"+d,"mywindow","toolbar=0,menubar=0,scrollbars=0,resizable=1")
}function EvaluarFecha(){id=document.getElementById("Text1");
var j=new Date();
var f=j.getDay();
var h=j.getMonth();
var g;
if(f==0){g="Domingo, "
}else{if(f==1){g="Lunes, "
}else{if(f==2){g="Martes, "
}else{if(f==3){g="Miércoles, "
}else{if(f==4){g="Jueves, "
}else{if(f==5){g="Viernes, "
}else{g="Sábado, "
}}}}}}g=g+j.getDate()+" de ";
if(h==0){g=g+"Enero"
}else{if(h==1){g=g+"Febrero"
}else{if(h==2){g=g+"Marzo"
}else{if(h==3){g=g+"Abril"
}else{if(h==4){g=g+"Mayo"
}else{if(h==5){g=g+"Junio"
}else{if(h==6){g=g+"Julio"
}else{if(h==7){g=g+"Agosto"
}else{if(h==8){g=g+"Septiembre"
}else{if(h==9){g=g+"Octubre"
}else{if(h==10){g=g+"Noviembre"
}else{g=g+"Diciembre"
}}}}}}}}}}}agno=j.getYear();
if(agno<1900){agno=agno+1900
}g=g+" de "+(agno);
id.value=g;
VerUsuario(window)
}function VerUsuario(b){}function AsignarUsuario(b){NombreUsuario=b;
if(window.parent.document.getElementById("cabecera")!=null){VerUsuario(window.parent.document.getElementById("cabecera").contentWindow)
}}function focus(d,f){control=document.getElementById(d);
control.focus();
if(f==0||f>control.value.length){f=control.value.length
}if(control.setSelectionRange){control.setSelectionRange(f,f)
}else{if(control.createTextRange){var g=control.createTextRange();
g.collapse(true);
g.moveEnd("character",f);
g.moveStart("character",f);
g.select()
}}}function ReemplazarCabecera(b){if(window.parent.document.getElementById("cabecera")!=null){window.parent.document.getElementById("cabecera").contentWindow.location.replace(b)
}}function Count(g,d){var f=new Number(d);
if(g.value.length>f){g.value=g.value.substring(0,f)
}}function ManejarRango(j,k,m,n,p,o){e=document.getElementById(j);
if(e!=null){tipo=e.options[e.selectedIndex].value;
textos=m.split(";");
divs=k.split(";");
validadores=n.split(";");
maximos=p.split(";");
id=-1;
objrango=document.getElementById(o);
for(i=0;
i<textos.length;
i++){objetos=divs[i].split(",");
for(var l=0;
l<objetos.length;
l++){objnovisible=document.getElementById(objetos[l]);
if(objnovisible!=null){objnovisible.style.visibility="hidden";
objnovisible.style.display="none"
}}validadoroculto=document.getElementById(validadores[i]);
ValidatorEnable(validadoroculto,false)
}switch(tipo){case"F":id=0;
break;
case"P":id=1;
break;
case"R":id=2;
break;
default:break
}if(id!=-1){validadovisible=document.getElementById(validadores[id]);
maximo=maximos[id];
objetos=divs[id].split(",");
for(var l=0;
l<objetos.length;
l++){objvisible=document.getElementById(objetos[l]);
if(objvisible!=null){objvisible.style.visibility="visible";
objvisible.style.display="inline"
}}if(document.getElementById(textos[id]).value==""){document.getElementById(textos[id]).value="0"
}ValidatorEnable(validadovisible,true);
objrango.controltovalidate=textos[id];
objrango.maximumvalue=maximo;
ValidatorEnable(objrango,true)
}else{ValidatorEnable(objrango,false)
}}};