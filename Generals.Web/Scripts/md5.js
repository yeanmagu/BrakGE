var hexcase=0;
var b64pad="";
function hex_md5(b){return rstr2hex(rstr_md5(str2rstr_utf8(b)))
}function b64_md5(b){return rstr2b64(rstr_md5(str2rstr_utf8(b)))
}function any_md5(d,c){return rstr2any(rstr_md5(str2rstr_utf8(d)),c)
}function hex_hmac_md5(d,c){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(d),str2rstr_utf8(c)))
}function b64_hmac_md5(d,c){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(d),str2rstr_utf8(c)))
}function any_hmac_md5(f,d,e){return rstr2any(rstr_hmac_md5(str2rstr_utf8(f),str2rstr_utf8(d)),e)
}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"
}function rstr_md5(b){return binl2rstr(binl_md5(rstr2binl(b),b.length*8))
}function rstr_hmac_md5(m,i){var h=rstr2binl(m);
if(h.length>16){h=binl_md5(h,m.length*8)
}var l=Array(16),n=Array(16);
for(var k=0;
k<16;
k++){l[k]=h[k]^909522486;
n[k]=h[k]^1549556828
}var j=binl_md5(l.concat(rstr2binl(i)),512+i.length*8);
return binl2rstr(binl_md5(n.concat(j),512+128))
}function rstr2hex(j){try{hexcase
}catch(e){hexcase=0
}var h=hexcase?"0123456789ABCDEF":"0123456789abcdef";
var k="";
var l;
for(var i=0;
i<j.length;
i++){l=j.charCodeAt(i);
k+=h.charAt((l>>>4)&15)+h.charAt(l&15)
}return k
}function rstr2b64(j){try{b64pad
}catch(e){b64pad=""
}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var n="";
var m=j.length;
for(var i=0;
i<m;
i+=3){var p=(j.charCodeAt(i)<<16)|(i+1<m?j.charCodeAt(i+1)<<8:0)|(i+2<m?j.charCodeAt(i+2):0);
for(var l=0;
l<4;
l++){if(i*8+l*6>j.length*8){n+=b64pad
}else{n+=o.charAt((p>>>6*(3-l))&63)
}}}return n
}function rstr2any(r,o){var j=o.length;
var q,s,u,x,v;
var i=Array(Math.ceil(r.length/2));
for(q=0;
q<i.length;
q++){i[q]=(r.charCodeAt(q*2)<<8)|r.charCodeAt(q*2+1)
}var p=Math.ceil(r.length*8/(Math.log(o.length)/Math.log(2)));
var w=Array(p);
for(s=0;
s<p;
s++){v=Array();
x=0;
for(q=0;
q<i.length;
q++){x=(x<<16)+i[q];
u=Math.floor(x/j);
x-=u*j;
if(v.length>0||u>0){v[v.length]=u
}}w[s]=x;
i=v
}var t="";
for(q=w.length-1;
q>=0;
q--){t+=o.charAt(w[q])
}return t
}function str2rstr_utf8(g){var h="";
var f=-1;
var i,j;
while(++f<g.length){i=g.charCodeAt(f);
j=f+1<g.length?g.charCodeAt(f+1):0;
if(55296<=i&&i<=56319&&56320<=j&&j<=57343){i=65536+((i&1023)<<10)+(j&1023);
f++
}if(i<=127){h+=String.fromCharCode(i)
}else{if(i<=2047){h+=String.fromCharCode(192|((i>>>6)&31),128|(i&63))
}else{if(i<=65535){h+=String.fromCharCode(224|((i>>>12)&15),128|((i>>>6)&63),128|(i&63))
}else{if(i<=2097151){h+=String.fromCharCode(240|((i>>>18)&7),128|((i>>>12)&63),128|((i>>>6)&63),128|(i&63))
}}}}}return h
}function str2rstr_utf16le(e){var f="";
for(var d=0;
d<e.length;
d++){f+=String.fromCharCode(e.charCodeAt(d)&255,(e.charCodeAt(d)>>>8)&255)
}return f
}function str2rstr_utf16be(e){var f="";
for(var d=0;
d<e.length;
d++){f+=String.fromCharCode((e.charCodeAt(d)>>>8)&255,e.charCodeAt(d)&255)
}return f
}function rstr2binl(e){var f=Array(e.length>>2);
for(var d=0;
d<f.length;
d++){f[d]=0
}for(var d=0;
d<e.length*8;
d+=8){f[d>>5]|=(e.charCodeAt(d/8)&255)<<(d%32)
}return f
}function binl2rstr(e){var f="";
for(var d=0;
d<e.length*32;
d+=8){f+=String.fromCharCode((e[d>>5]>>>(d%32))&255)
}return f
}function binl_md5(v,q){v[q>>5]|=128<<((q)%32);
v[(((q+64)>>>9)<<4)+14]=q;
var a=1732584193;
var b=-271733879;
var c=-1732584194;
var d=271733878;
for(var i=0;
i<v.length;
i+=16){var r=a;
var s=b;
var t=c;
var u=d;
a=md5_ff(a,b,c,d,v[i+0],7,-680876936);
d=md5_ff(d,a,b,c,v[i+1],12,-389564586);
c=md5_ff(c,d,a,b,v[i+2],17,606105819);
b=md5_ff(b,c,d,a,v[i+3],22,-1044525330);
a=md5_ff(a,b,c,d,v[i+4],7,-176418897);
d=md5_ff(d,a,b,c,v[i+5],12,1200080426);
c=md5_ff(c,d,a,b,v[i+6],17,-1473231341);
b=md5_ff(b,c,d,a,v[i+7],22,-45705983);
a=md5_ff(a,b,c,d,v[i+8],7,1770035416);
d=md5_ff(d,a,b,c,v[i+9],12,-1958414417);
c=md5_ff(c,d,a,b,v[i+10],17,-42063);
b=md5_ff(b,c,d,a,v[i+11],22,-1990404162);
a=md5_ff(a,b,c,d,v[i+12],7,1804603682);
d=md5_ff(d,a,b,c,v[i+13],12,-40341101);
c=md5_ff(c,d,a,b,v[i+14],17,-1502002290);
b=md5_ff(b,c,d,a,v[i+15],22,1236535329);
a=md5_gg(a,b,c,d,v[i+1],5,-165796510);
d=md5_gg(d,a,b,c,v[i+6],9,-1069501632);
c=md5_gg(c,d,a,b,v[i+11],14,643717713);
b=md5_gg(b,c,d,a,v[i+0],20,-373897302);
a=md5_gg(a,b,c,d,v[i+5],5,-701558691);
d=md5_gg(d,a,b,c,v[i+10],9,38016083);
c=md5_gg(c,d,a,b,v[i+15],14,-660478335);
b=md5_gg(b,c,d,a,v[i+4],20,-405537848);
a=md5_gg(a,b,c,d,v[i+9],5,568446438);
d=md5_gg(d,a,b,c,v[i+14],9,-1019803690);
c=md5_gg(c,d,a,b,v[i+3],14,-187363961);
b=md5_gg(b,c,d,a,v[i+8],20,1163531501);
a=md5_gg(a,b,c,d,v[i+13],5,-1444681467);
d=md5_gg(d,a,b,c,v[i+2],9,-51403784);
c=md5_gg(c,d,a,b,v[i+7],14,1735328473);
b=md5_gg(b,c,d,a,v[i+12],20,-1926607734);
a=md5_hh(a,b,c,d,v[i+5],4,-378558);
d=md5_hh(d,a,b,c,v[i+8],11,-2022574463);
c=md5_hh(c,d,a,b,v[i+11],16,1839030562);
b=md5_hh(b,c,d,a,v[i+14],23,-35309556);
a=md5_hh(a,b,c,d,v[i+1],4,-1530992060);
d=md5_hh(d,a,b,c,v[i+4],11,1272893353);
c=md5_hh(c,d,a,b,v[i+7],16,-155497632);
b=md5_hh(b,c,d,a,v[i+10],23,-1094730640);
a=md5_hh(a,b,c,d,v[i+13],4,681279174);
d=md5_hh(d,a,b,c,v[i+0],11,-358537222);
c=md5_hh(c,d,a,b,v[i+3],16,-722521979);
b=md5_hh(b,c,d,a,v[i+6],23,76029189);
a=md5_hh(a,b,c,d,v[i+9],4,-640364487);
d=md5_hh(d,a,b,c,v[i+12],11,-421815835);
c=md5_hh(c,d,a,b,v[i+15],16,530742520);
b=md5_hh(b,c,d,a,v[i+2],23,-995338651);
a=md5_ii(a,b,c,d,v[i+0],6,-198630844);
d=md5_ii(d,a,b,c,v[i+7],10,1126891415);
c=md5_ii(c,d,a,b,v[i+14],15,-1416354905);
b=md5_ii(b,c,d,a,v[i+5],21,-57434055);
a=md5_ii(a,b,c,d,v[i+12],6,1700485571);
d=md5_ii(d,a,b,c,v[i+3],10,-1894986606);
c=md5_ii(c,d,a,b,v[i+10],15,-1051523);
b=md5_ii(b,c,d,a,v[i+1],21,-2054922799);
a=md5_ii(a,b,c,d,v[i+8],6,1873313359);
d=md5_ii(d,a,b,c,v[i+15],10,-30611744);
c=md5_ii(c,d,a,b,v[i+6],15,-1560198380);
b=md5_ii(b,c,d,a,v[i+13],21,1309151649);
a=md5_ii(a,b,c,d,v[i+4],6,-145523070);
d=md5_ii(d,a,b,c,v[i+11],10,-1120210379);
c=md5_ii(c,d,a,b,v[i+2],15,718787259);
b=md5_ii(b,c,d,a,v[i+9],21,-343485551);
a=safe_add(a,r);
b=safe_add(b,s);
c=safe_add(c,t);
d=safe_add(d,u)
}return Array(a,b,c,d)
}function md5_cmn(i,a,b,l,j,k){return safe_add(bit_rol(safe_add(safe_add(a,i),safe_add(l,k)),j),b)
}function md5_ff(a,b,c,d,n,l,m){return md5_cmn((b&c)|((~b)&d),a,b,n,l,m)
}function md5_gg(a,b,c,d,n,l,m){return md5_cmn((b&d)|(c&(~d)),a,b,n,l,m)
}function md5_hh(a,b,c,d,n,l,m){return md5_cmn(b^c^d,a,b,n,l,m)
}function md5_ii(a,b,c,d,n,l,m){return md5_cmn(c^(b|(~d)),a,b,n,l,m)
}function safe_add(g,h){var e=(g&65535)+(h&65535);
var f=(g>>16)+(h>>16)+(e>>16);
return(f<<16)|(e&65535)
}function bit_rol(d,c){return(d<<c)|(d>>>(32-c))
}function convertirMd5(g,e,f,h){if(h!=""){validarForma("",h)
}if(Page_IsValid==true){control=document.getElementById(g);
controlhash=document.getElementById(e);
controlhash1=document.getElementById(f);
controlhash.value=hex_md5(control.value).toLowerCase();
controlhash1.value=control.value;
control.value="1B3456i8"
}return true
}function validarForma(f,d){if(f!=""){boton=document.getElementById(f)
}Page_ClientValidate(d);
cadena="";
for(var e=0;
e<Page_Validators.length;
e++){if(Page_Validators[e].validationGroup==d&&!Page_Validators[e].isvalid){cadena=cadena+Page_Validators[e].errormessage+"|"
}}if(cadena!=""){}else{if(f!=""){boton.style.display="none"
}}};