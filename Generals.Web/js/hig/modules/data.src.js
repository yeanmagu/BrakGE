(function(c){var b=c.each;
var a=function(e,d){this.init(e,d)
};
c.extend(a.prototype,{init:function(e,d){this.options=e;
this.chartOptions=d;
this.columns=e.columns||this.rowsToColumns(e.rows)||[];
if(this.columns.length){this.dataFound()
}else{this.parseCSV();
this.parseTable();
this.parseGoogleSpreadsheet()
}},getColumnDistribution:function(){var d=this.chartOptions,e=function(h){return(c.seriesTypes[h||"line"].prototype.pointArrayMap||[0]).length
},f=d&&d.chart&&d.chart.type,g=[];
b((d&&d.series)||[],function(h){g.push(e(h.type||f))
});
this.valueCount={global:e(f),individual:g}
},dataFound:function(){if(this.options.switchRowsAndColumns){this.columns=this.rowsToColumns(this.columns)
}this.parseTypes();
this.findHeaderRow();
this.parsed();
this.complete()
},parseCSV:function(){var l=this,k=this.options,f=k.csv,e=this.columns,n=k.startRow||0,h=k.endRow||Number.MAX_VALUE,m=k.startColumn||0,g=k.endColumn||Number.MAX_VALUE,i,j,d=0;
if(f){j=f.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(k.lineDelimiter||"\n");
i=k.itemDelimiter||(f.indexOf("\t")!==-1?"\t":",");
b(j,function(r,s){var t=l.trim(r),p=t.indexOf("#")===0,o=t==="",q;
if(s>=n&&s<=h&&!p&&!o){q=r.split(i);
b(q,function(v,u){if(u>=m&&u<=g){if(!e[u-m]){e[u-m]=[]
}e[u-m][d]=v
}});
d+=1
}});
this.dataFound()
}},parseTable:function(){var g=this.options,j=g.table,d=this.columns,i=g.startRow||0,f=g.endRow||Number.MAX_VALUE,h=g.startColumn||0,e=g.endColumn||Number.MAX_VALUE;
if(j){if(typeof j==="string"){j=document.getElementById(j)
}b(j.getElementsByTagName("tr"),function(l,k){if(k>=i&&k<=f){b(l.children,function(n,m){if((n.tagName==="TD"||n.tagName==="TH")&&m>=h&&m<=e){if(!d[m-h]){d[m-h]=[]
}d[m-h][k-i]=n.innerHTML
}})
}});
this.dataFound()
}},parseGoogleSpreadsheet:function(){var k=this,j=this.options,h=j.googleSpreadsheetKey,d=this.columns,m=j.startRow||0,f=j.endRow||Number.MAX_VALUE,l=j.startColumn||0,e=j.endColumn||Number.MAX_VALUE,i,g;
if(h){jQuery.ajax({dataType:"json",url:"https://spreadsheets.google.com/feeds/cells/"+h+"/"+(j.googleSpreadsheetWorksheet||"od6")+"/public/values?alt=json-in-script&callback=?",error:j.error,success:function(s){var p=s.feed.entry,n,o=p.length,q=0,t=0,r;
for(r=0;
r<o;
r++){n=p[r];
q=Math.max(q,n.gs$cell.col);
t=Math.max(t,n.gs$cell.row)
}for(r=0;
r<q;
r++){if(r>=l&&r<=e){d[r-l]=[];
d[r-l].length=Math.min(t,f-m)
}}for(r=0;
r<o;
r++){n=p[r];
i=n.gs$cell.row-1;
g=n.gs$cell.col-1;
if(g>=l&&g<=e&&i>=m&&i<=f){d[g-l][i-m]=n.content.$t
}}k.dataFound()
}})
}},findHeaderRow:function(){var d=0;
b(this.columns,function(e){if(typeof e[0]!=="string"){d=null
}});
this.headerRow=0
},trim:function(d){return typeof d==="string"?d.replace(/^\s+|\s+$/g,""):d
},parseTypes:function(){var e=this.columns,d=e.length,h,j,g,i,f;
while(d--){h=e[d].length;
while(h--){j=e[d][h];
g=parseFloat(j);
i=this.trim(j);
if(i==g){e[d][h]=g;
if(g>365*24*3600*1000){e[d].isDatetime=true
}else{e[d].isNumeric=true
}}else{f=this.parseDate(j);
if(d===0&&typeof f==="number"&&!isNaN(f)){e[d][h]=f;
e[d].isDatetime=true
}else{e[d][h]=i===""?null:i
}}}}},dateFormats:{"YYYY-mm-dd":{regex:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",parser:function(d){return Date.UTC(+d[1],d[2]-1,+d[3])
}}},parseDate:function(i){var g=this.options.parseDate,h,e,d,f;
if(g){h=g(i)
}if(typeof i==="string"){for(e in this.dateFormats){d=this.dateFormats[e];
f=i.match(d.regex);
if(f){h=d.parser(f)
}}}return h
},rowsToColumns:function(h){var g,i,d,e,f;
if(h){f=[];
i=h.length;
for(g=0;
g<i;
g++){e=h[g].length;
for(d=0;
d<e;
d++){if(!f[d]){f[d]=[]
}f[d][g]=h[g][d]
}}}return f
},parsed:function(){if(this.options.parsed){this.options.parsed.call(this,this.columns)
}},complete:function(){var d=this.columns,f,n,k=this.options,o,l,e,g,h,m;
if(k.complete){this.getColumnDistribution();
if(d.length>1){f=d.shift();
if(this.headerRow===0){f.shift()
}if(f.isDatetime){n="datetime"
}else{if(!f.isNumeric){n="category"
}}}for(g=0;
g<d.length;
g++){if(this.headerRow===0){d[g].name=d[g].shift()
}}l=[];
for(g=0,m=0;
g<d.length;
m++){o=c.pick(this.valueCount.individual[m],this.valueCount.global);
e=[];
if(g+o<=d.length){for(h=0;
h<d[g].length;
h++){e[h]=[f[h],d[g][h]!==undefined?d[g][h]:null];
if(o>1){e[h].push(d[g+1][h]!==undefined?d[g+1][h]:null)
}if(o>2){e[h].push(d[g+2][h]!==undefined?d[g+2][h]:null)
}if(o>3){e[h].push(d[g+3][h]!==undefined?d[g+3][h]:null)
}if(o>4){e[h].push(d[g+4][h]!==undefined?d[g+4][h]:null)
}}}l[m]={name:d[g].name,data:e};
g+=o
}k.complete({xAxis:{type:n},series:l})
}}});
c.Data=a;
c.data=function(e,d){return new a(e,d)
};
c.wrap(c.Chart.prototype,"init",function(f,g,d){var e=this;
if(g&&g.data){c.data(c.extend(g.data,{complete:function(h){if(g.hasOwnProperty("series")){if(typeof g.series==="object"){b(g.series,function(k,j){g.series[j]=c.merge(k,h.series[j])
})
}else{delete g.series
}}g=c.merge(h,g);
f.call(e,g,d)
}}),g)
}else{f.call(e,g,d)
}})
}(Highcharts));