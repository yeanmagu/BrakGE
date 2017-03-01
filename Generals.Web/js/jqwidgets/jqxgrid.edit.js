(function(a){a.extend(a.jqx._jqxGrid.prototype,{_handledblclick:function(t,n){if(t.target==null){return
}if(n.disabled){return
}if(a(t.target).ischildof(this.columnsheader)){return
}var w;
if(t.which){w=(t.which==3)
}else{if(t.button){w=(t.button==2)
}}if(w){return
}var B;
if(t.which){B=(t.which==2)
}else{if(t.button){B=(t.button==1)
}}if(B){return
}var v=this.showheader?this.columnsheader.height()+2:0;
var o=this._groupsheader()?this.groupsheader.height():0;
var A=this.showtoolbar?this.toolbarheight:0;
o+=A;
var e=this.host.offset();
var m=t.pageX-e.left;
var l=t.pageY-v-e.top-o;
var b=this._hittestrow(m,l);
if(!b){return
}var h=b.row;
var j=b.index;
var q=t.target.className;
var p=this.table[0].rows[j];
if(p==null){return
}n.mousecaptured=true;
n.mousecaptureposition={left:t.pageX,top:t.pageY-o};
var r=this.hScrollInstance;
var s=r.value;
var d=0;
var k=this.groupable?this.groups.length:0;
for(var u=0;
u<p.cells.length;
u++){var f=parseInt(a(this.columnsrow[0].cells[u]).css("left"));
var g=f-s;
if(n.columns.records[u].pinned){g=f
}var c=this._getcolumnat(u);
if(c!=null&&c.hidden){continue
}var z=g+a(this.columnsrow[0].cells[u]).width();
if(z>=m&&m>=g){d=u;
break
}}if(h!=null){var c=this._getcolumnat(d);
if(!(q.indexOf("jqx-grid-group-expand")!=-1||q.indexOf("jqx-grid-group-collapse")!=-1)){if(h.boundindex!=-1){n.begincelledit(n.getboundindex(h),c.datafield,c.defaulteditorvalue)
}}}},_getpreveditablecolumn:function(c){var b=this;
while(c>0){c--;
var d=b.getcolumnat(c);
if(!d){return null
}if(!d.editable){continue
}if(!d.hidden){return d
}}return null
},_getnexteditablecolumn:function(c){var b=this;
while(c<this.columns.records.length){c++;
var d=b.getcolumnat(c);
if(!d){return null
}if(!d.editable){continue
}if(!d.hidden){return d
}}return null
},_handleeditkeydown:function(j,h){if(h.handlekeyboardnavigation){var B=h.handlekeyboardnavigation(j);
if(B==true){return true
}}var w=j.charCode?j.charCode:j.keyCode?j.keyCode:0;
if(h.showfilterrow&&h.filterable){if(this.filterrow){if(a(j.target).ischildof(this.filterrow)){return true
}}}if(h.pageable){if(a(j.target).ischildof(this.pager)){return true
}}if(this.showtoolbar){if(a(j.target).ischildof(this.toolbar)){return true
}}if(this.showstatusbar){if(a(j.target).ischildof(this.statusbar)){return true
}}if(this.rowdetails){if(a(j.target).ischildof(this.content.find("[role='rowgroup']"))){return true
}}if(this.editcell){if(this.editmode==="selectedrow"){if(w===13){this.endrowedit(this.editcell.row,false)
}else{if(w===27){this.endrowedit(this.editcell.row,true)
}}if(w===9){return false
}return true
}if(this.editcell.columntype==null||this.editcell.columntype=="textbox"||this.editcell.columntype=="numberinput"||this.editcell.columntype=="combobox"||this.editcell.columntype=="datetimeinput"){if(w>=33&&w<=40&&h.selectionmode=="multiplecellsadvanced"){var z=this.editcell.columntype=="textbox"||this.editcell.columntype==null?this.editcell.editor:this.editcell.editor.find("input");
var G=h._selection(z);
var i=z.val().length;
if(G.length>0&&this.editcell.columntype!="datetimeinput"){h._cancelkeydown=true
}if(G.start>0&&w==37){h._cancelkeydown=true
}if(G.start<i&&w==39&&this.editcell.columntype!="datetimeinput"){h._cancelkeydown=true
}if(this.editcell.columntype=="datetimeinput"&&w==39){if(G.start+G.length<i){h._cancelkeydown=true
}}}}else{if(this.editcell.columntype=="dropdownlist"){if(w==37||w==39&&h.selectionmode=="multiplecellsadvanced"){h._cancelkeydown=false
}}else{if(this.selectionmode=="multiplecellsadvanced"&&this.editcell.columntype!="textbox"&&this.editcell.columntype!="numberinput"){h._cancelkeydown=true
}}}if(w==32){if(h.editcell.columntype=="checkbox"){var t=h.getcolumn(h.editcell.datafield);
if(t.editable){var D=!h.getcellvalue(h.editcell.row,h.editcell.column);
if(t.cellbeginedit){var s=t.cellbeginedit(h.editcell.row,t.datafield,t.columntype,!D);
if(s==false){return false
}}h.setcellvalue(h.editcell.row,h.editcell.column,D,true);
h._raiseEvent(18,{rowindex:h.editcell.row,datafield:h.editcell.column,oldvalue:!D,value:D,columntype:"checkbox"});
return false
}}}if(w==9){var u=this.editcell.row;
var f=this.editcell.column;
var k=f;
var y=h._getcolumnindex(f);
var e=false;
var q=h.getrowvisibleindex(u);
this.editchar="";
if(this.editcell.validated!=false){if(j.shiftKey){var t=h._getpreveditablecolumn(y);
if(t){f=t.datafield;
e=true;
if(h.selectionmode.indexOf("cell")!=-1){h.selectprevcell(u,k);
setTimeout(function(){h.ensurecellvisible(q,f)
},10)
}}}else{var t=h._getnexteditablecolumn(y);
if(t){f=t.datafield;
e=true;
if(h.selectionmode.indexOf("cell")!=-1){h.selectnextcell(u,k);
h._oldselectedcell=h.selectedcell;
setTimeout(function(){h.ensurecellvisible(q,f)
},10)
}}}if(e){h.begincelledit(u,f);
if(this.editcell!=null&&this.editcell.columntype=="checkbox"){this._renderrows(this.virtualsizeinfo)
}}else{if(this.editcell!=null){h.endcelledit(u,f,false);
this._renderrows(this.virtualsizeinfo)
}return true
}}return false
}else{if(w==13){var d=this.selectedcell;
if(d){var E=this.getrowvisibleindex(d.rowindex)
}this.endcelledit(this.editcell.row,this.editcell.column,false,true);
if(this.selectionmode=="multiplecellsadvanced"){var o=h.getselectedcell();
if(o!=null){if(h.selectcell){if(this.editcell==null){if(o.rowindex+1<this.dataview.totalrecords){if(this.sortcolumn!=o.datafield){var q=this.getrowvisibleindex(o.rowindex);
var n=this.dataview.loadedrecords[q+1];
if(n){if(!this.pageable||(this.pageable&&q+1<(this.dataview.pagenum+1)*this.pagesize)){this.clearselection(false);
this.selectcell(this.getboundindex(n),o.datafield);
var o=this.getselectedcell();
this.ensurecellvisible(n.visibleindex,o.datafield)
}}}else{if(d!=null){var r=this.dataview.loadedrecords[E+1];
if(r){if(!this.pageable||(this.pageable&&E+1<this.pagesize)){this.clearselection(false);
this.selectcell(this.getboundindex(r),o.datafield)
}else{if(this.pageable&&E+1>=this.pagesize){this.clearselection(false);
var r=this.dataview.loadedrecords[E];
this.selectcell(this.getboundindex(r),o.datafield)
}}}}}}}}}}return false
}else{if(w==27){this.endcelledit(this.editcell.row,this.editcell.column,true,true);
return false
}}}}else{var g=false;
if(w==113){g=true
}if(!j.ctrlKey&&!j.altKey){if(w>=48&&w<=57){this.editchar=String.fromCharCode(w);
g=true
}if(w>=65&&w<=90){this.editchar=String.fromCharCode(w);
var c=false;
if(j.shiftKey){c=j.shiftKey
}else{if(j.modifiers){c=!!(j.modifiers&4)
}}if(!c){this.editchar=this.editchar.toLowerCase()
}g=true
}else{if(w>=96&&w<=105){this.editchar=w-96;
this.editchar=this.editchar.toString();
g=true
}}var p=a(".jqx-grid").length;
g=g&&(p==1||(p>1&&h.focused));
var x=a.data(document.body,"jqxgrid.edit");
if(x!==undefined&&x!==""){if(w===13||g){if(x!=h.element.id){return true
}}}}if(w==13||g){if(h.getselectedrowindex){var u=h.getselectedrowindex();
switch(h.selectionmode){case"singlerow":case"multiplerows":case"multiplerowsextended":if(u>=0){var f="";
for(var l=0;
l<h.columns.records.length;
l++){var t=h.getcolumnat(l);
if(t.editable){f=t.datafield;
break
}}h.begincelledit(u,f)
}break;
case"singlecell":case"multiplecells":case"multiplecellsextended":var o=h.getselectedcell();
if(o!=null){var t=h._getcolumnbydatafield(o.datafield);
if(t.columntype!="checkbox"){h.begincelledit(o.rowindex,o.datafield)
}}break;
case"multiplecellsadvanced":var o=h.getselectedcell();
if(o!=null){if(w==13){if(h.selectcell){if(o.rowindex+1<h.dataview.totalrecords){var q=this.getrowvisibleindex(o.rowindex);
var n=this.dataview.loadedrecords[q+1];
if(n){this.clearselection(false);
this.selectcell(this.getboundindex(n),o.datafield);
var o=this.getselectedcell();
this.ensurecellvisible(n.visibleindex,o.datafield)
}}}}else{if(h.editmode!=="selectedrow"){h.begincelledit(o.rowindex,o.datafield)
}}}break
}return false
}}if(w==46){var v=h.getselectedcells();
if(h.selectionmode.indexOf("cell")==-1){if(h._getcellsforcopypaste){v=h._getcellsforcopypaste()
}}if(v!=null&&v.length>0){for(var F=0;
F<v.length;
F++){var o=v[F];
if(!o.datafield){continue
}var t=h.getcolumn(o.datafield);
var C=h.getcellvalue(o.rowindex,o.datafield);
if(C!==""&&t.editable&&h.enablekeyboarddelete){var A=null;
if(t.columntype=="checkbox"){if(!t.threestatecheckbox){A=false
}}if(t.cellbeginedit){var s=t.cellbeginedit(o.rowindex,t.datafield,t.columntype,A);
if(s==false){return false
}}h._raiseEvent(17,{rowindex:o.rowindex,datafield:o.datafield,value:C});
if(F==v.length-1){h.setcellvalue(o.rowindex,o.datafield,A,true);
if(t.displayfield!=t.datafield){h.setcellvalue(o.rowindex,t.displayfield,A,true)
}}else{h.setcellvalue(o.rowindex,o.datafield,A,false);
if(t.displayfield!=t.datafield){h.setcellvalue(o.rowindex,t.displayfield,A,true)
}}if(t.cellendedit){var b=t.cellendedit(o.rowindex,t.datafield,t.columntype,A)
}h._raiseEvent(18,{rowindex:o.rowindex,datafield:o.datafield,oldvalue:C,value:A})
}}this.dataview.updateview();
this._renderrows(this.virtualsizeinfo);
return false
}}if(w==32){var o=h.getselectedcell();
if(o!=null){var t=h.getcolumn(o.datafield);
if(t.columntype=="checkbox"&&t.editable){var D=!h.getcellvalue(o.rowindex,o.datafield);
if(t.cellbeginedit){var s=t.cellbeginedit(o.rowindex,t.datafield,t.columntype,!D);
if(s==false){return false
}}h._raiseEvent(17,{rowindex:o.rowindex,datafield:o.datafield,value:!D,columntype:"checkbox"});
h.setcellvalue(o.rowindex,o.datafield,D,true);
h._raiseEvent(18,{rowindex:o.rowindex,datafield:o.datafield,oldvalue:!D,value:D,columntype:"checkbox"});
return false
}}}}return true
},begincelledit:function(m,e,k,g,c){var f=this.getcolumn(e);
this._cellscache=new Array();
if(e==null){return
}if(f.columntype=="number"||f.columntype=="button"){return
}if(this.groupable){if(this.groups.indexOf(e)>=0){return
}if(this.groups.indexOf(f.displayfield)>=0){return
}}if(this.editrow!=undefined){return
}if(this.editcell){if(this.editcell.row==m&&this.editcell.column==e){return true
}if(this.editmode==="selectedrow"){if(this.editcell.row==m){return
}}var d=this.endcelledit(this.editcell.row,this.editcell.column,false,true,false);
if(false==d){return
}}var h=f.columntype=="checkbox"||f.columntype=="button";
this.host.removeClass("jqx-disableselect");
this.content.removeClass("jqx-disableselect");
if(f.editable){if(f.cellbeginedit){var j=this.getcell(m,e);
var l=f.cellbeginedit(m,e,f.columntype,j!=null?j.value:null);
if(l==false){return
}}var i=this.getrowvisibleindex(m);
this.editcell=this.getcell(m,e);
if(this.editcell){this.editcell.visiblerowindex=i;
if(!this.editcell.editing){if(!h){this.editcell.editing=true
}this.editcell.columntype=f.columntype;
this.editcell.defaultvalue=k;
if(f.defaultvalue!=undefined){this.editcell.defaultvalue=f.defaultvalue
}this.editcell.init=true;
if(f.columntype!="checkbox"&&this.editmode!="selectedrow"){this._raiseEvent(17,{rowindex:m,datafield:f.datafield,value:this.editcell.value,columntype:f.columntype})
}a.data(document.body,"jqxgrid.edit",this.element.id);
if(!h){var b=this.getrowvisibleindex(m);
if(g!==false){this.ensurecellvisible(b,f.datafield)
}if(c!==false){this._renderrows(this.virtualsizeinfo)
}}if(this.editcell){this.editcell.init=false;
return true
}}}}else{if(!this.editcell){return
}this.editcell.editor=null;
this.editcell.editing=false;
if(c!==false){this._renderrows(this.virtualsizeinfo)
}this.editcell=null
}},getScrollTop:function(){if(this._py){return pageYOffset
}this._py=typeof pageYOffset!="undefined";
if(this._py){return pageYOffset
}else{var c=document.body;
var b=document.documentElement;
b=(b.clientHeight)?b:c;
return b.scrollTop
}},getScrollLeft:function(){if(typeof pageXOffset!="undefined"){return pageXOffset
}else{var c=document.body;
var b=document.documentElement;
b=(b.clientHeight)?b:c;
return b.scrollLeft
}},endcelledit:function(m,s,o,k,t){if(m==undefined||s==undefined){if(this.editcell){m=this.editcell.row;
s=this.editcell.column
}if(o==undefined){o=true
}}if(!this.editcell){return
}var j=this.getcolumn(s);
var h=this;
if(h.editmode==="selectedrow"){this.endrowedit(m,o);
return
}var g=function(){if(t!=false){if(h.isTouchDevice()){return
}if(!h.isNestedGrid){var u=h.getScrollTop();
var w=h.getScrollLeft();
try{h.element.focus();
h.content.focus();
if(u!=h.getScrollTop()){window.scrollTo(w,u)
}setTimeout(function(){h.element.focus();
h.content.focus();
if(u!=h.getScrollTop()){window.scrollTo(w,u)
}},10)
}catch(v){}}}};
if(j.columntype=="checkbox"||j.columntype=="button"){if(this.editcell){this.editcell.editor=null;
this.editcell.editing=false;
this.editcell=null
}return true
}var n=this._geteditorvalue(j);
var l=function(v){v._hidecelleditor();
if(j.cellendedit){j.cellendedit(m,s,j.columntype,v.editcell.value,n)
}v.editchar=null;
if(j.displayfield!=j.datafield){var u=v.getcellvalue(v.editcell.row,j.displayfield);
var w=v.editcell.value;
oldvalue={value:w,label:u}
}else{oldvalue=v.editcell.value
}v._raiseEvent(18,{rowindex:m,datafield:s,displayfield:j.displayfield,oldvalue:n,value:n,columntype:j.columntype});
v.editcell.editor=null;
v.editcell.editing=false;
v.editcell=null;
if(k||k==undefined){v._renderrows(v.virtualsizeinfo)
}g();
if(!v.enablebrowserselection){v.host.addClass("jqx-disableselect");
v.content.addClass("jqx-disableselect")
}};
if(o){l(this);
return false
}if(this.validationpopup){this.validationpopup.hide();
this.validationpopuparrow.hide()
}if(j.cellvaluechanging){var b=j.cellvaluechanging(m,s,j.columntype,this.editcell.value,n);
if(b!=undefined){n=b
}}if(j.validation){var i=this.getcell(m,s);
try{var c=j.validation(i,n);
var q=this.gridlocalization.validationstring;
if(c.message!=undefined){q=c.message
}var r=typeof c=="boolean"?c:c.result;
if(!r){if(c.showmessage==undefined||c.showmessage==true){this._showvalidationpopup(m,s,q)
}this.editcell.validated=false;
return false
}}catch(e){this._showvalidationpopup(m,s,this.gridlocalization.validationstring);
this.editcell.validated=false;
return false
}}if(j.displayfield!=j.datafield){var p=this.getcellvalue(this.editcell.row,j.displayfield);
var d=this.editcell.value;
oldvalue={value:d,label:p}
}else{oldvalue=this.editcell.value
}if(j.cellendedit){var f=j.cellendedit(m,s,j.columntype,this.editcell.value,n);
if(f==false){this._raiseEvent(18,{rowindex:m,datafield:s,displayfield:j.displayfield,oldvalue:oldvalue,value:oldvalue,columntype:j.columntype});
l(this);
return false
}}this._raiseEvent(18,{rowindex:m,datafield:s,displayfield:j.displayfield,oldvalue:oldvalue,value:n,columntype:j.columntype});
this._hidecelleditor(false);
if(this.editcell!=undefined){this.editcell.editor=null;
this.editcell.editing=false
}this.editcell=null;
this.editchar=null;
this.setcellvalue(m,s,n,k);
if(!this.enablebrowserselection){this.host.addClass("jqx-disableselect");
this.content.addClass("jqx-disableselect")
}if(!a.jqx.browser.msie){g()
}a.data(document.body,"jqxgrid.edit","");
return true
},beginrowedit:function(e){var d=this;
var f=-1;
d._oldselectedrow=e;
this._cellscache=new Array();
var c=false;
if(this.editmode!="selectedrow"){c=true
}if(c){var b=this.editmode;
this.editmode="selectedrow"
}a.each(this.columns.records,function(h,i){if(d.editable&&this.editable){var g=d.getcell(e,this.datafield);
d.begincelledit(e,this.datafield,null,false,false);
d._raiseEvent(17,{rowindex:e,datafield:this.datafield,value:g.value,columntype:this.columntype})
}});
if(d.editcell){d.editcell.init=true
}this._renderrows(this.virtualsizeinfo);
if(c){this.editmode=b
}},endrowedit:function(x,h){var C=this;
if(!this.editcell){return false
}if(this.editcell.editor==undefined){return false
}var z=function(){if(focus!=false){if(C.isTouchDevice()){return
}if(!C.isNestedGrid){var E=C.getScrollTop();
var i=C.getScrollLeft();
try{C.element.focus();
C.content.focus();
if(E!=C.getScrollTop()){window.scrollTo(i,E)
}setTimeout(function(){C.element.focus();
C.content.focus();
if(E!=C.getScrollTop()){window.scrollTo(i,E)
}},10)
}catch(F){}}}};
var B=false;
if(this.editmode!="selectedrow"){B=true
}if(B){var u=this.editmode;
this.editmode="selectedrow"
}var e=false;
var p={};
if(this.validationpopup){this.validationpopup.hide();
this.validationpopuparrow.hide()
}for(var l=0;
l<this.columns.records.length;
l++){var D=this.columns.records[l];
if(!D.editable){continue
}if(D.hidden){continue
}if(D.columntype=="checkbox"){continue
}var A=this._geteditorvalue(D);
var t=function(F){F._hidecelleditor();
var E=F.getcellvalue(F.editcell.row,D.displayfield);
if(D.cellendedit){D.cellendedit(x,r,D.columntype,E,A)
}F.editchar=null;
if(D.displayfield!=D.datafield){var i=F.getcellvalue(F.editcell.row,D.displayfield);
var G=E;
m={value:G,label:i}
}else{m=E
}F._raiseEvent(18,{rowindex:x,datafield:r,displayfield:D.displayfield,oldvalue:E,value:E,columntype:D.columntype});
F.editcell.editing=false
};
if(h){t(this);
continue
}if(D.cellvaluechanging){var m=this.getcellvalue(this.editcell.row,D.displayfield);
var s=D.cellvaluechanging(x,r,D.columntype,m,A);
if(s!=undefined){A=s
}}var r=D.datafield;
if(D.validation){var y=this.getcell(x,D.datafield);
try{var q=D.validation(y,A);
var o=this.gridlocalization.validationstring;
if(q.message!=undefined){o=q.message
}var b=typeof q=="boolean"?q:q.result;
if(!b){if(q.showmessage==undefined||q.showmessage==true){this._showvalidationpopup(x,r,o)
}e=true;
this.editcell[D.datafield].validated=false;
continue
}}catch(w){this._showvalidationpopup(x,r,this.gridlocalization.validationstring);
this.editcell[D.datafield].validated=false;
e=true;
continue
}}if(D.displayfield!=D.datafield){var n=this.getcellvalue(this.editcell.row,D.displayfield);
var g=this.editcell.value;
m={value:g,label:n}
}else{m=this.getcellvalue(this.editcell.row,D.displayfield)
}p[D.datafield]={newvalue:A,oldvalue:m}
}var v={};
var d={};
if(!e){this._hidecelleditor(false);
for(var l=0;
l<this.columns.records.length;
l++){var D=this.columns.records[l];
var r=D.datafield;
if(D.hidden){continue
}if(!D.editable){continue
}if(D.columntype=="checkbox"){var A=this.getcellvalue(x,D.displayfield);
this._raiseEvent(18,{rowindex:x,datafield:D.datafield,displayfield:D.displayfield,oldvalue:A,value:A,columntype:D.columntype});
continue
}if(!p[D.datafield]){continue
}var A=p[D.datafield].newvalue;
var m=p[D.datafield].oldvalue;
if(D.cellendedit){var k=D.cellendedit(x,r,D.columntype,m,A);
if(k==false){this._raiseEvent(18,{rowindex:x,datafield:r,displayfield:D.displayfield,oldvalue:m,value:m,columntype:D.columntype});
t(this);
continue
}}if(!this.source.updaterow){this._raiseEvent(18,{rowindex:x,datafield:D.datafield,displayfield:D.displayfield,oldvalue:m,value:A,columntype:D.columntype})
}v[D.datafield]=A;
d[D.datafield]=m
}var f=this.getrowid(x);
var c=this.getrowdata(x);
a.each(v,function(E,i){if(i&&i.label!=undefined){var F=C.getcolumn(E);
c[F.displayfield]=i.label;
c[F.datafield]=i.value
}else{c[E]=i
}});
if(!this.enablebrowserselection){this.host.addClass("jqx-disableselect");
this.content.addClass("jqx-disableselect")
}a.data(document.body,"jqxgrid.edit","");
this.editcell=null;
this.editchar=null;
if(this.source.updaterow){var j=false;
var C=this;
var b=function(i){var G=C.source.updaterow;
C.source.updaterow=null;
if(false==i){a.each(d,function(I,K){if(K&&K.label!=undefined){var J=C.getcolumn(I);
c[J.displayfield]=K.label;
c[J.datafield]=K.value
}else{c[I]=K
}});
C.updaterow(f,c)
}else{C.updaterow(f,c)
}for(var F=0;
F<C.columns.records.length;
F++){var H=C.columns.records[F];
var E=H.datafield;
C._raiseEvent(18,{rowindex:x,datafield:H.datafield,displayfield:H.displayfield,oldvalue:d[H.datafield],value:c[H.displayfield],columntype:H.columntype})
}C.source.updaterow=G
};
try{j=this.source.updaterow(f,c,b);
if(j==undefined){j=true
}}catch(w){j=false;
return
}}else{this.updaterow(f,c);
this._renderrows(this.virtualsizeinfo)
}}if(B){this.editmode=u
}return e
},_selection:function(b){if("selectionStart" in b[0]){var g=b[0];
var h=g.selectionEnd-g.selectionStart;
return{start:g.selectionStart,end:g.selectionEnd,length:h,text:g.value}
}else{var d=document.selection.createRange();
if(d==null){return{start:0,end:g.value.length,length:0}
}var c=b[0].createTextRange();
var f=c.duplicate();
c.moveToBookmark(d.getBookmark());
f.setEndPoint("EndToStart",c);
var h=d.text.length;
return{start:f.text.length,end:f.text.length+d.text.length,length:h,text:d.text}
}},_setSelection:function(e,b,d){if("selectionStart" in d[0]){d[0].focus();
d[0].setSelectionRange(e,b)
}else{var c=d[0].createTextRange();
c.collapse(true);
c.moveEnd("character",b);
c.moveStart("character",e);
c.select()
}},findRecordIndex:function(g,c,b){var b=b;
if(c){var e=b.length;
for(var h=0;
h<e;
h++){var f=b[h];
var d=f.label;
if(g==d){return h
}}}return -1
},_destroyeditors:function(){var b=this;
if(!this.columns.records){return
}a.each(this.columns.records,function(f,j){var c=a.trim(this.datafield).split(" ").join("");
switch(this.columntype){case"dropdownlist":var g=b.editors["dropdownlist_"+c];
if(g){g.jqxDropDownList("destroy");
b.editors["dropdownlist_"+c]=null
}break;
case"combobox":var k=b.editors["combobox_"+c];
if(k){k.jqxComboBox("destroy");
b.editors["combobox_"+c]=null
}break;
case"datetimeinput":var d=b.editors["datetimeinput_"+this.datafield];
if(d){d.jqxDateTimeInput("destroy");
b.editors["datetimeinput_"+c]=null
}break;
case"numberinput":var e=b.editors["numberinput_"+c];
if(e){e.jqxNumberInput("destroy");
b.editors["numberinput_"+c]=null
}break;
case"custom":case"template":if(this.destroycustomeditor){this.destroycustomeditor(b.editors["customeditor_"+c]);
b.editors["customeditor_"+c]=null
}if(this.destrotemplateeditor){var m=b.getrows.length();
for(var l=0;
l<m;
l++){this.destrotemplateeditor(b.editors["templateeditor_"+c+"_"+l]);
b.editors["templateeditor_"+c+"_"+l]=null
}}break;
case"textbox":default:var h=b.editors["textboxeditor_"+c];
if(h){b.removeHandler(h,"keydown");
b.editors["textbox_"+c]=null
}break
}});
b.editors=new Array()
},_showcelleditor:function(N,d,L,f,t){if(L==undefined){return
}if(this.editcell==null){return
}if(d.columntype=="checkbox"&&d.editable){return
}if(t==undefined){t=true
}if(this.editmode=="selectedrow"){this.editchar="";
t=false
}var i=d.datafield;
var e=a(L);
var n=this;
var z=this.editcell.editor;
var B=this.getcellvalue(N,i);
var A=this.getcelltext(N,i);
var c=this.hScrollInstance;
var q=c.value;
var K=parseInt(q);
var H=this.columns.records.indexOf(d);
this.editcell.element=L;
if(this.editcell.validated==false){this._showvalidationpopup()
}var l=function(O){if(n.hScrollInstance.isScrolling()||n.vScrollInstance.isScrolling()){return
}if(!t){return
}if(n.isTouchDevice()){return
}O.focus();
if(n.gridcontent[0].scrollTop!=0){n.scrolltop(Math.abs(n.gridcontent[0].scrollTop));
n.gridcontent[0].scrollTop=0
}if(n.gridcontent[0].scrollLeft!=0){n.gridcontent[0].scrollLeft=0
}};
switch(d.columntype){case"dropdownlist":if(this.host.jqxDropDownList){L.innerHTML="";
var y=a.trim(d.datafield).split(" ").join("");
var u=a.trim(d.displayfield).split(" ").join("");
if(y.indexOf(".")!=-1){y=y.replace(".","")
}if(u.indexOf(".")!=-1){u=u.replace(".","")
}var h=this.editors["dropdownlist_"+y];
z=h==undefined?a("<div style='border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='dropdownlisteditor'></div>"):h;
z.css("top",a(L).parent().position().top);
if(this.oldhscroll){z.css("left",-K+parseInt(a(L).position().left))
}else{z.css("left",parseInt(a(L).position().left))
}if(d.pinned){z.css("left",K+parseInt(a(L).position().left))
}if(h==undefined){z.prependTo(this.table);
z[0].id="dropdownlisteditor"+this.element.id+y;
var k=this.source._source?true:false;
var r=null;
if(!k){r=new a.jqx.dataAdapter(this.source,{autoBind:false,uniqueDataFields:[u],async:false,autoSort:true,autoSortField:u})
}else{var g={localdata:this.source.records,datatype:this.source.datatype,async:false};
r=new a.jqx.dataAdapter(g,{autoBind:false,async:false,uniqueDataFields:[u],autoSort:true,autoSortField:u})
}var o=!d.createeditor?true:false;
z.jqxDropDownList({enableBrowserBoundsDetection:true,keyboardSelection:false,source:r,rtl:this.rtl,autoDropDownHeight:o,theme:this.theme,width:e.width()-2,height:e.height()-2,displayMember:u,valueMember:i});
this.editors["dropdownlist_"+y]=z;
if(d.createeditor){d.createeditor(N,B,z)
}}if(d._requirewidthupdate){z.jqxDropDownList({width:e.width()-2})
}var J=z.jqxDropDownList("listBox").visibleItems;
if(!d.createeditor){if(J.length<8){z.jqxDropDownList("autoDropDownHeight",true)
}else{z.jqxDropDownList("autoDropDownHeight",false)
}}var B=this.getcellvalue(N,u);
var w=this.findRecordIndex(B,u,J);
if(f){if(B!=""){z.jqxDropDownList("selectIndex",w,true)
}else{z.jqxDropDownList("selectIndex",-1)
}}if(!this.editcell){return
}if(this.editcell.defaultvalue!=undefined){z.jqxDropDownList("selectIndex",this.editcell.defaultvalue,true)
}if(t){z.jqxDropDownList("focus")
}}break;
case"combobox":if(this.host.jqxComboBox){L.innerHTML="";
var y=a.trim(d.datafield).split(" ").join("");
var u=a.trim(d.displayfield).split(" ").join("");
if(y.indexOf(".")!=-1){y=y.replace(".","")
}if(u.indexOf(".")!=-1){u=u.replace(".","")
}var M=this.editors["combobox_"+y];
z=M==undefined?a("<div style='border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='comboboxeditor'></div>"):M;
z.css("top",a(L).parent().position().top);
if(this.oldhscroll){z.css("left",-K+parseInt(a(L).position().left))
}else{z.css("left",parseInt(a(L).position().left))
}if(d.pinned){z.css("left",K+parseInt(a(L).position().left))
}if(M==undefined){z.prependTo(this.table);
z[0].id="comboboxeditor"+this.element.id+y;
var k=this.source._source?true:false;
var r=null;
if(!k){r=new a.jqx.dataAdapter(this.source,{autoBind:false,uniqueDataFields:[u],async:false,autoSort:true,autoSortField:u})
}else{var g={localdata:this.source.records,datatype:this.source.datatype,async:false};
r=new a.jqx.dataAdapter(g,{autoBind:false,async:false,uniqueDataFields:[u],autoSort:true,autoSortField:u})
}var o=!d.createeditor?true:false;
z.jqxComboBox({enableBrowserBoundsDetection:true,keyboardSelection:false,source:r,rtl:this.rtl,autoDropDownHeight:o,theme:this.theme,width:e.width()-2,height:e.height()-2,displayMember:u,valueMember:i});
z.removeAttr("tabindex");
z.find("div").removeAttr("tabindex");
this.editors["combobox_"+y]=z;
if(d.createeditor){d.createeditor(N,B,z)
}}if(d._requirewidthupdate){z.jqxComboBox({width:e.width()-2})
}var J=z.jqxComboBox("listBox").visibleItems;
if(!d.createeditor){if(J.length<8){z.jqxComboBox("autoDropDownHeight",true)
}else{z.jqxComboBox("autoDropDownHeight",false)
}}var B=this.getcellvalue(N,u);
var w=this.findRecordIndex(B,u,J);
if(f){if(B!=""){z.jqxComboBox("selectIndex",w,true);
z.jqxComboBox("val",B)
}else{z.jqxComboBox("selectIndex",-1);
z.jqxComboBox("val",B)
}}if(!this.editcell){return
}if(this.editcell.defaultvalue!=undefined){z.jqxComboBox("selectIndex",this.editcell.defaultvalue,true)
}if(this.editchar&&this.editchar.length>0){z.jqxComboBox("input").val(this.editchar)
}if(t){setTimeout(function(){l(z.jqxComboBox("input"));
z.jqxComboBox("_setSelection",0,0);
if(n.editchar){z.jqxComboBox("_setSelection",1,1);
n.editchar=null
}else{var O=z.jqxComboBox("input").val();
z.jqxComboBox("_setSelection",0,O.length)
}},10)
}}break;
case"datetimeinput":if(this.host.jqxDateTimeInput){L.innerHTML="";
var y=a.trim(d.datafield).split(" ").join("");
if(y.indexOf(".")!=-1){y=y.replace(".","")
}var p=this.editors["datetimeinput_"+y];
z=p==undefined?a("<div style='border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='datetimeeditor'></div>"):p;
z.show();
z.css("top",a(L).parent().position().top);
if(this.oldhscroll){z.css("left",-K+parseInt(a(L).position().left))
}else{z.css("left",parseInt(a(L).position().left))
}if(d.pinned){z.css("left",K+parseInt(a(L).position().left))
}if(p==undefined){z.prependTo(this.table);
z[0].id="datetimeeditor"+this.element.id+y;
var b={calendar:this.gridlocalization};
z.jqxDateTimeInput({enableBrowserBoundsDetection:true,localization:b,_editor:true,theme:this.theme,rtl:this.rtl,width:e.width(),height:e.height(),formatString:d.cellsformat});
this.editors["datetimeinput_"+y]=z;
if(d.createeditor){d.createeditor(N,B,z)
}}if(d._requirewidthupdate){z.jqxDateTimeInput({width:e.width()-2})
}if(f){if(B!=""&&B!=null){var j=new Date(B);
if(j=="Invalid Date"){if(this.source.getvaluebytype){j=this.source.getvaluebytype(B,{name:d.datafield,type:"date"})
}}z.jqxDateTimeInput("setDate",j)
}else{z.jqxDateTimeInput("setDate",null)
}if(this.editcell.defaultvalue!=undefined){z.jqxDateTimeInput("setDate",this.editcell.defaultvalue)
}}if(t){setTimeout(function(){l(z.jqxDateTimeInput("dateTimeInput"))
},10)
}}break;
case"numberinput":if(this.host.jqxNumberInput){L.innerHTML="";
var y=a.trim(d.datafield).split(" ").join("");
if(y.indexOf(".")!=-1){y=y.replace(".","")
}var I=this.editors["numberinput_"+y];
z=I==undefined?a("<div style='border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='numbereditor'></div>"):I;
z.show();
z.css("top",a(L).parent().position().top);
if(this.oldhscroll){z.css("left",-K+parseInt(a(L).position().left))
}else{z.css("left",parseInt(a(L).position().left))
}if(d.pinned){z.css("left",K+parseInt(a(L).position().left))
}if(I==undefined){z.prependTo(this.table);
z[0].id="numbereditor"+this.element.id+y;
var F="";
var s="left";
var C=2;
if(d.cellsformat){if(d.cellsformat.indexOf("c")!=-1){F=this.gridlocalization.currencysymbol;
s=this.gridlocalization.currencysymbolposition;
if(s=="before"){s="left"
}else{s="right"
}if(d.cellsformat.length>1){C=parseInt(d.cellsformat.substring(1),10)
}}else{if(d.cellsformat.indexOf("p")!=-1){F=this.gridlocalization.percentsymbol;
s="right";
if(d.cellsformat.length>1){C=parseInt(d.cellsformat.substring(1),10)
}}}}else{C=0
}z.jqxNumberInput({decimalSeparator:this.gridlocalization.decimalseparator,decimalDigits:C,inputMode:"simple",theme:this.theme,rtl:this.rtl,width:e.width()-1,height:e.height()-1,spinButtons:true,symbol:F,symbolPosition:s});
this.editors["numberinput_"+y]=z;
if(d.createeditor){d.createeditor(N,B,z)
}}if(d._requirewidthupdate){z.jqxNumberInput({width:e.width()-2})
}if(f){if(B!=""&&B!=null){var G=B;
z.jqxNumberInput("setDecimal",G)
}else{z.jqxNumberInput("setDecimal",0)
}if(this.editcell.defaultvalue!=undefined){z.jqxNumberInput("setDecimal",this.editcell.defaultvalue)
}if(this.editchar&&this.editchar.length>0){var m=parseInt(this.editchar);
if(!isNaN(m)){z.jqxNumberInput("setDecimal",m)
}}if(t){setTimeout(function(){l(z.jqxNumberInput("numberInput"));
z.jqxNumberInput("_setSelectionStart",0);
if(n.editchar){if(d.cellsformat.length>0){z.jqxNumberInput("_setSelectionStart",2)
}else{z.jqxNumberInput("_setSelectionStart",1)
}n.editchar=null
}else{var O=z.jqxNumberInput("spinButtons");
if(O){var P=z.jqxNumberInput("numberInput").val();
n._setSelection(z.jqxNumberInput("numberInput")[0],P.length,P.length)
}else{var P=z.jqxNumberInput("numberInput").val();
n._setSelection(z.jqxNumberInput("numberInput")[0],0,P.length)
}}},10)
}}}break;
case"custom":L.innerHTML="";
var y=a.trim(d.datafield).split(" ").join("");
if(y.indexOf(".")!=-1){y=y.replace(".","")
}var v=this.editors["customeditor_"+y+"_"+N];
z=v==undefined?a("<div style='overflow: hidden; border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='customeditor'></div>"):v;
z.show();
z.css("top",a(L).parent().position().top);
if(this.oldhscroll){z.css("left",-K+parseInt(a(L).position().left))
}else{z.css("left",parseInt(a(L).position().left))
}if(d.pinned){z.css("left",K+parseInt(a(L).position().left))
}if(v==undefined){z.prependTo(this.table);
z[0].id="customeditor"+this.element.id+y+"_"+N;
this.editors["customeditor_"+y+"_"+N]=z;
var x=e.width()-1;
var D=e.height()-1;
z.width(x);
z.height(D);
if(d.createeditor){d.createeditor(N,B,z,A,x,D,this.editchar)
}}if(d._requirewidthupdate){z.width(e.width()-2)
}break;
case"template":L.innerHTML="";
var y=a.trim(d.datafield).split(" ").join("");
if(y.indexOf(".")!=-1){y=y.replace(".","")
}var E=this.editors["templateeditor_"+y];
z=E==undefined?a("<div style='overflow: hidden; border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='templateeditor'></div>"):E;
z.show();
z.css("top",a(L).parent().position().top);
if(this.oldhscroll){z.css("left",-K+parseInt(a(L).position().left))
}else{z.css("left",parseInt(a(L).position().left))
}if(d.pinned){z.css("left",K+parseInt(a(L).position().left))
}if(E==undefined){z.prependTo(this.table);
z[0].id="templateeditor"+this.element.id+y;
this.editors["templateeditor_"+y]=z;
var x=e.width()-1;
var D=e.height()-1;
z.width(x);
z.height(D);
if(d.createeditor){d.createeditor(N,B,z,A,x,D,this.editchar)
}}if(d._requirewidthupdate){z.width(e.width()-2)
}break;
case"textbox":default:L.innerHTML="";
z=this.editors["textboxeditor_"+d.datafield]||a("<input autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='textbox' id='textboxeditor'/>");
z[0].id="textboxeditor"+this.element.id+d.datafield;
z.appendTo(e);
if(this.rtl){z.css("direction","rtl")
}if(f||z[0].className==""){z.addClass(this.toThemeProperty("jqx-input"));
z.addClass(this.toThemeProperty("jqx-widget-content"));
if(this.editchar&&this.editchar.length>0){z.val(this.editchar)
}else{if(d.cellsformat!=""){B=this.getcelltext(N,i)
}if(B==undefined){B=""
}z.val(B)
}if(this.editcell.defaultvalue!=undefined){z.val(this.editcell.defaultvalue)
}z.width(e.width()+1);
z.height(e.height()+1);
if(d.createeditor){d.createeditor(N,B,z)
}if(d.cellsformat!=""){if(d.cellsformat.indexOf("p")!=-1||d.cellsformat.indexOf("c")!=-1||d.cellsformat.indexOf("n")!=-1||d.cellsformat.indexOf("f")!=-1){if(!this.editors["textboxeditor_"+d.datafield]){z.keydown(function(P){var V=P.charCode?P.charCode:P.keyCode?P.keyCode:0;
var S=String.fromCharCode(V);
var T=parseInt(S);
if(isNaN(T)){return true
}if(n._selection(z).length>0){return true
}var R="";
var Q=z.val();
if(d.cellsformat.length>1){var U=parseInt(d.cellsformat.substring(1));
if(isNaN(U)){U=0
}}else{var U=0
}if(U>0){if(Q.indexOf(n.gridlocalization.decimalseparator)!=-1){if(n._selection(z).start>Q.indexOf(n.gridlocalization.decimalseparator)){return true
}}}for(var W=0;
W<Q.length-U;
W++){var O=Q.substring(W,W+1);
if(O.match(/^[0-9]+$/)!=null){R+=O
}}if(R.length>=11){return false
}})
}}}}this.editors["textboxeditor_"+d.datafield]=z;
if(f){if(t){setTimeout(function(){l(z);
if(n.editchar){n._setSelection(z[0],1,1);
n.editchar=null
}else{n._setSelection(z[0],0,z.val().length)
}},25)
}}break
}if(f){if(d.initeditor){d.initeditor(N,B,z,A,this.editchar)
}}if(z){z[0].style.zIndex=1+L.style.zIndex;
if(a.jqx.browser.msie&&a.jqx.browser.version<8){z[0].style.zIndex=1+this.columns.records.length+L.style.zIndex
}z.css("display","block");
this.editcell.editor=z;
if(!this.editcell[i]){this.editcell[i]={};
this.editcell[i].editor=z
}else{this.editcell[i].editor=z
}}if(n.isTouchDevice()){return
}setTimeout(function(){if(n.content){n.content[0].scrollTop=0;
n.content[0].scrollLeft=0
}if(n.gridcontent){n.gridcontent[0].scrollLeft=0;
n.gridcontent[0].scrollTop=0
}},10)
},_setSelection:function(d,g,b){try{if("selectionStart" in d){d.setSelectionRange(g,b)
}else{var c=d.createTextRange();
c.collapse(true);
c.moveEnd("character",b);
c.moveStart("character",g);
c.select()
}}catch(e){var f=e
}},_hideeditors:function(){if(this.editcells!=null){var b=this;
for(var c in this.editcells){b.editcell=b.editcells[c];
b._hidecelleditor()
}}},_hidecelleditor:function(b){if(!this.editcell){return
}if(this.editmode==="selectedrow"){for(var c=0;
c<this.columns.records.length;
c++){var e=this.columns.records[c];
if(this.editcell[e.datafield]&&this.editcell[e.datafield].editor){this.editcell[e.datafield].editor.hide();
var d=this.editcell[e.datafield].editor;
switch(e.columntype){case"dropdownlist":d.jqxDropDownList({closeDelay:0});
d.jqxDropDownList("hideListBox");
d.jqxDropDownList({closeDelay:300});
break;
case"combobox":d.jqxComboBox({closeDelay:0});
d.jqxComboBox("hideListBox");
d.jqxComboBox({closeDelay:300});
break;
case"datetimeinput":if(d.jqxDateTimeInput("isOpened")){d.jqxDateTimeInput({closeDelay:0});
d.jqxDateTimeInput("hideCalendar");
d.jqxDateTimeInput({closeDelay:300})
}break
}}}if(this.validationpopup){this.validationpopup.hide();
this.validationpopuparrow.hide()
}return
}if(this.editcell.columntype=="checkbox"){return
}if(this.editcell.editor){this.editcell.editor.hide();
switch(this.editcell.columntype){case"dropdownlist":this.editcell.editor.jqxDropDownList({closeDelay:0});
this.editcell.editor.jqxDropDownList("hideListBox");
this.editcell.editor.jqxDropDownList({closeDelay:300});
break;
case"combobox":this.editcell.editor.jqxComboBox({closeDelay:0});
this.editcell.editor.jqxComboBox("hideListBox");
this.editcell.editor.jqxComboBox({closeDelay:300});
break;
case"datetimeinput":var f=this.editcell.editor;
if(f.jqxDateTimeInput("isOpened")){f.jqxDateTimeInput({closeDelay:0});
f.jqxDateTimeInput("hideCalendar");
f.jqxDateTimeInput({closeDelay:300})
}break
}}if(this.validationpopup){this.validationpopup.hide();
this.validationpopuparrow.hide()
}if(!this.isNestedGrid){if(b!=false){this.element.focus()
}}},_geteditorvalue:function(h){var n=new String();
if(!this.editcell){return null
}var k=this.editcell.editor;
if(this.editmode=="selectedrow"){if(this.editcell[h.datafield]){var k=this.editcell[h.datafield].editor
}}if(k){switch(h.columntype){case"textbox":default:n=k.val();
if(h.cellsformat!=""){var m="string";
var e=this.source.datafields||((this.source._source)?this.source._source.datafields:null);
if(e){var o="";
a.each(e,function(){if(this.name==h.displayfield){if(this.type){o=this.type
}return false
}});
if(o){m=o
}}var i=m==="number"||m==="float"||m==="int"||m==="integer";
var f=m==="date"||m==="time";
if(i||(m==="string"&&(h.cellsformat.indexOf("p")!=-1||h.cellsformat.indexOf("c")!=-1||h.cellsformat.indexOf("n")!=-1||h.cellsformat.indexOf("f")!=-1))){if(n===""&&h.nullable){return""
}if(n.indexOf(this.gridlocalization.currencysymbol)>-1){n=n.replace(this.gridlocalization.currencysymbol,"")
}var l=function(v,t,u){var r=v;
if(t==u){return v
}var s=r.indexOf(t);
while(s!=-1){r=r.replace(t,u);
s=r.indexOf(t)
}return r
};
n=l(n,this.gridlocalization.thousandsseparator,"");
n=n.replace(this.gridlocalization.decimalseparator,".");
if(n.indexOf(this.gridlocalization.percentsymbol)>-1){n=n.replace(this.gridlocalization.percentsymbol,"")
}var d="";
for(var q=0;
q<n.length;
q++){var b=n.substring(q,q+1);
if(b==="-"){d+="-"
}if(b==="."){d+="."
}if(b.match(/^[0-9]+$/)!=null){d+=b
}}n=d;
n=n.replace(/ /g,"");
n=new Number(n);
if(isNaN(n)){n=""
}}if(f||(m==="string"&&(h.cellsformat.indexOf("H")!=-1||h.cellsformat.indexOf("m")!=-1||h.cellsformat.indexOf("M")!=-1||h.cellsformat.indexOf("y")!=-1||h.cellsformat.indexOf("h")!=-1||h.cellsformat.indexOf("d")!=-1))){if(n===""&&h.nullable){return""
}var c=n;
n=new Date(n);
if(n=="Invalid Date"||n==null){if(a.jqx.dataFormat){n=a.jqx.dataFormat.tryparsedate(c,this.gridlocalization)
}if(n=="Invalid Date"||n==null){n=""
}}}}if(h.displayfield!=h.datafield){n={label:n,value:n}
}break;
case"checkbox":if(k.jqxCheckBox){n=k.jqxCheckBox("checked")
}break;
case"datetimeinput":if(k.jqxDateTimeInput){k.jqxDateTimeInput({isEditing:false});
k.jqxDateTimeInput("_validateValue");
n=k.jqxDateTimeInput("getDate");
if(n==null){return null
}n=new Date(n.toString());
if(h.displayfield!=h.datafield){n={label:n,value:n}
}}break;
case"dropdownlist":if(k.jqxDropDownList){var g=k.jqxDropDownList("selectedIndex");
var p=k.jqxDropDownList("listBox").getVisibleItem(g);
if(h.displayfield!=h.datafield){if(p){n={label:p.label,value:p.value}
}else{n=""
}}else{if(p){n=p.label
}else{n=""
}}if(n==null){n=""
}}break;
case"combobox":if(k.jqxComboBox){n=k.jqxComboBox("val");
if(h.displayfield!=h.datafield){var p=k.jqxComboBox("getSelectedItem");
if(p!=null){n={label:p.label,value:p.value}
}}if(n==null){n=""
}}break;
case"numberinput":if(k.jqxNumberInput){if(this.touchdevice){k.jqxNumberInput("_doTouchHandling")
}var j=k.jqxNumberInput("getDecimal");
n=new Number(j);
n=parseFloat(n);
if(isNaN(n)){n=0
}if(h.displayfield!=h.datafield){n={label:n,value:n}
}}break
}if(h.geteditorvalue){if(this.editmode=="selectedrow"){n=h.geteditorvalue(this.editcell.row,this.getcellvalue(this.editcell.row,h.datafield),k)
}else{n=h.geteditorvalue(this.editcell.row,this.editcell.value,k)
}}}return n
},hidevalidationpopups:function(){if(this.popups){a.each(this.popups,function(){this.validation.remove();
this.validationrow.remove()
});
this.popups=new Array()
}if(this.validationpopup){this.validationpopuparrow.hide();
this.validationpopup.hide()
}},showvalidationpopup:function(k,n,l){if(l==undefined){var l=this.gridlocalization.validationstring
}var j=a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");
var i=a("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
j.html(l);
i.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
j.addClass(this.toThemeProperty("jqx-grid-validation"));
j.addClass(this.toThemeProperty("jqx-rc-all"));
j.prependTo(this.table);
i.prependTo(this.table);
var c=this.hScrollInstance;
var e=c.value;
var p=parseInt(e);
var g=this.getcolumn(n).uielement;
var f=a(this.hittestinfo[k].visualrow);
j.css("top",parseInt(f.position().top)+30+"px");
var b=parseInt(j.css("top"));
i.css("top",b-12);
i.removeClass();
i.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
var o=false;
if(b>=this._gettableheight()){i.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
i.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));
b=parseInt(f.position().top)-this.rowsheight-5;
if(b<0){b=0;
this.validationpopuparrow.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));
o=true
}j.css("top",b+"px");
i.css("top",b+j.outerHeight()-9)
}var h=-p+parseInt(a(g).position().left);
i.css("left",p+h+30);
var m=j.width();
if(m+h>this.host.width()-20){var d=m+h-this.host.width()+40;
h-=d
}if(!o){j.css("left",p+h)
}else{j.css("left",p+parseInt(a(g).position().left)-j.outerWidth())
}j.show();
i.show();
if(!this.popups){this.popups=new Array()
}this.popups[this.popups.length]={validation:j,validationrow:i}
},_showvalidationpopup:function(p,e,q){var c=this.editcell;
var k=this.editcell.editor;
if(this.editmode=="selectedrow"){var c=this.editcell[e];
if(c&&c.editor){k=c.editor;
c.element=k
}}if(!k){return
}if(this.validationpopup&&a.jqx.isHidden(this.validationpopup)){if(this.validationpopup.remove){this.validationpopup.remove();
this.validationpopuparrow.remove()
}this.validationpopup=null;
this.validationpopuparrow=null;
if(e===undefined&&q===undefined&&this.editors&&this.editors.length===0){return
}}if(!this.validationpopup){var n=a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");
var m=a("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
n.html(q);
m.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
n.addClass(this.toThemeProperty("jqx-grid-validation"));
n.addClass(this.toThemeProperty("jqx-rc-all"));
n.prependTo(this.table);
m.prependTo(this.table);
this.validationpopup=n;
this.validationpopuparrow=m
}else{this.validationpopup.html(q)
}var h=this.hScrollInstance;
var j=h.value;
var g=parseInt(j);
this.validationpopup.css("top",parseInt(a(c.element).parent().position().top)+(this.rowsheight+5)+"px");
var b=parseInt(this.validationpopup.css("top"));
this.validationpopuparrow.css("top",b-12);
this.validationpopuparrow.removeClass();
this.validationpopuparrow.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
var o=this._gettableheight();
var f=false;
if(b>=o){this.validationpopuparrow.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
this.validationpopuparrow.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));
b=parseInt(a(c.element).parent().position().top)-this.rowsheight-5;
if(b<0){b=0;
this.validationpopuparrow.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));
f=true
}this.validationpopup.css("top",b+"px");
this.validationpopuparrow.css("top",b+this.validationpopup.outerHeight()-9)
}var l=-g+parseInt(a(c.element).position().left);
this.validationpopuparrow.css("left",g+l+30);
var d=this.validationpopup.width();
if(d+l>this.host.width()-20){var i=d+l-this.host.width()+40;
l-=i
}if(!f){this.validationpopup.css("left",g+l)
}else{this.validationpopup.css("left",g+parseInt(a(c.element).position().left)-this.validationpopup.outerWidth())
}this.validationpopup.show();
this.validationpopuparrow.show()
}})
})(jQuery);