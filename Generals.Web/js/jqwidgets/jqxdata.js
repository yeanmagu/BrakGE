(function(y){y.jqx.dataAdapter=function(J,e){if(J!=undefined){if(J.dataFields!==undefined){J.datafields=J.dataFields
}if(J.dataType!==undefined){J.datatype=J.dataType
}if(J.localData!==undefined){J.localdata=J.localData
}if(J.sortColumn!==undefined){J.sortcolumn=J.sortColumn
}if(J.sortDirection!==undefined){J.sortdirection=J.sortDirection
}if(J.sortOrder!==undefined){J.sortdirection=J.sortOrder
}if(J.formatData!==undefined){J.formatdata=J.formatData
}if(J.processData!==undefined){J.processdata=J.processData
}if(J.pageSize!==undefined){J.pagesize=J.pageSize
}if(J.pageNum!==undefined){J.pagenum=J.pageNum
}if(J.updateRow!==undefined){J.updaterow=J.updateRow
}if(J.addRow!==undefined){J.addrow=J.addRow
}if(J.deleteRow!==undefined){J.deleterow=J.deleteRow
}if(J.contentType!==undefined){J.contenttype=J.contentType
}if(J.totalRecords!=undefined){J.totalrecords=J.totalRecords
}if(J.loadError!=undefined){J.loadError=J.loadError
}if(J.sortComparer!=undefined){J.sortcomparer=J.sortComparer
}}this._source=J;
this._options=e||{};
this.records=new Array();
this._downloadComplete=new Array();
this._bindingUpdate=new Array();
if(J!=undefined&&J.localdata!=null&&typeof J.localdata=="function"){var I=J.localdata();
if(I!=null){J._localdata=J.localdata;
var H=this;
if(J._localdata.subscribe){H._oldlocaldata=[];
J._localdata.subscribe(function(K){var L=function(M){if(jQuery.isArray(M)){return jQuery.makeArray(L(y(M)))
}return jQuery.extend(true,{},M)
};
if(H.suspendKO==false||H.suspendKO==undefined||H._oldlocaldata.length==0){H._oldlocaldata=L(K)
}},J._localdata,"beforeChange");
J._localdata.subscribe(function(L){if(H.suspendKO==false||H.suspendKO==undefined){var K="";
H._oldrecords=H.records;
if(H._oldlocaldata.length==0){J.localdata=J._localdata()
}if(H._oldlocaldata.length==0){K="change"
}else{if(H._oldlocaldata.length==L.length){K="update"
}if(H._oldlocaldata.length>L.length){K="remove"
}if(H._oldlocaldata.length<L.length){K="add"
}}H.dataBind(null,K)
}},J._localdata,"change");
H._knockoutdatasource=true
}J.localdata=I
}}if(this._options.autoBind==true){this.dataBind()
}};
y.jqx.dataAdapter.prototype={getrecords:function(){return this.records
},beginUpdate:function(){this.isUpdating=true
},endUpdate:function(e){this.isUpdating=false;
if(e!=false){if(this._changedrecords&&this._changedrecords.length>0){this.callBindingUpdate("update");
this._changedrecords=[]
}else{this.dataBind(null,"")
}}},formatDate:function(H,J,I){var e=y.jqx.dataFormat.formatdate(H,J,I);
return e
},formatNumber:function(H,J,I){var e=y.jqx.dataFormat.formatnumber(H,J,I);
return e
},dataBind:function(aa,J){if(this.isUpdating==true){return
}var ad=this._source;
if(!ad){return
}y.jqx.dataFormat.datescache=new Array();
if(ad.dataFields!=null){ad.datafields=ad.dataFields
}if(ad.recordstartindex==undefined){ad.recordstartindex=0
}if(ad.recordendindex==undefined){ad.recordendindex=0
}if(ad.loadallrecords==undefined){ad.loadallrecords=true
}if(ad.sort!=undefined){this.sort=ad.sort
}if(ad.filter!=undefined){this.filter=ad.filter
}else{this.filter=null
}if(ad.sortcolumn!=undefined){this.sortcolumn=ad.sortcolumn
}if(ad.sortdirection!=undefined){this.sortdirection=ad.sortdirection
}if(ad.sortcomparer!=undefined){this.sortcomparer=ad.sortcomparer
}this.records=new Array();
var T=this._options||{};
this.virtualmode=T.virtualmode!=undefined?T.virtualmode:false;
this.totalrecords=T.totalrecords!=undefined?T.totalrecords:0;
this.pageable=T.pageable!=undefined?T.pageable:false;
this.pagesize=T.pagesize!=undefined?T.pagesize:0;
this.pagenum=T.pagenum!=undefined?T.pagenum:0;
this.cachedrecords=T.cachedrecords!=undefined?T.cachedrecords:new Array();
this.originaldata=new Array();
this.recordids=new Array();
this.updaterow=T.updaterow!=undefined?T.updaterow:null;
this.addrow=T.addrow!=undefined?T.addrow:null;
this.deleterow=T.deleterow!=undefined?T.deleterow:null;
this.cache=T.cache!=undefined?T.cache:false;
this.unboundmode=false;
if(ad.formatdata!=undefined){T.formatData=ad.formatdata
}if(ad.data!=undefined){if(T.data==undefined){T.data={}
}y.extend(T.data,ad.data)
}if(ad.mapchar!=undefined){this.mapChar=ad.mapchar?ad.mapchar:">"
}else{this.mapChar=T.mapChar?T.mapChar:">"
}if(T.unboundmode||ad.unboundmode){this.unboundmode=T.unboundmode||ad.unboundmode
}if(ad.cache!=undefined){this.cache=ad.cache
}if(this.koSubscriptions){for(var L=0;
L<this.koSubscriptions.length;
L++){this.koSubscriptions[L].dispose()
}}this.koSubscriptions=new Array();
if(this.pagenum<0){this.pagenum=0
}var Q=this;
var ac=ad.datatype;
if(ad.datatype==="csv"||ad.datatype==="tab"||ad.datatype==="tsv"||ad.datatype=="text"){ac="text"
}var W=T.async!=undefined?T.async:true;
if(ad.async!=undefined){W=ad.async
}switch(ac){case"local":case"array":case"observablearray":default:if(ad.localdata==undefined&&ad.length){ad.localdata=new Array();
for(var af=0;
af<ad.length;
af++){ad.localdata[ad.localdata.length]=ad[af];
ad[af].uid=af
}}if(ad.beforeprocessing&&y.isFunction(ad.beforeprocessing)){ad.beforeprocessing(ad.localdata)
}var U=ad.localdata.length;
this.totalrecords=this.virtualmode?(ad.totalrecords||U):U;
if(this.unboundmode){this.totalrecords=this.unboundmode?(ad.totalrecords||U):U;
var I=ad.datafields?ad.datafields.length:0;
if(I>0){for(var af=0;
af<this.totalrecords;
af++){var R={};
for(var H=0;
H<I;
H++){R[ad.datafields[H].name]=""
}R.uid=af;
ad.localdata[ad.localdata.length]=R
}}}if(this.totalrecords==undefined){this.totalrecords=0
}var I=ad.datafields?ad.datafields.length:0;
var S=function(ai,ak){var aj={};
for(var ag=0;
ag<ak;
ag++){var ao=ad.datafields[ag];
var al="";
if(undefined==ao||ao==null){continue
}if(ao.map){if(y.isFunction(ao.map)){al=ao.map(ai)
}else{var am=ao.map.split(Q.mapChar);
if(am.length>0){var ah=ai;
for(var an=0;
an<am.length;
an++){if(!ah){continue
}ah=ah[am[an]]
}al=ah
}else{al=ai[ao.map]
}}if(al!=undefined&&al!=null){al=al.toString()
}else{if(al==undefined&&al!=null){al=""
}}}if(al==""){al=ai[ao.name];
if(al!=undefined&&al!=null){if(ad._localdata&&al.subscribe){al=al()
}else{al=al.toString()
}}}al=Q.getvaluebytype(al,ao);
if(ao.displayname!=undefined){aj[ao.displayname]=al
}else{aj[ao.name]=al
}}return aj
};
if(ad._localdata){this._changedrecords=[];
this.records=new Array();
var M=ad._localdata();
y.each(M,function(aj,am){if(typeof am==="string"){Q.records.push(am)
}else{var ah={};
var al=0;
var ak=this;
y.each(this,function(aC,aB){var au=null;
var aD="string";
var ap=aC;
if(I>0){var ar=false;
var ao=false;
for(var aA=0;
aA<I;
aA++){var ay=ad.datafields[aA];
if(ay!=undefined&&(ay.name==aC)){ar=true;
au=ay.map;
aD=ay.type;
ap=ay.name;
break
}else{if(ay!=undefined&&ay.map&&(ay.map.indexOf(aC)>=0)){ar=true;
au=ay.map;
aD=ay.type;
ap=ay.name;
ao=true;
var aq=ak[aC];
if(au!=null){var at=au.split(Q.mapChar);
if(at.length>0){var ax=ak;
for(var av=0;
av<at.length;
av++){ax=ax[at[av]]
}aq=ax
}else{aq=ak[au]
}}if(aD!="string"){aq=Q.getvaluebytype(aq,{type:aD})
}ah[ap]=aq;
if(ah[ap]!=undefined){al+=ah[ap].toString().length+ah[ap].toString().substr(0,1)
}}}}if(!ar){return true
}if(ao){return true
}}var aw=y.isFunction(ak[aC]);
if(aw){var aq=ak[aC]();
if(aD!="string"){aq=Q.getvaluebytype(aq,{type:aD})
}ah[aC]=aq;
if(ak[aC].subscribe){var az=aj;
Q.koSubscriptions[Q.koSubscriptions.length]=ak[aC].subscribe(function(aF){var aE=az;
ah[aC]=aF;
var aG={index:aE,oldrecord:ah,record:ah};
Q._changedrecords.push(aG);
if(Q.isUpdating){return
}Q.callBindingUpdate("update");
Q._changedrecords=[];
return false
})
}}else{var aq=ak[aC];
if(au!=null){var at=au.split(Q.mapChar);
if(at.length>0){var ax=ak;
for(var av=0;
av<at.length;
av++){ax=ax[at[av]]
}aq=ax
}else{aq=ak[au]
}}if(aD!="string"){aq=Q.getvaluebytype(aq,{type:aD})
}ah[ap]=aq;
if(ah[ap]!=undefined){al+=ah[ap].toString().length+ah[ap].toString().substr(0,1)
}}});
var ai=Q.getid(ad.id,ak,aj);
ah.uid=ai;
Q.records.push(ah);
ah._koindex=al;
if(Q._oldrecords){var ag=Q.records.length-1;
if(J=="update"){if(Q._oldrecords[ag]._koindex!=al){var an={index:ag,oldrecord:Q._oldrecords[ag],record:ah};
Q._changedrecords.push(an)
}}}}});
if(J=="add"){var U=Q.records.length;
for(var af=0;
af<U;
af++){var R=Q.records[af];
var X=false;
for(var ab=0;
ab<Q._oldrecords.length;
ab++){if(Q._oldrecords[ab]._koindex===R._koindex){X=true;
break
}}if(!X){Q._changedrecords.push({index:af,oldrecord:null,record:R,position:(af!=0?"last":"first")})
}}}else{if(J=="remove"){var U=Q._oldrecords.length;
for(var af=0;
af<U;
af++){var Y=Q._oldrecords[af];
if(!Q.records[af]){Q._changedrecords.push({index:af,oldrecord:Y,record:null})
}else{if(Q.records[af]._koindex!=Y._koindex){Q._changedrecords.push({index:af,oldrecord:Y,record:null})
}}}}}}else{if(!y.isArray(ad.localdata)){this.records=new Array();
y.each(ad.localdata,function(ai){var ah=Q.getid(ad.id,this,ai);
if(I>0){var ag=this;
var aj=S(ag,I);
aj.uid=ah;
Q.records[Q.records.length]=aj
}else{this.uid=ah;
Q.records[Q.records.length]=this
}})
}else{if(I==0){y.each(ad.localdata,function(ai,aj){var ag=y.extend({},this);
if(typeof aj==="string"){Q.records=ad.localdata;
return false
}else{var ah=Q.getid(ad.id,ag,ai);
if(typeof(ah)==="object"){ah=ai
}ag.uid=ah;
Q.records[Q.records.length]=ag
}})
}else{y.each(ad.localdata,function(ai){var ag=this;
var aj=S(ag,I);
var ah=Q.getid(ad.id,aj,ai);
if(typeof(ah)==="object"){ah=ai
}var ag=y.extend({},aj);
ag.uid=ah;
Q.records[Q.records.length]=ag
})
}}}this.originaldata=ad.localdata;
this.cachedrecords=this.records;
this.addForeignValues(ad);
if(T.uniqueDataFields){var ae=this.getUniqueRecords(this.records,T.uniqueDataFields);
this.records=ae;
this.cachedrecords=ae
}if(T.beforeLoadComplete){var K=T.beforeLoadComplete(Q.records,this.originaldata);
if(K!=undefined){Q.records=K;
Q.cachedrecords=K
}}if(T.autoSort&&T.autoSortField){var Z=Object.prototype.toString;
Object.prototype.toString=(typeof field=="function")?field:function(){return this[T.autoSortField]
};
Q.records.sort(function(ah,ag){if(ah===undefined){ah=null
}if(ag===undefined){ag=null
}if(ah===null&&ag===null){return 0
}if(ah===null&&ag!==null){return 1
}if(ah!==null&&ag===null){return -1
}ah=ah.toString();
ag=ag.toString();
if(y.jqx.dataFormat.isNumber(ah)&&y.jqx.dataFormat.isNumber(ag)){if(ah<ag){return -1
}if(ah>ag){return 1
}return 0
}else{if(y.jqx.dataFormat.isDate(ah)&&y.jqx.dataFormat.isDate(ag)){if(ah<ag){return -1
}if(ah>ag){return 1
}return 0
}else{if(!y.jqx.dataFormat.isNumber(ah)&&!y.jqx.dataFormat.isNumber(ag)){ah=String(ah).toLowerCase();
ag=String(ag).toLowerCase()
}}}try{if(ah<ag){return -1
}if(ah>ag){return 1
}}catch(ai){var aj=ai
}return 0
});
Object.prototype.toString=Z
}Q.loadedData=ad.localdata;
Q.buildHierarchy();
if(y.isFunction(T.loadComplete)){T.loadComplete(ad.localdata,Q.records)
}break;
case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":if(ad.localdata!=null){if(y.isFunction(ad.beforeprocessing)){ad.beforeprocessing(ad.localdata)
}if(ad.datatype==="xml"){Q.loadxml(ad.localdata,ad.localdata,ad)
}else{if(ac==="text"){Q.loadtext(ad.localdata,ad)
}else{Q.loadjson(ad.localdata,ad.localdata,ad)
}}Q.addForeignValues(ad);
if(T.uniqueDataFields){var ae=Q.getUniqueRecords(Q.records,T.uniqueDataFields);
Q.records=ae;
Q.cachedrecords=ae
}if(T.beforeLoadComplete){var K=T.beforeLoadComplete(Q.records,this.originaldata);
if(K!=undefined){Q.records=K;
Q.cachedrecords=K
}}Q.loadedData=ad.localdata;
Q.buildHierarchy.call(Q);
if(y.isFunction(T.loadComplete)){T.loadComplete(ad.localdata,Q.records)
}Q.callBindingUpdate(J);
return
}var O=T.data!=undefined?T.data:{};
if(ad.processdata){ad.processdata(O)
}if(y.isFunction(T.processData)){T.processData(O)
}if(y.isFunction(T.formatData)){var P=T.formatData(O);
if(P!=undefined){O=P
}}var e="application/x-www-form-urlencoded";
if(T.contentType){e=T.contentType
}var V="GET";
if(ad.type){V=ad.type
}if(T.type){V=T.type
}if(ad.url&&ad.url.length>0){if(y.isFunction(T.loadServerData)){Q._requestData(O,ad,T)
}else{this.xhr=y.jqx.data.ajax({dataType:ac,cache:this.cache,type:V,url:ad.url,async:W,timeout:ad.timeout,contentType:e,data:O,success:function(ai,am,al){if(y.isFunction(ad.beforeprocessing)){var ak=ad.beforeprocessing(ai,am,al);
if(ak!=undefined){ai=ak
}}if(y.isFunction(T.downloadComplete)){var ak=T.downloadComplete(ai,am,al);
if(ak!=undefined){ai=ak
}}if(ai==null){Q.records=new Array();
Q.cachedrecords=new Array();
Q.originaldata=new Array();
Q.callDownloadComplete();
if(y.isFunction(T.loadComplete)){T.loadComplete(new Array())
}return
}var ag=ai;
if(ai.records){ag=ai.records
}if(ai.totalrecords!=undefined){ad.totalrecords=ai.totalrecords
}if(ad.datatype==="xml"){Q.loadxml(null,ag,ad)
}else{if(ac==="text"){Q.loadtext(ag,ad)
}else{Q.loadjson(null,ag,ad)
}}Q.addForeignValues(ad);
if(T.uniqueDataFields){var ah=Q.getUniqueRecords(Q.records,T.uniqueDataFields);
Q.records=ah;
Q.cachedrecords=ah
}if(T.beforeLoadComplete){var aj=T.beforeLoadComplete(Q.records,ai);
if(aj!=undefined){Q.records=aj;
Q.cachedrecords=aj
}}Q.loadedData=ai;
Q.buildHierarchy.call(Q);
Q.callDownloadComplete();
if(y.isFunction(T.loadComplete)){T.loadComplete(ai,am,al,Q.records)
}},error:function(ai,ag,ah){if(y.isFunction(ad.loaderror)){ad.loaderror(ai,ag,ah)
}if(y.isFunction(T.loadError)){T.loadError(ai,ag,ah)
}ai=null;
Q.callDownloadComplete()
},beforeSend:function(ah,ag){if(y.isFunction(T.beforeSend)){T.beforeSend(ah,ag)
}if(y.isFunction(ad.beforesend)){ad.beforesend(ah,ag)
}}})
}}else{Q.buildHierarchy(new Array());
Q.callDownloadComplete();
if(y.isFunction(T.loadComplete)){if(!N){var N={}
}T.loadComplete(N)
}}break
}this.callBindingUpdate(J)
},buildHierarchy:function(K){var e=this._source;
var P=new Array();
if(!e.datafields){return
}if(e.hierarchy&&!e.hierarchy.reservedNames){e.hierarchy.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}
}else{if(e.hierarchy){var O=e.hierarchy.reservedNames;
if(!O.leaf){O.leaf="leaf"
}if(!O.parent){O.parent="parent"
}if(!O.expanded){O.expanded="expanded"
}if(!O.checked){O.checked="checked"
}if(!O.selected){O.selected="selected"
}if(!O.level){O.level="level"
}if(!O.data){O.data="data"
}}}if(!e.hierarchy){return
}var N=this;
var O=e.hierarchy.reservedNames;
if(e.hierarchy.root){if(e.dataType=="xml"){var P=this.getRecordsHierarchy("uid","parentuid","records",null,K);
this.hierarchy=P;
return P
}else{this.hierarchy=this.records;
var R=e.hierarchy.root;
for(var L=0;
L<this.records.length;
L++){var M=this.records[L];
if(!M){continue
}var H=function(S){if(e.hierarchy.record){S.records=S[R][e.hierarchy.record]
}else{var U=R.split(N.mapChar);
var T=null;
if(U.length>1){var W=S;
for(var V=0;
V<U.length;
V++){if(W!=undefined){W=W[U[V]]
}}T=W
}else{T=S[R]
}S.records=T
}if(S.records==null||(S.records&&S.records.length==0)){S[O.leaf]=true
}};
H(M);
M[O.level]=0;
var I=this.getid(e.id,M,L);
M.uid=I;
M[O.parent]=null;
M[O.data]=M;
if(M[O.expanded]===undefined){M[O.expanded]=false
}var Q=function(W,U){if(!U){W.records=new Array();
return
}for(var V=0;
V<U.length;
V++){var S=U[V];
if(!S){continue
}H(S);
S[O.level]=W[O.level]+1;
S[O.parent]=W;
S[O.data]=S;
var T=N.getid(e.id,S,V);
if(T==V&&e.id==null){S.uid=W.uid+"_"+T
}else{S.uid=T
}if(S[O.expanded]===undefined){S[O.expanded]=false
}Q(S,S.records)
}};
Q(M,M.records)
}}return this.hierarchy
}if(e.hierarchy.keyDataField&&e.hierarchy.parentDataField){var P=this.getRecordsHierarchy(e.hierarchy.keyDataField.name,e.hierarchy.parentDataField.name,"records",null,K);
this.hierarchy=P;
return P
}if(e.hierarchy.groupingDataFields){var J=new Array();
for(var L=0;
L<e.hierarchy.groupingDataFields.length;
L++){J.push(e.hierarchy.groupingDataFields[L].name)
}var P=this.getGroupedRecords(J,"records","label",null,"data",null,"parent",K);
this.hierarchy=P;
return P
}},addRecord:function(H,e,M,I){var J=this;
var N=function(){return{leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}
};
if(H!=undefined){if(M!=undefined){if(this.hierarchy.length>0){var K=function(O){if(O){for(var P=0;
P<O.length;
P++){var Q=O[P];
if(Q.uid==M){var R=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;
if(R==null){R=N()
}H[R.parent]=Q;
H[R.level]=Q[R.level]+1;
if(!Q.records){Q.records=new Array();
Q[R.leaf]=false
}if(e=="last"){Q.records.push(H)
}else{if(typeof e==="number"&&isFinite(e)){Q.records.splice(e,0,H)
}else{Q.records.splice(0,0,H)
}}J.records.push(H);
return true
}if(Q.records){K(Q.records)
}}}};
K(this.hierarchy)
}}else{if(this.hierarchy&&this.hierarchy.length>=0&&(this._source.hierarchy||I)){var L=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;
if(L==null){L=N()
}H[L.level]=0;
if(e=="last"){this.hierarchy.push(H)
}else{if(typeof e==="number"&&isFinite(e)){this.hierarchy.splice(e,0,H)
}else{this.hierarchy.splice(0,0,H)
}}}else{if(e=="last"){this.records.push(H)
}else{if(typeof e==="number"&&isFinite(e)){this.records.splice(e,0,H)
}else{this.records.splice(0,0,H)
}}}return true
}}return false
},deleteRecord:function(H){var J=this;
if(this.hierarchy.length>0){var K=function(L){if(L){for(var O=0;
O<L.length;
O++){var P=L[O];
if(P.uid==H){L.splice(O,1);
if(J.recordids[H]){delete J.recordids[H]
}var N=function(T){for(var Q=0;
Q<T.length;
Q++){var S=T[Q].uid;
for(var R=0;
R<J.records.length;
R++){var U=J.records[R];
if(U.uid==S){J.records.splice(R,1);
break
}}if(T[Q].records){N(T[Q].records)
}}};
if(P.records){N(P.records)
}for(var M=0;
M<J.records.length;
M++){var P=J.records[M];
if(P.uid==H){J.records.splice(M,1);
break
}}return true
}if(P.records){K(P.records)
}}}};
K(this.hierarchy)
}else{for(var e=0;
e<this.records.length;
e++){var I=this.records[e];
if(I.uid==H){this.records.splice(e,1);
return true
}}}return false
},addForeignValues:function(H){var Q=this;
var V=H.datafields?H.datafields.length:0;
for(var N=0;
N<V;
N++){var L=H.datafields[N];
if(L!=undefined){if(L.values!=undefined){if(L.value==undefined){L.value=L.name
}if(L.values.value==undefined){L.values.value=L.value
}var T=new Array();
var K,M;
if(Q.pageable&&Q.virtualmode){K=Q.pagenum*Q.pagesize;
M=K+Q.pagesize;
if(M>Q.totalrecords){M=Q.totalrecords
}}else{if(Q.virtualmode){K=H.recordstartindex;
M=H.recordendindex;
if(M>Q.totalrecords){M=Q.totalrecords
}}else{K=0;
M=Q.records.length
}}for(var O=K;
O<M;
O++){var P=Q.records[O];
var I=L.name;
var U=P[L.value];
if(T[U]!=undefined){P[I]=T[U]
}else{for(var J=0;
J<L.values.source.length;
J++){var S=L.values.source[J];
var e=S[L.values.value];
if(e==undefined){e=S.uid
}if(e==U){var R=S[L.values.name];
P[I]=R;
T[U]=R;
break
}}}}}else{if(L.value!=undefined){for(var O=0;
O<Q.records.length;
O++){var P=Q.records[O];
P[L.name]=P[L.value]
}}}}}},abort:function(){if(this.xhr&&this.xhr.readyState!=4){this.xhr.abort();
me.callDownloadComplete()
}},_requestData:function(H,J,e){var I=this;
var K=function(L){if(L.totalrecords){J.totalrecords=L.totalrecords;
I.totalrecords=L.totalrecords
}if(L.records){I.records=L.records;
I.cachedrecords=L.records
}if(y.isFunction(e.loadComplete)){e.loadComplete(L)
}I.callDownloadComplete()
};
e.loadServerData(H,J,K)
},getUniqueRecords:function(I,L){if(I&&L){var e=I.length;
var Q=L.length;
var N=new Array();
var O=new Array();
for(var P=0;
P<e;
P++){var M=I[P];
var J="";
if(M==undefined){continue
}for(var K=0;
K<Q;
K++){var H=L[K];
J+=M[H]+"_"
}if(!O[J]){N[N.length]=M
}O[J]=true
}}return N
},getAggregatedData:function(S,P,M,H){var L=M;
if(!L){L=this.records
}var Q={};
var K=new Array();
var J=L.length;
if(J==0){return
}if(J==undefined){return
}for(var O=0;
O<J;
O++){var R=L[O];
for(var N=0;
N<S.length;
N++){var I=S[N];
var U=R[I.name];
if(U===null){continue
}if(I.aggregates){Q[I.name]=Q[I.name]||{};
K[I.name]=K[I.name]||0;
K[I.name]++;
var e=function(W){for(obj in W){var X=Q[I.name][obj];
if(X==null){Q[I.name][obj]=0;
X=0
}if(y.isFunction(W[obj])){X=W[obj](X,U,I.name,R,H)
}Q[I.name][obj]=X
}};
var T=parseFloat(U);
if(isNaN(T)){T=false
}else{T=true
}if(T){U=parseFloat(U)
}if(typeof U==="number"&&isFinite(U)){y.each(I.aggregates,function(){var W=Q[I.name][this];
if(W==null){W=0;
if(this=="min"){W=9999999999999
}if(this=="max"){W=-9999999999999
}}if(this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){W+=parseFloat(U)
}else{if(this=="product"){if(O==0){W=parseFloat(U)
}else{W*=parseFloat(U)
}}else{if(this=="min"){W=Math.min(W,parseFloat(U))
}else{if(this=="max"){W=Math.max(W,parseFloat(U))
}else{if(this=="count"){W++
}else{if(typeof(this)=="object"){e(this);
return
}}}}}}Q[I.name][this]=W
})
}else{y.each(I.aggregates,function(){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){var W=Q[I.name][this];
if(W==null){W=0
}Q[I.name][this]=W;
return true
}if(typeof(this)=="object"){e(this)
}})
}}}}for(var N=0;
N<S.length;
N++){var I=S[N];
if(!Q[I.name]){Q[I.name]={};
y.each(I.aggregates,function(W){Q[I.name][this]=0
})
}if(Q[I.name]["avg"]!=undefined){var U=Q[I.name]["avg"];
var V=K[I.name];
if(V===0||V==undefined){Q[I.name]["avg"]=0
}else{Q[I.name]["avg"]=U/V
}}else{if(Q[I.name]["count"]!=undefined){Q[I.name]["count"]=J
}}if(Q[I.name]["stdev"]||Q[I.name]["stdevp"]||Q[I.name]["var"]||Q[I.name]["varp"]){y.each(I.aggregates,function(ad){if(this=="stdev"||this=="var"||this=="varp"||this=="stdevp"){var ae=Q[I.name][this];
var ac=J;
var X=(ae/J);
var Z=0;
for(var aa=0;
aa<J;
aa++){var ab=L[aa];
var W=ab[I.name];
Z+=(W-X)*(W-X)
}var Y=(this=="stdevp"||this=="varp")?ac:ac-1;
if(Y==0){Y=1
}if(this=="var"||this=="varp"){Q[I.name][this]=Z/Y
}else{if(this=="stdevp"||this=="stdev"){Q[I.name][this]=Math.sqrt(Z/Y)
}}}})
}if(I.formatStrings){y.each(I.aggregates,function(X){var W=I.formatStrings[X];
if(W){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){var Y=Q[I.name][this];
Q[I.name][this]=y.jqx.dataFormat.formatnumber(Y,W,P)
}else{if(typeof this=="object"){for(obj in this){var Y=Q[I.name][obj];
Q[I.name][obj]=y.jqx.dataFormat.formatnumber(Y,W,P)
}}}}})
}}return Q
},bindDownloadComplete:function(H,e){this._downloadComplete[this._downloadComplete.length]={id:H,func:e}
},unbindDownloadComplete:function(H){for(var e=0;
e<this._downloadComplete.length;
e++){if(this._downloadComplete[e].id==H){this._downloadComplete[e].func=null;
this._downloadComplete.splice(e,1);
break
}}},callDownloadComplete:function(){for(var e=0;
e<this._downloadComplete.length;
e++){var H=this._downloadComplete[e];
if(H.func!=null){H.func()
}}},setSource:function(e){this._source=e
},generatekey:function(){var e=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)
};
return(e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e())
},getGroupedRecords:function(N,U,K,H,Q,P,ad,I,am){var M=0;
var aa=this;
if(!am){am=0
}var Z=new Array();
for(var V=0;
V<N.length;
V++){Z[V]=aa.generatekey()
}if(!U){U="items"
}if(!K){K="group"
}if(!Q){Q="record"
}if(!ad){ad="parentItem"
}if(undefined===P){P="value"
}var ah=new Array();
var W=0;
var ac=new Array();
var ae=N.length;
var al=new Array();
if(!I){var I=this.records
}var X=I.length;
var J=function(ao){var ap=ao;
if(H){y.each(H,function(){if(this.name&&this.map){ap[this.map]=ap[this.name]
}})
}return ap
};
for(var aj=0;
aj<X;
aj++){var S=J(I[aj]);
id=S[aa.uniqueId];
var R=new Array();
var L=0;
for(V=0;
V<ae;
V++){var Y=N[V];
var af=S[Y];
if(null==af){continue
}R[L++]={value:af,hash:Z[V]}
}if(R.length!=ae){break
}var ak=null;
var ag="";
var e=-1;
for(var an=0;
an<R.length;
an++){e++;
var ab=R[an].value;
var T=R[an].hash;
ag=ag+"_"+T+"_"+ab;
if(ac[ag]!=undefined&&ac[ag]!=null){ak=ac[ag];
continue
}if(ak==null){ak={level:0};
ak[ad]=null;
ak[K]=ab;
ak[Q]=S;
if(S.expanded!==undefined){ak.expanded=S.expanded
}else{ak.expanded=false
}if(P){ak[P]=S[P]
}ak[U]=new Array();
var O=ah.length+am;
if(!this._source.id||typeof S.uid==="number"||isFinite(S.uid)){O="Row"+O
}ak.uid=O;
ah[W++]=ak
}else{var ai={level:ak.level+1};
ai[ad]=ak;
ai[K]=ab;
ai[U]=new Array();
ai[Q]=S;
if(S.expanded!==undefined){ai.expanded=S.expanded
}else{ai.expanded=false
}if(P){ai[P]=S[P]
}ai.uid=ak.uid+"_"+ak[U].length;
ak[U][ak[U].length]=ai;
ak=ai
}ac[ag]=ak
}if(S){S.leaf=true
}if(ak!=null){if(this._source.id==null){S.uid=ak.uid+"_"+ak[U].length
}S[ad]=ak;
S.level=ak.level+1;
ak[U][ak[U].length]=S
}else{if(!S.uid){S.uid=this.generatekey()
}}}return ah
},getRecordsHierarchy:function(H,ab,W,Q,Z){var Y=new Array();
var aa=this.records;
if(Z){aa=Z
}if(this.records.length==0){return null
}var U=W!=null?W:"items";
var N=[];
var X=aa;
var K=X.length;
var L=(this._source&&this._source.hierarchy)?this._source.hierarchy.reservedNames:null;
var S=function(ac){var ad=ac;
if(Q){y.each(Q,function(){if(this.name&&this.map){ad[this.map]=ad[this.name]
}})
}return ad
};
for(var T=0;
T<K;
T++){var V=y.extend({},X[T]);
var P=V[ab];
var O=V[H];
N[O]={parentid:P,item:V}
}for(var T=0;
T<K;
T++){var V=y.extend({},X[T]);
var P=V[ab];
var O=V[H];
if(N[P]!=undefined){var V={parentid:P,item:N[O].item};
var M=N[P].item;
if(!M[U]){M[U]=[]
}var I=M[U].length;
var e=V.item;
if(!L){if(e.parent==undefined){e.parent=M
}}else{if(e[L.parent]==undefined){e[L.parent]=M
}}var J=S(e);
M[U][I]=J;
N[P].item=M;
N[O]=V
}else{var e=N[O].item;
if(!L){if(e.parent==undefined){e.parent=null
}}else{if(e[L.parent]==undefined){e[L.parent]=null
}}var J=S(e);
if(!L){J.level=0
}else{J[L.level]=0
}Y[Y.length]=J
}}if(Y.length!=0){var R=function(af,ac){for(var ad=0;
ad<ac.length;
ad++){if(!L){ac[ad].level=af
}else{ac[ad][L.level]=af
}var ae=ac[ad][U];
if(ae){if(ae.length>0){R(af+1,ae)
}else{if(!L){ac[ad].leaf=true
}else{ac[ad][L.leaf]=true
}}}else{if(!L){ac[ad].leaf=true
}else{ac[ad][L.leaf]=true
}}}};
R(0,Y)
}return Y
},bindBindingUpdate:function(H,e){this._bindingUpdate[this._bindingUpdate.length]={id:H,func:e}
},unbindBindingUpdate:function(H){for(var e=0;
e<this._bindingUpdate.length;
e++){if(this._bindingUpdate[e].id==H){this._bindingUpdate[e].func=null;
this._bindingUpdate.splice(e,1);
break
}}},callBindingUpdate:function(e){for(var I=0;
I<this._bindingUpdate.length;
I++){var H=this._bindingUpdate[I];
if(H.func!=null){H.func(e)
}}},getid:function(N,H,K){if(N!=null&&N.name!=undefined){if(N.name){var e=y(H).attr(N.name);
if(e!=null&&e.toString().length>0){return e
}else{if(N.map){try{var e=y(H).attr(N.map);
if(e!=null&&e.toString().length>0){return e
}else{if(y(N.map,H).length>0){return y(N.map,H).text()
}else{if(y(N.name,H).length>0){return y(N.name,H).text()
}}}}catch(J){return K
}}}return
}}if(y(N,H).length>0){return y(N,H).text()
}if(N){if(N.toString().length>0){var e=y(H).attr(N);
if(e!=null&&e.toString().length>0){return e
}else{var I=N.split(this.mapChar);
if(I.length>1){var M=H;
for(var L=0;
L<I.length;
L++){if(M!=undefined){M=M[I[L]]
}}if(M!=undefined){return M
}}else{if(H[N]!=undefined){return H[N]
}}}}}return K
},loadjson:function(Q,N,aa){if(typeof(Q)=="string"){Q=y.parseJSON(Q)
}if(aa.root==undefined){aa.root=""
}if(aa.record==undefined){aa.record=""
}var Q=Q||N;
if(!Q){Q=[]
}var M=this;
if(aa.root!=""){var T=aa.root.split(M.mapChar);
if(T.length>1){var I=Q;
for(var ac=0;
ac<T.length;
ac++){if(I!=undefined){I=I[T[ac]]
}}Q=I
}else{if(Q[aa.root]!=undefined){Q=Q[aa.root]
}else{y.each(Q,function(ah){var ag=this;
if(this==aa.root){Q=this;
return false
}else{if(this[aa.root]!=undefined){Q=this[aa.root]
}}})
}if(!Q){var T=aa.root.split(M.mapChar);
if(T.length>0){var I=Q;
for(var ac=0;
ac<T.length;
ac++){if(I!=undefined){I=I[T[ac]]
}}Q=I
}}}}else{if(!Q.length){for(obj in Q){if(y.isArray(Q[obj])){Q=Q[obj];
break
}}}}if(Q!=null&&Q.length==undefined){Q=y.makeArray(Q)
}if(Q==null||Q.length==undefined){alert("JSON Parse error.");
return
}if(Q.length==0){this.totalrecords=0;
return
}var V=Q.length;
this.totalrecords=this.virtualmode?(aa.totalrecords||V):V;
this.records=new Array();
this.originaldata=new Array();
var af=this.records;
var ab=!this.pageable?aa.recordstartindex:this.pagesize*this.pagenum;
this.recordids=new Array();
if(aa.loadallrecords){ab=0;
V=this.totalrecords
}var Y=0;
if(this.virtualmode){ab=!this.pageable?aa.recordstartindex:this.pagesize*this.pagenum;
Y=ab;
ab=0;
V=this.totalrecords
}var e=aa.datafields?aa.datafields.length:0;
if(e==0){var P=Q[0];
var K=new Array();
for(obj in P){var S=obj;
K[K.length]={name:S}
}aa.datafields=K;
e=K.length
}var U=ab;
for(var H=ab;
H<V;
H++){var R=Q[H];
if(R==undefined){break
}if(aa.record&&aa.record!=""){R=R[aa.record];
if(R==undefined){continue
}}var O=this.getid(aa.id,R,H);
if(typeof(O)==="object"){O=H
}if(!this.recordids[O]){this.recordids[O]=R;
var X={};
for(var ad=0;
ad<e;
ad++){var W=aa.datafields[ad];
var ae="";
if(undefined==W||W==null){continue
}if(W.map){if(y.isFunction(W.map)){ae=W.map(R)
}else{var T=W.map.split(M.mapChar);
if(T.length>0){var L=R;
for(var ac=0;
ac<T.length;
ac++){if(L!=undefined){L=L[T[ac]]
}}ae=L
}else{ae=R[W.map]
}}if(ae!=undefined&&ae!=null){ae=this.getvaluebytype(ae,W)
}else{if(ae==undefined&&ae!=null){ae=""
}}}if(ae==""&&!W.map){ae=R[W.name];
if(ae==undefined&&ae!=null){ae=""
}if(W.value!=undefined){if(ae!=undefined){var J=ae[W.value];
if(J!=undefined){ae=J
}}}}ae=this.getvaluebytype(ae,W);
if(W.displayname!=undefined){X[W.displayname]=ae
}else{X[W.name]=ae
}if(W.type==="array"){var Z=function(aj){if(!aj){return
}for(var ap=0;
ap<aj.length;
ap++){var am=aj[ap];
if(!am){continue
}for(var an=0;
an<e;
an++){var ai=aa.datafields[an];
var ao="";
if(undefined==ai||ai==null){continue
}if(ai.map){if(y.isFunction(ai.map)){ao=ai.map(am)
}else{var ag=ai.map.split(M.mapChar);
if(ag.length>0){var al=am;
for(var ah=0;
ah<ag.length;
ah++){if(al!=undefined){al=al[ag[ah]]
}}ao=al
}else{ao=am[ai.map]
}}if(ao!=undefined&&ao!=null){ao=this.getvaluebytype(ao,ai)
}else{if(ao==undefined&&ao!=null){ao=""
}}}if(ao==""&&!ai.map){ao=am[ai.name];
if(ao==undefined&&ao!=null){ao=""
}if(ai.value!=undefined){if(ao!=undefined){var ak=ao[ai.value];
if(ak!=undefined){ao=ak
}}}}ao=this.getvaluebytype(ao,ai);
if(ai.displayname!=undefined){am[ai.displayname]=ao
}else{am[ai.name]=ao
}if(ai.type==="array"){Z.call(this,ao)
}}}};
Z.call(this,ae)
}}if(aa.recordendindex<=0||ab<aa.recordendindex){af[Y+U]=y.extend({},X);
af[Y+U].uid=O;
this.originaldata[Y+U]=y.extend({},af[H]);
U++
}}}this.records=af;
this.cachedrecords=this.records
},loadxml:function(J,af,R){if(typeof(J)=="string"){J=af=y(y.parseXML(J));
J=null
}if(R.root==undefined){R.root=""
}if(R.record==undefined){R.record=""
}var J;
if(y.jqx.browser.msie&&af){if(af.xml!=undefined){J=y(R.root+" "+R.record,y.parseXML(af.xml))
}else{J=J||y(R.root+" "+R.record,af)
}}else{J=J||y(R.root+" "+R.record,af)
}if(!J){J=[]
}var H=J.length;
if(J.length==0){return
}this.totalrecords=this.virtualmode?(R.totalrecords||H):H;
this.records=new Array();
this.originaldata=new Array();
var T=this.records;
var W=!this.pageable?R.recordstartindex:this.pagesize*this.pagenum;
this.recordids=new Array();
if(R.loadallrecords){W=0;
H=this.totalrecords
}var P=0;
if(this.virtualmode){W=!this.pageable?R.recordstartindex:this.pagesize*this.pagenum;
P=W;
W=0;
H=this.totalrecords
}var X=R.datafields?R.datafields.length:0;
if(X==0){var ag=J[0];
var ac=new Array();
for(obj in ag){var ah=obj;
ac[ac.length]={name:ah}
}R.datafields=ac;
X=ac.length
}var Q=W;
var ab=false;
for(var aa=W;
aa<H;
aa++){var ai=J[aa];
if(ai==undefined){break
}var ae=this.getid(R.id,ai,aa);
if(!this.recordids[ae]){this.recordids[ae]=ai;
var L={};
var K=false;
if(R.hierarchy&&R.hierarchy.root){K=true
}for(var Y=0;
Y<X;
Y++){var M=R.datafields[Y];
var U="";
if(undefined==M||M==null){continue
}if(M.map){if(y.isFunction(M.map)){U=M.map(ai)
}else{var N=M.map.indexOf("[");
if(N<0){U=y(M.map,ai);
if(U.length==1){U=U.text()
}else{ab=true;
var ad=new Array();
for(var V=0;
V<U.length;
V++){ad.push(y(U[V]).text())
}U=ad;
if(K&&ad.length>0){U=ad[0]
}}}else{var Z=M.map.substring(0,N-1);
var I=M.map.indexOf("]");
var O=M.map.substring(N+1,I);
U=y(Z,ai).attr(O);
if(U==undefined){U=y(ai).attr(O)
}if(U==undefined){U=""
}}if(U==""){U=y(ai).attr(M.map);
if(U==undefined){U=""
}}}}if(U==""){U=y(M.name,ai);
if(U.length==1){U=U.text()
}else{var ad=new Array();
for(var V=0;
V<U.length;
V++){ad.push(y(U[V]).text())
}U=ad;
if(K&&ad.length>0){U=ad[0]
}}if(U==""){U=y(ai).attr(M.name);
if(U==undefined){U=""
}}if(U==""){if(ai.nodeName&&ai.nodeName==M.name&&ai.firstChild){U=y(ai.firstChild).text()
}}}var S=U;
U=this.getvaluebytype(U,M);
if(M.displayname!=undefined){L[M.displayname]=U
}else{L[M.name]=U
}}if(R.recordendindex<=0||W<R.recordendindex){T[P+Q]=y.extend({},L);
T[P+Q].uid=ae;
this.originaldata[P+Q]=y.extend({},T[aa]);
Q++
}}}if(R.hierarchy&&R.hierarchy.root){for(var aa=W;
aa<H;
aa++){var ai=J[aa];
var e=T[aa];
if(y(ai).parent().length>0){var ae=this.getid(R.id,y(ai).parents(R.hierarchy.record+":first"));
e.parentuid=ae
}else{e.parentuid=null
}}}this.records=T;
this.cachedrecords=this.records
},loadtext:function(Y,P){if(Y==null){return
}var e=P.rowDelimiter||this.rowDelimiter||"\n";
var L=Y.split(e);
var J=L.length;
var X=Y.split("\r");
if(J==1&&X.length>1){L=X;
J=L.length
}this.totalrecords=this.virtualmode?(P.totalrecords||J):J;
this.records=new Array();
this.originaldata=new Array();
var U=this.records;
var R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;
this.recordids=new Array();
if(P.loadallrecords){R=0;
J=this.totalrecords
}var N=0;
if(this.virtualmode){R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;
N=R;
R=0;
J=this.totalrecords
}var V=P.datafields.length;
var O=P.columnDelimiter||this.columnDelimiter;
if(!O){O=(P.datatype==="tab"||P.datatype==="tsv")?"\t":","
}for(var T=R;
T<J;
T++){var I=L[T];
var W=null;
if(!this.recordids[W]){if(P.id==null){W=T;
this.recordids[W]=I
}var K={};
var H=L[T].split(O);
for(var S=0;
S<V;
S++){if(S>=H.length){continue
}var M=P.datafields[S];
var Q=H[S];
if(M.map&&y.isFunction(M.map)){Q=M.map(I)
}if(M.type){Q=this.getvaluebytype(Q,M)
}var Z=M.map||M.name||S.toString();
K[Z]=Q;
if(P.id!=null){if(P.id===M.name){W=Q;
this.recordids[W]=I
}}}if(W==null){W=T
}U[N+T]=y.extend({},K);
U[N+T].uid=W;
this.originaldata[N+T]=y.extend({},U[T])
}}this.records=U;
this.cachedrecords=this.records
},getvaluebytype:function(L,H){var J=L;
if(L==null){return L
}if(y.isArray(L)&&H.type!="array"){for(var I=0;
I<L.length;
I++){L[I]=this.getvaluebytype(L[I],H)
}return L
}if(H.type=="date"){if(L=="NaN"){L=""
}else{var K=new Date(L);
if(typeof L=="string"){if(H.format){var e=y.jqx.dataFormat.parsedate(L,H.format);
if(e!=null){K=e
}}}if(K.toString()=="NaN"||K.toString()=="Invalid Date"){if(y.jqx.dataFormat){L=y.jqx.dataFormat.tryparsedate(L)
}else{L=K
}}else{L=K
}if(L==null){L=J
}}}else{if(H.type=="float"||H.type=="number"||H.type=="decimal"){if(L=="NaN"){L=""
}else{var L=parseFloat(L);
if(isNaN(L)){L=J
}}}else{if(H.type=="int"||H.type=="integer"){var L=parseInt(L);
if(isNaN(L)){L=J
}}else{if(H.type=="bool"||H.type=="boolean"){if(L!=null){if(L.toLowerCase!=undefined){if(L.toLowerCase()=="false"){L=false
}else{if(L.toLowerCase()=="true"){L=true
}}}}if(L==1){L=true
}else{if(L==0&&L!==""){L=false
}else{L=""
}}}}}}return L
}};
y.jqx.dataFormat={};
y.extend(y.jqx.dataFormat,{regexTrim:/^\s+|\s+$/g,regexInfinity:/^[+-]?infinity$/i,regexHex:/^0x[a-f0-9]+$/i,regexParseFloat:/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,toString:Object.prototype.toString,isBoolean:function(e){return typeof e==="boolean"
},isObject:function(e){return(e&&(typeof e==="object"||y.isFunction(e)))||false
},isDate:function(e){return e instanceof Date
},arrayIndexOf:function(J,I){if(J.indexOf){return J.indexOf(I)
}for(var e=0,H=J.length;
e<H;
e++){if(J[e]===I){return e
}}return -1
},isString:function(e){return typeof e==="string"
},isNumber:function(e){return typeof e==="number"&&isFinite(e)
},isNull:function(e){return e===null
},isUndefined:function(e){return typeof e==="undefined"
},isValue:function(e){return(this.isObject(e)||this.isString(e)||this.isNumber(e)||this.isBoolean(e))
},isEmpty:function(e){if(!this.isString(e)&&this.isValue(e)){return false
}else{if(!this.isValue(e)){return true
}}e=y.trim(e).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");
return e===""
},startsWith:function(H,e){return H.indexOf(e)===0
},endsWith:function(H,e){return H.substr(H.length-e.length)===e
},trim:function(e){return(e+"").replace(this.regexTrim,"")
},isArray:function(e){return this.toString.call(e)==="[object Array]"
},defaultcalendar:function(){var e={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:","};
return e
},expandFormat:function(K,J){J=J||"F";
var I,H=K.patterns,e=J.length;
if(e===1){I=H[J];
if(!I){throw"Invalid date format string '"+J+"'."
}J=I
}else{if(e===2&&J.charAt(0)==="%"){J=J.charAt(1)
}}return J
},getEra:function(I,H){if(!H){return 0
}if(typeof I==="string"){return 0
}var L,K=I.getTime();
for(var J=0,e=H.length;
J<e;
J++){L=H[J].start;
if(L===null||K>=L){return J
}}return 0
},toUpper:function(e){return e.split("\u00A0").join(" ").toUpperCase()
},toUpperArray:function(e){var J=[];
for(var I=0,H=e.length;
I<H;
I++){J[I]=this.toUpper(e[I])
}return J
},getEraYear:function(H,J,e,K){var I=H.getFullYear();
if(!K&&J.eras){I-=J.eras[e].offset
}return I
},toUpper:function(e){if(e){return e.toUpperCase()
}return""
},getDayIndex:function(K,J,H){var e,L=K.days,I=K._upperDays;
if(!I){K._upperDays=I=[this.toUpperArray(L.names),this.toUpperArray(L.namesAbbr),this.toUpperArray(L.namesShort)]
}J=J.toUpperCase();
if(H){e=this.arrayIndexOf(I[1],J);
if(e===-1){e=this.arrayIndexOf(I[2],J)
}}else{e=this.arrayIndexOf(I[0],J)
}return e
},getMonthIndex:function(N,M,I){var e=N.months,H=N.monthsGenitive||N.months,K=N._upperMonths,L=N._upperMonthsGen;
if(!K){N._upperMonths=K=[this.toUpperArray(e.names),this.toUpperArray(e.namesAbbr)];
N._upperMonthsGen=L=[this.toUpperArray(H.names),this.toUpperArray(H.namesAbbr)]
}M=this.toUpper(M);
var J=this.arrayIndexOf(I?K[1]:K[0],M);
if(J<0){J=this.arrayIndexOf(I?L[1]:L[0],M)
}return J
},appendPreOrPostMatch:function(J,e){var I=0,L=false;
for(var K=0,H=J.length;
K<H;
K++){var M=J.charAt(K);
switch(M){case"'":if(L){e.push("'")
}else{I++
}L=false;
break;
case"\\":if(L){e.push("\\")
}L=!L;
break;
default:e.push(M);
L=false;
break
}}return I
},getTokenRegExp:function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
},formatlink:function(e,I){var H="";
if(I&&I.target){H="target="+I.target
}if(H!=""){return"<a "+H+' href="'+e+'">'+e+"</a>"
}return'<a href="'+e+'">'+e+"</a>"
},formatemail:function(e){return'<a href="mailto:'+e+'">'+e+"</a>"
},formatNumber:function(e,I,H){return this.formatnumber(e,I,H)
},formatnumber:function(T,S,O){if(O==undefined||O==null||O==""){O=this.defaultcalendar()
}if(S===""||S===null){return T
}if(!this.isNumber(T)){T*=1
}var P;
if(S.length>1){P=parseInt(S.slice(1),10)
}var V={};
var Q=S.charAt(0).toUpperCase();
V.thousandsSeparator=O.thousandsseparator;
V.decimalSeparator=O.decimalseparator;
switch(Q){case"D":case"d":case"F":case"f":V.decimalPlaces=P;
break;
case"N":case"n":V.decimalPlaces=0;
break;
case"C":case"c":V.decimalPlaces=P;
if(O.currencysymbolposition=="before"){V.prefix=O.currencysymbol
}else{V.suffix=O.currencysymbol
}break;
case"P":case"p":V.suffix=O.percentsymbol;
V.decimalPlaces=P;
break;
default:throw"Bad number format specifier: "+Q
}if(this.isNumber(T)){var K=(T<0);
var I=T+"";
var R=(V.decimalSeparator)?V.decimalSeparator:".";
var e;
if(this.isNumber(V.decimalPlaces)){var L=V.decimalPlaces;
var N=Math.pow(10,L);
I=(T*N).toFixed(0)/N+"";
e=I.lastIndexOf(".");
if(L>0){if(e<0){I+=R;
e=I.length-1
}else{if(R!=="."){I=I.replace(".",R)
}}while((I.length-1-e)<L){I+="0"
}}}if(V.thousandsSeparator){var U=V.thousandsSeparator;
e=I.lastIndexOf(R);
e=(e>-1)?e:I.length;
var J=I.substring(e);
var H=-1;
for(var M=e;
M>0;
M--){H++;
if((H%3===0)&&(M!==e)&&(!K||(M>1))){J=U+J
}J=I.charAt(M-1)+J
}I=J
}I=(V.prefix)?V.prefix+I:I;
I=(V.suffix)?I+V.suffix:I;
return I
}else{return T
}},tryparsedate:function(T,M){if(M==undefined||M==null){M=this.defaultcalendar()
}var Q=this;
if(T==""){return null
}if(T!=null&&!T.substring){T=T.toString()
}if(T!=null&&T.substring(0,6)=="/Date("){var R=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;
var J=new Date(+T.replace(/\/Date\((\d+)\)\//,"$1"));
if(J=="Invalid Date"){var K=T.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/);
var J=null;
if(K){J=new Date(1*K[1]+3600000*K[2]+60000*K[3])
}}if(J==null||J=="Invalid Date"||isNaN(J)){var N=R.exec(T);
if(N){var U=new Date(parseInt(N[1]));
if(N[2]){var e=parseInt(N[3]);
if(N[2]==="-"){e=-e
}var P=U.getUTCMinutes();
U.setUTCMinutes(P-e)
}if(!isNaN(U.valueOf())){return U
}}}return J
}patterns=M.patterns;
for(prop in patterns){J=Q.parsedate(T,patterns[prop],M);
if(J){if(prop=="ISO"){var I=Q.parsedate(T,patterns.ISO2,M);
if(I){return I
}}return J
}}if(T!=null){var I=null;
var S=[":","/","-"];
var O=true;
for(var H=0;
H<S.length;
H++){if(T.indexOf(S[H])!=-1){O=false
}}if(O){var L=new Number(T);
if(!isNaN(L)){return new Date(L)
}}}return null
},getparseregexp:function(e,R){var T=e._parseRegExp;
if(!T){e._parseRegExp=T={}
}else{var K=T[R];
if(K){return K
}}var Q=this.expandFormat(e,R).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),O=["^"],H=[],N=0,J=0,W=this.getTokenRegExp(),L;
while((L=W.exec(Q))!==null){var V=Q.slice(N,L.index);
N=W.lastIndex;
J+=this.appendPreOrPostMatch(V,O);
if(J%2){O.push(L[0]);
continue
}var I=L[0],M=I.length,S;
switch(I){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":S="(\\D+)";
break;
case"tt":case"t":S="(\\D*)";
break;
case"yyyy":case"fff":case"ff":case"f":S="(\\d{"+M+"})";
break;
case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":S="(\\d\\d?)";
break;
case"zzz":S="([+-]?\\d\\d?:\\d{2})";
break;
case"zz":case"z":S="([+-]?\\d\\d?)";
break;
case"/":S="(\\"+e["/"]+")";
break;
default:throw"Invalid date format pattern '"+I+"'.";
break
}if(S){O.push(S)
}H.push(L[0])
}this.appendPreOrPostMatch(Q.slice(N),O);
O.push("$");
var U=O.join("").replace(/\s+/g,"\\s+"),P={regExp:U,groups:H};
return T[R]=P
},outOfRange:function(I,e,H){return I<e||I>H
},expandYear:function(L,J){var H=new Date(),e=this.getEra(H);
if(J<100){var I=L.twoDigitYearMax;
I=typeof I==="string"?new Date().getFullYear()%100+parseInt(I,10):I;
var K=this.getEraYear(H,L,e);
J+=K-(K%100);
if(J>I){J-=100
}}return J
},parsedate:function(P,S,K){if(K==undefined||K==null){K=this.defaultcalendar()
}P=this.trim(P);
var ag=K,I=this.getparseregexp(ag,S),V=new RegExp(I.regExp).exec(P);
if(V===null){return null
}var N=I.groups,an=null,ae=null,U=null,al=null,ah=null,W=0,H,ad=0,Q=0,e=0,Z=null,ai=false;
for(var J=0,ab=N.length;
J<ab;
J++){var R=V[J+1];
if(R){var aa=N[J],am=aa.length,T=parseInt(R,10);
switch(aa){case"dd":case"d":al=T;
if(this.outOfRange(al,1,31)){return null
}break;
case"MMM":case"MMMM":U=this.getMonthIndex(ag,R,am===3);
if(this.outOfRange(U,0,11)){return null
}break;
case"M":case"MM":U=T-1;
if(this.outOfRange(U,0,11)){return null
}break;
case"y":case"yy":case"yyyy":ae=am<4?this.expandYear(ag,T):T;
if(this.outOfRange(ae,0,9999)){return null
}break;
case"h":case"hh":W=T;
if(W===12){W=0
}if(this.outOfRange(W,0,11)){return null
}break;
case"H":case"HH":W=T;
if(this.outOfRange(W,0,23)){return null
}break;
case"m":case"mm":ad=T;
if(this.outOfRange(ad,0,59)){return null
}break;
case"s":case"ss":Q=T;
if(this.outOfRange(Q,0,59)){return null
}break;
case"tt":case"t":ai=ag.PM&&(R===ag.PM[0]||R===ag.PM[1]||R===ag.PM[2]);
if(!ai&&(!ag.AM||(R!==ag.AM[0]&&R!==ag.AM[1]&&R!==ag.AM[2]))){return null
}break;
case"f":case"ff":case"fff":e=T*Math.pow(10,3-am);
if(this.outOfRange(e,0,999)){return null
}break;
case"ddd":case"dddd":ah=this.getDayIndex(ag,R,am===3);
if(this.outOfRange(ah,0,6)){return null
}break;
case"zzz":var ac=R.split(/:/);
if(ac.length!==2){return null
}H=parseInt(ac[0],10);
if(this.outOfRange(H,-12,13)){return null
}var X=parseInt(ac[1],10);
if(this.outOfRange(X,0,59)){return null
}Z=(H*60)+(startsWith(R,"-")?-X:X);
break;
case"z":case"zz":H=T;
if(this.outOfRange(H,-12,13)){return null
}Z=H*60;
break;
case"g":case"gg":var aj=R;
if(!aj||!ag.eras){return null
}aj=trim(aj.toLowerCase());
for(var M=0,af=ag.eras.length;
M<af;
M++){if(aj===ag.eras[M].name.toLowerCase()){an=M;
break
}}if(an===null){return null
}break
}}}var Y=new Date(),ak,O=ag.convert;
ak=Y.getFullYear();
if(ae===null){ae=ak
}else{if(ag.eras){ae+=ag.eras[(an||0)].offset
}}if(U===null){U=0
}if(al===null){al=1
}if(O){Y=O.toGregorian(ae,U,al);
if(Y===null){return null
}}else{Y.setFullYear(ae,U,al);
if(Y.getDate()!==al){return null
}if(ah!==null&&Y.getDay()!==ah){return null
}}if(ai&&W<12){W+=12
}Y.setHours(W,ad,Q,e);
if(Z!==null){var L=Y.getMinutes()-(Z+Y.getTimezoneOffset());
Y.setHours(Y.getHours()+parseInt(L/60,10),L%60)
}return Y
},cleardatescache:function(){this.datescache=new Array()
},formatDate:function(e,I,H){return this.formatdate(e,I,H)
},formatdate:function(L,M,ad){if(ad==undefined||ad==null){ad=this.defaultcalendar()
}if(typeof L==="string"){return L
}var V=L.toString()+"_"+M;
if(this.datescache&&this.datescache[V]){return this.datescache[V]
}if(!M||!M.length||M==="i"){var N;
N=this.formatDate(L,ad.patterns.F,culture);
return N
}var I=ad.eras,S=M==="s";
M=this.expandFormat(ad,M);
N=[];
var U,K=["0","00","000"],ac,aa,P=/([^d]|^)(d|dd)([^d]|$)/g,Q=0,af=this.getTokenRegExp(),R;
function Z(ag,aj){var ai,ah=ag+"";
if(aj>1&&ah.length<aj){ai=(K[aj-2]+ah);
return ai.substr(ai.length-aj,aj)
}else{ai=ah
}return ai
}function O(){if(ac||aa){return ac
}ac=P.test(M);
aa=true;
return ac
}function T(ah,ag){if(R){return R[ag]
}if(ah.getMonth!=undefined){switch(ag){case 0:return ah.getFullYear();
case 1:return ah.getMonth();
case 2:return ah.getDate()
}}}for(;
;
){var W=af.lastIndex,H=af.exec(M);
var ae=M.slice(W,H?H.index:M.length);
Q+=this.appendPreOrPostMatch(ae,N);
if(!H){break
}if(Q%2){N.push(H[0]);
continue
}var J=H[0],X=J.length;
switch(J){case"ddd":case"dddd":var ab=(X===3)?ad.days.namesAbbr:ad.days.names;
N.push(ab[L.getDay()]);
break;
case"d":case"dd":ac=true;
N.push(Z(T(L,2),X));
break;
case"MMM":case"MMMM":var e=T(L,1);
N.push(ad.months[X===3?"namesAbbr":"names"][e]);
break;
case"M":case"MM":N.push(Z(T(L,1)+1,X));
break;
case"y":case"yy":case"yyyy":e=this.getEraYear(L,ad,this.getEra(L,I),S);
if(X<4){e=e%100
}N.push(Z(e,X));
break;
case"h":case"hh":U=L.getHours()%12;
if(U===0){U=12
}N.push(Z(U,X));
break;
case"H":case"HH":N.push(Z(L.getHours(),X));
break;
case"m":case"mm":N.push(Z(L.getMinutes(),X));
break;
case"s":case"ss":N.push(Z(L.getSeconds(),X));
break;
case"t":case"tt":e=L.getHours()<12?(ad.AM?ad.AM[0]:" "):(ad.PM?ad.PM[0]:" ");
N.push(X===1?e.charAt(0):e);
break;
case"f":case"ff":case"fff":N.push(Z(L.getMilliseconds(),3).substr(0,X));
break;
case"z":case"zz":U=L.getTimezoneOffset()/60;
N.push((U<=0?"+":"-")+Z(Math.floor(Math.abs(U)),X));
break;
case"zzz":U=L.getTimezoneOffset()/60;
N.push((U<=0?"+":"-")+Z(Math.floor(Math.abs(U)),2)+":"+Z(Math.abs(L.getTimezoneOffset()%60),2));
break;
case"g":case"gg":if(ad.eras){N.push(ad.eras[this.getEra(L,I)].name)
}break;
case"/":N.push(ad["/"]);
break;
default:throw"Invalid date format pattern '"+J+"'.";
break
}}var Y=N.join("");
if(!this.datescache){this.datescache=new Array()
}this.datescache[V]=Y;
return Y
}});
y.jqx.data={};
var d,t,p=/#.*$/,k=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,f=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,j=/^(?:GET|HEAD)$/,x=/^\/\//,n=/\?/,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,B=/([?&])_=[^&]*/,m=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,q=/\s+/,o=jQuery.fn.load,u={},C={},E=["*/"]+["*"];
try{t=location.href
}catch(F){t=document.createElement("a");
t.href="";
t=t.href
}d=m.exec(t.toLowerCase())||[];
function i(e){return function(K,M){if(typeof K!=="string"){M=K;
K="*"
}var H,N,O,J=K.toLowerCase().split(q),I=0,L=J.length;
if(jQuery.isFunction(M)){for(;
I<L;
I++){H=J[I];
O=/^\+/.test(H);
if(O){H=H.substr(1)||"*"
}N=e[H]=e[H]||[];
N[O?"unshift":"push"](M)
}}}
}function g(H,Q,L,O,N,J){N=N||Q.dataTypes[0];
J=J||{};
J[N]=true;
var P,M=H[N],I=0,e=M?M.length:0,K=(H===u);
for(;
I<e&&(K||!P);
I++){P=M[I](Q,L,O);
if(typeof P==="string"){if(!K||J[P]){P=undefined
}else{Q.dataTypes.unshift(P);
P=g(H,Q,L,O,P,J)
}}}if((K||!P)&&!J["*"]){P=g(H,Q,L,O,"*",J)
}return P
}function z(I,J){var H,e,K=y.jqx.data.ajaxSettings.flatOptions||{};
for(H in J){if(J[H]!==undefined){(K[H]?I:(e||(e={})))[H]=J[H]
}}if(e){jQuery.extend(true,I,e)
}}y.extend(y.jqx.data,{ajaxSetup:function(H,e){if(e){z(H,y.jqx.data.ajaxSettings)
}else{e=H;
H=y.jqx.data.ajaxSettings
}z(H,e);
return H
},ajaxSettings:{url:t,isLocal:f.test(d[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":E},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:i(u),ajaxTransport:i(C),ajax:function(M,J){if(typeof M==="object"){J=M;
M=undefined
}J=J||{};
var P,ad,K,Y,R,V,I,X,Q=y.jqx.data.ajaxSetup({},J),e=Q.context||Q,T=e!==Q&&(e.nodeType||e instanceof jQuery)?jQuery(e):jQuery.event,ae=jQuery.Deferred(),aa=jQuery.Callbacks("once memory"),N=Q.statusCode||{},U={},ab={},L=0,O="canceled",W={readyState:0,setRequestHeader:function(af,ag){if(!L){var ah=af.toLowerCase();
af=ab[ah]=ab[ah]||af;
U[af]=ag
}return this
},getAllResponseHeaders:function(){return L===2?ad:null
},getResponseHeader:function(af){var ag;
if(L===2){if(!K){K={};
while((ag=k.exec(ad))){K[ag[1].toLowerCase()]=ag[2]
}}ag=K[af.toLowerCase()]
}return ag===undefined?null:ag
},overrideMimeType:function(af){if(!L){Q.mimeType=af
}return this
},abort:function(af){af=af||O;
if(Y){Y.abort(af)
}S(0,af);
return this
}};
function S(ag,af,ah,ao){var al,ak,ai,ar,aj,an=af;
if(L===2){return
}L=2;
if(R){clearTimeout(R)
}Y=undefined;
ad=ao||"";
W.readyState=ag>0?4:0;
if(ah){ar=l(Q,W,ah)
}if(ag>=200&&ag<300||ag===304){if(Q.ifModified){aj=W.getResponseHeader("Last-Modified");
if(aj){jQuery.lastModified[P]=aj
}aj=W.getResponseHeader("Etag");
if(aj){jQuery.etag[P]=aj
}}if(ag===304){an="notmodified";
al=true
}else{al=v(Q,ar);
an=al.state;
ak=al.data;
ai=al.error;
al=!ai
}}else{ai=an;
if(!an||ag){an="error";
if(ag<0){ag=0
}}}W.status=ag;
W.statusText=(af||an)+"";
if(al){ae.resolveWith(e,[ak,an,W])
}else{ae.rejectWith(e,[W,an,ai])
}W.statusCode(N);
N=undefined;
if(I){T.trigger("ajax"+(al?"Success":"Error"),[W,Q,al?ak:ai])
}aa.fireWith(e,[W,an]);
if(I){T.trigger("ajaxComplete",[W,Q]);
if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")
}}}ae.promise(W);
W.success=W.done;
W.error=W.fail;
W.complete=aa.add;
W.statusCode=function(af){if(af){var ag;
if(L<2){for(ag in af){N[ag]=[N[ag],af[ag]]
}}else{ag=af[W.status];
W.always(ag)
}}return this
};
Q.url=((M||Q.url)+"").replace(p,"").replace(x,d[1]+"//");
Q.dataTypes=jQuery.trim(Q.dataType||"*").toLowerCase().split(q);
if(Q.crossDomain==null){V=m.exec(Q.url.toLowerCase());
Q.crossDomain=!!(V&&(V[1]!==d[1]||V[2]!==d[2]||(V[3]||(V[1]==="http:"?80:443))!=(d[3]||(d[1]==="http:"?80:443))))
}if(Q.data&&Q.processData&&typeof Q.data!=="string"){Q.data=jQuery.param(Q.data,Q.traditional)
}g(u,Q,J,W);
if(L===2){return W
}I=Q.global;
Q.type=Q.type.toUpperCase();
Q.hasContent=!j.test(Q.type);
if(I&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")
}if(!Q.hasContent){if(Q.data){Q.url+=(n.test(Q.url)?"&":"?")+Q.data;
delete Q.data
}P=Q.url;
if(Q.cache===false){var H=jQuery.now(),ac=Q.url.replace(B,"$1_="+H);
Q.url=ac+((ac===Q.url)?(n.test(Q.url)?"&":"?")+"_="+H:"")
}}if(Q.data&&Q.hasContent&&Q.contentType!==false||J.contentType){W.setRequestHeader("Content-Type",Q.contentType)
}if(Q.ifModified){P=P||Q.url;
if(jQuery.lastModified[P]){W.setRequestHeader("If-Modified-Since",jQuery.lastModified[P])
}if(jQuery.etag[P]){W.setRequestHeader("If-None-Match",jQuery.etag[P])
}}W.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+E+"; q=0.01":""):Q.accepts["*"]);
for(X in Q.headers){W.setRequestHeader(X,Q.headers[X])
}if(Q.beforeSend&&(Q.beforeSend.call(e,W,Q)===false||L===2)){return W.abort()
}O="abort";
for(X in {success:1,error:1,complete:1}){W[X](Q[X])
}Y=g(C,Q,J,W);
if(!Y){S(-1,"No Transport")
}else{W.readyState=1;
if(I){T.trigger("ajaxSend",[W,Q])
}if(Q.async&&Q.timeout>0){R=setTimeout(function(){W.abort("timeout")
},Q.timeout)
}try{L=1;
Y.send(U,S)
}catch(Z){if(L<2){S(-1,Z)
}else{throw Z
}}}return W
},active:0,lastModified:{},etag:{}});
function l(P,O,L){var K,M,J,e,H=P.contents,N=P.dataTypes,I=P.responseFields;
for(M in I){if(M in L){O[I[M]]=L[M]
}}while(N[0]==="*"){N.shift();
if(K===undefined){K=P.mimeType||O.getResponseHeader("content-type")
}}if(K){for(M in H){if(H[M]&&H[M].test(K)){N.unshift(M);
break
}}}if(N[0] in L){J=N[0]
}else{for(M in L){if(!N[0]||P.converters[M+" "+N[0]]){J=M;
break
}if(!e){e=M
}}J=J||e
}if(J){if(J!==N[0]){N.unshift(J)
}return L[J]
}}function v(Q,I){var O,e,M,K,N=Q.dataTypes.slice(),H=N[0],P={},J=0;
if(Q.dataFilter){I=Q.dataFilter(I,Q.dataType)
}if(N[1]){for(O in Q.converters){P[O.toLowerCase()]=Q.converters[O]
}}for(;
(M=N[++J]);
){if(M!=="*"){if(H!=="*"&&H!==M){O=P[H+" "+M]||P["* "+M];
if(!O){for(e in P){K=e.split(" ");
if(K[1]===M){O=P[H+" "+K[0]]||P["* "+K[0]];
if(O){if(O===true){O=P[e]
}else{if(P[e]!==true){M=K[0];
N.splice(J--,0,M)
}}break
}}}}if(O!==true){if(O&&Q["throws"]){I=O(I)
}else{try{I=O(I)
}catch(L){return{state:"parsererror",error:O?L:"No conversion from "+H+" to "+M}
}}}}H=M
}}return{state:"success",data:I}
}var r=[],D=/\?/,G=/(=)\?(?=&|$)|\?\?/,h=jQuery.now();
y.jqx.data.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=r.pop()||(jQuery.expando+"_"+(h++));
this[e]=true;
return e
}});
y.jqx.data.ajaxPrefilter("json jsonp",function(Q,L,P){var O,e,N,J=Q.data,H=Q.url,I=Q.jsonp!==false,M=I&&G.test(H),K=I&&!M&&typeof J==="string"&&!(Q.contentType||"").indexOf("application/x-www-form-urlencoded")&&G.test(J);
if(Q.dataTypes[0]==="jsonp"||M||K){O=Q.jsonpCallback=jQuery.isFunction(Q.jsonpCallback)?Q.jsonpCallback():Q.jsonpCallback;
e=window[O];
if(M){Q.url=H.replace(G,"$1"+O)
}else{if(K){Q.data=J.replace(G,"$1"+O)
}else{if(I){Q.url+=(D.test(H)?"&":"?")+Q.jsonp+"="+O
}}}Q.converters["script json"]=function(){if(!N){jQuery.error(O+" was not called")
}return N[0]
};
Q.dataTypes[0]="json";
window[O]=function(){N=arguments
};
P.always(function(){window[O]=e;
if(Q[O]){Q.jsonpCallback=L.jsonpCallback;
r.push(O)
}if(N&&jQuery.isFunction(e)){e(N[0])
}N=e=undefined
});
return"script"
}});
y.jqx.data.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){jQuery.globalEval(e);
return e
}}});
y.jqx.data.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
y.jqx.data.ajaxTransport("script",function(I){if(I.crossDomain){var e,H=document.head||document.getElementsByTagName("head")[0]||document.documentElement;
return{send:function(J,K){e=document.createElement("script");
e.async="async";
if(I.scriptCharset){e.charset=I.scriptCharset
}e.src=I.url;
e.onload=e.onreadystatechange=function(M,L){if(L||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(H&&e.parentNode){H.removeChild(e)
}e=undefined;
if(!L){K(200,"success")
}}};
H.insertBefore(e,H.firstChild)
},abort:function(){if(e){e.onload(0,1)
}}}
}});
var w,a=window.ActiveXObject?function(){for(var e in w){w[e](0,1)
}}:false,A=0;
function c(){try{return new window.XMLHttpRequest()
}catch(e){}}function s(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")
}catch(e){}}y.jqx.data.ajaxSettings.xhr=window.ActiveXObject?function(){return !this.isLocal&&c()||s()
}:c;
(function(e){jQuery.extend(jQuery.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(y.jqx.data.ajaxSettings.xhr());
if(jQuery.support.ajax){y.jqx.data.ajaxTransport(function(e){if(!e.crossDomain||jQuery.support.cors){var H;
return{send:function(N,I){var L,K,M=e.xhr();
if(e.username){M.open(e.type,e.url,e.async,e.username,e.password)
}else{M.open(e.type,e.url,e.async)
}if(e.xhrFields){for(K in e.xhrFields){M[K]=e.xhrFields[K]
}}if(e.mimeType&&M.overrideMimeType){M.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!N["X-Requested-With"]){N["X-Requested-With"]="XMLHttpRequest"
}try{for(K in N){M.setRequestHeader(K,N[K])
}}catch(J){}M.send((e.hasContent&&e.data)||null);
H=function(W,Q){var R,P,O,U,T;
try{if(H&&(Q||M.readyState===4)){H=undefined;
if(L){M.onreadystatechange=jQuery.noop;
if(a){delete w[L]
}}if(Q){if(M.readyState!==4){M.abort()
}}else{R=M.status;
O=M.getAllResponseHeaders();
U={};
T=M.responseXML;
if(T&&T.documentElement){U.xml=T
}try{U.text=M.responseText
}catch(V){}try{P=M.statusText
}catch(V){P=""
}if(!R&&e.isLocal&&!e.crossDomain){R=U.text?200:404
}else{if(R===1223){R=204
}}}}}catch(S){if(!Q){I(-1,S)
}}if(U){I(R,P,U,O)
}};
if(!e.async){H()
}else{if(M.readyState===4){setTimeout(H,0)
}else{L=++A;
if(a){if(!w){w={};
jQuery(window).unload(a)
}w[L]=H
}M.onreadystatechange=H
}}},abort:function(){if(H){H(0,1)
}}}
}})
}y.jqx.filter=function(){this.operator="and";
var M=0;
var J=1;
var P=["EMPTY","NOT_EMPTY","CONTAINS","CONTAINS_CASE_SENSITIVE","DOES_NOT_CONTAIN","DOES_NOT_CONTAIN_CASE_SENSITIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","ENDS_WITH","ENDS_WITH_CASE_SENSITIVE","EQUAL","EQUAL_CASE_SENSITIVE","NULL","NOT_NULL"];
var R=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];
var S=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];
var L=["EQUAL","NOT_EQUAL"];
var K=new Array();
var Q=new Array();
this.evaluate=function(X){var V=true;
for(var W=0;
W<K.length;
W++){var U=K[W].evaluate(X);
if(W==0){V=U
}else{if(Q[W]==J||Q[W]=="or"){V=V||U
}else{V=V&&U
}}}return V
};
this.getfilterscount=function(){return K.length
};
this.setoperatorsbyfiltertype=function(U,V){switch(U){case"numericfilter":R=V;
break;
case"stringfilter":P=V;
break;
case"datefilter":S=V;
break;
case"booleanfilter":L=V;
break
}};
this.getoperatorsbyfiltertype=function(U){var V=new Array();
switch(U){case"numericfilter":V=R.slice(0);
break;
case"stringfilter":V=P.slice(0);
break;
case"datefilter":V=S.slice(0);
break;
case"booleanfilter":V=L.slice(0);
break
}return V
};
var O=function(){var U=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)
};
return(U()+"-"+U()+"-"+U())
};
this.createfilter=function(Y,V,X,W,U,Z){if(Y==null||Y==undefined){return null
}switch(Y){case"numericfilter":return new N(V,X.toUpperCase());
case"stringfilter":return new T(V,X.toUpperCase());
case"datefilter":return new H(V,X.toUpperCase(),U,Z);
case"booleanfilter":return new I(V,X.toUpperCase());
case"custom":return new e(V,X.toUpperCase(),W)
}throw new Error("jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'");
return null
};
this.getfilters=function(){var U=new Array();
for(var V=0;
V<K.length;
V++){var W={value:K[V].filtervalue,condition:K[V].comparisonoperator,operator:Q[V],type:K[V].type};
U[V]=W
}return U
};
this.addfilter=function(U,V){K[K.length]=V;
V.key=O();
Q[Q.length]=U
};
this.removefilter=function(V){for(var U=0;
U<K.length;
U++){if(K[U].key==V.key){K.splice(U,1);
Q.splice(U,1);
break
}}};
this.getoperatorat=function(U){if(U==undefined||U==null){return null
}if(U<0||U>K.length){return null
}return Q[U]
};
this.setoperatorat=function(V,U){if(V==undefined||V==null){return null
}if(V<0||V>K.length){return null
}Q[U]=U
};
this.getfilterat=function(U){if(U==undefined||U==null){return null
}if(U<0||U>K.length){return null
}return K[U]
};
this.setfilterat=function(U,V){if(U==undefined||U==null){return null
}if(U<0||U>K.length){return null
}V.key=O();
K[U]=V
};
this.clear=function(){K=new Array();
Q=new Array()
};
var T=function(V,U){this.filtervalue=V;
this.comparisonoperator=U;
this.type="stringfilter";
this.evaluate=function(Z){var W=this.filtervalue;
var af=this.comparisonoperator;
if(Z==null||Z==undefined||Z==""){if(af=="NULL"){return true
}if(af=="EQUAL"&&Z==W){return true
}if(af=="NOT_EQUAL"&&Z!=W){return true
}if(af!="EMPTY"){return false
}else{if(Z==""){return true
}}}var ah="";
try{ah=Z.toString()
}catch(aa){return true
}var ag=function(ap,ao){switch(af){case"EQUAL":return y.jqx.string.equalsIgnoreCase(ap,ao);
case"EQUAL_CASE_SENSITIVE":return y.jqx.string.equals(ap,ao);
case"NOT_EQUAL":return !y.jqx.string.equalsIgnoreCase(ap,ao);
case"NOT_EQUAL_CASE_SENSITIVE":return !y.jqx.string.equals(ap,ao);
case"CONTAINS":return y.jqx.string.containsIgnoreCase(ap,ao);
case"CONTAINS_CASE_SENSITIVE":return y.jqx.string.contains(ap,ao);
case"DOES_NOT_CONTAIN":return !y.jqx.string.containsIgnoreCase(ap,ao);
case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !y.jqx.string.contains(ap,ao);
case"EMPTY":return ap=="";
case"NOT_EMPTY":return ap!="";
case"NOT_NULL":return ap!=null;
case"STARTS_WITH":return y.jqx.string.startsWithIgnoreCase(ap,ao);
case"ENDS_WITH":return y.jqx.string.endsWithIgnoreCase(ap,ao);
case"ENDS_WITH_CASE_SENSITIVE":return y.jqx.string.endsWith(ap,ao);
case"STARTS_WITH_CASE_SENSITIVE":return y.jqx.string.startsWith(ap,ao);
default:return false
}};
var X=new Array();
if(W&&W.indexOf){if(W.indexOf("|")>=0||W.indexOf(" AND ")>=0||W.indexOf(" OR ")>=0||W.indexOf(" and ")>=0||W.indexOf(" or ")>=0){var ak=ag(ah,W);
if(ak){return ak
}var al=W.indexOf(" AND ")>=0?W.split(" AND "):new Array();
var ae=W.indexOf(" OR ")>=0?W.split(" OR "):new Array();
var aj=W.indexOf(" and ")>=0?W.split(" and "):new Array();
var am=W.indexOf(" or ")>=0?W.split(" or "):new Array();
var ai=W.indexOf("|")>=0?W.split("|"):new Array();
if(ai.length>0){for(var Y=0;
Y<ai.length;
Y++){ai[Y]=y.trim(ai[Y])
}}var ad=W.indexOf(" ")>=0?W.split(" "):new Array();
if(ad.length>0){for(var Y=0;
Y<ad.length;
Y++){ad[Y]=y.trim(ad[Y])
}}al=al.concat(ad);
al=al.concat(aj);
ae=ae.concat(ai);
ae=ae.concat(am);
if(al.length>0){for(var Y=0;
Y<al.length;
Y++){if(!al[Y].indexOf(" OR ")>=0){X.push(al[Y])
}}}if(ae.length>0){for(var Y=0;
Y<ae.length;
Y++){if(!ae[Y].indexOf(" AND ")>=0){X.push(ae[Y])
}}}var ac=undefined;
for(var ab=0;
ab<X.length;
ab++){var Z=X[ab];
var ak=ag(ah,Z);
var an=ab<al.length?"and":"or";
if(ac==undefined){ac=ak
}else{if(an=="or"){ac=ac||ak
}else{ac=ac&&ak
}}}return ac
}}return ag(ah,W)
}
};
var I=function(V,U){this.filtervalue=V;
this.comparisonoperator=U;
this.type="booleanfilter";
this.evaluate=function(Y){var X=this.filtervalue;
var W=this.comparisonoperator;
if(Y==null||Y==undefined){if(W=="NULL"){return true
}return false
}var Z=Y;
switch(W){case"EQUAL":return Z==X||Z.toString()==X.toString();
case"NOT_EQUAL":return Z!=X&&Z.toString()!=X.toString();
default:return false
}}
};
var N=function(V,U){this.filtervalue=V;
this.comparisonoperator=U;
this.type="numericfilter";
this.evaluate=function(aa){var Z=this.filtervalue;
var af=this.comparisonoperator;
if(aa===null||aa===undefined||aa===""){if(af=="NOT_NULL"){return false
}if(af=="NULL"){return true
}else{switch(af){case"EQUAL":return aa==Z;
case"NOT_EQUAL":return aa!=Z
}return false
}}else{if(af=="NULL"){return false
}if(af=="NOT_NULL"){return true
}}var ah=aa;
try{ah=parseFloat(ah)
}catch(ab){if(aa.toString()!=""){return false
}}var ag=function(ap,ao){switch(af){case"EQUAL":return ap==ao;
case"NOT_EQUAL":return ap!=ao;
case"GREATER_THAN":return ap>ao;
case"GREATER_THAN_OR_EQUAL":return ap>=ao;
case"LESS_THAN":return ap<ao;
case"LESS_THAN_OR_EQUAL":return ap<=ao;
case"STARTS_WITH":return y.jqx.string.startsWithIgnoreCase(ap.toString(),ao.toString());
case"ENDS_WITH":return y.jqx.string.endsWithIgnoreCase(ap.toString(),ao.toString());
case"ENDS_WITH_CASE_SENSITIVE":return y.jqx.string.endsWith(ap.toString(),ao.toString());
case"STARTS_WITH_CASE_SENSITIVE":return y.jqx.string.startsWith(ap.toString(),ao.toString());
case"CONTAINS":return y.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());
case"CONTAINS_CASE_SENSITIVE":return y.jqx.string.contains(ap.toString(),ao.toString());
case"DOES_NOT_CONTAIN":return !y.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());
case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !y.jqx.string.contains(ap.toString(),ao.toString());
default:return true
}};
var ak=new Array();
if(Z&&Z.indexOf){if(Z.indexOf("|")>=0||Z.indexOf(" AND ")>=0||Z.indexOf(" OR ")>=0||Z.indexOf(" and ")>=0||Z.indexOf(" or ")>=0){var al=ag(ah,Z);
if(al){return al
}Z=Z.toString();
var am=Z.indexOf(" AND ")>=0?Z.split(" AND "):new Array();
var X=Z.indexOf(" OR ")>=0?Z.split(" OR "):new Array();
var ae=Z.indexOf(" and ")>=0?Z.split(" and "):new Array();
var an=Z.indexOf(" or ")>=0?Z.split(" or "):new Array();
am=am.concat(ae);
X=X.concat(an);
var aj=Z.indexOf("|")>=0?Z.split("|"):new Array();
if(aj.length>0){for(var Y=0;
Y<aj.length;
Y++){aj[Y]=y.trim(aj[Y])
}}X=X.concat(aj);
if(am.length>0){for(var Y=0;
Y<am.length;
Y++){if(!am[Y].indexOf(" OR ")>=0){ak.push(am[Y])
}}}if(X.length>0){for(var Y=0;
Y<X.length;
Y++){if(!X[Y].indexOf(" AND ")>=0){ak.push(X[Y])
}}}var ad=undefined;
for(var ac=0;
ac<ak.length;
ac++){var aa=ak[ac];
if(aa&&aa.indexOf&&aa.indexOf("..")>=0){var ai=aa.toString().split("..");
if(ai.length==2){al=ah>=ai[0]&&ah<=ai[1]
}}else{var al=ag(ah,aa)
}var W=ac<am.length?"and":"or";
if(ad==undefined){ad=al
}else{if(W=="or"){ad=ad||al
}else{ad=ad&&al
}}}return ad
}}if(Z&&Z.indexOf&&Z.indexOf("..")>=0){ak=Z.toString().split("..");
if(ak.length==2){return ah>=ak[0]&&ah<=ak[1]
}}return ag(ah,Z)
}
};
var H=function(W,U,V,Z){this.filtervalue=W;
this.type="datefilter";
if(V!=undefined&&Z!=undefined){var X=y.jqx.dataFormat.parsedate(W,V,Z);
if(X!=null){this.filterdate=X
}else{var aa=y.jqx.dataFormat.tryparsedate(W,Z);
if(aa!=null){this.filterdate=aa
}}}else{var Y=new Date(W);
if(Y.toString()=="NaN"||Y.toString()=="Invalid Date"){this.filterdate=y.jqx.dataFormat.tryparsedate(W)
}else{this.filterdate=Y
}}if(!this.filterdate){var Y=new Date(W);
if(Y.toString()=="NaN"||Y.toString()=="Invalid Date"){this.filterdate=y.jqx.dataFormat.tryparsedate(W)
}else{this.filterdate=Y
}}this.comparisonoperator=U;
this.evaluate=function(an){var am=this.filtervalue;
var ad=this.comparisonoperator;
if(an==null||an==undefined||an==""){if(ad=="NOT_NULL"){return false
}if(ad=="NULL"){return true
}else{switch(ad){case"EQUAL":return an==am;
case"NOT_EQUAL":return an!=am
}return false
}}else{if(ad=="NULL"){return false
}if(ad=="NOT_NULL"){return true
}}var af=new Date();
af.setFullYear(1900,0,1);
af.setHours(12,0,0,0);
try{var ac=new Date(an);
if(ac.toString()=="NaN"||ac.toString()=="Invalid Date"){an=y.jqx.dataFormat.tryparsedate(an)
}else{an=ac
}af=an;
var au=false;
if(V!=undefined&&Z!=undefined){if(V.indexOf("t")>=0||V.indexOf("T")>=0||V.indexOf(":")>=0||V.indexOf("f")>=0){au=true;
if(am&&am.toString().indexOf(":")==-1){var aw=y.jqx.dataFormat.tryparsedate(am.toString()+":00",Z);
if(aw!=null){this.filterdate=aw
}}}}if(!au){af.setHours(0);
af.setMinutes(0);
af.setSeconds(0)
}}catch(ai){if(an.toString()!=""){return false
}}if(this.filterdate!=null){am=this.filterdate
}else{if(am.indexOf){if(am.indexOf(":")!=-1||!isNaN(parseInt(am))){var av=new Date(af);
av.setHours(12,0,0,0);
var ag=am.split(":");
for(var at=0;
at<ag.length;
at++){if(at==0){av.setHours(ag[at])
}if(at==1){av.setMinutes(ag[at])
}if(at==2){av.setSeconds(ag[at])
}}am=av
}}}if(au){if(am&&am.setFullYear){if(af&&af.getFullYear){if(V.indexOf("d")==-1&&V.indexOf("M")==-1&&V.indexOf("y")==-1){am.setFullYear(af.getFullYear(),af.getMonth(),af.getDate())
}}}}var ae=function(az,ay){if(az==null){az=""
}switch(ad){case"EQUAL":return az.toString()==ay.toString();
case"NOT_EQUAL":return az.toString()!=ay.toString();
case"GREATER_THAN":return az>ay;
case"GREATER_THAN_OR_EQUAL":return az>=ay;
case"LESS_THAN":return az<ay;
case"LESS_THAN_OR_EQUAL":return az<=ay;
case"STARTS_WITH":return y.jqx.string.startsWithIgnoreCase(az.toString(),ay.toString());
case"ENDS_WITH":return y.jqx.string.endsWithIgnoreCase(az.toString(),ay.toString());
case"ENDS_WITH_CASE_SENSITIVE":return y.jqx.string.endsWith(az.toString(),ay.toString());
case"STARTS_WITH_CASE_SENSITIVE":return y.jqx.string.startsWith(az.toString(),ay.toString());
case"CONTAINS":return y.jqx.string.containsIgnoreCase(az.toString(),ay.toString());
case"CONTAINS_CASE_SENSITIVE":return y.jqx.string.contains(az.toString(),ay.toString());
case"DOES_NOT_CONTAIN":return !y.jqx.string.containsIgnoreCase(az.toString(),ay.toString());
case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !y.jqx.string.contains(az.toString(),ay.toString());
default:return true
}};
var ah=new Array();
if(am&&am.indexOf){if(am.indexOf("|")>=0||am.indexOf(" AND ")>=0||am.indexOf(" OR ")>=0||am.indexOf(" and ")>=0||am.indexOf(" or ")>=0){var aw=ae(af,am);
if(aw){return aw
}var ax=am.indexOf(" AND ")>=0?am.split(" AND "):new Array();
var ar=am.indexOf(" OR ")>=0?am.split(" OR "):new Array();
var aq=am.indexOf(" and ")>=0?am.split(" and "):new Array();
var ab=am.indexOf(" or ")>=0?am.split(" or "):new Array();
ax=ax.concat(aq);
ar=ar.concat(ab);
var ap=am.indexOf("|")>=0?am.split("|"):new Array();
if(ap.length>0){for(var at=0;
at<ap.length;
at++){ap[at]=y.trim(ap[at])
}}ar=ar.concat(ap);
if(ax.length>0){for(var at=0;
at<ax.length;
at++){if(!ax[at].indexOf(" OR ")>=0){ah.push(ax[at])
}}}if(ar.length>0){for(var at=0;
at<ar.length;
at++){if(!ar[at].indexOf(" AND ")>=0){ah.push(ar[at])
}}}var ak=undefined;
for(var aj=0;
aj<ah.length;
aj++){var an=ah[aj];
if(an&&an.indexOf&&an.indexOf("..")>=0){var ao=an.toString().split("..");
if(ao.length==2){aw=af>=ao[0]&&af<=ao[1]
}}else{var aw=ae(af,an)
}var al=aj<ax.length?"and":"or";
if(ak==undefined){ak=aw
}else{if(al=="or"){ak=ak||aw
}else{ak=ak&&aw
}}}return ak
}}if(am&&am.indexOf&&am.indexOf("..")>=0){ah=am.toString().split("..");
if(ah.length==2){return af>=ah[0]&&af<=ah[1]
}}return ae(af,am)
}
};
var e=function(V,U,W){this.filtervalue=V;
this.comparisonoperator=U;
this.evaluate=function(Y,X){return W(this.filtervalue,Y,this.comparisonoperator)
}
}
}
})(jQuery);