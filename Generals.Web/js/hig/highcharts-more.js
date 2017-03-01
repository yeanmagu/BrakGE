(function(x,Q){function m(a,b,c){this.init.call(this,a,b,c)
}var v=x.arrayMin,w=x.arrayMax,y=x.each,p=x.extend,u=x.merge,L=x.map,R=x.pick,S=x.pInt,H=x.getOptions().plotOptions,U=x.seriesTypes,D=x.extendClass,P=x.splat,C=x.wrap,K=x.Axis,q=x.Tick,s=x.Point,G=x.Pointer,V=x.CenteredSeriesMixin,T=x.TrackerMixin,h=x.Series,A=Math,M=A.round,r=A.floor,N=A.max,z=x.Color,o=function(){};
p(m.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;
d.chart=b;
if(b.angular){e.background={}
}d.options=a=u(e,a);
(a=a.background)&&y([].concat(P(a)).reverse(),function(f){var g=f.backgroundColor,f=u(d.defaultBackgroundOptions,f);
if(g){f.backgroundColor=g
}f.color=f.backgroundColor;
c.options.plotBands.unshift(f)
})
},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});
var t=K.prototype,q=q.prototype,F={getOffset:o,redraw:function(){this.isDirty=!1
},render:function(){this.isDirty=!1
},setScale:o,setCategories:o,setTitle:o},O={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=u(this.defaultOptions,this.defaultRadialOptions,a);
if(!a.plotBands){a.plotBands=[]
}},getOffset:function(){t.getOffset.call(this);
this.chart.axisOffset[this.side]=0;
this.center=this.pane.center=V.getCenter.call(this.pane)
},getLinePath:function(a,b){var c=this.center,b=R(b,c[2]/2-this.offset);
return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})
},setAxisTranslation:function(){t.setAxisTranslation.call(this);
if(this.center){this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0
}},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)
},setAxisSize:function(){t.setAxisSize.call(this);
if(this.isRadial){this.center=this.pane.center=x.CenteredSeriesMixin.getCenter.call(this.pane);
if(this.isCircular){this.sector=this.endAngleRad-this.startAngleRad
}this.len=this.width=this.height=this.center[2]*R(this.sector,1)/2
}},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,R(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)
},postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;
return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}
},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,g=[R(c.outerRadius,"100%"),c.innerRadius,R(c.thickness,10)],i=/%$/,j,k=this.isCircular;
this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(k||(g[0]=this.translate(a),g[1]=this.translate(b)),g=L(g,function(l){i.test(l)&&(l=S(l,10)*f/100);
return l
}),c.shape==="circle"||!k?(a=-Math.PI/2,b=Math.PI*1.5,j=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],g[0],g[0],{start:a,end:b,innerR:R(g[1],g[0]-g[2]),open:j}));
return d
},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),g,i,j;
c.isCircular?j=["M",d[0]+e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:c.options.gridLineInterpolation==="circle"?(a=c.translate(a))&&(j=c.getLinePath(0,a)):(y(e.xAxis,function(k){k.pane===c.pane&&(g=k)
}),j=[],a=c.translate(a),d=g.tickPositions,g.autoConnect&&(d=d.concat([d[0]])),b&&(d=[].concat(d).reverse()),y(d,function(l,k){i=g.getPosition(l,a);
j.push(k?"L":"M",i.x,i.y)
}));
return j
},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;
return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:0.5,middle:0.25,low:0}[c.align]*a[2]+(c.y||0)}
}};
C(t,"init",function(a,b,c){var i;
var d=b.angular,e=b.polar,f=c.isX,g=d&&f,j,k;
k=b.options;
var l=c.pane||0;
if(d){if(p(this,g?F:O),j=!f){this.defaultRadialOptions=this.defaultRadialGaugeOptions
}}else{if(e){p(this,O),this.defaultRadialOptions=(j=f)?this.defaultRadialXOptions:u(this.defaultYAxisOptions,this.defaultRadialYOptions)
}}a.call(this,b,c);
if(!g&&(d||e)){a=this.options;
if(!b.panes){b.panes=[]
}this.pane=(i=b.panes[l]=b.panes[l]||new m(P(k.pane)[l],b,this),l=i);
l=l.options;
b.inverted=!1;
k.chart.zoomType=null;
this.startAngleRad=b=(l.startAngle-90)*Math.PI/180;
this.endAngleRad=k=(R(l.endAngle,l.startAngle+360)-90)*Math.PI/180;
this.offset=a.offset||0;
if((this.isCircular=j)&&c.max===Q&&k-b===2*Math.PI){this.autoConnect=!0
}}});
C(q,"getPosition",function(a,b,c,d,e){var f=this.axis;
return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)
});
C(q,"getLabelPosition",function(a,b,f,g,i,j,k,c,d){var e=this.axis,B=j.y,n=j.align,l=(e.translate(this.pos)+e.startAngleRad+Math.PI/2)/Math.PI*180%360;
e.isRadial?(a=e.getPosition(this.pos,e.center[2]/2+R(j.distance,-25)),j.rotation==="auto"?g.attr({rotation:l}):B===null&&(B=e.chart.renderer.fontMetrics(g.styles.fontSize).b-g.getBBox().height/2),n===null&&(n=e.isCircular?l>20&&l<160?"left":l>200&&l<340?"right":"center":"center",g.attr({align:n})),a.x+=j.x,a.y+=B):a=a.call(this,b,f,g,i,j,k,c,d);
return a
});
C(q,"getMarkPath",function(a,b,c,d,e,f,g){var i=this.axis;
i.isRadial?(a=i.getPosition(this.pos,i.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,g);
return b
});
H.arearange=u(H.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});
U.arearange=D(U.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]
},pointValKey:"low",getSegments:function(){var a=this;
y(a.points,function(b){if(!a.options.connectNulls&&(b.low===null||b.high===null)){b.y=null
}else{if(b.low===null&&b.high!==null){b.y=b.high
}}});
h.prototype.getSegments.call(this)
},translate:function(){var a=this.yAxis;
U.area.prototype.translate.apply(this);
y(this.points,function(b){var c=b.low,d=b.high,e=b.plotY;
d===null&&c===null?b.y=null:c===null?(b.plotLow=b.plotY=null,b.plotHigh=a.translate(d,0,1,0,1)):d===null?(b.plotLow=e,b.plotHigh=null):(b.plotLow=e,b.plotHigh=a.translate(d,0,1,0,1))
})
},getSegmentPath:function(a){var b,c=[],d=a.length,e=h.prototype.getSegmentPath,f,g;
g=this.options;
var i=g.step;
for(b=HighchartsAdapter.grep(a,function(j){return j.plotLow!==null
});
d--;
){f=a[d],f.plotHigh!==null&&c.push({plotX:f.plotX,plotY:f.plotHigh})
}a=e.call(this,b);
if(i){i===!0&&(i="left"),g.step={left:"right",center:"center",right:"left"}[i]
}c=e.call(this,c);
g.step=i;
g=[].concat(a,c);
c[0]="L";
this.areaPath=this.areaPath.concat(a,c);
return g
},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=h.prototype,f=this.options.dataLabels,g,i=this.chart.inverted;
if(f.enabled||this._hasPointLabels){for(c=b;
c--;
){g=a[c],g.y=g.high,g._plotY=g.plotY,g.plotY=g.plotHigh,d[c]=g.dataLabel,g.dataLabel=g.dataLabelUpper,g.below=!1,i?(f.align="left",f.x=f.xHigh):f.y=f.yHigh
}e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);
for(c=b;
c--;
){g=a[c],g.dataLabelUpper=g.dataLabel,g.dataLabel=d[c],g.y=g.low,g.plotY=g._plotY,g.below=!0,i?(f.align="right",f.x=f.xLow):f.y=f.yLow
}e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)
}},alignDataLabel:function(){U.column.prototype.alignDataLabel.apply(this,arguments)
},getSymbol:U.column.prototype.getSymbol,drawPoints:o});
H.areasplinerange=u(H.arearange);
U.areasplinerange=D(U.arearange,{type:"areasplinerange",getPointSpline:U.spline.prototype.getPointSpline});
(function(){var a=U.column.prototype;
H.columnrange=u(H.column,H.arearange,{lineWidth:1,pointRange:null});
U.columnrange=D(U.arearange,{type:"columnrange",translate:function(){var b=this,c=b.yAxis,d;
a.translate.apply(b);
y(b.points,function(e){var f=e.shapeArgs,g=b.options.minPointLength,i;
e.tooltipPos=null;
e.plotHigh=d=c.translate(e.high,0,1,0,1);
e.plotLow=e.plotY;
i=d;
e=e.plotY-d;
e<g&&(g-=e,e+=g,i-=g/2);
f.height=e;
f.y=i
})
},trackerGroups:["group","dataLabels"],drawGraph:o,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})
})();
H.gauge=u(H.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});
T={type:"gauge",pointClass:D(s,{setState:function(a){this.state=a
}}),angular:!0,drawGraph:o,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabels"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;
this.generatePoints();
y(this.points,function(d){var e=u(b.dial,d.dial),f=S(R(e.radius,80))*c[2]/200,g=S(R(e.baseLength,70))*f/100,k=S(R(e.rearLength,10))*f/100,l=e.baseWidth||3,n=e.topWidth||1,j=b.overshoot,i=a.startAngleRad+a.translate(d.y,null,null,null,!0);
j&&typeof j==="number"?(j=j/180*Math.PI,i=Math.max(a.startAngleRad-j,Math.min(a.endAngleRad+j,i))):b.wrap===!1&&(i=Math.max(a.startAngleRad,Math.min(a.endAngleRad,i)));
i=i*180/Math.PI;
d.shapeType="path";
d.shapeArgs={d:e.path||["M",-k,-l/2,"L",g,-l/2,f,-n/2,f,n/2,g,l/2,-k,l/2,"z"],translateX:c[0],translateY:c[1],rotation:i};
d.plotX=c[0];
d.plotY=c[1]
})
},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;
y(a.points,function(i){var g=i.graphic,l=i.shapeArgs,j=l.d,k=u(d.dial,i.dial);
g?(g.animate(l),l.d=j):i.graphic=f[i.shapeType](l).attr({stroke:k.borderColor||"none","stroke-width":k.borderWidth||0,fill:k.backgroundColor||"black",rotation:l.rotation}).add(a.group)
});
c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,R(e.radius,5)).attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)
},animate:function(a){var b=this;
if(!a){y(b.points,function(c){var d=c.graphic;
d&&(d.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),d.animate({rotation:c.shapeArgs.rotation},b.options.animation))
}),b.animate=null
}},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);
h.prototype.render.call(this);
this.group.clip(this.chart.clipRect)
},setData:function(a,b){h.prototype.setData.call(this,a,!1);
this.processData();
this.generatePoints();
R(b,!0)&&this.chart.redraw()
},drawTracker:T&&T.drawTrackerPoint};
U.gauge=D(U.line,T);
H.boxplot=u(H.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2});
U.boxplot=D(U.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]
},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:o,translate:function(){var a=this.yAxis,b=this.pointArrayMap;
U.column.prototype.translate.apply(this);
y(this.points,function(c){y(b,function(d){c[d]!==null&&(c[d+"Plot"]=a.translate(c[d],0,1,0,1))
})
})
},drawPoints:function(){var aa=this,ad=aa.points,k=aa.options,l=aa.chart.renderer,n,E,I,i,ac,af,ab,W,ae,ag,ah,B,b,J,Z,X,f,c,e,g,j,Y,d=aa.doQuartiles!==!1,a=parseInt(aa.options.whiskerLength,10)/100;
y(ad,function(ai){ae=ai.graphic;
j=ai.shapeArgs;
ah={};
J={};
X={};
Y=ai.color||aa.color;
if(ai.plotY!==Q){if(n=ai.pointAttr[ai.selected?"selected":""],f=j.width,c=r(j.x),e=c+f,g=M(f/2),E=r(d?ai.q1Plot:ai.lowPlot),I=r(d?ai.q3Plot:ai.lowPlot),i=r(ai.highPlot),ac=r(ai.lowPlot),ah.stroke=ai.stemColor||k.stemColor||Y,ah["stroke-width"]=R(ai.stemWidth,k.stemWidth,k.lineWidth),ah.dashstyle=ai.stemDashStyle||k.stemDashStyle,J.stroke=ai.whiskerColor||k.whiskerColor||Y,J["stroke-width"]=R(ai.whiskerWidth,k.whiskerWidth,k.lineWidth),X.stroke=ai.medianColor||k.medianColor||Y,X["stroke-width"]=R(ai.medianWidth,k.medianWidth,k.lineWidth),X["stroke-linecap"]="round",ab=ah["stroke-width"]%2/2,W=c+g+ab,ag=["M",W,I,"L",W,i,"M",W,E,"L",W,ac],d&&(ab=n["stroke-width"]%2/2,W=r(W)+ab,E=r(E)+ab,I=r(I)+ab,c+=ab,e+=ab,B=["M",c,I,"L",c,E,"L",e,E,"L",e,I,"L",c,I,"z"]),a&&(ab=J["stroke-width"]%2/2,i+=ab,ac+=ab,b=["M",W-g*a,i,"L",W+g*a,i,"M",W-g*a,ac,"L",W+g*a,ac]),ab=X["stroke-width"]%2/2,af=M(ai.medianPlot)+ab,Z=["M",c,af,"L",e,af],ae){ai.stem.animate({d:ag}),a&&ai.whiskers.animate({d:b}),d&&ai.box.animate({d:B}),ai.medianShape.animate({d:Z})
}else{ai.graphic=ae=l.g().add(aa.group);
ai.stem=l.path(ag).attr(ah).add(ae);
if(a){ai.whiskers=l.path(b).attr(J).add(ae)
}if(d){ai.box=l.path(B).attr(n).add(ae)
}ai.medianShape=l.path(Z).attr(X).add(ae)
}}})
}});
H.errorbar=u(H.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},whiskerWidth:null});
U.errorbar=D(U.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]
},pointValKey:"high",doQuartiles:!1,drawDataLabels:U.arearange?U.arearange.prototype.drawDataLabels:o,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||U.column.prototype.getColumnMetrics.call(this)
}});
H.waterfall=u(H.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333"});
U.waterfall=D(U.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",init:function(a,b){b.stacking=!0;
U.column.prototype.init.call(this,a,b)
},translate:function(){var a=this.yAxis,b,c,d,e,f,g,i,j,k;
b=this.options.threshold;
U.column.prototype.translate.apply(this);
j=b;
d=this.points;
for(c=0,b=d.length;
c<b;
c++){e=d[c];
f=e.shapeArgs;
g=this.getStack(c);
k=g.points[this.index+","+c];
if(isNaN(e.y)){e.y=this.yData[c]
}i=N(j,j+e.y)+k[0];
f.y=a.translate(i,0,1);
e.isSum||e.isIntermediateSum?(f.y=a.translate(k[1],0,1),f.height=a.translate(k[0],0,1)-f.y):j+=g.total;
f.height<0&&(f.y+=f.height,f.height*=-1);
e.plotY=f.y=M(f.y)-this.borderWidth%2/2;
f.height=M(f.height);
e.yBottom=f.y+f.height
}},processData:function(a){var b=this.yData,c=this.points,d,e=b.length,f=this.options.threshold||0,g,k,l,n,j,i;
k=g=l=n=f;
for(i=0;
i<e;
i++){j=b[i],d=c&&c[i]?c[i]:{},j==="sum"||d.isSum?b[i]=k:j==="intermediateSum"||d.isIntermediateSum?(b[i]=g,g=f):(k+=j,g+=j),l=Math.min(k,l),n=Math.max(k,n)
}h.prototype.processData.call(this,a);
this.dataMin=l;
this.dataMax=n
},toYData:function(a){if(a.isSum){return"sum"
}else{if(a.isIntermediateSum){return"intermediateSum"
}}return a.y
},getAttribs:function(){U.column.prototype.getAttribs.apply(this,arguments);
var a=this.options,b=a.states,c=a.upColor||this.color,a=x.Color(c).brighten(0.1).get(),d=u(this.pointAttr),e=this.upColorProp;
d[""][e]=c;
d.hover[e]=b.hover.upColor||a;
d.select[e]=b.select.upColor||c;
y(this.points,function(f){if(f.y>0&&!f.color){f.pointAttr=d,f.color=c
}})
},getGraphPath:function(){var a=this.data,b=a.length,c=M(this.options.lineWidth+this.borderWidth)%2/2,d=[],e,f,g;
for(g=1;
g<b;
g++){f=a[g].shapeArgs,e=a[g-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[g-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f)
}return d
},getExtremes:o,getStack:function(a){var b=this.yAxis.stacks,c=this.stackKey;
this.processedYData[a]<this.options.threshold&&(c="-"+c);
return b[c][a]
},drawGraph:h.prototype.drawGraph});
H.bubble=u(H.scatter,{dataLabels:{format:"{point.z}",inside:!0,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0});
T=D(s,{haloPath:function(){return s.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)
}});
U.bubble=D(U.scatter,{type:"bubble",pointClass:T,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=this.options.marker,c=R(b.fillOpacity,0.5),a=a||b.fillColor||this.color;
c!==1&&(a=z(a).setOpacity(c).get("rgba"));
return a
},convertAttribs:function(){var a=h.prototype.convertAttribs.apply(this,arguments);
a.fill=this.applyOpacity(a.fill);
return a
},getRadii:function(a,b,c,d){var e,f,g,i=this.zData,j=[],k=this.options.sizeBy!=="width";
for(f=0,e=i.length;
f<e;
f++){g=b-a,g=g>0?(i[f]-a)/(b-a):0.5,k&&g>=0&&(g=Math.sqrt(g)),j.push(A.ceil(c+g*(d-c))/2)
}this.radii=j
},animate:function(a){var b=this.options.animation;
if(!a){y(this.points,function(c){var d=c.graphic,c=c.shapeArgs;
d&&c&&(d.attr("r",1),d.animate({r:c.r},b))
}),this.animate=null
}},translate:function(){var a,b=this.data,c,d,e=this.radii;
U.scatter.prototype.translate.call(this);
for(a=b.length;
a--;
){c=b[a],d=e?e[a]:0,c.negative=c.z<(this.options.zThreshold||0),d>=this.minPxSize/2?(c.shapeType="circle",c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox={x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=Q
}},drawLegendSymbol:function(a,b){var c=S(a.itemStyle.fontSize)/2;
b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup);
b.legendSymbol.isMarker=!0
},drawPoints:U.column.prototype.drawPoints,alignDataLabel:U.column.prototype.alignDataLabel});
K.prototype.beforePadding=function(){var E=this,f=this.len,i=this.chart,n=0,j=f,l=this.isXAxis,a=l?"xData":"yData",b=this.min,e={},k=A.min(i.plotWidth,i.plotHeight),I=Number.MAX_VALUE,B=-Number.MAX_VALUE,c=this.max-b,g=f/c,d=[];
this.tickPositions&&(y(this.series,function(J){var W=J.options;
if(J.bubblePadding&&(J.visible||!i.options.chart.ignoreHiddenSeries)){if(E.allowZoomOutside=!0,d.push(J),l){y(["minSize","maxSize"],function(Z){var X=W[Z],Y=/%$/.test(X),X=S(X);
e[Z]=Y?k*X/100:X
}),J.minPxSize=e.minSize,J=J.zData,J.length&&(I=A.min(I,A.max(v(J),W.displayNegative===!1?W.zThreshold:-Number.MAX_VALUE)),B=A.max(B,w(J)))
}}}),y(d,function(W){var X=W[a],Y=X.length,J;
l&&W.getRadii(I,B,e.minSize,e.maxSize);
if(c>0){for(;
Y--;
){typeof X[Y]==="number"&&(J=W.radii[Y],n=Math.min((X[Y]-b)*g-J,n),j=Math.max((X[Y]-b)*g+J,j))
}}}),d.length&&c>0&&R(this.options.min,this.userMin)===Q&&R(this.options.max,this.userMax)===Q&&(j-=f,g*=(f+n-j)/f,this.min+=n/g,this.max+=j/g))
};
(function(){function a(f,g,i){f.call(this,g,i);
if(this.chart.polar){this.closeSegment=function(j){var k=this.xAxis.center;
j.push("L",k[0],k[1])
},this.closedStacks=!0
}}function b(j,k){var l=this.chart,n=this.options.animation,B=this.group,g=this.markerGroup,f=this.xAxis.center,E=l.plotLeft,i=l.plotTop;
if(l.polar){if(l.renderer.isSVG){n===!0&&(n={}),k?(l={translateX:f[0]+E,translateY:f[1]+i,scaleX:0.001,scaleY:0.001},B.attr(l),g&&g.attr(l)):(l={translateX:E,translateY:i,scaleX:1,scaleY:1},B.animate(l,n),g&&g.animate(l,n),this.animate=null)
}}else{j.call(this,k)
}}var c=h.prototype,d=G.prototype,e;
c.toXY=function(f){var g,i=this.chart,j=f.plotX;
g=f.plotY;
f.rectPlotX=j;
f.rectPlotY=g;
j=(j/Math.PI*180+this.xAxis.pane.options.startAngle)%360;
j<0&&(j+=360);
f.clientX=j;
g=this.xAxis.postTranslate(f.plotX,this.yAxis.len-g);
f.plotX=f.polarPlotX=g.x-i.plotLeft;
f.plotY=f.polarPlotY=g.y-i.plotTop
};
c.orderTooltipPoints=function(f){if(this.chart.polar&&(f.sort(function(g,i){return g.clientX-i.clientX
}),f[0])){f[0].wrappedClientX=f[0].clientX+360,f.push(f[0])
}};
U.area&&C(U.area.prototype,"init",a);
U.areaspline&&C(U.areaspline.prototype,"init",a);
U.spline&&C(U.spline.prototype,"getPointSpline",function(J,j,g,i){var I,f,E,k,l,B,n;
if(this.chart.polar){I=g.plotX;
f=g.plotY;
J=j[i-1];
E=j[i+1];
this.connectEnds&&(J||(J=j[j.length-2]),E||(E=j[1]));
if(J&&E){k=J.plotX,l=J.plotY,j=E.plotX,B=E.plotY,k=(1.5*I+k)/2.5,l=(1.5*f+l)/2.5,E=(1.5*I+j)/2.5,n=(1.5*f+B)/2.5,j=Math.sqrt(Math.pow(k-I,2)+Math.pow(l-f,2)),B=Math.sqrt(Math.pow(E-I,2)+Math.pow(n-f,2)),k=Math.atan2(l-f,k-I),l=Math.atan2(n-f,E-I),n=Math.PI/2+(k+l)/2,Math.abs(k-n)>Math.PI/2&&(n-=Math.PI),k=I+Math.cos(n)*j,l=f+Math.sin(n)*j,E=I+Math.cos(Math.PI+n)*B,n=f+Math.sin(Math.PI+n)*B,g.rightContX=E,g.rightContY=n
}i?(g=["C",J.rightContX||J.plotX,J.rightContY||J.plotY,k||I,l||f,I,f],J.rightContX=J.rightContY=null):g=["M",I,f]
}else{g=J.call(this,j,g,i)
}return g
});
C(c,"translate",function(f){f.call(this);
if(this.chart.polar&&!this.preventPostTranslate){for(var f=this.points,g=f.length;
g--;
){this.toXY(f[g])
}}});
C(c,"getSegmentPath",function(f,g){var i=this.points;
if(this.chart.polar&&this.options.connectEnds!==!1&&g[g.length-1]===i[i.length-1]&&i[0].y!==null){this.connectEnds=!0,g=[].concat(g,[i[0]])
}return f.call(this,g)
});
C(c,"animate",b);
C(c,"setTooltipPoints",function(f,g){this.chart.polar&&p(this.xAxis,{tooltipLen:360});
return f.call(this,g)
});
if(U.column){e=U.column.prototype,C(e,"animate",b),C(e,"translate",function(f){var g=this.xAxis,i=this.yAxis.len,j=g.center,k=g.startAngleRad,l=this.chart.renderer,n,B;
this.preventPostTranslate=!0;
f.call(this);
if(g.isRadial){g=this.points;
for(B=g.length;
B--;
){n=g[B],f=n.barX+k,n.shapeType="path",n.shapeArgs={d:l.symbols.arc(j[0],j[1],i-n.plotY,null,{start:f,end:f+n.pointWidth,innerR:i-R(n.yBottom,i)})},this.toXY(n),n.tooltipPos=[n.plotX,n.plotY],n.ttBelow=n.plotY>j[1]
}}}),C(e,"alignDataLabel",function(f,g,i,j,k,l){if(this.chart.polar){f=g.rectPlotX/Math.PI*180;
if(j.align===null){j.align=f>20&&f<160?"left":f>200&&f<340?"right":"center"
}if(j.verticalAlign===null){j.verticalAlign=f<45||f>315?"bottom":f>135&&f<225?"top":"middle"
}c.alignDataLabel.call(this,g,i,j,k,l)
}else{f.call(this,g,i,j,k,l)
}})
}C(d,"getIndex",function(f,g){var i,j=this.chart,k;
j.polar?(k=j.xAxis[0].center,i=g.chartX-k[0]-j.plotLeft,j=g.chartY-k[1]-j.plotTop,i=180-Math.round(Math.atan2(i,j)/Math.PI*180)):i=f.call(this,g);
return i
});
C(d,"getCoordinates",function(f,g){var i=this.chart,j={xAxis:[],yAxis:[]};
i.polar?y(i.axes,function(k){var l=k.isXAxis,n=k.center,B=g.chartX-n[0]-i.plotLeft,n=g.chartY-n[1]-i.plotTop;
j[l?"xAxis":"yAxis"].push({axis:k,value:k.translate(l?Math.PI-Math.atan2(B,n):Math.sqrt(Math.pow(B,2)+Math.pow(n,2)),!0)})
}):j=f.call(this,g);
return j
})
})()
})(Highcharts);