var HighchartsAdapter=function(){function d(j){function i(m,l,n){m.removeEventListener(l,n,!1)
}function k(m,l,n){n=m.HCProxiedMethods[n.toString()];
m.detachEvent("on"+l,n)
}function h(l,m){var n=l.HCEvents,p,o,r,q;
if(l.removeEventListener){p=i
}else{if(l.attachEvent){p=k
}else{return
}}m?(o={},o[m]=!0):o=n;
for(q in o){if(n[q]){for(r=n[q].length;
r--;
){p(l,q,n[q][r])
}}}}j.HCExtended||Highcharts.extend(j,{HCExtended:!0,HCEvents:{},bind:function(m,l){var o=this,n=this.HCEvents,p;
if(o.addEventListener){o.addEventListener(m,l,!1)
}else{if(o.attachEvent){p=function(q){q.target=q.srcElement||window;
l.call(o,q)
};
if(!o.HCProxiedMethods){o.HCProxiedMethods={}
}o.HCProxiedMethods[l.toString()]=p;
o.attachEvent("on"+m,p)
}}n[m]===g&&(n[m]=[]);
n[m].push(l)
},unbind:function(l,n){var m,o;
l?(m=this.HCEvents[l]||[],n?(o=HighchartsAdapter.inArray(n,m),o>-1&&(m.splice(o,1),this.HCEvents[l]=m),this.removeEventListener?i(this,l,n):this.attachEvent&&k(this,l,n)):(h(this,l),this.HCEvents[l]=[])):(h(this),this.HCEvents={})
},trigger:function(m,l){var o=this.HCEvents[m]||[],n=o.length,p,r,q;
r=function(){l.defaultPrevented=!0
};
for(p=0;
p<n;
p++){q=o[p];
if(l.stopped){break
}l.preventDefault=r;
l.target=this;
if(!l.type){l.type=m
}q.call(this,l)===!1&&l.preventDefault()
}}});
return j
}var g,a=document,e=[],b=[],f,c;
Math.easeInOutSine=function(j,i,k,h){return -k/2*(Math.cos(Math.PI*j/h)-1)+i
};
return{init:function(h){if(!a.defaultView){this._getStyle=function(j,k){var i;
return j.style[k]?j.style[k]:(k==="opacity"&&(k="filter"),i=j.currentStyle[k.replace(/\-(\w)/g,function(l,m){return m.toUpperCase()
})],k==="filter"&&(i=i.replace(/alpha\(opacity=([0-9]+)\)/,function(m,l){return l/100
})),i===""?1:i)
},this.adapterRun=function(j,k){var i={width:"clientWidth",height:"clientHeight"}[k];
if(i){return j.style.zoom=1,j[i]-2*parseInt(HighchartsAdapter._getStyle(j,"padding"),10)
}}
}if(!Array.prototype.forEach){this.each=function(j,l){for(var i=0,k=j.length;
i<k;
i++){if(l.call(j[i],j[i],i,j)===!1){return i
}}}
}if(!Array.prototype.indexOf){this.inArray=function(j,l){var i,k=0;
if(l){for(i=l.length;
k<i;
k++){if(l[k]===j){return k
}}}return -1
}
}if(!Array.prototype.filter){this.grep=function(j,l){for(var i=[],k=0,m=j.length;
k<m;
k++){l(j[k],k)&&i.push(j[k])
}return i
}
}c=function(j,k,i){this.options=k;
this.elem=j;
this.prop=i
};
c.prototype={update:function(){var j;
j=this.paths;
var k=this.elem,i=k.element;
j&&i?k.attr("d",h.step(j[0],j[1],this.now,this.toD)):k.attr?i&&k.attr(this.prop,this.now):(j={},j[this.prop]=this.now+this.unit,Highcharts.css(k,j));
this.options.step&&this.options.step.call(this.elem,this.now,this)
},custom:function(j,k,i){var l=this,n=function(o){return l.step(o)
},m;
this.startTime=+new Date;
this.start=j;
this.end=k;
this.unit=i;
this.now=this.start;
this.pos=this.state=0;
n.elem=this.elem;
n()&&b.push(n)===1&&(f=setInterval(function(){for(m=0;
m<b.length;
m++){b[m]()||b.splice(m--,1)
}b.length||clearInterval(f)
},13))
},step:function(j){var k=+new Date,i;
i=this.options;
var l=this.elem,m;
if(l.stopAnimation||l.attr&&!l.element){i=!1
}else{if(j||k>=i.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
j=this.options.curAnim[this.prop]=!0;
for(m in i.curAnim){i.curAnim[m]!==!0&&(j=!1)
}j&&i.complete&&i.complete.call(l);
i=!1
}else{l=k-this.startTime,this.state=l/i.duration,this.pos=i.easing(l,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update(),i=!0
}}return i
}};
this.animate=function(j,k,i){var l,o="",m,p,n;
j.stopAnimation=!1;
if(typeof i!=="object"||i===null){l=arguments,i={duration:l[2],easing:l[3],complete:l[4]}
}if(typeof i.duration!=="number"){i.duration=400
}i.easing=Math[i.easing]||Math.easeInOutSine;
i.curAnim=Highcharts.extend({},k);
for(n in k){p=new c(j,i,n),m=null,n==="d"?(p.paths=h.init(j,j.d,k.d),p.toD=k.d,l=0,m=1):j.attr?l=j.attr(n):(l=parseFloat(HighchartsAdapter._getStyle(j,n))||0,n!=="opacity"&&(o="px")),m||(m=parseFloat(k[n])),p.custom(l,m,o)
}}
},_getStyle:function(i,h){return window.getComputedStyle(i,void 0).getPropertyValue(h)
},getScript:function(j,i){var k=a.getElementsByTagName("head")[0],h=a.createElement("script");
h.type="text/javascript";
h.src=j;
h.onload=i;
k.appendChild(h)
},inArray:function(i,h){return h.indexOf?h.indexOf(i):e.indexOf.call(h,i)
},adapterRun:function(i,h){return parseInt(HighchartsAdapter._getStyle(i,h),10)
},grep:function(i,h){return e.filter.call(i,h)
},map:function(j,i){for(var k=[],h=0,l=j.length;
h<l;
h++){k[h]=i.call(j[h],j[h],h,j)
}return k
},offset:function(i){var h=document.documentElement,i=i.getBoundingClientRect();
return{top:i.top+(window.pageYOffset||h.scrollTop)-(h.clientTop||0),left:i.left+(window.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}
},addEvent:function(i,h,j){d(i).bind(h,j)
},removeEvent:function(i,h,j){d(i).unbind(h,j)
},fireEvent:function(j,i,k,h){var l;
a.createEvent&&(j.dispatchEvent||j.fireEvent)?(l=a.createEvent("Events"),l.initEvent(i,!0,!0),l.target=j,Highcharts.extend(l,k),j.dispatchEvent?j.dispatchEvent(l):j.fireEvent(i,l)):j.HCExtended===!0&&(k=k||{},j.trigger(i,k));
k&&k.defaultPrevented&&(h=null);
h&&h(k)
},washMouseEvent:function(h){return h
},stop:function(h){h.stopAnimation=!0
},each:function(i,h){return Array.prototype.forEach.call(i,h)
}}
}();