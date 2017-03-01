!function(a){function c(d){this.$el=a(d);
this.targets=[];
this.on="";
this.className="";
this.self=false;
if(this.$el.length){Gumby.debug("Initializing Toggle",d);
this.init()
}}function b(d){this.$el=a(d);
this.targets=[];
this.on="";
this.className="";
this.self=false;
if(this.$el.length){Gumby.debug("Initializing Switch",d);
this.init()
}}c.prototype.init=function(){var d=this;
this.setup();
this.$el.on(this.on,function(e){e.preventDefault();
d.trigger(d.triggered)
}).on("gumby.trigger",function(){Gumby.debug("Trigger event triggered",d.$el);
d.trigger(d.triggered)
}).on("gumby.initialize",function(){Gumby.debug("Re-initializing "+d.constructor,$el);
d.setup()
})
};
c.prototype.setup=function(){this.targets=this.parseTargets();
this.on=Gumby.selectAttr.apply(this.$el,["on"])||Gumby.click;
this.className=Gumby.selectAttr.apply(this.$el,["classname"])||"active";
this.self=Gumby.selectAttr.apply(this.$el,["self"])==="false"
};
c.prototype.parseTargets=function(){var f=Gumby.selectAttr.apply(this.$el,["trigger"]),d=0,e=[];
if(!f){return false
}d=f.indexOf("|");
if(d===-1){if(!this.checkTargets([f])){return false
}return[a(f)]
}e=f.split("|");
if(!this.checkTargets(e)){return false
}return e.length>1?[a(e[0]),a(e[1])]:[a(e[0])]
};
c.prototype.checkTargets=function(e){var d=0;
for(d;
d<e.length;
d++){if(e[d]&&!a(e[d]).length){Gumby.error("Cannot find "+this.constructor.name+" target: "+e[d]);
return false
}}return true
};
c.prototype.triggered=function(){Gumby.debug("Triggering onTrigger event",this.$el);
this.$el.trigger("gumby.onTrigger",[this.$el.hasClass(this.className)])
};
b.prototype=new c();
b.prototype.constructor=b;
c.prototype.trigger=function(e){Gumby.debug("Triggering Toggle",this.$el);
var d;
if(!this.targets){this.$el.toggleClass(this.className)
}else{if(this.targets.length==1){this.$el.add(this.targets[0]).toggleClass(this.className)
}else{if(this.targets.length>1){if(this.targets[0].hasClass(this.className)){d=this.targets[0];
if(!this.self){d=d.add(this.$el)
}d.removeClass(this.className);
this.targets[1].addClass(this.className)
}else{d=this.targets[0];
if(!this.self){d=d.add(this.$el)
}d.addClass(this.className);
this.targets[1].removeClass(this.className)
}}}}if(e&&typeof e==="function"){e.apply(this)
}};
b.prototype.trigger=function(e){Gumby.debug("Triggering Switch",this.$el);
var d;
if(!this.targets){this.$el.addClass(this.className)
}else{if(this.targets.length==1){d=this.targets[0];
if(!this.self){d=d.add(this.$el)
}d.addClass(this.className)
}else{if(this.targets.length>1){d=this.targets[0];
if(!this.self){d=d.add(this.$el)
}d.addClass(this.className);
this.targets[1].removeClass(this.className)
}}}if(e&&typeof e==="function"){e.apply(this)
}};
Gumby.addInitalisation("toggles",function(d){a(".toggle").each(function(){var e=a(this);
if(e.data("isToggle")&&!d){return true
}else{if(e.data("isToggle")&&d){e.trigger("gumby.initialize")
}}e.data("isToggle",true);
new c(e)
})
});
Gumby.addInitalisation("switches",function(d){a(".switch").each(function(){var e=a(this);
if(e.data("isSwitch")&&!d){return true
}else{if(e.data("isSwitch")&&d){e.trigger("gumby.initialize");
return true
}}e.data("isSwitch",true);
new b(e)
})
});
Gumby.UIModule({module:"toggleswitch",events:["initialize","trigger","onTrigger"],init:function(){Gumby.initialize("switches");
Gumby.initialize("toggles")
}})
}(jQuery);