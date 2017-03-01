!function(a){function b(c){Gumby.debug("Initializing Retina",c);
this.$el=c;
this.imageSrc=this.$el.attr("src");
this.retinaSrc=this.fetchRetinaImage();
this.$retinaImg=a(new Image());
var d=this;
if(!this.retinaSrc){return false
}this.$retinaImg.attr("src",this.retinaSrc).load(function(){d.retinaImageLoaded()
}).error(function(){Gumby.error("Couln't load retina image: "+d.retinaSrc)
})
}b.prototype.fetchRetinaImage=function(){var c=this.imageSrc,d=this.imageSrc.search(/(\.|\/)(gif|jpe?g|png)$/i);
if(d<0){return false
}return c.substr(0,d)+"@2x"+c.substr(d,c.length)
};
b.prototype.retinaImageLoaded=function(){Gumby.debug("Swapping image for retina version",this.$el);
Gumby.debug("Triggering onRetina event",this.$el);
this.$el.attr("src",this.$retinaImg.attr("src")).trigger("gumby.onRetina")
};
Gumby.addInitalisation("retina",function(){if(!window.devicePixelRatio||window.devicePixelRatio<=1){return
}a("img[data-retina],img[gumby-retina],img[retina]").each(function(){var c=a(this);
if(c.data("isRetina")){return true
}c.data("isRetina",true);
new b(c)
})
});
Gumby.UIModule({module:"retina",events:["onRetina"],init:function(){Gumby.initialize("retina")
}})
}(jQuery);