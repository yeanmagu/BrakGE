function RGBColor(l){this.ok=!1;
l.charAt(0)=="#"&&(l=l.substr(1,6));
var l=l.replace(/ /g,""),l=l.toLowerCase(),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"},g;
for(g in e){l==g&&(l=e[g])
}var h=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(a){return[parseInt(a[1]),parseInt(a[2]),parseInt(a[3])]
}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]
}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]
}}];
for(g=0;
g<h.length;
g++){var f=h[g].process,j=h[g].re.exec(l);
if(j){channels=f(j),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.ok=!0
}}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r;
this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g;
this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b;
this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"
};
this.toHex=function(){var b=this.r.toString(16),a=this.g.toString(16),c=this.b.toString(16);
b.length==1&&(b="0"+b);
a.length==1&&(a="0"+a);
c.length==1&&(c="0"+c);
return"#"+b+a+c
};
this.getHelpXML=function(){for(var a=[],k=0;
k<h.length;
k++){for(var b=h[k].example,d=0;
d<b.length;
d++){a[a.length]=b[d]
}}for(var c in e){a[a.length]=c
}b=document.createElement("ul");
b.setAttribute("id","rgbcolor-examples");
for(k=0;
k<a.length;
k++){try{var m=document.createElement("li"),s=new RGBColor(a[k]),r=document.createElement("div");
r.style.cssText="margin: 3px; border: 1px solid black; background:"+s.toHex()+"; color:"+s.toHex();
r.appendChild(document.createTextNode("test"));
var u=document.createTextNode(" "+a[k]+" -> "+s.toRGB()+" -> "+s.toHex());
m.appendChild(r);
m.appendChild(u);
b.appendChild(m)
}catch(t){}}return b
}
}if(!window.console){window.console={},window.console.log=function(){},window.console.dir=function(){}
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c){for(var b=0;
b<this.length;
b++){if(this[b]==c){return b
}}return -1
}
}(function(){function a(){var b={FRAMERATE:30,MAX_VIRTUAL_PIXELS:30000};
b.init=function(d){b.Definitions={};
b.Styles={};
b.Animations=[];
b.Images=[];
b.ctx=d;
b.ViewPort=new function(){this.viewPorts=[];
this.Clear=function(){this.viewPorts=[]
};
this.SetCurrent=function(c,e){this.viewPorts.push({width:c,height:e})
};
this.RemoveCurrent=function(){this.viewPorts.pop()
};
this.Current=function(){return this.viewPorts[this.viewPorts.length-1]
};
this.width=function(){return this.Current().width
};
this.height=function(){return this.Current().height
};
this.ComputeSize=function(c){return c!=null&&typeof c=="number"?c:c=="x"?this.width():c=="y"?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)
}
}
};
b.init();
b.ImagesLoaded=function(){for(var d=0;
d<b.Images.length;
d++){if(!b.Images[d].loaded){return !1
}}return !0
};
b.trim=function(c){return c.replace(/^\s+|\s+$/g,"")
};
b.compressSpaces=function(c){return c.replace(/[\s\r\t\n]+/gm," ")
};
b.ajax=function(c){var e;
return(e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(e.open("GET",c,!1),e.send(null),e.responseText):null
};
b.parseXml=function(c){if(window.DOMParser){return(new DOMParser).parseFromString(c,"text/xml")
}else{var c=c.replace(/<!DOCTYPE svg[^>]*>/,""),e=new ActiveXObject("Microsoft.XMLDOM");
e.async="false";
e.loadXML(c);
return e
}};
b.Property=function(f,g){this.name=f;
this.value=g;
this.hasValue=function(){return this.value!=null&&this.value!==""
};
this.numValue=function(){if(!this.hasValue()){return 0
}var c=parseFloat(this.value);
(this.value+"").match(/%$/)&&(c/=100);
return c
};
this.valueOrDefault=function(c){return this.hasValue()?this.value:c
};
this.numValueOrDefault=function(c){return this.hasValue()?this.numValue():c
};
var e=this;
this.Color={addOpacity:function(d){var c=e.value;
if(d!=null&&d!=""){var h=new RGBColor(e.value);
h.ok&&(c="rgba("+h.r+", "+h.g+", "+h.b+", "+d+")")
}return new b.Property(e.name,c)
}};
this.Definition={getDefinition:function(){var c=e.value.replace(/^(url\()?#([^\)]+)\)?$/,"$2");
return b.Definitions[c]
},isUrl:function(){return e.value.indexOf("url(")==0
},getFillStyle:function(c){var d=this.getDefinition();
return d!=null&&d.createGradient?d.createGradient(b.ctx,c):d!=null&&d.createPattern?d.createPattern(b.ctx,c):null
}};
this.Length={DPI:function(){return 96
},EM:function(c){var h=12,d=new b.Property("fontSize",b.Font.Parse(b.ctx.font).fontSize);
d.hasValue()&&(h=d.Length.toPixels(c));
return h
},toPixels:function(d){if(!e.hasValue()){return 0
}var c=e.value+"";
return c.match(/em$/)?e.numValue()*this.EM(d):c.match(/ex$/)?e.numValue()*this.EM(d)/2:c.match(/px$/)?e.numValue():c.match(/pt$/)?e.numValue()*1.25:c.match(/pc$/)?e.numValue()*15:c.match(/cm$/)?e.numValue()*this.DPI(d)/2.54:c.match(/mm$/)?e.numValue()*this.DPI(d)/25.4:c.match(/in$/)?e.numValue()*this.DPI(d):c.match(/%$/)?e.numValue()*b.ViewPort.ComputeSize(d):e.numValue()
}};
this.Time={toMilliseconds:function(){if(!e.hasValue()){return 0
}var c=e.value+"";
if(c.match(/s$/)){return e.numValue()*1000
}c.match(/ms$/);
return e.numValue()
}};
this.Angle={toRadians:function(){if(!e.hasValue()){return 0
}var c=e.value+"";
return c.match(/deg$/)?e.numValue()*(Math.PI/180):c.match(/grad$/)?e.numValue()*(Math.PI/200):c.match(/rad$/)?e.numValue():e.numValue()*(Math.PI/180)
}}
};
b.Font=new function(){this.Styles=["normal","italic","oblique","inherit"];
this.Variants=["normal","small-caps","inherit"];
this.Weights="normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900,inherit".split(",");
this.CreateFont=function(j,c,h,k,l,m){m=m!=null?this.Parse(m):this.CreateFont("","","","","",b.ctx.font);
return{fontFamily:l||m.fontFamily,fontSize:k||m.fontSize,fontStyle:j||m.fontStyle,fontWeight:h||m.fontWeight,fontVariant:c||m.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")
}}
};
var d=this;
this.Parse=function(l){for(var c={},l=b.trim(b.compressSpaces(l||"")).split(" "),r=!1,m=!1,n=!1,o=!1,q="",p=0;
p<l.length;
p++){if(!m&&d.Styles.indexOf(l[p])!=-1){if(l[p]!="inherit"){c.fontStyle=l[p]
}m=!0
}else{if(!o&&d.Variants.indexOf(l[p])!=-1){if(l[p]!="inherit"){c.fontVariant=l[p]
}m=o=!0
}else{if(!n&&d.Weights.indexOf(l[p])!=-1){if(l[p]!="inherit"){c.fontWeight=l[p]
}m=o=n=!0
}else{if(r){l[p]!="inherit"&&(q+=l[p])
}else{if(l[p]!="inherit"){c.fontSize=l[p].split("/")[0]
}m=o=n=r=!0
}}}}}if(q!=""){c.fontFamily=q
}return c
}
};
b.ToNumberArray=function(e){for(var e=b.trim(b.compressSpaces((e||"").replace(/,/g," "))).split(" "),f=0;
f<e.length;
f++){e[f]=parseFloat(e[f])
}return e
};
b.Point=function(c,e){this.x=c;
this.y=e;
this.angleTo=function(d){return Math.atan2(d.y-this.y,d.x-this.x)
};
this.applyTransform=function(f){var d=this.x*f[1]+this.y*f[3]+f[5];
this.x=this.x*f[0]+this.y*f[2]+f[4];
this.y=d
}
};
b.CreatePoint=function(d){d=b.ToNumberArray(d);
return new b.Point(d[0],d[1])
};
b.CreatePath=function(f){for(var f=b.ToNumberArray(f),g=[],e=0;
e<f.length;
e+=2){g.push(new b.Point(f[e],f[e+1]))
}return g
};
b.BoundingBox=function(c,f,e,g){this.y2=this.x2=this.y1=this.x1=Number.NaN;
this.x=function(){return this.x1
};
this.y=function(){return this.y1
};
this.width=function(){return this.x2-this.x1
};
this.height=function(){return this.y2-this.y1
};
this.addPoint=function(h,d){if(h!=null){if(isNaN(this.x1)||isNaN(this.x2)){this.x2=this.x1=h
}if(h<this.x1){this.x1=h
}if(h>this.x2){this.x2=h
}}if(d!=null){if(isNaN(this.y1)||isNaN(this.y2)){this.y2=this.y1=d
}if(d<this.y1){this.y1=d
}if(d>this.y2){this.y2=d
}}};
this.addX=function(d){this.addPoint(d,null)
};
this.addY=function(d){this.addPoint(null,d)
};
this.addBoundingBox=function(d){this.addPoint(d.x1,d.y1);
this.addPoint(d.x2,d.y2)
};
this.addQuadraticCurve=function(h,d,k,j,m,n){k=h+2/3*(k-h);
j=d+2/3*(j-d);
this.addBezierCurve(h,d,k,k+1/3*(m-h),j,j+1/3*(n-d),m,n)
};
this.addBezierCurve=function(k,j,s,r,u,v,y,x){var z=[k,j],d=[s,r],h=[u,v],w=[y,x];
this.addPoint(z[0],z[1]);
this.addPoint(w[0],w[1]);
for(i=0;
i<=1;
i++){k=function(l){return Math.pow(1-l,3)*z[i]+3*Math.pow(1-l,2)*l*d[i]+3*(1-l)*Math.pow(l,2)*h[i]+Math.pow(l,3)*w[i]
},j=6*z[i]-12*d[i]+6*h[i],s=-3*z[i]+9*d[i]-9*h[i]+3*w[i],r=3*d[i]-3*z[i],s==0?j!=0&&(j=-r/j,0<j&&j<1&&(i==0&&this.addX(k(j)),i==1&&this.addY(k(j)))):(r=Math.pow(j,2)-4*r*s,r<0||(u=(-j+Math.sqrt(r))/(2*s),0<u&&u<1&&(i==0&&this.addX(k(u)),i==1&&this.addY(k(u))),j=(-j-Math.sqrt(r))/(2*s),0<j&&j<1&&(i==0&&this.addX(k(j)),i==1&&this.addY(k(j)))))
}};
this.isPointInBox=function(h,d){return this.x1<=h&&h<=this.x2&&this.y1<=d&&d<=this.y2
};
this.addPoint(c,f);
this.addPoint(e,g)
};
b.Transform=function(g){var h=this;
this.Type={};
this.Type.translate=function(c){this.p=b.CreatePoint(c);
this.apply=function(d){d.translate(this.p.x||0,this.p.y||0)
};
this.applyToPoint=function(d){d.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])
}
};
this.Type.rotate=function(c){c=b.ToNumberArray(c);
this.angle=new b.Property("angle",c[0]);
this.cx=c[1]||0;
this.cy=c[2]||0;
this.apply=function(d){d.translate(this.cx,this.cy);
d.rotate(this.angle.Angle.toRadians());
d.translate(-this.cx,-this.cy)
};
this.applyToPoint=function(e){var d=this.angle.Angle.toRadians();
e.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]);
e.applyTransform([Math.cos(d),Math.sin(d),-Math.sin(d),Math.cos(d),0,0]);
e.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])
}
};
this.Type.scale=function(c){this.p=b.CreatePoint(c);
this.apply=function(d){d.scale(this.p.x||1,this.p.y||this.p.x||1)
};
this.applyToPoint=function(d){d.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])
}
};
this.Type.matrix=function(c){this.m=b.ToNumberArray(c);
this.apply=function(d){d.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])
};
this.applyToPoint=function(d){d.applyTransform(this.m)
}
};
this.Type.SkewBase=function(c){this.base=h.Type.matrix;
this.base(c);
this.angle=new b.Property("angle",c)
};
this.Type.SkewBase.prototype=new this.Type.matrix;
this.Type.skewX=function(c){this.base=h.Type.SkewBase;
this.base(c);
this.m=[1,0,Math.tan(this.angle.Angle.toRadians()),1,0,0]
};
this.Type.skewX.prototype=new this.Type.SkewBase;
this.Type.skewY=function(c){this.base=h.Type.SkewBase;
this.base(c);
this.m=[1,Math.tan(this.angle.Angle.toRadians()),0,1,0,0]
};
this.Type.skewY.prototype=new this.Type.SkewBase;
this.transforms=[];
this.apply=function(d){for(var c=0;
c<this.transforms.length;
c++){this.transforms[c].apply(d)
}};
this.applyToPoint=function(d){for(var c=0;
c<this.transforms.length;
c++){this.transforms[c].applyToPoint(d)
}};
for(var g=b.trim(b.compressSpaces(g)).split(/\s(?=[a-z])/),f=0;
f<g.length;
f++){var l=g[f].split("(")[0],j=g[f].split("(")[1].replace(")","");
this.transforms.push(new this.Type[l](j))
}};
b.AspectRatio=function(s,E,C,z,u,F,w,t,r,v){var E=b.compressSpaces(E),E=E.replace(/^defer\s/,""),D=E.split(" ")[0]||"xMidYMid",E=E.split(" ")[1]||"meet",x=C/z,A=u/F,y=Math.min(x,A),B=Math.max(x,A);
E=="meet"&&(z*=y,F*=y);
E=="slice"&&(z*=B,F*=B);
r=new b.Property("refX",r);
v=new b.Property("refY",v);
r.hasValue()&&v.hasValue()?s.translate(-y*r.Length.toPixels("x"),-y*v.Length.toPixels("y")):(D.match(/^xMid/)&&(E=="meet"&&y==A||E=="slice"&&B==A)&&s.translate(C/2-z/2,0),D.match(/YMid$/)&&(E=="meet"&&y==x||E=="slice"&&B==x)&&s.translate(0,u/2-F/2),D.match(/^xMax/)&&(E=="meet"&&y==A||E=="slice"&&B==A)&&s.translate(C-z,0),D.match(/YMax$/)&&(E=="meet"&&y==x||E=="slice"&&B==x)&&s.translate(0,u-F));
D=="none"?s.scale(x,A):E=="meet"?s.scale(y,y):E=="slice"&&s.scale(B,B);
s.translate(w==null?0:-w,t==null?0:-t)
};
b.Element={};
b.Element.ElementBase=function(g){this.attributes={};
this.styles={};
this.children=[];
this.attribute=function(c,e){var d=this.attributes[c];
if(d!=null){return d
}d=new b.Property(c,"");
e==!0&&(this.attributes[c]=d);
return d
};
this.style=function(c,e){var d=this.styles[c];
if(d!=null){return d
}d=this.attribute(c);
if(d!=null&&d.hasValue()){return d
}d=this.parent;
if(d!=null&&(d=d.style(c),d!=null&&d.hasValue())){return d
}d=new b.Property(c,"");
e==!0&&(this.styles[c]=d);
return d
};
this.render=function(d){if(this.style("display").value!="none"&&this.attribute("visibility").value!="hidden"){d.save();
this.setContext(d);
if(this.attribute("mask").hasValue()){var c=this.attribute("mask").Definition.getDefinition();
c!=null&&c.apply(d,this)
}else{this.style("filter").hasValue()?(c=this.style("filter").Definition.getDefinition(),c!=null&&c.apply(d,this)):this.renderChildren(d)
}this.clearContext(d);
d.restore()
}};
this.setContext=function(){};
this.clearContext=function(){};
this.renderChildren=function(d){for(var c=0;
c<this.children.length;
c++){this.children[c].render(d)
}};
this.addChild=function(c,e){var d=c;
e&&(d=b.CreateElement(c));
d.parent=this;
this.children.push(d)
};
if(g!=null&&g.nodeType==1){for(var h=0;
h<g.childNodes.length;
h++){var f=g.childNodes[h];
f.nodeType==1&&this.addChild(f,!0)
}for(h=0;
h<g.attributes.length;
h++){f=g.attributes[h],this.attributes[f.nodeName]=new b.Property(f.nodeName,f.nodeValue)
}f=b.Styles[g.nodeName];
if(f!=null){for(var l in f){this.styles[l]=f[l]
}}if(this.attribute("class").hasValue()){for(var h=b.compressSpaces(this.attribute("class").value).split(" "),j=0;
j<h.length;
j++){f=b.Styles["."+h[j]];
if(f!=null){for(l in f){this.styles[l]=f[l]
}}f=b.Styles[g.nodeName+"."+h[j]];
if(f!=null){for(l in f){this.styles[l]=f[l]
}}}}if(this.attribute("style").hasValue()){f=this.attribute("style").value.split(";");
for(h=0;
h<f.length;
h++){b.trim(f[h])!=""&&(g=f[h].split(":"),l=b.trim(g[0]),g=b.trim(g[1]),this.styles[l]=new b.Property(l,g))
}}this.attribute("id").hasValue()&&b.Definitions[this.attribute("id").value]==null&&(b.Definitions[this.attribute("id").value]=this)
}};
b.Element.RenderedElementBase=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.setContext=function(e){if(this.style("fill").Definition.isUrl()){var c=this.style("fill").Definition.getFillStyle(this);
if(c!=null){e.fillStyle=c
}}else{if(this.style("fill").hasValue()){c=this.style("fill"),this.style("fill-opacity").hasValue()&&(c=c.Color.addOpacity(this.style("fill-opacity").value)),e.fillStyle=c.value=="none"?"rgba(0,0,0,0)":c.value
}}if(this.style("stroke").Definition.isUrl()){if(c=this.style("stroke").Definition.getFillStyle(this),c!=null){e.strokeStyle=c
}}else{if(this.style("stroke").hasValue()){c=this.style("stroke"),this.style("stroke-opacity").hasValue()&&(c=c.Color.addOpacity(this.style("stroke-opacity").value)),e.strokeStyle=c.value=="none"?"rgba(0,0,0,0)":c.value
}}if(this.style("stroke-width").hasValue()){e.lineWidth=this.style("stroke-width").Length.toPixels()
}if(this.style("stroke-linecap").hasValue()){e.lineCap=this.style("stroke-linecap").value
}if(this.style("stroke-linejoin").hasValue()){e.lineJoin=this.style("stroke-linejoin").value
}if(this.style("stroke-miterlimit").hasValue()){e.miterLimit=this.style("stroke-miterlimit").value
}if(typeof e.font!="undefined"){e.font=b.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").Length.toPixels()+"px":"",this.style("font-family").value).toString()
}this.attribute("transform").hasValue()&&(new b.Transform(this.attribute("transform").value)).apply(e);
this.attribute("clip-path").hasValue()&&(c=this.attribute("clip-path").Definition.getDefinition(),c!=null&&c.apply(e));
if(this.style("opacity").hasValue()){e.globalAlpha=this.style("opacity").numValue()
}}
};
b.Element.RenderedElementBase.prototype=new b.Element.ElementBase;
b.Element.PathElementBase=function(d){this.base=b.Element.RenderedElementBase;
this.base(d);
this.path=function(c){c!=null&&c.beginPath();
return new b.BoundingBox
};
this.renderChildren=function(g){this.path(g);
b.Mouse.checkPath(this,g);
g.fillStyle!=""&&g.fill();
g.strokeStyle!=""&&g.stroke();
var c=this.getMarkers();
if(c!=null){if(this.style("marker-start").Definition.isUrl()){var f=this.style("marker-start").Definition.getDefinition();
f.render(g,c[0][0],c[0][1])
}if(this.style("marker-mid").Definition.isUrl()){for(var f=this.style("marker-mid").Definition.getDefinition(),h=1;
h<c.length-1;
h++){f.render(g,c[h][0],c[h][1])
}}this.style("marker-end").Definition.isUrl()&&(f=this.style("marker-end").Definition.getDefinition(),f.render(g,c[c.length-1][0],c[c.length-1][1]))
}};
this.getBoundingBox=function(){return this.path()
};
this.getMarkers=function(){return null
}
};
b.Element.PathElementBase.prototype=new b.Element.RenderedElementBase;
b.Element.svg=function(d){this.base=b.Element.RenderedElementBase;
this.base(d);
this.baseClearContext=this.clearContext;
this.clearContext=function(c){this.baseClearContext(c);
b.ViewPort.RemoveCurrent()
};
this.baseSetContext=this.setContext;
this.setContext=function(j){j.strokeStyle="rgba(0,0,0,0)";
j.lineCap="butt";
j.lineJoin="miter";
j.miterLimit=4;
this.baseSetContext(j);
this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&j.translate(this.attribute("x").Length.toPixels("x"),this.attribute("y").Length.toPixels("y"));
var c=b.ViewPort.width(),h=b.ViewPort.height();
if(typeof this.root=="undefined"&&this.attribute("width").hasValue()&&this.attribute("height").hasValue()){var c=this.attribute("width").Length.toPixels("x"),h=this.attribute("height").Length.toPixels("y"),k=0,l=0;
this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(k=-this.attribute("refX").Length.toPixels("x"),l=-this.attribute("refY").Length.toPixels("y"));
j.beginPath();
j.moveTo(k,l);
j.lineTo(c,l);
j.lineTo(c,h);
j.lineTo(k,h);
j.closePath();
j.clip()
}b.ViewPort.SetCurrent(c,h);
if(this.attribute("viewBox").hasValue()){var k=b.ToNumberArray(this.attribute("viewBox").value),l=k[0],m=k[1],c=k[2],h=k[3];
b.AspectRatio(j,this.attribute("preserveAspectRatio").value,b.ViewPort.width(),c,b.ViewPort.height(),h,l,m,this.attribute("refX").value,this.attribute("refY").value);
b.ViewPort.RemoveCurrent();
b.ViewPort.SetCurrent(k[2],k[3])
}}
};
b.Element.svg.prototype=new b.Element.RenderedElementBase;
b.Element.rect=function(d){this.base=b.Element.PathElementBase;
this.base(d);
this.path=function(k){var c=this.attribute("x").Length.toPixels("x"),h=this.attribute("y").Length.toPixels("y"),l=this.attribute("width").Length.toPixels("x"),m=this.attribute("height").Length.toPixels("y"),n=this.attribute("rx").Length.toPixels("x"),o=this.attribute("ry").Length.toPixels("y");
this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(o=n);
this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(n=o);
k!=null&&(k.beginPath(),k.moveTo(c+n,h),k.lineTo(c+l-n,h),k.quadraticCurveTo(c+l,h,c+l,h+o),k.lineTo(c+l,h+m-o),k.quadraticCurveTo(c+l,h+m,c+l-n,h+m),k.lineTo(c+n,h+m),k.quadraticCurveTo(c,h+m,c,h+m-o),k.lineTo(c,h+o),k.quadraticCurveTo(c,h,c+n,h),k.closePath());
return new b.BoundingBox(c,h,c+l,h+m)
}
};
b.Element.rect.prototype=new b.Element.PathElementBase;
b.Element.circle=function(d){this.base=b.Element.PathElementBase;
this.base(d);
this.path=function(g){var c=this.attribute("cx").Length.toPixels("x"),f=this.attribute("cy").Length.toPixels("y"),h=this.attribute("r").Length.toPixels();
g!=null&&(g.beginPath(),g.arc(c,f,h,0,Math.PI*2,!0),g.closePath());
return new b.BoundingBox(c-h,f-h,c+h,f+h)
}
};
b.Element.circle.prototype=new b.Element.PathElementBase;
b.Element.ellipse=function(d){this.base=b.Element.PathElementBase;
this.base(d);
this.path=function(j){var c=4*((Math.sqrt(2)-1)/3),h=this.attribute("rx").Length.toPixels("x"),k=this.attribute("ry").Length.toPixels("y"),l=this.attribute("cx").Length.toPixels("x"),m=this.attribute("cy").Length.toPixels("y");
j!=null&&(j.beginPath(),j.moveTo(l,m-k),j.bezierCurveTo(l+c*h,m-k,l+h,m-c*k,l+h,m),j.bezierCurveTo(l+h,m+c*k,l+c*h,m+k,l,m+k),j.bezierCurveTo(l-c*h,m+k,l-h,m+c*k,l-h,m),j.bezierCurveTo(l-h,m-c*k,l-c*h,m-k,l,m-k),j.closePath());
return new b.BoundingBox(l-h,m-k,l+h,m+k)
}
};
b.Element.ellipse.prototype=new b.Element.PathElementBase;
b.Element.line=function(d){this.base=b.Element.PathElementBase;
this.base(d);
this.getPoints=function(){return[new b.Point(this.attribute("x1").Length.toPixels("x"),this.attribute("y1").Length.toPixels("y")),new b.Point(this.attribute("x2").Length.toPixels("x"),this.attribute("y2").Length.toPixels("y"))]
};
this.path=function(e){var c=this.getPoints();
e!=null&&(e.beginPath(),e.moveTo(c[0].x,c[0].y),e.lineTo(c[1].x,c[1].y));
return new b.BoundingBox(c[0].x,c[0].y,c[1].x,c[1].y)
};
this.getMarkers=function(){var c=this.getPoints(),e=c[0].angleTo(c[1]);
return[[c[0],e],[c[1],e]]
}
};
b.Element.line.prototype=new b.Element.PathElementBase;
b.Element.polyline=function(d){this.base=b.Element.PathElementBase;
this.base(d);
this.points=b.CreatePath(this.attribute("points").value);
this.path=function(f){var c=new b.BoundingBox(this.points[0].x,this.points[0].y);
f!=null&&(f.beginPath(),f.moveTo(this.points[0].x,this.points[0].y));
for(var e=1;
e<this.points.length;
e++){c.addPoint(this.points[e].x,this.points[e].y),f!=null&&f.lineTo(this.points[e].x,this.points[e].y)
}return c
};
this.getMarkers=function(){for(var c=[],e=0;
e<this.points.length-1;
e++){c.push([this.points[e],this.points[e].angleTo(this.points[e+1])])
}c.push([this.points[this.points.length-1],c[c.length-1][1]]);
return c
}
};
b.Element.polyline.prototype=new b.Element.PathElementBase;
b.Element.polygon=function(d){this.base=b.Element.polyline;
this.base(d);
this.basePath=this.path;
this.path=function(c){var e=this.basePath(c);
c!=null&&(c.lineTo(this.points[0].x,this.points[0].y),c.closePath());
return e
}
};
b.Element.polygon.prototype=new b.Element.polyline;
b.Element.path=function(d){this.base=b.Element.PathElementBase;
this.base(d);
d=this.attribute("d").value;
d=d.replace(/,/gm," ");
d=d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");
d=d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");
d=d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");
d=d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");
d=d.replace(/([0-9])([+\-])/gm,"$1 $2");
d=d.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");
d=d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 ");
d=b.compressSpaces(d);
d=b.trim(d);
this.PathParser=new function(c){this.tokens=c.split(" ");
this.reset=function(){this.i=-1;
this.previousCommand=this.command="";
this.start=new b.Point(0,0);
this.control=new b.Point(0,0);
this.current=new b.Point(0,0);
this.points=[];
this.angles=[]
};
this.isEnd=function(){return this.i>=this.tokens.length-1
};
this.isCommandOrEnd=function(){return this.isEnd()?!0:this.tokens[this.i+1].match(/^[A-Za-z]$/)!=null
};
this.isRelativeCommand=function(){return this.command==this.command.toLowerCase()
};
this.getToken=function(){this.i+=1;
return this.tokens[this.i]
};
this.getScalar=function(){return parseFloat(this.getToken())
};
this.nextCommand=function(){this.previousCommand=this.command;
this.command=this.getToken()
};
this.getPoint=function(){return this.makeAbsolute(new b.Point(this.getScalar(),this.getScalar()))
};
this.getAsControlPoint=function(){var e=this.getPoint();
return this.control=e
};
this.getAsCurrentPoint=function(){var e=this.getPoint();
return this.current=e
};
this.getReflectedControlPoint=function(){return this.previousCommand.toLowerCase()!="c"&&this.previousCommand.toLowerCase()!="s"?this.current:new b.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y)
};
this.makeAbsolute=function(e){if(this.isRelativeCommand()){e.x=this.current.x+e.x,e.y=this.current.y+e.y
}return e
};
this.addMarker=function(f,e,g){g!=null&&this.angles.length>0&&this.angles[this.angles.length-1]==null&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(g));
this.addMarkerAngle(f,e==null?null:e.angleTo(f))
};
this.addMarkerAngle=function(f,e){this.points.push(f);
this.angles.push(e)
};
this.getMarkerPoints=function(){return this.points
};
this.getMarkerAngles=function(){for(var f=0;
f<this.angles.length;
f++){if(this.angles[f]==null){for(var e=f+1;
e<this.angles.length;
e++){if(this.angles[e]!=null){this.angles[f]=this.angles[e];
break
}}}}return this.angles
}
}(d);
this.path=function(r){var A=this.PathParser;
A.reset();
var C=new b.BoundingBox;
for(r!=null&&r.beginPath();
!A.isEnd();
){switch(A.nextCommand(),A.command.toUpperCase()){case"M":var y=A.getAsCurrentPoint();
A.addMarker(y);
C.addPoint(y.x,y.y);
r!=null&&r.moveTo(y.x,y.y);
for(A.start=A.current;
!A.isCommandOrEnd();
){y=A.getAsCurrentPoint(),A.addMarker(y,A.start),C.addPoint(y.x,y.y),r!=null&&r.lineTo(y.x,y.y)
}break;
case"L":for(;
!A.isCommandOrEnd();
){var B=A.current,y=A.getAsCurrentPoint();
A.addMarker(y,B);
C.addPoint(y.x,y.y);
r!=null&&r.lineTo(y.x,y.y)
}break;
case"H":for(;
!A.isCommandOrEnd();
){y=new b.Point((A.isRelativeCommand()?A.current.x:0)+A.getScalar(),A.current.y),A.addMarker(y,A.current),A.current=y,C.addPoint(A.current.x,A.current.y),r!=null&&r.lineTo(A.current.x,A.current.y)
}break;
case"V":for(;
!A.isCommandOrEnd();
){y=new b.Point(A.current.x,(A.isRelativeCommand()?A.current.y:0)+A.getScalar()),A.addMarker(y,A.current),A.current=y,C.addPoint(A.current.x,A.current.y),r!=null&&r.lineTo(A.current.x,A.current.y)
}break;
case"C":for(;
!A.isCommandOrEnd();
){var w=A.current,B=A.getPoint(),k=A.getAsControlPoint(),y=A.getAsCurrentPoint();
A.addMarker(y,k,B);
C.addBezierCurve(w.x,w.y,B.x,B.y,k.x,k.y,y.x,y.y);
r!=null&&r.bezierCurveTo(B.x,B.y,k.x,k.y,y.x,y.y)
}break;
case"S":for(;
!A.isCommandOrEnd();
){w=A.current,B=A.getReflectedControlPoint(),k=A.getAsControlPoint(),y=A.getAsCurrentPoint(),A.addMarker(y,k,B),C.addBezierCurve(w.x,w.y,B.x,B.y,k.x,k.y,y.x,y.y),r!=null&&r.bezierCurveTo(B.x,B.y,k.x,k.y,y.x,y.y)
}break;
case"Q":for(;
!A.isCommandOrEnd();
){w=A.current,k=A.getAsControlPoint(),y=A.getAsCurrentPoint(),A.addMarker(y,k,k),C.addQuadraticCurve(w.x,w.y,k.x,k.y,y.x,y.y),r!=null&&r.quadraticCurveTo(k.x,k.y,y.x,y.y)
}break;
case"T":for(;
!A.isCommandOrEnd();
){w=A.current,k=A.getReflectedControlPoint(),A.control=k,y=A.getAsCurrentPoint(),A.addMarker(y,k,k),C.addQuadraticCurve(w.x,w.y,k.x,k.y,y.x,y.y),r!=null&&r.quadraticCurveTo(k.x,k.y,y.x,y.y)
}break;
case"A":for(;
!A.isCommandOrEnd();
){var w=A.current,x=A.getScalar(),D=A.getScalar(),B=A.getScalar()*(Math.PI/180),v=A.getScalar(),k=A.getScalar(),y=A.getAsCurrentPoint(),t=new b.Point(Math.cos(B)*(w.x-y.x)/2+Math.sin(B)*(w.y-y.y)/2,-Math.sin(B)*(w.x-y.x)/2+Math.cos(B)*(w.y-y.y)/2),u=Math.pow(t.x,2)/Math.pow(x,2)+Math.pow(t.y,2)/Math.pow(D,2);
u>1&&(x*=Math.sqrt(u),D*=Math.sqrt(u));
v=(v==k?-1:1)*Math.sqrt((Math.pow(x,2)*Math.pow(D,2)-Math.pow(x,2)*Math.pow(t.y,2)-Math.pow(D,2)*Math.pow(t.x,2))/(Math.pow(x,2)*Math.pow(t.y,2)+Math.pow(D,2)*Math.pow(t.x,2)));
isNaN(v)&&(v=0);
var c=new b.Point(v*x*t.y/D,v*-D*t.x/x),w=new b.Point((w.x+y.x)/2+Math.cos(B)*c.x-Math.sin(B)*c.y,(w.y+y.y)/2+Math.sin(B)*c.x+Math.cos(B)*c.y),z=function(f,e){return(f[0]*e[0]+f[1]*e[1])/(Math.sqrt(Math.pow(f[0],2)+Math.pow(f[1],2))*Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)))
},E=function(f,e){return(f[0]*e[1]<f[1]*e[0]?-1:1)*Math.acos(z(f,e))
},v=E([1,0],[(t.x-c.x)/x,(t.y-c.y)/D]),u=[(t.x-c.x)/x,(t.y-c.y)/D],c=[(-t.x-c.x)/x,(-t.y-c.y)/D],t=E(u,c);
if(z(u,c)<=-1){t=Math.PI
}z(u,c)>=1&&(t=0);
k==0&&t>0&&(t-=2*Math.PI);
k==1&&t<0&&(t+=2*Math.PI);
u=new b.Point(w.x-x*Math.cos((v+t)/2),w.y-D*Math.sin((v+t)/2));
A.addMarkerAngle(u,(v+t)/2+(k==0?1:-1)*Math.PI/2);
A.addMarkerAngle(y,t+(k==0?1:-1)*Math.PI/2);
C.addPoint(y.x,y.y);
r!=null&&(z=x>D?x:D,y=x>D?1:x/D,x=x>D?D/x:1,r.translate(w.x,w.y),r.rotate(B),r.scale(y,x),r.arc(0,0,z,v,v+t,1-k),r.scale(1/y,1/x),r.rotate(-B),r.translate(-w.x,-w.y))
}break;
case"Z":r!=null&&r.closePath(),A.current=A.start
}}return C
};
this.getMarkers=function(){for(var c=this.PathParser.getMarkerPoints(),f=this.PathParser.getMarkerAngles(),g=[],h=0;
h<c.length;
h++){g.push([c[h],f[h]])
}return g
}
};
b.Element.path.prototype=new b.Element.PathElementBase;
b.Element.pattern=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.createPattern=function(f){var c=new b.Element.svg;
c.attributes.viewBox=new b.Property("viewBox",this.attribute("viewBox").value);
c.attributes.x=new b.Property("x",this.attribute("x").value);
c.attributes.y=new b.Property("y",this.attribute("y").value);
c.attributes.width=new b.Property("width",this.attribute("width").value);
c.attributes.height=new b.Property("height",this.attribute("height").value);
c.children=this.children;
var e=document.createElement("canvas");
e.width=this.attribute("width").Length.toPixels("x");
e.height=this.attribute("height").Length.toPixels("y");
c.render(e.getContext("2d"));
return f.createPattern(e,"repeat")
}
};
b.Element.pattern.prototype=new b.Element.ElementBase;
b.Element.marker=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.baseRender=this.render;
this.render=function(g,c,f){g.translate(c.x,c.y);
this.attribute("orient").valueOrDefault("auto")=="auto"&&g.rotate(f);
this.attribute("markerUnits").valueOrDefault("strokeWidth")=="strokeWidth"&&g.scale(g.lineWidth,g.lineWidth);
g.save();
var h=new b.Element.svg;
h.attributes.viewBox=new b.Property("viewBox",this.attribute("viewBox").value);
h.attributes.refX=new b.Property("refX",this.attribute("refX").value);
h.attributes.refY=new b.Property("refY",this.attribute("refY").value);
h.attributes.width=new b.Property("width",this.attribute("markerWidth").value);
h.attributes.height=new b.Property("height",this.attribute("markerHeight").value);
h.attributes.fill=new b.Property("fill",this.attribute("fill").valueOrDefault("black"));
h.attributes.stroke=new b.Property("stroke",this.attribute("stroke").valueOrDefault("none"));
h.children=this.children;
h.render(g);
g.restore();
this.attribute("markerUnits").valueOrDefault("strokeWidth")=="strokeWidth"&&g.scale(1/g.lineWidth,1/g.lineWidth);
this.attribute("orient").valueOrDefault("auto")=="auto"&&g.rotate(-f);
g.translate(-c.x,-c.y)
}
};
b.Element.marker.prototype=new b.Element.ElementBase;
b.Element.defs=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.render=function(){}
};
b.Element.defs.prototype=new b.Element.ElementBase;
b.Element.GradientBase=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.gradientUnits=this.attribute("gradientUnits").valueOrDefault("objectBoundingBox");
this.stops=[];
for(d=0;
d<this.children.length;
d++){this.stops.push(this.children[d])
}this.getGradient=function(){};
this.createGradient=function(j,c){var h=this;
this.attribute("xlink:href").hasValue()&&(h=this.attribute("xlink:href").Definition.getDefinition());
for(var k=this.getGradient(j,c),l=0;
l<h.stops.length;
l++){k.addColorStop(h.stops[l].offset,h.stops[l].color)
}if(this.attribute("gradientTransform").hasValue()){h=b.ViewPort.viewPorts[0];
l=new b.Element.rect;
l.attributes.x=new b.Property("x",-b.MAX_VIRTUAL_PIXELS/3);
l.attributes.y=new b.Property("y",-b.MAX_VIRTUAL_PIXELS/3);
l.attributes.width=new b.Property("width",b.MAX_VIRTUAL_PIXELS);
l.attributes.height=new b.Property("height",b.MAX_VIRTUAL_PIXELS);
var m=new b.Element.g;
m.attributes.transform=new b.Property("transform",this.attribute("gradientTransform").value);
m.children=[l];
l=new b.Element.svg;
l.attributes.x=new b.Property("x",0);
l.attributes.y=new b.Property("y",0);
l.attributes.width=new b.Property("width",h.width);
l.attributes.height=new b.Property("height",h.height);
l.children=[m];
m=document.createElement("canvas");
m.width=h.width;
m.height=h.height;
h=m.getContext("2d");
h.fillStyle=k;
l.render(h);
return h.createPattern(m,"no-repeat")
}return k
}
};
b.Element.GradientBase.prototype=new b.Element.ElementBase;
b.Element.linearGradient=function(d){this.base=b.Element.GradientBase;
this.base(d);
this.getGradient=function(c,h){var j=h.getBoundingBox(),k=this.gradientUnits=="objectBoundingBox"?j.x()+j.width()*this.attribute("x1").numValue():this.attribute("x1").Length.toPixels("x"),l=this.gradientUnits=="objectBoundingBox"?j.y()+j.height()*this.attribute("y1").numValue():this.attribute("y1").Length.toPixels("y"),m=this.gradientUnits=="objectBoundingBox"?j.x()+j.width()*this.attribute("x2").numValue():this.attribute("x2").Length.toPixels("x"),j=this.gradientUnits=="objectBoundingBox"?j.y()+j.height()*this.attribute("y2").numValue():this.attribute("y2").Length.toPixels("y");
return c.createLinearGradient(k,l,m,j)
}
};
b.Element.linearGradient.prototype=new b.Element.GradientBase;
b.Element.radialGradient=function(d){this.base=b.Element.GradientBase;
this.base(d);
this.getGradient=function(c,h){var k=h.getBoundingBox(),l=this.gradientUnits=="objectBoundingBox"?k.x()+k.width()*this.attribute("cx").numValue():this.attribute("cx").Length.toPixels("x"),m=this.gradientUnits=="objectBoundingBox"?k.y()+k.height()*this.attribute("cy").numValue():this.attribute("cy").Length.toPixels("y"),n=l,o=m;
this.attribute("fx").hasValue()&&(n=this.gradientUnits=="objectBoundingBox"?k.x()+k.width()*this.attribute("fx").numValue():this.attribute("fx").Length.toPixels("x"));
this.attribute("fy").hasValue()&&(o=this.gradientUnits=="objectBoundingBox"?k.y()+k.height()*this.attribute("fy").numValue():this.attribute("fy").Length.toPixels("y"));
k=this.gradientUnits=="objectBoundingBox"?(k.width()+k.height())/2*this.attribute("r").numValue():this.attribute("r").Length.toPixels();
return c.createRadialGradient(n,o,0,l,m,k)
}
};
b.Element.radialGradient.prototype=new b.Element.GradientBase;
b.Element.stop=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.offset=this.attribute("offset").numValue();
d=this.style("stop-color");
this.style("stop-opacity").hasValue()&&(d=d.Color.addOpacity(this.style("stop-opacity").value));
this.color=d.value
};
b.Element.stop.prototype=new b.Element.ElementBase;
b.Element.AnimateBase=function(d){this.base=b.Element.ElementBase;
this.base(d);
b.Animations.push(this);
this.duration=0;
this.begin=this.attribute("begin").Time.toMilliseconds();
this.maxDuration=this.begin+this.attribute("dur").Time.toMilliseconds();
this.getProperty=function(){var c=this.attribute("attributeType").value,e=this.attribute("attributeName").value;
return c=="CSS"?this.parent.style(e,!0):this.parent.attribute(e,!0)
};
this.initialValue=null;
this.removed=!1;
this.calcValue=function(){return""
};
this.update=function(c){if(this.initialValue==null){this.initialValue=this.getProperty().value
}if(this.duration>this.maxDuration){if(this.attribute("repeatCount").value=="indefinite"){this.duration=0
}else{return this.attribute("fill").valueOrDefault("remove")=="remove"&&!this.removed?(this.removed=!0,this.getProperty().value=this.initialValue,!0):!1
}}this.duration+=c;
c=!1;
if(this.begin<this.duration){c=this.calcValue(),this.attribute("type").hasValue()&&(c=this.attribute("type").value+"("+c+")"),this.getProperty().value=c,c=!0
}return c
};
this.progress=function(){return(this.duration-this.begin)/(this.maxDuration-this.begin)
}
};
b.Element.AnimateBase.prototype=new b.Element.ElementBase;
b.Element.animate=function(d){this.base=b.Element.AnimateBase;
this.base(d);
this.calcValue=function(){var c=this.attribute("from").numValue(),e=this.attribute("to").numValue();
return c+(e-c)*this.progress()
}
};
b.Element.animate.prototype=new b.Element.AnimateBase;
b.Element.animateColor=function(d){this.base=b.Element.AnimateBase;
this.base(d);
this.calcValue=function(){var c=new RGBColor(this.attribute("from").value),f=new RGBColor(this.attribute("to").value);
if(c.ok&&f.ok){var g=c.r+(f.r-c.r)*this.progress(),h=c.g+(f.g-c.g)*this.progress(),c=c.b+(f.b-c.b)*this.progress();
return"rgb("+parseInt(g,10)+","+parseInt(h,10)+","+parseInt(c,10)+")"
}return this.attribute("from").value
}
};
b.Element.animateColor.prototype=new b.Element.AnimateBase;
b.Element.animateTransform=function(d){this.base=b.Element.animate;
this.base(d)
};
b.Element.animateTransform.prototype=new b.Element.animate;
b.Element.font=function(e){this.base=b.Element.ElementBase;
this.base(e);
this.horizAdvX=this.attribute("horiz-adv-x").numValue();
this.isArabic=this.isRTL=!1;
this.missingGlyph=this.fontFace=null;
this.glyphs=[];
for(e=0;
e<this.children.length;
e++){var f=this.children[e];
if(f.type=="font-face"){this.fontFace=f,f.style("font-family").hasValue()&&(b.Definitions[f.style("font-family").value]=this)
}else{if(f.type=="missing-glyph"){this.missingGlyph=f
}else{if(f.type=="glyph"){f.arabicForm!=""?(this.isArabic=this.isRTL=!0,typeof this.glyphs[f.unicode]=="undefined"&&(this.glyphs[f.unicode]=[]),this.glyphs[f.unicode][f.arabicForm]=f):this.glyphs[f.unicode]=f
}}}}};
b.Element.font.prototype=new b.Element.ElementBase;
b.Element.fontface=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.ascent=this.attribute("ascent").value;
this.descent=this.attribute("descent").value;
this.unitsPerEm=this.attribute("units-per-em").numValue()
};
b.Element.fontface.prototype=new b.Element.ElementBase;
b.Element.missingglyph=function(d){this.base=b.Element.path;
this.base(d);
this.horizAdvX=0
};
b.Element.missingglyph.prototype=new b.Element.path;
b.Element.glyph=function(d){this.base=b.Element.path;
this.base(d);
this.horizAdvX=this.attribute("horiz-adv-x").numValue();
this.unicode=this.attribute("unicode").value;
this.arabicForm=this.attribute("arabic-form").value
};
b.Element.glyph.prototype=new b.Element.path;
b.Element.text=function(f){this.base=b.Element.RenderedElementBase;
this.base(f);
if(f!=null){this.children=[];
for(var g=0;
g<f.childNodes.length;
g++){var e=f.childNodes[g];
e.nodeType==1?this.addChild(e,!0):e.nodeType==3&&this.addChild(new b.Element.tspan(e),!1)
}}this.baseSetContext=this.setContext;
this.setContext=function(c){this.baseSetContext(c);
if(this.style("dominant-baseline").hasValue()){c.textBaseline=this.style("dominant-baseline").value
}if(this.style("alignment-baseline").hasValue()){c.textBaseline=this.style("alignment-baseline").value
}};
this.renderChildren=function(d){for(var c=this.style("text-anchor").valueOrDefault("start"),h=this.attribute("x").Length.toPixels("x"),k=this.attribute("y").Length.toPixels("y"),p=0;
p<this.children.length;
p++){var m=this.children[p];
m.attribute("x").hasValue()?m.x=m.attribute("x").Length.toPixels("x"):(m.attribute("dx").hasValue()&&(h+=m.attribute("dx").Length.toPixels("x")),m.x=h);
h=m.measureText(d);
if(c!="start"&&(p==0||m.attribute("x").hasValue())){for(var q=h,s=p+1;
s<this.children.length;
s++){var r=this.children[s];
if(r.attribute("x").hasValue()){break
}q+=r.measureText(d)
}m.x-=c=="end"?q:q/2
}h=m.x+h;
m.attribute("y").hasValue()?m.y=m.attribute("y").Length.toPixels("y"):(m.attribute("dy").hasValue()&&(k+=m.attribute("dy").Length.toPixels("y")),m.y=k);
k=m.y;
m.render(d)
}}
};
b.Element.text.prototype=new b.Element.RenderedElementBase;
b.Element.TextElementBase=function(d){this.base=b.Element.RenderedElementBase;
this.base(d);
this.getGlyph=function(c,h,j){var k=h[j],l=null;
if(c.isArabic){var m="isolated";
if((j==0||h[j-1]==" ")&&j<h.length-2&&h[j+1]!=" "){m="terminal"
}j>0&&h[j-1]!=" "&&j<h.length-2&&h[j+1]!=" "&&(m="medial");
if(j>0&&h[j-1]!=" "&&(j==h.length-1||h[j+1]==" ")){m="initial"
}typeof c.glyphs[k]!="undefined"&&(l=c.glyphs[k][m],l==null&&c.glyphs[k].type=="glyph"&&(l=c.glyphs[k]))
}else{l=c.glyphs[k]
}if(l==null){l=c.missingGlyph
}return l
};
this.renderChildren=function(m){var c=this.parent.style("font-family").Definition.getDefinition();
if(c!=null){var t=this.parent.style("font-size").numValueOrDefault(b.Font.Parse(b.ctx.font).fontSize),n=this.parent.style("font-style").valueOrDefault(b.Font.Parse(b.ctx.font).fontStyle),p=this.getText();
c.isRTL&&(p=p.split("").reverse().join(""));
for(var q=b.ToNumberArray(this.parent.attribute("dx").value),s=0;
s<p.length;
s++){var r=this.getGlyph(c,p,s),u=t/c.fontFace.unitsPerEm;
m.translate(this.x,this.y);
m.scale(u,-u);
var v=m.lineWidth;
m.lineWidth=m.lineWidth*c.fontFace.unitsPerEm/t;
n=="italic"&&m.transform(1,0,0.4,1,0,0);
r.render(m);
n=="italic"&&m.transform(1,0,-0.4,1,0,0);
m.lineWidth=v;
m.scale(1/u,-1/u);
m.translate(-this.x,-this.y);
this.x+=t*(r.horizAdvX||c.horizAdvX)/c.fontFace.unitsPerEm;
typeof q[s]!="undefined"&&!isNaN(q[s])&&(this.x+=q[s])
}}else{m.strokeStyle!=""&&m.strokeText(b.compressSpaces(this.getText()),this.x,this.y),m.fillStyle!=""&&m.fillText(b.compressSpaces(this.getText()),this.x,this.y)
}};
this.getText=function(){};
this.measureText=function(h){var c=this.parent.style("font-family").Definition.getDefinition();
if(c!=null){var h=this.parent.style("font-size").numValueOrDefault(b.Font.Parse(b.ctx.font).fontSize),p=0,l=this.getText();
c.isRTL&&(l=l.split("").reverse().join(""));
for(var m=b.ToNumberArray(this.parent.attribute("dx").value),n=0;
n<l.length;
n++){var o=this.getGlyph(c,l,n);
p+=(o.horizAdvX||c.horizAdvX)*h/c.fontFace.unitsPerEm;
typeof m[n]!="undefined"&&!isNaN(m[n])&&(p+=m[n])
}return p
}c=b.compressSpaces(this.getText());
if(!h.measureText){return c.length*10
}h.save();
this.setContext(h);
c=h.measureText(c).width;
h.restore();
return c
}
};
b.Element.TextElementBase.prototype=new b.Element.RenderedElementBase;
b.Element.tspan=function(d){this.base=b.Element.TextElementBase;
this.base(d);
this.text=d.nodeType==3?d.nodeValue:d.childNodes.length>0?d.childNodes[0].nodeValue:d.text;
this.getText=function(){return this.text
}
};
b.Element.tspan.prototype=new b.Element.TextElementBase;
b.Element.tref=function(d){this.base=b.Element.TextElementBase;
this.base(d);
this.getText=function(){var c=this.attribute("xlink:href").Definition.getDefinition();
if(c!=null){return c.children[0].getText()
}}
};
b.Element.tref.prototype=new b.Element.TextElementBase;
b.Element.a=function(e){this.base=b.Element.TextElementBase;
this.base(e);
this.hasText=!0;
for(var f=0;
f<e.childNodes.length;
f++){if(e.childNodes[f].nodeType!=3){this.hasText=!1
}}this.text=this.hasText?e.childNodes[0].nodeValue:"";
this.getText=function(){return this.text
};
this.baseRenderChildren=this.renderChildren;
this.renderChildren=function(c){if(this.hasText){this.baseRenderChildren(c);
var d=new b.Property("fontSize",b.Font.Parse(b.ctx.font).fontSize);
b.Mouse.checkBoundingBox(this,new b.BoundingBox(this.x,this.y-d.Length.toPixels("y"),this.x+this.measureText(c),this.y))
}else{d=new b.Element.g,d.children=this.children,d.parent=this,d.render(c)
}};
this.onclick=function(){window.open(this.attribute("xlink:href").value)
};
this.onmousemove=function(){b.ctx.canvas.style.cursor="pointer"
}
};
b.Element.a.prototype=new b.Element.TextElementBase;
b.Element.image=function(e){this.base=b.Element.RenderedElementBase;
this.base(e);
b.Images.push(this);
this.img=document.createElement("img");
this.loaded=!1;
var f=this;
this.img.onload=function(){f.loaded=!0
};
this.img.src=this.attribute("xlink:href").value;
this.renderChildren=function(c){var d=this.attribute("x").Length.toPixels("x"),h=this.attribute("y").Length.toPixels("y"),j=this.attribute("width").Length.toPixels("x"),k=this.attribute("height").Length.toPixels("y");
j==0||k==0||(c.save(),c.translate(d,h),b.AspectRatio(c,this.attribute("preserveAspectRatio").value,j,this.img.width,k,this.img.height,0,0),c.drawImage(this.img,0,0),c.restore())
}
};
b.Element.image.prototype=new b.Element.RenderedElementBase;
b.Element.g=function(d){this.base=b.Element.RenderedElementBase;
this.base(d);
this.getBoundingBox=function(){for(var e=new b.BoundingBox,c=0;
c<this.children.length;
c++){e.addBoundingBox(this.children[c].getBoundingBox())
}return e
}
};
b.Element.g.prototype=new b.Element.RenderedElementBase;
b.Element.symbol=function(d){this.base=b.Element.RenderedElementBase;
this.base(d);
this.baseSetContext=this.setContext;
this.setContext=function(f){this.baseSetContext(f);
if(this.attribute("viewBox").hasValue()){var c=b.ToNumberArray(this.attribute("viewBox").value),h=c[0],g=c[1];
width=c[2];
height=c[3];
b.AspectRatio(f,this.attribute("preserveAspectRatio").value,this.attribute("width").Length.toPixels("x"),width,this.attribute("height").Length.toPixels("y"),height,h,g);
b.ViewPort.SetCurrent(c[2],c[3])
}}
};
b.Element.symbol.prototype=new b.Element.RenderedElementBase;
b.Element.style=function(n){this.base=b.Element.ElementBase;
this.base(n);
for(var n=n.childNodes[0].nodeValue+(n.childNodes.length>1?n.childNodes[1].nodeValue:""),n=n.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,""),n=b.compressSpaces(n),n=n.split("}"),p=0;
p<n.length;
p++){if(b.trim(n[p])!=""){for(var m=n[p].split("{"),v=m[0].split(","),m=m[1].split(";"),q=0;
q<v.length;
q++){var r=b.trim(v[q]);
if(r!=""){for(var s={},u=0;
u<m.length;
u++){var t=m[u].indexOf(":"),w=m[u].substr(0,t),t=m[u].substr(t+1,m[u].length-t);
w!=null&&t!=null&&(s[b.trim(w)]=new b.Property(b.trim(w),b.trim(t)))
}b.Styles[r]=s;
if(r=="@font-face"){r=s["font-family"].value.replace(/"/g,"");
s=s.src.value.split(",");
for(u=0;
u<s.length;
u++){if(s[u].indexOf('format("svg")')>0){w=s[u].indexOf("url");
t=s[u].indexOf(")",w);
w=s[u].substr(w+5,t-w-6);
w=b.parseXml(b.ajax(w)).getElementsByTagName("font");
for(t=0;
t<w.length;
t++){var x=b.CreateElement(w[t]);
b.Definitions[r]=x
}}}}}}}}};
b.Element.style.prototype=new b.Element.ElementBase;
b.Element.use=function(d){this.base=b.Element.RenderedElementBase;
this.base(d);
this.baseSetContext=this.setContext;
this.setContext=function(c){this.baseSetContext(c);
this.attribute("x").hasValue()&&c.translate(this.attribute("x").Length.toPixels("x"),0);
this.attribute("y").hasValue()&&c.translate(0,this.attribute("y").Length.toPixels("y"))
};
this.getDefinition=function(){var c=this.attribute("xlink:href").Definition.getDefinition();
if(this.attribute("width").hasValue()){c.attribute("width",!0).value=this.attribute("width").value
}if(this.attribute("height").hasValue()){c.attribute("height",!0).value=this.attribute("height").value
}return c
};
this.path=function(c){var e=this.getDefinition();
e!=null&&e.path(c)
};
this.renderChildren=function(c){var e=this.getDefinition();
e!=null&&e.render(c)
}
};
b.Element.use.prototype=new b.Element.RenderedElementBase;
b.Element.mask=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.apply=function(c,k){var m=this.attribute("x").Length.toPixels("x"),p=this.attribute("y").Length.toPixels("y"),q=this.attribute("width").Length.toPixels("x"),r=this.attribute("height").Length.toPixels("y"),t=k.attribute("mask").value;
k.attribute("mask").value="";
var s=document.createElement("canvas");
s.width=m+q;
s.height=p+r;
var u=s.getContext("2d");
this.renderChildren(u);
var w=document.createElement("canvas");
w.width=m+q;
w.height=p+r;
var v=w.getContext("2d");
k.render(v);
v.globalCompositeOperation="destination-in";
v.fillStyle=u.createPattern(s,"no-repeat");
v.fillRect(0,0,m+q,p+r);
c.fillStyle=v.createPattern(w,"no-repeat");
c.fillRect(0,0,m+q,p+r);
k.attribute("mask").value=t
};
this.render=function(){}
};
b.Element.mask.prototype=new b.Element.ElementBase;
b.Element.clipPath=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.apply=function(c){for(var e=0;
e<this.children.length;
e++){this.children[e].path&&(this.children[e].path(c),c.clip())
}};
this.render=function(){}
};
b.Element.clipPath.prototype=new b.Element.ElementBase;
b.Element.filter=function(d){this.base=b.Element.ElementBase;
this.base(d);
this.apply=function(k,m){var p=m.getBoundingBox(),r=this.attribute("x").Length.toPixels("x"),s=this.attribute("y").Length.toPixels("y");
if(r==0||s==0){r=p.x1,s=p.y1
}var t=this.attribute("width").Length.toPixels("x"),v=this.attribute("height").Length.toPixels("y");
if(t==0||v==0){t=p.width(),v=p.height()
}p=m.style("filter").value;
m.style("filter").value="";
var u=0.2*t,w=0.2*v,y=document.createElement("canvas");
y.width=t+2*u;
y.height=v+2*w;
var x=y.getContext("2d");
x.translate(-r+u,-s+w);
m.render(x);
for(var c=0;
c<this.children.length;
c++){this.children[c].apply(x,0,0,t+2*u,v+2*w)
}k.drawImage(y,0,0,t+2*u,v+2*w,r-u,s-w,t+2*u,v+2*w);
m.style("filter",!0).value=p
};
this.render=function(){}
};
b.Element.filter.prototype=new b.Element.ElementBase;
b.Element.feGaussianBlur=function(e){function f(E,t,k,v,B){for(var y=0;
y<B;
y++){for(var w=0;
w<v;
w++){for(var C=E[y*v*4+w*4+3]/255,x=0;
x<4;
x++){for(var z=k[0]*(C==0?255:E[y*v*4+w*4+x])*(C==0||x==3?1:C),u=1;
u<k.length;
u++){var c=Math.max(w-u,0),A=E[y*v*4+c*4+3]/255,c=Math.min(w+u,v-1),c=E[y*v*4+c*4+3]/255,D=k[u],d;
A==0?d=255:(d=Math.max(w-u,0),d=E[y*v*4+d*4+x]);
A=d*(A==0||x==3?1:A);
c==0?d=255:(d=Math.min(w+u,v-1),d=E[y*v*4+d*4+x]);
z+=D*(A+d*(c==0||x==3?1:c))
}t[w*B*4+y*4+x]=z
}}}}this.base=b.Element.ElementBase;
this.base(e);
this.apply=function(c,d,k,l,m){var k=this.attribute("stdDeviation").numValue(),d=c.getImageData(0,0,l,m),k=Math.max(k,0.01),o=Math.ceil(k*4)+1;
mask=[];
for(var n=0;
n<o;
n++){mask[n]=Math.exp(-0.5*(n/k)*(n/k))
}k=mask;
o=0;
for(n=1;
n<k.length;
n++){o+=Math.abs(k[n])
}o=2*o+Math.abs(k[0]);
for(n=0;
n<k.length;
n++){k[n]/=o
}tmp=[];
f(d.data,tmp,k,l,m);
f(tmp,d.data,k,m,l);
c.clearRect(0,0,l,m);
c.putImageData(d,0,0)
}
};
b.Element.filter.prototype=new b.Element.feGaussianBlur;
b.Element.title=function(){};
b.Element.title.prototype=new b.Element.ElementBase;
b.Element.desc=function(){};
b.Element.desc.prototype=new b.Element.ElementBase;
b.Element.MISSING=function(c){console.log("ERROR: Element '"+c.nodeName+"' not yet implemented.")
};
b.Element.MISSING.prototype=new b.Element.ElementBase;
b.CreateElement=function(f){var g=f.nodeName.replace(/^[^:]+:/,""),g=g.replace(/\-/g,""),e=null,e=typeof b.Element[g]!="undefined"?new b.Element[g](f):new b.Element.MISSING(f);
e.type=f.nodeName;
return e
};
b.load=function(e,f){b.loadXml(e,b.ajax(f))
};
b.loadXml=function(e,f){b.loadXmlDoc(e,b.parseXml(f))
};
b.loadXmlDoc=function(j,l){b.init(j);
var h=function(c){for(var d=j.canvas;
d;
){c.x-=d.offsetLeft,c.y-=d.offsetTop,d=d.offsetParent
}window.scrollX&&(c.x+=window.scrollX);
window.scrollY&&(c.y+=window.scrollY);
return c
};
if(b.opts.ignoreMouse!=!0){j.canvas.onclick=function(c){c=h(new b.Point(c!=null?c.clientX:event.clientX,c!=null?c.clientY:event.clientY));
b.Mouse.onclick(c.x,c.y)
},j.canvas.onmousemove=function(c){c=h(new b.Point(c!=null?c.clientX:event.clientX,c!=null?c.clientY:event.clientY));
b.Mouse.onmousemove(c.x,c.y)
}
}var p=b.CreateElement(l.documentElement),m=p.root=!0,n=function(){b.ViewPort.Clear();
j.canvas.parentNode&&b.ViewPort.SetCurrent(j.canvas.parentNode.clientWidth,j.canvas.parentNode.clientHeight);
if(b.opts.ignoreDimensions!=!0){if(p.style("width").hasValue()){j.canvas.width=p.style("width").Length.toPixels("x"),j.canvas.style.width=j.canvas.width+"px"
}if(p.style("height").hasValue()){j.canvas.height=p.style("height").Length.toPixels("y"),j.canvas.style.height=j.canvas.height+"px"
}}var c=j.canvas.clientWidth||j.canvas.width,d=j.canvas.clientHeight||j.canvas.height;
b.ViewPort.SetCurrent(c,d);
if(b.opts!=null&&b.opts.offsetX!=null){p.attribute("x",!0).value=b.opts.offsetX
}if(b.opts!=null&&b.opts.offsetY!=null){p.attribute("y",!0).value=b.opts.offsetY
}if(b.opts!=null&&b.opts.scaleWidth!=null&&b.opts.scaleHeight!=null){var e=1,f=1;
p.attribute("width").hasValue()&&(e=p.attribute("width").Length.toPixels("x")/b.opts.scaleWidth);
p.attribute("height").hasValue()&&(f=p.attribute("height").Length.toPixels("y")/b.opts.scaleHeight);
p.attribute("width",!0).value=b.opts.scaleWidth;
p.attribute("height",!0).value=b.opts.scaleHeight;
p.attribute("viewBox",!0).value="0 0 "+c*e+" "+d*f;
p.attribute("preserveAspectRatio",!0).value="none"
}b.opts.ignoreClear!=!0&&j.clearRect(0,0,c,d);
p.render(j);
m&&(m=!1,b.opts!=null&&typeof b.opts.renderCallback=="function"&&b.opts.renderCallback())
},o=!0;
b.ImagesLoaded()&&(o=!1,n());
b.intervalID=setInterval(function(){var c=!1;
o&&b.ImagesLoaded()&&(o=!1,c=!0);
b.opts.ignoreMouse!=!0&&(c|=b.Mouse.hasEvents());
if(b.opts.ignoreAnimation!=!0){for(var d=0;
d<b.Animations.length;
d++){c|=b.Animations[d].update(1000/b.FRAMERATE)
}}b.opts!=null&&typeof b.opts.forceRedraw=="function"&&b.opts.forceRedraw()==!0&&(c=!0);
c&&(n(),b.Mouse.runEvents())
},1000/b.FRAMERATE)
};
b.stop=function(){b.intervalID&&clearInterval(b.intervalID)
};
b.Mouse=new function(){this.events=[];
this.hasEvents=function(){return this.events.length!=0
};
this.onclick=function(c,e){this.events.push({type:"onclick",x:c,y:e,run:function(d){if(d.onclick){d.onclick()
}}})
};
this.onmousemove=function(c,e){this.events.push({type:"onmousemove",x:c,y:e,run:function(d){if(d.onmousemove){d.onmousemove()
}}})
};
this.eventElements=[];
this.checkPath=function(c,f){for(var e=0;
e<this.events.length;
e++){var g=this.events[e];
f.isPointInPath&&f.isPointInPath(g.x,g.y)&&(this.eventElements[e]=c)
}};
this.checkBoundingBox=function(c,f){for(var e=0;
e<this.events.length;
e++){var g=this.events[e];
f.isPointInBox(g.x,g.y)&&(this.eventElements[e]=c)
}};
this.runEvents=function(){b.ctx.canvas.style.cursor="";
for(var f=0;
f<this.events.length;
f++){for(var g=this.events[f],e=this.eventElements[f];
e;
){g.run(e),e=e.parent
}}this.events=[];
this.eventElements=[]
}
};
return b
}this.canvg=function(b,f,g){if(b==null&&f==null&&g==null){for(var f=document.getElementsByTagName("svg"),e=0;
e<f.length;
e++){b=f[e];
g=document.createElement("canvas");
g.width=b.clientWidth;
g.height=b.clientHeight;
b.parentNode.insertBefore(g,b);
b.parentNode.removeChild(b);
var h=document.createElement("div");
h.appendChild(b);
canvg(g,h.innerHTML)
}}else{g=g||{},typeof b=="string"&&(b=document.getElementById(b)),b.svg==null?(e=a(),b.svg=e):(e=b.svg,e.stop()),e.opts=g,b=b.getContext("2d"),typeof f.documentElement!="undefined"?e.loadXmlDoc(b,f):f.substr(0,1)=="<"?e.loadXml(b,f):e.load(b,f)
}}
})();
if(CanvasRenderingContext2D){CanvasRenderingContext2D.prototype.drawSvg=function(j,e,g,h,f){canvg(this.canvas,j,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:e,offsetY:g,scaleWidth:h,scaleHeight:f})
}
}(function(s){var h=s.css,l=s.CanVGRenderer,n=s.SVGRenderer,j=s.extend,r=s.merge,o=s.addEvent,p=s.createElement,q=s.discardElement;
j(l.prototype,n.prototype);
j(l.prototype,{create:function(a,b,c,d){this.setContainer(b,c,d);
this.configure(a)
},setContainer:function(b,c,d){var e=b.style,f=b.parentNode,g=e.left,e=e.top,k=b.offsetWidth,m=b.offsetHeight,a={visibility:"hidden",position:"absolute"};
this.init.apply(this,[b,c,d]);
this.canvas=p("canvas",{width:k,height:m},{position:"relative",left:g,top:e},b);
this.ttLine=p("div",null,a,f);
this.ttDiv=p("div",null,a,f);
this.ttTimer=void 0;
this.hiddenSvg=b=p("div",{width:k,height:m},{visibility:"hidden",left:g,top:e},f);
b.appendChild(this.box)
},configure:function(a){var b=this,c=a.options.tooltip,d=c.borderWidth,e=b.ttDiv,f=c.style,g=b.ttLine,k=parseInt(f.padding,10),f=r(f,{padding:k+"px","background-color":c.backgroundColor,"border-style":"solid","border-width":d+"px","border-radius":c.borderRadius+"px"});
c.shadow&&(f=r(f,{"box-shadow":"1px 1px 3px gray","-webkit-box-shadow":"1px 1px 3px gray"}));
h(e,f);
h(g,{"border-left":"1px solid darkgray"});
o(a,"tooltipRefresh",function(m){var w=a.container,x=w.offsetLeft,w=w.offsetTop,y;
e.innerHTML=m.text;
y=a.tooltip.getPosition(e.offsetWidth,e.offsetHeight,{plotX:m.x,plotY:m.y});
h(e,{visibility:"visible",left:y.x+"px",top:y.y+"px","border-color":m.borderColor});
h(g,{visibility:"visible",left:x+m.x+"px",top:w+a.plotTop+"px",height:a.plotHeight+"px"});
b.ttTimer!==void 0&&clearTimeout(b.ttTimer);
b.ttTimer=setTimeout(function(){h(e,{visibility:"hidden"});
h(g,{visibility:"hidden"})
},3000)
})
},destroy:function(){q(this.canvas);
this.ttTimer!==void 0&&clearTimeout(this.ttTimer);
q(this.ttLine);
q(this.ttDiv);
q(this.hiddenSvg);
return n.prototype.destroy.apply(this)
},color:function(a,b,c){a&&a.linearGradient&&(a=a.stops[a.stops.length-1][1]);
return n.prototype.color.call(this,a,b,c)
},draw:function(){window.canvg(this.canvas,this.hiddenSvg.innerHTML)
}})
})(Highcharts);