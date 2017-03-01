(function(d){var b=d.getOptions().plotOptions,f=d.pInt,e=d.pick,c=d.each,a,g;
b.solidgauge=d.merge(b.gauge,{colorByPoint:true});
a={initDataClasses:function(m){var h=this,i=this.chart,k,j=0,l=this.options;
this.dataClasses=k=[];
c(m.dataClasses,function(o,p){var n;
o=d.merge(o);
k.push(o);
if(!o.color){if(l.dataClassColor==="category"){n=i.options.colors;
o.color=n[j++];
if(j===n.length){j=0
}}else{o.color=h.tweenColors(d.Color(l.minColor),d.Color(l.maxColor),p/(m.dataClasses.length-1))
}}})
},initStops:function(h){this.stops=h.stops||[[0,this.options.minColor],[1,this.options.maxColor]];
c(this.stops,function(i){i.color=d.Color(i[1])
})
},toColor:function(q,m){var n,o=this.stops,k,p,h,j=this.dataClasses,i,l;
if(j){l=j.length;
while(l--){i=j[l];
k=i.from;
p=i.to;
if((k===g||q>=k)&&(p===g||q<=p)){h=i.color;
if(m){m.dataClass=l
}break
}}}else{if(this.isLog){q=this.val2lin(q)
}n=1-((this.max-q)/(this.max-this.min));
l=o.length;
while(l--){if(n>o[l][0]){break
}}k=o[l]||o[l+1];
p=o[l+1]||k;
n=1-(p[0]-n)/((p[0]-k[0])||1);
h=this.tweenColors(k.color,p.color,n)
}return h
},tweenColors:function(h,k,j){var i=(k.rgba[3]!==1||h.rgba[3]!==1);
if(h.rgba.length===0||k.rgba.length===0){return"none"
}return(i?"rgba(":"rgb(")+Math.round(k.rgba[0]+(h.rgba[0]-k.rgba[0])*(1-j))+","+Math.round(k.rgba[1]+(h.rgba[1]-k.rgba[1])*(1-j))+","+Math.round(k.rgba[2]+(h.rgba[2]-k.rgba[2])*(1-j))+(i?(","+(k.rgba[3]+(h.rgba[3]-k.rgba[3])*(1-j))):"")+")"
}};
d.seriesTypes.solidgauge=d.extendClass(d.seriesTypes.gauge,{type:"solidgauge",bindAxes:function(){var h;
d.seriesTypes.gauge.prototype.bindAxes.call(this);
h=this.yAxis;
d.extend(h,a);
if(h.options.dataClasses){h.initDataClasses(h.options)
}h.initStops(h.options)
},drawPoints:function(){var k=this,l=k.yAxis,h=l.center,i=k.options,j=k.chart.renderer;
d.each(k.points,function(t){var r=t.graphic,m=l.startAngleRad+l.translate(t.y,null,null,null,true),u=(f(e(i.radius,100))*h[2])/200,s=(f(e(i.innerRadius,60))*h[2])/200,n,p,o=l.toColor(t.y,t),q;
if(o!=="none"){q=t.color;
t.color=o
}if(i.wrap===false){m=Math.max(l.startAngleRad,Math.min(l.endAngleRad,m))
}m=m*180/Math.PI;
n={x:h[0],y:h[1],r:u,innerR:s,start:l.startAngleRad,end:m/(180/Math.PI)};
if(r){p=n.d;
r.attr({fill:t.color}).animate(n,{step:function(w,v){r.attr("fill",a.tweenColors(d.Color(q),d.Color(o),v.pos))
}});
n.d=p
}else{t.graphic=j.arc(n).attr({stroke:i.borderColor||"none","stroke-width":i.borderWidth||0,fill:t.color}).add(k.group)
}})
},animate:null})
}(Highcharts));