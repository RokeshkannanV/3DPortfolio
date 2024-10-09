import{r as ge,b as O_,j as Xn,c as HM}from"./index-_1ve942z.js";const fl="165",kM={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G_=0,Hf=1,H_=2,VM=3,k_=0,Qu=1,ka=2,bi=3,Yi=0,Gn=1,yi=2,pr=0,Ps=1,kf=2,zf=3,Vf=4,z_=5,zr=100,V_=101,W_=102,X_=103,J_=104,K_=200,Y_=201,q_=202,Q_=203,Fu=204,Uu=205,Z_=206,j_=207,$_=208,ey=209,ty=210,ny=211,iy=212,ry=213,sy=214,oy=0,ay=1,ly=2,Ja=3,cy=4,uy=5,hy=6,dy=7,pl=0,fy=1,py=2,Ji=0,my=1,gy=2,vy=3,Op=4,_y=5,yy=6,xy=7,Wf="attached",Ay="detached",Zu=300,_r=301,Kr=302,Ka=303,Ya=304,Zo=306,Yr=1e3,ni=1001,Wo=1002,hn=1003,ju=1004,WM=1004,ws=1005,XM=1005,Qt=1006,Ho=1007,JM=1007,Ai=1008,KM=1008,qi=1009,My=1010,Sy=1011,qa=1012,Gp=1013,Ns=1014,ii=1015,ml=1016,Hp=1017,kp=1018,Os=1020,Ey=35902,wy=1021,Cy=1022,On=1023,Ty=1024,by=1025,Ls=1026,Gs=1027,zp=1028,Vp=1029,Ry=1030,Wp=1031,Xp=1033,Cu=33776,Tu=33777,bu=33778,Ru=33779,Xf=35840,Jf=35841,Kf=35842,Yf=35843,qf=36196,Qf=37492,Zf=37496,jf=37808,$f=37809,ep=37810,tp=37811,np=37812,ip=37813,rp=37814,sp=37815,op=37816,ap=37817,lp=37818,cp=37819,up=37820,hp=37821,Bu=36492,dp=36494,fp=36495,By=36283,pp=36284,mp=36285,gp=36286,Iy=2200,Py=2201,Ly=2202,Xo=2300,Jo=2301,Iu=2302,Cs=2400,Ts=2401,Qa=2402,$u=2500,Jp=2501,Dy=0,Kp=1,Nu=2,Fy=3200,Uy=3201,Qr=0,Ny=1,ur="",_i="srgb",xr="srgb-linear",eh="display-p3",gl="display-p3-linear",Za="linear",Ot="srgb",ja="rec709",$a="p3",YM=0,Ms=7680,qM=7681,QM=7682,ZM=7683,jM=34055,$M=34056,eS=5386,tS=512,nS=513,iS=514,rS=515,sS=516,oS=517,aS=518,vp=519,Oy=512,Gy=513,Hy=514,Yp=515,ky=516,zy=517,Vy=518,Wy=519,el=35044,lS=35048,cS=35040,uS=35045,hS=35049,dS=35041,fS=35046,pS=35050,mS=35042,gS="100",_p="300 es",Xi=2e3,tl=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let E0=1234567;const Ds=Math.PI/180,Ko=180/Math.PI;function si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function qt(r,e,t){return Math.max(e,Math.min(t,r))}function qp(r,e){return(r%e+e)%e}function vS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function _S(r,e,t){return r!==e?(t-r)/(e-r):0}function za(r,e,t){return(1-t)*r+t*e}function yS(r,e,t,n){return za(r,e,1-Math.exp(-t*n))}function xS(r,e=1){return e-Math.abs(qp(r,e*2)-e)}function AS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function MS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function SS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ES(r,e){return r+Math.random()*(e-r)}function wS(r){return r*(.5-Math.random())}function CS(r){r!==void 0&&(E0=r);let e=E0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TS(r){return r*Ds}function bS(r){return r*Ko}function RS(r){return(r&r-1)===0&&r!==0}function BS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function IS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PS(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),h=s((e+n)/2),d=o((e+n)/2),f=s((e-n)/2),m=o((e-n)/2),g=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(c*d,u*f,u*m,c*h);break;case"YZY":r.set(u*m,c*d,u*f,c*h);break;case"ZXZ":r.set(u*f,u*m,c*d,c*h);break;case"XZX":r.set(c*d,u*_,u*g,c*h);break;case"YXY":r.set(u*g,c*d,u*_,c*h);break;case"ZYZ":r.set(u*_,u*g,c*d,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xy={DEG2RAD:Ds,RAD2DEG:Ko,generateUUID:si,clamp:qt,euclideanModulo:qp,mapLinear:vS,inverseLerp:_S,lerp:za,damp:yS,pingpong:xS,smoothstep:AS,smootherstep:MS,randInt:SS,randFloat:ES,randFloatSpread:wS,seededRandom:CS,degToRad:TS,radToDeg:bS,isPowerOfTwo:RS,ceilPowerOfTwo:BS,floorPowerOfTwo:IS,setQuaternionFromProperEuler:PS,normalize:dt,denormalize:Nn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,s,o,c,u,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h)}set(e,t,n,i,s,o,c,u,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=c,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],d=n[4],f=n[7],m=n[2],g=n[5],_=n[8],A=i[0],x=i[3],y=i[6],E=i[1],S=i[4],C=i[7],F=i[2],R=i[5],I=i[8];return s[0]=o*A+c*E+u*F,s[3]=o*x+c*S+u*R,s[6]=o*y+c*C+u*I,s[1]=h*A+d*E+f*F,s[4]=h*x+d*S+f*R,s[7]=h*y+d*C+f*I,s[2]=m*A+g*E+_*F,s[5]=m*x+g*S+_*R,s[8]=m*y+g*C+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],d=e[8];return t*o*d-t*c*h-n*s*d+n*c*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],d=e[8],f=d*o-c*h,m=c*u-d*s,g=h*s-o*u,_=t*f+n*m+i*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/_;return e[0]=f*A,e[1]=(i*h-d*n)*A,e[2]=(c*n-i*o)*A,e[3]=m*A,e[4]=(d*t-i*u)*A,e[5]=(i*s-c*t)*A,e[6]=g*A,e[7]=(n*u-h*t)*A,e[8]=(o*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-i*h,i*u,-i*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Dd.makeScale(e,t)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new ht;function Jy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const LS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Uo(r,e){return new LS[r](e)}function nl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ky(){const r=nl("canvas");return r.style.display="block",r}const w0={};function Qp(r){r in w0||(w0[r]=!0,console.warn(r))}function DS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const C0=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),T0=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bc={[xr]:{transfer:Za,primaries:ja,toReference:r=>r,fromReference:r=>r},[_i]:{transfer:Ot,primaries:ja,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[gl]:{transfer:Za,primaries:$a,toReference:r=>r.applyMatrix3(T0),fromReference:r=>r.applyMatrix3(C0)},[eh]:{transfer:Ot,primaries:$a,toReference:r=>r.convertSRGBToLinear().applyMatrix3(T0),fromReference:r=>r.applyMatrix3(C0).convertLinearToSRGB()}},FS=new Set([xr,gl]),Lt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!FS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=bc[e].toReference,i=bc[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return bc[r].primaries},getTransfer:function(r){return r===ur?Za:bc[r].transfer}};function ko(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fd(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lo;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lo===void 0&&(lo=nl("canvas")),lo.width=e.width,lo.height=e.height;const n=lo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ko(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ko(t[n]/255)*255):t[n]=ko(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class bs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(Ud(i[o].image)):s.push(Ud(i[o]))}else s=Ud(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;class Ht extends Ar{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=ni,i=ni,s=Qt,o=Ai,c=On,u=qi,h=Ht.DEFAULT_ANISOTROPY,d=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=si(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Zu;Ht.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],d=u[4],f=u[8],m=u[1],g=u[5],_=u[9],A=u[2],x=u[6],y=u[10];if(Math.abs(d-m)<.01&&Math.abs(f-A)<.01&&Math.abs(_-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+A)<.1&&Math.abs(_+x)<.1&&Math.abs(h+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,C=(g+1)/2,F=(y+1)/2,R=(d+m)/4,I=(f+A)/4,U=(_+x)/4;return S>C&&S>F?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=R/n,s=I/n):C>F?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=R/i,s=U/i):F<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(F),n=I/s,i=U/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-_)*(x-_)+(f-A)*(f-A)+(m-d)*(m-d));return Math.abs(E)<.001&&(E=1),this.x=(x-_)/E,this.y=(f-A)/E,this.z=(m-d)/E,this.w=Math.acos((h+g+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qy extends Ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends qy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class th extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OS extends Ii{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new th(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Zp extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GS extends Ii{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Zp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let u=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const m=s[o+0],g=s[o+1],_=s[o+2],A=s[o+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=f;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=_,e[t+3]=A;return}if(f!==A||u!==m||h!==g||d!==_){let x=1-c;const y=u*m+h*g+d*_+f*A,E=y>=0?1:-1,S=1-y*y;if(S>Number.EPSILON){const F=Math.sqrt(S),R=Math.atan2(F,y*E);x=Math.sin(x*R)/F,c=Math.sin(c*R)/F}const C=c*E;if(u=u*x+m*C,h=h*x+g*C,d=d*x+_*C,f=f*x+A*C,x===1-c){const F=1/Math.sqrt(u*u+h*h+d*d+f*f);u*=F,h*=F,d*=F,f*=F}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],u=n[i+1],h=n[i+2],d=n[i+3],f=s[o],m=s[o+1],g=s[o+2],_=s[o+3];return e[t]=c*_+d*f+u*g-h*m,e[t+1]=u*_+d*m+h*f-c*g,e[t+2]=h*_+d*g+c*m-u*f,e[t+3]=d*_-c*f-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),d=c(i/2),f=c(s/2),m=u(n/2),g=u(i/2),_=u(s/2);switch(o){case"XYZ":this._x=m*d*f+h*g*_,this._y=h*g*f-m*d*_,this._z=h*d*_+m*g*f,this._w=h*d*f-m*g*_;break;case"YXZ":this._x=m*d*f+h*g*_,this._y=h*g*f-m*d*_,this._z=h*d*_-m*g*f,this._w=h*d*f+m*g*_;break;case"ZXY":this._x=m*d*f-h*g*_,this._y=h*g*f+m*d*_,this._z=h*d*_+m*g*f,this._w=h*d*f-m*g*_;break;case"ZYX":this._x=m*d*f-h*g*_,this._y=h*g*f+m*d*_,this._z=h*d*_-m*g*f,this._w=h*d*f+m*g*_;break;case"YZX":this._x=m*d*f+h*g*_,this._y=h*g*f+m*d*_,this._z=h*d*_-m*g*f,this._w=h*d*f-m*g*_;break;case"XZY":this._x=m*d*f-h*g*_,this._y=h*g*f-m*d*_,this._z=h*d*_+m*g*f,this._w=h*d*f+m*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],h=t[2],d=t[6],f=t[10],m=n+c+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-u)*g,this._y=(s-h)*g,this._z=(o-i)*g}else if(n>c&&n>f){const g=2*Math.sqrt(1+n-c-f);this._w=(d-u)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+h)/g}else if(c>f){const g=2*Math.sqrt(1+c-n-f);this._w=(s-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(u+d)/g}else{const g=2*Math.sqrt(1+f-n-c);this._w=(o-i)/g,this._x=(s+h)/g,this._y=(u+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+o*c+i*h-s*u,this._y=i*d+o*u+s*c-n*h,this._z=s*d+o*h+n*u-i*c,this._w=o*d-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let c=o*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,c),f=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=i*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*i-c*n),d=2*(c*t-s*i),f=2*(s*n-o*t);return this.x=t+u*h+o*f-c*d,this.y=n+u*d+c*h-s*f,this.z=i+u*f+s*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new D,b0=new Tn;class bn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(s,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rc.copy(n.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Bc.subVectors(this.max,Ea),co.subVectors(e.a,Ea),uo.subVectors(e.b,Ea),ho.subVectors(e.c,Ea),Pr.subVectors(uo,co),Lr.subVectors(ho,uo),cs.subVectors(co,ho);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-cs.z,cs.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,cs.z,0,-cs.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-cs.y,cs.x,0];return!Od(t,co,uo,ho,Bc)||(t=[1,0,0,0,1,0,0,0,1],!Od(t,co,uo,ho,Bc))?!1:(Ic.crossVectors(Pr,Lr),t=[Ic.x,Ic.y,Ic.z],Od(t,co,uo,ho,Bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new D,new D,new D,new D,new D,new D,new D,new D],wi=new D,Rc=new bn,co=new D,uo=new D,ho=new D,Pr=new D,Lr=new D,cs=new D,Ea=new D,Bc=new D,Ic=new D,us=new D;function Od(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);const c=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),u=e.dot(us),h=t.dot(us),d=n.dot(us);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>c)return!1}return!0}const HS=new bn,wa=new D,Gd=new D;class yn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):HS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(Gd)),this.expandByPoint(wa.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new D,Hd=new D,Pc=new D,Dr=new D,kd=new D,Lc=new D,zd=new D;class jo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hd.copy(e).add(t).multiplyScalar(.5),Pc.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(Hd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pc),c=Dr.dot(this.direction),u=-Dr.dot(Pc),h=Dr.lengthSq(),d=Math.abs(1-o*o);let f,m,g,_;if(d>0)if(f=o*u-c,m=o*c-u,_=s*d,f>=0)if(m>=-_)if(m<=_){const A=1/d;f*=A,m*=A,g=f*(f+o*m+2*c)+m*(o*f+m+2*u)+h}else m=s,f=Math.max(0,-(o*m+c)),g=-f*f+m*(m+2*u)+h;else m=-s,f=Math.max(0,-(o*m+c)),g=-f*f+m*(m+2*u)+h;else m<=-_?(f=Math.max(0,-(-o*s+c)),m=f>0?-s:Math.min(Math.max(-s,-u),s),g=-f*f+m*(m+2*u)+h):m<=_?(f=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(f=Math.max(0,-(o*s+c)),m=f>0?s:Math.min(Math.max(-s,-u),s),g=-f*f+m*(m+2*u)+h);else m=o>0?-s:s,f=Math.max(0,-(o*m+c)),g=-f*f+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Hd).addScaledVector(Pc,m),g}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,u;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),d>=0?(s=(e.min.y-m.y)*d,o=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,o=(e.min.y-m.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(c=(e.min.z-m.z)*f,u=(e.max.z-m.z)*f):(c=(e.max.z-m.z)*f,u=(e.min.z-m.z)*f),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,i,s){kd.subVectors(t,e),Lc.subVectors(n,e),zd.crossVectors(kd,Lc);let o=this.direction.dot(zd),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Dr.subVectors(this.origin,e);const u=c*this.direction.dot(Lc.crossVectors(Dr,Lc));if(u<0)return null;const h=c*this.direction.dot(kd.cross(Dr));if(h<0||u+h>o)return null;const d=-c*Dr.dot(zd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,i,s,o,c,u,h,d,f,m,g,_,A,x){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h,d,f,m,g,_,A,x)}set(e,t,n,i,s,o,c,u,h,d,f,m,g,_,A,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=c,y[13]=u,y[2]=h,y[6]=d,y[10]=f,y[14]=m,y[3]=g,y[7]=_,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fo.setFromMatrixColumn(e,0).length(),s=1/fo.setFromMatrixColumn(e,1).length(),o=1/fo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const m=o*d,g=o*f,_=c*d,A=c*f;t[0]=u*d,t[4]=-u*f,t[8]=h,t[1]=g+_*h,t[5]=m-A*h,t[9]=-c*u,t[2]=A-m*h,t[6]=_+g*h,t[10]=o*u}else if(e.order==="YXZ"){const m=u*d,g=u*f,_=h*d,A=h*f;t[0]=m+A*c,t[4]=_*c-g,t[8]=o*h,t[1]=o*f,t[5]=o*d,t[9]=-c,t[2]=g*c-_,t[6]=A+m*c,t[10]=o*u}else if(e.order==="ZXY"){const m=u*d,g=u*f,_=h*d,A=h*f;t[0]=m-A*c,t[4]=-o*f,t[8]=_+g*c,t[1]=g+_*c,t[5]=o*d,t[9]=A-m*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const m=o*d,g=o*f,_=c*d,A=c*f;t[0]=u*d,t[4]=_*h-g,t[8]=m*h+A,t[1]=u*f,t[5]=A*h+m,t[9]=g*h-_,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const m=o*u,g=o*h,_=c*u,A=c*h;t[0]=u*d,t[4]=A-m*f,t[8]=_*f+g,t[1]=f,t[5]=o*d,t[9]=-c*d,t[2]=-h*d,t[6]=g*f+_,t[10]=m-A*f}else if(e.order==="XZY"){const m=o*u,g=o*h,_=c*u,A=c*h;t[0]=u*d,t[4]=-f,t[8]=h*d,t[1]=m*f+A,t[5]=o*d,t[9]=g*f-_,t[2]=_*f-g,t[6]=c*d,t[10]=A*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kS,e,zS)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fr.crossVectors(n,$n),Fr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fr.crossVectors(n,$n)),Fr.normalize(),Dc.crossVectors($n,Fr),i[0]=Fr.x,i[4]=Dc.x,i[8]=$n.x,i[1]=Fr.y,i[5]=Dc.y,i[9]=$n.y,i[2]=Fr.z,i[6]=Dc.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],d=n[1],f=n[5],m=n[9],g=n[13],_=n[2],A=n[6],x=n[10],y=n[14],E=n[3],S=n[7],C=n[11],F=n[15],R=i[0],I=i[4],U=i[8],b=i[12],T=i[1],L=i[5],X=i[9],J=i[13],Z=i[2],ie=i[6],Q=i[10],ce=i[14],N=i[3],Y=i[7],K=i[11],re=i[15];return s[0]=o*R+c*T+u*Z+h*N,s[4]=o*I+c*L+u*ie+h*Y,s[8]=o*U+c*X+u*Q+h*K,s[12]=o*b+c*J+u*ce+h*re,s[1]=d*R+f*T+m*Z+g*N,s[5]=d*I+f*L+m*ie+g*Y,s[9]=d*U+f*X+m*Q+g*K,s[13]=d*b+f*J+m*ce+g*re,s[2]=_*R+A*T+x*Z+y*N,s[6]=_*I+A*L+x*ie+y*Y,s[10]=_*U+A*X+x*Q+y*K,s[14]=_*b+A*J+x*ce+y*re,s[3]=E*R+S*T+C*Z+F*N,s[7]=E*I+S*L+C*ie+F*Y,s[11]=E*U+S*X+C*Q+F*K,s[15]=E*b+S*J+C*ce+F*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],u=e[9],h=e[13],d=e[2],f=e[6],m=e[10],g=e[14],_=e[3],A=e[7],x=e[11],y=e[15];return _*(+s*u*f-i*h*f-s*c*m+n*h*m+i*c*g-n*u*g)+A*(+t*u*g-t*h*m+s*o*m-i*o*g+i*h*d-s*u*d)+x*(+t*h*f-t*c*g-s*o*f+n*o*g+s*c*d-n*h*d)+y*(-i*c*d-t*u*f+t*c*m+i*o*f-n*o*m+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],d=e[8],f=e[9],m=e[10],g=e[11],_=e[12],A=e[13],x=e[14],y=e[15],E=f*x*h-A*m*h+A*u*g-c*x*g-f*u*y+c*m*y,S=_*m*h-d*x*h-_*u*g+o*x*g+d*u*y-o*m*y,C=d*A*h-_*f*h+_*c*g-o*A*g-d*c*y+o*f*y,F=_*f*u-d*A*u-_*c*m+o*A*m+d*c*x-o*f*x,R=t*E+n*S+i*C+s*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=E*I,e[1]=(A*m*s-f*x*s-A*i*g+n*x*g+f*i*y-n*m*y)*I,e[2]=(c*x*s-A*u*s+A*i*h-n*x*h-c*i*y+n*u*y)*I,e[3]=(f*u*s-c*m*s-f*i*h+n*m*h+c*i*g-n*u*g)*I,e[4]=S*I,e[5]=(d*x*s-_*m*s+_*i*g-t*x*g-d*i*y+t*m*y)*I,e[6]=(_*u*s-o*x*s-_*i*h+t*x*h+o*i*y-t*u*y)*I,e[7]=(o*m*s-d*u*s+d*i*h-t*m*h-o*i*g+t*u*g)*I,e[8]=C*I,e[9]=(_*f*s-d*A*s-_*n*g+t*A*g+d*n*y-t*f*y)*I,e[10]=(o*A*s-_*c*s+_*n*h-t*A*h-o*n*y+t*c*y)*I,e[11]=(d*c*s-o*f*s-d*n*h+t*f*h+o*n*g-t*c*g)*I,e[12]=F*I,e[13]=(d*A*i-_*f*i+_*n*m-t*A*m-d*n*x+t*f*x)*I,e[14]=(_*c*i-o*A*i-_*n*u+t*A*u+o*n*x-t*c*x)*I,e[15]=(o*f*i-d*c*i+d*n*u-t*f*u-o*n*m+t*c*m)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,h=s*o,d=s*c;return this.set(h*o+n,h*c-i*u,h*u+i*c,0,h*c+i*u,d*c+n,d*u-i*o,0,h*u-i*c,d*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,h=s+s,d=o+o,f=c+c,m=s*h,g=s*d,_=s*f,A=o*d,x=o*f,y=c*f,E=u*h,S=u*d,C=u*f,F=n.x,R=n.y,I=n.z;return i[0]=(1-(A+y))*F,i[1]=(g+C)*F,i[2]=(_-S)*F,i[3]=0,i[4]=(g-C)*R,i[5]=(1-(m+y))*R,i[6]=(x+E)*R,i[7]=0,i[8]=(_+S)*I,i[9]=(x-E)*I,i[10]=(1-(m+A))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fo.set(i[0],i[1],i[2]).length();const o=fo.set(i[4],i[5],i[6]).length(),c=fo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ci.copy(this);const h=1/s,d=1/o,f=1/c;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=d,Ci.elements[5]*=d,Ci.elements[6]*=d,Ci.elements[8]*=f,Ci.elements[9]*=f,Ci.elements[10]*=f,t.setFromRotationMatrix(Ci),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,o,c=Xi){const u=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i);let g,_;if(c===Xi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(c===tl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=Xi){const u=this.elements,h=1/(t-e),d=1/(n-i),f=1/(o-s),m=(t+e)*h,g=(n+i)*d;let _,A;if(c===Xi)_=(o+s)*f,A=-2*f;else if(c===tl)_=s*f,A=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=A,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fo=new D,Ci=new Ze,kS=new D(0,0,0),zS=new D(1,1,1),Fr=new D,Dc=new D,$n=new D,R0=new Ze,B0=new Tn;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],u=i[1],h=i[5],d=i[9],f=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return B0.setFromEuler(this),this.setFromQuaternion(B0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Fs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VS=0;const I0=new D,po=new Tn,sr=new Ze,Fc=new D,Ca=new D,WS=new D,XS=new Tn,P0=new D(1,0,0),L0=new D(0,1,0),D0=new D(0,0,1),F0={type:"added"},JS={type:"removed"},mo={type:"childadded",child:null},Vd={type:"childremoved",child:null};class Mt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new oi,n=new Tn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ht}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(P0,e)}rotateY(e){return this.rotateOnAxis(L0,e)}rotateZ(e){return this.rotateOnAxis(D0,e)}translateOnAxis(e,t){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(P0,e)}translateY(e){return this.translateOnAxis(L0,e)}translateZ(e){return this.translateOnAxis(D0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fc.copy(e):Fc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Ca,Fc,this.up):sr.lookAt(Fc,Ca,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),po.setFromRotationMatrix(sr),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F0),mo.child=e,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JS),Vd.child=e,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F0),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,WS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,XS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const c=i[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const f=u[h];s(e.shapes,f)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),d=o(e.images),f=o(e.shapes),m=o(e.skeletons),g=o(e.animations),_=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new D,or=new D,Wd=new D,ar=new D,go=new D,vo=new D,U0=new D,Xd=new D,Jd=new D,Kd=new D;class ti{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),or.subVectors(n,t),Wd.subVectors(e,t);const o=Ti.dot(Ti),c=Ti.dot(or),u=Ti.dot(Wd),h=or.dot(or),d=or.dot(Wd),f=o*h-c*c;if(f===0)return s.set(0,0,0),null;const m=1/f,g=(h*u-c*d)*m,_=(o*d-c*u)*m;return s.set(1-g-_,_,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,o,c,u){return this.getBarycoord(e,t,n,i,ar)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ar.x),u.addScaledVector(o,ar.y),u.addScaledVector(c,ar.z),u)}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),or.subVectors(e,t),Ti.cross(or).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ti.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;go.subVectors(i,n),vo.subVectors(s,n),Xd.subVectors(e,n);const u=go.dot(Xd),h=vo.dot(Xd);if(u<=0&&h<=0)return t.copy(n);Jd.subVectors(e,i);const d=go.dot(Jd),f=vo.dot(Jd);if(d>=0&&f<=d)return t.copy(i);const m=u*f-d*h;if(m<=0&&u>=0&&d<=0)return o=u/(u-d),t.copy(n).addScaledVector(go,o);Kd.subVectors(e,s);const g=go.dot(Kd),_=vo.dot(Kd);if(_>=0&&g<=_)return t.copy(s);const A=g*h-u*_;if(A<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(n).addScaledVector(vo,c);const x=d*_-g*f;if(x<=0&&f-d>=0&&g-_>=0)return U0.subVectors(s,i),c=(f-d)/(f-d+(g-_)),t.copy(i).addScaledVector(U0,c);const y=1/(x+A+m);return o=A*y,c=m*y,t.copy(n).addScaledVector(go,o).addScaledVector(vo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Yd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=qp(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Yd(o,s,e+1/3),this.g=Yd(o,s,e),this.b=Yd(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=_i){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const n=Qy[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}copyLinearToSRGB(e){return this.r=Fd(e.r),this.g=Fd(e.g),this.b=Fd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Lt.fromWorkingColorSpace(wn.copy(this),e),Math.round(qt(wn.r*255,0,255))*65536+Math.round(qt(wn.g*255,0,255))*256+Math.round(qt(wn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(wn.copy(this),t);const n=wn.r,i=wn.g,s=wn.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const d=(c+o)/2;if(c===o)u=0,h=0;else{const f=o-c;switch(h=d<=.5?f/(o+c):f/(2-o-c),o){case n:u=(i-s)/f+(i<s?6:0);break;case i:u=(s-n)/f+2;break;case s:u=(n-i)/f+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=_i){Lt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,n=wn.g,i=wn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Uc);const n=za(Ur.h,Uc.h,t),i=za(Ur.s,Uc.s,t),s=za(Ur.l,Uc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ie;Ie.NAMES=Qy;let KS=0;class ln extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Ps,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Uu,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fu&&(n.blendSrc=this.blendSrc),this.blendDst!==Uu&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ri extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=YS();function YS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,d=0;for(;!(h&8388608);)h<<=1,d-=8388608;h&=-8388609,d+=947912704,s[u]=h|d}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)o[u]=u<<23;o[31]=1199570944,o[32]=2147483648;for(let u=33;u<63;++u)o[u]=2147483648+(u-32<<23);o[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:c}}function Wn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=qt(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function Ga(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const qS={toHalfFloat:Wn,fromHalfFloat:Ga},an=new D,Nc=new he;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nc.fromBufferAttribute(this,t),Nc.applyMatrix3(e),this.setXY(t,Nc.x,Nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class QS extends Ct{constructor(e,t,n){super(new Int8Array(e),t,n)}}class ZS extends Ct{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class jS extends Ct{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class $S extends Ct{constructor(e,t,n){super(new Int16Array(e),t,n)}}class jp extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eE extends Ct{constructor(e,t,n){super(new Int32Array(e),t,n)}}class $p extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tE extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ga(this.array[e*this.itemSize]);return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=Wn(t),this}getY(e){let t=Ga(this.array[e*this.itemSize+1]);return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=Wn(t),this}getZ(e){let t=Ga(this.array[e*this.itemSize+2]);return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=Wn(t),this}getW(e){let t=Ga(this.array[e*this.itemSize+3]);return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=Wn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this.array[e+3]=Wn(s),this}}class Xe extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nE=0;const gi=new Ze,qd=new Mt,_o=new D,ei=new bn,Ta=new bn,vn=new D;class ct extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jy(e)?$p:jp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Ta.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(ei.min,Ta.min),ei.expandByPoint(vn),vn.addVectors(ei.max,Ta.max),ei.expandByPoint(vn)):(ei.expandByPoint(Ta.min),ei.expandByPoint(Ta.max))}ei.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)vn.fromBufferAttribute(c,h),u&&(_o.fromBufferAttribute(e,h),vn.add(_o)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let U=0;U<n.count;U++)c[U]=new D,u[U]=new D;const h=new D,d=new D,f=new D,m=new he,g=new he,_=new he,A=new D,x=new D;function y(U,b,T){h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,T),m.fromBufferAttribute(s,U),g.fromBufferAttribute(s,b),_.fromBufferAttribute(s,T),d.sub(h),f.sub(h),g.sub(m),_.sub(m);const L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(A.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(L),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(L),c[U].add(A),c[b].add(A),c[T].add(A),u[U].add(x),u[b].add(x),u[T].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,b=E.length;U<b;++U){const T=E[U],L=T.start,X=T.count;for(let J=L,Z=L+X;J<Z;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const S=new D,C=new D,F=new D,R=new D;function I(U){F.fromBufferAttribute(i,U),R.copy(F);const b=c[U];S.copy(b),S.sub(F.multiplyScalar(F.dot(b))).normalize(),C.crossVectors(R,b);const L=C.dot(u[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,L)}for(let U=0,b=E.length;U<b;++U){const T=E[U],L=T.start,X=T.count;for(let J=L,Z=L+X;J<Z;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,o=new D,c=new D,u=new D,h=new D,d=new D,f=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const _=e.getX(m+0),A=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,x),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,x),c.add(d),u.add(d),h.add(d),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(A,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,u){const h=c.array,d=c.itemSize,f=c.normalized,m=new h.constructor(u.length*d);let g=0,_=0;for(let A=0,x=u.length;A<x;A++){c.isInterleavedBufferAttribute?g=u[A]*c.data.stride+c.offset:g=u[A]*d;for(let y=0;y<d;y++)m[_++]=h[g++]}return new Ct(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++){const m=h[d],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let f=0,m=h.length;f<m;f++){const g=h[f];d.push(g.toJSON(e.data))}d.length>0&&(i[u]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],f=s[h];for(let m=0,g=f.length;m<g;m++)d.push(f[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N0=new Ze,hs=new jo,Oc=new yn,O0=new D,yo=new D,xo=new D,Ao=new D,Qd=new D,Gc=new D,Hc=new he,kc=new he,zc=new he,G0=new D,H0=new D,k0=new D,Vc=new D,Wc=new D;class tn extends Mt{constructor(e=new ct,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Gc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=c[u],f=s[u];d!==0&&(Qd.fromBufferAttribute(f,e),o?Gc.addScaledVector(Qd,d):Gc.addScaledVector(Qd.sub(t),d))}t.add(Gc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(Oc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Oc,O0)===null||hs.origin.distanceToSquared(O0)>(e.far-e.near)**2))&&(N0.copy(s).invert(),hs.copy(e.ray).applyMatrix4(N0),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let _=0,A=m.length;_<A;_++){const x=m[_],y=o[x.materialIndex],E=Math.max(x.start,g.start),S=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let C=E,F=S;C<F;C+=3){const R=c.getX(C),I=c.getX(C+1),U=c.getX(C+2);i=Xc(this,y,e,n,h,d,f,R,I,U),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const _=Math.max(0,g.start),A=Math.min(c.count,g.start+g.count);for(let x=_,y=A;x<y;x+=3){const E=c.getX(x),S=c.getX(x+1),C=c.getX(x+2);i=Xc(this,o,e,n,h,d,f,E,S,C),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let _=0,A=m.length;_<A;_++){const x=m[_],y=o[x.materialIndex],E=Math.max(x.start,g.start),S=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let C=E,F=S;C<F;C+=3){const R=C,I=C+1,U=C+2;i=Xc(this,y,e,n,h,d,f,R,I,U),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const _=Math.max(0,g.start),A=Math.min(u.count,g.start+g.count);for(let x=_,y=A;x<y;x+=3){const E=x,S=x+1,C=x+2;i=Xc(this,o,e,n,h,d,f,E,S,C),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function iE(r,e,t,n,i,s,o,c){let u;if(e.side===Gn?u=n.intersectTriangle(o,s,i,!0,c):u=n.intersectTriangle(i,s,o,e.side===Yi,c),u===null)return null;Wc.copy(c),Wc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Wc);return h<t.near||h>t.far?null:{distance:h,point:Wc.clone(),object:r}}function Xc(r,e,t,n,i,s,o,c,u,h){r.getVertexPosition(c,yo),r.getVertexPosition(u,xo),r.getVertexPosition(h,Ao);const d=iE(r,e,t,n,yo,xo,Ao,Vc);if(d){i&&(Hc.fromBufferAttribute(i,c),kc.fromBufferAttribute(i,u),zc.fromBufferAttribute(i,h),d.uv=ti.getInterpolation(Vc,yo,xo,Ao,Hc,kc,zc,new he)),s&&(Hc.fromBufferAttribute(s,c),kc.fromBufferAttribute(s,u),zc.fromBufferAttribute(s,h),d.uv1=ti.getInterpolation(Vc,yo,xo,Ao,Hc,kc,zc,new he)),o&&(G0.fromBufferAttribute(o,c),H0.fromBufferAttribute(o,u),k0.fromBufferAttribute(o,h),d.normal=ti.getInterpolation(Vc,yo,xo,Ao,G0,H0,k0,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:c,b:u,c:h,normal:new D,materialIndex:0};ti.getNormal(yo,xo,Ao,f.normal),d.face=f}return d}class Xs extends ct{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let m=0,g=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(A,x,y,E,S,C,F,R,I,U,b){const T=C/I,L=F/U,X=C/2,J=F/2,Z=R/2,ie=I+1,Q=U+1;let ce=0,N=0;const Y=new D;for(let K=0;K<Q;K++){const re=K*L-J;for(let ye=0;ye<ie;ye++){const De=ye*T-X;Y[A]=De*E,Y[x]=re*S,Y[y]=Z,h.push(Y.x,Y.y,Y.z),Y[A]=0,Y[x]=0,Y[y]=R>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(ye/I),f.push(1-K/U),ce+=1}}for(let K=0;K<U;K++)for(let re=0;re<I;re++){const ye=m+re+ie*K,De=m+re+ie*(K+1),ne=m+(re+1)+ie*(K+1),fe=m+(re+1)+ie*K;u.push(ye,De,fe),u.push(De,ne,fe),N+=6}c.addGroup(g,N,b),g+=N,m+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const n=Yo(r[t]);for(const i in n)e[i]=n[i]}return e}function rE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Zy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const jy={clone:Yo,merge:Un},sE=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,oE=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Pi extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=rE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vl extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new D,z0=new he,V0=new he;class en extends vl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,z0,V0),t.subVectors(V0,z0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,So=1;class $y extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(Mo,So,e,t);i.layers=this.layers,this.add(i);const s=new en(Mo,So,e,t);s.layers=this.layers,this.add(s);const o=new en(Mo,So,e,t);o.layers=this.layers,this.add(o);const c=new en(Mo,So,e,t);c.layers=this.layers,this.add(c);const u=new en(Mo,So,e,t);u.layers=this.layers,this.add(u);const h=new en(Mo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,u]=t;for(const h of t)this.remove(h);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,h,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,m,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _l extends Ht{constructor(e,t,n,i,s,o,c,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,i,s,o,c,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _l(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xs(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:pr});s.uniforms.tEquirect.value=t;const o=new tn(i,s),c=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Qt),new $y(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Zd=new D,aE=new D,lE=new ht;class kr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zd.subVectors(n,t).cross(aE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lE.getNormalMatrix(e),i=this.coplanarPoint(Zd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new yn,Jc=new D;class yl{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,o=new kr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,s=i[0],o=i[1],c=i[2],u=i[3],h=i[4],d=i[5],f=i[6],m=i[7],g=i[8],_=i[9],A=i[10],x=i[11],y=i[12],E=i[13],S=i[14],C=i[15];if(n[0].setComponents(u-s,m-h,x-g,C-y).normalize(),n[1].setComponents(u+s,m+h,x+g,C+y).normalize(),n[2].setComponents(u+o,m+d,x+_,C+E).normalize(),n[3].setComponents(u-o,m-d,x-_,C-E).normalize(),n[4].setComponents(u-c,m-f,x-A,C-S).normalize(),t===Xi)n[5].setComponents(u+c,m+f,x+A,C+S).normalize();else if(t===tl)n[5].setComponents(c,f,A,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jc.x=i.normal.x>0?e.max.x:e.min.x,Jc.y=i.normal.y>0?e.max.y:e.min.y,Jc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tx(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cE(r){const e=new WeakMap;function t(c,u){const h=c.array,d=c.usage,f=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function n(c,u,h){const d=u.array,f=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&m.length===0&&r.bufferSubData(h,0,d),m.length!==0){for(let g=0,_=m.length;g<_;g++){const A=m[g];r.bufferSubData(h,A.start*d.BYTES_PER_ELEMENT,d,A.start,A.count)}u.clearUpdateRanges()}f.count!==-1&&(r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:o}}class $o extends ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,d=u+1,f=e/c,m=t/u,g=[],_=[],A=[],x=[];for(let y=0;y<d;y++){const E=y*m-o;for(let S=0;S<h;S++){const C=S*f-s;_.push(C,-E,0),A.push(0,0,1),x.push(S/c),x.push(1-y/u)}}for(let y=0;y<u;y++)for(let E=0;E<c;E++){const S=E+h*y,C=E+h*(y+1),F=E+1+h*(y+1),R=E+1+h*y;g.push(S,C,R),g.push(C,F,R)}this.setIndex(g),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(A,3)),this.setAttribute("uv",new Xe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}const uE=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,hE=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,dE=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,fE=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,pE=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,mE=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,gE=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
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

#endif
`,vE=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,_E=`
#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`,yE=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`,xE=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,AE=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,ME=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,SE=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,EE=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,wE=`
#if NUM_CLIPPING_PLANES > 0

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

#endif
`,CE=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,TE=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,bE=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,RE=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,BE=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,IE=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,PE=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( batchId );

	vColor.xyz *= batchingColor.xyz;

#endif
`,LE=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,DE=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

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

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

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

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

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

#endif
`,FE=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

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

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,UE=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,NE=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,OE=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,GE=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,HE=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,kE=`

// http://www.russellcottrell.com/photo/matrixCalculator.htm

// Linear sRGB => XYZ => Linear Display P3
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);

// Linear Display P3 => XYZ => Linear sRGB
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);

vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}

vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

// @deprecated, r156
vec4 LinearToLinear( in vec4 value ) {
	return value;
}

// @deprecated, r156
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}
`,zE=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,VE=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,WE=`
#ifdef USE_ENVMAP

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

#endif
`,XE=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,JE=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,KE=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,YE=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,qE=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,QE=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,ZE=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,jE=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,$E=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,e1=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,t1=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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
`,n1=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,i1=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,r1=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,s1=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,o1=`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,a1=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
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

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

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

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

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

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,l1=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

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
		vec3 iridescenceF0;
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

// temporary
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

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

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

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

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

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

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

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

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

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,c1=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

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

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

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

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,u1=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,h1=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,d1=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,f1=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,p1=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,m1=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,g1=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,v1=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,_1=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

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

#endif
`,y1=`
#if defined( USE_POINTS_UV )

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

#endif
`,x1=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,A1=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,M1=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,S1=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,E1=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,w1=`
#ifdef USE_MORPHTARGETS

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

#endif
`,C1=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,T1=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

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

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

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

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,b1=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,R1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,B1=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,I1=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,P1=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,L1=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,D1=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,F1=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,U1=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,N1=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,O1=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,G1=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,H1=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,k1=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,z1=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,V1=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,W1=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,X1=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return shadow;

	}

#endif
`,J1=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,K1=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

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

#endif


`,Y1=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,q1=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Q1=`
#ifdef USE_SKINNING

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

#endif
`,Z1=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,j1=`
#ifdef USE_SKINNING

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

#endif
`,$1=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,ew=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,tw=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,nw=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
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

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
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

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

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

vec3 CustomToneMapping( vec3 color ) { return color; }
`,iw=`
#ifdef USE_TRANSMISSION

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
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,rw=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

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

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
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

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

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
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,sw=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,ow=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,aw=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,lw=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,cw=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,uw=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,hw=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,dw=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,fw=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,pw=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,mw=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
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

}
`,gw=`
#if DEPTH_PACKING == 3200

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

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,vw=`
#define DISTANCE

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

}
`,_w=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,yw=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,xw=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,Aw=`
uniform float scale;
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

}
`,Mw=`
uniform vec3 diffuse;
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

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Sw=`
#include <common>
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

}
`,Ew=`
uniform vec3 diffuse;
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

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
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

}
`,ww=`
#define LAMBERT

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

}
`,Cw=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Tw=`
#define MATCAP

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

}
`,bw=`
#define MATCAP

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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Rw=`
#define NORMAL

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

}
`,Bw=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
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

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Iw=`
#define PHONG

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

}
`,Pw=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Lw=`
#define STANDARD

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
}
`,Dw=`
#define STANDARD

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
#include <packing>
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

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

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

}
`,Fw=`
#define TOON

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

}
`,Uw=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
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

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Nw=`
uniform float size;
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

}
`,Ow=`
uniform vec3 diffuse;
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

}
`,Gw=`
#include <common>
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

}
`,Hw=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
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

}
`,kw=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

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

}
`,zw=`
uniform vec3 diffuse;
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

}
`,pt={alphahash_fragment:uE,alphahash_pars_fragment:hE,alphamap_fragment:dE,alphamap_pars_fragment:fE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:vE,batching_pars_vertex:_E,batching_vertex:yE,begin_vertex:xE,beginnormal_vertex:AE,bsdfs:ME,iridescence_fragment:SE,bumpmap_pars_fragment:EE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:TE,clipping_planes_vertex:bE,color_fragment:RE,color_pars_fragment:BE,color_pars_vertex:IE,color_vertex:PE,common:LE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:FE,displacementmap_pars_vertex:UE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:GE,colorspace_fragment:HE,colorspace_pars_fragment:kE,envmap_fragment:zE,envmap_common_pars_fragment:VE,envmap_pars_fragment:WE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:n1,envmap_vertex:JE,fog_vertex:KE,fog_pars_vertex:YE,fog_fragment:qE,fog_pars_fragment:QE,gradientmap_pars_fragment:ZE,lightmap_pars_fragment:jE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:r1,lights_phong_fragment:s1,lights_phong_pars_fragment:o1,lights_physical_fragment:a1,lights_physical_pars_fragment:l1,lights_fragment_begin:c1,lights_fragment_maps:u1,lights_fragment_end:h1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:v1,map_particle_fragment:_1,map_particle_pars_fragment:y1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:A1,morphinstance_vertex:M1,morphcolor_vertex:S1,morphnormal_vertex:E1,morphtarget_pars_vertex:w1,morphtarget_vertex:C1,normal_fragment_begin:T1,normal_fragment_maps:b1,normal_pars_fragment:R1,normal_pars_vertex:B1,normal_vertex:I1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:U1,opaque_fragment:N1,packing:O1,premultiplied_alpha_fragment:G1,project_vertex:H1,dithering_fragment:k1,dithering_pars_fragment:z1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:J1,shadowmap_vertex:K1,shadowmask_pars_fragment:Y1,skinbase_vertex:q1,skinning_pars_vertex:Q1,skinning_vertex:Z1,skinnormal_vertex:j1,specularmap_fragment:$1,specularmap_pars_fragment:ew,tonemapping_fragment:tw,tonemapping_pars_fragment:nw,transmission_fragment:iw,transmission_pars_fragment:rw,uv_pars_fragment:sw,uv_pars_vertex:ow,uv_vertex:aw,worldpos_vertex:lw,background_vert:cw,background_frag:uw,backgroundCube_vert:hw,backgroundCube_frag:dw,cube_vert:fw,cube_frag:pw,depth_vert:mw,depth_frag:gw,distanceRGBA_vert:vw,distanceRGBA_frag:_w,equirect_vert:yw,equirect_frag:xw,linedashed_vert:Aw,linedashed_frag:Mw,meshbasic_vert:Sw,meshbasic_frag:Ew,meshlambert_vert:ww,meshlambert_frag:Cw,meshmatcap_vert:Tw,meshmatcap_frag:bw,meshnormal_vert:Rw,meshnormal_frag:Bw,meshphong_vert:Iw,meshphong_frag:Pw,meshphysical_vert:Lw,meshphysical_frag:Dw,meshtoon_vert:Fw,meshtoon_frag:Uw,points_vert:Nw,points_frag:Ow,shadow_vert:Gw,shadow_frag:Hw,sprite_vert:kw,sprite_frag:zw},Le={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ri={basic:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Un([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Un([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Un([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Un([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Un([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Un([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Un([Le.common,Le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Un([Le.lights,Le.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ri.physical={uniforms:Un([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Kc={r:0,b:0,g:0},fs=new oi,Vw=new Ze;function Ww(r,e,t,n,i,s,o){const c=new Ie(0);let u=s===!0?0:1,h,d,f=null,m=0,g=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function A(E){let S=!1;const C=_(E);C===null?y(c,u):C&&C.isColor&&(y(C,1),S=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===Zo)?(d===void 0&&(d=new tn(new Xs(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Yo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),fs.copy(S.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(fs)),d.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Ot,(f!==C||m!==C.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,f=C,m=C.version,g=r.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new tn(new $o(2,2),new Pi({name:"BackgroundMaterial",uniforms:Yo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||m!==C.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,f=C,m=C.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function y(E,S){E.getRGB(Kc,Zy(r)),n.buffers.color.setClear(Kc.r,Kc.g,Kc.b,S,o)}return{getClearColor:function(){return c},setClearColor:function(E,S=1){c.set(E),u=S,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,y(c,u)},render:A,addToRenderList:x}}function Xw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,o=!1;function c(T,L,X,J,Z){let ie=!1;const Q=f(J,X,L);s!==Q&&(s=Q,h(s.object)),ie=g(T,J,X,Z),ie&&_(T,J,X,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,C(T,L,X,J),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function u(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function d(T){return r.deleteVertexArray(T)}function f(T,L,X){const J=X.wireframe===!0;let Z=n[T.id];Z===void 0&&(Z={},n[T.id]=Z);let ie=Z[L.id];ie===void 0&&(ie={},Z[L.id]=ie);let Q=ie[J];return Q===void 0&&(Q=m(u()),ie[J]=Q),Q}function m(T){const L=[],X=[],J=[];for(let Z=0;Z<t;Z++)L[Z]=0,X[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:J,object:T,attributes:{},index:null}}function g(T,L,X,J){const Z=s.attributes,ie=L.attributes;let Q=0;const ce=X.getAttributes();for(const N in ce)if(ce[N].location>=0){const K=Z[N];let re=ie[N];if(re===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;Q++}return s.attributesNum!==Q||s.index!==J}function _(T,L,X,J){const Z={},ie=L.attributes;let Q=0;const ce=X.getAttributes();for(const N in ce)if(ce[N].location>=0){let K=ie[N];K===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),Z[N]=re,Q++}s.attributes=Z,s.attributesNum=Q,s.index=J}function A(){const T=s.newAttributes;for(let L=0,X=T.length;L<X;L++)T[L]=0}function x(T){y(T,0)}function y(T,L){const X=s.newAttributes,J=s.enabledAttributes,Z=s.attributeDivisors;X[T]=1,J[T]===0&&(r.enableVertexAttribArray(T),J[T]=1),Z[T]!==L&&(r.vertexAttribDivisor(T,L),Z[T]=L)}function E(){const T=s.newAttributes,L=s.enabledAttributes;for(let X=0,J=L.length;X<J;X++)L[X]!==T[X]&&(r.disableVertexAttribArray(X),L[X]=0)}function S(T,L,X,J,Z,ie,Q){Q===!0?r.vertexAttribIPointer(T,L,X,Z,ie):r.vertexAttribPointer(T,L,X,J,Z,ie)}function C(T,L,X,J){A();const Z=J.attributes,ie=X.getAttributes(),Q=L.defaultAttributeValues;for(const ce in ie){const N=ie[ce];if(N.location>=0){let Y=Z[ce];if(Y===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor)),Y!==void 0){const K=Y.normalized,re=Y.itemSize,ye=e.get(Y);if(ye===void 0)continue;const De=ye.buffer,ne=ye.type,fe=ye.bytesPerElement,we=ne===r.INT||ne===r.UNSIGNED_INT||Y.gpuType===Gp;if(Y.isInterleavedBufferAttribute){const xe=Y.data,et=xe.stride,it=Y.offset;if(xe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<N.locationSize;Ve++)y(N.location+Ve,xe.meshPerAttribute);T.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ve=0;Ve<N.locationSize;Ve++)x(N.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,De);for(let Ve=0;Ve<N.locationSize;Ve++)S(N.location+Ve,re/N.locationSize,ne,K,et*fe,(it+re/N.locationSize*Ve)*fe,we)}else{if(Y.isInstancedBufferAttribute){for(let xe=0;xe<N.locationSize;xe++)y(N.location+xe,Y.meshPerAttribute);T.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let xe=0;xe<N.locationSize;xe++)x(N.location+xe);r.bindBuffer(r.ARRAY_BUFFER,De);for(let xe=0;xe<N.locationSize;xe++)S(N.location+xe,re/N.locationSize,ne,K,re*fe,re/N.locationSize*xe*fe,we)}}else if(Q!==void 0){const K=Q[ce];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(N.location,K);break;case 3:r.vertexAttrib3fv(N.location,K);break;case 4:r.vertexAttrib4fv(N.location,K);break;default:r.vertexAttrib1fv(N.location,K)}}}}E()}function F(){U();for(const T in n){const L=n[T];for(const X in L){const J=L[X];for(const Z in J)d(J[Z].object),delete J[Z];delete L[X]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const X in L){const J=L[X];for(const Z in J)d(J[Z].object),delete J[Z];delete L[X]}delete n[T.id]}function I(T){for(const L in n){const X=n[L];if(X[T.id]===void 0)continue;const J=X[T.id];for(const Z in J)d(J[Z].object),delete J[Z];delete X[T.id]}}function U(){b(),o=!0,s!==i&&(s=i,h(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:U,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:x,disableUnusedAttributes:E}}function Jw(r,e,t){let n;function i(h){n=h}function s(h,d){r.drawArrays(n,h,d),t.update(d,n,1)}function o(h,d,f){f!==0&&(r.drawArraysInstanced(n,h,d,f),t.update(d,n,f))}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(n,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,n,1)}}function u(h,d,f,m){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h.length;_++)o(h[_],d[_],m[_]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,d,0,m,0,f);let _=0;for(let A=0;A<f;A++)_+=d[A];for(let A=0;A<m.length;A++)t.update(_,n,m[A])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Kw(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==On&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const I=R===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qi&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ii&&!I)}function u(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=t.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),A=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:A,maxAttributes:x,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:C,maxSamples:F}}function Yw(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new kr,c=new ht,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||n!==0||i;return i=m,n=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,g){const _=f.clippingPlanes,A=f.clipIntersection,x=f.clipShadows,y=r.get(f);if(!i||_===null||_.length===0||s&&!x)s?d(null):h();else{const E=s?0:n,S=E*4;let C=y.clippingState||null;u.value=C,C=d(_,m,S,g);for(let F=0;F!==S;++F)C[F]=t[F];y.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,g,_){const A=f!==null?f.length:0;let x=null;if(A!==0){if(x=u.value,_!==!0||x===null){const y=g+A*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<y)&&(x=new Float32Array(y));for(let S=0,C=g;S!==A;++S,C+=4)o.copy(f[S]).applyMatrix4(E,c),o.normal.toArray(x,C),x[C+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function qw(r){let e=new WeakMap;function t(o,c){return c===Ka?o.mapping=_r:c===Ya&&(o.mapping=Kr),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===Ka||c===Ya)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new ex(u.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const c=o.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zr extends vl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const No=4,W0=[.125,.215,.35,.446,.526,.582],Es=20,jd=new Zr,X0=new Ie;let $d=null,ef=0,tf=0,nf=!1;const Ss=(1+Math.sqrt(5))/2,Eo=1/Ss,J0=[new D(-Ss,Eo,0),new D(Ss,Eo,0),new D(-Eo,0,Ss),new D(Eo,0,Ss),new D(0,Ss,-Eo),new D(0,Ss,Eo),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$d=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($d,ef,tf),this._renderer.xr.enabled=nf,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ml,format:On,colorSpace:xr,depthBuffer:!1},i=K0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qw(s)),this._blurMaterial=Zw(s,e,t)}return i}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,jd)}_sceneToCubeUV(e,t,n,i){const c=new en(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(X0),d.toneMapping=Ji,d.autoClear=!1;const g=new ri({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),_=new tn(new Xs,g);let A=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,A=!0):(g.color.copy(X0),A=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,u[y],0),c.lookAt(h[y],0,0)):E===1?(c.up.set(0,0,u[y]),c.lookAt(0,h[y],0)):(c.up.set(0,u[y],0),c.lookAt(0,0,h[y]));const S=this._cubeSize;Yc(i,E*S,y>2?S:0,S,S),d.setRenderTarget(i),A&&d.render(_,c),d.render(e,c)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_r||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Yc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,jd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=J0[(i-s-1)%J0.length];this._blur(e,s-1,s,o,c)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,c){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new tn(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Es-1),A=s/_,x=isFinite(s)?1+Math.floor(d*A):Es;x>Es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Es}`);const y=[];let E=0;for(let I=0;I<Es;++I){const U=I/A,b=Math.exp(-U*U/2);y.push(b),I===0?E+=b:I<x&&(E+=2*b)}for(let I=0;I<y.length;I++)y[I]=y[I]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=y,m.latitudinal.value=o==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:S}=this;m.dTheta.value=_,m.mipInt.value=S-n;const C=this._sizeLods[i],F=3*C*(i>S-No?i-S+No:0),R=4*(this._cubeSize-C);Yc(t,F,R,3*C,2*C),u.setRenderTarget(t),u.render(f,jd)}}function Qw(r){const e=[],t=[],n=[];let i=r;const s=r-No+1+W0.length;for(let o=0;o<s;o++){const c=Math.pow(2,i);t.push(c);let u=1/c;o>r-No?u=W0[o-r+No-1]:o===0&&(u=0),n.push(u);const h=1/(c-2),d=-h,f=1+h,m=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,A=3,x=2,y=1,E=new Float32Array(A*_*g),S=new Float32Array(x*_*g),C=new Float32Array(y*_*g);for(let R=0;R<g;R++){const I=R%3*2/3-1,U=R>2?0:-1,b=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];E.set(b,A*_*R),S.set(m,x*_*R);const T=[R,R,R,R,R,R];C.set(T,y*_*R)}const F=new ct;F.setAttribute("position",new Ct(E,A)),F.setAttribute("uv",new Ct(S,x)),F.setAttribute("faceIndex",new Ct(C,y)),e.push(F),i>No&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function K0(r,e,t){const n=new Ii(r,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Zw(r,e,t){const n=new Float32Array(Es),i=new D(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Y0(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:em(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function q0(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function em(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jw(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ka||u===Ya,d=u===_r||u===Kr;if(h||d){let f=e.get(c);const m=f!==void 0?f.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new yp(r)),f=h?t.fromEquirectangular(c,f):t.fromCubemap(c,f),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),f.texture;if(f!==void 0)return f.texture;{const g=c.image;return h&&g&&g.height>0||d&&g&&i(g)?(t===null&&(t=new yp(r)),f=h?t.fromEquirectangular(c):t.fromCubemap(c),f.texture.pmremVersion=c.pmremVersion,e.set(c,f),c.addEventListener("dispose",s),f.texture):null}}}return c}function i(c){let u=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $w(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qp("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eC(r,e,t,n){const i={},s=new WeakMap;function o(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);for(const _ in m.morphAttributes){const A=m.morphAttributes[_];for(let x=0,y=A.length;x<y;x++)e.remove(A[x])}m.removeEventListener("dispose",o),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(f,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function u(f){const m=f.attributes;for(const _ in m)e.update(m[_],r.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const A=g[_];for(let x=0,y=A.length;x<y;x++)e.update(A[x],r.ARRAY_BUFFER)}}function h(f){const m=[],g=f.index,_=f.attributes.position;let A=0;if(g!==null){const E=g.array;A=g.version;for(let S=0,C=E.length;S<C;S+=3){const F=E[S+0],R=E[S+1],I=E[S+2];m.push(F,R,R,I,I,F)}}else if(_!==void 0){const E=_.array;A=_.version;for(let S=0,C=E.length/3-1;S<C;S+=3){const F=S+0,R=S+1,I=S+2;m.push(F,R,R,I,I,F)}}else return;const x=new(Jy(m)?$p:jp)(m,1);x.version=A;const y=s.get(f);y&&e.remove(y),s.set(f,x)}function d(f){const m=s.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&h(f)}else h(f);return s.get(f)}return{get:c,update:u,getWireframeAttribute:d}}function tC(r,e,t){let n;function i(m){n=m}let s,o;function c(m){s=m.type,o=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*o),t.update(g,n,1)}function h(m,g,_){_!==0&&(r.drawElementsInstanced(n,g,s,m*o,_),t.update(g,n,_))}function d(m,g,_){if(_===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let x=0;x<_;x++)this.render(m[x]/o,g[x]);else{A.multiDrawElementsWEBGL(n,g,0,s,m,0,_);let x=0;for(let y=0;y<_;y++)x+=g[y];t.update(x,n,1)}}function f(m,g,_,A){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<m.length;y++)h(m[y]/o,g[y],A[y]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,A,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];for(let E=0;E<A.length;E++)t.update(y,n,A[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function nC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function iC(r,e,t){const n=new WeakMap,i=new Dt;function s(o,c,u){const h=o.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=d!==void 0?d.length:0;let m=n.get(c);if(m===void 0||m.count!==f){let b=function(){I.dispose(),n.delete(c),c.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),A===!0&&(S=3);let C=c.attributes.position.count*S,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*F*4*f),I=new th(R,C,F,f);I.type=ii,I.needsUpdate=!0;const U=S*4;for(let T=0;T<f;T++){const L=x[T],X=y[T],J=E[T],Z=C*F*4*T;for(let ie=0;ie<L.count;ie++){const Q=ie*U;g===!0&&(i.fromBufferAttribute(L,ie),R[Z+Q+0]=i.x,R[Z+Q+1]=i.y,R[Z+Q+2]=i.z,R[Z+Q+3]=0),_===!0&&(i.fromBufferAttribute(X,ie),R[Z+Q+4]=i.x,R[Z+Q+5]=i.y,R[Z+Q+6]=i.z,R[Z+Q+7]=0),A===!0&&(i.fromBufferAttribute(J,ie),R[Z+Q+8]=i.x,R[Z+Q+9]=i.y,R[Z+Q+10]=i.z,R[Z+Q+11]=J.itemSize===4?i.w:1)}}m={count:f,texture:I,size:new he(C,F)},n.set(c,m),c.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let A=0;A<h.length;A++)g+=h[A];const _=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function rC(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,d=u.geometry,f=e.get(u,d);if(i.get(f)!==h&&(e.update(f),i.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return f}function o(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class tm extends Ht{constructor(e,t,n,i,s,o,c,u,h,d=Ls){if(d!==Ls&&d!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ls&&(n=Ns),n===void 0&&d===Gs&&(n=Os),super(null,i,s,o,c,u,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:hn,this.minFilter=u!==void 0?u:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nx=new Ht,ix=new tm(1,1);ix.compareFunction=Yp;const rx=new th,sx=new Zp,ox=new _l,Q0=[],Z0=[],j0=new Float32Array(16),$0=new Float32Array(9),ev=new Float32Array(4);function ea(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Q0[i];if(s===void 0&&(s=new Float32Array(i),Q0[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nh(r,e){let t=Z0[e];t===void 0&&(t=new Int32Array(e),Z0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function oC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function aC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function lC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function cC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;ev.set(n),r.uniformMatrix2fv(this.addr,!1,ev),fn(t,n)}}function uC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;$0.set(n),r.uniformMatrix3fv(this.addr,!1,$0),fn(t,n)}}function hC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;j0.set(n),r.uniformMatrix4fv(this.addr,!1,j0),fn(t,n)}}function dC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function pC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function mC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function gC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function _C(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function yC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function xC(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?ix:nx;t.setTexture2D(e||s,i)}function AC(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sx,i)}function MC(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ox,i)}function SC(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rx,i)}function EC(r){switch(r){case 5126:return sC;case 35664:return oC;case 35665:return aC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return hC;case 5124:case 35670:return dC;case 35667:case 35671:return fC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return vC;case 36295:return _C;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return SC}}function wC(r,e){r.uniform1fv(this.addr,e)}function CC(r,e){const t=ea(e,this.size,2);r.uniform2fv(this.addr,t)}function TC(r,e){const t=ea(e,this.size,3);r.uniform3fv(this.addr,t)}function bC(r,e){const t=ea(e,this.size,4);r.uniform4fv(this.addr,t)}function RC(r,e){const t=ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function BC(r,e){const t=ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function IC(r,e){const t=ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function PC(r,e){r.uniform1iv(this.addr,e)}function LC(r,e){r.uniform2iv(this.addr,e)}function DC(r,e){r.uniform3iv(this.addr,e)}function FC(r,e){r.uniform4iv(this.addr,e)}function UC(r,e){r.uniform1uiv(this.addr,e)}function NC(r,e){r.uniform2uiv(this.addr,e)}function OC(r,e){r.uniform3uiv(this.addr,e)}function GC(r,e){r.uniform4uiv(this.addr,e)}function HC(r,e,t){const n=this.cache,i=e.length,s=nh(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nx,s[o])}function kC(r,e,t){const n=this.cache,i=e.length,s=nh(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||sx,s[o])}function zC(r,e,t){const n=this.cache,i=e.length,s=nh(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ox,s[o])}function VC(r,e,t){const n=this.cache,i=e.length,s=nh(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rx,s[o])}function WC(r){switch(r){case 5126:return wC;case 35664:return CC;case 35665:return TC;case 35666:return bC;case 35674:return RC;case 35675:return BC;case 35676:return IC;case 5124:case 35670:return PC;case 35667:case 35671:return LC;case 35668:case 35672:return DC;case 35669:case 35673:return FC;case 5125:return UC;case 36294:return NC;case 36295:return OC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return VC}}class XC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=EC(t.type)}}class JC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WC(t.type)}}class KC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const rf=/(\w+)(\])?(\[|\.)?/g;function tv(r,e){r.seq.push(e),r.map[e.id]=e}function YC(r,e,t){const n=r.name,i=n.length;for(rf.lastIndex=0;;){const s=rf.exec(n),o=rf.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===i){tv(t,h===void 0?new XC(c,r,e):new JC(c,r,e));break}else{let f=t.map[c];f===void 0&&(f=new KC(c),tv(t,f)),t=f}}}class Pu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);YC(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function nv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qC=37297;let QC=0;function ZC(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}function jC(r){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(r);let n;switch(e===t?n="":e===$a&&t===ja?n="LinearDisplayP3ToLinearSRGB":e===ja&&t===$a&&(n="LinearSRGBToLinearDisplayP3"),r){case xr:case gl:return[n,"LinearTransferOETF"];case _i:case eh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function iv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ZC(r.getShaderSource(e),o)}else return i}function $C(r,e){const t=jC(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function eT(r,e){let t;switch(e){case my:t="Linear";break;case gy:t="Reinhard";break;case vy:t="OptimizedCineon";break;case Op:t="ACESFilmic";break;case yy:t="AgX";break;case xy:t="Neutral";break;case _y:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function nT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function Ha(r){return r!==""}function rv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(r){return r.replace(rT,oT)}const sT=new Map;function oT(r,e){let t=pt[e];if(t===void 0){const n=sT.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xp(t)}const aT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(r){return r.replace(aT,lT)}function lT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function av(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function uT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _r:case Kr:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function dT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case fy:e="ENVMAP_BLENDING_MIX";break;case py:e="ENVMAP_BLENDING_ADD";break}return e}function fT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=cT(t),h=uT(t),d=hT(t),f=dT(t),m=fT(t),g=tT(t),_=nT(s),A=i.createProgram();let x,y,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ha).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ha).join(`
`),y.length>0&&(y+=`
`)):(x=[av(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),y=[av(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?eT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,$C("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),o=xp(o),o=rv(o,t),o=sv(o,t),c=xp(c),c=rv(c,t),c=sv(c,t),o=ov(o),c=ov(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=E+x+o,C=E+y+c,F=nv(i,i.VERTEX_SHADER,S),R=nv(i,i.FRAGMENT_SHADER,C);i.attachShader(A,F),i.attachShader(A,R),t.index0AttributeName!==void 0?i.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function I(L){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(A).trim(),J=i.getShaderInfoLog(F).trim(),Z=i.getShaderInfoLog(R).trim();let ie=!0,Q=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,A,F,R);else{const ce=iv(i,F,"vertex"),N=iv(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ce+`
`+N)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(J===""||Z==="")&&(Q=!1);Q&&(L.diagnostics={runnable:ie,programLog:X,vertexShader:{log:J,prefix:x},fragmentShader:{log:Z,prefix:y}})}i.deleteShader(F),i.deleteShader(R),U=new Pu(i,A),b=iT(i,A)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(A,qC)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=R,this}let mT=0;class gT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vT(e),t.set(e,n)),n}}class vT{constructor(e){this.id=mT++,this.code=e,this.usedTimes=0}}function _T(r,e,t,n,i,s,o){const c=new Fs,u=new gT,h=new Set,d=[],f=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return h.add(b),b===0?"uv":`uv${b}`}function x(b,T,L,X,J){const Z=X.fog,ie=J.geometry,Q=b.isMeshStandardMaterial?X.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),N=ce&&ce.mapping===Zo?ce.image.height:null,Y=_[b.type];b.precision!==null&&(g=i.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const K=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,re=K!==void 0?K.length:0;let ye=0;ie.morphAttributes.position!==void 0&&(ye=1),ie.morphAttributes.normal!==void 0&&(ye=2),ie.morphAttributes.color!==void 0&&(ye=3);let De,ne,fe,we;if(Y){const Pt=Ri[Y];De=Pt.vertexShader,ne=Pt.fragmentShader}else De=b.vertexShader,ne=b.fragmentShader,u.update(b),fe=u.getVertexShaderID(b),we=u.getFragmentShaderID(b);const xe=r.getRenderTarget(),et=J.isInstancedMesh===!0,it=J.isBatchedMesh===!0,Ve=!!b.map,H=!!b.matcap,le=!!ce,ae=!!b.aoMap,Ae=!!b.lightMap,ve=!!b.bumpMap,Me=!!b.normalMap,Be=!!b.displacementMap,Fe=!!b.emissiveMap,nt=!!b.metalnessMap,G=!!b.roughnessMap,B=b.anisotropy>0,ee=b.clearcoat>0,me=b.dispersion>0,de=b.iridescence>0,_e=b.sheen>0,Ke=b.transmission>0,Ce=B&&!!b.anisotropyMap,Pe=ee&&!!b.clearcoatMap,ot=ee&&!!b.clearcoatNormalMap,Se=ee&&!!b.clearcoatRoughnessMap,We=de&&!!b.iridescenceMap,vt=de&&!!b.iridescenceThicknessMap,rt=_e&&!!b.sheenColorMap,Ne=_e&&!!b.sheenRoughnessMap,ft=!!b.specularMap,yt=!!b.specularColorMap,kt=!!b.specularIntensityMap,k=Ke&&!!b.transmissionMap,Ge=Ke&&!!b.thicknessMap,ue=!!b.gradientMap,pe=!!b.alphaMap,be=b.alphaTest>0,st=!!b.alphaHash,St=!!b.extensions;let zt=Ji;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(zt=r.toneMapping);const nn={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:ne,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:it,batchingColor:it&&J._colorsTexture!==null,instancing:et,instancingColor:et&&J.instanceColor!==null,instancingMorph:et&&J.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:xr,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:H,envMap:le,envMapMode:le&&ce.mapping,envMapCubeUVHeight:N,aoMap:ae,lightMap:Ae,bumpMap:ve,normalMap:Me,displacementMap:m&&Be,emissiveMap:Fe,normalMapObjectSpace:Me&&b.normalMapType===Ny,normalMapTangentSpace:Me&&b.normalMapType===Qr,metalnessMap:nt,roughnessMap:G,anisotropy:B,anisotropyMap:Ce,clearcoat:ee,clearcoatMap:Pe,clearcoatNormalMap:ot,clearcoatRoughnessMap:Se,dispersion:me,iridescence:de,iridescenceMap:We,iridescenceThicknessMap:vt,sheen:_e,sheenColorMap:rt,sheenRoughnessMap:Ne,specularMap:ft,specularColorMap:yt,specularIntensityMap:kt,transmission:Ke,transmissionMap:k,thicknessMap:Ge,gradientMap:ue,opaque:b.transparent===!1&&b.blending===Ps&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:be,alphaHash:st,combine:b.combine,mapUv:Ve&&A(b.map.channel),aoMapUv:ae&&A(b.aoMap.channel),lightMapUv:Ae&&A(b.lightMap.channel),bumpMapUv:ve&&A(b.bumpMap.channel),normalMapUv:Me&&A(b.normalMap.channel),displacementMapUv:Be&&A(b.displacementMap.channel),emissiveMapUv:Fe&&A(b.emissiveMap.channel),metalnessMapUv:nt&&A(b.metalnessMap.channel),roughnessMapUv:G&&A(b.roughnessMap.channel),anisotropyMapUv:Ce&&A(b.anisotropyMap.channel),clearcoatMapUv:Pe&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&A(b.sheenRoughnessMap.channel),specularMapUv:ft&&A(b.specularMap.channel),specularColorMapUv:yt&&A(b.specularColorMap.channel),specularIntensityMapUv:kt&&A(b.specularIntensityMap.channel),transmissionMapUv:k&&A(b.transmissionMap.channel),thicknessMapUv:Ge&&A(b.thicknessMap.channel),alphaMapUv:pe&&A(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Me||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ie.attributes.uv&&(Ve||pe),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&Lt.getTransfer(b.map.colorSpace)===Ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yi,flipSided:b.side===Gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:St&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:St&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return nn.vertexUv1s=h.has(1),nn.vertexUv2s=h.has(2),nn.vertexUv3s=h.has(3),h.clear(),nn}function y(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)T.push(L),T.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(E(T,b),S(T,b),T.push(r.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function E(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function S(b,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.skinning&&c.enable(4),T.morphTargets&&c.enable(5),T.morphNormals&&c.enable(6),T.morphColors&&c.enable(7),T.premultipliedAlpha&&c.enable(8),T.shadowMapEnabled&&c.enable(9),T.doubleSided&&c.enable(10),T.flipSided&&c.enable(11),T.useDepthPacking&&c.enable(12),T.dithering&&c.enable(13),T.transmission&&c.enable(14),T.sheen&&c.enable(15),T.opaque&&c.enable(16),T.pointsUvs&&c.enable(17),T.decodeVideoTexture&&c.enable(18),T.alphaToCoverage&&c.enable(19),b.push(c.mask)}function C(b){const T=_[b.type];let L;if(T){const X=Ri[T];L=jy.clone(X.uniforms)}else L=b.uniforms;return L}function F(b,T){let L;for(let X=0,J=d.length;X<J;X++){const Z=d[X];if(Z.cacheKey===T){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new pT(r,T,b,s),d.push(L)),L}function R(b){if(--b.usedTimes===0){const T=d.indexOf(b);d[T]=d[d.length-1],d.pop(),b.destroy()}}function I(b){u.remove(b)}function U(){u.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:C,acquireProgram:F,releaseProgram:R,releaseShaderCache:I,programs:d,dispose:U}}function yT(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,c){r.get(s)[o]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,m,g,_,A,x){let y=r[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:g,groupOrder:_,renderOrder:f.renderOrder,z:A,group:x},r[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=g,y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=A,y.group=x),e++,y}function c(f,m,g,_,A,x){const y=o(f,m,g,_,A,x);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function u(f,m,g,_,A,x){const y=o(f,m,g,_,A,x);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function h(f,m){t.length>1&&t.sort(f||xT),n.length>1&&n.sort(m||lv),i.length>1&&i.sort(m||lv)}function d(){for(let f=e,m=r.length;f<m;f++){const g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:d,sort:h}}function AT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new cv,r.set(n,[o])):i>=s.length?(o=new cv,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function MT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function ST(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ET=0;function wT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function CT(r){const e=new MT,t=ST(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new Ze,o=new Ze;function c(h){let d=0,f=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,_=0,A=0,x=0,y=0,E=0,S=0,C=0,F=0,R=0,I=0;h.sort(wT);for(let b=0,T=h.length;b<T;b++){const L=h[b],X=L.color,J=L.intensity,Z=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=X.r*J,f+=X.g*J,m+=X.b*J;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(L.sh.coefficients[Q],J);I++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ce=L.shadow,N=t.get(L);N.shadowBias=ce.bias,N.shadowNormalBias=ce.normalBias,N.shadowRadius=ce.radius,N.shadowMapSize=ce.mapSize,n.directionalShadow[g]=N,n.directionalShadowMap[g]=ie,n.directionalShadowMatrix[g]=L.shadow.matrix,E++}n.directional[g]=Q,g++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(X).multiplyScalar(J),Q.distance=Z,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,n.spot[A]=Q;const ce=L.shadow;if(L.map&&(n.spotLightMap[F]=L.map,F++,ce.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[A]=ce.matrix,L.castShadow){const N=t.get(L);N.shadowBias=ce.bias,N.shadowNormalBias=ce.normalBias,N.shadowRadius=ce.radius,N.shadowMapSize=ce.mapSize,n.spotShadow[A]=N,n.spotShadowMap[A]=ie,C++}A++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(X).multiplyScalar(J),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=Q,x++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const ce=L.shadow,N=t.get(L);N.shadowBias=ce.bias,N.shadowNormalBias=ce.normalBias,N.shadowRadius=ce.radius,N.shadowMapSize=ce.mapSize,N.shadowCameraNear=ce.camera.near,N.shadowCameraFar=ce.camera.far,n.pointShadow[_]=N,n.pointShadowMap[_]=ie,n.pointShadowMatrix[_]=L.shadow.matrix,S++}n.point[_]=Q,_++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(J),Q.groundColor.copy(L.groundColor).multiplyScalar(J),n.hemi[y]=Q,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const U=n.hash;(U.directionalLength!==g||U.pointLength!==_||U.spotLength!==A||U.rectAreaLength!==x||U.hemiLength!==y||U.numDirectionalShadows!==E||U.numPointShadows!==S||U.numSpotShadows!==C||U.numSpotMaps!==F||U.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=x,n.point.length=_,n.hemi.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=C+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,U.directionalLength=g,U.pointLength=_,U.spotLength=A,U.rectAreaLength=x,U.hemiLength=y,U.numDirectionalShadows=E,U.numPointShadows=S,U.numSpotShadows=C,U.numSpotMaps=F,U.numLightProbes=I,n.version=ET++)}function u(h,d){let f=0,m=0,g=0,_=0,A=0;const x=d.matrixWorldInverse;for(let y=0,E=h.length;y<E;y++){const S=h[y];if(S.isDirectionalLight){const C=n.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(x),f++}else if(S.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(x),o.identity(),s.copy(S.matrixWorld),s.premultiply(x),o.extractRotation(s),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const C=n.hemi[A];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(x),A++}}}return{setup:c,setupView:u,state:n}}function uv(r){const e=new CT(r),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function TT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let c;return o===void 0?(c=new uv(r),e.set(i,[c])):s>=o.length?(c=new uv(r),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class nm extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class im extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,RT=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function BT(r,e,t){let n=new yl;const i=new he,s=new he,o=new Dt,c=new nm({depthPacking:Uy}),u=new im,h={},d=t.maxTextureSize,f={[Yi]:Gn,[Gn]:Yi,[yi]:yi},m=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:bT,fragmentShader:RT}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const _=new ct;_.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new tn(_,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let y=this.type;this.render=function(R,I,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const b=r.getRenderTarget(),T=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),X=r.state;X.setBlending(pr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=y!==bi&&this.type===bi,Z=y===bi&&this.type!==bi;for(let ie=0,Q=R.length;ie<Q;ie++){const ce=R[ie],N=ce.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const Y=N.getFrameExtents();if(i.multiply(Y),s.copy(N.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Y.x),i.x=s.x*Y.x,N.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Y.y),i.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||J===!0||Z===!0){const re=this.type!==bi?{minFilter:hn,magFilter:hn}:{};N.map!==null&&N.map.dispose(),N.map=new Ii(i.x,i.y,re),N.map.texture.name=ce.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const K=N.getViewportCount();for(let re=0;re<K;re++){const ye=N.getViewport(re);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),X.viewport(o),N.updateMatrices(ce,re),n=N.getFrustum(),C(I,U,N.camera,ce,this.type)}N.isPointLightShadow!==!0&&this.type===bi&&E(N,U),N.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(b,T,L)};function E(R,I){const U=e.update(A);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ii(i.x,i.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(I,null,U,m,A,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(I,null,U,g,A,null)}function S(R,I,U,b){let T=null;const L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)T=L;else if(T=U.isPointLight===!0?u:c,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=T.uuid,J=I.uuid;let Z=h[X];Z===void 0&&(Z={},h[X]=Z);let ie=Z[J];ie===void 0&&(ie=T.clone(),Z[J]=ie,I.addEventListener("dispose",F)),T=ie}if(T.visible=I.visible,T.wireframe=I.wireframe,b===bi?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:f[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=r.properties.get(T);X.light=U}return T}function C(R,I,U,b,T){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===bi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const J=e.update(R),Z=R.material;if(Array.isArray(Z)){const ie=J.groups;for(let Q=0,ce=ie.length;Q<ce;Q++){const N=ie[Q],Y=Z[N.materialIndex];if(Y&&Y.visible){const K=S(R,Y,b,T);R.onBeforeShadow(r,R,I,U,J,K,N),r.renderBufferDirect(U,null,J,K,R,N),R.onAfterShadow(r,R,I,U,J,K,N)}}}else if(Z.visible){const ie=S(R,Z,b,T);R.onBeforeShadow(r,R,I,U,J,ie,null),r.renderBufferDirect(U,null,J,ie,R,null),R.onAfterShadow(r,R,I,U,J,ie,null)}}const X=R.children;for(let J=0,Z=X.length;J<Z;J++)C(X[J],I,U,b,T)}function F(R){R.target.removeEventListener("dispose",F);for(const U in h){const b=h[U],T=R.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function IT(r){function e(){let k=!1;const Ge=new Dt;let ue=null;const pe=new Dt(0,0,0,0);return{setMask:function(be){ue!==be&&!k&&(r.colorMask(be,be,be,be),ue=be)},setLocked:function(be){k=be},setClear:function(be,st,St,zt,nn){nn===!0&&(be*=zt,st*=zt,St*=zt),Ge.set(be,st,St,zt),pe.equals(Ge)===!1&&(r.clearColor(be,st,St,zt),pe.copy(Ge))},reset:function(){k=!1,ue=null,pe.set(-1,0,0,0)}}}function t(){let k=!1,Ge=null,ue=null,pe=null;return{setTest:function(be){be?we(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(be){Ge!==be&&!k&&(r.depthMask(be),Ge=be)},setFunc:function(be){if(ue!==be){switch(be){case oy:r.depthFunc(r.NEVER);break;case ay:r.depthFunc(r.ALWAYS);break;case ly:r.depthFunc(r.LESS);break;case Ja:r.depthFunc(r.LEQUAL);break;case cy:r.depthFunc(r.EQUAL);break;case uy:r.depthFunc(r.GEQUAL);break;case hy:r.depthFunc(r.GREATER);break;case dy:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=be}},setLocked:function(be){k=be},setClear:function(be){pe!==be&&(r.clearDepth(be),pe=be)},reset:function(){k=!1,Ge=null,ue=null,pe=null}}}function n(){let k=!1,Ge=null,ue=null,pe=null,be=null,st=null,St=null,zt=null,nn=null;return{setTest:function(Pt){k||(Pt?we(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Pt){Ge!==Pt&&!k&&(r.stencilMask(Pt),Ge=Pt)},setFunc:function(Pt,Jn,Kn){(ue!==Pt||pe!==Jn||be!==Kn)&&(r.stencilFunc(Pt,Jn,Kn),ue=Pt,pe=Jn,be=Kn)},setOp:function(Pt,Jn,Kn){(st!==Pt||St!==Jn||zt!==Kn)&&(r.stencilOp(Pt,Jn,Kn),st=Pt,St=Jn,zt=Kn)},setLocked:function(Pt){k=Pt},setClear:function(Pt){nn!==Pt&&(r.clearStencil(Pt),nn=Pt)},reset:function(){k=!1,Ge=null,ue=null,pe=null,be=null,st=null,St=null,zt=null,nn=null}}}const i=new e,s=new t,o=new n,c=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,A=null,x=null,y=null,E=null,S=null,C=null,F=null,R=new Ie(0,0,0),I=0,U=!1,b=null,T=null,L=null,X=null,J=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,Q=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ie=Q>=1):ce.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ie=Q>=2);let N=null,Y={};const K=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),ye=new Dt().fromArray(K),De=new Dt().fromArray(re);function ne(k,Ge,ue,pe){const be=new Uint8Array(4),st=r.createTexture();r.bindTexture(k,st),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let St=0;St<ue;St++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ge,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(Ge+St,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return st}const fe={};fe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),we(r.DEPTH_TEST),s.setFunc(Ja),ve(!1),Me(Hf),we(r.CULL_FACE),ae(pr);function we(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function xe(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function et(k,Ge){return d[k]!==Ge?(r.bindFramebuffer(k,Ge),d[k]=Ge,k===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Ge),k===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Ge),!0):!1}function it(k,Ge){let ue=m,pe=!1;if(k){ue=f.get(Ge),ue===void 0&&(ue=[],f.set(Ge,ue));const be=k.textures;if(ue.length!==be.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let st=0,St=be.length;st<St;st++)ue[st]=r.COLOR_ATTACHMENT0+st;ue.length=be.length,pe=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ue)}function Ve(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const H={[zr]:r.FUNC_ADD,[V_]:r.FUNC_SUBTRACT,[W_]:r.FUNC_REVERSE_SUBTRACT};H[X_]=r.MIN,H[J_]=r.MAX;const le={[K_]:r.ZERO,[Y_]:r.ONE,[q_]:r.SRC_COLOR,[Fu]:r.SRC_ALPHA,[ty]:r.SRC_ALPHA_SATURATE,[$_]:r.DST_COLOR,[Z_]:r.DST_ALPHA,[Q_]:r.ONE_MINUS_SRC_COLOR,[Uu]:r.ONE_MINUS_SRC_ALPHA,[ey]:r.ONE_MINUS_DST_COLOR,[j_]:r.ONE_MINUS_DST_ALPHA,[ny]:r.CONSTANT_COLOR,[iy]:r.ONE_MINUS_CONSTANT_COLOR,[ry]:r.CONSTANT_ALPHA,[sy]:r.ONE_MINUS_CONSTANT_ALPHA};function ae(k,Ge,ue,pe,be,st,St,zt,nn,Pt){if(k===pr){_===!0&&(xe(r.BLEND),_=!1);return}if(_===!1&&(we(r.BLEND),_=!0),k!==z_){if(k!==A||Pt!==U){if((x!==zr||S!==zr)&&(r.blendEquation(r.FUNC_ADD),x=zr,S=zr),Pt)switch(k){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kf:r.blendFunc(r.ONE,r.ONE);break;case zf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case zf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,C=null,F=null,R.set(0,0,0),I=0,A=k,U=Pt}return}be=be||Ge,st=st||ue,St=St||pe,(Ge!==x||be!==S)&&(r.blendEquationSeparate(H[Ge],H[be]),x=Ge,S=be),(ue!==y||pe!==E||st!==C||St!==F)&&(r.blendFuncSeparate(le[ue],le[pe],le[st],le[St]),y=ue,E=pe,C=st,F=St),(zt.equals(R)===!1||nn!==I)&&(r.blendColor(zt.r,zt.g,zt.b,nn),R.copy(zt),I=nn),A=k,U=!1}function Ae(k,Ge){k.side===yi?xe(r.CULL_FACE):we(r.CULL_FACE);let ue=k.side===Gn;Ge&&(ue=!ue),ve(ue),k.blending===Ps&&k.transparent===!1?ae(pr):ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),i.setMask(k.colorWrite);const pe=k.stencilWrite;o.setTest(pe),pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(k){b!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),b=k)}function Me(k){k!==G_?(we(r.CULL_FACE),k!==T&&(k===Hf?r.cullFace(r.BACK):k===H_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),T=k}function Be(k){k!==L&&(ie&&r.lineWidth(k),L=k)}function Fe(k,Ge,ue){k?(we(r.POLYGON_OFFSET_FILL),(X!==Ge||J!==ue)&&(r.polygonOffset(Ge,ue),X=Ge,J=ue)):xe(r.POLYGON_OFFSET_FILL)}function nt(k){k?we(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function G(k){k===void 0&&(k=r.TEXTURE0+Z-1),N!==k&&(r.activeTexture(k),N=k)}function B(k,Ge,ue){ue===void 0&&(N===null?ue=r.TEXTURE0+Z-1:ue=N);let pe=Y[ue];pe===void 0&&(pe={type:void 0,texture:void 0},Y[ue]=pe),(pe.type!==k||pe.texture!==Ge)&&(N!==ue&&(r.activeTexture(ue),N=ue),r.bindTexture(k,Ge||fe[k]),pe.type=k,pe.texture=Ge)}function ee(){const k=Y[N];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(k){ye.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ye.copy(k))}function Ne(k){De.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function ft(k,Ge){let ue=u.get(Ge);ue===void 0&&(ue=new WeakMap,u.set(Ge,ue));let pe=ue.get(k);pe===void 0&&(pe=r.getUniformBlockIndex(Ge,k.name),ue.set(k,pe))}function yt(k,Ge){const pe=u.get(Ge).get(k);c.get(Ge)!==pe&&(r.uniformBlockBinding(Ge,pe,k.__bindingPointIndex),c.set(Ge,pe))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},N=null,Y={},d={},f=new WeakMap,m=[],g=null,_=!1,A=null,x=null,y=null,E=null,S=null,C=null,F=null,R=new Ie(0,0,0),I=0,U=!1,b=null,T=null,L=null,X=null,J=null,ye.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:we,disable:xe,bindFramebuffer:et,drawBuffers:it,useProgram:Ve,setBlending:ae,setMaterial:Ae,setFlipSided:ve,setCullFace:Me,setLineWidth:Be,setPolygonOffset:Fe,setScissorTest:nt,activeTexture:G,bindTexture:B,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:de,texImage2D:We,texImage3D:vt,updateUBOMapping:ft,uniformBlockBinding:yt,texStorage2D:ot,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:Ke,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Pe,scissor:rt,viewport:Ne,reset:kt}}function PT(r,e,t,n,i,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new he,d=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,B){return g?new OffscreenCanvas(G,B):nl("canvas")}function A(G,B,ee){let me=1;const de=nt(G);if((de.width>ee||de.height>ee)&&(me=ee/Math.max(de.width,de.height)),me<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const _e=Math.floor(me*de.width),Ke=Math.floor(me*de.height);f===void 0&&(f=_(_e,Ke));const Ce=B?_(_e,Ke):f;return Ce.width=_e,Ce.height=Ke,Ce.getContext("2d").drawImage(G,0,0,_e,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+_e+"x"+Ke+")."),Ce}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),G;return G}function x(G){return G.generateMipmaps&&G.minFilter!==hn&&G.minFilter!==Qt}function y(G){r.generateMipmap(G)}function E(G,B,ee,me,de=!1){if(G!==null){if(r[G]!==void 0)return r[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let _e=B;if(B===r.RED&&(ee===r.FLOAT&&(_e=r.R32F),ee===r.HALF_FLOAT&&(_e=r.R16F),ee===r.UNSIGNED_BYTE&&(_e=r.R8)),B===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.R8UI),ee===r.UNSIGNED_SHORT&&(_e=r.R16UI),ee===r.UNSIGNED_INT&&(_e=r.R32UI),ee===r.BYTE&&(_e=r.R8I),ee===r.SHORT&&(_e=r.R16I),ee===r.INT&&(_e=r.R32I)),B===r.RG&&(ee===r.FLOAT&&(_e=r.RG32F),ee===r.HALF_FLOAT&&(_e=r.RG16F),ee===r.UNSIGNED_BYTE&&(_e=r.RG8)),B===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.RG8UI),ee===r.UNSIGNED_SHORT&&(_e=r.RG16UI),ee===r.UNSIGNED_INT&&(_e=r.RG32UI),ee===r.BYTE&&(_e=r.RG8I),ee===r.SHORT&&(_e=r.RG16I),ee===r.INT&&(_e=r.RG32I)),B===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),B===r.RGBA){const Ke=de?Za:Lt.getTransfer(me);ee===r.FLOAT&&(_e=r.RGBA32F),ee===r.HALF_FLOAT&&(_e=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(_e=Ke===Ot?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function S(G,B){let ee;return G?B===null||B===Ns||B===Os?ee=r.DEPTH24_STENCIL8:B===ii?ee=r.DEPTH32F_STENCIL8:B===qa&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===Ns||B===Os?ee=r.DEPTH_COMPONENT24:B===ii?ee=r.DEPTH_COMPONENT32F:B===qa&&(ee=r.DEPTH_COMPONENT16),ee}function C(G,B){return x(G)===!0||G.isFramebufferTexture&&G.minFilter!==hn&&G.minFilter!==Qt?Math.log2(Math.max(B.width,B.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?B.mipmaps.length:1}function F(G){const B=G.target;B.removeEventListener("dispose",F),I(B),B.isVideoTexture&&d.delete(B)}function R(G){const B=G.target;B.removeEventListener("dispose",R),b(B)}function I(G){const B=n.get(G);if(B.__webglInit===void 0)return;const ee=G.source,me=m.get(ee);if(me){const de=me[B.__cacheKey];de.usedTimes--,de.usedTimes===0&&U(G),Object.keys(me).length===0&&m.delete(ee)}n.remove(G)}function U(G){const B=n.get(G);r.deleteTexture(B.__webglTexture);const ee=G.source,me=m.get(ee);delete me[B.__cacheKey],o.memory.textures--}function b(G){const B=n.get(G);if(G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(B.__webglFramebuffer[me]))for(let de=0;de<B.__webglFramebuffer[me].length;de++)r.deleteFramebuffer(B.__webglFramebuffer[me][de]);else r.deleteFramebuffer(B.__webglFramebuffer[me]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[me])}else{if(Array.isArray(B.__webglFramebuffer))for(let me=0;me<B.__webglFramebuffer.length;me++)r.deleteFramebuffer(B.__webglFramebuffer[me]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let me=0;me<B.__webglColorRenderbuffer.length;me++)B.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[me]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const ee=G.textures;for(let me=0,de=ee.length;me<de;me++){const _e=n.get(ee[me]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(ee[me])}n.remove(G)}let T=0;function L(){T=0}function X(){const G=T;return G>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+i.maxTextures),T+=1,G}function J(G){const B=[];return B.push(G.wrapS),B.push(G.wrapT),B.push(G.wrapR||0),B.push(G.magFilter),B.push(G.minFilter),B.push(G.anisotropy),B.push(G.internalFormat),B.push(G.format),B.push(G.type),B.push(G.generateMipmaps),B.push(G.premultiplyAlpha),B.push(G.flipY),B.push(G.unpackAlignment),B.push(G.colorSpace),B.join()}function Z(G,B){const ee=n.get(G);if(G.isVideoTexture&&Be(G),G.isRenderTargetTexture===!1&&G.version>0&&ee.__version!==G.version){const me=G.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ee,G,B);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+B)}function ie(G,B){const ee=n.get(G);if(G.version>0&&ee.__version!==G.version){De(ee,G,B);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+B)}function Q(G,B){const ee=n.get(G);if(G.version>0&&ee.__version!==G.version){De(ee,G,B);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+B)}function ce(G,B){const ee=n.get(G);if(G.version>0&&ee.__version!==G.version){ne(ee,G,B);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+B)}const N={[Yr]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[Wo]:r.MIRRORED_REPEAT},Y={[hn]:r.NEAREST,[ju]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[Ho]:r.LINEAR_MIPMAP_NEAREST,[Ai]:r.LINEAR_MIPMAP_LINEAR},K={[Oy]:r.NEVER,[Wy]:r.ALWAYS,[Gy]:r.LESS,[Yp]:r.LEQUAL,[Hy]:r.EQUAL,[Vy]:r.GEQUAL,[ky]:r.GREATER,[zy]:r.NOTEQUAL};function re(G,B){if(B.type===ii&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===Qt||B.magFilter===Ho||B.magFilter===ws||B.magFilter===Ai||B.minFilter===Qt||B.minFilter===Ho||B.minFilter===ws||B.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(G,r.TEXTURE_WRAP_S,N[B.wrapS]),r.texParameteri(G,r.TEXTURE_WRAP_T,N[B.wrapT]),(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)&&r.texParameteri(G,r.TEXTURE_WRAP_R,N[B.wrapR]),r.texParameteri(G,r.TEXTURE_MAG_FILTER,Y[B.magFilter]),r.texParameteri(G,r.TEXTURE_MIN_FILTER,Y[B.minFilter]),B.compareFunction&&(r.texParameteri(G,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(G,r.TEXTURE_COMPARE_FUNC,K[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===hn||B.minFilter!==ws&&B.minFilter!==Ai||B.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||n.get(B).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(G,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,i.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy}}}function ye(G,B){let ee=!1;G.__webglInit===void 0&&(G.__webglInit=!0,B.addEventListener("dispose",F));const me=B.source;let de=m.get(me);de===void 0&&(de={},m.set(me,de));const _e=J(B);if(_e!==G.__cacheKey){de[_e]===void 0&&(de[_e]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),de[_e].usedTimes++;const Ke=de[G.__cacheKey];Ke!==void 0&&(de[G.__cacheKey].usedTimes--,Ke.usedTimes===0&&U(B)),G.__cacheKey=_e,G.__webglTexture=de[_e].texture}return ee}function De(G,B,ee){let me=r.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),B.isData3DTexture&&(me=r.TEXTURE_3D);const de=ye(G,B),_e=B.source;t.bindTexture(me,G.__webglTexture,r.TEXTURE0+ee);const Ke=n.get(_e);if(_e.version!==Ke.__version||de===!0){t.activeTexture(r.TEXTURE0+ee);const Ce=Lt.getPrimaries(Lt.workingColorSpace),Pe=B.colorSpace===ur?null:Lt.getPrimaries(B.colorSpace),ot=B.colorSpace===ur||Ce===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,B.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,B.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Se=A(B.image,!1,i.maxTextureSize);Se=Fe(B,Se);const We=s.convert(B.format,B.colorSpace),vt=s.convert(B.type);let rt=E(B.internalFormat,We,vt,B.colorSpace,B.isVideoTexture);re(me,B);let Ne;const ft=B.mipmaps,yt=B.isVideoTexture!==!0,kt=Ke.__version===void 0||de===!0,k=_e.dataReady,Ge=C(B,Se);if(B.isDepthTexture)rt=S(B.format===Gs,B.type),kt&&(yt?t.texStorage2D(r.TEXTURE_2D,1,rt,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,rt,Se.width,Se.height,0,We,vt,null));else if(B.isDataTexture)if(ft.length>0){yt&&kt&&t.texStorage2D(r.TEXTURE_2D,Ge,rt,ft[0].width,ft[0].height);for(let ue=0,pe=ft.length;ue<pe;ue++)Ne=ft[ue],yt?k&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,We,vt,Ne.data):t.texImage2D(r.TEXTURE_2D,ue,rt,Ne.width,Ne.height,0,We,vt,Ne.data);B.generateMipmaps=!1}else yt?(kt&&t.texStorage2D(r.TEXTURE_2D,Ge,rt,Se.width,Se.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,We,vt,Se.data)):t.texImage2D(r.TEXTURE_2D,0,rt,Se.width,Se.height,0,We,vt,Se.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){yt&&kt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,rt,ft[0].width,ft[0].height,Se.depth);for(let ue=0,pe=ft.length;ue<pe;ue++)if(Ne=ft[ue],B.format!==On)if(We!==null)if(yt){if(k)if(B.layerUpdates.size>0){for(const be of B.layerUpdates){const st=Ne.width*Ne.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,be,Ne.width,Ne.height,1,We,Ne.data.slice(st*be,st*(be+1)),0,0)}B.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Ne.width,Ne.height,Se.depth,We,Ne.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,rt,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Ne.width,Ne.height,Se.depth,We,vt,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,rt,Ne.width,Ne.height,Se.depth,0,We,vt,Ne.data)}else{yt&&kt&&t.texStorage2D(r.TEXTURE_2D,Ge,rt,ft[0].width,ft[0].height);for(let ue=0,pe=ft.length;ue<pe;ue++)Ne=ft[ue],B.format!==On?We!==null?yt?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,We,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,rt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?k&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,We,vt,Ne.data):t.texImage2D(r.TEXTURE_2D,ue,rt,Ne.width,Ne.height,0,We,vt,Ne.data)}else if(B.isDataArrayTexture)if(yt){if(kt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,rt,Se.width,Se.height,Se.depth),k)if(B.layerUpdates.size>0){let ue;switch(vt){case r.UNSIGNED_BYTE:switch(We){case r.ALPHA:ue=1;break;case r.LUMINANCE:ue=1;break;case r.LUMINANCE_ALPHA:ue=2;break;case r.RGB:ue=3;break;case r.RGBA:ue=4;break;default:throw new Error(`Unknown texel size for format ${We}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:ue=1;break;default:throw new Error(`Unknown texel size for type ${vt}.`)}const pe=Se.width*Se.height*ue;for(const be of B.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,Se.width,Se.height,1,We,vt,Se.data.slice(pe*be,pe*(be+1)));B.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,We,vt,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,rt,Se.width,Se.height,Se.depth,0,We,vt,Se.data);else if(B.isData3DTexture)yt?(kt&&t.texStorage3D(r.TEXTURE_3D,Ge,rt,Se.width,Se.height,Se.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,We,vt,Se.data)):t.texImage3D(r.TEXTURE_3D,0,rt,Se.width,Se.height,Se.depth,0,We,vt,Se.data);else if(B.isFramebufferTexture){if(kt)if(yt)t.texStorage2D(r.TEXTURE_2D,Ge,rt,Se.width,Se.height);else{let ue=Se.width,pe=Se.height;for(let be=0;be<Ge;be++)t.texImage2D(r.TEXTURE_2D,be,rt,ue,pe,0,We,vt,null),ue>>=1,pe>>=1}}else if(ft.length>0){if(yt&&kt){const ue=nt(ft[0]);t.texStorage2D(r.TEXTURE_2D,Ge,rt,ue.width,ue.height)}for(let ue=0,pe=ft.length;ue<pe;ue++)Ne=ft[ue],yt?k&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,We,vt,Ne):t.texImage2D(r.TEXTURE_2D,ue,rt,We,vt,Ne);B.generateMipmaps=!1}else if(yt){if(kt){const ue=nt(Se);t.texStorage2D(r.TEXTURE_2D,Ge,rt,ue.width,ue.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,We,vt,Se)}else t.texImage2D(r.TEXTURE_2D,0,rt,We,vt,Se);x(B)&&y(me),Ke.__version=_e.version,B.onUpdate&&B.onUpdate(B)}G.__version=B.version}function ne(G,B,ee){if(B.image.length!==6)return;const me=ye(G,B),de=B.source;t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+ee);const _e=n.get(de);if(de.version!==_e.__version||me===!0){t.activeTexture(r.TEXTURE0+ee);const Ke=Lt.getPrimaries(Lt.workingColorSpace),Ce=B.colorSpace===ur?null:Lt.getPrimaries(B.colorSpace),Pe=B.colorSpace===ur||Ke===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,B.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,B.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ot=B.isCompressedTexture||B.image[0].isCompressedTexture,Se=B.image[0]&&B.image[0].isDataTexture,We=[];for(let pe=0;pe<6;pe++)!ot&&!Se?We[pe]=A(B.image[pe],!0,i.maxCubemapSize):We[pe]=Se?B.image[pe].image:B.image[pe],We[pe]=Fe(B,We[pe]);const vt=We[0],rt=s.convert(B.format,B.colorSpace),Ne=s.convert(B.type),ft=E(B.internalFormat,rt,Ne,B.colorSpace),yt=B.isVideoTexture!==!0,kt=_e.__version===void 0||me===!0,k=de.dataReady;let Ge=C(B,vt);re(r.TEXTURE_CUBE_MAP,B);let ue;if(ot){yt&&kt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,ft,vt.width,vt.height);for(let pe=0;pe<6;pe++){ue=We[pe].mipmaps;for(let be=0;be<ue.length;be++){const st=ue[be];B.format!==On?rt!==null?yt?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,st.width,st.height,rt,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ft,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,st.width,st.height,rt,Ne,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ft,st.width,st.height,0,rt,Ne,st.data)}}}else{if(ue=B.mipmaps,yt&&kt){ue.length>0&&Ge++;const pe=nt(We[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){yt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,We[pe].width,We[pe].height,rt,Ne,We[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,We[pe].width,We[pe].height,0,rt,Ne,We[pe].data);for(let be=0;be<ue.length;be++){const St=ue[be].image[pe].image;yt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,St.width,St.height,rt,Ne,St.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ft,St.width,St.height,0,rt,Ne,St.data)}}else{yt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,rt,Ne,We[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,rt,Ne,We[pe]);for(let be=0;be<ue.length;be++){const st=ue[be];yt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,rt,Ne,st.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ft,rt,Ne,st.image[pe])}}}x(B)&&y(r.TEXTURE_CUBE_MAP),_e.__version=de.version,B.onUpdate&&B.onUpdate(B)}G.__version=B.version}function fe(G,B,ee,me,de,_e){const Ke=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),Pe=E(ee.internalFormat,Ke,Ce,ee.colorSpace);if(!n.get(B).__hasExternalTextures){const Se=Math.max(1,B.width>>_e),We=Math.max(1,B.height>>_e);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,_e,Pe,Se,We,B.depth,0,Ke,Ce,null):t.texImage2D(de,_e,Pe,Se,We,0,Ke,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,G),Me(B)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,de,n.get(ee).__webglTexture,0,ve(B)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,de,n.get(ee).__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(G,B,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,G),B.depthBuffer){const me=B.depthTexture,de=me&&me.isDepthTexture?me.type:null,_e=S(B.stencilBuffer,de),Ke=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=ve(B);Me(B)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,_e,B.width,B.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,_e,B.width,B.height):r.renderbufferStorage(r.RENDERBUFFER,_e,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,G)}else{const me=B.textures;for(let de=0;de<me.length;de++){const _e=me[de],Ke=s.convert(_e.format,_e.colorSpace),Ce=s.convert(_e.type),Pe=E(_e.internalFormat,Ke,Ce,_e.colorSpace),ot=ve(B);ee&&Me(B)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Pe,B.width,B.height):Me(B)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Pe,B.width,B.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,B.width,B.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(G,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,G),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),Z(B.depthTexture,0);const me=n.get(B.depthTexture).__webglTexture,de=ve(B);if(B.depthTexture.format===Ls)Me(B)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(B.depthTexture.format===Gs)Me(B)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function et(G){const B=n.get(G),ee=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!B.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");xe(B.__webglFramebuffer,G)}else if(ee){B.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer[me]),B.__webglDepthbuffer[me]=r.createRenderbuffer(),we(B.__webglDepthbuffer[me],G,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer=r.createRenderbuffer(),we(B.__webglDepthbuffer,G,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(G,B,ee){const me=n.get(G);B!==void 0&&fe(me.__webglFramebuffer,G,G.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&et(G)}function Ve(G){const B=G.texture,ee=n.get(G),me=n.get(B);G.addEventListener("dispose",R);const de=G.textures,_e=G.isWebGLCubeRenderTarget===!0,Ke=de.length>1;if(Ke||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=B.version,o.memory.textures++),_e){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(B.mipmaps&&B.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Pe=0;Pe<B.mipmaps.length;Pe++)ee.__webglFramebuffer[Ce][Pe]=r.createFramebuffer()}else ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<B.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let Ce=0,Pe=de.length;Ce<Pe;Ce++){const ot=n.get(de[Ce]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),o.memory.textures++)}if(G.samples>0&&Me(G)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<de.length;Ce++){const Pe=de[Ce];ee.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const ot=s.convert(Pe.format,Pe.colorSpace),Se=s.convert(Pe.type),We=E(Pe.internalFormat,ot,Se,Pe.colorSpace,G.isXRRenderTarget===!0),vt=ve(G);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,We,G.width,G.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),G.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),we(ee.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),re(r.TEXTURE_CUBE_MAP,B);for(let Ce=0;Ce<6;Ce++)if(B.mipmaps&&B.mipmaps.length>0)for(let Pe=0;Pe<B.mipmaps.length;Pe++)fe(ee.__webglFramebuffer[Ce][Pe],G,B,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Pe);else fe(ee.__webglFramebuffer[Ce],G,B,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(B)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ce=0,Pe=de.length;Ce<Pe;Ce++){const ot=de[Ce],Se=n.get(ot);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),re(r.TEXTURE_2D,ot),fe(ee.__webglFramebuffer,G,ot,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),x(ot)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ce=G.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),re(Ce,B),B.mipmaps&&B.mipmaps.length>0)for(let Pe=0;Pe<B.mipmaps.length;Pe++)fe(ee.__webglFramebuffer[Pe],G,B,r.COLOR_ATTACHMENT0,Ce,Pe);else fe(ee.__webglFramebuffer,G,B,r.COLOR_ATTACHMENT0,Ce,0);x(B)&&y(Ce),t.unbindTexture()}G.depthBuffer&&et(G)}function H(G){const B=G.textures;for(let ee=0,me=B.length;ee<me;ee++){const de=B[ee];if(x(de)){const _e=G.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ke=n.get(de).__webglTexture;t.bindTexture(_e,Ke),y(_e),t.unbindTexture()}}}const le=[],ae=[];function Ae(G){if(G.samples>0){if(Me(G)===!1){const B=G.textures,ee=G.width,me=G.height;let de=r.COLOR_BUFFER_BIT;const _e=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=n.get(G),Ce=B.length>1;if(Ce)for(let Pe=0;Pe<B.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Pe=0;Pe<B.length;Pe++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Pe]);const ot=n.get(B[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ot,0)}r.blitFramebuffer(0,0,ee,me,0,0,ee,me,de,r.NEAREST),u===!0&&(le.length=0,ae.length=0,le.push(r.COLOR_ATTACHMENT0+Pe),G.depthBuffer&&G.resolveDepthBuffer===!1&&(le.push(_e),ae.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Pe=0;Pe<B.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Pe]);const ot=n.get(B[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&u){const B=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[B])}}}function ve(G){return Math.min(i.maxSamples,G.samples)}function Me(G){const B=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function Be(G){const B=o.render.frame;d.get(G)!==B&&(d.set(G,B),G.update())}function Fe(G,B){const ee=G.colorSpace,me=G.format,de=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||ee!==xr&&ee!==ur&&(Lt.getTransfer(ee)===Ot?(me!==On||de!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),B}function nt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(h.width=G.naturalWidth||G.width,h.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(h.width=G.displayWidth,h.height=G.displayHeight):(h.width=G.width,h.height=G.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=ie,this.setTexture3D=Q,this.setTextureCube=ce,this.rebindTextures=it,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Me}function ax(r,e){function t(n,i=ur){let s;const o=Lt.getTransfer(i);if(n===qi)return r.UNSIGNED_BYTE;if(n===Hp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ey)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===My)return r.BYTE;if(n===Sy)return r.SHORT;if(n===qa)return r.UNSIGNED_SHORT;if(n===Gp)return r.INT;if(n===Ns)return r.UNSIGNED_INT;if(n===ii)return r.FLOAT;if(n===ml)return r.HALF_FLOAT;if(n===wy)return r.ALPHA;if(n===Cy)return r.RGB;if(n===On)return r.RGBA;if(n===Ty)return r.LUMINANCE;if(n===by)return r.LUMINANCE_ALPHA;if(n===Ls)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===zp)return r.RED;if(n===Vp)return r.RED_INTEGER;if(n===Ry)return r.RG;if(n===Wp)return r.RG_INTEGER;if(n===Xp)return r.RGBA_INTEGER;if(n===Cu||n===Tu||n===bu||n===Ru)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ru)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xf||n===Jf||n===Kf||n===Yf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qf||n===Qf||n===Zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qf||n===Qf)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zf)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jf||n===$f||n===ep||n===tp||n===np||n===ip||n===rp||n===sp||n===op||n===ap||n===lp||n===cp||n===up||n===hp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jf)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$f)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ep)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tp)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===np)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ip)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rp)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sp)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===op)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ap)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lp)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cp)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===up)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hp)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bu||n===dp||n===fp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Bu)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===By||n===pp||n===mp||n===gp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class lx extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LT={type:"move"};class sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,n),y=this._getHandJoint(h,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=d.position.distanceTo(f.position),g=.02,_=.005;h.inputState.pinching&&m>g+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(LT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const DT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
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

}`;class UT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ht,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pi({vertexShader:DT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new $o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class NT extends Ar{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",u=1,h=null,d=null,f=null,m=null,g=null,_=null;const A=new UT,x=t.getContextAttributes();let y=null,E=null;const S=[],C=[],F=new he;let R=null;const I=new en;I.layers.enable(1),I.viewport=new Dt;const U=new en;U.layers.enable(2),U.viewport=new Dt;const b=[I,U],T=new lx;T.layers.enable(1),T.layers.enable(2);let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=S[ne];return fe===void 0&&(fe=new sf,S[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=S[ne];return fe===void 0&&(fe=new sf,S[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=S[ne];return fe===void 0&&(fe=new sf,S[ne]=fe),fe.getHandSpace()};function J(ne){const fe=C.indexOf(ne.inputSource);if(fe===-1)return;const we=S[fe];we!==void 0&&(we.update(ne.inputSource,ne.frame,h||o),we.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<S.length;ne++){const fe=C[ne];fe!==null&&(C[ne]=null,S[ne].disconnect(fe))}L=null,X=null,A.reset(),e.setRenderTarget(y),g=null,m=null,f=null,i=null,E=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(F),i.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ii(g.framebufferWidth,g.framebufferHeight,{format:On,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,we=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Gs:Ls,we=x.stencil?Os:Ns);const et={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(i,t),m=f.createProjectionLayer(et),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ii(m.textureWidth,m.textureHeight,{format:On,type:qi,depthTexture:new tm(m.textureWidth,m.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(c),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ie(ne){for(let fe=0;fe<ne.removed.length;fe++){const we=ne.removed[fe],xe=C.indexOf(we);xe>=0&&(C[xe]=null,S[xe].disconnect(we))}for(let fe=0;fe<ne.added.length;fe++){const we=ne.added[fe];let xe=C.indexOf(we);if(xe===-1){for(let it=0;it<S.length;it++)if(it>=C.length){C.push(we),xe=it;break}else if(C[it]===null){C[it]=we,xe=it;break}if(xe===-1)break}const et=S[xe];et&&et.connect(we)}}const Q=new D,ce=new D;function N(ne,fe,we){Q.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(we.matrixWorld);const xe=Q.distanceTo(ce),et=fe.projectionMatrix.elements,it=we.projectionMatrix.elements,Ve=et[14]/(et[10]-1),H=et[14]/(et[10]+1),le=(et[9]+1)/et[5],ae=(et[9]-1)/et[5],Ae=(et[8]-1)/et[0],ve=(it[8]+1)/it[0],Me=Ve*Ae,Be=Ve*ve,Fe=xe/(-Ae+ve),nt=Fe*-Ae;fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(nt),ne.translateZ(Fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const G=Ve+Fe,B=H+Fe,ee=Me-nt,me=Be+(xe-nt),de=le*H/B*G,_e=ae*H/B*G;ne.projectionMatrix.makePerspective(ee,me,de,_e,G,B),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function Y(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;A.texture!==null&&(ne.near=A.depthNear,ne.far=A.depthFar),T.near=U.near=I.near=ne.near,T.far=U.far=I.far=ne.far,(L!==T.near||X!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,X=T.far,I.near=L,I.far=X,U.near=L,U.far=X,I.updateProjectionMatrix(),U.updateProjectionMatrix(),ne.updateProjectionMatrix());const fe=ne.parent,we=T.cameras;Y(T,fe);for(let xe=0;xe<we.length;xe++)Y(we[xe],fe);we.length===2?N(T,I,U):T.projectionMatrix.copy(I.projectionMatrix),K(ne,T,fe)};function K(ne,fe,we){we===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(we.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ko*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(T)};let re=null;function ye(ne,fe){if(d=fe.getViewerPose(h||o),_=fe,d!==null){const we=d.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let xe=!1;we.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let it=0;it<we.length;it++){const Ve=we[it];let H=null;if(g!==null)H=g.getViewport(Ve);else{const ae=f.getViewSubImage(m,Ve);H=ae.viewport,it===0&&(e.setRenderTargetTextures(E,ae.colorTexture,m.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(E))}let le=b[it];le===void 0&&(le=new en,le.layers.enable(it),le.viewport=new Dt,b[it]=le),le.matrix.fromArray(Ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(H.x,H.y,H.width,H.height),it===0&&(T.matrix.copy(le.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(le)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){const it=f.getDepthInformation(we[0]);it&&it.isValid&&it.texture&&A.init(e,it,i.renderState)}}for(let we=0;we<S.length;we++){const xe=C[we],et=S[we];xe!==null&&et!==void 0&&et.update(xe,fe,h||o)}re&&re(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}const De=new tx;De.setAnimationLoop(ye),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}}const ps=new oi,OT=new Ze;function GT(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,Zy(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function i(x,y,E,S,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?s(x,y):y.isMeshToonMaterial?(s(x,y),f(x,y)):y.isMeshPhongMaterial?(s(x,y),d(x,y)):y.isMeshStandardMaterial?(s(x,y),m(x,y),y.isMeshPhysicalMaterial&&g(x,y,C)):y.isMeshMatcapMaterial?(s(x,y),_(x,y)):y.isMeshDepthMaterial?s(x,y):y.isMeshDistanceMaterial?(s(x,y),A(x,y)):y.isMeshNormalMaterial?s(x,y):y.isLineBasicMaterial?(o(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?u(x,y,E,S):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Gn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Gn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const E=e.get(y),S=E.envMap,C=E.envMapRotation;S&&(x.envMap.value=S,ps.copy(C),ps.x*=-1,ps.y*=-1,ps.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),x.envMapRotation.value.setFromMatrix4(OT.makeRotationFromEuler(ps)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function o(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function u(x,y,E,S){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*E,x.scale.value=S*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function f(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,E){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Gn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const E=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function HT(r,e,t,n){let i={},s={},o=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,S){const C=S.program;n.uniformBlockBinding(E,C)}function h(E,S){let C=i[E.id];C===void 0&&(_(E),C=d(E),i[E.id]=C,E.addEventListener("dispose",x));const F=S.program;n.updateUBOMapping(E,F);const R=e.render.frame;s[E.id]!==R&&(m(E),s[E.id]=R)}function d(E){const S=f();E.__bindingPointIndex=S;const C=r.createBuffer(),F=E.__size,R=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,F,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,C),C}function f(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const S=i[E.id],C=E.uniforms,F=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let R=0,I=C.length;R<I;R++){const U=Array.isArray(C[R])?C[R]:[C[R]];for(let b=0,T=U.length;b<T;b++){const L=U[b];if(g(L,R,b,F)===!0){const X=L.__offset,J=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let ie=0;ie<J.length;ie++){const Q=J[ie],ce=A(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,X+Z,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,Z),Z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,S,C,F){const R=E.value,I=S+"_"+C;if(F[I]===void 0)return typeof R=="number"||typeof R=="boolean"?F[I]=R:F[I]=R.clone(),!0;{const U=F[I];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[I]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(E){const S=E.uniforms;let C=0;const F=16;for(let I=0,U=S.length;I<U;I++){const b=Array.isArray(S[I])?S[I]:[S[I]];for(let T=0,L=b.length;T<L;T++){const X=b[T],J=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,ie=J.length;Z<ie;Z++){const Q=J[Z],ce=A(Q),N=C%F;N!==0&&F-N<ce.boundary&&(C+=F-N),X.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=ce.storage}}}const R=C%F;return R>0&&(C+=F-R),E.__size=C,E.__cache={},this}function A(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function x(E){const S=E.target;S.removeEventListener("dispose",x);const C=o.indexOf(S.__bindingPointIndex);o.splice(C,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function y(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:u,update:h,dispose:y}}class cx{constructor(e={}){const{canvas:t=Ky(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let A=null,x=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=Ji,this.toneMappingExposure=1;const S=this;let C=!1,F=0,R=0,I=null,U=-1,b=null;const T=new Dt,L=new Dt;let X=null;const J=new Ie(0);let Z=0,ie=t.width,Q=t.height,ce=1,N=null,Y=null;const K=new Dt(0,0,ie,Q),re=new Dt(0,0,ie,Q);let ye=!1;const De=new yl;let ne=!1,fe=!1;const we=new Ze,xe=new D,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ve(){return I===null?ce:1}let H=n;function le(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",pe,!1),H===null){const V="webgl2";if(H=le(V,P),H===null)throw le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ae,Ae,ve,Me,Be,Fe,nt,G,B,ee,me,de,_e,Ke,Ce,Pe,ot,Se,We,vt,rt,Ne,ft,yt;function kt(){ae=new $w(H),ae.init(),Ne=new ax(H,ae),Ae=new Kw(H,ae,e,Ne),ve=new IT(H),Me=new nC(H),Be=new yT,Fe=new PT(H,ae,ve,Be,Ae,Ne,Me),nt=new qw(S),G=new jw(S),B=new cE(H),ft=new Xw(H,B),ee=new eC(H,B,Me,ft),me=new rC(H,ee,B,Me),We=new iC(H,Ae,Fe),Pe=new Yw(Be),de=new _T(S,nt,G,ae,Ae,ft,Pe),_e=new GT(S,Be),Ke=new AT,Ce=new TT(ae),Se=new Ww(S,nt,G,ve,me,m,u),ot=new BT(S,me,Ae),yt=new HT(H,Me,Ae,ve),vt=new Jw(H,ae,Me),rt=new tC(H,ae,Me),Me.programs=de.programs,S.capabilities=Ae,S.extensions=ae,S.properties=Be,S.renderLists=Ke,S.shadowMap=ot,S.state=ve,S.info=Me}kt();const k=new NT(S,H);this.xr=k,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(P){P!==void 0&&(ce=P,this.setSize(ie,Q,!1))},this.getSize=function(P){return P.set(ie,Q)},this.setSize=function(P,V,$=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=P,Q=V,t.width=Math.floor(P*ce),t.height=Math.floor(V*ce),$===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(ie*ce,Q*ce).floor()},this.setDrawingBufferSize=function(P,V,$){ie=P,Q=V,ce=$,t.width=Math.floor(P*$),t.height=Math.floor(V*$),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,V,$,te){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,V,$,te),ve.viewport(T.copy(K).multiplyScalar(ce).round())},this.getScissor=function(P){return P.copy(re)},this.setScissor=function(P,V,$,te){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,V,$,te),ve.scissor(L.copy(re).multiplyScalar(ce).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(P){ve.setScissorTest(ye=P)},this.setOpaqueSort=function(P){N=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(P=!0,V=!0,$=!0){let te=0;if(P){let q=!1;if(I!==null){const Te=I.texture.format;q=Te===Xp||Te===Wp||Te===Vp}if(q){const Te=I.texture.type,He=Te===qi||Te===Ns||Te===qa||Te===Os||Te===Hp||Te===kp,ze=Se.getClearColor(),Je=Se.getClearAlpha(),tt=ze.r,je=ze.g,Qe=ze.b;He?(g[0]=tt,g[1]=je,g[2]=Qe,g[3]=Je,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=tt,_[1]=je,_[2]=Qe,_[3]=Je,H.clearBufferiv(H.COLOR,0,_))}else te|=H.COLOR_BUFFER_BIT}V&&(te|=H.DEPTH_BUFFER_BIT),$&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ke.dispose(),Ce.dispose(),Be.dispose(),nt.dispose(),G.dispose(),me.dispose(),ft.dispose(),yt.dispose(),de.dispose(),k.dispose(),k.removeEventListener("sessionstart",Jn),k.removeEventListener("sessionend",Kn),Qi.stop()};function Ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const P=Me.autoReset,V=ot.enabled,$=ot.autoUpdate,te=ot.needsUpdate,q=ot.type;kt(),Me.autoReset=P,ot.enabled=V,ot.autoUpdate=$,ot.needsUpdate=te,ot.type=q}function pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function be(P){const V=P.target;V.removeEventListener("dispose",be),st(V)}function st(P){St(P),Be.remove(P)}function St(P){const V=Be.get(P).programs;V!==void 0&&(V.forEach(function($){de.releaseProgram($)}),P.isShaderMaterial&&de.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,$,te,q,Te){V===null&&(V=et);const He=q.isMesh&&q.matrixWorld.determinant()<0,ze=Th(P,V,$,te,q);ve.setMaterial(te,He);let Je=$.index,tt=1;if(te.wireframe===!0){if(Je=ee.getWireframeAttribute($),Je===void 0)return;tt=2}const je=$.drawRange,Qe=$.attributes.position;let Et=je.start*tt,Vt=(je.start+je.count)*tt;Te!==null&&(Et=Math.max(Et,Te.start*tt),Vt=Math.min(Vt,(Te.start+Te.count)*tt)),Je!==null?(Et=Math.max(Et,0),Vt=Math.min(Vt,Je.count)):Qe!=null&&(Et=Math.max(Et,0),Vt=Math.min(Vt,Qe.count));const Ut=Vt-Et;if(Ut<0||Ut===1/0)return;ft.setup(q,te,ze,$,Je);let rn,_t=vt;if(Je!==null&&(rn=B.get(Je),_t=rt,_t.setIndex(rn)),q.isMesh)te.wireframe===!0?(ve.setLineWidth(te.wireframeLinewidth*Ve()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if(q.isLine){let Re=te.linewidth;Re===void 0&&(Re=1),ve.setLineWidth(Re*Ve()),q.isLineSegments?_t.setMode(H.LINES):q.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else q.isPoints?_t.setMode(H.POINTS):q.isSprite&&_t.setMode(H.TRIANGLES);if(q.isBatchedMesh)q._multiDrawInstances!==null?_t.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances):_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)_t.renderInstances(Et,Ut,q.count);else if($.isInstancedBufferGeometry){const Re=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ut=Math.min($.instanceCount,Re);_t.renderInstances(Et,Ut,ut)}else _t.render(Et,Ut)};function zt(P,V,$){P.transparent===!0&&P.side===yi&&P.forceSinglePass===!1?(P.side=Gn,P.needsUpdate=!0,Ui(P,V,$),P.side=Yi,P.needsUpdate=!0,Ui(P,V,$),P.side=yi):Ui(P,V,$)}this.compile=function(P,V,$=null){$===null&&($=P),x=Ce.get($),x.init(V),E.push(x),$.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),P!==$&&P.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const te=new Set;return P.traverse(function(q){const Te=q.material;if(Te)if(Array.isArray(Te))for(let He=0;He<Te.length;He++){const ze=Te[He];zt(ze,$,q),te.add(ze)}else zt(Te,$,q),te.add(Te)}),E.pop(),x=null,te},this.compileAsync=function(P,V,$=null){const te=this.compile(P,V,$);return new Promise(q=>{function Te(){if(te.forEach(function(He){Be.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){q(P);return}setTimeout(Te,10)}ae.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let nn=null;function Pt(P){nn&&nn(P)}function Jn(){Qi.stop()}function Kn(){Qi.start()}const Qi=new tx;Qi.setAnimationLoop(Pt),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(P){nn=P,k.setAnimationLoop(P),P===null?Qi.stop():Qi.start()},k.addEventListener("sessionstart",Jn),k.addEventListener("sessionend",Kn),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(V),V=k.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,V,I),x=Ce.get(P,E.length),x.init(V),E.push(x),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),De.setFromProjectionMatrix(we),fe=this.localClippingEnabled,ne=Pe.init(this.clippingPlanes,fe),A=Ke.get(P,y.length),A.init(),y.push(A),k.enabled===!0&&k.isPresenting===!0){const Te=S.xr.getDepthSensingMesh();Te!==null&&ia(Te,V,-1/0,S.sortObjects)}ia(P,V,0,S.sortObjects),A.finish(),S.sortObjects===!0&&A.sort(N,Y),it=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,it&&Se.addToRenderList(A,P),this.info.render.frame++,ne===!0&&Pe.beginShadows();const $=x.state.shadowsArray;ot.render($,P,V),ne===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=A.opaque,q=A.transmissive;if(x.setupLights(),V.isArrayCamera){const Te=V.cameras;if(q.length>0)for(let He=0,ze=Te.length;He<ze;He++){const Je=Te[He];ra(te,q,P,Je)}it&&Se.render(P);for(let He=0,ze=Te.length;He<ze;He++){const Je=Te[He];Il(A,P,Je,Je.viewport)}}else q.length>0&&ra(te,q,P,V),it&&Se.render(P),Il(A,P,V);I!==null&&(Fe.updateMultisampleRenderTarget(I),Fe.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(S,P,V),ft.resetDefaultState(),U=-1,b=null,E.pop(),E.length>0?(x=E[E.length-1],ne===!0&&Pe.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?A=y[y.length-1]:A=null};function ia(P,V,$,te){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||De.intersectsSprite(P)){te&&xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(we);const He=me.update(P),ze=P.material;ze.visible&&A.push(P,He,ze,$,xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||De.intersectsObject(P))){const He=me.update(P),ze=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),xe.copy(He.boundingSphere.center)),xe.applyMatrix4(P.matrixWorld).applyMatrix4(we)),Array.isArray(ze)){const Je=He.groups;for(let tt=0,je=Je.length;tt<je;tt++){const Qe=Je[tt],Et=ze[Qe.materialIndex];Et&&Et.visible&&A.push(P,He,Et,$,xe.z,Qe)}}else ze.visible&&A.push(P,He,ze,$,xe.z,null)}}const Te=P.children;for(let He=0,ze=Te.length;He<ze;He++)ia(Te[He],V,$,te)}function Il(P,V,$,te){const q=P.opaque,Te=P.transmissive,He=P.transparent;x.setupLightsView($),ne===!0&&Pe.setGlobalState(S.clippingPlanes,$),te&&ve.viewport(T.copy(te)),q.length>0&&Mr(q,V,$),Te.length>0&&Mr(Te,V,$),He.length>0&&Mr(He,V,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ra(P,V,$,te){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new Ii(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ml:qi,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[te.id],He=te.viewport||T;Te.setSize(He.z,He.w);const ze=S.getRenderTarget();S.setRenderTarget(Te),S.getClearColor(J),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),it?Se.render($):S.clear();const Je=S.toneMapping;S.toneMapping=Ji;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),ne===!0&&Pe.setGlobalState(S.clippingPlanes,te),Mr(P,$,te),Fe.updateMultisampleRenderTarget(Te),Fe.updateRenderTargetMipmap(Te),ae.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Qe=0,Et=V.length;Qe<Et;Qe++){const Vt=V[Qe],Ut=Vt.object,rn=Vt.geometry,_t=Vt.material,Re=Vt.group;if(_t.side===yi&&Ut.layers.test(te.layers)){const ut=_t.side;_t.side=Gn,_t.needsUpdate=!0,Pl(Ut,$,te,rn,_t,Re),_t.side=ut,_t.needsUpdate=!0,je=!0}}je===!0&&(Fe.updateMultisampleRenderTarget(Te),Fe.updateRenderTargetMipmap(Te))}S.setRenderTarget(ze),S.setClearColor(J,Z),tt!==void 0&&(te.viewport=tt),S.toneMapping=Je}function Mr(P,V,$){const te=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Te=P.length;q<Te;q++){const He=P[q],ze=He.object,Je=He.geometry,tt=te===null?He.material:te,je=He.group;ze.layers.test($.layers)&&Pl(ze,V,$,Je,tt,je)}}function Pl(P,V,$,te,q,Te){P.onBeforeRender(S,V,$,te,q,Te),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(S,V,$,te,P,Te),q.transparent===!0&&q.side===yi&&q.forceSinglePass===!1?(q.side=Gn,q.needsUpdate=!0,S.renderBufferDirect($,V,te,q,P,Te),q.side=Yi,q.needsUpdate=!0,S.renderBufferDirect($,V,te,q,P,Te),q.side=yi):S.renderBufferDirect($,V,te,q,P,Te),P.onAfterRender(S,V,$,te,q,Te)}function Ui(P,V,$){V.isScene!==!0&&(V=et);const te=Be.get(P),q=x.state.lights,Te=x.state.shadowsArray,He=q.state.version,ze=de.getParameters(P,q.state,Te,V,$),Je=de.getProgramCacheKey(ze);let tt=te.programs;te.environment=P.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(P.isMeshStandardMaterial?G:nt).get(P.envMap||te.environment),te.envMapRotation=te.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,tt===void 0&&(P.addEventListener("dispose",be),tt=new Map,te.programs=tt);let je=tt.get(Je);if(je!==void 0){if(te.currentProgram===je&&te.lightsStateVersion===He)return Dl(P,ze),je}else ze.uniforms=de.getUniforms(P),P.onBuild($,ze,S),P.onBeforeCompile(ze,S),je=de.acquireProgram(ze,Je),tt.set(Je,je),te.uniforms=ze.uniforms;const Qe=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=Pe.uniform),Dl(P,ze),te.needsLights=Rh(P),te.lightsStateVersion=He,te.needsLights&&(Qe.ambientLightColor.value=q.state.ambient,Qe.lightProbe.value=q.state.probe,Qe.directionalLights.value=q.state.directional,Qe.directionalLightShadows.value=q.state.directionalShadow,Qe.spotLights.value=q.state.spot,Qe.spotLightShadows.value=q.state.spotShadow,Qe.rectAreaLights.value=q.state.rectArea,Qe.ltc_1.value=q.state.rectAreaLTC1,Qe.ltc_2.value=q.state.rectAreaLTC2,Qe.pointLights.value=q.state.point,Qe.pointLightShadows.value=q.state.pointShadow,Qe.hemisphereLights.value=q.state.hemi,Qe.directionalShadowMap.value=q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Qe.spotShadowMap.value=q.state.spotShadowMap,Qe.spotLightMatrix.value=q.state.spotLightMatrix,Qe.spotLightMap.value=q.state.spotLightMap,Qe.pointShadowMap.value=q.state.pointShadowMap,Qe.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=je,te.uniformsList=null,je}function Ll(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Pu.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Dl(P,V){const $=Be.get(P);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Th(P,V,$,te,q){V.isScene!==!0&&(V=et),Fe.resetTextureUnits();const Te=V.fog,He=te.isMeshStandardMaterial?V.environment:null,ze=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:xr,Je=(te.isMeshStandardMaterial?G:nt).get(te.envMap||He),tt=te.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!$.morphAttributes.position,Et=!!$.morphAttributes.normal,Vt=!!$.morphAttributes.color;let Ut=Ji;te.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ut=S.toneMapping);const rn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=rn!==void 0?rn.length:0,Re=Be.get(te),ut=x.state.lights;if(ne===!0&&(fe===!0||P!==b)){const Pn=P===b&&te.id===U;Pe.setState(te,P,Pn)}let xt=!1;te.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ut.state.version||Re.outputColorSpace!==ze||q.isBatchedMesh&&Re.batching===!1||!q.isBatchedMesh&&Re.batching===!0||q.isBatchedMesh&&Re.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Re.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||q.isInstancedMesh&&Re.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Re.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Re.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Re.instancingMorph===!1&&q.morphTexture!==null||Re.envMap!==Je||te.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Pe.numPlanes||Re.numIntersection!==Pe.numIntersection)||Re.vertexAlphas!==tt||Re.vertexTangents!==je||Re.morphTargets!==Qe||Re.morphNormals!==Et||Re.morphColors!==Vt||Re.toneMapping!==Ut||Re.morphTargetsCount!==_t)&&(xt=!0):(xt=!0,Re.__version=te.version);let Nt=Re.currentProgram;xt===!0&&(Nt=Ui(te,V,q));let cn=!1,In=!1,Ni=!1;const Tt=Nt.getUniforms(),Yn=Re.uniforms;if(ve.useProgram(Nt.program)&&(cn=!0,In=!0,Ni=!0),te.id!==U&&(U=te.id,In=!0),cn||b!==P){Tt.setValue(H,"projectionMatrix",P.projectionMatrix),Tt.setValue(H,"viewMatrix",P.matrixWorldInverse);const Pn=Tt.map.cameraPosition;Pn!==void 0&&Pn.setValue(H,xe.setFromMatrixPosition(P.matrixWorld)),Ae.logarithmicDepthBuffer&&Tt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Tt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,In=!0,Ni=!0)}if(q.isSkinnedMesh){Tt.setOptional(H,q,"bindMatrix"),Tt.setOptional(H,q,"bindMatrixInverse");const Pn=q.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Tt.setValue(H,"boneTexture",Pn.boneTexture,Fe))}q.isBatchedMesh&&(Tt.setOptional(H,q,"batchingTexture"),Tt.setValue(H,"batchingTexture",q._matricesTexture,Fe),Tt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Tt.setValue(H,"batchingColorTexture",q._colorsTexture,Fe));const qs=$.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&We.update(q,$,Nt),(In||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,Tt.setValue(H,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Yn.envMap.value=Je,Yn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(Yn.envMapIntensity.value=V.environmentIntensity),In&&(Tt.setValue(H,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&bh(Yn,Ni),Te&&te.fog===!0&&_e.refreshFogUniforms(Yn,Te),_e.refreshMaterialUniforms(Yn,te,ce,Q,x.state.transmissionRenderTarget[P.id]),Pu.upload(H,Ll(Re),Yn,Fe)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Pu.upload(H,Ll(Re),Yn,Fe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Tt.setValue(H,"center",q.center),Tt.setValue(H,"modelViewMatrix",q.modelViewMatrix),Tt.setValue(H,"normalMatrix",q.normalMatrix),Tt.setValue(H,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Pn=te.uniformsGroups;for(let Sr=0,Fl=Pn.length;Sr<Fl;Sr++){const Hn=Pn[Sr];yt.update(Hn,Nt),yt.bind(Hn,Nt)}}return Nt}function bh(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function Rh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,V,$){Be.get(P.texture).__webglTexture=V,Be.get(P.depthTexture).__webglTexture=$;const te=Be.get(P);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=$===void 0,te.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const $=Be.get(P);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,$=0){I=P,F=V,R=$;let te=!0,q=null,Te=!1,He=!1;if(P){const Je=Be.get(P);Je.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(H.FRAMEBUFFER,null),te=!1):Je.__webglFramebuffer===void 0?Fe.setupRenderTarget(P):Je.__hasExternalTextures&&Fe.rebindTextures(P,Be.get(P.texture).__webglTexture,Be.get(P.depthTexture).__webglTexture);const tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);const je=Be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[V])?q=je[V][$]:q=je[V],Te=!0):P.samples>0&&Fe.useMultisampledRTT(P)===!1?q=Be.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?q=je[$]:q=je,T.copy(P.viewport),L.copy(P.scissor),X=P.scissorTest}else T.copy(K).multiplyScalar(ce).floor(),L.copy(re).multiplyScalar(ce).floor(),X=ye;if(ve.bindFramebuffer(H.FRAMEBUFFER,q)&&te&&ve.drawBuffers(P,q),ve.viewport(T),ve.scissor(L),ve.setScissorTest(X),Te){const Je=Be.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Je.__webglTexture,$)}else if(He){const Je=Be.get(P.texture),tt=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Je.__webglTexture,$||0,tt)}U=-1},this.readRenderTargetPixels=function(P,V,$,te,q,Te,He){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze){ve.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Je=P.texture,tt=Je.format,je=Je.type;if(!Ae.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-te&&$>=0&&$<=P.height-q&&H.readPixels(V,$,te,q,Ne.convert(tt),Ne.convert(je),Te)}finally{const Je=I!==null?Be.get(I).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,V,$,te,q,Te,He){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze){ve.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Je=P.texture,tt=Je.format,je=Je.type;if(!Ae.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-te&&$>=0&&$<=P.height-q){const Qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(V,$,te,q,Ne.convert(tt),Ne.convert(je),0),H.flush();const Et=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await DS(H,Et,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te)}finally{H.deleteBuffer(Qe),H.deleteSync(Et)}return Te}}finally{const Je=I!==null?Be.get(I).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(P,V=null,$=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const te=Math.pow(2,-$),q=Math.floor(P.image.width*te),Te=Math.floor(P.image.height*te),He=V!==null?V.x:0,ze=V!==null?V.y:0;Fe.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,He,ze,q,Te),ve.unbindTexture()},this.copyTextureToTexture=function(P,V,$=null,te=null,q=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,P=arguments[1],V=arguments[2],q=arguments[3]||0,$=null);let Te,He,ze,Je,tt,je;$!==null?(Te=$.max.x-$.min.x,He=$.max.y-$.min.y,ze=$.min.x,Je=$.min.y):(Te=P.image.width,He=P.image.height,ze=0,Je=0),te!==null?(tt=te.x,je=te.y):(tt=0,je=0);const Qe=Ne.convert(V.format),Et=Ne.convert(V.type);Fe.setTexture2D(V,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const Vt=H.getParameter(H.UNPACK_ROW_LENGTH),Ut=H.getParameter(H.UNPACK_IMAGE_HEIGHT),rn=H.getParameter(H.UNPACK_SKIP_PIXELS),_t=H.getParameter(H.UNPACK_SKIP_ROWS),Re=H.getParameter(H.UNPACK_SKIP_IMAGES),ut=P.isCompressedTexture?P.mipmaps[q]:P.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ut.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,tt,je,Te,He,Qe,Et,ut.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,tt,je,ut.width,ut.height,Qe,ut.data):H.texSubImage2D(H.TEXTURE_2D,q,tt,je,Qe,Et,ut),H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut),H.pixelStorei(H.UNPACK_SKIP_PIXELS,rn),H.pixelStorei(H.UNPACK_SKIP_ROWS,_t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Re),q===0&&V.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(P,V,$=null,te=null,q=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,te=arguments[1]||null,P=arguments[2],V=arguments[3],q=arguments[4]||0);let Te,He,ze,Je,tt,je,Qe,Et,Vt;const Ut=P.isCompressedTexture?P.mipmaps[q]:P.image;$!==null?(Te=$.max.x-$.min.x,He=$.max.y-$.min.y,ze=$.max.z-$.min.z,Je=$.min.x,tt=$.min.y,je=$.min.z):(Te=Ut.width,He=Ut.height,ze=Ut.depth,Je=0,tt=0,je=0),te!==null?(Qe=te.x,Et=te.y,Vt=te.z):(Qe=0,Et=0,Vt=0);const rn=Ne.convert(V.format),_t=Ne.convert(V.type);let Re;if(V.isData3DTexture)Fe.setTexture3D(V,0),Re=H.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Fe.setTexture2DArray(V,0),Re=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const ut=H.getParameter(H.UNPACK_ROW_LENGTH),xt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Nt=H.getParameter(H.UNPACK_SKIP_PIXELS),cn=H.getParameter(H.UNPACK_SKIP_ROWS),In=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je),P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Re,q,Qe,Et,Vt,Te,He,ze,rn,_t,Ut.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Re,q,Qe,Et,Vt,Te,He,ze,rn,Ut.data):H.texSubImage3D(Re,q,Qe,Et,Vt,Te,He,ze,rn,_t,Ut),H.pixelStorei(H.UNPACK_ROW_LENGTH,ut),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,In),q===0&&V.generateMipmaps&&H.generateMipmap(Re),ve.unbindTexture()},this.initRenderTarget=function(P){Be.get(P).__webglFramebuffer===void 0&&Fe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Fe.setTextureCube(P,0):P.isData3DTexture?Fe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Fe.setTexture2DArray(P,0):Fe.setTexture2D(P,0),ve.unbindTexture()},this.resetState=function(){F=0,R=0,I=null,ve.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eh?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===gl?"display-p3":"srgb"}}class ih{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new ih(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ou extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new D;class qr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rm extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wo;const ba=new D,Co=new D,To=new D,bo=new he,Ra=new he,ux=new Ze,qc=new D,Ba=new D,Qc=new D,hv=new he,of=new he,dv=new he;class hx extends Mt{constructor(e=new rm){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xl(t,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new qr(n,3,0,!1)),wo.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=wo,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Co.setFromMatrixScale(this.matrixWorld),ux.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),To.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Co.multiplyScalar(-To.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Zc(qc.set(-.5,-.5,0),To,o,Co,i,s),Zc(Ba.set(.5,-.5,0),To,o,Co,i,s),Zc(Qc.set(.5,.5,0),To,o,Co,i,s),hv.set(0,0),of.set(1,0),dv.set(1,1);let c=e.ray.intersectTriangle(qc,Ba,Qc,!1,ba);if(c===null&&(Zc(Ba.set(-.5,.5,0),To,o,Co,i,s),of.set(0,1),c=e.ray.intersectTriangle(qc,Qc,Ba,!1,ba),c===null))return;const u=e.ray.origin.distanceTo(ba);u<e.near||u>e.far||t.push({distance:u,point:ba.clone(),uv:ti.getInterpolation(ba,qc,Ba,Qc,hv,of,dv,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zc(r,e,t,n,i,s){bo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ra.x=s*bo.x-i*bo.y,Ra.y=i*bo.x+s*bo.y):Ra.copy(bo),r.copy(e),r.x+=Ra.x,r.y+=Ra.y,r.applyMatrix4(ux)}const jc=new D,fv=new D;class dx extends Mt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){jc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(jc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){jc.setFromMatrixPosition(e.matrixWorld),fv.setFromMatrixPosition(this.matrixWorld);const n=jc.distanceTo(fv)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const pv=new D,mv=new Dt,gv=new Dt,kT=new D,vv=new Ze,$c=new D,af=new yn,_v=new Ze,lf=new jo;class sm extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wf,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$c),this.boundingBox.expandByPoint($c)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$c),this.boundingSphere.expandByPoint($c)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),af.copy(this.boundingSphere),af.applyMatrix4(i),e.ray.intersectsSphere(af)!==!1&&(_v.copy(i).invert(),lf.copy(e.ray).applyMatrix4(_v),!(this.boundingBox!==null&&lf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ay?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mv.fromBufferAttribute(i.attributes.skinIndex,e),gv.fromBufferAttribute(i.attributes.skinWeight,e),pv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gv.getComponent(s);if(o!==0){const c=mv.getComponent(s);vv.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(kT.copy(pv).applyMatrix4(vv),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sh extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mr extends Ht{constructor(e=null,t=1,n=1,i,s,o,c,u,h=hn,d=hn,f,m){super(null,o,c,u,h,d,i,s,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yv=new Ze,zT=new Ze;class Al{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:zT;yv.multiplyMatrices(c,t[s]),yv.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mr(t,e,e,On,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new sh),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Hs extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new Ze,xv=new Ze,eu=[],Av=new bn,VT=new Ze,Ia=new tn,Pa=new yn;class om extends tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,VT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Av.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(Av)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Pa.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ro),xv.multiplyMatrices(n,Ro),Ia.matrixWorld=xv,Ia.raycast(e,eu);for(let o=0,c=eu.length;o<c;o++){const u=eu[o];u.instanceId=s,u.object=this,t.push(u)}eu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(i*this.count),i,this.count,zp,ii));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function WT(r,e){return r.z-e.z}function XT(r,e){return e.z-r.z}class JT{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Bo="batchId",Or=new Ze,cf=new Ze,KT=new Ze,YT=new Ie(1,1,1),Mv=new Ze,uf=new yl,tu=new bn,ms=new yn,La=new D,Sv=new D,qT=new D,hf=new JT,Cn=new tn,nu=[];function QT(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class fx extends tn{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new ct,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture(),this._colorsTexture=null}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new mr(t,e,e,On,ii);this._matricesTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxGeometryCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new mr(t,e,e,On,ii);n.colorSpace=Lt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const c in e.attributes){const u=e.getAttribute(c),{array:h,itemSize:d,normalized:f}=u,m=new h.constructor(n*d),g=new Ct(m,d,f);t.setAttribute(c,g)}if(e.getIndex()!==null){const c=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Ct(c,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Bo,new Ct(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Bo))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Bo}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Bo)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Or),this.getBoundingBoxAt(i,tu).applyMatrix4(Or),t.union(tu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Or),this.getBoundingSphereAt(i,ms).applyMatrix4(Or),t.union(ms))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),d=h!==null;if(d&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const f=this._visibility,m=this._active,g=this._matricesTexture,_=this._matricesTexture.image.data,A=this._colorsTexture;f.push(!0),m.push(!0);const x=this._geometryCount;this._geometryCount++,KT.toArray(_,x*16),g.needsUpdate=!0,A!==null&&(YT.toArray(A.image.data,x*4),A.needsUpdate=!0),o.push(i),c.push({start:d?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new bn,sphereInitialized:!1,sphere:new yn});const y=this.geometry.getAttribute(Bo);for(let E=0;E<i.vertexCount;E++)y.setX(i.vertexStart+E,x);return y.needsUpdate=!0,this.setGeometryAt(x,e),x}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),c=this._reservedRanges[e];if(i&&o.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){if(g===Bo)continue;const _=t.getAttribute(g),A=n.getAttribute(g);QT(_,A,u);const x=_.itemSize;for(let y=_.count,E=h;y<E;y++){const S=u+y;for(let C=0;C<x;C++)A.setComponent(S,C,0)}A.needsUpdate=!0,A.addUpdateRange(u*x,h*x)}if(i){const g=c.indexStart;for(let _=0;_<o.count;_++)s.setX(g+_,u+o.getX(_));for(let _=o.count,A=c.indexCount;_<A;_++)s.setX(g+_,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const d=this._bounds[e];t.boundingBox!==null?(d.box.copy(t.boundingBox),d.boxInitialized=!0):d.boxInitialized=!1,t.boundingSphere!==null?(d.sphere.copy(t.boundingSphere),d.sphereInitialized=!0):d.sphereInitialized=!1;const f=this._drawRanges[e],m=t.getAttribute("position");return f.count=i?o.count:m.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.box,o=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const c=o.index,u=o.attributes.position,h=this._drawRanges[e];for(let d=h.start,f=h.start+h.count;d<f;d++){let m=d;c&&(m=c.getX(m)),s.expandByPoint(La.fromBufferAttribute(u,m))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,tu),tu.getCenter(s.center);const c=o.index,u=o.attributes.position,h=this._drawRanges[e];let d=0;for(let f=h.start,m=h.start+h.count;f<m;f++){let g=f;c&&(g=c.getX(g)),La.fromBufferAttribute(u,g),d=Math.max(d,s.center.distanceToSquared(La))}s.radius=Math.sqrt(d),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._active,i=this._colorsTexture,s=this._colorsTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){const n=this._active,i=this._colorsTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,o=this._geometryCount,c=this.matrixWorld,u=this.geometry;Cn.material=this.material,Cn.geometry.index=u.index,Cn.geometry.attributes=u.attributes,Cn.geometry.boundingBox===null&&(Cn.geometry.boundingBox=new bn),Cn.geometry.boundingSphere===null&&(Cn.geometry.boundingSphere=new yn);for(let h=0;h<o;h++){if(!n[h]||!i[h])continue;const d=s[h];Cn.geometry.setDrawRange(d.start,d.count),this.getMatrixAt(h,Cn.matrixWorld).premultiply(c),this.getBoundingBoxAt(h,Cn.geometry.boundingBox),this.getBoundingSphereAt(h,Cn.geometry.boundingSphere),Cn.raycast(e,nu);for(let f=0,m=nu.length;f<m;f++){const g=nu[f];g.object=this,g.batchId=h,t.push(g)}nu.length=0}Cn.material=null,Cn.geometry.index=null,Cn.geometry.attributes={},Cn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),c=o===null?1:o.array.BYTES_PER_ELEMENT,u=this._active,h=this._visibility,d=this._multiDrawStarts,f=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(Mv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),uf.setFromProjectionMatrix(Mv,e.coordinateSystem));let _=0;if(this.sortObjects){cf.copy(this.matrixWorld).invert(),La.setFromMatrixPosition(n.matrixWorld).applyMatrix4(cf),Sv.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(cf);for(let y=0,E=h.length;y<E;y++)if(h[y]&&u[y]){this.getMatrixAt(y,Or),this.getBoundingSphereAt(y,ms).applyMatrix4(Or);let S=!1;if(g&&(S=!uf.intersectsSphere(ms)),!S){const C=qT.subVectors(ms.center,La).dot(Sv);hf.push(m[y],C)}}const A=hf.list,x=this.customSort;x===null?A.sort(s.transparent?XT:WT):x.call(this,A,n);for(let y=0,E=A.length;y<E;y++){const S=A[y];d[_]=S.start*c,f[_]=S.count,_++}hf.reset()}else for(let A=0,x=h.length;A<x;A++)if(h[A]&&u[A]){let y=!1;if(g&&(this.getMatrixAt(A,Or),this.getBoundingSphereAt(A,ms).applyMatrix4(Or),y=!uf.intersectsSphere(ms)),!y){const E=m[A];d[_]=E.start*c,f[_]=E.count,_++}}this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class Rn extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gu=new D,Hu=new D,Ev=new Ze,Da=new jo,iu=new yn,df=new D,wv=new D;class yr extends Mt{constructor(e=new ct,t=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gu.fromBufferAttribute(t,i-1),Hu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gu.distanceTo(Hu);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(i),iu.radius+=s,e.ray.intersectsSphere(iu)===!1)return;Ev.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Ev);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){const g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let A=g,x=_-1;A<x;A+=h){const y=d.getX(A),E=d.getX(A+1),S=ru(this,e,Da,u,y,E);S&&t.push(S)}if(this.isLineLoop){const A=d.getX(_-1),x=d.getX(g),y=ru(this,e,Da,u,A,x);y&&t.push(y)}}else{const g=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let A=g,x=_-1;A<x;A+=h){const y=ru(this,e,Da,u,A,A+1);y&&t.push(y)}if(this.isLineLoop){const A=ru(this,e,Da,u,_-1,g);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function ru(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Gu.fromBufferAttribute(o,i),Hu.fromBufferAttribute(o,s),t.distanceSqToSegment(Gu,Hu,df,wv)>n)return;df.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(df);if(!(u<e.near||u>e.far))return{distance:u,point:wv.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Cv=new D,Tv=new D;class Li extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Cv.fromBufferAttribute(t,i),Tv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cv.distanceTo(Tv);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class am extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class oh extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bv=new Ze,Ap=new jo,su=new yn,ou=new D;class lm extends Mt{constructor(e=new ct,t=new oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),su.copy(n.boundingSphere),su.applyMatrix4(i),su.radius+=s,e.ray.intersectsSphere(su)===!1)return;bv.copy(i).invert(),Ap.copy(e.ray).applyMatrix4(bv);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,A=g;_<A;_++){const x=h.getX(_);ou.fromBufferAttribute(f,x),Rv(ou,x,u,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,A=g;_<A;_++)ou.fromBufferAttribute(f,_),Rv(ou,_,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Rv(r,e,t,n,i,s,o){const c=Ap.distanceSqToPoint(r);if(c<t){const u=new D;Ap.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:o})}}class ZT extends Ht{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Qt,this.magFilter=s!==void 0?s:Qt,this.generateMipmaps=!1;const d=this;function f(){d.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class jT extends Ht{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=hn,this.minFilter=hn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ah extends Ht{constructor(e,t,n,i,s,o,c,u,h,d,f,m){super(null,o,c,u,h,d,i,s,f,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class $T extends ah{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=ni,this.layerUpdates=new Set}addLayerUpdates(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eb extends ah{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,_r),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class tb extends Ht{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-o,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(s-1);const d=n[i],m=n[i+1]-d,g=(o-d)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),c=this.getPoint(s),u=t||(o.isVector2?new he:new D);return u.copy(c).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],o=[],c=new D,u=new Ze;for(let g=0;g<=e;g++){const _=g/e;i[g]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),m=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),o[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const _=Math.acos(qt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,_))}o[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(qt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let _=1;_<=e;_++)s[_].applyMatrix4(u.makeRotationAxis(i[_],g*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lh extends Di{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*d-g*f+this.aX,h=m*f+g*d+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class px extends lh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cm(){let r=0,e=0,t=0,n=0;function i(s,o,c,u){r=s,e=c,t=-3*s+3*o-2*c-u,n=2*s-2*o+c+u}return{initCatmullRom:function(s,o,c,u,h){i(o,c,h*(c-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,c,u,h,d,f){let m=(o-s)/h-(c-s)/(h+d)+(c-o)/d,g=(c-o)/d-(u-o)/(d+f)+(u-c)/f;m*=d,g*=d,i(o,c,m,g)},calc:function(s){const o=s*s,c=o*s;return r+e*s+t*o+n*c}}}const au=new D,ff=new cm,pf=new cm,mf=new cm;class mx extends Di{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),u=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,d;this.closed||c>0?h=i[(c-1)%s]:(au.subVectors(i[0],i[1]).add(i[0]),h=au);const f=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?d=i[(c+2)%s]:(au.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=au),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(f),g),A=Math.pow(f.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(d),g);A<1e-4&&(A=1),_<1e-4&&(_=A),x<1e-4&&(x=A),ff.initNonuniformCatmullRom(h.x,f.x,m.x,d.x,_,A,x),pf.initNonuniformCatmullRom(h.y,f.y,m.y,d.y,_,A,x),mf.initNonuniformCatmullRom(h.z,f.z,m.z,d.z,_,A,x)}else this.curveType==="catmullrom"&&(ff.initCatmullRom(h.x,f.x,m.x,d.x,this.tension),pf.initCatmullRom(h.y,f.y,m.y,d.y,this.tension),mf.initCatmullRom(h.z,f.z,m.z,d.z,this.tension));return n.set(ff.calc(u),pf.calc(u),mf.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bv(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+o)*u+(-3*t+3*n-2*s-o)*c+s*r+t}function nb(r,e){const t=1-r;return t*t*e}function ib(r,e){return 2*(1-r)*r*e}function rb(r,e){return r*r*e}function Va(r,e,t,n){return nb(r,e)+ib(r,t)+rb(r,n)}function sb(r,e){const t=1-r;return t*t*t*e}function ob(r,e){const t=1-r;return 3*t*t*r*e}function ab(r,e){return 3*(1-r)*r*r*e}function lb(r,e){return r*r*r*e}function Wa(r,e,t,n,i){return sb(r,e)+ob(r,t)+ab(r,n)+lb(r,i)}class um extends Di{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(Wa(e,i.x,s.x,o.x,c.x),Wa(e,i.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gx extends Di{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(Wa(e,i.x,s.x,o.x,c.x),Wa(e,i.y,s.y,o.y,c.y),Wa(e,i.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends Di{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vx extends Di{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends Di{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Va(e,i.x,s.x,o.x),Va(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends Di{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Va(e,i.x,s.x,o.x),Va(e,i.y,s.y,o.y),Va(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),c=s-o,u=i[o===0?o:o-1],h=i[o],d=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Bv(c,u.x,h.x,d.x,f.x),Bv(c,u.y,h.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}const ku=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:px,CatmullRomCurve3:mx,CubicBezierCurve:um,CubicBezierCurve3:gx,EllipseCurve:lh,LineCurve:hm,LineCurve3:vx,QuadraticBezierCurve:dm,QuadraticBezierCurve3:fm,SplineCurve:pm},Symbol.toStringTag,{value:"Module"}));class _x extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ku[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-o/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(c);for(let h=0;h<u.length;h++){const d=u[h];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ku[i.type]().fromJSON(i))}return this}}class il extends _x{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hm(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new dm(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const c=new um(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,c,u){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,n,i,s,o,c,u),this}absellipse(e,t,n,i,s,o,c,u){const h=new lh(e,t,n,i,s,o,c,u);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ml extends ct{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=qt(i,0,Math.PI*2);const s=[],o=[],c=[],u=[],h=[],d=1/t,f=new D,m=new he,g=new D,_=new D,A=new D;let x=0,y=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,y=e[E+1].y-e[E].y,g.x=y*1,g.y=-x,g.z=y*0,A.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(A.x,A.y,A.z);break;default:x=e[E+1].x-e[E].x,y=e[E+1].y-e[E].y,g.x=y*1,g.y=-x,g.z=y*0,_.copy(g),g.x+=A.x,g.y+=A.y,g.z+=A.z,g.normalize(),u.push(g.x,g.y,g.z),A.copy(_)}for(let E=0;E<=t;E++){const S=n+E*d*i,C=Math.sin(S),F=Math.cos(S);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*C,f.y=e[R].y,f.z=e[R].x*F,o.push(f.x,f.y,f.z),m.x=E/t,m.y=R/(e.length-1),c.push(m.x,m.y);const I=u[3*R+0]*C,U=u[3*R+1],b=u[3*R+0]*F;h.push(I,U,b)}}for(let E=0;E<t;E++)for(let S=0;S<e.length-1;S++){const C=S+E*e.length,F=C,R=C+e.length,I=C+e.length+1,U=C+1;s.push(F,R,U),s.push(I,U,R)}this.setIndex(s),this.setAttribute("position",new Xe(o,3)),this.setAttribute("uv",new Xe(c,2)),this.setAttribute("normal",new Xe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.points,e.segments,e.phiStart,e.phiLength)}}class ch extends Ml{constructor(e=1,t=1,n=4,i=8){const s=new il;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ch(e.radius,e.length,e.capSegments,e.radialSegments)}}class uh extends ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],c=[],u=[],h=new D,d=new he;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let f=0,m=3;f<=t;f++,m+=3){const g=n+f/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),c.push(0,0,1),d.x=(o[m]/e+1)/2,d.y=(o[m+1]/e+1)/2,u.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ta extends ct{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const d=[],f=[],m=[],g=[];let _=0;const A=[],x=n/2;let y=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(g,2));function E(){const C=new D,F=new D;let R=0;const I=(t-e)/n;for(let U=0;U<=s;U++){const b=[],T=U/s,L=T*(t-e)+e;for(let X=0;X<=i;X++){const J=X/i,Z=J*u+c,ie=Math.sin(Z),Q=Math.cos(Z);F.x=L*ie,F.y=-T*n+x,F.z=L*Q,f.push(F.x,F.y,F.z),C.set(ie,I,Q).normalize(),m.push(C.x,C.y,C.z),g.push(J,1-T),b.push(_++)}A.push(b)}for(let U=0;U<i;U++)for(let b=0;b<s;b++){const T=A[b][U],L=A[b+1][U],X=A[b+1][U+1],J=A[b][U+1];d.push(T,L,J),d.push(L,X,J),R+=6}h.addGroup(y,R,0),y+=R}function S(C){const F=_,R=new he,I=new D;let U=0;const b=C===!0?e:t,T=C===!0?1:-1;for(let X=1;X<=i;X++)f.push(0,x*T,0),m.push(0,T,0),g.push(.5,.5),_++;const L=_;for(let X=0;X<=i;X++){const Z=X/i*u+c,ie=Math.cos(Z),Q=Math.sin(Z);I.x=b*Q,I.y=x*T,I.z=b*ie,f.push(I.x,I.y,I.z),m.push(0,T,0),R.x=ie*.5+.5,R.y=Q*.5*T+.5,g.push(R.x,R.y),_++}for(let X=0;X<i;X++){const J=F+X,Z=L+X;C===!0?d.push(Z,Z+1,J):d.push(Z+1,Z,J),U+=3}h.addGroup(y,U,C===!0?1:2),y+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hh extends ta{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new hh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];c(i),h(n),d(),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(s.slice(),3)),this.setAttribute("uv",new Xe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const S=new D,C=new D,F=new D;for(let R=0;R<t.length;R+=3)g(t[R+0],S),g(t[R+1],C),g(t[R+2],F),u(S,C,F,E)}function u(E,S,C,F){const R=F+1,I=[];for(let U=0;U<=R;U++){I[U]=[];const b=E.clone().lerp(C,U/R),T=S.clone().lerp(C,U/R),L=R-U;for(let X=0;X<=L;X++)X===0&&U===R?I[U][X]=b:I[U][X]=b.clone().lerp(T,X/L)}for(let U=0;U<R;U++)for(let b=0;b<2*(R-U)-1;b++){const T=Math.floor(b/2);b%2===0?(m(I[U][T+1]),m(I[U+1][T]),m(I[U][T])):(m(I[U][T+1]),m(I[U+1][T+1]),m(I[U+1][T]))}}function h(E){const S=new D;for(let C=0;C<s.length;C+=3)S.x=s[C+0],S.y=s[C+1],S.z=s[C+2],S.normalize().multiplyScalar(E),s[C+0]=S.x,s[C+1]=S.y,s[C+2]=S.z}function d(){const E=new D;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const C=x(E)/2/Math.PI+.5,F=y(E)/Math.PI+.5;o.push(C,1-F)}_(),f()}function f(){for(let E=0;E<o.length;E+=6){const S=o[E+0],C=o[E+2],F=o[E+4],R=Math.max(S,C,F),I=Math.min(S,C,F);R>.9&&I<.1&&(S<.2&&(o[E+0]+=1),C<.2&&(o[E+2]+=1),F<.2&&(o[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,S){const C=E*3;S.x=e[C+0],S.y=e[C+1],S.z=e[C+2]}function _(){const E=new D,S=new D,C=new D,F=new D,R=new he,I=new he,U=new he;for(let b=0,T=0;b<s.length;b+=9,T+=6){E.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),C.set(s[b+6],s[b+7],s[b+8]),R.set(o[T+0],o[T+1]),I.set(o[T+2],o[T+3]),U.set(o[T+4],o[T+5]),F.copy(E).add(S).add(C).divideScalar(3);const L=x(F);A(R,T+0,E,L),A(I,T+2,S,L),A(U,T+4,C,L)}}function A(E,S,C,F){F<0&&E.x===1&&(o[S]=E.x-1),C.x===0&&C.z===0&&(o[S]=F/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function y(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.vertices,e.indices,e.radius,e.details)}}class dh extends jr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dh(e.radius,e.detail)}}const lu=new D,cu=new D,gf=new D,uu=new ti;class yx extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ds*t),o=e.getIndex(),c=e.getAttribute("position"),u=o?o.count:c.count,h=[0,0,0],d=["a","b","c"],f=new Array(3),m={},g=[];for(let _=0;_<u;_+=3){o?(h[0]=o.getX(_),h[1]=o.getX(_+1),h[2]=o.getX(_+2)):(h[0]=_,h[1]=_+1,h[2]=_+2);const{a:A,b:x,c:y}=uu;if(A.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),y.fromBufferAttribute(c,h[2]),uu.getNormal(gf),f[0]=`${Math.round(A.x*i)},${Math.round(A.y*i)},${Math.round(A.z*i)}`,f[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,f[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const S=(E+1)%3,C=f[E],F=f[S],R=uu[d[E]],I=uu[d[S]],U=`${C}_${F}`,b=`${F}_${C}`;b in m&&m[b]?(gf.dot(m[b].normal)<=s&&(g.push(R.x,R.y,R.z),g.push(I.x,I.y,I.z)),m[b]=null):U in m||(m[U]={index0:h[E],index1:h[S],normal:gf.clone()})}}for(const _ in m)if(m[_]){const{index0:A,index1:x}=m[_];lu.fromBufferAttribute(c,A),cu.fromBufferAttribute(c,x),g.push(lu.x,lu.y,lu.z),g.push(cu.x,cu.y,cu.z)}this.setAttribute("position",new Xe(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Us extends il{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new il().fromJSON(i))}return this}}const cb={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=xx(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,u,h,d,f,m,g;if(n&&(s=pb(r,e,s,t)),r.length>80*t){c=h=r[0],u=d=r[1];for(let _=t;_<i;_+=t)f=r[_],m=r[_+1],f<c&&(c=f),m<u&&(u=m),f>h&&(h=f),m>d&&(d=m);g=Math.max(h-c,d-u),g=g!==0?32767/g:0}return rl(s,o,t,c,u,g,0),o}};function xx(r,e,t,n,i){let s,o;if(i===wb(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Iv(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Iv(s,r[s],r[s+1],o);return o&&fh(o,o.next)&&(ol(o),o=o.next),o}function ks(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(fh(t,t.next)||Jt(t.prev,t,t.next)===0)){if(ol(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&yb(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?hb(r,n,i,s):ub(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),ol(r),r=h.next,c=h.next;continue}if(r=h,r===c){o?o===1?(r=db(ks(r),e,t),rl(r,e,t,n,i,s,2)):o===2&&fb(r,e,t,n,i,s):rl(ks(r),e,t,n,i,s,1);break}}}function ub(r){const e=r.prev,t=r,n=r.next;if(Jt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,c=e.y,u=t.y,h=n.y,d=i<s?i<o?i:o:s<o?s:o,f=c<u?c<h?c:h:u<h?u:h,m=i>s?i>o?i:o:s>o?s:o,g=c>u?c>h?c:h:u>h?u:h;let _=n.next;for(;_!==e;){if(_.x>=d&&_.x<=m&&_.y>=f&&_.y<=g&&Oo(i,c,s,u,o,h,_.x,_.y)&&Jt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hb(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Jt(i,s,o)>=0)return!1;const c=i.x,u=s.x,h=o.x,d=i.y,f=s.y,m=o.y,g=c<u?c<h?c:h:u<h?u:h,_=d<f?d<m?d:m:f<m?f:m,A=c>u?c>h?c:h:u>h?u:h,x=d>f?d>m?d:m:f>m?f:m,y=Mp(g,_,e,t,n),E=Mp(A,x,e,t,n);let S=r.prevZ,C=r.nextZ;for(;S&&S.z>=y&&C&&C.z<=E;){if(S.x>=g&&S.x<=A&&S.y>=_&&S.y<=x&&S!==i&&S!==o&&Oo(c,d,u,f,h,m,S.x,S.y)&&Jt(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=g&&C.x<=A&&C.y>=_&&C.y<=x&&C!==i&&C!==o&&Oo(c,d,u,f,h,m,C.x,C.y)&&Jt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=y;){if(S.x>=g&&S.x<=A&&S.y>=_&&S.y<=x&&S!==i&&S!==o&&Oo(c,d,u,f,h,m,S.x,S.y)&&Jt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=E;){if(C.x>=g&&C.x<=A&&C.y>=_&&C.y<=x&&C!==i&&C!==o&&Oo(c,d,u,f,h,m,C.x,C.y)&&Jt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function db(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!fh(i,s)&&Ax(i,n,n.next,s)&&sl(i,s)&&sl(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ol(n),ol(n.next),n=r=s),n=n.next}while(n!==r);return ks(n)}function fb(r,e,t,n,i,s){let o=r;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&Mb(o,c)){let u=Mx(o,c);o=ks(o,o.next),u=ks(u,u.next),rl(o,e,t,n,i,s,0),rl(u,e,t,n,i,s,0);return}c=c.next}o=o.next}while(o!==r)}function pb(r,e,t,n){const i=[];let s,o,c,u,h;for(s=0,o=e.length;s<o;s++)c=e[s]*n,u=s<o-1?e[s+1]*n:r.length,h=xx(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(Ab(h));for(i.sort(mb),s=0;s<i.length;s++)t=gb(i[s],t);return t}function mb(r,e){return r.x-e.x}function gb(r,e){const t=vb(r,e);if(!t)return e;const n=Mx(t,r);return ks(n,n.next),ks(t,t.next)}function vb(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let d=1/0,f;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Oo(o<h?s:n,o,u,h,o<h?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),sl(t,r)&&(f<d||f===d&&(t.x>i.x||t.x===i.x&&_b(i,t)))&&(i=t,d=f)),t=t.next;while(t!==c);return i}function _b(r,e){return Jt(r.prev,r,e.prev)<0&&Jt(e.next,r,r.next)<0}function yb(r,e,t,n){let i=r;do i.z===0&&(i.z=Mp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,xb(i)}function xb(r){let e,t,n,i,s,o,c,u,h=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(o>1);return r}function Mp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ab(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Oo(r,e,t,n,i,s,o,c){return(i-o)*(e-c)>=(r-o)*(s-c)&&(r-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(i-o)*(n-c)}function Mb(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Sb(r,e)&&(sl(r,e)&&sl(e,r)&&Eb(r,e)&&(Jt(r.prev,r,e.prev)||Jt(r,e.prev,e))||fh(r,e)&&Jt(r.prev,r,r.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function fh(r,e){return r.x===e.x&&r.y===e.y}function Ax(r,e,t,n){const i=du(Jt(r,e,t)),s=du(Jt(r,e,n)),o=du(Jt(t,n,r)),c=du(Jt(t,n,e));return!!(i!==s&&o!==c||i===0&&hu(r,t,e)||s===0&&hu(r,n,e)||o===0&&hu(t,r,n)||c===0&&hu(t,e,n))}function hu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function du(r){return r>0?1:r<0?-1:0}function Sb(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ax(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function sl(r,e){return Jt(r.prev,r,r.next)<0?Jt(r,e,r.next)>=0&&Jt(r,r.prev,e)>=0:Jt(r,e,r.prev)<0||Jt(r,r.next,e)<0}function Eb(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mx(r,e){const t=new Sp(r.i,r.x,r.y),n=new Sp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Iv(r,e,t,n){const i=new Sp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ol(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sp(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wb(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ki{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Ki.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Pv(e),Lv(n,e);let o=e.length;t.forEach(Pv);for(let u=0;u<t.length;u++)i.push(o),o+=t[u].length,Lv(n,t[u]);const c=cb.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function Pv(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Lv(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ph extends ct{constructor(e=new Us([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];o(h)}this.setAttribute("position",new Xe(i,3)),this.setAttribute("uv",new Xe(s,2)),this.computeVertexNormals();function o(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:g-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Cb;let S,C=!1,F,R,I,U;y&&(S=y.getSpacedPoints(d),C=!0,m=!1,F=y.computeFrenetFrames(d,!1),R=new D,I=new D,U=new D),m||(x=0,g=0,_=0,A=0);const b=c.extractPoints(h);let T=b.shape;const L=b.holes;if(!Ki.isClockWise(T)){T=T.reverse();for(let le=0,ae=L.length;le<ae;le++){const Ae=L[le];Ki.isClockWise(Ae)&&(L[le]=Ae.reverse())}}const J=Ki.triangulateShape(T,L),Z=T;for(let le=0,ae=L.length;le<ae;le++){const Ae=L[le];T=T.concat(Ae)}function ie(le,ae,Ae){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ae,Ae)}const Q=T.length,ce=J.length;function N(le,ae,Ae){let ve,Me,Be;const Fe=le.x-ae.x,nt=le.y-ae.y,G=Ae.x-le.x,B=Ae.y-le.y,ee=Fe*Fe+nt*nt,me=Fe*B-nt*G;if(Math.abs(me)>Number.EPSILON){const de=Math.sqrt(ee),_e=Math.sqrt(G*G+B*B),Ke=ae.x-nt/de,Ce=ae.y+Fe/de,Pe=Ae.x-B/_e,ot=Ae.y+G/_e,Se=((Pe-Ke)*B-(ot-Ce)*G)/(Fe*B-nt*G);ve=Ke+Fe*Se-le.x,Me=Ce+nt*Se-le.y;const We=ve*ve+Me*Me;if(We<=2)return new he(ve,Me);Be=Math.sqrt(We/2)}else{let de=!1;Fe>Number.EPSILON?G>Number.EPSILON&&(de=!0):Fe<-Number.EPSILON?G<-Number.EPSILON&&(de=!0):Math.sign(nt)===Math.sign(B)&&(de=!0),de?(ve=-nt,Me=Fe,Be=Math.sqrt(ee)):(ve=Fe,Me=nt,Be=Math.sqrt(ee/2))}return new he(ve/Be,Me/Be)}const Y=[];for(let le=0,ae=Z.length,Ae=ae-1,ve=le+1;le<ae;le++,Ae++,ve++)Ae===ae&&(Ae=0),ve===ae&&(ve=0),Y[le]=N(Z[le],Z[Ae],Z[ve]);const K=[];let re,ye=Y.concat();for(let le=0,ae=L.length;le<ae;le++){const Ae=L[le];re=[];for(let ve=0,Me=Ae.length,Be=Me-1,Fe=ve+1;ve<Me;ve++,Be++,Fe++)Be===Me&&(Be=0),Fe===Me&&(Fe=0),re[ve]=N(Ae[ve],Ae[Be],Ae[Fe]);K.push(re),ye=ye.concat(re)}for(let le=0;le<x;le++){const ae=le/x,Ae=g*Math.cos(ae*Math.PI/2),ve=_*Math.sin(ae*Math.PI/2)+A;for(let Me=0,Be=Z.length;Me<Be;Me++){const Fe=ie(Z[Me],Y[Me],ve);xe(Fe.x,Fe.y,-Ae)}for(let Me=0,Be=L.length;Me<Be;Me++){const Fe=L[Me];re=K[Me];for(let nt=0,G=Fe.length;nt<G;nt++){const B=ie(Fe[nt],re[nt],ve);xe(B.x,B.y,-Ae)}}}const De=_+A;for(let le=0;le<Q;le++){const ae=m?ie(T[le],ye[le],De):T[le];C?(I.copy(F.normals[0]).multiplyScalar(ae.x),R.copy(F.binormals[0]).multiplyScalar(ae.y),U.copy(S[0]).add(I).add(R),xe(U.x,U.y,U.z)):xe(ae.x,ae.y,0)}for(let le=1;le<=d;le++)for(let ae=0;ae<Q;ae++){const Ae=m?ie(T[ae],ye[ae],De):T[ae];C?(I.copy(F.normals[le]).multiplyScalar(Ae.x),R.copy(F.binormals[le]).multiplyScalar(Ae.y),U.copy(S[le]).add(I).add(R),xe(U.x,U.y,U.z)):xe(Ae.x,Ae.y,f/d*le)}for(let le=x-1;le>=0;le--){const ae=le/x,Ae=g*Math.cos(ae*Math.PI/2),ve=_*Math.sin(ae*Math.PI/2)+A;for(let Me=0,Be=Z.length;Me<Be;Me++){const Fe=ie(Z[Me],Y[Me],ve);xe(Fe.x,Fe.y,f+Ae)}for(let Me=0,Be=L.length;Me<Be;Me++){const Fe=L[Me];re=K[Me];for(let nt=0,G=Fe.length;nt<G;nt++){const B=ie(Fe[nt],re[nt],ve);C?xe(B.x,B.y+S[d-1].y,S[d-1].x+Ae):xe(B.x,B.y,f+Ae)}}}ne(),fe();function ne(){const le=i.length/3;if(m){let ae=0,Ae=Q*ae;for(let ve=0;ve<ce;ve++){const Me=J[ve];et(Me[2]+Ae,Me[1]+Ae,Me[0]+Ae)}ae=d+x*2,Ae=Q*ae;for(let ve=0;ve<ce;ve++){const Me=J[ve];et(Me[0]+Ae,Me[1]+Ae,Me[2]+Ae)}}else{for(let ae=0;ae<ce;ae++){const Ae=J[ae];et(Ae[2],Ae[1],Ae[0])}for(let ae=0;ae<ce;ae++){const Ae=J[ae];et(Ae[0]+Q*d,Ae[1]+Q*d,Ae[2]+Q*d)}}n.addGroup(le,i.length/3-le,0)}function fe(){const le=i.length/3;let ae=0;we(Z,ae),ae+=Z.length;for(let Ae=0,ve=L.length;Ae<ve;Ae++){const Me=L[Ae];we(Me,ae),ae+=Me.length}n.addGroup(le,i.length/3-le,1)}function we(le,ae){let Ae=le.length;for(;--Ae>=0;){const ve=Ae;let Me=Ae-1;Me<0&&(Me=le.length-1);for(let Be=0,Fe=d+x*2;Be<Fe;Be++){const nt=Q*Be,G=Q*(Be+1),B=ae+ve+nt,ee=ae+Me+nt,me=ae+Me+G,de=ae+ve+G;it(B,ee,me,de)}}}function xe(le,ae,Ae){u.push(le),u.push(ae),u.push(Ae)}function et(le,ae,Ae){Ve(le),Ve(ae),Ve(Ae);const ve=i.length/3,Me=E.generateTopUV(n,i,ve-3,ve-2,ve-1);H(Me[0]),H(Me[1]),H(Me[2])}function it(le,ae,Ae,ve){Ve(le),Ve(ae),Ve(ve),Ve(ae),Ve(Ae),Ve(ve);const Me=i.length/3,Be=E.generateSideWallUV(n,i,Me-6,Me-3,Me-2,Me-1);H(Be[0]),H(Be[1]),H(Be[3]),H(Be[1]),H(Be[2]),H(Be[3])}function Ve(le){i.push(u[le*3+0]),i.push(u[le*3+1]),i.push(u[le*3+2])}function H(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ku[i.type]().fromJSON(i)),new ph(n,e.options)}}const Cb={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],d=e[i*3+1];return[new he(s,o),new he(c,u),new he(h,d)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],d=e[n*3+1],f=e[n*3+2],m=e[i*3],g=e[i*3+1],_=e[i*3+2],A=e[s*3],x=e[s*3+1],y=e[s*3+2];return Math.abs(c-d)<Math.abs(o-h)?[new he(o,1-u),new he(h,1-f),new he(m,1-_),new he(A,1-y)]:[new he(c,1-u),new he(d,1-f),new he(g,1-_),new he(x,1-y)]}};function Tb(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mh extends jr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mh(e.radius,e.detail)}}class Sl extends jr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sl(e.radius,e.detail)}}class gh extends ct{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],d=[];let f=e;const m=(t-e)/i,g=new D,_=new he;for(let A=0;A<=i;A++){for(let x=0;x<=n;x++){const y=s+x/n*o;g.x=f*Math.cos(y),g.y=f*Math.sin(y),u.push(g.x,g.y,g.z),h.push(0,0,1),_.x=(g.x/t+1)/2,_.y=(g.y/t+1)/2,d.push(_.x,_.y)}f+=m}for(let A=0;A<i;A++){const x=A*(n+1);for(let y=0;y<n;y++){const E=y+x,S=E,C=E+n+1,F=E+n+2,R=E+1;c.push(S,C,R),c.push(C,F,R)}}this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vh extends ct{constructor(e=new Us([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let d=0;d<e.length;d++)h(e[d]),this.addGroup(c,u,d),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Xe(i,3)),this.setAttribute("normal",new Xe(s,3)),this.setAttribute("uv",new Xe(o,2));function h(d){const f=i.length/3,m=d.extractPoints(t);let g=m.shape;const _=m.holes;Ki.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,y=_.length;x<y;x++){const E=_[x];Ki.isClockWise(E)===!0&&(_[x]=E.reverse())}const A=Ki.triangulateShape(g,_);for(let x=0,y=_.length;x<y;x++){const E=_[x];g=g.concat(E)}for(let x=0,y=g.length;x<y;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let x=0,y=A.length;x<y;x++){const E=A[x],S=E[0]+f,C=E[1]+f,F=E[2]+f;n.push(S,C,F),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return bb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new vh(n,e.curveSegments)}}function bb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class El extends ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let h=0;const d=[],f=new D,m=new D,g=[],_=[],A=[],x=[];for(let y=0;y<=n;y++){const E=[],S=y/n;let C=0;y===0&&o===0?C=.5/t:y===n&&u===Math.PI&&(C=-.5/t);for(let F=0;F<=t;F++){const R=F/t;f.x=-e*Math.cos(i+R*s)*Math.sin(o+S*c),f.y=e*Math.cos(o+S*c),f.z=e*Math.sin(i+R*s)*Math.sin(o+S*c),_.push(f.x,f.y,f.z),m.copy(f).normalize(),A.push(m.x,m.y,m.z),x.push(R+C,1-S),E.push(h++)}d.push(E)}for(let y=0;y<n;y++)for(let E=0;E<t;E++){const S=d[y][E+1],C=d[y][E],F=d[y+1][E],R=d[y+1][E+1];(y!==0||o>0)&&g.push(S,C,R),(y!==n-1||u<Math.PI)&&g.push(C,F,R)}this.setIndex(g),this.setAttribute("position",new Xe(_,3)),this.setAttribute("normal",new Xe(A,3)),this.setAttribute("uv",new Xe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _h extends jr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _h(e.radius,e.detail)}}class yh extends ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],u=[],h=[],d=new D,f=new D,m=new D;for(let g=0;g<=n;g++)for(let _=0;_<=i;_++){const A=_/i*s,x=g/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(A),f.y=(e+t*Math.cos(x))*Math.sin(A),f.z=t*Math.sin(x),c.push(f.x,f.y,f.z),d.x=e*Math.cos(A),d.y=e*Math.sin(A),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(_/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=i;_++){const A=(i+1)*g+_-1,x=(i+1)*(g-1)+_-1,y=(i+1)*(g-1)+_,E=(i+1)*g+_;o.push(A,x,E),o.push(x,y,E)}this.setIndex(o),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xh extends ct{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],d=[],f=new D,m=new D,g=new D,_=new D,A=new D,x=new D,y=new D;for(let S=0;S<=n;++S){const C=S/n*s*Math.PI*2;E(C,s,o,e,g),E(C+.01,s,o,e,_),x.subVectors(_,g),y.addVectors(_,g),A.crossVectors(x,y),y.crossVectors(A,x),A.normalize(),y.normalize();for(let F=0;F<=i;++F){const R=F/i*Math.PI*2,I=-t*Math.cos(R),U=t*Math.sin(R);f.x=g.x+(I*y.x+U*A.x),f.y=g.y+(I*y.y+U*A.y),f.z=g.z+(I*y.z+U*A.z),u.push(f.x,f.y,f.z),m.subVectors(f,g).normalize(),h.push(m.x,m.y,m.z),d.push(S/n),d.push(F/i)}}for(let S=1;S<=n;S++)for(let C=1;C<=i;C++){const F=(i+1)*(S-1)+(C-1),R=(i+1)*S+(C-1),I=(i+1)*S+C,U=(i+1)*(S-1)+C;c.push(F,R,U),c.push(R,I,U)}this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function E(S,C,F,R,I){const U=Math.cos(S),b=Math.sin(S),T=F/C*S,L=Math.cos(T);I.x=R*(2+L)*.5*U,I.y=R*(2+L)*b*.5,I.z=R*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ah extends ct{constructor(e=new fm(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new D,u=new D,h=new he;let d=new D;const f=[],m=[],g=[],_=[];A(),this.setIndex(_),this.setAttribute("position",new Xe(f,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(g,2));function A(){for(let S=0;S<t;S++)x(S);x(s===!1?t:0),E(),y()}function x(S){d=e.getPointAt(S/t,d);const C=o.normals[S],F=o.binormals[S];for(let R=0;R<=i;R++){const I=R/i*Math.PI*2,U=Math.sin(I),b=-Math.cos(I);u.x=b*C.x+U*F.x,u.y=b*C.y+U*F.y,u.z=b*C.z+U*F.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=d.x+n*u.x,c.y=d.y+n*u.y,c.z=d.z+n*u.z,f.push(c.x,c.y,c.z)}}function y(){for(let S=1;S<=t;S++)for(let C=1;C<=i;C++){const F=(i+1)*(S-1)+(C-1),R=(i+1)*S+(C-1),I=(i+1)*S+C,U=(i+1)*(S-1)+C;_.push(F,R,U),_.push(R,I,U)}}function E(){for(let S=0;S<=t;S++)for(let C=0;C<=i;C++)h.x=S/t,h.y=C/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ah(new ku[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Sx extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const o=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,d=u.length;h<d;++h){const f=u[h],m=f.start,g=f.count;for(let _=m,A=m+g;_<A;_+=3)for(let x=0;x<3;x++){const y=c.getX(_+x),E=c.getX(_+(x+1)%3);i.fromBufferAttribute(o,y),s.fromBufferAttribute(o,E),Dv(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let c=0,u=o.count/3;c<u;c++)for(let h=0;h<3;h++){const d=3*c+h,f=3*c+(h+1)%3;i.fromBufferAttribute(o,d),s.fromBufferAttribute(o,f),Dv(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Dv(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}const Fv=Object.freeze(Object.defineProperty({__proto__:null,BoxGeometry:Xs,CapsuleGeometry:ch,CircleGeometry:uh,ConeGeometry:hh,CylinderGeometry:ta,DodecahedronGeometry:dh,EdgesGeometry:yx,ExtrudeGeometry:ph,IcosahedronGeometry:mh,LatheGeometry:Ml,OctahedronGeometry:Sl,PlaneGeometry:$o,PolyhedronGeometry:jr,RingGeometry:gh,ShapeGeometry:vh,SphereGeometry:El,TetrahedronGeometry:_h,TorusGeometry:yh,TorusKnotGeometry:xh,TubeGeometry:Ah,WireframeGeometry:Sx},Symbol.toStringTag,{value:"Module"}));class Ex extends ln{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class wx extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wl extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends wl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cx extends ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tx extends ln{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class bx extends ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Rx extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bx extends ln{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ix extends Rn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Rs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Px(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Lx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ep(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[c+u]}return i}function mm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function Rb(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],d=h.getValueSize(),f=[],m=[];for(let g=0;g<h.times.length;++g){const _=h.times[g]*i;if(!(_<t||_>=n)){f.push(h.times[g]);for(let A=0;A<d;++A)m.push(h.values[g*d+A])}}f.length!==0&&(h.times=Rs(f,h.times.constructor),h.values=Rs(m,h.values.constructor),o.push(h))}s.tracks=o;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function Bb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const c=t.tracks[o],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(y){return y.name===c.name&&y.ValueTypeName===u});if(h===void 0)continue;let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const _=c.times.length-1;let A;if(s<=c.times[0]){const y=d,E=f-d;A=c.values.slice(y,E)}else if(s>=c.times[_]){const y=_*f+d,E=y+f-d;A=c.values.slice(y,E)}else{const y=c.createInterpolant(),E=d,S=f-d;y.evaluate(s),A=y.resultBuffer.slice(E,S)}u==="quaternion"&&new Tn().fromArray(A).normalize().conjugate().toArray(A);const x=h.times.length;for(let y=0;y<x;++y){const E=y*g+m;if(u==="quaternion")Tn.multiplyQuaternionsFlat(h.values,E,A,0,h.values,E);else{const S=g-m*2;for(let C=0;C<S;++C)h.values[E+C]-=A[C]}}}return r.blendMode=Jp,r}const Ib={convertArray:Rs,isTypedArray:Px,getKeyframeOrder:Lx,sortedArray:Ep,flattenJSON:mm,subclip:Rb,makeClipAdditive:Bb};class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dx extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],u=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case Ts:s=e,c=2*t-n;break;case Qa:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Ts:o=e,u=2*n-t;break;case Qa:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,g=this._weightNext,_=(n-t)/(i-t),A=_*_,x=A*_,y=-m*x+2*m*A-m*_,E=(1+m)*x+(-1.5-2*m)*A+(-.5+m)*_+1,S=(-1-g)*x+(1.5+g)*A+.5*_,C=g*x-g*A;for(let F=0;F!==c;++F)s[F]=y*o[d+F]+E*o[h+F]+S*o[u+F]+C*o[f+F];return s}}class gm extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,d=(n-t)/(i-t),f=1-d;for(let m=0;m!==c;++m)s[m]=o[h+m]*f+o[u+m]*d;return s}}class Fx extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Iu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Iu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(i!==void 0&&Px(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Iu,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],d=e[c+1];if(h!==d&&(c!==1||h!==e[0]))if(i)u=!0;else{const f=c*n,m=f-n,g=f+n;for(let _=0;_!==n;++_){const A=t[f+_];if(A!==t[m+_]||A!==t[g+_]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const f=c*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[f+g]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Jo;class Js extends Fi{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Xo;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class vm extends Fi{}vm.prototype.ValueTypeName="color";class zs extends Fi{}zs.prototype.ValueTypeName="number";class Ux extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let d=h+c;h!==d;h+=4)Tn.slerpFlat(s,0,o,h-c,o,h,u);return s}}class Vs extends Fi{InterpolantFactoryMethodLinear(e){return new Ux(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Fi{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Xo;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Fi{}Ws.prototype.ValueTypeName="vector";class qo{constructor(e="",t=-1,n=[],i=$u){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(Lb(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Fi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const d=Lx(u);u=Ep(u,1,d),h=Ep(h,1,d),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new zs(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.name.match(s);if(d&&d.length>1){const f=d[1];let m=i[f];m||(i[f]=m=[]),m.push(h)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,m,g,_,A){if(g.length!==0){const x=[],y=[];mm(g,x,y,_),x.length!==0&&A.push(new f(m,x,y))}},i=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const m=h[f].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let _;for(_=0;_<m.length;_++)if(m[_].morphTargets)for(let A=0;A<m[_].morphTargets.length;A++)g[m[_].morphTargets[A]]=-1;for(const A in g){const x=[],y=[];for(let E=0;E!==m[_].morphTargets.length;++E){const S=m[_];x.push(S.time),y.push(S.morphTarget===A?1:0)}i.push(new zs(".morphTargetInfluence["+A+"]",x,y))}u=g.length*o}else{const g=".bones["+t[f].name+"]";n(Ws,g+".position",m,"pos",i),n(Vs,g+".quaternion",m,"rot",i),n(Ws,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Pb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return vm;case"quaternion":return Vs;case"bool":case"boolean":return Js;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Lb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Pb(r.type);if(r.times===void 0){const t=[],n=[];mm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class _m{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,c),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=h.length;f<m;f+=2){const g=h[f],_=h[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null}}}const Nx=new _m;let Bn=class{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr={};class Db extends Error{constructor(e,t){super(e),this.response=t}}class ai extends Bn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(lr[e]!==void 0){lr[e].push({onLoad:t,onProgress:n,onError:i});return}lr[e]=[],lr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=lr[e],f=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,_=g!==0;let A=0;const x=new ReadableStream({start(y){E();function E(){f.read().then(({done:S,value:C})=>{if(S)y.close();else{A+=C.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:A,total:g});for(let R=0,I=d.length;R<I;R++){const U=d[R];U.onProgress&&U.onProgress(F)}y.enqueue(C),E()}},S=>{y.error(S)})}}});return new Response(x)}else throw new Db(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return h.json();default:if(c===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(c),m=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(_=>g.decode(_))}}}).then(h=>{fr.add(e,h);const d=lr[e];delete lr[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onLoad&&g.onLoad(h)}}).catch(h=>{const d=lr[e];if(d===void 0)throw this.manager.itemError(e),h;delete lr[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fb extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ai(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=qo.parse(e[n]);t.push(i)}return t}}class Ub extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],c=new ah,u=new ai(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function d(f){u.load(e[f],function(m){const g=s.parse(m,!0);o[f]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=Qt),c.image=o,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let f=0,m=e.length;f<m;++f)d(f);else u.load(e,function(f){const m=s.parse(f,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let _=0;_<g;_++){o[_]={mipmaps:[]};for(let A=0;A<m.mipmapCount;A++)o[_].mipmaps.push(m.mipmaps[_*m.mipmapCount+A]),o[_].format=m.format,o[_].width=m.width,o[_].height=m.height}c.image=o}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=Qt),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class al extends Bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const c=nl("img");function u(){d(),fr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(f){d(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Nb extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=new _l;s.colorSpace=_i;const o=new al(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function u(h){o.load(e[h],function(d){s.images[h]=d,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class Ob extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new mr,c=new ai(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:ni,o.wrapT=h.wrapT!==void 0?h.wrapT:ni,o.magFilter=h.magFilter!==void 0?h.magFilter:Qt,o.minFilter=h.minFilter!==void 0?h.minFilter:Qt,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=Ai),h.mipmapCount===1&&(o.minFilter=Qt),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,i),o}}class Ox extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=new Ht,o=new al(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $r extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Gx extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vf=new Ze,Uv=new D,Nv=new D;class ym{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uv),Nv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nv),t.updateMatrixWorld(),vf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gb extends ym{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ko*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xm extends $r{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ov=new Ze,Fa=new D,_f=new D;class Hb extends ym{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fa),_f.copy(n.position),_f.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_f),n.updateMatrixWorld(),i.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Ov.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ov)}}class Am extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kb extends ym{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hx extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kx extends $r{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class zx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Vx extends $r{constructor(e=new zx,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Mh extends Bn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new ai(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Mh.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Ie().setHex(o.value);break;case"v2":i.uniforms[s].value=new he().fromArray(o.value);break;case"v3":i.uniforms[s].value=new D().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Dt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new ht().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Ze().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new he().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Ex,SpriteMaterial:rm,RawShaderMaterial:wx,ShaderMaterial:Pi,PointsMaterial:oh,MeshPhysicalMaterial:Mi,MeshStandardMaterial:wl,MeshPhongMaterial:Cx,MeshToonMaterial:Tx,MeshNormalMaterial:bx,MeshLambertMaterial:Rx,MeshDepthMaterial:nm,MeshDistanceMaterial:im,MeshBasicMaterial:ri,MeshMatcapMaterial:Bx,LineDashedMaterial:Ix,LineBasicMaterial:Rn,Material:ln};return new t[e]}}class Xr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wx extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Xx extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ai(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,_){if(t[_]!==void 0)return t[_];const x=g.interleavedBuffers[_],y=s(g,x.buffer),E=Uo(x.type,y),S=new xl(E,x.stride);return S.uuid=x.uuid,t[_]=S,S}function s(g,_){if(n[_]!==void 0)return n[_];const x=g.arrayBuffers[_],y=new Uint32Array(x).buffer;return n[_]=y,y}const o=e.isInstancedBufferGeometry?new Wx:new ct,c=e.data.index;if(c!==void 0){const g=Uo(c.type,c.array);o.setIndex(new Ct(g,1))}const u=e.data.attributes;for(const g in u){const _=u[g];let A;if(_.isInterleavedBufferAttribute){const x=i(e.data,_.data);A=new qr(x,_.itemSize,_.offset,_.normalized)}else{const x=Uo(_.type,_.array),y=_.isInstancedBufferAttribute?Hs:Ct;A=new y(x,_.itemSize,_.normalized)}_.name!==void 0&&(A.name=_.name),_.usage!==void 0&&A.setUsage(_.usage),o.setAttribute(g,A)}const h=e.data.morphAttributes;if(h)for(const g in h){const _=h[g],A=[];for(let x=0,y=_.length;x<y;x++){const E=_[x];let S;if(E.isInterleavedBufferAttribute){const C=i(e.data,E.data);S=new qr(C,E.itemSize,E.offset,E.normalized)}else{const C=Uo(E.type,E.array);S=new Ct(C,E.itemSize,E.normalized)}E.name!==void 0&&(S.name=E.name),A.push(S)}o.morphAttributes[g]=A}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let g=0,_=f.length;g!==_;++g){const A=f[g];o.addGroup(A.start,A.count,A.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),o.boundingSphere=new yn(g,m.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class zb extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Xr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const c=new ai(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(f){i!==void 0&&i(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const d=h.metadata;if(d===void 0||d.type===void 0||d.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Xr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new ai(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),c=JSON.parse(o),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,o),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),d=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,d),t!==void 0){let f=!1;for(const m in o)if(o[m].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,o),u=this.parseObject(e.object,i,c,o,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Us().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=new Al().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Xx;for(let s=0,o=e.length;s<o;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in Fv?c=Fv[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Mh;s.setTextures(t);for(let o=0,c=e.length;o<c;o++){const u=e[o];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=qo.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return o(d)}else return u.data?{data:Uo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new _m(t);s=new al(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,d=e.length;h<d;h++){const f=e[h],m=f.url;if(Array.isArray(m)){const g=[];for(let _=0,A=m.length;_<A;_++){const x=m[_],y=c(x);y!==null&&(y instanceof HTMLImageElement?g.push(y):g.push(new mr(y.data,y.width,y.height)))}i[f.uuid]=new bs(g)}else{const g=c(f.url);i[f.uuid]=new bs(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const c=o,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return o.data?{data:Uo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new al(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.url;if(Array.isArray(h)){const d=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],_=await s(g);_!==null&&(_ instanceof HTMLImageElement?d.push(_):d.push(new mr(_.data,_.width,_.height)))}n[u.uuid]=new bs(d)}else{const d=await s(u.url);n[u.uuid]=new bs(d)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let d;Array.isArray(h)?(d=new _l,h.length===6&&(d.needsUpdate=!0)):(h&&h.data?d=new mr:d=new Ht,h&&(d.needsUpdate=!0)),d.source=u,d.uuid=c.uuid,c.name!==void 0&&(d.name=c.name),c.mapping!==void 0&&(d.mapping=n(c.mapping,Vb)),c.channel!==void 0&&(d.channel=c.channel),c.offset!==void 0&&d.offset.fromArray(c.offset),c.repeat!==void 0&&d.repeat.fromArray(c.repeat),c.center!==void 0&&d.center.fromArray(c.center),c.rotation!==void 0&&(d.rotation=c.rotation),c.wrap!==void 0&&(d.wrapS=n(c.wrap[0],Gv),d.wrapT=n(c.wrap[1],Gv)),c.format!==void 0&&(d.format=c.format),c.internalFormat!==void 0&&(d.internalFormat=c.internalFormat),c.type!==void 0&&(d.type=c.type),c.colorSpace!==void 0&&(d.colorSpace=c.colorSpace),c.minFilter!==void 0&&(d.minFilter=n(c.minFilter,Hv)),c.magFilter!==void 0&&(d.magFilter=n(c.magFilter,Hv)),c.anisotropy!==void 0&&(d.anisotropy=c.anisotropy),c.flipY!==void 0&&(d.flipY=c.flipY),c.generateMipmaps!==void 0&&(d.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(d.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(d.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(d.compareFunction=c.compareFunction),c.userData!==void 0&&(d.userData=c.userData),i[c.uuid]=d}return i}parseObject(e,t,n,i,s){let o;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let _=0,A=m.length;_<A;_++){const x=m[_];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let d,f;switch(e.type){case"Scene":o=new Ou,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Ie(e.background):o.background=h(e.background)),e.environment!==void 0&&(o.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new rh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new ih(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new en(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Zr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Hx(e.color,e.intensity);break;case"DirectionalLight":o=new Mm(e.color,e.intensity);break;case"PointLight":o=new Am(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new kx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new xm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new Gx(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Vx().fromJSON(e);break;case"SkinnedMesh":d=c(e.geometry),f=u(e.material),o=new sm(d,f),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":d=c(e.geometry),f=u(e.material),o=new tn(d,f);break;case"InstancedMesh":d=c(e.geometry),f=u(e.material);const m=e.count,g=e.instanceMatrix,_=e.instanceColor;o=new om(d,f,m),o.instanceMatrix=new Hs(new Float32Array(g.array),16),_!==void 0&&(o.instanceColor=new Hs(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":d=c(e.geometry),f=u(e.material),o=new fx(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,f),o.geometry=d,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(A=>{const x=new bn;x.min.fromArray(A.boxMin),x.max.fromArray(A.boxMax);const y=new yn;return y.radius=A.sphereRadius,y.center.fromArray(A.sphereCenter),{boxInitialized:A.boxInitialized,box:x,sphereInitialized:A.sphereInitialized,sphere:y}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":o=new dx;break;case"Line":o=new yr(c(e.geometry),u(e.material));break;case"LineLoop":o=new am(c(e.geometry),u(e.material));break;case"LineSegments":o=new Li(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":o=new lm(c(e.geometry),u(e.material));break;case"Sprite":o=new hx(u(e.material));break;case"Group":o=new dr;break;case"Bone":o=new sh;break;default:o=new Mt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)o.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const _=m[g];o.animations.push(s[_])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const _=m[g],A=o.getObjectByProperty("uuid",_.object);A!==void 0&&o.addLevel(A,_.distance,_.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const Vb={UVMapping:Zu,CubeReflectionMapping:_r,CubeRefractionMapping:Kr,EquirectangularReflectionMapping:Ka,EquirectangularRefractionMapping:Ya,CubeUVReflectionMapping:Zo},Gv={RepeatWrapping:Yr,ClampToEdgeWrapping:ni,MirroredRepeatWrapping:Wo},Hv={NearestFilter:hn,NearestMipmapNearestFilter:ju,NearestMipmapLinearFilter:ws,LinearFilter:Qt,LinearMipmapNearestFilter:Ho,LinearMipmapLinearFilter:Ai};class Jx extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),fr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});fr.add(e,u),s.manager.itemStart(e)}}let fu;class Sm{static getContext(){return fu===void 0&&(fu=new(window.AudioContext||window.webkitAudioContext)),fu}static setContext(e){fu=e}}class Wb extends Bn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ai(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{const h=u.slice(0);Sm.getContext().decodeAudioData(h,function(f){t(f)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const kv=new Ze,zv=new Ze,gs=new Ze;class Xb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new en,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new en,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,gs.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Ds*t.fov*.5)/t.zoom;let c,u;zv.elements[12]=-i,kv.elements[12]=i,c=-o*t.aspect+s,u=o*t.aspect+s,gs.elements[0]=2*t.near/(u-c),gs.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(gs),c=-o*t.aspect-s,u=o*t.aspect-s,gs.elements[0]=2*t.near/(u-c),gs.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(gs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(zv),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(kv)}}class Em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vv(){return(typeof performance>"u"?Date:performance).now()}const vs=new D,Wv=new Tn,Jb=new D,_s=new D;class Kb extends Mt{constructor(){super(),this.type="AudioListener",this.context=Sm.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Em}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vs,Wv,Jb),_s.set(0,0,-1).applyQuaternion(Wv),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vs.x,i),t.positionY.linearRampToValueAtTime(vs.y,i),t.positionZ.linearRampToValueAtTime(vs.z,i),t.forwardX.linearRampToValueAtTime(_s.x,i),t.forwardY.linearRampToValueAtTime(_s.y,i),t.forwardZ.linearRampToValueAtTime(_s.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(vs.x,vs.y,vs.z),t.setOrientation(_s.x,_s.y,_s.z,n.x,n.y,n.z)}}class Kx extends Mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ys=new D,Xv=new Tn,Yb=new D,xs=new D;class qb extends Kx{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ys,Xv,Yb),xs.set(0,0,1).applyQuaternion(Xv);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ys.x,n),t.positionY.linearRampToValueAtTime(ys.y,n),t.positionZ.linearRampToValueAtTime(ys.z,n),t.orientationX.linearRampToValueAtTime(xs.x,n),t.orientationY.linearRampToValueAtTime(xs.y,n),t.orientationZ.linearRampToValueAtTime(xs.z,n)}else t.setPosition(ys.x,ys.y,ys.z),t.setOrientation(xs.x,xs.y,xs.z)}}class Qb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Yx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let c=0;c!==i;++c)n[s+c]=n[c];o=t}else{o+=t;const c=t/o;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Tn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Tn.multiplyQuaternionsFlat(e,o,e,t,e,n),Tn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*o+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]+e[n+o]*i}}}const wm="\\[\\]\\.:\\/",Zb=new RegExp("["+wm+"]","g"),Cm="[^"+wm+"]",jb="[^"+wm.replace("\\.","")+"]",$b=/((?:WC+[\/:])*)/.source.replace("WC",Cm),eR=/(WCOD+)?/.source.replace("WCOD",jb),tR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cm),nR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cm),iR=new RegExp("^"+$b+eR+tR+nR+"$"),rR=["material","materials","bones","map"];class sR{constructor(e,t,n){const i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class wt{constructor(e,t,n){this.path=t,this.parsedPath=n||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new wt.Composite(e,t,n):new wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zb,"")}static parseTrackName(e){const t=iR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rR.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=sR;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oR{constructor(){this.isAnimationObjectGroup=!0,this.uuid=si(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let d=0,f=arguments.length;d!==f;++d){const m=arguments[d],g=m.uuid;let _=t[g];if(_===void 0){_=u++,t[g]=_,e.push(m);for(let A=0,x=o;A!==x;++A)s[A].push(new wt(m,n[A],i[A]))}else if(_<h){c=e[_];const A=--h,x=e[A];t[x.uuid]=_,e[_]=x,t[g]=A,e[A]=m;for(let y=0,E=o;y!==E;++y){const S=s[y],C=S[A];let F=S[_];S[_]=C,F===void 0&&(F=new wt(m,n[y],i[y])),S[A]=F}}else e[_]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,c=arguments.length;o!==c;++o){const u=arguments[o],h=u.uuid,d=t[h];if(d!==void 0&&d>=s){const f=s++,m=e[f];t[m.uuid]=d,e[d]=m,t[h]=f,e[f]=u;for(let g=0,_=i;g!==_;++g){const A=n[g],x=A[f],y=A[d];A[d]=x,A[f]=y}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],d=h.uuid,f=t[d];if(f!==void 0)if(delete t[d],f<s){const m=--s,g=e[m],_=--o,A=e[_];t[g.uuid]=f,e[f]=g,t[A.uuid]=m,e[m]=A,e.pop();for(let x=0,y=i;x!==y;++x){const E=n[x],S=E[m],C=E[_];E[f]=S,E[m]=C,E.pop()}}else{const m=--o,g=e[m];m>0&&(t[g.uuid]=f),e[f]=g,e.pop();for(let _=0,A=i;_!==A;++_){const x=n[_];x[f]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,d=this.nCachedObjects_,f=new Array(h);i=s.length,n[e]=i,o.push(e),c.push(t),s.push(f);for(let m=d,g=u.length;m!==g;++m){const _=u[m];f[m]=new wt(_,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,c=o.length-1,u=o[c],h=e[c];t[h]=n,o[n]=u,o.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class qx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,c=new Array(o),u={endingStart:Cs,endingEnd:Cs};for(let h=0;h!==o;++h){const d=s[h].createInterpolant(null);c[h]=d,d.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Py,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,c=i/s;e.warp(1,o,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const o=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Jp:for(let d=0,f=u.length;d!==f;++d)u[d].evaluate(o),h[d].accumulateAdditive(c);break;case $u:default:for(let d=0,f=u.length;d!==f;++d)u[d].evaluate(o),h[d].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Ly;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Iy){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ts,i.endingEnd=Ts):(e?i.endingStart=this.zeroSlopeAtStart?Ts:Cs:i.endingStart=Qa,t?i.endingEnd=this.zeroSlopeAtEnd?Ts:Cs:i.endingEnd=Qa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const aR=new Float32Array(1);class Qx extends Ar{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let d=h[u];d===void 0&&(d={},h[u]=d);for(let f=0;f!==s;++f){const m=i[f],g=m.name;let _=d[g];if(_!==void 0)++_.referenceCount,o[f]=_;else{if(_=o[f],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,u,g));continue}const A=t&&t._propertyBindings[f].binding.parsedPath;_=new Yx(wt.create(n,g,A),m.ValueTypeName,m.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,u,g),o[f]=_}c[f].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const c=o.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,c=o[s],u=c.knownActions,h=u[u.length-1],d=e._byClipCacheIndex;h._byClipCacheIndex=d,u[d]=h,u.pop(),e._byClipCacheIndex=null;const f=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete f[m],u.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,c=o[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new gm(new Float32Array(2),new Float32Array(2),1,aR),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?qo.findByName(i,e):e;const c=o!==null?o.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=$u),u!==void 0){const f=u.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;h=u.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const d=new qx(this,o,t,n);return this._bindAction(d,h),this._addInactiveAction(d,c,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?qo.findByName(n,e):e,o=s?s.uuid:e,c=this._actionsByClip[o];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let c=0,u=o.length;c!==u;++c){const h=o[c];this._deactivateAction(h);const d=h._cacheIndex,f=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,f._cacheIndex=d,t[d]=f,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const c=n[o].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const c=s[o];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Tm{constructor(e){this.value=e}clone(){return new Tm(this.value.clone===void 0?this.value:this.value.clone())}}let lR=0;class cR extends Ar{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:lR++}),this.name="",this.usage=el,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class uR extends xl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class hR{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Jv=new Ze;class Zx{constructor(e,t,n=0,i=1/0){this.ray=new jo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jv),this}intersectObject(e,t=!0,n=[]){return wp(e,this,n,t),n.sort(Kv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)wp(e[i],this,n,t);return n.sort(Kv),n}}function Kv(r,e){return r.distance-e.distance}function wp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,c=s.length;o<c;o++)wp(s[o],e,t,!0)}}class dR{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fR{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Yv=new he;class pR{constructor(e=new he(1/0,1/0),t=new he(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yv.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qv=new D,pu=new D;class mR{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){qv.subVectors(e,this.start),pu.subVectors(this.end,this.start);const n=pu.dot(pu);let s=pu.dot(qv)/n;return t&&(s=qt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Qv=new D;class gR extends Mt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ct,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,c=1,u=32;o<u;o++,c++){const h=o/u*Math.PI*2,d=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(d),Math.sin(d),1)}n.setAttribute("position",new Xe(i,3));const s=new Rn({fog:!1,toneMapped:!1});this.cone=new Li(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Qv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Qv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Gr=new D,mu=new Ze,yf=new Ze;class vR extends Li{constructor(e){const t=jx(e),n=new ct,i=[],s=[],o=new Ie(0,0,1),c=new Ie(0,1,0);for(let h=0;h<t.length;h++){const d=t[h];d.parent&&d.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new Xe(i,3)),n.setAttribute("color",new Xe(s,3));const u=new Rn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");yf.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(mu.multiplyMatrices(yf,c.matrixWorld),Gr.setFromMatrixPosition(mu),i.setXYZ(o,Gr.x,Gr.y,Gr.z),mu.multiplyMatrices(yf,c.parent.matrixWorld),Gr.setFromMatrixPosition(mu),i.setXYZ(o+1,Gr.x,Gr.y,Gr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function jx(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,jx(r.children[t]));return e}class _R extends tn{constructor(e,t,n){const i=new El(t,4,2),s=new ri({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const yR=new D,Zv=new Ie,jv=new Ie;class xR extends Mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Sl(t);i.rotateY(Math.PI*.5),this.material=new ri({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Ct(o,3)),this.add(new tn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Zv.copy(this.light.color),jv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Zv:jv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(yR.setFromMatrixPosition(this.light.matrixWorld).negate())}}class AR extends Li{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ie(n),i=new Ie(i);const s=t/2,o=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,_=-c;m<=t;m++,_+=o){u.push(-c,0,_,c,0,_),u.push(_,0,-c,_,0,c);const A=m===s?n:i;A.toArray(h,g),g+=3,A.toArray(h,g),g+=3,A.toArray(h,g),g+=3,A.toArray(h,g),g+=3}const d=new ct;d.setAttribute("position",new Xe(u,3)),d.setAttribute("color",new Xe(h,3));const f=new Rn({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class MR extends Li{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Ie(s),o=new Ie(o);const c=[],u=[];if(t>1)for(let f=0;f<t;f++){const m=f/t*(Math.PI*2),g=Math.sin(m)*e,_=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,_);const A=f&1?s:o;u.push(A.r,A.g,A.b),u.push(A.r,A.g,A.b)}for(let f=0;f<n;f++){const m=f&1?s:o,g=e-e/n*f;for(let _=0;_<i;_++){let A=_/i*(Math.PI*2),x=Math.sin(A)*g,y=Math.cos(A)*g;c.push(x,0,y),u.push(m.r,m.g,m.b),A=(_+1)/i*(Math.PI*2),x=Math.sin(A)*g,y=Math.cos(A)*g,c.push(x,0,y),u.push(m.r,m.g,m.b)}}const h=new ct;h.setAttribute("position",new Xe(c,3)),h.setAttribute("color",new Xe(u,3));const d=new Rn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const $v=new D,gu=new D,e_=new D;class SR extends Mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ct;i.setAttribute("position",new Xe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Rn({fog:!1,toneMapped:!1});this.lightPlane=new yr(i,s),this.add(this.lightPlane),i=new ct,i.setAttribute("position",new Xe([0,0,0,0,0,1],3)),this.targetLine=new yr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),$v.setFromMatrixPosition(this.light.matrixWorld),gu.setFromMatrixPosition(this.light.target.matrixWorld),e_.subVectors(gu,$v),this.lightPlane.lookAt(gu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(gu),this.targetLine.scale.z=e_.length()}}const vu=new D,Yt=new vl;class ER extends Li{constructor(e){const t=new ct,n=new Rn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(_,A){u(_),u(A)}function u(_){i.push(0,0,0),s.push(0,0,0),o[_]===void 0&&(o[_]=[]),o[_].push(i.length/3-1)}t.setAttribute("position",new Xe(i,3)),t.setAttribute("color",new Xe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Ie(16755200),d=new Ie(16711680),f=new Ie(43775),m=new Ie(16777215),g=new Ie(3355443);this.setColors(h,d,f,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$t("c",t,e,Yt,0,0,-1),$t("t",t,e,Yt,0,0,1),$t("n1",t,e,Yt,-n,-i,-1),$t("n2",t,e,Yt,n,-i,-1),$t("n3",t,e,Yt,-n,i,-1),$t("n4",t,e,Yt,n,i,-1),$t("f1",t,e,Yt,-n,-i,1),$t("f2",t,e,Yt,n,-i,1),$t("f3",t,e,Yt,-n,i,1),$t("f4",t,e,Yt,n,i,1),$t("u1",t,e,Yt,n*.7,i*1.1,-1),$t("u2",t,e,Yt,-n*.7,i*1.1,-1),$t("u3",t,e,Yt,0,i*2,-1),$t("cf1",t,e,Yt,-n,0,1),$t("cf2",t,e,Yt,n,0,1),$t("cf3",t,e,Yt,0,-i,1),$t("cf4",t,e,Yt,0,i,1),$t("cn1",t,e,Yt,-n,0,-1),$t("cn2",t,e,Yt,n,0,-1),$t("cn3",t,e,Yt,0,-i,-1),$t("cn4",t,e,Yt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function $t(r,e,t,n,i,s,o){vu.set(i,s,o).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,d=c.length;h<d;h++)u.setXYZ(c[h],vu.x,vu.y,vu.z)}}const _u=new bn;class wR extends Li{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new ct;s.setIndex(new Ct(n,1)),s.setAttribute("position",new Ct(i,3)),super(s,new Rn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&_u.setFromObject(this.object),_u.isEmpty())return;const t=_u.min,n=_u.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class CR extends Li{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ct;s.setIndex(new Ct(n,1)),s.setAttribute("position",new Xe(i,3)),super(s,new Rn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class TR extends yr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new ct;o.setAttribute("position",new Xe(s,3)),o.computeBoundingSphere(),super(o,new Rn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new ct;u.setAttribute("position",new Xe(c,3)),u.computeBoundingSphere(),this.add(new tn(u,new ri({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const t_=new D;let yu,xf;class bR extends Mt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",yu===void 0&&(yu=new ct,yu.setAttribute("position",new Xe([0,0,0,0,1,0],3)),xf=new ta(0,.5,1,5,1),xf.translate(0,-.5,0)),this.position.copy(t),this.line=new yr(yu,new Rn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new tn(xf,new ri({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{t_.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(t_,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class RR extends Li{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ct;i.setAttribute("position",new Xe(t,3)),i.setAttribute("color",new Xe(n,3));const s=new Rn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ie,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class BR{constructor(){this.type="ShapePath",this.color=new Ie,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new il,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(y){const E=[];for(let S=0,C=y.length;S<C;S++){const F=y[S],R=new Us;R.curves=F.curves,E.push(R)}return E}function n(y,E){const S=E.length;let C=!1;for(let F=S-1,R=0;R<S;F=R++){let I=E[F],U=E[R],b=U.x-I.x,T=U.y-I.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(I=E[R],b=-b,U=E[F],T=-T),y.y<I.y||y.y>U.y)continue;if(y.y===I.y){if(y.x===I.x)return!0}else{const L=T*(y.x-I.x)-b*(y.y-I.y);if(L===0)return!0;if(L<0)continue;C=!C}}else{if(y.y!==I.y)continue;if(U.x<=y.x&&y.x<=I.x||I.x<=y.x&&y.x<=U.x)return!0}}return C}const i=Ki.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,c,u;const h=[];if(s.length===1)return c=s[0],u=new Us,u.curves=c.curves,h.push(u),h;let d=!i(s[0].getPoints());d=e?!d:d;const f=[],m=[];let g=[],_=0,A;m[_]=void 0,g[_]=[];for(let y=0,E=s.length;y<E;y++)c=s[y],A=c.getPoints(),o=i(A),o=e?!o:o,o?(!d&&m[_]&&_++,m[_]={s:new Us,p:A},m[_].s.curves=c.curves,d&&_++,g[_]=[]):g[_].push({h:c,p:A[0]});if(!m[0])return t(s);if(m.length>1){let y=!1,E=0;for(let S=0,C=m.length;S<C;S++)f[S]=[];for(let S=0,C=m.length;S<C;S++){const F=g[S];for(let R=0;R<F.length;R++){const I=F[R];let U=!0;for(let b=0;b<m.length;b++)n(I.p,m[b].p)&&(S!==b&&E++,U?(U=!1,f[b].push(I)):y=!0);U&&f[S].push(I)}}E>0&&y===!1&&(g=f)}let x;for(let y=0,E=m.length;y<E;y++){u=m[y].s,h.push(u),x=g[y];for(let S=0,C=x.length;S<C;S++)u.holes.push(x[S].h)}return h}}class IR extends Ii{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const PR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Op,AddEquation:zr,AddOperation:py,AdditiveAnimationBlendMode:Jp,AdditiveBlending:kf,AgXToneMapping:yy,AlphaFormat:wy,AlwaysCompare:Wy,AlwaysDepth:ay,AlwaysStencilFunc:vp,AmbientLight:Hx,AnimationAction:qx,AnimationClip:qo,AnimationLoader:Fb,AnimationMixer:Qx,AnimationObjectGroup:oR,AnimationUtils:Ib,ArcCurve:px,ArrayCamera:lx,ArrowHelper:bR,AttachedBindMode:Wf,Audio:Kx,AudioAnalyser:Qb,AudioContext:Sm,AudioListener:Kb,AudioLoader:Wb,AxesHelper:RR,BackSide:Gn,BasicDepthPacking:Fy,BasicShadowMap:k_,BatchedMesh:fx,Bone:sh,BooleanKeyframeTrack:Js,Box2:pR,Box3:bn,Box3Helper:CR,BoxGeometry:Xs,BoxHelper:wR,BufferAttribute:Ct,BufferGeometry:ct,BufferGeometryLoader:Xx,ByteType:My,Cache:fr,Camera:vl,CameraHelper:ER,CanvasTexture:tb,CapsuleGeometry:ch,CatmullRomCurve3:mx,CineonToneMapping:vy,CircleGeometry:uh,ClampToEdgeWrapping:ni,Clock:Em,Color:Ie,ColorKeyframeTrack:vm,ColorManagement:Lt,CompressedArrayTexture:$T,CompressedCubeTexture:eb,CompressedTexture:ah,CompressedTextureLoader:Ub,ConeGeometry:hh,ConstantAlphaFactor:ry,ConstantColorFactor:ny,CubeCamera:$y,CubeReflectionMapping:_r,CubeRefractionMapping:Kr,CubeTexture:_l,CubeTextureLoader:Nb,CubeUVReflectionMapping:Zo,CubicBezierCurve:um,CubicBezierCurve3:gx,CubicInterpolant:Dx,CullFaceBack:Hf,CullFaceFront:H_,CullFaceFrontBack:VM,CullFaceNone:G_,Curve:Di,CurvePath:_x,CustomBlending:z_,CustomToneMapping:_y,CylinderGeometry:ta,Cylindrical:fR,Data3DTexture:Zp,DataArrayTexture:th,DataTexture:mr,DataTextureLoader:Ob,DataUtils:qS,DecrementStencilOp:ZM,DecrementWrapStencilOp:$M,DefaultLoadingManager:Nx,DepthFormat:Ls,DepthStencilFormat:Gs,DepthTexture:tm,DetachedBindMode:Ay,DirectionalLight:Mm,DirectionalLightHelper:SR,DiscreteInterpolant:Fx,DisplayP3ColorSpace:eh,DodecahedronGeometry:dh,DoubleSide:yi,DstAlphaFactor:Z_,DstColorFactor:$_,DynamicCopyUsage:pS,DynamicDrawUsage:lS,DynamicReadUsage:hS,EdgesGeometry:yx,EllipseCurve:lh,EqualCompare:Hy,EqualDepth:cy,EqualStencilFunc:iS,EquirectangularReflectionMapping:Ka,EquirectangularRefractionMapping:Ya,Euler:oi,EventDispatcher:Ar,ExtrudeGeometry:ph,FileLoader:ai,Float16BufferAttribute:tE,Float32BufferAttribute:Xe,FloatType:ii,Fog:rh,FogExp2:ih,FramebufferTexture:jT,FrontSide:Yi,Frustum:yl,GLBufferAttribute:hR,GLSL1:gS,GLSL3:_p,GreaterCompare:ky,GreaterDepth:hy,GreaterEqualCompare:Vy,GreaterEqualDepth:uy,GreaterEqualStencilFunc:aS,GreaterStencilFunc:sS,GridHelper:AR,Group:dr,HalfFloatType:ml,HemisphereLight:Gx,HemisphereLightHelper:xR,IcosahedronGeometry:mh,ImageBitmapLoader:Jx,ImageLoader:al,ImageUtils:Yy,IncrementStencilOp:QM,IncrementWrapStencilOp:jM,InstancedBufferAttribute:Hs,InstancedBufferGeometry:Wx,InstancedInterleavedBuffer:uR,InstancedMesh:om,Int16BufferAttribute:$S,Int32BufferAttribute:eE,Int8BufferAttribute:QS,IntType:Gp,InterleavedBuffer:xl,InterleavedBufferAttribute:qr,Interpolant:na,InterpolateDiscrete:Xo,InterpolateLinear:Jo,InterpolateSmooth:Iu,InvertStencilOp:eS,KeepStencilOp:Ms,KeyframeTrack:Fi,LOD:dx,LatheGeometry:Ml,Layers:Fs,LessCompare:Gy,LessDepth:ly,LessEqualCompare:Yp,LessEqualDepth:Ja,LessEqualStencilFunc:rS,LessStencilFunc:nS,Light:$r,LightProbe:Vx,Line:yr,Line3:mR,LineBasicMaterial:Rn,LineCurve:hm,LineCurve3:vx,LineDashedMaterial:Ix,LineLoop:am,LineSegments:Li,LinearDisplayP3ColorSpace:gl,LinearFilter:Qt,LinearInterpolant:gm,LinearMipMapLinearFilter:KM,LinearMipMapNearestFilter:JM,LinearMipmapLinearFilter:Ai,LinearMipmapNearestFilter:Ho,LinearSRGBColorSpace:xr,LinearToneMapping:my,LinearTransfer:Za,Loader:Bn,LoaderUtils:Xr,LoadingManager:_m,LoopOnce:Iy,LoopPingPong:Ly,LoopRepeat:Py,LuminanceAlphaFormat:by,LuminanceFormat:Ty,MOUSE:kM,Material:ln,MaterialLoader:Mh,MathUtils:Xy,Matrix3:ht,Matrix4:Ze,MaxEquation:J_,Mesh:tn,MeshBasicMaterial:ri,MeshDepthMaterial:nm,MeshDistanceMaterial:im,MeshLambertMaterial:Rx,MeshMatcapMaterial:Bx,MeshNormalMaterial:bx,MeshPhongMaterial:Cx,MeshPhysicalMaterial:Mi,MeshStandardMaterial:wl,MeshToonMaterial:Tx,MinEquation:X_,MirroredRepeatWrapping:Wo,MixOperation:fy,MultiplyBlending:Vf,MultiplyOperation:pl,NearestFilter:hn,NearestMipMapLinearFilter:XM,NearestMipMapNearestFilter:WM,NearestMipmapLinearFilter:ws,NearestMipmapNearestFilter:ju,NeutralToneMapping:xy,NeverCompare:Oy,NeverDepth:oy,NeverStencilFunc:tS,NoBlending:pr,NoColorSpace:ur,NoToneMapping:Ji,NormalAnimationBlendMode:$u,NormalBlending:Ps,NotEqualCompare:zy,NotEqualDepth:dy,NotEqualStencilFunc:oS,NumberKeyframeTrack:zs,Object3D:Mt,ObjectLoader:zb,ObjectSpaceNormalMap:Ny,OctahedronGeometry:Sl,OneFactor:Y_,OneMinusConstantAlphaFactor:sy,OneMinusConstantColorFactor:iy,OneMinusDstAlphaFactor:j_,OneMinusDstColorFactor:ey,OneMinusSrcAlphaFactor:Uu,OneMinusSrcColorFactor:Q_,OrthographicCamera:Zr,P3Primaries:$a,PCFShadowMap:Qu,PCFSoftShadowMap:ka,PMREMGenerator:yp,Path:il,PerspectiveCamera:en,Plane:kr,PlaneGeometry:$o,PlaneHelper:TR,PointLight:Am,PointLightHelper:_R,Points:lm,PointsMaterial:oh,PolarGridHelper:MR,PolyhedronGeometry:jr,PositionalAudio:qb,PropertyBinding:wt,PropertyMixer:Yx,QuadraticBezierCurve:dm,QuadraticBezierCurve3:fm,Quaternion:Tn,QuaternionKeyframeTrack:Vs,QuaternionLinearInterpolant:Ux,RED_GREEN_RGTC2_Format:mp,RED_RGTC1_Format:By,REVISION:fl,RGBADepthPacking:Uy,RGBAFormat:On,RGBAIntegerFormat:Xp,RGBA_ASTC_10x10_Format:cp,RGBA_ASTC_10x5_Format:op,RGBA_ASTC_10x6_Format:ap,RGBA_ASTC_10x8_Format:lp,RGBA_ASTC_12x10_Format:up,RGBA_ASTC_12x12_Format:hp,RGBA_ASTC_4x4_Format:jf,RGBA_ASTC_5x4_Format:$f,RGBA_ASTC_5x5_Format:ep,RGBA_ASTC_6x5_Format:tp,RGBA_ASTC_6x6_Format:np,RGBA_ASTC_8x5_Format:ip,RGBA_ASTC_8x6_Format:rp,RGBA_ASTC_8x8_Format:sp,RGBA_BPTC_Format:Bu,RGBA_ETC2_EAC_Format:Zf,RGBA_PVRTC_2BPPV1_Format:Yf,RGBA_PVRTC_4BPPV1_Format:Kf,RGBA_S3TC_DXT1_Format:Tu,RGBA_S3TC_DXT3_Format:bu,RGBA_S3TC_DXT5_Format:Ru,RGBFormat:Cy,RGB_BPTC_SIGNED_Format:dp,RGB_BPTC_UNSIGNED_Format:fp,RGB_ETC1_Format:qf,RGB_ETC2_Format:Qf,RGB_PVRTC_2BPPV1_Format:Jf,RGB_PVRTC_4BPPV1_Format:Xf,RGB_S3TC_DXT1_Format:Cu,RGFormat:Ry,RGIntegerFormat:Wp,RawShaderMaterial:wx,Ray:jo,Raycaster:Zx,Rec709Primaries:ja,RectAreaLight:kx,RedFormat:zp,RedIntegerFormat:Vp,ReinhardToneMapping:gy,RenderTarget:qy,RepeatWrapping:Yr,ReplaceStencilOp:qM,ReverseSubtractEquation:W_,RingGeometry:gh,SIGNED_RED_GREEN_RGTC2_Format:gp,SIGNED_RED_RGTC1_Format:pp,SRGBColorSpace:_i,SRGBTransfer:Ot,Scene:Ou,ShaderChunk:pt,ShaderLib:Ri,ShaderMaterial:Pi,ShadowMaterial:Ex,Shape:Us,ShapeGeometry:vh,ShapePath:BR,ShapeUtils:Ki,ShortType:Sy,Skeleton:Al,SkeletonHelper:vR,SkinnedMesh:sm,Source:bs,Sphere:yn,SphereGeometry:El,Spherical:dR,SphericalHarmonics3:zx,SplineCurve:pm,SpotLight:xm,SpotLightHelper:gR,Sprite:hx,SpriteMaterial:rm,SrcAlphaFactor:Fu,SrcAlphaSaturateFactor:ty,SrcColorFactor:q_,StaticCopyUsage:fS,StaticDrawUsage:el,StaticReadUsage:uS,StereoCamera:Xb,StreamCopyUsage:mS,StreamDrawUsage:cS,StreamReadUsage:dS,StringKeyframeTrack:Ks,SubtractEquation:V_,SubtractiveBlending:zf,TOUCH:zM,TangentSpaceNormalMap:Qr,TetrahedronGeometry:_h,Texture:Ht,TextureLoader:Ox,TorusGeometry:yh,TorusKnotGeometry:xh,Triangle:ti,TriangleFanDrawMode:Nu,TriangleStripDrawMode:Kp,TrianglesDrawMode:Dy,TubeGeometry:Ah,UVMapping:Zu,Uint16BufferAttribute:jp,Uint32BufferAttribute:$p,Uint8BufferAttribute:ZS,Uint8ClampedBufferAttribute:jS,Uniform:Tm,UniformsGroup:cR,UniformsLib:Le,UniformsUtils:jy,UnsignedByteType:qi,UnsignedInt248Type:Os,UnsignedInt5999Type:Ey,UnsignedIntType:Ns,UnsignedShort4444Type:Hp,UnsignedShort5551Type:kp,UnsignedShortType:qa,VSMShadowMap:bi,Vector2:he,Vector3:D,Vector4:Dt,VectorKeyframeTrack:Ws,VideoTexture:ZT,WebGL3DRenderTarget:GS,WebGLArrayRenderTarget:OS,WebGLCoordinateSystem:Xi,WebGLCubeRenderTarget:ex,WebGLMultipleRenderTargets:IR,WebGLRenderTarget:Ii,WebGLRenderer:cx,WebGLUtils:ax,WebGPUCoordinateSystem:tl,WireframeGeometry:Sx,WrapAroundEnding:Qa,ZeroCurvatureEnding:Cs,ZeroFactor:K_,ZeroSlopeEnding:Ts,ZeroStencilOp:YM,createCanvasElement:Ky},Symbol.toStringTag,{value:"Module"}));var $x={exports:{}},Ys={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ys.ConcurrentRoot=1;Ys.ContinuousEventPriority=4;Ys.DefaultEventPriority=16;Ys.DiscreteEventPriority=1;Ys.IdleEventPriority=536870912;Ys.LegacyRoot=0;$x.exports=Ys;var Go=$x.exports;function LR(r){let e;const t=new Set,n=(h,d)=>{const f=typeof h=="function"?h(e):h;if(f!==e){const m=e;e=d?f:Object.assign({},e,f),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,d=i,f=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=d(e);function g(){const _=d(e);if(!f(m,_)){const A=m;h(m=_,A)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,d,f)=>d||f?s(h,d,f):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const DR=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),n_=DR?ge.useEffect:ge.useLayoutEffect;function FR(r){const e=typeof r=="function"?LR(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=ge.useReducer(x=>x+1,0),o=e.getState(),c=ge.useRef(o),u=ge.useRef(n),h=ge.useRef(i),d=ge.useRef(!1),f=ge.useRef();f.current===void 0&&(f.current=n(o));let m,g=!1;(c.current!==o||u.current!==n||h.current!==i||d.current)&&(m=n(o),g=!i(f.current,m)),n_(()=>{g&&(f.current=m),c.current=o,u.current=n,h.current=i,d.current=!1});const _=ge.useRef(o);n_(()=>{const x=()=>{try{const E=e.getState(),S=u.current(E);h.current(f.current,S)||(c.current=E,f.current=S,s())}catch{d.current=!0,s()}},y=e.subscribe(x);return e.getState()!==_.current&&x(),y},[]);const A=g?m:f.current;return ge.useDebugValue(A),A};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var eA={exports:{}},Af={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function UR(){return i_||(i_=1,function(r){function e(N,Y){var K=N.length;N.push(Y);e:for(;0<K;){var re=K-1>>>1,ye=N[re];if(0<i(ye,Y))N[re]=Y,N[K]=ye,K=re;else break e}}function t(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var Y=N[0],K=N.pop();if(K!==Y){N[0]=K;e:for(var re=0,ye=N.length,De=ye>>>1;re<De;){var ne=2*(re+1)-1,fe=N[ne],we=ne+1,xe=N[we];if(0>i(fe,K))we<ye&&0>i(xe,fe)?(N[re]=xe,N[we]=K,re=we):(N[re]=fe,N[ne]=K,re=ne);else if(we<ye&&0>i(xe,K))N[re]=xe,N[we]=K,re=we;else break e}}return Y}function i(N,Y){var K=N.sortIndex-Y.sortIndex;return K!==0?K:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],d=1,f=null,m=3,g=!1,_=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(N){for(var Y=t(h);Y!==null;){if(Y.callback===null)n(h);else if(Y.startTime<=N)n(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=t(h)}}function C(N){if(A=!1,S(N),!_)if(t(u)!==null)_=!0,Q(F);else{var Y=t(h);Y!==null&&ce(C,Y.startTime-N)}}function F(N,Y){_=!1,A&&(A=!1,y(U),U=-1),g=!0;var K=m;try{for(S(Y),f=t(u);f!==null&&(!(f.expirationTime>Y)||N&&!L());){var re=f.callback;if(typeof re=="function"){f.callback=null,m=f.priorityLevel;var ye=re(f.expirationTime<=Y);Y=r.unstable_now(),typeof ye=="function"?f.callback=ye:f===t(u)&&n(u),S(Y)}else n(u);f=t(u)}if(f!==null)var De=!0;else{var ne=t(h);ne!==null&&ce(C,ne.startTime-Y),De=!1}return De}finally{f=null,m=K,g=!1}}var R=!1,I=null,U=-1,b=5,T=-1;function L(){return!(r.unstable_now()-T<b)}function X(){if(I!==null){var N=r.unstable_now();T=N;var Y=!0;try{Y=I(!0,N)}finally{Y?J():(R=!1,I=null)}}else R=!1}var J;if(typeof E=="function")J=function(){E(X)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ie=Z.port2;Z.port1.onmessage=X,J=function(){ie.postMessage(null)}}else J=function(){x(X,0)};function Q(N){I=N,R||(R=!0,J())}function ce(N,Y){U=x(function(){N(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_continueExecution=function(){_||g||(_=!0,Q(F))},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(N){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var K=m;m=Y;try{return N()}finally{m=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=m;m=N;try{return Y()}finally{m=K}},r.unstable_scheduleCallback=function(N,Y,K){var re=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,N={id:d++,callback:Y,priorityLevel:N,startTime:K,expirationTime:ye,sortIndex:-1},K>re?(N.sortIndex=K,e(h,N),t(u)===null&&N===t(h)&&(A?(y(U),U=-1):A=!0,ce(C,K-re))):(N.sortIndex=ye,e(u,N),_||g||(_=!0,Q(F))),N},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(N){var Y=m;return function(){var K=m;m=Y;try{return N.apply(this,arguments)}finally{m=K}}}}(Mf)),Mf}var r_;function NR(){return r_||(r_=1,Af.exports=UR()),Af.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OR=function(e){var t={},n=ge,i=NR(),s=Object.assign;function o(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,p=1;p<arguments.length;p++)l+="&args[]="+encodeURIComponent(arguments[p]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),_=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),F=Symbol.iterator;function R(a){return a===null||typeof a!="object"?null:(a=F&&a[F]||a["@@iterator"],typeof a=="function"?a:null)}function I(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case d:return"Fragment";case h:return"Portal";case m:return"Profiler";case f:return"StrictMode";case x:return"Suspense";case y:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case _:return(a.displayName||"Context")+".Consumer";case g:return(a._context.displayName||"Context")+".Provider";case A:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case E:return l=a.displayName||null,l!==null?l:I(a.type)||"Memo";case S:l=a._payload,a=a._init;try{return I(a(l))}catch{}}return null}function U(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=l.render,a=a.displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return I(l);case 8:return l===f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function b(a){var l=a,p=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,l.flags&4098&&(p=l.return),a=l.return;while(a)}return l.tag===3?p:null}function T(a){if(b(a)!==a)throw Error(o(188))}function L(a){var l=a.alternate;if(!l){if(l=b(a),l===null)throw Error(o(188));return l!==a?null:a}for(var p=a,v=l;;){var M=p.return;if(M===null)break;var w=M.alternate;if(w===null){if(v=M.return,v!==null){p=v;continue}break}if(M.child===w.child){for(w=M.child;w;){if(w===p)return T(M),a;if(w===v)return T(M),l;w=w.sibling}throw Error(o(188))}if(p.return!==v.return)p=M,v=w;else{for(var O=!1,z=M.child;z;){if(z===p){O=!0,p=M,v=w;break}if(z===v){O=!0,v=M,p=w;break}z=z.sibling}if(!O){for(z=w.child;z;){if(z===p){O=!0,p=w,v=M;break}if(z===v){O=!0,v=w,p=M;break}z=z.sibling}if(!O)throw Error(o(189))}}if(p.alternate!==v)throw Error(o(190))}if(p.tag!==3)throw Error(o(188));return p.stateNode.current===p?a:l}function X(a){return a=L(a),a!==null?J(a):null}function J(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=J(a);if(l!==null)return l;a=a.sibling}return null}function Z(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){if(a.tag!==4){var l=Z(a);if(l!==null)return l}a=a.sibling}return null}var ie=Array.isArray,Q=e.getPublicInstance,ce=e.getRootHostContext,N=e.getChildHostContext,Y=e.prepareForCommit,K=e.resetAfterCommit,re=e.createInstance,ye=e.appendInitialChild,De=e.finalizeInitialChildren,ne=e.prepareUpdate,fe=e.shouldSetTextContent,we=e.createTextInstance,xe=e.scheduleTimeout,et=e.cancelTimeout,it=e.noTimeout,Ve=e.isPrimaryRenderer,H=e.supportsMutation,le=e.supportsPersistence,ae=e.supportsHydration,Ae=e.getInstanceFromNode,ve=e.preparePortalMount,Me=e.getCurrentEventPriority,Be=e.detachDeletedInstance,Fe=e.supportsMicrotasks,nt=e.scheduleMicrotask,G=e.supportsTestSelectors,B=e.findFiberRoot,ee=e.getBoundingRect,me=e.getTextContent,de=e.isHiddenSubtree,_e=e.matchAccessibilityRole,Ke=e.setFocusIfFocusable,Ce=e.setupIntersectionObserver,Pe=e.appendChild,ot=e.appendChildToContainer,Se=e.commitTextUpdate,We=e.commitMount,vt=e.commitUpdate,rt=e.insertBefore,Ne=e.insertInContainerBefore,ft=e.removeChild,yt=e.removeChildFromContainer,kt=e.resetTextContent,k=e.hideInstance,Ge=e.hideTextInstance,ue=e.unhideInstance,pe=e.unhideTextInstance,be=e.clearContainer,st=e.cloneInstance,St=e.createContainerChildSet,zt=e.appendChildToContainerChildSet,nn=e.finalizeContainerChildren,Pt=e.replaceContainerChildren,Jn=e.cloneHiddenInstance,Kn=e.cloneHiddenTextInstance,Qi=e.canHydrateInstance,ia=e.canHydrateTextInstance,Il=e.canHydrateSuspenseInstance,ra=e.isSuspenseInstancePending,Mr=e.isSuspenseInstanceFallback,Pl=e.registerSuspenseInstanceRetry,Ui=e.getNextHydratableSibling,Ll=e.getFirstHydratableChild,Dl=e.getFirstHydratableChildWithinContainer,Th=e.getFirstHydratableChildWithinSuspenseInstance,bh=e.hydrateInstance,Rh=e.hydrateTextInstance,P=e.hydrateSuspenseInstance,V=e.getNextHydratableInstanceAfterSuspenseInstance,$=e.commitHydratedContainer,te=e.commitHydratedSuspenseInstance,q=e.clearSuspenseBoundary,Te=e.clearSuspenseBoundaryFromContainer,He=e.shouldDeleteUnhydratedTailInstances,ze=e.didNotMatchHydratedContainerTextInstance,Je=e.didNotMatchHydratedTextInstance,tt;function je(a){if(tt===void 0)try{throw Error()}catch(p){var l=p.stack.trim().match(/\n( *(at )?)/);tt=l&&l[1]||""}return`
`+tt+a}var Qe=!1;function Et(a,l){if(!a||Qe)return"";Qe=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(Ee){var v=Ee}Reflect.construct(a,[],l)}else{try{l.call()}catch(Ee){v=Ee}a.call(l.prototype)}else{try{throw Error()}catch(Ee){v=Ee}a()}}catch(Ee){if(Ee&&v&&typeof Ee.stack=="string"){for(var M=Ee.stack.split(`
`),w=v.stack.split(`
`),O=M.length-1,z=w.length-1;1<=O&&0<=z&&M[O]!==w[z];)z--;for(;1<=O&&0<=z;O--,z--)if(M[O]!==w[z]){if(O!==1||z!==1)do if(O--,z--,0>z||M[O]!==w[z]){var oe=`
`+M[O].replace(" at new "," at ");return a.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",a.displayName)),oe}while(1<=O&&0<=z);break}}}finally{Qe=!1,Error.prepareStackTrace=p}return(a=a?a.displayName||a.name:"")?je(a):""}var Vt=Object.prototype.hasOwnProperty,Ut=[],rn=-1;function _t(a){return{current:a}}function Re(a){0>rn||(a.current=Ut[rn],Ut[rn]=null,rn--)}function ut(a,l){rn++,Ut[rn]=a.current,a.current=l}var xt={},Nt=_t(xt),cn=_t(!1),In=xt;function Ni(a,l){var p=a.type.contextTypes;if(!p)return xt;var v=a.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var M={},w;for(w in p)M[w]=l[w];return v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=M),M}function Tt(a){return a=a.childContextTypes,a!=null}function Yn(){Re(cn),Re(Nt)}function qs(a,l,p){if(Nt.current!==xt)throw Error(o(168));ut(Nt,l),ut(cn,p)}function Pn(a,l,p){var v=a.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return p;v=v.getChildContext();for(var M in v)if(!(M in l))throw Error(o(108,U(a)||"Unknown",M));return s({},p,v)}function Sr(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||xt,In=Nt.current,ut(Nt,a),ut(cn,cn.current),!0}function Fl(a,l,p){var v=a.stateNode;if(!v)throw Error(o(169));p?(a=Pn(a,l,In),v.__reactInternalMemoizedMergedChildContext=a,Re(cn),Re(Nt),ut(Nt,a)):Re(cn),ut(cn,p)}var Hn=Math.clz32?Math.clz32:ZA,qA=Math.log,QA=Math.LN2;function ZA(a){return a>>>=0,a===0?32:31-(qA(a)/QA|0)|0}var Ul=64,Nl=4194304;function sa(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Ol(a,l){var p=a.pendingLanes;if(p===0)return 0;var v=0,M=a.suspendedLanes,w=a.pingedLanes,O=p&268435455;if(O!==0){var z=O&~M;z!==0?v=sa(z):(w&=O,w!==0&&(v=sa(w)))}else O=p&~M,O!==0?v=sa(O):w!==0&&(v=sa(w));if(v===0)return 0;if(l!==0&&l!==v&&!(l&M)&&(M=v&-v,w=l&-l,M>=w||M===16&&(w&4194240)!==0))return l;if(v&4&&(v|=p&16),l=a.entangledLanes,l!==0)for(a=a.entanglements,l&=v;0<l;)p=31-Hn(l),M=1<<p,v|=a[p],l&=~M;return v}function jA(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $A(a,l){for(var p=a.suspendedLanes,v=a.pingedLanes,M=a.expirationTimes,w=a.pendingLanes;0<w;){var O=31-Hn(w),z=1<<O,oe=M[O];oe===-1?(!(z&p)||z&v)&&(M[O]=jA(z,l)):oe<=l&&(a.expiredLanes|=z),w&=~z}}function Bh(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function Ih(a){for(var l=[],p=0;31>p;p++)l.push(a);return l}function oa(a,l,p){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,l=31-Hn(l),a[l]=p}function eM(a,l){var p=a.pendingLanes&~l;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=l,a.mutableReadLanes&=l,a.entangledLanes&=l,l=a.entanglements;var v=a.eventTimes;for(a=a.expirationTimes;0<p;){var M=31-Hn(p),w=1<<M;l[M]=0,v[M]=-1,a[M]=-1,p&=~w}}function Ph(a,l){var p=a.entangledLanes|=l;for(a=a.entanglements;p;){var v=31-Hn(p),M=1<<v;M&l|a[v]&l&&(a[v]|=l),p&=~M}}var Rt=0;function Km(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var Lh=i.unstable_scheduleCallback,Ym=i.unstable_cancelCallback,tM=i.unstable_shouldYield,nM=i.unstable_requestPaint,pn=i.unstable_now,Dh=i.unstable_ImmediatePriority,iM=i.unstable_UserBlockingPriority,Fh=i.unstable_NormalPriority,rM=i.unstable_IdlePriority,Gl=null,Oi=null;function sM(a){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(Gl,a,void 0,(a.current.flags&128)===128)}catch{}}function oM(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var Gi=typeof Object.is=="function"?Object.is:oM,Zi=null,Hl=!1,Uh=!1;function qm(a){Zi===null?Zi=[a]:Zi.push(a)}function aM(a){Hl=!0,qm(a)}function Hi(){if(!Uh&&Zi!==null){Uh=!0;var a=0,l=Rt;try{var p=Zi;for(Rt=1;a<p.length;a++){var v=p[a];do v=v(!0);while(v!==null)}Zi=null,Hl=!1}catch(M){throw Zi!==null&&(Zi=Zi.slice(a+1)),Lh(Dh,Hi),M}finally{Rt=l,Uh=!1}}return null}var lM=c.ReactCurrentBatchConfig;function kl(a,l){if(Gi(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var p=Object.keys(a),v=Object.keys(l);if(p.length!==v.length)return!1;for(v=0;v<p.length;v++){var M=p[v];if(!Vt.call(l,M)||!Gi(a[M],l[M]))return!1}return!0}function cM(a){switch(a.tag){case 5:return je(a.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 2:case 15:return a=Et(a.type,!1),a;case 11:return a=Et(a.type.render,!1),a;case 1:return a=Et(a.type,!0),a;default:return""}}function Si(a,l){if(a&&a.defaultProps){l=s({},l),a=a.defaultProps;for(var p in a)l[p]===void 0&&(l[p]=a[p]);return l}return l}var zl=_t(null),Vl=null,Qs=null,Nh=null;function Oh(){Nh=Qs=Vl=null}function Qm(a,l,p){Ve?(ut(zl,l._currentValue),l._currentValue=p):(ut(zl,l._currentValue2),l._currentValue2=p)}function Gh(a){var l=zl.current;Re(zl),Ve?a._currentValue=l:a._currentValue2=l}function Hh(a,l,p){for(;a!==null;){var v=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),a===p)break;a=a.return}}function Zs(a,l){Vl=a,Nh=Qs=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&l&&(Zn=!0),a.firstContext=null)}function li(a){var l=Ve?a._currentValue:a._currentValue2;if(Nh!==a)if(a={context:a,memoizedValue:l,next:null},Qs===null){if(Vl===null)throw Error(o(308));Qs=a,Vl.dependencies={lanes:0,firstContext:a}}else Qs=Qs.next=a;return l}var ki=null,Er=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ji(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function wr(a,l){var p=a.updateQueue;p!==null&&(p=p.shared,sn!==null&&a.mode&1&&!(gt&2)?(a=p.interleaved,a===null?(l.next=l,ki===null?ki=[p]:ki.push(p)):(l.next=a.next,a.next=l),p.interleaved=l):(a=p.pending,a===null?l.next=l:(l.next=a.next,a.next=l),p.pending=l))}function Wl(a,l,p){if(l=l.updateQueue,l!==null&&(l=l.shared,(p&4194240)!==0)){var v=l.lanes;v&=a.pendingLanes,p|=v,l.lanes=p,Ph(a,p)}}function jm(a,l){var p=a.updateQueue,v=a.alternate;if(v!==null&&(v=v.updateQueue,p===v)){var M=null,w=null;if(p=p.firstBaseUpdate,p!==null){do{var O={eventTime:p.eventTime,lane:p.lane,tag:p.tag,payload:p.payload,callback:p.callback,next:null};w===null?M=w=O:w=w.next=O,p=p.next}while(p!==null);w===null?M=w=l:w=w.next=l}else M=w=l;p={baseState:v.baseState,firstBaseUpdate:M,lastBaseUpdate:w,shared:v.shared,effects:v.effects},a.updateQueue=p;return}a=p.lastBaseUpdate,a===null?p.firstBaseUpdate=l:a.next=l,p.lastBaseUpdate=l}function Xl(a,l,p,v){var M=a.updateQueue;Er=!1;var w=M.firstBaseUpdate,O=M.lastBaseUpdate,z=M.shared.pending;if(z!==null){M.shared.pending=null;var oe=z,Ee=oe.next;oe.next=null,O===null?w=Ee:O.next=Ee,O=oe;var ke=a.alternate;ke!==null&&(ke=ke.updateQueue,z=ke.lastBaseUpdate,z!==O&&(z===null?ke.firstBaseUpdate=Ee:z.next=Ee,ke.lastBaseUpdate=oe))}if(w!==null){var at=M.baseState;O=0,ke=Ee=oe=null,z=w;do{var $e=z.lane,Ft=z.eventTime;if((v&$e)===$e){ke!==null&&(ke=ke.next={eventTime:Ft,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var qe=a,Sn=z;switch($e=l,Ft=p,Sn.tag){case 1:if(qe=Sn.payload,typeof qe=="function"){at=qe.call(Ft,at,$e);break e}at=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Sn.payload,$e=typeof qe=="function"?qe.call(Ft,at,$e):qe,$e==null)break e;at=s({},at,$e);break e;case 2:Er=!0}}z.callback!==null&&z.lane!==0&&(a.flags|=64,$e=M.effects,$e===null?M.effects=[z]:$e.push(z))}else Ft={eventTime:Ft,lane:$e,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ke===null?(Ee=ke=Ft,oe=at):ke=ke.next=Ft,O|=$e;if(z=z.next,z===null){if(z=M.shared.pending,z===null)break;$e=z,z=$e.next,$e.next=null,M.lastBaseUpdate=$e,M.shared.pending=null}}while(!0);if(ke===null&&(oe=at),M.baseState=oe,M.firstBaseUpdate=Ee,M.lastBaseUpdate=ke,l=M.shared.interleaved,l!==null){M=l;do O|=M.lane,M=M.next;while(M!==l)}else w===null&&(M.shared.lanes=0);oo|=O,a.lanes=O,a.memoizedState=at}}function $m(a,l,p){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var v=a[l],M=v.callback;if(M!==null){if(v.callback=null,v=p,typeof M!="function")throw Error(o(191,M));M.call(v)}}}var eg=new n.Component().refs;function zh(a,l,p,v){l=a.memoizedState,p=p(v,l),p=p==null?l:s({},l,p),a.memoizedState=p,a.lanes===0&&(a.updateQueue.baseState=p)}var Jl={isMounted:function(a){return(a=a._reactInternals)?b(a)===a:!1},enqueueSetState:function(a,l,p){a=a._reactInternals;var v=Dn(),M=br(a),w=ji(v,M);w.payload=l,p!=null&&(w.callback=p),wr(a,w),l=fi(a,M,v),l!==null&&Wl(l,a,M)},enqueueReplaceState:function(a,l,p){a=a._reactInternals;var v=Dn(),M=br(a),w=ji(v,M);w.tag=1,w.payload=l,p!=null&&(w.callback=p),wr(a,w),l=fi(a,M,v),l!==null&&Wl(l,a,M)},enqueueForceUpdate:function(a,l){a=a._reactInternals;var p=Dn(),v=br(a),M=ji(p,v);M.tag=2,l!=null&&(M.callback=l),wr(a,M),l=fi(a,v,p),l!==null&&Wl(l,a,v)}};function tg(a,l,p,v,M,w,O){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(v,w,O):l.prototype&&l.prototype.isPureReactComponent?!kl(p,v)||!kl(M,w):!0}function ng(a,l,p){var v=!1,M=xt,w=l.contextType;return typeof w=="object"&&w!==null?w=li(w):(M=Tt(l)?In:Nt.current,v=l.contextTypes,w=(v=v!=null)?Ni(a,M):xt),l=new l(p,w),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Jl,a.stateNode=l,l._reactInternals=a,v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=M,a.__reactInternalMemoizedMaskedChildContext=w),l}function ig(a,l,p,v){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(p,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(p,v),l.state!==a&&Jl.enqueueReplaceState(l,l.state,null)}function Vh(a,l,p,v){var M=a.stateNode;M.props=p,M.state=a.memoizedState,M.refs=eg,kh(a);var w=l.contextType;typeof w=="object"&&w!==null?M.context=li(w):(w=Tt(l)?In:Nt.current,M.context=Ni(a,w)),M.state=a.memoizedState,w=l.getDerivedStateFromProps,typeof w=="function"&&(zh(a,l,w,p),M.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof M.getSnapshotBeforeUpdate=="function"||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(l=M.state,typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount(),l!==M.state&&Jl.enqueueReplaceState(M,M.state,null),Xl(a,p,M,v),M.state=a.memoizedState),typeof M.componentDidMount=="function"&&(a.flags|=4194308)}var js=[],$s=0,Kl=null,Yl=0,ci=[],ui=0,es=null,$i=1,er="";function ts(a,l){js[$s++]=Yl,js[$s++]=Kl,Kl=a,Yl=l}function rg(a,l,p){ci[ui++]=$i,ci[ui++]=er,ci[ui++]=es,es=a;var v=$i;a=er;var M=32-Hn(v)-1;v&=~(1<<M),p+=1;var w=32-Hn(l)+M;if(30<w){var O=M-M%5;w=(v&(1<<O)-1).toString(32),v>>=O,M-=O,$i=1<<32-Hn(l)+M|p<<M|v,er=w+a}else $i=1<<w|p<<M|v,er=a}function Wh(a){a.return!==null&&(ts(a,1),rg(a,1,0))}function Xh(a){for(;a===Kl;)Kl=js[--$s],js[$s]=null,Yl=js[--$s],js[$s]=null;for(;a===es;)es=ci[--ui],ci[ui]=null,er=ci[--ui],ci[ui]=null,$i=ci[--ui],ci[ui]=null}var qn=null,Qn=null,Wt=!1,aa=!1,Ei=null;function sg(a,l){var p=pi(5,null,null,0);p.elementType="DELETED",p.stateNode=l,p.return=a,l=a.deletions,l===null?(a.deletions=[p],a.flags|=16):l.push(p)}function og(a,l){switch(a.tag){case 5:return l=Qi(l,a.type,a.pendingProps),l!==null?(a.stateNode=l,qn=a,Qn=Ll(l),!0):!1;case 6:return l=ia(l,a.pendingProps),l!==null?(a.stateNode=l,qn=a,Qn=null,!0):!1;case 13:if(l=Il(l),l!==null){var p=es!==null?{id:$i,overflow:er}:null;return a.memoizedState={dehydrated:l,treeContext:p,retryLane:1073741824},p=pi(18,null,null,0),p.stateNode=l,p.return=a,a.child=p,qn=a,Qn=null,!0}return!1;default:return!1}}function Jh(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Kh(a){if(Wt){var l=Qn;if(l){var p=l;if(!og(a,l)){if(Jh(a))throw Error(o(418));l=Ui(p);var v=qn;l&&og(a,l)?sg(v,p):(a.flags=a.flags&-4097|2,Wt=!1,qn=a)}}else{if(Jh(a))throw Error(o(418));a.flags=a.flags&-4097|2,Wt=!1,qn=a}}}function ag(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;qn=a}function la(a){if(!ae||a!==qn)return!1;if(!Wt)return ag(a),Wt=!0,!1;if(a.tag!==3&&(a.tag!==5||He(a.type)&&!fe(a.type,a.memoizedProps))){var l=Qn;if(l){if(Jh(a)){for(a=Qn;a;)a=Ui(a);throw Error(o(418))}for(;l;)sg(a,l),l=Ui(l)}}if(ag(a),a.tag===13){if(!ae)throw Error(o(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));Qn=V(a)}else Qn=qn?Ui(a.stateNode):null;return!0}function eo(){ae&&(Qn=qn=null,aa=Wt=!1)}function Yh(a){Ei===null?Ei=[a]:Ei.push(a)}function ca(a,l,p){if(a=p.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(p._owner){if(p=p._owner,p){if(p.tag!==1)throw Error(o(309));var v=p.stateNode}if(!v)throw Error(o(147,a));var M=v,w=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===w?l.ref:(l=function(O){var z=M.refs;z===eg&&(z=M.refs={}),O===null?delete z[w]:z[w]=O},l._stringRef=w,l)}if(typeof a!="string")throw Error(o(284));if(!p._owner)throw Error(o(290,a))}return a}function ql(a,l){throw a=Object.prototype.toString.call(l),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function lg(a){var l=a._init;return l(a._payload)}function cg(a){function l(j,W){if(a){var se=j.deletions;se===null?(j.deletions=[W],j.flags|=16):se.push(W)}}function p(j,W){if(!a)return null;for(;W!==null;)l(j,W),W=W.sibling;return null}function v(j,W){for(j=new Map;W!==null;)W.key!==null?j.set(W.key,W):j.set(W.index,W),W=W.sibling;return j}function M(j,W){return j=Br(j,W),j.index=0,j.sibling=null,j}function w(j,W,se){return j.index=se,a?(se=j.alternate,se!==null?(se=se.index,se<W?(j.flags|=2,W):se):(j.flags|=2,W)):(j.flags|=1048576,W)}function O(j){return a&&j.alternate===null&&(j.flags|=2),j}function z(j,W,se,Oe){return W===null||W.tag!==6?(W=Id(se,j.mode,Oe),W.return=j,W):(W=M(W,se),W.return=j,W)}function oe(j,W,se,Oe){var Ye=se.type;return Ye===d?ke(j,W,se.props.children,Oe,se.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===S&&lg(Ye)===W.type)?(Oe=M(W,se.props),Oe.ref=ca(j,W,se),Oe.return=j,Oe):(Oe=Cc(se.type,se.key,se.props,null,j.mode,Oe),Oe.ref=ca(j,W,se),Oe.return=j,Oe)}function Ee(j,W,se,Oe){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Pd(se,j.mode,Oe),W.return=j,W):(W=M(W,se.children||[]),W.return=j,W)}function ke(j,W,se,Oe,Ye){return W===null||W.tag!==7?(W=ls(se,j.mode,Oe,Ye),W.return=j,W):(W=M(W,se),W.return=j,W)}function at(j,W,se){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Id(""+W,j.mode,se),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case u:return se=Cc(W.type,W.key,W.props,null,j.mode,se),se.ref=ca(j,null,W),se.return=j,se;case h:return W=Pd(W,j.mode,se),W.return=j,W;case S:var Oe=W._init;return at(j,Oe(W._payload),se)}if(ie(W)||R(W))return W=ls(W,j.mode,se,null),W.return=j,W;ql(j,W)}return null}function $e(j,W,se,Oe){var Ye=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ye!==null?null:z(j,W,""+se,Oe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case u:return se.key===Ye?oe(j,W,se,Oe):null;case h:return se.key===Ye?Ee(j,W,se,Oe):null;case S:return Ye=se._init,$e(j,W,Ye(se._payload),Oe)}if(ie(se)||R(se))return Ye!==null?null:ke(j,W,se,Oe,null);ql(j,se)}return null}function Ft(j,W,se,Oe,Ye){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return j=j.get(se)||null,z(W,j,""+Oe,Ye);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case u:return j=j.get(Oe.key===null?se:Oe.key)||null,oe(W,j,Oe,Ye);case h:return j=j.get(Oe.key===null?se:Oe.key)||null,Ee(W,j,Oe,Ye);case S:var mt=Oe._init;return Ft(j,W,se,mt(Oe._payload),Ye)}if(ie(Oe)||R(Oe))return j=j.get(se)||null,ke(W,j,Oe,Ye,null);ql(W,Oe)}return null}function qe(j,W,se,Oe){for(var Ye=null,mt=null,lt=W,Bt=W=0,gn=null;lt!==null&&Bt<se.length;Bt++){lt.index>Bt?(gn=lt,lt=null):gn=lt.sibling;var It=$e(j,lt,se[Bt],Oe);if(It===null){lt===null&&(lt=gn);break}a&&lt&&It.alternate===null&&l(j,lt),W=w(It,W,Bt),mt===null?Ye=It:mt.sibling=It,mt=It,lt=gn}if(Bt===se.length)return p(j,lt),Wt&&ts(j,Bt),Ye;if(lt===null){for(;Bt<se.length;Bt++)lt=at(j,se[Bt],Oe),lt!==null&&(W=w(lt,W,Bt),mt===null?Ye=lt:mt.sibling=lt,mt=lt);return Wt&&ts(j,Bt),Ye}for(lt=v(j,lt);Bt<se.length;Bt++)gn=Ft(lt,j,Bt,se[Bt],Oe),gn!==null&&(a&&gn.alternate!==null&&lt.delete(gn.key===null?Bt:gn.key),W=w(gn,W,Bt),mt===null?Ye=gn:mt.sibling=gn,mt=gn);return a&&lt.forEach(function(Ir){return l(j,Ir)}),Wt&&ts(j,Bt),Ye}function Sn(j,W,se,Oe){var Ye=R(se);if(typeof Ye!="function")throw Error(o(150));if(se=Ye.call(se),se==null)throw Error(o(151));for(var mt=Ye=null,lt=W,Bt=W=0,gn=null,It=se.next();lt!==null&&!It.done;Bt++,It=se.next()){lt.index>Bt?(gn=lt,lt=null):gn=lt.sibling;var Ir=$e(j,lt,It.value,Oe);if(Ir===null){lt===null&&(lt=gn);break}a&&lt&&Ir.alternate===null&&l(j,lt),W=w(Ir,W,Bt),mt===null?Ye=Ir:mt.sibling=Ir,mt=Ir,lt=gn}if(It.done)return p(j,lt),Wt&&ts(j,Bt),Ye;if(lt===null){for(;!It.done;Bt++,It=se.next())It=at(j,It.value,Oe),It!==null&&(W=w(It,W,Bt),mt===null?Ye=It:mt.sibling=It,mt=It);return Wt&&ts(j,Bt),Ye}for(lt=v(j,lt);!It.done;Bt++,It=se.next())It=Ft(lt,j,Bt,It.value,Oe),It!==null&&(a&&It.alternate!==null&&lt.delete(It.key===null?Bt:It.key),W=w(It,W,Bt),mt===null?Ye=It:mt.sibling=It,mt=It);return a&&lt.forEach(function(GM){return l(j,GM)}),Wt&&ts(j,Bt),Ye}function mi(j,W,se,Oe){if(typeof se=="object"&&se!==null&&se.type===d&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case u:e:{for(var Ye=se.key,mt=W;mt!==null;){if(mt.key===Ye){if(Ye=se.type,Ye===d){if(mt.tag===7){p(j,mt.sibling),W=M(mt,se.props.children),W.return=j,j=W;break e}}else if(mt.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===S&&lg(Ye)===mt.type){p(j,mt.sibling),W=M(mt,se.props),W.ref=ca(j,mt,se),W.return=j,j=W;break e}p(j,mt);break}else l(j,mt);mt=mt.sibling}se.type===d?(W=ls(se.props.children,j.mode,Oe,se.key),W.return=j,j=W):(Oe=Cc(se.type,se.key,se.props,null,j.mode,Oe),Oe.ref=ca(j,W,se),Oe.return=j,j=Oe)}return O(j);case h:e:{for(mt=se.key;W!==null;){if(W.key===mt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){p(j,W.sibling),W=M(W,se.children||[]),W.return=j,j=W;break e}else{p(j,W);break}else l(j,W);W=W.sibling}W=Pd(se,j.mode,Oe),W.return=j,j=W}return O(j);case S:return mt=se._init,mi(j,W,mt(se._payload),Oe)}if(ie(se))return qe(j,W,se,Oe);if(R(se))return Sn(j,W,se,Oe);ql(j,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,W!==null&&W.tag===6?(p(j,W.sibling),W=M(W,se),W.return=j,j=W):(p(j,W),W=Id(se,j.mode,Oe),W.return=j,j=W),O(j)):p(j,W)}return mi}var to=cg(!0),ug=cg(!1),ua={},hi=_t(ua),ha=_t(ua),no=_t(ua);function zi(a){if(a===ua)throw Error(o(174));return a}function qh(a,l){ut(no,l),ut(ha,a),ut(hi,ua),a=ce(l),Re(hi),ut(hi,a)}function io(){Re(hi),Re(ha),Re(no)}function hg(a){var l=zi(no.current),p=zi(hi.current);l=N(p,a.type,l),p!==l&&(ut(ha,a),ut(hi,l))}function Qh(a){ha.current===a&&(Re(hi),Re(ha))}var Xt=_t(0);function Ql(a){for(var l=a;l!==null;){if(l.tag===13){var p=l.memoizedState;if(p!==null&&(p=p.dehydrated,p===null||ra(p)||Mr(p)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Zh=[];function jh(){for(var a=0;a<Zh.length;a++){var l=Zh[a];Ve?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}Zh.length=0}var Zl=c.ReactCurrentDispatcher,di=c.ReactCurrentBatchConfig,ro=0,Kt=null,xn=null,mn=null,jl=!1,da=!1,fa=0,uM=0;function An(){throw Error(o(321))}function $h(a,l){if(l===null)return!1;for(var p=0;p<l.length&&p<a.length;p++)if(!Gi(a[p],l[p]))return!1;return!0}function ed(a,l,p,v,M,w){if(ro=w,Kt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Zl.current=a===null||a.memoizedState===null?pM:mM,a=p(v,M),da){w=0;do{if(da=!1,fa=0,25<=w)throw Error(o(301));w+=1,mn=xn=null,l.updateQueue=null,Zl.current=gM,a=p(v,M)}while(da)}if(Zl.current=ic,l=xn!==null&&xn.next!==null,ro=0,mn=xn=Kt=null,jl=!1,l)throw Error(o(300));return a}function td(){var a=fa!==0;return fa=0,a}function tr(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Kt.memoizedState=mn=a:mn=mn.next=a,mn}function Vi(){if(xn===null){var a=Kt.alternate;a=a!==null?a.memoizedState:null}else a=xn.next;var l=mn===null?Kt.memoizedState:mn.next;if(l!==null)mn=l,xn=a;else{if(a===null)throw Error(o(310));xn=a,a={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},mn===null?Kt.memoizedState=mn=a:mn=mn.next=a}return mn}function ns(a,l){return typeof l=="function"?l(a):l}function $l(a){var l=Vi(),p=l.queue;if(p===null)throw Error(o(311));p.lastRenderedReducer=a;var v=xn,M=v.baseQueue,w=p.pending;if(w!==null){if(M!==null){var O=M.next;M.next=w.next,w.next=O}v.baseQueue=M=w,p.pending=null}if(M!==null){w=M.next,v=v.baseState;var z=O=null,oe=null,Ee=w;do{var ke=Ee.lane;if((ro&ke)===ke)oe!==null&&(oe=oe.next={lane:0,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null}),v=Ee.hasEagerState?Ee.eagerState:a(v,Ee.action);else{var at={lane:ke,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null};oe===null?(z=oe=at,O=v):oe=oe.next=at,Kt.lanes|=ke,oo|=ke}Ee=Ee.next}while(Ee!==null&&Ee!==w);oe===null?O=v:oe.next=z,Gi(v,l.memoizedState)||(Zn=!0),l.memoizedState=v,l.baseState=O,l.baseQueue=oe,p.lastRenderedState=v}if(a=p.interleaved,a!==null){M=a;do w=M.lane,Kt.lanes|=w,oo|=w,M=M.next;while(M!==a)}else M===null&&(p.lanes=0);return[l.memoizedState,p.dispatch]}function ec(a){var l=Vi(),p=l.queue;if(p===null)throw Error(o(311));p.lastRenderedReducer=a;var v=p.dispatch,M=p.pending,w=l.memoizedState;if(M!==null){p.pending=null;var O=M=M.next;do w=a(w,O.action),O=O.next;while(O!==M);Gi(w,l.memoizedState)||(Zn=!0),l.memoizedState=w,l.baseQueue===null&&(l.baseState=w),p.lastRenderedState=w}return[w,v]}function dg(){}function fg(a,l){var p=Kt,v=Vi(),M=l(),w=!Gi(v.memoizedState,M);if(w&&(v.memoizedState=M,Zn=!0),v=v.queue,ma(gg.bind(null,p,v,a),[a]),v.getSnapshot!==l||w||mn!==null&&mn.memoizedState.tag&1){if(p.flags|=2048,pa(9,mg.bind(null,p,v,M,l),void 0,null),sn===null)throw Error(o(349));ro&30||pg(p,l,M)}return M}function pg(a,l,p){a.flags|=16384,a={getSnapshot:l,value:p},l=Kt.updateQueue,l===null?(l={lastEffect:null,stores:null},Kt.updateQueue=l,l.stores=[a]):(p=l.stores,p===null?l.stores=[a]:p.push(a))}function mg(a,l,p,v){l.value=p,l.getSnapshot=v,vg(l)&&fi(a,1,-1)}function gg(a,l,p){return p(function(){vg(l)&&fi(a,1,-1)})}function vg(a){var l=a.getSnapshot;a=a.value;try{var p=l();return!Gi(a,p)}catch{return!0}}function nd(a){var l=tr();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:a},l.queue=a,a=a.dispatch=fM.bind(null,Kt,a),[l.memoizedState,a]}function pa(a,l,p,v){return a={tag:a,create:l,destroy:p,deps:v,next:null},l=Kt.updateQueue,l===null?(l={lastEffect:null,stores:null},Kt.updateQueue=l,l.lastEffect=a.next=a):(p=l.lastEffect,p===null?l.lastEffect=a.next=a:(v=p.next,p.next=a,a.next=v,l.lastEffect=a)),a}function _g(){return Vi().memoizedState}function tc(a,l,p,v){var M=tr();Kt.flags|=a,M.memoizedState=pa(1|l,p,void 0,v===void 0?null:v)}function nc(a,l,p,v){var M=Vi();v=v===void 0?null:v;var w=void 0;if(xn!==null){var O=xn.memoizedState;if(w=O.destroy,v!==null&&$h(v,O.deps)){M.memoizedState=pa(l,p,w,v);return}}Kt.flags|=a,M.memoizedState=pa(1|l,p,w,v)}function id(a,l){return tc(8390656,8,a,l)}function ma(a,l){return nc(2048,8,a,l)}function yg(a,l){return nc(4,2,a,l)}function xg(a,l){return nc(4,4,a,l)}function Ag(a,l){if(typeof l=="function")return a=a(),l(a),function(){l(null)};if(l!=null)return a=a(),l.current=a,function(){l.current=null}}function Mg(a,l,p){return p=p!=null?p.concat([a]):null,nc(4,4,Ag.bind(null,l,a),p)}function rd(){}function Sg(a,l){var p=Vi();l=l===void 0?null:l;var v=p.memoizedState;return v!==null&&l!==null&&$h(l,v[1])?v[0]:(p.memoizedState=[a,l],a)}function Eg(a,l){var p=Vi();l=l===void 0?null:l;var v=p.memoizedState;return v!==null&&l!==null&&$h(l,v[1])?v[0]:(a=a(),p.memoizedState=[a,l],a)}function hM(a,l){var p=Rt;Rt=p!==0&&4>p?p:4,a(!0);var v=di.transition;di.transition={};try{a(!1),l()}finally{Rt=p,di.transition=v}}function wg(){return Vi().memoizedState}function dM(a,l,p){var v=br(a);p={lane:v,action:p,hasEagerState:!1,eagerState:null,next:null},Cg(a)?Tg(l,p):(bg(a,l,p),p=Dn(),a=fi(a,v,p),a!==null&&Rg(a,l,v))}function fM(a,l,p){var v=br(a),M={lane:v,action:p,hasEagerState:!1,eagerState:null,next:null};if(Cg(a))Tg(l,M);else{bg(a,l,M);var w=a.alternate;if(a.lanes===0&&(w===null||w.lanes===0)&&(w=l.lastRenderedReducer,w!==null))try{var O=l.lastRenderedState,z=w(O,p);if(M.hasEagerState=!0,M.eagerState=z,Gi(z,O))return}catch{}finally{}p=Dn(),a=fi(a,v,p),a!==null&&Rg(a,l,v)}}function Cg(a){var l=a.alternate;return a===Kt||l!==null&&l===Kt}function Tg(a,l){da=jl=!0;var p=a.pending;p===null?l.next=l:(l.next=p.next,p.next=l),a.pending=l}function bg(a,l,p){sn!==null&&a.mode&1&&!(gt&2)?(a=l.interleaved,a===null?(p.next=p,ki===null?ki=[l]:ki.push(l)):(p.next=a.next,a.next=p),l.interleaved=p):(a=l.pending,a===null?p.next=p:(p.next=a.next,a.next=p),l.pending=p)}function Rg(a,l,p){if(p&4194240){var v=l.lanes;v&=a.pendingLanes,p|=v,l.lanes=p,Ph(a,p)}}var ic={readContext:li,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},pM={readContext:li,useCallback:function(a,l){return tr().memoizedState=[a,l===void 0?null:l],a},useContext:li,useEffect:id,useImperativeHandle:function(a,l,p){return p=p!=null?p.concat([a]):null,tc(4194308,4,Ag.bind(null,l,a),p)},useLayoutEffect:function(a,l){return tc(4194308,4,a,l)},useInsertionEffect:function(a,l){return tc(4,2,a,l)},useMemo:function(a,l){var p=tr();return l=l===void 0?null:l,a=a(),p.memoizedState=[a,l],a},useReducer:function(a,l,p){var v=tr();return l=p!==void 0?p(l):l,v.memoizedState=v.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},v.queue=a,a=a.dispatch=dM.bind(null,Kt,a),[v.memoizedState,a]},useRef:function(a){var l=tr();return a={current:a},l.memoizedState=a},useState:nd,useDebugValue:rd,useDeferredValue:function(a){var l=nd(a),p=l[0],v=l[1];return id(function(){var M=di.transition;di.transition={};try{v(a)}finally{di.transition=M}},[a]),p},useTransition:function(){var a=nd(!1),l=a[0];return a=hM.bind(null,a[1]),tr().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,p){var v=Kt,M=tr();if(Wt){if(p===void 0)throw Error(o(407));p=p()}else{if(p=l(),sn===null)throw Error(o(349));ro&30||pg(v,l,p)}M.memoizedState=p;var w={value:p,getSnapshot:l};return M.queue=w,id(gg.bind(null,v,w,a),[a]),v.flags|=2048,pa(9,mg.bind(null,v,w,p,l),void 0,null),p},useId:function(){var a=tr(),l=sn.identifierPrefix;if(Wt){var p=er,v=$i;p=(v&~(1<<32-Hn(v)-1)).toString(32)+p,l=":"+l+"R"+p,p=fa++,0<p&&(l+="H"+p.toString(32)),l+=":"}else p=uM++,l=":"+l+"r"+p.toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},mM={readContext:li,useCallback:Sg,useContext:li,useEffect:ma,useImperativeHandle:Mg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:Eg,useReducer:$l,useRef:_g,useState:function(){return $l(ns)},useDebugValue:rd,useDeferredValue:function(a){var l=$l(ns),p=l[0],v=l[1];return ma(function(){var M=di.transition;di.transition={};try{v(a)}finally{di.transition=M}},[a]),p},useTransition:function(){var a=$l(ns)[0],l=Vi().memoizedState;return[a,l]},useMutableSource:dg,useSyncExternalStore:fg,useId:wg,unstable_isNewReconciler:!1},gM={readContext:li,useCallback:Sg,useContext:li,useEffect:ma,useImperativeHandle:Mg,useInsertionEffect:yg,useLayoutEffect:xg,useMemo:Eg,useReducer:ec,useRef:_g,useState:function(){return ec(ns)},useDebugValue:rd,useDeferredValue:function(a){var l=ec(ns),p=l[0],v=l[1];return ma(function(){var M=di.transition;di.transition={};try{v(a)}finally{di.transition=M}},[a]),p},useTransition:function(){var a=ec(ns)[0],l=Vi().memoizedState;return[a,l]},useMutableSource:dg,useSyncExternalStore:fg,useId:wg,unstable_isNewReconciler:!1};function sd(a,l){try{var p="",v=l;do p+=cM(v),v=v.return;while(v);var M=p}catch(w){M=`
Error generating stack: `+w.message+`
`+w.stack}return{value:a,source:l,stack:M}}function od(a,l){try{console.error(l.value)}catch(p){setTimeout(function(){throw p})}}var vM=typeof WeakMap=="function"?WeakMap:Map;function Bg(a,l,p){p=ji(-1,p),p.tag=3,p.payload={element:null};var v=l.value;return p.callback=function(){yc||(yc=!0,Ed=v),od(a,l)},p}function Ig(a,l,p){p=ji(-1,p),p.tag=3;var v=a.type.getDerivedStateFromError;if(typeof v=="function"){var M=l.value;p.payload=function(){return v(M)},p.callback=function(){od(a,l)}}var w=a.stateNode;return w!==null&&typeof w.componentDidCatch=="function"&&(p.callback=function(){od(a,l),typeof v!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var O=l.stack;this.componentDidCatch(l.value,{componentStack:O!==null?O:""})}),p}function Pg(a,l,p){var v=a.pingCache;if(v===null){v=a.pingCache=new vM;var M=new Set;v.set(l,M)}else M=v.get(l),M===void 0&&(M=new Set,v.set(l,M));M.has(p)||(M.add(p),a=IM.bind(null,a,l,p),l.then(a,a))}function Lg(a){do{var l;if((l=a.tag===13)&&(l=a.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return a;a=a.return}while(a!==null);return null}function Dg(a,l,p,v,M){return a.mode&1?(a.flags|=65536,a.lanes=M,a):(a===l?a.flags|=65536:(a.flags|=128,p.flags|=131072,p.flags&=-52805,p.tag===1&&(p.alternate===null?p.tag=17:(l=ji(-1,1),l.tag=2,wr(p,l))),p.lanes|=1),a)}function Wi(a){a.flags|=4}function Fg(a,l){if(a!==null&&a.child===l.child)return!0;if(l.flags&16)return!1;for(a=l.child;a!==null;){if(a.flags&12854||a.subtreeFlags&12854)return!1;a=a.sibling}return!0}var ga,va,rc,sc;if(H)ga=function(a,l){for(var p=l.child;p!==null;){if(p.tag===5||p.tag===6)ye(a,p.stateNode);else if(p.tag!==4&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===l)break;for(;p.sibling===null;){if(p.return===null||p.return===l)return;p=p.return}p.sibling.return=p.return,p=p.sibling}},va=function(){},rc=function(a,l,p,v,M){if(a=a.memoizedProps,a!==v){var w=l.stateNode,O=zi(hi.current);p=ne(w,p,a,v,M,O),(l.updateQueue=p)&&Wi(l)}},sc=function(a,l,p,v){p!==v&&Wi(l)};else if(le){ga=function(a,l,p,v){for(var M=l.child;M!==null;){if(M.tag===5){var w=M.stateNode;p&&v&&(w=Jn(w,M.type,M.memoizedProps,M)),ye(a,w)}else if(M.tag===6)w=M.stateNode,p&&v&&(w=Kn(w,M.memoizedProps,M)),ye(a,w);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)w=M.child,w!==null&&(w.return=M),ga(a,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===l)break;for(;M.sibling===null;){if(M.return===null||M.return===l)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};var Ug=function(a,l,p,v){for(var M=l.child;M!==null;){if(M.tag===5){var w=M.stateNode;p&&v&&(w=Jn(w,M.type,M.memoizedProps,M)),zt(a,w)}else if(M.tag===6)w=M.stateNode,p&&v&&(w=Kn(w,M.memoizedProps,M)),zt(a,w);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)w=M.child,w!==null&&(w.return=M),Ug(a,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===l)break;for(;M.sibling===null;){if(M.return===null||M.return===l)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};va=function(a,l){var p=l.stateNode;if(!Fg(a,l)){a=p.containerInfo;var v=St(a);Ug(v,l,!1,!1),p.pendingChildren=v,Wi(l),nn(a,v)}},rc=function(a,l,p,v,M){var w=a.stateNode,O=a.memoizedProps;if((a=Fg(a,l))&&O===v)l.stateNode=w;else{var z=l.stateNode,oe=zi(hi.current),Ee=null;O!==v&&(Ee=ne(z,p,O,v,M,oe)),a&&Ee===null?l.stateNode=w:(w=st(w,Ee,p,O,v,l,a,z),De(w,p,v,M,oe)&&Wi(l),l.stateNode=w,a?Wi(l):ga(w,l,!1,!1))}},sc=function(a,l,p,v){p!==v?(a=zi(no.current),p=zi(hi.current),l.stateNode=we(v,a,p,l),Wi(l)):l.stateNode=a.stateNode}}else va=function(){},rc=function(){},sc=function(){};function _a(a,l){if(!Wt)switch(a.tailMode){case"hidden":l=a.tail;for(var p=null;l!==null;)l.alternate!==null&&(p=l),l=l.sibling;p===null?a.tail=null:p.sibling=null;break;case"collapsed":p=a.tail;for(var v=null;p!==null;)p.alternate!==null&&(v=p),p=p.sibling;v===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:v.sibling=null}}function Mn(a){var l=a.alternate!==null&&a.alternate.child===a.child,p=0,v=0;if(l)for(var M=a.child;M!==null;)p|=M.lanes|M.childLanes,v|=M.subtreeFlags&14680064,v|=M.flags&14680064,M.return=a,M=M.sibling;else for(M=a.child;M!==null;)p|=M.lanes|M.childLanes,v|=M.subtreeFlags,v|=M.flags,M.return=a,M=M.sibling;return a.subtreeFlags|=v,a.childLanes=p,l}function _M(a,l,p){var v=l.pendingProps;switch(Xh(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(l),null;case 1:return Tt(l.type)&&Yn(),Mn(l),null;case 3:return v=l.stateNode,io(),Re(cn),Re(Nt),jh(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(a===null||a.child===null)&&(la(l)?Wi(l):a===null||a.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Ei!==null&&(Td(Ei),Ei=null))),va(a,l),Mn(l),null;case 5:Qh(l),p=zi(no.current);var M=l.type;if(a!==null&&l.stateNode!=null)rc(a,l,M,v,p),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(o(166));return Mn(l),null}if(a=zi(hi.current),la(l)){if(!ae)throw Error(o(175));a=bh(l.stateNode,l.type,l.memoizedProps,p,a,l,!aa),l.updateQueue=a,a!==null&&Wi(l)}else{var w=re(M,v,p,a,l);ga(w,l,!1,!1),l.stateNode=w,De(w,M,v,p,a)&&Wi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Mn(l),null;case 6:if(a&&l.stateNode!=null)sc(a,l,a.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(o(166));if(a=zi(no.current),p=zi(hi.current),la(l)){if(!ae)throw Error(o(176));if(a=l.stateNode,v=l.memoizedProps,(p=Rh(a,v,l,!aa))&&(M=qn,M!==null))switch(w=(M.mode&1)!==0,M.tag){case 3:ze(M.stateNode.containerInfo,a,v,w);break;case 5:Je(M.type,M.memoizedProps,M.stateNode,a,v,w)}p&&Wi(l)}else l.stateNode=we(v,a,p,l)}return Mn(l),null;case 13:if(Re(Xt),v=l.memoizedState,Wt&&Qn!==null&&l.mode&1&&!(l.flags&128)){for(a=Qn;a;)a=Ui(a);return eo(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=la(l),a===null){if(!v)throw Error(o(318));if(!ae)throw Error(o(344));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));P(a,l)}else eo(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return Mn(l),null}return Ei!==null&&(Td(Ei),Ei=null),l.flags&128?(l.lanes=p,l):(v=v!==null,p=!1,a===null?la(l):p=a.memoizedState!==null,v&&!p&&(l.child.flags|=8192,l.mode&1&&(a===null||Xt.current&1?un===0&&(un=3):Rd())),l.updateQueue!==null&&(l.flags|=4),Mn(l),null);case 4:return io(),va(a,l),a===null&&ve(l.stateNode.containerInfo),Mn(l),null;case 10:return Gh(l.type._context),Mn(l),null;case 17:return Tt(l.type)&&Yn(),Mn(l),null;case 19:if(Re(Xt),M=l.memoizedState,M===null)return Mn(l),null;if(v=(l.flags&128)!==0,w=M.rendering,w===null)if(v)_a(M,!1);else{if(un!==0||a!==null&&a.flags&128)for(a=l.child;a!==null;){if(w=Ql(a),w!==null){for(l.flags|=128,_a(M,!1),a=w.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),l.subtreeFlags=0,a=p,v=l.child;v!==null;)p=v,M=a,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=M,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,M=w.dependencies,p.dependencies=M===null?null:{lanes:M.lanes,firstContext:M.firstContext}),v=v.sibling;return ut(Xt,Xt.current&1|2),l.child}a=a.sibling}M.tail!==null&&pn()>Sd&&(l.flags|=128,v=!0,_a(M,!1),l.lanes=4194304)}else{if(!v)if(a=Ql(w),a!==null){if(l.flags|=128,v=!0,a=a.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),_a(M,!0),M.tail===null&&M.tailMode==="hidden"&&!w.alternate&&!Wt)return Mn(l),null}else 2*pn()-M.renderingStartTime>Sd&&p!==1073741824&&(l.flags|=128,v=!0,_a(M,!1),l.lanes=4194304);M.isBackwards?(w.sibling=l.child,l.child=w):(a=M.last,a!==null?a.sibling=w:l.child=w,M.last=w)}return M.tail!==null?(l=M.tail,M.rendering=l,M.tail=l.sibling,M.renderingStartTime=pn(),l.sibling=null,a=Xt.current,ut(Xt,v?a&1|2:a&1),l):(Mn(l),null);case 22:case 23:return bd(),v=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?jn&1073741824&&(Mn(l),H&&l.subtreeFlags&6&&(l.flags|=8192)):Mn(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}var yM=c.ReactCurrentOwner,Zn=!1;function Ln(a,l,p,v){l.child=a===null?ug(l,null,p,v):to(l,a.child,p,v)}function Ng(a,l,p,v,M){p=p.render;var w=l.ref;return Zs(l,M),v=ed(a,l,p,v,w,M),p=td(),a!==null&&!Zn?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~M,nr(a,l,M)):(Wt&&p&&Wh(l),l.flags|=1,Ln(a,l,v,M),l.child)}function Og(a,l,p,v,M){if(a===null){var w=p.type;return typeof w=="function"&&!Bd(w)&&w.defaultProps===void 0&&p.compare===null&&p.defaultProps===void 0?(l.tag=15,l.type=w,Gg(a,l,w,v,M)):(a=Cc(p.type,null,v,l,l.mode,M),a.ref=l.ref,a.return=l,l.child=a)}if(w=a.child,!(a.lanes&M)){var O=w.memoizedProps;if(p=p.compare,p=p!==null?p:kl,p(O,v)&&a.ref===l.ref)return nr(a,l,M)}return l.flags|=1,a=Br(w,v),a.ref=l.ref,a.return=l,l.child=a}function Gg(a,l,p,v,M){if(a!==null&&kl(a.memoizedProps,v)&&a.ref===l.ref)if(Zn=!1,(a.lanes&M)!==0)a.flags&131072&&(Zn=!0);else return l.lanes=a.lanes,nr(a,l,M);return ad(a,l,p,v,M)}function Hg(a,l,p){var v=l.pendingProps,M=v.children,w=a!==null?a.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},ut(so,jn),jn|=p;else if(p&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=w!==null?w.baseLanes:p,ut(so,jn),jn|=v;else return a=w!==null?w.baseLanes|p:p,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null},l.updateQueue=null,ut(so,jn),jn|=a,null;else w!==null?(v=w.baseLanes|p,l.memoizedState=null):v=p,ut(so,jn),jn|=v;return Ln(a,l,M,p),l.child}function kg(a,l){var p=l.ref;(a===null&&p!==null||a!==null&&a.ref!==p)&&(l.flags|=512,l.flags|=2097152)}function ad(a,l,p,v,M){var w=Tt(p)?In:Nt.current;return w=Ni(l,w),Zs(l,M),p=ed(a,l,p,v,w,M),v=td(),a!==null&&!Zn?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~M,nr(a,l,M)):(Wt&&v&&Wh(l),l.flags|=1,Ln(a,l,p,M),l.child)}function zg(a,l,p,v,M){if(Tt(p)){var w=!0;Sr(l)}else w=!1;if(Zs(l,M),l.stateNode===null)a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),ng(l,p,v),Vh(l,p,v,M),v=!0;else if(a===null){var O=l.stateNode,z=l.memoizedProps;O.props=z;var oe=O.context,Ee=p.contextType;typeof Ee=="object"&&Ee!==null?Ee=li(Ee):(Ee=Tt(p)?In:Nt.current,Ee=Ni(l,Ee));var ke=p.getDerivedStateFromProps,at=typeof ke=="function"||typeof O.getSnapshotBeforeUpdate=="function";at||typeof O.UNSAFE_componentWillReceiveProps!="function"&&typeof O.componentWillReceiveProps!="function"||(z!==v||oe!==Ee)&&ig(l,O,v,Ee),Er=!1;var $e=l.memoizedState;O.state=$e,Xl(l,v,O,M),oe=l.memoizedState,z!==v||$e!==oe||cn.current||Er?(typeof ke=="function"&&(zh(l,p,ke,v),oe=l.memoizedState),(z=Er||tg(l,p,z,v,$e,oe,Ee))?(at||typeof O.UNSAFE_componentWillMount!="function"&&typeof O.componentWillMount!="function"||(typeof O.componentWillMount=="function"&&O.componentWillMount(),typeof O.UNSAFE_componentWillMount=="function"&&O.UNSAFE_componentWillMount()),typeof O.componentDidMount=="function"&&(l.flags|=4194308)):(typeof O.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=oe),O.props=v,O.state=oe,O.context=Ee,v=z):(typeof O.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{O=l.stateNode,Zm(a,l),z=l.memoizedProps,Ee=l.type===l.elementType?z:Si(l.type,z),O.props=Ee,at=l.pendingProps,$e=O.context,oe=p.contextType,typeof oe=="object"&&oe!==null?oe=li(oe):(oe=Tt(p)?In:Nt.current,oe=Ni(l,oe));var Ft=p.getDerivedStateFromProps;(ke=typeof Ft=="function"||typeof O.getSnapshotBeforeUpdate=="function")||typeof O.UNSAFE_componentWillReceiveProps!="function"&&typeof O.componentWillReceiveProps!="function"||(z!==at||$e!==oe)&&ig(l,O,v,oe),Er=!1,$e=l.memoizedState,O.state=$e,Xl(l,v,O,M);var qe=l.memoizedState;z!==at||$e!==qe||cn.current||Er?(typeof Ft=="function"&&(zh(l,p,Ft,v),qe=l.memoizedState),(Ee=Er||tg(l,p,Ee,v,$e,qe,oe)||!1)?(ke||typeof O.UNSAFE_componentWillUpdate!="function"&&typeof O.componentWillUpdate!="function"||(typeof O.componentWillUpdate=="function"&&O.componentWillUpdate(v,qe,oe),typeof O.UNSAFE_componentWillUpdate=="function"&&O.UNSAFE_componentWillUpdate(v,qe,oe)),typeof O.componentDidUpdate=="function"&&(l.flags|=4),typeof O.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof O.componentDidUpdate!="function"||z===a.memoizedProps&&$e===a.memoizedState||(l.flags|=4),typeof O.getSnapshotBeforeUpdate!="function"||z===a.memoizedProps&&$e===a.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=qe),O.props=v,O.state=qe,O.context=oe,v=Ee):(typeof O.componentDidUpdate!="function"||z===a.memoizedProps&&$e===a.memoizedState||(l.flags|=4),typeof O.getSnapshotBeforeUpdate!="function"||z===a.memoizedProps&&$e===a.memoizedState||(l.flags|=1024),v=!1)}return ld(a,l,p,v,w,M)}function ld(a,l,p,v,M,w){kg(a,l);var O=(l.flags&128)!==0;if(!v&&!O)return M&&Fl(l,p,!1),nr(a,l,w);v=l.stateNode,yM.current=l;var z=O&&typeof p.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,a!==null&&O?(l.child=to(l,a.child,null,w),l.child=to(l,null,z,w)):Ln(a,l,z,w),l.memoizedState=v.state,M&&Fl(l,p,!0),l.child}function Vg(a){var l=a.stateNode;l.pendingContext?qs(a,l.pendingContext,l.pendingContext!==l.context):l.context&&qs(a,l.context,!1),qh(a,l.containerInfo)}function Wg(a,l,p,v,M){return eo(),Yh(M),l.flags|=256,Ln(a,l,p,v),l.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(a){return{baseLanes:a,cachePool:null}}function Xg(a,l,p){var v=l.pendingProps,M=Xt.current,w=!1,O=(l.flags&128)!==0,z;if((z=O)||(z=a!==null&&a.memoizedState===null?!1:(M&2)!==0),z?(w=!0,l.flags&=-129):(a===null||a.memoizedState!==null)&&(M|=1),ut(Xt,M&1),a===null)return Kh(l),a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(l.mode&1?Mr(a)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(M=v.children,a=v.fallback,w?(v=l.mode,w=l.child,M={mode:"hidden",children:M},!(v&1)&&w!==null?(w.childLanes=0,w.pendingProps=M):w=Tc(M,v,0,null),a=ls(a,v,p,null),w.return=l,a.return=l,w.sibling=a,l.child=w,l.child.memoizedState=ac(p),l.memoizedState=oc,a):cd(l,M));if(M=a.memoizedState,M!==null){if(z=M.dehydrated,z!==null){if(O)return l.flags&256?(l.flags&=-257,lc(a,l,p,Error(o(422)))):l.memoizedState!==null?(l.child=a.child,l.flags|=128,null):(w=v.fallback,M=l.mode,v=Tc({mode:"visible",children:v.children},M,0,null),w=ls(w,M,p,null),w.flags|=2,v.return=l,w.return=l,v.sibling=w,l.child=v,l.mode&1&&to(l,a.child,null,p),l.child.memoizedState=ac(p),l.memoizedState=oc,w);if(!(l.mode&1))l=lc(a,l,p,null);else if(Mr(z))l=lc(a,l,p,Error(o(419)));else if(v=(p&a.childLanes)!==0,Zn||v){if(v=sn,v!==null){switch(p&-p){case 4:w=2;break;case 16:w=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:w=32;break;case 536870912:w=268435456;break;default:w=0}v=w&(v.suspendedLanes|p)?0:w,v!==0&&v!==M.retryLane&&(M.retryLane=v,fi(a,v,-1))}Rd(),l=lc(a,l,p,Error(o(421)))}else ra(z)?(l.flags|=128,l.child=a.child,l=PM.bind(null,a),Pl(z,l),l=null):(p=M.treeContext,ae&&(Qn=Th(z),qn=l,Wt=!0,Ei=null,aa=!1,p!==null&&(ci[ui++]=$i,ci[ui++]=er,ci[ui++]=es,$i=p.id,er=p.overflow,es=l)),l=cd(l,l.pendingProps.children),l.flags|=4096);return l}return w?(v=Kg(a,l,v.children,v.fallback,p),w=l.child,M=a.child.memoizedState,w.memoizedState=M===null?ac(p):{baseLanes:M.baseLanes|p,cachePool:null},w.childLanes=a.childLanes&~p,l.memoizedState=oc,v):(p=Jg(a,l,v.children,p),l.memoizedState=null,p)}return w?(v=Kg(a,l,v.children,v.fallback,p),w=l.child,M=a.child.memoizedState,w.memoizedState=M===null?ac(p):{baseLanes:M.baseLanes|p,cachePool:null},w.childLanes=a.childLanes&~p,l.memoizedState=oc,v):(p=Jg(a,l,v.children,p),l.memoizedState=null,p)}function cd(a,l){return l=Tc({mode:"visible",children:l},a.mode,0,null),l.return=a,a.child=l}function Jg(a,l,p,v){var M=a.child;return a=M.sibling,p=Br(M,{mode:"visible",children:p}),!(l.mode&1)&&(p.lanes=v),p.return=l,p.sibling=null,a!==null&&(v=l.deletions,v===null?(l.deletions=[a],l.flags|=16):v.push(a)),l.child=p}function Kg(a,l,p,v,M){var w=l.mode;a=a.child;var O=a.sibling,z={mode:"hidden",children:p};return!(w&1)&&l.child!==a?(p=l.child,p.childLanes=0,p.pendingProps=z,l.deletions=null):(p=Br(a,z),p.subtreeFlags=a.subtreeFlags&14680064),O!==null?v=Br(O,v):(v=ls(v,w,M,null),v.flags|=2),v.return=l,p.return=l,p.sibling=v,l.child=p,v}function lc(a,l,p,v){return v!==null&&Yh(v),to(l,a.child,null,p),a=cd(l,l.pendingProps.children),a.flags|=2,l.memoizedState=null,a}function Yg(a,l,p){a.lanes|=l;var v=a.alternate;v!==null&&(v.lanes|=l),Hh(a.return,l,p)}function ud(a,l,p,v,M){var w=a.memoizedState;w===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:p,tailMode:M}:(w.isBackwards=l,w.rendering=null,w.renderingStartTime=0,w.last=v,w.tail=p,w.tailMode=M)}function qg(a,l,p){var v=l.pendingProps,M=v.revealOrder,w=v.tail;if(Ln(a,l,v.children,p),v=Xt.current,v&2)v=v&1|2,l.flags|=128;else{if(a!==null&&a.flags&128)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Yg(a,p,l);else if(a.tag===19)Yg(a,p,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}v&=1}if(ut(Xt,v),!(l.mode&1))l.memoizedState=null;else switch(M){case"forwards":for(p=l.child,M=null;p!==null;)a=p.alternate,a!==null&&Ql(a)===null&&(M=p),p=p.sibling;p=M,p===null?(M=l.child,l.child=null):(M=p.sibling,p.sibling=null),ud(l,!1,M,p,w);break;case"backwards":for(p=null,M=l.child,l.child=null;M!==null;){if(a=M.alternate,a!==null&&Ql(a)===null){l.child=M;break}a=M.sibling,M.sibling=p,p=M,M=a}ud(l,!0,p,null,w);break;case"together":ud(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function nr(a,l,p){if(a!==null&&(l.dependencies=a.dependencies),oo|=l.lanes,!(p&l.childLanes))return null;if(a!==null&&l.child!==a.child)throw Error(o(153));if(l.child!==null){for(a=l.child,p=Br(a,a.pendingProps),l.child=p,p.return=l;a.sibling!==null;)a=a.sibling,p=p.sibling=Br(a,a.pendingProps),p.return=l;p.sibling=null}return l.child}function xM(a,l,p){switch(l.tag){case 3:Vg(l),eo();break;case 5:hg(l);break;case 1:Tt(l.type)&&Sr(l);break;case 4:qh(l,l.stateNode.containerInfo);break;case 10:Qm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(ut(Xt,Xt.current&1),l.flags|=128,null):p&l.child.childLanes?Xg(a,l,p):(ut(Xt,Xt.current&1),a=nr(a,l,p),a!==null?a.sibling:null);ut(Xt,Xt.current&1);break;case 19:if(v=(p&l.childLanes)!==0,a.flags&128){if(v)return qg(a,l,p);l.flags|=128}var M=l.memoizedState;if(M!==null&&(M.rendering=null,M.tail=null,M.lastEffect=null),ut(Xt,Xt.current),v)break;return null;case 22:case 23:return l.lanes=0,Hg(a,l,p)}return nr(a,l,p)}function AM(a,l){switch(Xh(l),l.tag){case 1:return Tt(l.type)&&Yn(),a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 3:return io(),Re(cn),Re(Nt),jh(),a=l.flags,a&65536&&!(a&128)?(l.flags=a&-65537|128,l):null;case 5:return Qh(l),null;case 13:if(Re(Xt),a=l.memoizedState,a!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(o(340));eo()}return a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 19:return Re(Xt),null;case 4:return io(),null;case 10:return Gh(l.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var cc=!1,is=!1,MM=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function uc(a,l){var p=a.ref;if(p!==null)if(typeof p=="function")try{p(null)}catch(v){Vn(a,l,v)}else p.current=null}function hd(a,l,p){try{p()}catch(v){Vn(a,l,v)}}var Qg=!1;function SM(a,l){for(Y(a.containerInfo),Ue=l;Ue!==null;)if(a=Ue,l=a.child,(a.subtreeFlags&1028)!==0&&l!==null)l.return=a,Ue=l;else for(;Ue!==null;){a=Ue;try{var p=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,M=p.memoizedState,w=a.stateNode,O=w.getSnapshotBeforeUpdate(a.elementType===a.type?v:Si(a.type,v),M);w.__reactInternalSnapshotBeforeUpdate=O}break;case 3:H&&be(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(z){Vn(a,a.return,z)}if(l=a.sibling,l!==null){l.return=a.return,Ue=l;break}Ue=a.return}return p=Qg,Qg=!1,p}function rs(a,l,p){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var M=v=v.next;do{if((M.tag&a)===a){var w=M.destroy;M.destroy=void 0,w!==void 0&&hd(l,p,w)}M=M.next}while(M!==v)}}function ya(a,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var p=l=l.next;do{if((p.tag&a)===a){var v=p.create;p.destroy=v()}p=p.next}while(p!==l)}}function dd(a){var l=a.ref;if(l!==null){var p=a.stateNode;switch(a.tag){case 5:a=Q(p);break;default:a=p}typeof l=="function"?l(a):l.current=a}}function Zg(a,l,p){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(Gl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(a=l.updateQueue,a!==null&&(a=a.lastEffect,a!==null)){var v=a=a.next;do{var M=v,w=M.destroy;M=M.tag,w!==void 0&&(M&2||M&4)&&hd(l,p,w),v=v.next}while(v!==a)}break;case 1:if(uc(l,p),a=l.stateNode,typeof a.componentWillUnmount=="function")try{a.props=l.memoizedProps,a.state=l.memoizedState,a.componentWillUnmount()}catch(O){Vn(l,p,O)}break;case 5:uc(l,p);break;case 4:H?i0(a,l,p):le&&le&&(l=l.stateNode.containerInfo,p=St(l),Pt(l,p))}}function jg(a,l,p){for(var v=l;;)if(Zg(a,v,p),v.child===null||H&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function $g(a){var l=a.alternate;l!==null&&(a.alternate=null,$g(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode,l!==null&&Be(l)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function e0(a){return a.tag===5||a.tag===3||a.tag===4}function t0(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||e0(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function n0(a){if(H){e:{for(var l=a.return;l!==null;){if(e0(l))break e;l=l.return}throw Error(o(160))}var p=l;switch(p.tag){case 5:l=p.stateNode,p.flags&32&&(kt(l),p.flags&=-33),p=t0(a),pd(a,p,l);break;case 3:case 4:l=p.stateNode.containerInfo,p=t0(a),fd(a,p,l);break;default:throw Error(o(161))}}}function fd(a,l,p){var v=a.tag;if(v===5||v===6)a=a.stateNode,l?Ne(p,a,l):ot(p,a);else if(v!==4&&(a=a.child,a!==null))for(fd(a,l,p),a=a.sibling;a!==null;)fd(a,l,p),a=a.sibling}function pd(a,l,p){var v=a.tag;if(v===5||v===6)a=a.stateNode,l?rt(p,a,l):Pe(p,a);else if(v!==4&&(a=a.child,a!==null))for(pd(a,l,p),a=a.sibling;a!==null;)pd(a,l,p),a=a.sibling}function i0(a,l,p){for(var v=l,M=!1,w,O;;){if(!M){M=v.return;e:for(;;){if(M===null)throw Error(o(160));switch(w=M.stateNode,M.tag){case 5:O=!1;break e;case 3:w=w.containerInfo,O=!0;break e;case 4:w=w.containerInfo,O=!0;break e}M=M.return}M=!0}if(v.tag===5||v.tag===6)jg(a,v,p),O?yt(w,v.stateNode):ft(w,v.stateNode);else if(v.tag===18)O?Te(w,v.stateNode):q(w,v.stateNode);else if(v.tag===4){if(v.child!==null){w=v.stateNode.containerInfo,O=!0,v.child.return=v,v=v.child;continue}}else if(Zg(a,v,p),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(M=!1)}v.sibling.return=v.return,v=v.sibling}}function md(a,l){if(H){switch(l.tag){case 0:case 11:case 14:case 15:rs(3,l,l.return),ya(3,l),rs(5,l,l.return);return;case 1:return;case 5:var p=l.stateNode;if(p!=null){var v=l.memoizedProps;a=a!==null?a.memoizedProps:v;var M=l.type,w=l.updateQueue;l.updateQueue=null,w!==null&&vt(p,w,M,a,v,l)}return;case 6:if(l.stateNode===null)throw Error(o(162));p=l.memoizedProps,Se(l.stateNode,a!==null?a.memoizedProps:p,p);return;case 3:ae&&a!==null&&a.memoizedState.isDehydrated&&$(l.stateNode.containerInfo);return;case 12:return;case 13:hc(l);return;case 19:hc(l);return;case 17:return}throw Error(o(163))}switch(l.tag){case 0:case 11:case 14:case 15:rs(3,l,l.return),ya(3,l),rs(5,l,l.return);return;case 12:return;case 13:hc(l);return;case 19:hc(l);return;case 3:ae&&a!==null&&a.memoizedState.isDehydrated&&$(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(le){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,Pt(l.containerInfo,l.pendingChildren);break e}throw Error(o(163))}}function hc(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var p=a.stateNode;p===null&&(p=a.stateNode=new MM),l.forEach(function(v){var M=LM.bind(null,a,v);p.has(v)||(p.add(v),v.then(M,M))})}}function EM(a,l){for(Ue=l;Ue!==null;){l=Ue;var p=l.deletions;if(p!==null)for(var v=0;v<p.length;v++){var M=p[v];try{var w=a;H?i0(w,M,l):jg(w,M,l);var O=M.alternate;O!==null&&(O.return=null),M.return=null}catch(Ye){Vn(M,l,Ye)}}if(p=l.child,l.subtreeFlags&12854&&p!==null)p.return=l,Ue=p;else for(;Ue!==null;){l=Ue;try{var z=l.flags;if(z&32&&H&&kt(l.stateNode),z&512){var oe=l.alternate;if(oe!==null){var Ee=oe.ref;Ee!==null&&(typeof Ee=="function"?Ee(null):Ee.current=null)}}if(z&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var ke=l.alternate;(ke===null||ke.memoizedState===null)&&(Md=pn())}break;case 22:var at=l.memoizedState!==null,$e=l.alternate,Ft=$e!==null&&$e.memoizedState!==null;if(p=l,H){e:if(v=p,M=at,w=null,H)for(var qe=v;;){if(qe.tag===5){if(w===null){w=qe;var Sn=qe.stateNode;M?k(Sn):ue(qe.stateNode,qe.memoizedProps)}}else if(qe.tag===6){if(w===null){var mi=qe.stateNode;M?Ge(mi):pe(mi,qe.memoizedProps)}}else if((qe.tag!==22&&qe.tag!==23||qe.memoizedState===null||qe===v)&&qe.child!==null){qe.child.return=qe,qe=qe.child;continue}if(qe===v)break;for(;qe.sibling===null;){if(qe.return===null||qe.return===v)break e;w===qe&&(w=null),qe=qe.return}w===qe&&(w=null),qe.sibling.return=qe.return,qe=qe.sibling}}if(at&&!Ft&&p.mode&1){Ue=p;for(var j=p.child;j!==null;){for(p=Ue=j;Ue!==null;){v=Ue;var W=v.child;switch(v.tag){case 0:case 11:case 14:case 15:rs(4,v,v.return);break;case 1:uc(v,v.return);var se=v.stateNode;if(typeof se.componentWillUnmount=="function"){var Oe=v.return;try{se.props=v.memoizedProps,se.state=v.memoizedState,se.componentWillUnmount()}catch(Ye){Vn(v,Oe,Ye)}}break;case 5:uc(v,v.return);break;case 22:if(v.memoizedState!==null){o0(p);continue}}W!==null?(W.return=v,Ue=W):o0(p)}j=j.sibling}}}switch(z&4102){case 2:n0(l),l.flags&=-3;break;case 6:n0(l),l.flags&=-3,md(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,md(l.alternate,l);break;case 4:md(l.alternate,l)}}catch(Ye){Vn(l,l.return,Ye)}if(p=l.sibling,p!==null){p.return=l.return,Ue=p;break}Ue=l.return}}}function wM(a,l,p){Ue=a,r0(a)}function r0(a,l,p){for(var v=(a.mode&1)!==0;Ue!==null;){var M=Ue,w=M.child;if(M.tag===22&&v){var O=M.memoizedState!==null||cc;if(!O){var z=M.alternate,oe=z!==null&&z.memoizedState!==null||is;z=cc;var Ee=is;if(cc=O,(is=oe)&&!Ee)for(Ue=M;Ue!==null;)O=Ue,oe=O.child,O.tag===22&&O.memoizedState!==null?a0(M):oe!==null?(oe.return=O,Ue=oe):a0(M);for(;w!==null;)Ue=w,r0(w),w=w.sibling;Ue=M,cc=z,is=Ee}s0(a)}else M.subtreeFlags&8772&&w!==null?(w.return=M,Ue=w):s0(a)}}function s0(a){for(;Ue!==null;){var l=Ue;if(l.flags&8772){var p=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:is||ya(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!is)if(p===null)v.componentDidMount();else{var M=l.elementType===l.type?p.memoizedProps:Si(l.type,p.memoizedProps);v.componentDidUpdate(M,p.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var w=l.updateQueue;w!==null&&$m(l,w,v);break;case 3:var O=l.updateQueue;if(O!==null){if(p=null,l.child!==null)switch(l.child.tag){case 5:p=Q(l.child.stateNode);break;case 1:p=l.child.stateNode}$m(l,O,p)}break;case 5:var z=l.stateNode;p===null&&l.flags&4&&We(z,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(ae&&l.memoizedState===null){var oe=l.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var ke=Ee.dehydrated;ke!==null&&te(ke)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(o(163))}is||l.flags&512&&dd(l)}catch(at){Vn(l,l.return,at)}}if(l===a){Ue=null;break}if(p=l.sibling,p!==null){p.return=l.return,Ue=p;break}Ue=l.return}}function o0(a){for(;Ue!==null;){var l=Ue;if(l===a){Ue=null;break}var p=l.sibling;if(p!==null){p.return=l.return,Ue=p;break}Ue=l.return}}function a0(a){for(;Ue!==null;){var l=Ue;try{switch(l.tag){case 0:case 11:case 15:var p=l.return;try{ya(4,l)}catch(oe){Vn(l,p,oe)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var M=l.return;try{v.componentDidMount()}catch(oe){Vn(l,M,oe)}}var w=l.return;try{dd(l)}catch(oe){Vn(l,w,oe)}break;case 5:var O=l.return;try{dd(l)}catch(oe){Vn(l,O,oe)}}}catch(oe){Vn(l,l.return,oe)}if(l===a){Ue=null;break}var z=l.sibling;if(z!==null){z.return=l.return,Ue=z;break}Ue=l.return}}var dc=0,fc=1,pc=2,mc=3,gc=4;if(typeof Symbol=="function"&&Symbol.for){var xa=Symbol.for;dc=xa("selector.component"),fc=xa("selector.has_pseudo_class"),pc=xa("selector.role"),mc=xa("selector.test_id"),gc=xa("selector.text")}function gd(a){var l=Ae(a);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(o(364));return l}if(a=B(a),a===null)throw Error(o(362));return a.stateNode.current}function vd(a,l){switch(l.$$typeof){case dc:if(a.type===l.value)return!0;break;case fc:e:{l=l.value,a=[a,0];for(var p=0;p<a.length;){var v=a[p++],M=a[p++],w=l[M];if(v.tag!==5||!de(v)){for(;w!=null&&vd(v,w);)M++,w=l[M];if(M===l.length){l=!0;break e}else for(v=v.child;v!==null;)a.push(v,M),v=v.sibling}}l=!1}return l;case pc:if(a.tag===5&&_e(a.stateNode,l.value))return!0;break;case gc:if((a.tag===5||a.tag===6)&&(a=me(a),a!==null&&0<=a.indexOf(l.value)))return!0;break;case mc:if(a.tag===5&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function _d(a){switch(a.$$typeof){case dc:return"<"+(I(a.value)||"Unknown")+">";case fc:return":has("+(_d(a)||"")+")";case pc:return'[role="'+a.value+'"]';case gc:return'"'+a.value+'"';case mc:return'[data-testname="'+a.value+'"]';default:throw Error(o(365))}}function l0(a,l){var p=[];a=[a,0];for(var v=0;v<a.length;){var M=a[v++],w=a[v++],O=l[w];if(M.tag!==5||!de(M)){for(;O!=null&&vd(M,O);)w++,O=l[w];if(w===l.length)p.push(M);else for(M=M.child;M!==null;)a.push(M,w),M=M.sibling}}return p}function yd(a,l){if(!G)throw Error(o(363));a=gd(a),a=l0(a,l),l=[],a=Array.from(a);for(var p=0;p<a.length;){var v=a[p++];if(v.tag===5)de(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)a.push(v),v=v.sibling}return l}var CM=Math.ceil,vc=c.ReactCurrentDispatcher,xd=c.ReactCurrentOwner,jt=c.ReactCurrentBatchConfig,gt=0,sn=null,on=null,_n=0,jn=0,so=_t(0),un=0,Aa=null,oo=0,_c=0,Ad=0,Ma=null,kn=null,Md=0,Sd=1/0;function ao(){Sd=pn()+500}var yc=!1,Ed=null,Cr=null,xc=!1,Tr=null,Ac=0,Sa=0,wd=null,Mc=-1,Sc=0;function Dn(){return gt&6?pn():Mc!==-1?Mc:Mc=pn()}function br(a){return a.mode&1?gt&2&&_n!==0?_n&-_n:lM.transition!==null?(Sc===0&&(a=Ul,Ul<<=1,!(Ul&4194240)&&(Ul=64),Sc=a),Sc):(a=Rt,a!==0?a:Me()):1}function fi(a,l,p){if(50<Sa)throw Sa=0,wd=null,Error(o(185));var v=Ec(a,l);return v===null?null:(oa(v,l,p),(!(gt&2)||v!==sn)&&(v===sn&&(!(gt&2)&&(_c|=l),un===4&&Rr(v,_n)),zn(v,p),l===1&&gt===0&&!(a.mode&1)&&(ao(),Hl&&Hi())),v)}function Ec(a,l){a.lanes|=l;var p=a.alternate;for(p!==null&&(p.lanes|=l),p=a,a=a.return;a!==null;)a.childLanes|=l,p=a.alternate,p!==null&&(p.childLanes|=l),p=a,a=a.return;return p.tag===3?p.stateNode:null}function zn(a,l){var p=a.callbackNode;$A(a,l);var v=Ol(a,a===sn?_n:0);if(v===0)p!==null&&Ym(p),a.callbackNode=null,a.callbackPriority=0;else if(l=v&-v,a.callbackPriority!==l){if(p!=null&&Ym(p),l===1)a.tag===0?aM(u0.bind(null,a)):qm(u0.bind(null,a)),Fe?nt(function(){gt===0&&Hi()}):Lh(Dh,Hi),p=null;else{switch(Km(v)){case 1:p=Dh;break;case 4:p=iM;break;case 16:p=Fh;break;case 536870912:p=rM;break;default:p=Fh}p=y0(p,c0.bind(null,a))}a.callbackPriority=l,a.callbackNode=p}}function c0(a,l){if(Mc=-1,Sc=0,gt&6)throw Error(o(327));var p=a.callbackNode;if(as()&&a.callbackNode!==p)return null;var v=Ol(a,a===sn?_n:0);if(v===0)return null;if(v&30||v&a.expiredLanes||l)l=wc(a,v);else{l=v;var M=gt;gt|=2;var w=f0();(sn!==a||_n!==l)&&(ao(),ss(a,l));do try{RM();break}catch(z){d0(a,z)}while(!0);Oh(),vc.current=w,gt=M,on!==null?l=0:(sn=null,_n=0,l=un)}if(l!==0){if(l===2&&(M=Bh(a),M!==0&&(v=M,l=Cd(a,M))),l===1)throw p=Aa,ss(a,0),Rr(a,v),zn(a,pn()),p;if(l===6)Rr(a,v);else{if(M=a.current.alternate,!(v&30)&&!TM(M)&&(l=wc(a,v),l===2&&(w=Bh(a),w!==0&&(v=w,l=Cd(a,w))),l===1))throw p=Aa,ss(a,0),Rr(a,v),zn(a,pn()),p;switch(a.finishedWork=M,a.finishedLanes=v,l){case 0:case 1:throw Error(o(345));case 2:os(a,kn);break;case 3:if(Rr(a,v),(v&130023424)===v&&(l=Md+500-pn(),10<l)){if(Ol(a,0)!==0)break;if(M=a.suspendedLanes,(M&v)!==v){Dn(),a.pingedLanes|=a.suspendedLanes&M;break}a.timeoutHandle=xe(os.bind(null,a,kn),l);break}os(a,kn);break;case 4:if(Rr(a,v),(v&4194240)===v)break;for(l=a.eventTimes,M=-1;0<v;){var O=31-Hn(v);w=1<<O,O=l[O],O>M&&(M=O),v&=~w}if(v=M,v=pn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*CM(v/1960))-v,10<v){a.timeoutHandle=xe(os.bind(null,a,kn),v);break}os(a,kn);break;case 5:os(a,kn);break;default:throw Error(o(329))}}}return zn(a,pn()),a.callbackNode===p?c0.bind(null,a):null}function Cd(a,l){var p=Ma;return a.current.memoizedState.isDehydrated&&(ss(a,l).flags|=256),a=wc(a,l),a!==2&&(l=kn,kn=p,l!==null&&Td(l)),a}function Td(a){kn===null?kn=a:kn.push.apply(kn,a)}function TM(a){for(var l=a;;){if(l.flags&16384){var p=l.updateQueue;if(p!==null&&(p=p.stores,p!==null))for(var v=0;v<p.length;v++){var M=p[v],w=M.getSnapshot;M=M.value;try{if(!Gi(w(),M))return!1}catch{return!1}}}if(p=l.child,l.subtreeFlags&16384&&p!==null)p.return=l,l=p;else{if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Rr(a,l){for(l&=~Ad,l&=~_c,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var p=31-Hn(l),v=1<<p;a[p]=-1,l&=~v}}function u0(a){if(gt&6)throw Error(o(327));as();var l=Ol(a,0);if(!(l&1))return zn(a,pn()),null;var p=wc(a,l);if(a.tag!==0&&p===2){var v=Bh(a);v!==0&&(l=v,p=Cd(a,v))}if(p===1)throw p=Aa,ss(a,0),Rr(a,l),zn(a,pn()),p;if(p===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,os(a,kn),zn(a,pn()),null}function h0(a){Tr!==null&&Tr.tag===0&&!(gt&6)&&as();var l=gt;gt|=1;var p=jt.transition,v=Rt;try{if(jt.transition=null,Rt=1,a)return a()}finally{Rt=v,jt.transition=p,gt=l,!(gt&6)&&Hi()}}function bd(){jn=so.current,Re(so)}function ss(a,l){a.finishedWork=null,a.finishedLanes=0;var p=a.timeoutHandle;if(p!==it&&(a.timeoutHandle=it,et(p)),on!==null)for(p=on.return;p!==null;){var v=p;switch(Xh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Yn();break;case 3:io(),Re(cn),Re(Nt),jh();break;case 5:Qh(v);break;case 4:io();break;case 13:Re(Xt);break;case 19:Re(Xt);break;case 10:Gh(v.type._context);break;case 22:case 23:bd()}p=p.return}if(sn=a,on=a=Br(a.current,null),_n=jn=l,un=0,Aa=null,Ad=_c=oo=0,kn=Ma=null,ki!==null){for(l=0;l<ki.length;l++)if(p=ki[l],v=p.interleaved,v!==null){p.interleaved=null;var M=v.next,w=p.pending;if(w!==null){var O=w.next;w.next=M,v.next=O}p.pending=v}ki=null}return a}function d0(a,l){do{var p=on;try{if(Oh(),Zl.current=ic,jl){for(var v=Kt.memoizedState;v!==null;){var M=v.queue;M!==null&&(M.pending=null),v=v.next}jl=!1}if(ro=0,mn=xn=Kt=null,da=!1,fa=0,xd.current=null,p===null||p.return===null){un=1,Aa=l,on=null;break}e:{var w=a,O=p.return,z=p,oe=l;if(l=_n,z.flags|=32768,oe!==null&&typeof oe=="object"&&typeof oe.then=="function"){var Ee=oe,ke=z,at=ke.tag;if(!(ke.mode&1)&&(at===0||at===11||at===15)){var $e=ke.alternate;$e?(ke.updateQueue=$e.updateQueue,ke.memoizedState=$e.memoizedState,ke.lanes=$e.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var Ft=Lg(O);if(Ft!==null){Ft.flags&=-257,Dg(Ft,O,z,w,l),Ft.mode&1&&Pg(w,Ee,l),l=Ft,oe=Ee;var qe=l.updateQueue;if(qe===null){var Sn=new Set;Sn.add(oe),l.updateQueue=Sn}else qe.add(oe);break e}else{if(!(l&1)){Pg(w,Ee,l),Rd();break e}oe=Error(o(426))}}else if(Wt&&z.mode&1){var mi=Lg(O);if(mi!==null){!(mi.flags&65536)&&(mi.flags|=256),Dg(mi,O,z,w,l),Yh(oe);break e}}w=oe,un!==4&&(un=2),Ma===null?Ma=[w]:Ma.push(w),oe=sd(oe,z),z=O;do{switch(z.tag){case 3:z.flags|=65536,l&=-l,z.lanes|=l;var j=Bg(z,oe,l);jm(z,j);break e;case 1:w=oe;var W=z.type,se=z.stateNode;if(!(z.flags&128)&&(typeof W.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Cr===null||!Cr.has(se)))){z.flags|=65536,l&=-l,z.lanes|=l;var Oe=Ig(z,w,l);jm(z,Oe);break e}}z=z.return}while(z!==null)}m0(p)}catch(Ye){l=Ye,on===p&&p!==null&&(on=p=p.return);continue}break}while(!0)}function f0(){var a=vc.current;return vc.current=ic,a===null?ic:a}function Rd(){(un===0||un===3||un===2)&&(un=4),sn===null||!(oo&268435455)&&!(_c&268435455)||Rr(sn,_n)}function wc(a,l){var p=gt;gt|=2;var v=f0();sn===a&&_n===l||ss(a,l);do try{bM();break}catch(M){d0(a,M)}while(!0);if(Oh(),gt=p,vc.current=v,on!==null)throw Error(o(261));return sn=null,_n=0,un}function bM(){for(;on!==null;)p0(on)}function RM(){for(;on!==null&&!tM();)p0(on)}function p0(a){var l=_0(a.alternate,a,jn);a.memoizedProps=a.pendingProps,l===null?m0(a):on=l,xd.current=null}function m0(a){var l=a;do{var p=l.alternate;if(a=l.return,l.flags&32768){if(p=AM(p,l),p!==null){p.flags&=32767,on=p;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{un=6,on=null;return}}else if(p=_M(p,l,jn),p!==null){on=p;return}if(l=l.sibling,l!==null){on=l;return}on=l=a}while(l!==null);un===0&&(un=5)}function os(a,l){var p=Rt,v=jt.transition;try{jt.transition=null,Rt=1,BM(a,l,p)}finally{jt.transition=v,Rt=p}return null}function BM(a,l,p){do as();while(Tr!==null);if(gt&6)throw Error(o(327));var v=a.finishedWork,M=a.finishedLanes;if(v===null)return null;if(a.finishedWork=null,a.finishedLanes=0,v===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var w=v.lanes|v.childLanes;if(eM(a,w),a===sn&&(on=sn=null,_n=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||xc||(xc=!0,y0(Fh,function(){return as(),null})),w=(v.flags&15990)!==0,v.subtreeFlags&15990||w){w=jt.transition,jt.transition=null;var O=Rt;Rt=1;var z=gt;gt|=4,xd.current=null,SM(a,v),EM(a,v),K(a.containerInfo),a.current=v,wM(v),nM(),gt=z,Rt=O,jt.transition=w}else a.current=v;if(xc&&(xc=!1,Tr=a,Ac=M),w=a.pendingLanes,w===0&&(Cr=null),sM(v.stateNode),zn(a,pn()),l!==null)for(p=a.onRecoverableError,v=0;v<l.length;v++)p(l[v]);if(yc)throw yc=!1,a=Ed,Ed=null,a;return Ac&1&&a.tag!==0&&as(),w=a.pendingLanes,w&1?a===wd?Sa++:(Sa=0,wd=a):Sa=0,Hi(),null}function as(){if(Tr!==null){var a=Km(Ac),l=jt.transition,p=Rt;try{if(jt.transition=null,Rt=16>a?16:a,Tr===null)var v=!1;else{if(a=Tr,Tr=null,Ac=0,gt&6)throw Error(o(331));var M=gt;for(gt|=4,Ue=a.current;Ue!==null;){var w=Ue,O=w.child;if(Ue.flags&16){var z=w.deletions;if(z!==null){for(var oe=0;oe<z.length;oe++){var Ee=z[oe];for(Ue=Ee;Ue!==null;){var ke=Ue;switch(ke.tag){case 0:case 11:case 15:rs(8,ke,w)}var at=ke.child;if(at!==null)at.return=ke,Ue=at;else for(;Ue!==null;){ke=Ue;var $e=ke.sibling,Ft=ke.return;if($g(ke),ke===Ee){Ue=null;break}if($e!==null){$e.return=Ft,Ue=$e;break}Ue=Ft}}}var qe=w.alternate;if(qe!==null){var Sn=qe.child;if(Sn!==null){qe.child=null;do{var mi=Sn.sibling;Sn.sibling=null,Sn=mi}while(Sn!==null)}}Ue=w}}if(w.subtreeFlags&2064&&O!==null)O.return=w,Ue=O;else e:for(;Ue!==null;){if(w=Ue,w.flags&2048)switch(w.tag){case 0:case 11:case 15:rs(9,w,w.return)}var j=w.sibling;if(j!==null){j.return=w.return,Ue=j;break e}Ue=w.return}}var W=a.current;for(Ue=W;Ue!==null;){O=Ue;var se=O.child;if(O.subtreeFlags&2064&&se!==null)se.return=O,Ue=se;else e:for(O=W;Ue!==null;){if(z=Ue,z.flags&2048)try{switch(z.tag){case 0:case 11:case 15:ya(9,z)}}catch(Ye){Vn(z,z.return,Ye)}if(z===O){Ue=null;break e}var Oe=z.sibling;if(Oe!==null){Oe.return=z.return,Ue=Oe;break e}Ue=z.return}}if(gt=M,Hi(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot(Gl,a)}catch{}v=!0}return v}finally{Rt=p,jt.transition=l}}return!1}function g0(a,l,p){l=sd(p,l),l=Bg(a,l,1),wr(a,l),l=Dn(),a=Ec(a,1),a!==null&&(oa(a,1,l),zn(a,l))}function Vn(a,l,p){if(a.tag===3)g0(a,a,p);else for(;l!==null;){if(l.tag===3){g0(l,a,p);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v))){a=sd(p,a),a=Ig(l,a,1),wr(l,a),a=Dn(),l=Ec(l,1),l!==null&&(oa(l,1,a),zn(l,a));break}}l=l.return}}function IM(a,l,p){var v=a.pingCache;v!==null&&v.delete(l),l=Dn(),a.pingedLanes|=a.suspendedLanes&p,sn===a&&(_n&p)===p&&(un===4||un===3&&(_n&130023424)===_n&&500>pn()-Md?ss(a,0):Ad|=p),zn(a,l)}function v0(a,l){l===0&&(a.mode&1?(l=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):l=1);var p=Dn();a=Ec(a,l),a!==null&&(oa(a,l,p),zn(a,p))}function PM(a){var l=a.memoizedState,p=0;l!==null&&(p=l.retryLane),v0(a,p)}function LM(a,l){var p=0;switch(a.tag){case 13:var v=a.stateNode,M=a.memoizedState;M!==null&&(p=M.retryLane);break;case 19:v=a.stateNode;break;default:throw Error(o(314))}v!==null&&v.delete(l),v0(a,p)}var _0;_0=function(a,l,p){if(a!==null)if(a.memoizedProps!==l.pendingProps||cn.current)Zn=!0;else{if(!(a.lanes&p)&&!(l.flags&128))return Zn=!1,xM(a,l,p);Zn=!!(a.flags&131072)}else Zn=!1,Wt&&l.flags&1048576&&rg(l,Yl,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps;var M=Ni(l,Nt.current);Zs(l,p),M=ed(null,l,v,a,M,p);var w=td();return l.flags|=1,typeof M=="object"&&M!==null&&typeof M.render=="function"&&M.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Tt(v)?(w=!0,Sr(l)):w=!1,l.memoizedState=M.state!==null&&M.state!==void 0?M.state:null,kh(l),M.updater=Jl,l.stateNode=M,M._reactInternals=l,Vh(l,v,a,p),l=ld(null,l,v,!0,w,p)):(l.tag=0,Wt&&w&&Wh(l),Ln(null,l,M,p),l=l.child),l;case 16:v=l.elementType;e:{switch(a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps,M=v._init,v=M(v._payload),l.type=v,M=l.tag=FM(v),a=Si(v,a),M){case 0:l=ad(null,l,v,a,p);break e;case 1:l=zg(null,l,v,a,p);break e;case 11:l=Ng(null,l,v,a,p);break e;case 14:l=Og(null,l,v,Si(v.type,a),p);break e}throw Error(o(306,v,""))}return l;case 0:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Si(v,M),ad(a,l,v,M,p);case 1:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Si(v,M),zg(a,l,v,M,p);case 3:e:{if(Vg(l),a===null)throw Error(o(387));v=l.pendingProps,w=l.memoizedState,M=w.element,Zm(a,l),Xl(l,v,null,p);var O=l.memoizedState;if(v=O.element,ae&&w.isDehydrated)if(w={element:v,isDehydrated:!1,cache:O.cache,transitions:O.transitions},l.updateQueue.baseState=w,l.memoizedState=w,l.flags&256){M=Error(o(423)),l=Wg(a,l,v,p,M);break e}else if(v!==M){M=Error(o(424)),l=Wg(a,l,v,p,M);break e}else for(ae&&(Qn=Dl(l.stateNode.containerInfo),qn=l,Wt=!0,Ei=null,aa=!1),p=ug(l,null,v,p),l.child=p;p;)p.flags=p.flags&-3|4096,p=p.sibling;else{if(eo(),v===M){l=nr(a,l,p);break e}Ln(a,l,v,p)}l=l.child}return l;case 5:return hg(l),a===null&&Kh(l),v=l.type,M=l.pendingProps,w=a!==null?a.memoizedProps:null,O=M.children,fe(v,M)?O=null:w!==null&&fe(v,w)&&(l.flags|=32),kg(a,l),Ln(a,l,O,p),l.child;case 6:return a===null&&Kh(l),null;case 13:return Xg(a,l,p);case 4:return qh(l,l.stateNode.containerInfo),v=l.pendingProps,a===null?l.child=to(l,null,v,p):Ln(a,l,v,p),l.child;case 11:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Si(v,M),Ng(a,l,v,M,p);case 7:return Ln(a,l,l.pendingProps,p),l.child;case 8:return Ln(a,l,l.pendingProps.children,p),l.child;case 12:return Ln(a,l,l.pendingProps.children,p),l.child;case 10:e:{if(v=l.type._context,M=l.pendingProps,w=l.memoizedProps,O=M.value,Qm(l,v,O),w!==null)if(Gi(w.value,O)){if(w.children===M.children&&!cn.current){l=nr(a,l,p);break e}}else for(w=l.child,w!==null&&(w.return=l);w!==null;){var z=w.dependencies;if(z!==null){O=w.child;for(var oe=z.firstContext;oe!==null;){if(oe.context===v){if(w.tag===1){oe=ji(-1,p&-p),oe.tag=2;var Ee=w.updateQueue;if(Ee!==null){Ee=Ee.shared;var ke=Ee.pending;ke===null?oe.next=oe:(oe.next=ke.next,ke.next=oe),Ee.pending=oe}}w.lanes|=p,oe=w.alternate,oe!==null&&(oe.lanes|=p),Hh(w.return,p,l),z.lanes|=p;break}oe=oe.next}}else if(w.tag===10)O=w.type===l.type?null:w.child;else if(w.tag===18){if(O=w.return,O===null)throw Error(o(341));O.lanes|=p,z=O.alternate,z!==null&&(z.lanes|=p),Hh(O,p,l),O=w.sibling}else O=w.child;if(O!==null)O.return=w;else for(O=w;O!==null;){if(O===l){O=null;break}if(w=O.sibling,w!==null){w.return=O.return,O=w;break}O=O.return}w=O}Ln(a,l,M.children,p),l=l.child}return l;case 9:return M=l.type,v=l.pendingProps.children,Zs(l,p),M=li(M),v=v(M),l.flags|=1,Ln(a,l,v,p),l.child;case 14:return v=l.type,M=Si(v,l.pendingProps),M=Si(v.type,M),Og(a,l,v,M,p);case 15:return Gg(a,l,l.type,l.pendingProps,p);case 17:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Si(v,M),a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Tt(v)?(a=!0,Sr(l)):a=!1,Zs(l,p),ng(l,v,M),Vh(l,v,M,p),ld(null,l,v,!0,a,p);case 19:return qg(a,l,p);case 22:return Hg(a,l,p)}throw Error(o(156,l.tag))};function y0(a,l){return Lh(a,l)}function DM(a,l,p,v){this.tag=a,this.key=p,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(a,l,p,v){return new DM(a,l,p,v)}function Bd(a){return a=a.prototype,!(!a||!a.isReactComponent)}function FM(a){if(typeof a=="function")return Bd(a)?1:0;if(a!=null){if(a=a.$$typeof,a===A)return 11;if(a===E)return 14}return 2}function Br(a,l){var p=a.alternate;return p===null?(p=pi(a.tag,l,a.key,a.mode),p.elementType=a.elementType,p.type=a.type,p.stateNode=a.stateNode,p.alternate=a,a.alternate=p):(p.pendingProps=l,p.type=a.type,p.flags=0,p.subtreeFlags=0,p.deletions=null),p.flags=a.flags&14680064,p.childLanes=a.childLanes,p.lanes=a.lanes,p.child=a.child,p.memoizedProps=a.memoizedProps,p.memoizedState=a.memoizedState,p.updateQueue=a.updateQueue,l=a.dependencies,p.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},p.sibling=a.sibling,p.index=a.index,p.ref=a.ref,p}function Cc(a,l,p,v,M,w){var O=2;if(v=a,typeof a=="function")Bd(a)&&(O=1);else if(typeof a=="string")O=5;else e:switch(a){case d:return ls(p.children,M,w,l);case f:O=8,M|=8;break;case m:return a=pi(12,p,l,M|2),a.elementType=m,a.lanes=w,a;case x:return a=pi(13,p,l,M),a.elementType=x,a.lanes=w,a;case y:return a=pi(19,p,l,M),a.elementType=y,a.lanes=w,a;case C:return Tc(p,M,w,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case g:O=10;break e;case _:O=9;break e;case A:O=11;break e;case E:O=14;break e;case S:O=16,v=null;break e}throw Error(o(130,a==null?a:typeof a,""))}return l=pi(O,p,l,M),l.elementType=a,l.type=v,l.lanes=w,l}function ls(a,l,p,v){return a=pi(7,a,v,l),a.lanes=p,a}function Tc(a,l,p,v){return a=pi(22,a,v,l),a.elementType=C,a.lanes=p,a.stateNode={},a}function Id(a,l,p){return a=pi(6,a,null,l),a.lanes=p,a}function Pd(a,l,p){return l=pi(4,a.children!==null?a.children:[],a.key,l),l.lanes=p,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function UM(a,l,p,v,M){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=it,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ih(0),this.expirationTimes=Ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ih(0),this.identifierPrefix=v,this.onRecoverableError=M,ae&&(this.mutableSourceEagerHydrationData=null)}function x0(a,l,p,v,M,w,O,z,oe){return a=new UM(a,l,p,z,oe),l===1?(l=1,w===!0&&(l|=8)):l=0,w=pi(3,null,null,l),a.current=w,w.stateNode=a,w.memoizedState={element:v,isDehydrated:p,cache:null,transitions:null},kh(w),a}function A0(a){if(!a)return xt;a=a._reactInternals;e:{if(b(a)!==a||a.tag!==1)throw Error(o(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Tt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(a.tag===1){var p=a.type;if(Tt(p))return Pn(a,p,l)}return l}function M0(a){var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=X(l),a===null?null:a.stateNode}function S0(a,l){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var p=a.retryLane;a.retryLane=p!==0&&p<l?p:l}}function Ld(a,l){S0(a,l),(a=a.alternate)&&S0(a,l)}function NM(a){return a=X(a),a===null?null:a.stateNode}function OM(){return null}return t.attemptContinuousHydration=function(a){if(a.tag===13){var l=Dn();fi(a,134217728,l),Ld(a,134217728)}},t.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var l=Dn(),p=br(a);fi(a,p,l),Ld(a,p)}},t.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var p=sa(l.pendingLanes);p!==0&&(Ph(l,p|1),zn(l,pn()),!(gt&6)&&(ao(),Hi()))}break;case 13:var v=Dn();h0(function(){return fi(a,1,v)}),Ld(a,1)}},t.batchedUpdates=function(a,l){var p=gt;gt|=1;try{return a(l)}finally{gt=p,gt===0&&(ao(),Hl&&Hi())}},t.createComponentSelector=function(a){return{$$typeof:dc,value:a}},t.createContainer=function(a,l,p,v,M,w,O){return x0(a,l,!1,null,p,v,M,w,O)},t.createHasPseudoClassSelector=function(a){return{$$typeof:fc,value:a}},t.createHydrationContainer=function(a,l,p,v,M,w,O,z,oe){return a=x0(p,v,!0,a,M,w,O,z,oe),a.context=A0(null),p=a.current,v=Dn(),M=br(p),w=ji(v,M),w.callback=l??null,wr(p,w),a.current.lanes=M,oa(a,M,v),zn(a,v),a},t.createPortal=function(a,l,p){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:a,containerInfo:l,implementation:p}},t.createRoleSelector=function(a){return{$$typeof:pc,value:a}},t.createTestNameSelector=function(a){return{$$typeof:mc,value:a}},t.createTextSelector=function(a){return{$$typeof:gc,value:a}},t.deferredUpdates=function(a){var l=Rt,p=jt.transition;try{return jt.transition=null,Rt=16,a()}finally{Rt=l,jt.transition=p}},t.discreteUpdates=function(a,l,p,v,M){var w=Rt,O=jt.transition;try{return jt.transition=null,Rt=1,a(l,p,v,M)}finally{Rt=w,jt.transition=O,gt===0&&ao()}},t.findAllNodes=yd,t.findBoundingRects=function(a,l){if(!G)throw Error(o(363));l=yd(a,l),a=[];for(var p=0;p<l.length;p++)a.push(ee(l[p]));for(l=a.length-1;0<l;l--){p=a[l];for(var v=p.x,M=v+p.width,w=p.y,O=w+p.height,z=l-1;0<=z;z--)if(l!==z){var oe=a[z],Ee=oe.x,ke=Ee+oe.width,at=oe.y,$e=at+oe.height;if(v>=Ee&&w>=at&&M<=ke&&O<=$e){a.splice(l,1);break}else if(v!==Ee||p.width!==oe.width||$e<w||at>O){if(!(w!==at||p.height!==oe.height||ke<v||Ee>M)){Ee>v&&(oe.width+=Ee-v,oe.x=v),ke<M&&(oe.width=M-Ee),a.splice(l,1);break}}else{at>w&&(oe.height+=at-w,oe.y=w),$e<O&&(oe.height=O-at),a.splice(l,1);break}}}return a},t.findHostInstance=M0,t.findHostInstanceWithNoPortals=function(a){return a=L(a),a=a!==null?Z(a):null,a===null?null:a.stateNode},t.findHostInstanceWithWarning=function(a){return M0(a)},t.flushControlled=function(a){var l=gt;gt|=1;var p=jt.transition,v=Rt;try{jt.transition=null,Rt=1,a()}finally{Rt=v,jt.transition=p,gt=l,gt===0&&(ao(),Hi())}},t.flushPassiveEffects=as,t.flushSync=h0,t.focusWithin=function(a,l){if(!G)throw Error(o(363));for(a=gd(a),l=l0(a,l),l=Array.from(l),a=0;a<l.length;){var p=l[a++];if(!de(p)){if(p.tag===5&&Ke(p.stateNode))return!0;for(p=p.child;p!==null;)l.push(p),p=p.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Rt},t.getFindAllNodesFailureDescription=function(a,l){if(!G)throw Error(o(363));var p=0,v=[];a=[gd(a),0];for(var M=0;M<a.length;){var w=a[M++],O=a[M++],z=l[O];if((w.tag!==5||!de(w))&&(vd(w,z)&&(v.push(_d(z)),O++,O>p&&(p=O)),O<l.length))for(w=w.child;w!==null;)a.push(w,O),w=w.sibling}if(p<l.length){for(a=[];p<l.length;p++)a.push(_d(l[p]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},t.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return Q(a.child.stateNode);default:return a.child.stateNode}},t.injectIntoDevTools=function(a){if(a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:NM,findFiberByHostInstance:a.findFiberByHostInstance||OM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)a=!0;else{try{Gl=l.inject(a),Oi=l}catch{}a=!!l.checkDCE}}return a},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(a,l,p,v){if(!G)throw Error(o(363));a=yd(a,l);var M=Ce(a,p,v).disconnect;return{disconnect:function(){M()}}},t.registerMutableSourceForHydration=function(a,l){var p=l._getVersion;p=p(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,p]:a.mutableSourceEagerHydrationData.push(l,p)},t.runWithPriority=function(a,l){var p=Rt;try{return Rt=a,l()}finally{Rt=p}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(a,l,p,v){var M=l.current,w=Dn(),O=br(M);return p=A0(p),l.context===null?l.context=p:l.pendingContext=p,l=ji(w,O),l.payload={element:a},v=v===void 0?null:v,v!==null&&(l.callback=v),wr(M,l),a=fi(M,O,w),a!==null&&Wl(a,M,O),O},t};eA.exports=OR;var GR=eA.exports;const HR=O_(GR);var tA={exports:{}},nA={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(N,Y){var K=N.length;N.push(Y);e:for(;0<K;){var re=K-1>>>1,ye=N[re];if(0<i(ye,Y))N[re]=Y,N[K]=ye,K=re;else break e}}function t(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var Y=N[0],K=N.pop();if(K!==Y){N[0]=K;e:for(var re=0,ye=N.length,De=ye>>>1;re<De;){var ne=2*(re+1)-1,fe=N[ne],we=ne+1,xe=N[we];if(0>i(fe,K))we<ye&&0>i(xe,fe)?(N[re]=xe,N[we]=K,re=we):(N[re]=fe,N[ne]=K,re=ne);else if(we<ye&&0>i(xe,K))N[re]=xe,N[we]=K,re=we;else break e}}return Y}function i(N,Y){var K=N.sortIndex-Y.sortIndex;return K!==0?K:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],d=1,f=null,m=3,g=!1,_=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(N){for(var Y=t(h);Y!==null;){if(Y.callback===null)n(h);else if(Y.startTime<=N)n(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=t(h)}}function C(N){if(A=!1,S(N),!_)if(t(u)!==null)_=!0,Q(F);else{var Y=t(h);Y!==null&&ce(C,Y.startTime-N)}}function F(N,Y){_=!1,A&&(A=!1,y(U),U=-1),g=!0;var K=m;try{for(S(Y),f=t(u);f!==null&&(!(f.expirationTime>Y)||N&&!L());){var re=f.callback;if(typeof re=="function"){f.callback=null,m=f.priorityLevel;var ye=re(f.expirationTime<=Y);Y=r.unstable_now(),typeof ye=="function"?f.callback=ye:f===t(u)&&n(u),S(Y)}else n(u);f=t(u)}if(f!==null)var De=!0;else{var ne=t(h);ne!==null&&ce(C,ne.startTime-Y),De=!1}return De}finally{f=null,m=K,g=!1}}var R=!1,I=null,U=-1,b=5,T=-1;function L(){return!(r.unstable_now()-T<b)}function X(){if(I!==null){var N=r.unstable_now();T=N;var Y=!0;try{Y=I(!0,N)}finally{Y?J():(R=!1,I=null)}}else R=!1}var J;if(typeof E=="function")J=function(){E(X)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ie=Z.port2;Z.port1.onmessage=X,J=function(){ie.postMessage(null)}}else J=function(){x(X,0)};function Q(N){I=N,R||(R=!0,J())}function ce(N,Y){U=x(function(){N(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_continueExecution=function(){_||g||(_=!0,Q(F))},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(N){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var K=m;m=Y;try{return N()}finally{m=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=m;m=N;try{return Y()}finally{m=K}},r.unstable_scheduleCallback=function(N,Y,K){var re=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,N={id:d++,callback:Y,priorityLevel:N,startTime:K,expirationTime:ye,sortIndex:-1},K>re?(N.sortIndex=K,e(h,N),t(u)===null&&N===t(h)&&(A?(y(U),U=-1):A=!0,ce(C,K-re))):(N.sortIndex=ye,e(u,N),_||g||(_=!0,Q(F))),N},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(N){var Y=m;return function(){var K=m;m=Y;try{return N.apply(this,arguments)}finally{m=K}}}})(nA);tA.exports=nA;var s_=tA.exports;const kR=r=>typeof r=="object"&&typeof r.then=="function",Bs=[];function iA(r,e,t=(n,i)=>n===i){if(r===e)return!0;if(!r||!e)return!1;const n=r.length;if(e.length!==n)return!1;for(let i=0;i<n;i++)if(!t(r[i],e[i]))return!1;return!0}function rA(r,e=null,t=!1,n={}){e===null&&(e=[r]);for(const s of Bs)if(iA(e,s.keys,s.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return n.lifespan&&n.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,n.lifespan)),s.response;if(!t)throw s.promise}const i={keys:e,equal:n.equal,remove:()=>{const s=Bs.indexOf(i);s!==-1&&Bs.splice(s,1)},promise:(kR(r)?r:r(...e)).then(s=>{i.response=s,n.lifespan&&n.lifespan>0&&(i.timeout=setTimeout(i.remove,n.lifespan))}).catch(s=>i.error=s)};if(Bs.push(i),!t)throw i.promise}const zR=(r,e,t)=>rA(r,e,!1,t),VR=(r,e,t)=>void rA(r,e,!0,t),WR=r=>{if(r===void 0||r.length===0)Bs.splice(0,Bs.length);else{const e=Bs.find(t=>iA(r,t.keys,t.equal));e&&e.remove()}},bm={},XR=r=>void Object.assign(bm,r);function JR(r,e){function t(d,{args:f=[],attach:m,...g},_){let A=`${d[0].toUpperCase()}${d.slice(1)}`,x;if(d==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const y=g.object;x=Do(y,{type:d,root:_,attach:m,primitive:!0})}else{const y=bm[A];if(!y)throw new Error(`R3F: ${A} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(f))throw new Error("R3F: The args prop must be an array!");x=Do(new y(...f),{type:d,root:_,attach:m,memoizedProps:{args:f}})}return x.__r3f.attach===void 0&&(x instanceof ct?x.__r3f.attach="geometry":x instanceof ln&&(x.__r3f.attach="material")),A!=="inject"&&wf(x,g),x}function n(d,f){let m=!1;if(f){var g,_;(g=f.__r3f)!=null&&g.attach?Ef(d,f,f.__r3f.attach):f.isObject3D&&d.isObject3D&&(d.add(f),m=!0),m||(_=d.__r3f)==null||_.objects.push(f),f.__r3f||Do(f,{}),f.__r3f.parent=d,Tp(f),Fo(f)}}function i(d,f,m){let g=!1;if(f){var _,A;if((_=f.__r3f)!=null&&_.attach)Ef(d,f,f.__r3f.attach);else if(f.isObject3D&&d.isObject3D){f.parent=d,f.dispatchEvent({type:"added"}),d.dispatchEvent({type:"childadded",child:f});const x=d.children.filter(E=>E!==f),y=x.indexOf(m);d.children=[...x.slice(0,y),f,...x.slice(y)],g=!0}g||(A=d.__r3f)==null||A.objects.push(f),f.__r3f||Do(f,{}),f.__r3f.parent=d,Tp(f),Fo(f)}}function s(d,f,m=!1){d&&[...d].forEach(g=>o(f,g,m))}function o(d,f,m){if(f){var g,_,A;if(f.__r3f&&(f.__r3f.parent=null),(g=d.__r3f)!=null&&g.objects&&(d.__r3f.objects=d.__r3f.objects.filter(C=>C!==f)),(_=f.__r3f)!=null&&_.attach)u_(d,f,f.__r3f.attach);else if(f.isObject3D&&d.isObject3D){var x;d.remove(f),(x=f.__r3f)!=null&&x.root&&tB(Lu(f),f)}const E=(A=f.__r3f)==null?void 0:A.primitive,S=!E&&(m===void 0?f.dispose!==null:m);if(!E){var y;s((y=f.__r3f)==null?void 0:y.objects,f,S),s(f.children,f,S)}if(delete f.__r3f,S&&f.dispose&&f.type!=="Scene"){const C=()=>{try{f.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?s_.unstable_scheduleCallback(s_.unstable_IdlePriority,C):C()}Fo(d)}}function c(d,f,m,g){var _;const A=(_=d.__r3f)==null?void 0:_.parent;if(!A)return;const x=t(f,m,d.__r3f.root);if(d.children){for(const y of d.children)y.__r3f&&n(x,y);d.children=d.children.filter(y=>!y.__r3f)}d.__r3f.objects.forEach(y=>n(x,y)),d.__r3f.objects=[],d.__r3f.autoRemovedBeforeAppend||o(A,d),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(A,x),x.raycast&&x.__r3f.eventCount&&Lu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(y=>{y!==null&&(y.stateNode=x,y.ref&&(typeof y.ref=="function"?y.ref(x):y.ref.current=x))})}const u=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:HR({createInstance:t,removeChild:o,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(d,f)=>{if(!f)return;const m=d.getState().scene;m.__r3f&&(m.__r3f.root=d,n(m,f))},removeChildFromContainer:(d,f)=>{f&&o(d.getState().scene,f)},insertInContainerBefore:(d,f,m)=>{if(!f||!m)return;const g=d.getState().scene;g.__r3f&&i(g,f,m)},getRootHostContext:()=>null,getChildHostContext:d=>d,finalizeInitialChildren(d){var f;return!!((f=d==null?void 0:d.__r3f)!=null?f:{}).handlers},prepareUpdate(d,f,m,g){var _;if(((_=d==null?void 0:d.__r3f)!=null?_:{}).primitive&&g.object&&g.object!==d)return[!0];{const{args:x=[],children:y,...E}=g,{args:S=[],children:C,...F}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((I,U)=>I!==S[U]))return[!0];const R=hA(d,E,F,!0);return R.changes.length?[!1,R]:null}},commitUpdate(d,[f,m],g,_,A,x){f?c(d,g,A,x):wf(d,m)},commitMount(d,f,m,g){var _;const A=(_=d.__r3f)!=null?_:{};d.raycast&&A.handlers&&A.eventCount&&Lu(d).getState().internal.interaction.push(d)},getPublicInstance:d=>d,prepareForCommit:()=>null,preparePortalMount:d=>Do(d.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(d){var f;const{attach:m,parent:g}=(f=d.__r3f)!=null?f:{};m&&g&&u_(g,d,m),d.isObject3D&&(d.visible=!1),Fo(d)},unhideInstance(d,f){var m;const{attach:g,parent:_}=(m=d.__r3f)!=null?m:{};g&&_&&Ef(_,d,g),(d.isObject3D&&f.visible==null||f.visible)&&(d.visible=!0),Fo(d)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Go.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Gt.fun(performance.now)?performance.now:Gt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Gt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Gt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:wf}}var o_,a_;const Sf=r=>"colorSpace"in r||"outputColorSpace"in r,sA=()=>{var r;return(r=bm.ColorManagement)!=null?r:null},oA=r=>r&&r.isOrthographicCamera,KR=r=>r&&r.hasOwnProperty("current"),Cl=typeof window<"u"&&((o_=window.document)!=null&&o_.createElement||((a_=window.navigator)==null?void 0:a_.product)==="ReactNative")?ge.useLayoutEffect:ge.useEffect;function aA(r){const e=ge.useRef(r);return Cl(()=>void(e.current=r),[r]),e}function YR({set:r}){return Cl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class lA extends ge.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}lA.getDerivedStateFromError=()=>({error:!0});const cA="__default",l_=new Map,qR=r=>r&&!!r.memoized&&!!r.changes;function uA(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const Ua=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function Lu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Gt={obj:r=>r===Object(r)&&!Gt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Gt.str(r)||Gt.num(r)||Gt.boo(r))return r===e;const s=Gt.obj(r);if(s&&n==="reference")return r===e;const o=Gt.arr(r);if(o&&t==="reference")return r===e;if((o||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Gt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Gt.und(c)){if(o&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function QR(r){const e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}function ZR(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function Do(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function Cp(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,o)=>s[o],r),{target:t,key:i}}else return{target:t,key:e}}const c_=/-\d+$/;function Ef(r,e,t){if(Gt.str(t)){if(c_.test(t)){const s=t.replace(c_,""),{target:o,key:c}=Cp(r,s);Array.isArray(o[c])||(o[c]=[])}const{target:n,key:i}=Cp(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function u_(r,e,t){var n,i;if(Gt.str(t)){const{target:s,key:o}=Cp(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[o]:s[o]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function hA(r,{children:e,key:t,ref:n,...i},{children:s,key:o,ref:c,...u}={},h=!1){const d=r.__r3f,f=Object.entries(i),m=[];if(h){const _=Object.keys(u);for(let A=0;A<_.length;A++)i.hasOwnProperty(_[A])||f.unshift([_[A],cA+"remove"])}f.forEach(([_,A])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&_==="object"||Gt.equ(A,u[_]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(_))return m.push([_,A,!0,[]]);let y=[];_.includes("-")&&(y=_.split("-")),m.push([_,A,!1,y]);for(const E in i){const S=i[E];E.startsWith(`${_}-`)&&m.push([E,S,!1,E.split("-")])}});const g={...i};return d!=null&&d.memoizedProps&&d!=null&&d.memoizedProps.args&&(g.args=d.memoizedProps.args),d!=null&&d.memoizedProps&&d!=null&&d.memoizedProps.attach&&(g.attach=d.memoizedProps.attach),{memoized:g,changes:m}}const jR=typeof process<"u"&&!1;function wf(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:c}=qR(e)?e:hA(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=o);for(let d=0;d<c.length;d++){let[f,m,g,_]=c[d];if(Sf(r)){const E="srgb",S="srgb-linear";f==="encoding"?(f="colorSpace",m=m===3001?E:S):f==="outputEncoding"&&(f="outputColorSpace",m=m===3001?E:S)}let A=r,x=A[f];if(_.length&&(x=_.reduce((y,E)=>y[E],r),!(x&&x.set))){const[y,...E]=_.reverse();A=E.reverse().reduce((S,C)=>S[C],r),f=y}if(m===cA+"remove")if(A.constructor){let y=l_.get(A.constructor);y||(y=new A.constructor,l_.set(A.constructor,y)),m=y[f]}else m=0;if(g&&n)m?n.handlers[f]=m:delete n.handlers[f],n.eventCount=Object.keys(n.handlers).length;else if(x&&x.set&&(x.copy||x instanceof Fs)){if(Array.isArray(m))x.fromArray?x.fromArray(m):x.set(...m);else if(x.copy&&m&&m.constructor&&(jR?x.constructor.name===m.constructor.name:x.constructor===m.constructor))x.copy(m);else if(m!==void 0){const y=x instanceof Ie;!y&&x.setScalar?x.setScalar(m):x instanceof Fs&&m instanceof Fs?x.mask=m.mask:x.set(m),!sA()&&s&&!s.linear&&y&&x.convertSRGBToLinear()}}else if(A[f]=m,A[f]instanceof Ht&&A[f].format===On&&A[f].type===qi&&s){const y=A[f];Sf(y)&&Sf(s.gl)?y.colorSpace=s.gl.outputColorSpace:y.encoding=s.gl.outputEncoding}Fo(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const d=Lu(r).getState().internal,f=d.interaction.indexOf(r);f>-1&&d.interaction.splice(f,1),n.eventCount&&d.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&Tp(r),r}function Fo(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function Tp(r){r.onUpdate==null||r.onUpdate(r)}function $R(r,e){r.manual||(oA(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function xu(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function eB(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Go.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Go.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Go.ContinuousEventPriority;default:return Go.DefaultEventPriority}}function dA(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function tB(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{dA(t.capturedMap,e,n,i)})}function nB(r){function e(u){const{internal:h}=r.getState(),d=u.offsetX-h.initialClick[0],f=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(d*d+f*f))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(d=>{var f;return(f=h.__r3f)==null?void 0:f.handlers["onPointer"+d]}))}function n(u,h){const d=r.getState(),f=new Set,m=[],g=h?h(d.internal.interaction):d.internal.interaction;for(let y=0;y<g.length;y++){const E=Ua(g[y]);E&&(E.raycaster.camera=void 0)}d.previousRoot||d.events.compute==null||d.events.compute(u,d);function _(y){const E=Ua(y);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var S;E.events.compute==null||E.events.compute(u,E,(S=E.previousRoot)==null?void 0:S.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(y,!0):[]}let A=g.flatMap(_).sort((y,E)=>{const S=Ua(y.object),C=Ua(E.object);return!S||!C?y.distance-E.distance:C.events.priority-S.events.priority||y.distance-E.distance}).filter(y=>{const E=xu(y);return f.has(E)?!1:(f.add(E),!0)});d.events.filter&&(A=d.events.filter(A,d));for(const y of A){let E=y.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({...y,eventObject:E}),E=E.parent}}if("pointerId"in u&&d.internal.capturedMap.has(u.pointerId))for(let y of d.internal.capturedMap.get(u.pointerId).values())f.has(xu(y.intersection))||m.push(y.intersection);return m}function i(u,h,d,f){const m=r.getState();if(u.length){const g={stopped:!1};for(const _ of u){const A=Ua(_.object)||m,{raycaster:x,pointer:y,camera:E,internal:S}=A,C=new D(y.x,y.y,0).unproject(E),F=T=>{var L,X;return(L=(X=S.capturedMap.get(T))==null?void 0:X.has(_.eventObject))!=null?L:!1},R=T=>{const L={intersection:_,target:h.target};S.capturedMap.has(T)?S.capturedMap.get(T).set(_.eventObject,L):S.capturedMap.set(T,new Map([[_.eventObject,L]])),h.target.setPointerCapture(T)},I=T=>{const L=S.capturedMap.get(T);L&&dA(S.capturedMap,_.eventObject,L,T)};let U={};for(let T in h){let L=h[T];typeof L!="function"&&(U[T]=L)}let b={..._,...U,pointer:y,intersections:u,stopped:g.stopped,delta:d,unprojectedPoint:C,ray:x.ray,camera:E,stopPropagation(){const T="pointerId"in h&&S.capturedMap.get(h.pointerId);if((!T||T.has(_.eventObject))&&(b.stopped=g.stopped=!0,S.hovered.size&&Array.from(S.hovered.values()).find(L=>L.eventObject===_.eventObject))){const L=u.slice(0,u.indexOf(_));s([...L,_])}},target:{hasPointerCapture:F,setPointerCapture:R,releasePointerCapture:I},currentTarget:{hasPointerCapture:F,setPointerCapture:R,releasePointerCapture:I},nativeEvent:h};if(f(b),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const d of h.hovered.values())if(!u.length||!u.find(f=>f.object===d.object&&f.index===d.index&&f.instanceId===d.instanceId)){const m=d.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(xu(d)),m!=null&&m.eventCount){const _={...d,intersections:u};g.onPointerOut==null||g.onPointerOut(_),g.onPointerLeave==null||g.onPointerLeave(_)}}}function o(u,h){for(let d=0;d<h.length;d++){const f=h[d].__r3f;f==null||f.handlers.onPointerMissed==null||f.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:d}=r.getState();"pointerId"in h&&d.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{d.capturedMap.has(h.pointerId)&&(d.capturedMap.delete(h.pointerId),s([]))})}}return function(d){const{onPointerMissed:f,internal:m}=r.getState();m.lastEvent.current=d;const g=u==="onPointerMove",_=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(d,g?t:void 0),y=_?e(d):0;u==="onPointerDown"&&(m.initialClick=[d.offsetX,d.offsetY],m.initialHits=x.map(S=>S.eventObject)),_&&!x.length&&y<=2&&(o(d,m.interaction),f&&f(d)),g&&s(x);function E(S){const C=S.eventObject,F=C.__r3f,R=F==null?void 0:F.handlers;if(F!=null&&F.eventCount)if(g){if(R.onPointerOver||R.onPointerEnter||R.onPointerOut||R.onPointerLeave){const I=xu(S),U=m.hovered.get(I);U?U.stopped&&S.stopPropagation():(m.hovered.set(I,S),R.onPointerOver==null||R.onPointerOver(S),R.onPointerEnter==null||R.onPointerEnter(S))}R.onPointerMove==null||R.onPointerMove(S)}else{const I=R[u];I?(!_||m.initialHits.includes(C))&&(o(d,m.interaction.filter(U=>!m.initialHits.includes(U))),I(S)):_&&m.initialHits.includes(C)&&o(d,m.interaction.filter(U=>!m.initialHits.includes(U)))}}i(x,d,y,E)}}return{handlePointer:c}}const fA=r=>!!(r!=null&&r.render),pA=ge.createContext(null),iB=(r,e)=>{const t=FR((c,u)=>{const h=new D,d=new D,f=new D;function m(y=u().camera,E=d,S=u().size){const{width:C,height:F,top:R,left:I}=S,U=C/F;E instanceof D?f.copy(E):f.set(...E);const b=y.getWorldPosition(h).distanceTo(f);if(oA(y))return{width:C/y.zoom,height:F/y.zoom,top:R,left:I,factor:1,distance:b,aspect:U};{const T=y.fov*Math.PI/180,L=2*Math.tan(T/2)*b,X=L*(C/F);return{width:X,height:L,top:R,left:I,factor:C/X,distance:b,aspect:U}}}let g;const _=y=>c(E=>({performance:{...E.performance,current:y}})),A=new he;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(y=1)=>r(u(),y),advance:(y,E)=>e(y,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Em,pointer:A,mouse:A,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const y=u();g&&clearTimeout(g),y.performance.current!==y.performance.min&&_(y.performance.min),g=setTimeout(()=>_(u().performance.max),y.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:y=>c(E=>({...E,events:{...E.events,...y}})),setSize:(y,E,S,C,F)=>{const R=u().camera,I={width:y,height:E,top:C||0,left:F||0,updateStyle:S};c(U=>({size:I,viewport:{...U.viewport,...m(R,d,I)}}))},setDpr:y=>c(E=>{const S=uA(y);return{viewport:{...E.viewport,dpr:S,initialDpr:E.viewport.initialDpr||S}}}),setFrameloop:(y="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,y!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:y}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:ge.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(y,E,S)=>{const C=u().internal;return C.priority=C.priority+(E>0?1:0),C.subscribers.push({ref:y,priority:E,store:S}),C.subscribers=C.subscribers.sort((F,R)=>F.priority-R.priority),()=>{const F=u().internal;F!=null&&F.subscribers&&(F.priority=F.priority-(E>0?1:0),F.subscribers=F.subscribers.filter(R=>R.ref!==y))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,o=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:d,set:f}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,$R(c,u),d.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&d.domElement instanceof HTMLCanvasElement;d.setSize(u.width,u.height,g)}c!==o&&(o=c,f(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};function rB(r,e){const t={callback:r};return e.add(t),()=>void e.delete(t)}let Au,mA=new Set,sB=new Set,oB=new Set;const _P=r=>rB(r,mA);function Cf(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Na(r,e){switch(r){case"before":return Cf(mA,e);case"after":return Cf(sB,e);case"tail":return Cf(oB,e)}}let Tf,bf;function Rf(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Tf=e.internal.subscribers,Au=0;Au<Tf.length;Au++)bf=Tf[Au],bf.ref.current(bf.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function aB(r){let e=!1,t=!1,n,i,s;function o(h){i=requestAnimationFrame(o),e=!0,n=0,Na("before",h),t=!0;for(const f of r.values()){var d;s=f.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((d=s.gl.xr)!=null&&d.isPresenting)&&(n+=Rf(h,s))}if(t=!1,Na("after",h),n===0)return Na("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,d=1){var f;if(!h)return r.forEach(m=>c(m.store.getState(),d));(f=h.gl.xr)!=null&&f.isPresenting||!h.internal.active||h.frameloop==="never"||(d>1?h.internal.frames=Math.min(60,h.internal.frames+d):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(o)))}function u(h,d=!0,f,m){if(d&&Na("before",h),f)Rf(h,f,m);else for(const g of r.values())Rf(h,g.store.getState());d&&Na("after",h)}return{loop:o,invalidate:c,advance:u}}function gA(){const r=ge.useContext(pA);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function lB(r=t=>t,e){return gA()(r,e)}function vA(r,e=0){const t=gA(),n=t.getState().internal.subscribe,i=aA(r);return Cl(()=>n(i,e,t),[e,n,t]),null}const h_=new WeakMap;function _A(r,e){return function(t,...n){let i=h_.get(t);return i||(i=new t,h_.set(t,i)),r&&r(i),Promise.all(n.map(s=>new Promise((o,c)=>i.load(s,u=>{u.scene&&Object.assign(u,QR(u.scene)),o(u)},e,u=>c(new Error(`Could not load ${s}: ${u==null?void 0:u.message}`))))))}}function Tl(r,e,t,n){const i=Array.isArray(e)?e:[e],s=zR(_A(t,n),[r,...i],{equal:Gt.equ});return Array.isArray(e)?s:s[0]}Tl.preload=function(r,e,t){const n=Array.isArray(e)?e:[e];return VR(_A(t),[r,...n])};Tl.clear=function(r,e){const t=Array.isArray(e)?e:[e];return WR([r,...t])};const Qo=new Map,{invalidate:d_,advance:f_}=aB(Qo),{reconciler:zu,applyProps:Io}=JR(Qo,eB),Po={objects:"shallow",strict:!1},cB=(r,e)=>{const t=typeof r=="function"?r(e):r;return fA(t)?t:new cx({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function uB(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:o,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:o,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:o}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function hB(r){const e=Qo.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||iB(d_,f_),o=t||zu.createContainer(s,Go.ConcurrentRoot,null,!1,null,"",i,null);e||Qo.set(r,{fiber:o,store:s});let c,u=!1,h;return{configure(d={}){let{gl:f,size:m,scene:g,events:_,onCreated:A,shadows:x=!1,linear:y=!1,flat:E=!1,legacy:S=!1,orthographic:C=!1,frameloop:F="always",dpr:R=[1,2],performance:I,raycaster:U,camera:b,onPointerMissed:T}=d,L=s.getState(),X=L.gl;L.gl||L.set({gl:X=cB(f,r)});let J=L.raycaster;J||L.set({raycaster:J=new Zx});const{params:Z,...ie}=U||{};if(Gt.equ(ie,J,Po)||Io(J,{...ie}),Gt.equ(Z,J.params,Po)||Io(J,{params:{...J.params,...Z}}),!L.camera||L.camera===h&&!Gt.equ(h,b,Po)){h=b;const K=b instanceof vl,re=K?b:C?new Zr(0,0,0,0,.1,1e3):new en(75,0,.1,1e3);K||(re.position.z=5,b&&(Io(re,b),("aspect"in b||"left"in b||"right"in b||"bottom"in b||"top"in b)&&(re.manual=!0,re.updateProjectionMatrix())),!L.camera&&!(b!=null&&b.rotation)&&re.lookAt(0,0,0)),L.set({camera:re}),J.camera=re}if(!L.scene){let K;g instanceof Ou?K=g:(K=new Ou,g&&Io(K,g)),L.set({scene:Do(K)})}if(!L.xr){var Q;const K=(De,ne)=>{const fe=s.getState();fe.frameloop!=="never"&&f_(De,!0,fe,ne)},re=()=>{const De=s.getState();De.gl.xr.enabled=De.gl.xr.isPresenting,De.gl.xr.setAnimationLoop(De.gl.xr.isPresenting?K:null),De.gl.xr.isPresenting||d_(De)},ye={connect(){const De=s.getState().gl;De.xr.addEventListener("sessionstart",re),De.xr.addEventListener("sessionend",re)},disconnect(){const De=s.getState().gl;De.xr.removeEventListener("sessionstart",re),De.xr.removeEventListener("sessionend",re)}};typeof((Q=X.xr)==null?void 0:Q.addEventListener)=="function"&&ye.connect(),L.set({xr:ye})}if(X.shadowMap){const K=X.shadowMap.enabled,re=X.shadowMap.type;if(X.shadowMap.enabled=!!x,Gt.boo(x))X.shadowMap.type=ka;else if(Gt.str(x)){var ce;const ye={basic:k_,percentage:Qu,soft:ka,variance:bi};X.shadowMap.type=(ce=ye[x])!=null?ce:ka}else Gt.obj(x)&&Object.assign(X.shadowMap,x);(K!==X.shadowMap.enabled||re!==X.shadowMap.type)&&(X.shadowMap.needsUpdate=!0)}const N=sA();N&&("enabled"in N?N.enabled=!S:"legacyMode"in N&&(N.legacyMode=S)),u||Io(X,{outputEncoding:y?3e3:3001,toneMapping:E?Ji:Op}),L.legacy!==S&&L.set(()=>({legacy:S})),L.linear!==y&&L.set(()=>({linear:y})),L.flat!==E&&L.set(()=>({flat:E})),f&&!Gt.fun(f)&&!fA(f)&&!Gt.equ(f,X,Po)&&Io(X,f),_&&!L.events.handlers&&L.set({events:_(s)});const Y=uB(r,m);return Gt.equ(Y,L.size,Po)||L.setSize(Y.width,Y.height,Y.updateStyle,Y.top,Y.left),R&&L.viewport.dpr!==uA(R)&&L.setDpr(R),L.frameloop!==F&&L.setFrameloop(F),L.onPointerMissed||L.set({onPointerMissed:T}),I&&!Gt.equ(I,L.performance,Po)&&L.set(K=>({performance:{...K.performance,...I}})),c=A,u=!0,this},render(d){return u||this.configure(),zu.updateContainer(Xn.jsx(dB,{store:s,children:d,onCreated:c,rootElement:r}),o,null,()=>{}),s},unmount(){yA(r)}}}function dB({store:r,children:e,onCreated:t,rootElement:n}){return Cl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Xn.jsx(pA.Provider,{value:r,children:e})}function yA(r,e){const t=Qo.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),zu.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,o,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),ZR(i),Qo.delete(r)}catch{}},500)})}}zu.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:ge.version});function bp(r,e,t){var n,i,s,o,c;e==null&&(e=100);function u(){var d=Date.now()-o;d<e&&d>=0?n=setTimeout(u,e-d):(n=null,t||(c=r.apply(s,i),s=i=null))}var h=function(){s=this,i=arguments,o=Date.now();var d=t&&!n;return n||(n=setTimeout(u,e)),d&&(c=r.apply(s,i),s=i=null),c};return h.clear=function(){n&&(clearTimeout(n),n=null)},h.flush=function(){n&&(c=r.apply(s,i),s=i=null,clearTimeout(n),n=null)},h}bp.debounce=bp;var fB=bp;const p_=O_(fB);function pB(r){let{debounce:e,scroll:t,polyfill:n,offsetSize:i}=r===void 0?{debounce:0,scroll:!1,offsetSize:!1}:r;const s=n||(typeof window>"u"?class{}:window.ResizeObserver);if(!s)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,c]=ge.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),u=ge.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o}),h=e?typeof e=="number"?e:e.scroll:null,d=e?typeof e=="number"?e:e.resize:null,f=ge.useRef(!1);ge.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[m,g,_]=ge.useMemo(()=>{const E=()=>{if(!u.current.element)return;const{left:S,top:C,width:F,height:R,bottom:I,right:U,x:b,y:T}=u.current.element.getBoundingClientRect(),L={left:S,top:C,width:F,height:R,bottom:I,right:U,x:b,y:T};u.current.element instanceof HTMLElement&&i&&(L.height=u.current.element.offsetHeight,L.width=u.current.element.offsetWidth),Object.freeze(L),f.current&&!_B(u.current.lastBounds,L)&&c(u.current.lastBounds=L)};return[E,d?p_(E,d):E,h?p_(E,h):E]},[c,i,h,d]);function A(){u.current.scrollContainers&&(u.current.scrollContainers.forEach(E=>E.removeEventListener("scroll",_,!0)),u.current.scrollContainers=null),u.current.resizeObserver&&(u.current.resizeObserver.disconnect(),u.current.resizeObserver=null)}function x(){u.current.element&&(u.current.resizeObserver=new s(_),u.current.resizeObserver.observe(u.current.element),t&&u.current.scrollContainers&&u.current.scrollContainers.forEach(E=>E.addEventListener("scroll",_,{capture:!0,passive:!0})))}const y=E=>{!E||E===u.current.element||(A(),u.current.element=E,u.current.scrollContainers=xA(E),x())};return gB(_,!!t),mB(g),ge.useEffect(()=>{A(),x()},[t,_,g]),ge.useEffect(()=>A,[]),[y,o,m]}function mB(r){ge.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function gB(r,e){ge.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function xA(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...xA(r.parentElement)]}const vB=["x","y","top","bottom","left","right","width","height"],_B=(r,e)=>vB.every(t=>r[t]===e[t]);var yB=Object.defineProperty,xB=Object.defineProperties,AB=Object.getOwnPropertyDescriptors,m_=Object.getOwnPropertySymbols,MB=Object.prototype.hasOwnProperty,SB=Object.prototype.propertyIsEnumerable,g_=(r,e,t)=>e in r?yB(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,v_=(r,e)=>{for(var t in e||(e={}))MB.call(e,t)&&g_(r,t,e[t]);if(m_)for(var t of m_(e))SB.call(e,t)&&g_(r,t,e[t]);return r},EB=(r,e)=>xB(r,AB(e)),__,y_;typeof window<"u"&&((__=window.document)!=null&&__.createElement||((y_=window.navigator)==null?void 0:y_.product)==="ReactNative")?ge.useLayoutEffect:ge.useEffect;function AA(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=AA(n,e,t);if(i)return i;n=n.sibling}}function MA(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const x_=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=x_;return}return x_.apply(this,arguments)};const Rm=MA(ge.createContext(null));class SA extends ge.Component{render(){return ge.createElement(Rm.Provider,{value:this._reactInternals},this.props.children)}}function wB(){const r=ge.useContext(Rm);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=ge.useId();return ge.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=AA(n,!1,s=>{let o=s.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(i)return i}},[r,e])}function CB(){const r=wB(),[e]=ge.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==Rm&&!e.has(i)&&e.set(i,ge.useContext(MA(i)))}t=t.return}return e}function TB(){const r=CB();return ge.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>ge.createElement(e,null,ge.createElement(t.Provider,EB(v_({},n),{value:r.get(t)}))),e=>ge.createElement(SA,v_({},e))),[r])}const Bf={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function bB(r){const{handlePointer:e}=nB(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Bf).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(o=>({events:{...o.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([o,c])=>{const[u,h]=Bf[o];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,o])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Bf[s];n.connected.removeEventListener(c,o)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}const RB=ge.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:o=bB,eventSource:c,eventPrefix:u,shadows:h,linear:d,flat:f,legacy:m,orthographic:g,frameloop:_,dpr:A,performance:x,raycaster:y,camera:E,scene:S,onPointerMissed:C,onCreated:F,...R},I){ge.useMemo(()=>XR(PR),[]);const U=TB(),[b,T]=pB({scroll:!0,debounce:{scroll:50,resize:0},...n}),L=ge.useRef(null),X=ge.useRef(null);ge.useImperativeHandle(I,()=>L.current);const J=aA(C),[Z,ie]=ge.useState(!1),[Q,ce]=ge.useState(!1);if(Z)throw Z;if(Q)throw Q;const N=ge.useRef(null);Cl(()=>{const K=L.current;T.width>0&&T.height>0&&K&&(N.current||(N.current=hB(K)),N.current.configure({gl:s,events:o,shadows:h,linear:d,flat:f,legacy:m,orthographic:g,frameloop:_,dpr:A,performance:x,raycaster:y,camera:E,scene:S,size:T,onPointerMissed:(...re)=>J.current==null?void 0:J.current(...re),onCreated:re=>{re.events.connect==null||re.events.connect(c?KR(c)?c.current:c:X.current),u&&re.setEvents({compute:(ye,De)=>{const ne=ye[u+"X"],fe=ye[u+"Y"];De.pointer.set(ne/De.size.width*2-1,-(fe/De.size.height)*2+1),De.raycaster.setFromCamera(De.pointer,De.camera)}}),F==null||F(re)}}),N.current.render(Xn.jsx(U,{children:Xn.jsx(lA,{set:ce,children:Xn.jsx(ge.Suspense,{fallback:Xn.jsx(YR,{set:ie}),children:e})})})))}),ge.useEffect(()=>{const K=L.current;if(K)return()=>yA(K)},[]);const Y=c?"none":"auto";return Xn.jsx("div",{ref:X,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:Y,...i},...R,children:Xn.jsx("div",{ref:b,style:{width:"100%",height:"100%"},children:Xn.jsx("canvas",{ref:L,style:{display:"block"},children:t})})})}),xP=ge.forwardRef(function(e,t){return Xn.jsx(SA,{children:Xn.jsx(RB,{...e,ref:t})})});function Rp(){return Rp=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Rp.apply(null,arguments)}const bl=new D,Bm=new D,BB=new D,A_=new he;function IB(r,e,t){const n=bl.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]}function PB(r,e){const t=bl.setFromMatrixPosition(r.matrixWorld),n=Bm.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(BB);return i.angleTo(s)>Math.PI/2}function LB(r,e,t,n){const i=bl.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),A_.set(s.x,s.y),t.setFromCamera(A_,e);const o=t.intersectObjects(n,!0);if(o.length){const c=o[0].distance;return i.distanceTo(t.ray.origin)<c}return!0}function DB(r,e){if(e instanceof Zr)return e.zoom;if(e instanceof en){const t=bl.setFromMatrixPosition(r.matrixWorld),n=Bm.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function FB(r,e,t){if(e instanceof en||e instanceof Zr){const n=bl.setFromMatrixPosition(r.matrixWorld),i=Bm.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),o=(t[1]-t[0])/(e.far-e.near),c=t[1]-o*e.far;return Math.round(o*s+c)}}const Bp=r=>Math.abs(r)<1e-10?0:r;function EA(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=Bp(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const UB=(r=>e=>EA(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),NB=(r=>(e,t)=>EA(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function OB(r){return r&&typeof r=="object"&&"current"in r}const GB=ge.forwardRef(({children:r,eps:e=.001,style:t,className:n,prepend:i,center:s,fullscreen:o,portal:c,distanceFactor:u,sprite:h=!1,transform:d=!1,occlude:f,onOcclude:m,castShadow:g,receiveShadow:_,material:A,geometry:x,zIndexRange:y=[16777271,0],calculatePosition:E=IB,as:S="div",wrapperClass:C,pointerEvents:F="auto",...R},I)=>{const{gl:U,camera:b,scene:T,size:L,raycaster:X,events:J,viewport:Z}=lB(),[ie]=ge.useState(()=>document.createElement(S)),Q=ge.useRef(),ce=ge.useRef(null),N=ge.useRef(0),Y=ge.useRef([0,0]),K=ge.useRef(null),re=ge.useRef(null),ye=(c==null?void 0:c.current)||J.connected||U.domElement.parentNode,De=ge.useRef(null),ne=ge.useRef(!1),fe=ge.useMemo(()=>f&&f!=="blending"||Array.isArray(f)&&f.length&&OB(f[0]),[f]);ge.useLayoutEffect(()=>{const Ve=U.domElement;f&&f==="blending"?(Ve.style.zIndex=`${Math.floor(y[0]/2)}`,Ve.style.position="absolute",Ve.style.pointerEvents="none"):(Ve.style.zIndex=null,Ve.style.position=null,Ve.style.pointerEvents=null)},[f]),ge.useLayoutEffect(()=>{if(ce.current){const Ve=Q.current=HM(ie);if(T.updateMatrixWorld(),d)ie.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const H=E(ce.current,b,L);ie.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${H[0]}px,${H[1]}px,0);transform-origin:0 0;`}return ye&&(i?ye.prepend(ie):ye.appendChild(ie)),()=>{ye&&ye.removeChild(ie),Ve.unmount()}}},[ye,d]),ge.useLayoutEffect(()=>{C&&(ie.className=C)},[C]);const we=ge.useMemo(()=>d?{position:"absolute",top:0,left:0,width:L.width,height:L.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...o&&{top:-L.height/2,left:-L.width/2,width:L.width,height:L.height},...t},[t,s,o,L,d]),xe=ge.useMemo(()=>({position:"absolute",pointerEvents:F}),[F]);ge.useLayoutEffect(()=>{if(ne.current=!1,d){var Ve;(Ve=Q.current)==null||Ve.render(ge.createElement("div",{ref:K,style:we},ge.createElement("div",{ref:re,style:xe},ge.createElement("div",{ref:I,className:n,style:t,children:r}))))}else{var H;(H=Q.current)==null||H.render(ge.createElement("div",{ref:I,style:we,className:n,children:r}))}});const et=ge.useRef(!0);vA(Ve=>{if(ce.current){b.updateMatrixWorld(),ce.current.updateWorldMatrix(!0,!1);const H=d?Y.current:E(ce.current,b,L);if(d||Math.abs(N.current-b.zoom)>e||Math.abs(Y.current[0]-H[0])>e||Math.abs(Y.current[1]-H[1])>e){const le=PB(ce.current,b);let ae=!1;fe&&(Array.isArray(f)?ae=f.map(Be=>Be.current):f!=="blending"&&(ae=[T]));const Ae=et.current;if(ae){const Be=LB(ce.current,b,X,ae);et.current=Be&&!le}else et.current=!le;Ae!==et.current&&(m?m(!et.current):ie.style.display=et.current?"block":"none");const ve=Math.floor(y[0]/2),Me=f?fe?[y[0],ve]:[ve-1,0]:y;if(ie.style.zIndex=`${FB(ce.current,b,Me)}`,d){const[Be,Fe]=[L.width/2,L.height/2],nt=b.projectionMatrix.elements[5]*Fe,{isOrthographicCamera:G,top:B,left:ee,bottom:me,right:de}=b,_e=UB(b.matrixWorldInverse),Ke=G?`scale(${nt})translate(${Bp(-(de+ee)/2)}px,${Bp((B+me)/2)}px)`:`translateZ(${nt}px)`;let Ce=ce.current.matrixWorld;h&&(Ce=b.matrixWorldInverse.clone().transpose().copyPosition(Ce).scale(ce.current.scale),Ce.elements[3]=Ce.elements[7]=Ce.elements[11]=0,Ce.elements[15]=1),ie.style.width=L.width+"px",ie.style.height=L.height+"px",ie.style.perspective=G?"":`${nt}px`,K.current&&re.current&&(K.current.style.transform=`${Ke}${_e}translate(${Be}px,${Fe}px)`,re.current.style.transform=NB(Ce,1/((u||10)/400)))}else{const Be=u===void 0?1:DB(ce.current,b)*u;ie.style.transform=`translate3d(${H[0]}px,${H[1]}px,0) scale(${Be})`}Y.current=H,N.current=b.zoom}}if(!fe&&De.current&&!ne.current)if(d){if(K.current){const H=K.current.children[0];if(H!=null&&H.clientWidth&&H!=null&&H.clientHeight){const{isOrthographicCamera:le}=b;if(le||x)R.scale&&(Array.isArray(R.scale)?R.scale instanceof D?De.current.scale.copy(R.scale.clone().divideScalar(1)):De.current.scale.set(1/R.scale[0],1/R.scale[1],1/R.scale[2]):De.current.scale.setScalar(1/R.scale));else{const ae=(u||10)/400,Ae=H.clientWidth*ae,ve=H.clientHeight*ae;De.current.scale.set(Ae,ve,1)}ne.current=!0}}}else{const H=ie.children[0];if(H!=null&&H.clientWidth&&H!=null&&H.clientHeight){const le=1/Z.factor,ae=H.clientWidth*le,Ae=H.clientHeight*le;De.current.scale.set(ae,Ae,1),ne.current=!0}De.current.lookAt(Ve.camera.position)}});const it=ge.useMemo(()=>({vertexShader:d?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[d]);return ge.createElement("group",Rp({},R,{ref:ce}),f&&!fe&&ge.createElement("mesh",{castShadow:g,receiveShadow:_,ref:De},x||ge.createElement("planeGeometry",null),A||ge.createElement("shaderMaterial",{side:yi,vertexShader:it.vertexShader,fragmentShader:it.fragmentShader})))});function M_(r,e){if(e===Dy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Nu||e===Kp){let t=r.getIndex();if(t===null){const o=[],c=r.getAttribute("position");if(c!==void 0){for(let u=0;u<c.count;u++)o.push(u);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===Nu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const HB=parseInt(fl.replace(/\D+/g,""));function Vu(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Is="srgb",gr="srgb-linear",S_=3001,kB=3e3;class Im extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new JB(t)}),this.register(function(t){return new KB(t)}),this.register(function(t){return new nI(t)}),this.register(function(t){return new iI(t)}),this.register(function(t){return new rI(t)}),this.register(function(t){return new qB(t)}),this.register(function(t){return new QB(t)}),this.register(function(t){return new ZB(t)}),this.register(function(t){return new jB(t)}),this.register(function(t){return new XB(t)}),this.register(function(t){return new $B(t)}),this.register(function(t){return new YB(t)}),this.register(function(t){return new tI(t)}),this.register(function(t){return new eI(t)}),this.register(function(t){return new VB(t)}),this.register(function(t){return new sI(t)}),this.register(function(t){return new oI(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Xr.extractUrlBase(e);o=Xr.resolveURL(h,this.path)}else o=Xr.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},u=new ai(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{s.parse(h,o,function(d){t(d),s.manager.itemEnd(e)},c)}catch(d){c(d)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},c={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Vu(new Uint8Array(e.slice(0,4)))===wA){try{o[At.KHR_BINARY_GLTF]=new aI(e)}catch(d){i&&i(d);return}s=JSON.parse(o[At.KHR_BINARY_GLTF].content)}else s=JSON.parse(Vu(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new xI(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case At.KHR_MATERIALS_UNLIT:o[d]=new WB;break;case At.KHR_DRACO_MESH_COMPRESSION:o[d]=new lI(s,this.dracoLoader);break;case At.KHR_TEXTURE_TRANSFORM:o[d]=new cI;break;case At.KHR_MESH_QUANTIZATION:o[d]=new uI;break;default:f.indexOf(d)>=0&&c[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(c),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function zB(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const At={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class VB{constructor(e){this.parser=e,this.name=At.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const d=new Ie(16777215);u.color!==void 0&&d.setRGB(u.color[0],u.color[1],u.color[2],gr);const f=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new Mm(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Am(d),h.distance=f;break;case"spot":h=new xm(d),h.distance=f,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),h.decay=2,cr(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(u){return n._getNodeRef(t.cache,c,u)})}}class WB{constructor(){this.name=At.KHR_MATERIALS_UNLIT}getMaterialType(){return ri}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gr),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Is))}return Promise.all(i)}}class XB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class JB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(c,c)}return Promise.all(s)}}class KB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class YB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class qB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const c=o.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],gr)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Is)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class QB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ZB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(c[0],c[1],c[2],gr),Promise.all(s)}}class jB{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $B{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(c[0],c[1],c[2],gr),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Is)),Promise.all(s)}}class eI{constructor(e){this.parser=e,this.name=At.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class tI{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class nI{constructor(e){this.parser=e,this.name=At.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class iI{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=i.images[o.source];let u=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rI{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=i.images[o.source];let u=n.textureLoader;if(c.uri){const h=n.options.manager.getHandler(c.uri);h!==null&&(u=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sI{constructor(e){this.name=At.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const u=i.byteOffset||0,h=i.byteLength||0,d=i.count,f=i.byteStride,m=new Uint8Array(c,u,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,f,m,i.mode,i.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(d*f);return o.decodeGltfBuffer(new Uint8Array(g),d,f,m,i.mode,i.filter),g})})}else return null}}class oI{constructor(e){this.name=At.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==vi.TRIANGLES&&h.mode!==vi.TRIANGLE_STRIP&&h.mode!==vi.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,c=[],u={};for(const h in o)c.push(this.parser.getDependency("accessor",o[h]).then(d=>(u[h]=d,u[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const d=h.pop(),f=d.isGroup?d.children:[d],m=h[0].count,g=[];for(const _ of f){const A=new Ze,x=new D,y=new Tn,E=new D(1,1,1),S=new om(_.geometry,_.material,m);for(let C=0;C<m;C++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,C),u.ROTATION&&y.fromBufferAttribute(u.ROTATION,C),u.SCALE&&E.fromBufferAttribute(u.SCALE,C),S.setMatrixAt(C,A.compose(x,y,E));for(const C in u)if(C==="_COLOR_0"){const F=u[C];S.instanceColor=new Hs(F.array,F.itemSize,F.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&_.geometry.setAttribute(C,u[C]);Mt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),g.push(S)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const wA="glTF",Oa=12,E_={JSON:1313821514,BIN:5130562};class aI{constructor(e){this.name=At.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Oa);if(this.header={magic:Vu(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wA)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Oa,i=new DataView(e,Oa);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const c=i.getUint32(s,!0);if(s+=4,c===E_.JSON){const u=new Uint8Array(e,Oa+s,o);this.content=Vu(u)}else if(c===E_.BIN){const u=Oa+s;this.body=e.slice(u,u+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lI{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=At.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},u={},h={};for(const d in o){const f=Ip[d]||d.toLowerCase();c[f]=o[d]}for(const d in e.attributes){const f=Ip[d]||d.toLowerCase();if(o[d]!==void 0){const m=n.accessors[e.attributes[d]],g=zo[m.componentType];h[f]=g.name,u[f]=m.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(f,m){i.decodeDracoFile(d,function(g){for(const _ in g.attributes){const A=g.attributes[_],x=u[_];x!==void 0&&(A.normalized=x)}f(g)},c,h,gr,m)})})}}class cI{constructor(){this.name=At.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uI{constructor(){this.name=At.KHR_MESH_QUANTIZATION}}class CA extends na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=c*2,h=c*3,d=i-t,f=(n-t)/d,m=f*f,g=m*f,_=e*h,A=_-h,x=-2*g+3*m,y=g-m,E=1-x,S=y-m+f;for(let C=0;C!==c;C++){const F=o[A+C+c],R=o[A+C+u]*d,I=o[_+C+c],U=o[_+C]*d;s[C]=E*F+S*R+x*I+y*U}return s}}const hI=new Tn;class dI extends CA{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return hI.fromArray(s).normalize().toArray(s),s}}const vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},w_={9728:hn,9729:Qt,9984:ju,9985:Ho,9986:ws,9987:Ai},C_={33071:ni,33648:Wo,10497:Yr},If={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ip={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...HB>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fI={CUBICSPLINE:void 0,LINEAR:Jo,STEP:Xo},Pf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pI(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new wl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),r.DefaultMaterial}function As(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function cr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mI(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,d=e.length;h<d;h++){const f=e[h];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],c=[],u=[];for(let h=0,d=e.length;h<d;h++){const f=e[h];if(n){const m=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(m)}if(i){const m=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;c.push(m)}if(s){const m=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;u.push(m)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=m),r.morphTargetsRelative=!0,r})}function gI(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vI(r){let e;const t=r.extensions&&r.extensions[At.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lf(t.attributes):e=r.indices+":"+Lf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Lf(r.targets[n]);return e}function Lf(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _I(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const yI=new Ze;class xI{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zB,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ox(this.options.manager):this.textureLoader=new Jx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ai(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const c={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return As(s,c,i),cr(c,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(c)})).then(function(){for(const u of c.scenes)u.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let c=0,u=o.length;c<u;c++)e[o[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,c)=>{const u=this.associations.get(o);u!=null&&this.associations.set(c,u);for(const[h,d]of o.children.entries())s(d,c.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[At.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Xr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=If[i.type],c=zo[i.componentType],u=i.normalized===!0,h=new c(i.count*o);return Promise.resolve(new Ct(h,o,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const c=o[0],u=If[i.type],h=zo[i.componentType],d=h.BYTES_PER_ELEMENT,f=d*u,m=i.byteOffset||0,g=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let A,x;if(g&&g!==f){const y=Math.floor(m/g),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+y+":"+i.count;let S=t.cache.get(E);S||(A=new h(c,y*g,i.count*g/d),S=new xl(A,g/d),t.cache.add(E,S)),x=new qr(S,u,m%g/d,_)}else c===null?A=new h(i.count*u):A=new h(c,m,i.count*u),x=new Ct(A,u,_);if(i.sparse!==void 0){const y=If.SCALAR,E=zo[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,C=i.sparse.values.byteOffset||0,F=new E(o[1],S,i.sparse.count*y),R=new h(o[2],C,i.sparse.count*u);c!==null&&(x=new Ct(x.array.slice(),x.itemSize,x.normalized));for(let I=0,U=F.length;I<U;I++){const b=F[I];if(x.setX(b,R[I*u]),u>=2&&x.setY(b,R[I*u+1]),u>=3&&x.setZ(b,R[I*u+2]),u>=4&&x.setW(b,R[I*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let c=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(c=u)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],c=s.images[t],u=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||c.name||"",d.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(d.name=c.uri);const m=(s.samplers||{})[o.sampler]||{};return d.magFilter=w_[m.magFilter]||Qt,d.minFilter=w_[m.minFilter]||Ai,d.wrapS=C_[m.wrapS]||Yr,d.wrapT=C_[m.wrapT]||Yr,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],c=self.URL||self.webkitURL;let u=o.uri||"",h=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){h=!0;const m=new Blob([f],{type:o.mimeType});return u=c.createObjectURL(m),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(f){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=function(A){const x=new Ht(A);x.needsUpdate=!0,m(x)}),t.load(Xr.resolveURL(f,s.path),_,void 0,g)})}).then(function(f){return h===!0&&c.revokeObjectURL(u),cr(f,o),f.userData.mimeType=o.mimeType||_I(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[At.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[At.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const u=s.associations.get(o);o=s.extensions[At.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),s.associations.set(o,u)}}return i!==void 0&&(typeof i=="number"&&(i=i===S_?Is:gr),"colorSpace"in o?o.colorSpace=i:o.encoding=i===Is?S_:kB),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new oh,ln.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(c,u)),n=u}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Rn,ln.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(c,u)),n=u}if(i||s||o){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let u=this.cache.get(c);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(c,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return wl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const c={},u=s.extensions||{},h=[];if(u[At.KHR_MATERIALS_UNLIT]){const f=i[At.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),h.push(f.extendParams(c,s,t))}else{const f=s.pbrMetallicRoughness||{};if(c.color=new Ie(1,1,1),c.opacity=1,Array.isArray(f.baseColorFactor)){const m=f.baseColorFactor;c.color.setRGB(m[0],m[1],m[2],gr),c.opacity=m[3]}f.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",f.baseColorTexture,Is)),c.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,c.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=yi);const d=s.alphaMode||Pf.OPAQUE;if(d===Pf.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===Pf.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ri&&(h.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;c.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ri&&(h.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ri){const f=s.emissiveFactor;c.emissive=new Ie().setRGB(f[0],f[1],f[2],gr)}return s.emissiveTexture!==void 0&&o!==ri&&h.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,Is)),Promise.all(h).then(function(){const f=new o(c);return s.name&&(f.name=s.name),cr(f,s),t.associations.set(f,{materials:e}),s.extensions&&As(i,f,s),f})}createUniqueName(e){const t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[At.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(u){return T_(u,c,t)})}const o=[];for(let c=0,u=e.length;c<u;c++){const h=e[c],d=vI(h),f=i[d];if(f)o.push(f.promise);else{let m;h.extensions&&h.extensions[At.KHR_DRACO_MESH_COMPRESSION]?m=s(h):m=T_(new ct,h,t),i[d]={primitive:h,promise:m},o.push(m)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,c=[];for(let u=0,h=o.length;u<h;u++){const d=o[u].material===void 0?pI(this.cache):this.getDependency("material",o[u].material);c.push(d)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(u){const h=u.slice(0,u.length-1),d=u[u.length-1],f=[];for(let g=0,_=d.length;g<_;g++){const A=d[g],x=o[g];let y;const E=h[g];if(x.mode===vi.TRIANGLES||x.mode===vi.TRIANGLE_STRIP||x.mode===vi.TRIANGLE_FAN||x.mode===void 0)y=s.isSkinnedMesh===!0?new sm(A,E):new tn(A,E),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),x.mode===vi.TRIANGLE_STRIP?y.geometry=M_(y.geometry,Kp):x.mode===vi.TRIANGLE_FAN&&(y.geometry=M_(y.geometry,Nu));else if(x.mode===vi.LINES)y=new Li(A,E);else if(x.mode===vi.LINE_STRIP)y=new yr(A,E);else if(x.mode===vi.LINE_LOOP)y=new am(A,E);else if(x.mode===vi.POINTS)y=new lm(A,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(y.geometry.morphAttributes).length>0&&gI(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),cr(y,s),x.extensions&&As(i,y,x),t.assignFinalMaterial(y),f.push(y)}for(let g=0,_=f.length;g<_;g++)t.associations.set(f[g],{meshes:e,primitives:g});if(f.length===1)return s.extensions&&As(i,f[0],s),f[0];const m=new dr;s.extensions&&As(i,m,s),t.associations.set(m,{meshes:e});for(let g=0,_=f.length;g<_;g++)m.add(f[g]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Xy.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),cr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,c=[],u=[];for(let h=0,d=o.length;h<d;h++){const f=o[h];if(f){c.push(f);const m=new Ze;s!==null&&m.fromArray(s.array,h*16),u.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Al(c,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],c=[],u=[],h=[],d=[];for(let f=0,m=i.channels.length;f<m;f++){const g=i.channels[f],_=i.samplers[g.sampler],A=g.target,x=A.node,y=i.parameters!==void 0?i.parameters[_.input]:_.input,E=i.parameters!==void 0?i.parameters[_.output]:_.output;A.node!==void 0&&(o.push(this.getDependency("node",x)),c.push(this.getDependency("accessor",y)),u.push(this.getDependency("accessor",E)),h.push(_),d.push(A))}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(f){const m=f[0],g=f[1],_=f[2],A=f[3],x=f[4],y=[];for(let E=0,S=m.length;E<S;E++){const C=m[E],F=g[E],R=_[E],I=A[E],U=x[E];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=n._createAnimationTracks(C,F,R,I,U);if(b)for(let T=0;T<b.length;T++)y.push(b[T])}return new qo(s,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let u=0,h=i.weights.length;u<h;u++)c.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],c=i.children||[];for(let h=0,d=c.length;h<d;h++)o.push(n.getDependency("node",c[h]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),u]).then(function(h){const d=h[0],f=h[1],m=h[2];m!==null&&d.traverse(function(g){g.isSkinnedMesh&&g.bind(m,yI)});for(let g=0,_=f.length;g<_;g++)d.add(f[g]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",c=[],u=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&c.push(u),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let d;if(s.isBone===!0?d=new sh:h.length>1?d=new dr:h.length===1?d=h[0]:d=new Mt,d!==h[0])for(let f=0,m=h.length;f<m;f++)d.add(h[f]);if(s.name&&(d.userData.name=s.name,d.name=o),cr(d,s),s.extensions&&As(n,d,s),s.matrix!==void 0){const f=new Ze;f.fromArray(s.matrix),d.applyMatrix4(f)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new dr;n.name&&(s.name=i.createUniqueName(n.name)),cr(s,n),n.extensions&&As(t,s,n);const o=n.nodes||[],c=[];for(let u=0,h=o.length;u<h;u++)c.push(i.getDependency("node",o[u]));return Promise.all(c).then(function(u){for(let d=0,f=u.length;d<f;d++)s.add(u[d]);const h=d=>{const f=new Map;for(const[m,g]of i.associations)(m instanceof ln||m instanceof Ht)&&f.set(m,g);return d.traverse(m=>{const g=i.associations.get(m);g!=null&&f.set(m,g)}),f};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],c=e.name?e.name:e.uuid,u=[];Hr[s.path]===Hr.weights?e.traverse(function(m){m.morphTargetInfluences&&u.push(m.name?m.name:m.uuid)}):u.push(c);let h;switch(Hr[s.path]){case Hr.weights:h=zs;break;case Hr.rotation:h=Vs;break;case Hr.position:case Hr.scale:h=Ws;break;default:switch(n.itemSize){case 1:h=zs;break;case 2:case 3:default:h=Ws;break}break}const d=i.interpolation!==void 0?fI[i.interpolation]:Jo,f=this._getArrayFromAccessor(n);for(let m=0,g=u.length;m<g;m++){const _=new h(u[m]+"."+Hr[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pp(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vs?dI:CA;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AI(r,e,t){const n=e.attributes,i=new bn;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],u=c.min,h=c.max;if(u!==void 0&&h!==void 0){if(i.set(new D(u[0],u[1],u[2]),new D(h[0],h[1],h[2])),c.normalized){const d=Pp(zo[c.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new D,u=new D;for(let h=0,d=s.length;h<d;h++){const f=s[h];if(f.POSITION!==void 0){const m=t.json.accessors[f.POSITION],g=m.min,_=m.max;if(g!==void 0&&_!==void 0){if(u.setX(Math.max(Math.abs(g[0]),Math.abs(_[0]))),u.setY(Math.max(Math.abs(g[1]),Math.abs(_[1]))),u.setZ(Math.max(Math.abs(g[2]),Math.abs(_[2]))),m.normalized){const A=Pp(zo[m.componentType]);u.multiplyScalar(A)}c.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const o=new yn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function T_(r,e,t){const n=e.attributes,i=[];function s(o,c){return t.getDependency("accessor",o).then(function(u){r.setAttribute(c,u)})}for(const o in n){const c=Ip[o]||o.toLowerCase();c in r.attributes||i.push(s(n[o],c))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(o)}return cr(r,e),AI(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mI(r,e.targets,t):r})}const Df=new WeakMap;class MI extends Bn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ai(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{const c={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(o,c).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){for(const u in t.attributeTypes){const h=t.attributeTypes[u];h.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[u]=h.name)}const n=JSON.stringify(t);if(Df.has(e)){const u=Df.get(e);if(u.key===n)return u.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,c=this._getWorker(s,o).then(u=>(i=u,new Promise((h,d)=>{i._callbacks[s]={resolve:h,reject:d},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(u=>this._createGeometry(u.geometry));return c.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Df.set(e,{key:n,promise:c}),c}_createGeometry(e){const t=new ct;e.index&&t.setIndex(new Ct(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,c=i.itemSize;t.setAttribute(s,new Ct(o,c))}return t}_loadLibrary(e,t){const n=new ai(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=SI.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function SI(){let r,e;onmessage=function(o){const c=o.data;switch(c.type){case"init":r=c.decoderConfig,e=new Promise(function(d){r.onModuleLoaded=function(f){d({draco:f})},DracoDecoderModule(r)});break;case"decode":const u=c.buffer,h=c.taskConfig;e.then(d=>{const f=d.draco,m=new f.Decoder,g=new f.DecoderBuffer;g.Init(new Int8Array(u),u.byteLength);try{const _=t(f,m,g,h),A=_.attributes.map(x=>x.array.buffer);_.index&&A.push(_.index.array.buffer),self.postMessage({type:"decode",id:c.id,geometry:_},A)}catch(_){console.error(_),self.postMessage({type:"error",id:c.id,error:_.message})}finally{f.destroy(g),f.destroy(m)}});break}};function t(o,c,u,h){const d=h.attributeIDs,f=h.attributeTypes;let m,g;const _=c.GetEncodedGeometryType(u);if(_===o.TRIANGULAR_MESH)m=new o.Mesh,g=c.DecodeBufferToMesh(u,m);else if(_===o.POINT_CLOUD)m=new o.PointCloud,g=c.DecodeBufferToPointCloud(u,m);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!g.ok()||m.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+g.error_msg());const A={index:null,attributes:[]};for(const x in d){const y=self[f[x]];let E,S;if(h.useUniqueIDs)S=d[x],E=c.GetAttributeByUniqueId(m,S);else{if(S=c.GetAttributeId(m,o[d[x]]),S===-1)continue;E=c.GetAttribute(m,S)}A.attributes.push(i(o,c,m,x,y,E))}return _===o.TRIANGULAR_MESH&&(A.index=n(o,c,m)),o.destroy(m),A}function n(o,c,u){const d=u.num_faces()*3,f=d*4,m=o._malloc(f);c.GetTrianglesUInt32Array(u,f,m);const g=new Uint32Array(o.HEAPF32.buffer,m,d).slice();return o._free(m),{array:g,itemSize:1}}function i(o,c,u,h,d,f){const m=f.num_components(),_=u.num_points()*m,A=_*d.BYTES_PER_ELEMENT,x=s(o,d),y=o._malloc(A);c.GetAttributeDataArrayForAllPoints(u,f,x,A,y);const E=new d(o.HEAPF32.buffer,y,_).slice();return o._free(y),{name:h,array:E,itemSize:m}}function s(o,c){switch(c){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}let Mu;const Ff=()=>{if(Mu)return Mu;const r="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",e="B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let i=r;WebAssembly.validate(t)&&(i=e);let s;const o=WebAssembly.instantiate(c(i),{}).then(f=>{s=f.instance,s.exports.__wasm_call_ctors()});function c(f){const m=new Uint8Array(f.length);for(let _=0;_<f.length;++_){const A=f.charCodeAt(_);m[_]=A>96?A-71:A>64?A-65:A>47?A+4:A>46?63:62}let g=0;for(let _=0;_<f.length;++_)m[g++]=m[_]<60?n[m[_]]:(m[_]-60)*64+m[++_];return m.buffer.slice(0,g)}function u(f,m,g,_,A,x){const y=s.exports.sbrk,E=g+3&-4,S=y(E*_),C=y(A.length),F=new Uint8Array(s.exports.memory.buffer);F.set(A,C);const R=f(S,g,_,C,A.length);if(R===0&&x&&x(S,E,_),m.set(F.subarray(S,S+g*_)),y(S-y(0)),R!==0)throw new Error(`Malformed buffer data: ${R}`)}const h={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return Mu={ready:o,supported:!0,decodeVertexBuffer(f,m,g,_,A){u(s.exports.meshopt_decodeVertexBuffer,f,m,g,_,s.exports[h[A]])},decodeIndexBuffer(f,m,g,_){u(s.exports.meshopt_decodeIndexBuffer,f,m,g,_)},decodeIndexSequence(f,m,g,_){u(s.exports.meshopt_decodeIndexSequence,f,m,g,_)},decodeGltfBuffer(f,m,g,_,A,x){u(s.exports[d[A]],f,m,g,_,s.exports[h[x]])}},Mu};let Su=null,TA="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function bA(r,e,t){return n=>{t&&t(n),r&&(Su||(Su=new MI),Su.setDecoderPath(typeof r=="string"?r:TA),n.setDRACOLoader(Su)),e&&n.setMeshoptDecoder(typeof Ff=="function"?Ff():Ff)}}function Pm(r,e=!0,t=!0,n){return Tl(Im,r,bA(e,t,n))}Pm.preload=(r,e=!0,t=!0,n)=>Tl.preload(Im,r,bA(e,t,n));Pm.clear=r=>Tl.clear(Im,r);Pm.setDecoderPath=r=>{TA=r};function AP(r,e){const t=ge.useRef(),[n]=ge.useState(()=>e?e instanceof Mt?{current:e}:e:t),[i]=ge.useState(()=>new Qx(void 0));ge.useLayoutEffect(()=>{e&&(n.current=e instanceof Mt?e:e.current),i._root=n.current});const s=ge.useRef({}),o=ge.useMemo(()=>{const c={};return r.forEach(u=>Object.defineProperty(c,u.name,{enumerable:!0,get(){if(n.current)return s.current[u.name]||(s.current[u.name]=i.clipAction(u,n.current))},configurable:!0})),{ref:n,clips:r,actions:c,names:r.map(u=>u.name),mixer:i}},[r]);return vA((c,u)=>i.update(u)),ge.useEffect(()=>{const c=n.current;return()=>{s.current={},i.stopAllAction(),Object.values(o.actions).forEach(u=>{c&&i.uncacheAction(u,c)})}},[r]),o}const MP=()=>Xn.jsx(GB,{children:Xn.jsx("div",{className:"flex justify-center items-center",children:Xn.jsx("div",{className:"w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"})})});var Lm=Bl(),bt=r=>Rl(r,Lm),Dm=Bl();bt.write=r=>Rl(r,Dm);var Sh=Bl();bt.onStart=r=>Rl(r,Sh);var Fm=Bl();bt.onFrame=r=>Rl(r,Fm);var Um=Bl();bt.onFinish=r=>Rl(r,Um);var Vo=[];bt.setTimeout=(r,e)=>{const t=bt.now()+e,n=()=>{const s=Vo.findIndex(o=>o.cancel==n);~s&&Vo.splice(s,1),Wr-=~s?1:0},i={time:t,handler:r,cancel:n};return Vo.splice(RA(t),0,i),Wr+=1,BA(),i};var RA=r=>~(~Vo.findIndex(e=>e.time>r)||~Vo.length);bt.cancel=r=>{Sh.delete(r),Fm.delete(r),Um.delete(r),Lm.delete(r),Dm.delete(r)};bt.sync=r=>{Lp=!0,bt.batchedUpdates(r),Lp=!1};bt.throttle=r=>{let e;function t(){try{r(...e)}finally{e=null}}function n(...i){e=i,bt.onStart(t)}return n.handler=r,n.cancel=()=>{Sh.delete(t),e=null},n};var Nm=typeof window<"u"?window.requestAnimationFrame:()=>{};bt.use=r=>Nm=r;bt.now=typeof performance<"u"?()=>performance.now():Date.now;bt.batchedUpdates=r=>r();bt.catch=console.error;bt.frameLoop="always";bt.advance=()=>{bt.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):PA()};var Vr=-1,Wr=0,Lp=!1;function Rl(r,e){Lp?(e.delete(r),r(0)):(e.add(r),BA())}function BA(){Vr<0&&(Vr=0,bt.frameLoop!=="demand"&&Nm(IA))}function EI(){Vr=-1}function IA(){~Vr&&(Nm(IA),bt.batchedUpdates(PA))}function PA(){const r=Vr;Vr=bt.now();const e=RA(Vr);if(e&&(LA(Vo.splice(0,e),t=>t.handler()),Wr-=e),!Wr){EI();return}Sh.flush(),Lm.flush(r?Math.min(64,Vr-r):16.667),Fm.flush(),Dm.flush(),Um.flush()}function Bl(){let r=new Set,e=r;return{add(t){Wr+=e==r&&!r.has(t)?1:0,r.add(t)},delete(t){return Wr-=e==r&&r.has(t)?1:0,r.delete(t)},flush(t){e.size&&(r=new Set,Wr-=e.size,LA(e,n=>n(t)&&r.add(n)),Wr+=r.size,e=r)}}}function LA(r,e){r.forEach(t=>{try{e(t)}catch(n){bt.catch(n)}})}var wI=Object.defineProperty,CI=(r,e)=>{for(var t in e)wI(r,t,{get:e[t],enumerable:!0})},ll={};CI(ll,{assign:()=>BI,colors:()=>Jr,createStringInterpolator:()=>Gm,skipAnimation:()=>FA,to:()=>DA,willAdvance:()=>Hm});function TI(){}var bI=(r,e,t)=>Object.defineProperty(r,e,{value:t,writable:!0,configurable:!0}),Zt={arr:Array.isArray,obj:r=>!!r&&r.constructor.name==="Object",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",und:r=>r===void 0};function RI(r,e){if(Zt.arr(r)){if(!Zt.arr(e)||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}return r===e}var vr=(r,e)=>r.forEach(e);function Dp(r,e,t){if(Zt.arr(r)){for(let n=0;n<r.length;n++)e.call(t,r[n],`${n}`);return}for(const n in r)r.hasOwnProperty(n)&&e.call(t,r[n],n)}var Eu=r=>Zt.und(r)?[]:Zt.arr(r)?r:[r],Om=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Gm,DA,Jr=null,FA=!1,Hm=TI,BI=r=>{r.to&&(DA=r.to),r.now&&(bt.now=r.now),r.colors!==void 0&&(Jr=r.colors),r.skipAnimation!=null&&(FA=r.skipAnimation),r.createStringInterpolator&&(Gm=r.createStringInterpolator),r.requestAnimationFrame&&bt.use(r.requestAnimationFrame),r.batchedUpdates&&(bt.batchedUpdates=r.batchedUpdates),r.willAdvance&&(Hm=r.willAdvance),r.frameLoop&&(bt.frameLoop=r.frameLoop)},Xa=new Set,xi=[],Uf=[],Wu=0,km={get idle(){return!Xa.size&&!xi.length},start(r){Wu>r.priority?(Xa.add(r),bt.onStart(II)):(UA(r),bt(Fp))},advance:Fp,sort(r){if(Wu)bt.onFrame(()=>km.sort(r));else{const e=xi.indexOf(r);~e&&(xi.splice(e,1),NA(r))}},clear(){xi=[],Xa.clear()}};function II(){Xa.forEach(UA),Xa.clear(),bt(Fp)}function UA(r){xi.includes(r)||NA(r)}function NA(r){xi.splice(PI(xi,e=>e.priority>r.priority),0,r)}function Fp(r){const e=Uf;for(let t=0;t<xi.length;t++){const n=xi[t];Wu=n.priority,n.idle||(Hm(n),n.advance(r),n.idle||e.push(n))}return Wu=0,Uf=xi,Uf.length=0,xi=e,xi.length>0}function PI(r,e){const t=r.findIndex(e);return t<0?r.length:t}var SP={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Bi="[-+]?\\d*\\.?\\d+",Xu=Bi+"%";function Eh(...r){return"\\(\\s*("+r.join(")\\s*,\\s*(")+")\\s*\\)"}var LI=new RegExp("rgb"+Eh(Bi,Bi,Bi)),DI=new RegExp("rgba"+Eh(Bi,Bi,Bi,Bi)),FI=new RegExp("hsl"+Eh(Bi,Xu,Xu)),UI=new RegExp("hsla"+Eh(Bi,Xu,Xu,Bi)),NI=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,OI=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,GI=/^#([0-9a-fA-F]{6})$/,HI=/^#([0-9a-fA-F]{8})$/;function kI(r){let e;return typeof r=="number"?r>>>0===r&&r>=0&&r<=4294967295?r:null:(e=GI.exec(r))?parseInt(e[1]+"ff",16)>>>0:Jr&&Jr[r]!==void 0?Jr[r]:(e=LI.exec(r))?(Lo(e[1])<<24|Lo(e[2])<<16|Lo(e[3])<<8|255)>>>0:(e=DI.exec(r))?(Lo(e[1])<<24|Lo(e[2])<<16|Lo(e[3])<<8|B_(e[4]))>>>0:(e=NI.exec(r))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=HI.exec(r))?parseInt(e[1],16)>>>0:(e=OI.exec(r))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=FI.exec(r))?(b_(R_(e[1]),wu(e[2]),wu(e[3]))|255)>>>0:(e=UI.exec(r))?(b_(R_(e[1]),wu(e[2]),wu(e[3]))|B_(e[4]))>>>0:null}function Nf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function b_(r,e,t){const n=t<.5?t*(1+e):t+e-t*e,i=2*t-n,s=Nf(i,n,r+1/3),o=Nf(i,n,r),c=Nf(i,n,r-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(c*255)<<8}function Lo(r){const e=parseInt(r,10);return e<0?0:e>255?255:e}function R_(r){return(parseFloat(r)%360+360)%360/360}function B_(r){const e=parseFloat(r);return e<0?0:e>1?255:Math.round(e*255)}function wu(r){const e=parseFloat(r);return e<0?0:e>100?1:e/100}function I_(r){let e=kI(r);if(e===null)return r;e=e||0;const t=(e&4278190080)>>>24,n=(e&16711680)>>>16,i=(e&65280)>>>8,s=(e&255)/255;return`rgba(${t}, ${n}, ${i}, ${s})`}var cl=(r,e,t)=>{if(Zt.fun(r))return r;if(Zt.arr(r))return cl({range:r,output:e,extrapolate:t});if(Zt.str(r.output[0]))return Gm(r);const n=r,i=n.output,s=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",c=n.extrapolateRight||n.extrapolate||"extend",u=n.easing||(h=>h);return h=>{const d=VI(h,s);return zI(h,s[d],s[d+1],i[d],i[d+1],u,o,c,n.map)}};function zI(r,e,t,n,i,s,o,c,u){let h=u?u(r):r;if(h<e){if(o==="identity")return h;o==="clamp"&&(h=e)}if(h>t){if(c==="identity")return h;c==="clamp"&&(h=t)}return n===i?n:e===t?r<=e?n:i:(e===-1/0?h=-h:t===1/0?h=h-e:h=(h-e)/(t-e),h=s(h),n===-1/0?h=-h:i===1/0?h=h+n:h=h*(i-n)+n,h)}function VI(r,e){for(var t=1;t<e.length-1&&!(e[t]>=r);++t);return t-1}var ul=Symbol.for("FluidValue.get"),hl=Symbol.for("FluidValue.observers"),Ju=r=>!!(r&&r[ul]),Ku=r=>r&&r[ul]?r[ul]():r;function WI(r,e){r.eventObserved?r.eventObserved(e):r(e)}function Up(r,e){const t=r[hl];t&&t.forEach(n=>{WI(n,e)})}var XI=class{constructor(r){if(!r&&!(r=this.get))throw Error("Unknown getter");JI(this,r)}},JI=(r,e)=>GA(r,ul,e);function OA(r,e){if(r[ul]){let t=r[hl];t||GA(r,hl,t=new Set),t.has(e)||(t.add(e),r.observerAdded&&r.observerAdded(t.size,e))}return e}function Np(r,e){const t=r[hl];if(t&&t.has(e)){const n=t.size-1;n?t.delete(e):r[hl]=null,r.observerRemoved&&r.observerRemoved(n,e)}}var GA=(r,e,t)=>Object.defineProperty(r,e,{value:t,writable:!0,configurable:!0}),Du=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,KI=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,P_=new RegExp(`(${Du.source})(%|[a-z]+)`,"i"),YI=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,wh=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,HA=r=>{const[e,t]=qI(r);if(!e||Om())return r;const n=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(n)return n.trim();if(t&&t.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(t);return i||r}else{if(t&&wh.test(t))return HA(t);if(t)return t}return r},qI=r=>{const e=wh.exec(r);if(!e)return[,];const[,t,n]=e;return[t,n]},Of,QI=(r,e,t,n,i)=>`rgba(${Math.round(e)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,ZI=r=>{Of||(Of=Jr?new RegExp(`(${Object.keys(Jr).join("|")})(?!\\w)`,"g"):/^\b$/);const e=r.output.map(s=>Ku(s).replace(wh,HA).replace(KI,I_).replace(Of,I_)),t=e.map(s=>s.match(Du).map(Number)),i=t[0].map((s,o)=>t.map(c=>{if(!(o in c))throw Error('The arity of each "output" value must be equal');return c[o]})).map(s=>cl({...r,output:s}));return s=>{var u;const o=!P_.test(e[0])&&((u=e.find(h=>P_.test(h)))==null?void 0:u.replace(Du,""));let c=0;return e[0].replace(Du,()=>`${i[c++](s)}${o||""}`).replace(YI,QI)}},kA="react-spring: ",zA=r=>{const e=r;let t=!1;if(typeof e!="function")throw new TypeError(`${kA}once requires a function parameter`);return(...n)=>{t||(e(...n),t=!0)}},jI=zA(console.warn);function $I(){jI(`${kA}The "interpolate" function is deprecated in v9 (use "to" instead)`)}zA(console.warn);function VA(r){return Zt.str(r)&&(r[0]=="#"||/\d/.test(r)||!Om()&&wh.test(r)||r in(Jr||{}))}var WA=Om()?ge.useEffect:ge.useLayoutEffect,eP=()=>{const r=ge.useRef(!1);return WA(()=>(r.current=!0,()=>{r.current=!1}),[]),r};function tP(){const r=ge.useState()[1],e=eP();return()=>{e.current&&r(Math.random())}}function nP(r,e){const[t]=ge.useState(()=>({inputs:e,result:r()})),n=ge.useRef(),i=n.current;let s=i;return s?e&&s.inputs&&iP(e,s.inputs)||(s={inputs:e,result:r()}):s=t,ge.useEffect(()=>{n.current=s,i==t&&(t.inputs=t.result=void 0)},[s]),s.result}function iP(r,e){if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}var rP=r=>ge.useEffect(r,sP),sP=[],dl=Symbol.for("Animated:node"),oP=r=>!!r&&r[dl]===r,zm=r=>r&&r[dl],XA=(r,e)=>bI(r,dl,e),Vm=r=>r&&r[dl]&&r[dl].getPayload(),JA=class{constructor(){XA(this,this)}getPayload(){return this.payload||[]}},Ch=class extends JA{constructor(r){super(),this._value=r,this.done=!0,this.durationProgress=0,Zt.num(this._value)&&(this.lastPosition=this._value)}static create(r){return new Ch(r)}getPayload(){return[this]}getValue(){return this._value}setValue(r,e){return Zt.num(r)&&(this.lastPosition=r,e&&(r=Math.round(r/e)*e,this.done&&(this.lastPosition=r))),this._value===r?!1:(this._value=r,!0)}reset(){const{done:r}=this;this.done=!1,Zt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,r&&(this.lastVelocity=null),this.v0=null)}},Wm=class extends Ch{constructor(r){super(0),this._string=null,this._toString=cl({output:[r,r]})}static create(r){return new Wm(r)}getValue(){const r=this._string;return r??(this._string=this._toString(this._value))}setValue(r){if(Zt.str(r)){if(r==this._string)return!1;this._string=r,this._value=1}else if(super.setValue(r))this._string=null;else return!1;return!0}reset(r){r&&(this._toString=cl({output:[this.getValue(),r]})),this._value=0,super.reset()}},Yu={dependencies:null},Xm=class extends JA{constructor(r){super(),this.source=r,this.setValue(r)}getValue(r){const e={};return Dp(this.source,(t,n)=>{oP(t)?e[n]=t.getValue(r):Ju(t)?e[n]=Ku(t):r||(e[n]=t)}),e}setValue(r){this.source=r,this.payload=this._makePayload(r)}reset(){this.payload&&vr(this.payload,r=>r.reset())}_makePayload(r){if(r){const e=new Set;return Dp(r,this._addToPayload,e),Array.from(e)}}_addToPayload(r){Yu.dependencies&&Ju(r)&&Yu.dependencies.add(r);const e=Vm(r);e&&vr(e,t=>this.add(t))}},KA=class extends Xm{constructor(r){super(r)}static create(r){return new KA(r)}getValue(){return this.source.map(r=>r.getValue())}setValue(r){const e=this.getPayload();return r.length==e.length?e.map((t,n)=>t.setValue(r[n])).some(Boolean):(super.setValue(r.map(aP)),!0)}};function aP(r){return(VA(r)?Wm:Ch).create(r)}function lP(r){const e=zm(r);return e?e.constructor:Zt.arr(r)?KA:VA(r)?Wm:Ch}var L_=(r,e)=>{const t=!Zt.fun(r)||r.prototype&&r.prototype.isReactComponent;return ge.forwardRef((n,i)=>{const s=ge.useRef(null),o=t&&ge.useCallback(_=>{s.current=hP(i,_)},[i]),[c,u]=uP(n,e),h=tP(),d=()=>{const _=s.current;if(t&&!_)return;(_?e.applyAnimatedValues(_,c.getValue(!0)):!1)===!1&&h()},f=new cP(d,u),m=ge.useRef();WA(()=>(m.current=f,vr(u,_=>OA(_,f)),()=>{m.current&&(vr(m.current.deps,_=>Np(_,m.current)),bt.cancel(m.current.update))})),ge.useEffect(d,[]),rP(()=>()=>{const _=m.current;vr(_.deps,A=>Np(A,_))});const g=e.getComponentProps(c.getValue());return ge.createElement(r,{...g,ref:o})})},cP=class{constructor(r,e){this.update=r,this.deps=e}eventObserved(r){r.type=="change"&&bt.write(this.update)}};function uP(r,e){const t=new Set;return Yu.dependencies=t,r.style&&(r={...r,style:e.createAnimatedStyle(r.style)}),r=new Xm(r),Yu.dependencies=null,[r,t]}function hP(r,e){return r&&(Zt.fun(r)?r(e):r.current=e),e}var D_=Symbol.for("AnimatedComponent"),EP=(r,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:t=i=>new Xm(i),getComponentProps:n=i=>i}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:t,getComponentProps:n},s=o=>{const c=F_(o)||"Anonymous";return Zt.str(o)?o=s[o]||(s[o]=L_(o,i)):o=o[D_]||(o[D_]=L_(o,i)),o.displayName=`Animated(${c})`,o};return Dp(r,(o,c)=>{Zt.arr(r)&&(c=F_(o)),s[c]=s(o)}),{animated:s}},F_=r=>Zt.str(r)?r:r&&Zt.str(r.displayName)?r.displayName:Zt.fun(r)&&r.name||null,U_=r=>r instanceof YA,dP=1,YA=class extends XI{constructor(){super(...arguments),this.id=dP++,this._priority=0}get priority(){return this._priority}set priority(r){this._priority!=r&&(this._priority=r,this._onPriorityChange(r))}get(){const r=zm(this);return r&&r.getValue()}to(...r){return ll.to(this,r)}interpolate(...r){return $I(),ll.to(this,r)}toJSON(){return this.get()}observerAdded(r){r==1&&this._attach()}observerRemoved(r){r==0&&this._detach()}_attach(){}_detach(){}_onChange(r,e=!1){Up(this,{type:"change",parent:this,value:r,idle:e})}_onPriorityChange(r){this.idle||km.sort(this),Up(this,{type:"priority",parent:this,priority:r})}},Jm=({children:r,...e})=>{const t=ge.useContext(qu),n=e.pause||!!t.pause,i=e.immediate||!!t.immediate;e=nP(()=>({pause:n,immediate:i}),[n,i]);const{Provider:s}=qu;return ge.createElement(s,{value:e},r)},qu=fP(Jm,{});Jm.Provider=qu.Provider;Jm.Consumer=qu.Consumer;function fP(r,e){return Object.assign(r,ge.createContext(e)),r.Provider._context=r,r.Consumer._context=r,r}var pP=class extends YA{constructor(r,e){super(),this.source=r,this.idle=!0,this._active=new Set,this.calc=cl(...e);const t=this._get(),n=lP(t);XA(this,n.create(t))}advance(r){const e=this._get(),t=this.get();RI(e,t)||(zm(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&N_(this._active)&&Gf(this)}_get(){const r=Zt.arr(this.source)?this.source.map(Ku):Eu(Ku(this.source));return this.calc(...r)}_start(){this.idle&&!N_(this._active)&&(this.idle=!1,vr(Vm(this),r=>{r.done=!1}),ll.skipAnimation?(bt.batchedUpdates(()=>this.advance()),Gf(this)):km.start(this))}_attach(){let r=1;vr(Eu(this.source),e=>{Ju(e)&&OA(e,this),U_(e)&&(e.idle||this._active.add(e),r=Math.max(r,e.priority+1))}),this.priority=r,this._start()}_detach(){vr(Eu(this.source),r=>{Ju(r)&&Np(r,this)}),this._active.clear(),Gf(this)}eventObserved(r){r.type=="change"?r.idle?this.advance():(this._active.add(r.parent),this._start()):r.type=="idle"?this._active.delete(r.parent):r.type=="priority"&&(this.priority=Eu(this.source).reduce((e,t)=>Math.max(e,(U_(t)?t.priority:0)+1),0))}};function mP(r){return r.idle!==!1}function N_(r){return!r.size||Array.from(r).every(mP)}function Gf(r){r.idle||(r.idle=!0,vr(Vm(r),e=>{e.done=!0}),Up(r,{type:"idle",parent:r}))}ll.assign({createStringInterpolator:ZI,to:(r,e)=>new pP(r,e)});export{Xm as A,xP as C,XI as F,MP as L,PR as T,SP as a,_P as b,ZI as c,EP as d,Io as e,Pm as f,ll as g,vA as h,AP as i,Dp as j,Zt as k,vr as l,Ku as m,Ju as n,OA as o,Np as p,Up as q,bt as r,Eu as t,lB as u};
