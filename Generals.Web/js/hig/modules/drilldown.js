(function(a){function w(g,i,l){return"rgba("+[Math.round(g[0]+(i[0]-g[0])*l),Math.round(g[1]+(i[1]-g[1])*l),Math.round(g[2]+(i[2]-g[2])*l),g[3]+(i[3]-g[3])*l].join(",")+")"
}var A=function(){},f=a.getOptions(),k=a.each,j=a.extend,C=a.format,c=a.wrap,B=a.Chart,d=a.seriesTypes,e=d.pie,D=d.column,z=HighchartsAdapter.fireEvent,b=HighchartsAdapter.inArray;
j(f.lang,{drillUpText:"◁ Back to {series.name}"});
f.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#0d233a",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#0d233a",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};
a.SVGRenderer.prototype.Element.prototype.fadeIn=function(g){this.attr({opacity:0.1,visibility:"inherit"}).animate({opacity:1},g||{duration:250})
};
B.prototype.addSeriesAsDrilldown=function(g,i){this.addSingleSeriesAsDrilldown(g,i);
this.applyDrilldown()
};
B.prototype.addSingleSeriesAsDrilldown=function(g,i){var m=g.series,l=m.xAxis,o=m.yAxis,q;
q=g.color||m.color;
var n,s=[],p=[],r;
r=m.levelNumber||0;
i=j({color:q},i);
n=b(g,m.points);
k(m.chart.series,function(t){if(t.xAxis===l){s.push(t),p.push(t.userOptions),t.levelNumber=t.levelNumber||0
}});
q={levelNumber:r,seriesOptions:m.userOptions,levelSeriesOptions:p,levelSeries:s,shapeArgs:g.shapeArgs,bBox:g.graphic.getBBox(),color:q,lowerSeriesOptions:i,pointOptions:m.options.data[n],pointIndex:n,oldExtremes:{xMin:l&&l.userMin,xMax:l&&l.userMax,yMin:o&&o.userMin,yMax:o&&o.userMax}};
if(!this.drilldownLevels){this.drilldownLevels=[]
}this.drilldownLevels.push(q);
q=q.lowerSeries=this.addSeries(i,!1);
q.levelNumber=r+1;
if(l){l.oldPos=l.pos,l.userMin=l.userMax=null,o.userMin=o.userMax=null
}if(m.type===q.type){q.animate=q.animateDrilldown||A,q.options.animation=!0
}};
B.prototype.applyDrilldown=function(){var g=this.drilldownLevels,i=g[g.length-1].levelNumber;
k(this.drilldownLevels,function(l){l.levelNumber===i&&k(l.levelSeries,function(m){m.levelNumber===i&&m.remove(!1)
})
});
this.redraw();
this.showDrillUpButton()
};
B.prototype.getDrilldownBackText=function(){var g=this.drilldownLevels[this.drilldownLevels.length-1];
g.series=g.seriesOptions;
return C(this.options.lang.drillUpText,g)
};
B.prototype.showDrillUpButton=function(){var g=this,i=this.getDrilldownBackText(),m=g.options.drilldown.drillUpButton,l,n;
this.drillUpButton?this.drillUpButton.attr({text:i}).align():(n=(l=m.theme)&&l.states,this.drillUpButton=this.renderer.button(i,null,null,function(){g.drillUp()
},l,n&&n.hover,n&&n.select).attr({align:m.position.align,zIndex:9}).add().align(m.position,!1,m.relativeTo||"plotBox"))
};
B.prototype.drillUp=function(){for(var g=this,i=g.drilldownLevels,m=i[i.length-1].levelNumber,l=i.length,o=g.series,q=o.length,n,p,r,s,t=function(u){var v;
k(o,function(x){x.userOptions===u&&(v=x)
});
v=v||g.addSeries(u,!1);
if(v.type===p.type&&v.animateDrillupTo){v.animate=v.animateDrillupTo
}u===n.seriesOptions&&(r=v)
};
l--;
){if(n=i[l],n.levelNumber===m){i.pop();
p=n.lowerSeries;
if(!p.chart){for(;
q--;
){if(o[q].options.id===n.lowerSeriesOptions.id){p=o[q];
break
}}}p.xData=[];
k(n.levelSeriesOptions,t);
z(g,"drillup",{seriesOptions:n.seriesOptions});
if(r.type===p.type){r.drilldownLevel=n,r.options.animation=g.options.drilldown.animation,p.animateDrillupFrom&&p.animateDrillupFrom(n)
}r.levelNumber=m;
p.remove(!1);
if(r.xAxis){s=n.oldExtremes,r.xAxis.setExtremes(s.xMin,s.xMax,!1),r.yAxis.setExtremes(s.yMin,s.yMax,!1)
}}}this.redraw();
this.drilldownLevels.length===0?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align()
};
D.prototype.supportsDrilldown=!0;
D.prototype.animateDrillupTo=function(g){if(!g){var i=this,l=i.drilldownLevel;
k(this.points,function(m){m.graphic.hide();
m.dataLabel&&m.dataLabel.hide();
m.connector&&m.connector.hide()
});
setTimeout(function(){k(i.points,function(m,n){var p=n===(l&&l.pointIndex)?"show":"fadeIn",o=p==="show"?!0:void 0;
m.graphic[p](o);
if(m.dataLabel){m.dataLabel[p](o)
}if(m.connector){m.connector[p](o)
}})
},Math.max(this.chart.options.drilldown.animation.duration-50,0));
this.animate=A
}};
D.prototype.animateDrilldown=function(g){var i=this,m=this.chart.drilldownLevels,l=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1].shapeArgs,n=this.chart.options.drilldown.animation;
if(!g){k(m,function(o){if(i.userOptions===o.lowerSeriesOptions){l=o.shapeArgs
}}),l.x+=this.xAxis.oldPos-this.xAxis.pos,k(this.points,function(o){o.graphic&&o.graphic.attr(l).animate(o.shapeArgs,n);
o.dataLabel&&o.dataLabel.fadeIn(n)
}),this.animate=null
}};
D.prototype.animateDrillupFrom=function(g){var i=this.chart.options.drilldown.animation,m=this.group,l=this;
k(l.trackerGroups,function(n){if(l[n]){l[n].on("mouseover")
}});
delete this.group;
k(this.points,function(n){var p=n.graphic,o=a.Color(n.color).rgba,q=a.Color(g.color).rgba,r=function(){p.destroy();
m&&(m=m.destroy())
};
p&&(delete n.graphic,i?p.animate(g.shapeArgs,a.merge(i,{step:function(s,t){t.prop==="start"&&o.length===4&&q.length===4&&this.attr({fill:w(o,q,t.pos)})
},complete:r})):(p.attr(g.shapeArgs),r()))
})
};
e&&j(e.prototype,{supportsDrilldown:!0,animateDrillupTo:D.prototype.animateDrillupTo,animateDrillupFrom:D.prototype.animateDrillupFrom,animateDrilldown:function(g){var i=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],m=this.chart.options.drilldown.animation,l=i.shapeArgs,o=l.start,p=(l.end-o)/this.points.length,n=a.Color(i.color).rgba;
if(!g){k(this.points,function(q,r){var s=a.Color(q.color).rgba;
q.graphic.attr(a.merge(l,{start:o+r*p,end:o+(r+1)*p}))[m?"animate":"attr"](q.shapeArgs,a.merge(m,{step:function(t,u){u.prop==="start"&&n.length===4&&s.length===4&&this.attr({fill:w(n,s,u.pos)})
}}))
}),this.animate=null
}}});
a.Point.prototype.doDrilldown=function(g){for(var i=this.series.chart,m=i.options.drilldown,l=(m.series||[]).length,n;
l--&&!n;
){m.series[l].id===this.drilldown&&(n=m.series[l])
}z(i,"drilldown",{point:this,seriesOptions:n});
n&&(g?i.addSingleSeriesAsDrilldown(this,n):i.addSeriesAsDrilldown(this,n))
};
c(a.Point.prototype,"init",function(g,i,m,l){var o=g.call(this,i,m,l),p=i.chart,n=(g=i.xAxis&&i.xAxis.ticks[l])&&g.label;
if(o.drilldown){if(a.addEvent(o,"click",function(){o.doDrilldown()
}),n){if(!n._basicStyle){n._basicStyle=n.element.getAttribute("style")
}n.addClass("highcharts-drilldown-axis-label").css(p.options.drilldown.activeAxisLabelStyle).on("click",function(){k(n.ddPoints,function(q){q.doDrilldown&&q.doDrilldown(!0)
});
p.applyDrilldown()
});
if(!n.ddPoints){n.ddPoints=[]
}n.ddPoints.push(o)
}}else{n&&n._basicStyle&&n.element.setAttribute("style",n._basicStyle)
}return o
});
c(a.Series.prototype,"drawDataLabels",function(g){var i=this.chart.options.drilldown.activeDataLabelStyle;
g.call(this);
k(this.points,function(l){if(l.drilldown&&l.dataLabel){l.dataLabel.attr({"class":"highcharts-drilldown-data-label"}).css(i).on("click",function(){l.doDrilldown()
})
}})
});
var h,f=function(g){g.call(this);
k(this.points,function(i){i.drilldown&&i.graphic&&i.graphic.attr({"class":"highcharts-drilldown-point"}).css({cursor:"pointer"})
})
};
for(h in d){d[h].prototype.supportsDrilldown&&c(d[h].prototype,"drawTracker",f)
}})(Highcharts);