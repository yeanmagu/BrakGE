function generatedata(x,B){var y=new Array();
if(x==undefined){x=100
}var A=["Andrew","Nancy","Shelley","Regina","Yoshi","Antoni","Mayumi","Ian","Peter","Lars","Petra","Martin","Sven","Elio","Beate","Cheryl","Michael","Guylene"];
var p=["Fuller","Davolio","Burke","Murphy","Nagase","Saavedra","Ohno","Devling","Wilson","Peterson","Winkler","Bein","Petersen","Rossi","Vileid","Saylor","Bjorn","Nodier"];
var t=["Black Tea","Green Tea","Caffe Espresso","Doubleshot Espresso","Caffe Latte","White Chocolate Mocha","Caramel Latte","Caffe Americano","Cappuccino","Espresso Truffle","Espresso con Panna","Peppermint Mocha Twist"];
var r=["2.25","1.5","3.0","3.3","4.5","3.6","3.8","2.5","5.0","1.75","3.25","4.0"];
for(var i=0;
i<x;
i++){var w={};
var s=Math.floor(Math.random()*t.length);
var q=parseFloat(r[s]);
var u=1+Math.round(Math.random()*10);
w.id=i;
w.reportsto=Math.floor(Math.random()*A.length);
if(i%Math.floor(Math.random()*A.length)===0){w.reportsto=null
}w.available=s%2==0;
if(B==true){if(s%2!=0){var v=Math.floor(Math.random()*x);
w.available=i%v==0?null:false
}}w.firstname=A[Math.floor(Math.random()*A.length)];
w.lastname=p[Math.floor(Math.random()*p.length)];
w.name=w.firstname+" "+w.lastname;
w.productname=t[s];
w.price=q;
w.quantity=u;
w.total=q*u;
var z=new Date();
z.setFullYear(2014,Math.floor(Math.random()*11),Math.floor(Math.random()*27));
z.setHours(0,0,0,0);
w.date=z;
y[i]=w
}return y
}function generateordersdata(G){var B=new Array();
if(G==undefined){G=10
}var E=["Andrew","Nancy","Shelley","Regina","Yoshi","Antoni","Mayumi","Ian","Peter","Lars","Petra","Martin","Sven","Elio","Beate","Cheryl","Michael","Guylene"];
var H=["Fuller","Davolio","Burke","Murphy","Nagase","Saavedra","Ohno","Devling","Wilson","Peterson","Winkler","Bein","Petersen","Rossi","Vileid","Saylor","Bjorn","Nodier"];
var A=["Black Tea","Green Tea","Caffe Espresso","Doubleshot Espresso","Caffe Latte","White Chocolate Mocha","Caramel Latte","Caffe Americano","Cappuccino","Espresso Truffle","Espresso con Panna","Peppermint Mocha Twist"];
var j=["2.25","1.5","3.0","3.3","4.5","3.6","3.8","2.5","5.0","1.75","3.25","4.0"];
var C=["Dolor Foundation","Vivamus Non Lorem LLP","Vel Ltd","Turpis Incorporated","Egestas Nunc PC","At Pretium Aliquet Associates","Feugiat Inc.","Lacus Industries","Senectus Et Foundation","Sed LLC","Maecenas Mi Felis LLC","Pede Blandit Ltd","Pellentesque Habitant Morbi Institute","Mollis Vitae Industries","Malesuada Vel Convallis LLP","Risus Duis Corp.","Convallis LLP","Lobortis Augue LLC","Auctor LLP","Neque Inc.","Lorem Eu Corporation"];
for(var F=0;
F<G;
F++){var N={};
var J=Math.floor(Math.random()*A.length);
var I=parseFloat(j[J]);
var M=2+Math.round(Math.random()*10);
N.id=F;
N.parentid=null;
N.name="Order "+F;
N.firstname=E[Math.floor(Math.random()*E.length)];
N.lastname=H[Math.floor(Math.random()*H.length)];
N.customer=C[Math.floor(Math.random()*C.length)];
var K=new Date();
var q=Math.floor(Math.random()*11);
var D=Math.floor(Math.random()*27);
K.setFullYear(2014,q,D);
K.setHours(0,0,0,0);
N.date=K;
N.price="";
N.quantity="";
B.push(N);
var y=1+Math.round(Math.random()*10);
var z=0;
var L=0;
for(var i=0;
i<y;
i++){var t={};
var J=Math.floor(Math.random()*A.length);
var I=parseFloat(j[J]);
var M=1;
t.name=A[J];
t.id=""+F+"."+(1+i);
t.parentid=F;
t.price=I;
t.quantity=1;
var K=new Date();
K.setFullYear(2014,q,D);
K.setHours(Math.floor(Math.random()*23),Math.floor(Math.random()*59),0,0);
t.date=K;
N.firstname=E[Math.floor(Math.random()*E.length)];
N.lastname=H[Math.floor(Math.random()*H.length)];
t.customer=N.firstname+" "+N.lastname;
z+=M*I;
B.push(t);
L+=M
}N.price=z;
N.quantity=1
}return B
}function generatecarsdata(){var l=[{value:"",label:"Any"},{value:"140",label:"Abarth"},{value:"375",label:"Acura"},{value:"800",label:"Aixam"},{value:"900",label:"Alfa Romeo"},{value:"1100",label:"Alpina"},{value:"121",label:"Artega"},{value:"1750",label:"Asia Motors"},{value:"1700",label:"Aston Martin"},{value:"1900",label:"Audi"},{value:"2000",label:"Austin"},{value:"1950",label:"Austin Healey"},{value:"3100",label:"Bentley"},{value:"3500",label:"BMW"},{value:"3850",label:"Borgward"},{value:"4025",label:"Brilliance"},{value:"4350",label:"Bugatti"},{value:"4400",label:"Buick"},{value:"4700",label:"Cadillac"},{value:"112",label:"Casalini"},{value:"5300",label:"Caterham"},{value:"5600",label:"Chevrolet"},{value:"5700",label:"Chrysler"},{value:"5900",label:"Citroën"},{value:"6200",label:"Cobra"},{value:"6325",label:"Corvette"},{value:"6600",label:"Dacia"},{value:"6800",label:"Daewoo"},{value:"7000",label:"Daihatsu"},{value:"7400",label:"DeTomaso"},{value:"7700",label:"Dodge"},{value:"8600",label:"Ferrari"},{value:"8800",label:"Fiat"},{value:"172",label:"Fisker"},{value:"9000",label:"Ford"},{value:"9900",label:"GMC"},{value:"122",label:"Grecav"},{value:"10850",label:"Holden"},{value:"11000",label:"Honda"},{value:"11050",label:"Hummer"},{value:"11600",label:"Hyundai"},{value:"11650",label:"Infiniti"},{value:"11900",label:"Isuzu"},{value:"12100",label:"Iveco"},{value:"12400",label:"Jaguar"},{value:"12600",label:"Jeep"},{value:"13200",label:"Kia"},{value:"13450",label:"Königsegg"},{value:"13900",label:"KTM"},{value:"14400",label:"Lada"},{value:"14600",label:"Lamborghini"},{value:"14700",label:"Lancia"},{value:"14800",label:"Land Rover"},{value:"14845",label:"Landwind"},{value:"15200",label:"Lexus"},{value:"15400",label:"Ligier"},{value:"15500",label:"Lincoln"},{value:"15900",label:"Lotus"},{value:"16200",label:"Mahindra"},{value:"16600",label:"Maserati"},{value:"16700",label:"Maybach"},{value:"16800",label:"Mazda"},{value:"137",label:"McLaren"},{value:"17200",label:"Mercedes-Benz"},{value:"17300",label:"MG"},{value:"30011",label:"Microcar"},{value:"17500",label:"MINI"},{value:"17700",label:"Mitsubishi"},{value:"17900",label:"Morgan"},{value:"18700",label:"Nissan"},{value:"18875",label:"NSU"},{value:"18975",label:"Oldsmobile"},{value:"19000",label:"Opel"},{value:"149",label:"Pagani"},{value:"19300",label:"Peugeot"},{value:"19600",label:"Piaggio"},{value:"19800",label:"Plymouth"},{value:"20000",label:"Pontiac"},{value:"20100",label:"Porsche"},{value:"20200",label:"Proton"},{value:"20700",label:"Renault"},{value:"21600",label:"Rolls Royce"},{value:"21700",label:"Rover"},{value:"125",label:"Ruf"},{value:"21800",label:"Saab"},{value:"22000",label:"Santana"},{value:"22500",label:"Seat"},{value:"22900",label:"Skoda"},{value:"23000",label:"Smart"},{value:"100",label:"Spyker"},{value:"23100",label:"Ssangyong"},{value:"23500",label:"Subaru"},{value:"23600",label:"Suzuki"},{value:"23800",label:"Talbot"},{value:"23825",label:"Tata"},{value:"135",label:"Tesla"},{value:"24100",label:"Toyota"},{value:"24200",label:"Trabant"},{value:"24400",label:"Triumph"},{value:"24500",label:"TVR"},{value:"25200",label:"Volkswagen"},{value:"25100",label:"Volvo"},{value:"25300",label:"Wartburg"},{value:"113",label:"Westfield"},{value:"25650",label:"Wiesmann"}];
var j=["Any","Diesel","Electric","Ethanol (FFV, E85, etc.)","Gas","LPG","Natural Gas","Hybrid","Hydrogen","Petrol"];
var p=["Saloon","Small Car","Estate Car","Van / Minibus","Off-road Vehicle/Pickup Truck","Cabriolet / Roadster","Sports Car/Coupe"];
var m=[{value:"24",label:"24 kW (33 PS)"},{value:"36",label:"36 kW (49 PS)"},{value:"43",label:"43 kW (58 PS)"},{value:"54",label:"54 kW (73 PS)"},{value:"65",label:"65 kW (88 PS)"},{value:"73",label:"73 kW (99 PS)"},{value:"86",label:"86 kW (117 PS)"},{value:"95",label:"95 kW (129 PS)"},{value:"109",label:"109 kW (148 PS)"},{value:"146",label:"146 kW (199 PS)"},{value:"184",label:"184 kW (250 PS)"},{value:"222",label:"222 kW (302 PS)"},{value:"262",label:"262 kW (356 PS)"},{value:"295",label:"295 kW (401 PS)"},{value:"333",label:"333 kW (453 PS)"}];
var i=new Array();
for(var k=0;
k<l.length;
k++){var o={};
o.make=l[k].label;
o.fuelType=j[Math.floor(Math.random()*j.length)];
o.vehicleType=p[Math.floor(Math.random()*p.length)];
var n=Math.floor(Math.random()*m.length);
if(n==m.length-1){n--
}o.powerFrom=m[n];
o.powerTo=m[n+1];
i.push(o)
}return i
};