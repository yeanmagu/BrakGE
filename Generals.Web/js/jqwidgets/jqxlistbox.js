(function(a){a.jqx.jqxWidget("jqxListBox","",{});
a.extend(a.jqx._jqxListBox.prototype,{defineInstance:function(){this.disabled=false;
this.width=null;
this.height=null;
this.items=new Array();
this.multiple=false;
this.selectedIndex=-1;
this.selectedIndexes=new Array();
this.source=null;
this.scrollBarSize=a.jqx.utilities.scrollBarSize;
this.enableHover=true;
this.enableSelection=true;
this.visualItems=new Array();
this.groups=new Array();
this.equalItemsWidth=true;
this.itemHeight=-1;
this.visibleItems=new Array();
this.emptyGroupText="Group";
this.checkboxes=false;
this.hasThreeStates=false;
this.autoHeight=false;
this.autoItemsHeight=false;
this.roundedcorners=true;
this.touchMode="auto";
this.displayMember="";
this.valueMember="";
this.searchMode="startswithignorecase";
this.incrementalSearch=true;
this.incrementalSearchDelay=1000;
this.incrementalSearchKeyDownDelay=300;
this.allowDrag=false;
this.allowDrop=true;
this.dropAction="default";
this.touchModeStyle="auto";
this.keyboardNavigation=true;
this.enableMouseWheel=true;
this.multipleextended=false;
this.emptyString="";
this.rtl=false;
this.rendered=null;
this.renderer=null;
this.dragStart=null;
this.dragEnd=null;
this.focusable=true;
this.ready=null;
this._checkForHiddenParent=true;
this.autoBind=true;
this.aria={"aria-disabled":{name:"disabled",type:"boolean"}};
this.events=["select","unselect","change","checkChange","dragStart","dragEnd","bindingComplete"]
},createInstance:function(b){if(a.jqx.utilities.scrollBarSize!=15){this.scrollBarSize=a.jqx.utilities.scrollBarSize
}if(this.width==null){this.width=200
}if(this.height==null){this.height=200
}this.render();
var c=this;
a.jqx.utilities.resize(this.host,function(){c._updateSize()
},false,this._checkForHiddenParent)
},resize:function(c,b){this.width=c;
this.height=b;
this._updateSize()
},render:function(){this.element.innerHTML="";
var b=this;
var d=this.element.className;
d+=" "+this.toThemeProperty("jqx-listbox");
d+=" "+this.toThemeProperty("jqx-reset");
d+=" "+this.toThemeProperty("jqx-rc-all");
d+=" "+this.toThemeProperty("jqx-widget");
d+=" "+this.toThemeProperty("jqx-widget-content");
this.element.className=d;
var h=false;
if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width);
h=true
}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height);
if(this.host.height()==0){this.host.height(200)
}h=true
}if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)
}else{if(this.width!=undefined&&!isNaN(this.width)){this.element.style.width=parseInt(this.width)+"px"
}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)
}else{if(this.height!=undefined&&!isNaN(this.height)){this.element.style.height=parseInt(this.height)+"px"
}}if(this.multiple||this.multipleextended||this.checkboxes){a.jqx.aria(this,"aria-multiselectable",true)
}else{a.jqx.aria(this,"aria-multiselectable",false)
}var c=a("<div style='-webkit-appearance: none; background: transparent; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div style='-webkit-appearance: none; border: none; background: transparent; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='listBoxContent' style='-webkit-appearance: none; border: none; background: transparent; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='verticalScrollBar"+this.element.id+"' style='visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar"+this.element.id+"' style='visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; border: none; position: absolute;'/></div></div>");
if(this._checkForHiddenParent){this._addInput();
if(!this.host.attr("tabIndex")){this.host.attr("tabIndex",1)
}}this.host.attr("role","listbox");
this.host.append(c);
var f=this.host.find("#verticalScrollBar"+this.element.id);
if(!this.host.jqxButton){throw new Error("jqxListBox: Missing reference to jqxbuttons.js.");
return
}if(!f.jqxScrollBar){throw new Error("jqxListBox: Missing reference to jqxscrollbar.js.");
return
}var g=parseInt(this.host.height())/2;
if(g==0){g=10
}this.vScrollBar=f.jqxScrollBar({_initialLayout:true,vertical:true,rtl:this.rtl,theme:this.theme,touchMode:this.touchMode,largestep:g});
var e=this.host.find("#horizontalScrollBar"+this.element.id);
this.hScrollBar=e.jqxScrollBar({_initialLayout:true,vertical:false,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme});
this.content=this.host.find("#listBoxContent");
this.content[0].id="listBoxContent"+this.element.id;
this.bottomRight=this.host.find("#bottomRight").addClass(this.toThemeProperty("jqx-listbox-bottomright")).addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));
this.bottomRight[0].id="bottomRight"+this.element.id;
this.vScrollInstance=a.data(this.vScrollBar[0],"jqxScrollBar").instance;
this.hScrollInstance=a.data(this.hScrollBar[0],"jqxScrollBar").instance;
if(this.isTouchDevice()){if(!(a.jqx.browser.msie&&a.jqx.browser.version<9)){var i=a("<div class='overlay' style='z-index: 99; -webkit-appearance: none; border: none; background: black; opacity: 0.01; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>");
this.content.parent().append(i);
this.overlayContent=this.host.find(".overlay")
}}this._updateTouchScrolling();
this.host.addClass("jqx-disableselect");
if(this.host.jqxDragDrop){jqxListBoxDragDrop()
}},_highlight:function(b,c){var d=c.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return b.replace(new RegExp("("+d+")","ig"),function(e,f){return"<b>"+f+"</b>"
})
},_addInput:function(){var b=this.host.attr("name");
if(b){this.host.attr("name","")
}this.input=a("<input type='hidden'/>");
this.host.append(this.input);
this.input.attr("name",b)
},_updateTouchScrolling:function(){var b=this;
if(this.isTouchDevice()){b.enableHover=false;
var c=this.overlayContent?this.overlayContent:this.content;
this.removeHandler(a(c),a.jqx.mobile.getTouchEventName("touchstart")+".touchScroll");
this.removeHandler(a(c),a.jqx.mobile.getTouchEventName("touchmove")+".touchScroll");
this.removeHandler(a(c),a.jqx.mobile.getTouchEventName("touchend")+".touchScroll");
this.removeHandler(a(c),"touchcancel.touchScroll");
a.jqx.mobile.touchScroll(c,b.vScrollInstance.max,function(f,e){if(b.vScrollBar.css("visibility")!="hidden"){var d=b.vScrollInstance.value;
b.vScrollInstance.setPosition(d+e);
b._lastScroll=new Date()
}if(b.hScrollBar.css("visibility")!="hidden"){var d=b.hScrollInstance.value;
b.hScrollInstance.setPosition(d+f);
b._lastScroll=new Date()
}},this.element.id,this.hScrollBar,this.vScrollBar);
if(b.vScrollBar.css("visibility")!="visible"&&b.hScrollBar.css("visibility")!="visible"){a.jqx.mobile.setTouchScroll(false,this.element.id)
}else{a.jqx.mobile.setTouchScroll(true,this.element.id)
}this._arrange()
}},isTouchDevice:function(){var b=a.jqx.mobile.isTouchDevice();
if(this.touchMode==true){if(this.touchDevice){return true
}if(a.jqx.browser.msie&&a.jqx.browser.version<9){return false
}this.touchDevice=true;
b=true;
a.jqx.mobile.setMobileSimulator(this.element)
}else{if(this.touchMode==false){b=false
}}if(b&&this.touchModeStyle!=false){this.scrollBarSize=a.jqx.utilities.touchScrollBarSize
}if(b){this.host.addClass(this.toThemeProperty("jqx-touch"))
}return b
},beginUpdate:function(){this.updatingListBox=true
},endUpdate:function(){this.updatingListBox=false;
this._addItems();
this._renderItems()
},beginUpdateLayout:function(){this.updating=true
},resumeUpdateLayout:function(){this.updating=false;
this.vScrollInstance.value=0;
this._render(false)
},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return
}if(c=="renderer"){b._cachedItemHtml=new Array();
b.refresh()
}if(c=="itemHeight"){b.refresh()
}if(c=="source"||c=="checkboxes"){if(d==null&&e&&e.unbindBindingUpdate){e.unbindBindingUpdate(b.element.id);
e.unbindDownloadComplete(b.element.id)
}b.clearSelection();
b.refresh()
}if(c=="scrollBarSize"||c=="equalItemsWidth"){if(d!=e){b._updatescrollbars()
}}if(c=="disabled"){b._renderItems();
b.vScrollBar.jqxScrollBar({disabled:d});
b.hScrollBar.jqxScrollBar({disabled:d})
}if(c=="touchMode"||c=="rtl"){b._removeHandlers();
b.vScrollBar.jqxScrollBar({touchMode:d});
b.hScrollBar.jqxScrollBar({touchMode:d});
if(c=="touchMode"){if(!(a.jqx.browser.msie&&a.jqx.browser.version<9)){var g=a("<div class='overlay' style='z-index: 99; -webkit-appearance: none; border: none; background: black; opacity: 0.01; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>");
b.content.parent().append(g);
b.overlayContent=b.host.find(".overlay")
}}b._updateTouchScrolling();
b._addHandlers();
b._render(false)
}if(!this.updating){if(c=="width"||c=="height"){b._updateSize()
}}if(c=="theme"){if(e!=d){b.hScrollBar.jqxScrollBar({theme:b.theme});
b.vScrollBar.jqxScrollBar({theme:b.theme});
b.host.removeClass();
b.host.addClass(b.toThemeProperty("jqx-listbox"));
b.host.addClass(b.toThemeProperty("jqx-widget"));
b.host.addClass(b.toThemeProperty("jqx-widget-content"));
b.host.addClass(b.toThemeProperty("jqx-reset"));
b.host.addClass(b.toThemeProperty("jqx-rc-all"));
b.refresh()
}}if(c=="selectedIndex"){b.clearSelection();
b.selectIndex(d,true)
}if(c=="displayMember"||c=="valueMember"){if(e!=d){var f=b.selectedIndex;
b.refresh();
b.selectedIndex=f;
b.selectedIndexes[f]=f
}b._renderItems()
}if(c=="autoHeight"){if(e!=d){b._render(false)
}else{b._updatescrollbars();
b._renderItems()
}}if(b._checkForHiddenParent&&a.jqx.isHidden(b.host)){a.jqx.utilities.resize(this.host,function(){b._updateSize()
},false,b._checkForHiddenParent)
}},loadFromSelect:function(i){if(i==null){return
}var c="#"+i;
var f=a(c);
if(f.length>0){var e=f.find("option");
var b=f.find("optgroup");
var d=0;
var h=-1;
var g=new Array();
a.each(e,function(){var k=b.find(this).length>0;
var m=null;
if(this.text!=this.value&&(this.label==null||this.label=="")){this.label=this.text
}var l={disabled:this.disabled,value:this.value,label:this.label,title:this.title,originalItem:this};
var j=a.jqx.browser.msie&&a.jqx.browser.version<8;
if(j){if(l.value==""&&this.text!=null&&this.text.length>0){l.value=this.text
}}if(k){m=b.find(this).parent()[0].label;
l.group=m
}if(this.selected){h=d
}g[d]=l;
d++
});
this.source=g;
this.fromSelect=true;
this.clearSelection();
this.selectedIndex=h;
this.selectedIndexes[this.selectedIndex]=this.selectedIndex;
this.refresh()
}},invalidate:function(){this._cachedItemHtml=[];
this._renderItems();
this.virtualSize=null;
this._updateSize()
},refresh:function(c){var b=this;
if(this.vScrollBar==undefined){return
}this._cachedItemHtml=[];
this.visibleItems=new Array();
var d=function(e){if(e==true){if(b.selectedIndex!=-1){var f=b.selectedIndex;
b.selectedIndex=-1;
b._stopEvents=true;
b.selectIndex(f,false,true);
if(b.selectedIndex==-1){b.selectedIndex=f
}b._stopEvents=false
}}};
if(this.itemswrapper!=null){this.itemswrapper.remove();
this.itemswrapper=null
}if(a.jqx.dataAdapter&&this.source!=null&&this.source._source){this.databind(this.source,c);
d(c);
return
}if(this.autoBind||(!this.autoBind&&!c)){this.items=this.loadItems(this.source)
}this._raiseEvent("6");
this._render(false,c==true);
d(c)
},_render:function(c,b){this._addItems();
this._renderItems();
this.vScrollInstance.setPosition(0);
this._cachedItemHtml=new Array();
if(c==undefined||c){if(this.items!=undefined&&this.items!=null){if(this.selectedIndex>=0&&this.selectedIndex<this.items.length){this.selectIndex(this.selectedIndex,true,true,true)
}}}if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop();
if(this.isTouchDevice()){this._removeHandlers();
if(this.overlayContent){this.overlayContent.remove();
this.overlayContent=null
}this._updateTouchScrolling();
this._addHandlers();
return
}}this._updateTouchScrolling();
if(this.rendered){this.rendered()
}if(this.ready){this.ready()
}},_hitTest:function(c,f){var e=parseInt(this.vScrollInstance.value);
var b=this._searchFirstVisibleIndex(f+e,this.renderedVisibleItems);
if(this.renderedVisibleItems[b]!=undefined&&this.renderedVisibleItems[b].isGroup){return null
}if(this.renderedVisibleItems.length>0){var d=this.renderedVisibleItems[this.renderedVisibleItems.length-1];
if(d.height+d.top<f+e){return null
}}b=this._searchFirstVisibleIndex(f+e);
return this.visibleItems[b];
return null
},_searchFirstVisibleIndex:function(e,f){if(e==undefined){e=parseInt(this.vScrollInstance.value)
}var c=0;
if(f==undefined||f==null){f=this.visibleItems
}var b=f.length;
while(c<=b){mid=parseInt((c+b)/2);
var d=f[mid];
if(d==undefined){break
}if(d.initialTop>e&&d.initialTop+d.height>e){b=mid-1
}else{if(d.initialTop<e&&d.initialTop+d.height<=e){c=mid+1
}else{return mid;
break
}}}return 0
},_renderItems:function(){if(this.items==undefined||this.items.length==0){this.visibleItems=new Array();
return
}if(this.updatingListBox==true){return
}var n=this.isTouchDevice();
var p=this.vScrollInstance;
var f=this.hScrollInstance;
var P=parseInt(p.value);
var m=parseInt(f.value);
if(this.rtl){if(this.hScrollBar[0].style.visibility!="hidden"){m=f.max-m
}}var G=this.items.length;
var b=this.host.width();
var l=parseInt(this.content[0].style.width);
var q=l+parseInt(f.max);
var r=parseInt(this.vScrollBar[0].style.width)+2;
if(this.vScrollBar[0].style.visibility=="hidden"){r=0
}if(this.hScrollBar[0].style.visibility!="visible"){q=l
}var o=this._getVirtualItemsCount();
var L=new Array();
var F=0;
var j=parseInt(this.element.style.height)+2;
if(this.element.style.height.indexOf("%")!=-1){j=this.host.outerHeight()
}if(isNaN(j)){j=0
}var k=0;
var s=0;
var Q=0;
if(p.value==0||this.visibleItems.length==0){for(var x=0;
x<this.items.length;
x++){var h=this.items[x];
if(h.visible){h.top=-P;
h.initialTop=-P;
if(!h.isGroup&&h.visible){this.visibleItems[s++]=h;
h.visibleIndex=s-1
}this.renderedVisibleItems[Q++]=h;
h.left=-m;
var B=h.top+h.height;
if(B>=0&&h.top-h.height<=j){L[F++]={index:x,item:h}
}P-=h.height
}}}var i=P>0?this._searchFirstVisibleIndex(this.vScrollInstance.value,this.renderedVisibleItems):0;
var C=0;
F=0;
var J=this.vScrollInstance.value;
var N=0;
while(C<100+j){var h=this.renderedVisibleItems[i];
if(h==undefined){break
}if(h.visible){h.left=-m;
var B=h.top+h.height-J;
if(B>=0&&h.initialTop-J-h.height<=2*j){L[F++]={index:i,item:h}
}}i++;
if(h.visible){C+=h.initialTop-J+h.height-C
}N++;
if(N>this.items.length-1){break
}}var w=this.toThemeProperty("jqx-listitem-state-normal")+" "+this.toThemeProperty("jqx-item");
var M=this.toThemeProperty("jqx-listitem-state-group");
var t=this.toThemeProperty("jqx-listitem-state-disabled")+" "+this.toThemeProperty("jqx-fill-state-disabled");
var E=0;
var c=this;
for(var x=0;
x<this.visualItems.length;
x++){var D=this.visualItems[x];
var H=function(){var y=D[0].firstChild;
if(c.checkboxes){y=D[0].lastChild
}if(y!=null){y.style.visibility="hidden";
y.className=""
}if(c.checkboxes){var R=D.find(".chkbox");
R.css({visibility:"hidden"})
}};
if(x<L.length){var h=L[x].item;
if(h.initialTop-J>=j){H();
continue
}var K=a(D[0].firstChild);
if(this.checkboxes){K=a(D[0].lastChild)
}if(K.length==0){continue
}if(K[0]==null){continue
}K[0].className="";
K[0].style.display="block";
K[0].style.visibility="inherit";
var d="";
if(!h.isGroup&&!this.selectedIndexes[h.index]>=0){d=w
}else{d=M
}if(h.disabled||this.disabled){d+=" "+t
}if(this.roundedcorners){d+=" "+this.toThemeProperty("jqx-rc-all")
}if(n){d+=" "+this.toThemeProperty("jqx-listitem-state-normal-touch")
}K[0].className=d;
if(this.renderer){if(!h.key){h.key=this.generatekey()
}if(!this._cachedItemHtml){this._cachedItemHtml=new Array()
}if(this._cachedItemHtml[h.key]){if(K[0].innerHTML!=this._cachedItemHtml[h.key]){K[0].innerHTML=this._cachedItemHtml[h.key]
}}else{var v=this.renderer(h.index,h.label,h.value);
K[0].innerHTML=v;
this._cachedItemHtml[h.key]=K[0].innerHTML
}}else{if(this.itemHeight!==-1){var u=2+2*parseInt(K.css("padding-top"));
K[0].style.lineHeight=(h.height-u)+"px";
K.css("vertical-align","middle")
}if(h.html!=null&&h.html.toString().length>0){K[0].innerHTML=h.html
}else{if(h.label!=null||h.value!=null){if(h.label!=null){if(K[0].innerHTML!==h.label){K[0].innerHTML=h.label
}if(a.trim(h.label)==""){K[0].innerHTML=this.emptyString;
if(this.emptyString==""){K[0].style.height=(h.height-8)+"px"
}}if(!this.incrementalSearch&&!h.disabled){if(this.searchString!=undefined&&this.searchString!=""){K[0].innerHTML=this._highlight(h.label.toString(),this.searchString)
}}}else{if(h.label===null){K[0].innerHTML=this.emptyString;
if(this.emptyString==""){K[0].style.height=(h.height-8)+"px"
}}else{if(K[0].innerHTML!==h.value){K[0].innerHTML=h.value
}else{if(h.label==""){K[0].innerHTML=" "
}}}}}else{if(h.label==""||h.label==null){K[0].innerHTML="";
K[0].style.height=(h.height-8)+"px"
}}}}D[0].style.left=h.left+"px";
D[0].style.top=h.initialTop-J+"px";
h.element=K[0];
if(h.title){K[0].title=h.title
}if(this.equalItemsWidth&&!h.isGroup){if(k==0){var z=parseInt(q);
var I=parseInt(K.outerWidth())-parseInt(K.width());
z-=I;
var e=1;
if(e!=null){e=parseInt(e)
}else{e=0
}z-=2*e;
k=z;
if(this.checkboxes&&this.hScrollBar[0].style.visibility=="hidden"){k-=18
}}if(l>this.virtualSize.width){K[0].style.width=k+"px";
h.width=k
}else{K[0].style.width=-4+this.virtualSize.width+"px";
h.width=this.virtualSize.width-4
}}else{if(K.width()<this.host.width()){K.width(this.host.width()-2)
}}if(this.rtl){K[0].style.textAlign="right"
}if(this.autoItemsHeight){K[0].style.whiteSpace="normal";
K.width(k);
h.width=k
}E=0;
if(this.checkboxes&&!h.isGroup){if(E==0){E=(h.height-16)/2;
E++
}var A=a(D.children()[0]);
A[0].item=h;
if(!this.rtl){if(K[0].style.left!="18px"){K[0].style.left="18px"
}}else{if(K[0].style.left!="0px"){K[0].style.left="0px"
}}if(this.rtl){A.css("left",8+h.width+"px")
}A[0].style.top=E+"px";
A[0].style.display="block";
A[0].style.visibility="inherit";
var O=h.checked;
var g=h.checked?" "+this.toThemeProperty("jqx-checkbox-check-checked"):"";
if(A[0].firstChild&&A[0].firstChild.firstChild&&A[0].firstChild.firstChild.firstChild){if(O){A[0].firstChild.firstChild.firstChild.className=g
}else{if(O===false){A[0].firstChild.firstChild.firstChild.className=""
}else{if(O===null){A[0].firstChild.firstChild.firstChild.className=this.toThemeProperty("jqx-checkbox-check-indeterminate")
}}}}if(a.jqx.ariaEnabled){if(O){D[0].setAttribute("aria-selected",true)
}else{D[0].removeAttribute("aria-selected")
}}}else{if(this.checkboxes){var A=a(D.children()[0]);
A.css({display:"none",visibility:"inherit"})
}}if(this.selectedIndexes[h.visibleIndex]>=0&&!h.disabled){K.addClass(this.toThemeProperty("jqx-listitem-state-selected"));
K.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
if(a.jqx.ariaEnabled){D[0].setAttribute("aria-selected",true);
this._activeElement=D[0]
}}else{if(!this.checkboxes){if(a.jqx.ariaEnabled){D[0].removeAttribute("aria-selected")
}}}}else{H()
}}},generatekey:function(){var b=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)
};
return(b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b())
},_calculateVirtualSize:function(){var c=0;
var s=2;
var m=0;
var t=a("<span></span>");
if(this.equalItemsWidth){t.css("float","left")
}var n=0;
var o=this.host.outerHeight();
a(document.body).append(t);
var k=this.items.length;
var p=this.host.width();
if(this.autoItemsHeight){p-=10;
if(this.vScrollBar.css("visibility")!="hidden"){p-=20
}}if(this.autoItemsHeight||this.renderer||this.groups.length>1||(k>0&&this.items[0].html!=null&&this.items[0].html!="")){for(var m=0;
m<k;
m++){var f=this.items[m];
if(f.isGroup&&(f.label==""&&f.html=="")){continue
}if(!f.visible){continue
}var j="";
if(!f.isGroup){j+=this.toThemeProperty("jqx-listitem-state-normal jqx-rc-all")
}else{j+=this.toThemeProperty("jqx-listitem-state-group jqx-rc-all")
}j+=" "+this.toThemeProperty("jqx-fill-state-normal");
if(this.isTouchDevice()){j+=" "+this.toThemeProperty("jqx-touch")
}t[0].className=j;
if(this.autoItemsHeight){t[0].style.whiteSpace="normal";
var b=this.checkboxes?-20:0;
t[0].style.width=(b+p)+"px"
}if(this.renderer){var q=this.renderer(f.index,f.label,f.value);
t[0].innerHTML=q
}else{if(f.html!=null&&f.html.toString().length>0){t[0].innerHTML=f.html
}else{if(f.label!=null||f.value!=null){if(f.label!=null){t[0].innerHTML=f.label;
if(f.label==""){t[0].innerHTML="Empty"
}}else{t[0].innerHTML=f.value
}}}}var e=t.outerHeight();
var g=t.outerWidth();
if(this.itemHeight>-1){e=this.itemHeight
}f.height=e;
f.width=g;
s+=e;
c=Math.max(c,g);
if(s<=o){n++
}}}else{var s=0;
var r=0;
var i="";
var h=0;
var l=0;
var d=-1;
for(var m=0;
m<k;
m++){var f=this.items[m];
if(f.isGroup&&(f.label==""&&f.html=="")){continue
}if(!f.visible){continue
}d++;
var j="";
if(d==0){j+=this.toThemeProperty("jqx-listitem-state-normal jqx-rc-all");
j+=" "+this.toThemeProperty("jqx-fill-state-normal");
j+=" "+this.toThemeProperty("jqx-widget");
j+=" "+this.toThemeProperty("jqx-listbox");
j+=" "+this.toThemeProperty("jqx-widget-content");
if(this.isTouchDevice()){j+=" "+this.toThemeProperty("jqx-touch");
j+=" "+this.toThemeProperty("jqx-listitem-state-normal-touch")
}t[0].className=j;
if(this.autoItemsHeight){t[0].style.whiteSpace="normal";
var b=this.checkboxes?-20:0;
t[0].style.width=(b+p)+"px"
}if(f.html==null||(f.label==""||f.label==null)){t[0].innerHTML="Item"
}else{if(f.html!=null&&f.html.toString().length>0){t[0].innerHTML=f.html
}else{if(f.label!=null||f.value!=null){if(f.label!=null){if(f.label.toString().match(new RegExp("\\w"))!=null||f.label.toString().match(new RegExp("\\d"))!=null){t[0].innerHTML=f.label
}else{t[0].innerHTML="Item"
}}else{t[0].innerHTML=f.value
}}}}var e=1+t.outerHeight();
if(this.itemHeight>-1){e=this.itemHeight
}r=e
}if(h!=undefined){l=h
}if(f.html!=null&&f.html.toString().length>0){h=Math.max(h,f.html.toString().length);
if(l!=h){i=f.html
}}else{if(f.label!=null){h=Math.max(h,f.label.length);
if(l!=h){i=f.label
}}else{if(f.value!=null){h=Math.max(h,f.value.length);
if(l!=h){i=f.value
}}}}f.height=r;
s+=r;
if(s<=o){n++
}}t[0].innerHTML=i;
c=t.outerWidth()
}s+=2;
if(n<10){n=10
}t.remove();
return{width:c,height:s,itemsPerPage:n}
},_getVirtualItemsCount:function(){if(this.virtualItemsCount==0){var b=parseInt(this.host.height())/5;
if(b>this.items.length){b=this.items.length
}return b
}else{return this.virtualItemsCount
}},_addItems:function(k){if(this.updatingListBox==true){return
}if(this.items==undefined||this.items.length==0){this.virtualSize={width:0,height:0,itemsPerPage:0};
this._updatescrollbars();
this.renderedVisibleItems=new Array();
if(this.itemswrapper){this.itemswrapper.children().remove()
}return
}if(k==false){var b=this._calculateVirtualSize();
var t=b.itemsPerPage*2;
if(this.autoHeight){t=this.items.length
}this.virtualItemsCount=Math.min(t,this.items.length);
var o=this;
var j=b.width;
this.virtualSize=b;
this._updatescrollbars();
return
}var g=this;
var e=0;
this.visibleItems=new Array();
this.renderedVisibleItems=new Array();
this._removeHandlers();
if(this.allowDrag&&this._enableDragDrop){this.itemswrapper=null
}if(this.itemswrapper==null){this.content[0].innerHTML="";
this.itemswrapper=a('<div style="outline: 0 none; overflow:hidden; width:100%; position: relative;"></div>');
this.itemswrapper.height(2*this.host.height());
this.content.append(this.itemswrapper)
}var b=this._calculateVirtualSize();
var t=b.itemsPerPage*2;
if(this.autoHeight){t=this.items.length
}this.virtualItemsCount=Math.min(t,this.items.length);
var o=this;
var j=b.width;
this.virtualSize=b;
this.itemswrapper.width(Math.max(this.host.width(),17+b.width));
var q=0;
var u="";
var s=a.jqx.browser.msie&&a.jqx.browser.version<9;
var l=s?' unselectable="on"':"";
for(var c=q;
c<this.virtualItemsCount;
c++){var n=this.items[c];
var i="listitem"+c+this.element.id;
u+="<div"+l+" role='option' id='"+i+"' class='jqx-listitem-element'>";
if(this.checkboxes){u+='<div style="background-color: transparent; padding: 0; margin: 0; position: absolute; float: left; width: 16px; height: 16px;" class="chkbox">';
var h='<div class="'+this.toThemeProperty("jqx-checkbox-default")+" "+this.toThemeProperty("jqx-fill-state-normal")+" "+this.toThemeProperty("jqx-rc-all")+'"><div style="cursor: pointer; width: 13px; height: 13px;">';
var p=n.checked?" "+this.toThemeProperty("jqx-checkbox-check-checked"):"";
h+='<span style="width: 13px; height: 13px;" class="checkBoxCheck'+p+'"></span>';
h+="</div></div>";
u+=h;
u+="</div>"
}u+="<span"+l+" style='-ms-touch-action: none;'></span></div>"
}if(g.WinJS){this.itemswrapper.html(u)
}else{this.itemswrapper[0].innerHTML=u
}var r=this.itemswrapper.children();
for(var c=q;
c<this.virtualItemsCount;
c++){var n=this.items[c];
var m=a(r[c]);
if(this.allowDrag&&this._enableDragDrop){m.addClass("draggable")
}if(this.checkboxes){var d=a(m.children()[0]);
m.css("float","left");
var f=a(m[0].firstChild);
f.css("float","left")
}m[0].style.height=n.height+"px";
m[0].style.top=e+"px";
e+=n.height;
this.visualItems[c]=m
}this._addHandlers();
this._updatescrollbars();
if(this.autoItemsHeight){var b=this._calculateVirtualSize();
var t=b.itemsPerPage*2;
if(this.autoHeight){t=this.items.length
}this.virtualItemsCount=Math.min(t,this.items.length);
var o=this;
var j=b.width;
this.virtualSize=b;
this._updatescrollbars()
}if(a.jqx.browser.msie&&a.jqx.browser.version<8){this.host.attr("hideFocus",true);
this.host.find("div").attr("hideFocus",true)
}},_updatescrollbars:function(){if(!this.virtualSize){return
}var m=this.virtualSize.height;
var j=this.virtualSize.width;
var f=this.vScrollInstance;
var e=this.hScrollInstance;
this._arrange(false);
var k=false;
var n=this.host.outerWidth();
var l=this.host.outerHeight();
var b=0;
if(j>n){b=this.hScrollBar.outerHeight()+2
}if(m+b>l){var d=f.max;
f.max=2+parseInt(m)+b-parseInt(l-2);
if(this.vScrollBar[0].style.visibility!="inherit"){this.vScrollBar[0].style.visibility="inherit";
k=true
}if(d!=f.max){f._arrange()
}}else{if(this.vScrollBar[0].style.visibility!="hidden"){this.vScrollBar[0].style.visibility="hidden";
k=true;
f.setPosition(0)
}}var h=0;
if(this.vScrollBar[0].style.visibility!="hidden"){h=this.scrollBarSize+6
}var g=this.checkboxes?20:0;
if(this.autoItemsHeight){this.hScrollBar[0].style.visibility="hidden"
}else{if(j>=n-h-g){var i=e.max;
if(this.vScrollBar[0].style.visibility=="inherit"){e.max=g+h+parseInt(j)-this.host.width()+4
}else{e.max=g+parseInt(j)-this.host.width()+6
}if(this.hScrollBar[0].style.visibility!="inherit"){this.hScrollBar[0].style.visibility="inherit";
k=true
}if(i!=e.max){e._arrange()
}if(this.vScrollBar[0].style.visibility=="inherit"){f.max=2+parseInt(m)+this.hScrollBar.outerHeight()+2-parseInt(this.host.height())
}}else{if(this.hScrollBar[0].style.visibility!="hidden"){this.hScrollBar[0].style.visibility="hidden";
k=true
}}}e.setPosition(0);
if(k){this._arrange()
}if(this.itemswrapper){this.itemswrapper[0].style.width=Math.max(0,Math.max(n-2,17+j))+"px";
this.itemswrapper[0].style.height=Math.max(0,2*l)+"px"
}var c=this.isTouchDevice();
if(c){if(this.vScrollBar.css("visibility")!="visible"&&this.hScrollBar.css("visibility")!="visible"){a.jqx.mobile.setTouchScroll(false,this.element.id)
}else{a.jqx.mobile.setTouchScroll(true,this.element.id)
}}},clear:function(){this.source=null;
this.clearSelection();
this.refresh()
},clearSelection:function(b){for(var c=0;
c<this.selectedIndexes.length;
c++){if(this.selectedIndexes[c]&&this.selectedIndexes[c]!=-1){this._raiseEvent("1",{index:c,type:"api",item:this.getVisibleItem(c),originalEvent:null})
}this.selectedIndexes[c]=-1
}this.selectedIndex=-1;
this.selectedValue=null;
if(b!=false){this._renderItems()
}},unselectIndex:function(b,c){if(isNaN(b)){return
}this.selectedIndexes[b]=-1;
var e=false;
for(var d=0;
d<this.selectedIndexes.length;
d++){var b=this.selectedIndexes[d];
if(b!=-1&&b!=undefined){e=true
}}if(!e){this.selectedValue=null;
this.selectedIndex=-1
}if(c==undefined||c==true){this._renderItems();
this._raiseEvent("1",{index:b,type:"api",item:this.getVisibleItem(b),originalEvent:null})
}this._updateInputSelection();
this._raiseEvent("2",{index:b,type:"api",item:this.getItem(b)})
},getItem:function(c){if(c==-1||isNaN(c)||typeof(c)==="string"){if(c===-1){return null
}return this.getItemByValue(c)
}var b=null;
var d=a.each(this.items,function(){if(this.index==c){b=this;
return false
}});
return b
},getVisibleItem:function(b){if(b==-1||isNaN(b)||typeof(b)==="string"){if(b===-1){return null
}return this.getItemByValue(b)
}return this.visibleItems[b]
},getVisibleItems:function(){return this.visibleItems
},checkIndex:function(b,c,e){if(!this.checkboxes){return
}if(isNaN(b)){return
}if(b<0||b>=this.visibleItems.length){return
}if(this.visibleItems[b]!=null&&this.visibleItems[b].disabled){return
}if(this.disabled){return
}var d=this.getItem(b);
if(this.groups.length>0){var d=this.getVisibleItem(b)
}if(d!=null){var f=a(d.checkBoxElement);
d.checked=true;
if(c==undefined||c==true){this._updateCheckedItems()
}}if(e==undefined||e==true){this._raiseEvent(3,{label:d.label,value:d.value,checked:true,item:d})
}},getCheckedItems:function(){if(!this.checkboxes){return null
}var b=new Array();
if(this.items==undefined){return
}a.each(this.items,function(){if(this.checked){b[b.length]=this
}});
return b
},checkAll:function(b){if(!this.checkboxes){return
}if(this.disabled){return
}var c=this;
a.each(this.items,function(){var d=this;
if(b!==false&&d.checked!==true){c._raiseEvent(3,{label:d.label,value:d.value,checked:true,item:d})
}this.checked=true
});
this._updateCheckedItems()
},uncheckAll:function(b){if(!this.checkboxes){return
}if(this.disabled){return
}var c=this;
a.each(this.items,function(){var d=this;
if(b!==false&&d.checked!==false){this.checked=false;
c._raiseEvent(3,{label:d.label,value:d.value,checked:false,item:d})
}this.checked=false
});
this._updateCheckedItems()
},uncheckIndex:function(b,c,e){if(!this.checkboxes){return
}if(isNaN(b)){return
}if(b<0||b>=this.visibleItems.length){return
}if(this.visibleItems[b]!=null&&this.visibleItems[b].disabled){return
}if(this.disabled){return
}var d=this.getItem(b);
if(this.groups.length>0){var d=this.getVisibleItem(b)
}if(d!=null){var f=a(d.checkBoxElement);
d.checked=false;
if(c==undefined||c==true){this._updateCheckedItems()
}}if(e==undefined||e==true){this._raiseEvent(3,{label:d.label,value:d.value,checked:false,item:d})
}},indeterminateIndex:function(b,c,e){if(!this.checkboxes){return
}if(isNaN(b)){return
}if(b<0||b>=this.visibleItems.length){return
}if(this.visibleItems[b]!=null&&this.visibleItems[b].disabled){return
}if(this.disabled){return
}var d=this.getItem(b);
if(this.groups.length>0){var d=this.getVisibleItem(b)
}if(d!=null){var f=a(d.checkBoxElement);
d.checked=null;
if(c==undefined||c==true){this._updateCheckedItems()
}}if(e==undefined||e==true){this._raiseEvent(3,{checked:null})
}},getSelectedIndex:function(){return this.selectedIndex
},getSelectedItems:function(){var b=this.getVisibleItems();
var e=this.selectedIndexes;
var d=[];
for(var c in e){if(e[c]!=-1){d[d.length]=b[c]
}}return d
},getSelectedItem:function(){return this.getItem(this.selectedIndex)
},_updateCheckedItems:function(){var b=this.selectedIndex;
this.clearSelection(false);
var c=this.getCheckedItems();
this.selectedIndex=b;
this._renderItems();
var d=a.data(this.element,"hoveredItem");
if(d!=null){a(d).addClass(this.toThemeProperty("jqx-listitem-state-hover"));
a(d).addClass(this.toThemeProperty("jqx-fill-state-hover"))
}this._updateInputSelection()
},getItemByValue:function(d){if(this.visibleItems==null){return
}if(this.itemsByValue){return this.itemsByValue[a.trim(d).split(" ").join("")]
}var b=this.visibleItems;
for(var c=0;
c<b.length;
c++){if(b[c].value==d){return b[c];
break
}}},checkItem:function(c){if(c!=null){var b=this._getItemByParam(c);
return this.checkIndex(b.index,true)
}return false
},uncheckItem:function(c){if(c!=null){var b=this._getItemByParam(c);
return this.uncheckIndex(b.index,true)
}return false
},indeterminateItem:function(c){if(c!=null){var b=this._getItemByParam(c);
return this.indeterminateIndex(b.index,true)
}return false
},val:function(c){if(this.input&&arguments.length==0){return this.input.val()
}var b=this.getItemByValue(c);
if(b!=null){this.selectItem(b)
}if(this.input){return this.input.val()
}},selectItem:function(c){if(c!=null){if(c.index==undefined){var b=this.getItemByValue(c);
if(b){c=b
}}return this.selectIndex(c.visibleIndex,true)
}return false
},unselectItem:function(c){if(c!=null){if(c.index==undefined){var b=this.getItemByValue(c);
if(b){c=b
}}return this.unselectIndex(c.visibleIndex,true)
}return false
},selectIndex:function(j,q,c,d,m,b){if(isNaN(j)){return
}if(j<-1||j>=this.visibleItems.length){return
}if(this.visibleItems[j]!=null&&this.visibleItems[j].disabled){return
}if(this.disabled){return
}if(!this.multiple&&!this.multipleextended&&this.selectedIndex==j&&!d){if(this.visibleItems&&this.items&&this.visibleItems.length!=this.items.length){h=this.getVisibleItem(j);
if(h){this.selectedValue=h.value
}}return
}if(this.checkboxes){this._updateCheckedItems();
return
}this.focused=true;
var p=false;
if(this.selectedIndex!=j){p=true
}var o=this.selectedIndex;
if(this.selectedIndex==j&&!this.multiple){o=-1
}if(m==undefined){m="none"
}var h=this.getItem(j);
var r=this.getItem(o);
if(this.visibleItems&&this.items&&this.visibleItems.length!=this.items.length){h=this.getVisibleItem(j);
r=this.getVisibleItem(o)
}if(d!=undefined&&d){this._raiseEvent("1",{index:o,type:m,item:r,originalEvent:b});
this.selectedIndex=j;
this.selectedIndexes[o]=-1;
this.selectedIndexes[j]=j;
if(h){this.selectedValue=h.value
}this._raiseEvent("0",{index:j,type:m,item:h,originalEvent:b})
}else{var l=this;
var e=function(s,w,u,v,t,i){l._raiseEvent("1",{index:w,type:u,item:v,originalEvent:i});
l.selectedIndex=s;
l.selectedIndexes=[];
w=s;
l.selectedIndexes[s]=s;
l._raiseEvent("0",{index:s,type:u,item:t,originalEvent:i})
};
var k=function(s,w,u,v,t,i){if(l.selectedIndexes[s]==undefined||l.selectedIndexes[s]==-1){l.selectedIndexes[s]=s;
l.selectedIndex=s;
l._raiseEvent("0",{index:s,type:u,item:t,originalEvent:i})
}else{w=l.selectedIndexes[s];
v=l.getVisibleItem(w);
l.selectedIndexes[s]=-1;
l.selectedIndex=-1;
l._raiseEvent("1",{index:w,type:u,item:v,originalEvent:i})
}};
if(this.multipleextended){if(!this._shiftKey&&!this._ctrlKey){if(m!="keyboard"&&m!="mouse"){k(j,o,m,r,h,b);
l._clickedIndex=j
}else{this.clearSelection(false);
l._clickedIndex=j;
e(j,o,m,r,h,b)
}}else{if(this._ctrlKey){if(m=="keyboard"){this.clearSelection(false);
l._clickedIndex=j
}k(j,o,m,r,h,b)
}else{if(this._shiftKey){if(l._clickedIndex==undefined){l._clickedIndex=o
}var f=Math.min(l._clickedIndex,j);
var n=Math.max(l._clickedIndex,j);
this.clearSelection(false);
for(var g=f;
g<=n;
g++){l.selectedIndexes[g]=g;
l._raiseEvent("0",{index:g,type:m,item:this.getVisibleItem(g),originalEvent:b})
}if(m!="keyboard"){l.selectedIndex=l._clickedIndex
}else{l.selectedIndex=j
}}}}}else{if(this.multiple){k(j,o,m,r,h,b)
}else{if(h){this.selectedValue=h.value
}e(j,o,m,r,h,b)
}}}if(c==undefined||c==true){this._renderItems()
}if(q!=undefined&&q!=null&&q==true){this.ensureVisible(j)
}this._raiseEvent("2",{index:j,item:h,oldItem:r,type:m,originalEvent:b});
this._updateInputSelection();
return p
},_updateInputSelection:function(){if(this.input){if(this.selectedIndex==-1){this.input.val("")
}else{if(this.items){if(this.items[this.selectedIndex]!=undefined){this.input.val(this.items[this.selectedIndex].value)
}}}if(this.multiple||this.multipleextended||this.checkboxes){var b=!this.checkboxes?this.getSelectedItems():this.getCheckedItems();
var d="";
if(b){for(var c=0;
c<b.length;
c++){if(undefined!=b[c]){if(c==b.length-1){d+=b[c].value
}else{d+=b[c].value+","
}}}this.input.val(d)
}}}},isIndexInView:function(c){if(isNaN(c)){return false
}if(!this.items){return false
}if(c<0||c>=this.items.length){return false
}var d=this.vScrollInstance.value;
var e=this.visibleItems[c];
if(e==undefined){return true
}var b=e.initialTop;
var f=e.height;
if(b-d<0||b-d+f>=this.host.outerHeight()){return false
}return true
},_itemsInPage:function(){var b=0;
var c=this;
if(this.items){a.each(this.items,function(){if((this.initialTop+this.height)>=c.content.height()){return false
}b++
})
}return b
},_firstItemIndex:function(){if(this.visibleItems!=null){if(this.visibleItems[0]){if(this.visibleItems[0].isGroup){return this._nextItemIndex(0)
}else{return 0
}}else{return 0
}}return -1
},_lastItemIndex:function(){if(this.visibleItems!=null){if(this.visibleItems[this.visibleItems.length-1]){if(this.visibleItems[this.visibleItems.length-1].isGroup){return this._prevItemIndex(this.visibleItems.length-1)
}else{return this.visibleItems.length-1
}}else{return this.visibleItems.length-1
}}return -1
},_nextItemIndex:function(b){for(indx=b+1;
indx<this.visibleItems.length;
indx++){if(this.visibleItems[indx]){if(!this.visibleItems[indx].disabled&&!this.visibleItems[indx].isGroup){return indx
}}}return -1
},_prevItemIndex:function(b){for(indx=b-1;
indx>=0;
indx--){if(this.visibleItems[indx]){if(!this.visibleItems[indx].disabled&&!this.visibleItems[indx].isGroup){return indx
}}}return -1
},_getMatches:function(g,d){if(g==undefined||g.length==0){return -1
}if(d==undefined){d=0
}var b=this.getItems();
var f=this;
var c=-1;
var e=0;
a.each(b,function(h){var j="";
if(!this.isGroup){if(this.label){j=this.label.toString()
}else{if(this.value){j=this.value.toString()
}else{if(this.title){j=this.title.toString()
}else{j="jqxItem"
}}}var i=false;
switch(f.searchMode){case"containsignorecase":i=a.jqx.string.containsIgnoreCase(j,g);
break;
case"contains":i=a.jqx.string.contains(j,g);
break;
case"equals":i=a.jqx.string.equals(j,g);
break;
case"equalsignorecase":i=a.jqx.string.equalsIgnoreCase(j,g);
break;
case"startswith":i=a.jqx.string.startsWith(j,g);
break;
case"startswithignorecase":i=a.jqx.string.startsWithIgnoreCase(j,g);
break;
case"endswith":i=a.jqx.string.endsWith(j,g);
break;
case"endswithignorecase":i=a.jqx.string.endsWithIgnoreCase(j,g);
break
}if(i&&this.visibleIndex>=d){c=this.visibleIndex;
return false
}}});
return c
},findItems:function(e){var b=this.getItems();
var d=this;
var c=0;
var f=new Array();
a.each(b,function(g){var i="";
if(!this.isGroup){if(this.label){i=this.label
}else{if(this.value){i=this.value
}else{if(this.title){i=this.title
}else{i="jqxItem"
}}}var h=false;
switch(d.searchMode){case"containsignorecase":h=a.jqx.string.containsIgnoreCase(i,e);
break;
case"contains":h=a.jqx.string.contains(i,e);
break;
case"equals":h=a.jqx.string.equals(i,e);
break;
case"equalsignorecase":h=a.jqx.string.equalsIgnoreCase(i,e);
break;
case"startswith":h=a.jqx.string.startsWith(i,e);
break;
case"startswithignorecase":h=a.jqx.string.startsWithIgnoreCase(i,e);
break;
case"endswith":h=a.jqx.string.endsWith(i,e);
break;
case"endswithignorecase":h=a.jqx.string.endsWithIgnoreCase(i,e);
break
}if(h){f[c++]=this
}}});
return f
},_handleKeyDown:function(j){var o=j.keyCode;
var g=this;
var c=g.selectedIndex;
var q=g.selectedIndex;
var h=false;
if(!this.keyboardNavigation||!this.enableSelection){return
}var f=function(){if(g.multiple){g.clearSelection(false)
}};
if(j.altKey){o=-1
}if(g.incrementalSearch){var k=-1;
if(!g._searchString){g._searchString=""
}if((o==8||o==46)&&g._searchString.length>=1){g._searchString=g._searchString.substr(0,g._searchString.length-1)
}var n=String.fromCharCode(o);
var i=(!isNaN(parseInt(n)));
var e=false;
if((o>=65&&o<=97)||i||o==8||o==32||o==46){if(!j.shiftKey){n=n.toLocaleLowerCase()
}var r=1+g.selectedIndex;
if(o!=8&&o!=32&&o!=46){if(g._searchString.length>0&&g._searchString.substr(0,1)==n){r=1+g.selectedIndex
}else{g._searchString+=n
}}if(o==32){g._searchString+=" "
}var b=this._getMatches(g._searchString,r);
k=b;
if(k==g._lastMatchIndex||k==-1){var b=this._getMatches(g._searchString,0);
k=b
}g._lastMatchIndex=k;
if(k>=0){var d=function(){f();
g.selectIndex(k,false,false,false,"keyboard",j);
var t=g.isIndexInView(k);
if(!t){g.ensureVisible(k)
}else{g._renderItems()
}};
if(g._toSelectTimer){clearTimeout(g._toSelectTimer)
}g._toSelectTimer=setTimeout(function(){d()
},g.incrementalSearchKeyDownDelay)
}e=true
}if(g._searchTimer!=undefined){clearTimeout(g._searchTimer)
}if(o==27||o==13){g._searchString=""
}g._searchTimer=setTimeout(function(){g._searchString="";
g._renderItems()
},g.incrementalSearchDelay);
if(k>=0){return
}if(e){return false
}}if(this.checkboxes){return true
}if(o==33){var l=g._itemsInPage();
if(g.selectedIndex-l>=0){f();
g.selectIndex(q-l,false,false,false,"keyboard",j)
}else{f();
g.selectIndex(g._firstItemIndex(),false,false,false,"keyboard",j)
}g._searchString=""
}if(o==32&&this.checkboxes){var s=this.getItem(c);
if(s!=null){g._updateItemCheck(s,c);
j.preventDefault()
}g._searchString=""
}if(o==36){f();
g.selectIndex(g._firstItemIndex(),false,false,false,"keyboard",j);
g._searchString=""
}if(o==35){f();
g.selectIndex(g._lastItemIndex(),false,false,false,"keyboard",j);
g._searchString=""
}if(o==34){var l=g._itemsInPage();
if(g.selectedIndex+l<g.visibleItems.length){f();
g.selectIndex(q+l,false,false,false,"keyboard",j)
}else{f();
g.selectIndex(g._lastItemIndex(),false,false,false,"keyboard",j)
}g._searchString=""
}if(o==38){g._searchString="";
if(g.selectedIndex>0){var p=g._prevItemIndex(g.selectedIndex);
if(p!=g.selectedIndex&&p!=-1){f();
g.selectIndex(p,false,false,false,"keyboard",j)
}else{return true
}}else{return false
}}else{if(o==40){g._searchString="";
if(g.selectedIndex+1<g.visibleItems.length){var p=g._nextItemIndex(g.selectedIndex);
if(p!=g.selectedIndex&&p!=-1){f();
g.selectIndex(p,false,false,false,"keyboard",j)
}else{return true
}}else{return false
}}}if(o==35||o==36||o==38||o==40||o==34||o==33){var m=g.isIndexInView(g.selectedIndex);
if(!m){g.ensureVisible(g.selectedIndex)
}else{g._renderItems()
}return false
}return true
},_updateItemCheck:function(b,c){if(this.disabled){return
}if(b.checked==true){b.checked=(b.hasThreeStates&&this.hasThreeStates)?null:false
}else{b.checked=b.checked!=null
}switch(b.checked){case true:this.checkIndex(c);
break;
case false:this.uncheckIndex(c);
break;
default:this.indeterminateIndex(c);
break
}},wheel:function(d,c){if(c.autoHeight||!c.enableMouseWheel){d.returnValue=true;
return true
}if(c.disabled){return true
}var e=0;
if(!d){d=window.event
}if(d.originalEvent&&d.originalEvent.wheelDelta){d.wheelDelta=d.originalEvent.wheelDelta
}if(d.wheelDelta){e=d.wheelDelta/120
}else{if(d.detail){e=-d.detail/3
}}if(e){var b=c._handleDelta(e);
if(b){if(d.preventDefault){d.preventDefault()
}if(d.originalEvent!=null){d.originalEvent.mouseHandled=true
}if(d.stopPropagation!=undefined){d.stopPropagation()
}}if(b){b=false;
d.returnValue=b;
return b
}else{return false
}}if(d.preventDefault){d.preventDefault()
}d.returnValue=false
},_handleDelta:function(d){var c=this.vScrollInstance.value;
if(d<0){this.scrollDown()
}else{this.scrollUp()
}var b=this.vScrollInstance.value;
if(c!=b){return true
}return false
},focus:function(){try{this.focused=true;
this.host.focus();
var c=this;
setTimeout(function(){c.host.focus()
},10)
}catch(b){}},_removeHandlers:function(){var b=this;
this.removeHandler(a(document),"keydown.listbox"+this.element.id);
this.removeHandler(a(document),"keyup.listbox"+this.element.id);
this.removeHandler(this.vScrollBar,"valuechanged");
this.removeHandler(this.hScrollBar,"valuechanged");
if(this._mousewheelfunc){this.removeHandler(this.host,"mousewheel",this._mousewheelfunc)
}else{this.removeHandler(this.host,"mousewheel")
}this.removeHandler(this.host,"keydown");
this.removeHandler(this.content,"mouseleave");
this.removeHandler(this.content,"focus");
this.removeHandler(this.content,"blur");
this.removeHandler(this.host,"focus");
this.removeHandler(this.host,"blur");
this.removeHandler(this.content,"mouseenter");
this.removeHandler(this.content,"mouseup");
this.removeHandler(this.content,"mousedown");
this.removeHandler(this.content,"touchend");
if(this._mousemovefunc){this.removeHandler(this.content,"mousemove",this._mousemovefunc)
}else{this.removeHandler(this.content,"mousemove")
}this.removeHandler(this.content,"selectstart");
if(this.overlayContent){this.removeHandler(this.overlayContent,a.jqx.mobile.getTouchEventName("touchend"))
}},_updateSize:function(){if(!this.virtualSize){this._oldheight=null;
this.virtualSize=this._calculateVirtualSize()
}var b=this;
b._arrange();
if(b.host.height()!=b._oldheight||b.host.width()!=b._oldwidth){var c=b.host.width()!=b._oldwidth;
if(b.autoItemsHeight){b._render(false)
}else{if(b.items){if(b.items.length>0&&b.virtualItemsCount*b.items[0].height<b._oldheight-2){b._render(false)
}else{var d=b.vScrollInstance.value;
b._updatescrollbars();
b._renderItems();
if(d<b.vScrollInstance.max){b.vScrollInstance.setPosition(d)
}else{b.vScrollInstance.setPosition(b.vScrollInstance.max)
}}}}b._oldwidth=b.host.width();
b._oldheight=b.host.height()
}},_addHandlers:function(){var l=this;
this.focused=false;
var m=false;
var j=0;
var g=null;
var j=0;
var b=0;
var h=new Date();
var e=this.isTouchDevice();
this.addHandler(this.vScrollBar,"valuechanged",function(n){if(a.jqx.browser.msie&&a.jqx.browser.version>9){setTimeout(function(){l._renderItems()
},1)
}else{l._renderItems()
}});
this.addHandler(this.hScrollBar,"valuechanged",function(){l._renderItems()
});
if(this._mousewheelfunc){this.removeHandler(this.host,"mousewheel",this._mousewheelfunc)
}this._mousewheelfunc=function(n){l.wheel(n,l)
};
this.addHandler(this.host,"mousewheel",this._mousewheelfunc);
this.addHandler(a(document),"keydown.listbox"+this.element.id,function(n){l._ctrlKey=n.ctrlKey;
l._shiftKey=n.shiftKey
});
this.addHandler(a(document),"keyup.listbox"+this.element.id,function(n){l._ctrlKey=n.ctrlKey;
l._shiftKey=n.shiftKey
});
this.addHandler(this.host,"keydown",function(n){return l._handleKeyDown(n)
});
this.addHandler(this.content,"mouseleave",function(n){l.focused=false;
var o=a.data(l.element,"hoveredItem");
if(o!=null){a(o).removeClass(l.toThemeProperty("jqx-listitem-state-hover"));
a(o).removeClass(l.toThemeProperty("jqx-fill-state-hover"));
a.data(l.element,"hoveredItem",null)
}});
this.addHandler(this.content,"focus",function(n){if(!l.disabled){l.host.addClass(l.toThemeProperty("jqx-fill-state-focus"));
l.focused=true
}});
this.addHandler(this.content,"blur",function(n){l.focused=false;
l.host.removeClass(l.toThemeProperty("jqx-fill-state-focus"))
});
this.addHandler(this.host,"focus",function(n){if(!l.disabled){l.host.addClass(l.toThemeProperty("jqx-fill-state-focus"));
l.focused=true
}});
this.addHandler(this.host,"blur",function(n){if(a.jqx.browser.msie&&a.jqx.browser.version<9&&l.focused){return
}l.host.removeClass(l.toThemeProperty("jqx-fill-state-focus"));
l.focused=false
});
this.addHandler(this.content,"mouseenter",function(n){l.focused=true
});
var c=a.jqx.utilities.hasTransform(this.host);
if(this.enableSelection){var f=l.isTouchDevice()&&this.touchMode!==true;
var i=!f?"mousedown":"touchend";
var k=!f?"mouseup":"touchend";
if(this.overlayContent){this.addHandler(this.overlayContent,a.jqx.mobile.getTouchEventName("touchend"),function(p){if(!l.enableSelection){return true
}if(f){l._newScroll=new Date();
if(l._newScroll-l._lastScroll<500){return true
}}var s=a.jqx.mobile.getTouches(p);
var t=s[0];
if(t!=undefined){var n=l.host.offset();
var r=parseInt(t.pageX);
var q=parseInt(t.pageY);
if(l.touchMode==true){r=parseInt(t._pageX);
q=parseInt(t._pageY)
}r=r-n.left;
q=q-n.top;
var o=l._hitTest(r,q);
if(o!=null&&!o.isGroup){l._newScroll=new Date();
if(l._newScroll-l._lastScroll<500){return false
}if(l.checkboxes){l._updateItemCheck(o,o.visibleIndex);
return
}if(o.html.indexOf("href")!=-1){setTimeout(function(){l.selectIndex(o.visibleIndex,false,true,false,"mouse",p);
l.content.trigger("click");
return false
},100)
}else{l.selectIndex(o.visibleIndex,false,true,false,"mouse",p);
l.content.trigger("click");
return false
}}}})
}else{var d=false;
this.addHandler(this.content,i,function(n){if(!l.enableSelection){return true
}d=true;
if(f){l._newScroll=new Date();
if(l._newScroll-l._lastScroll<500){return false
}}l.focused=true;
if(!l.isTouchDevice()&&l.focusable){l.host.focus()
}if(n.target.id!=("listBoxContent"+l.element.id)&&l.itemswrapper[0]!=n.target){var r=n.target;
var x=a(r).offset();
var q=l.host.offset();
if(c){var o=a.jqx.mobile.getLeftPos(r);
var t=a.jqx.mobile.getTopPos(r);
x.left=o;
x.top=t;
o=a.jqx.mobile.getLeftPos(l.element);
t=a.jqx.mobile.getTopPos(l.element);
q.left=o;
q.top=t
}var s=parseInt(x.top)-parseInt(q.top);
var v=parseInt(x.left)-parseInt(q.left);
var w=l._hitTest(v,s);
if(w!=null&&!w.isGroup){var p=function(D,A){if(!l._shiftKey){l._clickedIndex=D.visibleIndex
}if(!l.checkboxes){l.selectIndex(D.visibleIndex,false,true,false,"mouse",A)
}else{l.selectedIndex=D.visibleIndex;
v=20+A.pageX-x.left;
if(l.rtl){var y=l.hScrollBar.css("visibility")!="hidden"?l.hScrollInstance.max:l.host.width();
if(v<=l.host.width()-20){if(!l.allowDrag){l._updateItemCheck(D,D.visibleIndex)
}else{setTimeout(function(){if(!l._dragItem){if(!d){l._updateItemCheck(D,D.visibleIndex)
}}},200)
}}}else{if(v+l.hScrollInstance.value>=20){if(!l.allowDrag){l._updateItemCheck(D,D.visibleIndex)
}else{setTimeout(function(){if(!l._dragItem){if(!d){l._updateItemCheck(D,D.visibleIndex)
}}},200)
}}}}};
if(!w.disabled){if(w.html.indexOf("href")!=-1){setTimeout(function(){p(w,n)
},100)
}else{p(w,n)
}}}if(i=="mousedown"){var u=false;
if(n.which){u=(n.which==3)
}else{if(n.button){u=(n.button==2)
}}if(u){return true
}return false
}}return true
})
}this.addHandler(this.content,"mouseup",function(n){l.vScrollInstance.handlemouseup(l,n);
d=false
});
if(a.jqx.browser.msie){this.addHandler(this.content,"selectstart",function(n){return false
})
}}var e=this.isTouchDevice();
if(this.enableHover&&!e){this._mousemovefunc=function(p){if(e){return true
}if(!l.enableHover){return true
}var r=a.jqx.browser.msie==true&&a.jqx.browser.version<9?0:1;
if(p.target==null){return true
}if(l.disabled){return true
}l.focused=true;
var t=l.vScrollInstance.isScrolling();
if(!t&&p.target.id!=("listBoxContent"+l.element.id)){if(l.itemswrapper[0]!=p.target){var v=p.target;
var o=a(v).offset();
var u=l.host.offset();
if(c){var q=a.jqx.mobile.getLeftPos(v);
var x=a.jqx.mobile.getTopPos(v);
o.left=q;
o.top=x;
q=a.jqx.mobile.getLeftPos(l.element);
x=a.jqx.mobile.getTopPos(l.element);
u.left=q;
u.top=x
}var w=parseInt(o.top)-parseInt(u.top);
var z=parseInt(o.left)-parseInt(u.left);
var A=l._hitTest(z,w);
if(A!=null&&!A.isGroup&&!A.disabled){var s=a.data(l.element,"hoveredItem");
if(s!=null){a(s).removeClass(l.toThemeProperty("jqx-listitem-state-hover"));
a(s).removeClass(l.toThemeProperty("jqx-fill-state-hover"))
}a.data(l.element,"hoveredItem",A.element);
var n=a(A.element);
n.addClass(l.toThemeProperty("jqx-listitem-state-hover"));
n.addClass(l.toThemeProperty("jqx-fill-state-hover"))
}}}};
this.addHandler(this.content,"mousemove",this._mousemovefunc)
}},_arrange:function(t){if(t==undefined){t=true
}var o=null;
var m=null;
var s=this;
var i=function(h){h=s.host.height();
if(h==0){h=200;
s.host.height(h)
}return h
};
if(this.width!=null&&this.width.toString().indexOf("px")!=-1){o=this.width
}else{if(this.width!=undefined&&!isNaN(this.width)){o=this.width
}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){m=this.height
}else{if(this.height!=undefined&&!isNaN(this.height)){m=this.height
}}if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.css("width",this.width);
o=this.host.width()
}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.css("height",this.height);
m=i(m)
}if(o!=null){o=parseInt(o);
if(parseInt(this.element.style.width)!=parseInt(this.width)){this.host.width(this.width)
}}if(!this.autoHeight){if(m!=null){m=parseInt(m);
if(parseInt(this.element.style.height)!=parseInt(this.height)){this.host.height(this.height);
i(m)
}}}else{if(this.virtualSize){if(this.hScrollBar.css("visibility")!="hidden"){this.host.height(this.virtualSize.height+parseInt(this.scrollBarSize)+3);
this.height=this.virtualSize.height+parseInt(this.scrollBarSize)+3;
m=this.height
}else{this.host.height(this.virtualSize.height);
this.height=this.virtualSize.height;
m=this.virtualSize.height
}}}var c=this.scrollBarSize;
if(isNaN(c)){c=parseInt(c);
if(isNaN(c)){c="17px"
}else{c=c+"px"
}}c=parseInt(c);
var l=4;
var e=2;
var f=0;
if(this.vScrollBar){if(this.vScrollBar[0].style.visibility!="hidden"){f=c+l
}else{this.vScrollInstance.setPosition(0)
}}else{return
}if(this.hScrollBar){if(this.hScrollBar[0].style.visibility!="hidden"){e=c+l
}else{this.hScrollInstance.setPosition(0)
}}else{return
}if(this.autoItemsHeight){this.hScrollBar[0].style.visibility="hidden";
e=0
}if(m==null){m=0
}var p=parseInt(m)-l-c;
if(p<0){p=0
}if(parseInt(this.hScrollBar[0].style.height)!=c){if(parseInt(c)<0){c=0
}this.hScrollBar[0].style.height=parseInt(c)+"px"
}if(this.hScrollBar[0].style.top!=p+"px"){this.hScrollBar[0].style.top=p+"px";
this.hScrollBar[0].style.left="0px"
}var b=o-c-l;
if(b<0){b=0
}var k=b+"px";
if(this.hScrollBar[0].style.width!=k){this.hScrollBar[0].style.width=k
}if(f==0){if(o>=2){this.hScrollBar[0].style.width=parseInt(o-2)+"px"
}}if(c!=parseInt(this.vScrollBar[0].style.width)){this.vScrollBar[0].style.width=parseInt(c)+"px"
}if((parseInt(m)-e)!=parseInt(this.vScrollBar[0].style.height)){var r=parseInt(m)-e;
if(r<0){r=0
}this.vScrollBar[0].style.height=r+"px"
}if(o==null){o=0
}var d=parseInt(o)-parseInt(c)-l+"px";
if(d!=this.vScrollBar[0].style.left){if(parseInt(d)>=0){this.vScrollBar[0].style.left=d
}this.vScrollBar[0].style.top="0px"
}var j=this.vScrollInstance;
j.disabled=this.disabled;
if(t){j._arrange()
}var n=this.hScrollInstance;
n.disabled=this.disabled;
if(t){n._arrange()
}if((this.vScrollBar[0].style.visibility!="hidden")&&(this.hScrollBar[0].style.visibility!="hidden")){this.bottomRight[0].style.visibility="inherit";
this.bottomRight[0].style.left=1+parseInt(this.vScrollBar[0].style.left)+"px";
this.bottomRight[0].style.top=1+parseInt(this.hScrollBar[0].style.top)+"px";
if(this.rtl){this.bottomRight.css({left:0})
}this.bottomRight[0].style.width=parseInt(c)+3+"px";
this.bottomRight[0].style.height=parseInt(c)+3+"px"
}else{this.bottomRight[0].style.visibility="hidden"
}if(parseInt(this.content[0].style.width)!=(parseInt(o)-f)){var g=parseInt(o)-f;
if(g<0){g=0
}this.content[0].style.width=g+"px"
}if(this.rtl){this.vScrollBar.css({left:0+"px",top:"0px"});
this.hScrollBar.css({left:this.vScrollBar.width()+2+"px"});
if(this.vScrollBar[0].style.visibility!="hidden"){this.content.css("margin-left",4+this.vScrollBar.width())
}else{this.content.css("margin-left",0);
this.hScrollBar.css({left:"0px"})
}}if(parseInt(this.content[0].style.height)!=(parseInt(m)-e)){var q=parseInt(m)-e;
if(q<0){q=0
}this.content[0].style.height=q+"px"
}if(this.overlayContent){this.overlayContent.width(parseInt(o)-f);
this.overlayContent.height(parseInt(m)-e)
}},ensureVisible:function(e){if(isNaN(e)){var f=this.getItemByValue(e);
if(f){e=f.index
}}var c=this.isIndexInView(e);
if(!c){if(e<0){return
}if(this.autoHeight){var b=a.data(this.vScrollBar[0],"jqxScrollBar").instance;
b.setPosition(0)
}else{for(indx=0;
indx<this.visibleItems.length;
indx++){var f=this.visibleItems[indx];
if(f.visibleIndex==e&&!f.isGroup){var b=a.data(this.vScrollBar[0],"jqxScrollBar").instance;
var g=b.value;
var d=this.hScrollBar.css("visibility")==="hidden";
var h=d?0:this.scrollBarSize+4;
if(f.initialTop<g){b.setPosition(f.initialTop)
}else{if(f.initialTop+f.height>g+this.host.height()){b.setPosition(f.initialTop+f.height+2-this.host.height()+h)
}}break
}}}}this._renderItems()
},scrollTo:function(c,b){if(this.vScrollBar.css("visibility")!="hidden"){this.vScrollInstance.setPosition(b)
}if(this.hScrollBar.css("visibility")!="hidden"){this.hScrollInstance.setPosition(c)
}},scrollDown:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false
}var b=this.vScrollInstance;
if(b.value+b.largestep<=b.max){b.setPosition(b.value+b.largestep);
return true
}else{b.setPosition(b.max);
return true
}return false
},scrollUp:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false
}var b=this.vScrollInstance;
if(b.value-b.largestep>=b.min){b.setPosition(b.value-b.largestep);
return true
}else{if(b.value!=b.min){b.setPosition(b.min);
return true
}}return false
},databind:function(b,d){this.records=new Array();
var f=b._source?true:false;
var c=new a.jqx.dataAdapter(b,{autoBind:false});
if(f){c=b;
b=b._source
}var e=function(k){if(b.type!=undefined){c._options.type=b.type
}if(b.formatdata!=undefined){c._options.formatData=b.formatdata
}if(b.contenttype!=undefined){c._options.contentType=b.contenttype
}if(b.async!=undefined){c._options.async=b.async
}};
var h=function(p,q){var s=function(t){if(typeof t==="string"){var v=t;
var w=t
}else{var w=t[p.valueMember];
var v=t[p.displayMember]
}var u=new a.jqx._jqxListBox.item();
u.label=v;
u.value=w;
u.html="";
u.visible=true;
u.originalItem=t;
u.group="";
u.groupHtml="";
u.disabled=false;
u.hasThreeStates=true;
return u
};
if(q!=undefined){var k=c._changedrecords[0];
if(k){a.each(c._changedrecords,function(){var t=this.index;
var u=this.record;
if(q!="remove"){var v=s(u)
}switch(q){case"update":p.updateAt(v,t);
break;
case"add":p.insertAt(v,t);
break;
case"remove":p.removeAt(t);
break
}});
return
}}p.records=c.records;
var m=p.records.length;
p.items=new Array();
p.itemsByValue=new Array();
for(var l=0;
l<m;
l++){var n=p.records[l];
var o=s(n);
o.index=l;
p.items[l]=o;
var r=o.value;
if(o.value==""||o.value==null){r=l
}p.itemsByValue[a.trim(r).split(" ").join("")]=o
}p._render();
p._raiseEvent("6")
};
e(this);
var i=this;
switch(b.datatype){case"local":case"array":default:if(b.localdata!=null){c.unbindBindingUpdate(this.element.id);
if(this.autoBind||(!this.autoBind&&!d)){c.dataBind()
}h(this);
c.bindBindingUpdate(this.element.id,function(k){h(i,k)
})
}break;
case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"csv":case"tab":if(b.localdata!=null){c.unbindBindingUpdate(this.element.id);
if(this.autoBind||(!this.autoBind&&!d)){c.dataBind()
}h(this);
c.bindBindingUpdate(this.element.id,function(){h(i)
});
return
}var j={};
if(c._options.data){a.extend(c._options.data,j)
}else{if(b.data){a.extend(j,b.data)
}c._options.data=j
}var g=function(){h(i)
};
c.unbindDownloadComplete(i.element.id);
c.bindDownloadComplete(i.element.id,g);
if(this.autoBind||(!this.autoBind&&!d)){c.dataBind()
}}},loadItems:function(m){if(m==null){this.groups=new Array();
this.items=new Array();
this.visualItems=new Array();
return
}var s=this;
var k=0;
var d=0;
var b=0;
this.groups=new Array();
this.items=new Array();
this.visualItems=new Array();
var e=new Array();
this.itemsByValue=new Array();
a.map(m,function(v){if(v==undefined){return null
}var j=new a.jqx._jqxListBox.item();
var w=v.group;
var i=v.groupHtml;
var x=v.title;
if(x==null||x==undefined){x=""
}if(w==null||w==undefined){w=""
}if(i==null||i==undefined){i=""
}if(!s.groups[w]){s.groups[w]={items:new Array(),index:-1,caption:w,captionHtml:i};
k++;
var t=k+"jqxGroup";
s.groups[t]=s.groups[w];
d++;
s.groups.length=d
}var u=s.groups[w];
u.index++;
u.items[u.index]=j;
if(typeof v==="string"){j.label=v;
j.value=v
}else{if(v.label==null&&v.value==null&&v.html==null&&v.group==null&&v.groupHtml==null){j.label=v.toString();
j.value=v.toString()
}else{j.label=v.label||v.value;
j.value=v.value||v.label
}}if(typeof v!="string"){if(s.displayMember!=""){if(v[s.displayMember]!=undefined){j.label=v[s.displayMember]
}else{j.label=""
}}if(s.valueMember!=""){j.value=v[s.valueMember]
}}j.hasThreeStates=v.hasThreeStates!=undefined?v.hasThreeStates:true;
j.originalItem=v;
j.title=x;
j.html=v.html||"";
if(v.html&&v.html!=""){if(x&&x!=""){}}j.group=w;
j.checked=v.checked||false;
j.groupHtml=v.groupHtml||"";
j.disabled=v.disabled||false;
j.visible=v.visible!=undefined?v.visible:true;
j.index=b;
e[b]=j;
b++;
return j
});
var c=new Array();
var o=0;
if(this.fromSelect==undefined||this.fromSelect==false){for(var h=0;
h<d;
h++){var k=h+1;
var n=k+"jqxGroup";
var q=this.groups[n];
if(q==undefined||q==null){break
}if(h==0&&q.caption==""&&q.captionHtml==""&&d<=1){for(var g=0;
g<q.items.length;
g++){var p=q.items[g].value;
if(q.items[g].value==undefined||q.items[g].value==null){p=g
}this.itemsByValue[a.trim(p).split(" ").join("")]=q.items[g]
}return q.items
}else{var l=new a.jqx._jqxListBox.item();
l.isGroup=true;
l.label=q.caption;
if(q.caption==""&&q.captionHtml==""){q.caption=this.emptyGroupText;
l.label=q.caption
}l.html=q.captionHtml;
c[o]=l;
o++
}for(var f=0;
f<q.items.length;
f++){c[o]=q.items[f];
var p=q.items[f].value;
if(q.items[f].value==""||q.items[f].value==null){p=o
}s.itemsByValue[a.trim(p).split(" ").join("")]=q.items[f];
o++
}}}else{var o=0;
var r=new Array();
a.each(e,function(){if(!r[this.group]){if(this.group!=""){var i=new a.jqx._jqxListBox.item();
i.isGroup=true;
i.label=this.group;
c[o]=i;
o++;
r[this.group]=true
}}c[o]=this;
var j=this.value;
if(this.value==""||this.value==null){j=o-1
}s.itemsByValue[a.trim(j).split(" ").join("")]=this;
o++
})
}return c
},_mapItem:function(c){var b=new a.jqx._jqxListBox.item();
if(this.displayMember){if(c.label==undefined){c.label=c[this.displayMember]
}if(c.value==undefined){c.value=c[this.valueMember]
}}if(typeof c==="string"){b.label=c;
b.value=c
}else{if(typeof c==="number"){b.label=c.toString();
b.value=c.toString()
}else{b.label=c.label||c.value;
b.value=c.value||c.label
}}if(b.label==undefined&&b.value==undefined&&b.html==undefined){b.label=b.value=c
}b.html=c.html||"";
b.group=c.group||"";
b.checked=c.checked||false;
b.title=c.title||"";
b.groupHtml=c.groupHtml||"";
b.disabled=c.disabled||false;
b.visible=c.visible||true;
return b
},addItem:function(b){return this.insertAt(b,this.items?this.items.length:0)
},_getItemByParam:function(c){if(c!=null){if(c.index==undefined){var b=this.getItemByValue(c);
if(b){c=b
}}}return c
},insertItem:function(d,b){var c=this._getItemByParam(d);
return this.insertAt(c,b)
},updateItem:function(c,d){var b=this._getItemByParam(d);
if(b&&b.index!=undefined){return this.updateAt(c,b.index)
}return false
},updateAt:function(d,c){if(d!=null){var b=this._mapItem(d);
this.itemsByValue[a.trim(b.value).split(" ").join("")]=this.items[c];
this.items[c].value=b.value;
this.items[c].label=b.label;
this.items[c].html=b.html;
this.items[c].disabled=b.disabled
}this._cachedItemHtml=[];
this._renderItems();
if(this.rendered){this.rendered()
}},insertAt:function(l,f){if(l==null){return false
}this._cachedItemHtml=[];
if(this.items==undefined||this.items.length==0){this.source=new Array();
this.refresh();
var g=this._mapItem(l);
g.index=0;
this.items[this.items.length]=g;
this._addItems(true);
this._renderItems();
if(this.rendered){this.rendered()
}if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()
}var k=g.value;
if(g.value==""||g.value==null){k=f
}this.itemsByValue[a.trim(k).split(" ").join("")]=g;
return false
}var g=this._mapItem(l);
if(f==-1||f==undefined||f==null||f>=this.items.length){g.index=this.items.length;
this.items[this.items.length]=g
}else{var c=new Array();
var j=0;
var e=false;
var h=0;
for(var b=0;
b<this.items.length;
b++){if(this.items[b].isGroup==false){if(h>=f&&!e){c[j++]=g;
g.index=f;
h++;
e=true
}}c[j]=this.items[b];
if(!this.items[b].isGroup){c[j].index=h;
h++
}j++
}this.items=c
}var k=g.value;
if(g.value==""||g.value==null){k=f
}this.itemsByValue[a.trim(k).split(" ").join("")]=g;
this.visibleItems=new Array();
this.renderedVisibleItems=new Array();
var d=a.data(this.vScrollBar[0],"jqxScrollBar").instance;
var i=d.value;
d.setPosition(0);
if((this.allowDrag&&this._enableDragDrop)||(this.virtualSize&&this.virtualSize.height<10+this.host.height())){this._addItems(true)
}else{this._addItems(false)
}this._renderItems();
if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()
}d.setPosition(i);
if(this.rendered){this.rendered()
}return true
},removeAt:function(h){if(h<0||h>this.items.length-1){return false
}if(h==undefined){return false
}var d=this.items[h].height;
var m=this.items[h].value;
if(m==""||m==null){m=h
}this.itemsByValue[a.trim(m).split(" ").join("")]=null;
this.items.splice(h,1);
var c=new Array();
var l=0;
var f=false;
var j=0;
for(var b=0;
b<this.items.length;
b++){c[l]=this.items[b];
if(!this.items[b].isGroup){c[l].index=j;
j++
}l++
}this.items=c;
var e=a.data(this.vScrollBar[0],"jqxScrollBar").instance;
var e=a.data(this.vScrollBar[0],"jqxScrollBar").instance;
var k=e.value;
e.setPosition(0);
this.visibleItems=new Array();
this.renderedVisibleItems=new Array();
if(this.items.length>0){if(this.virtualSize){this.virtualSize.height-=d;
var n=this.virtualSize.itemsPerPage*2;
if(this.autoHeight){n=this.items.length
}this.virtualItemsCount=Math.min(n,this.items.length)
}this._updatescrollbars()
}else{this._addItems()
}this._renderItems();
if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()
}if(this.vScrollBar.css("visibility")!="hidden"){e.setPosition(k)
}else{e.setPosition(0)
}this.itemsByValue=new Array();
for(var g=0;
g<this.items.length;
g++){var m=this.items[g].value;
if(this.items[g].value==""||this.items[g].value==null){m=g
}this.itemsByValue[a.trim(m).split(" ").join("")]=this.items[g]
}if(this.rendered){this.rendered()
}return true
},removeItem:function(e,f){var d=this._getItemByParam(e);
var b=-1;
if(d&&d.index!=undefined&&f!==true){for(var c=0;
c<this.items.length;
c++){if(this.items[c].label==d.label&&this.items[c].value==d.value){b=c;
break
}}if(b!=-1){return this.removeAt(b)
}}if(b==-1){return this.removeAt(d.index)
}},getItems:function(){return this.items
},disableItem:function(c){var b=this._getItemByParam(c);
this.disableAt(b.index)
},enableItem:function(c){var b=this._getItemByParam(c);
this.enableAt(b.index)
},disableAt:function(b){if(!this.items){return false
}if(b<0||b>this.items.length-1){return false
}this.items[b].disabled=true;
this._renderItems();
return true
},enableAt:function(b){if(!this.items){return false
}if(b<0||b>this.items.length-1){return false
}this.items[b].disabled=false;
this._renderItems();
return true
},destroy:function(){if(this.source&&this.source.unbindBindingUpdate){this.source.unbindBindingUpdate(this.element.id)
}this._removeHandlers();
this.vScrollBar.jqxScrollBar("destroy");
this.hScrollBar.jqxScrollBar("destroy");
this.vScrollBar.remove();
this.hScrollBar.remove();
this.content.remove();
a.jqx.utilities.resize(this.host,null,true);
var b=a.data(this.element,"jqxListBox");
delete this.hScrollInstance;
delete this.vScrollInstance;
delete this.vScrollBar;
delete this.hScrollBar;
delete this.content;
delete this.bottomRight;
delete this.itemswrapper;
delete this.visualItems;
delete this.visibleItems;
delete this.items;
delete this.groups;
delete this.renderedVisibleItems;
delete this._mousewheelfunc;
delete this._mousemovefunc;
delete this._cachedItemHtml;
delete this.itemsByValue;
delete this._activeElement;
delete this.source;
delete this.events;
if(this.input){this.input.remove();
delete this.input
}if(b){delete b.instance
}this.host.removeData();
this.host.removeClass();
this.host.remove();
this.element=null;
delete this.element;
this.host=null;
delete this.set;
delete this.get;
delete this.call;
delete this.host
},_raiseEvent:function(f,c){if(this._stopEvents==true){return true
}if(c==undefined){c={owner:null}
}var d=this.events[f];
args=c;
args.owner=this;
this._updateInputSelection();
var e=new jQuery.Event(d);
e.owner=this;
e.args=args;
if(this.host!=null){var b=this.host.trigger(e)
}return b
}})
})(jQuery);
(function(a){a.jqx._jqxListBox.item=function(){var b={group:"",groupHtml:"",selected:false,isGroup:false,highlighted:false,value:null,label:"",html:null,visible:true,disabled:false,element:null,width:null,height:null,initialTop:null,top:null,left:null,title:"",index:-1,checkBoxElement:null,originalItem:null,checked:false,visibleIndex:-1};
return b
}
})(jQuery);