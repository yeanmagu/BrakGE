!function(a){function b(c){Gumby.debug("Initializing Fixed Position",c);
this.$el=c;
this.$window=a(window);
this.fixedPoint="";
this.pinPoint=false;
this.fixedPointjQ=false;
this.pinPointjQ=false;
this.offset=0;
this.pinOffset=0;
this.top=0;
this.constrainEl=true;
this.state=false;
this.measurements={left:0,width:0};
this.setup();
var d=this;
this.$window.on("scroll load",function(){d.monitorScroll()
});
this.$el.on("gumby.initialize",function(){Gumby.debug("Re-initializing Fixed Position",c);
d.setup();
d.monitorScroll()
})
}b.prototype.setup=function(){var c=this;
this.fixedPoint=this.parseAttrValue(Gumby.selectAttr.apply(this.$el,["fixed"]));
this.pinPoint=Gumby.selectAttr.apply(this.$el,["pin"])||false;
this.offset=Number(Gumby.selectAttr.apply(this.$el,["offset"]))||0;
this.pinOffset=Number(Gumby.selectAttr.apply(this.$el,["pinoffset"]))||0;
this.top=Number(Gumby.selectAttr.apply(this.$el,["top"]))||0;
this.constrainEl=Gumby.selectAttr.apply(this.$el,["constrain"])||true;
if(this.constrainEl==="false"){this.constrainEl=false
}this.$parent=this.$el.parents(".columns, .column, .row");
this.$parent=this.$parent.length?this.$parent.first():false;
this.parentRow=this.$parent?!!this.$parent.hasClass("row"):false;
if(this.pinPoint){this.pinPoint=this.parseAttrValue(this.pinPoint)
}this.fixedPointjQ=this.fixedPoint instanceof jQuery;
this.pinPointjQ=this.pinPoint instanceof jQuery;
if(this.$parent&&this.constrainEl){this.measure();
this.$window.resize(function(){if(c.state){c.measure();
c.constrain()
}})
}};
b.prototype.monitorScroll=function(){var e=this.$window.scrollTop(),c=this.fixedPointjQ?this.fixedPoint.offset().top:this.fixedPoint,d=false,f;
if(this.pinPoint){d=this.pinPointjQ?this.pinPoint.offset().top:this.pinPoint
}if(this.offset){c-=this.offset
}if(this.pinOffset){d-=this.pinOffset
}if((e>=c)&&this.state!=="fixed"){if(!d||e<d){this.fix()
}}else{if(e<c&&this.state==="fixed"){this.unfix()
}else{if(d&&e>=d&&this.state!=="pinned"){this.pin()
}}}};
b.prototype.fix=function(){Gumby.debug("Element has been fixed",this.$el);
Gumby.debug("Triggering onFixed event",this.$el);
this.state="fixed";
this.$el.css({top:this.top}).addClass("fixed").removeClass("unfixed pinned").trigger("gumby.onFixed");
if(this.$parent){this.constrain()
}};
b.prototype.unfix=function(){Gumby.debug("Element has been unfixed",this.$el);
Gumby.debug("Triggering onUnfixed event",this.$el);
this.state="unfixed";
this.$el.addClass("unfixed").removeClass("fixed pinned").trigger("gumby.onUnfixed")
};
b.prototype.pin=function(){Gumby.debug("Element has been pinned",this.$el);
Gumby.debug("Triggering onPinned event",this.$el);
this.state="pinned";
this.$el.css({top:this.$el.offset().top}).addClass("pinned fixed").removeClass("unfixed").trigger("gumby.onPinned")
};
b.prototype.constrain=function(){Gumby.debug("Constraining element",this.$el);
this.$el.css({left:this.measurements.left,width:this.measurements.width})
};
b.prototype.measure=function(){var c;
this.measurements.left=this.$parent.offset().left;
this.measurements.width=this.$parent.width();
if(this.parentRow){c=Number(this.$parent.css("paddingLeft").replace(/px/,""));
if(c){this.measurements.left+=c
}}};
b.prototype.parseAttrValue=function(d){if(a.isNumeric(d)){return Number(d)
}else{if(d==="top"){return this.$el.offset().top
}else{var c=a(d);
if(!c.length){Gumby.error("Cannot find Fixed target: "+d);
return false
}return c
}}};
Gumby.addInitalisation("fixed",function(c){a("[data-fixed],[gumby-fixed],[fixed]").each(function(){var d=a(this);
if(d.data("isFixed")&&!c){return true
}else{if(d.data("isFixed")&&c){d.trigger("gumby.initialize");
return true
}}d.data("isFixed",true);
new b(d)
})
});
Gumby.UIModule({module:"fixed",events:["initialize","onFixed","onUnfixed"],init:function(){Gumby.initialize("fixed")
}})
}(jQuery);