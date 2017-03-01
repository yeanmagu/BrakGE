(function(){var bg,bh=document,bC=window,D=Math,c=D.round,I=D.floor,Z=D.ceil,b4=D.max,j=D.min,a4=D.abs,a5=D.cos,a0=D.sin,y=D.PI,H=y*2/360,aZ=navigator.userAgent,au=bC.opera,aE=/msie/i.test(aZ)&&!au,bd=bh.documentMode===8,bW=/AppleWebKit/.test(aZ),bw=/Firefox/.test(aZ),p=/(Mobile|Android|Windows Phone)/.test(aZ),aT="http://www.w3.org/2000/svg",K=!!bh.createElementNS&&!!bh.createElementNS(aT,"svg").createSVGRect,bA=bw&&parseInt(aZ.split("Firefox/")[1],10)<4,aQ=!K&&!aE&&!!bh.createElement("canvas").getContext,bp,bF,aW={},E=0,ag,bs,aV,aq,aJ,aH,aj=function(){},l=[],aN=0,u="Highcharts",an="4.0.1",b8="div",a="absolute",af="relative",F="hidden",Y="highcharts-",m="visible",k="px",aP="none",A="M",e="L",be=/^[0-9]+$/,bu="",i="hover",aR="select",av="millisecond",bc="second",q="minute",ai="hour",ac="day",aX="week",h="month",am="year",bv,f="stroke-width",bT,bS,w,ab,aI,bt,b0,r,O,bq,aU,J,d,G={};
var U=bC.Highcharts=bC.Highcharts?bM(16,true):{};
function bb(L,M){var b9;
if(!L){L={}
}for(b9 in M){L[b9]=M[b9]
}return L
}function bR(){var M,cb=arguments,b9,ca={},L=function(cc,ce){var cf,cd;
if(typeof cc!=="object"){cc={}
}for(cd in ce){if(ce.hasOwnProperty(cd)){cf=ce[cd];
if(cf&&typeof cf==="object"&&Object.prototype.toString.call(cf)!=="[object Array]"&&cd!=="renderTo"&&typeof cf.nodeType!=="number"){cc[cd]=L(cc[cd]||{},cf)
}else{cc[cd]=ce[cd]
}}}return cc
};
if(cb[0]===true){ca=cb[1];
cb=Array.prototype.slice.call(cb,2)
}b9=cb.length;
for(M=0;
M<b9;
M++){ca=L(ca,cb[M])
}return ca
}function bN(){var M=0,L=arguments,b9=L.length,ca={};
for(;
M<b9;
M++){ca[L[M++]]=L[M]
}return ca
}function a6(M,L){return parseInt(M,L||10)
}function aF(L){return typeof L==="string"
}function bI(L){return typeof L==="object"
}function P(L){return Object.prototype.toString.call(L)==="[object Array]"
}function aD(L){return typeof L==="number"
}function ae(L){return D.log(L)/D.LN10
}function bE(L){return D.pow(10,L)
}function bi(L,b9){var M=L.length;
while(M--){if(L[M]===b9){L.splice(M,1);
break
}}}function V(L){return L!==bg&&L!==null
}function N(cb,M,ca){var L,b9;
if(aF(M)){if(V(ca)){cb.setAttribute(M,ca)
}else{if(cb&&cb.getAttribute){b9=cb.getAttribute(M)
}}}else{if(V(M)&&bI(M)){for(L in M){cb.setAttribute(L,M[L])
}}}return b9
}function bK(L){return P(L)?L:[L]
}function R(){var M=arguments,b9,L,ca=M.length;
for(b9=0;
b9<ca;
b9++){L=M[b9];
if(typeof L!=="undefined"&&L!==null){return L
}}}function bO(L,M){if(aE&&!K){if(M&&M.opacity!==bg){M.filter="alpha(opacity="+(M.opacity*100)+")"
}}bb(L.style,M)
}function a9(cc,L,cb,ca,b9){var M=bh.createElement(cc);
if(L){bb(M,L)
}if(b9){bO(M,{padding:0,border:aP,margin:0})
}if(cb){bO(M,cb)
}if(ca){ca.appendChild(M)
}return M
}function aB(b9,L){var M=function(){};
M.prototype=new b9();
bb(M.prototype,L);
return M
}function at(cf,b9,ca,ci){var cd=bs.lang,ce=+cf||0,L=b9===-1?(ce.toString().split(".")[1]||"").length:(isNaN(b9=a4(b9))?2:b9),M=ca===undefined?cd.decimalPoint:ca,ch=ci===undefined?cd.thousandsSep:ci,cg=ce<0?"-":"",cb=String(a6(ce=a4(ce).toFixed(L))),cc=cb.length>3?cb.length%3:0;
return cg+(cc?cb.substr(0,cc)+ch:"")+cb.substr(cc).replace(/(\d{3})(?=\d)/g,"$1"+ch)+(L?M+a4(ce-cb).toFixed(L).slice(2):"")
}function aL(M,L){return new Array((L||2)+1-String(M).length).join(0)+M
}function b7(b9,M,L){var ca=b9[M];
b9[M]=function(){var cb=Array.prototype.slice.call(arguments);
cb.unshift(ca);
return L.apply(this,cb)
}
}aV=function(cd,M,b9){if(!V(M)||isNaN(M)){return"Invalid date"
}cd=R(cd,"%Y-%m-%d %H:%M:%S");
var ca=new Date(M-bS),cg,cf=ca[ab](),cb=ca[aI](),cc=ca[bt](),cj=ca[b0](),ce=ca[r](),ch=bs.lang,ci=ch.weekdays,L=bb({a:ci[cb].substr(0,3),A:ci[cb],d:aL(cc),e:cc,b:ch.shortMonths[cj],B:ch.months[cj],m:aL(cj+1),y:ce.toString().substr(2,2),Y:ce,H:aL(cf),I:aL((cf%12)||12),l:(cf%12)||12,M:aL(ca[w]()),p:cf<12?"AM":"PM",P:cf<12?"am":"pm",S:aL(ca.getSeconds()),L:aL(c(M%1000),3)},U.dateFormats);
for(cg in L){while(cd.indexOf("%"+cg)!==-1){cd=cd.replace("%"+cg,typeof L[cg]==="function"?L[cg](M):L[cg])
}}return b9?cd.substr(0,1).toUpperCase()+cd.substr(1):cd
};
function bB(ca,cc){var b9=/f$/,M=/\.([0-9])/,cb=bs.lang,L;
if(b9.test(ca)){L=ca.match(M);
L=L?L[1]:-1;
if(cc!==null){cc=at(cc,L,cb.decimalPoint,ca.indexOf(",")>-1?cb.thousandsSep:"")
}}else{cc=aV(ca,cc)
}return cc
}function ay(cg,L){var cf="{",ca=false,ce,ci,cc,M,cb,cd=[],ch,b9;
while((b9=cg.indexOf(cf))!==-1){ce=cg.slice(0,b9);
if(ca){ci=ce.split(":");
cc=ci.shift().split(".");
cb=cc.length;
ch=L;
for(M=0;
M<cb;
M++){ch=ch[cc[M]]
}if(ci.length){ch=bB(ci.join(":"),ch)
}cd.push(ch)
}else{cd.push(ce)
}cg=cg.slice(b9+1);
ca=!ca;
cf=ca?"}":"{"
}cd.push(cg);
return cd.join("")
}function bG(L){return D.pow(10,I(D.log(L)/D.LN10))
}function W(M,ca,b9,cc){var cb,L;
b9=R(b9,1);
cb=M/b9;
if(!ca){ca=[1,2,2.5,5,10];
if(cc&&cc.allowDecimals===false){if(b9===1){ca=[1,2,5,10]
}else{if(b9<=0.1){ca=[1/b9]
}}}}for(L=0;
L<ca.length;
L++){M=ca[L];
if(cb<=(ca[L]+(ca[L+1]||ca[L]))/2){break
}}M*=b9;
return M
}function Q(){this.color=0;
this.symbol=0
}Q.prototype={wrapColor:function(L){if(this.color>=L){this.color=0
}},wrapSymbol:function(L){if(this.symbol>=L){this.symbol=0
}}};
function aK(cb,b9){var M=cb.length,ca,L;
for(L=0;
L<M;
L++){cb[L].ss_i=L
}cb.sort(function(cc,cd){ca=b9(cc,cd);
return ca===0?cc.ss_i-cd.ss_i:ca
});
for(L=0;
L<M;
L++){delete cb[L].ss_i
}}function z(L){var M=L.length,b9=L[0];
while(M--){if(L[M]<b9){b9=L[M]
}}return b9
}function bn(L){var M=L.length,b9=L[0];
while(M--){if(L[M]>b9){b9=L[M]
}}return b9
}function bV(b9,L){var M;
for(M in b9){if(b9[M]&&b9[M]!==L&&b9[M].destroy){b9[M].destroy()
}delete b9[M]
}}function X(L){if(!ag){ag=a9(b8)
}if(L){ag.appendChild(L)
}ag.innerHTML=""
}function bM(L,b9){var M="Highcharts error #"+L+": www.highcharts.com/errors/"+L;
if(b9){throw M
}else{if(bC.console){console.log(M)
}}}function bk(L){return parseFloat(L.toPrecision(14))
}function aA(L,M){aq=R(L,M.animation)
}aH=bN(av,1,bc,1000,q,60000,ai,3600000,ac,24*3600000,aX,7*24*3600000,h,31*24*3600000,am,31556952000);
aJ={init:function(M,cc,ck){cc=cc||"";
var cf=M.shift,L=cc.indexOf("C")>-1,ce=L?7:3,cb,ch,cd,ci=cc.split(" "),b9=[].concat(ck),cj,ca,cg=function(cl){cd=cl.length;
while(cd--){if(cl[cd]===A){cl.splice(cd+1,0,cl[cd+1],cl[cd+2],cl[cd+1],cl[cd+2])
}}};
if(L){cg(ci);
cg(b9)
}if(M.isArea){cj=ci.splice(ci.length-6,6);
ca=b9.splice(b9.length-6,6)
}if(cf<=b9.length/ce&&ci.length===b9.length){while(cf--){b9=[].concat(b9).splice(0,ce).concat(b9)
}}M.shift=0;
if(ci.length){cb=b9.length;
while(ci.length<cb){ch=[].concat(ci).splice(ci.length-ce,ce);
if(L){ch[ce-6]=ch[ce-2];
ch[ce-5]=ch[ce-1]
}ci=ci.concat(ch)
}}if(cj){ci=ci.concat(cj);
b9=b9.concat(ca)
}return[ci,b9]
},step:function(cc,M,ca,L){var cb=[],b9=cc.length,cd;
if(ca===1){cb=L
}else{if(b9===M.length&&ca<1){while(b9--){cd=parseFloat(cc[b9]);
cb[b9]=isNaN(cd)?cc[b9]:ca*(parseFloat(M[b9]-cd))+cd
}}else{cb=M
}}return cb
}};
(function(L){bC.HighchartsAdapter=bC.HighchartsAdapter||(L&&{init:function(cb){var b9=L.fx,cd=b9.step,M,ce=L.Tween,cc=ce&&ce.propHooks,ca=L.cssHooks.opacity;
L.extend(L.easing,{easeOutQuad:function(cj,ci,cf,cg,ch){return -cg*(ci/=ch)*(ci-2)+cf
}});
L.each(["cur","_default","width","height","opacity"],function(ch,cg){var ci=cd,cf;
if(cg==="cur"){ci=b9.prototype
}else{if(cg==="_default"&&ce){ci=cc[cg];
cg="set"
}}cf=ci[cg];
if(cf){ci[cg]=function(ck){var cj;
ck=ch?ck:this;
if(ck.prop==="align"){return
}cj=ck.elem;
return cj.attr?cj.attr(ck.prop,cg==="cur"?bg:ck.now):cf.apply(this,arguments)
}
}});
b7(ca,"get",function(ch,cg,cf){return cg.attr?(cg.opacity||0):ch.call(this,cg,cf)
});
M=function(ch){var cf=ch.elem,cg;
if(!ch.started){cg=cb.init(cf,cf.d,cf.toD);
ch.start=cg[0];
ch.end=cg[1];
ch.started=true
}cf.attr("d",cb.step(ch.start,ch.end,ch.pos,cf.toD))
};
if(ce){cc.d={set:M}
}else{cd.d=M
}this.each=Array.prototype.forEach?function(cf,cg){return Array.prototype.forEach.call(cf,cg)
}:function(cf,cg){var ch=0,ci=cf.length;
for(;
ch<ci;
ch++){if(cg.call(cf[ch],cf[ch],ch,cf)===false){return ch
}}};
L.fn.highcharts=function(){var ch="Chart",cf=arguments,ci,cj,cg;
if(this[0]){if(aF(cf[0])){ch=cf[0];
cf=Array.prototype.slice.call(cf,1)
}ci=cf[0];
if(ci!==bg){ci.chart=ci.chart||{};
ci.chart.renderTo=this[0];
cg=new U[ch](ci,cf[1]);
cj=this
}if(ci===bg){cj=l[N(this[0],"data-highcharts-chart")]
}}return cj
}
},getScript:L.getScript,inArray:L.inArray,adapterRun:function(M,b9){return L(M)[b9]()
},grep:L.grep,map:function(ca,cb){var b9=[],cc=0,M=ca.length;
for(;
cc<M;
cc++){b9[cc]=cb.call(ca[cc],ca[cc],cc,ca)
}return b9
},offset:function(M){return L(M).offset()
},addEvent:function(M,b9,ca){L(M).bind(b9,ca)
},removeEvent:function(M,b9,cb){var ca=bh.removeEventListener?"removeEventListener":"detachEvent";
if(bh[ca]&&M&&!M[ca]){M[ca]=function(){}
}L(M).unbind(b9,cb)
},fireEvent:function(cb,ce,cd,M){var cc=L.Event(ce),ca="detached"+ce,b9;
if(!aE&&cd){delete cd.layerX;
delete cd.layerY;
delete cd.returnValue
}bb(cc,cd);
if(cb[ce]){cb[ca]=cb[ce];
cb[ce]=null
}L.each(["preventDefault","stopPropagation"],function(ch,cg){var cf=cc[cg];
cc[cg]=function(){try{cf.call(cc)
}catch(ci){if(cg==="preventDefault"){b9=true
}}}
});
L(cb).trigger(cc);
if(cb[ca]){cb[ce]=cb[ca];
cb[ca]=null
}if(M&&!cc.isDefaultPrevented()&&!b9){M(cc)
}},washMouseEvent:function(M){var b9=M.originalEvent||M;
if(b9.pageX===bg){b9.pageX=M.pageX;
b9.pageY=M.pageY
}return b9
},animate:function(b9,cb,ca){var M=L(b9);
if(!b9.style){b9.style={}
}if(cb.d){b9.toD=cb.d;
cb.d=1
}M.stop();
if(cb.opacity!==bg&&b9.attr){cb.opacity+="px"
}M.animate(cb,ca)
},stop:function(M){L(M).stop()
}})
}(bC.jQuery));
var t=bC.HighchartsAdapter,a8=t||{};
if(t){t.init.call(t,aJ)
}var aG=a8.adapterRun,al=a8.getScript,bZ=a8.inArray,T=a8.each,bL=a8.grep,bD=a8.offset,a7=a8.map,bx=a8.addEvent,b=a8.removeEvent,x=a8.fireEvent,a3=a8.washMouseEvent,bP=a8.animate,bJ=a8.stop;
var C={enabled:true,x:0,y:15,style:{color:"#606060",cursor:"default",fontSize:"11px"}};
bs={colors:["#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#8085e8","#8d4653","#91e8e1"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",numericSymbols:["k","M","G","T","P","E"],resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:true,canvasToolsURL:"http://code.highcharts.com/4.0.1/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.0.1/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:true,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:false,showCheckbox:false,animation:{duration:1000},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:true},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:bR(C,{align:"center",enabled:false,formatter:function(){return this.y===null?"":at(this.y,-1)
},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:true,turboThreshold:1000}},labels:{style:{position:a,color:"#3E576F"}},legend:{enabled:true,align:"center",layout:"horizontal",labelFormatter:function(){return this.name
},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:false,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:a,width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:af,top:"1em"},style:{position:a,backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:true,animation:K,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',shadow:true,snap:p?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:true,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};
var b1=bs.plotOptions,ap=b1.line;
bX();
function bX(){var b9=bs.global.useUTC,L=b9?"getUTC":"get",M=b9?"setUTC":"set";
bS=((b9&&bs.global.timezoneOffset)||0)*60000;
bT=b9?Date.UTC:function(cf,cd,ca,cb,cc,ce){return new Date(cf,cd,R(ca,1),R(cb,0),R(cc,0),R(ce,0)).getTime()
};
w=L+"Minutes";
ab=L+"Hours";
aI=L+"Day";
bt=L+"Date";
b0=L+"Month";
r=L+"FullYear";
O=M+"Minutes";
bq=M+"Hours";
aU=M+"Date";
J=M+"Month";
d=M+"FullYear"
}function bm(L){bs=bR(true,bs,L);
bX();
return bs
}function b5(){return bs
}var az=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,bf=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,ar=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/;
var o=function(ca){var cc=[],cb,ce;
function b9(cf){if(cf&&cf.stops){ce=a7(cf.stops,function(cg){return o(cg[1])
})
}else{cb=az.exec(cf);
if(cb){cc=[a6(cb[1]),a6(cb[2]),a6(cb[3]),parseFloat(cb[4],10)]
}else{cb=bf.exec(cf);
if(cb){cc=[a6(cb[1],16),a6(cb[2],16),a6(cb[3],16),1]
}else{cb=ar.exec(cf);
if(cb){cc=[a6(cb[1]),a6(cb[2]),a6(cb[3]),1]
}}}}}function M(cf){var cg;
if(ce){cg=bR(ca);
cg.stops=[].concat(cg.stops);
T(ce,function(ci,ch){cg.stops[ch]=[cg.stops[ch][0],ci.get(cf)]
})
}else{if(cc&&!isNaN(cc[0])){if(cf==="rgb"){cg="rgb("+cc[0]+","+cc[1]+","+cc[2]+")"
}else{if(cf==="a"){cg=cc[3]
}else{cg="rgba("+cc.join(",")+")"
}}}else{cg=ca
}}return cg
}function L(cf){if(ce){T(ce,function(ch){ch.brighten(cf)
})
}else{if(aD(cf)&&cf!==0){var cg;
for(cg=0;
cg<3;
cg++){cc[cg]+=a6(cf*255);
if(cc[cg]<0){cc[cg]=0
}if(cc[cg]>255){cc[cg]=255
}}}}return this
}function cd(cf){cc[3]=cf;
return this
}b9(ca);
return{get:M,brighten:L,rgba:cc,setOpacity:cd}
};
function aa(){}aa.prototype={init:function(M,L){var b9=this;
b9.element=L==="span"?a9(L):bh.createElementNS(aT,L);
b9.renderer=M
},opacity:1,animate:function(ca,b9,M){var L=R(b9,aq,true);
bJ(this);
if(L){L=bR(L,{});
if(M){L.complete=M
}bP(this,ca,L)
}else{this.attr(ca);
if(M){M()
}}},colorGradient:function(L,ch,b9){var cj=this.renderer,M,cd,ca,cc,cb,cm,ck,cl,ci,cg,ce,cf=[];
if(L.linearGradient){cd="linearGradient"
}else{if(L.radialGradient){cd="radialGradient"
}}if(cd){ca=L[cd];
cc=cj.gradients;
cm=L.stops;
ci=b9.radialReference;
if(P(ca)){L[cd]=ca={x1:ca[0],y1:ca[1],x2:ca[2],y2:ca[3],gradientUnits:"userSpaceOnUse"}
}if(cd==="radialGradient"&&ci&&!V(ca.gradientUnits)){ca=bR(ca,{cx:(ci[0]-ci[2]/2)+ca.cx*ci[2],cy:(ci[1]-ci[2]/2)+ca.cy*ci[2],r:ca.r*ci[2],gradientUnits:"userSpaceOnUse"})
}for(cg in ca){if(cg!=="id"){cf.push(cg,ca[cg])
}}for(cg in cm){cf.push(cm[cg])
}cf=cf.join(",");
if(cc[cf]){ce=cc[cf].attr("id")
}else{ca.id=ce=Y+E++;
cc[cf]=cb=cj.createElement(cd).attr(ca).add(cj.defs);
cb.stops=[];
T(cm,function(cn){var co;
if(cn[1].indexOf("rgba")===0){M=o(cn[1]);
ck=M.get("rgb");
cl=M.get("a")
}else{ck=cn[1];
cl=1
}co=cj.createElement("stop").attr({offset:cn[0],"stop-color":ck,"stop-opacity":cl}).add(cb);
cb.stops.push(co)
})
}b9.setAttribute(ch,"url("+cj.url+"#"+ce+")")
}},attr:function(M,cd){var ca,ce,L=this.element,b9,cb=this,cc;
if(typeof M==="string"&&cd!==bg){ca=M;
M={};
M[ca]=cd
}if(typeof M==="string"){cb=(this[M+"Getter"]||this._defaultGetter).call(this,M,L)
}else{for(ca in M){ce=M[ca];
cc=false;
if(this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(ca)){if(!b9){this.symbolAttr(M);
b9=true
}cc=true
}if(this.rotation&&(ca==="x"||ca==="y")){this.doTransform=true
}if(!cc){(this[ca+"Setter"]||this._defaultSetter).call(this,ce,ca,L)
}if(this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(ca)){this.updateShadows(ca,ce)
}}if(this.doTransform){this.updateTransform();
this.doTransform=false
}}return cb
},updateShadows:function(M,ca){var b9=this.shadows,L=b9.length;
while(L--){b9[L].setAttribute(M,M==="height"?b4(ca-(b9[L].cutHeight||0),0):M==="d"?this.d:ca)
}},addClass:function(L){var b9=this.element,M=N(b9,"class")||"";
if(M.indexOf(L)===-1){N(b9,"class",M+" "+L)
}return this
},symbolAttr:function(L){var M=this;
T(["x","y","r","start","end","width","height","innerR","anchorX","anchorY"],function(b9){M[b9]=R(L[b9],M[b9])
});
M.attr({d:M.renderer.symbols[M.symbolName](M.x,M.y,M.width,M.height,M)})
},clip:function(L){return this.attr("clip-path",L?"url("+this.renderer.url+"#"+L.id+")":aP)
},crisp:function(ca){var cc=this,M,L={},b9,cb=ca.strokeWidth||cc.strokeWidth||(cc.attr&&cc.attr("stroke-width"))||0;
b9=c(cb)%2/2;
ca.x=I(ca.x||cc.x||0)+b9;
ca.y=I(ca.y||cc.y||0)+b9;
ca.width=I((ca.width||cc.width||0)-2*b9);
ca.height=I((ca.height||cc.height||0)-2*b9);
ca.strokeWidth=cb;
for(M in ca){if(cc[M]!==ca[M]){cc[M]=L[M]=ca[M]
}}return L
},css:function(b9){var cc=this,L=cc.styles,cg={},cb=cc.element,ca,cf,M="",ce,cd=!L;
if(b9&&b9.color){b9.fill=b9.color
}if(L){for(cf in b9){if(b9[cf]!==L[cf]){cg[cf]=b9[cf];
cd=true
}}}if(cd){ca=cc.textWidth=b9&&b9.width&&cb.nodeName.toLowerCase()==="text"&&a6(b9.width);
if(L){b9=bb(L,cg)
}cc.styles=b9;
if(ca&&(aQ||(!K&&cc.renderer.forExport))){delete b9.width
}if(aE&&!K){bO(cc.element,b9)
}else{ce=function(ch,ci){return"-"+ci.toLowerCase()
};
for(cf in b9){M+=cf.replace(/([A-Z])/g,ce)+":"+b9[cf]+";"
}N(cb,"style",M)
}if(ca&&cc.added){cc.renderer.buildText(cc)
}}return cc
},on:function(M,b9){var ca=this,L=ca.element;
if(bF&&M==="click"){L.ontouchstart=function(cb){ca.touchEventFired=Date.now();
cb.preventDefault();
b9.call(L,cb)
};
L.onclick=function(cb){if(aZ.indexOf("Android")===-1||Date.now()-(ca.touchEventFired||0)>1100){b9.call(L,cb)
}}
}else{L["on"+M]=b9
}return this
},setRadialReference:function(L){this.element.radialReference=L;
return this
},translate:function(L,M){return this.attr({translateX:L,translateY:M})
},invert:function(){var L=this;
L.inverted=true;
L.updateTransform();
return L
},updateTransform:function(){var cc=this,ca=cc.translateX||0,cb=cc.translateY||0,L=cc.scaleX,M=cc.scaleY,ce=cc.inverted,cf=cc.rotation,cd=cc.element,b9;
if(ce){ca+=cc.attr("width");
cb+=cc.attr("height")
}b9=["translate("+ca+","+cb+")"];
if(ce){b9.push("rotate(90) scale(-1,1)")
}else{if(cf){b9.push("rotate("+cf+" "+(cd.getAttribute("x")||0)+" "+(cd.getAttribute("y")||0)+")")
}}if(V(L)||V(M)){b9.push("scale("+R(L,1)+" "+R(M,1)+")")
}if(b9.length){cd.setAttribute("transform",b9.join(" "))
}},toFront:function(){var L=this.element;
L.parentNode.appendChild(L);
return this
},align:function(cf,cd,L){var cc,b9,ca,cb,ch={},cg,M=this.renderer,ce=M.alignedObjects;
if(cf){this.alignOptions=cf;
this.alignByTranslate=cd;
if(!L||aF(L)){this.alignTo=cg=L||"renderer";
bi(ce,this);
ce.push(this);
L=null
}}else{cf=this.alignOptions;
cd=this.alignByTranslate;
cg=this.alignTo
}L=R(L,M[cg],M);
cc=cf.align;
b9=cf.verticalAlign;
ca=(L.x||0)+(cf.x||0);
cb=(L.y||0)+(cf.y||0);
if(cc==="right"||cc==="center"){ca+=(L.width-(cf.width||0))/{right:1,center:2}[cc]
}ch[cd?"translateX":"x"]=c(ca);
if(b9==="bottom"||b9==="middle"){cb+=(L.height-(cf.height||0))/({bottom:1,middle:2}[b9]||1)
}ch[cd?"translateY":"y"]=c(cb);
this[this.placed?"animate":"attr"](ch);
this.placed=true;
this.alignAttr=ch;
return this
},getBBox:function(){var ci=this,L=ci.bBox,cd=ci.renderer,ch,cb,ce=ci.rotation,ca=ci.element,cf=ci.styles,cc=ce*H,cg=ci.textStr,M;
if(cg===""||be.test(cg)){M="num."+cg.toString().length+(cf?("|"+cf.fontSize+"|"+cf.fontFamily):"")
}if(M){L=cd.cache[M]
}if(!L){if(ca.namespaceURI===aT||cd.forExport){try{L=ca.getBBox?bb({},ca.getBBox()):{width:ca.offsetWidth,height:ca.offsetHeight}
}catch(b9){}if(!L||L.width<0){L={width:0,height:0}
}}else{L=ci.htmlGetBBox()
}if(cd.isSVG){ch=L.width;
cb=L.height;
if(aE&&cf&&cf.fontSize==="11px"&&cb.toPrecision(3)==="16.9"){L.height=cb=14
}if(ce){L.width=a4(cb*a0(cc))+a4(ch*a5(cc));
L.height=a4(cb*a5(cc))+a4(ch*a0(cc))
}}ci.bBox=L;
if(M){cd.cache[M]=L
}}return L
},show:function(L){if(L&&this.element.namespaceURI===aT){this.element.removeAttribute("visibility");
return this
}else{return this.attr({visibility:L?"inherit":m})
}},hide:function(){return this.attr({visibility:F})
},fadeOut:function(L){var M=this;
M.animate({opacity:0},{duration:L||150,complete:function(){M.hide()
}})
},add:function(L){var ca=this.renderer,b9=L||ca,M=b9.element||ca.box,cc,cd=this.element,cb=this.zIndex,cg,ch,ce,cf;
if(L){this.parentGroup=L
}this.parentInverted=L&&L.inverted;
if(this.textStr!==undefined){ca.buildText(this)
}if(cb){b9.handleZ=true;
cb=a6(cb)
}if(b9.handleZ){cc=M.childNodes;
for(ce=0;
ce<cc.length;
ce++){cg=cc[ce];
ch=N(cg,"zIndex");
if(cg!==cd&&(a6(ch)>cb||(!V(cb)&&V(ch)))){M.insertBefore(cd,cg);
cf=true;
break
}}}if(!cf){M.appendChild(cd)
}this.added=true;
if(this.onAdd){this.onAdd()
}return this
},safeRemoveChild:function(L){var M=L.parentNode;
if(M){M.removeChild(L)
}},destroy:function(){var cd=this,L=cd.element||{},cc=cd.shadows,cb=cd.renderer.isSVG&&L.nodeName==="SPAN"&&cd.parentGroup,M,ca,b9;
L.onclick=L.onmouseout=L.onmouseover=L.onmousemove=L.point=null;
bJ(cd);
if(cd.clipPath){cd.clipPath=cd.clipPath.destroy()
}if(cd.stops){for(b9=0;
b9<cd.stops.length;
b9++){cd.stops[b9]=cd.stops[b9].destroy()
}cd.stops=null
}cd.safeRemoveChild(L);
if(cc){T(cc,function(ce){cd.safeRemoveChild(ce)
})
}while(cb&&cb.div.childNodes.length===0){M=cb.parentGroup;
cd.safeRemoveChild(cb.div);
delete cb.div;
cb=M
}if(cd.alignTo){bi(cd.renderer.alignedObjects,cd)
}for(ca in cd){delete cd[ca]
}return null
},shadow:function(L,ce,cc){var M=[],cf,cg,cd=this.element,ca,b9,ch,cb;
if(L){b9=R(L.width,3);
ch=(L.opacity||0.15)/b9;
cb=this.parentInverted?"(-1,-1)":"("+R(L.offsetX,1)+", "+R(L.offsetY,1)+")";
for(cf=1;
cf<=b9;
cf++){cg=cd.cloneNode(0);
ca=(b9*2)+1-(2*cf);
N(cg,{isShadow:"true",stroke:L.color||"black","stroke-opacity":ch*cf,"stroke-width":ca,transform:"translate"+cb,fill:aP});
if(cc){N(cg,"height",b4(N(cg,"height")-ca,0));
cg.cutHeight=ca
}if(ce){ce.element.appendChild(cg)
}else{cd.parentNode.insertBefore(cg,cd)
}M.push(cg)
}this.shadows=M
}return this
},xGetter:function(L){if(this.element.nodeName==="circle"){L={x:"cx",y:"cy"}[L]||L
}return this._defaultGetter(L)
},_defaultGetter:function(L){var M=R(this[L],this.element?this.element.getAttribute(L):null,0);
if(/^[0-9\.]+$/.test(M)){M=parseFloat(M)
}return M
},dSetter:function(b9,M,L){if(b9&&b9.join){b9=b9.join(" ")
}if(/(NaN| {2}|^$)/.test(b9)){b9="M 0 0"
}L.setAttribute(M,b9);
this[M]=b9
},dashstyleSetter:function(M){var L;
M=M&&M.toLowerCase();
if(M){M=M.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");
L=M.length;
while(L--){M[L]=a6(M[L])*this.element.getAttribute("stroke-width")
}M=M.join(",");
this.element.setAttribute("stroke-dasharray",M)
}},alignSetter:function(L){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[L])
},opacitySetter:function(b9,M,L){this[M]=b9;
L.setAttribute(M,b9)
},"stroke-widthSetter":function(b9,M,L){if(b9===0){b9=1e-05
}this.strokeWidth=b9;
L.setAttribute(M,b9)
},titleSetter:function(M){var L=this.element.getElementsByTagName("title")[0];
if(!L){L=bh.createElementNS(aT,"title");
this.element.appendChild(L)
}L.textContent=M
},textSetter:function(L){if(L!==this.textStr){delete this.bBox;
this.textStr=L;
if(this.added){this.renderer.buildText(this)
}}},fillSetter:function(b9,M,L){if(typeof b9==="string"){L.setAttribute(M,b9)
}else{if(b9){this.colorGradient(b9,M,L)
}}},zIndexSetter:function(b9,M,L){L.setAttribute(M,b9);
this[M]=b9
},_defaultSetter:function(b9,M,L){L.setAttribute(M,b9)
}};
aa.prototype.yGetter=aa.prototype.xGetter;
aa.prototype.translateXSetter=aa.prototype.translateYSetter=aa.prototype.rotationSetter=aa.prototype.verticalAlignSetter=aa.prototype.scaleXSetter=aa.prototype.scaleYSetter=function(M,L){this[L]=M;
this.doTransform=true
};
aa.prototype.strokeSetter=aa.prototype.fillSetter;
var ao=function(){this.init.apply(this,arguments)
};
ao.prototype={Element:aa,init:function(M,ci,cc,cg,cb){var cf=this,cd=location,L,ca,b9;
L=cf.createElement("svg").attr({version:"1.1"}).css(this.getStyle(cg));
ca=L.element;
M.appendChild(ca);
if(M.innerHTML.indexOf("xmlns")===-1){N(ca,"xmlns",aT)
}cf.isSVG=true;
cf.box=ca;
cf.boxWrapper=L;
cf.alignedObjects=[];
cf.url=(bw||bW)&&bh.getElementsByTagName("base").length?cd.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";
b9=this.createElement("desc").add();
b9.element.appendChild(bh.createTextNode("Created with "+u+" "+an));
cf.defs=this.createElement("defs").add();
cf.forExport=cb;
cf.gradients={};
cf.cache={};
cf.setSize(ci,cc,false);
var ch,ce;
if(bw&&M.getBoundingClientRect){cf.subPixelFix=ch=function(){bO(M,{left:0,top:0});
ce=M.getBoundingClientRect();
bO(M,{left:(Z(ce.left)-ce.left)+k,top:(Z(ce.top)-ce.top)+k})
};
ch();
bx(bC,"resize",ch)
}},getStyle:function(L){return(this.style=bb({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},L))
},isHidden:function(){return !this.boxWrapper.getBBox().width
},destroy:function(){var L=this,M=L.defs;
L.box=null;
L.boxWrapper=L.boxWrapper.destroy();
bV(L.gradients||{});
L.gradients=null;
if(M){L.defs=M.destroy()
}if(L.subPixelFix){b(bC,"resize",L.subPixelFix)
}L.alignedObjects=null;
return null
},createElement:function(L){var M=new this.Element();
M.init(this,L);
return M
},draw:function(){},buildText:function(cm){var ci=cm.element,cf=this,M=cf.forExport,cj=R(cm.textStr,"").toString(),ca=cj.indexOf("<")!==-1,cd,L=ci.childNodes,cg,cb,ce=N(ci,"x"),ck=cm.styles,cl=cm.textWidth,ch=ck&&ck.lineHeight,cc=L.length,b9=function(cn){return ch?a6(ch):cf.fontMetrics(/(px|em)$/.test(cn&&cn.style.fontSize)?cn.style.fontSize:((ck&&ck.fontSize)||cf.style.fontSize||12)).h
};
while(cc--){ci.removeChild(L[cc])
}if(!ca&&cj.indexOf(" ")===-1){ci.appendChild(bh.createTextNode(cj));
return
}else{cg=/<.*style="([^"]+)".*>/;
cb=/<.*href="(http[^"]+)".*>/;
if(cl&&!cm.added){this.box.appendChild(ci)
}if(ca){cd=cj.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g)
}else{cd=[cj]
}if(cd[cd.length-1]===""){cd.pop()
}T(cd,function(cn,co){var cq,cp=0;
cn=cn.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");
cq=cn.split("|||");
T(cq,function(cB){if(cB!==""||cq.length===1){var cu={},cr=bh.createElementNS(aT,"tspan"),cC;
if(cg.test(cB)){cC=cB.match(cg)[1].replace(/(;| |^)color([ :])/,"$1fill$2");
N(cr,"style",cC)
}if(cb.test(cB)&&!M){N(cr,"onclick",'location.href="'+cB.match(cb)[1]+'"');
bO(cr,{cursor:"pointer"})
}cB=(cB.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");
if(cB!==" "){cr.appendChild(bh.createTextNode(cB));
if(!cp){if(co&&ce!==null){cu.x=ce
}}else{cu.dx=0
}N(cr,cu);
if(!cp&&co){if(!K&&M){bO(cr,{display:"block"})
}N(cr,"dy",b9(cr),bW&&cr.offsetHeight)
}ci.appendChild(cr);
cp++;
if(cl){var cs=cB.replace(/([^\^])-/g,"$1- ").split(" "),cy=cs.length>1&&ck.whiteSpace!=="nowrap",cD,ct,cw=cm._clipHeight,cz=[],cx=b9(),cA=1,cv;
while(cy&&(cs.length||cz.length)){delete cm.bBox;
cv=cm.getBBox();
ct=cv.width;
if(!K&&cf.forExport){ct=cf.measureSpanWidth(cr.firstChild.data,cm.styles)
}cD=ct>cl;
if(!cD||cs.length===1){cs=cz;
cz=[];
if(cs.length){cA++;
if(cw&&cA*cx>cw){cs=["..."];
cm.attr("title",cm.textStr)
}else{cr=bh.createElementNS(aT,"tspan");
N(cr,{dy:cx,x:ce});
if(cC){N(cr,"style",cC)
}ci.appendChild(cr);
if(ct>cl){cl=ct
}}}}else{cr.removeChild(cr.firstChild);
cz.unshift(cs.pop())
}if(cs.length){cr.appendChild(bh.createTextNode(cs.join(" ").replace(/- /g,"-")))
}}}}}})
})
}},button:function(b9,cb,cc,cd,ck,ch,cm,cf,co){var cj=this.label(b9,cb,cc,co,null,null,null,null,"button"),ce=0,L,M,cl,ci,cn,cg,ca={x1:0,y1:0,x2:0,y2:1};
ck=bR({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:ca,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},ck);
cl=ck.style;
delete ck.style;
ch=bR(ck,{stroke:"#68A",fill:{linearGradient:ca,stops:[[0,"#FFF"],[1,"#ACF"]]}},ch);
ci=ch.style;
delete ch.style;
cm=bR(ck,{stroke:"#68A",fill:{linearGradient:ca,stops:[[0,"#9BD"],[1,"#CDF"]]}},cm);
cn=cm.style;
delete cm.style;
cf=bR(ck,{style:{color:"#CCC"}},cf);
cg=cf.style;
delete cf.style;
bx(cj.element,aE?"mouseover":"mouseenter",function(){if(ce!==3){cj.attr(ch).css(ci)
}});
bx(cj.element,aE?"mouseout":"mouseleave",function(){if(ce!==3){L=[ck,ch,cm][ce];
M=[cl,ci,cn][ce];
cj.attr(L).css(M)
}});
cj.setState=function(cp){cj.state=ce=cp;
if(!cp){cj.attr(ck).css(cl)
}else{if(cp===2){cj.attr(cm).css(cn)
}else{if(cp===3){cj.attr(cf).css(cg)
}}}};
return cj.on("click",function(){if(ce!==3){cd.call(cj)
}}).attr(ck).css(bb({cursor:"default"},cl))
},crispLine:function(L,M){if(L[1]===L[4]){L[1]=L[4]=c(L[1])-(M%2/2)
}if(L[2]===L[5]){L[2]=L[5]=c(L[2])+(M%2/2)
}return L
},path:function(M){var L={fill:aP};
if(P(M)){L.d=M
}else{if(bI(M)){bb(L,M)
}}return this.createElement("path").attr(L)
},circle:function(b9,ca,L){var cb=bI(b9)?b9:{x:b9,y:ca,r:L},M=this.createElement("circle");
M.xSetter=function(cc){this.element.setAttribute("cx",cc)
};
M.ySetter=function(cc){this.element.setAttribute("cy",cc)
};
return M.attr(cb)
},arc:function(cc,cd,ca,b9,cb,M){var L;
if(bI(cc)){cd=cc.y;
ca=cc.r;
b9=cc.innerR;
cb=cc.start;
M=cc.end;
cc=cc.x
}L=this.symbol("arc",cc||0,cd||0,ca||0,ca||0,{innerR:b9||0,start:cb||0,end:M||0});
L.r=ca;
return L
},rect:function(cd,ce,cb,M,b9,ca){b9=bI(cd)?cd.r:b9;
var cc=this.createElement("rect"),L=bI(cd)?cd:cd===bg?{}:{x:cd,y:ce,width:b4(cb,0),height:b4(M,0)};
if(ca!==bg){L.strokeWidth=ca;
L=cc.crisp(L)
}if(b9){L.r=b9
}cc.rSetter=function(cf){N(this.element,{rx:cf,ry:cf})
};
return cc.attr(L)
},setSize:function(cc,b9,M){var cb=this,L=cb.alignedObjects,ca=L.length;
cb.width=cc;
cb.height=b9;
cb.boxWrapper[R(M,true)?"animate":"attr"]({width:cc,height:b9});
while(ca--){L[ca].align()
}},g:function(M){var L=this.createElement("g");
return V(M)?L.attr({"class":Y+M}):L
},image:function(ca,cc,cd,cb,b9){var L={preserveAspectRatio:aP},M;
if(arguments.length>1){bb(L,{x:cc,y:cd,width:cb,height:b9})
}M=this.createElement("image").attr(L);
if(M.element.setAttributeNS){M.element.setAttributeNS("http://www.w3.org/1999/xlink","href",ca)
}else{M.element.setAttribute("hc-svg-href",ca)
}return M
},symbol:function(cg,cj,ck,ci,M,ce){var cd,ch=this.symbols[cg],cf=ch&&ch(c(cj),c(ck),ci,M,ce),b9,ca=/^url\((.*?)\)$/,cc,cb,L;
if(cf){cd=this.path(cf);
bb(cd,{symbolName:cg,x:cj,y:ck,width:ci,height:M});
if(ce){bb(cd,ce)
}}else{if(ca.test(cg)){L=function(cl,cm){if(cl.element){cl.attr({width:cm[0],height:cm[1]});
if(!cl.alignByTranslate){cl.translate(c((ci-cm[0])/2),c((M-cm[1])/2))
}}};
cc=cg.match(ca)[1];
cb=aW[cc];
cd=this.image(cc).attr({x:cj,y:ck});
cd.isImg=true;
if(cb){L(cd,cb)
}else{cd.attr({width:0,height:0});
b9=a9("img",{onload:function(){L(cd,aW[cc]=[this.width,this.height])
},src:cc})
}}}return cd
},symbols:{circle:function(b9,ca,M,L){var cb=0.166*M;
return[A,b9+M/2,ca,"C",b9+M+cb,ca,b9+M+cb,ca+L,b9+M/2,ca+L,"C",b9-cb,ca+L,b9-cb,ca,b9+M/2,ca,"Z"]
},square:function(b9,ca,M,L){return[A,b9,ca,e,b9+M,ca,b9+M,ca+L,b9,ca+L,"Z"]
},triangle:function(b9,ca,M,L){return[A,b9+M/2,ca,e,b9+M,ca+L,b9,ca+L,"Z"]
},"triangle-down":function(b9,ca,M,L){return[A,b9,ca,e,b9+M,ca,b9+M/2,ca+L,"Z"]
},diamond:function(b9,ca,M,L){return[A,b9+M/2,ca,e,b9+M,ca+L/2,b9+M/2,ca+L,b9,ca+L/2,"Z"]
},arc:function(ce,cf,cd,cj,M){var cc=M.start,b9=M.r||cd||cj,ci=M.end-0.001,ck=M.innerR,L=M.open,ch=a5(cc),cb=a0(cc),cg=a5(ci),ca=a0(ci),cl=M.end-cc<y?0:1;
return[A,ce+b9*ch,cf+b9*cb,"A",b9,b9,0,cl,1,ce+b9*cg,cf+b9*ca,L?A:e,ce+ck*cg,cf+ck*ca,"A",ck,ck,0,cl,0,ce+ck*ch,cf+ck*cb,L?"":"Z"]
},callout:function(L,M,cj,cc,cf){var cb=6,cd=6,ch=j((cf&&cf.r)||0,cj,cc),ci=ch+cd,b9=cf&&cf.anchorX,ca=cf&&cf.anchorY,cg,ce=c(cf.strokeWidth||0)%2/2;
L+=ce;
M+=ce;
cg=["M",L+ch,M,"L",L+cj-ch,M,"C",L+cj,M,L+cj,M,L+cj,M+ch,"L",L+cj,M+cc-ch,"C",L+cj,M+cc,L+cj,M+cc,L+cj-ch,M+cc,"L",L+ch,M+cc,"C",L,M+cc,L,M+cc,L,M+cc-ch,"L",L,M+ch,"C",L,M,L,M,L+ch,M];
if(b9&&b9>cj&&ca>M+ci&&ca<M+cc-ci){cg.splice(13,3,"L",L+cj,ca-cd,L+cj+cb,ca,L+cj,ca+cd,L+cj,M+cc-ch)
}else{if(b9&&b9<0&&ca>M+ci&&ca<M+cc-ci){cg.splice(33,3,"L",L,ca+cd,L-cb,ca,L,ca-cd,L,M+ch)
}else{if(ca&&ca>cc&&b9>L+ci&&b9<L+cj-ci){cg.splice(23,3,"L",b9+cd,M+cc,b9,M+cc+cb,b9-cd,M+cc,L+ch,M+cc)
}else{if(ca&&ca<0&&b9>L+ci&&b9<L+cj-ci){cg.splice(3,3,"L",b9-cd,M,b9,M-cb,b9+cd,M,cj-ch,M)
}}}}return cg
}},clipRect:function(cc,cd,ca,M){var cb,b9=Y+E++,L=this.createElement("clipPath").attr({id:b9}).add(this.defs);
cb=this.rect(cc,cd,ca,M,0).add(L);
cb.id=b9;
cb.clipPath=L;
return cb
},text:function(ca,cd,ce,cb){var b9=this,M=aQ||(!K&&b9.forExport),cc,L={};
if(cb&&!b9.forExport){return b9.html(ca,cd,ce)
}L.x=Math.round(cd||0);
if(ce){L.y=Math.round(ce)
}if(ca||ca===0){L.text=ca
}cc=b9.createElement("text").attr(L);
if(M){cc.css({position:a})
}if(!cb){cc.xSetter=function(ck,cj,ch){var cg=ch.childNodes,cf,ci;
for(ci=1;
ci<cg.length;
ci++){cf=cg[ci];
if(cf.getAttribute("x")===ch.getAttribute("x")){cf.setAttribute("x",ck)
}}ch.setAttribute(cj,ck)
}
}return cc
},fontMetrics:function(M){M=M||this.style.fontSize;
M=/px/.test(M)?a6(M):/em/.test(M)?parseFloat(M)*12:12;
var b9=M<24?M+4:c(M*1.2),L=c(b9*0.8);
return{h:b9,b:L}
},label:function(ci,cr,cs,ch,ct,b9,cm,cb,cy){var cg=this,co=cg.g(cy),cj=cg.text("",0,0,cm).attr({zIndex:1}),cw,cv,L=0,ce=3,cf=0,cn,cc,cp,cq,cz=0,M={},cu,cd;
function ck(){var cA,cB,cC=cj.element.style;
cv=(cn===undefined||cc===undefined||co.styles.textAlign)&&cj.textStr&&cj.getBBox();
co.width=(cn||cv.width||0)+2*ce+cf;
co.height=(cc||cv.height||0)+2*ce;
cu=ce+cg.fontMetrics(cC&&cC.fontSize).b;
if(cd){if(!cw){cA=c(-L*ce);
cB=cb?-cu:0;
co.box=cw=ch?cg.symbol(ch,cA,cB,co.width,co.height,M):cg.rect(cA,cB,co.width,co.height,0,M[f]);
cw.attr("fill",aP).add(co)
}if(!cw.isImg){cw.attr(bb({width:c(co.width),height:c(co.height)},M))
}M=null
}}function cl(){var cA=co.styles,cB=cA&&cA.textAlign,cC=cf+ce*(1-L),cD;
cD=cb?0:cu;
if(V(cn)&&cv&&(cB==="center"||cB==="right")){cC+={center:0.5,right:1}[cB]*(cn-cv.width)
}if(cC!==cj.x||cD!==cj.y){cj.attr("x",cC);
if(cD!==bg){cj.attr("y",cD)
}}cj.x=cC;
cj.y=cD
}function cx(cA,cB){if(cw){cw.attr(cA,cB)
}else{M[cA]=cB
}}co.onAdd=function(){cj.add(co);
co.attr({text:ci||"",x:cr,y:cs});
if(cw&&V(ct)){co.attr({anchorX:ct,anchorY:b9})
}};
co.widthSetter=function(cA){cn=cA
};
co.heightSetter=function(cA){cc=cA
};
co.paddingSetter=function(cA){if(V(cA)&&cA!==ce){ce=cA;
cl()
}};
co.paddingLeftSetter=function(cA){if(V(cA)&&cA!==cf){cf=cA;
cl()
}};
co.alignSetter=function(cA){L={left:0,center:0.5,right:1}[cA]
};
co.textSetter=function(cA){if(cA!==bg){cj.textSetter(cA)
}ck();
cl()
};
co["stroke-widthSetter"]=function(cB,cA){if(cB){cd=true
}cz=cB%2/2;
cx(cA,cB)
};
co.strokeSetter=co.fillSetter=co.rSetter=function(cB,cA){if(cA==="fill"&&cB){cd=true
}cx(cA,cB)
};
co.anchorXSetter=function(cB,cA){ct=cB;
cx(cA,cB+cz-cp)
};
co.anchorYSetter=function(cB,cA){b9=cB;
cx(cA,cB-cq)
};
co.xSetter=function(cA){co.x=cA;
if(L){cA-=L*((cn||cv.width)+ce)
}cp=c(cA);
co.attr("translateX",cp)
};
co.ySetter=function(cA){cq=co.y=c(cA);
co.attr("translateY",cq)
};
var ca=co.css;
return bb(co,{css:function(cA){if(cA){var cB={};
cA=bR(cA);
T(["fontSize","fontWeight","fontFamily","color","lineHeight","width","textDecoration","textShadow"],function(cC){if(cA[cC]!==bg){cB[cC]=cA[cC];
delete cA[cC]
}});
cj.css(cB)
}return ca.call(co,cA)
},getBBox:function(){return{width:cv.width+2*ce,height:cv.height+2*ce,x:cv.x-ce,y:cv.y-ce}
},shadow:function(cA){if(cw){cw.shadow(cA)
}return co
},destroy:function(){b(co.element,"mouseenter");
b(co.element,"mouseleave");
if(cj){cj=cj.destroy()
}if(cw){cw=cw.destroy()
}aa.prototype.destroy.call(co);
co=cg=ck=cl=cx=null
}})
}};
bp=ao;
bb(aa.prototype,{htmlCss:function(M){var ca=this,L=ca.element,b9=M&&L.tagName==="SPAN"&&M.width;
if(b9){delete M.width;
ca.textWidth=b9;
ca.updateTransform()
}ca.styles=bb(ca.styles,M);
bO(ca.element,M);
return ca
},htmlGetBBox:function(){var b9=this,M=b9.element,L=b9.bBox;
if(!L){if(M.nodeName==="text"){M.style.position=a
}L=b9.bBox={x:M.offsetLeft,y:M.offsetTop,width:M.offsetWidth,height:M.offsetHeight}
}return L
},htmlUpdateTransform:function(){if(!this.added){this.alignOnAdd=true;
return
}var cd=this,cl=cd.renderer,ck=cd.element,ca=cd.translateX||0,cb=cd.translateY||0,ce=cd.x||0,cf=cd.y||0,cg=cd.textAlign||"left",ch={left:0,center:0.5,right:1}[cg],M=cd.shadows;
bO(ck,{marginLeft:ca,marginTop:cb});
if(M){T(M,function(cm){bO(cm,{marginLeft:ca+1,marginTop:cb+1})
})
}if(cd.inverted){T(ck.childNodes,function(cm){cl.invertChild(cm,ck)
})
}if(ck.tagName==="SPAN"){var cc,L=cd.rotation,ci,b9=a6(cd.textWidth),cj=[L,cg,ck.innerHTML,cd.textWidth].join(",");
if(cj!==cd.cTT){ci=cl.fontMetrics(ck.style.fontSize).b;
if(V(L)){cd.setSpanRotation(L,ch,ci)
}cc=R(cd.elemWidth,ck.offsetWidth);
if(cc>b9&&/[ \-]/.test(ck.textContent||ck.innerText)){bO(ck,{width:b9+k,display:"block",whiteSpace:"normal"});
cc=b9
}cd.getSpanCorrection(cc,ci,ch,L,cg)
}bO(ck,{left:(ce+(cd.xCorr||0))+k,top:(cf+(cd.yCorr||0))+k});
if(bW){ci=ck.offsetHeight
}cd.cTT=cj
}},setSpanRotation:function(b9,cb,L){var ca={},M=aE?"-ms-transform":bW?"-webkit-transform":bw?"MozTransform":au?"-o-transform":"";
ca[M]=ca.transform="rotate("+b9+"deg)";
ca[M+(bw?"Origin":"-origin")]=ca.transformOrigin=(cb*100)+"% "+L+"px";
bO(this.element,ca)
},getSpanCorrection:function(b9,M,L){this.xCorr=-b9*L;
this.yCorr=-M
}});
bb(ao.prototype,{html:function(b9,cb,cc){var ca=this.createElement("span"),L=ca.element,M=ca.renderer;
ca.textSetter=function(cd){if(cd!==L.innerHTML){delete this.bBox
}L.innerHTML=this.textStr=cd
};
ca.xSetter=ca.ySetter=ca.alignSetter=ca.rotationSetter=function(ce,cd){if(cd==="align"){cd="textAlign"
}ca[cd]=ce;
ca.htmlUpdateTransform()
};
ca.attr({text:b9,x:c(cb),y:c(cc)}).css({position:a,whiteSpace:"nowrap",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});
ca.css=ca.htmlCss;
if(M.isSVG){ca.add=function(ch){var ce,cd=M.box.parentNode,cf,cg=[];
this.parentGroup=ch;
if(ch){ce=ch.div;
if(!ce){cf=ch;
while(cf){cg.push(cf);
cf=cf.parentGroup
}T(cg.reverse(),function(cj){var ci;
ce=cj.div=cj.div||a9(b8,{className:N(cj.element,"class")},{position:a,left:(cj.translateX||0)+k,top:(cj.translateY||0)+k},ce||cd);
ci=ce.style;
bb(cj,{translateXSetter:function(cl,ck){ci.left=cl+k;
cj[ck]=cl;
cj.doTransform=true
},translateYSetter:function(cl,ck){ci.top=cl+k;
cj[ck]=cl;
cj.doTransform=true
},visibilitySetter:function(cl,ck){ci[ck]=cl
}})
})
}}else{ce=cd
}ce.appendChild(L);
ca.added=true;
if(ca.alignOnAdd){ca.htmlUpdateTransform()
}return ca
}
}return ca
}});
var bj,s;
if(!K&&!aQ){U.VMLElement=s={init:function(ca,b9){var cc=this,M=["<",b9,' filled="f" stroked="f"'],cb=["position: ",a,";"],L=b9===b8;
if(b9==="shape"||L){cb.push("left:0;top:0;width:1px;height:1px;")
}cb.push("visibility: ",L?F:m);
M.push(' style="',cb.join(""),'"/>');
if(b9){M=L||b9==="span"||b9==="img"?M.join(""):ca.prepVML(M);
cc.element=a9(M)
}cc.renderer=ca
},add:function(ca){var cd=this,cc=cd.renderer,M=cd.element,L=cc.box,b9=ca&&ca.inverted,cb=ca?ca.element||ca:L;
if(b9){cc.invertChild(M,cb)
}cb.appendChild(M);
cd.added=true;
if(cd.alignOnAdd&&!cd.deferUpdateTransform){cd.updateTransform()
}if(cd.onAdd){cd.onAdd()
}return cd
},updateTransform:aa.prototype.htmlUpdateTransform,setSpanRotation:function(){var M=this.rotation,L=a5(M*H),b9=a0(M*H);
bO(this.element,{filter:M?["progid:DXImageTransform.Microsoft.Matrix(M11=",L,", M12=",-b9,", M21=",b9,", M22=",L,", sizingMethod='auto expand')"].join(""):aP})
},getSpanCorrection:function(ca,cd,cc,M,cb){var ce=M?a5(M*H):1,b9=M?a0(M*H):0,cf=R(this.elemHeight,this.element.offsetHeight),L,cg=cb&&cb!=="left";
this.xCorr=ce<0&&-ca;
this.yCorr=b9<0&&-cf;
L=ce*b9<0;
this.xCorr+=b9*cd*(L?1-cc:cc);
this.yCorr-=ce*cd*(M?(L?cc:1-cc):1);
if(cg){this.xCorr-=ca*cc*(ce<0?-1:1);
if(M){this.yCorr-=cf*cc*(b9<0?-1:1)
}bO(this.element,{textAlign:cb})
}},pathToVML:function(b9){var L=b9.length,M=[];
while(L--){if(aD(b9[L])){M[L]=c(b9[L]*10)-5
}else{if(b9[L]==="Z"){M[L]="x"
}else{M[L]=b9[L];
if(b9.isArc&&(b9[L]==="wa"||b9[L]==="at")){if(M[L+5]===M[L+7]){M[L+7]+=b9[L+7]>b9[L+5]?1:-1
}if(M[L+6]===M[L+8]){M[L+8]+=b9[L+8]>b9[L+6]?1:-1
}}}}}return M.join(" ")||"x"
},clip:function(M){var ca=this,L,b9;
if(M){L=M.members;
bi(L,ca);
L.push(ca);
ca.destroyClip=function(){bi(L,ca)
};
b9=M.getCSS(ca)
}else{if(ca.destroyClip){ca.destroyClip()
}b9={clip:bd?"inherit":"rect(auto)"}
}return ca.css(b9)
},css:aa.prototype.htmlCss,safeRemoveChild:function(L){if(L.parentNode){X(L)
}},destroy:function(){if(this.destroyClip){this.destroyClip()
}return aa.prototype.destroy.apply(this)
},on:function(L,M){this.element["on"+L]=function(){var b9=bC.event;
b9.target=b9.srcElement;
M(b9)
};
return this
},cutOffPath:function(b9,M){var L;
b9=b9.split(/[ ,]/);
L=b9.length;
if(L===9||L===11){b9[L-4]=b9[L-2]=a6(b9[L-2])-10*M
}return b9.join(" ")
},shadow:function(cc,cj,cg){var cd=[],ck,ch=this.element,b9=this.renderer,ca,ci=ch.style,cl,M=ch.path,cf,L,ce,cb;
if(M&&typeof M.value!=="string"){M="x"
}L=M;
if(cc){ce=R(cc.width,3);
cb=(cc.opacity||0.15)/ce;
for(ck=1;
ck<=3;
ck++){cf=(ce*2)+1-(2*ck);
if(cg){L=this.cutOffPath(M.value,cf+0.5)
}cl=['<shape isShadow="true" strokeweight="',cf,'" filled="false" path="',L,'" coordsize="10 10" style="',ch.style.cssText,'" />'];
ca=a9(b9.prepVML(cl),null,{left:a6(ci.left)+R(cc.offsetX,1),top:a6(ci.top)+R(cc.offsetY,1)});
if(cg){ca.cutOff=cf+1
}cl=['<stroke color="',cc.color||"black",'" opacity="',cb*ck,'"/>'];
a9(b9.prepVML(cl),null,null,ca);
if(cj){cj.element.appendChild(ca)
}else{ch.parentNode.insertBefore(ca,ch)
}cd.push(ca)
}this.shadows=cd
}return this
},updateShadows:aj,setAttr:function(L,M){if(bd){this.element[L]=M
}else{this.element.setAttribute(L,M)
}},classSetter:function(L){this.element.className=L
},dashstyleSetter:function(ca,M,L){var b9=L.getElementsByTagName("stroke")[0]||a9(this.renderer.prepVML(["<stroke/>"]),null,null,L);
b9[M]=ca||"solid";
this[M]=ca
},dSetter:function(ca,M,cb){var L,b9=this.shadows;
ca=ca||[];
this.d=ca.join(" ");
cb.path=ca=this.pathToVML(ca);
if(b9){L=b9.length;
while(L--){b9[L].path=b9[L].cutOff?this.cutOffPath(ca,b9[L].cutOff):ca
}}this.setAttr(M,ca)
},fillSetter:function(ca,M,L){var b9=L.nodeName;
if(b9==="SPAN"){L.style.color=ca
}else{if(b9!=="IMG"){L.filled=ca!==aP;
this.setAttr("fillcolor",this.renderer.color(ca,L,M,this))
}}},opacitySetter:aj,rotationSetter:function(ca,M,L){var b9=L.style;
this[M]=b9[M]=ca;
b9.left=-c(a0(ca*H)+1)+k;
b9.top=c(a5(ca*H))+k
},strokeSetter:function(b9,M,L){this.setAttr("strokecolor",this.renderer.color(b9,L,M))
},"stroke-widthSetter":function(b9,M,L){L.stroked=!!b9;
this[M]=b9;
if(aD(b9)){b9+=k
}this.setAttr("strokeweight",b9)
},titleSetter:function(M,L){this.setAttr(L,M)
},visibilitySetter:function(b9,M,L){if(b9==="inherit"){b9=m
}if(this.shadows){T(this.shadows,function(ca){ca.style[M]=b9
})
}if(L.nodeName==="DIV"){b9=b9===F?"-999em":0;
if(!bd){L.style[M]=b9?m:F
}M="top"
}L.style[M]=b9
},xSetter:function(b9,M,L){this[M]=b9;
if(M==="x"){M="left"
}else{if(M==="y"){M="top"
}}if(this.updateClipping){this[M]=b9;
this.updateClipping()
}else{L.style[M]=b9
}},zIndexSetter:function(b9,M,L){L.style[M]=b9
}};
s=aB(aa,s);
s.prototype.ySetter=s.prototype.widthSetter=s.prototype.heightSetter=s.prototype.xSetter;
var by={Element:s,isIE8:aZ.indexOf("MSIE 8.0")>-1,init:function(cf,cc,b9,cb){var ca=this,ce,cd,L;
ca.alignedObjects=[];
ce=ca.createElement(b8).css(bb(this.getStyle(cb),{position:af}));
cd=ce.element;
cf.appendChild(ce.element);
ca.isVML=true;
ca.box=cd;
ca.boxWrapper=ce;
ca.cache={};
ca.setSize(cc,b9,false);
if(!bh.namespaces.hcv){bh.namespaces.add("hcv","urn:schemas-microsoft-com:vml");
L="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
try{bh.createStyleSheet().cssText=L
}catch(M){bh.styleSheets[0].cssText+=L
}}},isHidden:function(){return !this.box.offsetWidth
},clipRect:function(cb,cc,ca,M){var L=this.createElement(),b9=bI(cb);
return bb(L,{members:[],left:(b9?cb.x:cb)+1,top:(b9?cb.y:cc)+1,width:(b9?cb.width:ca)-1,height:(b9?cb.height:M)-1,getCSS:function(cn){var ce=cn.element,ci=ce.nodeName,cg=ci==="shape",cf=cn.inverted,cj=this,cm=cj.top-(cg?ce.offsetTop:0),ch=cj.left,cl=ch+cj.width,cd=cm+cj.height,ck={clip:"rect("+c(cf?ch:cm)+"px,"+c(cf?cd:cl)+"px,"+c(cf?cl:cd)+"px,"+c(cf?cm:ch)+"px)"};
if(!cf&&bd&&ci==="DIV"){bb(ck,{width:cl+k,height:cd+k})
}return ck
},updateClipping:function(){T(L.members,function(cd){if(cd.element){cd.css(L.getCSS(cd))
}})
}})
},color:function(cq,cu,cm,cE){var cx=this,cd,cc=/^rgba/,cp,cl,cn=aP;
if(cq&&cq.linearGradient){cl="gradient"
}else{if(cq&&cq.radialGradient){cl="pattern"
}}if(cl){var ck,co,L=cq.linearGradient||cq.radialGradient,cs,ci,cG,cC,cf,cr,cb,cg,cD="",b9=cq.stops,cy,ca,ce=[],ct=function(){cp=['<fill colors="'+ce.join(",")+'" opacity="',cr,'" o:opacity2="',cf,'" type="',cl,'" ',cD,'focus="100%" method="any" />'];
a9(cx.prepVML(cp),null,null,cu)
};
cy=b9[0];
ca=b9[b9.length-1];
if(cy[0]>0){b9.unshift([0,cy[1]])
}if(ca[0]<1){b9.push([1,ca[1]])
}T(b9,function(cI,cH){if(cc.test(cI[1])){cd=o(cI[1]);
ck=cd.get("rgb");
co=cd.get("a")
}else{ck=cI[1];
co=1
}ce.push((cI[0]*100)+"% "+ck);
if(!cH){cf=co;
cg=ck
}else{cr=co;
cb=ck
}});
if(cm==="fill"){if(cl==="gradient"){cs=L.x1||L[0]||0;
ci=L.y1||L[1]||0;
cG=L.x2||L[2]||0;
cC=L.y2||L[3]||0;
cD='angle="'+(90-D.atan((cC-ci)/(cG-cs))*180/y)+'"';
ct()
}else{var cw=L.r,cj=cw*2,cA=cw*2,cz=L.cx,ch=L.cy,cv=cu.radialReference,cF,cB=function(){if(cv){cF=cE.getBBox();
cz+=(cv[0]-cF.x)/cF.width-0.5;
ch+=(cv[1]-cF.y)/cF.height-0.5;
cj*=cv[2]/cF.width;
cA*=cv[2]/cF.height
}cD='src="'+bs.global.VMLRadialGradientURL+'" size="'+cj+","+cA+'" origin="0.5,0.5" position="'+cz+","+ch+'" color2="'+cg+'" ';
ct()
};
if(cE.added){cB()
}else{cE.onAdd=cB
}cn=cb
}}else{cn=ck
}}else{if(cc.test(cq)&&cu.tagName!=="IMG"){cd=o(cq);
cp=["<",cm,' opacity="',cd.get("a"),'"/>'];
a9(this.prepVML(cp),null,null,cu);
cn=cd.get("rgb")
}else{var M=cu.getElementsByTagName(cm);
if(M.length){M[0].opacity=1;
M[0].type="solid"
}cn=cq
}}return cn
},prepVML:function(M){var b9="display:inline-block;behavior:url(#default#VML);",L=this.isIE8;
M=M.join("");
if(L){M=M.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />');
if(M.indexOf('style="')===-1){M=M.replace("/>",' style="'+b9+'" />')
}else{M=M.replace('style="','style="'+b9)
}}else{M=M.replace("<","<hcv:")
}return M
},text:ao.prototype.html,path:function(M){var L={coordsize:"10 10"};
if(P(M)){L.d=M
}else{if(bI(M)){bb(L,M)
}}return this.createElement("shape").attr(L)
},circle:function(b9,ca,M){var L=this.symbol("circle");
if(bI(b9)){M=b9.r;
ca=b9.y;
b9=b9.x
}L.isCircle=true;
L.r=M;
return L.attr({x:b9,y:ca})
},g:function(M){var b9,L;
if(M){L={className:Y+M,"class":Y+M}
}b9=this.createElement(b8).attr(L);
return b9
},image:function(b9,cb,cc,ca,L){var M=this.createElement("img").attr({src:b9});
if(arguments.length>1){M.attr({x:cb,y:cc,width:ca,height:L})
}return M
},createElement:function(L){return L==="rect"?this.symbol(L):ao.prototype.createElement.call(this,L)
},invertChild:function(cb,M){var ca=this,b9=M.style,L=cb.tagName==="IMG"&&cb.style;
bO(cb,{flip:"x",left:a6(b9.width)-(L?a6(L.top):1),top:a6(b9.height)-(L?a6(L.left):1),rotation:-90});
T(cb.childNodes,function(cc){ca.invertChild(cc,cb)
})
},symbols:{arc:function(cj,ck,ci,ca,cc){var ch=cc.start,b9=cc.end,cd=cc.r||ci||ca,cb=cc.innerR,M=a5(ch),cg=a0(ch),L=a5(b9),cf=a0(b9),ce;
if(b9-ch===0){return["x"]
}ce=["wa",cj-cd,ck-cd,cj+cd,ck+cd,cj+cd*M,ck+cd*cg,cj+cd*L,ck+cd*cf];
if(cc.open&&!cb){ce.push("e",A,cj,ck)
}ce.push("at",cj-cb,ck-cb,cj+cb,ck+cb,cj+cb*L,ck+cb*cf,cj+cb*M,ck+cb*cg,"x","e");
ce.isArc=true;
return ce
},circle:function(b9,ca,L,cb,M){if(M){L=cb=2*M.r
}if(M&&M.isCircle){b9-=L/2;
ca-=cb/2
}return["wa",b9,ca,b9+L,ca+cb,b9+L,ca+cb/2,b9+L,ca+cb/2,"e"]
},rect:function(b9,ca,M,cb,L){return ao.prototype.symbols[!V(L)||!L.r?"square":"callout"].call(0,b9,ca,M,cb,L)
}}};
U.VMLRenderer=bj=function(){this.init.apply(this,arguments)
};
bj.prototype=bR(ao.prototype,by);
bp=bj
}ao.prototype.measureSpanWidth=function(b9,M){var cb=bh.createElement("span"),L,ca=bh.createTextNode(b9);
cb.appendChild(ca);
bO(cb,M);
this.box.appendChild(cb);
L=cb.offsetWidth;
X(cb);
return L
};
var bo,S;
if(aQ){U.CanVGRenderer=bo=function(){aT="http://www.w3.org/1999/xhtml"
};
bo.prototype.symbols={};
S=(function(){var L=[];
function M(){var ca=L.length,b9;
for(b9=0;
b9<ca;
b9++){L[b9]()
}L=[]
}return{push:function(b9,ca){if(L.length===0){al(ca,M)
}L.push(b9)
}}
}());
bp=bo
}function bY(L,b9,ca,M){this.axis=L;
this.pos=b9;
this.type=ca||"";
this.isNew=true;
if(!ca&&!M){this.addLabel()
}}bY.prototype={addLabel:function(){var cq=this,cc=cq.axis,cn=cc.options,ce=cc.chart,ch=cc.horiz,cd=cc.categories,cm=cc.names,co=cq.pos,cl=cn.labels,cp,M=cc.tickPositions,ca=(ch&&cd&&!cl.step&&!cl.staggerLines&&!cl.rotation&&ce.plotWidth/M.length)||(!ch&&(ce.margin[3]||ce.chartWidth*0.33)),ci=co===M[0],cj=co===M[M.length-1],cf,cb,b9=cd?R(cd[co],cm[co],co):co,ck=cq.label,L=M.info,cg;
if(cc.isDatetimeAxis&&L){cg=cn.dateTimeLabelFormats[L.higherRanks[co]||L.unitName]
}cq.isFirst=ci;
cq.isLast=cj;
cp=cc.labelFormatter.call({axis:cc,chart:ce,isFirst:ci,isLast:cj,dateTimeLabelFormat:cg,value:cc.isLog?bk(bE(b9)):b9});
cf=ca&&{width:b4(1,c(ca-2*(cl.padding||10)))+k};
cf=bb(cf,cl.style);
if(!V(ck)){cb={align:cc.labelAlign};
if(aD(cl.rotation)){cb.rotation=cl.rotation
}if(ca&&cl.ellipsis){cb._clipHeight=cc.len/M.length
}cq.label=V(cp)&&cl.enabled?ce.renderer.text(cp,0,0,cl.useHTML).attr(cb).css(cf).add(cc.labelGroup):null
}else{if(ck){ck.attr({text:cp}).css(cf)
}}},getLabelSize:function(){var M=this.label,L=this.axis;
return M?M.getBBox()[L.horiz?"height":"width"]:0
},getLabelSides:function(){var M=this.label.getBBox(),L=this.axis,b9=L.horiz,cc=L.options,ca=cc.labels,ce=b9?M.width:M.height,cb=b9?ca.x-ce*{left:0,center:0.5,right:1}[L.labelAlign]:0,cd=b9?ce+cb:ce;
return[cb,cd]
},handleOverflow:function(cb,cr){var co=true,L=this.axis,cc=this.isFirst,cd=this.isLast,ca=L.horiz,cl=ca?cr.x:cr.y,cm=L.reversed,cq=L.tickPositions,cp=this.getLabelSides(),ch=cp[0],cn=cp[1],M,b9,cj,ck,ci=this.label.line||0,cg=L.labelEdge,ce=L.justifyLabels&&(cc||cd),cf;
if(cg[ci]===bg||cl+ch>cg[ci]){cg[ci]=cl+cn
}else{if(!ce){co=false
}}if(ce){cf=L.justifyToPlot;
M=cf?L.pos:0;
b9=cf?M+L.len:L.chart.chartWidth;
do{cb+=(cc?1:-1);
cj=L.ticks[cq[cb]]
}while(cq[cb]&&(!cj||cj.label.line!==ci));
ck=cj&&cj.label.xy&&cj.label.xy.x+cj.getLabelSides()[cc?0:1];
if((cc&&!cm)||(cd&&cm)){if(cl+ch<M){cl=M-ch;
if(cj&&cl+cn>ck){co=false
}}}else{if(cl+cn>b9){cl=b9-cn;
if(cj&&cl+ch<ck){co=false
}}}cr.x=cl
}return co
},getPosition:function(ca,cc,cd,cb){var L=this.axis,M=L.chart,b9=(cb&&M.oldChartHeight)||M.chartHeight;
return{x:ca?L.translate(cc+cd,null,null,cb)+L.transB:L.left+L.offset+(L.opposite?((cb&&M.oldChartWidth)||M.chartWidth)-L.right-L.left:0),y:ca?b9-L.bottom+L.offset-(L.opposite?L.height:0):b9-L.translate(cc+cd,null,null,cb)-L.transB}
},getLabelPosition:function(cj,ck,cb,b9,cc,ch,ca,cg){var L=this.axis,ci=L.transA,cd=L.reversed,cf=L.staggerLines,M=L.chart.renderer.fontMetrics(cc.style.fontSize).b,ce=cc.rotation;
cj=cj+cc.x-(ch&&b9?ch*ci*(cd?-1:1):0);
ck=ck+cc.y-(ch&&!b9?ch*ci*(cd?1:-1):0);
if(ce&&L.side===2){ck-=M-M*a5(ce*H)
}if(!V(cc.y)&&!ce){ck+=M-cb.getBBox().height/2
}if(cf){cb.line=(ca/(cg||1)%cf);
ck+=cb.line*(L.labelOffset/cf)
}return{x:cj,y:ck}
},getMarkPath:function(cb,cc,b9,ca,L,M){return M.crispLine([A,cb,cc,e,cb+(L?0:-b9),cc+(L?b9:0)],ca)
},render:function(cx,cl,cz){var cb=this,cd=cb.axis,ch=cd.options,cv=cd.chart,cq=cv.renderer,ct=cd.horiz,cB=cb.type,cD=cb.label,cg=cb.pos,cA=ch.labels,cC=cb.gridLine,cf=cB?cB+"Grid":"grid",cs=cB?cB+"Tick":"tick",cc=ch[cf+"LineWidth"],cm=ch[cf+"LineColor"],ck=ch[cf+"LineDashStyle"],M=ch[cs+"Length"],cr=ch[cs+"Width"]||0,L=ch[cs+"Color"],ci=ch[cs+"Position"],cj,b9=cb.mark,cu,cn=cA.step,ca,ce=true,cw=cd.tickmarkOffset,co=cb.getPosition(ct,cg,cw,cl),cp=co.x,cy=co.y,cE=((ct&&cp===cd.pos+cd.len)||(!ct&&cy===cd.pos))?-1:1;
this.isActive=true;
if(cc){cj=cd.getPlotLinePath(cg+cw,cc*cE,cl,true);
if(cC===bg){ca={stroke:cm,"stroke-width":cc};
if(ck){ca.dashstyle=ck
}if(!cB){ca.zIndex=1
}if(cl){ca.opacity=0
}cb.gridLine=cC=cc?cq.path(cj).attr(ca).add(cd.gridGroup):null
}if(!cl&&cC&&cj){cC[cb.isNew?"attr":"animate"]({d:cj,opacity:cz})
}}if(cr&&M){if(ci==="inside"){M=-M
}if(cd.opposite){M=-M
}cu=cb.getMarkPath(cp,cy,M,cr*cE,ct,cq);
if(b9){b9.animate({d:cu,opacity:cz})
}else{cb.mark=cq.path(cu).attr({stroke:L,"stroke-width":cr,opacity:cz}).add(cd.axisGroup)
}}if(cD&&!isNaN(cp)){cD.xy=co=cb.getLabelPosition(cp,cy,cD,ct,cA,cw,cx,cn);
if((cb.isFirst&&!cb.isLast&&!R(ch.showFirstLabel,1))||(cb.isLast&&!cb.isFirst&&!R(ch.showLastLabel,1))){ce=false
}else{if(!cd.isRadial&&!cA.step&&!cA.rotation&&!cl&&cz!==0){ce=cb.handleOverflow(cx,co)
}}if(cn&&cx%cn){ce=false
}if(ce&&!isNaN(co.y)){co.opacity=cz;
cD[cb.isNew?"attr":"animate"](co);
cb.isNew=false
}else{cD.attr("y",-9999)
}}},destroy:function(){bV(this,this.axis)
}};
U.PlotLineOrBand=function(L,M){this.axis=L;
if(M){this.options=M;
this.id=M.id
}};
U.PlotLineOrBand.prototype={render:function(){var co=this,cb=co.axis,ci=cb.horiz,ch=(cb.pointRange||0)/2,cl=co.options,cm=cl.label,ck=co.label,ct=cl.width,cr=cl.to,cg=cl.from,cj=V(cg)&&V(cr),cs=cl.value,cd=cl.dashStyle,cq=co.svgElem,cn=[],b9,cf,cv,L,cu,cw,cc=cl.color,M=cl.zIndex,ce=cl.events,ca={},cp=cb.chart.renderer;
if(cb.isLog){cg=ae(cg);
cr=ae(cr);
cs=ae(cs)
}if(ct){cn=cb.getPlotLinePath(cs,ct);
ca={stroke:cc,"stroke-width":ct};
if(cd){ca.dashstyle=cd
}}else{if(cj){cg=b4(cg,cb.min-ch);
cr=j(cr,cb.max+ch);
cn=cb.getPlotBandPath(cg,cr,cl);
if(cc){ca.fill=cc
}if(cl.borderWidth){ca.stroke=cl.borderColor;
ca["stroke-width"]=cl.borderWidth
}}else{return
}}if(V(M)){ca.zIndex=M
}if(cq){if(cn){cq.animate({d:cn},null,cq.onGetPath)
}else{cq.hide();
cq.onGetPath=function(){cq.show()
};
if(ck){co.label=ck=ck.destroy()
}}}else{if(cn&&cn.length){co.svgElem=cq=cp.path(cn).attr(ca).add();
if(ce){b9=function(cx){cq.on(cx,function(cy){ce[cx].apply(co,[cy])
})
};
for(cf in ce){b9(cf)
}}}}if(cm&&V(cm.text)&&cn&&cn.length&&cb.width>0&&cb.height>0){cm=bR({align:ci&&cj&&"center",x:ci?!cj&&4:10,verticalAlign:!ci&&cj&&"middle",y:ci?cj?16:10:cj?6:-4,rotation:ci&&!cj&&90},cm);
if(!ck){ca={align:cm.textAlign||cm.align,rotation:cm.rotation};
if(V(M)){ca.zIndex=M
}co.label=ck=cp.text(cm.text,0,0,cm.useHTML).attr(ca).css(cm.style).add()
}cv=[cn[1],cn[4],R(cn[6],cn[1])];
L=[cn[2],cn[5],R(cn[7],cn[2])];
cu=z(cv);
cw=z(L);
ck.align(cm,false,{x:cu,y:cw,width:bn(cv)-cu,height:bn(L)-cw});
ck.show()
}else{if(ck){ck.hide()
}}return co
},destroy:function(){bi(this.axis.plotLinesAndBands,this);
delete this.axis;
bV(this)
}};
bv={getPlotBandPath:function(L,b9){var ca=this.getPlotLinePath(b9),M=this.getPlotLinePath(L);
if(M&&ca){M.push(ca[4],ca[5],ca[1],ca[2])
}else{M=null
}return M
},addPlotBand:function(L){this.addPlotBandOrLine(L,"plotBands")
},addPlotLine:function(L){this.addPlotBandOrLine(L,"plotLines")
},addPlotBandOrLine:function(b9,L){var M=new U.PlotLineOrBand(this,b9).render(),ca=this.userOptions;
if(M){if(L){ca[L]=ca[L]||[];
ca[L].push(b9)
}this.plotLinesAndBands.push(M)
}return M
},removePlotBandOrLine:function(L){var b9=this.plotLinesAndBands,M=this.options,ca=this.userOptions,cb=b9.length;
while(cb--){if(b9[cb].id===L){b9[cb].destroy()
}}T([M.plotLines||[],ca.plotLines||[],M.plotBands||[],ca.plotBands||[]],function(cc){cb=cc.length;
while(cb--){if(cc[cb].id===L){bi(cc,cc[cb])
}}})
}};
function ba(){this.init.apply(this,arguments)
}ba.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:false,gridLineColor:"#C0C0C0",labels:C,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:false,formatter:function(){return at(this.total,-1)
},style:C.style}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:20},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-15},title:{rotation:0}},init:function(ce,cc){var b9=cc.isX,cd=this;
cd.horiz=ce.inverted?!b9:b9;
cd.isXAxis=b9;
cd.coll=b9?"xAxis":"yAxis";
cd.opposite=cc.opposite;
cd.side=cc.side||(cd.horiz?(cd.opposite?0:2):(cd.opposite?1:3));
cd.setOptions(cc);
var ca=this.options,cb=ca.type,M=cb==="datetime";
cd.labelFormatter=ca.labels.formatter||cd.defaultLabelFormatter;
cd.userOptions=cc;
cd.minPixelPadding=0;
cd.chart=ce;
cd.reversed=ca.reversed;
cd.zoomEnabled=ca.zoomEnabled!==false;
cd.categories=ca.categories||cb==="category";
cd.names=[];
cd.isLog=cb==="logarithmic";
cd.isDatetimeAxis=M;
cd.isLinked=V(ca.linkedTo);
cd.tickmarkOffset=(cd.categories&&ca.tickmarkPlacement==="between")?0.5:0;
cd.ticks={};
cd.labelEdge=[];
cd.minorTicks={};
cd.plotLinesAndBands=[];
cd.alternateBands={};
cd.len=0;
cd.minRange=cd.userMinRange=ca.minRange||ca.maxZoom;
cd.range=ca.range;
cd.offset=ca.offset||0;
cd.stacks={};
cd.oldStacks={};
cd.max=null;
cd.min=null;
cd.crosshair=R(ca.crosshair,bK(ce.options.tooltip.crosshairs)[b9?0:1],false);
var L,cf=cd.options.events;
if(bZ(cd,ce.axes)===-1){if(b9&&!this.isColorAxis){ce.axes.splice(ce.xAxis.length,0,cd)
}else{ce.axes.push(cd)
}ce[cd.coll].push(cd)
}cd.series=cd.series||[];
if(ce.inverted&&b9&&cd.reversed===bg){cd.reversed=true
}cd.removePlotBand=cd.removePlotBandOrLine;
cd.removePlotLine=cd.removePlotBandOrLine;
for(L in cf){bx(cd,L,cf[L])
}if(cd.isLog){cd.val2lin=ae;
cd.lin2val=bE
}},setOptions:function(L){this.options=bR(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],bR(bs[this.coll],L))
},defaultLabelFormatter:function(){var cb=this.axis,ca=this.value,cc=cb.categories,cd=this.dateTimeLabelFormat,M=bs.lang.numericSymbols,cf=M&&M.length,cg,b9,ce=cb.options.labels.format,L=cb.isLog?ca:cb.tickInterval;
if(ce){b9=ay(ce,this)
}else{if(cc){b9=ca
}else{if(cd){b9=aV(cd,ca)
}else{if(cf&&L>=1000){while(cf--&&b9===bg){cg=Math.pow(1000,cf+1);
if(L>=cg&&M[cf]!==null){b9=at(ca/cg,-1)+M[cf]
}}}}}}if(b9===bg){if(a4(ca)>=10000){b9=at(ca,0)
}else{b9=at(ca,-1,bg,"")
}}return b9
},getSeriesExtremes:function(){var L=this,M=L.chart;
L.hasVisibleSeries=false;
L.dataMin=L.dataMax=null;
if(L.buildStacks){L.buildStacks()
}T(L.series,function(b9){if(b9.visible||!M.options.chart.ignoreHiddenSeries){var cc=b9.options,ce,cd=cc.threshold,cb,ca;
L.hasVisibleSeries=true;
if(L.isLog&&cd<=0){cd=null
}if(L.isXAxis){ce=b9.xData;
if(ce.length){L.dataMin=j(R(L.dataMin,ce[0]),z(ce));
L.dataMax=b4(R(L.dataMax,ce[0]),bn(ce))
}}else{b9.getExtremes();
ca=b9.dataMax;
cb=b9.dataMin;
if(V(cb)&&V(ca)){L.dataMin=j(R(L.dataMin,cb),cb);
L.dataMax=b4(R(L.dataMax,ca),ca)
}if(V(cd)){if(L.dataMin>=cd){L.dataMin=cd;
L.ignoreMinPadding=true
}else{if(L.dataMax<cd){L.dataMax=cd;
L.ignoreMaxPadding=true
}}}}}})
},translate:function(ck,M,b9,cf,cb,cg){var L=this,cj=1,ca=0,cc=cf?L.oldTransA:L.transA,cd=cf?L.oldMin:L.min,ci,ce=L.minPixelPadding,ch=(L.options.ordinal||(L.isLog&&cb))&&L.lin2val;
if(!cc){cc=L.transA
}if(b9){cj*=-1;
ca=L.len
}if(L.reversed){cj*=-1;
ca-=cj*(L.sector||L.len)
}if(M){ck=ck*cj+ca;
ck-=ce;
ci=ck/cc+cd;
if(ch){ci=L.lin2val(ci)
}}else{if(ch){ck=L.val2lin(ck)
}if(cg==="between"){cg=0.5
}ci=cj*(ck-cd)*cc+ca+(cj*ce)+(aD(cg)?cc*cg*L.pointRange:0)
}return ci
},toPixels:function(M,L){return this.translate(M,false,!this.horiz,null,true)+(L?0:this.pos)
},toValue:function(M,L){return this.translate(M-(L?0:this.pos),true,!this.horiz,null,true)
},getPlotLinePath:function(cn,ci,cj,ch,cm){var cb=this,ce=cb.chart,cc=cb.left,cd=cb.top,L,b9,M,ca,cf=(cj&&ce.oldChartHeight)||ce.chartHeight,cg=(cj&&ce.oldChartWidth)||ce.chartWidth,ck,cl=cb.transB;
cm=R(cm,cb.translate(cn,null,null,cj));
L=M=c(cm+cl);
b9=ca=c(cf-cm-cl);
if(isNaN(cm)){ck=true
}else{if(cb.horiz){b9=cd;
ca=cf-cb.bottom;
if(L<cc||L>cc+cb.width){ck=true
}}else{L=cc;
M=cg-cb.right;
if(b9<cd||b9>cd+cb.height){ck=true
}}}return ck&&!ch?null:ce.renderer.crispLine([A,L,b9,e,M,ca],ci||1)
},getLinearTickPositions:function(cd,b9,M){var ca,L,cc=bk(I(b9/cd)*cd),cb=bk(Z(M/cd)*cd),ce=[];
if(b9===M&&aD(b9)){return[b9]
}ca=cc;
while(ca<=cb){ce.push(ca);
ca=bk(ca+cd);
if(ca===L){break
}L=ca
}return ce
},getMinorTickPositions:function(){var L=this,cc=L.options,ce=L.tickPositions,ca=L.minorTickInterval,cb=[],cd,M,b9;
if(L.isLog){b9=ce.length;
for(M=1;
M<b9;
M++){cb=cb.concat(L.getLogTickPositions(ca,ce[M-1],ce[M],true))
}}else{if(L.isDatetimeAxis&&cc.minorTickInterval==="auto"){cb=cb.concat(L.getTimeTicks(L.normalizeTimeTickInterval(ca),L.min,L.max,cc.startOfWeek));
if(cb[0]<L.min){cb.shift()
}}else{for(cd=L.min+(ce[0]-L.min)%ca;
cd<=L.max;
cd+=ca){cb.push(cd)
}}}return cb
},adjustForMinRange:function(){var L=this,ch=L.options,ce=L.min,cc=L.max,ck,ci=L.dataMax-L.dataMin>=L.minRange,M,ca,b9,cj,cb,cf,cd;
if(L.isXAxis&&L.minRange===bg&&!L.isLog){if(V(ch.min)||V(ch.max)){L.minRange=null
}else{T(L.series,function(cl){cj=cl.xData;
cb=cl.xIncrement?1:cj.length-1;
for(ca=cb;
ca>0;
ca--){b9=cj[ca]-cj[ca-1];
if(M===bg||b9<M){M=b9
}}});
L.minRange=j(M*5,L.dataMax-L.dataMin)
}}if(cc-ce<L.minRange){var cg=L.minRange;
ck=(cg-cc+ce)/2;
cf=[ce-ck,R(ch.min,ce-ck)];
if(ci){cf[2]=L.dataMin
}ce=bn(cf);
cd=[ce+cg,R(ch.max,ce+cg)];
if(ci){cd[2]=L.dataMax
}cc=z(cd);
if(cc-ce<cg){cf[0]=cc-cg;
cf[1]=R(ch.min,cc-cg);
ce=bn(cf)
}}L.min=ce;
L.max=cc
},setAxisTranslation:function(ca){var cc=this,b9=cc.max-cc.min,L=cc.axisPointRange||0,cd,cg=0,M=0,cf=cc.linkedParent,ch,ce=!!cc.categories,cb=cc.transA;
if(cc.isXAxis||ce||L){if(cf){cg=cf.minPointOffset;
M=cf.pointRangePadding
}else{T(cc.series,function(cj){var cl=ce?1:(cc.isXAxis?cj.pointRange:(cc.axisPointRange||0)),ci=cj.options.pointPlacement,ck=cj.closestPointRange;
if(cl>b9){cl=0
}L=b4(L,cl);
cg=b4(cg,aF(ci)?0:cl/2);
M=b4(M,ci==="on"?0:cl);
if(!cj.noSharedTooltip&&V(ck)){cd=V(cd)?j(cd,ck):ck
}})
}ch=cc.ordinalSlope&&cd?cc.ordinalSlope/cd:1;
cc.minPointOffset=cg=cg*ch;
cc.pointRangePadding=M=M*ch;
cc.pointRange=j(L,b9);
cc.closestPointRange=cd
}if(ca){cc.oldTransA=cb
}cc.translationSlope=cc.transA=cb=cc.len/((b9+M)||1);
cc.transB=cc.horiz?cc.left:cc.bottom;
cc.minPixelPadding=cb*cg
},setTickPositions:function(ca){var cg=this,ci=cg.chart,L=cg.options,cl=cg.isLog,cj=cg.isDatetimeAxis,cm=cg.isXAxis,ck=cg.isLinked,ce=cg.options.tickPositioner,cq=L.maxPadding,cr=L.minPadding,co,cp,cc=L.tickInterval,ct=L.minTickInterval,cd=L.tickPixelInterval,cf,cn,ch=cg.categories;
if(ck){cg.linkedParent=ci[cg.coll][L.linkedTo];
cp=cg.linkedParent.getExtremes();
cg.min=R(cp.min,cp.dataMin);
cg.max=R(cp.max,cp.dataMax);
if(L.type!==cg.linkedParent.options.type){bM(11,1)
}}else{cg.min=R(cg.userMin,L.min,cg.dataMin);
cg.max=R(cg.userMax,L.max,cg.dataMax)
}if(cl){if(!ca&&j(cg.min,R(cg.dataMin,cg.min))<=0){bM(10,1)
}cg.min=bk(ae(cg.min));
cg.max=bk(ae(cg.max))
}if(cg.range&&V(cg.max)){cg.userMin=cg.min=b4(cg.min,cg.max-cg.range);
cg.userMax=cg.max;
cg.range=null
}if(cg.beforePadding){cg.beforePadding()
}cg.adjustForMinRange();
if(!ch&&!cg.axisPointRange&&!cg.usePercentage&&!ck&&V(cg.min)&&V(cg.max)){co=cg.max-cg.min;
if(co){if(!V(L.min)&&!V(cg.userMin)&&cr&&(cg.dataMin<0||!cg.ignoreMinPadding)){cg.min-=co*cr
}if(!V(L.max)&&!V(cg.userMax)&&cq&&(cg.dataMax>0||!cg.ignoreMaxPadding)){cg.max+=co*cq
}}}if(aD(L.floor)){cg.min=b4(cg.min,L.floor)
}if(aD(L.ceiling)){cg.max=j(cg.max,L.ceiling)
}if(cg.min===cg.max||cg.min===undefined||cg.max===undefined){cg.tickInterval=1
}else{if(ck&&!cc&&cd===cg.linkedParent.options.tickPixelInterval){cg.tickInterval=cg.linkedParent.tickInterval
}else{cg.tickInterval=R(cc,ch?1:(cg.max-cg.min)*cd/b4(cg.len,cd));
if(!V(cc)&&cg.len<cd&&!this.isRadial&&!this.isLog&&!ch&&L.startOnTick&&L.endOnTick){cn=true;
cg.tickInterval/=4
}}}if(cm&&!ca){T(cg.series,function(cu){cu.processData(cg.min!==cg.oldMin||cg.max!==cg.oldMax)
})
}cg.setAxisTranslation(true);
if(cg.beforeSetTickPositions){cg.beforeSetTickPositions()
}if(cg.postProcessTickInterval){cg.tickInterval=cg.postProcessTickInterval(cg.tickInterval)
}if(cg.pointRange){cg.tickInterval=b4(cg.pointRange,cg.tickInterval)
}if(!cc&&cg.tickInterval<ct){cg.tickInterval=ct
}if(!cj&&!cl){if(!cc){cg.tickInterval=W(cg.tickInterval,null,bG(cg.tickInterval),L)
}}cg.minorTickInterval=L.minorTickInterval==="auto"&&cg.tickInterval?cg.tickInterval/5:L.minorTickInterval;
cg.tickPositions=cf=L.tickPositions?[].concat(L.tickPositions):(ce&&ce.apply(cg,[cg.min,cg.max]));
if(!cf){if(!cg.ordinalPositions&&(cg.max-cg.min)/cg.tickInterval>b4(2*cg.len,200)){bM(19,true)
}if(cj){cf=cg.getTimeTicks(cg.normalizeTimeTickInterval(cg.tickInterval,L.units),cg.min,cg.max,L.startOfWeek,cg.ordinalPositions,cg.closestPointRange,true)
}else{if(cl){cf=cg.getLogTickPositions(cg.tickInterval,cg.min,cg.max)
}else{cf=cg.getLinearTickPositions(cg.tickInterval,cg.min,cg.max)
}}if(cn){cf.splice(1,cf.length-2)
}cg.tickPositions=cf
}if(!ck){var b9=cf[0],M=cf[cf.length-1],cs=cg.minPointOffset||0,cb;
if(L.startOnTick){cg.min=b9
}else{if(cg.min-cs>b9){cf.shift()
}}if(L.endOnTick){cg.max=M
}else{if(cg.max+cs<M){cf.pop()
}}if(cf.length===1){cb=a4(cg.max)>10000000000000?1:0.001;
cg.min-=cb;
cg.max+=cb
}}},setMaxTicks:function(){var L=this.chart,b9=L.maxTicks||{},ca=this.tickPositions,M=this._maxTicksKey=[this.coll,this.pos,this.len].join("-");
if(!this.isLinked&&!this.isDatetimeAxis&&ca&&ca.length>(b9[M]||0)&&this.options.alignTicks!==false){b9[M]=ca.length
}L.maxTicks=b9
},adjustTickAmount:function(){var L=this,b9=L.chart,ca=L._maxTicksKey,ce=L.tickPositions,cb=b9.maxTicks;
if(cb&&cb[ca]&&!L.isDatetimeAxis&&!L.categories&&!L.isLinked&&L.options.alignTicks!==false&&this.min!==bg){var cc=L.tickAmount,M=ce.length,cd;
L.tickAmount=cd=cb[ca];
if(M<cd){while(ce.length<cd){ce.push(bk(ce[ce.length-1]+L.tickInterval))
}L.transA*=(M-1)/(cd-1);
L.max=ce[ce.length-1]
}if(V(cc)&&cd!==cc){L.isDirty=true
}}},setScale:function(){var L=this,cb=L.stacks,cc,M,ca,b9;
L.oldMin=L.min;
L.oldMax=L.max;
L.oldAxisLength=L.len;
L.setAxisSize();
b9=L.len!==L.oldAxisLength;
T(L.series,function(cd){if(cd.isDirtyData||cd.isDirty||cd.xAxis.isDirty){ca=true
}});
if(b9||ca||L.isLinked||L.forceRedraw||L.userMin!==L.oldUserMin||L.userMax!==L.oldUserMax){if(!L.isXAxis){for(cc in cb){for(M in cb[cc]){cb[cc][M].total=null;
cb[cc][M].cum=0
}}}L.forceRedraw=false;
L.getSeriesExtremes();
L.setTickPositions();
L.oldUserMin=L.userMin;
L.oldUserMax=L.userMax;
if(!L.isDirty){L.isDirty=b9||L.min!==L.oldMin||L.max!==L.oldMax
}}else{if(!L.isXAxis){if(L.oldStacks){cb=L.stacks=L.oldStacks
}for(cc in cb){for(M in cb[cc]){cb[cc][M].cum=cb[cc][M].total
}}}}L.setMaxTicks()
},setExtremes:function(cc,cb,cd,L,ca){var M=this,b9=M.chart;
cd=R(cd,true);
ca=bb(ca,{min:cc,max:cb});
x(M,"setExtremes",ca,function(){M.userMin=cc;
M.userMax=cb;
M.eventArgs=ca;
M.isDirtyExtremes=true;
if(cd){b9.redraw(L)
}})
},zoom:function(b9,M){var L=this.dataMin,cb=this.dataMax,ca=this.options;
if(!this.allowZoomOutside){if(V(L)&&b9<=j(L,R(ca.min,L))){b9=bg
}if(V(cb)&&M>=b4(cb,R(ca.max,cb))){M=bg
}}this.displayBtn=b9!==bg||M!==bg;
this.setExtremes(b9,M,false,bg,{trigger:"zoom"});
return true
},setAxisSize:function(){var cb=this.chart,L=this.options,cf=L.offsetLeft||0,cg=L.offsetRight||0,cd=this.horiz,ca=R(L.width,cb.plotWidth-cf+cg),cc=R(L.height,cb.plotHeight),b9=R(L.top,cb.plotTop),ce=R(L.left,cb.plotLeft+cf),M=/%$/;
if(M.test(cc)){cc=parseInt(cc,10)/100*cb.plotHeight
}if(M.test(b9)){b9=parseInt(b9,10)/100*cb.plotHeight+cb.plotTop
}this.left=ce;
this.top=b9;
this.width=ca;
this.height=cc;
this.bottom=cb.chartHeight-cc-b9;
this.right=cb.chartWidth-ca-ce;
this.len=b4(cd?ca:cc,0);
this.pos=cd?ce:b9
},getExtremes:function(){var L=this,M=L.isLog;
return{min:M?bk(bE(L.min)):L.min,max:M?bk(bE(L.max)):L.max,dataMin:L.dataMin,dataMax:L.dataMax,userMin:L.userMin,userMax:L.userMax}
},getThreshold:function(ca){var cb=this,L=cb.isLog;
var b9=L?bE(cb.min):cb.min,M=L?bE(cb.max):cb.max;
if(b9>ca||ca===null){ca=b9
}else{if(M<ca){ca=M
}}return cb.translate(ca,0,1,0,1)
},autoLabelAlign:function(b9){var M,L=(R(b9,0)-(this.side*90)+720)%360;
if(L>15&&L<165){M="right"
}else{if(L>195&&L<345){M="left"
}else{M="center"
}}return M
},getOffset:function(){var cC=this,cz=cC.chart,cs=cz.renderer,cp=cC.options,cq=cC.tickPositions,cw=cC.ticks,ce=cC.horiz,ct=cC.side,cb=cz.inverted?[1,0,3,2][ct]:ct,cc,cv,cl=0,cx,cy=0,ci=cp.title,cj=cp.labels,cf=0,cr=cz.axisOffset,cD=cz.clipOffset,ca=[-1,1,1,-1][ct],cn,cg,cA=1,ch=R(cj.maxStaggerLines,5),L,cm,cd,co,cu,M,cB,b9,ck=ct===2?cs.fontMetrics(cj.style.fontSize).b:0;
cC.hasData=cc=(cC.hasVisibleSeries||(V(cC.min)&&V(cC.max)&&!!cq));
cC.showAxis=cv=cc||R(cp.showEmpty,true);
cC.staggerLines=cC.horiz&&cj.staggerLines;
if(!cC.axisGroup){cC.gridGroup=cs.g("grid").attr({zIndex:cp.gridZIndex||1}).add();
cC.axisGroup=cs.g("axis").attr({zIndex:cp.zIndex||2}).add();
cC.labelGroup=cs.g("axis-labels").attr({zIndex:cj.zIndex||7}).addClass(Y+cC.coll.toLowerCase()+"-labels").add()
}if(cc||cC.isLinked){cC.labelAlign=R(cj.align||cC.autoLabelAlign(cj.rotation));
T(cq,function(cE){if(!cw[cE]){cw[cE]=new bY(cC,cE)
}else{cw[cE].addLabel()
}});
if(cC.horiz&&!cC.staggerLines&&ch&&!cj.rotation){L=cC.reversed?[].concat(cq).reverse():cq;
while(cA<ch){cm=[];
cd=false;
for(cg=0;
cg<L.length;
cg++){co=L[cg];
cu=cw[co].label&&cw[co].label.getBBox();
cB=cu?cu.width:0;
b9=cg%cA;
if(cB){M=cC.translate(co);
if(cm[b9]!==bg&&M<cm[b9]){cd=true
}cm[b9]=M+cB
}}if(cd){cA++
}else{break
}}if(cA>1){cC.staggerLines=cA
}}T(cq,function(cE){if(ct===0||ct===2||{1:"left",3:"right"}[ct]===cC.labelAlign){cf=b4(cw[cE].getLabelSize(),cf)
}});
if(cC.staggerLines){cf*=cC.staggerLines;
cC.labelOffset=cf
}}else{for(cn in cw){cw[cn].destroy();
delete cw[cn]
}}if(ci&&ci.text&&ci.enabled!==false){if(!cC.axisTitle){cC.axisTitle=cs.text(ci.text,0,0,ci.useHTML).attr({zIndex:7,rotation:ci.rotation||0,align:ci.textAlign||{low:"left",middle:"center",high:"right"}[ci.align]}).addClass(Y+this.coll.toLowerCase()+"-title").css(ci.style).add(cC.axisGroup);
cC.axisTitle.isNew=true
}if(cv){cl=cC.axisTitle.getBBox()[ce?"height":"width"];
cy=R(ci.margin,ce?5:10);
cx=ci.offset
}cC.axisTitle[cv?"show":"hide"]()
}cC.offset=ca*R(cp.offset,cr[ct]);
cC.axisTitleMargin=R(cx,cf+cy+(cf&&(ca*cp.labels[ce?"y":"x"]-ck)));
cr[ct]=b4(cr[ct],cC.axisTitleMargin+cl+ca*cC.offset);
cD[cb]=b4(cD[cb],I(cp.lineWidth/2)*2)
},getLinePath:function(cb){var L=this.chart,cd=this.opposite,cc=this.offset,M=this.horiz,b9=this.left+(cd?this.width:0)+cc,ca=L.chartHeight-this.bottom-(cd?this.height:0)+cc;
if(cd){cb*=-1
}return L.renderer.crispLine([A,M?this.left:b9,M?ca:this.top,e,M?L.chartWidth-this.right:b9,M?ca:L.chartHeight-this.bottom],cb)
},getTitlePosition:function(){var L=this.horiz,cd=this.left,cg=this.top,ce=this.len,cf=this.options.title,M=L?cd:cg,cb=this.opposite,ca=this.offset,ch=a6(cf.style.fontSize||12),cc={low:M+(L?0:ce),middle:M+ce/2,high:M+(L?ce:0)}[cf.align],b9=(L?cg+this.height:cd)+(L?1:-1)*(cb?-1:1)*this.axisTitleMargin+(this.side===2?ch:0);
return{x:L?cc:b9+(cb?this.width:0)+ca+(cf.x||0),y:L?b9-(cb?this.height:0)+ca:cc+(cf.y||0)}
},render:function(){var cn=this,ct=cn.horiz,cd=cn.reversed,cp=cn.chart,cc=cp.renderer,ca=cn.options,cv=cn.isLog,cu=cn.isLinked,cj=cn.tickPositions,cg,co=cn.axisTitle,ck=cn.ticks,b9=cn.minorTicks,cm=cn.alternateBands,ch=ca.stackLabels,M=ca.alternateGridColor,ci=cn.tickmarkOffset,L=ca.lineWidth,cx,cs=cp.hasRendered,cf=cs&&V(cn.oldMin)&&!isNaN(cn.oldMin),cr=cn.hasData,ce=cn.showAxis,cq,cb=ca.labels.overflow,cw=cn.justifyLabels=ct&&cb!==false,cl;
cn.labelEdge.length=0;
cn.justifyToPlot=cb==="justify";
T([ck,b9,cm],function(cy){var cz;
for(cz in cy){cy[cz].isActive=false
}});
if(cr||cu){if(cn.minorTickInterval&&!cn.categories){T(cn.getMinorTickPositions(),function(cy){if(!b9[cy]){b9[cy]=new bY(cn,cy,"minor")
}if(cf&&b9[cy].isNew){b9[cy].render(null,true)
}b9[cy].render(null,false,1)
})
}if(cj.length){cg=cj.slice();
if((ct&&cd)||(!ct&&!cd)){cg.reverse()
}if(cw){cg=cg.slice(1).concat([cg[0]])
}T(cg,function(cz,cy){if(cw){cy=(cy===cg.length-1)?0:cy+1
}if(!cu||(cz>=cn.min&&cz<=cn.max)){if(!ck[cz]){ck[cz]=new bY(cn,cz)
}if(cf&&ck[cz].isNew){ck[cz].render(cy,true,0.1)
}ck[cz].render(cy,false,1)
}});
if(ci&&cn.min===0){if(!ck[-1]){ck[-1]=new bY(cn,-1,null,true)
}ck[-1].render(-1)
}}if(M){T(cj,function(cz,cy){if(cy%2===0&&cz<cn.max){if(!cm[cz]){cm[cz]=new U.PlotLineOrBand(cn)
}cq=cz+ci;
cl=cj[cy+1]!==bg?cj[cy+1]+ci:cn.max;
cm[cz].options={from:cv?bE(cq):cq,to:cv?bE(cl):cl,color:M};
cm[cz].render();
cm[cz].isActive=true
}})
}if(!cn._addedPlotLB){T((ca.plotLines||[]).concat(ca.plotBands||[]),function(cy){cn.addPlotBandOrLine(cy)
});
cn._addedPlotLB=true
}}T([ck,b9,cm],function(cy){var cD,cC,cB=[],cz=aq?aq.duration||500:0,cA=function(){cC=cB.length;
while(cC--){if(cy[cB[cC]]&&!cy[cB[cC]].isActive){cy[cB[cC]].destroy();
delete cy[cB[cC]]
}}};
for(cD in cy){if(!cy[cD].isActive){cy[cD].render(cD,false,0);
cy[cD].isActive=false;
cB.push(cD)
}}if(cy===cm||!cp.hasRendered||!cz){cA()
}else{if(cz){setTimeout(cA,cz)
}}});
if(L){cx=cn.getLinePath(L);
if(!cn.axisLine){cn.axisLine=cc.path(cx).attr({stroke:ca.lineColor,"stroke-width":L,zIndex:7}).add(cn.axisGroup)
}else{cn.axisLine.animate({d:cx})
}cn.axisLine[ce?"show":"hide"]()
}if(co&&ce){co[co.isNew?"attr":"animate"](cn.getTitlePosition());
co.isNew=false
}if(ch&&ch.enabled){cn.renderStackTotals()
}cn.isDirty=false
},redraw:function(){var L=this,M=L.chart,b9=M.pointer;
if(b9){b9.reset(true)
}L.render();
T(L.plotLinesAndBands,function(ca){ca.render()
});
T(L.series,function(ca){ca.isDirty=true
})
},destroy:function(b9){var L=this,cc=L.stacks,cb,ca=L.plotLinesAndBands,M;
if(!b9){b(L)
}for(cb in cc){bV(cc[cb]);
cc[cb]=null
}T([L.ticks,L.minorTicks,L.alternateBands],function(cd){bV(cd)
});
M=ca.length;
while(M--){ca[M].destroy()
}T(["stackTotalGroup","axisLine","axisTitle","axisGroup","cross","gridGroup","labelGroup"],function(cd){if(L[cd]){L[cd]=L[cd].destroy()
}});
if(this.cross){this.cross.destroy()
}},drawCrosshair:function(b9,cc){if(!this.crosshair){return
}if((V(cc)||!R(this.crosshair.snap,true))===false){this.hideCrosshair();
return
}var cb,ca=this.crosshair,L=ca.animation,cd;
if(!R(ca.snap,true)){cd=(this.horiz?b9.chartX-this.pos:this.len-b9.chartY+this.pos)
}else{if(V(cc)){cd=(this.chart.inverted!=this.horiz)?cc.plotX:this.len-cc.plotY
}}if(this.isRadial){cb=this.getPlotLinePath(this.isXAxis?cc.x:R(cc.stackY,cc.y))
}else{cb=this.getPlotLinePath(null,null,null,null,cd)
}if(cb===null){this.hideCrosshair();
return
}if(this.cross){this.cross.attr({visibility:m})[L?"animate":"attr"]({d:cb},L)
}else{var M={"stroke-width":ca.width||1,stroke:ca.color||"#C0C0C0",zIndex:ca.zIndex||2};
if(ca.dashStyle){M.dashstyle=ca.dashStyle
}this.cross=this.chart.renderer.path(cb).attr(M).add()
}},hideCrosshair:function(){if(this.cross){this.cross.hide()
}}};
bb(ba.prototype,bv);
ba.prototype.getTimeTicks=function(ci,cd,cc,cj){var ck=[],b9,M={},cm=bs.global.useUTC,ch,ce=new Date(cd-bS),ca=ci.unitRange,L=ci.count;
if(V(cd)){if(ca>=aH[bc]){ce.setMilliseconds(0);
ce.setSeconds(ca>=aH[q]?0:L*I(ce.getSeconds()/L))
}if(ca>=aH[q]){ce[O](ca>=aH[ai]?0:L*I(ce[w]()/L))
}if(ca>=aH[ai]){ce[bq](ca>=aH[ac]?0:L*I(ce[ab]()/L))
}if(ca>=aH[ac]){ce[aU](ca>=aH[h]?1:L*I(ce[bt]()/L))
}if(ca>=aH[h]){ce[J](ca>=aH[am]?0:L*I(ce[b0]()/L));
ch=ce[r]()
}if(ca>=aH[am]){ch-=ch%L;
ce[d](ch)
}if(ca===aH[aX]){ce[aU](ce[bt]()-ce[aI]()+R(cj,1))
}b9=1;
if(bS){ce=new Date(ce.getTime()+bS)
}ch=ce[r]();
var cl=ce.getTime(),cg=ce[b0](),cf=ce[bt](),cb=cm?bS:(24*3600*1000+ce.getTimezoneOffset()*60*1000)%(24*3600*1000);
while(cl<cc){ck.push(cl);
if(ca===aH[am]){cl=bT(ch+b9*L,0)
}else{if(ca===aH[h]){cl=bT(ch,cg+b9*L)
}else{if(!cm&&(ca===aH[ac]||ca===aH[aX])){cl=bT(ch,cg,cf+b9*L*(ca===aH[ac]?1:7))
}else{cl+=ca*L
}}}b9++
}ck.push(cl);
T(bL(ck,function(cn){return ca<=aH[ai]&&cn%aH[ac]===cb
}),function(cn){M[cn]=ac
})
}ck.info=bb(ci,{higherRanks:M,totalRange:ca*L});
return ck
};
ba.prototype.normalizeTimeTickInterval=function(b9,cc){var cb=cc||[[av,[1,2,5,10,20,25,50,100,200,500]],[bc,[1,2,5,10,15,30]],[q,[1,2,5,10,15,30]],[ai,[1,2,3,4,6,8,12]],[ac,[1,2]],[aX,[1,2]],[h,[1,2,3,4,6]],[am,null]],ca=cb[cb.length-1],cf=aH[ca[0]],M=ca[1],cd,ce;
for(ce=0;
ce<cb.length;
ce++){ca=cb[ce];
cf=aH[ca[0]];
M=ca[1];
if(cb[ce+1]){var L=(cf*M[M.length-1]+aH[cb[ce+1][0]])/2;
if(b9<=L){break
}}}if(cf===aH[am]&&b9<5*cf){M=[1,2,5]
}cd=W(b9/cf,M,ca[0]===am?b4(bG(b9/cf),1):1);
return{unitRange:cf,count:cd,unitName:ca[0]}
};
ba.prototype.getLogTickPositions=function(L,cc,cb,cd){var cn=this,ce=cn.options,co=cn.len,cg=[];
if(!cd){cn._minorAutoInterval=null
}if(L>=0.5){L=c(L);
cg=cn.getLinearTickPositions(L,cc,cb)
}else{if(L>=0.08){var cj=I(cc),cs,cr,M,ca,cf,b9,cp;
if(L>0.3){cs=[1,2,4]
}else{if(L>0.15){cs=[1,2,4,6,8]
}else{cs=[1,2,3,4,5,6,7,8,9]
}}for(cr=cj;
cr<cb+1&&!cp;
cr++){ca=cs.length;
for(M=0;
M<ca&&!cp;
M++){cf=ae(bE(cr)*cs[M]);
if(cf>cc&&(!cd||b9<=cb)){cg.push(b9)
}if(b9>cb){cp=true
}b9=cf
}}}else{var ci=bE(cc),ch=bE(cb),ck=ce[cd?"minorTickInterval":"tickInterval"],cq=ck==="auto"?null:ck,cl=ce.tickPixelInterval/(cd?5:1),cm=cd?co/cn.tickPositions.length:co;
L=R(cq,cn._minorAutoInterval,(ch-ci)*cl/(cm||1));
L=W(L,null,bG(L));
cg=a7(cn.getLinearTickPositions(L,ci,ch),ae);
if(!cd){cn._minorAutoInterval=L/5
}}}if(!cd){cn.tickInterval=L
}return cg
};
var ad=U.Tooltip=function(){this.init.apply(this,arguments)
};
ad.prototype={init:function(L,M){var cb=M.borderWidth,ca=M.style,b9=a6(ca.padding);
this.chart=L;
this.options=M;
this.crosshairs=[];
this.now={x:0,y:0};
this.isHidden=true;
this.label=L.renderer.label("",0,0,M.shape||"callout",null,null,M.useHTML,null,"tooltip").attr({padding:b9,fill:M.backgroundColor,"stroke-width":cb,r:M.borderRadius,zIndex:8}).css(ca).css({padding:0}).add().attr({y:-9999});
if(!aQ){this.label.shadow(M.shadow)
}this.shared=M.shared
},destroy:function(){if(this.label){this.label=this.label.destroy()
}clearTimeout(this.hideTimer);
clearTimeout(this.tooltipTimeout)
},move:function(cd,ce,L,M){var cc=this,ca=cc.now,b9=cc.options.animation!==false&&!cc.isHidden,cb=cc.followPointer||cc.len>1;
bb(ca,{x:b9?(2*ca.x+cd)/3:cd,y:b9?(ca.y+ce)/2:ce,anchorX:cb?bg:b9?(2*ca.anchorX+L)/3:L,anchorY:cb?bg:b9?(ca.anchorY+M)/2:M});
cc.label.attr(ca);
if(b9&&(a4(cd-ca.x)>1||a4(ce-ca.y)>1)){clearTimeout(this.tooltipTimeout);
this.tooltipTimeout=setTimeout(function(){if(cc){cc.move(cd,ce,L,M)
}},32)
}},hide:function(){var M=this,L;
clearTimeout(this.hideTimer);
if(!this.isHidden){L=this.chart.hoverPoints;
this.hideTimer=setTimeout(function(){M.label.fadeOut();
M.isHidden=true
},R(this.options.hideDelay,500));
if(L){T(L,function(b9){b9.setState()
})
}this.chart.hoverPoints=null
}},getAnchor:function(ca,cf){var cb,cd=this.chart,ce=cd.inverted,L=cd.plotTop,M=0,b9=0,cc;
ca=bK(ca);
cb=ca[0].tooltipPos;
if(this.followPointer&&cf){if(cf.chartX===bg){cf=cd.pointer.normalize(cf)
}cb=[cf.chartX-cd.plotLeft,cf.chartY-L]
}if(!cb){T(ca,function(cg){cc=cg.series.yAxis;
M+=cg.plotX;
b9+=(cg.plotLow?(cg.plotLow+cg.plotHigh)/2:cg.plotY)+(!ce&&cc?cc.top-L:0)
});
M/=ca.length;
b9/=ca.length;
cb=[ce?cd.plotWidth-b9:M,this.shared&&!ce&&ca.length>1&&cf?cf.chartY-L:ce?cd.plotHeight-M:b9]
}return a7(cb,c)
},getPosition:function(M,L,cd){var b9=this.chart,ca=this.distance,cf={},ck,cb=["y",b9.chartHeight,L,cd.plotY+b9.plotTop],ch=["x",b9.chartWidth,M,cd.plotX+b9.plotLeft],ce=cd.ttBelow||(b9.inverted&&!cd.negative)||(!b9.inverted&&cd.negative),cc=function(cn,cp,co,cq){var cr=co<cq-ca,cs=cq+ca+co<cp,cl=cq-ca-co,cm=cq+ca;
if(ce&&cs){cf[cn]=cm
}else{if(!ce&&cr){cf[cn]=cl
}else{if(cr){cf[cn]=cl
}else{if(cs){cf[cn]=cm
}else{return false
}}}}},ci=function(cl,cn,cm,co){if(co<ca||co>cn-ca){return false
}else{if(co<cm/2){cf[cl]=1
}else{if(co>cn-cm/2){cf[cl]=cn-cm-2
}else{cf[cl]=co-cm/2
}}}},cj=function(cl){var cm=cb;
cb=ch;
ch=cm;
ck=cl
},cg=function(){if(cc.apply(0,cb)!==false){if(ci.apply(0,ch)===false&&!ck){cj(true);
cg()
}}else{if(!ck){cj(true);
cg()
}else{cf.x=cf.y=0
}}};
if(b9.inverted||this.len>1){cj()
}cg();
return cf
},defaultFormatter:function(ca){var L=this.points||bK(this),b9=L[0].series,M;
M=[ca.tooltipHeaderFormatter(L[0])];
T(L,function(cb){b9=cb.series;
M.push((b9.tooltipFormatter&&b9.tooltipFormatter(cb))||cb.point.tooltipFormatter(b9.tooltipOptions.pointFormat))
});
M.push(ca.options.footerFormat||"");
return M.join("")
},refresh:function(ck,ci){var M=this,cd=M.chart,ch=M.label,cj=M.options,b9,ca,cb,L={},cn,cl=[],cf=cj.formatter||M.defaultFormatter,cg=cd.hoverPoints,cc,cm=M.shared,ce;
clearTimeout(this.hideTimer);
M.followPointer=bK(ck)[0].series.tooltipOptions.followPointer;
cb=M.getAnchor(ck,ci);
b9=cb[0];
ca=cb[1];
if(cm&&!(ck.series&&ck.series.noSharedTooltip)){cd.hoverPoints=ck;
if(cg){T(cg,function(co){co.setState()
})
}T(ck,function(co){co.setState(i);
cl.push(co.getLabelConfig())
});
L={x:ck[0].category,y:ck[0].y};
L.points=cl;
this.len=cl.length;
ck=ck[0]
}else{L=ck.getLabelConfig()
}cn=cf.call(L,M);
ce=ck.series;
this.distance=R(ce.tooltipOptions.distance,16);
if(cn===false){this.hide()
}else{if(M.isHidden){bJ(ch);
ch.attr("opacity",1).show()
}ch.attr({text:cn});
cc=cj.borderColor||ck.color||ce.color||"#606060";
ch.attr({stroke:cc});
M.updatePosition({plotX:b9,plotY:ca,negative:ck.negative,ttBelow:ck.ttBelow});
this.isHidden=false
}x(cd,"tooltipRefresh",{text:cn,x:b9+cd.plotLeft,y:ca+cd.plotTop,borderColor:cc})
},updatePosition:function(b9){var L=this.chart,M=this.label,ca=(this.options.positioner||this.getPosition).call(this,M.width,M.height,b9);
this.move(c(ca.x),c(ca.y),b9.plotX+L.plotLeft,b9.plotY+L.plotTop)
},tooltipHeaderFormatter:function(cg){var L=cg.series,M=L.tooltipOptions,cc=M.dateTimeLabelFormats,ca=M.xDateFormat,b9=L.xAxis,ce=b9&&b9.options.type==="datetime"&&aD(cg.key),cd=M.headerFormat,cb=b9&&b9.closestPointRange,cf;
if(ce&&!ca){if(cb){for(cf in aH){if(aH[cf]>=cb||(aH[cf]<=aH[ac]&&cg.key%aH[cf]>0)){ca=cc[cf];
break
}}}else{ca=cc.day
}ca=ca||cc.year
}if(ce&&ca){cd=cd.replace("{point.key}","{point.key:"+ca+"}")
}return ay(cd,{point:cg,series:L})
}};
var br;
bF=bh.documentElement.ontouchstart!==bg;
var v=U.Pointer=function(L,M){this.init(L,M)
};
v.prototype={init:function(L,cb){var b9=cb.chart,M=b9.events,cc=aQ?"":b9.zoomType,ca=L.inverted,cd,ce;
this.options=cb;
this.chart=L;
this.zoomX=cd=/x/.test(cc);
this.zoomY=ce=/y/.test(cc);
this.zoomHor=(cd&&!ca)||(ce&&ca);
this.zoomVert=(ce&&!ca)||(cd&&ca);
this.hasZoom=cd||ce;
this.runChartClick=M&&!!M.click;
this.pinchDown=[];
this.lastValidTouch={};
if(U.Tooltip&&cb.tooltip.enabled){L.tooltip=new ad(L,cb.tooltip);
this.followTouchMove=cb.tooltip.followTouchMove
}this.setDOMEvents()
},normalize:function(b9,cb){var L,M,ca;
b9=b9||window.event;
b9=a3(b9);
if(!b9.target){b9.target=b9.srcElement
}ca=b9.touches?(b9.touches.length?b9.touches.item(0):b9.changedTouches[0]):b9;
if(!cb){this.chartPosition=cb=bD(this.chart.container)
}if(ca.pageX===bg){L=b4(b9.x,b9.clientX-cb.left);
M=b9.y
}else{L=ca.pageX-cb.left;
M=ca.pageY-cb.top
}return bb(b9,{chartX:c(L),chartY:c(M)})
},getCoordinates:function(M){var L={xAxis:[],yAxis:[]};
T(this.chart.axes,function(b9){L[b9.isXAxis?"xAxis":"yAxis"].push({axis:b9,value:b9.toValue(M[b9.horiz?"chartX":"chartY"])})
});
return L
},getIndex:function(M){var L=this.chart;
return L.inverted?L.plotHeight+L.plotTop-M.chartY:M.chartX-L.plotLeft
},runPointActions:function(cj){var cc=this,ch=cc.chart,ce=ch.series,cf=ch.tooltip,ck,cb,cd,cl=ch.hoverPoint,L=ch.hoverSeries,M,ca,ci=ch.chartWidth,b9=cc.getIndex(cj),cg;
if(cf&&cc.options.tooltip.shared&&!(L&&L.noSharedTooltip)){cd=[];
M=ce.length;
for(ca=0;
ca<M;
ca++){if(ce[ca].visible&&ce[ca].options.enableMouseTracking!==false&&!ce[ca].noSharedTooltip&&ce[ca].singularTooltips!==true&&ce[ca].tooltipPoints.length){cb=ce[ca].tooltipPoints[b9];
if(cb&&cb.series){cb._dist=a4(b9-cb.clientX);
ci=j(ci,cb._dist);
cd.push(cb)
}}}M=cd.length;
while(M--){if(cd[M]._dist>ci){cd.splice(M,1)
}}if(cd.length&&(cd[0].clientX!==cc.hoverX)){cf.refresh(cd,cj);
cc.hoverX=cd[0].clientX
}}ck=L&&L.tooltipOptions.followPointer;
if(L&&L.tracker&&!ck){cb=L.tooltipPoints[b9];
if(cb&&cb!==cl){cb.onMouseOver(cj)
}}else{if(cf&&ck&&!cf.isHidden){cg=cf.getAnchor([{}],cj);
cf.updatePosition({plotX:cg[0],plotY:cg[1]})
}}if(cf&&!cc._onDocumentMouseMove){cc._onDocumentMouseMove=function(cm){if(l[br]){l[br].pointer.onDocumentMouseMove(cm)
}};
bx(bh,"mousemove",cc._onDocumentMouseMove)
}T(ch.axes,function(cm){cm.drawCrosshair(cj,R(cb,cl))
})
},reset:function(L){var cb=this,M=cb.chart,ca=M.hoverSeries,b9=M.hoverPoint,cc=M.tooltip,cd=cc&&cc.shared?M.hoverPoints:b9;
L=L&&cc&&cd;
if(L&&bK(cd)[0].plotX===bg){L=false
}if(L){cc.refresh(cd);
if(b9){b9.setState(b9.state,true)
}}else{if(b9){b9.onMouseOut()
}if(ca){ca.onMouseOut()
}if(cc){cc.hide()
}if(cb._onDocumentMouseMove){b(bh,"mousemove",cb._onDocumentMouseMove);
cb._onDocumentMouseMove=null
}T(M.axes,function(ce){ce.hideCrosshair()
});
cb.hoverX=null
}},scaleGroups:function(L,b9){var M=this.chart,ca;
T(M.series,function(cb){ca=L||cb.getPlotBox();
if(cb.xAxis&&cb.xAxis.zoomEnabled){cb.group.attr(ca);
if(cb.markerGroup){cb.markerGroup.attr(ca);
cb.markerGroup.clip(b9?M.clipRect:null)
}if(cb.dataLabelsGroup){cb.dataLabelsGroup.attr(ca)
}}});
M.clipRect.attr(b9||M.clipBox)
},dragStart:function(M){var L=this.chart;
L.mouseIsDown=M.type;
L.cancelClick=false;
L.mouseDownX=this.mouseDownX=M.chartX;
L.mouseDownY=this.mouseDownY=M.chartY
},drag:function(cl){var cg=this.chart,ch=cg.options.chart,ci=cl.chartX,cj=cl.chartY,ce=this.zoomHor,cf=this.zoomVert,ca=cg.plotLeft,cb=cg.plotTop,cc=cg.plotWidth,b9=cg.plotHeight,ck,cd,L=this.mouseDownX,M=this.mouseDownY;
if(ci<ca){ci=ca
}else{if(ci>ca+cc){ci=ca+cc
}}if(cj<cb){cj=cb
}else{if(cj>cb+b9){cj=cb+b9
}}this.hasDragged=Math.sqrt(Math.pow(L-ci,2)+Math.pow(M-cj,2));
if(this.hasDragged>10){ck=cg.isInsidePlot(L-ca,M-cb);
if(cg.hasCartesianSeries&&(this.zoomX||this.zoomY)&&ck){if(!this.selectionMarker){this.selectionMarker=cg.renderer.rect(ca,cb,ce?1:cc,cf?1:b9,0).attr({fill:ch.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add()
}}if(this.selectionMarker&&ce){cd=ci-L;
this.selectionMarker.attr({width:a4(cd),x:(cd>0?0:cd)+L})
}if(this.selectionMarker&&cf){cd=cj-M;
this.selectionMarker.attr({height:a4(cd),y:(cd>0?0:cd)+M})
}if(ck&&!this.selectionMarker&&ch.panning){cg.pan(cl,ch.panning)
}}},drop:function(cc){var cb=this.chart,cd=this.hasPinched;
if(this.selectionMarker){var cg={xAxis:[],yAxis:[],originalEvent:cc.originalEvent||cc},cf=this.selectionMarker,M=cf.attr?cf.attr("x"):cf.x,b9=cf.attr?cf.attr("y"):cf.y,ca=cf.attr?cf.attr("width"):cf.width,L=cf.attr?cf.attr("height"):cf.height,ce;
if(this.hasDragged||cd){T(cb.axes,function(ch){if(ch.zoomEnabled){var ci=ch.horiz,ck=ch.toValue((ci?M:b9)),cj=ch.toValue((ci?M+ca:b9+L));
if(!isNaN(ck)&&!isNaN(cj)){cg[ch.coll].push({axis:ch,min:j(ck,cj),max:b4(ck,cj)});
ce=true
}}});
if(ce){x(cb,"selection",cg,function(ch){cb.zoom(bb(ch,cd?{animation:false}:null))
})
}}this.selectionMarker=this.selectionMarker.destroy();
if(cd){this.scaleGroups()
}}if(cb){bO(cb.container,{cursor:cb._cursor});
cb.cancelClick=this.hasDragged>10;
cb.mouseIsDown=this.hasDragged=this.hasPinched=false;
this.pinchDown=[]
}},onContainerMouseDown:function(L){L=this.normalize(L);
if(L.preventDefault){L.preventDefault()
}this.dragStart(L)
},onDocumentMouseUp:function(L){if(l[br]){l[br].pointer.drop(L)
}},onDocumentMouseMove:function(b9){var L=this.chart,M=this.chartPosition,ca=L.hoverSeries;
b9=this.normalize(b9,M);
if(M&&ca&&!this.inClass(b9.target,"highcharts-tracker")&&!L.isInsidePlot(b9.chartX-L.plotLeft,b9.chartY-L.plotTop)){this.reset()
}},onContainerMouseLeave:function(){var L=l[br];
if(L){L.pointer.reset();
L.pointer.chartPosition=null
}},onContainerMouseMove:function(M){var L=this.chart;
br=L.index;
M=this.normalize(M);
if(L.mouseIsDown==="mousedown"){this.drag(M)
}if((this.inClass(M.target,"highcharts-tracker")||L.isInsidePlot(M.chartX-L.plotLeft,M.chartY-L.plotTop))&&!L.openMenu){this.runPointActions(M)
}},inClass:function(b9,L){var M;
while(b9){M=N(b9,"class");
if(M){if(M.indexOf(L)!==-1){return true
}else{if(M.indexOf(Y+"container")!==-1){return false
}}}b9=b9.parentNode
}},onTrackerMouseOut:function(L){var ca=this.chart.hoverSeries,b9=L.relatedTarget||L.toElement,M=b9&&b9.point&&b9.point.series;
if(ca&&!ca.options.stickyTracking&&!this.inClass(b9,Y+"tooltip")&&M!==ca){ca.onMouseOut()
}},onContainerClick:function(L){var cb=this.chart,M=cb.hoverPoint,b9=cb.plotLeft,ca=cb.plotTop;
L=this.normalize(L);
L.cancelBubble=true;
if(!cb.cancelClick){if(M&&this.inClass(L.target,Y+"tracker")){x(M.series,"click",bb(L,{point:M}));
if(cb.hoverPoint){M.firePointEvent("click",L)
}}else{bb(L,this.getCoordinates(L));
if(cb.isInsidePlot(L.chartX-b9,L.chartY-ca)){x(cb,"click",L)
}}}},setDOMEvents:function(){var M=this,L=M.chart.container;
L.onmousedown=function(b9){M.onContainerMouseDown(b9)
};
L.onmousemove=function(b9){M.onContainerMouseMove(b9)
};
L.onclick=function(b9){M.onContainerClick(b9)
};
bx(L,"mouseleave",M.onContainerMouseLeave);
if(aN===1){bx(bh,"mouseup",M.onDocumentMouseUp)
}if(bF){L.ontouchstart=function(b9){M.onContainerTouchStart(b9)
};
L.ontouchmove=function(b9){M.onContainerTouchMove(b9)
};
if(aN===1){bx(bh,"touchend",M.onDocumentTouchEnd)
}}},destroy:function(){var L;
b(this.chart.container,"mouseleave",this.onContainerMouseLeave);
if(!aN){b(bh,"mouseup",this.onDocumentMouseUp);
b(bh,"touchend",this.onDocumentTouchEnd)
}clearInterval(this.tooltipTimeout);
for(L in this){this[L]=null
}}};
bb(U.Pointer.prototype,{pinchTranslate:function(b9,cb,cc,ca,L,M){if(this.zoomHor||this.pinchHor){this.pinchTranslateDirection(true,b9,cb,cc,ca,L,M)
}if(this.zoomVert||this.pinchVert){this.pinchTranslateDirection(false,b9,cb,cc,ca,L,M)
}},pinchTranslateDirection:function(cu,cy,cn,co,ce,b9,cw,cb){var ct=this.chart,cr=cu?"x":"y",cs=cu?"X":"Y",cd="chart"+cs,cq=cu?"width":"height",cz=ct["plot"+(cu?"Left":"Top")],cf,cg,ca,M=cb||1,cv=ct.inverted,L=ct.bounds[cu?"h":"v"],ci=cy.length===1,ck=cy[0][cd],cj=cn[0][cd],cm=!ci&&cy[1][cd],cl=!ci&&cn[1][cd],cx,cp,cc,ch=function(){if(!ci&&a4(ck-cm)>20){M=cb||a4(cj-cl)/a4(ck-cm)
}ca=((cz-cj)/M)+ck;
cf=ct["plot"+(cu?"Width":"Height")]/M
};
ch();
cg=ca;
if(cg<L.min){cg=L.min;
cx=true
}else{if(cg+cf>L.max){cg=L.max-cf;
cx=true
}}if(cx){cj-=0.8*(cj-cw[cr][0]);
if(!ci){cl-=0.8*(cl-cw[cr][1])
}ch()
}else{cw[cr]=[cj,cl]
}if(!cv){b9[cr]=ca-cz;
b9[cq]=cf
}cc=cv?(cu?"scaleY":"scaleX"):"scale"+cs;
cp=cv?1/M:M;
ce[cq]=cf;
ce[cr]=cg;
co[cc]=M;
co["translate"+cs]=(cp*cz)+(cj-(cp*ck))
},pinch:function(cb){var ci=this,b9=ci.chart,cg=ci.pinchDown,cd=ci.followTouchMove,cj=cb.touches,L=cj.length,cf=ci.lastValidTouch,ce=ci.hasZoom,ch=ci.selectionMarker,M={},cc=L===1&&((ci.inClass(cb.target,Y+"tracker")&&b9.runTrackerClick)||b9.runChartClick),ca={};
if((ce||cd)&&!cc){cb.preventDefault()
}a7(cj,function(ck){return ci.normalize(ck)
});
if(cb.type==="touchstart"){T(cj,function(ck,cl){cg[cl]={chartX:ck.chartX,chartY:ck.chartY}
});
cf.x=[cg[0].chartX,cg[1]&&cg[1].chartX];
cf.y=[cg[0].chartY,cg[1]&&cg[1].chartY];
T(b9.axes,function(cm){if(cm.zoomEnabled){var cn=b9.bounds[cm.horiz?"h":"v"],cq=cm.minPixelPadding,cp=cm.toPixels(cm.dataMin),co=cm.toPixels(cm.dataMax),cl=j(cp,co),ck=b4(cp,co);
cn.min=j(cm.pos,cl-cq);
cn.max=b4(cm.pos+cm.len,ck+cq)
}})
}else{if(cg.length){if(!ch){ci.selectionMarker=ch=bb({destroy:aj},b9.plotBox)
}ci.pinchTranslate(cg,cj,M,ch,ca,cf);
ci.hasPinched=ce;
ci.scaleGroups(M,ca);
if(!ce&&cd&&L===1){this.runPointActions(ci.normalize(cb))
}}}},onContainerTouchStart:function(M){var L=this.chart;
br=L.index;
if(M.touches.length===1){M=this.normalize(M);
if(L.isInsidePlot(M.chartX-L.plotLeft,M.chartY-L.plotTop)){this.runPointActions(M);
this.pinch(M)
}else{this.reset()
}}else{if(M.touches.length===2){this.pinch(M)
}}},onContainerTouchMove:function(L){if(L.touches.length===1||L.touches.length===2){this.pinch(L)
}},onDocumentTouchEnd:function(L){if(l[br]){l[br].pointer.drop(L)
}}});
if(bC.PointerEvent||bC.MSPointerEvent){var b2={},n=!!bC.PointerEvent,ah=function(){var M,L=[];
L.item=function(b9){return this[b9]
};
for(M in b2){if(b2.hasOwnProperty(M)){L.push({pageX:b2[M].pageX,pageY:b2[M].pageY,target:b2[M].target})
}}return L
},aO=function(L,M,ca,cb){var b9;
L=L.originalEvent||L;
if((L.pointerType==="touch"||L.pointerType===L.MSPOINTER_TYPE_TOUCH)&&l[br]){cb(L);
b9=l[br].pointer;
b9[M]({type:ca,target:L.currentTarget,preventDefault:aj,touches:ah()})
}};
bb(v.prototype,{onContainerPointerDown:function(L){aO(L,"onContainerTouchStart","touchstart",function(M){b2[M.pointerId]={pageX:M.pageX,pageY:M.pageY,target:M.currentTarget}
})
},onContainerPointerMove:function(L){aO(L,"onContainerTouchMove","touchmove",function(M){b2[M.pointerId]={pageX:M.pageX,pageY:M.pageY};
if(!b2[M.pointerId].target){b2[M.pointerId].target=M.currentTarget
}})
},onDocumentPointerUp:function(L){aO(L,"onContainerTouchEnd","touchend",function(M){delete b2[M.pointerId]
})
},batchMSEvents:function(L){L(this.chart.container,n?"pointerdown":"MSPointerDown",this.onContainerPointerDown);
L(this.chart.container,n?"pointermove":"MSPointerMove",this.onContainerPointerMove);
L(bh,n?"pointerup":"MSPointerUp",this.onDocumentPointerUp)
}});
b7(v.prototype,"init",function(b9,L,M){b9.call(this,L,M);
if(this.hasZoom||this.followTouchMove){bO(L.container,{"-ms-touch-action":aP,"touch-action":aP})
}});
b7(v.prototype,"setDOMEvents",function(L){L.apply(this);
if(this.hasZoom||this.followTouchMove){this.batchMSEvents(bx)
}});
b7(v.prototype,"destroy",function(L){this.batchMSEvents(b);
L.call(this)
})
}var bz=U.Legend=function(L,M){this.init(L,M)
};
bz.prototype={init:function(L,cb){var ca=this,b9=cb.itemStyle,cc=R(cb.padding,8),M=cb.itemMarginTop||0;
this.options=cb;
if(!cb.enabled){return
}ca.baseline=a6(b9.fontSize)+3+M;
ca.itemStyle=b9;
ca.itemHiddenStyle=bR(b9,cb.itemHiddenStyle);
ca.itemMarginTop=M;
ca.padding=cc;
ca.initialItemX=cc;
ca.initialItemY=cc-5;
ca.maxItemWidth=0;
ca.chart=L;
ca.itemHeight=0;
ca.lastLineHeight=0;
ca.symbolWidth=R(cb.symbolWidth,16);
ca.pages=[];
ca.render();
bx(ca.chart,"endResize",function(){ca.positionCheckboxes()
})
},colorizeItem:function(M,ck){var ca=this,cf=ca.options,cb=M.legendItem,cc=M.legendLine,cd=M.legendSymbol,L=ca.itemHiddenStyle.color,ci=ck?cf.itemStyle.color:L,ch=ck?(M.legendColor||M.color||"#CCC"):L,ce=M.options&&M.options.marker,cg={fill:ch},b9,cj;
if(cb){cb.css({fill:ci,color:ci})
}if(cc){cc.attr({stroke:ch})
}if(cd){if(ce&&cd.isMarker){cg.stroke=ch;
ce=M.convertAttribs(ce);
for(b9 in ce){cj=ce[b9];
if(cj!==bg){cg[b9]=cj
}}}cd.attr(cg)
}},positionItem:function(ce){var M=this,cb=M.options,cc=cb.symbolPadding,ca=!cb.rtl,b9=ce._legendItemPos,cf=b9[0],L=b9[1],cd=ce.checkbox;
if(ce.legendGroup){ce.legendGroup.translate(ca?cf:M.legendWidth-cf-2*cc-4,L)
}if(cd){cd.x=cf;
cd.y=L
}},destroyItem:function(M){var L=M.checkbox;
T(["legendItem","legendLine","legendSymbol","legendGroup"],function(b9){if(M[b9]){M[b9]=M[b9].destroy()
}});
if(L){X(M.checkbox)
}},destroy:function(){var M=this,b9=M.group,L=M.box;
if(L){M.box=L.destroy()
}if(b9){M.group=b9.destroy()
}},positionCheckboxes:function(b9){var L=this.group.alignAttr,ca,M=this.clipHeight||this.legendHeight;
if(L){ca=L.translateY;
T(this.allItems,function(cc){var cb=cc.checkbox,cd;
if(cb){cd=(ca+cb.y+(b9||0)+3);
bO(cb,{left:(L.translateX+cc.checkboxOffset+cb.x-20)+k,top:cd+k,display:cd>ca-6&&cd<ca+M-6?"":aP})
}})
}},renderTitle:function(){var L=this.options,M=this.padding,ca=L.title,b9=0,cb;
if(ca.text){if(!this.title){this.title=this.chart.renderer.label(ca.text,M-3,M-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(ca.style).add(this.group)
}cb=this.title.getBBox();
b9=cb.height;
this.offsetWidth=cb.width;
this.contentGroup.attr({translateY:b9})
}this.titleHeight=b9
},renderItem:function(cp){var M=this,cm=M.chart,cd=cm.renderer,cb=M.options,cn=cb.layout==="horizontal",ci=M.symbolWidth,ch=cb.symbolPadding,cv=M.itemStyle,cs=M.itemHiddenStyle,cc=M.padding,cq=cn?R(cb.itemDistance,20):0,ca=!cb.rtl,cr,ck=cb.width,ct=cb.itemMarginBottom||0,cu=M.itemMarginTop,co=M.initialItemX,cl,L,b9=cp.legendItem,ce=cp.series&&cp.series.drawLegendSymbol?cp.series:cp,cf=ce.options,cg=M.createCheckboxForItem&&cf&&cf.showCheckbox,cj=cb.useHTML;
if(!b9){cp.legendGroup=cd.g("legend-item").attr({zIndex:1}).add(M.scrollGroup);
ce.drawLegendSymbol(M,cp);
cp.legendItem=b9=cd.text(cb.labelFormat?ay(cb.labelFormat,cp):cb.labelFormatter.call(cp),ca?ci+ch:-ch,M.baseline,cj).css(bR(cp.visible?cv:cs)).attr({align:ca?"left":"right",zIndex:2}).add(cp.legendGroup);
if(M.setItemEvents){M.setItemEvents(cp,b9,cj,cv,cs)
}M.colorizeItem(cp,cp.visible);
if(cg){M.createCheckboxForItem(cp)
}}cl=b9.getBBox();
L=cp.checkboxOffset=cb.itemWidth||cp.legendItemWidth||ci+ch+cl.width+cq+(cg?20:0);
M.itemHeight=cr=c(cp.legendItemHeight||cl.height);
if(cn&&M.itemX-co+L>(ck||(cm.chartWidth-2*cc-co-cb.x))){M.itemX=co;
M.itemY+=cu+M.lastLineHeight+ct;
M.lastLineHeight=0
}M.maxItemWidth=b4(M.maxItemWidth,L);
M.lastItemY=cu+M.itemY+ct;
M.lastLineHeight=b4(cr,M.lastLineHeight);
cp._legendItemPos=[M.itemX,M.itemY];
if(cn){M.itemX+=L
}else{M.itemY+=cu+cr+ct;
M.lastLineHeight=cr
}M.offsetWidth=ck||b4((cn?M.itemX-co-cq:L)+cc,M.offsetWidth)
},getAllItems:function(){var L=[];
T(this.chart.series,function(M){var b9=M.options;
if(!R(b9.showInLegend,!V(b9.linkedTo)?bg:false,true)){return
}L=L.concat(M.legendItems||(b9.legendType==="point"?M.data:M))
});
return L
},render:function(){var cd=this,cb=cd.chart,M=cb.renderer,cg=cd.group,b9,cc,ci,ch,ca=cd.box,cj=cd.options,L=cd.padding,cf=cj.borderWidth,ce=cj.backgroundColor;
cd.itemX=cd.initialItemX;
cd.itemY=cd.initialItemY;
cd.offsetWidth=0;
cd.lastItemY=0;
if(!cg){cd.group=cg=M.g("legend").attr({zIndex:7}).add();
cd.contentGroup=M.g().attr({zIndex:1}).add(cg);
cd.scrollGroup=M.g().add(cd.contentGroup)
}cd.renderTitle();
b9=cd.getAllItems();
aK(b9,function(ck,cl){return((ck.options&&ck.options.legendIndex)||0)-((cl.options&&cl.options.legendIndex)||0)
});
if(cj.reversed){b9.reverse()
}cd.allItems=b9;
cd.display=cc=!!b9.length;
T(b9,function(ck){cd.renderItem(ck)
});
ci=cj.width||cd.offsetWidth;
ch=cd.lastItemY+cd.lastLineHeight+cd.titleHeight;
ch=cd.handleOverflow(ch);
if(cf||ce){ci+=L;
ch+=L;
if(!ca){cd.box=ca=M.rect(0,0,ci,ch,cj.borderRadius,cf||0).attr({stroke:cj.borderColor,"stroke-width":cf||0,fill:ce||aP}).add(cg).shadow(cj.shadow);
ca.isNew=true
}else{if(ci>0&&ch>0){ca[ca.isNew?"attr":"animate"](ca.crisp({width:ci,height:ch}));
ca.isNew=false
}}ca[cc?"show":"hide"]()
}cd.legendWidth=ci;
cd.legendHeight=ch;
T(b9,function(ck){cd.positionItem(ck)
});
if(cc){cg.align(bb({width:ci,height:ch},cj),true,"spacingBox")
}if(!cb.isResizing){this.positionCheckboxes()
}},handleOverflow:function(cm){var cl=this,ch=this.chart,cb=ch.renderer,M=this.options,b9=M.y,cd=M.verticalAlign==="top",cc=ch.spacingBox.height+(cd?-b9:b9)-this.padding,cn=M.maxHeight,ci,cj=this.clipRect,L=M.navigation,cf=R(L.animation,true),cg=L.arrowSize||12,co=this.nav,ca=this.pages,ck,ce=this.allItems;
if(M.layout==="horizontal"){cc/=2
}if(cn){cc=j(cc,cn)
}ca.length=0;
if(cm>cc&&!M.useHTML){this.clipHeight=ci=cc-20-this.titleHeight-this.padding;
this.currentPage=R(this.currentPage,1);
this.fullHeight=cm;
T(ce,function(cr,cq){var ct=cr._legendItemPos[1],cp=c(cr.legendItem.getBBox().height),cs=ca.length;
if(!cs||(ct-ca[cs-1]>ci&&(ck||ct)!==ca[cs-1])){ca.push(ck||ct);
cs++
}if(cq===ce.length-1&&ct+cp-ca[cs-1]>ci){ca.push(ct)
}if(ct!==ck){ck=ct
}});
if(!cj){cj=cl.clipRect=cb.clipRect(0,this.padding,9999,0);
cl.contentGroup.clip(cj)
}cj.attr({height:ci});
if(!co){this.nav=co=cb.g().attr({zIndex:1}).add(this.group);
this.up=cb.symbol("triangle",0,0,cg,cg).on("click",function(){cl.scroll(-1,cf)
}).add(co);
this.pager=cb.text("",15,10).css(L.style).add(co);
this.down=cb.symbol("triangle-down",0,0,cg,cg).on("click",function(){cl.scroll(1,cf)
}).add(co)
}cl.scroll(0);
cm=cc
}else{if(co){cj.attr({height:ch.chartHeight});
co.hide();
this.scrollGroup.attr({translateY:1});
this.clipHeight=0
}}return cm
},scroll:function(ch,M){var cg=this.pages,ce=cg.length,ca=this.currentPage+ch,b9=this.clipHeight,cc=this.options.navigation,L=cc.activeColor,cb=cc.inactiveColor,cf=this.pager,cd=this.padding,ci;
if(ca>ce){ca=ce
}if(ca>0){if(M!==bg){aA(M,this.chart)
}this.nav.attr({translateX:cd,translateY:b9+this.padding+7+this.titleHeight,visibility:m});
this.up.attr({fill:ca===1?cb:L}).css({cursor:ca===1?"default":"pointer"});
cf.attr({text:ca+"/"+ce});
this.down.attr({x:18+this.pager.getBBox().width,fill:ca===ce?cb:L}).css({cursor:ca===ce?"default":"pointer"});
ci=-cg[ca-1]+this.initialItemY;
this.scrollGroup.animate({translateY:ci});
this.currentPage=ca;
this.positionCheckboxes(ci)
}}};
var a1=U.LegendSymbolMixin={drawRectangle:function(M,L){var b9=M.options.symbolHeight||12;
L.legendSymbol=this.chart.renderer.rect(0,M.baseline-5-(b9/2),M.symbolWidth,b9,M.options.symbolRadius||0).attr({zIndex:3}).add(L.legendGroup)
},drawLineMarker:function(cd){var L=this.options,ch=L.marker,M,cf=cd.options,cg,ca=cd.symbolWidth,b9=this.chart.renderer,ce=this.legendGroup,cb=cd.baseline-c(b9.fontMetrics(cf.itemStyle.fontSize).b*0.3),cc;
if(L.lineWidth){cc={"stroke-width":L.lineWidth};
if(L.dashStyle){cc.dashstyle=L.dashStyle
}this.legendLine=b9.path([A,0,cb,e,ca,cb]).attr(cc).add(ce)
}if(ch&&ch.enabled!==false){M=ch.radius;
this.legendSymbol=cg=b9.symbol(this.symbol,(ca/2)-M,cb-M,2*M,2*M).add(ce);
cg.isMarker=true
}}};
if(/Trident\/7\.0/.test(aZ)||bw){b7(bz.prototype,"positionItem",function(b9,L){var M=this,ca=function(){if(L._legendItemPos){b9.call(M,L)
}};
ca();
setTimeout(ca)
})
}function bH(){this.init.apply(this,arguments)
}bH.prototype={init:function(ce,L){var cb,cd=ce.series;
ce.series=null;
cb=bR(bs,ce);
cb.series=ce.series=cd;
this.userOptions=ce;
var cc=cb.chart;
this.margin=this.splashArray("margin",cc);
this.spacing=this.splashArray("spacing",cc);
var b9=cc.events;
this.bounds={h:{},v:{}};
this.callback=L;
this.isResizing=0;
this.options=cb;
this.axes=[];
this.series=[];
this.hasCartesianSeries=cc.showAxes;
var M=this,ca;
M.index=l.length;
l.push(M);
aN++;
if(cc.reflow!==false){bx(M,"load",function(){M.initReflow()
})
}if(b9){for(ca in b9){bx(M,ca,b9[ca])
}}M.xAxis=[];
M.yAxis=[];
M.animation=aQ?false:R(cc.animation,true);
M.pointCount=0;
M.counters=new Q();
M.firstRender()
},initSeries:function(b9){var L=this,ca=L.options.chart,cc=b9.type||ca.type||ca.defaultSeriesType,cb,M=G[cc];
if(!M){bM(17,true)
}cb=new M();
cb.init(this,b9);
return cb
},isInsidePlot:function(L,M,cb){var b9=cb?M:L,ca=cb?L:M;
return b9>=0&&b9<=this.plotWidth&&ca>=0&&ca<=this.plotHeight
},adjustTickAmounts:function(){if(this.options.chart.alignTicks!==false){T(this.axes,function(L){L.adjustTickAmount()
})
}this.maxTicks=null
},redraw:function(M){var ca=this,b9=ca.axes,cl=ca.series,ch=ca.pointer,cg=ca.legend,ci=ca.isDirtyLegend,cc,cb,ce=ca.isDirtyBox,cm=cl.length,cd=cm,ck,cj=ca.renderer,cf=cj.isHidden(),L=[];
aA(M,ca);
if(cf){ca.cloneRenderTo()
}ca.layOutTitles();
while(cd--){ck=cl[cd];
if(ck.options.stacking){cc=true;
if(ck.isDirty){cb=true;
break
}}}if(cb){cd=cm;
while(cd--){ck=cl[cd];
if(ck.options.stacking){ck.isDirty=true
}}}T(cl,function(cn){if(cn.isDirty){if(cn.options.legendType==="point"){ci=true
}}});
if(ci&&cg.options.enabled){cg.render();
ca.isDirtyLegend=false
}if(cc){ca.getStacks()
}if(ca.hasCartesianSeries){if(!ca.isResizing){ca.maxTicks=null;
T(b9,function(cn){cn.setScale()
})
}ca.adjustTickAmounts();
ca.getMargins();
T(b9,function(cn){if(cn.isDirty){ce=true
}});
T(b9,function(cn){if(cn.isDirtyExtremes){cn.isDirtyExtremes=false;
L.push(function(){x(cn,"afterSetExtremes",bb(cn.eventArgs,cn.getExtremes()));
delete cn.eventArgs
})
}if(ce||cc){cn.redraw()
}})
}if(ce){ca.drawChartBox()
}T(cl,function(cn){if(cn.isDirty&&cn.visible&&(!cn.isCartesian||cn.xAxis)){cn.redraw()
}});
if(ch){ch.reset(true)
}cj.draw();
x(ca,"redraw");
if(cf){ca.cloneRenderTo(true)
}T(L,function(cn){cn.call()
})
},get:function(ca){var M=this,L=M.axes,cd=M.series;
var b9,cb,cc;
for(b9=0;
b9<L.length;
b9++){if(L[b9].options.id===ca){return L[b9]
}}for(b9=0;
b9<cd.length;
b9++){if(cd[b9].options.id===ca){return cd[b9]
}}for(b9=0;
b9<cd.length;
b9++){cc=cd[b9].points||[];
for(cb=0;
cb<cc.length;
cb++){if(cc[cb].id===ca){return cc[cb]
}}}return null
},getAxes:function(){var M=this,b9=this.options,cb=b9.xAxis=bK(b9.xAxis||{}),cc=b9.yAxis=bK(b9.yAxis||{}),ca,L;
T(cb,function(cd,ce){cd.index=ce;
cd.isX=true
});
T(cc,function(cd,ce){cd.index=ce
});
ca=cb.concat(cc);
T(ca,function(cd){L=new ba(M,cd)
});
M.adjustTickAmounts()
},getSelectedPoints:function(){var L=[];
T(this.series,function(M){L=L.concat(bL(M.points||[],function(b9){return b9.selected
}))
});
return L
},getSelectedSeries:function(){return bL(this.series,function(L){return L.selected
})
},getStacks:function(){var L=this;
T(L.yAxis,function(M){if(M.stacks&&M.hasVisibleSeries){M.oldStacks=M.stacks
}});
T(L.series,function(M){if(M.options.stacking&&(M.visible===true||L.options.chart.ignoreHiddenSeries===false)){M.stackKey=M.type+R(M.options.stack,"")
}})
},setTitle:function(cd,cc,cb){var L=this,ca=L.options,b9,M;
b9=ca.title=bR(ca.title,cd);
M=ca.subtitle=bR(ca.subtitle,cc);
T([["title",cd,b9],["subtitle",cc,M]],function(ce){var cg=ce[0],ch=L[cg],ci=ce[1],cf=ce[2];
if(ch&&ci){L[cg]=ch=ch.destroy()
}if(cf&&cf.text&&!ch){L[cg]=L.renderer.text(cf.text,0,0,cf.useHTML).attr({align:cf.align,"class":Y+cg,zIndex:cf.zIndex||4}).css(cf.style).add()
}});
L.layOutTitles(cb)
},layOutTitles:function(cf){var cb=0,ca=this.title,M=this.subtitle,ce=this.options,cc=ce.title,b9=ce.subtitle,L,cd=this.spacingBox.width-44;
if(ca){ca.css({width:(cc.width||cd)+k}).align(bb({y:15},cc),false,"spacingBox");
if(!cc.floating&&!cc.verticalAlign){cb=ca.getBBox().height
}}if(M){M.css({width:(b9.width||cd)+k}).align(bb({y:cb+cc.margin},b9),false,"spacingBox");
if(!b9.floating&&!b9.verticalAlign){cb=Z(cb+M.getBBox().height)
}}L=this.titleOffset!==cb;
this.titleOffset=cb;
if(!this.isDirtyBox&&L){this.isDirtyBox=L;
if(this.hasRendered&&R(cf,true)&&this.isDirtyBox){this.redraw()
}}},getChartSize:function(){var cb=this,M=cb.options.chart,ca=M.width,L=M.height,b9=cb.renderToClone||cb.renderTo;
if(!V(ca)){cb.containerWidth=aG(b9,"width")
}if(!V(L)){cb.containerHeight=aG(b9,"height")
}cb.chartWidth=b4(0,ca||cb.containerWidth||600);
cb.chartHeight=b4(0,R(L,cb.containerHeight>19?cb.containerHeight:400))
},cloneRenderTo:function(b9){var L=this.renderToClone,M=this.container;
if(b9){if(L){this.renderTo.appendChild(M);
X(L);
delete this.renderToClone
}}else{if(M&&M.parentNode===this.renderTo){this.renderTo.removeChild(M)
}this.renderToClone=L=this.renderTo.cloneNode(0);
bO(L,{position:a,top:"-9999px",display:"block"});
if(L.style.setProperty){L.style.setProperty("display","block","important")
}bh.body.appendChild(L);
if(M){L.appendChild(M)
}}},getContainer:function(){var cd=this,L,cb=cd.options.chart,cf,ce,cc,b9="data-highcharts-chart",ca,M;
cd.renderTo=cc=cb.renderTo;
M=Y+E++;
if(aF(cc)){cd.renderTo=cc=bh.getElementById(cc)
}if(!cc){bM(13,true)
}ca=a6(N(cc,b9));
if(!isNaN(ca)&&l[ca]&&l[ca].hasRendered){l[ca].destroy()
}N(cc,b9,cd.index);
cc.innerHTML="";
if(!cb.skipClone&&!cc.offsetWidth){cd.cloneRenderTo()
}cd.getChartSize();
cf=cd.chartWidth;
ce=cd.chartHeight;
cd.container=L=a9(b8,{className:Y+"container"+(cb.className?" "+cb.className:""),id:M},bb({position:af,overflow:F,width:cf+k,height:ce+k,textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},cb.style),cd.renderToClone||cc);
cd._cursor=L.style.cursor;
cd.renderer=cb.forExport?new ao(L,cf,ce,cb.style,true):new bp(L,cf,ce,cb.style);
if(aQ){cd.renderer.create(cd,L,cf,ce)
}},getMargins:function(){var b9=this,cg=b9.spacing,M,ca=b9.legend,cf=b9.margin,cc=b9.options.legend,cb=R(cc.margin,20),cd=cc.x,ce=cc.y,L=cc.align,ci=cc.verticalAlign,ch=b9.titleOffset;
b9.resetMargins();
M=b9.axisOffset;
if(ch&&!V(cf[0])){b9.plotTop=b4(b9.plotTop,ch+b9.options.title.margin+cg[0])
}if(ca.display&&!cc.floating){if(L==="right"){if(!V(cf[1])){b9.marginRight=b4(b9.marginRight,ca.legendWidth-cd+cb+cg[1])
}}else{if(L==="left"){if(!V(cf[3])){b9.plotLeft=b4(b9.plotLeft,ca.legendWidth+cd+cb+cg[3])
}}else{if(ci==="top"){if(!V(cf[0])){b9.plotTop=b4(b9.plotTop,ca.legendHeight+ce+cb+cg[0])
}}else{if(ci==="bottom"){if(!V(cf[2])){b9.marginBottom=b4(b9.marginBottom,ca.legendHeight-ce+cb+cg[2])
}}}}}}if(b9.extraBottomMargin){b9.marginBottom+=b9.extraBottomMargin
}if(b9.extraTopMargin){b9.plotTop+=b9.extraTopMargin
}if(b9.hasCartesianSeries){T(b9.axes,function(cj){cj.getOffset()
})
}if(!V(cf[3])){b9.plotLeft+=M[3]
}if(!V(cf[0])){b9.plotTop+=M[0]
}if(!V(cf[2])){b9.marginBottom+=M[2]
}if(!V(cf[1])){b9.marginRight+=M[1]
}b9.setChartSize()
},reflow:function(b9){var L=this,cb=L.options.chart,cc=L.renderTo,ce=cb.width||aG(cc,"width"),ca=cb.height||aG(cc,"height"),cd=b9?b9.target:bC,M=function(){if(L.container){L.setSize(ce,ca,false);
L.hasUserSize=null
}};
if(!L.hasUserSize&&ce&&ca&&(cd===bC||cd===bh)){if(ce!==L.containerWidth||ca!==L.containerHeight){clearTimeout(L.reflowTimeout);
if(b9){L.reflowTimeout=setTimeout(M,100)
}else{M()
}}L.containerWidth=ce;
L.containerHeight=ca
}},initReflow:function(){var L=this,M=function(b9){L.reflow(b9)
};
bx(bC,"resize",M);
bx(L,"destroy",function(){b(bC,"resize",M)
})
},setSize:function(cd,cc,L){var M=this,ca,b9,cb;
M.isResizing+=1;
cb=function(){if(M){x(M,"endResize",null,function(){M.isResizing-=1
})
}};
aA(L,M);
M.oldChartHeight=M.chartHeight;
M.oldChartWidth=M.chartWidth;
if(V(cd)){M.chartWidth=ca=b4(0,c(cd));
M.hasUserSize=!!ca
}if(V(cc)){M.chartHeight=b9=b4(0,c(cc))
}(aq?bP:bO)(M.container,{width:ca+k,height:b9+k},aq);
M.setChartSize(true);
M.renderer.setSize(ca,b9,L);
M.maxTicks=null;
T(M.axes,function(ce){ce.isDirty=true;
ce.setScale()
});
T(M.series,function(ce){ce.isDirty=true
});
M.isDirtyLegend=true;
M.isDirtyBox=true;
M.layOutTitles();
M.getMargins();
M.redraw(L);
M.oldChartHeight=null;
x(M,"resize");
if(aq===false){cb()
}else{setTimeout(cb,(aq&&aq.duration)||500)
}},setChartSize:function(cl){var L=this,cd=L.inverted,ck=L.renderer,b9=L.chartWidth,M=L.chartHeight,ce=L.options.chart,cm=L.spacing,ca=L.clipOffset,cb,cc,ch,ci,cj,cg,cf;
L.plotLeft=ch=c(L.plotLeft);
L.plotTop=ci=c(L.plotTop);
L.plotWidth=cj=b4(0,c(b9-ch-L.marginRight));
L.plotHeight=cg=b4(0,c(M-ci-L.marginBottom));
L.plotSizeX=cd?cg:cj;
L.plotSizeY=cd?cj:cg;
L.plotBorderWidth=ce.plotBorderWidth||0;
L.spacingBox=ck.spacingBox={x:cm[3],y:cm[0],width:b9-cm[3]-cm[1],height:M-cm[0]-cm[2]};
L.plotBox=ck.plotBox={x:ch,y:ci,width:cj,height:cg};
cf=2*I(L.plotBorderWidth/2);
cb=Z(b4(cf,ca[3])/2);
cc=Z(b4(cf,ca[0])/2);
L.clipBox={x:cb,y:cc,width:I(L.plotSizeX-b4(cf,ca[1])/2-cb),height:I(L.plotSizeY-b4(cf,ca[2])/2-cc)};
if(!cl){T(L.axes,function(cn){cn.setAxisSize();
cn.setAxisTranslation()
})
}},resetMargins:function(){var L=this,b9=L.spacing,M=L.margin;
L.plotTop=R(M[0],b9[0]);
L.marginRight=R(M[1],b9[1]);
L.marginBottom=R(M[2],b9[2]);
L.plotLeft=R(M[3],b9[3]);
L.axisOffset=[0,0,0,0];
L.clipOffset=[0,0,0,0]
},drawChartBox:function(){var ch=this,cq=ch.options.chart,cf=ch.renderer,cm=ch.chartWidth,cl=ch.chartHeight,ci=ch.chartBackground,cr=ch.plotBackground,M=ch.plotBorder,L=ch.plotBGImage,ck=cq.borderWidth||0,cj=cq.backgroundColor,cs=cq.plotBackgroundColor,ct=cq.plotBackgroundImage,b9=cq.plotBorderWidth||0,cp,cg,cc=ch.plotLeft,cd=ch.plotTop,ce=ch.plotWidth,cb=ch.plotHeight,ca=ch.plotBox,co=ch.clipRect,cn=ch.clipBox;
cp=ck+(cq.shadow?8:0);
if(ck||cj){if(!ci){cg={fill:cj||aP};
if(ck){cg.stroke=cq.borderColor;
cg["stroke-width"]=ck
}ch.chartBackground=cf.rect(cp/2,cp/2,cm-cp,cl-cp,cq.borderRadius,ck).attr(cg).addClass(Y+"background").add().shadow(cq.shadow)
}else{ci.animate(ci.crisp({width:cm-cp,height:cl-cp}))
}}if(cs){if(!cr){ch.plotBackground=cf.rect(cc,cd,ce,cb,0).attr({fill:cs}).add().shadow(cq.plotShadow)
}else{cr.animate(ca)
}}if(ct){if(!L){ch.plotBGImage=cf.image(ct,cc,cd,ce,cb).add()
}else{L.animate(ca)
}}if(!co){ch.clipRect=cf.clipRect(cn)
}else{co.animate({width:cn.width,height:cn.height})
}if(b9){if(!M){ch.plotBorder=cf.rect(cc,cd,ce,cb,0,-b9).attr({stroke:cq.plotBorderColor,"stroke-width":b9,fill:aP,zIndex:1}).add()
}else{M.animate(M.crisp({x:cc,y:cd,width:ce,height:cb}))
}}ch.isDirtyBox=false
},propFromSeries:function(){var L=this,ca=L.options.chart,b9,cb=L.options.series,M,cc;
T(["inverted","angular","polar"],function(cd){b9=G[ca.type||ca.defaultSeriesType];
cc=(L[cd]||ca[cd]||(b9&&b9.prototype[cd]));
M=cb&&cb.length;
while(!cc&&M--){b9=G[cb[M].type];
if(b9&&b9.prototype[cd]){cc=true
}}L[cd]=cc
})
},linkSeries:function(){var L=this,M=L.series;
T(M,function(b9){b9.linkedSeries.length=0
});
T(M,function(ca){var b9=ca.options.linkedTo;
if(aF(b9)){if(b9===":previous"){b9=L.series[ca.index-1]
}else{b9=L.get(b9)
}if(b9){b9.linkedSeries.push(ca);
ca.linkedParent=b9
}}})
},renderSeries:function(){T(this.series,function(L){L.translate();
if(L.setTooltipPoints){L.setTooltipPoints()
}L.render()
})
},render:function(){var M=this,L=M.axes,cd=M.renderer,cc=M.options;
var cb=cc.labels,b9=cc.credits,ca;
M.setTitle();
M.legend=new bz(M,cc.legend);
M.getStacks();
T(L,function(ce){ce.setScale()
});
M.getMargins();
M.maxTicks=null;
T(L,function(ce){ce.setTickPositions(true);
ce.setMaxTicks()
});
M.adjustTickAmounts();
M.getMargins();
M.drawChartBox();
if(M.hasCartesianSeries){T(L,function(ce){ce.render()
})
}if(!M.seriesGroup){M.seriesGroup=cd.g("series-group").attr({zIndex:3}).add()
}M.renderSeries();
if(cb.items){T(cb.items,function(ce){var cf=bb(cb.style,ce.style),cg=a6(cf.left)+M.plotLeft,ch=a6(cf.top)+M.plotTop+12;
delete cf.left;
delete cf.top;
cd.text(ce.html,cg,ch).attr({zIndex:2}).css(cf).add()
})
}if(b9.enabled&&!M.credits){ca=b9.href;
M.credits=cd.text(b9.text,0,0).on("click",function(){if(ca){location.href=ca
}}).attr({align:b9.position.align,zIndex:8}).css(b9.style).add().align(b9.position)
}M.hasRendered=true
},destroy:function(){var M=this,L=M.axes,cc=M.series,b9=M.container,ca,cb=b9&&b9.parentNode;
x(M,"destroy");
l[M.index]=bg;
aN--;
M.renderTo.removeAttribute("data-highcharts-chart");
b(M);
ca=L.length;
while(ca--){L[ca]=L[ca].destroy()
}ca=cc.length;
while(ca--){cc[ca]=cc[ca].destroy()
}T(["title","subtitle","chartBackground","plotBackground","plotBGImage","plotBorder","seriesGroup","clipRect","credits","pointer","scroller","rangeSelector","legend","resetZoomButton","tooltip","renderer"],function(cd){var ce=M[cd];
if(ce&&ce.destroy){M[cd]=ce.destroy()
}});
if(b9){b9.innerHTML="";
b(b9);
if(cb){X(b9)
}}for(ca in M){delete M[ca]
}},isReadyToRender:function(){var L=this;
if((!K&&(bC==bC.top&&bh.readyState!=="complete"))||(aQ&&!bC.canvg)){if(aQ){S.push(function(){L.firstRender()
},L.options.global.canvasToolsURL)
}else{bh.attachEvent("onreadystatechange",function(){bh.detachEvent("onreadystatechange",L.firstRender);
if(bh.readyState==="complete"){L.firstRender()
}})
}return false
}return true
},firstRender:function(){var M=this,b9=M.options,L=M.callback;
if(!M.isReadyToRender()){return
}M.getContainer();
x(M,"init");
M.resetMargins();
M.setChartSize();
M.propFromSeries();
M.getAxes();
T(b9.series||[],function(ca){M.initSeries(ca)
});
M.linkSeries();
x(M,"beforeRender");
if(U.Pointer){M.pointer=new v(M,b9)
}M.render();
M.renderer.draw();
if(L){L.apply(M,[M])
}T(M.callbacks,function(ca){ca.apply(M,[M])
});
M.cloneRenderTo(true);
x(M,"load")
},splashArray:function(b9,L){var M=L[b9],ca=bI(M)?M:[M,M,M,M];
return[R(L[b9+"Top"],ca[0]),R(L[b9+"Right"],ca[1]),R(L[b9+"Bottom"],ca[2]),R(L[b9+"Left"],ca[3])]
}};
bH.prototype.callbacks=[];
var aw=U.CenteredSeriesMixin={getCenter:function(){var cf=this.options,cc=this.chart,b9=2*(cf.slicedOffset||0),cd,L=cc.plotWidth-2*b9,cg=cc.plotHeight-2*b9,cb=cf.center,M=[R(cb[0],"50%"),R(cb[1],"50%"),cf.size||"100%",cf.innerSize||0],ca=j(L,cg),ce;
return a7(M,function(ci,ch){ce=/%$/.test(ci);
cd=ch<2||(ch===2&&ce);
return(ce?[L,cg,ca,ca][ch]*a6(ci)/100:ci)+(cd?b9:0)
})
}};
var aC=function(){};
aC.prototype={init:function(b9,L,ca){var M=this,cb;
M.series=b9;
M.applyOptions(L,ca);
M.pointAttr={};
if(b9.options.colorByPoint){cb=b9.options.colors||b9.chart.options.colors;
M.color=M.color||cb[b9.colorCounter++];
if(b9.colorCounter===cb.length){b9.colorCounter=0
}}b9.chart.pointCount++;
return M
},applyOptions:function(cb,ca){var L=this,b9=L.series,M=b9.pointValKey;
cb=aC.prototype.optionsToObject.call(this,cb);
bb(L,cb);
L.options=L.options?bb(L.options,cb):cb;
if(M){L.y=L[M]
}if(L.x===bg&&b9){L.x=ca===bg?b9.autoIncrement():ca
}return L
},optionsToObject:function(ca){var cc={},cd=this.series,cb=cd.pointArrayMap||["y"],ce=cb.length,L,M=0,b9=0;
if(typeof ca==="number"||ca===null){cc[cb[0]]=ca
}else{if(P(ca)){if(ca.length>ce){L=typeof ca[0];
if(L==="string"){cc.name=ca[0]
}else{if(L==="number"){cc.x=ca[0]
}}M++
}while(b9<ce){cc[cb[b9++]]=ca[M++]
}}else{if(typeof ca==="object"){cc=ca;
if(ca.dataLabels){cd._hasPointLabels=true
}if(ca.marker){cd._hasPointMarkers=true
}}}}return cc
},destroy:function(){var M=this,ca=M.series,cb=ca.chart,L=cb.hoverPoints,b9;
cb.pointCount--;
if(L){M.setState();
bi(L,M);
if(!L.length){cb.hoverPoints=null
}}if(M===cb.hoverPoint){M.onMouseOut()
}if(M.graphic||M.dataLabel){b(M);
M.destroyElements()
}if(M.legendItem){cb.legend.destroyItem(M)
}for(b9 in M){M[b9]=null
}},destroyElements:function(){var M=this,ca=["graphic","dataLabel","dataLabelUpper","group","connector","shadowGroup"],b9,L=6;
while(L--){b9=ca[L];
if(M[b9]){M[b9]=M[b9].destroy()
}}},getLabelConfig:function(){var L=this;
return{x:L.category,y:L.y,key:L.name||L.category,series:L.series,point:L,percentage:L.percentage,total:L.total||L.stackTotal}
},tooltipFormatter:function(L){var M=this.series,b9=M.tooltipOptions,ca=R(b9.valueDecimals,""),cb=b9.valuePrefix||"",cc=b9.valueSuffix||"";
T(M.pointArrayMap||["y"],function(cd){cd="{point."+cd;
if(cb||cc){L=L.replace(cd+"}",cb+cd+"}"+cc)
}L=L.replace(cd+"}",cd+":,."+ca+"f}")
});
return ay(L,{point:this,series:this.series})
},firePointEvent:function(b9,M,L){var ca=this,cb=this.series,cc=cb.options;
if(cc.point.events[b9]||(ca.options&&ca.options.events&&ca.options.events[b9])){this.importEvents()
}if(b9==="click"&&cc.allowPointSelect){L=function(cd){ca.select(null,cd.ctrlKey||cd.metaKey||cd.shiftKey)
}
}x(this,b9,M,L)
}};
var a2=function(){};
a2.prototype={isCartesian:true,type:"line",pointClass:aC,sorted:true,requireSorting:true,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(L,cb){var cc=this,ca,b9,M=L.series,cd=function(ce,cf){return R(ce.options.index,ce._i)-R(cf.options.index,cf._i)
};
cc.chart=L;
cc.options=cb=cc.setOptions(cb);
cc.linkedSeries=[];
cc.bindAxes();
bb(cc,{name:cb.name,state:bu,pointAttr:{},visible:cb.visible!==false,selected:cb.selected===true});
if(aQ){cb.animation=false
}b9=cb.events;
for(ca in b9){bx(cc,ca,b9[ca])
}if((b9&&b9.click)||(cb.point&&cb.point.events&&cb.point.events.click)||cb.allowPointSelect){L.runTrackerClick=true
}cc.getColor();
cc.getSymbol();
T(cc.parallelArrays,function(ce){cc[ce+"Data"]=[]
});
cc.setData(cb.data,false);
if(cc.isCartesian){L.hasCartesianSeries=true
}M.push(cc);
cc._i=M.length-1;
aK(M,cd);
if(this.yAxis){aK(this.yAxis.series,cd)
}T(M,function(cf,ce){cf.index=ce;
cf.name=cf.name||"Series "+(ce+1)
})
},bindAxes:function(){var b9=this,ca=b9.options,M=b9.chart,L;
T(b9.axisTypes||[],function(cb){T(M[cb],function(cc){L=cc.options;
if((ca[cb]===L.index)||(ca[cb]!==bg&&ca[cb]===L.id)||(ca[cb]===bg&&L.index===0)){cc.series.push(b9);
b9[cb]=cc;
cc.isDirty=true
}});
if(!b9[cb]&&b9.optionalAxis!==cb){bM(18,true)
}})
},updateParallelArrays:function(b9,M){var ca=b9.series,cb=arguments,L=typeof M==="number"?function(cc){var cd=cc==="y"&&ca.toYData?ca.toYData(b9):b9[cc];
ca[cc+"Data"][M]=cd
}:function(cc){Array.prototype[M].apply(ca[cc+"Data"],Array.prototype.slice.call(cb,2))
};
T(ca.parallelArrays,L)
},autoIncrement:function(){var M=this,L=M.options,b9=M.xIncrement;
b9=R(b9,L.pointStart,0);
M.pointInterval=R(M.pointInterval,L.pointInterval,1);
M.xIncrement=b9+M.pointInterval;
return b9
},getSegments:function(){var cc=this,M=-1,cb=[],L,b9=cc.points,ca=b9.length;
if(ca){if(cc.options.connectNulls){L=ca;
while(L--){if(b9[L].y===null){b9.splice(L,1)
}}if(b9.length){cb=[b9]
}}else{T(b9,function(ce,cd){if(ce.y===null){if(cd>M+1){cb.push(b9.slice(M+1,cd))
}M=cd
}else{if(cd===ca-1){cb.push(b9.slice(M+1,cd+1))
}}})
}}cc.segments=cb
},setOptions:function(b9){var L=this.chart,M=L.options,cb=M.plotOptions,cd=L.userOptions||{},ce=cd.plotOptions||{},cc=cb[this.type],ca;
this.userOptions=b9;
ca=bR(cc,cb.series,b9);
this.tooltipOptions=bR(bs.tooltip,bs.plotOptions[this.type].tooltip,cd.tooltip,ce.series&&ce.series.tooltip,ce[this.type]&&ce[this.type].tooltip,b9.tooltip);
if(cc.marker===null){delete ca.marker
}return ca
},getColor:function(){var cb=this.options,cc=this.userOptions,ca=this.chart.options.colors,b9=this.chart.counters,L,M;
L=cb.color||b1[this.type].color;
if(!L&&!cb.colorByPoint){if(V(cc._colorIndex)){M=cc._colorIndex
}else{cc._colorIndex=b9.color;
M=b9.color++
}L=ca[M]
}this.color=L;
b9.wrapColor(ca.length)
},getSymbol:function(){var ca=this,cd=ca.userOptions,cb=ca.options.marker,L=ca.chart,b9=L.options.symbols,M=L.counters,cc;
ca.symbol=cb.symbol;
if(!ca.symbol){if(V(cd._symbolIndex)){cc=cd._symbolIndex
}else{cd._symbolIndex=M.symbol;
cc=M.symbol++
}ca.symbol=b9[cc]
}if(/^url/.test(ca.symbol)){cb.radius=0
}M.wrapSymbol(b9.length)
},drawLegendSymbol:a1.drawLineMarker,setData:function(ci,ct,cg,ca){var L=this,cn=L.points,co=(cn&&cn.length)||0,cj,cp=L.options,ch=L.chart,ck=null,cd=L.xAxis,cl=cd&&!!cd.categories,M=L.tooltipPoints,cm,b9=cp.turboThreshold,cs,ce=this.xData,cf=this.yData,cq=L.pointArrayMap,cb=cq&&cq.length;
ci=ci||[];
cj=ci.length;
ct=R(ct,true);
if(ca!==false&&cj&&co===cj&&!L.cropped&&!L.hasGroupedData){T(ci,function(cv,cu){cn[cu].update(cv,false)
})
}else{L.xIncrement=null;
L.pointRange=cl?1:cp.pointRange;
L.colorCounter=0;
T(this.parallelArrays,function(cu){L[cu+"Data"].length=0
});
if(b9&&cj>b9){cm=0;
while(ck===null&&cm<cj){ck=ci[cm];
cm++
}if(aD(ck)){var cc=R(cp.pointStart,0),cr=R(cp.pointInterval,1);
for(cm=0;
cm<cj;
cm++){ce[cm]=cc;
cf[cm]=ci[cm];
cc+=cr
}L.xIncrement=cc
}else{if(P(ck)){if(cb){for(cm=0;
cm<cj;
cm++){cs=ci[cm];
ce[cm]=cs[0];
cf[cm]=cs.slice(1,cb+1)
}}else{for(cm=0;
cm<cj;
cm++){cs=ci[cm];
ce[cm]=cs[0];
cf[cm]=cs[1]
}}}else{bM(12)
}}}else{for(cm=0;
cm<cj;
cm++){if(ci[cm]!==bg){cs={series:L};
L.pointClass.prototype.applyOptions.apply(cs,[ci[cm]]);
L.updateParallelArrays(cs,cm);
if(cl&&cs.name){cd.names[cs.x]=cs.name
}}}}if(aF(cf[0])){bM(14,true)
}L.data=[];
L.options.data=ci;
cm=co;
while(cm--){if(cn[cm]&&cn[cm].destroy){cn[cm].destroy()
}}if(M){M.length=0
}if(cd){cd.minRange=cd.userMinRange
}L.isDirty=L.isDirtyData=ch.isDirtyBox=true;
cg=false
}if(ct){ch.redraw(cg)
}},processData:function(cl){var cb=this,b9=cb.xData,ca=cb.yData,cj=b9.length,cg,ch=0,cf,ck,ce,cc=cb.xAxis,cm,M=cb.options,ci=M.cropThreshold,cd=0,cn=cb.isCartesian,L,co;
if(cn&&!cb.isDirty&&!cc.isDirty&&!cb.yAxis.isDirty&&!cl){return false
}if(cn&&cb.sorted&&(!ci||cj>ci||cb.forceCrop)){L=cc.min;
co=cc.max;
if(b9[cj-1]<L||b9[0]>co){b9=[];
ca=[]
}else{if(b9[0]<L||b9[cj-1]>co){cg=this.cropData(cb.xData,cb.yData,L,co);
b9=cg.xData;
ca=cg.yData;
ch=cg.start;
cf=true;
cd=b9.length
}}}for(cm=b9.length-1;
cm>=0;
cm--){ck=b9[cm]-b9[cm-1];
if(!cf&&b9[cm]>L&&b9[cm]<co){cd++
}if(ck>0&&(ce===bg||ck<ce)){ce=ck
}else{if(ck<0&&cb.requireSorting){bM(15)
}}}cb.cropped=cf;
cb.cropStart=ch;
cb.processedXData=b9;
cb.processedYData=ca;
cb.activePointCount=cd;
if(M.pointRange===null){cb.pointRange=ce||1
}cb.closestPointRange=ce
},cropData:function(cb,cc,ca,b9){var L=cb.length,cf=0,cd=L,ce=R(this.cropShoulder,1),M;
for(M=0;
M<L;
M++){if(cb[M]>=ca){cf=b4(0,M-ce);
break
}}for(;
M<L;
M++){if(cb[M]>b9){cd=M+ce;
break
}}return{xData:cb.slice(cf,cd),yData:cc.slice(cf,cd),start:cf,end:cd}
},generatePoints:function(){var cm=this,cf=cm.options,cc=cf.data,ca=cm.data,cb,ck=cm.processedXData,cl=cm.processedYData,ch=cm.pointClass,cj=ck.length,M=cm.cropStart||0,b9,cd=cm.hasGroupedData,cg,ci=[],ce;
if(!ca&&!cd){var L=[];
L.length=cc.length;
ca=cm.data=L
}for(ce=0;
ce<cj;
ce++){b9=M+ce;
if(!cd){if(ca[b9]){cg=ca[b9]
}else{if(cc[b9]!==bg){ca[b9]=cg=(new ch()).init(cm,cc[b9],ck[ce])
}}ci[ce]=cg
}else{ci[ce]=(new ch()).init(cm,[ck[ce]].concat(bK(cl[ce])))
}}if(ca&&(cj!==(cb=ca.length)||cd)){for(ce=0;
ce<cb;
ce++){if(ce===M&&!cd){ce+=cj
}if(ca[ce]){ca[ce].destroyElements();
ca[ce].plotX=bg
}}}cm.data=ca;
cm.points=ci
},getExtremes:function(cb){var cm=this.xAxis,ca=this.yAxis,cn=this.processedXData,cc,ce=[],cd=0,co=cm.getExtremes(),M=co.min,L=co.max,cj,ck,cg,cf,cl,b9,ch,ci;
cb=cb||this.stackedYData||this.processedYData;
cc=cb.length;
for(ch=0;
ch<cc;
ch++){cl=cn[ch];
b9=cb[ch];
cj=b9!==null&&b9!==bg&&(!ca.isLog||(b9.length||b9>0));
ck=this.getExtremesFromAll||this.cropped||((cn[ch+1]||cl)>=M&&(cn[ch-1]||cl)<=L);
if(cj&&ck){ci=b9.length;
if(ci){while(ci--){if(b9[ci]!==null){ce[cd++]=b9[ci]
}}}else{ce[cd++]=b9
}}}this.dataMin=R(cg,z(ce));
this.dataMax=R(cf,bn(ce))
},translate:function(){if(!this.processedXData){this.processData()
}this.generatePoints();
var cl=this,cg=cl.options,cn=cg.stacking,cq=cl.xAxis,cb=cq.categories,M=cl.yAxis,cj=cl.points,cc=cj.length,ce=!!cl.modifyValue,cf,ci=cg.pointPlacement,cd=ci==="between"||aD(ci),cp=cg.threshold;
for(cf=0;
cf<cc;
cf++){var ch=cj[cf],L=ch.x,ca=ch.y,b9=ch.low,cm=cn&&M.stacks[(cl.negStacks&&ca<cp?"-":"")+cl.stackKey],ck,co;
if(M.isLog&&ca<=0){ch.y=ca=null
}ch.plotX=cq.translate(L,0,0,0,1,ci,this.type==="flags");
if(cn&&cl.visible&&cm&&cm[L]){ck=cm[L];
co=ck.points[cl.index+","+cf];
b9=co[0];
ca=co[1];
if(b9===0){b9=R(cp,M.min)
}if(M.isLog&&b9<=0){b9=null
}ch.total=ch.stackTotal=ck.total;
ch.percentage=ck.total&&(ch.y/ck.total*100);
ch.stackY=ca;
ck.setOffset(cl.pointXOffset||0,cl.barW||0)
}ch.yBottom=V(b9)?M.translate(b9,0,1,0,1):null;
if(ce){ca=cl.modifyValue(ca,ch)
}ch.plotY=(typeof ca==="number"&&ca!==Infinity)?M.translate(ca,0,1,0,1):bg;
ch.clientX=cd?cq.translate(L,0,0,0,1):ch.plotX;
ch.negative=ch.y<(cp||0);
ch.category=cb&&cb[ch.x]!==bg?cb[ch.x]:ch.x
}cl.getSegments()
},animate:function(cf){var b9=this,cc=b9.chart,M=cc.renderer,ce,L,cb=b9.options.animation,cd=b9.clipBox||cc.clipBox,cg=cc.inverted,ca;
if(cb&&!bI(cb)){cb=b1[b9.type].animation
}ca=["_sharedClip",cb.duration,cb.easing,cd.height].join(",");
if(cf){ce=cc[ca];
L=cc[ca+"m"];
if(!ce){cc[ca]=ce=M.clipRect(bb(cd,{width:0}));
cc[ca+"m"]=L=M.clipRect(-99,cg?-cc.plotLeft:-cc.plotTop,99,cg?cc.chartWidth:cc.chartHeight)
}b9.group.clip(ce);
b9.markerGroup.clip(L);
b9.sharedClipKey=ca
}else{ce=cc[ca];
if(ce){ce.animate({width:cc.plotSizeX},cb)
}if(cc[ca+"m"]){cc[ca+"m"].animate({width:cc.plotSizeX+99},cb)
}b9.animate=null
}},afterAnimate:function(){var L=this.chart,ca=this.sharedClipKey,b9=this.group,M=this.clipBox;
if(b9&&this.options.clip!==false){if(!ca||!M){b9.clip(M?L.renderer.clipRect(M):L.clipRect)
}this.markerGroup.clip()
}x(this,"afterAnimate");
setTimeout(function(){if(ca&&L[ca]){if(!M){L[ca]=L[ca].destroy()
}if(L[ca+"m"]){L[ca+"m"]=L[ca+"m"].destroy()
}}},100)
},drawPoints:function(){var L=this,cn,cp=L.points,cb=L.chart,ck,cl,cf,cm,cq,ca,cg,ce,cj=L.options,M=cj.marker,b9=L.pointAttr[""],co,cc,ch,ci=L.markerGroup,cd=R(M.enabled,L.activePointCount<(0.5*L.xAxis.len/M.radius));
if(M.enabled!==false||L._hasPointMarkers){cf=cp.length;
while(cf--){cm=cp[cf];
ck=I(cm.plotX);
cl=cm.plotY;
ce=cm.graphic;
co=cm.marker||{};
cc=(cd&&co.enabled===bg)||co.enabled;
ch=cb.isInsidePlot(c(ck),cl,cb.inverted);
if(cc&&cl!==bg&&!isNaN(cl)&&cm.y!==null){cn=cm.pointAttr[cm.selected?aR:bu]||b9;
cq=cn.r;
ca=R(co.symbol,L.symbol);
cg=ca.indexOf("url")===0;
if(ce){ce[ch?"show":"hide"](true).animate(bb({x:ck-cq,y:cl-cq},ce.symbolName?{width:2*cq,height:2*cq}:{}))
}else{if(ch&&(cq>0||cg)){cm.graphic=ce=cb.renderer.symbol(ca,ck-cq,cl-cq,2*cq,2*cq).attr(cn).add(ci)
}}}else{if(ce){cm.graphic=ce.destroy()
}}}}},convertAttribs:function(ce,M,b9,ca){var cb=this.pointAttrToOptions,L,cd,cc={};
ce=ce||{};
M=M||{};
b9=b9||{};
ca=ca||{};
for(L in cb){cd=cb[L];
cc[L]=R(ce[cd],M[L],b9[L],ca[L])
}return cc
},getAttribs:function(){var cl=this,cn=cl.options,cf=b1[cl.type].marker?cn.marker:cn,cp=cf.states,cq=cp[i],ck,cm=cl.color,ce={stroke:cm,fill:cm},cj=cl.points||[],cb,cg,co=[],ch,ci=cl.pointAttrToOptions,ca=cl.hasPointSpecificOptions,cd=cn.negativeColor,b9=cf.lineColor,M=cf.fillColor,cr=cn.turboThreshold,L,cc;
if(cn.marker){cq.radius=cq.radius||cf.radius+2;
cq.lineWidth=cq.lineWidth||cf.lineWidth+1
}else{cq.color=cq.color||o(cq.color||cm).brighten(cq.brightness).get()
}co[bu]=cl.convertAttribs(cf,ce);
T([i,aR],function(cs){co[cs]=cl.convertAttribs(cp[cs],co[bu])
});
cl.pointAttr=co;
cb=cj.length;
if(!cr||cb<cr||ca){while(cb--){cg=cj[cb];
cf=(cg.options&&cg.options.marker)||cg.options;
if(cf&&cf.enabled===false){cf.radius=0
}if(cg.negative&&cd){cg.color=cg.fillColor=cd
}ca=cn.colorByPoint||cg.color;
if(cg.options){for(cc in ci){if(V(cf[ci[cc]])){ca=true
}}}if(ca){cf=cf||{};
ch=[];
cp=cf.states||{};
ck=cp[i]=cp[i]||{};
if(!cn.marker){ck.color=ck.color||(!cg.options.color&&cq.color)||o(cg.color).brighten(ck.brightness||cq.brightness).get()
}L={color:cg.color};
if(!M){L.fillColor=cg.color
}if(!b9){L.lineColor=cg.color
}ch[bu]=cl.convertAttribs(bb(L,cf),co[bu]);
ch[i]=cl.convertAttribs(cp[i],co[i],ch[bu]);
ch[aR]=cl.convertAttribs(cp[aR],co[aR],ch[bu])
}else{ch=co
}cg.pointAttr=ch
}}},destroy:function(){var cc=this,ce=cc.chart,b9=/AppleWebKit\/533/.test(aZ),L,M,cf=cc.data||[],ca,cb,cd;
x(cc,"destroy");
b(cc);
T(cc.axisTypes||[],function(cg){cd=cc[cg];
if(cd){bi(cd.series,cc);
cd.isDirty=cd.forceRedraw=true
}});
if(cc.legendItem){cc.chart.legend.destroyItem(cc)
}M=cf.length;
while(M--){ca=cf[M];
if(ca&&ca.destroy){ca.destroy()
}}cc.points=null;
clearTimeout(cc.animationTimeout);
T(["area","graph","dataLabelsGroup","group","markerGroup","tracker","graphNeg","areaNeg","posClip","negClip"],function(cg){if(cc[cg]){L=b9&&cg==="group"?"hide":"destroy";
cc[cg][L]()
}});
if(ce.hoverSeries===cc){ce.hoverSeries=null
}bi(ce.series,cc);
for(cb in cc){delete cc[cb]
}},getSegmentPath:function(L){var b9=this,M=[],ca=b9.options.step;
T(L,function(cf,cb){var cd=cf.plotX,ce=cf.plotY,cc;
if(b9.getPointSpline){M.push.apply(M,b9.getPointSpline(L,cf,cb))
}else{M.push(cb?e:A);
if(ca&&cb){cc=L[cb-1];
if(ca==="right"){M.push(cc.plotX,ce)
}else{if(ca==="center"){M.push((cc.plotX+cd)/2,cc.plotY,(cc.plotX+cd)/2,ce)
}else{M.push(cd,cc.plotY)
}}}M.push(cf.plotX,cf.plotY)
}});
return M
},getGraphPath:function(){var b9=this,L=[],M,ca=[];
T(b9.segments,function(cb){M=b9.getSegmentPath(cb);
if(cb.length>1){L=L.concat(M)
}else{ca.push(cb[0])
}});
b9.singlePoints=ca;
b9.graphPath=L;
return L
},drawGraph:function(){var ce=this,cb=this.options,cc=[["graph",cb.lineColor||this.color]],b9=cb.lineWidth,L=cb.dashStyle,cd=cb.linecap!=="square",M=this.getGraphPath(),ca=cb.negativeColor;
if(ca){cc.push(["graphNeg",ca])
}T(cc,function(cj,ci){var ch=cj[0],cg=ce[ch],cf;
if(cg){bJ(cg);
cg.animate({d:M})
}else{if(b9&&M.length){cf={stroke:cj[1],"stroke-width":b9,fill:aP,zIndex:1};
if(L){cf.dashstyle=L
}else{if(cd){cf["stroke-linecap"]=cf["stroke-linejoin"]="round"
}}ce[ch]=ce.chart.renderer.path(M).attr(cf).add(ce.group).shadow(!ci&&cb.shadow)
}}})
},clipNeg:function(){var cm=this.options,ce=this.chart,M=ce.renderer,cj=cm.negativeColor||cm.negativeFillColor,b9,cn,ck,ci=this.graph,cc=this.area,L=this.posClip,cl=this.negClip,ch=ce.chartWidth,cf=ce.chartHeight,cg=b4(ch,cf),ca=this.yAxis,cb,cd;
if(cj&&(ci||cc)){b9=c(ca.toPixels(cm.threshold||0,true));
if(b9<0){cg-=b9
}cb={x:0,y:0,width:cg,height:b9};
cd={x:0,y:b9,width:cg,height:cg};
if(ce.inverted){cb.height=cd.y=ce.plotWidth-b9;
if(M.isVML){cb={x:ce.plotWidth-b9-ce.plotLeft,y:0,width:ch,height:cf};
cd={x:b9+ce.plotLeft-ch,y:0,width:ce.plotLeft+b9,height:ch}
}}if(ca.reversed){cn=cd;
ck=cb
}else{cn=cb;
ck=cd
}if(L){L.animate(cn);
cl.animate(ck)
}else{this.posClip=L=M.clipRect(cn);
this.negClip=cl=M.clipRect(ck);
if(ci&&this.graphNeg){ci.clip(L);
this.graphNeg.clip(cl)
}if(cc){cc.clip(L);
this.areaNeg.clip(cl)
}}}},invertGroups:function(){var M=this,L=M.chart;
if(!M.xAxis){return
}function b9(){var ca={width:M.yAxis.len,height:M.xAxis.len};
T(["group","markerGroup"],function(cb){if(M[cb]){M[cb].attr(ca).invert()
}})
}bx(L,"resize",b9);
bx(M,"destroy",function(){b(L,"resize",b9)
});
b9();
M.invertGroups=b9
},plotGroup:function(cb,b9,cc,cd,ca){var L=this[cb],M=!L;
if(M){this[cb]=L=this.chart.renderer.g(b9).attr({visibility:cc,zIndex:cd||0.1}).add(ca)
}L[M?"attr":"animate"](this.getPlotBox());
return L
},getPlotBox:function(){var L=this.chart,M=this.xAxis,b9=this.yAxis;
if(L.inverted){M=b9;
b9=this.xAxis
}return{translateX:M?M.left:L.plotLeft,translateY:b9?b9.top:L.plotTop,scaleX:1,scaleY:1}
},render:function(){var M=this,cd=M.chart,cf,L=M.options,cb=L.animation,cc=(cb&&!!M.animate&&cd.renderer.isSVG&&R(cb.duration,500))||0,b9=M.visible?m:F,ca=L.zIndex,cg=M.hasRendered,ce=cd.seriesGroup;
cf=M.plotGroup("group","series",b9,ca,ce);
M.markerGroup=M.plotGroup("markerGroup","markers",b9,ca,ce);
if(cc){M.animate(true)
}M.getAttribs();
cf.inverted=M.isCartesian?cd.inverted:false;
if(M.drawGraph){M.drawGraph();
M.clipNeg()
}if(M.drawDataLabels){M.drawDataLabels()
}if(M.visible){M.drawPoints()
}if(M.drawTracker&&M.options.enableMouseTracking!==false){M.drawTracker()
}if(cd.inverted){M.invertGroups()
}if(L.clip!==false&&!M.sharedClipKey&&!cg){cf.clip(cd.clipRect)
}if(cc){M.animate()
}if(!cg){if(cc){M.animationTimeout=setTimeout(function(){M.afterAnimate()
},cc)
}else{M.afterAnimate()
}}M.isDirty=M.isDirtyData=false;
M.hasRendered=true
},redraw:function(){var b9=this,L=b9.chart,ca=b9.isDirtyData,M=b9.group,cb=b9.xAxis,cc=b9.yAxis;
if(M){if(L.inverted){M.attr({width:L.plotWidth,height:L.plotHeight})
}M.animate({translateX:R(cb&&cb.left,L.plotLeft),translateY:R(cc&&cc.top,L.plotTop)})
}b9.translate();
if(b9.setTooltipPoints){b9.setTooltipPoints(true)
}b9.render();
if(ca){x(b9,"updatedData")
}}};
function b3(L,ca,b9,cc,cb){var M=L.chart.inverted;
this.axis=L;
this.isNegative=b9;
this.options=ca;
this.x=cc;
this.total=null;
this.points={};
this.stack=cb;
this.alignOptions={align:ca.align||(M?(b9?"left":"right"):"center"),verticalAlign:ca.verticalAlign||(M?"middle":(b9?"bottom":"top")),y:R(ca.y,M?4:(b9?14:-6)),x:R(ca.x,M?(b9?-6:6):0)};
this.textAlign=ca.textAlign||(M?(b9?"right":"left"):"center")
}b3.prototype={destroy:function(){bV(this,this.axis)
},render:function(M){var b9=this.options,L=b9.format,ca=L?ay(L,this):b9.formatter.call(this);
if(this.label){this.label.attr({text:ca,visibility:F})
}else{this.label=this.axis.chart.renderer.text(ca,null,null,b9.useHTML).css(b9.style).attr({align:this.textAlign,rotation:b9.rotation,visibility:F}).add(M)
}},setOffset:function(cc,cd){var ca=this,ch=ca.axis,ci=ch.chart,ck=ci.inverted,L=this.isNegative,ce=ch.translate(ch.usePercentage?100:this.total,0,0,0,1),cf=ch.translate(0),cj=a4(ce-cf),cb=ci.xAxis[0].translate(this.x)+cc,M=ci.plotHeight,b9={x:ck?(L?ce:ce-cj):cb,y:ck?M-cb-cd:(L?(M-ce-cj):M-ce),width:ck?cj:cd,height:ck?cd:cj},cl=this.label,cg;
if(cl){cl.align(this.alignOptions,null,b9);
cg=cl.alignAttr;
cl[this.options.crop===false||ci.isInsidePlot(cg.x,cg.y)?"show":"hide"](true)
}}};
ba.prototype.buildStacks=function(){var b9=this.series,M=R(this.options.reversedStacks,true),L=b9.length;
if(!this.isXAxis){this.usePercentage=false;
while(L--){b9[M?L:b9.length-L-1].setStackedPoints()
}if(this.usePercentage){for(L=0;
L<b9.length;
L++){b9[L].setPercentStacks()
}}}};
ba.prototype.renderStackTotals=function(){var L=this,M=L.chart,ca=M.renderer,cd=L.stacks,cc,b9,cb,ce=L.stackTotalGroup;
if(!ce){L.stackTotalGroup=ce=ca.g("stack-labels").attr({visibility:m,zIndex:6}).add()
}ce.translate(M.plotLeft,M.plotTop);
for(cc in cd){b9=cd[cc];
for(cb in b9){b9[cb].render(ce)
}}};
a2.prototype.setStackedPoints=function(){if(!this.options.stacking||(this.visible!==true&&this.chart.options.chart.ignoreHiddenSeries!==false)){return
}var co=this,cb=co.processedXData,ce=co.processedYData,cr=[],cf=ce.length,cp=co.options,b9=cp.threshold,L=cp.stack,cs=cp.stacking,ct=co.stackKey,cj="-"+ct,ck=co.negStacks,cd=co.yAxis,M=cd.stacks,cl=cd.oldStacks,ch,cq,cm,ci,cn,cg,ca,cc;
for(cg=0;
cg<cf;
cg++){ca=cb[cg];
cc=ce[cg];
cn=co.index+","+cg;
ch=ck&&cc<b9;
ci=ch?cj:ct;
if(!M[ci]){M[ci]={}
}if(!M[ci][ca]){if(cl[ci]&&cl[ci][ca]){M[ci][ca]=cl[ci][ca];
M[ci][ca].total=null
}else{M[ci][ca]=new b3(cd,cd.options.stackLabels,ch,ca,L)
}}cq=M[ci][ca];
cq.points[cn]=[cq.cum||0];
if(cs==="percent"){cm=ch?ct:cj;
if(ck&&M[cm]&&M[cm][ca]){cm=M[cm][ca];
cq.total=cm.total=b4(cm.total,cq.total)+a4(cc)||0
}else{cq.total=bk(cq.total+(a4(cc)||0))
}}else{cq.total=bk(cq.total+(cc||0))
}cq.cum=(cq.cum||0)+(cc||0);
cq.points[cn].push(cq.cum);
cr[cg]=cq.cum
}if(cs==="percent"){cd.usePercentage=true
}this.stackedYData=cr;
cd.oldStacks={}
};
a2.prototype.setPercentStacks=function(){var M=this,b9=M.stackKey,ca=M.yAxis.stacks,L=M.processedXData;
T([b9,"-"+b9],function(cc){var cb=L.length,cg,ce,cd,cf;
while(cb--){cg=L[cb];
ce=ca[cc]&&ca[cc][cg];
cd=ce&&ce.points[M.index+","+cb];
if(cd){cf=ce.total?100/ce.total:0;
cd[0]=bk(cd[0]*cf);
cd[1]=bk(cd[1]*cf);
M.stackedYData[cb]=cd[1]
}}})
};
bb(bH.prototype,{addSeries:function(M,b9,cb){var ca,L=this;
if(M){b9=R(b9,true);
x(L,"addSeries",{options:M},function(){ca=L.initSeries(M);
L.isDirtyLegend=true;
L.linkSeries();
if(b9){L.redraw(cb)
}})
}return ca
},addAxis:function(cc,ca,cd,L){var cb=ca?"xAxis":"yAxis",b9=this.options,M;
M=new ba(this,bR(cc,{index:this[cb].length,isX:ca}));
b9[cb]=bK(b9[cb]||{});
b9[cb].push(cc);
if(R(cd,true)){this.redraw(L)
}},showLoading:function(ca){var cb=this,b9=cb.options,L=cb.loadingDiv;
var M=b9.loading;
if(!L){cb.loadingDiv=L=a9(b8,{className:Y+"loading"},bb(M.style,{zIndex:10,display:aP}),cb.container);
cb.loadingSpan=a9("span",null,M.labelStyle,L)
}cb.loadingSpan.innerHTML=ca||b9.lang.loading;
if(!cb.loadingShown){bO(L,{opacity:0,display:"",left:cb.plotLeft+k,top:cb.plotTop+k,width:cb.plotWidth+k,height:cb.plotHeight+k});
bP(L,{opacity:M.style.opacity},{duration:M.showDuration||0});
cb.loadingShown=true
}},hideLoading:function(){var M=this.options,L=this.loadingDiv;
if(L){bP(L,{opacity:0},{duration:M.loading.hideDuration||100,complete:function(){bO(L,{display:aP})
}})
}this.loadingShown=false
}});
bb(aC.prototype,{update:function(cg,M,cb){var L=this,b9=L.series,ce=L.graphic,cf,cd=b9.data,cc=b9.chart,ca=b9.options;
M=R(M,true);
L.firePointEvent("update",{options:cg},function(){L.applyOptions(cg);
if(bI(cg)){b9.getAttribs();
if(ce){if(cg&&cg.marker&&cg.marker.symbol){L.graphic=ce.destroy()
}else{ce.attr(L.pointAttr[L.state||""])
}}if(cg&&cg.dataLabels&&L.dataLabel){L.dataLabel=L.dataLabel.destroy()
}}cf=bZ(L,cd);
b9.updateParallelArrays(L,cf);
ca.data[cf]=L.options;
b9.isDirty=b9.isDirtyData=true;
if(!b9.fixedBox&&b9.hasCartesianSeries){cc.isDirtyBox=true
}if(ca.legendType==="point"){cc.legend.destroyItem(L)
}if(M){cc.redraw(cb)
}})
},remove:function(cd,L){var cb=this,ce=cb.series,cc=ce.points,M=ce.chart,ca,b9=ce.data;
aA(L,M);
cd=R(cd,true);
cb.firePointEvent("remove",null,function(){ca=bZ(cb,b9);
if(b9.length===cc.length){cc.splice(ca,1)
}b9.splice(ca,1);
ce.options.data.splice(ca,1);
ce.updateParallelArrays(cb,"splice",ca,1);
cb.destroy();
ce.isDirty=true;
ce.isDirtyData=true;
if(cd){M.redraw()
}})
}});
bb(a2.prototype,{addPoint:function(cn,L,ca,cd){var M=this,b9=M.options,ch=M.data,cj=M.graph,ce=M.area,cf=M.chart,cm=M.xAxis&&M.xAxis.names,cg=(cj&&cj.shift)||0,ci=b9.data,co,cl,cc=M.xData,cb,ck;
aA(cd,cf);
if(ca){T([cj,ce,M.graphNeg,M.areaNeg],function(cp){if(cp){cp.shift=cg+1
}})
}if(ce){ce.isArea=true
}L=R(L,true);
co={series:M};
M.pointClass.prototype.applyOptions.apply(co,[cn]);
cb=co.x;
ck=cc.length;
if(M.requireSorting&&cb<cc[ck-1]){cl=true;
while(ck&&cc[ck-1]>cb){ck--
}}M.updateParallelArrays(co,"splice",ck,0,0);
M.updateParallelArrays(co,ck);
if(cm){cm[cb]=co.name
}ci.splice(ck,0,cn);
if(cl){M.data.splice(ck,0,null);
M.processData()
}if(b9.legendType==="point"){M.generatePoints()
}if(ca){if(ch[0]&&ch[0].remove){ch[0].remove(false)
}else{ch.shift();
M.updateParallelArrays(co,"shift");
ci.shift()
}}M.isDirty=true;
M.isDirtyData=true;
if(L){M.getAttribs();
cf.redraw()
}},remove:function(b9,L){var ca=this,M=ca.chart;
b9=R(b9,true);
if(!ca.isRemoving){ca.isRemoving=true;
x(ca,"remove",null,function(){ca.destroy();
M.isDirtyLegend=M.isDirtyBox=true;
M.linkSeries();
if(b9){M.redraw(L)
}})
}ca.isRemoving=false
},update:function(b9,cd){var L=this.chart,ca=this.userOptions,cb=this.type,cc=G[cb].prototype,M;
b9=bR(ca,{animation:false,index:this.index,pointStart:this.xData[0]},{data:this.options.data},b9);
this.remove(false);
for(M in cc){if(cc.hasOwnProperty(M)){this[M]=bg
}}bb(this,G[b9.type||cb].prototype);
this.init(L,b9);
if(R(cd,true)){L.redraw(false)
}}});
bb(ba.prototype,{update:function(M,b9){var L=this.chart;
M=L.options[this.coll][this.options.index]=bR(this.userOptions,M);
this.destroy(true);
this._addedPlotLB=bg;
this.init(L,bb(M,{events:bg}));
L.isDirtyBox=true;
if(R(b9,true)){L.redraw()
}},remove:function(ca){var L=this.chart,b9=this.coll,cb=this.series,M=cb.length;
while(M--){if(cb[M]){cb[M].remove(false)
}}bi(L.axes,this);
bi(L[b9],this);
L.options[b9].splice(this.options.index,1);
T(L[b9],function(cc,cd){cc.options.index=cd
});
this.destroy();
L.isDirtyBox=true;
if(R(ca,true)){L.redraw()
}},setTitle:function(L,M){this.update({title:L},M)
},setCategories:function(L,M){this.update({categories:L},M)
}});
var aM=aB(a2);
G.line=aM;
b1.area=bR(ap,{threshold:0});
var bU=aB(a2,{type:"area",getSegments:function(){var cf=[],ce=[],b9=[],cj=this.xAxis,ck=this.yAxis,cg=ck.stacks[this.stackKey],cc={},ca,cb,cd=this.points,L=this.options.connectNulls,ch,M,ci;
if(this.options.stacking&&!this.cropped){for(M=0;
M<cd.length;
M++){cc[cd[M].x]=cd[M]
}for(ci in cg){if(cg[ci].total!==null){b9.push(+ci)
}}b9.sort(function(cl,cm){return cl-cm
});
T(b9,function(cl){if(L&&(!cc[cl]||cc[cl].y===null)){return
}else{if(cc[cl]){ce.push(cc[cl])
}else{ca=cj.translate(cl);
ch=cg[cl].percent?(cg[cl].total?cg[cl].cum*100/cg[cl].total:0):cg[cl].cum;
cb=ck.toPixels(ch,true);
ce.push({y:null,plotX:ca,clientX:ca,plotY:cb,yBottom:cb,onMouseOver:aj})
}}});
if(ce.length){cf.push(ce)
}}else{a2.prototype.getSegments.call(this);
cf=this.segments
}this.segments=cf
},getSegmentPath:function(cb){var cc=a2.prototype.getSegmentPath.call(this,cb),L=[].concat(cc),M,b9=this.options,ca=cc.length,cd=this.yAxis.getThreshold(b9.threshold),ce;
if(ca===3){L.push(e,cc[1],cc[2])
}if(b9.stacking&&!this.closedStacks){for(M=cb.length-1;
M>=0;
M--){ce=R(cb[M].yBottom,cd);
if(M<cb.length-1&&b9.step){L.push(cb[M+1].plotX,ce)
}L.push(cb[M].plotX,ce)
}}else{this.closeSegment(L,cb,cd)
}this.areaPath=this.areaPath.concat(L);
return cc
},closeSegment:function(L,M,b9){L.push(e,M[M.length-1].plotX,b9,e,M[0].plotX,b9)
},drawGraph:function(){this.areaPath=[];
a2.prototype.drawGraph.apply(this);
var cc=this,L=this.areaPath,ca=this.options,M=ca.negativeColor,b9=ca.negativeFillColor,cb=[["area",this.color,ca.fillColor]];
if(M||b9){cb.push(["areaNeg",M,b9])
}T(cb,function(cf){var ce=cf[0],cd=cc[ce];
if(cd){cd.animate({d:L})
}else{cc[ce]=cc.chart.renderer.path(L).attr({fill:R(cf[2],o(cf[1]).setOpacity(R(ca.fillOpacity,0.75)).get()),zIndex:0}).add(cc.group)
}})
},drawLegendSymbol:a1.drawRectangle});
G.area=bU;
b1.spline=bR(ap);
var bQ=aB(a2,{type:"spline",getPointSpline:function(cb,L,cf){var cc=1.5,ce=cc+1,co=L.plotX,cp=L.plotY,cg=cb[cf-1],cl=cb[cf+1],cj,ck,b9,ca,M;
if(cg&&cl){var ch=cg.plotX,ci=cg.plotY,cm=cl.plotX,cn=cl.plotY,cd;
cj=(cc*co+ch)/ce;
ck=(cc*cp+ci)/ce;
b9=(cc*co+cm)/ce;
ca=(cc*cp+cn)/ce;
cd=((ca-ck)*(b9-co))/(b9-cj)+cp-ca;
ck+=cd;
ca+=cd;
if(ck>ci&&ck>cp){ck=b4(ci,cp);
ca=2*cp-ck
}else{if(ck<ci&&ck<cp){ck=j(ci,cp);
ca=2*cp-ck
}}if(ca>cn&&ca>cp){ca=b4(cn,cp);
ck=2*cp-ca
}else{if(ca<cn&&ca<cp){ca=j(cn,cp);
ck=2*cp-ca
}}L.rightContX=b9;
L.rightContY=ca
}if(!cf){M=[A,co,cp]
}else{M=["C",cg.rightContX||cg.plotX,cg.rightContY||cg.plotY,cj||co,ck||cp,co,cp];
cg.rightContX=cg.rightContY=null
}return M
}});
G.spline=bQ;
b1.areaspline=bR(b1.area);
var ax=bU.prototype,b6=aB(bQ,{type:"areaspline",closedStacks:true,getSegmentPath:ax.getSegmentPath,closeSegment:ax.closeSegment,drawGraph:ax.drawGraph,drawLegendSymbol:a1.drawRectangle});
G.areaspline=b6;
b1.column=bR(ap,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:false,halo:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:false,tooltip:{distance:6},threshold:0});
var aS=aB(a2,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:true,init:function(){a2.prototype.init.apply(this,arguments);
var M=this,L=M.chart;
if(L.hasRendered){T(L.series,function(b9){if(b9.type===M.type){b9.isDirty=true
}})
}},getColumnMetrics:function(){var M=this,ck=M.options,cb=M.xAxis,cc=M.yAxis,L=cb.reversed,ca,b9={},cg,cf=0;
if(ck.grouping===false){cf=1
}else{T(M.chart.series,function(cq){var cp=cq.options,cr=cq.yAxis;
if(cq.type===M.type&&cq.visible&&cc.len===cr.len&&cc.pos===cr.pos){if(cp.stacking){ca=cq.stackKey;
if(b9[ca]===bg){b9[ca]=cf++
}cg=b9[ca]
}else{if(cp.grouping!==false){cg=cf++
}}cq.columnIndex=cg
}})
}var cd=j(a4(cb.transA)*(cb.ordinalSlope||ck.pointRange||cb.closestPointRange||cb.tickInterval||1),cb.len),ch=cd*ck.groupPadding,ci=cd-2*ch,cl=ci/cf,cj=ck.pointWidth,cm=V(cj)?(cl-cj)/2:cl*ck.pointPadding,cn=R(cj,cl-2*cm),ce=(L?cf-(M.columnIndex||0):M.columnIndex)||0,co=cm+(ch+ce*cl-(cd/2))*(L?-1:1);
return(M.columnMetrics={width:cn,offset:co})
},translate:function(){var ce=this,M=ce.chart,cb=ce.options,L=ce.borderWidth=R(cb.borderWidth,ce.activePointCount>0.5*ce.xAxis.len?0:1),cj=ce.yAxis,cg=cb.threshold,ch=ce.translatedThreshold=cj.getThreshold(cg),ca=R(cb.minPointLength,5),b9=ce.getColumnMetrics(),cc=b9.width,cf=ce.barW=Z(b4(cc,1+2*L)),cd=ce.pointXOffset=b9.offset,ci=-(L%2?0.5:0),ck=L%2?0.5:1;
if(M.renderer.isVML&&M.inverted){ck+=1
}a2.prototype.translate.apply(ce);
T(ce.points,function(ct){var cv=R(ct.yBottom,ch),cs=j(b4(-999-cv,ct.plotY),cj.len+999+cv),cn=ct.plotX+cd,cm=cf,co=j(cs,cv),cu,cp,cr,cq,cl=b4(cs,cv)-co;
if(a4(cl)<ca){if(ca){cl=ca;
co=c(a4(co-ch)>ca?cv-ca:ch-(cj.translate(ct.y,0,1,0,1)<=ch?ca:0))
}}ct.barX=cn;
ct.pointWidth=cc;
ct.tooltipPos=M.inverted?[cj.len-cs,ce.xAxis.len-cn-cm/2]:[cn+cm/2,cs];
cq=a4(cn)<0.5;
cu=c(cn+cm)+ci;
cn=c(cn)+ci;
cm=cu-cn;
cr=a4(co)<0.5;
cp=c(co+cl)+ck;
co=c(co)+ck;
cl=cp-co;
if(cq){cn+=1;
cm-=1
}if(cr){co-=1;
cl+=1
}ct.shapeType="rect";
ct.shapeArgs={x:cn,y:co,width:cm,height:cl}
})
},getSymbol:aj,drawLegendSymbol:a1.drawRectangle,drawGraph:aj,drawPoints:function(){var cd=this,b9=this.chart,ca=cd.options,cc=b9.renderer,L=ca.animationLimit||250,ce,cb,M;
T(cd.points,function(ch){var cg=ch.plotY,cf=ch.graphic;
if(cg!==bg&&!isNaN(cg)&&ch.y!==null){ce=ch.shapeArgs;
M=V(cd.borderWidth)?{"stroke-width":cd.borderWidth}:{};
cb=ch.pointAttr[ch.selected?aR:bu]||cd.pointAttr[bu];
if(cf){bJ(cf);
cf.attr(M)[b9.pointCount<L?"animate":"attr"](bR(ce))
}else{ch.graphic=cf=cc[ch.shapeType](ce).attr(cb).attr(M).add(cd.group).shadow(ca.shadow,null,ca.stacking&&!ca.borderRadius)
}}else{if(cf){ch.graphic=cf.destroy()
}}})
},animate:function(M){var cb=this,cd=this.yAxis,ca=cb.options,b9=this.chart.inverted,L={},cc;
if(K){if(M){L.scaleY=0.001;
cc=j(cd.pos+cd.len,b4(cd.pos,cd.toPixels(ca.threshold)));
if(b9){L.translateX=cc-cd.len
}else{L.translateY=cc
}cb.group.attr(L)
}else{L.scaleY=1;
L[b9?"translateX":"translateY"]=cd.pos;
cb.group.animate(L,cb.options.animation);
cb.animate=null
}}},remove:function(){var M=this,L=M.chart;
if(L.hasRendered){T(L.series,function(b9){if(b9.type===M.type){b9.isDirty=true
}})
}a2.prototype.remove.apply(M,arguments)
}});
G.column=aS;
b1.bar=bR(b1.column);
var ak=aB(aS,{type:"bar",inverted:true});
G.bar=ak;
b1.scatter=bR(ap,{lineWidth:0,tooltip:{headerFormat:'<span style="color:{series.color}">\u25CF</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"},stickyTracking:false});
var bl=aB(a2,{type:"scatter",sorted:false,requireSorting:false,noSharedTooltip:true,trackerGroups:["markerGroup"],takeOrdinalPosition:false,singularTooltips:true,drawGraph:function(){if(this.options.lineWidth){a2.prototype.drawGraph.call(this)
}}});
G.scatter=bl;
b1.pie=bR(ap,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:false,colorByPoint:true,dataLabels:{distance:30,enabled:true,formatter:function(){return this.point.name
}},ignoreHiddenPoint:true,legendType:"point",marker:null,size:null,showInLegend:false,slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}},stickyTracking:false,tooltip:{followPointer:true}});
var g=aB(aC,{init:function(){aC.prototype.init.apply(this,arguments);
var L=this,M;
if(L.y<0){L.y=null
}bb(L,{visible:L.visible!==false,name:R(L.name,"Slice")});
M=function(b9){L.slice(b9.type==="select")
};
bx(L,"select",M);
bx(L,"unselect",M);
return L
},setVisible:function(ca){var M=this,b9=M.series,L=b9.chart;
M.visible=M.options.visible=ca=ca===bg?!M.visible:ca;
b9.options.data[bZ(M,b9.data)]=M.options;
T(["graphic","dataLabel","connector","shadowGroup"],function(cb){if(M[cb]){M[cb][ca?"show":"hide"](true)
}});
if(M.legendItem){L.legend.colorizeItem(M,ca)
}if(!b9.isDirty&&b9.options.ignoreHiddenPoint){b9.isDirty=true;
L.redraw()
}},slice:function(cc,ca,L){var b9=this,cb=b9.series,M=cb.chart,cd;
aA(L,M);
ca=R(ca,true);
b9.sliced=b9.options.sliced=cc=V(cc)?cc:!b9.sliced;
cb.options.data[bZ(b9,cb.data)]=b9.options;
cd=cc?b9.slicedTranslation:{translateX:0,translateY:0};
b9.graphic.animate(cd);
if(b9.shadowGroup){b9.shadowGroup.animate(cd)
}},haloPath:function(b9){var M=this.shapeArgs,L=this.series.chart;
return this.series.chart.renderer.symbols.arc(L.plotLeft+M.x,L.plotTop+M.y,M.r+b9,M.r+b9,{innerR:this.shapeArgs.r,start:M.start,end:M.end})
}});
var aY={type:"pie",isCartesian:false,pointClass:g,requireSorting:false,noSharedTooltip:true,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:true,getColor:aj,animate:function(L){var b9=this,M=b9.points,ca=b9.startAngleRad;
if(!L){T(M,function(cd){var cc=cd.graphic,cb=cd.shapeArgs;
if(cc){cc.attr({r:b9.center[3]/2,start:ca,end:ca});
cc.animate({r:cb.r,start:cb.start,end:cb.end},b9.options.animation)
}});
b9.animate=null
}},setData:function(M,b9,L,ca){a2.prototype.setData.call(this,M,false,L,ca);
this.processData();
this.generatePoints();
if(R(b9,true)){this.chart.redraw(L)
}},generatePoints:function(){var L,cc=0,cb,b9,ca,M=this.options.ignoreHiddenPoint;
a2.prototype.generatePoints.call(this);
cb=this.points;
b9=cb.length;
for(L=0;
L<b9;
L++){ca=cb[L];
cc+=(M&&!ca.visible)?0:ca.y
}this.total=cc;
for(L=0;
L<b9;
L++){ca=cb[L];
ca.percentage=cc>0?(ca.y/cc)*100:0;
ca.total=cc
}},translate:function(ce){this.generatePoints();
var ci=this,cq=0,cf=1000,cb=ci.options,cj=cb.slicedOffset,cp=cj+cb.borderWidth,ck,cr,cn,cl=cb.startAngle||0,cm=ci.startAngleRad=y/180*(cl-90),cs=ci.endAngleRad=y/180*((R(cb.endAngle,cl+360))-90),co=cs-cm,cd=ci.points,cg,ch,b9=cb.dataLabels.distance,M=cb.ignoreHiddenPoint,L,ca=cd.length,cc;
if(!ce){ci.center=ce=ci.getCenter()
}ci.getX=function(cu,ct){cn=D.asin(j((cu-ce[1])/(ce[2]/2+b9),1));
return ce[0]+(ct?-1:1)*(a5(cn)*(ce[2]/2+b9))
};
for(L=0;
L<ca;
L++){cc=cd[L];
ck=cm+(cq*co);
if(!M||cc.visible){cq+=cc.percentage/100
}cr=cm+(cq*co);
cc.shapeType="arc";
cc.shapeArgs={x:ce[0],y:ce[1],r:ce[2]/2,innerR:ce[3]/2,start:c(ck*cf)/cf,end:c(cr*cf)/cf};
cn=(cr+ck)/2;
if(cn>1.5*y){cn-=2*y
}else{if(cn<-y/2){cn+=2*y
}}cc.slicedTranslation={translateX:c(a5(cn)*cj),translateY:c(a0(cn)*cj)};
cg=a5(cn)*ce[2]/2;
ch=a0(cn)*ce[2]/2;
cc.tooltipPos=[ce[0]+cg*0.7,ce[1]+ch*0.7];
cc.half=cn<-y/2||cn>y/2?1:0;
cc.angle=cn;
cp=j(cp,b9/2);
cc.labelPos=[ce[0]+cg+a5(cn)*b9,ce[1]+ch+a0(cn)*b9,ce[0]+cg+a5(cn)*cp,ce[1]+ch+a0(cn)*cp,ce[0]+cg,ce[1]+ch,b9<0?"center":cc.half?"right":"left",cn]
}},drawGraph:null,drawPoints:function(){var cb=this,L=cb.chart,ca=L.renderer,b9,M,cc=cb.options.shadow,cd,ce;
if(cc&&!cb.shadowGroup){cb.shadowGroup=ca.g("shadow").add(cb.group)
}T(cb.points,function(cf){M=cf.graphic;
ce=cf.shapeArgs;
cd=cf.shadowGroup;
if(cc&&!cd){cd=cf.shadowGroup=ca.g("shadow").add(cb.shadowGroup)
}b9=cf.sliced?cf.slicedTranslation:{translateX:0,translateY:0};
if(cd){cd.attr(b9)
}if(M){M.animate(bb(ce,b9))
}else{cf.graphic=M=ca[cf.shapeType](ce).setRadialReference(cb.center).attr(cf.pointAttr[cf.selected?aR:bu]).attr({"stroke-linejoin":"round"}).attr(b9).add(cb.group).shadow(cc,cd)
}if(cf.visible!==undefined){cf.setVisible(cf.visible)
}})
},sortByAngle:function(L,M){L.sort(function(b9,ca){return b9.angle!==undefined&&(ca.angle-b9.angle)*M
})
},drawLegendSymbol:a1.drawRectangle,getCenter:aw.getCenter,getSymbol:aj};
aY=aB(a2,aY);
G.pie=aY;
a2.prototype.drawDataLabels=function(){var ca=this,cb=ca.options,cd=cb.cursor,L=cb.dataLabels,b9=ca.points,M,cf,cc,ce;
if(L.enabled||ca._hasPointLabels){if(ca.dlProcessOptions){ca.dlProcessOptions(L)
}ce=ca.plotGroup("dataLabelsGroup","data-labels",F,L.zIndex||6);
if(!ca.hasRendered&&R(L.defer,true)){ce.attr({opacity:0});
bx(ca,"afterAnimate",function(){ca.dataLabelsGroup.show()[cb.animation?"animate":"attr"]({opacity:1},{duration:200})
})
}cf=L;
T(b9,function(cn){var cj,ci=cn.dataLabel,cl,cg,cm,co,ch=cn.connector,ck=true;
M=cn.options&&cn.options.dataLabels;
cj=R(M&&M.enabled,cf.enabled);
if(ci&&!cj){cn.dataLabel=ci.destroy()
}else{if(cj){L=bR(cf,M);
co=L.rotation;
cl=cn.getLabelConfig();
cc=L.format?ay(L.format,cl):L.formatter.call(cl,L);
L.style.color=R(L.color,L.style.color,ca.color,"black");
if(ci){if(V(cc)){ci.attr({text:cc});
ck=false
}else{cn.dataLabel=ci=ci.destroy();
if(ch){cn.connector=ch.destroy()
}}}else{if(V(cc)){cg={fill:L.backgroundColor,stroke:L.borderColor,"stroke-width":L.borderWidth,r:L.borderRadius||0,rotation:co,padding:L.padding,zIndex:1};
for(cm in cg){if(cg[cm]===bg){delete cg[cm]
}}ci=cn.dataLabel=ca.chart.renderer[co?"text":"label"](cc,0,-999,null,null,null,L.useHTML).attr(cg).css(bb(L.style,cd&&{cursor:cd})).add(ce).shadow(L.shadow)
}}if(ci){ca.alignDataLabel(cn,ci,L,null,ck)
}}}})
}};
a2.prototype.alignDataLabel=function(ch,cb,ce,M,cd){var ca=this.chart,cc=ca.inverted,cf=R(ch.plotX,-999),cg=R(ch.plotY,-999),b9=cb.getBBox(),ci=this.visible&&(ch.series.forceDL||ca.isInsidePlot(cf,c(cg),cc)||(M&&ca.isInsidePlot(cf,cc?M.x+1:M.y+M.height-1,cc))),L;
if(ci){M=bb({x:cc?ca.plotWidth-cg:cf,y:c(cc?ca.plotHeight-cf:cg),width:0,height:0},M);
bb(ce,{width:b9.width,height:b9.height});
if(ce.rotation){L={align:ce.align,x:M.x+ce.x+M.width/2,y:M.y+ce.y+M.height/2};
cb[cd?"attr":"animate"](L)
}else{cb.align(ce,null,M);
L=cb.alignAttr;
if(R(ce.overflow,"justify")==="justify"){this.justifyDataLabel(cb,ce,L,b9,M,cd)
}else{if(R(ce.crop,true)){ci=ca.isInsidePlot(L.x,L.y)&&ca.isInsidePlot(L.x+b9.width,L.y+b9.height)
}}}}if(!ci){cb.attr({y:-999});
cb.placed=false
}};
a2.prototype.justifyDataLabel=function(ch,ca,cd,cf,ce,L){var cg=this.chart,cc=ca.align,cb=ca.verticalAlign,b9,M;
b9=cd.x;
if(b9<0){if(cc==="right"){ca.align="left"
}else{ca.x=-b9
}M=true
}b9=cd.x+cf.width;
if(b9>cg.plotWidth){if(cc==="left"){ca.align="right"
}else{ca.x=cg.plotWidth-b9
}M=true
}b9=cd.y;
if(b9<0){if(cb==="bottom"){ca.verticalAlign="top"
}else{ca.y=-b9
}M=true
}b9=cd.y+cf.height;
if(b9>cg.plotHeight){if(cb==="top"){ca.verticalAlign="bottom"
}else{ca.y=cg.plotHeight-b9
}M=true
}if(M){ch.placed=!L;
ch.align(ca,null,ce)
}};
if(G.pie){G.pie.prototype.drawDataLabels=function(){var cI=this,ce=cI.data,cv,cJ=cI.chart,cq=cI.options.dataLabels,cF=R(cq.connectorPadding,10),cu=R(cq.connectorWidth,1),cG=cJ.plotWidth,cd=cJ.plotHeight,cM,cw,cz=R(cq.softConnector,true),cf=cq.distance,cA=cI.center,cy=cA[2]/2,cE=cA[1],cB=cf>0,cb,cg,cm,cl,ci=[[],[]],cL,cK,cc,ck,L,co,b9=[0,0,0,0],cC=function(cN,cO){return cO.y-cN.y
};
if(!cI.visible||(!cq.enabled&&!cI._hasPointLabels)){return
}a2.prototype.drawDataLabels.apply(cI);
T(ce,function(cN){if(cN.dataLabel&&cN.visible){ci[cN.half].push(cN)
}});
L=0;
while(!cl&&ce[L]){cl=ce[L]&&ce[L].dataLabel&&(ce[L].dataLabel.getBBox().height||21);
L++
}L=2;
while(L--){var cj=[],cD,ch=[],ca=ci[L],cn,cx=ca.length,cH;
cI.sortByAngle(ca,L-0.5);
if(cf>0){for(cn=cE-cy-cf;
cn<=cE+cy+cf;
cn+=cl){cj.push(cn)
}cD=cj.length;
if(cx>cD){ck=[].concat(ca);
ck.sort(cC);
co=cx;
while(co--){ck[co].rank=co
}co=cx;
while(co--){if(ca[co].rank>=cD){ca.splice(co,1)
}}cx=ca.length
}for(co=0;
co<cx;
co++){cv=ca[co];
cm=cv.labelPos;
var M=9999,cs,ct;
for(ct=0;
ct<cD;
ct++){cs=a4(cj[ct]-cm[1]);
if(cs<M){M=cs;
cH=ct
}}if(cH<co&&cj[co]!==null){cH=co
}else{if(cD<cx-co+cH&&cj[co]!==null){cH=cD-cx+co;
while(cj[cH]===null){cH++
}}else{while(cj[cH]===null){cH++
}}}ch.push({i:cH,y:cj[cH]});
cj[cH]=null
}ch.sort(cC)
}for(co=0;
co<cx;
co++){var cr,cp;
cv=ca[co];
cm=cv.labelPos;
cb=cv.dataLabel;
cc=cv.visible===false?F:m;
cp=cm[1];
if(cf>0){cr=ch.pop();
cH=cr.i;
cK=cr.y;
if((cp>cK&&cj[cH+1]!==null)||(cp<cK&&cj[cH-1]!==null)){cK=cp
}}else{cK=cp
}cL=cq.justify?cA[0]+(L?-1:1)*(cy+cf):cI.getX(cH===0||cH===cj.length-1?cp:cK,L);
cb._attr={visibility:cc,align:cm[6]};
cb._pos={x:cL+cq.x+({left:cF,right:-cF}[cm[6]]||0),y:cK+cq.y-10};
cb.connX=cL;
cb.connY=cK;
if(this.options.size===null){cg=cb.width;
if(cL-cg<cF){b9[3]=b4(c(cg-cL+cF),b9[3])
}else{if(cL+cg>cG-cF){b9[1]=b4(c(cL+cg-cG+cF),b9[1])
}}if(cK-cl/2<0){b9[0]=b4(c(-cK+cl/2),b9[0])
}else{if(cK+cl/2>cd){b9[2]=b4(c(cK+cl/2-cd),b9[2])
}}}}}if(bn(b9)===0||this.verifyDataLabelOverflow(b9)){this.placeDataLabels();
if(cB&&cu){T(this.points,function(cN){cM=cN.connector;
cm=cN.labelPos;
cb=cN.dataLabel;
if(cb&&cb._pos){cc=cb._attr.visibility;
cL=cb.connX;
cK=cb.connY;
cw=cz?[A,cL+(cm[6]==="left"?5:-5),cK,"C",cL,cK,2*cm[2]-cm[4],2*cm[3]-cm[5],cm[2],cm[3],e,cm[4],cm[5]]:[A,cL+(cm[6]==="left"?5:-5),cK,e,cm[2],cm[3],e,cm[4],cm[5]];
if(cM){cM.animate({d:cw});
cM.attr("visibility",cc)
}else{cN.connector=cM=cI.chart.renderer.path(cw).attr({"stroke-width":cu,stroke:cq.connectorColor||cN.color||"#606060",visibility:cc}).add(cI.dataLabelsGroup)
}}else{if(cM){cN.connector=cM.destroy()
}}})
}}};
G.pie.prototype.placeDataLabels=function(){T(this.points,function(b9){var M=b9.dataLabel,L;
if(M){L=M._pos;
if(L){M.attr(M._attr);
M[M.moved?"animate":"attr"](L);
M.moved=true
}else{if(M){M.attr({y:-999})
}}}})
};
G.pie.prototype.alignDataLabel=aj;
G.pie.prototype.verifyDataLabelOverflow=function(cc){var L=this.center,cb=this.options,M=cb.center,b9=cb.minSize||80,ca=b9,cd;
if(M[0]!==null){ca=b4(L[2]-b4(cc[1],cc[3]),b9)
}else{ca=b4(L[2]-cc[1]-cc[3],b9);
L[0]+=(cc[3]-cc[1])/2
}if(M[1]!==null){ca=b4(j(ca,L[2]-b4(cc[0],cc[2])),b9)
}else{ca=b4(j(ca,L[2]-cc[0]-cc[2]),b9);
L[1]+=(cc[0]-cc[2])/2
}if(ca<L[2]){L[2]=ca;
this.translate(L);
T(this.points,function(ce){if(ce.dataLabel){ce.dataLabel._pos=null
}});
if(this.drawDataLabels){this.drawDataLabels()
}}else{cd=true
}return cd
}
}if(G.column){G.column.prototype.alignDataLabel=function(ca,ce,b9,cb,M){var cd=this.chart,L=cd.inverted,cf=ca.dlBox||ca.shapeArgs,cc=ca.below||(ca.plotY>R(this.translatedThreshold,cd.plotSizeY)),cg=R(b9.inside,!!this.options.stacking);
if(cf){cb=bR(cf);
if(L){cb={x:cd.plotWidth-cb.y-cb.height,y:cd.plotHeight-cb.x-cb.width,width:cb.height,height:cb.width}
}if(!cg){if(L){cb.x+=cc?0:cb.width;
cb.width=0
}else{cb.y+=cc?cb.height:0;
cb.height=0
}}}b9.align=R(b9.align,!L||cg?"center":cc?"right":"left");
b9.verticalAlign=R(b9.verticalAlign,L||cg?"middle":cc?"top":"bottom");
a2.prototype.alignDataLabel.call(this,ca,ce,b9,cb,M)
}
}var B=U.TrackerMixin={drawTrackerPoint:function(){var cc=this,L=cc.chart,cb=L.pointer,b9=cc.options.cursor,M=b9&&{cursor:b9},ca=function(cd){var cf=cd.target,ce;
if(L.hoverSeries!==cc){cc.onMouseOver()
}while(cf&&!ce){ce=cf.point;
cf=cf.parentNode
}if(ce!==bg&&ce!==L.hoverPoint){ce.onMouseOver(cd)
}};
T(cc.points,function(cd){if(cd.graphic){cd.graphic.element.point=cd
}if(cd.dataLabel){cd.dataLabel.element.point=cd
}});
if(!cc._hasTracking){T(cc.trackerGroups,function(cd){if(cc[cd]){cc[cd].addClass(Y+"tracker").on("mouseover",ca).on("mouseout",function(ce){cb.onTrackerMouseOut(ce)
}).css(M);
if(bF){cc[cd].on("touchstart",ca)
}}});
cc._hasTracking=true
}},drawTrackerGraph:function(){var cj=this,cg=cj.options,cn=cg.trackByArea,b9=[].concat(cn?cj.areaPath:cj.graphPath),ca=b9.length,cb=cj.chart,ch=cb.pointer,ci=cb.renderer,cm=cb.options.tooltip.snap,L=cj.tracker,cd=cg.cursor,cc=cd&&{cursor:cd},cl=cj.singlePoints,ck,ce,cf=function(){if(cb.hoverSeries!==cj){cj.onMouseOver()
}},M="rgba(192,192,192,"+(K?0.0001:0.002)+")";
if(ca&&!cn){ce=ca+1;
while(ce--){if(b9[ce]===A){b9.splice(ce+1,0,b9[ce+1]-cm,b9[ce+2],e)
}if((ce&&b9[ce]===A)||ce===ca){b9.splice(ce,0,e,b9[ce-2]+cm,b9[ce-1])
}}}for(ce=0;
ce<cl.length;
ce++){ck=cl[ce];
b9.push(A,ck.plotX-cm,ck.plotY,e,ck.plotX+cm,ck.plotY)
}if(L){L.attr({d:b9})
}else{cj.tracker=ci.path(b9).attr({"stroke-linejoin":"round",visibility:cj.visible?m:F,stroke:M,fill:cn?M:aP,"stroke-width":cg.lineWidth+(cn?0:2*cm),zIndex:2}).add(cj.group);
T([cj.tracker,cj.markerGroup],function(co){co.addClass(Y+"tracker").on("mouseover",cf).on("mouseout",function(cp){ch.onTrackerMouseOut(cp)
}).css(cc);
if(bF){co.on("touchstart",cf)
}})
}}};
if(G.column){aS.prototype.drawTracker=B.drawTrackerPoint
}if(G.pie){G.pie.prototype.drawTracker=B.drawTrackerPoint
}if(G.scatter){bl.prototype.drawTracker=B.drawTrackerPoint
}bb(bz.prototype,{setItemEvents:function(L,cb,cc,b9,M){var ca=this;
(cc?cb:L.legendGroup).on("mouseover",function(){L.setState(i);
cb.css(ca.options.itemHoverStyle)
}).on("mouseout",function(){cb.css(L.visible?b9:M);
L.setState()
}).on("click",function(cd){var cf="legendItemClick",ce=function(){L.setVisible()
};
cd={browserEvent:cd};
if(L.firePointEvent){L.firePointEvent(cf,cd,ce)
}else{x(L,cf,cd,ce)
}})
},createCheckboxForItem:function(L){var M=this;
L.checkbox=a9("input",{type:"checkbox",checked:L.selected,defaultChecked:L.selected},M.options.itemCheckboxStyle,M.chart.container);
bx(L.checkbox,"click",function(b9){var ca=b9.target;
x(L,"checkboxClick",{checked:ca.checked},function(){L.select()
})
})
}});
bs.legend.itemStyle.cursor="pointer";
bb(bH.prototype,{showResetZoom:function(){var b9=this,ca=bs.lang,M=b9.options.chart.resetZoomButton,cc=M.theme,cb=cc.states,L=M.relativeTo==="chart"?null:"plotBox";
this.resetZoomButton=b9.renderer.button(ca.resetZoom,null,null,function(){b9.zoomOut()
},cc,cb&&cb.hover).attr({align:M.position.align,title:ca.resetZoomTitle}).add().align(M.position,false,L)
},zoomOut:function(){var L=this;
x(L,"selection",{resetSelection:true},function(){L.zoom()
})
},zoom:function(b9){var L=this,ca,cb=L.pointer,M=false,cc;
if(!b9||b9.resetSelection){T(L.axes,function(cd){ca=cd.zoom()
})
}else{T(b9.xAxis.concat(b9.yAxis),function(ce){var cd=ce.axis,cf=cd.isXAxis;
if(cb[cf?"zoomX":"zoomY"]||cb[cf?"pinchX":"pinchY"]){ca=cd.zoom(ce.min,ce.max);
if(cd.displayBtn){M=true
}}})
}cc=L.resetZoomButton;
if(M&&!cc){L.showResetZoom()
}else{if(!M&&bI(cc)){L.resetZoomButton=cc.destroy()
}}if(ca){L.redraw(R(L.options.chart.animation,b9&&b9.animation,L.pointCount<100))
}},pan:function(M,ca){var cb=this,b9=cb.hoverPoints,L;
if(b9){T(b9,function(cc){cc.setState()
})
}T(ca==="xy"?[1,0]:[1],function(cf){var cg=M[cf?"chartX":"chartY"],cc=cb[cf?"xAxis":"yAxis"][0],cj=cb[cf?"mouseDownX":"mouseDownY"],ce=(cc.pointRange||0)/2,cd=cc.getExtremes(),ci=cc.toValue(cj-cg,true)+ce,ch=cc.toValue(cj+cb[cf?"plotWidth":"plotHeight"]-cg,true)-ce;
if(cc.series.length&&ci>j(cd.dataMin,cd.min)&&ch<b4(cd.dataMax,cd.max)){cc.setExtremes(ci,ch,false,false,{trigger:"pan"});
L=true
}cb[cf?"mouseDownX":"mouseDownY"]=cg
});
if(L){cb.redraw(false)
}bO(cb.container,{cursor:"move"})
}});
bb(aC.prototype,{select:function(b9,cb){var M=this,ca=M.series,L=ca.chart;
b9=R(b9,!M.selected);
M.firePointEvent(b9?"select":"unselect",{accumulate:cb},function(){M.selected=M.options.selected=b9;
ca.options.data[bZ(M,ca.data)]=M.options;
M.setState(b9&&aR);
if(!cb){T(L.getSelectedPoints(),function(cc){if(cc.selected&&cc!==M){cc.selected=cc.options.selected=false;
ca.options.data[bZ(cc,ca.data)]=cc.options;
cc.setState(bu);
cc.firePointEvent("unselect")
}})
}})
},onMouseOver:function(M){var ca=this,cb=ca.series,L=cb.chart,cc=L.tooltip,b9=L.hoverPoint;
if(b9&&b9!==ca){b9.onMouseOut()
}ca.firePointEvent("mouseOver");
if(cc&&(!cc.shared||cb.noSharedTooltip)){cc.refresh(ca,M)
}ca.setState(i);
L.hoverPoint=ca
},onMouseOut:function(){var L=this.series.chart,M=L.hoverPoints;
if(!M||bZ(this,M)===-1){this.firePointEvent("mouseOut");
this.setState();
L.hoverPoint=null
}},importEvents:function(){if(!this.hasImportedEvents){var ca=this,b9=bR(ca.series.options.point,ca.options),L=b9.events,M;
ca.events=L;
for(M in L){bx(ca,M,L[M])
}this.hasImportedEvents=true
}},setState:function(b9,ci){var cn=this,cl=cn.plotX,cm=cn.plotY,M=cn.series,cc=M.options.states,cg=b1[M.type].marker&&M.options.marker,ck=cg&&!cg.enabled,ch=cg&&cg.states[b9],ca=ch&&ch.enabled===false,cb=M.stateMarkerGraphic,cp=cn.marker||{},cd=M.chart,L,ce=M.halo,cf,cj,co;
b9=b9||bu;
co=cn.pointAttr[b9]||M.pointAttr[b9];
if((b9===cn.state&&!ci)||(cn.selected&&b9!==aR)||(cc[b9]&&cc[b9].enabled===false)||(b9&&(ca||(ck&&ch.enabled===false)))||(b9&&cp.states&&cp.states[b9]&&cp.states[b9].enabled===false)){return
}if(cn.graphic){L=cg&&cn.graphic.symbolName&&co.r;
cn.graphic.attr(bR(co,L?{x:cl-L,y:cm-L,width:2*L,height:2*L}:{}));
if(cb){cb.hide()
}}else{if(b9&&ch){L=ch.radius;
cj=cp.symbol||M.symbol;
if(cb&&cb.currentSymbol!==cj){cb=cb.destroy()
}if(!cb){if(cj){M.stateMarkerGraphic=cb=cd.renderer.symbol(cj,cl-L,cm-L,2*L,2*L).attr(co).add(M.markerGroup);
cb.currentSymbol=cj
}}else{cb[ci?"animate":"attr"]({x:cl-L,y:cm-L})
}}if(cb){cb[b9&&cd.isInsidePlot(cl,cm,cd.inverted)?"show":"hide"]()
}}cf=cc[b9]&&cc[b9].halo;
if(cf&&cf.size){if(!ce){M.halo=ce=cd.renderer.path().add(M.seriesGroup)
}ce.attr(bb({fill:o(cn.color||M.color).setOpacity(cf.opacity).get()},cf.attributes))[ci?"animate":"attr"]({d:cn.haloPath(cf.size)})
}else{if(ce){ce.attr({d:[]})
}}cn.state=b9
},haloPath:function(ca){var b9=this.series,cb=b9.chart,M=b9.getPlotBox(),L=cb.inverted;
return cb.renderer.symbols.circle(M.translateX+(L?b9.yAxis.len-this.plotY:this.plotX)-ca,M.translateY+(L?b9.xAxis.len-this.plotX:this.plotY)-ca,ca*2,ca*2)
}});
bb(a2.prototype,{onMouseOver:function(){var b9=this,L=b9.chart,M=L.hoverSeries;
if(M&&M!==b9){M.onMouseOut()
}if(b9.options.events.mouseOver){x(b9,"mouseOver")
}b9.setState(i);
L.hoverSeries=b9
},onMouseOut:function(){var b9=this,M=b9.options,cb=b9.chart,ca=cb.tooltip,L=cb.hoverPoint;
if(L){L.onMouseOut()
}if(b9&&M.events.mouseOut){x(b9,"mouseOut")
}if(ca&&!M.stickyTracking&&(!ca.shared||b9.noSharedTooltip)){ca.hide()
}b9.setState();
cb.hoverSeries=null
},setState:function(cd){var cc=this,cb=cc.options,M=cc.graph,b9=cc.graphNeg,ce=cb.states,ca=cb.lineWidth,L;
cd=cd||bu;
if(cc.state!==cd){cc.state=cd;
if(ce[cd]&&ce[cd].enabled===false){return
}if(cd){ca=ce[cd].lineWidth||ca+1
}if(M&&!M.dashstyle){L={"stroke-width":ca};
M.attr(L);
if(b9){b9.attr(L)
}}}},setVisible:function(ce,cb){var cc=this,L=cc.chart,b9=cc.legendItem,cd,M=L.options.chart.ignoreHiddenSeries,ca=cc.visible;
cc.visible=ce=cc.userOptions.visible=ce===bg?!ca:ce;
cd=ce?"show":"hide";
T(["group","dataLabelsGroup","markerGroup","tracker"],function(cf){if(cc[cf]){cc[cf][cd]()
}});
if(L.hoverSeries===cc){cc.onMouseOut()
}if(b9){L.legend.colorizeItem(cc,ce)
}cc.isDirty=true;
if(cc.options.stacking){T(L.series,function(cf){if(cf.options.stacking&&cf.visible){cf.isDirty=true
}})
}T(cc.linkedSeries,function(cf){cf.setVisible(ce,false)
});
if(M){L.isDirtyBox=true
}if(cb!==false){L.redraw()
}x(cc,cd)
},setTooltipPoints:function(cg){var ch=this,cd=[],ce,ca,M,cj=ch.xAxis,ck=cj&&cj.getExtremes(),L=cj?(cj.tooltipLen||cj.len):ch.chart.plotSizeX,cc,cf,cb,b9,ci=[];
if(ch.options.enableMouseTracking===false||ch.singularTooltips){return
}if(cg){ch.tooltipPoints=null
}T(ch.segments||ch.points,function(cl){cd=cd.concat(cl)
});
if(cj&&cj.reversed){cd=cd.reverse()
}if(ch.orderTooltipPoints){ch.orderTooltipPoints(cd)
}ce=cd.length;
for(b9=0;
b9<ce;
b9++){cc=cd[b9];
cf=cc.x;
if(cf>=ck.min&&cf<=ck.max){cb=cd[b9+1];
ca=M===bg?0:M+1;
M=cd[b9+1]?j(b4(0,I((cc.clientX+(cb?(cb.wrappedClientX||cb.clientX):L))/2)),L):L;
while(ca>=0&&ca<=M){ci[ca++]=cc
}}}ch.tooltipPoints=ci
},show:function(){this.setVisible(true)
},hide:function(){this.setVisible(false)
},select:function(L){var M=this;
M.selected=L=(L===bg)?!M.selected:L;
if(M.checkbox){M.checkbox.checked=L
}x(M,L?"select":"unselect")
},drawTracker:B.drawTrackerGraph});
bb(U,{Axis:ba,Chart:bH,Color:o,Point:aC,Tick:bY,Renderer:bp,Series:a2,SVGElement:aa,SVGRenderer:ao,arrayMin:z,arrayMax:bn,charts:l,dateFormat:aV,format:ay,pathAnim:aJ,getOptions:b5,hasBidiBug:bA,isTouchDevice:p,numberFormat:at,seriesTypes:G,setOptions:bm,addEvent:bx,removeEvent:b,createElement:a9,discardElement:X,css:bO,each:T,extend:bb,map:a7,merge:bR,pick:R,splat:bK,extendClass:aB,pInt:a6,wrap:b7,svg:K,canvas:aQ,vml:!K&&!aQ,product:u,version:an})
}());