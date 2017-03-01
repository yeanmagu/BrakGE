(function(a){var b=a.Axis,F=a.Chart,E=a.Color,I=a.Legend,C=a.LegendSymbolMixin,d=a.Series,i=a.getOptions(),c=a.each,h=a.extend,J=a.extendClass,G=a.merge,A=a.pick,B=a.numberFormat,e=a.seriesTypes,D=a.wrap,f=function(){},H=a.ColorAxis=function(){this.isColorAxis=!0;
this.init.apply(this,arguments)
};
h(H.prototype,b.prototype);
h(H.prototype,{defaultColorAxisOptions:{lineWidth:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},color:"gray",width:0.01},labels:{overflow:"justify"},minColor:"#EFEFFF",maxColor:"#003875",tickLength:5},init:function(j,g){var l=j.options.legend.layout!=="vertical",k;
k=G(this.defaultColorAxisOptions,{side:l?2:1,reversed:!l},g,{isX:l,opposite:!l,showEmpty:!1,title:null,isColor:!0});
b.prototype.init.call(this,j,k);
g.dataClasses&&this.initDataClasses(g);
this.initStops(g);
this.isXAxis=!0;
this.horiz=l;
this.zoomEnabled=!1
},tweenColors:function(j,g,l){var k=g.rgba[3]!==1||j.rgba[3]!==1;
return(k?"rgba(":"rgb(")+Math.round(g.rgba[0]+(j.rgba[0]-g.rgba[0])*(1-l))+","+Math.round(g.rgba[1]+(j.rgba[1]-g.rgba[1])*(1-l))+","+Math.round(g.rgba[2]+(j.rgba[2]-g.rgba[2])*(1-l))+(k?","+(g.rgba[3]+(j.rgba[3]-g.rgba[3])*(1-l)):"")+")"
},initDataClasses:function(j){var g=this,l=this.chart,k,m=0,n=this.options;
this.dataClasses=k=[];
c(j.dataClasses,function(o,q){var p,o=G(o);
k.push(o);
if(!o.color){n.dataClassColor==="category"?(p=l.options.colors,o.color=p[m++],m===p.length&&(m=0)):o.color=g.tweenColors(E(n.minColor),E(n.maxColor),q/(j.dataClasses.length-1))
}})
},initStops:function(g){this.stops=g.stops||[[0,this.options.minColor],[1,this.options.maxColor]];
c(this.stops,function(j){j.color=E(j[1])
})
},setOptions:function(g){b.prototype.setOptions.call(this,g);
this.options.crosshair=this.options.marker;
this.coll="colorAxis"
},setAxisSize:function(){var j=this.legendSymbol,g=this.chart,l,k,m;
if(j){this.left=l=j.attr("x"),this.top=k=j.attr("y"),this.width=m=j.attr("width"),this.height=j=j.attr("height"),this.right=g.chartWidth-l-m,this.bottom=g.chartHeight-k-j,this.len=this.horiz?m:j,this.pos=this.horiz?l:k
}},toColor:function(j,g){var l,k=this.stops,m,o=this.dataClasses,n,p;
if(o){for(p=o.length;
p--;
){if(n=o[p],m=n.from,k=n.to,(m===void 0||j>=m)&&(k===void 0||j<=k)){l=n.color;
if(g){g.dataClass=p
}break
}}}else{this.isLog&&(j=this.val2lin(j));
l=1-(this.max-j)/(this.max-this.min);
for(p=k.length;
p--;
){if(l>k[p][0]){break
}}m=k[p]||k[p+1];
k=k[p+1]||m;
l=1-(k[0]-l)/(k[0]-m[0]||1);
l=this.tweenColors(m.color,k.color,l)
}return l
},getOffset:function(){var g=this.legendGroup;
if(g&&(b.prototype.getOffset.call(this),!this.axisGroup.parentGroup)){this.axisGroup.add(g),this.gridGroup.add(g),this.labelGroup.add(g),this.added=!0
}},setLegendColor:function(){var j,g=this.options;
j=this.horiz?[0,0,1,0]:[0,0,0,1];
this.legendColor={linearGradient:{x1:j[0],y1:j[1],x2:j[2],y2:j[3]},stops:g.stops||[[0,g.minColor],[1,g.maxColor]]}
},drawLegendSymbol:function(j,g){var l=j.padding,k=j.options,m=this.horiz,o=A(k.symbolWidth,m?200:12),n=A(k.symbolHeight,m?12:200),k=A(k.labelPadding,m?10:30);
this.setLegendColor();
g.legendSymbol=this.chart.renderer.rect(0,j.baseline-11,o,n).attr({zIndex:1}).add(g.legendGroup);
g.legendSymbol.getBBox();
this.legendItemWidth=o+l+(m?0:k);
this.legendItemHeight=n+l+(m?k:0)
},setState:f,visible:!0,setVisible:f,getSeriesExtremes:function(){var g;
if(this.series.length){g=this.series[0],this.dataMin=g.valueMin,this.dataMax=g.valueMax
}},drawCrosshair:function(j,g){var l=!this.cross,k=g&&g.plotX,m=g&&g.plotY,o,n=this.pos,p=this.len;
if(g){o=this.toPixels(g.value),o<n?o=n-2:o>n+p&&(o=n+p+2),g.plotX=o,g.plotY=this.len-o,b.prototype.drawCrosshair.call(this,j,g),g.plotX=k,g.plotY=m,!l&&this.cross&&this.cross.attr({fill:this.crosshair.color}).add(this.labelGroup)
}},getPlotLinePath:function(j,g,l,k,m){return m?this.horiz?["M",m-4,this.top-6,"L",m+4,this.top-6,m,this.top,"Z"]:["M",this.left,m,"L",this.left-6,m+6,this.left-6,m-6,"Z"]:b.prototype.getPlotLinePath.call(this,j,g,l,k)
},update:function(j,g){c(this.series,function(k){k.isDirtyData=!0
});
b.prototype.update.call(this,j,g);
this.legendItem&&(this.setLegendColor(),this.chart.legend.colorizeItem(this,!0))
},getDataClassLegendSymbols:function(){var j=this,g=this.chart,l=[],k=g.options.legend,m=k.valueDecimals,o=k.valueSuffix||"",n;
c(this.dataClasses,function(r,s){var t=!0,p=r.from,q=r.to;
n="";
p===void 0?n="< ":q===void 0&&(n="> ");
p!==void 0&&(n+=B(p,m)+o);
p!==void 0&&q!==void 0&&(n+=" - ");
q!==void 0&&(n+=B(q,m)+o);
l.push(h({chart:g,name:n,options:{},drawLegendSymbol:C.drawRectangle,visible:!0,setState:f,setVisible:function(){t=this.visible=!t;
c(j.series,function(u){c(u.points,function(v){v.dataClass===s&&v.setVisible(t)
})
});
g.legend.colorizeItem(this,t)
}},r))
});
return l
},name:""});
D(F.prototype,"getAxes",function(j){var g=this.options.colorAxis;
j.call(this);
this.colorAxis=[];
g&&new H(this,g)
});
D(I.prototype,"getAllItems",function(j){var g=[],k=this.chart.colorAxis[0];
k&&(k.options.dataClasses?g=g.concat(k.getDataClassLegendSymbols()):g.push(k),c(k.series,function(l){l.options.showInLegend=!1
}));
return g.concat(j.call(this))
});
a={pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",dashstyle:"dashStyle"},pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:f,parallelArrays:["x","y","value"],translateColors:function(){var j=this,g=this.options.nullColor,k=this.colorAxis;
c(this.data,function(l){var m=l.value;
if(m=m===null?g:k?k.toColor(m,l):l.color||j.color){l.color=m
}})
}};
i.plotOptions.heatmap=G(i.plotOptions.scatter,{animation:!1,borderWidth:0,nullColor:"#F8F8F8",dataLabels:{format:"{point.value}",verticalAlign:"middle",crop:!1,overflow:!1,style:{color:"white",fontWeight:"bold",textShadow:"0 0 5px black"}},marker:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{normal:{animation:!0},hover:{brightness:0.2}}});
e.heatmap=J(e.scatter,G(a,{type:"heatmap",pointArrayMap:["y","value"],hasPointSpecificOptions:!0,supportsDrilldown:!0,getExtremesFromAll:!0,init:function(){e.scatter.prototype.init.apply(this,arguments);
this.pointRange=this.options.colsize||1;
this.yAxis.axisPointRange=this.options.rowsize||1
},translate:function(){var j=this.options,g=this.xAxis,k=this.yAxis;
this.generatePoints();
c(this.points,function(l){var m=(j.colsize||1)/2,p=(j.rowsize||1)/2,n=Math.round(g.len-g.translate(l.x-m,0,1,0,1)),m=Math.round(g.len-g.translate(l.x+m,0,1,0,1)),o=Math.round(k.translate(l.y-p,0,1,0,1)),p=Math.round(k.translate(l.y+p,0,1,0,1));
l.plotX=(n+m)/2;
l.plotY=(o+p)/2;
l.shapeType="rect";
l.shapeArgs={x:Math.min(n,m),y:Math.min(o,p),width:Math.abs(m-n),height:Math.abs(p-o)}
});
this.translateColors()
},drawPoints:e.column.prototype.drawPoints,animate:f,getBox:f,drawLegendSymbol:C.drawRectangle,getExtremes:function(){d.prototype.getExtremes.call(this,this.valueData);
this.valueMin=this.dataMin;
this.valueMax=this.dataMax;
d.prototype.getExtremes.call(this)
}}))
})(Highcharts);