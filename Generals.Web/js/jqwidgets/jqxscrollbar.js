(function(a){a.jqx.jqxWidget("jqxScrollBar","",{});
a.extend(a.jqx._jqxScrollBar.prototype,{defineInstance:function(){this.height=null;
this.width=null;
this.vertical=false;
this.min=0;
this.max=1000;
this.value=this.min;
this.step=10;
this.largestep=50;
this.thumbMinSize=10;
this.thumbSize=0;
this.thumbStep="auto";
this.roundedCorners="all";
this.showButtons=true;
this.disabled=false;
this.touchMode="auto";
this.touchModeStyle="auto";
this.thumbTouchSize=0;
this._triggervaluechanged=true;
this.rtl=false;
this.areaDownCapture=false;
this.areaUpCapture=false;
this._initialLayout=false
},createInstance:function(b){this.render()
},render:function(){this._mouseup=new Date();
var c=this;
var d="<div id='jqxScrollOuterWrap' style='width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'><div id='jqxScrollWrap' style='width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'><div id='jqxScrollBtnUp' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollAreaUp' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollThumb' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollAreaDown' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollBtnDown' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div></div></div>";
if(a.jqx.utilities&&a.jqx.utilities.scrollBarButtonsVisibility=="hidden"){this.showButtons=false
}if(c.WinJS){MSApp.execUnsafeLocalFunction(function(){c.host.html(d)
})
}else{this.element.innerHTML=d
}if(this.width!=undefined&&parseInt(this.width)>0){this.host.width(parseInt(this.width))
}if(this.height!=undefined&&parseInt(this.height)>0){this.host.height(parseInt(this.height))
}this.isPercentage=false;
if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width);
this.isPercentage=true
}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height);
this.isPercentage=true
}if(this.isPercentage){var e=this;
a.jqx.utilities.resize(this.host,function(){e._arrange()
},false)
}this.thumbCapture=false;
this.scrollOuterWrap=a(this.element.firstChild);
this.scrollWrap=a(this.scrollOuterWrap[0].firstChild);
this.btnUp=a(this.scrollWrap[0].firstChild);
this.areaUp=a(this.btnUp[0].nextSibling);
this.btnThumb=a(this.areaUp[0].nextSibling);
this.arrowUp=a("<div></div>");
this.arrowUp.appendTo(this.btnUp);
this.areaDown=a(this.btnThumb[0].nextSibling);
this.btnDown=a(this.areaDown[0].nextSibling);
this.arrowDown=a("<div></div>");
this.arrowDown.appendTo(this.btnDown);
var b=this.element.id;
this.btnUp[0].id="jqxScrollBtnUp"+b;
this.btnDown[0].id="jqxScrollBtnDown"+b;
this.btnThumb[0].id="jqxScrollThumb"+b;
this.areaUp[0].id="jqxScrollAreaUp"+b;
this.areaDown[0].id="jqxScrollAreaDown"+b;
this.scrollWrap[0].id="jqxScrollWrap"+b;
this.scrollOuterWrap[0].id="jqxScrollOuterWrap"+b;
if(!this.host.jqxRepeatButton){throw new Error("jqxScrollBar: Missing reference to jqxbuttons.js.");
return
}this.btnUp.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});
this.btnDown.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});
this.btnDownInstance=a.data(this.btnDown[0],"jqxRepeatButton").instance;
this.btnUpInstance=a.data(this.btnUp[0],"jqxRepeatButton").instance;
this.areaUp.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});
this.areaDown.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});
this.btnThumb.jqxButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});
this.propertyChangeMap.value=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.setPosition(parseFloat(i),true)
}}};
this.propertyChangeMap.width=function(f,h,g,i){if(f.width!=undefined&&parseInt(f.width)>0){f.host.width(parseInt(f.width));
f._arrange()
}};
this.propertyChangeMap.height=function(f,h,g,i){if(f.height!=undefined&&parseInt(f.height)>0){f.host.height(parseInt(f.height));
f._arrange()
}};
this.propertyChangeMap.theme=function(f,h,g,i){f.setTheme()
};
this.propertyChangeMap.max=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.max=parseInt(i);
if(f.min>f.max){f.max=f.min+1
}f._arrange();
f.setPosition(f.value)
}}};
this.propertyChangeMap.min=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.min=parseInt(i);
if(f.min>f.max){f.max=f.min+1
}f._arrange();
f.setPosition(f.value)
}}};
this.propertyChangeMap.disabled=function(f,h,g,i){if(g!=i){if(i){f.host.addClass(f.toThemeProperty("jqx-fill-state-disabled"))
}else{f.host.removeClass(f.toThemeProperty("jqx-fill-state-disabled"))
}f.btnUp.jqxRepeatButton("disabled",f.disabled);
f.btnDown.jqxRepeatButton("disabled",f.disabled);
f.btnThumb.jqxButton("disabled",f.disabled)
}};
this.propertyChangeMap.touchMode=function(f,h,g,i){if(g!=i){f._updateTouchBehavior();
if(i===true){f.showButtons=false;
f.refresh()
}else{if(i===false){f.showButtons=true;
f.refresh()
}}}};
this.buttonUpCapture=false;
this.buttonDownCapture=false;
this._updateTouchBehavior();
this.setPosition(this.value);
this._addHandlers();
this.setTheme()
},resize:function(c,b){this.width=c;
this.height=b;
this._arrange()
},_updateTouchBehavior:function(){this.isTouchDevice=a.jqx.mobile.isTouchDevice();
if(this.touchMode==true){if(a.jqx.browser.msie&&a.jqx.browser.version<9){this.setTheme();
return
}this.isTouchDevice=true;
a.jqx.mobile.setMobileSimulator(this.btnThumb[0]);
this._removeHandlers();
this._addHandlers();
this.setTheme()
}else{if(this.touchMode==false){this.isTouchDevice=false
}}},_addHandlers:function(){var e=this;
var d=false;
try{if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){d=true;
this._touchSupport=true
}}catch(h){}if(e.isTouchDevice||d){this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchend"),function(j){var k=e.vertical?e.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):e.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");
var l=e.toThemeProperty("jqx-fill-state-pressed");
e.btnThumb.removeClass(k);
e.btnThumb.removeClass(l);
if(!e.disabled){e.handlemouseup(e,j)
}return false
});
this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchstart"),function(j){if(!e.disabled){if(e.touchMode==true){j.clientX=j.originalEvent.clientX;
j.clientY=j.originalEvent.clientY
}else{var k=j;
if(k.originalEvent.touches&&k.originalEvent.touches.length){j.clientX=k.originalEvent.touches[0].clientX;
j.clientY=k.originalEvent.touches[0].clientY
}else{j.clientX=j.originalEvent.clientX;
j.clientY=j.originalEvent.clientY
}}e.handlemousedown(j);
if(j.preventDefault){j.preventDefault()
}}});
a.jqx.mobile.touchScroll(this.element,e.max,function(p,o,k,j,l){if(e.host.css("visibility")=="visible"){if(e.touchMode==true){l.clientX=l.originalEvent.clientX;
l.clientY=l.originalEvent.clientY
}else{var n=l;
if(n.originalEvent.touches&&n.originalEvent.touches.length){l.clientX=n.originalEvent.touches[0].clientX;
l.clientY=n.originalEvent.touches[0].clientY
}else{l.clientX=l.originalEvent.clientX;
l.clientY=l.originalEvent.clientY
}}var m=e.vertical?e.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):e.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");
e.btnThumb.addClass(m);
e.btnThumb.addClass(e.toThemeProperty("jqx-fill-state-pressed"));
e.thumbCapture=true;
e.handlemousemove(l)
}},e.element.id)
}this.addHandler(this.btnUp,"click",function(k){var j=e.step;
if(e.rtl&&!e.vertical){j=-e.step
}if(e.buttonUpCapture&&!e.isTouchDevice){if(!e.disabled){e.setPosition(e.value-j)
}}else{if(!e.disabled&&e.isTouchDevice){e.setPosition(e.value-j)
}}});
this.addHandler(this.btnDown,"click",function(k){var j=e.step;
if(e.rtl&&!e.vertical){j=-e.step
}if(e.buttonDownCapture&&!e.isTouchDevice){if(!e.disabled){e.setPosition(e.value+j)
}}else{if(!e.disabled&&e.isTouchDevice){e.setPosition(e.value+j)
}}});
if(!this.isTouchDevice){try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var i=null;
if(window.parent&&document.referrer){i=document.referrer
}if(i&&i.indexOf(document.location.host)!=-1){var g=function(j){if(!e.disabled){e.handlemouseup(e,j)
}};
if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g,false)
}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g)
}}}}}}catch(f){}this.addHandler(this.btnDown,"mouseup",function(k){if(!e.btnDownInstance.base.disabled&&e.buttonDownCapture){e.buttonDownCapture=false;
e.btnDown.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed"));
e.btnDown.removeClass(e.toThemeProperty("jqx-fill-state-pressed"));
e._removeArrowClasses("pressed","down");
e.handlemouseup(e,k);
var j=e.step;
if(e.rtl&&!e.vertical){j=-e.step
}e.setPosition(e.value+j);
return false
}});
this.addHandler(this.btnUp,"mouseup",function(k){if(!e.btnUpInstance.base.disabled&&e.buttonUpCapture){e.buttonUpCapture=false;
e.btnUp.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed"));
e.btnUp.removeClass(e.toThemeProperty("jqx-fill-state-pressed"));
e._removeArrowClasses("pressed","up");
e.handlemouseup(e,k);
var j=e.step;
if(e.rtl&&!e.vertical){j=-e.step
}e.setPosition(e.value-j);
return false
}});
this.addHandler(this.btnDown,"mousedown",function(j){if(!e.btnDownInstance.base.disabled){e.buttonDownCapture=true;
e.btnDown.addClass(e.toThemeProperty("jqx-fill-state-pressed"));
e.btnDown.addClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed"));
e._addArrowClasses("pressed","down");
return false
}});
this.addHandler(this.btnUp,"mousedown",function(j){if(!e.btnUpInstance.base.disabled){e.buttonUpCapture=true;
e.btnUp.addClass(e.toThemeProperty("jqx-fill-state-pressed"));
e.btnUp.addClass(e.toThemeProperty("jqx-scrollbar-button-state-pressed"));
e._addArrowClasses("pressed","up");
return false
}})
}var c="click";
if(this.isTouchDevice){c=a.jqx.mobile.getTouchEventName("touchend")
}this.addHandler(this.areaUp,c,function(k){if(!e.disabled){var j=e.largestep;
if(e.rtl&&!e.vertical){j=-e.largestep
}e.setPosition(e.value-j);
return false
}});
this.addHandler(this.areaDown,c,function(k){if(!e.disabled){var j=e.largestep;
if(e.rtl&&!e.vertical){j=-e.largestep
}e.setPosition(e.value+j);
return false
}});
this.addHandler(this.areaUp,"mousedown",function(j){if(!e.disabled){e.areaUpCapture=true;
return false
}});
this.addHandler(this.areaDown,"mousedown",function(j){if(!e.disabled){e.areaDownCapture=true;
return false
}});
this.addHandler(this.btnThumb,"mousedown",function(j){if(!e.disabled){e.handlemousedown(j)
}return false
});
this.addHandler(this.btnThumb,"dragstart",function(j){return false
});
this.addHandler(a(document),"mouseup."+this.element.id,function(j){if(!e.disabled){e.handlemouseup(e,j)
}});
if(!this.isTouchDevice){this.mousemoveFunc=function(j){if(!e.disabled){e.handlemousemove(j)
}};
this.addHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc);
this.addHandler(a(document),"mouseleave."+this.element.id,function(j){if(!e.disabled){e.handlemouseleave(j)
}});
this.addHandler(a(document),"mouseenter."+this.element.id,function(j){if(!e.disabled){e.handlemouseenter(j)
}});
if(!e.disabled){this.addHandler(this.btnUp,"mouseenter",function(){if(!e.disabled&&!e.btnUpInstance.base.disabled&&e.touchMode!=true){e.btnUp.addClass(e.toThemeProperty("jqx-scrollbar-button-state-hover"));
e.btnUp.addClass(e.toThemeProperty("jqx-fill-state-hover"));
e._addArrowClasses("hover","up")
}});
this.addHandler(this.btnUp,"mouseleave",function(){if(!e.disabled&&!e.btnUpInstance.base.disabled&&e.touchMode!=true){e.btnUp.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-hover"));
e.btnUp.removeClass(e.toThemeProperty("jqx-fill-state-hover"));
e._removeArrowClasses("hover","up")
}});
var b=e.toThemeProperty("jqx-scrollbar-thumb-state-hover");
if(!e.vertical){b=e.toThemeProperty("jqx-scrollbar-thumb-state-hover-horizontal")
}this.addHandler(this.btnThumb,"mouseenter",function(){if(!e.disabled&&e.touchMode!=true){e.btnThumb.addClass(b);
e.btnThumb.addClass(e.toThemeProperty("jqx-fill-state-hover"))
}});
this.addHandler(this.btnThumb,"mouseleave",function(){if(!e.disabled&&e.touchMode!=true){e.btnThumb.removeClass(b);
e.btnThumb.removeClass(e.toThemeProperty("jqx-fill-state-hover"))
}});
this.addHandler(this.btnDown,"mouseenter",function(){if(!e.disabled&&!e.btnDownInstance.base.disabled&&e.touchMode!=true){e.btnDown.addClass(e.toThemeProperty("jqx-scrollbar-button-state-hover"));
e.btnDown.addClass(e.toThemeProperty("jqx-fill-state-hover"));
e._addArrowClasses("hover","down")
}});
this.addHandler(this.btnDown,"mouseleave",function(){if(!e.disabled&&!e.btnDownInstance.base.disabled&&e.touchMode!=true){e.btnDown.removeClass(e.toThemeProperty("jqx-scrollbar-button-state-hover"));
e.btnDown.removeClass(e.toThemeProperty("jqx-fill-state-hover"));
e._removeArrowClasses("hover","down")
}})
}}},destroy:function(){var b=this.btnUp;
var f=this.btnDown;
var d=this.btnThumb;
var c=this.scrollWrap;
var h=this.areaUp;
var e=this.areaDown;
this.arrowUp.remove();
delete this.arrowUp;
this.arrowDown.remove();
delete this.arrowDown;
e.removeClass();
h.removeClass();
f.removeClass();
b.removeClass();
d.removeClass();
b.jqxRepeatButton("destroy");
f.jqxRepeatButton("destroy");
h.jqxRepeatButton("destroy");
e.jqxRepeatButton("destroy");
d.jqxButton("destroy");
var g=a.data(this.element,"jqxScrollBar");
this._removeHandlers();
this.btnUp=null;
this.btnDown=null;
this.scrollWrap=null;
this.areaUp=null;
this.areaDown=null;
this.scrollOuterWrap=null;
delete this.mousemoveFunc;
delete this.btnDownInstance;
delete this.btnUpInstance;
delete this.scrollOuterWrap;
delete this.scrollWrap;
delete this.btnDown;
delete this.areaDown;
delete this.areaUp;
delete this.btnDown;
delete this.btnUp;
delete this.btnThumb;
delete this.propertyChangeMap.value;
delete this.propertyChangeMap.min;
delete this.propertyChangeMap.max;
delete this.propertyChangeMap.touchMode;
delete this.propertyChangeMap.disabled;
delete this.propertyChangeMap.theme;
delete this.propertyChangeMap;
if(g){delete g.instance
}this.host.removeData();
this.host.remove();
delete this.host;
delete this.set;
delete this.get;
delete this.call;
delete this.element
},_removeHandlers:function(){this.removeHandler(this.btnUp,"mouseenter");
this.removeHandler(this.btnDown,"mouseenter");
this.removeHandler(this.btnThumb,"mouseenter");
this.removeHandler(this.btnUp,"mouseleave");
this.removeHandler(this.btnDown,"mouseleave");
this.removeHandler(this.btnThumb,"mouseleave");
this.removeHandler(this.btnUp,"click");
this.removeHandler(this.btnDown,"click");
this.removeHandler(this.btnDown,"mouseup");
this.removeHandler(this.btnUp,"mouseup");
this.removeHandler(this.btnDown,"mousedown");
this.removeHandler(this.btnUp,"mousedown");
this.removeHandler(this.areaUp,"mousedown");
this.removeHandler(this.areaDown,"mousedown");
this.removeHandler(this.areaUp,"click");
this.removeHandler(this.areaDown,"click");
this.removeHandler(this.btnThumb,"mousedown");
this.removeHandler(this.btnThumb,"dragstart");
this.removeHandler(a(document),"mouseup."+this.element.id);
if(!this.mousemoveFunc){this.removeHandler(a(document),"mousemove."+this.element.id)
}else{this.removeHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc)
}this.removeHandler(a(document),"mouseleave."+this.element.id);
this.removeHandler(a(document),"mouseenter."+this.element.id);
var b=this
},_addArrowClasses:function(c,b){if(c=="pressed"){c="selected"
}if(c!=""){c="-"+c
}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-up"+c))
}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-down"+c))
}}else{if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-left"+c))
}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-right"+c))
}}},_removeArrowClasses:function(c,b){if(c=="pressed"){c="selected"
}if(c!=""){c="-"+c
}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-up"+c))
}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-down"+c))
}}else{if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-left"+c))
}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-right"+c))
}}},setTheme:function(){var o=this.btnUp;
var m=this.btnDown;
var p=this.btnThumb;
var e=this.scrollWrap;
var g=this.areaUp;
var h=this.areaDown;
var f=this.arrowUp;
var i=this.arrowDown;
this.scrollWrap[0].className=this.toThemeProperty("jqx-reset");
this.scrollOuterWrap[0].className=this.toThemeProperty("jqx-reset");
var k=this.toThemeProperty("jqx-reset");
this.areaDown[0].className=k;
this.areaUp[0].className=k;
var d=this.toThemeProperty("jqx-scrollbar")+" "+this.toThemeProperty("jqx-widget")+" "+this.toThemeProperty("jqx-widget-content");
this.host.addClass(d);
m[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");
o[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");
var q="";
if(this.vertical){f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-up");
i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-down");
q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal")
}else{f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-left");
i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-right");
q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal-horizontal")
}q+=" "+this.toThemeProperty("jqx-fill-state-normal");
p[0].className=q;
if(this.disabled){e.addClass(this.toThemeProperty("jqx-fill-state-disabled"));
e.removeClass(this.toThemeProperty("jqx-scrollbar-state-normal"))
}else{e.addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));
e.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))
}if(this.roundedCorners=="all"){this.host.addClass(this.toThemeProperty("jqx-rc-all"));
if(this.vertical){var j=a.jqx.cssroundedcorners("top");
j=this.toThemeProperty(j);
o.addClass(j);
var c=a.jqx.cssroundedcorners("bottom");
c=this.toThemeProperty(c);
m.addClass(c)
}else{var n=a.jqx.cssroundedcorners("left");
n=this.toThemeProperty(n);
o.addClass(n);
var l=a.jqx.cssroundedcorners("right");
l=this.toThemeProperty(l);
m.addClass(l)
}}else{var b=a.jqx.cssroundedcorners(this.roundedCorners);
b=this.toThemeProperty(b);
elBtnUp.addClass(b);
elBtnDown.addClass(b)
}var b=a.jqx.cssroundedcorners(this.roundedCorners);
b=this.toThemeProperty(b);
if(!p.hasClass(b)){p.addClass(b)
}if(this.isTouchDevice&&this.touchModeStyle!=false){this.showButtons=false;
p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))
}},isScrolling:function(){if(this.thumbCapture==undefined||this.buttonDownCapture==undefined||this.buttonUpCapture==undefined||this.areaDownCapture==undefined||this.areaUpCapture==undefined){return false
}return this.thumbCapture||this.buttonDownCapture||this.buttonUpCapture||this.areaDownCapture||this.areaUpCapture
},handlemousedown:function(c){if(this.thumbCapture==undefined||this.thumbCapture==false){this.thumbCapture=true;
var b=this.btnThumb;
if(b!=null){b.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
if(this.vertical){b.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))
}else{b.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))
}}}this.dragStartX=c.clientX;
this.dragStartY=c.clientY;
this.dragStartValue=this.value
},toggleHover:function(c,b){},refresh:function(){this._arrange()
},_setElementPosition:function(c,b,d){if(!isNaN(b)){if(parseInt(c[0].style.left)!=parseInt(b)){c[0].style.left=b+"px"
}}if(!isNaN(d)){if(parseInt(c[0].style.top)!=parseInt(d)){c[0].style.top=d+"px"
}}},_setElementTopPosition:function(b,c){if(!isNaN(c)){b[0].style.top=c+"px"
}},_setElementLeftPosition:function(c,b){if(!isNaN(b)){c[0].style.left=b+"px"
}},handlemouseleave:function(e){var b=this.btnUp;
var d=this.btnDown;
if(this.buttonDownCapture||this.buttonUpCapture){b.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
d.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
this._removeArrowClasses("pressed")
}if(this.thumbCapture!=true){return
}var c=this.btnThumb;
var f=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");
c.removeClass(f);
c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"))
},handlemouseenter:function(e){var b=this.btnUp;
var d=this.btnDown;
if(this.buttonUpCapture){b.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
b.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
this._addArrowClasses("pressed","up")
}if(this.buttonDownCapture){d.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
d.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
this._addArrowClasses("pressed","down")
}if(this.thumbCapture!=true){return
}var c=this.btnThumb;
if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))
}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))
}c.addClass(this.toThemeProperty("jqx-fill-state-pressed"))
},handlemousemove:function(b){var i=this.btnUp;
var e=this.btnDown;
var d=0;
if(e==null||i==null){return
}if(i!=null&&e!=null&&this.buttonDownCapture!=undefined&&this.buttonUpCapture!=undefined){if(this.buttonDownCapture&&b.which==d){e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
this._removeArrowClasses("pressed","down");
this.buttonDownCapture=false
}else{if(this.buttonUpCapture&&b.which==d){i.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
this._removeArrowClasses("pressed","up");
this.buttonUpCapture=false
}}}if(this.thumbCapture!=true){return false
}var k=this.btnThumb;
if(b.which==d&&!this.isTouchDevice&&!this._touchSupport){this.thumbCapture=false;
this._arrange();
var j=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");
k.removeClass(j);
k.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
return true
}if(b.preventDefault!=undefined){b.preventDefault()
}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true
}if(b.stopPropagation!=undefined){b.stopPropagation()
}var l=0;
try{if(!this.vertical){l=b.clientX-this.dragStartX
}else{l=b.clientY-this.dragStartY
}var f=this._btnAndThumbSize;
if(!this._btnAndThumbSize){f=(this.vertical)?i.height()+e.height()+k.height():i.width()+e.width()+k.width()
}var g=(this.max-this.min)/(this.scrollBarSize-f);
if(this.thumbStep=="auto"){l*=g
}else{l*=g;
if(Math.abs(this.dragStartValue+l-this.value)>=parseInt(this.thumbStep)){var c=Math.round(parseInt(l)/this.thumbStep)*this.thumbStep;
if(this.rtl&&!this.vertical){this.setPosition(this.dragStartValue-c)
}else{this.setPosition(this.dragStartValue+c)
}return false
}else{return false
}}var c=l;
if(this.rtl&&!this.vertical){c=-l
}this.setPosition(this.dragStartValue+c)
}catch(h){alert(h)
}return false
},handlemouseup:function(d,g){var c=false;
if(this.thumbCapture){this.thumbCapture=false;
var e=this.btnThumb;
var h=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");
e.removeClass(h);
e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
c=true;
this._mouseup=new Date()
}this.areaDownCapture=this.areaUpCapture=false;
if(this.buttonUpCapture||this.buttonDownCapture){var b=this.btnUp;
var f=this.btnDown;
this.buttonUpCapture=false;
this.buttonDownCapture=false;
b.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
f.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));
b.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
f.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
this._removeArrowClasses("pressed");
c=true;
this._mouseup=new Date()
}if(c){if(g.preventDefault!=undefined){g.preventDefault()
}if(g.originalEvent!=null){g.originalEvent.mouseHandled=true
}if(g.stopPropagation!=undefined){g.stopPropagation()
}}},setPosition:function(b,g){var d=this.element;
if(b==undefined||b==NaN){b=this.min
}if(b>=this.max){b=this.max
}if(b<this.min){b=this.min
}if(this.value!==b||g==true){if(b==this.max){var c=new jQuery.Event("complete");
this.host.trigger(c)
}var f=this.value;
if(this._triggervaluechanged){var e=new jQuery.Event("valuechanged");
e.previousValue=this.value;
e.currentValue=b
}this.value=b;
this._positionelements();
if(this._triggervaluechanged){this.host.trigger(e)
}if(this.valuechanged){this.valuechanged({currentValue:this.value,previousvalue:f})
}}return b
},_getThumbSize:function(b){var d=this.max-this.min;
var c=0;
if(d>1){c=(b/(d+b)*b)
}else{if(d==1){c=b
}}if(this.thumbSize>0){c=this.thumbSize
}if(c<this.thumbMinSize){c=this.thumbMinSize
}return Math.min(c,b)
},_positionelements:function(){var c=this.element;
var j=this.areaUp;
var o=this.areaDown;
var d=this.btnUp;
var p=this.btnDown;
var k=this.btnThumb;
var b=this.scrollWrap;
var l=this._height?this._height:this.host.height();
var m=this._width?this._width:this.host.width();
var h=(!this.vertical)?l:m;
if(!this.showButtons){h=0
}var i=(!this.vertical)?m:l;
this.scrollBarSize=i;
var n=this._getThumbSize(i-2*h);
n=Math.round(n);
if(n<this.thumbMinSize){n=this.thumbMinSize
}if(l==NaN||l<10){l=10
}if(m==NaN||m<10){m=10
}h+=2;
this.btnSize=h;
var e=this._btnAndThumbSize;
if(!this._btnAndThumbSize){var e=(this.vertical)?2*this.btnSize+k.outerHeight():2*this.btnSize+k.outerWidth();
e=Math.round(e)
}var g=(i-e)/(this.max-this.min)*(this.value-this.min);
if(this.rtl&&!this.vertical){g=(i-e)/(this.max-this.min)*(this.max-this.value-this.min)
}g=Math.round(g);
if(g<0){g=0
}if(this.vertical){var f=i-g-e;
if(f<0){f=0
}o[0].style.height=f+"px";
j[0].style.height=g+"px";
this._setElementTopPosition(j,h);
this._setElementTopPosition(k,h+g);
this._setElementTopPosition(o,h+g+n)
}else{j[0].style.width=g+"px";
if(i-g-e>=0){o[0].style.width=i-g-e+"px"
}else{o[0].style.width="0px"
}this._setElementLeftPosition(j,h);
this._setElementLeftPosition(k,h+g);
this._setElementLeftPosition(o,2+h+g+n)
}},_arrange:function(){if(this._initialLayout){this._initialLayout=false;
return
}var r=this.element;
var u=this.areaUp;
var m=this.areaDown;
var q=this.btnUp;
var f=this.btnDown;
var n=this.btnThumb;
var i=this.scrollWrap;
var g=parseInt(this.element.style.height);
var j=parseInt(this.element.style.width);
if(this.isPercentage){var g=this.host.height();
var j=this.host.width()
}if(isNaN(g)){g=0
}if(isNaN(j)){j=0
}this._width=j;
this._height=g;
var b=(!this.vertical)?g:j;
if(!this.showButtons){b=0
}q[0].style.width=b+"px";
q[0].style.height=b+"px";
f[0].style.width=b+"px";
f[0].style.height=b+"px";
if(this.vertical){i[0].style.width=j+2+"px"
}else{i[0].style.height=g+2+"px"
}this._setElementPosition(q,0,0);
var l=b+2;
if(this.vertical){this._setElementPosition(f,0,g-l)
}else{this._setElementPosition(f,j-l,0)
}var s=(!this.vertical)?j:g;
this.scrollBarSize=s;
var c=this._getThumbSize(s-2*b);
c=Math.round(c);
if(c<this.thumbMinSize){c=this.thumbMinSize
}var h=false;
if(this.isTouchDevice&&this.touchModeStyle!=false){h=true
}if(!this.vertical){n[0].style.width=c+"px";
n[0].style.height=g+"px";
if(h&&this.thumbTouchSize!==0){n.css({height:this.thumbTouchSize+"px"});
n.css("margin-top",(this.host.height()-this.thumbTouchSize)/2)
}}else{n[0].style.width=j+"px";
n[0].style.height=c+"px";
if(h&&this.thumbTouchSize!==0){n.css({width:this.thumbTouchSize+"px"});
n.css("margin-left",(this.host.width()-this.thumbTouchSize)/2)
}}if(g==NaN||g<10){g=10
}if(j==NaN||j<10){j=10
}b+=2;
this.btnSize=b;
var t=(this.vertical)?2*this.btnSize+(2+parseInt(n[0].style.height)):2*this.btnSize+(2+parseInt(n[0].style.width));
t=Math.round(t);
this._btnAndThumbSize=t;
var p=(s-t)/(this.max-this.min)*(this.value-this.min);
if(this.rtl&&!this.vertical){p=(s-t)/(this.max-this.min)*(this.max-this.value-this.min)
}p=Math.round(p);
if(p===-Infinity||p==Infinity){p=0
}if(isNaN(p)){p=0
}if(p<0){p=0
}if(this.vertical){var o=(s-p-t);
if(o<0){o=0
}m[0].style.height=o+"px";
m[0].style.width=j+"px";
u[0].style.height=p+"px";
u[0].style.width=j+"px";
var d=parseInt(this.element.style.height);
if(this.isPercentage){d=this.host.height()
}n[0].style.visibility="inherit";
if(d-3*parseInt(b)<0){n[0].style.visibility="hidden"
}else{if(d<t){n[0].style.visibility="hidden"
}else{if(this.element.style.visibility=="visible"){n[0].style.visibility="inherit"
}}}this._setElementPosition(u,0,b);
this._setElementPosition(n,0,b+p);
this._setElementPosition(m,0,b+p+c)
}else{if(p>0){u[0].style.width=p+"px"
}if(g>0){u[0].style.height=g+"px"
}var e=(s-p-t);
if(e<0){e=0
}m[0].style.width=e+"px";
m[0].style.height=g+"px";
var k=parseInt(this.element.style.width);
if(this.isPercentage){k=this.host.width()
}n[0].style.visibility="inherit";
if(k-3*parseInt(b)<0){n[0].style.visibility="hidden"
}else{if(k<t){n[0].style.visibility="hidden"
}else{if(this.element.style.visibility=="visible"){n[0].style.visibility="inherit"
}}}this._setElementPosition(u,b,0);
this._setElementPosition(n,b+p,0);
this._setElementPosition(m,2+b+p+c,0)
}}})
})(jQuery);