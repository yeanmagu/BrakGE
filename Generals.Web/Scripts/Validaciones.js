function fnClickOK(d,c){__doPostBack(d,c)
}function Mayusculas(b){b.value=b.value.toUpperCase()
}function ComboVacio(d,f){if(d.selectedIndex<=0){alert(f);
try{if(!d.disabled){d.focus()
}}catch(e){}return false
}return true
}function ComboVacio1Elemento(d,f){if(d.value<=0){alert(f);
try{if(!d.disabled){d.focus()
}}catch(e){}return false
}return true
}function ComboVacio2(c,d){if(c.selectedIndex<=0){return false
}return true
}function ConvertNumero(d){var c=(d.which)?d.which:event.keyCode;
if(c>31&&(c<48||c>57)){return false
}return true
}function ConvertNumeroDecimal(d){var c=(d.which)?d.which:event.keyCode;
if((c>31&&(c<46||c>57))||c==47){return false
}return true
}function ConvertMay(){if(!(navigator.appName=="Netscape")){var Ev=window.event;
if((Ev)&&(Ev.keyCode)){var newKey=Ev.keyCode;
if(((newKey>96)&&(newKey<123))||(newKey==225)||(newKey==233)||(newKey==237)||(newKey==241)||(newKey==243)||(newKey==250)||(newKey==252)){newKey-=32
}Ev.keyCode=newKey
}}else{if(Evento&&Net){var objCtrl=eval("document."+document.forms[0].id+"."+Evento.target.id);
Cambiar(objCtrl,Convertir)
}}}function CampoVacio(d,f){if(Trim(d.value.length)==0){alert(f);
try{if(!d.disabled){d.focus()
}}catch(e){}return false
}else{return true
}}function Trim(g){var h=new String(g);
var f=g.length;
var e=0;
for(e=0;
e<f;
e++){h=h.replace(/\s{2,}/," ")
}f=h.length;
if(f>0){if(h.substring(f-1,f)==" "){h=h.substring(0,f-1)
}if(h.substring(0,1)==" "){h=h.replace(/\s{1,}/,"")
}}else{h=""
}return h
}function DespliegaMje(){if(mensaje!=""){alert(mensaje)
}}function DespliegaMjeURL(){var e="/+/gi";
var f=window.location.href;
f=unescape(f);
f=f.replace(e," ");
f=f.toUpperCase();
var d=obtener_valorUrl("mensaje",f);
if(d!=""){alert(d)
}}function obtener_valorUrl(h,g){var l=h.toUpperCase();
var n=g.indexOf(l);
if(n!=-1){var f=g.indexOf("&",n);
if(f!=-1){return g.substring(n+l.length+1,f)
}else{return g.substring(n+l.length+1,g.length)
}}else{return""
}}function acceptNumDec(n,q){var p=window.Event?true:false;
var o=p?n.which:n.keyCode;
var h=".";
for(i=0,j=i+1;
i<q.length;
i++){var r=q.substr(i,j);
var l;
if(r==h){l=true;
break
}}if(l==true){return(o<13||(o>=48&&o<=57))
}else{return(o<13||(o>=48&&o<=57)||o==46)
}}function warnInvalid(d,c){d.focus();
d.select();
alert(c);
return false
}function revNoSerie(l){if(l.value==null){return true
}var h=l.value;
var n=h.length;
var g=n-6;
if(g>10){var d=h.substring(l.value,g,6)
}if((n!=11)&&(n>0)){msg="El NSS debe de ser de 11 digitos, rectifique";
warnInvalid(l,msg);
return false
}else{return true
}}function ConvertLetra(d){var c=(d.which)?d.which:event.keyCode;
if(c>31&&(c<65||c>90)){return false
}return true
}function ConvertLetrNum(d){var c=(d.which)?d.which:event.keyCode;
if((c>31&&(c<48||c>90))||c==58||c==59||c==60||c==61||c==62||c==63||c==64){return false
}else{return true
}}function ConvertNumAst(d){var c=(d.which)?d.which:event.keyCode;
if((c>31&&(c<41||c>57))||c==43||c==44||c==45||c==46||c==47){return false
}return true
}function ConvLetMay(){var c=window.event;
if((c)&&(c.keyCode)){var d=c.keyCode;
if(((d>96)&&(d<123))||(d==225)||(d==233)||(d==237)||(d==241)||(d==243)||(d==250)||(d==252)){d-=32
}c.keyCode=d;
if(d>31&&(d<65||d>90)){return false
}return true
}}function soloNumeros(c){var d=c.keyCode;
return(d<=13||(d>=48&&d<=57)||d==44||d==46)
}function soloNumeros2(c){var d=c.keyCode;
return(d<=13||(d>=48&&d<=57))
}function SoloDecimalesyNumeros(c){function d(){var a;
a=window.event.keyCode;
if(!(a==44||a==45||a==46||a==13||(a>=48&&a<=57))){window.event.keyCode=0;
alert("Debe introducir valores numéricos")
}}}function NoDecimales(c){var d=c.keyCode;
return(d>=48&&d<=57)
}function Validar(h){var n=new String(h);
var p=new Date();
var g=new String(n.substring(n.lastIndexOf("/")+1,n.length));
var o=new String(n.substring(n.indexOf("/")+1,n.lastIndexOf("/")));
var l=new String(n.substring(0,n.indexOf("/")));
if(h!=""){if(isNaN(g)||g.length<4||parseFloat(g)<1900){alert("Año inválido: Formato Correcto dd/mm/aaaa");
return false
}if(isNaN(o)||parseFloat(o)<1||parseFloat(o)>12||o==""){alert("Mes inválido: Formato Correcto dd/mm/aaaa");
return false
}if(isNaN(l)||parseInt(l,10)<1||parseInt(l,10)>31||l==""){alert("Día inválido: Formato Correcto dd/mm/aaaa");
return false
}if(o==4||o==6||o==9||o==11||o==2||o==""){if(o==2&&l>28||l>30){alert("Día inválido: Formato Correcto dd/mm/aaaa");
return false
}}}}function SoloFechaAnterior(d,c){if(new Date()<d._selectedDate){alert("No puedes seleccionar una fecha posterior a la actual");
d._selectedDate=new Date();
d._textbox.set_Value(d._selectedDate.format(d._format))
}}function SoloFechaPosterior(f,d){var e=new Date();
e.setDate(e.getDate()-1);
if(f._selectedDate<e){alert("No puedes seleccionar una fecha Anterior a la actual");
f._selectedDate=new Date();
f._textbox.set_Value(f._selectedDate.format(f._format))
}}function separarDecimales(n,l){pat=/[\*,\+,\(,\),\?,\,$,\[,\],\^]/;
valor=n.value;
largo=valor.length;
crtr=true;
if(isNaN(l)||pat.test(l)==true){if(pat.test(l)==true){l='"'+l
}carcter=new RegExp(l,"g");
valor=valor.replace(carcter,"");
n.value=valor;
crtr=false
}else{var o=new Array();
cont=0;
for(m=0;
m<largo;
m++){if(valor.charAt(m)==","||valor.charAt(m)==" "){continue
}else{o[cont]=valor.charAt(m);
cont++
}}}var g="",h="",p=0;
if(largo>3&&crtr==true){for(k=o.length-1;
k>=0;
k--){g=o[k];
h=g+h;
p++;
if((p%3)==0){if(k!=0){h=","+h
}}}n.value=h
}}function CargaVentana(){newwindow=window.open("Scripts.aspx","ventana","width=800,height=600,scrollbars=yes");
newwindow.focus();
return false
}function CargaVentana(){newwindow=window.open("Scripts.aspx","ventana","width=800,height=600,scrollbars=yes");
newwindow.focus();
return false
}function savePageAsPDF(){var b="http://localhost:52217/integracion.aspx?Id=432&Activity=__BC_SJpjEd-VzOz033iVJg"+escape(document.location.href);
window.open(b,"PDFOnline","scrollbars=yes, resizable=yes,width=640, height=480,menubar,toolbar,location")
}function OK(){Response.Write("<script language='JavaScript'>inserta();<script>")
}function ValidarFechaAnterior(r){var v=new String(r);
var z=new Date();
var p=new String(v.substring(v.lastIndexOf("/")+1,v.length));
var x=new String(v.substring(v.indexOf("/")+1,v.lastIndexOf("/")));
var s=new String(v.substring(0,v.indexOf("/")));
var w=new Date();
var t=w.getDate();
var u=w.getDay();
var y=w.getMonth()+1;
var q=w.getFullYear();
w=t+"/"+y+"/"+q;
if(r!=""){if(isNaN(p)||p.length<4||parseFloat(p)<1900){alert("Año inválido: Formato Correcto dd/mm/aaaa");
return false
}if(isNaN(x)||parseFloat(x)<1||parseFloat(x)>12||x==""){alert("Mes inválido: Formato Correcto dd/mm/aaaa ");
return false
}if(isNaN(s)||parseInt(s,10)<1||parseInt(s,10)>31||s==""){alert("Día inválido: Formato Correcto dd/mm/aaaa ");
return false
}if(x==4||x==6||x==9||x==11||x==2||x==""){if(x==2&&s>28||s>30){alert("Día inválido: Formato Correcto dd/mm/aaaa ");
return false
}}if(parseInt(s)<parseInt(t)||parseFloat(x)<parseFloat(y)||parseFloat(p)<parseFloat(q)){alert("La fecha elegida no puede ser menor a "+w);
return false
}}}function DisableRightClick(b){if(b.button==2){alert("Clic derecho inhabilitado!")
}}function DisableCtrlKey(e){var d=(document.all)?event.keyCode:e.which;
var f="Copiar/Pegar inhabilitado";
if(parseInt(d)==17){alert(f);
window.event.returnValue=false
}}function PrintIframe2(){window.parent.Iframe2.focus();
window.print()
}function PrintIframeCheckList(){window.parent.IframeCheckList.focus();
window.print()
}function AcceptNum(a){var b=window.event.keyCode;
if(b<48||b>57){window.event.keyCode=0
}}function Confirmacion(){var a=document.getElementById("ctl00_cphData1_txtnumsol1").value+document.getElementById("ctl00_cphData1_txtnumsol2").value+document.getElementById("ctl00_cphData1_txtnumsol3").value+document.getElementById("ctl00_cphData1_txtnumsol4").value;
var b=confirm("No se Logro importar la informacion del contrato: "+a+" Para continuar presione Aceptar, de lo contrario Cancelar");
if(b){document.getElementById("ctl00_cphData1_TxtFechaSolicitud").focus()
}else{document.getElementById("ctl00_cphData1_txtnumsol2").focus()
}return b
}function validarFechaMenorActual(){var b=new Date();
var a=new Date(document.getElementById("ctl00_cphData1_TxtFechaSolicitud").value);
if(a>b){alert("La fecha de solicitud no puede ser mayor a la fecha actual");
document.getElementById("ctl00_cphData1_TxtFechaSolicitud").value="";
document.getElementById("ctl00_cphData1_TxtFechaSolicitud").focus()
}else{return true
}}function DecimalFormat(a){var d=a.value.toString().split(".");
var c="";
if(d!=null){if(d[1]!=null){if(!isNaN(b)){c="."+d[1]
}else{c="."+d[1].replace(/[^\d]*/g,"")
}}}if(d!=null){if(d[0]!=null){var b=d[0].replace(/\,/g,"");
if(!isNaN(b)){b=b.toString().split("").reverse().join("").replace(/(?=\d*\,?)(\d{3})/g,"$1,");
b=b.split("").reverse().join("").replace(/^[\,]/,"");
a.value=b+c
}else{a.value=a.value.replace(/[^\d\,]*/g,"")
}}}};