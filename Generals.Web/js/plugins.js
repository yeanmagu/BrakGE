(function(g,i,a){var b="placeholder" in i.createElement("input"),e="placeholder" in i.createElement("textarea"),j=a.fn,d=a.valHooks,x,k;
if(b&&e){k=j.placeholder=function(){return this
};
k.input=k.textarea=true
}else{k=j.placeholder=function(){var l=this;
l.filter((b?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":f}).data("placeholder-enabled",true).trigger("blur.placeholder");
return l
};
k.input=b;
k.textarea=e;
x={get:function(m){var l=a(m);
return l.data("placeholder-enabled")&&l.hasClass("placeholder")?"":m.value
},set:function(m,n){var l=a(m);
if(!l.data("placeholder-enabled")){return m.value=n
}if(n==""){m.value=n;
if(m!=i.activeElement){f.call(m)
}}else{if(l.hasClass("placeholder")){c.call(m,true,n)||(m.value=n)
}else{m.value=n
}}return l
}};
b||(d.input=x);
e||(d.textarea=x);
a(function(){a(i).delegate("form","submit.placeholder",function(){var l=a(".placeholder",this).each(c);
setTimeout(function(){l.each(f)
},10)
})
});
a(g).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""
})
})
}function h(m){var l={},n=/^jQuery\d+$/;
a.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value
}});
return l
}function c(m,n){var l=this,o=a(l);
if(l.value==o.attr("placeholder")&&o.hasClass("placeholder")){if(o.data("placeholder-password")){o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id"));
if(m===true){return o[0].value=n
}o.focus()
}else{l.value="";
o.removeClass("placeholder");
l==i.activeElement&&l.select()
}}}function f(){var q,l=this,p=a(l),m=p,o=this.id;
if(l.value==""){if(l.type=="password"){if(!p.data("placeholder-textinput")){try{q=p.clone().attr({type:"text"})
}catch(n){q=a("<input>").attr(a.extend(h(this),{type:"text"}))
}q.removeAttr("name").data({"placeholder-password":true,"placeholder-id":o}).bind("focus.placeholder",c);
p.data({"placeholder-textinput":q,"placeholder-id":o}).before(q)
}p=p.removeAttr("id").hide().prev().attr("id",o).show()
}p.addClass("placeholder");
p[0].value=p.attr("placeholder")
}else{p.removeClass("placeholder")
}}}(this,document,jQuery));