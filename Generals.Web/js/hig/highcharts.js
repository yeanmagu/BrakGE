(function(){function G(a,b){var c;
a||(a={});
for(c in b){a[c]=b[c]
}return a
}function ak(){var a,b=arguments,c,d={},e=function(f,g){var h,i;
typeof f!=="object"&&(f={});
for(i in g){g.hasOwnProperty(i)&&(h=g[i],f[i]=h&&typeof h==="object"&&Object.prototype.toString.call(h)!=="[object Array]"&&i!=="renderTo"&&typeof h.nodeType!=="number"?e(f[i]||{},h):g[i])
}return f
};
b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));
c=b.length;
for(a=0;
a<c;
a++){d=e(d,b[a])
}return d
}function a8(a,b){return parseInt(a,b||10)
}function af(a){return typeof a==="string"
}function a4(a){return typeof a==="object"
}function a7(a){return Object.prototype.toString.call(a)==="[object Array]"
}function aw(a){return typeof a==="number"
}function ai(a){return bC.log(a)/bC.LN10
}function bE(a){return bC.pow(10,a)
}function bD(a,b){for(var c=a.length;
c--;
){if(a[c]===b){a.splice(c,1);
break
}}}function av(a){return a!==aC&&a!==null
}function bM(a,b,c){var d,e;
if(af(b)){av(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b))
}else{if(av(b)&&a4(b)){for(d in b){a.setAttribute(d,b[d])
}}}return e
}function aI(a){return a7(a)?a:[a]
}function bj(){var a=arguments,b,c,d=a.length;
for(b=0;
b<d;
b++){if(c=a[b],typeof c!=="undefined"&&c!==null){return c
}}}function aJ(a,b){if(ah&&!aS&&b&&b.opacity!==aC){b.filter="alpha(opacity="+b.opacity*100+")"
}G(a.style,b)
}function am(a,b,c,d,e){a=E.createElement(a);
b&&G(a,b);
e&&aJ(a,{padding:0,border:aO,margin:0});
c&&aJ(a,c);
d&&d.appendChild(a);
return a
}function T(a,b){var c=function(){};
c.prototype=new a;
G(c.prototype,b);
return c
}function S(a,b,c,d){var e=aj.lang,a=+a||0,f=b===-1?(a.toString().split(".")[1]||"").length:isNaN(b=bB(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(a8(a=bB(a).toFixed(f))),g=c.length>3?c.length%3:0;
return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+bB(a-c).toFixed(f).slice(2):"")
}function bm(a,b){return Array((b||2)+1-String(a).length).join(0)+a
}function aa(a,b,c){var d=a[b];
a[b]=function(){var e=Array.prototype.slice.call(arguments);
e.unshift(d);
return c.apply(this,e)
}
}function ar(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];
(c=a.indexOf(c))!==-1;
){e=a.slice(0,c);
if(d){f=e.split(":");
g=f.shift().split(".");
i=g.length;
e=b;
for(h=0;
h<i;
h++){e=e[g[h]]
}if(f.length){f=f.join(":"),g=/\.([0-9])/,h=aj.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=S(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=H(f,e)
}}j.push(e);
a=a.slice(c+1);
c=(d=!d)?"}":"{"
}j.push(a);
return j.join("")
}function aU(a){return bC.pow(10,bP(bC.log(a)/bC.LN10))
}function w(a,b,c,d){var e,c=bj(c,1);
e=a/c;
b||(b=[1,2,2.5,5,10],d&&d.allowDecimals===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));
for(d=0;
d<b.length;
d++){if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2){break
}}a*=c;
return a
}function bG(){this.symbol=this.color=0
}function aZ(a,b){var c=a.length,d,e;
for(e=0;
e<c;
e++){a[e].ss_i=e
}a.sort(function(f,g){d=b(f,g);
return d===0?f.ss_i-g.ss_i:d
});
for(e=0;
e<c;
e++){delete a[e].ss_i
}}function D(a){for(var b=a.length,c=a[0];
b--;
){a[b]<c&&(c=a[b])
}return c
}function bK(a){for(var b=a.length,c=a[0];
b--;
){a[b]>c&&(c=a[b])
}return c
}function al(a,b){for(var c in a){a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]
}}function bf(a){O||(O=am(a5));
a&&O.appendChild(a);
O.innerHTML=""
}function aD(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;
if(b){throw c
}else{bn.console&&console.log(c)
}}function P(a){return parseFloat(a.toPrecision(14))
}function aR(a,b){R=bj(a,b.animation)
}function aX(){var a=aj.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";
bd=(a&&aj.global.timezoneOffset||0)*60000;
ap=a?Date.UTC:function(d,e,f,g,h,i){return(new Date(d,e,bj(f,1),bj(g,0),bj(h,0),bj(i,0))).getTime()
};
au=b+"Minutes";
ae=b+"Hours";
q=b+"Day";
v=b+"Date";
ax=b+"Month";
bA=b+"FullYear";
a3=c+"Minutes";
a0=c+"Hours";
X=c+"Date";
aQ=c+"Month";
m=c+"FullYear"
}function aF(){}function bO(a,b,c,d){this.axis=a;
this.pos=b;
this.type=c||"";
this.isNew=!0;
!c&&!d&&this.addLabel()
}function I(){this.init.apply(this,arguments)
}function W(){this.init.apply(this,arguments)
}function a1(a,b,c,d,e){var f=a.chart.inverted;
this.axis=a;
this.isNegative=c;
this.options=b;
this.x=d;
this.total=null;
this.points={};
this.stack=e;
this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:bj(b.y,f?4:c?14:-6),x:bj(b.x,f?c?-6:6:0)};
this.textAlign=b.textAlign||(f?c?"right":"left":"center")
}var aC,E=document,bn=window,bC=Math,y=bC.round,bP=bC.floor,K=bC.ceil,Q=bC.max,bl=bC.min,bB=bC.abs,aH=bC.cos,A=bC.sin,bh=bC.PI,aL=bh*2/360,aP=navigator.userAgent,aV=bn.opera,ah=/msie/i.test(aP)&&!aV,aT=E.documentMode===8,a6=/AppleWebKit/.test(aP),a2=/Firefox/.test(aP),bg=/(Mobile|Android|Windows Phone)/.test(aP),F="http://www.w3.org/2000/svg",aS=!!E.createElementNS&&!!E.createElementNS(F,"svg").createSVGRect,az=a2&&parseInt(aP.split("Firefox/")[1],10)<4,bL=!aS&&!ah&&!!E.createElement("canvas").getContext,Z,ao,V={},aW=0,O,aj,H,R,bJ,aA,a9=function(){},be=[],ac=0,a5="div",aO="none",ba=/^[0-9]+$/,C="stroke-width",ap,bd,au,ae,q,v,ax,bA,a3,a0,X,aQ,m,bN={},aY=bn.Highcharts=bn.Highcharts?aD(16,!0):{};
H=function(c,d,e){if(!av(d)||isNaN(d)){return"Invalid date"
}var c=bj(c,"%Y-%m-%d %H:%M:%S"),f=new Date(d-bd),g,h=f[ae](),i=f[q](),j=f[v](),k=f[ax](),l=f[bA](),a=aj.lang,b=a.weekdays,f=G({a:b[i].substr(0,3),A:b[i],d:bm(j),e:j,b:a.shortMonths[k],B:a.months[k],m:bm(k+1),y:l.toString().substr(2,2),Y:l,H:bm(h),I:bm(h%12||12),l:h%12||12,M:bm(f[au]()),p:h<12?"AM":"PM",P:h<12?"am":"pm",S:bm(f.getSeconds()),L:bm(y(d%1000),3)},aY.dateFormats);
for(g in f){for(;
c.indexOf("%"+g)!==-1;
){c=c.replace("%"+g,typeof f[g]==="function"?f[g](d):f[g])
}}return e?c.substr(0,1).toUpperCase()+c.substr(1):c
};
bG.prototype={wrapColor:function(a){if(this.color>=a){this.color=0
}},wrapSymbol:function(a){if(this.symbol>=a){this.symbol=0
}}};
aA=function(){for(var a=0,b=arguments,c=b.length,d={};
a<c;
a++){d[b[a++]]=b[a]
}return d
}("millisecond",1,"second",1000,"minute",60000,"hour",3600000,"day",86400000,"week",604800000,"month",2678400000,"year",31556952000);
bJ={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(k){for(g=k.length;
g--;
){k[g]==="M"&&k.splice(g+1,0,k[g+1],k[g+2],k[g+1],k[g+2])
}};
e&&(j(b),j(c));
a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));
if(d<=c.length/f&&b.length===c.length){for(;
d--;
){c=[].concat(c).splice(0,f).concat(c)
}}a.shift=0;
if(b.length){for(a=c.length;
b.length<a;
){d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d)
}}h&&(b=b.concat(h),c=c.concat(i));
return[b,c]
},step:function(a,b,c,d){var e=[],f=a.length;
if(c===1){e=d
}else{if(f===b.length&&c<1){for(;
f--;
){d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d
}}else{e=b
}}return e
}};
(function(a){bn.HighchartsAdapter=bn.HighchartsAdapter||a&&{init:function(b){var c=a.fx,d=c.step,e,f=a.Tween,g=f&&f.propHooks;
e=a.cssHooks.opacity;
a.extend(a.easing,{easeOutQuad:function(k,l,h,i,j){return -i*(l/=j)*(l-2)+h
}});
a.each(["cur","_default","width","height","opacity"],function(i,j){var k=d,h;
j==="cur"?k=c.prototype:j==="_default"&&f&&(k=g[j],j="set");
(h=k[j])&&(k[j]=function(l){var n,l=i?l:this;
if(l.prop!=="align"){return n=l.elem,n.attr?n.attr(l.prop,j==="cur"?aC:l.now):h.apply(this,arguments)
}})
});
aa(e,"get",function(h,i,j){return i.attr?i.opacity||0:h.call(this,i,j)
});
e=function(h){var i=h.elem,j;
if(!h.started){j=b.init(i,i.d,i.toD),h.start=j[0],h.end=j[1],h.started=!0
}i.attr("d",b.step(h.start,h.end,h.pos,i.toD))
};
f?g.d={set:e}:d.d=e;
this.each=Array.prototype.forEach?function(h,i){return Array.prototype.forEach.call(h,i)
}:function(i,j){for(var k=0,h=i.length;
k<h;
k++){if(j.call(i[k],i[k],k,i)===!1){return k
}}};
a.fn.highcharts=function(){var i="Chart",j=arguments,k,h;
if(this[0]){af(j[0])&&(i=j[0],j=Array.prototype.slice.call(j,1));
k=j[0];
if(k!==aC){k.chart=k.chart||{},k.chart.renderTo=this[0],new aY[i](k,j[1]),h=this
}k===aC&&(h=be[bM(this[0],"data-highcharts-chart")])
}return h
}
},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()
},grep:a.grep,map:function(b,c){for(var d=[],e=0,f=b.length;
e<f;
e++){d[e]=c.call(b[e],b[e],e,b)
}return d
},offset:function(b){return a(b).offset()
},addEvent:function(b,c,d){a(b).bind(c,d)
},removeEvent:function(b,c,d){var e=E.removeEventListener?"removeEventListener":"detachEvent";
E[e]&&b&&!b[e]&&(b[e]=function(){});
a(b).unbind(c,d)
},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;
!ah&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);
G(f,d);
b[c]&&(b[g]=b[c],b[c]=null);
a.each(["preventDefault","stopPropagation"],function(j,k){var i=f[k];
f[k]=function(){try{i.call(f)
}catch(l){k==="preventDefault"&&(h=!0)
}}
});
a(b).trigger(f);
b[g]&&(b[c]=b[g],b[g]=null);
e&&!f.isDefaultPrevented()&&!h&&e(f)
},washMouseEvent:function(b){var c=b.originalEvent||b;
if(c.pageX===aC){c.pageX=b.pageX,c.pageY=b.pageY
}return c
},animate:function(b,c,d){var e=a(b);
if(!b.style){b.style={}
}if(c.d){b.toD=c.d,c.d=1
}e.stop();
c.opacity!==aC&&b.attr&&(c.opacity+="px");
e.animate(c,d)
},stop:function(b){a(b).stop()
}}
})(bn.jQuery);
var bi=bn.HighchartsAdapter,ag=bi||{};
bi&&bi.init.call(bi,bJ);
var bo=ag.adapterRun,bb=ag.getScript,bI=ag.inArray,M=ag.each,U=ag.grep,p=ag.offset,r=ag.map,u=ag.addEvent,N=ag.removeEvent,aN=ag.fireEvent,bc=ag.washMouseEvent,z=ag.animate,aM=ag.stop,ag={enabled:!0,x:0,y:15,style:{color:"#606060",cursor:"default",fontSize:"11px"}};
aj={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/4.0.1/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.0.1/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1000},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:ak(ag,{align:"center",enabled:!1,formatter:function(){return this.y===null?"":S(this.y,-1)
},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1000}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name
},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"1em"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:aS,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:bg?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};
var aK=aj.plotOptions,bi=aK.line;
aX();
var br=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,at=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,bH=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,bs=function(a){var b=[],c,d;
(function(e){e&&e.stops?d=r(e.stops,function(f){return bs(f[1])
}):(c=br.exec(e))?b=[a8(c[1]),a8(c[2]),a8(c[3]),parseFloat(c[4],10)]:(c=at.exec(e))?b=[a8(c[1],16),a8(c[2],16),a8(c[3],16),1]:(c=bH.exec(e))&&(b=[a8(c[1]),a8(c[2]),a8(c[3]),1])
})(a);
return{get:function(e){var f;
d?(f=ak(a),f.stops=[].concat(f.stops),M(d,function(g,h){f.stops[h]=[f.stops[h][0],g.get(e)]
})):f=b&&!isNaN(b[0])?e==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":e==="a"?b[3]:"rgba("+b.join(",")+")":a;
return f
},brighten:function(e){if(d){M(d,function(g){g.brighten(e)
})
}else{if(aw(e)&&e!==0){var f;
for(f=0;
f<3;
f++){b[f]+=a8(e*255),b[f]<0&&(b[f]=0),b[f]>255&&(b[f]=255)
}}}return this
},rgba:b,setOpacity:function(e){b[3]=e;
return this
}}
};
aF.prototype={init:function(a,b){this.element=b==="span"?am(b):E.createElementNS(F,b);
this.renderer=a
},opacity:1,animate:function(a,b,c){b=bj(b,R,!0);
aM(this);
if(b){b=ak(b,{});
if(c){b.complete=c
}z(this,a,b)
}else{this.attr(a),c&&c()
}},colorGradient:function(f,g,h){var i=this.renderer,j,k,l,n,o,s,a,b,d,c,e=[];
f.linearGradient?k="linearGradient":f.radialGradient&&(k="radialGradient");
if(k){l=f[k];
n=i.gradients;
s=f.stops;
d=h.radialReference;
a7(l)&&(f[k]=l={x1:l[0],y1:l[1],x2:l[2],y2:l[3],gradientUnits:"userSpaceOnUse"});
k==="radialGradient"&&d&&!av(l.gradientUnits)&&(l=ak(l,{cx:d[0]-d[2]/2+l.cx*d[2],cy:d[1]-d[2]/2+l.cy*d[2],r:l.r*d[2],gradientUnits:"userSpaceOnUse"}));
for(c in l){c!=="id"&&e.push(c,l[c])
}for(c in s){e.push(s[c])
}e=e.join(",");
n[e]?f=n[e].attr("id"):(l.id=f="highcharts-"+aW++,n[e]=o=i.createElement(k).attr(l).add(i.defs),o.stops=[],M(s,function(x){x[1].indexOf("rgba")===0?(j=bs(x[1]),a=j.get("rgb"),b=j.get("a")):(a=x[1],b=1);
x=i.createElement("stop").attr({offset:x[0],"stop-color":a,"stop-opacity":b}).add(o);
o.stops.push(x)
}));
h.setAttribute(g,"url("+i.url+"#"+f+")")
}},attr:function(a,b){var c,d,e=this.element,f,g=this,h;
typeof a==="string"&&b!==aC&&(c=a,a={},a[c]=b);
if(typeof a==="string"){g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e)
}else{for(c in a){d=a[c];
h=!1;
this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(f||(this.symbolAttr(a),f=!0),h=!0);
if(this.rotation&&(c==="x"||c==="y")){this.doTransform=!0
}h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e);
this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d)
}if(this.doTransform){this.updateTransform(),this.doTransform=!1
}}return g
},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;
d--;
){c[d].setAttribute(a,a==="height"?Q(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)
}},addClass:function(a){var b=this.element,c=bM(b,"class")||"";
c.indexOf(a)===-1&&bM(b,"class",c+" "+a);
return this
},symbolAttr:function(a){var b=this;
M("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=bj(a[c],b[c])
});
b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})
},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":aO)
},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||this.attr&&this.attr("stroke-width")||0;
d=y(e)%2/2;
a.x=bP(a.x||this.x||0)+d;
a.y=bP(a.y||this.y||0)+d;
a.width=bP((a.width||this.width||0)-2*d);
a.height=bP((a.height||this.height||0)-2*d);
a.strokeWidth=e;
for(b in a){this[b]!==a[b]&&(this[b]=c[b]=a[b])
}return c
},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";
e=!b;
if(a&&a.color){a.fill=a.color
}if(b){for(f in a){a[f]!==b[f]&&(c[f]=a[f],e=!0)
}}if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&a8(a.width);
b&&(a=G(b,c));
this.styles=a;
e&&(bL||!aS&&this.renderer.forExport)&&delete a.width;
if(ah&&!aS){aJ(this.element,a)
}else{b=function(h,i){return"-"+i.toLowerCase()
};
for(f in a){g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";"
}bM(d,"style",g)
}e&&this.added&&this.renderer.buildText(this)
}return this
},on:function(a,b){var c=this,d=c.element;
ao&&a==="click"?(d.ontouchstart=function(e){c.touchEventFired=Date.now();
e.preventDefault();
b.call(d,e)
},d.onclick=function(e){(aP.indexOf("Android")===-1||Date.now()-(c.touchEventFired||0)>1100)&&b.call(d,e)
}):d["on"+a]=b;
return this
},setRadialReference:function(a){this.element.radialReference=a;
return this
},translate:function(a,b){return this.attr({translateX:a,translateY:b})
},invert:function(){this.inverted=!0;
this.updateTransform();
return this
},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;
e&&(a+=this.attr("width"),b+=this.attr("height"));
a=["translate("+a+","+b+")"];
e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");
(av(c)||av(d))&&a.push("scale("+bj(c,1)+" "+bj(d,1)+")");
a.length&&g.setAttribute("transform",a.join(" "))
},toFront:function(){var a=this.element;
a.parentNode.appendChild(a);
return this
},align:function(a,b,c){var d,e,f,g,h={};
e=this.renderer;
f=e.alignedObjects;
if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||af(c)){this.alignTo=d=c||"renderer",bD(f,this),f.push(this),c=null
}}else{a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo
}c=bj(c,e[d],e);
d=a.align;
e=a.verticalAlign;
f=(c.x||0)+(a.x||0);
g=(c.y||0)+(a.y||0);
if(d==="right"||d==="center"){f+=(c.width-(a.width||0))/{right:1,center:2}[d]
}h[b?"translateX":"x"]=y(f);
if(e==="bottom"||e==="middle"){g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1)
}h[b?"translateY":"y"]=y(g);
this[this.placed?"animate":"attr"](h);
this.placed=!0;
this.alignAttr=h;
return this
},getBBox:function(){var a=this.bBox,b=this.renderer,c,d,e=this.rotation;
c=this.element;
var f=this.styles,g=e*aL;
d=this.textStr;
var h;
if(d===""||ba.test(d)){h="num."+d.toString().length+(f?"|"+f.fontSize+"|"+f.fontFamily:"")
}h&&(a=b.cache[h]);
if(!a){if(c.namespaceURI===F||b.forExport){try{a=c.getBBox?G({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}
}catch(i){}if(!a||a.width<0){a={width:0,height:0}
}}else{a=this.htmlGetBBox()
}if(b.isSVG){c=a.width;
d=a.height;
if(ah&&f&&f.fontSize==="11px"&&d.toPrecision(3)==="16.9"){a.height=d=14
}if(e){a.width=bB(d*A(g))+bB(c*aH(g)),a.height=bB(d*aH(g))+bB(c*A(g))
}}this.bBox=a;
h&&(b.cache[h]=a)
}return a
},show:function(a){return a&&this.element.namespaceURI===F?(this.element.removeAttribute("visibility"),this):this.attr({visibility:a?"inherit":"visible"})
},hide:function(){return this.attr({visibility:"hidden"})
},fadeOut:function(a){var b=this;
b.animate({opacity:0},{duration:a||150,complete:function(){b.hide()
}})
},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=this.element,f=this.zIndex,g,h;
if(a){this.parentGroup=a
}this.parentInverted=a&&a.inverted;
this.textStr!==void 0&&b.buildText(this);
if(f){c.handleZ=!0,f=a8(f)
}if(c.handleZ){a=d.childNodes;
for(g=0;
g<a.length;
g++){if(b=a[g],c=bM(b,"zIndex"),b!==e&&(a8(c)>f||!av(f)&&av(c))){d.insertBefore(e,b);
h=!0;
break
}}}h||d.appendChild(e);
this.added=!0;
if(this.onAdd){this.onAdd()
}return this
},safeRemoveChild:function(a){var b=a.parentNode;
b&&b.removeChild(a)
},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;
b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;
aM(a);
if(a.clipPath){a.clipPath=a.clipPath.destroy()
}if(a.stops){for(f=0;
f<a.stops.length;
f++){a.stops[f]=a.stops[f].destroy()
}a.stops=null
}a.safeRemoveChild(b);
for(c&&M(c,function(g){a.safeRemoveChild(g)
});
d&&d.div.childNodes.length===0;
){b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b
}a.alignTo&&bD(a.renderer.alignedObjects,a);
for(e in a){delete a[e]
}return null
},shadow:function(e,f,g){var h=[],i,j,k=this.element,a,b,c,d;
if(e){b=bj(e.width,3);
c=(e.opacity||0.15)/b;
d=this.parentInverted?"(-1,-1)":"("+bj(e.offsetX,1)+", "+bj(e.offsetY,1)+")";
for(i=1;
i<=b;
i++){j=k.cloneNode(0);
a=b*2+1-2*i;
bM(j,{isShadow:"true",stroke:e.color||"black","stroke-opacity":c*i,"stroke-width":a,transform:"translate"+d,fill:aO});
if(g){bM(j,"height",Q(bM(j,"height")-a,0)),j.cutHeight=a
}f?f.element.appendChild(j):k.parentNode.insertBefore(j,k);
h.push(j)
}this.shadows=h
}return this
},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);
return this._defaultGetter(a)
},_defaultGetter:function(a){a=bj(this[a],this.element?this.element.getAttribute(a):null,0);
/^[0-9\.]+$/.test(a)&&(a=parseFloat(a));
return a
},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");
c.setAttribute(b,a);
this[b]=a
},dashstyleSetter:function(a){var b;
if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");
for(b=a.length;
b--;
){a[b]=a8(a[b])*this.element.getAttribute("stroke-width")
}a=a.join(",");
this.element.setAttribute("stroke-dasharray",a)
}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])
},opacitySetter:function(a,b,c){this[b]=a;
c.setAttribute(b,a)
},"stroke-widthSetter":function(a,b,c){a===0&&(a=1e-05);
this.strokeWidth=a;
c.setAttribute(b,a)
},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];
b||(b=E.createElementNS(F,"title"),this.element.appendChild(b));
b.textContent=a
},textSetter:function(a){if(a!==this.textStr){delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)
}},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)
},zIndexSetter:function(a,b,c){c.setAttribute(b,a);
this[b]=a
},_defaultSetter:function(a,b,c){c.setAttribute(b,a)
}};
aF.prototype.yGetter=aF.prototype.xGetter;
aF.prototype.translateXSetter=aF.prototype.translateYSetter=aF.prototype.rotationSetter=aF.prototype.verticalAlignSetter=aF.prototype.scaleXSetter=aF.prototype.scaleYSetter=function(a,b){this[b]=a;
this.doTransform=!0
};
aF.prototype.strokeSetter=aF.prototype.fillSetter;
var t=function(){this.init.apply(this,arguments)
};
t.prototype={Element:aF,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));
g=d.element;
a.appendChild(g);
a.innerHTML.indexOf("xmlns")===-1&&bM(g,"xmlns",F);
this.isSVG=!0;
this.box=g;
this.boxWrapper=d;
this.alignedObjects=[];
this.url=(a2||a6)&&E.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";
this.createElement("desc").add().element.appendChild(E.createTextNode("Created with Highcharts 4.0.1"));
this.defs=this.createElement("defs").add();
this.forExport=e;
this.gradients={};
this.cache={};
this.setSize(b,c,!1);
var h;
if(a2&&a.getBoundingClientRect){this.subPixelFix=b=function(){aJ(a,{left:0,top:0});
h=a.getBoundingClientRect();
aJ(a,{left:K(h.left)-h.left+"px",top:K(h.top)-h.top+"px"})
},b(),u(bn,"resize",b)
}},getStyle:function(a){return this.style=G({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)
},isHidden:function(){return !this.boxWrapper.getBBox().width
},destroy:function(){var a=this.defs;
this.box=null;
this.boxWrapper=this.boxWrapper.destroy();
al(this.gradients||{});
this.gradients=null;
if(a){this.defs=a.destroy()
}this.subPixelFix&&N(bn,"resize",this.subPixelFix);
return this.alignedObjects=null
},createElement:function(a){var b=new this.Element;
b.init(this,a);
return b
},draw:function(){},buildText:function(f){for(var g=f.element,h=this,i=h.forExport,j=bj(f.textStr,"").toString(),k=j.indexOf("<")!==-1,l=g.childNodes,n,o,s=bM(g,"x"),a=f.styles,b=f.textWidth,d=a&&a.lineHeight,c=l.length,e=function(x){return d?a8(d):h.fontMetrics(/(px|em)$/.test(x&&x.style.fontSize)?x.style.fontSize:a&&a.fontSize||h.style.fontSize||12).h
};
c--;
){g.removeChild(l[c])
}!k&&j.indexOf(" ")===-1?g.appendChild(E.createTextNode(j)):(n=/<.*style="([^"]+)".*>/,o=/<.*href="(http[^"]+)".*>/,b&&!f.added&&this.box.appendChild(g),j=k?j.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[j],j[j.length-1]===""&&j.pop(),M(j,function(x,B){var J,L=0,x=x.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");
J=x.split("|||");
M(J,function(bt){if(bt!==""||J.length===1){var bT={},bu=E.createElementNS(F,"tspan"),bv;
n.test(bt)&&(bv=bt.match(n)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),bM(bu,"style",bv));
o.test(bt)&&!i&&(bM(bu,"onclick",'location.href="'+bt.match(o)[1]+'"'),aJ(bu,{cursor:"pointer"}));
bt=(bt.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");
if(bt!==" "){bu.appendChild(E.createTextNode(bt));
if(L){bT.dx=0
}else{if(B&&s!==null){bT.x=s
}}bM(bu,bT);
!L&&B&&(!aS&&i&&aJ(bu,{display:"block"}),bM(bu,"dy",e(bu),a6&&bu.offsetHeight));
g.appendChild(bu);
L++;
if(b){for(var bt=bt.replace(/([^\^])-/g,"$1- ").split(" "),bT=bt.length>1&&a.whiteSpace!=="nowrap",bw,bx,bS=f._clipHeight,by=[],bz=e(),bR=1;
bT&&(bt.length||by.length);
){delete f.bBox,bw=f.getBBox(),bx=bw.width,!aS&&h.forExport&&(bx=h.measureSpanWidth(bu.firstChild.data,f.styles)),bw=bx>b,!bw||bt.length===1?(bt=by,by=[],bt.length&&(bR++,bS&&bR*bz>bS?(bt=["..."],f.attr("title",f.textStr)):(bu=E.createElementNS(F,"tspan"),bM(bu,{dy:bz,x:s}),bv&&bM(bu,"style",bv),g.appendChild(bu),bx>b&&(b=bx)))):(bu.removeChild(bu.firstChild),by.unshift(bt.pop())),bt.length&&bu.appendChild(E.createTextNode(bt.join(" ").replace(/- /g,"-")))
}}}}})
}))
},button:function(i,l,n,o,s,x,a,b,B){var c=this.label(i,l,n,B,null,null,null,null,"button"),d=0,e,h,g,k,f,j,i={x1:0,y1:0,x2:0,y2:1},s=ak({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:i,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},s);
g=s.style;
delete s.style;
x=ak(s,{stroke:"#68A",fill:{linearGradient:i,stops:[[0,"#FFF"],[1,"#ACF"]]}},x);
k=x.style;
delete x.style;
a=ak(s,{stroke:"#68A",fill:{linearGradient:i,stops:[[0,"#9BD"],[1,"#CDF"]]}},a);
f=a.style;
delete a.style;
b=ak(s,{style:{color:"#CCC"}},b);
j=b.style;
delete b.style;
u(c.element,ah?"mouseover":"mouseenter",function(){d!==3&&c.attr(x).css(k)
});
u(c.element,ah?"mouseout":"mouseleave",function(){d!==3&&(e=[s,x,a][d],h=[g,k,f][d],c.attr(e).css(h))
});
c.setState=function(J){(c.state=d=J)?J===2?c.attr(a).css(f):J===3&&c.attr(b).css(j):c.attr(s).css(g)
};
return c.on("click",function(){d!==3&&o.call(c)
}).attr(s).css(G({cursor:"default"},g))
},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=y(a[1])-b%2/2);
a[2]===a[5]&&(a[2]=a[5]=y(a[2])+b%2/2);
return a
},path:function(a){var b={fill:aO};
a7(a)?b.d=a:a4(a)&&G(b,a);
return this.createElement("path").attr(b)
},circle:function(a,b,c){a=a4(a)?a:{x:a,y:b,r:c};
b=this.createElement("circle");
b.xSetter=function(d){this.element.setAttribute("cx",d)
};
b.ySetter=function(d){this.element.setAttribute("cy",d)
};
return b.attr(a)
},arc:function(a,b,c,d,e,f){if(a4(a)){b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x
}a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});
a.r=c;
return a
},rect:function(a,b,c,d,e,f){var e=a4(a)?a.r:e,g=this.createElement("rect"),a=a4(a)?a:a===aC?{}:{x:a,y:b,width:Q(c,0),height:Q(d,0)};
if(f!==aC){a.strokeWidth=f,a=g.crisp(a)
}if(e){a.r=e
}g.rSetter=function(h){bM(this.element,{rx:h,ry:h})
};
return g.attr(a)
},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;
this.width=a;
this.height=b;
for(this.boxWrapper[bj(c,!0)?"animate":"attr"]({width:a,height:b});
e--;
){d[e].align()
}},g:function(a){var b=this.createElement("g");
return av(a)?b.attr({"class":"highcharts-"+a}):b
},image:function(a,b,c,d,e){var f={preserveAspectRatio:aO};
arguments.length>1&&G(f,{x:b,y:c,width:d,height:e});
f=this.createElement("image").attr(f);
f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);
return f
},symbol:function(e,f,g,h,i,j){var k,a=this.symbols[e],a=a&&a(y(f),y(g),h,i,j),b=/^url\((.*?)\)$/,c,d;
if(a){k=this.path(a),G(k,{symbolName:e,x:f,y:g,width:h,height:i}),j&&G(k,j)
}else{if(b.test(e)){d=function(l,n){l.element&&(l.attr({width:n[0],height:n[1]}),l.alignByTranslate||l.translate(y((h-n[0])/2),y((i-n[1])/2)))
},c=e.match(b)[1],e=V[c],k=this.image(c).attr({x:f,y:g}),k.isImg=!0,e?d(k,e):(k.attr({width:0,height:0}),am("img",{onload:function(){d(k,V[c]=[this.width,this.height])
},src:c}))
}}return k
},symbols:{circle:function(a,b,c,d){var e=0.166*c;
return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]
},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]
},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]
},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]
},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]
},arc:function(e,f,g,h,i){var j=i.start,g=i.r||g||h,k=i.end-0.001,h=i.innerR,a=i.open,b=aH(j),c=A(j),d=aH(k),k=A(k),i=i.end-j<bh?0:1;
return["M",e+g*b,f+g*c,"A",g,g,0,i,1,e+g*d,f+g*k,a?"M":"L",e+h*d,f+h*k,"A",h,h,0,i,0,e+h*b,f+h*c,a?"":"Z"]
},callout:function(a,b,c,d,e){var f=bl(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,i=e&&e.anchorY,e=y(e.strokeWidth||0)%2/2;
a+=e;
b+=e;
e=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];
h&&h>c&&i>b+g&&i<b+d-g?e.splice(13,3,"L",a+c,i-6,a+c+6,i,a+c,i+6,a+c,b+d-f):h&&h<0&&i>b+g&&i<b+d-g?e.splice(33,3,"L",a,i+6,a-6,i,a,i-6,a,b+f):i&&i>d&&h>a+g&&h<a+c-g?e.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):i&&i<0&&h>a+g&&h<a+c-g&&e.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);
return e
}},clipRect:function(a,b,c,d){var e="highcharts-"+aW++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);
a.id=e;
a.clipPath=f;
return a
},text:function(a,b,c,d){var e=bL||!aS&&this.forExport,f={};
if(d&&!this.forExport){return this.html(a,b,c)
}f.x=Math.round(b||0);
if(c){f.y=Math.round(c)
}if(a||a===0){f.text=a
}a=this.createElement("text").attr(f);
e&&a.css({position:"absolute"});
if(!d){a.xSetter=function(i,j,k){var l=k.childNodes,g,h;
for(h=1;
h<l.length;
h++){g=l[h],g.getAttribute("x")===k.getAttribute("x")&&g.setAttribute("x",i)
}k.setAttribute(j,i)
}
}return a
},fontMetrics:function(a){var a=a||this.style.fontSize,a=/px/.test(a)?a8(a):/em/.test(a)?parseFloat(a)*12:12,a=a<24?a+4:y(a*1.2),b=y(a*0.8);
return{h:a,b:b}
},label:function(f,k,bv,h,bS,s,bx,a,j){function bu(){var bU,bV;
bU=L.element.style;
e=(bR===void 0||bz===void 0||bt.styles.textAlign)&&L.textStr&&L.getBBox();
bt.width=(bR||e.width||0)+2*l+g;
bt.height=(bz||e.height||0)+2*l;
c=l+bw.fontMetrics(bU&&bU.fontSize).b;
if(J){if(!i){bU=y(-x*l),bV=a?-c:0,bt.box=i=h?bw.symbol(h,bU,bV,bt.width,bt.height,b):bw.rect(bU,bV,bt.width,bt.height,0,b[C]),i.attr("fill",aO).add(bt)
}i.isImg||i.attr(G({width:y(bt.width),height:y(bt.height)},b));
b=null
}}function B(){var bU=bt.styles,bU=bU&&bU.textAlign,bV=g+l*(1-x),bW;
bW=a?0:c;
if(av(bR)&&e&&(bU==="center"||bU==="right")){bV+={center:0.5,right:1}[bU]*(bR-e.width)
}if(bV!==L.x||bW!==L.y){L.attr("x",bV),bW!==aC&&L.attr("y",bW)
}L.x=bV;
L.y=bW
}function bT(bU,bV){i?i.attr(bU,bV):b[bU]=bV
}var bw=this,bt=bw.g(j),L=bw.text("",0,0,bx).attr({zIndex:1}),i,e,x=0,l=3,g=0,bR,bz,o,d,n=0,b={},c,J;
bt.onAdd=function(){L.add(bt);
bt.attr({text:f||"",x:k,y:bv});
i&&av(bS)&&bt.attr({anchorX:bS,anchorY:s})
};
bt.widthSetter=function(bU){bR=bU
};
bt.heightSetter=function(bU){bz=bU
};
bt.paddingSetter=function(bU){av(bU)&&bU!==l&&(l=bU,B())
};
bt.paddingLeftSetter=function(bU){av(bU)&&bU!==g&&(g=bU,B())
};
bt.alignSetter=function(bU){x={left:0,center:0.5,right:1}[bU]
};
bt.textSetter=function(bU){bU!==aC&&L.textSetter(bU);
bu();
B()
};
bt["stroke-widthSetter"]=function(bU,bV){bU&&(J=!0);
n=bU%2/2;
bT(bV,bU)
};
bt.strokeSetter=bt.fillSetter=bt.rSetter=function(bU,bV){bV==="fill"&&bU&&(J=!0);
bT(bV,bU)
};
bt.anchorXSetter=function(bU,bV){bS=bU;
bT(bV,bU+n-o)
};
bt.anchorYSetter=function(bU,bV){s=bU;
bT(bV,bU-d)
};
bt.xSetter=function(bU){bt.x=bU;
x&&(bU-=x*((bR||e.width)+l));
o=y(bU);
bt.attr("translateX",o)
};
bt.ySetter=function(bU){d=bt.y=y(bU);
bt.attr("translateY",d)
};
var by=bt.css;
return G(bt,{css:function(bU){if(bU){var bV={},bU=ak(bU);
M("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","),function(bW){bU[bW]!==aC&&(bV[bW]=bU[bW],delete bU[bW])
});
L.css(bV)
}return by.call(bt,bU)
},getBBox:function(){return{width:e.width+2*l,height:e.height+2*l,x:e.x-l,y:e.y-l}
},shadow:function(bU){i&&i.shadow(bU);
return bt
},destroy:function(){N(bt.element,"mouseenter");
N(bt.element,"mouseleave");
L&&(L=L.destroy());
i&&(i=i.destroy());
aF.prototype.destroy.call(bt);
bt=bw=bu=B=bT=null
}})
}};
Z=t;
G(aF.prototype,{htmlCss:function(a){var b=this.element;
if(b=a&&b.tagName==="SPAN"&&a.width){delete a.width,this.textWidth=b,this.updateTransform()
}this.styles=G(this.styles,a);
aJ(this.element,a);
return this
},htmlGetBBox:function(){var a=this.element,b=this.bBox;
if(!b){if(a.nodeName==="text"){a.style.position="absolute"
}b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}
}return b
},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows;
aJ(b,{marginLeft:c,marginTop:d});
i&&M(i,function(o){aJ(o,{marginLeft:c+1,marginTop:d+1})
});
this.inverted&&M(b.childNodes,function(o){a.invertChild(o,b)
});
if(b.tagName==="SPAN"){var j=this.rotation,k,l=a8(this.textWidth),n=[j,g,b.innerHTML,this.textWidth].join(",");
if(n!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;
av(j)&&this.setSpanRotation(j,h,k);
i=bj(this.elemWidth,b.offsetWidth);
if(i>l&&/[ \-]/.test(b.textContent||b.innerText)){aJ(b,{width:l+"px",display:"block",whiteSpace:"normal"}),i=l
}this.getSpanCorrection(i,k,h,j,g)
}aJ(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});
if(a6){k=b.offsetHeight
}this.cTT=n
}}else{this.alignOnAdd=!0
}},setSpanRotation:function(a,b,c){var d={},e=ah?"-ms-transform":a6?"-webkit-transform":a2?"MozTransform":aV?"-o-transform":"";
d[e]=d.transform="rotate("+a+"deg)";
d[e+(a2?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";
aJ(this.element,d)
},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;
this.yCorr=-b
}});
G(t.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;
d.textSetter=function(g){g!==e.innerHTML&&delete this.bBox;
e.innerHTML=this.textStr=g
};
d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(g,h){h==="align"&&(h="textAlign");
d[h]=g;
d.htmlUpdateTransform()
};
d.attr({text:a,x:y(b),y:y(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});
d.css=d.htmlCss;
if(f.isSVG){d.add=function(g){var h,i=f.box.parentNode,j=[];
if(this.parentGroup=g){if(h=g.div,!h){for(;
g;
){j.push(g),g=g.parentGroup
}M(j.reverse(),function(k){var l;
h=k.div=k.div||am(a5,{className:bM(k.element,"class")},{position:"absolute",left:(k.translateX||0)+"px",top:(k.translateY||0)+"px"},h||i);
l=h.style;
G(k,{translateXSetter:function(n,o){l.left=n+"px";
k[o]=n;
k.doTransform=!0
},translateYSetter:function(n,o){l.top=n+"px";
k[o]=n;
k.doTransform=!0
},visibilitySetter:function(n,o){l[o]=n
}})
})
}}else{h=i
}h.appendChild(e);
d.added=!0;
d.alignOnAdd&&d.htmlUpdateTransform();
return d
}
}return d
}});
var aB;
if(!aS&&!bL){aY.VMLElement=aB={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===a5;
(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");
d.push("visibility: ",e?"hidden":"visible");
c.push(' style="',d.join(""),'"/>');
if(b){c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=am(c)
}this.renderer=a
},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;
a&&a.inverted&&b.invertChild(c,d);
d.appendChild(c);
this.added=!0;
this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();
if(this.onAdd){this.onAdd()
}return this
},updateTransform:aF.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=aH(a*aL),c=A(a*aL);
aJ(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):aO})
},getSpanCorrection:function(a,b,c,d,e){var f=d?aH(d*aL):1,g=d?A(d*aL):0,h=bj(this.elemHeight,this.element.offsetHeight),i;
this.xCorr=f<0&&-a;
this.yCorr=g<0&&-h;
i=f*g<0;
this.xCorr+=g*b*(i?1-c:c);
this.yCorr-=f*b*(d?i?c:1-c:1);
e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),aJ(this.element,{textAlign:e}))
},pathToVML:function(a){for(var b=a.length,c=[];
b--;
){if(aw(a[b])){c[b]=y(a[b]*10)-5
}else{if(a[b]==="Z"){c[b]="x"
}else{if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at")){c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1)
}}}}return c.join(" ")||"x"
},clip:function(a){var b=this,c;
a?(c=a.members,bD(c,b),c.push(b),b.destroyClip=function(){bD(c,b)
},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:aT?"inherit":"rect(auto)"});
return b.css(a)
},css:aF.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&bf(a)
},destroy:function(){this.destroyClip&&this.destroyClip();
return aF.prototype.destroy.apply(this)
},on:function(a,b){this.element["on"+a]=function(){var c=bn.event;
c.target=c.srcElement;
b(c)
};
return this
},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);
c=a.length;
if(c===9||c===11){a[c-4]=a[c-2]=a8(a[c-2])-10*b
}return a.join(" ")
},shadow:function(f,g,h){var i=[],j,k=this.element,l=this.renderer,n,o=k.style,s,a=k.path,b,d,c,e;
a&&typeof a.value!=="string"&&(a="x");
d=a;
if(f){c=bj(f.width,3);
e=(f.opacity||0.15)/c;
for(j=1;
j<=3;
j++){b=c*2+1-2*j;
h&&(d=this.cutOffPath(a.value,b+0.5));
s=['<shape isShadow="true" strokeweight="',b,'" filled="false" path="',d,'" coordsize="10 10" style="',k.style.cssText,'" />'];
n=am(l.prepVML(s),null,{left:a8(o.left)+bj(f.offsetX,1),top:a8(o.top)+bj(f.offsetY,1)});
if(h){n.cutOff=b+1
}s=['<stroke color="',f.color||"black",'" opacity="',e*j,'"/>'];
am(l.prepVML(s),null,null,n);
g?g.element.appendChild(n):k.parentNode.insertBefore(n,k);
i.push(n)
}this.shadows=i
}return this
},updateShadows:a9,setAttr:function(a,b){aT?this.element[a]=b:this.element.setAttribute(a,b)
},classSetter:function(a){this.element.className=a
},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||am(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";
this[b]=a
},dSetter:function(a,b,c){var d=this.shadows,a=a||[];
this.d=a.join(" ");
c.path=a=this.pathToVML(a);
if(d){for(c=d.length;
c--;
){d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a
}}this.setAttr(b,a)
},fillSetter:function(a,b,c){var d=c.nodeName;
if(d==="SPAN"){c.style.color=a
}else{if(d!=="IMG"){c.filled=a!==aO,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))
}}},opacitySetter:a9,rotationSetter:function(a,b,c){c=c.style;
this[b]=c[b]=a;
c.left=-y(A(a*aL)+1)+"px";
c.top=y(aH(a*aL))+"px"
},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))
},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;
this[b]=a;
aw(a)&&(a+="px");
this.setAttr("strokeweight",a)
},titleSetter:function(a,b){this.setAttr(b,a)
},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");
this.shadows&&M(this.shadows,function(d){d.style[b]=a
});
c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,aT||(c.style[b]=a?"visible":"hidden"),b="top");
c.style[b]=a
},xSetter:function(a,b,c){this[b]=a;
b==="x"?b="left":b==="y"&&(b="top");
this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a
},zIndexSetter:function(a,b,c){c.style[b]=a
}};
aB=T(aF,aB);
aB.prototype.ySetter=aB.prototype.widthSetter=aB.prototype.heightSetter=aB.prototype.xSetter;
var ad={Element:aB,isIE8:aP.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;
this.alignedObjects=[];
d=this.createElement(a5).css(G(this.getStyle(d),{position:"relative"}));
e=d.element;
a.appendChild(d.element);
this.isVML=!0;
this.box=e;
this.boxWrapper=d;
this.cache={};
this.setSize(b,c,!1);
if(!E.namespaces.hcv){E.namespaces.add("hcv","urn:schemas-microsoft-com:vml");
try{E.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
}catch(f){E.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
}}},isHidden:function(){return !this.box.offsetWidth
},clipRect:function(a,b,c,d){var e=this.createElement(),f=a4(a);
return G(e,{members:[],left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(i){var j=i.element,k=j.nodeName,i=i.inverted,l=this.top-(k==="shape"?j.offsetTop:0),g=this.left,j=g+this.width,h=l+this.height,l={clip:"rect("+y(i?g:l)+"px,"+y(i?h:j)+"px,"+y(i?j:h)+"px,"+y(i?l:g)+"px)"};
!i&&aT&&k==="DIV"&&G(l,{width:j+"px",height:h+"px"});
return l
},updateClipping:function(){M(e.members,function(g){g.element&&g.css(e.getCSS(g))
})
}})
},color:function(bR,bz,e,f){var g=this,h,i=/^rgba/,L,l,bt=aO;
bR&&bR.linearGradient?l="gradient":bR&&bR.radialGradient&&(l="pattern");
if(l){var s,bu,bw=bR.linearGradient||bR.radialGradient,bS,by,B,b,j,d="",bR=bR.stops,J,bx=[],o=function(){L=['<fill colors="'+bx.join(",")+'" opacity="',B,'" o:opacity2="',by,'" type="',l,'" ',d,'focus="100%" method="any" />'];
am(g.prepVML(L),null,null,bz)
};
bS=bR[0];
J=bR[bR.length-1];
bS[0]>0&&bR.unshift([0,bS[1]]);
J[0]<1&&bR.push([1,J[1]]);
M(bR,function(bT,bU){i.test(bT[1])?(h=bs(bT[1]),s=h.get("rgb"),bu=h.get("a")):(s=bT[1],bu=1);
bx.push(bT[0]*100+"% "+s);
bU?(B=bu,b=s):(by=bu,j=s)
});
if(e==="fill"){if(l==="gradient"){e=bw.x1||bw[0]||0,bR=bw.y1||bw[1]||0,bS=bw.x2||bw[2]||0,bw=bw.y2||bw[3]||0,d='angle="'+(90-bC.atan((bw-bR)/(bS-e))*180/bh)+'"',o()
}else{var bt=bw.r,a=bt*2,x=bt*2,k=bw.cx,n=bw.cy,bv=bz.radialReference,c,bt=function(){bv&&(c=f.getBBox(),k+=(bv[0]-c.x)/c.width-0.5,n+=(bv[1]-c.y)/c.height-0.5,a*=bv[2]/c.width,x*=bv[2]/c.height);
d='src="'+aj.global.VMLRadialGradientURL+'" size="'+a+","+x+'" origin="0.5,0.5" position="'+k+","+n+'" color2="'+j+'" ';
o()
};
f.added?bt():f.onAdd=bt;
bt=b
}}else{bt=s
}}else{if(i.test(bR)&&bz.tagName!=="IMG"){h=bs(bR),L=["<",e,' opacity="',h.get("a"),'"/>'],am(this.prepVML(L),null,null,bz),bt=h.get("rgb")
}else{bt=bz.getElementsByTagName(e);
if(bt.length){bt[0].opacity=1,bt[0].type="solid"
}bt=bR
}}return bt
},prepVML:function(a){var b=this.isIE8,a=a.join("");
b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");
return a
},text:t.prototype.html,path:function(a){var b={coordsize:"10 10"};
a7(a)?b.d=a:a4(a)&&G(b,a);
return this.createElement("shape").attr(b)
},circle:function(a,b,c){var d=this.symbol("circle");
if(a4(a)){c=a.r,b=a.y,a=a.x
}d.isCircle=!0;
d.r=c;
return d.attr({x:a,y:b})
},g:function(a){var b;
a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});
return this.createElement(a5).attr(b)
},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});
arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});
return f
},createElement:function(a){return a==="rect"?this.symbol(a):t.prototype.createElement.call(this,a)
},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;
aJ(a,{flip:"x",left:a8(d.width)-(e?a8(e.top):1),top:a8(d.height)-(e?a8(e.left):1),rotation:-90});
M(a.childNodes,function(f){c.invertChild(f,a)
})
},symbols:{arc:function(e,f,g,h,i){var j=i.start,k=i.end,a=i.r||g||h,g=i.innerR,h=aH(j),b=A(j),c=aH(k),d=A(k);
if(k-j===0){return["x"]
}j=["wa",e-a,f-a,e+a,f+a,e+a*h,f+a*b,e+a*c,f+a*d];
i.open&&!g&&j.push("e","M",e,f);
j.push("at",e-g,f-g,e+g,f+g,e+g*c,f+g*d,e+g*h,f+g*b,"x","e");
j.isArc=!0;
return j
},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);
e&&e.isCircle&&(a-=c/2,b-=d/2);
return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]
},rect:function(a,b,c,d,e){return t.prototype.symbols[!av(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)
}}};
aY.VMLRenderer=aB=function(){this.init.apply(this,arguments)
};
aB.prototype=ak(t.prototype,ad);
Z=aB
}t.prototype.measureSpanWidth=function(a,b){var c=E.createElement("span"),d;
d=E.createTextNode(a);
c.appendChild(d);
aJ(c,b);
this.box.appendChild(c);
d=c.offsetWidth;
bf(c);
return d
};
var bq;
if(bL){aY.CanVGRenderer=aB=function(){F="http://www.w3.org/1999/xhtml"
},aB.prototype.symbols={},bq=function(){function a(){var c=b.length,d;
for(d=0;
d<c;
d++){b[d]()
}b=[]
}var b=[];
return{push:function(c,d){b.length===0&&bb(d,a);
b.push(c)
}}
}(),Z=aB
}bO.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.names,g=this.pos,h=b.labels,i=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/i.length||!d&&(c.margin[3]||c.chartWidth*0.33),j=g===i[0],k=g===i[i.length-1],l,f=e?bj(e[g],f[g],g):g,e=this.label,n=i.info;
a.isDatetimeAxis&&n&&(l=b.dateTimeLabelFormats[n.higherRanks[g]||n.unitName]);
this.isFirst=j;
this.isLast=k;
b=a.labelFormatter.call({axis:a,chart:c,isFirst:j,isLast:k,dateTimeLabelFormat:l,value:a.isLog?P(bE(f)):f});
g=d&&{width:Q(1,y(d-2*(h.padding||10)))+"px"};
g=G(g,h.style);
if(av(e)){e&&e.attr({text:b}).css(g)
}else{l={align:a.labelAlign};
if(aw(h.rotation)){l.rotation=h.rotation
}if(d&&h.ellipsis){l._clipHeight=a.len/i.length
}this.label=av(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(l).css(g).add(a.labelGroup):null
}},getLabelSize:function(){var a=this.label,b=this.axis;
return a?a.getBBox()[b.horiz?"height":"width"]:0
},getLabelSides:function(){var a=this.label.getBBox(),b=this.axis,c=b.horiz,d=b.options.labels,a=c?a.width:a.height,b=c?d.x-a*{left:0,center:0.5,right:1}[b.labelAlign]:0;
return[b,c?a+b:a]
},handleOverflow:function(f,g){var h=!0,i=this.axis,j=this.isFirst,k=this.isLast,l=i.horiz?g.x:g.y,n=i.reversed,o=i.tickPositions,s=this.getLabelSides(),a=s[0],s=s[1],b,d,c,e=this.label.line||0;
b=i.labelEdge;
d=i.justifyLabels&&(j||k);
b[e]===aC||l+a>b[e]?b[e]=l+s:d||(h=!1);
if(d){b=(d=i.justifyToPlot)?i.pos:0;
d=d?b+i.len:i.chart.chartWidth;
do{f+=j?1:-1,c=i.ticks[o[f]]
}while(o[f]&&(!c||c.label.line!==e));
i=c&&c.label.xy&&c.label.xy.x+c.getLabelSides()[j?0:1];
j&&!n||k&&n?l+a<b&&(l=b-a,c&&l+s>i&&(h=!1)):l+s>d&&(l=d-s,c&&l+a<i&&(h=!1));
g.x=l
}return h
},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;
return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}
},getLabelPosition:function(e,f,g,h,i,j,k,l){var n=this.axis,o=n.transA,a=n.reversed,b=n.staggerLines,d=n.chart.renderer.fontMetrics(i.style.fontSize).b,c=i.rotation,e=e+i.x-(j&&h?j*o*(a?-1:1):0),f=f+i.y-(j&&!h?j*o*(a?1:-1):0);
c&&n.side===2&&(f-=d-d*aH(c*aL));
!av(i.y)&&!c&&(f+=d-g.getBBox().height/2);
if(b){g.line=k/(l||1)%b,f+=g.line*(n.labelOffset/b)
}return{x:e,y:f}
},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)
},render:function(d,e,f){var bw=this.axis,h=bw.options,by=bw.chart.renderer,j=bw.horiz,x=this.type,a=this.label,b=this.pos,k=h.labels,l=this.gridLine,s=x?x+"Grid":"grid",bz=x?x+"Tick":"tick",J=h[s+"LineWidth"],B=h[s+"LineColor"],c=h[s+"LineDashStyle"],n=h[bz+"Length"],s=h[bz+"Width"]||0,i=h[bz+"Color"],L=h[bz+"Position"],bz=this.mark,g=k.step,bx=!0,o=bw.tickmarkOffset,bt=this.getPosition(j,b,o,e),bv=bt.x,bt=bt.y,bu=j&&bv===bw.pos+bw.len||!j&&bt===bw.pos?-1:1;
this.isActive=!0;
if(J){b=bw.getPlotLinePath(b+o,J*bu,e,!0);
if(l===aC){l={stroke:B,"stroke-width":J};
if(c){l.dashstyle=c
}if(!x){l.zIndex=1
}if(e){l.opacity=0
}this.gridLine=l=J?by.path(b).attr(l).add(bw.gridGroup):null
}if(!e&&l&&b){l[this.isNew?"attr":"animate"]({d:b,opacity:f})
}}if(s&&n){L==="inside"&&(n=-n),bw.opposite&&(n=-n),x=this.getMarkPath(bv,bt,n,s*bu,j,by),bz?bz.animate({d:x,opacity:f}):this.mark=by.path(x).attr({stroke:i,"stroke-width":s,opacity:f}).add(bw.axisGroup)
}if(a&&!isNaN(bv)){a.xy=bt=this.getLabelPosition(bv,bt,a,j,k,o,d,g),this.isFirst&&!this.isLast&&!bj(h.showFirstLabel,1)||this.isLast&&!this.isFirst&&!bj(h.showLastLabel,1)?bx=!1:!bw.isRadial&&!k.step&&!k.rotation&&!e&&f!==0&&(bx=this.handleOverflow(d,bt)),g&&d%g&&(bx=!1),bx&&!isNaN(bt.y)?(bt.opacity=f,a[this.isNew?"attr":"animate"](bt),this.isNew=!1):a.attr("y",-9999)
}},destroy:function(){al(this,this.axis)
}};
aY.PlotLineOrBand=function(a,b){this.axis=a;
if(b){this.options=b,this.id=b.id
}};
aY.PlotLineOrBand.prototype={render:function(){var bu=this,g=bu.axis,L=g.horiz,J=(g.pointRange||0)/2,k=bu.options,B=k.label,a=bu.label,b=k.width,l=k.to,e=k.from,s=av(e)&&av(l),c=k.value,x=k.dashStyle,i=bu.svgElem,o=[],bt,d=k.color,h=k.zIndex,f=k.events,j={},n=g.chart.renderer;
g.isLog&&(e=ai(e),l=ai(l),c=ai(c));
if(b){if(o=g.getPlotLinePath(c,b),j={stroke:d,"stroke-width":b},x){j.dashstyle=x
}}else{if(s){e=Q(e,g.min-J);
l=bl(l,g.max+J);
o=g.getPlotBandPath(e,l,k);
if(d){j.fill=d
}if(k.borderWidth){j.stroke=k.borderColor,j["stroke-width"]=k.borderWidth
}}else{return
}}if(av(h)){j.zIndex=h
}if(i){if(o){i.animate({d:o},null,i.onGetPath)
}else{if(i.hide(),i.onGetPath=function(){i.show()
},a){bu.label=a=a.destroy()
}}}else{if(o&&o.length&&(bu.svgElem=i=n.path(o).attr(j).add(),f)){for(bt in J=function(bv){i.on(bv,function(bw){f[bv].apply(bu,[bw])
})
},f){J(bt)
}}}if(B&&av(B.text)&&o&&o.length&&g.width>0&&g.height>0){B=ak({align:L&&s&&"center",x:L?!s&&4:10,verticalAlign:!L&&s&&"middle",y:L?s?16:10:s?6:-4,rotation:L&&!s&&90},B);
if(!a){j={align:B.textAlign||B.align,rotation:B.rotation};
if(av(h)){j.zIndex=h
}bu.label=a=n.text(B.text,0,0,B.useHTML).attr(j).css(B.style).add()
}g=[o[1],o[4],bj(o[6],o[1])];
o=[o[2],o[5],bj(o[7],o[2])];
L=D(g);
s=D(o);
a.align(B,!1,{x:L,y:s,width:bK(g)-L,height:bK(o)-s});
a.show()
}else{a&&a.hide()
}return bu
},destroy:function(){bD(this.axis.plotLinesAndBands,this);
delete this.axis;
al(this)
}};
I.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:ag,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return S(this.total,-1)
},style:ag.style}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:20},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;
this.horiz=a.inverted?!c:c;
this.coll=(this.isXAxis=c)?"xAxis":"yAxis";
this.opposite=b.opposite;
this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);
this.setOptions(b);
var d=this.options,e=d.type;
this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;
this.userOptions=b;
this.minPixelPadding=0;
this.chart=a;
this.reversed=d.reversed;
this.zoomEnabled=d.zoomEnabled!==!1;
this.categories=d.categories||e==="category";
this.names=[];
this.isLog=e==="logarithmic";
this.isDatetimeAxis=e==="datetime";
this.isLinked=av(d.linkedTo);
this.tickmarkOffset=this.categories&&d.tickmarkPlacement==="between"?0.5:0;
this.ticks={};
this.labelEdge=[];
this.minorTicks={};
this.plotLinesAndBands=[];
this.alternateBands={};
this.len=0;
this.minRange=this.userMinRange=d.minRange||d.maxZoom;
this.range=d.range;
this.offset=d.offset||0;
this.stacks={};
this.oldStacks={};
this.min=this.max=null;
this.crosshair=bj(d.crosshair,aI(a.options.tooltip.crosshairs)[c?0:1],!1);
var f,d=this.options.events;
bI(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));
this.series=this.series||[];
if(a.inverted&&c&&this.reversed===aC){this.reversed=!0
}this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;
for(f in d){u(this,f,d[f])
}if(this.isLog){this.val2lin=ai,this.lin2val=bE
}},setOptions:function(a){this.options=ak(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],ak(aj[this.coll],a))
},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=aj.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;
if(h){g=ar(h,this)
}else{if(c){g=b
}else{if(d){g=H(d,b)
}else{if(f&&a>=1000){for(;
f--&&g===aC;
){c=Math.pow(1000,f+1),a>=c&&e[f]!==null&&(g=S(b/c,-1)+e[f])
}}}}}g===aC&&(g=bB(b)>=10000?S(b,0):S(b,-1,aC,""));
return g
},getSeriesExtremes:function(){var a=this,b=a.chart;
a.hasVisibleSeries=!1;
a.dataMin=a.dataMax=null;
a.buildStacks&&a.buildStacks();
M(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;
d=c.options.threshold;
var e;
a.hasVisibleSeries=!0;
a.isLog&&d<=0&&(d=null);
if(a.isXAxis){if(d=c.xData,d.length){a.dataMin=bl(bj(a.dataMin,d[0]),D(d)),a.dataMax=Q(bj(a.dataMax,d[0]),bK(d))
}}else{c.getExtremes();
e=c.dataMax;
c=c.dataMin;
if(av(c)&&av(e)){a.dataMin=bl(bj(a.dataMin,c),c),a.dataMax=Q(bj(a.dataMax,e),e)
}if(av(d)){if(a.dataMin>=d){a.dataMin=d,a.ignoreMinPadding=!0
}else{if(a.dataMax<d){a.dataMax=d,a.ignoreMaxPadding=!0
}}}}}})
},translate:function(a,b,c,d,e,f){var g=1,h=0,i=d?this.oldTransA:this.transA,d=d?this.oldMin:this.min,j=this.minPixelPadding,e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;
if(!i){i=this.transA
}if(c){g*=-1,h=this.len
}this.reversed&&(g*=-1,h-=g*(this.sector||this.len));
b?(a=a*g+h,a-=j,a=a/i+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),f==="between"&&(f=0.5),a=g*(a-d)*i+h+g*j+(aw(f)?i*f*this.pointRange:0));
return a
},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)
},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)
},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,n;
i=this.transB;
e=bj(e,this.translate(a,null,null,c));
a=c=y(e+i);
i=j=y(k-e-i);
if(isNaN(e)){n=!0
}else{if(this.horiz){if(i=h,j=k-this.bottom,a<g||a>g+this.width){n=!0
}}else{if(a=g,c=l-this.right,i<h||i>h+this.height){n=!0
}}}return n&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)
},getLinearTickPositions:function(a,b,c){var d,e=P(bP(b/a)*a),f=P(K(c/a)*a),g=[];
if(b===c&&aw(b)){return[b]
}for(b=e;
b<=f;
){g.push(b);
b=P(b+a);
if(b===d){break
}d=b
}return g
},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e;
if(this.isLog){e=b.length;
for(a=1;
a<e;
a++){d=d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0))
}}else{if(this.isDatetimeAxis&&a.minorTickInterval==="auto"){d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),this.min,this.max,a.startOfWeek)),d[0]<this.min&&d.shift()
}else{for(b=this.min+(b[0]-this.min)%c;
b<=this.max;
b+=c){d.push(b)
}}}return d
},adjustForMinRange:function(){var e=this.options,f=this.min,g=this.max,h,i=this.dataMax-this.dataMin>=this.minRange,j,k,a,b,c;
if(this.isXAxis&&this.minRange===aC&&!this.isLog){av(e.min)||av(e.max)?this.minRange=null:(M(this.series,function(l){b=l.xData;
for(k=c=l.xIncrement?1:b.length-1;
k>0;
k--){if(a=b[k]-b[k-1],j===aC||a<j){j=a
}}}),this.minRange=bl(j*5,this.dataMax-this.dataMin))
}if(g-f<this.minRange){var d=this.minRange;
h=(d-g+f)/2;
h=[f-h,bj(e.min,f-h)];
if(i){h[2]=this.dataMin
}f=bK(h);
g=[f+d,bj(e.max,f+d)];
if(i){g[2]=this.dataMax
}g=D(g);
g-f<d&&(h[0]=g-d,h[1]=bj(e.min,g-d),f=bK(h))
}this.min=f;
this.max=g
},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA;
if(b.isXAxis||i||d){h?(f=h.minPointOffset,g=h.pointRangePadding):M(b.series,function(k){var l=i?1:b.isXAxis?k.pointRange:b.axisPointRange||0,n=k.options.pointPlacement,o=k.closestPointRange;
l>c&&(l=0);
d=Q(d,l);
f=Q(f,af(n)?0:l/2);
g=Q(g,n==="on"?0:l);
!k.noSharedTooltip&&av(o)&&(e=av(e)?bl(e,o):o)
}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=bl(d,c),b.closestPointRange=e
}if(a){b.oldTransA=j
}b.translationSlope=b.transA=j=b.len/(c+g||1);
b.transB=b.horiz?b.left:b.bottom;
b.minPixelPadding=j*f
},setTickPositions:function(h){var i=this,j=i.chart,k=i.options,l=i.isLog,n=i.isDatetimeAxis,o=i.isXAxis,s=i.isLinked,x=i.options.tickPositioner,a=k.maxPadding,b=k.minPadding,c=k.tickInterval,e=k.minTickInterval,d=k.tickPixelInterval,f,g=i.categories;
s?(i.linkedParent=j[i.coll][k.linkedTo],j=i.linkedParent.getExtremes(),i.min=bj(j.min,j.dataMin),i.max=bj(j.max,j.dataMax),k.type!==i.linkedParent.options.type&&aD(11,1)):(i.min=bj(i.userMin,k.min,i.dataMin),i.max=bj(i.userMax,k.max,i.dataMax));
if(l){!h&&bl(i.min,bj(i.dataMin,i.min))<=0&&aD(10,1),i.min=P(ai(i.min)),i.max=P(ai(i.max))
}if(i.range&&av(i.max)){i.userMin=i.min=Q(i.min,i.max-i.range),i.userMax=i.max,i.range=null
}i.beforePadding&&i.beforePadding();
i.adjustForMinRange();
if(!g&&!i.axisPointRange&&!i.usePercentage&&!s&&av(i.min)&&av(i.max)&&(j=i.max-i.min)){if(!av(k.min)&&!av(i.userMin)&&b&&(i.dataMin<0||!i.ignoreMinPadding)){i.min-=j*b
}if(!av(k.max)&&!av(i.userMax)&&a&&(i.dataMax>0||!i.ignoreMaxPadding)){i.max+=j*a
}}if(aw(k.floor)){i.min=Q(i.min,k.floor)
}if(aw(k.ceiling)){i.max=bl(i.max,k.ceiling)
}i.min===i.max||i.min===void 0||i.max===void 0?i.tickInterval=1:s&&!c&&d===i.linkedParent.options.tickPixelInterval?i.tickInterval=i.linkedParent.tickInterval:(i.tickInterval=bj(c,g?1:(i.max-i.min)*d/Q(i.len,d)),!av(c)&&i.len<d&&!this.isRadial&&!this.isLog&&!g&&k.startOnTick&&k.endOnTick&&(f=!0,i.tickInterval/=4));
o&&!h&&M(i.series,function(B){B.processData(i.min!==i.oldMin||i.max!==i.oldMax)
});
i.setAxisTranslation(!0);
i.beforeSetTickPositions&&i.beforeSetTickPositions();
if(i.postProcessTickInterval){i.tickInterval=i.postProcessTickInterval(i.tickInterval)
}if(i.pointRange){i.tickInterval=Q(i.pointRange,i.tickInterval)
}if(!c&&i.tickInterval<e){i.tickInterval=e
}if(!n&&!l&&!c){i.tickInterval=w(i.tickInterval,null,aU(i.tickInterval),k)
}i.minorTickInterval=k.minorTickInterval==="auto"&&i.tickInterval?i.tickInterval/5:k.minorTickInterval;
i.tickPositions=h=k.tickPositions?[].concat(k.tickPositions):x&&x.apply(i,[i.min,i.max]);
if(!h){!i.ordinalPositions&&(i.max-i.min)/i.tickInterval>Q(2*i.len,200)&&aD(19,!0),h=n?i.getTimeTicks(i.normalizeTimeTickInterval(i.tickInterval,k.units),i.min,i.max,k.startOfWeek,i.ordinalPositions,i.closestPointRange,!0):l?i.getLogTickPositions(i.tickInterval,i.min,i.max):i.getLinearTickPositions(i.tickInterval,i.min,i.max),f&&h.splice(1,h.length-2),i.tickPositions=h
}if(!s){l=h[0],n=h[h.length-1],s=i.minPointOffset||0,k.startOnTick?i.min=l:i.min-s>l&&h.shift(),k.endOnTick?i.max=n:i.max+s<n&&h.pop(),h.length===1&&(k=bB(i.max)>10000000000000?1:0.001,i.min-=k,i.max+=k)
}},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=[this.coll,this.pos,this.len].join("-");
if(!this.isLinked&&!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&this.options.alignTicks!==!1){b[d]=c.length
}a.maxTicks=b
},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;
if(c&&c[a]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==!1&&this.min!==aC){var d=this.tickAmount,e=b.length;
this.tickAmount=a=c[a];
if(e<a){for(;
b.length<a;
){b.push(P(b[b.length-1]+this.tickInterval))
}this.transA*=(e-1)/(a-1);
this.max=b[b.length-1]
}if(av(d)&&a!==d){this.isDirty=!0
}}},setScale:function(){var a=this.stacks,b,c,d,e;
this.oldMin=this.min;
this.oldMax=this.max;
this.oldAxisLength=this.len;
this.setAxisSize();
e=this.len!==this.oldAxisLength;
M(this.series,function(f){if(f.isDirtyData||f.isDirty||f.xAxis.isDirty){d=!0
}});
if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis){for(b in a){for(c in a[b]){a[b][c].total=null,a[b][c].cum=0
}}}this.forceRedraw=!1;
this.getSeriesExtremes();
this.setTickPositions();
this.oldUserMin=this.userMin;
this.oldUserMax=this.userMax;
if(!this.isDirty){this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax
}}else{if(!this.isXAxis){if(this.oldStacks){a=this.stacks=this.oldStacks
}for(b in a){for(c in a[b]){a[b][c].cum=a[b][c].total
}}}}this.setMaxTicks()
},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=bj(c,!0),e=G(e,{min:a,max:b});
aN(f,"setExtremes",e,function(){f.userMin=a;
f.userMax=b;
f.eventArgs=e;
f.isDirtyExtremes=!0;
c&&g.redraw(d)
})
},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;
this.allowZoomOutside||(av(c)&&a<=bl(c,bj(e.min,c))&&(a=aC),av(d)&&b>=Q(d,bj(e.max,d))&&(b=aC));
this.displayBtn=a!==aC||b!==aC;
this.setExtremes(a,b,!1,aC,{trigger:"zoom"});
return !0
},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=bj(b.width,a.plotWidth-c+(b.offsetRight||0)),f=bj(b.height,a.plotHeight),g=bj(b.top,a.plotTop),b=bj(b.left,a.plotLeft+c),c=/%$/;
c.test(f)&&(f=parseInt(f,10)/100*a.plotHeight);
c.test(g)&&(g=parseInt(g,10)/100*a.plotHeight+a.plotTop);
this.left=b;
this.top=g;
this.width=e;
this.height=f;
this.bottom=a.chartHeight-f-g;
this.right=a.chartWidth-e-b;
this.len=Q(d?e:f,0);
this.pos=d?b:g
},getExtremes:function(){var a=this.isLog;
return{min:a?P(bE(this.min)):this.min,max:a?P(bE(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}
},getThreshold:function(a){var b=this.isLog,c=b?bE(this.min):this.min,b=b?bE(this.max):this.max;
c>a||a===null?a=c:b<a&&(a=b);
return this.translate(a,0,1,0,1)
},autoLabelAlign:function(a){a=(bj(a,0)-this.side*90+720)%360;
return a>15&&a<165?"right":a>195&&a<345?"left":"center"
},getOffset:function(){var g=this,bt=g.chart,e=bt.renderer,J=g.options,h=g.tickPositions,bx=g.ticks,s=g.horiz,L=g.side,o=bt.inverted?[1,0,3,2][L]:L,b,bw=0,n,bv=0,by=J.title,bz=J.labels,c=0,d=bt.axisOffset,l=bt.clipOffset,a=[-1,1,1,-1][L],k,B=1,bR=bj(bz.maxStaggerLines,5),j,i,bu,x,f=L===2?e.fontMetrics(bz.style.fontSize).b:0;
g.hasData=b=g.hasVisibleSeries||av(g.min)&&av(g.max)&&!!h;
g.showAxis=bt=b||bj(J.showEmpty,!0);
g.staggerLines=g.horiz&&bz.staggerLines;
if(!g.axisGroup){g.gridGroup=e.g("grid").attr({zIndex:J.gridZIndex||1}).add(),g.axisGroup=e.g("axis").attr({zIndex:J.zIndex||2}).add(),g.labelGroup=e.g("axis-labels").attr({zIndex:bz.zIndex||7}).addClass("highcharts-"+g.coll.toLowerCase()+"-labels").add()
}if(b||g.isLinked){g.labelAlign=bj(bz.align||g.autoLabelAlign(bz.rotation));
M(h,function(bS){bx[bS]?bx[bS].addLabel():bx[bS]=new bO(g,bS)
});
if(g.horiz&&!g.staggerLines&&bR&&!bz.rotation){for(k=g.reversed?[].concat(h).reverse():h;
B<bR;
){b=[];
j=!1;
for(bz=0;
bz<k.length;
bz++){i=k[bz],bu=(bu=bx[i].label&&bx[i].label.getBBox())?bu.width:0,x=bz%B,bu&&(i=g.translate(i),b[x]!==aC&&i<b[x]&&(j=!0),b[x]=i+bu)
}if(j){B++
}else{break
}}if(B>1){g.staggerLines=B
}}M(h,function(bS){if(L===0||L===2||{1:"left",3:"right"}[L]===g.labelAlign){c=Q(bx[bS].getLabelSize(),c)
}});
if(g.staggerLines){c*=g.staggerLines,g.labelOffset=c
}}else{for(k in bx){bx[k].destroy(),delete bx[k]
}}if(by&&by.text&&by.enabled!==!1){if(!g.axisTitle){g.axisTitle=e.text(by.text,0,0,by.useHTML).attr({zIndex:7,rotation:by.rotation||0,align:by.textAlign||{low:"left",middle:"center",high:"right"}[by.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(by.style).add(g.axisGroup),g.axisTitle.isNew=!0
}if(bt){bw=g.axisTitle.getBBox()[s?"height":"width"],bv=bj(by.margin,s?5:10),n=by.offset
}g.axisTitle[bt?"show":"hide"]()
}g.offset=a*bj(J.offset,d[L]);
g.axisTitleMargin=bj(n,c+bv+(c&&a*J.labels[s?"y":"x"]-f));
d[L]=Q(d[L],g.axisTitleMargin+bw+a*g.offset);
l[o]=Q(l[o],bP(J.lineWidth/2)*2)
},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;
c&&(a*=-1);
return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)
},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=a8(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);
return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}
},render:function(){var n=this,bx=n.horiz,bw=n.reversed,a=n.chart,l=a.renderer,b=n.options,d=n.isLog,e=n.isLinked,J=n.tickPositions,g,bt=n.axisTitle,j=n.ticks,h=n.minorTicks,s=n.alternateBands,L=b.stackLabels,bv=b.alternateGridColor,f=n.tickmarkOffset,bu=b.lineWidth,k=a.hasRendered&&av(n.oldMin)&&!isNaN(n.oldMin),o=n.hasData,by=n.showAxis,i,x=b.labels.overflow,c=n.justifyLabels=bx&&x!==!1,B;
n.labelEdge.length=0;
n.justifyToPlot=x==="justify";
M([j,h,s],function(bR){for(var bz in bR){bR[bz].isActive=!1
}});
if(o||e){if(n.minorTickInterval&&!n.categories&&M(n.getMinorTickPositions(),function(bz){h[bz]||(h[bz]=new bO(n,bz,"minor"));
k&&h[bz].isNew&&h[bz].render(null,!0);
h[bz].render(null,!1,1)
}),J.length&&(g=J.slice(),(bx&&bw||!bx&&!bw)&&g.reverse(),c&&(g=g.slice(1).concat([g[0]])),M(g,function(bR,bz){c&&(bz=bz===g.length-1?0:bz+1);
if(!e||bR>=n.min&&bR<=n.max){j[bR]||(j[bR]=new bO(n,bR)),k&&j[bR].isNew&&j[bR].render(bz,!0,0.1),j[bR].render(bz,!1,1)
}}),f&&n.min===0&&(j[-1]||(j[-1]=new bO(n,-1,null,!0)),j[-1].render(-1))),bv&&M(J,function(bR,bz){if(bz%2===0&&bR<n.max){s[bR]||(s[bR]=new aY.PlotLineOrBand(n)),i=bR+f,B=J[bz+1]!==aC?J[bz+1]+f:n.max,s[bR].options={from:d?bE(i):i,to:d?bE(B):B,color:bv},s[bR].render(),s[bR].isActive=!0
}}),!n._addedPlotLB){M((b.plotLines||[]).concat(b.plotBands||[]),function(bz){n.addPlotBandOrLine(bz)
}),n._addedPlotLB=!0
}}M([j,h,s],function(bT){var bU,bV,bz=[],bR=R?R.duration||500:0,bS=function(){for(bV=bz.length;
bV--;
){bT[bz[bV]]&&!bT[bz[bV]].isActive&&(bT[bz[bV]].destroy(),delete bT[bz[bV]])
}};
for(bU in bT){if(!bT[bU].isActive){bT[bU].render(bU,!1,0),bT[bU].isActive=!1,bz.push(bU)
}}bT===s||!a.hasRendered||!bR?bS():bR&&setTimeout(bS,bR)
});
if(bu){bx=n.getLinePath(bu),n.axisLine?n.axisLine.animate({d:bx}):n.axisLine=l.path(bx).attr({stroke:b.lineColor,"stroke-width":bu,zIndex:7}).add(n.axisGroup),n.axisLine[by?"show":"hide"]()
}if(bt&&by){bt[bt.isNew?"attr":"animate"](n.getTitlePosition()),bt.isNew=!1
}L&&L.enabled&&n.renderStackTotals();
n.isDirty=!1
},redraw:function(){var a=this.chart.pointer;
a&&a.reset(!0);
this.render();
M(this.plotLinesAndBands,function(b){b.render()
});
M(this.series,function(b){b.isDirty=!0
})
},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;
a||N(b);
for(d in c){al(c[d]),c[d]=null
}M([b.ticks,b.minorTicks,b.alternateBands],function(f){al(f)
});
for(a=e.length;
a--;
){e[a].destroy()
}M("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(f){b[f]&&(b[f]=b[f].destroy())
});
this.cross&&this.cross.destroy()
},drawCrosshair:function(a,b){if(this.crosshair){if((av(b)||!bj(this.crosshair.snap,!0))===!1){this.hideCrosshair()
}else{var c,d=this.crosshair,e=d.animation;
bj(d.snap,!0)?av(b)&&(c=this.chart.inverted!=this.horiz?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos;
c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:bj(b.stackY,b.y)):this.getPlotLinePath(null,null,null,null,c);
if(c===null){this.hideCrosshair()
}else{if(this.cross){this.cross.attr({visibility:"visible"})[e?"animate":"attr"]({d:c},e)
}else{e={"stroke-width":d.width||1,stroke:d.color||"#C0C0C0",zIndex:d.zIndex||2};
if(d.dashStyle){e.dashstyle=d.dashStyle
}this.cross=this.chart.renderer.path(c).attr(e).add()
}}}}},hideCrosshair:function(){this.cross&&this.cross.hide()
}};
G(I.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);
d&&c?d.push(c[4],c[5],c[1],c[2]):d=null;
return d
},addPlotBand:function(a){this.addPlotBandOrLine(a,"plotBands")
},addPlotLine:function(a){this.addPlotBandOrLine(a,"plotLines")
},addPlotBandOrLine:function(a,b){var c=(new aY.PlotLineOrBand(this,a)).render(),d=this.userOptions;
c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));
return c
},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;
e--;
){b[e].id===a&&b[e].destroy()
}M([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(f){for(e=f.length;
e--;
){f[e].id===a&&bD(f,f[e])
}})
}});
I.prototype.getTimeTicks=function(e,f,g,h){var i=[],j={},k=aj.global.useUTC,l,n=new Date(f-bd),o=e.unitRange,a=e.count;
if(av(f)){o>=aA.second&&(n.setMilliseconds(0),n.setSeconds(o>=aA.minute?0:a*bP(n.getSeconds()/a)));
if(o>=aA.minute){n[a3](o>=aA.hour?0:a*bP(n[au]()/a))
}if(o>=aA.hour){n[a0](o>=aA.day?0:a*bP(n[ae]()/a))
}if(o>=aA.day){n[X](o>=aA.month?1:a*bP(n[v]()/a))
}o>=aA.month&&(n[aQ](o>=aA.year?0:a*bP(n[ax]()/a)),l=n[bA]());
o>=aA.year&&(l-=l%a,n[m](l));
if(o===aA.week){n[X](n[v]()-n[q]()+bj(h,1))
}f=1;
bd&&(n=new Date(n.getTime()+bd));
l=n[bA]();
for(var h=n.getTime(),b=n[ax](),d=n[v](),c=k?bd:(86400000+n.getTimezoneOffset()*60000)%86400000;
h<g;
){i.push(h),o===aA.year?h=ap(l+f*a,0):o===aA.month?h=ap(l,b+f*a):!k&&(o===aA.day||o===aA.week)?h=ap(l,b,d+f*a*(o===aA.day?1:7)):h+=o*a,f++
}i.push(h);
M(U(i,function(s){return o<=aA.hour&&s%aA.day===c
}),function(s){j[s]="day"
})
}i.info=G(e,{higherRanks:j,totalRange:o*a});
return i
};
I.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=aA[d[0]],f=d[1],g;
for(g=0;
g<c.length;
g++){if(d=c[g],e=aA[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+aA[c[g+1][0]])/2){break
}}e===aA.year&&a<5*e&&(f=[1,2,5]);
c=w(a/e,f,d[0]==="year"?Q(aU(a/e),1):1);
return{unitRange:e,count:c,unitName:d[0]}
};
I.prototype.getLogTickPositions=function(c,d,e,f){var g=this.options,h=this.len,i=[];
if(!f){this._minorAutoInterval=null
}if(c>=0.5){c=y(c),i=this.getLinearTickPositions(c,d,e)
}else{if(c>=0.08){for(var h=bP(d),j,k,l,a,b,g=c>0.3?[1,2,4]:c>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];
h<e+1&&!b;
h++){k=g.length;
for(j=0;
j<k&&!b;
j++){l=ai(bE(h)*g[j]),l>d&&(!f||a<=e)&&i.push(a),a>e&&(b=!0),a=l
}}}else{if(d=bE(d),e=bE(e),c=g[f?"minorTickInterval":"tickInterval"],c=bj(c==="auto"?null:c,this._minorAutoInterval,(e-d)*(g.tickPixelInterval/(f?5:1))/((f?h/this.tickPositions.length:h)||1)),c=w(c,null,aU(c)),i=r(this.getLinearTickPositions(c,d,e),ai),!f){this._minorAutoInterval=c/5
}}}if(!f){this.tickInterval=c
}return i
};
var aq=aY.Tooltip=function(){this.init.apply(this,arguments)
};
aq.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=a8(d.padding);
this.chart=a;
this.options=b;
this.crosshairs=[];
this.now={x:0,y:0};
this.isHidden=!0;
this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});
bL||this.label.shadow(b.shadow);
this.shared=b.shared
},destroy:function(){if(this.label){this.label=this.label.destroy()
}clearTimeout(this.hideTimer);
clearTimeout(this.tooltipTimeout)
},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden,h=e.followPointer||e.len>1;
G(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?aC:g?(2*f.anchorX+c)/3:c,anchorY:h?aC:g?(f.anchorY+d)/2:d});
e.label.attr(f);
if(g&&(bB(a-f.x)>1||bB(b-f.y)>1)){clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)
},32)
}},hide:function(){var a=this,b;
clearTimeout(this.hideTimer);
if(!this.isHidden){b=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){a.label.fadeOut();
a.isHidden=!0
},bj(this.options.hideDelay,500)),b&&M(b,function(c){c.setState()
}),this.chart.hoverPoints=null
}},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,i,a=aI(a);
c=a[0].tooltipPos;
this.followPointer&&b&&(b.chartX===aC&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);
c||(M(a,function(j){i=j.series.yAxis;
g+=j.plotX;
h+=(j.plotLow?(j.plotLow+j.plotHigh)/2:j.plotY)+(!e&&i?i.top-f:0)
}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-g:h]);
return r(c,y)
},getPosition:function(e,f,g){var h=this.chart,i=this.distance,j={},k,l=["y",h.chartHeight,f,g.plotY+h.plotTop],n=["x",h.chartWidth,e,g.plotX+h.plotLeft],o=g.ttBelow||h.inverted&&!g.negative||!h.inverted&&g.negative,a=function(L,s,x,B){var J=x<B-i,s=B+i+x<s,x=B-i-x;
B+=i;
if(o&&s){j[L]=B
}else{if(!o&&J){j[L]=x
}else{if(J){j[L]=x
}else{if(s){j[L]=B
}else{return !1
}}}}},b=function(s,x,B,J){if(J<i||J>x-i){return !1
}else{j[s]=J<B/2?1:J>x-B/2?x-B-2:J-B/2
}},d=function(s){var x=l;
l=n;
n=x;
k=s
},c=function(){a.apply(0,l)!==!1?b.apply(0,n)===!1&&!k&&(d(!0),c()):k?j.x=j.y=0:(d(!0),c())
};
(h.inverted||this.len>1)&&d();
c();
return j
},defaultFormatter:function(a){var b=this.points||aI(this),c=b[0].series,d;
d=[a.tooltipHeaderFormatter(b[0])];
M(b,function(e){c=e.series;
d.push(c.tooltipFormatter&&c.tooltipFormatter(e)||e.point.tooltipFormatter(c.tooltipOptions.pointFormat))
});
d.push(a.options.footerFormat||"");
return d.join("")
},refresh:function(c,d){var e=this.chart,f=this.label,g=this.options,h,i,j={},k,l=[];
k=g.formatter||this.defaultFormatter;
var j=e.hoverPoints,a,b=this.shared;
clearTimeout(this.hideTimer);
this.followPointer=aI(c)[0].series.tooltipOptions.followPointer;
i=this.getAnchor(c,d);
h=i[0];
i=i[1];
b&&(!c.series||!c.series.noSharedTooltip)?(e.hoverPoints=c,j&&M(j,function(n){n.setState()
}),M(c,function(n){n.setState("hover");
l.push(n.getLabelConfig())
}),j={x:c[0].category,y:c[0].y},j.points=l,this.len=l.length,c=c[0]):j=c.getLabelConfig();
k=k.call(j,this);
j=c.series;
this.distance=bj(j.tooltipOptions.distance,16);
k===!1?this.hide():(this.isHidden&&(aM(f),f.attr("opacity",1).show()),f.attr({text:k}),a=g.borderColor||c.color||j.color||"#606060",f.attr({stroke:a}),this.updatePosition({plotX:h,plotY:i,negative:c.negative,ttBelow:c.ttBelow}),this.isHidden=!1);
aN(e,"tooltipRefresh",{text:k,x:h+e.plotLeft,y:i+e.plotTop,borderColor:a})
},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);
this.move(y(c.x),y(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)
},tooltipHeaderFormatter:function(a){var b=a.series,c=b.tooltipOptions,d=c.dateTimeLabelFormats,e=c.xDateFormat,f=b.xAxis,g=f&&f.options.type==="datetime"&&aw(a.key),c=c.headerFormat,f=f&&f.closestPointRange,h;
if(g&&!e){if(f){for(h in aA){if(aA[h]>=f||aA[h]<=aA.day&&a.key%aA[h]>0){e=d[h];
break
}}}else{e=d.day
}e=e||d.year
}g&&e&&(c=c.replace("{point.key}","{point.key:"+e+"}"));
return ar(c,{point:a,series:b})
}};
var bF;
ao=E.documentElement.ontouchstart!==aC;
var aG=aY.Pointer=function(a,b){this.init(a,b)
};
aG.prototype={init:function(a,b){var c=b.chart,d=c.events,e=bL?"":c.zoomType,c=a.inverted,f;
this.options=b;
this.chart=a;
this.zoomX=f=/x/.test(e);
this.zoomY=e=/y/.test(e);
this.zoomHor=f&&!c||e&&c;
this.zoomVert=e&&!c||f&&c;
this.hasZoom=f||e;
this.runChartClick=d&&!!d.click;
this.pinchDown=[];
this.lastValidTouch={};
if(aY.Tooltip&&b.tooltip.enabled){a.tooltip=new aq(a,b.tooltip),this.followTouchMove=b.tooltip.followTouchMove
}this.setDOMEvents()
},normalize:function(a,b){var c,d,a=a||window.event,a=bc(a);
if(!a.target){a.target=a.srcElement
}d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;
if(!b){this.chartPosition=b=p(this.chart.container)
}d.pageX===aC?(c=Q(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);
return G(a,{chartX:y(c),chartY:y(d)})
},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};
M(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})
});
return b
},getIndex:function(a){var b=this.chart;
return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft
},runPointActions:function(c){var d=this.chart,e=d.series,f=d.tooltip,g,h,i=d.hoverPoint,j=d.hoverSeries,k,l,a=d.chartWidth,b=this.getIndex(c);
if(f&&this.options.tooltip.shared&&(!j||!j.noSharedTooltip)){h=[];
k=e.length;
for(l=0;
l<k;
l++){if(e[l].visible&&e[l].options.enableMouseTracking!==!1&&!e[l].noSharedTooltip&&e[l].singularTooltips!==!0&&e[l].tooltipPoints.length&&(g=e[l].tooltipPoints[b])&&g.series){g._dist=bB(b-g.clientX),a=bl(a,g._dist),h.push(g)
}}for(k=h.length;
k--;
){h[k]._dist>a&&h.splice(k,1)
}if(h.length&&h[0].clientX!==this.hoverX){f.refresh(h,c),this.hoverX=h[0].clientX
}}e=j&&j.tooltipOptions.followPointer;
if(j&&j.tracker&&!e){if((g=j.tooltipPoints[b])&&g!==i){g.onMouseOver(c)
}}else{f&&e&&!f.isHidden&&(j=f.getAnchor([{}],c),f.updatePosition({plotX:j[0],plotY:j[1]}))
}if(f&&!this._onDocumentMouseMove){this._onDocumentMouseMove=function(n){if(be[bF]){be[bF].pointer.onDocumentMouseMove(n)
}},u(E,"mousemove",this._onDocumentMouseMove)
}M(d.axes,function(n){n.drawCrosshair(c,bj(g,i))
})
},reset:function(a){var b=this.chart,c=b.hoverSeries,d=b.hoverPoint,e=b.tooltip,f=e&&e.shared?b.hoverPoints:d;
(a=a&&e&&f)&&aI(f)[0].plotX===aC&&(a=!1);
if(a){e.refresh(f),d&&d.setState(d.state,!0)
}else{if(d){d.onMouseOut()
}if(c){c.onMouseOut()
}e&&e.hide();
if(this._onDocumentMouseMove){N(E,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null
}M(b.axes,function(g){g.hideCrosshair()
});
this.hoverX=null
}},scaleGroups:function(a,b){var c=this.chart,d;
M(c.series,function(e){d=a||e.getPlotBox();
e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))
});
c.clipRect.attr(b||c.clipBox)
},dragStart:function(a){var b=this.chart;
b.mouseIsDown=a.type;
b.cancelClick=!1;
b.mouseDownX=this.mouseDownX=a.chartX;
b.mouseDownY=this.mouseDownY=a.chartY
},drag:function(e){var f=this.chart,g=f.options.chart,h=e.chartX,i=e.chartY,j=this.zoomHor,k=this.zoomVert,l=f.plotLeft,n=f.plotTop,o=f.plotWidth,a=f.plotHeight,b,d=this.mouseDownX,c=this.mouseDownY;
h<l?h=l:h>l+o&&(h=l+o);
i<n?i=n:i>n+a&&(i=n+a);
this.hasDragged=Math.sqrt(Math.pow(d-h,2)+Math.pow(c-i,2));
if(this.hasDragged>10){b=f.isInsidePlot(d-l,c-n);
if(f.hasCartesianSeries&&(this.zoomX||this.zoomY)&&b&&!this.selectionMarker){this.selectionMarker=f.renderer.rect(l,n,j?1:o,k?1:a,0).attr({fill:g.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add()
}this.selectionMarker&&j&&(h-=d,this.selectionMarker.attr({width:bB(h),x:(h>0?0:h)+d}));
this.selectionMarker&&k&&(h=i-c,this.selectionMarker.attr({height:bB(h),y:(h>0?0:h)+c}));
b&&!this.selectionMarker&&g.panning&&f.pan(e,g.panning)
}},drop:function(a){var b=this.chart,c=this.hasPinched;
if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},a=this.selectionMarker,e=a.attr?a.attr("x"):a.x,f=a.attr?a.attr("y"):a.y,g=a.attr?a.attr("width"):a.width,h=a.attr?a.attr("height"):a.height,i;
if(this.hasDragged||c){M(b.axes,function(l){if(l.zoomEnabled){var j=l.horiz,k=l.toValue(j?e:f),j=l.toValue(j?e+g:f+h);
!isNaN(k)&&!isNaN(j)&&(d[l.coll].push({axis:l,min:bl(k,j),max:Q(k,j)}),i=!0)
}}),i&&aN(b,"selection",d,function(j){b.zoom(G(j,c?{animation:!1}:null))
})
}this.selectionMarker=this.selectionMarker.destroy();
c&&this.scaleGroups()
}if(b){aJ(b.container,{cursor:b._cursor}),b.cancelClick=this.hasDragged>10,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]
}},onContainerMouseDown:function(a){a=this.normalize(a);
a.preventDefault&&a.preventDefault();
this.dragStart(a)
},onDocumentMouseUp:function(a){be[bF]&&be[bF].pointer.drop(a)
},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries,a=this.normalize(a,c);
c&&d&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()
},onContainerMouseLeave:function(){var a=be[bF];
if(a){a.pointer.reset(),a.pointer.chartPosition=null
}},onContainerMouseMove:function(a){var b=this.chart;
bF=b.index;
a=this.normalize(a);
b.mouseIsDown==="mousedown"&&this.drag(a);
(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)
},inClass:function(a,b){for(var c;
a;
){if(c=bM(a,"class")){if(c.indexOf(b)!==-1){return !0
}else{if(c.indexOf("highcharts-container")!==-1){return !1
}}}a=a.parentNode
}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;
if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b){b.onMouseOut()
}},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);
a.cancelBubble=!0;
b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(aN(c.series,"click",G(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(G(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&aN(b,"click",a)))
},setDOMEvents:function(){var a=this,b=a.chart.container;
b.onmousedown=function(c){a.onContainerMouseDown(c)
};
b.onmousemove=function(c){a.onContainerMouseMove(c)
};
b.onclick=function(c){a.onContainerClick(c)
};
u(b,"mouseleave",a.onContainerMouseLeave);
ac===1&&u(E,"mouseup",a.onDocumentMouseUp);
if(ao){b.ontouchstart=function(c){a.onContainerTouchStart(c)
},b.ontouchmove=function(c){a.onContainerTouchMove(c)
},ac===1&&u(E,"touchend",a.onDocumentTouchEnd)
}},destroy:function(){var a;
N(this.chart.container,"mouseleave",this.onContainerMouseLeave);
ac||(N(E,"mouseup",this.onDocumentMouseUp),N(E,"touchend",this.onDocumentTouchEnd));
clearInterval(this.tooltipTimeout);
for(a in this){this[a]=null
}}};
G(aY.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);
(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)
},pinchTranslateDirection:function(c,a,b,d,e,J,g,f){var bt=this.chart,j=c?"x":"y",bu=c?"X":"Y",bv="chart"+bu,h=c?"width":"height",s=bt["plot"+(c?"Left":"Top")],bw,n,bx=f||1,o=bt.inverted,B=bt.bounds[c?"h":"v"],L=a.length===1,x=a[0][bv],by=b[0][bv],i=!L&&a[1][bv],k=!L&&b[1][bv],l,b=function(){!L&&bB(x-i)>20&&(bx=f||bB(by-k)/bB(x-i));
n=(s-by)/bx+x;
bw=bt["plot"+(c?"Width":"Height")]/bx
};
b();
a=n;
a<B.min?(a=B.min,l=!0):a+bw>B.max&&(a=B.max-bw,l=!0);
l?(by-=0.8*(by-g[j][0]),L||(k-=0.8*(k-g[j][1])),b()):g[j]=[by,k];
o||(J[j]=n-s,J[h]=bw);
J=o?1/bx:bx;
e[h]=bw;
e[j]=a;
d[o?c?"scaleY":"scaleX":"scale"+bu]=bx;
d["translate"+bu]=J*s+(by-J*x)
},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=b.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,i=b.hasZoom,j=b.selectionMarker,k={},l=g===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||c.runChartClick),n={};
(i||e)&&!l&&a.preventDefault();
r(f,function(o){return b.normalize(o)
});
if(a.type==="touchstart"){M(f,function(o,s){d[s]={chartX:o.chartX,chartY:o.chartY}
}),h.x=[d[0].chartX,d[1]&&d[1].chartX],h.y=[d[0].chartY,d[1]&&d[1].chartY],M(c.axes,function(o){if(o.zoomEnabled){var s=c.bounds[o.horiz?"h":"v"],x=o.minPixelPadding,B=o.toPixels(o.dataMin),J=o.toPixels(o.dataMax),L=bl(B,J),B=Q(B,J);
s.min=bl(o.pos,L-x);
s.max=Q(o.pos+o.len,B+x)
}})
}else{if(d.length){if(!j){b.selectionMarker=j=G({destroy:a9},c.plotBox)
}b.pinchTranslate(d,f,k,j,n,h);
b.hasPinched=i;
b.scaleGroups(k,n);
!i&&e&&g===1&&this.runPointActions(b.normalize(a))
}}},onContainerTouchStart:function(a){var b=this.chart;
bF=b.index;
a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)?(this.runPointActions(a),this.pinch(a)):this.reset()):a.touches.length===2&&this.pinch(a)
},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)
},onDocumentTouchEnd:function(a){be[bF]&&be[bF].pointer.drop(a)
}});
if(bn.PointerEvent||bn.MSPointerEvent){var ay={},bk=!!bn.PointerEvent,aE=function(){var a,b=[];
b.item=function(c){return this[c]
};
for(a in ay){ay.hasOwnProperty(a)&&b.push({pageX:ay[a].pageX,pageY:ay[a].pageY,target:ay[a].target})
}return b
},bp=function(a,b,c,d){a=a.originalEvent||a;
if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&be[bF]){d(a),d=be[bF].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:a9,touches:aE()})
}};
G(aG.prototype,{onContainerPointerDown:function(a){bp(a,"onContainerTouchStart","touchstart",function(b){ay[b.pointerId]={pageX:b.pageX,pageY:b.pageY,target:b.currentTarget}
})
},onContainerPointerMove:function(a){bp(a,"onContainerTouchMove","touchmove",function(b){ay[b.pointerId]={pageX:b.pageX,pageY:b.pageY};
if(!ay[b.pointerId].target){ay[b.pointerId].target=b.currentTarget
}})
},onDocumentPointerUp:function(a){bp(a,"onContainerTouchEnd","touchend",function(b){delete ay[b.pointerId]
})
},batchMSEvents:function(a){a(this.chart.container,bk?"pointerdown":"MSPointerDown",this.onContainerPointerDown);
a(this.chart.container,bk?"pointermove":"MSPointerMove",this.onContainerPointerMove);
a(E,bk?"pointerup":"MSPointerUp",this.onDocumentPointerUp)
}});
aa(aG.prototype,"init",function(a,b,c){a.call(this,b,c);
(this.hasZoom||this.followTouchMove)&&aJ(b.container,{"-ms-touch-action":aO,"touch-action":aO})
});
aa(aG.prototype,"setDOMEvents",function(a){a.apply(this);
(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(u)
});
aa(aG.prototype,"destroy",function(a){this.batchMSEvents(N);
a.call(this)
})
}var ab=aY.Legend=function(a,b){this.init(a,b)
};
ab.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=bj(b.padding,8),f=b.itemMarginTop||0;
this.options=b;
if(b.enabled){c.baseline=a8(d.fontSize)+3+f,c.itemStyle=d,c.itemHiddenStyle=ak(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.symbolWidth=bj(b.symbolWidth,16),c.pages=[],c.render(),u(c.chart,"endResize",function(){c.positionCheckboxes()
})
}},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;
d&&d.css({fill:c,color:c});
e&&e.attr({stroke:h});
if(f){if(g&&f.isMarker){for(j in i.stroke=h,g=a.convertAttribs(g),g){d=g[j],d!==aC&&(i[j]=d)
}}f.attr(i)
}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;
a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);
if(f){f.x=e,f.y=d
}},destroyItem:function(a){var b=a.checkbox;
M(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())
});
b&&bf(a.checkbox)
},destroy:function(){var a=this.group,b=this.box;
if(b){this.box=b.destroy()
}if(a){this.group=a.destroy()
}},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;
if(b){c=b.translateY,M(this.allItems,function(e){var f=e.checkbox,g;
f&&(g=c+f.y+(a||0)+3,aJ(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":aO}))
})
}},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;
if(b.text){if(!this.title){this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)
}a=this.title.getBBox();
c=a.height;
this.offsetWidth=a.width;
this.contentGroup.attr({translateY:c})
}this.titleHeight=c
},renderItem:function(e){var x=this.chart,bt=x.renderer,J=this.options,L=J.layout==="horizontal",b=this.symbolWidth,l=J.symbolPadding,B=this.itemStyle,c=this.itemHiddenStyle,d=this.padding,h=L?bj(J.itemDistance,20):0,f=!J.rtl,j=J.width,g=J.itemMarginBottom||0,n=this.itemMarginTop,i=this.initialItemX,k=e.legendItem,o=e.series&&e.series.drawLegendSymbol?e.series:e,s=o.options,s=this.createCheckboxForItem&&s&&s.showCheckbox,a=J.useHTML;
if(!k){e.legendGroup=bt.g("legend-item").attr({zIndex:1}).add(this.scrollGroup),o.drawLegendSymbol(this,e),e.legendItem=k=bt.text(J.labelFormat?ar(J.labelFormat,e):J.labelFormatter.call(e),f?b+l:-l,this.baseline,a).css(ak(e.visible?B:c)).attr({align:f?"left":"right",zIndex:2}).add(e.legendGroup),this.setItemEvents&&this.setItemEvents(e,k,a,B,c),this.colorizeItem(e,e.visible),s&&this.createCheckboxForItem(e)
}bt=k.getBBox();
b=e.checkboxOffset=J.itemWidth||e.legendItemWidth||b+l+bt.width+h+(s?20:0);
this.itemHeight=l=y(e.legendItemHeight||bt.height);
if(L&&this.itemX-i+b>(j||x.chartWidth-2*d-i-J.x)){this.itemX=i,this.itemY+=n+this.lastLineHeight+g,this.lastLineHeight=0
}this.maxItemWidth=Q(this.maxItemWidth,b);
this.lastItemY=n+this.itemY+g;
this.lastLineHeight=Q(l,this.lastLineHeight);
e._legendItemPos=[this.itemX,this.itemY];
L?this.itemX+=b:(this.itemY+=n+l+g,this.lastLineHeight=l);
this.offsetWidth=j||Q((L?this.itemX-i-h:b)+d,this.offsetWidth)
},getAllItems:function(){var a=[];
M(this.chart.series,function(b){var c=b.options;
if(bj(c.showInLegend,!av(c.linkedTo)?aC:!1,!0)){a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))
}});
return a
},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,n=j.backgroundColor;
a.itemX=a.initialItemX;
a.itemY=a.initialItemY;
a.offsetWidth=0;
a.lastItemY=0;
if(!d){a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup)
}a.renderTitle();
e=a.getAllItems();
aZ(e,function(o,s){return(o.options&&o.options.legendIndex||0)-(s.options&&s.options.legendIndex||0)
});
j.reversed&&e.reverse();
a.allItems=e;
a.display=f=!!e.length;
M(e,function(o){a.renderItem(o)
});
g=j.width||a.offsetWidth;
h=a.lastItemY+a.lastLineHeight+a.titleHeight;
h=a.handleOverflow(h);
if(l||n){g+=k;
h+=k;
if(i){if(g>0&&h>0){i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1
}}else{a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:n||aO}).add(d).shadow(j.shadow),i.isNew=!0
}i[f?"show":"hide"]()
}a.legendWidth=g;
a.legendHeight=h;
M(e,function(o){a.positionItem(o)
});
f&&d.align(G({width:g,height:h},j),!0,"spacingBox");
b.isResizing||this.positionCheckboxes()
},handleOverflow:function(h){var i=this,j=this.chart,k=j.renderer,l=this.options,n=l.y,n=j.spacingBox.height+(l.verticalAlign==="top"?-n:n)-this.padding,o=l.maxHeight,s,x=this.clipRect,a=l.navigation,b=bj(a.animation,!0),c=a.arrowSize||12,e=this.nav,d=this.pages,g,f=this.allItems;
l.layout==="horizontal"&&(n/=2);
o&&(n=bl(n,o));
d.length=0;
if(h>n&&!l.useHTML){this.clipHeight=s=n-20-this.titleHeight-this.padding;
this.currentPage=bj(this.currentPage,1);
this.fullHeight=h;
M(f,function(B,bu){var bt=B._legendItemPos[1],J=y(B.legendItem.getBBox().height),L=d.length;
if(!L||bt-d[L-1]>s&&(g||bt)!==d[L-1]){d.push(g||bt),L++
}bu===f.length-1&&bt+J-d[L-1]>s&&d.push(bt);
bt!==g&&(g=bt)
});
if(!x){x=i.clipRect=k.clipRect(0,this.padding,9999,0),i.contentGroup.clip(x)
}x.attr({height:s});
if(!e){this.nav=e=k.g().attr({zIndex:1}).add(this.group),this.up=k.symbol("triangle",0,0,c,c).on("click",function(){i.scroll(-1,b)
}).add(e),this.pager=k.text("",15,10).css(a.style).add(e),this.down=k.symbol("triangle-down",0,0,c,c).on("click",function(){i.scroll(1,b)
}).add(e)
}i.scroll(0);
h=n
}else{if(e){x.attr({height:j.chartHeight}),e.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0
}}return h
},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;
e>d&&(e=d);
if(e>0){b!==aC&&aR(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)
}}};
ag=aY.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||12;
b.legendSymbol=this.chart.renderer.rect(0,a.baseline-5-c/2,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)
},drawLineMarker:function(a){var b=this.options,c=b.marker,d;
d=a.symbolWidth;
var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-y(e.fontMetrics(a.options.itemStyle.fontSize).b*0.3),g;
if(b.lineWidth){g={"stroke-width":b.lineWidth};
if(b.dashStyle){g.dashstyle=b.dashStyle
}this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)
}if(c&&c.enabled!==!1){b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0
}}};
(/Trident\/7\.0/.test(aP)||a2)&&aa(ab.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)
};
d();
setTimeout(d)
});
W.prototype={init:function(a,b){var c,d=a.series;
a.series=null;
c=ak(aj,a);
c.series=a.series=d;
this.userOptions=a;
d=c.chart;
this.margin=this.splashArray("margin",d);
this.spacing=this.splashArray("spacing",d);
var e=d.events;
this.bounds={h:{},v:{}};
this.callback=b;
this.isResizing=0;
this.options=c;
this.axes=[];
this.series=[];
this.hasCartesianSeries=d.showAxes;
var f=this,g;
f.index=be.length;
be.push(f);
ac++;
d.reflow!==!1&&u(f,"load",function(){f.initReflow()
});
if(e){for(g in e){u(f,g,e[g])
}}f.xAxis=[];
f.yAxis=[];
f.animation=bL?!1:bj(d.animation,!0);
f.pointCount=0;
f.counters=new bG;
f.firstRender()
},initSeries:function(a){var b=this.options.chart;
(b=bN[a.type||b.type||b.defaultSeriesType])||aD(17,!0);
b=new b;
b.init(this,a);
return b
},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;
return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight
},adjustTickAmounts:function(){this.options.chart.alignTicks!==!1&&M(this.axes,function(a){a.adjustTickAmount()
});
this.maxTicks=null
},redraw:function(e){var f=this.axes,g=this.series,h=this.pointer,i=this.legend,j=this.isDirtyLegend,k,l,n=this.isDirtyBox,o=g.length,a=o,b=this.renderer,d=b.isHidden(),c=[];
aR(e,this);
d&&this.cloneRenderTo();
for(this.layOutTitles();
a--;
){if(e=g[a],e.options.stacking&&(k=!0,e.isDirty)){l=!0;
break
}}if(l){for(a=o;
a--;
){if(e=g[a],e.options.stacking){e.isDirty=!0
}}}M(g,function(s){s.isDirty&&s.options.legendType==="point"&&(j=!0)
});
if(j&&i.options.enabled){i.render(),this.isDirtyLegend=!1
}k&&this.getStacks();
if(this.hasCartesianSeries){if(!this.isResizing){this.maxTicks=null,M(f,function(s){s.setScale()
})
}this.adjustTickAmounts();
this.getMargins();
M(f,function(s){s.isDirty&&(n=!0)
});
M(f,function(s){if(s.isDirtyExtremes){s.isDirtyExtremes=!1,c.push(function(){aN(s,"afterSetExtremes",G(s.eventArgs,s.getExtremes()));
delete s.eventArgs
})
}(n||k)&&s.redraw()
})
}n&&this.drawChartBox();
M(g,function(s){s.isDirty&&s.visible&&(!s.isCartesian||s.xAxis)&&s.redraw()
});
h&&h.reset(!0);
b.draw();
aN(this,"redraw");
d&&this.cloneRenderTo(!0);
M(c,function(s){s.call()
})
},get:function(a){var b=this.axes,c=this.series,d,e;
for(d=0;
d<b.length;
d++){if(b[d].options.id===a){return b[d]
}}for(d=0;
d<c.length;
d++){if(c[d].options.id===a){return c[d]
}}for(d=0;
d<c.length;
d++){e=c[d].points||[];
for(b=0;
b<e.length;
b++){if(e[b].id===a){return e[b]
}}}return null
},getAxes:function(){var a=this,b=this.options,c=b.xAxis=aI(b.xAxis||{}),b=b.yAxis=aI(b.yAxis||{});
M(c,function(d,e){d.index=e;
d.isX=!0
});
M(b,function(d,e){d.index=e
});
c=c.concat(b);
M(c,function(d){new I(a,d)
});
a.adjustTickAmounts()
},getSelectedPoints:function(){var a=[];
M(this.series,function(b){a=a.concat(U(b.points||[],function(c){return c.selected
}))
});
return a
},getSelectedSeries:function(){return U(this.series,function(a){return a.selected
})
},getStacks:function(){var a=this;
M(a.yAxis,function(b){if(b.stacks&&b.hasVisibleSeries){b.oldStacks=b.stacks
}});
M(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1)){b.stackKey=b.type+bj(b.options.stack,"")
}})
},setTitle:function(a,b,c){var g;
var d=this,e=d.options,f;
f=e.title=ak(e.title,a);
g=e.subtitle=ak(e.subtitle,b),e=g;
M([["title",a,f],["subtitle",b,e]],function(i){var j=i[0],k=d[j],h=i[1],i=i[2];
k&&h&&(d[j]=k=k.destroy());
i&&i.text&&!k&&(d[j]=d.renderer.text(i.text,0,0,i.useHTML).attr({align:i.align,"class":"highcharts-"+j,zIndex:i.zIndex||4}).css(i.style).add())
});
d.layOutTitles(c)
},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.spacingBox.width-44;
if(c&&(c.css({width:(f.width||g)+"px"}).align(G({y:15},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign)){b=c.getBBox().height
}d&&(d.css({width:(e.width||g)+"px"}).align(G({y:b+f.margin},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=K(b+d.getBBox().height)));
c=this.titleOffset!==b;
this.titleOffset=b;
if(!this.isDirtyBox&&c){this.isDirtyBox=c,this.hasRendered&&bj(a,!0)&&this.isDirtyBox&&this.redraw()
}},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;
if(!av(b)){this.containerWidth=bo(c,"width")
}if(!av(a)){this.containerHeight=bo(c,"height")
}this.chartWidth=Q(0,b||this.containerWidth||600);
this.chartHeight=Q(0,bj(a,this.containerHeight>19?this.containerHeight:400))
},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;
a?b&&(this.renderTo.appendChild(c),bf(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),aJ(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),E.body.appendChild(b),c&&b.appendChild(c))
},getContainer:function(){var a,b=this.options.chart,c,d,e;
this.renderTo=a=b.renderTo;
e="highcharts-"+aW++;
if(af(a)){this.renderTo=a=E.getElementById(a)
}a||aD(13,!0);
c=a8(bM(a,"data-highcharts-chart"));
!isNaN(c)&&be[c]&&be[c].hasRendered&&be[c].destroy();
bM(a,"data-highcharts-chart",this.index);
a.innerHTML="";
!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();
this.getChartSize();
c=this.chartWidth;
d=this.chartHeight;
this.container=a=am(a5,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},G({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);
this._cursor=a.style.cursor;
this.renderer=b.forExport?new t(a,c,d,b.style,!0):new Z(a,c,d,b.style);
bL&&this.renderer.create(this,a,c,d)
},getMargins:function(){var e=this.spacing,f,g=this.legend,h=this.margin,i=this.options.legend,j=bj(i.margin,20),k=i.x,a=i.y,b=i.align,c=i.verticalAlign,d=this.titleOffset;
this.resetMargins();
f=this.axisOffset;
if(d&&!av(h[0])){this.plotTop=Q(this.plotTop,d+this.options.title.margin+e[0])
}if(g.display&&!i.floating){if(b==="right"){if(!av(h[1])){this.marginRight=Q(this.marginRight,g.legendWidth-k+j+e[1])
}}else{if(b==="left"){if(!av(h[3])){this.plotLeft=Q(this.plotLeft,g.legendWidth+k+j+e[3])
}}else{if(c==="top"){if(!av(h[0])){this.plotTop=Q(this.plotTop,g.legendHeight+a+j+e[0])
}}else{if(c==="bottom"&&!av(h[2])){this.marginBottom=Q(this.marginBottom,g.legendHeight-a+j+e[2])
}}}}}this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);
this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);
this.hasCartesianSeries&&M(this.axes,function(l){l.getOffset()
});
av(h[3])||(this.plotLeft+=f[3]);
av(h[0])||(this.plotTop+=f[0]);
av(h[2])||(this.marginBottom+=f[2]);
av(h[1])||(this.marginRight+=f[1]);
this.setChartSize()
},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||bo(d,"width"),f=c.height||bo(d,"height"),c=a?a.target:bn,d=function(){if(b.container){b.setSize(e,f,!1),b.hasUserSize=null
}};
if(!b.hasUserSize&&e&&f&&(c===bn||c===E)){if(e!==b.containerWidth||f!==b.containerHeight){clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d()
}b.containerWidth=e;
b.containerHeight=f
}},initReflow:function(){var a=this,b=function(c){a.reflow(c)
};
u(bn,"resize",b);
u(a,"destroy",function(){N(bn,"resize",b)
})
},setSize:function(a,b,c){var d=this,e,f,g;
d.isResizing+=1;
g=function(){d&&aN(d,"endResize",null,function(){d.isResizing-=1
})
};
aR(c,d);
d.oldChartHeight=d.chartHeight;
d.oldChartWidth=d.chartWidth;
if(av(a)){d.chartWidth=e=Q(0,y(a)),d.hasUserSize=!!e
}if(av(b)){d.chartHeight=f=Q(0,y(b))
}(R?z:aJ)(d.container,{width:e+"px",height:f+"px"},R);
d.setChartSize(!0);
d.renderer.setSize(e,f,c);
d.maxTicks=null;
M(d.axes,function(h){h.isDirty=!0;
h.setScale()
});
M(d.series,function(h){h.isDirty=!0
});
d.isDirtyLegend=!0;
d.isDirtyBox=!0;
d.layOutTitles();
d.getMargins();
d.redraw(c);
d.oldChartHeight=null;
aN(d,"resize");
R===!1?g():setTimeout(g,R&&R.duration||500)
},setChartSize:function(c){var d=this.inverted,e=this.renderer,f=this.chartWidth,g=this.chartHeight,h=this.options.chart,i=this.spacing,j=this.clipOffset,k,l,a,b;
this.plotLeft=k=y(this.plotLeft);
this.plotTop=l=y(this.plotTop);
this.plotWidth=a=Q(0,y(f-k-this.marginRight));
this.plotHeight=b=Q(0,y(g-l-this.marginBottom));
this.plotSizeX=d?b:a;
this.plotSizeY=d?a:b;
this.plotBorderWidth=h.plotBorderWidth||0;
this.spacingBox=e.spacingBox={x:i[3],y:i[0],width:f-i[3]-i[1],height:g-i[0]-i[2]};
this.plotBox=e.plotBox={x:k,y:l,width:a,height:b};
f=2*bP(this.plotBorderWidth/2);
d=K(Q(f,j[3])/2);
e=K(Q(f,j[0])/2);
this.clipBox={x:d,y:e,width:bP(this.plotSizeX-Q(f,j[1])/2-d),height:bP(this.plotSizeY-Q(f,j[2])/2-e)};
c||M(this.axes,function(n){n.setAxisSize();
n.setAxisTranslation()
})
},resetMargins:function(){var a=this.spacing,b=this.margin;
this.plotTop=bj(b[0],a[0]);
this.marginRight=bj(b[1],a[1]);
this.marginBottom=bj(b[2],a[2]);
this.plotLeft=bj(b[3],a[3]);
this.axisOffset=[0,0,0,0];
this.clipOffset=[0,0,0,0]
},drawChartBox:function(){var L=this.options.chart,k=this.renderer,B=this.chartWidth,a=this.chartHeight,b=this.chartBackground,l=this.plotBackground,e=this.plotBorder,d=this.plotBGImage,s=L.borderWidth||0,c=L.backgroundColor,h=L.plotBackgroundColor,i=L.plotBackgroundImage,bt=L.plotBorderWidth||0,bu,f=this.plotLeft,x=this.plotTop,j=this.plotWidth,o=this.plotHeight,n=this.plotBox,J=this.clipRect,g=this.clipBox;
bu=s+(L.shadow?8:0);
if(s||c){if(b){b.animate(b.crisp({width:B-bu,height:a-bu}))
}else{b={fill:c||aO};
if(s){b.stroke=L.borderColor,b["stroke-width"]=s
}this.chartBackground=k.rect(bu/2,bu/2,B-bu,a-bu,L.borderRadius,s).attr(b).addClass("highcharts-background").add().shadow(L.shadow)
}}if(h){l?l.animate(n):this.plotBackground=k.rect(f,x,j,o,0).attr({fill:h}).add().shadow(L.plotShadow)
}if(i){d?d.animate(n):this.plotBGImage=k.image(i,f,x,j,o).add()
}J?J.animate({width:g.width,height:g.height}):this.clipRect=k.clipRect(g);
if(bt){e?e.animate(e.crisp({x:f,y:x,width:j,height:o})):this.plotBorder=k.rect(f,x,j,o,0,-bt).attr({stroke:L.plotBorderColor,"stroke-width":bt,fill:aO,zIndex:1}).add()
}this.isDirtyBox=!1
},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;
M(["inverted","angular","polar"],function(g){c=bN[b.type||b.defaultSeriesType];
f=a[g]||b[g]||c&&c.prototype[g];
for(e=d&&d.length;
!f&&e--;
){(c=bN[d[e].type])&&c.prototype[g]&&(f=!0)
}a[g]=f
})
},linkSeries:function(){var a=this,b=a.series;
M(b,function(c){c.linkedSeries.length=0
});
M(b,function(c){var d=c.options.linkedTo;
if(af(d)&&(d=d===":previous"?a.series[c.index-1]:a.get(d))){d.linkedSeries.push(c),c.linkedParent=d
}})
},renderSeries:function(){M(this.series,function(a){a.translate();
a.setTooltipPoints&&a.setTooltipPoints();
a.render()
})
},render:function(){var a=this,b=a.axes,c=a.renderer,d=a.options,e=d.labels,f=d.credits,g;
a.setTitle();
a.legend=new ab(a,d.legend);
a.getStacks();
M(b,function(h){h.setScale()
});
a.getMargins();
a.maxTicks=null;
M(b,function(h){h.setTickPositions(!0);
h.setMaxTicks()
});
a.adjustTickAmounts();
a.getMargins();
a.drawChartBox();
a.hasCartesianSeries&&M(b,function(h){h.render()
});
if(!a.seriesGroup){a.seriesGroup=c.g("series-group").attr({zIndex:3}).add()
}a.renderSeries();
e.items&&M(e.items,function(i){var j=G(e.style,i.style),k=a8(j.left)+a.plotLeft,h=a8(j.top)+a.plotTop+12;
delete j.left;
delete j.top;
c.text(i.html,k,h).attr({zIndex:2}).css(j).add()
});
if(f.enabled&&!a.credits){g=f.href,a.credits=c.text(f.text,0,0).on("click",function(){if(g){location.href=g
}}).attr({align:f.position.align,zIndex:8}).css(f.style).add().align(f.position)
}a.hasRendered=!0
},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;
aN(a,"destroy");
be[a.index]=aC;
ac--;
a.renderTo.removeAttribute("data-highcharts-chart");
N(a);
for(e=b.length;
e--;
){b[e]=b[e].destroy()
}for(e=c.length;
e--;
){c[e]=c[e].destroy()
}M("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(g){var h=a[g];
h&&h.destroy&&(a[g]=h.destroy())
});
if(d){d.innerHTML="",N(d),f&&bf(d)
}for(e in a){delete a[e]
}},isReadyToRender:function(){var a=this;
return !aS&&bn==bn.top&&E.readyState!=="complete"||bL&&!bn.canvg?(bL?bq.push(function(){a.firstRender()
},a.options.global.canvasToolsURL):E.attachEvent("onreadystatechange",function(){E.detachEvent("onreadystatechange",a.firstRender);
E.readyState==="complete"&&a.firstRender()
}),!1):!0
},firstRender:function(){var a=this,b=a.options,c=a.callback;
if(a.isReadyToRender()){a.getContainer();
aN(a,"init");
a.resetMargins();
a.setChartSize();
a.propFromSeries();
a.getAxes();
M(b.series||[],function(d){a.initSeries(d)
});
a.linkSeries();
aN(a,"beforeRender");
if(aY.Pointer){a.pointer=new aG(a,b)
}a.render();
a.renderer.draw();
c&&c.apply(a,[a]);
M(a.callbacks,function(d){d.apply(a,[a])
});
a.cloneRenderTo(!0);
aN(a,"load")
}},splashArray:function(a,b){var c=b[a],c=a4(c)?c:[c,c,c,c];
return[bj(b[a+"Top"],c[0]),bj(b[a+"Right"],c[1]),bj(b[a+"Bottom"],c[2]),bj(b[a+"Left"],c[3])]
}};
W.prototype.callbacks=[];
aB=aY.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,a=[bj(b[0],"50%"),bj(b[1],"50%"),a.size||"100%",a.innerSize||0],g=bl(e,f),h;
return r(a,function(i,j){h=/%$/.test(i);
d=j<2||j===2&&h;
return(h?[e,f,g,g][j]*a8(i)/100:i)+(d?c:0)
})
}};
var Y=function(){};
Y.prototype={init:function(a,b,c){this.series=a;
this.applyOptions(b,c);
this.pointAttr={};
if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length)){a.colorCounter=0
}a.chart.pointCount++;
return this
},applyOptions:function(a,b){var c=this.series,d=c.pointValKey,a=Y.prototype.optionsToObject.call(this,a);
G(this,a);
this.options=this.options?G(this.options,a):a;
if(d){this.y=this[d]
}if(this.x===aC&&c){this.x=b===aC?c.autoIncrement():b
}return this
},optionsToObject:function(a){var b={},c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;
if(typeof a==="number"||a===null){b[d[0]]=a
}else{if(a7(a)){if(a.length>e){c=typeof a[0];
if(c==="string"){b.name=a[0]
}else{if(c==="number"){b.x=a[0]
}}f++
}for(;
g<e;
){b[d[g++]]=a[f++]
}}else{if(typeof a==="object"){b=a;
if(a.dataLabels){c._hasPointLabels=!0
}if(a.marker){c._hasPointMarkers=!0
}}}}return b
},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;
a.pointCount--;
if(b&&(this.setState(),bD(b,this),!b.length)){a.hoverPoints=null
}if(this===a.hoverPoint){this.onMouseOut()
}if(this.graphic||this.dataLabel){N(this),this.destroyElements()
}this.legendItem&&a.legend.destroyItem(this);
for(c in this){this[c]=null
}},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),b,c=6;
c--;
){b=a[c],this[b]&&(this[b]=this[b].destroy())
}},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}
},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=bj(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";
M(b.pointArrayMap||["y"],function(g){g="{point."+g;
if(e||f){a=a.replace(g+"}",e+g+"}"+f)
}a=a.replace(g+"}",g+":,."+d+"f}")
});
return ar(a,{point:this,series:this.series})
},firePointEvent:function(a,b,c){var d=this,e=this.series.options;
(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();
a==="click"&&e.allowPointSelect&&(c=function(f){d.select(null,f.ctrlKey||f.metaKey||f.shiftKey)
});
aN(this,a,b,c)
}};
var bQ=function(){};
bQ.prototype={isCartesian:!0,type:"line",pointClass:Y,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(h,i){return bj(h.options.index,h._i)-bj(i.options.index,i._i)
};
c.chart=a;
c.options=b=c.setOptions(b);
c.linkedSeries=[];
c.bindAxes();
G(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});
if(bL){b.animation=!1
}e=b.events;
for(d in e){u(c,d,e[d])
}if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect){a.runTrackerClick=!0
}c.getColor();
c.getSymbol();
M(c.parallelArrays,function(h){c[h+"Data"]=[]
});
c.setData(b.data,!1);
if(c.isCartesian){a.hasCartesianSeries=!0
}f.push(c);
c._i=f.length-1;
aZ(f,g);
this.yAxis&&aZ(this.yAxis.series,g);
M(f,function(h,i){h.index=i;
h.name=h.name||"Series "+(i+1)
})
},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;
M(a.axisTypes||[],function(e){M(c[e],function(f){d=f.options;
if(b[e]===d.index||b[e]!==aC&&b[e]===d.id||b[e]===aC&&d.index===0){f.series.push(a),a[e]=f,f.isDirty=!0
}});
!a[e]&&a.optionalAxis!==e&&aD(18,!0)
})
},updateParallelArrays:function(a,b){var c=a.series,d=arguments;
M(c.parallelArrays,typeof b==="number"?function(e){var f=e==="y"&&c.toYData?c.toYData(a):a[e];
c[e+"Data"][b]=f
}:function(e){Array.prototype[b].apply(c[e+"Data"],Array.prototype.slice.call(d,2))
})
},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=bj(b,a.pointStart,0);
this.pointInterval=bj(this.pointInterval,a.pointInterval,1);
this.xIncrement=b+this.pointInterval;
return b
},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;
if(e){if(this.options.connectNulls){for(c=e;
c--;
){d[c].y===null&&d.splice(c,1)
}d.length&&(b=[d])
}else{M(d,function(f,g){f.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))
})
}}this.segments=b
},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];
this.userOptions=a;
c=ak(e,c.series,a);
this.tooltipOptions=ak(aj.tooltip,aj.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);
e.marker===null&&delete c.marker;
return c
},getColor:function(){var a=this.options,b=this.userOptions,c=this.chart.options.colors,d=this.chart.counters,e;
e=a.color||aK[this.type].color;
if(!e&&!a.colorByPoint){av(b._colorIndex)?a=b._colorIndex:(b._colorIndex=d.color,a=d.color++),e=c[a]
}this.color=e;
d.wrapColor(c.length)
},getSymbol:function(){var a=this.userOptions,b=this.options.marker,c=this.chart,d=c.options.symbols,c=c.counters;
this.symbol=b.symbol;
if(!this.symbol){av(a._symbolIndex)?a=a._symbolIndex:(a._symbolIndex=c.symbol,a=c.symbol++),this.symbol=d[a]
}if(/^url/.test(this.symbol)){b.radius=0
}c.wrapSymbol(d.length)
},drawLegendSymbol:ag.drawLineMarker,setData:function(J,d,e,f){var g=this,h=g.points,a=h&&h.length||0,b,i=g.options,k=g.chart,l=null,n=g.xAxis,s=n&&!!n.categories,o=g.tooltipPoints,B=i.turboThreshold,x=this.xData,j=this.yData,c=(b=g.pointArrayMap)&&b.length,J=J||[];
b=J.length;
d=bj(d,!0);
if(f!==!1&&b&&a===b&&!g.cropped&&!g.hasGroupedData){M(J,function(L,bt){h[bt].update(L,!1)
})
}else{g.xIncrement=null;
g.pointRange=s?1:i.pointRange;
g.colorCounter=0;
M(this.parallelArrays,function(L){g[L+"Data"].length=0
});
if(B&&b>B){for(e=0;
l===null&&e<b;
){l=J[e],e++
}if(aw(l)){s=bj(i.pointStart,0);
i=bj(i.pointInterval,1);
for(e=0;
e<b;
e++){x[e]=s,j[e]=J[e],s+=i
}g.xIncrement=s
}else{if(a7(l)){if(c){for(e=0;
e<b;
e++){i=J[e],x[e]=i[0],j[e]=i.slice(1,c+1)
}}else{for(e=0;
e<b;
e++){i=J[e],x[e]=i[0],j[e]=i[1]
}}}else{aD(12)
}}}else{for(e=0;
e<b;
e++){if(J[e]!==aC&&(i={series:g},g.pointClass.prototype.applyOptions.apply(i,[J[e]]),g.updateParallelArrays(i,e),s&&i.name)){n.names[i.x]=i.name
}}}af(j[0])&&aD(14,!0);
g.data=[];
g.options.data=J;
for(e=a;
e--;
){h[e]&&h[e].destroy&&h[e].destroy()
}if(o){o.length=0
}if(n){n.minRange=n.userMinRange
}g.isDirty=g.isDirtyData=k.isDirtyBox=!0;
e=!1
}d&&k.redraw(e)
},processData:function(e){var f=this.xData,g=this.yData,h=f.length,i;
i=0;
var j,k,l=this.xAxis,n=this.options,o=n.cropThreshold,a=0,b=this.isCartesian,d,c;
if(b&&!this.isDirty&&!l.isDirty&&!this.yAxis.isDirty&&!e){return !1
}if(b&&this.sorted&&(!o||h>o||this.forceCrop)){if(d=l.min,c=l.max,f[h-1]<d||f[0]>c){f=[],g=[]
}else{if(f[0]<d||f[h-1]>c){i=this.cropData(this.xData,this.yData,d,c),f=i.xData,g=i.yData,i=i.start,j=!0,a=f.length
}}}for(h=f.length-1;
h>=0;
h--){e=f[h]-f[h-1],!j&&f[h]>d&&f[h]<c&&a++,e>0&&(k===aC||e<k)?k=e:e<0&&this.requireSorting&&aD(15)
}this.cropped=j;
this.cropStart=i;
this.processedXData=f;
this.processedYData=g;
this.activePointCount=a;
if(n.pointRange===null){this.pointRange=k||1
}this.closestPointRange=k
},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=bj(this.cropShoulder,1),i;
for(i=0;
i<e;
i++){if(a[i]>=c){f=Q(0,i-h);
break
}}for(;
i<e;
i++){if(a[i]>d){g=i+h;
break
}}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}
},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],n;
if(!b&&!j){b=[],b.length=a.length,b=this.data=b
}for(n=0;
n<g;
n++){i=h+n,j?l[n]=(new f).init(this,[d[n]].concat(aI(e[n]))):(b[i]?k=b[i]:a[i]!==aC&&(b[i]=k=(new f).init(this,a[i],d[n])),l[n]=k)
}if(b&&(g!==(c=b.length)||j)){for(n=0;
n<c;
n++){if(n===h&&!j&&(n+=g),b[n]){b[n].destroyElements(),b[n].plotX=aC
}}}this.data=b;
this.points=l
},getExtremes:function(c){var d=this.yAxis,e=this.processedXData,f,g=[],h=0;
f=this.xAxis.getExtremes();
var i=f.min,j=f.max,k,l,a,b,c=c||this.stackedYData||this.processedYData;
f=c.length;
for(b=0;
b<f;
b++){if(l=e[b],a=c[b],k=a!==null&&a!==aC&&(!d.isLog||a.length||a>0),l=this.getExtremesFromAll||this.cropped||(e[b+1]||l)>=i&&(e[b-1]||l)<=j,k&&l){if(k=a.length){for(;
k--;
){a[k]!==null&&(g[h++]=a[k])
}}else{g[h++]=a
}}}this.dataMin=bj(void 0,D(g));
this.dataMax=bj(void 0,bK(g))
},translate:function(){this.processedXData||this.processData();
this.generatePoints();
for(var h=this.options,i=h.stacking,j=this.xAxis,k=j.categories,l=this.yAxis,n=this.points,o=n.length,s=!!this.modifyValue,x=h.pointPlacement,a=x==="between"||aw(x),b=h.threshold,h=0;
h<o;
h++){var c=n[h],e=c.x,d=c.y,g=c.low,f=i&&l.stacks[(this.negStacks&&d<b?"-":"")+this.stackKey];
if(l.isLog&&d<=0){c.y=d=null
}c.plotX=j.translate(e,0,0,0,1,x,this.type==="flags");
if(i&&this.visible&&f&&f[e]){f=f[e],d=f.points[this.index+","+h],g=d[0],d=d[1],g===0&&(g=bj(b,l.min)),l.isLog&&g<=0&&(g=null),c.total=c.stackTotal=f.total,c.percentage=f.total&&c.y/f.total*100,c.stackY=d,f.setOffset(this.pointXOffset||0,this.barW||0)
}c.yBottom=av(g)?l.translate(g,0,1,0,1):null;
s&&(d=this.modifyValue(d,c));
c.plotY=typeof d==="number"&&d!==Infinity?l.translate(d,0,1,0,1):aC;
c.clientX=a?j.translate(e,0,0,0,1):c.plotX;
c.negative=c.y<(b||0);
c.category=k&&k[c.x]!==aC?k[c.x]:c.x
}this.getSegments()
},animate:function(a){var b=this.chart,c=b.renderer,d;
d=this.options.animation;
var e=this.clipBox||b.clipBox,f=b.inverted,g;
if(d&&!a4(d)){d=aK[this.type].animation
}g=["_sharedClip",d.duration,d.easing,e.height].join(",");
a?(a=b[g],d=b[g+"m"],a||(b[g]=a=c.clipRect(G(e,{width:0})),b[g+"m"]=d=c.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),this.group.clip(a),this.markerGroup.clip(d),this.sharedClipKey=g):((a=b[g])&&a.animate({width:b.plotSizeX},d),b[g+"m"]&&b[g+"m"].animate({width:b.plotSizeX+99},d),this.animate=null)
},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,c=this.group,d=this.clipBox;
if(c&&this.options.clip!==!1){if(!b||!d){c.clip(d?a.renderer.clipRect(d):a.clipRect)
}this.markerGroup.clip()
}aN(this,"afterAnimate");
setTimeout(function(){b&&a[b]&&(d||(a[b]=a[b].destroy()),a[b+"m"]&&(a[b+"m"]=a[b+"m"].destroy()))
},100)
},drawPoints:function(){var f,g=this.points,h=this.chart,i,j,k,l,n,o,s,a;
i=this.options.marker;
var b=this.pointAttr[""],d,c=this.markerGroup,e=bj(i.enabled,this.activePointCount<0.5*this.xAxis.len/i.radius);
if(i.enabled!==!1||this._hasPointMarkers){for(k=g.length;
k--;
){if(l=g[k],i=bP(l.plotX),j=l.plotY,a=l.graphic,o=l.marker||{},f=e&&o.enabled===aC||o.enabled,d=h.isInsidePlot(y(i),j,h.inverted),f&&j!==aC&&!isNaN(j)&&l.y!==null){if(f=l.pointAttr[l.selected?"select":""]||b,n=f.r,o=bj(o.symbol,this.symbol),s=o.indexOf("url")===0,a){a[d?"show":"hide"](!0).animate(G({x:i-n,y:j-n},a.symbolName?{width:2*n,height:2*n}:{}))
}else{if(d&&(n>0||s)){l.graphic=h.renderer.symbol(o,i-n,j-n,2*n,2*n).attr(f).add(c)
}}}else{if(a){l.graphic=a.destroy()
}}}}},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};
for(f in e){g=e[f],h[f]=bj(a[g],b[f],c[f],d[f])
}return h
},getAttribs:function(){var h=this,i=h.options,j=aK[h.type].marker?i.marker:i,k=j.states,l=k.hover,n,o=h.color;
n={stroke:o,fill:o};
var s=h.points||[],x,a=[],b,c=h.pointAttrToOptions;
b=h.hasPointSpecificOptions;
var f=i.negativeColor,e=j.lineColor,g=j.fillColor;
x=i.turboThreshold;
var d;
i.marker?(l.radius=l.radius||j.radius+2,l.lineWidth=l.lineWidth||j.lineWidth+1):l.color=l.color||bs(l.color||o).brighten(l.brightness).get();
a[""]=h.convertAttribs(j,n);
M(["hover","select"],function(B){a[B]=h.convertAttribs(k[B],a[""])
});
h.pointAttr=a;
o=s.length;
if(!x||o<x||b){for(;
o--;
){x=s[o];
if((j=x.options&&x.options.marker||x.options)&&j.enabled===!1){j.radius=0
}if(x.negative&&f){x.color=x.fillColor=f
}b=i.colorByPoint||x.color;
if(x.options){for(d in c){av(j[c[d]])&&(b=!0)
}}if(b){j=j||{};
b=[];
k=j.states||{};
n=k.hover=k.hover||{};
if(!i.marker){n.color=n.color||!x.options.color&&l.color||bs(x.color).brighten(n.brightness||l.brightness).get()
}n={color:x.color};
if(!g){n.fillColor=x.color
}if(!e){n.lineColor=x.color
}b[""]=h.convertAttribs(G(n,j),a[""]);
b.hover=h.convertAttribs(k.hover,a.hover,b[""]);
b.select=h.convertAttribs(k.select,a.select,b[""])
}else{b=a
}x.pointAttr=b
}}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(aP),d,e,f=a.data||[],g,h,i;
aN(a,"destroy");
N(a);
M(a.axisTypes||[],function(j){if(i=a[j]){bD(i.series,a),i.isDirty=i.forceRedraw=!0
}});
a.legendItem&&a.chart.legend.destroyItem(a);
for(e=f.length;
e--;
){(g=f[e])&&g.destroy&&g.destroy()
}a.points=null;
clearTimeout(a.animationTimeout);
M("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(j){a[j]&&(d=c&&j==="group"?"hide":"destroy",a[j][d]())
});
if(b.hoverSeries===a){b.hoverSeries=null
}bD(b.series,a);
for(h in a){delete a[h]
}},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;
M(a,function(e,f){var g=e.plotX,h=e.plotY,i;
b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))
});
return c
},getGraphPath:function(){var a=this,b=[],c,d=[];
M(a.segments,function(e){c=a.getSegmentPath(e);
e.length>1?b=b.concat(c):d.push(e[0])
});
a.singlePoints=d;
return a.graphPath=b
},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,e=b.dashStyle,f=b.linecap!=="square",g=this.getGraphPath(),h=b.negativeColor;
h&&c.push(["graphNeg",h]);
M(c,function(k,l){var i=k[0],j=a[i];
if(j){aM(j),j.animate({d:g})
}else{if(d&&g.length){j={stroke:k[1],"stroke-width":d,fill:aO,zIndex:1},e?j.dashstyle=e:f&&(j["stroke-linecap"]=j["stroke-linejoin"]="round"),a[i]=a.chart.renderer.path(g).attr(j).add(a.group).shadow(!l&&b.shadow)
}}})
},clipNeg:function(){var c=this.options,d=this.chart,e=d.renderer,f=c.negativeColor||c.negativeFillColor,g,h=this.graph,i=this.area,j=this.posClip,k=this.negClip;
g=d.chartWidth;
var l=d.chartHeight,a=Q(g,l),b=this.yAxis;
if(f&&(h||i)){f=y(b.toPixels(c.threshold||0,!0));
f<0&&(a-=f);
c={x:0,y:0,width:a,height:f};
a={x:0,y:f,width:a,height:a};
if(d.inverted){c.height=a.y=d.plotWidth-f,e.isVML&&(c={x:d.plotWidth-f-d.plotLeft,y:0,width:g,height:l},a={x:f+d.plotLeft-g,y:0,width:d.plotLeft+f,height:g})
}b.reversed?(d=a,g=c):(d=c,g=a);
j?(j.animate(d),k.animate(g)):(this.posClip=j=e.clipRect(d),this.negClip=k=e.clipRect(g),h&&this.graphNeg&&(h.clip(j),this.graphNeg.clip(k)),i&&(i.clip(j),this.areaNeg.clip(k)))
}},invertGroups:function(){function a(){var d={width:b.yAxis.len,height:b.xAxis.len};
M(["group","markerGroup"],function(e){b[e]&&b[e].attr(d).invert()
})
}var b=this,c=b.chart;
if(b.xAxis){u(c,"resize",a),u(b,"destroy",function(){N(c,"resize",a)
}),a(),b.invertGroups=a
}},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;
g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));
f[g?"attr":"animate"](this.getPlotBox());
return f
},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;
if(a.inverted){b=c,c=this.xAxis
}return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}
},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&bj(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;
c=a.plotGroup("group","series",f,g,i);
a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);
e&&a.animate(!0);
a.getAttribs();
c.inverted=a.isCartesian?b.inverted:!1;
a.drawGraph&&(a.drawGraph(),a.clipNeg());
a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();
a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();
b.inverted&&a.invertGroups();
d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);
e&&a.animate();
if(!h){e?a.animationTimeout=setTimeout(function(){a.afterAnimate()
},e):a.afterAnimate()
}a.isDirty=a.isDirtyData=!1;
a.hasRendered=!0
},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;
c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:bj(d&&d.left,a.plotLeft),translateY:bj(e&&e.top,a.plotTop)}));
this.translate();
this.setTooltipPoints&&this.setTooltipPoints(!0);
this.render();
b&&aN(this,"updatedData")
}};
a1.prototype={destroy:function(){al(this,this.axis)
},render:function(a){var b=this.options,c=b.format,c=c?ar(c,this):b.formatter.call(this);
this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)
},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=bB(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};
if(e=this.label){e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)
}}};
I.prototype.buildStacks=function(){var a=this.series,b=bj(this.options.reversedStacks,!0),c=a.length;
if(!this.isXAxis){for(this.usePercentage=!1;
c--;
){a[b?c:a.length-c-1].setStackedPoints()
}if(this.usePercentage){for(c=0;
c<a.length;
c++){a[c].setPercentStacks()
}}}};
I.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;
if(!f){this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add()
}f.translate(a.plotLeft,a.plotTop);
for(d in c){for(e in a=c[d],a){a[e].render(f)
}}};
bQ.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var s=this.processedXData,x=this.processedYData,o=[],J=x.length,L=this.options,a=L.threshold,b=L.stack,L=L.stacking,c=this.stackKey,B="-"+c,e=this.negStacks,f=this.yAxis,d=f.stacks,j=f.oldStacks,i,h,k,g,n,l;
for(g=0;
g<J;
g++){n=s[g];
l=x[g];
k=this.index+","+g;
h=(i=e&&l<a)?B:c;
d[h]||(d[h]={});
if(!d[h][n]){j[h]&&j[h][n]?(d[h][n]=j[h][n],d[h][n].total=null):d[h][n]=new a1(f,f.options.stackLabels,i,n,b)
}h=d[h][n];
h.points[k]=[h.cum||0];
L==="percent"?(i=i?c:B,e&&d[i]&&d[i][n]?(i=d[i][n],h.total=i.total=Q(i.total,h.total)+bB(l)||0):h.total=P(h.total+(bB(l)||0))):h.total=P(h.total+(l||0));
h.cum=(h.cum||0)+(l||0);
h.points[k].push(h.cum);
o[g]=h.cum
}if(L==="percent"){f.usePercentage=!0
}this.stackedYData=o;
f.oldStacks={}
}};
bQ.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;
M([b,"-"+b],function(e){var f;
for(var g=d.length,h,i;
g--;
){if(h=d[g],f=(i=c[e]&&c[e][h])&&i.points[a.index+","+g],h=f){i=i.total?100/i.total:0,h[0]=P(h[0]*i),h[1]=P(h[1]*i),a.stackedYData[g]=h[1]
}}})
};
G(W.prototype,{addSeries:function(a,b,c){var d,e=this;
a&&(b=bj(b,!0),aN(e,"addSeries",{options:a},function(){d=e.initSeries(a);
e.isDirtyLegend=!0;
e.linkSeries();
b&&e.redraw(c)
}));
return d
},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;
new I(this,ak(a,{index:this[e].length,isX:b}));
f[e]=aI(f[e]||{});
f[e].push(a);
bj(c,!0)&&this.redraw(d)
},showLoading:function(a){var b=this.options,c=this.loadingDiv,d=b.loading;
if(!c){this.loadingDiv=c=am(a5,{className:"highcharts-loading"},G(d.style,{zIndex:10,display:aO}),this.container),this.loadingSpan=am("span",null,d.labelStyle,c)
}this.loadingSpan.innerHTML=a||b.lang.loading;
if(!this.loadingShown){aJ(c,{opacity:0,display:"",left:this.plotLeft+"px",top:this.plotTop+"px",width:this.plotWidth+"px",height:this.plotHeight+"px"}),z(c,{opacity:d.style.opacity},{duration:d.showDuration||0}),this.loadingShown=!0
}},hideLoading:function(){var a=this.options,b=this.loadingDiv;
b&&z(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){aJ(b,{display:aO})
}});
this.loadingShown=!1
}});
G(Y.prototype,{update:function(a,b,c){var d=this,e=d.series,f=d.graphic,g,h=e.data,i=e.chart,j=e.options,b=bj(b,!0);
d.firePointEvent("update",{options:a},function(){d.applyOptions(a);
if(a4(a)){e.getAttribs();
if(f){a&&a.marker&&a.marker.symbol?d.graphic=f.destroy():f.attr(d.pointAttr[d.state||""])
}if(a&&a.dataLabels&&d.dataLabel){d.dataLabel=d.dataLabel.destroy()
}}g=bI(d,h);
e.updateParallelArrays(d,g);
j.data[g]=d.options;
e.isDirty=e.isDirtyData=!0;
if(!e.fixedBox&&e.hasCartesianSeries){i.isDirtyBox=!0
}j.legendType==="point"&&i.legend.destroyItem(d);
b&&i.redraw(c)
})
},remove:function(a,b){var c=this,d=c.series,e=d.points,f=d.chart,g,h=d.data;
aR(b,f);
a=bj(a,!0);
c.firePointEvent("remove",null,function(){g=bI(c,h);
h.length===e.length&&e.splice(g,1);
h.splice(g,1);
d.options.data.splice(g,1);
d.updateParallelArrays(c,"splice",g,1);
c.destroy();
d.isDirty=!0;
d.isDirtyData=!0;
a&&f.redraw()
})
}});
G(bQ.prototype,{addPoint:function(e,f,g,h){var i=this.options,j=this.data,k=this.graph,l=this.area,n=this.chart,o=this.xAxis&&this.xAxis.names,a=k&&k.shift||0,b=i.data,d,c=this.xData;
aR(h,n);
g&&M([k,l,this.graphNeg,this.areaNeg],function(s){if(s){s.shift=a+1
}});
if(l){l.isArea=!0
}f=bj(f,!0);
h={series:this};
this.pointClass.prototype.applyOptions.apply(h,[e]);
k=h.x;
l=c.length;
if(this.requireSorting&&k<c[l-1]){for(d=!0;
l&&c[l-1]>k;
){l--
}}this.updateParallelArrays(h,"splice",l,0,0);
this.updateParallelArrays(h,l);
if(o){o[k]=h.name
}b.splice(l,0,e);
d&&(this.data.splice(l,0,null),this.processData());
i.legendType==="point"&&this.generatePoints();
g&&(j[0]&&j[0].remove?j[0].remove(!1):(j.shift(),this.updateParallelArrays(h,"shift"),b.shift()));
this.isDirtyData=this.isDirty=!0;
f&&(this.getAttribs(),n.redraw())
},remove:function(a,b){var c=this,d=c.chart,a=bj(a,!0);
if(!c.isRemoving){c.isRemoving=!0,aN(c,"remove",null,function(){c.destroy();
d.isDirtyLegend=d.isDirtyBox=!0;
d.linkSeries();
a&&d.redraw(b)
})
}c.isRemoving=!1
},update:function(a,b){var c=this.chart,d=this.type,e=bN[d].prototype,f,a=ak(this.userOptions,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);
this.remove(!1);
for(f in e){e.hasOwnProperty(f)&&(this[f]=aC)
}G(this,bN[a.type||d].prototype);
this.init(c,a);
bj(b,!0)&&c.redraw(!1)
}});
G(I.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=ak(this.userOptions,a);
this.destroy(!0);
this._addedPlotLB=aC;
this.init(c,G(a,{events:aC}));
c.isDirtyBox=!0;
bj(b,!0)&&c.redraw()
},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;
e--;
){d[e]&&d[e].remove(!1)
}bD(b.axes,this);
bD(b[c],this);
b.options[c].splice(this.options.index,1);
M(b[c],function(f,g){f.options.index=g
});
this.destroy();
b.isDirtyBox=!0;
bj(a,!0)&&b.redraw()
},setTitle:function(a,b){this.update({title:a},b)
},setCategories:function(a,b){this.update({categories:a},b)
}});
ad=T(bQ);
bN.line=ad;
aK.area=ak(bi,{threshold:0});
var an=T(bQ,{type:"area",getSegments:function(){var e=[],f=[],g=[],h=this.xAxis,i=this.yAxis,j=i.stacks[this.stackKey],k={},l,n,o=this.points,a=this.options.connectNulls,b,d,c;
if(this.options.stacking&&!this.cropped){for(d=0;
d<o.length;
d++){k[o[d].x]=o[d]
}for(c in j){j[c].total!==null&&g.push(+c)
}g.sort(function(s,x){return s-x
});
M(g,function(s){if(!a||k[s]&&k[s].y!==null){k[s]?f.push(k[s]):(l=h.translate(s),b=j[s].percent?j[s].total?j[s].cum*100/j[s].total:0:j[s].cum,n=i.toPixels(b,!0),f.push({y:null,plotX:l,clientX:l,plotY:n,yBottom:n,onMouseOver:a9}))
}});
f.length&&e.push(f)
}else{bQ.prototype.getSegments.call(this),e=this.segments
}this.segments=e
},getSegmentPath:function(a){var b=bQ.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;
d=b.length;
var f=this.yAxis.getThreshold(e.threshold),g;
d===3&&c.push("L",b[1],b[2]);
if(e.stacking&&!this.closedStacks){for(d=a.length-1;
d>=0;
d--){g=bj(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g)
}}else{this.closeSegment(c,a,f)
}this.areaPath=this.areaPath.concat(c);
return b
},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)
},drawGraph:function(){this.areaPath=[];
bQ.prototype.drawGraph.apply(this);
var a=this,b=this.areaPath,c=this.options,d=c.negativeColor,e=c.negativeFillColor,f=[["area",this.color,c.fillColor]];
(d||e)&&f.push(["areaNeg",d,e]);
M(f,function(g){var h=g[0],i=a[h];
i?i.animate({d:b}):a[h]=a.chart.renderer.path(b).attr({fill:bj(g[2],bs(g[1]).setOpacity(bj(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)
})
},drawLegendSymbol:ag.drawRectangle});
bN.area=an;
aK.spline=ak(bi);
ad=T(bQ,{type:"spline",getPointSpline:function(c,d,e){var f=d.plotX,g=d.plotY,h=c[e-1],i=c[e+1],j,k,l,a;
if(h&&i){c=h.plotY;
l=i.plotX;
var i=i.plotY,b;
j=(1.5*f+h.plotX)/2.5;
k=(1.5*g+c)/2.5;
l=(1.5*f+l)/2.5;
a=(1.5*g+i)/2.5;
b=(a-k)*(l-f)/(l-j)+g-a;
k+=b;
a+=b;
k>c&&k>g?(k=Q(c,g),a=2*g-k):k<c&&k<g&&(k=bl(c,g),a=2*g-k);
a>i&&a>g?(a=Q(i,g),k=2*g-a):a<i&&a<g&&(a=bl(i,g),k=2*g-a);
d.rightContX=l;
d.rightContY=a
}e?(d=["C",h.rightContX||h.plotX,h.rightContY||h.plotY,j||f,k||g,f,g],h.rightContX=h.rightContY=null):d=["M",f,g];
return d
}});
bN.spline=ad;
aK.areaspline=ak(aK.area);
an=an.prototype;
ad=T(ad,{type:"areaspline",closedStacks:!0,getSegmentPath:an.getSegmentPath,closeSegment:an.closeSegment,drawGraph:an.drawGraph,drawLegendSymbol:ag.drawRectangle});
bN.areaspline=ad;
aK.column=ak(bi,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,tooltip:{distance:6},threshold:0});
ad=T(bQ,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){bQ.prototype.init.apply(this,arguments);
var a=this,b=a.chart;
b.hasRendered&&M(b.series,function(c){if(c.type===a.type){c.isDirty=!0
}})
},getColumnMetrics:function(){var c=this,d=c.options,e=c.xAxis,f=c.yAxis,g=e.reversed,h,i={},j,k=0;
d.grouping===!1?k=1:M(c.chart.series,function(n){var o=n.options,s=n.yAxis;
if(n.type===c.type&&n.visible&&f.len===s.len&&f.pos===s.pos){o.stacking?(h=n.stackKey,i[h]===aC&&(i[h]=k++),j=i[h]):o.grouping!==!1&&(j=k++),n.columnIndex=j
}});
var e=bl(bB(e.transA)*(e.ordinalSlope||d.pointRange||e.closestPointRange||e.tickInterval||1),e.len),l=e*d.groupPadding,a=(e-2*l)/k,b=d.pointWidth,d=av(b)?(a-b)/2:a*d.pointPadding,b=bj(b,a-2*d);
return c.columnMetrics={width:b,offset:d+(l+((g?k-(c.columnIndex||0):c.columnIndex)||0)*a-e/2)*(g?-1:1)}
},translate:function(){var c=this,d=c.chart,e=c.options,f=c.borderWidth=bj(e.borderWidth,c.activePointCount>0.5*c.xAxis.len?0:1),g=c.yAxis,h=c.translatedThreshold=g.getThreshold(e.threshold),i=bj(e.minPointLength,5),e=c.getColumnMetrics(),j=e.width,k=c.barW=K(Q(j,1+2*f)),l=c.pointXOffset=e.offset,a=-(f%2?0.5:0),b=f%2?0.5:1;
d.renderer.isVML&&d.inverted&&(b+=1);
bQ.prototype.translate.apply(c);
M(c.points,function(n){var o=bj(n.yBottom,h),s=bl(Q(-999-o,n.plotY),g.len+999+o),x=n.plotX+l,B=k,J=bl(s,o),L;
L=Q(s,o)-J;
bB(L)<i&&i&&(L=i,J=y(bB(J-h)>i?o-i:h-(g.translate(n.y,0,1,0,1)<=h?i:0)));
n.barX=x;
n.pointWidth=j;
n.tooltipPos=d.inverted?[g.len-s,c.xAxis.len-x-B/2]:[x+B/2,s];
o=bB(x)<0.5;
B=y(x+B)+a;
x=y(x)+a;
B-=x;
s=bB(J)<0.5;
L=y(J+L)+b;
J=y(J)+b;
L-=J;
o&&(x+=1,B-=1);
s&&(J-=1,L+=1);
n.shapeType="rect";
n.shapeArgs={x:x,y:J,width:B,height:L}
})
},getSymbol:a9,drawLegendSymbol:ag.drawRectangle,drawGraph:a9,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g,h;
M(a.points,function(j){var k=j.plotY,i=j.graphic;
if(k!==aC&&!isNaN(k)&&j.y!==null){f=j.shapeArgs,h=av(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=j.pointAttr[j.selected?"select":""]||a.pointAttr[""],i?(aM(i),i.attr(h)[b.pointCount<e?"animate":"attr"](ak(f))):j.graphic=d[j.shapeType](f).attr(g).attr(h).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius)
}else{if(i){j.graphic=i.destroy()
}}})
},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};
if(aS){a?(e.scaleY=0.001,a=bl(b.pos+b.len,Q(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)
}},remove:function(){var a=this,b=a.chart;
b.hasRendered&&M(b.series,function(c){if(c.type===a.type){c.isDirty=!0
}});
bQ.prototype.remove.apply(a,arguments)
}});
bN.column=ad;
aK.bar=ak(aK.column);
an=T(ad,{type:"bar",inverted:!0});
bN.bar=an;
aK.scatter=ak(bi,{lineWidth:0,tooltip:{headerFormat:'<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"},stickyTracking:!1});
an=T(bQ,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup"],takeOrdinalPosition:!1,singularTooltips:!0,drawGraph:function(){this.options.lineWidth&&bQ.prototype.drawGraph.call(this)
}});
bN.scatter=an;
aK.pie=ak(bi,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name
}},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});
bi={type:"pie",isCartesian:!1,pointClass:T(Y,{init:function(){Y.prototype.init.apply(this,arguments);
var a=this,b;
if(a.y<0){a.y=null
}G(a,{visible:a.visible!==!1,name:bj(a.name,"Slice")});
b=function(c){a.slice(c.type==="select")
};
u(a,"select",b);
u(a,"unselect",b);
return a
},setVisible:function(a){var b=this,c=b.series,d=c.chart;
b.visible=b.options.visible=a=a===aC?!b.visible:a;
c.options.data[bI(b,c.data)]=b.options;
M(["graphic","dataLabel","connector","shadowGroup"],function(e){if(b[e]){b[e][a?"show":"hide"](!0)
}});
b.legendItem&&d.legend.colorizeItem(b,a);
if(!c.isDirty&&c.options.ignoreHiddenPoint){c.isDirty=!0,d.redraw()
}},slice:function(a,b,c){var d=this.series;
aR(c,d.chart);
bj(b,!0);
this.sliced=this.options.sliced=a=av(a)?a:!this.sliced;
d.options.data[bI(this,d.data)]=this.options;
a=a?this.slicedTranslation:{translateX:0,translateY:0};
this.graphic.animate(a);
this.shadowGroup&&this.shadowGroup.animate(a)
},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;
return this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})
}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:!0,getColor:a9,animate:function(a){var b=this,c=b.points,d=b.startAngleRad;
if(!a){M(c,function(e){var f=e.graphic,e=e.shapeArgs;
f&&(f.attr({r:b.center[3]/2,start:d,end:d}),f.animate({r:e.r,start:e.start,end:e.end},b.options.animation))
}),b.animate=null
}},setData:function(a,b,c,d){bQ.prototype.setData.call(this,a,!1,c,d);
this.processData();
this.generatePoints();
bj(b,!0)&&this.chart.redraw(c)
},generatePoints:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;
bQ.prototype.generatePoints.call(this);
c=this.points;
d=c.length;
for(a=0;
a<d;
a++){e=c[a],b+=f&&!e.visible?0:e.y
}this.total=b;
for(a=0;
a<d;
a++){e=c[a],e.percentage=b>0?e.y/b*100:0,e.total=b
}},translate:function(g){this.generatePoints();
var h=0,i=this.options,j=i.slicedOffset,k=j+i.borderWidth,l,n,o,s=i.startAngle||0,a=this.startAngleRad=bh/180*(s-90),s=(this.endAngleRad=bh/180*(bj(i.endAngle,s+360)-90))-a,b=this.points,c=i.dataLabels.distance,i=i.ignoreHiddenPoint,e,d=b.length,f;
if(!g){this.center=g=this.getCenter()
}this.getX=function(B,x){o=bC.asin(bl((B-g[1])/(g[2]/2+c),1));
return g[0]+(x?-1:1)*aH(o)*(g[2]/2+c)
};
for(e=0;
e<d;
e++){f=b[e];
l=a+h*s;
if(!i||f.visible){h+=f.percentage/100
}n=a+h*s;
f.shapeType="arc";
f.shapeArgs={x:g[0],y:g[1],r:g[2]/2,innerR:g[3]/2,start:y(l*1000)/1000,end:y(n*1000)/1000};
o=(n+l)/2;
o>1.5*bh?o-=2*bh:o<-bh/2&&(o+=2*bh);
f.slicedTranslation={translateX:y(aH(o)*j),translateY:y(A(o)*j)};
l=aH(o)*g[2]/2;
n=A(o)*g[2]/2;
f.tooltipPos=[g[0]+l*0.7,g[1]+n*0.7];
f.half=o<-bh/2||o>bh/2?1:0;
f.angle=o;
k=bl(k,c/2);
f.labelPos=[g[0]+l+aH(o)*c,g[1]+n+A(o)*c,g[0]+l+aH(o)*k,g[1]+n+A(o)*k,g[0]+l,g[1]+n,c<0?"center":f.half?"right":"left",o]
}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;
if(e&&!a.shadowGroup){a.shadowGroup=b.g("shadow").add(a.group)
}M(a.points,function(h){d=h.graphic;
g=h.shapeArgs;
f=h.shadowGroup;
if(e&&!f){f=h.shadowGroup=b.g("shadow").add(a.shadowGroup)
}c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};
f&&f.attr(c);
d?d.animate(G(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?"select":""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);
h.visible!==void 0&&h.setVisible(h.visible)
})
},sortByAngle:function(a,b){a.sort(function(c,d){return c.angle!==void 0&&(d.angle-c.angle)*b
})
},drawLegendSymbol:ag.drawRectangle,getCenter:aB.getCenter,getSymbol:a9};
bi=T(bQ,bi);
bN.pie=bi;
bQ.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h,i;
if(d.enabled||a._hasPointLabels){a.dlProcessOptions&&a.dlProcessOptions(d),i=a.plotGroup("dataLabelsGroup","data-labels","hidden",d.zIndex||6),!a.hasRendered&&bj(d.defer,!0)&&(i.attr({opacity:0}),u(a,"afterAnimate",function(){a.dataLabelsGroup.show()[b.animation?"animate":"attr"]({opacity:1},{duration:200})
})),g=d,M(e,function(x){var j,k=x.dataLabel,n,l,o=x.connector,s=!0;
f=x.options&&x.options.dataLabels;
j=bj(f&&f.enabled,g.enabled);
if(k&&!j){x.dataLabel=k.destroy()
}else{if(j){d=ak(g,f);
j=d.rotation;
n=x.getLabelConfig();
h=d.format?ar(d.format,n):d.formatter.call(n,d);
d.style.color=bj(d.color,d.style.color,a.color,"black");
if(k){if(av(h)){k.attr({text:h}),s=!1
}else{if(x.dataLabel=k=k.destroy(),o){x.connector=o.destroy()
}}}else{if(av(h)){k={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:j,padding:d.padding,zIndex:1};
for(l in k){k[l]===aC&&delete k[l]
}k=x.dataLabel=a.chart.renderer[j?"text":"label"](h,0,-999,null,null,null,d.useHTML).attr(k).css(G(d.style,c&&{cursor:c})).add(i).shadow(d.shadow)
}}k&&a.alignDataLabel(x,k,d,null,s)
}}})
}};
bQ.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=bj(a.plotX,-999),i=bj(a.plotY,-999),j=b.getBBox();
if(a=this.visible&&(a.series.forceDL||f.isInsidePlot(h,y(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g))){d=G({x:g?f.plotWidth-i:h,y:y(g?f.plotHeight-h:i),width:0,height:0},d),G(c,{width:j.width,height:j.height}),c.rotation?(g={align:c.align,x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](g)):(b.align(c,null,d),g=b.alignAttr,bj(c.overflow,"justify")==="justify"?this.justifyDataLabel(b,c,g,j,d,e):bj(c.crop,!0)&&(a=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)))
}if(!a){b.attr({y:-999}),b.placed=!1
}};
bQ.prototype.justifyDataLabel=function(e,f,g,h,i,j){var k=this.chart,a=f.align,b=f.verticalAlign,c,d;
c=g.x;
if(c<0){a==="right"?f.align="left":f.x=-c,d=!0
}c=g.x+h.width;
if(c>k.plotWidth){a==="left"?f.align="right":f.x=k.plotWidth-c,d=!0
}c=g.y;
if(c<0){b==="bottom"?f.verticalAlign="top":f.y=-c,d=!0
}c=g.y+h.height;
if(c>k.plotHeight){b==="top"?f.verticalAlign="bottom":f.y=k.plotHeight-c,d=!0
}if(d){e.placed=!j,e.align(f,null,i)
}};
if(bN.pie){bN.pie.prototype.drawDataLabels=function(){var e=this,bv=e.data,L,s=e.chart,n=e.options.dataLabels,bV=bj(n.connectorPadding,10),by=bj(n.connectorWidth,1),bz=s.plotWidth,s=s.plotHeight,j,bU,bu=bj(n.softConnector,!0),c=n.distance,bT=e.center,g=bT[2]/2,o=bT[1],f=c>0,x,d,l,h,bw=[[],[]],i,bY,a,bW,b,bx=[0,0,0,0],B=function(b0,bZ){return bZ.y-b0.y
};
if(e.visible&&(n.enabled||e._hasPointLabels)){bQ.prototype.drawDataLabels.apply(e);
M(bv,function(bZ){bZ.dataLabel&&bZ.visible&&bw[bZ.half].push(bZ)
});
for(bW=0;
!h&&bv[bW];
){h=bv[bW]&&bv[bW].dataLabel&&(bv[bW].dataLabel.getBBox().height||21),bW++
}for(bW=2;
bW--;
){var bv=[],bS=[],J=bw[bW],bX=J.length,k;
e.sortByAngle(J,bW-0.5);
if(c>0){for(b=o-g-c;
b<=o+g+c;
b+=h){bv.push(b)
}d=bv.length;
if(bX>d){L=[].concat(J);
L.sort(B);
for(b=bX;
b--;
){L[b].rank=b
}for(b=bX;
b--;
){J[b].rank>=d&&J.splice(b,1)
}bX=J.length
}for(b=0;
b<bX;
b++){L=J[b];
l=L.labelPos;
L=9999;
var bR,bt;
for(bt=0;
bt<d;
bt++){bR=bB(bv[bt]-l[1]),bR<L&&(L=bR,k=bt)
}if(k<b&&bv[b]!==null){k=b
}else{for(d<bX-b+k&&bv[b]!==null&&(k=d-bX+b);
bv[k]===null;
){k++
}}bS.push({i:k,y:bv[k]});
bv[k]=null
}bS.sort(B)
}for(b=0;
b<bX;
b++){L=J[b];
l=L.labelPos;
x=L.dataLabel;
a=L.visible===!1?"hidden":"visible";
L=l[1];
if(c>0){if(d=bS.pop(),k=d.i,bY=d.y,L>bY&&bv[k+1]!==null||L<bY&&bv[k-1]!==null){bY=L
}}else{bY=L
}i=n.justify?bT[0]+(bW?-1:1)*(g+c):e.getX(k===0||k===bv.length-1?L:bY,bW);
x._attr={visibility:a,align:l[6]};
x._pos={x:i+n.x+({left:bV,right:-bV}[l[6]]||0),y:bY+n.y-10};
x.connX=i;
x.connY=bY;
if(this.options.size===null){d=x.width,i-d<bV?bx[3]=Q(y(d-i+bV),bx[3]):i+d>bz-bV&&(bx[1]=Q(y(i+d-bz+bV),bx[1])),bY-h/2<0?bx[0]=Q(y(-bY+h/2),bx[0]):bY+h/2>s&&(bx[2]=Q(y(bY+h/2-s),bx[2]))
}}}if(bK(bx)===0||this.verifyDataLabelOverflow(bx)){this.placeDataLabels(),f&&by&&M(this.points,function(bZ){j=bZ.connector;
l=bZ.labelPos;
if((x=bZ.dataLabel)&&x._pos){a=x._attr.visibility,i=x.connX,bY=x.connY,bU=bu?["M",i+(l[6]==="left"?5:-5),bY,"C",i,bY,2*l[2]-l[4],2*l[3]-l[5],l[2],l[3],"L",l[4],l[5]]:["M",i+(l[6]==="left"?5:-5),bY,"L",l[2],l[3],"L",l[4],l[5]],j?(j.animate({d:bU}),j.attr("visibility",a)):bZ.connector=j=e.chart.renderer.path(bU).attr({"stroke-width":by,stroke:n.connectorColor||bZ.color||"#606060",visibility:a}).add(e.dataLabelsGroup)
}else{if(j){bZ.connector=j.destroy()
}}})
}}},bN.pie.prototype.placeDataLabels=function(){M(this.points,function(a){var a=a.dataLabel,b;
if(a){(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})
}})
},bN.pie.prototype.alignDataLabel=a9,bN.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c=c.minSize||80,f;
d[0]!==null?e=Q(b[2]-Q(a[1],a[3]),c):(e=Q(b[2]-a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);
d[1]!==null?e=Q(bl(e,b[2]-Q(a[0],a[2])),c):(e=Q(bl(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);
e<b[2]?(b[2]=e,this.translate(b),M(this.points,function(g){if(g.dataLabel){g.dataLabel._pos=null
}}),this.drawDataLabels&&this.drawDataLabels()):f=!0;
return f
}
}if(bN.column){bN.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>bj(this.translatedThreshold,f.plotSizeY),j=bj(c.inside,!!this.options.stacking);
if(h&&(d=ak(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),!j)){g?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)
}c.align=bj(c.align,!g||j?"center":i?"right":"left");
c.verticalAlign=bj(c.verticalAlign,g||j?"middle":i?"top":"bottom");
bQ.prototype.alignDataLabel.call(this,a,b,c,d,e)
}
}bi=aY.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(g){var h=g.target,i;
if(b.hoverSeries!==a){a.onMouseOver()
}for(;
h&&!i;
){i=h.point,h=h.parentNode
}if(i!==aC&&i!==b.hoverPoint){i.onMouseOver(g)
}};
M(a.points,function(g){if(g.graphic){g.graphic.element.point=g
}if(g.dataLabel){g.dataLabel.element.point=g
}});
if(!a._hasTracking){M(a.trackerGroups,function(g){if(a[g]&&(a[g].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(h){c.onTrackerMouseOut(h)
}).css(e),ao)){a[g].on("touchstart",f)
}}),a._hasTracking=!0
}},drawTrackerGraph:function(){var h=this,i=h.options,j=i.trackByArea,k=[].concat(j?h.areaPath:h.graphPath),l=k.length,n=h.chart,o=n.pointer,s=n.renderer,a=n.options.tooltip.snap,b=h.tracker,c=i.cursor,d=c&&{cursor:c},c=h.singlePoints,e,f=function(){if(n.hoverSeries!==h){h.onMouseOver()
}},g="rgba(192,192,192,"+(aS?0.0001:0.002)+")";
if(l&&!j){for(e=l+1;
e--;
){k[e]==="M"&&k.splice(e+1,0,k[e+1]-a,k[e+2],"L"),(e&&k[e]==="M"||e===l)&&k.splice(e,0,"L",k[e-2]+a,k[e-1])
}}for(e=0;
e<c.length;
e++){l=c[e],k.push("M",l.plotX-a,l.plotY,"L",l.plotX+a,l.plotY)
}b?b.attr({d:k}):(h.tracker=s.path(k).attr({"stroke-linejoin":"round",visibility:h.visible?"visible":"hidden",stroke:g,fill:j?g:aO,"stroke-width":i.lineWidth+(j?0:2*a),zIndex:2}).add(h.group),M([h.tracker,h.markerGroup],function(x){x.addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(B){o.onTrackerMouseOut(B)
}).css(d);
if(ao){x.on("touchstart",f)
}}))
}};
if(bN.column){ad.prototype.drawTracker=bi.drawTrackerPoint
}if(bN.pie){bN.pie.prototype.drawTracker=bi.drawTrackerPoint
}if(bN.scatter){an.prototype.drawTracker=bi.drawTrackerPoint
}G(ab.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;
(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");
b.css(f.options.itemHoverStyle)
}).on("mouseout",function(){b.css(a.visible?d:e);
a.setState()
}).on("click",function(g){var h=function(){a.setVisible()
},g={browserEvent:g};
a.firePointEvent?a.firePointEvent("legendItemClick",g,h):aN(a,"legendItemClick",g,h)
})
},createCheckboxForItem:function(a){a.checkbox=am("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);
u(a.checkbox,"click",function(b){aN(a,"checkboxClick",{checked:b.target.checked},function(){a.select()
})
})
}});
aj.legend.itemStyle.cursor="pointer";
G(W.prototype,{showResetZoom:function(){var a=this,b=aj.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";
this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()
},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)
},zoomOut:function(){var a=this;
aN(a,"selection",{resetSelection:!0},function(){a.zoom()
})
},zoom:function(a){var b,c=this.pointer,d=!1,e;
!a||a.resetSelection?M(this.axes,function(f){b=f.zoom()
}):M(a.xAxis.concat(a.yAxis),function(f){var g=f.axis,h=g.isXAxis;
if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"]){b=g.zoom(f.min,f.max),g.displayBtn&&(d=!0)
}});
e=this.resetZoomButton;
if(d&&!e){this.showResetZoom()
}else{if(!d&&a4(e)){this.resetZoomButton=e.destroy()
}}b&&this.redraw(bj(this.options.chart.animation,a&&a.animation,this.pointCount<100))
},pan:function(a,b){var c=this,d=c.hoverPoints,e;
d&&M(d,function(f){f.setState()
});
M(b==="xy"?[1,0]:[1],function(h){var i=a[h?"chartX":"chartY"],j=c[h?"xAxis":"yAxis"][0],k=c[h?"mouseDownX":"mouseDownY"],l=(j.pointRange||0)/2,f=j.getExtremes(),g=j.toValue(k-i,!0)+l,k=j.toValue(k+c[h?"plotWidth":"plotHeight"]-i,!0)-l;
j.series.length&&g>bl(f.dataMin,f.min)&&k<Q(f.dataMax,f.max)&&(j.setExtremes(g,k,!1,!1,{trigger:"pan"}),e=!0);
c[h?"mouseDownX":"mouseDownY"]=i
});
e&&c.redraw(!1);
aJ(c.container,{cursor:"move"})
}});
G(Y.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=bj(a,!c.selected);
c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;
d.options.data[bI(c,d.data)]=c.options;
c.setState(a&&"select");
b||M(e.getSelectedPoints(),function(f){if(f.selected&&f!==c){f.selected=f.options.selected=!1,d.options.data[bI(f,d.data)]=f.options,f.setState(""),f.firePointEvent("unselect")
}})
})
},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;
if(e&&e!==this){e.onMouseOut()
}this.firePointEvent("mouseOver");
d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);
this.setState("hover");
c.hoverPoint=this
},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;
if(!b||bI(this,b)===-1){this.firePointEvent("mouseOut"),this.setState(),a.hoverPoint=null
}},importEvents:function(){if(!this.hasImportedEvents){var a=ak(this.series.options.point,this.options).events,b;
this.events=a;
for(b in a){u(this,b,a[b])
}this.hasImportedEvents=!0
}},setState:function(h,i){var j=this.plotX,k=this.plotY,l=this.series,n=l.options.states,o=aK[l.type].marker&&l.options.marker,s=o&&!o.enabled,a=o&&o.states[h],b=a&&a.enabled===!1,c=l.stateMarkerGraphic,d=this.marker||{},e=l.chart,f=l.halo,g,h=h||"";
g=this.pointAttr[h]||l.pointAttr[h];
if(!(h===this.state&&!i||this.selected&&h!=="select"||n[h]&&n[h].enabled===!1||h&&(b||s&&a.enabled===!1)||h&&d.states&&d.states[h]&&d.states[h].enabled===!1)){if(this.graphic){o=o&&this.graphic.symbolName&&g.r,this.graphic.attr(ak(g,o?{x:j-o,y:k-o,width:2*o,height:2*o}:{})),c&&c.hide()
}else{if(h&&a){if(o=a.radius,d=d.symbol||l.symbol,c&&c.currentSymbol!==d&&(c=c.destroy()),c){c[i?"animate":"attr"]({x:j-o,y:k-o})
}else{if(d){l.stateMarkerGraphic=c=e.renderer.symbol(d,j-o,k-o,2*o,2*o).attr(g).add(l.markerGroup),c.currentSymbol=d
}}}if(c){c[h&&e.isInsidePlot(j,k,e.inverted)?"show":"hide"]()
}}if((j=n[h]&&n[h].halo)&&j.size){if(!f){l.halo=f=e.renderer.path().add(l.seriesGroup)
}f.attr(G({fill:bs(this.color||l.color).setOpacity(j.opacity).get()},j.attributes))[i?"animate":"attr"]({d:this.haloPath(j.size)})
}else{f&&f.attr({d:[]})
}this.state=h
}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;
return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,a*2,a*2)
}});
G(bQ.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;
if(b&&b!==this){b.onMouseOut()
}this.options.events.mouseOver&&aN(this,"mouseOver");
this.setState("hover");
a.hoverSeries=this
},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;
if(d){d.onMouseOut()
}this&&a.events.mouseOut&&aN(this,"mouseOut");
c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();
this.setState();
b.hoverSeries=null
},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth,a=a||"";
if(this.state!==a){this.state=a,e[a]&&e[a].enabled===!1||(a&&(b=e[a].lineWidth||b+1),c&&!c.dashstyle&&(a={"stroke-width":b},c.attr(a),d&&d.attr(a)))
}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;
f=(c.visible=a=c.userOptions.visible=a===aC?!h:a)?"show":"hide";
M(["group","dataLabelsGroup","markerGroup","tracker"],function(i){if(c[i]){c[i][f]()
}});
if(d.hoverSeries===c){c.onMouseOut()
}e&&d.legend.colorizeItem(c,a);
c.isDirty=!0;
c.options.stacking&&M(d.series,function(i){if(i.options.stacking&&i.visible){i.isDirty=!0
}});
M(c.linkedSeries,function(i){i.setVisible(a,!1)
});
if(g){d.isDirtyBox=!0
}b!==!1&&d.redraw();
aN(c,f)
},setTooltipPoints:function(a){var b=[],c,d,e=this.xAxis,f=e&&e.getExtremes(),g=e?e.tooltipLen||e.len:this.chart.plotSizeX,h,i,j=[];
if(!(this.options.enableMouseTracking===!1||this.singularTooltips)){if(a){this.tooltipPoints=null
}M(this.segments||this.points,function(k){b=b.concat(k)
});
e&&e.reversed&&(b=b.reverse());
this.orderTooltipPoints&&this.orderTooltipPoints(b);
a=b.length;
for(i=0;
i<a;
i++){if(e=b[i],c=e.x,c>=f.min&&c<=f.max){h=b[i+1];
c=d===aC?0:d+1;
for(d=b[i+1]?bl(Q(0,bP((e.clientX+(h?h.wrappedClientX||h.clientX:g))/2)),g):g;
c>=0&&c<=d;
){j[c++]=e
}}}this.tooltipPoints=j
}},show:function(){this.setVisible(!0)
},hide:function(){this.setVisible(!1)
},select:function(a){this.selected=a=a===aC?!this.selected:a;
if(this.checkbox){this.checkbox.checked=a
}aN(this,a?"select":"unselect")
},drawTracker:bi.drawTrackerGraph});
G(aY,{Axis:I,Chart:W,Color:bs,Point:Y,Tick:bO,Renderer:Z,Series:bQ,SVGElement:aF,SVGRenderer:t,arrayMin:D,arrayMax:bK,charts:be,dateFormat:H,format:ar,pathAnim:bJ,getOptions:function(){return aj
},hasBidiBug:az,isTouchDevice:bg,numberFormat:S,seriesTypes:bN,setOptions:function(a){aj=ak(!0,aj,a);
aX();
return aj
},addEvent:u,removeEvent:N,createElement:am,discardElement:bf,css:aJ,each:M,extend:G,map:r,merge:ak,pick:bj,splat:aI,extendClass:T,pInt:a8,wrap:aa,svg:aS,canvas:bL,vml:!aS&&!bL,product:"Highcharts",version:"4.0.1"})
})();