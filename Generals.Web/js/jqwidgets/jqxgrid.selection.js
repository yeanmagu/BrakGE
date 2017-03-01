(function(a){a.extend(a.jqx._jqxGrid.prototype,{selectallrows:function(){this._trigger=false;
var d=this.virtualmode?this.dataview.totalrecords:this.dataview.loadedrecords.length;
this.selectedrowindexes=new Array();
var e=this.dataview.loadedrecords;
for(var c=0;
c<d;
c++){var f=e[c];
if(!f){this.selectedrowindexes[c]=c;
continue
}var b=this.getboundindex(f);
this.selectedrowindexes[c]=b
}if(this.selectionmode=="checkbox"&&!this._checkboxcolumnupdating){if(this._checkboxcolumn){this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:true})
}}this._renderrows(this.virtualsizeinfo);
this._trigger=true;
if(this.selectionmode=="checkbox"){this._raiseEvent(2,{rowindex:this.selectedrowindexes})
}},unselectallrows:function(){this._trigger=false;
var d=this.virtualmode?this.dataview.totalrecords:this.dataview.loadedrecords.length;
this.selectedrowindexes=new Array();
var e=this.dataview.loadedrecords;
for(var c=0;
c<d;
c++){var f=e[c];
if(!f){this.selectedrowindexes[c]=c;
continue
}var b=this.getboundindex(f);
this.selectedrowindexes[c]=-1
}if(this.selectionmode=="checkbox"&&!this._checkboxcolumnupdating){if(this._checkboxcolumn){this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:true})
}}this._renderrows(this.virtualsizeinfo);
this._trigger=true;
if(this.selectionmode=="checkbox"){this._raiseEvent(2,{rowindex:this.selectedrowindexes})
}},selectrow:function(b,c){this._applyrowselection(b,true,c);
if(c!==false){this._updatecheckboxselection()
}},_updatecheckboxselection:function(){if(this.selectionmode=="checkbox"){var d=this.getrows();
if(d&&this._checkboxcolumn){if(d.length===0){this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:false});
return
}var c=d.length;
if(this.virtualmode){c=this.source._source.totalrecords
}var b=this.selectedrowindexes.length;
if(b===c){this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:true})
}else{if(b===0){this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:false})
}else{this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:null})
}}}}},unselectrow:function(b,c){this._applyrowselection(b,false,c);
if(c!==false){this._updatecheckboxselection()
}},selectcell:function(c,b){this._applycellselection(c,b,true)
},unselectcell:function(c,b){this._applycellselection(c,b,false)
},clearselection:function(c,d){this._trigger=false;
this.selectedrowindex=-1;
this._oldselectedcell=null;
if(d!==false){for(var b=0;
b<this.selectedrowindexes.length;
b++){this._raiseEvent(3,{rowindex:this.selectedrowindexes[b]})
}}this.selectedrowindexes=new Array();
this.selectedcells=new Array();
if(this.selectionmode=="checkbox"&&!this._checkboxcolumnupdating){this._checkboxcolumn.checkboxelement.jqxCheckBox({checked:false})
}if(false===c){this._trigger=true;
return
}this._renderrows(this.virtualsizeinfo);
this._trigger=true;
if(this.selectionmode=="checkbox"){this._raiseEvent(3,{rowindex:this.selectedrowindexes})
}},getselectedrowindex:function(){if(this.selectedrowindex==-1){for(var b=0;
b<this.selectedrowindexes.length;
b++){return this.selectedrowindexes[b]
}}return this.selectedrowindex
},getselectedrowindexes:function(){return this.selectedrowindexes
},getselectedcell:function(){if(!this.selectedcell){return null
}var b=this.selectedcell;
b.row=this.selectedcell.rowindex;
b.column=this.selectedcell.datafield;
b.value=this.getcellvalue(b.row,b.column);
return b
},getselectedcells:function(){var b=new Array();
for(obj in this.selectedcells){b[b.length]=this.selectedcells[obj]
}return b
},_getcellsforcopypaste:function(){var e=new Array();
if(this.selectionmode.indexOf("cell")==-1){var h=this.selectedrowindexes;
for(var d=0;
d<h.length;
d++){var c=h[d];
for(var f=0;
f<this.columns.records.length;
f++){var g=c+"_"+this.columns.records[f].datafield;
var b={rowindex:c,datafield:this.columns.records[f].datafield};
e.push(b)
}}}return e
},deleteselection:function(){var d=this;
var f=d.getselectedcells();
if(this.selectionmode.indexOf("cell")==-1){f=this._getcellsforcopypaste()
}if(f!=null&&f.length>0){for(var e=0;
e<f.length;
e++){var b=f[e];
var g=d.getcolumn(b.datafield);
var h=d.getcellvalue(b.rowindex,b.datafield);
if(!g){continue
}if(h!==""){var c=null;
if(g.columntype=="checkbox"){if(!g.threestatecheckbox){c=false
}}d._raiseEvent(17,{rowindex:b.rowindex,datafield:b.datafield,value:h});
if(e==f.length-1){d.setcellvalue(b.rowindex,b.datafield,c,true);
if(g.displayfield!=g.datafield){d.setcellvalue(b.rowindex,g.displayfield,c,true)
}}else{d.setcellvalue(b.rowindex,b.datafield,c,false);
if(g.displayfield!=g.datafield){d.setcellvalue(b.rowindex,g.displayfield,c,true)
}}d._raiseEvent(18,{rowindex:b.rowindex,datafield:b.datafield,oldvalue:h,value:c})
}}this.dataview.updateview();
this._renderrows(this.virtualsizeinfo)
}},copyselection:function(){var f="";
var l=this;
this.clipboardselection={};
this._clipboardselection=[];
var k=l.getselectedcells();
if(this.selectionmode.indexOf("cell")==-1){k=this._getcellsforcopypaste()
}if(k!=null&&k.length>0){var m=999999999999999;
var j=-1;
for(var d=0;
d<k.length;
d++){var g=k[d];
var b=l.getcolumn(g.datafield);
if(b!=null){var h=l.getcelltext(g.rowindex,g.datafield);
if(!this.clipboardselection[g.rowindex]){this.clipboardselection[g.rowindex]={}
}this.clipboardselection[g.rowindex][g.datafield]=h;
m=Math.min(m,g.rowindex);
j=Math.max(j,g.rowindex)
}}for(var c=m;
c<=j;
c++){var e=0;
this._clipboardselection[this._clipboardselection.length]=new Array();
if(this.clipboardselection[c]!=undefined){a.each(this.clipboardselection[c],function(i,n){if(e>0){f+="\t"
}var o=n;
if(n==null){o=""
}l._clipboardselection[l._clipboardselection.length-1][e]=o;
e++;
f+=o
})
}if(c<j){f+="\n"
}}}this.clipboardselectedtext=f;
return f
},pasteselection:function(){var p=this.getselectedcells();
if(this.selectionmode.indexOf("cell")==-1){p=this._getcellsforcopypaste()
}if(p!=null&&p.length>0){var o=p[0].rowindex;
var g=p[0].datafield;
var l=this._getcolumnindex(g);
var k=0;
this.selectedrowindexes=new Array();
this.selectedcells=new Array();
if(!this._clipboardselection){return
}for(var d=0;
d<this._clipboardselection.length;
d++){for(var j=0;
j<this._clipboardselection[d].length;
j++){var h=this.getcolumnat(l+j);
if(!h){continue
}var m=this.getcell(o+d,h.datafield);
var e=null;
e=this._clipboardselection[d][j];
if(e!=null){if(h.cellsformat){if(h.cellsformat.indexOf("p")!=-1||h.cellsformat.indexOf("c")!=-1||h.cellsformat.indexOf("n")!=-1||h.cellsformat.indexOf("f")!=-1){if(e.indexOf(this.gridlocalization.currencysymbol)>-1){e=e.replace(this.gridlocalization.currencysymbol,"")
}var i=function(t,r,s){var c=t;
if(r==s){return t
}var q=c.indexOf(r);
while(q!=-1){c=c.replace(r,s);
q=c.indexOf(r)
}return c
};
e=i(e,this.gridlocalization.thousandsseparator,"");
e=e.replace(this.gridlocalization.decimalseparator,".");
if(e.indexOf(this.gridlocalization.percentsymbol)>-1){e=e.replace(this.gridlocalization.percentsymbol,"")
}var f="";
for(var n=0;
n<e.length;
n++){var b=e.substring(n,n+1);
if(b==="-"){f+="-"
}if(b==="."){f+="."
}if(b.match(/^[0-9]+$/)!=null){f+=b
}}e=f;
e=e.replace(/ /g,"");
e=new Number(e);
if(isNaN(e)){e=""
}}}this._raiseEvent(17,{rowindex:o+d,datafield:m.datafield,value:e});
this.setcellvalue(m.row,m.column,e,false);
this._raiseEvent(18,{rowindex:o+d,datafield:m.datafield,oldvalue:this.getcellvalue(m.rowindex,m.datafield),value:e});
this._applycellselection(o+d,m.datafield,true,false)
}}}this.dataview.updateview();
this._renderrows(this.virtualsizeinfo)
}},_applyrowselection:function(e,i,f,h,b){if(e==null){return false
}var j=this.selectedrowindex;
if(this.selectionmode=="singlerow"){if(i){this._raiseEvent(2,{rowindex:e,row:this.getrowdata(e)})
}else{this._raiseEvent(3,{rowindex:e,row:this.getrowdata(e)})
}this._raiseEvent(3,{rowindex:j});
this.selectedrowindexes=new Array();
this.selectedcells=new Array()
}if(h==true){this.selectedrowindexes=new Array()
}if(this.dataview.filters.length>0){var c=this.getrowdata(e);
if(c&&c.dataindex!==undefined){e=c.dataindex
}else{if(c&&c.dataindex===undefined){if(c.uid!=undefined){e=this.getrowboundindexbyid(c.uid)
}}}}var d=this.selectedrowindexes.indexOf(e);
if(i){this.selectedrowindex=e;
if(d==-1){this.selectedrowindexes.push(e);
if(this.selectionmode!="singlerow"){this._raiseEvent(2,{rowindex:e,row:this.getrowdata(e)})
}}else{if(this.selectionmode=="multiplerows"){this.selectedrowindexes.splice(d,1);
this._raiseEvent(3,{rowindex:this.selectedrowindex,row:this.getrowdata(e)});
this.selectedrowindex=this.selectedrowindexes.length>0?this.selectedrowindexes[this.selectedrowindexes.length-1]:-1
}}}else{if(d>=0||this.selectionmode=="singlerow"||this.selectionmode=="multiplerowsextended"||this.selectionmode=="multiplerowsadvanced"){var g=this.selectedrowindexes[d];
this.selectedrowindexes.splice(d,1);
this._raiseEvent(3,{rowindex:g,row:this.getrowdata(e)});
this.selectedrowindex=-1
}}if(f==undefined||f){this._rendervisualrows()
}return true
},_applycellselection:function(e,b,h,f){if(e==null){return false
}if(b==null){return false
}var j=this.selectedrowindex;
if(this.selectionmode=="singlecell"){var d=this.selectedcell;
if(d!=null){this._raiseEvent(16,{rowindex:d.rowindex,datafield:d.datafield})
}this.selectedcells=new Array()
}if(this.selectionmode=="multiplecellsextended"||this.selectionmode=="multiplecellsadvanced"){var d=this.selectedcell;
if(d!=null){this._raiseEvent(16,{rowindex:d.rowindex,datafield:d.datafield})
}}var g=e+"_"+b;
if(this.dataview.filters.length>0){var c=this.getrowdata(e);
if(c&&c.dataindex!==undefined){e=c.dataindex;
var g=e+"_"+b
}else{if(c&&c.dataindex===undefined){if(c.uid){e=this.getrowboundindexbyid(c.uid);
var g=e+"_"+b
}}}}var i={rowindex:e,datafield:b};
if(h){this.selectedcell=i;
if(!this.selectedcells[g]){this.selectedcells[g]=i;
this.selectedcells.length++;
this._raiseEvent(15,i)
}else{if(this.selectionmode=="multiplecells"||this.selectionmode=="multiplecellsextended"||this.selectionmode=="multiplecellsadvanced"){delete this.selectedcells[g];
if(this.selectedcells.length>0){this.selectedcells.length--
}this._raiseEvent(16,i)
}}}else{delete this.selectedcells[g];
if(this.selectedcells.length>0){this.selectedcells.length--
}this._raiseEvent(16,i)
}if(f==undefined||f){this._rendervisualrows()
}return true
},_getcellindex:function(b){var c=-1;
a.each(this.selectedcells,function(){c++;
if(this[b]){return false
}});
return c
},_clearhoverstyle:function(){if(undefined==this.hoveredrow||this.hoveredrow==-1){return
}if(this.vScrollInstance.isScrolling()){return
}if(this.hScrollInstance.isScrolling()){return
}var b=this.table.find(".jqx-grid-cell-hover");
if(b.length>0){b.removeClass(this.toTP("jqx-grid-cell-hover"));
b.removeClass(this.toTP("jqx-fill-state-hover"))
}this.hoveredrow=-1
},_clearselectstyle:function(){var k=this.table[0].rows.length;
var p=this.table[0].rows;
var l=this.toTP("jqx-grid-cell-selected");
var c=this.toTP("jqx-fill-state-pressed");
var m=this.toTP("jqx-grid-cell-hover");
var h=this.toTP("jqx-fill-state-hover");
for(var g=0;
g<k;
g++){var b=p[g];
var f=b.cells.length;
var o=b.cells;
for(var e=0;
e<f;
e++){var d=o[e];
var n=a(d);
if(d.className.indexOf("jqx-grid-cell-selected")!=-1){n.removeClass(l);
n.removeClass(c)
}if(d.className.indexOf("jqx-grid-cell-hover")!=-1){n.removeClass(m);
n.removeClass(h)
}}}},_selectpath:function(n,e){var l=this;
var i=this._lastClickedCell?Math.min(this._lastClickedCell.row,n):0;
var k=this._lastClickedCell?Math.max(this._lastClickedCell.row,n):0;
if(i<=k){var h=this._getcolumnindex(this._lastClickedCell.column);
var g=this._getcolumnindex(e);
var f=Math.min(h,g);
var d=Math.max(h,g);
this.selectedcells=new Array();
var m=this.dataview.loadedrecords;
for(var b=i;
b<=k;
b++){for(var j=f;
j<=d;
j++){var n=m[b];
this._applycellselection(l.getboundindex(n),l._getcolumnat(j).datafield,true,false)
}}this._rendervisualrows()
}},_selectrowpath:function(g){if(this.selectionmode=="multiplerowsextended"){var c=this;
var b=this._lastClickedCell?Math.min(this._lastClickedCell.row,g):0;
var h=this._lastClickedCell?Math.max(this._lastClickedCell.row,g):0;
var f=this.dataview.loadedrecords;
if(b<=h){this.selectedrowindexes=new Array();
for(var e=b;
e<=h;
e++){var g=f[e];
var d=this.getrowboundindex(e);
this._applyrowselection(d,true,false)
}this._rendervisualrows()
}}},_selectrowwithmouse:function(p,b,c,f,d,s){var j=b.row;
if(j==undefined){return
}var k=b.index;
if(this.hittestinfo[k]==undefined){return
}var t=this.hittestinfo[k].visualrow;
if(this.hittestinfo[k].details){return
}var m=t.cells[0].className;
if(j.group){return
}if(this.selectionmode=="multiplerows"||this.selectionmode=="multiplecells"||this.selectionmode=="checkbox"||(this.selectionmode.indexOf("multiple")!=-1&&(s==true||d==true))){var l=this.getboundindex(j);
if(this.dataview.filters.length>0){var v=this.getrowdata(l);
if(v){l=v.dataindex;
if(l==undefined){var l=this.getboundindex(j)
}}}var q=c.indexOf(l)!=-1;
var w=this.getboundindex(j)+"_"+f;
if(this.selectionmode.indexOf("cell")!=-1){var h=this.selectedcells[w]!=undefined;
if(this.selectedcells[w]!=undefined&&h){this._selectcellwithstyle(p,false,k,f,t)
}else{this._selectcellwithstyle(p,true,k,f,t)
}if(s&&this._lastClickedCell==undefined){var g=this.getselectedcells();
if(g&&g.length>0){this._lastClickedCell={row:g[0].rowindex,column:g[0].datafield}
}}if(s&&this._lastClickedCell){this._selectpath(j.visibleindex,f);
this.mousecaptured=false;
if(this.selectionarea.css("visibility")=="visible"){this.selectionarea.css("visibility","hidden")
}}}else{if(q){if(d){this._applyrowselection(this.getboundindex(j),false)
}else{this._selectrowwithstyle(p,t,false,f)
}}else{this._selectrowwithstyle(p,t,true,f)
}if(s&&this._lastClickedCell==undefined){var i=this.getselectedrowindexes();
if(i&&i.length>0){this._lastClickedCell={row:i[0],column:f}
}}if(s&&this._lastClickedCell){this.selectedrowindexes=new Array();
var e=this._lastClickedCell?Math.min(this._lastClickedCell.row,j.visibleindex):0;
var u=this._lastClickedCell?Math.max(this._lastClickedCell.row,j.visibleindex):0;
var n=this.dataview.loadedrecords;
for(var o=e;
o<=u;
o++){var j=n[o];
if(j){this._applyrowselection(this.getboundindex(j),true,false,false)
}}this._rendervisualrows()
}}}else{this._clearselectstyle();
this._selectrowwithstyle(p,t,true,f);
if(this.selectionmode.indexOf("cell")!=-1){this._selectcellwithstyle(p,true,k,f,t)
}}if(!s){this._lastClickedCell={row:j.visibleindex,column:f}
}},_selectcellwithstyle:function(d,c,g,f,e){var b=a(e.cells[d._getcolumnindex(f)]);
b.removeClass(this.toTP("jqx-grid-cell-hover"));
b.removeClass(this.toTP("jqx-fill-state-hover"));
if(c){b.addClass(this.toTP("jqx-grid-cell-selected"));
b.addClass(this.toTP("jqx-fill-state-pressed"))
}else{b.removeClass(this.toTP("jqx-grid-cell-selected"));
b.removeClass(this.toTP("jqx-fill-state-pressed"))
}},_selectrowwithstyle:function(e,h,b,j){var c=h.cells.length;
var f=0;
if(e.rowdetails&&e.showrowdetailscolumn){if(!this.rtl){f=1+this.groups.length
}else{c-=1;
c-=this.groups.length
}}else{if(this.groupable){if(!this.rtl){f=this.groups.length
}else{c-=this.groups.length
}}}for(var g=f;
g<c;
g++){var d=h.cells[g];
if(b){a(d).removeClass(this.toTP("jqx-grid-cell-hover"));
a(d).removeClass(this.toTP("jqx-fill-state-hover"));
if(e.selectionmode.indexOf("cell")==-1){a(d).addClass(this.toTP("jqx-grid-cell-selected"));
a(d).addClass(this.toTP("jqx-fill-state-pressed"))
}}else{a(d).removeClass(this.toTP("jqx-grid-cell-hover"));
a(d).removeClass(this.toTP("jqx-grid-cell-selected"));
a(d).removeClass(this.toTP("jqx-fill-state-hover"));
a(d).removeClass(this.toTP("jqx-fill-state-pressed"))
}}},_handlemousemoveselection:function(V,ad){if((ad.selectionmode=="multiplerowsextended"||ad.selectionmode=="multiplecellsextended"||ad.selectionmode=="multiplecellsadvanced")&&ad.mousecaptured){if(ad.multipleselectionbegins){var M=ad.multipleselectionbegins(V);
if(M===false){return true
}}var n=this.showheader?this.columnsheader.height()+2:0;
var X=this._groupsheader()?this.groupsheader.height():0;
var A=this.showtoolbar?this.toolbarheight:0;
X+=A;
var D=this.host.coord();
if(this.hasTransform){D=a.jqx.utilities.getOffset(this.host);
var o=this._getBodyOffset();
D.left-=o.left;
D.top-=o.top
}var b=V.pageX;
var t=V.pageY-X;
if(Math.abs(this.mousecaptureposition.left-b)>3||Math.abs(this.mousecaptureposition.top-t)>3){var d=parseInt(this.columnsheader.coord().top);
if(this.hasTransform){d=a.jqx.utilities.getOffset(this.columnsheader).top
}if(b<D.left){b=D.left
}if(b>D.left+this.host.width()){b=D.left+this.host.width()
}var I=D.top+n;
if(t<I){t=I+5
}var G=parseInt(Math.min(ad.mousecaptureposition.left,b));
var s=-5+parseInt(Math.min(ad.mousecaptureposition.top,t));
var v=parseInt(Math.abs(ad.mousecaptureposition.left-b));
var j=parseInt(Math.abs(ad.mousecaptureposition.top-t));
G-=D.left;
s-=D.top;
this.selectionarea.css("visibility","visible");
if(ad.selectionmode=="multiplecellsadvanced"){var b=G;
var L=b+v;
var J=b;
var aa=ad.hScrollInstance;
var H=aa.value;
if(this.rtl){if(this.hScrollBar.css("visibility")!="hidden"){H=aa.max-aa.value
}if(this.vScrollBar[0].style.visibility!="hidden"){}}var h=ad.table[0].rows[0];
var Y=0;
var E=ad.mousecaptureposition.clickedcell;
var K=E;
var m=false;
var Q=0;
var S=h.cells.length;
if(ad.mousecaptureposition.left<=V.pageX){Q=E
}for(var u=Q;
u<S;
u++){var T=parseInt(a(this.columnsrow[0].cells[u]).css("left"));
var P=T-H;
if(ad.columns.records[u].pinned){P=T;
continue
}var F=this._getcolumnat(u);
if(F!=null&&F.hidden){continue
}if(ad.groupable&&ad.groups.length>0){if(u<ad.groups.length){continue
}}var ac=P+a(this.columnsrow[0].cells[u]).width();
if(ad.mousecaptureposition.left>V.pageX){if(ac>=b&&b>=P){K=u;
m=true;
break
}}else{if(ac>=L&&L>=P){K=u;
m=true;
break
}}}if(!m){if(ad.mousecaptureposition.left>V.pageX){a.each(this.columns.records,function(i,k){if(ad.groupable&&ad.groups.length>0){if(i<ad.groups.length){return true
}}if(!this.pinned&&!this.hidden){K=i;
return false
}})
}else{if(!ad.groupable||(ad.groupable&&!ad.groups.length>0)){K=h.cells.length-1
}}}var z=E;
E=Math.min(E,K);
K=Math.max(z,K);
s+=5;
s+=X;
var R=ad.table[0].rows.indexOf(ad.mousecaptureposition.clickedrow);
var l=0;
var e=-1;
var W=-1;
var f=0;
for(var u=0;
u<ad.table[0].rows.length;
u++){var g=a(ad.table[0].rows[u]);
if(u==0){f=g.coord().top
}var O=g.height();
var U=f-D.top;
if(e==-1&&U+O>=s){var c=false;
for(var r=0;
r<ad.groups.length;
r++){var ab=g[0].cells[r].className;
if(ab.indexOf("jqx-grid-group-collapse")!=-1||ab.indexOf("jqx-grid-group-expand")!=-1){c=true;
break
}}if(c){continue
}e=u
}f+=O;
if(ad.groupable&&ad.groups.length>0){var c=false;
for(var r=0;
r<ad.groups.length;
r++){var ab=g[0].cells[r].className;
if(ab.indexOf("jqx-grid-group-collapse")!=-1||ab.indexOf("jqx-grid-group-expand")!=-1){c=true;
break
}}if(c){continue
}var Y=0;
for(var N=ad.groups.length;
N<g[0].cells.length;
N++){var B=g[0].cells[N];
if(a(B).html()==""){Y++
}}if(Y==g[0].cells.length-ad.groups.length){continue
}}if(e!=-1){l+=O
}if(U+O>s+j){W=u;
break
}}if(e!=-1){s=a(ad.table[0].rows[e]).coord().top-D.top-X-2;
var Z=0;
if(this.filterable&&this.showfilterrow){Z=this.filterrowheight
}if(parseInt(ad.table[0].style.top)<0&&s<this.rowsheight+Z){s-=parseInt(ad.table[0].style.top);
l+=parseInt(ad.table[0].style.top)
}j=l;
var w=a(this.columnsrow[0].cells[E]);
var C=a(this.columnsrow[0].cells[K]);
G=parseInt(w.css("left"));
v=parseInt(C.css("left"))-parseInt(G)+C.width()-2;
G-=H;
if(ad.editcell&&ad.editable&&ad.endcelledit&&(E!=K||e!=W)){if(ad.editcell.validated==false){return
}ad.endcelledit(ad.editcell.row,ad.editcell.column,true,true)
}}}this.selectionarea.width(v);
this.selectionarea.height(j);
this.selectionarea.css("left",G);
this.selectionarea.css("top",s)
}}},_handlemouseupselection:function(l,h){if(!this.selectionarea){return
}if(this.selectionarea.css("visibility")!="visible"){h.mousecaptured=false;
return true
}if(h.mousecaptured&&(h.selectionmode=="multiplerowsextended"||h.selectionmode=="multiplerowsadvanced"||h.selectionmode=="multiplecellsextended"||h.selectionmode=="multiplecellsadvanced")){h.mousecaptured=false;
if(this.selectionarea.css("visibility")=="visible"){this.selectionarea.css("visibility","hidden");
var o=this.showheader?this.columnsheader.height()+2:0;
var B=this._groupsheader()?this.groupsheader.height():0;
var d=this.showtoolbar?this.toolbarheight:0;
B+=d;
var v=this.selectionarea.coord();
var D=this.host.coord();
if(this.hasTransform){D=a.jqx.utilities.getOffset(this.host);
v=a.jqx.utilities.getOffset(this.selectionarea)
}var c=v.left-D.left;
var b=v.top-o-D.top-B;
var k=b;
var u=c+this.selectionarea.width();
var z=c;
var g=new Array();
var e=new Array();
if(h.selectionmode=="multiplerowsextended"){while(b<k+this.selectionarea.height()){var s=this._hittestrow(c,b);
var f=s.row;
var w=s.index;
if(w!=-1){if(!e[w]){e[w]=true;
g[g.length]=s
}}b+=20
}var k=0;
a.each(g,function(){var i=this;
var m=this.row;
if(h.selectionmode!="none"&&h._selectrowwithmouse){if(l.ctrlKey){h._applyrowselection(h.getboundindex(m),true,false,false)
}else{if(k==0){h._applyrowselection(h.getboundindex(m),true,false,true)
}else{h._applyrowselection(h.getboundindex(m),true,false,false)
}}k++
}})
}else{if(h.selectionmode=="multiplecellsadvanced"){b+=2
}var n=h.hScrollInstance;
var p=n.value;
if(this.rtl){if(this.hScrollBar.css("visibility")!="hidden"){p=n.max-n.value
}if(this.vScrollBar[0].style.visibility!="hidden"){p-=this.scrollbarsize+4
}}var j=h.table[0].rows[0];
var A=h.selectionarea.height();
if(!l.ctrlKey&&A>0){h.selectedcells=new Array()
}var q=A;
while(b<k+q){var s=h._hittestrow(c,b);
if(!s){b+=5;
continue
}var f=s.row;
var w=s.index;
if(w!=-1){if(!e[w]){e[w]=true;
for(var r=0;
r<j.cells.length;
r++){var C=parseInt(a(h.columnsrow[0].cells[r]).css("left"))-p;
var t=C+a(h.columnsrow[0].cells[r]).width();
if((z>=C&&z<=t)||(u>=C&&u<=t)||(C>=z&&C<=u)){h._applycellselection(h.getboundindex(f),h._getcolumnat(r).datafield,true,false)
}}}}b+=5
}}if(h.autosavestate){if(h.savestate){h.savestate()
}}h._renderrows(h.virtualsizeinfo)
}}},selectprevcell:function(e,c){var f=this._getcolumnindex(c);
var b=this.columns.records.length;
var d=this._getprevvisiblecolumn(f);
if(d!=null){this.clearselection();
this.selectcell(e,d.datafield)
}},selectnextcell:function(e,d){var f=this._getcolumnindex(d);
var c=this.columns.records.length;
var b=this._getnextvisiblecolumn(f);
if(b!=null){this.clearselection();
this.selectcell(e,b.datafield)
}},_getfirstvisiblecolumn:function(){var b=this;
var e=this.columns.records.length;
for(var c=0;
c<e;
c++){var d=this.columns.records[c];
if(!d.hidden&&d.datafield!=null){return d
}}return null
},_getlastvisiblecolumn:function(){var b=this;
var e=this.columns.records.length;
for(var c=e-1;
c>=0;
c--){var d=this.columns.records[c];
if(!d.hidden&&d.datafield!=null){return d
}}return null
},_handlekeydown:function(n,x){if(x.groupable&&x.groups.length>0){return true
}if(x.disabled){return false
}var h=n.charCode?n.charCode:n.keyCode?n.keyCode:0;
if(x.editcell&&x.selectionmode!="multiplecellsadvanced"){return true
}else{if(x.editcell&&x.selectionmode=="multiplecellsadvanced"){if(h>=33&&h<=40){if(!n.altKey){if(x._cancelkeydown==undefined||x._cancelkeydown==false){if(x.editmode!=="selectedrow"){x.endcelledit(x.editcell.row,x.editcell.column,false,true);
x._cancelkeydown=false;
if(x.editcell&&!x.editcell.validated){x._rendervisualrows();
x.endcelledit(x.editcell.row,x.editcell.column,false,true);
return false
}}else{return true
}}else{x._cancelkeydown=false;
return true
}}else{x._cancelkeydown=false;
return true
}}else{return true
}}}if(x.selectionmode=="none"){return true
}if(x.showfilterrow&&x.filterable){if(this.filterrow){if(a(n.target).ischildof(this.filterrow)){return true
}}}if(x.pageable){if(a(n.target).ischildof(this.pager)){return true
}}if(this.showtoolbar){if(a(n.target).ischildof(this.toolbar)){return true
}}if(this.showstatusbar){if(a(n.target).ischildof(this.statusbar)){return true
}}var u=false;
if(n.altKey){return true
}if(n.ctrlKey){if(this.clipboard){var p=String.fromCharCode(h).toLowerCase();
if(p=="c"||p=="x"){var i=this.copyselection();
if(window.clipboardData){window.clipboardData.setData("Text",i)
}else{var B=a('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');
B.val(i);
a("body").append(B);
B.select();
setTimeout(function(){document.designMode="off";
B.select();
B.remove();
x.focus()
},100)
}}else{if(p=="v"){var e=a('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');
a("body").append(e);
e.select();
var d=this;
setTimeout(function(){d._clipboardselection=new Array();
var I=e.val();
var H=I.split("\n");
for(var G=0;
G<H.length;
G++){if(H[G].split("\t").length>0){var F=H[G].split("\t");
if(F.length==1&&G==H.length-1&&F[0]==""){continue
}if(F.length>0){d._clipboardselection.push(F)
}}}d.pasteselection();
e.remove();
d.focus()
},100)
}}if(p=="x"){this.deleteselection();
this.host.focus()
}}}var f=Math.round(x._gettableheight());
var m=Math.round(f/x.rowsheight);
var z=x.getdatainformation();
switch(x.selectionmode){case"singlecell":case"multiplecells":case"multiplecellsextended":case"multiplecellsadvanced":var E=x.getselectedcell();
if(E!=null){var k=this.getrowvisibleindex(E.rowindex);
var c=k;
var q=E.datafield;
var l=x._getcolumnindex(q);
var w=x.columns.records.length;
var j=function(K,G,J){var F=function(O,L){var N=x.dataview.loadedrecords[O];
if(N!=undefined&&L!=null){if(J||J==undefined){x.clearselection()
}var M=x.getboundindex(N);
x.selectcell(M,L);
x._oldselectedcell=x.selectedcell;
u=true;
x.ensurecellvisible(O,L);
return true
}return false
};
if(!F(K,G)){x.ensurecellvisible(K,G);
F(K,G);
if(x.virtualmode){x.host.focus()
}}if(n.shiftKey&&h!=9){if(x.selectionmode=="multiplecellsextended"||x.selectionmode=="multiplecellsadvanced"){if(x._lastClickedCell){x._selectpath(K,G);
var I=x.dataview.loadedrecords[K];
var H=x.getboundindex(I);
x.selectedcell={rowindex:H,datafield:G};
return
}}}else{if(!n.shiftKey){x._lastClickedCell={row:K,column:G}
}}};
var s=n.shiftKey&&x.selectionmode!="singlecell"&&x.selectionmode!="multiplecells";
var t=function(){j(0,q,!s)
};
var A=function(){var F=z.rowscount-1;
j(F,q,!s)
};
var y=h==9&&!n.shiftKey;
var C=h==9&&n.shiftKey;
if(y||C){s=false
}var g=n.ctrlKey;
if(g&&h==37){var v=x._getfirstvisiblecolumn(l);
if(v!=null){j(c,v.datafield)
}}else{if(g&&h==39){var r=x._getlastvisiblecolumn(l);
if(r!=null){j(c,r.datafield)
}}else{if(h==39||y){var b=x._getnextvisiblecolumn(l);
if(b!=null){j(c,b.datafield,!s)
}else{if(!y){u=true
}}}else{if(h==37||C){var v=x._getprevvisiblecolumn(l);
if(v!=null){j(c,v.datafield,!s)
}else{if(!C){u=true
}}}else{if(h==36){t()
}else{if(h==35){A()
}else{if(h==33){if(c-m>=0){var D=c-m;
j(D,q,!s)
}else{t()
}}else{if(h==34){if(z.rowscount>c+m){var D=c+m;
j(D,q,!s)
}else{A()
}}else{if(h==38){if(g){t()
}else{if(c>0){j(c-1,q,!s)
}else{u=true
}}}else{if(h==40){if(g){A()
}else{if(z.rowscount>c+1){j(c+1,q,!s)
}else{u=true
}}}}}}}}}}}}}break;
case"singlerow":case"multiplerows":case"multiplerowsextended":case"multiplerowsadvanced":var c=x.getselectedrowindex();
if(c==null||c==-1){return true
}c=this.getrowvisibleindex(c);
var o=function(G,H){var F=function(K){var M=x.dataview.loadedrecords[K];
if(M!=undefined){var L=x.getboundindex(M);
var J=x.selectedrowindex;
if(H||H==undefined){x.clearselection()
}x.selectedrowindex=J;
x.selectrow(L,false);
var I=x.ensurerowvisible(K);
if(!I||x.autoheight||x.groupable){x._rendervisualrows()
}u=true;
return true
}return false
};
if(!F(G)){x.ensurerowvisible(G);
F(G,H);
if(x.virtualmode){setTimeout(function(){F(G,H)
},25)
}if(x.virtualmode){x.host.focus()
}}if(n.shiftKey&&h!=9){if(x.selectionmode=="multiplerowsextended"){if(x._lastClickedCell){x._selectrowpath(G);
x.selectedrowindex=x.getrowboundindex(G);
return
}}}else{if(!n.shiftKey){x._lastClickedCell={row:G};
x.selectedrowindex=x.getrowboundindex(G)
}}};
var s=n.shiftKey&&x.selectionmode!="singlerow"&&x.selectionmode!="multiplerows";
var t=function(){o(0,!s)
};
var A=function(){var F=z.rowscount-1;
o(F,!s)
};
var g=n.ctrlKey;
if(h==36||(g&&h==38)){t()
}else{if(h==35||(g&&h==40)){A()
}else{if(h==33){if(c-m>=0){var D=c-m;
o(D,!s)
}else{t()
}}else{if(h==34){if(z.rowscount>c+m){var D=c+m;
o(D,!s)
}else{A()
}}else{if(h==38){if(c>0){o(c-1,!s)
}else{u=true
}}else{if(h==40){if(z.rowscount>c+1){o(c+1,!s)
}else{u=true
}}}}}}}break
}if(u){if(x.autosavestate){if(x.savestate){x.savestate()
}}return false
}return true
},_handlemousemove:function(u,p){if(p.vScrollInstance.isScrolling()){return
}if(p.hScrollInstance.isScrolling()){return
}var w;
var q;
var f;
var n;
var m;
if(p.enablehover||p.selectionmode=="multiplerows"){w=this.showheader?this.columnsheader.height()+2:0;
q=this._groupsheader()?this.groupsheader.height():0;
var A=this.showtoolbar?this.toolbarheight:0;
q+=A;
f=this.host.coord();
if(this.hasTransform){f=a.jqx.utilities.getOffset(this.host);
var k=this._getBodyOffset();
f.left-=k.left;
f.top-=k.top
}n=u.pageX-f.left;
m=u.pageY-w-f.top-q
}if(p.selectionmode=="multiplerowsextended"||p.selectionmode=="multiplecellsextended"||p.selectionmode=="multiplecellsadvanced"){if(p.mousecaptured==true){return
}}if(p.enablehover){if(p.disabled){return
}if(this.vScrollInstance.isScrolling()||this.hScrollInstance.isScrolling()){return
}var c=this._hittestrow(n,m);
if(!c){return
}var h=c.row;
var j=c.index;
if(this.hoveredrow!=-1&&j!=-1&&this.hoveredrow==j&&this.selectionmode.indexOf("cell")==-1&&this.selectionmode!="checkbox"){return
}this._clearhoverstyle();
if(j==-1||h==undefined){return
}var r=this.hittestinfo[j].visualrow;
if(r==null){return
}if(this.hittestinfo[j].details){return
}if(u.clientX>a(r).width()+a(r).coord().left){return
}var B=0;
var o=r.cells.length;
if(p.rowdetails&&p.showrowdetailscolumn){if(!this.rtl){B=1+this.groups.length
}else{o-=1;
o-=this.groups.length
}}else{if(this.groupable){if(!this.rtl){B=this.groups.length
}else{o-=this.groups.length
}}}if(r.cells.length==0){return
}var l=r.cells[B].className;
if(h.group||(this.selectionmode.indexOf("row")>=0&&l.indexOf("jqx-grid-cell-selected")!=-1)){return
}this.hoveredrow=j;
if(this.selectionmode.indexOf("cell")!=-1||this.selectionmode=="checkbox"){var e=-1;
var s=this.hScrollInstance;
var t=s.value;
if(this.rtl){if(this.hScrollBar.css("visibility")!="hidden"){t=s.max-s.value
}}for(var v=B;
v<o;
v++){var g=parseInt(a(this.columnsrow[0].cells[v]).css("left"))-t;
var z=g+a(this.columnsrow[0].cells[v]).width();
if(z>=n&&n>=g){e=v;
break
}}if(e!=-1){var b=r.cells[e];
if(b.className.indexOf("jqx-grid-cell-selected")==-1){if(this.editcell){var d=this._getcolumnat(e);
if(d){if(this.editcell.row==j&&this.editcell.column==d.datafield){return
}}}a(b).addClass(this.toTP("jqx-grid-cell-hover"));
a(b).addClass(this.toTP("jqx-fill-state-hover"));
if(this.cellhover){this.cellhover(b,u.pageX,u.pageY)
}}}return
}for(var v=B;
v<o;
v++){var b=r.cells[v];
a(b).addClass(this.toTP("jqx-grid-cell-hover"));
a(b).addClass(this.toTP("jqx-fill-state-hover"));
if(this.cellhover){this.cellhover(b,u.pageX,u.pageY)
}}}else{return true
}}})
})(jQuery);