(function(b){b.jqx.jqxWidget("jqxGrid","",{});
b.extend(b.jqx._jqxGrid.prototype,{defineInstance:function(){this.disabled=false;
this.width=600;
this.height=400;
this.pagerheight=28;
this.groupsheaderheight=34;
this.pagesize=10;
this.pagesizeoptions=["5","10","20"];
this.rowsheight=25;
this.columnsheight=25;
this.filterrowheight=31;
this.groupindentwidth=30;
this.rowdetails=false;
this.enablerowdetailsindent=true;
this.enablemousewheel=true;
this.initrowdetails=null;
this.layoutrowdetails=null;
this.editable=false;
this.editmode="selectedcell";
this.pageable=false;
this.pagermode="default";
this.pagerbuttonscount=5;
this.groupable=false;
this.sortable=false;
this.filterable=false;
this.filtermode="default";
this.autoshowfiltericon=true;
this.showfiltercolumnbackground=true;
this.showpinnedcolumnbackground=true;
this.showsortcolumnbackground=true;
this.altrows=false;
this.altstart=1;
this.altstep=1;
this.showrowdetailscolumn=true;
this.showtoolbar=false;
this.toolbarheight=34;
this.showstatusbar=false;
this.statusbarheight=34;
this.enableellipsis=true;
this.groups=[];
this.groupsrenderer=null;
this.groupcolumnrenderer=null;
this.groupsexpandedbydefault=false;
this.pagerrenderer=null;
this.touchmode="auto";
this.columns=[];
this.selectedrowindex=-1;
this.selectedrowindexes=new Array();
this.selectedcells=new Array();
this.autobind=true;
this.selectedcell=null;
this.tableZIndex=799;
this.headerZIndex=199;
this.updatefilterconditions=null;
this.showaggregates=false;
this.showfilterrow=false;
this.autorowheight=false;
this.autokoupdates=true;
this.handlekeyboardnavigation=null;
this.showsortmenuitems=true;
this.showfiltermenuitems=true;
this.showgroupmenuitems=true;
this.enablebrowserselection=false;
this.enablekeyboarddelete=true;
this.clipboard=true;
this.ready=null;
this.updatefilterpanel=null;
this.autogeneratecolumns=false;
this.rowdetailstemplate=null;
this.scrollfeedback=null;
this.rendertoolbar=null;
this.renderstatusbar=null;
this.rendered=null;
this.multipleselectionbegins=null;
this.columngroups=null;
this.cellhover=null;
this.source={beforeprocessing:null,beforesend:null,loaderror:null,localdata:null,data:null,datatype:"array",datafields:[],url:"",root:"",record:"",id:"",totalrecords:0,recordstartindex:0,recordendindex:0,loadallrecords:true,sortcolumn:null,sortdirection:null,sort:null,filter:null,sortcomparer:null};
this.dataview=null;
this.updatedelay=null;
this.autoheight=false;
this.autowidth=false;
this.showheader=true;
this.showgroupsheader=true;
this.closeablegroups=true;
this.scrollbarsize=b.jqx.utilities.scrollBarSize;
this.touchscrollbarsize=b.jqx.utilities.touchScrollBarSize;
this.virtualmode=false;
this.sort=null;
this.columnsmenu=true;
this.columnsresize=false;
this.columnsreorder=false;
this.columnsmenuwidth=15;
this.autoshowcolumnsmenubutton=true;
this.popupwidth="auto";
this.sorttogglestates=2;
this.rendergridrows=null;
this.enableanimations=true;
this.enabletooltips=false;
this.selectionmode="singlerow";
this.enablehover=true;
this.loadingerrormessage="The data is still loading. When the data binding is completed, the Grid raises the 'bindingcomplete' event. Call this function in the 'bindingcomplete' event handler.";
this.verticalscrollbarstep=25;
this.verticalscrollbarlargestep=400;
this.horizontalscrollbarstep=10;
this.horizontalscrollbarlargestep=50;
this.keyboardnavigation=true;
this.touchModeStyle="auto";
this.autoshowloadelement=true;
this.showdefaultloadelement=true;
this.showemptyrow=true;
this.autosavestate=false;
this.autoloadstate=false;
this._updating=false;
this._pagescache=new Array();
this._pageviews=new Array();
this._cellscache=new Array();
this._rowdetailscache=new Array();
this._rowdetailselementscache=new Array();
this._requiresupdate=false;
this._hasOpenedMenu=false;
this.scrollmode="physical";
this.deferreddatafields=null;
this.localization=null;
this.rtl=false;
this.menuitemsarray=[];
this.events=["initialized","rowClick","rowSelect","rowUnselect","groupExpand","groupCollapse","sort","columnClick","cellClick","pageChanged","pageSizeChanged","bindingComplete","groupsChanged","filter","columnResized","cellSelect","cellUnselect","cellBeginEdit","cellEndEdit","cellValueChanged","rowExpand","rowCollapse","rowDoubleClick","cellDoubleClick","columnReordered","pageChanging"]
},createInstance:function(h){this.that=this;
var g="<div class='jqx-clear jqx-border-reset jqx-overflow-hidden jqx-max-size jqx-position-relative'><div tabindex='1' class='jqx-clear jqx-max-size jqx-position-relative jqx-overflow-hidden jqx-background-reset' id='wrapper"+this.element.id+"'><div class='jqx-clear jqx-position-absolute' id='toolbar' style='visibility: hidden;'></div><div class='jqx-clear jqx-position-absolute' id='groupsheader' style='visibility: hidden;'></div><div class='jqx-clear jqx-overflow-hidden jqx-position-absolute jqx-border-reset jqx-background-reset' id='content"+this.element.id+"'></div><div class='jqx-clear jqx-position-absolute' id='verticalScrollBar"+this.element.id+"'></div><div class='jqx-clear jqx-position-absolute' id='horizontalScrollBar"+this.element.id+"'></div><div class='jqx-clear jqx-position-absolute jqx-border-reset' id='bottomRight'></div><div class='jqx-clear jqx-position-absolute' id='statusbar'></div><div class='jqx-clear jqx-position-absolute' id='pager' style='z-index: 20;'></div></div></div>";
this.element.innerText="";
this.element.innerHTML="";
if(b.jqx.utilities.scrollBarSize!=15){this.scrollbarsize=b.jqx.utilities.scrollBarSize
}if(this.source){if(!this.source.dataBind){this.source=new b.jqx.dataAdapter(this.source)
}var d=this.source._source.datafields;
if(d&&d.length>0){this._camelCase=this.source._source.dataFields!==undefined;
this.editmode=this.editmode.toLowerCase();
this.selectionmode=this.selectionmode.toLowerCase()
}}this.host.attr("role","grid");
this.host.attr("align","left");
this.element.innerHTML=g;
this.host.addClass(this.toTP("jqx-grid"));
this.host.addClass(this.toTP("jqx-reset"));
this.host.addClass(this.toTP("jqx-rc-all"));
this.host.addClass(this.toTP("jqx-widget"));
this.host.addClass(this.toTP("jqx-widget-content"));
this.wrapper=this.host.find("#wrapper"+this.element.id);
this.content=this.host.find("#content"+this.element.id);
this.content.addClass(this.toTP("jqx-reset"));
var j=this.host.find("#verticalScrollBar"+this.element.id);
var n=this.host.find("#horizontalScrollBar"+this.element.id);
this.bottomRight=this.host.find("#bottomRight").addClass(this.toTP("jqx-grid-bottomright")).addClass(this.toTP("jqx-scrollbar-state-normal"));
if(!j.jqxScrollBar){throw new Error("jqxGrid: Missing reference to jqxscrollbar.js");
return
}this.editors=new Array();
this.vScrollBar=j.jqxScrollBar({vertical:true,rtl:this.rtl,touchMode:this.touchmode,step:this.verticalscrollbarstep,largestep:this.verticalscrollbarlargestep,theme:this.theme,_triggervaluechanged:false});
this.hScrollBar=n.jqxScrollBar({vertical:false,rtl:this.rtl,touchMode:this.touchmode,step:this.horizontalscrollbarstep,largestep:this.horizontalscrollbarlargestep,theme:this.theme,_triggervaluechanged:false});
this.pager=this.host.find("#pager");
this.pager[0].id="pager"+this.element.id;
this.toolbar=this.host.find("#toolbar");
this.toolbar[0].id="toolbar"+this.element.id;
this.toolbar.addClass(this.toTP("jqx-grid-toolbar"));
this.toolbar.addClass(this.toTP("jqx-widget-header"));
this.statusbar=this.host.find("#statusbar");
this.statusbar[0].id="statusbar"+this.element.id;
this.statusbar.addClass(this.toTP("jqx-grid-statusbar"));
this.statusbar.addClass(this.toTP("jqx-widget-header"));
this.pager.addClass(this.toTP("jqx-grid-pager"));
this.pager.addClass(this.toTP("jqx-widget-header"));
this.groupsheader=this.host.find("#groupsheader");
this.groupsheader.addClass(this.toTP("jqx-grid-groups-header"));
this.groupsheader.addClass(this.toTP("jqx-widget-header"));
this.vScrollBar.css("visibility","hidden");
this.hScrollBar.css("visibility","hidden");
this.vScrollInstance=b.data(this.vScrollBar[0],"jqxScrollBar").instance;
this.hScrollInstance=b.data(this.hScrollBar[0],"jqxScrollBar").instance;
this.gridtable=null;
this.isNestedGrid=this.host.parent()?this.host.parent().css("z-index")==2000:false;
this.touchdevice=this.isTouchDevice();
if(this.localizestrings){this.localizestrings();
if(this.localization!=null){this.localizestrings(this.localization,false)
}}if(this.rowdetailstemplate){if(undefined==this.rowdetailstemplate.rowdetails){this.rowdetailstemplate.rowdetails="<div></div>"
}if(undefined==this.rowdetailstemplate.rowdetailsheight){this.rowdetailstemplate.rowdetailsheight=200
}if(undefined==this.rowdetailstemplate.rowdetailshidden){this.rowdetailstemplate.rowdetailshidden=true
}}if(this.showfilterrow&&!this.filterable){throw new Error('jqxGrid: "showfilterrow" requires setting the "filterable" property to true!');
this.host.remove();
return
}if(this.autorowheight&&!this.autoheight&&!this.pageable){throw new Error('jqxGrid: "autorowheight" requires setting the "autoheight" or "pageable" property to true!');
this.host.remove();
return
}if(this.virtualmode&&this.rendergridrows==null){throw new Error('jqxGrid: "virtualmode" requires setting the "rendergridrows"!');
this.host.remove();
return
}if(this.virtualmode&&!this.pageable&&this.groupable){throw new Error('jqxGrid: "grouping" in "virtualmode" without paging is not supported!');
this.host.remove();
return
}if(this._testmodules()){return
}this._builddataloadelement();
this._cachedcolumns=this.columns;
if(this.rowsheight!=25){this._measureElement("cell")
}if(this.columnsheight!=25||this.columngroups){this._measureElement("column")
}if(this.source){var d=this.source.datafields;
if(d==null&&this.source._source){d=this.source._source.datafields
}if(d){for(var e=0;
e<this.columns.length;
e++){var f=this.columns[e];
if(f&&f.cellsformat&&f.cellsformat.length>2){for(var l=0;
l<d.length;
l++){if(d[l].name==f.datafield&&!d[l].format){d[l].format=f.cellsformat;
break
}}}}}}this.databind(this.source);
if(this.showtoolbar){this.toolbar.css("visibility","visible")
}if(this.showstatusbar){this.statusbar.css("visibility","visible")
}this._arrange();
if(this.pageable&&this._initpager){this._initpager()
}this.tableheight=null;
var i=this.that;
var k=function(){if(i.content){i.content[0].scrollTop=0;
i.content[0].scrollLeft=0
}if(i.gridcontent){i.gridcontent[0].scrollLeft=0;
i.gridcontent[0].scrollTop=0
}};
this.addHandler(this.content,"mousedown",function(){k()
});
this.addHandler(this.content,"scroll",function(m){k();
return false
});
if(!this.showfilterrow){if(!this.showstatusbar&&!this.showtoolbar){this.host.addClass("jqx-disableselect")
}this.content.addClass("jqx-disableselect")
}if(this.enablebrowserselection){this.content.removeClass("jqx-disableselect");
this.host.removeClass("jqx-disableselect")
}this._resizeWindow();
if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))
}this.hasTransform=b.jqx.utilities.hasTransform(this.host);
if(this.scrollmode=="logical"){this.vScrollInstance.thumbStep=this.rowsheight;
this.vScrollInstance.step=this.rowsheight
}if(!b.jqx.isHidden(this.host)){if(this.filterable||this.groupable||this.sortable){this._initmenu()
}}},_resizeWindow:function(){var d=this.that;
if((this.width!=null&&this.width.toString().indexOf("%")!=-1)||(this.height!=null&&this.height.toString().indexOf("%")!=-1)){this._updatesizeonwindowresize=true;
b.jqx.utilities.resize(this.host,function(h){var g=b(window).width();
var e=b(window).height();
var f=d.host.width();
var i=d.host.height();
if(d.autoheight){d._lastHostWidth=e
}if(d._lastHostWidth!=f||d._lastHostHeight!=i){if(d.touchdevice&&d.editcell&&h!=="orientationchange"){return
}d._updatesize(d._lastHostWidth!=f,d._lastHostHeight!=i)
}d._lastWidth=g;
d._lastHeight=e;
d._lastHostWidth=f;
d._lastHostHeight=i
})
}},_builddataloadelement:function(){if(this.dataloadelement){this.dataloadelement.remove()
}this.dataloadelement=b('<div style="overflow: hidden; position: absolute;"></div>');
if(this.showdefaultloadelement){var d=b('<div style="z-index: 99999; margin-left: -66px; left: 50%; top: 50%; margin-top: -24px; position: relative; width: 100px; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;"><div style="float: left;"><div style="float: left; overflow: hidden; width: 32px; height: 32px;" class="jqx-grid-load"/><span style="margin-top: 10px; float: left; display: block; margin-left: 5px;" >'+this.gridlocalization.loadtext+"</span></div></div>");
d.addClass(this.toTP("jqx-rc-all"));
this.dataloadelement.addClass(this.toTP("jqx-rc-all"));
d.addClass(this.toTP("jqx-fill-state-normal"));
this.dataloadelement.append(d)
}else{this.dataloadelement.addClass(this.toTP("jqx-grid-load"))
}this.dataloadelement.width(this.width);
this.dataloadelement.height(this.height);
this.host.prepend(this.dataloadelement)
},_measureElement:function(e){var d=b("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
d.addClass(this.toTP("jqx-widget"));
b(document.body).append(d);
if(e=="cell"){this._cellheight=d.height()
}else{this._columnheight=d.height()
}d.remove()
},_measureMenuElement:function(){var e=b("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
e.addClass(this.toTP("jqx-widget"));
e.addClass(this.toTP("jqx-menu"));
e.addClass(this.toTP("jqx-menu-item-top"));
e.addClass(this.toTP("jqx-fill-state-normal"));
b(document.body).append(e);
var d=e.outerHeight();
e.remove();
return d
},_measureElementWidth:function(f){var e=b("<span style='visibility: hidden; white-space: nowrap;'>"+f+"</span>");
e.addClass(this.toTP("jqx-widget"));
e.addClass(this.toTP("jqx-grid"));
e.addClass(this.toTP("jqx-grid-column-header"));
e.addClass(this.toTP("jqx-widget-header"));
b(document.body).append(e);
var d=e.outerWidth()+20;
e.remove();
return d
},_getBodyOffset:function(){var e=0;
var d=0;
if(b("body").css("border-top-width")!="0px"){e=parseInt(b("body").css("border-top-width"));
if(isNaN(e)){e=0
}}if(b("body").css("border-left-width")!="0px"){d=parseInt(b("body").css("border-left-width"));
if(isNaN(d)){d=0
}}return{left:d,top:e}
},_testmodules:function(){var k="";
var h=this.that;
var d=function(){if(k.length!=""){k+=","
}};
if(this.columnsmenu&&!this.host.jqxMenu&&(this.sortable||this.groupable||this.filterable)){d();
k+=" jqxmenu.js"
}if(!this.host.jqxScrollBar){d();
k+=" jqxscrollbar.js"
}if(!this.host.jqxButton){d();
k+=" jqxbuttons.js"
}if(!b.jqx.dataAdapter){d();
k+=" jqxdata.js"
}if(this.pageable&&!this.gotopage){d();
k+="jqxgrid.pager.js"
}if(this.filterable&&!this.applyfilters){d();
k+=" jqxgrid.filter.js"
}if(this.groupable&&!this._initgroupsheader){d();
k+=" jqxgrid.grouping.js"
}if(this.columnsresize&&!this.autoresizecolumns){d();
k+=" jqxgrid.columnsresize.js"
}if(this.columnsreorder&&!this.setcolumnindex){d();
k+=" jqxgrid.columnsreorder.js"
}if(this.sortable&&!this.sortby){d();
k+=" jqxgrid.sort.js"
}if(this.editable&&!this.begincelledit){d();
k+=" jqxgrid.edit.js"
}if(this.showaggregates&&!this.getcolumnaggregateddata){d();
k+=" jqxgrid.aggregates.js"
}if(this.keyboardnavigation&&!this.selectrow){d();
k+=" jqxgrid.selection.js"
}if(k!=""||this.editable||this.filterable||this.pageable){var f=[];
var j=function(i){switch(i){case"checkbox":if(!h.host.jqxCheckBox&&!f.checkbox){f.checkbox=true;
d();
k+=" jqxcheckbox.js"
}break;
case"numberinput":if(!h.host.jqxNumberInput&&!f.numberinput){f.numberinput=true;
d();
k+=" jqxnumberinput.js"
}break;
case"datetimeinput":if(!h.host.jqxDateTimeInput&&!f.datetimeinput){d();
f.datetimeinput=true;
k+=" jqxdatetimeinput.js(requires: jqxcalendar.js)"
}else{if(!h.host.jqxCalendar&&!f.calendar){d();
k+=" jqxcalendar.js"
}}break;
case"combobox":if(!h.host.jqxComboBox&&!f.combobox){d();
f.combobox=true;
k+=" jqxcombobox.js(requires: jqxlistbox.js)"
}else{if(!h.host.jqxListBox&&!f.listbox){d();
f.listbox=true;
k+=" jqxlistbox.js"
}}break;
case"dropdownlist":if(!h.host.jqxDropDownList&&!f.dropdownlist){d();
f.dropdownlist=true;
k+=" jqxdropdownlist.js(requires: jqxlistbox.js)"
}else{if(!h.host.jqxListBox&&!f.listbox){d();
f.listbox=true;
k+=" jqxlistbox.js"
}}break
}};
if(this.filterable||this.pageable){j("dropdownlist")
}for(var e=0;
e<this.columns.length;
e++){if(this.columns[e]==undefined){continue
}var g=this.columns[e].columntype;
j(g);
if(this.filterable&&this.showfilterrow){var g=this.columns[e].filtertype;
if(g=="checkedlist"||g=="bool"){j("checkbox")
}if(g=="date"){j("datetimeinput")
}}}if(k!=""){throw new Error("jqxGrid: Missing references to the following module(s): "+k);
this.host.remove();
return true
}}return false
},focus:function(){try{this.wrapper.focus();
var e=this.that;
setTimeout(function(){e.wrapper.focus()
},25);
this.focused=true
}catch(d){}},hiddenParent:function(){return b.jqx.isHidden(this.host)
},resize:function(e,d){this.width=e;
this.height=d;
this._updatesize(true,true)
},_updatesize:function(i,h){if(this._loading){return
}var f=this.that;
f._newmax=null;
var g=f.host.width();
var e=f.host.height();
if(!f._oldWidth){f._oldWidth=g
}if(!f._oldHeight){f._oldHeight=e
}if(f._resizeTimer){clearTimeout(f._resizeTimer)
}var d=5;
f._resizeTimer=setTimeout(function(){f.resizingGrid=true;
if(b.jqx.isHidden(f.host)){return
}if(f.editcell){f.endcelledit(f.editcell.row,f.editcell.column,true,true);
f._oldselectedcell=null
}if(j!=f._oldHeight||h==true){var k=f.groupable&&f.groups.length>0;
var p=f.vScrollBar.css("visibility");
if(!f.autoheight){if(f.virtualmode){f._pageviews=new Array()
}if(!k&&!f.rowdetails&&!f.pageable){f._arrange();
f.virtualsizeinfo=f._calculatevirtualheight();
var j=Math.round(f.host.height())+2*f.rowsheight;
if(parseInt(j)>=parseInt(f._oldHeight)){f.prerenderrequired=true
}f._renderrows(f.virtualsizeinfo)
}else{f._arrange();
f.prerenderrequired=true;
var j=Math.round(f.host.height())+2*f.rowsheight;
realheight=f._gettableheight();
var r=Math.round(j/f.rowsheight);
var m=Math.max(f.dataview.totalrows,f.dataview.totalrecords);
if(f.pageable){m=f.pagesize;
if(f.pagesize>Math.max(f.dataview.totalrows,f.dataview.totalrecords)&&f.autoheight){m=Math.max(f.dataview.totalrows,f.dataview.totalrecords)
}else{if(!f.autoheight){if(f.dataview.totalrows<f.pagesize){m=Math.max(f.dataview.totalrows,f.dataview.totalrecords)
}}}}var o=m*f.rowsheight;
var l=f._getpagesize();
if(!f.pageable&&f.autoheight){r=m
}if(f.virtualsizeinfo){f.virtualsizeinfo.visiblerecords=r
}f.rendergridcontent(true,false);
f._renderrows(f.virtualsizeinfo)
}if(p!=f.vScrollBar.css("visibility")){f.vScrollInstance.setPosition(0);
f._arrange();
f._updatecolumnwidths();
if(f.table){f.table.width(f.columnsheader.width())
}f._updatecellwidths()
}}}if(g!=f._oldWidth||i==true){var q=false;
if(f.editcell&&f.editcell.editor){switch(f.editcell.columntype){case"dropdownlist":q=f.editcell.editor.jqxDropDownList("isOpened")||(f.editcell.editor.jqxDropDownList("isanimating")&&!f.editcell.editor.jqxDropDownList("ishiding"));
if(q){f.editcell.editor.jqxDropDownList({openDelay:0});
f.editcell.editor.jqxDropDownList("open");
f.editcell.editor.jqxDropDownList({openDelay:250});
return
}break;
case"combobox":q=f.editcell.editor.jqxComboBox("isOpened")||(f.editcell.editor.jqxComboBox("isanimating")&&!f.editcell.editor.jqxComboBox("ishiding"));
if(q){f.editcell.editor.jqxComboBox({openDelay:0});
f.editcell.editor.jqxComboBox("open");
f.editcell.editor.jqxComboBox({openDelay:250});
return
}break;
case"datetimeinput":if(q){q=f.editcell.editor.jqxDateTimeInput("isOpened")||(f.editcell.editor.jqxDateTimeInput("isanimating")&&!f.editcell.editor.jqxDateTimeInput("ishiding"));
f.editcell.editor.jqxDateTimeInput({openDelay:0});
f.editcell.editor.jqxDateTimeInput("open");
f.editcell.editor.jqxDateTimeInput({openDelay:250});
return
}break
}}var n=f.hScrollBar.css("visibility");
f._arrange();
f._updatecolumnwidths();
if(f.table){f.table.width(f.columnsheader.width())
}f._updatecellwidths();
if(!(i==false&&f._oldWidth>g)){if(!h||f.dataview.rows.length==0){f._renderrows(f.virtualsizeinfo)
}}if(n!=f.hScrollBar.css("visibility")){f.hScrollInstance.setPosition(0)
}}f._oldWidth=g;
f._oldHeight=j;
f.resizingGrid=false
},d)
},getTouches:function(d){return b.jqx.mobile.getTouches(d)
},_updateTouchScrolling:function(){var e=this.that;
if(e.isTouchDevice()){e.scrollmode="logical";
e.vScrollInstance.thumbStep=e.rowsheight;
var g=b.jqx.mobile.getTouchEventName("touchstart");
var f=b.jqx.mobile.getTouchEventName("touchend");
var d=b.jqx.mobile.getTouchEventName("touchmove");
e.enablehover=false;
if(e.gridcontent){e.removeHandler(e.gridcontent,g+".touchScroll");
e.removeHandler(e.gridcontent,d+".touchScroll");
e.removeHandler(e.gridcontent,f+".touchScroll");
e.removeHandler(e.gridcontent,"touchcancel.touchScroll");
b.jqx.mobile.touchScroll(e.gridcontent[0],e.vScrollInstance.max,function(j,i){if(e.vScrollBar.css("visibility")=="visible"){var h=e.vScrollInstance.value;
e.vScrollInstance.setPosition(h+i)
}if(e.hScrollBar.css("visibility")=="visible"){var h=e.hScrollInstance.value;
e.hScrollInstance.setPosition(h+j)
}e.vScrollInstance.thumbCapture=true;
e._lastScroll=new Date()
},this.element.id,this.hScrollBar,this.vScrollBar);
if(e._overlayElement){e.removeHandler(e._overlayElement,g+".touchScroll");
e.removeHandler(e._overlayElement,d+".touchScroll");
e.removeHandler(e._overlayElement,f+".touchScroll");
e.removeHandler(e._overlayElement,"touchcancel.touchScroll");
b.jqx.mobile.touchScroll(e._overlayElement[0],e.vScrollInstance.max,function(j,i){if(e.vScrollBar.css("visibility")=="visible"){var h=e.vScrollInstance.value;
e.vScrollInstance.setPosition(h+i)
}if(e.hScrollBar.css("visibility")=="visible"){var h=e.hScrollInstance.value;
e.hScrollInstance.setPosition(h+j)
}e.vScrollInstance.thumbCapture=true;
e._lastScroll=new Date()
},this.element.id,this.hScrollBar,this.vScrollBar);
this.addHandler(this.host,g,function(){if(!e.editcell){e._overlayElement.css("visibility","visible")
}else{e._overlayElement.css("visibility","hidden")
}});
this.addHandler(this.host,f,function(){if(!e.editcell){e._overlayElement.css("visibility","visible")
}else{e._overlayElement.css("visibility","hidden")
}})
}}}},isTouchDevice:function(){if(this.touchDevice!=undefined){return this.touchDevice
}var d=b.jqx.mobile.isTouchDevice();
this.touchDevice=d;
if(this.touchmode==true){if(b.jqx.browser.msie&&b.jqx.browser.version<9){this.enablehover=false;
return false
}d=true;
b.jqx.mobile.setMobileSimulator(this.element);
this.touchDevice=d
}else{if(this.touchmode==false){d=false
}}if(d&&this.touchModeStyle!=false){this.touchDevice=true;
this.host.addClass(this.toThemeProperty("jqx-touch"));
this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch"));
this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch"));
this.scrollbarsize=this.touchscrollbarsize
}return d
},toTP:function(d){return this.toThemeProperty(d)
},localizestrings:function(d,e){this._cellscache=new Array();
if(b.jqx.dataFormat){b.jqx.dataFormat.cleardatescache()
}if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);
return false
}if(d!=null){for(var f in d){if(f.toLowerCase()!==f){d[f.toLowerCase()]=d[f]
}}if(d.pagergotopagestring){this.gridlocalization.pagergotopagestring=d.pagergotopagestring
}if(d.pagershowrowsstring){this.gridlocalization.pagershowrowsstring=d.pagershowrowsstring
}if(d.pagerrangestring){this.gridlocalization.pagerrangestring=d.pagerrangestring
}if(d.pagernextbuttonstring){this.gridlocalization.pagernextbuttonstring=d.pagernextbuttonstring
}if(d.pagerpreviousbuttonstring){this.gridlocalization.pagerpreviousbuttonstring=d.pagerpreviousbuttonstring
}if(d.pagerfirstbuttonstring){this.gridlocalization.pagerfirstbuttonstring=d.pagerfirstbuttonstring
}if(d.pagerlastbuttonstring){this.gridlocalization.pagerlastbuttonstring=d.pagerlastbuttonstring
}if(d.groupsheaderstring){this.gridlocalization.groupsheaderstring=d.groupsheaderstring
}if(d.sortascendingstring){this.gridlocalization.sortascendingstring=d.sortascendingstring
}if(d.sortdescendingstring){this.gridlocalization.sortdescendingstring=d.sortdescendingstring
}if(d.sortremovestring){this.gridlocalization.sortremovestring=d.sortremovestring
}if(d.groupbystring){this.gridlocalization.groupbystring=d.groupbystring
}if(d.groupremovestring){this.gridlocalization.groupremovestring=d.groupremovestring
}if(d.firstDay){this.gridlocalization.firstDay=d.firstDay
}if(d.days){this.gridlocalization.days=d.days
}if(d.months){this.gridlocalization.months=d.months
}if(d.AM){this.gridlocalization.AM=d.AM
}if(d.PM){this.gridlocalization.PM=d.PM
}if(d.patterns){this.gridlocalization.patterns=d.patterns
}if(d.percentsymbol){this.gridlocalization.percentsymbol=d.percentsymbol
}if(d.currencysymbol){this.gridlocalization.currencysymbol=d.currencysymbol
}if(d.currencysymbolposition){this.gridlocalization.currencysymbolposition=d.currencysymbolposition
}if(d.decimalseparator!=undefined){this.gridlocalization.decimalseparator=d.decimalseparator
}if(d.thousandsseparator!=undefined){this.gridlocalization.thousandsseparator=d.thousandsseparator
}if(d.filterclearstring){this.gridlocalization.filterclearstring=d.filterclearstring
}if(d.filterstring){this.gridlocalization.filterstring=d.filterstring
}if(d.filtershowrowstring){this.gridlocalization.filtershowrowstring=d.filtershowrowstring
}if(d.filterselectallstring){this.gridlocalization.filterselectallstring=d.filterselectallstring
}if(d.filterchoosestring){this.gridlocalization.filterchoosestring=d.filterchoosestring
}if(d.filterorconditionstring){this.gridlocalization.filterorconditionstring=d.filterorconditionstring
}if(d.filterandconditionstring){this.gridlocalization.filterandconditionstring=d.filterandconditionstring
}if(d.filterstringcomparisonoperators){this.gridlocalization.filterstringcomparisonoperators=d.filterstringcomparisonoperators
}if(d.filternumericcomparisonoperators){this.gridlocalization.filternumericcomparisonoperators=d.filternumericcomparisonoperators
}if(d.filterdatecomparisonoperators){this.gridlocalization.filterdatecomparisonoperators=d.filterdatecomparisonoperators
}if(d.filterbooleancomparisonoperators){this.gridlocalization.filterbooleancomparisonoperators=d.filterbooleancomparisonoperators
}if(d.emptydatastring){this.gridlocalization.emptydatastring=d.emptydatastring
}if(d.filterselectstring){this.gridlocalization.filterselectstring=d.filterselectstring
}if(d.todaystring){this.gridlocalization.todaystring=d.todaystring
}if(d.clearstring){this.gridlocalization.clearstring=d.clearstring
}if(d.validationstring){this.gridlocalization.validationstring=d.validationstring
}if(d.loadtext){this.gridlocalization.loadtext=d.loadtext
}if(e!==false){if(this._initpager){this._initpager()
}if(this._initgroupsheader){this._initgroupsheader()
}if(this._initmenu){this._initmenu()
}this._builddataloadelement();
b(this.dataloadelement).css("visibility","hidden");
b(this.dataloadelement).css("display","none");
if(this.filterable&&this.showfilterrow){if(this._updatefilterrow){for(var f in this._filterrowcache){b(this._filterrowcache[f]).remove()
}this._filterrowcache=[];
this._updatefilterrow()
}}if(this.showaggregates&&this.refresheaggregates){this.refresheaggregates()
}this._renderrows(this.virtualsizeinfo)
}}else{this.gridlocalization={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",d3:"dd-MMMM-yyyy",d4:"dd-MM-yy",d5:"H:mm",d6:"HH:mm",d7:"HH:mm tt",d8:"dd/MMMM/yyyy",d9:"MMMM-dd",d10:"MM-dd",d11:"MM-dd-yyyy"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:",",pagergotopagestring:"Go to page:",pagershowrowsstring:"Show rows:",pagerrangestring:" of ",pagerpreviousbuttonstring:"previous",pagernextbuttonstring:"next",pagerfirstbuttonstring:"first",pagerlastbuttonstring:"last",groupsheaderstring:"Drag a column and drop it here to group by that column",sortascendingstring:"Sort Ascending",sortdescendingstring:"Sort Descending",sortremovestring:"Remove Sort",groupbystring:"Group By this column",groupremovestring:"Remove from groups",filterclearstring:"Clear",filterstring:"Filter",filtershowrowstring:"Show rows where:",filtershowrowdatestring:"Show rows where date:",filterorconditionstring:"Or",filterandconditionstring:"And",filterselectallstring:"(Select All)",filterchoosestring:"Please Choose:",filterstringcomparisonoperators:["empty","not empty","contains","contains(match case)","does not contain","does not contain(match case)","starts with","starts with(match case)","ends with","ends with(match case)","equal","equal(match case)","null","not null"],filternumericcomparisonoperators:["equal","not equal","less than","less than or equal","greater than","greater than or equal","null","not null"],filterdatecomparisonoperators:["equal","not equal","less than","less than or equal","greater than","greater than or equal","null","not null"],filterbooleancomparisonoperators:["equal","not equal"],validationstring:"Entered value is not valid",emptydatastring:"No data to display",filterselectstring:"Select Filter",loadtext:"Loading...",clearstring:"Clear",todaystring:"Today"}
}},_initmenu:function(){var o=this.that;
if(this.host.jqxMenu){if(this.gridmenu){if(this._hasOpenedMenu){return
}if(this.filterable){if(this._destroyfilterpanel){this._destroyfilterpanel()
}}this.removeHandler(this.gridmenu,"keydown");
this.removeHandler(this.gridmenu,"closed");
this.removeHandler(this.gridmenu,"itemclick");
this.gridmenu.jqxMenu("destroy");
this.gridmenu.removeData();
this.gridmenu.remove()
}this.menuitemsarray=new Array();
this.gridmenu=b('<div id="gridmenu'+this.element.id+'" style="z-index: 9999999999999;"></div>');
this.host.append(this.gridmenu);
var t=b("<ul></ul>");
var e='<div class="jqx-grid-sortasc-icon"></div>';
var q=b("<li>"+e+this.gridlocalization.sortascendingstring+"</li>");
var x='<div class="jqx-grid-sortdesc-icon"></div>';
var u=b("<li>"+x+this.gridlocalization.sortdescendingstring+"</li>");
var k='<div class="jqx-grid-sortremove-icon"></div>';
var h=b("<li>"+k+this.gridlocalization.sortremovestring+"</li>");
var g='<div class="jqx-grid-groupby-icon"></div>';
var n=b("<li>"+g+this.gridlocalization.groupbystring+"</li>");
var f=b("<li>"+g+this.gridlocalization.groupremovestring+"</li>");
var y=b('<li type="separator"></li>');
var s=b('<li class="filter" style="height: 175px;" ignoretheme="true"><div class="filter"></div></li>');
var j=this.gridlocalization.sortascendingstring.length;
var p=this.gridlocalization.sortascendingstring;
if(this.gridlocalization.sortdescendingstring.length>j){j=this.gridlocalization.sortdescendingstring.length;
p=this.gridlocalization.sortdescendingstring
}if(this.gridlocalization.sortremovestring.length>j){j=this.gridlocalization.sortremovestring.length;
p=this.gridlocalization.sortremovestring
}if(this.groupable&&this._initgroupsheader&&this.showgroupmenuitems){if(this.gridlocalization.groupbystring.length>j){j=this.gridlocalization.groupbystring.length;
p=this.gridlocalization.groupbystring
}if(this.gridlocalization.groupremovestring.length>j){j=this.gridlocalization.groupremovestring.length;
p=this.gridlocalization.groupremovestring
}}var v=200;
p=b.trim(p).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");
var A=b("<span>"+p+"</span>");
A.addClass(this.toThemeProperty("jqx-menu-item"));
this.host.append(A);
v=A.outerWidth()+60;
A.remove();
var z=0;
if(this.sortable&&this._togglesort&&this.showsortmenuitems){t.append(q);
this.menuitemsarray[0]=q[0];
t.append(u);
this.menuitemsarray[1]=u[0];
t.append(h);
this.menuitemsarray[2]=h[0];
z=3
}if(this.groupable&&this._initgroupsheader&&this.showgroupmenuitems){t.append(n);
this.menuitemsarray[3]=n[0];
t.append(f);
this.menuitemsarray[4]=f[0];
z+=2
}var r=this._measureMenuElement();
var i=z*r+9;
var m=true;
if(this.filterable&&!this.showfilterrow&&this.showfiltermenuitems){if(this._initfilterpanel){this.menuitemsarray[5]=s[0];
this.menuitemsarray[6]=s[0];
t.append(y);
t.append(s);
i+=180;
if(b.jqx.browser.msie&&b.jqx.browser.version<8){i+=20
}var l=b(s).find("div:first");
v+=20;
this._initfilterpanel(this,l,"",v);
m=false;
this.removeHandler(b(document),"click.menu"+o.element.id,o._closemenuafterclick,o);
this.addHandler(b(document),"click.menu"+o.element.id,o._closemenuafterclick,o)
}else{throw new Error("jqxGrid: Missing reference to jqxgrid.filter.js.")
}}this.gridmenu.append(t);
if(b.jqx.browser.msie&&b.jqx.browser.version<8&&this.filterable){b("#listBoxfilter1"+this.element.id).css("z-index",4990);
b("#listBoxfilter2"+this.element.id).css("z-index",4990);
b("#listBoxfilter3"+this.element.id).css("z-index",4990);
b("#gridmenu"+this.element.id).css("z-index",5000);
this.addHandler(b("#gridmenu"+this.element.id),"initialized",function(){b("#menuWrappergridmenu"+o.element.id).css("z-index",4980)
})
}if(this.menuitemsarray[0]==undefined){i=65
}this.removeHandler(this.gridmenu,"keydown");
this.addHandler(this.gridmenu,"keydown",function(F){if(F.keyCode==27){o.gridmenu.jqxMenu("close")
}else{if(F.keyCode==13&&o.filterable){if(o._buildfilter){var E=b(b.find("#filter1"+o.element.id)).jqxDropDownList("container").css("display")=="block";
var D=b(b.find("#filter2"+o.element.id)).jqxDropDownList("container").css("display")=="block";
var B=b(b.find("#filter3"+o.element.id)).jqxDropDownList("container").css("display")=="block";
var G=b(b.find("#filterclearbutton"+o.element.id)).hasClass("jqx-fill-state-focus");
if(G){var C=b.data(document.body,"contextmenu"+o.element.id).column;
o._clearfilter(o,o.element,C);
o.gridmenu.jqxMenu("close")
}else{if(!E&&!D&&!B){var C=b.data(document.body,"contextmenu"+o.element.id).column;
o.gridmenu.jqxMenu("close");
o._buildfilter(o,s,C)
}}}}}});
if(this.popupwidth!="auto"){v=this.popupwidth
}this.gridmenu.jqxMenu({popupZIndex:999999,width:v,height:i,autoCloseOnClick:m,autoOpenPopup:false,mode:"popup",theme:this.theme,animationShowDuration:0,animationHideDuration:0,animationShowDelay:0});
if(this.filterable){this.gridmenu.jqxMenu("_setItemProperty",s[0].id,"closeOnClick",false)
}if(this.rtl){var w=this.that;
b.each(t.find("li"),function(){b(this).addClass(w.toTP("jqx-rtl"))
});
var d=function(B){var C=B.find("div");
C.css("float","right");
C.css("margin-left","4px");
C.css("margin-right","-4px")
};
d(h);
d(u);
d(q);
d(n);
d(f)
}this._handlemenueevents()
}else{this.columnsmenu=false
}},_arrangemenu:function(){if(!this.gridmenu){this._initmenu()
}var i=this.gridlocalization.sortascendingstring.length;
var d=this.gridlocalization.sortascendingstring;
if(this.gridlocalization.sortdescendingstring.length>i){i=this.gridlocalization.sortdescendingstring.length;
d=this.gridlocalization.sortdescendingstring
}if(this.gridlocalization.sortremovestring.length>i){i=this.gridlocalization.sortremovestring.length;
d=this.gridlocalization.sortremovestring
}if(this.groupable&&this._initgroupsheader){if(this.gridlocalization.groupbystring.length>i){i=this.gridlocalization.groupbystring.length;
d=this.gridlocalization.groupbystring
}if(this.gridlocalization.groupremovestring.length>i){i=this.gridlocalization.groupremovestring.length;
d=this.gridlocalization.groupremovestring
}}var e=200;
d=b.trim(d).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");
var f=b("<span>"+d+"</span>");
f.addClass(this.toThemeProperty("jqx-menu-item"));
this.host.append(f);
e=f.outerWidth()+60;
f.remove();
var g=0;
if(this.sortable&&this._togglesort&&this.showsortmenuitems){g=3
}if(this.groupable&&this._initgroupsheader&&this.showgroupmenuitems){g+=2
}var h=g*27+3;
if(this.filterable&&this.showfiltermenuitems){if(this._initfilterpanel){h+=180;
e+=20;
if(b.jqx.browser.msie&&b.jqx.browser.version<8){h+=20
}}}if(this.menuitemsarray[0]==undefined){h=65
}if(this.popupwidth!="auto"){e=this.popupwidth
}this.gridmenu.jqxMenu({width:e,height:h})
},_closemenuafterclick:function(e){var i=e!=null?e.data:this;
var g=false;
if(e.target==undefined||(e.target!=undefined&&e.target.className.indexOf==undefined)){i.gridmenu.jqxMenu("close");
return
}if(e.target.className.indexOf("filter")!=-1&&e.target.className.indexOf("jqx-grid-cell-filter")==-1){return
}if(e.target.className.indexOf("jqx-grid-cell")!=-1){i.gridmenu.jqxMenu("close");
return
}if(i._hasOpenedMenu){if(b(e.target).ischildof(i.gridmenu)){return
}}var d=i.host.coord();
var f=i.gridmenu.coord();
var k=e.pageX;
var j=e.pageY;
b.each(b(e.target).parents(),function(){if(this.id!=null&&this.id.indexOf&&this.id.indexOf("filter")!=-1){g=true;
return false
}if(this.className.indexOf&&this.className.indexOf("filter")!=-1&&this.className.indexOf("jqx-grid-cell-filter")==-1){g=true;
return false
}if(this.className.indexOf&&this.className.indexOf("jqx-grid-cell")!=-1){i.gridmenu.jqxMenu("close");
return false
}if(this.className.indexOf&&this.className.indexOf("jqx-grid-column")!=-1){i.gridmenu.jqxMenu("close");
return false
}});
if(g){return
}try{if(i.filtermode==="default"){var n=b(b.find("#filter1"+i.element.id)).jqxDropDownList("listBox").vScrollInstance._mouseup;
var l=new Date();
if(l-n<100){return
}var m=b(b.find("#filter3"+i.element.id)).jqxDropDownList("listBox").vScrollInstance._mouseup;
if(l-m<100){return
}if((b(b.find("#filter3"+i.element.id)).jqxDropDownList("container")).css("display")=="block"){return
}if((b(b.find("#filter1"+i.element.id)).jqxDropDownList("container")).css("display")=="block"){return
}if((b(b.find("#filter2"+i.element.id)).jqxDropDownList("container")).css("display")=="block"){return
}if(i._hasdatefilter){if(b(".filtertext1"+i.element.id)[0].nodeName.toLowerCase()=="div"){if(b(".filtertext1"+i.element.id).jqxDateTimeInput("container").css("display")=="block"){return
}if(b(".filtertext2"+i.element.id).jqxDateTimeInput("container").css("display")=="block"){return
}}}}else{var n=b(b.find("#filter1"+i.element.id)).data().jqxListBox.instance.vScrollInstance._mouseup;
var l=new Date();
if(l-n<100){return
}var m=b(b.find("#filter1"+i.element.id)).data().jqxListBox.instance.hScrollInstance._mouseup;
if(l-m<100){return
}}}catch(h){}if(k>=f.left&&k<=f.left+i.gridmenu.width()){if(j>=f.top&&j<=f.top+i.gridmenu.height()){return
}}i.gridmenu.jqxMenu("close")
},_handlemenueevents:function(){var d=this.that;
this.removeHandler(this.gridmenu,"closed");
this.addHandler(this.gridmenu,"closed",function(e){d._closemenu()
});
this.removeHandler(this.gridmenu,"itemclick");
this.addHandler(this.gridmenu,"itemclick",function(h){var g=h.args;
for(var e=0;
e<d.menuitemsarray.length;
e++){var j=d.menuitemsarray[e];
if(g==j){if(b(g).attr("ignoretheme")!=undefined){return
}var k=b.data(document.body,"contextmenu"+d.element.id);
var f=k.column;
if(d.filterable){d.gridmenu.jqxMenu("close")
}var m=f.displayfield;
if(m==null){m=f.datafield
}if(k!=null){switch(e){case 0:d.sortby(m,"ascending",null);
break;
case 1:d.sortby(m,"descending",null);
break;
case 2:d.sortby(m,null,null);
break;
case 3:d.addgroup(f.datafield);
break;
case 4:d.removegroup(f.datafield);
break;
case 5:var l=b(d.menuitemsarray[6]);
b(l).css("display","block");
break;
case 7:break
}}break
}}})
},getdatainformation:function(){var d=this.dataview.totalrecords;
if(this.summaryrows){d+=this.summaryrows.length
}return{rowscount:d,sortinformation:this.getsortinformation(),paginginformation:this.getpaginginformation()}
},getsortinformation:function(){return{sortcolumn:this.sortcolumn,sortdirection:this.sortdirection}
},getpaginginformation:function(){return{pagenum:this.dataview.pagenum,pagesize:this.pagesize,pagescount:Math.ceil(this.dataview.totalrecords/this.pagesize)}
},_updaterowsproperties:function(){this._updatehiddenrows();
this._updaterowheights();
this._updaterowdetails()
},_updatehiddenrows:function(){var e=this.that;
this.hiddens=new Array();
var d=this.hiddenboundrows;
b.each(d,function(g){if(this.index!=undefined){var f=this.index;
var h=e.getrowvisibleindex(g);
e.hiddens[h]=this.hidden
}})
},_updaterowheights:function(){var e=this.that;
this.heights=new Array();
var d=this.heightboundrows;
b.each(d,function(g){if(this.index!=undefined){var f=this.index;
var h=e.getrowvisibleindex(g);
e.heights[h]=this.height
}})
},_updaterowdetails:function(){var d=this.that;
this.details=new Array();
var e=this.detailboundrows;
b.each(e,function(g){if(this.index!=undefined){var f=this.index;
var h=d.getrowvisibleindex(g);
d.details[h]=this.details
}})
},_getmenuitembyindex:function(d){if(d==undefined){return null
}return this.menuitemsarray[d]
},openmenu:function(e){if(this._openingmenu){return
}this._openingmenu=true;
this.closemenu();
var h=this.getcolumn(e);
if(!h.menu){return false
}if(!this.gridmenu){this._initmenu()
}var d=h.columnsmenu;
b(h.element).trigger("mouseenter");
var g=this;
for(var f=0;
f<g.columns.records.length;
f++){if(g.columns.records[f].datafield!=e){b(g.columns.records[f].element).trigger("mouseleave")
}}setTimeout(function(){if(b(d)[0].style.display=="block"){b(d).trigger("click")
}g._openingmenu=false
},200)
},closemenu:function(){this._closemenu()
},_closemenu:function(){if(this._hasOpenedMenu){if(this.gridmenu!=null){this.gridmenu.jqxMenu("close")
}var h=b.data(document.body,"contextmenu"+this.element.id);
var e=16;
if(h!=null&&this.autoshowcolumnsmenubutton){if(this.enableanimations){b(h.columnsmenu).animate({"margin-left":0},"fast",function(){b(h.columnsmenu).css("display","none")
});
var g=!this.rtl?-32:0;
h.column.iconscontainer.animate({"margin-left":g},"fast")
}else{b(h.columnsmenu).css("display","none");
var g=!this.rtl?-32:0;
h.column.iconscontainer.css("margin-left",g)
}b.data(document.body,"contextmenu"+this.element.id,null)
}this._hasOpenedMenu=false;
var j=this._getmenuitembyindex(5);
if(j){var i=b(j).find("#filter1"+this.element.id);
var d=b(j).find("#filter2"+this.element.id);
var f=b(j).find("#filter3"+this.element.id);
if(i.length>0&&this.filtermode==="default"){i.jqxDropDownList("hideListBox");
d.jqxDropDownList("hideListBox");
f.jqxDropDownList("hideListBox")
}}}},scrolloffset:function(e,d){if(e==null||d==null||e==undefined||d==undefined){return
}this.vScrollBar.jqxScrollBar("setPosition",e);
this.hScrollBar.jqxScrollBar("setPosition",d)
},scrollleft:function(d){if(d==null||d==undefined){return
}if(this.hScrollBar.css("visibility")!="hidden"){this.hScrollBar.jqxScrollBar("setPosition",d)
}},scrolltop:function(d){if(d==null||d==undefined){return
}if(this.vScrollBar.css("visibility")!="hidden"){this.vScrollBar.jqxScrollBar("setPosition",d)
}},beginupdate:function(){this._updating=true;
this._datachanged=false
},endupdate:function(){this.resumeupdate()
},resumeupdate:function(){this._updating=false;
if(this._datachanged==true){var d=this.vScrollInstance.value;
this.render(true,true,false);
this._datachanged=false;
if(d!=0&&d<this.vScrollInstance.max){this.scrolltop(d)
}}else{this.rendergridcontent(true);
this._renderrows(this.virtualsizeinfo)
}if(this.showaggregates&&this.renderaggregates){this.renderaggregates()
}this._updatecolumnwidths();
this._updatecellwidths();
this._renderrows(this.virtualsizeinfo)
},updating:function(){return this._updating
},showloadelement:function(){if(this.renderloadelement){this.dataloadelement.html(this.renderloadelement())
}b(this.dataloadelement).css("visibility","visible");
b(this.dataloadelement).css("display","block")
},hideloadelement:function(){b(this.dataloadelement).css("visibility","hidden");
b(this.dataloadelement).css("display","none")
},_updatefocusedfilter:function(){var d=this.that;
if(d.focusedfilter){d.focusedfilter.focus();
setTimeout(function(){d.focusedfilter.focus();
if(d.focusedfilter[0].nodeName.toLowerCase()=="input"){var g=d.focusedfilter.val().length;
try{if("selectionStart" in d.focusedfilter[0]){d.focusedfilter[0].setSelectionRange(g,g)
}else{var e=d.focusedfilter[0].createTextRange();
e.collapse(true);
e.moveEnd("character",g);
e.moveStart("character",g);
e.select()
}}catch(f){}}},10)
}},databind:function(g,i){if(this.loadingstate===true){return
}if(this.host.css("display")=="block"){if(this.autoshowloadelement){b(this.dataloadelement).css("visibility","visible");
b(this.dataloadelement).css("display","block");
this.dataloadelement.width(this.host.width());
this.dataloadelement.height(this.host.height());
this._hideemptyrow()
}else{b(this.dataloadelement).css("visibility","hidden");
b(this.dataloadelement).css("display","none")
}}if(!this._initgroupsheader&&this.groups.length>0){this.groups=new Array()
}var f=this.that;
if(g==null){g={}
}if(!g.recordstartindex){g.recordstartindex=0
}if(!g.recordendindex){g.recordendindex=0
}if(g.loadallrecords==undefined||g.loadallrecords==null){g.loadallrecords=true
}if(g.sortcomparer==undefined||g.sortcomparer==null){g.sortcomparer=null
}if(g.filter==undefined||g.filter==null){g.filter=null
}if(g.sort==undefined||g.sort==null){g.sort=null
}if(g.data==undefined||g.data==null){g.data=null
}var d=null;
if(g!=null){d=g._source!=undefined?g._source.url:g.url
}this.dataview=this.dataview||new b.jqx.dataview();
if(b.jqx.dataview.sort){b.extend(this.dataview,new b.jqx.dataview.sort())
}if(b.jqx.dataview.grouping){b.extend(this.dataview,new b.jqx.dataview.grouping())
}this.dataview.suspendupdate();
this.dataview.pageable=this.pageable;
this.dataview.groupable=this.groupable;
this.dataview.groups=this.groups;
this.dataview.virtualmode=this.virtualmode;
this.dataview.grid=this;
this.dataview._clearcaches();
if(!this.pageable&&this.virtualmode){this.loadondemand=true
}if(!f.initializedcall){if(g._source){if(this.sortable){if(g._source.sortcolumn!=undefined){this.sortcolumn=g._source.sortcolumn;
this.source.sortcolumn=this.sortcolumn;
this.dataview.sortfield=g._source.sortcolumn;
g._source.sortcolumn=null
}if(g._source.sortdirection!=undefined){this.dataview.sortfielddirection=g._source.sortdirection;
var h=g._source.sortdirection;
if(h=="a"||h=="asc"||h=="ascending"||h==true){var e=true
}else{var e=false
}if(h!=null){this.sortdirection={ascending:e,descending:!e}
}else{this.sortdirection={ascending:false,descending:false}
}}}}if(this.pageable){if(g._source){if(g._source.pagenum!=undefined){this.dataview.pagenum=g._source.pagenum
}if(g._source.pagesize!=undefined){this.pagesize=g._source.pagesize;
this.dataview.pagesize=g._source.pagesize
}else{this.dataview.pagesize=g._source.pagesize;
if(this.dataview.pagesize==undefined){this.dataview.pagesize=this.pagesize
}}}}if(this.sortable){if(g.sortcolumn){this.dataview.sortfield=g.sortcolumn
}if(g.sortdirection){this.dataview.sortfielddirection=g.sortdirection
}}}this._loading=true;
this.dataview.update=function(l){if(!f.pageable&&f.virtualmode){f.loadondemand=true
}f._loading=false;
if(f.dataview.isupdating()){f.dataview.resumeupdate(false)
}if(f.pageable&&f.pagerrenderer){if(f._initpager){f._initpager()
}else{throw new Error("jqxGrid: Missing reference to jqxgrid.pager.js.")
}}if((f.source&&f.source.sortcolumn)&&f.sortby&&!f.virtualmode){f.render();
if(!f.source._source.sort){f.sortby(f.source.sortcolumn,f.source.sortdirection,f.source.sortcomparer)
}f.source.sortcolumn=null
}else{var k=f.vScrollInstance.value;
var n=f.hScrollInstance.value;
var o=f.source?f.source.datatype:"array";
if(o!="local"||o!="array"){var q=f.virtualsizeinfo==null||(f.virtualsizeinfo!=null&&f.virtualsizeinfo.virtualheight==0);
if(i=="cells"){var m=false;
if(f.filterable&&f._initfilterpanel&&f.dataview.filters.length){m=true
}if(false==l){if(!f.vScrollInstance.isScrolling()&&!f.hScrollInstance.isScrolling()){f._cellscache=new Array();
f._pagescache=new Array();
f._renderrows(f.virtualsizeinfo);
if(f.showfilterrow&&f.filterable&&f.filterrow){f._updatelistfilters(true)
}if(f.showaggregates&&f._updateaggregates){f._updateaggregates()
}}if(f.sortcolumn){f.sortby(f.sortcolumn,f.dataview.sortfielddirection,f.source.sortcomparer)
}if(f.autoshowloadelement){b(f.dataloadelement).css("visibility","hidden");
b(f.dataloadelement).css("display","none")
}if(f.virtualmode&&!f._loading){f.loadondemand=true;
f._renderrows(f.virtualsizeinfo)
}return
}else{if(m){i="filter"
}else{if(f.sortcolumn!=undefined){i="sort"
}}}}if(!f.virtualmode||q||(f.virtualmode&&f.pageable)){if(f.initializedcall==true&&i=="pagechanged"){k=0;
if(f.groupable&&f.groups.length>0){f._render(true,true,false,false,false);
f._updatecolumnwidths();
f._updatecellwidths();
f._renderrows(f.virtualsizeinfo)
}else{f.rendergridcontent(true);
if(f.pageable&&f.updatepagerdetails){f.updatepagerdetails();
if(f.autoheight){f._updatepageviews();
if(f.autorowheight){f._renderrows(this.virtualsizeinfo)
}}else{if(f.autorowheight){f._updatepageviews();
f._renderrows(this.virtualsizeinfo)
}}}}if(f.showaggregates&&f._updateaggregates){f._updateaggregates()
}}else{if(i=="filter"){if(f.virtualmode){f._render(true,true,false,false,false);
f._updatefocusedfilter();
f._updatecolumnwidths();
f._updatecellwidths();
f._renderrows(f.virtualsizeinfo)
}else{f._render(true,true,false,false,false)
}}else{if(i=="sort"){if(f.virtualmode){f.rendergridcontent(true);
if(f.showaggregates&&f._updateaggregates){f._updateaggregates()
}}else{f._render(true,true,false,false,false);
if(f.sortcolumn&&!f.source.sort){f.sortby(f.sortcolumn,f.dataview.sortfielddirection,f.source.sortcomparer)
}}if(f.source.sort){f._updatefocusedfilter()
}}else{if(i=="data"){f._render(true,true,false,false,false)
}else{if(i=="state"){f._render(true,true,false,f.menuitemsarray&&f.menuitemsarray.length>0&&!f.virtualmode)
}else{f._render(true,true,true,f.menuitemsarray&&f.menuitemsarray.length>0&&!f.virtualmode)
}}}}}}else{if(f.virtualmode&&l==true&&!f.pageable){f._render(true,true,false,false,false);
f._updatefocusedfilter();
f._updatecolumnwidths();
f._updatecellwidths();
f._renderrows(f.virtualsizeinfo)
}else{if(f.virtualmode&&!f.pageable&&l==false&&i!=undefined){f.rendergridcontent(true);
if(f.showaggregates&&f._updateaggregates){f._updateaggregates()
}}else{if(f.virtualmode&&f.dataview.totalrecords==0&&f.dataview.filters.length>0){f._render(true,true,true,f.menuitemsarray&&!f.virtualmode)
}else{f._pagescache=new Array();
f._renderrows(f.virtualsizeinfo)
}}}}if(f.vScrollInstance.value!=k&&k<=f.vScrollInstance.max){f.vScrollInstance.setPosition(k)
}if(f.hScrollInstance.value!=n&&n<=f.hScrollInstance.max){f.hScrollInstance.setPosition(n)
}}}if(f.autoshowloadelement){b(f.dataloadelement).css("visibility","hidden");
b(f.dataloadelement).css("display","none")
}if(f.pageable){if(f.pagerrightbutton){f.pagerrightbutton.jqxButton({disabled:false});
f.pagerleftbutton.jqxButton({disabled:false});
f.pagershowrowscombo.jqxDropDownList({disabled:false})
}if(f.pagerfirstbutton){f.pagerfirstbutton.jqxButton({disabled:false});
f.pagerlastbutton.jqxButton({disabled:false})
}}f._raiseEvent(11);
if(!f.initializedcall){var p=function(){f._raiseEvent(0);
f.initializedcall=true;
f.isInitialized=true;
if(f.ready){f.ready()
}if(f.renderstatusbar){f.renderstatusbar(f.statusbar)
}if(f.rendertoolbar){f.rendertoolbar(f.toolbar)
}if(f.autoloadstate){if(f.loadstate){f.loadstate(null,true)
}}};
if(!b.jqx.isHidden(f.host)){p()
}else{if(f.readyInterval){clearInterval(f.readyInterval)
}f.readyInterval=setInterval(function(){if(!b.jqx.isHidden(f.host)){if(f.__isRendered){clearInterval(f.readyInterval);
f.readyInterval=null;
p();
f._initmenu()
}}},200)
}if((f.width!=null&&f.width.toString().indexOf("%")!=-1)||(f.height!=null&&f.height.toString().indexOf("%")!=-1)){}if(f.host.css("visibility")=="hidden"){var j=b.jqx.browser.msie&&b.jqx.browser.version<8;
if(f.vScrollBar.css("visibility")=="visible"){f.vScrollBar.css("visibility","inherit")
}if(!f.autowidth){if(f.hScrollBar.css("visibility")=="visible"){f.hScrollBar.css("visibility","inherit")
}}f._intervalTimer=setInterval(function(){if(f.host.css("visibility")=="visible"){f._updatesize(true);
clearInterval(f._intervalTimer)
}},100)
}}else{f._updateTouchScrolling()
}};
this.dataview.databind(g);
if(this.dataview.isupdating()){if(d!=undefined){this.dataview.suspend=false
}else{this.dataview.resumeupdate(false)
}}this._initializeRows()
},scrollto:function(e,d){if(undefined!=e){this.hScrollInstance.setPosition(e)
}if(undefined!=d){this.vScrollInstance.setPosition(d)
}},scrollposition:function(){return{top:this.vScrollInstance.value,left:this.hScrollInstance.value}
},ensurerowvisible:function(h){if(this.autoheight&&!this.pageable){return true
}var e=this._getpagesize();
var g=Math.floor(h/e);
if(!this._pageviews[g]&&!this.pageable){this._updatepageviews()
}if(this.groupable&&this.groups.length>0){return true
}var n=false;
if(this.pageable&&this.gotopage&&!this.virtualmode){var g=Math.floor(h/e);
if(this.dataview.pagenum!=g){if(this.groupable&&this.groups.length>0){return true
}this.gotopage(g);
n=true
}}var l=this.vScrollInstance.value;
var m=this._gettableheight()-this.rowsheight;
var d=e*(h/e-g);
d=Math.round(d);
if(this._pageviews[g]){var k=this._pageviews[g].top;
var j=k+d*this.rowsheight;
if(this.rowdetails){for(var f=e*g;
f<h;
f++){if(this.details[f]){if(this.details[f].rowdetailshidden==false){j+=this.details[f].rowdetailsheight
}}}}if(this.scrollmode=="deferred"){if(this.vScrollInstance.max<=j+this.rowsheight){j=this.vScrollInstance.max
}}if(j<l){this.scrolltop(j);
n=true
}else{if(j>l+m+2){this.scrolltop(j-m);
n=true
}}}else{if(this.pageable){var j=d*this.rowsheight;
if(this.rowdetails){for(var f=e*g;
f<e*g+d;
f++){if(this.details[f]&&this.details[f].rowdetailshidden==false){j+=this.details[f].rowdetailsheight
}}}if(j<l||j>l+m){this.scrollto(0,j);
n=true
}}}return n
},ensurecellvisible:function(h,d){var n=this.that;
var i=this.hScrollBar.jqxScrollBar("value");
var j=n.hScrollInstance.max;
if(n.rtl){if(this.hScrollBar.css("visibility")!="visible"){j=0
}}var o=this.ensurerowvisible(h);
var e=0;
if(this.columns.records){var m=i;
if(this.hScrollBar.css("visibility")=="hidden"){return
}var l=this.host.width();
var k=0;
var f=this.vScrollBar.css("visibility")=="visible"?20:0;
var g=false;
b.each(this.columns.records,function(){if(this.hidden){return true
}if(this.datafield==d){var q=0;
var p=!n.rtl?m:j-i;
if(e+this.width>p+l-f){q=e+this.width-l+f;
if(n.rtl){q=j-q
}n.scrollleft(q);
g=true
}else{if(e<=p){q=e-this.width;
if(n.rtl){q=j-q
}n.scrollleft(q);
g=true
}}if(k==0){if(n.rtl){n.scrollleft(j)
}else{n.scrollleft(0)
}g=true
}else{if(k==n.columns.records.length-1){if(n.hScrollBar.css("visibility")=="visible"){if(!n.rtl){n.scrollleft(n.hScrollBar.jqxScrollBar("max"))
}else{n.scrollleft(n.hScrollBar.jqxScrollBar("min"))
}g=true
}}}return false
}k++;
e+=this.width
});
if(!g){n.scrollleft(m)
}}return o
},setrowheight:function(e,d){if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);
return false
}if(e==null||d==null){return false
}this.heightboundrows[e]={index:e,height:d};
e=this.getrowvisibleindex(e);
if(e<0){return false
}if(this.rows.records[e]){this.rows.records[e].height=d
}else{row=new a(this,null);
row.height=d;
this.rows.replace(e,row)
}this.heights[e]=d;
this.rendergridcontent(true);
return true
},getrowheight:function(d){if(d==null){return null
}d=this.getrowvisibleindex(d);
if(d<0){return false
}if(this.rows.records[d]){return this.rows.records[d].height
}},setrowdetails:function(f,h,d,j){if(f==undefined||f==null||f<0){return
}var e=f+"_";
if(this._rowdetailscache[e]){var g=this._rowdetailscache[e].element;
b(g).remove();
this._rowdetailscache[e]=null
}var i=this.dataview.generatekey();
this.detailboundrows[f]={index:f,details:{rowdetails:h,rowdetailsheight:d,rowdetailshidden:j,key:i}};
f=this.getrowvisibleindex(f);
if(f<0){return false
}return this._setrowdetails(f,h,d,j,i)
},getcolumn:function(d){var e=null;
if(this.columns.records){b.each(this.columns.records,function(){if(this.datafield==d||this.displayfield==d){e=this;
return false
}})
}return e
},_getcolumnindex:function(e){var d=-1;
if(this.columns.records){b.each(this.columns.records,function(){d++;
if(this.datafield==e){return false
}})
}return d
},_getcolumnat:function(d){var e=this.columns.records[d];
return e
},_getprevvisiblecolumn:function(e){var d=this.that;
while(e>0){e--;
var f=d.getcolumnat(e);
if(!f){return null
}if(!f.hidden){return f
}}return null
},_getnextvisiblecolumn:function(e){var d=this.that;
while(e<this.columns.records.length){e++;
var f=d.getcolumnat(e);
if(!f){return null
}if(!f.hidden){return f
}}return null
},getcolumnat:function(d){if(!isNaN(d)){var e=this.columns.records[d];
return e
}return null
},_getcolumn:function(d){var e=null;
b.each(this._columns,function(){if(this.datafield==d||this.displayfield==d){e=this;
return false
}});
return e
},_setcolumnproperty:function(e,g,h){if(e==null||g==null||h==null){return null
}g=g.toLowerCase();
var f=this.getcolumn(e);
if(f==null){return
}var i=f[g];
f[g]=h;
var d=this._getcolumn(e);
if(d!=null){d[g]=h
}this._cellscache=new Array();
switch(g){case"filteritems":if(this.filterable&&this.showfilterrow){this._updatelistfilters(true,true)
}break;
case"text":this.prerenderrequired=true;
this._rendercolumnheaders();
this._updatecellwidths();
if(this._groupsheader()){if(this._initgroupsheader){this._initgroupsheader()
}}this._renderrows(this.virtualsizeinfo);
break;
case"editable":case"resizable":case"draggable":if(g=="editable"){if(h!=i){if(this.editcell!=null&&this.endcelledit){this.endcelledit(this.editcell.row,this.editcell.column,true,true)
}if(f.columntype=="checkbox"){this.prerenderrequired=true;
this.rendergridcontent(true,false);
if(this.updating()){return false
}}if(this.updating()){return false
}this._renderrows(this.virtualsizeinfo)
}}break;
case"hidden":case"hideable":case"renderer":case"cellsrenderer":case"align":case"aggregates":case"cellsalign":case"cellsformat":case"pinned":case"contenttype":case"filterable":case"groupable":case"cellclass":case"cellclassname":case"classname":case"class":this.prerenderrequired=true;
if(g=="pinned"){this._initializeColumns()
}this.rendergridcontent(true);
if(this.updating()){return false
}if(g=="hidden"){this._updatecolumnwidths();
this._updatecellwidths()
}this._renderrows(this.virtualsizeinfo);
if(this.showaggregates&&this._updateaggregates){this._updateaggregates()
}break;
case"width":case"minwidth":case"maxwidth":if(this.updating()){return false
}f._width=null;
f._percentagewidth=null;
this._updatecolumnwidths();
this._updatecellwidths();
this._renderrows(this.virtualsizeinfo);
break
}},_getcolumnproperty:function(d,f){if(d==null||f==null){return null
}f=f.toLowerCase();
var e=this.getcolumn(d);
return e[f]
},setcolumnproperty:function(d,e,f){this._setcolumnproperty(d,e,f)
},getcolumnproperty:function(d,e){return this._getcolumnproperty(d,e)
},hidecolumn:function(d){this._setcolumnproperty(d,"hidden",true)
},showcolumn:function(d){this._setcolumnproperty(d,"hidden",false)
},iscolumnvisible:function(d){return !this._getcolumnproperty(d,"hidden")
},pincolumn:function(d){this._setcolumnproperty(d,"pinned",true)
},unpincolumn:function(d){this._setcolumnproperty(d,"pinned",false)
},iscolumnpinned:function(d){return this._getcolumnproperty(d,"pinned")
},_setrowdetails:function(j,d,n,h,e){if(n==0){n=100
}if(j==null||n==null){return false
}if(e!=null){this.details[j]={rowdetails:d,rowdetailsheight:n,rowdetailshidden:h,detailskey:e}
}else{var m=this.details[j]!=null?this.details[j].detailskey:null;
var l={rowdetails:d,rowdetailsheight:n,rowdetailshidden:h,detailskey:m};
var k=this.that;
for(var g=0;
g<this.detailboundrows.length;
g++){if(this.detailboundrows[g]!=undefined){var f=this.detailboundrows[g];
if(f.details.detailskey==m){f.details.rowdetailsheight=l.rowdetailsheight;
f.details.rowdetailshidden=l.rowdetailshidden;
f.details.rowdetails=l.rowdetails;
break
}}}this.details[j]=l
}this.rendergridcontent(true);
this._updatecolumnwidths();
this._updatecellwidths();
this._renderrows(this.virtualsizeinfo);
return true
},getrowdetails:function(d){if(d==null){return false
}d=this.getrowvisibleindex(d);
return this._getrowdetails(d)
},_getrowdetails:function(d){if(d==null){return false
}if(d<0){return false
}if(this.details[d]){return this.details[d]
}if(this.rowdetailstemplate){return this.rowdetailstemplate
}},getrecordscount:function(){return this.dataview.totalrecords
},showrowdetails:function(d){if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);
return false
}if(d==null){return false
}d=this.getrowvisibleindex(d);
if(d<0){return false
}var e=this._getrowdetails(d);
return this._setrowdetailsvisibility(d,e,false)
},hiderowdetails:function(d){if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);
return false
}d=this.getrowvisibleindex(d);
if(d<0){return false
}var e=this._getrowdetails(d);
return this._setrowdetailsvisibility(d,e,true)
},_togglerowdetails:function(i){var f=i.visibleindex;
var g=this._getrowdetails(f);
if(g!=null){var e=this.vScrollInstance.value;
var h=!g.rowdetailshidden;
var d=this._setrowdetailsvisibility(f,g,h);
if(e!==0&&this.vScrollBar.css("visibility")!=="hidden"){if(e<=this.vScrollInstance.max){this.vScrollInstance.setPosition(e)
}else{this.vScrollInstance.setPosition(this.vScrollInstance.max)
}}return d
}return false
},_setrowdetailsvisibility:function(e,f,h){if(this.rowdetailstemplate){if(!this.details){this.details=new Array()
}if(!this.details[e]){this.details[e]={rowdetailshidden:this.rowdetailstemplate.rowdetailshidden,rowdetailsheight:this.rowdetailstemplate.rowdetailsheight,rowdetails:this.rowdetailstemplate.rowdetails};
var g=this.dataview.generatekey();
this.details[e].detailskey=g;
this.detailboundrows[e]={index:e,details:this.details[e]}
}}if(f!=null){this.details[e].rowdetailshidden=h
}else{return false
}var d=this.details[e];
if(h){this._raiseEvent(21,{rowindex:e,details:d.rowdetails,height:d.rowdetailsheight})
}else{this._raiseEvent(20,{rowindex:e,details:d.rowdetails,height:d.rowdetailsheight})
}return this._setrowdetails(e,d.rowdetails,d.rowdetailsheight,d.rowdetailshidden)
},getrowvisibleindex:function(d){if(d==undefined||d==null||d<0){return false
}if(this.virtualmode){var e=this.dataview.loadedrecords[d];
if(e==undefined){return -1
}return e.visibleindex
}return this.getrowdisplayindex(d)
},hiderow:function(d){if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);
return false
}if(d==undefined||d==null||d<0){return false
}if(d==null){return false
}this.hiddenboundrows[d]={index:d,hidden:true};
d=this.getrowvisibleindex(d);
return this._setrowvisibility(d,true)
},showrow:function(d){if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);
return false
}if(d==undefined||d==null||d<0){return false
}if(d==null){return false
}this.hiddenboundrows[d]={index:d,hidden:false};
d=this.getrowvisibleindex(d);
return this._setrowvisibility(d,false)
},isrowhiddenat:function(d){if(d==null){return null
}d=this.getrowvisibleindex(d);
if(this.rows.records[d]){return this.rows.records[d].hidden
}},_setrowvisibility:function(d,f,e){if(d==null){return false
}this.hiddens[d]=f;
if(e==undefined||e){this.rendergridcontent(true);
return true
}return false
},_loadrows:function(){if(!this._pageviews[this.dataview.pagenum]&&!this.pageable){return
}var t=!this.pageable?this._pageviews[this.dataview.pagenum].top:0;
if(!this.pageable&&this._pagescache[this.dataview.pagenum]!=undefined){return null
}if(!this.virtualsizeinfo){return
}var h=this.that;
var f=new Array();
var u=new Array();
var k=h.groupable&&h.groups.length>0;
var n=this.dataview.totalrecords;
var r=this.virtualsizeinfo.virtualheight;
var g=0;
this.rows.beginupdate();
var s=this.dataview.pagesize;
if(this.pageable&&k){s=this.dataview.rows.length
}for(var l=0;
l<s;
l++){if(l>=this.dataview.rows.length){break
}var o=this.dataview.rows[l];
var j=null;
if(!h.rows.records[o.visibleindex]){j=new a(h,o)
}else{j=h.rows.records[o.visibleindex];
j.setdata(o)
}j.hidden=this.hiddens[j.visibleindex];
if(this.rowdetailstemplate){j.rowdetails=this.rowdetailstemplate.rowdetails;
j.rowdetailsheight=this.rowdetailstemplate.rowdetailsheight;
j.rowdetailshidden=this.rowdetailstemplate.rowdetailshidden
}var d=this.details[j.visibleindex];
if(d){j.rowdetails=d.rowdetails;
j.rowdetailsheight=d.rowdetailsheight;
j.rowdetailshidden=d.rowdetailshidden
}else{if(!this.rowdetailstemplate){j.rowdetails=null
}}if(k&&this.pageable&&j.parentbounddata!=null){var e=f[j.parentbounddata.uniqueid];
if(e!=null){var q=this._findgroupstate(e.uniqueid);
if(this._setsubgroupsvisibility){this._setsubgroupsvisibility(this,j.parentbounddata,!q,false)
}j.hidden=this.hiddens[j.visibleindex]
}if(e!=null&&e!=undefined){j.parentrow=e;
e.subrows[e.subrows.length++]=j
}}if(j.hidden){continue
}var m=o.visibleindex;
if(!this.heights[m]){this.heights[m]=this.rowsheight
}j.height=this.heights[m];
if(this.rowdetails){if(j.rowdetails&&!j.rowdetailshidden){j.height+=j.rowdetailsheight
}}f[j.uniqueid]=j;
u[g++]=j;
j.top=t;
t+=j.height;
var p=m;
h.rows.replace(p,j)
}if((this.autoheight||this.pageable)&&this.autorowheight){if(this._pageviews&&this._pageviews.length>0){this._pageviews[0].height=t
}}this.rows.resumeupdate();
if(u.length>0){this._pagescache[this.dataview.pagenum]=u
}},_gettableheight:function(){if(this.tableheight!=undefined){return this.tableheight
}var e=this.host.height();
if(this.columnsheader){var d=this.columnsheader.outerHeight();
if(!this.showheader){d=0
}}e-=d;
if(this.hScrollBar[0].style.visibility=="visible"){e-=this.hScrollBar.outerHeight()
}if(this.pageable){e-=this.pager.outerHeight()
}if(this._groupsheader()){e-=this.groupsheader.outerHeight()
}if(this.showtoolbar){e-=this.toolbarheight
}if(this.showstatusbar){e-=this.statusbarheight
}if(e>0){this.tableheight=e;
return e
}return this.host.height()
},_getpagesize:function(){if(this.pageable){return this.pagesize
}if(this.virtualmode){var e=Math.round(this.host.height())+2*this.rowsheight;
var d=Math.round(e/this.rowsheight);
return d
}if(this.autoheight||this.autorowheight){if(this.dataview.totalrows==0){return 1
}return this.dataview.totalrows
}if(this.dataview.totalrows<100&&this.dataview.totalrecords<100&&this.dataview.totalrows>0){return this.dataview.totalrows
}return 100
},_calculatevirtualheight:function(){var n=this.that;
var e=Math.round(this.host.height())+2*this.rowsheight;
realheight=this._gettableheight();
var p=Math.round(e/this.rowsheight);
this.heights=new Array();
this.hiddens=new Array();
this.details=new Array();
this.expandedgroups=new Array();
this.hiddenboundrows=new Array();
this.heightboundrows=new Array();
this.detailboundrows=new Array();
var h=Math.max(this.dataview.totalrows,this.dataview.totalrecords);
if(this.pageable){h=this.pagesize;
if(this.pagesize>Math.max(this.dataview.totalrows,this.dataview.totalrecords)&&this.autoheight){h=Math.max(this.dataview.totalrows,this.dataview.totalrecords)
}else{if(!this.autoheight){if(this.dataview.totalrows<this.pagesize){h=Math.max(this.dataview.totalrows,this.dataview.totalrecords)
}}}}var l=h*this.rowsheight;
var m=0;
var j=0;
var k=0;
var f=this._getpagesize();
var d=f*this.rowsheight;
var g=0;
if(!this.pageable&&this.autoheight){p=h
}if(h+f>0){while(g<=h+f){m+=d;
if(g-f<h&&g>=h){var o=g-h;
if(o>0){k-=d;
this._pageviews[j-1]={top:k,height:d-o*this.rowsheight}
}break
}else{this._pageviews[j++]={top:k,height:d}
}k=m;
g+=f
}}if(this.resizingGrid!=true){this.vScrollBar.jqxScrollBar({value:0})
}if(l>realheight&&!this.autoheight){this.vScrollBar.css("visibility","visible");
if(this.scrollmode=="deferred"){this.vScrollBar.jqxScrollBar({max:l})
}else{this.vScrollBar.jqxScrollBar({max:l-realheight})
}}else{this.vScrollBar.css("visibility","hidden")
}this.dataview.pagesize=f;
this.dataview.updateview();
return{visiblerecords:p,virtualheight:l}
},_updatepageviews:function(){if(this.updating()){return
}this._pagescache=new Array();
this._pageviews=new Array();
this.tableheight=null;
var h=this.that;
var d=Math.round(this.host.height())+2*this.rowsheight;
var j=Math.round(d/this.rowsheight);
var q=Math.max(this.dataview.totalrows,this.dataview.totalrecords);
var u=q*this.rowsheight;
var g=0;
var t=0;
var r=0;
var s=0;
var o=0;
var n=this._getpagesize();
if(!this.pageable){for(var f=0;
f<q;
f++){var e={index:f,height:this.heights[f],hidden:this.hiddens[f],details:this.details[f]};
if(this.heights[f]==undefined){this.heights[f]=this.rowsheight;
e.height=this.rowsheight
}if(this.hiddens[f]==undefined){this.hiddens[f]=false;
e.hidden=false
}if(this.details[f]==undefined){this.details[f]=null
}if(e.height!=h.rowsheight){u-=h.rowsheight;
u+=e.height
}if(e.hidden){u-=e.height
}else{t+=e.height;
var p=0;
if(this.rowdetails){if(this.rowdetailstemplate){if(!e.details){e.details=this.rowdetailstemplate
}}if(e.details&&e.details.rowdetails&&!e.details.rowdetailshidden){p=e.details.rowdetailsheight;
t+=p;
u+=p
}}g+=e.height+p
}o++;
if(o>=n||f==q-1){this._pageviews[r++]={top:s,height:t};
t=0;
s=g;
o=0
}}}else{if(this._updatepagedview){u=this._updatepagedview(q,u,0)
}if(this.autoheight){this._arrange()
}}var l=this._gettableheight();
if(u>l){if(this.pageable&&this.gotopage){u=this._pageviews[0].height;
if(u<0){u=this._pageviews[0].height
}}if(this.vScrollBar.css("visibility")!="visible"){this.vScrollBar.css("visibility","visible")
}if(u<=l||this.autoheight){this.vScrollBar.css("visibility","hidden")
}if(u-l>0){if(this.scrollmode!="deferred"){var v=u-l;
var m=this.vScrollInstance.max;
this.vScrollBar.jqxScrollBar({max:v});
if(v!=m){this.vScrollBar.jqxScrollBar({value:0})
}}}else{this.vScrollBar.jqxScrollBar({value:0,max:u})
}}else{if(!this._loading){this.vScrollBar.css("visibility","hidden")
}this.vScrollBar.jqxScrollBar({value:0})
}this._arrange();
if(this.autoheight){j=Math.round(this.host.height()/this.rowsheight)
}this.virtualsizeinfo={visiblerecords:j,virtualheight:u}
},updatebounddata:function(d){if(d!="data"&&d!="sort"&&d!="filter"&&d!="cells"&&d!="pagechanged"&&d!="pagesizechanged"&&!this.virtualmode){this.virtualsizeinfo=null;
if(this.showfilterrow&&this.filterable&&this.filterrow){if(this.clearfilters){this.clearfilters(false)
}this.filterrow.remove();
this._filterrowcache=new Array();
this.filterrow=null
}else{if(this.filterable){if(this.clearfilters){this.clearfilters(false)
}}}if(this.groupable){this.dataview.groups=[];
this.groups=[]
}if(this.pageable){this.pagenum=0;
this.dataview.pagenum=0
}if(this.sortable){this.sortcolumn=null;
this.sortdirection="";
this.dataview.sortfielddirection="";
this.dataview.clearsortdata()
}}this.databind(this.source,d)
},refreshdata:function(){this._refreshdataview();
this.render()
},_updatevscrollbarmax:function(){if(this._pageviews&&this._pageviews.length>0){var f=this._pageviews[0].height;
if(this.virtualmode||!this.pageable){f=this.virtualsizeinfo.virtualheight
}var e=this._gettableheight();
if(f>e){if(this.pageable&&this.gotopage){f=this._pageviews[0].height;
if(f<0){f=this._pageviews[0].height
}}if(this.vScrollBar.css("visibility")!="visible"){this.vScrollBar.css("visibility","visible")
}if(f<=e||this.autoheight){this.vScrollBar.css("visibility","hidden")
}if(f-e>0){var d=f-e;
this.vScrollBar.jqxScrollBar({max:d})
}else{this.vScrollBar.jqxScrollBar({value:0,max:f})
}}else{this.vScrollBar.css("visibility","hidden");
this.vScrollBar.jqxScrollBar({value:0})
}}},_refreshdataview:function(){this.dataview.refresh()
},refresh:function(d){if(d!=true){if(b.jqx.isHidden(this.host)){return
}if(this.virtualsizeinfo!=null){this._cellscache=new Array();
this._renderrows(this.virtualsizeinfo);
this._updatesize()
}}},render:function(){this._render(true,true,true,true)
},invalidate:function(){if(this.virtualsizeinfo){this._updatecolumnwidths();
this._updatecellwidths();
this._renderrows(this.virtualsizeinfo)
}},clear:function(){this.databind(null);
this.render()
},_preparecolumngroups:function(){var k=this.columnsheight;
if(this.columngroups){this.columnshierarchy=new Array();
if(this.columngroups.length){var q=this;
for(var m=0;
m<this.columngroups.length;
m++){this.columngroups[m].parent=null;
this.columngroups[m].groups=null
}for(var m=0;
m<this.columns.records.length;
m++){this.columns.records[m].parent=null;
this.columns.records[m].groups=null
}var l=function(i){for(var j=0;
j<q.columngroups.length;
j++){var u=q.columngroups[j];
if(u.name===i){return u
}}return null
};
for(var m=0;
m<this.columngroups.length;
m++){var n=this.columngroups[m];
if(!n.groups){n.groups=null
}if(n.parentgroup){var o=l(n.parentgroup);
if(o){n.parent=o;
if(!o.groups){o.groups=new Array()
}if(o.groups.indexOf(n)===-1){o.groups.push(n)
}}}}for(var m=0;
m<this.columns.records.length;
m++){var n=this.columns.records[m];
if(n.columngroup){var o=l(n.columngroup);
if(o){if(!o.groups){o.groups=new Array()
}n.parent=o;
if(o.groups.indexOf(n)===-1){o.groups.push(n)
}}}}var e=0;
for(var m=0;
m<this.columns.records.length;
m++){var n=this.columns.records[m];
var r=n;
n.level=0;
while(r.parent){r=r.parent;
n.level++
}var r=n;
var d=n.level;
e=Math.max(e,n.level);
while(r.parent){r=r.parent;
if(r){r.level=--d
}}}var h=function(w){var v=new Array();
if(w.columngroup){v.push(w)
}if(w.groups){for(var u=0;
u<w.groups.length;
u++){if(w.groups[u].columngroup){v.push(w.groups[u])
}else{if(w.groups[u].groups){var j=h(w.groups[u]);
for(var i=0;
i<j.length;
i++){v.push(j[i])
}}}}}return v
};
for(var m=0;
m<this.columngroups.length;
m++){var n=this.columngroups[m];
var g=h(n);
n.columns=g;
var s=new Array();
var p=0;
for(var f=0;
f<g.length;
f++){s.push(this.columns.records.indexOf(g[f]));
if(g[f].pinned){p++
}}if(p!=0){throw new Error("jqxGrid: Column Groups initialization Error. Please, check the initialization of the jqxGrid's columns array. The columns in a column group cannot be pinned.")
}s.sort(function(j,i){j=parseInt(j);
i=parseInt(i);
if(j<i){return -1
}if(j>i){return 1
}return 0
});
for(var t=1;
t<s.length;
t++){if(s[t]!=s[t-1]+1){throw new Error("jqxGrid: Column Groups initialization Error. Please, check the initialization of the jqxGrid's columns array. The columns in a column group are expected to be siblings in the columns array.");
this.host.remove()
}}}}this.columngroupslevel=1+e;
k=this.columngroupslevel*this.columnsheight
}return k
},_render:function(h,j,g,d,f){if(this.dataview==null){return
}if(this._loading){return
}if(b.jqx.isHidden(this.host)){var i=this;
if(i.___hiddenTimer){clearInterval(i.___hiddenTimer);
i.___hiddenTimer=null
}this.___hiddenTimer=setInterval(function(){if(!b.jqx.isHidden(i.host)){clearInterval(i.___hiddenTimer);
i.render()
}},300);
return
}if(this.editcell!=null&&this.endcelledit){this.endcelledit(this.editcell.row,this.editcell.column,true,false)
}this.validationpopup=null;
this._removeHandlers();
this._addHandlers();
this._initializeRows();
this._requiresupdate=j!=undefined?j:true;
this._newmax=null;
if(g){if(!this._requiresupdate){if(d!=false){this._initmenu()
}}if(this.columns==null){this.columns=new b.jqx.collection(this.element)
}else{this._initializeColumns()
}}this.tableheight=null;
this._pagescache=new Array();
this._pageviews=new Array();
this.visiblerows=new Array();
this.hittestinfo=new Array();
if(this._requiresupdate){this._clearcaches();
if(d==true){this._initmenu()
}}this.virtualsizeinfo=null;
this.prerenderrequired=true;
if((this.groupable&&this.groups.length>0&&this.rowdetails)||(this.rowdetails)){if(this.gridcontent){this._rowdetailscache=new Array();
this._rowdetailselementscache=new Array();
this.detailboundrows=new Array();
this.details=new Array();
b.jqx.utilities.html(this.gridcontent,"");
this.gridcontent=null
}}if(this.gridcontent){if(this.editable&&this._destroyeditors){this._destroyeditors()
}}if(g){if(this.filterrow){this.filterrow.detach()
}b.jqx.utilities.html(this.content,"");
this.columnsheader=this.columnsheader||b('<div style="overflow: hidden;"></div>');
this.columnsheader.remove();
this.columnsheader.addClass(this.toTP("jqx-widget-header"));
this.columnsheader.addClass(this.toTP("jqx-grid-header"))
}else{if(this.gridcontent){b.jqx.utilities.html(this.gridcontent,"")
}}if(!this.showheader){this.columnsheader.css("display","none")
}else{if(this.columnsheader){this.columnsheader.css("display","block")
}}this.gridcontent=this.gridcontent||b('<div style="width: 100%; overflow: hidden; position: absolute;"></div>');
this.gridcontent.remove();
var e=this.columnsheight;
e=this._preparecolumngroups();
if(this.showfilterrow&&this.filterable){this.columnsheader.height(e+this.filterrowheight)
}else{this.columnsheader.height(e)
}this.content.append(this.columnsheader);
this.content.append(this.gridcontent);
this._arrange();
if(this._initgroupsheader){this._initgroupsheader()
}this.selectionarea=this.selectionarea||b("<div style='z-index: 99999; visibility: hidden; position: absolute;'></div>");
this.selectionarea.addClass(this.toThemeProperty("jqx-grid-selectionarea"));
this.selectionarea.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
this.content.append(this.selectionarea);
this.tableheight=null;
this.rendergridcontent(false,g);
if(this.groups.length>0&&this.groupable){var k=this.vScrollBar[0].style.visibility;
this.suspendgroupevents=true;
if(this.collapseallgroups){if(!this.groupsexpandedbydefault){this.collapseallgroups(false);
this._updatescrollbarsafterrowsprerender()
}else{this.expandallgroups(false)
}}if(this.vScrollBar[0].style.visibility!=k){this._updatecolumnwidths();
this._updatecellwidths()
}this.suspendgroupevents=false
}if(this.pageable&&this.updatepagerdetails){this.updatepagerdetails();
if(this.autoheight){this._updatepageviews()
}if(this.autorowheight){if(!this.autoheight){this._updatepageviews()
}this._renderrows(this.virtualsizeinfo)
}}if(this.showaggregates&&this._updateaggregates){this._updateaggregates()
}this._addoverlayelement();
if(this.scrollmode=="deferred"){this._addscrollelement()
}if(this.showfilterrow&&this.filterable&&this.filterrow&&(f==undefined||f==true)){this._updatelistfilters(!g)
}if(this.rendered){this.rendered("full")
}this.__isRendered=true
},_addoverlayelement:function(){if(this.autoheight){if(this._overlayElement){this._overlayElement.remove()
}this._updateTouchScrolling();
return
}var d=b.jqx.utilities.getBrowser();
if((d.browser=="msie"&&parseInt(d.version)<9)||this.isTouchDevice()){if(this._overlayElement){this._overlayElement.remove()
}this._overlayElement=b("<div style='visibility: hidden; position: absolute; width: 100%; height: 100%;'></div>");
this._overlayElement.css("background","white");
this._overlayElement.css("z-index",18000);
this._overlayElement.css("opacity",0.001);
if(this.isTouchDevice()){if(this.vScrollBar.css("visibility")!=="hidden"||this.hScrollBar.css("visibility")!=="hidden"){var e=0;
if(this.selectionmode=="checkbox"){e+=30
}if(this.groupable||this.rowdetails){this._overlayElement.css("left",30*(this.groups.length+(this.rowdetails?1:0)))
}var f=this._overlayElement.css("left");
this._overlayElement.css("left",f+e)
}else{if(this._overlayElement){this._overlayElement.remove()
}}}else{this.content.prepend(this._overlayElement)
}}this._updateTouchScrolling()
},_addscrollelement:function(){if(this._scrollelement){this._scrollelement.remove()
}if(this._scrollelementoverlay){this._scrollelementoverlay.remove()
}this._scrollelementoverlay=b("<div style='visibility: hidden; position: absolute; width: 100%; height: 100%;'></div>");
this._scrollelementoverlay.css("background","black");
this._scrollelementoverlay.css("z-index",18000);
this._scrollelementoverlay.css("opacity",0.1);
this._scrollelement=b("<span style='visibility: hidden; top: 50%; right: 10px; position: absolute;'></span>");
this._scrollelement.css("z-index",18005);
this._scrollelement.addClass(this.toThemeProperty("jqx-button"));
this._scrollelement.addClass(this.toThemeProperty("jqx-fill-state-normal"));
this._scrollelement.addClass(this.toThemeProperty("jqx-rc-all"));
this._scrollelement.addClass(this.toThemeProperty("jqx-shadow"));
this.content.prepend(this._scrollelement);
this.content.prepend(this._scrollelementoverlay)
},rendergridcontent:function(d,f){if(this.updating()){return false
}if(d==undefined||d==null){d=false
}this._requiresupdate=d;
var h=this.prerenderrequired;
if(this.prerenderrequired){this._arrange()
}var g=this.that;
var f=f;
if(f==null||f==undefined){f=true
}this.tableheight=null;
g.virtualsizeinfo=g.virtualsizeinfo||g._calculatevirtualheight();
if(g.pageable&&!g.autoheight){if(g.dataview.totalrows<g.pagesize){g._requiresupdate=true
}}if(f){g._rendercolumnheaders()
}else{if(this._rendersortcolumn){this._rendersortcolumn()
}if(this._renderfiltercolumn){this._renderfiltercolumn()
}}g._renderrows(g.virtualsizeinfo);
if(this.gridcontent){if(this.gridcontent[0].scrollTop!=0){this.gridcontent[0].scrollTop=0
}if(this.gridcontent[0].scrollLeft!=0){this.gridcontent[0].scrollLeft=0
}}if(h){var e=this.tableheight;
this._arrange();
if(e!=this.tableheight&&this.autoheight){g._renderrows(g.virtualsizeinfo)
}}if(this.rtl){this._renderhorizontalscroll()
}if(this.autosavestate){if(this.initializedcall!=null){if(this.savestate){this.savestate()
}}}return true
},_updatecolumnwidths:function(){var l=this.host.width();
var e=l;
var k="";
if(this.columns==undefined||this.columns.records==undefined){return
}var n=this.that;
var g=this.rowdetails&&this.showrowdetailscolumn?(1+this.groups.length)*this.groupindentwidth:(this.groups.length)*this.groupindentwidth;
b.each(this.columns.records,function(p,q){if(!(this.hidden&&this.hideable)){if(this.width.toString().indexOf("%")!=-1||this._percentagewidth!=undefined){var q=0;
var r=n.vScrollBar[0].style.visibility=="hidden"?0:n.scrollbarsize+5;
var o=e;
q=parseFloat(this.width)*o/100;
r+=g;
if(this._percentagewidth!=undefined){q=parseFloat(this._percentagewidth)*(o-r)/100
}if(q<this.minwidth&&this.minwidth!="auto"){q=this.minwidth
}if(q>this.maxwidth&&this.maxwidth!="auto"){q=this.maxwidth
}l-=q
}else{if(this.width!="auto"&&!this._width){l-=this.width
}else{k+=this.text
}}}});
var f=this._gettableheight();
if(!this.autoheight){if(this.virtualsizeinfo&&this.virtualsizeinfo.virtualheight>f){if(this.groupable&&this.groups.length>0){if(this.dataview&&this.dataview.loadedrootgroups&&!this.groupsexpandedbydefault){var m=this.dataview.loadedrootgroups.length*this.rowsheight;
if(this.pageable){for(var d=0;
d<this.dataview.rows.length;
d++){if(this.dataview.rows[d].group&&this.dataview.rows[d].level===0){m+=this.rowsheight
}}}if(m>f){l-=this.scrollbarsize+5;
e-=this.scrollbarsize+5
}else{if(this.vScrollBar.css("visibility")=="visible"){l-=this.scrollbarsize+5;
e-=this.scrollbarsize+5
}}}else{l-=this.scrollbarsize+5;
e-=this.scrollbarsize+5
}}else{l-=this.scrollbarsize+5;
e-=this.scrollbarsize+5
}}}var g=this.rowdetails&&this.showrowdetailscolumn?(1+this.groups.length)*this.groupindentwidth:(this.groups.length)*this.groupindentwidth;
e-=g;
if(!this.columnsheader){return
}var i=this.columnsheader.find("#columntable"+this.element.id);
if(i.length==0){return
}var j=i.find(".jqx-grid-column-header");
var h=0;
b.each(this.columns.records,function(p,t){var r=b(j[p]);
var o=false;
var s=this.width;
if(this.width.toString().indexOf("%")!=-1||this._percentagewidth!=undefined){if(this._percentagewidth!=undefined){s=parseFloat(this._percentagewidth)*e/100
}else{s=parseFloat(this.width)*e/100
}o=true
}if(this.width!="auto"&&!this._width&&!o){if(parseInt(r[0].style.width)!=this.width){r.width(this.width)
}}else{if(o){if(s<this.minwidth&&this.minwidth!="auto"){s=this.minwidth;
this.width=s
}if(s>this.maxwidth&&this.maxwidth!="auto"){s=this.maxwidth;
this.width=s
}if(parseInt(r[0].style.width)!=s){r.width(s);
this.width=s
}}else{var q=Math.floor(l*(this.text.length/k.length));
if(isNaN(q)){q=this.minwidth
}if(q<0){$element=b("<span>"+this.text+"</span>");
b(document.body).append($element);
q=10+$element.width();
$element.remove()
}if(q<this.minwidth){q=this.minwidth
}if(q>this.maxwidth){q=this.maxwidth
}this._width="auto";
this.width=q;
r.width(this.width)
}}if(parseInt(r[0].style.left)!=h){r.css("left",h)
}if(!(this.hidden&&this.hideable)){h+=this.width
}this._requirewidthupdate=true
});
this.columnsheader.width(2+h);
i.width(this.columnsheader.width());
if(h==0){this.columnsheader[0].style.visibility="hidden"
}else{this.columnsheader[0].style.visibility="inherit"
}this._resizecolumngroups();
if(this.showfilterrow&&this.filterrow){this.filterrow.width(this.columnsheader.width());
this._updatefilterrowui()
}if(this.autowidth){this._arrange()
}},_rendercolumnheaders:function(){var u=this.that;
if(!this.prerenderrequired){if(this._rendersortcolumn){this._rendersortcolumn()
}if(this._renderfiltercolumn){this._renderfiltercolumn()
}if(this.showfilterrow&&this.filterrow){this.filterrow.width(this.columnsheader.width());
this._updatefilterrowui()
}return
}this._columnsbydatafield=new Array();
this.columnsheader.find("#columntable"+this.element.id).remove();
var l=b('<div id="columntable'+this.element.id+'" style="height: 100%; position: relative;"></div>');
l[0].cells=new Array();
var x=0;
var f=0;
var r="";
var C=this.host.width();
var n=C;
var e=new Array();
var w=new Array();
var o=this.rowdetails&&this.showrowdetailscolumn?(1+this.groups.length)*this.groupindentwidth:(this.groups.length)*this.groupindentwidth;
b.each(this.columns.records,function(i,j){if(!(this.hidden&&this.hideable)){if(this.width!="auto"&&!this._width){if(this.width<this.minwidth&&this.minwidth!="auto"){C-=this.minwidth
}else{if(this.width>this.maxwidth&&this.maxwidth!="auto"){C-=this.maxwidth
}else{if(this.width.toString().indexOf("%")!=-1){var j=0;
var k=u.vScrollBar[0].style.visibility=="hidden"?0:u.scrollbarsize+5;
k+=o;
j=parseFloat(this.width)*(n-k)/100;
if(j<this.minwidth&&this.minwidth!="auto"){j=this.minwidth
}if(j>this.maxwidth&&this.maxwidth!="auto"){j=this.maxwidth
}C-=j
}else{if(typeof this.width=="string"){this.width=parseInt(this.width)
}C-=this.width
}}}}else{r+=this.text
}}if(this.pinned||this.grouped||this.checkboxcolumn){if(u._haspinned){this.pinned=true
}e[e.length]=this
}else{w[w.length]=this
}});
if(!this.rtl){for(var z=0;
z<e.length;
z++){this.columns.replace(z,e[z])
}for(var y=0;
y<w.length;
y++){this.columns.replace(e.length+y,w[y])
}}else{var v=0;
e.reverse();
for(var z=this.columns.records.length-1;
z>=this.columns.records.length-e.length;
z--){this.columns.replace(z,e[v++])
}for(var y=0;
y<w.length;
y++){this.columns.replace(y,w[y])
}}var h=this.headerZIndex;
var m=u.groupable?u.groups.length:0;
if(this.rowdetails&&this.showrowdetailscolumn){m++
}var g=u.columnsheader.height();
if(this.showfilterrow){if(!this.columngroups){g=this.columnsheight
}else{g-=this.filterrowheight
}}var s=this._gettableheight();
if(this.virtualsizeinfo&&this.virtualsizeinfo.virtualheight>s){if(this.groupable&&this.groups.length>0){if(this.dataview&&this.dataview.loadedrootgroups&&!this.groupsexpandedbydefault){var A=0;
if(!this.pageable){var A=this.dataview.loadedrootgroups.length*this.rowsheight
}else{if(this.pageable){for(var t=0;
t<this.dataview.rows.length;
t++){if(this.dataview.rows[t].group&&this.dataview.rows[t].level===0){A+=this.rowsheight
}}}}if(A>s){C-=this.scrollbarsize+5;
n-=this.scrollbarsize+5
}}else{C-=this.scrollbarsize+5;
n-=this.scrollbarsize+5
}}else{if(!this.autoheight){C-=this.scrollbarsize+5;
n-=this.scrollbarsize+5
}}}n-=o;
var d=function(j,k){var i=u.columngroupslevel*u.columnsheight;
i=i-(k.level*u.columnsheight);
return i
};
b.each(this.columns.records,function(G,J){this.height=u.columnsheight;
if(u.columngroups){if(u.columngroups.length){this.height=d(this.datafield,this);
g=this.height
}}var I=u.toTP("jqx-grid-column-header")+" "+u.toTP("jqx-widget-header");
if(u.rtl){I+=" "+u.toTP("jqx-grid-column-header-rtl")
}var V=!u.rtl?150+h-1:150+h+1;
var M=!u.rtl?h--:h++;
var Q=b('<div role="columnheader" style="z-index: '+M+';position: absolute; height: 100%;" class="'+I+'"><div style="height: 100%; width: 100%;"></div></div>');
if(u.columngroups){Q[0].style.height=g+"px";
Q[0].style.bottom="0px";
if(this.pinned){Q[0].style.zIndex=V
}}this.uielement=Q;
if(this.classname!=""&&this.classname){Q.addClass(this.classname)
}var q=this.width;
var k=false;
if(this.width===null){this.width="auto"
}if(this.width.toString().indexOf("%")!=-1||this._percentagewidth!=undefined){if(this._percentagewidth!=undefined){q=parseFloat(this._percentagewidth)*n/100
}else{q=parseFloat(this.width)*n/100
}k=true
}if(this.width!="auto"&&!this._width&&!k){if(q<this.minwidth&&this.minwidth!="auto"){q=this.minwidth;
this.width=q
}if(q>this.maxwidth&&this.maxwidth!="auto"){q=this.maxwidth;
this.width=q
}Q[0].style.width=parseInt(q)+"px"
}else{if(k){if(q<this.minwidth&&this.minwidth!="auto"){q=this.minwidth
}if(q>this.maxwidth&&this.maxwidth!="auto"){q=this.maxwidth
}if(this._percentagewidth==undefined||this.width.toString().indexOf("%")!=-1){this._percentagewidth=this.width
}Q.width(q);
this.width=q
}else{if(!this.hidden){var P=Math.floor(C*(this.text.length/r.length));
if(isNaN(P)){P=this.minwidth
}if(P<0){$element=b("<span>"+this.text+"</span>");
b(document.body).append($element);
P=10+$element.width();
$element.remove()
}if(P<this.minwidth){P=this.minwidth
}if(P>this.maxwidth){P=this.maxwidth
}this._width="auto";
this.width=P;
q=this.width;
Q.width(this.width)
}}}if(this.hidden&&this.hideable){Q.css("display","none")
}var i=b(Q.children()[0]);
var R=u.rtl?u.toTP("jqx-grid-column-menubutton")+" "+u.toTP("jqx-grid-column-menubutton-rtl"):u.toTP("jqx-grid-column-menubutton");
R+=" "+u.toTP("jqx-icon-arrow-down");
var T=b('<div style="height: '+g+'px; display: none; left: 100%; top: 0%; position: absolute;"><div class="'+R+'" style="width: 100%; height:100%;"></div></div>');
if(!u.enableanimations){T.css("margin-left",-16)
}if(u.rtl){T.css("left","0px")
}this.columnsmenu=T[0];
l[0].cells[G]=Q[0];
T[0].style.width=parseInt(u.columnsmenuwidth)+"px";
var S=u.columnsmenu;
var L=false;
var O=false;
var E=(u.groupable&&m>0&&x<m)||(u.rowdetails&&x<m);
if(u.rtl){E=(u.groupable&&m>0&&x<m)||(u.rowdetails&&x<m);
E&=G>u.columns.records.length-1-m
}if(E){x++;
S&=false;
this.sortable=false;
this.editable=false;
O=true
}else{var W=this.renderer!=null?this.renderer(this.text,this.align,g):u._rendercolumnheader(this.text,this.align,g,u);
if(W==null){W=u._rendercolumnheader(this.text,this.align,g,u)
}if(this.renderer!=null){W=b(W)
}S&=true;
L=true
}if(u.WinJS){MSApp.execUnsafeLocalFunction(function(){i.append(b(W))
})
}else{if(this.renderer){i.append(b(W))
}else{if(W){i[0].innerHTML=W
}}}if(W!=null){var F=b('<div class="iconscontainer" style="height: '+g+'px; margin-left: -32px; display: block; position: absolute; left: 100%; top: 0%; width: 32px;"><div class="filtericon '+u.toTP("jqx-widget-header")+'" style="height: '+g+'px; float: right; display: none; width: 16px;"><div class="'+u.toTP("jqx-grid-column-filterbutton")+'" style="width: 100%; height:100%;"></div></div><div class="sortasc '+u.toTP("jqx-widget-header")+'" style="height: '+g+'px; float: right; display: none; width: 16px;"><div class="'+u.toTP("jqx-grid-column-sortascbutton")+" "+u.toTP("jqx-icon-arrow-up")+'" style="width: 100%; height:100%;"></div></div><div class="sortdesc '+u.toTP("jqx-widget-header")+'" style="height: '+g+'px; float: right; display: none; width: 16px;"><div class="'+u.toTP("jqx-grid-column-sortdescbutton")+" "+u.toTP("jqx-icon-arrow-down")+'" style="width: 100%; height:100%;"></div></div></div>');
T.addClass(u.toTP("jqx-widget-header"));
i.append(F);
var H=F.children();
this.sortasc=H[1];
this.sortdesc=H[2];
this.filtericon=H[0];
this.iconscontainer=F;
if(u.rtl){F.css("margin-left","0px");
F.css("left","0px");
b(this.sortasc).css("float","left");
b(this.filtericon).css("float","left");
b(this.sortdesc).css("float","left")
}if(!u.autoshowfiltericon&&this.filterable){b(this.filtericon).css("display","block")
}}if(S){u._handlecolumnsmenu(u,i,Q,T,this);
if(!this.menu){T.hide()
}}l.append(Q);
if(u.groupable&&L){Q[0].id=u.dataview.generatekey();
if(u._handlecolumnstogroupsdragdrop){u._handlecolumnstogroupsdragdrop(this,Q)
}else{throw new Error("jqxGrid: Missing reference to jqxgrid.grouping.js.")
}}if(u.columnsreorder&&this.draggable&&u._handlecolumnsdragreorder){u._handlecolumnsdragreorder(this,Q)
}var K=this;
u.addHandler(Q,"click",function(X){if(K.checkboxcolumn){return true
}if(u.sorttogglestates>0&&u._togglesort){if(!u._loading){u._togglesort(K)
}}X.preventDefault();
u._raiseEvent(7,{column:K.getcolumnproperties(),datafield:K.datafield,originalEvent:X})
});
if(K.resizable&&u.columnsresize&&!O){var N=false;
var U="mousemove";
if(u.isTouchDevice()&&u.touchmode!==true){N=true;
U=b.jqx.mobile.getTouchEventName("touchstart")
}u.addHandler(Q,U,function(ab){var aa=parseInt(ab.pageX);
var ad=5;
var Z=parseInt(Q.coord().left);
if(u.hasTransform){Z=b.jqx.utilities.getOffset(Q).left
}if(u.resizing){return true
}if(u._handlecolumnsresize){if(N){var ac=u.getTouches(ab);
var Y=ac[0];
aa=Y.pageX;
ad=40;
if(aa>=Z+K.width-ad){u.resizablecolumn={columnelement:Q,column:K};
Q.css("cursor","col-resize")
}else{Q.css("cursor","");
u.resizablecolumn=null
}return true
}var X=K.width;
if(u.rtl){X=0
}if(aa>=Z+X-ad){if(aa<=Z+X+ad){u.resizablecolumn={columnelement:Q,column:K};
Q.css("cursor","col-resize");
return false
}else{Q.css("cursor","");
u.resizablecolumn=null
}}else{Q.css("cursor","");
if(aa<Z+X-ad){if(!K._animating&&!K._menuvisible){Q.mouseenter()
}}u.resizablecolumn=null
}}})
}Q.css("left",f);
if(!(this.hidden&&this.hideable)){f+=q
}if(K.rendered){var j=K.rendered(b(i[0].firstChild),K.align,g);
if(j&&F!=null){F.hide()
}}if(K.checkboxcolumn){if(F){F.hide()
}if(!u.host.jqxCheckBox){throw new Error("jqxGrid: Missing reference to jqxcheckbox.js")
}i.html('<div style="cursor: pointer; margin-left: 5px; top: 50%; margin-top: -8px; position: relative;"></div>');
var p=i.find("div:first");
p.jqxCheckBox({_canFocus:false,disabled:u.disabled,disabledContainer:true,theme:u.theme,enableContainerClick:false,width:16,height:16,animationShowDelay:0,animationHideDelay:0});
K.checkboxelement=p;
var D=p.data().jqxCheckBox.instance;
u._checkboxcolumn=K;
D.updated=function(Y,X,Z){u._checkboxcolumnupdating=true;
if(u.disabled){p.jqxCheckBox({disabled:u.disabled});
X=Z
}if(X){u.selectallrows()
}else{u.unselectallrows()
}u._checkboxcolumnupdating=false
}
}});
if(f>0){this.columnsheader.width(2+f)
}else{this.columnsheader.width(f)
}this.columnsrow=l;
u.columnsheader.append(l);
if(this.showfilterrow&&this._updatefilterrow){if(!this.columngroups){l.height(this.columnsheight)
}else{l.height(this.columngroupslevel*this.columnsheight)
}if(!this.filterrow){var B=b("<div></div>");
B[0].id="filterrow."+this.element.id;
B.height(this.filterrowheight);
this.filterrow=B
}this.filterrow.width(2+f);
this.columnsheader.append(this.filterrow);
this._updatefilterrow()
}if(f==0){l[0].style.visibility="hidden"
}else{l[0].style.visibility="inherit"
}l.width(f);
if(this._handlecolumnsdragdrop){this._handlecolumnsdragdrop()
}if(this._handlecolumnsreorder){this._handlecolumnsreorder()
}if(this._rendersortcolumn){this._rendersortcolumn()
}if(this._renderfiltercolumn){this._renderfiltercolumn()
}if(this._handlecolumnsresize){this._handlecolumnsresize()
}if(this.columngroups){this._rendercolumngroups()
}if(this._updatecheckboxselection){this._updatecheckboxselection()
}},_rendercolumngroups:function(){if(!this.columngroups){return
}var s=0;
for(var f=0;
f<this.columns.records.length;
f++){if(this.columns.records[f].pinned){s++
}}var h=this.headerZIndex-s+this.columns.records.length;
var k=this.that;
var n=k.toTP("jqx-grid-column-header")+" "+k.toTP("jqx-grid-columngroup-header")+" "+k.toTP("jqx-widget-header");
if(k.rtl){n+=" "+k.toTP("jqx-grid-columngroup-header-rtl")
}var t=this.columnsheader.find("#columntable"+this.element.id);
t.find("jqx-grid-columngroup-header").remove();
for(var o=0;
o<this.columngroupslevel-1;
o++){for(var f=0;
f<this.columngroups.length;
f++){var v=this.columngroups[f];
var d=v.level;
if(d!==o){continue
}var u=d*this.columnsheight;
var l=99999;
if(v.groups){var g=function(x){var w=0;
for(var j=0;
j<x.groups.length;
j++){var i=x.groups[j];
if(!i.groups){if(!i.hidden){w+=i.width;
l=Math.min(parseFloat(i.element.style.left),l)
}}else{w+=g(i)
}}return w
};
v.width=g(v);
v.left=l;
var e=this.columnsheight;
var q=h--;
var m=b('<div role="columnheader" style="z-index: '+q+';position: absolute;" class="'+n+'"></div>');
var p=b(this._rendercolumnheader(v.text,v.align,this.columnsheight,this));
if(v.renderer){var p=b("<div style='height: 100%; width: 100%;'></div>");
var r=v.renderer(v.text,v.align,e);
p.html(r)
}m.append(p);
m[0].style.left=l+"px";
if(l===0){m[0].style.borderLeftColor="transparent"
}m[0].style.top=u+"px";
m[0].style.height=e+"px";
m[0].style.width=-1+v.width+"px";
t.append(m);
v.element=m;
if(v.rendered){v.rendered(p,v.align,e)
}}}}},_resizecolumngroups:function(){if(!this.columngroups){return
}for(var e=0;
e<this.columngroups.length;
e++){var k=this.columngroups[e];
var l=k.level;
var j=l*this.columnsheight;
var h=99999;
if(k.groups){var g=function(o){var n=0;
for(var m=0;
m<o.groups.length;
m++){var i=o.groups[m];
if(!i.groups){if(!i.hidden){n+=i.width;
h=Math.min(parseFloat(i.element.style.left),h)
}}else{n+=g(i)
}}return n
};
k.width=g(k);
k.left=h;
var d=this.columnsheight;
var f=k.element;
f[0].style.left=h+"px";
f[0].style.top=j+"px";
f[0].style.height=d+"px";
f[0].style.width=-1+k.width+"px"
}}},_handlecolumnsmenu:function(p,g,h,k,m){p.dragmousedown=null;
k[0].id=p.dataview.generatekey();
g.append(k);
h[0].columnsmenu=k[0];
m.element=h[0];
var l=this.columnsmenuwidth+1;
var o=function(){if(!m.menu){return false
}if(!p.resizing){if(m._menuvisible&&p._hasOpenedMenu){return false
}m._animating=true;
if(p.menuitemsarray&&p.menuitemsarray.length>0){if(!p.enableanimations){k.css("display","block");
var q=!p.rtl?-48:16;
m.iconscontainer.css("margin-left",q+"px");
m._animating=false;
m._menuvisible=true
}else{k.css("display","block");
k.stop();
m.iconscontainer.stop();
if(!p.rtl){k.css("margin-left","0px");
k.animate({"margin-left":-l},"fast",function(){k.css("display","block");
m._animating=false;
m._menuvisible=true
})
}else{k.css("margin-left",-l);
k.animate({"margin-left":"0px"},"fast",function(){k.css("display","block");
m._animating=false;
m._menuvisible=true
})
}var q=!p.rtl?-(32+l):l;
m.iconscontainer.animate({"margin-left":q},"fast")
}}}};
var f="mouseenter";
if(p.isTouchDevice()){f="touchstart"
}p.addHandler(h,f,function(r){var q=parseInt(r.pageX);
var t=p.columnsresize&&m.resizable?3:0;
var v=parseInt(h.coord().left);
if(p.hasTransform){v=b.jqx.utilities.getOffset(h).left
}var u=m.width;
if(p.rtl){u=0
}if(t!=0){if(q>=v+u-t){if(q<=v+u+t){return false
}}}var s=p.vScrollInstance.isScrolling();
if(m.menu&&p.autoshowcolumnsmenubutton&&!s&&!p.disabled){o()
}});
if(!p.autoshowcolumnsmenubutton){k.css("display","block");
var e=!p.rtl?-48:16;
m.iconscontainer.css("margin-left",e+"px");
if(!p.rtl){k.css({"margin-left":-l})
}else{k.css({"margin-left":"0px"})
}}p.addHandler(h,"mouseleave",function(q){if(p.menuitemsarray&&p.menuitemsarray.length>0&&m.menu){var s=b.data(document.body,"contextmenu"+p.element.id);
if(s!=undefined&&k[0].id==s.columnsmenu.id){return
}if(p.autoshowcolumnsmenubutton){if(!p.enableanimations){k.css("display","none");
var r=!p.rtl?-32:0;
m.iconscontainer.css("margin-left",r+"px");
m._menuvisible=false
}else{if(!p.rtl){k.css("margin-left",-l)
}else{k.css("margin-left","0px")
}k.stop();
m.iconscontainer.stop();
if(!p.rtl){k.animate({"margin-left":0},"fast",function(){k.css("display","none");
m._menuvisible=false
})
}else{k.animate({"margin-left":-l},"fast",function(){k.css("display","none");
m._menuvisible=false
})
}var r=!p.rtl?-32:0;
m.iconscontainer.animate({"margin-left":r},"fast")
}}}});
var j=true;
var d="";
var i=b(m.filtericon);
p.addHandler(k,"mousedown",function(q){if(!p.gridmenu){p._initmenu()
}j=!b.data(p.gridmenu[0],"contextMenuOpened"+p.gridmenu[0].id);
d=b.data(document.body,"contextmenu"+p.element.id);
if(d!=null){d=d.column.datafield
}});
p.addHandler(i,"mousedown",function(q){if(!p.gridmenu){p._initmenu()
}j=!b.data(p.gridmenu[0],"contextMenuOpened"+p.gridmenu[0].id);
d=b.data(document.body,"contextmenu"+p.element.id);
if(d!=null){d=d.column.datafield
}});
var n=function(){if(!m.menu){return false
}if(!p.gridmenu){p._initmenu()
}if(p.disabled){return false
}for(var v=0;
v<p.columns.records.length;
v++){if(p.columns.records[v].datafield!=m.datafield){p.columns.records[v]._menuvisible=false
}}var y=k.coord(true);
var A=k.height();
if(!j){j=true;
if(d==m.datafield){p._closemenu();
return false
}}var x=p.host.coord(true);
if(p.hasTransform){x=b.jqx.utilities.getOffset(p.host);
y=b.jqx.utilities.getOffset(k)
}if(x.left+p.host.width()>parseInt(y.left)+p.gridmenu.width()){p.gridmenu.jqxMenu("open",y.left,y.top+A)
}else{p.gridmenu.jqxMenu("open",k.width()+y.left-p.gridmenu.width(),y.top+A)
}if(p.gridmenu.width()<100){p._arrangemenu()
}p._hasOpenedMenu=true;
var q=p._getmenuitembyindex(0);
var r=p._getmenuitembyindex(1);
var u=p._getmenuitembyindex(2);
var z=p._getmenuitembyindex(3);
var w=p._getmenuitembyindex(4);
var D=p._getmenuitembyindex(5);
if(q!=null&&r!=null&&u!=null){var B=m.sortable&&p.sortable;
p.gridmenu.jqxMenu("disable",q.id,!B);
p.gridmenu.jqxMenu("disable",r.id,!B);
p.gridmenu.jqxMenu("disable",u.id,!B);
if(m.datafield){if(p.sortcolumn==m.datafield){var C=p.getsortinformation();
if(B){if(C.sortdirection.ascending){p.gridmenu.jqxMenu("disable",q.id,true)
}else{p.gridmenu.jqxMenu("disable",r.id,true)
}}}else{p.gridmenu.jqxMenu("disable",u.id,true)
}}}if(z!=null&&w!=null){if(!p.groupable||!m.groupable){p.gridmenu.jqxMenu("disable",w.id,true);
p.gridmenu.jqxMenu("disable",z.id,true)
}else{if(p.groups&&p.groups.indexOf(m.datafield)!=-1){p.gridmenu.jqxMenu("disable",z.id,true);
p.gridmenu.jqxMenu("disable",w.id,false)
}else{p.gridmenu.jqxMenu("disable",z.id,false);
p.gridmenu.jqxMenu("disable",w.id,true)
}}}if(D!=null){p._updatefilterpanel(p,D,m);
var s=0;
if(p.sortable&&p._togglesort&&p.showsortmenuitems){s+=3
}if(p.groupable&&p.addgroup&&p.showgroupmenuitems){s+=2
}var t=s*27+3;
if(b.jqx.browser.msie&&b.jqx.browser.version<8){t+=20;
b(D).height(190)
}if(p.filterable&&p.showfiltermenuitems){if(!m.filterable){p.gridmenu.height(t);
b(D).css("display","none")
}else{p.gridmenu.height(t+180);
b(D).css("display","block")
}}}b.data(document.body,"contextmenu"+p.element.id,{column:m,columnsmenu:k[0]})
};
p.addHandler(i,"click",function(q){if(!m.menu){return false
}if(!p.showfilterrow){if(k[0].style.display!="block"){h.trigger("mouseenter")
}setTimeout(function(){if(k[0].style.display!="block"){h.trigger("mouseenter")
}n()
},200)
}return false
});
p.addHandler(k,"click",function(q){if(!m.menu){return false
}n();
return false
});
if(p.isTouchDevice()){p.addHandler(k,b.jqx.mobile.getTouchEventName("touchstart"),function(q){if(!m.menu){return false
}if(!p._hasOpenedMenu){n()
}else{p._closemenu()
}return false
})
}},_removecolumnhandlers:function(h){var e=this.that;
var f=b(h.element);
if(f.length>0){e.removeHandler(f,"mouseenter");
e.removeHandler(f,"mouseleave");
var g=b(h.filtericon);
e.removeHandler(g,"mousedown");
e.removeHandler(g,"click");
e.removeHandler(f,"click");
e.removeHandler(f,"mousemove");
if(e.columnsreorder){e.removeHandler(f,"mousedown.drag");
e.removeHandler(f,"mousemove.drag")
}e.removeHandler(f,"dragstart");
if(f[0].columnsmenu){var d=b(f[0].columnsmenu);
e.removeHandler(d,"click");
e.removeHandler(d,"mousedown");
e.removeHandler(d,b.jqx.mobile.getTouchEventName("touchstart"))
}}},_rendercolumnheader:function(h,i,e,d){var g="4px";
if(d.columngroups){g=(e/2-this._columnheight/2);
if(g<0){g=4
}g+="px"
}else{if(this.columnsheight!=25){g=(this.columnsheight/2-this._columnheight/2);
if(g<0){g=4
}g+="px"
}}if(this.enableellipsis){return'<div style="padding-bottom: 2px; overflow: hidden; text-overflow: ellipsis; text-align: '+i+"; margin-left: 4px; margin-right: 2px; margin-bottom: "+g+"; margin-top: "+g+';"><span style="text-overflow: ellipsis; cursor: default;">'+h+"</span></div>"
}if(i=="center"||i=="middle"){return'<div style="padding-bottom: 2px; text-align: center; margin-top: '+g+';"><a href="#">'+h+"</a></div>"
}var f='<a style="margin-top: '+g+"; float: "+i+';" href="#">'+h+"</a>";
return f
},_renderrows:function(r,l,o){var g=this.that;
if((this.pageable||this.groupable)&&(this.autoheight||this.autorowheight)){if(this.table!=null&&this.table[0].rows!=null&&this.table[0].rows.length<this.dataview.rows.length){g.prerenderrequired=true
}}if(!this.pageable&&(this.autoheight||this.autorowheight)&&(this.virtualmode||this.unboundmode)){var t=this.source.totalrecords;
if(!isNaN(t)){if(this.table!=null&&this.table[0].rows!=null&&this.table[0].rows.length!=t){g.prerenderrequired=true
}}}if((this.autoheight||this.autorowheight)&&!g.prerenderrequired){if(this.table&&this.table[0].rows){if(this.table[0].rows.length<this.dataview.records.length){if(this.pageable&&this.table[0].rows.length<this.dataview.pagesize){g.prerenderrequired=true
}else{if(!this.pageable){g.prerenderrequired=true
}}}if(this.table[0].rows.length<this.dataview.cachedrecords.length){if(this.pageable&&this.table[0].rows.length<this.dataview.pagesize){g.prerenderrequired=true
}else{if(!this.pageable){g.prerenderrequired=true
}}}}}g._prerenderrows(r);
if(g._requiresupdate){g._requiresupdate=false;
g._updatepageviews()
}var e=function(){if(g._loading){return
}if(g.WinJS){MSApp.execUnsafeLocalFunction(function(){g._rendervisualrows()
})
}else{g._rendervisualrows()
}if(g.virtualmode&&g.showaggregates&&g._updateaggregates){g.refreshaggregates()
}};
var i=b.jqx.browser.msie&&b.jqx.browser.version<10;
if(this.virtualmode){var m=function(){if(g.rendergridrows){var w=g._startboundindex;
if(w==undefined){w=0
}var u=w+1+g.dataview.pagesize;
if(w!=null&&u!=null){var v=g.source._source?true:false;
var x=!v?g.source.recordstartindex:g.source._source.recordstartindex;
if(x!=w||l==true){if(!v){g.source.recordstartindex=w;
g.source.recordendindex=u
}else{if(u>=g.source._source.totalrecords){u=g.source._source.totalrecords;
w=u-g.dataview.pagesize-1;
if(w<0){w=0
}if(g.source._source.recordendindex==u&&g.source._source.recordstartindex==w){return
}}g.source._source.recordstartindex=w;
g.source._source.recordendindex=u
}g.updatebounddata("cells")
}}}};
if(this.loadondemand){e();
m();
this.loadondemand=false
}var n=this._browser==undefined?this._isIE10():this._browser;
if(this.editable&&this.editcell&&!this.vScrollInstance.isScrolling()&&!this.hScrollInstance.isScrolling()){e()
}else{if(this.autoheight){e()
}else{if(n||i||(navigator&&navigator.userAgent.indexOf("Safari")!=-1)){if(this._scrolltimer!=null){clearTimeout(this._scrolltimer)
}this._scrolltimer=setTimeout(function(){e()
},5)
}else{e()
}}}}else{if(this.scrollmode=="deferred"&&(this.hScrollInstance.isScrolling()||this.vScrollInstance.isScrolling())){if(this._scrolltimer!=null){clearInterval(this._scrolltimer)
}var h=this._getfirstvisualrow();
if(h!=null){var p=function(y){if(h==null){return""
}var x="<table>";
var v=g.deferreddatafields;
if(v==null){if(g.columns.records.length>0){v=new Array();
v.push(g.columns.records[0].displayfield)
}}for(var u=0;
u<v.length;
u++){var z=v[u];
var w=g._getcolumnbydatafield(z);
if(w){var A=g._getcellvalue(w,h);
if(w.cellsformat!=""){if(b.jqx.dataFormat){if(b.jqx.dataFormat.isDate(A)){A=b.jqx.dataFormat.formatdate(A,w.cellsformat,g.gridlocalization)
}else{if(b.jqx.dataFormat.isNumber(A)){A=b.jqx.dataFormat.formatnumber(A,w.cellsformat,g.gridlocalization)
}}}}x+="<tr><td>"+A+"</td></tr>"
}}x+="</table>";
return x
};
var f=this.scrollfeedback?this.scrollfeedback(h.bounddata):p(h.bounddata);
if(f!=this._scrollelementcontent){this._scrollelement[0].innerHTML=f;
this._scrollelementcontent=f
}}this._scrollelement.css("visibility","visible");
this._scrollelementoverlay.css("visibility","visible");
this._scrollelement.css("margin-top",-this._scrollelement.height()/2);
this._scrolltimer=setInterval(function(){if(!g.hScrollInstance.isScrolling()&&!g.vScrollInstance.isScrolling()){e();
g._scrollelement.css("visibility","hidden");
g._scrollelementoverlay.css("visibility","hidden");
clearInterval(g._scrolltimer);
if(h){g.ensurerowvisible(h.visibleindex)
}}},100);
return
}if(navigator&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")!=-1){this._updatedelay=1
}if(this.touchDevice!=undefined&&this.touchDevice==true){this._updatedelay=5
}var n=this._browser==undefined?this._isIE10():this._browser;
if(n||i){this._updatedelay=5
}if((n)&&this.hScrollInstance.isScrolling()){e();
return
}if(b.jqx.browser.mozilla&&this._updatedelay==0&&(this.vScrollInstance.isScrolling()||this.hScrollInstance.isScrolling())){this._updatedelay=0
}if(this.updatedelay!=null){this._updatedelay=this.updatedelay
}if(this._updatedelay==0){e()
}else{var d=this._jqxgridrendertimer;
if(d!=null){clearTimeout(d)
}if(this.vScrollInstance.isScrolling()||this.hScrollInstance.isScrolling()){d=setTimeout(function(){e()
},this._updatedelay);
this._jqxgridrendertimer=d
}else{this._jqxgridrendertimer=d;
e()
}}}if(g.autorowheight&&!g.autoheight){if(this._pageviews.length>0){var j=this._gettableheight();
var q=this._pageviews[0].height;
if(q>j){if(this.pageable&&this.gotopage){q=this._pageviews[0].height;
if(q<0){q=this._pageviews[0].height
}}if(this.vScrollBar.css("visibility")!="visible"){this.vScrollBar.css("visibility","visible")
}if(q<=j||this.autoheight){this.vScrollBar.css("visibility","hidden")
}if(q-j>0){if(this.scrollmode!="deferred"){var s=q-j;
var k=this.vScrollInstance.max;
this.vScrollBar.jqxScrollBar({max:s});
if(Math.round(s)!=Math.round(k)){this.vScrollBar.jqxScrollBar({value:0})
}}}else{this.vScrollBar.jqxScrollBar({value:0,max:q})
}}else{if(!this._loading){this.vScrollBar.css("visibility","hidden")
}this.vScrollBar.jqxScrollBar({value:0})
}this._arrange();
if(this.virtualsizeinfo){this.virtualsizeinfo.virtualheight=q
}}}},scrolling:function(){var e=this.vScrollInstance.isScrolling();
var d=this.hScrollInstance.isScrolling();
return{vertical:e,horizontal:d}
},_renderhorizontalscroll:function(){var s=this.hScrollInstance;
var g=s.value;
if(this.hScrollBar.css("visibility")==="hidden"){s.value=0;
g=0
}var p=parseInt(g);
if(this.table==null){return
}var u=this.table[0].rows.length;
var q=this.columnsrow;
var v=this.groupable&&this.groups.length>0?this.groups.length:0;
var r=this.columns.records.length-v;
var f=this.columns.records;
var n=this.dataview.rows.length==0;
if(this.rtl){if(this.hScrollBar.css("visibility")!="hidden"){p=s.max-p
}}if(n&&!this._haspinned){for(var m=0;
m<u;
m++){var w=this.table[0].rows[m];
for(var k=0;
k<v+r;
k++){var d=w.cells[k];
if(d!=undefined){var l=f[k];
if(l.pinned){d.style.marginLeft=p+"px";
if(m==0){var e=q[0].cells[k];
e.style.marginLeft=p+"px"
}}}}}this.table[0].style.marginLeft=-p+"px";
q[0].style.marginLeft=-p+"px"
}else{if(this._haspinned||this._haspinned==undefined){for(var m=0;
m<u;
m++){var w=this.table[0].rows[m];
for(var k=0;
k<v+r;
k++){var d=w.cells[k];
if(d!=undefined){var l=f[k];
if(l.pinned){if(p==0&&d.style.marginLeft==""){continue
}var h=null;
var o=null;
if(this.showfilterrow&&this.filterrow){if(this.filterrow[0].cells){o=this.filterrow[0].cells[k]
}}if(this.showaggregates){if(this.statusbar[0].cells){h=this.statusbar[0].cells[k]
}}if(!this.rtl){d.style.marginLeft=p+"px";
if(m==0){var e=q[0].cells[k];
e.style.marginLeft=p+"px";
if(h){h.style.marginLeft=p+"px"
}if(o){o.style.marginLeft=p+"px"
}}}else{d.style.marginLeft=-parseInt(g)+"px";
if(m==0){var e=q[0].cells[k];
e.style.marginLeft=-parseInt(g)+"px";
if(h){h.style.marginLeft=-parseInt(g)+"px"
}if(o){o.style.marginLeft=-parseInt(g)+"px"
}}}}}}}this.table[0].style.marginLeft=-p+"px";
q[0].style.marginLeft=-p+"px"
}else{if(this._haspinned==false){this.table[0].style.marginLeft=-p+"px";
q[0].style.marginLeft=-p+"px"
}}}if(this.showaggregates){if(this.statusbar[0].cells){var t=0;
if(this.rtl){if(this.vScrollBar.css("visibility")!="hidden"){if(this.hScrollBar.css("visibility")!="hidden"){t=2+parseInt(this.hScrollBar.css("left"))
}}}this.statusbar[0].style.marginLeft=-p+t+"px"
}}if(this.showfilterrow&&this.filterrow){if(this.filterrow[0].cells){this.filterrow[0].style.marginLeft=-p+"px"
}}},_updaterowdetailsvisibility:function(){if(this.rowdetails){for(var d=0;
d<this._rowdetailselementscache.length;
d++){b(this._rowdetailselementscache[d]).css("display","none")
}}},_getvisualcolumnsindexes:function(e,m,i,l,d){if(this.rowdetails||this.rtl||this.editcell||(this.width&&this.width.toString().indexOf("%")>=0)||this.exporting){return{start:0,end:i+l}
}var f=0;
var k=-1;
var g=i+l;
var n=false;
if(this.autorowheight){return{start:0,end:i+l}
}if(!d){for(var h=0;
h<i+l;
h++){var o=h;
if(!n){if(this.columns.records[h].pinned){n=true
}}if(!this.columns.records[h].hidden){f+=this.columns.records[h].width
}if(f>=e&&k==-1){k=h
}if(f>m+e){g=h;
break
}}}g++;
if(g>i+l){g=i+l
}if(k==-1||n){k=0
}return{start:k,end:g}
},_getfirstvisualrow:function(){var e=this.vScrollInstance;
var g=e.value;
var f=parseInt(g);
if(this._pagescache.length==0){this.dataview.updateview();
this._loadrows()
}if(this.vScrollBar[0].style.visibility!="visible"){f=0
}if(!this.pageable){var d=this._findvisiblerow(f,this._pageviews);
if(d==-1){return null
}if(d!=this.dataview.pagenum){this.dataview.pagenum=d;
this.dataview.updateview();
this._loadrows()
}else{if(!this._pagescache[this.dataview.pagenum]){this._loadrows()
}}}var h=this._findvisiblerow(f,this._pagescache[this.dataview.pagenum]);
var i=this._pagescache[this.dataview.pagenum];
if(i&&i[0]){return i[h]
}},_rendervisualrows:function(){if(!this.virtualsizeinfo){return
}var Y=this.vScrollInstance;
var C=this.hScrollInstance;
var d=Y.value;
var w=C.value;
var f=parseInt(d);
var m=parseInt(w);
var n=this._gettableheight();
var K=this._hostwidth!=undefined?this._hostwidth:this.host.width();
if(this.hScrollBar[0].style.visibility=="visible"){n+=29
}if(this.scrollmode=="deferred"&&this._newmax!=0){if(f>this._newmax&&this._newmax!=null){f=this._newmax
}}var ab=Y.isScrolling()||C.isScrolling()||this._keydown;
var j=this.groupable&&this.groups.length>0;
this.visiblerows=new Array();
this.hittestinfo=new Array();
if(this.editcell&&this.editrow==undefined){this._hidecelleditor(false)
}if(this.editrow!=undefined){this._hideeditors()
}if(this.virtualmode&&!this.pageable){this._pagescache=new Array()
}if(this._pagescache.length==0){this.dataview.updateview();
this._loadrows()
}if(this.vScrollBar[0].style.visibility=="hidden"){f=0
}if(!this.pageable){var N=this._findvisiblerow(f,this._pageviews);
if(N==-1){this._clearvisualrows();
this._renderemptyrow();
this._updaterowdetailsvisibility();
return
}if(N!=this.dataview.pagenum){this.dataview.pagenum=N;
this.dataview.updateview();
this._loadrows()
}else{if(!this._pagescache[this.dataview.pagenum]){this._loadrows()
}}}var ad=this.groupable&&this.groups.length>0?this.groups.length:0;
if(!this.columns.records){return
}var Q=this.columns.records.length-ad;
var S=this._findvisiblerow(f,this._pagescache[this.dataview.pagenum]);
var u=this._pagescache[this.dataview.pagenum];
var z=S;
if(z<0){z=0
}var h=0;
var U=0;
var o=0;
var p=0;
var P=this.virtualsizeinfo.visiblerecords;
var T=this.groupable?this.groups.length:0;
var X=this.toTP("jqx-grid-cell")+" "+this.toTP("jqx-item");
if(this.rtl){X+=" "+this.toTP("jqx-grid-cell-rtl")
}if((this.autoheight||this.autorowheight)&&this.pageable){if(!this.groupable||(this.groupable&&this.groups.length===0)){P=this.dataview.pagesize
}}if(j){X=" "+this.toTP("jqx-grid-group-cell")
}if(this.isTouchDevice()){X+=" "+this.toTP("jqx-touch")
}if(this.autorowheight){X+=" jqx-grid-cell-wrap"
}var q=this.rowsheight;
var D=z;
var ac=this._rendercell;
var H=true;
var M=this._getvisualcolumnsindexes(m,K,ad,Q,j);
var G=M.start;
var t=M.end;
if((this.autoheight||this.pageable)&&this.autorowheight){if(this._pageviews[0]){this._oldpageviewheight=this._pageviews[0].height
}}if(this.autorowheight){z=0
}if(z>=0){this._updaterowdetailsvisibility();
this._startboundindex=u!=null?u[z].bounddata.boundindex:0;
this._startvisibleindex=u!=null?u[z].bounddata.visibleindex:0;
for(var F=0;
F<P&&U<P;
F++){var r=u!=undefined?u[z+F]:null;
if(r==null){z=-F;
if(this._pagescache[this.dataview.pagenum+1]){u=this._pagescache[this.dataview.pagenum+1];
this.dataview.pagenum++
}else{var s=this._pageviews.length;
do{if(this.dataview.pagenum<this._pageviews.length-1){this.dataview.pagenum++;
u=undefined;
if(this._pageviews[this.dataview.pagenum].height>0){this.dataview.updateview();
this._loadrows();
u=this._pagescache[this.dataview.pagenum]
}}else{u=undefined;
break
}}while(u==undefined&&this.dataview.pagenum<s)
}if(u!=undefined){r=u[z+F]
}}if(r!=null){if(r.hidden){continue
}this._endboundindex=this._startboundindex+F;
this._endvisibleindex=this._startvisibleindex+F;
if(F==0){var l=Math.abs(f-r.top);
this.table[0].style.top=-l+"px";
p=-l
}var x=this.table[0].rows[U];
if(!x){continue
}if(parseInt(x.style.height)!=r.height){x.style.height=parseInt(r.height)+"px"
}o+=r.height;
var v=this.rowdetails&&r.rowdetails;
var I=!r.rowdetailshidden;
if(v&&I){x.style.height=parseInt(r.height-r.rowdetailsheight)+"px";
P++
}var W=this._isrowselected(H,r);
for(var O=G;
O<t;
O++){var Z=O;
this._rendervisualcell(ac,X,W,v,I,j,T,x,r,Z,U,ab)
}if(r.group!=undefined&&this._rendergroup){this._rendergroup(T,x,r,ad,Q,U,K)
}if(this.autorowheight&&(this.autoheight||this.pageable)){var q=this.rowsheight;
for(var O=G;
O<t;
O++){if(this.editable&&this.editcell&&this.editcell.column==this.columns.records[O].datafield&&this.editcell.row==this.getboundindex(r)){q=Math.max(q,this.editcell.editor.height());
continue
}if(x.cells[O].firstChild){q=Math.max(q,8+parseInt(x.cells[O].firstChild.offsetHeight))
}}x.style.height=parseInt(q)+"px";
this.heights[this._startboundindex+F]=q;
if(v&&I){q+=r.rowdetailsheight
}r.height=q
}this.visiblerows[this.visiblerows.length]=r;
this.hittestinfo[this.hittestinfo.length]={row:r,visualrow:x,details:false};
if(v&&I){U++;
var x=this.table[0].rows[U];
this._renderrowdetails(X,x,r,ad,Q,U);
this.visiblerows[this.visiblerows.length]=r;
this.hittestinfo[this.hittestinfo.length]={row:r,visualrow:x,details:true}
}if(!this.autorowheight){if(o+p>=n){break
}}}else{cansetheight=true;
this._clearvisualrow(m,j,U,ad,Q);
if(o+h+p<=n){h+=q
}}U++
}this._horizontalvalue=m;
if(h>0){if(this.vScrollBar[0].style.visibility=="visible"){var aa=parseInt(this.table.css("top"));
var B=this._pageviews[this._pageviews.length-1];
var L=Y.max;
var E=B.top+B.height-n;
if(this.hScrollBar.css("visibility")=="visible"){E+=this.scrollbarsize+20
}if(L!=E&&!this.autorowheight){if(E>=0){if(this.scrollmode!="deferred"){Y.max=E;
Y.setPosition(Y.max)
}else{if(this._newmax!=E){this._newmax=E;
this._rendervisualrows()
}}}}}}}if((this.autoheight||this.pageable)&&this.autorowheight){this._pagescache=new Array();
var A=0;
var e=0;
for(var g=0;
g<this.visiblerows.length;
g++){var R=this.visiblerows[g];
R.top=A;
A+=R.height;
e+=R.height;
var v=this.rowdetails&&R.rowdetails;
var I=!R.rowdetailshidden;
var x=this.table[0].rows[g];
if(v&&I){g++
}for(var O=G;
O<t;
O++){var J=this.columns.records[O];
if(!J.hidden){if(!J.cellsrenderer){var k=x.cells[O];
var V=0;
if(k.firstChild){var V=(R.height-parseInt(k.firstChild.offsetHeight)-8)/2;
if(v&&I){var V=(R.height-R.rowdetailsheight-b(k.firstChild).height()-8)/2
}}else{var V=(R.height-parseInt(b(k).height())-8)/2
}if(V>=0){V=parseInt(V)+4;
if(k.firstChild){if(k.firstChild.className.indexOf("jqx-grid-groups-row")==-1){if(J.columntype!="checkbox"&&J.columntype!="button"){if(this.editable&&this.editcell&&this.editcell.column==J.datafield&&this.editcell.row==this.getboundindex(R)){continue
}k.firstChild.style.marginTop=V+"px"
}}}}}}}}if(this._pageviews[0]){this._pageviews[0].height=e
}this._arrange()
}this._renderemptyrow()
},_hideemptyrow:function(){if(!this.showemptyrow){return
}if(!this.table){return
}if(!this.table[0].rows){return
}var f=this.table[0].rows[0];
if(!f){return
}var g=false;
for(var e=0;
e<f.cells.length;
e++){var d=b(f.cells[e]);
if(d.css("display")!="none"&&!g){if(d.width()==this.host.width()||d.text()==this.gridlocalization.emptydatastring){d[0].checkbox=null;
d[0].button=null;
g=true;
d[0].innerHTML=""
}}}},_renderemptyrow:function(){if(this._loading){return
}if(this.dataview.records.length==0&&this.showemptyrow){var l=false;
var e=this.toTP("jqx-grid-cell");
if(this.table&&this.table.length>0&&this.table[0].rows&&this.table[0].rows.length>0){var k=this.table[0].rows[0];
this.table[0].style.top="0px";
for(var f=0;
f<k.cells.length;
f++){var d=b(k.cells[f]);
if(d.css("display")!="none"&&!l){d[0].checkbox=null;
d[0].button=null;
d[0].className=e;
l=true;
d[0].innerHTML="";
var g=b("<span style='white-space: nowrap; float: left; margin-left: 50%; position: relative;'></span>");
g.text(this.gridlocalization.emptydatastring);
d.append(g);
var j=0;
if(!this.oldhscroll){j=parseInt(this.table[0].style.marginLeft);
if(this.rtl){d.css("z-index",999);
d.css("overflow","visible")
}}g.css("left",-j-(g.width()/2));
g.css("top",this._gettableheight()/2-g.height()/2);
if(b.jqx.browser.msie&&b.jqx.browser.version<8){g.css("margin-left","0px");
g.css("left",this.host.width()/2-g.width()/2)
}var h=Math.abs(parseInt(this.table[0].style.top));
if(isNaN(h)){h=0
}b(k).height(this._gettableheight()+h);
d.css("margin-left","0px");
d.width(this.host.width());
if(this.table.width()<this.host.width()){this.table.width(this.host.width())
}}d.addClass(this.toThemeProperty("jqx-grid-empty-cell"))
}}}},_clearvisualrows:function(){var e=this.virtualsizeinfo.visiblerecords;
var f=this.hScrollInstance;
var d=f.value;
var g=parseInt(d);
var i=this.groupable&&this.groups.length>0;
if(!this.columns.records){return
}for(var h=0;
h<e;
h++){this._clearvisualrow(g,i,h,0,this.columns.records.length)
}},_iscellselected:function(j,i,g){var f=false;
var e=0;
if(this.virtualmode&&this.pageable&&this.groupable){if(this.groups.length>0){e=this.dataview.pagesize*this.dataview.pagenum
}}if(this.groups.length>0&&this.pageable&&this.groupable){var d=this.getrowboundindexbyid(i.bounddata.uid);
for(var h in this.selectedcells){if(h==d+"_"+g){f=true
}}return f
}if(j&&i.bounddata!=null){if(this.selectionmode!="singlerow"){if(this.dataview.filters.length>0){if(!this.virtualmode&&i.bounddata.dataindex!=undefined){for(var h in this.selectedcells){if(h==e+i.bounddata.dataindex+"_"+g){f=true
}}}else{for(var h in this.selectedcells){if(h==e+i.bounddata.boundindex+"_"+g){f=true
}}}}else{for(var h in this.selectedcells){if(h==e+i.bounddata.boundindex+"_"+g){f=true;
break
}}}}else{if(this.dataview.filters.length>0){if(!this.virtualmode&&i.bounddata.dataindex!=undefined){for(var h in this.selectedcells){if(h==e+i.bounddata.dataindex+"_"+g){f=true;
break
}}}else{for(var h in this.selectedcells){if(h==e+i.bounddata.boundindex+"_"+g){f=true;
break
}}}}else{for(var h in this.selectedcells){if(h==e+i.bounddata.boundindex==this.selectedrowindex){f=true;
break
}}}}}return f
},_isrowselected:function(h,g){var f=false;
var e=0;
if(this.virtualmode&&this.pageable&&this.groupable){if(this.groups.length>0){e=this.dataview.pagesize*this.dataview.pagenum
}}if(this.groupable&&this.groups.length>0&&this.pageable){var d=this.getrowboundindexbyid(g.bounddata.uid);
if(this.selectedrowindexes.indexOf(d)!=-1){f=true
}if(!f){f=d==this.selectedrowindex&&this.selectedrowindex!=-1
}return f
}if(h&&g.bounddata!=null){if(this.selectionmode!="singlerow"){if(this.dataview.filters.length>0){if(!this.virtualmode&&g.bounddata.dataindex!=undefined){if(this.selectedrowindexes.indexOf(e+g.bounddata.dataindex)!=-1){f=true
}}else{if(this.selectedrowindexes.indexOf(e+g.bounddata.boundindex)!=-1){f=true
}}}else{if(this.selectedrowindexes.indexOf(e+g.bounddata.boundindex)!=-1){f=true
}}}else{if(this.dataview.filters.length>0){if(!this.virtualmode&&g.bounddata.dataindex!=undefined){if(this.selectedrowindexes.indexOf(e+g.bounddata.dataindex)!=-1){f=true
}}else{if(this.selectedrowindexes.indexOf(e+g.bounddata.boundindex)!=-1){f=true
}}}else{if(e+g.bounddata.boundindex==this.selectedrowindex){f=true
}}}}return f
},_rendervisualcell:function(z,i,p,k,t,x,j,q,d,h,s,n){var f=null;
var g=this.columns.records[h];
if(g.hidden){var e=q.cells[h];
e.innerHTML="";
return
}cellvalue=this._getcellvalue(g,d);
var e=q.cells[h];
var w=i;
if(this.selectionmode.indexOf("cell")!=-1){if(this.dataview.filters.length>0){if(this.selectedcells[d.bounddata.dataindex+"_"+g.datafield]){p=true
}else{p=false
}}else{if(this.selectedcells[d.boundindex+"_"+g.datafield]){p=true
}else{p=false
}}if(this.editcell){if(this.editcell.row===d.boundindex&&this.editcell.column===g.datafield){if(g.columntype!=="checkbox"){p=false
}}}if(this.virtualmode||(this.groupable&&this.groups.length>0&&this.pageable)){p=this._iscellselected(true,d,g.datafield)
}}if(g.cellclassname!=""&&g.cellclassname){if(typeof g.cellclassname=="string"){w+=" "+g.cellclassname
}else{var m=g.cellclassname(this.getboundindex(d),g.datafield,cellvalue,d.bounddata);
if(m){w+=" "+m
}}}var o=this.showsortcolumnbackground&&this.sortcolumn&&g.displayfield==this.sortcolumn;
if(o){w+=" "+this.toTP("jqx-grid-cell-sort")
}if(g.filter&&this.showfiltercolumnbackground){w+=" "+this.toTP("jqx-grid-cell-filter")
}if((g.pinned&&this.showpinnedcolumnbackground)||g.grouped){if(x){w+=" "+this.toTP("jqx-grid-cell-pinned")
}else{w+=" "+this.toTP("jqx-grid-cell-pinned")
}}if(this.altrows&&d.group==undefined){var y=d.visibleindex;
if(y>=this.altstart){if((this.altstart+y)%(1+this.altstep)==0){if(!o){w+=" "+this.toTP("jqx-grid-cell-alt")
}else{w+=" "+this.toTP("jqx-grid-cell-sort-alt")
}if(g.filter&&this.showfiltercolumnbackground){w+=" "+this.toTP("jqx-grid-cell-filter-alt")
}if(g.pinned&&this.showpinnedcolumnbackground){w+=" "+this.toTP("jqx-grid-cell-pinned-alt")
}}}}if(h<=j){if(x||this.rowdetails){var u=b(e);
var l=this.columns.records[h].width;
if(e.style.width!=parseInt(l)+"px"){u.width(l)
}}}else{if(x||this.rowdetails){if(this._hiddencolumns){var u=b(e);
var l=this.columns.records[h].width;
if(parseInt(e.style.width)!=l){u.width(l)
}}}}var v=true;
if(this.rowdetails&&k){if(t&&!x){w+=" "+this.toTP("jqx-grid-details-cell")
}else{if(x){w+=" "+this.toTP("jqx-grid-group-details-cell")
}}if(this.showrowdetailscolumn){if(!this.rtl){if(d.group==undefined&&h==j){var r=this.toThemeProperty("jqx-icon-arrow-down");
if(t){w+=" "+this.toTP("jqx-grid-group-expand");
w+=" "+r
}else{w+=" "+this.toTP("jqx-grid-group-collapse");
var r=this.toThemeProperty("jqx-icon-arrow-right");
w+=" "+r
}v=false;
e.title="";
e.innerHTML="";
if(e.className!=w){e.className=w
}return
}}else{if(d.group==undefined&&h==q.cells.length-j-1){var r=this.toThemeProperty("jqx-icon-arrow-down");
if(t){w+=" "+this.toTP("jqx-grid-group-expand-rtl");
w+=" "+r
}else{w+=" "+this.toTP("jqx-grid-group-collapse-rtl");
var r=this.toThemeProperty("jqx-icon-arrow-left");
w+=" "+r
}v=false;
e.title="";
e.innerHTML="";
if(e.className!=w){e.className=w
}return
}}}}if(p&&v&&h>=j){w+=" "+this.toTP("jqx-grid-cell-selected");
w+=" "+this.toTP("jqx-fill-state-pressed")
}if(e.className!=w){e.className=w
}if(d.group!=undefined){cellvalue="";
e.title="";
e.innerHTML="";
return
}z(this,g,d,cellvalue,e,n)
},_rendercell:function(k,g,o,i,d,h){var f=i+"_"+g.visibleindex;
if(g.columntype=="number"||g.cellsrenderer!=null){var f=o.uniqueid+"_"+g.visibleindex
}if(k.editcell&&k.editrow==undefined){if(k.editmode=="selectedrow"&&g.editable&&k.editable){if(k.editcell.row==k.getboundindex(o)){if(k._showcelleditor){if(!k.hScrollInstance.isScrolling()&&!k.vScrollInstance.isScrolling()){k._showcelleditor(k.editcell.row,g,d,k.editcell.init)
}else{k._showcelleditor(k.editcell.row,g,d,false,false)
}return
}}}else{if(k.editcell.row==k.getboundindex(o)&&k.editcell.column==g.datafield){k.editcell.element=d;
if(k.editcell.editing){if(k._showcelleditor){if(!k.hScrollInstance.isScrolling()&&!k.vScrollInstance.isScrolling()){k._showcelleditor(k.editcell.row,g,k.editcell.element,k.editcell.init)
}else{k._showcelleditor(k.editcell.row,g,k.editcell.element,k.editcell.init,false)
}return
}}}}}var l=k._defaultcellsrenderer(i,g);
var s=k._cellscache[f];
if(s){if(g.columntype=="inline"){k._renderinlinecell(k,d,g,o,i);
if(g.cellsrenderer!=null){var q=g.cellsrenderer(k.getboundindex(o),g.datafield,i,l,g.getcolumnproperties(),o.bounddata);
if(q!=undefined){d.innerHTML=q
}}return
}else{if(g.columntype=="checkbox"){if(k.host.jqxCheckBox){if(i===""){i=null
}var e=d.innerHTML.toString().length==0;
if(d.checkbox&&!k.groupable&&!e){d.checkboxrow=k.getboundindex(o);
if(i==""){i=false
}if(i=="1"){i=true
}if(i=="0"){i=false
}if(i==1){i=true
}if(i==0){i=false
}if(i=="true"){i=true
}if(i=="false"){i=false
}if(i==null&&!g.threestatecheckbox){i=false
}if(g.checkboxcolumn){i=false;
if(k.dataview.filters.length>0&&!k.virtualmode&&o.bounddata.dataindex!=undefined){if(k.selectedrowindexes.indexOf(o.bounddata.dataindex)!=-1){i=true
}}else{if(k.selectedrowindexes.indexOf(o.bounddata.boundindex)!=-1){i=true
}}}if(!k.disabled){if(d.checkboxinstance){d.checkboxinstance._setState(i)
}else{d.checkbox.jqxCheckBox("_setState",i)
}}}else{k._rendercheckboxcell(k,d,g,o,i)
}if(g.cellsrenderer!=null){var q=g.cellsrenderer(k.getboundindex(o),g.datafield,i,l,g.getcolumnproperties(),o.bounddata);
if(q!=undefined){d.innerHTML=q
}}return
}}else{if(g.columntype=="button"){if(k.host.jqxButton){if(i==""){i=false
}if(g.cellsrenderer!=null){i=g.cellsrenderer(k.getboundindex(o),g.datafield,i,l,g.getcolumnproperties(),o.bounddata)
}if(d.innerHTML==""){d.buttonrow=k.getboundindex(o);
d.button=null;
k._renderbuttoncell(k,d,g,o,i)
}if(d.button&&!k.groupable){d.buttonrow=k.getboundindex(o);
d.button.val(i)
}else{k._renderbuttoncell(k,d,g,o,i)
}return
}}}}var j=s.element;
if(g.cellsrenderer!=null||(d.childNodes&&d.childNodes.length==0)||k.groupable||k.rowdetails){if(d.innerHTML!=j){d.innerHTML=j
}}else{if(d.innerHTML.indexOf("editor")>=0){d.innerHTML=j
}else{if(h){var t=j.indexOf(">");
var r=j.indexOf("</");
var u=j.substring(t+1,r);
var n=d.childNodes[0];
if(u.indexOf(">")>=0){d.innerHTML=j
}else{if(n.childNodes[0]){if(u!=n.childNodes[0].nodeValue){if(u.indexOf("&")>=0){d.innerHTML=j
}else{n.childNodes[0].nodeValue=u
}}}else{var m=document.createTextNode(u);
n.appendChild(m)
}}}else{if(d.innerHTML!=j){d.innerHTML=j
}}}}if(k.enabletooltips&&g.enabletooltips){d.title=s.title
}return
}if(g.columntype=="checkbox"){k._rendercheckboxcell(k,d,g,o,i);
k._cellscache[f]={element:"",title:i};
if(k.enabletooltips&&g.enabletooltips){d.title=i
}return
}else{if(g.columntype=="button"){if(g.cellsrenderer!=null){i=g.cellsrenderer(k.getboundindex(o),g.datafield,i,l,g.getcolumnproperties(),o.bounddata)
}k._renderbuttoncell(k,d,g,o,i);
k._cellscache[f]={element:"",title:i};
if(k.enabletooltips&&g.enabletooltips){d.title=i
}return
}else{if(g.columntype=="number"){i=o.visibleindex
}else{if(g.columntype=="inline"){k._renderinlinecell(k,d,g,o,i);
k._cellscache[f]={element:"",title:i};
if(k.enabletooltips&&g.enabletooltips){d.title=i
}return
}}}}var j=null;
if(g.cellsrenderer!=null){j=g.cellsrenderer(k.getboundindex(o),g.datafield,i,l,g.getcolumnproperties(),o.bounddata)
}else{j=l
}if(j==null){j=l
}var p=i;
if(k.enabletooltips&&g.enabletooltips){if(g.cellsformat!=""){if(b.jqx.dataFormat){if(b.jqx.dataFormat.isDate(i)){p=b.jqx.dataFormat.formatdate(p,g.cellsformat,this.gridlocalization)
}else{if(b.jqx.dataFormat.isNumber(i)){p=b.jqx.dataFormat.formatnumber(p,g.cellsformat,this.gridlocalization)
}}}}d.title=p
}if(k.WinJS){b(d).html(j)
}else{d.innerHTML=j
}k._cellscache[f]={element:d.innerHTML,title:p};
return true
},_isIE10:function(){if(this._browser==undefined){var e=b.jqx.utilities.getBrowser();
if(e.browser=="msie"&&parseInt(e.version)>9){this._browser=true
}else{this._browser=false;
if(e.browser=="msie"){var d="Browser CodeName: "+navigator.appCodeName+"";
d+="Browser Name: "+navigator.appName+"";
d+="Browser Version: "+navigator.appVersion+"";
d+="Platform: "+navigator.platform+"";
d+="User-agent header: "+navigator.userAgent+"";
if(d.indexOf("Zune 4.7")!=-1){this._browser=true
}}}}return this._browser
},_renderinlinecell:function(f,d,e,i,g){var h=b(d);
d.innerHTML='<div style="position: absolute;"></div>'
},_rendercheckboxcell:function(g,e,f,k,h){if(g.host.jqxCheckBox){var j=b(e);
if(h===""){if(f.threestatecheckbox){h=null
}else{h=false
}}if(h=="1"){h=true
}if(h=="0"){h=false
}if(h==1){h=true
}if(h==0){h=false
}if(h=="true"){h=true
}if(h=="false"){h=false
}if(f.checkboxcolumn){h=false;
if(this.dataview.filters.length>0&&k.bounddata.dataindex!=undefined){if(this.selectedrowindexes.indexOf(k.bounddata.dataindex)!=-1){h=true
}}else{if(this.selectedrowindexes.indexOf(k.bounddata.boundindex)!=-1){h=true
}}}if(j.find(".jqx-checkbox").length==0){e.innerHTML='<div style="position: absolute; top: 50%; left: 50%; margin-top: -7px; margin-left: -10px;"></div>';
b(e.firstChild).jqxCheckBox({disabled:g.disabled,_canFocus:false,hasInput:false,hasThreeStates:f.threestatecheckbox,enableContainerClick:false,animationShowDelay:0,animationHideDelay:0,locked:true,theme:g.theme,checked:h});
if(this.editable&&f.editable){b(e.firstChild).jqxCheckBox({locked:false})
}if(f.checkboxcolumn){b(e.firstChild).jqxCheckBox({locked:false})
}e.checkbox=b(e.firstChild);
e.checkboxinstance=e.checkbox.data().jqxCheckBox.instance;
e.checkboxrow=k.boundindex;
if(this.dataview.filters.length>0){var d=k.bounddata.dataindex;
if(d==undefined){d=k.boundindex
}e.checkboxrow=d
}var i=b.data(e.firstChild,"jqxCheckBox").instance;
i.updated=function(o,n,q){if(g.disabled){n=q;
var p=g.table[0].rows.length;
var s=g._getcolumnindex(f.datafield);
for(var m=0;
m<p;
m++){var l=g.table[0].rows[m].cells[s].firstChild;
if(l){b(l).jqxCheckBox({disabled:g.disabled})
}}}if(f.editable&&!g.disabled){var p=g.table[0].rows.length;
var s=g._getcolumnindex(f.datafield);
if(g.editrow==undefined){if(f.cellbeginedit){var r=f.cellbeginedit(e.checkboxrow,f.datafield,f.columntype,!n);
if(r==false){g.setcellvalue(e.checkboxrow,f.datafield,!n,true);
return
}}if(g.editmode!=="selectedrow"){for(var m=0;
m<p;
m++){var l=g.table[0].rows[m].cells[s].firstChild;
if(l){b(l).jqxCheckBox("destroy")
}}}if(g.editcell&&g.editcell.validated==false){g.setcellvalue(e.checkboxrow,f.datafield,!n,true)
}else{if(g.editmode!=="selectedrow"||g.editcell==null){g._raiseEvent(17,{rowindex:e.checkboxrow,datafield:f.datafield,value:q,columntype:f.columntype});
g.setcellvalue(e.checkboxrow,f.datafield,n,true);
g._raiseEvent(18,{rowindex:e.checkboxrow,datafield:f.datafield,oldvalue:q,value:n,columntype:f.columntype})
}else{g.setcellvalue(e.checkboxrow,f.datafield,n,false,false)
}}}}else{if(f.checkboxcolumn){if(g.editcell){g.endcelledit(g.editcell.row,g.editcell.column,false,true)
}if(!g.disabled){if(n){g.selectrow(e.checkboxrow)
}else{g.unselectrow(e.checkboxrow)
}if(g.autosavestate){if(g.savestate){g.savestate()
}}}}}}
}else{e.checkboxrow=k.boundindex;
if(this.dataview.filters.length>0){d=k.bounddata.dataindex;
e.checkboxrow=d
}b(e.firstChild).jqxCheckBox("_setState",h)
}}},_renderbuttoncell:function(h,e,g,k,i){if(h.host.jqxButton){var j=b(e);
if(i==""){i=false
}if(j.find(".jqx-button").length==0){e.innerHTML='<input type="button" style="opacity: 0.99; position: absolute; top: 0%; left: 0%; padding: 0px; margin-top: 2px; margin-left: 2px;"/>';
b(e.firstChild).val(i);
b(e.firstChild).attr("hideFocus","true");
b(e.firstChild).jqxButton({disabled:h.disabled,theme:h.theme,height:h.rowsheight-4,width:g.width-4});
e.button=b(e.firstChild);
e.buttonrow=h.getboundindex(k);
var d=this.isTouchDevice();
if(d){var f=b.jqx.mobile.getTouchEventName("touchend");
h.addHandler(b(e.firstChild),f,function(l){if(g.buttonclick){g.buttonclick(e.buttonrow,l)
}})
}else{h.addHandler(b(e.firstChild),"click",function(l){if(g.buttonclick){g.buttonclick(e.buttonrow,l)
}})
}}else{e.buttonrow=h.getboundindex(k);
b(e.firstChild).val(i)
}}},_clearvisualrow:function(g,f,o,i,n){var m=this.toTP("jqx-grid-cell");
if(f){m=" "+this.toTP("jqx-grid-group-cell")
}m+=" "+this.toTP("jqx-grid-cleared-cell");
var p=this.table[0].rows;
for(var k=0;
k<i+n;
k++){if(p[o]){var e=p[o].cells[k];
if(e.className!=m){e.className=m
}var d=this.columns.records[k];
if(this._horizontalvalue!=g&&!d.pinned){if(this.oldhscroll==true){var h=-g;
e.style.marginLeft=-g+"px"
}}var l=d.width;
if(l<d.minwidth){l=d.minwidth
}if(l>d.maxwidth){l=d.maxwidth
}if(parseInt(e.style.width)!=l){if(l!="auto"){b(e)[0].style.width=l+"px"
}else{b(e)[0].style.width=l
}}if(e.title!=""){e.title=""
}if(e.innerHTML!=""){e.innerHTML=""
}}}if(p[o]){if(parseInt(p[o].style.height)!=this.rowsheight){p[o].style.height=parseInt(this.rowsheight)+"px"
}}},_findgroupstate:function(e){var d=this._findgroup(e);
if(d==null){return false
}return d.expanded
},_findgroup:function(e){var d=null;
if(this.expandedgroups[e]){return this.expandedgroups[e]
}return d
},_clearcaches:function(){this._columnsbydatafield=new Array();
this._pagescache=new Array();
this._pageviews=new Array();
this._cellscache=new Array();
this.heights=new Array();
this.hiddens=new Array();
this.hiddenboundrows=new Array();
this.heightboundrows=new Array();
this.detailboundrows=new Array();
this.details=new Array();
this.expandedgroups=new Array();
this._rowdetailscache=new Array();
this._rowdetailselementscache=new Array();
if(b.jqx.dataFormat){b.jqx.dataFormat.cleardatescache()
}this.tableheight=null
},_getColumnText:function(d){if(this._columnsbydatafield==undefined){this._columnsbydatafield=new Array()
}if(this._columnsbydatafield[d]){return this._columnsbydatafield[d]
}var f=d;
var e=null;
b.each(this.columns.records,function(){if(this.datafield==d){f=this.text;
e=this;
return false
}});
this._columnsbydatafield[d]={label:f,column:e};
return this._columnsbydatafield[d]
},_getcolumnbydatafield:function(d){if(this.__columnsbydatafield==undefined){this.__columnsbydatafield=new Array()
}if(this.__columnsbydatafield[d]){return this.__columnsbydatafield[d]
}var f=d;
var e=null;
b.each(this.columns.records,function(){if(this.datafield==d||this.displayfield==d){f=this.text;
e=this;
return false
}});
this.__columnsbydatafield[d]=e;
return this.__columnsbydatafield[d]
},isscrollingvertically:function(){var d=(this.vScrollBar.jqxScrollBar("isScrolling"));
return d
},_renderrowdetails:function(q,y,d,x,n,A){if(y==undefined){return
}var k=b(y);
var g=0;
var t=this.rowdetails&&this.showrowdetailscolumn?(1+this.groups.length)*this.groupindentwidth:(this.groups.length)*this.groupindentwidth;
if(this.groupable&&this.groups.length>0){for(var r=0;
r<=n;
r++){var e=b(y.cells[r]);
e[0].innerHTML="";
e[0].className="jqx-grid-details-cell"
}}var e=b(y.cells[g]);
if(e[0].style.display=="none"){var o=y.cells[g];
var B=2;
var l=g;
while(o!=undefined&&o.style.display=="none"&&B<10){o=y.cells[l+B-1];
B++
}e=b(o)
}if(this.rtl){for(var v=x;
v<n;
v++){y.cells[v].innerHTML="";
y.cells[v].className="jqx-grid-details-cell"
}}e.css("width","100%");
k.height(d.rowdetailsheight);
e[0].className=q;
var z=this.getboundindex(d);
var j=z+"_";
if(this._rowdetailscache[j]){var E=this._rowdetailscache[j];
var C=E.html;
if(this.initrowdetails){if(this._rowdetailscache[j].element){var f=this._rowdetailscache[j].element;
var i=e.coord();
var h=this.gridcontent.coord();
var w=parseInt(i.top)-parseInt(h.top);
var u=parseInt(i.left)-parseInt(h.left);
if(this.rtl){u=0
}b(f).css("top",w);
b(f).css("left",u);
b(f).css("display","block");
b(f).width(this.host.width()-t);
if(this.layoutrowdetails){this.layoutrowdetails(z,f,this.element,this.getrowdata(z))
}}}else{e[0].innerHTML=C
}return
}e[0].innerHTML="";
if(!this.enablerowdetailsindent){t=0
}var p='<div class="jqx-enableselect" role="rowgroup" style="border: none; overflow: hidden; width: 100%; height: 100%; margin-left: '+t+'px;">'+d.rowdetails+"</div>";
if(this.rtl){var p='<div class="jqx-enableselect" role="rowgroup" style="border: none; overflow: hidden; width: 100%; height: 100%; margin-left: '+0+"px; margin-right: "+t+'px;">'+d.rowdetails+"</div>"
}this._rowdetailscache[j]={id:y.id,html:p};
if(this.initrowdetails){var f=b(p)[0];
b(this.gridcontent).prepend(b(f));
b(f).css("position","absolute");
b(f).width(this.host.width()-t);
b(f).height(e.height());
var i=e.coord();
b(f).css("z-index",2000);
if(this.isTouchDevice()){b(f).css("z-index",99999)
}b(f).addClass(this.toThemeProperty("jqx-widget-content"));
var i=e.coord();
var h=this.gridcontent.coord();
var w=parseInt(i.top)-parseInt(h.top);
var u=parseInt(i.left)-parseInt(h.left);
b(f).css("top",w);
b(f).css("left",u);
this.content[0].scrollTop=0;
this.content[0].scrollLeft=0;
var D=b(b(f).children()[0]);
if(D[0].id!=""){D[0].id=D[0].id+z
}this.initrowdetails(z,f,this.element,this.getrowdata(z));
this._rowdetailscache[j].element=f;
this._rowdetailselementscache[z]=f
}else{e[0].innerHTML=p
}},_defaultcellsrenderer:function(f,d){if(d.cellsformat!=""){if(b.jqx.dataFormat){if(b.jqx.dataFormat.isDate(f)){f=b.jqx.dataFormat.formatdate(f,d.cellsformat,this.gridlocalization)
}else{if(b.jqx.dataFormat.isNumber(f)){f=b.jqx.dataFormat.formatnumber(f,d.cellsformat,this.gridlocalization)
}}}}var e="4px";
if(this.rowsheight!=25){e=(this.rowsheight/2-this._cellheight/2);
if(e<0){e=4
}e+="px"
}if(this.enableellipsis){if(d.cellsalign=="center"||d.cellsalign=="middle"){return'<div style="text-overflow: ellipsis; overflow: hidden; padding-bottom: 2px; text-align: center; margin-top: '+e+';">'+f+"</div>"
}if(d.cellsalign=="left"){return'<div style="overflow: hidden; text-overflow: ellipsis; padding-bottom: 2px; text-align: left; margin-right: 2px; margin-left: 4px; margin-top: '+e+';">'+f+"</div>"
}if(d.cellsalign=="right"){return'<div style="overflow: hidden;  text-overflow: ellipsis; padding-bottom: 2px; text-align: right; margin-right: 2px; margin-left: 4px; margin-top: '+e+';">'+f+"</div>"
}}if(d.cellsalign=="center"||d.cellsalign=="middle"){return'<div style="text-align: center; margin-top: '+e+';">'+f+"</div>"
}return'<span style="margin-left: 4px; margin-right: 2px; margin-top: '+e+"; float: "+d.cellsalign+';">'+f+"</span>"
},getcelltext:function(g,e){if(g==null||e==null){return null
}var d=this.getcellvalue(g,e);
var f=this.getcolumn(e);
if(f&&f.cellsformat!=""){if(b.jqx.dataFormat){if(b.jqx.dataFormat.isDate(d)){d=b.jqx.dataFormat.formatdate(d,f.cellsformat,this.gridlocalization)
}else{if(b.jqx.dataFormat.isNumber(d)){d=b.jqx.dataFormat.formatnumber(d,f.cellsformat,this.gridlocalization)
}}}}return d
},getcelltextbyid:function(g,e){if(g==null||e==null){return null
}var d=this.getcellvaluebyid(g,e);
var f=this.getcolumn(e);
if(f&&f.cellsformat!=""){if(b.jqx.dataFormat){if(b.jqx.dataFormat.isDate(d)){d=b.jqx.dataFormat.formatdate(d,f.cellsformat,this.gridlocalization)
}else{if(b.jqx.dataFormat.isNumber(d)){d=b.jqx.dataFormat.formatnumber(d,f.cellsformat,this.gridlocalization)
}}}}return d
},_getcellvalue:function(d,f){var e=null;
e=f.bounddata[d.datafield];
if(d.displayfield!=null){e=f.bounddata[d.displayfield]
}if(e==null){e=""
}return e
},getcell:function(h,d){if(h==null||d==null){return null
}var e=parseInt(h);
var g=h;
var f="";
if(!isNaN(e)){g=this.getrowdata(e)
}if(g!=null){f=g[d]
}return this._getcellresult(f,h,d)
},getrenderedcell:function(h,d){if(h==null||d==null){return null
}var e=parseInt(h);
var g=h;
var f="";
if(!isNaN(e)){g=this.getrenderedrowdata(e)
}if(g!=null){f=g[d]
}return this._getcellresult(f,h,d)
},_getcellresult:function(k,n,e){var f=this.getcolumn(e);
if(f==null||f==undefined){return null
}var i=f.getcolumnproperties();
var g=i.hidden;
var d=i.width;
var m=i.pinned;
var h=i.cellsalign;
var j=i.cellsformat;
var l=this.getrowheight(n);
if(l==false){return null
}return{value:k,row:n,column:e,datafield:e,width:d,height:l,hidden:g,pinned:m,align:h,format:j}
},setcellvaluebyid:function(i,d,h,f,g){var e=this.getrowboundindexbyid(i);
return this.setcellvalue(e,d,h,f,g)
},getcellvaluebyid:function(f,d){var e=this.getrowboundindexbyid(f);
return this.getcellvalue(e,d)
},setcellvalue:function(l,m,y,F,i){if(l==null||m==null){return false
}var L=parseInt(l);
var g=L;
var j=l;
if(!isNaN(L)){j=this.getrowdata(L)
}var B=false;
if(this.filterable&&this._initfilterpanel&&this.dataview.filters.length){B=true
}if(this.virtualmode){this._pagescache=new Array()
}if(this.sortcache){this.sortcache={}
}var n="";
var s="";
if(j!=null&&j[m]!==y){if(j[m]===null&&y===""){return
}var f=this._getcolumnbydatafield(m);
var I="string";
var h=this.source.datafields||((this.source._source)?this.source._source.datafields:null);
if(h){var u="";
b.each(h,function(){if(this.name==f.displayfield){if(this.type){u=this.type
}return false
}});
if(u){I=u
}s=j[f.displayfield]
}n=j[m];
if(!f.nullable||(y!=null&&y!==""&&f.nullable&&y.label===undefined)){if(b.jqx.dataFormat.isNumber(n)||I=="number"||I=="float"||I=="int"||I=="decimal"&&I!="date"){y=new Number(y);
y=parseFloat(y);
if(isNaN(y)){y=0
}}else{if(b.jqx.dataFormat.isDate(n)||I=="date"){if(y!=""){var z=y;
z=new Date(z);
if(z!="Invalid Date"&&z!=null){y=z
}else{if(z=="Invalid Date"){z=new Date();
y=z
}}}}}if(j[m]===y){if(!this._updating&&F!=false){this._renderrows(this.virtualsizeinfo)
}return
}}j[m]=y;
var H=this.getrenderedrowdata(L,true);
if(!H){return
}H[m]=y;
if(y!=null&&y.label!=null){var f=this._getcolumnbydatafield(m);
j[f.displayfield]=y.label;
H[f.displayfield]=y.label;
j[m]=y.value;
H[m]=y.value
}if(B){if(j.dataindex!=undefined){g=j.dataindex;
this.dataview.cachedrecords[j.dataindex][m]=y;
if(y!=null&&y.label!=undefined){this.dataview.cachedrecords[j.dataindex][m]=y.value;
this.dataview.cachedrecords[j.dataindex][f.displayfield]=y.label
}}}}else{if(!this._updating&&F!=false){this._renderrows(this.virtualsizeinfo)
}return false
}if(this.source&&this.source._knockoutdatasource&&!this._updateFromAdapter&&this.autokoupdates){if(this.source._source._localdata){var D=L;
if(B){if(j.dataindex!=undefined){D=j.dataindex
}}var q=this.source._source._localdata()[D];
this.source.suspendKO=true;
var k=q;
if(k[m]&&k[m].subscribe){if(y!=null&&y.label!=null){k[f.displayfield](y.label);
k[m](y.value)
}else{k[m](y)
}}else{var h=this.source._source.datafields;
var E=null;
var w=null;
if(h){b.each(h,function(){if(this.name==m){w=this.map;
return false
}})
}if(w==null){if(y!=null&&y.label!=null){k[m]=y.value;
k[f.displayfield]=y.label
}else{k[m]=y
}}else{var A=w.split(this.source.mapChar);
if(A.length>0){var d=k;
for(var v=0;
v<A.length-1;
v++){d=d[A[v]]
}d[A[A.length-1]]=y
}}this.source._source._localdata.replace(q,b.extend({},k))
}this.source.suspendKO=false
}}if(this.sortcolumn&&this.dataview.sortby&&!this._updating){var o=this.getsortinformation();
if(this.sortcolumn==m){this.dataview.clearsortdata();
this.dataview.sortby(o.sortcolumn,o.sortdirection.ascending)
}}else{if(!this._updating){if(this.dataview.sortby){if(this.dataview.sortcache[m]){this.dataview.sortcache[m]=null
}}}}this._cellscache=new Array();
if(this.source.updaterow&&(i==undefined||i==true)){var J=false;
var K=this.that;
var r=function(p){if(false==p){K.setcellvalue(l,m,n,true,false);
if(n!=s){K.setcellvalue(l,K.getcolumn(m).displayfield,s,true,false)
}}};
try{var M=this.getrowid(L);
J=this.source.updaterow(M,j,r);
if(J==undefined){J=true
}}catch(C){J=false;
K.setcellvalue(l,m,n,true,false);
if(n!=s){K.setcellvalue(l,K.getcolumn(m).displayfield,s,true,false)
}return
}}var e=this.vScrollInstance.value;
if(this._updating&&F!=true){F=false
}if(F==true||F==undefined){var K=this.that;
var t=function(){if(K.pageable&&K.updatepagerdetails){K.updatepagerdetails();
if(K.autoheight||K.autorowheight){K._updatepageviews()
}}};
var G=this.groupable&&this.groups.length>0;
if(B&&!G){if(this.autoheight||this.autorowheight){this.prerenderrequired=true
}this.dataview.refresh();
this.rendergridcontent(true,false);
t();
this._renderrows(this.virtualsizeinfo)
}else{if(this.sortcolumn&&!G){if(this.autoheight||this.autorowheight){this.prerenderrequired=true
}this.dataview.reloaddata();
this.rendergridcontent(true,false);
t();
this._renderrows(this.virtualsizeinfo)
}else{if(this.groupable&&this.groups.length>0){if(this.autoheight||this.autorowheight){this.prerenderrequired=true
}if(this.pageable){if(this.groups.indexOf(m)!=-1){this._pagescache=new Array();
this._cellscache=new Array();
this.dataview.refresh();
this._render(true,true,false,false)
}else{this._pagescache=new Array();
this._cellscache=new Array();
this.dataview.updateview();
this._renderrows(this.virtualsizeinfo)
}}else{this._pagescache=new Array();
this._cellscache=new Array();
this.dataview.updateview();
this._renderrows(this.virtualsizeinfo)
}}else{this.dataview.updateview();
this._renderrows(this.virtualsizeinfo)
}}}}this.vScrollInstance.setPosition(e);
if(this.showaggregates&&this._updatecolumnsaggregates){this._updatecolumnsaggregates()
}if(this.showfilterrow&&this.filterable&&this.filterrow){var x=this.getcolumn(m).filtertype;
if(x=="list"||x=="checkedlist"){this._updatelistfilters(true)
}}this._raiseEvent(19,{rowindex:l,datafield:m,newvalue:y,value:y,oldvalue:n});
return true
},getcellvalue:function(h,d){if(h==null||d==null){return null
}var e=parseInt(h);
var g=h;
if(!isNaN(e)){g=this.getrowdata(e)
}if(g!=null){var f=g[d];
return f
}return null
},getrows:function(){var h=this.dataview.records.length;
if(this.virtualmode){var j=new Array();
for(var e=0;
e<this.dataview.records.length;
e++){var d=this.dataview.records[e];
if(d){j.push(d)
}}if(this.dataview.records.length===undefined){b.each(this.dataview.records,function(){var i=this;
if(i){j.push(i)
}})
}var g=0;
if(this.pageable){g=this.dataview.pagenum*this.dataview.pagesize
}if(j.length>this.source._source.totalrecords-g){return j.slice(0,this.source._source.totalrecords-g)
}return j
}if(this.dataview.sortdata){var j=new Array();
for(var e=0;
e<h;
e++){var f={};
f=b.extend({},this.dataview.sortdata[e].value);
j[e]=f
}return j
}else{return this.dataview.records
}},getrowboundindexbyid:function(g){var f=this.dataview.recordsbyid["id"+g];
if(f){if(f.boundindex){return this.getboundindex(f)
}}var e=this.getboundrows();
for(var d=0;
d<e.length;
d++){if(e[d]){if(e[d].uid==g){return d
}}}return -1
},getrowdatabyid:function(f){var e=this.dataview.recordsbyid["id"+f];
if(e){return e
}else{var d=this.getrowboundindexbyid(f);
return this.getboundrows()[d]
}return null
},getrowdata:function(d){if(d==undefined){d=0
}if(this.virtualmode){var e=this.dataview.records[d];
return e
}else{var e=this.getboundrows()[d];
return e
}return null
},getrenderedrowdata:function(d,f){if(d==undefined){d=0
}if(this.virtualmode){var g=this.getrowvisibleindex(d);
var e=this.dataview.loadedrecords[g];
return e
}var g=this.getrowvisibleindex(d);
if(g>=0){if(this.groupable&&this.groups.length>0){var e=this.dataview.loadedrecords[g]
}else{var e=this.dataview.loadedrecords[g];
if(this.pageable&&(f==undefined||f==false)){var e=this.dataview.loadedrecords[this.dataview.pagesize*this.dataview.pagenum+d]
}}return e
}return null
},getboundrows:function(){return this.dataview.cachedrecords
},getrowdisplayindex:function(d){var f=this.getdisplayrows();
for(var e=0;
e<f.length;
e++){if(f[e].dataindex!==undefined){if(f[e].dataindex===d){return f[e].visibleindex
}}else{if(f[e].boundindex===d){return f[e].visibleindex
}}}return -1
},getboundindex:function(e){var d=e.boundindex;
if(this.groupable&&this.groups.length>0&&this.pageable){d=this.getrowboundindexbyid(e.bounddata.uid)
}if(this.dataview.filters.length>0){if(e.bounddata){if(e.bounddata.dataindex!==undefined){d=e.bounddata.dataindex
}}else{if(e.dataindex!==undefined){d=e.dataindex
}}}return d
},getrowboundindex:function(d){var e=this.getdisplayrows()[d];
if(e){if(e.dataindex!==undefined){return e.dataindex
}return e.boundindex
}return -1
},getdisplayrows:function(){return this.dataview.loadedrecords
},getloadedrows:function(){return this.getdisplayrows()
},getvisiblerowdata:function(e){var d=this.getvisiblerows();
if(d){return d[e]
}return null
},getloadedrowdata:function(e){var d=this.getloadedrows();
if(d){return d[e]
}return null
},getvisiblerows:function(){if(this.virtualmode){return this.dataview.loadedrecords
}if(this.pageable){var f=[];
for(var e=0;
e<this.dataview.pagesize;
e++){var d=this.dataview.loadedrecords[e+(this.dataview.pagesize*this.dataview.pagenum)];
if(d==undefined){break
}f.push(d)
}return f
}else{if(this._startboundindex!=undefined&&this._endboundindex!=undefined){var f=[];
for(var e=this._startvisibleindex;
e<=this._endvisibleindex;
e++){var d=this.dataview.loadedrecords[e];
if(d==undefined){break
}f.push(d)
}return f
}}return this.dataview.loadedrecords
},getrowid:function(d){if(d==undefined){d=0
}if(this.virtualmode){var g=this.getrowvisibleindex(d);
var f=this.dataview.loadedrecords[g];
if(f){return f.uid
}}else{var f=null;
var e=this.dataview.filters.length>0;
if(d>=0&&d<this.dataview.bounditems.length&&!e){if(this.groupable&&this.groups.length>0){var g=this.getrowvisibleindex(d);
var f=this.dataview.loadedrecords[g]
}else{var g=this.getrowvisibleindex(d);
var f=this.dataview.loadedrecords[g]
}if(f){return f.uid
}}if(this.dataview.filters.length>0){var f=this.getboundrows()[d];
if(f){if(f.uid!=null){return f.uid
}}return null
}}return null
},_updateGridData:function(e){var d=false;
if(this.filterable&&this._initfilterpanel&&this.dataview.filters.length){d=true
}if(d){this.dataview.refresh();
if(e=="updaterow"){this._render(true,true,false,false,false);
this.invalidate()
}else{this.render()
}}else{if(this.sortcolumn||(this.groupable&&this.groups.length>0)){this.dataview.reloaddata();
this.render()
}else{this._cellscache=new Array();
this._pagescache=new Array();
this._renderrows(this.virtualsizeinfo)
}}if(this.showfilterrow&&this.filterable&&this.filterrow){this._updatelistfilters(true)
}},updaterow:function(i,k,g){if(i!=undefined&&k!=undefined){var h=this.that;
var j=false;
h._datachanged=true;
var e=function(o,n,s){if(o._loading){throw new Error("jqxGrid: "+o.loadingerrormessage);
return false
}var q=false;
if(!b.isArray(n)){q=o.dataview.updaterow(n,s)
}else{b.each(n,function(t,u){q=o.dataview.updaterow(this,s[t],false)
});
o.dataview.refresh()
}var r=o.vScrollInstance.value;
if(g==undefined||g==true){if(o._updating==undefined||o._updating==false){o._updateGridData("updaterow")
}}if(o.showaggregates&&o._updatecolumnsaggregates){o._updatecolumnsaggregates()
}if(o.source&&o.source._knockoutdatasource&&!o._updateFromAdapter&&o.autokoupdates){if(o.source._source._localdata){var m=o.dataview.recordsbyid["id"+n];
var p=o.dataview.records.indexOf(m);
var l=o.source._source._localdata()[p];
o.source.suspendKO=true;
o.source._source._localdata.replace(l,b.extend({},m));
o.source.suspendKO=false
}}o.vScrollInstance.setPosition(r);
return q
};
if(this.source.updaterow){var d=function(l){if(l==true||l==undefined){e(h,i,k)
}else{j=false
}};
try{j=this.source.updaterow(i,k,d);
if(j==undefined){j=true
}}catch(f){j=false
}}else{j=e(h,i,k)
}return j
}return false
},deleterow:function(j,h){if(j!=undefined){this._datachanged=true;
var k=false;
var i=this.that;
var g=this.getrowboundindexbyid(j);
if(g!=undefined){if(this.selectedrowindexes.indexOf(g)>=0){this.selectedrowindexes.splice(this.selectedrowindexes.indexOf(g),1)
}if(this.selectedrowindex==g){this.selectedrowindex=-1
}}var e=function(m,l){if(m._loading){throw new Error("jqxGrid: "+m.loadingerrormessage);
return false
}var n=false;
var o=m.vScrollInstance.value;
if(!b.isArray(l)){var n=m.dataview.deleterow(l)
}else{b.each(l,function(){n=m.dataview.deleterow(this,false)
});
m.dataview.refresh()
}if(m._updating==undefined||m._updating==false){if(h==undefined||h==true){m._render(true,true,false,false);
if(m.vScrollBar.css("visibility")!="visible"){m._arrange();
m._updatecolumnwidths();
m._updatecellwidths();
m._renderrows(m.virtualsizeinfo)
}}}if(m.source&&m.source._knockoutdatasource&&!m._updateFromAdapter&&m.autokoupdates){if(m.source._source._localdata){m.source.suspendKO=true;
m.source._source._localdata.pop(rowdata);
m.source.suspendKO=false
}}if(m.dataview.sortby){m.dataview.clearsortdata()
}m.vScrollInstance.setPosition(o);
return n
};
if(this.source.deleterow){var d=function(l){if(l==true||l==undefined){e(i,j)
}};
try{this.source.deleterow(j,d);
if(k==undefined){k=true
}}catch(f){k=false
}}else{k=e(i,j)
}return k
}return false
},addrow:function(e,n,i){if(n!=undefined){this._datachanged=true;
if(i==undefined){i="last"
}var m=false;
var l=this.that;
if(e==null){var f=this.dataview.filters&&this.dataview.filters.length>0;
var k=!f?this.dataview.totalrecords:this.dataview.cachedrecords.length;
if(!b.isArray(n)){e=this.dataview.getid(this.dataview.source.id,n,k);
while(null!=this.dataview.recordsbyid["id"+e]){e++
}}else{var d=new Array();
b.each(n,function(o,p){var q=l.dataview.getid(l.dataview.source.id,n[o],k+o);
d.push(q)
});
e=d
}}var g=function(q,p,t,o){if(q._loading){throw new Error("jqxGrid: "+q.loadingerrormessage);
return false
}var s=q.vScrollInstance.value;
var r=false;
if(!b.isArray(t)){if(t!=undefined&&t.dataindex!=undefined){delete t.dataindex
}r=q.dataview.addrow(p,t,o)
}else{b.each(t,function(u,v){if(this.dataindex!=undefined){delete this.dataindex
}var w=null;
if(p!=null&&p[u]!=null){w=p[u]
}r=q.dataview.addrow(w,this,o,false)
});
q.dataview.refresh()
}if(q._updating==undefined||q._updating==false){q._render(true,true,false,false);
q.invalidate()
}if(q.source&&q.source._knockoutdatasource&&!q._updateFromAdapter&&q.autokoupdates){if(q.source._source._localdata){q.source.suspendKO=true;
q.source._source._localdata.push(t);
q.source.suspendKO=false
}}if(q.scrollmode!="deferred"){q.vScrollInstance.setPosition(s)
}else{q.vScrollInstance.setPosition(0)
}return r
};
if(this.source.addrow){var h=function(o,p){if(o==true||o==undefined){if(p!=undefined){e=p
}g(l,e,n,i)
}};
try{m=this.source.addrow(e,n,i,h);
if(m==undefined){m=true
}}catch(j){m=false
}if(m==false){return false
}}else{g(this,e,n,i)
}return m
}return false
},_findvisiblerow:function(g,h){if(g==undefined){g=parseInt(this.vScrollInstance.value)
}var e=0;
if(h==undefined||h==null){h=this.rows.records
}var d=h.length;
while(e<=d){mid=parseInt((e+d)/2);
var f=h[mid];
if(f==undefined){break
}if(f.top>g&&f.top+f.height>g){d=mid-1
}else{if(f.top<g&&f.top+f.height<g){e=mid+1
}else{return mid;
break
}}}return -1
},_updatecellwidths:function(){var g=this.virtualsizeinfo;
if(!g){return
}var l=this.that;
if(this.gridcontent==undefined){return
}if(this.table==undefined){this.table=this.gridcontent.find("#contenttable"+this.element.id)
}var s=this.groupable&&this.groups.length>0;
var n=0;
var t=g.visiblerecords;
if(this.pageable&&(this.autoheight||this.autorowheight)){t=this.dataview.pagesize;
if(this.groupable){this.dataview.updateview();
t=this.dataview.rows.length
}}if(!this.groupable&&!this.pageable&&(this.autoheight||this.autorowheight)){t=this.dataview.totalrecords
}if(this.rowdetails){t+=this.dataview.pagesize
}if(!this.columns.records){return
}var e=this.columns.records.length;
var p=this.table[0].rows;
for(var q=0;
q<t;
q++){var d=p[q];
if(!d){break
}var o=d.cells;
var m=0;
for(var h=0;
h<e;
h++){var f=this.columns.records[h];
var r=f.width;
var k=o[h];
if(parseInt(k.style.left)!=m){k.style.left=m+"px"
}if(parseInt(k.style.width)!=r){k.style.width=r+"px"
}if(!(f.hidden&&f.hideable)){m+=parseFloat(r)
}else{k.style.display="none"
}}if(n==0){this.table.width(parseFloat(m)+2);
n=m
}}if(this.showaggregates&&this._updateaggregates){this._updateaggregates()
}if(this.showfilterrow&&this.filterable&&this._updatefilterrowui){this._updatefilterrowui()
}this._updatescrollbarsafterrowsprerender();
if(s){this._renderrows(this.virtualsizeinfo)
}},_updatescrollbarsafterrowsprerender:function(){var f=this.hScrollBar[0].style.visibility;
var h=0;
var d=this.vScrollBar[0].style.visibility;
if(d=="visible"){h=this.scrollbarsize+3
}var e=this.element.style.width;
if(e.toString().indexOf("%")>=0){e=this.host.width()
}else{e=parseInt(e)
}if(parseInt(this.table[0].style.width)-2>e-h){if(f!="visible"){if(!this.autowidth){this.hScrollBar[0].style.visibility="visible"
}this._arrange()
}if(d=="visible"){if(this.scrollmode!="deferred"&&!this.virtualmode){if(this.virtualsizeinfo){var g=this.virtualsizeinfo.virtualheight-this._gettableheight();
if(!isNaN(g)&&g>0){if(f!="hidden"){this.vScrollBar.jqxScrollBar("max",g+this.scrollbarsize+4)
}else{this.vScrollBar.jqxScrollBar("max",g)
}}}}else{this._updatevscrollbarmax()
}}else{h=-2
}this.hScrollBar.jqxScrollBar("max",h+this.table.width()-this.host.width())
}else{if(f!="hidden"){this.hScrollBar.css("visibility","hidden");
this._arrange()
}}this._renderhorizontalscroll()
},_prerenderrows:function(r){var o=this.that;
if(this.prerenderrequired==true){this.prerenderrequired=false;
if(this.editable&&this._destroyeditors){this._destroyeditors()
}if(this.gridcontent==undefined){return
}this.gridcontent.find("#contenttable"+this.element.id).remove();
if(this.table!=null){this.table.remove();
this.table=null
}this.table=b('<div id="contenttable'+this.element.id+'" style="overflow: hidden; position: relative;" height="100%"></div>');
this.gridcontent.addClass(this.toTP("jqx-grid-content"));
this.gridcontent.addClass(this.toTP("jqx-widget-content"));
this.gridcontent.append(this.table);
var s=this.groupable&&this.groups.length>0;
var t=0;
this.table[0].rows=new Array();
var l=this.toTP("jqx-grid-cell");
if(s){l=" "+this.toTP("jqx-grid-group-cell")
}var d=r.visiblerecords;
if(this.pageable&&(this.autoheight||this.autorowheight)){d=this.dataview.pagesize;
if(this.groupable){this.dataview.updateview();
d=this.dataview.rows.length;
if(d<this.dataview.pagesize){d=this.dataview.pagesize
}}}if(!this.pageable&&(this.autoheight||this.autorowheight)){d=this.dataview.totalrecords
}if(this.groupable&&(this.autoheight||this.autorowheight)&&!this.pageable){d=this.dataview.rows.length
}if(this.rowdetails){if(this.autoheight||this.autorowheight){d+=this.dataview.pagesize
}else{d+=d
}}if(!this.columns.records){return
}var e=this.columns.records.length;
if(b.jqx.browser.msie&&b.jqx.browser.version>8){this.table.css("opacity","0.99")
}if(b.jqx.browser.mozilla){}if(navigator.userAgent.indexOf("Safari")!=-1){this.table.css("opacity","0.99")
}var v=b.jqx.browser.msie&&b.jqx.browser.version<8;
if(v){this.host.attr("hideFocus","true")
}var k=this.tableZIndex;
if(d*e>k){k=d*e
}var g=this.dataview.records.length==0;
var n=this.isTouchDevice();
var z="";
this._hiddencolumns=false;
for(var q=0;
q<d;
q++){var A='<div role="row" style="position: relative; height='+this.rowsheight+'px;" id="row'+q+this.element.id+'">';
if(v){var A='<div role="row" style="position: relative; z-index: '+k+"; height:"+this.rowsheight+'px;" id="row'+q+this.element.id+'">';
k--
}var w=0;
for(var f=0;
f<e;
f++){var B=this.columns.records[f];
var x=B.width;
if(x<B.minwidth){x=B.minwidth
}if(x>B.maxwidth){x=B.maxwidth
}if(this.rtl){var y=k-e+2*f;
var u='<div role="gridcell" style="left: '+w+"px; z-index: "+y+"; width:"+x+"px;";
k--
}else{var u='<div role="gridcell" style="left: '+w+"px; z-index: "+k--+"; width:"+x+"px;"
}if(!(B.hidden&&B.hideable)){w+=x
}else{u+="display: none;";
this._hiddencolumns=true;
k++
}u+='" class="'+l+'"></div>';
A+=u
}if(t==0){this.table.width(parseInt(w)+2);
t=w
}A+="</div>";
z+=A
}if(o.WinJS){MSApp.execUnsafeLocalFunction(function(){o.table.html(z)
})
}else{o.table[0].innerHTML=z
}this.table[0].rows=new Array();
var m=this.table.children();
for(var q=0;
q<d;
q++){var h=m[q];
this.table[0].rows.push(h);
h.cells=new Array();
var p=b(h).children();
for(var f=0;
f<e;
f++){h.cells.push(p[f])
}}if(d==0){var w=0;
if(this.showemptyrow){var A=b('<div style="position: relative;" id="row0'+this.element.id+'"></div>');
this.table.append(A);
A.height(this.rowsheight);
this.table[0].rows[0]=A[0];
this.table[0].rows[0].cells=new Array()
}for(var f=0;
f<e;
f++){var B=this.columns.records[f];
var x=B.width;
if(this.showemptyrow){var u=b('<div style="position: absolute; height: 100%; left: '+w+"px; z-index: "+k--+"; width:"+x+'px;" class="'+l+'"></div>');
u.height(this.rowsheight);
A.append(u);
this.table[0].rows[0].cells[f]=u[0]
}if(x<B.minwidth){x=B.minwidth
}if(x>B.maxwidth){x=B.maxwidth
}if(!(B.hidden&&B.hideable)){w+=x
}}this.table.width(parseInt(w)+2);
t=w
}this._updatescrollbarsafterrowsprerender();
if(this.rendered){this.rendered("rows")
}this._addoverlayelement()
}},_groupsheader:function(){return this.groupable&&this.showgroupsheader
},_arrange:function(){var A=null;
var F=null;
this.tableheight=null;
var n=this.that;
var u=false;
var t=false;
if(this.width!=null&&this.width.toString().indexOf("px")!=-1){A=this.width
}else{if(this.width!=undefined&&!isNaN(this.width)){A=this.width
}}if(this.width!=null&&this.width.toString().indexOf("%")!=-1){A=this.width;
u=true
}if(this.autowidth){var x=0;
for(var g=0;
g<this.columns.records.length;
g++){var e=this.columns.records[g].width;
if(e=="auto"){e=this._measureElementWidth(this.columns.records[g].text);
x+=e
}else{x+=e
}}if(this.vScrollBar.css("visibility")!="hidden"){x+=this.scrollbarsize+4
}A=x;
this.width=A
}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){F=this.height
}else{if(this.height!=undefined&&!isNaN(this.height)){F=this.height
}}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){F=this.height;
t=true
}var r=function(){var i=0;
var w=n.showheader?n.columnsheader!=null?n.columnsheader.height()+2:0:0;
i+=w;
if(n.pageable){i+=n.pagerheight
}if(n._groupsheader()){i+=n.groupsheaderheight
}if(n.showtoolbar){i+=n.toolbarheight
}if(n.showstatusbar){i+=n.statusbarheight
}if(n.hScrollBar[0].style.visibility=="visible"){i+=20
}return i
};
if(this.autoheight&&this.virtualsizeinfo){if(this.pageable&&this.gotopage){var h=0;
F=h+(this._pageviews[0]?this._pageviews[0].height:0);
F+=r();
if(this.showemptyrow&&this.dataview.totalrecords==0){F+=this.rowsheight
}}else{var h=this.host.height()-this._gettableheight();
if(this._pageviews.length>0){F=h+this._pageviews[this._pageviews.length-1].height+this._pageviews[this._pageviews.length-1].top;
this.vScrollBar[0].style.visibility="hidden"
}else{F=r();
if(this.showemptyrow){F+=this.rowsheight
}}}}else{if(this.autoheight){F=this.dataview.totalrecords*this.rowsheight;
if(this._loading){F=250;
this.dataloadelement.height(F)
}F+=r();
if(F>10000){F=10000
}}}if(A!=null){A=parseInt(A);
if(!u){if(this.element.style.width!=parseInt(this.width)+"px"){this.element.style.width=parseInt(this.width)+"px"
}}else{this.element.style.width=this.width
}if(u){A=this.host.width();
if(A<=2){A=600;
this.host.width(A)
}if(!this._oldWidth){this._oldWidth=A
}}}else{this.host.width(250)
}if(F!=null){if(!t){F=parseInt(F)
}if(!t){if(this.element.style.height!=parseInt(F)+"px"){this.element.style.height=parseInt(F)+"px"
}}else{this.element.style.height=this.height
}if(t&&!this.autoheight){F=this.host.height();
if(F==0){F=400;
this.host.height(F)
}if(!this._oldHeight){this._oldHeight=F
}}}else{this.host.height(250)
}if(this.autoheight){this.tableheight=null;
this._gettableheight()
}var E=0;
if(this.showtoolbar){this.toolbar.width(A);
this.toolbar.height(this.toolbarheight-1);
this.toolbar.css("top",0);
E+=this.toolbarheight;
F-=parseInt(this.toolbarheight)
}else{this.toolbar[0].style.height="0px"
}if(this.showstatusbar){if(this.showaggregates){this.statusbar.width(!this.table?A:Math.max(A,this.table.width()))
}else{this.statusbar.width(A)
}this.statusbar.height(this.statusbarheight)
}else{this.statusbar[0].style.height="0px"
}if(this._groupsheader()){this.groupsheader.width(A);
this.groupsheader.height(this.groupsheaderheight);
this.groupsheader.css("top",E);
var y=this.groupsheader.height()+1;
E+=y;
if(F>y){F-=parseInt(y)
}}else{if(this.groupsheader[0].style.width!=A+"px"){this.groupsheader[0].style.width=parseInt(A)+"px"
}this.groupsheader[0].style.height="0px";
if(this.groupsheader[0].style.top!=E+"px"){this.groupsheader.css("top",E)
}var y=this.showgroupsheader&&this.groupable?this.groupsheaderheight:0;
var m=E+y+"px";
if(this.content[0].style.top!=m){this.content.css("top",E+this.groupsheaderheight)
}}var d=this.scrollbarsize;
if(isNaN(d)){d=parseInt(d);
if(isNaN(d)){d="17px"
}else{d=d+"px"
}}d=parseInt(d);
var s=4;
var p=2;
var j=0;
if(this.vScrollBar[0].style.visibility=="visible"){j=d+s
}if(this.hScrollBar[0].style.visibility=="visible"){p=d+s+2
}var z=0;
if(this.pageable){z=this.pagerheight;
p+=this.pagerheight
}if(this.showstatusbar){p+=this.statusbarheight;
z+=this.statusbarheight
}if(this.hScrollBar[0].style.height!=d+"px"){this.hScrollBar[0].style.height=parseInt(d)+"px"
}if(this.hScrollBar[0].style.top!=E+F-s-d-z+"px"||this.hScrollBar[0].style.left!="0px"){this.hScrollBar.css({top:E+F-s-d-z+"px",left:"0px"})
}var q=this.hScrollBar[0].style.width;
var l=false;
var B=false;
if(j==0){if(q!=(A-2)+"px"){this.hScrollBar.width(A-2);
l=true
}}else{if(q!=(A-d-s)+"px"){this.hScrollBar.width(A-d-s+"px");
l=true
}}if(!this.autoheight){if(this.vScrollBar[0].style.width!=d+"px"){this.vScrollBar.width(d);
B=true
}if(this.vScrollBar[0].style.height!=parseInt(F)-p+"px"){this.vScrollBar.height(parseInt(F)-p+"px");
B=true
}if(this.vScrollBar[0].style.left!=parseInt(A)-parseInt(d)-s+"px"||this.vScrollBar[0].style.top!=E+"px"){this.vScrollBar.css({left:parseInt(A)-parseInt(d)-s+"px",top:E})
}}if(this.rtl){this.vScrollBar.css({left:"0px",top:E});
if(this.vScrollBar.css("visibility")!="hidden"){this.hScrollBar.css({left:d+2})
}}var v=this.vScrollInstance;
v.disabled=this.disabled;
if(!this.autoheight){if(B){v.refresh()
}}var f=this.hScrollInstance;
f.disabled=this.disabled;
if(l){f.refresh()
}if(this.autowidth){this.hScrollBar[0].style.visibility="hidden"
}this.statusbarheight=parseInt(this.statusbarheight);
this.toolbarheight=parseInt(this.toolbarheight);
var C=function(i){if((i.vScrollBar[0].style.visibility=="visible")&&(i.hScrollBar[0].style.visibility=="visible")){i.bottomRight[0].style.visibility="visible";
i.bottomRight.css({left:1+parseInt(i.vScrollBar.css("left")),top:parseInt(i.hScrollBar.css("top"))});
if(i.rtl){i.bottomRight.css("left","0px")
}i.bottomRight.width(parseInt(d)+3);
i.bottomRight.height(parseInt(d)+4);
if(i.showaggregates){i.bottomRight.css("z-index",99);
i.bottomRight.height(parseInt(d)+4+i.statusbarheight);
i.bottomRight.css({top:parseInt(i.hScrollBar.css("top"))-i.statusbarheight})
}}else{i.bottomRight[0].style.visibility="hidden"
}};
C(this);
if(this.content[0].style.width!=A-j+"px"){this.content.width(A-j)
}if(this.content[0].style.height!=F-p+3+"px"){this.content.height(F-p+3)
}if(this.content[0].style.top!=E+"px"){this.content.css("top",E)
}if(this.rtl){this.content.css("left",j);
if(this.table){var D=this.table.width();
if(D<A-j){this.content.css("left",A-D)
}}}if(this.showstatusbar){this.statusbar.css("top",E+F-this.statusbarheight-(this.pageable?this.pagerheight:0));
if(this.showaggregates){if(this.hScrollBar.css("visibility")=="visible"){this.hScrollBar.css({top:E+F-s-d-z+this.statusbarheight+"px"});
this.statusbar.css("top",1+E+F-d-5-this.statusbarheight-(this.pageable?this.pagerheight:0))
}C(this)
}if(this.rtl){if(this.hScrollBar.css("visibility")!="visible"){this.statusbar.css("left",this.content.css("left"))
}else{this.statusbar.css("left","0px")
}}}if(this.pageable){this.pager.width(A);
this.pager.height(this.pagerheight);
this.pager.css("top",E+F-this.pagerheight-1)
}else{this.pager[0].style.height="0px"
}if(this.table!=null){var o=-2;
if(this.vScrollBar[0].style.visibility=="visible"){o=this.scrollbarsize+3
}if(this.hScrollBar[0].style.visibility=="visible"){var k=o+this.table.width()-this.host.width();
if(k>=0){this.hScrollBar.jqxScrollBar("max",k)
}if(this.hScrollBar[0].style.visibility=="visible"&&k==0){this.hScrollBar[0].style.visibility="hidden";
this._arrange()
}}}if(A!=parseInt(this.dataloadelement[0].style.width)){this.dataloadelement[0].style.width=this.element.style.width
}if(F!=parseInt(this.dataloadelement[0].style.height)){this.dataloadelement[0].style.height=this.element.style.height
}this._hostwidth=A
},destroy:function(){delete b.jqx.dataFormat.datescache;
delete this.gridlocalization;
b.jqx.utilities.resize(this.host,null,true);
if(this.table&&this.table[0]){var m=this.table[0].rows.length;
for(var k=0;
k<m;
k++){var q=this.table[0].rows[k];
var p=q.cells;
var f=p.length;
for(var h=0;
h<f;
h++){b(q.cells[h]).remove();
q.cells[h]=null;
delete q.cells[h]
}q.cells=null;
if(q.cells){delete q.cells
}b(this.table[0].rows[k]).remove();
this.table[0].rows[k]=null
}try{delete this.table[0].rows
}catch(n){}this.table.remove();
delete this.table
}if(this.columns&&this.columns.records){for(var k=0;
k<this.columns.records.length;
k++){var e=this.columns.records[k];
this._removecolumnhandlers(this.columns.records[k]);
if(e.element){b(e.element).remove();
b(e.sortasc).remove();
b(e.sortdesc).remove();
b(e.filtericon).remove();
b(e.menu).remove();
e.element=null;
e.uielement=null;
e.sortasc=null;
e.sortdesc=null;
e.filtericon=null;
e.menu=null;
delete e.element;
delete e.uielement;
delete e.sortasc;
delete e.sortdesc;
delete e.filtericon;
delete e.menu;
delete this.columnsrow[0].cells[k]
}}try{delete this.columnsrow[0].cells
}catch(n){}delete this.columnsrow
}jQuery.removeData(document.body,"contextmenu"+this.element.id);
if(this.host.jqxDropDownList){if(this._destroyfilterpanel){this._destroyfilterpanel()
}}if(this.editable&&this._destroyeditors){this._destroyeditors()
}if(this.filterable&&this._destroyedfilters&&this.showfilterrow){this._destroyedfilters()
}if(this.host.jqxMenu){if(this.gridmenu){this.removeHandler(b(document),"click.menu"+this.element.id);
this.removeHandler(this.gridmenu,"keydown");
this.removeHandler(this.gridmenu,"closed");
this.removeHandler(this.gridmenu,"itemclick");
this.gridmenu.jqxMenu("destroy");
this.gridmenu=null
}}if(this.pagershowrowscombo){this.pagershowrowscombo.jqxDropDownList("destroy");
this.pagershowrowscombo=null
}if(this.pagerrightbutton){this.removeHandler(this.pagerrightbutton,"mousedown");
this.removeHandler(this.pagerrightbutton,"mouseup");
this.removeHandler(this.pagerrightbutton,"click");
this.pagerrightbutton.jqxButton("destroy");
this.pagerrightbutton=null
}if(this.pagerleftbutton){this.removeHandler(this.pagerleftbutton,"mousedown");
this.removeHandler(this.pagerleftbutton,"mouseup");
this.removeHandler(this.pagerleftbutton,"click");
this.pagerleftbutton.jqxButton("destroy");
this.removeHandler(b(document),"mouseup.pagerbuttons"+this.element.id);
this.pagerleftbutton=null
}this.removeHandler(b(document),"selectstart."+this.element.id);
this.removeHandler(b(document),"mousedown.resize"+this.element.id);
this.removeHandler(b(document),"mouseup.resize"+this.element.id);
this.removeHandler(b(document),"mousemove.resize"+this.element.id);
if(this.isTouchDevice()){var l=b.jqx.mobile.getTouchEventName("touchmove")+".resize"+this.element.id;
var d=b.jqx.mobile.getTouchEventName("touchstart")+".resize"+this.element.id;
var g=b.jqx.mobile.getTouchEventName("touchend")+".resize"+this.element.id;
this.removeHandler(b(document),l);
this.removeHandler(b(document),d);
this.removeHandler(b(document),g)
}this.removeHandler(b(document),"mousedown.reorder"+this.element.id);
this.removeHandler(b(document),"mouseup.reorder"+this.element.id);
this.removeHandler(b(document),"mousemove.reorder"+this.element.id);
if(this.isTouchDevice()){var l=b.jqx.mobile.getTouchEventName("touchmove")+".reorder"+this.element.id;
var d=b.jqx.mobile.getTouchEventName("touchstart")+".reorder"+this.element.id;
var g=b.jqx.mobile.getTouchEventName("touchend")+".reorder"+this.element.id;
this.removeHandler(b(document),l);
this.removeHandler(b(document),d);
this.removeHandler(b(document),g)
}this.removeHandler(b(window),"resize."+this.element.id);
if(this.groupable){var l="mousemove.grouping"+this.element.id;
var d="mousedown.grouping"+this.element.id;
var g="mouseup.grouping"+this.element.id;
this.removeHandler(b(document),l);
this.removeHandler(b(document),d);
this.removeHandler(b(document),g)
}if(this.columnsreorder){var l="mousemove.reorder"+this.element.id;
var d="mousedown.reorder"+this.element.id;
var g="mouseup.reorder"+this.element.id;
this.removeHandler(b(document),l);
this.removeHandler(b(document),d);
this.removeHandler(b(document),g);
delete this.columnsbounds
}if(this.content){this.removeHandler(this.content,"mousedown");
this.removeHandler(this.content,"scroll")
}this._removeHandlers();
this.hScrollInstance.destroy();
this.vScrollInstance.destroy();
this.hScrollBar.remove();
this.vScrollBar.remove();
this._clearcaches();
delete this.hScrollInstance;
delete this.vScrollInstance;
delete this.visiblerows;
delete this.hittestinfo;
delete this.rows;
delete this.columns;
delete this.columnsbydatafield;
delete this.pagescache;
delete this.pageviews;
delete this.cellscache;
delete this.heights;
delete this.hiddens;
delete this.hiddenboundrows;
delete this.heightboundrows;
delete this.detailboundrows;
delete this.details;
delete this.expandedgroups;
delete this._rowdetailscache;
delete this._rowdetailselementscache;
delete this.columnsmenu;
this.columnsheader.remove();
delete this.columnsheader;
this.selectionarea.remove();
delete this.selectionarea;
if(this.menuitemsarray&&this.menuitemsarray.length){var o=this.menuitemsarray.length;
for(var k=0;
k<o;
k++){b(this.menuitemsarray[k]).remove()
}}delete this.menuitemsarray;
this.dataview._clearcaches();
this.content.removeClass();
this.content.remove();
this.content=null;
delete this.content;
this.vScrollBar=null;
this.hScrollBar=null;
delete this.hScrollBar;
delete this.hScrollBar;
this.gridcontent.remove();
delete this.gridcontent;
if(this.gridmenu){this.gridmenu=null;
delete this.gridmenu
}delete this._mousemovefunc;
delete this._mousewheelfunc;
this.dataview.destroy();
delete this.dataview;
this.bottomRight.remove();
delete this.bottomRight;
this.wrapper.remove();
delete this.wrapper;
if(this.pagerdiv){this.pagerdiv.remove();
delete this.pagerdiv
}if(this.pagerpageinput){this.pagerpageinput.remove();
delete this.pagerpageinput
}if(this.pagergoto){this.pagergoto.remove();
delete this.pagergoto
}if(this.pagershowrows){this.pagershowrows.remove();
delete this.pagershowrows
}if(this.pagerfirstbutton){this.pagerfirstbutton.remove();
delete this.pagerfirstbutton
}if(this.pagerlastbutton){this.pagerlastbutton.remove();
delete this.pagerlastbutton
}if(this.pagerbuttons){this.pagerbuttons.remove();
delete this.pagerbuttons
}if(this.pagerdetails){this.pagerdetails.remove();
delete this.pagerdetails
}if(this.pagergotoinput){this.pagergotoinput.remove();
delete this.pagergotoinput
}this.pager.remove();
delete this.pager;
this.groupsheader.remove();
delete this.groupsheader;
this.dataloadelement.remove();
delete this.dataloadelement;
this.toolbar.remove();
delete this.toolbar;
this.statusbar.remove();
delete this.statusbar;
this.host.removeData();
this.host.removeClass();
this.host.remove();
this.host=null;
delete this.host;
delete this.element;
delete this.set;
delete this.get;
delete this.that;
delete this.call
},_initializeColumns:function(){var f=this.source?this.source.datafields:null;
if(f==null&&this.source&&this.source._source){f=this.source._source.datafields
}var j=f?f.length>0:false;
if(this.autogeneratecolumns){var l=new Array();
if(f){b.each(f,function(){var i={datafield:this.name,text:this.text||this.name,cellsformat:this.format||""};
l.push(i)
})
}else{if(this.source.records.length>0){var n=this.source.records[0];
for(obj in n){if(obj!="uid"){var g={width:100,datafield:obj,text:obj};
l.push(g)
}}}}this.columns=l
}if(this.columns&&this.columns.records){for(var h=0;
h<this.columns.records.length;
h++){this._removecolumnhandlers(this.columns.records[h])
}}var k=this.that;
var e=new b.jqx.collection(this.element);
var d=0;
this._haspinned=false;
if(!this._columns){this._columns=this.columns
}else{this.columns=this._columns
}if(this.groupable){b.each(this.groups,function(i){var o=new c(k,this);
o.visibleindex=d++;
o.width=k.groupindentwidth;
e.add(o);
o.grouped=true;
o.filterable=false;
o.sortable=false;
o.editable=false;
o.resizable=false;
o.draggable=false
})
}if(this.rowdetails&&this.showrowdetailscolumn){var g=new c(k,this);
g.visibleindex=d++;
g.width=k.groupindentwidth;
g.pinned=true;
g.editable=false;
g.filterable=false;
g.draggable=false;
g.groupable=false;
g.resizable=false;
e.add(g);
k._haspinned=true
}if(this.selectionmode=="checkbox"){var g=new c(k,null);
g.visibleindex=d++;
g.width=k.groupindentwidth;
g.checkboxcolumn=true;
g.editable=false;
g.columntype="checkbox";
g.groupable=false;
g.draggable=false;
g.filterable=false;
g.resizable=false;
g.datafield="_checkboxcolumn";
e.add(g)
}var m=new Array();
b.each(this.columns,function(i){if(k.columns[i]!=undefined){var o=new c(k,this);
o.visibleindex=d++;
if(this.dataField!=undefined){this.datafield=this.dataField
}if(this.pinned){k._haspinned=true
}if(this.datafield==null){if(k.source&&k.source._source&&(k.source._source.datatype=="array")){if(!j){if(!k.source._source.datafields){k.source._source.datafields=new Array();
k.source._source.datafields.push({name:i.toString()})
}else{k.source._source.datafields.push({name:i.toString()})
}}this.datafield=i.toString();
this.displayfield=i.toString();
o.datafield=this.datafield;
o.displayfield=this.displayfield
}}else{if(m[this.datafield]){throw new Error("jqxGrid: Invalid column 'datafield' setting. jqxGrid's columns should be initialized with unique data fields.");
k.host.remove();
return false
}else{m[this.datafield]=true
}}e.add(o)
}});
if(this.rtl){e.records.reverse()
}this.columns=e
},_initializeRows:function(){var d=new b.jqx.collection(this.element);
if(this.rows){this.rows.clear()
}this.rows=d
},_raiseEvent:function(h,e){if(e==undefined){e={owner:null}
}if(this._trigger===false){return
}var f=this.events[h];
if(!this._camelCase){f=f.toLowerCase()
}args=e;
args.owner=this;
var g=new jQuery.Event(f);
g.owner=this;
g.args=args;
var d=this.host.trigger(g);
e=g.args;
return d
},wheel:function(f,e){if(e.autoheight&&e.hScrollBar.css("visibility")!="visible"){f.returnValue=true;
return true
}var g=0;
if(!f){f=window.event
}if(f.originalEvent&&f.originalEvent.wheelDelta){f.wheelDelta=f.originalEvent.wheelDelta
}if(f.wheelDelta){g=f.wheelDelta/120
}else{if(f.detail){g=-f.detail/3
}}if(g){var d=e._handleDelta(g);
if(d){if(f.preventDefault){f.preventDefault()
}if(f.originalEvent!=null){f.originalEvent.mouseHandled=true
}if(f.stopPropagation!=undefined){f.stopPropagation()
}}if(d){d=false;
f.returnValue=d;
return d
}else{return false
}}if(f.preventDefault){f.preventDefault()
}f.returnValue=false
},_handleDelta:function(f){if(this.vScrollBar.css("visibility")!="hidden"){var e=this.vScrollInstance.value;
if(f<0){this.scrollDown()
}else{this.scrollUp()
}var d=this.vScrollInstance.value;
if(e!=d){return true
}}else{if(this.hScrollBar.css("visibility")!="hidden"){var e=this.hScrollInstance.value;
if(f>0){if(this.hScrollInstance.value>2*this.horizontalscrollbarstep){this.hScrollInstance.setPosition(this.hScrollInstance.value-2*this.horizontalscrollbarstep)
}else{this.hScrollInstance.setPosition(0)
}}else{if(this.hScrollInstance.value<this.hScrollInstance.max){this.hScrollInstance.setPosition(this.hScrollInstance.value+2*this.horizontalscrollbarstep)
}else{this.hScrollInstance.setPosition(this.hScrollInstance.max)
}}var d=this.hScrollInstance.value;
if(e!=d){return true
}}}return false
},scrollDown:function(){if(this.vScrollBar.css("visibility")=="hidden"){return
}var d=this.vScrollInstance;
if(d.value+this.rowsheight<=d.max){d.setPosition(parseInt(d.value)+this.rowsheight)
}else{d.setPosition(d.max)
}},scrollUp:function(){if(this.vScrollBar.css("visibility")=="hidden"){return
}var d=this.vScrollInstance;
if(d.value-this.rowsheight>=d.min){d.setPosition(parseInt(d.value)-this.rowsheight)
}else{d.setPosition(d.min)
}},_removeHandlers:function(){var d=this.that;
this.removeHandler(this.vScrollBar,"valuechanged");
this.removeHandler(this.hScrollBar,"valuechanged");
this.vScrollInstance.valuechanged=null;
this.hScrollInstance.valuechanged=null;
var e="mousedown.jqxgrid";
if(this.isTouchDevice()){e=b.jqx.mobile.getTouchEventName("touchend")
}this.removeHandler(this.host,"dblclick.jqxgrid");
this.removeHandler(this.host,e);
this.removeHandler(this.content,"mousemove",this._mousemovefunc);
this.removeHandler(this.host,"mouseleave.jqxgrid");
this.removeHandler(this.content,"mouseenter");
this.removeHandler(this.content,"mouseleave");
this.removeHandler(this.content,"mousedown");
this.removeHandler(this.content,"scroll");
this.removeHandler(this.content,"selectstart."+this.element.id);
this.removeHandler(this.host,"dragstart."+this.element.id);
this.removeHandler(this.host,"keydown.edit"+this.element.id);
this.removeHandler(b(document),"keydown.edit"+this.element.id);
this.removeHandler(b(document),"keyup.edit"+this.element.id);
if(this._mousemovedocumentfunc){this.removeHandler(b(document),"mousemove.selection"+this.element.id,this._mousemovedocumentfunc)
}this.removeHandler(b(document),"mouseup.selection"+this.element.id);
if(this._mousewheelfunc){this.removeHandler(this.host,"mousewheel",this._mousewheelfunc)
}if(this.editable){this.removeHandler(b(document),"mousedown.gridedit"+this.element.id)
}if(this.host.off){this.content.off("mousemove");
this.host.off("mousewheel")
}},_addHandlers:function(){var e=this.that;
var d=e.isTouchDevice();
if(!d){this.addHandler(this.host,"dragstart."+this.element.id,function(j){return false
})
}if(this.editable){this.addHandler(b(document),"mousedown.gridedit"+this.element.id,function(m){if(e.editable&&e.begincelledit){if(e.editcell){if(!e.vScrollInstance.isScrolling()&&!e.vScrollInstance.isScrolling()){var k=e.host.coord();
var v=e.host.width();
var t=e.host.height();
var n=false;
var q=false;
var l=false;
if(m.pageY<k.top||m.pageY>k.top+t){n=true;
q=true
}if(m.pageX<k.left||m.pageX>k.left+v){n=true;
l=true
}if(n){var u=false;
if(e.editcell&&e.editcell.editor){switch(e.editcell.columntype){case"datetimeinput":if(e.editcell.editor.jqxDateTimeInput&&e.editcell.editor.jqxDateTimeInput("container")&&e.editcell.editor.jqxDateTimeInput("container")[0].style.display=="block"){var s=e.editcell.editor.jqxDateTimeInput("container").coord().top;
var j=e.editcell.editor.jqxDateTimeInput("container").coord().top+e.editcell.editor.jqxDateTimeInput("container").height();
if(q&&(m.pageY<s||m.pageY>j)){n=true;
e.editcell.editor.jqxDateTimeInput("close")
}else{return
}}break;
case"combobox":if(e.editcell.editor.jqxComboBox&&e.editcell.editor.jqxComboBox("container")&&e.editcell.editor.jqxComboBox("container")[0].style.display=="block"){var s=e.editcell.editor.jqxComboBox("container").coord().top;
var j=e.editcell.editor.jqxComboBox("container").coord().top+e.editcell.editor.jqxComboBox("container").height();
if(q&&(m.pageY<s||m.pageY>j)){n=true;
e.editcell.editor.jqxComboBox("close")
}else{return
}}break;
case"dropdownlist":if(e.editcell.editor.jqxDropDownList&&e.editcell.editor.jqxDropDownList("container")&&e.editcell.editor.jqxDropDownList("container")[0].style.display=="block"){var s=e.editcell.editor.jqxDropDownList("container").coord().top;
var j=e.editcell.editor.jqxDropDownList("container").coord().top+e.editcell.editor.jqxDropDownList("container").height();
if(q&&(m.pageY<s||m.pageY>j)){n=true;
e.editcell.editor.jqxDropDownList("close")
}else{return
}}break;
case"template":case"custom":var r=["jqxDropDownList","jqxComboBox","jqxDropDownButton","jqxDateTimeInput"];
var p=function(A){var z=e.editcell.editor.data();
if(z[A]&&z[A].instance.container&&z[A].instance.container[0].style.display=="block"){var x=z[A].instance;
var B=x.container.coord().top;
var y=x.container.coord().top+x.container.height();
if(q&&(m.pageY<B||m.pageY>y)){n=true;
x.close();
return true
}else{return false
}}};
for(var o=0;
o<r.length;
o++){var w=p(r[o]);
if(w==false){return
}}break
}}e.endcelledit(e.editcell.row,e.editcell.column,false,true);
e._oldselectedcell=null
}}}}})
}this.vScrollInstance.valuechanged=function(j){if(e.virtualsizeinfo){e._closemenu();
if(e.scrollmode!="physical"){e._renderrows(e.virtualsizeinfo);
e.currentScrollValue=j.currentValue
}else{if(e.currentScrollValue!=undefined&&Math.abs(e.currentScrollValue-j.currentValue)>=5){e._renderrows(e.virtualsizeinfo);
e.currentScrollValue=j.currentValue
}else{e._renderrows(e.virtualsizeinfo);
e.currentScrollValue=j.currentValue
}}if(!e.pageable&&!e.groupable&&e.dataview.virtualmode){if(e.loadondemandupdate){clearTimeout(e.loadondemandupdate)
}e.loadondemandupdate=setTimeout(function(){e.loadondemand=true;
e._renderrows(e.virtualsizeinfo)
},100)
}if(d){e._lastScroll=new Date()
}}};
this.hScrollInstance.valuechanged=function(l){if(e.virtualsizeinfo){e._closemenu();
var k=function(){e._renderhorizontalscroll();
e._renderrows(e.virtualsizeinfo);
if(e.editcell&&!e.editrow){if(e._showcelleditor&&e.editcell.editing){if(!e.hScrollInstance.isScrolling()){e._showcelleditor(e.editcell.row,e.getcolumn(e.editcell.column),e.editcell.element,e.editcell.init)
}}}};
var j=e._browser==undefined?e._isIE10():e._browser;
if(navigator&&navigator.userAgent.indexOf("Safari")!=-1){if(e._hScrollTimer){clearTimeout(e._hScrollTimer)
}e._hScrollTimer=setTimeout(function(){k()
},1)
}else{if(b.jqx.browser.msie){if(e._hScrollTimer){clearTimeout(e._hScrollTimer)
}e._hScrollTimer=setTimeout(function(){k()
},0.01)
}else{k()
}}if(d){e._lastScroll=new Date()
}}};
this._mousewheelfunc=this._mousewheelfunc||function(j){if(!e.editcell&&e.enablemousewheel){e.wheel(j,e);
return false
}};
this.removeHandler(this.host,"mousewheel",this._mousewheelfunc);
this.addHandler(this.host,"mousewheel",this._mousewheelfunc);
var h="mousedown.jqxgrid";
if(d){h=b.jqx.mobile.getTouchEventName("touchend")
}this.addHandler(this.host,h,function(k){if(e.isTouchDevice()){e._newScroll=new Date();
if(e._newScroll-e._lastScroll<500){return false
}if(b(k.target).ischildof(e.vScrollBar)){return false
}if(b(k.target).ischildof(e.hScrollBar)){return false
}}e._mousedown=new Date();
var j=e._handlemousedown(k,e);
if(e.isNestedGrid){if(!e.resizablecolumn&&!e.columnsreorder){k.stopPropagation()
}}e._lastmousedown=new Date();
return j
});
if(!d){this.addHandler(this.host,"dblclick.jqxgrid",function(k){if(e.editable&&e.begincelledit&&e.editmode=="dblclick"){e._handledblclick(k,e)
}else{if(b.jqx.browser.msie&&b.jqx.browser.version<9){var j=e._handlemousedown(k,e)
}}e.mousecaptured=false;
e._lastmousedown=new Date();
return true
});
this._mousemovefunc=function(j){if(e._handlemousemove){return e._handlemousemove(j,e)
}};
this.addHandler(this.content,"mousemove",this._mousemovefunc);
if(e._handlemousemoveselection){this._mousemovedocumentfunc=function(j){if(e._handlemousemoveselection){return e._handlemousemoveselection(j,e)
}};
this.addHandler(b(document),"mousemove.selection"+this.element.id,this._mousemovedocumentfunc)
}this.addHandler(b(document),"mouseup.selection"+this.element.id,function(j){if(e._handlemouseupselection){e._handlemouseupselection(j,e)
}})
}try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var i=null;
if(window.parent&&document.referrer){i=document.referrer
}if(i&&i.indexOf(document.location.host)!=-1){var g=function(j){if(e._handlemouseupselection){e._handlemouseupselection(j,e)
}};
if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g,false)
}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g)
}}}}}}catch(f){}this.focused=false;
if(!d){this.addHandler(this.content,"mouseenter",function(j){e.focused=true;
if(e.wrapper){e.wrapper.attr("tabindex",1);
e.content.attr("tabindex",2)
}if(e._overlayElement){if(e.vScrollInstance.isScrolling()||e.hScrollInstance.isScrolling()){e._overlayElement[0].style.visibility="visible"
}else{e._overlayElement[0].style.visibility="hidden"
}}});
this.addHandler(this.content,"mouseleave",function(j){if(e._handlemousemove){if(e.enablehover){e._clearhoverstyle()
}}if(e._overlayElement){e._overlayElement[0].style.visibility="hidden"
}e.focused=false
});
if(this.groupable||this.columnsreorder){this.addHandler(b(document),"selectstart."+this.element.id,function(j){if(e.__drag===true){return false
}})
}this.addHandler(this.content,"selectstart."+this.element.id,function(j){if(e.enablebrowserselection){return true
}if(e.showfilterrow){if(b(j.target).ischildof(e.filterrow)){return true
}}if(!e.editcell){return false
}if(j.stopPropagation){j.stopPropagation()
}});
this.addHandler(b(document),"keyup.edit"+this.element.id,function(j){e._keydown=false
});
this.addHandler(b(document),"keydown.edit"+this.element.id,function(l){e._keydown=true&&!e.editcell;
var k=l.charCode?l.charCode:l.keyCode?l.keyCode:0;
if(e.handlekeyboardnavigation){var m=e.handlekeyboardnavigation(l);
if(m==true){return false
}}if(e.editable&&e.editcell){if(k==13||k==27){if(e._handleeditkeydown){j=e._handleeditkeydown(l,e)
}}}if(k==27){e.mousecaptured=false;
if(e.selectionarea.css("visibility")=="visible"){e.selectionarea.css("visibility","hidden")
}}if(b.jqx.browser.msie&&b.jqx.browser.version<8&&e.focused&&!e.isNestedGrid){if(k==13&&j==false){return j
}var j=true;
var k=l.charCode?l.charCode:l.keyCode?l.keyCode:0;
if(!e.editcell&&e.editable&&e.editmode!="programmatic"){if(e._handleeditkeydown){j=e._handleeditkeydown(l,e)
}}if(j&&e.keyboardnavigation&&e._handlekeydown){j=e._handlekeydown(l,e);
if(!j){if(l.preventDefault){l.preventDefault()
}if(l.stopPropagation!=undefined){l.stopPropagation()
}}return j
}}return true
});
this.addHandler(this.host,"keydown.edit"+this.element.id,function(k){var j=true;
if(e.handlekeyboardnavigation){var l=e.handlekeyboardnavigation(k);
if(l==true){return false
}}if(e.editable&&e.editmode!="programmatic"){if(e._handleeditkeydown){j=e._handleeditkeydown(k,e);
if(e.isNestedGrid){k.stopPropagation()
}}}if(!(b.jqx.browser.msie&&b.jqx.browser.version<8)){if(j&&e.keyboardnavigation&&e._handlekeydown){j=e._handlekeydown(k,e);
if(e.isNestedGrid){k.stopPropagation()
}}}else{if(e.isNestedGrid){if(j&&e.keyboardnavigation&&e._handlekeydown){j=e._handlekeydown(k,e);
k.stopPropagation()
}}}if(!j){if(k.preventDefault){k.preventDefault()
}if(k.stopPropagation!=undefined){k.stopPropagation()
}}return j
})
}},_hittestrow:function(g,r){if(this.vScrollInstance==null||this.hScrollInstance==null){return
}if(g==undefined){g=0
}if(r==undefined){r==0
}var m=this.vScrollInstance;
var l=this.hScrollInstance;
var f=m.value;
if(this.vScrollBar.css("visibility")!="visible"){f=0
}var o=l.value;
if(this.hScrollBar.css("visibility")!="visible"){o=0
}if(this.scrollmode=="deferred"&&this._newmax!=null){if(f>this._newmax){f=this._newmax
}}var s=parseInt(f)+r;
var k=parseInt(o)+g;
if(this.visiblerows==null){return
}if(this.visiblerows.length==0){return
}var e=false;
var j=this._findvisiblerow(s,this.visiblerows);
if(j>=0){var p=this.visiblerows[j];
var d=this.rowdetails&&p.rowdetails;
var n=!p.rowdetailshidden;
if(d){var i=this.visiblerows[j-1];
if(i==p){p=i;
j--
}if(n){var h=b(this.hittestinfo[j].visualrow).position().top+parseInt(this.table.css("top"));
var q=b(this.hittestinfo[j].visualrow).height();
if(!(r>=h&&r<=h+q)){j++;
p=this.visiblerows[j];
e=true
}}}}return{index:j,row:p,details:e}
},getcellatposition:function(j,w){var z=this.that;
var p=this.showheader?this.columnsheader.height()+2:0;
var A=this._groupsheader()?this.groupsheader.height():0;
var B=this.showtoolbar?this.toolbarheight:0;
A+=B;
var g=this.host.coord();
if(this.hasTransform){g=b.jqx.utilities.getOffset(this.host)
}var v=j-g.left;
var t=w-p-g.top-A;
var r=this._hittestrow(v,t);
var k=r.row;
var l=r.index;
var d=this.table[0].rows[l];
if(this.dataview&&this.dataview.records.length==0){var u=this.table[0].rows;
var C=0;
for(var o=0;
o<u.length;
o++){if(t>=C&&t<C+this.rowsheight){d=u[o];
break
}C+=this.rowsheight
}k={boundindex:o}
}if(d==null){return true
}var m=this.hScrollInstance;
var n=m.value;
var f=0;
var s=this.groupable?this.groups.length:0;
for(var o=0;
o<d.cells.length;
o++){var h=parseInt(b(this.columnsrow[0].cells[o]).css("left"));
var j=h-n;
if(z.columns.records[o].pinned){j=h
}var q=j+b(this.columnsrow[0].cells[o]).width();
if(q>=v&&v>=j){f=o;
break
}}if(k!=null){var e=this._getcolumnat(f);
return{row:this.getboundindex(k),column:e.datafield,value:this.getcellvalue(this.getboundindex(k),e.datafield)}
}return null
},_handlemousedown:function(P,l){if(P.target==null){return true
}if(l.disabled){return true
}if(b(P.target).ischildof(this.columnsheader)){return true
}var m;
if(P.which){m=(P.which==3)
}else{if(P.button){m=(P.button==2)
}}var I;
if(P.which){I=(P.which==2)
}else{if(P.button){I=(P.button==1)
}}if(I){return true
}if(this.showstatusbar){if(b(P.target).ischildof(this.statusbar)){return true
}if(P.target==this.statusbar[0]){return true
}}if(this.showtoolbar){if(b(P.target).ischildof(this.toolbar)){return true
}if(P.target==this.toolbar[0]){return true
}}if(this.pageable){if(b(P.target).ischildof(this.pager)){return true
}if(P.target==this.pager[0]){return true
}}if(!this.columnsheader){return true
}if(!this.editcell){if(this.pageable){if(b(P.target).ischildof(this.pager)){return true
}}}var N=this.showheader?this.columnsheader.height()+2:0;
var A=this._groupsheader()?this.groupsheader.height():0;
var z=this.showtoolbar?this.toolbarheight:0;
A+=z;
var g=this.host.coord();
if(this.hasTransform){g=b.jqx.utilities.getOffset(this.host);
var R=this._getBodyOffset();
g.left-=R.left;
g.top-=R.top
}var u=parseInt(P.pageX);
var j=parseInt(P.pageY);
if(this.isTouchDevice()){var t=l.getTouches(P);
var q=t[0];
u=parseInt(q.pageX);
j=parseInt(q.pageY);
if(l.touchmode==true){u=parseInt(q._pageX);
j=parseInt(q._pageY)
}}var C=u-g.left;
var d=j-N-g.top-A;
if(this.pageable&&!this.autoheight&&this.gotopage){var O=this.pager.coord().top-g.top-A-N;
if(d>O){return
}}var M=this._hittestrow(C,d);
if(!M){return
}if(M.details){return
}var p=M.row;
var w=M.index;
var F=P.target.className;
var k=this.table[0].rows[w];
if(k==null){if(l.editable&&l.begincelledit){if(l.editcell){l.endcelledit(l.editcell.row,l.editcell.column,false,true)
}}return true
}l.mousecaptured=true;
l.mousecaptureposition={left:P.pageX,top:P.pageY-A,clickedrow:k};
var L=this.hScrollInstance;
var s=L.value;
if(this.rtl){if(this.hScrollBar.css("visibility")!="hidden"){s=L.max-L.value
}}var h=-1;
var v=this.groupable?this.groups.length:0;
if(this.rtl){if(this.vScrollBar[0].style.visibility!="hidden"){s-=this.scrollbarsize+4
}if(this.hScrollBar[0].style.visibility=="hidden"){s=-parseInt(this.content.css("left"))
}}for(var J=0;
J<k.cells.length;
J++){var Q=parseInt(b(this.columnsrow[0].cells[J]).css("left"));
var u=Q-s;
if(l.columns.records[J].pinned&&!l.rtl){u=Q
}var D=this._getcolumnat(J);
if(D!=null&&D.hidden){continue
}var E=u+b(this.columnsrow[0].cells[J]).width();
if(E>=C&&C>=u){h=J;
l.mousecaptureposition.clickedcell=J;
break
}}if(this.rtl&&this._haspinned){for(var J=k.cells.length-1;
J>=0;
J--){if(!l.columns.records[J].pinned){break
}var Q=b(this.columnsrow[0].cells[J]).coord().left-this.host.coord().left;
var u=Q;
var D=this._getcolumnat(J);
if(D!=null&&D.hidden){continue
}var E=u+b(this.columnsrow[0].cells[J]).width();
if(E>=C&&C>=u){h=J;
l.mousecaptureposition.clickedcell=J;
break
}}}if(p!=null&&h>=0){this._raiseEvent(1,{rowindex:this.getboundindex(p),visibleindex:p.visibleindex,group:p.group,rightclick:m,originalEvent:P});
var D=this._getcolumnat(h);
var H=this.getcellvalue(this.getboundindex(p),D.datafield);
if(this.editable&&this.editcell){if(D.datafield==this.editcell.column){if(this.getboundindex(p)==this.editcell.row){this.mousecaptured=false
}}}this._raiseEvent(8,{rowindex:this.getboundindex(p),column:D?D.getcolumnproperties():null,datafield:D?D.datafield:null,columnindex:h,value:H,rightclick:m,originalEvent:P});
if(this.isTouchDevice()){if(D.columntype=="checkbox"&&this.editable&&this._overlayElement){if(!this.editcell){this._overlayElement.css("visibility","hidden");
this.editcell=this.getcell(w,D.datafield);
return true
}}else{if(D.columntype=="button"&&this._overlayElement){if(D.buttonclick){D.buttonclick(k.cells[h].buttonrow,P)
}return true
}}}var f=false;
if(this._lastmousedown!=null){if(this._mousedown-this._lastmousedown<300){if(this._clickedrowindex==this.getboundindex(p)){this._raiseEvent(22,{rowindex:this.getboundindex(p),visibleindex:p.visibleindex,group:p.group,rightclick:m,originalEvent:P});
if(this._clickedcolumn==D.datafield){this._raiseEvent(23,{rowindex:this.getboundindex(p),column:D?D.getcolumnproperties():null,datafield:D?D.datafield:null,columnindex:h,value:H,rightclick:m,originalEvent:P})
}f=true;
this._clickedrowindex=-1;
this._clickedcolumn=null;
if(P.isPropagationStopped&&P.isPropagationStopped()){return false
}}}}if(m){return true
}if(!f){this._clickedrowindex=this.getboundindex(p);
this._clickedcolumn=D.datafield
}var e=b.jqx.utilities.getBrowser();
if(e.browser=="msie"&&parseInt(e.version)<=7){if(h==0&&this.rowdetails){F="jqx-grid-group-collapse"
}if(v>0){if(h<=v){F="jqx-grid-group-collapse"
}}}if(F.indexOf("jqx-grid-group-expand")!=-1||F.indexOf("jqx-grid-group-collapse")!=-1){if(!this.rtl){if(v>0&&h<v&&this._togglegroupstate){this._togglegroupstate(p.bounddata,true)
}else{if(h==v&&this.rowdetails&&this.showrowdetailscolumn){this._togglerowdetails(p.bounddata,true);
this.gridcontent[0].scrollTop=0;
this.gridcontent[0].scrollLeft=0
}}}else{if(v>0&&h>k.cells.length-v-1&&this._togglegroupstate){this._togglegroupstate(p.bounddata,true)
}else{if(h==k.cells.length-1-v&&this.rowdetails&&this.showrowdetailscolumn){this._togglerowdetails(p.bounddata,true);
this.gridcontent[0].scrollTop=0;
this.gridcontent[0].scrollLeft=0
}}}}else{if(p.boundindex!=-1){var n=this.selectedrowindexes.slice(0);
var B=false;
if(l.selectionmode!="none"&&l.selectionmode!="checkbox"&&this._selectrowwithmouse){if(l.selectionmode=="multiplecellsadvanced"||l.selectionmode=="multiplecellsextended"||l.selectionmode=="multiplerowsextended"||l.selectionmode=="multiplerowsadvanced"){if(!P.ctrlKey&&!P.shiftKey){l.selectedrowindexes=new Array();
l.selectedcells=new Array()
}}var K=false;
var o=this.getboundindex(p);
if(l._oldselectedrow===o||l.selectionmode==="none"){K=true
}if(l.selectionmode.indexOf("cell")==-1){if((l.selectionmode!="singlerow")||(l.selectedrowindex!=o&&l.selectionmode=="singlerow")){this._applyrowselection(o,true,false,null,D.datafield);
this._selectrowwithmouse(l,M,n,D.datafield,P.ctrlKey,P.shiftKey)
}}else{if(D.datafield!=null){this._selectrowwithmouse(l,M,n,D.datafield,P.ctrlKey,P.shiftKey);
if(!P.shiftKey){this._applycellselection(o,D.datafield,true,false)
}}}if(l._oldselectedcell){if(l._oldselectedcell.datafield==l.selectedcell.datafield&&l._oldselectedcell.rowindex==l.selectedcell.rowindex){B=true
}}l._oldselectedcell=l.selectedcell;
l._oldselectedrow=o
}if(l.autosavestate){if(l.savestate){l.savestate()
}}if(l.editable&&l.begincelledit&&l.editmode!="programmatic"){if(P.isPropagationStopped&&P.isPropagationStopped()){return false
}if(l.editmode=="selectedrow"){if(K&&!l.editcell){if(D.columntype!=="checkbox"){var r=l.beginrowedit(this.getboundindex(p))
}}else{if(l.editcell&&!K&&l.selectionmode!="none"){var r=l.endrowedit(l.editcell.row)
}}}else{var G=l.editmode=="click"||(B&&l.editmode=="selectedcell");
if(l.selectionmode.indexOf("cell")==-1){if(l.editmode!="dblclick"){G=true
}}if(G){if(p.boundindex!=undefined&&D.editable){var r=l.begincelledit(this.getboundindex(p),D.datafield,D.defaulteditorvalue);
if(l.selectionmode.indexOf("cell")!=-1){l._applycellselection(o,D.datafield,false,false)
}}}if(l.selectionmode.indexOf("cell")!=-1){if(l.editmode=="selectedcell"&&!B&&l.editcell){l.endcelledit(l.editcell.row,l.editcell.column,false,true)
}}}return true
}}}}return true
},_columnPropertyChanged:function(e,d,g,f){},_rowPropertyChanged:function(g,d,f,e){},_serializeObject:function(d){if(d==null){return""
}var e="";
b.each(d,function(g){var h=this;
if(g>0){e+=", "
}e+="[";
var f=0;
for(obj in h){if(f>0){e+=", "
}e+="{"+obj+":"+h[obj]+"}";
f++
}e+="]"
});
return e
},propertyChangedHandler:function(e,f,i,h){if(this.isInitialized==undefined||this.isInitialized==false){return
}f=f.toLowerCase();
switch(f){case"enablebrowserselection":if(!e.showfilterrow){if(!e.showstatusbar&&!e.showtoolbar){e.host.addClass("jqx-disableselect")
}e.content.addClass("jqx-disableselect")
}if(e.enablebrowserselection){e.content.removeClass("jqx-disableselect");
e.host.removeClass("jqx-disableselect")
}break;
case"columnsheight":if(e.columnsheight!=25||e.columngroups){e._measureElement("column")
}e._render(true,true,true,false,false);
break;
case"rowsheight":if(h!=i){if(e.rowsheight!=25){e._measureElement("cell")
}e.virtualsizeinfo=null;
e.rendergridcontent(true,false);
e.refresh()
}break;
case"scrollMode":e.vScrollInstance.thumbStep=e.rowsheight;
break;
case"showdefaultloadelement":e._builddataloadelement();
break;
case"showfiltermenuitems":case"showsortmenuitems":case"showgroupmenuitems":case"filtermode":e._initmenu();
break;
case"touchmode":if(i!=h){e._removeHandlers();
e.touchDevice=null;
e.vScrollBar.jqxScrollBar({touchMode:h});
e.hScrollBar.jqxScrollBar({touchMode:h});
e._updateTouchScrolling();
e._arrange();
e._updatecolumnwidths();
e._updatecellwidths();
e._addHandlers()
}break;
case"autoshowcolumnsmenubutton":if(i!=h){e._rendercolumnheaders()
}break;
case"rendergridrows":if(i!=h){e.updatebounddata()
}break;
case"editmode":if(i!=h){e._removeHandlers();
e._addHandlers()
}break;
case"source":e.updatebounddata();
if(e.virtualmode&&!e._loading){e.loadondemand=true;
e._renderrows(e.virtualsizeinfo)
}break;
case"horizontalscrollbarstep":case"verticalscrollbarstep":case"horizontalscrollbarlargestep":case"verticalscrollbarlargestep":this.vScrollBar.jqxScrollBar({step:this.verticalscrollbarstep,largestep:this.verticalscrollbarlargestep});
this.hScrollBar.jqxScrollBar({step:this.horizontalscrollbarstep,largestep:this.horizontalscrollbarlargestep});
break;
case"closeablegroups":if(e._initgroupsheader){e._initgroupsheader()
}break;
case"showgroupsheader":if(i!=h){e._arrange();
if(e._initgroupsheader){e._initgroupsheader()
}e._renderrows(e.virtualsizeinfo)
}break;
case"theme":if(h!=i){if(e.pager){e.pager.removeClass();
e.pager.addClass(e.toTP("jqx-grid-pager"));
e.pager.addClass(e.toTP("jqx-widget-header"));
if(e.pageable&&e._updatepagertheme){e._updatepagertheme()
}}if(e.groupsheader){e.groupsheader.removeClass();
e.groupsheader.addClass(e.toTP("jqx-grid-groups-header"));
e.groupsheader.addClass(e.toTP("jqx-widget-header"))
}e.toolbar.removeClass();
e.toolbar.addClass(e.toTP("jqx-grid-toolbar"));
e.toolbar.addClass(e.toTP("jqx-widget-header"));
e.statusbar.removeClass();
e.statusbar.addClass(e.toTP("jqx-grid-statusbar"));
e.statusbar.addClass(e.toTP("jqx-widget-content"));
e.vScrollBar.jqxScrollBar({theme:e.theme});
e.hScrollBar.jqxScrollBar({theme:e.theme});
e.host.removeClass();
e.host.addClass(e.toTP("jqx-grid"));
e.host.addClass(e.toTP("jqx-reset"));
e.host.addClass(e.toTP("jqx-rc-all"));
e.host.addClass(e.toTP("jqx-widget"));
e.host.addClass(e.toTP("jqx-widget-content"));
e.bottomRight.removeClass();
e.bottomRight.addClass(e.toTP("jqx-grid-bottomright"));
e.bottomRight.addClass(e.toTP("jqx-scrollbar-state-normal"));
e.toolbar.addClass(e.toTP("jqx-grid-toolbar"));
e.toolbar.addClass(e.toTP("jqx-widget-header"));
e.statusbar.addClass(e.toTP("jqx-grid-statusbar"));
e.statusbar.addClass(e.toTP("jqx-widget-header"));
e.render()
}break;
case"showtoolbar":case"toolbarheight":if(i!=h){e._arrange();
e.refresh()
}break;
case"showstatusbar":if(i!=h){if(e.statusbar){if(h){e.statusbar.show()
}else{e.statusbar.hide()
}}e._arrange();
e.refresh()
}break;
case"statusbarheight":if(i!=h){e._arrange();
e.refresh()
}break;
case"filterable":case"showfilterrow":if(i!=h){e.render()
}break;
case"autoshowfiltericon":case"showfiltercolumnbackground":case"showpinnedcolumnbackground":case"showsortcolumnbackground":if(i!=h){e.rendergridcontent()
}break;
case"showrowdetailscolumn":if(i!=h){e.render()
}break;
case"scrollbarsize":if(i!=h){e._arrange()
}break;
case"width":case"height":if(i!=h){e._updatesize(true,true);
e._resizeWindow();
if(e.virtualmode&&!e._loading){e.vScrollInstance.setPosition(0)
}}break;
case"altrows":case"altstart":case"altstep":if(i!=h){e._renderrows(e.virtualsizeinfo)
}break;
case"groupsheaderheight":if(i!=h){e._arrange();
if(e._initgroupsheader){e._initgroupsheader()
}}break;
case"pagerheight":if(i!=h){e._initpager()
}break;
case"selectedrowindex":e.selectrow(h);
break;
case"selectionmode":if(i!=h){if(h=="none"){e.selectedrowindexes=new Array();
e.selectedcells=new Array();
e.selectedrowindex=-1
}e._renderrows(e.virtualsizeinfo);
if(h=="checkbox"){e._render(false,false,true,false,false)
}}break;
case"showheader":if(h){e.columnsheader.css("display","block")
}else{e.columnsheader.css("display","none")
}break;
case"virtualmode":if(i!=h){e.dataview.virtualmode=e.virtualmode;
e.dataview.refresh(false);
e._render(false,false,false)
}break;
case"columnsmenu":if(i!=h){e.render()
}break;
case"columngroups":e._render(true,true,true,false,false);
break;
case"columns":if(e._serializeObject(e._cachedcolumns)!==e._serializeObject(h)){var d=false;
if(e.filterable){if(i&&i.records){b.each(i.records,function(){if(this.filter){d=true
}e.dataview.removefilter(this.displayfield,this.filter)
})
}}e._columns=null;
e._filterrowcache=[];
e.render();
if(d){e.applyfilters()
}e._cachedcolumns=e.columns;
if(e.removesort){e.removesort()
}}else{e._initializeColumns()
}break;
case"autoheight":if(i!=h){e._render(false,false,true)
}break;
case"pagermode":case"pagerbuttonscount":if(i!=h){if(e._initpager){if(e.pagershowrowscombo){e.pagershowrowscombo.jqxDropDownList("destroy");
e.pagershowrowscombo=null
}if(e.pagerrightbutton){e.removeHandler(e.pagerrightbutton,"mousedown");
e.removeHandler(e.pagerrightbutton,"mouseup");
e.removeHandler(e.pagerrightbutton,"click");
e.pagerrightbutton.jqxButton("destroy");
e.pagerrightbutton=null
}if(e.pagerleftbutton){e.removeHandler(e.pagerleftbutton,"mousedown");
e.removeHandler(e.pagerleftbutton,"mouseup");
e.removeHandler(e.pagerleftbutton,"click");
e.pagerleftbutton.jqxButton("destroy");
e.removeHandler(b(document),"mouseup.pagerbuttons"+e.element.id);
e.pagerleftbutton=null
}e.pagerdiv.remove();
e._initpager()
}}break;
case"pagesizeoptions":case"pageable":case"pagesize":if(i!=h){if(e._loading){throw new Error("jqxGrid: "+e.loadingerrormessage);
return
}if(!e.host.jqxDropDownList||!e.host.jqxListBox){e._testmodules();
return
}if(e._initpager){if(f!="pageable"&&f!="pagermode"){if(typeof(h)=="string"){var g="The expected value type is: Int.";
if(f!="pagesize"){var g="The expected value type is: Array of Int values."
}throw new Error("Invalid Value for: "+f+". "+g)
}}e.dataview.pageable=e.pageable;
e.dataview.pagenum=0;
e.dataview.pagesize=e._getpagesize();
if(e.virtualmode){e.updatebounddata()
}e.dataview.refresh(true);
e._initpager();
if(f=="pagesizeoptions"){if(h!=null&&h.length>0){e.pagesize=parseInt(h[0]);
e.dataview.pagesize=parseInt(h[0]);
e.prerenderrequired=true;
e._requiresupdate=true;
e.dataview.pagenum=-1;
e.gotopage(0)
}}}e._render(false,false,false)
}break;
case"groups":if(e._serializeObject(i)!==e._serializeObject(h)){e.dataview.groups=h;
e._refreshdataview();
e._render(true,true,true,false)
}break;
case"groupable":if(i!=h){e.dataview.groupable=e.groupable;
e.dataview.pagenum=0;
e.dataview.refresh(false);
e._render(false,false,true)
}break;
case"renderstatusbar":if(h!=null){e.renderstatusbar(e.statusbar)
}break;
case"rendertoolbar":if(h!=null){e.rendertoolbar(e.toolbar)
}break;
case"disabled":if(h){e.host.addClass(e.toThemeProperty("jqx-fill-state-disabled"))
}else{e.host.removeClass(e.toThemeProperty("jqx-fill-state-disabled"))
}b.jqx.aria(e,"aria-disabled",e.disabled);
if(e.pageable){if(e.pagerrightbutton){e.pagerrightbutton.jqxButton({disabled:h});
e.pagerleftbutton.jqxButton({disabled:h});
e.pagershowrowscombo.jqxDropDownList({disabled:h});
e.pagergotoinput.attr("disabled",h)
}if(e.pagerfirstbutton){e.pagerfirstbutton.jqxButton({disabled:h});
e.pagerlastbutton.jqxButton({disabled:h})
}}e.vScrollBar.jqxScrollBar({disabled:h});
e.hScrollBar.jqxScrollBar({disabled:h});
if(e.filterable&&e.showfilterrow){e._updatefilterrowui(true)
}break
}}});
function c(d,e){this.owner=d;
this.datafield=null;
this.displayfield=null;
this.text="";
this.sortable=true;
this.hideable=true;
this.editable=true;
this.hidden=false;
this.groupable=true;
this.renderer=null;
this.cellsrenderer=null;
this.checkchange=null,this.threestatecheckbox=false;
this.buttonclick=null,this.columntype=null;
this.cellsformat="";
this.align="left";
this.cellsalign="left";
this.width="auto";
this.minwidth=25;
this.maxwidth="auto";
this.pinned=false;
this.visibleindex=-1;
this.filterable=true;
this.filter=null;
this.filteritems=[];
this.resizable=true;
this.initeditor=null;
this.createeditor=null;
this.destroyeditor=null;
this.geteditorvalue=null;
this.validation=null;
this.classname="";
this.cellclassname="";
this.cellendedit=null;
this.cellbeginedit=null;
this.cellvaluechanging=null;
this.aggregates=null;
this.aggregatesrenderer=null;
this.menu=true;
this.createfilterwidget=null;
this.filtertype="default";
this.filtercondition=null;
this.rendered=null;
this.exportable=true;
this.exporting=false;
this.draggable=true;
this.nullable=true;
this.enabletooltips=true;
this.columngroup=null;
this.getcolumnproperties=function(){return{nullable:this.nullable,sortable:this.sortable,hideable:this.hideable,hidden:this.hidden,groupable:this.groupable,width:this.width,align:this.align,editable:this.editable,minwidth:this.minwidth,maxwidth:this.maxwidth,resizable:this.resizable,datafield:this.datafield,text:this.text,exportable:this.exportable,cellsalign:this.cellsalign,pinned:this.pinned,cellsformat:this.cellsformat,columntype:this.columntype,classname:this.classname,cellclassname:this.cellclassname,menu:this.menu}
},this.setproperty=function(f,g){if(this[f]){var h=this[f];
this[f]=g;
this.owner._columnPropertyChanged(this,f,g,h)
}else{if(this[f.toLowerCase()]){var h=this[f.toLowerCase()];
this[f.toLowerCase()]=g;
this.owner._columnPropertyChanged(this,f.toLowerCase(),g,h)
}}};
this._initfields=function(g){if(g!=null){var f=this.that;
if(b.jqx.hasProperty(g,"dataField")){this.datafield=b.jqx.get(g,"dataField")
}if(b.jqx.hasProperty(g,"displayField")){this.displayfield=b.jqx.get(g,"displayField")
}else{this.displayfield=this.datafield
}if(b.jqx.hasProperty(g,"enableTooltips")){this.enabletooltips=b.jqx.get(g,"enableTooltips")
}if(b.jqx.hasProperty(g,"text")){this.text=b.jqx.get(g,"text")
}if(b.jqx.hasProperty(g,"sortable")){this.sortable=b.jqx.get(g,"sortable")
}if(b.jqx.hasProperty(g,"hideable")){this.hideable=b.jqx.get(g,"hideable")
}if(b.jqx.hasProperty(g,"hidden")){this.hidden=b.jqx.get(g,"hidden")
}if(b.jqx.hasProperty(g,"groupable")){this.groupable=b.jqx.get(g,"groupable")
}if(b.jqx.hasProperty(g,"renderer")){this.renderer=b.jqx.get(g,"renderer")
}if(b.jqx.hasProperty(g,"align")){this.align=b.jqx.get(g,"align")
}if(b.jqx.hasProperty(g,"cellsAlign")){this.cellsalign=b.jqx.get(g,"cellsAlign")
}if(b.jqx.hasProperty(g,"cellsFormat")){this.cellsformat=b.jqx.get(g,"cellsFormat")
}if(b.jqx.hasProperty(g,"width")){this.width=b.jqx.get(g,"width")
}if(b.jqx.hasProperty(g,"minWidth")){this.minwidth=b.jqx.get(g,"minWidth")
}if(b.jqx.hasProperty(g,"maxWidth")){this.maxwidth=b.jqx.get(g,"maxWidth")
}if(b.jqx.hasProperty(g,"cellsRenderer")){this.cellsrenderer=b.jqx.get(g,"cellsRenderer")
}if(b.jqx.hasProperty(g,"columnType")){this.columntype=b.jqx.get(g,"columnType")
}if(b.jqx.hasProperty(g,"checkChange")){this.checkchange=b.jqx.get(g,"checkChange")
}if(b.jqx.hasProperty(g,"buttonClick")){this.buttonclick=b.jqx.get(g,"buttonClick")
}if(b.jqx.hasProperty(g,"pinned")){this.pinned=b.jqx.get(g,"pinned")
}if(b.jqx.hasProperty(g,"visibleIndex")){this.visibleindex=b.jqx.get(g,"visibleIndex")
}if(b.jqx.hasProperty(g,"filterable")){this.filterable=b.jqx.get(g,"filterable")
}if(b.jqx.hasProperty(g,"filter")){this.filter=b.jqx.get(g,"filter")
}if(b.jqx.hasProperty(g,"resizable")){this.resizable=b.jqx.get(g,"resizable")
}if(b.jqx.hasProperty(g,"editable")){this.editable=b.jqx.get(g,"editable")
}if(b.jqx.hasProperty(g,"initEditor")){this.initeditor=b.jqx.get(g,"initEditor")
}if(b.jqx.hasProperty(g,"createEditor")){this.createeditor=b.jqx.get(g,"createEditor")
}if(b.jqx.hasProperty(g,"destroyEditor")){this.destroyeditor=b.jqx.get(g,"destroyEditor")
}if(b.jqx.hasProperty(g,"getEditorValue")){this.geteditorvalue=b.jqx.get(g,"getEditorValue")
}if(b.jqx.hasProperty(g,"validation")){this.validation=b.jqx.get(g,"validation")
}if(b.jqx.hasProperty(g,"cellBeginEdit")){this.cellbeginedit=b.jqx.get(g,"cellBeginEdit")
}if(b.jqx.hasProperty(g,"cellEndEdit")){this.cellendedit=b.jqx.get(g,"cellEndEdit")
}if(b.jqx.hasProperty(g,"className")){this.classname=b.jqx.get(g,"className")
}if(b.jqx.hasProperty(g,"cellClassName")){this.cellclassname=b.jqx.get(g,"cellClassName")
}if(b.jqx.hasProperty(g,"menu")){this.menu=b.jqx.get(g,"menu")
}if(b.jqx.hasProperty(g,"aggregates")){this.aggregates=b.jqx.get(g,"aggregates")
}if(b.jqx.hasProperty(g,"aggregatesRenderer")){this.aggregatesrenderer=b.jqx.get(g,"aggregatesRenderer")
}if(b.jqx.hasProperty(g,"createFilterWidget")){this.createfilterwidget=b.jqx.get(g,"createFilterWidget")
}if(b.jqx.hasProperty(g,"filterType")){this.filtertype=b.jqx.get(g,"filterType")
}if(b.jqx.hasProperty(g,"rendered")){this.rendered=b.jqx.get(g,"rendered")
}if(b.jqx.hasProperty(g,"exportable")){this.exportable=b.jqx.get(g,"exportable")
}if(b.jqx.hasProperty(g,"filterItems")){this.filteritems=b.jqx.get(g,"filterItems")
}if(b.jqx.hasProperty(g,"cellValueChanging")){this.cellvaluechanging=b.jqx.get(g,"cellValueChanging")
}if(b.jqx.hasProperty(g,"draggable")){this.draggable=b.jqx.get(g,"draggable")
}if(b.jqx.hasProperty(g,"filterCondition")){this.filtercondition=b.jqx.get(g,"filterCondition")
}if(b.jqx.hasProperty(g,"threeStateCheckbox")){this.threestatecheckbox=b.jqx.get(g,"threeStateCheckbox")
}if(b.jqx.hasProperty(g,"nullable")){this.nullable=b.jqx.get(g,"nullable")
}if(b.jqx.hasProperty(g,"columnGroup")){this.columngroup=b.jqx.get(g,"columnGroup")
}if(!g instanceof String&&!(typeof g=="string")){for(var h in g){if(!f.hasOwnProperty(h)){if(!f.hasOwnProperty(h.toLowerCase())){d.host.remove();
throw new Error("jqxGrid: Invalid property name - "+h+".")
}}}}}};
this._initfields(e);
return this
}function a(d,e){this.setdata=function(f){if(f!=null){this.bounddata=f;
this.boundindex=f.boundindex;
this.visibleindex=f.visibleindex;
this.group=f.group;
this.parentbounddata=f.parentItem;
this.uniqueid=f.uniqueid;
this.level=f.level
}};
this.setdata(e);
this.parentrow=null;
this.subrows=new Array();
this.owner=d;
this.height=25;
this.hidden=false;
this.rowdetails=null;
this.rowdetailsheight=100;
this.rowdetailshidden=true;
this.top=-1;
this.setrowinfo=function(f){this.hidden=f.hidden;
this.rowdetails=f.rowdetails;
this.rowdetailsheight=f.rowdetailsheight;
this.rowdetailshidden=!f.showdetails;
this.height=f.height
};
return this
}b.jqx.collection=function(d){this.records=new Array();
this.owner=d;
this.updating=false;
this.beginupdate=function(){this.updating=true
};
this.resumeupdate=function(){this.updating=false
};
this._raiseEvent=function(e){};
this.clear=function(){this.records=new Array()
};
this.replace=function(f,e){this.records[f]=e;
if(!this.updating){this._raiseEvent({type:"replace",element:e})
}};
this.isempty=function(e){if(this.records[e]==undefined){return true
}return false
};
this.initialize=function(e){if(e<1){e=1
}this.records[e-1]=-1
};
this.length=function(){return this.records.length
};
this.indexOf=function(e){return this.records.indexOf(e)
};
this.add=function(e){if(e==null){return false
}this.records[this.records.length]=e;
if(!this.updating){this._raiseEvent({type:"add",element:e})
}return true
};
this.insertAt=function(f,e){if(f==null||f==undefined){return false
}if(e==null){return false
}if(f>=0){if(f<this.records.length){this.records.splice(f,0,e);
if(!this.updating){this._raiseEvent({type:"insert",index:f,element:e})
}return true
}else{return this.add(e)
}}return false
};
this.remove=function(f){if(f==null||f==undefined){return false
}var e=this.records.indexOf(f);
if(e!=-1){this.records.splice(e,1);
if(!this.updating){this._raiseEvent({type:"remove",element:f})
}return true
}return false
};
this.removeAt=function(f){if(f==null||f==undefined){return false
}if(f<0){return false
}if(f<this.records.length){var e=this.records[f];
this.records.splice(f,1);
if(!this.updating){this._raiseEvent({type:"removeAt",index:f,element:e})
}return true
}return false
};
return this
};
b.jqx.dataview=function(){this.self=this;
this.grid=null;
this.uniqueId="id";
this.records=[];
this.rows=[];
this.columns=[];
this.groups=[];
this.filters=new Array();
this.updated=null;
this.update=null;
this.suspend=false;
this.pagesize=0;
this.pagenum=0;
this.totalrows=0;
this.totalrecords=0;
this.groupable=true;
this.loadedrecords=[];
this.loadedrootgroups=[];
this.loadedgroups=[];
this.loadedgroupsByKey=[];
this.virtualmode=true;
this._cachegrouppages=new Array();
this.source=null;
this.changedrecords=new Array();
this.rowschangecallback=null;
this.that=this;
this.destroy=function(){delete this.self;
delete this.grid;
delete this.uniqueId;
delete this.records;
delete this.rows;
delete this.columns;
delete this.groups;
delete this.filters;
delete this.updated;
delete this.update;
delete this.suspend;
delete this.pagesize;
delete this.pagenum;
delete this.totalrows;
delete this.totalrecords;
delete this.groupable;
delete this.loadedrecords;
delete this.loadedrootgroups;
delete this.loadedgroups;
delete this.loadedgroupsByKey;
delete this.virtualmode;
delete this._cachegrouppages;
delete this.source;
delete this.changedrecords;
delete this.rowschangecallback;
delete this.that
},this.suspendupdate=function(){this.suspend=true
},this.isupdating=function(){return this.suspend
},this.resumeupdate=function(d){this.suspend=false;
if(d==undefined){d=true
}this.refresh(d)
},this.getrecords=function(){return this.records
},this.clearrecords=function(){this.recordids=new Array()
};
this.databind=function(u,y){var i=u._source?true:false;
var h=null;
if(i){h=u;
u=u._source
}else{h=new b.jqx.dataAdapter(u,{autoBind:false})
}var k=function(m){h.recordids=[];
h.records=new Array();
h.cachedrecords=new Array();
h.originaldata=new Array();
h._options.virtualmode=m.virtualmode;
h._options.totalrecords=m.totalrecords;
h._options.originaldata=m.originaldata;
h._options.recordids=m.recordids;
h._options.cachedrecords=new Array();
h._options.pagenum=m.pagenum;
h._options.pageable=m.pageable;
if(u.type!=undefined){h._options.type=u.type
}if(u.formatdata!=undefined){h._options.formatData=u.formatdata
}if(u.contenttype!=undefined){h._options.contentType=u.contenttype
}if(u.async!=undefined){h._options.async=u.async
}if(u.updaterow!=undefined){h._options.updaterow=u.updaterow
}if(u.addrow!=undefined){h._options.addrow=u.addrow
}if(u.deleterow!=undefined){h._options.deleterow=u.deleterow
}if(m.pagesize==0){m.pagesize=10
}h._options.pagesize=m.pagesize
};
var w=function(x){x.totalrecords=h.totalrecords;
if(!x.virtualmode){x.originaldata=h.originaldata;
x.records=h.records;
x.recordids=h.recordids;
x.cachedrecords=h.cachedrecords
}else{var C={startindex:x.pagenum*x.pagesize,endindex:(x.pagenum*x.pagesize+x.pagesize)};
if(u.recordstartindex!=undefined){C.startindex=parseInt(u.recordstartindex)
}if(u.recordendindex!=undefined){C.endindex=parseInt(u.recordendindex)
}else{if(!x.grid.pageable){C.endindex=C.startindex+100;
if(x.grid.autoheight){C.endindex=C.startindex+x.totalrecords
}}}if(!u.recordendindex){if(!x.grid.pageable){C.endindex=C.startindex+100;
if(x.grid.autoheight){C.endindex=C.startindex+x.totalrecords
}}else{C={startindex:x.pagenum*x.pagesize,endindex:(x.pagenum*x.pagesize+x.pagesize)}
}}C.data=h.records;
if(x.grid.rendergridrows&&x.totalrecords>0){var A=0;
u.records=x.grid.rendergridrows(C);
if(u.records.length){A=u.records.length
}if(u.records&&!u.records[C.startindex]){var B=new Array();
var z=C.startindex;
b.each(u.records,function(){B[z]=this;
z++;
A++
});
u.records=B
}if(A==0){if(u.records){b.each(u.records,function(){A++
})
}}if(A>0&&A<C.endindex-C.startindex&&!x.grid.groupable){var E=u.records[0];
for(var D=0;
D<C.endindex-C.startindex-A;
D++){var m={};
for(obj in E){m[obj]=""
}if(u.records.push){u.records.push(m)
}}}}if(!u.records||x.totalrecords==0){u.records=new Array()
}x.originaldata=u.records;
x.records=u.records;
x.cachedrecords=u.records
}};
k(this);
this.source=u;
if(y!==undefined){uniqueId=y
}var s=this.that;
switch(u.datatype){case"local":case"array":default:if(u.localdata==null){u.localdata=[]
}if(u.localdata!=null){h.unbindBindingUpdate(s.grid.element.id);
if((!s.grid.autobind&&s.grid.isInitialized)||s.grid.autobind){h.dataBind()
}var f=function(x){if(x!=undefined&&x!=""){var z=h._changedrecords[0];
if(z){var A=new Array();
b.each(h._changedrecords,function(E){var B=this.index;
var C=this.record;
s.grid._updateFromAdapter=true;
switch(x){case"update":var D=s.grid.getrowid(B);
if(E==h._changedrecords.length-1){s.grid.updaterow(D,C)
}else{s.grid.updaterow(D,C,false)
}s.grid._updateFromAdapter=false;
return;
case"add":s.grid.addrow(null,C);
s.grid._updateFromAdapter=false;
return;
case"remove":var D=s.grid.getrowid(B);
A.push(D);
return
}});
if(A.length>0){s.grid.deleterow(A,false);
s.grid._updateFromAdapter=false
}}if(x=="update"){return
}}var m=s.totalrecords;
w(s,x);
if(x=="updateData"){s.refresh();
s.grid._updateGridData()
}else{if(u.recordstartindex&&this.virtualmode){s.updateview(u.recordstartindex,u.recordstartindex+s.pagesize)
}else{s.refresh()
}s.update(m!=s.totalrecords)
}};
f();
h.bindBindingUpdate(s.grid.element.id,f)
}break;
case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"csv":case"tab":if(u.localdata!=null){h.unbindBindingUpdate(s.grid.element.id);
if((!s.grid.autobind&&s.grid.isInitialized)||s.grid.autobind){h.dataBind()
}var f=function(x){var m=s.totalrecords;
w(s);
if(x=="updateData"){s.refresh();
s.grid._updateGridData()
}else{if(u.recordstartindex){s.updateview(u.recordstartindex,u.recordstartindex+s.pagesize)
}else{s.refresh()
}s.update(m!=s.totalrecords)
}};
f();
h.bindBindingUpdate(s.grid.element.id,f);
return
}var n={};
var e=0;
var p={};
for(var v=0;
v<this.filters.length;
v++){var g=this.filters[v].datafield;
var o=this.filters[v].filter;
var t=o.getfilters();
p[g+"operator"]=o.operator;
for(var l=0;
l<t.length;
l++){t[l].datafield=g;
var r=t[l].value;
if(t[l].type=="datefilter"){if(t[l].value&&t[l].value.toLocaleString){var d=this.grid.getcolumn(t[l].datafield);
if(d.cellsformat){var j=this.grid.source.formatDate(t[l].value,d.cellsformat,this.grid.gridlocalization);
if(j){p["filtervalue"+e]=j
}else{p["filtervalue"+e]=t[l].value.toLocaleString()
}}else{p["filtervalue"+e]=r.toString()
}}else{p["filtervalue"+e]=r.toString()
}}else{p["filtervalue"+e]=r.toString()
}p["filtercondition"+e]=t[l].condition;
p["filteroperator"+e]=t[l].operator;
p["filterdatafield"+e]=g;
e++
}}p.filterscount=e;
p.groupscount=s.groups.length;
for(var v=0;
v<s.groups.length;
v++){p["group"+v]=s.groups[v]
}if(u.recordstartindex==undefined){u.recordstartindex=0
}if(u.recordendindex==undefined||u.recordendindex==0){if(s.grid.height&&s.grid.height.toString().indexOf("%")==-1){u.recordendindex=parseInt(s.grid.height)/s.grid.rowsheight;
u.recordendindex+=2
}else{u.recordendindex=b(window).height()/s.grid.rowsheight
}if(this.pageable){u.recordendindex=this.pagesize
}}b.extend(p,{sortdatafield:s.sortfield,sortorder:s.sortfielddirection,pagenum:s.pagenum,pagesize:s.grid.pagesize,recordstartindex:u.recordstartindex,recordendindex:u.recordendindex});
var q=h._options.data;
if(h._options.data){b.extend(h._options.data,p)
}else{if(u.data){b.extend(p,u.data)
}h._options.data=p
}var f=function(){var x=b.jqx.browser.msie&&b.jqx.browser.version<9;
var z=function(){var A=s.totalrecords;
w(s);
if(u.recordstartindex){s.updateview(u.recordstartindex,u.recordstartindex+s.pagesize)
}else{s.refresh()
}s.update(A!=s.totalrecords)
};
if(x){try{z()
}catch(m){}}else{z()
}};
h.unbindDownloadComplete(s.grid.element.id);
h.bindDownloadComplete(s.grid.element.id,f);
if((!s.grid.autobind&&s.grid.isInitialized)||s.grid.autobind){h.dataBind()
}else{if(!s.grid.isInitialized&&!s.grid.autobind){f()
}}h._options.data=q
}};
this.getid=function(g,e,f){if(b(g,e).length>0){return b(g,e).text()
}if(g){if(g.toString().length>0){var d=b(e).attr(g);
if(d!=null&&d.toString().length>0){return d
}}}return f
};
this.getvaluebytype=function(g,d){var e=g;
if(d.type=="date"){var f=new Date(g);
if(f.toString()=="NaN"||f.toString()=="Invalid Date"){if(b.jqx.dataFormat){g=b.jqx.dataFormat.tryparsedate(g)
}else{g=f
}}else{g=f
}if(g==null){g=e
}}else{if(d.type=="float"){var g=parseFloat(g);
if(isNaN(g)){g=e
}}else{if(d.type=="int"){var g=parseInt(g);
if(isNaN(g)){g=e
}}else{if(d.type=="bool"){if(g!=null){if(g.toLowerCase()=="false"){g=false
}else{if(g.toLowerCase()=="true"){g=true
}}}if(g==1){g=true
}else{if(g==0){g=false
}else{g=""
}}}}}}return g
};
this.setpaging=function(d){if(d.pageSize!=undefined){this.pagesize=d.pageSize
}if(d.pageNum!=undefined){this.pagenum=Math.min(d.pageNum,Math.ceil(this.totalrows/this.pagesize))
}this.refresh()
};
this.getpagingdetails=function(){return{pageSize:this.pagesize,pageNum:this.pagenum,totalrows:this.totalrows}
};
this._clearcaches=function(){this.sortcache={};
this.sortdata=null;
this.changedrecords=new Array();
this.records=new Array();
this.rows=new Array();
this.cacheddata=new Array();
this.originaldata=new Array();
this.bounditems=new Array();
this.loadedrecords=new Array();
this.loadedrootgroups=new Array();
this.loadedgroups=new Array();
this.loadedgroupsByKey=new Array();
this._cachegrouppages=new Array();
this.recordsbyid=new Array();
this.cachedrecords=new Array();
this.recordids=new Array()
};
this.addfilter=function(g,f){var e=-1;
for(var d=0;
d<this.filters.length;
d++){if(this.filters[d].datafield==g){e=d;
break
}}if(e==-1){this.filters[this.filters.length]={filter:f,datafield:g}
}else{this.filters[e]={filter:f,datafield:g}
}};
this.removefilter=function(e){for(var d=0;
d<this.filters.length;
d++){if(this.filters[d].datafield==e){this.filters.splice(d,1);
break
}}};
this.getItemFromIndex=function(d){return this.records[d]
};
this.updaterow=function(d,n,l){var e=this.filters&&this.filters.length>0&&!this.virtualmode;
if(!e&&n!=undefined&&d!=undefined){n.uid=d;
if(!(n[this.source.id])){n[this.source.id]=n.uid
}var j=this.recordsbyid["id"+d];
var k=this.records.indexOf(j);
if(k==-1){return false
}this.records[k]=n;
if(this.cachedrecords){this.cachedrecords[k]=n
}if(l==true||l==undefined){this.refresh()
}this.changedrecords[n.uid]={Type:"Update",OldData:j,Data:n};
return true
}else{if(this.filters&&this.filters.length>0){var f=this.cachedrecords;
var j=null;
var k=-1;
for(var h=0;
h<f.length;
h++){if(f[h].uid==d){j=f[h];
k=h;
break
}}if(j){var m=this.that;
for(var g in n){m.cachedrecords[k][g]=n[g]
}if(l==true||l==undefined){this.refresh()
}return true
}}}return false
};
this.addrow=function(h,i,d,g){if(i!=undefined){if(!h){i.uid=this.getid(this.source.id,i,this.totalrecords);
var e=this.recordsbyid["id"+i.uid];
while(e!=null){var f=Math.floor(Math.random()*10000).toString();
i.uid=f;
e=this.recordsbyid["id"+f]
}}else{i.uid=h
}if(!(i[this.source.id])){if(this.source.id!=undefined){i[this.source.id]=i.uid
}}if(d=="last"){this.records.push(i)
}else{if(typeof d==="number"&&isFinite(d)){this.records.splice(d,0,i)
}else{this.records.splice(0,0,i)
}}if(this.filters&&this.filters.length>0){if(d=="last"){this.cachedrecords.push(i)
}else{if(typeof d==="number"&&isFinite(d)){this.cachedrecords.splice(d,0,i)
}else{this.cachedrecords.splice(0,0,i)
}}}this.totalrecords++;
if(this.virtualmode){this.source.totalrecords=this.totalrecords
}if(g==true||g==undefined){this.refresh()
}this.changedrecords[i.uid]={Type:"New",Data:i};
return true
}return false
};
this.deleterow=function(j,h){if(j!=undefined){var d=this.filters&&this.filters.length>0;
if(this.recordsbyid["id"+j]&&!d){var e=this.recordsbyid["id"+j];
var k=this.records.indexOf(e);
this.changedrecords[j]={Type:"Delete",Data:this.records[k]};
this.records.splice(k,1);
this.totalrecords--;
if(this.virtualmode){this.source.totalrecords=this.totalrecords
}if(h==true||h==undefined){this.refresh()
}return true
}else{if(this.filters&&this.filters.length>0){var f=this.cachedrecords;
var e=null;
var k=-1;
for(var g=0;
g<f.length;
g++){if(f[g].uid==j){e=f[g];
k=g;
break
}}if(e){this.cachedrecords.splice(k,1);
if(h==true||h==undefined){this.totalrecords=0;
this.records=this.cachedrecords;
this.refresh()
}return true
}}}return false
}return false
};
this.reload=function(p,d,g,n,m,k,i){var h=this.that;
var r=new Array();
var u=p;
var o=d;
var v=g;
var f=n;
var q=o.length;
var l=0;
var s=0;
var e,t;
this.columns=[];
this.bounditems=new Array();
this.loadedrecords=new Array();
this.loadedrootgroups=new Array();
this.loadedgroups=new Array();
this.loadedgroupsByKey=new Array();
this._cachegrouppages=new Array();
this.recordsbyid={};
if(this.totalrecords==0){Object.size=function(z){var y=0,x;
for(x in z){if(z.hasOwnProperty(x)){y++
}}return y
};
var j=Object.size(u);
this.totalrecords=j;
b.each(this.records,function(y){var z=this;
var x=0;
b.each(z,function(A,B){h.columns[x++]=A
});
return false
})
}if(this.virtualmode){if(this.pageable){this.updateview();
return
}var k=0;
if(!this.groupable){this.updateview();
return
}else{var i=this.totalrecords
}}else{var k=0;
var i=this.totalrecords
}if(this.groupable&&this.groups.length>0&&this.loadgrouprecords){var w=k;
w=this.loadgrouprecords(0,k,i,v,s,f,o,q,r)
}else{l=this.loadflatrecords(k,i,v,s,f,o,q,r)
}if(q>s){o.splice(s,q-s)
}if(this.groups.length>0&&this.groupable){this.totalrows=w
}else{this.totalrows=l
}return r
};
this.loadflatrecords=function(d,r,k,t,f,j,q,u){var h=this.that;
var o=d;
var p=d;
r=Math.min(r,this.totalrecords);
var l=this.sortdata!=null;
var s=this.source.id&&(this.source.datatype=="local"||this.source.datatype=="array"||this.source.datatype=="");
var n=l?this.sortdata:this.records;
for(var m=d;
m<r;
m++){var g={};
if(!l){g=b.extend({},n[m]);
id=g[h.uniqueId];
g.boundindex=o;
h.loadedrecords[o]=g;
if(g.uid==undefined){g.uid=h.getid(h.source.id,g,o)
}h.recordsbyid["id"+g.uid]=n[m];
g.uniqueid=h.generatekey();
h.bounditems[this.bounditems.length]=g
}else{g=b.extend({},n[m].value);
id=g[h.uniqueId];
g.boundindex=n[m].index;
if(g.uid==undefined){g.uid=h.getid(h.source.id,g,g.boundindex)
}h.recordsbyid["id"+g.uid]=n[m].value;
h.loadedrecords[o]=g;
g.uniqueid=h.generatekey();
h.bounditems[g.boundindex]=g
}if(t>=q||id!=j[t][h.uniqueId]||(f&&f[id])){u[u.length]=t
}j[t]=g;
t++;
g.visibleindex=p;
p++;
o++
}if(h.grid.summaryrows){var e=o;
b.each(h.grid.summaryrows,function(){var i=b.extend({},this);
i.boundindex=r++;
h.loadedrecords[e]=i;
i.uniqueid=h.generatekey();
h.bounditems[h.bounditems.length]=i;
j[t]=i;
t++;
i.visibleindex=p;
p++;
e++
})
}return p
},this.updateview=function(k,m){var n=this.that;
var s=this.pagesize*this.pagenum;
var j=0;
var o=new Array();
var q=this.filters;
var r=this.updated;
var h=o.length;
if(this.pageable){if(this.virtualmode){if(!this.groupable||this.groups.length==0){this.loadflatrecords(this.pagesize*this.pagenum,this.pagesize*(1+this.pagenum),q,j,r,o,h,[]);
this.totalrows=o.length
}else{if(this.groupable&&this.groups.length>0&&this.loadgrouprecords){if(this._cachegrouppages[this.pagenum+"_"+this.pagesize]!=undefined){this.rows=this._cachegrouppages[this.pagenum+"_"+this.pagesize];
this.totalrows=this.rows.length;
return
}var p=this.pagesize*(1+this.pagenum);
if(p>this.totalrecords){p=this.totalrecords
}this.loadgrouprecords(0,this.pagesize*this.pagenum,p,q,j,r,o,h,[]);
this._cachegrouppages[this.pagenum+"_"+this.pagesize]=this.rows;
this.totalrows=this.rows.length;
return
}}}}else{if(this.virtualmode&&(!this.groupable||this.groups.length==0)){var f=this.pagesize;
if(f==0){f=Math.min(100,this.totalrecords)
}var d=f*this.pagenum;
if(this.loadedrecords.length==0){d=0
}if(k!=null&&m!=null){this.loadflatrecords(k,m,q,j,r,o,h,[])
}else{this.loadflatrecords(this.pagesize*this.pagenum,this.pagesize*(1+this.pagenum),q,j,r,o,h,[])
}this.totalrows=this.loadedrecords.length;
this.rows=o;
if(o.length>=f){return
}}}if(this.groupable&&this.pageable&&this.groups.length>0&&this._updategroupsinpage){o=this._updategroupsinpage(n,q,s,j,h,this.pagesize*this.pagenum,this.pagesize*(1+this.pagenum))
}else{for(var l=this.pagesize*this.pagenum;
l<this.pagesize*(1+this.pagenum);
l++){var e=l<this.loadedrecords.length?this.loadedrecords[l]:null;
if(e==null){continue
}if(!this.pagesize||(s>=this.pagesize*this.pagenum&&s<=this.pagesize*(this.pagenum+1))){o[j]=e;
j++
}s++
}}if((o.length==0||o.length<this.pagesize)&&!this.pageable&&this.virtualmode){j=o.length;
var g=o.length;
for(var l=this.pagesize*this.pagenum;
l<this.pagesize*(1+this.pagenum)-g;
l++){var e={};
e.boundindex=l+g;
e.visibleindex=l+g;
e.uniqueid=n.generatekey();
e.empty=true;
n.bounditems[l+g]=e;
o[j]=e;
j++
}}this.rows=o
};
this.generatekey=function(){var d=function(){return(((1+Math.random())*16)|0)
};
return(""+d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d())
};
this.reloaddata=function(){this.reload(this.records,this.rows,this.filter,this.updated,true)
};
this.refresh=function(m){if(this.suspend){return
}if(m==undefined){m=true
}var f=this.rows.length;
var o=this.totalrows;
if(this.filters.length>0&&!this.virtualmode){var k="";
var l=this.cachedrecords.length;
var g=new Array();
this.totalrecords=0;
var q=this.cachedrecords;
this._dataIndexToBoundIndex=new Array();
var s=this.filters.length;
if(this.source!=null&&this.source.filter!=undefined&&this.source.localdata!=undefined){g=this.source.filter(this.filters,q,l);
if(g==undefined){g=new Array()
}this.records=g
}else{if(this.source.filter==null||this.source.filter==undefined){for(var i=0;
i<l;
i++){var r=q[i];
var d=undefined;
for(var p=0;
p<s;
p++){var k=this.filters[p].filter;
var e=r[this.filters[p].datafield];
var h=k.evaluate(e);
if(d==undefined){d=h
}else{if(k.operator=="or"){d=d||h
}else{d=d&&h
}}}if(d){g[g.length]=b.extend({dataindex:i},r);
this._dataIndexToBoundIndex[i]={boundindex:g.length-1}
}else{this._dataIndexToBoundIndex[i]=null
}}this.records=g
}}if(this.sortdata){var n=this.sortfield;
if(this.sortcache[n]){this.sortdata=null;
var t=this.sortcache[n].direction;
this.sortcache[n]=null;
this.sortby(this.sortfield,t);
return
}}}else{if(this.filters.length==0&&!this.virtualmode){if(this.cachedrecords){this.totalrecords=0;
var q=this.cachedrecords;
this.records=q;
if(this.sortdata){var n=this.sortfield;
if(this.sortcache[n]){this.sortdata=null;
var t=this.sortcache[n].direction;
this.sortcache[n]=null;
this.sortby(this.sortfield,t);
return
}}}}}var u=this.reload(this.records,this.rows,this.filter,this.updated,m);
this.updated=null;
if(this.rowschangecallback!=null){if(o!=totalrows){this.rowschangecallback({type:"PagingChanged",data:getpagingdetails()})
}if(f!=rows.length){this.rowschangecallback({type:"RowsCountChanged",data:{previous:f,current:rows.length}})
}if(u.length>0||f!=rows.length){this.rowschangecallback({type:"RowsChanged",data:{previous:f,current:rows.length,diff:u}})
}}};
return this
}
})(jQuery);