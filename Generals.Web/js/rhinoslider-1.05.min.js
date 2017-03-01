(function(e,h,g){e.extend(e.easing,{def:"out",out:function(c,a,d,b,j){return -b*(a/=j)*(a-2)+d
},kick:function(c,a,d,b,j){if((a/=j/2)<1){return b/2*Math.pow(2,10*(a-1))+d
}return b/2*(-Math.pow(2,-10*--a)+2)+d
},shuffle:function(c,a,d,b,j){if((a/=j/2)<1){return b/2*a*a*a*a*a+d
}return b/2*((a-=2)*a*a*a*a+2)+d
}});
var f=function(y,w){var c=e.extend({},e.fn.rhinoslider.defaults,w),a=e(y),D=e.fn.rhinoslider.effects,z=e.fn.rhinoslider.preparations,E={isPlaying:false,intervalAutoPlay:false,active:"",next:"",container:"",items:"",buttons:[],prefix:"rhino-",playedArray:[],playedCounter:0,original:y};
c.callBeforeInit();
var x=function(i){i.controlsPrevNext=String(i.controlsPrevNext)=="true"?true:false;
i.controlsKeyboard=String(i.controlsKeyboard)=="true"?true:false;
i.controlsMousewheel=String(i.controlsMousewheel)=="true"?true:false;
i.controlsPlayPause=String(i.controlsPlayPause)=="true"?true:false;
i.pauseOnHover=String(i.pauseOnHover)=="true"?true:false;
i.animateActive=String(i.animateActive)=="true"?true:false;
i.autoPlay=String(i.autoPlay)=="true"?true:false;
i.cycled=String(i.cycled)=="true"?true:false;
i.showTime=parseInt(i.showTime,10);
i.effectTime=parseInt(i.effectTime,10);
i.controlFadeTime=parseInt(i.controlFadeTime,10);
i.captionsFadeTime=parseInt(i.captionsFadeTime,10);
tmpShiftValue=i.shiftValue;
tmpParts=i.parts;
i.shiftValue=[];
i.parts=[];
return i
},G=function(l,p,k){p=x(p);
l.wrap('<div class="'+k.prefix+'container">');
k.container=l.parent("."+k.prefix+"container");
k.isPlaying=p.autoPlay;
var n="";
if(p.controlsPrevNext){k.container.addClass(k.prefix+"controls-prev-next");
n='<a class="'+k.prefix+"prev "+k.prefix+'btn">'+p.prevText+'</a><a class="'+k.prefix+"next "+k.prefix+'btn">'+p.nextText+"</a>";
k.container.append(n);
k.buttons.prev=k.container.find("."+k.prefix+"prev");
k.buttons.next=k.container.find("."+k.prefix+"next");
k.buttons.prev.click(function(){B(l,p);
if(p.autoPlay){v()
}});
k.buttons.next.click(function(){d(l,p);
if(p.autoPlay){v()
}})
}if(p.controlsPlayPause){k.container.addClass(k.prefix+"controls-play-pause");
n=p.autoPlay?'<a class="'+k.prefix+"toggle "+k.prefix+"pause "+k.prefix+'btn">'+p.pauseText+"</a>":'<a class="'+k.prefix+"toggle "+k.prefix+"play "+k.prefix+'btn">'+p.playText+"</a>";
k.container.append(n);
k.buttons.play=k.container.find("."+k.prefix+"toggle");
k.buttons.play.click(function(){if(k.isPlaying===false){F()
}else{v()
}})
}k.container.find("."+k.prefix+"btn").css({position:"absolute",display:"block",cursor:"pointer"});
if(p.showControls!=="always"){var m=k.container.find("."+k.prefix+"btn");
m.stop(true,true).fadeOut(0);
if(p.showControls==="hover"){k.container.mouseenter(function(){m.stop(true,true).fadeIn(p.controlFadeTime)
}).mouseleave(function(){m.delay(200).fadeOut(p.controlFadeTime)
})
}}if(p.showControls!=="never"){k.container.addClass(k.prefix+"show-controls")
}k.items=l.children();
k.items.addClass(k.prefix+"item");
k.items.first().addClass(k.prefix+"active");
var i=p.styles.split(","),j;
e.each(i,function(r,q){j=e.trim(q);
k.container.css(j,l.css(j));
l.css(j," ");
switch(j){case"width":case"height":l.css(j,"100%");
break
}});
if(k.container.css("position")=="static"){k.container.css("position","relative")
}l.css({top:"auto",left:"auto",position:"relative"});
k.items.css({margin:0,width:l.css("width"),height:l.css("height"),position:"absolute",top:0,left:0,zIndex:0,opacity:0,overflow:"hidden"});
k.items.each(function(q){e(this).attr("id",k.prefix+"item"+q)
});
if(p.showBullets!=="never"){k.container.addClass(k.prefix+"show-bullets");
var o='<ol class="'+k.prefix+'bullets">';
k.items.each(function(r){var q=e(this);
var s=k.prefix+"item"+r;
o=o+'<li><a id="'+s+'-bullet" class="'+k.prefix+'bullet">'+parseInt(r+1,10)+"</a></li>"
});
o=o+"</ol>";
k.container.append(o);
k.navigation=k.container.find("."+k.prefix+"bullets");
k.buttons.bullets=k.navigation.find("."+k.prefix+"bullet");
k.buttons.bullets.first().addClass(k.prefix+"active-bullet "+k.prefix+"first-bullet");
k.buttons.bullets.last().addClass(k.prefix+"last-bullet");
k.buttons.bullets.click(function(){var s=e(this).attr("id").replace("-bullet","");
var q=k.container.find("#"+s);
var r=parseInt(k.navigation.find("."+k.prefix+"active-bullet").attr("id").replace("-bullet","").replace(k.prefix+"item",""),10);
var t=parseInt(s.replace(k.prefix+"item",""),10);
if(r<t){d(l,p,q)
}else{if(r>t){B(l,p,q)
}else{return false
}}if(p.autoPlay){v()
}})
}if(p.showBullets==="hover"){k.navigation.hide();
k.container.mouseenter(function(){k.navigation.stop(true,true).fadeIn(p.controlFadeTime)
}).mouseleave(function(){k.navigation.delay(200).fadeOut(p.controlFadeTime)
})
}if(p.showCaptions!=="never"){k.container.addClass(k.prefix+"show-captions");
k.items.each(function(){var q=e(this);
if(q.children("."+k.prefix+"caption").length==0){if(q.children("img").length>0){var r=e.trim(q.children("img:first").attr("title"));
if(g!=r||""==r){q.append('<div class="'+k.prefix+'caption">'+r+"</div>");
q.children("."+k.prefix+"caption:empty").remove()
}}}});
if(p.showCaptions==="hover"){e("."+k.prefix+"caption").hide();
k.container.mouseenter(function(){k.active.find("."+k.prefix+"caption").stop(true,true).fadeTo(p.captionFadeTime,p.captionsOpacity)
}).mouseleave(function(){k.active.find("."+k.prefix+"caption").delay(200).fadeOut(p.captionFadeTime)
})
}else{if(p.showCaptions==="always"){e("."+k.prefix+"caption").fadeTo(0,p.captionsOpacity)
}}}k.items.each(function(){e(this).children("img").removeAttr("title")
});
if(p.autoPlay){k.intervalAutoPlay=setInterval(function(){d(l,p)
},p.showTime)
}else{k.intervalAutoPlay=false
}if(p.pauseOnHover){k.container.addClass(k.prefix+"pause-on-hover");
l.mouseenter(function(){if(k.isPlaying){clearInterval(k.intervalAutoPlay);
if(p.controlsPlayPause){k.buttons.play.text(p.playText).removeClass(k.prefix+"pause").addClass(k.prefix+"play")
}}}).mouseleave(function(){if(k.isPlaying){k.intervalAutoPlay=setInterval(function(){d(l,p)
},p.showTime);
if(p.controlsPlayPause){k.buttons.play.text(p.pauseText).removeClass(k.prefix+"play").addClass(k.prefix+"pause")
}}})
}if(p.controlsKeyboard){k.container.addClass(k.prefix+"controls-keyboard");
e(document).keyup(function(q){switch(q.keyCode){case 37:v();
B(l,p);
break;
case 39:v();
d(l,p);
break;
case 80:if(k.isPlaying===false){F()
}else{v()
}break
}})
}if(p.controlsMousewheel){k.container.addClass(k.prefix+"controls-mousewheel");
if(!e.isFunction(e.fn.mousewheel)){alert("$.fn.mousewheel is not a function. Please check that you have the mousewheel-plugin installed properly.")
}else{l.mousewheel(function(s,q){s.preventDefault();
if(k.container.hasClass("inProgress")){return false
}var r=q>0?"up":"down";
if(r==="up"){v();
B(l,p)
}else{v();
d(l,p)
}})
}}k.active=l.find("."+k.prefix+"active");
k.active.css({zIndex:1,opacity:1});
if(!p.cycled){k.items.each(function(){var q=e(this);
if(q.is(":first-child")){q.addClass(k.prefix+"firstItem")
}if(q.is(":last-child")){q.addClass(k.prefix+"lastItem")
}});
if(k.active.is(":first-child")&&p.controlsPrevNext){k.buttons.prev.addClass("disabled")
}if(k.active.is(":last-child")){if(p.controlsPrevNext){k.buttons.next.addClass("disabled");
v()
}if(p.autoPlay){k.buttons.play.addClass("disabled")
}}}if(z[p.effect]==g){console.log("Effect for "+p.effect+" not found.")
}else{z[p.effect](l,p,k)
}l.data("slider:vars",k);
p.callBackInit()
},H=function(i){return i.is(":first-child")
},b=function(i){return i.is(":last-child")
},v=function(){var i=a.data("slider:vars");
clearInterval(i.intervalAutoPlay);
i.isPlaying=false;
if(c.controlsPlayPause){i.buttons.play.text(c.playText).removeClass(i.prefix+"pause").addClass(i.prefix+"play")
}c.callBackPause()
},F=function(){var i=a.data("slider:vars");
i.intervalAutoPlay=setInterval(function(){d(a,c)
},c.showTime);
i.isPlaying=true;
if(c.controlsPlayPause){i.buttons.play.text(c.pauseText).removeClass(i.prefix+"play").addClass(i.prefix+"pause")
}c.callBackPlay()
},B=function(j,l,i){var m=j.data("slider:vars");
if(!l.cycled&&H(m.active)){return false
}l.callBeforePrev();
if(m.container.hasClass("inProgress")){return false
}m.container.addClass("inProgress");
if(!i){if(l.randomOrder){var k=A(m);
m.next=m.container.find("#"+k)
}else{m.next=m.items.first().hasClass(m.prefix+"active")?m.items.last():m.active.prev()
}}else{m.next=i
}if(m.next.hasClass(m.prefix+"active")){return false
}if(l.showCaptions!=="never"){e("."+m.prefix+"caption").stop(true,true).fadeOut(l.captionsFadeTime)
}if(l.showBullets!=="never"&&l.changeBullets=="before"){m.navigation.find("."+m.prefix+"active-bullet").removeClass(m.prefix+"active-bullet");
m.navigation.find("#"+m.next.attr("id")+"-bullet").addClass(m.prefix+"active-bullet")
}setTimeout(function(){var n=[];
n.settings=l;
n.animateActive=l.animateActive;
n.direction=l.slidePrevDirection;
if(D[l.effect]==g){console.log("Preparations for "+l.effect+" not found.")
}else{D[l.effect](j,n,C)
}setTimeout(function(){if(l.showBullets!=="never"&&l.changeBullets=="after"){m.navigation.find("."+m.prefix+"active-bullet").removeClass(m.prefix+"active-bullet");
m.navigation.find("#"+m.next.attr("id")+"-bullet").addClass(m.prefix+"active-bullet")
}l.callBackPrev()
},l.effectTime)
},l.captionsFadeTime);
if(l.showBullets!=="never"&&l.changeBullets=="after"){m.navigation.find("."+m.prefix+"active-bullet").removeClass(m.prefix+"active-bullet");
m.navigation.find("#"+m.next.attr("id")+"-bullet").addClass(m.prefix+"active-bullet")
}},d=function(j,l,i){var m=j.data("slider:vars");
if(!l.cycled&&b(m.active)){return false
}l.callBeforeNext();
if(m.container.hasClass("inProgress")){return false
}m.container.addClass("inProgress");
if(!i){if(l.randomOrder){var k=A(m);
m.next=m.container.find("#"+k)
}else{m.next=m.items.last().hasClass(m.prefix+"active")?m.items.first():m.active.next()
}}else{m.next=i
}if(m.next.hasClass(m.prefix+"active")){return false
}if(l.showCaptions!=="never"){e("."+m.prefix+"caption").stop(true,true).fadeOut(l.captionsFadeTime)
}if(l.showBullets!=="never"&&l.changeBullets=="before"){m.navigation.find("."+m.prefix+"active-bullet").removeClass(m.prefix+"active-bullet");
m.navigation.find("#"+m.next.attr("id")+"-bullet").addClass(m.prefix+"active-bullet")
}setTimeout(function(){var n=[];
n.settings=l;
n.animateActive=l.animateActive;
n.direction=l.slideNextDirection;
if(D[l.effect]==g){console.log("Preparations for "+l.effect+" not found.")
}else{D[l.effect](j,n,C)
}setTimeout(function(){if(l.showBullets!=="never"&&l.changeBullets=="after"){m.navigation.find("."+m.prefix+"active-bullet").removeClass(m.prefix+"active-bullet");
m.navigation.find("#"+m.next.attr("id")+"-bullet").addClass(m.prefix+"active-bullet")
}l.callBackNext()
},l.effectTime)
},l.captionsFadeTime)
},A=function(m){var i=m.active.attr("id");
var j=m.items.length;
var k=m.prefix+"item"+parseInt((Math.random()*j),10);
var l=k.replace(m.prefix+"item","");
if(m.playedCounter>=j){m.playedCounter=0;
m.playedArray=[]
}if(i==k||m.playedArray[l]===true){return A(m)
}else{m.playedArray[l]=true;
m.playedCounter++;
return k
}},C=function(i,j){var k=i.data("slider:vars");
k.next.addClass(k.prefix+"active").css({zIndex:1,top:0,left:0,width:"100%",height:"100%",margin:0,opacity:1});
k.active.css({zIndex:0,top:0,left:0,margin:0,opacity:0}).removeClass(k.prefix+"active");
j.additionalResets();
if(!j.cycled){if(j.controlsPrevNext){if(H(k.next)){k.buttons.prev.addClass("disabled")
}else{k.buttons.prev.removeClass("disabled")
}if(b(k.next)){k.buttons.next.addClass("disabled");
v()
}else{k.buttons.next.removeClass("disabled")
}}if(j.controlsPlayPause){if(b(k.next)){k.buttons.play.addClass("disabled");
v()
}else{k.buttons.play.removeClass("disabled")
}}}if(j.showBullets!=="never"){k.navigation.find("."+k.prefix+"active-bullet").removeClass(k.prefix+"active-bullet");
k.navigation.find("#"+k.next.attr("id")+"-bullet").addClass(k.prefix+"active-bullet")
}k.active=k.next;
if(j.showCaptions!=="never"){k.active.find("."+k.prefix+"caption").stop(true,true).fadeTo(j.captionsFadeTime,j.captionsOpacity)
}k.container.removeClass("inProgress")
};
this.pause=function(){v()
};
this.play=function(){F()
};
this.prev=function(i){B(a,c,i)
};
this.next=function(i){d(a,c,i)
};
this.uninit=function(){v();
E.container.before(e(y).data("slider:original"));
a.data("slider:vars",null);
E.container.remove();
e(y).data("rhinoslider",null)
};
G(a,c,E)
};
e.fn.rhinoslider=function(a){return this.each(function(){var b=e(this);
if(b.data("rhinoslider")){return b.data("rhinoslider")
}b.data("slider:original",b.clone());
var c=new f(this,a);
b.data("rhinoslider",c)
})
};
e.fn.rhinoslider.defaults={effect:"slide",easing:"swing",randomOrder:false,controlsMousewheel:true,controlsKeyboard:true,controlsPrevNext:true,controlsPlayPause:true,pauseOnHover:true,animateActive:true,autoPlay:false,cycled:true,showTime:3000,effectTime:1000,controlFadeTime:650,captionsFadeTime:250,captionsOpacity:0.7,partDelay:100,shiftValue:"150",parts:"5,3",showCaptions:"never",showBullets:"hover",changeBullets:"after",showControls:"hover",slidePrevDirection:"toLeft",slideNextDirection:"toRight",prevText:"prev",nextText:"next",playText:"play",pauseText:"pause",styles:"position,top,right,bottom,left,margin-top,margin-right,margin-bottom,margin-left,width,height",callBeforeInit:function(){return false
},callBackInit:function(){return false
},callBeforeNext:function(){return false
},callBeforePrev:function(){return false
},callBackNext:function(){return false
},callBackPrev:function(){return false
},callBackPlay:function(){return false
},callBackPause:function(){return false
},additionalResets:function(){return false
}};
e.fn.rhinoslider.effects={slide:function(a,d,b){var n=a.data("slider:vars");
var l=d.settings;
var c=d.direction;
var m=[];
m.width=n.container.width();
m.height=n.container.height();
m.easing=l.showTime===0?"linear":l.easing;
m.nextEasing=l.showTime===0?"linear":l.easing;
a.css("overflow","hidden");
switch(c){case"toTop":m.top=-m.height;
m.left=0;
m.nextTop=-m.top;
m.nextLeft=0;
break;
case"toBottom":m.top=m.height;
m.left=0;
m.nextTop=-m.top;
m.nextLeft=0;
break;
case"toRight":m.top=0;
m.left=m.width;
m.nextTop=0;
m.nextLeft=-m.left;
break;
case"toLeft":m.top=0;
m.left=-m.width;
m.nextTop=0;
m.nextLeft=-m.left;
break
}n.next.css({zIndex:2,opacity:1});
if(l.animateActive){n.active.css({top:0,left:0}).animate({top:m.top,left:m.left,opacity:1},l.effectTime,m.easing)
}n.next.css({top:m.nextTop,left:m.nextLeft}).animate({top:0,left:0,opacity:1},l.effectTime,m.nextEasing,function(){b(a,l)
})
}};
e.fn.rhinoslider.preparations={slide:function(a,b,c){c.items.css("overflow","hidden");
a.css("overflow","hidden")
}}
})(jQuery,window);