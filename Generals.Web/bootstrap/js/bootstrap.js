if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(a){function b(){var c=document.createElement("bootstrap");
var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var d in e){if(c.style[d]!==undefined){return{end:e[d]}
}}return false
}a.fn.emulateTransitionEnd=function(f){var e=false,c=this;
a(this).one(a.support.transition.end,function(){e=true
});
var d=function(){if(!e){a(c).trigger(a.support.transition.end)
}};
setTimeout(d,f);
return this
};
a(function(){a.support.transition=b()
})
}(jQuery);
+function(a){var c='[data-dismiss="alert"]';
var b=function(e){a(e).on("click",c,this.close)
};
b.prototype.close=function(g){var f=a(this);
var i=f.attr("data-target");
if(!i){i=f.attr("href");
i=i&&i.replace(/.*(?=#[^\s]*$)/,"")
}var e=a(i);
if(g){g.preventDefault()
}if(!e.length){e=f.hasClass("alert")?f:f.parent()
}e.trigger(g=a.Event("close.bs.alert"));
if(g.isDefaultPrevented()){return
}e.removeClass("in");
function h(){e.trigger("closed.bs.alert").remove()
}a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,h).emulateTransitionEnd(150):h()
};
var d=a.fn.alert;
a.fn.alert=function(e){return this.each(function(){var f=a(this);
var g=f.data("bs.alert");
if(!g){f.data("bs.alert",(g=new b(this)))
}if(typeof e=="string"){g[e].call(f)
}})
};
a.fn.alert.Constructor=b;
a.fn.alert.noConflict=function(){a.fn.alert=d;
return this
};
a(document).on("click.bs.alert.data-api",c,b.prototype.close)
}(jQuery);
+function(a){var b=function(d,e){this.$element=a(d);
this.options=a.extend({},b.DEFAULTS,e);
this.isLoading=false
};
b.DEFAULTS={loadingText:"loading..."};
b.prototype.setState=function(g){var e="disabled";
var d=this.$element;
var h=d.is("input")?"val":"html";
var f=d.data();
g=g+"Text";
if(!f.resetText){d.data("resetText",d[h]())
}d[h](f[g]||this.options[g]);
setTimeout(a.proxy(function(){if(g=="loadingText"){this.isLoading=true;
d.addClass(e).attr(e,e)
}else{if(this.isLoading){this.isLoading=false;
d.removeClass(e).removeAttr(e)
}}},this),0)
};
b.prototype.toggle=function(){var f=true;
var e=this.$element.closest('[data-toggle="buttons"]');
if(e.length){var d=this.$element.find("input");
if(d.prop("type")=="radio"){if(d.prop("checked")&&this.$element.hasClass("active")){f=false
}else{e.find(".active").removeClass("active")
}}if(f){d.prop("checked",!this.$element.hasClass("active")).trigger("change")
}}if(f){this.$element.toggleClass("active")
}};
var c=a.fn.button;
a.fn.button=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.button");
var g=typeof d=="object"&&d;
if(!f){e.data("bs.button",(f=new b(this,g)))
}if(d=="toggle"){f.toggle()
}else{if(d){f.setState(d)
}}})
};
a.fn.button.Constructor=b;
a.fn.button.noConflict=function(){a.fn.button=c;
return this
};
a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var d=a(e.target);
if(!d.hasClass("btn")){d=d.closest(".btn")
}d.button("toggle");
e.preventDefault()
})
}(jQuery);
+function(a){var b=function(d,e){this.$element=a(d);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=e;
this.paused=this.sliding=this.interval=this.$active=this.$items=null;
this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))
};
b.DEFAULTS={interval:5000,pause:"hover",wrap:true};
b.prototype.cycle=function(d){d||(this.paused=false);
this.interval&&clearInterval(this.interval);
this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval));
return this
};
b.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");
this.$items=this.$active.parent().children();
return this.$items.index(this.$active)
};
b.prototype.to=function(e){var f=this;
var d=this.getActiveIndex();
if(e>(this.$items.length-1)||e<0){return
}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){f.to(e)
})
}if(d==e){return this.pause().cycle()
}return this.slide(e>d?"next":"prev",a(this.$items[e]))
};
b.prototype.pause=function(d){d||(this.paused=true);
if(this.$element.find(".next, .prev").length&&a.support.transition){this.$element.trigger(a.support.transition.end);
this.cycle(true)
}this.interval=clearInterval(this.interval);
return this
};
b.prototype.next=function(){if(this.sliding){return
}return this.slide("next")
};
b.prototype.prev=function(){if(this.sliding){return
}return this.slide("prev")
};
b.prototype.slide=function(l,j){var d=this.$element.find(".item.active");
var e=j||d[l]();
var i=this.interval;
var f=l=="next"?"left":"right";
var h=l=="next"?"first":"last";
var k=this;
if(!e.length){if(!this.options.wrap){return
}e=this.$element.find(".item")[h]()
}if(e.hasClass("active")){return this.sliding=false
}var g=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:f});
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}this.sliding=true;
i&&this.pause();
if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
this.$element.one("slid.bs.carousel",function(){var m=a(k.$indicators.children()[k.getActiveIndex()]);
m&&m.addClass("active")
})
}if(a.support.transition&&this.$element.hasClass("slide")){e.addClass(l);
e[0].offsetWidth;
d.addClass(f);
e.addClass(f);
d.one(a.support.transition.end,function(){e.removeClass([l,f].join(" ")).addClass("active");
d.removeClass(["active",f].join(" "));
k.sliding=false;
setTimeout(function(){k.$element.trigger("slid.bs.carousel")
},0)
}).emulateTransitionEnd(d.css("transition-duration").slice(0,-1)*1000)
}else{d.removeClass("active");
e.addClass("active");
this.sliding=false;
this.$element.trigger("slid.bs.carousel")
}i&&this.cycle();
return this
};
var c=a.fn.carousel;
a.fn.carousel=function(d){return this.each(function(){var e=a(this);
var g=e.data("bs.carousel");
var h=a.extend({},b.DEFAULTS,e.data(),typeof d=="object"&&d);
var f=typeof d=="string"?d:h.slide;
if(!g){e.data("bs.carousel",(g=new b(this,h)))
}if(typeof d=="number"){g.to(d)
}else{if(f){g[f]()
}else{if(h.interval){g.pause().cycle()
}}}})
};
a.fn.carousel.Constructor=b;
a.fn.carousel.noConflict=function(){a.fn.carousel=c;
return this
};
a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(f){var e=a(this),g;
var d=a(e.attr("data-target")||(g=e.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,""));
var h=a.extend({},d.data(),e.data());
var i=e.attr("data-slide-to");
if(i){h.interval=false
}d.carousel(h);
if(i=e.attr("data-slide-to")){d.data("bs.carousel").to(i)
}f.preventDefault()
});
a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var d=a(this);
d.carousel(d.data())
})
})
}(jQuery);
+function(a){var b=function(d,e){this.$element=a(d);
this.options=a.extend({},b.DEFAULTS,e);
this.transitioning=null;
if(this.options.parent){this.$parent=a(this.options.parent)
}if(this.options.toggle){this.toggle()
}};
b.DEFAULTS={toggle:true};
b.prototype.dimension=function(){var d=this.$element.hasClass("width");
return d?"width":"height"
};
b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var i=a.Event("show.bs.collapse");
this.$element.trigger(i);
if(i.isDefaultPrevented()){return
}var d=this.$parent&&this.$parent.find("> .panel > .in");
if(d&&d.length){var g=d.data("bs.collapse");
if(g&&g.transitioning){return
}d.collapse("hide");
g||d.data("bs.collapse",null)
}var f=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[f](0);
this.transitioning=1;
var e=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f]("auto");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!a.support.transition){return e.call(this)
}var h=a.camelCase(["scroll",f].join("-"));
this.$element.one(a.support.transition.end,a.proxy(e,this)).emulateTransitionEnd(350)[f](this.$element[0][h])
};
b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var f=a.Event("hide.bs.collapse");
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}var e=this.dimension();
this.$element[e](this.$element[e]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
this.transitioning=1;
var d=function(){this.transitioning=0;
this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};
if(!a.support.transition){return d.call(this)
}this.$element[e](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)
};
b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
var c=a.fn.collapse;
a.fn.collapse=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.collapse");
var g=a.extend({},b.DEFAULTS,e.data(),typeof d=="object"&&d);
if(!f&&g.toggle&&d=="show"){d=!d
}if(!f){e.data("bs.collapse",(f=new b(this,g)))
}if(typeof d=="string"){f[d]()
}})
};
a.fn.collapse.Constructor=b;
a.fn.collapse.noConflict=function(){a.fn.collapse=c;
return this
};
a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(h){var f=a(this),i;
var l=f.attr("data-target")||h.preventDefault()||(i=f.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");
var e=a(l);
var g=e.data("bs.collapse");
var j=g?"toggle":f.data();
var k=f.attr("data-parent");
var d=k&&a(k);
if(!g||!g.transitioning){if(d){d.find('[data-toggle=collapse][data-parent="'+k+'"]').not(f).addClass("collapsed")
}f[e.hasClass("in")?"addClass":"removeClass"]("collapsed")
}e.collapse(j)
})
}(jQuery);
+function(a){var b=".dropdown-backdrop";
var g="[data-toggle=dropdown]";
var d=function(h){a(h).on("click.bs.dropdown",this.toggle)
};
d.prototype.toggle=function(j){var i=a(this);
if(i.is(".disabled, :disabled")){return
}var h=e(i);
var k=h.hasClass("open");
c();
if(!k){if("ontouchstart" in document.documentElement&&!h.closest(".navbar-nav").length){a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",c)
}var l={relatedTarget:this};
h.trigger(j=a.Event("show.bs.dropdown",l));
if(j.isDefaultPrevented()){return
}h.toggleClass("open").trigger("shown.bs.dropdown",l);
i.focus()
}return false
};
d.prototype.keydown=function(l){if(!/(38|40|27)/.test(l.keyCode)){return
}var j=a(this);
l.preventDefault();
l.stopPropagation();
if(j.is(".disabled, :disabled")){return
}var i=e(j);
var n=i.hasClass("open");
if(!n||(n&&l.keyCode==27)){if(l.which==27){i.find(g).focus()
}return j.click()
}var k=" li:not(.divider):visible a";
var h=i.find("[role=menu]"+k+", [role=listbox]"+k);
if(!h.length){return
}var m=h.index(h.filter(":focus"));
if(l.keyCode==38&&m>0){m--
}if(l.keyCode==40&&m<h.length-1){m++
}if(!~m){m=0
}h.eq(m).focus()
};
function c(h){a(b).remove();
a(g).each(function(){var i=e(a(this));
var j={relatedTarget:this};
if(!i.hasClass("open")){return
}i.trigger(h=a.Event("hide.bs.dropdown",j));
if(h.isDefaultPrevented()){return
}i.removeClass("open").trigger("hidden.bs.dropdown",j)
})
}function e(i){var j=i.attr("data-target");
if(!j){j=i.attr("href");
j=j&&/#[A-Za-z]/.test(j)&&j.replace(/.*(?=#[^\s]*$)/,"")
}var h=j&&a(j);
return h&&h.length?h:i.parent()
}var f=a.fn.dropdown;
a.fn.dropdown=function(h){return this.each(function(){var i=a(this);
var j=i.data("bs.dropdown");
if(!j){i.data("bs.dropdown",(j=new d(this)))
}if(typeof h=="string"){j[h].call(i)
}})
};
a.fn.dropdown.Constructor=d;
a.fn.dropdown.noConflict=function(){a.fn.dropdown=f;
return this
};
a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(h){h.stopPropagation()
}).on("click.bs.dropdown.data-api",g,d.prototype.toggle).on("keydown.bs.dropdown.data-api",g+", [role=menu], [role=listbox]",d.prototype.keydown)
}(jQuery);
+function(a){var b=function(d,e){this.options=e;
this.$element=a(d);
this.$backdrop=this.isShown=null;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(d){return this[!this.isShown?"show":"hide"](d)
};
b.prototype.show=function(d){var f=this;
var e=a.Event("show.bs.modal",{relatedTarget:d});
this.$element.trigger(e);
if(this.isShown||e.isDefaultPrevented()){return
}this.isShown=true;
this.escape();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this));
this.backdrop(function(){var i=a.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(document.body)
}f.$element.show().scrollTop(0);
if(i){f.$element[0].offsetWidth
}f.$element.addClass("in").attr("aria-hidden",false);
f.enforceFocus();
var h=a.Event("shown.bs.modal",{relatedTarget:d});
i?f.$element.find(".modal-dialog").one(a.support.transition.end,function(){f.$element.focus().trigger(h)
}).emulateTransitionEnd(300):f.$element.focus().trigger(h)
})
};
b.prototype.hide=function(d){if(d){d.preventDefault()
}d=a.Event("hide.bs.modal");
this.$element.trigger(d);
if(!this.isShown||d.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
a(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");
a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()
};
b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(d){if(this.$element[0]!==d.target&&!this.$element.has(d.target).length){this.$element.focus()
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(d){d.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")
}}};
b.prototype.hideModal=function(){var d=this;
this.$element.hide();
this.backdrop(function(){d.removeBackdrop();
d.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(e){var d=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var f=a.support.transition&&d;
this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body);
this.$element.on("click.dismiss.bs.modal",a.proxy(function(g){if(g.target!==g.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(f){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!e){return
}f?this.$backdrop.one(a.support.transition.end,e).emulateTransitionEnd(150):e()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,e).emulateTransitionEnd(150):e()
}else{if(e){e()
}}}};
var c=a.fn.modal;
a.fn.modal=function(e,d){return this.each(function(){var f=a(this);
var g=f.data("bs.modal");
var h=a.extend({},b.DEFAULTS,f.data(),typeof e=="object"&&e);
if(!g){f.data("bs.modal",(g=new b(this,h)))
}if(typeof e=="string"){g[e](d)
}else{if(h.show){g.show(d)
}}})
};
a.fn.modal.Constructor=b;
a.fn.modal.noConflict=function(){a.fn.modal=c;
return this
};
a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(f){var e=a(this);
var g=e.attr("href");
var d=a(e.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=d.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(g)&&g},d.data(),e.data());
if(e.is("a")){f.preventDefault()
}d.modal(h,this).one("hide",function(){e.is(":visible")&&e.focus()
})
});
a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")
}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")
})
}(jQuery);
+function(a){var c=function(d,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",d,e)
};
c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};
c.prototype.init=function(l,d,h){this.enabled=true;
this.type=l;
this.$element=a(d);
this.options=this.getOptions(h);
var k=this.options.trigger.split(" ");
for(var g=k.length;
g--;
){var j=k[g];
if(j=="click"){this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this))
}else{if(j!="manual"){var e=j=="hover"?"mouseenter":"focusin";
var f=j=="hover"?"mouseleave":"focusout";
this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this));
this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this))
}}}this.options.selector?(this._options=a.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.getOptions=function(d){d=a.extend({},this.getDefaults(),this.$element.data(),d);
if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}
}return d
};
c.prototype.getDelegateOptions=function(){var e={};
var d=this.getDefaults();
this._options&&a.each(this._options,function(f,g){if(d[f]!=g){e[f]=g
}});
return e
};
c.prototype.enter=function(d){var e=d instanceof this.constructor?d:a(d.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(e.timeout);
e.hoverState="in";
if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()
}},e.options.delay.show)
};
c.prototype.leave=function(d){var e=d instanceof this.constructor?d:a(d.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(e.timeout);
e.hoverState="out";
if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()
}},e.options.delay.hide)
};
c.prototype.show=function(){var k=a.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(k);
if(k.isDefaultPrevented()){return
}var s=this;
var r=this.tip();
this.setContent();
if(this.options.animation){r.addClass("fade")
}var p=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement;
var g=/\s?auto?\s?/i;
var e=g.test(p);
if(e){p=p.replace(g,"")||"top"
}r.detach().css({top:0,left:0,display:"block"}).addClass(p);
this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);
var q=this.getPosition();
var t=r[0].offsetWidth;
var l=r[0].offsetHeight;
if(e){var d=this.$element.parent();
var m=p;
var j=document.documentElement.scrollTop||document.body.scrollTop;
var o=this.options.container=="body"?window.innerWidth:d.outerWidth();
var n=this.options.container=="body"?window.innerHeight:d.outerHeight();
var f=this.options.container=="body"?0:d.offset().left;
p=p=="bottom"&&q.top+q.height+l-j>n?"top":p=="top"&&q.top-j-l<0?"bottom":p=="right"&&q.right+t>o?"left":p=="left"&&q.left-t<f?"right":p;
r.removeClass(m).addClass(p)
}var h=this.getCalculatedOffset(p,q,t,l);
this.applyPlacement(h,p);
this.hoverState=null;
var i=function(){s.$element.trigger("shown.bs."+s.type)
};
a.support.transition&&this.$tip.hasClass("fade")?r.one(a.support.transition.end,i).emulateTransitionEnd(150):i()
}};
c.prototype.applyPlacement=function(k,l){var m;
var d=this.tip();
var n=d[0].offsetWidth;
var h=d[0].offsetHeight;
var j=parseInt(d.css("margin-top"),10);
var i=parseInt(d.css("margin-left"),10);
if(isNaN(j)){j=0
}if(isNaN(i)){i=0
}k.top=k.top+j;
k.left=k.left+i;
a.offset.setOffset(d[0],a.extend({using:function(o){d.css({top:Math.round(o.top),left:Math.round(o.left)})
}},k),0);
d.addClass("in");
var f=d[0].offsetWidth;
var e=d[0].offsetHeight;
if(l=="top"&&e!=h){m=true;
k.top=k.top+h-e
}if(/bottom|top/.test(l)){var g=0;
if(k.left<0){g=k.left*-2;
k.left=0;
d.offset(k);
f=d[0].offsetWidth;
e=d[0].offsetHeight
}this.replaceArrow(g-n+f,f,"left")
}else{this.replaceArrow(e-h,e,"top")
}if(m){d.offset(k)
}};
c.prototype.replaceArrow=function(d,e,f){this.arrow().css(f,d?(50*(1-d/e)+"%"):"")
};
c.prototype.setContent=function(){var d=this.tip();
var e=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](e);
d.removeClass("fade in top bottom left right")
};
c.prototype.hide=function(){var g=this;
var d=this.tip();
var f=a.Event("hide.bs."+this.type);
function e(){if(g.hoverState!="in"){d.detach()
}g.$element.trigger("hidden.bs."+g.type)
}this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}d.removeClass("in");
a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,e).emulateTransitionEnd(150):e();
this.hoverState=null;
return this
};
c.prototype.fixTitle=function(){var d=this.$element;
if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")
}};
c.prototype.hasContent=function(){return this.getTitle()
};
c.prototype.getPosition=function(){var d=this.$element[0];
return a.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())
};
c.prototype.getCalculatedOffset=function(f,g,e,d){return f=="bottom"?{top:g.top+g.height,left:g.left+g.width/2-e/2}:f=="top"?{top:g.top-d,left:g.left+g.width/2-e/2}:f=="left"?{top:g.top+g.height/2-d/2,left:g.left-e}:{top:g.top+g.height/2-d/2,left:g.left+g.width}
};
c.prototype.getTitle=function(){var f;
var d=this.$element;
var e=this.options;
f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);
return f
};
c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)
};
c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
};
c.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();
this.$element=null;
this.options=null
}};
c.prototype.enable=function(){this.enabled=true
};
c.prototype.disable=function(){this.enabled=false
};
c.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
c.prototype.toggle=function(d){var e=d?a(d.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
e.tip().hasClass("in")?e.leave(e):e.enter(e)
};
c.prototype.destroy=function(){clearTimeout(this.timeout);
this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};
var b=a.fn.tooltip;
a.fn.tooltip=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.tooltip");
var g=typeof d=="object"&&d;
if(!f&&d=="destroy"){return
}if(!f){e.data("bs.tooltip",(f=new c(this,g)))
}if(typeof d=="string"){f[d]()
}})
};
a.fn.tooltip.Constructor=c;
a.fn.tooltip.noConflict=function(){a.fn.tooltip=b;
return this
}
}(jQuery);
+function(a){var c=function(d,e){this.init("popover",d,e)
};
if(!a.fn.tooltip){throw new Error("Popover requires tooltip.js")
}c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype);
c.prototype.constructor=c;
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.setContent=function(){var d=this.tip();
var f=this.getTitle();
var e=this.getContent();
d.find(".popover-title")[this.options.html?"html":"text"](f);
d.find(".popover-content")[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);
d.removeClass("fade top bottom left right in");
if(!d.find(".popover-title").html()){d.find(".popover-title").hide()
}};
c.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
c.prototype.getContent=function(){var d=this.$element;
var e=this.options;
return d.attr("data-content")||(typeof e.content=="function"?e.content.call(d[0]):e.content)
};
c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
c.prototype.tip=function(){if(!this.$tip){this.$tip=a(this.options.template)
}return this.$tip
};
var b=a.fn.popover;
a.fn.popover=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.popover");
var g=typeof d=="object"&&d;
if(!f&&d=="destroy"){return
}if(!f){e.data("bs.popover",(f=new c(this,g)))
}if(typeof d=="string"){f[d]()
}})
};
a.fn.popover.Constructor=c;
a.fn.popover.noConflict=function(){a.fn.popover=b;
return this
}
}(jQuery);
+function(a){function c(d,f){var e;
var g=a.proxy(this.process,this);
this.$element=a(d).is("body")?a(window):a(d);
this.$body=a("body");
this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",g);
this.options=a.extend({},c.DEFAULTS,f);
this.selector=(this.options.target||((e=a(d).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";
this.offsets=a([]);
this.targets=a([]);
this.activeTarget=null;
this.refresh();
this.process()
}c.DEFAULTS={offset:10};
c.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";
this.offsets=a([]);
this.targets=a([]);
var f=this;
var d=this.$body.find(this.selector).map(function(){var g=a(this);
var i=g.data("target")||g.attr("href");
var h=/^#./.test(i)&&a(i);
return(h&&h.length&&h.is(":visible")&&[[h[e]().top+(!a.isWindow(f.$scrollElement.get(0))&&f.$scrollElement.scrollTop()),i]])||null
}).sort(function(g,h){return g[0]-h[0]
}).each(function(){f.offsets.push(this[0]);
f.targets.push(this[1])
})
};
c.prototype.process=function(){var j=this.$scrollElement.scrollTop()+this.options.offset;
var h=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight;
var f=h-this.$scrollElement.height();
var g=this.offsets;
var k=this.targets;
var d=this.activeTarget;
var e;
if(j>=f){return d!=(e=k.last()[0])&&this.activate(e)
}if(d&&j<=g[0]){return d!=(e=k[0])&&this.activate(e)
}for(e=g.length;
e--;
){d!=k[e]&&j>=g[e]&&(!g[e+1]||j<=g[e+1])&&this.activate(k[e])
}};
c.prototype.activate=function(f){this.activeTarget=f;
a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");
var e=this.selector+'[data-target="'+f+'"],'+this.selector+'[href="'+f+'"]';
var d=a(e).parents("li").addClass("active");
if(d.parent(".dropdown-menu").length){d=d.closest("li.dropdown").addClass("active")
}d.trigger("activate.bs.scrollspy")
};
var b=a.fn.scrollspy;
a.fn.scrollspy=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.scrollspy");
var g=typeof d=="object"&&d;
if(!f){e.data("bs.scrollspy",(f=new c(this,g)))
}if(typeof d=="string"){f[d]()
}})
};
a.fn.scrollspy.Constructor=c;
a.fn.scrollspy.noConflict=function(){a.fn.scrollspy=b;
return this
};
a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var d=a(this);
d.scrollspy(d.data())
})
})
}(jQuery);
+function(a){var c=function(d){this.element=a(d)
};
c.prototype.show=function(){var e=this.element;
var f=e.closest("ul:not(.dropdown-menu)");
var i=e.data("target");
if(!i){i=e.attr("href");
i=i&&i.replace(/.*(?=#[^\s]*$)/,"")
}if(e.parent("li").hasClass("active")){return
}var h=f.find(".active:last a")[0];
var g=a.Event("show.bs.tab",{relatedTarget:h});
e.trigger(g);
if(g.isDefaultPrevented()){return
}var d=a(i);
this.activate(e.parent("li"),f);
this.activate(d,d.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:h})
})
};
c.prototype.activate=function(g,f,e){var d=f.find("> .active");
var i=e&&a.support.transition&&d.hasClass("fade");
function h(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
g.addClass("active");
if(i){g[0].offsetWidth;
g.addClass("in")
}else{g.removeClass("fade")
}if(g.parent(".dropdown-menu")){g.closest("li.dropdown").addClass("active")
}e&&e()
}i?d.one(a.support.transition.end,h).emulateTransitionEnd(150):h();
d.removeClass("in")
};
var b=a.fn.tab;
a.fn.tab=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.tab");
if(!f){e.data("bs.tab",(f=new c(this)))
}if(typeof d=="string"){f[d]()
}})
};
a.fn.tab.Constructor=c;
a.fn.tab.noConflict=function(){a.fn.tab=b;
return this
};
a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();
a(this).tab("show")
})
}(jQuery);
+function(a){var b=function(d,e){this.options=a.extend({},b.DEFAULTS,e);
this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this));
this.$element=a(d);
this.affixed=this.unpin=this.pinnedOffset=null;
this.checkPosition()
};
b.RESET="affix affix-top affix-bottom";
b.DEFAULTS={offset:0};
b.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(b.RESET).addClass("affix");
var e=this.$window.scrollTop();
var d=this.$element.offset();
return(this.pinnedOffset=d.top-e)
};
b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)
};
b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var k=a(document).height();
var l=this.$window.scrollTop();
var j=this.$element.offset();
var g=this.options.offset;
var i=g.top;
var h=g.bottom;
if(this.affixed=="top"){j.top+=l
}if(typeof g!="object"){h=i=g
}if(typeof i=="function"){i=g.top(this.$element)
}if(typeof h=="function"){h=g.bottom(this.$element)
}var d=this.unpin!=null&&(l+this.unpin<=j.top)?false:h!=null&&(j.top+this.$element.height()>=k-h)?"bottom":i!=null&&(l<=i)?"top":false;
if(this.affixed===d){return
}if(this.unpin){this.$element.css("top","")
}var e="affix"+(d?"-"+d:"");
var f=a.Event(e+".bs.affix");
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}this.affixed=d;
this.unpin=d=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(b.RESET).addClass(e).trigger(a.Event(e.replace("affix","affixed")));
if(d=="bottom"){this.$element.offset({top:k-h-this.$element.height()})
}};
var c=a.fn.affix;
a.fn.affix=function(d){return this.each(function(){var e=a(this);
var f=e.data("bs.affix");
var g=typeof d=="object"&&d;
if(!f){e.data("bs.affix",(f=new b(this,g)))
}if(typeof d=="string"){f[d]()
}})
};
a.fn.affix.Constructor=b;
a.fn.affix.noConflict=function(){a.fn.affix=c;
return this
};
a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var d=a(this);
var e=d.data();
e.offset=e.offset||{};
if(e.offsetBottom){e.offset.bottom=e.offsetBottom
}if(e.offsetTop){e.offset.top=e.offsetTop
}d.affix(e)
})
})
}(jQuery);