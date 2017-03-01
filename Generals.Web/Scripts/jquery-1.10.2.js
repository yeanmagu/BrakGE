(function(c1,dR){var e,ek,cM=typeof dR,dB=c1.location,dJ=c1.document,eq=dJ.documentElement,d2=c1.jQuery,cz=c1.$,cv={},cC=[],ct="1.10.2",d1=cC.concat,dU=cC.push,d8=cC.slice,eh=cC.indexOf,eA=cv.toString,ee=cv.hasOwnProperty,dG=ct.trim,dN=function(b,a){return new dN.fn.init(b,a,ek)
},dD=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ep=/\S+/g,cd=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,cq=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,cS=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,db=/^[\],:{}\s]*$/,co=/(?:^|:|,)(?:\s*\[)+/g,dW=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,dM=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,dZ=/^-ms-/,dL=/-([\da-z])/gi,eo=function(a,b){return b.toUpperCase()
},di=function(a){if(dJ.addEventListener||a.type==="load"||dJ.readyState==="complete"){dQ();
dN.ready()
}},dQ=function(){if(dJ.addEventListener){dJ.removeEventListener("DOMContentLoaded",di,false);
c1.removeEventListener("load",di,false)
}else{dJ.detachEvent("onreadystatechange",di);
c1.detachEvent("onload",di)
}};
dN.fn=dN.prototype={jquery:ct,constructor:dN,init:function(a,b,f){var d,c;
if(!a){return this
}if(typeof a==="string"){if(a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3){d=[null,a,null]
}else{d=cq.exec(a)
}if(d&&(d[1]||!b)){if(d[1]){b=b instanceof dN?b[0]:b;
dN.merge(this,dN.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:dJ,true));
if(cS.test(d[1])&&dN.isPlainObject(b)){for(d in b){if(dN.isFunction(this[d])){this[d](b[d])
}else{this.attr(d,b[d])
}}}return this
}else{c=dJ.getElementById(d[2]);
if(c&&c.parentNode){if(c.id!==d[2]){return f.find(a)
}this.length=1;
this[0]=c
}this.context=dJ;
this.selector=a;
return this
}}else{if(!b||b.jquery){return(b||f).find(a)
}else{return this.constructor(b).find(a)
}}}else{if(a.nodeType){this.context=this[0]=a;
this.length=1;
return this
}else{if(dN.isFunction(a)){return f.ready(a)
}}}if(a.selector!==dR){this.selector=a.selector;
this.context=a.context
}return dN.makeArray(a,this)
},selector:"",length:0,toArray:function(){return d8.call(this)
},get:function(a){return a==null?this.toArray():(a<0?this[this.length+a]:this[a])
},pushStack:function(a){var b=dN.merge(this.constructor(),a);
b.prevObject=this;
b.context=this.context;
return b
},each:function(b,a){return dN.each(this,b,a)
},ready:function(a){dN.ready.promise().done(a);
return this
},slice:function(){return this.pushStack(d8.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b){var a=this.length,c=+b+(b<0?a:0);
return this.pushStack(c>=0&&c<a?[this[c]]:[])
},map:function(a){return this.pushStack(dN.map(this,function(b,c){return a.call(b,c,b)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:dU,sort:[].sort,splice:[].splice};
dN.fn.init.prototype=dN.fn;
dN.extend=dN.fn.extend=function(){var f,j,i,c,d,h,g=arguments[0]||{},a=1,b=arguments.length,k=false;
if(typeof g==="boolean"){k=g;
g=arguments[1]||{};
a=2
}if(typeof g!=="object"&&!dN.isFunction(g)){g={}
}if(b===a){g=this;
--a
}for(;
a<b;
a++){if((d=arguments[a])!=null){for(c in d){f=g[c];
i=d[c];
if(g===i){continue
}if(k&&i&&(dN.isPlainObject(i)||(j=dN.isArray(i)))){if(j){j=false;
h=f&&dN.isArray(f)?f:[]
}else{h=f&&dN.isPlainObject(f)?f:{}
}g[c]=dN.extend(k,h,i)
}else{if(i!==dR){g[c]=i
}}}}}return g
};
dN.extend({expando:"jQuery"+(ct+Math.random()).replace(/\D/g,""),noConflict:function(a){if(c1.$===dN){c1.$=cz
}if(a&&c1.jQuery===dN){c1.jQuery=d2
}return dN
},isReady:false,readyWait:1,holdReady:function(a){if(a){dN.readyWait++
}else{dN.ready(true)
}},ready:function(a){if(a===true?--dN.readyWait:dN.isReady){return
}if(!dJ.body){return setTimeout(dN.ready)
}dN.isReady=true;
if(a!==true&&--dN.readyWait>0){return
}e.resolveWith(dJ,[dN]);
if(dN.fn.trigger){dN(dJ).trigger("ready").off("ready")
}},isFunction:function(a){return dN.type(a)==="function"
},isArray:Array.isArray||function(a){return dN.type(a)==="array"
},isWindow:function(a){return a!=null&&a==a.window
},isNumeric:function(a){return !isNaN(parseFloat(a))&&isFinite(a)
},type:function(a){if(a==null){return String(a)
}return typeof a==="object"||typeof a==="function"?cv[eA.call(a)]||"object":typeof a
},isPlainObject:function(b){var a;
if(!b||dN.type(b)!=="object"||b.nodeType||dN.isWindow(b)){return false
}try{if(b.constructor&&!ee.call(b,"constructor")&&!ee.call(b.constructor.prototype,"isPrototypeOf")){return false
}}catch(c){return false
}if(dN.support.ownLast){for(a in b){return ee.call(b,a)
}}for(a in b){}return a===dR||ee.call(b,a)
},isEmptyObject:function(b){var a;
for(a in b){return false
}return true
},error:function(a){throw new Error(a)
},parseHTML:function(c,b,d){if(!c||typeof c!=="string"){return null
}if(typeof b==="boolean"){d=b;
b=false
}b=b||dJ;
var f=cS.exec(c),a=!d&&[];
if(f){return[b.createElement(f[1])]
}f=dN.buildFragment([c],b,a);
if(a){dN(a).remove()
}return dN.merge([],f.childNodes)
},parseJSON:function(a){if(c1.JSON&&c1.JSON.parse){return c1.JSON.parse(a)
}if(a===null){return a
}if(typeof a==="string"){a=dN.trim(a);
if(a){if(db.test(a.replace(dW,"@").replace(dM,"]").replace(co,""))){return(new Function("return "+a))()
}}}dN.error("Invalid JSON: "+a)
},parseXML:function(b){var a,d;
if(!b||typeof b!=="string"){return null
}try{if(c1.DOMParser){d=new DOMParser();
a=d.parseFromString(b,"text/xml")
}else{a=new ActiveXObject("Microsoft.XMLDOM");
a.async="false";
a.loadXML(b)
}}catch(c){a=dR
}if(!a||!a.documentElement||a.getElementsByTagName("parsererror").length){dN.error("Invalid XML: "+b)
}return a
},noop:function(){},globalEval:function(a){if(a&&dN.trim(a)){(c1.execScript||function(b){c1["eval"].call(c1,b)
})(a)
}},camelCase:function(a){return a.replace(dZ,"ms-").replace(dL,eo)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(g,b,a){var h,c=0,f=g.length,d=d5(g);
if(a){if(d){for(;
c<f;
c++){h=b.apply(g[c],a);
if(h===false){break
}}}else{for(c in g){h=b.apply(g[c],a);
if(h===false){break
}}}}else{if(d){for(;
c<f;
c++){h=b.call(g[c],c,g[c]);
if(h===false){break
}}}else{for(c in g){h=b.call(g[c],c,g[c]);
if(h===false){break
}}}}return g
},trim:dG&&!dG.call("\uFEFF\xA0")?function(a){return a==null?"":dG.call(a)
}:function(a){return a==null?"":(a+"").replace(cd,"")
},makeArray:function(b,c){var a=c||[];
if(b!=null){if(d5(Object(b))){dN.merge(a,typeof b==="string"?[b]:b)
}else{dU.call(a,b)
}}return a
},inArray:function(b,a,c){var d;
if(a){if(eh){return eh.call(a,b,c)
}d=a.length;
c=c?c<0?Math.max(0,d+c):c:0;
for(;
c<d;
c++){if(c in a&&a[c]===b){return c
}}}return -1
},merge:function(b,a){var f=a.length,c=b.length,d=0;
if(typeof f==="number"){for(;
d<f;
d++){b[c++]=a[d]
}}else{while(a[d]!==dR){b[c++]=a[d++]
}}b.length=c;
return b
},grep:function(b,a,d){var h,g=[],c=0,f=b.length;
d=!!d;
for(;
c<f;
c++){h=!!a(b[c],c);
if(d!==h){g.push(b[c])
}}return g
},map:function(c,b,a){var i,d=0,g=c.length,f=d5(c),h=[];
if(f){for(;
d<g;
d++){i=b(c[d],d,a);
if(i!=null){h[h.length]=i
}}}else{for(d in c){i=b(c[d],d,a);
if(i!=null){h[h.length]=i
}}}return d1.apply([],h)
},guid:1,proxy:function(d,c){var b,f,a;
if(typeof c==="string"){a=d[c];
c=d;
d=a
}if(!dN.isFunction(d)){return dR
}b=d8.call(arguments,2);
f=function(){return d.apply(c||this,b.concat(d8.call(arguments)))
};
f.guid=d.guid=d.guid||dN.guid++;
return f
},access:function(j,a,c,g,i,k,f){var b=0,d=j.length,h=c==null;
if(dN.type(c)==="object"){i=true;
for(b in c){dN.access(j,a,b,c[b],true,k,f)
}}else{if(g!==dR){i=true;
if(!dN.isFunction(g)){f=true
}if(h){if(f){a.call(j,g);
a=null
}else{h=a;
a=function(l,m,n){return h.call(dN(l),n)
}
}}if(a){for(;
b<d;
b++){a(j[b],c,f?g:g.call(j[b],b,a(j[b],c)))
}}}}return i?j:h?a.call(j):d?a(j[0],c):k
},now:function(){return(new Date()).getTime()
},swap:function(c,g,b,a){var h,d,f={};
for(d in g){f[d]=c.style[d];
c.style[d]=g[d]
}h=b.apply(c,a||[]);
for(d in g){c.style[d]=f[d]
}return h
}});
dN.ready.promise=function(d){if(!e){e=dN.Deferred();
if(dJ.readyState==="complete"){setTimeout(dN.ready)
}else{if(dJ.addEventListener){dJ.addEventListener("DOMContentLoaded",di,false);
c1.addEventListener("load",di,false)
}else{dJ.attachEvent("onreadystatechange",di);
c1.attachEvent("onload",di);
var a=false;
try{a=c1.frameElement==null&&dJ.documentElement
}catch(c){}if(a&&a.doScroll){(function b(){if(!dN.isReady){try{a.doScroll("left")
}catch(f){return setTimeout(b,50)
}dQ();
dN.ready()
}})()
}}}}return e.promise(d)
};
dN.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){cv["[object "+b+"]"]=b.toLowerCase()
});
function d5(c){var b=c.length,a=dN.type(c);
if(dN.isWindow(c)){return false
}if(c.nodeType===1&&b){return true
}return a==="array"||a!=="function"&&(b===0||typeof b==="number"&&b>0&&(b-1) in c)
}ek=dN(dJ);
(function(h,c){var b,ac,H,g,y,d,af,R,F,S,i,al,aq,aB,u,aa,ai,K="sizzle"+-(new Date()),ah=h.document,l=0,q=0,M=W(),p=W(),ay=W(),az=false,w=function(aE,aD){if(aE===aD){az=true;
return 0
}return 0
},am=typeof c,av=1<<31,at=({}).hasOwnProperty,ao=[],Z=ao.pop,o=ao.push,k=ao.push,j=ao.slice,C=ao.indexOf||function(aF){var aD=0,aE=this.length;
for(;
aD<aE;
aD++){if(this[aD]===aF){return aD
}}return -1
},D="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",f="[\\x20\\t\\r\\n\\f]",ax="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=ax.replace("w","w#"),z="\\["+f+"*("+ax+")"+f+"*(?:([*^$|!~]?=)"+f+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+f+"*\\]",ap=":("+ax+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+z.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+f+"+|((?:^|[^\\\\])(?:\\\\.)*)"+f+"+$","g"),X=new RegExp("^"+f+"*,"+f+"*"),m=new RegExp("^"+f+"*([>+~]|"+f+")"+f+"*"),L=new RegExp(f+"*[+~]"),G=new RegExp("="+f+"*([^\\]'\"]*)"+f+"*\\]","g"),Q=new RegExp(ap),E=new RegExp("^"+O+"$"),v={ID:new RegExp("^#("+ax+")"),CLASS:new RegExp("^\\.("+ax+")"),TAG:new RegExp("^("+ax.replace("w","w*")+")"),ATTR:new RegExp("^"+z),PSEUDO:new RegExp("^"+ap),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+f+"*(even|odd|(([+-]|)(\\d*)n|)"+f+"*(?:([+-]|)"+f+"*(\\d+)|))"+f+"*\\)|)","i"),bool:new RegExp("^(?:"+D+")$","i"),needsContext:new RegExp("^"+f+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+f+"*((?:-\\d)?\\d*)"+f+"*\\)|)(?=[^-]|$)","i")},s=/^[^{]+\{\s*\[native \w/,U=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,I=/^(?:input|select|textarea|button)$/i,A=/^h\d$/i,n=/'|\\/g,T=new RegExp("\\\\([\\da-f]{1,6}"+f+"?|("+f+")|.)","ig"),an=function(aG,aD,aE){var aF="0x"+aD-65536;
return aF!==aF||aE?aD:aF<0?String.fromCharCode(aF+65536):String.fromCharCode(aF>>10|55296,aF&1023|56320)
};
try{k.apply((ao=j.call(ah.childNodes)),ah.childNodes);
ao[ah.childNodes.length].nodeType
}catch(B){k={apply:ao.length?function(aD,aE){o.apply(aD,j.call(aE))
}:function(aF,aG){var aE=aF.length,aD=0;
while((aF[aE++]=aG[aD++])){}aF.length=aE-1
}}
}function ar(aQ,aR,aO,aP){var aH,aD,aG,aL,aF,aE,aM,aK,aI,aJ;
if((aR?aR.ownerDocument||aR:ah)!==i){S(aR)
}aR=aR||i;
aO=aO||[];
if(!aQ||typeof aQ!=="string"){return aO
}if((aL=aR.nodeType)!==1&&aL!==9){return[]
}if(aq&&!aP){if((aH=U.exec(aQ))){if((aG=aH[1])){if(aL===9){aD=aR.getElementById(aG);
if(aD&&aD.parentNode){if(aD.id===aG){aO.push(aD);
return aO
}}else{return aO
}}else{if(aR.ownerDocument&&(aD=aR.ownerDocument.getElementById(aG))&&ai(aR,aD)&&aD.id===aG){aO.push(aD);
return aO
}}}else{if(aH[2]){k.apply(aO,aR.getElementsByTagName(aQ));
return aO
}else{if((aG=aH[3])&&ac.getElementsByClassName&&aR.getElementsByClassName){k.apply(aO,aR.getElementsByClassName(aG));
return aO
}}}}if(ac.qsa&&(!aB||!aB.test(aQ))){aK=aM=K;
aI=aR;
aJ=aL===9&&aQ;
if(aL===1&&aR.nodeName.toLowerCase()!=="object"){aE=ag(aQ);
if((aM=aR.getAttribute("id"))){aK=aM.replace(n,"\\$&")
}else{aR.setAttribute("id",aK)
}aK="[id='"+aK+"'] ";
aF=aE.length;
while(aF--){aE[aF]=aK+Y(aE[aF])
}aI=L.test(aQ)&&aR.parentNode||aR;
aJ=aE.join(",")
}if(aJ){try{k.apply(aO,aI.querySelectorAll(aJ));
return aO
}catch(aN){}finally{if(!aM){aR.removeAttribute("id")
}}}}}return ae(aQ.replace(P,"$1"),aR,aO,aP)
}function W(){var aD=[];
function aE(aF,aG){if(aD.push(aF+=" ")>g.cacheLength){delete aE[aD.shift()]
}return(aE[aF]=aG)
}return aE
}function r(aD){aD[K]=true;
return aD
}function ab(aF){var aD=i.createElement("div");
try{return !!aF(aD)
}catch(aE){return false
}finally{if(aD.parentNode){aD.parentNode.removeChild(aD)
}aD=null
}}function V(aD,aE){var aG=aD.split("|"),aF=aD.length;
while(aF--){g.attrHandle[aG[aF]]=aE
}}function ad(aG,aD){var aE=aD&&aG,aF=aE&&aG.nodeType===1&&aD.nodeType===1&&(~aD.sourceIndex||av)-(~aG.sourceIndex||av);
if(aF){return aF
}if(aE){while((aE=aE.nextSibling)){if(aE===aD){return -1
}}}return aG?1:-1
}function N(aD){return function(aE){var aF=aE.nodeName.toLowerCase();
return aF==="input"&&aE.type===aD
}
}function x(aD){return function(aE){var aF=aE.nodeName.toLowerCase();
return(aF==="input"||aF==="button")&&aE.type===aD
}
}function ak(aD){return r(function(aE){aE=+aE;
return r(function(aJ,aH){var aG,aI=aD([],aJ.length,aE),aF=aI.length;
while(aF--){if(aJ[(aG=aI[aF])]){aJ[aG]=!(aH[aG]=aJ[aG])
}}})
})
}d=ar.isXML=function(aD){var aE=aD&&(aD.ownerDocument||aD).documentElement;
return aE?aE.nodeName!=="HTML":false
};
ac=ar.support={};
S=ar.setDocument=function(aD){var aF=aD?aD.ownerDocument||aD:ah,aE=aF.defaultView;
if(aF===i||aF.nodeType!==9||!aF.documentElement){return i
}i=aF;
al=aF.documentElement;
aq=!d(aF);
if(aE&&aE.attachEvent&&aE!==aE.top){aE.attachEvent("onbeforeunload",function(){S()
})
}ac.attributes=ab(function(aG){aG.className="i";
return !aG.getAttribute("className")
});
ac.getElementsByTagName=ab(function(aG){aG.appendChild(aF.createComment(""));
return !aG.getElementsByTagName("*").length
});
ac.getElementsByClassName=ab(function(aG){aG.innerHTML="<div class='a'></div><div class='a i'></div>";
aG.firstChild.className="i";
return aG.getElementsByClassName("i").length===2
});
ac.getById=ab(function(aG){al.appendChild(aG).id=K;
return !aF.getElementsByName||!aF.getElementsByName(K).length
});
if(ac.getById){g.find.ID=function(aH,aG){if(typeof aG.getElementById!==am&&aq){var aI=aG.getElementById(aH);
return aI&&aI.parentNode?[aI]:[]
}};
g.filter.ID=function(aH){var aG=aH.replace(T,an);
return function(aI){return aI.getAttribute("id")===aG
}
}
}else{delete g.find.ID;
g.filter.ID=function(aH){var aG=aH.replace(T,an);
return function(aI){var aJ=typeof aI.getAttributeNode!==am&&aI.getAttributeNode("id");
return aJ&&aJ.value===aG
}
}
}g.find.TAG=ac.getElementsByTagName?function(aH,aG){if(typeof aG.getElementsByTagName!==am){return aG.getElementsByTagName(aH)
}}:function(aK,aG){var aH,aL=[],aI=0,aJ=aG.getElementsByTagName(aK);
if(aK==="*"){while((aH=aJ[aI++])){if(aH.nodeType===1){aL.push(aH)
}}return aL
}return aJ
};
g.find.CLASS=ac.getElementsByClassName&&function(aG,aH){if(typeof aH.getElementsByClassName!==am&&aq){return aH.getElementsByClassName(aG)
}};
u=[];
aB=[];
if((ac.qsa=s.test(aF.querySelectorAll))){ab(function(aG){aG.innerHTML="<select><option selected=''></option></select>";
if(!aG.querySelectorAll("[selected]").length){aB.push("\\["+f+"*(?:value|"+D+")")
}if(!aG.querySelectorAll(":checked").length){aB.push(":checked")
}});
ab(function(aG){var aH=aF.createElement("input");
aH.setAttribute("type","hidden");
aG.appendChild(aH).setAttribute("t","");
if(aG.querySelectorAll("[t^='']").length){aB.push("[*^$]="+f+"*(?:''|\"\")")
}if(!aG.querySelectorAll(":enabled").length){aB.push(":enabled",":disabled")
}aG.querySelectorAll("*,:x");
aB.push(",.*:")
})
}if((ac.matchesSelector=s.test((aa=al.webkitMatchesSelector||al.mozMatchesSelector||al.oMatchesSelector||al.msMatchesSelector)))){ab(function(aG){ac.disconnectedMatch=aa.call(aG,"div");
aa.call(aG,"[s!='']:x");
u.push("!=",ap)
})
}aB=aB.length&&new RegExp(aB.join("|"));
u=u.length&&new RegExp(u.join("|"));
ai=s.test(al.contains)||al.compareDocumentPosition?function(aG,aI){var aH=aG.nodeType===9?aG.documentElement:aG,aJ=aI&&aI.parentNode;
return aG===aJ||!!(aJ&&aJ.nodeType===1&&(aH.contains?aH.contains(aJ):aG.compareDocumentPosition&&aG.compareDocumentPosition(aJ)&16))
}:function(aG,aH){if(aH){while((aH=aH.parentNode)){if(aH===aG){return true
}}}return false
};
w=al.compareDocumentPosition?function(aG,aH){if(aG===aH){az=true;
return 0
}var aI=aH.compareDocumentPosition&&aG.compareDocumentPosition&&aG.compareDocumentPosition(aH);
if(aI){if(aI&1||(!ac.sortDetached&&aH.compareDocumentPosition(aG)===aI)){if(aG===aF||ai(ah,aG)){return -1
}if(aH===aF||ai(ah,aH)){return 1
}return F?(C.call(F,aG)-C.call(F,aH)):0
}return aI&4?-1:1
}return aG.compareDocumentPosition?-1:1
}:function(aG,aJ){var aM,aN=0,aI=aG.parentNode,aL=aJ.parentNode,aH=[aG],aK=[aJ];
if(aG===aJ){az=true;
return 0
}else{if(!aI||!aL){return aG===aF?-1:aJ===aF?1:aI?-1:aL?1:F?(C.call(F,aG)-C.call(F,aJ)):0
}else{if(aI===aL){return ad(aG,aJ)
}}}aM=aG;
while((aM=aM.parentNode)){aH.unshift(aM)
}aM=aJ;
while((aM=aM.parentNode)){aK.unshift(aM)
}while(aH[aN]===aK[aN]){aN++
}return aN?ad(aH[aN],aK[aN]):aH[aN]===ah?-1:aK[aN]===ah?1:0
};
return aF
};
ar.matches=function(aD,aE){return ar(aD,null,null,aE)
};
ar.matchesSelector=function(aE,aF){if((aE.ownerDocument||aE)!==i){S(aE)
}aF=aF.replace(G,"='$1']");
if(ac.matchesSelector&&aq&&(!u||!u.test(aF))&&(!aB||!aB.test(aF))){try{var aG=aa.call(aE,aF);
if(aG||ac.disconnectedMatch||aE.document&&aE.document.nodeType!==11){return aG
}}catch(aD){}}return ar(aF,i,null,[aE]).length>0
};
ar.contains=function(aE,aD){if((aE.ownerDocument||aE)!==i){S(aE)
}return ai(aE,aD)
};
ar.attr=function(aG,aE){if((aG.ownerDocument||aG)!==i){S(aG)
}var aD=g.attrHandle[aE.toLowerCase()],aF=aD&&at.call(g.attrHandle,aE.toLowerCase())?aD(aG,aE,!aq):c;
return aF===c?ac.attributes||!aq?aG.getAttribute(aE):(aF=aG.getAttributeNode(aE))&&aF.specified?aF.value:null:aF
};
ar.error=function(aD){throw new Error("Syntax error, unrecognized expression: "+aD)
};
ar.uniqueSort=function(aG){var aD,aH=[],aF=0,aE=0;
az=!ac.detectDuplicates;
F=!ac.sortStable&&aG.slice(0);
aG.sort(w);
if(az){while((aD=aG[aE++])){if(aD===aG[aE]){aF=aH.push(aE)
}}while(aF--){aG.splice(aH[aF],1)
}}return aG
};
y=ar.getText=function(aH){var aE,aG="",aD=0,aF=aH.nodeType;
if(!aF){for(;
(aE=aH[aD]);
aD++){aG+=y(aE)
}}else{if(aF===1||aF===9||aF===11){if(typeof aH.textContent==="string"){return aH.textContent
}else{for(aH=aH.firstChild;
aH;
aH=aH.nextSibling){aG+=y(aH)
}}}else{if(aF===3||aF===4){return aH.nodeValue
}}}return aG
};
g=ar.selectors={cacheLength:50,createPseudo:r,match:v,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(aD){aD[1]=aD[1].replace(T,an);
aD[3]=(aD[4]||aD[5]||"").replace(T,an);
if(aD[2]==="~="){aD[3]=" "+aD[3]+" "
}return aD.slice(0,4)
},CHILD:function(aD){aD[1]=aD[1].toLowerCase();
if(aD[1].slice(0,3)==="nth"){if(!aD[3]){ar.error(aD[0])
}aD[4]=+(aD[4]?aD[5]+(aD[6]||1):2*(aD[3]==="even"||aD[3]==="odd"));
aD[5]=+((aD[7]+aD[8])||aD[3]==="odd")
}else{if(aD[3]){ar.error(aD[0])
}}return aD
},PSEUDO:function(aD){var aF,aE=!aD[5]&&aD[2];
if(v.CHILD.test(aD[0])){return null
}if(aD[3]&&aD[4]!==c){aD[2]=aD[4]
}else{if(aE&&Q.test(aE)&&(aF=ag(aE,true))&&(aF=aE.indexOf(")",aE.length-aF)-aE.length)){aD[0]=aD[0].slice(0,aF);
aD[2]=aE.slice(0,aF)
}}return aD.slice(0,3)
}},filter:{TAG:function(aD){var aE=aD.replace(T,an).toLowerCase();
return aD==="*"?function(){return true
}:function(aF){return aF.nodeName&&aF.nodeName.toLowerCase()===aE
}
},CLASS:function(aE){var aD=M[aE+" "];
return aD||(aD=new RegExp("(^|"+f+")"+aE+"("+f+"|$)"))&&M(aE,function(aF){return aD.test(typeof aF.className==="string"&&aF.className||typeof aF.getAttribute!==am&&aF.getAttribute("class")||"")
})
},ATTR:function(aD,aE,aF){return function(aG){var aH=ar.attr(aG,aD);
if(aH==null){return aE==="!="
}if(!aE){return true
}aH+="";
return aE==="="?aH===aF:aE==="!="?aH!==aF:aE==="^="?aF&&aH.indexOf(aF)===0:aE==="*="?aF&&aH.indexOf(aF)>-1:aE==="$="?aF&&aH.slice(-aF.length)===aF:aE==="~="?(" "+aH+" ").indexOf(aF)>-1:aE==="|="?aH===aF||aH.slice(0,aF.length+1)===aF+"-":false
}
},CHILD:function(aI,aJ,aK,aD,aF){var aH=aI.slice(0,3)!=="nth",aE=aI.slice(-4)!=="last",aG=aJ==="of-type";
return aD===1&&aF===0?function(aL){return !!aL.parentNode
}:function(aR,aO,aM){var aN,aV,aT,aP,aU,aX,aQ=aH!==aE?"nextSibling":"previousSibling",aW=aR.parentNode,aS=aG&&aR.nodeName.toLowerCase(),aL=!aM&&!aG;
if(aW){if(aH){while(aQ){aT=aR;
while((aT=aT[aQ])){if(aG?aT.nodeName.toLowerCase()===aS:aT.nodeType===1){return false
}}aX=aQ=aI==="only"&&!aX&&"nextSibling"
}return true
}aX=[aE?aW.firstChild:aW.lastChild];
if(aE&&aL){aV=aW[K]||(aW[K]={});
aN=aV[aI]||[];
aU=aN[0]===l&&aN[1];
aP=aN[0]===l&&aN[2];
aT=aU&&aW.childNodes[aU];
while((aT=++aU&&aT&&aT[aQ]||(aP=aU=0)||aX.pop())){if(aT.nodeType===1&&++aP&&aT===aR){aV[aI]=[l,aU,aP];
break
}}}else{if(aL&&(aN=(aR[K]||(aR[K]={}))[aI])&&aN[0]===l){aP=aN[1]
}else{while((aT=++aU&&aT&&aT[aQ]||(aP=aU=0)||aX.pop())){if((aG?aT.nodeName.toLowerCase()===aS:aT.nodeType===1)&&++aP){if(aL){(aT[K]||(aT[K]={}))[aI]=[l,aP]
}if(aT===aR){break
}}}}}aP-=aF;
return aP===aD||(aP%aD===0&&aP/aD>=0)
}}
},PSEUDO:function(aF,aD){var aG,aE=g.pseudos[aF]||g.setFilters[aF.toLowerCase()]||ar.error("unsupported pseudo: "+aF);
if(aE[K]){return aE(aD)
}if(aE.length>1){aG=[aF,aF,"",aD];
return g.setFilters.hasOwnProperty(aF.toLowerCase())?r(function(aL,aK){var aI,aJ=aE(aL,aD),aH=aJ.length;
while(aH--){aI=C.call(aL,aJ[aH]);
aL[aI]=!(aK[aI]=aJ[aH])
}}):function(aH){return aE(aH,0,aG)
}
}return aE
}},pseudos:{not:r(function(aF){var aG=[],aE=[],aD=af(aF.replace(P,"$1"));
return aD[K]?r(function(aL,aK,aH,aN){var aI,aM=aD(aL,null,aN,[]),aJ=aL.length;
while(aJ--){if((aI=aM[aJ])){aL[aJ]=!(aK[aJ]=aI)
}}}):function(aI,aH,aJ){aG[0]=aI;
aD(aG,null,aJ,aE);
return !aE.pop()
}
}),has:r(function(aD){return function(aE){return ar(aD,aE).length>0
}
}),contains:r(function(aD){return function(aE){return(aE.textContent||aE.innerText||y(aE)).indexOf(aD)>-1
}
}),lang:r(function(aD){if(!E.test(aD||"")){ar.error("unsupported lang: "+aD)
}aD=aD.replace(T,an).toLowerCase();
return function(aE){var aF;
do{if((aF=aq?aE.lang:aE.getAttribute("xml:lang")||aE.getAttribute("lang"))){aF=aF.toLowerCase();
return aF===aD||aF.indexOf(aD+"-")===0
}}while((aE=aE.parentNode)&&aE.nodeType===1);
return false
}
}),target:function(aE){var aD=h.location&&h.location.hash;
return aD&&aD.slice(1)===aE.id
},root:function(aD){return aD===al
},focus:function(aD){return aD===i.activeElement&&(!i.hasFocus||i.hasFocus())&&!!(aD.type||aD.href||~aD.tabIndex)
},enabled:function(aD){return aD.disabled===false
},disabled:function(aD){return aD.disabled===true
},checked:function(aE){var aD=aE.nodeName.toLowerCase();
return(aD==="input"&&!!aE.checked)||(aD==="option"&&!!aE.selected)
},selected:function(aD){if(aD.parentNode){aD.parentNode.selectedIndex
}return aD.selected===true
},empty:function(aD){for(aD=aD.firstChild;
aD;
aD=aD.nextSibling){if(aD.nodeName>"@"||aD.nodeType===3||aD.nodeType===4){return false
}}return true
},parent:function(aD){return !g.pseudos.empty(aD)
},header:function(aD){return A.test(aD.nodeName)
},input:function(aD){return I.test(aD.nodeName)
},button:function(aE){var aD=aE.nodeName.toLowerCase();
return aD==="input"&&aE.type==="button"||aD==="button"
},text:function(aD){var aE;
return aD.nodeName.toLowerCase()==="input"&&aD.type==="text"&&((aE=aD.getAttribute("type"))==null||aE.toLowerCase()===aD.type)
},first:ak(function(){return[0]
}),last:ak(function(aD,aE){return[aE-1]
}),eq:ak(function(aE,aD,aF){return[aF<0?aF+aD:aF]
}),even:ak(function(aE,aD){var aF=0;
for(;
aF<aD;
aF+=2){aE.push(aF)
}return aE
}),odd:ak(function(aE,aD){var aF=1;
for(;
aF<aD;
aF+=2){aE.push(aF)
}return aE
}),lt:ak(function(aF,aE,aG){var aD=aG<0?aG+aE:aG;
for(;
--aD>=0;
){aF.push(aD)
}return aF
}),gt:ak(function(aF,aE,aG){var aD=aG<0?aG+aE:aG;
for(;
++aD<aE;
){aF.push(aD)
}return aF
})}};
g.pseudos.nth=g.pseudos.eq;
for(b in {radio:true,checkbox:true,file:true,password:true,image:true}){g.pseudos[b]=N(b)
}for(b in {submit:true,reset:true}){g.pseudos[b]=x(b)
}function t(){}t.prototype=g.filters=g.pseudos;
g.setFilters=new t();
function ag(aI,aG){var aF,aE,aK,aL,aJ,aD,aH,aM=p[aI+" "];
if(aM){return aG?0:aM.slice(0)
}aJ=aI;
aD=[];
aH=g.preFilter;
while(aJ){if(!aF||(aE=X.exec(aJ))){if(aE){aJ=aJ.slice(aE[0].length)||aJ
}aD.push(aK=[])
}aF=false;
if((aE=m.exec(aJ))){aF=aE.shift();
aK.push({value:aF,type:aE[0].replace(P," ")});
aJ=aJ.slice(aF.length)
}for(aL in g.filter){if((aE=v[aL].exec(aJ))&&(!aH[aL]||(aE=aH[aL](aE)))){aF=aE.shift();
aK.push({value:aF,type:aL,matches:aE});
aJ=aJ.slice(aF.length)
}}if(!aF){break
}}return aG?aJ.length:aJ?ar.error(aI):p(aI,aD).slice(0)
}function Y(aF){var aG=0,aD=aF.length,aE="";
for(;
aG<aD;
aG++){aE+=aF[aG].value
}return aE
}function aC(aH,aE,aI){var aF=aE.dir,aD=aI&&aF==="parentNode",aG=q++;
return aE.first?function(aK,aJ,aL){while((aK=aK[aF])){if(aK.nodeType===1||aD){return aH(aK,aJ,aL)
}}}:function(aN,aK,aP){var aL,aJ,aO,aM=l+" "+aG;
if(aP){while((aN=aN[aF])){if(aN.nodeType===1||aD){if(aH(aN,aK,aP)){return true
}}}}else{while((aN=aN[aF])){if(aN.nodeType===1||aD){aO=aN[K]||(aN[K]={});
if((aJ=aO[aF])&&aJ[0]===aM){if((aL=aJ[1])===true||aL===H){return aL===true
}}else{aJ=aO[aF]=[aM];
aJ[1]=aH(aN,aK,aP)||H;
if(aJ[1]===true){return true
}}}}}}
}function au(aD){return aD.length>1?function(aF,aE,aH){var aG=aD.length;
while(aG--){if(!aD[aG](aF,aE,aH)){return false
}}return true
}:aD[0]
}function a(aK,aH,aE,aM,aL){var aD,aJ=[],aF=0,aG=aK.length,aI=aH!=null;
for(;
aF<aG;
aF++){if((aD=aK[aF])){if(!aE||aE(aD,aM,aL)){aJ.push(aD);
if(aI){aH.push(aF)
}}}}return aJ
}function aj(aG,aH,aI,aD,aE,aF){if(aD&&!aD[K]){aD=aj(aD)
}if(aE&&!aE[K]){aE=aj(aE,aF)
}return r(function(aP,aO,aS,aR){var aQ,aV,aT,aN=[],aL=[],aM=aO.length,aU=aP||J(aH||"*",aS.nodeType?[aS]:aS,[]),aJ=aG&&(aP||!aH)?a(aU,aN,aG,aS,aR):aU,aK=aI?aE||(aP?aG:aM||aD)?[]:aO:aJ;
if(aI){aI(aJ,aK,aS,aR)
}if(aD){aQ=a(aK,aL);
aD(aQ,[],aS,aR);
aV=aQ.length;
while(aV--){if((aT=aQ[aV])){aK[aL[aV]]=!(aJ[aL[aV]]=aT)
}}}if(aP){if(aE||aG){if(aE){aQ=[];
aV=aK.length;
while(aV--){if((aT=aK[aV])){aQ.push((aJ[aV]=aT))
}}aE(null,(aK=[]),aQ,aR)
}aV=aK.length;
while(aV--){if((aT=aK[aV])&&(aQ=aE?C.call(aP,aT):aN[aV])>-1){aP[aQ]=!(aO[aQ]=aT)
}}}}else{aK=a(aK===aO?aK.splice(aM,aK.length):aK);
if(aE){aE(null,aO,aK,aR)
}else{k.apply(aO,aK)
}}})
}function aA(aM){var aN,aK,aF,aH=aM.length,aG=g.relative[aM[0].type],aE=aG||g.relative[" "],aD=aG?1:0,aJ=aC(function(aO){return aO===aN
},aE,true),aI=aC(function(aO){return C.call(aN,aO)>-1
},aE,true),aL=[function(aP,aO,aQ){return(!aG&&(aQ||aO!==R))||((aN=aO).nodeType?aJ(aP,aO,aQ):aI(aP,aO,aQ))
}];
for(;
aD<aH;
aD++){if((aK=g.relative[aM[aD].type])){aL=[aC(au(aL),aK)]
}else{aK=g.filter[aM[aD].type].apply(null,aM[aD].matches);
if(aK[K]){aF=++aD;
for(;
aF<aH;
aF++){if(g.relative[aM[aF].type]){break
}}return aj(aD>1&&au(aL),aD>1&&Y(aM.slice(0,aD-1).concat({value:aM[aD-2].type===" "?"*":""})).replace(P,"$1"),aK,aD<aF&&aA(aM.slice(aD,aF)),aF<aH&&aA((aM=aM.slice(aF))),aF<aH&&Y(aM))
}aL.push(aK)
}}return au(aL)
}function aw(aE,aG){var aF=0,aD=aG.length>0,aI=aE.length>0,aH=function(aV,aJ,aY,aU,aO){var aM,aQ,aS,aW=[],aR=0,aP="0",aX=aV&&[],aT=aO!=null,aK=R,aN=aV||aI&&g.find.TAG("*",aO&&aJ.parentNode||aJ),aL=(l+=aK==null?1:Math.random()||0.1);
if(aT){R=aJ!==i&&aJ;
H=aF
}for(;
(aM=aN[aP])!=null;
aP++){if(aI&&aM){aQ=0;
while((aS=aE[aQ++])){if(aS(aM,aJ,aY)){aU.push(aM);
break
}}if(aT){l=aL;
H=++aF
}}if(aD){if((aM=!aS&&aM)){aR--
}if(aV){aX.push(aM)
}}}aR+=aP;
if(aD&&aP!==aR){aQ=0;
while((aS=aG[aQ++])){aS(aX,aW,aJ,aY)
}if(aV){if(aR>0){while(aP--){if(!(aX[aP]||aW[aP])){aW[aP]=Z.call(aU)
}}}aW=a(aW)
}k.apply(aU,aW);
if(aT&&!aV&&aW.length>0&&(aR+aG.length)>1){ar.uniqueSort(aU)
}}if(aT){l=aL;
R=aK
}return aX
};
return aD?r(aH):aH
}af=ar.compile=function(aG,aE){var aF,aH=[],aD=[],aI=ay[aG+" "];
if(!aI){if(!aE){aE=ag(aG)
}aF=aE.length;
while(aF--){aI=aA(aE[aF]);
if(aI[K]){aH.push(aI)
}else{aD.push(aI)
}}aI=ay(aG,aw(aD,aH))
}return aI
};
function J(aG,aH,aF){var aD=0,aE=aH.length;
for(;
aD<aE;
aD++){ar(aG,aH[aD],aF)
}return aF
}function ae(aI,aM,aG,aH){var aE,aK,aJ,aL,aD,aF=ag(aI);
if(!aH){if(aF.length===1){aK=aF[0]=aF[0].slice(0);
if(aK.length>2&&(aJ=aK[0]).type==="ID"&&ac.getById&&aM.nodeType===9&&aq&&g.relative[aK[1].type]){aM=(g.find.ID(aJ.matches[0].replace(T,an),aM)||[])[0];
if(!aM){return aG
}aI=aI.slice(aK.shift().value.length)
}aE=v.needsContext.test(aI)?0:aK.length;
while(aE--){aJ=aK[aE];
if(g.relative[(aL=aJ.type)]){break
}if((aD=g.find[aL])){if((aH=aD(aJ.matches[0].replace(T,an),L.test(aK[0].type)&&aM.parentNode||aM))){aK.splice(aE,1);
aI=aH.length&&Y(aK);
if(!aI){k.apply(aG,aH);
return aG
}break
}}}}}af(aI,aF)(aH,aM,!aq,aG,L.test(aI));
return aG
}ac.sortStable=K.split("").sort(w).join("")===K;
ac.detectDuplicates=az;
S();
ac.sortDetached=ab(function(aD){return aD.compareDocumentPosition(i.createElement("div"))&1
});
if(!ab(function(aD){aD.innerHTML="<a href='#'></a>";
return aD.firstChild.getAttribute("href")==="#"
})){V("type|href|height|width",function(aF,aE,aD){if(!aD){return aF.getAttribute(aE,aE.toLowerCase()==="type"?1:2)
}})
}if(!ac.attributes||!ab(function(aD){aD.innerHTML="<input/>";
aD.firstChild.setAttribute("value","");
return aD.firstChild.getAttribute("value")===""
})){V("value",function(aF,aE,aD){if(!aD&&aF.nodeName.toLowerCase()==="input"){return aF.defaultValue
}})
}if(!ab(function(aD){return aD.getAttribute("disabled")==null
})){V(D,function(aG,aE,aD){var aF;
if(!aD){return(aF=aG.getAttributeNode(aE))&&aF.specified?aF.value:aG[aE]===true?aE.toLowerCase():null
}})
}dN.find=ar;
dN.expr=ar.selectors;
dN.expr[":"]=dN.expr.pseudos;
dN.unique=ar.uniqueSort;
dN.text=ar.getText;
dN.isXMLDoc=ar.isXML;
dN.contains=ar.contains
})(c1);
var es={};
function er(b){var a=es[b]={};
dN.each(b.match(ep)||[],function(c,d){a[d]=true
});
return a
}dN.Callbacks=function(f){f=typeof f==="string"?(es[f]||er(f)):dN.extend({},f);
var k,d,j,a,l,b,c=[],h=!f.once&&[],i=function(m){d=f.memory&&m;
j=true;
l=b||0;
b=0;
a=c.length;
k=true;
for(;
c&&l<a;
l++){if(c[l].apply(m[0],m[1])===false&&f.stopOnFalse){d=false;
break
}}k=false;
if(c){if(h){if(h.length){i(h.shift())
}}else{if(d){c=[]
}else{g.disable()
}}}},g={add:function(){if(c){var n=c.length;
(function m(o){dN.each(o,function(p,q){var r=dN.type(q);
if(r==="function"){if(!f.unique||!g.has(q)){c.push(q)
}}else{if(q&&q.length&&r!=="string"){m(q)
}}})
})(arguments);
if(k){a=c.length
}else{if(d){b=n;
i(d)
}}}return this
},remove:function(){if(c){dN.each(arguments,function(m,n){var o;
while((o=dN.inArray(n,c,o))>-1){c.splice(o,1);
if(k){if(o<=a){a--
}if(o<=l){l--
}}}})
}return this
},has:function(m){return m?dN.inArray(m,c)>-1:!!(c&&c.length)
},empty:function(){c=[];
a=0;
return this
},disable:function(){c=h=d=dR;
return this
},disabled:function(){return !c
},lock:function(){h=dR;
if(!d){g.disable()
}return this
},locked:function(){return !h
},fireWith:function(n,m){if(c&&(!j||h)){m=m||[];
m=[n,m.slice?m.slice():m];
if(k){h.push(m)
}else{i(m)
}}return this
},fire:function(){g.fireWith(this,arguments);
return this
},fired:function(){return !!j
}};
return g
};
dN.extend({Deferred:function(c){var a=[["resolve","done",dN.Callbacks("once memory"),"resolved"],["reject","fail",dN.Callbacks("once memory"),"rejected"],["notify","progress",dN.Callbacks("memory")]],f="pending",d={state:function(){return f
},always:function(){b.done(arguments).fail(arguments);
return this
},then:function(){var g=arguments;
return dN.Deferred(function(h){dN.each(a,function(k,l){var i=l[0],j=dN.isFunction(g[k])&&g[k];
b[l[1]](function(){var m=j&&j.apply(this,arguments);
if(m&&dN.isFunction(m.promise)){m.promise().done(h.resolve).fail(h.reject).progress(h.notify)
}else{h[i+"With"](this===d?h.promise():this,j?[m]:arguments)
}})
});
g=null
}).promise()
},promise:function(g){return g!=null?dN.extend(g,d):d
}},b={};
d.pipe=d.then;
dN.each(a,function(g,j){var h=j[2],i=j[3];
d[j[1]]=h.add;
if(i){h.add(function(){f=i
},a[g^1][2].disable,a[2][2].lock)
}b[j[0]]=function(){b[j[0]+"With"](this===b?d:this,arguments);
return this
};
b[j[0]+"With"]=h.fireWith
});
d.promise(b);
if(c){c.call(b,b)
}return b
},when:function(f){var i=0,d=d8.call(arguments),j=d.length,b=j!==1||(f&&dN.isFunction(f.promise))?j:0,h=b===1?f:dN.Deferred(),g=function(m,l,n){return function(o){l[m]=this;
n[m]=arguments.length>1?d8.call(arguments):o;
if(n===a){h.notifyWith(l,n)
}else{if(!(--b)){h.resolveWith(l,n)
}}}
},a,k,c;
if(j>1){a=new Array(j);
k=new Array(j);
c=new Array(j);
for(;
i<j;
i++){if(d[i]&&dN.isFunction(d[i].promise)){d[i].promise().done(g(i,c,d)).fail(h.reject).progress(g(i,k,a))
}else{--b
}}}if(!b){h.resolveWith(c,d)
}return h.promise()
}});
dN.support=(function(f){var h,g,a,d,l,c,k,b,m,i=dJ.createElement("div");
i.setAttribute("className","t");
i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
h=i.getElementsByTagName("*")||[];
g=i.getElementsByTagName("a")[0];
if(!g||!g.style||!h.length){return f
}d=dJ.createElement("select");
c=d.appendChild(dJ.createElement("option"));
a=i.getElementsByTagName("input")[0];
g.style.cssText="top:1px;float:left;opacity:.5";
f.getSetAttribute=i.className!=="t";
f.leadingWhitespace=i.firstChild.nodeType===3;
f.tbody=!i.getElementsByTagName("tbody").length;
f.htmlSerialize=!!i.getElementsByTagName("link").length;
f.style=/top/.test(g.getAttribute("style"));
f.hrefNormalized=g.getAttribute("href")==="/a";
f.opacity=/^0.5/.test(g.style.opacity);
f.cssFloat=!!g.style.cssFloat;
f.checkOn=!!a.value;
f.optSelected=c.selected;
f.enctype=!!dJ.createElement("form").enctype;
f.html5Clone=dJ.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
f.inlineBlockNeedsLayout=false;
f.shrinkWrapBlocks=false;
f.pixelPosition=false;
f.deleteExpando=true;
f.noCloneEvent=true;
f.reliableMarginRight=true;
f.boxSizingReliable=true;
a.checked=true;
f.noCloneChecked=a.cloneNode(true).checked;
d.disabled=true;
f.optDisabled=!c.disabled;
try{delete i.test
}catch(j){f.deleteExpando=false
}a=dJ.createElement("input");
a.setAttribute("value","");
f.input=a.getAttribute("value")==="";
a.value="t";
a.setAttribute("type","radio");
f.radioValue=a.value==="t";
a.setAttribute("checked","t");
a.setAttribute("name","t");
l=dJ.createDocumentFragment();
l.appendChild(a);
f.appendChecked=a.checked;
f.checkClone=l.cloneNode(true).cloneNode(true).lastChild.checked;
if(i.attachEvent){i.attachEvent("onclick",function(){f.noCloneEvent=false
});
i.cloneNode(true).click()
}for(m in {submit:true,change:true,focusin:true}){i.setAttribute(k="on"+m,"t");
f[m+"Bubbles"]=k in c1||i.attributes[k].expando===false
}i.style.backgroundClip="content-box";
i.cloneNode(true).style.backgroundClip="";
f.clearCloneStyle=i.style.backgroundClip==="content-box";
for(m in dN(f)){break
}f.ownLast=m!=="0";
dN(function(){var n,p,q,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",r=dJ.getElementsByTagName("body")[0];
if(!r){return
}n=dJ.createElement("div");
n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
r.appendChild(n).appendChild(i);
i.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
q=i.getElementsByTagName("td");
q[0].style.cssText="padding:0;margin:0;border:0;display:none";
b=(q[0].offsetHeight===0);
q[0].style.display="";
q[1].style.display="none";
f.reliableHiddenOffsets=b&&(q[0].offsetHeight===0);
i.innerHTML="";
i.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
dN.swap(r,r.style.zoom!=null?{zoom:1}:{},function(){f.boxSizing=i.offsetWidth===4
});
if(c1.getComputedStyle){f.pixelPosition=(c1.getComputedStyle(i,null)||{}).top!=="1%";
f.boxSizingReliable=(c1.getComputedStyle(i,null)||{width:"4px"}).width==="4px";
p=i.appendChild(dJ.createElement("div"));
p.style.cssText=i.style.cssText=o;
p.style.marginRight=p.style.width="0";
i.style.width="1px";
f.reliableMarginRight=!parseFloat((c1.getComputedStyle(p,null)||{}).marginRight)
}if(typeof i.style.zoom!==cM){i.innerHTML="";
i.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1";
f.inlineBlockNeedsLayout=(i.offsetWidth===3);
i.style.display="block";
i.innerHTML="<div></div>";
i.firstChild.style.width="5px";
f.shrinkWrapBlocks=(i.offsetWidth!==3);
if(f.inlineBlockNeedsLayout){r.style.zoom=1
}}r.removeChild(n);
n=i=q=p=null
});
h=d=l=c=g=a=null;
return f
})({});
var eH=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,ec=/([A-Z])/g;
function b8(j,c,i,d){if(!dN.acceptData(j)){return
}var f,g,a=dN.expando,b=j.nodeType,h=b?dN.cache:j,k=b?j[a]:j[a]&&a;
if((!k||!h[k]||(!d&&!h[k].data))&&i===dR&&typeof c==="string"){return
}if(!k){if(b){k=j[a]=cC.pop()||dN.guid++
}else{k=a
}}if(!h[k]){h[k]=b?{}:{toJSON:dN.noop}
}if(typeof c==="object"||typeof c==="function"){if(d){h[k]=dN.extend(h[k],c)
}else{h[k].data=dN.extend(h[k].data,c)
}}g=h[k];
if(!d){if(!g.data){g.data={}
}g=g.data
}if(i!==dR){g[dN.camelCase(c)]=i
}if(typeof c==="string"){f=g[c];
if(f==null){f=g[dN.camelCase(c)]
}}else{f=g
}return f
}function dK(b,g,h){if(!dN.acceptData(b)){return
}var i,c,f=b.nodeType,a=f?dN.cache:b,d=f?b[dN.expando]:dN.expando;
if(!a[d]){return
}if(g){i=h?a[d]:a[d].data;
if(i){if(!dN.isArray(g)){if(g in i){g=[g]
}else{g=dN.camelCase(g);
if(g in i){g=[g]
}else{g=g.split(" ")
}}}else{g=g.concat(dN.map(g,dN.camelCase))
}c=g.length;
while(c--){delete i[g[c]]
}if(h?!ch(i):!dN.isEmptyObject(i)){return
}}}if(!h){delete a[d].data;
if(!ch(a[d])){return
}}if(f){dN.cleanData([b],true)
}else{if(dN.support.deleteExpando||a!=a.window){delete a[d]
}else{a[d]=null
}}}dN.extend({cache:{},noData:{applet:true,embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){a=a.nodeType?dN.cache[a[dN.expando]]:a[dN.expando];
return !!a&&!ch(a)
},data:function(c,a,b){return b8(c,a,b)
},removeData:function(a,b){return dK(a,b)
},_data:function(c,a,b){return b8(c,a,b,true)
},_removeData:function(a,b){return dK(a,b,true)
},acceptData:function(a){if(a.nodeType&&a.nodeType!==1&&a.nodeType!==9){return false
}var b=a.nodeName&&dN.noData[a.nodeName.toLowerCase()];
return !b||b!==true&&a.getAttribute("classid")===b
}});
dN.fn.extend({data:function(f,h){var a,g,b=null,d=0,c=this[0];
if(f===dR){if(this.length){b=dN.data(c);
if(c.nodeType===1&&!dN._data(c,"parsedAttrs")){a=c.attributes;
for(;
d<a.length;
d++){g=a[d].name;
if(g.indexOf("data-")===0){g=dN.camelCase(g.slice(5));
cf(c,g,b[g])
}}dN._data(c,"parsedAttrs",true)
}}return b
}if(typeof f==="object"){return this.each(function(){dN.data(this,f)
})
}return arguments.length>1?this.each(function(){dN.data(this,f,h)
}):c?cf(c,f,dN.data(c,f)):null
},removeData:function(a){return this.each(function(){dN.removeData(this,a)
})
}});
function cf(f,a,c){if(c===dR&&f.nodeType===1){var b="data-"+a.replace(ec,"-$1").toLowerCase();
c=f.getAttribute(b);
if(typeof c==="string"){try{c=c==="true"?true:c==="false"?false:c==="null"?null:+c+""===c?+c:eH.test(c)?dN.parseJSON(c):c
}catch(d){}dN.data(f,a,c)
}else{c=dR
}}return c
}function ch(b){var a;
for(a in b){if(a==="data"&&dN.isEmptyObject(b[a])){continue
}if(a!=="toJSON"){return false
}}return true
}dN.extend({queue:function(b,d,a){var c;
if(b){d=(d||"fx")+"queue";
c=dN._data(b,d);
if(a){if(!c||dN.isArray(a)){c=dN._data(b,d,dN.makeArray(a))
}else{c.push(a)
}}return c||[]
}},dequeue:function(a,h){h=h||"fx";
var f=dN.queue(a,h),g=f.length,b=f.shift(),c=dN._queueHooks(a,h),d=function(){dN.dequeue(a,h)
};
if(b==="inprogress"){b=f.shift();
g--
}if(b){if(h==="fx"){f.unshift("inprogress")
}delete c.stop;
b.call(a,d,c)
}if(!g&&c){c.empty.fire()
}},_queueHooks:function(b,a){var c=a+"queueHooks";
return dN._data(b,c)||dN._data(b,c,{empty:dN.Callbacks("once memory").add(function(){dN._removeData(b,a+"queue");
dN._removeData(b,c)
})})
}});
dN.fn.extend({queue:function(a,b){var c=2;
if(typeof a!=="string"){b=a;
a="fx";
c--
}if(arguments.length<c){return dN.queue(this[0],a)
}return b===dR?this:this.each(function(){var d=dN.queue(this,a,b);
dN._queueHooks(this,a);
if(a==="fx"&&d[0]!=="inprogress"){dN.dequeue(this,a)
}})
},dequeue:function(a){return this.each(function(){dN.dequeue(this,a)
})
},delay:function(a,b){a=dN.fx?dN.fx.speeds[a]||a:a;
b=b||"fx";
return this.queue(b,function(d,c){var f=setTimeout(d,a);
c.stop=function(){clearTimeout(f)
}
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(i,f){var h,a=1,b=dN.Deferred(),c=this,d=this.length,g=function(){if(!(--a)){b.resolveWith(c,[c])
}};
if(typeof i!=="string"){f=i;
i=dR
}i=i||"fx";
while(d--){h=dN._data(c[d],i+"queueHooks");
if(h&&h.empty){a++;
h.empty.add(g)
}}g();
return b.promise(f)
}});
var cm,eG,b9=/[\t\r\n\f]/g,eI=/\r/g,d4=/^(?:input|select|textarea|button|object)$/i,cn=/^(?:a|area)$/i,ea=/^(?:checked|selected)$/i,dS=dN.support.getSetAttribute,de=dN.support.input;
dN.fn.extend({attr:function(a,b){return dN.access(this,dN.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){dN.removeAttr(this,a)
})
},prop:function(a,b){return dN.access(this,dN.prop,a,b,arguments.length>1)
},removeProp:function(a){a=dN.propFix[a]||a;
return this.each(function(){try{this[a]=dR;
delete this[a]
}catch(b){}})
},addClass:function(a){var b,f,d,c,h,g=0,i=this.length,j=typeof a==="string"&&a;
if(dN.isFunction(a)){return this.each(function(k){dN(this).addClass(a.call(this,k,this.className))
})
}if(j){b=(a||"").match(ep)||[];
for(;
g<i;
g++){f=this[g];
d=f.nodeType===1&&(f.className?(" "+f.className+" ").replace(b9," "):" ");
if(d){h=0;
while((c=b[h++])){if(d.indexOf(" "+c+" ")<0){d+=c+" "
}}f.className=dN.trim(d)
}}}return this
},removeClass:function(a){var b,f,d,c,h,g=0,i=this.length,j=arguments.length===0||typeof a==="string"&&a;
if(dN.isFunction(a)){return this.each(function(k){dN(this).removeClass(a.call(this,k,this.className))
})
}if(j){b=(a||"").match(ep)||[];
for(;
g<i;
g++){f=this[g];
d=f.nodeType===1&&(f.className?(" "+f.className+" ").replace(b9," "):"");
if(d){h=0;
while((c=b[h++])){while(d.indexOf(" "+c+" ")>=0){d=d.replace(" "+c+" "," ")
}}f.className=a?dN.trim(d):""
}}}return this
},toggleClass:function(a,b){var c=typeof a;
if(typeof b==="boolean"&&c==="string"){return b?this.addClass(a):this.removeClass(a)
}if(dN.isFunction(a)){return this.each(function(d){dN(this).toggleClass(a.call(this,d,this.className,b),b)
})
}return this.each(function(){if(c==="string"){var d,g=0,h=dN(this),f=a.match(ep)||[];
while((d=f[g++])){if(h.hasClass(d)){h.removeClass(d)
}else{h.addClass(d)
}}}else{if(c===cM||c==="boolean"){if(this.className){dN._data(this,"__className__",this.className)
}this.className=this.className||a===false?"":dN._data(this,"__className__")||""
}}})
},hasClass:function(d){var a=" "+d+" ",b=0,c=this.length;
for(;
b<c;
b++){if(this[b].nodeType===1&&(" "+this[b].className+" ").replace(b9," ").indexOf(a)>=0){return true
}}return false
},val:function(a){var f,c,d,b=this[0];
if(!arguments.length){if(b){c=dN.valHooks[b.type]||dN.valHooks[b.nodeName.toLowerCase()];
if(c&&"get" in c&&(f=c.get(b,"value"))!==dR){return f
}f=b.value;
return typeof f==="string"?f.replace(eI,""):f==null?"":f
}return
}d=dN.isFunction(a);
return this.each(function(g){var h;
if(this.nodeType!==1){return
}if(d){h=a.call(this,g,dN(this).val())
}else{h=a
}if(h==null){h=""
}else{if(typeof h==="number"){h+=""
}else{if(dN.isArray(h)){h=dN.map(h,function(i){return i==null?"":i+""
})
}}}c=dN.valHooks[this.type]||dN.valHooks[this.nodeName.toLowerCase()];
if(!c||!("set" in c)||c.set(this,h,"value")===dR){this.value=h
}})
}});
dN.extend({valHooks:{option:{get:function(a){var b=dN.find.attr(a,"value");
return b!=null?b:a.text
}},select:{get:function(b){var j,h,i=b.options,d=b.selectedIndex,g=b.type==="select-one"||d<0,a=g?null:[],f=g?d+1:i.length,c=d<0?f:g?d:0;
for(;
c<f;
c++){h=i[c];
if((h.selected||c===d)&&(dN.support.optDisabled?!h.disabled:h.getAttribute("disabled")===null)&&(!h.parentNode.disabled||!dN.nodeName(h.parentNode,"optgroup"))){j=dN(h).val();
if(g){return j
}a.push(j)
}}return a
},set:function(a,g){var f,c,d=a.options,h=dN.makeArray(g),b=d.length;
while(b--){c=d[b];
if((c.selected=dN.inArray(dN(c).val(),h)>=0)){f=true
}}if(!f){a.selectedIndex=-1
}return h
}}},attr:function(f,a,d){var g,c,b=f.nodeType;
if(!f||b===3||b===8||b===2){return
}if(typeof f.getAttribute===cM){return dN.prop(f,a,d)
}if(b!==1||!dN.isXMLDoc(f)){a=a.toLowerCase();
g=dN.attrHooks[a]||(dN.expr.match.bool.test(a)?eG:cm)
}if(d!==dR){if(d===null){dN.removeAttr(f,a)
}else{if(g&&"set" in g&&(c=g.set(f,d,a))!==dR){return c
}else{f.setAttribute(a,d+"");
return d
}}}else{if(g&&"get" in g&&(c=g.get(f,a))!==null){return c
}else{c=dN.find.attr(f,a);
return c==null?dR:c
}}},removeAttr:function(g,d){var b,c,a=0,f=d&&d.match(ep);
if(f&&g.nodeType===1){while((b=f[a++])){c=dN.propFix[b]||b;
if(dN.expr.match.bool.test(b)){if(de&&dS||!ea.test(b)){g[c]=false
}else{g[dN.camelCase("default-"+b)]=g[c]=false
}}else{dN.attr(g,b,"")
}g.removeAttribute(dS?b:c)
}}},attrHooks:{type:{set:function(b,a){if(!dN.support.radioValue&&a==="radio"&&dN.nodeName(b,"input")){var c=b.value;
b.setAttribute("type",a);
if(c){b.value=c
}return a
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(a,c,h){var g,b,d,f=a.nodeType;
if(!a||f===3||f===8||f===2){return
}d=f!==1||!dN.isXMLDoc(a);
if(d){c=dN.propFix[c]||c;
b=dN.propHooks[c]
}if(h!==dR){return b&&"set" in b&&(g=b.set(a,h,c))!==dR?g:(a[c]=h)
}else{return b&&"get" in b&&(g=b.get(a,c))!==null?g:a[c]
}},propHooks:{tabIndex:{get:function(a){var b=dN.find.attr(a,"tabindex");
return b?parseInt(b,10):d4.test(a.nodeName)||cn.test(a.nodeName)&&a.href?0:-1
}}}});
eG={set:function(b,a,c){if(a===false){dN.removeAttr(b,c)
}else{if(de&&dS||!ea.test(c)){b.setAttribute(!dS&&dN.propFix[c]||c,c)
}else{b[dN.camelCase("default-"+c)]=b[c]=true
}}return c
}};
dN.each(dN.expr.match.bool.source.match(/\w+/g),function(c,a){var b=dN.expr.attrHandle[a]||dN.find.attr;
dN.expr.attrHandle[a]=de&&dS||!ea.test(a)?function(d,h,g){var f=dN.expr.attrHandle[h],i=g?dR:(dN.expr.attrHandle[h]=dR)!=b(d,h,g)?h.toLowerCase():null;
dN.expr.attrHandle[h]=f;
return i
}:function(d,g,f){return f?dR:d[dN.camelCase("default-"+g)]?g.toLowerCase():null
}
});
if(!de||!dS){dN.attrHooks.value={set:function(b,a,c){if(dN.nodeName(b,"input")){b.defaultValue=a
}else{return cm&&cm.set(b,a,c)
}}}
}if(!dS){cm={set:function(a,d,b){var c=a.getAttributeNode(b);
if(!c){a.setAttributeNode((c=a.ownerDocument.createAttribute(b)))
}c.value=d+="";
return b==="value"||d===a.getAttribute(b)?d:dR
}};
dN.expr.attrHandle.id=dN.expr.attrHandle.name=dN.expr.attrHandle.coords=function(a,c,b){var d;
return b?dR:(d=a.getAttributeNode(c))&&d.value!==""?d.value:null
};
dN.valHooks.button={get:function(b,c){var a=b.getAttributeNode(c);
return a&&a.specified?a.value:dR
},set:cm.set};
dN.attrHooks.contenteditable={set:function(b,a,c){cm.set(b,a===""?false:a,c)
}};
dN.each(["width","height"],function(a,b){dN.attrHooks[b]={set:function(c,d){if(d===""){c.setAttribute(b,"auto");
return d
}}}
})
}if(!dN.support.hrefNormalized){dN.each(["href","src"],function(a,b){dN.propHooks[b]={get:function(c){return c.getAttribute(b,4)
}}
})
}if(!dN.support.style){dN.attrHooks.style={get:function(a){return a.style.cssText||dR
},set:function(a,b){return(a.style.cssText=b+"")
}}
}if(!dN.support.optSelected){dN.propHooks.selected={get:function(a){var b=a.parentNode;
if(b){b.selectedIndex;
if(b.parentNode){b.parentNode.selectedIndex
}}return null
}}
}dN.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){dN.propFix[this.toLowerCase()]=this
});
if(!dN.support.enctype){dN.propFix.enctype="encoding"
}dN.each(["radio","checkbox"],function(){dN.valHooks[this]={set:function(a,b){if(dN.isArray(b)){return(a.checked=dN.inArray(dN(a).val(),b)>=0)
}}};
if(!dN.support.checkOn){dN.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value
}
}});
var cp=/^(?:input|select|textarea)$/i,ck=/^key/,cI=/^(?:mouse|contextmenu)|click/,cj=/^(?:focusinfocus|focusoutblur)$/,eE=/^([^.]*)(?:\.(.+)|)$/;
function el(){return true
}function ez(){return false
}function dn(){try{return dJ.activeElement
}catch(a){}}dN.event={global:{},add:function(q,o,f,p,j){var m,b,l,d,k,a,c,g,n,h,i,r=dN._data(q);
if(!r){return
}if(f.handler){d=f;
f=d.handler;
j=d.selector
}if(!f.guid){f.guid=dN.guid++
}if(!(b=r.events)){b=r.events={}
}if(!(a=r.handle)){a=r.handle=function(s){return typeof dN!==cM&&(!s||dN.event.triggered!==s.type)?dN.event.dispatch.apply(a.elem,arguments):dR
};
a.elem=q
}o=(o||"").match(ep)||[""];
l=o.length;
while(l--){m=eE.exec(o[l])||[];
n=i=m[1];
h=(m[2]||"").split(".").sort();
if(!n){continue
}k=dN.event.special[n]||{};
n=(j?k.delegateType:k.bindType)||n;
k=dN.event.special[n]||{};
c=dN.extend({type:n,origType:i,data:p,handler:f,guid:f.guid,selector:j,needsContext:j&&dN.expr.match.needsContext.test(j),namespace:h.join(".")},d);
if(!(g=b[n])){g=b[n]=[];
g.delegateCount=0;
if(!k.setup||k.setup.call(q,p,h,a)===false){if(q.addEventListener){q.addEventListener(n,a,false)
}else{if(q.attachEvent){q.attachEvent("on"+n,a)
}}}}if(k.add){k.add.call(q,c);
if(!c.handler.guid){c.handler.guid=f.guid
}}if(j){g.splice(g.delegateCount++,0,c)
}else{g.push(c)
}dN.event.global[n]=true
}q=null
},remove:function(p,o,b,j,f){var d,a,m,h,l,r,k,c,n,g,i,q=dN.hasData(p)&&dN._data(p);
if(!q||!(r=q.events)){return
}o=(o||"").match(ep)||[""];
l=o.length;
while(l--){m=eE.exec(o[l])||[];
n=i=m[1];
g=(m[2]||"").split(".").sort();
if(!n){for(n in r){dN.event.remove(p,n+o[l],b,j,true)
}continue
}k=dN.event.special[n]||{};
n=(j?k.delegateType:k.bindType)||n;
c=r[n]||[];
m=m[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)");
h=d=c.length;
while(d--){a=c[d];
if((f||i===a.origType)&&(!b||b.guid===a.guid)&&(!m||m.test(a.namespace))&&(!j||j===a.selector||j==="**"&&a.selector)){c.splice(d,1);
if(a.selector){c.delegateCount--
}if(k.remove){k.remove.call(p,a)
}}}if(h&&!c.length){if(!k.teardown||k.teardown.call(p,g,q.handle)===false){dN.removeEvent(p,n,q.handle)
}delete r[n]
}}if(dN.isEmptyObject(r)){delete q.handle;
dN._removeData(p,"events")
}},trigger:function(i,f,h,n){var k,o,d,c,p,a,l,j=[h||dJ],b=ee.call(i,"type")?i.type:i,m=ee.call(i,"namespace")?i.namespace.split("."):[];
d=a=h=h||dJ;
if(h.nodeType===3||h.nodeType===8){return
}if(cj.test(b+dN.event.triggered)){return
}if(b.indexOf(".")>=0){m=b.split(".");
b=m.shift();
m.sort()
}o=b.indexOf(":")<0&&"on"+b;
i=i[dN.expando]?i:new dN.Event(b,typeof i==="object"&&i);
i.isTrigger=n?2:3;
i.namespace=m.join(".");
i.namespace_re=i.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
i.result=dR;
if(!i.target){i.target=h
}f=f==null?[i]:dN.makeArray(f,[i]);
p=dN.event.special[b]||{};
if(!n&&p.trigger&&p.trigger.apply(h,f)===false){return
}if(!n&&!p.noBubble&&!dN.isWindow(h)){c=p.delegateType||b;
if(!cj.test(c+b)){d=d.parentNode
}for(;
d;
d=d.parentNode){j.push(d);
a=d
}if(a===(h.ownerDocument||dJ)){j.push(a.defaultView||a.parentWindow||c1)
}}l=0;
while((d=j[l++])&&!i.isPropagationStopped()){i.type=l>1?c:p.bindType||b;
k=(dN._data(d,"events")||{})[i.type]&&dN._data(d,"handle");
if(k){k.apply(d,f)
}k=o&&d[o];
if(k&&dN.acceptData(d)&&k.apply&&k.apply(d,f)===false){i.preventDefault()
}}i.type=b;
if(!n&&!i.isDefaultPrevented()){if((!p._default||p._default.apply(j.pop(),f)===false)&&dN.acceptData(h)){if(o&&h[b]&&!dN.isWindow(h)){a=h[o];
if(a){h[o]=null
}dN.event.triggered=b;
try{h[b]()
}catch(g){}dN.event.triggered=dR;
if(a){h[o]=a
}}}}return i.result
},dispatch:function(i){i=dN.event.fix(i);
var b,f,j,d,c,k=[],h=d8.call(arguments),a=(dN._data(this,"events")||{})[i.type]||[],g=dN.event.special[i.type]||{};
h[0]=i;
i.delegateTarget=this;
if(g.preDispatch&&g.preDispatch.call(this,i)===false){return
}k=dN.event.handlers.call(this,i,a);
b=0;
while((d=k[b++])&&!i.isPropagationStopped()){i.currentTarget=d.elem;
c=0;
while((j=d.handlers[c++])&&!i.isImmediatePropagationStopped()){if(!i.namespace_re||i.namespace_re.test(j.namespace)){i.handleObj=j;
i.data=j.data;
f=((dN.event.special[j.origType]||{}).handle||j.handler).apply(d.elem,h);
if(f!==dR){if((i.result=f)===false){i.preventDefault();
i.stopPropagation()
}}}}}if(g.postDispatch){g.postDispatch.call(this,i)
}return i.result
},handlers:function(d,h){var a,f,j,i,g=[],c=h.delegateCount,b=d.target;
if(c&&b.nodeType&&(!d.button||d.type!=="click")){for(;
b!=this;
b=b.parentNode||this){if(b.nodeType===1&&(b.disabled!==true||d.type!=="click")){j=[];
for(i=0;
i<c;
i++){f=h[i];
a=f.selector+" ";
if(j[a]===dR){j[a]=f.needsContext?dN(a,this).index(b)>=0:dN.find(a,this,null,[b]).length
}if(j[a]){j.push(f)
}}if(j.length){g.push({elem:b,handlers:j})
}}}}if(c<h.length){g.push({elem:this,handlers:h.slice(c)})
}return g
},fix:function(b){if(b[dN.expando]){return b
}var d,g,a,h=b.type,f=b,c=this.fixHooks[h];
if(!c){this.fixHooks[h]=c=cI.test(h)?this.mouseHooks:ck.test(h)?this.keyHooks:{}
}a=c.props?this.props.concat(c.props):this.props;
b=new dN.Event(f);
d=a.length;
while(d--){g=a[d];
b[g]=f[g]
}if(!b.target){b.target=f.srcElement||dJ
}if(b.target.nodeType===3){b.target=b.target.parentNode
}b.metaKey=!!b.metaKey;
return c.filter?c.filter(b,f):b
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){if(a.which==null){a.which=b.charCode!=null?b.charCode:b.keyCode
}return a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(d,h){var a,f,c,b=h.button,g=h.fromElement;
if(d.pageX==null&&h.clientX!=null){f=d.target.ownerDocument||dJ;
c=f.documentElement;
a=f.body;
d.pageX=h.clientX+(c&&c.scrollLeft||a&&a.scrollLeft||0)-(c&&c.clientLeft||a&&a.clientLeft||0);
d.pageY=h.clientY+(c&&c.scrollTop||a&&a.scrollTop||0)-(c&&c.clientTop||a&&a.clientTop||0)
}if(!d.relatedTarget&&g){d.relatedTarget=g===d.target?h.toElement:g
}if(!d.which&&b!==dR){d.which=(b&1?1:(b&2?3:(b&4?2:0)))
}return d
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==dn()&&this.focus){try{this.focus();
return false
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===dn()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(dN.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(a){return dN.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){if(a.result!==dR){a.originalEvent.returnValue=a.result
}}}},simulate:function(b,f,a,c){var d=dN.extend(new dN.Event(),a,{type:b,isSimulated:true,originalEvent:{}});
if(c){dN.event.trigger(d,null,f)
}else{dN.event.dispatch.call(f,d)
}if(d.isDefaultPrevented()){a.preventDefault()
}}};
dN.removeEvent=dJ.removeEventListener?function(b,a,c){if(b.removeEventListener){b.removeEventListener(a,c,false)
}}:function(a,d,b){var c="on"+d;
if(a.detachEvent){if(typeof a[c]===cM){a[c]=null
}a.detachEvent(c,b)
}};
dN.Event=function(b,a){if(!(this instanceof dN.Event)){return new dN.Event(b,a)
}if(b&&b.type){this.originalEvent=b;
this.type=b.type;
this.isDefaultPrevented=(b.defaultPrevented||b.returnValue===false||b.getPreventDefault&&b.getPreventDefault())?el:ez
}else{this.type=b
}if(a){dN.extend(this,a)
}this.timeStamp=b&&b.timeStamp||dN.now();
this[dN.expando]=true
};
dN.Event.prototype={isDefaultPrevented:ez,isPropagationStopped:ez,isImmediatePropagationStopped:ez,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=el;
if(!a){return
}if(a.preventDefault){a.preventDefault()
}else{a.returnValue=false
}},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=el;
if(!a){return
}if(a.stopPropagation){a.stopPropagation()
}a.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=el;
this.stopPropagation()
}};
dN.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b,a){dN.event.special[b]={delegateType:a,bindType:a,handle:function(c){var g,h=this,f=c.relatedTarget,d=c.handleObj;
if(!f||(f!==h&&!dN.contains(h,f))){c.type=d.origType;
g=d.handler.apply(this,arguments);
c.type=a
}return g
}}
});
if(!dN.support.submitBubbles){dN.event.special.submit={setup:function(){if(dN.nodeName(this,"form")){return false
}dN.event.add(this,"click._submit keypress._submit",function(c){var a=c.target,b=dN.nodeName(a,"input")||dN.nodeName(a,"button")?a.form:dR;
if(b&&!dN._data(b,"submitBubbles")){dN.event.add(b,"submit._submit",function(d){d._submit_bubble=true
});
dN._data(b,"submitBubbles",true)
}})
},postDispatch:function(a){if(a._submit_bubble){delete a._submit_bubble;
if(this.parentNode&&!a.isTrigger){dN.event.simulate("submit",this.parentNode,a,true)
}}},teardown:function(){if(dN.nodeName(this,"form")){return false
}dN.event.remove(this,"._submit")
}}
}if(!dN.support.changeBubbles){dN.event.special.change={setup:function(){if(cp.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){dN.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked"){this._just_changed=true
}});
dN.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger){this._just_changed=false
}dN.event.simulate("change",this,a,true)
})
}return false
}dN.event.add(this,"beforeactivate._change",function(b){var a=b.target;
if(cp.test(a.nodeName)&&!dN._data(a,"changeBubbles")){dN.event.add(a,"change._change",function(c){if(this.parentNode&&!c.isSimulated&&!c.isTrigger){dN.event.simulate("change",this.parentNode,c,true)
}});
dN._data(a,"changeBubbles",true)
}})
},handle:function(b){var a=b.target;
if(this!==a||b.isSimulated||b.isTrigger||(a.type!=="radio"&&a.type!=="checkbox")){return b.handleObj.handler.apply(this,arguments)
}},teardown:function(){dN.event.remove(this,"._change");
return !cp.test(this.nodeName)
}}
}if(!dN.support.focusinBubbles){dN.each({focus:"focusin",blur:"focusout"},function(d,b){var a=0,c=function(f){dN.event.simulate(b,f.target,dN.event.fix(f),true)
};
dN.event.special[b]={setup:function(){if(a++===0){dJ.addEventListener(d,c,true)
}},teardown:function(){if(--a===0){dJ.removeEventListener(d,c,true)
}}}
})
}dN.fn.extend({on:function(h,f,a,b,c){var g,d;
if(typeof h==="object"){if(typeof f!=="string"){a=a||f;
f=dR
}for(g in h){this.on(g,f,a,h[g],c)
}return this
}if(a==null&&b==null){b=f;
a=f=dR
}else{if(b==null){if(typeof f==="string"){b=a;
a=dR
}else{b=a;
a=f;
f=dR
}}}if(b===false){b=ez
}else{if(!b){return this
}}if(c===1){d=b;
b=function(i){dN().off(i);
return d.apply(this,arguments)
};
b.guid=d.guid||(d.guid=dN.guid++)
}return this.each(function(){dN.event.add(this,h,b,a,f)
})
},one:function(d,c,a,b){return this.on(d,c,a,b,1)
},off:function(a,d,b){var c,f;
if(a&&a.preventDefault&&a.handleObj){c=a.handleObj;
dN(a.delegateTarget).off(c.namespace?c.origType+"."+c.namespace:c.origType,c.selector,c.handler);
return this
}if(typeof a==="object"){for(f in a){this.off(f,d,a[f])
}return this
}if(d===false||typeof d==="function"){b=d;
d=dR
}if(b===false){b=ez
}return this.each(function(){dN.event.remove(this,a,b,d)
})
},trigger:function(b,a){return this.each(function(){dN.event.trigger(b,a,this)
})
},triggerHandler:function(a,b){var c=this[0];
if(c){return dN.event.trigger(a,b,c,true)
}}});
var ca=/^.[^:#\[\.,]*$/,dx=/^(?:parents|prev(?:Until|All))/,dA=dN.expr.match.needsContext,cB={children:true,contents:true,next:true,prev:true};
dN.fn.extend({find:function(f){var b,d=[],a=this,c=a.length;
if(typeof f!=="string"){return this.pushStack(dN(f).filter(function(){for(b=0;
b<c;
b++){if(dN.contains(a[b],this)){return true
}}}))
}for(b=0;
b<c;
b++){dN.find(f,a[b],d)
}d=this.pushStack(c>1?dN.unique(d):d);
d.selector=this.selector?this.selector+" "+f:f;
return d
},has:function(c){var a,d=dN(c,this),b=d.length;
return this.filter(function(){for(a=0;
a<b;
a++){if(dN.contains(this,d[a])){return true
}}})
},not:function(a){return this.pushStack(c6(this,a||[],true))
},filter:function(a){return this.pushStack(c6(this,a||[],false))
},is:function(a){return !!c6(this,typeof a==="string"&&dA.test(a)?dN(a):a||[],false).length
},closest:function(h,a){var b,c=0,d=this.length,g=[],f=dA.test(h)||typeof h!=="string"?dN(h,a||this.context):0;
for(;
c<d;
c++){for(b=this[c];
b&&b!==a;
b=b.parentNode){if(b.nodeType<11&&(f?f.index(b)>-1:b.nodeType===1&&dN.find.matchesSelector(b,h))){b=g.push(b);
break
}}}return this.pushStack(g.length>1?dN.unique(g):g)
},index:function(a){if(!a){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof a==="string"){return dN.inArray(this[0],dN(a))
}return dN.inArray(a.jquery?a[0]:a,this)
},add:function(c,b){var d=typeof c==="string"?dN(c,b):dN.makeArray(c&&c.nodeType?[c]:c),a=dN.merge(this.get(),d);
return this.pushStack(dN.unique(a))
},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}});
function dg(a,b){do{a=a[b]
}while(a&&a.nodeType!==1);
return a
}dN.each({parent:function(a){var b=a.parentNode;
return b&&b.nodeType!==11?b:null
},parents:function(a){return dN.dir(a,"parentNode")
},parentsUntil:function(b,c,a){return dN.dir(b,"parentNode",a)
},next:function(a){return dg(a,"nextSibling")
},prev:function(a){return dg(a,"previousSibling")
},nextAll:function(a){return dN.dir(a,"nextSibling")
},prevAll:function(a){return dN.dir(a,"previousSibling")
},nextUntil:function(b,c,a){return dN.dir(b,"nextSibling",a)
},prevUntil:function(b,c,a){return dN.dir(b,"previousSibling",a)
},siblings:function(a){return dN.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return dN.sibling(a.firstChild)
},contents:function(a){return dN.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:dN.merge([],a.childNodes)
}},function(b,a){dN.fn[b]=function(f,d){var c=dN.map(this,a,f);
if(b.slice(-5)!=="Until"){d=f
}if(d&&typeof d==="string"){c=dN.filter(d,c)
}if(this.length>1){if(!cB[b]){c=dN.unique(c)
}if(dx.test(b)){c=c.reverse()
}}return this.pushStack(c)
}
});
dN.extend({filter:function(c,b,d){var a=b[0];
if(d){c=":not("+c+")"
}return b.length===1&&a.nodeType===1?dN.find.matchesSelector(a,c)?[a]:[]:dN.find.matches(c,dN.grep(b,function(f){return f.nodeType===1
}))
},dir:function(d,c,a){var f=[],b=d[c];
while(b&&b.nodeType!==9&&(a===dR||b.nodeType!==1||!dN(b).is(a))){if(b.nodeType===1){f.push(b)
}b=b[c]
}return f
},sibling:function(c,b){var a=[];
for(;
c;
c=c.nextSibling){if(c.nodeType===1&&c!==b){a.push(c)
}}return a
}});
function c6(b,a,c){if(dN.isFunction(a)){return dN.grep(b,function(d,f){return !!a.call(d,f,d)!==c
})
}if(a.nodeType){return dN.grep(b,function(d){return(d===a)!==c
})
}if(typeof a==="string"){if(ca.test(a)){return dN.filter(a,b,c)
}a=dN.filter(a,b)
}return dN.grep(b,function(d){return(dN.inArray(d,a)>=0)!==c
})
}function ev(b){var c=ed.split("|"),a=b.createDocumentFragment();
if(a.createElement){while(c.length){a.createElement(c.pop())
}}return a
}var ed="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",da=/ jQuery\d+="(?:null|\d+)"/g,em=new RegExp("<(?:"+ed+")[\\s/>]","i"),b6=/^\s+/,b5=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,cR=/<([\w:]+)/,c4=/<tbody/i,eJ=/<|&#?\w+;/,b7=/<(?:script|style|link)/i,cL=/^(?:checkbox|radio)$/i,cJ=/checked\s*(?:[^=]|=\s*.checked.)/i,df=/^$|\/(?:java|ecma)script/i,cQ=/^true\/(.*)/,dc=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ci={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:dN.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},c5=ev(dJ),d7=c5.appendChild(dJ.createElement("div"));
ci.optgroup=ci.option;
ci.tbody=ci.tfoot=ci.colgroup=ci.caption=ci.thead;
ci.th=ci.td;
dN.fn.extend({text:function(a){return dN.access(this,function(b){return b===dR?dN.text(this):this.empty().append((this[0]&&this[0].ownerDocument||dJ).createTextNode(b))
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var b=en(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var b=en(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){if(this.parentNode){this.parentNode.insertBefore(a,this)
}})
},after:function(){return this.domManip(arguments,function(a){if(this.parentNode){this.parentNode.insertBefore(a,this.nextSibling)
}})
},remove:function(a,f){var b,c=a?dN.filter(a,this):this,d=0;
for(;
(b=c[d])!=null;
d++){if(!f&&b.nodeType===1){dN.cleanData(dr(b))
}if(b.parentNode){if(f&&dN.contains(b.ownerDocument,b)){cW(dr(b,"script"))
}b.parentNode.removeChild(b)
}}return this
},empty:function(){var a,b=0;
for(;
(a=this[b])!=null;
b++){if(a.nodeType===1){dN.cleanData(dr(a,false))
}while(a.firstChild){a.removeChild(a.firstChild)
}if(a.options&&dN.nodeName(a,"select")){a.options.length=0
}}return this
},clone:function(a,b){a=a==null?false:a;
b=b==null?a:b;
return this.map(function(){return dN.clone(this,a,b)
})
},html:function(a){return dN.access(this,function(g){var c=this[0]||{},d=0,f=this.length;
if(g===dR){return c.nodeType===1?c.innerHTML.replace(da,""):dR
}if(typeof g==="string"&&!b7.test(g)&&(dN.support.htmlSerialize||!em.test(g))&&(dN.support.leadingWhitespace||!b6.test(g))&&!ci[(cR.exec(g)||["",""])[1].toLowerCase()]){g=g.replace(b5,"<$1></$2>");
try{for(;
d<f;
d++){c=this[d]||{};
if(c.nodeType===1){dN.cleanData(dr(c,false));
c.innerHTML=g
}}c=0
}catch(b){}}if(c){this.empty().append(g)
}},null,a,arguments.length)
},replaceWith:function(){var a=dN.map(this,function(c){return[c.nextSibling,c.parentNode]
}),b=0;
this.domManip(arguments,function(c){var d=a[b++],f=a[b++];
if(f){if(d&&d.parentNode!==f){d=this.nextSibling
}dN(this).remove();
f.insertBefore(c,d)
}},true);
return b?this:this.remove()
},detach:function(a){return this.remove(a,true)
},domManip:function(c,d,b){c=d1.apply([],c);
var g,n,i,o,f,h,j=0,m=this.length,p=this,k=m-1,a=c[0],l=dN.isFunction(a);
if(l||!(m<=1||typeof a!=="string"||dN.support.checkClone||!cJ.test(a))){return this.each(function(q){var r=p.eq(q);
if(l){c[0]=a.call(this,q,r.html())
}r.domManip(c,d,b)
})
}if(m){h=dN.buildFragment(c,this[0].ownerDocument,false,!b&&this);
g=h.firstChild;
if(h.childNodes.length===1){h=g
}if(g){o=dN.map(dr(h,"script"),c0);
i=o.length;
for(;
j<m;
j++){n=h;
if(j!==k){n=dN.clone(n,true,true);
if(i){dN.merge(o,dr(n,"script"))
}}d.call(this[j],n,j)
}if(i){f=o[o.length-1].ownerDocument;
dN.map(o,dh);
for(j=0;
j<i;
j++){n=o[j];
if(df.test(n.type||"")&&!dN._data(n,"globalEval")&&dN.contains(f,n)){if(n.src){dN._evalUrl(n.src)
}else{dN.globalEval((n.text||n.textContent||n.innerHTML||"").replace(dc,""))
}}}}h=g=null
}}return this
}});
function en(b,a){return dN.nodeName(b,"table")&&dN.nodeName(a.nodeType===1?a:a.firstChild,"tr")?b.getElementsByTagName("tbody")[0]||b.appendChild(b.ownerDocument.createElement("tbody")):b
}function c0(a){a.type=(dN.find.attr(a,"type")!==null)+"/"+a.type;
return a
}function dh(a){var b=cQ.exec(a.type);
if(b){a.type=b[1]
}else{a.removeAttribute("type")
}return a
}function cW(b,d){var a,c=0;
for(;
(a=b[c])!=null;
c++){dN._data(a,"globalEval",!d||dN._data(d[c],"globalEval"))
}}function ej(h,b){if(b.nodeType!==1||!dN.hasData(h)){return
}var i,d,f,g=dN._data(h),a=dN._data(b,g),c=g.events;
if(c){delete a.handle;
a.events={};
for(i in c){for(d=0,f=c[i].length;
d<f;
d++){dN.event.add(b,i,c[i][d])
}}}if(a.data){a.data=dN.extend({},a.data)
}}function cN(b,d){var a,f,c;
if(d.nodeType!==1){return
}a=d.nodeName.toLowerCase();
if(!dN.support.noCloneEvent&&d[dN.expando]){c=dN._data(d);
for(f in c.events){dN.removeEvent(d,f,c.handle)
}d.removeAttribute(dN.expando)
}if(a==="script"&&d.text!==b.text){c0(d).text=b.text;
dh(d)
}else{if(a==="object"){if(d.parentNode){d.outerHTML=b.outerHTML
}if(dN.support.html5Clone&&(b.innerHTML&&!dN.trim(d.innerHTML))){d.innerHTML=b.innerHTML
}}else{if(a==="input"&&cL.test(b.type)){d.defaultChecked=d.checked=b.checked;
if(d.value!==b.value){d.value=b.value
}}else{if(a==="option"){d.defaultSelected=d.selected=b.defaultSelected
}else{if(a==="input"||a==="textarea"){d.defaultValue=b.defaultValue
}}}}}}dN.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){dN.fn[a]=function(i){var c,d=0,h=[],f=dN(i),g=f.length-1;
for(;
d<=g;
d++){c=d===g?this:this.clone(true);
dN(f[d])[b](c);
dU.apply(h,c.get())
}return this.pushStack(h)
}
});
function dr(f,d){var a,g,c=0,b=typeof f.getElementsByTagName!==cM?f.getElementsByTagName(d||"*"):typeof f.querySelectorAll!==cM?f.querySelectorAll(d||"*"):dR;
if(!b){for(b=[],a=f.childNodes||f;
(g=a[c])!=null;
c++){if(!d||dN.nodeName(g,d)){b.push(g)
}else{dN.merge(b,dr(g,d))
}}}return d===dR||d&&dN.nodeName(f,d)?dN.merge([f],b):b
}function cO(a){if(cL.test(a.type)){a.defaultChecked=a.checked
}}dN.extend({clone:function(g,c,d){var f,j,b,h,a,i=dN.contains(g.ownerDocument,g);
if(dN.support.html5Clone||dN.isXMLDoc(g)||!em.test("<"+g.nodeName+">")){b=g.cloneNode(true)
}else{d7.innerHTML=g.outerHTML;
d7.removeChild(b=d7.firstChild)
}if((!dN.support.noCloneEvent||!dN.support.noCloneChecked)&&(g.nodeType===1||g.nodeType===11)&&!dN.isXMLDoc(g)){f=dr(b);
a=dr(g);
for(h=0;
(j=a[h])!=null;
++h){if(f[h]){cN(j,f[h])
}}}if(c){if(d){a=a||dr(g);
f=f||dr(b);
for(h=0;
(j=a[h])!=null;
h++){ej(j,f[h])
}}else{ej(g,b)
}}f=dr(b,"script");
if(f.length>0){cW(f,!i&&dr(g,"script"))
}f=a=j=null;
return b
},buildFragment:function(f,c,l,m){var h,d,b,p,n,o,a,i=f.length,k=ev(c),j=[],g=0;
for(;
g<i;
g++){d=f[g];
if(d||d===0){if(dN.type(d)==="object"){dN.merge(j,d.nodeType?[d]:d)
}else{if(!eJ.test(d)){j.push(c.createTextNode(d))
}else{p=p||k.appendChild(c.createElement("div"));
n=(cR.exec(d)||["",""])[1].toLowerCase();
a=ci[n]||ci._default;
p.innerHTML=a[1]+d.replace(b5,"<$1></$2>")+a[2];
h=a[0];
while(h--){p=p.lastChild
}if(!dN.support.leadingWhitespace&&b6.test(d)){j.push(c.createTextNode(b6.exec(d)[0]))
}if(!dN.support.tbody){d=n==="table"&&!c4.test(d)?p.firstChild:a[1]==="<table>"&&!c4.test(d)?p:0;
h=d&&d.childNodes.length;
while(h--){if(dN.nodeName((o=d.childNodes[h]),"tbody")&&!o.childNodes.length){d.removeChild(o)
}}}dN.merge(j,p.childNodes);
p.textContent="";
while(p.firstChild){p.removeChild(p.firstChild)
}p=k.lastChild
}}}}if(p){k.removeChild(p)
}if(!dN.support.appendChecked){dN.grep(dr(j,"input"),cO)
}g=0;
while((d=j[g++])){if(m&&dN.inArray(d,m)!==-1){continue
}b=dN.contains(d.ownerDocument,d);
p=dr(k.appendChild(d),"script");
if(b){cW(p)
}if(l){h=0;
while((d=p[h++])){if(df.test(d.type||"")){l.push(d)
}}}}p=null;
return k
},cleanData:function(b,i){var a,h,d,k,c=0,f=dN.expando,j=dN.cache,l=dN.support.deleteExpando,g=dN.event.special;
for(;
(a=b[c])!=null;
c++){if(i||dN.acceptData(a)){d=a[f];
k=d&&j[d];
if(k){if(k.events){for(h in k.events){if(g[h]){dN.event.remove(a,h)
}else{dN.removeEvent(a,h,k.handle)
}}}if(j[d]){delete j[d];
if(l){delete a[f]
}else{if(typeof a.removeAttribute!==cM){a.removeAttribute(f)
}else{a[f]=null
}}cC.push(d)
}}}}},_evalUrl:function(a){return dN.ajax({url:a,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}});
dN.fn.extend({wrapAll:function(a){if(dN.isFunction(a)){return this.each(function(c){dN(this).wrapAll(a.call(this,c))
})
}if(this[0]){var b=dN(a,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b.insertBefore(this[0])
}b.map(function(){var c=this;
while(c.firstChild&&c.firstChild.nodeType===1){c=c.firstChild
}return c
}).append(this)
}return this
},wrapInner:function(a){if(dN.isFunction(a)){return this.each(function(b){dN(this).wrapInner(a.call(this,b))
})
}return this.each(function(){var c=dN(this),b=c.contents();
if(b.length){b.wrapAll(a)
}else{c.append(a)
}})
},wrap:function(a){var b=dN.isFunction(a);
return this.each(function(c){dN(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){if(!dN.nodeName(this,"body")){dN(this).replaceWith(this.childNodes)
}}).end()
}});
var cX,dC,b4,dd=/alpha\([^)]*\)/i,eb=/opacity\s*=\s*([^)]*)/,ei=/^(top|right|bottom|left)$/,du=/^(none|table(?!-c[ea]).+)/,d3=/^margin/,cg=new RegExp("^("+dD+")(.*)$","i"),dP=new RegExp("^("+dD+")(?!px)[a-z%]+$","i"),ds=new RegExp("^([+-])=("+dD+")","i"),cZ={BODY:"block"},cs={position:"absolute",visibility:"hidden",display:"block"},eB={letterSpacing:0,fontWeight:400},cH=["Top","Right","Bottom","Left"],d6=["Webkit","O","Moz","ms"];
function dl(a,d){if(d in a){return d
}var b=d.charAt(0).toUpperCase()+d.slice(1),f=d,c=d6.length;
while(c--){d=d6[c]+b;
if(d in a){return d
}}return f
}function et(b,a){b=a||b;
return dN.css(b,"display")==="none"||!dN.contains(b.ownerDocument,b)
}function eC(c,h){var a,b,d,i=[],f=0,g=c.length;
for(;
f<g;
f++){b=c[f];
if(!b.style){continue
}i[f]=dN._data(b,"olddisplay");
a=b.style.display;
if(h){if(!i[f]&&a==="none"){b.style.display=""
}if(b.style.display===""&&et(b)){i[f]=dN._data(b,"olddisplay",dX(b.nodeName))
}}else{if(!i[f]){d=et(b);
if(a&&a!=="none"||!d){dN._data(b,"olddisplay",d?a:dN.css(b,"display"))
}}}}for(f=0;
f<g;
f++){b=c[f];
if(!b.style){continue
}if(!h||b.style.display==="none"||b.style.display===""){b.style.display=h?i[f]||"":"none"
}}return c
}dN.fn.extend({css:function(a,b){return dN.access(this,function(c,h,j){var f,i,g={},d=0;
if(dN.isArray(h)){i=dC(c);
f=h.length;
for(;
d<f;
d++){g[h[d]]=dN.css(c,h[d],false,i)
}return g
}return j!==dR?dN.style(c,h,j):dN.css(c,h)
},a,b,arguments.length>1)
},show:function(){return eC(this,true)
},hide:function(){return eC(this)
},toggle:function(a){if(typeof a==="boolean"){return a?this.show():this.hide()
}return this.each(function(){if(et(this)){dN(this).show()
}else{dN(this).hide()
}})
}});
dN.extend({cssHooks:{opacity:{get:function(c,b){if(b){var a=b4(c,"opacity");
return a===""?"1":a
}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":dN.support.cssFloat?"cssFloat":"styleFloat"},style:function(j,b,h,k){if(!j||j.nodeType===3||j.nodeType===8||!j.style){return
}var d,g,a,c=dN.camelCase(b),f=j.style;
b=dN.cssProps[c]||(dN.cssProps[c]=dl(f,c));
a=dN.cssHooks[b]||dN.cssHooks[c];
if(h!==dR){g=typeof h;
if(g==="string"&&(d=ds.exec(h))){h=(d[1]+1)*d[2]+parseFloat(dN.css(j,b));
g="number"
}if(h==null||g==="number"&&isNaN(h)){return
}if(g==="number"&&!dN.cssNumber[c]){h+="px"
}if(!dN.support.clearCloneStyle&&h===""&&b.indexOf("background")===0){f[b]="inherit"
}if(!a||!("set" in a)||(h=a.set(j,h,k))!==dR){try{f[b]=h
}catch(i){}}}else{if(a&&"get" in a&&(d=a.get(j,false,k))!==dR){return d
}return f[b]
}},css:function(a,d,b,h){var f,i,c,g=dN.camelCase(d);
d=dN.cssProps[g]||(dN.cssProps[g]=dl(a.style,g));
c=dN.cssHooks[d]||dN.cssHooks[g];
if(c&&"get" in c){i=c.get(a,true,b)
}if(i===dR){i=b4(a,d,h)
}if(i==="normal"&&d in eB){i=eB[d]
}if(b===""||b){f=parseFloat(i);
return b===true||dN.isNumeric(f)?f||0:i
}return i
}});
if(c1.getComputedStyle){dC=function(a){return c1.getComputedStyle(a,null)
};
b4=function(d,h,b){var a,g,f,c=b||dC(d),i=c?c.getPropertyValue(h)||c[h]:dR,j=d.style;
if(c){if(i===""&&!dN.contains(d.ownerDocument,d)){i=dN.style(d,h)
}if(dP.test(i)&&d3.test(h)){a=j.width;
g=j.minWidth;
f=j.maxWidth;
j.minWidth=j.maxWidth=j.width=i;
i=c.width;
j.width=a;
j.minWidth=g;
j.maxWidth=f
}}return i
}
}else{if(dJ.documentElement.currentStyle){dC=function(a){return a.currentStyle
};
b4=function(d,g,b){var f,i,j,c=b||dC(d),h=c?c[g]:dR,a=d.style;
if(h==null&&a&&a[g]){h=a[g]
}if(dP.test(h)&&!ei.test(g)){f=a.left;
i=d.runtimeStyle;
j=i&&i.left;
if(j){i.left=d.currentStyle.left
}a.left=g==="fontSize"?"1em":h;
h=a.pixelLeft+"px";
a.left=f;
if(j){i.left=j
}}return h===""?"auto":h
}
}}function dj(a,d,c){var b=cg.exec(d);
return b?Math.max(0,b[1]-(c||0))+(b[2]||"px"):d
}function cV(a,f,b,d,g){var c=b===(d?"border":"content")?4:f==="width"?1:0,h=0;
for(;
c<4;
c+=2){if(b==="margin"){h+=dN.css(a,b+cH[c],true,g)
}if(d){if(b==="content"){h-=dN.css(a,"padding"+cH[c],true,g)
}if(b!=="margin"){h-=dN.css(a,"border"+cH[c]+"Width",true,g)
}}else{h+=dN.css(a,"padding"+cH[c],true,g);
if(b!=="padding"){h+=dN.css(a,"border"+cH[c]+"Width",true,g)
}}}return h
}function cx(a,d,b){var h=true,g=d==="width"?a.offsetWidth:a.offsetHeight,f=dC(a),c=dN.support.boxSizing&&dN.css(a,"boxSizing",false,f)==="border-box";
if(g<=0||g==null){g=b4(a,d,f);
if(g<0||g==null){g=a.style[d]
}if(dP.test(g)){return g
}h=c&&(dN.support.boxSizingReliable||g===a.style[d]);
g=parseFloat(g)||0
}return(g+cV(a,d,b||(c?"border":"content"),h,f))+"px"
}function dX(a){var c=dJ,b=cZ[a];
if(!b){b=cG(a,c);
if(b==="none"||!b){cX=(cX||dN("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(c.documentElement);
c=(cX[0].contentWindow||cX[0].contentDocument).document;
c.write("<!doctype html><html><body>");
c.close();
b=cG(a,c);
cX.detach()
}cZ[a]=b
}return b
}function cG(d,b){var c=dN(b.createElement(d)).appendTo(b.body),a=dN.css(c[0],"display");
c.remove();
return a
}dN.each(["height","width"],function(a,b){dN.cssHooks[b]={get:function(d,c,f){if(c){return d.offsetWidth===0&&du.test(dN.css(d,"display"))?dN.swap(d,cs,function(){return cx(d,b,f)
}):cx(d,b,f)
}},set:function(c,g,d){var f=d&&dC(c);
return dj(c,g,d?cV(c,b,d,dN.support.boxSizing&&dN.css(c,"boxSizing",false,f)==="border-box",f):0)
}}
});
if(!dN.support.opacity){dN.cssHooks.opacity={get:function(b,a){return eb.test((a&&b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":a?"1":""
},set:function(g,d){var c=g.style,f=g.currentStyle,b=dN.isNumeric(d)?"alpha(opacity="+d*100+")":"",a=f&&f.filter||c.filter||"";
c.zoom=1;
if((d>=1||d==="")&&dN.trim(a.replace(dd,""))===""&&c.removeAttribute){c.removeAttribute("filter");
if(d===""||f&&!f.filter){return
}}c.filter=dd.test(a)?a.replace(dd,b):a+" "+b
}}
}dN(function(){if(!dN.support.reliableMarginRight){dN.cssHooks.marginRight={get:function(b,a){if(a){return dN.swap(b,{display:"inline-block"},b4,[b,"marginRight"])
}}}
}if(!dN.support.pixelPosition&&dN.fn.position){dN.each(["top","left"],function(a,b){dN.cssHooks[b]={get:function(d,c){if(c){c=b4(d,b);
return dP.test(c)?dN(d).position()[b]+"px":c
}}}
})
}});
if(dN.expr&&dN.expr.filters){dN.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||(!dN.support.reliableHiddenOffsets&&((a.style&&a.style.display)||dN.css(a,"display"))==="none")
};
dN.expr.filters.visible=function(a){return !dN.expr.filters.hidden(a)
}
}dN.each({margin:"",padding:"",border:"Width"},function(a,b){dN.cssHooks[a+b]={expand:function(g){var d=0,c={},f=typeof g==="string"?g.split(" "):[g];
for(;
d<4;
d++){c[a+cH[d]+b]=f[d]||f[d-2]||f[0]
}return c
}};
if(!d3.test(a)){dN.cssHooks[a+b].set=dj
}});
var dV=/%20/g,dT=/\[\]$/,dF=/\r?\n/g,ce=/^(?:submit|button|image|reset|file)$/i,cY=/^(?:input|select|textarea|keygen)/i;
dN.fn.extend({serialize:function(){return dN.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=dN.prop(this,"elements");
return a?dN.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!dN(this).is(":disabled")&&cY.test(this.nodeName)&&!ce.test(a)&&(this.checked||!cL.test(a))
}).map(function(c,b){var a=dN(this).val();
return a==null?null:dN.isArray(a)?dN.map(a,function(d){return{name:b.name,value:d.replace(dF,"\r\n")}
}):{name:b.name,value:a.replace(dF,"\r\n")}
}).get()
}});
dN.param=function(b,a){var d,f=[],c=function(g,h){h=dN.isFunction(h)?h():(h==null?"":h);
f[f.length]=encodeURIComponent(g)+"="+encodeURIComponent(h)
};
if(a===dR){a=dN.ajaxSettings&&dN.ajaxSettings.traditional
}if(dN.isArray(b)||(b.jquery&&!dN.isPlainObject(b))){dN.each(b,function(){c(this.name,this.value)
})
}else{for(d in b){ey(d,b[d],a,c)
}}return f.join("&").replace(dV,"+")
};
function ey(f,d,a,b){var c;
if(dN.isArray(d)){dN.each(d,function(g,h){if(a||dT.test(f)){b(f,h)
}else{ey(f+"["+(typeof h==="object"?g:"")+"]",h,a,b)
}})
}else{if(!a&&dN.type(d)==="object"){for(c in d){ey(f+"["+c+"]",d[c],a,b)
}}else{b(f,d)
}}}dN.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(a,b){dN.fn[b]=function(c,d){return arguments.length>0?this.on(b,null,c,d):this.trigger(b)
}
});
dN.fn.extend({hover:function(b,a){return this.mouseenter(b).mouseleave(a||b)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(b,a){return this.off(b,null,a)
},delegate:function(c,d,a,b){return this.on(d,c,a,b)
},undelegate:function(c,a,b){return arguments.length===1?this.off(c,"**"):this.off(a,c||"**",b)
}});
var dm,cT,dy=dN.now(),cl=/\?/,cy=/#.*$/,c9=/([?&])_=[^&]*/,dv=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,c2=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,b3=/^(?:GET|HEAD)$/,cA=/^\/\//,dO=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cD=dN.fn.load,ew={},eF={},eg="*/".concat("*");
try{cT=dB.href
}catch(dY){cT=dJ.createElement("a");
cT.href="";
cT=cT.href
}dm=dO.exec(cT.toLowerCase())||[];
function dp(a){return function(c,f){if(typeof c!=="string"){f=c;
c="*"
}var b,g=0,d=c.toLowerCase().match(ep)||[];
if(dN.isFunction(f)){while((b=d[g++])){if(b[0]==="+"){b=b.slice(1)||"*";
(a[b]=a[b]||[]).unshift(f)
}else{(a[b]=a[b]||[]).push(f)
}}}}
}function dq(h,d,f,c){var b={},g=(h===eF);
function a(i){var j;
b[i]=true;
dN.each(h[i]||[],function(k,m){var l=m(d,f,c);
if(typeof l==="string"&&!g&&!b[l]){d.dataTypes.unshift(l);
a(l);
return false
}else{if(g){return !(j=l)
}}});
return j
}return a(d.dataTypes[0])||!b["*"]&&a("*")
}function cr(a,f){var b,d,c=dN.ajaxSettings.flatOptions||{};
for(d in f){if(f[d]!==dR){(c[d]?a:(b||(b={})))[d]=f[d]
}}if(b){dN.extend(true,a,b)
}return a
}dN.fn.load=function(i,c,a){if(typeof i!=="string"&&cD){return cD.apply(this,arguments)
}var f,d,h,g=this,b=i.indexOf(" ");
if(b>=0){f=i.slice(b,i.length);
i=i.slice(0,b)
}if(dN.isFunction(c)){a=c;
c=dR
}else{if(c&&typeof c==="object"){h="POST"
}}if(g.length>0){dN.ajax({url:i,type:h,dataType:"html",data:c}).done(function(j){d=arguments;
g.html(f?dN("<div>").append(dN.parseHTML(j)).find(f):j)
}).complete(a&&function(j,k){g.each(a,d||[j.responseText,k,j])
})
}return this
};
dN.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){dN.fn[b]=function(c){return this.on(b,c)
}
});
dN.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:cT,type:"GET",isLocal:c2.test(dm[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":eg,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":dN.parseJSON,"text xml":dN.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(b,a){return a?cr(cr(b,dN.ajaxSettings),a):cr(dN.ajaxSettings,b)
},ajaxPrefilter:dp(ew),ajaxTransport:dp(eF),ajax:function(h,s){if(typeof h==="object"){s=h;
h=dR
}s=s||{};
var t,q,i,x,f,o,g,w,a=dN.ajaxSetup({},s),j=a.context||a,p=a.context&&(j.nodeType||j.jquery)?dN(j):dN.event,l=dN.Deferred(),k=dN.Callbacks("once memory"),c=a.statusCode||{},u={},v={},b=0,d="canceled",r={readyState:0,getResponseHeader:function(z){var y;
if(b===2){if(!w){w={};
while((y=dv.exec(x))){w[y[1].toLowerCase()]=y[2]
}}y=w[z.toLowerCase()]
}return y==null?null:y
},getAllResponseHeaders:function(){return b===2?x:null
},setRequestHeader:function(z,A){var y=z.toLowerCase();
if(!b){z=v[y]=v[y]||z;
u[z]=A
}return this
},overrideMimeType:function(y){if(!b){a.mimeType=y
}return this
},statusCode:function(y){var z;
if(y){if(b<2){for(z in y){c[z]=[c[z],y[z]]
}}else{r.always(y[r.status])
}}return this
},abort:function(y){var z=y||d;
if(g){g.abort(z)
}m(0,z);
return this
}};
l.promise(r).complete=k.add;
r.success=r.done;
r.error=r.fail;
a.url=((h||a.url||cT)+"").replace(cy,"").replace(cA,dm[1]+"//");
a.type=s.method||s.type||a.method||a.type;
a.dataTypes=dN.trim(a.dataType||"*").toLowerCase().match(ep)||[""];
if(a.crossDomain==null){t=dO.exec(a.url.toLowerCase());
a.crossDomain=!!(t&&(t[1]!==dm[1]||t[2]!==dm[2]||(t[3]||(t[1]==="http:"?"80":"443"))!==(dm[3]||(dm[1]==="http:"?"80":"443"))))
}if(a.data&&a.processData&&typeof a.data!=="string"){a.data=dN.param(a.data,a.traditional)
}dq(ew,a,s,r);
if(b===2){return r
}o=a.global;
if(o&&dN.active++===0){dN.event.trigger("ajaxStart")
}a.type=a.type.toUpperCase();
a.hasContent=!b3.test(a.type);
i=a.url;
if(!a.hasContent){if(a.data){i=(a.url+=(cl.test(i)?"&":"?")+a.data);
delete a.data
}if(a.cache===false){a.url=c9.test(i)?i.replace(c9,"$1_="+dy++):i+(cl.test(i)?"&":"?")+"_="+dy++
}}if(a.ifModified){if(dN.lastModified[i]){r.setRequestHeader("If-Modified-Since",dN.lastModified[i])
}if(dN.etag[i]){r.setRequestHeader("If-None-Match",dN.etag[i])
}}if(a.data&&a.hasContent&&a.contentType!==false||s.contentType){r.setRequestHeader("Content-Type",a.contentType)
}r.setRequestHeader("Accept",a.dataTypes[0]&&a.accepts[a.dataTypes[0]]?a.accepts[a.dataTypes[0]]+(a.dataTypes[0]!=="*"?", "+eg+"; q=0.01":""):a.accepts["*"]);
for(q in a.headers){r.setRequestHeader(q,a.headers[q])
}if(a.beforeSend&&(a.beforeSend.call(j,r,a)===false||b===2)){return r.abort()
}d="abort";
for(q in {success:1,error:1,complete:1}){r[q](a[q])
}g=dq(eF,a,s,r);
if(!g){m(-1,"No Transport")
}else{r.readyState=1;
if(o){p.trigger("ajaxSend",[r,a])
}if(a.async&&a.timeout>0){f=setTimeout(function(){r.abort("timeout")
},a.timeout)
}try{b=1;
g.send(u,m)
}catch(n){if(b<2){m(-1,n)
}else{throw n
}}}function m(y,F,H,C){var D,A,B,G,E,z=F;
if(b===2){return
}b=2;
if(f){clearTimeout(f)
}g=dR;
x=C||"";
r.readyState=y>0?4:0;
D=y>=200&&y<300||y===304;
if(H){G=eD(a,r,H)
}G=ef(a,G,r,D);
if(D){if(a.ifModified){E=r.getResponseHeader("Last-Modified");
if(E){dN.lastModified[i]=E
}E=r.getResponseHeader("etag");
if(E){dN.etag[i]=E
}}if(y===204||a.type==="HEAD"){z="nocontent"
}else{if(y===304){z="notmodified"
}else{z=G.state;
A=G.data;
B=G.error;
D=!B
}}}else{B=z;
if(y||!z){z="error";
if(y<0){y=0
}}}r.status=y;
r.statusText=(F||z)+"";
if(D){l.resolveWith(j,[A,z,r])
}else{l.rejectWith(j,[r,z,B])
}r.statusCode(c);
c=dR;
if(o){p.trigger(D?"ajaxSuccess":"ajaxError",[r,a,D?A:B])
}k.fireWith(j,[r,z]);
if(o){p.trigger("ajaxComplete",[r,a]);
if(!(--dN.active)){dN.event.trigger("ajaxStop")
}}}return r
},getJSON:function(a,c,b){return dN.get(a,c,b,"json")
},getScript:function(b,a){return dN.get(b,dR,a,"script")
}});
dN.each(["get","post"],function(a,b){dN[b]=function(g,d,c,f){if(dN.isFunction(d)){f=f||c;
c=d;
d=dR
}return dN.ajax({url:g,type:b,dataType:f,data:d,success:c})
}
});
function eD(j,h,i){var g,c,f,a,b=j.contents,d=j.dataTypes;
while(d[0]==="*"){d.shift();
if(c===dR){c=j.mimeType||h.getResponseHeader("Content-Type")
}}if(c){for(a in b){if(b[a]&&b[a].test(c)){d.unshift(a);
break
}}}if(d[0] in i){f=d[0]
}else{for(a in i){if(!d[0]||j.converters[a+" "+d[0]]){f=a;
break
}if(!g){g=a
}}f=f||g
}if(f){if(f!==d[0]){d.unshift(f)
}return i[f]
}}function ef(d,c,a,m){var h,j,g,f,b,i={},k=d.dataTypes.slice();
if(k[1]){for(g in d.converters){i[g.toLowerCase()]=d.converters[g]
}}j=k.shift();
while(j){if(d.responseFields[j]){a[d.responseFields[j]]=c
}if(!b&&m&&d.dataFilter){c=d.dataFilter(c,d.dataType)
}b=j;
j=k.shift();
if(j){if(j==="*"){j=b
}else{if(b!=="*"&&b!==j){g=i[b+" "+j]||i["* "+j];
if(!g){for(h in i){f=h.split(" ");
if(f[1]===j){g=i[b+" "+f[0]]||i["* "+f[0]];
if(g){if(g===true){g=i[h]
}else{if(i[h]!==true){j=f[0];
k.unshift(f[1])
}}break
}}}}if(g!==true){if(g&&d["throws"]){c=g(c)
}else{try{c=g(c)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+b+" to "+j}
}}}}}}}return{state:"success",data:c}
}dN.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){dN.globalEval(a);
return a
}}});
dN.ajaxPrefilter("script",function(a){if(a.cache===dR){a.cache=false
}if(a.crossDomain){a.type="GET";
a.global=false
}});
dN.ajaxTransport("script",function(c){if(c.crossDomain){var a,b=dJ.head||dN("head")[0]||dJ.documentElement;
return{send:function(d,f){a=dJ.createElement("script");
a.async=true;
if(c.scriptCharset){a.charset=c.scriptCharset
}a.src=c.url;
a.onload=a.onreadystatechange=function(g,h){if(h||!a.readyState||/loaded|complete/.test(a.readyState)){a.onload=a.onreadystatechange=null;
if(a.parentNode){a.parentNode.removeChild(a)
}a=null;
if(!h){f(200,"success")
}}};
b.insertBefore(a,b.firstChild)
},abort:function(){if(a){a.onload(dR,true)
}}}
}});
var cU=[],cb=/(=)\?(?=&|$)|\?\?/;
dN.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cU.pop()||(dN.expando+"_"+(dy++));
this[a]=true;
return a
}});
dN.ajaxPrefilter("json jsonp",function(h,d,b){var a,f,g,c=h.jsonp!==false&&(cb.test(h.url)?"url":typeof h.data==="string"&&!(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&cb.test(h.data)&&"data");
if(c||h.dataTypes[0]==="jsonp"){a=h.jsonpCallback=dN.isFunction(h.jsonpCallback)?h.jsonpCallback():h.jsonpCallback;
if(c){h[c]=h[c].replace(cb,"$1"+a)
}else{if(h.jsonp!==false){h.url+=(cl.test(h.url)?"&":"?")+h.jsonp+"="+a
}}h.converters["script json"]=function(){if(!g){dN.error(a+" was not called")
}return g[0]
};
h.dataTypes[0]="json";
f=c1[a];
c1[a]=function(){g=arguments
};
b.always(function(){c1[a]=f;
if(h[a]){h.jsonpCallback=d.jsonpCallback;
cU.push(a)
}if(g&&dN.isFunction(f)){f(g[0])
}g=f=dR
});
return"script"
}});
var cu,d0,c3=0,dw=c1.ActiveXObject&&function(){var a;
for(a in cu){cu[a](dR,true)
}};
function ex(){try{return new c1.XMLHttpRequest()
}catch(a){}}function dI(){try{return new c1.ActiveXObject("Microsoft.XMLHTTP")
}catch(a){}}dN.ajaxSettings.xhr=c1.ActiveXObject?function(){return !this.isLocal&&ex()||dI()
}:ex;
d0=dN.ajaxSettings.xhr();
dN.support.cors=!!d0&&("withCredentials" in d0);
d0=dN.support.ajax=!!d0;
if(d0){dN.ajaxTransport(function(b){if(!b.crossDomain||dN.support.cors){var a;
return{send:function(g,c){var f,h,i=b.xhr();
if(b.username){i.open(b.type,b.url,b.async,b.username,b.password)
}else{i.open(b.type,b.url,b.async)
}if(b.xhrFields){for(h in b.xhrFields){i[h]=b.xhrFields[h]
}}if(b.mimeType&&i.overrideMimeType){i.overrideMimeType(b.mimeType)
}if(!b.crossDomain&&!g["X-Requested-With"]){g["X-Requested-With"]="XMLHttpRequest"
}try{for(h in g){i.setRequestHeader(h,g[h])
}}catch(d){}i.send((b.hasContent&&b.data)||null);
a=function(j,m){var p,n,q,o;
try{if(a&&(m||i.readyState===4)){a=dR;
if(f){i.onreadystatechange=dN.noop;
if(dw){delete cu[f]
}}if(m){if(i.readyState!==4){i.abort()
}}else{o={};
p=i.status;
n=i.getAllResponseHeaders();
if(typeof i.responseText==="string"){o.text=i.responseText
}try{q=i.statusText
}catch(k){q=""
}if(!p&&b.isLocal&&!b.crossDomain){p=o.text?200:404
}else{if(p===1223){p=204
}}}}}catch(l){if(!m){c(-1,l)
}}if(o){c(p,q,o,n)
}};
if(!b.async){a()
}else{if(i.readyState===4){setTimeout(a)
}else{f=++c3;
if(dw){if(!cu){cu={};
dN(c1).unload(dw)
}cu[f]=a
}i.onreadystatechange=a
}}},abort:function(){if(a){a(dR,true)
}}}
}})
}var c8,dz,dE=/^(?:toggle|show|hide)$/,cF=new RegExp("^(?:([+-])=|)("+dD+")([a-z%]*)$","i"),cK=/queueHooks$/,cP=[dk],cw={"*":[function(d,a){var i=this.createTween(d,a),h=i.cur(),c=cF.exec(a),j=c&&c[3]||(dN.cssNumber[d]?"":"px"),g=(dN.cssNumber[d]||j!=="px"&&+h)&&cF.exec(dN.css(i.elem,d)),f=1,b=20;
if(g&&g[3]!==j){j=j||g[3];
c=c||[];
g=+h||1;
do{f=f||".5";
g=g/f;
dN.style(i.elem,d,g+j)
}while(f!==(f=i.cur()/h)&&f!==1&&--b)
}if(c){g=i.start=+g||+h||0;
i.unit=j;
i.end=c[1]?g+(c[1]+1)*c[2]:+c[2]
}return i
}]};
function cE(){setTimeout(function(){c8=dR
});
return(c8=dN.now())
}function cc(h,f,a){var g,b=(cw[f]||[]).concat(cw["*"]),c=0,d=b.length;
for(;
c<d;
c++){if((g=b[c].call(a,f,h))){return g
}}}function dt(k,c,b){var f,g,l=0,a=cP.length,j=dN.Deferred().always(function(){delete h.elem
}),h=function(){if(g){return false
}var m=c8||cE(),q=Math.max(0,i.startTime+i.duration-m),r=q/i.duration||0,p=1-r,n=0,o=i.tweens.length;
for(;
n<o;
n++){i.tweens[n].run(p)
}j.notifyWith(k,[i,p,q]);
if(p<1&&o){return q
}else{j.resolveWith(k,[i]);
return false
}},i=j.promise({elem:k,props:dN.extend({},c),opts:dN.extend(true,{specialEasing:{}},b),originalProperties:c,originalOptions:b,startTime:c8||cE(),duration:b.duration,tweens:[],createTween:function(n,m){var o=dN.Tween(k,i.opts,n,m,i.opts.specialEasing[n]||i.opts.easing);
i.tweens.push(o);
return o
},stop:function(m){var n=0,o=m?i.tweens.length:0;
if(g){return this
}g=true;
for(;
n<o;
n++){i.tweens[n].run(1)
}if(m){j.resolveWith(k,[i,m])
}else{j.rejectWith(k,[i,m])
}return this
}}),d=i.props;
dH(d,i.opts.specialEasing);
for(;
l<a;
l++){f=cP[l].call(i,k,d,i.opts);
if(f){return f
}}dN.map(d,cc,i);
if(dN.isFunction(i.opts.start)){i.opts.start.call(k,i)
}dN.fx.timer(dN.extend(h,{elem:k,anim:i,queue:i.opts.queue}));
return i.progress(i.opts.progress).done(i.opts.done,i.opts.complete).fail(i.opts.fail).always(i.opts.always)
}function dH(f,g){var c,d,a,h,b;
for(c in f){d=dN.camelCase(c);
a=g[d];
h=f[c];
if(dN.isArray(h)){a=h[1];
h=f[c]=h[0]
}if(c!==d){f[d]=h;
delete f[c]
}b=dN.cssHooks[d];
if(b&&"expand" in b){h=b.expand(h);
delete f[d];
for(c in h){if(!(c in f)){f[c]=h[c];
g[c]=a
}}}else{g[d]=a
}}}dN.Animation=dN.extend(dt,{tweener:function(a,b){if(dN.isFunction(a)){b=a;
a=["*"]
}else{a=a.split(" ")
}var f,c=0,d=a.length;
for(;
c<d;
c++){f=a[c];
cw[f]=cw[f]||[];
cw[f].unshift(b)
}},prefilter:function(a,b){if(b){cP.unshift(a)
}else{cP.push(a)
}}});
function dk(c,k,h){var j,o,m,n,f,g,a=this,i={},l=c.style,d=c.nodeType&&et(c),b=dN._data(c,"fxshow");
if(!h.queue){f=dN._queueHooks(c,"fx");
if(f.unqueued==null){f.unqueued=0;
g=f.empty.fire;
f.empty.fire=function(){if(!f.unqueued){g()
}}
}f.unqueued++;
a.always(function(){a.always(function(){f.unqueued--;
if(!dN.queue(c,"fx").length){f.empty.fire()
}})
})
}if(c.nodeType===1&&("height" in k||"width" in k)){h.overflow=[l.overflow,l.overflowX,l.overflowY];
if(dN.css(c,"display")==="inline"&&dN.css(c,"float")==="none"){if(!dN.support.inlineBlockNeedsLayout||dX(c.nodeName)==="inline"){l.display="inline-block"
}else{l.zoom=1
}}}if(h.overflow){l.overflow="hidden";
if(!dN.support.shrinkWrapBlocks){a.always(function(){l.overflow=h.overflow[0];
l.overflowX=h.overflow[1];
l.overflowY=h.overflow[2]
})
}}for(j in k){o=k[j];
if(dE.exec(o)){delete k[j];
m=m||o==="toggle";
if(o===(d?"hide":"show")){continue
}i[j]=b&&b[j]||dN.style(c,j)
}}if(!dN.isEmptyObject(i)){if(b){if("hidden" in b){d=b.hidden
}}else{b=dN._data(c,"fxshow",{})
}if(m){b.hidden=!d
}if(d){dN(c).show()
}else{a.done(function(){dN(c).hide()
})
}a.done(function(){var p;
dN._removeData(c,"fxshow");
for(p in i){dN.style(c,p,i[p])
}});
for(j in i){n=cc(d?b[j]:0,j,a);
if(!(j in b)){b[j]=n.start;
if(d){n.end=n.start;
n.start=j==="width"||j==="height"?1:0
}}}}}function d9(c,f,a,d,b){return new d9.prototype.init(c,f,a,d,b)
}dN.Tween=d9;
d9.prototype={constructor:d9,init:function(g,b,c,a,f,d){this.elem=g;
this.prop=c;
this.easing=f||"swing";
this.options=b;
this.start=this.now=this.cur();
this.end=a;
this.unit=d||(dN.cssNumber[c]?"":"px")
},cur:function(){var a=d9.propHooks[this.prop];
return a&&a.get?a.get(this):d9.propHooks._default.get(this)
},run:function(a){var b,c=d9.propHooks[this.prop];
if(this.options.duration){this.pos=b=dN.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration)
}else{this.pos=b=a
}this.now=(this.end-this.start)*b+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(c&&c.set){c.set(this)
}else{d9.propHooks._default.set(this)
}return this
}};
d9.prototype.init.prototype=d9.prototype;
d9.propHooks={_default:{get:function(b){var a;
if(b.elem[b.prop]!=null&&(!b.elem.style||b.elem.style[b.prop]==null)){return b.elem[b.prop]
}a=dN.css(b.elem,b.prop,"");
return !a||a==="auto"?0:a
},set:function(a){if(dN.fx.step[a.prop]){dN.fx.step[a.prop](a)
}else{if(a.elem.style&&(a.elem.style[dN.cssProps[a.prop]]!=null||dN.cssHooks[a.prop])){dN.style(a.elem,a.prop,a.now+a.unit)
}else{a.elem[a.prop]=a.now
}}}}};
d9.propHooks.scrollTop=d9.propHooks.scrollLeft={set:function(a){if(a.elem.nodeType&&a.elem.parentNode){a.elem[a.prop]=a.now
}}};
dN.each(["toggle","show","hide"],function(c,a){var b=dN.fn[a];
dN.fn[a]=function(g,f,d){return g==null||typeof g==="boolean"?b.apply(this,arguments):this.animate(c7(a,true),g,f,d)
}
});
dN.fn.extend({fadeTo:function(c,d,b,a){return this.filter(et).css("opacity",0).show().end().animate({opacity:d},c,b,a)
},animate:function(g,h,c,a){var d=dN.isEmptyObject(g),f=dN.speed(h,c,a),b=function(){var i=dt(this,dN.extend({},g),f);
if(d||dN._data(this,"finish")){i.stop(true)
}};
b.finish=b;
return d||f.queue===false?this.each(b):this.queue(f.queue,b)
},stop:function(d,a,b){var c=function(f){var g=f.stop;
delete f.stop;
g(b)
};
if(typeof d!=="string"){b=a;
a=d;
d=dR
}if(a&&d!==false){this.queue(d||"fx",[])
}return this.each(function(){var g=true,h=d!=null&&d+"queueHooks",i=dN.timers,f=dN._data(this);
if(h){if(f[h]&&f[h].stop){c(f[h])
}}else{for(h in f){if(f[h]&&f[h].stop&&cK.test(h)){c(f[h])
}}}for(h=i.length;
h--;
){if(i[h].elem===this&&(d==null||i[h].queue===d)){i[h].anim.stop(b);
g=false;
i.splice(h,1)
}}if(g||!b){dN.dequeue(this,d)
}})
},finish:function(a){if(a!==false){a=a||"fx"
}return this.each(function(){var d,b=dN._data(this),g=b[a+"queue"],c=b[a+"queueHooks"],h=dN.timers,f=g?g.length:0;
b.finish=true;
dN.queue(this,a,[]);
if(c&&c.stop){c.stop.call(this,true)
}for(d=h.length;
d--;
){if(h[d].elem===this&&h[d].queue===a){h[d].anim.stop(true);
h.splice(d,1)
}}for(d=0;
d<f;
d++){if(g[d]&&g[d].finish){g[d].finish.call(this)
}}delete b.finish
})
}});
function c7(f,d){var a,b={height:f},c=0;
d=d?1:0;
for(;
c<4;
c+=2-d){a=cH[c];
b["margin"+a]=b["padding"+a]=f
}if(d){b.opacity=b.width=f
}return b
}dN.each({slideDown:c7("show"),slideUp:c7("hide"),slideToggle:c7("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){dN.fn[a]=function(f,d,c){return this.animate(b,f,d,c)
}
});
dN.speed=function(d,a,b){var c=d&&typeof d==="object"?dN.extend({},d):{complete:b||!b&&a||dN.isFunction(d)&&d,duration:d,easing:b&&a||a&&!dN.isFunction(a)&&a};
c.duration=dN.fx.off?0:typeof c.duration==="number"?c.duration:c.duration in dN.fx.speeds?dN.fx.speeds[c.duration]:dN.fx.speeds._default;
if(c.queue==null||c.queue===true){c.queue="fx"
}c.old=c.complete;
c.complete=function(){if(dN.isFunction(c.old)){c.old.call(this)
}if(c.queue){dN.dequeue(this,c.queue)
}};
return c
};
dN.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}};
dN.timers=[];
dN.fx=d9.prototype.init;
dN.fx.tick=function(){var c,a=dN.timers,b=0;
c8=dN.now();
for(;
b<a.length;
b++){c=a[b];
if(!c()&&a[b]===c){a.splice(b--,1)
}}if(!a.length){dN.fx.stop()
}c8=dR
};
dN.fx.timer=function(a){if(a()&&dN.timers.push(a)){dN.fx.start()
}};
dN.fx.interval=13;
dN.fx.start=function(){if(!dz){dz=setInterval(dN.fx.tick,dN.fx.interval)
}};
dN.fx.stop=function(){clearInterval(dz);
dz=null
};
dN.fx.speeds={slow:600,fast:200,_default:400};
dN.fx.step={};
if(dN.expr&&dN.expr.filters){dN.expr.filters.animated=function(a){return dN.grep(dN.timers,function(b){return a===b.elem
}).length
}
}dN.fn.offset=function(c){if(arguments.length){return c===dR?this:this.each(function(h){dN.offset.setOffset(this,c,h)
})
}var a,d,f={top:0,left:0},b=this[0],g=b&&b.ownerDocument;
if(!g){return
}a=g.documentElement;
if(!dN.contains(a,b)){return f
}if(typeof b.getBoundingClientRect!==cM){f=b.getBoundingClientRect()
}d=eu(g);
return{top:f.top+(d.pageYOffset||a.scrollTop)-(a.clientTop||0),left:f.left+(d.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}
};
dN.offset={setOffset:function(g,i,h){var j=dN.css(g,"position");
if(j==="static"){g.style.position="relative"
}var a=dN(g),c=a.offset(),n=dN.css(g,"top"),m=dN.css(g,"left"),l=(j==="absolute"||j==="fixed")&&dN.inArray("auto",[n,m])>-1,k={},d={},f,b;
if(l){d=a.position();
f=d.top;
b=d.left
}else{f=parseFloat(n)||0;
b=parseFloat(m)||0
}if(dN.isFunction(i)){i=i.call(g,h,c)
}if(i.top!=null){k.top=(i.top-c.top)+f
}if(i.left!=null){k.left=(i.left-c.left)+b
}if("using" in i){i.using.call(g,k)
}else{a.css(k)
}}};
dN.fn.extend({position:function(){if(!this[0]){return
}var c,b,d={top:0,left:0},a=this[0];
if(dN.css(a,"position")==="fixed"){b=a.getBoundingClientRect()
}else{c=this.offsetParent();
b=this.offset();
if(!dN.nodeName(c[0],"html")){d=c.offset()
}d.top+=dN.css(c[0],"borderTopWidth",true);
d.left+=dN.css(c[0],"borderLeftWidth",true)
}return{top:b.top-d.top-dN.css(a,"marginTop",true),left:b.left-d.left-dN.css(a,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||eq;
while(a&&(!dN.nodeName(a,"html")&&dN.css(a,"position")==="static")){a=a.offsetParent
}return a||eq
})
}});
dN.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var a=/Y/.test(c);
dN.fn[b]=function(d){return dN.access(this,function(f,g,h){var i=eu(f);
if(h===dR){return i?(c in i)?i[c]:i.document.documentElement[g]:f[g]
}if(i){i.scrollTo(!a?h:dN(i).scrollLeft(),a?h:dN(i).scrollTop())
}else{f[g]=h
}},b,d,arguments.length,null)
}
});
function eu(a){return dN.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false
}dN.each({Height:"height",Width:"width"},function(a,b){dN.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){dN.fn[d]=function(h,i){var f=arguments.length&&(c||typeof h!=="boolean"),g=c||(h===true||i===true?"margin":"border");
return dN.access(this,function(k,l,m){var j;
if(dN.isWindow(k)){return k.document.documentElement["client"+a]
}if(k.nodeType===9){j=k.documentElement;
return Math.max(k.body["scroll"+a],j["scroll"+a],k.body["offset"+a],j["offset"+a],j["client"+a])
}return m===dR?dN.css(k,l,g):dN.style(k,l,m,g)
},b,f?h:dR,f,null)
}
})
});
dN.fn.size=function(){return this.length
};
dN.fn.andSelf=dN.fn.addBack;
if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=dN
}else{c1.jQuery=c1.$=dN;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return dN
})
}}})(window);