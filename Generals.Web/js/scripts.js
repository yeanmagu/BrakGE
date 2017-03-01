$(function(){var l=$("#downBus");
var q=$("#upBus");
var n=$(".div-historico");
l.click(function(a){a.preventDefault();
l.hide();
q.show();
n.slideDown("slow")
});
q.click(function(a){a.preventDefault();
l.show();
q.hide();
n.slideUp("slow")
});
var m=$("#downOb");
var r=$("#upOb");
var o=$(".observaciones");
m.click(function(a){a.preventDefault();
m.hide();
r.show();
o.slideDown("slow")
});
r.click(function(a){a.preventDefault();
m.show();
r.hide();
o.slideUp("slow")
});
var j=$(".datos");
var k=$("#downDat");
var p=$("#upDat");
k.hide();
p.click(function(a){a.preventDefault();
j.slideUp();
$(this).hide();
k.show()
});
k.click(function(a){a.preventDefault();
j.slideDown();
$(this).hide();
p.show()
})

$(".ndown").hide();
});