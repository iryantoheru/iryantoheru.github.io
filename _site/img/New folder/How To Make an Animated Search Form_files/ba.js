var _w=window,BAP=(BAP&&BAP.start?BAP:!1)||function(){function Y(a){var f,c,d={};try{if(h._bab){f=h._bab;h._bab=y;for(c=0;c<f[r];c++)Y(f[c])}}catch(e){}if(a){if(a.uqid){if(f=a.uqid,b[f])return}else return;try{for(c in a)a.hasOwnProperty(c)&&(d[c.toLowerCase()]=a[c]);a=d}catch(l){}if(a.ad_oas)try{a.ad_oas=a.ad_oas.toLowerCase(),a.ad_wxh=a.ad_oas.replace("width=","").replace("height=","").replace(" ","x")}catch(k){}if(a.ad_wxh)try{a.ad_wxh=a.ad_wxh.toLowerCase(),a.ad_w=a.ad_w||a.ad_wxh.split("x")[0],
a.ad_h=a.ad_h||a.ad_wxh.split("x")[1]}catch(g){}if(!a.ad_w||!a.ad_h){K(a,13);return}if(!p(a.ad_w)||!p(a.ad_h)){K(a,15);return}if(15>a.ad_h&&20>a.ad_w){K(a,14);return}if(!a.coid){K(a,9);return}a.pixel_ad_w=a.ad_w;a.pixel_ad_h=a.ad_h;a.nid=a.nid.toString().match(/\d/g).join("");a.ecaid&&(a.ecaid=a.ecaid.split("%")[0]);z[f]=a.nid;d="n/"+a.coid+"/"+a.nid;b[f]=a;if(!sa&&(a.check_container&&"true"==a.check_container||/^(1525|4501|7420|8573)$/.test(a.nid)))c=t.createElement("script"),c.src=B+"/a/e.js",n.appendChild(c);
d?R[a.nid]||(S++,c=t.createElement("script"),c.src=Ra+d+".js",n.appendChild(c)):(delete b[f],K(a,11));try{m("bap-pixel-"+f).style.display="none"}catch(gb){}}else K(y,10);546==a.nid&&(a.delay_start=1);Z?Z&&T&&(T=!1,N()):(c=function(){Z=!0;a.delay_start?C(N,1E3*a.delay_start):N()},"complete"===t.readyState?c():U(window,"load",c),$&&clearTimeout($),$=C(N,5E3))}function D(a){try{delete b[a];var f=m("bap-pixel-"+a);f&&f.parentNode.removeChild(f);(f=m("trigger-container-"+a))&&f.parentNode.removeChild(f)}catch(c){}}
function N(){function a(a,c,f){for(f in h.bap_overrides[c])b[a].hasOwnProperty(f)&&(b[a][f]=h.bap_overrides[c][f])}if(0!=S)C(function(){S=0;N()},500);else if(!T){T=!0;h.bap_skip&&(H=H.concat(bap_skip));var f=[],c,d,e=!1;aa=!(!m("abgc")||!h.abgp);try{Sa();ta("COMMON");for(pageId in b)f.push([pageId,b[pageId].order]);f.sort(function(a,b){return a[1]-b[1]});for(d=0;d<f[r];d++)if(pageId=f[d][0],!b[pageId].processed)if(R[b[pageId].nid]){Ta(pageId,b[pageId].nid);for(c=0;c<H[r];c++){if(H[c]==b[pageId].nid||
H[c]==b[pageId].nid+"|"+pageId||H[c]=="size|"+b[pageId].ad_w+"x"+b[pageId].ad_h){D(pageId);e=!0;break}e=!1}if(!e)if(h.bap_546_h&&546==b[pageId].nid)D(pageId);else{h.bap_amzn&&(b[pageId].amzn=1);h.bap_overrides&&h.bap_overrides.hasOwnProperty(b[pageId].nid)&&a(pageId,b[pageId].nid);h.bap_overrides&&h.bap_overrides.hasOwnProperty(b[pageId].nid+"|"+pageId)&&a(pageId,b[pageId].nid+"|"+pageId);aa&&(b[pageId].position="top-right",b[pageId].icon_display="expandable",b[pageId].server={name:"Google"},b[pageId].ad_z=
9011,m("abgc").style.display="none");Ua(pageId);for(c=0;c<H[r];c++){if(H[c]=="size|"+b[pageId].ad_w+"x"+b[pageId].ad_h){D(pageId);e=!0;break}e=!1}e||(b[pageId].mini=728<=b[pageId].ad_w&&990>=b[pageId].ad_w&&90<=b[pageId].ad_h&&125>=b[pageId].ad_h||160==b[pageId].ad_w&&600==b[pageId].ad_h?!1:190>b[pageId].ad_w||145>b[pageId].ad_h,90>b[pageId].ad_w&&(b[pageId].icon_display="icon"),b[pageId].adi&&!Va(pageId)?D(pageId):b[pageId].ad&&"none"==b[pageId].ad.style.display?D(pageId):8==b[pageId].dm&&!b[pageId].ad.ds?
D(pageId):(Wa(pageId),b[pageId].noticeExists?D(pageId):(Xa(pageId),b[pageId].processed=!0)))}}else K(b[pageId],12),D(pageId)}catch(l){}E.vs=v()[0]<n.scrollHeight;ba=v()[1];U(window,"resize",Ya);Za(function(){$a();var a=h.__MicrosoftAdvertising,c,f;if(a&&a.Ad)for(f in b)if(b.hasOwnProperty(f)&&!b[f]._ms&&(c=a.Ad.getByPlacementId(b[f].atl_id)||a.Ad.get(b[f].ad)))c.removePlugin("AdChoices"),b[f]._ms=!0;ca()});U(window,"scroll",ab);V=!0}}function Va(a){var f,c,d,e,l,k=b[a].adi.split(",");try{if(5==b[a].dm)for(d in k){if(0<
t.location.href.indexOf("/"+k[d]+"/")){c=!0;break}}else for(f=b[a].ad.parentNode;;){for(e=0;e<f.children[r];e++)if(l=f.children[e],l.src)for(d in k)if(0<l.src.indexOf("/"+k[d]+"/")){c=!0;break}if(c)break;f=f.parentNode;if(!f||!f.children)break}}catch(g){}return c}function Ta(a,f){try{var c=R[f].data;b[a].advName=c.adv_name||y;b[a].advMessage=c.adv_msg||y;b[a].advLogo=c.adv_logo.replace("http:","").replace("https:","")||y;b[a].advLink=c.adv_link||y;b[a].rev=c.revision||0;b[a].behavioral=c.behavioral||
"definitive";b[a].behavioralCustomMessage=c.generic_text||"";c.hide_wi&&(b[a].hideWhatIs=!0);c.hide_cl&&(b[a].hideCustom=!0);b[a].defTrans={};c.default_generic1&&(b[a].defTrans.generic1=c.default_generic1);c.default_generic2&&(b[a].defTrans.generic2=c.default_generic2);c.default_generic3&&(b[a].defTrans.generic3=c.default_generic3);c.default_generic4&&(b[a].defTrans.generic4=c.default_generic4);c.default_generic5&&(b[a].defTrans.generic5=c.default_generic5);c.default_generic6&&(b[a].defTrans.generic6=
c.default_generic6);c.default_link1&&(b[a].defTrans.link1=c.default_link1);c.default_link2&&(b[a].defTrans.link2=c.default_link2);c.default_link2&&(b[a].defTrans.link3=c.default_link3);c.default_footer&&(b[a].defTrans.footer=c.default_footer);b[a].skipL2=c.skip_L2||970==b[a].ad_w&&66==b[a].ad_h;var d=c.message_properties||"";d["behavioral_"+s]&&(b[a].behavioral=d["behavioral_"+s]);d["behavioral_"+s]&&(b[a].noDefault=!0);c.default_icon&&!b[a].noDefault&&(b[a].cicon=c.default_icon);d["generic_text_"+
s]&&(b[a].behavioralCustomMessage=d["generic_text_"+s]);d["adv_name_"+s]&&(b[a].advName=d["adv_name_"+s]);d["adv_msg_"+s]&&(b[a].advMessage=d["adv_msg_"+s]);d["adv_logo_"+s]&&(b[a].advLogo=d["adv_logo_"+s].replace("http:","").replace("https:",""));d["adv_link_"+s]&&(b[a].advLink=d["adv_link_"+s]);d["translation_"+s]&&(b[a].translation=d["translation_"+s]);d["translation_"+s]&&(b[a].cicon=d["translation_"+s].icon);d.hasOwnProperty("skip_L2_"+s)&&(b[a].skipL2=d["skip_L2_"+s]);b[a].icon_delay=c.icon_delay||
0;b[a].icon_display=c.icon_display||"normal";b[a].icon_display=c.icon_expandable?"expandable":b[a].icon_display;b[a].icon_grayscale=c.icon_grayscale||100;b[a].container_opacity=c.container_opacity||100;b[a].offsetTop=c.offset_y?!isNaN(p(c.offset_y))?p(c.offset_y):0:0;b[a].offsetLeft=c.offset_x?!isNaN(p(c.offset_x))?p(c.offset_x):0:0;try{b[a].server=c.server[0]}catch(e){b[a].server={id:0,name:"Evidon"}}b[a].position||(b[a].position=c.icon_position||"top-right");b[a].icon||(b[a].icon=c.generic_icon?
"g":"d");b[a].positionVertical=function(){return 0<=this.position.indexOf("top")?"top":"bottom"};b[a].positionHorizontal=function(){return 0<=this.position.indexOf("left")?"left":"right"};z[a]||(z[a]=b[a].nid=c.nid||y);b[a].ad_h=p(b[a].ad_h);b[a].ad_w=p(b[a].ad_w);b[a].dm=-1;A[a]={};b[a].ciconWidth=77;if("_nl"==b[a].cicon||!b[a].cicon&&"nl"==s)b[a].ciconWidth=47;if(/_(de|es|nl_be|si|mt|lt|gr|ee|is|bg|tr|il|ar|ar_eg|hr|rs)$/.test(b[a].cicon)||!b[a].cicon&&/de|es|be|si|mt|lt|gr|cy|ee|is|bg|tr|il|sa|eg|hr|rs/.test(s))b[a].ciconWidth=
107;322==b[a].coid&&/row|ru|cn|il|mx|tr|eg|sa|br|ar|tw|kr|jp/.test(s)&&(b[a].icon_display="expandable",b[a].icon_grayscale="",b[a].ciconWidth=107,b[a].cicon="g",W="gi")}catch(l){}}function ua(a){try{R[a.data.nid]=a,S--}catch(b){}}function ab(){try{ca(),C(ca,100)}catch(a){}}function Za(a){var b=0,c=function(){try{0===b?(b++,C(c,200)):(a(),100>b?(b++,C(c,100)):115>b&&(b++,C(c,5E3)))}catch(d){}};return c()}function $a(){function a(a){for(var c in a)for(var f in b)if(b[f].ad==a[c]){D(f);return}}var f=
h.truste;try{a(f.ca.contMap)}catch(c){}try{a(f.ca2.contMap)}catch(d){}}function ca(){var a,f,c,d;for(d in b){a=b[d];if(5==a.dm)break;else c=6==a.dm?a.px:a.ad;f=c;if(!b[d].hidden&&!b[d].detached&&f)for(;;){f=f.parentNode;if(f==n)break;if(!f){b[d].detached=!0;break}}else{f=va(b[d].proximityId,b[d].ad_w,b[d].ad_h);if(f=wa(f,b[d].ad_h,b[d].ad_w))b[d].ad=f;b[d].detached=!1}6!=a.dm&&(0===c.offsetWidth&&0===c.offsetHeight||"none"==u(c,"display"))?b[d].hidden=!0:b[d].hidden=!1;if(b[d].detached||b[d].hidden)da(d),
m("trigger-container-"+d).style.display="none";else{m("trigger-container-"+d).style.display="";try{var e=F(c);if(e.top!=a.pxt||e.left!=a.pxl)da(d),ea(d),fa(d)}catch(l){}}}}function Ya(){try{var a,f=v()[1]-ba,c=v()[0]<n.scrollHeight,d=E.vs!=c;if(0!==f||d){for(a in b)b[a].ad&&(b[a].ad_w=p(b[a].ad.style.width||b[a].ad.width||b[a].ad.offsetWidth),b[a].ad_h=p(b[a].ad.style.height||b[a].ad.height||b[a].ad.offsetHeight)),ea(a),fa(a),m("bap-notice-"+a)&&(da(a),xa(a));ba=v()[1]}E.vs=c}catch(e){}}function ya(a){return[L(a.aid||
0),L(a.icaid||0),L(a.ecaid||0).replace(/_/g,"$underscore$").replace(/%2F/g,"$fs$"),L(a.nid||0)].join("_")+"/"}function za(a,b,c){Aa("//l.betrad.com/ct/"+ya(a)+[s,b,a.pixel_ad_w,a.pixel_ad_h,242,a.coid,a.rev].join("/")+"/pixel.gif?v="+Ba+"_"+Ca+"&ttid="+bb+"&d="+O+c+"&r="+Math.random())}function Aa(a){var b=new Image(0,0);b.src=a;b.style.display="none";n.appendChild(b)}function J(a,f){var c,d,e="",l=Da[a],k=!1;l||(l={I:[0,"0/1/0/0/0/0"],S:[0,"0/0/1/0/0/0"],A:[0,"0/0/0/1/0/0"],B:[0,"0/0/0/0/1/0"],M:[0,
"0/0/0/0/0/1"],O:[0,"0/1/0/0/0/0"]});0===l[f][0]&&(l[f][0]=1,c=l[f][1],k=!0);"O"==f&&(e="&o=1");Da[a]=l;if(k&&(za(b[a],c,e),!b[a].noticeExists&&A[a]&&("B"==f||"M"==f)))for(d in e="&o=1",A[a])za(A[a][d],c,e)}function K(a,b){var c=ya(a);Ea[c]!=b&&(Ea[c]=b,c&&Aa("//l.betrad.com/ct/"+c+"pixel.gif?e="+b+"&v="+Ba+"_"+Ca+"&d="+O+"&r="+Math.random()))}function Fa(a){if(!b[a].expanded){var f="g"==b[a].icon?"/icong":"/icon",c=B+f+"/c_"+b[a].icon_grayscale+(b[a].cicon?b[a].cicon:Ga)+".png",d=m("trigger-"+a),
e=F(d).left;"right"==b[a].positionHorizontal()&&(e=e+19-b[a].ciconWidth);d.style.left=e+"px";d.innerHTML='<img src="'+c+'">';m("trigger-box-"+a).style.left=e+"px";m("trigger-box-"+a).style.width=b[a].ciconWidth+"px";m("trigger-box-image-"+a).src=B+f+"/box_"+b[a].ciconWidth+"_"+b[a].position+".png";b[a].expanded=!0;C(function(){d.onmouseover=y;d.onmouseout=function(){Ha(a)}},1)}}function Ha(a){if(b[a].expanded){var f="g"==b[a].icon?"/icong":"/icon",c=B+f+"/"+W+".png",d=m("trigger-"+a),e=F(d).left;
"right"==b[a].positionHorizontal()&&(e=e+b[a].ciconWidth-19);d.style.left=e+"px";d.innerHTML='<img src="'+c+'">';m("trigger-box-"+a).style.left=e+"px";m("trigger-box-"+a).style.width="19px";m("trigger-box-image-"+a).src=B+f+"/box_19_"+b[a].position+".png";b[a].expanded=!1;C(function(){d.onmouseover=function(){Fa(a)};d.onmouseout=y},1)}}function ga(a){try{var b=a.height,c=a.width;b||(b=p(u(a,"height")));c||(c=p(u(a,"width")));b||(b=a.offsetHeight);c||(c=a.offsetWidth);return[c,b]}catch(d){}return!1}
function ha(a,b,c){try{var d=ga(a)[1],e=ga(a)[0];if(d===b&&e===c||d<=b+5&&d>=b-5&&e>=c-5&&e<=c+5)return!0}catch(l){}return!1}function P(a){if(w.Safari&&0>w.SafariVersion.indexOf("5.1"))return a;var b,c,d,e;try{if("object"===a.nodeName.toLowerCase())for(d=a.childNodes[r]-1;0<d;d--){e=a.childNodes[d];if("embed"===e.nodeName.toLowerCase()){b=e;break}"object"===e.nodeName.toLowerCase()&&"application/x-shockwave-flash"===e.type&&(c=e)}!b&&c&&(b=c);if(w.Gecko&&b)return b;if(0===b.offsetHeight&&0===b.offsetWidth)return a;
if(w.Chrome&&b||0!==F(b).top)a=b}catch(l){}return a}function Ia(a,b,c,d){try{return 15==d||!a?!1:Ja(a)&&ha(a,b,c)?a:Ia(a.previousSibling,b,c,++d)}catch(e){return!1}}function Ja(a){return/DIV|IMG|EMBED|OBJECT|IFRAME|CANVAS|VIDEO|svg|ARTICLE|MAIN|ASIDE|FIGURE|NAV|SECTION/.test(a.nodeName)}function M(a,b,c){try{if(a){var d=a.children||a.childNodes,e,l;if(0===d[r])return!1;for(l=0;l<d[r];l++)if(ia(d[l])){if(ha(d[l],b,c))return d[l];if(e=M(d[l],b,c))return e}}else return!1}catch(k){return!1}}function wa(a,
b,c){for(var d=a;;)if(d=M(d,b,c))if("EMBED"==d.nodeName)if("OBJECT"==d.parentNode.nodeName){a=P(d.parentNode);break}else a=d;else"OBJECT"==d.nodeName&&(ad2=P(d)),a=d;else break;return a}function da(a){try{var b=m("bap-notice-"+a);b&&(b.style.display="none")}catch(c){}}function Ka(a){a.id||(a=m("bap-notice-"+a));"none"!=u(a,"display")?a.style.display="none":a.style.display="block"}function ja(a,f){var c=[],d;b[a][f]&&c.push(f+"["+z[a]+"]="+L(b[a][f]));if(A[a])for(d in A[a]){var e=A[a][d];e[f]&&c.push(f+
"["+d+"]="+L(e[f]))}return c.join("&")}function La(a){var b,c,d=[],e=Ma+"more_info/"+z[a];for(c in A[a])e+=","+c;(b=ja(a,"cps"))&&d.push(b);(b=ja(a,"seg"))&&d.push(b);(b=ja(a,"ecaid"))&&d.push(b);aa&&d.push("gdn=1");0<d[r]&&(e+="?"+d.join("&"));return e}function ka(a,b){m(a).href=b}function ta(a){var b;a&&!m("bass-"+a)&&E["CSS_"+a]&&(w.IE?(b=t.createStyleSheet(""),b.cssText=E["CSS_"+a]):(b=t.createElement("style"),b.setAttribute("id","bass-"+a),b.setAttribute("type","text/css"),b.innerHTML=E["CSS_"+
a],n.appendChild(b)))}function m(){var a,b=[];for(a=0;a<arguments[r];a++){var c=arguments[a];"string"==typeof c&&(c=t.getElementById(c));if(1==arguments[r])return c;b.push(c)}return b}function U(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent?a.attachEvent(b,c):a[b]=c)}function v(){var a=-1,b=-1,c=h.innerWidth,d=t.documentElement;try{"number"==typeof c?(a=c,b=h.innerHeight):d&&d.clientWidth?(a=d.clientWidth,b=d.clientHeight):n&&n.clientWidth&&(a=n.clientWidth,b=n.clientHeight)}catch(e){}return[b,
a]}function u(a,b){try{var c;a.currentStyle?c=a.currentStyle[b]:h.getComputedStyle&&(c=t.defaultView.getComputedStyle(a,y).getPropertyValue(b));if(!c&&"text-align"===b)try{c=a.currentStyle.textAlign}catch(d){}return c}catch(e){return y}}function Na(a){var b=w.IE?"zIndex":"z-index",c=y;if(a)return"auto"==u(a,b)?c=Na(a.parentNode):0<p(u(a,b))&&(c=u(a,b)),p(c)+10}function cb(a,b){var c,d=y,e=t.getElementsByTagName("img");for(c=0;c<e[r];c++)if(e[c].height||e[c].getAttribute("height"))if(e[c].width||e[c].getAttribute("width"))e[c].height==
b&&e[c].width==a?d=e[c]:p(e[c].getAttribute("height"))==b&&p(e[c].getAttribute("width"))==a&&(d=e[c]);return d}function ia(a){return 0===a.offsetWidth&&0===a.offsetHeight||"none"==u(a,"display")||!a.height&&!a.getAttribute("height")&&!u(a,"height")||!a.width&&!a.getAttribute("width")&&!u(a,"width")?!1:!0}function va(a,b,c,d){var e,l,k,g,h,q,m=y,n={},s,w=t.getElementsByTagName("*");for(e=0;e<w[r];e++)if(Ja(w[e])&&(g=w[e],!("EMBED"==g.nodeName&&"OBJECT"==g.parentNode.nodeName)&&ia(g)))if(g.height==
c&&g.width==b||p(g.getAttribute("height"))==c&&p(g.getAttribute("width"))==b)n[e]=g;else try{l=p(u(g,"width").replace("px","")),k=p(u(g,"height").replace("px","")),k==c&&l==b&&(n[e]=g)}catch(z){}for(h in n){b=Math.abs(a-h);if(!s||b<s)s=b,m=n[h];d&&d.parentNode==n[h].parentNode&&(q={d:b,cm:n[h]})}q&&5>Math.abs(s-q.d)&&(m=q.cm);try{m&&"OBJECT"==m.nodeName&&(m=P(m))}catch(x){}return m}function db(a){J(a,"I");0<b[a].icon_delay&&(m("trigger-container-"+a).style.display="none",C(function(){try{m("trigger-container-"+
a).style.display="block"}catch(b){}},1E3*p(b[a].icon_delay)))}function fa(a){var f=m("trigger-"+a),c=m("trigger-box-"+a);f.style.top=b[a].posTop+"px";f.style.left=b[a].posLeft+"px";c.style.top=b[a].posTop+"px";c.style.left=b[a].posLeft+"px"}function ea(a){var f,c,d,e,l,k,g=b[a].ad,h=b[a].ad_h,m=b[a].ad_w;if(5==b[a].dm)d=l=k=e=0;else if(/^(1|2|3|4|4.1|4.2|7|8|9)$/.test(b[a].dm))d=F(g).left,e=F(g).top,l=d,k=e;else if(6==b[a].dm){g=b[a].px;d=F(g).left;e=F(g).top;w.Opera&&(g.width=g.height="1",e=F(g).top,
g.width=g.height="0");l=d-m-4;k=e-h;try{if((f=g.parentNode.width)||(f=p(u(g.parentNode,"width"))),f===m||f<=m)l+=m,0<=u(g,"text-align").toLowerCase().indexOf("center")?(l-=m/2,w.IE&&(k-=4)):0<=u(g,"text-align").toLowerCase().indexOf("right")&&(l-=m,w.IE&&(k-=4))}catch(r){}}try{"relative"==u(n,"position")&&(c=n.getBoundingClientRect(),l-=c.left)}catch(t){}f=k;c=l;"top-right"==b[a].position?c+=m:"bottom-right"==b[a].position?(f+=h-14,c+=m):"bottom-left"==b[a].position&&(f+=h-14);f+=b[a].offsetTop;c+=
b[a].offsetLeft;f+="top"==b[a].positionVertical()?0:-1;"expandable"==b[a].icon_display||"icon"==b[a].icon_display&&b[a].mini?"right"==b[a].positionHorizontal()&&(c-=19):"right"==b[a].positionHorizontal()&&(c-=b[a].ciconWidth);b[a].pxl=d;b[a].pxt=e;b[a].posTop=f;b[a].posLeft=c;b[a].spotTop=k;b[a].spotLeft=l}function Ua(a){function f(a){if(a){if(a.src)return a.src;a=a.children||a.childNodes;var b;if(0===a[r])return!1;for(b=0;b<a[r];b++){var c=f(a[b]);if(c)return c}}return!1}var c,d,e,l=b[a].ad_h,k=
b[a].ad_w,g=m("bap-pixel-"+a),h=t.getElementsByTagName("*");for(e=0;e<h[r];e++)g==h[e]&&(b[a].proximityId=e);if(Oa&&v()[0]==l&&v()[1]==k)e=5;else if(0<O.indexOf("mail.yahoo.com")&&1==t.getElementsByTagName("object")[r]&&w.IE)c=t.getElementsByTagName("object")[0],e=4.1;else if(b[a].container&&(c=m(b[a].container))||"true"==b[a].check_container&&(c=g.parentNode))e=8,"true"==b[a].check_container?Oa&&0!=(d=Pa(v()[0],v()[1]))?(b[a].ad_h=v()[0],b[a].ad_w=v()[1],b[a].pixel_ad_w=b[a].ad_w,b[a].pixel_ad_h=
b[a].ad_h,b[a].ns=d,c=y,e=5):(c=M(c,l,k)||c,c=la(c,a)):(e=9,c=P(M(c,l,k))||c);else if(c=Ia(g.previousSibling,l,k,1))e=3;else if(0<O.indexOf("yahoo.com")&&(c=cb(k,l)))e=4.2;else if(c=va(b[a].proximityId,k,l,g))e=7;else{e=6;try{m("bap-pixel-"+a).style.display=""}catch(q){}}if(5!=e&&/^(1525|4501|7420|8573)$/.test(b[a].nid))try{c=M(g.parentNode,l,k)||c,c=la(c,a),3!=e&&(e=4)}catch(n){}if(3==e||7==e)c=wa(c,l,k);0<=O.indexOf("l.yimg.com")&&w.Chrome&&(e=6);b[a].dm=e;b[a].ad=c;b[a].px=g;d=f(c);b[a].ad_src=
!d?"undefined":/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i.exec(d)[1];try{b[a].ad_z=b[a].ad_z||Na(c)}catch(p){}5===e&&(b[a].ad_z=1E5);6!=e&&g.parentNode.removeChild(g)}function Wa(a){var f=b[a].ad;if(f&&!f.notice)f.notice=a;else if(f&&f.notice!=a)b[a].noticeExists=!0,z[f.notice]!=z[a]&&ma(f.notice,a);else if(5==b[a].dm)if(h.notice)b[a].noticeExists=!0,z[h.notice]!=z[a]&&ma(h.notice,a);else try{h.notice=a,b[a].ad={nodeName:"EXACT-FRAME"},h.bap_frameid?I("BAPFRAME|"+z[a]+"|"+h.bap_frameid):h.parent!=h.top?
h.top.postMessage("BAPFRAMEBROADCAST|"+z[a]+"|"+(t.referrer?t.referrer:"")+"|"+b[a].ad_w+"|"+b[a].ad_h,"*"):h.top.postMessage("BAPFRAMEID|"+z[a]+"|"+t.location.href,"*")}catch(c){}if(b[a].ad&&!b[a].noticeExists&&("IFRAME"==b[a].ad.nodeName&&b[a].ad.src in X||"EXACT-FRAME"==b[a].ad.nodeName&&X.contents))b[a].noticeExists=!0;if(b[a].noticeExists)J(a,"I"),J(a,"O");else{ea(a);var d,e,l="",k="",g=m("BAP-holder"),r="BAP.action('"+a+"', 'S'); BAP.createL2('"+a+"');",q="g"==b[a].icon?"/icong":"/icon";g||
(g=t.createElement("div"),g.setAttribute("id","BAP-holder"),n.appendChild(g));try{e=p(b[a].container_opacity)/100}catch(s){e=1}e=1>e?"opacity:"+e+";-moz-opacity:"+e+";-ms-filter:DXImageTransform.Microsoft.Alpha(Opacity="+100*e+");filter:alpha(opacity="+100*e+");":"";"expandable"==b[a].icon_display?(f='<img src="'+B+q+"/"+W+'.png">',d=19,k=' onmouseover="BAP.expandIcon('+a+')" '):"icon"==b[a].icon_display&&b[a].mini?(f='<img src="'+B+q+"/"+W+'.png">',d=19):(d=b[a].ciconWidth,f='<img src="'+B+q+"/c_"+
b[a].icon_grayscale+(b[a].cicon?b[a].cicon:Ga)+'.png">');if(b[a].mini||b[a].skipL2)r="BAP.action('"+a+"', 'S'); BAP.action('"+a+"', 'M'); _w.open(BAP.moreInfoHref("+a+"), '_newtab');";b[a].ad_z&&(l="z-index:"+p(b[a].ad_z)+";");b[a].amzn&&(r="BAP.action('"+a+"', 'S'); _w.open('http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,e,"+b[a].coid+","+b[a].nid+"', '_newtab');");f='<div id="trigger-container-'+a+'" style="position: static !important;"><span id="trigger-box-'+a+'" class="bap-trigger" style="'+
l+"position:absolute;"+e+"width:"+d+'px;height:15px;"><img id="trigger-box-image-'+a+'" src="'+B+q+"/box_"+d+"_"+b[a].position+'.png"></span>'+('<span id="trigger-'+a+'" style="'+l+'position:absolute;" class="bap-trigger" onclick="'+r+'"'+k+">"+f+"</span>")+"</div>";g.innerHTML+=f;fa(a);db(a)}}function ma(a,f,c){var d=c?f:z[f];if(z[a]!=d){if(A[a])for(var e in A[a])if(e==d)return;A[a][d]=c||b[f]}}function na(a,b){return"BAPACCEPT|"+b+"|"+a.nid+"|"+(a.aid||0)+"|"+(a.icaid||0)+"|"+(a.ecaid||0)+"|"+a.coid+
"|"+a.ad_w+"|"+a.ad_h+"|"+a.rev+"|"+(a.cps||"-")+"|"+(a.seg||"-")}function Q(a,b,c){I(na(a,b),c)}function I(a,b){var c;c=b?b.postMessage?b:b.contentWindow:h.parent;c.postMessage&&c.postMessage(a,"*")}function Sa(){for(var a=t.getElementsByTagName("iframe"),b=0;b<a[r];b++)oa[b]=a[b],I("BAPTANGO?|"+b,a[b])}function Qa(){if(V&&0<G[r]){var a,b=[];for(a=0;a<G[r];a++)0<=G[a].indexOf("BAPFRAMEBROADCAST")&&b.push(G[a]);for(;0<G[r];)a=G.pop(),0<=a.indexOf("BAPFRAMEBROADCAST")||b.push(a);for(;0<G[r];)b.push(G.pop());
for(;0<b[r];)pa(b.pop())}else!V&&0<G[r]&&C(Qa,1E3)}function pa(a){try{var f,c,d,e,l,k,g,n,q=a;a.data&&(q=a.data);if(0===q.indexOf("BAP"))if(V){var p=q.substring(0,q.indexOf("|")||q[r]);if("BAPFRAMEBROADCAST"==p){if(h.top==window){d=q.split("|");e=d[1];var s=d[2],y=d[3],u=d[4];for(g in b)if((k=b[g].ad)&&("IFRAME"==k.nodeName&&b[g].ad_h==u&&b[g].ad_w==y)&&(s==k.src||w.IE&&0<s.indexOf(k.src))){Q(b[g],e,a.source);w.IE||J(g,"O");m("trigger-"+g)&&m("BAP-holder").removeChild(m("trigger-container-"+g));delete b[g];
break}}}else if("BAPFRAMEID"==p){d=q.split("|");e=d[1];var x=d[2];n=t.getElementsByTagName("iframe");for(c=0;c<n[r];c++)n[c].src&&n[c].src==x&&(oa[c]=n[c],I("BAPTANGO?|"+c,n[c]))}else if("BAPTANGO?"==p){var v=q.substring(q.indexOf("|")+1);h.bap_frameid=v;I("BAPLETSDANCE|"+v);h.notice&&I("BAPFRAME|"+z[h.notice]+"|"+v)}else if("BAPLETSDANCE"==p)f=q.substring(q.indexOf("|")+1),oa[f].tango=f;else if("BAPFRAME"==p){d=q.split("|");e=d[1];var B=d[2];X[D]=e;X.contents=!0;for(g in b)if((k=b[g].ad)&&"IFRAME"==
k.nodeName&&k.tango==B&&!b[g].noticeExists||"EXACT-FRAME"==k.nodeName){d="";if("EXACT-FRAME"==k.nodeName){n=t.getElementsByTagName("iframe");for(c=0;c<n[r];c++)Q(b[g],e,n[c]),h.passFrame=n[c]}else Q(b[g],e,k),d=k;h.passNid=e;for(l in A[g])Q(A[g][l],e,d||h.passFrame);J(g,"O");m("trigger-"+g)&&m("BAP-holder").removeChild(m("trigger-container-"+g));delete b[g];break}}else if("BAPFLASH"==p){d=q.substring(q.indexOf("|")+1);e=d.substring(0,d.indexOf("|"));var D=d.substring(d.indexOf("|")+1);for(g in b)if(k=
b[g].ad,f=k.src||k.data||k.movie||"",k&&("OBJECT"==k.nodeName||"EMBED"==k.nodeName)&&f==D&&!b[g].noticeExists||"EXACT-FRAME"==k.nodeName){try{k.flashGetMessage(na(b[g],e))}catch(E){}h.passFrame=k;h.passNid=e;for(l in A[g])try{k.flashGetMessage(na(b[g],e))}catch(F){}J(g,"O");m("trigger-"+g)&&m("BAP-holder").removeChild(m("trigger-container-"+g));delete b[g]}}else if("BAPACCEPT"==p){d=q.split("|");c={};var eb=d[1];c.nid=d[2];c.aid=d[3];c.icaid=d[4];c.ecaid=d[5];c.coid=d[6];c.ad_w=d[7];o.pixel_ad_w=
d[7];o.pixel_ad_h=d[8];c.ad_h=d[8];c.rev=d[9];d[10]&&"-"!==d[10]&&(c.cps=d[10]);d[12]&&"-"!==d[11]&&(c.seg=d[11]);0===c.ecaid&&delete c.ecaid;if(h.passFrame)Q(c,h.passNid,h.passFrame);else for(g in b)e=z[g],eb==e&&ma(g,c.nid,c)}else if("BAPPING"==p)d="",h.notice?(d="BAPPONG|"+b[h.notice].position,I(d)):h.passFrame&&I("BAPPING|",h.passFrame);else if("BAPPONG"==p)I(q);else if("BAPAMZN"==p)for(g in h.bap_amzn=!0,b)m("trigger-"+g).onclick=function(){J(g,"S");h.open("http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,e,"+
b[g].coid+","+b[g].nid,"_newtab")}}else G.push(q),C(Qa,1E3)}catch(H){}}function xa(a){var f=m("bap-notice-"+a),c;if("right"==b[a].positionHorizontal())try{c=b[a].spotLeft+b[a].ad_w-b[a].popupWidth,f.style.left=(c||0)+"px"}catch(d){}else f.style.left=(b[a].spotLeft||0)+"px";"top"==b[a].positionVertical()?f.style.top=b[a].posTop+"px":(c=p(f.style.height)||b[a].popupHeight,f.style.top=(0<b[a].spotTop+b[a].ad_h-c?b[a].spotTop+b[a].ad_h-c:0)+"px");w.QuirksMode&&(b[a].popupWidth&&"none"!=f.style.display)&&
(f.style.display="block",f.style.width=b[a].popupWidth+(728==b[a].popupWidth?4:0)+"px",f.style.margin="0 0");c=b[a].advLogo;m("bap-logo-"+a)&&(c&&"none"!=f.style.display&&!m("bap-logo-"+a).src)&&(m("bap-logo-"+a).src=c)}function Xa(a){function f(a){try{a.generic1&&(A=a.generic1,B=a.generic2,C=a.generic3,D=a.generic4,E=a.generic5,sg6=a.generic6,s=a.link1,u=a.link2,x=a.link3,v=a.footer,v=v.replace("Evidon","Ghostery, Inc"))}catch(b){}}if(!b[a].skipL2){var c="",d=y,e=b[a].ad_w,l=b[a].ad_h,k="",g="",
h=m("BAP-holder"),q="",r="",s="",u="?",x="",v="&#153;",A="",B="",C="",D="",E="";sg6="";b[a].noDefault||f(b[a].defTrans);f(b[a].translation);v='<span class="bap-gray">'+v+"</span>";"definitive"==b[a].behavioral?(k=A,b[a].advName&&(k+="<br><br>"+b[a].server.name+" "+C+" "+b[a].advName+" "+D)):"single"==b[a].behavioral?(k=B,b[a].advName&&(k+="<br><br>"+b[a].advName+" "+sg6)):"uncertain"==b[a].behavioral?(k=B,b[a].advName&&(k+="<br><br>"+b[a].server.name+" "+C+" "+b[a].advName+" "+E)):"custom"==b[a].behavioral&&
(k=b[a].behavioralCustomMessage);b[a].ad_z&&(g="z-index:"+(p(b[a].ad_z)+1)+";");d=190<=e&&300>e&&145<=l&&250>l?5:300<=e&&250<=l?1:5;160==e&&600==l&&(d=2);728<=e&&990>=e&&(90<=l&&125>=l)&&(d=6);if(1==d)q=w.QuirksMode?' style="width:294px !important"':"",r=w.QuirksMode?"width:296px !important;":"width:auto !important;max-width:299px;min-width:276px;",c='<div id="bap-notice-'+a+'" class="bap1 bap-notice" style="'+r+";display:none;"+g+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle('+
a+');return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+"</div><p>"+k+'</p><div class="bap-link-div"'+q+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+
s+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+q+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+u+" &raquo;</a></div>"),b[a].hideCustom||(b[a].advLink&&b[a].advMessage?c+='<div class="bap-link-div"'+q+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div"'+
q+">"+b[a].advMessage+"</div>")),c+='<div class="bap-link-div"'+q+">"+v+"</div></div></div>";else if(2==d)c='<div id="bap-notice-'+a+'" class="bap2 bap-notice" style="width:156px;display:none;'+g+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+
a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+"</div><p>"+k+'</p><div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+s+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+u+" &raquo;</a></div>"),
b[a].hideCustom||(b[a].advLink&&b[a].advMessage?c+='<div class="bap-link-div"><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+"&nbsp;&raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div">'+b[a].advMessage+"</div>")),c+='<div class="bap-link-div">'+v+"</div></div></div>";else if(5==d)c+='<div id="bap-notice-'+a+'" class="bap5 bap-notice" style="display:none;'+g+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+
a+"'));return false;\">[ X ]</div><p>"+k+' <a class="bap-blue-link" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.link('bap-link-1-"+a+"', '"+Ma+"more_info/"+z[a]+"')\">"+x+'</a></p><div class="bap-link-div">'+v+"</div></div></div>";else if(6==d){r=w.QuirksMode?"width: 728px !important;":"min-width: 675px !important; width: auto !important;";q=w.QuirksMode?' style="width:275px !important; height: 20px;"':"";if(b[a].hideCustom&&b[a].hideWhatIs)c+=
"<style>#bap-first-link-div { padding-top:45px !important; }</style>";else if(b[a].hideCustom||b[a].hideWhatIs)c+="<style>#bap-first-link-div { margin-top: 20px !important; }</style>";c=c+('<div id="bap-notice-'+a+'" class="bap6 bap-notice" style="display:none;'+r+g+'"><div class="bap-div"><div id="bap-gradient-1" class="bap-gradient"><div id="bap-first-link-div" class="bap-link-div"'+q+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+
a+"')\">"+s+" &raquo;</a></div>")+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+q+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+u+" &raquo;</a></div>");b[a].hideCustom||(c=b[a].advLink&&b[a].advMessage?c+('<div class="bap-link-div"'+q+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>"):b[a].advMessage?
c+('<div class="bap-link-div"'+q+">"+b[a].advMessage+"</div>"):c+"&nbsp;");c+='<div class="bap-link-div"'+q+">"+v+'</div></div><div id="bap-gradient-2" class="bap-gradient"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+
a+'" border="0">':"")+"</div><p>"+k+"</p></div></div></div>"}h||(h=t.createElement("div"),h.setAttribute("id","BAP-holder"),n.appendChild(h),h=m("BAP-holder"));h.innerHTML+=c;ta(d)}}function F(a){var b;if(!a||!a.ownerDocument)return y;if(a===a.ownerDocument.body){b=n.offsetTop;var c=n.offsetLeft;a=t.createElement("div");var d,e,h=qa(u(n,"marginTop"))||0;a.style.position="absolute";a.style.top=0;a.style.left=0;a.style.margin=0;a.style.border=0;a.style.width="1px";a.style.height="1px";a.style.visibility=
"hidden";a.innerHTML='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';n.insertBefore(a,n.firstChild);d=a.firstChild;e=d.firstChild;e.style.position="fixed";e.style.top="20px";e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";
n.removeChild(a);n.offsetTop!==h&&(b+=qa(u(n,"marginTop"))||0,c+=qa(u(n,"marginLeft"))||0);return{top:b,left:c}}try{b=a.getBoundingClientRect()}catch(k){}d=a.ownerDocument;c=d.documentElement;if(!b)return b?{top:b.top,left:b.left}:{top:0,left:0};d=d.body;a=a&&"object"===typeof a&&"setInterval"in a?a:9===a.nodeType?a.defaultView||a.parentWindow:!1;return{top:b.top+(a.pageYOffset||ra&&c.scrollTop||d.scrollTop)-(c.clientTop||(w.QuirksMode?d.clientTop:0)||0),left:b.left+(a.pageXOffset||ra&&c.scrollLeft||
d.scrollLeft)-(c.clientLeft||(w.QuirksMode?d.clientLeft:0)||0)}}var x={},Ca=1,H=[],sa=!1,T=!1,V=!1,Z=!1,Ba="d803588",bb="2",s="id",Ga="_id",W="ci",E={CSS_COMMON:".bap-blue,.bap-close,.bap-div,.bap-gradient,.bap-gray,.bap-img-container,.bap-notice,.bap-link-div{color:#000;white-space:normal;word-wrap:normal;vertical-align:middle !important;margin:0;padding:0;border:0;outline:0;font-family:Arial !important;font-size:100%;border-collapse:collapse;border-spacing:0;line-height:13px;list-style:none;letter-spacing:0 !important;text-align:left;overflow:visible !important}.bap-notice{background-color:#fff;padding:2px;font-size:16px;line-height:13px;z-index:9991;top:-100px;left:-100px}.bap-blue,.bap-blue:link,.bap-blue:visited{color:#2b2f98}.bap-close{width:20px;color:#707070;font-size:10px;font-weight:bold;margin-left:-22px;position:relative;top:1px;left:100%;cursor:pointer}.bap-div{border:1px solid #ababab}.bap-div p{float:none;padding:0}.bap-gray,.bap-gray:visited{color:#444}.bap-img-container a{vertical-align:middle;display:table-cell;height:45px}.bap-link-div{height:14px;color:#2b2f98;border-top:1px solid #ababab;padding:3px 10px 4px 10px;text-decoration:none;font-size:.67em !important;font-weight:bold}.bap-link-div a,.bap-link-div span{text-decoration:none;font-size:inherit;font-weight:bold}#BAP-holder img{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;max-width:100%;box-shadow:0 0 !important;-moz-box-shadow:0 0 !important;-webkit-box-shadow:0 0 !important;background:none !important}#BAP-holder{position:static !important}#BAP-holder .bap-trigger{z-index:9990}.bap-trigger{cursor:pointer;display:block;font-family:Arial;font-size:8pt;white-space:nowrap}.bap-trigger img{width:auto;height:auto}",
CSS_1:".bap1 .bap-img-container{margin:-18px 0 9px 10px;height:45px;position:static}.bap1 .bap-img-container img{margin-top:6px !important}.bap1 p{font-size:.7em;margin:4px 5px 0 10px;padding-bottom:6px;line-height:13px;width:259px}.bap1 .bap-close{\x3c!--[if lte IE 7]>top:0;left:273px !important;<![endif]--\x3e}",CSS_2:".bap2 .bap-close{z-index:1}.bap2 .bap-close{\x3c!--[if lte IE 7]>top:0;left:152px !important;<![endif]--\x3e}.bap2 .bap-gray,.bap-gray:visited{padding-right:0 !important;word-spacing:-2px;font-size:.8em}.bap2 .bap-img-container{position:relative;top:-7px;margin-left:10px}.bap2 .bap-link-div{height:100%}.bap2 .bap-notice{font-size:12px}.bap2 .bap-img-container img{display:block;margin-top:10px}.bap2 p{font-size:11px;margin:2px 5px 0 10px;padding-bottom:7px;line-height:13px}",
CSS_5:".bap5 .bap-gray,.bap-gray:visited{font-size:95%}.bap5 .bap-link-div{background-color:#dcdcdc;font-size:.8em;padding:3px 3px 4px 6px}.bap5{font-size:12px;width:190px}.bap5 .bap-spacer-div{height:1px}.bap5 p{font-size:.8em;margin:3px 6px 0 5px;padding-bottom:3px;line-height:13px}.bap5 .bap-close{\x3c!--[if lte IE 7]>top:0;left:185px !important;<![endif]--\x3e}",CSS_6:".bap6 .bap-close{margin-left:0;display:inline;float:right;right:10px;left:0 !important}.bap6 .bap-div{height:84px;min-width:688px}.bap6 .bap-gradient{float:left;height:84px}.bap6 .bap-img-container{float:right;clear:right;margin-top:10px;height:45px;width:115px}.bap6 .bap-link-div{padding:4px 10px 3px 10px;overflow:hidden}.bap6 .bap-link-div a,.bap6 .bap-link-div span{display:block;width:auto !important;max-width:275px;min-width:210px;line-height:130%}.bap6 p{font-size:.7em;width:310px;margin:5px 0 0 10px;line-height:13px}#bap-gradient-1{border-right:1px solid #ababab;width:auto !important;max-width:280px;min-width:230px}#bap-gradient-2{width:441px}#bap-first-link-div{border:0}",
options:{}},h=window,t=document,L=encodeURIComponent,b=E.options,y=null,C=setTimeout,p=parseInt,qa=parseFloat;location.href.indexOf("tech-ticker");var r="length",B="//c.betrad.com",Ra=B+"/a/",Ma="http://info.evidon.com/",n=t.getElementsByTagName("body")[0],Ea={},oa={},A={},ba=0,$,G=[],X={},R={},z={},Da={},S=0,O=t.domain,aa,w=function(){var a=navigator.userAgent,b="[object Opera]"==Object.prototype.toString.call(h.opera),c=a.substring(a.indexOf("Version")+"Version"[r]+1),d=!!h.attachEvent&&!b&&t.createStyleSheet;
try{c=c.substring(0,c.indexOf(" "))}catch(e){}return{IE:d,IE6:-1<a.indexOf("MSIE 6"),IE7:-1<a.indexOf("MSIE 7"),IE8:-1<a.indexOf("MSIE 8"),Opera:b,Gecko:-1<a.indexOf("Gecko")&&-1===a.indexOf("KHTML"),Safari:-1<a.indexOf("Safari")&&-1>=a.indexOf("Chrome"),Chrome:!!a.match("Chrome"),QuirksMode:d&&"BackCompat"==t.compatMode,SafariVersion:c}}(),Oa=top.location!=location;(function(){var a=[0,0,0],b=y,c=navigator,d=!1;if("undefined"!=typeof c.plugins&&"object"==typeof c.plugins["Shockwave Flash"]){if((b=
c.plugins["Shockwave Flash"].description)&&!("undefined"!=typeof c.mimeTypes&&c.mimeTypes["application/x-shockwave-flash"]&&!c.mimeTypes["application/x-shockwave-flash"].enabledPlugin))d=!0,b=b.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),a[0]=p(b.replace(/^(.*)\..*$/,"$1"),10),a[1]=p(b.replace(/^.*\.(.*)\s.*$/,"$1"),10),a[2]=/[a-zA-Z]/.test(b)?p(b.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if("undefined"!=typeof h.ActiveXObject)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(e&&(b=e.GetVariable("$version")))b=
b.split(" ")[1].split(","),d=!0,a=[p(b[0],10),p(b[1],10),p(b[2],10)]}catch(l){}return{x:d,v:a}})();var la,Pa,ra=y;(function(){var a=t.createElement("div");a.style.width=a.style.paddingLeft="1px";n.appendChild(a);ra=2===a.offsetWidth;n.removeChild(a).style.display="none"})();try{U(window,"message",pa)}catch(hb){}h._bao&&Y(_bao);x.options=b;x.flashPostMessage=function(a){pa({data:a})};x.createL2=function(a){var f=m("bap-notice-"+a);f.style.position="absolute";Ka(f);b[a].popupHeight=f.offsetHeight;b[a].popupWidth=
f.offsetWidth;xa(a)};x.link=ka;x.iabLink=function(a,b){for(var c in A[a]);ka("bap-link-2-"+a,"http://www.youronlinechoices.eu/")};x.moreInfoLink=function(a){ka("bap-link-1-"+a,La(a))};x.moreInfoHref=La;x.toggle=Ka;x.expandIcon=Fa;x.collapseIcon=Ha;x.action=J;x.start=Y;if(h.BAP&&E.copyJSON){var fb=E.copyJSON;x.copyJSON=function(a){fb(a);ua(a)}}else x.copyJSON=ua;x.$=m;x.inject=function(a){sa=!0;la=a.rh;M=a.checkChildren;Pa=a.getAdStandard;a.inject({isValidElement:ia,getDims:ga,checkElement:ha,getObjectEmbed:P})};
return x}();BAP.SVNREV="rd803588";
