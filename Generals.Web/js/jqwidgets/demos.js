function getDemoTheme(){var h=document.body?$.data(document.body,"theme"):null;
if(h==null){h=""
}else{return h
}var i=window.location.toString().indexOf("?");
if(i==-1){return""
}var h=window.location.toString().substring(1+i);
var j="../../jqwidgets/styles/jqx."+h+".css";
if(document.createStyleSheet!=undefined){var f=false;
$.each(document.styleSheets,function(a,b){if(b.href!=undefined&&b.href.indexOf(h)!=-1){f=true;
return false
}});
if(!f){document.createStyleSheet(j)
}}else{var g=$('<link rel="stylesheet" href="'+j+'" media="screen" />');
g[0].onload=function(){if($.jqx&&$.jqx.ready){$.jqx.ready()
}};
$(document).find("head").append(g)
}$.jqx=$.jqx||{};
$.jqx.theme=h;
return h
}var theme="";
try{if(jQuery){theme=getDemoTheme();
if(window.location.toString().indexOf("file://")>=0){var loc=window.location.toString();
var addMessage=false;
if(loc.indexOf("grid")>=0||loc.indexOf("chart")>=0||loc.indexOf("tree")>=0||loc.indexOf("list")>=0||loc.indexOf("combobox")>=0||loc.indexOf("php")>=0||loc.indexOf("adapter")>=0||loc.indexOf("datatable")>=0||loc.indexOf("ajax")>=0){addMessage=true
}if(addMessage){$(document).ready(function(){setTimeout(function(){$(document.body).prepend($('<div style="font-size: 12px; font-family: Verdana;">Note: To run a sample that includes data binding, you must open it via "http://..." protocol since Ajax makes http requests.</div><br/>'))
},50)
})
}}}else{$(document).ready(function(){theme=getDemoTheme()
})
}}catch(error){var er=error
};