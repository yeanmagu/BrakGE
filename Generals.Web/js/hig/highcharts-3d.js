(function(c){function u(i,d,b,H){var j,y,p;
b*=t;
d*=t;
var a=[],f,E,G;
b*=-1;
f=H.x;
E=H.y;
G=(H.z===0?0.0001:H.z)*(H.vd||25);
var h=q(b),J=r(b),e=q(d),g=r(d),F,I,o;
c.each(i,function(w){F=w.x-f;
I=w.y-E;
o=w.z||0;
j=J*F-h*o;
y=-h*e*F-J*e*o+g*I;
p=h*g*F+J*g*o+e*I;
j=j*((G-p)/G)+f;
y=y*((G-p)/G)+E;
a.push({x:k(j),y:k(y),z:k(p)})
});
return a
}function v(f,a,b,e,g,d,h,i){var j=[];
return d>g&&d-g>s/2+0.0001?(j=j.concat(v(f,a,b,e,g,g+s/2,h,i)),j=j.concat(v(f,a,b,e,g+s/2,d,h,i))):d<g&&g-d>s/2+0.0001?(j=j.concat(v(f,a,b,e,g,g-s/2,h,i)),j=j.concat(v(f,a,b,e,g-s/2,d,h,i))):(j=d-g,["C",f+b*r(g)-b*l*j*q(g)+h,a+e*q(g)+e*l*j*r(g)+i,f+b*r(d)+b*l*j*q(d)+h,a+e*q(d)-e*l*j*r(d)+i,f+b*r(d)+h,a+e*q(d)+i])
}function n(b){if(this.chart.is3d()){var a=this.chart.options.plotOptions.column.grouping;
a!==void 0&&!a&&this.group.zIndex!==void 0&&this.group.attr({zIndex:this.group.zIndex*10});
if(this.userOptions.borderColor===void 0){this.options.borderColor=this.color
}c.each(this.data,function(d){var e=d.options.borderColor||d.color||d.series.userOptions.borderColor;
d.options.borderColor=e;
d.borderColor=e;
d.pointAttr[""].stroke=e;
d.pointAttr.hover.stroke=e;
d.pointAttr.select.stroke=e
})
}b.apply(this,[].slice.call(arguments,1))
}var s=Math.PI,t=s/180,q=Math.sin,r=Math.cos,k=Math.round,l=4*(Math.sqrt(2)-1)/3/(s/2);
c.SVGRenderer.prototype.toLinePath=function(d,a){var b=[];
c.each(d,function(e){b.push("L",e.x,e.y)
});
b[0]="M";
a&&b.push("Z");
return b
};
c.SVGRenderer.prototype.cuboid=function(b){var a=this.g(),b=this.cuboidPath(b);
a.front=this.path(b[0]).attr({zIndex:b[3],"stroke-linejoin":"round"}).add(a);
a.top=this.path(b[1]).attr({zIndex:b[4],"stroke-linejoin":"round"}).add(a);
a.side=this.path(b[2]).attr({zIndex:b[5],"stroke-linejoin":"round"}).add(a);
a.fillSetter=function(d){var e=c.Color(d).brighten(0.1).get(),f=c.Color(d).brighten(-0.1).get();
this.front.attr({fill:d});
this.top.attr({fill:e});
this.side.attr({fill:f});
this.color=d;
return this
};
a.opacitySetter=function(d){this.front.attr({opacity:d});
this.top.attr({opacity:d});
this.side.attr({opacity:d});
return this
};
a.attr=function(d){d.shapeArgs||d.x?(d=this.renderer.cuboidPath(d.shapeArgs||d),this.front.attr({d:d[0],zIndex:d[3]}),this.top.attr({d:d[1],zIndex:d[4]}),this.side.attr({d:d[2],zIndex:d[5]})):c.SVGElement.prototype.attr.call(this,d);
return this
};
a.animate=function(d,e,f){d.x&&d.y?(d=this.renderer.cuboidPath(d),this.front.attr({zIndex:d[3]}).animate({d:d[0]},e,f),this.top.attr({zIndex:d[4]}).animate({d:d[1]},e,f),this.side.attr({zIndex:d[5]}).animate({d:d[2]},e,f)):d.opacity?(this.front.animate(d,e,f),this.top.animate(d,e,f),this.side.animate(d,e,f)):c.SVGElement.prototype.animate.call(this,d,e,f);
return this
};
a.destroy=function(){this.front.destroy();
this.top.destroy();
this.side.destroy();
return null
};
a.attr({zIndex:-b[3]});
return a
};
c.SVGRenderer.prototype.cuboidPath=function(f){var a=f.x,b=f.y,e=f.z,d=f.height,g=f.width,h=f.depth,i=f.alpha,j=f.beta,a=[{x:a,y:b,z:e},{x:a+g,y:b,z:e},{x:a+g,y:b+d,z:e},{x:a,y:b+d,z:e},{x:a,y:b+d,z:e+h},{x:a+g,y:b+d,z:e+h},{x:a+g,y:b,z:e+h},{x:a,y:b,z:e+h}],a=u(a,i,j,f.origin),f=["M",a[0].x,a[0].y,"L",a[7].x,a[7].y,"L",a[6].x,a[6].y,"L",a[1].x,a[1].y,"Z"],b=["M",a[3].x,a[3].y,"L",a[2].x,a[2].y,"L",a[5].x,a[5].y,"L",a[4].x,a[4].y,"Z"],e=["M",a[1].x,a[1].y,"L",a[2].x,a[2].y,"L",a[5].x,a[5].y,"L",a[6].x,a[6].y,"Z"],d=["M",a[0].x,a[0].y,"L",a[7].x,a[7].y,"L",a[4].x,a[4].y,"L",a[3].x,a[3].y,"Z"];
return[["M",a[0].x,a[0].y,"L",a[1].x,a[1].y,"L",a[2].x,a[2].y,"L",a[3].x,a[3].y,"Z"],a[7].y<a[1].y?f:a[4].y>a[2].y?b:[],a[6].x>a[1].x?e:a[7].x<a[0].x?d:[],(a[0].z+a[1].z+a[2].z+a[3].z)/4,j>0?(a[0].z+a[7].z+a[6].z+a[1].z)/4:(a[3].z+a[2].z+a[5].z+a[4].z)/4,i>0?(a[1].z+a[2].z+a[5].z+a[6].z)/4:(a[0].z+a[7].z+a[4].z+a[3].z)/4]
};
c.SVGRenderer.prototype.arc3d=function(e){e.alpha*=t;
e.beta*=t;
var a=this.g(),b=this.arc3dPath(e),d=a.renderer,f=b.zAll*100;
a.shapeArgs=e;
a.side1=d.path(b.side2).attr({zIndex:b.zSide2}).add(a);
a.side2=d.path(b.side1).attr({zIndex:b.zSide1}).add(a);
a.inn=d.path(b.inn).attr({zIndex:b.zInn}).add(a);
a.out=d.path(b.out).attr({zIndex:b.zOut}).add(a);
a.top=d.path(b.top).attr({zIndex:b.zTop}).add(a);
a.fillSetter=function(g){this.color=g;
var h=c.Color(g).brighten(-0.1).get();
this.side1.attr({fill:h});
this.side2.attr({fill:h});
this.inn.attr({fill:h});
this.out.attr({fill:h});
this.top.attr({fill:g});
return this
};
a.animate=function(g,h,i){c.SVGElement.prototype.animate.call(this,g,h,i);
if(g.x&&g.y){h=this.renderer,g=c.splat(g)[0],g.alpha*=t,g.beta*=t,h=h.arc3dPath(g),this.shapeArgs=g,this.inn.attr({d:h.inn,zIndex:h.zInn}),this.out.attr({d:h.out,zIndex:h.zOut}),this.side1.attr({d:h.side1,zIndex:h.zSide2}),this.side2.attr({d:h.side2,zIndex:h.zSide1}),this.top.attr({d:h.top,zIndex:h.zTop}),this.attr({fill:this.color}),this.attr({zIndex:h.zAll*100})
}return this
};
a.zIndex=f;
a.attr({zIndex:f});
return a
};
c.SVGRenderer.prototype.arc3dPath=function(f){var o=f.x,S=f.y,d=f.start,a=f.end-1e-05,g=f.r,h=f.innerR,i=f.depth,j=f.alpha,O=f.beta,P=r(d),b=q(d),T=r(a),N=q(a),w=g*r(O),A=g*r(j),R=h*r(O),e=h*r(j),p=i*q(O),B=i*q(j),i=["M",o+w*P,S+A*b],i=i.concat(v(o,S,w,A,d,a,0,0)),i=i.concat(["L",o+R*T,S+e*N]),i=i.concat(v(o,S,R,e,a,d,0,0)),i=i.concat(["Z"]),f=(f.start+f.end)/2,f=q(O)*r(f)+q(-j)*q(-f),Q=O>0?s/2:0,x=j>0?0:s/2,Q=d>-Q?d:a>-Q?-Q:d,y=a<s-x?a:d<s-x?s-x:a,x=["M",o+w*r(Q),S+A*q(Q)],x=x.concat(v(o,S,w,A,Q,y,0,0)),x=x.concat(["L",o+w*r(y)+p,S+A*q(y)+B]),x=x.concat(v(o,S,w,A,y,Q,p,B)),x=x.concat(["Z"]),Q=["M",o+R*P,S+e*b],Q=Q.concat(v(o,S,R,e,d,a,0,0)),Q=Q.concat(["L",o+R*r(a)+p,S+e*q(a)+B]),Q=Q.concat(v(o,S,R,e,a,d,p,B)),Q=Q.concat(["Z"]),P=["M",o+w*P,S+A*b,"L",o+w*P+p,S+A*b+B,"L",o+R*P+p,S+e*b+B,"L",o+R*P,S+e*b,"Z"],o=["M",o+w*T,S+A*N,"L",o+w*T+p,S+A*N+B,"L",o+R*T+p,S+e*N+B,"L",o+R*T,S+e*N,"Z"],T=h+(g-h)/2,S=Math.abs(f*2*T);
g*=f;
h*=f;
d=(q(O)*r(d)+q(-j)*q(-d))*T;
a=(q(O)*r(a)+q(-j)*q(-a))*T;
return{top:i,zTop:S*100,out:x,zOut:g*100,inn:Q,zInn:h*100,side1:P,zSide1:d*100,side2:o,zSide2:a*100,zAll:f}
};
c.Chart.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled
};
c.wrap(c.Chart.prototype,"isInsidePlot",function(a){return this.is3d()?!0:a.apply(this,[].slice.call(arguments,1))
});
c.wrap(c.Chart.prototype,"init",function(b){var a=arguments;
a[1]=c.merge({chart:{options3d:{enabled:!1,alpha:0,beta:0,depth:100,viewDistance:25,frame:{bottom:{size:1,color:"rgba(255,255,255,0)"},side:{size:1,color:"rgba(255,255,255,0)"},back:{size:1,color:"rgba(255,255,255,0)"}}}}},a[1]);
b.apply(this,[].slice.call(a,1))
});
c.wrap(c.Chart.prototype,"setChartSize",function(d){d.apply(this,[].slice.call(arguments,1));
if(this.is3d()){var a=this.inverted,b=this.clipBox,e=this.margin;
b[a?"y":"x"]=-(e[3]||0);
b[a?"x":"y"]=-(e[0]||0);
b[a?"height":"width"]=this.chartWidth+(e[3]||0)+(e[1]||0);
b[a?"width":"height"]=this.chartHeight+(e[0]||0)+(e[2]||0)
}});
c.wrap(c.Chart.prototype,"redraw",function(a){if(this.is3d()){this.isDirtyBox=!0
}a.apply(this,[].slice.call(arguments,1))
});
c.Chart.prototype.retrieveStacks=function(){var e={},a=this.options.plotOptions[this.options.chart.type],b=a.stacking,d=1;
if(a.grouping||!b){return this.series
}c.each(this.series,function(f){e[f.options.stack||0]?e[f.options.stack||0].series.push(f):(e[f.options.stack||0]={series:[f],position:d},d++)
});
e.totalStacks=d+1;
return e
};
c.wrap(c.Axis.prototype,"init",function(b){var a=arguments;
if(a[1].is3d()){a[2].tickWidth=c.pick(a[2].tickWidth,0),a[2].gridLineWidth=c.pick(a[2].gridLineWidth,1)
}b.apply(this,[].slice.call(arguments,1))
});
c.wrap(c.Axis.prototype,"render",function(d){d.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var b=this.chart,f=b.renderer,j=b.options.chart.options3d,p=j.alpha,D=j.beta*(b.yAxis[0].opposite?-1:1),e=j.frame,h=e.bottom,i=e.back,e=e.side,B=j.depth,a=this.height,g=this.width,o=this.left,A=this.top,j={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:B,vd:j.viewDistance};
if(this.horiz){this.axisLine&&this.axisLine.hide(),D={x:o,y:A+(b.yAxis[0].reversed?-h.size:a),z:0,width:g,height:h.size,depth:B,alpha:p,beta:D,origin:j},this.bottomFrame?this.bottomFrame.animate(D):this.bottomFrame=f.cuboid(D).attr({fill:h.color,zIndex:b.yAxis[0].reversed&&p>0?4:-1}).css({stroke:h.color}).add()
}else{var C={x:o,y:A,z:B+1,width:g,height:a+h.size,depth:i.size,alpha:p,beta:D,origin:j};
this.backFrame?this.backFrame.animate(C):this.backFrame=f.cuboid(C).attr({fill:i.color,zIndex:-3}).css({stroke:i.color}).add();
this.axisLine&&this.axisLine.hide();
b={x:(b.yAxis[0].opposite?g:0)+o-e.size,y:A,z:0,width:e.size,height:a+h.size,depth:B+i.size,alpha:p,beta:D,origin:j};
this.sideFrame?this.sideFrame.animate(b):this.sideFrame=f.cuboid(b).attr({fill:e.color,zIndex:-2}).css({stroke:e.color}).add()
}}});
c.wrap(c.Axis.prototype,"getPlotLinePath",function(d){var a=d.apply(this,[].slice.call(arguments,1));
if(!this.chart.is3d()){return a
}if(a===null){return a
}var b=this.chart,e=b.options.chart.options3d,f=e.depth;
e.origin={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:f,vd:e.viewDistance};
var a=[{x:a[1],y:a[2],z:this.horiz||this.opposite?f:0},{x:a[1],y:a[2],z:f},{x:a[4],y:a[5],z:f},{x:a[4],y:a[5],z:this.horiz||this.opposite?0:f}],f=b.options.inverted?e.beta:e.alpha,g=b.options.inverted?e.alpha:e.beta;
g*=b.yAxis[0].opposite?-1:1;
a=u(a,f,g,e.origin);
return a=this.chart.renderer.toLinePath(a,!1)
});
c.wrap(c.Tick.prototype,"getMarkPath",function(d){var a=d.apply(this,[].slice.call(arguments,1));
if(!this.axis.chart.is3d()){return a
}var b=this.axis.chart,e=b.options.chart.options3d,f={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:e.depth,vd:e.viewDistance},a=[{x:a[1],y:a[2],z:0},{x:a[4],y:a[5],z:0}],g=b.inverted?e.beta:e.alpha,e=b.inverted?e.alpha:e.beta;
e*=b.yAxis[0].opposite?-1:1;
a=u(a,g,e,f);
return a=["M",a[0].x,a[0].y,"L",a[1].x,a[1].y]
});
c.wrap(c.Tick.prototype,"getLabelPosition",function(d){var a=d.apply(this,[].slice.call(arguments,1));
if(!this.axis.chart.is3d()){return a
}var b=this.axis.chart,e=b.options.chart.options3d,f={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:e.depth,vd:e.viewDistance},g=b.inverted?e.beta:e.alpha,e=b.inverted?e.alpha:e.beta;
e*=b.yAxis[0].opposite?-1:1;
return a=u([{x:a.x,y:a.y,z:0}],g,e,f)[0]
});
c.wrap(c.Axis.prototype,"drawCrosshair",function(b){var a=arguments;
this.chart.is3d()&&a[2]&&(a[2]={plotX:a[2].plotXold||a[2].plotX,plotY:a[2].plotYold||a[2].plotY});
b.apply(this,[].slice.call(a,1))
});
c.wrap(c.seriesTypes.column.prototype,"translate",function(e){e.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var a=this.chart,b=a.options,d=b.plotOptions[this.chart.options.chart.type],b=b.chart.options3d,f=d.depth||25,g={x:a.plotWidth/2,y:a.plotHeight/2,z:b.depth,vd:b.viewDistance},h=b.alpha,i=b.beta*(a.yAxis[0].opposite?-1:1),j=(d.stacking?this.options.stack||0:this._i)*(f+(d.groupZPadding||1));
d.grouping!==!1&&(j=0);
j+=d.groupZPadding||1;
c.each(this.data,function(o){var p=o.shapeArgs,x=o.tooltipPos;
o.shapeType="cuboid";
p.alpha=h;
p.beta=i;
p.z=j;
p.origin=g;
p.depth=f;
x=u([{x:x[0],y:x[1],z:j}],h,i,g)[0];
o.tooltipPos=[x.x,x.y]
})
}});
c.wrap(c.seriesTypes.column.prototype,"animate",function(e){if(this.chart.is3d()){var a=arguments[1],b=this.yAxis,d=this,f=this.yAxis.reversed;
if(c.svg){a?c.each(d.data,function(g){g.height=g.shapeArgs.height;
g.shapeArgs.height=1;
if(!f){g.shapeArgs.y=g.stackY?g.plotY+b.translate(g.stackY):g.plotY+(g.negative?-g.height:g.height)
}}):(c.each(d.data,function(g){g.shapeArgs.height=g.height;
if(!f){g.shapeArgs.y=g.plotY-(g.negative?g.height:0)
}g.graphic&&g.graphic.animate(g.shapeArgs,d.options.animation)
}),d.animate=null)
}}else{e.apply(this,[].slice.call(arguments,1))
}});
c.wrap(c.seriesTypes.column.prototype,"init",function(d){d.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var a=this.chart.options.plotOptions.column.grouping,b=this.chart.options.plotOptions.column.stacking,e=this.options.zIndex;
if(!e&&(a===void 0||a)&&b){a=this.chart.retrieveStacks();
b=this.options.stack||0;
for(e=0;
e<a[b].series.length;
e++){if(a[b].series[e]===this){break
}}e=a.totalStacks*10-10*(a.totalStacks-a[b].position)-e;
this.options.zIndex=e
}}});
c.seriesTypes.columnrange&&c.wrap(c.seriesTypes.columnrange.prototype,"drawPoints",n);
c.wrap(c.seriesTypes.column.prototype,"drawPoints",n);
var m=c.getOptions();
m.plotOptions.cylinder=c.merge(m.plotOptions.column);
m=c.extendClass(c.seriesTypes.column,{type:"cylinder"});
c.seriesTypes.cylinder=m;
c.wrap(c.seriesTypes.cylinder.prototype,"translate",function(e){e.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var a=this.chart,b=a.options,d=b.plotOptions.cylinder,b=b.chart.options3d,f=d.depth||0,g={x:a.inverted?a.plotHeight/2:a.plotWidth/2,y:a.inverted?a.plotWidth/2:a.plotHeight/2,z:b.depth,vd:b.viewDistance},h=b.alpha,i=d.stacking?(this.options.stack||0)*f:this._i*f;
i+=f/2;
d.grouping!==!1&&(i=0);
c.each(this.data,function(j){var o=j.shapeArgs;
j.shapeType="arc3d";
o.x+=f/2;
o.z=i;
o.start=0;
o.end=2*s;
o.r=f*0.95;
o.innerR=0;
o.depth=o.height*(1/q((90-h)*t))-i;
o.alpha=90-h;
o.beta=0;
o.origin=g
})
}});
c.wrap(c.seriesTypes.pie.prototype,"translate",function(e){e.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var a=this,b=a.chart,d=b.options,f=d.plotOptions.pie,g=f.depth||0,d=d.chart.options3d,h={x:b.plotWidth/2,y:b.plotHeight/2,z:d.depth},i=d.alpha,j=d.beta,o=f.stacking?(this.options.stack||0)*g:a._i*g;
o+=g/2;
f.grouping!==!1&&(o=0);
c.each(a.data,function(p){p.shapeType="arc3d";
var x=p.shapeArgs;
x.z=o;
x.depth=g*0.75;
x.origin=h;
x.alpha=i;
x.beta=j;
x=(x.end+x.start)/2;
p.slicedTranslation={translateX:k(r(x)*a.options.slicedOffset*r(i*t)),translateY:k(q(x)*a.options.slicedOffset*r(i*t))}
})
}});
c.wrap(c.seriesTypes.pie.prototype.pointClass.prototype,"haloPath",function(a){return this.series.chart.is3d()?[]:a.call(this)
});
c.wrap(c.seriesTypes.pie.prototype,"drawPoints",function(a){this.chart.is3d()&&c.each(this.data,function(b){var d=b.options.borderColor||b.color||b.series.userOptions.borderColor||b.series.color;
b.options.borderColor=d;
b.borderColor=d;
b.pointAttr[""].stroke=d;
b.pointAttr.hover.stroke=d;
b.pointAttr.select.stroke=d
});
a.apply(this,[].slice.call(arguments,1))
});
c.wrap(c.seriesTypes.pie.prototype,"drawDataLabels",function(a){a.apply(this,[].slice.call(arguments,1));
this.chart.is3d()&&c.each(this.data,function(b){var d=b.shapeArgs,e=d.r,f=d.depth,g=d.alpha*t,h=d.beta*t,d=(d.start+d.end)/2;
b.connector&&b.connector.translate(-e*(1-r(h))*r(d)+(r(d)>0?q(h)*f:0),-e*(1-r(g))*q(d)+(q(d)>0?q(g)*f:0));
b.dataLabel&&b.dataLabel.attr({x:b.dataLabel.connX+-e*(1-r(h))*r(d)+(r(d)>0?r(h)*f:0)-b.dataLabel.width/2,y:b.dataLabel.connY+-e*(1-r(g))*q(d)+(q(d)>0?q(g)*f:0)-b.dataLabel.height/2})
})
});
c.wrap(c.seriesTypes.pie.prototype,"addPoint",function(a){a.apply(this,[].slice.call(arguments,1));
this.chart.is3d()&&this.update()
});
c.wrap(c.seriesTypes.pie.prototype,"animate",function(e){if(this.chart.is3d()){var a=arguments[1],b=this.options.animation,d=this.center,f=this.group,g=this.markerGroup;
if(c.svg){if(b===!0&&(b={}),a){if(this.oldtranslateX=f.translateX,this.oldtranslateY=f.translateY,a={translateX:d[0],translateY:d[1],scaleX:0.001,scaleY:0.001},f.attr(a),g){g.attrSetters=f.attrSetters,g.attr(a)
}}else{a={translateX:this.oldtranslateX,translateY:this.oldtranslateY,scaleX:1,scaleY:1},f.animate(a,b),g&&g.animate(a,b),this.animate=null
}}}else{e.apply(this,[].slice.call(arguments,1))
}});
c.wrap(c.seriesTypes.scatter.prototype,"translate",function(e){e.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){var a=this.chart,b=this.chart.options.chart.options3d,d=b.alpha,f=b.beta,g={x:a.inverted?a.plotHeight/2:a.plotWidth/2,y:a.inverted?a.plotWidth/2:a.plotHeight/2,z:b.depth,vd:b.viewDistance},b=b.depth,h=a.options.zAxis||{min:0,max:b},i=b/(h.max-h.min);
c.each(this.data,function(j){var o={x:j.plotX,y:j.plotY,z:(j.z-h.min)*i},o=u([o],d,f,g)[0];
j.plotXold=j.plotX;
j.plotYold=j.plotY;
j.plotX=o.x;
j.plotY=o.y;
j.plotZ=o.z
})
}});
c.wrap(c.seriesTypes.scatter.prototype,"init",function(b){var a=b.apply(this,[].slice.call(arguments,1));
if(this.chart.is3d()){this.pointArrayMap=["x","y","z"],this.tooltipOptions.pointFormat=this.userOptions.tooltip?this.userOptions.tooltip.pointFormat||"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>":"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>"
}return a
});
if(c.VMLRenderer){c.setOptions({animate:!1}),c.VMLRenderer.prototype.cuboid=c.SVGRenderer.prototype.cuboid,c.VMLRenderer.prototype.cuboidPath=c.SVGRenderer.prototype.cuboidPath,c.VMLRenderer.prototype.toLinePath=c.SVGRenderer.prototype.toLinePath,c.VMLRenderer.prototype.createElement3D=c.SVGRenderer.prototype.createElement3D,c.VMLRenderer.prototype.arc3d=function(a){a=c.SVGRenderer.prototype.arc3d.call(this,a);
a.css({zIndex:a.zIndex});
return a
},c.VMLRenderer.prototype.arc3dPath=c.SVGRenderer.prototype.arc3dPath,c.Chart.prototype.renderSeries=function(){for(var b,a=this.series.length;
a--;
){b=this.series[a],b.translate(),b.setTooltipPoints&&b.setTooltipPoints(),b.render()
}},c.wrap(c.Axis.prototype,"render",function(a){a.apply(this,[].slice.call(arguments,1));
this.sideFrame&&(this.sideFrame.css({zIndex:0}),this.sideFrame.front.attr({fill:this.sideFrame.color}));
this.bottomFrame&&(this.bottomFrame.css({zIndex:1}),this.bottomFrame.front.attr({fill:this.bottomFrame.color}));
this.backFrame&&(this.backFrame.css({zIndex:0}),this.backFrame.front.attr({fill:this.backFrame.color}))
})
}})(Highcharts);