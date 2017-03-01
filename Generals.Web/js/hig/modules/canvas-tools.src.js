function RGBColor(c){this.ok=false;
if(c.charAt(0)=="#"){c=c.substr(1,6)
}c=c.replace(/ /g,"");
c=c.toLowerCase();
var h={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};
for(var e in h){if(c==e){c=h[e]
}}var b=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(j){return[parseInt(j[1]),parseInt(j[2]),parseInt(j[3])]
}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(j){return[parseInt(j[1],16),parseInt(j[2],16),parseInt(j[3],16)]
}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(j){return[parseInt(j[1]+j[1],16),parseInt(j[2]+j[2],16),parseInt(j[3]+j[3],16)]
}}];
for(var d=0;
d<b.length;
d++){var g=b[d].re;
var f=b[d].process;
var a=g.exec(c);
if(a){channels=f(a);
this.r=channels[0];
this.g=channels[1];
this.b=channels[2];
this.ok=true
}}this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"
};
this.toHex=function(){var l=this.r.toString(16);
var k=this.g.toString(16);
var j=this.b.toString(16);
if(l.length==1){l="0"+l
}if(k.length==1){k="0"+k
}if(j.length==1){j="0"+j
}return"#"+l+k+j
};
this.getHelpXML=function(){var m=new Array();
for(var n=0;
n<b.length;
n++){var k=b[n].example;
for(var o=0;
o<k.length;
o++){m[m.length]=k[o]
}}for(var s in h){m[m.length]=s
}var t=document.createElement("ul");
t.setAttribute("id","rgbcolor-examples");
for(var n=0;
n<m.length;
n++){try{var q=document.createElement("li");
var p=new RGBColor(m[n]);
var l=document.createElement("div");
l.style.cssText="margin: 3px; border: 1px solid black; background:"+p.toHex()+"; color:"+p.toHex();
l.appendChild(document.createTextNode("test"));
var r=document.createTextNode(" "+m[n]+" -> "+p.toRGB()+" -> "+p.toHex());
q.appendChild(l);
q.appendChild(r);
t.appendChild(q)
}catch(j){}}return t
}
}if(!window.console){window.console={};
window.console.log=function(a){};
window.console.dir=function(a){}
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b){for(var a=0;
a<this.length;
a++){if(this[a]==b){return a
}}return -1
}
}(function(){this.canvg=function(m,h,g){if(m==null&&h==null&&g==null){var l=document.getElementsByTagName("svg");
for(var f=0;
f<l.length;
f++){var k=l[f];
var b=document.createElement("canvas");
b.width=k.clientWidth;
b.height=k.clientHeight;
k.parentNode.insertBefore(b,k);
k.parentNode.removeChild(k);
var e=document.createElement("div");
e.appendChild(k);
canvg(b,e.innerHTML)
}return
}g=g||{};
if(typeof m=="string"){m=document.getElementById(m)
}var j;
if(m.svg==null){j=a();
m.svg=j
}else{j=m.svg;
j.stop()
}j.opts=g;
var d=m.getContext("2d");
if(typeof(h.documentElement)!="undefined"){j.loadXmlDoc(d,h)
}else{if(h.substr(0,1)=="<"){j.loadXml(d,h)
}else{j.load(d,h)
}}};
function a(){var b={};
b.FRAMERATE=30;
b.MAX_VIRTUAL_PIXELS=30000;
b.init=function(c){b.Definitions={};
b.Styles={};
b.Animations=[];
b.Images=[];
b.ctx=c;
b.ViewPort=new (function(){this.viewPorts=[];
this.Clear=function(){this.viewPorts=[]
};
this.SetCurrent=function(e,d){this.viewPorts.push({width:e,height:d})
};
this.RemoveCurrent=function(){this.viewPorts.pop()
};
this.Current=function(){return this.viewPorts[this.viewPorts.length-1]
};
this.width=function(){return this.Current().width
};
this.height=function(){return this.Current().height
};
this.ComputeSize=function(d){if(d!=null&&typeof(d)=="number"){return d
}if(d=="x"){return this.width()
}if(d=="y"){return this.height()
}return Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)
}
})
};
b.init();
b.ImagesLoaded=function(){for(var c=0;
c<b.Images.length;
c++){if(!b.Images[c].loaded){return false
}}return true
};
b.trim=function(c){return c.replace(/^\s+|\s+$/g,"")
};
b.compressSpaces=function(c){return c.replace(/[\s\r\t\n]+/gm," ")
};
b.ajax=function(d){var c;
if(window.XMLHttpRequest){c=new XMLHttpRequest()
}else{c=new ActiveXObject("Microsoft.XMLHTTP")
}if(c){c.open("GET",d,false);
c.send(null);
return c.responseText
}return null
};
b.parseXml=function(d){if(window.DOMParser){var c=new DOMParser();
return c.parseFromString(d,"text/xml")
}else{d=d.replace(/<!DOCTYPE svg[^>]*>/,"");
var e=new ActiveXObject("Microsoft.XMLDOM");
e.async="false";
e.loadXML(d);
return e
}};
b.Property=function(c,e){this.name=c;
this.value=e;
this.hasValue=function(){return(this.value!=null&&this.value!=="")
};
this.numValue=function(){if(!this.hasValue()){return 0
}var f=parseFloat(this.value);
if((this.value+"").match(/%$/)){f=f/100
}return f
};
this.valueOrDefault=function(f){if(this.hasValue()){return this.value
}return f
};
this.numValueOrDefault=function(f){if(this.hasValue()){return this.numValue()
}return f
};
var d=this;
this.Color={addOpacity:function(h){var g=d.value;
if(h!=null&&h!=""){var f=new RGBColor(d.value);
if(f.ok){g="rgba("+f.r+", "+f.g+", "+f.b+", "+h+")"
}}return new b.Property(d.name,g)
}};
this.Definition={getDefinition:function(){var f=d.value.replace(/^(url\()?#([^\)]+)\)?$/,"$2");
return b.Definitions[f]
},isUrl:function(){return d.value.indexOf("url(")==0
},getFillStyle:function(g){var f=this.getDefinition();
if(f!=null&&f.createGradient){return f.createGradient(b.ctx,g)
}if(f!=null&&f.createPattern){return f.createPattern(b.ctx,g)
}return null
}};
this.Length={DPI:function(f){return 96
},EM:function(h){var f=12;
var g=new b.Property("fontSize",b.Font.Parse(b.ctx.font).fontSize);
if(g.hasValue()){f=g.Length.toPixels(h)
}return f
},toPixels:function(g){if(!d.hasValue()){return 0
}var f=d.value+"";
if(f.match(/em$/)){return d.numValue()*this.EM(g)
}if(f.match(/ex$/)){return d.numValue()*this.EM(g)/2
}if(f.match(/px$/)){return d.numValue()
}if(f.match(/pt$/)){return d.numValue()*1.25
}if(f.match(/pc$/)){return d.numValue()*15
}if(f.match(/cm$/)){return d.numValue()*this.DPI(g)/2.54
}if(f.match(/mm$/)){return d.numValue()*this.DPI(g)/25.4
}if(f.match(/in$/)){return d.numValue()*this.DPI(g)
}if(f.match(/%$/)){return d.numValue()*b.ViewPort.ComputeSize(g)
}return d.numValue()
}};
this.Time={toMilliseconds:function(){if(!d.hasValue()){return 0
}var f=d.value+"";
if(f.match(/s$/)){return d.numValue()*1000
}if(f.match(/ms$/)){return d.numValue()
}return d.numValue()
}};
this.Angle={toRadians:function(){if(!d.hasValue()){return 0
}var f=d.value+"";
if(f.match(/deg$/)){return d.numValue()*(Math.PI/180)
}if(f.match(/grad$/)){return d.numValue()*(Math.PI/200)
}if(f.match(/rad$/)){return d.numValue()
}return d.numValue()*(Math.PI/180)
}}
};
b.Font=new (function(){this.Styles=["normal","italic","oblique","inherit"];
this.Variants=["normal","small-caps","inherit"];
this.Weights=["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900","inherit"];
this.CreateFont=function(h,j,k,g,e,l){var d=l!=null?this.Parse(l):this.CreateFont("","","","","",b.ctx.font);
return{fontFamily:e||d.fontFamily,fontSize:g||d.fontSize,fontStyle:h||d.fontStyle,fontWeight:k||d.fontWeight,fontVariant:j||d.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")
}}
};
var c=this;
this.Parse=function(j){var e={};
var d=b.trim(b.compressSpaces(j||"")).split(" ");
var k={fontSize:false,fontStyle:false,fontWeight:false,fontVariant:false};
var g="";
for(var h=0;
h<d.length;
h++){if(!k.fontStyle&&c.Styles.indexOf(d[h])!=-1){if(d[h]!="inherit"){e.fontStyle=d[h]
}k.fontStyle=true
}else{if(!k.fontVariant&&c.Variants.indexOf(d[h])!=-1){if(d[h]!="inherit"){e.fontVariant=d[h]
}k.fontStyle=k.fontVariant=true
}else{if(!k.fontWeight&&c.Weights.indexOf(d[h])!=-1){if(d[h]!="inherit"){e.fontWeight=d[h]
}k.fontStyle=k.fontVariant=k.fontWeight=true
}else{if(!k.fontSize){if(d[h]!="inherit"){e.fontSize=d[h].split("/")[0]
}k.fontStyle=k.fontVariant=k.fontWeight=k.fontSize=true
}else{if(d[h]!="inherit"){g+=d[h]
}}}}}}if(g!=""){e.fontFamily=g
}return e
}
});
b.ToNumberArray=function(e){var c=b.trim(b.compressSpaces((e||"").replace(/,/g," "))).split(" ");
for(var d=0;
d<c.length;
d++){c[d]=parseFloat(c[d])
}return c
};
b.Point=function(c,d){this.x=c;
this.y=d;
this.angleTo=function(e){return Math.atan2(e.y-this.y,e.x-this.x)
};
this.applyTransform=function(e){var f=this.x*e[0]+this.y*e[2]+e[4];
var g=this.x*e[1]+this.y*e[3]+e[5];
this.x=f;
this.y=g
}
};
b.CreatePoint=function(d){var c=b.ToNumberArray(d);
return new b.Point(c[0],c[1])
};
b.CreatePath=function(f){var c=b.ToNumberArray(f);
var e=[];
for(var d=0;
d<c.length;
d+=2){e.push(new b.Point(c[d],c[d+1]))
}return e
};
b.BoundingBox=function(c,e,d,f){this.x1=Number.NaN;
this.y1=Number.NaN;
this.x2=Number.NaN;
this.y2=Number.NaN;
this.x=function(){return this.x1
};
this.y=function(){return this.y1
};
this.width=function(){return this.x2-this.x1
};
this.height=function(){return this.y2-this.y1
};
this.addPoint=function(g,h){if(g!=null){if(isNaN(this.x1)||isNaN(this.x2)){this.x1=g;
this.x2=g
}if(g<this.x1){this.x1=g
}if(g>this.x2){this.x2=g
}}if(h!=null){if(isNaN(this.y1)||isNaN(this.y2)){this.y1=h;
this.y2=h
}if(h<this.y1){this.y1=h
}if(h>this.y2){this.y2=h
}}};
this.addX=function(g){this.addPoint(g,null)
};
this.addY=function(g){this.addPoint(null,g)
};
this.addBoundingBox=function(g){this.addPoint(g.x1,g.y1);
this.addPoint(g.x2,g.y2)
};
this.addQuadraticCurve=function(l,m,n,o,p,q){var g=l+2/3*(n-l);
var h=m+2/3*(o-m);
var j=g+1/3*(p-l);
var k=h+1/3*(q-m);
this.addBezierCurve(l,m,g,j,h,k,p,q)
};
this.addBezierCurve=function(k,h,o,p,r,s,v,w){var m=[k,h],n=[o,p],q=[r,s],u=[v,w];
this.addPoint(m[0],m[1]);
this.addPoint(u[0],u[1]);
for(i=0;
i<=1;
i++){var A=function(t){return Math.pow(1-t,3)*m[i]+3*Math.pow(1-t,2)*t*n[i]+3*(1-t)*Math.pow(t,2)*q[i]+Math.pow(t,3)*u[i]
};
var l=6*m[i]-12*n[i]+6*q[i];
var z=-3*m[i]+9*n[i]-9*q[i]+3*u[i];
var g=3*n[i]-3*m[i];
if(z==0){if(l==0){continue
}var x=-g/l;
if(0<x&&x<1){if(i==0){this.addX(A(x))
}if(i==1){this.addY(A(x))
}}continue
}var j=Math.pow(l,2)-4*g*z;
if(j<0){continue
}var y=(-l+Math.sqrt(j))/(2*z);
if(0<y&&y<1){if(i==0){this.addX(A(y))
}if(i==1){this.addY(A(y))
}}var B=(-l-Math.sqrt(j))/(2*z);
if(0<B&&B<1){if(i==0){this.addX(A(B))
}if(i==1){this.addY(A(B))
}}}};
this.isPointInBox=function(g,h){return(this.x1<=g&&g<=this.x2&&this.y1<=h&&h<=this.y2)
};
this.addPoint(c,e);
this.addPoint(d,f)
};
b.Transform=function(j){var f=this;
this.Type={};
this.Type.translate=function(k){this.p=b.CreatePoint(k);
this.apply=function(l){l.translate(this.p.x||0,this.p.y||0)
};
this.applyToPoint=function(l){l.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])
}
};
this.Type.rotate=function(l){var k=b.ToNumberArray(l);
this.angle=new b.Property("angle",k[0]);
this.cx=k[1]||0;
this.cy=k[2]||0;
this.apply=function(m){m.translate(this.cx,this.cy);
m.rotate(this.angle.Angle.toRadians());
m.translate(-this.cx,-this.cy)
};
this.applyToPoint=function(n){var m=this.angle.Angle.toRadians();
n.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]);
n.applyTransform([Math.cos(m),Math.sin(m),-Math.sin(m),Math.cos(m),0,0]);
n.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])
}
};
this.Type.scale=function(k){this.p=b.CreatePoint(k);
this.apply=function(l){l.scale(this.p.x||1,this.p.y||this.p.x||1)
};
this.applyToPoint=function(l){l.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])
}
};
this.Type.matrix=function(k){this.m=b.ToNumberArray(k);
this.apply=function(l){l.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])
};
this.applyToPoint=function(l){l.applyTransform(this.m)
}
};
this.Type.SkewBase=function(k){this.base=f.Type.matrix;
this.base(k);
this.angle=new b.Property("angle",k)
};
this.Type.SkewBase.prototype=new this.Type.matrix;
this.Type.skewX=function(k){this.base=f.Type.SkewBase;
this.base(k);
this.m=[1,0,Math.tan(this.angle.Angle.toRadians()),1,0,0]
};
this.Type.skewX.prototype=new this.Type.SkewBase;
this.Type.skewY=function(k){this.base=f.Type.SkewBase;
this.base(k);
this.m=[1,Math.tan(this.angle.Angle.toRadians()),0,1,0,0]
};
this.Type.skewY.prototype=new this.Type.SkewBase;
this.transforms=[];
this.apply=function(k){for(var l=0;
l<this.transforms.length;
l++){this.transforms[l].apply(k)
}};
this.applyToPoint=function(l){for(var k=0;
k<this.transforms.length;
k++){this.transforms[k].applyToPoint(l)
}};
var c=b.trim(b.compressSpaces(j)).split(/\s(?=[a-z])/);
for(var d=0;
d<c.length;
d++){var h=c[d].split("(")[0];
var e=c[d].split("(")[1].replace(")","");
var g=new this.Type[h](e);
this.transforms.push(g)
}};
b.AspectRatio=function(n,m,k,p,q,o,s,c,d,e){m=b.compressSpaces(m);
m=m.replace(/^defer\s/,"");
var l=m.split(" ")[0]||"xMidYMid";
var r=m.split(" ")[1]||"meet";
var h=k/p;
var j=q/o;
var g=Math.min(h,j);
var f=Math.max(h,j);
if(r=="meet"){p*=g;
o*=g
}if(r=="slice"){p*=f;
o*=f
}d=new b.Property("refX",d);
e=new b.Property("refY",e);
if(d.hasValue()&&e.hasValue()){n.translate(-g*d.Length.toPixels("x"),-g*e.Length.toPixels("y"))
}else{if(l.match(/^xMid/)&&((r=="meet"&&g==j)||(r=="slice"&&f==j))){n.translate(k/2-p/2,0)
}if(l.match(/YMid$/)&&((r=="meet"&&g==h)||(r=="slice"&&f==h))){n.translate(0,q/2-o/2)
}if(l.match(/^xMax/)&&((r=="meet"&&g==j)||(r=="slice"&&f==j))){n.translate(k-p,0)
}if(l.match(/YMax$/)&&((r=="meet"&&g==h)||(r=="slice"&&f==h))){n.translate(0,q-o)
}}if(l=="none"){n.scale(h,j)
}else{if(r=="meet"){n.scale(g,g)
}else{if(r=="slice"){n.scale(f,f)
}}}n.translate(s==null?0:-s,c==null?0:-c)
};
b.Element={};
b.Element.ElementBase=function(k){this.attributes={};
this.styles={};
this.children=[];
this.attribute=function(p,o){var j=this.attributes[p];
if(j!=null){return j
}j=new b.Property(p,"");
if(o==true){this.attributes[p]=j
}return j
};
this.style=function(p,o){var s=this.styles[p];
if(s!=null){return s
}var j=this.attribute(p);
if(j!=null&&j.hasValue()){return j
}var q=this.parent;
if(q!=null){var r=q.style(p);
if(r!=null&&r.hasValue()){return r
}}s=new b.Property(p,"");
if(o==true){this.styles[p]=s
}return s
};
this.render=function(j){if(this.style("display").value=="none"){return
}if(this.attribute("visibility").value=="hidden"){return
}j.save();
this.setContext(j);
if(this.attribute("mask").hasValue()){var p=this.attribute("mask").Definition.getDefinition();
if(p!=null){p.apply(j,this)
}}else{if(this.style("filter").hasValue()){var o=this.style("filter").Definition.getDefinition();
if(o!=null){o.apply(j,this)
}}else{this.renderChildren(j)
}}this.clearContext(j);
j.restore()
};
this.setContext=function(j){};
this.clearContext=function(j){};
this.renderChildren=function(j){for(var o=0;
o<this.children.length;
o++){this.children[o].render(j)
}};
this.addChild=function(o,p){var j=o;
if(p){j=b.CreateElement(o)
}j.parent=this;
this.children.push(j)
};
if(k!=null&&k.nodeType==1){for(var f=0;
f<k.childNodes.length;
f++){var d=k.childNodes[f];
if(d.nodeType==1){this.addChild(d,true)
}}for(var f=0;
f<k.attributes.length;
f++){var c=k.attributes[f];
this.attributes[c.nodeName]=new b.Property(c.nodeName,c.nodeValue)
}var m=b.Styles[k.nodeName];
if(m!=null){for(var h in m){this.styles[h]=m[h]
}}if(this.attribute("class").hasValue()){var e=b.compressSpaces(this.attribute("class").value).split(" ");
for(var g=0;
g<e.length;
g++){m=b.Styles["."+e[g]];
if(m!=null){for(var h in m){this.styles[h]=m[h]
}}m=b.Styles[k.nodeName+"."+e[g]];
if(m!=null){for(var h in m){this.styles[h]=m[h]
}}}}if(this.attribute("style").hasValue()){var m=this.attribute("style").value.split(";");
for(var f=0;
f<m.length;
f++){if(b.trim(m[f])!=""){var l=m[f].split(":");
var h=b.trim(l[0]);
var n=b.trim(l[1]);
this.styles[h]=new b.Property(h,n)
}}}if(this.attribute("id").hasValue()){if(b.Definitions[this.attribute("id").value]==null){b.Definitions[this.attribute("id").value]=this
}}}};
b.Element.RenderedElementBase=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.setContext=function(e){if(this.style("fill").Definition.isUrl()){var g=this.style("fill").Definition.getFillStyle(this);
if(g!=null){e.fillStyle=g
}}else{if(this.style("fill").hasValue()){var f=this.style("fill");
if(this.style("fill-opacity").hasValue()){f=f.Color.addOpacity(this.style("fill-opacity").value)
}e.fillStyle=(f.value=="none"?"rgba(0,0,0,0)":f.value)
}}if(this.style("stroke").Definition.isUrl()){var g=this.style("stroke").Definition.getFillStyle(this);
if(g!=null){e.strokeStyle=g
}}else{if(this.style("stroke").hasValue()){var h=this.style("stroke");
if(this.style("stroke-opacity").hasValue()){h=h.Color.addOpacity(this.style("stroke-opacity").value)
}e.strokeStyle=(h.value=="none"?"rgba(0,0,0,0)":h.value)
}}if(this.style("stroke-width").hasValue()){e.lineWidth=this.style("stroke-width").Length.toPixels()
}if(this.style("stroke-linecap").hasValue()){e.lineCap=this.style("stroke-linecap").value
}if(this.style("stroke-linejoin").hasValue()){e.lineJoin=this.style("stroke-linejoin").value
}if(this.style("stroke-miterlimit").hasValue()){e.miterLimit=this.style("stroke-miterlimit").value
}if(typeof(e.font)!="undefined"){e.font=b.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").Length.toPixels()+"px":"",this.style("font-family").value).toString()
}if(this.attribute("transform").hasValue()){var j=new b.Transform(this.attribute("transform").value);
j.apply(e)
}if(this.attribute("clip-path").hasValue()){var d=this.attribute("clip-path").Definition.getDefinition();
if(d!=null){d.apply(e)
}}if(this.style("opacity").hasValue()){e.globalAlpha=this.style("opacity").numValue()
}}
};
b.Element.RenderedElementBase.prototype=new b.Element.ElementBase;
b.Element.PathElementBase=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
this.path=function(d){if(d!=null){d.beginPath()
}return new b.BoundingBox()
};
this.renderChildren=function(d){this.path(d);
b.Mouse.checkPath(this,d);
if(d.fillStyle!=""){d.fill()
}if(d.strokeStyle!=""){d.stroke()
}var g=this.getMarkers();
if(g!=null){if(this.style("marker-start").Definition.isUrl()){var f=this.style("marker-start").Definition.getDefinition();
f.render(d,g[0][0],g[0][1])
}if(this.style("marker-mid").Definition.isUrl()){var f=this.style("marker-mid").Definition.getDefinition();
for(var e=1;
e<g.length-1;
e++){f.render(d,g[e][0],g[e][1])
}}if(this.style("marker-end").Definition.isUrl()){var f=this.style("marker-end").Definition.getDefinition();
f.render(d,g[g.length-1][0],g[g.length-1][1])
}}};
this.getBoundingBox=function(){return this.path()
};
this.getMarkers=function(){return null
}
};
b.Element.PathElementBase.prototype=new b.Element.RenderedElementBase;
b.Element.svg=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
this.baseClearContext=this.clearContext;
this.clearContext=function(d){this.baseClearContext(d);
b.ViewPort.RemoveCurrent()
};
this.baseSetContext=this.setContext;
this.setContext=function(d){d.strokeStyle="rgba(0,0,0,0)";
d.lineCap="butt";
d.lineJoin="miter";
d.miterLimit=4;
this.baseSetContext(d);
if(this.attribute("x").hasValue()&&this.attribute("y").hasValue()){d.translate(this.attribute("x").Length.toPixels("x"),this.attribute("y").Length.toPixels("y"))
}var j=b.ViewPort.width();
var e=b.ViewPort.height();
if(typeof(this.root)=="undefined"&&this.attribute("width").hasValue()&&this.attribute("height").hasValue()){j=this.attribute("width").Length.toPixels("x");
e=this.attribute("height").Length.toPixels("y");
var k=0;
var l=0;
if(this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()){k=-this.attribute("refX").Length.toPixels("x");
l=-this.attribute("refY").Length.toPixels("y")
}d.beginPath();
d.moveTo(k,l);
d.lineTo(j,l);
d.lineTo(j,e);
d.lineTo(k,e);
d.closePath();
d.clip()
}b.ViewPort.SetCurrent(j,e);
if(this.attribute("viewBox").hasValue()){var h=b.ToNumberArray(this.attribute("viewBox").value);
var f=h[0];
var g=h[1];
j=h[2];
e=h[3];
b.AspectRatio(d,this.attribute("preserveAspectRatio").value,b.ViewPort.width(),j,b.ViewPort.height(),e,f,g,this.attribute("refX").value,this.attribute("refY").value);
b.ViewPort.RemoveCurrent();
b.ViewPort.SetCurrent(h[2],h[3])
}}
};
b.Element.svg.prototype=new b.Element.RenderedElementBase;
b.Element.rect=function(c){this.base=b.Element.PathElementBase;
this.base(c);
this.path=function(d){var j=this.attribute("x").Length.toPixels("x");
var k=this.attribute("y").Length.toPixels("y");
var h=this.attribute("width").Length.toPixels("x");
var e=this.attribute("height").Length.toPixels("y");
var f=this.attribute("rx").Length.toPixels("x");
var g=this.attribute("ry").Length.toPixels("y");
if(this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()){g=f
}if(this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()){f=g
}if(d!=null){d.beginPath();
d.moveTo(j+f,k);
d.lineTo(j+h-f,k);
d.quadraticCurveTo(j+h,k,j+h,k+g);
d.lineTo(j+h,k+e-g);
d.quadraticCurveTo(j+h,k+e,j+h-f,k+e);
d.lineTo(j+f,k+e);
d.quadraticCurveTo(j,k+e,j,k+e-g);
d.lineTo(j,k+g);
d.quadraticCurveTo(j,k,j+f,k);
d.closePath()
}return new b.BoundingBox(j,k,j+h,k+e)
}
};
b.Element.rect.prototype=new b.Element.PathElementBase;
b.Element.circle=function(c){this.base=b.Element.PathElementBase;
this.base(c);
this.path=function(d){var e=this.attribute("cx").Length.toPixels("x");
var f=this.attribute("cy").Length.toPixels("y");
var g=this.attribute("r").Length.toPixels();
if(d!=null){d.beginPath();
d.arc(e,f,g,0,Math.PI*2,true);
d.closePath()
}return new b.BoundingBox(e-g,f-g,e+g,f+g)
}
};
b.Element.circle.prototype=new b.Element.PathElementBase;
b.Element.ellipse=function(c){this.base=b.Element.PathElementBase;
this.base(c);
this.path=function(d){var g=4*((Math.sqrt(2)-1)/3);
var h=this.attribute("rx").Length.toPixels("x");
var j=this.attribute("ry").Length.toPixels("y");
var e=this.attribute("cx").Length.toPixels("x");
var f=this.attribute("cy").Length.toPixels("y");
if(d!=null){d.beginPath();
d.moveTo(e,f-j);
d.bezierCurveTo(e+(g*h),f-j,e+h,f-(g*j),e+h,f);
d.bezierCurveTo(e+h,f+(g*j),e+(g*h),f+j,e,f+j);
d.bezierCurveTo(e-(g*h),f+j,e-h,f+(g*j),e-h,f);
d.bezierCurveTo(e-h,f-(g*j),e-(g*h),f-j,e,f-j);
d.closePath()
}return new b.BoundingBox(e-h,f-j,e+h,f+j)
}
};
b.Element.ellipse.prototype=new b.Element.PathElementBase;
b.Element.line=function(c){this.base=b.Element.PathElementBase;
this.base(c);
this.getPoints=function(){return[new b.Point(this.attribute("x1").Length.toPixels("x"),this.attribute("y1").Length.toPixels("y")),new b.Point(this.attribute("x2").Length.toPixels("x"),this.attribute("y2").Length.toPixels("y"))]
};
this.path=function(d){var e=this.getPoints();
if(d!=null){d.beginPath();
d.moveTo(e[0].x,e[0].y);
d.lineTo(e[1].x,e[1].y)
}return new b.BoundingBox(e[0].x,e[0].y,e[1].x,e[1].y)
};
this.getMarkers=function(){var e=this.getPoints();
var d=e[0].angleTo(e[1]);
return[[e[0],d],[e[1],d]]
}
};
b.Element.line.prototype=new b.Element.PathElementBase;
b.Element.polyline=function(c){this.base=b.Element.PathElementBase;
this.base(c);
this.points=b.CreatePath(this.attribute("points").value);
this.path=function(e){var d=new b.BoundingBox(this.points[0].x,this.points[0].y);
if(e!=null){e.beginPath();
e.moveTo(this.points[0].x,this.points[0].y)
}for(var f=1;
f<this.points.length;
f++){d.addPoint(this.points[f].x,this.points[f].y);
if(e!=null){e.lineTo(this.points[f].x,this.points[f].y)
}}return d
};
this.getMarkers=function(){var e=[];
for(var d=0;
d<this.points.length-1;
d++){e.push([this.points[d],this.points[d].angleTo(this.points[d+1])])
}e.push([this.points[this.points.length-1],e[e.length-1][1]]);
return e
}
};
b.Element.polyline.prototype=new b.Element.PathElementBase;
b.Element.polygon=function(c){this.base=b.Element.polyline;
this.base(c);
this.basePath=this.path;
this.path=function(e){var d=this.basePath(e);
if(e!=null){e.lineTo(this.points[0].x,this.points[0].y);
e.closePath()
}return d
}
};
b.Element.polygon.prototype=new b.Element.polyline;
b.Element.path=function(e){this.base=b.Element.PathElementBase;
this.base(e);
var c=this.attribute("d").value;
c=c.replace(/,/gm," ");
c=c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");
c=c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");
c=c.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");
c=c.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");
c=c.replace(/([0-9])([+\-])/gm,"$1 $2");
c=c.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");
c=c.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 ");
c=b.compressSpaces(c);
c=b.trim(c);
this.PathParser=new (function(d){this.tokens=d.split(" ");
this.reset=function(){this.i=-1;
this.command="";
this.previousCommand="";
this.start=new b.Point(0,0);
this.control=new b.Point(0,0);
this.current=new b.Point(0,0);
this.points=[];
this.angles=[]
};
this.isEnd=function(){return this.i>=this.tokens.length-1
};
this.isCommandOrEnd=function(){if(this.isEnd()){return true
}return this.tokens[this.i+1].match(/^[A-Za-z]$/)!=null
};
this.isRelativeCommand=function(){return this.command==this.command.toLowerCase()
};
this.getToken=function(){this.i=this.i+1;
return this.tokens[this.i]
};
this.getScalar=function(){return parseFloat(this.getToken())
};
this.nextCommand=function(){this.previousCommand=this.command;
this.command=this.getToken()
};
this.getPoint=function(){var f=new b.Point(this.getScalar(),this.getScalar());
return this.makeAbsolute(f)
};
this.getAsControlPoint=function(){var f=this.getPoint();
this.control=f;
return f
};
this.getAsCurrentPoint=function(){var f=this.getPoint();
this.current=f;
return f
};
this.getReflectedControlPoint=function(){if(this.previousCommand.toLowerCase()!="c"&&this.previousCommand.toLowerCase()!="s"){return this.current
}var f=new b.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y);
return f
};
this.makeAbsolute=function(f){if(this.isRelativeCommand()){f.x=this.current.x+f.x;
f.y=this.current.y+f.y
}return f
};
this.addMarker=function(g,f,h){if(h!=null&&this.angles.length>0&&this.angles[this.angles.length-1]==null){this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(h)
}this.addMarkerAngle(g,f==null?null:f.angleTo(g))
};
this.addMarkerAngle=function(g,f){this.points.push(g);
this.angles.push(f)
};
this.getMarkerPoints=function(){return this.points
};
this.getMarkerAngles=function(){for(var f=0;
f<this.angles.length;
f++){if(this.angles[f]==null){for(var g=f+1;
g<this.angles.length;
g++){if(this.angles[g]!=null){this.angles[f]=this.angles[g];
break
}}}}return this.angles
}
})(c);
this.path=function(k){var F=this.PathParser;
F.reset();
var n=new b.BoundingBox();
if(k!=null){k.beginPath()
}while(!F.isEnd()){F.nextCommand();
switch(F.command.toUpperCase()){case"M":var A=F.getAsCurrentPoint();
F.addMarker(A);
n.addPoint(A.x,A.y);
if(k!=null){k.moveTo(A.x,A.y)
}F.start=F.current;
while(!F.isCommandOrEnd()){var A=F.getAsCurrentPoint();
F.addMarker(A,F.start);
n.addPoint(A.x,A.y);
if(k!=null){k.lineTo(A.x,A.y)
}}break;
case"L":while(!F.isCommandOrEnd()){var D=F.current;
var A=F.getAsCurrentPoint();
F.addMarker(A,D);
n.addPoint(A.x,A.y);
if(k!=null){k.lineTo(A.x,A.y)
}}break;
case"H":while(!F.isCommandOrEnd()){var C=new b.Point((F.isRelativeCommand()?F.current.x:0)+F.getScalar(),F.current.y);
F.addMarker(C,F.current);
F.current=C;
n.addPoint(F.current.x,F.current.y);
if(k!=null){k.lineTo(F.current.x,F.current.y)
}}break;
case"V":while(!F.isCommandOrEnd()){var C=new b.Point(F.current.x,(F.isRelativeCommand()?F.current.y:0)+F.getScalar());
F.addMarker(C,F.current);
F.current=C;
n.addPoint(F.current.x,F.current.y);
if(k!=null){k.lineTo(F.current.x,F.current.y)
}}break;
case"C":while(!F.isCommandOrEnd()){var w=F.current;
var d=F.getPoint();
var M=F.getAsControlPoint();
var o=F.getAsCurrentPoint();
F.addMarker(o,M,d);
n.addBezierCurve(w.x,w.y,d.x,d.y,M.x,M.y,o.x,o.y);
if(k!=null){k.bezierCurveTo(d.x,d.y,M.x,M.y,o.x,o.y)
}}break;
case"S":while(!F.isCommandOrEnd()){var w=F.current;
var d=F.getReflectedControlPoint();
var M=F.getAsControlPoint();
var o=F.getAsCurrentPoint();
F.addMarker(o,M,d);
n.addBezierCurve(w.x,w.y,d.x,d.y,M.x,M.y,o.x,o.y);
if(k!=null){k.bezierCurveTo(d.x,d.y,M.x,M.y,o.x,o.y)
}}break;
case"Q":while(!F.isCommandOrEnd()){var w=F.current;
var M=F.getAsControlPoint();
var o=F.getAsCurrentPoint();
F.addMarker(o,M,M);
n.addQuadraticCurve(w.x,w.y,M.x,M.y,o.x,o.y);
if(k!=null){k.quadraticCurveTo(M.x,M.y,o.x,o.y)
}}break;
case"T":while(!F.isCommandOrEnd()){var w=F.current;
var M=F.getReflectedControlPoint();
F.control=M;
var o=F.getAsCurrentPoint();
F.addMarker(o,M,M);
n.addQuadraticCurve(w.x,w.y,M.x,M.y,o.x,o.y);
if(k!=null){k.quadraticCurveTo(M.x,M.y,o.x,o.y)
}}break;
case"A":while(!F.isCommandOrEnd()){var w=F.current;
var H=F.getScalar();
var I=F.getScalar();
var E=F.getScalar()*(Math.PI/180);
var j=F.getScalar();
var K=F.getScalar();
var o=F.getAsCurrentPoint();
var J=new b.Point(Math.cos(E)*(w.x-o.x)/2+Math.sin(E)*(w.y-o.y)/2,-Math.sin(E)*(w.x-o.x)/2+Math.cos(E)*(w.y-o.y)/2);
var z=Math.pow(J.x,2)/Math.pow(H,2)+Math.pow(J.y,2)/Math.pow(I,2);
if(z>1){H*=Math.sqrt(z);
I*=Math.sqrt(z)
}var B=(j==K?-1:1)*Math.sqrt(((Math.pow(H,2)*Math.pow(I,2))-(Math.pow(H,2)*Math.pow(J.y,2))-(Math.pow(I,2)*Math.pow(J.x,2)))/(Math.pow(H,2)*Math.pow(J.y,2)+Math.pow(I,2)*Math.pow(J.x,2)));
if(isNaN(B)){B=0
}var L=new b.Point(B*H*J.y/I,B*-I*J.x/H);
var O=new b.Point((w.x+o.x)/2+Math.cos(E)*L.x-Math.sin(E)*L.y,(w.y+o.y)/2+Math.sin(E)*L.x+Math.cos(E)*L.y);
var x=function(l){return Math.sqrt(Math.pow(l[0],2)+Math.pow(l[1],2))
};
var G=function(l,m){return(l[0]*m[0]+l[1]*m[1])/(x(l)*x(m))
};
var P=function(l,m){return(l[0]*m[1]<l[1]*m[0]?-1:1)*Math.acos(G(l,m))
};
var f=P([1,0],[(J.x-L.x)/H,(J.y-L.y)/I]);
var N=[(J.x-L.x)/H,(J.y-L.y)/I];
var t=[(-J.x-L.x)/H,(-J.y-L.y)/I];
var g=P(N,t);
if(G(N,t)<=-1){g=Math.PI
}if(G(N,t)>=1){g=0
}if(K==0&&g>0){g=g-2*Math.PI
}if(K==1&&g<0){g=g+2*Math.PI
}var q=new b.Point(O.x-H*Math.cos((f+g)/2),O.y-I*Math.sin((f+g)/2));
F.addMarkerAngle(q,(f+g)/2+(K==0?1:-1)*Math.PI/2);
F.addMarkerAngle(o,g+(K==0?1:-1)*Math.PI/2);
n.addPoint(o.x,o.y);
if(k!=null){var G=H>I?H:I;
var y=H>I?1:H/I;
var h=H>I?I/H:1;
k.translate(O.x,O.y);
k.rotate(E);
k.scale(y,h);
k.arc(0,0,G,f,f+g,1-K);
k.scale(1/y,1/h);
k.rotate(-E);
k.translate(-O.x,-O.y)
}}break;
case"Z":if(k!=null){k.closePath()
}F.current=F.start
}}return n
};
this.getMarkers=function(){var h=this.PathParser.getMarkerPoints();
var d=this.PathParser.getMarkerAngles();
var g=[];
for(var f=0;
f<h.length;
f++){g.push([h[f],d[f]])
}return g
}
};
b.Element.path.prototype=new b.Element.PathElementBase;
b.Element.pattern=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.createPattern=function(e,f){var g=new b.Element.svg();
g.attributes.viewBox=new b.Property("viewBox",this.attribute("viewBox").value);
g.attributes.x=new b.Property("x",this.attribute("x").value);
g.attributes.y=new b.Property("y",this.attribute("y").value);
g.attributes.width=new b.Property("width",this.attribute("width").value);
g.attributes.height=new b.Property("height",this.attribute("height").value);
g.children=this.children;
var d=document.createElement("canvas");
d.width=this.attribute("width").Length.toPixels("x");
d.height=this.attribute("height").Length.toPixels("y");
g.render(d.getContext("2d"));
return e.createPattern(d,"repeat")
}
};
b.Element.pattern.prototype=new b.Element.ElementBase;
b.Element.marker=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.baseRender=this.render;
this.render=function(e,f,d){e.translate(f.x,f.y);
if(this.attribute("orient").valueOrDefault("auto")=="auto"){e.rotate(d)
}if(this.attribute("markerUnits").valueOrDefault("strokeWidth")=="strokeWidth"){e.scale(e.lineWidth,e.lineWidth)
}e.save();
var g=new b.Element.svg();
g.attributes.viewBox=new b.Property("viewBox",this.attribute("viewBox").value);
g.attributes.refX=new b.Property("refX",this.attribute("refX").value);
g.attributes.refY=new b.Property("refY",this.attribute("refY").value);
g.attributes.width=new b.Property("width",this.attribute("markerWidth").value);
g.attributes.height=new b.Property("height",this.attribute("markerHeight").value);
g.attributes.fill=new b.Property("fill",this.attribute("fill").valueOrDefault("black"));
g.attributes.stroke=new b.Property("stroke",this.attribute("stroke").valueOrDefault("none"));
g.children=this.children;
g.render(e);
e.restore();
if(this.attribute("markerUnits").valueOrDefault("strokeWidth")=="strokeWidth"){e.scale(1/e.lineWidth,1/e.lineWidth)
}if(this.attribute("orient").valueOrDefault("auto")=="auto"){e.rotate(-d)
}e.translate(-f.x,-f.y)
}
};
b.Element.marker.prototype=new b.Element.ElementBase;
b.Element.defs=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.render=function(d){}
};
b.Element.defs.prototype=new b.Element.ElementBase;
b.Element.GradientBase=function(e){this.base=b.Element.ElementBase;
this.base(e);
this.gradientUnits=this.attribute("gradientUnits").valueOrDefault("objectBoundingBox");
this.stops=[];
for(var d=0;
d<this.children.length;
d++){var c=this.children[d];
this.stops.push(c)
}this.getGradient=function(){};
this.createGradient=function(g,h){var o=this;
if(this.attribute("xlink:href").hasValue()){o=this.attribute("xlink:href").Definition.getDefinition()
}var j=this.getGradient(g,h);
for(var l=0;
l<o.stops.length;
l++){j.addColorStop(o.stops[l].offset,o.stops[l].color)
}if(this.attribute("gradientTransform").hasValue()){var n=b.ViewPort.viewPorts[0];
var m=new b.Element.rect();
m.attributes.x=new b.Property("x",-b.MAX_VIRTUAL_PIXELS/3);
m.attributes.y=new b.Property("y",-b.MAX_VIRTUAL_PIXELS/3);
m.attributes.width=new b.Property("width",b.MAX_VIRTUAL_PIXELS);
m.attributes.height=new b.Property("height",b.MAX_VIRTUAL_PIXELS);
var k=new b.Element.g();
k.attributes.transform=new b.Property("transform",this.attribute("gradientTransform").value);
k.children=[m];
var q=new b.Element.svg();
q.attributes.x=new b.Property("x",0);
q.attributes.y=new b.Property("y",0);
q.attributes.width=new b.Property("width",n.width);
q.attributes.height=new b.Property("height",n.height);
q.children=[k];
var f=document.createElement("canvas");
f.width=n.width;
f.height=n.height;
var p=f.getContext("2d");
p.fillStyle=j;
q.render(p);
return p.createPattern(f,"no-repeat")
}return j
}
};
b.Element.GradientBase.prototype=new b.Element.ElementBase;
b.Element.linearGradient=function(c){this.base=b.Element.GradientBase;
this.base(c);
this.getGradient=function(e,f){var d=f.getBoundingBox();
var g=(this.gradientUnits=="objectBoundingBox"?d.x()+d.width()*this.attribute("x1").numValue():this.attribute("x1").Length.toPixels("x"));
var j=(this.gradientUnits=="objectBoundingBox"?d.y()+d.height()*this.attribute("y1").numValue():this.attribute("y1").Length.toPixels("y"));
var h=(this.gradientUnits=="objectBoundingBox"?d.x()+d.width()*this.attribute("x2").numValue():this.attribute("x2").Length.toPixels("x"));
var k=(this.gradientUnits=="objectBoundingBox"?d.y()+d.height()*this.attribute("y2").numValue():this.attribute("y2").Length.toPixels("y"));
return e.createLinearGradient(g,j,h,k)
}
};
b.Element.linearGradient.prototype=new b.Element.GradientBase;
b.Element.radialGradient=function(c){this.base=b.Element.GradientBase;
this.base(c);
this.getGradient=function(e,h){var d=h.getBoundingBox();
var f=(this.gradientUnits=="objectBoundingBox"?d.x()+d.width()*this.attribute("cx").numValue():this.attribute("cx").Length.toPixels("x"));
var g=(this.gradientUnits=="objectBoundingBox"?d.y()+d.height()*this.attribute("cy").numValue():this.attribute("cy").Length.toPixels("y"));
var j=f;
var k=g;
if(this.attribute("fx").hasValue()){j=(this.gradientUnits=="objectBoundingBox"?d.x()+d.width()*this.attribute("fx").numValue():this.attribute("fx").Length.toPixels("x"))
}if(this.attribute("fy").hasValue()){k=(this.gradientUnits=="objectBoundingBox"?d.y()+d.height()*this.attribute("fy").numValue():this.attribute("fy").Length.toPixels("y"))
}var l=(this.gradientUnits=="objectBoundingBox"?(d.width()+d.height())/2*this.attribute("r").numValue():this.attribute("r").Length.toPixels());
return e.createRadialGradient(j,k,0,f,g,l)
}
};
b.Element.radialGradient.prototype=new b.Element.GradientBase;
b.Element.stop=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.offset=this.attribute("offset").numValue();
var d=this.style("stop-color");
if(this.style("stop-opacity").hasValue()){d=d.Color.addOpacity(this.style("stop-opacity").value)
}this.color=d.value
};
b.Element.stop.prototype=new b.Element.ElementBase;
b.Element.AnimateBase=function(c){this.base=b.Element.ElementBase;
this.base(c);
b.Animations.push(this);
this.duration=0;
this.begin=this.attribute("begin").Time.toMilliseconds();
this.maxDuration=this.begin+this.attribute("dur").Time.toMilliseconds();
this.getProperty=function(){var e=this.attribute("attributeType").value;
var d=this.attribute("attributeName").value;
if(e=="CSS"){return this.parent.style(d,true)
}return this.parent.attribute(d,true)
};
this.initialValue=null;
this.removed=false;
this.calcValue=function(){return""
};
this.update=function(d){if(this.initialValue==null){this.initialValue=this.getProperty().value
}if(this.duration>this.maxDuration){if(this.attribute("repeatCount").value=="indefinite"){this.duration=0
}else{if(this.attribute("fill").valueOrDefault("remove")=="remove"&&!this.removed){this.removed=true;
this.getProperty().value=this.initialValue;
return true
}else{return false
}}}this.duration=this.duration+d;
var g=false;
if(this.begin<this.duration){var e=this.calcValue();
if(this.attribute("type").hasValue()){var f=this.attribute("type").value;
e=f+"("+e+")"
}this.getProperty().value=e;
g=true
}return g
};
this.progress=function(){return((this.duration-this.begin)/(this.maxDuration-this.begin))
}
};
b.Element.AnimateBase.prototype=new b.Element.ElementBase;
b.Element.animate=function(c){this.base=b.Element.AnimateBase;
this.base(c);
this.calcValue=function(){var d=this.attribute("from").numValue();
var e=this.attribute("to").numValue();
return d+(e-d)*this.progress()
}
};
b.Element.animate.prototype=new b.Element.AnimateBase;
b.Element.animateColor=function(c){this.base=b.Element.AnimateBase;
this.base(c);
this.calcValue=function(){var e=new RGBColor(this.attribute("from").value);
var j=new RGBColor(this.attribute("to").value);
if(e.ok&&j.ok){var h=e.r+(j.r-e.r)*this.progress();
var f=e.g+(j.g-e.g)*this.progress();
var d=e.b+(j.b-e.b)*this.progress();
return"rgb("+parseInt(h,10)+","+parseInt(f,10)+","+parseInt(d,10)+")"
}return this.attribute("from").value
}
};
b.Element.animateColor.prototype=new b.Element.AnimateBase;
b.Element.animateTransform=function(c){this.base=b.Element.animate;
this.base(c)
};
b.Element.animateTransform.prototype=new b.Element.animate;
b.Element.font=function(e){this.base=b.Element.ElementBase;
this.base(e);
this.horizAdvX=this.attribute("horiz-adv-x").numValue();
this.isRTL=false;
this.isArabic=false;
this.fontFace=null;
this.missingGlyph=null;
this.glyphs=[];
for(var d=0;
d<this.children.length;
d++){var c=this.children[d];
if(c.type=="font-face"){this.fontFace=c;
if(c.style("font-family").hasValue()){b.Definitions[c.style("font-family").value]=this
}}else{if(c.type=="missing-glyph"){this.missingGlyph=c
}else{if(c.type=="glyph"){if(c.arabicForm!=""){this.isRTL=true;
this.isArabic=true;
if(typeof(this.glyphs[c.unicode])=="undefined"){this.glyphs[c.unicode]=[]
}this.glyphs[c.unicode][c.arabicForm]=c
}else{this.glyphs[c.unicode]=c
}}}}}};
b.Element.font.prototype=new b.Element.ElementBase;
b.Element.fontface=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.ascent=this.attribute("ascent").value;
this.descent=this.attribute("descent").value;
this.unitsPerEm=this.attribute("units-per-em").numValue()
};
b.Element.fontface.prototype=new b.Element.ElementBase;
b.Element.missingglyph=function(c){this.base=b.Element.path;
this.base(c);
this.horizAdvX=0
};
b.Element.missingglyph.prototype=new b.Element.path;
b.Element.glyph=function(c){this.base=b.Element.path;
this.base(c);
this.horizAdvX=this.attribute("horiz-adv-x").numValue();
this.unicode=this.attribute("unicode").value;
this.arabicForm=this.attribute("arabic-form").value
};
b.Element.glyph.prototype=new b.Element.path;
b.Element.text=function(e){this.base=b.Element.RenderedElementBase;
this.base(e);
if(e!=null){this.children=[];
for(var d=0;
d<e.childNodes.length;
d++){var c=e.childNodes[d];
if(c.nodeType==1){this.addChild(c,true)
}else{if(c.nodeType==3){this.addChild(new b.Element.tspan(c),false)
}}}}this.baseSetContext=this.setContext;
this.setContext=function(f){this.baseSetContext(f);
if(this.style("dominant-baseline").hasValue()){f.textBaseline=this.style("dominant-baseline").value
}if(this.style("alignment-baseline").hasValue()){f.textBaseline=this.style("alignment-baseline").value
}};
this.renderChildren=function(k){var o=this.style("text-anchor").valueOrDefault("start");
var p=this.attribute("x").Length.toPixels("x");
var q=this.attribute("y").Length.toPixels("y");
for(var m=0;
m<this.children.length;
m++){var f=this.children[m];
if(f.attribute("x").hasValue()){f.x=f.attribute("x").Length.toPixels("x")
}else{if(f.attribute("dx").hasValue()){p+=f.attribute("dx").Length.toPixels("x")
}f.x=p
}var h=f.measureText(k);
if(o!="start"&&(m==0||f.attribute("x").hasValue())){var l=h;
for(var n=m+1;
n<this.children.length;
n++){var g=this.children[n];
if(g.attribute("x").hasValue()){break
}l+=g.measureText(k)
}f.x-=(o=="end"?l:l/2)
}p=f.x+h;
if(f.attribute("y").hasValue()){f.y=f.attribute("y").Length.toPixels("y")
}else{if(f.attribute("dy").hasValue()){q+=f.attribute("dy").Length.toPixels("y")
}f.y=q
}q=f.y;
f.render(k)
}}
};
b.Element.text.prototype=new b.Element.RenderedElementBase;
b.Element.TextElementBase=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
this.getGlyph=function(f,j,h){var e=j[h];
var g=null;
if(f.isArabic){var d="isolated";
if((h==0||j[h-1]==" ")&&h<j.length-2&&j[h+1]!=" "){d="terminal"
}if(h>0&&j[h-1]!=" "&&h<j.length-2&&j[h+1]!=" "){d="medial"
}if(h>0&&j[h-1]!=" "&&(h==j.length-1||j[h+1]==" ")){d="initial"
}if(typeof(f.glyphs[e])!="undefined"){g=f.glyphs[e][d];
if(g==null&&f.glyphs[e].type=="glyph"){g=f.glyphs[e]
}}}else{g=f.glyphs[e]
}if(g==null){g=f.missingGlyph
}return g
};
this.renderChildren=function(d){var e=this.parent.style("font-family").Definition.getDefinition();
if(e!=null){var g=this.parent.style("font-size").numValueOrDefault(b.Font.Parse(b.ctx.font).fontSize);
var h=this.parent.style("font-style").valueOrDefault(b.Font.Parse(b.ctx.font).fontStyle);
var n=this.getText();
if(e.isRTL){n=n.split("").reverse().join("")
}var f=b.ToNumberArray(this.parent.attribute("dx").value);
for(var k=0;
k<n.length;
k++){var j=this.getGlyph(e,n,k);
var m=g/e.fontFace.unitsPerEm;
d.translate(this.x,this.y);
d.scale(m,-m);
var l=d.lineWidth;
d.lineWidth=d.lineWidth*e.fontFace.unitsPerEm/g;
if(h=="italic"){d.transform(1,0,0.4,1,0,0)
}j.render(d);
if(h=="italic"){d.transform(1,0,-0.4,1,0,0)
}d.lineWidth=l;
d.scale(1/m,-1/m);
d.translate(-this.x,-this.y);
this.x+=g*(j.horizAdvX||e.horizAdvX)/e.fontFace.unitsPerEm;
if(typeof(f[k])!="undefined"&&!isNaN(f[k])){this.x+=f[k]
}}return
}if(d.strokeStyle!=""){d.strokeText(b.compressSpaces(this.getText()),this.x,this.y)
}if(d.fillStyle!=""){d.fillText(b.compressSpaces(this.getText()),this.x,this.y)
}};
this.getText=function(){};
this.measureText=function(d){var e=this.parent.style("font-family").Definition.getDefinition();
if(e!=null){var g=this.parent.style("font-size").numValueOrDefault(b.Font.Parse(b.ctx.font).fontSize);
var k=0;
var l=this.getText();
if(e.isRTL){l=l.split("").reverse().join("")
}var f=b.ToNumberArray(this.parent.attribute("dx").value);
for(var j=0;
j<l.length;
j++){var h=this.getGlyph(e,l,j);
k+=(h.horizAdvX||e.horizAdvX)*g/e.fontFace.unitsPerEm;
if(typeof(f[j])!="undefined"&&!isNaN(f[j])){k+=f[j]
}}return k
}var m=b.compressSpaces(this.getText());
if(!d.measureText){return m.length*10
}d.save();
this.setContext(d);
var n=d.measureText(m).width;
d.restore();
return n
}
};
b.Element.TextElementBase.prototype=new b.Element.RenderedElementBase;
b.Element.tspan=function(c){this.base=b.Element.TextElementBase;
this.base(c);
this.text=c.nodeType==3?c.nodeValue:c.childNodes.length>0?c.childNodes[0].nodeValue:c.text;
this.getText=function(){return this.text
}
};
b.Element.tspan.prototype=new b.Element.TextElementBase;
b.Element.tref=function(c){this.base=b.Element.TextElementBase;
this.base(c);
this.getText=function(){var d=this.attribute("xlink:href").Definition.getDefinition();
if(d!=null){return d.children[0].getText()
}}
};
b.Element.tref.prototype=new b.Element.TextElementBase;
b.Element.a=function(d){this.base=b.Element.TextElementBase;
this.base(d);
this.hasText=true;
for(var c=0;
c<d.childNodes.length;
c++){if(d.childNodes[c].nodeType!=3){this.hasText=false
}}this.text=this.hasText?d.childNodes[0].nodeValue:"";
this.getText=function(){return this.text
};
this.baseRenderChildren=this.renderChildren;
this.renderChildren=function(e){if(this.hasText){this.baseRenderChildren(e);
var f=new b.Property("fontSize",b.Font.Parse(b.ctx.font).fontSize);
b.Mouse.checkBoundingBox(this,new b.BoundingBox(this.x,this.y-f.Length.toPixels("y"),this.x+this.measureText(e),this.y))
}else{var h=new b.Element.g();
h.children=this.children;
h.parent=this;
h.render(e)
}};
this.onclick=function(){window.open(this.attribute("xlink:href").value)
};
this.onmousemove=function(){b.ctx.canvas.style.cursor="pointer"
}
};
b.Element.a.prototype=new b.Element.TextElementBase;
b.Element.image=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
b.Images.push(this);
this.img=document.createElement("img");
this.loaded=false;
var d=this;
this.img.onload=function(){d.loaded=true
};
this.img.src=this.attribute("xlink:href").value;
this.renderChildren=function(e){var h=this.attribute("x").Length.toPixels("x");
var j=this.attribute("y").Length.toPixels("y");
var g=this.attribute("width").Length.toPixels("x");
var f=this.attribute("height").Length.toPixels("y");
if(g==0||f==0){return
}e.save();
e.translate(h,j);
b.AspectRatio(e,this.attribute("preserveAspectRatio").value,g,this.img.width,f,this.img.height,0,0);
e.drawImage(this.img,0,0);
e.restore()
}
};
b.Element.image.prototype=new b.Element.RenderedElementBase;
b.Element.g=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
this.getBoundingBox=function(){var d=new b.BoundingBox();
for(var e=0;
e<this.children.length;
e++){d.addBoundingBox(this.children[e].getBoundingBox())
}return d
}
};
b.Element.g.prototype=new b.Element.RenderedElementBase;
b.Element.symbol=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
this.baseSetContext=this.setContext;
this.setContext=function(d){this.baseSetContext(d);
if(this.attribute("viewBox").hasValue()){var g=b.ToNumberArray(this.attribute("viewBox").value);
var e=g[0];
var f=g[1];
width=g[2];
height=g[3];
b.AspectRatio(d,this.attribute("preserveAspectRatio").value,this.attribute("width").Length.toPixels("x"),width,this.attribute("height").Length.toPixels("y"),height,e,f);
b.ViewPort.SetCurrent(g[2],g[3])
}}
};
b.Element.symbol.prototype=new b.Element.RenderedElementBase;
b.Element.style=function(w){this.base=b.Element.ElementBase;
this.base(w);
var c=w.childNodes[0].nodeValue+(w.childNodes.length>1?w.childNodes[1].nodeValue:"");
c=c.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"");
c=b.compressSpaces(c);
var h=c.split("}");
for(var r=0;
r<h.length;
r++){if(b.trim(h[r])!=""){var g=h[r].split("{");
var e=g[0].split(",");
var l=g[1].split(";");
for(var t=0;
t<e.length;
t++){var d=b.trim(e[t]);
if(d!=""){var y={};
for(var u=0;
u<l.length;
u++){var x=l[u].indexOf(":");
var v=l[u].substr(0,x);
var E=l[u].substr(x+1,l[u].length-x);
if(v!=null&&E!=null){y[b.trim(v)]=new b.Property(b.trim(v),b.trim(E))
}}b.Styles[d]=y;
if(d=="@font-face"){var p=y["font-family"].value.replace(/"/g,"");
var A=y.src.value.split(",");
for(var z=0;
z<A.length;
z++){if(A[z].indexOf('format("svg")')>0){var D=A[z].indexOf("url");
var C=A[z].indexOf(")",D);
var B=A[z].substr(D+5,C-D-6);
var m=b.parseXml(b.ajax(B));
var q=m.getElementsByTagName("font");
for(var n=0;
n<q.length;
n++){var o=b.CreateElement(q[n]);
b.Definitions[p]=o
}}}}}}}}};
b.Element.style.prototype=new b.Element.ElementBase;
b.Element.use=function(c){this.base=b.Element.RenderedElementBase;
this.base(c);
this.baseSetContext=this.setContext;
this.setContext=function(d){this.baseSetContext(d);
if(this.attribute("x").hasValue()){d.translate(this.attribute("x").Length.toPixels("x"),0)
}if(this.attribute("y").hasValue()){d.translate(0,this.attribute("y").Length.toPixels("y"))
}};
this.getDefinition=function(){var d=this.attribute("xlink:href").Definition.getDefinition();
if(this.attribute("width").hasValue()){d.attribute("width",true).value=this.attribute("width").value
}if(this.attribute("height").hasValue()){d.attribute("height",true).value=this.attribute("height").value
}return d
};
this.path=function(d){var e=this.getDefinition();
if(e!=null){e.path(d)
}};
this.renderChildren=function(d){var e=this.getDefinition();
if(e!=null){e.render(d)
}}
};
b.Element.use.prototype=new b.Element.RenderedElementBase;
b.Element.mask=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.apply=function(f,g){var n=this.attribute("x").Length.toPixels("x");
var o=this.attribute("y").Length.toPixels("y");
var m=this.attribute("width").Length.toPixels("x");
var h=this.attribute("height").Length.toPixels("y");
var j=g.attribute("mask").value;
g.attribute("mask").value="";
var e=document.createElement("canvas");
e.width=n+m;
e.height=o+h;
var k=e.getContext("2d");
this.renderChildren(k);
var d=document.createElement("canvas");
d.width=n+m;
d.height=o+h;
var l=d.getContext("2d");
g.render(l);
l.globalCompositeOperation="destination-in";
l.fillStyle=k.createPattern(e,"no-repeat");
l.fillRect(0,0,n+m,o+h);
f.fillStyle=l.createPattern(d,"no-repeat");
f.fillRect(0,0,n+m,o+h);
g.attribute("mask").value=j
};
this.render=function(d){}
};
b.Element.mask.prototype=new b.Element.ElementBase;
b.Element.clipPath=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.apply=function(d){for(var e=0;
e<this.children.length;
e++){if(this.children[e].path){this.children[e].path(d);
d.clip()
}}};
this.render=function(d){}
};
b.Element.clipPath.prototype=new b.Element.ElementBase;
b.Element.filter=function(c){this.base=b.Element.ElementBase;
this.base(c);
this.apply=function(f,g){var d=g.getBoundingBox();
var q=this.attribute("x").Length.toPixels("x");
var r=this.attribute("y").Length.toPixels("y");
if(q==0||r==0){q=d.x1;
r=d.y1
}var p=this.attribute("width").Length.toPixels("x");
var k=this.attribute("height").Length.toPixels("y");
if(p==0||k==0){p=d.width();
k=d.height()
}var j=g.style("filter").value;
g.style("filter").value="";
var h=0.2;
var m=h*p;
var n=h*k;
var e=document.createElement("canvas");
e.width=p+2*m;
e.height=k+2*n;
var o=e.getContext("2d");
o.translate(-q+m,-r+n);
g.render(o);
for(var l=0;
l<this.children.length;
l++){this.children[l].apply(o,0,0,p+2*m,k+2*n)
}f.drawImage(e,0,0,p+2*m,k+2*n,q-m,r-n,p+2*m,k+2*n);
g.style("filter",true).value=j
};
this.render=function(d){}
};
b.Element.filter.prototype=new b.Element.ElementBase;
b.Element.feGaussianBlur=function(h){this.base=b.Element.ElementBase;
this.base(h);
function g(m){m=Math.max(m,0.01);
var l=Math.ceil(m*4)+1;
mask=[];
for(var k=0;
k<l;
k++){mask[k]=Math.exp(-0.5*(k/m)*(k/m))
}return mask
}function j(l){var m=0;
for(var k=1;
k<l.length;
k++){m+=Math.abs(l[k])
}m=2*m+Math.abs(l[0]);
for(var k=0;
k<l.length;
k++){l[k]/=m
}return l
}function d(k,n,q,l,s){for(var w=0;
w<s;
w++){for(var m=0;
m<l;
m++){var o=e(k,m,w,l,s,3)/255;
for(var v=0;
v<4;
v++){var t=q[0]*(o==0?255:e(k,m,w,l,s,v))*(o==0||v==3?1:o);
for(var u=1;
u<q.length;
u++){var p=e(k,Math.max(m-u,0),w,l,s,3)/255;
var r=e(k,Math.min(m+u,l-1),w,l,s,3)/255;
t+=q[u]*((p==0?255:e(k,Math.max(m-u,0),w,l,s,v))*(p==0||v==3?1:p)+(r==0?255:e(k,Math.min(m+u,l-1),w,l,s,v))*(r==0||v==3?1:r))
}f(n,w,m,s,l,v,t)
}}}}function e(l,o,p,n,k,m){return l[p*n*4+o*4+m]
}function f(l,p,q,o,k,m,n){l[q*o*4+p*4+m]=n
}function c(k,p,l,n){var o=k.getImageData(0,0,p,l);
var m=g(n);
m=j(m);
tmp=[];
d(o.data,tmp,m,p,l);
d(tmp,o.data,m,l,p);
k.clearRect(0,0,p,l);
k.putImageData(o,0,0)
}this.apply=function(k,n,o,m,l){c(k,m,l,this.attribute("stdDeviation").numValue())
}
};
b.Element.filter.prototype=new b.Element.feGaussianBlur;
b.Element.title=function(c){};
b.Element.title.prototype=new b.Element.ElementBase;
b.Element.desc=function(c){};
b.Element.desc.prototype=new b.Element.ElementBase;
b.Element.MISSING=function(c){console.log("ERROR: Element '"+c.nodeName+"' not yet implemented.")
};
b.Element.MISSING.prototype=new b.Element.ElementBase;
b.CreateElement=function(f){var c=f.nodeName.replace(/^[^:]+:/,"");
c=c.replace(/\-/g,"");
var d=null;
if(typeof(b.Element[c])!="undefined"){d=new b.Element[c](f)
}else{d=new b.Element.MISSING(f)
}d.type=f.nodeName;
return d
};
b.load=function(c,d){b.loadXml(c,b.ajax(d))
};
b.loadXml=function(c,d){b.loadXmlDoc(c,b.parseXml(d))
};
b.loadXmlDoc=function(c,d){b.init(c);
var j=function(l){var e=c.canvas;
while(e){l.x-=e.offsetLeft;
l.y-=e.offsetTop;
e=e.offsetParent
}if(window.scrollX){l.x+=window.scrollX
}if(window.scrollY){l.y+=window.scrollY
}return l
};
if(b.opts.ignoreMouse!=true){c.canvas.onclick=function(e){var l=j(new b.Point(e!=null?e.clientX:event.clientX,e!=null?e.clientY:event.clientY));
b.Mouse.onclick(l.x,l.y)
};
c.canvas.onmousemove=function(e){var l=j(new b.Point(e!=null?e.clientX:event.clientX,e!=null?e.clientY:event.clientY));
b.Mouse.onmousemove(l.x,l.y)
}
}var g=b.CreateElement(d.documentElement);
g.root=true;
var h=true;
var f=function(){b.ViewPort.Clear();
if(c.canvas.parentNode){b.ViewPort.SetCurrent(c.canvas.parentNode.clientWidth,c.canvas.parentNode.clientHeight)
}if(b.opts.ignoreDimensions!=true){if(g.style("width").hasValue()){c.canvas.width=g.style("width").Length.toPixels("x");
c.canvas.style.width=c.canvas.width+"px"
}if(g.style("height").hasValue()){c.canvas.height=g.style("height").Length.toPixels("y");
c.canvas.style.height=c.canvas.height+"px"
}}var l=c.canvas.clientWidth||c.canvas.width;
var e=c.canvas.clientHeight||c.canvas.height;
b.ViewPort.SetCurrent(l,e);
if(b.opts!=null&&b.opts.offsetX!=null){g.attribute("x",true).value=b.opts.offsetX
}if(b.opts!=null&&b.opts.offsetY!=null){g.attribute("y",true).value=b.opts.offsetY
}if(b.opts!=null&&b.opts.scaleWidth!=null&&b.opts.scaleHeight!=null){var m=1,n=1;
if(g.attribute("width").hasValue()){m=g.attribute("width").Length.toPixels("x")/b.opts.scaleWidth
}if(g.attribute("height").hasValue()){n=g.attribute("height").Length.toPixels("y")/b.opts.scaleHeight
}g.attribute("width",true).value=b.opts.scaleWidth;
g.attribute("height",true).value=b.opts.scaleHeight;
g.attribute("viewBox",true).value="0 0 "+(l*m)+" "+(e*n);
g.attribute("preserveAspectRatio",true).value="none"
}if(b.opts.ignoreClear!=true){c.clearRect(0,0,l,e)
}g.render(c);
if(h){h=false;
if(b.opts!=null&&typeof(b.opts.renderCallback)=="function"){b.opts.renderCallback()
}}};
var k=true;
if(b.ImagesLoaded()){k=false;
f()
}b.intervalID=setInterval(function(){var l=false;
if(k&&b.ImagesLoaded()){k=false;
l=true
}if(b.opts.ignoreMouse!=true){l=l|b.Mouse.hasEvents()
}if(b.opts.ignoreAnimation!=true){for(var e=0;
e<b.Animations.length;
e++){l=l|b.Animations[e].update(1000/b.FRAMERATE)
}}if(b.opts!=null&&typeof(b.opts.forceRedraw)=="function"){if(b.opts.forceRedraw()==true){l=true
}}if(l){f();
b.Mouse.runEvents()
}},1000/b.FRAMERATE)
};
b.stop=function(){if(b.intervalID){clearInterval(b.intervalID)
}};
b.Mouse=new (function(){this.events=[];
this.hasEvents=function(){return this.events.length!=0
};
this.onclick=function(c,d){this.events.push({type:"onclick",x:c,y:d,run:function(e){if(e.onclick){e.onclick()
}}})
};
this.onmousemove=function(c,d){this.events.push({type:"onmousemove",x:c,y:d,run:function(e){if(e.onmousemove){e.onmousemove()
}}})
};
this.eventElements=[];
this.checkPath=function(f,c){for(var g=0;
g<this.events.length;
g++){var d=this.events[g];
if(c.isPointInPath&&c.isPointInPath(d.x,d.y)){this.eventElements[g]=f
}}};
this.checkBoundingBox=function(f,c){for(var g=0;
g<this.events.length;
g++){var d=this.events[g];
if(c.isPointInBox(d.x,d.y)){this.eventElements[g]=f
}}};
this.runEvents=function(){b.ctx.canvas.style.cursor="";
for(var f=0;
f<this.events.length;
f++){var c=this.events[f];
var d=this.eventElements[f];
while(d){c.run(d);
d=d.parent
}}this.events=[];
this.eventElements=[]
}
});
return b
}})();
if(CanvasRenderingContext2D){CanvasRenderingContext2D.prototype.drawSvg=function(e,c,d,b,a){canvg(this.canvas,e,{ignoreMouse:true,ignoreAnimation:true,ignoreDimensions:true,ignoreClear:true,offsetX:c,offsetY:d,scaleWidth:b,scaleHeight:a})
}
}(function(b){var g,p="div",j="absolute",e="relative",a="hidden",h="visible",d="px",n=b.css,l=b.CanVGRenderer,f=b.SVGRenderer,q=b.extend,c=b.merge,k=b.addEvent,m=b.createElement,o=b.discardElement;
q(l.prototype,f.prototype);
q(l.prototype,{create:function(r,u,t,s){this.setContainer(u,t,s);
this.configure(r)
},setContainer:function(u,t,s){var z=u.style,y=u.parentNode,v=z.left,A=z.top,x=u.offsetWidth,w=u.offsetHeight,r,C={visibility:a,position:j};
this.init.apply(this,[u,t,s]);
r=m("canvas",{width:x,height:w},{position:e,left:v,top:A},u);
this.canvas=r;
this.ttLine=m(p,null,C,y);
this.ttDiv=m(p,null,C,y);
this.ttTimer=g;
var B=m(p,{width:x,height:w},{visibility:a,left:v,top:A},y);
this.hiddenSvg=B;
B.appendChild(this.box)
},configure:function(s){var v=this,t=s.options.tooltip,r=t.borderWidth,w=v.ttDiv,x=t.style,y=v.ttLine,u=parseInt(x.padding,10);
x=c(x,{padding:u+d,"background-color":t.backgroundColor,"border-style":"solid","border-width":r+d,"border-radius":t.borderRadius+d});
if(t.shadow){x=c(x,{"box-shadow":"1px 1px 3px gray","-webkit-box-shadow":"1px 1px 3px gray"})
}n(w,x);
n(y,{"border-left":"1px solid darkgray"});
k(s,"tooltipRefresh",function(B){var C=s.container,D=C.offsetLeft,z=C.offsetTop,A;
w.innerHTML=B.text;
A=s.tooltip.getPosition(w.offsetWidth,w.offsetHeight,{plotX:B.x,plotY:B.y});
n(w,{visibility:h,left:A.x+d,top:A.y+d,"border-color":B.borderColor});
n(y,{visibility:h,left:D+B.x+d,top:z+s.plotTop+d,height:s.plotHeight+d});
if(v.ttTimer!==g){clearTimeout(v.ttTimer)
}v.ttTimer=setTimeout(function(){n(w,{visibility:a});
n(y,{visibility:a})
},3000)
})
},destroy:function(){var r=this;
o(r.canvas);
if(r.ttTimer!==g){clearTimeout(r.ttTimer)
}o(r.ttLine);
o(r.ttDiv);
o(r.hiddenSvg);
return f.prototype.destroy.apply(r)
},color:function(r,s,t){if(r&&r.linearGradient){r=r.stops[r.stops.length-1][1]
}return f.prototype.color.call(this,r,s,t)
},draw:function(){var r=this;
window.canvg(r.canvas,r.hiddenSvg.innerHTML)
}})
}(Highcharts));