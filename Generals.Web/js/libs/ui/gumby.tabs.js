!function(a){function b(c){Gumby.debug("Initializing Tabs",c);
this.$el=c;
this.$nav=this.$el.find("> ul.tab-nav > li");
this.$content=this.$el.children(".tab-content");
var d=this;
this.$nav.children("a").on(Gumby.click,function(f){f.preventDefault();
d.click(a(this))
});
this.$el.on("gumby.set",function(f,g){Gumby.debug("Set event triggered",d.$el);
d.set(f,g)
})
}b.prototype.click=function(c){var d=c.parent().index();
if(this.$nav.eq(d).add(this.$content.eq(d)).hasClass("active")){return
}Gumby.debug("Setting active tab to "+d,this.$el);
this.$nav.add(this.$content).removeClass("active");
this.$nav.eq(d).add(this.$content.eq(d)).addClass("active");
Gumby.debug("Triggering onChange event",this.$el);
this.$el.trigger("gumby.onChange",d)
};
b.prototype.set=function(c,d){this.$nav.eq(d).find("a").trigger(Gumby.click)
};
Gumby.addInitalisation("tabs",function(){a(".tabs").each(function(){var c=a(this);
if(c.data("isTabs")){return true
}c.data("isTabs",true);
new b(c)
})
});
Gumby.UIModule({module:"tabs",events:["onChange","set"],init:function(){Gumby.initialize("tabs")
}})
}(jQuery);