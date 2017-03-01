(function(n){var d=n.Chart,m=n.addEvent,e=n.removeEvent,w=n.createElement,x=n.discardElement,b=n.css,u=n.merge,i=n.each,a=n.extend,G=Math.max,q=document,g=window,h=n.isTouchDevice,H=n.Renderer.prototype.symbols,z=n.getOptions(),c;
a(z.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});
z.navigation={menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:"none",color:"#303030",fontSize:h?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}};
z.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()
}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()
}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})
}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})
}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})
}}]}}};
n.post=function(j,f,l){var k,j=w("form",u({method:"post",action:j,enctype:"multipart/form-data"},l),{display:"none"},q.body);
for(k in f){w("input",{type:"hidden",name:k,value:f[k]},null,j)
}j.submit();
x(j)
};
a(d.prototype,{getSVG:function(j){var f=this,l,k,r,p,o=u(f.options,j);
if(!q.createElementNS){q.createElementNS=function(s,t){return q.createElement(t)
}
}j=w("div",null,{position:"absolute",top:"-9999em",width:f.chartWidth+"px",height:f.chartHeight+"px"},q.body);
k=f.renderTo.style.width;
p=f.renderTo.style.height;
k=o.exporting.sourceWidth||o.chart.width||/px$/.test(k)&&parseInt(k,10)||600;
p=o.exporting.sourceHeight||o.chart.height||/px$/.test(p)&&parseInt(p,10)||400;
a(o.chart,{animation:!1,renderTo:j,forExport:!0,width:k,height:p});
o.exporting.enabled=!1;
o.series=[];
i(f.series,function(s){r=u(s.options,{animation:!1,showCheckbox:!1,visible:s.visible});
r.isInternal||o.series.push(r)
});
l=new n.Chart(o,f.callback);
i(["xAxis","yAxis"],function(s){i(f[s],function(v,y){var B=l[s][y],A=v.getExtremes(),t=A.userMin,A=A.userMax;
B&&(t!==void 0||A!==void 0)&&B.setExtremes(t,A,!0,!1)
})
});
k=l.container.innerHTML;
o=null;
l.destroy();
x(j);
k=k.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/&nbsp;/g," ").replace(/&shy;/g,"­").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(s){return s.toLowerCase()
});
return k=k.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'")
},exportChart:function(j,f){var j=j||{},k=this.options.exporting,k=this.getSVG(u({chart:{borderRadius:0}},k.chartOptions,f,{exporting:{sourceWidth:j.sourceWidth||k.sourceWidth,sourceHeight:j.sourceHeight||k.sourceHeight}})),j=u(this.options.exporting,j);
n.post(j.url,{filename:j.filename||"chart",type:j.type,width:j.width||0,scale:j.scale||2,svg:k},j.formAttributes)
},print:function(){var j=this,f=j.container,l=[],k=f.parentNode,o=q.body,p=o.childNodes;
if(!j.isPrinting){j.isPrinting=!0,i(p,function(r,s){if(r.nodeType===1){l[s]=r.style.display,r.style.display="none"
}}),o.appendChild(f),g.focus(),g.print(),setTimeout(function(){k.appendChild(f);
i(p,function(r,s){if(r.nodeType===1){r.style.display=l[s]
}});
j.isPrinting=!1
},1000)
}},contextMenu:function(F,y,t,o,J,B,A){var j=this,D=j.options.navigation,v=D.menuItemStyle,f=j.chartWidth,E=j.chartHeight,C="cache-"+F,r=j[C],k=G(J,B),l,p,I,s=function(K){j.pointer.inClass(K.target,F)||p()
};
if(!r){j[C]=r=w("div",{className:F},{position:"absolute",zIndex:1000,padding:k+"px"},j.container),l=w("div",null,a({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},D.menuStyle),r),p=function(){b(r,{display:"none"});
A&&A.setState(0);
j.openMenu=!1
},m(r,"mouseleave",function(){I=setTimeout(p,500)
}),m(r,"mouseenter",function(){clearTimeout(I)
}),m(document,"mouseup",s),m(j,"destroy",function(){e(document,"mouseup",s)
}),i(y,function(K){if(K){var L=K.separator?w("hr",null,null,l):w("div",{onmouseover:function(){b(this,D.menuItemHoverStyle)
},onmouseout:function(){b(this,v)
},onclick:function(){p();
K.onclick.apply(j,arguments)
},innerHTML:K.text||j.options.lang[K.textKey]},a({cursor:"pointer"},v),l);
j.exportDivElements.push(L)
}}),j.exportDivElements.push(l,r),j.exportMenuWidth=r.offsetWidth,j.exportMenuHeight=r.offsetHeight
}y={display:"block"};
t+j.exportMenuWidth>f?y.right=f-t-J-k+"px":y.left=t-k+"px";
o+B+j.exportMenuHeight>E&&A.alignOptions.verticalAlign!=="top"?y.bottom=E-o-k+"px":y.top=o+B-k+"px";
b(r,y);
j.openMenu=!0
},addButton:function(o){var k=this,r=k.renderer,p=u(k.options.navigation.buttonOptions,o),A=p.onclick,v=p.menuItems,t,s,B={stroke:p.symbolStroke,fill:p.symbolFill},l=p.symbolSize||12;
if(!k.btnCount){k.btnCount=0
}if(!k.exportDivElements){k.exportDivElements=[],k.exportSVGElements=[]
}if(p.enabled!==!1){var C=p.theme,f=C.states,j=f&&f.hover,f=f&&f.select,y;
delete C.states;
A?y=function(){A.apply(k,arguments)
}:v&&(y=function(){k.contextMenu(s.menuClassName,v,s.translateX,s.translateY,s.width,s.height,s);
s.setState(2)
});
p.text&&p.symbol?C.paddingLeft=n.pick(C.paddingLeft,25):p.text||a(C,{width:p.width,height:p.height,padding:0});
s=r.button(p.text,0,0,y,C,j,f).attr({title:k.options.lang[p._titleKey],"stroke-linecap":"round"});
s.menuClassName=o.menuClassName||"highcharts-menu-"+k.btnCount++;
p.symbol&&(t=r.symbol(p.symbol,p.symbolX-l/2,p.symbolY-l/2,l,l).attr(a(B,{"stroke-width":p.symbolStrokeWidth||1,zIndex:1})).add(s));
s.add().align(a(p,{width:s.width,x:n.pick(p.x,c)}),!0,"spacingBox");
c+=(s.width+p.buttonSpacing)*(p.align==="right"?-1:1);
k.exportSVGElements.push(s,t)
}},destroyExport:function(j){var j=j.target,f,k;
for(f=0;
f<j.exportSVGElements.length;
f++){if(k=j.exportSVGElements[f]){k.onclick=k.ontouchstart=null,j.exportSVGElements[f]=k.destroy()
}}for(f=0;
f<j.exportDivElements.length;
f++){k=j.exportDivElements[f],e(k,"mouseleave"),j.exportDivElements[f]=k.onmouseout=k.onmouseover=k.ontouchstart=k.onclick=null,x(k)
}}});
H.menu=function(j,f,l,k){return["M",j,f+2.5,"L",j+l,f+2.5,"M",j,f+k/2+0.5,"L",j+l,f+k/2+0.5,"M",j,f+k-1.5,"L",j+l,f+k-1.5]
};
d.prototype.callbacks.push(function(j){var f,l=j.options.exporting,k=l.buttons;
c=0;
if(l.enabled!==!1){for(f in k){j.addButton(k[f])
}m(j,"destroy",j.destroyExport)
}})
})(Highcharts);