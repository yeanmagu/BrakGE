(function(t){var v=Math.PI,q=(v/180),x=Math.sin,m=Math.cos,w=Math.round;
function u(y,g,l,b){l*=q;
g*=q;
var z=[],F,d,e;
l*=-1;
F=b.x;
d=b.y;
e=(b.z===0?0.0001:b.z)*(b.vd||25);
var E=x(l),a=m(l),h=x(g),i=m(g);
var f,c,k,j;
t.each(y,function(A){f=A.x-F;
c=A.y-d;
k=A.z||0;
j={x:a*f-E*k,y:-E*h*f-a*h*k+i*c,z:E*i*f+a*i*k+h*c};
j.x=j.x*((e-j.z)/e)+F;
j.y=j.y*((e-j.z)/e)+d;
z.push({x:w(j.x),y:w(j.y),z:w(j.z)})
});
return z
}var r=(4*(Math.sqrt(2)-1)/3)/(v/2);
function n(b,c,h,i,j,f,d,e){var g=[];
if((f>j)&&(f-j>v/2+0.0001)){g=g.concat(n(b,c,h,i,j,j+(v/2),d,e));
g=g.concat(n(b,c,h,i,j+(v/2),f,d,e));
return g
}else{if((f<j)&&(j-f>v/2+0.0001)){g=g.concat(n(b,c,h,i,j,j-(v/2),d,e));
g=g.concat(n(b,c,h,i,j-(v/2),f,d,e));
return g
}else{var a=f-j;
return["C",b+(h*m(j))-((h*r*a)*x(j))+d,c+(i*x(j))+((i*r*a)*m(j))+e,b+(h*m(f))+((h*r*a)*x(f))+d,c+(i*x(f))-((i*r*a)*m(f))+e,b+(h*m(f))+d,c+(i*x(f))+e]
}}}t.SVGRenderer.prototype.toLinePath=function(b,a){var c=[];
t.each(b,function(d){c.push("L",d.x,d.y)
});
c[0]="M";
if(a){c.push("Z")
}return c
};
t.SVGRenderer.prototype.cuboid=function(c){var b=this.g(),a=this.cuboidPath(c);
b.front=this.path(a[0]).attr({zIndex:a[3],"stroke-linejoin":"round"}).add(b);
b.top=this.path(a[1]).attr({zIndex:a[4],"stroke-linejoin":"round"}).add(b);
b.side=this.path(a[2]).attr({zIndex:a[5],"stroke-linejoin":"round"}).add(b);
b.fillSetter=function(g){var d=g,e=t.Color(g).brighten(0.1).get(),f=t.Color(g).brighten(-0.1).get();
this.front.attr({fill:d});
this.top.attr({fill:e});
this.side.attr({fill:f});
this.color=g;
return this
};
b.opacitySetter=function(d){this.front.attr({opacity:d});
this.top.attr({opacity:d});
this.side.attr({opacity:d});
return this
};
b.attr=function(d){if(d.shapeArgs||d.x){var f=d.shapeArgs||d;
var e=this.renderer.cuboidPath(f);
this.front.attr({d:e[0],zIndex:e[3]});
this.top.attr({d:e[1],zIndex:e[4]});
this.side.attr({d:e[2],zIndex:e[5]})
}else{t.SVGElement.prototype.attr.call(this,d)
}return this
};
b.animate=function(d,f,e){if(d.x&&d.y){var g=this.renderer.cuboidPath(d);
this.front.attr({zIndex:g[3]}).animate({d:g[0]},f,e);
this.top.attr({zIndex:g[4]}).animate({d:g[1]},f,e);
this.side.attr({zIndex:g[5]}).animate({d:g[2]},f,e)
}else{if(d.opacity){this.front.animate(d,f,e);
this.top.animate(d,f,e);
this.side.animate(d,f,e)
}else{t.SVGElement.prototype.animate.call(this,d,f,e)
}}return this
};
b.destroy=function(){this.front.destroy();
this.top.destroy();
this.side.destroy();
return null
};
b.attr({zIndex:-a[3]});
return b
};
t.SVGRenderer.prototype.cuboidPath=function(K){var f=K.x,z=K.y,P=K.z,a=K.height,h=K.width,i=K.depth,N=K.alpha,k=K.beta,l=K.origin;
var y=[{x:f,y:z,z:P},{x:f+h,y:z,z:P},{x:f+h,y:z+a,z:P},{x:f,y:z+a,z:P},{x:f,y:z+a,z:P+i},{x:f+h,y:z+a,z:P+i},{x:f+h,y:z,z:P+i},{x:f,y:z,z:P+i}];
y=u(y,N,k,l);
var O,e,M;
O=["M",y[0].x,y[0].y,"L",y[1].x,y[1].y,"L",y[2].x,y[2].y,"L",y[3].x,y[3].y,"Z"];
var c=(y[0].z+y[1].z+y[2].z+y[3].z)/4;
var b=["M",y[0].x,y[0].y,"L",y[7].x,y[7].y,"L",y[6].x,y[6].y,"L",y[1].x,y[1].y,"Z"];
var L=["M",y[3].x,y[3].y,"L",y[2].x,y[2].y,"L",y[5].x,y[5].y,"L",y[4].x,y[4].y,"Z"];
if(y[7].y<y[1].y){e=b
}else{if(y[4].y>y[2].y){e=L
}else{e=[]
}}var d=(k>0?(y[0].z+y[7].z+y[6].z+y[1].z)/4:(y[3].z+y[2].z+y[5].z+y[4].z)/4);
var j=["M",y[1].x,y[1].y,"L",y[2].x,y[2].y,"L",y[5].x,y[5].y,"L",y[6].x,y[6].y,"Z"];
var g=["M",y[0].x,y[0].y,"L",y[7].x,y[7].y,"L",y[4].x,y[4].y,"L",y[3].x,y[3].y,"Z"];
if(y[6].x>y[1].x){M=j
}else{if(y[7].x<y[0].x){M=g
}else{M=[]
}}var J=(N>0?(y[1].z+y[2].z+y[5].z+y[6].z)/4:(y[0].z+y[7].z+y[4].z+y[3].z)/4);
return[O,e,M,c,d,J]
};
t.SVGRenderer.prototype.arc3d=function(d){d.alpha*=q;
d.beta*=q;
var c=this.g(),a=this.arc3dPath(d),b=c.renderer;
var e=a.zAll*100;
c.shapeArgs=d;
c.side1=b.path(a.side2).attr({zIndex:a.zSide2}).add(c);
c.side2=b.path(a.side1).attr({zIndex:a.zSide1}).add(c);
c.inn=b.path(a.inn).attr({zIndex:a.zInn}).add(c);
c.out=b.path(a.out).attr({zIndex:a.zOut}).add(c);
c.top=b.path(a.top).attr({zIndex:a.zTop}).add(c);
c.fillSetter=function(h){this.color=h;
var f=h,g=t.Color(h).brighten(-0.1).get();
this.side1.attr({fill:g});
this.side2.attr({fill:g});
this.inn.attr({fill:g});
this.out.attr({fill:g});
this.top.attr({fill:f});
return this
};
c.animate=function(f,h,g){t.SVGElement.prototype.animate.call(this,f,h,g);
if(f.x&&f.y){var k=this,j=this.renderer,l=t.splat(f)[0];
l.alpha*=q;
l.beta*=q;
var i=j.arc3dPath(l);
k.shapeArgs=l;
k.inn.attr({d:i.inn,zIndex:i.zInn});
k.out.attr({d:i.out,zIndex:i.zOut});
k.side1.attr({d:i.side1,zIndex:i.zSide2});
k.side2.attr({d:i.side2,zIndex:i.zSide1});
k.top.attr({d:i.top,zIndex:i.zTop});
k.attr({fill:k.color});
k.attr({zIndex:i.zAll*100})
}return this
};
c.zIndex=e;
c.attr({zIndex:e});
return c
};
t.SVGRenderer.prototype.arc3dPath=function(ak){var ao=ak.x,c=ak.y,am=ak.start,an=ak.end-1e-05,a=ak.r,aj=ak.innerR,af=ak.depth,aa=ak.alpha,ai=ak.beta;
var aw=m(am),l=x(am),X=m(an),ae=x(an),ac=a*m(ai),ar=a*m(aa),h=aj*m(ai),ag=aj*m(aa),i=af*x(ai),Y=af*x(aa);
var ad=["M",ao+(ac*aw),c+(ar*l)];
ad=ad.concat(n(ao,c,ac,ar,am,an,0,0));
ad=ad.concat(["L",ao+(h*X),c+(ag*ae)]);
ad=ad.concat(n(ao,c,h,ag,an,am,0,0));
ad=ad.concat(["Z"]);
var f=((ak.start+ak.end)/2);
var e=((x(ai)*m(f))+(x(-aa)*x(-f)));
var d=(ai>0?v/2:0),al=(aa>0?0:v/2);
var ap=am>-d?am:(an>-d?-d:am),g=an<v-al?an:(am<v-al?v-al:an);
var j=["M",ao+(ac*m(ap)),c+(ar*x(ap))];
j=j.concat(n(ao,c,ac,ar,ap,g,0,0));
j=j.concat(["L",ao+(ac*m(g))+i,c+(ar*x(g))+Y]);
j=j.concat(n(ao,c,ac,ar,g,ap,i,Y));
j=j.concat(["Z"]);
var k=["M",ao+(h*aw),c+(ag*l)];
k=k.concat(n(ao,c,h,ag,am,an,0,0));
k=k.concat(["L",ao+(h*m(an))+i,c+(ag*x(an))+Y]);
k=k.concat(n(ao,c,h,ag,an,am,i,Y));
k=k.concat(["Z"]);
var Z=["M",ao+(ac*aw),c+(ar*l),"L",ao+(ac*aw)+i,c+(ar*l)+Y,"L",ao+(h*aw)+i,c+(ag*l)+Y,"L",ao+(h*aw),c+(ag*l),"Z"];
var ab=["M",ao+(ac*X),c+(ar*ae),"L",ao+(ac*X)+i,c+(ar*ae)+Y,"L",ao+(h*X)+i,c+(ag*ae)+Y,"L",ao+(h*X),c+(ag*ae),"Z"];
var aq=aj+((a-aj)/2);
var b=Math.abs(e*2*aq),au=e*a,ah=e*aj,av=((x(ai)*m(am))+(x(-aa)*x(-am)))*aq,at=((x(ai)*m(an))+(x(-aa)*x(-an)))*aq;
return{top:ad,zTop:b*100,out:j,zOut:au*100,inn:k,zInn:ah*100,side1:Z,zSide1:av*100,side2:ab,zSide2:at*100,zAll:e}
};
t.Chart.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled
};
t.wrap(t.Chart.prototype,"isInsidePlot",function(a){if(this.is3d()){return true
}else{return a.apply(this,[].slice.call(arguments,1))
}});
t.wrap(t.Chart.prototype,"init",function(b){var a=arguments;
a[1]=t.merge({chart:{options3d:{enabled:false,alpha:0,beta:0,depth:100,viewDistance:25,frame:{bottom:{size:1,color:"rgba(255,255,255,0)"},side:{size:1,color:"rgba(255,255,255,0)"},back:{size:1,color:"rgba(255,255,255,0)"}}}}},a[1]);
b.apply(this,[].slice.call(a,1))
});
t.wrap(t.Chart.prototype,"setChartSize",function(e){e.apply(this,[].slice.call(arguments,1));
if(this.is3d()){var c=this.inverted,a=this.clipBox,d=this.margin,g=c?"y":"x",h=c?"x":"y",f=c?"height":"width",b=c?"width":"height";
a[g]=-(d[3]||0);
a[h]=-(d[0]||0);
a[f]=this.chartWidth+(d[3]||0)+(d[1]||0);
a[b]=this.chartHeight+(d[0]||0)+(d[2]||0)
}});
t.wrap(t.Chart.prototype,"redraw",function(a){if(this.is3d()){this.isDirtyBox=true
}a.apply(this,[].slice.call(arguments,1))
});
t.Chart.prototype.retrieveStacks=function(){var d={},e=this.options.chart.type,f=this.options.plotOptions[e],c=f.stacking,a=f.grouping,b=1;
if(a||!c){return this.series
}t.each(this.series,function(g){if(!d[g.options.stack||0]){d[g.options.stack||0]={series:[g],position:b};
b++
}else{d[g.options.stack||0].series.push(g)
}});
d.totalStacks=b+1;
return d
};
t.wrap(t.Axis.prototype,"init",function(b){var a=arguments;
if(a[1].is3d()){a[2].tickWidth=t.pick(a[2].tickWidth,0);
a[2].gridLineWidth=t.pick(a[2].gridLineWidth,1)
}b.apply(this,[].slice.call(arguments,1))
});
t.wrap(t.Axis.prototype,"render",function(i){i.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return
}var j=this.chart,f=j.renderer,H=j.options.chart.options3d,J=H.alpha,K=H.beta*(j.yAxis[0].opposite?-1:1),G=H.frame,b=G.bottom,g=G.back,c=G.side,a=H.depth,h=this.height,e=this.width,d=this.left,F=this.top;
var L={x:j.plotLeft+(j.plotWidth/2),y:j.plotTop+(j.plotHeight/2),z:a,vd:H.viewDistance};
if(this.horiz){if(this.axisLine){this.axisLine.hide()
}var l={x:d,y:F+(j.yAxis[0].reversed?-b.size:h),z:0,width:e,height:b.size,depth:a,alpha:J,beta:K,origin:L};
if(!this.bottomFrame){this.bottomFrame=f.cuboid(l).attr({fill:b.color,zIndex:(j.yAxis[0].reversed&&J>0?4:-1)}).css({stroke:b.color}).add()
}else{this.bottomFrame.animate(l)
}}else{var k={x:d,y:F,z:a+1,width:e,height:h+b.size,depth:g.size,alpha:J,beta:K,origin:L};
if(!this.backFrame){this.backFrame=f.cuboid(k).attr({fill:g.color,zIndex:-3}).css({stroke:g.color}).add()
}else{this.backFrame.animate(k)
}if(this.axisLine){this.axisLine.hide()
}var I={x:(j.yAxis[0].opposite?e:0)+d-c.size,y:F,z:0,width:c.size,height:h+b.size,depth:a+g.size,alpha:J,beta:K,origin:L};
if(!this.sideFrame){this.sideFrame=f.cuboid(I).attr({fill:c.color,zIndex:-2}).css({stroke:c.color}).add()
}else{this.sideFrame.animate(I)
}}});
t.wrap(t.Axis.prototype,"getPlotLinePath",function(h){var g=h.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return g
}if(g===null){return g
}var c=this.chart,e=c.options.chart.options3d;
var d=e.depth;
e.origin={x:c.plotLeft+(c.plotWidth/2),y:c.plotTop+(c.plotHeight/2),z:d,vd:e.viewDistance};
var f=[{x:g[1],y:g[2],z:(this.horiz||this.opposite?d:0)},{x:g[1],y:g[2],z:d},{x:g[4],y:g[5],z:d},{x:g[4],y:g[5],z:(this.horiz||this.opposite?0:d)}];
var a=c.options.inverted?e.beta:e.alpha,b=c.options.inverted?e.alpha:e.beta;
b*=(c.yAxis[0].opposite?-1:1);
f=u(f,a,b,e.origin);
g=this.chart.renderer.toLinePath(f,false);
return g
});
t.wrap(t.Tick.prototype,"getMarkPath",function(h){var g=h.apply(this,[].slice.call(arguments,1));
if(!this.axis.chart.is3d()){return g
}var c=this.axis.chart,d=c.options.chart.options3d;
var e={x:c.plotLeft+(c.plotWidth/2),y:c.plotTop+(c.plotHeight/2),z:d.depth,vd:d.viewDistance};
var f=[{x:g[1],y:g[2],z:0},{x:g[4],y:g[5],z:0}];
var a=c.inverted?d.beta:d.alpha,b=c.inverted?d.alpha:d.beta;
b*=(c.yAxis[0].opposite?-1:1);
f=u(f,a,b,e);
g=["M",f[0].x,f[0].y,"L",f[1].x,f[1].y];
return g
});
t.wrap(t.Tick.prototype,"getLabelPosition",function(g){var f=g.apply(this,[].slice.call(arguments,1));
if(!this.axis.chart.is3d()){return f
}var c=this.axis.chart,d=c.options.chart.options3d;
var e={x:c.plotLeft+(c.plotWidth/2),y:c.plotTop+(c.plotHeight/2),z:d.depth,vd:d.viewDistance};
var a=c.inverted?d.beta:d.alpha,b=c.inverted?d.alpha:d.beta;
b*=(c.yAxis[0].opposite?-1:1);
f=u([{x:f.x,y:f.y,z:0}],a,b,e)[0];
return f
});
t.wrap(t.Axis.prototype,"drawCrosshair",function(b){var a=arguments;
if(this.chart.is3d()){if(a[2]){a[2]={plotX:a[2].plotXold||a[2].plotX,plotY:a[2].plotYold||a[2].plotY}
}}b.apply(this,[].slice.call(a,1))
});
t.wrap(t.seriesTypes.column.prototype,"translate",function(h){h.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return
}var k=this.chart.options.chart.type,i=this,c=i.chart,e=c.options,l=e.plotOptions[k],f=e.chart.options3d,d=l.depth||25,g={x:c.plotWidth/2,y:c.plotHeight/2,z:f.depth,vd:f.viewDistance},a=f.alpha,b=f.beta*(c.yAxis[0].opposite?-1:1);
var j=l.stacking?(this.options.stack||0):i._i;
var z=j*(d+(l.groupZPadding||1));
if(l.grouping!==false){z=0
}z+=(l.groupZPadding||1);
t.each(i.data,function(D){var y=D.shapeArgs,C=D.tooltipPos;
D.shapeType="cuboid";
y.alpha=a;
y.beta=b;
y.z=z;
y.origin=g;
y.depth=d;
C=u([{x:C[0],y:C[1],z:z}],a,b,g)[0];
D.tooltipPos=[C.x,C.y]
})
});
t.wrap(t.seriesTypes.column.prototype,"animate",function(c){if(!this.chart.is3d()){c.apply(this,[].slice.call(arguments,1))
}else{var a=arguments,b=a[1],f=this.yAxis,e=this,d=this.yAxis.reversed;
if(t.svg){if(b){t.each(e.data,function(g){g.height=g.shapeArgs.height;
g.shapeArgs.height=1;
if(!d){if(g.stackY){g.shapeArgs.y=g.plotY+f.translate(g.stackY)
}else{g.shapeArgs.y=g.plotY+(g.negative?-g.height:g.height)
}}})
}else{t.each(e.data,function(g){g.shapeArgs.height=g.height;
if(!d){g.shapeArgs.y=g.plotY-(g.negative?g.height:0)
}if(g.graphic){g.graphic.animate(g.shapeArgs,e.options.animation)
}});
e.animate=null
}}}});
t.wrap(t.seriesTypes.column.prototype,"init",function(c){c.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var a=this.chart.options.plotOptions.column.grouping,e=this.chart.options.plotOptions.column.stacking,g=this.options.zIndex;
if(!g){if(!(a!==undefined&&!a)&&e){var f=this.chart.retrieveStacks(),d=this.options.stack||0,b;
for(b=0;
b<f[d].series.length;
b++){if(f[d].series[b]===this){break
}}g=(f.totalStacks*10)-(10*(f.totalStacks-f[d].position))-b;
this.options.zIndex=g
}}}});
function s(b){if(this.chart.is3d()){var a=this.chart.options.plotOptions.column.grouping;
if(a!==undefined&&!a&&this.group.zIndex!==undefined){this.group.attr({zIndex:(this.group.zIndex*10)})
}if(this.userOptions.borderColor===undefined){this.options.borderColor=this.color
}t.each(this.data,function(d){var c=d.options.borderColor||d.color||d.series.userOptions.borderColor;
d.options.borderColor=c;
d.borderColor=c;
d.pointAttr[""].stroke=c;
d.pointAttr.hover.stroke=c;
d.pointAttr.select.stroke=c
})
}b.apply(this,[].slice.call(arguments,1))
}if(t.seriesTypes.columnrange){t.wrap(t.seriesTypes.columnrange.prototype,"drawPoints",s)
}t.wrap(t.seriesTypes.column.prototype,"drawPoints",s);
var p=t.getOptions();
p.plotOptions.cylinder=t.merge(p.plotOptions.column);
var o=t.extendClass(t.seriesTypes.column,{type:"cylinder"});
t.seriesTypes.cylinder=o;
t.wrap(t.seriesTypes.cylinder.prototype,"translate",function(h){h.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return
}var i=this,b=i.chart,e=b.options,c=e.plotOptions.cylinder,f=e.chart.options3d,d=c.depth||0,g={x:b.inverted?b.plotHeight/2:b.plotWidth/2,y:b.inverted?b.plotWidth/2:b.plotHeight/2,z:f.depth,vd:f.viewDistance},a=f.alpha;
var j=c.stacking?(this.options.stack||0)*d:i._i*d;
j+=d/2;
if(c.grouping!==false){j=0
}t.each(i.data,function(k){var l=k.shapeArgs;
k.shapeType="arc3d";
l.x+=d/2;
l.z=j;
l.start=0;
l.end=2*v;
l.r=d*0.95;
l.innerR=0;
l.depth=l.height*(1/x((90-a)*q))-j;
l.alpha=90-a;
l.beta=0;
l.origin=g
})
});
t.wrap(t.seriesTypes.pie.prototype,"translate",function(i){i.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return
}var j=this,c=j.chart,e=c.options,h=e.plotOptions.pie,d=h.depth||0,f=e.chart.options3d,g={x:c.plotWidth/2,y:c.plotHeight/2,z:f.depth},a=f.alpha,b=f.beta;
var k=h.stacking?(this.options.stack||0)*d:j._i*d;
k+=d/2;
if(h.grouping!==false){k=0
}t.each(j.data,function(A){A.shapeType="arc3d";
var B=A.shapeArgs;
B.z=k;
B.depth=d*0.75;
B.origin=g;
B.alpha=a;
B.beta=b;
var l=(B.end+B.start)/2;
A.slicedTranslation={translateX:w(m(l)*j.options.slicedOffset*m(a*q)),translateY:w(x(l)*j.options.slicedOffset*m(a*q))}
})
});
t.wrap(t.seriesTypes.pie.prototype.pointClass.prototype,"haloPath",function(a){return this.series.chart.is3d()?[]:a.call(this)
});
t.wrap(t.seriesTypes.pie.prototype,"drawPoints",function(a){if(this.chart.is3d()){t.each(this.data,function(c){var b=c.options.borderColor||c.color||c.series.userOptions.borderColor||c.series.color;
c.options.borderColor=b;
c.borderColor=b;
c.pointAttr[""].stroke=b;
c.pointAttr.hover.stroke=b;
c.pointAttr.select.stroke=b
})
}a.apply(this,[].slice.call(arguments,1))
});
t.wrap(t.seriesTypes.pie.prototype,"drawDataLabels",function(a){a.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return
}var b=this;
t.each(b.data,function(g){var i=g.shapeArgs;
var h=i.r,f=i.depth,c=i.alpha*q,e=i.beta*q,d=(i.start+i.end)/2;
if(g.connector){g.connector.translate((-h*(1-m(e))*m(d))+(m(d)>0?x(e)*f:0),(-h*(1-m(c))*x(d))+(x(d)>0?x(c)*f:0))
}if(g.dataLabel){g.dataLabel.attr({x:g.dataLabel.connX+(-h*(1-m(e))*m(d))+(m(d)>0?m(e)*f:0)-(g.dataLabel.width/2),y:g.dataLabel.connY+(-h*(1-m(c))*x(d))+(x(d)>0?x(c)*f:0)-(g.dataLabel.height/2)})
}})
});
t.wrap(t.seriesTypes.pie.prototype,"addPoint",function(a){a.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){this.update()
}});
t.wrap(t.seriesTypes.pie.prototype,"animate",function(h){if(!this.chart.is3d()){h.apply(this,[].slice.call(arguments,1))
}else{var b=arguments,f=b[1],a=this.options.animation,c,d=this.center,e=this.group,g=this.markerGroup;
if(t.svg){if(a===true){a={}
}if(f){this.oldtranslateX=e.translateX;
this.oldtranslateY=e.translateY;
c={translateX:d[0],translateY:d[1],scaleX:0.001,scaleY:0.001};
e.attr(c);
if(g){g.attrSetters=e.attrSetters;
g.attr(c)
}}else{c={translateX:this.oldtranslateX,translateY:this.oldtranslateY,scaleX:1,scaleY:1};
e.animate(c,a);
if(g){g.animate(c,a)
}this.animate=null
}}}});
t.wrap(t.seriesTypes.scatter.prototype,"translate",function(g){g.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return
}var i=this,c=i.chart,e=i.chart.options.chart.options3d,a=e.alpha,b=e.beta,f={x:c.inverted?c.plotHeight/2:c.plotWidth/2,y:c.inverted?c.plotWidth/2:c.plotHeight/2,z:e.depth,vd:e.viewDistance},d=e.depth,j=c.options.zAxis||{min:0,max:d};
var h=d/(j.max-j.min);
t.each(i.data,function(l){var k={x:l.plotX,y:l.plotY,z:(l.z-j.min)*h};
k=u([k],a,b,f)[0];
l.plotXold=l.plotX;
l.plotYold=l.plotY;
l.plotX=k.x;
l.plotY=k.y;
l.plotZ=k.z
})
});
t.wrap(t.seriesTypes.scatter.prototype,"init",function(b){var c=b.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){this.pointArrayMap=["x","y","z"];
var a="x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>";
if(this.userOptions.tooltip){this.tooltipOptions.pointFormat=this.userOptions.tooltip.pointFormat||a
}else{this.tooltipOptions.pointFormat=a
}}return c
});
if(t.VMLRenderer){t.setOptions({animate:false});
t.VMLRenderer.prototype.cuboid=t.SVGRenderer.prototype.cuboid;
t.VMLRenderer.prototype.cuboidPath=t.SVGRenderer.prototype.cuboidPath;
t.VMLRenderer.prototype.toLinePath=t.SVGRenderer.prototype.toLinePath;
t.VMLRenderer.prototype.createElement3D=t.SVGRenderer.prototype.createElement3D;
t.VMLRenderer.prototype.arc3d=function(b){var a=t.SVGRenderer.prototype.arc3d.call(this,b);
a.css({zIndex:a.zIndex});
return a
};
t.VMLRenderer.prototype.arc3dPath=t.SVGRenderer.prototype.arc3dPath;
t.Chart.prototype.renderSeries=function(){var b,a=this.series.length;
while(a--){b=this.series[a];
b.translate();
if(b.setTooltipPoints){b.setTooltipPoints()
}b.render()
}};
t.wrap(t.Axis.prototype,"render",function(a){a.apply(this,[].slice.call(arguments,1));
if(this.sideFrame){this.sideFrame.css({zIndex:0});
this.sideFrame.front.attr({fill:this.sideFrame.color})
}if(this.bottomFrame){this.bottomFrame.css({zIndex:1});
this.bottomFrame.front.attr({fill:this.bottomFrame.color})
}if(this.backFrame){this.backFrame.css({zIndex:0});
this.backFrame.front.attr({fill:this.backFrame.color})
}})
}}(Highcharts));