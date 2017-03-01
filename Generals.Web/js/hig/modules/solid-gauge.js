(function(b){var d=b.getOptions().plotOptions,f=b.pInt,g=b.pick,c=b.each,e;
d.solidgauge=b.merge(d.gauge,{colorByPoint:!0});
e={initDataClasses:function(a){var k=this,i=this.chart,h,l=0,j=this.options;
this.dataClasses=h=[];
c(a.dataClasses,function(q,o){var r,q=b.merge(q);
h.push(q);
if(!q.color){j.dataClassColor==="category"?(r=i.options.colors,q.color=r[l++],l===r.length&&(l=0)):q.color=k.tweenColors(b.Color(j.minColor),b.Color(j.maxColor),o/(a.dataClasses.length-1))
}})
},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];
c(this.stops,function(h){h.color=b.Color(h[1])
})
},toColor:function(h,n){var k,i=this.stops,a,l=this.dataClasses,m,j;
if(l){for(j=l.length;
j--;
){if(m=l[j],a=m.from,i=m.to,(a===void 0||h>=a)&&(i===void 0||h<=i)){k=m.color;
if(n){n.dataClass=j
}break
}}}else{this.isLog&&(h=this.val2lin(h));
k=1-(this.max-h)/(this.max-this.min);
for(j=i.length;
j--;
){if(k>i[j][0]){break
}}a=i[j]||i[j+1];
i=i[j+1]||a;
k=1-(i[0]-k)/(i[0]-a[0]||1);
k=this.tweenColors(a.color,i.color,k)
}return k
},tweenColors:function(h,a,j){var i=a.rgba[3]!==1||h.rgba[3]!==1;
return h.rgba.length===0||a.rgba.length===0?"none":(i?"rgba(":"rgb(")+Math.round(a.rgba[0]+(h.rgba[0]-a.rgba[0])*(1-j))+","+Math.round(a.rgba[1]+(h.rgba[1]-a.rgba[1])*(1-j))+","+Math.round(a.rgba[2]+(h.rgba[2]-a.rgba[2])*(1-j))+(i?","+(a.rgba[3]+(h.rgba[3]-a.rgba[3])*(1-j)):"")+")"
}};
b.seriesTypes.solidgauge=b.extendClass(b.seriesTypes.gauge,{type:"solidgauge",bindAxes:function(){var a;
b.seriesTypes.gauge.prototype.bindAxes.call(this);
a=this.yAxis;
b.extend(a,e);
a.options.dataClasses&&a.initDataClasses(a.options);
a.initStops(a.options)
},drawPoints:function(){var a=this,j=a.yAxis,i=j.center,h=a.options,k=a.chart.renderer;
b.each(a.points,function(o){var p=o.graphic,l=j.startAngleRad+j.translate(o.y,null,null,null,!0),q=f(g(h.radius,100))*i[2]/200,s=f(g(h.innerRadius,60))*i[2]/200,x=j.toColor(o.y,o),r;
if(x!=="none"){r=o.color,o.color=x
}h.wrap===!1&&(l=Math.max(j.startAngleRad,Math.min(j.endAngleRad,l)));
l=l*180/Math.PI;
l={x:i[0],y:i[1],r:q,innerR:s,start:j.startAngleRad,end:l/(180/Math.PI)};
p?(q=l.d,p.attr({fill:o.color}).animate(l,{step:function(m,n){p.attr("fill",e.tweenColors(b.Color(r),b.Color(x),n.pos))
}}),l.d=q):o.graphic=k.arc(l).attr({stroke:h.borderColor||"none","stroke-width":h.borderWidth||0,fill:o.color}).add(a.group)
})
},animate:null})
})(Highcharts);