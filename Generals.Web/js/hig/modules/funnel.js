(function(c){var e=c.getOptions(),i=e.plotOptions,h=c.seriesTypes,g=c.merge,f=function(){},a=c.each;
i.funnel=g(i.pie,{animation:!1,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:!0,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}}});
h.funnel=c.extendClass(h.pie,{type:"funnel",animate:f,singularTooltips:!0,translate:function(){var H=function(p,o){return/%$/.test(p)?o*parseInt(p,10)/100:parseInt(p,10)
},d=0,l=this.chart,U=this.options,M=U.reversed,j=l.plotWidth,k=l.plotHeight,Q=0,l=U.center,D=H(l[0],j),J=H(l[0],k),V=H(U.width,j),G,S,b=H(U.height,k),P=H(U.neckWidth,j),L=H(U.neckHeight,k),E=b-L,H=this.data,m,T,I=U.dataLabels.position==="left"?1:0,n,R,N,K,F,A,O;
this.getWidthAt=S=function(o){return o>b-L||b===L?P:P+(V-P)*((b-L-o)/(b-L))
};
this.getX=function(p,o){return D+(o?-1:1)*(S(M?k-p:p)/2+U.dataLabels.distance)
};
this.center=[D,J,b];
this.centerX=D;
a(H,function(o){d+=o.y
});
a(H,function(o){O=null;
T=d?o.y/d:0;
R=J-b/2+Q*b;
F=R+T*b;
G=S(R);
n=D-G/2;
N=n+G;
G=S(F);
K=D-G/2;
A=K+G;
R>E?(n=K=D-P/2,N=A=D+P/2):F>E&&(O=F,G=S(E),K=D-G/2,A=K+G,F=E);
M&&(R=b-R,F=b-F,O=O?b-O:null);
m=["M",n,R,"L",N,R,A,F];
O&&m.push(A,O,K,O);
m.push(K,F,"Z");
o.shapeType="path";
o.shapeArgs={d:m};
o.percentage=T*100;
o.plotX=D;
o.plotY=(R+(O||F))/2;
o.tooltipPos=[D,o.plotY];
o.slice=f;
o.half=I;
Q+=T
})
},drawPoints:function(){var b=this,d=b.options,j=b.chart.renderer;
a(b.data,function(k){var m=k.graphic,l=k.shapeArgs;
m?m.animate(l):k.graphic=j.path(l).attr({fill:k.color,stroke:d.borderColor,"stroke-width":d.borderWidth}).add(b.group)
})
},sortByAngle:function(b){b.sort(function(d,j){return d.plotY-j.plotY
})
},drawDataLabels:function(){var b=this.data,d=this.options.dataLabels.distance,l,j,m,k=b.length,n,p;
for(this.center[2]-=2*d;
k--;
){m=b[k],j=(l=m.half)?1:-1,p=m.plotY,n=this.getX(p,l),m.labelPos=[0,p,n+(d-5)*j,p,n+d*j,p,l?"right":"left",0]
}h.pie.prototype.drawDataLabels.call(this)
}});
e.plotOptions.pyramid=c.merge(e.plotOptions.funnel,{neckWidth:"0%",neckHeight:"0%",reversed:!0});
c.seriesTypes.pyramid=c.extendClass(c.seriesTypes.funnel,{type:"pyramid"})
})(Highcharts);