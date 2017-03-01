(function(d){var a=d.getOptions(),b=a.plotOptions,g=d.seriesTypes,e=d.merge,f=function(){},c=d.each;
b.funnel=e(b.pie,{animation:false,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:false,dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:true,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}}});
g.funnel=d.extendClass(g.pie,{type:"funnel",animate:f,singularTooltips:true,translate:function(){var o=function(L,M){return(/%$/).test(L)?M*parseInt(L,10)/100:parseInt(L,10)
},B=0,A=this,k=A.chart,v=A.options,z=v.reversed,y=k.plotWidth,x=k.plotHeight,l=0,h=v.center,i=o(h[0],y),j=o(h[0],x),D=o(v.width,y),C,p,r=o(v.height,x),t=o(v.neckWidth,y),s=o(v.neckHeight,x),u=r-s,m=A.data,w,n,q=v.dataLabels.position==="left"?1:0,E,I,F,G,J,H,K;
A.getWidthAt=p=function(L){return L>r-s||r===s?t:t+(D-t)*((r-s-L)/(r-s))
};
A.getX=function(M,L){return i+(L?-1:1)*((p(z?x-M:M)/2)+v.dataLabels.distance)
};
A.center=[i,j,r];
A.centerX=i;
c(m,function(L){B+=L.y
});
c(m,function(L){K=null;
n=B?L.y/B:0;
I=j-r/2+l*r;
J=I+n*r;
C=p(I);
E=i-C/2;
F=E+C;
C=p(J);
G=i-C/2;
H=G+C;
if(I>u){E=G=i-t/2;
F=H=i+t/2
}else{if(J>u){K=J;
C=p(u);
G=i-C/2;
H=G+C;
J=u
}}if(z){I=r-I;
J=r-J;
K=(K?r-K:null)
}w=["M",E,I,"L",F,I,H,J];
if(K){w.push(H,K,G,K)
}w.push(G,J,"Z");
L.shapeType="path";
L.shapeArgs={d:w};
L.percentage=n*100;
L.plotX=i;
L.plotY=(I+(K||J))/2;
L.tooltipPos=[i,L.plotY];
L.slice=f;
L.half=q;
l+=n
})
},drawPoints:function(){var k=this,i=k.options,h=k.chart,j=h.renderer;
c(k.data,function(m){var l=m.graphic,n=m.shapeArgs;
if(!l){m.graphic=j.path(n).attr({fill:m.color,stroke:i.borderColor,"stroke-width":i.borderWidth}).add(k.group)
}else{l.animate(n)
}})
},sortByAngle:function(h){h.sort(function(i,j){return i.plotY-j.plotY
})
},drawDataLabels:function(){var h=this.data,j=this.options.dataLabels.distance,k,m,l,i=h.length,n,o;
this.center[2]-=2*j;
while(i--){l=h[i];
k=l.half;
m=k?1:-1;
o=l.plotY;
n=this.getX(o,k);
l.labelPos=[0,o,n+(j-5)*m,o,n+j*m,o,k?"right":"left",0]
}g.pie.prototype.drawDataLabels.call(this)
}});
a.plotOptions.pyramid=d.merge(a.plotOptions.funnel,{neckWidth:"0%",neckHeight:"0%",reversed:true});
d.seriesTypes.pyramid=d.extendClass(d.seriesTypes.funnel,{type:"pyramid"})
}(Highcharts));