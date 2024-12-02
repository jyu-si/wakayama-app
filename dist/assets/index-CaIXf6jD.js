(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},cs=[],tn=()=>{},Dv=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ol=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ov=Object.prototype.hasOwnProperty,Ae=(t,e)=>Ov.call(t,e),ce=Array.isArray,ls=t=>ya(t)==="[object Map]",Fp=t=>ya(t)==="[object Set]",de=t=>typeof t=="function",Ke=t=>typeof t=="string",cr=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Up=t=>(xe(t)||de(t))&&de(t.then)&&de(t.catch),Bp=Object.prototype.toString,ya=t=>Bp.call(t),Nv=t=>ya(t).slice(8,-1),$p=t=>ya(t)==="[object Object]",Vl=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vv=/-(\w)/g,Bt=va(t=>t.replace(Vv,(e,n)=>n?n.toUpperCase():"")),xv=/\B([A-Z])/g,Mr=va(t=>t.replace(xv,"-$1").toLowerCase()),Ea=va(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=va(t=>t?`on${Ea(t)}`:""),Jn=(t,e)=>!Object.is(t,e),So=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hh;const Ta=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?Uv(r):xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||xe(t))return t}const Mv=/;(?![^(]*\))/g,Lv=/:([^]+)/,Fv=/\/\*[^]*?\*\//g;function Uv(t){const e={};return t.replace(Fv,"").split(Mv).forEach(n=>{if(n){const r=n.split(Lv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ml(t){let e="";if(Ke(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Ml(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$v=Dl(Bv);function qp(t){return!!t||t===""}const Hp=t=>!!(t&&t.__v_isRef===!0),Xt=t=>Ke(t)?t:t==null?"":ce(t)||xe(t)&&(t.toString===Bp||!de(t.toString))?Hp(t)?Xt(t.value):JSON.stringify(t,zp,2):String(t),zp=(t,e)=>Hp(e)?zp(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[mc(r,i)+" =>"]=s,n),{})}:Fp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mc(n))}:cr(e)?mc(e):xe(e)&&!ce(e)&&!$p(e)?String(e):e,mc=(t,e="")=>{var n;return cr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jv(t){return new Wp(t)}function qv(){return It}function Hv(t,e=!1){It&&It.cleanups.push(t)}let ke;const gc=new WeakSet;class Kp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gc.has(this)&&(gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zh(this),Yp(this);const e=ke,n=zt;ke=this,zt=!0;try{return this.fn()}finally{Jp(this),ke=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zc(this)&&this.run()}get dirty(){return zc(this)}}let Gp=0,oi,ai;function Qp(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function Ll(){Gp++}function Fl(){if(--Gp>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Yp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ul(r),zv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ei))return;t.globalVersion=Ei;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!zc(t)){t.flags&=-3;return}const n=ke,r=zt;ke=t,zt=!0;try{Yp(t);const s=t.fn(t._value);(e.version===0||Jn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,zt=r,Jp(t),t.flags&=-3}}function Ul(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ul(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const Zp=[];function lr(){Zp.push(zt),zt=!1}function ur(){const t=Zp.pop();zt=t===void 0?!0:t}function zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ei=0;class Wv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!zt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Wv(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,em(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Ei++,this.notify(e)}notify(e){Ll();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fl()}}}function em(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)em(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $o=new WeakMap,Ir=Symbol(""),Wc=Symbol(""),Ti=Symbol("");function pt(t,e,n){if(zt&&ke){let r=$o.get(t);r||$o.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bl),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const o=$o.get(t);if(!o){Ei++;return}const c=l=>{l&&l.trigger()};if(Ll(),e==="clear")o.forEach(c);else{const l=ce(t),u=l&&Vl(n);if(l&&n==="length"){const d=Number(r);o.forEach((f,m)=>{(m==="length"||m===Ti||!cr(m)&&m>=d)&&c(f)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ti)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ir)),ls(t)&&c(o.get(Wc)));break;case"delete":l||(c(o.get(Ir)),ls(t)&&c(o.get(Wc)));break;case"set":ls(t)&&c(o.get(Ir));break}}Fl()}function Kv(t,e){const n=$o.get(t);return n&&n.get(e)}function Yr(t){const e=we(t);return e===t?e:(pt(e,"iterate",Ti),Ut(t)?e:e.map(mt))}function wa(t){return pt(t=we(t),"iterate",Ti),t}const Gv={__proto__:null,[Symbol.iterator](){return _c(this,Symbol.iterator,mt)},concat(...t){return Yr(this).concat(...t.map(e=>ce(e)?Yr(e):e))},entries(){return _c(this,"entries",t=>(t[1]=mt(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(mt),arguments)},find(t,e){return mn(this,"find",t,e,mt,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,mt,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return Yr(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return Wh(this,"reduce",t,e)},reduceRight(t,...e){return Wh(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return Yr(this).toReversed()},toSorted(t){return Yr(this).toSorted(t)},toSpliced(...t){return Yr(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return _c(this,"values",mt)}};function _c(t,e,n){const r=wa(t),s=r[e]();return r!==t&&!Ut(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Qv=Array.prototype;function mn(t,e,n,r,s,i){const o=wa(t),c=o!==t&&!Ut(t),l=o[e];if(l!==Qv[e]){const f=l.apply(t,i);return c?mt(f):f}let u=n;o!==t&&(c?u=function(f,m){return n.call(this,mt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const d=l.call(o,u,r);return c&&s?s(d):d}function Wh(t,e,n,r){const s=wa(t);let i=n;return s!==t&&(Ut(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,mt(c),l,t)}),s[e](i,...r)}function yc(t,e,n){const r=we(t);pt(r,"iterate",Ti);const s=r[e](...n);return(s===-1||s===!1)&&ql(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Ys(t,e,n=[]){lr(),Ll();const r=we(t)[e].apply(t,n);return Fl(),ur(),r}const Yv=Dl("__proto__,__v_isRef,__isVue"),tm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cr));function Jv(t){cr(t)||(t=String(t));const e=we(this);return pt(e,"has",t),e.hasOwnProperty(t)}class nm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?aE:om:i?im:sm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=Gv[n]))return l;if(n==="hasOwnProperty")return Jv}const c=Reflect.get(e,n,it(e)?e:r);return(cr(n)?tm.has(n):Yv(n))||(s||pt(e,"get",n),i)?c:it(c)?o&&Vl(n)?c:c.value:xe(c)?s?cm(c):Lr(c):c}}class rm extends nm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Pr(i);if(!Ut(r)&&!Pr(r)&&(i=we(i),r=we(r)),!ce(e)&&it(i)&&!it(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Vl(n)?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,r,it(e)?e:s);return e===we(s)&&(o?Jn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!cr(n)||!tm.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",ce(e)?"length":Ir),Reflect.ownKeys(e)}}class Xv extends nm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zv=new rm,eE=new Xv,tE=new rm(!0);const Kc=t=>t,fo=t=>Reflect.getPrototypeOf(t);function nE(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=ls(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Kc:e?Gc:mt;return!e&&pt(i,"iterate",l?Wc:Ir),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rE(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(Jn(s,c)&&pt(o,"get",s),pt(o,"get",c));const{has:l}=fo(o),u=e?Kc:t?Gc:mt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(we(s),"iterate",Ir),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(Jn(s,c)&&pt(o,"has",s),pt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),u=e?Kc:t?Gc:mt;return!t&&pt(l,"iterate",Ir),c.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return Xe(n,t?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){!e&&!Ut(s)&&!Pr(s)&&(s=we(s));const i=we(this);return fo(i).has.call(i,s)||(i.add(s),yn(i,"add",s,s)),this},set(s,i){!e&&!Ut(i)&&!Pr(i)&&(i=we(i));const o=we(this),{has:c,get:l}=fo(o);let u=c.call(o,s);u||(s=we(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?Jn(i,d)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=fo(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&yn(i,"delete",s,void 0),u},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nE(s,t,e)}),n}function $l(t,e){const n=rE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const sE={get:$l(!1,!1)},iE={get:$l(!1,!0)},oE={get:$l(!0,!1)};const sm=new WeakMap,im=new WeakMap,om=new WeakMap,aE=new WeakMap;function cE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lE(t){return t.__v_skip||!Object.isExtensible(t)?0:cE(Nv(t))}function Lr(t){return Pr(t)?t:jl(t,!1,Zv,sE,sm)}function am(t){return jl(t,!1,tE,iE,im)}function cm(t){return jl(t,!0,eE,oE,om)}function jl(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function us(t){return Pr(t)?us(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function Ut(t){return!!(t&&t.__v_isShallow)}function ql(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function uE(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&jp(t,"__v_skip",!0),t}const mt=t=>xe(t)?Lr(t):t,Gc=t=>xe(t)?cm(t):t;function it(t){return t?t.__v_isRef===!0:!1}function Cr(t){return lm(t,!1)}function Ar(t){return lm(t,!0)}function lm(t,e){return it(t)?t:new hE(t,e)}class hE{constructor(e,n){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ut(e)||Pr(e);e=r?e:we(e),Jn(e,n)&&(this._rawValue=e,this._value=r?e:mt(e),this.dep.trigger())}}function hs(t){return it(t)?t.value:t}const dE={get:(t,e,n)=>e==="__v_raw"?t:hs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function um(t){return us(t)?t:new Proxy(t,dE)}function fE(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=mE(t,n);return e}class pE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Kv(we(this._object),this._key)}}function mE(t,e,n){const r=t[e];return it(r)?r:new pE(t,e,n)}class gE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Qp(this,!0),!0}get value(){const e=this.dep.track();return Xp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _E(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new gE(r,s,n)}const mo={},jo=new WeakMap;let vr;function yE(t,e=!1,n=vr){if(n){let r=jo.get(n);r||jo.set(n,r=[]),r.push(t)}}function vE(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=$=>s?$:Ut($)||s===!1||s===0?vn($,1):vn($);let d,f,m,_,R=!1,b=!1;if(it(t)?(f=()=>t.value,R=Ut(t)):us(t)?(f=()=>u(t),R=!0):ce(t)?(b=!0,R=t.some($=>us($)||Ut($)),f=()=>t.map($=>{if(it($))return $.value;if(us($))return u($);if(de($))return l?l($,2):$()})):de(t)?e?f=l?()=>l(t,2):t:f=()=>{if(m){lr();try{m()}finally{ur()}}const $=vr;vr=d;try{return l?l(t,3,[_]):t(_)}finally{vr=$}}:f=tn,e&&s){const $=f,ie=s===!0?1/0:s;f=()=>vn($(),ie)}const k=qv(),L=()=>{d.stop(),k&&k.active&&Nl(k.effects,d)};if(i&&e){const $=e;e=(...ie)=>{$(...ie),L()}}let F=b?new Array(t.length).fill(mo):mo;const B=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const ie=d.run();if(s||R||(b?ie.some((le,I)=>Jn(le,F[I])):Jn(ie,F))){m&&m();const le=vr;vr=d;try{const I=[ie,F===mo?void 0:b&&F[0]===mo?[]:F,_];l?l(e,3,I):e(...I),F=ie}finally{vr=le}}}else d.run()};return c&&c(B),d=new Kp(f),d.scheduler=o?()=>o(B,!1):B,_=$=>yE($,!1,d),m=d.onStop=()=>{const $=jo.get(d);if($){if(l)l($,4);else for(const ie of $)ie();jo.delete(d)}},e?r?B(!0):F=d.run():o?o(B.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function vn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,it(t))vn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(Fp(t)||ls(t))t.forEach(r=>{vn(r,e,n)});else if($p(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ia(s,e,n)}}function un(t,e,n,r){if(de(t)){const s=Fi(t,e,n,r);return s&&Up(s)&&s.catch(i=>{Ia(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(un(t[i],e,n,r));return s}}function Ia(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,l,u)===!1)return}c=c.parent}if(i){lr(),Fi(i,null,10,[t,l,u]),ur();return}}EE(t,n,s,r,o)}function EE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let Yt=-1;const ds=[];let jn=null,Zr=0;const hm=Promise.resolve();let qo=null;function Hl(t){const e=qo||hm;return t?e.then(this?t.bind(this):t):e}function TE(t){let e=Yt+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=wi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zl(t){if(!(t.flags&1)){const e=wi(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=wi(n)?At.push(t):At.splice(TE(e),0,t),t.flags|=1,dm()}}function dm(){qo||(qo=hm.then(pm))}function wE(t){ce(t)?ds.push(...t):jn&&t.id===-1?jn.splice(Zr+1,0,t):t.flags&1||(ds.push(t),t.flags|=1),dm()}function Kh(t,e,n=Yt+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function fm(t){if(ds.length){const e=[...new Set(ds)].sort((n,r)=>wi(n)-wi(r));if(ds.length=0,jn){jn.push(...e);return}for(jn=e,Zr=0;Zr<jn.length;Zr++){const n=jn[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}jn=null,Zr=0}}const wi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pm(t){try{for(Yt=0;Yt<At.length;Yt++){const e=At[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<At.length;Yt++){const e=At[Yt];e&&(e.flags&=-2)}Yt=-1,At.length=0,fm(),qo=null,(At.length||ds.length)&&pm()}}let Pt=null,mm=null;function Ho(t){const e=Pt;return Pt=t,mm=t&&t.type.__scopeId||null,e}function Qc(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&nd(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&nd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gm(t,e){if(Pt===null)return t;const n=Sa(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(lr(),un(l,n,8,[t.el,c,t,e]),ur())}}const IE=Symbol("_vte"),AE=t=>t.__isTeleport;function Wl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Wl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Kl(t,e){return de(t)?Xe({name:t.name},e,{setup:t}):t}function _m(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function zo(t,e,n,r,s=!1){if(ce(t)){t.forEach((R,b)=>zo(R,e&&(ce(e)?e[b]:e),n,r,s));return}if(ci(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Sa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Ce?c.refs={}:c.refs,f=c.setupState,m=we(f),_=f===Ce?()=>!1:R=>Ae(m,R);if(u!=null&&u!==l&&(Ke(u)?(d[u]=null,_(u)&&(f[u]=null)):it(u)&&(u.value=null)),de(l))Fi(l,c,12,[o,d]);else{const R=Ke(l),b=it(l);if(R||b){const k=()=>{if(t.f){const L=R?_(l)?f[l]:d[l]:l.value;s?ce(L)&&Nl(L,i):ce(L)?L.includes(i)||L.push(i):R?(d[l]=[i],_(l)&&(f[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else R?(d[l]=o,_(l)&&(f[l]=o)):b&&(l.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,Ot(k,n)):k()}}}Ta().requestIdleCallback;Ta().cancelIdleCallback;const ci=t=>!!t.type.__asyncLoader,ym=t=>t.type.__isKeepAlive;function bE(t,e){vm(t,"a",e)}function RE(t,e){vm(t,"da",e)}function vm(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ym(s.parent.vnode)&&SE(r,e,n,s),s=s.parent}}function SE(t,e,n,r){const s=Aa(e,t,r,!0);Em(()=>{Nl(r[e],s)},n)}function Aa(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const c=Ui(n),l=un(e,n,t,o);return c(),ur(),l});return r?s.unshift(i):s.push(i),i}}const Vn=t=>(e,n=rt)=>{(!Ai||t==="sp")&&Aa(t,(...r)=>e(...r),n)},PE=Vn("bm"),CE=Vn("m"),kE=Vn("bu"),DE=Vn("u"),OE=Vn("bum"),Em=Vn("um"),NE=Vn("sp"),VE=Vn("rtg"),xE=Vn("rtc");function ME(t,e=rt){Aa("ec",t,e)}const LE="components";function Wo(t,e){return UE(LE,t,!0,e)||t}const FE=Symbol.for("v-ndc");function UE(t,e,n=!0,r=!1){const s=Pt||rt;if(s){const i=s.type;{const c=bT(i,!1);if(c&&(c===e||c===Bt(e)||c===Ea(Bt(e))))return i}const o=Gh(s[t]||i[t],e)||Gh(s.appContext[t],e);return!o&&r?i:o}}function Gh(t,e){return t&&(t[e]||t[Bt(e)]||t[Ea(Bt(e))])}function Tm(t,e,n,r){let s;const i=n,o=ce(t);if(o||Ke(t)){const c=o&&us(t);let l=!1;c&&(l=!Ut(t),t=wa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?mt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Yc=t=>t?qm(t)?Sa(t):Yc(t.parent):null,li=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gl(t),$forceUpdate:t=>t.f||(t.f=()=>{zl(t.update)}),$nextTick:t=>t.n||(t.n=Hl.bind(t.proxy)),$watch:t=>oT.bind(t)}),vc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Ae(t,e),BE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==Ce&&Ae(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ae(u,e))return o[e]=3,i[e];if(n!==Ce&&Ae(n,e))return o[e]=4,n[e];Jc&&(o[e]=0)}}const d=li[e];let f,m;if(d)return e==="$attrs"&&pt(t.attrs,"get",""),d(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Ae(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ae(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==Ce&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ce&&Ae(t,o)||vc(e,o)||(c=i[0])&&Ae(c,o)||Ae(r,o)||Ae(li,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jc=!0;function $E(t){const e=Gl(t),n=t.proxy,r=t.ctx;Jc=!1,e.beforeCreate&&Yh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:_,updated:R,activated:b,deactivated:k,beforeDestroy:L,beforeUnmount:F,destroyed:B,unmounted:$,render:ie,renderTracked:le,renderTriggered:I,errorCaptured:v,serverPrefetch:w,expose:A,inheritAttrs:S,components:P,directives:T,filters:yt}=e;if(u&&jE(u,r,null),o)for(const _e in o){const fe=o[_e];de(fe)&&(r[_e]=fe.bind(n))}if(s){const _e=s.call(n,n);xe(_e)&&(t.data=Lr(_e))}if(Jc=!0,i)for(const _e in i){const fe=i[_e],kt=de(fe)?fe.bind(n,n):de(fe.get)?fe.get.bind(n,n):tn,$t=!de(fe)&&de(fe.set)?fe.set.bind(n):tn,Mt=Fe({get:kt,set:$t});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Me=>Mt.value=Me})}if(c)for(const _e in c)wm(c[_e],r,n,_e);if(l){const _e=de(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(fe=>{ui(fe,_e[fe])})}d&&Yh(d,t,"c");function He(_e,fe){ce(fe)?fe.forEach(kt=>_e(kt.bind(n))):fe&&_e(fe.bind(n))}if(He(PE,f),He(CE,m),He(kE,_),He(DE,R),He(bE,b),He(RE,k),He(ME,v),He(xE,le),He(VE,I),He(OE,F),He(Em,$),He(NE,w),ce(A))if(A.length){const _e=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:kt=>n[fe]=kt})})}else t.exposed||(t.exposed={});ie&&t.render===tn&&(t.render=ie),S!=null&&(t.inheritAttrs=S),P&&(t.components=P),T&&(t.directives=T),w&&_m(t)}function jE(t,e,n=tn){ce(t)&&(t=Xc(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Yh(t,e,n){un(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wm(t,e,n,r){let s=r.includes(".")?xm(n,r):()=>n[r];if(Ke(t)){const i=e[t];de(i)&&rn(s,i)}else if(de(t))rn(s,t.bind(n));else if(xe(t))if(ce(t))t.forEach(i=>wm(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&rn(s,i,t)}}function Gl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ko(l,u,o,!0)),Ko(l,e,o)),xe(e)&&i.set(e,l),l}function Ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ko(t,i,n,!0),s&&s.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=qE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const qE={data:Jh,props:Xh,emits:Xh,methods:ei,computed:ei,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ei,directives:ei,watch:zE,provide:Jh,inject:HE};function Jh(t,e){return e?t?function(){return Xe(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function HE(t,e){return ei(Xc(t),Xc(e))}function Xc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?Xe(Object.create(null),t,e):e}function Xh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Qh(t),Qh(e??{})):e}function zE(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Im(){return{app:null,config:{isNativeTag:Dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WE=0;function KE(t,e){return function(r,s=null){de(r)||(r=Xe({},r)),s!=null&&!xe(s)&&(s=null);const i=Im(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:WE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ST,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&de(d.install)?(o.add(d),d.install(u,...f)):de(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,m){if(!l){const _=u._ceVNode||Ve(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),f&&e?e(_,d):t(_,d,m),l=!0,u._container=d,d.__vue_app__=u,Sa(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(un(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=fs;fs=u;try{return d()}finally{fs=f}}};return u}}let fs=null;function ui(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=rt||Pt;if(r||fs){const s=fs?fs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const Am={},bm=()=>Object.create(Am),Rm=t=>Object.getPrototypeOf(t)===Am;function GE(t,e,n,r=!1){const s={},i=bm();t.propsDefaults=Object.create(null),Sm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:am(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function QE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(ba(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ae(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=Bt(m);s[R]=Zc(l,c,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Sm(t,e,s,i)&&(u=!0);let d;for(const f in c)(!e||!Ae(e,f)&&((d=Mr(f))===f||!Ae(e,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Zc(l,c,f,void 0,t,!0)):delete s[f]);if(i!==c)for(const f in i)(!e||!Ae(e,f))&&(delete i[f],u=!0)}u&&yn(t.attrs,"set","")}function Sm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ii(l))continue;const u=e[l];let d;s&&Ae(s,d=Bt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:ba(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=we(n),u=c||Ce;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Zc(s,l,f,u[f],t,!Ae(u,f))}}return o}function Zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ae(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Ui(s);r=u[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}const YE=new WeakMap;function Pm(t,e,n=!1){const r=n?YE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const d=f=>{l=!0;const[m,_]=Pm(f,e,!0);Xe(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return xe(t)&&r.set(t,cs),cs;if(ce(i))for(let d=0;d<i.length;d++){const f=Bt(i[d]);Zh(f)&&(o[f]=Ce)}else if(i)for(const d in i){const f=Bt(d);if(Zh(f)){const m=i[d],_=o[f]=ce(m)||de(m)?{type:m}:Xe({},m),R=_.type;let b=!1,k=!0;if(ce(R))for(let L=0;L<R.length;++L){const F=R[L],B=de(F)&&F.name;if(B==="Boolean"){b=!0;break}else B==="String"&&(k=!1)}else b=de(R)&&R.name==="Boolean";_[0]=b,_[1]=k,(b||Ae(_,"default"))&&c.push(f)}}const u=[o,c];return xe(t)&&r.set(t,u),u}function Zh(t){return t[0]!=="$"&&!ii(t)}const Cm=t=>t[0]==="_"||t==="$stable",Ql=t=>ce(t)?t.map(Jt):[Jt(t)],JE=(t,e,n)=>{if(e._n)return e;const r=Qc((...s)=>Ql(e(...s)),n);return r._c=!1,r},km=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cm(s))continue;const i=t[s];if(de(i))e[s]=JE(s,i,r);else if(i!=null){const o=Ql(i);e[s]=()=>o}}},Dm=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},Om=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},XE=(t,e,n)=>{const r=t.slots=bm();if(t.vnode.shapeFlag&32){const s=e._;s?(Om(r,e,n),n&&jp(r,"_",s,!0)):km(e,r)}else e&&Dm(t,e)},ZE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Om(s,e,n):(i=!e.$stable,km(e,s)),o=e}else e&&(Dm(t,e),o={default:1});if(i)for(const c in s)!Cm(c)&&o[c]==null&&delete s[c]},Ot=fT;function eT(t){return tT(t)}function tT(t,e){const n=Ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:_=tn,insertStaticContent:R}=t,b=(y,E,D,U=null,N=null,j=null,K=void 0,z=null,H=!!E.dynamicChildren)=>{if(y===E)return;y&&!Js(y,E)&&(U=V(y),Me(y,N,j,!0),y=null),E.patchFlag===-2&&(H=!1,E.dynamicChildren=null);const{type:q,ref:re,shapeFlag:Q}=E;switch(q){case Ra:k(y,E,D,U);break;case kr:L(y,E,D,U);break;case wc:y==null&&F(E,D,U,K);break;case qt:P(y,E,D,U,N,j,K,z,H);break;default:Q&1?ie(y,E,D,U,N,j,K,z,H):Q&6?T(y,E,D,U,N,j,K,z,H):(Q&64||Q&128)&&q.process(y,E,D,U,N,j,K,z,H,Z)}re!=null&&N&&zo(re,y&&y.ref,j,E||y,!E)},k=(y,E,D,U)=>{if(y==null)r(E.el=c(E.children),D,U);else{const N=E.el=y.el;E.children!==y.children&&u(N,E.children)}},L=(y,E,D,U)=>{y==null?r(E.el=l(E.children||""),D,U):E.el=y.el},F=(y,E,D,U)=>{[y.el,y.anchor]=R(y.children,E,D,U,y.el,y.anchor)},B=({el:y,anchor:E},D,U)=>{let N;for(;y&&y!==E;)N=m(y),r(y,D,U),y=N;r(E,D,U)},$=({el:y,anchor:E})=>{let D;for(;y&&y!==E;)D=m(y),s(y),y=D;s(E)},ie=(y,E,D,U,N,j,K,z,H)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),y==null?le(E,D,U,N,j,K,z,H):w(y,E,N,j,K,z,H)},le=(y,E,D,U,N,j,K,z)=>{let H,q;const{props:re,shapeFlag:Q,transition:te,dirs:ee}=y;if(H=y.el=o(y.type,j,re&&re.is,re),Q&8?d(H,y.children):Q&16&&v(y.children,H,null,U,N,Ec(y,j),K,z),ee&&gr(y,null,U,"created"),I(H,y,y.scopeId,K,U),re){for(const Ie in re)Ie!=="value"&&!ii(Ie)&&i(H,Ie,null,re[Ie],j,U);"value"in re&&i(H,"value",null,re.value,j),(q=re.onVnodeBeforeMount)&&Qt(q,U,y)}ee&&gr(y,null,U,"beforeMount");const se=nT(N,te);se&&te.beforeEnter(H),r(H,E,D),((q=re&&re.onVnodeMounted)||se||ee)&&Ot(()=>{q&&Qt(q,U,y),se&&te.enter(H),ee&&gr(y,null,U,"mounted")},N)},I=(y,E,D,U,N)=>{if(D&&_(y,D),U)for(let j=0;j<U.length;j++)_(y,U[j]);if(N){let j=N.subTree;if(E===j||Lm(j.type)&&(j.ssContent===E||j.ssFallback===E)){const K=N.vnode;I(y,K,K.scopeId,K.slotScopeIds,N.parent)}}},v=(y,E,D,U,N,j,K,z,H=0)=>{for(let q=H;q<y.length;q++){const re=y[q]=z?qn(y[q]):Jt(y[q]);b(null,re,E,D,U,N,j,K,z)}},w=(y,E,D,U,N,j,K)=>{const z=E.el=y.el;let{patchFlag:H,dynamicChildren:q,dirs:re}=E;H|=y.patchFlag&16;const Q=y.props||Ce,te=E.props||Ce;let ee;if(D&&_r(D,!1),(ee=te.onVnodeBeforeUpdate)&&Qt(ee,D,E,y),re&&gr(E,y,D,"beforeUpdate"),D&&_r(D,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(z,""),q?A(y.dynamicChildren,q,z,D,U,Ec(E,N),j):K||fe(y,E,z,null,D,U,Ec(E,N),j,!1),H>0){if(H&16)S(z,Q,te,D,N);else if(H&2&&Q.class!==te.class&&i(z,"class",null,te.class,N),H&4&&i(z,"style",Q.style,te.style,N),H&8){const se=E.dynamicProps;for(let Ie=0;Ie<se.length;Ie++){const Ee=se[Ie],ct=Q[Ee],Ye=te[Ee];(Ye!==ct||Ee==="value")&&i(z,Ee,ct,Ye,N,D)}}H&1&&y.children!==E.children&&d(z,E.children)}else!K&&q==null&&S(z,Q,te,D,N);((ee=te.onVnodeUpdated)||re)&&Ot(()=>{ee&&Qt(ee,D,E,y),re&&gr(E,y,D,"updated")},U)},A=(y,E,D,U,N,j,K)=>{for(let z=0;z<E.length;z++){const H=y[z],q=E[z],re=H.el&&(H.type===qt||!Js(H,q)||H.shapeFlag&70)?f(H.el):D;b(H,q,re,null,U,N,j,K,!0)}},S=(y,E,D,U,N)=>{if(E!==D){if(E!==Ce)for(const j in E)!ii(j)&&!(j in D)&&i(y,j,E[j],null,N,U);for(const j in D){if(ii(j))continue;const K=D[j],z=E[j];K!==z&&j!=="value"&&i(y,j,z,K,N,U)}"value"in D&&i(y,"value",E.value,D.value,N)}},P=(y,E,D,U,N,j,K,z,H)=>{const q=E.el=y?y.el:c(""),re=E.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ee}=E;ee&&(z=z?z.concat(ee):ee),y==null?(r(q,D,U),r(re,D,U),v(E.children||[],D,re,N,j,K,z,H)):Q>0&&Q&64&&te&&y.dynamicChildren?(A(y.dynamicChildren,te,D,N,j,K,z),(E.key!=null||N&&E===N.subTree)&&Nm(y,E,!0)):fe(y,E,D,re,N,j,K,z,H)},T=(y,E,D,U,N,j,K,z,H)=>{E.slotScopeIds=z,y==null?E.shapeFlag&512?N.ctx.activate(E,D,U,K,H):yt(E,D,U,N,j,K,H):xt(y,E,H)},yt=(y,E,D,U,N,j,K)=>{const z=y.component=vT(y,U,N);if(ym(y)&&(z.ctx.renderer=Z),TT(z,!1,K),z.asyncDep){if(N&&N.registerDep(z,He,K),!y.el){const H=z.subTree=Ve(kr);L(null,H,E,D)}}else He(z,y,E,D,N,j,K)},xt=(y,E,D)=>{const U=E.component=y.component;if(hT(y,E,D))if(U.asyncDep&&!U.asyncResolved){_e(U,E,D);return}else U.next=E,U.update();else E.el=y.el,U.vnode=E},He=(y,E,D,U,N,j,K)=>{const z=()=>{if(y.isMounted){let{next:Q,bu:te,u:ee,parent:se,vnode:Ie}=y;{const lt=Vm(y);if(lt){Q&&(Q.el=Ie.el,_e(y,Q,K)),lt.asyncDep.then(()=>{y.isUnmounted||z()});return}}let Ee=Q,ct;_r(y,!1),Q?(Q.el=Ie.el,_e(y,Q,K)):Q=Ie,te&&So(te),(ct=Q.props&&Q.props.onVnodeBeforeUpdate)&&Qt(ct,se,Q,Ie),_r(y,!0);const Ye=Tc(y),Ze=y.subTree;y.subTree=Ye,b(Ze,Ye,f(Ze.el),V(Ze),y,N,j),Q.el=Ye.el,Ee===null&&dT(y,Ye.el),ee&&Ot(ee,N),(ct=Q.props&&Q.props.onVnodeUpdated)&&Ot(()=>Qt(ct,se,Q,Ie),N)}else{let Q;const{el:te,props:ee}=E,{bm:se,m:Ie,parent:Ee,root:ct,type:Ye}=y,Ze=ci(E);if(_r(y,!1),se&&So(se),!Ze&&(Q=ee&&ee.onVnodeBeforeMount)&&Qt(Q,Ee,E),_r(y,!0),te&&Se){const lt=()=>{y.subTree=Tc(y),Se(te,y.subTree,y,N,null)};Ze&&Ye.__asyncHydrate?Ye.__asyncHydrate(te,y,lt):lt()}else{ct.ce&&ct.ce._injectChildStyle(Ye);const lt=y.subTree=Tc(y);b(null,lt,D,U,y,N,j),E.el=lt.el}if(Ie&&Ot(Ie,N),!Ze&&(Q=ee&&ee.onVnodeMounted)){const lt=E;Ot(()=>Qt(Q,Ee,lt),N)}(E.shapeFlag&256||Ee&&ci(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&Ot(y.a,N),y.isMounted=!0,E=D=U=null}};y.scope.on();const H=y.effect=new Kp(z);y.scope.off();const q=y.update=H.run.bind(H),re=y.job=H.runIfDirty.bind(H);re.i=y,re.id=y.uid,H.scheduler=()=>zl(re),_r(y,!0),q()},_e=(y,E,D)=>{E.component=y;const U=y.vnode.props;y.vnode=E,y.next=null,QE(y,E.props,U,D),ZE(y,E.children,D),lr(),Kh(y),ur()},fe=(y,E,D,U,N,j,K,z,H=!1)=>{const q=y&&y.children,re=y?y.shapeFlag:0,Q=E.children,{patchFlag:te,shapeFlag:ee}=E;if(te>0){if(te&128){$t(q,Q,D,U,N,j,K,z,H);return}else if(te&256){kt(q,Q,D,U,N,j,K,z,H);return}}ee&8?(re&16&&Rt(q,N,j),Q!==q&&d(D,Q)):re&16?ee&16?$t(q,Q,D,U,N,j,K,z,H):Rt(q,N,j,!0):(re&8&&d(D,""),ee&16&&v(Q,D,U,N,j,K,z,H))},kt=(y,E,D,U,N,j,K,z,H)=>{y=y||cs,E=E||cs;const q=y.length,re=E.length,Q=Math.min(q,re);let te;for(te=0;te<Q;te++){const ee=E[te]=H?qn(E[te]):Jt(E[te]);b(y[te],ee,D,null,N,j,K,z,H)}q>re?Rt(y,N,j,!0,!1,Q):v(E,D,U,N,j,K,z,H,Q)},$t=(y,E,D,U,N,j,K,z,H)=>{let q=0;const re=E.length;let Q=y.length-1,te=re-1;for(;q<=Q&&q<=te;){const ee=y[q],se=E[q]=H?qn(E[q]):Jt(E[q]);if(Js(ee,se))b(ee,se,D,null,N,j,K,z,H);else break;q++}for(;q<=Q&&q<=te;){const ee=y[Q],se=E[te]=H?qn(E[te]):Jt(E[te]);if(Js(ee,se))b(ee,se,D,null,N,j,K,z,H);else break;Q--,te--}if(q>Q){if(q<=te){const ee=te+1,se=ee<re?E[ee].el:U;for(;q<=te;)b(null,E[q]=H?qn(E[q]):Jt(E[q]),D,se,N,j,K,z,H),q++}}else if(q>te)for(;q<=Q;)Me(y[q],N,j,!0),q++;else{const ee=q,se=q,Ie=new Map;for(q=se;q<=te;q++){const vt=E[q]=H?qn(E[q]):Jt(E[q]);vt.key!=null&&Ie.set(vt.key,q)}let Ee,ct=0;const Ye=te-se+1;let Ze=!1,lt=0;const Mn=new Array(Ye);for(q=0;q<Ye;q++)Mn[q]=0;for(q=ee;q<=Q;q++){const vt=y[q];if(ct>=Ye){Me(vt,N,j,!0);continue}let Lt;if(vt.key!=null)Lt=Ie.get(vt.key);else for(Ee=se;Ee<=te;Ee++)if(Mn[Ee-se]===0&&Js(vt,E[Ee])){Lt=Ee;break}Lt===void 0?Me(vt,N,j,!0):(Mn[Lt-se]=q+1,Lt>=lt?lt=Lt:Ze=!0,b(vt,E[Lt],D,null,N,j,K,z,H),ct++)}const Hr=Ze?rT(Mn):cs;for(Ee=Hr.length-1,q=Ye-1;q>=0;q--){const vt=se+q,Lt=E[vt],zr=vt+1<re?E[vt+1].el:U;Mn[q]===0?b(null,Lt,D,zr,N,j,K,z,H):Ze&&(Ee<0||q!==Hr[Ee]?Mt(Lt,D,zr,2):Ee--)}}},Mt=(y,E,D,U,N=null)=>{const{el:j,type:K,transition:z,children:H,shapeFlag:q}=y;if(q&6){Mt(y.component.subTree,E,D,U);return}if(q&128){y.suspense.move(E,D,U);return}if(q&64){K.move(y,E,D,Z);return}if(K===qt){r(j,E,D);for(let Q=0;Q<H.length;Q++)Mt(H[Q],E,D,U);r(y.anchor,E,D);return}if(K===wc){B(y,E,D);return}if(U!==2&&q&1&&z)if(U===0)z.beforeEnter(j),r(j,E,D),Ot(()=>z.enter(j),N);else{const{leave:Q,delayLeave:te,afterLeave:ee}=z,se=()=>r(j,E,D),Ie=()=>{Q(j,()=>{se(),ee&&ee()})};te?te(j,se,Ie):Ie()}else r(j,E,D)},Me=(y,E,D,U=!1,N=!1)=>{const{type:j,props:K,ref:z,children:H,dynamicChildren:q,shapeFlag:re,patchFlag:Q,dirs:te,cacheIndex:ee}=y;if(Q===-2&&(N=!1),z!=null&&zo(z,null,D,y,!0),ee!=null&&(E.renderCache[ee]=void 0),re&256){E.ctx.deactivate(y);return}const se=re&1&&te,Ie=!ci(y);let Ee;if(Ie&&(Ee=K&&K.onVnodeBeforeUnmount)&&Qt(Ee,E,y),re&6)Gt(y.component,D,U);else{if(re&128){y.suspense.unmount(D,U);return}se&&gr(y,null,E,"beforeUnmount"),re&64?y.type.remove(y,E,D,Z,U):q&&!q.hasOnce&&(j!==qt||Q>0&&Q&64)?Rt(q,E,D,!1,!0):(j===qt&&Q&384||!N&&re&16)&&Rt(H,E,D),U&&Le(y)}(Ie&&(Ee=K&&K.onVnodeUnmounted)||se)&&Ot(()=>{Ee&&Qt(Ee,E,y),se&&gr(y,null,E,"unmounted")},D)},Le=y=>{const{type:E,el:D,anchor:U,transition:N}=y;if(E===qt){xn(D,U);return}if(E===wc){$(y);return}const j=()=>{s(D),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:K,delayLeave:z}=N,H=()=>K(D,j);z?z(y.el,j,H):H()}else j()},xn=(y,E)=>{let D;for(;y!==E;)D=m(y),s(y),y=D;s(E)},Gt=(y,E,D)=>{const{bum:U,scope:N,job:j,subTree:K,um:z,m:H,a:q}=y;ed(H),ed(q),U&&So(U),N.stop(),j&&(j.flags|=8,Me(K,y,E,D)),z&&Ot(z,E),Ot(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Rt=(y,E,D,U=!1,N=!1,j=0)=>{for(let K=j;K<y.length;K++)Me(y[K],E,D,U,N)},V=y=>{if(y.shapeFlag&6)return V(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=m(y.anchor||y.el),D=E&&E[IE];return D?m(D):E};let Y=!1;const G=(y,E,D)=>{y==null?E._vnode&&Me(E._vnode,null,null,!0):b(E._vnode||null,y,E,null,null,null,D),E._vnode=y,Y||(Y=!0,Kh(),fm(),Y=!1)},Z={p:b,um:Me,m:Mt,r:Le,mt:yt,mc:v,pc:fe,pbc:A,n:V,o:t};let ye,Se;return{render:G,hydrate:ye,createApp:KE(G,ye)}}function Ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function nT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Nm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=qn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Nm(o,c)),c.type===Ra&&(c.el=o.el)}}function rT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vm(e)}function ed(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sT=Symbol.for("v-scx"),iT=()=>nn(sT);function Yl(t,e){return Jl(t,null,e)}function rn(t,e,n){return Jl(t,e,n)}function Jl(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=Xe({},n),l=e&&r||!e&&i!=="post";let u;if(Ai){if(i==="sync"){const _=iT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=tn,_.resume=tn,_.pause=tn,_}}const d=rt;c.call=(_,R,b)=>un(_,d,R,b);let f=!1;i==="post"?c.scheduler=_=>{Ot(_,d&&d.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(_,R)=>{R?_():zl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=vE(t,e,c);return Ai&&(u?u.push(m):l&&m()),m}function oT(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?xm(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Ui(this),c=Jl(s,i.bind(r),n);return o(),c}function xm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const aT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bt(e)}Modifiers`]||t[`${Mr(e)}Modifiers`];function cT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&aT(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ke(d)?d.trim():d)),o.number&&(s=n.map(Hc)));let c,l=r[c=pc(e)]||r[c=pc(Bt(e))];!l&&i&&(l=r[c=pc(Mr(e))]),l&&un(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,un(u,t,6,s)}}function Mm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=u=>{const d=Mm(u,e,!0);d&&(c=!0,Xe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):Xe(o,i),xe(t)&&r.set(t,o),o)}function ba(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Mr(e))||Ae(t,e))}function Tc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:f,data:m,setupState:_,ctx:R,inheritAttrs:b}=t,k=Ho(t);let L,F;try{if(n.shapeFlag&4){const $=s||r,ie=$;L=Jt(u.call(ie,$,d,f,_,m,R)),F=c}else{const $=e;L=Jt($.length>1?$(f,{attrs:c,slots:o,emit:l}):$(f,null)),F=e.props?c:lT(c)}}catch($){hi.length=0,Ia($,t,1),L=Ve(kr)}let B=L;if(F&&b!==!1){const $=Object.keys(F),{shapeFlag:ie}=B;$.length&&ie&7&&(i&&$.some(Ol)&&(F=uT(F,i)),B=vs(B,F,!1,!0))}return n.dirs&&(B=vs(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Wl(B,n.transition),L=B,Ho(k),L}const lT=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},uT=(t,e)=>{const n={};for(const r in t)(!Ol(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?td(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==r[m]&&!ba(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?td(r,o,u):!0:!!o;return!1}function td(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ba(n,i))return!0}return!1}function dT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lm=t=>t.__isSuspense;function fT(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):wE(t)}const qt=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),wc=Symbol.for("v-stc"),hi=[];let Nt=null;function nt(t=!1){hi.push(Nt=t?null:[])}function pT(){hi.pop(),Nt=hi[hi.length-1]||null}let Ii=1;function nd(t,e=!1){Ii+=t,t<0&&Nt&&e&&(Nt.hasOnce=!0)}function Fm(t){return t.dynamicChildren=Ii>0?Nt||cs:null,pT(),Ii>0&&Nt&&Nt.push(t),t}function bt(t,e,n,r,s,i){return Fm(Oe(t,e,n,r,s,i,!0))}function Um(t,e,n,r,s){return Fm(Ve(t,e,n,r,s,!0))}function Go(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const Bm=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||it(t)||de(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function Oe(t,e=null,n=null,r=0,s=null,i=t===qt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bm(e),ref:e&&Po(e),scopeId:mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return c?(Xl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Ii>0&&!o&&Nt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Nt.push(l),l}const Ve=mT;function mT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===FE)&&(t=kr),Go(t)){const c=vs(t,e,!0);return n&&Xl(c,n),Ii>0&&!i&&Nt&&(c.shapeFlag&6?Nt[Nt.indexOf(t)]=c:Nt.push(c)),c.patchFlag=-2,c}if(RT(t)&&(t=t.__vccOpts),e){e=gT(e);let{class:c,style:l}=e;c&&!Ke(c)&&(e.class=Ml(c)),xe(l)&&(ql(l)&&!ce(l)&&(l=Xe({},l)),e.style=xl(l))}const o=Ke(t)?1:Lm(t)?128:AE(t)?64:xe(t)?4:de(t)?2:0;return Oe(t,e,n,r,s,o,i,!0)}function gT(t){return t?ql(t)||Rm(t)?Xe({},t):t:null}function vs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?jm(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Bm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Po(e)):[i,Po(e)]:Po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Wl(d,l.clone(d)),d}function Qo(t=" ",e=0){return Ve(Ra,null,t,e)}function $m(t="",e=!1){return e?(nt(),Um(kr,null,t)):Ve(kr,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Ve(kr):ce(t)?Ve(qt,null,t.slice()):Go(t)?qn(t):Ve(Ra,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Rm(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[Qo(e)]):n=8);t.children=e,t.shapeFlag|=n}function jm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ml([e.class,r.class]));else if(s==="style")e.style=xl([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){un(t,e,7,[n,r])}const _T=Im();let yT=0;function vT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_T,i={uid:yT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pm(r,s),emitsOptions:Mm(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cT.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const ET=()=>rt||Pt;let Yo,el;{const t=Ta(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),el=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const Ui=t=>{const e=rt;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},rd=()=>{rt&&rt.scope.off(),Yo(null)};function qm(t){return t.vnode.shapeFlag&4}let Ai=!1;function TT(t,e=!1,n=!1){e&&el(e);const{props:r,children:s}=t.vnode,i=qm(t);GE(t,r,i,e),XE(t,s,n);const o=i?wT(t,e):void 0;return e&&el(!1),o}function wT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,BE);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?AT(t):null,i=Ui(t),o=Fi(r,t,0,[t.props,s]),c=Up(o);if(ur(),i(),(c||t.sp)&&!ci(t)&&_m(t),c){if(o.then(rd,rd),e)return o.then(l=>{sd(t,l,e)}).catch(l=>{Ia(l,t,0)});t.asyncDep=o}else sd(t,o,e)}else Hm(t,e)}function sd(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=um(e)),Hm(t,n)}let id;function Hm(t,e,n){const r=t.type;if(!t.render){if(!e&&id&&!r.render){const s=r.template||Gl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Xe(Xe({isCustomElement:i,delimiters:c},o),l);r.render=id(s,u)}}t.render=r.render||tn}{const s=Ui(t);lr();try{$E(t)}finally{ur(),s()}}}const IT={get(t,e){return pt(t,"get",""),t[e]}};function AT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,IT),slots:t.slots,emit:t.emit,expose:e}}function Sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(um(uE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}})):t.proxy}function bT(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function RT(t){return de(t)&&"__vccOpts"in t}const Fe=(t,e)=>_E(t,e,Ai);function Zl(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ce(e)?Go(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Go(n)&&(n=[n]),Ve(t,e,n))}const ST="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const od=typeof window<"u"&&window.trustedTypes;if(od)try{tl=od.createPolicy("vue",{createHTML:t=>t})}catch{}const zm=tl?t=>tl.createHTML(t):t=>t,PT="http://www.w3.org/2000/svg",CT="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,ad=_n&&_n.createElement("template"),kT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_n.createElementNS(PT,t):e==="mathml"?_n.createElementNS(CT,t):n?_n.createElement(t,{is:n}):_n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ad.innerHTML=zm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ad.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},DT=Symbol("_vtc");function OT(t,e,n){const r=t[DT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cd=Symbol("_vod"),NT=Symbol("_vsh"),VT=Symbol(""),xT=/(^|;)\s*display\s*:/;function MT(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Co(r,c,"")}else for(const o in e)n[o]==null&&Co(r,o,"");for(const o in n)o==="display"&&(i=!0),Co(r,o,n[o])}else if(s){if(e!==n){const o=r[VT];o&&(n+=";"+o),r.cssText=n,i=xT.test(n)}}else e&&t.removeAttribute("style");cd in t&&(t[cd]=i?r.display:"",t[NT]&&(r.display="none"))}const ld=/\s*!important$/;function Co(t,e,n){if(ce(n))n.forEach(r=>Co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=LT(t,e);ld.test(n)?t.setProperty(Mr(r),n.replace(ld,""),"important"):t[r]=n}}const ud=["Webkit","Moz","ms"],Ic={};function LT(t,e){const n=Ic[e];if(n)return n;let r=Bt(e);if(r!=="filter"&&r in t)return Ic[e]=r;r=Ea(r);for(let s=0;s<ud.length;s++){const i=ud[s]+r;if(i in t)return Ic[e]=i}return e}const hd="http://www.w3.org/1999/xlink";function dd(t,e,n,r,s,i=$v(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(hd,e.slice(6,e.length)):t.setAttributeNS(hd,e,n):n==null||i&&!qp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":cr(n)?String(n):n)}function fd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function es(t,e,n,r){t.addEventListener(e,n,r)}function FT(t,e,n,r){t.removeEventListener(e,n,r)}const pd=Symbol("_vei");function UT(t,e,n,r,s=null){const i=t[pd]||(t[pd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=BT(e);if(r){const u=i[e]=qT(r,s);es(t,c,u,l)}else o&&(FT(t,c,o,l),i[e]=void 0)}}const md=/(?:Once|Passive|Capture)$/;function BT(t){let e;if(md.test(t)){e={};let r;for(;r=t.match(md);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let Ac=0;const $T=Promise.resolve(),jT=()=>Ac||($T.then(()=>Ac=0),Ac=Date.now());function qT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(HT(r,n.value),e,5,[r])};return n.value=t,n.attached=jT(),n}function HT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const gd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?OT(t,r,o):e==="style"?MT(t,n,r):_a(e)?Ol(e)||UT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WT(t,e,r,o))?(fd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?fd(t,Bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),dd(t,e,r,o))};function WT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&gd(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gd(e)&&Ke(n)?!1:e in t}const _d=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>So(e,n):e};function KT(t){t.target.composing=!0}function yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bc=Symbol("_assign"),Wm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bc]=_d(s);const i=r||s.props&&s.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Hc(c)),t[bc](c)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",KT),es(t,"compositionend",yd),es(t,"change",yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bc]=_d(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Hc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},GT=["ctrl","shift","alt","meta"],QT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GT.some(n=>t[`${n}Key`]&&!e.includes(n))},$D=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=QT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},YT=Xe({patchProp:zT},kT);let vd;function JT(){return vd||(vd=eT(YT))}const XT=(...t)=>{const e=JT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ew(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ZT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ZT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ew(t){return Ke(t)?document.querySelector(t):t}const Ds=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tw={data:()=>({drawer:!1}),methods:{onGiftClick(){console.log("Gift clicked"),this.$router.push("/mogilist1116")},onMapClick(){console.log("Map clicked"),this.$router.push("/")}}};function nw(t,e,n,r,s,i){const o=Wo("v-toolbar-title"),c=Wo("v-app-bar");return nt(),Um(c,{color:"orange darken-2",app:"",dense:"",class:"custom-app-bar"},{default:Qc(()=>[Oe("div",{class:"menu-button",onClick:e[0]||(e[0]=l=>t.drawer=!t.drawer)},e[1]||(e[1]=[Oe("span",{class:"menu-text"},"串本町",-1)])),Ve(o,{class:"app-title"},{default:Qc(()=>e[2]||(e[2]=[Qo("和歌山マップアプリ")])),_:1})]),_:1})}const rw=Ds(tw,[["render",nw],["__scopeId","data-v-0d6c5514"]]),sw={components:{TopBar:rw}},iw={id:"app"};function ow(t,e,n,r,s,i){const o=Wo("TopBar"),c=Wo("router-view");return nt(),bt("div",iw,[Ve(o),Ve(c)])}const aw=Ds(sw,[["render",ow],["__scopeId","data-v-29405027"]]);function cw(t,e){let n;function r(){n=jv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}rn(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),Hv(()=>{n==null||n.stop()})}const Zt=typeof window<"u",lw=Zt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function uw(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function Ed(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),uw(t,e.split("."),n))}function Km(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function Td(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Rc(t,e){return e.every(n=>t.hasOwnProperty(n))}function hw(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function dw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function wd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Id(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function fw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function Pn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(Td(i)&&Td(o)){r[s]=Pn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function ps(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ps.cache.has(t))return ps.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ps.cache.set(t,e),e}ps.cache=new Map;const Jr=2.4,Ad=.2126729,bd=.7151522,Rd=.072175,pw=.55,mw=.58,gw=.57,_w=.62,go=.03,Sd=1.45,yw=5e-4,vw=1.25,Ew=1.25,Pd=.078,Cd=12.82051282051282,_o=.06,kd=.001;function Dd(t,e){const n=(t.r/255)**Jr,r=(t.g/255)**Jr,s=(t.b/255)**Jr,i=(e.r/255)**Jr,o=(e.g/255)**Jr,c=(e.b/255)**Jr;let l=n*Ad+r*bd+s*Rd,u=i*Ad+o*bd+c*Rd;if(l<=go&&(l+=(go-l)**Sd),u<=go&&(u+=(go-u)**Sd),Math.abs(u-l)<yw)return 0;let d;if(u>l){const f=(u**pw-l**mw)*vw;d=f<kd?0:f<Pd?f-f*Cd*_o:f-_o}else{const f=(u**_w-l**gw)*Ew;d=f>-kd?0:f>-Pd?f-f*Cd*_o:f+_o}return d*100}const Jo=.20689655172413793,Tw=t=>t>Jo**3?Math.cbrt(t):t/(3*Jo**2)+4/29,ww=t=>t>Jo?t**3:3*Jo**2*(t-4/29);function Gm(t){const e=Tw,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Qm(t){const e=ww,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const Iw=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Aw=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,bw=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Rw=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Ym(t){const e=Array(3),n=Aw,r=Iw;for(let s=0;s<3;++s)e[s]=Math.round(dw(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function eu(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=Rw,o=bw;e=i(e/255),n=i(n/255),r=i(r/255);for(let c=0;c<3;++c)s[c]=o[c][0]*e+o[c][1]*n+o[c][2]*r;return s}const Od=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Sw={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>Nd({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>Nd({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>bi({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>bi({h:t,s:e,v:n,a:r})};function En(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Od.test(t)){const{groups:e}=t.match(Od),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return Sw[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),Cw(e)}else if(typeof t=="object"){if(Rc(t,["r","g","b"]))return t;if(Rc(t,["h","s","l"]))return bi(Jm(t));if(Rc(t,["h","s","v"]))return bi(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function bi(t){const{h:e,s:n,v:r,a:s}=t,i=c=>{const l=(c+e/60)%6;return r-r*n*Math.max(Math.min(l,4-l,1),0)},o=[i(5),i(3),i(1)].map(c=>Math.round(c*255));return{r:o[0],g:o[1],b:o[2],a:s}}function Nd(t){return bi(Jm(t))}function Jm(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function yo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function Pw(t){let{r:e,g:n,b:r,a:s}=t;return`#${[yo(e),yo(n),yo(r),s!==void 0?yo(Math.round(s*255)):""].join("")}`}function Cw(t){t=kw(t);let[e,n,r,s]=fw(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function kw(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=wd(wd(t,6),8,"F")),t}function Dw(t,e){const n=Gm(eu(t));return n[0]=n[0]+e*10,Ym(Qm(n))}function Ow(t,e){const n=Gm(eu(t));return n[0]=n[0]-e*10,Ym(Qm(n))}function Nw(t){const e=En(t);return eu(e)[1]}function Vw(t){const e=Math.abs(Dd(En(0),En(t)));return Math.abs(Dd(En(16777215),En(t)))>Math.min(e,50)?"#fff":"#000"}function Xm(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}function Pa(t,e){const n=ET();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Zm=0,ko=new WeakMap;function eg(){const t=Pa("getUid");if(ko.has(t))return ko.get(t);{const e=Zm++;return ko.set(t,e),e}}eg.reset=()=>{Zm=0,ko=new WeakMap};function xw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pa("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const Ri=Symbol.for("vuetify:defaults");function Mw(t){return Cr(t)}function tg(){const t=nn(Ri);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Lw(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ps(e)])<"u"}function Fw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:tg();const r=Pa("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=Fe(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),i=new Proxy(t,{get(l,u){var f,m,_,R,b,k,L;const d=Reflect.get(l,u);return u==="class"||u==="style"?[(f=s.value)==null?void 0:f[u],d].filter(F=>F!=null):typeof u=="string"&&!Lw(r.vnode,u)?((m=s.value)==null?void 0:m[u])!==void 0?(_=s.value)==null?void 0:_[u]:((b=(R=n.value)==null?void 0:R.global)==null?void 0:b[u])!==void 0?(L=(k=n.value)==null?void 0:k.global)==null?void 0:L[u]:d:d}}),o=Ar();Yl(()=>{if(s.value){const l=Object.entries(s.value).filter(u=>{let[d]=u;return d.startsWith(d[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function c(){const l=xw(Ri,r);ui(Ri,Fe(()=>o.value?Pn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:i,provideSubDefaults:c}}function Bi(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Xm(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return hw(r,e)},t.props._as=String,t.setup=function(r,s){const i=tg();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:c}=Fw(r,r._as??t.name,i),l=t._setup(o,s);return c(),l}}return t}function Uw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Bi:Kl)(e)}function Bw(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const i=Pa("useProxiedModel"),o=Cr(t[e]!==void 0?t[e]:n),c=ps(e),u=Fe(c!==e?()=>{var f,m,_,R;return t[e],!!(((f=i.vnode.props)!=null&&f.hasOwnProperty(e)||(m=i.vnode.props)!=null&&m.hasOwnProperty(c))&&((_=i.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${e}`)||(R=i.vnode.props)!=null&&R.hasOwnProperty(`onUpdate:${c}`)))}:()=>{var f,m;return t[e],!!((f=i.vnode.props)!=null&&f.hasOwnProperty(e)&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)))});cw(()=>!u.value,()=>{rn(()=>t[e],f=>{o.value=f})});const d=Fe({get(){const f=t[e];return r(u.value?f:o.value)},set(f){const m=s(f),_=we(u.value?t[e]:o.value);_===m||r(_)===f||(o.value=m,i==null||i.emit(`update:${e}`,m))}});return Object.defineProperty(d,"externalValue",{get:()=>u.value?t[e]:o.value}),d}const $w={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Vd="$vuetify.",xd=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),ng=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(Vd))return xd(r,i);const c=r.replace(Vd,""),l=t.value&&n.value[t.value],u=e.value&&n.value[e.value];let d=Ed(l,c,null);return d||(`${r}${t.value}`,d=Ed(u,c,null)),d||(d=r),typeof d!="string"&&(d=r),xd(d,i)};function rg(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function Sc(t,e,n){const r=Bw(t,e,t[e]??n.value);return r.value=t[e]??n.value,rn(n,s=>{t[e]==null&&(r.value=n.value)}),r}function sg(t){return e=>{const n=Sc(e,"locale",t.current),r=Sc(e,"fallback",t.fallback),s=Sc(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:ng(n,r,s),n:rg(n,r),provide:sg({current:n,fallback:r,messages:s})}}}function jw(t){const e=Ar((t==null?void 0:t.locale)??"en"),n=Ar((t==null?void 0:t.fallback)??"en"),r=Cr({en:$w,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:ng(e,n,r),n:rg(e,n),provide:sg({current:e,fallback:n,messages:r})}}const Md=Symbol.for("vuetify:locale");function qw(t){return t.name!=null}function Hw(t){const e=t!=null&&t.adapter&&qw(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:jw(t),n=Ww(e,t);return{...e,...n}}function zw(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Ww(t,e){const n=Cr((e==null?void 0:e.rtl)??zw()),r=Fe(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:Fe(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}const Ca={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Kw(t,e,n){const r=[];let s=[];const i=ig(t),o=og(t),c=n??Ca[e.slice(-2).toUpperCase()]??0,l=(i.getDay()-c+7)%7,u=(o.getDay()-c+7)%7;for(let d=0;d<l;d++){const f=new Date(i);f.setDate(f.getDate()-(l-d)),s.push(f)}for(let d=1;d<=o.getDate();d++){const f=new Date(t.getFullYear(),t.getMonth(),d);s.push(f),s.length===7&&(r.push(s),s=[])}for(let d=1;d<7-u;d++){const f=new Date(o);f.setDate(f.getDate()+d),s.push(f)}return s.length>0&&r.push(s),r}function Gw(t,e,n){const r=n??Ca[e.slice(-2).toUpperCase()]??0,s=new Date(t);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function Qw(t,e){const n=new Date(t),r=((Ca[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function ig(t){return new Date(t.getFullYear(),t.getMonth(),1)}function og(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Yw(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const Jw=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function ag(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(Jw.test(t))return Yw(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Ld=new Date(2e3,0,2);function Xw(t,e){const n=e??Ca[t.slice(-2).toUpperCase()]??0;return Km(7).map(r=>{const s=new Date(Ld);return s.setDate(Ld.getDate()+n+r),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function Zw(t,e,n,r){const s=ag(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const c=s.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${c} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function e0(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Id(String(n.getMonth()+1),2,"0"),i=Id(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function t0(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function n0(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function r0(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function s0(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function i0(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function o0(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function a0(t){return t.getFullYear()}function c0(t){return t.getMonth()}function l0(t){return t.getDate()}function u0(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function h0(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function d0(t){return t.getHours()}function f0(t){return t.getMinutes()}function p0(t){return new Date(t.getFullYear(),0,1)}function m0(t){return new Date(t.getFullYear(),11,31)}function g0(t,e){return Xo(t,e[0])&&v0(t,e[1])}function _0(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Xo(t,e){return t.getTime()>e.getTime()}function y0(t,e){return Xo(nl(t),nl(e))}function v0(t,e){return t.getTime()<e.getTime()}function Fd(t,e){return t.getTime()===e.getTime()}function E0(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function T0(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function w0(t,e){return t.getFullYear()===e.getFullYear()}function I0(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function A0(t,e){const n=new Date(t);return n.setHours(e),n}function b0(t,e){const n=new Date(t);return n.setMinutes(e),n}function R0(t,e){const n=new Date(t);return n.setMonth(e),n}function S0(t,e){const n=new Date(t);return n.setDate(e),n}function P0(t,e){const n=new Date(t);return n.setFullYear(e),n}function nl(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function C0(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class k0{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return ag(e)}toJsDate(e){return e}toISO(e){return e0(this,e)}parseISO(e){return t0(e)}addMinutes(e,n){return n0(e,n)}addHours(e,n){return r0(e,n)}addDays(e,n){return s0(e,n)}addWeeks(e,n){return i0(e,n)}addMonths(e,n){return o0(e,n)}getWeekArray(e,n){return Kw(e,this.locale,n?Number(n):void 0)}startOfWeek(e,n){return Gw(e,this.locale,n?Number(n):void 0)}endOfWeek(e){return Qw(e,this.locale)}startOfMonth(e){return ig(e)}endOfMonth(e){return og(e)}format(e,n){return Zw(e,n,this.locale,this.formats)}isEqual(e,n){return Fd(e,n)}isValid(e){return _0(e)}isWithinRange(e,n){return g0(e,n)}isAfter(e,n){return Xo(e,n)}isAfterDay(e,n){return y0(e,n)}isBefore(e,n){return!Xo(e,n)&&!Fd(e,n)}isSameDay(e,n){return E0(e,n)}isSameMonth(e,n){return T0(e,n)}isSameYear(e,n){return w0(e,n)}setMinutes(e,n){return b0(e,n)}setHours(e,n){return A0(e,n)}setMonth(e,n){return R0(e,n)}setDate(e,n){return S0(e,n)}setYear(e,n){return P0(e,n)}getDiff(e,n,r){return I0(e,n,r)}getWeekdays(e){return Xw(this.locale,e?Number(e):void 0)}getYear(e){return a0(e)}getMonth(e){return c0(e)}getDate(e){return l0(e)}getNextMonth(e){return u0(e)}getPreviousMonth(e){return h0(e)}getHours(e){return d0(e)}getMinutes(e){return f0(e)}startOfDay(e){return nl(e)}endOfDay(e){return C0(e)}startOfYear(e){return p0(e)}endOfYear(e){return m0(e)}}const D0=Symbol.for("vuetify:date-options"),Ud=Symbol.for("vuetify:date-adapter");function O0(t,e){const n=Pn({adapter:k0,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:N0(n,e)}}function N0(t,e){const n=Lr(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return rn(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const Bd=Symbol.for("vuetify:display"),$d={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},V0=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$d;return Pn($d,t)};function jd(t){return Zt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function qd(t){return Zt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Hd(t){const e=Zt&&!t?window.navigator.userAgent:"ssr";function n(R){return!!e.match(R)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),c=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),d=n(/opera/i),f=n(/win/i),m=n(/mac/i),_=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:c,edge:l,firefox:u,opera:d,win:f,mac:m,linux:_,touch:lw,ssr:e==="ssr"}}function x0(t,e){const{thresholds:n,mobileBreakpoint:r}=V0(t),s=Ar(qd(e)),i=Ar(Hd(e)),o=Lr({}),c=Ar(jd(e));function l(){s.value=qd(),c.value=jd()}function u(){l(),i.value=Hd()}return Yl(()=>{const d=c.value<n.sm,f=c.value<n.md&&!d,m=c.value<n.lg&&!(f||d),_=c.value<n.xl&&!(m||f||d),R=c.value<n.xxl&&!(_||m||f||d),b=c.value>=n.xxl,k=d?"xs":f?"sm":m?"md":_?"lg":R?"xl":"xxl",L=typeof r=="number"?r:n[r],F=c.value<L;o.xs=d,o.sm=f,o.md=m,o.lg=_,o.xl=R,o.xxl=b,o.smAndUp=!d,o.mdAndUp=!(d||f),o.lgAndUp=!(d||f||m),o.xlAndUp=!(d||f||m||_),o.smAndDown=!(m||_||R||b),o.mdAndDown=!(_||R||b),o.lgAndDown=!(R||b),o.xlAndDown=!b,o.name=k,o.height=s.value,o.width=c.value,o.mobile=F,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Zt&&window.addEventListener("resize",l,{passive:!0}),{...fE(o),update:u,ssr:!!e}}const M0=Symbol.for("vuetify:goto");function L0(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function F0(t,e){return{rtl:e.isRtl,options:Pn(L0(),t)}}const U0={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},B0={component:t=>Zl(cg,{...t,class:"mdi"})},$0=[String,Function,Object,Array],zd=Symbol.for("vuetify:icons"),ka=Xm({icon:{type:$0},tag:{type:String,required:!0}},"icon");Uw()({name:"VComponentIcon",props:ka(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return Ve(t.tag,null,{default:()=>{var s;return[t.icon?Ve(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}});const j0=Bi({name:"VSvgIcon",inheritAttrs:!1,props:ka(),setup(t,e){let{attrs:n}=e;return()=>Ve(t.tag,jm(n,{style:null}),{default:()=>[Ve("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?Ve("path",{d:r[0],"fill-opacity":r[1]},null):Ve("path",{d:r},null)):Ve("path",{d:t.icon},null)])]})}});Bi({name:"VLigatureIcon",props:ka(),setup(t){return()=>Ve(t.tag,null,{default:()=>[t.icon]})}});const cg=Bi({name:"VClassIcon",props:ka(),setup(t){return()=>Ve(t.tag,{class:t.icon},null)}});function q0(){return{svg:{component:j0},class:{component:cg}}}function H0(t){const e=q0(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=B0),Pn({defaultSet:n,sets:e,aliases:{...U0,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const Wd=Symbol.for("vuetify:theme");function Kd(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function z0(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Kd();const e=Kd();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const c=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=Pn(c,o)}return Pn(e,{...t,themes:n})}function W0(t){const e=z0(t),n=Cr(e.defaultTheme),r=Cr(e.themes),s=Fe(()=>{const d={};for(const[f,m]of Object.entries(r.value)){const _=d[f]={...m,colors:{...m.colors}};if(e.variations)for(const R of e.variations.colors){const b=_.colors[R];if(b)for(const k of["lighten","darken"]){const L=k==="lighten"?Dw:Ow;for(const F of Km(e.variations[k],1))_.colors[`${R}-${k}-${F}`]=Pw(L(En(b),F))}}for(const R of Object.keys(_.colors)){if(/^on-[a-z]/.test(R)||_.colors[`on-${R}`])continue;const b=`on-${R}`,k=En(_.colors[R]);_.colors[b]=Vw(k)}}return d}),i=Fe(()=>s.value[n.value]),o=Fe(()=>{var R;const d=[];(R=i.value)!=null&&R.dark&&yr(d,":root",["color-scheme: dark"]),yr(d,":root",Gd(i.value));for(const[b,k]of Object.entries(s.value))yr(d,`.v-theme--${b}`,[`color-scheme: ${k.dark?"dark":"normal"}`,...Gd(k)]);const f=[],m=[],_=new Set(Object.values(s.value).flatMap(b=>Object.keys(b.colors)));for(const b of _)/^on-[a-z]/.test(b)?yr(m,`.${b}`,[`color: rgb(var(--v-theme-${b})) !important`]):(yr(f,`.bg-${b}`,[`--v-theme-overlay-multiplier: var(--v-theme-${b}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${b})) !important`,`color: rgb(var(--v-theme-on-${b})) !important`]),yr(m,`.text-${b}`,[`color: rgb(var(--v-theme-${b})) !important`]),yr(m,`.border-${b}`,[`--v-border-color: var(--v-theme-${b})`]));return d.push(...f,...m),d.map((b,k)=>k===0?b:`    ${b}`).join("")});function c(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(d){if(e.isDisabled)return;const f=d._context.provides.usehead;if(f)if(f.push){const m=f.push(c);Zt&&rn(o,()=>{m.patch(c)})}else Zt?(f.addHeadObjs(Fe(c)),Yl(()=>f.updateDOM())):f.addHeadObjs(c());else{let _=function(){if(typeof document<"u"&&!m){const R=document.createElement("style");R.type="text/css",R.id="vuetify-theme-stylesheet",e.cspNonce&&R.setAttribute("nonce",e.cspNonce),m=R,document.head.appendChild(m)}m&&(m.innerHTML=o.value)},m=Zt?document.getElementById("vuetify-theme-stylesheet"):null;Zt?rn(o,_,{immediate:!0}):_()}}const u=Fe(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:u,styles:o,global:{name:n,current:i}}}function yr(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function Gd(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=En(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${Nw(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?En(i):void 0,c=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${c??i}`)}return r}function lg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=Pn(e,n),{aliases:s={},components:i={},directives:o={}}=r,c=Mw(r.defaults),l=x0(r.display,r.ssr),u=W0(r.theme),d=H0(r.icons),f=Hw(r.locale),m=O0(r.date,f),_=F0(r.goTo,f);return{install:b=>{for(const k in o)b.directive(k,o[k]);for(const k in i)b.component(k,i[k]);for(const k in s)b.component(k,Bi({...s[k],name:k,aliasName:s[k].name}));if(u.install(b),b.provide(Ri,c),b.provide(Bd,l),b.provide(Wd,u),b.provide(zd,d),b.provide(Md,f),b.provide(D0,m.options),b.provide(Ud,m.instance),b.provide(M0,_),Zt&&r.ssr)if(b.$nuxt)b.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:k}=b;b.mount=function(){const L=k(...arguments);return Hl(()=>l.update()),b.mount=k,L}}eg.reset(),b.mixin({computed:{$vuetify(){return Lr({defaults:Xr.call(this,Ri),display:Xr.call(this,Bd),theme:Xr.call(this,Wd),icons:Xr.call(this,zd),locale:Xr.call(this,Md),date:Xr.call(this,Ud)})}}})},defaults:c,display:l,theme:u,icons:d,locale:f,date:m,goTo:_}}const K0="3.7.0-beta.1";lg.version=K0;function Xr(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const G0="modulepreload",Q0=function(t){return"/"+t},Qd={},Y0=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=Q0(l),l in Qd)return;Qd[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":G0,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof document<"u";function ug(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function J0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ug(t.default)}const Re=Object.assign;function Pc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const di=()=>{},Wt=Array.isArray,hg=/#/g,X0=/&/g,Z0=/\//g,eI=/=/g,tI=/\?/g,dg=/\+/g,nI=/%5B/g,rI=/%5D/g,fg=/%5E/g,sI=/%60/g,pg=/%7B/g,iI=/%7C/g,mg=/%7D/g,oI=/%20/g;function tu(t){return encodeURI(""+t).replace(iI,"|").replace(nI,"[").replace(rI,"]")}function aI(t){return tu(t).replace(pg,"{").replace(mg,"}").replace(fg,"^")}function rl(t){return tu(t).replace(dg,"%2B").replace(oI,"+").replace(hg,"%23").replace(X0,"%26").replace(sI,"`").replace(pg,"{").replace(mg,"}").replace(fg,"^")}function cI(t){return rl(t).replace(eI,"%3D")}function lI(t){return tu(t).replace(hg,"%23").replace(tI,"%3F")}function uI(t){return t==null?"":lI(t).replace(Z0,"%2F")}function Si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hI=/\/$/,dI=t=>t.replace(hI,"");function Cc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=gI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Si(o)}}function fI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Es(e.matched[r],n.matched[s])&&gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mI(t[n],e[n]))return!1;return!0}function mI(t,e){return Wt(t)?Jd(t,e):Wt(e)?Jd(e,t):t===e}function Jd(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var fi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fi||(fi={}));function _I(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dI(t)}const yI=/^[^#]+#/;function vI(t,e){return t.replace(yI,"#")+e}function EI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.scrollX,top:window.scrollY});function TI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=EI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xd(t,e){return(history.state?history.state.position-e:-1)+t}const sl=new Map;function wI(t,e){sl.set(t,e)}function II(t){const e=sl.get(t);return sl.delete(t),e}let AI=()=>location.protocol+"//"+location.host;function _g(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Yd(l,"")}return Yd(n,t)+r+s}function bI(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=_g(t,location),R=n.value,b=e.value;let k=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}k=b?m.position-b.position:0}else r(_);s.forEach(L=>{L(n.value,R,{delta:k,type:Pi.pop,direction:k?k>0?fi.forward:fi.back:fi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:Da()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Zd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function RI(t){const{history:e,location:n}=window,r={value:_g(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:AI()+t+l;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,u){const d=Re({},e.state,Zd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Re({},s.value,e.state,{forward:l,scroll:Da()});i(d.current,d,!0);const f=Re({},Zd(r.value,l,null),{position:d.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function SI(t){t=_I(t);const e=RI(t),n=bI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:vI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PI(t){return typeof t=="string"||t&&typeof t=="object"}function yg(t){return typeof t=="string"||typeof t=="symbol"}const vg=Symbol("");var ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ef||(ef={}));function Ts(t,e){return Re(new Error,{type:t,[vg]:!0},e)}function gn(t,e){return t instanceof Error&&vg in t&&(e==null||!!(t.type&e))}const tf="[^/]+?",CI={sensitive:!1,strict:!1,start:!0,end:!0},kI=/[.+*?^${}()[\]/\\]/g;function DI(t,e){const n=Re({},CI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let _=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(kI,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:b,optional:k,regexp:L}=m;i.push({name:R,repeatable:b,optional:k});const F=L||tf;if(F!==tf){_+=10;try{new RegExp(`(${F})`)}catch($){throw new Error(`Invalid custom RegExp for param "${R}" (${F}): `+$.message)}}let B=b?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(B=k&&u.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),s+=B,_+=20,k&&(_+=-8),b&&(_+=-20),F===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",R=i[m-1];f[R.name]=_&&R.repeatable?_.split("/"):_}return f}function l(u){let d="",f=!1;for(const m of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:R,repeatable:b,optional:k}=_,L=R in u?u[R]:"";if(Wt(L)&&!b)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const F=Wt(L)?L.join("/"):L;if(!F)if(k)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);d+=F}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function OI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Eg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nf(r))return 1;if(nf(s))return-1}return s.length-r.length}function nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NI={type:0,value:""},VI=/[a-zA-Z0-9_]/;function xI(t){if(!t)return[[]];if(t==="/")return[[NI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:VI.test(l)?m():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function MI(t,e,n){const r=DI(xI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LI(t,e){const n=[],r=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,m,_){const R=!_,b=sf(f);b.aliasOf=_&&_.record;const k=af(e,f),L=[b];if("alias"in f){const $=typeof f.alias=="string"?[f.alias]:f.alias;for(const ie of $)L.push(sf(Re({},b,{components:_?_.record.components:b.components,path:ie,aliasOf:_?_.record:b})))}let F,B;for(const $ of L){const{path:ie}=$;if(m&&ie[0]!=="/"){const le=m.record.path,I=le[le.length-1]==="/"?"":"/";$.path=m.record.path+(ie&&I+ie)}if(F=MI($,m,k),_?_.alias.push(F):(B=B||F,B!==F&&B.alias.push(F),R&&f.name&&!of(F)&&o(f.name)),Tg(F)&&l(F),b.children){const le=b.children;for(let I=0;I<le.length;I++)i(le[I],F,_&&_.children[I])}_=_||F}return B?()=>{o(B)}:di}function o(f){if(yg(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function l(f){const m=BI(f,n);n.splice(m,0,f),f.record.name&&!of(f)&&r.set(f.record.name,f)}function u(f,m){let _,R={},b,k;if("name"in f&&f.name){if(_=r.get(f.name),!_)throw Ts(1,{location:f});k=_.record.name,R=Re(rf(m.params,_.keys.filter(B=>!B.optional).concat(_.parent?_.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&rf(f.params,_.keys.map(B=>B.name))),b=_.stringify(R)}else if(f.path!=null)b=f.path,_=n.find(B=>B.re.test(b)),_&&(R=_.parse(b),k=_.record.name);else{if(_=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!_)throw Ts(1,{location:f,currentLocation:m});k=_.record.name,R=Re({},m.params,f.params),b=_.stringify(R)}const L=[];let F=_;for(;F;)L.unshift(F.record),F=F.parent;return{name:k,path:b,params:R,matched:L,meta:UI(L)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function rf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function UI(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function BI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Eg(t,e[i])<0?r=i:n=i+1}const s=$I(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $I(t){let e=t;for(;e=e.parent;)if(Tg(e)&&Eg(t,e)===0)return e}function Tg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dg," "),o=i.indexOf("="),c=Si(o<0?i:i.slice(0,o)),l=o<0?null:Si(i.slice(o+1));if(c in e){let u=e[c];Wt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function cf(t){let e="";for(let n in t){const r=t[n];if(n=cI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&rl(i)):[r&&rl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const HI=Symbol(""),lf=Symbol(""),nu=Symbol(""),wg=Symbol(""),il=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ts(4,{from:n,to:e})):m instanceof Error?l(m):PI(m)?l(Ts(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(m=>l(m))})}function kc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ug(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Hn(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const f=J0(d)?d.default:d;o.mods[c]=d,o.components[c]=f;const _=(f.__vccOpts||f)[e];return _&&Hn(_,n,r,o,c,s)()}))}}return i}function uf(t){const e=nn(nu),n=nn(wg),r=Fe(()=>{const l=hs(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(Es.bind(null,d));if(m>-1)return m;const _=hf(l[u-2]);return u>1&&hf(d)===_&&f[f.length-1].path!==_?f.findIndex(Es.bind(null,l[u-2])):m}),i=Fe(()=>s.value>-1&&GI(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&gg(n.params,r.value.params));function c(l={}){return KI(l)?e[hs(t.replace)?"replace":"push"](hs(t.to)).catch(di):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const zI=Kl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uf,setup(t,{slots:e}){const n=Lr(uf(t)),{options:r}=nn(nu),s=Fe(()=>({[df(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[df(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),WI=zI;function KI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const df=(t,e,n)=>t??e??n,QI=Kl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn(il),s=Fe(()=>t.route||r.value),i=nn(lf,0),o=Fe(()=>{let u=hs(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),c=Fe(()=>s.value.matched[o.value]);ui(lf,Fe(()=>o.value+1)),ui(HI,c),ui(il,s);const l=Cr();return rn(()=>[l.value,c.value,t.name],([u,d,f],[m,_,R])=>{d&&(d.instances[f]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Es(d,_)||!m)&&(d.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=c.value,m=f&&f.components[d];if(!m)return ff(n.default,{Component:m,route:u});const _=f.props[d],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,k=Zl(m,Re({},R,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[d]=null)},ref:l}));return ff(n.default,{Component:k,route:u})||k}}});function ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YI=QI;function JI(t){const e=LI(t.routes,t),n=t.parseQuery||jI,r=t.stringifyQuery||cf,s=t.history,i=Xs(),o=Xs(),c=Xs(),l=Ar(Bn);let u=Bn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Pc.bind(null,V=>""+V),f=Pc.bind(null,uI),m=Pc.bind(null,Si);function _(V,Y){let G,Z;return yg(V)?(G=e.getRecordMatcher(V),Z=Y):Z=V,e.addRoute(Z,G)}function R(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function b(){return e.getRoutes().map(V=>V.record)}function k(V){return!!e.getRecordMatcher(V)}function L(V,Y){if(Y=Re({},Y||l.value),typeof V=="string"){const E=Cc(n,V,Y.path),D=e.resolve({path:E.path},Y),U=s.createHref(E.fullPath);return Re(E,D,{params:m(D.params),hash:Si(E.hash),redirectedFrom:void 0,href:U})}let G;if(V.path!=null)G=Re({},V,{path:Cc(n,V.path,Y.path).path});else{const E=Re({},V.params);for(const D in E)E[D]==null&&delete E[D];G=Re({},V,{params:f(E)}),Y.params=f(Y.params)}const Z=e.resolve(G,Y),ye=V.hash||"";Z.params=d(m(Z.params));const Se=fI(r,Re({},V,{hash:aI(ye),path:Z.path})),y=s.createHref(Se);return Re({fullPath:Se,hash:ye,query:r===cf?qI(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:y})}function F(V){return typeof V=="string"?Cc(n,V,l.value.path):Re({},V)}function B(V,Y){if(u!==V)return Ts(8,{from:Y,to:V})}function $(V){return I(V)}function ie(V){return $(Re(F(V),{replace:!0}))}function le(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let Z=typeof G=="function"?G(V):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=F(Z):{path:Z},Z.params={}),Re({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function I(V,Y){const G=u=L(V),Z=l.value,ye=V.state,Se=V.force,y=V.replace===!0,E=le(G);if(E)return I(Re(F(E),{state:typeof E=="object"?Re({},ye,E.state):ye,force:Se,replace:y}),Y||G);const D=G;D.redirectedFrom=Y;let U;return!Se&&pI(r,Z,G)&&(U=Ts(16,{to:D,from:Z}),Mt(Z,Z,!0,!1)),(U?Promise.resolve(U):A(D,Z)).catch(N=>gn(N)?gn(N,2)?N:$t(N):fe(N,D,Z)).then(N=>{if(N){if(gn(N,2))return I(Re({replace:y},F(N.to),{state:typeof N.to=="object"?Re({},ye,N.to.state):ye,force:Se}),Y||D)}else N=P(D,Z,!0,y,ye);return S(D,Z,N),N})}function v(V,Y){const G=B(V,Y);return G?Promise.reject(G):Promise.resolve()}function w(V){const Y=xn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function A(V,Y){let G;const[Z,ye,Se]=XI(V,Y);G=kc(Z.reverse(),"beforeRouteLeave",V,Y);for(const E of Z)E.leaveGuards.forEach(D=>{G.push(Hn(D,V,Y))});const y=v.bind(null,V,Y);return G.push(y),Rt(G).then(()=>{G=[];for(const E of i.list())G.push(Hn(E,V,Y));return G.push(y),Rt(G)}).then(()=>{G=kc(ye,"beforeRouteUpdate",V,Y);for(const E of ye)E.updateGuards.forEach(D=>{G.push(Hn(D,V,Y))});return G.push(y),Rt(G)}).then(()=>{G=[];for(const E of Se)if(E.beforeEnter)if(Wt(E.beforeEnter))for(const D of E.beforeEnter)G.push(Hn(D,V,Y));else G.push(Hn(E.beforeEnter,V,Y));return G.push(y),Rt(G)}).then(()=>(V.matched.forEach(E=>E.enterCallbacks={}),G=kc(Se,"beforeRouteEnter",V,Y,w),G.push(y),Rt(G))).then(()=>{G=[];for(const E of o.list())G.push(Hn(E,V,Y));return G.push(y),Rt(G)}).catch(E=>gn(E,8)?E:Promise.reject(E))}function S(V,Y,G){c.list().forEach(Z=>w(()=>Z(V,Y,G)))}function P(V,Y,G,Z,ye){const Se=B(V,Y);if(Se)return Se;const y=Y===Bn,E=ts?history.state:{};G&&(Z||y?s.replace(V.fullPath,Re({scroll:y&&E&&E.scroll},ye)):s.push(V.fullPath,ye)),l.value=V,Mt(V,Y,G,y),$t()}let T;function yt(){T||(T=s.listen((V,Y,G)=>{if(!Gt.listening)return;const Z=L(V),ye=le(Z);if(ye){I(Re(ye,{replace:!0}),Z).catch(di);return}u=Z;const Se=l.value;ts&&wI(Xd(Se.fullPath,G.delta),Da()),A(Z,Se).catch(y=>gn(y,12)?y:gn(y,2)?(I(y.to,Z).then(E=>{gn(E,20)&&!G.delta&&G.type===Pi.pop&&s.go(-1,!1)}).catch(di),Promise.reject()):(G.delta&&s.go(-G.delta,!1),fe(y,Z,Se))).then(y=>{y=y||P(Z,Se,!1),y&&(G.delta&&!gn(y,8)?s.go(-G.delta,!1):G.type===Pi.pop&&gn(y,20)&&s.go(-1,!1)),S(Z,Se,y)}).catch(di)}))}let xt=Xs(),He=Xs(),_e;function fe(V,Y,G){$t(V);const Z=He.list();return Z.length?Z.forEach(ye=>ye(V,Y,G)):console.error(V),Promise.reject(V)}function kt(){return _e&&l.value!==Bn?Promise.resolve():new Promise((V,Y)=>{xt.add([V,Y])})}function $t(V){return _e||(_e=!V,yt(),xt.list().forEach(([Y,G])=>V?G(V):Y()),xt.reset()),V}function Mt(V,Y,G,Z){const{scrollBehavior:ye}=t;if(!ts||!ye)return Promise.resolve();const Se=!G&&II(Xd(V.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return Hl().then(()=>ye(V,Y,Se)).then(y=>y&&TI(y)).catch(y=>fe(y,V,Y))}const Me=V=>s.go(V);let Le;const xn=new Set,Gt={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:b,resolve:L,options:t,push:$,replace:ie,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:He.add,isReady:kt,install(V){const Y=this;V.component("RouterLink",WI),V.component("RouterView",YI),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>hs(l)}),ts&&!Le&&l.value===Bn&&(Le=!0,$(s.location).catch(ye=>{}));const G={};for(const ye in Bn)Object.defineProperty(G,ye,{get:()=>l.value[ye],enumerable:!0});V.provide(nu,Y),V.provide(wg,am(G)),V.provide(il,l);const Z=V.unmount;xn.add(V),V.unmount=function(){xn.delete(V),xn.size<1&&(u=Bn,T&&T(),T=null,l.value=Bn,Le=!1,_e=!1),Z()}}};function Rt(V){return V.reduce((Y,G)=>Y.then(()=>w(G)),Promise.resolve())}return Gt}function XI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Es(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Es(u,l))||s.push(l))}return[n,r,s]}function ZI(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(f){o(f)}}function l(d){try{u(r.throw(d))}catch(f){o(f)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(t,[])).next())})}function eA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tA=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,s,i;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(s=r;s--!==0;)if(!t(e[s],n[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(n).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[s]))return!1;for(s=r;s--!==0;){var o=i[s];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n},nA=eA(tA);const pf="__googleMapsScriptId";var os;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(os||(os={}));class Tr{constructor({apiKey:e,authReferrerPolicy:n,channel:r,client:s,id:i=pf,language:o,libraries:c=[],mapIds:l,nonce:u,region:d,retries:f=3,url:m="https://maps.googleapis.com/maps/api/js",version:_}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=n,this.channel=r,this.client=s,this.id=i||pf,this.language=o,this.libraries=c,this.mapIds=l,this.nonce=u,this.region=d,this.retries=f,this.url=m,this.version=_,Tr.instance){if(!nA(this.options,Tr.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Tr.instance.options)}`);return Tr.instance}Tr.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?os.FAILURE:this.done?os.SUCCESS:this.loading?os.LOADING:os.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,n)=>{this.loadCallback(r=>{r?n(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,n;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(i=>!r[i]&&delete r[i]),!((n=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||n===void 0)&&n.importLibrary||(i=>{let o,c,l,u="The Google Maps JavaScript API",d="google",f="importLibrary",m="__ib__",_=document,R=window;R=R[d]||(R[d]={});const b=R.maps||(R.maps={}),k=new Set,L=new URLSearchParams,F=()=>o||(o=new Promise((B,$)=>ZI(this,void 0,void 0,function*(){var ie;yield c=_.createElement("script"),c.id=this.id,L.set("libraries",[...k]+"");for(l in i)L.set(l.replace(/[A-Z]/g,le=>"_"+le[0].toLowerCase()),i[l]);L.set("callback",d+".maps."+m),c.src=this.url+"?"+L,b[m]=B,c.onerror=()=>o=$(Error(u+" could not load.")),c.nonce=this.nonce||((ie=_.querySelector("script[nonce]"))===null||ie===void 0?void 0:ie.nonce)||"",_.head.append(c)})));b[f]?console.warn(u+" only loads once. Ignoring:",i):b[f]=(B,...$)=>k.add(B)&&F().then(()=>b[f](B,...$))})(r);const s=this.libraries.map(i=>this.importLibrary(i));s.length||s.push(this.importLibrary("core")),Promise.all(s).then(()=>this.callback(),i=>{const o=new ErrorEvent("error",{error:i});this.loadErrorCallback(o)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const n=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${n} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}var mf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||f==null)throw new sA;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iA=function(t){const e=Ig(t);return Ag.encodeByteArray(e,!0)},Zo=function(t){return iA(t).replace(/\./g,"")},bg=function(t){try{return Ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=()=>oA().__FIREBASE_DEFAULTS__,cA=()=>{if(typeof process>"u"||typeof mf>"u")return;const t=mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bg(t[1]);return e&&JSON.parse(e)},Oa=()=>{try{return aA()||cA()||lA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rg=t=>{var e,n;return(n=(e=Oa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sg=t=>{const e=Rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>{var t;return(t=Oa())===null||t===void 0?void 0:t.config},Cg=t=>{var e;return(e=Oa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zo(JSON.stringify(n)),Zo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function dA(){var t;const e=(t=Oa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function vA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EA,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dn(s,c,r)}}function TA(t,e){return t.replace(wA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wA=/\{\$([^}]+)}/g;function IA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gf(i)&&gf(o)){if(!ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function AA(t,e){const n=new bA(t,e);return n.subscribe.bind(n)}class bA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Dc),s.error===void 0&&(s.error=Dc),s.complete===void 0&&(s.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CA(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PA(t){return t===Er?void 0:t}function CA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const DA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},OA=pe.INFO,NA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},VA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=OA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const xA=(t,e)=>e.some(n=>t instanceof n);let _f,yf;function MA(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LA(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dg=new WeakMap,ol=new WeakMap,Og=new WeakMap,Oc=new WeakMap,su=new WeakMap;function FA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dg.set(n,t)}).catch(()=>{}),su.set(e,t),e}function UA(t){if(ol.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Og.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BA(t){al=t(al)}function $A(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nc(this),e,...n);return Og.set(r,e.sort?e.sort():[e]),Xn(r)}:LA().includes(t)?function(...e){return t.apply(Nc(this),e),Xn(Dg.get(this))}:function(...e){return Xn(t.apply(Nc(this),e))}}function jA(t){return typeof t=="function"?$A(t):(t instanceof IDBTransaction&&UA(t),xA(t,MA())?new Proxy(t,al):t)}function Xn(t){if(t instanceof IDBRequest)return FA(t);if(Oc.has(t))return Oc.get(t);const e=jA(t);return e!==t&&(Oc.set(t,e),su.set(e,t)),e}const Nc=t=>su.get(t);function qA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const HA=["get","getKey","getAll","getAllKeys","count"],zA=["put","add","delete","clear"],Vc=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||HA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Vc.set(e,i),i}BA(t=>({...t,get:(e,n,r)=>vf(e,n)||t.get(e,n,r),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",Ef="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ru("@firebase/app"),GA="@firebase/app-compat",QA="@firebase/analytics-compat",YA="@firebase/analytics",JA="@firebase/app-check-compat",XA="@firebase/app-check",ZA="@firebase/auth",eb="@firebase/auth-compat",tb="@firebase/database",nb="@firebase/data-connect",rb="@firebase/database-compat",sb="@firebase/functions",ib="@firebase/functions-compat",ob="@firebase/installations",ab="@firebase/installations-compat",cb="@firebase/messaging",lb="@firebase/messaging-compat",ub="@firebase/performance",hb="@firebase/performance-compat",db="@firebase/remote-config",fb="@firebase/remote-config-compat",pb="@firebase/storage",mb="@firebase/storage-compat",gb="@firebase/firestore",_b="@firebase/vertexai",yb="@firebase/firestore-compat",vb="firebase",Eb="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="[DEFAULT]",Tb={[cl]:"fire-core",[GA]:"fire-core-compat",[YA]:"fire-analytics",[QA]:"fire-analytics-compat",[XA]:"fire-app-check",[JA]:"fire-app-check-compat",[ZA]:"fire-auth",[eb]:"fire-auth-compat",[tb]:"fire-rtdb",[nb]:"fire-data-connect",[rb]:"fire-rtdb-compat",[sb]:"fire-fn",[ib]:"fire-fn-compat",[ob]:"fire-iid",[ab]:"fire-iid-compat",[cb]:"fire-fcm",[lb]:"fire-fcm-compat",[ub]:"fire-perf",[hb]:"fire-perf-compat",[db]:"fire-rc",[fb]:"fire-rc-compat",[pb]:"fire-gcs",[mb]:"fire-gcs-compat",[gb]:"fire-fst",[yb]:"fire-fst-compat",[_b]:"fire-vertex","fire-js":"fire-js",[vb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map,wb=new Map,ul=new Map;function Tf(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dr(t){const e=t.name;if(ul.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of ta.values())Tf(n,t);for(const n of wb.values())Tf(n,t);return!0}function Na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new $i("app","Firebase",Ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=Eb;function Ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw Zn.create("no-options");const i=ta.get(s);if(i){if(ea(n,i.options)&&ea(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const o=new kA(s);for(const l of ul.values())o.addComponent(l);const c=new Ab(n,r,o);return ta.set(s,c),c}function iu(t=ll){const e=ta.get(t);if(!e&&t===ll&&Pg())return Ng();if(!e)throw Zn.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=Tb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(c.join(" "));return}Dr(new nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="firebase-heartbeat-database",Rb=1,Ci="firebase-heartbeat-store";let xc=null;function Vg(){return xc||(xc=qA(bb,Rb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),xc}async function Sb(t){try{const n=(await Vg()).transaction(Ci),r=await n.objectStore(Ci).get(xg(t));return await n.done,r}catch(e){if(e instanceof dn)Cn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function wf(t,e){try{const r=(await Vg()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,xg(t)),await r.done}catch(n){if(n instanceof dn)Cn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function xg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=1024,Cb=30*24*60*60*1e3;class kb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ob(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=If();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Cb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=If(),{heartbeatsToSend:r,unsentEntries:s}=Db(this._heartbeatsCache.heartbeats),i=Zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function If(){return new Date().toISOString().substring(0,10)}function Db(t,e=Pb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Af(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Af(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?vA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Af(t){return Zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){Dr(new nr("platform-logger",e=>new WA(e),"PRIVATE")),Dr(new nr("heartbeat",e=>new kb(e),"PRIVATE")),sn(cl,Ef,t),sn(cl,Ef,"esm2017"),sn("fire-js","")}Nb("");var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var br,Mg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,S,P){for(var T=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)T[yt-2]=arguments[yt];return v.prototype[S].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)A[S]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(S=0;16>S;++S)A[S]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],S=I.g[2];var P=I.g[3],T=v+(P^w&(S^P))+A[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=P+(S^v&(w^S))+A[1]+3905402710&4294967295,P=v+(T<<12&4294967295|T>>>20),T=S+(w^P&(v^w))+A[2]+606105819&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(v^S&(P^v))+A[3]+3250441966&4294967295,w=S+(T<<22&4294967295|T>>>10),T=v+(P^w&(S^P))+A[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=P+(S^v&(w^S))+A[5]+1200080426&4294967295,P=v+(T<<12&4294967295|T>>>20),T=S+(w^P&(v^w))+A[6]+2821735955&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(v^S&(P^v))+A[7]+4249261313&4294967295,w=S+(T<<22&4294967295|T>>>10),T=v+(P^w&(S^P))+A[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=P+(S^v&(w^S))+A[9]+2336552879&4294967295,P=v+(T<<12&4294967295|T>>>20),T=S+(w^P&(v^w))+A[10]+4294925233&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(v^S&(P^v))+A[11]+2304563134&4294967295,w=S+(T<<22&4294967295|T>>>10),T=v+(P^w&(S^P))+A[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=P+(S^v&(w^S))+A[13]+4254626195&4294967295,P=v+(T<<12&4294967295|T>>>20),T=S+(w^P&(v^w))+A[14]+2792965006&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(v^S&(P^v))+A[15]+1236535329&4294967295,w=S+(T<<22&4294967295|T>>>10),T=v+(S^P&(w^S))+A[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(v^w))+A[6]+3225465664&4294967295,P=v+(T<<9&4294967295|T>>>23),T=S+(v^w&(P^v))+A[11]+643717713&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(S^P))+A[0]+3921069994&4294967295,w=S+(T<<20&4294967295|T>>>12),T=v+(S^P&(w^S))+A[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(v^w))+A[10]+38016083&4294967295,P=v+(T<<9&4294967295|T>>>23),T=S+(v^w&(P^v))+A[15]+3634488961&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(S^P))+A[4]+3889429448&4294967295,w=S+(T<<20&4294967295|T>>>12),T=v+(S^P&(w^S))+A[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(v^w))+A[14]+3275163606&4294967295,P=v+(T<<9&4294967295|T>>>23),T=S+(v^w&(P^v))+A[3]+4107603335&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(S^P))+A[8]+1163531501&4294967295,w=S+(T<<20&4294967295|T>>>12),T=v+(S^P&(w^S))+A[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(v^w))+A[2]+4243563512&4294967295,P=v+(T<<9&4294967295|T>>>23),T=S+(v^w&(P^v))+A[7]+1735328473&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^v&(S^P))+A[12]+2368359562&4294967295,w=S+(T<<20&4294967295|T>>>12),T=v+(w^S^P)+A[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^S)+A[8]+2272392833&4294967295,P=v+(T<<11&4294967295|T>>>21),T=S+(P^v^w)+A[11]+1839030562&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^v)+A[14]+4259657740&4294967295,w=S+(T<<23&4294967295|T>>>9),T=v+(w^S^P)+A[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^S)+A[4]+1272893353&4294967295,P=v+(T<<11&4294967295|T>>>21),T=S+(P^v^w)+A[7]+4139469664&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^v)+A[10]+3200236656&4294967295,w=S+(T<<23&4294967295|T>>>9),T=v+(w^S^P)+A[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^S)+A[0]+3936430074&4294967295,P=v+(T<<11&4294967295|T>>>21),T=S+(P^v^w)+A[3]+3572445317&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^v)+A[6]+76029189&4294967295,w=S+(T<<23&4294967295|T>>>9),T=v+(w^S^P)+A[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=P+(v^w^S)+A[12]+3873151461&4294967295,P=v+(T<<11&4294967295|T>>>21),T=S+(P^v^w)+A[15]+530742520&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^v)+A[2]+3299628645&4294967295,w=S+(T<<23&4294967295|T>>>9),T=v+(S^(w|~P))+A[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~S))+A[7]+1126891415&4294967295,P=v+(T<<10&4294967295|T>>>22),T=S+(v^(P|~w))+A[14]+2878612391&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~v))+A[5]+4237533241&4294967295,w=S+(T<<21&4294967295|T>>>11),T=v+(S^(w|~P))+A[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~S))+A[3]+2399980690&4294967295,P=v+(T<<10&4294967295|T>>>22),T=S+(v^(P|~w))+A[10]+4293915773&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~v))+A[1]+2240044497&4294967295,w=S+(T<<21&4294967295|T>>>11),T=v+(S^(w|~P))+A[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~S))+A[15]+4264355552&4294967295,P=v+(T<<10&4294967295|T>>>22),T=S+(v^(P|~w))+A[6]+2734768916&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~v))+A[13]+1309151649&4294967295,w=S+(T<<21&4294967295|T>>>11),T=v+(S^(w|~P))+A[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=P+(w^(v|~S))+A[11]+3174756917&4294967295,P=v+(T<<10&4294967295|T>>>22),T=S+(v^(P|~w))+A[2]+718787259&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,A=this.B,S=this.h,P=0;P<v;){if(S==0)for(;P<=w;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<v;)if(A[S++]=I.charCodeAt(P++),S==this.blockSize){s(this,A),S=0;break}}else for(;P<v;)if(A[S++]=I[P++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)I[w++]=this.g[v]>>>A&255;return I};function i(I,v){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],A=!0,S=I.length-1;0<=S;S--){var P=I[S]|0;A&&P==v||(w[S]=P,A=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return k(u(-I));for(var v=[],w=1,A=0;I>=w;A++)v[A]=I/w|0,w*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return k(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(v,8)),A=f,S=0;S<I.length;S+=8){var P=Math.min(8,I.length-S),T=parseInt(I.substring(S,S+P),v);8>P?(P=u(Math.pow(v,P)),A=A.j(P).add(u(T))):(A=A.j(w),A=A.add(u(T)))}return A}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-k(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(b(this))return"-"+k(this).toString(I);for(var v=u(Math.pow(I,6)),w=this,A="";;){var S=$(w,v).g;w=L(w,S.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=S,R(w))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function b(I){return I.h==-1}t.l=function(I){return I=L(this,I),b(I)?-1:R(I)?0:1};function k(I){for(var v=I.g.length,w=[],A=0;A<v;A++)w[A]=~I.g[A];return new o(w,~I.h).add(m)}t.abs=function(){return b(this)?k(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0,S=0;S<=v;S++){var P=A+(this.i(S)&65535)+(I.i(S)&65535),T=(P>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);A=T>>>16,P&=65535,T&=65535,w[S]=T<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function L(I,v){return I.add(k(v))}t.j=function(I){if(R(this)||R(I))return f;if(b(this))return b(I)?k(this).j(k(I)):k(k(this).j(I));if(b(I))return k(this.j(k(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<I.g.length;S++){var P=this.i(A)>>>16,T=this.i(A)&65535,yt=I.i(S)>>>16,xt=I.i(S)&65535;w[2*A+2*S]+=T*xt,F(w,2*A+2*S),w[2*A+2*S+1]+=P*xt,F(w,2*A+2*S+1),w[2*A+2*S+1]+=T*yt,F(w,2*A+2*S+1),w[2*A+2*S+2]+=P*yt,F(w,2*A+2*S+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new o(w,0)};function F(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function B(I,v){this.g=I,this.h=v}function $(I,v){if(R(v))throw Error("division by zero");if(R(I))return new B(f,f);if(b(I))return v=$(k(I),v),new B(k(v.g),k(v.h));if(b(v))return v=$(I,k(v)),new B(k(v.g),v.h);if(30<I.g.length){if(b(I)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=v;0>=A.l(I);)w=ie(w),A=ie(A);var S=le(w,1),P=le(A,1);for(A=le(A,2),w=le(w,2);!R(A);){var T=P.add(A);0>=T.l(I)&&(S=S.add(w),P=T),A=le(A,1),w=le(w,1)}return v=L(I,S.j(v)),new B(S,v)}for(S=f;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(w),T=P.j(v);b(T)||0<T.l(I);)w-=A,P=u(w),T=P.j(v);R(P)&&(P=m),S=S.add(P),I=L(I,T)}return new B(S,I)}t.A=function(I){return $(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function ie(I){for(var v=I.g.length+1,w=[],A=0;A<v;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function le(I,v){var w=v>>5;v%=32;for(var A=I.g.length-w,S=[],P=0;P<A;P++)S[P]=0<v?I.i(P+w)>>>v|I.i(P+w+1)<<32-v:I.i(P+w);return new o(S,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,br=o}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lg,ti,Fg,Do,hl,Ug,Bg,$g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof vo=="object"&&vo];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in p))break e;p=p[C]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,g=!1,C={next:function(){if(!g&&p<a.length){var O=p++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,C,O){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return h.prototype[C].apply(g,W)}}function b(a){const h=a.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function k(a,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const C=a.length||0,O=g.length||0;a.length=C+O;for(let W=0;W<O;W++)a[C+W]=g[W]}else a.push(g)}}class L{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var ie=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function le(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function I(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)a[p]=g[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function S(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function P(a){c.setTimeout(()=>{throw a},0)}function T(){var a=kt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class yt{constructor(){this.h=this.g=null}add(h,p){const g=xt.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new L(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,fe=!1,kt=new yt,$t=()=>{const a=c.Promise.resolve(void 0);_e=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){P(p)}var h=xt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}fe=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var xn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a}();function Gt(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}R(Gt,Le);var Rt={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(a,h,p,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,h,p,g,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var W=y(a,h,g,C);return-1<W?(h=a[W],p||(h.fa=!1)):(h=new G(h,this.src,O,!!g,C),h.fa=p,a.push(h)),h};function Se(a,h){var p=h.type;if(p in a.g){var g=a.g[p],C=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=C)&&Array.prototype.splice.call(g,C,1),O&&(Z(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function y(a,h,p,g){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==g)return C}return-1}var E="closure_lm_"+(1e6*Math.random()|0),D={};function U(a,h,p,g,C){if(Array.isArray(h)){for(var O=0;O<h.length;O++)U(a,h[O],p,g,C);return null}return p=te(p),a&&a[V]?a.K(h,p,u(g)?!!g.capture:!!g,C):N(a,h,p,!1,g,C)}function N(a,h,p,g,C,O){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,Pe=re(a);if(Pe||(a[E]=Pe=new ye(a)),p=Pe.add(h,p,g,W,O),p.proxy)return p;if(g=j(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)xn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function j(){function a(p){return h.call(a.src,a.listener,p)}const h=q;return a}function K(a,h,p,g,C){if(Array.isArray(h))for(var O=0;O<h.length;O++)K(a,h[O],p,g,C);else g=u(g)?!!g.capture:!!g,p=te(p),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],p=y(O,p,g,C),-1<p&&(Z(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=re(a))&&(h=a.g[h.toString()],a=-1,h&&(a=y(h,p,g,C)),(p=-1<a?h[a]:null)&&z(p))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])Se(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(H(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=re(h))?(Se(p,a),p.h==0&&(p.src=null,h[E]=null)):Z(a)}}}function H(a){return a in D?D[a]:D[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new Gt(h,this);var p=a.listener,g=a.ha||a.src;a.fa&&z(a),a=p.call(g,h)}return a}function re(a){return a=a[E],a instanceof ye?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(h){return a.handleEvent(h)}),a[Q])}function ee(){Me.call(this),this.i=new ye(this),this.M=this,this.F=null}R(ee,Me),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(a,h,p,g){K(this,a,h,p,g)};function se(a,h){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var C=h;h=new Le(g,a),A(h,C)}if(C=!0,p)for(var O=p.length-1;0<=O;O--){var W=h.g=p[O];C=Ie(W,g,!0,h)&&C}if(W=h.g=a,C=Ie(W,g,!0,h)&&C,C=Ie(W,g,!1,h)&&C,p)for(O=0;O<p.length;O++)W=h.g=p[O],C=Ie(W,g,!1,h)&&C}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],g=0;g<p.length;g++)Z(p[g]);delete a.g[h],a.h--}}this.F=null},ee.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},ee.prototype.L=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Ie(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,O=0;O<h.length;++O){var W=h[O];if(W&&!W.da&&W.capture==p){var Pe=W.listener,et=W.ha||W.src;W.fa&&Se(a.i,W),C=Pe.call(et,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ee(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ct(a){a.g=Ee(()=>{a.g=null,a.i&&(a.i=!1,ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ye extends Me{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(a){Me.call(this),this.h=a,this.g={}}R(Ze,Me);var lt=[];function Mn(a){le(a.g,function(h,p){this.g.hasOwnProperty(p)&&z(h)},a),a.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Mn(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=c.JSON.stringify,vt=c.JSON.parse,Lt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function zr(){}zr.prototype.h=null;function Zu(a){return a.h||(a.h=a.i())}function eh(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ec(){Le.call(this,"d")}R(ec,Le);function tc(){Le.call(this,"c")}R(tc,Le);var dr={},th=null;function Ji(){return th=th||new ee}dr.La="serverreachability";function nh(a){Le.call(this,dr.La,a)}R(nh,Le);function Us(a){const h=Ji();se(h,new nh(h))}dr.STAT_EVENT="statevent";function rh(a,h){Le.call(this,dr.STAT_EVENT,a),this.stat=h}R(rh,Le);function Et(a){const h=Ji();se(h,new rh(h,a))}dr.Ma="timingevent";function sh(a,h){Le.call(this,dr.Ma,a),this.size=h}R(sh,Le);function Bs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function cv(a,h,p,g,C,O){a.info(function(){if(a.g)if(O)for(var W="",Pe=O.split("&"),et=0;et<Pe.length;et++){var Te=Pe[et].split("=");if(1<Te.length){var ut=Te[0];Te=Te[1];var ht=ut.split("_");W=2<=ht.length&&ht[1]=="type"?W+(ut+"="+Te+"&"):W+(ut+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+p+`
`+W})}function lv(a,h,p,g,C,O,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+p+`
`+O+" "+W})}function Wr(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+hv(a,p)+(g?" "+g:"")})}function uv(a,h){a.info(function(){return"TIMEOUT: "+h})}$s.prototype.info=function(){};function hv(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return Hr(p)}catch{return h}}var Xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ih={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nc;function Zi(){}R(Zi,zr),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},nc=new Zi;function Ln(a,h,p,g){this.j=a,this.i=h,this.l=p,this.R=g||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oh}function oh(){this.i=null,this.g="",this.h=!1}var ah={},rc={};function sc(a,h,p){a.L=1,a.v=ro(fn(h)),a.m=p,a.P=!0,ch(a,null)}function ch(a,h){a.F=Date.now(),eo(a),a.A=fn(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),wh(p.i,"t",g),a.C=0,p=a.j.J,a.h=new oh,a.g=Bh(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Ye(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(lt[0]=C.toString()),C=lt);for(var O=0;O<C.length;O++){var W=U(p,C[O],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Us(),cv(a.i,a.u,a.A,a.l,a.R,a.m)}Ln.prototype.ca=function(a){a=a.target;const h=this.M;h&&pn(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const ht=pn(this.g);var h=this.g.Ba();const Qr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Ch(this.g)))){this.J||ht!=4||h==7||(h==8||0>=Qr?Us(3):Us(2)),ic(this);var p=this.g.Z();this.X=p;t:if(lh(this)){var g=Ch(this.g);a="";var C=g.length,O=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),js(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,lv(this.i,this.u,this.A,this.l,this.R,ht,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,et=this.g;if((Pe=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Pe)){var Te=Pe;break t}}Te=null}if(p=Te)Wr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oc(this,p);else{this.o=!1,this.s=3,Et(12),fr(this),js(this);break e}}if(this.P){p=!0;let jt;for(;!this.J&&this.C<W.length;)if(jt=dv(this,W),jt==rc){ht==4&&(this.s=4,Et(14),p=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==ah){this.s=4,Et(15),Wr(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else Wr(this.i,this.l,jt,null),oc(this,jt);if(lh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||W.length!=0||this.h.h||(this.s=1,Et(16),p=!1),this.o=this.o&&p,!p)Wr(this.i,this.l,W,"[Invalid Chunked Response]"),fr(this),js(this);else if(0<W.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),dc(ut),ut.M=!0,Et(11))}}else Wr(this.i,this.l,W,null),oc(this,W);ht==4&&fr(this),this.o&&!this.J&&(ht==4?Mh(this.j,this):(this.o=!1,eo(this)))}else Cv(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),fr(this),js(this)}}}catch{}finally{}};function lh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dv(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?rc:(p=Number(h.substring(p,g)),isNaN(p)?ah:(g+=1,g+p>h.length?rc:(h=h.slice(g,g+p),a.C=g+p,h)))}Ln.prototype.cancel=function(){this.J=!0,fr(this)};function eo(a){a.S=Date.now()+a.I,uh(a,a.I)}function uh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(m(a.ba,a),h)}function ic(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uv(this.i,this.A),this.L!=2&&(Us(),Et(17)),fr(this),this.s=2,js(this)):uh(this,this.S-a)};function js(a){a.j.G==0||a.J||Mh(a.j,a)}function fr(a){ic(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Mn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function oc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||ac(p.h,a))){if(!a.K&&ac(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)lo(p),ao(p);else break e;hc(p),Et(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=Bs(m(p.Za,p),6e3));if(1>=fh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else mr(p,11)}else if((a.K||p.g==a)&&lo(p),!F(h))for(C=p.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(p.T=Te[0],Te=Te[1],p.G==2)if(Te[0]=="c"){p.K=Te[1],p.ia=Te[2];const ut=Te[3];ut!=null&&(p.la=ut,p.j.info("VER="+p.la));const ht=Te[4];ht!=null&&(p.Aa=ht,p.j.info("SVER="+p.Aa));const Qr=Te[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(g=1.5*Qr,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const jt=a.g;if(jt){const ho=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ho){var O=g.h;O.g||ho.indexOf("spdy")==-1&&ho.indexOf("quic")==-1&&ho.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(cc(O,O.h),O.h=null))}if(g.D){const fc=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(g.ya=fc,De(g.I,g.D,fc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var W=a;if(g.qa=Uh(g,g.J?g.ia:null,g.W),W.K){ph(g.h,W);var Pe=W,et=g.L;et&&(Pe.I=et),Pe.B&&(ic(Pe),eo(Pe)),g.g=W}else Vh(g);0<p.i.length&&co(p)}else Te[0]!="stop"&&Te[0]!="close"||mr(p,7);else p.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?mr(p,7):uc(p):Te[0]!="noop"&&p.l&&p.l.ta(Te),p.v=0)}}Us(4)}catch{}}var fv=class{constructor(a,h){this.g=a,this.map=h}};function hh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fh(a){return a.h?1:a.g?a.g.size:0}function ac(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function cc(a,h){a.g?a.g.add(h):a.h=h}function ph(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hh.prototype.cancel=function(){if(this.i=mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return b(a.i)}function pv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],p=a.length,g=0;g<p;g++)h.push(a[g]);return h}h=[],p=0;for(g in a)h[p++]=a[g];return h}function mv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const g in a)h[p++]=g;return h}}}function gh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=mv(a),g=pv(a),C=g.length,O=0;O<C;O++)h.call(void 0,g[O],p&&p[O],a)}var _h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gv(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),C=null;if(0<=g){var O=a[p].substring(0,g);C=a[p].substring(g+1)}else O=a[p];h(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pr){this.h=a.h,to(this,a.j),this.o=a.o,this.g=a.g,no(this,a.s),this.l=a.l;var h=a.i,p=new zs;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),yh(this,p),this.m=a.m}else a&&(h=String(a).match(_h))?(this.h=!1,to(this,h[1]||"",!0),this.o=qs(h[2]||""),this.g=qs(h[3]||"",!0),no(this,h[4]),this.l=qs(h[5]||"",!0),yh(this,h[6]||"",!0),this.m=qs(h[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}pr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hs(h,vh,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,vh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Hs(p,p.charAt(0)=="/"?vv:yv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Hs(p,Tv)),a.join("")};function fn(a){return new pr(a)}function to(a,h,p){a.j=p?qs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function no(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yh(a,h,p){h instanceof zs?(a.i=h,wv(a.i,a.h)):(p||(h=Hs(h,Ev)),a.i=new zs(h,a.h))}function De(a,h,p){a.i.set(h,p)}function ro(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,_v),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _v(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vh=/[#\/\?@]/g,yv=/[#\?:]/g,vv=/[#\?]/g,Ev=/[#\?@]/g,Tv=/#/g;function zs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&gv(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=zs.prototype,t.add=function(a,h){Fn(this),this.i=null,a=Kr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Eh(a,h){Fn(a),h=Kr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Th(a,h){return Fn(a),h=Kr(a,h),a.g.has(h)}t.forEach=function(a,h){Fn(this),this.g.forEach(function(p,g){p.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const C=a[g];for(let O=0;O<C.length;O++)p.push(h[g])}return p},t.V=function(a){Fn(this);let h=[];if(typeof a=="string")Th(this,a)&&(h=h.concat(this.g.get(Kr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Fn(this),this.i=null,a=Kr(this,a),Th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wh(a,h,p){Eh(a,h),0<p.length&&(a.i=null,a.g.set(Kr(a,h),b(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const O=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var C=O;W[g]!==""&&(C+="="+encodeURIComponent(String(W[g]))),a.push(C)}}return this.i=a.join("&")};function Kr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function wv(a,h){h&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(p,g){var C=g.toLowerCase();g!=C&&(Eh(this,g),wh(this,C,p))},a)),a.j=h}function Iv(a,h){const p=new $s;if(c.Image){const g=new Image;g.onload=_(Un,p,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Un,p,"TestLoadImage: error",!1,h,g),g.onabort=_(Un,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Un,p,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Av(a,h){const p=new $s,g=new AbortController,C=setTimeout(()=>{g.abort(),Un(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(C),O.ok?Un(p,"TestPingServer: ok",!0,h):Un(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Un(p,"TestPingServer: error",!1,h)})}function Un(a,h,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function bv(){this.g=new Lt}function Rv(a,h,p){const g=p||"";try{gh(a,function(C,O){let W=C;u(C)&&(W=Hr(C)),h.push(g+O+"="+encodeURIComponent(W))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function so(a){this.l=a.Ub||null,this.j=a.eb||!1}R(so,zr),so.prototype.g=function(){return new io(this.l,this.j)},so.prototype.i=function(a){return function(){return a}}({});function io(a,h){ee.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(io,ee),t=io.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ih(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ih(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ws(this):Ks(this),this.readyState==3&&Ih(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ws(this))},t.Qa=function(a){this.g&&(this.response=a,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ks(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ah(a){let h="";return le(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function lc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Ah(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):De(a,h,p))}function Be(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Be,ee);var Sv=/^https?$/i,Pv=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nc.g(),this.v=this.o?Zu(this.o):Zu(nc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){bh(this,O);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())p.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Pv,h,void 0))||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of p)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ph(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){bh(this,O)}};function bh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Rh(a),oo(a)}function Rh(a){a.A||(a.A=!0,se(a,"complete"),se(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,se(this,"complete"),se(this,"abort"),oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oo(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sh(this):this.bb())},t.bb=function(){Sh(this)};function Sh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)Ee(a.Ea,0,a);else if(se(a,"readystatechange"),pn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=W===0){var C=String(a.D).match(_h)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Sv.test(C?C.toLowerCase():"")}p=g}if(p)se(a,"complete"),se(a,"success");else{a.m=6;try{var O=2<pn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Rh(a)}}finally{oo(a)}}}}function oo(a,h){if(a.g){Ph(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||se(a,"ready");try{p.onreadystatechange=g}catch{}}}function Ph(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),vt(h)}};function Ch(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cv(a){const h={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var p=S(a[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[C]||[];h[C]=O,O.push(p)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function kh(a){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,a),this.cb=Gs("retryDelaySeedMs",1e4,a),this.Wa=Gs("forwardChannelMaxRetries",2,a),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hh(a&&a.concurrentRequestLimit),this.Da=new bv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kh.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,g){Et(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Uh(this,null,this.W),co(this)};function uc(a){if(Dh(a),a.G==3){var h=a.U++,p=fn(a.I);if(De(p,"SID",a.K),De(p,"RID",h),De(p,"TYPE","terminate"),Qs(a,p),h=new Ln(a,a.j,h),h.L=2,h.v=ro(fn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=Bh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),eo(h)}Fh(a)}function ao(a){a.g&&(dc(a),a.g.cancel(),a.g=null)}function Dh(a){ao(a),a.u&&(c.clearTimeout(a.u),a.u=null),lo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function co(a){if(!dh(a.h)&&!a.s){a.s=!0;var h=a.Ga;_e||$t(),fe||(_e(),fe=!0),kt.add(h,a),a.B=0}}function kv(a,h){return fh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(m(a.Ga,a,h),Lh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Ln(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Nh(this,C,h),p=fn(this.I),De(p,"RID",a),De(p,"CVER",22),this.D&&De(p,"X-HTTP-Session-Id",this.D),Qs(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(Ah(O)))+"&"+h:this.m&&lc(p,this.m,O)),cc(this.h,C),this.Ua&&De(p,"TYPE","init"),this.P?(De(p,"$req",h),De(p,"SID","null"),C.T=!0,sc(C,p,null)):sc(C,p,h),this.G=2}}else this.G==3&&(a?Oh(this,a):this.i.length==0||dh(this.h)||Oh(this))};function Oh(a,h){var p;h?p=h.l:p=a.U++;const g=fn(a.I);De(g,"SID",a.K),De(g,"RID",p),De(g,"AID",a.T),Qs(a,g),a.m&&a.o&&lc(g,a.m,a.o),p=new Ln(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Nh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cc(a.h,p),sc(p,g,h)}function Qs(a,h){a.H&&le(a.H,function(p,g){De(h,g,p)}),a.l&&gh({},function(p,g){De(h,g,p)})}function Nh(a,h,p){p=Math.min(a.i.length,p);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const W=["count="+p];O==-1?0<p?(O=C[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Pe=!0;for(let et=0;et<p;et++){let Te=C[et].g;const ut=C[et].map;if(Te-=O,0>Te)O=Math.max(0,C[et].g-100),Pe=!1;else try{Rv(ut,W,"req"+Te+"_")}catch{g&&g(ut)}}if(Pe){g=W.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,g}function Vh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;_e||$t(),fe||(_e(),fe=!0),kt.add(h,a),a.v=0}}function hc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(m(a.Fa,a),Lh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),ao(this),xh(this))};function dc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function xh(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),Qs(a,h),a.m&&a.o&&lc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ro(fn(h)),p.m=null,p.P=!0,ch(p,a)}t.Za=function(){this.C!=null&&(this.C=null,ao(this),hc(this),Et(19))};function lo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Mh(a,h){var p=null;if(a.g==h){lo(a),dc(a),a.g=null;var g=2}else if(ac(a.h,h))p=h.D,ph(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=Ji(),se(g,new sh(g,p)),co(a)}else Vh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&kv(a,h)||g==2&&hc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),C){case 1:mr(a,5);break;case 4:mr(a,10);break;case 3:mr(a,6);break;default:mr(a,2)}}}function Lh(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function mr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),g=a.Xa;const C=!g;g=new pr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||to(g,"https"),ro(g),C?Iv(g.toString(),p):Av(g.toString(),p)}else Et(2);a.G=0,a.l&&a.l.sa(h),Fh(a),Dh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Fh(a){if(a.G=0,a.ka=[],a.l){const h=mh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Uh(a,h,p){var g=p instanceof pr?fn(p):new pr(p);if(g.g!="")h&&(g.g=h+"."+g.g),no(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var O=new pr(null);g&&to(O,g),h&&(O.g=h),C&&no(O,C),p&&(O.l=p),g=O}return p=a.D,h=a.ya,p&&h&&De(g,p,h),De(g,"VER",a.la),Qs(a,g),g}function Bh(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new so({eb:p})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $h(){}t=$h.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uo(){}uo.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){ee.call(this),this.g=new kh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Gr(this)}R(Dt,ee),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){uc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Hr(a),a=p);h.i.push(new fv(h.Ya++,a)),h.G==3&&co(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,Dt.aa.N.call(this)};function jh(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(jh,ec);function qh(){tc.call(this),this.status=1}R(qh,tc);function Gr(a){this.g=a}R(Gr,$h),Gr.prototype.ua=function(){se(this.g,"a")},Gr.prototype.ta=function(a){se(this.g,new jh(a))},Gr.prototype.sa=function(a){se(this.g,new qh)},Gr.prototype.ra=function(){se(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,$g=function(){return new uo},Bg=function(){return Ji()},Ug=dr,hl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xi.NO_ERROR=0,Xi.TIMEOUT=8,Xi.HTTP_ERROR=6,Do=Xi,ih.COMPLETE="complete",Fg=ih,eh.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,ti=eh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Lg=Be}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});const Rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new ru("@firebase/firestore");function ns(){return Or.logLevel}function J(t,...e){if(Or.logLevel<=pe.DEBUG){const n=e.map(ou);Or.debug(`Firestore (${Os}): ${t}`,...n)}}function kn(t,...e){if(Or.logLevel<=pe.ERROR){const n=e.map(ou);Or.error(`Firestore (${Os}): ${t}`,...n)}}function ws(t,...e){if(Or.logLevel<=pe.WARN){const n=e.map(ou);Or.warn(`Firestore (${Os}): ${t}`,...n)}}function ou(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function be(t,e){t||oe()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mb{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new jg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new ft(e)}}class Lb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Fb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Lb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ub{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new Ub(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$b(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ge(0,0))}static max(){return new ue(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends ki{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ki{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return jb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ne.fromString(e))}static fromName(e){return new ne(Ne.fromString(e).popFirst(5))}static empty(){return new ne(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ne(e.slice()))}}function qb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new rr(s,ne.empty(),e)}function Hb(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(ue.min(),ne.empty(),-1)}static max(){return new rr(ue.max(),ne.empty(),-1)}}function zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Wb)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Gb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Va.oe=-1;function xa(t){return t==null}function na(t){return t===0&&1/t==-1/0}function Qb(t){return typeof t=="number"&&Number.isInteger(t)&&!na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sf(e)),e=Jb(t.get(n),e);return Sf(e)}function Jb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Sf(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eo(this.root,e,this.comparator,!0)}}class Eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cf(this.data.getIterator())}getIteratorFrom(e){return new Cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Qe(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zg("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(be(!!t),typeof t=="string"){let e=0;const n=Xb.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ma(t){const e=t.mapValue.fields.__previous_value__;return au(e)?Ma(e):e}function Di(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?au(t)?4:tR(t)?9007199254740991:eR(t)?10:11:oe()}function hn(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),c=sr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?na(o)===na(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Pf(o)!==Pf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!hn(o[l],c[l])))return!1;return!0}(t,e);default:return oe()}}function Ni(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function As(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return kf(t.timestampValue,e.timestampValue);case 4:return kf(Di(t),Di(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ir(i),l=ir(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=ge(c[u],l[u]);if(d!==0)return d}return ge(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ge(qe(i.latitude),qe(o.latitude));return c!==0?c:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Df(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const f=i.fields||{},m=o.fields||{},_=(c=f.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,b=ge(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return b!==0?b:Df(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===To.mapValue&&o===To.mapValue)return 0;if(i===To.mapValue)return 1;if(o===To.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=ge(l[f],d[f]);if(m!==0)return m;const _=As(c[l[f]],u[d[f]]);if(_!==0)return _}return ge(l.length,d.length)}(t.mapValue,e.mapValue);default:throw oe()}}function kf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=sr(t),r=sr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Df(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=As(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function bs(t){return dl(t)}function dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=dl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${dl(n.fields[o])}`;return s+"}"}(t.mapValue):oe()}function Oo(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ma(t);return e?16+Oo(e):16;case 5:return 2*t.stringValue.length;case 6:return ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ur(r.fields,(i,o)=>{s+=i.length+Oo(o)}),s}(t.mapValue);default:throw oe()}}function Of(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fl(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function Nf(t){return!!t&&"nullValue"in t}function Vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function eR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=pi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(pi(this.value))}}function Wg(t){const e=[];return Ur(t.fields,(n,r)=>{const s=new st([n]);if(No(r)){const i=Wg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,ue.min(),ue.min(),ue.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,ue.min(),ue.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ue.min(),ue.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.position=e,this.inclusive=n}}function xf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=As(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function nR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{}class We extends Kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sR(e,n,r):n==="array-contains"?new aR(e,r):n==="in"?new cR(e,r):n==="not-in"?new lR(e,r):n==="array-contains-any"?new uR(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iR(e,r):new oR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(As(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Gg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gg(t){return t.op==="and"}function Qg(t){return rR(t)&&Gg(t)}function rR(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function pl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(Qg(t))return t.filters.map(e=>pl(e)).join(",");{const e=t.filters.map(n=>pl(n)).join(",");return`${t.op}(${e})`}}function Yg(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Yg(o,s.filters[c]),!0):!1}(t,e):void oe()}function Jg(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(Jg).join(" ,")+"}"}(t):"Filter"}class sR extends We{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class iR extends We{constructor(e,n){super(e,"in",n),this.keys=Xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oR extends We{constructor(e,n){super(e,"not-in",n),this.keys=Xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class aR extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&Ni(n.arrayValue,this.value)}}class cR extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class lR extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class uR extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Lf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hR(t,e,n,r,s,i,o)}function lu(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.ue=n}return e.ue}function uu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Yg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function ml(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dR(t,e,n,r,s,i,o,c){return new xs(t,e,n,r,s,i,o,c)}function La(t){return new xs(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zg(t){return t.collectionGroup!==null}function mi(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vi(i,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new Vi(st.keyField(),r))}return e.ce}function on(t){const e=he(t);return e.le||(e.le=fR(e,mi(t))),e.le}function fR(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)});const n=t.endAt?new ra(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ra(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gl(t,e){const n=t.filters.concat([e]);return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _l(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return uu(on(t),on(e))&&t.limitType===e.limitType}function e_(t){return`${lu(on(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Jg(s)).join(", ")}]`),xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bs(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=xf(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,mi(r),s)||r.endAt&&!function(o,c,l){const u=xf(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,mi(r),s))}(t,e)}function pR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function t_(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=mR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mR(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?As(l,u):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new Ue(ne.comparator);function Dn(){return gR}const n_=new Ue(ne.comparator);function ni(...t){let e=n_;for(const n of t)e=e.insert(n.key,n);return e}function r_(t){let e=n_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return gi()}function s_(){return gi()}function gi(){return new Br(t=>t.toString(),(t,e)=>t.isEqual(e))}const _R=new Ue(ne.comparator),yR=new Qe(ne.comparator);function me(...t){let e=yR;for(const n of t)e=e.add(n);return e}const vR=new Qe(ge);function ER(){return vR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:na(e)?"-0":e}}function i_(t){return{integerValue:""+t}}function TR(t,e){return Qb(e)?i_(e):hu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function wR(t,e,n){return t instanceof sa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&au(i)&&(i=Ma(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof xi?a_(t,e):t instanceof Mi?c_(t,e):function(s,i){const o=o_(s,i),c=Uf(o)+Uf(s.Pe);return fl(o)&&fl(s.Pe)?i_(c):hu(s.serializer,c)}(t,e)}function IR(t,e,n){return t instanceof xi?a_(t,e):t instanceof Mi?c_(t,e):n}function o_(t,e){return t instanceof ia?function(r){return fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class sa extends Ba{}class xi extends Ba{constructor(e){super(),this.elements=e}}function a_(t,e){const n=l_(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mi extends Ba{constructor(e){super(),this.elements=e}}function c_(t,e){let n=l_(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class ia extends Ba{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Uf(t){return qe(t.integerValue||t.doubleValue)}function l_(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof xi&&s instanceof xi||r instanceof Mi&&s instanceof Mi?Is(r.elements,s.elements,hn):r instanceof ia&&s instanceof ia?hn(r.Pe,s.Pe):r instanceof sa&&s instanceof sa}(t.transform,e.transform)}class bR{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $a{}function u_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new d_(t.key,Rn.none()):new qi(t.key,t.data,Rn.none());{const n=t.data,r=Ft.empty();let s=new Qe(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new Ht(s.toArray()),Rn.none())}}function RR(t,e,n){t instanceof qi?function(s,i,o){const c=s.value.clone(),l=$f(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!Vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=$f(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(h_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _i(t,e,n,r){return t instanceof qi?function(i,o,c,l){if(!Vo(i.precondition,o))return c;const u=i.value.clone(),d=jf(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,c,l){if(!Vo(i.precondition,o))return c;const u=jf(i.fieldTransforms,l,o),d=o.data;return d.setAll(h_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,c){return Vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function SR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=o_(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Is(r,s,(i,o)=>AR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qi extends $a{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends $a{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function h_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $f(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,IR(o,c,n[s]))}return r}function jf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,wR(i,o,e))}return r}class d_ extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PR extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&RR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=s_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=u_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class du{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return _R}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new du(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ve;function OR(t){switch(t){default:return oe();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function f_(t){if(t===void 0)return kn("GRPC error has no .code"),M.UNKNOWN;switch(t){case ze.OK:return M.OK;case ze.CANCELLED:return M.CANCELLED;case ze.UNKNOWN:return M.UNKNOWN;case ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ze.INTERNAL:return M.INTERNAL;case ze.UNAVAILABLE:return M.UNAVAILABLE;case ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ze.NOT_FOUND:return M.NOT_FOUND;case ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ze.ABORTED:return M.ABORTED;case ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ze.DATA_LOSS:return M.DATA_LOSS;default:return oe()}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=new br([4294967295,4294967295],0);function qf(t){const e=NR().encode(t),n=new Mg;return n.update(e),new Uint8Array(n.digest())}function Hf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new br([n,r],0),new br([s,i],0)]}class fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ri(`Invalid padding: ${n}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ri(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=br.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(br.fromNumber(r)));return s.compare(VR)===1&&(s=new br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=qf(e),[r,s]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Te===0)return;const n=qf(e),[r,s]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ja(ue.min(),s,new Ue(ge),Dn(),me())}}class Hi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hi(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class p_{constructor(e,n){this.targetId=e,this.me=n}}class m_{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zf{constructor(){this.fe=0,this.ge=Wf(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe()}}),new Hi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Wf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=wo(),this.Qe=wo(),this.Ke=new Ue(ge)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(ml(i))if(r===0){const o=new ne(i.path);this.We(n,o,gt.newNoDocument(o,ue.min()))}else be(r===1);else{const o=this.Ze(n);if(o!==r){const c=this.Xe(e),l=c?this.et(c,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ir(r).toUint8Array()}catch(l){if(l instanceof zg)return ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return ws(l instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Ye(o);if(c){if(i.current&&ml(c.target)){const l=new ne(c.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.Qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ja(e,n,this.Ke,this.ke,r);return this.ke=Dn(),this.qe=wo(),this.Qe=wo(),this.Ke=new Ue(ge),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new zf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Qe(ge),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Qe(ge),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new zf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wo(){return new Ue(ne.comparator)}function Wf(){return new Ue(ne.comparator)}const MR={asc:"ASCENDING",desc:"DESCENDING"},LR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FR={and:"AND",or:"OR"};class UR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yl(t,e){return t.useProto3Json||xa(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function g_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BR(t,e){return oa(t,e.toTimestamp())}function an(t){return be(!!t),ue.fromTimestamp(function(n){const r=sr(n);return new Ge(r.seconds,r.nanos)}(t))}function pu(t,e){return vl(t,e).canonicalString()}function vl(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function __(t){const e=Ne.fromString(t);return be(w_(e)),e}function El(t,e){return pu(t.databaseId,e.path)}function Mc(t,e){const n=__(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(v_(n))}function y_(t,e){return pu(t.databaseId,e)}function $R(t){const e=__(t);return e.length===4?Ne.emptyPath():v_(e)}function Tl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function v_(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kf(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function jR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(be(d===void 0||typeof d=="string"),at.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?M.UNKNOWN:f_(u.code);return new X(d,u.message||"")}(o);n=new m_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):ue.min(),c=new Ft({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new xo(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mc(t,r.document),i=r.readTime?an(r.readTime):ue.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new xo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mc(t,r.document),i=r.removedTargetIds||[];n=new xo([],i,s,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DR(s,i),c=r.targetId;n=new p_(c,o)}}return n}function qR(t,e){let n;if(e instanceof qi)n={update:Kf(t,e.key,e.value)};else if(e instanceof d_)n={delete:El(t,e.key)};else if(e instanceof $r)n={update:Kf(t,e.key,e.data),updateMask:XR(e.fieldMask)};else{if(!(e instanceof PR))return oe();n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ia)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:BR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function HR(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(ue.min())&&(o=an(i)),new bR(o,s.transformResults||[])}(n,e))):[]}function zR(t,e){return{documents:[y_(t,e.path)]}}function WR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=y_(t,s);const i=function(u){if(u.length!==0)return T_(Kt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:ss(m.field),direction:QR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=yl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function KR(t){let e=$R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=E_(f);return m instanceof Kt&&Qg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new Vi(is(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(f){let m;return m=typeof f=="object"?f.value:f,xa(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new ra(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,_=f.values||[];return new ra(_,m)}(n.endAt)),dR(e,s,o,i,c,"F",l,u)}function GR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function E_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return We.create(is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>E_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function QR(t){return MR[t]}function YR(t){return LR[t]}function JR(t){return FR[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return st.fromServerFormat(t.fieldPath)}function T_(t){return t instanceof We?function(n){if(n.op==="=="){if(Vf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(Nf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(Nf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:YR(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(s=>T_(s));return r.length===1?r[0]:{compositeFilter:{op:JR(n.op),filters:r}}}(t):oe()}function XR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function w_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.ht=e}}function eS(t){const e=KR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_l(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.ln=new nS}addToCollectionParentIndex(e,n){return this.ln.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(rr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class nS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Rs(0)}static Qn(){return new Rs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class rS{constructor(e){this.Gn=e,this.buffer=new Qe(Qf),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vs(n)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ns(n)}await this.Yn(3e5)})}}class iS{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Va.oe);const r=new rS(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Gf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),ns()<=pe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function oS(t,e){return new iS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.changes=new Br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_i(r.mutation,s,Ht.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ni();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Dn();const o=gi(),c=function(){return gi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof $r)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),_i(d.mutation,u,d.mutation.getFieldMask(),Ge.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return c.set(u,new cS(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,n){const r=gi();let s=new Ue((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Ht.empty();d=c.applyToLocalView(u,d),r.set(l,d);const f=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,f)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,f=s_();d.forEach(m=>{if(!i.has(m)){const _=u_(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Zg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(wr());let c=-1,l=i;return o.next(u=>x.forEach(u,(d,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,me())).next(d=>({batchId:c,changes:r_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const u=function(f,m){return new xs(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let c=ni();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&_i(d.mutation,u,Ht.empty(),Ge.now()),Ua(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return x.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:eS(s.bundledQuery),readTime:an(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.overlays=new Ue(ne.comparator),this.Er=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=wr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=wr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return x.resolve(c)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kR(n,r));let i=this.Er.get(n);i===void 0&&(i=me(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.dr=new Qe(Je.Ar),this.Rr=new Qe(Je.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Je(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ne(new Ne([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ne(new Ne([])),r=new Je(n,e),s=new Je(n,e+1);let i=me();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ne.comparator(e.key,n.key)||ge(e.br,n.br)}static Vr(e,n){return ge(e.br,n.br)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Qe(Je.Ar)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.vr=this.vr.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const c=this.Cr(o.br);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ge);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],c=>{r=r.add(c.br)})}),x.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Je(new ne(i),0);let c=new Qe(ge);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.br)),!0)},o),x.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return x.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Je(n,0),s=this.vr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.Nr=e,this.docs=function(){return new Ue(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,c=new ne(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zb(Hb(d),r)<=0||(s.has(d.key)||Ua(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe()}Lr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mS(this)}getSize(e){return x.resolve(this.size)}}class mS extends aS{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.persistence=e,this.Br=new Br(n=>lu(n),uu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.kr=0,this.qr=new mu,this.targetCount=0,this.Qr=Rs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),x.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Un(n),x.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Va(0),this.Ur=!1,this.Ur=!0,this.Wr=new dS,this.referenceDelegate=e(this),this.Gr=new gS(this),this.indexManager=new tS,this.remoteDocumentCache=function(s){return new pS(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new ZR(n),this.jr=new uS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new fS(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new _S(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return x.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class _S extends Kb{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Zr=new mu,this.Xr=null}static ei(e){return new gu(e)}get ti(){if(this.Xr)return this.Xr;throw oe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),x.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ti,r=>{const s=ne.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return x.or([()=>x.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class aa{constructor(e,n){this.persistence=e,this.ri=new Br(r=>Yb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=oS(this,n)}static ei(e,n){return new aa(e,n)}Hr(){}Jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return x.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Oo(e.data.value)),n}ir(e,n,r){return x.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _u(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return _A()?8:Gb(_t())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yS;return this.ts(e,n,o).next(c=>{if(i.result=c,this.Hi)return this.ns(e,n,o,c.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ns()<=pe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),x.resolve()):(ns()<=pe.DEBUG&&J("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ns()<=pe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):x.resolve())}Xi(e,n){if(Ff(n))return x.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_l(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,c);return this.ss(n,u,o,l.readTime)?this.Xi(e,_l(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return Ff(n)||s.isEqual(ue.min())?x.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?x.resolve(null):(ns()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.os(e,o,n,qb(s,-1)).next(c=>c))})}rs(e,n){let r=new Qe(t_(e));return n.forEach((s,i)=>{Ua(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ns()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Zi.getDocumentsMatchingQuery(e,n,rr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ue(ge),this.cs=new Br(i=>lu(i),uu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function TS(t,e,n,r){return new ES(t,e,n,r)}async function A_(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:c}))})})}function wS(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const f=u.batch,m=f.keys();let _=x.resolve();return m.forEach(R=>{_=_.next(()=>d.getEntry(l,R)).next(b=>{const k=u.docVersions.get(R);be(k!==null),b.version.compareTo(k)<0&&(f.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),d.addEntry(b)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function b_(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function IS(t,e){const n=he(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;c.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(at.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(f,_),function(b,k,L){return b.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,_,d)&&c.push(n.Gr.updateTargetData(i,_))});let l=Dn(),u=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(AS(i,o,e.documentUpdates).next(d=>{l=d.Is,u=d.Es})),!r.isEqual(ue.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(f=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return x.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function AS(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):J("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Is:o,Es:s}})}function bS(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RS(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function wl(t,e,n){const r=he(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vs(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Yf(t,e,n){const r=he(t);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=he(l),m=f.cs.get(d);return m!==void 0?x.resolve(f.us.get(m)):f.Gr.getTargetData(u,d)}(r,o,on(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:me())).next(c=>(SS(r,pR(e),c),{documents:c,ds:i})))}function SS(t,e,n){let r=t.ls.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Jf{constructor(){this.activeTargetIds=ER()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PS{constructor(){this._o=new Jf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io=null;function Lc(){return Io===null?Io=function(){return 268435456+Math.round(2147483648*Math.random())}():Io++,"0x"+Io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class OS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const c=Lc(),l=this.No(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,l,u,s).then(d=>(J("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw ws("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}ko(n,r,s,i,o,c){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=kS[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Lc();return new Promise((o,c)=>{const l=new Lg;l.setWithCredentials(!0),l.listenOnce(Fg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Do.NO_ERROR:const d=l.getResponseJson();J(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Do.TIMEOUT:J(dt,`RPC '${e}' ${i} timed out`),c(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case Do.HTTP_ERROR:const f=l.getStatus();if(J(dt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const R=function(k){const L=k.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(_.status);c(new X(R,_.message))}else c(new X(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X(M.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{J(dt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);J(dt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Lc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$g(),c=Bg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");J(dt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,_=!1;const R=new DS({Eo:k=>{_?J(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(J(dt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),J(dt,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Ao:()=>f.close()}),b=(k,L,F)=>{k.listen(L,B=>{try{F(B)}catch($){setTimeout(()=>{throw $},0)}})};return b(f,ti.EventType.OPEN,()=>{_||(J(dt,`RPC '${e}' stream ${s} transport opened.`),R.So())}),b(f,ti.EventType.CLOSE,()=>{_||(_=!0,J(dt,`RPC '${e}' stream ${s} transport closed`),R.Do())}),b(f,ti.EventType.ERROR,k=>{_||(_=!0,ws(dt,`RPC '${e}' stream ${s} transport errored:`,k),R.Do(new X(M.UNAVAILABLE,"The operation could not be completed")))}),b(f,ti.EventType.MESSAGE,k=>{var L;if(!_){const F=k.data[0];be(!!F);const B=F,$=(B==null?void 0:B.error)||((L=B[0])===null||L===void 0?void 0:L.error);if($){J(dt,`RPC '${e}' stream ${s} received error:`,$);const ie=$.status;let le=function(w){const A=ze[w];if(A!==void 0)return f_(A)}(ie),I=$.message;le===void 0&&(le=M.INTERNAL,I="Unknown error status: "+ie+" with message "+$.message),_=!0,R.Do(new X(le,I)),f.close()}else J(dt,`RPC '${e}' stream ${s} received:`,F),R.vo(F)}}),b(c,Ug.STAT_EVENT,k=>{k.stat===hl.PROXY?J(dt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===hl.NOPROXY&&J(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){return new UR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,r,s,i,o,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new R_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new X(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NS extends S_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=jR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?an(o.readTime):ue.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Tl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=ml(l)?{documents:zR(i,l)}:{query:WR(i,l).ct},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=g_(i,o.resumeToken);const u=yl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=oa(i,o.snapshotVersion.toTimestamp());const u=yl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=GR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Tl(this.serializer),n.removeTarget=e,this.c_(n)}}class VS extends S_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=HR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Tl(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qR(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,vl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(M.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.ko(e,vl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(M.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class MS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(kn(n),this.C_=!1):J("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{jr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=he(l);u.k_.add(4),await zi(u),u.K_.set("Unknown"),u.k_.delete(4),await Ha(u)}(this))})}),this.K_=new MS(r,s)}}async function Ha(t){if(jr(t))for(const e of t.q_)await e(!0)}async function zi(t){for(const e of t.q_)await e(!1)}function P_(t,e){const n=he(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Tu(n)?Eu(n):Ms(n).s_()&&vu(n,e))}function yu(t,e){const n=he(t),r=Ms(n);n.B_.delete(e),r.s_()&&C_(n,e),n.B_.size===0&&(r.s_()?r.a_():jr(n)&&n.K_.set("Unknown"))}function vu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).V_(e)}function C_(t,e){t.U_.xe(e),Ms(t).m_(e)}function Eu(t){t.U_=new xR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.K_.F_()}function Tu(t){return jr(t)&&!Ms(t).i_()&&t.B_.size>0}function jr(t){return he(t).k_.size===0}function k_(t){t.U_=void 0}async function FS(t){t.K_.set("Online")}async function US(t){t.B_.forEach((e,n)=>{vu(t,e)})}async function BS(t,e){k_(t),Tu(t)?(t.K_.O_(e),Eu(t)):t.K_.set("Unknown")}async function $S(t,e,n){if(t.K_.set("Online"),e instanceof m_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.B_.delete(c),s.U_.removeTarget(c))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ca(t,r)}else if(e instanceof xo?t.U_.$e(e):e instanceof p_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ue.min()))try{const r=await b_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.U_.it(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.B_.get(l);if(!d)return;i.B_.set(l,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),C_(i,l);const f=new Yn(d.target,l,u,d.sequenceNumber);vu(i,f)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await ca(t,r)}}async function ca(t,e,n){if(!Vs(e))throw e;t.k_.add(1),await zi(t),t.K_.set("Offline"),n||(n=()=>b_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ha(t)})}function D_(t,e){return e().catch(n=>ca(t,n,e))}async function za(t){const e=he(t),n=ar(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;jS(e);)try{const s=await bS(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,qS(e,s)}catch(s){await ca(e,s)}O_(e)&&N_(e)}function jS(t){return jr(t)&&t.L_.length<10}function qS(t,e){t.L_.push(e);const n=ar(t);n.s_()&&n.f_&&n.g_(e.mutations)}function O_(t){return jr(t)&&!ar(t).i_()&&t.L_.length>0}function N_(t){ar(t).start()}async function HS(t){ar(t).w_()}async function zS(t){const e=ar(t);for(const n of t.L_)e.g_(n.mutations)}async function WS(t,e,n){const r=t.L_.shift(),s=du.from(r,e,n);await D_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await za(t)}async function KS(t,e){e&&ar(t).f_&&await async function(r,s){if(function(o){return OR(o)&&o!==M.ABORTED}(s.code)){const i=r.L_.shift();ar(r).__(),await D_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await za(r)}}(t,e),O_(t)&&N_(t)}async function Zf(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.k_.add(3),await zi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ha(n)}async function GS(t,e){const n=he(t);e?(n.k_.delete(2),await Ha(n)):e||(n.k_.add(2),await zi(n),n.K_.set("Unknown"))}function Ms(t){return t.W_||(t.W_=function(n,r,s){const i=he(n);return i.b_(),new NS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:FS.bind(null,t),mo:US.bind(null,t),po:BS.bind(null,t),R_:$S.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Tu(t)?Eu(t):t.K_.set("Unknown")):(await t.W_.stop(),k_(t))})),t.W_}function ar(t){return t.G_||(t.G_=function(n,r,s){const i=he(n);return i.b_(),new VS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:HS.bind(null,t),po:KS.bind(null,t),p_:zS.bind(null,t),y_:WS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await za(t)):(await t.G_.stop(),t.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new wu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iu(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Vs(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{static emptySet(e){return new ms(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ni(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.z_=new Ue(ne.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):oe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ss(e,n,ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class YS{constructor(){this.queries=tp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=tp(),i.forEach((o,c)=>{for(const l of c.J_)l.onError(r)})})(this,new X(M.ABORTED,"Firestore shutting down"))}}function tp(){return new Br(t=>e_(t),Fa)}async function Au(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new QS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Iu(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Ru(n)}async function bu(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function JS(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.J_)c.ta(s)&&(r=!0);o.H_=s}}r&&Ru(n)}function XS(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Ru(t){t.X_.forEach(e=>{e.next()})}var Il,np;(np=Il||(Il={})).na="default",np.Cache="cache";class Su{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Il.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.key=e}}class x_{constructor(e){this.key=e}}class ZS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=me(),this.mutatedKeys=me(),this.Va=t_(e),this.ma=new ms(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new ep,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),_=Ua(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),b=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?R!==b&&(r.track({type:3,doc:_}),k=!0):this.ya(m,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.Va(_,l)>0||u&&this.Va(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(l||u)&&(c=!0)),k&&(_?(o=o.add(_),i=b?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:c,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,f)=>function(_,R){const b=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return b(_)-b(R)}(d.type,f.type)||this.Va(d.doc,f.doc)),this.wa(r),s=s!=null&&s;const c=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Ss(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ep,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=me(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new x_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new V_(r))}),n}va(e){this.da=e.ds,this.Ra=me();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ss.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class eP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tP{constructor(e){this.key=e,this.Fa=!1}}class nP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Br(c=>e_(c),Fa),this.Oa=new Map,this.Na=new Set,this.La=new Ue(ne.comparator),this.Ba=new Map,this.ka=new mu,this.qa={},this.Qa=new Map,this.Ka=Rs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function rP(t,e,n=!0){const r=$_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await M_(r,e,n,!0),s}async function sP(t,e){const n=$_(t);await M_(n,e,!0,!1)}async function M_(t,e,n,r){const s=await RS(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await iP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&P_(t.remoteStore,s),c}async function iP(t,e,n,r,s){t.Ua=(f,m,_)=>async function(b,k,L,F){let B=k.view.ga(L);B.ss&&(B=await Yf(b.localStore,k.query,!1).then(({documents:I})=>k.view.ga(I,B)));const $=F&&F.targetChanges.get(k.targetId),ie=F&&F.targetMismatches.get(k.targetId)!=null,le=k.view.applyChanges(B,b.isPrimaryClient,$,ie);return sp(b,k.targetId,le.ba),le.snapshot}(t,f,m,_);const i=await Yf(t.localStore,e,!0),o=new ZS(e,i.ds),c=o.ga(i.documents),l=Hi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);sp(t,n,u.ba);const d=new eP(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function oP(t,e,n){const r=he(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Fa(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yu(r.remoteStore,s.targetId),Al(r,s.targetId)}).catch(Ns)):(Al(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function aP(t,e){const n=he(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yu(n.remoteStore,r.targetId))}async function cP(t,e,n){const r=mP(t);try{const s=await function(o,c){const l=he(o),u=Ge.now(),d=c.reduce((_,R)=>_.add(R.key),me());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Dn(),b=me();return l.hs.getEntries(_,d).next(k=>{R=k,R.forEach((L,F)=>{F.isValidDocument()||(b=b.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,R)).next(k=>{f=k;const L=[];for(const F of c){const B=SR(F,f.get(F.key).overlayedDocument);B!=null&&L.push(new $r(F.key,B,Wg(B.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,L,c)}).next(k=>{m=k;const L=k.applyToLocalDocumentSet(f,b);return l.documentOverlayCache.saveOverlays(_,k.batchId,L)})}).then(()=>({batchId:m.batchId,changes:r_(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ue(ge)),u=u.insert(c,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Wi(r,s.changes),await za(r.remoteStore)}catch(s){const i=Iu(s,"Failed to persist write");n.reject(i)}}async function L_(t,e){const n=he(t);try{const r=await IS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?be(o.Fa):s.removedDocuments.size>0&&(be(o.Fa),o.Fa=!1))}),await Wi(n,r,e)}catch(r){await Ns(r)}}function rp(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const c=o.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach((d,f)=>{for(const m of f.J_)m.ea(c)&&(u=!0)}),u&&Ru(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lP(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ue(ne.comparator);o=o.insert(i,gt.newNoDocument(i,ue.min()));const c=me().add(i),l=new ja(ue.min(),new Map,new Ue(ge),o,c);await L_(r,l),r.La=r.La.remove(i),r.Ba.delete(e),Pu(r)}else await wl(r.localStore,e,!1).then(()=>Al(r,e,n)).catch(Ns)}async function uP(t,e){const n=he(t),r=e.batch.batchId;try{const s=await wS(n.localStore,e);U_(n,r,null),F_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wi(n,s)}catch(s){await Ns(s)}}async function hP(t,e,n){const r=he(t);try{const s=await function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(f=>(be(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);U_(r,e,n),F_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wi(r,s)}catch(s){await Ns(s)}}function F_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function U_(t,e,n){const r=he(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||B_(t,r)})}function B_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(yu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Pu(t))}function sp(t,e,n){for(const r of n)r instanceof V_?(t.ka.addReference(r.key,e),dP(t,r)):r instanceof x_?(J("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||B_(t,r.key)):oe()}function dP(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(J("SyncEngine","New document in limbo: "+n),t.Na.add(r),Pu(t))}function Pu(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ne(Ne.fromString(e)),r=t.Ka.next();t.Ba.set(r,new tP(n)),t.La=t.La.insert(n,r),P_(t.remoteStore,new Yn(on(La(n.path)),r,"TargetPurposeLimboResolution",Va.oe))}}async function Wi(t,e,n){const r=he(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{o.push(r.Ua(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=_u.zi(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const d=he(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(u,m=>x.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>x.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Vs(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const _=d.us.get(m),R=_.snapshotVersion,b=_.withLastLimboFreeSnapshotVersion(R);d.us=d.us.insert(m,b)}}}(r.localStore,i))}async function fP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await A_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new X(M.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wi(n,r.Ts)}}function pP(t,e){const n=he(t),r=n.Ba.get(e);if(r&&r.Fa)return me().add(r.key);{let s=me();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const c=n.xa.get(o);s=s.unionWith(c.view.fa)}return s}}function $_(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=L_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lP.bind(null,e),e.Ma.R_=JS.bind(null,e.eventManager),e.Ma.Wa=XS.bind(null,e.eventManager),e}function mP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hP.bind(null,e),e}class la{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return TS(this.persistence,new vS,e.initialUser,this.serializer)}ja(e){return new I_(gu.ei,this.serializer)}za(e){return new PS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}la.provider={build:()=>new la};class gP extends la{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){be(this.persistence.referenceDelegate instanceof aa);const r=this.persistence.referenceDelegate.garbageCollector;return new sS(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new I_(r=>aa.ei(r,n),this.serializer)}}class bl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fP.bind(null,this.syncEngine),await GS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YS}()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=function(i){return new OS(i)}(e.databaseInfo);return function(i,o,c,l){return new xS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new LS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>rp(this.syncEngine,n,0),function(){return Xf.p()?new Xf:new CS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const f=new nP(s,i,o,c,l,u);return d&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await zi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bl.provider={build:()=>new bl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await A_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yP(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zf(e.remoteStore,s)),t._onlineComponents=e}async function yP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new la)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new gP(void 0));return t._offlineComponents}async function j_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await ip(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await ip(t,new bl))),t._onlineComponents}function vP(t){return j_(t).then(e=>e.syncEngine)}async function ua(t){const e=await j_(t),n=e.eventManager;return n.onListen=rP.bind(null,e.syncEngine),n.onUnlisten=oP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aP.bind(null,e.syncEngine),n}function EP(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Cu({next:m=>{d.eu(),o.enqueueAndForget(()=>bu(i,f));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new X(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new X(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Su(La(c.path),d,{includeMetadataChanges:!0,ua:!0});return Au(i,f)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}function TP(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Cu({next:m=>{d.eu(),o.enqueueAndForget(()=>bu(i,f)),m.fromCache&&l.source==="server"?u.reject(new X(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Su(c,d,{includeMetadataChanges:!0,ua:!0});return Au(i,f)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wP(t,e,n,r){if(e===!0&&r===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ap(t){if(!ne.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cp(t){if(ne.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wa(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vb;switch(r.type){case"firstParty":return new Fb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=op.get(n);r&&(J("ComponentProvider","Removing Datastore"),op.delete(n),r.terminate())}(this),Promise.resolve()}}function IP(t,e,n,r={}){var s;const i=(t=Sn(t,Ka))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ft.MOCK_USER;else{c=kg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(u)}t._authCredentials=new xb(new jg(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class er extends hr{constructor(e,n,r){super(e,n,La(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new ne(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function Ps(t,e,...n){if(t=ot(t),H_("collection","path",e),t instanceof Ka){const r=Ne.fromString(e,...n);return cp(r),new er(t,null,r)}{if(!(t instanceof Ct||t instanceof er))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return cp(r),new er(t.firestore,null,r)}}function z_(t,e,...n){if(t=ot(t),arguments.length===1&&(e=qg.newId()),H_("doc","path",e),t instanceof Ka){const r=Ne.fromString(e,...n);return ap(r),new Ct(t,null,new ne(r))}{if(!(t instanceof Ct||t instanceof er))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ap(r),new Ct(t.firestore,t instanceof er?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new R_(this,"async_queue_retry"),this.fu=()=>{const r=Fc();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new bn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Vs(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=wu.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&oe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function hp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new up(e),this._firestoreClient=void 0,await e}}}function AP(t,e){const n=typeof t=="object"?t:iu(),r=typeof t=="string"?t:"(default)",s=Na(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sg("firestore");i&&IP(s,...i)}return s}function Ga(t){if(t._terminated)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bP(t),t._firestoreClient}function bP(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new Zb(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,q_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new _P(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(at.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=/^__.*__$/;class SP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new qi(e,this.data,n,this.fieldTransforms)}}function K_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ha(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(K_(this.Mu)&&RP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class PP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}$u(e,n,r,s=!1){return new Nu({Mu:e,methodName:n,Ku:r,path:st.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function G_(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new PP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CP(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);J_("Data must be an object, but it was:",o,r);const c=Q_(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=DP(e,f,n);if(!o.contains(m))throw new X(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);NP(d,m)||d.push(m)}l=new Ht(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new SP(new Ft(c),l,u)}function kP(t,e,n,r=!1){return Vu(n,t.$u(r?4:3,e))}function Vu(t,e){if(Y_(t=ot(t)))return J_("Unsupported field value:",e,t),Q_(t,e);if(t instanceof W_)return function(r,s){if(!K_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Vu(c,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:oa(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(r instanceof Du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:g_(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ou)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return hu(c.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Wa(r)}`)}(t,e)}function Q_(t,e){const n={};return Hg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,s)=>{const i=Vu(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Y_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Du||t instanceof ks||t instanceof Ct||t instanceof W_||t instanceof Ou)}function J_(t,e,n){if(!Y_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Wa(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function DP(t,e,n){if((e=ot(e))instanceof ku)return e._internalPath;if(typeof e=="string")return X_(t,e);throw ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const OP=new RegExp("[~\\*/\\[\\]]");function X_(t,e,n){if(e.search(OP)>=0)throw ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch{throw ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ha(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(M.INVALID_ARGUMENT,c+t+l)}function NP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VP extends Z_{data(){return super.data()}}function Qa(t,e){return typeof e=="string"?X_(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xu{}class ty extends xu{}function ny(t,e,...n){let r=[];e instanceof xu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Mu).length,c=i.filter(l=>l instanceof Ya).length;if(o>1||o>0&&c>0)throw new X(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ya extends ty{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ya(e,n,r)}_apply(e){const n=this._parse(e);return iy(e._query,n),new hr(e.firestore,e.converter,gl(e._query,n))}_parse(e){const n=G_(e.firestore);return function(i,o,c,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){fp(f,d);const _=[];for(const R of f)_.push(dp(l,i,R));m={arrayValue:{values:_}}}else m=dp(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||fp(f,d),m=kP(c,o,f,d==="in"||d==="not-in");return We.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ry(t,e,n){const r=e,s=Qa("where",t);return Ya._create(s,r,n)}class Mu extends xu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)iy(o,l),o=gl(o,l)}(e._query,n),new hr(e.firestore,e.converter,gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lu extends ty{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vi(i,o)}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new xs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function sy(t,e="asc"){const n=e,r=Qa("orderBy",t);return Lu._create(r,n)}function dp(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new X(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zg(e)&&n.indexOf("/")!==-1)throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!ne.isDocumentKey(r))throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Of(t,new ne(r))}if(n instanceof Ct)return Of(t,n._key);throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wa(n)}.`)}function fp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class xP{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new Ou(i)}convertGeoPoint(e){return new Du(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ma(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=sr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);be(w_(r));const s=new Oi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oy extends Z_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mo extends oy{data(e={}){return super.data(e)}}class ay{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mo(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:LP(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){t=Sn(t,Ct);const e=Sn(t.firestore,Cs);return EP(Ga(e),t._key).then(n=>ly(e,t,n))}class Fu extends xP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Rl(t){t=Sn(t,hr);const e=Sn(t.firestore,Cs),n=Ga(e),r=new Fu(e);return ey(t._query),TP(n,t._query).then(s=>new ay(e,r,t,s))}function cy(t,e){const n=Sn(t.firestore,Cs),r=z_(t),s=MP(t.converter,e);return BP(n,[CP(G_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Rn.exists(!1))]).then(()=>r)}function UP(t,...e){var n,r,s;t=ot(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hp(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hp(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let l,u,d;if(t instanceof Ct)u=Sn(t.firestore,Cs),d=La(t._key.path),l={next:f=>{e[o]&&e[o](ly(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Sn(t,hr);u=Sn(f.firestore,Cs),d=f._query;const m=new Fu(u);l={next:_=>{e[o]&&e[o](new ay(u,m,f,_))},error:e[o+1],complete:e[o+2]},ey(t._query)}return function(m,_,R,b){const k=new Cu(b),L=new Su(_,k,R);return m.asyncQueue.enqueueAndForget(async()=>Au(await ua(m),L)),()=>{k.eu(),m.asyncQueue.enqueueAndForget(async()=>bu(await ua(m),L))}}(Ga(u),d,c,l)}function BP(t,e){return function(r,s){const i=new bn;return r.asyncQueue.enqueueAndForget(async()=>cP(await vP(r),s,i)),i.promise}(Ga(t),e)}function ly(t,e,n){const r=n.docs.get(e._key),s=new Fu(t);return new oy(t,s,e._key,r,new si(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Os=s})(Fr),Dr(new nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Cs(new Mb(r.getProvider("auth-internal")),new Bb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sn(Rf,"4.7.5",e),sn(Rf,"4.7.5","esm2017")})();var $P="firebase",jP="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn($P,jP,"app");function Uu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qP=uy,hy=new $i("auth","Firebase",uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new ru("@firebase/auth");function HP(t,...e){da.logLevel<=pe.WARN&&da.warn(`Auth (${Fr}): ${t}`,...e)}function Lo(t,...e){da.logLevel<=pe.ERROR&&da.error(`Auth (${Fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Bu(t,...e)}function cn(t,...e){return Bu(t,...e)}function dy(t,e,n){const r=Object.assign(Object.assign({},qP()),{[e]:n});return new $i("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return dy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hy.create(t,...e)}function ae(t,e,...n){if(!t)throw Bu(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function Nn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zP(){return pp()==="http:"||pp()==="https:"}function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zP()||pA()||"connection"in navigator)?navigator.onLine:!0}function KP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=hA()||mA()}get(){return WP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=new Ki(3e4,6e4);function Gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,s={}){return py(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return fA()||(u.referrerPolicy="no-referrer"),fy.fetch()(gy(t,t.config.apiHost,n,c),u)})}async function py(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GP),e);try{const s=new JP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ao(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dy(t,d,u);On(t,d)}}catch(s){if(s instanceof dn)throw s;On(t,"network-request-failed",{message:String(s)})}}async function my(t,e,n,r,s={}){const i=await qr(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$u(t.config,s):`${t.config.apiScheme}://${s}`}function YP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),QP.get())})}}function Ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function mp(t){return t!==void 0&&t.enterprise!==void 0}class XP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZP(t,e){return qr(t,"GET","/v2/recaptchaConfig",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function _y(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tC(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=ju(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:yi(Bc(s.auth_time)),issuedAtTime:yi(Bc(s.iat)),expirationTime:yi(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function ju(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=bg(n);return s?JSON.parse(s):(Lo("Failed to decode base64 JWT payload"),null)}catch(s){return Lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gp(t){const e=ju(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&nC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Li(t,_y(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yy(i.providerUserInfo):[],c=iC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Pl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function sC(t){const e=ot(t);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yy(t){return t.map(e=>{var{providerId:n}=e,r=Uu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){const n=await py(t,{},async()=>{const r=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",fy.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aC(t,e){return qr(t,"POST","/v2/accounts:revokeToken",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=gp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gs;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gs,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tC(this,e)}reload(){return sC(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Li(this,eC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:$,isAnonymous:ie,providerData:le,stsTokenManager:I}=n;ae(B&&I,e,"internal-error");const v=gs.fromJSON(this.name,I);ae(typeof B=="string",e,"internal-error"),$n(f,e.name),$n(m,e.name),ae(typeof $=="boolean",e,"internal-error"),ae(typeof ie=="boolean",e,"internal-error"),$n(_,e.name),$n(R,e.name),$n(b,e.name),$n(k,e.name),$n(L,e.name),$n(F,e.name);const w=new In({uid:B,auth:e,email:m,emailVerified:$,displayName:f,isAnonymous:ie,photoURL:R,phoneNumber:_,tenantId:b,stsTokenManager:v,createdAt:L,lastLoginAt:F});return le&&Array.isArray(le)&&(w.providerData=le.map(A=>Object.assign({},A))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new gs;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new gs;c.updateFromIdToken(r);const l=new In({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Map;function An(t){Nn(t instanceof Function,"Expected a class definition");let e=_p.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_p.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vy.type="NONE";const yp=vy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(An(yp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(yp);const o=Fo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const f=In._fromJSON(e,d);u!==i&&(c=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _s(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _s(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Ry(e))return"Webos";if(Ty(e))return"Safari";if((e.includes("chrome/")||wy(e))&&!e.includes("edge/"))return"Chrome";if(Ay(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ey(t=_t()){return/firefox\//i.test(t)}function Ty(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wy(t=_t()){return/crios\//i.test(t)}function Iy(t=_t()){return/iemobile/i.test(t)}function Ay(t=_t()){return/android/i.test(t)}function by(t=_t()){return/blackberry/i.test(t)}function Ry(t=_t()){return/webos/i.test(t)}function qu(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cC(t=_t()){var e;return qu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lC(){return gA()&&document.documentMode===10}function Sy(t=_t()){return qu(t)||Ay(t)||Ry(t)||by(t)||/windows phone/i.test(t)||Iy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t,e=[]){let n;switch(t){case"Browser":n=vp(_t());break;case"Worker":n=`${vp(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e={}){return qr(t,"GET","/v2/passwordPolicy",Gi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=6;class fC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ep(this),this.idTokenSubscription=new Ep(this),this.beforeStateQueue=new uC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _y(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(tr(this));const n=e?ot(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hC(this),n=new fC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ls(t){return ot(t)}class Ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=AA(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mC(t){Ja=t}function Cy(t){return Ja.loadJS(t)}function gC(){return Ja.recaptchaEnterpriseScript}function _C(){return Ja.gapiScript}function yC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vC{constructor(){this.enterprise=new EC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class EC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TC="recaptcha-enterprise",ky="NO_RECAPTCHA";class wC{constructor(e){this.type=TC,this.auth=Ls(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ZP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new XP(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;mp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ky)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&mp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gC();l.length!==0&&(l+=c),Cy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Tp(t,e,n,r=!1,s=!1){const i=new wC(t);let o;if(s)o=ky;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function IC(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Tp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Tp(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){const n=Na(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ea(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function bC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RC(t,e,n){const r=Ls(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Dy(e),{host:o,port:c}=SC(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),PC()}function Dy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SC(t){const e=Dy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wp(o)}}}function wp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){return my(t,"POST","/v1/accounts:signInWithIdp",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="http://localhost";class Nr extends Oy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Uu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:CC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Qi{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Qi{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return my(t,"POST","/v1/accounts:signUp",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=Ip(r);return new Vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ip(r);return new Vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pa(e,n,r,s)}}function Vy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(t,i,e,r):i})}async function DC(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(tr(r));const s="reauthenticate";try{const i=await Li(t,Vy(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=ju(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e,n=!1){if(Tn(t.app))return Promise.reject(tr(t));const r="signIn",s=await Vy(t,r,e),i=await Vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t){const e=Ls(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zD(t,e,n){if(Tn(t.app))return Promise.reject(tr(t));const r=Ls(t),o=await IC(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&VC(t),l}),c=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function xC(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function MC(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=1e3,FC=10;class My extends xy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,FC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}My.type="LOCAL";const UC=My;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends xy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ly.type="SESSION";const Fy=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await BC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Hu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function jC(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function qC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zC(){return Uy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="firebaseLocalStorageDb",WC=1,ga="firebaseLocalStorage",$y="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function KC(){const t=indexedDB.deleteDatabase(By);return new Yi(t).toPromise()}function Cl(){const t=indexedDB.open(By,WC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ga,{keyPath:$y})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ga)?e(r):(r.close(),await KC(),e(await Cl()))})})}async function Ap(t,e,n){const r=Za(t,!0).put({[$y]:e,value:n});return new Yi(r).toPromise()}async function GC(t,e){const n=Za(t,!1).get(e),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function bp(t,e){const n=Za(t,!0).delete(e);return new Yi(n).toPromise()}const QC=800,YC=3;class jy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xa._getInstance(zC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qC(),!this.activeServiceWorker)return;this.sender=new $C(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await Ap(e,ma,"1"),await bp(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ap(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Za(s,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jy.type="LOCAL";const JC=jy;new Ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e){return e?An(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends Oy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZC(t){return NC(t.auth,new zu(t),t.bypassAuthState)}function e1(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),OC(n,new zu(t),t.bypassAuthState)}async function t1(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),DC(n,new zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZC;case"linkViaPopup":case"linkViaRedirect":return t1;case"reauthViaPopup":case"reauthViaRedirect":return e1;default:On(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new Ki(2e3,1e4);class as extends qy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n1.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="pendingRedirect",Uo=new Map;class s1 extends qy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await i1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i1(t,e){const n=c1(e),r=a1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function o1(t,e){Uo.set(t._key(),e)}function a1(t){return An(t._redirectPersistence)}function c1(t){return Fo(r1,t.config.apiKey,t.name)}async function l1(t,e,n=!1){if(Tn(t.app))return Promise.reject(tr(t));const r=Ls(t),s=XC(r,e),o=await new s1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=10*60*1e3;class h1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rp(e))}saveEventToCache(e){this.cachedEventUids.add(Rp(e)),this.lastProcessedEventTime=Date.now()}}function Rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m1=/^https?/;async function g1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await f1(t);for(const n of e)try{if(_1(n))return}catch{}On(t,"unauthorized-domain")}function _1(t){const e=Sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m1.test(n))return!1;if(p1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new Ki(3e4,6e4);function Sp(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v1(t){return new Promise((e,n)=>{var r,s,i;function o(){Sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sp(),n(cn(t,"network-request-failed"))},timeout:y1.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const c=yC("iframefcb");return ln()[c]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Cy(`${_C()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function E1(t){return Bo=Bo||v1(t),Bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new Ki(5e3,15e3),w1="__/auth/iframe",I1="emulator/auth/iframe",A1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R1(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$u(e,I1):`https://${t.config.authDomain}/${w1}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=b1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ji(r).slice(1)}`}async function S1(t){const e=await E1(t),n=ln().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:R1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),c=ln().setTimeout(()=>{i(o)},T1.get());function l(){ln().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C1=500,k1=600,D1="_blank",O1="http://localhost";class Pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,r=C1,s=k1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},P1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_t().toLowerCase();n&&(c=wy(u)?D1:n),Ey(u)&&(e=e||O1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(cC(u)&&c!=="_self")return V1(e||"",c),new Pp(null);const f=window.open(e||"",c,d);ae(f,t,"popup-blocked");try{f.focus()}catch{}return new Pp(f)}function V1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="__/auth/handler",M1="emulator/auth/handler",L1=encodeURIComponent("fac");async function Cp(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof Ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Qi){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${L1}=${encodeURIComponent(l)}`:"";return`${F1(t)}?${ji(c).slice(1)}${u}`}function F1({config:t}){return t.emulator?$u(t,M1):`https://${t.authDomain}/${x1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class U1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fy,this._completeRedirectFn=l1,this._overrideRedirectResult=o1}async _openPopup(e,n,r,s){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cp(e,n,r,Sl(),s);return N1(e,o,Hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cp(e,n,r,Sl(),s);return jC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S1(e),r=new h1(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$c];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sy()||Ty()||qu()}}const B1=U1;var kp="@firebase/auth",Dp="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q1(t){Dr(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Py(t)},u=new pC(r,s,i,l);return bC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dr(new nr("auth-internal",e=>{const n=Ls(e.getProvider("auth").getImmediate());return(r=>new $1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(kp,Dp,j1(t)),sn(kp,Dp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=5*60,z1=Cg("authIdTokenMaxAge")||H1;let Op=null;const W1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z1)return;const s=n==null?void 0:n.token;Op!==s&&(Op=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function K1(t=iu()){const e=Na(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AC(t,{popupRedirectResolver:B1,persistence:[JC,UC,Fy]}),r=Cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=W1(i.toString());MC(n,o,()=>o(n.currentUser)),xC(n,c=>o(c))}}const s=Rg("auth");return s&&RC(n,`http://${s}`),n}function G1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",G1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q1("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="firebasestorage.googleapis.com",Wy="storageBucket",Q1=2*60*1e3,Y1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends dn{constructor(e,n,r=0){super(jc(e),`Firebase Storage: ${n} (${jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function jc(t){return"storage/"+t}function Wu(){const t="An unknown error occurred, please check the error payload for server response.";return new je($e.UNKNOWN,t)}function J1(t){return new je($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function X1(t){return new je($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Z1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je($e.UNAUTHENTICATED,t)}function ek(){return new je($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tk(t){return new je($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nk(){return new je($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rk(){return new je($e.CANCELED,"User canceled the upload/download.")}function sk(t){return new je($e.INVALID_URL,"Invalid URL '"+t+"'.")}function ik(t){return new je($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ok(){return new je($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wy+"' property when initializing the app?")}function ak(){return new je($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ck(){return new je($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lk(t){return new je($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kl(t){return new je($e.INVALID_ARGUMENT,t)}function Ky(){return new je($e.APP_DELETED,"The Firebase app was deleted.")}function uk(t){return new je($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vi(t,e){return new je($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zs(t){throw new je($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw ik(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},b=n===zy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",L=new RegExp(`^https?://${b}/${s}/${k}`,"i"),B=[{regex:c,indices:l,postModify:i},{regex:_,indices:R,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<B.length;$++){const ie=B[$],le=ie.regex.exec(e);if(le){const I=le[ie.indices.bucket];let v=le[ie.indices.path];v||(v=""),r=new Vt(I,v),ie.postModify(r);break}}if(r==null)throw sk(e);return r}}class hk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...k){u||(u=!0,e.apply(null,k))}function f(k){s=setTimeout(()=>{s=null,t(_,l())},k)}function m(){i&&clearTimeout(i)}function _(k,...L){if(u){m();return}if(k){m(),d.call(null,k,...L);return}if(l()||o){m(),d.call(null,k,...L);return}r<64&&(r*=2);let B;c===1?(c=2,B=0):B=(r+Math.random())*1e3,f(B)}let R=!1;function b(k){R||(R=!0,m(),!u&&(s!==null?(k||(c=2),clearTimeout(s),f(0)):k||(c=1)))}return f(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function fk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){return t!==void 0}function mk(t){return typeof t=="object"&&!Array.isArray(t)}function Ku(t){return typeof t=="string"||t instanceof String}function Np(t){return Gu()&&t instanceof Blob}function Gu(){return typeof Blob<"u"}function Vp(t,e,n,r){if(r<e)throw kl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw kl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Gy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Rr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rr||(Rr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s,i,o,c,l,u,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,R)=>{this.resolve_=_,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Rr.NO_ERROR,l=i.getStatus();if(!c||gk(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Rr.ABORT;r(!1,new bo(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new bo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());pk(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Wu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ky():rk();o(l)}else{const l=nk();o(l)}};this.canceled_?n(!1,new bo(!1,null,!0)):this.backoffId_=dk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function yk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ek(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Tk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wk(t,e,n,r,s,i,o=!0){const c=Gy(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return Ek(u,e),yk(u,n),vk(u,i),Tk(u,r),new _k(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ak(...t){const e=Ik();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gu())return new Blob(t);throw new je($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){if(typeof atob>"u")throw lk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qc{constructor(e,n){this.data=e,this.contentType=n||null}}function Sk(t,e){switch(t){case en.RAW:return new qc(Qy(e));case en.BASE64:case en.BASE64URL:return new qc(Yy(t,e));case en.DATA_URL:return new qc(Ck(e),kk(e))}throw Wu()}function Qy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Pk(t){let e;try{e=decodeURIComponent(t)}catch{throw vi(en.DATA_URL,"Malformed data URL.")}return Qy(e)}function Yy(t,e){switch(t){case en.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw vi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw vi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Rk(e)}catch(s){throw s.message.includes("polyfill")?s:vi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Jy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vi(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Dk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Ck(t){const e=new Jy(t);return e.base64?Yy(en.BASE64,e.rest):Pk(e.rest)}function kk(t){return new Jy(t).contentType}function Dk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){let r=0,s="";Np(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Np(this.data_)){const r=this.data_,s=bk(r,e,n);return s===null?null:new Qn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qn(r,!0)}}static getBlob(...e){if(Gu()){const n=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(Ak.apply(null,n))}else{const n=e.map(o=>Ku(o)?Sk(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Qn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){let e;try{e=JSON.parse(t)}catch{return null}return mk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Nk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Zy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t,e){return e}class Tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Vk}}let Ro=null;function xk(t){return!Ku(t)||t.length<2?t:Zy(t)}function ev(){if(Ro)return Ro;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return xk(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Tt("size");return s.xform=r,t.push(s),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),Ro=t,Ro}function Mk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Vt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Lk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Mk(r,t),r}function tv(t,e,n){const r=Xy(e);return r===null?null:Lk(t,r,n)}function Fk(t,e,n,r){const s=Xy(e);if(s===null||!Ku(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=Qu(m,n,r),R=Gy({alt:"media",token:u});return _+R})[0]}function Uk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class nv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){if(!t)throw Wu()}function Bk(t,e){function n(r,s){const i=tv(t,s,e);return rv(i!==null),i}return n}function $k(t,e){function n(r,s){const i=tv(t,s,e);return rv(i!==null),Fk(i,s,t.host,t._protocol)}return n}function sv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ek():s=Z1():n.getStatus()===402?s=X1(t.bucket):n.getStatus()===403?s=tk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function jk(t){const e=sv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=J1(t.path)),i.serverResponse=s.serverResponse,i}return n}function qk(t,e,n){const r=e.fullServerUrl(),s=Qu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new nv(s,i,$k(t,n),o);return c.errorHandler=jk(e),c}function Hk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Hk(null,e)),r}function Wk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let B="";for(let $=0;$<2;$++)B=B+Math.random().toString().slice(2);return B}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=zk(e,r,s),d=Uk(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Qn.getBlob(f,r,m);if(_===null)throw ak();const R={name:u.fullPath},b=Qu(i,t.host,t._protocol),k="POST",L=t.maxUploadRetryTime,F=new nv(b,k,Bk(t,n),L);return F.urlParams=R,F.headers=o,F.body=_.uploadData(),F.errorHandler=sv(e),F}class Kk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Gk extends Kk{initXhr(){this.xhr_.responseType="text"}}function iv(){return new Gk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xr(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zy(this._location.path)}get storage(){return this._service}get parent(){const e=Ok(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uk(e)}}function Qk(t,e,n){t._throwIfRoot("uploadBytes");const r=Wk(t.storage,t._location,ev(),new Qn(e,!0),n);return t.storage.makeRequestWithTokens(r,iv).then(s=>({metadata:s,ref:t}))}function Yk(t){t._throwIfRoot("getDownloadURL");const e=qk(t.storage,t._location,ev());return t.storage.makeRequestWithTokens(e,iv).then(n=>{if(n===null)throw ck();return n})}function Jk(t,e){const n=Nk(t._location.path,e),r=new Vt(t._location.bucket,n);return new xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return/^[A-Za-z]+:\/\//.test(t)}function Zk(t,e){return new xr(t,e)}function ov(t,e){if(t instanceof Yu){const n=t;if(n._bucket==null)throw ok();const r=new xr(n,n._bucket);return e!=null?ov(r,e):r}else return e!==void 0?Jk(t,e):t}function eD(t,e){if(e&&Xk(e)){if(t instanceof Yu)return Zk(t,e);throw kl("To use ref(service, url), the first argument must be a Storage instance.")}else return ov(t,e)}function xp(t,e){const n=e==null?void 0:e[Wy];return n==null?null:Vt.makeFromBucketSpec(n,t)}function tD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:kg(s,t.app.options.projectId))}class Yu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=zy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Q1,this._maxUploadRetryTime=Y1,this._requests=new Set,s!=null?this._bucket=Vt.makeFromBucketSpec(s,this._host):this._bucket=xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new hk(Ky());{const o=wk(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Mp="@firebase/storage",Lp="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="storage";function nD(t,e,n){return t=ot(t),Qk(t,e,n)}function rD(t){return t=ot(t),Yk(t)}function sD(t,e){return t=ot(t),eD(t,e)}function iD(t=iu(),e){t=ot(t);const r=Na(t,av).getImmediate({identifier:e}),s=Sg("storage");return s&&oD(r,...s),r}function oD(t,e,n,r={}){tD(t,e,n,r)}function aD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Yu(n,r,s,e,Fr)}function cD(){Dr(new nr(av,aD,"PUBLIC").setMultipleInstances(!0)),sn(Mp,Lp,""),sn(Mp,Lp,"esm2017")}cD();const lD={apiKey:"AIzaSyDTP2PDWSXVpL-BnKcocXv1bnphPdLRvy0",authDomain:"wakayama-app-991cb.firebaseapp.com",projectId:"wakayama-app-991cb",storageBucket:"wakayama-app-991cb.firebasestorage.app",messagingSenderId:"231723373613",appId:"1:231723373613:web:b505d781a7421b6ec8d4a4",measurementId:"G-RHZ39CTKC5"},Ju=Ng(lD),Sr=AP(Ju),WD=K1(Ju),uD=iD(Ju),hD={name:"MapComponent",mounted(){new Tr({apiKey:"AIzaSyA8P-JJwpR-JVZqzBBtdN7lx-TvRs1M-Hw",version:"weekly"}).load().then(()=>{const e=new google.maps.Map(document.getElementById("map"),{center:{lat:33.4672,lng:135.7775},zoom:13.5});this.addMarkers(e)})},methods:{async fetchSpots(){try{const t=Ps(Sr,"spots");return(await Rl(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){return console.error("スポット情報の取得に失敗しました: ",t),[]}},async addMarkers(t){try{(await this.fetchSpots()).forEach(n=>{n.location&&n.location.lat&&n.location.lng?new google.maps.Marker({position:{lat:n.location.lat,lng:n.location.lng},map:t,title:n.name}).addListener("click",()=>{this.$router.push(`/spot/${n.id}`)}):console.warn("無効なスポット情報が含まれています: ",n)})}catch(e){console.error("マーカーの追加中にエラーが発生しました: ",e)}}}},dD={id:"map",style:{height:"100vh",width:"100%"}};function fD(t,e,n,r,s,i){return nt(),bt("div",dD)}const pD=Ds(hD,[["render",fD]]),mD={name:"SpotPosts",props:["id"],data(){return{spotName:"",posts:[]}},async created(){var t;try{const e=Ps(Sr,"spots"),r=(await Rl(e)).docs.find(c=>c.id===this.id);this.spotName=((t=r==null?void 0:r.data())==null?void 0:t.name)||"不明なスポット";const s=Ps(Sr,"posts"),i=ny(s,ry("spotId","==",this.id),sy("createdAt","desc")),o=await Rl(i);this.posts=o.docs.map(c=>({id:c.id,...c.data()}))}catch(e){console.error("投稿データの取得中にエラーが発生しました: ",e)}},methods:{goToPostForm(){this.$router.push(`/spot/${this.id}/new-post`)}}},gD={class:"spot-posts"},_D={key:0,class:"posts-list"},yD=["src"],vD={class:"post-content"},ED={class:"post-comment"},TD={class:"post-date"},wD={key:1};function ID(t,e,n,r,s,i){return nt(),bt("div",gD,[Oe("h2",null,Xt(s.spotName)+" の投稿一覧",1),s.posts.length?(nt(),bt("div",_D,[(nt(!0),bt(qt,null,Tm(s.posts,o=>(nt(),bt("div",{key:o.id,class:"post-card"},[Oe("img",{src:o.photoUrl,alt:"投稿写真",class:"post-image"},null,8,yD),Oe("div",vD,[Oe("p",ED,Xt(o.comment),1),Oe("small",TD,Xt(o.createdAt.toDate().toLocaleString()),1)])]))),128))])):(nt(),bt("p",wD,"投稿がまだありません。")),Oe("button",{onClick:e[0]||(e[0]=(...o)=>i.goToPostForm&&i.goToPostForm(...o)),class:"post-button"},"投稿する")])}const AD=Ds(mD,[["render",ID],["__scopeId","data-v-9b1f5039"]]),bD={name:"PostForm",props:["id"],data(){return{photo:null,comment:"",error:null,uploading:!1}},methods:{handleFileChange(t){this.photo=t.target.files[0],console.log("選択された写真:",this.photo)},async submitPost(){if(!this.photo||!this.comment){this.error="写真とコメントを入力してください。";return}this.uploading=!0,this.error=null;try{const t=sD(uD,`posts/${Date.now()}_${this.photo.name}`),e=await nD(t,this.photo),n=await rD(e.ref);await cy(Ps(Sr,"posts"),{spotId:this.id,photoUrl:n,comment:this.comment,createdAt:new Date}),alert("投稿が完了しました！"),this.$router.push(`/spot/${this.id}`)}catch(t){console.error("投稿中にエラーが発生しました:",t),this.error="投稿に失敗しました。もう一度試してください。"}finally{this.uploading=!1}}}},RD={class:"post-form"},SD={key:0,class:"error"};function PD(t,e,n,r,s,i){return nt(),bt("div",RD,[e[5]||(e[5]=Oe("h2",null,"新しい投稿を追加",-1)),Oe("div",null,[e[3]||(e[3]=Qo(" 写真: ")),Oe("input",{type:"file",onChange:e[0]||(e[0]=(...o)=>i.handleFileChange&&i.handleFileChange(...o))},null,32)]),Oe("div",null,[e[4]||(e[4]=Qo(" コメント: ")),gm(Oe("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.comment=o),placeholder:"コメントを入力してください"},null,512),[[Wm,s.comment]])]),s.error?(nt(),bt("div",SD,Xt(s.error),1)):$m("",!0),Oe("button",{onClick:e[2]||(e[2]=(...o)=>i.submitPost&&i.submitPost(...o))},"投稿する")])}const CD=Ds(bD,[["render",PD]]),kD={name:"PostDetail",props:["id"],data(){return{post:null,comments:[],newComment:"",unsubscribe:null}},created(){try{const t=z_(Sr,"posts",this.id);FP(t).then(r=>{this.post=r.exists()?{id:r.id,...r.data()}:null});const e=Ps(Sr,"comments"),n=ny(e,ry("postId","==",this.id),sy("createdAt","desc"));this.unsubscribe=UP(n,r=>{this.comments=r.docs.map(s=>({id:s.id,...s.data()}))})}catch(t){console.error("リアルタイムリスナーの設定中にエラーが発生しました:",t)}},beforeUnmount(){this.unsubscribe&&this.unsubscribe()},methods:{async addComment(){if(!this.newComment){alert("コメントを入力してください");return}try{const t=Ps(Sr,"comments");await cy(t,{postId:this.id,comment:this.newComment,createdAt:new Date}),this.newComment=""}catch(t){console.error("コメントの投稿中にエラーが発生しました:",t)}}}},DD={class:"post-detail"},OD=["src"],ND={key:0},VD={key:1,class:"comments-list"},xD={key:2};function MD(t,e,n,r,s,i){var o,c,l,u;return nt(),bt("div",DD,[Oe("h2",null,Xt(((o=s.post)==null?void 0:o.comment)||"投稿詳細"),1),Oe("img",{src:(c=s.post)==null?void 0:c.photoUrl,alt:"投稿写真",class:"post-image"},null,8,OD),Oe("small",null,Xt((u=(l=s.post)==null?void 0:l.createdAt)==null?void 0:u.toDate().toLocaleString()),1),s.post?(nt(),bt("p",ND,Xt(s.post.comment),1)):$m("",!0),e[2]||(e[2]=Oe("h3",null,"コメント一覧",-1)),s.comments.length?(nt(),bt("div",VD,[(nt(!0),bt(qt,null,Tm(s.comments,d=>(nt(),bt("div",{key:d.id,class:"comment-item"},[Oe("p",null,Xt(d.comment),1),Oe("small",null,Xt(d.createdAt.toDate().toLocaleString()),1)]))),128))])):(nt(),bt("p",xD,"コメントがまだありません。")),e[3]||(e[3]=Oe("h3",null,"コメントを追加",-1)),gm(Oe("textarea",{"onUpdate:modelValue":e[0]||(e[0]=d=>s.newComment=d),placeholder:"コメントを入力してください"},null,512),[[Wm,s.newComment]]),Oe("button",{onClick:e[1]||(e[1]=(...d)=>i.addComment&&i.addComment(...d))},"コメントを投稿")])}const LD=Ds(kD,[["render",MD],["__scopeId","data-v-36d297bd"]]),FD=[{path:"/",component:pD},{path:"/auth-test",component:()=>Y0(()=>import("./AuthTest-DBSI6HIN.js"),[])},{path:"/spot/:id",component:AD,props:!0},{path:"/spot/:id/new-post",component:CD,props:!0},{path:"/post/:id",name:"PostDetail",component:LD,props:!0}],UD=JI({history:SI(),routes:FD}),BD=lg(),Xu=XT(aw);Xu.use(UD);Xu.use(BD);Xu.mount("#app");export{Ds as _,WD as a,bt as b,zD as c,Oe as d,$D as e,$m as f,nt as o,Xt as t,Wm as v,gm as w};
