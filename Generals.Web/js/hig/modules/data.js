(function(a){var b=a.each,c=function(d,e){this.init(d,e)
};
a.extend(c.prototype,{init:function(d,e){this.options=d;
this.chartOptions=e;
this.columns=d.columns||this.rowsToColumns(d.rows)||[];
this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())
},getColumnDistribution:function(){var d=this.chartOptions,e=d&&d.chart&&d.chart.type,f=[];
b(d&&d.series||[],function(g){f.push((a.seriesTypes[g.type||e||"line"].prototype.pointArrayMap||[0]).length)
});
this.valueCount={global:(a.seriesTypes[e||"line"].prototype.pointArrayMap||[0]).length,individual:f}
},dataFound:function(){if(this.options.switchRowsAndColumns){this.columns=this.rowsToColumns(this.columns)
}this.parseTypes();
this.findHeaderRow();
this.parsed();
this.complete()
},parseCSV:function(){var d=this,e=this.options,f=e.csv,j=this.columns,l=e.startRow||0,p=e.endRow||Number.MAX_VALUE,q=e.startColumn||0,n=e.endColumn||Number.MAX_VALUE,m,r,s=0;
f&&(r=f.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(e.lineDelimiter||"\n"),m=e.itemDelimiter||(f.indexOf("\t")!==-1?"\t":","),b(r,function(g,h){var k=d.trim(g),i=k.indexOf("#")===0;
h>=l&&h<=p&&!i&&k!==""&&(k=g.split(m),b(k,function(t,o){o>=q&&o<=n&&(j[o-q]||(j[o-q]=[]),j[o-q][s]=t)
}),s+=1)
}),this.dataFound())
},parseTable:function(){var d=this.options,e=d.table,f=this.columns,g=d.startRow||0,j=d.endRow||Number.MAX_VALUE,k=d.startColumn||0,l=d.endColumn||Number.MAX_VALUE;
e&&(typeof e==="string"&&(e=document.getElementById(e)),b(e.getElementsByTagName("tr"),function(h,i){i>=g&&i<=j&&b(h.children,function(m,n){if((m.tagName==="TD"||m.tagName==="TH")&&n>=k&&n<=l){f[n-k]||(f[n-k]=[]),f[n-k][i-g]=m.innerHTML
}})
}),this.dataFound())
},parseGoogleSpreadsheet:function(){var d=this,e=this.options,f=e.googleSpreadsheetKey,j=this.columns,l=e.startRow||0,o=e.endRow||Number.MAX_VALUE,p=e.startColumn||0,n=e.endColumn||Number.MAX_VALUE,m,q;
f&&jQuery.ajax({dataType:"json",url:"https://spreadsheets.google.com/feeds/cells/"+f+"/"+(e.googleSpreadsheetWorksheet||"od6")+"/public/values?alt=json-in-script&callback=?",error:e.error,success:function(g){var g=g.feed.entry,h,i=g.length,r=0,s=0,k;
for(k=0;
k<i;
k++){h=g[k],r=Math.max(r,h.gs$cell.col),s=Math.max(s,h.gs$cell.row)
}for(k=0;
k<r;
k++){if(k>=p&&k<=n){j[k-p]=[],j[k-p].length=Math.min(s,o-l)
}}for(k=0;
k<i;
k++){if(h=g[k],m=h.gs$cell.row-1,q=h.gs$cell.col-1,q>=p&&q<=n&&m>=l&&m<=o){j[q-p][m-l]=h.content.$t
}}d.dataFound()
}})
},findHeaderRow:function(){b(this.columns,function(){});
this.headerRow=0
},trim:function(d){return typeof d==="string"?d.replace(/^\s+|\s+$/g,""):d
},parseTypes:function(){for(var d=this.columns,e=d.length,f,g,i,j;
e--;
){for(f=d[e].length;
f--;
){g=d[e][f],i=parseFloat(g),j=this.trim(g),j==i?(d[e][f]=i,i>31536000000?d[e].isDatetime=!0:d[e].isNumeric=!0):(g=this.parseDate(g),e===0&&typeof g==="number"&&!isNaN(g)?(d[e][f]=g,d[e].isDatetime=!0):d[e][f]=j===""?null:j)
}}},dateFormats:{"YYYY-mm-dd":{regex:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",parser:function(d){return Date.UTC(+d[1],d[2]-1,+d[3])
}}},parseDate:function(d){var e=this.options.parseDate,f,g,h;
e&&(f=e(d));
if(typeof d==="string"){for(g in this.dateFormats){e=this.dateFormats[g],(h=d.match(e.regex))&&(f=e.parser(h))
}}return f
},rowsToColumns:function(d){var e,f,g,i,j;
if(d){j=[];
f=d.length;
for(e=0;
e<f;
e++){i=d[e].length;
for(g=0;
g<i;
g++){j[g]||(j[g]=[]),j[g][e]=d[e][g]
}}}return j
},parsed:function(){this.options.parsed&&this.options.parsed.call(this,this.columns)
},complete:function(){var d=this.columns,e,f,j=this.options,l,o,p,n,m,q;
if(j.complete){this.getColumnDistribution();
d.length>1&&(e=d.shift(),this.headerRow===0&&e.shift(),e.isDatetime?f="datetime":e.isNumeric||(f="category"));
for(n=0;
n<d.length;
n++){if(this.headerRow===0){d[n].name=d[n].shift()
}}o=[];
for(n=0,q=0;
n<d.length;
q++){l=a.pick(this.valueCount.individual[q],this.valueCount.global);
p=[];
if(n+l<=d.length){for(m=0;
m<d[n].length;
m++){p[m]=[e[m],d[n][m]!==void 0?d[n][m]:null],l>1&&p[m].push(d[n+1][m]!==void 0?d[n+1][m]:null),l>2&&p[m].push(d[n+2][m]!==void 0?d[n+2][m]:null),l>3&&p[m].push(d[n+3][m]!==void 0?d[n+3][m]:null),l>4&&p[m].push(d[n+4][m]!==void 0?d[n+4][m]:null)
}}o[q]={name:d[n].name,data:p};
n+=l
}j.complete({xAxis:{type:f},series:o})
}}});
a.Data=c;
a.data=function(d,e){return new c(d,e)
};
a.wrap(a.Chart.prototype,"init",function(d,e,f){var g=this;
e&&e.data?a.data(a.extend(e.data,{complete:function(h){e.hasOwnProperty("series")&&(typeof e.series==="object"?b(e.series,function(i,j){e.series[j]=a.merge(i,h.series[j])
}):delete e.series);
e=a.merge(h,e);
d.call(g,e,f)
}}),e):d.call(g,e,f)
})
})(Highcharts);