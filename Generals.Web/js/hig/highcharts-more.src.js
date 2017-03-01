(function(ai,ak){var ae=ai.arrayMin,K=ai.arrayMax,aa=ai.each,aj=ai.extend,ao=ai.merge,ap=ai.map,ar=ai.pick,O=ai.pInt,aq=ai.getOptions().plotOptions,R=ai.seriesTypes,au=ai.extendClass,T=ai.splat,Z=ai.wrap,ac=ai.Axis,V=ai.Tick,Y=ai.Point,Q=ai.Pointer,U=ai.CenteredSeriesMixin,X=ai.TrackerMixin,ah=ai.Series,P=Math,ab=P.round,al=P.floor,at=P.max,ag=ai.Color,L=function(){};
function S(c,a,b){this.init.call(this,c,a,b)
}aj(S.prototype,{init:function(e,b,d){var f=this,a,c=f.defaultOptions;
f.chart=b;
if(b.angular){c.background={}
}f.options=e=ao(c,e);
a=e.background;
if(a){aa([].concat(T(a)).reverse(),function(h){var g=h.backgroundColor;
h=ao(f.defaultBackgroundOptions,h);
if(g){h.backgroundColor=g
}h.color=h.backgroundColor;
d.options.plotBands.unshift(h)
})
}},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});
var ad=ac.prototype,W=V.prototype;
var M={getOffset:L,redraw:function(){this.isDirty=false
},render:function(){this.isDirty=false
},setScale:L,setCategories:L,setTitle:L};
var N={isRadial:true,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:false,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:false,title:{x:4,text:null,rotation:90}},setOptions:function(b){var a=this.options=ao(this.defaultOptions,this.defaultRadialOptions,b);
if(!a.plotBands){a.plotBands=[]
}},getOffset:function(){ad.getOffset.call(this);
this.chart.axisOffset[this.side]=0;
this.center=this.pane.center=U.getCenter.call(this.pane)
},getLinePath:function(b,c){var a=this.center;
c=ar(c,a[2]/2-this.offset);
return this.chart.renderer.symbols.arc(this.left+a[0],this.top+a[1],c,c,{start:this.startAngleRad,end:this.endAngleRad,open:true,innerR:0})
},setAxisTranslation:function(){ad.setAxisTranslation.call(this);
if(this.center){if(this.isCircular){this.transA=(this.endAngleRad-this.startAngleRad)/((this.max-this.min)||1)
}else{this.transA=(this.center[2]/2)/((this.max-this.min)||1)
}if(this.isXAxis){this.minPixelPadding=this.transA*this.minPointOffset
}else{this.minPixelPadding=0
}}},beforeSetTickPositions:function(){if(this.autoConnect){this.max+=(this.categories&&1)||this.pointRange||this.closestPointRange||0
}},setAxisSize:function(){ad.setAxisSize.call(this);
if(this.isRadial){this.center=this.pane.center=ai.CenteredSeriesMixin.getCenter.call(this.pane);
if(this.isCircular){this.sector=this.endAngleRad-this.startAngleRad
}this.len=this.width=this.height=this.center[2]*ar(this.sector,1)/2
}},getPosition:function(b,a){return this.postTranslate(this.isCircular?this.translate(b):0,ar(this.isCircular?a:this.translate(b),this.center[2]/2)-this.offset)
},postTranslate:function(a,d){var c=this.chart,b=this.center;
a=this.startAngleRad+a;
return{x:c.plotLeft+b[0]+Math.cos(a)*d,y:c.plotTop+b[1]+Math.sin(a)*d}
},getPlotBandPath:function(c,m,g){var a=this.center,l=this.startAngleRad,d=a[2]/2,i=[ar(g.outerRadius,"100%"),g.innerRadius,ar(g.thickness,10)],h=/%$/,k,b,f,e=this.isCircular,j;
if(this.options.gridLineInterpolation==="polygon"){j=this.getPlotLinePath(c).concat(this.getPlotLinePath(m,true))
}else{if(!e){i[0]=this.translate(c);
i[1]=this.translate(m)
}i=ap(i,function(n){if(h.test(n)){n=(O(n,10)*d)/100
}return n
});
if(g.shape==="circle"||!e){k=-Math.PI/2;
b=Math.PI*1.5;
f=true
}else{k=l+this.translate(c);
b=l+this.translate(m)
}j=this.chart.renderer.symbols.arc(this.left+a[0],this.top+a[1],i[0],i[0],{start:k,end:b,innerR:ar(i[1],i[0]-i[2]),open:f})
}return j
},getPlotLinePath:function(h,f){var a=this,b=a.center,c=a.chart,d=a.getPosition(h),i,j,g,e;
if(a.isCircular){e=["M",b[0]+c.plotLeft,b[1]+c.plotTop,"L",d.x,d.y]
}else{if(a.options.gridLineInterpolation==="circle"){h=a.translate(h);
if(h){e=a.getLinePath(0,h)
}}else{aa(c.xAxis,function(k){if(k.pane===a.pane){i=k
}});
e=[];
h=a.translate(h);
g=i.tickPositions;
if(i.autoConnect){g=g.concat([g[0]])
}if(f){g=[].concat(g).reverse()
}aa(g,function(l,k){j=i.getPosition(l,h);
e.push(k?"L":"M",j.x,j.y)
})
}}return e
},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;
return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-({high:0.5,middle:0.25,low:0}[c.align]*a[2])+(c.y||0)}
}};
Z(ad,"init",function(n,c,p){var b=this,a=c.angular,m=c.polar,h=p.isX,g=a&&h,f,o,e,i,d=c.options,k=p.pane||0,j,l;
if(a){aj(this,g?M:N);
f=!h;
if(f){this.defaultRadialOptions=this.defaultRadialGaugeOptions
}}else{if(m){aj(this,N);
f=h;
this.defaultRadialOptions=h?this.defaultRadialXOptions:ao(this.defaultYAxisOptions,this.defaultRadialYOptions)
}}n.call(this,c,p);
if(!g&&(a||m)){i=this.options;
if(!c.panes){c.panes=[]
}this.pane=j=c.panes[k]=c.panes[k]||new S(T(d.pane)[k],c,b);
l=j.options;
c.inverted=false;
d.chart.zoomType=null;
this.startAngleRad=o=(l.startAngle-90)*Math.PI/180;
this.endAngleRad=e=(ar(l.endAngle,l.startAngle+360)-90)*Math.PI/180;
this.offset=i.offset||0;
this.isCircular=f;
if(f&&p.max===ak&&e-o===2*Math.PI){this.autoConnect=true
}}});
Z(W,"getPosition",function(e,b,d,f,c){var a=this.axis;
return a.getPosition?a.getPosition(d):e.call(this,b,d,f,c)
});
Z(W,"getLabelPosition",function(i,m,n,f,d,g,l,e,k){var c=this.axis,h=g.y,j,a=g.align,b=((c.translate(this.pos)+c.startAngleRad+Math.PI/2)/Math.PI*180)%360;
if(c.isRadial){j=c.getPosition(this.pos,(c.center[2]/2)+ar(g.distance,-25));
if(g.rotation==="auto"){f.attr({rotation:b})
}else{if(h===null){h=c.chart.renderer.fontMetrics(f.styles.fontSize).b-f.getBBox().height/2
}}if(a===null){if(c.isCircular){if(b>20&&b<160){a="left"
}else{if(b>200&&b<340){a="right"
}else{a="center"
}}}else{a="center"
}f.attr({align:a})
}j.x+=g.x;
j.y+=h
}else{j=i.call(this,m,n,f,d,g,l,e,k)
}return j
});
Z(W,"getMarkPath",function(d,i,j,g,h,c,e){var a=this.axis,b,f;
if(a.isRadial){b=a.getPosition(this.pos,a.center[2]/2+g);
f=["M",i,j,"L",b.x,b.y]
}else{f=d.call(this,i,j,g,h,c,e)
}return f
});
aq.arearange=ao(aq.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:true,dataLabels:{verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:false}}});
R.arearange=au(R.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]
},pointValKey:"low",getSegments:function(){var a=this;
aa(a.points,function(b){if(!a.options.connectNulls&&(b.low===null||b.high===null)){b.y=null
}else{if(b.low===null&&b.high!==null){b.y=b.high
}}});
ah.prototype.getSegments.call(this)
},translate:function(){var a=this,b=a.yAxis;
R.area.prototype.translate.apply(a);
aa(a.points,function(f){var d=f.low,c=f.high,e=f.plotY;
if(c===null&&d===null){f.y=null
}else{if(d===null){f.plotLow=f.plotY=null;
f.plotHigh=b.translate(c,0,1,0,1)
}else{if(c===null){f.plotLow=e;
f.plotHigh=null
}else{f.plotLow=e;
f.plotHigh=b.translate(c,0,1,0,1)
}}}})
},getSegmentPath:function(j){var g,c=[],d=j.length,a=ah.prototype.getSegmentPath,i,e,f,h=this.options,k=h.step,b;
g=HighchartsAdapter.grep(j,function(l){return l.plotLow!==null
});
while(d--){i=j[d];
if(i.plotHigh!==null){c.push({plotX:i.plotX,plotY:i.plotHigh})
}}f=a.call(this,g);
if(k){if(k===true){k="left"
}h.step={left:"right",center:"center",right:"left"}[k]
}b=a.call(this,c);
h.step=k;
e=[].concat(f,b);
b[0]="L";
this.areaPath=this.areaPath.concat(f,b);
return e
},drawDataLabels:function(){var a=this.data,e=a.length,c,f=[],h=ah.prototype,b=this.options.dataLabels,g,d=this.chart.inverted;
if(b.enabled||this._hasPointLabels){c=e;
while(c--){g=a[c];
g.y=g.high;
g._plotY=g.plotY;
g.plotY=g.plotHigh;
f[c]=g.dataLabel;
g.dataLabel=g.dataLabelUpper;
g.below=false;
if(d){b.align="left";
b.x=b.xHigh
}else{b.y=b.yHigh
}}if(h.drawDataLabels){h.drawDataLabels.apply(this,arguments)
}c=e;
while(c--){g=a[c];
g.dataLabelUpper=g.dataLabel;
g.dataLabel=f[c];
g.y=g.low;
g.plotY=g._plotY;
g.below=true;
if(d){b.align="right";
b.x=b.xLow
}else{b.y=b.yLow
}}if(h.drawDataLabels){h.drawDataLabels.apply(this,arguments)
}}},alignDataLabel:function(){R.column.prototype.alignDataLabel.apply(this,arguments)
},getSymbol:R.column.prototype.getSymbol,drawPoints:L});
aq.areasplinerange=ao(aq.arearange);
R.areasplinerange=au(R.arearange,{type:"areasplinerange",getPointSpline:R.spline.prototype.getPointSpline});
(function(){var a=R.column.prototype;
aq.columnrange=ao(aq.column,aq.arearange,{lineWidth:1,pointRange:null});
R.columnrange=au(R.arearange,{type:"columnrange",translate:function(){var c=this,d=c.yAxis,b;
a.translate.apply(c);
aa(c.points,function(h){var i=h.shapeArgs,g=c.options.minPointLength,f,e,j;
h.tooltipPos=null;
h.plotHigh=b=d.translate(h.high,0,1,0,1);
h.plotLow=h.plotY;
j=b;
e=h.plotY-b;
if(e<g){f=(g-e);
e+=f;
j-=f/2
}i.height=e;
i.y=j
})
},trackerGroups:["group","dataLabels"],drawGraph:L,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})
}());
aq.gauge=ao(aq.line,{dataLabels:{enabled:true,defer:false,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:false,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:false});
var af=au(Y,{setState:function(a){this.state=a
}});
var am={type:"gauge",pointClass:af,angular:true,drawGraph:L,fixedBox:true,forceDL:true,trackerGroups:["group","dataLabels"],translate:function(){var c=this,d=c.yAxis,b=c.options,a=d.center;
c.generatePoints();
aa(c.points,function(i){var g=ao(b.dial,i.dial),j=(O(ar(g.radius,80))*a[2])/200,e=(O(ar(g.baseLength,70))*j)/100,k=(O(ar(g.rearLength,10))*j)/100,f=g.baseWidth||3,m=g.topWidth||1,h=b.overshoot,l=d.startAngleRad+d.translate(i.y,null,null,null,true);
if(h&&typeof h==="number"){h=h/180*Math.PI;
l=Math.max(d.startAngleRad-h,Math.min(d.endAngleRad+h,l))
}else{if(b.wrap===false){l=Math.max(d.startAngleRad,Math.min(d.endAngleRad,l))
}}l=l*180/Math.PI;
i.shapeType="path";
i.shapeArgs={d:g.path||["M",-k,-f/2,"L",e,-f/2,j,-m/2,j,m/2,e,f/2,-k,f/2,"z"],translateX:a[0],translateY:a[1],rotation:l};
i.plotX=a[0];
i.plotY=a[1]
})
},drawPoints:function(){var f=this,a=f.yAxis.center,c=f.pivot,b=f.options,d=b.pivot,e=f.chart.renderer;
aa(f.points,function(j){var i=j.graphic,k=j.shapeArgs,g=k.d,h=ao(b.dial,j.dial);
if(i){i.animate(k);
k.d=g
}else{j.graphic=e[j.shapeType](k).attr({stroke:h.borderColor||"none","stroke-width":h.borderWidth||0,fill:h.backgroundColor||"black",rotation:k.rotation}).add(f.group)
}});
if(c){c.animate({translateX:a[0],translateY:a[1]})
}else{f.pivot=e.circle(0,0,ar(d.radius,5)).attr({"stroke-width":d.borderWidth||0,stroke:d.borderColor||"silver",fill:d.backgroundColor||"black"}).translate(a[0],a[1]).add(f.group)
}},animate:function(a){var b=this;
if(!a){aa(b.points,function(d){var c=d.graphic;
if(c){c.attr({rotation:b.yAxis.startAngleRad*180/Math.PI});
c.animate({rotation:d.shapeArgs.rotation},b.options.animation)
}});
b.animate=null
}},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);
ah.prototype.render.call(this);
this.group.clip(this.chart.clipRect)
},setData:function(a,b){ah.prototype.setData.call(this,a,false);
this.processData();
this.generatePoints();
if(ar(b,true)){this.chart.redraw()
}},drawTracker:X&&X.drawTrackerPoint};
R.gauge=au(R.line,am);
aq.boxplot=ao(aq.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25CF</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2});
R.boxplot=au(R.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]
},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:L,translate:function(){var b=this,c=b.yAxis,a=b.pointArrayMap;
R.column.prototype.translate.apply(b);
aa(b.points,function(d){aa(a,function(e){if(d[e]!==null){d[e+"Plot"]=c.translate(d[e],0,1,0,1)
}})
})
},drawPoints:function(){var t=this,a=t.points,m=t.options,c=t.chart,s=c.renderer,q,r,u,g,o,p,C,h,f,w,A,n,z,b,l,j,B,i,x,k,v,e,d=t.doQuartiles!==false,y=parseInt(t.options.whiskerLength,10)/100;
aa(a,function(D){f=D.graphic;
v=D.shapeArgs;
A={};
b={};
j={};
e=D.color||t.color;
if(D.plotY!==ak){q=D.pointAttr[D.selected?"selected":""];
B=v.width;
i=al(v.x);
x=i+B;
k=ab(B/2);
r=al(d?D.q1Plot:D.lowPlot);
u=al(d?D.q3Plot:D.lowPlot);
g=al(D.highPlot);
o=al(D.lowPlot);
A.stroke=D.stemColor||m.stemColor||e;
A["stroke-width"]=ar(D.stemWidth,m.stemWidth,m.lineWidth);
A.dashstyle=D.stemDashStyle||m.stemDashStyle;
b.stroke=D.whiskerColor||m.whiskerColor||e;
b["stroke-width"]=ar(D.whiskerWidth,m.whiskerWidth,m.lineWidth);
j.stroke=D.medianColor||m.medianColor||e;
j["stroke-width"]=ar(D.medianWidth,m.medianWidth,m.lineWidth);
j["stroke-linecap"]="round";
C=(A["stroke-width"]%2)/2;
h=i+k+C;
w=["M",h,u,"L",h,g,"M",h,r,"L",h,o];
if(d){C=(q["stroke-width"]%2)/2;
h=al(h)+C;
r=al(r)+C;
u=al(u)+C;
i+=C;
x+=C;
n=["M",i,u,"L",i,r,"L",x,r,"L",x,u,"L",i,u,"z"]
}if(y){C=(b["stroke-width"]%2)/2;
g=g+C;
o=o+C;
z=["M",h-k*y,g,"L",h+k*y,g,"M",h-k*y,o,"L",h+k*y,o]
}C=(j["stroke-width"]%2)/2;
p=ab(D.medianPlot)+C;
l=["M",i,p,"L",x,p];
if(f){D.stem.animate({d:w});
if(y){D.whiskers.animate({d:z})
}if(d){D.box.animate({d:n})
}D.medianShape.animate({d:l})
}else{D.graphic=f=s.g().add(t.group);
D.stem=s.path(w).attr(A).add(f);
if(y){D.whiskers=s.path(z).attr(b).add(f)
}if(d){D.box=s.path(n).attr(q).add(f)
}D.medianShape=s.path(l).attr(j).add(f)
}}})
}});
aq.errorbar=ao(aq.boxplot,{color:"#000000",grouping:false,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},whiskerWidth:null});
R.errorbar=au(R.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]
},pointValKey:"high",doQuartiles:false,drawDataLabels:R.arearange?R.arearange.prototype.drawDataLabels:L,getColumnMetrics:function(){return(this.linkedParent&&this.linkedParent.columnMetrics)||R.column.prototype.getColumnMetrics.call(this)
}});
aq.waterfall=ao(aq.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333"});
R.waterfall=au(R.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",init:function(a,b){b.stacking=true;
R.column.prototype.init.call(this,a,b)
},translate:function(){var h=this,d=h.options,a=h.yAxis,c,b,f,e,i,j,m,g,k,l=d.threshold;
R.column.prototype.translate.apply(this);
g=l;
f=h.points;
for(b=0,c=f.length;
b<c;
b++){e=f[b];
i=e.shapeArgs;
j=h.getStack(b);
k=j.points[h.index+","+b];
if(isNaN(e.y)){e.y=h.yData[b]
}m=at(g,g+e.y)+k[0];
i.y=a.translate(m,0,1);
if(e.isSum||e.isIntermediateSum){i.y=a.translate(k[1],0,1);
i.height=a.translate(k[0],0,1)-i.y
}else{g+=j.total
}if(i.height<0){i.y+=i.height;
i.height*=-1
}e.plotY=i.y=ab(i.y)-(h.borderWidth%2)/2;
i.height=ab(i.height);
e.yBottom=i.y+i.height
}},processData:function(d){var i=this,f=i.options,n=i.yData,h=i.points,g,a=n.length,l=f.threshold||0,j,k,c,b,m,e;
k=j=c=b=l;
for(e=0;
e<a;
e++){m=n[e];
g=h&&h[e]?h[e]:{};
if(m==="sum"||g.isSum){n[e]=k
}else{if(m==="intermediateSum"||g.isIntermediateSum){n[e]=j;
j=l
}else{k+=m;
j+=m
}}c=Math.min(k,c);
b=Math.max(k,b)
}ah.prototype.processData.call(this,d);
i.dataMin=c;
i.dataMax=b
},toYData:function(a){if(a.isSum){return"sum"
}else{if(a.isIntermediateSum){return"intermediateSum"
}}return a.y
},getAttribs:function(){R.column.prototype.getAttribs.apply(this,arguments);
var c=this,b=c.options,e=b.states,f=b.upColor||c.color,a=ai.Color(f).brighten(0.1).get(),d=ao(c.pointAttr),g=c.upColorProp;
d[""][g]=f;
d.hover[g]=e.hover.upColor||a;
d.select[g]=e.select.upColor||f;
aa(c.points,function(h){if(h.y>0&&!h.color){h.pointAttr=d;
h.color=f
}})
},getGraphPath:function(){var b=this.data,e=b.length,f=this.options.lineWidth+this.borderWidth,h=ab(f)%2/2,i=[],g="M",d="L",k,j,c,a;
for(c=1;
c<e;
c++){j=b[c].shapeArgs;
k=b[c-1].shapeArgs;
a=[g,k.x+k.width,k.y+h,d,j.x,k.y+h];
if(b[c-1].y<0){a[2]+=k.height;
a[5]+=k.height
}i=i.concat(a)
}return i
},getExtremes:L,getStack:function(b){var a=this.yAxis,d=a.stacks,c=this.stackKey;
if(this.processedYData[b]<this.options.threshold){c="-"+c
}return d[c][b]
},drawGraph:ah.prototype.drawGraph});
aq.bubble=ao(aq.scatter,{dataLabels:{format:"{point.z}",inside:true,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0});
var an=au(Y,{haloPath:function(){return Y.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)
}});
R.bubble=au(R.scatter,{type:"bubble",pointClass:an,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:true,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var c=this.options.marker,b=ar(c.fillOpacity,0.5);
a=a||c.fillColor||this.color;
if(b!==1){a=ag(a).setOpacity(b).get("rgba")
}return a
},convertAttribs:function(){var a=ah.prototype.convertAttribs.apply(this,arguments);
a.fill=this.applyOpacity(a.fill);
return a
},getRadii:function(j,i,d,c){var b,a,e,h=this.zData,f=[],g=this.options.sizeBy!=="width",k;
for(a=0,b=h.length;
a<b;
a++){k=i-j;
e=k>0?(h[a]-j)/(i-j):0.5;
if(g&&e>=0){e=Math.sqrt(e)
}f.push(P.ceil(d+e*(c-d))/2)
}this.radii=f
},animate:function(b){var a=this.options.animation;
if(!b){aa(this.points,function(d){var c=d.graphic,e=d.shapeArgs;
if(c&&e){c.attr("r",1);
c.animate({r:e.r},a)
}});
this.animate=null
}},translate:function(){var b,a=this.data,c,e,d=this.radii;
R.scatter.prototype.translate.call(this);
b=a.length;
while(b--){c=a[b];
e=d?d[b]:0;
c.negative=c.z<(this.options.zThreshold||0);
if(e>=this.minPxSize/2){c.shapeType="circle";
c.shapeArgs={x:c.plotX,y:c.plotY,r:e};
c.dlBox={x:c.plotX-e,y:c.plotY-e,width:2*e,height:2*e}
}else{c.shapeArgs=c.plotY=c.dlBox=ak
}}},drawLegendSymbol:function(b,a){var c=O(b.itemStyle.fontSize)/2;
a.legendSymbol=this.chart.renderer.circle(c,b.baseline-c,c).attr({zIndex:3}).add(a.legendGroup);
a.legendSymbol.isMarker=true
},drawPoints:R.column.prototype.drawPoints,alignDataLabel:R.column.prototype.alignDataLabel});
ac.prototype.beforePadding=function(){var b=this,c=this.len,d=this.chart,j=0,i=c,g=this.isXAxis,e=g?"xData":"yData",h=this.min,f={},l=P.min(d.plotWidth,d.plotHeight),o=Number.MAX_VALUE,n=-Number.MAX_VALUE,k=this.max-h,m=c/k,a=[];
if(this.tickPositions){aa(this.series,function(r){var p=r.options,q;
if(r.bubblePadding&&(r.visible||!d.options.chart.ignoreHiddenSeries)){b.allowZoomOutside=true;
a.push(r);
if(g){aa(["minSize","maxSize"],function(u){var t=p[u],s=/%$/.test(t);
t=O(t);
f[u]=s?l*t/100:t
});
r.minPxSize=f.minSize;
q=r.zData;
if(q.length){o=P.min(o,P.max(ae(q),p.displayNegative===false?p.zThreshold:-Number.MAX_VALUE));
n=P.max(n,K(q))
}}}});
aa(a,function(r){var s=r[e],p=s.length,q;
if(g){r.getRadii(o,n,f.minSize,f.maxSize)
}if(k>0){while(p--){if(typeof s[p]==="number"){q=r.radii[p];
j=Math.min(((s[p]-h)*m)-q,j);
i=Math.max(((s[p]-h)*m)+q,i)
}}}});
if(a.length&&k>0&&ar(this.options.min,this.userMin)===ak&&ar(this.options.max,this.userMax)===ak){i-=c;
m*=(c+j-i)/c;
this.min+=j/m;
this.max+=i/m
}}};
(function(){var e=ah.prototype,c=Q.prototype,a;
e.toXY=function(j){var k,f=this.chart,h=j.plotX,i=j.plotY,g;
j.rectPlotX=h;
j.rectPlotY=i;
g=((h/Math.PI*180)+this.xAxis.pane.options.startAngle)%360;
if(g<0){g+=360
}j.clientX=g;
k=this.xAxis.postTranslate(j.plotX,this.yAxis.len-i);
j.plotX=j.polarPlotX=k.x-f.plotLeft;
j.plotY=j.polarPlotY=k.y-f.plotTop
};
e.orderTooltipPoints=function(f){if(this.chart.polar){f.sort(function(g,h){return g.clientX-h.clientX
});
if(f[0]){f[0].wrappedClientX=f[0].clientX+360;
f.push(f[0])
}}};
function b(h,f,g){h.call(this,f,g);
if(this.chart.polar){this.closeSegment=function(j){var i=this.xAxis.center;
j.push("L",i[0],i[1])
};
this.closedStacks=true
}}if(R.area){Z(R.area.prototype,"init",b)
}if(R.areaspline){Z(R.areaspline.prototype,"init",b)
}if(R.spline){Z(R.spline.prototype,"getPointSpline",function(l,q,k,v){var m,r=1.5,s=r+1,i,j,x,f,y,z,g,h,B,C,o,p,t,u,A,n,w;
if(this.chart.polar){i=k.plotX;
j=k.plotY;
x=q[v-1];
f=q[v+1];
if(this.connectEnds){if(!x){x=q[q.length-2]
}if(!f){f=q[1]
}}if(x&&f){y=x.plotX;
z=x.plotY;
g=f.plotX;
h=f.plotY;
B=(r*i+y)/s;
C=(r*j+z)/s;
o=(r*i+g)/s;
p=(r*j+h)/s;
t=Math.sqrt(Math.pow(B-i,2)+Math.pow(C-j,2));
u=Math.sqrt(Math.pow(o-i,2)+Math.pow(p-j,2));
A=Math.atan2(C-j,B-i);
n=Math.atan2(p-j,o-i);
w=(Math.PI/2)+((A+n)/2);
if(Math.abs(A-w)>Math.PI/2){w-=Math.PI
}B=i+Math.cos(w)*t;
C=j+Math.sin(w)*t;
o=i+Math.cos(Math.PI+w)*u;
p=j+Math.sin(Math.PI+w)*u;
k.rightContX=o;
k.rightContY=p
}if(!v){m=["M",i,j]
}else{m=["C",x.rightContX||x.plotX,x.rightContY||x.plotY,B||i,C||j,i,j];
x.rightContX=x.rightContY=null
}}else{m=l.call(this,q,k,v)
}return m
})
}Z(e,"translate",function(h){h.call(this);
if(this.chart.polar&&!this.preventPostTranslate){var g=this.points,f=g.length;
while(f--){this.toXY(g[f])
}}});
Z(e,"getSegmentPath",function(g,h){var f=this.points;
if(this.chart.polar&&this.options.connectEnds!==false&&h[h.length-1]===f[f.length-1]&&f[0].y!==null){this.connectEnds=true;
h=[].concat(h,[f[0]])
}return g.call(this,h)
});
function d(o,k){var i=this.chart,f=this.options.animation,j=this.group,l=this.markerGroup,h=this.xAxis.center,m=i.plotLeft,n=i.plotTop,g;
if(i.polar){if(i.renderer.isSVG){if(f===true){f={}
}if(k){g={translateX:h[0]+m,translateY:h[1]+n,scaleX:0.001,scaleY:0.001};
j.attr(g);
if(l){l.attr(g)
}}else{g={translateX:m,translateY:n,scaleX:1,scaleY:1};
j.animate(g,f);
if(l){l.animate(g,f)
}this.animate=null
}}}else{o.call(this,k)
}}Z(e,"animate",d);
Z(e,"setTooltipPoints",function(f,g){if(this.chart.polar){aj(this.xAxis,{tooltipLen:360})
}return f.call(this,g)
});
if(R.column){a=R.column.prototype;
Z(a,"animate",d);
Z(a,"translate",function(k){var o=this.xAxis,h=this.yAxis.len,f=o.center,n=o.startAngleRad,l=this.chart.renderer,m,j,i,g;
this.preventPostTranslate=true;
k.call(this);
if(o.isRadial){j=this.points;
g=j.length;
while(g--){i=j[g];
m=i.barX+n;
i.shapeType="path";
i.shapeArgs={d:l.symbols.arc(f[0],f[1],h-i.plotY,null,{start:m,end:m+i.pointWidth,innerR:h-ar(i.yBottom,h)})};
this.toXY(i);
i.tooltipPos=[i.plotX,i.plotY];
i.ttBelow=i.plotY>f[1]
}}});
Z(a,"alignDataLabel",function(m,l,i,k,g,j){if(this.chart.polar){var h=l.rectPlotX/Math.PI*180,f,n;
if(k.align===null){if(h>20&&h<160){f="left"
}else{if(h>200&&h<340){f="right"
}else{f="center"
}}k.align=f
}if(k.verticalAlign===null){if(h<45||h>315){n="bottom"
}else{if(h>135&&h<225){n="top"
}else{n="middle"
}}k.verticalAlign=n
}e.alignDataLabel.call(this,l,i,k,g,j)
}else{m.call(this,l,i,k,g,j)
}})
}Z(c,"getIndex",function(i,h){var j,g=this.chart,f,k,l;
if(g.polar){f=g.xAxis[0].center;
k=h.chartX-f[0]-g.plotLeft;
l=h.chartY-f[1]-g.plotTop;
j=180-Math.round(Math.atan2(k,l)/Math.PI*180)
}else{j=i.call(this,h)
}return j
});
Z(c,"getCoordinates",function(h,g){var f=this.chart,i={xAxis:[],yAxis:[]};
if(f.polar){aa(f.axes,function(j){var l=j.isXAxis,k=j.center,m=g.chartX-k[0]-f.plotLeft,n=g.chartY-k[1]-f.plotTop;
i[l?"xAxis":"yAxis"].push({axis:j,value:j.translate(l?Math.PI-Math.atan2(m,n):Math.sqrt(Math.pow(m,2)+Math.pow(n,2)),true)})
})
}else{i=h.call(this,g)
}return i
})
}())
}(Highcharts));