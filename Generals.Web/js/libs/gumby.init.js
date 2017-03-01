!function(a){if((!Gumby.touchDevice||!Gumby.touchEvents)&&Gumby.autoInit){window.Gumby.init()
}else{if(Gumby.touchEvents&&Gumby.touchDevice){Gumby.debug("Loading jQuery mobile touch events");
yepnope.errorTimeout=2000;
Modernizr.load({test:Modernizr.touch,yep:Gumby.touchEvents+"/jquery.mobile.custom.min.js",complete:function(){if(!a.mobile){Gumby.error("Error loading jQuery mobile touch events")
}Gumby.touchEventsLoaded=true;
if(Gumby.autoInit){window.Gumby.init()
}else{if(Gumby.uiModulesReady){Gumby.helpers()
}}}})
}}if(typeof define=="function"&&define.amd){define(window.Gumby)
}}(jQuery);