var HighchartsAdapter=(function(){var g,b=document,c=[],f=[],e,d;
Math.easeInOutSine=function(k,h,i,j){return -i/2*(Math.cos(Math.PI*k/j)-1)+h
};
function a(i){function k(l,n,m){l.removeEventListener(n,m,false)
}function h(l,n,m){m=l.HCProxiedMethods[m.toString()];
l.detachEvent("on"+n,m)
}function j(l,q){var m=l.HCEvents,p,r,n,o;
if(l.removeEventListener){p=k
}else{if(l.attachEvent){p=h
}else{return
}}if(q){r={};
r[q]=true
}else{r=m
}for(o in r){if(m[o]){n=m[o].length;
while(n--){p(l,o,m[o][n])
}}}}if(!i.HCExtended){Highcharts.extend(i,{HCExtended:true,HCEvents:{},bind:function(o,n){var l=this,m=this.HCEvents,p;
if(l.addEventListener){l.addEventListener(o,n,false)
}else{if(l.attachEvent){p=function(q){q.target=q.srcElement||window;
n.call(l,q)
};
if(!l.HCProxiedMethods){l.HCProxiedMethods={}
}l.HCProxiedMethods[n.toString()]=p;
l.attachEvent("on"+o,p)
}}if(m[o]===g){m[o]=[]
}m[o].push(n)
},unbind:function(o,m){var l,n;
if(o){l=this.HCEvents[o]||[];
if(m){n=HighchartsAdapter.inArray(m,l);
if(n>-1){l.splice(n,1);
this.HCEvents[o]=l
}if(this.removeEventListener){k(this,o,m)
}else{if(this.attachEvent){h(this,o,m)
}}}else{j(this,o);
this.HCEvents[o]=[]
}}else{j(this);
this.HCEvents={}
}},trigger:function(q,l){var m=this.HCEvents[q]||[],s=this,p=m.length,o,r,n;
r=function(){l.defaultPrevented=true
};
for(o=0;
o<p;
o++){n=m[o];
if(l.stopped){return
}l.preventDefault=r;
l.target=s;
if(!l.type){l.type=q
}if(n.call(this,l)===false){l.preventDefault()
}}}})
}return i
}return{init:function(h){if(!b.defaultView){this._getStyle=function(i,j){var k;
if(i.style[j]){return i.style[j]
}else{if(j==="opacity"){j="filter"
}k=i.currentStyle[j.replace(/\-(\w)/g,function(l,m){return m.toUpperCase()
})];
if(j==="filter"){k=k.replace(/alpha\(opacity=([0-9]+)\)/,function(l,m){return m/100
})
}return k===""?1:k
}};
this.adapterRun=function(j,k){var i={width:"clientWidth",height:"clientHeight"}[k];
if(i){j.style.zoom=1;
return j[i]-2*parseInt(HighchartsAdapter._getStyle(j,"padding"),10)
}}
}if(!Array.prototype.forEach){this.each=function(i,j){var k=0,l=i.length;
for(;
k<l;
k++){if(j.call(i[k],i[k],k,i)===false){return k
}}}
}if(!Array.prototype.indexOf){this.inArray=function(k,i){var l,j=0;
if(i){l=i.length;
for(;
j<l;
j++){if(i[j]===k){return j
}}}return -1
}
}if(!Array.prototype.filter){this.grep=function(j,i){var m=[],k=0,l=j.length;
for(;
k<l;
k++){if(!!i(j[k],k)){m.push(j[k])
}}return m
}
}d=function(i,j,k){this.options=j;
this.elem=i;
this.prop=k
};
d.prototype={update:function(){var l,k=this.paths,i=this.elem,j=i.element;
if(k&&j){i.attr("d",h.step(k[0],k[1],this.now,this.toD))
}else{if(i.attr){if(j){i.attr(this.prop,this.now)
}}else{l={};
l[this.prop]=this.now+this.unit;
Highcharts.css(i,l)
}}if(this.options.step){this.options.step.call(this.elem,this.now,this)
}},custom:function(i,m,n){var k=this,l=function(p){return k.step(p)
},j;
this.startTime=+new Date();
this.start=i;
this.end=m;
this.unit=n;
this.now=this.start;
this.pos=this.state=0;
l.elem=this.elem;
if(l()&&f.push(l)===1){e=setInterval(function(){for(j=0;
j<f.length;
j++){if(!f[j]()){f.splice(j--,1)
}}if(!f.length){clearInterval(e)
}},13)
}},step:function(k){var p=+new Date(),o,i,n=this.options,j=this.elem,l;
if(j.stopAnimation||(j.attr&&!j.element)){o=false
}else{if(k||p>=n.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
i=true;
for(l in n.curAnim){if(n.curAnim[l]!==true){i=false
}}if(i){if(n.complete){n.complete.call(j)
}}o=false
}else{var m=p-this.startTime;
this.state=m/n.duration;
this.pos=n.easing(m,0,1,n.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update();
o=true
}}return o
}};
this.animate=function(j,o,n){var p,q="",k,l,i,m;
j.stopAnimation=false;
if(typeof n!=="object"||n===null){i=arguments;
n={duration:i[2],easing:i[3],complete:i[4]}
}if(typeof n.duration!=="number"){n.duration=400
}n.easing=Math[n.easing]||Math.easeInOutSine;
n.curAnim=Highcharts.extend({},o);
for(m in o){l=new d(j,n,m);
k=null;
if(m==="d"){l.paths=h.init(j,j.d,o.d);
l.toD=o.d;
p=0;
k=1
}else{if(j.attr){p=j.attr(m)
}else{p=parseFloat(HighchartsAdapter._getStyle(j,m))||0;
if(m!=="opacity"){q="px"
}}}if(!k){k=parseFloat(o[m])
}l.custom(p,k,q)
}}
},_getStyle:function(h,i){return window.getComputedStyle(h,undefined).getPropertyValue(i)
},getScript:function(k,h){var i=b.getElementsByTagName("head")[0],j=b.createElement("script");
j.type="text/javascript";
j.src=k;
j.onload=h;
i.appendChild(j)
},inArray:function(i,h){return h.indexOf?h.indexOf(i):c.indexOf.call(h,i)
},adapterRun:function(h,i){return parseInt(HighchartsAdapter._getStyle(h,i),10)
},grep:function(i,h){return c.filter.call(i,h)
},map:function(h,i){var l=[],j=0,k=h.length;
for(;
j<k;
j++){l[j]=i.call(h[j],h[j],j,h)
}return l
},offset:function(j){var i=document.documentElement,h=j.getBoundingClientRect();
return{top:h.top+(window.pageYOffset||i.scrollTop)-(i.clientTop||0),left:h.left+(window.pageXOffset||i.scrollLeft)-(i.clientLeft||0)}
},addEvent:function(h,j,i){a(h).bind(j,i)
},removeEvent:function(h,j,i){a(h).unbind(j,i)
},fireEvent:function(j,l,k,h){var i;
if(b.createEvent&&(j.dispatchEvent||j.fireEvent)){i=b.createEvent("Events");
i.initEvent(l,true,true);
i.target=j;
Highcharts.extend(i,k);
if(j.dispatchEvent){j.dispatchEvent(i)
}else{j.fireEvent(l,i)
}}else{if(j.HCExtended===true){k=k||{};
j.trigger(l,k)
}}if(k&&k.defaultPrevented){h=null
}if(h){h(k)
}},washMouseEvent:function(h){return h
},stop:function(h){h.stopAnimation=true
},each:function(h,i){return Array.prototype.forEach.call(h,i)
}}
}());