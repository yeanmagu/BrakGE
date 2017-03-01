(function(a2,bv){var ci=function(b,a){return new ci.fn.init(b,a)
},aY=a2.jQuery,bd=a2.$,b0=a2.document,bj,ce=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,b8=/^.[^:#\[\.,]*$/,a1=/\S/,bW=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,bE=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bg=navigator.userAgent,cg,bb=false,aZ=[],cd,bT=Object.prototype.toString,cm=Object.prototype.hasOwnProperty,b5=Array.prototype.push,bx=Array.prototype.slice,cc=Array.prototype.indexOf;
ci.fn=ci.prototype={init:function(f,a){var d,c,e,b;
if(!f){return this
}if(f.nodeType){this.context=this[0]=f;
this.length=1;
return this
}if(typeof f==="string"){d=ce.exec(f);
if(d&&(d[1]||!a)){if(d[1]){b=(a?a.ownerDocument||a:b0);
e=bE.exec(f);
if(e){if(ci.isPlainObject(a)){f=[b0.createElement(e[1])];
ci.fn.attr.call(f,a,true)
}else{f=[b.createElement(e[1])]
}}else{e=bC([d[1]],[b]);
f=(e.cacheable?e.fragment.cloneNode(true):e.fragment).childNodes
}}else{c=b0.getElementById(d[2]);
if(c){if(c.id!==d[2]){return bj.find(f)
}this.length=1;
this[0]=c
}this.context=b0;
this.selector=f;
return this
}}else{if(!a&&/^\w+$/.test(f)){this.selector=f;
this.context=b0;
f=b0.getElementsByTagName(f)
}else{if(!a||a.jquery){return(a||bj).find(f)
}else{return ci(a).find(f)
}}}}else{if(ci.isFunction(f)){return bj.ready(f)
}}if(f.selector!==bv){this.selector=f.selector;
this.context=f.context
}return ci.isArray(f)?this.setArray(f):ci.makeArray(f,this)
},selector:"",jquery:"1.4.1",length:0,size:function(){return this.length
},toArray:function(){return bx.call(this,0)
},get:function(a){return a==null?this.toArray():(a<0?this.slice(a)[0]:this[a])
},pushStack:function(a,b,d){var c=ci(a||null);
c.prevObject=this;
c.context=this.context;
if(b==="find"){c.selector=this.selector+(this.selector?" ":"")+d
}else{if(b){c.selector=this.selector+"."+b+"("+d+")"
}}return c
},setArray:function(a){this.length=0;
b5.apply(this,a);
return this
},each:function(b,a){return ci.each(this,b,a)
},ready:function(a){ci.bindReady();
if(ci.isReady){a.call(b0,ci)
}else{if(aZ){aZ.push(a)
}}return this
},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(bx.apply(this,arguments),"slice",bx.call(arguments).join(","))
},map:function(a){return this.pushStack(ci.map(this,function(b,c){return a.call(b,c,b)
}))
},end:function(){return this.prevObject||ci(null)
},push:b5,sort:[].sort,splice:[].splice};
ci.fn.init.prototype=ci.fn;
ci.extend=ci.fn.extend=function(){var f=arguments[0]||{},a=1,b=arguments.length,i=false,d,c,e,h;
if(typeof f==="boolean"){i=f;
f=arguments[1]||{};
a=2
}if(typeof f!=="object"&&!ci.isFunction(f)){f={}
}if(b===a){f=this;
--a
}for(;
a<b;
a++){if((d=arguments[a])!=null){for(c in d){e=f[c];
h=d[c];
if(f===h){continue
}if(i&&h&&(ci.isPlainObject(h)||ci.isArray(h))){var g=e&&(ci.isPlainObject(e)||ci.isArray(e))?e:ci.isArray(h)?[]:{};
f[c]=ci.extend(i,g,h)
}else{if(h!==bv){f[c]=h
}}}}}return f
};
ci.extend({noConflict:function(a){a2.$=bd;
if(a){a2.jQuery=aY
}return ci
},isReady:false,ready:function(){if(!ci.isReady){if(!b0.body){return setTimeout(ci.ready,13)
}ci.isReady=true;
if(aZ){var a,b=0;
while((a=aZ[b++])){a.call(b0,ci)
}aZ=null
}if(ci.fn.triggerHandler){ci(b0).triggerHandler("ready")
}}},bindReady:function(){if(bb){return
}bb=true;
if(b0.readyState==="complete"){return ci.ready()
}if(b0.addEventListener){b0.addEventListener("DOMContentLoaded",cd,false);
a2.addEventListener("load",ci.ready,false)
}else{if(b0.attachEvent){b0.attachEvent("onreadystatechange",cd);
a2.attachEvent("onload",ci.ready);
var b=false;
try{b=a2.frameElement==null
}catch(a){}if(b0.documentElement.doScroll&&b){cr()
}}}},isFunction:function(a){return bT.call(a)==="[object Function]"
},isArray:function(a){return bT.call(a)==="[object Array]"
},isPlainObject:function(b){if(!b||bT.call(b)!=="[object Object]"||b.nodeType||b.setInterval){return false
}if(b.constructor&&!cm.call(b,"constructor")&&!cm.call(b.constructor.prototype,"isPrototypeOf")){return false
}var a;
for(a in b){}return a===bv||cm.call(b,a)
},isEmptyObject:function(b){for(var a in b){return false
}return true
},error:function(a){throw a
},parseJSON:function(a){if(typeof a!=="string"||!a){return null
}if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return a2.JSON&&a2.JSON.parse?a2.JSON.parse(a):(new Function("return "+a))()
}else{ci.error("Invalid JSON: "+a)
}},noop:function(){},globalEval:function(a){if(a&&a1.test(a)){var b=b0.getElementsByTagName("head")[0]||b0.documentElement,c=b0.createElement("script");
c.type="text/javascript";
if(ci.support.scriptEval){c.appendChild(b0.createTextNode(a))
}else{c.text=a
}b.insertBefore(c,b.firstChild);
b.removeChild(c)
}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
},each:function(g,b,a){var f,c=0,e=g.length,d=e===bv||ci.isFunction(g);
if(a){if(d){for(f in g){if(b.apply(g[f],a)===false){break
}}}else{for(;
c<e;
){if(b.apply(g[c++],a)===false){break
}}}}else{if(d){for(f in g){if(b.call(g[f],f,g[f])===false){break
}}}else{for(var h=g[0];
c<e&&b.call(h,c,h)!==false;
h=g[++c]){}}}return g
},trim:function(a){return(a||"").replace(bW,"")
},makeArray:function(a,b){var c=b||[];
if(a!=null){if(a.length==null||typeof a==="string"||ci.isFunction(a)||(typeof a!=="function"&&a.setInterval)){b5.call(c,a)
}else{ci.merge(c,a)
}}return c
},inArray:function(b,a){if(a.indexOf){return a.indexOf(b)
}for(var c=0,d=a.length;
c<d;
c++){if(a[c]===b){return c
}}return -1
},merge:function(a,e){var b=a.length,c=0;
if(typeof e.length==="number"){for(var d=e.length;
c<d;
c++){a[b++]=e[c]
}}else{while(e[c]!==bv){a[b++]=e[c++]
}}a.length=b;
return a
},grep:function(b,a,d){var f=[];
for(var c=0,e=b.length;
c<e;
c++){if(!d!==!a(b[c],c)){f.push(b[c])
}}return f
},map:function(c,b,a){var f=[],g;
for(var d=0,e=c.length;
d<e;
d++){g=b(c[d],d,a);
if(g!=null){f[f.length]=g
}}return f.concat.apply([],f)
},guid:1,proxy:function(a,b,c){if(arguments.length===2){if(typeof b==="string"){c=a;
a=c[b];
b=bv
}else{if(b&&!ci.isFunction(b)){c=b;
b=bv
}}}if(!b&&a){b=function(){return a.apply(c||this,arguments)
}
}if(a){b.guid=a.guid=a.guid||b.guid||ci.guid++
}return b
},uaMatch:function(b){b=b.toLowerCase();
var a=/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||!/compatible/.test(b)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
},browser:{}});
cg=ci.uaMatch(bg);
if(cg.browser){ci.browser[cg.browser]=true;
ci.browser.version=cg.version
}if(ci.browser.webkit){ci.browser.safari=true
}if(cc){ci.inArray=function(b,a){return cc.call(a,b)
}
}bj=ci(b0);
if(b0.addEventListener){cd=function(){b0.removeEventListener("DOMContentLoaded",cd,false);
ci.ready()
}
}else{if(b0.attachEvent){cd=function(){if(b0.readyState==="complete"){b0.detachEvent("onreadystatechange",cd);
ci.ready()
}}
}}function cr(){if(ci.isReady){return
}try{b0.documentElement.doScroll("left")
}catch(a){setTimeout(cr,1);
return
}ci.ready()
}function cj(b,a){if(a.src){ci.ajax({url:a.src,async:false,dataType:"script"})
}else{ci.globalEval(a.text||a.textContent||a.innerHTML||"")
}if(a.parentNode){a.parentNode.removeChild(a)
}}function bY(g,c,f,h,i,e){var d=g.length;
if(typeof c==="object"){for(var b in c){bY(g,b,c[b],h,i,f)
}return g
}if(f!==bv){h=!e&&h&&ci.isFunction(f);
for(var a=0;
a<d;
a++){i(g[a],c,h?f.call(g[a],a,i(g[a],c)):f,e)
}return g
}return d?i(g[0],c):null
}function cn(){return(new Date).getTime()
}(function(){ci.support={};
ci.support={leadingWhitespace:false,tbody:false,htmlSerialize:false,style:false,hrefNormalized:false,opacity:false,cssFloat:false,checkOn:false,optSelected:false,checkClone:false,scriptEval:false,noCloneEvent:false,boxModel:false};
ci.support.submitBubbles=false;
ci.support.changeBubbles=false
})();
ci.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
var a5="jQuery"+cn(),cs=0,bi={};
var bc={};
ci.extend({cache:{},expando:a5,noData:{embed:true,object:true,applet:true},data:function(c,e,b){if(c.nodeName&&ci.noData[c.nodeName.toLowerCase()]){return
}c=c==a2?bi:c;
var d=c[a5],a=ci.cache,f;
if(!e&&!d){return null
}if(!d){d=++cs
}if(typeof e==="object"){c[a5]=d;
f=a[d]=ci.extend(true,{},e)
}else{if(a[d]){f=a[d]
}else{if(typeof b==="undefined"){f=bc
}else{f=a[d]={}
}}}if(b!==bv){c[a5]=d;
f[e]=b
}return typeof e==="string"?f[e]:f
},removeData:function(c,e){if(c.nodeName&&ci.noData[c.nodeName.toLowerCase()]){return
}c=c==a2?bi:c;
var d=c[a5],a=ci.cache,f=a[d];
if(e){if(f){delete f[e];
if(ci.isEmptyObject(f)){ci.removeData(c)
}}}else{try{delete c[a5]
}catch(b){if(c.removeAttribute){c.removeAttribute(a5)
}}delete a[d]
}}});
ci.fn.extend({data:function(b,d){if(typeof b==="undefined"&&this.length){return ci.data(this[0])
}else{if(typeof b==="object"){return this.each(function(){ci.data(this,b)
})
}}var c=b.split(".");
c[1]=c[1]?"."+c[1]:"";
if(d===bv){var a=this.triggerHandler("getData"+c[1]+"!",[c[0]]);
if(a===bv&&this.length){a=ci.data(this[0],b)
}return a===bv&&c[1]?this.data(c[0]):a
}else{return this.trigger("setData"+c[1]+"!",[c[0],d]).each(function(){ci.data(this,b,d)
})
}},removeData:function(a){return this.each(function(){ci.removeData(this,a)
})
}});
ci.extend({queue:function(b,d,a){if(!b){return
}d=(d||"fx")+"queue";
var c=ci.data(b,d);
if(!a){return c||[]
}if(!c||ci.isArray(a)){c=ci.data(b,d,ci.makeArray(a))
}else{c.push(a)
}return c
},dequeue:function(a,d){d=d||"fx";
var c=ci.queue(a,d),b=c.shift();
if(b==="inprogress"){b=c.shift()
}if(b){if(d==="fx"){c.unshift("inprogress")
}b.call(a,function(){ci.dequeue(a,d)
})
}}});
ci.fn.extend({queue:function(b,a){if(typeof b!=="string"){a=b;
b="fx"
}if(a===bv){return ci.queue(this[0],b)
}return this.each(function(d,c){var e=ci.queue(this,b,a);
if(b==="fx"&&e[0]!=="inprogress"){ci.dequeue(this,b)
}})
},dequeue:function(a){return this.each(function(){ci.dequeue(this,a)
})
},delay:function(a,b){a=ci.fx?ci.fx.speeds[a]||a:a;
b=b||"fx";
return this.queue(b,function(){var c=this;
setTimeout(function(){ci.dequeue(c,b)
},a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
}});
var co=/[\n\t]/g,bl=/\s+/,bo=/\r/g,ba=/href|src|style/,br=/(button|input)/i,cp=/(button|input|object|select|textarea)/i,a3=/^(a|area)$/i,b4=/radio|checkbox/;
ci.fn.extend({attr:function(a,b){return bY(this,a,b,true,ci.attr)
},removeAttr:function(b,a){return this.each(function(){ci.attr(this,b,"");
if(this.nodeType===1){this.removeAttribute(b)
}})
},addClass:function(h){if(ci.isFunction(h)){return this.each(function(i){var j=ci(this);
j.addClass(h.call(this,i,j.attr("class")))
})
}if(h&&typeof h==="string"){var d=(h||"").split(bl);
for(var f=0,g=this.length;
f<g;
f++){var e=this[f];
if(e.nodeType===1){if(!e.className){e.className=h
}else{var c=" "+e.className+" ";
for(var a=0,b=d.length;
a<b;
a++){if(c.indexOf(" "+d[a]+" ")<0){e.className+=" "+d[a]
}}}}}}return this
},removeClass:function(h){if(ci.isFunction(h)){return this.each(function(i){var j=ci(this);
j.removeClass(h.call(this,i,j.attr("class")))
})
}if((h&&typeof h==="string")||h===bv){var d=(h||"").split(bl);
for(var f=0,g=this.length;
f<g;
f++){var e=this[f];
if(e.nodeType===1&&e.className){if(h){var c=(" "+e.className+" ").replace(co," ");
for(var a=0,b=d.length;
a<b;
a++){c=c.replace(" "+d[a]+" "," ")
}e.className=c.substring(1,c.length-1)
}else{e.className=""
}}}}return this
},toggleClass:function(d,b){var c=typeof d,a=typeof b==="boolean";
if(ci.isFunction(d)){return this.each(function(e){var f=ci(this);
f.toggleClass(d.call(this,e,f.attr("class"),b),b)
})
}return this.each(function(){if(c==="string"){var g,i=0,e=ci(this),f=b,h=d.split(bl);
while((g=h[i++])){f=a?f:!e.hasClass(g);
e[f?"addClass":"removeClass"](g)
}}else{if(c==="undefined"||c==="boolean"){if(this.className){ci.data(this,"__className__",this.className)
}this.className=this.className||d===false?"":ci.data(this,"__className__")||""
}}})
},hasClass:function(d){var a=" "+d+" ";
for(var b=0,c=this.length;
b<c;
b++){if((" "+this[b].className+" ").replace(co," ").indexOf(a)>-1){return true
}}return false
},val:function(e){if(e===bv){var g=this[0];
if(g){if(ci.nodeName(g,"option")){return(g.attributes.value||{}).specified?g.value:g.text
}if(ci.nodeName(g,"select")){var i=g.selectedIndex,f=[],d=g.options,b=g.type==="select-one";
if(i<0){return null
}for(var h=b?i:0,a=b?i+1:d.length;
h<a;
h++){var c=d[h];
if(c.selected){e=ci(c).val();
if(b){return e
}f.push(e)
}}return f
}if(b4.test(g.type)&&!ci.support.checkOn){return g.getAttribute("value")===null?"on":g.value
}return(g.value||"").replace(bo,"")
}return bv
}var j=ci.isFunction(e);
return this.each(function(k){var l=ci(this),m=e;
if(this.nodeType!==1){return
}if(j){m=e.call(this,k,l.val())
}if(typeof m==="number"){m+=""
}if(ci.isArray(m)&&b4.test(this.type)){this.checked=ci.inArray(l.val(),m)>=0
}else{if(ci.nodeName(this,"select")){var n=ci.makeArray(m);
ci("option",this).each(function(){this.selected=ci.inArray(ci(this).val(),n)>=0
});
if(!n.length){this.selectedIndex=-1
}}else{this.value=m
}}})
}});
ci.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(i,j,f,c){if(!i||i.nodeType===3||i.nodeType===8){return bv
}if(c&&j in ci.attrFn){return ci(i)[j](f)
}var a=i.nodeType!==1||!ci.isXMLDoc(i),d=f!==bv;
j=a&&ci.props[j]||j;
if(i.nodeType===1){var e=ba.test(j);
if(j==="selected"&&!ci.support.optSelected){var b=i.parentNode;
if(b){b.selectedIndex;
if(b.parentNode){b.parentNode.selectedIndex
}}}if(j in i&&a&&!e){if(d){if(j==="type"&&br.test(i.nodeName)&&i.parentNode){ci.error("type property can't be changed")
}i[j]=f
}if(ci.nodeName(i,"form")&&i.getAttributeNode(j)){return i.getAttributeNode(j).nodeValue
}if(j==="tabIndex"){var h=i.getAttributeNode("tabIndex");
return h&&h.specified?h.value:cp.test(i.nodeName)||a3.test(i.nodeName)&&i.href?0:bv
}return i[j]
}if(!ci.support.style&&a&&j==="style"){if(d){i.style.cssText=""+f
}return i.style.cssText
}if(d){i.setAttribute(j,""+f)
}var g=!ci.support.hrefNormalized&&a&&e?i.getAttribute(j,2):i.getAttribute(j);
return g===null?bv:g
}return ci.style(i,j,f)
}});
var bw=function(a){return a.replace(/[^\w\s\.\|`]/g,function(b){return"\\"+b
})
};
ci.event={add:function(b,n,g,a){if(b.nodeType===3||b.nodeType===8){return
}if(b.setInterval&&(b!==a2&&!b.frameElement)){b=a2
}if(!g.guid){g.guid=ci.guid++
}if(a!==bv){var e=g;
g=ci.proxy(e);
g.data=a
}var d=ci.data(b,"events")||ci.data(b,"events",{}),f=ci.data(b,"handle"),c;
if(!f){c=function(){return typeof ci!=="undefined"&&!ci.event.triggered?ci.event.handle.apply(c.elem,arguments):bv
};
f=ci.data(b,"handle",c)
}if(!f){return
}f.elem=b;
n=n.split(/\s+/);
var m,i=0;
while((m=n[i++])){var k=m.split(".");
m=k.shift();
if(i>1){g=ci.proxy(g);
if(a!==bv){g.data=a
}}g.type=k.slice(0).sort().join(".");
var h=d[m],l=this.special[m]||{};
if(!h){h=d[m]={};
if(!l.setup||l.setup.call(b,a,k,g)===false){if(b.addEventListener){b.addEventListener(m,f,false)
}else{if(b.attachEvent){b.attachEvent("on"+m,f)
}}}}if(l.add){var j=l.add.call(b,g,a,k,h);
if(j&&ci.isFunction(j)){j.guid=j.guid||g.guid;
j.data=j.data||g.data;
j.type=j.type||g.type;
g=j
}}h[g.guid]=g;
this.global[m]=true
}b=null
},global:{},remove:function(c,n,g){if(c.nodeType===3||c.nodeType===8){return
}var d=ci.data(c,"events"),k,m,e;
if(d){if(n===bv||(typeof n==="string"&&n.charAt(0)===".")){for(m in d){this.remove(c,m+(n||""))
}}else{if(n.type){g=n.handler;
n=n.type
}n=n.split(/\s+/);
var h=0;
while((m=n[h++])){var j=m.split(".");
m=j.shift();
var a=!j.length,b=ci.map(j.slice(0).sort(),bw),i=new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.)?")+"(\\.|$)"),l=this.special[m]||{};
if(d[m]){if(g){e=d[m][g.guid];
delete d[m][g.guid]
}else{for(var f in d[m]){if(a||i.test(d[m][f].type)){delete d[m][f]
}}}if(l.remove){l.remove.call(c,j,e)
}for(k in d[m]){break
}if(!k){if(!l.teardown||l.teardown.call(c,j)===false){if(c.removeEventListener){c.removeEventListener(m,ci.data(c,"handle"),false)
}else{if(c.detachEvent){c.detachEvent("on"+m,ci.data(c,"handle"))
}}}k=null;
delete d[m]
}}}}for(k in d){break
}if(!k){var f=ci.data(c,"handle");
if(f){f.elem=null
}ci.removeData(c,"events");
ci.removeData(c,"handle")
}}},trigger:function(c,k,b){var i=c.type||c,j=arguments[3];
if(!j){c=typeof c==="object"?c[a5]?c:ci.extend(ci.Event(i),c):ci.Event(i);
if(i.indexOf("!")>=0){c.type=i=i.slice(0,-1);
c.exclusive=true
}if(!b){c.stopPropagation();
if(this.global[i]){ci.each(ci.cache,function(){if(this.events&&this.events[i]){ci.event.trigger(c,k,this.handle.elem)
}})
}}if(!b||b.nodeType===3||b.nodeType===8){return bv
}c.result=bv;
c.target=b;
k=ci.makeArray(k);
k.unshift(c)
}c.currentTarget=b;
var d=ci.data(b,"handle");
if(d){d.apply(b,k)
}var g=b.parentNode||b.ownerDocument;
try{if(!(b&&b.nodeName&&ci.noData[b.nodeName.toLowerCase()])){if(b["on"+i]&&b["on"+i].apply(b,k)===false){c.result=false
}}}catch(a){}if(!c.isPropagationStopped()&&g){ci.event.trigger(c,k,g,true)
}else{if(!c.isDefaultPrevented()){var h=c.target,f,e=ci.nodeName(h,"a")&&i==="click";
if(!e&&!(h&&h.nodeName&&ci.noData[h.nodeName.toLowerCase()])){try{if(h[i]){f=h["on"+i];
if(f){h["on"+i]=null
}this.triggered=true;
h[i]()
}}catch(a){}if(f){h["on"+i]=f
}this.triggered=false
}}}},handle:function(b){var a,d;
b=arguments[0]=ci.event.fix(b||a2.event);
b.currentTarget=this;
var g=b.type.split(".");
b.type=g.shift();
a=!g.length&&!b.exclusive;
var f=new RegExp("(^|\\.)"+g.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)");
d=(ci.data(this,"events")||{})[b.type];
for(var e in d){var c=d[e];
if(a||f.test(c.type)){b.handler=c;
b.data=c.data;
var h=c.apply(this,arguments);
if(h!==bv){b.result=h;
if(h===false){b.preventDefault();
b.stopPropagation()
}}if(b.isImmediatePropagationStopped()){break
}}}return b.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(c){if(c[a5]){return c
}var e=c;
c=ci.Event(e);
for(var d=this.props.length,f;
d;
){f=this.props[--d];
c[f]=e[f]
}if(!c.target){c.target=c.srcElement||b0
}if(c.target.nodeType===3){c.target=c.target.parentNode
}if(!c.relatedTarget&&c.fromElement){c.relatedTarget=c.fromElement===c.target?c.toElement:c.fromElement
}if(c.pageX==null&&c.clientX!=null){var b=b0.documentElement,a=b0.body;
c.pageX=c.clientX+(b&&b.scrollLeft||a&&a.scrollLeft||0)-(b&&b.clientLeft||a&&a.clientLeft||0);
c.pageY=c.clientY+(b&&b.scrollTop||a&&a.scrollTop||0)-(b&&b.clientTop||a&&a.clientTop||0)
}if(!c.which&&((c.charCode||c.charCode===0)?c.charCode:c.keyCode)){c.which=c.charCode||c.keyCode
}if(!c.metaKey&&c.ctrlKey){c.metaKey=c.ctrlKey
}if(!c.which&&c.button!==bv){c.which=(c.button&1?1:(c.button&2?3:(c.button&4?2:0)))
}return c
},guid:100000000,proxy:ci.proxy,special:{ready:{setup:ci.bindReady,teardown:ci.noop},live:{add:function(d,a,c,b){ci.extend(d,a||{});
d.guid+=a.selector+a.live;
a.liveProxy=d;
ci.event.add(this,a.live,bz,a)
},remove:function(b){if(b.length){var c=0,a=new RegExp("(^|\\.)"+b[0]+"(\\.|$)");
ci.each((ci.data(this,"events").live||{}),function(){if(a.test(this.type)){c++
}});
if(c<1){ci.event.remove(this,b[0],bz)
}}},special:{}},beforeunload:{setup:function(a,c,b){if(this.setInterval){this.onbeforeunload=b
}return false
},teardown:function(b,a){if(this.onbeforeunload===a){this.onbeforeunload=null
}}}}};
ci.Event=function(a){if(!this.preventDefault){return new ci.Event(a)
}if(a&&a.type){this.originalEvent=a;
this.type=a.type
}else{this.type=a
}this.timeStamp=cn();
this[a5]=true
};
function bZ(){return false
}function bs(){return true
}ci.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bs;
var a=this.originalEvent;
if(!a){return
}if(a.preventDefault){a.preventDefault()
}a.returnValue=false
},stopPropagation:function(){this.isPropagationStopped=bs;
var a=this.originalEvent;
if(!a){return
}if(a.stopPropagation){a.stopPropagation()
}a.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bs;
this.stopPropagation()
},isDefaultPrevented:bZ,isPropagationStopped:bZ,isImmediatePropagationStopped:bZ};
var b6=function(b){var c=b.relatedTarget;
while(c&&c!==this){try{c=c.parentNode
}catch(a){break
}}if(c!==this){b.type=b.data;
ci.event.handle.apply(this,arguments)
}},bQ=function(a){a.type=a.data;
ci.event.handle.apply(this,arguments)
};
ci.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b,a){ci.event.special[b]={setup:function(c){ci.event.add(this,a,c&&c.selector?bQ:b6,b)
},teardown:function(c){ci.event.remove(this,a,c&&c.selector?bQ:b6)
}}
});
if(!ci.support.submitBubbles){ci.event.special.submit={setup:function(a,c,b){if(this.nodeName.toLowerCase()!=="form"){ci.event.add(this,"click.specialSubmit."+b.guid,function(d){var e=d.target,f=e.type;
if((f==="submit"||f==="image")&&ci(e).closest("form").length){return aX("submit",this,arguments)
}});
ci.event.add(this,"keypress.specialSubmit."+b.guid,function(d){var e=d.target,f=e.type;
if((f==="text"||f==="password")&&ci(e).closest("form").length&&d.keyCode===13){return aX("submit",this,arguments)
}})
}else{return false
}},remove:function(b,a){ci.event.remove(this,"click.specialSubmit"+(a?"."+a.guid:""));
ci.event.remove(this,"keypress.specialSubmit"+(a?"."+a.guid:""))
}}
}if(!ci.support.changeBubbles){var a8=/textarea|input|select/i;
function bh(a){var b=a.type,c=a.value;
if(b==="radio"||b==="checkbox"){c=a.checked
}else{if(b==="select-multiple"){c=a.selectedIndex>-1?ci.map(a.options,function(d){return d.selected
}).join("-"):""
}else{if(a.nodeName.toLowerCase()==="select"){c=a.selectedIndex
}}}return c
}function b1(b){var c=b.target,a,d;
if(!a8.test(c.nodeName)||c.readOnly){return
}a=ci.data(c,"_change_data");
d=bh(c);
if(b.type!=="focusout"||c.type!=="radio"){ci.data(c,"_change_data",d)
}if(a===bv||d===a){return
}if(a!=null||d){b.type="change";
return ci.event.trigger(b,arguments[1],c)
}}ci.event.special.change={filters:{focusout:b1,click:function(a){var b=a.target,c=b.type;
if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select"){return b1.call(this,a)
}},keydown:function(a){var b=a.target,c=b.type;
if((a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea")||(a.keyCode===32&&(c==="checkbox"||c==="radio"))||c==="select-multiple"){return b1.call(this,a)
}},beforeactivate:function(a){var b=a.target;
if(b.nodeName.toLowerCase()==="input"&&b.type==="radio"){ci.data(b,"_change_data",bh(b))
}}},setup:function(a,c,b){for(var d in be){ci.event.add(this,d+".specialChange."+b.guid,be[d])
}return a8.test(this.nodeName)
},remove:function(b,a){for(var c in be){ci.event.remove(this,c+".specialChange"+(a?"."+a.guid:""),be[c])
}return a8.test(this.nodeName)
}};
var be=ci.event.special.change.filters
}function aX(c,b,a){a[0].type=c;
return ci.event.handle.apply(b,a)
}if(b0.addEventListener){ci.each({focus:"focusin",blur:"focusout"},function(c,a){ci.event.special[a]={setup:function(){this.addEventListener(c,b,true)
},teardown:function(){this.removeEventListener(c,b,true)
}};
function b(d){d=ci.event.fix(d);
d.type=a;
return ci.event.handle.call(this,d)
}})
}ci.fn.bind=function(e,a,b){if(typeof e==="object"){for(var d in e){this["bind"](d,a,e[d],b)
}return this
}if(ci.isFunction(a)){b=a;
a=bv
}var c="bind"==="one"?ci.proxy(b,function(f){ci(this).unbind(f,c);
return b.apply(this,arguments)
}):b;
return e==="unload"&&"bind"!=="one"?this.one(e,a,b):this.each(function(){ci.event.add(this,e,c,a)
})
};
ci.fn.one=function(e,a,b){if(typeof e==="object"){for(var d in e){this["one"](d,a,e[d],b)
}return this
}if(ci.isFunction(a)){b=a;
a=bv
}var c="one"==="one"?ci.proxy(b,function(f){ci(this).unbind(f,c);
return b.apply(this,arguments)
}):b;
return e==="unload"&&"one"!=="one"?this.one(e,a,b):this.each(function(){ci.event.add(this,e,c,a)
})
};
ci.fn.extend({unbind:function(c,a){if(typeof c==="object"&&!c.preventDefault){for(var b in c){this.unbind(b,c[b])
}return this
}return this.each(function(){ci.event.remove(this,c,a)
})
},trigger:function(b,a){return this.each(function(){ci.event.trigger(b,a,this)
})
},triggerHandler:function(c,a){if(this[0]){var b=ci.Event(c);
b.preventDefault();
b.stopPropagation();
ci.event.trigger(b,a,this[0]);
return b.result
}},toggle:function(b){var a=arguments,c=1;
while(c<a.length){ci.proxy(b,a[c++])
}return this.click(ci.proxy(b,function(d){var e=(ci.data(this,"lastToggle"+b.guid)||0)%c;
ci.data(this,"lastToggle"+b.guid,e+1);
d.preventDefault();
return a[e].apply(this,arguments)||false
}))
},hover:function(b,a){return this.mouseenter(b).mouseleave(a||b)
}});
ci.fn.live=function(e,a,b){var d,c=0;
if(ci.isFunction(a)){b=a;
a=bv
}e=(e||"").split(/\s+/);
while((d=e[c++])!=null){d=d==="focus"?"focusin":d==="blur"?"focusout":d==="hover"?e.push("mouseleave")&&"mouseenter":d;
if("live"==="live"){ci(this.context).bind(bu(d,this.selector),{data:a,selector:this.selector,live:d},b)
}else{ci(this.context).unbind(bu(d,this.selector),b?{guid:b.guid+this.selector+d}:null)
}}return this
};
ci.fn.die=function(e,a,b){var d,c=0;
if(ci.isFunction(a)){b=a;
a=bv
}e=(e||"").split(/\s+/);
while((d=e[c++])!=null){d=d==="focus"?"focusin":d==="blur"?"focusout":d==="hover"?e.push("mouseleave")&&"mouseenter":d;
if("die"==="live"){ci(this.context).bind(bu(d,this.selector),{data:a,selector:this.selector,live:d},b)
}else{ci(this.context).unbind(bu(d,this.selector),b?{guid:b.guid+this.selector+d}:null)
}}return this
};
function bz(e){var n,d=[],m=[],a=arguments,l,k,f,c,h,g,i,b,j=ci.extend({},ci.data(this,"events").live);
if(e.button&&e.type==="click"){return
}for(h in j){f=j[h];
if(f.live===e.type||f.altLive&&ci.inArray(e.type,f.altLive)>-1){b=f.data;
if(!(b.beforeFilter&&b.beforeFilter[e.type]&&!b.beforeFilter[e.type](e))){m.push(f.selector)
}}else{delete j[h]
}}k=ci(e.target).closest(m,e.currentTarget);
for(g=0,i=k.length;
g<i;
g++){for(h in j){f=j[h];
c=k[g].elem;
l=null;
if(k[g].selector===f.selector){if(f.live==="mouseenter"||f.live==="mouseleave"){l=ci(e.relatedTarget).closest(f.selector)[0]
}if(!l||l!==c){d.push({elem:c,fn:f})
}}}}for(g=0,i=d.length;
g<i;
g++){k=d[g];
e.currentTarget=k.elem;
e.data=k.fn.data;
if(k.fn.apply(k.elem,a)===false){n=false;
break
}}return n
}function bu(b,a){return"live."+(b?b+".":"")+a.replace(/\./g,"`").replace(/ /g,"&")
}ci.fn.blur=function(a){return a?this.bind("blur",a):this.trigger("blur")
};
ci.fn.focus=function(a){return a?this.bind("focus",a):this.trigger("focus")
};
ci.fn.focusin=function(a){return a?this.bind("focusin",a):this.trigger("focusin")
};
ci.fn.focusout=function(a){return a?this.bind("focusout",a):this.trigger("focusout")
};
ci.fn.load=function(a){return a?this.bind("load",a):this.trigger("load")
};
ci.fn.resize=function(a){return a?this.bind("resize",a):this.trigger("resize")
};
ci.fn.scroll=function(a){return a?this.bind("scroll",a):this.trigger("scroll")
};
ci.fn.unload=function(a){return a?this.bind("unload",a):this.trigger("unload")
};
ci.fn.click=function(a){return a?this.bind("click",a):this.trigger("click")
};
ci.fn.dblclick=function(a){return a?this.bind("dblclick",a):this.trigger("dblclick")
};
ci.fn.mousedown=function(a){return a?this.bind("mousedown",a):this.trigger("mousedown")
};
ci.fn.mouseup=function(a){return a?this.bind("mouseup",a):this.trigger("mouseup")
};
ci.fn.mousemove=function(a){return a?this.bind("mousemove",a):this.trigger("mousemove")
};
ci.fn.mouseover=function(a){return a?this.bind("mouseover",a):this.trigger("mouseover")
};
ci.fn.mouseout=function(a){return a?this.bind("mouseout",a):this.trigger("mouseout")
};
ci.fn.mouseenter=function(a){return a?this.bind("mouseenter",a):this.trigger("mouseenter")
};
ci.fn.mouseleave=function(a){return a?this.bind("mouseleave",a):this.trigger("mouseleave")
};
ci.fn.change=function(a){return a?this.bind("change",a):this.trigger("change")
};
ci.fn.select=function(a){return a?this.bind("select",a):this.trigger("select")
};
ci.fn.submit=function(a){return a?this.bind("submit",a):this.trigger("submit")
};
ci.fn.keydown=function(a){return a?this.bind("keydown",a):this.trigger("keydown")
};
ci.fn.keypress=function(a){return a?this.bind("keypress",a):this.trigger("keypress")
};
ci.fn.keyup=function(a){return a?this.bind("keyup",a):this.trigger("keyup")
};
ci.fn.error=function(a){return a?this.bind("error",a):this.trigger("error")
};
if(a2.attachEvent&&!a2.addEventListener){a2.attachEvent("onunload",function(){for(var b in ci.cache){if(ci.cache[b].handle){try{ci.event.remove(ci.cache[b].handle.elem)
}catch(a){}}}})
}(function(){var b=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,f=0,q=Object.prototype.toString,j=false,a=true;
[0,0].sort(function(){a=false;
return 0
});
var o=function(H,u,E,G){E=E||[];
var A=u=u||b0;
if(u.nodeType!==1&&u.nodeType!==9){return[]
}if(!H||typeof H!=="string"){return E
}var B=[],z,I,t,x,D=true,v=k(u),s=H;
while((b.exec(""),z=b.exec(s))!==null){s=z[3];
B.push(z[1]);
if(z[2]){x=z[3];
break
}}if(B.length>1&&m.exec(H)){if(B.length===2&&h.relative[B[0]]){I=n(B[0]+B[1],u)
}else{I=h.relative[B[0]]?[u]:o(B.shift(),u);
while(B.length){H=B.shift();
if(h.relative[H]){H+=B.shift()
}I=n(H,I)
}}}else{if(!G&&B.length>1&&u.nodeType===9&&!v&&h.match.ID.test(B[0])&&!h.match.ID.test(B[B.length-1])){var F=o.find(B.shift(),u,v);
u=F.expr?o.filter(F.expr,F.set)[0]:F.set[0]
}if(u){var F=G?{expr:B.pop(),set:l(G)}:o.find(B.pop(),B.length===1&&(B[0]==="~"||B[0]==="+")&&u.parentNode?u.parentNode:u,v);
I=F.expr?o.filter(F.expr,F.set):F.set;
if(B.length>0){t=l(I)
}else{D=false
}while(B.length){var w=B.pop(),C=w;
if(!h.relative[w]){w=""
}else{C=B.pop()
}if(C==null){C=u
}h.relative[w](t,C,v)
}}else{t=B=[]
}}if(!t){t=I
}if(!t){o.error(w||H)
}if(q.call(t)==="[object Array]"){if(!D){E.push.apply(E,t)
}else{if(u&&u.nodeType===1){for(var y=0;
t[y]!=null;
y++){if(t[y]&&(t[y]===true||t[y].nodeType===1&&c(u,t[y]))){E.push(I[y])
}}}else{for(var y=0;
t[y]!=null;
y++){if(t[y]&&t[y].nodeType===1){E.push(I[y])
}}}}}else{l(t,E)
}if(x){o(x,A,E,G);
o.uniqueSort(E)
}return E
};
o.uniqueSort=function(t){if(p){j=a;
t.sort(p);
if(j){for(var s=1;
s<t.length;
s++){if(t[s]===t[s-1]){t.splice(s--,1)
}}}}return t
};
o.matches=function(s,t){return o(s,null,null,t)
};
o.find=function(A,z,t){var x,w;
if(!A){return[]
}for(var s=0,u=h.order.length;
s<u;
s++){var y=h.order[s],w;
if((w=h.leftMatch[y].exec(A))){var v=w[1];
w.splice(1,1);
if(v.substr(v.length-1)!=="\\"){w[1]=(w[1]||"").replace(/\\/g,"");
x=h.find[y](w,z,t);
if(x!=null){A=A.replace(h.match[y],"");
break
}}}}if(!x){x=z.getElementsByTagName("*")
}return{set:x,expr:A}
};
o.filter=function(v,I,z,E){var F=v,H=[],u=I,D,t,A=I&&I[0]&&k(I[0]);
while(v&&I.length){for(var s in h.filter){if((D=h.leftMatch[s].exec(v))!=null&&D[2]){var w=h.filter[s],x,B,C=D[1];
t=false;
D.splice(1,1);
if(C.substr(C.length-1)==="\\"){continue
}if(u===H){H=[]
}if(h.preFilter[s]){D=h.preFilter[s](D,u,z,H,E,A);
if(!D){t=x=true
}else{if(D===true){continue
}}}if(D){for(var y=0;
(B=u[y])!=null;
y++){if(B){x=w(B,D,y,u);
var G=E^!!x;
if(z&&x!=null){if(G){t=true
}else{u[y]=false
}}else{if(G){H.push(B);
t=true
}}}}}if(x!==bv){if(!z){u=H
}v=v.replace(h.match[s],"");
if(!t){return[]
}break
}}}if(v===F){if(t==null){o.error(v)
}else{break
}}F=v
}return u
};
o.error=function(s){throw"Syntax error, unrecognized expression: "+s
};
var h=o.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(s){return s.getAttribute("href")
}},relative:{"+":function(s,z){var v=typeof z==="string",x=v&&!/\W/.test(z),w=v&&!x;
if(x){z=z.toLowerCase()
}for(var u=0,y=s.length,t;
u<y;
u++){if((t=s[u])){while((t=t.previousSibling)&&t.nodeType!==1){}s[u]=w||t&&t.nodeName.toLowerCase()===z?t||false:t===z
}}if(w){o.filter(z,s,true)
}},">":function(s,y){var v=typeof y==="string";
if(v&&!/\W/.test(y)){y=y.toLowerCase();
for(var u=0,w=s.length;
u<w;
u++){var t=s[u];
if(t){var x=t.parentNode;
s[u]=x.nodeName.toLowerCase()===y?x:false
}}}else{for(var u=0,w=s.length;
u<w;
u++){var t=s[u];
if(t){s[u]=v?t.parentNode:t.parentNode===y
}}if(v){o.filter(y,s,true)
}}},"":function(t,x,v){var u=f++,s=d;
if(typeof x==="string"&&!/\W/.test(x)){var w=x=x.toLowerCase();
s=e
}s("parentNode",x,u,t,w,v)
},"~":function(t,x,v){var u=f++,s=d;
if(typeof x==="string"&&!/\W/.test(x)){var w=x=x.toLowerCase();
s=e
}s("previousSibling",x,u,t,w,v)
}},find:{ID:function(v,s,t){if(typeof s.getElementById!=="undefined"&&!t){var u=s.getElementById(v[1]);
return u?[u]:[]
}},NAME:function(v,s){if(typeof s.getElementsByName!=="undefined"){var x=[],w=s.getElementsByName(v[1]);
for(var t=0,u=w.length;
t<u;
t++){if(w[t].getAttribute("name")===v[1]){x.push(w[t])
}}return x.length===0?null:x
}},TAG:function(t,s){return s.getElementsByTagName(t[1])
}},preFilter:{CLASS:function(x,s,v,z,y,w){x=" "+x[1].replace(/\\/g,"")+" ";
if(w){return x
}for(var u=0,t;
(t=s[u])!=null;
u++){if(t){if(y^(t.className&&(" "+t.className+" ").replace(/[\t\n]/g," ").indexOf(x)>=0)){if(!v){z.push(t)
}}else{if(v){s[u]=false
}}}}return false
},ID:function(s){return s[1].replace(/\\/g,"")
},TAG:function(t,s){return t[1].toLowerCase()
},CHILD:function(s){if(s[1]==="nth"){var t=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(s[2]==="even"&&"2n"||s[2]==="odd"&&"2n+1"||!/\D/.test(s[2])&&"0n+"+s[2]||s[2]);
s[2]=(t[1]+(t[2]||1))-0;
s[3]=t[3]-0
}s[0]=f++;
return s
},ATTR:function(v,s,t,y,x,u){var w=v[1].replace(/\\/g,"");
if(!u&&h.attrMap[w]){v[1]=h.attrMap[w]
}if(v[2]==="~="){v[4]=" "+v[4]+" "
}return v
},PSEUDO:function(u,s,t,w,v){if(u[1]==="not"){if((b.exec(u[3])||"").length>1||/^\w/.test(u[3])){u[3]=o(u[3],null,null,s)
}else{var x=o.filter(u[3],s,t,true^v);
if(!t){w.push.apply(w,x)
}return false
}}else{if(h.match.POS.test(u[0])||h.match.CHILD.test(u[0])){return true
}}return u
},POS:function(s){s.unshift(true);
return s
}},filters:{enabled:function(s){return s.disabled===false&&s.type!=="hidden"
},disabled:function(s){return s.disabled===true
},checked:function(s){return s.checked===true
},selected:function(s){s.parentNode.selectedIndex;
return s.selected===true
},parent:function(s){return !!s.firstChild
},empty:function(s){return !s.firstChild
},has:function(s,t,u){return !!o(u[3],s).length
},header:function(s){return/h\d/i.test(s.nodeName)
},text:function(s){return"text"===s.type
},radio:function(s){return"radio"===s.type
},checkbox:function(s){return"checkbox"===s.type
},file:function(s){return"file"===s.type
},password:function(s){return"password"===s.type
},submit:function(s){return"submit"===s.type
},image:function(s){return"image"===s.type
},reset:function(s){return"reset"===s.type
},button:function(s){return"button"===s.type||s.nodeName.toLowerCase()==="button"
},input:function(s){return/input|select|textarea|button/i.test(s.nodeName)
}},setFilters:{first:function(s,t){return t===0
},last:function(t,u,v,s){return u===s.length-1
},even:function(s,t){return t%2===0
},odd:function(s,t){return t%2===1
},lt:function(s,t,u){return t<u[3]-0
},gt:function(s,t,u){return t>u[3]-0
},nth:function(s,t,u){return u[3]-0===t
},eq:function(s,t,u){return u[3]-0===t
}},filter:{PSEUDO:function(t,x,v,s){var y=x[1],u=h.filters[y];
if(u){return u(t,v,x,s)
}else{if(y==="contains"){return(t.textContent||t.innerText||i([t])||"").indexOf(x[3])>=0
}else{if(y==="not"){var z=x[3];
for(var v=0,w=z.length;
v<w;
v++){if(z[v]===t){return false
}}return true
}else{o.error("Syntax error, unrecognized expression: "+y)
}}}},CHILD:function(B,u){var x=u[1],v=B;
switch(x){case"only":case"first":while((v=v.previousSibling)){if(v.nodeType===1){return false
}}if(x==="first"){return true
}v=B;
case"last":while((v=v.nextSibling)){if(v.nodeType===1){return false
}}return true;
case"nth":var s=u[2],t=u[3];
if(s===1&&t===0){return true
}var A=u[0],w=B.parentNode;
if(w&&(w.sizcache!==A||!B.nodeIndex)){var y=0;
for(v=w.firstChild;
v;
v=v.nextSibling){if(v.nodeType===1){v.nodeIndex=++y
}}w.sizcache=A
}var z=B.nodeIndex-t;
if(s===0){return z===0
}else{return(z%s===0&&z/s>=0)
}}},ID:function(s,t){return s.nodeType===1&&s.getAttribute("id")===t
},TAG:function(s,t){return(t==="*"&&s.nodeType===1)||s.nodeName.toLowerCase()===t
},CLASS:function(s,t){return(" "+(s.className||s.getAttribute("class"))+" ").indexOf(t)>-1
},ATTR:function(t,u){var v=u[1],w=h.attrHandle[v]?h.attrHandle[v](t):t[v]!=null?t[v]:t.getAttribute(v),y=w+"",x=u[2],s=u[4];
return w==null?x==="!=":x==="="?y===s:x==="*="?y.indexOf(s)>=0:x==="~="?(" "+y+" ").indexOf(s)>=0:!s?y&&w!==false:x==="!="?y!==s:x==="^="?y.indexOf(s)===0:x==="$="?y.substr(y.length-s.length)===s:x==="|="?y===s||y.substr(0,s.length+1)===s+"-":false
},POS:function(t,w,v,s){var x=w[2],u=h.setFilters[x];
if(u){return u(t,v,w,s)
}}}};
var m=h.match.POS;
for(var r in h.match){h.match[r]=new RegExp(h.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source);
h.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+h.match[r].source.replace(/\\(\d+)/g,function(s,t){return"\\"+(t-0+1)
}))
}var l=function(s,t){s=Array.prototype.slice.call(s,0);
if(t){t.push.apply(t,s);
return t
}return s
};
try{Array.prototype.slice.call(b0.documentElement.childNodes,0)
}catch(g){l=function(s,v){var w=v||[];
if(q.call(s)==="[object Array]"){Array.prototype.push.apply(w,s)
}else{if(typeof s.length==="number"){for(var t=0,u=s.length;
t<u;
t++){w.push(s[t])
}}else{for(var t=0;
s[t];
t++){w.push(s[t])
}}}return w
}
}var p;
if(b0.documentElement.compareDocumentPosition){p=function(s,t){if(!s.compareDocumentPosition||!t.compareDocumentPosition){if(s==t){j=true
}return s.compareDocumentPosition?-1:1
}var u=s.compareDocumentPosition(t)&4?-1:s===t?0:1;
if(u===0){j=true
}return u
}
}else{if("sourceIndex" in b0.documentElement){p=function(s,t){if(!s.sourceIndex||!t.sourceIndex){if(s==t){j=true
}return s.sourceIndex?-1:1
}var u=s.sourceIndex-t.sourceIndex;
if(u===0){j=true
}return u
}
}else{if(b0.createRange){p=function(s,u){if(!s.ownerDocument||!u.ownerDocument){if(s==u){j=true
}return s.ownerDocument?-1:1
}var t=s.ownerDocument.createRange(),v=u.ownerDocument.createRange();
t.setStart(s,0);
t.setEnd(s,0);
v.setStart(u,0);
v.setEnd(u,0);
var w=t.compareBoundaryPoints(Range.START_TO_END,v);
if(w===0){j=true
}return w
}
}}}function i(t){var v="",s;
for(var u=0;
t[u];
u++){s=t[u];
if(s.nodeType===3||s.nodeType===4){v+=s.nodeValue
}else{if(s.nodeType!==8){v+=i(s.childNodes)
}}}return v
}(function(){h.find.ID=function(v,s,t){if(typeof s.getElementById!=="undefined"&&!t){var u=s.getElementById(v[1]);
return u?u.id===v[1]||typeof u.getAttributeNode!=="undefined"&&u.getAttributeNode("id").nodeValue===v[1]?[u]:bv:[]
}};
h.filter.ID=function(s,t){var u=typeof s.getAttributeNode!=="undefined"&&s.getAttributeNode("id");
return s.nodeType===1&&u&&u.nodeValue===t
};
root=form=null
})();
(function(){h.find.TAG=function(u,s){var v=s.getElementsByTagName(u[1]);
if(u[1]==="*"){var w=[];
for(var t=0;
v[t];
t++){if(v[t].nodeType===1){w.push(v[t])
}}v=w
}return v
};
h.attrHandle.href=function(s){return s.getAttribute("href",2)
};
div=null
})();
if(b0.querySelectorAll){(function(){var t=o,s=b0.createElement("div");
s.innerHTML="<p class='TEST'></p>";
if(s.querySelectorAll&&s.querySelectorAll(".TEST").length===0){return
}o=function(y,v,x,z){v=v||b0;
if(!z&&v.nodeType===9&&!k(v)){try{return l(v.querySelectorAll(y),x)
}catch(w){}}return t(y,v,x,z)
};
for(var u in t){o[u]=t[u]
}s=null
})()
}(function(){var s=b0.createElement("div");
s.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!s.getElementsByClassName||s.getElementsByClassName("e").length===0){return
}s.lastChild.className="e";
if(s.getElementsByClassName("e").length===1){return
}h.order.splice(1,0,"CLASS");
h.find.CLASS=function(v,t,u){if(typeof t.getElementsByClassName!=="undefined"&&!u){return t.getElementsByClassName(v[1])
}};
s=null
})();
function e(A,z,B,y,x,u){for(var t=0,v=y.length;
t<v;
t++){var s=y[t];
if(s){s=s[A];
var w=false;
while(s){if(s.sizcache===B){w=y[s.sizset];
break
}if(s.nodeType===1&&!u){s.sizcache=B;
s.sizset=t
}if(s.nodeName.toLowerCase()===z){w=s;
break
}s=s[A]
}y[t]=w
}}}function d(A,z,B,y,x,u){for(var t=0,v=y.length;
t<v;
t++){var s=y[t];
if(s){s=s[A];
var w=false;
while(s){if(s.sizcache===B){w=y[s.sizset];
break
}if(s.nodeType===1){if(!u){s.sizcache=B;
s.sizset=t
}if(typeof z!=="string"){if(s===z){w=true;
break
}}else{if(o.filter(z,[s]).length>0){w=s;
break
}}}s=s[A]
}y[t]=w
}}}var c=b0.compareDocumentPosition?function(s,t){return s.compareDocumentPosition(t)&16
}:function(s,t){return s!==t&&(s.contains?s.contains(t):true)
};
var k=function(t){var s=(t?t.ownerDocument||t:0).documentElement;
return s?s.nodeName!=="HTML":false
};
var n=function(y,s){var z=[],v="",w,x=s.nodeType?[s]:s;
while((w=h.match.PSEUDO.exec(y))){v+=w[0];
y=y.replace(h.match.PSEUDO,"")
}y=h.relative[y]?y+"*":y;
for(var t=0,u=x.length;
t<u;
t++){o(y,x[t],z)
}return o.filter(v,z)
};
ci.find=o;
ci.expr=o.selectors;
ci.expr[":"]=ci.expr.filters;
ci.unique=o.uniqueSort;
ci.getText=i;
ci.isXMLDoc=k;
ci.contains=c;
return;
a2.Sizzle=o
})();
var bN=/Until$/,ca=/^(?:parents|prevUntil|prevAll)/,a0=/,/,bx=Array.prototype.slice;
var bK=function(a,d,c){if(ci.isFunction(d)){return ci.grep(a,function(e,f){return !!d.call(e,f,e)===c
})
}else{if(d.nodeType){return ci.grep(a,function(e,f){return(e===d)===c
})
}else{if(typeof d==="string"){var b=ci.grep(a,function(e){return e.nodeType===1
});
if(b8.test(d)){return ci.filter(d,b,!c)
}else{d=ci.filter(d,b)
}}}}return ci.grep(a,function(e,f){return(ci.inArray(e,d)>=0)===c
})
};
ci.fn.extend({find:function(g){var f=this.pushStack("","find",g),c=0;
for(var a=0,b=this.length;
a<b;
a++){c=f.length;
ci.find(g,this[a],f);
if(a>0){for(var d=c;
d<f.length;
d++){for(var e=0;
e<c;
e++){if(f[e]===f[d]){f.splice(d--,1);
break
}}}}}return f
},has:function(a){var b=ci(a);
return this.filter(function(){for(var c=0,d=b.length;
c<d;
c++){if(ci.contains(this,b[c])){return true
}}})
},not:function(a){return this.pushStack(bK(this,a,false),"not",a)
},filter:function(a){return this.pushStack(bK(this,a,true),"filter",a)
},is:function(a){return !!a&&ci.filter(a,this).length>0
},closest:function(f,g){if(ci.isArray(f)){var d=[],h=this[0],a,b={},e;
if(h&&f.length){for(var i=0,j=f.length;
i<j;
i++){e=f[i];
if(!b[e]){b[e]=ci.expr.match.POS.test(e)?ci(e,g||this.context):e
}}while(h&&h.ownerDocument&&h!==g){for(e in b){a=b[e];
if(a.jquery?a.index(h)>-1:ci(h).is(a)){d.push({selector:e,elem:h});
delete b[e]
}}h=h.parentNode
}}return d
}var c=ci.expr.match.POS.test(f)?ci(f,g||this.context):null;
return this.map(function(l,k){while(k&&k.ownerDocument&&k!==g){if(c?c.index(k)>-1:ci(k).is(f)){return k
}k=k.parentNode
}return null
})
},index:function(a){if(!a||typeof a==="string"){return ci.inArray(this[0],a?ci(a):this.parent().children())
}return ci.inArray(a.jquery?a[0]:a,this)
},add:function(c,b){var d=typeof c==="string"?ci(c,b||this.context):ci.makeArray(c),a=ci.merge(this.get(),d);
return this.pushStack(aV(d[0])||aV(a[0])?a:ci.unique(a))
},andSelf:function(){return this.add(this.prevObject)
}});
function aV(a){return !a||!a.parentNode||a.parentNode.nodeType===11
}ci.each({parent:function(a){var b=a.parentNode;
return b&&b.nodeType!==11?b:null
},parents:function(a){return ci.dir(a,"parentNode")
},next:function(a){return ci.nth(a,2,"nextSibling")
},prev:function(a){return ci.nth(a,2,"previousSibling")
},nextAll:function(a){return ci.dir(a,"nextSibling")
},prevAll:function(a){return ci.dir(a,"previousSibling")
},siblings:function(a){return ci.sibling(a.parentNode.firstChild,a)
},children:function(a){return ci.sibling(a.firstChild)
},contents:function(a){return ci.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:ci.makeArray(a.childNodes)
}},function(b,a){ci.fn[b]=function(e,d){var c=ci.map(this,a,e);
if(!bN.test(b)){d=e
}if(d&&typeof d==="string"){c=ci.filter(d,c)
}c=this.length>1?ci.unique(c):c;
if((this.length>1||a0.test(d))&&ca.test(b)){c=c.reverse()
}return this.pushStack(c,b,bx.call(arguments).join(","))
}
});
ci.fn.parentsUntil=function(d,c){var a=function(g,e,f){return ci.dir(g,"parentNode",f)
};
var b=ci.map(this,a,d);
if(!bN.test("parentsUntil")){c=d
}if(c&&typeof c==="string"){b=ci.filter(c,b)
}b=this.length>1?ci.unique(b):b;
if((this.length>1||a0.test(c))&&ca.test("parentsUntil")){b=b.reverse()
}return this.pushStack(b,"parentsUntil",bx.call(arguments).join(","))
};
ci.fn.nextUntil=function(d,c){var a=function(g,e,f){return ci.dir(g,"nextSibling",f)
};
var b=ci.map(this,a,d);
if(!bN.test("nextUntil")){c=d
}if(c&&typeof c==="string"){b=ci.filter(c,b)
}b=this.length>1?ci.unique(b):b;
if((this.length>1||a0.test(c))&&ca.test("nextUntil")){b=b.reverse()
}return this.pushStack(b,"nextUntil",bx.call(arguments).join(","))
};
ci.fn.prevUntil=function(d,c){var a=function(g,e,f){return ci.dir(g,"previousSibling",f)
};
var b=ci.map(this,a,d);
if(!bN.test("prevUntil")){c=d
}if(c&&typeof c==="string"){b=ci.filter(c,b)
}b=this.length>1?ci.unique(b):b;
if((this.length>1||a0.test(c))&&ca.test("prevUntil")){b=b.reverse()
}return this.pushStack(b,"prevUntil",bx.call(arguments).join(","))
};
ci.extend({filter:function(b,a,c){if(c){b=":not("+b+")"
}return ci.find.matches(b,a)
},dir:function(c,b,e){var d=[],a=c[b];
while(a&&a.nodeType!==9&&(e===bv||a.nodeType!==1||!ci(a).is(e))){if(a.nodeType===1){d.push(a)
}a=a[b]
}return d
},nth:function(a,e,b,c){e=e||1;
var d=0;
for(;
a;
a=a[b]){if(a.nodeType===1&&++d===e){break
}}return a
},sibling:function(b,a){var c=[];
for(;
b;
b=b.nextSibling){if(b.nodeType===1&&b!==a){c.push(b)
}}return c
}});
var bf=/ jQuery\d+="(?:\d+|null)"/g,bP=/^\s+/,cf=/(<([\w:]+)[^>]*?)\/>/g,cl=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,bk=/<([\w:]+)/,bp=/<tbody/i,ch=/<|&\w+;/,bD=/checked\s*(?:[^=]|=\s*.checked.)/i,aW=function(a,b,c){return cl.test(c)?a:b+"></"+c+">"
},bt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
bt.optgroup=bt.option;
bt.tbody=bt.tfoot=bt.colgroup=bt.caption=bt.thead;
bt.th=bt.td;
if(!ci.support.htmlSerialize){bt._default=[1,"div<div>","</div>"]
}ci.fn.extend({text:function(a){if(ci.isFunction(a)){return this.each(function(b){var c=ci(this);
c.text(a.call(this,b,c.text()))
})
}if(typeof a!=="object"&&a!==bv){return this.empty().append((this[0]&&this[0].ownerDocument||b0).createTextNode(a))
}return ci.getText(this)
},wrapAll:function(a){if(ci.isFunction(a)){return this.each(function(c){ci(this).wrapAll(a.call(this,c))
})
}if(this[0]){var b=ci(a,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b.insertBefore(this[0])
}b.map(function(){var c=this;
while(c.firstChild&&c.firstChild.nodeType===1){c=c.firstChild
}return c
}).append(this)
}return this
},wrapInner:function(a){if(ci.isFunction(a)){return this.each(function(b){ci(this).wrapInner(a.call(this,b))
})
}return this.each(function(){var c=ci(this),b=c.contents();
if(b.length){b.wrapAll(a)
}else{c.append(a)
}})
},wrap:function(a){return this.each(function(){ci(this).wrapAll(a)
})
},unwrap:function(){return this.parent().each(function(){if(!ci.nodeName(this,"body")){ci(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(a){if(this.nodeType===1){this.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,true,function(a){if(this.nodeType===1){this.insertBefore(a,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)
})
}else{if(arguments.length){var a=ci(arguments[0]);
a.push.apply(a,this.toArray());
return this.pushStack(a,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this.nextSibling)
})
}else{if(arguments.length){var a=this.pushStack(this,"after",arguments);
a.push.apply(a,ci(arguments[0]).toArray());
return a
}}},clone:function(a){var b=this.map(function(){if(!ci.support.noCloneEvent&&!ci.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;
if(!d){var c=e.createElement("div");
c.appendChild(this.cloneNode(true));
d=c.innerHTML
}return ci.clean([d.replace(bf,"").replace(bP,"")],e)[0]
}else{return this.cloneNode(true)
}});
if(a===true){a6(this,b);
a6(this.find("*"),b.find("*"))
}return b
},html:function(d){if(d===bv){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(bf,""):null
}else{if(typeof d==="string"&&!/<script/i.test(d)&&(ci.support.leadingWhitespace||!bP.test(d))&&!bt[(bk.exec(d)||["",""])[1].toLowerCase()]){d=d.replace(cf,aW);
try{for(var b=0,c=this.length;
b<c;
b++){if(this[b].nodeType===1){ci.cleanData(this[b].getElementsByTagName("*"));
this[b].innerHTML=d
}}}catch(a){this.empty().append(d)
}}else{if(ci.isFunction(d)){this.each(function(g){var f=ci(this),e=f.html();
f.empty().append(function(){return d.call(this,g,e)
})
})
}else{this.empty().append(d)
}}}return this
},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(!ci.isFunction(a)){a=ci(a).detach()
}else{return this.each(function(b){var d=ci(this),c=d.html();
d.replaceWith(a.call(this,b,c))
})
}return this.each(function(){var b=this.nextSibling,c=this.parentNode;
ci(this).remove();
if(b){ci(b).before(a)
}else{ci(c).append(a)
}})
}else{return this.pushStack(ci(ci.isFunction(a)?a():a),"replaceWith",a)
}},detach:function(a){return this.remove(a,true)
},domManip:function(g,e,h){var b,i,f=g[0],d=[];
if(!ci.support.checkClone&&arguments.length===3&&typeof f==="string"&&bD.test(f)){return this.each(function(){ci(this).domManip(g,e,h,true)
})
}if(ci.isFunction(f)){return this.each(function(k){var l=ci(this);
g[0]=f.call(this,k,e?l.html():bv);
l.domManip(g,e,h)
})
}if(this[0]){if(g[0]&&g[0].parentNode&&g[0].parentNode.nodeType===11){b={fragment:g[0].parentNode}
}else{b=bC(g,this,d)
}i=b.fragment.firstChild;
if(i){e=e&&ci.nodeName(i,"tr");
for(var j=0,a=this.length;
j<a;
j++){h.call(e?c(this[j],i):this[j],b.cacheable||this.length>1||j>0?b.fragment.cloneNode(true):b.fragment)
}}if(d){ci.each(d,cj)
}}return this;
function c(l,k){return ci.nodeName(l,"table")?(l.getElementsByTagName("tbody")[0]||l.appendChild(l.ownerDocument.createElement("tbody"))):l
}}});
function a6(b,c){var a=0;
c.each(function(){if(this.nodeName!==(b[a]&&b[a].nodeName)){return
}var e=ci.data(b[a++]),g=ci.data(this,e),h=e&&e.events;
if(h){delete g.handle;
g.events={};
for(var f in h){for(var d in h[f]){ci.event.add(this,f,h[f][d],h[f][d].data)
}}}})
}function bC(a,f,g){var e,b,c,d;
if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&a[0].indexOf("<option")<0&&(ci.support.checkClone||!bD.test(a[0]))){b=true;
c=ci.fragments[a[0]];
if(c){if(c!==1){e=c
}}}if(!e){d=(f&&f[0]?f[0].ownerDocument||f[0]:b0);
e=d.createDocumentFragment();
ci.clean(a,d,e,g)
}if(b){ci.fragments[a[0]]=c?e:1
}return{fragment:e,cacheable:b}
}ci.fragments={};
ci.fn.appendTo=function(f){var e=[],c=ci(f);
for(var b=0,d=c.length;
b<d;
b++){var a=(b>0?this.clone(true):this).get();
ci.fn.append.apply(ci(c[b]),a);
e=e.concat(a)
}return this.pushStack(e,"appendTo",c.selector)
};
ci.fn.prependTo=function(f){var e=[],c=ci(f);
for(var b=0,d=c.length;
b<d;
b++){var a=(b>0?this.clone(true):this).get();
ci.fn.prepend.apply(ci(c[b]),a);
e=e.concat(a)
}return this.pushStack(e,"prependTo",c.selector)
};
ci.fn.insertBefore=function(f){var e=[],c=ci(f);
for(var b=0,d=c.length;
b<d;
b++){var a=(b>0?this.clone(true):this).get();
ci.fn.before.apply(ci(c[b]),a);
e=e.concat(a)
}return this.pushStack(e,"insertBefore",c.selector)
};
ci.fn.insertAfter=function(f){var e=[],c=ci(f);
for(var b=0,d=c.length;
b<d;
b++){var a=(b>0?this.clone(true):this).get();
ci.fn.after.apply(ci(c[b]),a);
e=e.concat(a)
}return this.pushStack(e,"insertAfter",c.selector)
};
ci.fn.replaceAll=function(f){var e=[],c=ci(f);
for(var b=0,d=c.length;
b<d;
b++){var a=(b>0?this.clone(true):this).get();
ci.fn.replaceWith.apply(ci(c[b]),a);
e=e.concat(a)
}return this.pushStack(e,"replaceAll",c.selector)
};
ci.each({remove:function(b,a){if(!b||ci.filter(b,[this]).length){if(!a&&this.nodeType===1){ci.cleanData(this.getElementsByTagName("*"));
ci.cleanData([this])
}if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){if(this.nodeType===1){ci.cleanData(this.getElementsByTagName("*"))
}while(this.firstChild){this.removeChild(this.firstChild)
}}},function(b,a){ci.fn[b]=function(){return this.each(a,arguments)
}
});
ci.extend({clean:function(b,a,c,f){a=a||b0;
if(typeof a.createElement==="undefined"){a=a.ownerDocument||a[0]&&a[0].ownerDocument||b0
}var e=[];
ci.each(b,function(k,i){if(typeof i==="number"){i+=""
}if(!i){return
}if(typeof i==="string"&&!ch.test(i)){i=a.createTextNode(i)
}else{if(typeof i==="string"){i=i.replace(cf,aW);
var m=(bk.exec(i)||["",""])[1].toLowerCase(),o=bt[m]||bt._default,g=o[0],h=a.createElement("div");
h.innerHTML=o[1]+i+o[2];
while(g--){h=h.lastChild
}if(!ci.support.tbody){var j=bp.test(i),n=m==="table"&&!j?h.firstChild&&h.firstChild.childNodes:o[1]==="<table>"&&!j?h.childNodes:[];
for(var l=n.length-1;
l>=0;
--l){if(ci.nodeName(n[l],"tbody")&&!n[l].childNodes.length){n[l].parentNode.removeChild(n[l])
}}}if(!ci.support.leadingWhitespace&&bP.test(i)){h.insertBefore(a.createTextNode(bP.exec(i)[0]),h.firstChild)
}i=ci.makeArray(h.childNodes)
}}if(i.nodeType){e.push(i)
}else{e=ci.merge(e,i)
}});
if(c){for(var d=0;
e[d];
d++){if(f&&ci.nodeName(e[d],"script")&&(!e[d].type||e[d].type.toLowerCase()==="text/javascript")){f.push(e[d].parentNode?e[d].parentNode.removeChild(e[d]):e[d])
}else{if(e[d].nodeType===1){e.splice.apply(e,[d+1,0].concat(ci.makeArray(e[d].getElementsByTagName("script"))))
}c.appendChild(e[d])
}}}return e
},cleanData:function(b){for(var c=0,a,d;
(a=b[c])!=null;
c++){ci.event.remove(a);
ci.removeData(a)
}}});
var bO=/z-?index|font-?weight|opacity|zoom|line-?height/i,bm=/alpha\([^)]*\)/,bL=/opacity=([^)]*)/,bB=/float/i,b3=/-([a-z])/ig,bJ=/([A-Z])/g,bV=/^-?\d+(?:px)?$/i,bH=/^-?\d/,aU={position:"absolute",visibility:"hidden",display:"block"},bA=["Left","Right"],a9=["Top","Bottom"],bS=b0.defaultView&&b0.defaultView.getComputedStyle,bI=ci.support.cssFloat?"cssFloat":"styleFloat",a7=function(a,b){return b.toUpperCase()
};
ci.fn.css=function(a,b){return bY(this,a,b,true,function(c,d,e){if(e===bv){return ci.curCSS(c,d)
}if(typeof e==="number"&&!bO.test(d)){e+="px"
}ci.style(c,d,e)
})
};
ci.extend({style:function(a,c,g){if(!a||a.nodeType===3||a.nodeType===8){return bv
}if((c==="width"||c==="height")&&parseFloat(g)<0){g=bv
}var f=a.style||a,e=g!==bv;
if(!ci.support.opacity&&c==="opacity"){if(e){f.zoom=1;
var d=parseInt(g,10)+""==="NaN"?"":"alpha(opacity="+g*100+")";
var b=f.filter||ci.curCSS(a,"filter")||"";
f.filter=bm.test(b)?b.replace(bm,d):d
}return f.filter&&f.filter.indexOf("opacity=")>=0?(parseFloat(bL.exec(f.filter)[1])/100)+"":""
}if(bB.test(c)){c=bI
}c=c.replace(b3,a7);
if(e){f[c]=g
}return f[c]
},css:function(a,e,c,b){if(e==="width"||e==="height"){var g,f=aU,h=e==="width"?bA:a9;
function d(){g=e==="width"?a.offsetWidth:a.offsetHeight;
if(b==="border"){return
}ci.each(h,function(){if(!b){g-=parseFloat(ci.curCSS(a,"padding"+this,true))||0
}if(b==="margin"){g+=parseFloat(ci.curCSS(a,"margin"+this,true))||0
}else{g-=parseFloat(ci.curCSS(a,"border"+this+"Width",true))||0
}})
}if(a.offsetWidth!==0){d()
}else{ci.swap(a,f,d)
}return Math.max(0,Math.round(g))
}return ci.curCSS(a,e,c)
},curCSS:function(b,f,d){var g,i=b.style,c;
if(!ci.support.opacity&&f==="opacity"&&b.currentStyle){g=bL.test(b.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return g===""?"1":g
}if(bB.test(f)){f=bI
}if(!d&&i&&i[f]){g=i[f]
}else{if(bS){if(bB.test(f)){f="float"
}f=f.replace(bJ,"-$1").toLowerCase();
var a=b.ownerDocument.defaultView;
if(!a){return null
}var k=a.getComputedStyle(b,null);
if(k){g=k.getPropertyValue(f)
}if(f==="opacity"&&g===""){g="1"
}}else{if(b.currentStyle){var j=f.replace(b3,a7);
g=b.currentStyle[f]||b.currentStyle[j];
if(!bV.test(g)&&bH.test(g)){var e=i.left,h=b.runtimeStyle.left;
b.runtimeStyle.left=b.currentStyle.left;
i.left=j==="fontSize"?"1em":(g||0);
g=i.pixelLeft+"px";
i.left=e;
b.runtimeStyle.left=h
}}}}return g
},swap:function(b,e,a){var d={};
for(var c in e){d[c]=b.style[c];
b.style[c]=e[c]
}a.call(b);
for(var c in e){b.style[c]=d[c]
}}});
if(ci.expr&&ci.expr.filters){ci.expr.filters.hidden=function(a){var d=a.offsetWidth,b=a.offsetHeight,c=a.nodeName.toLowerCase()==="tr";
return d===0&&b===0&&!c?true:d>0&&b>0&&!c?false:ci.curCSS(a,"display")==="none"
};
ci.expr.filters.visible=function(a){return !ci.expr.filters.hidden(a)
}
}var cb=cn(),ck=/<script(.|\s)*?\/script>/gi,bG=/select|textarea/i,by=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,a4=/=\?(&|$)/,bX=/\?/,b9=/(\?|&)_=.*?(&|$)/,bR=/^(\w+:)?\/\/([^\/?#]+)/,bn=/%20/g;
ci.fn.extend({_load:ci.fn.load,load:function(g,c,a){if(typeof g!=="string"){return this._load(g)
}else{if(!this.length){return this
}}var b=g.indexOf(" ");
if(b>=0){var d=g.slice(b,g.length);
g=g.slice(0,b)
}var f="GET";
if(c){if(ci.isFunction(c)){a=c;
c=null
}else{if(typeof c==="object"){c=ci.param(c,ci.ajaxSettings.traditional);
f="POST"
}}}var e=this;
ci.ajax({url:g,type:f,dataType:"html",data:c,complete:function(h,i){if(i==="success"||i==="notmodified"){e.html(d?ci("<div />").append(h.responseText.replace(ck,"")).find(d):h.responseText)
}if(a){e.each(a,[h.responseText,i,h])
}}});
return this
},serialize:function(){return ci.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?ci.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||bG.test(this.nodeName)||by.test(this.type))
}).map(function(b,a){var c=ci(this).val();
return c==null?null:ci.isArray(c)?ci.map(c,function(e,d){return{name:a.name,value:e}
}):{name:a.name,value:c}
}).get()
}});
ci.fn.ajaxStart=function(a){return this.bind("ajaxStart",a)
};
ci.fn.ajaxStop=function(a){return this.bind("ajaxStop",a)
};
ci.fn.ajaxComplete=function(a){return this.bind("ajaxComplete",a)
};
ci.fn.ajaxError=function(a){return this.bind("ajaxError",a)
};
ci.fn.ajaxSuccess=function(a){return this.bind("ajaxSuccess",a)
};
ci.fn.ajaxSend=function(a){return this.bind("ajaxSend",a)
};
ci.extend({get:function(d,b,a,c){if(ci.isFunction(b)){c=c||a;
a=b;
b=null
}return ci.ajax({type:"GET",url:d,data:b,success:a,dataType:c})
},getScript:function(b,a){return ci.get(b,null,a,"script")
},getJSON:function(c,b,a){return ci.get(c,b,a,"json")
},post:function(d,b,a,c){if(ci.isFunction(b)){c=c||a;
a=b;
b={}
}return ci.ajax({type:"POST",url:d,data:b,success:a,dataType:c})
},ajaxSetup:function(a){ci.extend(ci.ajaxSettings,a)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:a2.XMLHttpRequest&&(a2.location.protocol!=="file:"||!a2.ActiveXObject)?function(){return new a2.XMLHttpRequest()
}:function(){try{return new a2.ActiveXObject("Microsoft.XMLHTTP")
}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(j){var o=ci.extend(true,{},ci.ajaxSettings,j);
var g,q,c,a=j&&j.context||o,u=o.type.toUpperCase();
if(o.data&&o.processData&&typeof o.data!=="string"){o.data=ci.param(o.data,o.traditional)
}if(o.dataType==="jsonp"){if(u==="GET"){if(!a4.test(o.url)){o.url+=(bX.test(o.url)?"&":"?")+(o.jsonp||"callback")+"=?"
}}else{if(!o.data||!a4.test(o.data)){o.data=(o.data?o.data+"&":"")+(o.jsonp||"callback")+"=?"
}}o.dataType="json"
}if(o.dataType==="json"&&(o.data&&a4.test(o.data)||a4.test(o.url))){g=o.jsonpCallback||("jsonp"+cb++);
if(o.data){o.data=(o.data+"").replace(a4,"="+g+"$1")
}o.url=o.url.replace(a4,"="+g+"$1");
o.dataType="script";
a2[g]=a2[g]||function(x){c=x;
r();
b();
a2[g]=bv;
try{delete a2[g]
}catch(w){}if(f){f.removeChild(p)
}}
}if(o.dataType==="script"&&o.cache===null){o.cache=false
}if(o.cache===false&&u==="GET"){var t=cn();
var n=o.url.replace(b9,"$1_="+t+"$2");
o.url=n+((n===o.url)?(bX.test(o.url)?"&":"?")+"_="+t:"")
}if(o.data&&u==="GET"){o.url+=(bX.test(o.url)?"&":"?")+o.data
}if(o.global&&!ci.active++){ci.event.trigger("ajaxStart")
}var k=bR.exec(o.url),l=k&&(k[1]&&k[1]!==location.protocol||k[2]!==location.host);
if(o.dataType==="script"&&u==="GET"&&l){var f=b0.getElementsByTagName("head")[0]||b0.documentElement;
var p=b0.createElement("script");
p.src=o.url;
if(o.scriptCharset){p.charset=o.scriptCharset
}if(!g){var d=false;
p.onload=p.onreadystatechange=function(){if(!d&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){d=true;
r();
b();
p.onload=p.onreadystatechange=null;
if(f&&p.parentNode){f.removeChild(p)
}}}
}f.insertBefore(p,f.firstChild);
return bv
}var m=false;
var v=o.xhr();
if(!v){return
}if(o.username){v.open(u,o.url,o.async,o.username,o.password)
}else{v.open(u,o.url,o.async)
}try{if(o.data||j&&j.contentType){v.setRequestHeader("Content-Type",o.contentType)
}if(o.ifModified){if(ci.lastModified[o.url]){v.setRequestHeader("If-Modified-Since",ci.lastModified[o.url])
}if(ci.etag[o.url]){v.setRequestHeader("If-None-Match",ci.etag[o.url])
}}if(!l){v.setRequestHeader("X-Requested-With","XMLHttpRequest")
}v.setRequestHeader("Accept",o.dataType&&o.accepts[o.dataType]?o.accepts[o.dataType]+", */*":o.accepts._default)
}catch(e){}if(o.beforeSend&&o.beforeSend.call(a,v,o)===false){if(o.global&&!--ci.active){ci.event.trigger("ajaxStop")
}v.abort();
return false
}if(o.global){s("ajaxSend",[v,o])
}var i=v.onreadystatechange=function(y){if(!v||v.readyState===0||y==="abort"){if(!m){b()
}m=true;
if(v){v.onreadystatechange=ci.noop
}}else{if(!m&&v&&(v.readyState===4||y==="timeout")){m=true;
v.onreadystatechange=ci.noop;
q=y==="timeout"?"timeout":!ci.httpSuccess(v)?"error":o.ifModified&&ci.httpNotModified(v,o.url)?"notmodified":"success";
var x;
if(q==="success"){try{c=ci.httpData(v,o.dataType,o)
}catch(w){q="parsererror";
x=w
}}if(q==="success"||q==="notmodified"){if(!g){r()
}}else{ci.handleError(o,v,q,x)
}b();
if(y==="timeout"){v.abort()
}if(o.async){v=null
}}}};
try{var h=v.abort;
v.abort=function(){if(v){h.call(v)
}i("abort")
}
}catch(e){}if(o.async&&o.timeout>0){setTimeout(function(){if(v&&!m){i("timeout")
}},o.timeout)
}try{v.send(u==="POST"||u==="PUT"||u==="DELETE"?o.data:null)
}catch(e){ci.handleError(o,v,null,e);
b()
}if(!o.async){i()
}function r(){if(o.success){o.success.call(a,c,q,v)
}if(o.global){s("ajaxSuccess",[v,o])
}}function b(){if(o.complete){o.complete.call(a,v,q)
}if(o.global){s("ajaxComplete",[v,o])
}if(o.global&&!--ci.active){ci.event.trigger("ajaxStop")
}}function s(x,w){(o.context?ci(o.context):ci.event).trigger(x,w)
}return v
},handleError:function(b,d,c,a){if(b.error){b.error.call(b.context||b,d,c,a)
}if(b.global){(b.context?ci(b.context):ci.event).trigger("ajaxError",[d,b,a])
}},active:0,httpSuccess:function(b){try{return !b.status&&location.protocol==="file:"||(b.status>=200&&b.status<300)||b.status===304||b.status===1223||b.status===0
}catch(a){}return false
},httpNotModified:function(d,c){var b=d.getResponseHeader("Last-Modified"),a=d.getResponseHeader("Etag");
if(b){ci.lastModified[c]=b
}if(a){ci.etag[c]=a
}return d.status===304||d.status===0
},httpData:function(e,d,c){var a=e.getResponseHeader("content-type")||"",f=d==="xml"||!d&&a.indexOf("xml")>=0,b=f?e.responseXML:e.responseText;
if(f&&b.documentElement.nodeName==="parsererror"){ci.error("parsererror")
}if(c&&c.dataFilter){b=c.dataFilter(b,d)
}if(typeof b==="string"){if(d==="json"||!d&&a.indexOf("json")>=0){b=ci.parseJSON(b)
}else{if(d==="script"||!d&&a.indexOf("javascript")>=0){ci.globalEval(b)
}}}return b
},param:function(a,f){var e=[];
if(f===bv){f=ci.ajaxSettings.traditional
}if(ci.isArray(a)||a.jquery){ci.each(a,function(){b(this.name,this.value)
})
}else{for(var d in a){c(d,a[d])
}}return e.join("&").replace(bn,"+");
function c(h,g){if(ci.isArray(g)){ci.each(g,function(i,j){if(f){b(h,j)
}else{c(h+"["+(typeof j==="object"||ci.isArray(j)?i:"")+"]",j)
}})
}else{if(!f&&g!=null&&typeof g==="object"){ci.each(g,function(i,j){c(h+"["+i+"]",j)
})
}else{b(h,g)
}}}function b(g,h){h=ci.isFunction(h)?h():h;
e[e.length]=encodeURIComponent(g)+"="+encodeURIComponent(h)
}}});
var bq={},bU=/toggle|show|hide/,b2=/^([+-]=)?([\d+-.]+)(.*)$/,b7,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
ci.fn.extend({show:function(f,g){if(f||f===0){return this.animate(bM("show",3),f,g)
}else{for(var j=0,c=this.length;
j<c;
j++){var e=ci.data(this[j],"olddisplay");
this[j].style.display=e||"";
if(ci.css(this[j],"display")==="none"){var d=this[j].nodeName,h;
if(bq[d]){h=bq[d]
}else{var i=ci("<"+d+" />").appendTo("body");
h=i.css("display");
if(h==="none"){h="block"
}i.remove();
bq[d]=h
}ci.data(this[j],"olddisplay",h)
}}for(var a=0,b=this.length;
a<b;
a++){this[a].style.display=ci.data(this[a],"olddisplay")||""
}return this
}},hide:function(g,a){if(g||g===0){return this.animate(bM("hide",3),g,a)
}else{for(var b=0,e=this.length;
b<e;
b++){var f=ci.data(this[b],"olddisplay");
if(!f&&f!=="none"){ci.data(this[b],"olddisplay",ci.css(this[b],"display"))
}}for(var c=0,d=this.length;
c<d;
c++){this[c].style.display="none"
}return this
}},_toggle:ci.fn.toggle,toggle:function(b,c){var a=typeof b==="boolean";
if(ci.isFunction(b)&&ci.isFunction(c)){this._toggle.apply(this,arguments)
}else{if(b==null||a){this.each(function(){var d=a?b:ci(this).is(":hidden");
ci(this)[d?"show":"hide"]()
})
}else{this.animate(bM("toggle",3),b,c)
}}return this
},fadeTo:function(b,c,a){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:c},b,a)
},animate:function(d,e,b,a){var c=ci.speed(e,b,a);
if(ci.isEmptyObject(d)){return this.each(c.complete)
}return this[c.queue===false?"each":"queue"](function(){var i=ci.extend({},c),j,g=this.nodeType===1&&ci(this).is(":hidden"),f=this;
for(j in d){var h=j.replace(b3,a7);
if(j!==h){d[h]=d[j];
delete d[j];
j=h
}if(d[j]==="hide"&&g||d[j]==="show"&&!g){return i.complete.call(this)
}if((j==="height"||j==="width")&&this.style){i.display=ci.css(this,"display");
i.overflow=this.style.overflow
}if(ci.isArray(d[j])){(i.specialEasing=i.specialEasing||{})[j]=d[j][1];
d[j]=d[j][0]
}}if(i.overflow!=null){this.style.overflow="hidden"
}i.curAnim=ci.extend({},d);
ci.each(d,function(m,q){var k=new ci.fx(f,i,m);
if(bU.test(q)){k[q==="toggle"?g?"show":"hide":q](d)
}else{var n=b2.exec(q),o=k.cur(true)||0;
if(n){var l=parseFloat(n[2]),p=n[3]||"px";
if(p!=="px"){f.style[m]=(l||1)+p;
o=((l||1)/k.cur(true))*o;
f.style[m]=o+p
}if(n[1]){l=((n[1]==="-="?-1:1)*l)+o
}k.custom(o,l,p)
}else{k.custom(o,q,"")
}}});
return true
})
},stop:function(a,b){var c=ci.timers;
if(a){this.queue([])
}this.each(function(){for(var d=c.length-1;
d>=0;
d--){if(c[d].elem===this){if(b){c[d](true)
}c.splice(d,1)
}}});
if(!b){this.dequeue()
}return this
}});
ci.fn.slideDown=function(b,a){return this.animate(bM("show",1),b,a)
};
ci.fn.slideUp=function(b,a){return this.animate(bM("hide",1),b,a)
};
ci.fn.slideToggle=function(b,a){return this.animate(bM("toggle",1),b,a)
};
ci.fn.fadeIn=function(b,a){return this.animate({opacity:"show"},b,a)
};
ci.fn.fadeOut=function(b,a){return this.animate({opacity:"hide"},b,a)
};
ci.extend({speed:function(d,a,b){var c=d&&typeof d==="object"?d:{complete:b||!b&&a||ci.isFunction(d)&&d,duration:d,easing:b&&a||a&&!ci.isFunction(a)&&a};
c.duration=ci.fx.off?0:typeof c.duration==="number"?c.duration:ci.fx.speeds[c.duration]||ci.fx.speeds._default;
c.old=c.complete;
c.complete=function(){if(c.queue!==false){ci(this).dequeue()
}if(ci.isFunction(c.old)){c.old.call(this)
}};
return c
},easing:{linear:function(d,c,b,a){return b+a*d
},swing:function(d,c,b,a){return((-Math.cos(d*Math.PI)/2)+0.5)*a+b
}},timers:[],fx:function(a,b,c){this.options=b;
this.elem=a;
this.prop=c;
if(!b.orig){b.orig={}
}}});
ci.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(ci.fx.step[this.prop]||ci.fx.step._default)(this);
if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var b=parseFloat(ci.css(this.elem,this.prop,a));
return b&&b>-10000?b:parseFloat(ci.curCSS(this.elem,this.prop))||0
},custom:function(a,d,e){this.startTime=cn();
this.start=a;
this.end=d;
this.unit=e||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var b=this;
function c(f){return b.step(f)
}c.elem=this.elem;
if(c()&&ci.timers.push(c)&&!b7){b7=setInterval(ci.fx.tick,13)
}},show:function(){this.options.orig[this.prop]=ci.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
ci(this.elem).show()
},hide:function(){this.options.orig[this.prop]=ci.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(i){var f=cn(),h=true;
if(i||f>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var a in this.options.curAnim){if(this.options.curAnim[a]!==true){h=false
}}if(h){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
var c=ci.data(this.elem,"olddisplay");
this.elem.style.display=c?c:this.options.display;
if(ci.css(this.elem,"display")==="none"){this.elem.style.display="block"
}}if(this.options.hide){ci(this.elem).hide()
}if(this.options.hide||this.options.show){for(var d in this.options.curAnim){ci.style(this.elem,d,this.options.orig[d])
}}this.options.complete.call(this.elem)
}return false
}else{var b=f-this.startTime;
this.state=b/this.options.duration;
var e=this.options.specialEasing&&this.options.specialEasing[this.prop];
var g=this.options.easing||(ci.easing.swing?"swing":"linear");
this.pos=ci.easing[e||g](this.state,b,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()
}return true
}};
ci.extend(ci.fx,{tick:function(){var b=ci.timers;
for(var a=0;
a<b.length;
a++){if(!b[a]()){b.splice(a--,1)
}}if(!b.length){ci.fx.stop()
}},stop:function(){clearInterval(b7);
b7=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){ci.style(a.elem,"opacity",a.now)
},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null){a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit
}else{a.elem[a.prop]=a.now
}}}});
if(ci.expr&&ci.expr.filters){ci.expr.filters.animated=function(a){return ci.grep(ci.timers,function(b){return a===b.elem
}).length
}
}function bM(c,a){var b={};
ci.each(cq.concat.apply([],cq.slice(0,a)),function(){b[this]=c
});
return b
}if("getBoundingClientRect" in b0.documentElement){ci.fn.offset=function(e){var c=this[0];
if(e){return this.each(function(k){ci.offset.setOffset(this,e,k)
})
}if(!c||!c.ownerDocument){return null
}if(c===c.ownerDocument.body){return ci.offset.bodyOffset(c)
}var h=c.getBoundingClientRect(),a=c.ownerDocument,g=a.body,b=a.documentElement,j=b.clientTop||g.clientTop||0,i=b.clientLeft||g.clientLeft||0,f=h.top+(self.pageYOffset||ci.support.boxModel&&b.scrollTop||g.scrollTop)-j,d=h.left+(self.pageXOffset||ci.support.boxModel&&b.scrollLeft||g.scrollLeft)-i;
return{top:f,left:d}
}
}else{ci.fn.offset=function(i){var f=this[0];
if(i){return this.each(function(m){ci.offset.setOffset(this,i,m)
})
}if(!f||!f.ownerDocument){return null
}if(f===f.ownerDocument.body){return ci.offset.bodyOffset(f)
}ci.offset.initialize();
var h=f.offsetParent,k=f,d=f.ownerDocument,b,e=d.documentElement,a=d.body,c=d.defaultView,j=c?c.getComputedStyle(f,null):f.currentStyle,l=f.offsetTop,g=f.offsetLeft;
while((f=f.parentNode)&&f!==a&&f!==e){if(ci.offset.supportsFixedPosition&&j.position==="fixed"){break
}b=c?c.getComputedStyle(f,null):f.currentStyle;
l-=f.scrollTop;
g-=f.scrollLeft;
if(f===h){l+=f.offsetTop;
g+=f.offsetLeft;
if(ci.offset.doesNotAddBorder&&!(ci.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(f.nodeName))){l+=parseFloat(b.borderTopWidth)||0;
g+=parseFloat(b.borderLeftWidth)||0
}k=h,h=f.offsetParent
}if(ci.offset.subtractsBorderForOverflowNotVisible&&b.overflow!=="visible"){l+=parseFloat(b.borderTopWidth)||0;
g+=parseFloat(b.borderLeftWidth)||0
}j=b
}if(j.position==="relative"||j.position==="static"){l+=a.offsetTop;
g+=a.offsetLeft
}if(ci.offset.supportsFixedPosition&&j.position==="fixed"){l+=Math.max(e.scrollTop,a.scrollTop);
g+=Math.max(e.scrollLeft,a.scrollLeft)
}return{top:l,left:g}
}
}ci.offset={initialize:function(){var a=b0.body,d=b0.createElement("div"),f,c,g,h,b=parseFloat(ci.curCSS(a,"marginTop",true))||0,e="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
ci.extend(d.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
d.innerHTML=e;
a.insertBefore(d,a.firstChild);
f=d.firstChild;
c=f.firstChild;
h=f.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(c.offsetTop!==5);
this.doesAddBorderForTableAndCells=(h.offsetTop===5);
c.style.position="fixed",c.style.top="20px";
this.supportsFixedPosition=(c.offsetTop===20||c.offsetTop===15);
c.style.position=c.style.top="";
f.style.overflow="hidden",f.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(c.offsetTop===-5);
this.doesNotIncludeMarginInBodyOffset=(a.offsetTop!==b);
a.removeChild(d);
a=d=f=c=g=h=null;
ci.offset.initialize=ci.noop
},bodyOffset:function(a){var c=a.offsetTop,b=a.offsetLeft;
ci.offset.initialize();
if(ci.offset.doesNotIncludeMarginInBodyOffset){c+=parseFloat(ci.curCSS(a,"marginTop",true))||0;
b+=parseFloat(ci.curCSS(a,"marginLeft",true))||0
}return{top:c,left:b}
},setOffset:function(e,g,f){if(/static/.test(ci.curCSS(e,"position"))){e.style.position="relative"
}var a=ci(e),c=a.offset(),d=parseInt(ci.curCSS(e,"top",true),10)||0,b=parseInt(ci.curCSS(e,"left",true),10)||0;
if(ci.isFunction(g)){g=g.call(e,f,c)
}var h={top:(g.top-c.top)+d,left:(g.left-c.left)+b};
if("using" in g){g.using.call(e,h)
}else{a.css(h)
}}};
ci.fn.extend({position:function(){if(!this[0]){return null
}var a=this[0],c=this.offsetParent(),b=this.offset(),d=/^body|html$/i.test(c[0].nodeName)?{top:0,left:0}:c.offset();
b.top-=parseFloat(ci.curCSS(a,"marginTop",true))||0;
b.left-=parseFloat(ci.curCSS(a,"marginLeft",true))||0;
d.top+=parseFloat(ci.curCSS(c[0],"borderTopWidth",true))||0;
d.left+=parseFloat(ci.curCSS(c[0],"borderLeftWidth",true))||0;
return{top:b.top-d.top,left:b.left-d.left}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||b0.body;
while(a&&(!/^body|html$/i.test(a.nodeName)&&ci.css(a,"position")==="static")){a=a.offsetParent
}return a
})
}});
ci.each(["Left","Top"],function(a,c){var b="scroll"+c;
ci.fn[b]=function(e){var d=this[0],f;
if(!d){return null
}if(e!==bv){return this.each(function(){f=bF(this);
if(f){f.scrollTo(!a?e:ci(f).scrollLeft(),a?e:ci(f).scrollTop())
}else{this[b]=e
}})
}else{f=bF(d);
return f?("pageXOffset" in f)?f[a?"pageYOffset":"pageXOffset"]:ci.support.boxModel&&f.document.documentElement[b]||f.document.body[b]:d[b]
}}
});
ci.each(["Left","Top"],function(a,c){var b="scroll"+c;
ci.fn[b]=function(e){var d=this[0],f;
if(!d){return null
}if(e!==bv){return this.each(function(){f=bF(this);
if(f){f.scrollTo(!a?e:ci(f).scrollLeft(),a?e:ci(f).scrollTop())
}else{this[b]=e
}})
}else{f=bF(d);
return f?("pageXOffset" in f)?f[a?"pageYOffset":"pageXOffset"]:ci.support.boxModel&&f.document.documentElement[b]||f.document.body[b]:d[b]
}}
});
function bF(a){return("scrollTo" in a&&a.document)?a:a.nodeType===9?a.defaultView||a.parentWindow:false
}ci.each(["Height"],function(a,b){var c=b.toLowerCase();
ci.fn["inner"+b]=function(){return this[0]?ci.css(this[0],c,false,"padding"):null
};
ci.fn["outer"+b]=function(d){return this[0]?ci.css(this[0],c,false,d?"margin":"border"):null
};
ci.fn[c]=function(e){var d=this[0];
if(!d){return e==null?null:this
}if(ci.isFunction(e)){return this.each(function(f){var g=ci(this);
g[c](e.call(this,f,g[c]()))
})
}return("scrollTo" in d&&d.document)?d.document.compatMode==="CSS1Compat"&&d.document.documentElement["client"+b]||d.document.body["client"+b]:(d.nodeType===9)?Math.max(d.documentElement["client"+b],d.body["scroll"+b],d.documentElement["scroll"+b],d.body["offset"+b],d.documentElement["offset"+b]):e===bv?ci.css(d,c):this.css(c,typeof e==="string"?e:e+"px")
}
});
ci.each(["Width"],function(a,b){var c=b.toLowerCase();
ci.fn["inner"+b]=function(){return this[0]?ci.css(this[0],c,false,"padding"):null
};
ci.fn["outer"+b]=function(d){return this[0]?ci.css(this[0],c,false,d?"margin":"border"):null
};
ci.fn[c]=function(e){var d=this[0];
if(!d){return e==null?null:this
}if(ci.isFunction(e)){return this.each(function(f){var g=ci(this);
g[c](e.call(this,f,g[c]()))
})
}return("scrollTo" in d&&d.document)?d.document.compatMode==="CSS1Compat"&&d.document.documentElement["client"+b]||d.document.body["client"+b]:(d.nodeType===9)?Math.max(d.documentElement["client"+b],d.body["scroll"+b],d.documentElement["scroll"+b],d.body["offset"+b],d.documentElement["offset"+b]):e===bv?ci.css(d,c):this.css(c,typeof e==="string"?e:e+"px")
}
});
a2.jQuery=a2.$=ci
})(window);