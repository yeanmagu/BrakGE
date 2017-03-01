!function(a){function b(c,d){if(Gumby){Gumby.debug("Initializing Validation",c)
}this.$this=c;
this.$field=this.$this.parents(".field");
this.req=d||function(){return !!this.$this.val().length
};
var e=this;
if(this.$this.is("[type=checkbox], [type=radio]")){this.$field=this.$this.parent("label");
this.$field.on("gumby.onChange",function(){e.validate()
})
}else{if(this.$this.is("select")){this.$field=this.$this.parents(".picker");
this.$field.on("change",function(){e.validate()
})
}else{this.$this.on("blur",function(f){if(f.which!==9){e.validate()
}})
}}}b.prototype.validate=function(){var c=this.req(this.$this);
if(!c){this.$field.removeClass("success").addClass("danger")
}else{this.$field.removeClass("danger").addClass("success")
}return c
};
a.fn.validation=function(c){var d=a.extend({submit:false,fail:false,required:[]},c),e=[];
return this.each(function(){if(!d.required.length){return false
}var f=a(this),h=d.required.length,g;
for(g=0;
g<h;
g++){e.push(new b(f.find('[name="'+d.required[g].name+'"]'),d.required[g].validate||false))
}f.on("submit",function(i){var j=false;
if(!f.data("passed")){i.preventDefault();
var l=e.length,k;
for(k=0;
k<l;
k++){if(!e[k].validate()){j=true
}}if(!j){if(d.submit&&typeof d.submit==="function"){d.submit(f.serializeArray());
return
}f.data("passed",true).submit()
}else{if(d.fail&&typeof d.fail==="function"){d.fail();
return
}}}})
})
}
}(jQuery);