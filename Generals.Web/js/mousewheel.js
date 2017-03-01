(function(a){function d(e){var f=e||window.event,g=[].slice.call(arguments,1),h=0,l=!0,m=0,n=0;
return e=a.event.fix(f),e.type="mousewheel",f.wheelDelta&&(h=f.wheelDelta/120),f.detail&&(h=-f.detail/3),n=h,f.axis!==undefined&&f.axis===f.HORIZONTAL_AXIS&&(n=0,m=-1*h),f.wheelDeltaY!==undefined&&(n=f.wheelDeltaY/120),f.wheelDeltaX!==undefined&&(m=-1*f.wheelDeltaX/120),g.unshift(e,h,m,n),(a.event.dispatch||a.event.handle).apply(this,g)
}var b=["DOMMouseScroll","mousewheel"];
if(a.event.fixHooks){for(var c=b.length;
c;
){a.event.fixHooks[b[--c]]=a.event.mouseHooks
}}a.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=b.length;
e;
){this.addEventListener(b[--e],d,!1)
}}else{this.onmousewheel=d
}},teardown:function(){if(this.removeEventListener){for(var e=b.length;
e;
){this.removeEventListener(b[--e],d,!1)
}}else{this.onmousewheel=null
}}},a.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")
},unmousewheel:function(e){return this.unbind("mousewheel",e)
}})
})(jQuery);