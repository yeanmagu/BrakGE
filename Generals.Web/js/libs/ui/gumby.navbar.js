!function(a){if(!Gumby.gumbyTouch){return
}function b(c){Gumby.debug("Initializing Navbar",c);
this.$el=c;
this.$dropDowns=this.$el.find("li:has(.dropdown)");
var e=this;
var d=this.$el.attr("gumby-persist");
if(typeof d==="undefined"&&d!=="false"){this.$el.find("li:not(:has(.dropdown)) a").on(Gumby.click,function(){e.$el.find("ul").removeClass("active")
})
}this.$dropDowns.on(Gumby.click,this.toggleDropdown).on("swiperight",this.openLink);
if(this.$dropDowns.children("a").attr("href")!=="#"){this.$dropDowns.children("a").append('<i class="icon-popup"></i>').children("i").on(Gumby.click,this.openLink)
}this.$el.find("li:not(:has(.dropdown)) a[href]").on(Gumby.click,this.openLink)
}b.prototype.toggleDropdown=function(d){d.preventDefault();
if(a(this).parents(".dropdown")){d.stopImmediatePropagation()
}if(a(d.target).is("i")){return
}var c=a(this);
if(c.hasClass("active")){c.removeClass("active")
}else{c.addClass("active")
}};
b.prototype.openLink=function(f){f.preventDefault();
var d=a(this),c=d,g;
if(d.is("i")){c=d.parent("a")
}else{if(d.is("li")){c=d.children("a")
}}g=c.attr("href");
if(c.attr("target")=="blank"){window.open(g)
}else{window.location=g
}};
Gumby.addInitalisation("navbar",function(){a(".navbar").each(function(){var c=a(this);
if(c.data("isNavbar")){return true
}c.data("isNavbar",true);
new b(c)
})
});
Gumby.UIModule({module:"navbar",events:[],init:function(){Gumby.initialize("navbar")
}})
}(jQuery);