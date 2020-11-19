var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;var ADa=function(a,b){return g.ec(a,b)},c6=function(a){g.mn(a,"zx",g.Eb());
return a},d6=function(a,b,c){g.Fa(c)||(c=[String(c)]);
g.pn(a.o,b,c)},BDa=function(a,b){var c=[];
g.Yk(b,function(a){try{var b=g.MD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.za(b)?g.LD(b)&&c.push(a):c.push(a)},a);
return c},CDa=function(a,b){var c=BDa(a,b);
(0,g.C)(c,function(a){g.MD.prototype.remove.call(this,a)},a)},DDa=function(a){if(a.Ld){if(a.Ld.locationOverrideToken)return{locationOverrideToken:a.Ld.locationOverrideToken};
if(null!=a.Ld.latitudeE7&&null!=a.Ld.longitudeE7)return{latitudeE7:a.Ld.latitudeE7,longitudeE7:a.Ld.longitudeE7}}return null},EDa=function(a,b,c,d){var e=new g.cn(null,void 0);
a&&g.dn(e,a);b&&g.en(e,b);c&&g.fn(e,c);d&&g.gn(e,d);return e},e6=function(a,b){g.EE[a]=!0;
var c=g.CE();c&&c.publish.apply(c,arguments);g.EE[a]=!1},f6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Xm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",FDa(this,a.capabilities||""),GDa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},FDa=function(a,b){a.capabilities.clear();
(0,g.fe)(b.split(","),g.La(ADa,HDa)).forEach(function(b){a.capabilities.add(b)})},GDa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},g6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},h6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},IDa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},JDa=function(a){return new g6(a)},KDa=function(a){return g.Fa(a)?(0,g.I)(a,JDa):[]},i6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},j6=function(a){return g.Fa(a)?"["+(0,g.I)(a,i6).join(",")+"]":"null"},k6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},LDa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},l6=function(a,b){return g.Qa(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},m6=function(a,b){return g.Qa(a,function(a){return h6(a,b)})},MDa=function(){var a=(0,g.OH)();
a&&CDa(a,a.o.ce(!0))},n6=function(){var a=g.RH("yt-remote-connected-devices")||[];
g.pb(a);return a},NDa=function(a){if(g.Va(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.I)(a,function(a,b){return 0==b?a:a.substring(c.length)})},ODa=function(a){g.QH("yt-remote-connected-devices",a,86400)},p6=function(){if(o6)return o6;
var a=g.RH("yt-remote-device-id");a||(a=k6(),g.QH("yt-remote-device-id",a,31536E3));for(var b=n6(),c=1,d=a;g.Ua(b,d);)c++,d=a+"#"+c;return o6=d},q6=function(){var a=n6(),b=p6();
g.Ua(a,b);g.TH()&&g.rb(a,b);a=NDa(a);if(g.Va(a))try{g.nH("remote_sid")}catch(c){}else try{g.mH("remote_sid",a.join(","),-1)}catch(c){}},PDa=function(){return g.RH("yt-remote-session-browser-channel")},QDa=function(){return g.RH("yt-remote-local-screens")||[]},RDa=function(){g.QH("yt-remote-lounge-token-expiration",!0,86400)},SDa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.I)(QDa(),function(a){return a.loungeToken}),c=(0,g.I)(a,function(a){return a.loungeToken});
(0,g.Lm)(c,function(a){return!g.Ua(b,a)})&&RDa();
g.QH("yt-remote-local-screens",a,31536E3)},TDa=function(a,b){g.QH("yt-remote-session-browser-channel",a);
g.QH("yt-remote-session-screen-id",b);var c=n6(),d=p6();g.Ua(c,d)||c.push(d);ODa(c);q6()},r6=function(a){a||(g.SH("yt-remote-session-screen-id"),g.SH("yt-remote-session-video-id"));
q6();a=n6();g.Za(a,p6());ODa(a)},UDa=function(){if(!s6){var a=g.XD();
a&&(s6=new g.GD(a))}return s6?!!s6.get("yt-remote-use-staging-server"):!1},t6=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},VDa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},u6=function(a){a.length?WDa(a.shift(),function(){u6(a)}):v6()},XDa=function(a){return"chrome-extension://"+a+w6},WDa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},v6=function(){var a=VDa();
a&&a(!1,"No cast extension found")},ZDa=function(){if(YDa){var a=2,b=VDa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;WDa("//web.archive.org/web/20190129124604/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",v6,c)}},$Da=function(){ZDa();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);u6(["//web.archive.org/web/20190129124604/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+w6,"//web.archive.org/web/20190129124604/https://www.gstatic.com/eureka/clank"+w6])},x6=function(a,b,c){g.J.call(this);
this.F=null!=c?(0,g.A)(a,c):a;this.Ed=b;this.D=(0,g.A)(this.XK,this);this.o=!1;this.A=0;this.B=this.Ia=null;this.C=[]},y6=function(){},z6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Y=new g.tn(this);this.A=new g.Hg;this.A.setInterval(250)},bEa=function(a,b,c){a.Tj=1;
a.Dh=c6(b.clone());a.hj=c;a.D=!0;aEa(a,null)},A6=function(a,b,c,d,e){a.Tj=1;
a.Dh=c6(b.clone());a.hj=null;a.D=c;e&&(a.NF=!1);aEa(a,d)},aEa=function(a,b){a.Qk=(0,g.H)();
B6(a);a.di=a.Dh.clone();d6(a.di,"t",a.F);a.Tn=0;a.Xc=a.o.Vt(a.o.Kn()?b:null);0<a.Du&&(a.Rq=new g.Gl((0,g.A)(a.bH,a,a.Xc),a.Du));a.Y.X(a.Xc,"readystatechange",a.eV);var c=a.Ji?g.mc(a.Ji):{};a.hj?(a.Rr="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Xc.send(a.di,a.Rr,a.hj,c)):(a.Rr="GET",a.NF&&!g.Ud&&(c.Connection="close"),a.Xc.send(a.di,a.Rr,null,c));a.o.Bf(1)},eEa=function(a,b,c){for(var d=!0;!a.ri&&a.Tn<c.length;){var e=cEa(a,c);
if(e==C6){4==b&&(a.Eh=4,D6(15),d=!1);break}else if(e==dEa){a.Eh=4;D6(16);d=!1;break}else E6(a,e)}4==b&&0==c.length&&(a.Eh=1,D6(17),d=!1);a.Hf=a.Hf&&d;d||(F6(a),G6(a))},cEa=function(a,b){var c=a.Tn,d=b.indexOf("\n",c);
if(-1==d)return C6;c=Number(b.substring(c,d));if(isNaN(c))return dEa;d+=1;if(d+c>b.length)return C6;var e=b.substr(d,c);a.Tn=d+c;return e},gEa=function(a,b){a.Qk=(0,g.H)();
B6(a);var c=b?window.location.hostname:"";a.di=a.Dh.clone();g.mn(a.di,"DOMAIN",c);g.mn(a.di,"t",a.F);try{a.Jf=new ActiveXObject("htmlfile")}catch(n){F6(a);a.Eh=7;D6(22);G6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in H6)k=H6[l];else if(l in fEa)k=H6[l]=fEa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
H6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.xd(g.Lc("b/12014412"),d+"</body></html>");a.Jf.open();a.Jf.write(g.ld(c));a.Jf.close();a.Jf.parentWindow.m=(0,g.A)(a.kU,a);a.Jf.parentWindow.d=(0,g.A)(a.YE,a,!0);a.Jf.parentWindow.rpcClose=(0,g.A)(a.YE,a,!1);c=a.Jf.createElement("DIV");a.Jf.parentWindow.document.body.appendChild(c);d=g.Zc(a.di.toString());d=g.yb(g.Wc(d));d=g.xd(g.Lc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.rd(c,g.ld(d));a.o.Bf(1)},B6=function(a){a.uy=(0,g.H)()+
a.C;
hEa(a,a.C)},hEa=function(a,b){if(null!=a.ql)throw Error("WatchDog timer not null");
a.ql=I6((0,g.A)(a.zU,a),b)},J6=function(a){a.ql&&(g.v.clearTimeout(a.ql),a.ql=null)},G6=function(a){a.o.GB()||a.ri||a.o.Aq(a)},F6=function(a){J6(a);
g.tf(a.Rq);a.Rq=null;a.A.stop();g.zn(a.Y);if(a.Xc){var b=a.Xc;a.Xc=null;b.abort();b.dispose()}a.Jf&&(a.Jf=null)},E6=function(a,b){try{a.o.RE(a,b),a.o.Bf(4)}catch(c){}},jEa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;iEa(a,b,function(e){e?c(!0):g.v.setTimeout(function(){jEa(a,b,c,d,f)},f)})}},iEa=function(a,b,c){var d=new Image;
d.onload=function(){try{K6(d),c(!0)}catch(e){}};
d.onerror=function(){try{K6(d),c(!1)}catch(e){}};
d.onabort=function(){try{K6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{K6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},K6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},kEa=function(a){this.o=a;
this.A=new y6},lEa=function(a){var b=L6(a.o,a.Il,"/mail/images/cleardot.gif");
c6(b);jEa(b.toString(),5E3,(0,g.A)(a.ZJ,a),3,2E3);a.Bf(1)},N6=function(a){var b=a.o.J;
if(null!=b)D6(5),b?(D6(11),M6(a.o,a,!1)):(D6(12),M6(a.o,a,!0));else if(a.Ge=new z6(a,void 0,void 0,void 0),a.Ge.Ji=a.Bu,b=a.o,b=L6(b,b.Kn()?a.Bm:null,a.Cu),D6(5),!g.Sd||g.Dc(10))d6(b,"TYPE","xmlhttp"),A6(a.Ge,b,!1,a.Bm,!1);else{d6(b,"TYPE","html");var c=a.Ge;a=!!a.Bm;c.Tj=3;c.Dh=c6(b.clone());gEa(c,a)}},O6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new y6;this.H=a||null;this.J=null!=b?b:null;this.F=c||!1},mEa=function(a,b){this.o=a;
this.map=b;this.context=null},nEa=function(a){g.vf.call(this,"statevent",a)},oEa=function(a,b){g.vf.call(this,"timingevent",a);
this.size=b},pEa=function(a){g.vf.call(this,"serverreachability",a)},sEa=function(a){qEa(a);
if(3==a.o){var b=a.qn++,c=a.bp.clone();g.mn(c,"SID",a.B);g.mn(c,"RID",b);g.mn(c,"TYPE","terminate");P6(a,c);b=new z6(a,a.B,b,void 0);b.Tj=2;b.Dh=c6(c.clone());(new Image).src=b.Dh;b.Qk=(0,g.H)();B6(b)}rEa(a)},tEa=function(a){a.wK(1,0);
a.bp=L6(a,null,a.Au);Q6(a)},qEa=function(a){a.rh&&(a.rh.abort(),a.rh=null);
a.zc&&(a.zc.cancel(),a.zc=null);a.Fg&&(g.v.clearTimeout(a.Fg),a.Fg=null);R6(a);a.ie&&(a.ie.cancel(),a.ie=null);a.xh&&(g.v.clearTimeout(a.xh),a.xh=null)},uEa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new mEa(a.XP++,b));2!=a.o&&3!=a.o||Q6(a)},Q6=function(a){a.ie||a.xh||(a.xh=I6((0,g.A)(a.XE,a),0),a.Kj=0)},wEa=function(a,b){if(1==a.o){if(!b){a.qn=Math.floor(1E5*Math.random());
var c=a.qn++,d=new z6(a,"",c,void 0);d.Ji=null;var e=S6(a),f=a.bp.clone();g.mn(f,"RID",c);g.mn(f,"CVER","1");P6(a,f);bEa(d,f,e);a.ie=d;a.o=2}}else 3==a.o&&(b?vEa(a,b):0==a.A.length||a.ie||vEa(a))},vEa=function(a,b){if(b)if(6<a.wi){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.qn-1;var d=S6(a)}else c=b.G,d=b.hj;else c=a.qn++,d=S6(a);var e=a.bp.clone();g.mn(e,"SID",a.B);g.mn(e,"RID",c);g.mn(e,"AID",a.nk);P6(a,e);c=new z6(a,a.B,c,a.Kj+1);c.Ji=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ie=c;bEa(c,e,d)},P6=function(a,b){if(a.Dd){var c=a.Dd.lB();
c&&g.Rb(c,function(a,c){g.mn(b,c,a)})}},S6=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.wi&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.wi?e:f-d;try{g.Rb(k,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},xEa=function(a){a.zc||a.Fg||(a.G=1,a.Fg=I6((0,g.A)(a.WE,a),0),a.Cj=0)},T6=function(a){if(a.zc||a.Fg||3<=a.Cj)return!1;
a.G++;a.Fg=I6((0,g.A)(a.WE,a),yEa(a,a.Cj));a.Cj++;return!0},M6=function(a,b,c){a.Or=c;
a.Uf=b.Tg;a.F||tEa(a)},R6=function(a){null!=a.yi&&(g.v.clearTimeout(a.yi),a.yi=null)},yEa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},U6=function(a,b){if(2==b||9==b){var c=null;
a.Dd&&(c=null);var d=(0,g.A)(a.XV,a);c||(c=new g.cn("//web.archive.org/web/20190129124604/https://www.google.com/images/cleardot.gif"),c6(c));iEa(c.toString(),1E4,d)}else D6(2);zEa(a,b)},zEa=function(a,b){a.o=0;
a.Dd&&a.Dd.kA(b);rEa(a);qEa(a)},rEa=function(a){a.o=0;
a.Uf=-1;if(a.Dd)if(0==a.C.length&&0==a.A.length)a.Dd.Ht();else{g.cb(a.C);var b=g.cb(a.A);a.C.length=0;a.A.length=0;a.Dd.Ht(b)}},L6=function(a,b,c){var d=g.nn(c);
if(""!=d.A)b&&g.en(d,b+"."+d.A),g.fn(d,d.D);else{var e=window.location;d=EDa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Yl&&g.Rb(a.Yl,function(a,b){g.mn(d,b,a)});
g.mn(d,"VER",a.wi);P6(a,d);return d},I6=function(a,b){if(!g.Ha(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},D6=function(a){V6.dispatchEvent(new nEa(V6,a))},AEa=function(){},BEa=function(a,b){this.action=a;
this.params=b||{}},W6=function(a,b){g.J.call(this);
this.o=new g.U(this.aU,0,this);g.K(this,this.o);this.Ed=5E3;this.A=0;if(g.Ha(a))b&&(a=(0,g.A)(a,b));else if(a&&g.Ha(a.handleEvent))a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},X6=function(a,b,c){this.K=a;
this.F=b;this.B=new g.FD;this.A=new W6(this.AW,this);this.o=this.kb=null;this.Bb=!1;this.D=null;this.J="";this.H=this.C=0;this.G=[];this.L=c||!1},CEa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.Or,sessionId:a.o.B,arrayId:a.o.nk}},DEa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&wEa(a.o),sEa(a.o));a.H=0},Y6=function(a){return!!a.o&&3==a.o.o},EEa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},Z6=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||document.location.href;var b=g.Wg(a)||"";b&&(this.port=":"+b);this.domain=g.Vg(a)||"";a=g.Pb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Hb(a,"10.0")&&(this.A=!1))},$6=function(a,b){var c=a.o;
if(g.za(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.eh(c+b,{})},a7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.La(a.C,d,!0),onError:g.La(a.B,e),Id:g.La(a.D,e)};c&&(a.Rb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.kF(b,a)},IEa=function(){var a=FEa;
GEa();b7.push(a);HEa(b7)},c7=function(a,b){GEa();
var c=b7,d=JEa(a,String(b));g.Va(c)?KEa(d):(HEa(c),(0,g.C)(c,function(a){a(d)}))},GEa=function(){b7||(b7=g.x("yt.mdx.remote.debug.handlers_")||[],g.Ca("yt.mdx.remote.debug.handlers_",b7,void 0))},KEa=function(a){var b=(d7+1)%50;
d7=b;e7[b]=a;f7||(f7=49==b)},HEa=function(a){var b=e7;
if(b[0]){var c=d7,d=f7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.C)(a,function(a){a(e)})}while(d!=c);
e7=Array(50);d7=-1;f7=!1}},JEa=function(a,b){var c=((0,g.H)()-LEa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g7=function(a){g.V.call(this);
this.G=a;this.o=[]},MEa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},NEa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.fe)(a.o,function(a){return!!l6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=MEa(a,b[d])||c;return c},OEa=function(a,b){var c=a.o.length;
a.o=(0,g.fe)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},h7=function(a,b,c,d){g.V.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Ia=NaN},j7=function(a){g7.call(this,"LocalScreenService");
this.B=a;this.A=NaN;i7(this);this.info("Initializing with "+j6(this.o))},PEa=function(a){if(a.o.length){var b=(0,g.I)(a.o,function(a){return a.id}),c=$6(a.B,"/pairing/get_lounge_token_batch");
a7(a.B,c,{screen_ids:b.join(",")},(0,g.A)(a.lL,a),(0,g.A)(a.kL,a))}},i7=function(a){var b=KDa(QDa());
b=(0,g.fe)(b,function(a){return!a.uuid});
return NEa(a,b)},k7=function(a,b){SDa((0,g.I)(a.o,IDa));
b&&RDa()},m7=function(a,b){g.V.call(this);
this.F=b;var c=g.RH("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Ua(c,l)}this.o=d;this.D=a;this.B=this.C=NaN;this.A=null;l7("Initialized with "+g.Ng(this.o))},QEa=function(a,b,c){var d=$6(a.D,"/pairing/get_screen_availability");
a7(a.D,d,{lounge_token:b.token},(0,g.A)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.A)(function(){c(!1)},a))},n7=function(a,b){a:if(g.Wb(b)!=g.Wb(a.o))var c=!1;
else{c=g.bc(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(l7("Updated online screens: "+g.Ng(a.o)),a.o=b,a.V("screenChange"));REa(a)},o7=function(a){isNaN(a.B)||g.BE(a.B);
a.B=g.zE((0,g.A)(a.ox,a),0<a.C&&a.C<(0,g.H)()?2E4:1E4)},l7=function(a){c7("OnlineScreenService",a)},SEa=function(a){var b={};
(0,g.C)(a.F(),function(a){a.token?b[a.token]=a.id:this.sc("Requesting availability of screen w/o lounge token.")});
return b},REa=function(a){a=g.bc(g.Sb(a.o,function(a){return a}));
g.pb(a);a.length?g.QH("yt-remote-online-screen-ids",a.join(","),60):g.SH("yt-remote-online-screen-ids")},p7=function(a){g7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};TEa(this)},VEa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Ae();if(k=(c?m6(k,c):null)||m6(k,b)){k.uuid=b;var l=q7(a,k);QEa(a.A,l,function(a){e(a?l:null)})}else c?UEa(a,c,(0,g.A)(function(a){var f=q7(this,new g6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));QEa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},WEa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},UEa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Rb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.kF($6(a.F,"/pairing/get_lounge_token_batch"),e)},XEa=function(a){a.o=a.B.Ae();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+j6(a.o))},TEa=function(a){r7(a);
a.B=new j7(a.F);a.B.subscribe("screenChange",(0,g.A)(a.yL,a));XEa(a);a.C=KDa(g.RH("yt-remote-automatic-screen-cache")||[]);r7(a);a.info("Initializing automatic screens: "+j6(a.C));a.A=new m7(a.F,(0,g.A)(a.Ae,a,!0));a.A.subscribe("screenChange",(0,g.A)(function(){this.V("onlineScreenChange")},a))},q7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=m6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.QH("yt-remote-automatic-screen-cache",(0,g.I)(a.C,IDa)));r7(a);a.D[b.uuid]=b.id;g.QH("yt-remote-device-id-map",a.D,31536E3);return b},r7=function(a){a.D=g.RH("yt-remote-device-id-map")||{}},s7=function(a,b,c){g.V.call(this);
this.R=c;this.J=a;this.A=b;this.B=null},t7=function(a,b){c7(a.R,b)},u7=function(a,b){s7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.A)(this.HW,this);this.D=(0,g.A)(this.LU,this);this.C=g.zE((0,g.A)(function(){YEa(this,null)},this),12E4)},ZEa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Ng(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.z,(0,g.A)(function(){t7(this,"Failed to send message: getMdxSessionStatus.")},a)):t7(a,"Sending yt message without session: "+g.Ng(b))},YEa=function(a,b){g.BE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.A)(a.Bq,a),d=(0,g.A)(a.Fe,a);a.wB(b,c,d,5)}}else a.Fe(Error("Waiting for session status timed out."))},v7=function(a,b,c){s7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.N=c;this.D=null;this.G=g.z;this.F=NaN;this.L=(0,g.A)(this.KW,this);this.o=g.z},$Ea=function(a){a.o=a.J.fH(a.K,a.A.label,a.A.friendlyName,(0,g.A)(function(a){this.o=g.z;
this.Bq(a)},a),(0,g.A)(function(a){this.o=g.z;
this.Fe(a)},a))},aFa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.N;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}UDa()&&(b.env_useStageMdx=1);return g.ch(b)},w7=function(a,b){s7.call(this,a,b,"ManualSession");
this.o=g.zE((0,g.A)(this.qk,this,null),150)},x7=function(a,b,c,d){g.V.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.A)(this.jT,this)},bFa=function(a,b){return b?g.Qa(a.B,function(a){return h6(b,a.label)},a):null},y7=function(a){c7("Controller",a)},FEa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},z7=function(a){return a.D||!!a.B.length||!!a.o},A7=function(a,b,c){b!=a.o&&(g.tf(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.A)(a.UE,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.qk(null)):a.V("yt-remote-cast2-session-change",null))},cFa=function(a){var b=a.A.eH(),c=a.o&&a.o.A;
a=(0,g.I)(b,function(a){c&&h6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=bFa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},iFa=function(a,b,c,d,e,f,k){dFa()?eFa(b,e,f,k)&&(C7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?fFa(a,c):(window.__onGCastApiAvailable=function(b,d){b?fFa(a,c):(D7("Failed to load cast API: "+d),E7(!1),C7(!1),g.SH("yt-remote-cast-available"),g.SH("yt-remote-cast-receiver"),gFa(),c(!1))},d?g.ME("https://web.archive.org/web/20190129124604/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?$Da():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?v6():(ZDa(),u6(hFa.map(XDa))))):B7("Cannot initialize because not running Chrome")},gFa=function(){B7("dispose");
var a=F7();a&&a.dispose();g.Ca("yt.mdx.remote.cloudview.instance_",null,void 0);jFa(!1);g.HE(G7);G7.length=0},H7=function(){return!!g.RH("yt-remote-cast-installed")},kFa=function(){var a=g.RH("yt-remote-cast-receiver");
return a?a.friendlyName:null},lFa=function(){B7("clearCurrentReceiver");
g.SH("yt-remote-cast-receiver")},mFa=function(){return H7()?F7()?F7().getCastSession():(D7("getCastSelector: Cast is not initialized."),null):(D7("getCastSelector: Cast API is not installed!"),null)},J7=function(){H7()?F7()?I7()?(B7("Requesting cast selector."),F7().requestSession()):(B7("Wait for cast API to be ready to request the session."),G7.push(g.GE("yt-remote-cast2-api-ready",J7))):D7("requestCastSelector: Cast is not initialized."):D7("requestCastSelector: Cast API is not installed!")},K7=
function(a,b){I7()?F7().setConnectedScreenStatus(a,b):D7("setConnectedScreenStatus called before ready.")},dFa=function(){var a=0<=g.Pb.search(/ (CrMo|Chrome|CriOS)\//);
return g.oL||a},nFa=function(a,b){F7().init(a,b)},eFa=function(a,b,c,d){var e=!1;
F7()||(a=new x7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.QH("yt-remote-cast-available",a);e6("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){B7("onReceiverSelected: "+a.friendlyName);
g.QH("yt-remote-cast-receiver",a);e6("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){B7("onReceiverResumed: "+a.friendlyName);
g.QH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){B7("onSessionChange: "+i6(a));
a||g.SH("yt-remote-cast-receiver");e6("yt-remote-cast2-session-change",a)}),g.Ca("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
B7("cloudview.createSingleton_: "+e);return e},F7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},fFa=function(a,b){E7(!0);
C7(!1);nFa(a,function(a){a?(jFa(!0),g.JE("yt-remote-cast2-api-ready")):(D7("Failed to initialize cast API."),E7(!1),g.SH("yt-remote-cast-available"),g.SH("yt-remote-cast-receiver"),gFa());b(a)})},B7=function(a){c7("cloudview",a)},D7=function(a){c7("cloudview",a)},E7=function(a){B7("setCastInstalled_ "+a);
g.QH("yt-remote-cast-installed",a)},I7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},jFa=function(a){B7("setApiReady_ "+a);
g.Ca("yt.mdx.remote.cloudview.apiReady_",a,void 0)},C7=function(a){g.Ca("yt.mdx.remote.cloudview.initializing_",a,void 0)},L7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.Yf=!1;this.J=this.H=this.A=this.C=0;this.B=NaN;this.D=!1;this.reset(a)},M7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.Yf=!1;a.hasNext=!1;a.G=0;a.F=(0,g.H)();a.C=0;a.A=0;a.H=0;a.J=0;a.B=NaN;a.D=!1},N7=function(a){return a.tb()?((0,g.H)()-a.F)/1E3:0},O7=function(a,b){a.G=b;
a.F=(0,g.H)()},P7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},Q7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&M7(a)},R7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.nc(a.o);b.hasPrevious=a.Yf;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.A;b.duration=a.H;b.loadedTime=a.J;b.liveIngestionTime=a.B;return b},T7=function(a,b){g.V.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.WC;this.B=this.A=null;this.J=(0,g.A)(this.IQ,this);this.G=(0,g.A)(this.vn,this);this.H=(0,g.A)(this.HQ,this);this.K=(0,g.A)(this.UQ,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Dy,this),oFa(this))):c=3;0!=c&&(b?this.Dy(c):g.zE((0,g.A)(function(){this.Dy(c)},this),0));
var d=mFa();d&&S7(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},U7=function(a){return new L7(a.C.getPlayerContextData())},oFa=function(a){(0,g.C)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.La(this.eT,a),this))},a)},pFa=function(a){(0,g.C)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},V7=function(a,b){50>a.D.Lc()&&g.YC(a.D,b)},X7=function(a,b,c){var d=U7(a);
O7(d,c);-1E3!=d.playerState&&(d.playerState=b);W7(a,d)},Y7=function(a,b,c){a.C.sendMessage(b,c)},W7=function(a,b){pFa(a);
a.C.setPlayerContextData(R7(b));oFa(a)},S7=function(a,b){a.B&&(a.B.removeUpdateListener(a.J),a.B.removeMediaListener(a.G),a.vn(null));
a.B=b;a.B&&(c7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.J),a.B.addMediaListener(a.G),a.B.media.length&&a.vn(a.B.media[0]))},qFa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=U7(a);b.contentId!=d.videoId&&c7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;O7(d,a.A.getEstimatedTime());W7(a,d)}else c7("CP","No cast media video. Ignoring state update.")},Z7=function(a,b,c){return(0,g.A)(function(a){this.sc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.sc("Retrying "+b+" using MDx browser channel."),Y7(this,b,c))},a)},$7=function(a,b,c){g.V.call(this);
this.D=NaN;this.N=!1;this.K=this.J=this.L=this.R=NaN;this.T=[];this.C=this.G=this.B=this.ob=this.o=null;this.sa=a;this.T.push(g.mG(window,"beforeunload",(0,g.A)(this.bL,this)));this.A=[];this.ob=new L7;this.aa=b.id;this.o=rFa(this,c);this.o.subscribe("handlerOpened",this.MQ,this);this.o.subscribe("handlerClosed",this.JQ,this);this.o.subscribe("handlerError",this.KQ,this);this.o.subscribe("handlerMessage",this.LQ,this);EEa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=this.ob.videoId;
g.TH()&&g.QH("yt-remote-session-video-id",a)},this)},a8=function(a){c7("conn",a)},rFa=function(a,b){return new X6($6(a.sa,"/bc"),b)},b8=function(a,b){a.V("proxyStateChange",b)},sFa=function(a){a.D=g.zE((0,g.A)(function(){a8("Connecting timeout");
this.F(1)},a),2E4)},c8=function(a){g.BE(a.D);
a.D=NaN},d8=function(a){g.BE(a.R);
a.R=NaN},tFa=function(a){e8(a);
a.L=g.zE((0,g.A)(function(){f8(this,"getNowPlaying")},a),2E4)},e8=function(a){g.BE(a.L);
a.L=NaN},vFa=function(a,b){b&&(c8(a),d8(a));
b==(Y6(a.o)&&isNaN(a.D))?b&&(b8(a,1),f8(a,"getSubtitlesTrack")):b?(a.Z()&&a.ob.reset(),b8(a,1),f8(a,"getNowPlaying"),uFa(a)):a.F(1)},wFa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.ob.videoId&&(g.hc(b.params)?a.ob.o=null:a.ob.o=b.params,a.V("remotePlayerChange"))},xFa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.ob.listId=b.params.listId||a.ob.listId;Q7(a.ob,c,d);a.V("remoteQueueChange")},zFa=function(a,b){b.params=b.params||{};
xFa(a,b);yFa(a,b);a.V("autoplayDismissed")},yFa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
O7(a.ob,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.ob.playerState&&(c=-1E3);a.ob.playerState=c;c=Number(b.params.loadedTime);a.ob.J=isNaN(c)?0:c;c=Number(b.params.duration);a.ob.H=isNaN(c)?0:c;c=a.ob;var d=Number(b.params.liveIngestionTime);c.B=d;c.D=isNaN(d)?!1:!0;c=a.ob;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.A=isNaN(e)?0:e;1==a.ob.playerState?tFa(a):e8(a);a.V("remotePlayerChange")},AFa=function(a,b){if(-1E3!=
a.ob.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.ob.playerState=c;c=parseInt(b.params.currentTime,10);O7(a.ob,isNaN(c)?0:c);a.V("remotePlayerChange")}},BFa=function(a,b){var c="true"==b.params.muted;
a.ob.volume=parseInt(b.params.volume,10);a.ob.muted=c;a.V("remotePlayerChange")},CFa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",parseInt(b.params.timeout,10))},DFa=function(a,b){var c="true"==b.params.hasNext;
a.ob.Yf="true"==b.params.hasPrevious;a.ob.hasNext=c;a.V("previousNextChange")},uFa=function(a){g.BE(a.K);
a.K=g.zE((0,g.A)(a.F,a,1),864E5)},f8=function(a,b,c){c?a8("Sending: action="+b+", params="+g.Ng(c)):a8("Sending: action="+b);
a.o.sendMessage(b,c)},g8=function(a){g7.call(this,"ScreenServiceProxy");
this.md=a;this.A=[];this.A.push(this.md.$_s("screenChange",(0,g.A)(this.FW,this)));this.A.push(this.md.$_s("onlineScreenChange",(0,g.A)(this.DS,this)))},IFa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.rE("MDX_CONFIG")||b;MDa();q6();h8||(h8=new Z6(b?b.loungeApiHost:void 0),UDa()&&(h8.o="/api/loungedev"));i8||(i8=g.x("yt.mdx.remote.deferredProxies_")||[],g.Ca("yt.mdx.remote.deferredProxies_",i8,void 0));EFa();var c=j8();if(!c){var d=new p7(h8);g.Ca("yt.mdx.remote.screenService_",d,void 0);c=j8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);iFa(a,d,function(a){a?k8()&&K7(k8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){e6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.Ca("yt.mdx.remote.initialized_",!0,void 0),l8("Initializing: "+g.Ng(b)),m8.push(g.GE("yt-remote-cast2-availability-change",function(){e6("yt-remote-receiver-availability-change")})),m8.push(g.GE("yt-remote-cast2-receiver-selected",function(){n8(null);
e6("yt-remote-auto-connect","cast-selector-receiver")})),m8.push(g.GE("yt-remote-cast2-receiver-resumed",function(){e6("yt-remote-receiver-resumed","cast-selector-receiver")})),m8.push(g.GE("yt-remote-cast2-session-change",FFa)),m8.push(g.GE("yt-remote-connection-change",function(a){a?K7(k8(),"YouTube TV"):o8()||(K7(null,null),lFa())})),a=p8(),b.isAuto&&(a.id+="#dial"),g.UE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),l8(" -- with channel params: "+
g.Ng(a)),GFa(a),c.start(),k8()||HFa())},KFa=function(){var a=JFa();
H7()&&g.RH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},JFa=function(){var a=j8().md.$_gos();
var b=q8();b&&r8()&&(l6(a,b)||a.push(b));return LDa(a)},s8=function(){var a=LFa();
!a&&H7()&&kFa()&&(a={key:"cast-selector-receiver",name:kFa()});return a},LFa=function(){var a=JFa(),b=q8();
b||(b=o8());return g.Qa(a,function(a){return b&&h6(b,a.key)?!0:!1})},q8=function(){var a=k8();
if(!a)return null;var b=j8().Ae();return m6(b,a)},FFa=function(a){l8("remote.onCastSessionChange_: "+i6(a));
if(a){var b=q8();b&&b.id==a.id?K7(b.id,"YouTube TV"):(b&&t8(),u8(a,1))}else r8()&&t8()},t8=function(){I7()?F7().stopSession():D7("stopSession called before API ready.");
var a=r8();a&&(a.disconnect(1),v8(null))},w8=function(){var a=r8();
return!!a&&3!=a.getProxyState()},l8=function(a){c7("remote",a)},j8=function(){if(!x8){var a=g.x("yt.mdx.remote.screenService_");
x8=a?new g8(a):null}return x8},k8=function(){return g.x("yt.mdx.remote.currentScreenId_")},MFa=function(a){g.Ca("yt.mdx.remote.currentScreenId_",a,void 0)},NFa=function(){return g.x("yt.mdx.remote.connectData_")},n8=function(a){g.Ca("yt.mdx.remote.connectData_",a,void 0)},r8=function(){return g.x("yt.mdx.remote.connection_")},v8=function(a){var b=r8();
n8(null);a||MFa("");g.Ca("yt.mdx.remote.connection_",a,void 0);i8&&((0,g.C)(i8,function(b){b(a)}),i8.length=0);
b&&!a?e6("yt-remote-connection-change",!1):!b&&a&&e6("yt-remote-connection-change",!0)},o8=function(){var a=g.TH();
if(!a)return null;var b=j8().Ae();return m6(b,a)},u8=function(a,b){q8()&&q8();
MFa(a.id);var c=new $7(h8,a,p8());c.connect(b,NFa());c.subscribe("beforeDisconnect",function(a){e6("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){r8()&&v8(null)});
v8(c)},HFa=function(){var a=o8();
a?(l8("Resume connection to: "+i6(a)),u8(a,0)):(r6(),lFa(),l8("Skipping connecting because no session screen found."))},EFa=function(){var a=p8();
if(g.hc(a)){a=p6();var b=g.RH("yt-remote-session-name")||"",c=g.RH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ca("yt.mdx.remote.channelParams_",a,void 0)}},p8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},GFa=function(a){a?(g.QH("yt-remote-session-app",a.app),g.QH("yt-remote-session-name",a.name)):(g.SH("yt-remote-session-app"),g.SH("yt-remote-session-name"));
g.Ca("yt.mdx.remote.channelParams_",a,void 0)},y8=function(a,b,c){g.J.call(this);
this.D=a;this.A=b;this.B=new g.BG(this);g.K(this,this.B);this.B.O(b,"onCaptionsTrackListChanged",this.XR);this.B.O(b,"captionschanged",this.GQ);this.B.O(b,"captionssettingschanged",this.uG);this.B.O(b,"videoplayerreset",this.Cq);this.B.O(b,"mdxautoplaycancel",this.YJ);this.T=this.B.O(b,"onVolumeChange",this.BE);this.H=!1;this.o=c;c.subscribe("proxyStateChange",this.QE,this);c.subscribe("remotePlayerChange",this.yn,this);c.subscribe("remoteQueueChange",this.Cq,this);c.subscribe("autoplayUpNext",this.nE,
this);c.subscribe("previousNextChange",this.NE,this);c.subscribe("nowAutoplaying",this.FE,this);c.subscribe("autoplayDismissed",this.mE,this);this.suggestion=null;this.J=new g.HQ(64);this.C=new g.U(this.rG,500,this);g.K(this,this.C);this.F=new g.U(this.sG,1E3,this);g.K(this,this.F);this.L=new x6(this.hW,0,this);g.K(this,this.L);this.G={};this.R=new g.U(this.TG,1E3,this);g.K(this,this.R);this.K=new g.Gl(this.AO,1E3,this);g.K(this,this.K);this.N=g.z;this.uG();this.Cq();this.yn()},z8=function(a,b){a.D.Ke(b,
a.A.getVideoData().lengthSeconds)},OFa=function(a){z8(a,0);
a.C.stop();A8(a,new g.HQ(64))},C8=function(a,b){if(B8(a)&&!a.H){var c=null;
b&&(c={style:a.A.getSubtitlesUserSettings()},g.pc(c,b));a.o.fG(a.A.getVideoData(1).videoId,c);a.G=U7(a.o).o}},D8=function(a,b){var c=a.A.getPlaylist();
if(c){var d=c.ze();var e=c.listId.toString()}c=a.A.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.ek,DDa(c));A8(a,new g.HQ(1))},PFa=function(a,b){if(b){var c=a.A.getOption("captions","tracklist",{D4:1});
c&&c.length?(a.A.setOption("captions","track",b),a.H=!1):(a.A.loadModule("captions"),a.H=!0)}else a.A.setOption("captions","track",{})},B8=function(a){return U7(a.o).videoId==a.A.getVideoData(1).videoId},A8=function(a,b){a.F.stop();
var c=a.J;if(!g.NQ(c,b)){var d=g.X(b,2);d!=g.X(a.J,2)&&g.RU(a.A,d);a.J=b;QFa(a.D,c,b)}},E8=function(a){g.W.call(this,{I:"div",
M:"ytp-remote",P:[{I:"div",M:"ytp-remote-display-status",P:[{I:"div",M:"ytp-remote-display-status-icon",P:[g.gsa()]},{I:"div",M:"ytp-remote-display-status-text",ba:"{{statustext}}"}]}]});this.B=new g.IV(this,250);g.K(this,this.B);this.C=a;this.O(a,"presentingplayerstatechange",this.D);RFa(this,g.NU(a))},RFa=function(a,b){if(3==a.C.getPresentingPlayerType()){var c={RECEIVER_NAME:a.C.getOption("remote","currentReceiver").name};
c=g.X(b,128)?g.AV("Fehler auf $RECEIVER_NAME",c):b.tb()||g.X(b,4)?g.AV("Wiedergabe \u00fcber $RECEIVER_NAME",c):g.AV("Verbunden mit $RECEIVER_NAME",c);a.updateValue("statustext",c);a.B.show()}else a.B.hide()},F8=function(a,b){g.ZW.call(this,"Wiedergeben auf",0,a,b);
this.B=a;this.J={};this.O(a,"onMdxReceiversChange",this.L);this.O(a,"presentingplayerstatechange",this.L);this.L()},G8=function(a){g.kV.call(this,a);
this.A={key:k6(),name:"Dieser Computer"};this.C=null;this.D=[];this.G=this.o=null;this.F=[this.A];this.B=this.A;this.fn=new g.HQ(64);this.J=0;this.H=-1;if(!g.nN(g.Y(this.player))){a=this.player;var b=g.wQ(a);b&&(b=b.hn())&&(b=new F8(a,b),g.K(this,b));b=new E8(a);g.K(this,b);g.bV(a,b.element,4)}},QFa=function(a,b,c){a.fn=c;
a.player.V("presentingplayerstatechange",new g.SQ(c,b))},H8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)t8();
else{a.B=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Ga(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ek,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(d=DDa(d))&&(c.locationInfo=d);d=c}else d=null;l8("Connecting to: "+g.Ng(b));"cast-selector-receiver"==b.key?
(n8(d||null),I7()?F7().setLaunchParams(d||null):D7("setLaunchParams called before ready.")):!d&&w8()&&k8()==b.key?e6("yt-remote-connection-change",!0):(t8(),n8(d||null),d=j8().Ae(),(d=m6(d,b.key))&&u8(d,1))}},fEa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},H6={"'":"\\'"},SFa={},HDa={dY:"atp",H2:"ska",V1:"que",g1:"mus",D2:"sus",p_:"dsp",n2:"seq"};
f6.prototype.sh=function(){var a=new f6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var s6,o6="",w6=t6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",YDa=t6("loadCastFramework")||t6("loadCastApplicationFramework"),hFa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.B(x6,g.J);g.h=x6.prototype;g.h.WK=function(a){this.C=arguments;this.o=!1;this.Ia?this.B=(0,g.H)()+this.Ed:this.Ia=g.Ig(this.D,this.Ed)};
g.h.stop=function(){this.Ia&&(g.Jg(this.Ia),this.Ia=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.W=function(){this.stop();x6.ga.W.call(this)};
g.h.XK=function(){this.B?(this.Ia=g.Ig(this.D,this.B-(0,g.H)()),this.B=null):(this.Ia=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};g.h=z6.prototype;g.h.Ji=null;g.h.Hf=!1;g.h.ql=null;g.h.uy=null;g.h.Qk=null;g.h.Tj=null;g.h.Dh=null;g.h.di=null;g.h.hj=null;g.h.Xc=null;g.h.Tn=0;g.h.Jf=null;g.h.Rr=null;g.h.Eh=null;g.h.Cm=-1;g.h.NF=!0;g.h.ri=!1;g.h.Du=0;g.h.Rq=null;var dEa={},C6={};g.h=z6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.eV=function(a){a=a.target;var b=this.Rq;b&&3==g.Rx(a)?b.ym():this.bH(a)};
g.h.bH=function(a){try{if(a==this.Xc)a:{var b=g.Rx(this.Xc),c=this.Xc.A,d=this.Xc.getStatus();if(g.Sd&&!g.Dc(10)||g.Ud&&!g.Cc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.xf&&!g.Vx(this.Xc))break a;this.ri||4!=b||7==c||(8==c||0>=d?this.o.Bf(3):this.o.Bf(2));J6(this);var e=this.Xc.getStatus();this.Cm=e;var f=g.Vx(this.Xc);(this.Hf=200==e)?(4==b&&F6(this),this.D?(eEa(this,b,f),g.xf&&this.Hf&&3==b&&(this.Y.X(this.A,"tick",this.ZU),this.A.start())):E6(this,f),this.Hf&&!this.ri&&(4==b?this.o.Aq(this):
(this.Hf=!1,B6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Eh=3,D6(13)):(this.Eh=0,D6(14)),F6(this),G6(this))}}catch(k){this.Xc&&g.Vx(this.Xc)}finally{}};
g.h.ZU=function(){var a=g.Rx(this.Xc),b=g.Vx(this.Xc);this.Tn<b.length&&(J6(this),eEa(this,a,b),this.Hf&&4!=a&&B6(this))};
g.h.kU=function(a){I6((0,g.A)(this.jU,this,a),0)};
g.h.jU=function(a){this.ri||(J6(this),E6(this,a),B6(this))};
g.h.YE=function(a){I6((0,g.A)(this.iU,this,a),0)};
g.h.iU=function(a){this.ri||(F6(this),this.Hf=a,this.o.Aq(this),this.o.Bf(4))};
g.h.cancel=function(){this.ri=!0;F6(this)};
g.h.zU=function(){this.ql=null;var a=(0,g.H)();0<=a-this.uy?(2!=this.Tj&&this.o.Bf(3),F6(this),this.Eh=2,D6(18),G6(this)):hEa(this,this.uy-a)};
g.h.getLastError=function(){return this.Eh};g.h=kEa.prototype;g.h.Bu=null;g.h.Ge=null;g.h.Sq=!1;g.h.HB=null;g.h.Yo=null;g.h.Hv=null;g.h.Cu=null;g.h.af=null;g.h.Tg=-1;g.h.Bm=null;g.h.Il=null;g.h.connect=function(a){this.Cu=a;a=L6(this.o,null,this.Cu);D6(3);this.HB=(0,g.H)();var b=this.o.H;null!=b?(this.Bm=b[0],(this.Il=b[1])?(this.af=1,lEa(this)):(this.af=2,N6(this))):(d6(a,"MODE","init"),this.Ge=new z6(this,void 0,void 0,void 0),this.Ge.Ji=this.Bu,A6(this.Ge,a,!1,null,!0),this.af=0)};
g.h.ZJ=function(a){if(a)this.af=2,N6(this);else{D6(4);var b=this.o;b.Uf=b.rh.Tg;U6(b,9)}a&&this.Bf(2)};
g.h.Vt=function(a){return this.o.Vt(a)};
g.h.abort=function(){this.Ge&&(this.Ge.cancel(),this.Ge=null);this.Tg=-1};
g.h.GB=function(){return!1};
g.h.RE=function(a,b){this.Tg=a.Cm;if(0==this.af)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.Uf=this.Tg;U6(c,2);return}this.Bm=c[0];this.Il=c[1]}else c=this.o,c.Uf=this.Tg,U6(c,2);else if(2==this.af)if(this.Sq)D6(7),this.Hv=(0,g.H)();else if("11111"==b){if(D6(6),this.Sq=!0,this.Yo=(0,g.H)(),c=this.Yo-this.HB,!g.Sd||g.Dc(10)||500>c)this.Tg=200,this.Ge.cancel(),D6(12),M6(this.o,this,!0)}else D6(8),this.Yo=this.Hv=(0,g.H)(),this.Sq=!1};
g.h.Aq=function(){this.Tg=this.Ge.Cm;if(this.Ge.Hf)0==this.af?this.Il?(this.af=1,lEa(this)):(this.af=2,N6(this)):2==this.af&&((!g.Sd||g.Dc(10)?!this.Sq:200>this.Hv-this.Yo)?(D6(11),M6(this.o,this,!1)):(D6(12),M6(this.o,this,!0)));else{0==this.af?D6(9):2==this.af&&D6(10);var a=this.o;a.Uf=this.Tg;U6(a,2)}};
g.h.Kn=function(){return this.o.Kn()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Bf=function(a){this.o.Bf(a)};g.h=O6.prototype;g.h.Yl=null;g.h.ie=null;g.h.zc=null;g.h.Au=null;g.h.bp=null;g.h.Zz=null;g.h.rp=null;g.h.qn=0;g.h.XP=0;g.h.Dd=null;g.h.xh=null;g.h.Fg=null;g.h.yi=null;g.h.rh=null;g.h.Or=null;g.h.nk=-1;g.h.xC=-1;g.h.Uf=-1;g.h.Kj=0;g.h.Cj=0;g.h.wi=8;var V6=new g.Xf;g.B(nEa,g.vf);g.B(oEa,g.vf);g.B(pEa,g.vf);g.h=O6.prototype;g.h.connect=function(a,b,c,d,e){D6(0);this.Au=b;this.Yl=c||{};d&&g.za(e)&&(this.Yl.OSID=d,this.Yl.OAID=e);this.F?(I6((0,g.A)(this.sA,this,a),100),tEa(this)):this.sA(a)};
g.h.sA=function(a){this.rh=new kEa(this);this.rh.Bu=null;this.rh.A=this.D;this.rh.connect(a)};
g.h.GB=function(){return 0==this.o};
g.h.XE=function(a){this.xh=null;wEa(this,a)};
g.h.WE=function(){this.Fg=null;this.zc=new z6(this,this.B,"rpc",this.G);this.zc.Ji=null;this.zc.Du=0;var a=this.Zz.clone();g.mn(a,"RID","rpc");g.mn(a,"SID",this.B);g.mn(a,"CI",this.Or?"0":"1");g.mn(a,"AID",this.nk);P6(this,a);if(!g.Sd||g.Dc(10))g.mn(a,"TYPE","xmlhttp"),A6(this.zc,a,!0,this.rp,!1);else{g.mn(a,"TYPE","html");var b=this.zc,c=!!this.rp;b.Tj=3;b.Dh=c6(a.clone());gEa(b,c)}};
g.h.RE=function(a,b){if(0!=this.o&&(this.zc==a||this.ie==a))if(this.Uf=a.Cm,this.ie==a&&3==this.o)if(7<this.wi){try{var c=this.D.parse(b)}catch(f){c=null}if(g.Fa(c)&&3==c.length)if(0==c[0])a:{if(!this.Fg){if(this.zc)if(this.zc.Qk+3E3<this.ie.Qk)R6(this),this.zc.cancel(),this.zc=null;else break a;T6(this);D6(19)}}else this.xC=c[1],0<this.xC-this.nk&&37500>c[2]&&this.Or&&0==this.Cj&&!this.yi&&(this.yi=I6((0,g.A)(this.BQ,this),6E3));else U6(this,11)}else b!=SFa.gZ.o&&U6(this,11);else if(this.zc==a&&
R6(this),!g.E(b)){c=this.D.parse(b);g.Fa(c);for(var d=0;d<c.length;d++){var e=c[d];this.nk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.rp=e[2],e=e[3],null!=e?this.wi=e:this.wi=6,this.o=3,this.Dd&&this.Dd.mA(),this.Zz=L6(this,this.Kn()?this.rp:null,this.Au),xEa(this)):"stop"==e[0]&&U6(this,7):3==this.o&&("stop"==e[0]?U6(this,7):"noop"!=e[0]&&this.Dd&&this.Dd.lA(e),this.Cj=0)}}};
g.h.BQ=function(){null!=this.yi&&(this.yi=null,this.zc.cancel(),this.zc=null,T6(this),D6(20))};
g.h.Aq=function(a){if(this.zc==a){R6(this);this.zc=null;var b=2}else if(this.ie==a)this.ie=null,b=1;else return;this.Uf=a.Cm;if(0!=this.o)if(a.Hf)1==b?(b=(0,g.H)()-a.Qk,V6.dispatchEvent(new oEa(V6,a.hj?a.hj.length:0,b,this.Kj)),Q6(this),this.C.length=0):xEa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Uf)){if(d=1==b)this.ie||this.xh||1==this.o||2<=this.Kj?d=!1:(this.xh=I6((0,g.A)(this.XE,this,a),yEa(this,this.Kj)),this.Kj++,d=!0);d=!(d||2==b&&T6(this))}if(d)switch(c){case 1:U6(this,
5);break;case 4:U6(this,10);break;case 3:U6(this,6);break;case 7:U6(this,12);break;default:U6(this,2)}}};
g.h.wK=function(a){if(!g.Ua(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.XV=function(a){a?D6(2):(D6(1),zEa(this,8))};
g.h.Vt=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Lx;a.H=!1;return a};
g.h.isActive=function(){return!!this.Dd&&this.Dd.isActive(this)};
g.h.Bf=function(a){V6.dispatchEvent(new pEa(V6,a))};
g.h.Kn=function(){return!(!g.Sd||g.Dc(10))};
g.h=AEa.prototype;g.h.mA=function(){};
g.h.lA=function(){};
g.h.kA=function(){};
g.h.Ht=function(){};
g.h.lB=function(){return{}};
g.h.isActive=function(){return!0};g.B(W6,g.J);g.h=W6.prototype;g.h.aU=function(){this.Ed=Math.min(3E5,2*this.Ed);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.Ed+15E3*Math.random();g.Ku(this.o,a);this.A=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Ed=5E3};g.B(X6,AEa);g.h=X6.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.vk=function(a){return this.B.Ki(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.Bb||(this.Bb=!0,g.tf(this.B),DEa(this),g.tf(this.A),this.A=null)};
g.h.la=function(){return this.Bb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.J="";this.A.stop();this.D=a||null;this.C=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new O6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.L),e=this.o;e&&(e.Dd=null);d.Dd=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.nk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.pc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):Y6(this)&&uEa(this.o,c)};
g.h.mA=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)uEa(this.o,a[b])}this.V("handlerOpened")};
g.h.kA=function(a){var b=2==a&&401==this.o.Uf;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.Ht=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.lB=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.pc(a,this.D);return a};
g.h.lA=function(a){"S"==a[0]?this.J=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),sEa(this.o)):this.V("handlerMessage",new BEa(a[0],a[1]))};
g.h.AW=function(){this.A.isActive();var a=this.o,b=0;a.zc&&b++;a.ie&&b++;0!=b||this.connect(this.D,this.C)};Z6.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z6.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Z6.prototype.D=function(a){a(Error("request timed out"))};var LEa=(0,g.H)(),b7=null,e7=Array(50),d7=-1,f7=!1;g.B(g7,g.V);g7.prototype.Ae=function(){return this.o};
g7.prototype.contains=function(a){return!!l6(this.o,a)};
g7.prototype.get=function(a){return a?m6(this.o,a):null};
g7.prototype.info=function(a){c7(this.G,a)};g.B(h7,g.V);var TFa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=h7.prototype;g.h.start=function(){!this.o&&isNaN(this.Ia)&&this.dH()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ia)||(g.BE(this.Ia),this.Ia=NaN)};
g.h.W=function(){this.stop();h7.ga.W.call(this)};
g.h.dH=function(){this.Ia=NaN;this.o=g.kF($6(this.F,"/pairing/get_screen"),{method:"POST",Rb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.A)(this.DW,this),onError:(0,g.A)(this.BW,this),Id:(0,g.A)(this.EW,this)})};
g.h.DW=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new g6(c))};
g.h.BW=function(a){this.o=null;a.status&&404==a.status?this.A>=TFa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=TFa[this.A],this.Ia=g.zE((0,g.A)(this.dH,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.EW=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.B(j7,g7);g.h=j7.prototype;g.h.start=function(){i7(this)&&this.V("screenChange");!g.RH("yt-remote-lounge-token-expiration")&&PEa(this);g.BE(this.A);this.A=g.zE((0,g.A)(this.start,this),1E4)};
g.h.add=function(a,b){i7(this);MEa(this,a);k7(this,!1);this.V("screenChange");b(a);a.token||PEa(this)};
g.h.remove=function(a,b){var c=i7(this);OEa(this,a)&&(k7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.Kr=function(a,b,c,d){var e=i7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.W=function(){g.BE(this.A);j7.ga.W.call(this)};
g.h.lL=function(a){i7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k7(this,!b);b&&c7(this.G,"Missed "+b+" lounge tokens.")};
g.h.kL=function(a){c7(this.G,"Requesting lounge tokens failed: "+a)};g.B(m7,g.V);g.h=m7.prototype;g.h.start=function(){var a=parseInt(g.RH("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.H)()-144E5<a?0:a)?o7(this):(this.C=(0,g.H)()+3E5,g.QH("yt-remote-fast-check-period",this.C),this.ox())};
g.h.isEmpty=function(){return g.hc(this.o)};
g.h.update=function(){l7("Updating availability on schedule.");var a=this.F(),b=g.Sb(this.o,function(b,d){return b&&!!m6(a,d)},this);
n7(this,b)};
g.h.W=function(){g.BE(this.B);this.B=NaN;this.A&&(this.A.abort(),this.A=null);m7.ga.W.call(this)};
g.h.ox=function(){g.BE(this.B);this.B=NaN;this.A&&this.A.abort();var a=SEa(this);if(g.Wb(a)){var b=$6(this.D,"/pairing/get_screen_availability");this.A=a7(this.D,b,{lounge_token:g.bc(a).join(",")},(0,g.A)(this.FT,this,a),(0,g.A)(this.ET,this))}else n7(this,{}),o7(this)};
g.h.FT=function(a,b){this.A=null;var c=g.bc(SEa(this));if(g.qb(c,g.bc(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;n7(this,d);o7(this)}else this.sc("Changing Screen set during request."),this.ox()};
g.h.ET=function(a){this.sc("Screen availability failed: "+a);this.A=null;o7(this)};
g.h.sc=function(a){c7("OnlineScreenService",a)};g.B(p7,g7);g.h=p7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.Kr=function(a,b,c,d){this.B.contains(a)?this.B.Kr(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c7(this.G,a),d(Error(a)))};
g.h.Ae=function(a){return a?this.o:g.bb(this.o,(0,g.fe)(this.C,function(a){return!this.contains(a)},this))};
g.h.eH=function(){return(0,g.fe)(this.Ae(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.fH=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new h7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.A)(function(a){g.tf(f);d(q7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.tf(f);e(a)});
f.start();return(0,g.A)(f.stop,f)};
g.h.GW=function(a,b,c,d){g.kF($6(this.F,"/pairing/get_screen"),{method:"POST",Rb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.A)(function(a,d){var e=new g6(d.screen||{});if(!e.name||WEa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);WEa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(q7(this,e))},this),
onError:(0,g.A)(function(a){d(Error("pairing request failed: "+a.status))},this),
Id:(0,g.A)(function(){d(Error("pairing request timed out."))},this)})};
g.h.W=function(){g.tf(this.B);g.tf(this.A);p7.ga.W.call(this)};
g.h.yL=function(){XEa(this);this.V("screenChange");this.A.update()};
p7.prototype.dispose=p7.prototype.dispose;g.B(s7,g.V);g.h=s7.prototype;g.h.Bq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.Fe=function(a){this.la()||(a&&t7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){c7(this.R,a)};
g.h.hH=function(){return null};
g.h.Dx=function(a){var b=this.A;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.A)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.A)(function(){t7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.W=function(){this.Dx("");s7.ga.W.call(this)};g.B(u7,s7);g.h=u7.prototype;g.h.Cx=function(a){if(this.o){if(this.o==a)return;t7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);ZEa(this)};
g.h.qk=function(a){this.info("launchWithParams no-op for Cast: "+g.Ng(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.A)(function(){this.Fe()},this),(0,g.A)(function(){this.Fe(Error("Failed to stop receiver app."))},this)):this.Fe(Error("Stopping cast device witout session."))};
g.h.Dx=g.z;g.h.W=function(){this.info("disposeInternal");g.BE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;u7.ga.W.call(this)};
g.h.LU=function(a,b){if(!this.la())if(b){var c=g.Gx(b);if(g.Ia(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Ng(c));switch(d){case "mdxSessionStatus":YEa(this,c.screenId);break;default:t7(this,"Unknown youtube message: "+d)}}else t7(this,"Unable to parse message.")}else t7(this,"No data in message.")};
g.h.wB=function(a,b,c,d){VEa(this.J,this.A.label,a,this.A.friendlyName,(0,g.A)(function(e){e?b(e):0<=d?(t7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.zE((0,g.A)(this.wB,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.hH=function(){return this.o};
g.h.HW=function(a){this.la()||a||(t7(this,"Cast session died."),this.Fe())};g.B(v7,s7);g.h=v7.prototype;g.h.Cx=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.qk=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.z;g.BE(this.F);this.C?this.C.stop((0,g.A)(this.Fe,this,null),(0,g.A)(this.Fe,this,"Failed to stop DIAL device.")):this.Fe()};
g.h.W=function(){this.o();this.o=g.z;g.BE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;v7.ga.W.call(this)};
g.h.KW=function(a){this.la()||a||(t7(this,"DIAL session died."),this.o(),this.o=g.z,this.Fe())};
g.h.ev=function(a){this.K=k6();if(this.D){var b=new chrome.cast.DialLaunchResponse(!0,aFa(this));a(b);$Ea(this)}else this.G=(0,g.A)(function(){g.BE(this.F);this.G=g.z;this.F=NaN;var b=new chrome.cast.DialLaunchResponse(!0,aFa(this));a(b);$Ea(this)},this),this.F=g.zE((0,g.A)(function(){this.G()},this),100)};
g.h.MM=function(a,b,c){VEa(this.J,this.H.receiver.label,a,this.A.friendlyName,(0,g.A)(function(a){a&&a.token?(this.Bq(a),b(new chrome.cast.DialLaunchResponse(!1))):this.ev(b,c)},this),(0,g.A)(function(a){t7(this,"Failed to get DIAL screen: "+a);
this.ev(b,c)},this))};g.B(w7,s7);w7.prototype.stop=function(){this.Fe()};
w7.prototype.Cx=g.z;w7.prototype.qk=function(){g.BE(this.o);this.o=NaN;var a=m6(this.J.Ae(),this.A.label);a?this.Bq(a):this.Fe(Error("No such screen"))};
w7.prototype.W=function(){g.BE(this.o);this.o=NaN;w7.ga.W.call(this)};g.B(x7,g.V);g.h=x7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new chrome.cast.ApiConfig(c,(0,g.A)(this.TE,this),(0,g.A)(this.nT,this),d,e);c.customDialLaunchCallback=(0,g.A)(this.jR,this);chrome.cast.initialize(c,(0,g.A)(function(){this.la()||
(chrome.cast.addReceiverActionListener(this.C),IEa(),this.A.subscribe("onlineScreenChange",(0,g.A)(this.gH,this)),this.B=cFa(this),chrome.cast.setCustomReceivers(this.B,g.z,(0,g.A)(function(a){this.sc("Failed to set initial custom receivers: "+g.Ng(a))},this)),this.V("yt-remote-cast2-availability-change",z7(this)),b(!0))},this),(0,g.A)(function(a){this.sc("Failed to initialize API: "+g.Ng(a));
b(!1)},this))};
g.h.FV=function(a,b){y7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)y7("Unsetting old screen status: "+this.o.A.friendlyName),A7(this,null)}if(a&&b){if(!this.o){c=m6(this.A.Ae(),a);if(!c){y7("setConnectedScreenStatus: Unknown screen.");return}var d=bFa(this,c);d||(y7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(d),chrome.cast.setCustomReceivers(this.B,
g.z,(0,g.A)(function(a){this.sc("Failed to set initial custom receivers: "+g.Ng(a))},this)));
y7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);A7(this,new w7(this.A,d),!0)}this.o.Dx(b)}else y7("setConnectedScreenStatus: no screen.")};
g.h.GV=function(a){this.la()?this.sc("Setting connection data on disposed cast v2"):this.o?this.o.qk(a):this.sc("Setting connection data without a session")};
g.h.JW=function(){this.la()?this.sc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),A7(this,null)):y7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.A)(this.TE,this),(0,g.A)(this.JT,this))};
g.h.W=function(){this.A.unsubscribe("onlineScreenChange",(0,g.A)(this.gH,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);g.Za(g.x("yt.mdx.remote.debug.handlers_")||[],FEa);g.tf(this.o);x7.ga.W.call(this)};
g.h.sc=function(a){c7("Controller",a)};
g.h.UE=function(a,b){this.o==a&&(b||A7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.jT=function(a,b){if(!this.la())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),y7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)y7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{y7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:A7(this,
new w7(this.A,a));break;case chrome.cast.ReceiverType.DIAL:A7(this,new v7(this.A,a,this.F));break;case chrome.cast.ReceiverType.CAST:A7(this,new u7(this.A,a));break;default:this.sc("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.sc("Stopping receiver w/o session: "+a.friendlyName)}else this.sc("onReceiverAction_ called without receiver.")};
g.h.jR=function(a){if(this.la())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.sc("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.sc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.B)return y7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.sc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);A7(this,new v7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.A)(b.MM,b,(b.H.extraData||{}).screenId||null)):new Promise((0,g.A)(b.ev,b))};
g.h.TE=function(a){if(!this.la()){y7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)y7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),A7(this,new u7(this.A,b),!0);else{this.sc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=m6(this.A.Ae(),c.label);d&&h6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(y7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.tf(this.o),this.o=new u7(this.A,b),this.o.subscribe("sessionScreen",(0,g.A)(this.UE,this,this.o)),this.o.qk(null));this.o.Cx(a)}}};
g.h.IW=function(){return this.o?this.o.hH():null};
g.h.JT=function(a){this.la()||(this.sc("Failed to estabilish a session: "+g.Ng(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&A7(this,null))};
g.h.nT=function(a){y7("Receiver availability updated: "+a);if(!this.la()){var b=z7(this);this.D=a==chrome.cast.ReceiverAvailability.AVAILABLE;z7(this)!=b&&this.V("yt-remote-cast2-availability-change",z7(this))}};
g.h.gH=function(){this.la()||(this.B=cFa(this),y7("Updating custom receivers: "+g.Ng(this.B)),chrome.cast.setCustomReceivers(this.B,g.z,(0,g.A)(function(){this.sc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",z7(this)))};
x7.prototype.setLaunchParams=x7.prototype.GV;x7.prototype.setConnectedScreenStatus=x7.prototype.FV;x7.prototype.stopSession=x7.prototype.JW;x7.prototype.getCastSession=x7.prototype.IW;x7.prototype.requestSession=x7.prototype.requestSession;x7.prototype.init=x7.prototype.init;x7.prototype.dispose=x7.prototype.dispose;var G7=[];g.h=L7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";M7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Yf=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.A=a.seekableEnd,this.H=a.duration,this.J=a.loadedTime,this.B=a.liveIngestionTime,this.D=!isNaN(this.B))};
g.h.tb=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.getDuration=function(){return this.D?this.H+N7(this):this.H};
g.h.clone=function(){return new L7(R7(this))};g.B(T7,g.V);g.h=T7.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.z,Z7(this,"play")):Y7(this,"play"),X7(this,1,P7(U7(this))),this.V("remotePlayerChange")):V7(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.z,Z7(this,"pause")):Y7(this,"pause"),X7(this,2,P7(U7(this))),this.V("remotePlayerChange")):V7(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.A){var b=U7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.tb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.z,Z7(this,"seekTo",{newTime:a}))}else Y7(this,"seekTo",{newTime:a});X7(this,3,a);this.V("remotePlayerChange")}else V7(this,g.La(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.z,Z7(this,"stopVideo")):Y7(this,"stopVideo");var a=U7(this);a.index=-1;a.videoId="";M7(a);W7(this,a);this.V("remotePlayerChange")}else V7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=U7(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.A)(function(){c7("CP","set receiver volume: "+d)},this),(0,g.A)(function(){this.sc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.A)(function(){c7("CP","set receiver muted: "+b)},this),(0,g.A)(function(){this.sc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Y7(this,"setVolume",e)}c.muted=b;c.volume=a;W7(this,c)}else V7(this,g.La(this.setVolume,a,b))};
g.h.fG=function(a,b){if(1==this.o){var c=U7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Ng(b.style),g.pc(d,c.o));Y7(this,"setSubtitlesTrack",d);W7(this,c)}else V7(this,g.La(this.fG,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){Y7(this,"setAudioTrack",{videoId:a,audioTrackId:b.Nb.id});var c=U7(this);c.audioTrackId=b.Nb.id;W7(this,c)}else V7(this,g.La(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=U7(this);c=c||0;var m={videoId:a,currentIndex:c};Q7(l,a,c);g.za(b)&&(O7(l,b),m.currentTime=b);g.za(d)&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Ng(k));Y7(this,"setPlaylist",m);d||W7(this,l)};
g.h.Hq=function(a,b){if(1==this.o){if(a&&b){var c=U7(this);Q7(c,a,b);W7(this,c)}Y7(this,"previous")}else V7(this,g.La(this.Hq,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=U7(this);Q7(c,a,b);W7(this,c)}Y7(this,"next")}else V7(this,g.La(this.nextVideo,a,b))};
g.h.MA=function(){1==this.o?Y7(this,"dismissAutoplay"):V7(this,this.MA)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}T7.ga.dispose.call(this)};
g.h.W=function(){pFa(this);this.C=null;this.D.clear();S7(this,null);T7.ga.W.call(this)};
g.h.Dy=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.ZC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.eT=function(a,b){this.V(a,b)};
g.h.IQ=function(a){if(!a)this.vn(null),S7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=U7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,W7(this,b)}};
g.h.vn=function(a){c7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),qFa(this),this.V("remotePlayerChange")};
g.h.HQ=function(a){a?(qFa(this),this.V("remotePlayerChange")):this.vn(null)};
g.h.Rx=function(){Y7(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.UQ=function(){var a=mFa();a&&S7(this,a)};
g.h.sc=function(a){c7("CP",a)};g.B($7,g.V);g.h=$7.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.za(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.za(k)&&(l.currentIndex=k);c&&(this.ob.listId=c);this.ob.videoId=d;this.ob.index=k||0;this.ob.state=3;O7(this.ob,m);this.C="UNSUPPORTED";a8("Connecting with setPlaylist and params: "+g.Ng(l));this.o.connect({method:"setPlaylist",
params:g.Ng(l)},a,PDa())}else a8("Connecting without params"),this.o.connect({},a,PDa());sFa(this)};
g.h.dispose=function(){this.la()||(this.V("beforeDispose"),b8(this,3));$7.ga.dispose.call(this)};
g.h.W=function(){c8(this);e8(this);d8(this);g.BE(this.J);this.J=NaN;g.BE(this.K);this.K=NaN;this.B=null;g.nG(this.T);this.T.length=0;this.o.dispose();$7.ga.W.call(this);this.C=this.G=this.A=this.ob=this.o=null};
g.h.bL=function(){this.F(2)};
g.h.MQ=function(){a8("Channel opened");this.N&&(this.N=!1,d8(this),this.R=g.zE((0,g.A)(function(){a8("Timing out waiting for a screen.");this.F(1)},this),15E3));
TDa(CEa(this.o),this.aa)};
g.h.JQ=function(){a8("Channel closed");isNaN(this.D)?r6(!0):r6();this.dispose()};
g.h.KQ=function(a){r6();isNaN(this.H())?(a8("Channel error: "+a+" without reconnection"),this.dispose()):(this.N=!0,a8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),b8(this,2))};
g.h.LQ=function(a){a.params?a8("Received: action="+a.action+", params="+g.Ng(a.params)):a8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Gx(a.params.devices);this.A=(0,g.I)(a,function(a){return new f6(a)});
a=!!g.Qa(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
vFa(this,a);break;case "loungeScreenDisconnected":g.$a(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
vFa(this,!1);break;case "remoteConnected":var b=new f6(g.Gx(a.params.device));g.Qa(this.A,function(a){return b?a.id==b.id:!1})||g.Xa(this.A,b);
break;case "remoteDisconnected":b=new f6(g.Gx(a.params.device));g.$a(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":xFa(this,a);break;case "nowPlaying":zFa(this,a);break;case "onStateChange":yFa(this,a);break;case "onAdStateChange":AFa(this,a);break;case "onVolumeChanged":BFa(this,a);break;case "onSubtitlesTrackChanged":wFa(this,a);break;case "nowAutoplaying":CFa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":DFa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:a8("Unrecognized action: "+a.action)}};
g.h.mV=function(){if(this.B){var a=this.B;this.B=null;this.ob.videoId!=a&&f8(this,"getNowPlaying")}};
$7.prototype.subscribe=$7.prototype.subscribe;$7.prototype.unsubscribeByKey=$7.prototype.vk;$7.prototype.ha=function(){var a=3;this.la()||(a=0,isNaN(this.H())?Y6(this.o)&&isNaN(this.D)&&(a=1):a=2);return a};
$7.prototype.getProxyState=$7.prototype.ha;$7.prototype.F=function(a){a8("Disconnecting with "+a);c8(this);this.V("beforeDisconnect",a);1==a&&r6();DEa(this.o,a);this.dispose()};
$7.prototype.disconnect=$7.prototype.F;$7.prototype.fa=function(){var a=this.ob;this.B&&(a=this.ob.clone(),Q7(a,this.B,a.index));return R7(a)};
$7.prototype.getPlayerContextData=$7.prototype.fa;
$7.prototype.ma=function(a){var b=new L7(a);b.videoId&&b.videoId!=this.ob.videoId&&(this.B=b.videoId,g.BE(this.J),this.J=g.zE((0,g.A)(this.mV,this),5E3));var c=[];this.ob.listId==b.listId&&this.ob.videoId==b.videoId&&this.ob.index==b.index||c.push("remoteQueueChange");this.ob.playerState==b.playerState&&this.ob.volume==b.volume&&this.ob.muted==b.muted&&P7(this.ob)==P7(b)&&g.Ng(this.ob.o)==g.Ng(b.o)||c.push("remotePlayerChange");this.ob.reset(a);(0,g.C)(c,function(a){this.V(a)},this)};
$7.prototype.setPlayerContextData=$7.prototype.ma;$7.prototype.Z=function(){var a=this.o.F.id,b=g.Qa(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
$7.prototype.getOtherConnectedRemoteId=$7.prototype.Z;$7.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.H)():NaN};
$7.prototype.getReconnectTimeout=$7.prototype.H;$7.prototype.ea=function(){return this.C||"UNSUPPORTED"};
$7.prototype.getAutoplayMode=$7.prototype.ea;$7.prototype.da=function(){return this.G||""};
$7.prototype.getAutoplayVideoId=$7.prototype.da;$7.prototype.xa=function(){if(!isNaN(this.H())){var a=this.o.A;g.Lu(a.o);a.start()}};
$7.prototype.reconnect=$7.prototype.xa;$7.prototype.ka=function(a,b){f8(this,a,b);uFa(this)};
$7.prototype.sendMessage=$7.prototype.ka;g.B(g8,g7);g.h=g8.prototype;g.h.Ae=function(a){return this.md.$_gs(a)};
g.h.contains=function(a){return!!this.md.$_c(a)};
g.h.get=function(a){return this.md.$_g(a)};
g.h.start=function(){this.md.$_st()};
g.h.add=function(a,b,c){this.md.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.md.$_r(a,b,c)};
g.h.Kr=function(a,b,c,d){this.md.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.A.length;a<b;++a)this.md.$_ubk(this.A[a]);this.A.length=0;this.md=null;g8.ga.W.call(this)};
g.h.FW=function(){this.V("screenChange")};
g.h.DS=function(){this.V("onlineScreenChange")};
p7.prototype.$_st=p7.prototype.start;p7.prototype.$_gspc=p7.prototype.GW;p7.prototype.$_gsppc=p7.prototype.fH;p7.prototype.$_c=p7.prototype.contains;p7.prototype.$_g=p7.prototype.get;p7.prototype.$_a=p7.prototype.add;p7.prototype.$_un=p7.prototype.Kr;p7.prototype.$_r=p7.prototype.remove;p7.prototype.$_gs=p7.prototype.Ae;p7.prototype.$_gos=p7.prototype.eH;p7.prototype.$_s=p7.prototype.subscribe;p7.prototype.$_ubk=p7.prototype.vk;var h8=null,i8=null,x8=null,m8=[];g.r(y8,g.J);g.h=y8.prototype;
g.h.W=function(){g.J.prototype.W.call(this);this.C.stop();this.F.stop();this.L.stop();this.N();this.o.unsubscribe("proxyStateChange",this.QE,this);this.o.unsubscribe("remotePlayerChange",this.yn,this);this.o.unsubscribe("remoteQueueChange",this.Cq,this);this.o.unsubscribe("autoplayUpNext",this.nE,this);this.o.unsubscribe("previousNextChange",this.NE,this);this.o.unsubscribe("nowAutoplaying",this.FE,this);this.o.unsubscribe("autoplayDismissed",this.mE,this);this.o=this.D=null};
g.h.oD=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(B8(this)){if(!U7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":U7(this.o).tb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.K.ym(c[0],c[1]);break;case "control_subtitles_set_track":C8(this,c[0]);break;case "control_set_audio_track":c=c[0],B8(this)&&this.o.setAudioTrack(this.A.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.A.getCurrentTime();D8(this,0==c?void 0:c);break;case "control_seek":D8(this,c[0]);break;case "control_subtitles_set_track":C8(this,c[0]);break;case "control_set_audio_track":c=c[0],B8(this)&&this.o.setAudioTrack(this.A.getVideoData(1).videoId,c)}};
g.h.GQ=function(a){this.L.WK(a)};
g.h.hW=function(a){this.oD("control_subtitles_set_track",g.hc(a)?null:a)};
g.h.uG=function(){var a=this.A.getOption("captions","track");g.hc(a)||C8(this,a)};
g.h.BE=function(a){if(B8(this)){this.o.unsubscribe("remotePlayerChange",this.yn,this);var b=Math.round(a.volume);a=!!a.muted;var c=U7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.R.start();this.o.subscribe("remotePlayerChange",this.yn,this)}};
g.h.XR=function(){g.hc(this.G)||PFa(this,this.G);this.H=!1};
g.h.QE=function(a,b){this.F.stop();2==b&&this.sG()};
g.h.yn=function(){if(B8(this)){this.C.stop();var a=U7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.D.Uk(1);break;case 1082:case 1083:this.D.Uk(0);break;default:this.D.Uk(-1)}switch(a.playerState){case 1081:case 1:A8(this,new g.HQ(8));this.rG();break;case 1085:case 3:A8(this,new g.HQ(9));break;case 1083:case 0:A8(this,new g.HQ(2));this.K.stop();z8(this,this.A.getVideoData().lengthSeconds);break;case 1084:A8(this,new g.HQ(4));break;case 2:A8(this,new g.HQ(4));z8(this,P7(a));
break;case -1:A8(this,new g.HQ(64));break;case -1E3:A8(this,new g.HQ(128,{errorCode:"mdx.remoteerror",message:"Dieses Video ist nicht f\u00fcr die Remote-Wiedergabe verf\u00fcgbar."}))}a=U7(this.o).o;var b=this.G;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.G=a,PFa(this,a));a=U7(this.o);-1==a.volume||Math.round(this.A.getVolume())==a.volume&&this.A.isMuted()==a.muted||this.R.isActive()||this.TG()}else OFa(this)};
g.h.NE=function(){this.A.V("mdxpreviousnextchange")};
g.h.Cq=function(){B8(this)||OFa(this)};
g.h.YJ=function(){this.o.MA()};
g.h.nE=function(a){a&&(a=g.kF("/watch_queue_ajax",{method:"GET",gd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.A)(this.mU,this)}))&&(this.N=(0,g.A)(a.abort,a))};
g.h.mU=function(a,b){var c=new g.qP(g.Y(this.A),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.A.V("mdxautoplayupnext",c)};
g.h.FE=function(a){isNaN(a)||this.A.V("mdxnowautoplaying",a)};
g.h.mE=function(){this.A.V("mdxautoplaycanceled")};
g.h.AO=function(a,b){-1==U7(this.o).playerState?D8(this,a):b&&this.o.seekTo(a)};
g.h.TG=function(){if(B8(this)){var a=U7(this.o);this.B.Ma(this.T);a.muted?this.A.mute():this.A.unMute();this.A.setVolume(a.volume);this.T=this.B.O(this.A,"onVolumeChange",this.BE)}};
g.h.rG=function(){this.C.stop();if(!this.o.la()){var a=U7(this.o);a.tb()&&A8(this,new g.HQ(8));z8(this,P7(a));this.C.start()}};
g.h.sG=function(){this.F.stop();this.C.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.F.start()};g.r(E8,g.W);E8.prototype.D=function(a){RFa(this,a.state)};g.r(F8,g.ZW);F8.prototype.L=function(){var a=this.B.getOption("remote","receivers");a&&1<a.length&&!this.B.getOption("remote","quickCast")?(this.J=g.sb(a,this.F,this),g.$W(this,(0,g.I)(a,this.F)),a=this.B.getOption("remote","currentReceiver"),this.ng(this.F(a)),this.enable(!0)):this.enable(!1)};
F8.prototype.F=function(a){return a.key};
F8.prototype.hf=function(a){return"cast-selector-receiver"==a?"Streamen\u2026":this.J[a].name};
F8.prototype.Gd=function(a){g.ZW.prototype.Gd.call(this,a);this.B.setOption("remote","currentReceiver",this.J[a]);this.C.Jb()};g.r(G8,g.kV);g.h=G8.prototype;g.h.create=function(){IFa(g.fN(g.Y(this.player)));this.D.push(g.GE("yt-remote-before-disconnect",this.CQ,this));this.D.push(g.GE("yt-remote-connection-change",this.oT,this));this.D.push(g.GE("yt-remote-receiver-availability-change",this.OE,this));this.D.push(g.GE("yt-remote-auto-connect",this.mT,this));this.D.push(g.GE("yt-remote-receiver-resumed",this.lT,this));this.OE()};
g.h.load=function(){this.player.cancelPlayback();g.kV.prototype.load.call(this);this.C=new y8(this,this.player,this.o);var a=(a=NFa())?a.currentTime:0;var b=w8()?new T7(r8(),void 0):null;0==a&&b&&(a=P7(U7(b)));0!=a&&this.Ke(a);QFa(this,this.fn,this.fn);g.y0(this.player.app,6)};
g.h.unload=function(){this.player.V("mdxautoplaycanceled");this.B=this.A;g.uf(this.C,this.o);this.o=this.C=null;g.kV.prototype.unload.call(this);g.y0(this.player.app,5)};
g.h.W=function(){g.HE(this.D);g.kV.prototype.W.call(this)};
g.h.Yh=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.oD.apply(this.C,[a].concat(g.ea(c)))};
g.h.Uk=function(a){this.H=a};
g.h.getAdState=function(){return this.H};
g.h.RK=function(){return this.loaded?this.C.suggestion:null};
g.h.Yf=function(){return this.o?U7(this.o).Yf:!1};
g.h.hasNext=function(){return this.o?U7(this.o).hasNext:!1};
g.h.Ke=function(a,b){this.J=a||0;this.player.V("progresssync",a,b)};
g.h.getCurrentTime=function(){return this.J};
g.h.getProgressState=function(){var a=U7(this.o),b=this.player.getVideoData();return{allowSeeking:g.Y(this.player).experiments.o("web_player_mdx_allow_seeking_change_killswitch")?this.player.Pc():!a.isAdPlaying()&&this.player.Pc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+N7(a):a.B,isPeggedToLive:1>=(a.D?a.A+N7(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+N7(a):a.A,seekableStart:0<a.C?a.C+
N7(a):a.C}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.Hq=function(){this.o&&this.o.Hq()};
g.h.CQ=function(a){1==a&&(this.G=this.o?U7(this.o):null)};
g.h.oT=function(){var a=w8()?new T7(r8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.G=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.tf(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.G)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,P7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.OE=function(){this.F=[this.A].concat(KFa());var a=s8()||this.A;H8(this,a);this.player.Ba("onMdxReceiversChange")};
g.h.mT=function(){var a=s8();H8(this,a)};
g.h.lT=function(){this.B=s8()};
g.h.Kc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?J7():H8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&J7(),!0):!1}};
g.h.Rx=function(){this.o.Rx()};
g.h.uc=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.RZ.remote=G8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 12:46:04 Jan 29, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:36:41 Nov 19, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 4018.501
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.112
  RedisCDXSource: 1.956
  esindex: 0.011
  LoadShardBlock: 3985.336 (3)
  PetaboxLoader3.datanode: 301.241 (4)
  CDXLines.iter: 27.718 (3)
  PetaboxLoader3.resolve: 3528.369 (2)
  load_resource: 272.6
*/