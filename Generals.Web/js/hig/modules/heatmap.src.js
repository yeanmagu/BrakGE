(function(b){var k,m=b.Axis,n=b.Chart,o=b.Color,c=b.Legend,d=b.LegendSymbolMixin,i=b.Series,r=b.getOptions(),s=b.each,t=b.extend,a=b.extendClass,e=b.merge,h=b.pick,g=b.numberFormat,j=b.seriesTypes,l=b.wrap,f=function(){};
var p=b.ColorAxis=function(){this.isColorAxis=true;
this.init.apply(this,arguments)
};
t(p.prototype,m.prototype);
t(p.prototype,{defaultColorAxisOptions:{lineWidth:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:true,endOnTick:true,offset:0,marker:{animation:{duration:50},color:"gray",width:0.01},labels:{overflow:"justify"},minColor:"#EFEFFF",maxColor:"#003875",tickLength:5},init:function(u,x){var v=u.options.legend.layout!=="vertical",w;
w=e(this.defaultColorAxisOptions,{side:v?2:1,reversed:!v},x,{isX:v,opposite:!v,showEmpty:false,title:null,isColor:true});
m.prototype.init.call(this,u,w);
if(x.dataClasses){this.initDataClasses(x)
}this.initStops(x);
this.isXAxis=true;
this.horiz=v;
this.zoomEnabled=false
},tweenColors:function(u,x,w){var v=(x.rgba[3]!==1||u.rgba[3]!==1);
return(v?"rgba(":"rgb(")+Math.round(x.rgba[0]+(u.rgba[0]-x.rgba[0])*(1-w))+","+Math.round(x.rgba[1]+(u.rgba[1]-x.rgba[1])*(1-w))+","+Math.round(x.rgba[2]+(u.rgba[2]-x.rgba[2])*(1-w))+(v?(","+(x.rgba[3]+(u.rgba[3]-x.rgba[3])*(1-w))):"")+")"
},initDataClasses:function(z){var u=this,v=this.chart,x,w=0,y=this.options;
this.dataClasses=x=[];
s(z.dataClasses,function(B,C){var A;
B=e(B);
x.push(B);
if(!B.color){if(y.dataClassColor==="category"){A=v.options.colors;
B.color=A[w++];
if(w===A.length){w=0
}}else{B.color=u.tweenColors(o(y.minColor),o(y.maxColor),C/(z.dataClasses.length-1))
}}})
},initStops:function(u){this.stops=u.stops||[[0,this.options.minColor],[1,this.options.maxColor]];
s(this.stops,function(v){v.color=o(v[1])
})
},setOptions:function(u){m.prototype.setOptions.call(this,u);
this.options.crosshair=this.options.marker;
this.coll="colorAxis"
},setAxisSize:function(){var y=this.legendSymbol,w=this.chart,u,v,z,x;
if(y){this.left=u=y.attr("x");
this.top=v=y.attr("y");
this.width=z=y.attr("width");
this.height=x=y.attr("height");
this.right=w.chartWidth-u-z;
this.bottom=w.chartHeight-v-x;
this.len=this.horiz?z:x;
this.pos=this.horiz?u:v
}},toColor:function(v,B){var C,D=this.stops,z,u,w,y=this.dataClasses,x,A;
if(y){A=y.length;
while(A--){x=y[A];
z=x.from;
u=x.to;
if((z===k||v>=z)&&(u===k||v<=u)){w=x.color;
if(B){B.dataClass=A
}break
}}}else{if(this.isLog){v=this.val2lin(v)
}C=1-((this.max-v)/(this.max-this.min));
A=D.length;
while(A--){if(C>D[A][0]){break
}}z=D[A]||D[A+1];
u=D[A+1]||z;
C=1-(u[0]-C)/((u[0]-z[0])||1);
w=this.tweenColors(z.color,u.color,C)
}return w
},getOffset:function(){var u=this.legendGroup;
if(u){m.prototype.getOffset.call(this);
if(!this.axisGroup.parentGroup){this.axisGroup.add(u);
this.gridGroup.add(u);
this.labelGroup.add(u);
this.added=true
}}},setLegendColor:function(){var u,v=this.horiz,w=this.options;
u=v?[0,0,1,0]:[0,0,0,1];
this.legendColor={linearGradient:{x1:u[0],y1:u[1],x2:u[2],y2:u[3]},stops:w.stops||[[0,w.minColor],[1,w.maxColor]]}
},drawLegendSymbol:function(z,x){var B=z.padding,A=z.options,w=this.horiz,u,C=h(A.symbolWidth,w?200:12),v=h(A.symbolHeight,w?12:200),y=h(A.labelPadding,w?10:30);
this.setLegendColor();
x.legendSymbol=this.chart.renderer.rect(0,z.baseline-11,C,v).attr({zIndex:1}).add(x.legendGroup);
u=x.legendSymbol.getBBox();
this.legendItemWidth=C+B+(w?0:y);
this.legendItemHeight=v+B+(w?y:0)
},setState:f,visible:true,setVisible:f,getSeriesExtremes:function(){var u;
if(this.series.length){u=this.series[0];
this.dataMin=u.valueMin;
this.dataMax=u.valueMax
}},drawCrosshair:function(x,B){var y=!this.cross,z=B&&B.plotX,A=B&&B.plotY,w,v=this.pos,u=this.len;
if(B){w=this.toPixels(B.value);
if(w<v){w=v-2
}else{if(w>v+u){w=v+u+2
}}B.plotX=w;
B.plotY=this.len-w;
m.prototype.drawCrosshair.call(this,x,B);
B.plotX=z;
B.plotY=A;
if(!y&&this.cross){this.cross.attr({fill:this.crosshair.color}).add(this.labelGroup)
}}},getPlotLinePath:function(u,v,w,x,y){if(y){return this.horiz?["M",y-4,this.top-6,"L",y+4,this.top-6,y,this.top,"Z"]:["M",this.left,y,"L",this.left-6,y+6,this.left-6,y-6,"Z"]
}else{return m.prototype.getPlotLinePath.call(this,u,v,w,x)
}},update:function(u,v){s(this.series,function(w){w.isDirtyData=true
});
m.prototype.update.call(this,u,v);
if(this.legendItem){this.setLegendColor();
this.chart.legend.colorizeItem(this,true)
}},getDataClassLegendSymbols:function(){var u=this,v=this.chart,w=[],x=v.options.legend,z=x.valueDecimals,A=x.valueSuffix||"",y;
s(this.dataClasses,function(B,D){var F=true,C=B.from,E=B.to;
y="";
if(C===k){y="< "
}else{if(E===k){y="> "
}}if(C!==k){y+=g(C,z)+A
}if(C!==k&&E!==k){y+=" - "
}if(E!==k){y+=g(E,z)+A
}w.push(t({chart:v,name:y,options:{},drawLegendSymbol:d.drawRectangle,visible:true,setState:f,setVisible:function(){F=this.visible=!F;
s(u.series,function(G){s(G.points,function(H){if(H.dataClass===D){H.setVisible(F)
}})
});
v.legend.colorizeItem(this,F)
}},B))
});
return w
},name:""});
l(n.prototype,"getAxes",function(w){var v=this.options,u=v.colorAxis;
w.call(this);
this.colorAxis=[];
if(u){w=new p(this,u)
}});
l(c.prototype,"getAllItems",function(w){var u=[],v=this.chart.colorAxis[0];
if(v){if(v.options.dataClasses){u=u.concat(v.getDataClassLegendSymbols())
}else{u.push(v)
}s(v.series,function(x){x.options.showInLegend=false
})
}return u.concat(w.call(this))
});
var q={pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",dashstyle:"dashStyle"},pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:f,parallelArrays:["x","y","value"],translateColors:function(){var w=this,v=this.options.nullColor,u=this.colorAxis;
s(this.data,function(y){var z=y.value,x;
x=z===null?v:u?u.toColor(z,y):(y.color)||w.color;
if(x){y.color=x
}})
}};
r.plotOptions.heatmap=e(r.plotOptions.scatter,{animation:false,borderWidth:0,nullColor:"#F8F8F8",dataLabels:{format:"{point.value}",verticalAlign:"middle",crop:false,overflow:false,style:{color:"white",fontWeight:"bold",textShadow:"0 0 5px black"}},marker:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{normal:{animation:true},hover:{brightness:0.2}}});
j.heatmap=a(j.scatter,e(q,{type:"heatmap",pointArrayMap:["y","value"],hasPointSpecificOptions:true,supportsDrilldown:true,getExtremesFromAll:true,init:function(){j.scatter.prototype.init.apply(this,arguments);
this.pointRange=this.options.colsize||1;
this.yAxis.axisPointRange=this.options.rowsize||1
},translate:function(){var v=this,u=v.options,w=v.xAxis,x=v.yAxis;
v.generatePoints();
s(v.points,function(y){var B=(u.colsize||1)/2,E=(u.rowsize||1)/2,z=Math.round(w.len-w.translate(y.x-B,0,1,0,1)),A=Math.round(w.len-w.translate(y.x+B,0,1,0,1)),C=Math.round(x.translate(y.y-E,0,1,0,1)),D=Math.round(x.translate(y.y+E,0,1,0,1));
y.plotX=(z+A)/2;
y.plotY=(C+D)/2;
y.shapeType="rect";
y.shapeArgs={x:Math.min(z,A),y:Math.min(C,D),width:Math.abs(A-z),height:Math.abs(D-C)}
});
v.translateColors()
},drawPoints:j.column.prototype.drawPoints,animate:f,getBox:f,drawLegendSymbol:d.drawRectangle,getExtremes:function(){i.prototype.getExtremes.call(this,this.valueData);
this.valueMin=this.dataMin;
this.valueMax=this.dataMax;
i.prototype.getExtremes.call(this)
}}))
}(Highcharts));