/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
 const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const o=t=>new e("string"==typeof t?t:t+"",i),n=(t,...s)=>{const o=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(o,i)},r=(i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))},h=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return o(i)})(t):t
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */;var l;const a=window.trustedTypes,u=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this.t=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.i=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.u(s,i);void 0!==e&&(this.v.set(e,s),t.push(e))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.v=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(h(t))}else void 0!==t&&i.push(h(t));return i}static u(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this.p=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this.g(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.m)&&void 0!==i?i:this.m=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.m)||void 0===i||i.splice(this.m.indexOf(t)>>>0,1)}g(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.t.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.m)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.m)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_(t,i,s=p){var e,o;const n=this.constructor.u(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:d.toAttribute)(i,s.type);this.i=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.i=null}}_$AK(t,i){var s,e,o;const n=this.constructor,r=n.v.get(t);if(void 0!==r&&this.i!==r){const t=n.getPropertyOptions(r),h=t.converter,l=null!==(o=null!==(e=null===(s=h)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof h?h:null)&&void 0!==o?o:d.fromAttribute;this.i=r,this[r]=l(i,t.type),this.i=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this.i!==t&&(void 0===this.S&&(this.S=new Map),this.S.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.p=this.$())}async $(){this.isUpdatePending=!0;try{await this.p}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.t&&(this.t.forEach(((t,i)=>this[i]=t)),this.t=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.m)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.C()}catch(t){throw i=!1,this.C(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this.m)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}C(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.p}shouldUpdate(t){return!0}update(t){void 0!==this.S&&(this.S.forEach(((t,i)=>this._(i,this[i],t))),this.S=void 0),this.C()}updated(t){}firstUpdated(t){}}
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 var b;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:f}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,_="?"+y,w=`<${_}>`,S=document,$=(t="")=>S.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,P=t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,M=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,E=/"/g,N=/^(?:script|style|textarea|title)$/i,O=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),R=O(1),V=O(2),j=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),L=new WeakMap,I=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Z(i.insertBefore($(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r},H=S.createTreeWalker(S,129,null,!1),B=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=x;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,u=0;for(;u<s.length&&(r.lastIndex=u,l=r.exec(s),null!==l);)u=r.lastIndex,r===x?"!--"===l[1]?r=A:void 0!==l[1]?r=M:void 0!==l[2]?(N.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=o?o:x,a=-1):void 0===l[1]?a=-2:(a=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?U:'"'===l[3]?E:k):r===E||r===k?r=U:r===A||r===M?r=x:(r=U,o=void 0);const c=r===U&&t[i+1].startsWith("/>")?" ":"";n+=r===x?s+w:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+y+c):s+y+(-2===a?(e.push(void 0),i):c)}const h=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(h):h,e]};class D{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[l,a]=B(t,i);if(this.el=D.createElement(l,s),H.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=H.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?W:"?"===i[1]?K:"@"===i[1]?Q:F})}else h.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(N.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=g?g.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],$()),H.nextNode(),h.push({type:2,index:++o});e.append(t[i],$())}}}else if(8===e.nodeType)if(e.data===_)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)h.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function q(t,i,s=t,e){var o,n,r,h;if(i===j)return i;let l=void 0!==e?null===(o=s.T)||void 0===o?void 0:o[e]:s.P;const a=C(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(r=(h=s).T)&&void 0!==r?r:h.T=[])[e]=l:s.P=l),void 0!==l&&(i=q(t,l._$AS(t,i.values),l,e)),i}class J{constructor(t,i){this.A=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}M(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);H.currentNode=o;let n=H.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new Z(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new X(n,this,t)),this.A.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(n=H.nextNode(),r++)}return o}U(t){let i=0;for(const s of this.A)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Z{constructor(t,i,s,e){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this.k=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this.k}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=q(this,t,i),C(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this.N(t):void 0!==t._$litType$?this.O(t):void 0!==t.nodeType?this.R(t):P(t)?this.V(t):this.N(t)}j(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}R(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}N(t){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=t:this.R(S.createTextNode(t)),this._$AH=t}O(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=D.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.U(s);else{const t=new J(o,this),i=t.M(this.options);t.U(s),this.R(i),this._$AH=t}}_$AC(t){let i=L.get(t.strings);return void 0===i&&L.set(t.strings,i=new D(t)),i}V(t){T(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new Z(this.j($()),this.j($()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this.k=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class F{constructor(t,i,s,e,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=q(this,t,i,0),n=!C(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=q(this,e[s+r],i,r),h===j&&(h=this._$AH[r]),n||(n=!C(h)||h!==this._$AH[r]),h===z?t=z:t!==z&&(t+=(null!=h?h:"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.L(t)}L(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends F{constructor(){super(...arguments),this.type=3}L(t){this.element[this.name]=t===z?void 0:t}}const G=g?g.emptyScript:"";class K extends F{constructor(){super(...arguments),this.type=4}L(t){t&&t!==z?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Q extends F{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=q(this,t,i,0))&&void 0!==s?s:z)===j)return;const e=this._$AH,o=t===z&&e!==z||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==z&&(e===z||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Y={I:"$lit$",H:y,B:_,D:1,q:B,J,Z:P,F:q,W:Z,G:F,K,X:Q,Y:W,tt:X},tt=window.litHtmlPolyfillSupport;
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 var it,st;null==tt||tt(D,Z),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.2.5");const et=f;class ot extends f{constructor(){super(...arguments),this.renderOptions={host:this},this.it=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.it=I(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.it)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.it)||void 0===t||t.setConnected(!1)}render(){return j}}ot.finalized=!0,ot._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot});const rt={_$AK:(t,i,s)=>{t._$AK(i,s)},_$AL:t=>t._$AL};(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.2.0");export{e as CSSResult,ot as LitElement,f as ReactiveElement,et as UpdatingElement,rt as _$LE,Y as _$LH,r as adoptStyles,n as css,d as defaultConverter,h as getCompatibleStyle,R as html,j as noChange,v as notEqual,z as nothing,I as render,t as supportsAdoptingStyleSheets,V as svg,o as unsafeCSS};
