!function(a){function b(){this.$dom=a(document);
this.$html=this.$dom.find("html");
this.isOldie=!!this.$html.hasClass("oldie");
this.click="click";
this.onReady=this.onOldie=this.onTouch=false;
this.autoInit=a("script[gumby-init]").attr("gumby-init")==="false"?false:true;
this.debugMode=Boolean(a("script[gumby-debug]").length);

this.gumbyTouch=false;
this.touchEvents="js/libs";
this.breakpoint=Number(a("script[gumby-breakpoint]").attr("gumby-breakpoint"))||768;
this.touchEventsLoaded=false;
this.uiModulesReady=false;
this.uiModules={};
this.inits={};
var d=a("script[gumby-touch]").attr("gumby-touch"),c=a("script[gumby-path]").attr("gumby-path");
if(d==="false"){this.touchEvents=false
}else{if(d){this.touchEvents=d
}else{if(c){this.touchEvents=c
}}}if(this.touchDevice){this.click+=" tap"
}if(this.touchDevice&&a(window).width()<this.breakpoint){this.$html.addClass("gumby-touch");
this.gumbyTouch=true
}else{this.$html.addClass("gumby-no-touch")
}if(this.debugMode){this.debug("Gumby is in debug mode")
}}b.prototype.init=function(c){var e=this,d=c?c:{};
this.$dom.ready(function(){if(d.debug){e.debugMode=true
}e.debug("Initializing Gumby");
var f=d.uiModules?d.uiModules:false;
e.initUIModules(f);
if(e.onReady){e.onReady()
}if(e.isOldie&&e.onOldie){e.onOldie()
}if(Modernizr.touch&&e.onTouch){e.onTouch()
}});
return this
};
b.prototype.helpers=function(){if(this.onReady){this.onReady()
}if(this.isOldie&&this.onOldie){this.onOldie()
}if(Modernizr.touch&&this.onTouch){this.onTouch()
}};
b.prototype.ready=function(c){if(c&&typeof c==="function"){this.onReady=c
}return this
};
b.prototype.oldie=function(c){if(c&&typeof c==="function"){this.onOldie=c
}return this
};
b.prototype.touch=function(c){if(c&&typeof c==="function"){this.onTouch=c
}return this
};
b.prototype.console=function(d,c){if(!this.debugMode||!window.console){return
}console[console[d]?d:"log"](c.length>1?Array.prototype.slice.call(c):c[0])
};
b.prototype.log=function(){this.console("log",arguments)
};
b.prototype.debug=function(){this.console("debug",arguments)
};
b.prototype.warn=function(){this.console("warn",arguments)
};
b.prototype.error=function(){this.console("error",arguments)
};
b.prototype.dump=function(){return{$dom:this.$dom,isOldie:this.isOldie,touchEvents:this.touchEvents,debugMode:this.debugMode,autoInit:this.autoInit,uiModules:this.uiModules,click:this.click}
};
b.prototype.selectAttr=function(){var f=0;
for(;
f<arguments.length;
f++){var c=arguments[f],d="data-"+arguments[f],e="gumby-"+arguments[f];
if(this.is("["+d+"]")){return this.attr(d)?this.attr(d):true
}else{if(this.is("["+e+"]")){return this.attr(e)?this.attr(e):true
}else{if(this.is("["+c+"]")){return this.attr(c)?this.attr(c):true
}}}}return false
};
b.prototype.addInitalisation=function(d,c){this.inits[d]=c
};
b.prototype.initialize=function(e,c){if(typeof e==="object"){var d=0;
for(d;
d<e.length;
d++){if(!this.inits[e[d]]||typeof this.inits[e[d]]!=="function"){this.error("Error initializing module: "+e[d]);
continue
}this.inits[e[d]](c)
}}else{if(this.inits[e]&&typeof this.inits[e]==="function"){this.inits[e](c)
}else{this.error("Error initializing module: "+e)
}}return this
};
b.prototype.UIModule=function(c){var d=c.module;
this.uiModules[d]=c
};
b.prototype.initUIModules=function(e){var f,d,c=this.uiModules;
if(e){c=e
}for(f in c){d=e?c[f]:f;
this.uiModules[d].init()
}};
window.Gumby=new b()
}(jQuery);