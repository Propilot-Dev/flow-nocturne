(()=>{var xt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Vd=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){let i=Zi("canvas");return i.style.display="block",i}function Ns(...i){let e="THREE."+i.shift();Ji?Ji("log",e,...i):console.log(e,...i)}function Xh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Xh(i);let e="THREE."+i.shift();if(Ji)Ji("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=Xh(i);let e="THREE."+i.shift();if(Ji)Ji("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gi(...i){let e=i.join(" ");e in Dc||(Dc[e]=!0,Ce(...i))}function Hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Vl(i,e){return(i%e+e)%e}function Wd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yd(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function $d(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function Kd(i,e=1){return e-Math.abs(Vl(i,e*2)-e)}function qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jd(i,e){return i+Math.random()*(e-i)}function Qd(i){return i*(.5-Math.random())}function ef(i){i!==void 0&&(Lc=i);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tf(i){return i*$i}function nf(i){return i*ji}function sf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function af(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function of(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function lf(){let i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function cl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);let o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function Fr(i,e,t,n,s,r){Gi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*Gi.x-s*Gi.y,Ts.y=s*Gi.x+r*Gi.y):Ts.copy(Gi),i.copy(e),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4($h)}function Tf(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Wr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,kr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Vr);let u=Tf(i,e,t,n,kr,Gr,Vr,qc);if(u){let f=new I;vn.getBarycoord(qc,kr,Gr,Vr,f),s&&(u.uv=vn.getInterpolatedAttribute(s,o,l,c,f,new Se)),r&&(u.uv1=vn.getInterpolatedAttribute(r,o,l,c,f,new Se)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};vn.getNormal(kr,Gr,Vr,h.normal),u.face=h,u.barycoord=f}return u}function qr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ya.fromBufferAttribute(o,s),Ma.fromBufferAttribute(o,r),t.distanceSqToSegment(ya,Ma,gl,Qc)>n)return;gl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gl);if(!(c<e.near||c>e.far))return{distance:c,point:Qc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function ih(i,e,t,n,s,r,a){let o=bl.distanceSqToPoint(i);if(o<t){let l=new I;bl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Si(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(sh(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Si(i[t]);for(let s in n)e[s]=n[s]}return e}function sh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}function Xi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Kh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Pf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function If(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Kh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Pf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function rh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function ah(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Df(){this._document.hidden===!1&&this.reset()}function Yl(i,e,t,n){let s=Gf(n);switch(t){case Ol:return i*e;case Ya:return i*e/s.components*s.byteLength;case $a:return i*e/s.components*s.byteLength;case ai:return i*e*2/s.components*s.byteLength;case Ka:return i*e*2/s.components*s.byteLength;case Bl:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case qa:return i*e*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:case Qa:return Math.max(i,16)*Math.max(e,8)/4;case Za:case ja:return Math.max(i,8)*Math.max(e,8)/2;case eo:case to:case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case mr:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mo:case So:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gr:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(i){switch(i){case Zt:case Ll:return{byteLength:1,components:1};case cs:case Nl:case Lt:return{byteLength:2,components:1};case Ha:case Wa:return{byteLength:2,components:4};case pn:case Xa:case nn:return{byteLength:4,components:1};case Ul:case Fl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var ch,wl,hh,nr,uh,ls,ti,Xt,qt,tn,ni,Cn,Al,Cl,dh,vi,fh,ph,mh,gh,_h,xh,vh,yh,Rl,Pl,Mh,Sh,bh,Th,Eh,wh,Ah,Ch,Rh,aa,oa,la,qi,ca,ha,ua,da,Il,Ph,Ih,fn,ir,sr,rr,yi,ar,or,lr,Dl,ii,Mi,ka,Ga,cr,fa,yn,pa,Rt,Dh,hr,It,Va,si,Zt,Ll,Nl,cs,Xa,pn,nn,Lt,Ha,Wa,hs,Ul,Fl,Ol,Bl,sn,Mn,ri,Ya,$a,ai,Ka,qa,ur,dr,fr,pr,Za,Ja,ja,Qa,eo,to,no,io,so,mr,ro,ao,oo,lo,co,ho,uo,fo,po,mo,go,_o,xo,vo,yo,Mo,So,bo,To,Eo,gr,wo,Ps,ma,ia,vl,yl,Ml,Sl,Lh,zl,Nh,zn,St,Is,Ds,$e,sa,Uh,Fh,Oh,Bh,Ao,zh,kh,Co,Gh,kl,_r,Gl,un,Ls,Dc,Ji,Wh,Sn,Ft,Lc,$i,ji,oi,Se,bn,I,Zo,Nc,Ie,Jo,Uc,Fc,Be,Ci,ga,cf,Qi,hf,Qo,zt,gt,_a,bt,Us,xa,nt,Ri,an,uf,df,Hn,Ar,Yt,Oc,Bc,qn,Fs,ff,zc,Pi,In,Cr,vs,pf,mf,kc,Gc,Vc,Xc,gf,Ii,el,Dt,dn,_f,es,Yh,Wn,Rr,De,Ot,Os,on,Dn,nl,Ln,Di,Li,Hc,il,sl,rl,al,ol,ll,vn,Tn,Nn,ln,Pr,Ni,Ui,Fi,Yn,$n,di,ys,Ir,Dr,fi,Mt,Lr,xf,lt,Bs,zs,it,vf,Ms,hl,En,yf,Qt,ul,Oi,$t,Ss,Ct,dt,va,Vt,ks,dl,Mf,Sf,cn,bf,wn,ts,Bi,bs,zi,ki,Gi,Ts,$h,Nr,Es,Ur,Wc,fl,Yc,Gs,Un,pl,Or,Br,ns,An,$c,pi,zr,Kc,kr,Gr,Vr,ml,Xr,qc,Hr,ft,Vs,Bn,Vi,Zc,Yr,Jc,Ef,ws,As,Xs,mi,wf,$r,Hs,_i,ya,Ma,jc,Cs,Kr,gl,Qc,Sa,eh,th,is,ba,nh,bl,Zr,Jr,ss,Ws,Zn,Jn,Ta,Ys,rs,Ea,jr,Qr,_l,ea,$s,Ks,en,qs,Zs,kn,Cf,Rf,qe,as,wa,Aa,jn,Ca,Ra,Pa,Ia,Kt,Qn,Da,La,Na,Js,ei,Ua,ra,Fa,qh,os,Hi,Oa,js,ta,na,xn,Qs,Kn,oh,lh,Bt,xi,er,Wi,Yi,Ba,za,tr,Hl,Lf,Wl,Nf,Uf,Ff,Of,Bf,zf,kf,Tl,ut,ex,El,$l=xt(()=>{ch=0,wl=1,hh=2,nr=1,uh=2,ls=3,ti=0,Xt=1,qt=2,tn=0,ni=1,Cn=2,Al=3,Cl=4,dh=5,vi=100,fh=101,ph=102,mh=103,gh=104,_h=200,xh=201,vh=202,yh=203,Rl=204,Pl=205,Mh=206,Sh=207,bh=208,Th=209,Eh=210,wh=211,Ah=212,Ch=213,Rh=214,aa=0,oa=1,la=2,qi=3,ca=4,ha=5,ua=6,da=7,Il=0,Ph=1,Ih=2,fn=0,ir=1,sr=2,rr=3,yi=4,ar=5,or=6,lr=7,Dl=300,ii=301,Mi=302,ka=303,Ga=304,cr=306,fa=1e3,yn=1001,pa=1002,Rt=1003,Dh=1004,hr=1005,It=1006,Va=1007,si=1008,Zt=1009,Ll=1010,Nl=1011,cs=1012,Xa=1013,pn=1014,nn=1015,Lt=1016,Ha=1017,Wa=1018,hs=1020,Ul=35902,Fl=35899,Ol=1021,Bl=1022,sn=1023,Mn=1026,ri=1027,Ya=1028,$a=1029,ai=1030,Ka=1031,qa=1033,ur=33776,dr=33777,fr=33778,pr=33779,Za=35840,Ja=35841,ja=35842,Qa=35843,eo=36196,to=37492,no=37496,io=37488,so=37489,mr=37490,ro=37491,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,yo=37821,Mo=36492,So=36494,bo=36495,To=36283,Eo=36284,gr=36285,wo=36286,Ps=2300,ma=2301,ia=2302,vl=2303,yl=2400,Ml=2401,Sl=2402,Lh=3200,zl=0,Nh=1,zn="",St="srgb",Is="srgb-linear",Ds="linear",$e="srgb",sa=7680,Uh=519,Fh=512,Oh=513,Bh=514,Ao=515,zh=516,kh=517,Co=518,Gh=519,kl=35044,_r=35048,Gl="300 es",un=2e3,Ls=2001;Dc={},Ji=null;Wh={[aa]:oa,[la]:ua,[ca]:da,[qi]:ha,[oa]:aa,[ua]:la,[da]:ca,[ha]:qi},Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=1234567,$i=Math.PI/180,ji=180/Math.PI;oi={DEG2RAD:$i,RAD2DEG:ji,generateUUID:Fn,clamp:Xe,euclideanModulo:Vl,mapLinear:Wd,inverseLerp:Yd,lerp:Rs,damp:$d,pingpong:Kd,smoothstep:qd,smootherstep:Zd,randInt:Jd,randFloat:jd,randFloatSpread:Qd,seededRandom:ef,degToRad:tf,radToDeg:nf,isPowerOfTwo:sf,ceilPowerOfTwo:rf,floorPowerOfTwo:af,setQuaternionFromProperEuler:of,normalize:Qe,denormalize:hn},Se=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*M;m<0&&(h=-h,p=-p,_=-_,M=-M,m=-m);let d=1-o;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);d=Math.sin(d*S)/w,o=Math.sin(o*S)/w,l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+M*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+M*o;let S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-o*p,e[t+2]=c*_+u*p+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zo=new I,Nc=new bn,Ie=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],M=s[0],m=s[3],d=s[6],S=s[1],w=s[4],v=s[7],b=s[2],T=s[5],C=s[8];return r[0]=a*M+o*S+l*b,r[3]=a*m+o*w+l*T,r[6]=a*d+o*v+l*C,r[1]=c*M+u*S+f*b,r[4]=c*m+u*w+f*T,r[7]=c*d+u*v+f*C,r[2]=h*M+p*S+_*b,r[5]=h*m+p*w+_*T,r[8]=h*d+p*v+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new Ie,Uc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Be=lf();ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Zi("canvas")),Ci.width=e.width,Ci.height=e.height;let s=Ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cf=0,Qi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};hf=0,Qo=new I,zt=class i extends Sn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yn,s=yn,r=It,a=si,o=sn,l=Zt,c=i.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Fn(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Dl;zt.DEFAULT_ANISOTROPY=1;gt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(p+1)/2,b=(d+1)/2,T=(u+h)/4,C=(f+M)/4,x=(_+m)/4;return w>v&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=C/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-M)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends Sn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Us=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},xa=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,M,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,M,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,_=c*u,M=c*f;t[0]=h+M*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,_=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-M*f}else if(e.order==="XZY"){let h=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,df)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Hn.crossVectors(n,Yt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Hn.crossVectors(n,Yt)),Hn.normalize(),Ar.crossVectors(Yt,Hn),s[0]=Hn.x,s[4]=Ar.x,s[8]=Yt.x,s[1]=Hn.y,s[5]=Ar.y,s[9]=Yt.y,s[2]=Hn.z,s[6]=Ar.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],M=n[6],m=n[10],d=n[14],S=n[3],w=n[7],v=n[11],b=n[15],T=s[0],C=s[4],x=s[8],E=s[12],R=s[1],U=s[5],z=s[9],X=s[13],N=s[2],G=s[6],q=s[10],K=s[14],ne=s[3],W=s[7],Q=s[11],te=s[15];return r[0]=a*T+o*R+l*N+c*ne,r[4]=a*C+o*U+l*G+c*W,r[8]=a*x+o*z+l*q+c*Q,r[12]=a*E+o*X+l*K+c*te,r[1]=u*T+f*R+h*N+p*ne,r[5]=u*C+f*U+h*G+p*W,r[9]=u*x+f*z+h*q+p*Q,r[13]=u*E+f*X+h*K+p*te,r[2]=_*T+M*R+m*N+d*ne,r[6]=_*C+M*U+m*G+d*W,r[10]=_*x+M*z+m*q+d*Q,r[14]=_*E+M*X+m*K+d*te,r[3]=S*T+w*R+v*N+b*ne,r[7]=S*C+w*U+v*G+b*W,r[11]=S*x+w*z+v*q+b*Q,r[15]=S*E+w*X+v*K+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],M=e[7],m=e[11],d=e[15],S=l*p-c*h,w=o*p-c*f,v=o*h-l*f,b=a*p-c*u,T=a*h-l*u,C=a*f-o*u;return t*(M*S-m*w+d*v)-n*(_*S-m*b+d*T)+s*(_*w-M*b+d*C)-r*(_*v-M*T+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],M=e[13],m=e[14],d=e[15],S=t*o-n*a,w=t*l-s*a,v=t*c-r*a,b=n*l-s*o,T=n*c-r*o,C=s*c-r*l,x=u*M-f*_,E=u*m-h*_,R=u*d-p*_,U=f*m-h*M,z=f*d-p*M,X=h*d-p*m,N=S*X-w*z+v*U+b*R-T*E+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return e[0]=(o*X-l*z+c*U)*G,e[1]=(s*z-n*X-r*U)*G,e[2]=(M*C-m*T+d*b)*G,e[3]=(h*T-f*C-p*b)*G,e[4]=(l*R-a*X-c*E)*G,e[5]=(t*X-s*R+r*E)*G,e[6]=(m*v-_*C-d*w)*G,e[7]=(u*C-h*v+p*w)*G,e[8]=(a*z-o*R+c*x)*G,e[9]=(n*R-t*z-r*x)*G,e[10]=(_*T-M*v+d*S)*G,e[11]=(f*v-u*T-p*S)*G,e[12]=(o*E-a*U-l*x)*G,e[13]=(t*U-n*E+s*x)*G,e[14]=(M*w-_*b-m*S)*G,e[15]=(u*b-f*w+h*S)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,M=a*u,m=a*f,d=o*f,S=l*c,w=l*u,v=l*f,b=n.x,T=n.y,C=n.z;return s[0]=(1-(M+d))*b,s[1]=(p+v)*b,s[2]=(_-w)*b,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(h+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(_+w)*C,s[9]=(m-S)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let c=1/a,u=1/o,f=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=un,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===un)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ls)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=un,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===un)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ls)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new I,an=new nt,uf=new I(0,0,0),df=new I(1,1,1),Hn=new I,Ar=new I,Yt=new I,Oc=new nt,Bc=new bn,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";Fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ff=0,zc=new I,Pi=new bn,In=new nt,Cr=new I,vs=new I,pf=new I,mf=new bn,kc=new I(1,0,0),Gc=new I(0,1,0),Vc=new I(0,0,1),Xc={type:"added"},gf={type:"removed"},Ii={type:"childadded",child:null},el={type:"childremoved",child:null},Dt=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new qn,n=new bn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ie}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(vs,Cr,this.up):In.lookAt(Cr,vs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(In),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;dn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_f={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Be.workingColorSpace){if(e=Vl(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=tl(a,r,e+1/3),this.g=tl(a,r,e),this.b=tl(a,r,e-1/3)}return Be.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Be.workingToColorSpace(Ot.copy(this),e),Math.round(Xe(Ot.r*255,0,255))*65536+Math.round(Xe(Ot.g*255,0,255))*256+Math.round(Xe(Ot.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.workingToColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Be.workingColorSpace){return Be.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=St){Be.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Rr);let n=Rs(Wn.h,Rr.h,t),s=Rs(Wn.s,Rr.s,t),r=Rs(Wn.l,Rr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new De;De.NAMES=Yh;Os=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new I,Dn=new I,nl=new I,Ln=new I,Di=new I,Li=new I,Hc=new I,il=new I,sl=new I,rl=new I,al=new gt,ol=new gt,ll=new gt,vn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Dn.subVectors(n,t),nl.subVectors(e,t);let a=on.dot(on),o=on.dot(Dn),l=on.dot(nl),c=Dn.dot(Dn),u=Dn.dot(nl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return al.setScalar(0),ol.setScalar(0),ll.setScalar(0),al.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(al,r.x),a.addScaledVector(ol,r.y),a.addScaledVector(ll,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Dn.subVectors(e,t),on.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),on.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Li.subVectors(r,n),il.subVectors(e,n);let l=Di.dot(il),c=Li.dot(il);if(l<=0&&c<=0)return t.copy(n);sl.subVectors(e,s);let u=Di.dot(sl),f=Li.dot(sl);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Di,a);rl.subVectors(e,r);let p=Di.dot(rl),_=Li.dot(rl);if(_>=0&&p<=_)return t.copy(r);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Li,o);let m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Hc.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Hc,o);let d=1/(m+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(Di,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Ir.subVectors(this.max,ys),Ni.subVectors(e.a,ys),Ui.subVectors(e.b,ys),Fi.subVectors(e.c,ys),Yn.subVectors(Ui,Ni),$n.subVectors(Fi,Ui),di.subVectors(Ni,Fi);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-di.z,di.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-di.y,di.x,0];return!cl(t,Ni,Ui,Fi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Ni,Ui,Fi,Ir))?!1:(Dr.crossVectors(Yn,$n),t=[Dr.x,Dr.y,Dr.z],cl(t,Ni,Ui,Fi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Pr=new Tn,Ni=new I,Ui=new I,Fi=new I,Yn=new I,$n=new I,di=new I,ys=new I,Ir=new I,Dr=new I,fi=new I;Mt=new I,Lr=new Se,xf=0,lt=class extends Sn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Bs=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},zs=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},it=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},vf=new Tn,Ms=new I,hl=new I,En=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);let t=Ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(hl)),this.expandByPoint(Ms.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yf=0,Qt=new nt,ul=new Dt,Oi=new I,$t=new Tn,Ss=new Tn,Ct=new I,dt=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?zs:Bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors($t.min,Ss.min),$t.expandByPoint(Ct),Ct.addVectors($t.max,Ss.max),$t.expandByPoint(Ct)):($t.expandByPoint(Ss.min),$t.expandByPoint(Ss.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),Ct.add(Oi)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,u=new I,f=new I,h=new Se,p=new Se,_=new Se,M=new I,m=new I;function d(x,E,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),u.sub(c),f.sub(c),p.sub(h),_.sub(h);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),o[x].add(M),o[E].add(M),o[R].add(M),l[x].add(m),l[E].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,E=S.length;x<E;++x){let R=S[x],U=R.start,z=R.count;for(let X=U,N=U+z;X<N;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let w=new I,v=new I,b=new I,T=new I;function C(x){b.fromBufferAttribute(s,x),T.copy(b);let E=o[x];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(T,E);let U=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,U)}for(let x=0,E=S.length;x<E;++x){let R=S[x],U=R.start,z=R.count;for(let X=U,N=U+z;X<N;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new lt(h,u,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vt=new I,ks=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ns("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ns("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dl=new I,Mf=new I,Sf=new Ie,cn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dl.subVectors(n,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sf.getNormalMatrix(e),s=this.coplanarPoint(dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bf=0,wn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ni,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ts=class extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bs=new I,zi=new I,ki=new I,Gi=new Se,Ts=new Se,$h=new nt,Nr=new I,Es=new I,Ur=new I,Wc=new Se,fl=new Se,Yc=new Se,Gs=class extends Dt{constructor(e=new ts){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new va(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new ks(n,3,0,!1)),Bi.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),$h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Fr(Nr.set(-.5,-.5,0),ki,a,zi,s,r),Fr(Es.set(.5,-.5,0),ki,a,zi,s,r),Fr(Ur.set(.5,.5,0),ki,a,zi,s,r),Wc.set(0,0),fl.set(1,0),Yc.set(1,1);let o=e.ray.intersectTriangle(Nr,Es,Ur,!1,bs);if(o===null&&(Fr(Es.set(-.5,.5,0),ki,a,zi,s,r),fl.set(0,1),o=e.ray.intersectTriangle(Nr,Ur,Es,!1,bs),o===null))return;let l=e.ray.origin.distanceTo(bs);l<e.near||l>e.far||t.push({distance:l,point:bs.clone(),uv:vn.getInterpolation(bs,Nr,Es,Ur,Wc,fl,Yc,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Un=new I,pl=new I,Or=new I,Br=new I,ns=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pl.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(pl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Or),o=Br.dot(this.direction),l=-Br.dot(Or),c=Br.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let M=1/u;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pl).addScaledVector(Or,h),p}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,d=n.x-a.x,S=n.y-a.y,w=n.z-a.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(u),C,x,E,R,U,z,X,N,G,q,K,ne;if(v>=b&&v>=T?(E=l,z=f,G=_,ne=d,l>=0?(C=c,x=u,R=h,U=p,X=M,N=m,q=S,K=w):(C=u,x=c,R=p,U=h,X=m,N=M,q=w,K=S)):b>=T?(E=c,z=h,G=M,ne=S,c>=0?(C=u,x=l,R=p,U=f,X=m,N=_,q=w,K=d):(C=l,x=u,R=f,U=p,X=_,N=m,q=d,K=w)):(E=u,z=p,G=m,ne=w,u>=0?(C=l,x=c,R=f,U=h,X=_,N=M,q=d,K=S):(C=c,x=l,R=h,U=f,X=M,N=_,q=S,K=d)),E===0)return null;let W=C/E,Q=x/E,te=1/E,Ae=R-W*z,Ee=U-Q*z,st=X-W*G,He=N-Q*G,Ke=q-W*ne,Y=K-Q*ne,j=Ke*He-Y*st,_e=Ae*Y-Ee*Ke,Le=st*Ee-He*Ae;if(s){if(j<0||_e<0||Le<0)return null}else if((j<0||_e<0||Le<0)&&(j>0||_e>0||Le>0))return null;let me=j+_e+Le;if(me===0)return null;let Oe=te*(j*z+_e*G+Le*ne);return(me>0?Oe<0:Oe>0)?null:this.at(Oe/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$c=new nt,pi=new ns,zr=new En,Kc=new I,kr=new I,Gr=new I,Vr=new I,ml=new I,Xr=new I,qc=new I,Hr=new I,ft=class extends Dt{constructor(e=new dt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(ml.fromBufferAttribute(f,e),a?Xr.addScaledVector(ml,u):Xr.addScaledVector(ml.sub(t),u))}t.add(Xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(zr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(zr,Kc)===null||pi.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&($c.copy(r).invert(),pi.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let m=h[_],d=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,b=w;v<b;v+=3){let T=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);s=Wr(this,d,e,n,c,u,f,T,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){let S=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=Wr(this,a,e,n,c,u,f,S,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let m=h[_],d=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,b=w;v<b;v+=3){let T=v,C=v+1,x=v+2;s=Wr(this,d,e,n,c,u,f,T,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){let S=m,w=m+1,v=m+2;s=Wr(this,a,e,n,c,u,f,S,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Vs=class extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rt,u=Rt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bn=class extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vi=new nt,Zc=new nt,Yr=[],Jc=new Tn,Ef=new nt,ws=new ft,As=new En,Xs=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ef)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Jc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Jc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),As.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Zc.multiplyMatrices(n,Vi),ws.matrixWorld=Zc,ws.raycast(e,Yr);for(let a=0,o=Yr.length;a<o;a++){let l=Yr[a];l.instanceId=r,l.object=this,t.push(l)}Yr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(s*this.count),s,this.count,Ya,nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mi=new En,wf=new Se(.5,.5),$r=new I,Hs=class{constructor(e=new cn,t=new cn,n=new cn,s=new cn,r=new cn,a=new cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],M=r[9],m=r[10],d=r[11],S=r[12],w=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,p-u,d-_,b-S).normalize(),s[1].setComponents(c+a,p+u,d+_,b+S).normalize(),s[2].setComponents(c+o,p+f,d+M,b+w).normalize(),s[3].setComponents(c-o,p-f,d-M,b-w).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,d-m,b-v).normalize();else if(s[4].setComponents(c-l,p-h,d-m,b-v).normalize(),t===un)s[5].setComponents(c+l,p+h,d+m,b+v).normalize();else if(t===Ls)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);let t=wf.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($r.x=s.normal.x>0?e.max.x:e.min.x,$r.y=s.normal.y>0?e.max.y:e.min.y,$r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_i=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ya=new I,Ma=new I,jc=new nt,Cs=new ns,Kr=new En,gl=new I,Qc=new I,Sa=class extends Dt{constructor(e=new dt,t=new _i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ya.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ya.distanceTo(Ma);e.setAttribute("lineDistance",new it(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;jc.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){let d=u.getX(M),S=u.getX(M+1),w=qr(this,e,Cs,l,d,S,M);w&&t.push(w)}if(this.isLineLoop){let M=u.getX(_-1),m=u.getX(p),d=qr(this,e,Cs,l,M,m,_-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){let d=qr(this,e,Cs,l,M,M+1,M);d&&t.push(d)}if(this.isLineLoop){let M=qr(this,e,Cs,l,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};eh=new I,th=new I,is=class extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)eh.fromBufferAttribute(t,s),th.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eh.distanceTo(th);e.setAttribute("lineDistance",new it(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nh=new nt,bl=new ns,Zr=new En,Jr=new I,ss=class extends Dt{constructor(e=new dt,t=new ba){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;nh.copy(s).invert(),bl.copy(e.ray).applyMatrix4(nh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,M=p;_<M;_++){let m=c.getX(_);Jr.fromBufferAttribute(f,m),ih(Jr,m,l,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,M=p;_<M;_++)Jr.fromBufferAttribute(f,_),ih(Jr,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ws=class extends zt{constructor(e=[],t=ii,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zn=class extends zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class extends zt{constructor(e,t,n=pn,s,r,a,o=Rt,l=Rt,c,u=Mn,f=1){if(u!==Mn&&u!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ta=class extends Jn{constructor(e,t=pn,n=ii,s,r,a=Rt,o=Rt,l,c=Mn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ys=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function _(M,m,d,S,w,v,b,T,C,x,E){let R=v/C,U=b/x,z=v/2,X=b/2,N=T/2,G=C+1,q=x+1,K=0,ne=0,W=new I;for(let Q=0;Q<q;Q++){let te=Q*U-X;for(let Ae=0;Ae<G;Ae++){let Ee=Ae*R-z;W[M]=Ee*S,W[m]=te*w,W[d]=N,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[d]=T>0?1:-1,u.push(W.x,W.y,W.z),f.push(Ae/C),f.push(1-Q/x),K+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<C;te++){let Ae=h+te+G*Q,Ee=h+te+G*(Q+1),st=h+(te+1)+G*(Q+1),He=h+(te+1)+G*Q;l.push(Ae,Ee,He),l.push(Ee,st,He),ne+=6}o.addGroup(p,ne,E),p+=ne,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ea=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new I,v=new I,b=new I;for(let T=0;T<t.length;T+=3)p(t[T+0],w),p(t[T+1],v),p(t[T+2],b),l(w,v,b,S)}function l(S,w,v,b){let T=b+1,C=[];for(let x=0;x<=T;x++){C[x]=[];let E=S.clone().lerp(v,x/T),R=w.clone().lerp(v,x/T),U=T-x;for(let z=0;z<=U;z++)z===0&&x===T?C[x][z]=E:C[x][z]=E.clone().lerp(R,z/U)}for(let x=0;x<T;x++)for(let E=0;E<2*(T-x)-1;E++){let R=Math.floor(E/2);E%2===0?(h(C[x][R+1]),h(C[x+1][R]),h(C[x][R])):(h(C[x][R+1]),h(C[x+1][R+1]),h(C[x+1][R]))}}function c(S){let w=new I;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let S=new I;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=m(S)/2/Math.PI+.5,b=d(S)/Math.PI+.5;a.push(v,1-b)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){let w=a[S+0],v=a[S+2],b=a[S+4],T=Math.max(w,v,b),C=Math.min(w,v,b);T>.9&&C<.1&&(w<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,w){let v=S*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function _(){let S=new I,w=new I,v=new I,b=new I,T=new Se,C=new Se,x=new Se;for(let E=0,R=0;E<r.length;E+=9,R+=6){S.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),T.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),b.copy(S).add(w).add(v).divideScalar(3);let U=m(b);M(T,R+0,S,U),M(C,R+2,w,U),M(x,R+4,v,U)}}function M(S,w,v,b){b<0&&S.x===1&&(a[w]=S.x-1),v.x===0&&v.z===0&&(a[w]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},jr=new I,Qr=new I,_l=new I,ea=new vn,$s=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos($i*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:M,b:m,c:d}=ea;if(M.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),ea.getNormal(_l),f[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){let w=(S+1)%3,v=f[S],b=f[w],T=ea[u[S]],C=ea[u[w]],x=`${v}_${b}`,E=`${b}_${v}`;E in h&&h[E]?(_l.dot(h[E].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(C.x,C.y,C.z)),h[E]=null):x in h||(h[x]={index0:c[S],index1:c[w],normal:_l.clone()})}}for(let _ in h)if(h[_]){let{index0:M,index1:m}=h[_];jr.fromBufferAttribute(o,M),Qr.fromBufferAttribute(o,m),p.push(jr.x,jr.y,jr.z),p.push(Qr.x,Qr.y,Qr.z)}this.setAttribute("position",new it(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ks=class i extends Ea{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},en=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],_=[],M=[],m=[];for(let d=0;d<u;d++){let S=d*h-a;for(let w=0;w<c;w++){let v=w*f-r;_.push(v,-S,0),M.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let w=S+c*d,v=S+c*(d+1),b=S+1+c*(d+1),T=S+1+c*d;p.push(w,v,T),p.push(v,b,T)}this.setIndex(p),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qs=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,p=new I,_=new Se;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let M=0;M<s;M++){let m=M*(n+1);for(let d=0;d<n;d++){let S=d+m,w=S,v=S+n+1,b=S+n+2,T=S+1;o.push(w,v,T),o.push(v,b,T)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Zs=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new I,h=new I,p=[],_=[],M=[],m=[];for(let d=0;d<=n;d++){let S=[],w=d/n,v=a+w*o,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),C=0;d===0&&a===0?C=.5/t:d===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let E=x/t,R=s+E*r;f.x=-T*Math.cos(R),f.y=b,f.z=T*Math.sin(R),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(E+C,1-w),S.push(c++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let w=u[d][S+1],v=u[d][S],b=u[d+1][S],T=u[d+1][S+1];(d!==0||a>0)&&p.push(w,v,T),(d!==n-1||l<Math.PI)&&p.push(v,b,T)}this.setIndex(p),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(M,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};kn={clone:Si,merge:kt},Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},as=class extends qe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wa=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ca=class extends jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:r=e,o=2*t-n;break;case Sl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:a=e,l=2*n-t;break;case Sl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),M=_*_,m=M*_,d=-h*m+2*h*M-h*_,S=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*_+1,w=(-1-p)*m+(1.5+p)*M+.5*_,v=p*m-p*M;for(let b=0;b!==o;++b)r[b]=d*a[u+b]+S*a[c+b]+w*a[l+b]+v*a[f+b];return r}},Ra=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Pa=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ia=class extends jn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-t)/(s-t),M=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*_;return r}let h=o*2,p=e-1;for(let _=0;_!==o;++_){let M=a[c+_],m=a[l+_],d=p*h+_*2,S=f[d],w=f[d+1],v=e*h+_*2,b=u[v],T=u[v+1],C=If(n,t,S,b,s);r[_]=Kh(C,M,w,T,m)}return r}};Kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xi(t,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xi(e.times,Array),values:Xi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xl(e.settings)&&(n.settings={inTangents:Xi(e.settings.inTangents,Array),outTangents:Xi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break;case vl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ia;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xl(this.settings)&&(rh(this.settings.inTangents,e),rh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Hd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let _=0;_!==n;++_){let M=t[f+_];if(M!==t[h+_]||M!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=ma;Qn=class extends Kt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Ps;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;Da=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};Da.prototype.ValueTypeName="color";La=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="number";Na=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Js=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;ei=class extends Kt{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ps;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;Ua=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="vector";ra={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ah(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ah(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};Fa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qh=new Fa,os=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};os.DEFAULT_MATERIAL_NAME="__DEFAULT";Hi=new WeakMap,Oa=class extends os{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ra.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Hi.get(a);f===void 0&&(f=[],Hi.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Zi("img");function l(){u(),t&&t(this);let f=Hi.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onLoad&&p.onLoad(this)}Hi.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),ra.remove(`image:${e}`);let h=Hi.get(this)||[];for(let p=0;p<h.length;p++){let _=h[p];_.onError&&_.onError(f)}Hi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ra.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},js=class extends os{constructor(e){super(e)}load(e,t,n,s){let r=new zt,a=new Oa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ta=new I,na=new bn,xn=new I,Qs=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ta,na,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,na,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ta,na,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,na,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new I,oh=new Se,lh=new Se,Bt=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,oh,lh),t.subVectors(lh,oh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xi=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=class extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Wi=-90,Yi=1,Ba=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Wi,Yi,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Wi,Yi,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Wi,Yi,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Wi,Yi,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Wi,Yi,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Wi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},za=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},tr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Df.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Hl="\\[\\]\\.:\\/",Lf=new RegExp("["+Hl+"]","g"),Wl="[^"+Hl+"]",Nf="[^"+Hl.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",Wl),Ff=/(WCOD+)?/.source.replace("WCOD",Nf),Of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),Bf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),zf=new RegExp("^"+Uf+Ff+Of+Bf+"$"),kf=["material","materials","bones","map"],Tl=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lf,"")}static parseTrackName(e){let t=zf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Tl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ex=new Float32Array(1),El=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Eg(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(S){let w=!1,v=p(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,w){let v=p(w);v&&(v.isCubeTexture||v.mapping===cr)?(c===void 0&&(c=new ft(new rs(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Si(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xu),c.material.toneMapped=Be.getTransfer(v.colorSpace)!==$e,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ft(new en(2,2),new qe({name:"BackgroundMaterial",uniforms:Si(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Be.getTransfer(v.colorSpace)!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(Ro,Xl(i)),t.buffers.color.setClear(Ro.r,Ro.g,Ro.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:M,dispose:d}}function wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,z,X,N,G){let q=!1,K=f(U,N,X,z);r!==K&&(r=K,c(r.object)),q=p(U,N,X,G),q&&_(U,N,X,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(U,z,X,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,z,X,N){let G=N.wireframe===!0,q=n[z.id];q===void 0&&(q={},n[z.id]=q);let K=U.isInstancedMesh===!0?U.id:0,ne=q[K];ne===void 0&&(ne={},q[K]=ne);let W=ne[X.id];W===void 0&&(W={},ne[X.id]=W);let Q=W[G];return Q===void 0&&(Q=h(l()),W[G]=Q),Q}function h(U){let z=[],X=[],N=[];for(let G=0;G<t;G++)z[G]=0,X[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:N,object:U,attributes:{},index:null}}function p(U,z,X,N){let G=r.attributes,q=z.attributes,K=0,ne=X.getAttributes();for(let W in ne)if(ne[W].location>=0){let te=G[W],Ae=q[W];if(Ae===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Ae=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Ae=U.instanceColor)),te===void 0||te.attribute!==Ae||Ae&&te.data!==Ae.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function _(U,z,X,N){let G={},q=z.attributes,K=0,ne=X.getAttributes();for(let W in ne)if(ne[W].location>=0){let te=q[W];te===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let Ae={};Ae.attribute=te,te&&te.data&&(Ae.data=te.data),G[W]=Ae,K++}r.attributes=G,r.attributesNum=K,r.index=N}function M(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function m(U){d(U,0)}function d(U,z){let X=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;X[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),G[U]!==z&&(i.vertexAttribDivisor(U,z),G[U]=z)}function S(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,N=z.length;X<N;X++)z[X]!==U[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function w(U,z,X,N,G,q,K){K===!0?i.vertexAttribIPointer(U,z,X,G,q):i.vertexAttribPointer(U,z,X,N,G,q)}function v(U,z,X,N){M();let G=N.attributes,q=X.getAttributes(),K=z.defaultAttributeValues;for(let ne in q){let W=q[ne];if(W.location>=0){let Q=G[ne];if(Q===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let te=Q.normalized,Ae=Q.itemSize,Ee=e.get(Q);if(Ee===void 0)continue;let st=Ee.buffer,He=Ee.type,Ke=Ee.bytesPerElement,Y=He===i.INT||He===i.UNSIGNED_INT||Q.gpuType===Xa;if(Q.isInterleavedBufferAttribute){let j=Q.data,_e=j.stride,Le=Q.offset;if(j.isInstancedInterleavedBuffer){for(let me=0;me<W.locationSize;me++)d(W.location+me,j.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<W.locationSize;me++)m(W.location+me);i.bindBuffer(i.ARRAY_BUFFER,st);for(let me=0;me<W.locationSize;me++)w(W.location+me,Ae/W.locationSize,He,te,_e*Ke,(Le+Ae/W.locationSize*me)*Ke,Y)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)d(W.location+j,Q.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,st);for(let j=0;j<W.locationSize;j++)w(W.location+j,Ae/W.locationSize,He,te,Ae*Ke,Ae/W.locationSize*j*Ke,Y)}}else if(K!==void 0){let te=K[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}S()}function b(){E();for(let U in n){let z=n[U];for(let X in z){let N=z[X];for(let G in N){let q=N[G];for(let K in q)u(q[K].object),delete q[K];delete N[G]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let X in z){let N=z[X];for(let G in N){let q=N[G];for(let K in q)u(q[K].object),delete q[K];delete N[G]}}delete n[U.id]}function C(U){for(let z in n){let X=n[z];for(let N in X){let G=X[N];if(G[U.id]===void 0)continue;let q=G[U.id];for(let K in q)u(q[K].object),delete q[K];delete G[U.id]}}}function x(U){for(let z in n){let X=n[z],N=U.isInstancedMesh===!0?U.id:0,G=X[N];if(G!==void 0){for(let q in G){let K=G[q];for(let ne in K)u(K[ne].object),delete K[ne];delete G[q]}delete X[N],Object.keys(X).length===0&&delete n[z]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Ag(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Lt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&C!==nn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Rg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new cn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,w=S*4,v=d.clippingState||null;l.value=v,v=u(_,h,w,p);for(let b=0;b!==w;++b)v[b]=t[b];d.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let d=p+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,v=p;w!==M;++w,v+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Ng(i){let e=[],t=[],n=i,s=i-ds+1+Pg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,_=new Float32Array(p*h*f),M=new Float32Array(p*h*f);for(let d=0;d<f;d++){let S=d%3*2/3-1,w=d>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];_.set(v,p*h*d);for(let b=0;b<h;b++){let T=u[b*2]*2-1,C=u[b*2+1]*2-1;d===0?bi.set(1,C,T):d===1?bi.set(-T,1,-C):d===2?bi.set(-T,C,1):d===3?bi.set(-1,C,-T):d===4?bi.set(-T,-1,C):bi.set(T,C,-1),bi.toArray(M,(d*h+b)*p)}}let m=new dt;m.setAttribute("position",new lt(_,p)),m.setAttribute("outputDirection",new lt(M,p)),t.push(new ft(m,null)),n>ds&&n--}return{lodMeshes:t,sizeLods:e}}function Jh(i,e,t){let n=new bt(i,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ug(i,e,t){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Fg(i,e,t){return new qe({name:"SphericalGaussianBlur",defines:{SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function jh(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Qh(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Og(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ka||p===Ga)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new Do(_.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===ka||p===Ga,M=p===ii||p===Mi;if(_||M){let m=t.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Io(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return _&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Io(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===ka?h.mapping=ii:p===Ga&&(h.mapping=Mi),h}function l(h){let p=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Bg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&gi("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,_=f.attributes.position,M=0;if(_===void 0)return;if(p!==null){let S=p.array;M=p.version;for(let w=0,v=S.length;w<v;w+=3){let b=S[w+0],T=S[w+1],C=S[w+2];h.push(b,T,T,C,C,b)}}else{let S=_.array;M=_.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let b=w+0,T=w+1,C=w+2;h.push(b,T,T,C,C,b)}}let m=new(_.count>=65535?zs:Bs)(h,1);m.version=M;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function kg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,e,t){let n=new WeakMap,s=new gt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;p===!0&&(w=1),_===!0&&(w=2),M===!0&&(w=3);let v=o.attributes.position.count*w,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*f),C=new Us(T,v,b,f);C.type=nn,C.needsUpdate=!0;let x=w*4;for(let R=0;R<f;R++){let U=m[R],z=d[R],X=S[R],N=v*b*4*R;for(let G=0;G<U.count;G++){let q=G*x;p===!0&&(s.fromBufferAttribute(U,G),T[N+q+0]=s.x,T[N+q+1]=s.y,T[N+q+2]=s.z,T[N+q+3]=0),_===!0&&(s.fromBufferAttribute(z,G),T[N+q+4]=s.x,T[N+q+5]=s.y,T[N+q+6]=s.z,T[N+q+7]=0),M===!0&&(s.fromBufferAttribute(X,G),T[N+q+8]=s.x,T[N+q+9]=s.y,T[N+q+10]=s.z,T[N+q+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new Se(v,b)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Xg(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}function Wg(i,e,t,n,s,r){let a=new bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new dt;c.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new it([0,2,0,0,2,0],2));let u=new as({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ft(c,u),h=new xi(-1,1,1,-1,0,1),p=null,_=null,M=!1,m,d=null,S=[],w=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let T=0;T<S.length;T++){let C=S[T];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let b=a.width,T=a.height;S.length>0&&o===null&&(o=new bt(b,T,{type:Lt,depthBuffer:!1,stencilBuffer:!1}),l=new bt(b,T,{type:Lt,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(b,T)}},this.begin=function(v,b){if(M||v.toneMapping===fn&&S.length===0)return!1;if(d=b,b!==null){let T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=fn,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=m,M=!0;let T=a,C=o;for(let x=0;x<S.length;x++){let E=S[x];E.enabled!==!1&&(E.render(v,C,T,b),E.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,u.defines={},Be.getTransfer(p)===$e&&(u.defines.SRGB_TRANSFER="");let x=Hg[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(d),v.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}function ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uo(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),wt(t,n)}}function Jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),wt(t,n)}}function jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),wt(t,n)}}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function o0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=t.isReversedDepthBuffer()?Co:Ao,r=ec):r=vu,t.setTexture2D(e||r,s)}function l0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mu,s)}function c0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Su,s)}function h0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yu,s)}function u0(i){switch(i){case 5126:return Yg;case 35664:return $g;case 35665:return Kg;case 35666:return qg;case 35674:return Zg;case 35675:return Jg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(i,e){i.uniform1fv(this.addr,e)}function f0(i,e){let t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function p0(i,e){let t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function m0(i,e){let t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function g0(i,e){let t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _0(i,e){let t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x0(i,e){let t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v0(i,e){i.uniform1iv(this.addr,e)}function y0(i,e){i.uniform2iv(this.addr,e)}function M0(i,e){i.uniform3iv(this.addr,e)}function S0(i,e){i.uniform4iv(this.addr,e)}function b0(i,e){i.uniform1uiv(this.addr,e)}function T0(i,e){i.uniform2uiv(this.addr,e)}function E0(i,e){i.uniform3uiv(this.addr,e)}function w0(i,e){i.uniform4uiv(this.addr,e)}function A0(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ec:a=vu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function C0(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mu,r[a])}function R0(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Su,r[a])}function P0(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yu,r[a])}function I0(i){switch(i){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return T0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return P0}}function ru(i,e){i.seq.push(e),i.map[e.id]=e}function D0(i,e,t){let n=i.name,s=n.length;for(jl.lastIndex=0;;){let r=jl.exec(n),a=jl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ru(t,c===void 0?new tc(o,i,e):new nc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ic(o),ru(t,f)),t=f}}}function au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function U0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function F0(i){Be._getMatrix(ou,Be.workingColorSpace,i);let e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+U0(i.getShaderSource(e),o)}else return r}function O0(i,e){let t=F0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z0(i,e){let t=B0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k0(){Be.getLuminanceCoefficients(Po);let i=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function V0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yr(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sc(i){return i.replace(H0,Y0)}function Y0(i,e){let t=Fe[e];if(t===void 0){let n=W0.get(e);if(n!==void 0)t=Fe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sc(t)}function uu(i){return i.replace($0,K0)}function K0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z0(i){return q0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function j0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function e_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function n_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":t_[i.combine]||"ENVMAP_BLENDING_NONE"}function i_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Z0(t),c=j0(t),u=e_(t),f=n_(t),h=i_(t),p=G0(t),_=V0(r),M=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yr).join(`
`),d.length>0&&(d+=`
`)):(m=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),d=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==fn?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,O0("linearToOutputTexel",t.outputColorSpace),k0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=sc(a),a=cu(a,t),a=hu(a,t),o=sc(o),o=cu(o,t),o=hu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=S+m+a,v=S+d+o,b=au(s,s.VERTEX_SHADER,w),T=au(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(T)||"",G=z.trim(),q=X.trim(),K=N.trim(),ne=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let Q=lu(s,b,"vertex"),te=lu(s,T,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+Q+`
`+te)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):(q===""||K==="")&&(W=!1);W&&(U.diagnostics={runnable:ne,programLog:G,vertexShader:{log:q,prefix:m},fragmentShader:{log:K,prefix:d}})}s.deleteShader(b),s.deleteShader(T),x=new fs(s,M),E=X0(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,L0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}function a_(i){return i===ai||i===mr||i===gr}function o_(i,e,t,n,s,r){let a=new Fs,o=new rc,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,E,R,U,z,X){let N=U.fog,G=z.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||q,K),W=ne&&ne.mapping===cr?ne.image.height:null,Q=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=te!==void 0?te.length:0,Ee=0;G.morphAttributes.position!==void 0&&(Ee=1),G.morphAttributes.normal!==void 0&&(Ee=2),G.morphAttributes.color!==void 0&&(Ee=3);let st,He,Ke,Y;if(Q){let at=Pn[Q];st=at.vertexShader,He=at.fragmentShader}else{st=x.vertexShader,He=x.fragmentShader;let at=o.getVertexShaderStage(x),Ze=o.getFragmentShaderStage(x);o.update(x,at,Ze),Ke=at.id,Y=Ze.id}let j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,me=z.isBatchedMesh===!0,Oe=!!x.map,Tt=!!x.matcap,ke=!!ne,Ye=!!x.aoMap,rt=!!x.lightMap,Ve=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,At=!!x.displacementMap,Ht=!!x.emissiveMap,mt=!!x.metalnessMap,vt=!!x.roughnessMap,L=x.anisotropy>0,Nt=x.clearcoat>0,je=x.dispersion>0,A=x.retroreflectivity>0,g=x.iridescence>0,F=x.sheen>0,k=x.transmission>0,H=L&&!!x.anisotropyMap,ie=Nt&&!!x.clearcoatMap,se=Nt&&!!x.clearcoatNormalMap,$=Nt&&!!x.clearcoatRoughnessMap,J=g&&!!x.iridescenceMap,re=g&&!!x.iridescenceThicknessMap,be=F&&!!x.sheenColorMap,ce=F&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Te=!!x.specularColorMap,Re=!!x.specularIntensityMap,Ne=k&&!!x.transmissionMap,D=k&&!!x.thicknessMap,oe=!!x.gradientMap,Z=!!x.alphaMap,le=x.alphaTest>0,fe=!!x.alphaHash,ee=!!x.extensions,we=fn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=i.toneMapping);let ye={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:He,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:me,batchingColor:me&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:Tt,envMap:ke,envMapMode:ke&&ne.mapping,envMapCubeUVHeight:W,aoMap:Ye,lightMap:rt,bumpMap:Ve,normalMap:pt,displacementMap:At,emissiveMap:Ht,normalMapObjectSpace:pt&&x.normalMapType===Nh,normalMapTangentSpace:pt&&x.normalMapType===zl,packedNormalMap:pt&&x.normalMapType===zl&&a_(x.normalMap.format),metalnessMap:mt,roughnessMap:vt,anisotropy:L,anisotropyMap:H,clearcoat:Nt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:$,dispersion:je,retroreflection:A,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:re,sheen:F,sheenColorMap:be,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:Te,specularIntensityMap:Re,transmission:k,transmissionMap:Ne,thicknessMap:D,gradientMap:oe,opaque:x.transparent===!1&&x.blending===ni&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:fe,combine:x.combine,mapUv:Oe&&_(x.map.channel),aoMapUv:Ye&&_(x.aoMap.channel),lightMapUv:rt&&_(x.lightMap.channel),bumpMapUv:Ve&&_(x.bumpMap.channel),normalMapUv:pt&&_(x.normalMap.channel),displacementMapUv:At&&_(x.displacementMap.channel),emissiveMapUv:Ht&&_(x.emissiveMap.channel),metalnessMapUv:mt&&_(x.metalnessMap.channel),roughnessMapUv:vt&&_(x.roughnessMap.channel),anisotropyMapUv:H&&_(x.anisotropyMap.channel),clearcoatMapUv:ie&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(x.sheenRoughnessMap.channel),specularMapUv:ae&&_(x.specularMap.channel),specularColorMapUv:Te&&_(x.specularColorMap.channel),specularIntensityMapUv:Re&&_(x.specularIntensityMap.channel),transmissionMapUv:Ne&&_(x.transmissionMap.channel),thicknessMapUv:D&&_(x.thicknessMap.channel),alphaMapUv:Z&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(pt||L),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Oe||Z),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&Be.getTransfer(x.map.colorSpace)===$e,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&Be.getTransfer(x.emissiveMap.colorSpace)===$e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qt,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(E,x),S(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function d(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let E=p[x.type],R;if(E){let U=Pn[E];R=kn.clone(U.uniforms)}else R=x.uniforms;return R}function v(x,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new s_(i,E,x,s),c.push(R),u.set(E,R)),R}function b(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function l_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function c_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,M,m,d){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:d},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=_,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=d),e++,S}function l(h,p,_,M,m,d,S){S.reversedDepth===!0&&(m=-m);let w=o(h,p,_,M,m,d);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function c(h,p,_,M,m,d){let S=o(h,p,_,M,m,d);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,p){t.length>1&&t.sort(h||c_),n.length>1&&n.sort(p||fu),s.length>1&&s.sort(p||fu)}function f(){for(let h=e,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function h_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function u_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new De};break;case"SpotLight":t={position:new I,direction:new I,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function d_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function p_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m_(i){let e=new u_,t=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new nt,a=new nt;function o(c){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,_=0,M=0,m=0,d=0,S=0,w=0,v=0,b=0,T=0,C=0,x=0,E=0,R=0;c.sort(p_);for(let z=0,X=c.length;z<X;z++){let N=c[z],G=N.color,q=N.intensity,K=N.distance,ne=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ai?ne=N.shadow.map.texture:ne=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*q,f+=G.g*q,h+=G.b*q;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],q);R++}else if(N.isSunLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,te=t.get(N);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=te,n.sunShadowMap[_]=ne;let Ae=Q.getViewportCount();for(let Ee=0;Ee<Ae;Ee++)n.sunShadowMatrix[M+Ee]=Q.getMatrix(Ee),n.sunShadowCascade[M+Ee]=Q._cascadeData[Ee];M+=Ae,_++}n.sun[p]=W,p++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,te=t.get(N);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=W,m++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(G).multiplyScalar(q),W.distance=K,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[S]=W;let Q=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,Q.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[S]=Q.matrix,N.castShadow){let te=t.get(N);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ne,C++}S++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=W,w++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let Q=N.shadow,te=t.get(N);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[d]=te,n.pointShadowMap[d]=ne,n.pointShadowMatrix[d]=N.shadow.matrix,T++}n.point[d]=W,d++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(q),W.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[v]=W,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let U=n.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==S||U.rectAreaLength!==w||U.hemiLength!==v||U.numSunShadows!==_||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==C||U.numSpotMaps!==x||U.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=d,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,U.sunLength=p,U.directionalLength=m,U.pointLength=d,U.spotLength=S,U.rectAreaLength=w,U.hemiLength=v,U.numSunShadows=_,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=C,U.numSpotMaps=x,U.numLightProbes=R,n.version=f_++)}function l(c,u){let f=0,h=0,p=0,_=0,M=0,m=0,d=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let v=c[S];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(v.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function mu(i){let e=new m_(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function g_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mu(i),e.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function M_(i,e,t){let n=new Hs,s=new Se,r=new Se,a=new gt,o=new wa,l=new Aa,c={},u=t.maxTextureSize,f={[ti]:Xt,[Xt]:ti,[qt]:qt},h=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:__,fragmentShader:x_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new dt;_.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ft(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let d=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===uh&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(tn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=d!==this.type;X&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=T.length;N<G;N++){let q=T[N],K=q.shadow;if(K===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ne=K.getFrameExtents();s.multiply(ne),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,K.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=W,K.map===null||X===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ls){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new bt(s.x,s.y,{format:ai,type:Lt,minFilter:It,magFilter:It,generateMipmaps:!1}),K.map.texture.name=q.name+".shadowMap",K.map.depthTexture=new Jn(s.x,s.y,nn),K.map.depthTexture.name=q.name+".shadowMapDepth",K.map.depthTexture.format=Mn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Rt,K.map.depthTexture.magFilter=Rt}else q.isPointLight?(K.map=new Do(s.x),K.map.depthTexture=new Ta(s.x,pn)):(K.map=new bt(s.x,s.y),K.map.depthTexture=new Jn(s.x,s.y,pn)),K.map.depthTexture.name=q.name+".shadowMap",K.map.depthTexture.format=Mn,this.type===nr?(K.map.depthTexture.compareFunction=W?Co:Ao,K.map.depthTexture.minFilter=It,K.map.depthTexture.magFilter=It):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Rt,K.map.depthTexture.magFilter=Rt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let Q=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();q.isPointLight!==!0&&K.updateMatrices(q,x);for(let te=0;te<Q;te++){let Ae=K.getCamera(te);if(q.isPointLight){let Ee=K.camera,st=K.matrix,He=q.distance||Ee.far;He!==Ee.far&&(Ee.far=He,Ee.updateProjectionMatrix()),vr.setFromMatrixPosition(q.matrixWorld),Ee.position.copy(vr),Ql.copy(Ee.position),Ql.add(v_[te]),Ee.up.copy(y_[te]),Ee.lookAt(Ql),Ee.updateMatrixWorld(),st.makeTranslation(-vr.x,-vr.y,-vr.z),gu.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(gu,Ee.coordinateSystem,Ee.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,te),i.clear();else{te===0&&(i.setRenderTarget(K.map),i.clear());let Ee=K.getViewport(te);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),z.viewport(a)}n=K.getFrustum(te),v(C,x,Ae,q,this.type)}K.isPointLightShadow!==!0&&this.type===ls&&S(K,x),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,U)};function S(T,C){let x=e.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new bt(s.x,s.y,{format:ai,type:Lt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,x,p,M,null)}function w(T,C,x,E){let R=null,U=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=R.uuid,X=C.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let G=N[X];G===void 0&&(G=R.clone(),N[X]=G,C.addEventListener("dispose",b)),R=G}if(R.visible=C.visible,R.wireframe=C.wireframe,E===ls?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=i.properties.get(R);z.light=x}return R}function v(T,C,x,E,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ls)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let X=e.update(T),N=T.material;if(Array.isArray(N)){let G=X.groups;for(let q=0,K=G.length;q<K;q++){let ne=G[q],W=N[ne.materialIndex];if(W&&W.visible){let Q=w(T,W,E,R);T.onBeforeShadow(i,T,C,x,X,Q,ne),i.renderBufferDirect(x,null,X,Q,T,ne),T.onAfterShadow(i,T,C,x,X,Q,ne)}}}else if(N.visible){let G=w(T,N,E,R);T.onBeforeShadow(i,T,C,x,X,G,null),i.renderBufferDirect(x,null,X,G,T,null),T.onAfterShadow(i,T,C,x,X,G,null)}}let z=T.children;for(let X=0,N=z.length;X<N;X++)v(z[X],C,x,E,R)}function b(T){T.target.removeEventListener("dispose",b);for(let x in c){let E=c[x],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function S_(i,e){function t(){let D=!1,oe=new gt,Z=null,le=new gt(0,0,0,0);return{setMask:function(fe){Z!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){D=fe},setClear:function(fe,ee,we,ye,at){at===!0&&(fe*=ye,ee*=ye,we*=ye),oe.set(fe,ee,we,ye),le.equals(oe)===!1&&(i.clearColor(fe,ee,we,ye),le.copy(oe))},reset:function(){D=!1,Z=null,le.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,Z=null,le=null,fe=null;return{setReversed:function(ee){if(oe!==ee){let we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;let ye=fe;fe=null,this.setClear(ye)}},getReversed:function(){return oe},setTest:function(ee){ee?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!D&&(i.depthMask(ee),Z=ee)},setFunc:function(ee){if(oe&&(ee=Wh[ee]),le!==ee){switch(ee){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){D=ee},setClear:function(ee){fe!==ee&&(fe=ee,oe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){D=!1,Z=null,le=null,fe=null,oe=!1}}}function s(){let D=!1,oe=null,Z=null,le=null,fe=null,ee=null,we=null,ye=null,at=null;return{setTest:function(Ze){D||(Ze?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!D&&(i.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,rn,gn){(Z!==Ze||le!==rn||fe!==gn)&&(i.stencilFunc(Ze,rn,gn),Z=Ze,le=rn,fe=gn)},setOp:function(Ze,rn,gn){(ee!==Ze||we!==rn||ye!==gn)&&(i.stencilOp(Ze,rn,gn),ee=Ze,we=rn,ye=gn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){at!==Ze&&(i.clearStencil(Ze),at=Ze)},reset:function(){D=!1,oe=null,Z=null,le=null,fe=null,ee=null,we=null,ye=null,at=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],M=null,m=!1,d=null,S=null,w=null,v=null,b=null,T=null,C=null,x=new De(0,0,0),E=0,R=!1,U=null,z=null,X=null,N=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ne=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=ne>=2);let Q=null,te={},Ae=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),st=new gt().fromArray(Ae),He=new gt().fromArray(Ee);function Ke(D,oe,Z,le){let fe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(D,ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<Z;we++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ee}let Y={};Y[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(qi),Ve(!1),pt(wl),j(i.CULL_FACE),Ye(tn);function j(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function _e(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Le(D,oe){return h[D]!==oe?(i.bindFramebuffer(D,oe),h[D]=oe,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(D,oe){let Z=_,le=!1;if(D){Z=p.get(oe),Z===void 0&&(Z=[],p.set(oe,Z));let fe=D.textures;if(Z.length!==fe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,we=fe.length;ee<we;ee++)Z[ee]=i.COLOR_ATTACHMENT0+ee;Z.length=fe.length,le=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,le=!0);le&&i.drawBuffers(Z)}function Oe(D){return M!==D?(i.useProgram(D),M=D,!0):!1}let Tt={[vi]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};Tt[mh]=i.MIN,Tt[gh]=i.MAX;let ke={[_h]:i.ZERO,[xh]:i.ONE,[vh]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[bh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[wh]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[Ch]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(D,oe,Z,le,fe,ee,we,ye,at,Ze){if(D===tn){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),D!==dh){if(D!==d||Ze!==R){if((S!==vi||b!==vi)&&(i.blendEquation(i.FUNC_ADD),S=vi,b=vi),Ze)switch(D){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",D);break}else switch(D){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Al:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",D);break}w=null,v=null,T=null,C=null,x.set(0,0,0),E=0,d=D,R=Ze}return}fe=fe||oe,ee=ee||Z,we=we||le,(oe!==S||fe!==b)&&(i.blendEquationSeparate(Tt[oe],Tt[fe]),S=oe,b=fe),(Z!==w||le!==v||ee!==T||we!==C)&&(i.blendFuncSeparate(ke[Z],ke[le],ke[ee],ke[we]),w=Z,v=le,T=ee,C=we),(ye.equals(x)===!1||at!==E)&&(i.blendColor(ye.r,ye.g,ye.b,at),x.copy(ye),E=at),d=D,R=!1}function rt(D,oe){D.side===qt?_e(i.CULL_FACE):j(i.CULL_FACE);let Z=D.side===Xt;oe&&(Z=!Z),Ve(Z),D.blending===ni&&D.transparent===!1?Ye(tn):Ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let le=D.stencilWrite;o.setTest(le),le&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function pt(D){D!==ch?(j(i.CULL_FACE),D!==z&&(D===wl?i.cullFace(i.BACK):D===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),z=D}function At(D){D!==X&&(K&&i.lineWidth(D),X=D)}function Ht(D,oe,Z){D?(j(i.POLYGON_OFFSET_FILL),(N!==oe||G!==Z)&&(N=oe,G=Z,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Z))):_e(i.POLYGON_OFFSET_FILL)}function mt(D){D?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function vt(D){D===void 0&&(D=i.TEXTURE0+q-1),Q!==D&&(i.activeTexture(D),Q=D)}function L(D,oe,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+q-1:Z=Q);let le=te[Z];le===void 0&&(le={type:void 0,texture:void 0},te[Z]=le),(le.type!==D||le.texture!==oe)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(D,oe||Y[D]),le.type=D,le.texture=oe)}function Nt(){let D=te[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function F(){try{i.texSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function se(){try{i.texStorage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function $(){try{i.texImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function J(){try{i.texImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function re(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function be(D,oe){f[D]!==oe&&(i.pixelStorei(D,oe),f[D]=oe)}function ce(D){st.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function ae(D){He.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Te(D,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let le=Z.get(D);le===void 0&&(le=i.getUniformBlockIndex(oe,D.name),Z.set(D,le))}function Re(D,oe){let le=c.get(oe).get(D);l.get(oe)!==le&&(i.uniformBlockBinding(oe,le,D.__bindingPointIndex),l.set(oe,le))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,te={},h={},p=new WeakMap,_=[],M=null,m=!1,d=null,S=null,w=null,v=null,b=null,T=null,C=null,x=new De(0,0,0),E=0,R=!1,U=null,z=null,X=null,N=null,G=null,st.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_e,bindFramebuffer:Le,drawBuffers:me,useProgram:Oe,setBlending:Ye,setMaterial:rt,setFlipSided:Ve,setCullFace:pt,setLineWidth:At,setPolygonOffset:Ht,setScissorTest:mt,activeTexture:vt,bindTexture:L,unbindTexture:Nt,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:be,getParameter:re,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:H,scissor:ce,viewport:ae,reset:Ne}}function b_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,f=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return _?new OffscreenCanvas(A,g):Zi("canvas")}function m(A,g,F){let k=1,H=je(A);if((H.width>F||H.height>F)&&(k=F/Math.max(H.width,H.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ie=Math.floor(k*H.width),se=Math.floor(k*H.height);h===void 0&&(h=M(ie,se));let $=g?M(ie,se):h;return $.width=ie,$.height=se,$.getContext("2d").drawImage(A,0,0,ie,se),Ce("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+ie+"x"+se+")."),$}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),A;return A}function d(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,g,F,k,H,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;k&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8),F===i.UNSIGNED_SHORT&&se&&($=se.R16_EXT),F===i.SHORT&&se&&($=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),g===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8),F===i.UNSIGNED_SHORT&&se&&($=se.RG16_EXT),F===i.SHORT&&se&&($=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&se&&($=se.RGB16_EXT),F===i.SHORT&&se&&($=se.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let J=ie?Ds:Be.getTransfer(H);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=J===$e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&se&&($=se.RGBA16_EXT),F===i.SHORT&&se&&($=se.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(A,g){let F;return A?g===null||g===pn||g===hs?F=i.DEPTH24_STENCIL8:g===nn?F=i.DEPTH32F_STENCIL8:g===cs&&(F=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pn||g===hs?F=i.DEPTH_COMPONENT24:g===nn?F=i.DEPTH_COMPONENT32F:g===cs&&(F=i.DEPTH_COMPONENT16),F}function T(A,g){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==It?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function C(A){let g=A.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(A){let g=A.target;g.removeEventListener("dispose",x),U(g)}function E(A){let g=n.get(A);if(g.__webglInit===void 0)return;let F=A.source,k=p.get(F);if(k){let H=k[g.__cacheKey];H.usedTimes--,H.usedTimes===0&&R(A),Object.keys(k).length===0&&p.delete(F)}n.remove(A)}function R(A){let g=n.get(A);i.deleteTexture(g.__webglTexture);let F=A.source,k=p.get(F);delete k[g.__cacheKey],a.memory.textures--}function U(A){let g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let H=0;H<g.__webglFramebuffer[k].length;H++)i.deleteFramebuffer(g.__webglFramebuffer[k][H]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=A.textures;for(let k=0,H=F.length;k<H;k++){let ie=n.get(F[k]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(A)}let z=0;function X(){z=0}function N(){return z}function G(A){z=A}function q(){let A=z;return A>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function K(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ne(A,g){let F=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let k=A.image;if(k===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,A,g);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function W(A,g){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,g);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function Q(A,g){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function te(A,g){let F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Le(F,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let Ae={[fa]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},Ee={[Rt]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},st={[Fh]:i.NEVER,[Gh]:i.ALWAYS,[Oh]:i.LESS,[Ao]:i.LEQUAL,[Bh]:i.EQUAL,[Co]:i.GEQUAL,[zh]:i.GREATER,[kh]:i.NOTEQUAL};function He(A,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===It||g.magFilter===Va||g.magFilter===hr||g.magFilter===si||g.minFilter===It||g.minFilter===Va||g.minFilter===hr||g.minFilter===si)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ee[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,st[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==hr&&g.minFilter!==si||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",C));let k=g.source,H=p.get(k);H===void 0&&(H={},p.set(k,H));let ie=K(g);if(ie!==A.__cacheKey){H[ie]===void 0&&(H[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),H[ie].usedTimes++;let se=H[A.__cacheKey];se!==void 0&&(H[A.__cacheKey].usedTimes--,se.usedTimes===0&&R(g)),A.__cacheKey=ie,A.__webglTexture=H[ie].texture}return F}function Y(A,g,F){return Math.floor(Math.floor(A/F)/g)}function j(A,g,F,k){let ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{ie.sort((be,ce)=>be.start-ce.start);let se=0;for(let be=1;be<ie.length;be++){let ce=ie[se],ae=ie[be],Te=ce.start+ce.count,Re=Y(ae.start,g.width,4),Ne=Y(ce.start,g.width,4);ae.start<=Te+1&&Re===Ne&&Y(ae.start+ae.count-1,g.width,4)===Re?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let be=0,ce=ie.length;be<ce;be++){let ae=ie[be],Te=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Ne=Te%g.width,D=Math.floor(Te/g.width),oe=Re,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ne,D,oe,Z,F,k,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function _e(A,g,F){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);let H=Ke(A,g),ie=g.source;t.bindTexture(k,A.__webglTexture,i.TEXTURE0+F);let se=n.get(ie);if(ie.version!==se.__version||H===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Z=Be.getPrimaries(Be.workingColorSpace),le=g.colorSpace===zn?null:Be.getPrimaries(g.colorSpace),fe=g.colorSpace===zn||Z===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,s.maxTextureSize);J=Nt(g,J);let re=r.convert(g.format,g.colorSpace),be=r.convert(g.type),ce=v(g.internalFormat,re,be,g.normalized,g.colorSpace,g.isVideoTexture);He(k,g);let ae,Te=g.mipmaps,Re=g.isVideoTexture!==!0,Ne=se.__version===void 0||H===!0,D=ie.dataReady,oe=T(g,J);if(g.isDepthTexture)ce=b(g.format===ri,g.type),Ne&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,re,be,null));else if(g.isDataTexture)if(Te.length>0){Re&&Ne&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Te[0].width,Te[0].height);for(let Z=0,le=Te.length;Z<le;Z++)ae=Te[Z],Re?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,be,ae.data):t.texImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,be,ae.data);g.generateMipmaps=!1}else Re?(Ne&&t.texStorage2D(i.TEXTURE_2D,oe,ce,J.width,J.height),D&&j(g,J,re,be)):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,re,be,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,Te[0].width,Te[0].height,J.depth);for(let Z=0,le=Te.length;Z<le;Z++)if(ae=Te[Z],g.format!==sn)if(re!==null)if(Re){if(D)if(g.layerUpdates.size>0){let fe=Yl(ae.width,ae.height,g.format,g.type);for(let ee of g.layerUpdates){let we=ae.data.subarray(ee*fe/ae.data.BYTES_PER_ELEMENT,(ee+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ee,ae.width,ae.height,1,re,we)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,J.depth,0,ae.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,re,be,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,J.depth,0,re,be,ae.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Re&&Ne&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Te[0].width,Te[0].height);for(let Z=0,le=Te.length;Z<le;Z++)ae=Te[Z],g.format!==sn?re!==null?Re?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,be,ae.data):t.texImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,be,ae.data)}else if(g.isDataArrayTexture)if(Re){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),D)if(g.layerUpdates.size>0){let Z=Yl(J.width,J.height,g.format,g.type);for(let le of g.layerUpdates){let fe=J.data.subarray(le*Z/J.data.BYTES_PER_ELEMENT,(le+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,re,be,fe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,be,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,re,be,J.data);else if(g.isData3DTexture)Re?(Ne&&t.texStorage3D(i.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,be,J.data)):t.texImage3D(i.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,re,be,J.data);else if(g.isFramebufferTexture){if(Ne)if(Re)t.texStorage2D(i.TEXTURE_2D,oe,ce,J.width,J.height);else{let Z=J.width,le=J.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,ce,Z,le,0,re,be,null),Z>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(g),Z.onpaint=le=>{let fe=le.changedElements;for(let ee of f)fe.includes(ee.image)&&(ee.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let fe=i.RGBA,ee=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ee,we,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&Ne){let Z=je(Te[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,Z.width,Z.height)}for(let Z=0,le=Te.length;Z<le;Z++)ae=Te[Z],Re?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,re,be,ae):t.texImage2D(i.TEXTURE_2D,Z,ce,re,be,ae);g.generateMipmaps=!1}else if(Re){if(Ne){let Z=je(J);t.texStorage2D(i.TEXTURE_2D,oe,ce,Z.width,Z.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,be,J)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,be,J);d(g)&&S(k),se.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Le(A,g,F){if(g.image.length!==6)return;let k=Ke(A,g),H=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let ie=n.get(H);if(H.version!==ie.__version||k===!0){t.activeTexture(i.TEXTURE0+F);let se=Be.getPrimaries(Be.workingColorSpace),$=g.colorSpace===zn?null:Be.getPrimaries(g.colorSpace),J=g.colorSpace===zn||se===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let re=g.isCompressedTexture||g.image[0].isCompressedTexture,be=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!re&&!be?ce[ee]=m(g.image[ee],!0,s.maxCubemapSize):ce[ee]=be?g.image[ee].image:g.image[ee],ce[ee]=Nt(g,ce[ee]);let ae=ce[0],Te=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),Ne=v(g.internalFormat,Te,Re,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,oe=ie.__version===void 0||k===!0,Z=H.dataReady,le=T(g,ae);He(i.TEXTURE_CUBE_MAP,g);let fe;if(re){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ne,ae.width,ae.height);for(let ee=0;ee<6;ee++){fe=ce[ee].mipmaps;for(let we=0;we<fe.length;we++){let ye=fe[we];g.format!==sn?Te!==null?D?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Ne,ye.width,ye.height,0,ye.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,ye.width,ye.height,Te,Re,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Ne,ye.width,ye.height,0,Te,Re,ye.data)}}}else{if(fe=g.mipmaps,D&&oe){fe.length>0&&le++;let ee=je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Te,Re,ce[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ce[ee].width,ce[ee].height,0,Te,Re,ce[ee].data);for(let we=0;we<fe.length;we++){let at=fe[we].image[ee].image;D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,at.width,at.height,Te,Re,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Ne,at.width,at.height,0,Te,Re,at.data)}}else{D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,Re,ce[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,Te,Re,ce[ee]);for(let we=0;we<fe.length;we++){let ye=fe[we];D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Te,Re,ye.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Ne,Te,Re,ye.image[ee])}}}d(g)&&S(i.TEXTURE_CUBE_MAP),ie.__version=H.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function me(A,g,F,k,H,ie){let se=r.convert(F.format,F.colorSpace),$=r.convert(F.type),J=v(F.internalFormat,se,$,F.normalized,F.colorSpace),re=n.get(g),be=n.get(F);if(be.__renderTarget=g,!re.__hasExternalTextures){let ce=Math.max(1,g.width>>ie),ae=Math.max(1,g.height>>ie);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,ie,J,ce,ae,g.depth,0,se,$,null):t.texImage2D(H,ie,J,ce,ae,0,se,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),vt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,H,be.__webglTexture,0,mt(g)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,H,be.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){let k=g.depthTexture,H=k&&k.isDepthTexture?k.type:null,ie=b(g.stencilBuffer,H),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(g),ie,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,A)}else{let k=g.textures;for(let H=0;H<k.length;H++){let ie=k[H],se=r.convert(ie.format,ie.colorSpace),$=r.convert(ie.type),J=v(ie.internalFormat,se,$,ie.normalized,ie.colorSpace);vt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(g),J,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,g,F){let k=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(g.depthTexture);if(H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(H.__webglInit===void 0&&(H.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),He(i.TEXTURE_CUBE_MAP,g.depthTexture);let re=r.convert(g.depthTexture.format),be=r.convert(g.depthTexture.type),ce;g.depthTexture.format===Mn?ce=i.DEPTH_COMPONENT24:g.depthTexture.format===ri&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,g.width,g.height,0,re,be,null)}}else ne(g.depthTexture,0);let ie=H.__webglTexture,se=mt(g),$=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,J=g.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Mn)vt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,ie,0);else if(g.depthTexture.format===ri)vt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(A){let g=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){let H=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",H)};k.addEventListener("dispose",H),g.__depthDisposeCallback=H}g.__boundDepthTexture=k}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Tt(g.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?Tt(g.__webglFramebuffer[0],A,0):Tt(g.__webglFramebuffer,A,0)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),Oe(g.__webglDepthbuffer[k],A,!1);else{let H=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,ie)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Oe(g.__webglDepthbuffer,A,!1);else{let H=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(A,g,F){let k=n.get(A);g!==void 0&&me(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ke(A)}function rt(A){let g=A.texture,F=n.get(A),k=n.get(g);A.addEventListener("dispose",x);let H=A.textures,ie=A.isWebGLCubeRenderTarget===!0,se=H.length>1;if(se||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[$]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[$][J]=i.createFramebuffer()}else F.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[$]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(se)for(let $=0,J=H.length;$<J;$++){let re=n.get(H[$]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let $=0;$<H.length;$++){let J=H[$];F.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let re=r.convert(J.format,J.colorSpace),be=r.convert(J.type),ce=v(J.internalFormat,re,be,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ae=mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,F.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),He(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[$][J],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else me(F.__webglFramebuffer[$],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let $=0,J=H.length;$<J;$++){let re=H[$],be=n.get(re),ce=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,be.__webglTexture),He(ce,re),me(F.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+$,ce,0),d(re)&&S(ce)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,k.__webglTexture),He($,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[J],A,g,i.COLOR_ATTACHMENT0,$,J);else me(F.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,$,0);d(g)&&S($),t.unbindTexture()}A.depthBuffer&&ke(A)}function Ve(A){let g=A.textures;for(let F=0,k=g.length;F<k;F++){let H=g[F];if(d(H)){let ie=w(A),se=n.get(H).__webglTexture;t.bindTexture(ie,se),S(ie),t.unbindTexture()}}}let pt=[],At=[];function Ht(A){if(A.samples>0){if(vt(A)===!1){let g=A.textures,F=A.width,k=A.height,H=i.COLOR_BUFFER_BIT,ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(A),$=g.length>1;if($)for(let re=0;re<g.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let be=n.get(g[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,H,i.NEAREST),l===!0&&(pt.length=0,At.length=0,pt.push(i.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pt.push(ie),At.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let re=0;re<g.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let be=n.get(g[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(A){let g=a.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function Nt(A,g){let F=A.colorSpace,k=A.format,H=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Is&&F!==zn&&(Be.getTransfer(F)===$e?(k!==sn||H!==Zt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),g}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Ye,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function T_(i,e){function t(n,s=zn){let r,a=Be.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Nl)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===pn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Lt)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===sn)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===ai)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ja||n===ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===mr||n===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===to)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===io)return r.COMPRESSED_R11_EAC;if(n===so)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mr)return r.COMPRESSED_RG11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===So||n===bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Eo||n===gr||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function C_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Xl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,w,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function c(v,b){let T=s[v.id];T===void 0&&(m(v),T=u(v),s[v.id]=T,v.addEventListener("dispose",S));let C=b.program;n.updateUBOMapping(v,C);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let b=f();v.__bindingPointIndex=b;let T=i.createBuffer(),C=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=s[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,E=T.length;x<E;x++){let R=T[x];if(Array.isArray(R))for(let U=0,z=R.length;U<z;U++)p(R[U],x,U,C);else p(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,b,T,C){if(M(v,b,T,C)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let U=0;U<E.length;U++){let z=E[U],X=d(z);_(z,v.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function M(v,b,T,C){let x=v.value,E=b+"_"+T;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let R=C[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){let b=v.uniforms,T=0,C=16;for(let E=0,R=b.length;E<R;E++){let U=Array.isArray(b[E])?b[E]:[b[E]];for(let z=0,X=U.length;z<X;z++){let N=U[z],G=Array.isArray(N.value)?N.value:[N.value];for(let q=0,K=G.length;q<K;q++){let ne=G[q],W=d(ne),Q=T%C,te=Q%W.boundary,Ae=Q+te;T+=te,Ae!==0&&C-Ae<W.storage&&(T+=C-Ae),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=W.storage}}}let x=T%C;return x>0&&(T+=C-x),v.__size=T,v.__cache={},this}function d(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",v),b}function S(v){let b=v.target;b.removeEventListener("dispose",S);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}function I_(){return Rn===null&&(Rn=new Vs(P_,16,16,ai,Lt),Rn.name="DFG_LUT",Rn.minFilter=It,Rn.magFilter=It,Rn.wrapS=yn,Rn.wrapT=yn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var Hf,Wf,Yf,$f,Kf,qf,Zf,Jf,jf,Qf,ep,tp,np,ip,sp,rp,ap,op,lp,cp,hp,up,dp,fp,pp,mp,gp,_p,xp,vp,yp,Mp,Sp,bp,Tp,Ep,wp,Ap,Cp,Rp,Pp,Ip,Dp,Lp,Np,Up,Fp,Op,Bp,zp,kp,Gp,Vp,Xp,Hp,Wp,Yp,$p,Kp,qp,Zp,Jp,jp,Qp,em,tm,nm,im,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,xm,vm,ym,Mm,Sm,bm,Tm,Em,wm,Am,Cm,Rm,Pm,Im,Dm,Lm,Nm,Um,Fm,Om,Bm,zm,km,Gm,Vm,Xm,Hm,Wm,Ym,$m,Km,qm,Zm,Jm,jm,Qm,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,vg,yg,Mg,Sg,bg,Fe,he,Pn,Ro,Tg,xu,ds,Pg,Ig,Dg,xr,Zh,Kl,ql,Zl,Jl,Lg,bi,Io,Do,Hg,vu,ec,yu,Mu,Su,eu,tu,nu,iu,su,tc,nc,ic,jl,fs,L0,N0,ou,B0,Po,H0,W0,$0,q0,J0,Q0,t_,r_,rc,ac,f_,__,x_,v_,y_,gu,vr,Ql,E_,w_,oc,lc,A_,bu,P_,Rn,Lo,mn=xt(()=>{$l();$l();Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Hf,alphahash_pars_fragment:Wf,alphamap_fragment:Yf,alphamap_pars_fragment:$f,alphatest_fragment:Kf,alphatest_pars_fragment:qf,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Fp,envmap_vertex:wp,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Dp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Np,lights_pars_begin:Up,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:kp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Xp,lights_fragment_maps:Hp,lights_fragment_end:Wp,lightprobes_pars_fragment:Yp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:ym,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:bm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Am,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Dm,skinnormal_vertex:Lm,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:km,uv_pars_vertex:Gm,uv_vertex:Vm,worldpos_vertex:Xm,background_vert:Hm,background_frag:Wm,backgroundCube_vert:Ym,backgroundCube_frag:$m,cube_vert:Km,cube_frag:qm,depth_vert:Zm,depth_frag:Jm,distance_vert:jm,distance_frag:Qm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:xg,points_frag:vg,shadow_vert:yg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:bg},he={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Pn={basic:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new De(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:kt([he.points,he.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:kt([he.common,he.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:kt([he.sprite,he.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:kt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:kt([he.lights,he.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Pn.physical={uniforms:kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};Ro={r:0,b:0,g:0},Tg=new nt,xu=new Ie;xu.set(-1,0,0,0,1,0,0,0,1);ds=4,Pg=6,Ig=20,Dg=256,xr=new xi,Zh=new De,Kl=null,ql=0,Zl=0,Jl=!1,Lg=new I,bi=new I,Io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lg}=r;Kl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,ql,Zl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Lt,format:sn,colorSpace:Is,depthBuffer:!1},s=Jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ng(r)),this._blurMaterial=Fg(r,e,t),this._ggxMaterial=Ug(r,e,t)}return s}_compileMaterial(e){let t=new ft(new dt,e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,n,s,r){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Zh),f.toneMapping=fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new rs,new An({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,d=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,d=!0):(m.color.copy(Zh),d=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let b=this._cubeSize;us(s,v*b,w>2?b:0,b,b),f.setRenderTarget(s),d&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ii||e.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:_}=this,M=this._sizeLods[n],m=3*M*(n>_-ds?n-_+ds:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,us(r,m,d,3*M,2*M),s.setRenderTarget(r),s.render(o,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,us(e,m,d,3*M,2*M),s.setRenderTarget(e),s.render(o,xr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-ds?s-this._lodMax+ds:0),h=4*(this._cubeSize-u);us(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,xr)}};Do=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:tn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=It),new Ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};Hg={[ir]:"LINEAR_TONE_MAPPING",[sr]:"REINHARD_TONE_MAPPING",[rr]:"CINEON_TONE_MAPPING",[yi]:"ACES_FILMIC_TONE_MAPPING",[or]:"AGX_TONE_MAPPING",[lr]:"NEUTRAL_TONE_MAPPING",[ar]:"CUSTOM_TONE_MAPPING"};vu=new zt,ec=new Jn(1,1),yu=new Us,Mu=new xa,Su=new Ws,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}},nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I0(t.type)}},ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},jl=/(\w+)(\])?(\[|\.)?/g;fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);D0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};L0=37297,N0=0;ou=new Ie;B0={[ir]:"Linear",[sr]:"Reinhard",[rr]:"Cineon",[yi]:"ACESFilmic",[or]:"AgX",[lr]:"Neutral",[ar]:"Custom"};Po=new I;H0=/^[ \t]*#include +<([\w\d./]+)>/gm;W0=new Map;$0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;q0={[nr]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};J0={[ii]:"ENVMAP_TYPE_CUBE",[Mi]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE_UV"};Q0={[Mi]:"ENVMAP_MODE_REFRACTION"};t_={[Il]:"ENVMAP_BLENDING_MULTIPLY",[Ph]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};r_=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ac(e),t.set(e,n)),n}},ac=class{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}};f_=0;__=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],y_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],gu=new nt,vr=new I,Ql=new I;E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ys(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qe({vertexShader:E_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends Sn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new oc,d={},S=t.getContextAttributes(),w=null,v=null,b=[],T=[],C=new Se,x=null,E=null,R=new Bt;R.viewport=new gt;let U=new Bt;U.viewport=new gt;let z=[R,U],X=new za,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=b[Y];return j===void 0&&(j=new es,b[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=b[Y];return j===void 0&&(j=new es,b[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=b[Y];return j===void 0&&(j=new es,b[Y]=j),j.getHandSpace()};function q(Y){let j=T.indexOf(Y.inputSource);if(j===-1)return;let _e=b[j];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<b.length;Y++){let j=T[Y];j!==null&&(T[Y]=null,b[Y].disconnect(j))}N=null,G=null,m.reset();for(let Y in d)delete d[Y];if(e.setRenderTarget(w),p=null,h=null,f=null,s=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?ri:Mn,Le=S.stencil?hs:pn);let Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Oe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new bt(h.textureWidth,h.textureHeight,{format:sn,type:Zt,depthTexture:new Jn(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new bt(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let j=0;j<Y.removed.length;j++){let _e=Y.removed[j],Le=T.indexOf(_e);Le>=0&&(T[Le]=null,b[Le].disconnect(_e))}for(let j=0;j<Y.added.length;j++){let _e=Y.added[j],Le=T.indexOf(_e);if(Le===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=T.length){T.push(_e),Le=Oe;break}else if(T[Oe]===null){T[Oe]=_e,Le=Oe;break}if(Le===-1)break}let me=b[Le];me&&me.connect(_e)}}let W=new I,Q=new I;function te(Y,j,_e){W.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);let Le=W.distanceTo(Q),me=j.projectionMatrix.elements,Oe=_e.projectionMatrix.elements,Tt=me[14]/(me[10]-1),ke=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],rt=(me[9]-1)/me[5],Ve=(me[8]-1)/me[0],pt=(Oe[8]+1)/Oe[0],At=Tt*Ve,Ht=Tt*pt,mt=Le/(-Ve+pt),vt=mt*-Ve;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(vt),Y.translateZ(mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let L=Tt+mt,Nt=ke+mt,je=At-vt,A=Ht+(Le-vt),g=Ye*ke/Nt*L,F=rt*ke/Nt*L;Y.projectionMatrix.makePerspective(je,A,g,F,L,Nt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ae(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),X.near=U.near=R.near=j,X.far=U.far=R.far=_e,(N!==X.near||G!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,G=X.far),X.layers.mask=Y.layers.mask|6,R.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let Le=Y.parent,me=X.cameras;Ae(X,Le);for(let Oe=0;Oe<me.length;Oe++)Ae(me[Oe],Le);me.length===2?te(X,R,U):X.projectionMatrix.copy(R.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ee(Y,X,Le)};function Ee(Y,j,_e){_e===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ji*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(Y){return d[Y]};let st=null;function He(Y,j){if(u=j.getViewerPose(c||a),_=j,u!==null){let _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Le=!1;_e.length!==X.cameras.length&&(X.cameras.length=0,Le=!0);for(let ke=0;ke<_e.length;ke++){let Ye=_e[ke],rt=null;if(p!==null)rt=p.getViewport(Ye);else{let pt=f.getViewSubImage(h,Ye);rt=pt.viewport,ke===0&&(e.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(v))}let Ve=z[ke];Ve===void 0&&(Ve=new Bt,Ve.layers.enable(ke),Ve.viewport=new gt,z[ke]=Ve),Ve.matrix.fromArray(Ye.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ye.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(rt.x,rt.y,rt.width,rt.height),ke===0&&(X.matrix.copy(Ve.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Le===!0&&X.cameras.push(Ve)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let ke=f.getDepthInformation(_e[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,s.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let ke=0;ke<_e.length;ke++){let Ye=_e[ke].camera;if(Ye){let rt=d[Ye];rt||(rt=new Ys,d[Ye]=rt);let Ve=f.getCameraImage(Ye);rt.sourceTexture=Ve}}}}for(let _e=0;_e<b.length;_e++){let Le=T[_e],me=b[_e];Le!==null&&me!==void 0&&me.update(Le,j,c||a)}st&&st(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let Ke=new _u;Ke.setAnimationLoop(He),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}},A_=new nt,bu=new Ie;bu.set(-1,0,0,0,1,0,0,0,1);P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;Lo=class{constructor(e={}){let{canvas:t=Vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Zt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=p,m=new Set([qa,Ka,$a]),d=new Set([Zt,pn,cs,hs,Ha,Wa]),S=new Uint32Array(4),w=new Int32Array(4),v=new I,b=null,T=null,C=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,z=null,X=null,N=null,G=null;this._outputColorSpace=St;let q=0,K=0,ne=null,W=-1,Q=null,te=new gt,Ae=new gt,Ee=null,st=new De(0),He=0,Ke=t.width,Y=t.height,j=1,_e=null,Le=null,me=new gt(0,0,Ke,Y),Oe=new gt(0,0,Ke,Y),Tt=!1,ke=new Hs,Ye=!1,rt=!1,Ve=new nt,pt=new I,At=new gt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function vt(){return ne===null?j:1}let L=n;function Nt(y,P){return t.getContext(y,P)}let je,A,g,F,k,H,ie,se,$,J,re,be,ce,ae,Te,Re,Ne,D,oe,Z,le,fe,ee;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",rn,!1),L===null){let P="webgl2";if(L=Nt(P,y),L===null)throw Nt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(y){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Pe("WebGLRenderer: "+y.message),y}function we(){je=new Bg(L),je.init(),le=new T_(L,je),A=new Cg(L,je,e,le),g=new S_(L,je),A.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),X=L.createFramebuffer(),N=L.createFramebuffer(),G=L.createFramebuffer(),F=new Gg(L),k=new l_,H=new b_(L,je,g,k,A,le,F),ie=new Og(R),se=new Xf(L),fe=new wg(L,se),$=new zg(L,se,F,fe),J=new Xg(L,$,se,fe,F),D=new Vg(L,A,H),Te=new Rg(k),re=new o_(R,ie,je,A,fe,Te),be=new C_(R,k),ce=new h_,ae=new g_(je),Ne=new Eg(R,ie,g,J,_,l),Re=new M_(R,J,A),ee=new R_(L,F,A,g),oe=new Ag(L,je,F),Z=new kg(L,je,F),F.programs=re.programs,R.capabilities=A,R.extensions=je,R.properties=k,R.renderLists=ce,R.shadowMap=Re,R.state=g,R.info=F}M!==Zt&&(E=new Wg(M,t.width,t.height,o,s,r));let ye=new lc(R,L);this.xr=ye,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(Ke,Y,!1))},this.getSize=function(y){return y.set(Ke,Y)},this.setSize=function(y,P,V=!0){if(ye.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=y,Y=P,t.width=Math.floor(y*j),t.height=Math.floor(P*j),V===!0&&(t.style.width=y+"px",t.style.height=P+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(Ke*j,Y*j).floor()},this.setDrawingBufferSize=function(y,P,V){Ke=y,Y=P,j=V,t.width=Math.floor(y*V),t.height=Math.floor(P*V),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(M===Zt){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,P,V,O){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,P,V,O),g.viewport(te.copy(me).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,P,V,O){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,P,V,O),g.scissor(Ae.copy(Oe).multiplyScalar(j).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(y){g.setScissorTest(Tt=y)},this.setOpaqueSort=function(y){_e=y},this.setTransparentSort=function(y){Le=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,V=!0){let O=0;if(y){let B=!1;if(ne!==null){let de=ne.texture.format;B=m.has(de)}if(B){let de=ne.texture.type,ge=d.has(de),ue=Ne.getClearColor(),xe=Ne.getClearAlpha(),Me=ue.r,Ue=ue.g,Ge=ue.b;ge?(S[0]=Me,S[1]=Ue,S[2]=Ge,S[3]=xe,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=Me,w[1]=Ue,w[2]=Ge,w[3]=xe,L.clearBufferiv(L.COLOR,0,w))}else O|=L.COLOR_BUFFER_BIT}P&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ne.dispose(),ce.dispose(),ae.dispose(),k.dispose(),ie.dispose(),J.dispose(),fe.dispose(),ee.dispose(),re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",bc),ye.removeEventListener("sessionend",Tc),ui.stop()};function at(y){y.preventDefault(),Ns("WebGLRenderer: Context Lost."),U=!0}function Ze(){Ns("WebGLRenderer: Context Restored."),U=!1;let y=F.autoReset,P=Re.enabled,V=Re.autoUpdate,O=Re.needsUpdate,B=Re.type;we(),F.autoReset=y,Re.enabled=P,Re.autoUpdate=V,Re.needsUpdate=O,Re.type=B}function rn(y){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function gn(y){let P=y.target;P.removeEventListener("dispose",gn),Ud(P)}function Ud(y){Fd(y),k.remove(y)}function Fd(y){let P=k.get(y).programs;P!==void 0&&(P.forEach(function(V){re.releaseProgram(V)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,V,O,B,de){P===null&&(P=Ht);let ge=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=zd(y,P,V,O,B);g.setMaterial(O,ge);let xe=V.index,Me=1;if(O.wireframe===!0){if(xe=$.getWireframeAttribute(V),xe===void 0)return;Me=2}let Ue=V.drawRange,Ge=V.attributes.position,ve=Ue.start*Me,Je=(Ue.start+Ue.count)*Me;de!==null&&(ve=Math.max(ve,de.start*Me),Je=Math.min(Je,(de.start+de.count)*Me)),xe!==null?(ve=Math.max(ve,0),Je=Math.min(Je,xe.count)):Ge!=null&&(ve=Math.max(ve,0),Je=Math.min(Je,Ge.count));let yt=Je-ve;if(yt<0||yt===1/0)return;fe.setup(B,O,ue,V,xe);let ht,tt=oe;if(xe!==null&&(ht=se.get(xe),tt=Z,tt.setIndex(ht)),B.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*vt()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(B.isLine){let Ut=O.linewidth;Ut===void 0&&(Ut=1),g.setLineWidth(Ut*vt()),B.isLineSegments?tt.setMode(L.LINES):B.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else B.isPoints?tt.setMode(L.POINTS):B.isSprite&&tt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(je.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ut=B._multiDrawStarts,pe=B._multiDrawCounts,Gt=B._multiDrawCount,We=xe?se.get(xe).bytesPerElement:1,jt=k.get(O).currentProgram.getUniforms();for(let _n=0;_n<Gt;_n++)jt.setValue(L,"_gl_DrawID",_n),tt.render(Ut[_n]/We,pe[_n])}else if(B.isInstancedMesh)tt.renderInstances(ve,yt,B.count);else if(V.isInstancedBufferGeometry){let Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,Ut);tt.renderInstances(ve,yt,pe)}else tt.render(ve,yt)};function Sc(y,P,V,O){z!==null&&y.isNodeMaterial&&z.setObject(O,y),Ye===!0&&Te.setState(y,V,!1),y.transparent===!0&&y.side===qt&&y.forceSinglePass===!1?(y.side=Xt,y.needsUpdate=!0,wr(y,P,O),y.side=ti,y.needsUpdate=!0,wr(y,P,O),y.side=qt):wr(y,P,O)}this.compile=function(y,P,V=null){V===null&&(V=y),z!==null&&z.renderStart(y,P,V),T=ae.get(V),T.init(P),x.push(T),V.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),y!==V&&y.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),rt=this.localClippingEnabled,Ye=Te.init(this.clippingPlanes,rt),Ye===!0&&Te.setGlobalState(this.clippingPlanes,P),z!==null&&Re.render(T.state.shadowsArray,V,P);let O=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let de=B.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){let ue=de[ge];Sc(ue,V,P,B),O.add(ue)}else Sc(de,V,P,B),O.add(de)}),T=x.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(y,P,V=null){let O=this.compile(y,P,V);return new Promise(B=>{function de(){if(O.forEach(function(ge){let xe=k.get(ge).currentProgram;(xe===void 0||xe.isReady())&&O.delete(ge)}),O.size===0){B(y);return}setTimeout(de,10)}je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ko=null;function Od(y){Ko&&Ko(y)}function bc(){ui.stop()}function Tc(){ui.start()}let ui=new _u;ui.setAnimationLoop(Od),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(y){Ko=y,ye.setAnimationLoop(y),y===null?ui.stop():ui.start()},ye.addEventListener("sessionstart",bc),ye.addEventListener("sessionend",Tc),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(y,P);let V=ye.enabled===!0&&ye.isPresenting===!0,O=E!==null&&(ne===null||V)&&E.begin(R,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(P),P=ye.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,P,ne),T=ae.get(y,x.length),T.init(P),T.state.textureUnits=H.getTextureUnits(),x.push(T),Ve.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ke.setFromProjectionMatrix(Ve,un,P.reversedDepth),rt=this.localClippingEnabled,Ye=Te.init(this.clippingPlanes,rt),b=ce.get(y,C.length),b.init(),C.push(b),ye.enabled===!0&&ye.isPresenting===!0){let ge=R.xr.getDepthSensingMesh();ge!==null&&qo(ge,P,-1/0,R.sortObjects)}qo(y,P,0,R.sortObjects),b.finish(),z!==null&&z.updateLights(T.state.lightsArray),R.sortObjects===!0&&b.sort(_e,Le),mt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,mt&&Ne.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Te.beginShadows();let B=T.state.shadowsArray;if(Re.render(B,y,P),Ye===!0&&Te.endShadows(),(O&&E.hasRenderPass())===!1){let ge=b.opaque,ue=b.transmissive;if(T.setupLights(),P.isArrayCamera){let xe=P.cameras;if(ue.length>0)for(let Me=0,Ue=xe.length;Me<Ue;Me++){let Ge=xe[Me];wc(ge,ue,y,Ge)}mt&&Ne.render(y);for(let Me=0,Ue=xe.length;Me<Ue;Me++){let Ge=xe[Me];Ec(b,y,Ge,Ge.viewport)}}else ue.length>0&&wc(ge,ue,y,P),mt&&Ne.render(y),Ec(b,y,P)}ne!==null&&K===0&&(H.updateMultisampleRenderTarget(ne),H.updateRenderTargetMipmap(ne)),O&&E.end(R),y.isScene===!0&&y.onAfterRender(R,y,P),fe.resetDefaultState(),W=-1,Q=null,x.pop(),x.length>0?(T=x[x.length-1],H.setTextureUnits(T.state.textureUnits),Ye===!0&&Te.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,z!==null&&z.renderEnd()};function qo(y,P,V,O){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ke)){O&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ve);let ge=J.update(y),ue=y.material;ue.visible&&b.push(y,ge,ue,V,At.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ke))){let ge=J.update(y),ue=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),At.copy(ge.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(Ve)),Array.isArray(ue)){let xe=ge.groups;for(let Me=0,Ue=xe.length;Me<Ue;Me++){let Ge=xe[Me],ve=ue[Ge.materialIndex];ve&&ve.visible&&b.push(y,ge,ve,V,At.z,Ge,P)}}else ue.visible&&b.push(y,ge,ue,V,At.z,null,P)}}let de=y.children;for(let ge=0,ue=de.length;ge<ue;ge++)qo(de[ge],P,V,O)}function Ec(y,P,V,O){let{opaque:B,transmissive:de,transparent:ge}=y;T.setupLightsView(V),Ye===!0&&Te.setGlobalState(R.clippingPlanes,V),O&&g.viewport(te.copy(O)),B.length>0&&Er(B,P,V),de.length>0&&Er(de,P,V),ge.length>0&&Er(ge,P,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function wc(y,P,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let ve=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new bt(1,1,{generateMipmaps:!0,type:ve?Lt:Zt,minFilter:si,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}let de=T.state.transmissionRenderTarget[O.id],ge=O.viewport||te;de.setSize(ge.z*R.transmissionResolutionScale,ge.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),xe=R.getActiveCubeFace(),Me=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(st),He=R.getClearAlpha(),He<1&&R.setClearColor(16777215,.5),R.clear(),mt&&Ne.render(V);let Ue=R.toneMapping;R.toneMapping=fn;let Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Ye===!0&&Te.setGlobalState(R.clippingPlanes,O),Er(y,V,O),H.updateMultisampleRenderTarget(de),H.updateRenderTargetMipmap(de),je.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Je=0,yt=P.length;Je<yt;Je++){let ht=P[Je],{object:tt,geometry:Ut,material:pe,group:Gt}=ht;if(pe.side===qt&&tt.layers.test(O.layers)){let We=pe.side;pe.side=Xt,pe.needsUpdate=!0,Ac(tt,V,O,Ut,pe,Gt),pe.side=We,pe.needsUpdate=!0,ve=!0}}ve===!0&&(H.updateMultisampleRenderTarget(de),H.updateRenderTargetMipmap(de))}R.setRenderTarget(ue,xe,Me),R.setClearColor(st,He),Ge!==void 0&&(O.viewport=Ge),R.toneMapping=Ue}function Er(y,P,V){let O=P.isScene===!0?P.overrideMaterial:null;for(let B=0,de=y.length;B<de;B++){let ge=y[B],{object:ue,geometry:xe,group:Me}=ge,Ue=ge.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),ue.layers.test(V.layers)&&Ac(ue,P,V,xe,Ue,Me)}}function Ac(y,P,V,O,B,de){z!==null&&B.isNodeMaterial&&z.setObject(y,B),y.onBeforeRender(R,P,V,O,B,de),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(R,P,V,O,y,de),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=Xt,B.needsUpdate=!0,R.renderBufferDirect(V,P,O,B,y,de),B.side=ti,B.needsUpdate=!0,R.renderBufferDirect(V,P,O,B,y,de),B.side=qt):R.renderBufferDirect(V,P,O,B,y,de),y.onAfterRender(R,P,V,O,B,de)}function wr(y,P,V){P.isScene!==!0&&(P=Ht);let O=k.get(y),B=T.state.lights,de=T.state.shadowsArray,ge=B.state.version,ue=re.getParameters(y,B.state,de,P,V,T.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue),Me=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=ie.get(y.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",gn),Me=new Map,O.programs=Me);let Ge=Me.get(xe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===ge)return Rc(y,ue),Ge}else ue.uniforms=re.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,V,ue),y.onBeforeCompile(ue,R),Ge=re.acquireProgram(ue,xe),Me.set(xe,Ge),O.uniforms=ue.uniforms;let ve=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ve.clippingPlanes=Te.uniform),Rc(y,ue),O.needsLights=Gd(y),O.lightsStateVersion=ge,O.needsLights&&(ve.ambientLightColor.value=B.state.ambient,ve.lightProbe.value=B.state.probe,ve.sunLights.value=B.state.sun,ve.sunLightShadows.value=B.state.sunShadow,ve.directionalLights.value=B.state.directional,ve.directionalLightShadows.value=B.state.directionalShadow,ve.spotLights.value=B.state.spot,ve.spotLightShadows.value=B.state.spotShadow,ve.rectAreaLights.value=B.state.rectArea,ve.ltc_1.value=B.state.rectAreaLTC1,ve.ltc_2.value=B.state.rectAreaLTC2,ve.pointLights.value=B.state.point,ve.pointLightShadows.value=B.state.pointShadow,ve.hemisphereLights.value=B.state.hemi,ve.sunShadowMatrix.value=B.state.sunShadowMatrix,ve.sunShadowCascade.value=B.state.sunShadowCascade,ve.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ve.spotLightMatrix.value=B.state.spotLightMatrix,ve.spotLightMap.value=B.state.spotLightMap,ve.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=Ge,O.uniformsList=null,Ge}function Cc(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=fs.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Rc(y,P){let V=k.get(y);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Bd(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(P.matrixWorld);for(let V=0,O=y.length;V<O;V++){let B=y[V];if(B.texture!==null&&B.boundingBox.containsPoint(v))return B}return null}function zd(y,P,V,O,B){P.isScene!==!0&&(P=Ht),H.resetTextureUnits();let de=P.fog,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,ue=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Be.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Me=ie.get(O.envMap||ge,xe),Ue=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ve=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,yt=!!V.morphAttributes.color,ht=fn;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ht=R.toneMapping);let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ut=tt!==void 0?tt.length:0,pe=k.get(O),Gt=T.state.lights;if(Ye===!0&&(rt===!0||y!==Q)){let ot=y===Q&&O.id===W;Te.setState(O,y,ot)}let We=!1;O.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Gt.state.version||pe.outputColorSpace!==ue||B.isBatchedMesh&&pe.batching===!1||!B.isBatchedMesh&&pe.batching===!0||B.isBatchedMesh&&pe.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&pe.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&pe.instancing===!1||!B.isInstancedMesh&&pe.instancing===!0||B.isSkinnedMesh&&pe.skinning===!1||!B.isSkinnedMesh&&pe.skinning===!0||B.isInstancedMesh&&pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&pe.instancingMorph===!1&&B.morphTexture!==null||pe.envMap!==Me||O.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Te.numPlanes||pe.numIntersection!==Te.numIntersection)||pe.vertexAlphas!==Ue||pe.vertexTangents!==Ge||pe.morphTargets!==ve||pe.morphNormals!==Je||pe.morphColors!==yt||pe.toneMapping!==ht||pe.morphTargetsCount!==Ut||!!pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,pe.__version=O.version);let jt=pe.currentProgram;We===!0&&(jt=wr(O,P,B),z&&O.isNodeMaterial&&z.onUpdateProgram(O,jt,pe));let _n=!1,Gn=!1,wi=!1,et=jt.getUniforms(),_t=pe.uniforms;if(g.useProgram(jt.program)&&(_n=!0,Gn=!0,wi=!0),O.id!==W&&(W=O.id,Gn=!0),pe.needsLights){let ot=Bd(T.state.lightProbeGridArray,B);pe.lightProbeGrid!==ot&&(pe.lightProbeGrid=ot,Gn=!0)}if(_n||Q!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),et.setValue(L,"projectionMatrix",y.projectionMatrix),et.setValue(L,"viewMatrix",y.matrixWorldInverse);let Xn=et.map.cameraPosition;Xn!==void 0&&Xn.setValue(L,pt.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&et.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&et.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Gn=!0,wi=!0)}if(pe.needsLights&&(Gt.state.sunShadowMap.length>0&&et.setValue(L,"sunShadowMap",Gt.state.sunShadowMap,H),Gt.state.directionalShadowMap.length>0&&et.setValue(L,"directionalShadowMap",Gt.state.directionalShadowMap,H),Gt.state.spotShadowMap.length>0&&et.setValue(L,"spotShadowMap",Gt.state.spotShadowMap,H),Gt.state.pointShadowMap.length>0&&et.setValue(L,"pointShadowMap",Gt.state.pointShadowMap,H)),B.isSkinnedMesh){et.setOptional(L,B,"bindMatrix"),et.setOptional(L,B,"bindMatrixInverse");let ot=B.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),et.setValue(L,"boneTexture",ot.boneTexture,H))}B.isBatchedMesh&&(et.setOptional(L,B,"batchingTexture"),et.setValue(L,"batchingTexture",B._matricesTexture,H),et.setOptional(L,B,"batchingIdTexture"),et.setValue(L,"batchingIdTexture",B._indirectTexture,H),et.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&et.setValue(L,"batchingColorTexture",B._colorsTexture,H));let Vn=V.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&D.update(B,V,jt),(Gn||pe.receiveShadow!==B.receiveShadow)&&(pe.receiveShadow=B.receiveShadow,et.setValue(L,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(_t.envMapIntensity.value=P.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=I_()),Gn){if(et.setValue(L,"toneMappingExposure",R.toneMappingExposure),pe.needsLights&&kd(_t,wi),de&&O.fog===!0&&be.refreshFogUniforms(_t,de),be.refreshMaterialUniforms(_t,O,j,Y,T.state.transmissionRenderTarget[y.id]),pe.needsLights&&pe.lightProbeGrid){let ot=pe.lightProbeGrid;_t.probesSH.value=ot.texture,_t.probesMin.value.copy(ot.boundingBox.min),_t.probesMax.value.copy(ot.boundingBox.max),_t.probesResolution.value.copy(ot.resolution)}fs.upload(L,Cc(pe),_t,H)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(fs.upload(L,Cc(pe),_t,H),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&et.setValue(L,"center",B.center),et.setValue(L,"modelViewMatrix",B.modelViewMatrix),et.setValue(L,"normalMatrix",B.normalMatrix),et.setValue(L,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let ot=O.uniformsGroups;for(let Xn=0,Ai=ot.length;Xn<Ai;Xn++){let Ic=ot[Xn];ee.update(Ic,jt),ee.bind(Ic,jt)}}return jt}function kd(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Gd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,P,V){let O=k.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=P,k.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let V=k.get(y);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,V=0){ne=y,q=P,K=V;let O=null,B=!1,de=!1;if(y){let ue=k.get(y);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(y.viewport),Ae.copy(y.scissor),Ee=y.scissorTest,g.viewport(te),g.scissor(Ae),g.setScissorTest(Ee),W=-1;return}else if(ue.__webglFramebuffer===void 0)H.setupRenderTarget(y);else if(ue.__hasExternalTextures)H.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ue=y.depthTexture;if(ue.__boundDepthTexture!==Ue){if(Ue!==null&&k.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(y)}}let xe=y.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);let Me=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[P])?O=Me[P][V]:O=Me[P],B=!0):y.samples>0&&H.useMultisampledRTT(y)===!1?O=k.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?O=Me[V]:O=Me,te.copy(y.viewport),Ae.copy(y.scissor),Ee=y.scissorTest}else te.copy(me).multiplyScalar(j).floor(),Ae.copy(Oe).multiplyScalar(j).floor(),Ee=Tt;if(V!==0&&(O=X),g.bindFramebuffer(L.FRAMEBUFFER,O)&&g.drawBuffers(y,O),g.viewport(te),g.scissor(Ae),g.setScissorTest(Ee),B){let ue=k.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,V)}else if(de){let ue=P;for(let xe=0;xe<y.textures.length;xe++){let Me=k.get(y.textures[xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xe,Me.__webglTexture,V,ue)}}else if(y!==null&&V!==0){let ue=k.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,V)}W=-1};function Pc(y){let P=k.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=A.textureFormatReadable(y.format),P.__typeReadable=A.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,V,O,B,de,ge,ue=0){if(!(y&&y.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){g.bindFramebuffer(L.FRAMEBUFFER,xe);try{let Me=y.textures[ue],Ue=Me.format,Ge=Me.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);let ve=Pc(Me);if(ve.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-O&&V>=0&&V<=y.height-B&&L.readPixels(P,V,O,B,le.convert(Ue),le.convert(Ge),de)}finally{let Me=ne!==null?k.get(ne).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,P,V,O,B,de,ge,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(P>=0&&P<=y.width-O&&V>=0&&V<=y.height-B){g.bindFramebuffer(L.FRAMEBUFFER,xe);let Me=y.textures[ue],Ue=Me.format,Ge=Me.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue);let ve=Pc(Me);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(P,V,O,B,le.convert(Ue),le.convert(Ge),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let yt=ne!==null?k.get(ne).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,yt);let ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hh(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Je),L.deleteSync(ht),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,V=0){let O=Math.pow(2,-V),B=Math.floor(y.image.width*O),de=Math.floor(y.image.height*O),ge=P!==null?P.x:0,ue=P!==null?P.y:0;H.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ge,ue,B,de),g.unbindTexture()},this.copyTextureToTexture=function(y,P,V=null,O=null,B=0,de=0){let ge,ue,xe,Me,Ue,Ge,ve,Je,yt,ht=y.isCompressedTexture?y.mipmaps[de]:y.image;if(V!==null)ge=V.max.x-V.min.x,ue=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,Ue=V.min.y,Ge=V.isBox3?V.min.z:0;else{let _t=Math.pow(2,-B);ge=Math.floor(ht.width*_t),ue=Math.floor(ht.height*_t),y.isDataArrayTexture?xe=ht.depth:y.isData3DTexture?xe=Math.floor(ht.depth*_t):xe=1,Me=0,Ue=0,Ge=0}O!==null?(ve=O.x,Je=O.y,yt=O.z):(ve=0,Je=0,yt=0);let tt=le.convert(P.format),Ut=le.convert(P.type),pe;P.isData3DTexture?(H.setTexture3D(P,0),pe=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(H.setTexture2DArray(P,0),pe=L.TEXTURE_2D_ARRAY):(H.setTexture2D(P,0),pe=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let Gt=g.getParameter(L.UNPACK_ROW_LENGTH),We=g.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(L.UNPACK_SKIP_PIXELS),_n=g.getParameter(L.UNPACK_SKIP_ROWS),Gn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),g.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);let wi=y.isDataArrayTexture||y.isData3DTexture,et=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let _t=k.get(y),Vn=k.get(P),ot=k.get(_t.__renderTarget),Xn=k.get(Vn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,ot.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Ai=0;Ai<xe;Ai++)wi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(y).__webglTexture,B,Ge+Ai),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(P).__webglTexture,de,yt+Ai)),L.blitFramebuffer(Me,Ue,ge,ue,ve,Je,ge,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||k.has(y)){let _t=k.get(y),Vn=k.get(P);g.bindFramebuffer(L.READ_FRAMEBUFFER,N),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let ot=0;ot<xe;ot++)wi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.__webglTexture,B,Ge+ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,B),et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vn.__webglTexture,de,yt+ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vn.__webglTexture,de),B!==0?L.blitFramebuffer(Me,Ue,ge,ue,ve,Je,ge,ue,L.COLOR_BUFFER_BIT,L.NEAREST):et?L.copyTexSubImage3D(pe,de,ve,Je,yt+ot,Me,Ue,ge,ue):L.copyTexSubImage2D(pe,de,ve,Je,Me,Ue,ge,ue);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else et?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(pe,de,ve,Je,yt,ge,ue,xe,tt,Ut,ht.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(pe,de,ve,Je,yt,ge,ue,xe,tt,ht.data):L.texSubImage3D(pe,de,ve,Je,yt,ge,ue,xe,tt,Ut,ht):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,ve,Je,ge,ue,tt,Ut,ht.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,ve,Je,ht.width,ht.height,tt,ht.data):L.texSubImage2D(L.TEXTURE_2D,de,ve,Je,ge,ue,tt,Ut,ht);g.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(L.UNPACK_SKIP_ROWS,_n),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Gn),de===0&&P.generateMipmaps&&L.generateMipmap(pe),g.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&H.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?H.setTextureCube(y,0):y.isData3DTexture?H.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?H.setTexture2DArray(y,0):H.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){q=0,K=0,ne=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}});var ms,hc=xt(()=>{ms={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Jt,D_,uc,L_,li,gs=xt(()=>{mn();Jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},D_=new xi(-1,1,1,-1,0,1),uc=class extends dt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},L_=new uc,li=class{constructor(e){this._mesh=new ft(L_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Fo,Tu=xt(()=>{mn();gs();Fo=class extends Jt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kn.clone(e.uniforms),this.material=new qe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Mr,Oo,Eu=xt(()=>{gs();Mr=class extends Jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oo=class extends Jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Bo,wu=xt(()=>{mn();hc();Tu();Eu();Bo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fo(ms),this.copyPass.material.blending=tn,this.timer=new tr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mr!==void 0&&(a instanceof Mr?n=!0:a instanceof Oo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var zo,Au=xt(()=>{mn();gs();zo=class extends Jt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}});var Cu,Ru=xt(()=>{mn();Cu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var _s,Pu=xt(()=>{mn();gs();hc();Ru();_s=class i extends Jt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bt(r,a,{type:Lt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new bt(r,a,{type:Lt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new bt(r,a,{type:Lt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=Cu;this.highPassUniforms=kn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=kn.clone(ms.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:ms.vertexShader,fragmentShader:ms.fragmentShader,premultipliedAlpha:!0,blending:Cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new qe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new qe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};_s.BlurDirectionX=new Se(1,0);_s.BlurDirectionY=new Se(0,1)});var Sr,Iu=xt(()=>{Sr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var ko,Du=xt(()=>{mn();gs();Iu();ko=class extends Jt{constructor(){super(),this.isOutputPass=!0,this.uniforms=kn.clone(Sr.uniforms),this.material=new as({name:Sr.name,uniforms:this.uniforms,vertexShader:Sr.vertexShader,fragmentShader:Sr.fragmentShader}),this._fsQuad=new li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Be.getTransfer(this._outputColorSpace)===$e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ir?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===or?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ar&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});function N_(i,e){let t=Go[i];if(typeof t=="boolean")return e===!0||e==="true"||e===1||e==="1";if(typeof t=="number"){let n=Number(e);return Number.isFinite(n)?n:t}return String(e)}function Lu(i,e){if(!(i in Go))return;let t=N_(i,e);if(ct[i]!==t){ct[i]=t;for(let n of dc)n(i,t)}}function Nu(i){return dc.add(i),()=>dc.delete(i)}function Uu(){let i=new URLSearchParams(location.search);for(let e of Object.keys(Go))i.has(e)&&Lu(e,i.get(e))}var Go,dc,ct,fc=xt(()=>{Go={scene:1,brightness:70,motion:60,density:55,parallax:!0,showLogo:!0,showClock:!1,accent:"#FF7A00",nightComfort:!0,bloom:!0,eco:!1},dc=new Set,ct={...Go};window.livelyPropertyListener=(i,e)=>Lu(i,e)});function U_(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fu(i=1337){let e=U_(i);return{f:()=>e(),range:(t,n)=>t+(n-t)*e(),int:(t,n)=>Math.floor(t+(n-t+1)*e()),pick:t=>t[Math.floor(e()*t.length)],sign:()=>e()<.5?-1:1}}var Ou=xt(()=>{});var Bu,Vo,zu,ku,Gu,Vu,Xu,Hu,Wu,Yu,$u,Ku,qu,Zu,Ju,ju,Qu,ed=xt(()=>{Bu=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`,Vo=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,zu=`
  precision highp float;
  uniform float uTime; uniform vec3 uTop; uniform vec3 uBottom;
  uniform vec3 uGlow; uniform float uGlowStrength;
  uniform vec3 uHorizon; uniform float uHorizonStrength; uniform float uVignette;
  varying vec2 vUv;
  ${Bu}
  void main(){
    vec2 uv = vUv;
    vec3 col = mix(uBottom, uTop, smoothstep(0.0, 1.0, uv.y));
    float n = fbm(uv * 2.5 + vec2(uTime * 0.012, -uTime * 0.008));
    col += (n - 0.5) * 0.03;
    float breathe = 0.8 + 0.2 * sin(uTime * 0.25);
    float g = exp(-pow(length((uv - vec2(0.5, -0.1)) * vec2(1.0, 1.6)), 1.6) * 2.2);
    col += uGlow * g * uGlowStrength * breathe;
    col += uHorizon * uHorizonStrength * smoothstep(0.42, 0.0, uv.y) * (0.7 + 0.3 * n);
    float v = 1.0 - uVignette * smoothstep(0.35, 1.1, length((uv - 0.5) * vec2(1.25, 1.0)));
    col *= v;
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;   // dither against banding
    gl_FragColor = vec4(col, 1.0);
  }
`,ku=`
  attribute float aSize; attribute float aPhase; attribute vec3 aVel; attribute float aTint;
  uniform float uTime; uniform vec3 uBounds; uniform float uPixelRatio; uniform float uScale; uniform float uSway;
  varying float vAlpha; varying float vTint;
  void main(){
    vec3 p = position + aVel * uTime;
    p.x += sin(uTime * (0.5 + aPhase) + aPhase * 6.2831) * uSway;
    p = mod(p + uBounds * 0.5, uBounds) - uBounds * 0.5;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float tw = 0.6 + 0.4 * sin(uTime * (0.7 + aPhase * 1.1) + aPhase * 6.2831);
    vAlpha = tw; vTint = aTint;
    gl_PointSize = aSize * uScale * uPixelRatio * (9.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,Gu=`
  precision highp float;
  uniform vec3 uColorA; uniform vec3 uColorB; uniform float uOpacity;
  varying float vAlpha; varying float vTint;
  void main(){
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    float a = smoothstep(0.5, 0.05, d); a *= a;
    vec3 col = mix(uColorA, uColorB, vTint);
    float k = a * vAlpha * uOpacity;
    gl_FragColor = vec4(col * k, k);
  }
`,Vu=`
  attribute float aLife; attribute float aSize; attribute float aTint;
  uniform float uPixelRatio;
  varying float vLife; varying float vTint;
  void main(){
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vLife = aLife; vTint = aTint;
    gl_PointSize = aSize * uPixelRatio * (9.0 / -mv.z) * (0.4 + 0.6 * aLife);
    gl_Position = projectionMatrix * mv;
  }
`,Xu=`
  precision highp float;
  uniform vec3 uInk; uniform vec3 uEmber;
  varying float vLife; varying float vTint;
  void main(){
    if (vLife <= 0.0) discard;
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    float a = smoothstep(0.5, 0.1, d) * vLife;
    vec3 col = mix(uInk, uEmber, vTint * (1.0 - vLife));
    gl_FragColor = vec4(col * a, a);
  }
`,Hu=`
  precision highp float;
  uniform vec3 uColor; uniform vec3 uHalo; uniform float uHaloStrength; uniform float uTime; uniform float uSpread;
  varying vec2 vUv;
  ${Bu}
  void main(){
    vec2 p = (vUv - 0.5) * 2.0 * uSpread;
    float r = length(p);
    float disc = 1.0 - smoothstep(0.545, 0.56, r);
    float n = fbm(p * 2.6 + vec2(3.7, 1.3));
    float n2 = fbm(p * 6.0 + 11.0);
    float maria = smoothstep(0.52, 0.74, n);                 // darker seas, never bright patches
    vec3 surf = uColor * (1.0 - 0.09 * maria) * (0.97 + 0.03 * n2);
    surf *= 0.84 + 0.16 * (1.0 - smoothstep(0.2, 0.56, r));
    float halo = exp(-max(r - 0.55, 0.0) * 4.2) * uHaloStrength * (1.0 - disc);
    halo *= 0.95 + 0.05 * sin(uTime * 0.6);
    vec3 col = surf * disc + uHalo * halo;
    float a = max(disc, halo);
    gl_FragColor = vec4(col, a);
  }
`,Wu=`
  varying vec3 vW;
  void main(){ vW = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Yu=`
  precision highp float;
  uniform float uTime; uniform vec3 uColor; uniform float uOpacity;
  varying vec3 vW;
  void main(){
    vec2 g = vec2(vW.x * 0.5, vW.z * 0.5 + uTime * 0.06);
    vec2 f = abs(fract(g) - 0.5);
    vec2 fw = fwidth(g) * 1.2;
    vec2 l = 1.0 - smoothstep(vec2(0.0), fw, f);
    float line = max(l.x, l.y);
    float fade = smoothstep(-20.0, -7.0, vW.z) * (1.0 - smoothstep(-3.0, 3.0, vW.z));
    float a = line * fade * uOpacity;
    gl_FragColor = vec4(uColor * a, a);
  }
`,$u=`
  precision highp float;
  uniform sampler2D uMap; uniform float uTime; uniform vec3 uColor; uniform float uOpacity; uniform float uGlitch;
  varying vec2 vUv;
  float h1(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vec2 uv = vUv;
    float t8 = floor(uTime * 6.0);
    float row = floor(uv.y * 32.0);
    float g = step(1.0 - uGlitch, h1(row * 1.7 + t8));
    uv.x += g * (h1(row * 3.1 + t8) - 0.5) * 0.05;
    float ca = 0.0035 + g * 0.012;
    float r = texture2D(uMap, uv + vec2(ca, 0.0)).a;
    float gg = texture2D(uMap, uv).a;
    float b = texture2D(uMap, uv - vec2(ca, 0.0)).a;
    vec4 tex = texture2D(uMap, uv);
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    float scan = 0.84 + 0.16 * sin(uv.y * 260.0 - uTime * 5.0);
    float sw = fract(uTime * 0.11) * 2.6 - 0.8;
    float sweep = smoothstep(0.22, 0.0, abs(uv.x - sw - uv.y * 0.35));
    float flicker = 0.94 + 0.06 * sin(uTime * 21.0) * sin(uTime * 7.3);
    vec3 base = mix(uColor * 0.85, vec3(1.0, 0.97, 0.92), lum * 0.55);
    vec3 col = base * scan * flicker + vec3(0.95, 0.97, 1.0) * sweep * 0.45;
    vec3 chroma = vec3(r, gg, b) * col;
    float a = max(max(r, gg), b) * uOpacity;
    gl_FragColor = vec4(chroma * a, a);
  }
`,Ku=`
  attribute float aPhase; attribute float aFade; attribute float aFlap;
  uniform float uTime;
  varying float vFade;
  void main(){
    vec3 p = position;
    float w = abs(p.x) / 0.55;
    float glide = 0.35 + 0.65 * smoothstep(-0.2, 0.6, sin(uTime * 0.37 + aPhase * 3.0));
    float flap = sin(uTime * aFlap + aPhase) * glide;
    p.y += pow(w, 1.6) * flap * 0.42 - w * 0.06;
    p.z += w * flap * 0.12;
    vFade = aFade;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
  }
`,qu=`
  precision highp float;
  uniform vec3 uColor;
  varying float vFade;
  void main(){ if (vFade <= 0.001) discard; gl_FragColor = vec4(uColor, vFade); }
`,Zu=`
  varying vec3 vN; varying vec3 vV;
  void main(){
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,Ju=`
  precision highp float;
  uniform vec3 uColor; uniform float uTime; uniform float uPower; uniform float uStrength;
  varying vec3 vN; varying vec3 vV;
  void main(){
    float fr = pow(1.0 - clamp(dot(vN, vV), 0.0, 1.0), uPower);
    float pulse = 0.85 + 0.15 * sin(uTime * 1.7);
    vec3 col = uColor * (0.05 + fr * uStrength * pulse) + vec3(1.0, 0.93, 0.85) * fr * fr * 0.35;
    gl_FragColor = vec4(col, 1.0);
  }
`,ju=`
  varying vec3 vPos;
  void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Qu=`
  precision highp float;
  uniform vec3 uColor; uniform float uTime; uniform float uSegments; uniform float uDuty; uniform float uSpeed; uniform float uOpacity;
  varying vec3 vPos;
  void main(){
    float ang = atan(vPos.y, vPos.x) / 6.2831853 + 0.5;
    float seg = fract(ang * uSegments + uTime * uSpeed);
    float on = smoothstep(0.0, 0.06, seg) * (1.0 - smoothstep(uDuty - 0.06, uDuty, seg));
    float a = on * uOpacity;
    gl_FragColor = vec4(uColor * a * 1.5, a);
  }
`});function br(i,e){let n=2*(xs-i)*Math.tan(oi.degToRad(pc/2));return{w:n*e,h:n}}function Ti(i,e,t,n){let{w:s,h:r}=br(t,n);return new I((i-.5)*s,(.5-e)*r,t)}function td(i){i.traverse(e=>{e.geometry&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let n of t){if(n.map&&n.map.dispose(),n.uniforms)for(let s of Object.values(n.uniforms))s.value&&s.value.isTexture&&s.value.dispose();n.dispose()}})}function Xo(i,e){let{w:t,h:n}=br(-6,i),s=new qe({vertexShader:Vo,fragmentShader:zu,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uTop:{value:Pt(e.top)},uBottom:{value:Pt(e.bottom)},uGlow:{value:Pt(e.glow)},uGlowStrength:{value:e.glowStrength??0},uHorizon:{value:Pt(e.horizon??"#000000")},uHorizonStrength:{value:e.horizonStrength??0},uVignette:{value:e.vignette??.55}}}),r=new ft(new en(t*1.4,n*1.4),s);return r.position.z=-6,r.renderOrder=-10,r.frustumCulled=!1,r.update=(a,o)=>{s.uniforms.uTime.value=o},r}function ci(i,e){let t=Math.max(1,Math.round(e.count)),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),[l,c,u]=e.bounds;for(let _=0;_<t;_++){n[_*3]=i.range(-l/2,l/2),n[_*3+1]=i.range(-c/2,c/2),n[_*3+2]=i.range(-u/2,u/2);let M=e.vel(i);s[_*3]=M[0],s[_*3+1]=M[1],s[_*3+2]=M[2],r[_]=i.range(e.size[0],e.size[1]),a[_]=i.f(),o[_]=i.f()<(e.tintChance??.3)?1:0}let f=new dt;f.setAttribute("position",new lt(n,3)),f.setAttribute("aVel",new lt(s,3)),f.setAttribute("aSize",new lt(r,1)),f.setAttribute("aPhase",new lt(a,1)),f.setAttribute("aTint",new lt(o,1));let h=new qe({vertexShader:ku,fragmentShader:Gu,transparent:!0,depthWrite:!1,blending:e.additive===!1?ni:Cn,premultipliedAlpha:!0,uniforms:{uTime:{value:0},uBounds:{value:new I(l,c,u)},uPixelRatio:{value:1},uScale:{value:1},uSway:{value:e.sway??0},uColorA:{value:Pt(e.colors[0])},uColorB:{value:Pt(e.colors[1])},uOpacity:{value:e.opacity??.5}}}),p=new ss(f,h);return p.position.z=e.z??0,p.frustumCulled=!1,p.update=(_,M,m)=>{h.uniforms.uTime.value=M,h.uniforms.uPixelRatio.value=m},p}function nd(i,e){let t=e.max??600,n=new Float32Array(t*3),s=new Float32Array(t),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3),l=new Float32Array(t),c=0,u=0,f=new dt,h=new lt(n,3).setUsage(_r),p=new lt(s,1).setUsage(_r);f.setAttribute("position",h),f.setAttribute("aLife",p),f.setAttribute("aSize",new lt(r,1)),f.setAttribute("aTint",new lt(a,1));let _=new qe({vertexShader:Vu,fragmentShader:Xu,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,uniforms:{uPixelRatio:{value:1},uInk:{value:Pt(e.ink)},uEmber:{value:Pt(e.ember)}}}),M=new ss(f,_);return M.frustumCulled=!1,M.spawn=(m,d=14)=>{for(let S=0;S<d;S++){let w=c;c=(c+1)%t,n[w*3]=m.x+i.range(-.05,.05),n[w*3+1]=m.y+i.range(-.03,.03),n[w*3+2]=m.z;let v=i.range(0,Math.PI*2),b=i.range(.08,.45);o[w*3]=Math.cos(v)*b,o[w*3+1]=Math.sin(v)*b*.6+.1,o[w*3+2]=i.range(-.1,.1),s[w]=1,l[w]=i.range(1,2.4),r[w]=i.range(1.6,4.2),a[w]=i.f()<.55?1:0}u=t},M.update=(m,d,S)=>{if(_.uniforms.uPixelRatio.value=S,!u)return;let w=0;for(let v=0;v<t;v++)s[v]<=0||(w++,s[v]-=m/l[v],o[v*3+1]+=.12*m,o[v*3]*=.985,o[v*3+1]*=.985,n[v*3]+=o[v*3]*m,n[v*3+1]+=o[v*3+1]*m,n[v*3+2]+=o[v*3+2]*m);u=w,h.needsUpdate=!0,p.needsUpdate=!0},M}function id(i){let e=new qe({vertexShader:Wu,fragmentShader:Yu,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,uniforms:{uTime:{value:0},uColor:{value:Pt(i.color)},uOpacity:{value:i.opacity}}}),t=new ft(new en(60,36),e);return t.rotation.x=-Math.PI/2,t.position.set(0,i.y,-6),t.renderOrder=-8,t.frustumCulled=!1,t.update=(n,s)=>{e.uniforms.uTime.value=s},t}function sd(i){let t=i.radius*2*2.2/.55,n=new qe({vertexShader:Vo,fragmentShader:Hu,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,uniforms:{uColor:{value:Pt(i.color)},uHalo:{value:Pt(i.halo)},uHaloStrength:{value:i.haloStrength},uTime:{value:0},uSpread:{value:2.2}}}),s=new ft(new en(t,t),n);return s.position.copy(i.position),s.renderOrder=-5,s.update=(r,a)=>{n.uniforms.uTime.value=a},s}function rd(i){let t=document.createElement("canvas");t.width=t.height=1024;let n=t.getContext("2d"),s=1024/2,r=1024*.36;n.strokeStyle=i.color,n.fillStyle=i.color,n.lineCap="round",n.lineWidth=5,n.beginPath(),n.arc(s,s,r,0,Math.PI*2),n.stroke(),n.lineWidth=1.5,n.beginPath(),n.arc(s,s,r*.86,0,Math.PI*2),n.stroke();for(let u=0;u<3;u++){let f=u*Math.PI*2/3,h=s+Math.cos(f)*r*.93,p=s+Math.sin(f)*r*.93;n.beginPath(),n.arc(h,p,1024*.034,0,Math.PI*2),n.fill();let _=22;for(let M=0;M<_;M++){let m=f+M/_*.95,d=f+(M+1)/_*.95,S=r*.93-M/_*1024*.01;n.lineWidth=1024*.06*(1-M/_)+1.5,n.beginPath(),n.moveTo(s+Math.cos(m)*S,s+Math.sin(m)*S),n.lineTo(s+Math.cos(d)*S,s+Math.sin(d)*S),n.stroke()}}let a=new Zn(t);a.colorSpace=St;let o=i.radius*2/.72,l=new An({map:a,transparent:!0,opacity:i.opacity,depthWrite:!1}),c=new ft(new en(o,o),l);return c.position.copy(i.position),c.renderOrder=-4,c.update=u=>{c.rotation.z-=u*.06},c}function ad(i,e,t){let{w:n,h:s}=br(0,e),r=i.image.width/i.image.height,a=s,o=s*r;o<n&&(o=n,a=n/r),o*=1.06,a*=1.06;let l=new An({map:i,transparent:!0,color:Pt(t.color),depthWrite:!1}),c=new ft(new en(o,a),l);return c.position.z=0,c.renderOrder=5,c.frustumCulled=!1,c.texToWorld=(u,f,h=0)=>{let p=(xs-h)/xs;return new I((u-.5)*o*p,(.5-f)*a*p,h)},c.texWidth=o,c}function Ho(i,e){let t=i.image.width/i.image.height,n=new qe({vertexShader:Vo,fragmentShader:$u,transparent:!0,depthWrite:!1,blending:Cn,uniforms:{uMap:{value:i},uTime:{value:0},uColor:{value:Pt(e.color)},uOpacity:{value:e.opacity},uGlitch:{value:e.glitch??.02}}}),s=new ft(new en(e.width,e.width/t),n);s.position.copy(e.position),s.renderOrder=20;let r=e.position.clone();return s.update=(a,o)=>{n.uniforms.uTime.value=o,s.position.y=r.y+Math.sin(o*.5)*.03,s.rotation.y=Math.sin(o*.3)*.14,s.rotation.x=Math.sin(o*.21)*.05},s}function F_(){let i=[[-.06,.03],[-.06,-.04],[-.3,.09],[-.28,-.01],[-.55,.16]],e=[],t=(r,a,o)=>e.push(...r,0,...a,0,...o,0),n=r=>{let a=i.map(([o,l])=>[o*r,l]);t(a[0],a[2],a[1]),t(a[1],a[2],a[3]),t(a[2],a[4],a[3])};n(1),n(-1),t([-.07,0],[0,.07],[.07,0]),t([-.07,0],[.07,0],[0,-.09]),t([0,.05],[.05,.11],[.11,.08]),t([0,-.03],[.05,-.17],[-.05,-.17]);let s=new dt;return s.setAttribute("position",new lt(new Float32Array(e),3)),s}function od(i,e,t){let n=Math.max(1,Math.round(e)),s=new er().copy(F_()),r=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n);for(let d=0;d<n;d++)r[d]=i.range(0,Math.PI*2),a[d]=i.range(7.5,11.5);let l=new Bn(o,1).setUsage(_r);s.setAttribute("aPhase",new Bn(r,1)),s.setAttribute("aFlap",new Bn(a,1)),s.setAttribute("aFade",l);let c=new qe({vertexShader:Ku,fragmentShader:qu,transparent:!0,depthWrite:!1,side:qt,uniforms:{uTime:{value:0},uColor:{value:Pt(t.color)}}}),u=new Xs(s,c,n);u.frustumCulled=!1,u.renderOrder=3;let f=new Dt,h=new I,p=new I,_=[],M=(d,S,w)=>{let v=1-S;return w.set(0,0,0).addScaledVector(d.p0,v*v*v).addScaledVector(d.p1,3*v*v*S).addScaledVector(d.p2,3*v*S*S).addScaledVector(d.p3,S*S*S),w},m=(d,S=0)=>{d.p0=t.spawn.clone().add(new I(i.range(-.12,.12),i.range(-.05,.08),0)),d.p3=t.exits();let w=i.range(.5,1.6);d.p1=d.p0.clone().add(new I(i.range(-.6,.6),w,i.range(-.4,.2))),d.p2=d.p3.clone().lerp(d.p0,i.range(.25,.55)).add(new I(0,i.range(.2,1.2),i.range(-.6,.3))),d.dur=i.range(16,30),d.t=S,d.scale=i.range(t.scale[0],t.scale[1]),d.bob=i.range(0,6.28)};for(let d=0;d<n;d++){let S={};m(S,i.f()<.6?i.f():0),_.push(S)}return u.update=(d,S)=>{c.uniforms.uTime.value=S;for(let w=0;w<n;w++){let v=_[w];v.t+=d/v.dur,v.t>=1&&m(v,0),M(v,v.t,h),M(v,Math.min(v.t+.01,1),p);let b=p.x-h.x,T=p.y-h.y,C=Math.atan2(T,Math.abs(b)+1e-4)*.45;h.y+=Math.sin(S*1.3+v.bob)*.02;let x=oi.smoothstep(v.t,0,.07),E=1-oi.smoothstep(v.t,.86,.98);o[w]=x*E,v.t>.9&&!v.burst&&t.burst&&(v.burst=!0,t.burst.spawn(h,10)),v.t<.05&&(v.burst=!1);let R=v.scale*(1-v.t*.45);f.position.copy(h),f.rotation.set(0,0,C),f.scale.setScalar(R),f.updateMatrix(),u.setMatrixAt(w,f.matrix)}u.instanceMatrix.needsUpdate=!0,l.needsUpdate=!0},u}function ld(i){let e=new qe({vertexShader:Zu,fragmentShader:Ju,transparent:!0,depthWrite:!1,blending:Cn,uniforms:{uColor:{value:Pt(i.color)},uTime:{value:0},uPower:{value:2.6},uStrength:{value:1.7}}}),t=new ft(new Zs(i.radius,48,48),e);return t.position.copy(i.position),t.update=(n,s)=>{e.uniforms.uTime.value=s,t.rotation.y+=n*.2},t}function cd(i){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=n.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.18,i.color),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new Zn(t);r.colorSpace=St;let a=new Gs(new ts({map:r,transparent:!0,blending:Cn,depthWrite:!1,opacity:i.opacity}));return a.position.copy(i.position),a.scale.setScalar(i.size),a.update=(o,l)=>{a.material.opacity=i.opacity*(.85+.15*Math.sin(l*1.7))},a}function hd(i){let e=new qe({vertexShader:ju,fragmentShader:Qu,transparent:!0,depthWrite:!1,side:qt,premultipliedAlpha:!0,uniforms:{uColor:{value:Pt(i.color)},uTime:{value:0},uSegments:{value:i.segments},uDuty:{value:i.duty},uSpeed:{value:i.speed},uOpacity:{value:i.opacity}}}),t=new ft(new qs(i.radius,i.radius+i.width,160,1),e);return t.position.copy(i.position),t.rotation.set(i.tilt[0],i.tilt[1],0),t.update=(n,s)=>{e.uniforms.uTime.value=s,t.rotation.z+=n*(i.spin??0),t.rotation.y=i.tilt[1]+Math.sin(s*.17+i.radius)*.12},t}function mc(i){let e=[];for(let s=0;s<i.count;s++){let r=s/i.count*Math.PI*2,a=s%i.major===0?i.len*1.9:i.len;e.push(Math.cos(r)*i.radius,Math.sin(r)*i.radius,0,Math.cos(r)*(i.radius+a),Math.sin(r)*(i.radius+a),0)}let t=new dt;t.setAttribute("position",new lt(new Float32Array(e),3));let n=new is(t,new _i({color:Pt(i.color),transparent:!0,opacity:i.opacity,depthWrite:!1}));return n.position.copy(i.position),n.rotation.set(i.tilt[0],i.tilt[1],0),n.update=s=>{n.rotation.z+=s*i.spin},n}function gc(i){let e=new $s(new Ks(i.radius,i.detail)),t=new is(e,new _i({color:Pt(i.color),transparent:!0,opacity:i.opacity,depthWrite:!1}));return t.position.copy(i.position),t.update=n=>{t.rotation.y+=n*i.spin,t.rotation.x+=n*i.spin*.6},t}var xs,pc,Pt,_c=xt(()=>{mn();ed();xs=10,pc=30;Pt=i=>new De(i)});function xc(i,e,t){return{group:i,update(n,s,r){for(let a of e)a.update&&a.update(n,s,r)},setLogoVisible(n){t&&(t.visible=n)},dispose(){td(i)}}}function O_(i,e,t){let{aspect:n}=i,s=ct.accent,r=ct.density/55,a=new dn,o=[],l=u=>(a.add(u),o.push(u),u);l(Xo(n,{top:"#0a0d16",bottom:"#07080c",glow:s,glowStrength:.09,vignette:.5})),l(id({y:-2.6,color:s,opacity:.07})),l(ci(e,{count:170*r,bounds:[18,11,2],z:-5,size:[.9,1.9],vel:()=>[0,0,0],colors:["#dfe6ff","#ffd9b0"],tintChance:.25,opacity:.4})),l(ci(e,{count:330*r,bounds:[15,9.5,8],z:-2,size:[1.8,4.8],vel:u=>[u.range(-.04,.04),u.range(.015,.07),0],colors:[ct.nightComfort?"#d6cfc4":"#c8d2ff",s],tintChance:.3,opacity:.8,sway:.15}));let c=l(Ho(t.logo,{position:Ti(.865,.86,0,n),width:1.45,color:s,opacity:.55,glitch:.015}));return c.visible=ct.showLogo,xc(a,o,c)}function B_(i,e,t){let{aspect:n}=i,s=ct.accent,r=ct.density/55,a=ct.nightComfort,o=new dn,l=[],c=w=>(o.add(w),l.push(w),w);c(Xo(n,{top:"#090a14",bottom:"#0e0a10",glow:"#6b0e22",glowStrength:.06,horizon:"#4a0a16",horizonStrength:.08,vignette:.62}));let u=c(ad(t.silhouette,n,{color:"#05060c"})),f=u.texToWorld(.4915,.3508,-3),h=.1608*u.texWidth*(13/10);c(sd({position:f,radius:h,color:a?"#e6dccb":"#e9e9e4",halo:a?"#b48b6e":"#9fa9c2",haloStrength:a?.3:.34})),c(rd({position:f.clone().add(dd(0,0,.05)),radius:h*1,color:"#7a0f1f",opacity:.11})),c(ci(e,{count:140*r,bounds:[18,11,2],z:-5,size:[.8,1.6],vel:()=>[0,0,0],colors:["#d8d4e6","#ffd9b0"],tintChance:.3,opacity:.26}));let p=c(nd(e,{ink:"#0b0c16",ember:s,max:500})),_=u.texToWorld(.49,.41,-.8),M=()=>{let w=e.f();return w<.62?Ti(e.range(-.25,-.05),e.range(.02,.35),-2.6,n):w<.88?Ti(e.range(1.05,1.25),e.range(0,.3),-2.6,n):Ti(e.range(.2,.8),e.range(-.3,-.12),-2.4,n)};c(od(e,24*r,{spawn:_,exits:M,color:"#07080f",scale:[.2,.34],burst:p}));let{w:m,h:d}=br(0,n);c(ci(e,{count:130*r,bounds:[m*1.2,d*1.3,3],z:-.5,size:[2.6,5.6],vel:w=>[w.range(-.05,.05),w.range(.1,.32),0],colors:[s,"#ffd6a0"],tintChance:.35,opacity:.6,sway:.12})),c(ci(e,{count:120*r,bounds:[15,9.5,6],z:-1.5,size:[1,2.4],vel:w=>[w.range(-.03,.03),w.range(.01,.05),0],colors:["#9aa0bd",s],tintChance:.2,opacity:.22,sway:.1}));let S=c(Ho(t.logo,{position:Ti(.885,.9,.4,n),width:1.1,color:s,opacity:.42,glitch:.012}));return S.visible=ct.showLogo,xc(o,l,S)}function z_(i,e,t){let{aspect:n}=i,s=ct.accent,r=ct.density/55,a=new dn,o=[],l=h=>(a.add(h),o.push(h),h);l(Xo(n,{top:"#070a12",bottom:"#0b0a0d",glow:s,glowStrength:.09,horizon:s,horizonStrength:.03,vignette:.66}));let c=dd(0,.15,0);l(cd({position:c,color:s,size:2.4,opacity:.55})),l(ld({position:c,radius:.42,color:s}));let u=[{radius:.72,width:.03,segments:24,duty:.55,speed:.06,opacity:.6,tilt:[0,0],spin:.05},{radius:1.02,width:.012,segments:3,duty:.4,speed:-.03,opacity:.42,tilt:[1.15,.2],spin:-.12},{radius:1.38,width:.02,segments:64,duty:.6,speed:.02,opacity:.3,tilt:[.9,-.5],spin:.08},{radius:1.86,width:.014,segments:8,duty:.82,speed:-.015,opacity:.32,tilt:[1.5,.1],spin:.04},{radius:2.5,width:.01,segments:140,duty:.5,speed:.01,opacity:.16,tilt:[.3,.2],spin:-.02}];for(let h of u)l(hd({...h,color:s,position:c}));l(mc({position:c,radius:2.08,count:72,major:6,len:.06,color:s,opacity:.3,tilt:[.3,.2],spin:-.03})),l(mc({position:c,radius:1.52,count:36,major:9,len:.1,color:s,opacity:.22,tilt:[.9,-.5],spin:.05})),l(gc({position:c,radius:.95,detail:1,color:s,opacity:.2,spin:.09})),l(gc({position:c,radius:1.75,detail:0,color:s,opacity:.07,spin:-.04})),l(ci(e,{count:240*r,bounds:[15,9.5,7],z:-2,size:[.9,2.4],vel:h=>[h.range(-.03,.03),h.range(.01,.04),0],colors:["#ffe2c2",s],tintChance:.5,opacity:.4,sway:.08})),l(ci(e,{count:120*r,bounds:[18,11,2],z:-5,size:[.8,1.5],vel:()=>[0,0,0],colors:["#dfe6ff",s],tintChance:.3,opacity:.25}));let f=l(Ho(t.logo,{position:Ti(.5,.82,0,n),width:1.7,color:s,opacity:.6,glitch:.03}));return f.visible=ct.showLogo,xc(a,o,f)}function fd(i,e,t,n){return(ud[i]||ud[0])(e,t,n)}var dd,ud,pd=xt(()=>{mn();fc();_c();dd=(i,e,t)=>new I(i,e,t);ud=[O_,B_,z_]});var gd,md=xt(()=>{gd="data:image/png;base64,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"});var xd,_d=xt(()=>{xd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAOECAYAAAD5Tf2iAAEAAElEQVR42uz9e5hleV0f+r8/a1+ququ6ey7MDDPAoFyVuwgiCgoI4SJCco4eJQLx8URP1KOJguYYk5OcRJITA16Oxhj9HX+JYtSYRJEAKohcJNxEkBlIuAhyGWaG4TI93VXdtfde63v+qOrp6prqnu5hLn15vZ6npqeqdl32d+16nvVd7/X5fBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgDJQlAACAu9uBi5aW2qVJtaTtOCff/NjGRn0+OXgwSbNeAAAAZ25sCQAA4G7TJRkmk/asfuh/MsmQzZuSjoUgbeutm0xG/2g+z29ufU4IAgAAEAEIAACcrYZkz1Wthm+p1ANP9cCW4ZuTvW9K1m+wbAAAALlDd6ABAAB3m2rbKj2G7JZ9JK3Snj+ajh6r+gMAAOCOGVkCAADI3XgD0vzQaDy9V5LnZvfZfFstsWqU1i5aWtr/5sXiyCFLBwAAoAIEAAByVpeAtLa8I/TISW5WetgwLJYtGQAAQAQgAABwlmsZ6n0tuSa3H4IcGDI8JWb3AQAARAssAAA4u3XDMPurUTd5RKq+JpszPnYLQlpV7U1yYOinr05m66cRmAAAAKACBAAAcvdXf+TWOR+fT7JxisfW5uPbY8bT9qLjs0EAAACIAAQAAHI2hiBt3i1+NWnv2zonbyd/bF1ULQ/aEZ4AAAAQLbAAAOBsshlg9I9ZG48+f1nSviappZyqYqRyZNRN3zMM889aPgAAgAhAAADg7HX9MB7v+fQwtOdU5fKcsg1WfXmr7iNDP3t7Tl0xAgAAQAQgAABwj+r7jSNdN2lVeWpS45y6vdUVo278rmGY36ANFgAAQMwAAQCAnL2tsDbaKP89yXC82uNkD24PGbq6RPUHAABABCAAAHCWq1HrPpVW/+12Z4Ykkwx5SnLZaoQgAAAA0QILAADOXl3fzz43Gk2XU3lWjocdO1tcVVKjJPcb7Zm/dpjPb7J0AAAAEYAAAMBZrBuG7rNdVw+qqq/IZnXHrjM+qmpvhuqG/vI3Jbf0lg4AAEALLAAAOIsd/VQln8mph5u3JEtp+cpk3p0qKAEAAEAAAgAA96TtszzenuT63E4I0tLuN1o6/HWWDgAAIFpgAQDA2W4YLvrYqJt/faoekpMPQ29Vda8kR4d+/geGoQMAAEQAAgAAZ7f1fjxePthae0pV7TvFA1ulrhiPpn/Z97P/ka1g5C78xWrHW3ZUlNftPAYAAOAeMbYEAABwVuirug+mDUdP47H3GypX5a6fA9KdrBJl6/+HnDo0UaECAABEAAIAABe46XQ4eORI3pTK1Sc5Vz8eKrQ8Mdn7u8n6DXfhrzSc4nOT6XTfs4cark5q63Gt61r3ydns0GuTLBxRAADgnqQ8HQAAzp5z8zYarTylG+V3krrXSSo8tj7WDg/pvqOfHXrNXfT7rE6n+76nteHB2wOOqu4js6X82uRonpdqL0ty5Y5f7lNJ+4PW53f6fu31u1SNAAAAxAwQAAC4sHStrX5h1A33SuUJ2T0A2Xq/RmntoqWl/W9eLI4cuhNbXrXkstXxtHtJkp9I1den8jWbb/X4JE8c9XlyKt+W5KpsVom0Y2+VHKjUV3ddPSbjyUdbP/+Ym68AAIAIQAAAIBd4FcjRozVeGlfy5CQHThEedEnGlfxm32988c6qQEmyOpnUS6vy0qRWk/Q5XnnSkiwn+bIk+7be73bM/Tj22Hsn9Zh0k5unkz1H+37jCw4vAAAQAQgAAOTCrQLpZx8fdZMHp+pxOfWg8yGVjwz97JrbmddxulbH09WXVNWPboUfxwKOym0Djmx7v3Z5a5Vc1lW+ubU8cjRaed8wHL3peJUJAADAXby5sgQAAHDWOBYMzJJau52goFXVpWntRcnqRbn9NlN1Ox9fmUxWXlrJS5OsnMbX3F5Lq9rcb9RSKs9otXi64AMAAIgKEAAAuMBP1Efjz7aqr6/k3jn5LJCWtIu7UW4e+vk7TzFs/HY+ftnqeNq9tKpemmT1dqpOcgdDnStrcybIX+72oP3791+ysbHRJVk4+gAAgAAEAAByPs4BSYbhwV8YjQ8+OMljkoxz0nCh9lTLXw7D/DWnCi2Wlg58ed9vdEmOnPizDlw8mWz8yLaZH0Pu3ErxSlKbQU49dpLxx/o2/6ttIUslSd/G399NlvphMfuklwAAABAtsAAAIOdpG6wPzjJuv9xa+8ztPr7y8Mlk5ZG7VHlUkkwmFz+iHxavGC2tPGZHC6s2Gi0encoP3kXhx4ktu5JHDOPuB5PL9uz8HavVfatv35JcseIlAAAARAACAADnr/na3k+05DeSNsvuLay2BorXN7bqnr5L66qWJFWLZ3ZVR/uN9sFtH2/JnqtqVC9Oav/dtD9oaXnsZLL+/OxozTUMwx8m9YilpSNXOvIAAEAEIAAAkPO4FdZNh9PlTUnmOXGexm6zQF40mez9qp2tpSaTA49prT23te73k/UbtvYAlTxoaTId/XglL87JW2zd2a29WpIrW7VvTnJg+/Pp+z1vay039v1wlUMPAABEAAIAAOe16ob2hZb68O2nC+0hQ1eXZEdI0nXt8qR9aD6/5XXbKy4mk888vCXfmM25gO1unG8yVLpnTyb7nndiO649i6oc7rp8d3LZqkMPAABEAAIAADlfZ4HUfL7+3qR+fXt4kV3mfCSZZMhTtsKDrRZXV6wMQ3taMlpLcnD77I8kL6zkEdmc+1F383O7qHXD/m3PpyWfPpIMvzoMNU8Wox3PDQAAIAIQAAA4v1S14Q1Je+vW+fuwewhS00q+c7Kyfv9jH5xO169K2qOGYfH6bY8dxuPVb9iaGXJ3hwy3tuaqoZ43ne578PYApuvGh6qGh0wmG88TgAAAABGAAADAeWtIUvP52jWV+uMks1OFAlV1Veb1fcmVezcHi7crW6tP9/36n54QQHTtMZU8Mndf66tdftn2pL6GL9v5wZY8MFVP2qXCBQAAIAIQAADI+dUKa1bzf5+0d59iGHpLspSWr0yGSu67p6r9UFV7UHJpbXtMS9XGPRp+bOqzo5plPF5aq9Q1SW047AAAQAQgAABwAdi46Ka0Ws/tVES0tPuNlo58XXJknNQ0aX+aXLFxfPbH3ivT8qRt3+eeqrConT97be2zNw6Vf7v1PHMWhDQAAEAEIAAAQO6yCpCW3LiRLr/dWvtidg8tKkmrqgdX679t//75JGmfqar/kHxwdux7jZbq4ZX213N2tJeqnf8/ru7okH6SZCIAAQAAIgABAIDz3mLcTf+gkv9+O49rlTzz6NH+xa3V0knO+c+WYGFx2w/0i0o9Zzrd9+yYAQIAAEQAAgAA570jR75wfZ/8QtLWsnuIsdVWqq4eWv1f6fLVVd1sl7ZT92SosNWKK+Pq8/Ak0x3PZUjl6qGGqx1xAAAgAhAAADjvVZKhunx2a3h4naqSoyr709rKjse0nYPH77nnUsvp6u8sLR24b25bnTIkNTjkAABABCAAAJALYRZI9Rvtgy316tNsZXVC+LFv375Lq8/fTGo5Z0N7qdaWNzt2nbUtugAAgAhAAACA3B2VE+vXV+v+a5Kbc4ZhwWzWHUjlKUnGZ1lly849ytihBgAAIgABAIBcSFUg3Xx+y+tahtdtnc+30wgYKknX2vCwJMtn0fMZkupP2KAMuSmpD52kMgQAACACEAAAyHkZgCTJzdXqvya5PqduY9WOv1260lr7vqq66ix6PpcO6Z+W4xUfNZ+vvb9L+/WRdlgAAEAEIAAAkAstBJnPl1+dlg/mFMPQq3LFMPQvSq5YSeaTVPaeRaFCq6pLMuTbkyuWtrfDGiobveMMAAB8ifTWBQCAnHvD0LMZcHyubXv/tmpfKj86nq4NW1/6Vce+9Kx5LtX2Zunmy7KRTzi0AADAnWlkCQAAIOfQEPRjb0c2arr8iQzDs6rqwCm+ZlLJ4yr5uqT2n33Dz+veo9YdHob5m7b2J0M3nn5Nkgz9/N1nUVgDAABECywAACB36QyQYXl59cnpF89Javk0vmbf1tvZ+HymqTwtKyuPSLKIwAMAAIgWWAAAkLu2OiEnCyDO9Gvbl/i7HPv66WSy9xFJ98LFkGdUukecRlxQZ/kNWS2pJ0/m+Zn5ZOUlma+9P6nBSxAAAIgABAAA8qWEGzvfH3LywKKWly++b2v9dJdPDRsbB69LMjtF66rcgUCkJZfum6wcvTqL+t7W8pRKHlXHf9faMRukzsHj0ZI8fVL1iuzd+2Ntkcu6zQhkmmTuJQsAANyZd7YBAMD5eu67M4jYGUbsHy2tPDa3vVloaEOuGCU/1JIrtsKHbd+9jmZov9RG+UA2Z1m0JNUN48/N5wfflzvWjnZIsjqdrr5kaO1vVdVVSZa2/exj4UG325D0nHvtvYbW2qdSbW+1OtJa9+2LxaF37qiCAQAAEIAAAMDtODCZ7PuW1g0HjlVx1DA8JFUvymbQkNuGFrX35N+uHUnSb7ugP2qpDyXtlalsJNWS1o2r3n/06OG3nMbvtzqarLy0q3pJktUd1SO1LTm4tqW9vUs9J8l9zpNjMxta+6l+vvYvkxz2UgUAACIAAQCA7NL69YqlLB+816QffXeSy5IaWg0HKt23JDmQu7fU4ZpqeUvSajMUOcnjajhQqecltX+X4GOeluuGtH8/GdUfHz16+G2Tpb3f1Yb6qaq6NOf0oPe2tjXc/WglL5/NDr8iQhAAACACEAAAOHae2+3Zc8m9F4ujz066b0+1PUk9PpuzJXKKNlh1B8+h22l+vMuZtYZq275uo7V2XUt+s1r36sXi0F8kObp///5L1jb6R9WQ/39Vfdm5eNBaazcl9a5Ww7+pdP9zpb04yZGh5RXjbvzvNzYO3pDkiJZYAACAAAQAgAvaaGn/M7qh/6cteWhVXZzdA4/bG4qeO2m+RU4zLNntcaOt/3l/Vd6Ucfvl+dryJ5PPH9p8yJ6rxtPRP0trz6yqy3JiwJNzYPZHteS9XYZ/NB7nPevr6zckl9xnMt34P5N6cdLmreVTle4V8/mhf5fjw9+FIAAAQE7RCgAAAM4vk8lFj2o1/6ZkeHGqHlO3nZ1xd98IVDn9m5HazgHnLbm2Wl5fGV45n61fm43MkrUkBy6aTNqzWy2+uZLvSNUo5+bw83TJR2az9t7Z7MgNm+9+4YZuWH1fX+1bq+qSqjwsaf90PF2937jLG48ePfxWIQgAAKACBACAC+n8to2n+36k0l6R45UCda5UQmx7f+eMj50X/Fen09UfaWk/mtTqeXDs+ja0f7937+hHb7nllpsnk31/K2kvS+XKXapFrm3VfqTfuPhPk09vbFsTYQgAACAAAQDg/Aw/RksrT69W/6qSR+XM523kdi6i35UX2LvNMRjtk0kWLfmtrRkf700yO/b5JMtLSweu6Fv/tyrt/0iqa619siqXJnXRuXyO31q7rnV5YTe0L091L0uOhR/tUGu5qarum832Xq219tGu6t2ttX85n6+9f9saDv4UAACAZKuXMAAA5HwIP0Yrz6iqn7kD4UfL7YcctfX96q5427qg/4dt1P39UY1+aT5b/sNh+OLHs3lB/1j4MZpM9n3nMAy/UNWe2dI+Xqn/3C3VS1vfrqzUo3apJDl3DmLVclq+KannVtXlWx8+PLT8dDfNP8pQ1ZLlSq6oqkuTPKJVPaBG4y+0fryWLG7JuVPxAwAAqAABAIDTCj+ePhrVz7TkEXfRz1m01l5bqU8mrdvsxHTnGbr2qn7jyrckH93Y5Xz9WPjxotTwk0nuk7Q3ZFIvma/d68PJJ45OJivfmdS/2tEy6lzWkna4Uq+Yzfa8IrnpcJLpZLL3EUn3wlZ5eiWPTLJI2tGW9qpq49fO56PXJF886M8CAAAQgAAAcC7rkgzj8eqTu65+saU9IrdfAbHz8y1p60kqrW5qlV9N5abNkGP7iXPNxhv9647kyKfvgfP1bjLZ+6JUvSzJVWn1+nnaj2S+du0J1SFL+17chuGntqojznmttY93S/Xc2eHDH9w2/6SStOXl1SfP+/ZNXerFqdw3ySStHa6ql89mh1+ezSnxhqQDAMAFbGwJAADIOVz5kWScLk/bCj/63LbNa9sRfFTSDreWGzcfW9e2ar+Uqo0aan0xP/Rn2Zy5cRvz3KGZIjnDNlxt5/ObLO19UVr3siSXp7U/nM/bS5MTwo+WZNG6ujZD1pKcFwFIVV2VWXtpsvcnkvXrtz3fbmso/DtrvO91LcNzu8oPpWpfS14yHq9msZj8bPLFW4QgAAAQAQgAAJyDRt1k34sq7W9n68J4dg8Wjs3u2Eja+yr16q7rfqu11o3HS4fX1z93fW476yMn+V531cX03b7vuJvse1Fae1mSK1trn8i4+8eZH7r2xCqWi68eTTcemX74oa1B4eeLpZZ68XhcWSwu/sfJF6/bEWYtFotD70wu+0BNjywq7e8mdVFVe+lksvjYfJ5XCkAAACACEAAAOMdstYXaDAdy8lZXXUuuqdbemuTz827xq9nYuC5bBR2z2aHctiXWPXrB/NgF+53PryWZj4bupsWO5zmZzJ+V1CuSLN+FFSq5Z+aApKsuL5pM5m+fz/Mrx9qenRhu3XR4Mdv/85Pp8I1JnpqqlVbD/nN5IDwAAPClG1kCAABybrW96pKMJ5O9L0x1/zy3DT+2tbrKdS356XGXX5jN1n5pGOZ/kr6/OccvoJ+tbb1Gk8neFyXdy1K56nhHqEyTttb3s/dks01Xy2TlEaOqH07qK7c97/OtzdkoleWhm7w3w/zG3Z/jJTXqZt+eypcnadVqMh4vvavvZ5+PEAQAACIAAQCAs//8dRhN9z2nqvvZbIYfQ45f4N4KP9qh1vKXle6fL+aH/5/FYvaJHG+DdbZbujXcqdy7tfbJJJ+rSpfU/iSPq25S08neT9Z0+tBRG/7vpJ5xHlc7HHtODxxVPXjUTd47DPPPbgvDWnLpvsnk8IOGyvMrdfXmzPp276Haa1s//5gABAAALkydJQAAIOfOhfA+yWpX7elJu3Lr/W5H5cfhoeWnR934ufP5od/M8YCk5Z5vb3V7z6/G49XHJfV/JbmitfaHGXffMerGf62lvW7rcatd5Uf6YfFHWQz/MemedoG0empJnpHUzyQrj9h6f0iyOpkcfUlL/W6XPCxpb2utfTBJVZ+vSDKNGSAAABAVIAAAcHZbGU9XX1rJD2Tzwvb2lk+V5HBae8Vivvbyvt/4bJJFzrF2TzWZPLSS70oyb0P39/vZoT/p+42bR910OVVPTLIvqaWquqSqDuTcqWy5c9phVR446uoho9H42vF4+au78fR7k3x/VV3Wkv+0GLfv7dpoXslzU3X1ZLznNX2/cbM/HQAAiCHoAACQs3MOxMpksvKjSV6SZDW3nfmx1pKXL+Zrr0hy+Bx8nm3//v2XrK/3354ue1rqt/q+//Nj4cZ8vvZ7k8nq30rdOhC9LuBXxNPT6l8PaVdVy/2TSkt+YzEbfjyzIzfUZOX1qbwtLVdpfgUAANECCwAActaGH5etjqerL03VsfDjWEujrZZW7WBae/lidvhY+HFOXvbe2MjFqXxTkiPVutck69ffugbLy5em2qrXw9Zxr3piJVdnsw3Wwc31OvKZJOP5fO3aJH9hvwMAAFEBAgAAZ68DF08m6383yUuSWs3mBe9jF7aHJKOW9prFfP3l2Qw/uq2Pn4NqSJKWevVifstrjz/Pi+83Hub/JMljdwQBucCrgraO//Dqxfzw644PRU9p9wsAALgjCgCAnM0XuUejxaNT+cFdwo9k8yL39dXqtTnnw4/j5+iVdnOSg1trMEwm82dV8uIY6H2bofFJUq27OcnN2V4hYp0AACACEAAAODu1AwcOXFyVFya1f8f567GL29enDT8xn6/9do5XhOQ8uLB/a4XLdLrvIUm+LZthT1P9AQAAEAEIAADntFrbGL4ylWflxNatw1YIcH3f6ifm8/VfT7I4P55y65Ksp+Vzxypg+hrun2pfr/XVKVathouSHDhPAjAAACACEAAAcj4Pur7/Uje076+qK3Ni+NEluT41/MQwP3Qs/DgvgoHW2jit3jWfL351x6D33svi5G3SKt23TCb7nickAgAAIgABAOBsN1q66RuG1r5222Dr3Bp+tOEfzDfWfy2bwUCdP/MeWlW19WTlczsu5Luof4pFS3KgdcN+cz8AAIAIQAAAyFk+2Lob6vlV9cCc2NZoa+bH+q/neFVEO//WoB0PdVpbyvGQRxByskHoQz1va16KahkAACACEAAAzmK1yOZF/7bLzI/hPA0/kiQXb/27d++9rqxW35fUHuHH7b1c2pP66r9MFQgAABABCAAAOWtbGu25b0u7fzYv+o9y25kfF4TFYmM1ycOct5+WPilD0AEAgAhAAADI2TrUerI0ek6lnrN1N/91acNPzDdubXtVF8pd/lVlAPqZvXYAAAAiAAEAIGdxCcg4lcnWDIz3zucrv5PjlR8XTIuj1lo5Zz/jgegAAACJzRQAADmLL2S3lhurun+b3HTkArrAfetz7LrxRiWf9XLI7VYNJenakMuz2TINAABAAAIAQM7KaQ6b/23vnEyGd11AbaCqtYy+uPXO0aNf/HSf/D9JW4/qhtsJQWrvKPmh5eWL7qstFgAAkAhAAAA4G41a19I2WrV/u7a2dsFUQIzHwxer8sbki7NsXrwfqsuNSYYLafZJ7njpzBXD0C9ZCQAAIEnGlgAAgJxl7Z9qmL65ZfaH6fqNnNjm6Ly2vr5+Q5Lf2lG94Kal0zdsvU5UfgAAAAIQAABy1gUg8/kXr11aWnrJxsbGLRfgcGuVHnfO62iwjgAAEAEIAACcZWpjY+PjuYBDoB3vu5B/mq+bqhqSvVe2VvdPmnUDAICYAQIAADnLQgBtjHJrRYi1OP1h6P1k0j2nKs9OsrB2AAAQAQgAAOTsroS4IEOgfqN9oKV+z5rkdEtAWmuZbO11WtIEIAAAEAEIAACQs62iYf36VN4WwdDpLtlQld46AAAAAhAAAMjZHoK0UQQfp2Po+43L0w0PtRQAAIAABAAAcra3wholZlmcjnm6fFVa96Icn58CAABEAAIAAOTsmwNSQ/+WpL3l+FwLsvv8jyuGoV7YkgMCEAAAQAACAABnt5rP165Jq7+wFLfr4q7qGytZshQAAIAABAAAci7MAVH9kdOvmgEAABCAAABAzomL+q2ipVNOMywCAAAQgAAAQM7uaoaWJEPXXtVa+4hKkJzJUJCjSVkrAACIAAQAADhLz9v7jZX/Vqm/shQ53YqZoxnaL21sHPy05QAAAAEIAACQs7IKZEiW+mjvdLrrVUkWbZQPJJlZNwAAuDCNLQEAAJy9lrN8v35p/OzWvrjaWu5XruXb7wAAADYEAACQc3uYd2tLo4ektVdUanVb9iEFyWlXgwAAANECCwAAOMssNv/pkwxxQT93Y/gkZAIAgKgAAQAAcpfetDSOC/K5B8MPwRMAAKgAAQAA7kyj1v1VWv23bLXEsiK5y9uOZbPa5ljFjTUHAIAIQAAAgNyp8yu62ezQR1qX33P+fves+SQrj5pMVn96Mll9xWSy9zFJppYFAACiBRYAAJC7oCqhda3lc0m+kGRfVV2ZzYBEW6w7cZ0nk72PSupfpfKMJGnpnj6Zrr55Phv+RbJ+vSUCAICoAAEAAHJnVYG0UZ/Wkl+cjIenddW+pyrXRviRO7HtVZL7L1V1f38r/BiSDJU8Ksn3j8fdy5JL7ms4OgAARAACAADcefpRUl3deOTIketms/XX9Gk/3DJck+PzKvgSjZZu+oahta/ZVlnTba1tV11ePFmaPUfVDQAARAACAADkTixRqHnSRlvvjvqNtTdUyxtcjL9Tqj8qyaRafWtVPTAnhhwlZAIAgAhAAACAnKLF0h037/rXtiGXjvfseVw2L8ZXkl9vyfu2zumbZb7Dx6ZNp6vfXKlnbVvbbGtBVq2118w3+tduC0QAAIAIQAAAICoMvqTZEZUjRz6dZE/rx5dn6wL8fH7gQ9VykyX+krWhclWS+51s/Sv5THLk01FxAwAA55SxJQAAgNylQ8zvmu+16OKC/J2wpnuvTMsTs3vFTiW5PsnbdxwHAAAgAhAAAMiF2FYpedh0vPTp76mhPSoZ3jKfr/5ecuORnNhmycX0e1YbTUePrQx/feuQ3Kb9VVqunc/3/l6y5ngBAEC0wAIAAJY/dkW1/kWpfG+q/uVksvbb0+meb15ZWbl8WzVHnUUVJhecPXsuvara8HeS2pOTz2uZJL19EwAARAUIAADkQq/+WF6++OrFMP+nSR6dtCHJfVK5z9BGj9+Y5Z2j6d5/28/ae5Mjn7mDM0WSDLV1Pm8wd+5YODQMi+UkD0syOslaz1K5Ntk3S75gnQEAICpAAAAgF3AAksVicZ+kPTrJcrZdjK/K5VV5Tpf67fG4+8lkz1Vn9t1rOH4R/uJZVf44aYdjFsjthEW7Gg8ZnpLkwMke0Fr7dFr7peQTR4UfAAAQAQgAAFzAhiTdYnHo7dXaG3P8ovn2i/FdUivV5dtG0/FjT9F6Kds/11XtrX74mwcOHLh48/t+dKOq+63WcoNlz87Kj7TU7/Ub7QO7VMhsrfXqRWntRVV16UnDjaojXTc+YkkBACACEAAA4NbZHr/Rkmu3zrnbbR9Te6oN37ttJshJL+ZvlSPckmpPOHq0XZLTr3K4IMOPrZV5W7J+/S7rU0lqPG0vStpjTjKLpSXtSIb2SxsbBz9tWQEAIAIQAAAgSdLm8y+7tpI3J+lz4gX2Y6HFKKknzOfdE04yg+KEi/rz+eJX0+rtrbWx4OO0DsE4u4cfSdKq5UFJXbR7OLVZNdJG+e9JZtYaAAAiAAEAAI5dUP/gbD7r/0VLfi3JYrfHVeXy1ob/LblsT263FdbqTVVtPWm1bcC3uRRnPgS9TSYrj0zl4adcv1Z/Omrdp4QfAAAQAQgAAJAd1QZHPtP69mtJuzk7WzQdm01R9djJZP2v334Ashi16iatDXuT+y8nV+4dhn6vC/S7mldqfpJ5Kq119eSkvnGX9le3hiata78/mx368C4zRAAAgHPE2BIAAEDuqgqEru/H7+u6/j+k8kMnueB+ZZInJnlltgcjt2nJtDzvsjbqq35hMvn8oSQZKnu71BUnmWNxwa55WnvtfDa89iThxVJaLt0xoD47QpKDNXS3nOGa1h2eVwIAAEQFCAAAnHMO3jxUvT7Jp7L7he/WkquS5fvllBfLb1xrbfxzXaujqfprqfprXbonJVlxQf2E/c3h1vKG5Minc2IAUkmG8Xj/o6vlu08yR2Wz+iPt9+fzQ79/Gutau7zlDB4PAADchUaWAAAA7lJd62cf70aTh1TqcdmlCqSqHjTqug8Pw+w9Wxfxd73oPgxHbxwNkz9PlyNJ3pPknS3txqp6kHP7JGmHKvWK+XztF7M5vHyHy1ZrNPtfq/LspEa7VG60JF21+tNhmP3uGd4wdjozWcxuAQCAaIEFAAA5fwaiZ9aq/acMeVpVPXBbCHLs4vskybcuLe1/48bGLX+Zk8+dqHnWrsk8Lzn2geUs36+fjJ+VyrcleXou4MqCNtQnu9Ho15Ic2q16Y2lp44p+yLcnNTlZ+NFa+0jr2u/vNjtk+wcelCx9NAf2JON+NDry9d2onp9Un5b1pA1DdpamVJfKctrmcR+G9qq+X3u9PxEAAIgABAAAzmX9xmVvmU4//46WfHl2CymqfcN86L82ycdz8gqBncFJjubopzPPr2Ry0bvGtfi1Sh51gc0E2VqrNkvyyxsbBz9zsgCp79plGTLJKXtU1acXG3v/W7JeSW7NMfbv33/J0aPD5Zvfu4a/qva0cb94bNVintSXt5aHV3JjUj/fdd2NQ2vdid+3LQ0tP1SVpybJaFTfkPHKj/Qba2/w1wEAABGAAABAztkL9J/YGLp9v5h+eEpV3Se3GZ5dS6O071/ac8mbjhz5wnVnMDx7MxCZ3+t/1NINb0rLVySZXmBrXJX6H6n2piQbuw82v2Jv16/9UKs62ayVSrLRJe9LHnY0eXObTC56dNfNL09Go/X14dur2oEk1ydtXC1vrK77V0kbJbXoqlt03Wh+5MgXPr3bN++TTKerHx5aXl6Vb2rJI6vVzyyN9r50o19/w9ZDAACAmAECAADnnH0rew7PZ8MDqupRue18iWrJasvw8aGfXZNt1Qc5rbkSX+hH3eRTLfnmqrr4AlnSYXPdhmuHyksWs7V37hISbVWDLC93Xf+/pvLAk1XItNZuSbp3dpPrHtLV9Mnp2v/VWp6flkVV1lobfmmxWPmtYWhvHIZD7+/72U19P/tc38++0PcbNy8WR245xXD06vvZTVXjL1aX/ympSSVXtFFdPPQHXpWszwxGBwCACEAAAOAuVGfwdkbfd2Nj40jV9Jbq8ryk9ubEC/GtqvYk2T/001cns/Uz/RmTyd59Le3bKrk8F051TVet/YfFbP3fnKT1VZekTSbdt6bqO5Os7rKubbOMpPam6klJe2paHUyX3+tS/3k+P/xvhmH2B8Ow+MxmULFxNKcfUJ3wumptcrgbdVdvtSobkuwbdfNPDcP8mmO/qz9BAACIAAQAAHLnhx7tS/w+p/x8a3tvHnXt4lS+dkcAsvWz28XdKDcP/fydZ/r79P3GWleTVpWnJTXK+V1R0LaqZt5Xaf9sGOY3nuJ4HOjGkx+p1BN3hk5bb93mscmNSd7Yqv1YP2+/NvRrf9L3sw/tmL1ysvDr9sKytrn/mt8y6paXkuGZqZom2d+qbQz9/A+ze/suAAAgZoAAAEC+hPBjSDIZj/c9ro2GY9UZbZx0yWiyaK22pk20tFapvu+no/fk0KHP77jYXqee13Hw5tatfrTarT9zxwX5uqhae9COi+7tNJ/HrI1ybbXMkixfAMPQq1q+MJ/v+3CyvtvnuyTDZLLveUl79raqjbbj2H8mLe/tqv+3k0n3zrW19c9urx45xfHc+RrKttZc2dHm7NjnR/N5vW48rZdX2t9N6kClnj2ZrLx0Ph//XHLwZn+SAAAQAQgAANxJhuXl1ScvhjytWvuuarmstQypjPqWT1aG1yVtliRpW6FCq9nSbPaxjeTzt3NxPLe5WN6PP1Bdf21Le8QuX9dSefhksvLI+Xzt2jvwXCa57XyRnJ/BVTtcVW9KLp0nN2bXtUxa64YD1eqiYzNDtt7mrbXXVnJdkrfP56u/m9x4ZDa79TE58zksxw7A5JFJMs/8mt0ffvDmxWz/z0+mw1OSPCWpi1LtB0ejxZv6Pm+6EyqRAACACEAAALjATbL3UZl0L14MeUYlj0xVn7SjqXpVKm/vkutms8OvSbLY+bV9jreumk5Xn9+34RuqtQ8vFqP/kuw5kty0tqPaoCWpxeLmN4+W9r6khvrXVbW92qNLMiT1ja3q6UmuPYOL4S1J9Rvt2pp2v1fJC8/3CpDWckPXdb+ZfHCW21ZktCTjyWTvV6bV846vYVvf/NL6ncV8+IfJkc9sfnwtp1HpsdvPyGi08oyuq+cfe1kMGR6z+dpa+oukjTY7dSVJG1V1H5nNDv3/kq+6JfWe32hDe/Tm0PraX9VeuG/fvmsOHa8qAgAAIgABAIAzVSsrK5fNNvKTqTy3snlBPWnvatV+uZ+1P0/Wrz9Ji6PsvFDeWvtoajQbkksnk/6fVB25V7L621Xd+5eW8oVbbrnlC9sHd/cb+942na69qyUP3PG9j80CeeFksvKG+XztmjNrg7V+fWr1bWl54fZg5DxvX7YzlGjJnqsmS6O/31q+oZJHb80LuWZo+efV5XP9Rv/ft8KP7W2u2mnMdDmhOmS0tPKMUatXtOSRubXv1a0FON+w89drGQ6PxyvDYvHmnx3VxX/UZ/bdSb42yTiVp85m3YEcryoCAAAiAAEAgJzhhfN2dN49rqp/QqU+k5b3dNX/yu3MgMgu4UdLkvl87QNJPpBkaTzd967Whr9ZVX9jGPq/ub5eh5aW9v920vfDMPnsfH7zXyQ3rg2jfT+fxfCkqrr6NrMt0h7RWp6a5MPZHI59Jq2hxhfYLO3K8TkuF4+XVx+Vob04LS+uzT3PZ9Ly3tEw/D+Lfv2PdqviOEngUbsc8yFJlpb2P2g+9I+vVj++FX4Mu3zdztfOkNRqVfumZM/vHD36xeu6ycovjtK+KqnlJMutDQ9L8oncWmAEAABEAAIAADnt8GM0Wnn6KO2nWtU8bfgH8/m+/5TceHQ2S38HZkBsv+i9MZsd+nCSf55cNh2PD39F1ejbh2H4ay15bmpxZDxe+Xc1qlvavH04laO7f5+aJvnepaUDr97YOPjxM/g9TphHcQFo295WJ6OVv5uh/WBSB5K21tJeXa1eN5/vfVVy05HTGFR/qlZYByaTfc9r3bB/GIbnjSrfmGR6rKrnFK+J7e8PqXrmeDr6ycXs8v9jMj/69mEyvDWVp1fVVa0N/1ty2ZuSmw6bBQIAABGAAADAaeqSDOPx6pO7Lj/T0i5Naz8+n6+/Mlnvz3AGRG7bdum+ezY/9OkjSWbJTbPFIn+W5M+STKfT1TcPlfsk9XWttWdX5R2pXL7Lz60kqa7dv7X+O5MH/avko7PT/b0qNU8yvwDO97thWKwm990zmXzxb7Sq5yXtryWZtuS3qo1es5jf8tokB7dmfNTuVR9X7E2GrbBiqKRrk8n685N8fVK3hmCthgNJ+5ZqdWDrCOUOVqp0lbxoPF2vjVn7sUnqd5I8ZbMNVj12Mln/6/N5XikAAQCAfMl3vwEAwIV0/jsdT1f/j7T2E0OrvzcsDv9yjrcbanes7dKl+yYrR6+ueb5/61P/uqqbVXXzo0dv/tRtK0n2Xjlaqq/ohlyV5AdbcllVLk9qdUdVQ5eWP57PV56f3Hhkt9Zbu5/f77nPeNL9QlU9f+tnd+fp8TwypL2na3U0lUe21qZJ3tqq/dt+lvduzXCp21b0XLa6tLRxRVJ9a/NHtNb9nSRLJwRalYcluSonrzipL3FP1ZIM1fJvqpv/XD+Mf7aqvnlroMwvzudrP7CtBZsQBAAAogIEAAByqkqN8Xj/o6v139Uq14zS3jokizO8075OaGeUrE4mR1/SZnlxqq5KUq21Z6X1qfSf7SYrP1ddbuo3hmNDt5OsX99v5Po+qeXli/60tWHc2vCC1vLUVu3iSn3V1vfvU+2iTGYPyDzX5OQD2XdUNBz5dGX1kzn/W18td6knpdpNafXurtovTib17h0zXHIs+JhMDnzV0C0uzrD+1H7IC47P5MiVJ/kZwymCrzvjZrLRUHlKDeNfTpc/TMs3JlltyVXJ8v2So9f5swUAABUgAABwGi5bHU3Wf6ySH0/Ljy0Waz+7Lcg4U5PpdO8zW+uensp3J9m3+8PaWpLWUr+Xytu7lutmDzr8unww85wYXCwlV44mk4MPTboXtsozanO4dpK8oVX7vRq6g/P5od9PcsvtVaVMJqu/kMoPnN8VIO1gS/uv1eq18/nqq5IbjyYnzHDZCkpWHjme5hlJfWelfUVS42zO7ri9lmd1N80v+ZPWLf7PLt0z2lAvSavlJD8wnx/+lWNt2/ztAgBABCAAAHAyk5WVh7dZXlVVD2yVH1hsHP7F3PYCc516GPb9l0dLn3ty1/KtLfWsSq7e0RIpt3PF+1NJ+4NW7T/1Gwf+dPOj16/v+NlteXn1GxatPTqpWdrw5KT+RiUbLfW6Srt5qPxev3Hxn26bOXLs67utAOTnz+MAZJG0W9Ly8/P52suTHD7JXJZksvKISdVPJ3nGmRynu9GQpGtD+3vjcf+7i8X4tdXl4Wn5o67rvn9j45a/NAsEAACiBRYAAOSkQ8ofNs3ik99zvN1ROxYWdLvckZ+dlSNLS7PL+xqu6IbP/+/DkK9J1YNqa45DTh0wbP9+rZL7JfU9GfKNk8mhT6fywUxWfmm+tvzJ5POHth43Onr08FuSvGXz3b2/P5q230ir70vak1pyoFqeNZl88VOpen9l9d9UjY5sbBz8TJLZ8R913t3v1LfWrk91f9iqvbKfrb0vm+HHzifaDhw4cPHabHho9f0/TeoZW8epzsIQZPN3GtV3z4fJxyrD/5vk/07lG+ZD/4QkH1cBAgAAKkAAAOCkF5gnk71f1ar7d5U8KpvxwPctNg7/0o7HTsfjfV/dRsPKto/1GfK0Sl6QZFxVV29rm3WmsyC2DzA/FppstNY+05LfSJc/6YbxzfP5wT/P8RuW2rEh7Xv33uvKvp8vDcP8qUn3wlRbTfKVreVgklvS6l+3UfvQqHWfbK3976n80HlUATK01l6fcfdPVqbdhw4ePPjFXfY03eZa7b1yPB39s7ThmVV17ySjc2P/0942jNvLukX9s6Qem9bePhpNX3D06Bc/6c8YAAAEIAAAsNOxllA/ncrf2woERi357VTelLStkKGGtFxWLd+dapedeNd9TXPbmRF1J8x/2H5OPkvaoqU+lLRfr5Y3zOdr19x2nkWSZJxcOc3yF+816Ud/O5XLW+pJSXtQkqFavXVILXXVvvEsbft0B9aqrQ1p39HP1l9zmzZX2+zJnqvm09HLKnnRVvBxrjz/1lo7WF33ktZyaaX9VGvto6Nu9KytNlgAAEAEIAAAcC4PBW9JamjtraOqP57V/N9nY+O6JPOdc0K2f9HmzJA8oobhQal6cWu1VJWVs7Tt0xmvR9IOD5Xn9xtrf7Ij/GhJxtm378B4Y/jOtHpGVZ6ZZHKOPttPJrkulScm7VCl/uVs9tCfSt4zNwsEAADOzMgSAACQ8z8AaaPR9FmpPGFbGNBO8nZP3jh060X9qvqyJF83Svek8WjpsvF4+TOTyZ79i8XRg9taaB17frVYzP5q6GfvHob5O7rJ0lu6DK9qrfYnubgqq+f+DJcshpY3tmFxzY7jNJpM9r541NfLKvWCqjxq29rknIs/Khelcr+tqqSlpK0O4xv+MH1/sxvYAAAgAhAAAMgJwcWe+3ajekFVfUWOByC1IyQ51dvdHdhsO1+v+ybta4bW/qfWhmdlND0ynew50vcbn8/xFl/bv/bosJh9ou/nH9mzZ/LHbRj+PK3bn2p7kjpw7h7HmlblQekmN3eT6RXdePrAbjy9f9X02V3X/eMkj0yynHN75kntaI02JHXZqHXrwzB/kwoQAADQAgsAAHLC/I+l1e9Nyy9kc6j4uXYevKN9VTuaVm9N8p9G88Xrjubop05xjr/ZHiqXLY/H6z9dXX3PuT8Uva2fOJ8l46SWz5NZJzttHqvWfnE+X/uBreN2qkolAADgxM0CAACc31rapFKTbF5QPtcuku/4fWs5lWckeepiMnrNJCvXJXn7fL76u8mNR7aFA8cqQhbJTUeTlfPkaNbeC+jmrkrSWtWTx+PVJy8Wh9+a4yEIAAAQLbAAAMgFXfHcuvH0ayr1nF3aX+UcHQqeJF1VfUWqHp+qrx118yeNx+OD4/He+d6909FsNltP0u3Zc8l9qkbfWl3+dlL7zqPnfyFUtleSVsm9W9on2zB/ezYDLgEIAABEBQgAAOQ8bWO7fXD7ValcNbT6qrTFxpGN+pPR0spvtCH3Xiw2frAlD63Uxdr4nsMhXurFNd7/2sXilneZBQIAABGAAABAzv8g5NaL4VV11dbH7lct/0sqXVJ7Df47D451tfu29M9LLvtgctNhSwIAADmtoZAAAEDO+TCkdgwGXz3FvAzOuaCrJpV8+9LSxhWWBAAAIgABAIBcyLPftUk630z6rl2WC68NGAAARAACAADkJFUhnOsHtOp+Xd9+MLn/0gU6DwUAACIAAQAAyHlX0dMNrT1htHTTN1gOAACIAAQAACDnR0XPUFUP7IZ6viofAACIAAQAACDnVSVIDZYBAAAiAAEAAIjZLgAAEAEIAAAAAABABCAAAADcbZp9HAAARAACAABwPtlI8rmcMBMEAACIAAQAACDn6PDzdEl737xb/KrwAwAAIgABAADI+TH8/HCl/ms2HnGd5QAAgNs3tgQAAABnvcMtefl8dvhnk/fMowIEAAAiAAEAAMg52fKqkhxprd3QVf37+ezwK5IctjQAABABCAAAQM7d8GPR0n6zq3rFbLb0qeTw4a2Pq/wAAIAIQAAAAHIOzvvoW/Lri1n7h8na9VuFH8IPAACIAAQAAOBctEjaRkv9x8Vs+Ilk/focDz6EHwAAEAEIAABAzrW2Vy3545b28/1seG9y5HpVHwAAEAEIAACcXLl7npzFwcex9lavr9ZeupivX7vtY163AAAQAQgAAJxEq6RcTCZn8cyPN8xb+5HM167dej9erwAA8KUZWQIAAM5zNepWjyTDg1N54LYLzpB7uPKjJW0jrd40T/vhzNc+oOoDAAAiAAEAgNNUw3D0xmGYvHfU1UO2QpAmBCH3/LyPa4eWHx13o1/pZ4c/JPwAAIAIQAAAIGfcYmj+2dFo8t5UPTgRgpB7KvgYknRVuXao9pJhtvaqvt/4gvADAAAiAAEAgNzhSpD5Z4du8t5R1UOyGYIMWmJxN+tacu1Q7Yf7jbU3bL32hB8AABABCAAA5EuqBDkWguTWdlgCEHJ3tLxK8pmW/PS4yy/MN9beZNg5AABEAAIAAHeiLsPcTBByd7a8SnJD3+of9vPDP79YzP5K1QcAAEQAAgAAuUvuxjcThLv8dda29lzXp4Z/0M/WXpnNQET4AQAAEYAAAEDMBOGcbLeWdktL+y/V8ovz2fp/SNILPwAAIAIQAADIPTMTZPsFakEIZ+pYhcfa0PLT/Xz9HwzD/D1CDwAAiAAEAAByT4Qgw+S9XVf3T3JRVVa3LmKrCCFn0PIqSbqkraXl5Yv52suTHPb6AQCACEAAACD3WLui+U179kze0Ibhz9O6/dkMQfbf9nFwUhtJe0+l/t/5fPWnk7W1bA5AV/0BAAARgAAAwD1mPp+v9f3iL4fhwKtG3fxTrdpGpa5OshzhBzlp5UclGVrabyy6/gf6jfU/TNaO7qgMAQAAIgABAIDcsxe012fDML9m6OdvGHXLH27VjlbaA5Ia5cQ7+oUiwo9K0rfk1xez9hNZHLkux1unAQAAEYAAAEDOrpZYqSQbw7BxzdCP3lGjvC2tDiS5eNuMEEFILujwo2+tfSbV/efFbPiHyfr10fIKAAAiAAEAgJwTQUiXLG5p/fwje/ZM/niXGSFCkFyQw84rGf4449H3ryx3v7mxcfimHaEYAABwFmzoAACA0ztvbklGyRXLk8mh/yXV/WSSqyxPLsS2V2+Yt/bDma9du+01IvwAAICoAAEAgJy7F8DX5sMw/8B4NP1Iq7w1yRcreXhu2/7IDUfnV/DRkraRVm+ap/1w5msfcIwBACAqQAAA4DytCEmy98rxdPTP0oZnVdWV2QxCks1h2J3lynlR9dGSa4bW/sWkG717Y+OWj6r6AACAqAABAICc1zNC5of2re5563zIm7qW1bTcmMpyzAjJeRB8DEm6qlw7VHvJMFt7Vd9vfEH4AQAAKkAAAOBCOa/euhh+xUoy1GSy/rxW7bmVek5SByxRzuXKj2tbtR/uN9becNvqHwAAQAACAAAXntXJZOWlqfxgUvuTjHPiIG1yVg86v64lvzLu8sajRw+/VfgBAADRAgsAAHJh32R07G02DPP31Xj6lqRrae2KqlrN5lyQwU1JuatDjDNd37ZtbssNfat/2M8P//xiMfsrLa8AACACEAAAINvDkKOtn//Vthkhe1tre6rq0tzxC/XkdoOMM13XY18zSnJ9avgH/WztldkMRIQfAACgBRYAAHDqGSH3Xx4tfe7JXcu3ttSzKrna8pwt2sGW9ppq9dr5fO23kvTCDwAAEIAAAABnZjKd7n1ma90zkvadqTqQ4zNCco7MyDhbvaFV/ksb2r0r+f6tapuT/b7HWl6tDa29vJ+vvTzJYS9PAACIAAQAALhD5+CVzYvvF41GK4+pUffCtOGZVXVlNi/Ifynn6+2uPudvrX0+yc2n+fD9VXVZ7tp2V9Vabkry7kXaj2e+ds2ePZfcZ7HY+M+pesIuoc22FlltLS0vnx8PP1R9AACAAAQAAPgSh6UPSXLgwIGL12bDQ2vR/9NU94ycWJ2QMww9dl687+68X7t9Pq2uSYZXdt3kjUkbnSwsaK11XTeaLYbFd1XyT87w+ZzRoPNKrkmGH59M6t1ra2uf3fo53Whp79NG6V7RWh6xbZ7HsYBjI2l/UalXz2YrP5vcuLZjQD0AACAAAQAA7owZIZOsPCqT+q5WeUYlj8hZ1vaqJW9azIa/mazflGRxOl84Xlr9vmr5xZwYQNxZv9SnMrQ/aC2/0/drr9/tMaOllaePWv1My60hSJekb2m/tuj6f5KjR69PMvcyBACA88vYEgAAQM6GcCFJap61azLPjywvrz55MeRplXxPkvvcztcvknY0yail/kfSXpnKRlJDG4YHd9V9T5LVO+MXrZZFsnIoWV+cRquobvPzrbtzM49Uknlabqiu/vF8cfjXTxLGVJL0G2tvyGjlh6vq5dW1hyY1bskrF7P2E8nR6738AAAgAhAAACB3x3Dx7ujRw29N8rbJZN+nWoaXJFna/sCqXNZa1pIcTXVvbNV+K2ldN4w/O58ffN+2h652k5VbUvl7Se2/cyrBh7qD80julJAoaYeHlp+r1r16sXHoL5L0Jwljbv2avl9742Sy8qI25GnV1UMWs/4nk/XrtbwCAIAIQAAAgNyt1SBJhvn80G8sLR34k80qiuPtsvrW/kZXiw9XTa+ZTodbDh1a+3yymQRsazNVSdbm87WXj6crD6jkhbsMA78DunYPrcmtMzv6+Z6fS246vO25tNv7+vl87ZokHz5w4MDeg7NDX9w+gwUAAIgABAAAyN11wT9JNjY2Dn585wO+Ovm59yR9cmTY2EhyYqjRsq2aJMnhanVL6nZbVuUsnpGyaEP7zcW4/8c5evSG5PD8NFpw7VZds3Hw4MGNM/xaAAAgAhAAAOBu8J7bDu3e7WJ+y1aFwzC0V41G9Y3t7Bqsfrpen8rvjBf9HywWRz/1JbTXandBay4AAOAs1VkCAADIeV9N0vdrr+/79iMtef859Lv3afmjeWsvmW8c/pWjOfrp3InT1AEAgAhAAACAc171/drrh9b+RdLWcw5UQLTWrmvj+j+zObujU7kBAABEAAIAAOymunw2m22xzoUZGLPR0N20bVi58AMAAIgABAAA2M0o59Tw82ZYOQAAEAEIAABwexa520MMczsAAIAIQAAAgNxVw9Cn1efhScZb79fd83NrYfkBAIAIQAAAgLvC0tKB+6arv5PUcu628GPvlWn5+pxYEQIAABABCAAAcCdpldaWc/e1vmqjpXp4pf114QcAABABCAAAkLsulMiXXtUxHs6w9ZYh5gAAQAQgAADAXaT6JEO+tBqSyyaTgw81BB0AAIgABAAAOAuMh/RPS3JpvoSWVpU8JulepKUVAAAQAQgAAJB7vO3VZcsZ8oKquiR3vCXVsa+bnkFbLSEJAAAQAQgAAHBXGnL3z+NYWHYAACD3UADijiwAAMgFUw1yd53/tyTT6vPwJOOt9+seGtwOAADkwgxAmmUAAADubEtLB+6brv5OUsu5Y0FGs18BAAByxwOQy1ZzZj18AQCAC9tphhKtS2vLd/SHVOXerQ3fkTxsap8CAACcqW4yOfL70+nq319aOvDlSZa2labbYAAAALfRargoyYHbf2T12Zw7cgdDllptLd+U3Lj0JbTQAgAAcqFWgFSe2tJ+rO/7V4/HK//bZLLyqG0BiCAEAADItmrxVum+ZTLZ/5xshhujXfYPlWTc2vDwJKv50ipNessOAADkjs8AqdXq8vDq6qda1a+NRitP23anlp67AABAshWAJDnQavjmPbn0qiSLbbM6tr1dttza8Heq6sov8ecl+bw9CQAAcMZGo9H0n2x/v5J7d6P6qq6bPng0Gt80DPPP5/hdV6pBAAAg51xokWRlOhotviOVB3yJ5/a19Z+v6LvFw7rx9PKhX/5ocmCULC8nF41GS+0p427+w63q6+u0WmWd4veuLI+68Y3DMP9ANm/SsicBAABOb1Mxma62XcrMa+t/3l+VN2Xcfnm+tvcTyU2Ht2043IUFAADnTNXGZauTyZHfTeXpd9I8jWPf45a0/Hk2K0EqSWtpV1fVQ3LnDFuvpD5TyffNZod+P5tV7IPDCgAA3J7xtruoakdZe6vkUWl5aJvluaPJ+m9W2/fqxeLQe5PMtj0OAADI2V4BMtzZ8/1qay+xP5WnnPiJytbnujvh5/RJu2qodrVDCQAA5AxngHS7bIQqt84HyVJVPaCr+rGq9lujyco/WF5effK2O76UoAMAwNnr2FyOu6KKu9vxM7a/dblTAxw3XwEAADnDGSDd+JIkD0zVdMcGZme4MUrlQFU9ZWh5fI0nH239VdclB80HAQCAs9Zlq8nKdLK08W1Jvj3Jvrvg3L12ecudFN50SXtzl/rXfT+7yb4DAAA4XaNhmL+z65benKqW1q6oqtVt1R+7bS5aJVek5Ynj8ZGvrsnSDftW9hze2Ng4cife5QUAAOSMQ4jR8vLF9x2NppeNx8sX1XT6FeNu/rKuW/yv2Qw/rsq5V71SLXnLqJv80WJxdCPJPCdWnwAAAJyynDwHDhy4eG1j+MpuaN8/tPaEqnpQbjsfZOfAw6G1dn2q+4PFrP9Hyfr128ITJeoAAJC7s7x7/zO6rv9nLbls63x8WlX3zYltpM7BCop2sA25Lsm/aaN8cNS6T89mhz6c40GIoegAAMBt90hb/9bGxsaRYTH7dN9f+dqarF+b1FdVcsVJ2lsdG4BeVbW/kkd3o7pq1C0vD8PeTyRHj1paAADI3TXXr41GK88YjfLTqXpsVV1cVZdU1YFt5+7ncNvaWq6qy6ry1EpekJZHjkbT5enQfW6Rxc3aYgEAADlFALIt2DjYt37+l9PJ9Np+aJ+s1JelsrLtsW2X3r5dJY9KtWd2o2EY+uVrko15jt+JZUMCAAC5yyq6R6PJ9MeSeva2Ku7dZnSc6093ktQklQem8qyh6x7ajSeXD/382iQzLwcAACCnCEBu3VksFrNPtGH+37pu6W0t7XNJ7ltVe5OMs/sdZC3JUiWPGXXtG0ejcbe0tO+zi8WRtXO31B4AAM56S5PJ3hdW1fckte/8CTtyspkgt+5ZqvLQSj2pG00z9KvvTY7M7DsAAIDcTgByLNwYhmH26TZc9K7Rnvnr0iot2VPJ5bvcdXastH5PKl/Wkie3oX9qRtOj08meI32/8YUYVAgAALkzqz/G431PqKp/nar7XQDV1zsr0Yds3oT1+FE3fHQYZu/fNpMQAACIAOQ0Nhnrs2E+v2noZ38y6sZvTdWDkzzwJCFIkrSq2pOq+3aVb24tjxyNJu8dhvmN7sgCAIDcaQFITSYPreS7kppeYO1njwUhQ5Ll1rU/Gfr5u3LizBMAACACkNM1DMP8hqGfvK8b5aOpuncl986Js0F2bLpqnMoDh+SRk/HS1f24/ip9v7ZjPohQBAAA7oBuNPmKSn3b5nyMC/a8ulJ57dDP3y0AAQAAcgcDkK3AYn7j0M/fXuPlj1UbHtySlarak92DkNqqCLl/kq8bpXvSeLR02Xi859N9v3EkyeLY3s3hAACA07d3772ubP3in6fqKy/wm4oEIAAAQO6MAOTWYKP1G3+1tLTvdW1YfCyp/alclGTPLkPSj21CRkndN2lfMwztOV03aTWZrk5Gy5O+n30ux4MQGxYAALgdk8nefcOweH6qHiQAEYAAAAC5UwKQY9piceSWYZhfMwzLr+pGrVXyuCRLu2zA6vhmpJaqcnlVnlrJC9LyyNFoujwdus8tsrhZSywAALh98/n64RpPbq7k+VpgCUAAAIDcqQHIMUOycWToV9436vKhVu1opT0gqVGOV3TsNh9kktQklQem8qyh6x7ajSeXD/382iQzQQgAAOSUQ9C78fT+lXxHUks7zrsvlDU49pzfMPTzd3hZAAAAuZMDkK3Nx9GNYdi4ZuhH76hR3pbU5ZU8cGtDMtw2ADnhzqyqykMr9aRuNM3QX/xnydrMkHQAADhlAPKArQBkusv59gW0FnX5qBu/cxjmN9g/AAAAyZ0bgOT4DI/FLa2ff2TUTd5fVRe11vZU1aU7N2vbwo3aFogsVdrjq5tNRt3y2jDMPpekt4kBAIAIQE6yFpV2YOjq1a2ff8zeAQAASO6aAORYCXoNw/yzfX/la2qyfm21HGlV967kwKkGq2/977SqnljJc0aTpc8N/eyaHK8gAQAABCA712KjVX5LAAIAAOQuDEB2OLho/fxjwzD/g9F46QtpeWwqe0/jZ49SOdCSx3Y1eWjV9Ghr84/dNiwBAIAIQAQgs1b5bQEIAACQuy8AuTWsaEM/++9dt/SWlva5JPerqj1JxttmgezcqLRK9lfVV3ddPWY0Gn9yeXl6cD6fr13AmzsAABCACEAAAIDc8wHI9k3JYhhm17XhoneNx4vXtLR9lXr05tyQEwei7/i3JbmitXpG39dX13h8S+vHa8ni0C5fCwAAEYAIQAAAgAhA7v7Nyfqs72c3Df34PaOuDg/JqKq+7CQbtlsHpVdlpSoPquRvdKPuiqV+9O5FFrfY4AAAEAGIAEQAAgAA5J4NQLZtUha3DMP8TePR9N2t8tGkLq/k0m2/V9tl89IlNa3kEX3XfWU3nlw29PMPJplpiwUAQAQgAhB7AgAAIPdsAHJMNwzzG4d+/o5RN3lHa/lIWl1d1fYmtZTNEKTt0hKrq8pDK/XkbjRtk/GeT/b9xpEkC0PSAQCIAEQAAgAARAByzzpW5VHDML9xGObvm0z2vCZpB5O2ktTl2RyUXtsfu/U2JFmqtK8ehvbNXTep0Wh6ZBjmN+bWahEAAIgARAACAABEAHJPb1wWfb/xxb6fvWMYd380at16kg9UV8tJrsiJbbG2QpFaqsrlVfVNrerrutFkZdRND28LQgAAIAIQAQgAABAByFlgSN/fPAzzNw3D/DXJ5CPp6tGVXJzNipDktjNCRpXcu1LPGpJHTsZLV/fj+kT6fm2rWsRGCACACEAEIAAAQAQgZ8FGppJUa/OPj7rJ204yI2SnVlVfluTrRumeNB4tXdb3B96brM+2tcWyKQIAIAIQAQgAABABSO65GSFJktuZEbKzNdbWDJC6X9K+prr5ZNQtrw3D7LNJekEIAAARgAhAAACACEDO0hkh44wODa2Ntio+smNI+rYZIfXESp5Zo8n+pelSv1jMPrFtsDoAAEQAIgABAAAiAMlZMiOk72dvHo+m726VjyZ1eSWXbnte26tCRqlcVFVPGVoeP+qmDx6NxjcNw/zz2awIUQ0CAEAEIAIQAAAgApCzZKPTDcP8xqGfv2PUTd6xbUbInq0ZIduHn7ckrZIrUnliq3riaDx9yGh58qlhftGRrRkh26tHAABAACIAAQAAIgDJPTQjpJLUthkh/3VIW6/kcUm2D0qv7W2vKrl3kse0Ps+t0fyik8wIAQCACEAEIAAAQAQgZ8GMkJuHfvbn3WjyhbTqq/KAHc91exAyrqqLTzEjxOYJAAABiAAEAACIAORsMR/6+TuXhtGb+1F3r0p7SFKjHZUddcJa7JwRMkyuHzK/0XwQAAAiABGAAAAAEYCcPbpFFrcM/ejdNcqfptWBJBdXZW9ObIuV3WaEpGsP6paWP7JvZc/axsbGkWPfc9vXAgBABCACEAAAIAKQ3CPzQRaHWj//yJ49kz9uQ/uzSj0qm/M/ts8Quc2MkFR9WYb27PkiD6hMbmltfnOSI1pjAQAQAYgABAAAiADk7NgQ1Xw+X+v7+UeSyUfT5WhSl1VyUU4MQbYHIV1V7a/kUVV5/mi0dOl4PB73/fzj2RyUDgAAAhABCAAAEAHIWaG1+ceGfv4H49H4Q2l1UyoPT7K0S0VIbm17VbU3lSe01FNG3fhzw3DJR5K1QTssAAAiABGAAAAAEYCcPRuk1vfzDw3D7E9H3aRacv+q2ptknGQ4xXyQ/al6/KibP2k8Ht2yvLx083w+X98xXB0AAAQgd38A8h/bZrU2AADABRuAZNtA841h2P+e0Z7Fa9MqLdlTm/NB6hTzQfan8pDWum/q+3r8MJpck2F+o9kgAABEAHJPBiC/sRWAOCcHAAAu+ABkK+A4sjHM5zcN/eyNo2789qTWq8tqkitOMh+kbc5Iz2pVHjKqetBoPF2e9t1nF1kc9LICACACkLu1ujtJtZbr23DRu5L1mZcHAAAwsgQn6IdhfsMwzP4wmXwkXT26kku21qntqATZvrF8YJJnD1WXDNPRn2exOJLNNlruPAMAIAKQu2MtapTkPpPJ8Ht9v/EFLw8AAMDcil02kUm6vl97Y7X24ja0lyb5zI7QY+fg85ZkVF29YDKMfmc6Xf2x5LLVbdUjghAAAMjdUuHdLMMZ74HsVwAAOC+NLcFtNky3ms/X3p/kA5PJ3sNJ9zdTbU9Sj0sy3WU+SEuylNQTWtrDR5P1PdX2vXqxOPQXSTa2t84CAAByV97QxJcWfti3AAAQFSA57+8cqyT9fL7+6/P5nr8x7/oXtKH9hyT9LhuFbUPSa7Wr+rGq9juTpX0vyIkttAAAAM6Wfc+w9daiggYAgJgBciEakvVZFotbpsPoz9u4+1CS5WzO/shJ7jobpXKgJY/tavLQqunR1uYfs5QAAMQMkLvKF7vqXtn3G1/08rhdkywv329SSz88Gk3/l5pMZ62/1w3JRePkloWqGgAAIgC58MrDF1ncMvSz9wzd5H1d6uokF1Vlb04ckn5Mq2R/VX1119VjRqPxJ5eXpwfn8/m66hsAAAQgEYDkbu8A0JIrVqbTeknX6idS9a2p+tq0PGE0mj13ND76VaNu8onJZO++vt9Yy2b1u70LAAARgFw4G80uw/yze/ZM3tCG9meVelSSe+9yl9T2oelXtFbP6Pt6/DCaXJNhfqOBgwAACEAiALn7Xi8tyepkkh9N5e8n9eXH2vVW1b1S+fIkj27Jc1vat3U1qdFoemQY5jd4bQEAEAFILqhh6fP5fK3v5x9JJh9NcjRVl1dy4CSzQaoqK1V5yKjqQaPxdHnad59dZHHQcgIAEAFIBCB3qcl0uvc5Xbf0Pan6gaRWt809rG0V7eOquriSy6vqm1rV13WjycrQT9eSW2/iAgCACEAuEK3NPzYM89eNxktfSMtjs9kS61Rr+8Akzx6qLhmmoz/PYnEkm4MHbSYAAMgZBSCZXl1d/uek9gpABCAnm084mex9YavuZ6ry9CSTXarRd6tOH1Vy70o9azSqB4+68fuHYf6FbLbFsncBACACkAuonHzoZ/+965be0tI+V5Wv3roLb9htNkiSrqq+ctTqG8ajpcv6/sB7k/WZ/roAAJzJeWhr+74w6oZLUvnabXf0RwDClvFkae+Lk+6fV3JVzmymR9v275e3qq8fjaYPHfrRXySLQwI3AAAiALmgQpB+GGafbsMl7+xG81TyuCRLuwxIP/bvOKn7Ju1rqptPRt3y2jDMPuuOKgAActpDrY8c7SbTL6/kubucd0YAck7uK+6s4zfuJvte1KVeluTKbN6cNbqDv0vV5tzDx3Wj7tJuMr15WMxuSXLEnyEAABGA5AIKQtZmQz97Tzea3JxWi6o8YJe13tZrt5aq6omVPLNGk/1L06V+sZh9wpB0AABOpxK5G0++tlLP2THTIQKQXNiVH5O9L+7q1vCj5Y5Xm2+fE9JV8shq7a+PumkNw/zPkswsNwAAEYBcUOZDP3/HdOje1rruQ6ksZ3P2x0n78qZyoKqeMrQ8vsaTj7b+quuSg73ScgAAcsoAZPp4AUiSczcA2Xa8rtyb7FlK1oec2E63zux7rV4yGtdPJnnkndgarY5XHtWeVD1uPJr2ff+gdyQ3Df4cAQCIAOSC0i2yODgMs/cM3eR9XerqJBfV5pD0k7UnaJVckZYnjsdHvromSzfsW9lzeGNj44j5IAAAZPcA5GsEIEnOvQCkO7YvOHDgwMV9N33MuNv4ya5bfM9oNO4mk703T6erexeLI4e2Pf60vud4Ovnblbxgay7hXbGPGJIspSXDMPudrXmGbtoCAOCsMrYEd6lhaxPQZb527dLKynfP5+3xSfcv2vE7sYZtm9RbS8ur6kEteUD64SlrR/IHyd5/lKxfvyM0aZYYAAByroZXQ5KLRqOVx6wdGV6YNjyrVV2ZStdaPbofFrf0Q/+B0XTvL/Wz9t7kyGe2B18nC8SSPfetlmek6qJtVSR3YdUKAABEAHKBasc2J2tra59N8prRaGVWo3xbUs+s5OqTb1xSVXWfpH3XeNotpVbf3rV8ZjY7/Jokc0sLAADn7l5sOt37zNa6ZyTtO5N2IFXjW6vCqy5NcmmS+1fqqTXtfndrP3Dd1n5gcbJQZbI0ek5anrntZqvcNQFIO1xVb0wumyU3lRu0AAAQgJC+X3t9+rzphA1P1YGt47Fb24JRJS9Mywtb8pnJZO/F8/m+/5jceDRJHxUhAACQc6VlWZLRZLL3O4d0L6vKVbtkFHViS6ta2bEf+In5fP3Xt+0F2klaYd2lVRqt5Yau634r+aAh6AAAxAwQTtj49P38Q8Mwe0fV9C3pqur/Y+/v4+ys6nv///VZ13XtPTN7JiGEEBJQbOXGm4CCRWsVVCBFQMWeagsVsEdPrbWtVsD+2mprbWtvFPCnVmvtqaeCiq3tsRwqaANoQWuVKghBqlJbFIgQQpibPTN7X9e1Pt8/9p7Mzs7ek0kySWYm7+fjEQ0zkz0z++5aa33W+rzh5M4+wF0TlpmTJCswOy0J+QvTNBkbGKg+ked5XUfRRURERJQBgjJAFmsGyMxjkgwOHr7ezF6FhXcbrGe2iGG7OVUOrRMdKzF7XpKm22KZ39OjxZXFcviRYOXhZpzUnvP5fnpOjBn2ibJsPq6XooiIiIigAoiw666sKff8v2OZ3JEkoeowaHBUR09g61HYWIFxgns4qyztOZamYyGtHONlvh2YVhFEREREBBVAUAFkkZ36IKmuONvL/MOOXWRma9ofn89JjZ3yAoEVYM8lVLd5bN5Hq4jS8bVTYzGmX08TjgA7aT+dBonAv2bZwD/k+eSEXooiIiIiggogQu+dXAbFeCybtyQh/SrYpBsjBms7vq570oMZw2Ycb3CBwc8moRJizP8d0BF0EREREVQAQQWQRVL8qJ2UVioXm3GFYT9hZoN7eSqj87EdCe7HZ9nQP/X+ffOJssy+HhI7ouOk+QLOY3zSzX+rOT36Tb0MRURERARlgMg8CiHNPJ+8E/jmwMDw6UXkTINfAo7uUQihoyfwcGs65L+RVoaON7cb87z+aebuCSwiIiIiIvt7nJ/VNmRmVwEb8R1tbfe1SOXgzWh8Nm9UHu3/ZZNbiubQ29NKMIPXdMz/9vF7t39+s0b3KRcREREREVQAEfrv6AII09MTtwNfybKRHzrxcjOe3C509MsHAWzEsF/AeEmWDQ2k6cAXpqYe/xGzR+I1KREREREROUCyrHYyZlcCG5ltb2sLsHnKgCaBm2HrxNxB6JNbiia/k2a1VWZ2QVeb3b3/Gdy2WrRJPcoiIiIiwiLPoBAW1UmQzl1hMc/HP5WE9GWG/Sn414C8xwSnsz1WBNY59t6iaHwmqa44s+s2RURERESE/b2xad2Qmf02reLH/mhNloBX5jG/SIAthv1gAecs5sbfFMX4v+v0h4iIiIigAojsZSEEYLrRGP2vZnPiPbkVFxr8cXS/vWOi0V0ICYCb2SrMftKI70krtcugdpKKICIiIiIiHKDcjyK4c2SP094LNGOwLyee/NcenBgJC1b8gHuI3Eore1DzCxERERFBBRDZVzmNxgPN5sS7ArwJZxN4o0eOSOfkys052bCrsopdRVbb0KeFloiIiIiILLzIftoo5cH/X7M5/r2ZDVDzyAxZsAKIObcVxcTt8/zeIiIiIiKoACLzfszyvL45hPCm0vlfuH/V3bf3OXpuHROvjZn51engyE+uXLlylQohIiIiIsLyztVbzr/fqMUwNo/ftXN+8BgLdmLDTfMIEREREUEFEGHhd3xFwBqNsftjXr8uTas/Z/jbgC3tSUjZJx/EIZxJET9Tn4rvTaq1FwOr1BZLRERERJbXeNnKRdraduHyN4g35Pn4/+tR5OhbBMmT8q/BFyizw1wnP0REREQEFUBkP06kDPCpqccfyvPJv8Hj7zg8TCvksLugMVMESczsGMNfG5x/yLLaW4BhTV5EREREZJk4PFKeCaSLaL614JuNzMMTwOge3fb0ysdwq+spIiIiIiKoACIsraD0Ms8nPxmIv4zzAdy3AcUc/zYFOxyzy9PK8OWw4vCOSaJOg4iIiIjIkhwfm9nhRC6CNQMHcWzbHqNvnYb4SWZPah9kUW2rRERERAQVQGSpKprNyX/K84l3xsirHK5tF0H6HU93YNjgLVlW/t8sG7qE1ukR7zgxIiIiIiLCEmwZuyjG53k+eU3p9nbgwYVsh+UWDwNW7MXtLdDPoAwQEREREUEFEDngk70APFGW9S8Vzfh2w6+dyQyhd0C6A6swexEW/ihNa2/KstrJHQUQTWpEREREhCUWEL6YxrAx5uPXOvzvhcneaN2GEV6RZSOv2Is8v3Rh7h8rURtdEREREUEFEDnAE6zZidHklmYz/i7ufxTdb5+jCEL74+st2JVudk2S1M7c+bZERERERIS9K1gURG51uGeBiiAOrPAQD9uz/MA1TTNuAZ/Y5zG++bOyrHaSiiAiIiIiggogwkHrOzz1cJ7Xfz/Am3A2gU/TKmx0H32fmQBlBs9KUrs6y4avyhh6llpiiYiIiIjs2yntopi43ZzbWJgCSNeYf75f++2mWfi0Oz9i3wo6EewMD8kZe3ECZW9O8+h0uoiIiIigAoj0fYzzvL45hPCm0nm9w+aOCUTsdaTenZMwLiML78my2oaOgokmHSIiIiIi7M1ivtsyahHmUC7UafHuIkdo//EefzR/FREREZE9kuouYLnvOHPAGo2x+4H7s2RoWwzhzRinAOuZ3Tlm7JwNAsZGx65MKkMfLJt+J0w93J50RN21IiIiIiJ7Mi43XzwnxVmAosWOHBDby6JHr7/vCLGvVEaOLy0e2/7vUDbit9vzEVvg30VEREREUAFEln4hxABvlJO3UK751yybvMDNzzPsfLCV/SYkBmcZ9kKrhL/LmoPvmJqddGjCISIiIiLCIZdp4u0Zxgtg6HqY3JuWWt7n7yuzbOQVHuIKj35BgBcAOZBYJbnefMXn8jy5EbaP6qEQEREREVQAkR4TixK2TuQ5nwSuT7LaFcG4HBju/xyx1ODiPEvWpFbbVDTr/wcY110qIiIiIsKhWATB8FcmVft42WBLjw1SRv9TJwZrhyA4A9vXZGXyOmANWHSLK8Ffbm4rZ77LzGYug9dg8YK0Eq8smis+CGNjQKHNWSIiIiKCCiDS54THRJnXr0wqwx7dX2tmRwGDPY6yO5Ca8TKwF6eV4VWJJdc0GqM/AqY06RARERERWbJ5HuzjKfNeIeWdLXMr1erKo8EDWOmeb3CvvxGoEpMhzH4CqLR+odDZBqtXEWXY4C1ZVr4Ehj6e55PX0AojUVssEREREUEFEOmeQBgw0WxWr65UGp+J+OWG/SKzoYOduSAzE5lhwy8vY/FzWTZyVZ6P/03HBEUTDhERERGRA8KKfcjgWChFR+5gh8H1STU8AyisZEPp5RtxH2h9ndXMWNcxzfCugkmvgkrnPGYVZi8COz5Na8Nm/Eue1zfvh5wTEREREUEFEGE5ZINsG282+TYM/l6WhR9GODOYnd4jIL1dGLERM54B/gdpZfhJaeDW6emJ21UEERERERFhKWRwLMTPUCVyNvC1LKv9uAde1P50ifMCc38l4ARSYBCzfhkge3KSpfOkx3oLdqXDfUlSu6Is6zdzcItBIiIiIoIKIMJiPg0y9XCe8/tZVvt7nPdhnL3bSQf8fhF5VVKtXVY2Vn0ZHmz03gUmIiIiIiIcmAyOA/AzWCUYv2aV2jHROTa4vaj3tGHOQsa+tvTNDJ4VUrs6hOFN5PGanMlv6SkiIiIiInTs6BehY8IU8ry+Oc/9re58zp1HO46l9wo2jAYbLPLhSuWJv86y2jPbXxe0A0tEREREZL+O3w/2pqMVhl0azF7Uni/EjnmD76efsfu2S3c2YFxGFt6XZUOnah4iIiIiIqgAIn0mE+08j/q91Yq/Llh8ncHmjudKdxEkAG5mxzlcBHYVWe2kjj6+mnyIiIiIiHDQQ9D3R2h650Ypm+PPQhU8YldRJQDJzPdwY5UZZwFVzUNEREREBNQCS+Y4DVKv1x8FPpcktaYZrybYSw2eNEcfYMPYmGFXUR3+TNIoPj/N9A91d4qIiIiILMsTI/ujqDJXu6zOvxfufqNhD9AqhDSMeG0zn/wPoIFa8oqIiIgIKoDIPJRlfRPwxaw6cgnR34VxFJDNMTHZiPOSIk2uJR14J9PTPwJyhaSLiIiIcCAWiUXPAd913reuEuNYbRE+V3zu57HX21/TwP1aD+E74IlhzawZb5pi6kE99CIiIiKCCiCyj5OpMm+MX5emI9924suD8RtgNXa0zNplwpVYsIuymDzDKsM3NJuD74etE7RbZqkQIiIiIrKAg7UYnsB8DBjRvXHIjdNnsvfK2Q+vGa5WG2vbYeVFjPlZMH5hNAYCdhQHr8BBj4LHjnmEu28BJtv/GQweKeEDFngEiGVz8pvA2MzX57u2ddY8Q0RERERQAUT2ZtJiQKMoxr8GazdbpZ4bXAEM98j7mDnpUQV7nuPPTLLJQfORG4pi/E6gqdMgIiIiIgs3Tsvz8f+XVobOMcLFHRtUZPnLZ8bilcrICaWVTwFrEifPKiMXzY637XAzDg8H5mmxu4JHZ8GiCf7vuE0CjWD+EbPsXvCklTOYNPPp7Q923cZcBQ/NL0REREQEFUBkXyYyBo/UiyZXpZXaE7idbcY59G+J5WDDwfhN8NckWe3jWWK3TE9P3K4iiIiIiAgLdQpgzDw8obLHIfN4O5AR/X+k1eGngwePfkHAXggUmFWBSv/x/AFtx9b536NOvME8jIIHYGuelB9jetVWiAaPTPaZH1hX6LqIiIiICCqACPuxEFIvmvX3DzDw2TJLz8F4NbCxx+RqZrKSYRwbsHcWkZ9NqrXLysaqL8ODnQGFKoaIiIiIoBwQmc9jbdVg9uutEbS1H307kM8P75PZMUmrSBFw2+rGxzC2ggeLYbTIJ28ARtmpj9WWPT1VIiIiIiKCCiDCfi6EhGmmf0jOX5HV/i3F/gQ4zYwj55gURYMNRD5cqTxxh3vtT/O8fjezx9nVt1dEREREUHFq3mPyXic77ECdRHH3B2m1uO3O7AgWrV7k499of75fGyy1sBIRERERVACRxSjumMDk9c3VWu11eR6f5578MsYpwPqukPSZP25mxzkc52ark8rQB8qm3wlTD7PzqRFNgERERESEJV70aP+/236oSxgH6QSQu38vmN3hSfjzxMMjrSF+z8wOU26HiIiIiKACiLB0T4I4QL1efxS4EdbemmXjP+cW/shaRZB+fYvN4CzDfsoq4XrzFZ/L87Eb6TwSLyIiIiKyhAPqZ3MrzJdJ67NWeyvjI83mk/8cvp0XuxYxbI6Ch4iIiIjIAZPoLpCFn+jV8xjze9MkvQ+3x8CPw6zStfPLZtteWcXgZMzPDkl6YhIqAzEe9l8wWXZMHNXTWkRERISei98GeJJUzsN4bv9shkPm/vh+jNnfwmTzAAV+W++NZmuGYGWaZfGZSVL9Tbf4EsPWLpO8FjO3kMXxL5c0HtdYXURERETQCRA5xCaeRbM5+U/Al5Ok9llL7GI8nmNm65gthHS3ulphhIswXpRlUxeZDf5lloWvtU+W0P53UXeviIiIiByk/I4+JxvWDFerjbXtNPIixvwsmLoQiG62xuAUm90LZEv8REv7t/DT86x8Hjn/pTG6iIiIiKACiHBoHfeHVsHiibKsf2nl8Mpv1Zv8b4ryD7CwkZ0zRDoLIRFYj7E+enJao8nXksrQX3ZlhKhXsIiIiIhwgFpKdY9Vd8iylafGUBxGnHxJGblodoxqq8xY3frHRp+g8oM5Trd9D1u3aoK/qTp4+Jemph5/SE8bEREREUEFEOHQC0kHsNHR0e3Av2XUriDjF93YaLCBPi0cWufqORI4z7CXtDNCbszz5HOwXRkhIiIiIsJ+LhJ0/3daqYycFy0eC0ScqlNeEpwTMEuByhy3s1hOfRj73uprR4tah6cXsflS4ONAoaeOiIiIiKACiBzCk0jLqd9DzmUDA8On56WfFbDXYhwNZH3yPhKwYYPXYPGCtBKvLJorPghjYx2TLNOJEBERERFh7woBXePIdUNQBEgjA9vXZGXyeuAId9KIn2tux8yzprDYWl01wZvtH63CrgWbucbytzh+YzD7n+6cNPNxM1uFczEMXw8Tj2lcLiIiIiKoACIc2oUQA8L09MTtwNcsHbnJiS8PxlvAhvscy5/52LDBb2RZfDEMfSJNBz4/NfX4FmZbaWmyJSIiIiIGcWZTTa/8jtg1bqxUqyuPBihDXBvK8Te7sxaIxKSG2XOAitkup5w7b3Mx53pMu/sWh08S+GLrN/CXBOPXwVbM8fN7+5THXYUnbyMfuyupjtxrFO81wkntfxPBT0kr/ELR5AMak4uIiIgIKoAIKoLsCEovivGvwZp7k8rUlOMvB3sWUO36us7j9odhvNjdnlUUjdeFrPbhLCRfazTG7qeVOeKadImIiIhwiLdhTbuz5mLHGHFFUq2d2p4LlVbyzNLLN+I+QCRzsyfNBHcwm98Re4xND1bhw/fg+0bHPxXMrmo2B38AWydaH17zdavUn2LYxR2biXoy5zHyge/BaCgbY/8cstrqxPxjYNX2V6w0940w8FmYfkhFEBERERFBBRBBRZCOydvWiWaT9zAwcE1aJO+yYJf0eW7aTsft4fkJfmqM8fYsq12W5/XNi3z3nYiIiIjs94GmH5tUp15QNvjnmcX4LKud5IEzwAqL8Wk4lzCz6SaQAoOYzZXfsZjGmPP9WQqPXFsU/g6ob4EJaG0YMtg6YT78xDxuqT1eL2Y2GpGF5I4Y420YP72jOGT201mWvjTP+auOTUkiIiIiIqgAIpqjtuRMT/8wY/D3imryb0RehfnpYAM9drp1TNWsirExOh+uVIZvaVr+cRqNh4Bcd62IiIgIh1yuh5mdEIhXhmz4NvAAVkb85OB2Ruurwv4MCz8AY2efBMtoZXjMfRokeFxJNj06eypjT4LZZz4fIMz8u9BojN2fZcN/D5wJJO2PV4BXVasrbm00xv5Tp0BEREREZLFIdBfIYpq0FhTjsWx+I8sGvlq4fyPAOodhMxtk59YDdOzGczM7FviphPDCNKmuSdPBB8uyMU0rKH2x7doTERERWchFfwM8SSrnYTx3D1sksUw32KzFeC5mp2E8tz1WjHO0S7Ul8ovdG53Lge+Z8Zx2Gyrv8zsEnKPyCl+MRfOhjufFzPPlXIzTuv5t090fBLYBjwPjwWxzWQ7eABPFzO3GWHs0JPFwg6cxs6nO/JjC/Zse82+j4oeIiIiIoAKISL9JfCjLxjaP+b3V6sjnPRb/hdlpwIo+E7yZHWYJ2DHgz40ez0+SgYkYm99qfy4spcmtiIiIiAog+3SfeNefzvsqdPx9KWyU8fb/3O3mV8Tm5A0eV96RJkUBXgM7gtmT/Tv9LmZWC85gWR55I4yVnfdPkmSvaI+xd9w/7r7FA/8ztfQDweyTwcI1SZJ9oSi2PrFzUWN6NGbhzsTtjNb4G8DSAOuq1ZHPF8XUmF6aIiIiIoIKICJzBzsWxdRYjPndSci2uPm0wbEdbbF6Tv7Bqma2BuMnQlIZrmSVWBTNB3QUX0RERFAB5FC7X3r9WYpj4wD2nrI58cnW3ycbZdn8t5glN4XSjjCzk3rM7RwI7j5k2fQ9Xub/2fV8WYXZ84GR9teXOP8wPJR+vF4f/VFZNraXZWN7UUyN92ydVTxrMk22rQF/bvskijnUnPhfsWzerXG3iIiIiKACiMj8Jn0x5vfEMv/nJFQCxsntvsdhjnwQB1YYvDg6pyWhcnySpFtjzLcBpRYFREREBBVAZP/n3NmC3I5zi5H9RYzTWzs29USKYqwSk296Gr4DDABP7T4JY2arA3YKafY9L/Pvs6ONVX5/EipnYjP/xic98I6p+vh98/u5t8Q0HXwwRj/PjCPb32sI57QkyX4UY36PAtFFREREBBVAROY9uW/GmN9laeU2CI77WjMb7phYdbfFAojW6gH9fDd7fpJUToxl8i0oxmdDHUVERESWdvtQABVAWEwnmY12SyngUWB7x5+GmY30yLfreVsO9xTEX4n5+N09TjRbQTEWy+Y3YsjuSrDjMX686+eIwNpgdippdn/7JIgzcNj6hPIXwJ7Uvq3Szf+uo0iyW2XZmAohMzPObKfLO8YK4Ecx5p/TWFtEREREUAFEZI8m+NNe5v89Mjx4ex75UnAG3X3IzFb3mUTumCQaHAX8REjCaiMbdc+fAKY0MRMREZEl3uKpXQDJzuvIdFABhINW/BjF+Srw7WD+zhCyq4LZp4KFTwRLPh4pvxqwk2mNTXcXwl4a/EPM130KHo9zFsFi/kiSZHdidjytkyC+c5tY1oI9m5A9EbLKkYn7mw07ZyYTxbHNwf26GPMt83z+GFAkSWXKzE4H1nXklTwcY34bMKbnooiIiIigAojInk34G43GVCyaD5bluhstm9wMdorB2j4TyM6JXzA4yYwLkqS6Ok3TtGztcit1t4qIiMgSLIIwE/SdJFWdADn4j8eEw9VFHq6IceBvy3L02+0sjcfbf57wMv8eZPcD05gdabCS3oWU6HBt0Sz/AB59gnkUX2LMH40huzMxO4FWESTu1A4L1gbjXIMLDXsOkM1+P39vkU9+dg9z8yzGfCtp9j3wUwxb226FdVxIKmtimdzRcfJaRERERAQVQET2aJI5WnqZ/2clq2wuo//AsKdg1NrP7X5tsQJmQxjPc+yFIclONCrT7vM/7i8iIiJygE539Pn82hoMZwyU6zKrXpYklVe5+RntBWhUAOFAZ33kDp82D+8r8vRaGH0CJpv9Cgnu+fdjzG9K0urjOKdiDHXMzQwoW8WP+HaY2rJHz52ZIgh2wmy+R+dzwjKwSlc+h2HcEMv8jr3I7TAv8/9MQnY8Zj85M880/HhLkn/1svldPR9FREREBBVARPZ+kaAomg94zP81hOpXHH/MjFPBqnMEUDqtXXArDXtOCPbsJEl/MDBQGc3zfHKmFYDuWhERETkA7au6Cx47ZTwMDKx6UpJU1qRpdXWaDqxMkuQFIRR/liT5xQl2IWY/h9lPqvjB3hQuvOPP3tx3DgTcbyry+JYY6/8K0/k8bssAj2XzvhCqtzn+GHA08BgwhoXPFs34DpjcshcFiUDMH4kxuzMJdny7CGIdm4O8Z9tY48Z2AcT2IrjckiTb6mY/1W4762Ap7isGByu35Hle11NORERERA6GVHeBLKN+y0VRjH8N1tybVKamHH852LOAXoWQzrZY0WGDe/hYo8kdZLXfJq/f0+PrRERERNiLFlX9PuYdLYpmVNJ05DmexBoQPbK2LJtv9larz/bX2pAZ6zpubuZ25jo1IjuP57wzP2Ufb/YJNzbB1MPt+VU5j7HjzPefnhm/VquN/9PKPHerVPyJ8ebkto4Q8z3Rfi7UN0PtcsN+O7qfZmbH7ccCmef5+nuzyo/+BXgGOzba2fPy3E4DPqenn4iIiIgslkmZyFJ/TjuQMTBwVFok77Jgl+xhsW+Tm19vMYzleXY9PD6mu1VERET2g7RSGTkvWnwyWAQcZ405r8N8Da2F7AA2xNyL+RrT753C3W807Ifg5uanG+GkPchQmfm6L+VNXg0T23o8Nnsyfp3vx/fwpNEx1aS6/YXmfpURNuw4tbLzCZjg5r9WNOofan8u7t23HFyfVpI/Mrh4ZvxtsLks/fKyrG/at9sWEREREdEJEJEdfZiZnv5hxuDvFdXk34i8CvPTwQa6Jqy9bDS3jZhPpJXmjxfNFR+EsTGg0N0rIiIi9C86+M7j7DUDO396uppWuMQ8nghWunsl4uea2zG73rJpI9PCjAln7qcCfBpIHPsP8GvNrJ6G8qbp6ekfAklWGfowMN8CyMzXbMHjtTD5xD4UK3wPP74nt+vwYKNssCnLhm7G2NC3yOJU9vH7Gkw97GXtGkt4OdhqwB1OsoRXU/Iv7fG0TleLiIiIiE6AiCzg89ur1RXH5bF8bgK/6vB0M1tF/1YR3rEz7gmcuyB+Ik0HvjA19fiWjl1rmriJiIgcuu2rdtnFPjIysrrR4HCzkMeYnwXhQro3HxmnAivYtWXRXN9bY3b2qLVVZ1ur6O5bsPB5t/hp8BBitjXPR+/suG+zrDp0CW7vAls/j/u8fTKHLaXb22M+fi2Le6NMADzLhk5xC39juxZ5nFbvrTvNk9fn+ehd+zDWDbByRZaV78J4c8dz+6GIvalsjv+TToGIiIiIiAogIgsfMhqBMDh4+LqimH4pFv4QWLebIshsY2337QbfiSH5vbIxtqlzMqlCiIiIyLIcF9vcRYrB9Uk1PIOOhWTzcCEezwJy4HAzW03/BfT5FlqEeQWZ01H4GMP5JhDNeCQG+2CtGv5jdHR0e4/7OA3ZyMWJ+R+zI7x7zvt/9uSHxbfnjclrl8Ap4faJi+OqWeVH7wXeCGS7/k5ej8YFZaN+yz4UKQIQk8rIywL+YVrB7q2POx/I8+z3YPu4CiAiIiIiogKIyH46DQIkWVa70M3PN8J5wMp5tjjAjbtx/xtzNuV5fbPuVhERkUNDltVO8sAZ7WFFifMCw1+584K5DbBzi1nX+PvAie63BdjsFu4vmlwDAw0IDo/U+9z3SZYNXYqFP4KZUHnmU3bZAvF38nzy2qV2MrgyPPyM2PAbzOzHdx3veh6dPyvz+nuAiX3cfJSmldqfG/ZLsxuOfFsseXVZ1r+E2mCJiIiICCqAiOxvK7NsxXlu8XyDC4GkR7/onqdCovvtidktTcs/TqPxEK2dnmgyJyIisujHvH2KEmuHIBqkMctGT4RwMVAFN7AY8ZOD2RksvpZPh+qYvgBv4PaYG3+Nsc2i357n9XuY5ykFWHF4Von/ALx4vrkf7r7dgv1m3pj4G6BcQmM/g2dklcoP3ub4b4EN9/m6CdyvyvP6e4H6Xv5+rVMgSW1jkthVzo7ckdKjf7xWS9/WdRpHREREREQFEJH91xpraF1aSf4Qjy81s3Udra2sf5gkAWiC32nYDWbJdY3G6ENAo+u0iYiIiBzYMW2/bK8dnx8YWHWMe1lpfa2V7vkz3cMbgSrgbr7GsGdz8FpXOXMXO7q/T9PdH+rTVqhiZkd35WKwdA95+BagiYVb3eKnrbSpopi4ozUug47fs9992F7QXzOcVqYuN/wtYIfNO/Tc/d/StPrqqanHH1pCY73277x6JMsa/w/bbcFnwuHKojl4FWyd2JfMjkpl5Pzo/jEzjmxXkB4iDa8qpsb/TW9bIiIiIqICiMgBKoKsXLlyVb0Rnx6ivym6P8/MjptHPkj7NnzCoz0A/lEzvpTn9buVESIiInJQsjp6XXcraTryHE9iDYgeWZvAmx3WdizqDrU3QcxZODkAxY5ei/W7FDvAv4HbTFunBONe3D8SQjLd9SN6GeIayvguw85un3Zl6eZ9+FTp/sYsZLdXKnF8fHx8W9f95PPYhGKw8rAsK96CcXn7JITPJ/TcjM0l8fKyMXkrrdMfS6wAsmY4y6b+L8bGOX7ndsC7T+Bclef1K2m1w9qrky61Wu3IRpP/bWbntcfGJc6tEH8zzyfvRpuGREREREQFEJEDNSnE4NhqUn3sdHO72lrH9ecbhNnafQmbwT+hjBAREZGDIq1URs6LFp8MFgHHWWPO6zBfw47FXRtaIm2lCne/0bAfgIf2z7Q1T8qPMb1qKxSh9WXVEh6c6ncjSTJyfkjip+e52M8iDTs38Il2SPetPTLe5j3mS5Lai0PCP4AdPt+xnsHm0vytZaN+89Id664ZzrKpz2KcvZvfe+ZzdYf3Fs2Jq9i7TJDW/V0ZeVkgXgdW2/Fxj+/L88nL9uV0iYiIiIjIvCaJugtEOifNDzTKBpsGBobflJd+VsBei3E0kPWZKNpOLSbgFLBTI357pTKsjBARERH2aWPOLqc5YE1l9j+nq2mFS8zjia1WVl6J+Lnmdsyut2wHamOQ78HtN8GbHf/dwP1aD+E74IlhzawZb5pi6sGd/lUOsGXe92lZFndaklxv8JolWgChK19ib9uNOgyut8QuBVbM43F3wNz9/hi4rF38WMKtTqerWN/5X482YdQMrkgrwxTN8EEYGwOKPRjPOkDZLL5pleQzBhfTPoXkFs5O0+HTi2LidhVBRERERAQVQEQ4kIUQm56euB34mqUjNznx5cF4S3vXZL+2WJ3/Pgaz0x2el3l6rlUyZYSIiIjsvo3ULgugIyMjq5tNWzUbQB0vcp86k1b7oZmx7KmYrQAws363tRDtq5z5LRz3uW2fcOeRnRbW4ToCtzLbmqoom5PfBMborHXsmt/h8/g5Zj6WwNTDZsP/gvOaHidYl+qYzfb8eXdcJav86LeBS/ekHVgwu6PZOOzLUF+qYzgDPK3ES4BTW0+9XVrHWY/nkgPDBm/JsvIlMPTxPJ+8Zg/D3w2mHi6avD3LamswexlQGpwUzc8Cvt6xUUhEREREBBVARA7cpLooivGvwZp7k8rUlOMvBzsFqMzjNIgDGdjzHH9mLMuL0rSmjBAREUEFDzqLFB3XwMH1STU8o/MaO9XgQrw8a2bXuRlrMRtm9+Hk+6Pg4bs5jdD+Ir/L3B7rWiBOzOzWEMJ1nR9vNKqPtEOme93uXLkmuwtGt47/j8AI8IxDvA2ukz38NCecYa3ix3zbnG5yj38GD04v0TGbzSbCcGK7WBh7PF8exvk25jWw09rzxJnn3irMXgR2fJrWhs34l45Wrz6P11EAtrixyfAXgq0APGCXWjpyU2u8rVPSIiIiIqIMEJGDmQ+SUa0eXfHstaX7WcHs9M4TI8oIERER2TNZVjvJA2e0L6UlzgsMf+XO104bYNcNO4smqyO63xawu1v5HOZAA+In8nzld6CZQOj4Wbc2Wy2vdjseX+hF4OEkq10RzC6jVQhZ6hkgP9PRisrn2TLLs2zVBsivxjiTOU/q7DR+uzl3fytLe8w287vGLBv+IMavzWbh7PAwZu/IG0N/R/WJtVlML41wZtd4d+a2mg73eelXlOW8W4K1v2Z4dVbhM8CL26H2eXTeW+b1P2XvMkZERERERFQAEVnoYkiW1TaAXY356WDVnUPU5zeBj+63J2bKCBERkeUwjvT+J43XDEA0qJRJdewFIdoF7c/FiD8rmJ3BosgA61WE8MmZ3euOfQf8ExiNHXvpcbPIbXlev+cAj9l73N/rhlqB6GlkYPuarExeB6wBi25xpWGvaO+6Z2mfzt2rAki7/dPIWw2/usfiPz1OEwXw23Nvvok837zEx2czz500y2p/jtkbOu6D1v3q3Jzn1f8B22aKEDPj3ff1CEzfl1D4NKsOv9ajv9dsR2u7CYM/bTZPfA98I9dYWERERERUABFZBDvoqtUVx+WxfF4Cb3J4ensSF3ezo9C7WgE0we80TBkhIiKyVK6B9Go5NTCw6hj3sjL7tVbGmJ8J4cId+R34sWZ2AnO3rlqosaqz+9ZVnZru/lD750nANrvFj2DWACzEdGuej95F/xMGe5oVMtfv2etEiPe+vy2WIa4Npb/ZnbVAbLcweg6tlp275Jyx9Asg/6Nj0d3n8bxNkurQmebhPQYnz/P0bon7u/O8/vvtrJCSpR0aHyuV4Qsc/hw4umvTjeHckufVn2kXQGZe6yXUNmTZTkWQne5bMzbj8beyzO6o1+tb5/OYDA4efnRRNP4es5/seFy/lofy55ie/oEKICIiIiKiAojI4mmLFQYHD19XFNMvxcIfAuvmUQTpsePUJzzaA+DKCBERkcV83eu0IqnWTgWCR9Ym8GanvQA/a5WZHc78Cx4LUezoteDf63bHcL5JK1skwbgX94+EkEwDliSV+uTkY1uYuwg0nzDyfQ6CByppOvIcT2INiD3u74qZHdPjlMg8w9lZagWQV5SN+hfnu1A+OHj4MUXR+Ex7wX0+CsOvbTbj78HUQ8tgU0ponYCp/bph7+8aq3acABn8mXYeTefJ5o6Tz2zsag/m7crmVuCOIvffgvpm5nEyrKsg5UDD4dNFM3snbH9I418RERERQSHoIosiJN2nph5/CPibLKtNu/n5RjgPWLlnbSxs2ALPBHuvw+a0UlNGiIiILKrr3iCDxxTV5FzHK2ClxXgiziVAFcPAaja/4kTgwGzomflY4e43GvaD2ZwOD27hu0XOtTDQaLXoGizgwal5ZHMsxKJs30DzgYHhMwr3k8EiuIFFnDXm/jpz1gARI4AN2e5behnLrwhXIXIWrLmjT3j8LnOdIjbPcThhnndG4XBN3vR3wNSWZTV2NSv28NnrgOV5fXPG0G+ShUsssNGdkzpbYplxJHB+llk1pzaTlzLX3V2Wjcl/Tisjz6TVksyBAYNLsiz/ap7zVx2bgEREREREdAJEZBFZmWUrznOL5xtcSKtlwp62nJgrI0StsURE5CAYXJ+myR9Z4NL2tY2DlNPRZ/zqU8y2KAq4bXXjrzEeMyjSRnnTFFMPHsSxdefvUIE1Ha2ppqtphUvM49PACjfOMDhJz7k5nhDu/5mE5KWNxtj97KbtU5bVXgP2Xox18zxh8ngs+dmyrH9pmbRiMsArlZHj3f1D7VMcu+bWOZ/L89rPwyOTvVpdzXxVktQ2Jold7bCh+yTITGg8Hq/I88n7gGaf+7A7lP4l7a8LOP8cQnhTozH2n2qFJSIiIiIqgIgs0nwQGFqXVpI/xONLzWzdTiGT81vk2SUjpNkcfH/HTkcVQkRE5ABd246tVirbrnT4ZXYu7O8ut4IFyuwIPRbAtwB1wDCbJvpHPOHemeKMlaFeFOPfaC/AznXyxNmz1lV71cJqaOiIdUXRGDaz6B4vcudMZgs2KcapwIrdtMFaqHZhLIMCyP3tAsh/7ua0yHBaGfqoES7aTfD5jvZaOFflefp+GH1imYyzDPCkOvTTwe2zYEPdY1J3fzhYeEOzOX5Tn+feTuPcJKlttMSutlYRpLudljtsNviXvBn/BCa39Gnp2vr6bOhZqYVrZlth+XTpvD7m9ev09isiIiIiqAWWyKJri0Vrkje5pTa48m31Bh+z6G+K7s8zs+PmkQ/S3bs7BXue489MsskBQu1LIabb83z0zh5fKyIiwsK3HJpM3Xk6tqP4sZBFj17X0tC1OPs9wx7oWGBtBPOPmGWbwROw2ChGH6LYqdjBjh3l/VtX+T5sGOq+Bu9YNK5URo4vLR47m63g1WY+/UbwDTilGWsxG+7xPeJuWldp09Ie3RcrV2VZ8Rbg3I7x11xPve2Ovb/IB6/qyMFYRveXRfoHuU+bhfvmKH7slKlTlvVNSVp7a3C72tnRDmu2JVarmPHMNA3DRTH09o4iyK5t2vL1/2HVH30J5wSgClYNxm9lydC2Rjl5yxIPnxcRERERVAARYRkWQRyw0dHR7cBX4dhvJtXHTseZ2SnnezCxt5mMkGD8Ju5vNSvvT5La28qyvkmtAURE5ACJXdcm9tdJyuh+W8C+RXvB1APXF42Rr0AzgeCtP3O26VnovI7dnRRJK5WR8yLxKRilR78gwAtoLdwamGEMgc21ccH2UzYKh2rhLkmKZ2H8OthhuzmF2/6cfatohg92hYAvu/Fpj88VOF+qVOJoozH/10HZqN9MUrvcjFcT7ByDJ3fc/xFILHBpWgkV8xU35nnyOdg+uutt3d8grX3Um7zczH5spoAS0/BmyjX/ukwfDxERERFRCyyRZff68oGB4dPz0s8K2GsxjgayrkD1eeeDmHGPR26G+Ik8n9zMbIsPTRBFRGShVSqVkZ92943gr8FsJQu7gcbdfRtmf47xqEX/cp7X7zmY1+zu3x9WV1t/DZ5lkxcAL2jvqMfdKwQ71+AYFs9p1GU93m9ngJzTrwXWypUrV9XrxXst2Gvn+Vx9GI/vyPPJa4Fiub2AR0ZGVk9NxfdYsEs77o+Ztl/j0fiZslG/ZS/HkWlWHboED+8G1vUZ104YXNlsTlxJq3VdYKfTJqtHkmz68mB2GTDc8Zj8bp5PfpJWDp5OPIuIiIiICiAii7+NCJU0HTnFLb7c4CIzOxqo7kFQ+k5f53C3GV8i9Y/m9aEHerRs0ERRREQWymFJUnu2JeFiPJ45e8Jh52udGUeArWQPCvu4/1uaDvzs1NS2h9k1r8P3YKF/T3O7djktsmLFisMbDQ6fXWvvyuwwngGsZ+4WVvtjvO3z+P1Dn4LBw7R2UKxneRdADPB0cOQnKeLft8dZu7k/vemRK4qi/hfLtd1SpTJyQvT4BTN7So/ck8lo/jNlY3LTPrSGS0I2ckliPlMEoSsg3YAJhyuLZu1KeKTeo+A4nFWH/wjnLbN5LbYlwhvK5vg/7Vo0ERERERFBLbBEFlnrAQPyohj/Gqy5N6tNXkfBG9x5cbs11nwWSjoni25wMs6J3uRlSTZ5nfnIDUUxfietEyFBhRAREWHhCvlPlGX9SyNDI/c0m8lh3Z93dzOzWHrxLsNew9yh052nGjeX5u+cmtr2aJ+wZN9Pm386F1MraTp8mic+ODntF+LxLFonAaxPZkeco6Bi+7nl1lztsh7G+XbXTv6mm38ISyMe/2w2bHrZbYJq/861DVb4uzBbO59/Y9h/YH4bswW9ZTdmMgtNPDZ7P9HsOyH61nLvnhMz/6aI+fi1STYE2GsxOxlY1fH5CAwb/rYkm8ja49VvAdMdz+eJ6HZzwP8HcHTr8fB1wdlYsvLLMDqmt2ERERER0QkQkaV1GgSgmmVDT8PClcDZe7Eg0fn1Oc5DEf94ltgt09MTt6slloiI7MdrWE9ZNvxBjF9j7gJIBMyJm93ssrJRv/kA/x4rs2zk5R7iYWAlzhpzXof5EWBVdt0g5Ito/Fy4+42G/QA8gM2cZAjAV/J86HqI1spKmbF1CijTSu2thl09j+IUS+wESAA8y1ZtgPxqjLOZR6ZNx/Pv1gXOjFlM0qw6cqnH+B4zW9114ik4flnRrL9vgcaMKaxYkVbirxtcwWw7q045zhaw38/z8Ws6Ck8GpGml9ueG/dJs7pBviyWvLsv6lzSuFRERERGdABFZOqdBZjTzfPJbULssrXA22MXt0yCVeRZDOj+fYTwlYO8sIj+bZcObujJCTKdBRERkP2ZMWFKtneUeX2StxffdFgnMublo1m+m98kP9kPhJsmy2oVufj74eeYdrbpszrqG7cf7sPu2m+Cdu/UbuF/rIXwHPDGsmTXjTVNMPdj75uv0bY1lNDu++3I5BbLjd3ArzrbWhpLYo83ZLs/XHs8/ll+xcvUgsfEL7eKHd51Uys2svoA5cgWMPV40uSqtDNOnCJJhPBn83Vk2RJ6P/B080qBVCGl6yWdCwvO9NR52sJWWcCnl4Hdh6mG9BYuIiIgIKoCIsARbY9XvKZrck2W1W9x5kQX7LWb7i+9uEt99e26wAWODE87KKsP/kjfLP+2aNGoHnYiIsJALrVk2dLK5vdexk3azuN7eec49Bp/ouCbtz+uS0zp1eRFmf2zYuvb1NfZYSLcFLhD5XDkd7r4N2M6OmhDXEbgVSNofK8rm5DeBsdkt9H3zPg7Va3vMstpJjl/c8dyb6/lX4twKfHz5j4kqJTTKHm3lgrvfWDTLmxb4PjBgomhOXFWpDBPdX2tmRwGDXbkg67DwR1lW/9kQhz7YKCe/AISyrG+C2mWW2HsNTgIyg0uzSlLPm8ddAfc3taFHRERERFABRISlmA9ieV6/G7g3y4YmsHAp8GzgsD4LNHOFunr7P04GnplWkmG32qestKmimPh3dj4RokmkiIjs63UsdbfTMX/abEumOa9VpcG/5Pn6e+H+/X0SoRWMnY6cCv4uWiHNBbMFhn055eHsvthhXQWP7xr2wOyZE/90CNkt4CngjUb1Edg6wdwB5/0KRn4Itby1nZ9/vMjMnwm228V8d/8RaXhnMTX5reX+4syy0RPdwhrbtcjhrefh9A8X+ATMjtDzZrN6daXS+EzELzfs0va8s7MIsh5jfZmEY5O0FstGfRNgZVm/OYTanyXGx9ot6RKH08kefho531ILZxERERFBBRARluLi0cyEsMzzyWsZGfl/aSO+BreNZpwDZHu5KJAYXGLOqzG2Z9WRd+aN8WtpLf6IiIjse8ZANnQJZr8NVJlPhgVcWzTLP4H7GweqEO9JHDbncLDYLn7YArSBsrn+2+Eec25rHc5sFYY8cH3RGPkKNJPWQZit0z2uydZjnBD1VOtZ7Ml6PP9szvwP5wtDmX13bIpDIK8nXGJwSo/nurWLbvtxc8+28WaTb8PQO9KKmcGlHYXHzg07G8Dek1Zq1xZNNkH9ntTCN9z9doyNtEJtNmSEK8lWXZbn2zfTKtroNSEiIiIi85LoLhBZdCLN5lQs869VYviKh/BdYADzo8HSPiHocy3MBLAKxkqH5yQhO8GySsPLI34Eh6UwVmg3nYiI7KF28HTtIiz8KbOtG5l7UdSf8JK3u0/ecyCvPV6m08HsKDNOAHKwCrvmY9k8d7e3/+6TtE5VFo5tBr8S4wbMPof559Ng/6fZnPiLGPMbY2zeGGPzRi/z78NEDlNNmGweoEVcAzyklecadt482kQtamZUgbGyPOmrUB9JUt5Nq11Sv3GRdxTfPlFk/o7GxMRWlnfxwwBPksrLMJ7bdfLC3P17Hri69Xzcr0VIg3w8lunXQ2JHGH4CWOg4HWXt9q1HGXZOktjxMWTfKvOJbydJZQDjvB1fZzzVzb8Xy+ZX1c5VRERERFABRGRZTF5DQTEaY/MbWTbw1cL9GwHWO+RmZO22AD7PFhczu+xWYvYcnOclSfNlaTp9Slkmd0ExTv+e4iIiIr1CxYdDml1m2E/RCjEOc5909FGcDxRFej00Ggd2AbMYjzG9w1K7JTq3BDjGodlxPbV5nNQM7cyOH4F91c3/f272STf+Nnh6XZGPfzaW+R2xbN4Ry/zrRdF8oGuhtzNn5EAWIGYKID9p2Lks7QKIg1VwfCBuvckrvMnwV+7mMZx57P6pyOuXk+dbOp6rtkB/FmN7sBUhzf6HYc/qDkA37K6iueI9rWLcfv/520WQ5A5L+DLYGoPj2LXw6MBTE/PjQ2XguxbT/3aLA9ZqCTvTpmudpdn9Xub/qbdhEREREUEFEBGWSz5IKMvGNo/55kqldrOZfRJ4ArwGdiSzPZXnKoR05oO4mR2B8WPAc0ISVhvZqHv+BDDVtSggIiLSy3CW1a4ws0vbpynCHNeN2Orj758t8snfhsbYQbjGGBTjXub/5TG/t1KpbWpfT0dxLJpvt9Y1NfQrfgBbDP+dJGR/kCaVzzYbY9/0Mv++l/n3Y2z8aOaaze5DuOEgFKzSpLoOeCGwYolf5w14LCZ2jJn/Otjufh9vL/rfHGPz79i5raixsEWQxVAUaZ/OGnm1GZcBla6fq4nxhVgObYKx8gA9J2def99LQnYX2PEYT+3dis6OJfrL8LiqyPwjacTANgCpwVFgp2ak3y89/2+dAhERERERVAARYTkVQrwopkfLsrG9LJv/FtPwzynJeHRPzOwp81zMsK62AcHgJDMuSJLq6jRN07LVDqHU3S4iIr2tHkmycIWZXQE2Mo/rT6t44HwoxvwbCxy6zN60Bpq5nv5Y2fxaLTY/NZZkPzC4ACzrkZUw5vj/NefDeT75ibJsPF4UU+M9FsC9689iYmXZ/M8kZMdj9hMLkH9ycE83GEe58VzDBud5CtbA/z3G/MauwtZC/llUJ7RClp1h2M90n/hx9wcMLo9x28MH4/UXY/5oEtN7CDZpgWFgbdfPaGa2wsyeHaLV8PCQ4882s8F2u6y1ntiqWK68vt1GTht2RERERGSPwhtFZInJstoGNzaCXWL4ie2ckMo8c0K6Vwh+YPjno/H3ZeOI2+GB6R7tCURE5BBWGR5+Rmz4P5nZj83zn2zB49vzfPJadg38PuhtvNJK7fU4Z5nZOe3r58y1swAfw/lgntevBCaWeCZEzLLhP8f41fapnHAobSRx4j3m4TbwdgHOFmhM48EtfLdoci0MNGY/vrVJKyNmd89B9sMJkJhWh3/FnA+3H+vOAsj3k5Cc02iM3X+Q55+eJLWNSWJXO2yY57h15vMP4/EdHe8pygQRERERkb5S3QUiLOmQyzyvbwY2Z9nKL8VQrCL6SwxeY2brgeo8w129vavuSWBvsOhnVirbvh7DyIdq1XDf6Ojo9j63ocmmiMghlfsxtC42/XIzO2o3i5Uzn9tSur09Lp7iR0dBf20tyyauALsCo9b1NYXDtQT7eDE9cTet4ocWWZfwhi8jnIRx0sLv/zIMH8syLoCpmed4YjZ8q1m4rvt5Y5Y0p6e3P9gVTM4CF3wqOEf0uTMeNQs5i6LFa30TrLgshPIPHE40s1Vd7yvdY9iZ+2s9Ft6dZSPk+fh1QENPcxERERHRCRCR5f86bk8S1wxntcljKewN7rzY4GRme7DbfINegejuW7Bwk1v8Wyttqigmvg7kHbtGF2ObDxER2S8nCFYdnab5uyxwCXNvopkJPX8I83fmjUWzS3vm+ldN05FnucWXB+M3wGrMhrgbUBh+bbPpb4fJLft5t75OgHBAF959P+ZudH+7CXce6X4sDB4p4UNZSL7WPoWxkM+tVt5LOvJTZv4pjGN3vm2fLJ1finn904vg+TzzekwGBw8/qiimz8HCHwLr2q/HZI5TIa3nr/MDd/v5ohj/NxUoRURERARlgIhwiCxQTTZjnm+NZfPWJKRfBZt0Y8RaPZb3JCMkmNkKg5MNXm3YSy3JVlQr1aIomg9okikicsgIQMyy9Oct8Dsd48e5Tn8Eh78rmpN/Qmsxc7EsTqZZdeQ1hn+41fLKBjoK/waUDtfms8WP5bBZaMe1PUkq52E8dwlngCzE/bA//vQ4FWtVMzu8688qzI4JxvnunBST7JvE/NEFfCxap12y7ESD14FVuj7XIPAxb+W9LZbH34tiaizG/O4kpI+52XMNVnZnl/T+bb3m+KMe8zuYu92YiIiIiKACiIgsP2WM+Y9ibH6hklU2l9F/YNhT2m0+kt30WradF76sgnGYmb04OqclIduQJJWfjFn4L8qyTmsnnk6ViYiwTHfOZ7UNidllwPEdBYO+xQ+DzbHkfe75/Qcx9HznQW9S25gkld/E+CUzntS+FnbmfUw59qmiGTtPfqACiOxlgWWuL00wjkvMToghu3OBiyCEJHu6Ya8Cy3bOQbHPlE3/FOT1RbiRxWPM702T9D7cHsN4Jq1Wrr3Gq+372BIzOzUJmcVWESTX81pEREREVAAROfRaY4WiaD7gMf/XEKpfcfwx4BgzG6LVwmS+GSG0c0KOwuw0zH4yIbwwTapr0nTwobJsTDLb4iSoICIisjyuJVk29KzEwlXAxnmc/DCHzbH0y1r9/Q9qXpQBVqvVjjTLXhxCeA9m5xqs2GUfOWxy/G1lM34KprYss+uXCiCLtwXxUxOz45OQ3RkXqAgyNHTEulgWf2Bmz+gqVBrGX8ay/sXFUpTs9R5Slvl3Y2x+OQmZORzbNV7tNWatYPYTIakQy5XfgMnmIv79RERERAQVQERk/022Y4zNBz0e9vVkML8JNxwGDY6a+fwcC1vduxm9NRm1Y8CfG6OfF0JmSVKZijF/pGPSqUKIiMiSXjQ/ZiBNG+8BLphP6LkZm6P5W8u8fvNBfO+32QXQ2gbHPujYmzB+rOt3aP2OzibDLy/yya9AMb4MswRUAFnEjwnwVLATYszuhPzRfV28N0vWOX6ZmR3e9f0eDPB3Zdn8ziJ/jgegEeOKbySDxY09xqvW9fyNQNXwn0hCbjHm/94ORdfzW0REREQAFUBEDsEJ94JkhHRMQK1qxpFmdpab/VRIslqSVk+ulskjBcWo7nIRkSW7Q92TavkSnDd0LKb2uk7E1imKuDkal5WNHcUPP5g/e5bVNiSJvc+Ml1qr/eNOLXTMuAfnk+TxqjxO3t21uIoKIHKAHhvHeGoS7ISYZHfS2kiy149Nmg6scvfXtF+zvqNlnfvf5nn9/R0bXljEYfUGU43u8Sr4PW62tp0RsvN9iFUxOy0kFY9l8xsoE0REREREUAFEBGWEzCsjZK4THJ0fTwzWGXYO8NIy2PFJUjk9SSqHx3j4f0K9nFegpYiILI5BYrV2duL2PsyeNo/TH8HcP1U0J/9ijnwQDkxbocGjs6x6eYRfM7OXdBU0DDCDzWXplxdF/S8iOxacfbmfNlABhMW76G88tUcmyB4/RiGk64FfMLNVXXkZt8XYvGkJtocqY8y3xNj8Qoz5TUlafRznVIyhjvHqzP1UMWi3wxq4Bxo57QKtnmIiIiIiKoCICMoI6cgIeVJHz2WbZ8i507kQZvb0HVkhIX9hmiZjAwPVJ/I8r3e1OVCLLBGRxXVtSJPq0NkJ4WqHDe1rwJyh5zg3g7+3nWNwoHM/2gu6q0cqleQ4S+ztZvYWM3tKd/HD3bcbfCvG5LfKcmJTx+/lh0K7JRVAFn87rK5MkD0ZIxkcO5CkU7/TLvwlHRk3dxrxD2PMf7SE758AeCyb94VQva1jvDrYlWlXNXhWEuKLkyTzGPN7Oooges6LiIiIoAKIiCgj5OvJYH4j0QLOhOO5mR2xhzkh1rGgtALjBPdwVlnacyxNx0JaOdrLfDsw3Z7QmgohIiKL43owOHj4ei/LD4OduqPAwVytatgEflmeT95zEBeOh7MsXOHwZ2b2fKDSsSA6U8DZYvhvp+nAnzSbT2zuKtyjAogsinZY8FQ3e6ol6XYv03pHLs08/m0ylITyLRhP7Xxem3NPnq/4EEzky+BxL2JsPuTxsK+nafE5x0cMO6nrfWoQs6dgdlqwrJEklel2Rh0KSBcRERFBBRARUUZIq+fykV+KMbvOssZmYBpsjcFhe5cTAmYMm3G8wQUGP5uE6hFpmqZlmX8fKHXXi4gsilOBiSXJq9y50MwG+rzne0dh5Obc/bKY1zcfpJ87q1SGzguh+kuYvcnM1gJZ19cEh4fN49vzfPKaopga7fgdDqkTBiqALI3XocFTDH4mJGFtLNOvQz4+v9fvcJYkxavbBZDOz/13jPZ3MNVcJo+7wWSzLJtbY5ndEcyOMOOk9ty2s53dip0y6kJloqMQoue/iIiICCqAiMghbayAidzL/PuxzD+fJul3cHsM/DjMKuzcNsTmsfDS/rtVwIYwnufY6UnITkiS6plJkm6NMd/GzsUQtSsQEeGA7TxPsmzoEtzebWZHMnf+k+HcnONvpVX8sAM/hl07lGV+kVt4nxln0zr1YV0/Zx3nI8Hi+/N88rNAcSi3WFIBZMkIYBWDk0NiR7SLIBO7awOXZfZzmL0GGN6p7Vuwq2M5+u8s/gD0vXhu5+OVGO70NHwHGACe2jV+TAyOMuylEU5Kk8qxMabfg2JMhRARERERVAAREdSTur1oUpb5d2Js/ptZ5TZCcNzXmtlwe9Id+wSjM1dWiMFhmD0H4/lu9vwkrZyQhOyHWTY0UpaNSWYXqtQmS0Rk/77fD2TZyMWY/THGujkWyB0ocW7Oc7+MWN98gFrKzGQAUKvVjjRLXxJC8aeYvcZgfVdOSdn6u0/gXJXn9T8qy3wzh27bGxVAWKLB6BAMTkoTjijLbKYIYv02miRJ5U2YvbizdZ3BXWlS/ZP2yadl+fwuKMZi2fxGDNldAXsycJi1QtI7X/NurbZYZ4TEVqVJ9f6yHJmGqYZeCyIiIiLLe11TBRARYQ9CZqfc8/8eGR68PY98KThD7j5oZqt79FG3+RRWdrTIgqOAUxzOd/zVwbJoWWUkSwaysmw+xuxijel0iIjIwp7+SNORnzDzD2Ecw9yh57j7FtLwplhMfLOr3cz+bs/lZLWTvLQPOuFXzDgFGOmxmB+ACceuLPKhq2By4hDv+68CyBI/mQV2UjA7Isbhb8DUeI+TTu3Ht7qx/fjOvGSmSnhH3hj7t2X+/G8VSGP+6OBgdrNH/3fDTqY1tux+HwmGPc3dX5Gm5VBZNr8BNPV6EBEREVmWG7oBXAUQEWEPdiICWKPRmIpF84dlue5GyyY3G0w5trYjI2S+k8juYkhqZqsMjjTjJQYX4ZwUsmxFEgaeFmPzv2kFp4uIyMIZtiT7n2a8FCz0eR+fWTCPOP8wNBA+3Wg0pg/UouoAA0+y6sDPJ9hbzXipGbXO61LHn8KdmzD/q6JZ/3C7+MEhHnqsAsjSL4IEM05O0vK7sbVgH7qe/2RZ7SSM/wn2lI7Ht0Hgr72Vt2aHwjg1z/N6Webfg+x+YBqzIw1Wdo03MzNbBfyEhcw85v9OqwgiIiIiIstrfFipVEbOS3VfiMheFkKAB6bLBptK+GKlMnx+NI7Geb7hPwM22JUTwjyyQjr/c7D90Y3mthHz0bRS22huYzH49WVjxVcgcXhwqucuYRERYR4Lq7Usq12B2W+wa3h4d/GjdLi2qPjvjo2NPX6Afr6MgYGjiiJ5lzmXAGmPrwEowBuO/V2Wl++YYuphLfDLMht7xTleK9FD8iLz+KL2180s9jcpDs0xUVnWNwFfzKojlxD9XRhH9XiPGw7Gb1hl6HhzuzHP659ut9AzjSVFREREltTctnMtsJJlQxsgXOzuIxH/aRVARGQh3mTKZnPi+tZfB/8xqdinze2N4M8EVnS1yPIerRt2U2jBgRWGXYKBRTZm2fiDGPfhtb8IIZ1qNEYfAhp0hIGqGCIiMteJgFUr0kr+G8DlzIYm9zPt+HVF099Oc3LLflog7GxxGGHNcKUy9RaP/nKCPYtWdl33tSG0/3Kr4x8om/HOolX8CMsw8Fk4dLNA3P2Gohlv7P/ai3nHx1tt7NyuKcvsm1A/FBf0DSjzxvh1aTrybSe+PBhvARve+b6wEcN+AeMlWTY0kKYDX5iaevxH7UKIxpEiIiIii3s9smO8tmY4q00eS2FvcOfFBiebtb5MBRARWZC2WLN/ph4umzw8OLj6zhiLaoz5mbhdiPkg2GlApWNyPscJkJ6FkQhgZicAJwAvcDi39HIqTWt/4Qn3JR4ebDbHv8tsIaRfUUVEhEM406nMsvJ84ApaxY9+uR/torXfVYTy92F6y34qLths4YMsTUdOcZt8udNrwXJHIT24+/3B7A7c/7TIJ+/euYAifR5PXQuX5AzPfgBTD/bIs3FYtdJifiK2ozhigHngftg+eohm4OxoA1YU41+DNfcmlakpx18G9mxgYKfWfrDOsfcWReN/JcmK3yvLsU09TjKLiIiIyMEveljnGmGWrTwlhmIVcfIl3uQ1Zqw3qHbMCU0FEBFZyELIjtMdU1PbHm5/7OOw9tMMjB6RlcnrgdVudrrBSfvwJjfz/apm9uMABN5rjrv7V7Js+DNJXnx+mukf6qEREdlFCUPr3OJ5NnfxY+Z9d8KwzzH9zC3wjf158iMODAyfnpd+luGvNbOj2y1rvOv9Pzj8wPDPe+Dvm43Vt8MDDbVBnNflOoCpvQ9LtnDZs1VckjRPxbi0/RKw9ovgHkruPcRbwXVs1Nk60WzyHgYGrk1j8vuGXUrrVNmO+7GdC/KTSRKvhtpl7TZappZYIiIiIotu7ZEsq53kxkanvDg4J2KWMrvpunMOaeqNLCIH3MDA8BlF9Gdj1sR5QY/MkPnmhvRTuPvnDB4CvprnQ//YWi97pN6nx7yIyCFkaF1aCe82dsnU6LV7uu7w3qI5cRUwwf7J+SCjdjKZ/aIbGw029PlZAMZxPmYWb242J78A5Ho8539fJ9XaRot8yMyOVxD6EjvJ4Lwvzycu63UCK6kMvSxg14HVdrSGc/9wntd/teP0h8Y7u7wH+s+BVdvvg97xnmRm3OORTeTxmpzJb2ncKCIiInJQsz0CrBmC6Wpa4VLzeFyEDcHsjDk61ey2976IyH4/ptYyuD6p2Cnm4Y3gG4DSjLXtlie9ckPmkxnS+XUP49xnxtaY2PuTGB4FvJ0Z0uxTdNHkVkSW6fvw4NGVSvgDx+ZR/PAJnKvyvH4lC1v82NHuauXKlavqzXiiFeUfYGFjxzWiOytqyt1/ZHBNx8+jvKc9LjatG8qy8X/E2KgCCEum+OFwl3l8XZ5P3tm9CD84uHp9Xkx/1MzO7Xg8c9z/LM/r71RLuH6vhfb4k/Bmg5/uKrbOvjbc/9nT8M5aJXxndHR0u4ogIiIiIgds/TAC1Gq1I/M8Ps89+WWghnEKsLLH3NE7Tk433f2hmdtQCywROZDH1LoXv5jJDBkaOuKbRdEYNrPoHi9y5yVufphhp/YunPQtrnQWTRxYj7HewSniT5XEHLPpNK191Iwv5Xn97t4/l3JDRIRlmPsR/le7+JHMvQDu2x17f5EPXgX1iQXM/ejI+hhaV5+Kf4jHc7BwVJ/dOgZEx68LZlc1m9Ufdvw82tW+x5rJHO3OZLHOAp2teb7yOzC5y+diLAaAp+9cEPQ78lB8TK+PuQq8rfFnltV+aGbbovtpZnbcLkVVszMp4jPqJV+Aod+FyS3t989Sd6WIiIjIfgs137FhpdG0X4bkeWYc2Z0R3LU5JbT/8d0G/2LwlyEk06ACiIgcvELITgtdk5OPben43Htg3dVZNnoi2CXgNTc7z+CYvagY7/g+ZvbkHV8R7L0O96aV2icwmhbDE3k+fgMwqodJRJbhYLIkyzZgnNke/+0m9Ny+VTTDB2HrxAKHnjuwIstWnOcWzzf8QsySHjkfABbdbw9wa5HHv4Kph9oHUbSjfa8FFY2W7Gu46PV6TSPxxczugGt9rdskzcO2wiO65+Zu8Uee1zfDMa9PqttfGJz3OTyz6/0oMbNjwH8xrYQkaw6+fYqph3USRERERGS/rBemlcrw+dE4Guf5hv8MxmDX6f/ufLwdGXjm3GzET+T55GZaXV9QAUREFuPpEFpvUluaec6dwJ1AVqkMn9fxBvjK9r9L29khc/X669feo2JwCtgp7QYTo2ml9tPmNhaDX182VnwFEocHp+jdf1BEZOm8z2a1DZnZ+4DTZ3uo0q9YsgWP18LEGP1P37EXWR9JltUudPPzIZ5n3Yu2Oy06egO32wNc1lqg3CmIWO/BopO04LB6kNj4BTNbvaNdlvs2C/a38EhDY5b5hmg+OF022ERS+40ksff5bA7RzoUQeE2eJUekVttUNOv/BxjX3SgiIiKyz/kewLEDSfWx04PzqgjnmvOkriU97+4SAD4JNHC/xkO4PzU2T09P3Nbrm6kAIiJLoe9f2WxOXN/6z8F/TKrh40BhJRsIvBH3QTM7Gqiy61G4foWQ7r7xKwy7BAOLbMyy8Qcx7sNrfxFCOtXODGl0VZrVe15EFr0sq23A7Grg7DnaXs18fEvp9vaYT14LFAv0Pp4MDh5+VFFMn4PZHxq2rv0+7V1FjeDu2w3uK+HDWQhfazTG7le7K5F+c7ZKCY2y67UxGki+uACv30Nu3FmW9ZthxWUhlH/gcKKZreroK21AasbLwF6cVoZXJZZc02iM/giY0okQERERkT1uc8XKlStX1Rvx6SFu+9UYeS5mx1nrc7FHS+d2RBuPAl9z87/ErF42J+8ERovZr9tlrU4FEBFhaeWGTD1cNni4/bGvVqsrPxe9GAJ+Befpjh9jZid0ZYHsLjOEzsJJ+9+fALzA4dzSy6k0rf2FJ9yXeHiw2Rz/rjJDRGQpDC6zbOhksCvZffHDwR/E/J2xuSDFjx1ts5LqipcUReMPHDvRYFWPoLqZEylbDP/dNB34fD71+JbG7Nep3ZUcyq/jJsa9MFR0v36zbPREt7DGZhffI3BfCOm07rq9GnNaWY59sVI5/NVFMX0O2B8C67o21kRg2PDLy1j8XJaNXJXn49fQygRREURERERk98HmWZoOP9cTH6xPxZ/H47luts7MQtfmk87OBaM4dwL1YOVfZln4Wr0++WjX/LMzD7hv5UVEZElWjFuOGYTSkurYC0K0C9x8hWGvYOcWK3s8Ee740BTguH3Fg19vMYzl+fj/U2aIiCzS90kDYpYNXY2Ft86R+cHM5xz/q6JZfxOz4b6+D+2uyLLaBjc2YvaL5pzco6XMzIdGHf+cud2Y5/VPdywkqqi8sM8JhzXDWTb1WWzOgpgsIu7+/WD28mZz4tu7vr6Hr8Z4a0f4eT3iF5XNyX/SPbdgLfvOM+x8sJW9MkSALVh8e95YkMKxiIiIyLIeYw0MDJ+el35WwF6L+RqwKrMHNHZZi4vutwXY7BbuL5pcAwMN2DrZY1Mde3GcWkRkSWWGMJPVUTbYVMImYGWWjfyzh3gYTgXsYmsFW1Z2X+zotSDUzhoxNprbxnZmyMbdZIag3YAicpDeJz2p1s5297Nt7vcgB4LB5ljyGVoLeHsTet7Rymrw6CwLvxThzICdju/YhdN9aq4AH8P5YJFPXkk74VyFD5F5vcYz8Nps5iMBaFBaXeOPBRlnlnle/yRwfZLVrgjG5cBwj57V69zD76dp7fnufKYs65t0F4qIiIjsNBatZNnQBggXF5GNwWzDztnlu8wVmw6bwT8R4OY8r98ze7Pje9WBRbu+RGQ5ngzZJSg3y2onu/Nigr0B9wEgM7Mndf27OEchxNl155+1d2d+17B2Zoj/RQjJtFmST09v/2GPsGHlhojI/n4vTJLq0JkJ4Sp3Nuwu98Nhs5d+2V4u3HUMbNcMVypTT4745Yb9YkchxboGwNHdt2DhC27xE2WjfhfwhBZsdQJEemoCH82bq98GDzRmTn9UKsMXOHwQOKb9Oktw3pfn2btg+5heSws6cR+uVIYvj+6vNbOjgMGuDKNWB1W4B+JvZ5ndUa/Xt2q8JyIiIodomyvfMfeoTR5LYW9w58XGjq4AZVdWRwCa7v4gZlNE/6gZX8rz+t0LlcOrSY+ILPc3XjqKG5VqdeXRAGWIa0Ppb3ZnLRAwTgVW9AlR312AethRpXZ/CHCDR0r48ywkX2+H+Ha3plEhRET2y/vf4ODhRxdF4zOY/eQci9wRCGZsLvG3lo36zXtYgOi8zWqajjzLLb7c4BfMbB0w0HXCbvbncP9nT8M7a5XwndHR0e3ara4CiDDXaQTD+WKeVy+AbRMzhcW0Uvt1w97ffi07ENz4laIx8Zd7eYpL5nztrB6pVBpP6irwetemG3NnK3BHkftvQX1zVz9qERERkeWe7zEzP3x2e354kZkdDVT7BZs73G3Gl4j+0RDSqUZj9EFam4DCQq2dqQWWiCzn9gXeHSTaaIz+V/u//wvW3gPRYLqaVrjUPB4XYUMwO2MPCyw7jvWZ2Y+1//7jCX5qjPG2tFq7HicJhP9uNsdvRD2iRWT/7VQORWye43CCzX3yIxh7XfzofN9Ls+rIRUR/V3tndNbjvdIBM+Mej2wi92uKfPxbo1O9T+yJyC5KCJ1jG8esaL9qOk6lhkx31X4qQrFtvNnk2zD4e1kWfhjhzGB2Ol2bYcw4Ejg/y6wKtbfmeX1zj80vIiIiIstu/S3Laid5sNNxVpv769qFj6xXJ5X2B+4x52YjfiJvTm6mVfSgR0FlQVvGiIgc8nZ+w+b1mB/RJ5Rpj99DHX5o7jeB1SFem+crvwNbih5v8uqBLyJ7M54LWTZ0CYQ/xlg312Keweay9LeWZf3mPdih3PH+dGw1qT52eoi8ys3Os1Ybnt19v5k2Wwo4339jcdcJkOW4+M6X8iavhonHAa9URo539z/H2Dhzmgv8dpxfbS+46/W1f1+vnmW1DWDva7+WembLRffbA9ya5/GvYOohnXYTERGRZZbtkcLaKtUn1lQ8e23pfnYwe2Gf8SxAgfso+DUewv2psXl6euK2pTjpEhFZyrkhdFSYK2k6fJonPmgeLsTjmUDVzNZ3Bw3PIzeku1UWjn/T3J4w44tm4Tp3D2lanZicfGwLapclInsuzapDl+Dh3cC6PovbvTI/5rsYt6OlTpbVTjaz34rup5nZcV2trnb3/Q6VdjA2z48tdJui0G8xtt3GZzjLGv9XBRCWWBHExx1+t2jWPwCQVGtnBucGsKH245jj/id5Xv99tb86IK/t9o7E2oY0sz8FTjNjTa+Tb0B0/G8CdlWzWf0hbBtXEURERESW6PhnRyvlwcHD1xXF9LkQfh7zQbDntk979GpzNZMB+Xkv4yfKsn4nMNrx+f2+5qVJj4jInKFNMDIysrrZDCvc82e4h18BqpgPgf0EUOmTG0KfnX5dx/58wp1HgARss1v8CGYNK8NkUYz/O7OnQwK9w9hFRO9bA1k2chHmf0Sr+BF7LITvbeZHx2Le4PqkYqcY4c0GP91xu9bjva/f91uu7122N4WOSmXk+NLisftYjHDAEg8PNJvj36N3UaT9WB8+nGXNf1ABZElpvZ7d/ynPyzdl2eBhbo3zDPvddgHEwP81t+I1NBoPaHxwYF/ztVptTZ77aVj4U3c2dLwndn7dlLv/KJh9vNmcuAqYUBFEREREltgcxwGq1RXH5bF8bgK/6vB0M1vVY4PwjnUvd78/mH09BvtQrRru68iADAdys68mPSIi81r4m/nvtUMADIwekZXJ64HVbna6wUnsXZuSrguKT7b+Zo+58dcY2yz67Xlev0cPh4j0Uq2u/LGyLP7Jgj1jrpMfBptL25vMj1Urs6w83y2eZ/gFYINAwtwZI/vw/ZafQQaPKarJuY5XdrrIRLsA8xcA5T4WQBLcvuLBr2/fsoObRW5rXz92tMBKs6l/NOMsFUBYam2wcod/NPgx4FnMtuY0nJvzvPZKeKSuhfWDI6nWzja39xls6Jr8d471JqL7VWVev7JdBBERERFZClZm2cgrPMQVFu0VmL+o3Sq+b5t4hx8Y/vlo/H3ZOOJ2eGD6YLYD1aRHRGTfeh4yMDB8RhH92Zg1cF5o+Cvbn0/bC4XspvDBHD0Sie63BdjsFu4vmlwDA41WGOoj9Xm+t2shRGT5vg/VKpXhKxy/HGyk3/uJu9/vgTeVjT3K4EhhxYq0En/d4ApgmHku1u5lxshSLIy3ra1BNJiuphUuMY8ngEVwA4uOP9nMzutYtD4gWtcPuxs8tJ4GXiHYSw2epJcQy6lE8rk8H7wQttZ1zT947wkDA8On56WfFbDXYnSHfra/1kcd/5y53Zjn9U8zW/zU4yYiIiKLaa6TwJrBLJu8wM3PN8J5wMrdrG+1Mz7sk2ZxU7M5+QUgX47BiyIih3JuCDC4PqmGZwCFlWwg2BtxHwAyM3tSj39ju2mXBbOtbMZwvglEMx6JiX0gieGR1sIW7Z3gbB8bG3uc/j3h1UJLZOlr9/hfM5xWpi7fTXFipiBxXbN52Ovhwek5Xv87wtTbPV3PgXAxxrOBw+ZRwN2XjJGl0O92p5yoanXl0QBliGtD6W92Zy0QME4FVvS5f/wAh6AHvVxYbqdBdnruuPvDwcIbms3xm5T9sSiK0pU0HTnFLb7c4BfMbB0w0NXiIQBb8Pi7aTrwhampx3/ULoRobCYiIiIHOeMMarXakXken+ee/DLGKcD69hilu9VnmBmPAg0s3NrO+LgLeOJAt7lSAURE5KAUQ3YskFkZ4pGh9Le4swbj6e0LCH2KIdanWLFTIcPdH2Q2I6RVobdwq1v89MzttHvCf7fPYp6KISJLd5FtOMtqV2BcDjY8V+srYBMe35bnk3fPUfjYMeBNqis2hlj+gcOJXT1dbXc5BXuRMbIUAsy9I7PjhNLiMVbydIL9Sp8Cd7/Mj/kGo7OABRBUFFne3P37SUg3Nhqj39e9sZh2Ta4ZrlSmnhzxyw37xY5w+pn3xeDu2w2+E0PyzrIx9s8Hsy2EiIiIKONjR+ajh18GnmfGkV25j92bdB/GudMsfsQsu7dSiWPj4+PbujI+XCdAREQOgZAoulqkZNnkK4EXgjUi/uxgdgb7lh3SqQCf3qUnvJMEwn83m+M3tr5GRJaorFIZOsc9bMR4Hb1PfnhH0fTm3P2t5PXNu73hrLbBjY2Y/aI5J8+z8LHcMz/SSmXkvNgKKo8dmR22ly0ORRZS4dGvGRwMv9kx2ZRF1Sp18OgsC78U4cxgdnqPcFDc+Bbu1xRNNkFnZo+IiIgIByjjY8V5bvH8HpmP3fOb3N1vNHgI+GqeD38WHpnq2tjri32Hm4iIHEBZVjvJg52Os9qc12N+RDtMKl3oRTWHB4l+kxkF8FielH/N9Kqtrb71j0z2C6/SJFxk0SymJVk2dIlbeLfNHkPuG0KOc3POjuJHr0BeBzKq1aMrnr22dD+rY4Fuvu85yyHzo+tU3DGDUFpSHXuBOa8GZWYIizQY3Sei8TPLrOi4LAshOwrM2MXtoPRKj4L1ptz9so6CtR5TERER2V8bdQOsGeqT8dE9z2w6bAb/hJnV00Z54xRTDy7lI/4iInJwWmZV0nT4NE980DxciMezaIVFHW5mq7smybab93Hv89+dbU+a4P+O2yTQaB9Z3AyeNBrVR2DrBHNniGhCLnJgF9DSrDp0CR7eDayj1S8+mbP4kftbob65q/dqx+t3zXClMvUWx18Odkp7QS7O4z1muWR+WPf9kdUmjyW3N+I8w/FjzOyE3eQ2iXCQCyAXlI36Fzvb2AmLNLcJsqx2sjsvBnuDBX8y2EjH4xYgbvIk+b1aJXxndHR0+xIsKIuIiMjiWOO3XjmEIyMjq5vNsMI9f6Z7eGNHxkfsWG8KQNPdH8RsiugfNeNLeV6/u2t8s2TWhzRxExFZHMWQHRelkZGR1Y0Gh5uFPMb8LAgXYj4IdhqzOwb3ZDHO+5wmsY4e4luACSA4XEfgFvBK4sl/98kQUSFE5MC9VyQhG7kkMZ8pfsQ+OQ4dmR9+WT578oPOxdEsW3lKDMUqIi8Jxm+0M0Ri/51BLLfMD+t3fxi8xszWA9WufrcaOwuLrwji02XkN2NxxYfhXVEnBpZMwbVara5cX3p5qcEVtFoZzozrorv/CAtfKJrl78LkFhVBREREZJ7zG3oVPbJs5bNjyI8Ei+0Nt2cC1fa8B1qb65jZYOdwtxlfIvpHQ0inGo3RmfzZJbsepEmciMii3Y0MQAprqwyMHpGVyeuB1W52usFJLGxYrnWdDmkAKW5fVoaIyEFve3UptuPkx9xtr3bO/LCdB747WrBcYviJYCmtoqrv4dhwWWR+zHF/KM9DlpIHHf53Grh1enri9j5jCVmU+SCMpJXa63A724xzgKzjvbxw+FvzcGOeJ5+D7aO660RERIR5Z3qMvNxDXIlTbbXg9KcBJdgAsy3Xd5pbOtxjzs0QP5Hnk5tpFT1YDq05NakTEVliBgaGzyiiPxuzBs4LDX9lO5C3xn4M5HX4obnfBFaHeG2er/wObCl6XBS18CKyMOOzkGVDl2Dhj2kVP5jrNAb47bk330SedxY/+mV8WJ/+rjnOFjc+RvTHLdhFwPO7g3uXWOZH52B9d/eHCEuxHZbDZp8tSOp6vISKIQMMPLnM0pcCr8L89HYWnLWP6E6Y2ZXN5sRVtE7qKhtERERE88TOcUBGtXp0FtP/CawBi25xpRFezmymR78NsAXuo+DXeAj3p8bm6emJ2w6F/mAiIrJ436u7c0OAwfVJNTzdI2sSeIvDkYCZ2dHsXbusudpmhdkP+DfN7QkzvmgWrnP3kKbVicnJx7awa3aI2mWJ7HvmR5yjHZUDEfc/zvP677U/Vq1WVx7tXl40R8bHzMJ/dPcH2zuO/8483FAUw9/KsrH/4fDHZvakzoLqEsr86G45s7v7Q+NiYYkWQHymJR0efyvL7I56vf5onyyvftd44aDlgzjg1eqK4/JYPjeBX3V4mpmtan+u7nBVYsk1jcbow0BDBS4REZFDOkPWBgYOe7J7TN3jhV3zm+4xYudGtqTdAr01nrBwq5fxE2VZvxMYXYrZHiqAiIgcchfAVU9yL7MYywHMfgXn6V0hvt7jVIjtYass37m/pE+480jrQmqb3eJHMKuXjZ0uoL2KIZq0i+x75gc7esbjf1M0a78Djz6SZUPPcrcXtUN2j21nfHiPkx+t2/S4ydPkd5NojzUaY1uAyZCNvC4x/2NgbfcC6xLI/OjK+NgpdLjz/tB4WFgeYeiz11R3tgJfc4t/2ed63N0n2ue45suBf88Kg4OHryuK6Zdi4Q9nWx/6mEd7EHaEkG7u1eNbREREll2mx5wbYM04smu+1+sU/Mxc8mGcO83iR8yyeyuVODY+Pr5tORc+NOETEVm+RyCBYwahtKQ69oIQ7QI3X2HYK9j5CCQLkB9iO7fh8Umggfu1HsJ/gKcWuS3P6/fooRJZ0MyPGYVH/xuy5K8sxpPdfaSVacEz2U2ehcNmczaRx2tyJu8CGBgYfmFe+tnB7H8BRy/lzI+OjI+LDTZ03R8aAwvLsBjC7EL6Ttfj74IHAIthNM/Hb2DXoogsrjFdkmW1C938fHM7F7PD2p9rOPyHl35FuwWhToKIiIhwyLdAn6vFceHunzN4CPhqng9/Fh6Z6uoU4ofSbmIREWHZh2AdhlNph/6e0BX6u1+Cf6P7bQE2u4X7iybXwEADgsMj9T7XI03ihUO4+DGfzI9OuUe7AYvBzF7GbKBdr9dzAd7AbWvEP54ldks7NDkAnlRrZ5vb1e1iQee/bTrct8gX3OabeSKyXBTg0+3Jr+2mv3OnUSfeYB5GgUYr5HLld6AI7Wvz5G5uQ9foAz5+W3GeW3G+EX5+5j3ejHs8sok8XtsuYKsQIiIisrTngnRlerwOWO1mpxucxO67dXSM23yq1bncvgJ8JsmLz08z/UPtMhERkeXeLmun45BZtvLUGIrDiLzE4CIgNbMndx2ztL24ZvQ6Mjlz3HIM55tANOORmNgHkhgebTQqj8LWiR79sLXgIodMy6vBwcOPKorpczpanuyu7RV9wtDp0eYquvsWLNzkFv/WSpsqiok7gGa7D2xMqrWzEux97mwAyva/T4AtHv1PzPiXdssVX4SFj/bvuma4Upl6izI+5BBQOlzrxL8PHt7k+DOA0oy17RYI7Fwo2en5HzpfC47faW6PtT/WaLdE2AyeNBrVR7quz2ppedBaYw2tSyvJH+LxHDNbN9PDG2cT+GUdLbHCzq0yREREZJGv1cQ+mR7PBqpzzPN65Lz5hEd7APwjnvDtxMODzeb4dw+FFlcqgIiIiPW4WLYveGuGq9XmkWWIR4bS3+LOGoynA+v3MTek1+JI58XZ3f0HtEKXryNwC3gl8eS/uy7QCmyVZb/bJ0lWbAyh/AOHEztCb20vWt/sktXj7vcHs6/HYB+qVcN9o6Oj2zu+dwDKJKlttGSnkx8zr9ctWHx73pi8pl0UWUzHozvvn2qajjzLLb48GG9pLwCr8CEs0zZX045fVzQH3wGPbRkcXL2+LJs1M4vu8SJ3ztxRxDSe0XE9p6O42ZnntdPE2d23ABO0joNcR+BW2ovtZSN+G6Yepne4uq7T+7kIsnLlylX1Rnx6iP6m6P5cMzuulQHFzU78QNn0u9qPj06DiIiILP48Vwe8Wl1xXB7L5ybwaw5re2R69Drp25np8e323xMzbjVLPtlojLZCzlX4UAFEREQX4O4L4NoaRMuyyVcCz3c42szOZ+eWOuyH7JAmeANIdERTDrUFrSSpnZ0k9j5vFR/2Np9il9eVww8M/3w0/r5sHHE7PDDdo5AZk6S2MUnsat+17dUWPP5Onk9e27HjaDEOmNOsOnIJ0d+FcRSQqeWVLGfu/l+hai9rTkx8u0dRsgKr2zsFg7ev5y8Ea0T82cHsjHmcrux1fQYwx/4R48u4V9Ngd01PT9ymR+SAt8cwOLaaVB87fbZloRUQpx2/3jy9Mc+Tz8F2ZbyIiIgsYgMMPKnM0nOBV2F+OthAjw1tvdZPujI9hv4RYvvz2xrtU/5oQ4QKICIiMg+DDB5TVJNzHVKcI8x5PeZHgFWZLYr4frieFO5+o2EP0Nqt0O5Rfvh/QCOBrdMdLT2UHyJL9+RHtXZ24juKHwtR+ChwHwX7pFnc1GxOfgHIe33vjKFnk4VLLLDRnZN6FD/enueL6uRH1wD+2IGk+tjpIfIqNzvP4Bg9rYTlffLDgPHofnWZD1wF28b35AayrHaSB9oFECtxXtAO0fTWNd0G96Q44nCPObeBp27hP4om1/bJ+EKT8P3zXjgwMHx6XvpZAbsU4xggw33cza4smuHPYWysa7wkIiIiByXX45hBKC2pjr0gRLsAiI4fa2bnzZHh6Mr0UAFEREQOTC/KGZU0HT7NEx80Dxfi8Uygambr58gf2Nt2Wbv8O8fvMrdHgQDx0yFkt7jHrFrl8fHx8W09dtarHYcs6oWrpFo7uyNzY0/zPjrbVOHurSPOFm71Mn6iLOt3AU/0OO7cKn5ktQ1gV2Ns7HF7W0q3t8d8/FpaxQ9fLMfDATpawPxqRwsY17hWlrnWe4Txvrwx8Xu0WlTNd35nXdfotsH1STU8AyisZAPB3oj7QPv1VGvnTHT/DJ1tMTsn66M4d3ZlfD0CHsyS5vT09gf7ZIPpOr3vCyuVNB05xS2+rN0CcAR4HOdbED+ZpgNfmJp6fMsiP8knIiKynE75z4yXKtXqymNiLAYx+xWcpzt+jJmdsJvxT0er0nlnemg8pQKIiIgsZG7IyMjI6mYzrHDPn+EefgWoYZwCrGTuYsieBKl7n6IG7r4NeBzIsHCLW/w0eAgxezTPR++aRzFEgwM52G2vujM39qZQaLR6vt7ZDi2+t1KJYx0FwdDVN7Zd1KxtyDJ7H8bZXcWRzsyPa2ntGt5fJz9sHp/rV4D9eTye216cDR1ZHxrTCsv49IcDwY1fKRoTH9nDoOt+mxJ2eo1VqyuPBg9gpXu+wT28kVbwprv5EYad0nW7ZZ9iSHT3B2mdPgsGPyrhgxZ4BIhlo/5NYIy5iyG6Tu9xSPraWqVS/w3HX9YOTR1w98cNvhtD8s6yMfbPvXekioiIyAKtm8SOk7cnu/Nigr0B90EzO7pHoPlcoeYN8LsMu8Es+ZQyPVQAERGRg5cbEmDNEExX0wqXmMengRVunGFwEgu/ANTr2lWATwOJY/8B/gmMhsUwmufjNwDqgS2L6+THrpkbezMWG3Xijeb2uTwfuh62TnYVHb3nTuGstiFjp+JH5/deVJkfe9CCT2NZ4dApgPivF436h3qc0tzXeWCP94y1Q61+0mnMstETIVzcnrj3atngc88xvd7+mgbu13oI/wGeWuS2PK/fo4d4wU6DZAwMrEtj8vuGXTLz+LjxLdyvKZpsgvo9KoKIiIiwfzI9qum57l4Du7i92a0y364Xsy1G/XZgWx6Kj9FoPMRsS2O1E90PBRDT7hsREdmrC//A8BlF9Gdj1sB5YUePcdqLl5U9DGFlLxeIbzAPo+zIEFn5HWgmrf7kaYQtk7ruyYEqfPTJ3LA9yPgowaccu948fC7Px26cR4FvR4uULBt6OhauhJ1Ofsx8/4fx+I55ZH7YPFvY7cYxg608nxnRoFJ29MQtHX9Kj564wh7nwsjyKoD8WrsAEhagAMICFyjXdPxMyTwyRSy6/0vAvgVeBb48G+IZ2l+7S+bXAr4PLWdD69JKeLfhr26Pu5L2c2YTHt+W55P/0bGLVIspIiIie7cptGNDaHwNbhvNOAfI5tnuO4JPtjeIXOMh3J8am6enJ27T3bwfHrhqdcVTd/xH7x6t9GgtoB5jIiLSq1VW15HOHT3GAUoiZxpc1HHdWGVmq+nd75x5ttHyPot/1pUh8tjMxzt6lD/aaFQeha3d/dTDbq5vuu7JvIPv+mRu2PwzPngU+Jpb/Muy6XfC1MO73709s0N8aF1WCb/t8KL2LqSu1nDecONtRaP+UeYOy+272Do0dMS6smwOzedOibEcwOyNOM9sF1t23FftXeXH92mHZ1rYZ75B2aICyP7YKNe3fVaajjzHk1ibudZbyTM7MkUyMzumR85Rwc4Fzodw7tv5udzK/AJPAW80qo/0uF7Pd756qFzD29eewfVJxU4xwq8bnDPzPHLYbMaXSP2jeX3ogY77U4UQERGReba5qtVqR+Z5fJ578stdLcHjHHMW62jpPQb2bbf4F5jVy0b9TmY3t4U+rcFlXx7ENKvdP3MHGzxSwgfaPVoNsBDTx7p6qqsgIiIi8+0z3rVAs2a4Wm2sbX3eihjzsyBcuNOk3XgGsJ69K4jsthgyGyXiPwAKh+sI3EprhyRlI367vcBM1wCEeYSViXQUH3ouQDGP4kdXxkf5l1kWvlav1x/tke8xx+B8aF2ahndb4NL289u7FrkMfNyDvazY/U6jFUm1dirdJzLcq+bhjeDP7Dg9MpfQ7oFbYfeFFlPbVvZsgdz9u2ZsBTttjvtYVABZyIJIr/eidqYIlCGuDaW/2Z217a+LPTJFyvbvZF0X6seA7TPvq93X65n3sT7z1X7X70Nh7tpZgD/JsSut1fpw5vrUcPeHHT5J4Ishptvb959pwUVERKTn3Mp32mDg4ZeB55lxZNc8ptfaRABy8K/jNtXe4HFrCGljampb97qDa31hPz2YWWW46w71mT7S3u6p/p2ZnupACB4eaDbHb2TuXYIiIiLzaS2VwpqB2TY4wbNs8pXAC8DKdu/qhcgUmavfZhO8MfNxx/4R48u4V9Ngd+kIqrB3LWLW55Xkjwz/ua7cCvYi42OKnYsLuxsMr8yyFee5xfMNLuxR/Oh4XXgzun/UQvg2eNLnZRwtxhMwu4TZ8L6O15IN7UWBwpVPx4Ke/HDY7OaXlaF6X1o2/8jgNWohpgLI4rjWrxuCIsy0u+vIFKm4+UpzXoHZyo73qX7F4iZ4s+vruuar5uAhNbv7EL9+z2ZPVYbOD9jftt+rvaMw1ATPDbu/LP1tZVnfpHwQERGR3c2v/IJ2q89kPrke0f3LidnNTcs/TuOwrfBIg9k1dZ3APIAFkLgnk06HB4l+k5k12x8JwFdaE/TY/vfbGq0B1W4ntHqARUSE3WaKuD9rZrHHol2A+Qtbg4aemSJzhaazh6tO95hzG7i1FlWA+WWK6Pp3iLW5YqagNzKyMm3M2QN2LqXDp+eZ8WG77ixaM5Rlkxe4+flGOK99DFtYsjke8y0OPeTwV2ng1unpiS8DnlRrZwfns2DDao2lAsjiX1AYebmHuLJHwbUyu1lizkwRm9/12wOwNU/KjzG9amurKLMsr9+dP3dWqQye44RPgdX6FKvMjHs89g1dZQ/ai4mIiCz1bI+246pJ9eEXhRhe4eYrDHtF1/yqc0OGzbb49AZuj7nx1xjbLPrteV6/R3fxwS+AlHs40Ot1lPhhnG+3/56YcatZuG7mtioV3z4+Pr6N3R9LVksRERGdEpmr1ziVysgJpZVPAWsSOasjU8RaeVasbS/69csusDkWsHsdV+3xyb6ZIo+0F1gAqFbZPjY29nif3zscYi05lluLtwgwMjKyutHgcLOQx5ifhYWLgWcDh+1BIHV09y1Y+HzRLH8XJrd0HYH2fgtQIyMjq5vNsMI9f6Z7eGO7/+z6PQzDnm+7E2PxndpYbmNH639/+oQ7j3R9sGGEq/J8/G/az8nQUQD5vyqAoALI4r/O93r/6Wy515kpUm1/7bCZrWPXTJFOSZ/v2wT/Bm51IOzF9Tss0lyRHvfn4PqskvyWR86wwIaO1mH92i7O3D93GnaDWfi0u4c0rU5MTj62pc/7lFp1iIjIUh93d1w71wxXq80jS4trQ/Rfi+7PNbPjdjPvCB3zuZvc4t9aaVNFMXFHx+GAXnM7ObgtsHYZhM5n50voM0FzIMXCLW7x050Vsh491lUUERGRPQxf3ZEpMhuk7PEid84Cmo4/xcxOoH/OgO1+50ffgOnuTJEHOwY4DiRYuLXj+jejKBv1bwJj87ldXQMXba7NyiSpnWJJuBiPZ9HaKXu4ma3u+Lowj+8Rcf+CJ+EPhyr2nfaCW+gzHpspvGRpOvxcT3zQPFyIxzOBqpmt7+o/awtw6mCxFjnmOSZlCa5271Rg9T4bjHxmt3yjMfpw18lrT6q1jSqAoALI0nt/7bdxoZ0p4gGsdM83uIc3tlvyeY9Mkc77ruz6Pt1ZI7F9/c7nuH7vbv56sN9/ukLph09rXR/sF4wdGVDzfZ61rx075vMJ2Ga3+BHMGlaGyaIY//eu95ygMYuIiCzVQHOALFt5agzFYURe0t5gmZrZk7u+znqc/jB3vz+YfT0G+1CtGu4bHR3d3qPAomviQS+AZMN/vuPRs7jSCC+fR8uEPZ0kF+DTO/cptusxvjKz08awZtoob5pi6kE9LCIiMs9rTK/rUQVWV2GwSKrbXxiiXTBzlQPzA5Ap0u/6x44WWu7Xegjf3XENjGE0z8dvYO6WR7II2ly1WrKxwWI8DuzSdt/6tMdgeL7Poxz39+f58LvgkXqfU0k7CnMDA8On56WfFbDXYr6mK1/ED/Ucjeh+W8Dubi+ULsVJRo8WezO2Ntm1xWzP96CkWjtLLbBQAWT5XusN1g612i+nsSNTpDqP6/3eXL97zl93RIcd5MyRQQaPKarJuQ4pzhHmvB7zIzquD74XBfGu+98nAcNta7ulx2MGhebvIiKyVA0w8KSymp7r7jWwSww/ESztarHd94CAww8M/3w0/r5sHHE7PDCtXI+ls8O2owerRZw15ryuNcHeMchOdtODdW93DRbufqNhP2gPKm3XHq1zTgDVY11EROaZKdJewDa7dGYHaY8e434Ad7+POvEG8zA606fcLXy3aHItDDR2/tKt0z1afeg6uPAtRNoLbMDA6BFZmbweWO1mpy9AAa3bBO5X5Xn9vUC9Ry9Zzxh6Fll4rRsbDTawBEK5F+i2ZkKPu28/we0rHvz6jkVIs8hty6zHrs3jft3ldd4OPf50n57/ggogh3CG2AtonQqx2dMLNrSPOTz9MsP291PDwKLjTzaz87qK8QfCzPz9v4EkBr++bKz4ymzxNjg8Mrmb8ZTGKSIicqDmdwHWDMF0Na3MmdnYb7NEbG8IaOD2SbO4qdmc/AI7Z2bJIn4ihDnaX1XSdOQ5nsRa+787e7AOtL+21qMHK30G5bvbtRvm6NHKXmSMqKWWiIgK/P1aa/TrMT7UbiVU3c11zea5MOLzPEHS/e/HcL65a7EjfjqE7FbwpHU7FhuN0Yf67Ay3eQaXup4js49vrVY7Ms/j89yTXwaqmA+B/UTHbqC4+7yGPTbhcGXRHLwKtk60W5aUAFlW2wB2NcbGrhZXi+20R+cJlKa7P7QPi7TtHddcR+DWrhYuDlji4YFmc/x7i6gNzUI9H+McffZ7jq8HBlYd415WwLwMcQ1FfJeZbVwOLcFEBZC9aJXZL0Ps+NLisR3FxOiRtQn8usNR7a+vmNkxfW6vnGNRJFkkzxP20/XB+7zXW0cv0O8Z9gCzRfyGWfyIWbYZPGk0qo+0r2/93q+VhSYiIvulzVXX/K7Wzk1cOUdr7JlsD9x9W6t9tX3bLf4FZvWyUb+TVvcGZXss4aBF200o5lw9WFv91/Fjzez4eRRFbC8WhHaXMYJ6rIuIyDzCV7uvSdVqdeX6GIshzN6I88z2YkeKcSqwYh7B0fMtisxnot87gN39cWD77HewaaJ/xBPupbUA44CFmD6W56N3Mb/F4eWy6GDs/WLzyqRaOwX3mnn4ZeB5ZhzZpz/6Qi8stfNCfALnqjyvXwlMwOD6pGKnGOHXDc5Z5C2udmSeONxt8C+4/2UIyfS+3GifBbM93eiy1MbkfYsdcyzgvtlhbccC7tEqfqACiK71c2SI9SwgxjLEtaH0N7vveD3tbn5LR87IfE+O2gHe+LE/c5l8rvGFu29pXc8I3QXtPpkqYR7fR0REhPmtL7fnU73nd7HPZsGZa9EocCcePxFCdmsIaWNqatvDXdcs1zVq+SwUzKNIMdODNRpUyqQ69oJ96Lnue/Ezqce6iIgsYI/xYwZhKm3N16eraYVLzOMJYHEPM7P2R/hzr40BU10LMIlj3wH/BEZjMfQoZ0m1RLOhrt08B7LoMIHH/00I97lzhuGvbLdmC4u95ZXDZnM2tTIsJjfTP69iIcery3bCkWW1kzxwxkx7rz1s4SOoACJ72ypy3dBs++Ve89sdi/sVgp1rcMxeXMN9AYv6i+0UYL/foQnemA1PsX9sZ6okrfe3ZdfCUEREDo60Uhk+PxpH4zzf8J/pmE/tNguslSnIZrdwf1HlGsbHR5ntyqB8j2W+U3KherCe3Fo8csOpgl3cCpmZqbrZ0F72MLd57ors6rHe6rMOfCXPh65vDXBnwibn1WNdT3gRkUNTR2ZWe1kyxhMwu4SdWmdZhZ1D1PYmiHUhVyZ69SjvCF0uQp+e3UtkTDOzIWMuOwpaTwMr9mCDhvT3kMNfpYFbp6cnbu8T5C507hZbOzgT4MzA9jVZmbwOWLNjnIzFiJ8czM7Q3YUKICqALOIFlpHzosUnz75220v5zgsMv4Bds3v2pGDpi21Ovz+1FpzsWzMF/1amyKovtzakbGvQv6iu+bmICIfsmrbPbmAsLamOvcCcV4O91OBJc1xXO68dOc5DbnwMY5tFv10FeRVA9rS9yJyZIFm28tkxFGsAx71qHt4I/syuXW1DfTJGum/X59HrvF+v7odxvr3zi2fePdZ1TFdE5NDrLd7rqGtnpghASeRMg4u6FkBCuz1NZR63Od9r7HyzPXq31cLvMret7dud6dl97+w1cLE/Vla658/saMk5l14tzeJ+7JvOXraTYpHmfHQ/tx4q3X4v5uPXtMdv6oO7m+fr0NDQ2mYR/sycY4CIeQ3sOX2KpXEv2vwIKoDIfm+nxdxtLwbXJ9XwjK7rf6+Wdf2sMrPD9yL/42DdF3t7SqRvCy13/247YL1ixi0dGaA+U2jqMT/X3FxE5NDI9mhf+9YMZ7XJY8ntjTjPcPwYMzuhR4ur7vZW7u4/AAqHT5uHG4pi/K7W5sCdv07XEBVA9rUossuTaGjoiHVl2Rya54LGfHqyz/c0SdiLHuv9MkaCBlwiIodkUaTHQsaa4Wq1sXanL4rlQFfGCLtZAN2TRdB+pyP3KG+r3bN7cok9PrvbMLHUigy+yBe1Y7un++8XzYl3t/9bhY95qFRGzo8e/4+ZrdnDTCEVOlABRAWQRZkpNp/rdo/Mkf5F/RjzMyFcuPufaLfjh4UsyrMfMk7mWRDZkQFKj/n5ZiDdTaaIMj9FRJZRqDlQTdORZ7vFlxv8gpmt71g37i58dM53H8a5z4ytMbH3JzE82mhUHm1nDlrXHFrXCRVA9ndIzXxaWuxVT3bfg6Oy/XqsFzM7ZNsZI98BTwxrpo3ypimmHtTTSkRE19W5B03HDEIjaf29VwucvcrQ2pOFBjvY7bg4cP3HtVue/bIYZg6bifxqUUzcjhZk51WQTJLaxiSxqxw26DkpKoAckvPs+V6nUlgzsJsv6TN+WKAn3u4zTg7kNb3P/Tk7P1emiIjI8tfKyLPTcVab8zqMo4FsN9eNwt0/Z/AQ8NU8H/rHdtvn+jw2D4oKICzunuyzGSNPA0qwgY62JPtjsadw9xvbx3STefQsNe1AERER9i1Dq+xz/dpdj3FXUUDYxwIIHv//eT55mRZj5zXeNiBmWe1DmL1p5gSN7hrZsxNXflnRrL9Pk3Rh6WWc+IEeb7QzRe4CrwJfbi147TbzU3N0EZFFle1BCmurVJ9YU/HstaX72cHshbu/xvhUq9OzfQX4TJIXn59m+oe6a1UAYTn2YW1ljORHgkXzcCEezwJy4HAzW70A7UW8XwuROXqWUqn49vHx8W3ML0tEAy8REbXRoEeG1hF92iTN2WPcjLVgw7vpIW4qjMhcrbkc7jGPv5jnk3dqrLInBZDhD2L86syOft01soevuzvN4+vzfPIuve40Vz8A1+mFyDipmNkxu2mFbfu/hVbfzM9bwFPAG43qI+0WKP9fe/8eZ1ld3vni7+e79tq7qnZdaJqm7aYBJ0EQaJQmo47DRQSJiAJmTkwggs5PJwZHxJnE5Je8JpNMMpM5OYlJxmvQHJ0ITSAx50RAUdLcBImjJDZCA6IkE7AvNgU01VW7qtZea32f88deVbVq19q79q5Ld12e9+uVSO97rcv38lw+H0xGyzAM4+iumQHX23vsliSZfBu4n0e0F+T1WbeHb0qU5OKxOqZengW9UQOeDNTtrddHf5Abz82uwBZVrDVN9lkLq4GBgY1RxLEiLvY+vjinqaqKnpwzyaET7dYOFmBFmqUKlBB3r4q/beqzAnXP5m5IS4gYhmHYnEw3HlodaoxLIz/vr1blIqb8R1priPsVbsJtHD3qCDfG0Um/Ck/WrRq9qwTIp7IEiHWAGHTvCaQ1L1yZRrV77b4zjqKvZ4ceJ+JT5ze7VG9QzRIixeuNTjyQZJEJkSLPzxeZ8fwUhVtx3EfD7xOKPT9dm++z+9EwDGNxa2UFtFIZPCX26esD+JDC6SKyoWm+kObxXdHdonJIhPtFgluiaGQ/sw3NzdfDLrJ18/fpXE1VL1BOg8rhc52XK5dAc11baMc1H+cEdDJ7TYDKw+r09qkbsyTyvcnJsQft8jQMwzAWOH+3W9iVYVO5QEP8/cBxqpSOsua3scJR1X8SuCKOa0/Y0bAEiHEkkyAae+UP0rjv/2pRqW4YK9DjZEsfJK7Is6QDD8/l9AiTOcl9NC9bPeX5+X3QknmKGIZhLC899JyUhqVLgZ9F9PzMyqCtjGKjK51d4HfG8dDTcCDJWRCIJT0Mk7XoVnM90zsV709F5FqgMt3RgfR22aEh86zOHhclS4BoADw8o1nam8DeiTZdL4ZhGIaxmMCFK5cH3ua9PwWnZcH9DPDGFnJbXZuXKsTSqK50HRq0G6y4KOwTgQRXRNHIP9nRsASIccQTkM8ELrg0ig7/ox0Ng7Xk4bm4/bYcIU+Rx0Bdo2GEqBFwO/b7EAUtPEXaFWUahmGYxweUGBgYKkX+3ahcIsJbachctRrnE1RHQG9S554pCXusgNywBMjCpLPma+sdDCrVczJD9VRSzsTJdaj2ZDdoVUS2dNAmLB3qlcKMZmkJYQ+qNzoXTAISBOXa+PgLB0w6yzAMw+hi3stLW81IYbFhqFxONjtXmlSNTk+9XAecIyInMX+So50v1gGgBojA3yjuVeBfm323E5ETmJHD8EWfYbBSKtAn1fNrSVL7HDPVVYYlQIwjlwB5lpK7KpkY/V92NIw1sO8ukr9ayH57qXxFtIs9Ooo+KirPN57ztzkX3pcVMCqIj6KRfQVzpcloGYaxXucBye33pjw+LkXcNcDZwDFNsVOXW/80JK3E3aep35mmtd3AiElcGd1uyOwi6dyQtjmRUa5Uhk7IKkFS1Xi7qruORsWK5DxGXtXmc2SehVd+kVRX1X3Z+wOQPSr+RkRqaTRrAJgvIWKDgmEYxvoMOMwKEpTLA6emkr4SpI7nLQJXN57XfhG3ucPAQHOyog7696iMA5GIv1Ek3AMaRFFpuK8v6EvTqB9Q79MeRD6Icrqi23KeXGoFG6xED4JxL1xhHgSWADGOGl7gL+v1gX8HBybsHjTWQSFiu/22qugmQc6eZ9++VEbr7Yo9XmLGUwREJvF6owY8kfmKFHmKdBKTsXvcMIy1UHw3vQdt4fGhBUnnEZTdQE3E/6lI+GS57A+Pjo6+aIkPwzpAjq63SPbc5r7G3qTIYwTv0dc6kQsWqN9esEDUcWY0Sp8GDQSpl6L0axNM7LXTZRiGYeQolcsDl3n8KxFS8XIlouc1ZBukUmBM2sl6YUTxd4q6kUaAguE4SL/A5Ibhxlx4cLz9onRbL6QyNV+q6KDAlSCDdrpYWQkQZZeIXF+vj/7QNhuWADGO2n14Xxz3Xpn5gFgi0ljH++2SD8OR08BdA1QyP0/v0dd0sN9eam+RgrWSTmSyWJLbr/8gWysh3o3E8eidBUWMhmEYrEHJwyvU+UHxcgWibwIpN61jpsbRWJW7Ed2V1N0t0BPB8HiTUoCtfYxuFxab+hv/2ZFm5UINV40cYVg9Sx0XgCTi/atzGqdTh7xMcQCqmyRWoqp3CfJstsGeT6PUtEkNwzDWVIBgjuloO5NzLag+LOhO1KlEhlPkadCdCNEybOD7w7D6UYQPN+ZD6bNgMUc76No478KHkmjsM9n58HZoLAFiHJUEyD1x3PszlgAxjPn22wCSopwr6Dtn7pU5BR9HxVdkdgHJ1H596GmoB+AUSh4OjHcQA7AxwDCMo11Mnx+HyrCxAr1JUDl03kyBm1wBDBXsP6cSxorKw8CXgji5e5LJ5+xQG0t20YZh/67Gf3asWdkKt8BKiaWotlhtclq+hcYpQIrnokyCxAP9bTROu5HOKtIovVfVh5UKL+VayOZrw7XFlWEYxtHr0JT5JSIgdX6zS/UGVTYDHtEqyE81bfbTAmmsgPklFyNAnC8Nx/HIo62kILqUXWxukfbAUFCpnoNqr+D+g8AlCzBiN1jqBIh+OIlqn86dJ8MSIMaRvRfJEiD/xhIghq2T6FBGq3drUHFnFOy3p+6dDSKycRkktLSDJIs07ddfmHpchIM+kE8E3h0EdSJBfXLy0N75PsektAzDWEYPyULP5L6+47YkSdQvIl7VX63KxUBd0Vc2SRxPvTcAIlXdh8gEXv9UA54K1O2t10d/gElcGUueACn3a6ZZ+SLwchvNypZVSIG6Z3NSCN16jyxVAkRX6SKtIHiwqb9SiTa30Dg9TpAdi/USyc73S0CIuHtV/G2gzvnw+XkCWpYUMQzDWBkeVO1MQkMRObFgM+wLtFjzc/x+lCeBEsIeVG90LpgEJAjKtfHxFw50oVutizwemqvk3I7IH2NJEFZAAuT6LAFiHSCWADGOXgfI/XHce4UlQAxjQQWIuf02ApJ4H18M7qrprXLDw/PUZTBZ78ZPLdu2614aRalO4GAKnxDHwanXO196oWn/3onZuu3hDcPoJuHR7CH5qlT8yTPrEq2IuutAtwOpCJtB+plbeMfU3lPhMREewOvnnCtNZAX4UVPiw8YpY0kTIH4ezcp0nsk7QOVhdXr7PF+loM6pe65eH72LYrktG2QKtUTnaJxeC1pVkbcJnLgEXiIJ6CQQKPL9ZZQ0MQzDMBZIL73bkkrwNkXLIKl4f1pOQlGBEkhvt15SXvVBhzwKWgG+Gcd9X27MOb0J7J04ypILM8mQsLo9FPkT4C2WBMESIJYAMdbv7TgmyO/X6yf9ITwZW3DAMBa936axhtrUU+DhmWbVy5flFBuOlKdIqxjNlA6+Zvv3aUnSqZhLSeSxycmxB+20G4bB8nlInpvFi7N1rvTN798ECo+Lck9D8m98D7NVh8QStMaRSIAcESN1hb14/ZqI1Bfzpd7p7Wk0+PCMPmZLTwtd0wNQI+vqUSog1wh6WrYgKhqA2g1ERZrveU1SQJ2K+0FS5+aGCVHLABnmLWIYhm20O0oUZBtuaIypTsNw/ErgXJBsfm4Yeip6UosN+Hyb5TpoNFONIF9GeDiTvEQ8D8Zx7fFVcDwbSRDkTxAutgQIlgCxBIixHm9G1WcCF1waRYf/0Y6GYXCEC1CylVPDU+TKeTxFOjBJX7ZJ+3FRHszWkNph/KTTGI/t6Q1jzXpIbq429qSTlVKZa0X9aQ1lGi0XeEhS4Cepc2WNdRyIUL1JnXumJOyxBK1xVCWw5sF3MNF1ahoWLNHi/weZwbfkPEyKPC2K5Dl0DWiczmkHC8Ohs71LNgGaa0E7k5msLEBfk6eIMtdTRHPHrfm7D6N8N1ssBQhP5CRS8j+xyEPGrQEpM8MwbLFIBwZwc+bEnp4N21TT8sz7JPU+vignudAY24UzgK3zzMfNcgnNEoeHcu2Xt+K4b2r+TSP/JEzsp1gmYSWPyY2Ae9j32pK4Pxc42zpBsASIJUCM9ZcA+Wcn7qe7lB82DGNJJavbeopIQ1F8jgSM79LHpJsEhM7nz9oifpLzgIU2HiOLlTNXVr/Pq2GsFUkr34GHpEM4BxhsIcncrtDaZVqCzwPfVvGfRaSWRrXdzKjLmLeHccQpodzTrtpSRTc2eU50Q9riMWXhXSQCaKbJeerMhC47Up+8BIQTkbs3qFRvk1QmkmTsEboPwq9Mw0Pa6npqs/ZnX99x303Tel8+2KYan6kqDU8R0T6Qf9lUraItgm1T52gQ4cLc8+cqvD316ewFnchkqVS9UQP2AKUWAbeiBZRYUsQwjBVoPt7KYLNwfMoS0sdNBY7VszlN6zcomSn5zEduEOHYFnNlK113oamYQNHdojLc0IfW25wL7wUtARpFlYOZTnzL+WOVLEAbc1Fc/UcJJ4Yt7WEYxjrEA3tKpcpYvT5qR8MwjsyeuyDgP7E/jcjtbTc9UqlEfz4rjtLaBLidv1sna1LponAhtz2fEz85J/XJofzaUEgPurA65TEyJ24iqaslyeg/NMVX6KKQ5UidM8OwPS1zkh7alMBNJGV7qmnDQ9ITqsiJSEv/JGn6XC1KfNDwlNztJP1sGLpv12rjzzeNA2r+HsZRuik29bdYXwuU08xz4hoaGuOdzEECoipcIHDWEZy8mj0tIlReUOHzCC8IJKUo/doEE3vXueRK5inilJ5Dm8I0eB+wCcSr+CHBXQ4MddDO1sECTCeyThFR5PZMcsXN9IiYx4hhGKwhSYTpETMvSZjOdGhI3wLnv+ZxNlHVu7IqPgdEDQ3VY78PUdBC0kDWwIYxm4c2DoRh9P8i5gWCdYBYB4ixzu5DrXn0qrQ+/lU7HIax4vfdZdhYgd4kqBw6L/MUWUy85Aj4i8zyGGFOAkNlWIUvIAzn9/Xz+cCaJ4lhHF16evovSLyejUiEcp6g72zhIUkLefz5iBv7U/YB34rj/r+BgxMz8vyWsDRWdqXr4m8w1dc0NMy1zffM0dDs8DdJT5MO+nz6momqfnXmhuzI5HW93aBDYThwhTo/ONfUaNbx1iW6nubxGJliuM7cKhOxChDDMBYwDs3T0r+5rzE35Cn52QljdB5PjsUkN8g8O+oFG871lNBvFUAuhWHfuxH332gtE2ZYAsQSIMZavAcF9EWf8q40rd1P6+IkwzBYJQFJ1ddOzaXz7L+7lR1faQPYHE+SArKCnqGnZ3xK2uEUDo53OA6KdZQY62D/qzMek5sr9IwcF6bB+4GNKnL+EiVc8zHbusIe0J0iUitF6V3rbH9qrNIN2XIkSrrYFE+3YHWcABF1V6H+YiAGjhWRjR14WuRbsp4ESgh7pjwsRIJ4cvLQjwpauHSNTYpCawMkBSiXB16Vin/l1L+z430RUBGRrS3aa7uVsprPYwQgEOE+EXfr1GvLZT2U83hhHlkXW9QYxtpLysvC551N/ZVKtHnu501JBLrrCjseRasgP1VgcOk7THK0CHTqmCoH83NVs2dHG8mBVuOdrknJTkiC8sA7HHwOdEsHa4bm1moLNlsCxBIgBqtY+sqh/I84Dv8LHDpsa1rDWNX77jnr1nJ54NRU/MlN+++LpxQVCjxFOtHkX6h8FkucJHCdLTb0UVF5ocMEbyTibxQJn8j7mMyW/erI02QhMl3dHAMbq40j4lHU27txq/dJZdpjUrQX5HW5/atfgP+QzvUJ1jH18izo50R4II5rjxVIXNm1b6y5YNNSva/rDfTAwMDGKOJYERd7H1/c4gaHGfkRKUhsANRVdV/Wi/p8Ch8Xx3Aa+aeaPCtci0FgXZi9DQwMbKzX3aBqfIaq+yCtPUT8PMbtXRu25QKEjRY9cfeq+NuaXpSkUe27wOF5Ps+SIoaxejw2up0vBoNK9Zw2HRmFJpU5+kRkyzwLwE7mq6BgQ7dbVF5sGgubE7wK0MKzozlpvF68knJ/76b+sDLx31A+ks3tQYfVSQaWALEEiLE27j8+mERjN9r9ZxhrZg3cSms/23/LhhkPc3+1KhflfFZLBSbFvktfgCPpu6FLVJybN3Y/AIy3eNoJHEyhpadJfs3YxrN0KX6rWqLEWKI4XfN9PhRUqjtQrYq6D4KeAQwWFIjLInyE3EyXlj4qyJ0iwa1RNLKv8diceKtdy8b6ksA6Ar9DZ1eGzmrxOk6VEk7eJrBtnvc2fbfWAFXkywjfRLVScvLoOtSslNY6gLM8RDo53kutT5qATtLcMqt6szr3NGggSH0dSsQYxponDKtnqeOCTFNY8nKK4v2piFxLW88qKTO3i6PbzUfbOcurPuiQxxrayKK0bekvlPgzmb+m014u971V1V2C8N7cRl/abWQV9uL1ayJSV/HHCPIOkCG7iywBYgkQYxXffx9Ootqn7P4zjHXpK1KGTbk17GSlVOZaUf9qkOQoeIqwAkzNO4gjtfQ0aVo3zvUsLfIzceqeq9dH7yrw2zOMI70fTsT7V8/sf6WvQMVGlkbCTh8CXoxd8gWiaB8NJR5MjtOwBMjKoFQu97/dCyegvDEz+RGQaufJkDmalSUV9/0Zj4rh5sl0PZv7lMrlgcs8/pUIaaZhel5jYSCVNgHH5dIxnTIJfi5bxAgwHAfpF5jcMAxJNjFU0gIPmCPROmwYa2me0M4/qxOPDSnYpKiAeI++xolcsIjNlCzMx0gnmKm4a2EC2UjKiOfBOK49bpfOojVsA9jcE4ajP6fi/pvM7/mRr246gPj/FEfjNwNJpTL0E2ma3iGOM+0QWwLEEiCG3X+GYbA2PUVae7AqFZBrBT0VpJTbny+ka1bXa5wpX2DTwatbeJwWMTy5gKSKxSXWjhdlk/Tvpp7GnrmcBpXD5zovV2bPeY++dgH74W68PRJUR0BvUueeKQl71mFBuGEJkFXxt8jclq3erUHFna6eTQF8ROH4ho6mnDCPHl6RZNYIym6glmlO7gENmiRLpCDIpmtcy3SW1npDwzR9JUgdz8UFkjOu6fi30mxfqGlZUVtqHfQfUKkxJVMjPDHlATPvH92dhqg7AhUvtpgxFjvGy1JIFA4ODh4bRWxo/z0L9tjo9jfJPGOKtBsjMklE33TzT+L1Rg14Ykp2qYUnR7fye3YfFwSIAarV6vFx7N+gGvwSwg4ayY9WAePc3KJjqjwnuD+K49GbmJHBDEul6i+J4w+zLiCTyFpYAFZUuD6Jxj5jAVhLgBiWADEMY8XK4lBcOT50jnfJMXjeLPDuzNuzkr23awmqLnzYVkvcajn2+c0ep622N7c5F97Xys+kmTaSuYuR61K7v5b1mpeeng3bVNNyuz3ztIfHlNIberKInNpmPyyLVNbRqXWFqh5A3Nc19TvTtLYbGCnwR7b9q2EJkBW8KPC5AedE1TT0Pu1B5IMopyu6LTegFJl6F5qoZpqTYzT0TG7Fcb/zpZfjeOS7Ba9fq8EvmX8BNtd0ODv+16GcyVRVdfsAqF+CaofOA54L0xBVQAJ1z9broz9c4PF0lgAxjmAFSgfXUO/WoOLOaBcwzkwaL8oFm1vRicfGYiSotIt7qouEqPhM47Te4YbCvIYWLPXQuzUoyw5R90vAG0Q4vk11os6SQUS/l2nS/kUUjRwAJvPzeBhWz1KRLwrssATIogKwNyRR7ZMWgLUEiGEJEMMwVrzReot19qb+sDp+Mol8QJULBV7TeTeIvoTKY2Tm7E2xE1XR4wQ5e5nGweX2vdVl2Ie7Dv1MXgIOdVqpn8Wf7mvniddBwdZSFXKuBfzipamGzvYuOa7FfeTVszmAGxQ2z/N9G0Tk2A4SHouJ6ea9QURVn3Ei3/FOPl2tuKdGRkYOFZia257WsATIKpPUyLGtF1KZailT0UFBrgCGOpzkpCmYlijyNOjNIlILouRrk0z+yK6tVoPktl6IgtYSOIuSvFkSLf8uNUQbki0qD6vT27s7WOZZYhxxhsJw4HJ1vo0ngniUcwW9sv2GSHraGI93c1/OJyMo3QaucxKGkvlxkElWLUQSTyypsZzX4+BlKv7tjetNerMNXSf6tYl6vTkppb/N5OSPmdGkbd7Maalc/Q+C/LEFnxc2nyrswXN9kow9aAFYS4AYlgAxDGPVx0XKYdi3Hdw14niLKme1WWs3Au/KA0nsr4bqWEOiZ8rbriHXE4Yjp4G7pr0nX0dDn4B4RU8Skcu62GusVm+TbmNzddB620RGoWSvxSNYiITc/Ge4AnKNoKfRuijQZT4dS+GLu1QX5nOCft0Lf51Gxz0Ez06at4dhCRDWTUDwCnV+cB4Pi04GoykPin8GAu/09jQafHi2AW7Jw4FxM7+la9Pj7PycWzy5zGtyvJzHVpbGs0Tm+01tTJUNY9oU8dRiPw1Q8UOCu7xFwnc5F/wdJEfbdXjoeMH7Chb4DaPCkshjplm64tYd2fnbXAUvYTh+hYq+Q3CXdXA95uWuJlF5CMdfl6L0rnk2bA7wpUr1Q6LyqWWQemAdVMU51H8qjsc/nKsGs7nHEiAGlgAxDGP1r82CoHpJEMgfK2xv0Q3S+LdyfxzLu2D0pSMRp+ild1tSCd6maLnLP8ujbBLlfYhuaj9mzhs/WA+dw93GI9bKFCsgqsIFAmet8bVEk8eH3CLid9Xr43dTXEBmGJYAWcPtotOb+RYeFiUROalA6klaDC6Sa2n8oSDP5r7HiXDQB/KJwLuDoG4ejwm3BrXkpcPH5ixWyuWBV6XiTy5YjKR4LirwHCmiLCLbFnAf+GU41tJtIETRR0XlBcvOGxQZpwnnAINLoVW6TFVPLYPPBS3gmSG2PKHib0Qk6rLF23Xxu+xeWj5/Lg8wNDS0oRb5VzuvN6iyCeF0Gh4f2oGXi1PVQwJPpfDp0AXfiaLDz3TQPTSVAPmwqHzCEiAsMAGin43j2geb10yGJUAMS4AYhrH612lBMHiJc+nvKpwmIhuKkyA6qvBbSb328awrI13mONNixrpyqTTwUxr4apvXtIsfLCReoEcoNrfUcl22Ll78vCorMAbbzuPjUeDlJpkrW9sblgBZZ5N/gYdF/fjU+eNdqjeoshlwuQCj76C62RXH+XQvjYBdkcdEO08J18HkpmvompTOJ6e5niNFFSGp85tz59N3UhmjohsF2dHh35IucBEjHR4fC5wYi13EydLI2TFf4JkOPDjmNQEMgvL4+PgLB7pcuC/kNxvLM6ceEwTVsyVw16D+0swPxjUVE7Q6f1ML9wOo/8+lUs/XJyZeOpALIs8XjHeAL5f7r1T4FHCCrYO6nZ/0sMLvJPXan1jw1RIghiVADMNYk+u2oLf32FckyeRbEfdfgS3ZnjZoKoj4ShzXPgAcyJ5LlznOJMvrHVIUPxBNxW92Xq/3qv+ywIR6qQPowvL5PprH6JGJjS5XEmuhn92Nx4ftiw27ye3YNA9MDcmOhsSMfzcql4jwViBchN59K4+JIk8JVxL5nkm6zGvw1iFb+mb0/9uuZTrUNF2yFkpdAnM2w5Cj3crdnQfHFMOTNIwVl/HeN44gYbnc91ZVdwnouxEZYkbHWTtcj4wo/i5R+Woc125rkj/sRle5FIbVTyHyAQtAd9kyPyN58aLNRZYAMSwBYhjGmpYqDcKw71oV93sy06Wbn/sThVvCevqfJpjYv8LXBbK4vfcp5VL5wPWCfMzmbmMVLiDM48MwpmVSjC4nwYNT1cpjSZ1P9NL7/zY0KSmhHCfK+zONSc0MjqQLuRUpNEUSLhGVS5hZbTwehv1NAcW8J0TiGp4QB8cXqL+/VozEOqDQg6UlccxuYDfLYqIlXrw/FZFraW0aF2TmwMtxrCwhuvbGLV3a8z0rQTtjhojcjvDwbHO9Djw4YrLCsaNx7xvL5+0B5Ew1QaseeZsIJxZcdtK+i04nFLld1H01icfuAkYWcS1I46qTup2uBTEOPRGM2obJMAzDMNb2XiKN4/FbyuW+F1TdJQjvA/pz66lQ4N1xGBxXkuqupF77AjC2QoOqurj17TMR0j+e+5RWRWRjXv2fiXM/nM9wvEUkoI3HKW06nDs21V7O/ZWs8djRcvx985nYM1tGeI4vcTumPT7cLI+Pmu2pDSwBYizYN2SCib1E/BkzGpP3qtM+VCuich3odiAVYTNIPwtvkdTcDzgL4azmcViRi8JwdDj7jZFI340i4Z6GjIz4KBrZ16SP71rIjFiF/CLfkwV8F9KlMxhUqre3uDdTSTkTx3Wo9nT4eX2ZzAxL2LJriZKVuUjrSrdVVQ8AnSYAiyT6pjcAaZQ+SaP6q2D11bUHhy3IVp/E1VR1crlSGdrmfdKLkw+ocqHAa0CmXjyf78Z0q7Yqw8C3VfSzad3vhrH9ufcu8vrQ0hofxnSRY3fzesAp7Amc/yQMj9v9aRiGYRjrgqReH/8K8EAYVg8hfBSkmlsHBCK8A+TCUrl/Q1KvfiwrFl1LkjoKVFA2tSkoVdBRlP+RxuMfo5EI6ppyeeBvU9GTu+jS9+rZHKA3KB1Jei9FvGCRUmNHjUV27eiYKgeXsrNa4VYc9+Xk5Ype6kDqqAyh8h+d6JtaXB86fU00PD7uVq8703Qs7/Ehts82sASIsYjAQrPZeZwko383FfHr6zvuu0kS9YuIV/VXq3IRU/qYwhk02knnC0JL64l29usEOTv/Kq9yDprUAEFkslSq3qgBe4BSGvmigKVrCi6pBZpZrNxFtxxOo9oDbZ5/uFIZ+ioyb1WJgKSq8Zmqcl2bjpLG+W59PS6XQZjRfoEmC6wiaeGpMYfIid4oEj7R7LPR8oKSoB5PHtq7AK+PdgtiW4CxapPFU6bmChCG1deocmGq6QeAXlG2SaNKKa8/6zrQqHUCj4v43whDeaRWG39+ifRppzcLKjwt6AjIwBqdu3SRsnezzpfA4170l6No/B67DQzDMAxjXcU9HDAWx/1/WC7XYkUvB3lttreULLbRL+ivBuFYKDpwZ5KM7s6KLld7x6gAWioN/JSovi9bQRX5kgaKfjVpJD9qWUC7678783z9Ybe/sdyz4ZuqaXlhf19H8YL5PFKPE+TsFV4kuR/lyQVek4GI3Oecu3Upr+koqhyE4fmSZUEYDr3Wk1zoRF9bcIjzBueg/j5KwW9Vy+7pkZFR8/gwDKvkPlreIZRhY2WqmDIMx68Ezm1IJIGqlnHyNoFtCwx8yDxyV4BO0CjIFkW+nEnWBI2WSx6M49rjdvrWkr/J1Gdt7mt4mNDC22Tu9djG38R79DVO5AI7TUfSM2Ped83jqdFMS4m8xVyftqhaZ/TSuy2pBJepahXkGoHtTa3ZXfnMKDwHeremfClNa7uarjddOpmugY1hWf8auPBIeeGsQkYUvUNUDnuvt+fOh2EeIIZ5gBiGsT4J6el5RSkJfkecXEujmFZnyYwq+zz6xTCQeycnxx5a5UkQATSoVN/ilC/nul+a140HUP3VOK7dssixWY5SMec88QIW6ZF61KdQBzwcx323T8U+uv+M4TqzlVSORNynFFYGrsXr7yC8ol3xusIeUXYR65/H1B4zjw/DsATISqdULg9c5sWflAWhFWWTKO/LPEX8PB4Q3ZjAzpm4veqDDvaouGeSOjc1dL6H83r/YoFOI6v0PksdF2QeDzaGLN1wPL9nhmEc2bVBbqzf1gsTpSxh+k7gjQoniMhlQLiIjoxpjVqZpVG7vPNtWOl/r3r9QxHZsEK7OKRLzWAFAlQeVqe3L8Bjatb7xbvDcTx6B7M9VwxLgBiWADEMY53TQ8+JaaV0Kcq7gEua1nVT8j57VPSX02jDN2FvtJoVJoJy39sdcluWAJG5nQX+N+N4/OYZ5V/DWKiP4rZeSCWojJznvPwfKnJZU4F0JwlHi9cZhiVAVqyESDuZmHKpNPBTGvgqszwgpNkDYoOIHEtnUkVaMDDmpUlGUHYDNRH/pyLhk+WyPzw6OvpiC3kntcTImrnPxeSvWO06pYqZiRuL8LVquscrlcrQCd4nvYhch7IdSJok83wbuca2gTwgVbhJU70pTWt5jdplb9Pu7T32hCSJ/gqRf7VE6yFdYplEVdW9zK42a6cZrIAE6p7NJBRo4TF1DsUVZEXvlyaPF8MSIAaWADEMw9aNgBJWzwqRP0KmkyA+t25wqvqME3lEVX8/jldnVXq1Wj0+qvN/i8jbmzwQAa2r56NJUrtxDSQ/BDNBP5L75qZY2qb+sDp+MrFch3KGottE5NSC75YpTxKvfFzU5SXnTOrKMDAPkNU08DZvhOMkGf1W03Sa94AQkNT7+CJUrppzboVzgMEW35UyN6itwBDChZmHyA40iSYid19Qqd4G6pwPn4/jkUebkidigdV15XOyUH8TY/lN5OzeMxZiYj517XiAcnng1FT8Nkk5PdX0g0CvwAnIrM6BpCl53o23hCg8JvCNpJ7+fs6P6kgt3GVi4qUDLqx+JkD/JUh5kd8rCwhkt/PscSIc1JL7RODdwax1n040g9P2CdT5PKaa36+2kTIMwzAMo9AnLK49Tlj9FUF+w6u+TkROySdBROQUhVNUZGNQ7vtEWtfd2ZpvtSRwXRy7N4C+oWBtJYJ8H9EHc2titXiB/X1d7L8U6CmVBl6rMn651vkFEbYiVKTxMt+s4KLod0XlkIg8kMa9/yPbDzgrWDIM6wBZq+dIixNZm3pmPzRZKZW5VtSfOuPr0NbDQQsmbpkJdOkkECjyfdCdCJF4NxLHo3diEhmGYRirnaEwHLhCnR8UL1ciem6WZO9t0Xa9oA2zCI+r5x7wO+N4fA9HxyRTAC2XB05T1Q+A9qvI2wROXODnJap6lyDPNZIV83n3dOLZU/JwYHwZvKLENsHWAWJgHSCGYRhLNrdtqwSVQ+cFKn+icGazHFYWS4gU+auwnv7mRCMJstITBgKbqmE4cSvCO5rXSIrfoyK/nEa1+yzwbCyQIKwMvCfn8RG26PiYuo92xep/lXjgGTgYH6U9lGFYAsRglXo4AEiKcp6gV2bB75z7OwAAXLdJREFUrmoHZuvMmKT6O0XdCBCBvzmOh34AB5Im2Q7TIjQMw1gxfh6UYUspDEdOBXctUFbxxwjucmCodbs1HnQCiFD9oqp7GvRScfLOFqaQ+ccihe9rqh9N09o9K2zB3uTB1Z23kSD1UpR+bYKJvXa5GZYAMbAEiGEY69DDIAiqb5FAPiZwemOtOWdtGKtyN6K7knrtfwKjK1QWK/s9AxvDsn4JeHPub2nM3aqfiePah0x2yOjO44NyGPZtb5jGa7XJ46No71VX2AO6M6lzD9Qet6SHYZgEllGczCoM4sRx7XHg8ZlHeu8IKu5/qmdTgH5E4XgRjgfpZ7YyRr61ToBBwV0zrUSIXBiGoy+L9N8v4m5VVVcqVcbGx184wFyZr1VrhGYYhrGKpK2mPTp6eo45SdWXVP3VqqNvVpFjBM5pvNhNvTYvbSWZGcWLwGGQp1T8jaRuNAiC/d75kwOVk7Wtz4eOqpfnQD8nwgNJWtuT2yyuhAW8A9J6ffSOxXxIvDDvHsU6MQzDMAzDYPXLYqVp7b7QVd+jypvEyW8AW5pkfEoivAPkwlK5f0MgwU1RNLIfiFZYwaQ0qmP8e4Bzss7efFwlAl60Ik+jw9icTnt8JPIBVS4UeA3ITBhtznt1TL08O7V/avLQMQwDS4DYwqO1Ruc8Hg4T+9OI/YCUe4751kyAjIuBuqKvbGHCRL76TJBzEFD09d6n/xYI6vHknqDcdyMitTSq7Wa2XJYrCIDZAsIwDGNxRuZ+Zizt3RpU3Onq2ZSm8UyCW6Q/py87Ne4GuSB+HfQRVCYEvc250gPOxRMTExP7of/V4vSPRXmDCscVdJpMmZyPKfJHQbBiN7j53+GOgnePzXeGYRiGYayZWEQWqH0irPSNoe73mJsE8UC/oL+Spum7SqXqVIB3zwpZH02vU0U5BZGhZnN30O/FLvmCreOMeQrRPFAulQZ2ZB4fV4twgkAlX6CWu+Zdtv/aLcidLghujaKRfdn+yTqNDANLgBgLD7AUtdjp5OTLz2b//Qew8ePQmwSVQ+eJ50oVHRTkCmYkUoqCXoD0izDVPXKSIBeiRC7su1md+z5oSTwPZp0ohmEYxtKN89rT039BovpakDrKeaL6zkaRkVSl2M9jyph8L16/JkICvBAH6eeZHHoBDkZA0kvvCaVS/y+J42eBt7QoQpKGJwZ3IXpPUq99IVm5EgfWjWgYBiZhbBiGsaQG6Wkcjd8UhtW6il4myNtBhmavBWVAHGeC/IHC94OgmpdIPdrrRQ3D6lnItJ/JrMp8Qe4g2r4P/sHOuNHqHvA9Pf3nx6leLOh7ReQEZnt8NJuhO6/6UCByb12SLxJF+5huMJ9OphiGYQtog6NnknsekIBUaOh8tkuuzMKrPuhgj4p7JqlzE/RE4BQO1ro0gDcMw1jPnh4l2NQDJR+GI6eBu0aFSwTOajN2TnVc17LnIlRuEfG76vXxu5sW3AoMlMrV96FyiQg/nVvAFxmj70L5UhAnd08y+Zzp1BqGeYAYLKEHCP8+icb+1DxADMNYJfSHYfWjCB8GGcwKcLVpPSsiPK6eXcT+ppjx7x3FwhkH+FKl/9+L8ulc98eULOw/Bi64NIoOP2On1mjn8ZHtx7YXJEe0yONDlF1NnVCGYWAdIMbRk1U5HMejNwOUywO7UvGvBKnj9WKBqxu6nnJSU4urFi1gnMgFwAWCHg5DroAJL8JBHwx8IvDu+SgqPw/DYwULErWkiGEY613aqrd341bvk4r38UUwcRXgVWSTwA6Z8W3Kf8Z0oFVVDwl8P4VPiuMg4NP62HcbPh+4bG3ggZ5KZegViU/eI8iv0Ojs80VJblWeBx5J0N8grj0ez/iIWIDOMAxjiYIr6nVzb+/GrRMTLw6bHIZhGKtg7BqL49rHSz399+N5r8B7aEiuar7bQ5WzEM4ilO2l0sBvV8vu6ZGRkUNHSfqngrKx6DsFhkVcbKfW9mfM4/EhM/EwaZKPn+ORmPP4MKkrw7AOEGMFG+sCm/orlfrxqfPHu1Q/osomhNOBrQVeIdJGd11V9TkgUbgVx33ZAok08k/CxP4CDxPzDzEMY72Mt0NBpboD1aqo+yDoGcCgiGwsGGvzvh4oultUhhtjrr+tVOr5+sTESweaEhQu9xlBGA68V/G/IsKJIANNi/gprdr9KLtF0s+Goft2rVYbzgXrbEw2DOsAMZYQVX1R4IfeB7+Vpod32RExDGP1VMf3bg3Lwa8rvCmrjC/a06eq+mPE3Z3U0/8M4weOYFBYAC2VBl8v4v8S4ZWzv1PHU+UXfVz7SyvwWffrOWZ7fPjLBa7OpK4qtPbnzTwS+VggK9oj0TAsAWIYLa6d3EC9uQpewnD8ncB5IJFHz846PubzJ8l/Zh00mnpckS8jfMsp++r1sa8CiZ0CwzDWAw1PD7aL96cg8p7Gwlr6csHTlmOpwuOi7AK/M46HnobEwfBkbgydU8XU09N/fuK5SOAXgRMK2razcZn9ov4343jgr+DgZK7rxDAMS4AYy3tB7UlT/eU0re0yqUHDMFZRIqQchn2nI+5jwFua5IBm+Ygo3Cbq7orj4KtwaOTI/MxN/UE4/utO+DWQcLaahY564WfSqHavjbtGT0//eXGqb3HIexFaeXzkiVW5e8ojkZXtkWgYlgAxjIUQhtWz1Mn5KBtFeT+ix2W+IaUOkyH5FxWY9G4YBi9wcLyVubudBcMwVo+nx+YKPSPHhWnwfmCjipyf8/TQpg6LXAC14emRJYy/CVouiXxvcnLswTYb0elFd0j1NYTyb5s0a4vG1FGU/1ngGWIYhiVAjOWnce2ofiaOax8yyQzDMFZdIiSsnhkif9LwFJVKQffzFGMKH0vq7pNw+DCNAp5lCxhXKoM/mfr06yJyyhwPJtiZ1P2vwfiPbbxdl/4eQO8JYeiuA45t2p9R5G2T/eckKg8Bfx3EydfNI9EwMA8QY81q1hPHtceBx4FyqdR/nzp6ReUq1F+cBc6OzUm4aO7/5lQmC2zDyS9m/66HPriYcHQciET6bhQJ94AGUVQ5mPMQMckswzBWtLzVbE+P2lX4oBeR1wHlnKdHs/yUgI6p8rzA8yl8XBzDaZQ+NSUZmLT2T5o2ehwaGtpQq/vTSNLfReSSAs3aqe+LVHW/wE1xXPsYMJbXb7ZTaxiGwRFMgoh13RmGsTrXwnHtCVcZ/PexT1/nhF8XeE2LIHK/wEfCMH0z9H0xjsdvytbEy5H4ldTpJvx0JX/zr/5WkySXsT4K1MqVytA21bTi0Y+C/FvAtff4QDLPxadS+HTo3Hei6PAz5pFoGFgCxFhTaJvKxzhJxh4mgYGBgd1R5I4VcbH38cWoXIVoLzQCfi18Q5p15UOQfz31rFc5B03GABeE47fiqvc7X3o5jke+y2wzdunitxuGYSx14sPn9ZCDsuyIk+g60DNBBkXYOOUt3pT4mDEyR78rKi+LyP3OuVtFXBJPvvxcgb+SNo2bTb+jb0ttwv9X1L8Vca9o8TpReEyEByTkc3Gt5zmojdkC3jAM46ittQPQ0A6FYRirNFYgUXT4GeCZMOh70Tt3A8IOGh6i2lRgswGRN4G8qlSq9ovwjZxp9FIU4WSfcXLFpS9+WEVOLHj+R07ZjymorJuOXYAwrL5GlQtTTT+Aam/m8eFyiQ8p8Ph4GXhU0J2lUs/X44mXDkQziRG1vZNhmASWsX7lXmB+yZeWC6cW8izQ8BBJFPkB6M0IkXg3EsejdwIjdhoMw+Coenroa0FilHMF/RmQ3vk8PRT2iupdIDXwNzc8PQ4kjfGua+m/oTAcvEzFv13gKhpm6XNat0V4XD33NDxExvfkvsu6PgzDJLCMo8cBVH8tjms7LRltGMYqlxcqweZKGI7+HOJ+D9jSYv8vQF1hD+jOpM49UHt8CdakAmhQ6ftp8fIZEfnJ3PdNSQ5+Lo5r1zPjoWdrYNa0hPt2FS4BuSaTBS538LYpj49dScXdwujoSJPnol0zhoF1gBis+w6RBA4mTFKL4beglekvAlItCPAVJfLKIGWBs0HObixhdKRU7nurqBsBotmmwE6bPETEOkQMw1iiRG8ZtpTCcOQ0cNcknksEySV4pSDhoRNTOseZp8e3nLKvHtfumvHcGO+mCy+rGN7UG4bjV6ro28FfJjDUwhckVnjKJ/rRNK3dU7Bwt/HQMAyDo5X88P8pjsdvZXbHtGEYxmqMCyRwMIljbgrDAUD/C8IWGqbS2lRpXxbYAXJOWOYetO+jcTz+FI0CnYUEmac7TZx3VyD8ZEGBgjaKj4gt4bymi3JDKpUTyhq+N1W92CHnt/b1KPb4KE15fNQtjmQY1gFiGF3q4gODQaV6DuDUszmAGxSOF+F4kP4miRfpoGNEchIyj4rKcPZYJOL/VCR8slz2h0dHR1+kWC+/3SRmE5thmO9RfvyqVCpDW1XTd6vyZhU9RpBzmPH0mBq3guyxSFX3ITKB1xs1YA9QSiP/5JSnR0GXiHZq3lcJ+n66QGKgubJOgP3q9fcziYE9XX6fYRjWAWKwLIFCAfalKv/Zx6M3M1NZahiGsVa6QXpKpYGzVfw7nPCRbL9fpP6g2f/bI/CNuJ7+fm6t3E0iZGrtPlgqVz8pyDU5KSPNqpQeF/XvjePx3VbJv2b2a9NS6z09x5yk6kuq/ipFLwfZQaPjw7eQYncAsz0+gu9kkm5SINtuGAbWAWIY7ZIHU5PH4TSqPTD1WLnnmL/LJqirmwKK0sI3hAJjKgAR5Oz8M15lB5pEE5G7L6hUb8tvOJsCkBQkRCwZYhjrO+kxrelaLg+cmorfJilnpGl6nTg9CZEBabw0YcYAT7IF9A8E2YvwlMCfOgnGo2RkPwlR03ijXSY+BPCVyuApsU9fl4rkTSabTfumNWtRf1OSTJtMio1phmEYKyMBovDZLPmRWiDOMIw1mOSNkmT0f8GmPUF5YkLRd4CcDfQUFTxm69ozS+WgH9f/xWRy7DHgUBfjowAahgNXgF5RUJhZF+H+uP7KJ+BJO0urv8g226/1bg0q7nT1bErT+CNNBbZa4EOj5vFhGNYBYhhHq0UxLylzLWhVRd4mcGKHi6uWOvtAAjo5e8MpX0Z4GDQAEM+DcVx73E6NYRhMe2oMXKHOD4qXKxA9N5Pt6ysYewBGFL1DVA57p7en0eDDECjsnWgxRy+kpV/DsLod5I8RPQ+k0iJ500qz1oJrhmEdIAYrIjCogFPhQ0k09hmTYTEMYx10g4T09Gwp+eC/CPIeZjqmi/b2CehhlE/Gce1jwFiH3+UAX6pUPyQqn2o2t1bVfxK4Io5rT9hpWSv7tcHLVPw7pJHwmpJYp73MlXl8GAbWAWIYR803pA4H6nHMbmA3UCqXBy7z+FcipOLlylwAsrdIDqZNgLGUk9eaetE1KNdMvdyjD4Zh/2OgLtPvzzxFjv0+RAEMT7aRJhDrFDGMVVMcoHPnzU09UEnD8KVXg7sGKKvoEOqvEJUhBAXJf0YEmiryA9CbEeri3ctJPHYnMNJ4SW0pO8lma9gK5+d8RvK/KwWdVOSvwjj9zQkm9jdp1tr4ZBiGsbKWxFa8ZhjGetn7x0xOPpfQ959KZUHQn8uKeUoF3iAlkGMR/Q+lct+rROWuOK7dNk+3nABaLg+cql6vyD5plmQ2IhNOggk7Jau3aDYM+86c2a/5Y8Bf3vBAFFpIATddW+bxYRhYAsQwVlRLY1qvj94xPdOVB3alotsk5XQcH0R1qm22KiJbCqrqukrEOJELgAvyE6ciF4Xhy883Kkn6bnMuvC/rGNHG+imoT04e2svcBIy0mUBtMjWMI9MBWSSVB2zqr1SizVkyNfE+vggmroaJVEWObxgxgiA0Eh+Zq7nqfhpZDadwK477nQ9ejuOR7zZ9p1uCe15m9Gw3V8vl2n9Q1csVdjiRctNn+sbvYxj4top+Nq373UlD4s+ZZq1hGIZhGIaxctbr4weSeu9vBmX5fwS5QeCnmwLVebPyAUF+AeHNYdjXUyr13D0x8dKPs0RI0TpbU/EnOjhvllXoVODbc2OUjOy107DiO2ybPRhP8D7pxckHVLlwSgJYMvuOoutgduJDx1R5XuBgCp8KnftOFB1+Jp69d7P9kmFgCRDD4Ch1hkxLSdTroz8AfgB8s1IZugtRB5KqxttV5TqggmgfyL+kYXJFm6RIs3Zk4WvyniKqck7qk0P53yakB11Y/YQ4DgJOUldLktF/aHSztJzIpcUEbRjG4qQemxMemkugvioV/0oRqWs6/pbUc9XM83KMCJumkx6zGUHZDYw70RtFwj2gQRRVDsLwWDr3/tZFLqClycyvPwzHPqrw0ayd2zPTyj+1qHcCj4v43whDeaRWG3++wBDQMIyl35yLSc8ahmEYxkK8QSb2p3X2h2H1RyLyold9nYicwmyD9HwgfIsif5gk0b8LKoO/lUaHdzV56k1RyQomi1QiVAOeIqFuEkcrem/X7MF4eqrpB4FeUbbJjKF5q05/l3usDrpbkDudc7eJuCSefPm5aOZ15vFhGFgCxDBWQiKkKGlRj6KR/517/FnYfD84pefQpjAN3gdsyipGvKInichlHdwbWqClrzPZEDkWOLbpPf8iQF+DZrrfosOlcv8XEIazSgPn1D1Xr4/eRWv5LMMwFi+hN+vxnp7+CxLV14B4UlDVdzo4D9VEGh0UlaJ8pCo/QvXrIlIHDVTc00nMzdATwfB4i8X2UlYMTcv2lct9l6m6tyC8H6gWSAOIwnOgd/uUL6Xp+K56vWW7uGEYyzMG2X1mGIZhGAszSCeOa3tg2/uDyqHznPInCme2UFdQEdkA/CvBf6xUrv65KLsa759Z0FcqQyekml4H9M6Zq1W+GSA/Sq14YSWvq6Y9GNXrlQ7OzZJZvTk14nzyYo4CgMJevH5NhAR4IXbJF4iifUDcdF1Z4sMwMBN0w1gz9NK7LakEb1O0DJKK96chcm0WAFUa+qK9C9Tqlw5m82wCzgVU61MB1SmG61CgPNleSssw1sP8pXNfs7kPfO61TsNw7J3AuSBpY+GrbxaRM5jxxZgo+NxAkaenPDwA59Q9exQSlrkszMk9QeWF853ys4pcKnBSwSYwQXUE5BYRv6teH7+7aUFvGMbSjDcUFxpt6mmMQSoQpqXS2J+Ik180E3SDBZmg6/VJVPu0maAbhrHeTdKDoPoWCeRjAqfTqPLXNvth8aoPBSL31iX+ItHgC1DyYXj4JxW+LCI/YePtavH12FwFL2E4foWKvkNwlwFDne0LAbSWPRehtj8yDEuAGMb6ue4LWyhzDAaV6jlZR0gqKWfi5LrMU2SKDVnHB20+S7qV8co4jPJdZgKsgQj3ibhb84HQKYmdgs938wRrLElirEbJqlZdFGGlMnRCw3tHUtX4TFX3S0B2v2o5+5QzwG3KHotUdW+mDVxC3L0q/raCFnlxvvRCHI882kayrlVH2pImPoaGhjbUIn+68/ohr/r6nASA5l7ngFThJk31pjStPQq8bLq1htG1vFyr+6WcjTeu+P2SNjyD3FWzPkv0NJAT7RAbWALEMAxjUfKSYVjdrsqbxMmvA1tze3BXNIYCMejfo1ID8KJ9DtnBTAeIzuzB5cNxPLrTqv+P6l5QZzwZ68enzh/vUv2IKpsQTs/OubZIfs36PFU9JPD9FD6ZSZL7NKp9Fzjc4noxDMMSIIax5u8BaZMQyQc82gQ4OCO3CGv1WZ0kRQoCKzqmysF8S3BmsnwfEGSPJ7kJnfafZ4kRY8WakbdciIbh0NneJcflFrxJLkGZdWzJoIi8YlqwCv17kBpKSiPhkSUUg9sa1dlQqXDo8OHDL3Votrfc8jbN33NMUKmeLequQf2lIrIlFwTLJz5QeEzgG3E9/X0aBudY8sMwuiqO8LnxZod3ycbceNOqIKKZVgUShoElQAzDMJakOCgIw773IO49wNnAMcz2BmkllU2LAkZRdGdSr304t5e2tfORKzyZjptk668NeN4scDVQEpGTml7XqutnKuH1HVQmwP9lqdTztYmJlw40zZ/O5EoNwxIghmG0rEKgQOKiUUfSkNgZz0vsoMIFAmctwq9gvvu2DpqXxYpQvVmdexo0EKReitKvTTCx106nsQoplcsDl3nxJ4H4RoJDrhX0NBqJDAFRVQ1FpCd3M+0X1a9ApukapJ9n8rhhiIKZjx6OClqeZZH36HLQH4bVjyJ8GGQw51M0a0MnwuPquQf8zjge35PJ5Zlxo2GwIEnMy1S1One8gUbBQaEkZocSDIaBJUAMwzCWJglSYmBgqBT5d6NyiQhvBcIFzMuN7hHl03E8dr0VDx0dwrB6lgqXgFzTWH9JiYbMWcdrK6/6zUDknobk2THDcDDKqWqYB6JhWALEMIzlYJbJMioolZkJfapyQfoWoTM+372cqOpdgjzX6F4RBXUq7gdzPUYAhidb+BqYz4jR7bWo7V875dFR8mE4ciq4a2dMx6fer2UVuUxgW1OB9vjMRkWGVfg8wnBjs6Li1P3oKHh0LKHHR7PGrVwGMtSsaZz9b6TwfU31o2lau8eSHoax4PvtncAbFU4QkcvaBFAMA0uAGIZhsNIKGLbG5eC/CfpzIBUaRUPawX65oayg+kN1en0ajf+traePxPoLB5v6YLJSKvMeUX+Kh+1O5IJWfi4F+6AENELlhWw/+KJ4fSiOa4/boTYMwxIghnF0pbSmJHw2AYpqRdRdB3omMxWmZRHZ1iKgrEvgLwJzPUamfu5tzoX3NbwUUBAfRSP7mGu+Lh0GvG3huH5kq5qu9U39lUq0ee7rJck8Oq6j4dGRqugmQc5p4X2nqvosjW4NJ/B8Cp/INFydpG48SUb/vkU3h6zwa1PykjuZx8erndcbCjRum96nY+rlWdDPifBAHNf2LLMXiWGsqY13m/stP5514k1kGFgCxDAMYyWsp3u3BmXZIbgbBH66SS6p3d5ZUHbF8cA74cC4JUCWT2J0YGBgY73uBlXjM1TdB4Eqwo6cofl88lao6n4gQtx9Kv42SWUiScYeycUsnO2JDMNgRrrHMIwl2pzSjW9As5lyX99x303Tel/2cp86v1lSvUGVzVObXxU9TpCzOzBvlw5eAzCIcOGcP0blnNQnh3LCOpOlUvVGDXiCzGdEUldLktF/KEiKtEq2rDRJIWPhgbzmhEfuHPZuDSrujOwfKX78otRzdfF5ll4RTpj50Fk/IWqYFFIDnAjPa8l9MvDuIKgTCerx5KG9BclA1yZhqCtY79YDxwRB9ezahL8G9ZeqyBZk+u9p3gREoN8T5E4XBLdmCcrIWroNo+N5p5P7TSzRYRiGYRirKlksMLE/rbM/DKs/EpEXverrROSUDgyzs31sPbDDuSy+HgoMBUF1x0TENWhyEUhFZJZ3qm/huehyj+1H2e1EbxQJnyiX/eHR0dqLTftBNfkywzCscs0wVo1U0JY+SFxDIqichuHIaeCuASoN02bxHn1NQYvoYpMNBWODTtDoTiEnOfSFhuTQjKxWSeSxycmxB+30sn40Wh3Z9ScpyrmCvnPmWpNyk6RVEXFOom1qw/FCHKRfYHLDcOMeKPmsEqtbj55VcRjL5b63qrpLQN+NyBAtPD6YkrTzenNSSn+byckf57perErNMOanXC4PvFVV39LmfrP1sYF1gBiGYayFffbJlaDywvnO87NzJXULO0DuiePKv4EXR21tzRJLgrNdvD8F5D1t9juF8Qiv+qBDvgcaAg/Hcf/fwMGJgm5dO1+GYVgCxDBY0wFo0UZSBMTLlYiey4ycViuPEZ1Hk7Pr8ULhcVEezBI0CuCd3p5Ggw83qmlc02cP1ynuIllJY5SuwnG4y9+8rXe2OXgzjSRcUDl8rvNy5dSDWQLuTfOb0U0n0LQpgfaCQFKK0q9NMLF3fWnentwTVF443yk/q8ilAie1OY9Tx3MXwpeCKPn6JJM/shHQMLq99/qPC8t8CbiwQ01ww7AEiGEYxuqnFFYGrsXr7yC8IvP40qbAuQAPxHX3f8Dhl2ys7Xo/qzNKM5sr9IwcF6bB+4GNKnK+wFnz+Hrk12R10ESRp0F3irLLPD0Mw7AEiGGsX28RihZl5fLAq1LxJ89Uskx7jGynEYR2InICUG6z0e7ktxS9NpgrqaU/FOTZguRKIMJ9Iu7W2c+19Bw5Wrhl+tzlXFBLT8+Gbapped4f4dMeRK5DOTPX5VMYPFT0JBE5tem5pFlSUVUPAGMNZSuJ8NqJhJqbJ4mjq1+TeNpz4HTn9UNe9fXztORL43jyPPBIgv4GjcW/VTkZRvfjuC+Vq/9B4LdBBufRAjcMLAFiGIaxpvbTlVJp4LUq/nInfASkf67kko4o8idJvfePYHhsjXSbHxFfD8D19h67JUkm3wbu5xHtBXldLubg23Twu8z08TkgUbgVx/3Olw7F8cjupr2i+XoYhmEJEMOwpEhxYL2v77gtaVqvAloQ8JYmjxE6DNhrh9XubToLdFSVg7PfNSdgrkdh/FNAAnXP1uujP1ymczkYVKrnsPR+TF49mwO4QWFzB0GSdgmxIpLcIrRhQofuFpXh7N+RiL9RJNzTkLRqmdBaDQblS5n8OCYIqmdL4K5B/aUisiUXxJKme2ZK63Y/ym6R9LNh6L5dq9WGm15jGEYX92EYVj+DyAezuS84ir5ghmEJEMMwjKPSpbCpv1ye+Iiil4PsyPZAuW4ErXnlf4i6O5Nk9Hs5n731vv4u8vUg84A8XT2bsv3nq0Vkw1xvlgLJseliL33GiXzHO/lUoO5gFJWfzxJQHUqHG4Zh2AbMMOzeLlwo5CWPijxGZlXzl3HytjaaqYuRYWoxDs2STDoaY2AjcaPyTXV6xzJ8tRfvT0Xk2g48MlhYtbP0LWfQTpUfCfo1kBr4m+N46OmGX4dTODg+vyzWulm8zufx0eo63I/634zjgb+Cg5NtunMMw+g4AdL/KYQPZZt2Z4fGwBIghmEY61ASk5BK5YSyhu9NVS92Iuc3STLFKD/GyW/H0ehNuXW4+YJM72/6L/PCCShvzDwgBaTaQt6qaC84ougdonLYO39HGm39BjwTtZHWMgzDsASIYRjLSqlcHrjMiz8JxE95jbQJ7Td7kHQZeJfeZeiKWKwp/HrTip+jw6rwBOhOhAhwrtEdcxczHSFG06YoCKqXSMC7QN7awuOj+XinCrcifMsp++v1sa/mTM4Nw1jkvRlUqpeI51Mi8qpFrIXbzQd10Pp8CoVHaI4zLAFiGIZhzLM2CMPqdpA/RvQ8kEq+00Fhr6jeBVIj1j+PqT22ThIhzcmHMmwpZQWT14JW5zGVpzjxoREq31Cnd4h3h+N49A5gxC5FwzAsAWIYxpG+/6ULX5BC5niQdJ6IEEBF3dWov4hGYH25xqmyiGw7ShXASUEbsayAMT6vp+qAuqruRWQCr58T4YE4nl70N1dWrxW/jkV7fAwMDGys191QovGrA9zva8PwT5tbvZuOU6qqP0bc3Uk9/c8wfsAqnwxjOZKTW/rCcPQOhIsXmdiuq+q+XBBas0DJrTjuo5W8lvpeIfivAq81E3bDEiCGYRgrYw1fqQyeEvv0dU7k1wVeM7U+z8ZbyebwXVoKfqtadk+PjIwcIuddsQbW6i3krahUKkNbVdN3q/JmFT1GkHOYLZE9T1xBx1R5XuBgCp8KXfCdKDr8TIu9pO15DMNYFqz6zDDW94aa5TACzzwzFuybMTg4uDuKgg3LuL7zqfObJdUbVDvyyFiyY67oyQUm4hzlQJg2GdCJwmMiPCDK55wEE1Eysjfz8HAt3qvrXAd32uNjIuIaNLlIkB4VtuQ2Bq4ooJVtqO5nakNVHz20hjZThrHCutoCRXgKOJ/OfY/yxApPiPCgKJ9zLpjMPxlFlYM5zeoC3hWE5a9dApy+wO83DMMwDGNp90CSBeSfCYO+F71zNyDsALZm6/iGbKa4i0j86bWUu4OgujNNa48CLxeYc69WM3Od2heXywOnpuK3ScoZaZpeJ05PRqRfMsuOeQq78h6Rh0TkfufcrSIuiSdffi7K74HW917SMAzrADEMY52PLUdoAbSlr+FZcSRo+KwElcPnOi9XZn+mgKg4LlDlrBWyC3hclHvA74zj8T3MNi43zVu69viY73jvEWXXOmupN4yje8OG1TMV7hCRn+g+gaJjkvpfqKcTdzeNjx37Sy3w+w2sA8Q6QAzDMJZdxjaATb1hOH6lil4myNtBhpqK1RJUR0BuEfG76vXxu1kbkrVDYThwhTo/mJO0lkyeukjSqrCAL9tP7mrsJ4eehgOJ7SkNw8A6QAzDsO6So8WB8SP9jWnErhR2zdKkD6qXBIH8USaVdKT9PbIFvN6kzj1TEvZMTo49uLrP65Hy+Di5J6i8cL5TftYjl4pw0jy5P82ZKu7z6BfDQO6dnBx7qKn9246zYSwjzpUmUp9MthjXpM3YV1fkS3HKP2Qb+VYbeG3//UGU+tROhNH9vKOUrYDNMAxjWfevKQyPxTG3ALcHYfWjTvgVoD/3uhIiG4EbPO6dpXL1bk35UprWdq1gCduCTo1tvZDKVIGeig6CXiEqQ41XS6v5SGd3wes4EKFF+8lx21MahmEdIIZhGOt0DGz+Xh+UB94u6v9MRLYcIZkrr6oHEPd1Tf3ONK3tZsaAzmE6rC09PoaGhjbUIn+68/ohr/p6ETmlg1bwrNVbx7zycVF3Z5KM7mZGVswSH4Zx5OgJw4FfQPS/AVs6kCNsSF+ofiWOax8ADiymerGn55iT0zS+DZF/ZafC6KZwQWG3qL43jmuPt5BcsXnEMAxjaQ3A+8vl/l/xqu8VkVcAPbm1wvTaX+Bx8L8RhvJIrVZ7foV0OjTL9WZs6g+r4ycTy3UoZyi6LSfRrPNIM0tO2/l54Nsq/rOI1NLI9pOGYVjwzzAMw2gz9lYqQ/8i9cndWTCdZerGaYi2qj7jRL7jnXy6WnFPFZj42UK1jceHBO4a1F+aJatczuND2hnKg+4W5M56vffjmUeAHW/DOHoEYdj3HnC/0IFHkwcdVfitpF77xBLID4kLq1cFwp+B9Nl63OhCgm1Svf6OiNwVx9OyiVgyxDAMYzk78DYOlMvRiR79FUH+bdMafiZJrQyTJQTSuu6Gif1HodCp2dcj5+mRvhIkxnORwLtFZCtQaTI9lxZ7SQfEoI+gMg5EIulnw9B9O5fwsf2kYRiWADEMwzBaU6kMnpL69GvLkACZYkTRO0TlsHf+jjTa+g14JjIdVhbr8dGuQkoB8aoPBSL31iX+IlG0L9MItmNuGKwEKdhNPQ2PppIPKqPnivJHgjuzaWwU4IG4zrtg7MVFbuob0oeV6sVO+RuQgXnGEcNonlfqCk+A7hSRWhAlX5tk8kd2aAzDMFhm+dveE8LQ/aKHi5zI+QWeGAAp6KQifxXW09+caCRBjho99JyYhqVLgXdlnh4pSAUoF/h6aKs4oVf9ZiByT2M/c8xw49GD401rGNvbGIZhCRDDMAyj1Rj8U6Vy+elfU/TXQfpZOn8PDzquyO2i7qtxfPguZtqSjbYbHMh7fChyqcBJXRz7usIe0J2i7Irj2h47vIax8mXuwrD/kwjX5zu7VPWQOPnVOBr7IpAszff1vaJUdn8g8O5cp5hhdEuiqncJ8s9A4J3enkaDD0OgsHeijaSLYRiGsUBZrDCsbgf5Y0TPy5IJ0lQ0ARCrcjeiu5KKu4XR0ZHcGmIpCqFajOmbq+AlDMffCbxR4QQReTtz/X+LEhczHpFohMoLKnwe4UXx+lAmv2jFc4ZhWALEMAzD6IqGjEpPz0mhD/4K5A0LrATWfABNVV8EDoM8oeJvzLVgS9OC1Rauczw+Ng5UKsmmVPxm5/X6Dj0+co/rmHp5FvRzIjyQkygxnw/DWNn3P8Bgqdz3ScFdM+370RhU/65UqvzcxMRL+5Zy7C9V+v+9KJ8G0uwxW5cb3UhbzpmTVPUHguxFeArVP3UumBQJ4snJQz9qkjExuSzDMIxF7BkqlcFTYp++zon8hsBZTZK4+YTCy8CjqN9ZKvV8fWLipQO5NUanewNhbvxuSrKqXKkMnQBI6vzxLtWPqLIJ4XRgawdjfH4PuR+IEHefir9NUplIkrFHaHgW0kL6yzAMwxIghmEYRsux1wEp9G0pleX3BLmahgarLMDbY2rhOr3Adi68z7lSNDHx4n7TY+2466M/DKsfVbgGKInISTntXGmhiTvd8THl8SES3BpFI/uAyCpuDYNVk4wOw4FrEf0UMJC7zcdT5Rd9XPvLRfp+NH+flsv9VyryGdAtsxIuhtHZ3F/0mJvuQlTdB6jA8yl8XBzDaeSfYrYci2uzrjAMwzDm2T8EleolgcofaSMJ0txJ4XPJhUMCT6Xw6dAF34miw89Q7B9YFKeT5mRJw9PDb5OU03HyQVR7gFBETmz6fmkzb0zNAftRdov4G0XCJ8plf3h0dPTFpqSP7SMNw7AEiGEYhtE9vfRujcvB7wlcCwSL0IGfr8XaFqtt2sZ7evovSJTt6v1POnG/yKzgZ8tzooCI8Lh6fQh4MXbJF3IeH9YebhisrgRIqVK9XlQ+OTvpqaNe+Jk0qt27hPf01JhSCsO+dyPuvwNb7DQYLC4p0ka/XWuAKvJlhG+iWik5eXRycuxBO3yGYRiLTIIE1UtEeBdO3tpCMje3n9BJVB7C8delKL1rgom9reV4Z1Eqlwcu8/hXIqTi5crM00NAeueZF6R4/6h3CewDvhXH/X8DBycKzNBtL2MYhiVADMMwjK71WUsMDAyVIv9uVC4R4a1A2GWAA9AJQFF5GPhSECd3TzL5nB3ujrs9BE6uBJUXzheVPxbY3oGhef58Rgrf11Q/mqa1eyzZYRisgQRI/wdF+Uxu8+8UdiZ1/2sw/uNluseDMBx4D+h/QdiSmw/U1vRGEwnoZO6Ul5kxsW13zUiLSe1xUR4ELam47yd1boaeqHHZH6y1eb/NdYZhGHMphZW+a1H3e3RW1JCo15uTUvrbTA4cguHJrIBNYHMfeIGSD8OR08BdC1pVkbcJnNj9vhFodKsnijwNerOI1AoSMIZhGFgCxDAMw6BLjdZpuZTe3o1bvU8q3scXIe4a4GzgmA66PpoTH1MeEzdqwJOBur31+ugPMJ+JTuY5hU39lUr9+Ewj93qv+obM46OVBn+r4z/l8bGnwA/EMIzVN06EpXL//1/gd7PxQACnwoeSaOwz055Ny/PdlVJp4LUq/nKBXxCRrZkkYjdMSR7lKzdVhONAhuwUs9q7O1KFm1X0L0AdSIznIoGrs3PeLyJFATffQkJFmuSvDqN8F/AiHPSBfCLw7vkoKj8Pw2MUSLhZUsQwDGPOfiNw4cC1geh/B17RYp+nTUmJv0dlAvxfBoH/W+/ltarBL2XrAFXR4wTZUTCuS4siL817Panqc0CicCuO+50vvRzHI99tMabbWG4YhiVADMMwjK4TH0NBpboD1aqo+yDoGcCgiGxs1oVlPmNzdLeoHBLhfpHgliga2Z95TFjio7PzUS6VBnZkAcarmO3x0Wpz0snxt/Zww1gDnWGl0sC/FtG/QDg5dz/vE/hwvT52e3NSe3k60zb1h9Xxk4nlOpQzaSRiOiFAeALVG50LJgFRVRFxaarx78wxdTdYRckPAVJBb6rX9T/B+IGZpzf1VyrRZpBUNd6u6q5jxktMFT1ZRF7F7KCZNum56/Q1lPvepoDZfVPPp5F/MuchIi3mQJsPDcNYz53mpbDS9x5Ufhdka5u426z9h6q+BLwEVAsS2lqwX5EWzwsNT4+nRBj2gXy8IKFtvh6GYVgCxDAMw1gcU54S4v0piLynEZCQPnLVOJ2Ovwp7RNkF/uY4HnoaDiRA3bRZO9+I9PT0nx+nerFD3otwArMlx9qeiw6Ovx17w1gD40RQqb7FKV8GqdJIPASofi6Oa9dn/17uJHNuPNnWC1HQ3dsrKeydaH40DPs/iXA9lgBhNXp6eNWHHNwXx/7PYGJfe8PcKckUL1BOg8rhc52XKxvdI/pKEbkMKLUIwLUy362DThVbSOYh8i2n7KvXx77KjN+YYRiGMVOUFpTKvZ8Rgl/sYP7VFgmNhcTtRhR/l6h8JY777mgjaWj7F8Mw1h0lOwSGYRgsxksCoAxbSplG6zWJ5xKBsxDXafK5OQgfo+zz6BfDQO6dnBx7qPH8uElOdH5eymHYt33qfDiR7R14tIgdf8NgfQabVSsgTRWWEgPxEUoc5MaTuYmMBYyFkjNzN1ZjgZpyj4P/mEktzhe0ag5ykUbsSmEXQC+925JK8DaFEspxorwf0U0zgTnpa3E9hiBh7oddg3KNh72lUvXtIiTAC3GQfp7JDcON5MvB8TbBO5s3DcNYy3sQDxBUqm9G9Y0dFr0JiytUVuAeFb1DvBtJ4vE7gBGozbPWMAzDwBIghmEYRmEwiZyMhPT0HHOSqi+p+qtVR9+sIhsEdkixPmsriSWmqoVykhO3ibo702RsdxpTz1UTWcdBBx4fYXX8ZBL5gCoXCrwmdz5kHo+PSFX3Kdxqx98w1g+9vRu3xsnkBxHpa5IG0lXWoW3jE6uuy6P5v0WVYeCRJNZfh9qeFp4bXQXRJpjYS8SfZY+VS6WBe9RpFfDq2RygNyhsBhCRE5rM1dNmDxGBbTj5xezxeuiDiwlHx4FIpO9GkXAPaADio2hkX65z0nVwDAzDMFaLzO60vODAwMDGet0NJRq/OkD+L6Vl8dWSyiSq6g9Q+b0kqX0jN86ar4dhGAaWADEMw1hIAGpa+71SGTwl9unr0zS+XmGzCMcj0i+Nt2iLpEnRAtRlmq/POJHvaOA+Fag7mNNoLdLpNtp6fIxfrnWuFuEEycwD2wRdch4fPCbCAxLyuaTW96wdf8NYP3if9ACnNwUMBLS0AoLjBmsq2VGUfHe5ie1xEf8bYSiPJHFtuEvvGe2wkCNOktFv5cSrpNyz4WHVNPQ+7QGuQ9kOJAhnAFuZmwzxTV0i/3rq073KOWhSAwSRyVKp+qca8FSgbm+9PvqDonWQXf+GYayS/aAUjIFDQVDdMRFxDZpcJEiPwpZuJI8X89tE5GRVvRZ6n8lJJVrywzAMA0uAGIZhdBtIKJXLA5d58ScD3nt/ZSBcAFKR9vqt7RbRI4reISqH1ekd9WjLN+CZKGkts2UUy4b5KY8PQd+bVa6G8/h7yIyeecPjQ/A74/r4HiLqWcu4HX/DWCdrYY+/EBhqGiMOAA9bUNZgeTp6ph5LVPUuQf4ZtJR6vpym47vq9eXvNMk/Pjl56LmZf277NZgogdMwHH8ncB5I5NGzncgF83mIzDHvdfyhKKqqD5cq1dunHi2JfG9ycuxBbN1jGMbqSWArQBhWz1LHBSCpeH8acC3oECKlI+y3q0CPOPn/lcpBr+jgV+L48F0NCSzDMAzDTNANwzDae0FkJrSpBJXD54ryLpBLBU5ciIlp7qEaoIrcIepsgbpEHh8qXCKwvcNzkYBGqAzP9fiwwIthrL/xZONAGEZ/g3DxrLFC2RXHvf8m1w2mq1C20Ydh/6cQPmQm6IvqtJEu3lOwt9IJZjonHCrDKnwe4QWBpBSlX5tgYu9KP1i5gF8i3r8akWtpdFoKSLVb816Fx0X1IeDFhofI0AuNZ9p6iFgy0jCM5YqDNY8tZdiUkwOcrJTKvEfUn+Jhe0FCeCnmIWnjEUkXJuhfjeO+22F4av6xfY5hGFgHiGEYhnl75CSOMg+J+OXrUM5QzzYROZXOfT2aFrA6psrzAs+n8HFxDKdR+hSM7c9JX1ib8vJ4fGhe5gpIFW5W4S/EM5Emte+k8bTBsXl8GMa6pJxClBbc+yGkljBgTSY9tI38UhF+HsmmmQ9XfQk4NDODySSeGzXgCSAAEC+1JB79BzJfjHj2564EycVCyZc4rj0OPJ49Nhg0ujlczkPkeBGOB+lvOnaF86vAWYicNeMhUuvEQ2Qhslk2rxuGJTco8HOcRcPDQzbMDOf+atWJi3IJ7BJwDiKDbu5nSJvv1Tad7FIwjzwHVEVkI+19DIs+c1BwVyO8KQwnrna+7xNROv63uf2QyfoahoElQAzDMNand0TWyjx0jnfJMfjxN2udd4uwFaGS+Xo0LzylhZ/EjK8HultUDonI/c65W0VcEk++/Fyz8bktRJfN42NqoS+q+gNB9orwVFxP/ztM7G+dADMMYz0RhiOnqbhNMjMWCFBH2AMDdXjJEqOsOenEqfllP8qTLZLfjceaPDBU9YeCPNsqYS7obc6F9zWC9yiIj5KRfSTUCz6/KOmhK7gzJn/sDqdR7YEZD5Fj/k7VlxoBQy4G6oq+MldAoi06brUDD5EbNWAPUEoj/2RuDqfD4KMlRgxjfUoMUpCMzejdGlTcGfkui4mIq9D0YiBpqPmxGZmV0KVFQkK6kB+c2rNIbr/44tTnifC8loI/kSQ5E+Q9wNnAMQVFeO065T2wFWFrGrgTnatuDF3wSBQdfqZp72MYhmHZccMwjPVADz0nppXS21S1CnKtoKeBlIByF74eBZIO7AK/M46HnoYDSVPlotjGuzuJmimPD4e8F6ETj4+pJ58DvVuFL6XR4MMQKOydsHNgGEYWgPBh2P/HCP8xP96r6j8JXBHHtSdWeXejSWA14VUfdMj3QMvAN+O478vgBVzTfNB4LAzHrwTOBUkA553e3phP6sHc9wAMT0LOXrz1nkvXnnQoNNZPGyvQmwSVQ+c5L1eq6KAgVzDbZ2e+REuzhFjS8O2S2xEeBp0xjvduJI5H78QkRQ3DYD4JPwBJUc4V9J2z9xLSw9wCYV3q+JnCj0T1ayA18Dc39otTc0rJw4FxIGBg4JhS5N+NyiUivDW3/+kywasRKg/h+OtSlN61GiQXDcMwLAFiGIaxuM25g019DQ3XBS0omxMiHnQciFC9SZ17piTsaTL1NLr394DuPT6mDWVRHQG5RcTvqtfH72ZaYcQwDGPWGF4Kw+qnEPlAPkGg8EQgwRVRNPJPlgBZE2R/u38QleszKSergD1yDIXhwBXq/KB4uRLRczPfkN6FJUQo0ry/U9QVJUCimYKUfNKqkmYFEQvZJ9t1YxhHJ1ZVcO9t64UoyKZ0T8+hTWEavA/YBOJBBcR79DVL5NnRRvY4/5yON5oCZViFLyAMN16nzql7rl4fvatFspyCgr2T0rD0VoR3AZcstEgPSNTrzUkp/W0mJ3+c2x/ZfGgYhiVADMMw1sJCuaHp6gZV4zNU3QeBKsKOrBqxqKVYCuStpludVfVF4DDIkyr+TxGppVFtd6760Hw9FpakKlcqQ9u8T3pxMx4fFLebN+u4e1U9gLiva+p3pmntUeDlpnNh58MwjOkxo1zuv1Lhk8C23BAxqZ5fS5La52CObNFqTIB8MkuA6LpPgCifjOOxG2hU+GqRBvwSmKDbHDN3PTU9X5fLA6em4rdJyuk4+SCqPUAoIifOLi7p6vhL+25QfVRUXsj9lgDhCVRvdC6YLHpPEJTHx8dfONBm/FjI+bdrwzDm8Rpq47/E4ODgsVHEhuknfdqDyHUoZzLl0yFaBfmpXDd/q8+TLsd6bTMG1FV1X/b5AcgeFX8jIpGkbjxJRv++YD3RTopKC6V6w+pZJeT/BF7X8Fvq2B9EZyeF9XuC3CkS3Jp5LEXWHW8YBuYBYhiGser8IqYWg2Gp1P96DbS3oemaXARSEZnR8s4tGos0qbVJp7UO+ggqE1Ma386VoomJF/c3LYjN16PLAB2N1vTXqHJhqukHgF5Rtklj89Ls8TFnA6KqzziR72jgPl2tuKdGRkYPFZwPwzCMWWOQR08W5MSmAILXgKcyz4Y1UBWpJRCr7mwci6ApIL+QY2LHcWHHyAHU66M/AH4AfLNSGboLQVLnj5dUP6LKJoTTYdY6rdPAZatklghydsE7zlV4e+pTX/Dbg9RPPhGU+25EJMoXwrTxIOk0QWLXlmHJjmJD8jnXf5YwPXnqufFJvQr1U6bkAjiBE5B8skNokeBuThIUFc1pm4RH/vWHUb5Lo4MjQHhCYCqhKkFQrjUlUKVgXOhkHtJcEZ4jru2pVKvvi2P/BtXgl7Jivq1NnyPzFJv1gLxB0TN9ml5dKlU/J8IDcVx7zPZOhmFgCRDDMIxVs9lWgJ6e/vPiVN8i8F5RNoFWECkVVNW4+ZIpDU8PfQh4MQ7SzzM59AIcjHJty/lFpbdT0dU50zCsblfhEkWuEWE7UG7E6lp6fGT/1sMKt4vKYXV6Rz3a8g14JhqZnGMCaBiGUTwGiSRzazzl7wLkR+nq7pLOj50PA1cCr7BTLrrA5IcFgpZofZa7LutRNPK/s//+J9j8OHjJea74rMChjJO3yawurUV5lExRFpF/0ea9rxTkzejsTmApB7cj/bM8SGauLRXxPJhJrBmG0X4MnX6sl95tSSV4mza8mWZe4PVKB+cynfDQntx+bj6fDlmqjhSFvXj9mojUQQMV93QSczP0RA2/qN6kQFJP2iRXFrRnAqjVas8Dd8Gm+8Nw/EoVfbvgLmOux9I8Y6L0i+NMkD9U2FMqV3eKsiuOa3vscjUMwySwDMMwVqavRwk2V+gZOS5Mg/cDG1XkfIGzzNNjxXp8hFQqJ5Q1fG+qerETOb+NoXn+HE2dn3pDyqT2MWDMDq1hGN3OIeXywKtU9VMIl+SCCwnK9XE89mdkMlmrf8zd1B+GE3+D8JY24yzrRALr03E8dr1VuK4qSuXywGUe/0qENOchks4EOaVvnvXDfEmRJbsnvOqDDnmskSCRvAmxAx6O477bGwFT1/TbFuVJYkk6YyXFkQquxS19kLjGtV9Ow3DkNHDXABXAK3qyiFy2zMW52j5BoeNTUpGKPA26EyECnFP3bDeeHRxxj6XBy1T82wW9MvNWCrr0CFFAvOpDgci9dYm/SBTtwzwUDcOwBIhhGMZRlbiaCki53t5jtyTJ5NvA/TyivSCvY0bztVneSguqY7vx9MB8PRZ93iqVytAJqunVil4OsiM7X+2kyDKZK54Hvq3iP4vIeBrVvpudH/NbMQyj68RAUKle7JQ7suBpFiDXr8Rx+u9hct8aCJBn897GgTCM/gbhYkuAWAJkFfmGFFZOl8sDr8pJ4giqFVF3HeiZuaQIQJ+IbOlQKkuWUKqqnfzVfpQnC9aki/UkaVXxbn4khizjewoLBPr6jtuSpvW+KaXJ1PnNLtUbVNk8dT+r6HGCnD2PBFWnPiGddJkU3Jc6psrBZs8OQJwvDcfxyKPz3GN6lO+ppt/SuzUoyw5R90vAG7rwCMnvoRwNyefdmUfIX0TRyAFg0jxCDMPAJLAMwzCOqKF5Y4FXcaerZ1OSRDco8moRNjRpvgrNxnGL9/SwRV/3/h7Tur7THh9p+gFxejJIf5O2rbTQ3N2PsttJ+tkwdN+u1cafb2WuahiGQWfBy3LDhHl6DBHQERV2weSPmhKrqxxnY6SxWiVy5iQV6vXRHwI/ZHbA9bszAVcEJFWNz1SV62hUmEujjkJPFpFX0XkwVxbYidHqb9mKFPqbQPeeJDM/JnW1JBn9hwKT5YX4kdhYsbaSGrKAZHGH10Dv1qDizpiVWFet1OPJ2QlJT1lFtiEzv0Vm9mw6TxJPurheteDalwLPDoBARO5zzt2qqq5UqozlE4xp64THStoPNkk6T+xP6+yvVquPdOkR0vw3htMeIT75hTAc+KM4Hv3z6UICGysMw7AOEMMwDJZZAqH/7V44AeWNgr4z2+RWW0hZtVstduPpYSySMKyepcJbQK4RMo+P1v4eeUYUf5eofLUhGTE80VTdaefHMIwFUakM/USq6R0CZ+bGovvjOj8HYy+sDfNzk8DCOkDWy961hdTV5r6G5E5DdieoHD7Xebly1hsX5zHCEiYXOgj0Tkv0MCvIqzKswhcQhmekt9SVRB4zCVejG3p6+i9IVF/T8ODRNtekeJRzG5JLs+aVbiTpZJlvtsdFeRC0pOK+n9SnPDumGK4zO2koqzwZmN8fBbCpdwEeIUU+YvsU/qzkuG9ycuyhNbI+MgzDFpGGYRgrydtjWy+kElQOnyvKu0AuFTixy0WbeXocDU+WgYGhUsR7RP0pHrY7kQs6rGBKQScUuV3UfTWOD9/FjAyZYRgGS5YA8cndInLKjJQOX4nj3qthuLZGNveWAMESIAadeYyIP2km6CtevD8VkWuzDpL8bdXTRkFBV9JeOxcAlhk/EnXAcBykX2Byw3DDlyHP8CTd+xzIMiaG1mJMZZF/77ZeiII2w13LhF+bnyQgqsIFHXooHo2usOZjnIBOAoEi35/x7LAEIEvnETK9ZlDYI8ou8DvjeHwPM8kjS4gYhmESWIZhGAsLoG/qD6vjJxO/fB3KGerZJiKnFvh6tNJ4ldmeHtrw9KiP7wZGEvP0WBZPlt7ejVu9TyrexxcR6TXADkSGXLEfSxuPD/1sWve7YWx/G2kswzCMBZM6fzyecGpMUuV5J/I5GB63scYw1nShX/Njab0+ekfB6waDSvX25r2yqFyF+ouaOlKhO8+RxchrdfycwFkIZxXYq9RDH1xCOFqb+zF9tzkX3gcadDIWRlHlIAyPLfI8OVaW5NpCPGG6mTekp2fDNtW03O2P9j7tQV6+DuXMGaWmot8fqXpORnhVN7eKtL9ml+Ia7lbCigLPDgVKiLtXRW8Ddc6Xnm/27EjmfsbR9uw4WuPf4Tg+fCv0fiMoy62i0o1HiOSyatsRtivu4rDS/wAl/Vxc63s2u/9tr2YYBpYAMQzD6DCAHoZDO7xLNuDH36x13i3CVoRKphPr2xg85jVeR4Ddgu40T48j6MlSlh1xEmWavzIosLFgUV3k19HO48MqdA3DWIZxbHOfS2s3qMiJM3Lf+u0w1G/X6x0HfgzDYFX7ijBPAP5wGtUeaH5wcHDwu1EUbJg9pizIc2Qh65ulCsyHIG8s+jRVOSf1yaFOu62DcPxWXPU+GhXl3f42SSP/JEzsP8pedSzMA2Oacqk08FMa+GoHr/Xq2Zym9RsUNneRbJi+VgVOQCjP/wcKC/h86eI6kyW4H7XAr2OK/ShP0uTZMfW6clkPjY7WXlxFnh2r1SMkvydD4DUop2mddwTh+K2iA3cmyehuGh0hOV81278ZhmESWIZhGM0eEdtVuATkWkFPAyk1+US06hbJt+R+AzRQcU8nFW5mdHQE8/TgCHqy/EzWUu069PcA8/gwDOOoSEJtHAjD6G8QLs509Wsed1VaH/3qGtu0mwQWJoFlHBG/kY49RxpiQ35IcJfTnSY/Ryg51O34UAetL/D7RZHbER7OpLmOzEn1biSOR+8skljt3ANjlhfGJlHeh+imDhMOLvPJOBLJPVklkfq9eP2aiNRzUm0PN/YHPvsbXoyaPDuKDLyN5fcIya8jYpR9Hv1iGMi95hFiGIYlQAzDsHGm2SOCzRUqL28qa/jeVPViJ3J+04KqTeJDx7Md5HDTgstYtgAaLI0ni9YaVZFyh6j7inl8GIZxBHGAD8PqNYj8AY3qW1G4Jan7X4PxH6+xTbslQLAEiMEK1eQfuFydH5obTpcrET2XuRJbQVZociQkndY6I4q/U9SNrHAPDFZxt1VB17iO58bdAJWH1entKIHD/XO9PnoX3fvPGEfXIySXzGSPiv5yGvX/HTiFA+OWDDEMA5PAMgyD9ZNUlVw1lOvtPXZLkky+DWo/j5Z6FV7vRMKcVFJzC26jy2Oup0ckXsbTZOyRNCYu0Hi1xdbipcl0OnjWmSdLUdv5lCfLIYHvp/AJcQynUfqUeXwYhnGU5qY3AltoBFpKCN+C8QN5iQfDMIxl8hyhock/urPoA8rlgb9NRU9uSlamknImjutQ7aFZEknkhFznNB36kMgySxuxgk3QBwV3zey/ckEeGIs5ZrLKZeR0Htmsuqruy45lALJHRW9EJJqWT0OejaOxHzZ9znr27FiNHiHM8gjxfCoMaz8S4fv1eu9/z8nbWdGBYRhYAsQwjLW2kGo2uG54RFTc6erZlCTRDYq8WoQNMwpWs5IfeS3mOugjqEwIelsLTw9peq8trBZ/7qb0jyul0sDZKuOXa51faOPJIi2MDB3wMvCooDtLpZ6vxxMvHcgnxGwxbBjGkaXnRIWtMjVGqf7IIfutQnq9oGLn2lgBniMtjb/r9dEfAj8seOrhSmXoq8hsqSjv0x6gyBS7sTYWzqCh8b+cHiSySrvCFuuBsZqOgS7h+5oTFXXQf0ClxlS3kvCEwI3OBZOABEG5Nj7+woH8h6TFJuVqCY9V5xEyvRfPCuROVbiwVA76NK3elKa1R7P9oLNzaxgGlgAxDGMNLaS00CNC9Z0NNz6pytyFj8svqBQeF9WHgBfjIP08k0MvwMGIuZ4etoBahnMXhtWz1Mn5KBtF9X1ZZWFYYFbYbvOXqHIXoruSiruF0fGROB5vPn9mNmwYBkcwyevDsHQp8PapJK0KX4/rY181mYZ1cxnoOpYBM1ZuBX0ngfR6FI387+Kntv0aRMHcgmynYTh+JXBuw9NiRXmQHO3kwXobA2QJ35eTEFMHDMdB+gUmNwxDku0PKinsnejgs2wvsHL2gAJQq9WeB+6CTfd36RGSX0cFAteK4wrn+m8R8bvq9fG7gdgOt2EY5gFiGMZq9vQACKlUTgh96X3AcaqUcPI2gW1NPhBF1SMJqiOgN6lzz5SEPZOTYw/aYT6CniwDA0OliPeI+lM8bHciF3RvhKcTgKLyMPClIE7unmTyOTvchmGsBC+MSmXwJ733n0G4JJPme0adfiiNxv92jSZAzAOkKdissAfP9Uky9iCZJ4zdHgbmQZK/Uyog1wh6GrN9SObzIFlKY/W11kWxAuIxOt7FeDfbo6MLE3nDPEJaXFDPCfp1L/x1Gh33EDw7WZA0MQzDsASIYRgrZoxortyXnp5jTlL1JVV/laKXg+xgtg5x2lwRkvP0eAkIEXevpn5nmtZ25xbTrmmzYYujpfP2aPZkuRRx1wA7ctU9ntZSAPlKIQEdUy/Pgt6oAU8G6vbW66M/MJkrwzBWEM6F1asC4fMgFRpaSLfW6xv/XbYRtwQI66LC1anoDUlU+6QlQIx1tJ+XbuSvwnDobO+S43LjReZBIkUeJABlEdnW5nf4JY5JHK2x2i3L4KR6ABhfrt8scDDz4DvY4d/Q8OhQ92wmydaJVJiuoPNkLP240pC0LssOUdeNR8isPaOqPuNEvuOdfLpacU+NjIwcalNcaRiGgUlgGYZxNH0hyHt6pGn8EYXjG4sg6c9ekzb5Q+QX2yPAbkF3Ohfeq+rDSoWXRkdrL7YImNtCaGlNzX2hJwtsaLGIlRZasUJD83e3IHe6IPiLKBrZT0KUzj6PFlwyDOOo09NzzIlpGn84S36Iqj6rgfs0PBvZXMM6S4RIaofBWMfeI8wTzNc4HnmUDj1IQHzq/GZJ9QZVNjcV0LTzIFmoJ4k7iknc/ShPLnHCPHKiN4qET4AGyzEXiQT1ePLQ3m4/O53nOjG/DvMI6cAjJO/V6UXkFIWfIPVvqk3w9aBS3ZlG5hFiGAaWADEMY+X4QvT09F+QeD0bkQjlvAJPj7wcUn4B4xT2iPIN0EDFPZ1UuJnR8REyT496vTlAbyzD4lWZaWF+h6heUeDJIh1UhokIj6vPPFpc8gWiaB8zmq5imr6GYay4gVB9qLBJZsaoJFB5PrFNNuuvKECt+92wBEn7sU+68yDhf8OWx2b8H9p7kMz5IV14knjVBx3yWMN7Qo7g+K0OeDiO+26f+tuW5nOdwsHxIxTwlSU0izfMI6Qbj5B8IsQ1/CX1vaL8jAurn4zj2seAMTvUhmFgCRDDMI6yp8fGxHO+IGfNvEK0oAIq+7eOZzuaYY9+MQzk3snJsYdmtlArqp19jZ/HUypBZf+bnHdXqOgg+CsEhgr2QNLe34M6aCzIM2miv5qmtV0tKuDsPBqGscIkoH4qVH365zO5BgWtK9wWRZWDdogMwzCWYk1+oFDCKY65BbiF+T1J7i70JCG/71BxyoNxPPb40Ts0NfMwMWxcgBSGx7L7+ytNHiF9zJaylhb7zRLIsYj+x1K5+hOictg7f0cabf0GPFO369YwDCwBYhgGS+vp4fMtq7M8PVQvR+RsoCKzuqFnKjjyn6fK88C3VfSziETiZTxNxh5JY+KCtlZbzCxb4mNTf6VSPz4Vv9n5H1/vvbwe4RRpvEwLklatOkYcEKnqfoVbcNzvfHAoTUcetTZlwzBWDZU9J6iWLgcZyMarBMcDMDxmBpyGYRjL3l0wX+fB4Tge3clR9uLg6CUQbA4yVvM9fziOD98Kvd8IynKrqFwHeiYwKCIbWyRC8rKUAwLXIiBe3lou//gR1ervx3HtMfOTNAwDS4AYhrFILwiYSXwMBpXqOYBTz+Y0jW8o8PTwBYkPaHQF/D0q40DkJP1sGLpv12rjz7doebVF/vJ4tHiAMBza4V2yAT/+5tRzNVBSkZNEROYxNW9OjDgapXaPifCAhHwuqfU9C8Nj6ezrwM6lYRgrft4Lfel9WTLfN8Y2+YHz/qV0fZqBG4ZhsAKD+K5beV7roDCMlecR0tu7cbf3ScX7+CJUrkE4GzimjUfIdKwh8wg5RUU2BuW+T6R13Q0T+5v2r3YfGoaBJUAMw+jUC6Lh6aFsF+9PQXkPUGnh6TFnU6LwuGjmARGkn2dy6IXGMwfH6/U5FR62SFlmTdYwrG5X4RIlvdYppyFSAspNr3OdGt43zi/3CH5nXB/fQ0Q9a/m3hadhGKzCzriNQIVGF6MDuTmOx3dn46LpmxuGYRz9xIGtLQ1jDXiETEy8uD97/Isw+Delsv+wwEeB/vn2oFOfI3CxIP9ayu520cGvxvHhu4ARO9SGYWAJEMMw5vGCKMHmCj0jx4Vp8H6mPT04C3HNfg9asBhJUB0BvUmde6Yk7JmcrD0IZNbXk80SIraJOUIeLWUN35uqXuyQ87M2YulQekDbn9+xB21zahjGKh83fanUf76KP18avlUBqg8Jeg/W/WEYhmEYhsEyJToTOPxSUt/wP8Iw/aGKv6wLj5AApF/g3Yh/R6ncd5eofDWO+26H4QkaBS1WmGcYBpYAMQzM0wOgt3fj1ukWVGpX4YNeRF4HlGVGBqt50RI0/Dz0ReAlIETcvep1Z5qO7wZGEmZ1hWhTC6uxTBJXfX3HbUmSqF9E/JRHi8IOJ1KeknZpo7FaJHPlVfUA4r7e4vyabJlhGKuZiope7HBnZWNkXUTurdfHHrfuD8MwDMMwjOXeyx46HMf8BfQ+0MYjxBfINE/tPwcFdzXCm8Jw4mqR3kxyu/a8xSAMw8ASIIax7vw88p4eQ0GlugPVapxEHwQ9A2RQhI0zCkctPT2g0V66W9CdzoX3qvqwUuGl0dHaixQbkdmCY3lNJD30bg3KsqMeT14Huh0lFWFzzqNF5/H2oFljWVWfcSLf0cB9ulpxT42MjB4qOL92bg3DWMXdH4OvFfx7ZjbW+vd1Sb5om2XDMAzDMAyOVFdIsUcIcg1Me4T4NrJYHtiKsNVr8LqozreDct9ncx4hVrhnGAaWADGMdeDnAUWeHlJB6GNG40pbBNidwh5RvgEaqLinkwo3Mzo+AiQA9fpckzLjiLQPD4Xh4GUq/u2CXtl0Ppmn26MooTKi6B2iclid3lGPtnwDnolGJu38Goax1sbRTf0q41eIsC2TBhRUxqkfMwwH7QgZhmEYhmEcGXyhR8jAwJdLkX83KpeI8FYgbKOIoA2jdI4HLhPkIim7vwrrvb850UiCGIZhYAkQw2DNdARk3Rqb+mCyUipzrah/NUiSeC5o8vSgReJDQccb/yXDHv1iGMi9k5NjD02/o46ZEx41b4/NVfAShuNXqOg7wF8mMNQiz9FO6ip7TmuAKnKHqPtKMstE7hk7v4ZhrEkqlWhz6vl5kDDrejskTv4SDkY23hmGYRiGYXB0PUJGR19M4BM99Hw5DUuXAj+L6PkgPQXFfvl9bwBSFbgmDoNNJanuSuruFuibhIMT5BIutuYzDANLgBgGq0UCaXrSrlarx8exf4PqxC8BVWAHIkO5NzUbgrmpf2eeHodBnlTRP0UkEi/jaTL2SBoTN8lgmfzREU18bOqvVOrHp84f79LaR1TZhMjpgmxtOhfSQUeQA0RVDwl8P4VPiGM4jdKnYGx/9hnWJmwYxpoeY1PR43NrXBV4quTKX4+zzkbDMAzDMAzj6PtdTjL5I2I+V6kM3hf79PUB+iGF00VkA+09QkoivAPk/DDUd0Jtwvm+j0fp+N+aT6lhGFgCxDBWladHWCoNvE4D34dqJarLL0Hwhqz1s9n7I98eGjDdy6GPoDIh6G3Ohfc5V4pyradz2kptgXDkTM3DcGiHd8kG/PibU8/VeEoqchIyfR34Nt4erYzNXwYeFXRnqdTz9XjipQM5WSvz9zAMY62PsQonV5x/8UMqclLW9Ril8JlsPDQMwzAMwzBYEV0hU3EMF0WHnwH+qdJ77DeSZPLSDj1CPDCE8GaANHAnOlf9PXG8kEb+qSaPENv/GgaWADEMY+V5epwfp3qxoO8VZRMIDQ+IOVUMRZpXj4vqQ8CLcZB+nsmhFzLZj4RiWS3jCC7ywrC6XYVLlPRap5yGSAkoFxvGzft5UwvAWJW7EN2VVNwtjI6PxPF48/k2fw/DMNY8QWX4Au/lDSLS2PCqPBg697+imaSyzXuGYRiGYRgrLxHiJyZe2kfnHiGz/E4FzgqE/xsFKQdfMo8QwzCwBIhhsFJ8H1p5erzJiWxvvE4oaOHMBbV1HIhQvUmde6Yk7JmcrD0IQAwwaX4eR93bg5BK5YSyhu9NVS92yPnZuZUuvD3maKGq8Biq/1NExkv15GuTTP6owMPFzrdhGOulwy4UlZ8VkVMAj5ICfx1Fh/8x2yRbItgwDMMwDIMV7RPSiUdIc0Hg1JKwP1sYzniEVNwtjI6ONBWE2h7ZMLAEiGEYLIu81XTr5cDAwMZ63Q2qxmeoTnyQYk+PomrVVp4etbQ+vhsYSQqqIWyCP6LneSrAJj09x5yk6kuq/ipVvVxhhxMpN51b6WIxKKBjqjwv8IJK8Jtp/fAuyHJd1uJrGMb6HYN9UB74aVF/KdIYYxX9ahKnX2/yPjIMwzAMwzBWp0fI9QqbG7Lg0l8QK5n695RHyHlhpD9D2LezVOr5+sSMRLTtmw0DS4AYhrE0JubS5NNRLpX6X6eB9k5EXIUmF4FURNhKsacHOWNr6MzTo3kitwn9yCa4PPRuDSrudPVsStP4IwrHNy3QtANvjyJz8zrobkHudM7dJuKSePLlvU0+LlbdbBgG67NqcMOQ0/gSRE4EUsAJ7IfJH3UgKWgYhmEYhmGsbI+Qfyz3HPPwdIEhejnIDhpy0r5FHOYY4EJFXpsk0ftcWP106ILvZJ8nlggxDCwBYhjGols3FSAMq2epk/NRNoryflGOA61k3g8soaeHBcCPrn/LUBgOXqbi3yGqVzTMzKUqxfJVdG7oi/OqDwUi99Yl+SJRtI/phg+TuTIMA0tEgwZB/RyEXwCZShrvB75l46RhGIZhGMaaSITo5OTLz2aP/wGVyi3TEtMyJTE9a789rYohIhuAfx2g53jvHwrD/r8O4uTrk0w+Z4fYMLAEiGEYdOn1sLkKXjJPj/eI+lM8bHfKBTPvEAqqDMzTYxUF2mb+eUolqOx/k/PuChUdBH+FwFCLPId0kEiRXLdPosjToDc72FWvj+2xw28YhtFi/Ay0mtOFFlS/G8d9X4aazZOGYRiGYRhrp9AUICaK/rlO9DthWP1/FL0E5BqB7TQ6Qlp5hPQgXAJcmISlu80jxDCwBIhhGHTk5wGb+iuV+vGp88e7tHaDKptpVBucg8hgVnaQNkkVke/2ME+P1XTOs/MtfrPzP77ee3k9winSPrHVicQVQKSq+xVuwXG/88GhOB7Zjfl7GIZhtKRarR4f1fkAIn2AqPK8E/c5GJ6wOdMwDMMwDGPt+oTEcW0PsCcMq/eqciHIB8TpyfN4hATzeIRYEsQwsASIYaxnTw8/I201dI53yTH48TennqvxlFTkJGTWe3zBZOsAFN0tKsMNnXLz9FjhpuYKVEqlgbNVxi9PPVdB43yLiDSd5269PURVfyDIXoQnpcyNSa3vWRgeS+dqmBqGYRizcXHs3gD6hmxMTUG/HYb67Xqd1A6PYRiGYRgGa10eiziuPQY8XakMfUU1vXqBHiGfCV3w7cwjJMjHfwzDwBIghrFePD166d2WVILLVLWqpNc65bTMy6Pc4j0tPD3YJejOOB58GhIHw5OYp8eK9PaY7eGi7xORE4Cw6bVuIckVhR+Bfl0dX0qigYchUOp7JzLJFrGkl2EYxnzj6aY+1YkPiHB8Y7zUCRX32Vpt9Hmr3jMMwzAMw1g3e3cBoiga+Sfm9wjJFy5OeYS8ccYjpPrLWWeJ2OE1DCwBYhisaT8PmPL0CMPxdwJvjOEEUS4TJGxqEGkle+RBJxT5G4SHQcOSyPcmJ8canh6Md6JvaRzZc1+CzRUqL2/KFkxvccp5bQStOun4kILr4VtO2Vev174KJFnSw64DwzCMrjyZojJCdWbglNvTevpdS37MwtkhMAzDMAyD9VO8ulCPkArCJV75dBhW94i4f6zXR/8MGG3tC2oYBpYAMQxWg8QRzHRalCuVoRMAyTw9PqLKJkROB7bKzGuLdCGzyVPHVDkIBCB7VPTGtO53w8R+mG7zcM3dJXZKjqrEFYDr7T12S5JMvg1qP4+WehVe70TCJZC4mvJ4eaL5eij4TLsWDMMwOhrDNwyVyvGHQc9uTL9aE4KvwtiBgnl2PQYBBEpehIM6OxlvGIZhGIZhHiHFhazqRC4ALlB0rFTuHwjE7RRxyeTky8/lEie2bzeMVepvYBjraiLMe2uUywOnpuK3ScrpOPkgqj1AKCInFiRJCo3MgTrobkHuFHG3qaorlSpj4+MvHMCMzFfw+e/dGlTc6erZFMANCq/OWmCLzlG3puYjwG7U7yzweHF2LRiGYbDQjgYNw4FrwH8GkX7QQ4p8PKkHH4eRw03+WeuaUu/AvyLxfykiJ7G+NcKdil6fRLVPZ9eQyYwahmEYxvpSfKhUKkMntPAIkaZ4T7av11FVhgUOpvDpnEeIs/WmYVgHiGGsho3wUBgOXKHOD6rXKxych0OAXkSKAtuueRJV2IfXu0RIgBdil3yBKNoHxAD1+qiZWK/o8z94mYp/h6he0TCvl6rM1RHtuqvEqz7oYI+KeyapcBOj4yPM9Xix68EwDGMRY7k6PygqmfyVPJrU3Sdh5GWryptN4N3zKb5uR8IwDMMwDPMI6cojREEGRBgA/kWA7jCPEMPAEiCGsQpwQdB3iQvkCkUHQS8XlaHGtNVy7pJZWpLohMLtePmWc7KvnozdxUxw2zw9VtX595cLDBWce+k6EAeTAk8oeouDe7IFEdTtejAMw2Bpq/h8uTzwKvV6Za6mbwwqdUt+FE5RYht0wzAMwzAsEUIrj5C3CPJuhTMFegok02nyCPnTMKzeF7vkppNfEe179lkm7fAaBpYAMQxWiFlqGPadJSL/pyI7ZLqJY1a7Y6vgtwLiYQ/4303rPAIT+3Kvd03dBcbqOf/K4mQBFXQSr/8V4a4kHv8ecyXP7JowDMNYQlLxr3RwLoio6o+duD+D4XEbbw3DMAzDMIzuPUL67ke5DCf/GaSnIDaQ9wg5D3h9qKVLfvzjcCeMfcbkNQ1jZfP/AZA66HLoOGy2AAAAAElFTkSuQmCC"});var yd,vd=xt(()=>{yd="data:font/ttf;base64,AAEAAAASAQAABAAgRFNJRwAAAAEAAO/QAAAACEdERUYS6BMnAAC+kAAAAG5HUE9TitUDHQAAvwAAACQAR1NVQouWuxwAAOMAAAAMzk9TLzJqU3HHAAABqAAAAGBjbWFwjM3bvgAACdgAAAV8Y3Z0IA2+GkwAAB44AAAAgmZwZ22eNhTQAAAPVAAADhVnYXNwAAAAEAAAvogAAAAIZ2x5ZphChVkAACK4AACHdGhlYWQRoaVEAAABLAAAADZoaGVhBeADPQAAAWQAAAAkaG10eMItL08AAAIIAAAH0GxvY2EtkwuMAAAevAAAA/ptYXhwA0QPGgAAAYgAAAAgbmFtZTvDe2YAAKosAAAHj3Bvc3QHXlN6AACxvAAADMtwcmVwi6ZuvgAAHWwAAADLAAEAAAACAABtnsamXw889QAPA+gAAAAA1p64pgAAAADZhajy/y//OAMqA5AAAAAHAAIAAAAAAAAAAQAAA4T+1AAAA03/L/8vAyoAAQAAAAAAAAAAAAAAAAAAAewAAQAAAfwATAAHAGAABQACACgAVACNAAAAgw4VAAMAAwADAYMBkAAFAAACigJYAAAASwKKAlgAAAFeAFABpAAAAgsGBgICAgUCAQAAAAcAAAABAAAAAAAAAABESFJNAEAADfj/A4T+1AAAA7YBXiAAAJMAAAAAArwCvAAAACAAAwLiADYAAAAAAKAAAACgAAABkQAMAZEADAGRAAwBkQAMAZEADAGRAAwBkQAMAZEADAGRAAwBkQAMAkQACgJEAAoBlAApAZQAKQF/ACIBfwAiAX8AIgF/ACIBfwAiAX8AIgGWACkBpwAKAZYAKQGnAAoBlgApAWsAKQFrACkBawApAWsAKQFrACkBawApAWsAKQFrACkBawApAWsAKQFYACkBWAApAYcAIQGHACEBhwAhAYcAIQGHACEBpAApAbYACgGkACkAwAApAckAKQDAACQAwP/qAMD/2gDA/+IAwAApAMD/3gDA/+0AwAARAMD/1QEJABABCQAQAQkAEAGeACkBngApAVgAKQFYACkBWAApAVgAKQFXACkBbAAKAhoAKQIaACkBqwApAasAKQGrACkBqwApAasAKQGrACkBkAAhAZAAIQGQACEBkAAhAZAAIQGQACEBkAAhAZAAIQGQABcBkAAXAZAAIQJBACEBggApAYIAKQGCACkBkAAhAZMAKQGTACkBkwApAZMAKQF0ABYBdAAWAXQAFgF0ABYBdAAWAXQAFgF0ABYBlwApAWwADAFsAAwBbAAMAWwADAFsAAwBbAAMAZIAJQGSACUBkgAlAZIAJQGSACUBkgAlAZIAJQGSACUBkgAlAZIAJQGSACUBfgAMAi0ADwItAA8CLQAPAi0ADwItAA8BlgALAYoACQGKAAkBigAJAYoACQGKAAkBagATAWoAEwFqABMBagATAZEADAGRAAwBkQAMAZEADAGRAAwBkQAMAZEADAGRAAwBkQAMAZEADAJEAAoCRAAKAZQAKQGUACkBfwAiAX8AIgF/ACIBfwAiAX8AIgF/ACIBlgApAacACgGWACkBpwAKAZYAKQFrACkBawApAWsAKQFrACkBawApAWsAKQFrACkBawApAWsAKQFrACkBWAApAVgAKQGHACEBhwAhAYcAIQGHACEBhwAhAaQAKQG2AAoBpAApAMAAKQDAACkAwAAkAMD/6gDA/9oAwP/iAMAAKQDA/94ByQApAMD/7QDAABEAwP/VAQkAEAEJABABCQAQAQkAEAGeACkBngApAZ4AKQFYACkBWAApAVgAKQFYACkBVwApAWwACgIaACkCGgApAasAKQGrACkCHgAEAasAKQGrACkBqwApAasAKQGQACEBkAAhAZAAIQGQACEBkAAhAZAAIQGQACEBkAAhAZAAFwGQABcBkAAhAkEAIQGCACkBggApAYIAKQGQACEBkwApAZMAKQGTACkBkwApAXQAFgF0ABYBdAAWAXQAFgF0ABYBdAAWAXQAFgGXACkBbAAMAWwADAFsAAwBbAAMAWwADAFsAAwBkgAlAZIAJQGSACUBkgAlAZIAJQGSACUBkgAlAZIAJQGSACUBkgAlAZIAJQF+AAwCLQAPAi0ADwItAA8CLQAPAi0ADwGWAAsBigAJAYoACQGKAAkBigAJAYoACQFqABMBagATAWoAEwFqABMBGAAeARoAIwGRAAwBkgAiAZUAKQHEAA4BkAAhAZAAUAGQACcBkAAhAZAADwGQACYBkAAkAZAAIgGQABwBkAAeAZAAIQEjABIBdAAYAXYAFAGOAA4BfgAcAYkAIQFkAAwBjAAaAYkAGgGQACEBIwASAXQAGAF2ABQBjgAOAX4AHAGJACEBZAAMAYwAGgGJABoBGgAjARoAOgEaACYBGgAiARoAFwEaACYBGgAlARoAIwEaACABGgAhARoAIwEaADoBGgAmARoAIgEaABcBGgAmARoAJQEaACMBGgAgARoAIQEaACMBGgA6ARoAJgEaACIBGgAXARoAJgEaACUBGgAjARoAIAEaACEBGgAjARoAOgEaACYBGgAiARoAFwEaACYBGgAlARoAIwEaACABGgAhAFn/ggKNADoCjQA6Ao0AJgKNADoCjQAiAo0AOgKNACICjQAmAo0AIwC8ACkAvAApALwAKQC8ACMB9AAfANIAMgDSADIBawATAWsAFAC8ACkBLAAjAaYADwGcABABhQAJAYUACQEUADUBFAAjARQAFQEUABkBFAA7ARQAIwEOABkBDgAZASwAAAH0AAABkAAAASwAAAC8ACoBUAAjAVAAKQFQACMAvAApALwAIwFQAA4BTwARALwADgC8ABEBUAAmALwAJgH0AAABLAAAAZAAAAC8AAAAoAAAAAAAAAGQACoBkAAfAZAAJAGQABcBkAATAZAAHAGQACMBkAATAZAACwDcAC4BkAARAZAAGwGQABsBkAAoAZAAGwGQACUBkAAlAZAANgGQACgBkAAzAZAAKwGQACQBkAAMAZAADAGQABYBkAATAoMAGgLeADYBkAA2AZIAIgGRAAwB0QAxAZsAGQHbABABlQApAawAIQJNACMDTQAjAuIAFQGQABQCegAXArgAGQGhACIBwQAaAZAAFwLiABUC4gAVAuIAFQJWAAoBkABJAfQAzQH0AM0BkAAWAZwACwGQABYDNQAhApUAKQJXABUAAP/LAfQAhwAA/4IAAP/OAAD/fgAA/8QAAP9+AAD/zQAA/3oAAP96AAD/igAA/6cAAP91AAD/jQAA/9IAAP/SAAD/mAAA/7IAAP+VAAD/LwAA/1kAAP9PAfQAvgCEAHQAlwB0AHwAyAB4AHgAhwCsAKEAbwDHAAAAAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAVoAAAAmACAAAYAGAANAC8AOQB+AX4BkgH/AhsCNwK8AscCyQLdAwQDCAMMAxIDKAM4A5QDqQO8A8AeAx4LHh8eQR5XHmEeax6FHp4e8yADIAggCyASIBQgGiAeICIgJiAwIDogRCBwIHkgiSCsILkgvyETIRchICEiISYhLiFUIV4iAiIGIg8iEiIVIhoiHiIrIkgiYCJlJcvg/+/98AD4////AAAADQAgADAAOgCgAZIB/AIYAjcCvALGAskC2AMAAwYDCgMSAyYDNQOUA6kDvAPAHgIeCh4eHkAeVh5gHmoegB6eHvIgAiAHIAsgEiATIBggHCAgICYgMCA5IEQgcCB0IIAgrCC5IL8hEyEWISAhIiEmIS4hUyFbIgIiBSIPIhEiFSIZIh4iKyJIImAiZCXK4P/v/fAA+P/////1AAAA7gAAAAAADQAAAAD+j/8ZAAD/DQAAAAAAAAAA/tH+vv6y/Yb9cv1g/V0AAAAAAAAAAAAAAAAAAAAA4cwAAAAA4ZDhj+F14XIAAAAAAADhTOGQ4VjhIODq4OrgvODy4Ofg4+C9AADgtOCp4JLgpOAT4A/fvAAA36sAAN+QAADfl9+M32nfSwAAAAAg+hH9EfsIxAABAAAAlgAAALIBOgAAAvQC+gAAAAAC/AAAAvwDBgMOAxIAAAAAAAAAAAAAAAAAAAMIAwoDDAMOAxADEgMUAxYAAAMeAyAAAAAAAAAAAAMaAx4DIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEAAAAAAAAAAAAAAAAAAAAwQAAAMEAAADBAAAAAAAAAAAAv4DAAAAAAAAAAAAAAAAAwFzAZMBegGdAb8BxQGUAX0BfgF5AaYBbwGDAW4BewFwAXEBrQGqAawBdQHEAAQAEAASABgAHQAnACkALgAxADwAPwBBAEcASQBPAFsAXgBfAGMAawBxAHwAfQCCAIMAiAGBAXwBggG0AYgB8gCMAJgAmgCgAKUArwCxALYAuQDFAMkAzADSANQA2wDnAOoA6wDvAPcA/QEIAQkBDgEPARQBfwHNAYABsgGZAXQBmwGhAZwBowHOAccB8AHIARgBjwGzAYQByQH0AcwBsAFcAV0B6wG9AcYBdwHuAVsBGQGQAWgBZQFpAXYACQAFAAcADQAIAAwADgAVACQAHgAhACIAOAAzADUANgAZAE4AVABQAFIAWQBTAagAVwB2AHIAdAB1AIQAXQD2AJEAjQCPAJUAkACUAJYAnQCsAKYAqQCqAMAAuwC9AL4AoQDaAOAA3ADeAOUA3wGpAOMBAgD+AQABAQEQAOkBEgAKAJIABgCOAAsAkwATAJsAFgCeABcAnwAUAJwAGgCiABsAowAlAK0AHwCnACMAqwAmAK4AIACoACsAswAqALIALQC1ACwAtAAwALgALwC3ADsAxAA5AMIANAC8ADoAwwA3ALoAMgDBAD4AyABAAMoAywBCAM0ARADPAEMAzgBFANAARgDRAEoA1QBMANgASwDXANYATQDZAFYA4gBRAN0AVQDhAFoA5gBgAOwAYgDuAGEA7QBkAPAAZwDzAGYA8gBlAPEAbgD6AG0A+QBsAPgAewEHAHgBBABzAP8AegEGAHcBAwB5AQUAfwELAIUBEQCGAIkBFQCLARcAigEWAA8AlwBYAOQAaAD0AG8A+wHvAe0B7AHxAfYB9QH3AfMB2QHaAd0B4QHiAd8B2AHXAeAB2wHeABEAmQAcAKQAKACwAEgA0wBcAOgAaQD1AHAA/ACBAQ0AfgEKAIABDACHARMBlgGVAY0BjgGJAYsBjAGKAc8B0QF4AdMBygG2AbkBuwGnAaQBvAGvAa4BwgHBsAAsILAAVVhFWSAgS7gADlFLsAZTWliwNBuwKFlgZiCKVViwAiVhuQgACABjYyNiGyEhsABZsABDI0SyAAEAQ2BCLbABLLAgYGYtsAIsIyEjIS2wAywgZLMDFBUAQkOwE0MgYGBCsQIUQ0KxJQNDsAJDVHggsAwjsAJDQ2FksARQeLICAgJDYEKwIWUcIbACQ0OyDhUBQhwgsAJDI0KyEwETQ2BCI7AAUFhlWbIWAQJDYEItsAQssAMrsBVDWCMhIyGwFkNDI7AAUFhlWRsgZCCwwFCwBCZasigBDUNFY0WwBkVYIbADJVlSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQ1DRWNFYWSwKFBYIbEBDUNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ACJbAMQ2OwAFJYsABLsApQWCGwDEMbS7AeUFghsB5LYbgQAGOwDENjuAUAYllZZGFZsAErWVkjsABQWGVZWSBksBZDI0JZLbAFLCBFILAEJWFkILAHQ1BYsAcjQrAII0IbISFZsAFgLbAGLCMhIyGwAysgZLEHYkIgsAgjQrAGRVgbsQENQ0VjsQENQ7AEYEVjsAUqISCwCEMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZIVkgsEBTWLABKxshsEBZI7AAUFhlWS2wByywCUMrsgACAENgQi2wCCywCSNCIyCwACNCYbACYmawAWOw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DhoOJg4yDj4OSg5WDqQOsA68Dt4PDg8aDyYPMg8+D2oPkA+cD6gPtA/AD+oP9hACEA4QFhAeECYQLhA2ED4QRhBOEFYQXhBmEG4QdhB+EIYQjhCWEJ4QphCuELYQvhDGEM4Q1hDeEOYQ7hD2EP4RBhEOERYRHhEmES4RNhE+EUYRThFWEV4RZhFuEXYRfhGGEY4RlhGeEaYRrhG2Eb4RxhHOEdYR3hHmEe4R9hH+EgYSDhIWEh4SJhIuEjYSPhJGEk4SVhJeEmoSchJ6EoISihKSEpoSohKqErISuhLCEsoS0hLaEuIS6hLyEvoTAhMKExITGhMiEyoTMhM6E0ITShNSE1oTYhNqE3ITehOCE4oTkhOaE6ITqhOyE7oTwhPKE9IT2hPiE+oT8hP6FAIUChQSFBoUIhQqFDIUOhRCFEoUUhRaFGIUahRyFRAVWBWOFdQWLBZSFo4WshcGF54X0hg+GKwYzhkyGaIZqhmyGboZwhnKGdIZ2hniGeoZ8hn6GgIaChoSGhoaIhoqGjIaOhpCGnwanhryG4gbvBwmHHocmhz6HU4dhh2oHfoejB7AHygfeh+aH/ggSiCCIKQg9iGIIbwiJCJ2IpYi9CNGI4AjoiP2JIwkwCUqJX4lniX+JlImaiZ6JoommiaqJromyibaJuom+icQJzwnXCeYJ7wn4igIKGgoyijiKQgpNCmKKaIpuinuKh4qaCqwKtIq9CsMKxQrLitIK2IrfiuGK8Ir7iwqLEgsdiyiLNQs9C0WLTQtSi1KLUotSi1KLUotSi3KLiouhi8wL6ov8jBiMGowqjDCMNoxAjEcMTgxZjGKMd4x9DIIMjIyXjKOMwQzTDN8M540FDR2NLQ0vDTENOY1GDVCNUo10jZ8N1Q3njfEOA44+jmiOdA6eDtAO9I8SDyKPMw85j0KPTA9pD3YPkI+pj9mP5w/pD/IP+RAAkAgQEZAdECWQLhA/EE+QYZBokHaQhBChkLQQuxDCkMcQy5DOENCQ0xDVkNgQ2pDdEN+Q4hDkkOcQ6ZDsEO6Q7pDukO6AAAABQA2AAACrAK8AAMABgAJAAwADwA1QDIODAsKCQgGBwMCAUwAAAACAwACZwQBAwEBA1cEAQMDAV8AAQMBTw0NDQ8NDxEREAUGGSsTIREhASETBwMRAQMTBwMDNgJ2/YoCI/4w6CHoAhLo6CHo6AK8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AAMB2AC5AAD//wAMAAABhQK8AAIABAAA//8ADAAAAYUDXgACAAUAAP//AAwAAAGFA14AAgAGAAD//wAMAAABhQNeAAIABwAA//8ADAAAAYUDUQACAAgAAP//AAwAAAGFA14AAgAJAAD//wAMAAABhQNCAAIACgAA//8ADP9tAYUCvAACAAsAAP//AAwAAAGFA5AAAgAMAAD//wAMAAABhQNiAAIADQAA//8ACgAAAi4CvAACAA4AAP//AAoAAAIuA14AAgAPAAD//wApAAABfQK8AAIAEAAA//8AKQAAAX0DUQACABEAAP//ACL/9gFmAsYAAgASAAD//wAi//YBZgNeAAIAEwAA//8AIv/2AWYDXgACABQAAP//ACL/bQFmAsYAAgAVAAD//wAi//YBZgNeAAIAFgAA//8AIv/2AWYDUQACABcAAP//ACkAAAF1ArwAAgAYAAD//wAKAAABhgK8AAIAGQAA//8AKQAAAXUDXgACABoAAP//AAoAAAGGArwAAgAbAAD//wApAAABdQNRAAIAHAAA//8AKQAAAVUCvAACAB0AAP//ACkAAAFVA14AAgAeAAD//wApAAABVQNeAAIAHwAA//8AKQAAAVUDXgACACAAAP//ACkAAAFVA14AAgAhAAD//wApAAABVQNRAAIAIgAA//8AKQAAAVUDUQACACMAAP//ACkAAAFVA14AAgAkAAD//wApAAABVQNCAAIAJQAA//8AKf9tAVUCvAACACYAAP//ACkAAAFMArwAAgAnAAD//wApAAABTANRAAIAKAAA//8AIf/2AWkCxgACACkAAP//ACH/9gFpA14AAgAqAAD//wAh//YBaQNeAAIAKwAA//8AIf9DAWkCxgACACwAAP//ACH/9gFpA1EAAgAtAAD//wApAAABewK8AAIALgAA//8ACgAAAawCvAACAC8AAP//ACkAAAF7A14AAgAwAAD//wApAAAAlwK8AAIAMQAA//8AKQAAAJcCvAACADEAAP//ACQAAADiA14AAgAzAAD////qAAAA1gNeAAIANAAA////2gAAAOYDXgACADUAAP///+IAAADeA1EAAgA2AAD//wApAAAAlwNRAAIANwAA////3gAAAJwDXgACADgAAP//ACn//AGjArwAAgAyAAD////tAAAA0wNCAAIAOQAA//8AEf9tAK0CvAACADoAAP///9UAAADrA2IAAgA7AAD//wAQ//wA4wK8AAIAPAAA//8AEP/8AOMCvAACADwAAP//ABD//AEfA14AAgA9AAD//wAQ//wBIwNeAAIAPgAA//8AKQAAAZMCvAACAD8AAP//ACn/QwGTArwAAgBAAAD//wApAAABkwK8AAIAPwAA//8AKQAAAUwCvAACAEEAAP//ACkAAAFMA14AAgBCAAD//wApAAABTAK8AAIAQwAA//8AKf9DAUwCvAACAEQAAP//ACkAAAFMArwAAgBFAAD//wAKAAABYAK8AAIARgAA//8AKQAAAfECvAACAEcAAP//ACkAAAHxA1EAAgBIAAD//wApAAABggK8AAIASQAA//8AKQAAAYIDXgACAEoAAP//AAQAAAH1ArwAIgHVOQAAAgBJcwAAAP//ACkAAAGCA14AAgBLAAD//wAp/0MBggK8AAIATAAA//8AKf9WAYICvAACAE0AAP//ACkAAAGCA2IAAgBOAAD//wAh//YBbwLGAAIATwAA//8AIf/2AW8DXgACAFAAAP//ACH/9gFvA14AAgBRAAD//wAh//YBbwNeAAIAUgAA//8AIf/2AW8DUQACAFMAAP//ACH/9gFvA14AAgBUAAD//wAh//YBjANeAAIAVQAA//8AIf/2AW8DQgACAFYAAP//ABf/5gF5AtYAAgBXAAD//wAX/+YBeQNeAAIAWAAA//8AIf/2AW8DYgACAFkAAP//ACEAAAIrArwAAgBaAAD//wApAAABbwK8AAIAWwAA//8AKQAAAW8DUQACAFwAAP//ACkAAAFvArwAAgBdAAD//wAh/78BigLGAAIAXgAA//8AKQAAAXwCvAACAF8AAP//ACkAAAF8A14AAgBgAAD//wApAAABfANeAAIAYQAA//8AKf9DAXwCvAACAGIAAP//ABb/9gFeAsYAAgBjAAD//wAW//YBXgNeAAIAZAAA//8AFv/2AV4DXgACAGUAAP//ABb/bQFeAsYAAgBmAAD//wAW//YBXgNeAAIAZwAA//8AFv9DAV4CxgACAGgAAP//ABb/9gFeA1EAAgBpAAD//wApAAABgQK8AAIAagAA//8ADAAAAWACvAACAGsAAP//AAwAAAFgArwAAgBsAAD//wAMAAABYANeAAIAbQAA//8ADP9tAWACvAACAG4AAP//AAz/QwFg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FSHRAaL+XgGLWgAAAAH/Wf/kAKcC2AADAAazAwEBMisHARcBpwEcMv7kBwLfFf0hAAH/T//mALEC1gADAAazAwEBMisjARcBsQEmPP7aAtYa/SoA//8AvgLrAXwDXgADAdoA+gAAAAD//wCEAucBcANeAAMB3wD6AAAAAP//AHQC6wGAA14AAwHeAPoAAAAA//8Al/9tAV0ADgADAeUA/wAAAAD//wB0AusBgANeAAMB3QD6AAAAAP//AHwC6wF4A1EAAwHXAPoAAAAA//8AyALrASwDUQADAdgA+gAAAAD//wB4AusBNgNeAAMB2QD6AAAAAP//AHgC6wHCA14AAwHbAPoAAAAA//8AhwL0AW0DQgADAeIA+gAAAAD//wCs/20BSAAEAAMB5gD6AAAAAP//AKEC4AFTA5AAAwHgAPoAAAAA//8AbwLnAYUDYgADAeEA+gAAAAD//wDHAe4BLQK8AAMB3AD6AAAAAAAAAB4BbgABAAAAAAAAAFgAAAABAAAAAAABAAoAWAABAAAAAAACAAcAYgABAAAAAAADABwAaQABAAAAAAAEABIAhQABAAAAAAAFAA0AlwABAAAAAAAGABEApAABAAAAAAAHACkAtQABAAAAAAAIABEA3gABAAAAAAAJABEA7wABAAAAAAAKADcBAAABAAAAAAALABUBNwABAAAAAAAMABUBTAABAAAAAAANAJABYQABAAAAAAAOABoB8QADAAEECQAAALACCwADAAEECQABABQCuwADAAEECQACAA4CzwADAAEECQADADgC3QADAAEECQAEACQDFQADAAEECQAFABoDOQADAAEECQAGACIDUwADAAEECQAHAFIDdQADAAEECQAIACIDxwADAAEECQAJACID6QADAAEECQAKAG4ECwADAAEECQALACoEeQADAAEECQAMACoEowADAAEECQANASAEzQADAAEECQAOADQF7UNvcHlyaWdodCAyMDE5IFRoZSBCZWJhcyBOZXVlIFByb2plY3QgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL2RoYXJtYXR5cGUvQmViYXMtTmV1ZSlCZWJhcyBOZXVlUmVndWxhcjIuMDAwO0RIUk07QmViYXNOZXVlLVJlZ3VsYXJCZWJhcyBOZXVlIFJlZ3VsYXJWZXJzaW9uIDIuMDAwQmViYXNOZXVlLVJlZ3VsYXJCZWJhcyBOZXVlIGlzIGEgdHJhZGVtYXJrIG9mIERoYXJtYSBUeXBlLlJ5b2ljaGkgVHN1bmVrYXdhUnlvaWNoaSBUc3VuZWthd2FEZXNpZ25lZCBieSBSeW9pY2hpIFRzdW5la2F3YSBmcm9tIERoYXJtYSBUeXBlIGluIDIwMTAuaHR0cDovL2RoYXJtYXR5cGUuY29taHR0cDovL2RoYXJtYXR5cGUuY29tVGhpcyBGb250IFNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBTSUwgT3BlbiBGb250IExpY2Vuc2UsIFZlcnNpb24gMS4xLiBUaGlzIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIHdpdGggYSBGQVEgYXQ6IGh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMQA5ACAAVABoAGUAIABCAGUAYgBhAHMAIABOAGUAdQBlACAAUAByAG8AagBlAGMAdAAgAEEAdQB0AGgAbwByAHMAIAAoAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AZABoAGEAcgBtAGEAdAB5AHAAZQAvAEIAZQBiAGEAcwAtAE4AZQB1AGUAKQBCAGUAYgBhAHMAIABOAGUAdQBlAFIAZQBnAHUAbABhAHIAMgAuADAAMAAwADsARABIAFIATQA7AEIAZQBiAGEAcwBOAGUAdQBlAC0AUgBlAGcAdQBsAGEAcgBCAGUAYgBhAHMAIABOAGUAdQBlACAAUgBlAGcAdQBsAGEAcgBWAGUAcgBzAGkAbwBuACAAMgAuADAAMAAwAEIAZQBiAGEAcwBOAGUAdQBlAC0AUgBlAGcAdQBsAGEAcgBCAGUAYgBhAHMAIABOAGUAdQBlACAAaQBzACAAYQAgAHQAcgBhAGQAZQBtAGEAcgBrACAAbwBmACAARABoAGEAcgBtAGEAIABUAHkAcABlAC4AUgB5AG8AaQBjAGgAaQAgAFQAcwB1AG4AZQBrAGEAdwBhAFIAeQBvAGkAYwBoAGkAIABUAHMAdQBuAGUAawBhAHcAYQBEAGUAcwBpAGcAbgBlAGQAIABiAHkAIABSAHkAbwBpAGMAaABpACAAVABzAHUAbgBlAGsAYQB3AGEAIABmAHIAbwBtACAARABoAGEAcgBtAGEAIABUAHkAcABlACAAaQBuACAAMgAwADEAMAAuAGgAdAB0AHAAOgAvAC8AZABoAGEAcgBtAGEAdAB5AHAAZQAuAGMAbwBtAGgAdAB0AHAAOgAvAC8AZABoAGEAcgBtAGEAdAB5AHAAZQAuAGMAbwBtAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQAsACAAVgBlAHIAcwBpAG8AbgAgADEALgAxAC4AIABUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGkAcwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATAAAAgAAAAAAAP/YAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAABAgACAAMAJADJAQMAxwBiAK0BBAEFAGMArgCQAQYAJQEHACYA/QD/AGQBCAEJACcA6QEKAQsBDAAoAGUBDQEOAMgAygEPAMsBEAERACkBEgAqAPgBEwEUARUAKwEWARcALAEYAMwBGQDNAM4A+gDPARoBGwEcAC0BHQEeAC4BHwAvASABIQEiASMA4gAwASQAMQElASYBJwEoAGYAMgDQASkA0QBnANMBKgErAJEBLACvALAAMwEtAO0ANAA1AS4BLwEwADYBMQDkAPsBMgEzATQBNQA3ATYBNwE4ATkBOgA4ANQBOwDVAGgA1gE8AT0BPgE/AUAAOQA6AUEBQgFDAUQAOwA8AOsBRQC7AUYAPQFHAOYBSABEAGkBSQBrAGwAagFKAUsAbgBtAKABTABFAU0ARgD+AQAAbwFOAU8ARwDqAVABAQFRAEgAcAFSAVMAcgBzAVQAcQFVAVYASQFXAEoA+QFYAVkBWgBLAVsBXABMANcAdAFdAHYAdwFeAHUBXwFgAWEBYgBNAWMBZAFlAE4BZgFnAE8BaAFpAWoBawDjAFABbABRAW0BbgFvAXABcQB4AFIAeQFyAHsAfAB6AXMBdAChAXUAfQCxAFMBdgDuAFQAVQF3AXgBeQBWAXoA5QD8AXsBfAF9AIkAVwF+AX8BgAGBAYIAWAB+AYMAgACBAH8BhAGFAYYBhwGIAFkAWgGJAYoBiwGMAFsAXADsAY0AugGOAF0BjwDnAZAAnQCeAZEBkgGTAJsAEwAUABUAFgAXABgAGQAaABsAHAGUAZUBlgGXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwC8APQB0AHRAPUA9gHSAdMB1AHVABEADwAdAB4AqwAEAKMAIgCiAMMAhwANAAYAEgA/AAsADABeAGAAPgBAABAB1gCyALMB1wBCAMQAxQC0ALUAtgC3AKkAqgC+AL8ABQAKAdgB2QHaAdsB3AHdAIQAvQAHAd4ApgHfAIUB4ACWAeEB4gAOAO8A8AC4ACAAjwAhAB8AlQCUAJMApwBhAKQAQQCSAeMAnAHkAeUAmgCZAKUB5gCYAAgAxgHnALkB6AAjAAkAiACGAIsAigHpAIwAgwBfAOgAggHqAMIB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwCNANsA4QDeANgAjgDcAEMA3wDaAOAA3QDZAgQCBQIGAgcETlVMTAZBYnJldmUHQW1hY3JvbgdBb2dvbmVrB0FFYWN1dGUHdW5pMUUwMgtDY2lyY3VtZmxleApDZG90YWNjZW50BkRjYXJvbgZEY3JvYXQHdW5pMUUwQQZFYnJldmUGRWNhcm9uCkVkb3RhY2NlbnQHRW1hY3JvbgdFb2dvbmVrB3VuaTFFMUULR2NpcmN1bWZsZXgHdW5pMDEyMgpHZG90YWNjZW50BEhiYXILSGNpcmN1bWZsZXgCSUoGSWJyZXZlB0ltYWNyb24HSW9nb25lawZJdGlsZGULdW5pMDBBNDAzMDELSmNpcmN1bWZsZXgHdW5pMDEzNgZMYWN1dGUGTGNhcm9uB3VuaTAxM0IETGRvdAd1bmkxRTQwBk5hY3V0ZQZOY2Fyb24HdW5pMDE0NQNFbmcGT2JyZXZlDU9odW5nYXJ1bWxhdXQHT21hY3JvbgtPc2xhc2hhY3V0ZQd1bmkxRTU2BlJhY3V0ZQZSY2Fyb24HdW5pMDE1NgZTYWN1dGULU2NpcmN1bWZsZXgHdW5pMDIxOAd1bmkxRTYwB3VuaTFFOUUEVGJhcgZUY2Fyb24HdW5pMDE2Mgd1bmkwMjFBB3VuaTFFNkEGVWJyZXZlDVVodW5nYXJ1bWxhdXQHVW1hY3JvbgdVb2dvbmVrBVVyaW5nBlV0aWxkZQZXYWN1dGULV2NpcmN1bWZsZXgJV2RpZXJlc2lzBldncmF2ZQtZY2lyY3VtZmxleAZZZ3JhdmUGWmFjdXRlClpkb3RhY2NlbnQGYWJyZXZlB2FtYWNyb24HYW9nb25lawdhZWFjdXRlB3VuaTFFMDMLY2NpcmN1bWZsZXgKY2RvdGFjY2VudAZkY2Fyb24HdW5pMUUwQgZlYnJldmUGZWNhcm9uCmVkb3RhY2NlbnQHZW1hY3Jvbgdlb2dvbmVrB3VuaTFFMUYLZ2NpcmN1bWZsZXgHdW5pMDEyMwpnZG90YWNjZW50BGhiYXILaGNpcmN1bWZsZXgGaWJyZXZlCWkubG9jbFRSSwJpagdpbWFjcm9uB2lvZ29uZWsGaXRpbGRlB3VuaTAyMzcLdW5pMDA2QTAzMDELamNpcmN1bWZsZXgHdW5pMDEzNwxrZ3JlZW5sYW5kaWMGbGFjdXRlBmxjYXJvbgd1bmkwMTNDBGxkb3QHdW5pMUU0MQZuYWN1dGULbmFwb3N0cm9waGUGbmNhcm9uB3VuaTAxNDYDZW5nBm9icmV2ZQ1vaHVuZ2FydW1sYXV0B29tYWNyb24Lb3NsYXNoYWN1dGUHdW5pMUU1NwZyYWN1dGUGcmNhcm9uB3VuaTAxNTcGc2FjdXRlC3NjaXJjdW1mbGV4B3VuaTAyMTkHdW5pMUU2MQR0YmFyBnRjYXJvbgd1bmkwMTYzB3VuaTAyMUIHdW5pMUU2QgZ1YnJldmUNdWh1bmdhcnVtbGF1dAd1bWFjcm9uB3VvZ29uZWsFdXJpbmcGdXRpbGRlBndhY3V0ZQt3Y2lyY3VtZmxleAl3ZGllcmVzaXMGd2dyYXZlC3ljaXJjdW1mbGV4BnlncmF2ZQZ6YWN1dGUKemRvdGFjY2VudAd1bmkwMzk0B3VuaTAzQTkHdW5pMDNCQwh6ZXJvLmFsdAdvbmUuYWx0B3R3by5hbHQJdGhyZWUuYWx0CGZvdXIuYWx0CGZpdmUuYWx0B3NpeC5hbHQJc2V2ZW4uYWx0CWVpZ2h0LmFsdAhuaW5lLmFsdAd6ZXJvLmxmBm9uZS5sZgZ0d28ubGYIdGhyZWUubGYHZm91ci5sZgdmaXZlLmxmBnNpeC5sZghzZXZlbi5sZghlaWdodC5sZgduaW5lLmxmB3VuaTIwODAHdW5pMjA4MQd1bmkyMDgyB3VuaTIwODMHdW5pMjA4NAd1bmkyMDg1B3VuaTIwODYHdW5pMjA4Nwd1bmkyMDg4B3VuaTIwODkJemVyby5kbm9tCG9uZS5kbm9tCHR3by5kbm9tCnRocmVlLmRub20JZm91ci5kbm9tCWZpdmUuZG5vbQhzaXguZG5vbQpzZXZlbi5kbm9tCmVpZ2h0LmRub20JbmluZS5kbm9tCXplcm8ubnVtcghvbmUubnVtcgh0d28ubnVtcgp0aHJlZS5udW1yCWZvdXIubnVtcglmaXZlLm51bXIIc2l4Lm51bXIKc2V2ZW4ubnVtcgplaWdodC5udW1yCW5pbmUubnVtcgd1bmkyMDcwB3VuaTAwQjkHdW5pMDBCMgd1bmkwMEIzB3VuaTIwNzQHdW5pMjA3NQd1bmkyMDc2B3VuaTIwNzcHdW5pMjA3OAd1bmkyMDc5B3VuaTIxNTMHdW5pMjE1NAlvbmVlaWdodGgMdGhyZWVlaWdodGhzC2ZpdmVlaWdodGhzDHNldmVuZWlnaHRocwd1bmkwMEFECmZpZ3VyZWRhc2gHdW5pMjAwMwd1bmkyMDAyB3VuaTIwMDcHdW5pMjAwOAd1bmkwMEEwB3VuaTIwMEIERXVybwd1bmkyMEI5B3VuaTIwQkYHdW5pMjIxOQd1bmkyMjE1CGVtcHR5c2V0B3VuaTIxMjYHdW5pMjIwNgd1bmkwMEI1BmNpcmNsZQd1bmlGOEZGB3VuaTIxMTcHdW5pMjExMwllc3RpbWF0ZWQHdW5pMjExNgd1bmkyMTIwB3VuaTAyQkMHdW5pMDJDOQd1bmkwMzA4B3VuaTAzMDcJZ3JhdmVjb21iCWFjdXRlY29tYgd1bmkwMzBCC3VuaTAzMEMuYWx0B3VuaTAzMDIHdW5pMDMwQwd1bmkwMzA2B3VuaTAzMEEJdGlsZGVjb21iB3VuaTAzMDQHdW5pMDMxMgd1bmkwMzI2B3VuaTAzMjcHdW5pMDMyOAd1bmkwMzM1B3VuaTAzMzYHdW5pMDMzNwd1bmkwMzM4CWNhcm9uLmFsdAd1bmlFMEZGB3VuaUVGRkQHdW5pRjAwMAAAAQAB//8ADwABAAAADAAAAAAAWAACAAwABABZAAEAWwBcAAEAXwBpAAEAawDlAAEA5wDoAAEA6wD1AAEA9wEXAAEBnwGfAAEBogGiAAEBuwG7AAEB0wHUAAEB1wHqAAMAAgADAdcB2wACAd0B4wACAeQB5QABAAAAAQAAAAoA2gKqAAJERkxUAA5sYXRuAB4ABAAAAAD//wADAAAACwAWADoACUFaRSAARkNBVCAAUkNSVCAAXktBWiAAak1PTCAAdk5MRCAAglJPTSAAjlRBVCAAmlRSSyAApgAA//8AAwABAAwAFwAA//8AAwACAA0AGAAA//8AAwADAA4AGQAA//8AAwAEAA8AGgAA//8AAwAFABAAGwAA//8AAwAGABEAHAAA//8AAwAHABIAHQAA//8AAwAIABMAHgAA//8AAwAJABQAHwAA//8AAwAKABUAIAAha2VybgDIa2VybgDQa2VybgDYa2VybgDga2VybgDoa2VybgDwa2VybgD4a2VybgEAa2VybgEIa2VybgEQa2VybgEYbWFyawEgbWFyawEobWFyawEwbWFyawE4bWFyawFAbWFyawFIbWFyawFQbWFyawFYbWFyawFgbWFyawFobWFyawFwbWttawF4bWttawGAbWttawGIbWttawGQbWttawGYbWttawGgbWttawGobWttawGwbWttawG4bWttawHAbWttawHIAAAAAgAAAAEAAAACAAAAAQAAAAIAAAABAAAAAgAAAAEAAAACAAAAAQAAAAIAAAABAAAAAgAAAAEAAAACAAAAAQAAAAIAAAABAAAAAgAAAAEAAAACAAAAAQAAAAIAAgADAAAAAgACAAMAAAACAAIAAwAAAAIAAgADAAAAAgACAAMAAAACAAIAAwAAAAIAAgADAAAAAgACAAMAAAACAAIAAwAAAAIAAgADAAAAAgACAAMAAAACAAQABQAA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AHYAd2FhbHQCzGFhbHQC1GFhbHQC3GFhbHQC5GFhbHQC7GFhbHQC9GFhbHQC/GFhbHQDBGFhbHQDDGFhbHQDFGFhbHQDHGNjbXADJGNjbXADKmNjbXADMGNjbXADNmNjbXADPGNjbXADQmNjbXADSGNjbXADTmNjbXADVGNjbXADWmNjbXADYGRub20DZmRub20DbGRub20DcmRub20DeGRub20DfmRub20DhGRub20DimRub20DkGRub20DlmRub20DnGRub20DomZyYWMDqGZyYWMDsmZyYWMDvGZyYWMDxmZyYWMD0GZyYWMD2mZyYWMD5GZyYWMD7mZyYWMD+GZyYWMEAmZyYWMEDGxvY2wEFmxvY2wEHGxvY2wEImxvY2wEKGxvY2wELmxvY2wENGxvY2wEOmxvY2wEQGxvY2wERm51bXIETG51bXIEUm51bXIEWG51bXIEXm51bXIEZG51bXIEam51bXIEcG51bXIEdm51bXIEfG51bXIEgm51bXIEiG9yZG4Ejm9yZG4Elm9yZG4Enm9yZG4Epm9yZG4Erm9yZG4Etm9yZG4Evm9yZG4Exm9yZG4Ezm9yZG4E1m9yZG4E3nBudW0E5nBudW0E7HBudW0E8nBudW0E+HBudW0E/nBudW0FBHBudW0FCnBudW0FEHBudW0FFnBudW0FHHBudW0FInN1YnMFKHN1YnMFLnN1YnMFNHN1YnMFOnN1YnMFQHN1YnMFRnN1YnMFTHN1YnMFUnN1YnMFWHN1YnMFXnN1YnMFZHN1cHMFanN1cHMFcHN1cHMFdnN1cHMFfHN1cHMFgnN1cHMFiHN1cHMFjnN1cHMFlHN1cHMFmnN1cHMFoHN1cHMFpnRudW0FrHRudW0FsnRudW0FuHRudW0FvnRudW0FxHRudW0FynRudW0F0HRudW0F1nRudW0F3HRudW0F4nRudW0F6AAAAAIAAAABAAAAAgAAAAEAAAACAAAAAQAAAAIAAAABAAAAAgAAAAEAAAACAAAAAQAAAAIAAAABAAAAAgAAAAEAAAACAAAAAQAAAAIAAAABAAAAAgAAAAEAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABAAIAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAABABAAAAADABEAEgATAAAAAwARABIAEwAAAAMAEQASABMAAAADABEAEgATAAAAAwARABIAEwAAAAMAEQASABMAAAADABEAEgATAAAAAwARABIAEwAAAAMAEQASABMAAAADABEAEgATAAAAAwARABIAEwAAAAEACwAAAAEABAAAAAEACgAAAAEABwAAAAEABgAAAAEAAwAAAAEABQAAAAEACAAAAAEACQAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAEADwAAAAIAFAAVAAAAAgAUABUAAAACABQAFQAAAAIAFAAVAAAAAgAUABUAAAACABQAFQAAAAIAFAAVAAAAAgAUABUAAAACABQAFQAAAAIAFAAVAAAAAgAUABUAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAAwAAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA0AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABAA4AAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAAAABABYAHAA6AEIASgBUAF4AaABwAHgAgACIAJAAmACgAKgAsAC4AMAAyADQANgA4gDsAPQA/AEEAQwBFAEcAAEAAAABAnIAAwAAAAECmAAGAAAAAgDaAOwABgAAAAIA9gEIAAYAAAACARABJAABAAAAAQEuAAEAAAABATQAAQAAAAEBOgABAAAAAQE4AAEAAAABATYAAQAAAAEBNAABAAAAAQEyAAEAAAABATAAAQAAAAEBVgABAAAAAQFUAAEAAAABAVIAAQAAAAEBUAABAAAAAQFOAAEAAAABAUwABgAAAAIBSgFcAAYAAAACAWQBdgAEAAAAAQF+AAEAAAABAYoAAQAAAAEDDAABAAAAAQMKAAQAAAABAwwAAQAAAAEDIgABAAAAAQMgAAMAAAABAyYAAQMuAAEAAAAXAAMAAAABAxQAAgMsAxwAAQAAABcAAwABAyIAAQMoAAAAAQAAABgAAwABAxwAAQMiAAAAAQAAABgAAwAAAAIDFgMcAAEDFgABAAAAGQADAAAAAgMOAwgAAQMOAAEAAAAZAAIDAAAEAGgAbwD0APsAAgLyAAQAaABvAPQA+wABAvAABgABAuoABgABAuQABgABAt4ABgABAtgABgACAtgAFAEyATMBNAE1ATYBNwE4ATkBOgE7ATIBMwE0ATUBNgE3ATgBOQE6ATsAAQK0AB4AAQKuADwAAQKoADIAAQKiACgAAQKm/+kAAQKWADIAAwABAqAAAQKmAAAAAQAAABoAAwABAp4AAQKUAAAAAQAAABoAAwABAmwAAQKWAAAAAQAAABsAAwABAloAAQKMAAAAAQAAABsAAQKCAAEACAABAAQB0wADANsBbgACAnQAFAEeAR8BIAEhASIBIwEkASUBJgEnAR4BHwEgASEBIgEjASQBJQEmAScAAgJQABQBGAA9ARkAaABvARgBGQD0APsBRgFHAUgBSQFKAUsBTAFNAU4BTwFkAAECTgAgAEYATABSAF4AagB2AIIAjgCaAKYAsgC+AMoA0ADWANwA4gDoAO4A9AD6AQABBgEKAQ4BEgEWARoBHgEiASYBKgACALoAvwACAMYAxwAFATIBPAFaAVABRgAFATMBPQFbAVEBRwAFATQBPgFcAVIBSAAFATUBPwFdAVMBSQAFATYBQAFeAVQBSgAFATcBQQFfAVUBSwAFATgBQgFgAVYBTAAFATkBQwFhAVcBTQAFAToBRAFiAVgBTgAFATsBRQFjAVkBTwACATIBHgACATMBHwACATQBIAACATUBIQACATYBIgACATcBIwACATgBJAACATkBJQACAToBJgACATsBJwABAR4AAQEfAAEBIAABASEAAQEiAAEBIwABASQAAQElAAEBJgABAScAAQBCAAEAAgEwAAIAPQDHAAEBLgACAAoAFAABAAQARQACAXcAAQAEANAAAgF3AAEAkv/2AAIBEgAEARgBGQEYARkAAQACALkAxQACAAIB1wHbAAAB3QHjAAUAAgABAeUB6gAAAAEAAQC7AAEAAQDFAAEAAQAzAAEAAQA8AAEAAQDMAAEAAQF3AAEAAQBBAAEABABmAG4A8gD6AAEAAQC5AAIAAQEeATEAAAACAAEBHgEnAAAAAQABAXsAAQABAWQAAgABAVABWQAAAAIAAQFGAU8AAAABAAIABACMAAEAAgBPANsAAQABAEkAAgABASgBOwAAAAEAFAAEADwATwBmAG4AjADbAPIA+gFQAVEBUgFTAVQBVQFWAVcBWAFZAXsAAgADALkAuQAAAMUAxQABAR4BOwACAAEAAgA8AMUAAQACAEEAzAABAAQABABPAIwA2wAAAAAAAQAAAAA="});var Sd,Md=xt(()=>{Sd="data:font/ttf;base64,AAEAAAASAQAABAAgRFNJRwAAAAEAAMJIAAAACEdERUYKrAn/AACwYAAAAGxHUE9T8fvplwAAsMwAAAzyR1NVQi4cdq8AAL3AAAAEhk9TLzIYwZudAAABqAAAAGBjbWFwVKB2nwAACFwAAASYY3Z0IBWHBUsAAB1kAAAAYGZwZ23fz/LmAAAM9AAAD61nYXNwAAAAEAAAsFgAAAAIZ2x5ZnXHoBQAACD8AACB9GhlYWQXCC9dAAABLAAAADZoaGVhBn0A4gAAAWQAAAAkaG10eIXagBAAAAIIAAAGVGxvY2EAZyFaAAAdxAAAAzhtYXhwAwkQrQAAAYgAAAAgbmFtZWZXh+EAAKLwAAAEPnBvc3Qn06b5AACnMAAACSVwcmVwzKRWIQAAHKQAAAC9AAEAAAABAADfypotXw889QAPA+gAAAAA2o5YYAAAAADavJNhAAD+8gKaA8cAAAAGAAIAAAAAAAAAAQAAA+D+ygAAAlgAAP4wApoAAQAAAAAAAAAAAAAAAAAAAY8AAQAAAZsATAAGAFIABAACACYAXQCWAAAApA+tAAMAAwAEAlgBkAAFAAACigJYAAAASwKKAlgAAAFeADIBKgAAAgsFCQQCAQQBAwAAAAcAAAAAAAAAAAAAAABDRgAAAEAADSXKA+D+ygAAA+ABNiAAAJMAAAAAAfACvAAAACAAAwJYAFgCWAAhAlgAIQJYACECWAAhAlgAIQJYACECWAAhAlgAIQJYACECWAAhAlgAAgJYAAICWABCAlgAIAJYACACWAAgAlgAIAJYACACWABCAlgABwJYAEICWAAHAlgAVgJYAFYCWABWAlgAVgJYAFYCWABWAlgAVgJYAFYCWABWAlgAVgJYAFYCWABbAlgAJgJYACYCWAAmAlgAJgJYAC8CWABjAlgAYwJYAGMCWABjAlgAYwJYAGMCWABjAlgAYwJYAGMCWABjAlgAXwJYAFICWABSAlgAVwJYAEoCWABXAlgAVwJYAFcCWAAUAlgAMgJYADkCWAA5AlgAOQJYADkCWAA5AlgAHAJYABwCWAAcAlgAHAJYABwCWAAcAlgAHAJYABwCWAAbAlgAHAJYABUCWABKAlgASgJYABwCWABSAlgAUgJYAFICWABSAlgAQAJYAEACWABAAlgAQAJYAEACWAAnAlgARgJYAEYCWABGAlgARgJYADkCWAA5AlgAOQJYADkCWAA5AlgAOQJYADkCWAA5AlgAOQJYADkCWAA5AlgAGwJYAAICWAACAlgAAgJYAAICWAACAlgAKQJYAB8CWAAfAlgAHwJYAB8CWAAfAlgAHwJYAEUCWABFAlgARQJYAEUCWABTAlgAUwJYAFMCWABTAlgAUwJYAFMCWABTAlgAUwJYAFMCWABTAlgAEgJYABICWABOAlgASgJYAEoCWABKAlgASgJYAEoCWABBAlgAOwJYABACWABBAlgAQgJYAEICWABCAlgAQgJYAEICWABCAlgAQgJYAEICWABCAlgAQgJYAEICWABCAlgAXAJYAD4CWAA+AlgAPgJYAD4CWABTAlgAZAJYAGQCWABkAlgAZAJYAGQCWABkAlgAZAJYAGQCWABkAlgAZAJYAD0CWABvAlgAbwJYAEsCWABLAlgASwJYAEsCWABLAlgASwJYACUCWABYAlgAWAJYAFgCWABYAlgAWAJYADwCWAA8AlgAPAJYADwCWAA8AlgAPAJYADwCWAA8AlgALAJYADwCWAAXAlgATgJYAE4CWABEAlgAVAJYAFQCWABUAlgAVAJYAFYCWABWAlgAVgJYAFYCWABWAlgAQQJYAFACWABQAlgAUAJYAFACWABTAlgAUwJYAFMCWABTAlgAUwJYAFMCWABTAlgAUwJYAFMCWABTAlgAUwJYACECWAAOAlgADgJYAA4CWAAOAlgADgJYAEUCWAAuAlgALgJYAC4CWAAuAlgALgJYAC4CWABmAlgAZgJYAGYCWABmAlgAQQJYAEECWABBAlgAQQJYAEECWABBAlgAQQJYAEECWABBAlgAQQJYABcCWAASAlgAQQJYAEECWABBAlgAQQJYAGQCWAB8AlgAaQJYAB0CWAAhAlgARgJYAEoCWAA+AlgAMwJYADoCWAA0AlgAPwJYAEECWAA7AlgANwJYAEECWAA2AlgAngJYAKICWACYAlgAkgJYAGoCWABqAlgAagJYAGoCWADhAlgApAJYAOECWACkAlgAGQJYAOECWADhAlgARwJYAEcCWADhAlgAsAJYAEACWAARAlgAUwJYAFMCWADWAlgA1gJYAJkCWACjAlgAcgJYAHACWACrAlgArwJYAIcCWACHAlgAXwJYAAACWABLAlgA3wJYAG0CWABbAlgAbQJYAMoCWADfAlgAaAJYAG8CWADHAlgAxAJYAJICWAD+AlgA0QJYAF8CWABrAlgAXwJYANMCWADRAlgAAAJYAAACWAAAAlgATgJYAF8CWAAuAlgAAgJYABkCWAAjAlgALAJYAB8CWABTAlgASwJYAEsCWABWAlgASwJYAEsCWABLAlgAcwJYAGoCWABLAlgASwJYAEsCWABPAlgATwJYAEsCWAA2AlgADAJYADQCWAAdAlgALAJYACACWABDAlgAIQJYAFMCWAA4AlgAEwJYAAwCWAAnAlgALwJYACMCWAA8AlgAPQJYAAoCWAAKAlgAFwJYAJoCWAECAlgBAgJYAHQCWABCAlgAdAJYABkAAACYAAAA5gAAAMMAAADDAAAAlwAAARAAAACjAAAAowAAAJ8AAADDAAAAkAAAAIkAAADTAAAAwgAAAOwAAADVAlgAwwCfAKMA7ACjAJgA5gDDAJcAiQDVAMMAkAAAAAIAAAADAAAAFAADAAEAAAAUAAQEhAAAAHQAQAAFADQADQAvADkAfgEHARsBIwExATcBSAFbAWUBfgGPAZIB/QIbAlkCxwLdAwQDCAMMAxIDKAPAHoUevR7zHvkgFCAaIB4gIiAmIDAgOiBEIHQgrCC9IRMhIiEmIS4iAiIGIg8iEiIVIhoiHiIrIkgiYCJlJcr//wAAAA0AIAAwADoAoAEKAR4BKAE2ATkBTAFeAWgBjwGSAfwCGAJZAsYC2AMAAwYDCgMSAyYDwB6AHrwe8h74IBMgGCAcICAgJiAwIDkgRCB0IKwgvSETISIhJiEuIgIiBiIPIhEiFSIaIh4iKyJIImAiZCXK//8BPgAAANYAAAAAAAAAAAAAAAAAAAAAAAAAAP7J/74AAAAA/kEAAAAAAAAAAAAA/nj+Zf1FAAAAAAAAAADhIQAAAAAAAOD54T7hBuDT4KLgo+CU4GjgVOBA4E/fat9h31kAAN8/31DfRt863xje+gAA26UAAQAAAHIAAACOARYB5AIGAhACIgIkAkICYAJuAAAAAAKWApgAAAKcAp4CqAKwArQAAAAAAAACsgK8Ar4CwAAAAsACxALIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKwAAAAAAAAAAAAAAAAAqYAAAAAAUkBIAFBAScBTgFtAXEBQgEsAS0BJgFVARwBMgEbASgBHQEeAVwBWQFbASIBcAABAA0ADgATABcAIgAjACcAKAAyADMANQA7ADwAQQBMAE4ATwBTAFkAXQBoAGkAbgBvAHUBMAEpATEBYwE2AZUAeQCFAIYAiwCPAJsAnACgAKEAqwCsAK4AtAC1ALoAxQDHAMgAzADSANYA4QDiAOcA6ADuAS4BeAEvAWEBSgEhAUwBUgFNAVMBeQFzAZMBdAEDAT0BYgEzAXUBlwF3AV8BFAEVAY4BawFyASQBkQETAQQBPgEZARgBGgEjAAYAAgAEAAoABQAJAAsAEQAeABgAGwAcAC4AKQArACwAFABAAEYAQgBEAEoARQFXAEkAYgBeAGAAYQBwAE0A0QB+AHoAfACCAH0AgQCDAIkAlgCQAJMAlACnAKMApQCmAIwAuQC/ALsAvQDDAL4BWADCANsA1wDZANoA6QDGAOsABwB/AAMAewAIAIAADwCHABIAigAQAIgAFQCNABYAjgAfAJcAGQCRAB0AlQAgAJgAGgCSACQAnQAmAJ8AJQCeADEAqgAvAKgAKgCkADAAqQAtAKIANACtADYArwA4ALEANwCwADkAsgA6ALMAPQC2AD8AuAA+ALcASADBAEMAvABHAMAASwDEAFAAyQBSAMsAUQDKAFQAzQBWAM8AVQDOAFsA1ABaANMAZwDgAGQA3QBfANgAZgDfAGMA3ABlAN4AawDkAHEA6gByAHYA7wB4APEAdwDwAAwAhABXANAAXADVAZIBkAGPAZQBmQGYAZoBlgGAAYEBhAGIAYkBhgF/AX4BhwGCAYUAbQDmAGoA4wBsAOUAIQCZAHMA7AB0AO0BOwE8ATcBOQE6ATgBegF8ASUBaQFWAV4BXbAALCCwAFVYRVkgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbkIAAgAY2MjYhshIbAAWbAAQyNEsgABAENgQi2wASywIGBmLbACLCMhIyEtsAMsIGSzAxQVAEJDsBNDIGBgQrECFENCsSUDQ7ACQ1R4ILAMI7ACQ0NhZLAEUHiyAgICQ2BCsCFlHCGwAkNDsg4VAUIcILACQyNCshMBE0NgQiOwAFBYZVmyFgECQ2BCLbAELLADK7AVQ1gjISMhsBZDQyOwAFBYZVkbIGQgsMBQsAQmWrIoAQ1DRWNFsAZFWCGwAyVZUltYISMhG4pYILBQUFghsEBZGyCwOFBYIbA4WVkgsQENQ0VjRWFksChQWCGxAQ1DRWNF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AG8AbABvAHAAaABvAG4AIABGAG8AdQBuAGQAcgB5AGgAdAB0AHAAcwA6AC8ALwB3AHcAdwAuAGMAbwBsAG8AcABoAG8AbgAtAGYAbwB1AG4AZAByAHkALgBvAHIAZwBoAHQAdABwAHMAOgAvAC8AdwB3AHcALgBjAG8AbABvAHAAaABvAG4ALQBmAG8AdQBuAGQAcgB5AC4AbwByAGcAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAaQBzACAAYQB2AGEAaQBsAGEAYgBsAGUAIAB3AGkAdABoACAAYQAgAEYAQQBRACAAYQB0ADoAIABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAAAAAgAAAAAAAP+cADIAAAABAAAAAAAAAAAAAAAAAAAAAAGbAAAAJADJAQIAxwBiAK0BAwEEAGMArgCQAQUAJQAmAP0A/wBkAQYAJwDpAQcBCAAoAGUBCQEKAMgAygELAMsBDAENAQ4AKQAqAPgBDwEQACsALADMAREAzQDOAPoAzwESARMBFAAtAC4BFQAvARYBFwEYARkA4gAwADEBGgEbARwAZgAyANABHQDRAGcA0wEeAR8AkQCvALAAMwDtADQANQEgASEBIgA2ASMA5AD7ASQBJQA3ASYBJwEoADgA1AEpANUAaADWASoBKwEsAS0BLgA5ADoBLwEwATEBMgA7ADwA6wEzALsBNAE1AD0BNgDmATcARABpATgAawBsAGoBOQE6AG4AbQCgATsARQBGAP4BAABvATwARwDqAT0BAQBIAHABPgE/AHIAcwFAAHEBQQFCAUMBRABJAEoA+QFFAUYASwBMANcAdAFHAHYAdwB1AUgBSQFKAE0ATgFLAE8BTAFNAU4BTwDjAFAAUQFQAVEBUgB4AFIAeQFTAHsAfAB6AVQBVQChAH0AsQBTAO4AVABVAVYBVwFYAFYBWQDlAPwBWgCJAFcBWwFcAV0AWAB+AV4AgACBAH8BXwFgAWEBYgFjAFkAWgFkAWUBZgFnAFsAXADsAWgAugFpAWoAXQFrAOcBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0AnQCeAJsAEwAUABUAFgAXABgAGQAaABsAHAF+AX8BgAGBAYIBgwGEALwA9AD1APYAEQAPAB0AHgCrAAQAowAiAKIAwwCHAA0ABgASAD8BhQGGAAsADABeAGAAPgBAABABhwCyALMAQgDEAMUAtAC1ALYAtwCpAKoAvgC/AAUACgGIAYkBigGLAYwBjQADAY4BjwCEAL0ABwGQAKYBkQCFAJYBkgAOAO8A8AC4ACAAjwAhAB8AlQCUAJMApwBhAKQAQQCSAJwBkwGUAJoAmQClAZUAmAAIAMYAuQAjAAkAiACGAIsAigCMAIMAXwDoAIIBlgDCAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwCNANsA4QDeANgAjgDcAEMA3wDaAOAA3QDZBkFicmV2ZQdBbWFjcm9uB0FvZ29uZWsHQUVhY3V0ZQpDZG90YWNjZW50BkRjYXJvbgZEY3JvYXQGRWJyZXZlBkVjYXJvbgpFZG90YWNjZW50B0VtYWNyb24HRW9nb25lawd1bmkxRUJDB3VuaTAxMjIKR2RvdGFjY2VudAZJYnJldmUHSW1hY3JvbgdJb2dvbmVrBkl0aWxkZQd1bmkwMTM2BkxhY3V0ZQZMY2Fyb24HdW5pMDEzQgRMZG90Bk5hY3V0ZQZOY2Fyb24HdW5pMDE0NQZPYnJldmUNT2h1bmdhcnVtbGF1dAdPbWFjcm9uBlJhY3V0ZQZSY2Fyb24HdW5pMDE1NgZTYWN1dGUHdW5pMDIxOAd1bmkwMThGBlRjYXJvbgd1bmkwMTYyB3VuaTAyMUEGVWJyZXZlDVVodW5nYXJ1bWxhdXQHVW1hY3JvbgdVb2dvbmVrBVVyaW5nBlV0aWxkZQZXYWN1dGULV2NpcmN1bWZsZXgJV2RpZXJlc2lzBldncmF2ZQtZY2lyY3VtZmxleAZZZ3JhdmUHdW5pMUVGOAZaYWN1dGUKWmRvdGFjY2VudAZhYnJldmUHYW1hY3Jvbgdhb2dvbmVrB2FlYWN1dGUKY2RvdGFjY2VudAZkY2Fyb24GZWJyZXZlBmVjYXJvbgplZG90YWNjZW50B2VtYWNyb24HZW9nb25lawd1bmkxRUJEB3VuaTAyNTkHdW5pMDEyMwpnZG90YWNjZW50BmlicmV2ZQdpbWFjcm9uB2lvZ29uZWsGaXRpbGRlB3VuaTAxMzcGbGFjdXRlBmxjYXJvbgd1bmkwMTNDBGxkb3QGbmFjdXRlBm5jYXJvbgd1bmkwMTQ2Bm9icmV2ZQ1vaHVuZ2FydW1sYXV0B29tYWNyb24GcmFjdXRlBnJjYXJvbgd1bmkwMTU3BnNhY3V0ZQd1bmkwMjE5BnRjYXJvbgd1bmkwMTYzB3VuaTAyMUIGdWJyZXZlDXVodW5nYXJ1bWxhdXQHdW1hY3Jvbgd1b2dvbmVrBXVyaW5nBnV0aWxkZQZ3YWN1dGULd2NpcmN1bWZsZXgJd2RpZXJlc2lzBndncmF2ZQt5Y2lyY3VtZmxleAZ5Z3JhdmUHdW5pMUVGOQZ6YWN1dGUKemRvdGFjY2VudAZhLnNzMDILYWFjdXRlLnNzMDILYWJyZXZlLnNzMDIQYWNpcmN1bWZsZXguc3MwMg5hZGllcmVzaXMuc3MwMgthZ3JhdmUuc3MwMgxhbWFjcm9uLnNzMDIMYW9nb25lay5zczAyCmFyaW5nLnNzMDILYXRpbGRlLnNzMDIHYWUuc3MwMgxhZWFjdXRlLnNzMDIGZy5zczAzC2dicmV2ZS5zczAzDHVuaTAxMjMuc3MwMw9nZG90YWNjZW50LnNzMDMGZi5zczA1CnRocmVlLnNzMDQIc2l4LnNzMDQJbmluZS5zczA0B3VuaTAwQjkHdW5pMDBCMgd1bmkwMEIzB3VuaTIwNzQKY29tbWEuc3MwMQ5zZW1pY29sb24uc3MwMQd1bmkwMEFEE3F1b3Rlc2luZ2xiYXNlLnNzMDERcXVvdGVkYmxiYXNlLnNzMDERcXVvdGVkYmxsZWZ0LnNzMDEScXVvdGVkYmxyaWdodC5zczAxDnF1b3RlbGVmdC5zczAxD3F1b3RlcmlnaHQuc3MwMQd1bmkwMEEwAkNSBEV1cm8HdW5pMjBCRAd1bmkyMjE1B3VuaTIxMjYHdW5pMjIwNgd1bmkwMEI1B3VuaTIxMTMJZXN0aW1hdGVkB3VuaTAzMDgHdW5pMDMwNwlncmF2ZWNvbWIJYWN1dGVjb21iB3VuaTAzMEILdW5pMDMwQy5hbHQHdW5pMDMwMgd1bmkwMzBDB3VuaTAzMDYHdW5pMDMwQQl0aWxkZWNvbWIHdW5pMDMwNAd1bmkwMzEyB3VuaTAzMjYHdW5pMDMyNwd1bmkwMzI4AAAAAAEAAf//AA8AAQACAA4AAAAAAAAASAACAAkAAQATAAEAFQAVAAEAFwCLAAEAjQCZAAEAmwCgAAEAogCqAAEArADQAAEA0gECAAEBfgGNAAMAAQACAAAADAAAABQAAQACAYsBjAACAAIBfgGCAAABhAGKAAUAAQAAAAoAPABYAAJERkxUAA5sYXRuABIAGgAAABYAA0NBVCAAFk1PTCAAFlJPTSAAFgAA//8AAgAAAAEAAm1hcmsADm1rbWsAFAAAAAEAAAAAAAIAAQACAAMACAuCC8gABAAAAAEACAABAAwAFgAEAEoAmAACAAEBfgGNAAAAAgAIAAEAEwAAABUAFQATABcAiwAUAI0AmQCJAJsAoACWAKIAqgCcAKwA0AClANIBAgDKABAAAAvYAAAL2AAAC8YAAAvMAAAL0gABAEIAAAvYAAAL2AAAC9gAAAvYAAAL2AAAC9gAAAveAAILUAACC1YAAwBIAAEA1gHwAAEBgQAAAPsI0AAACs4H2gjWAAAKzgfaCKYAAArOB9oI3AAACs4H2gjEAAAKzgfaCNYAAArOB9oIrAAACs4H2gjQAAAKzgfaCLIAAArOB9oIygAACs4H2gfgAAAKzgAAB+YAAArOAAAI0AAACs4AAAf4AAAICgAAB+wAAAgKAAAH8gAACAoAAAf4AAAH/gAACAQAAAgKAAAIEAAACBwAAAgWAAAIHAAACJQAAAiaCEYIOgAACJoIRggiAAAImghGCCgAAAiaCEYIKAAACJoIRgguAAAImghGCDQAAAiaCEYIOgAACJoIRgiUAAAImghGCJQAAAiaCEYIQAAACJoIRgjQAAAKzgAACFIAAArOAAAITAAACs4AAAhSAAAKMgAACFgAAArOAAAI0AAACs4AAAjQAAAKzgheCNYAAArOCF4IpgAACs4IXgjcAAAKzgheCMQAAArOCF4I4gAACs4IXgjWAAAKzgheCKwAAArOCF4I0AAACs4IXgjKAAAKzgheCGQAAAmWAAAI0AAACs4AAAjQAAAKMgAACHYIfAmWAAAIagh8CZYAAAh2CHwJlgAACHYIfAhwAAAIdgh8CZYAAAiCCIgIjgAACNAAAArOAAAI0AAACs4AAAjWAAAKzgAACNwAAArOAAAI0AAACjIAAAjKAAAKzgAACNAIuArOCKAI1gi4Cs4IoAimCLgKzgigCNwIuArOCKAIxAi4Cs4IoAjWCLgKzgigCNwIuArOCKAIrAi4Cs4IoAjQCLgKzgigCMoIuArOCKAIlAAACJoAAAjQAAAKzgAACNAAAArOAAAI0Ai4Cs4IoAjQAAAKzgAACNYAAArOAAAI3AAACs4AAAjQAAAKMgAACNAAAArOAAAI1gAACs4AAAjcAAAKzgAACNAAAAosAAAI0AAACjIAAAjQAAAKzgAACNAAAArOAAAI3AAACs4AAAjQAAAKLAAACNAAAAoyAAAI0Ai4Cs4IvgjWCLgKzgi+CKYIuArOCL4I3Ai4Cs4IvgjECLgKzgi+CNYIuArOCL4I3Ai4Cs4IvgisCLgKzgi+CNAIuArOCL4Isgi4Cs4IvgjKCLgKzgi+CNAAAArOAAAI0AAACs4AAAjWAAAKzgAACNwAAArOAAAIxAAACs4AAAjWAAAKzgAACNAAAArOAAAI0AAACs4AAAjWAAAKzgAACNwAAArOAAAIxAAACs4AAAjWAAAKzgAACMoAAArOAAAI0AAACs4AAAjWAAAKzgAACNwAAArOAAAI4gAACs4AAAkGAAAKzgkYCPoAAArOCRgI6AAACs4JGAjuAAAKzgkYCPQAAArOCRgI+gAACs4JGAkAAAAKzgkYCQYAAArOCRgJDAAACs4JGAkSAAAKzgkYC4oAAArOAAAKwgAACs4AAAkeAAAKzgAACTAAAAlCAAAJJAAACUIAAAkqAAAJQgAACTAAAAk2AAAJPAAACUIAAAlaCWAKzgAACUgJTglUAAAJWglgCs4AAAmKAAAJlgmcCX4AAAmWCZwJZgAACZYJnAlsAAAJlgmcCWwAAAmWCZwJcgAACZYJnAl4AAAJlgmcCX4AAAmWCZwJhAAACZYJnAmKAAAJlgmcCZAAAAmWCZwLtgAACaIAAAmoAAAJwAAACa4AAAnAAAAJtAAACcAAAAm6AAAJwAAACcYAAAqqAAALigAACs4JzArCAAAKzgnMC9QAAArOCcwLzgAACs4JzAuw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ABoAAAAWAANDQVQgADJNT0wgAFBST00gAG4AAP//AAsAAAABAAIABgAHAAgACQAKAAsADAANAAD//wAMAAAAAQACAAMABgAHAAgACQAKAAsADAANAAD//wAMAAAAAQACAAQABgAHAAgACQAKAAsADAANAAD//wAMAAAAAQACAAUABgAHAAgACQAKAAsADAANAA5hYWx0AFZjY21wAF5mcmFjAGRsb2NsAGpsb2NsAHBsb2NsAHZvcmRuAHxzYWx0AIJzczAxAIhzczAyAI5zczAzAJRzczA0AJpzczA1AKBzdXBzAKYAAAACAAAAAQAAAAEAAgAAAAEACwAAAAEABwAAAAEABgAAAAEABQAAAAEADAAAAAEADgAAAAEADwAAAAEAEAAAAAEAEQAAAAEAEgAAAAEAEwAAAAEACgAUACoAzADyAToBOgFOAU4BaAGgAcAB4AH4AjQCfAKeAp4C0ALoAwADHgABAAAAAQAIAAIATgAkAQMBBABXAFwA8wD0APUA9gD3APgA+QD6APsA/AD9AQIA/gD/AQABAQEEANAA1QETARQBFgERARIBKgErAUMBRAFFAUYBRwFIAAEAJAABAEEAVgBbAHoAewB8AH0AfgB/AIAAgQCCAIMAhACbAJwAnQCeAJ8AugDPANQBBwEIAQoBDAEPARwBHgE3ATgBOQE6ATsBPAADAAAAAQAIAAEAFgACAAoAEAACAPIBAwACARABFQABAAIAeQEJAAYAAAACAAoAHAADAAAAAQBMAAEALgABAAAAAwADAAAAAQA6AAIAFAAcAAEAAAAEAAEAAgGMAY0AAgACAX4BggAAAYQBigAFAAEAAAABAAgAAQAGAAEAAQABAKEAAQAAAAEACAABAAYAAQABAAQAVgBbAM8A1AAGAAAAAgAKAB4AAwAAAAIAPgAoAAEAPgABAAAACAADAAAAAgBKABQAAQBKAAEAAAAJAAEAAQEkAAQAAAABAAgAAQAIAAEADgABAAEArgABAAQAsgACASQABAAAAAEACAABAAgAAQAOAAEAAQA1AAEABAA5AAIBJAABAAAAAQAIAAEABgAMAAIAAQEHAQoAAAAEAAAAAQAIAAEALAACAAoAIAACAAYADgEZAAMBKAEKARgAAwEoAQgAAQAEARoAAwEoAQoAAQACAQcBCQAGAAAAAgAKACQAAwABACwAAQASAAAAAQAAAA0AAQACAAEAeQADAAEAEgABABwAAAABAAAADQACAAEBBgEPAAAAAQACAEEAugABAAAAAQAIAAIADgAEAQMBBAEDAQQAAQAEAAEAQQB5ALoAAQAAAAEACAACABYACAEqASsBQwFEAUUBRgFHAUgAAQAIARwBHgE3ATgBOQE6ATsBPAABAAAAAQAIAAEABgB5AAIAAQB5AIQAAAABAAAAAQAIAAEABgBiAAIAAQCcAJ8AAAABAAAAAQAIAAIADAADARABEQESAAEAAwEJAQwBDwABAAAAAQAIAAEABgBnAAEAAQCbAAAAAAABAAAAAA=="});var j_=Vd(()=>{mn();wu();Au();Pu();Du();fc();Ou();pd();_c();md();_d();vd();Md();var yc=document.getElementById("c"),hi=new Lo({canvas:yc,antialias:!0,alpha:!1,powerPreference:"low-power",stencil:!1});hi.toneMapping=yi;hi.outputColorSpace=St;hi.setClearColor(395019,1);var Yo=new Os,Wt=new Bt(pc,1,.1,100);Wt.position.set(0,0,xs);var Ei=new Bo(hi),Rd=new _s(new Se(1,1),.42,.55,.78);Ei.addPass(new zo(Yo,Wt));Ei.addPass(Rd);Ei.addPass(new ko);var ze={renderer:hi,scene:Yo,camera:Wt,aspect:1,pixelRatio:1,time:0,current:null,paused:!1,dirty:!0,tex:{}},Pd=new Se,Id=-1e9,H_=matchMedia("(prefers-reduced-motion: reduce)").matches,bd=new URLSearchParams(location.search).get("t");function W_(){return H_?0:ct.motion/60}function Dd(){hi.toneMappingExposure=1.25*(ct.brightness/100),ze.dirty=!0}function vc(){Rd.enabled=ct.bloom&&!ct.eco,ze.dirty=!0}function Ld(){document.getElementById("clock").hidden=!ct.showClock}function Y_(){document.body.dataset.scene=String(ct.scene)}function Mc(){let i=window.innerWidth,e=window.innerHeight;i>0&&e>0&&(ze.pixelRatio=ct.eco?1:Math.min(window.devicePixelRatio||1,1.5),hi.setPixelRatio(ze.pixelRatio),hi.setSize(i,e,!1),Ei.setPixelRatio(ze.pixelRatio),Ei.setSize(i,e),ze.aspect=i/e,Wt.aspect=ze.aspect,Wt.updateProjectionMatrix(),ze.dirty=!0)}var $_=1337;function $o(){!ze.tex.logo||!ze.tex.silhouette||(ze.current&&(Yo.remove(ze.current.group),ze.current.dispose()),ze.current=fd(ct.scene,ze,Fu($_),ze.tex),Yo.add(ze.current.group),Y_(),ze.dirty=!0)}var Td=0,K_=()=>{clearTimeout(Td),Td=setTimeout($o,160)};Nu(i=>{switch(i){case"scene":case"density":case"accent":case"nightComfort":K_();break;case"brightness":Dd();break;case"bloom":vc();break;case"eco":Mc(),vc();break;case"showLogo":ze.current&&ze.current.setLogoVisible(ct.showLogo),ze.dirty=!0;break;case"showClock":Ld();break;default:ze.dirty=!0}});window.livelyWallpaperPlaybackChanged=i=>{try{ze.paused=!!JSON.parse(i).IsPaused}catch{}};window.addEventListener("mousemove",i=>{Pd.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight*2-1)),Id=performance.now()});var Ed=0;window.addEventListener("resize",()=>{Mc(),clearTimeout(Ed),Ed=setTimeout($o,250)});yc.addEventListener("webglcontextlost",i=>i.preventDefault());yc.addEventListener("webglcontextrestored",()=>$o());var Tr=new Se;function q_(i,e){ct.parallax?performance.now()-Id<6e3?Tr.copy(Pd):Tr.set(Math.sin(e*.07)*.6,Math.sin(e*.053)*.4):Tr.set(0,0);let t=1-Math.pow(.001,i),n=oi.lerp(Wt.position.x,Tr.x*.42,t*.5),s=oi.lerp(Wt.position.y,Tr.y*.26,t*.5);(Math.abs(n-Wt.position.x)>1e-5||Math.abs(s-Wt.position.y)>1e-5)&&(ze.dirty=!0),Wt.position.x=n,Wt.position.y=s,Wt.lookAt(0,0,0)}function wd(){let i=new Date;document.getElementById("clock-time").textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),document.getElementById("clock-date").textContent=i.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}var Ad=performance.now(),Wo=0;function Nd(i){requestAnimationFrame(Nd);let e=Math.min((i-Ad)/1e3,.05);if(Ad=i,ze.paused||document.hidden||!ze.current)return;if(ct.eco){if(Wo+=e,Wo<1/30)return;e=Wo,Wo=0}let t=W_();ze.time+=e*t,q_(e,ze.time),t>0&&(ze.current.update(e*t,ze.time,ze.pixelRatio),ze.dirty=!0),ze.dirty&&(Ei.render(),ze.dirty=!1)}function Cd(i){return new Promise((e,t)=>new js().load(i,n=>{n.colorSpace=St,n.anisotropy=4,e(n)},void 0,t))}async function Z_(){try{let i=[new FontFace("Bebas Neue",`url(${yd})`),new FontFace("DM Mono",`url(${Sd})`)];for(let e of i)await e.load(),document.fonts.add(e)}catch(i){console.warn("fonts",i)}}function J_(){let i=document.createElement("canvas");i.width=1024,i.height=300;let e=i.getContext("2d");e.fillStyle="#fff",e.font='260px "Bebas Neue", Impact, sans-serif',e.textBaseline="middle",e.textAlign="center",e.fillText("FLOW",512,160);let t=new Zn(i);return t.colorSpace=St,t}(async()=>{Uu(),await Z_();let[i,e]=await Promise.all([Cd(gd).catch(()=>J_()),Cd(xd)]);if(ze.tex={logo:i,silhouette:e},Mc(),Dd(),vc(),Ld(),$o(),wd(),setInterval(wd,1e3),bd!==null){let t=Math.max(0,parseFloat(bd)||0);for(let n=0;n<t;n+=1/60)ze.time=n,ze.current.update(1/60,n,ze.pixelRatio);Wt.position.set(0,0,xs),Wt.lookAt(0,0,0),Ei.render(),window.__ready=!0;return}window.__ready=!0,requestAnimationFrame(Nd)})()});j_();})();
