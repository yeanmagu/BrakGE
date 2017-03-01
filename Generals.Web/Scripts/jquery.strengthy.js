(function(d){var c={minLength:8,showToggle:true,errorClass:"strengthy-error",validClass:"strengthy-valid",showMsgs:true,require:{numbers:true,upperAndLower:true,symbols:true},msgs:["La clave es muy corta","debe contener por lo menos un numero","debe contener letras en mayuscula y en minuscula","debe conterner por lo menos un simbolo. ejem: [@#$%^&+=]","Clave Valida","Mostrar Clave"]};
var a=function(g,f,e){return function(i,h){f.attr("title",i);
if(g.showMsgs){e.attr("class",h).html(i)
}}
};
var b=function(e){var f=[{name:"numbers",regex:/\d/,msg:e.msgs[1]},{name:"upperAndLower",regex:/([a-z].*[A-Z]|[A-Z].*[a-z])/,msg:e.msgs[2]},{name:"symbols",regex:/[^a-zA-Z0-9]/,msg:e.msgs[3]}];
return function(j,g){var k=j.val();
var l=0;
var m=0;
var h;
j.removeClass(e.validClass);
if(k.length<+e.minLength){g(e.msgs[0],e.errorClass);
return false
}for(h=0;
h<f.length;
h++){if(e.require[f[h].name]!==true){continue
}m++;
if(f[h].regex.test(k)){l+=1
}else{g(f[h].msg,e.errorClass)
}}if(l/m===1){g(e.msgs[4],e.validClass);
j.addClass(e.validClass)
}}
};
d.fn.strengthy=function(f){var g=d.extend(c,f);
var e=b(g);
return this.each(function(){var k=d(this);
var j=k.attr("name");
var i;
var h;
var l;
k.after('<span id="strengthy-msg-'+j+'"></span>');
i=d("#strengthy-msg-"+j);
h=a(g,k,i);
if(g.showToggle){k.before('<input type="text" id="strengthy-show-toggle-plain-'+j+'" style="display: none;" />');
i.after('<p class="strengthy-show-toggle"><input id="strengthy-show-toggle-'+j+'" type="checkbox" />'+g.msgs[5]+"</p>");
l=d("#strengthy-show-toggle-plain-"+j);
l.keyup(function(){k.val(l.val()).keyup()
});
d("#strengthy-show-toggle-"+j).click(function(){if(k.css("display")==="none"){k.css("display","inline");
l.css("display","none")
}else{k.css("display","none");
l.css("display","inline")
}})
}k.keyup(function(){if(l.length>0){l.val(k.val())
}e(k,h)
})
})
}
})(jQuery);