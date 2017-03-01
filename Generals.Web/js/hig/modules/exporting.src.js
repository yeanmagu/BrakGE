(function(e){var v=e.Chart,t=e.addEvent,p=e.removeEvent,w=e.createElement,z=e.discardElement,x=e.css,k=e.merge,b=e.each,d=e.extend,j=Math,i=j.max,a=document,s=window,g=e.isTouchDevice,h="M",f="L",A="div",c="hidden",m="none",l="highcharts-",r="absolute",n="px",q,o=e.Renderer.prototype.symbols,y=e.getOptions(),u;
d(y.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});
y.navigation={menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:m,color:"#303030",fontSize:g?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}};
y.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:l+"contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()
}},{separator:true},{textKey:"downloadPNG",onclick:function(){this.exportChart()
}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})
}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})
}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})
}}]}}};
e.post=function(F,B,D){var E,C;
C=w("form",k({method:"post",action:F,enctype:"multipart/form-data"},D),{display:m},a.body);
for(E in B){w("input",{type:c,name:E,value:B[E]},null,C)
}C.submit();
z(C)
};
d(v.prototype,{getSVG:function(B){var C=this,D,H,L,I,K,J,F,E,G=k(C.options,B);
if(!a.createElementNS){a.createElementNS=function(M,N){return a.createElement(N)
}
}H=w(A,null,{position:r,top:"-9999em",width:C.chartWidth+n,height:C.chartHeight+n},a.body);
F=C.renderTo.style.width;
E=C.renderTo.style.height;
K=G.exporting.sourceWidth||G.chart.width||(/px$/.test(F)&&parseInt(F,10))||600;
J=G.exporting.sourceHeight||G.chart.height||(/px$/.test(E)&&parseInt(E,10))||400;
d(G.chart,{animation:false,renderTo:H,forExport:true,width:K,height:J});
G.exporting.enabled=false;
G.series=[];
b(C.series,function(M){I=k(M.options,{animation:false,showCheckbox:false,visible:M.visible});
if(!I.isInternal){G.series.push(I)
}});
D=new e.Chart(G,C.callback);
b(["xAxis","yAxis"],function(M){b(C[M],function(N,Q){var O=D[M][Q],P=N.getExtremes(),S=P.userMin,R=P.userMax;
if(O&&(S!==q||R!==q)){O.setExtremes(S,R,true,false)
}})
});
L=D.container.innerHTML;
G=null;
D.destroy();
z(H);
L=L.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/&nbsp;/g,"\u00A0").replace(/&shy;/g,"\u00AD").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(M){return M.toLowerCase()
});
L=L.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'");
return L
},exportChart:function(E,D){E=E||{};
var B=this,C=B.options.exporting,F=B.getSVG(k({chart:{borderRadius:0}},C.chartOptions,D,{exporting:{sourceWidth:E.sourceWidth||C.sourceWidth,sourceHeight:E.sourceHeight||C.sourceHeight}}));
E=k(B.options.exporting,E);
e.post(E.url,{filename:E.filename||"chart",type:E.type,width:E.width||0,scale:E.scale||2,svg:F},E.formAttributes)
},print:function(){var C=this,E=C.container,F=[],G=E.parentNode,B=a.body,D=B.childNodes;
if(C.isPrinting){return
}C.isPrinting=true;
b(D,function(I,H){if(I.nodeType===1){F[H]=I.style.display;
I.style.display=m
}});
B.appendChild(E);
s.focus();
s.print();
setTimeout(function(){G.appendChild(E);
b(D,function(I,H){if(I.nodeType===1){I.style.display=F[H]
}});
C.isPrinting=false
},1000)
},contextMenu:function(H,N,U,V,T,J,C){var E=this,S=E.options.navigation,P=S.menuItemStyle,G=E.chartWidth,F=E.chartHeight,D="cache-"+H,O=E[D],Q=i(T,J),B="3px 3px 10px #888",M,K,L,R,I=function(W){if(!E.pointer.inClass(W.target,H)){K()
}};
if(!O){E[D]=O=w(A,{className:H},{position:r,zIndex:1000,padding:Q+n},E.container);
M=w(A,null,d({MozBoxShadow:B,WebkitBoxShadow:B,boxShadow:B},S.menuStyle),O);
K=function(){x(O,{display:m});
if(C){C.setState(0)
}E.openMenu=false
};
t(O,"mouseleave",function(){L=setTimeout(K,500)
});
t(O,"mouseenter",function(){clearTimeout(L)
});
t(document,"mouseup",I);
t(E,"destroy",function(){p(document,"mouseup",I)
});
b(N,function(X){if(X){var W=X.separator?w("hr",null,null,M):w(A,{onmouseover:function(){x(this,S.menuItemHoverStyle)
},onmouseout:function(){x(this,P)
},onclick:function(){K();
X.onclick.apply(E,arguments)
},innerHTML:X.text||E.options.lang[X.textKey]},d({cursor:"pointer"},P),M);
E.exportDivElements.push(W)
}});
E.exportDivElements.push(M,O);
E.exportMenuWidth=O.offsetWidth;
E.exportMenuHeight=O.offsetHeight
}R={display:"block"};
if(U+E.exportMenuWidth>G){R.right=(G-U-T-Q)+n
}else{R.left=(U-Q)+n
}if(V+J+E.exportMenuHeight>F&&C.alignOptions.verticalAlign!=="top"){R.bottom=(F-V-Q)+n
}else{R.top=(V+J-Q)+n
}x(O,R);
E.openMenu=true
},addButton:function(J){var F=this,K=F.renderer,C=k(F.options.navigation.buttonOptions,J),I=C.onclick,H=C.menuItems,N,D,O={stroke:C.symbolStroke,fill:C.symbolFill},P=C.symbolSize||12;
if(!F.btnCount){F.btnCount=0
}if(!F.exportDivElements){F.exportDivElements=[];
F.exportSVGElements=[]
}if(C.enabled===false){return
}var B=C.theme,M=B.states,G=M&&M.hover,L=M&&M.select,E;
delete B.states;
if(I){E=function(){I.apply(F,arguments)
}
}else{if(H){E=function(){F.contextMenu(D.menuClassName,H,D.translateX,D.translateY,D.width,D.height,D);
D.setState(2)
}
}}if(C.text&&C.symbol){B.paddingLeft=e.pick(B.paddingLeft,25)
}else{if(!C.text){d(B,{width:C.width,height:C.height,padding:0})
}}D=K.button(C.text,0,0,E,B,G,L).attr({title:F.options.lang[C._titleKey],"stroke-linecap":"round"});
D.menuClassName=J.menuClassName||l+"menu-"+F.btnCount++;
if(C.symbol){N=K.symbol(C.symbol,C.symbolX-(P/2),C.symbolY-(P/2),P,P).attr(d(O,{"stroke-width":C.symbolStrokeWidth||1,zIndex:1})).add(D)
}D.add().align(d(C,{width:D.width,x:e.pick(C.x,u)}),true,"spacingBox");
u+=(D.width+C.buttonSpacing)*(C.align==="right"?-1:1);
F.exportSVGElements.push(D,N)
},destroyExport:function(C){var B=C.target,E,D;
for(E=0;
E<B.exportSVGElements.length;
E++){D=B.exportSVGElements[E];
if(D){D.onclick=D.ontouchstart=null;
B.exportSVGElements[E]=D.destroy()
}}for(E=0;
E<B.exportDivElements.length;
E++){D=B.exportDivElements[E];
p(D,"mouseleave");
B.exportDivElements[E]=D.onmouseout=D.onmouseover=D.ontouchstart=D.onclick=null;
z(D)
}}});
o.menu=function(E,F,D,C){var B=[h,E,F+2.5,f,E+D,F+2.5,h,E,F+C/2+0.5,f,E+D,F+C/2+0.5,h,E,F+C-1.5,f,E+D,F+C-1.5];
return B
};
v.prototype.callbacks.push(function(C){var E,D=C.options.exporting,B=D.buttons;
u=0;
if(D.enabled!==false){for(E in B){C.addButton(B[E])
}t(C,"destroy",C.destroyExport)
}})
}(Highcharts));