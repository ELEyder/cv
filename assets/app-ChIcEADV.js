/**
 * @license
 * Copyright 2025 Google LLC
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
 */const hc=()=>{};var Ki={};/**
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
 */const sa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},dc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],l=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,l=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,A=(o&3)<<4|l>>4;let w=(l&15)<<2|f>>6,S=f&63;d||(S=64,u||(w=64)),r.push(e[_],e[A],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(sa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||A==null)throw new fc;const w=o<<2|l>>4;if(r.push(w),f!==64){const S=l<<4&240|f>>2;if(r.push(S),A!==64){const D=f<<6&192|A;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mc=function(n){const t=sa(n);return ia.encodeByteArray(t,!0)},Wn=function(n){return mc(n).replace(/\./g,"")},pc=function(n){try{return ia.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _c=()=>gc().__FIREBASE_DEFAULTS__,yc=()=>{if(typeof process>"u"||typeof Ki>"u")return;const n=Ki.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ec=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pc(n[1]);return t&&JSON.parse(t)},Ts=()=>{try{return hc()||_c()||yc()||Ec()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vc=n=>{var t,e;return(e=(t=Ts())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Tc=n=>{const t=vc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},oa=()=>{var n;return(n=Ts())===null||n===void 0?void 0:n.config};/**
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
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Is(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ac(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function wc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wn(JSON.stringify(e)),Wn(JSON.stringify(u)),""].join(".")}const nn={};function Rc(){const n={prod:[],emulator:[]};for(const t of Object.keys(nn))nn[t]?n.emulator.push(t):n.prod.push(t);return n}function Cc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Qi=!1;function Sc(n,t){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||nn[n]===t||nn[n]||Qi)return;nn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=Rc().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function d(w,S){w.setAttribute("width","24"),w.setAttribute("id",S),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Qi=!0,u()},w}function _(w,S){w.setAttribute("id",S),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function A(){const w=Cc(r),S=e("text"),D=document.getElementById(S)||document.createElement("span"),x=e("learnmore"),k=document.getElementById(x)||document.createElement("a"),W=e("preprendIcon"),z=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const H=w.element;l(H),_(k,x);const tt=f();d(z,W),H.append(z,D,k,tt),document.body.appendChild(H)}o?(D.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function Pc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bc(){var n;const t=(n=Ts())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vc(){return!bc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function Nc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const kc="FirebaseError";class De extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=kc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Oc(o,r):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new De(i,l,r)}}function Oc(n,t){return n.replace(xc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const xc=/\{\$([^}]+)}/g;function Xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Wi(o)&&Wi(u)){if(!Xn(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Wi(n){return n!==null&&typeof n=="object"}/**
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
 */function ua(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ae="[DEFAULT]";/**
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
 */class Mc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ic;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fc(t))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ae){return this.instances.has(t)}getOptions(t=ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ae){return this.component?this.component.multipleInstances?t:ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lc(n){return n===ae?void 0:n}function Fc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Uc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Mc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Bc={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},jc=B.INFO,qc={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},$c=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=qc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ca{constructor(t){this.name=t,this._logLevel=jc,this._logHandler=$c,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const zc=(n,t)=>t.some(e=>n instanceof e);let Xi,Ji;function Hc(){return Xi||(Xi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gc(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,Yr=new WeakMap,ha=new WeakMap,$r=new WeakMap,As=new WeakMap;function Kc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e($t(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&la.set(e,n)}).catch(()=>{}),As.set(t,n),t}function Qc(n){if(Yr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Yr.set(n,t)}let Zr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Yr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ha.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Wc(n){Zr=n(Zr)}function Xc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(zr(this),t,...e);return ha.set(r,t.sort?t.sort():[t]),$t(r)}:Gc().includes(n)?function(...t){return n.apply(zr(this),t),$t(la.get(this))}:function(...t){return $t(n.apply(zr(this),t))}}function Jc(n){return typeof n=="function"?Xc(n):(n instanceof IDBTransaction&&Qc(n),zc(n,Hc())?new Proxy(n,Zr):n)}function $t(n){if(n instanceof IDBRequest)return Kc(n);if($r.has(n))return $r.get(n);const t=Jc(n);return t!==n&&($r.set(n,t),As.set(t,n)),t}const zr=n=>As.get(n);function Yc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),l=$t(u);return r&&u.addEventListener("upgradeneeded",d=>{r($t(u.result),d.oldVersion,d.newVersion,$t(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Zc=["get","getKey","getAll","getAllKeys","count"],tl=["put","add","delete","clear"],Hr=new Map;function Yi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Hr.get(t))return Hr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=tl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zc.includes(e)))return;const o=async function(u,...l){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&d.done]))[0]};return Hr.set(t,o),o}Wc(n=>({...n,get:(t,e,r)=>Yi(t,e)||n.get(t,e,r),has:(t,e)=>!!Yi(t,e)||n.has(t,e)}));/**
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
 */class el{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(nl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function nl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ts="@firebase/app",Zi="0.13.2";/**
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
 */const xt=new ca("@firebase/app"),rl="@firebase/app-compat",sl="@firebase/analytics-compat",il="@firebase/analytics",ol="@firebase/app-check-compat",al="@firebase/app-check",ul="@firebase/auth",cl="@firebase/auth-compat",ll="@firebase/database",hl="@firebase/data-connect",dl="@firebase/database-compat",fl="@firebase/functions",ml="@firebase/functions-compat",pl="@firebase/installations",gl="@firebase/installations-compat",_l="@firebase/messaging",yl="@firebase/messaging-compat",El="@firebase/performance",vl="@firebase/performance-compat",Tl="@firebase/remote-config",Il="@firebase/remote-config-compat",Al="@firebase/storage",wl="@firebase/storage-compat",Rl="@firebase/firestore",Cl="@firebase/ai",Sl="@firebase/firestore-compat",Pl="firebase",bl="11.10.0";/**
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
 */const es="[DEFAULT]",Vl={[ts]:"fire-core",[rl]:"fire-core-compat",[il]:"fire-analytics",[sl]:"fire-analytics-compat",[al]:"fire-app-check",[ol]:"fire-app-check-compat",[ul]:"fire-auth",[cl]:"fire-auth-compat",[ll]:"fire-rtdb",[hl]:"fire-data-connect",[dl]:"fire-rtdb-compat",[fl]:"fire-fn",[ml]:"fire-fn-compat",[pl]:"fire-iid",[gl]:"fire-iid-compat",[_l]:"fire-fcm",[yl]:"fire-fcm-compat",[El]:"fire-perf",[vl]:"fire-perf-compat",[Tl]:"fire-rc",[Il]:"fire-rc-compat",[Al]:"fire-gcs",[wl]:"fire-gcs-compat",[Rl]:"fire-fst",[Sl]:"fire-fst-compat",[Cl]:"fire-vertex","fire-js":"fire-js",[Pl]:"fire-js-all"};/**
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
 */const Jn=new Map,Dl=new Map,ns=new Map;function to(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Yn(n){const t=n.name;if(ns.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;ns.set(t,n);for(const e of Jn.values())to(e,n);for(const e of Dl.values())to(e,n);return!0}function Nl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function kl(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ol={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new aa("app","Firebase",Ol);/**
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
 */class xl{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ml=bl;function da(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:es,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(e||(e=oa()),!e)throw zt.create("no-options");const o=Jn.get(i);if(o){if(Xn(e,o.options)&&Xn(r,o.config))return o;throw zt.create("duplicate-app",{appName:i})}const u=new Uc(i);for(const d of ns.values())u.addComponent(d);const l=new xl(e,r,u);return Jn.set(i,l),l}function Ll(n=es){const t=Jn.get(n);if(!t&&n===es&&oa())return da();if(!t)throw zt.create("no-app",{appName:n});return t}function Te(n,t,e){var r;let i=(r=Vl[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(l.join(" "));return}Yn(new un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Fl="firebase-heartbeat-database",Ul=1,cn="firebase-heartbeat-store";let Gr=null;function fa(){return Gr||(Gr=Yc(Fl,Ul,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),Gr}async function Bl(n){try{const e=(await fa()).transaction(cn),r=await e.objectStore(cn).get(ma(n));return await e.done,r}catch(t){if(t instanceof De)xt.warn(t.message);else{const e=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(e.message)}}}async function eo(n,t){try{const r=(await fa()).transaction(cn,"readwrite");await r.objectStore(cn).put(t,ma(n)),await r.done}catch(e){if(e instanceof De)xt.warn(e.message);else{const r=zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xt.warn(r.message)}}}function ma(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jl=1024,ql=30;class $l{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=no();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>ql){const u=Gl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=no(),{heartbeatsToSend:r,unsentEntries:i}=zl(this._heartbeatsCache.heartbeats),o=Wn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function no(){return new Date().toISOString().substring(0,10)}function zl(n,t=jl){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),ro(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ro(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?Nc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ro(n){return Wn(JSON.stringify({version:2,heartbeats:n})).length}function Gl(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Kl(n){Yn(new un("platform-logger",t=>new el(t),"PRIVATE")),Yn(new un("heartbeat",t=>new $l(t),"PRIVATE")),Te(ts,Zi,n),Te(ts,Zi,"esm2017"),Te("fire-js","")}Kl("");var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,pa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var p=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)p[Nt-2]=arguments[Nt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],p=m+(I^g&(E^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(E^I&(g^E))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(g^E^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(E^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=g;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=l;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function u(v,m){this.h=m;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==m||(g[E]=I,y=!1)}this.g=g}var l={};function d(v){return-128<=v&&128>v?o(v,function(m){return new u([m|0],0>m?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return k(f(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new u(m,0)}function _(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return k(_(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),p=parseInt(v.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(g),y=y.add(f(p)))}return y}var A=d(0),w=d(1),S=d(16777216);n=u.prototype,n.m=function(){if(x(this))return-k(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(x(this))return"-"+k(this).toString(v);for(var m=f(Math.pow(v,6)),g=this,y="";;){var E=tt(g,m).g;g=W(g,E.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,D(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=W(this,v),x(v)?-1:D(v)?0:1};function k(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new u(g,~v.h).add(w)}n.abs=function(){return x(this)?k(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=p>>>16,I&=65535,p&=65535,g[E]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function W(v,m){return v.add(k(m))}n.j=function(v){if(D(this)||D(v))return A;if(x(this))return x(v)?k(this).j(k(v)):k(k(this).j(v));if(x(v))return k(this.j(k(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,p=this.i(y)&65535,Nt=v.i(E)>>>16,xe=v.i(E)&65535;g[2*y+2*E]+=p*xe,z(g,2*y+2*E),g[2*y+2*E+1]+=I*xe,z(g,2*y+2*E+1),g[2*y+2*E+1]+=p*Nt,z(g,2*y+2*E+1),g[2*y+2*E+2]+=I*Nt,z(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function z(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function H(v,m){this.g=v,this.h=m}function tt(v,m){if(D(m))throw Error("division by zero");if(D(v))return new H(A,A);if(x(v))return m=tt(k(v),m),new H(k(m.g),k(m.h));if(x(m))return m=tt(v,k(m)),new H(k(m.g),m.h);if(30<v.g.length){if(x(v)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=w,y=m;0>=y.l(v);)g=Dt(g),y=Dt(y);var E=at(g,1),I=at(y,1);for(y=at(y,2),g=at(g,2);!D(y);){var p=I.add(y);0>=p.l(v)&&(E=E.add(g),I=p),y=at(y,1),g=at(g,1)}return m=W(v,E.j(m)),new H(E,m)}for(E=A;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),p=I.j(m);x(p)||0<p.l(v);)g-=y,I=f(g),p=I.j(m);D(I)&&(I=w),E=E.add(I),v=W(v,p)}return new H(E,v)}n.A=function(v){return tt(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Dt(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function at(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<m?v.i(I+g)>>>m|v.i(I+g+1)<<32-m:v.i(I+g);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pa=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Ht=u}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ga,Ye,_a,zn,rs,ya,Ea,va;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in c))break t;c=c[T]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,h=!1,T={next:function(){if(!h&&c<s.length){var R=c++;return{value:a(R,s[R]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function w(s,a,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,w.apply(null,arguments)}function S(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function D(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(h,T,R){for(var b=Array(arguments.length-2),G=2;G<arguments.length;G++)b[G-2]=arguments[G];return a.prototype[T].apply(h,b)}}function x(s){const a=s.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function k(s,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(d(h)){const T=s.length||0,R=h.length||0;s.length=T+R;for(let b=0;b<R;b++)s[T+b]=h[b]}else s.push(h)}}class W{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function z(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function tt(s){return tt[" "](s),s}tt[" "]=function(){};var Dt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function at(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function v(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(c in h)s[c]=h[c];for(let R=0;R<g.length;R++)c=g[R],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function I(s){l.setTimeout(()=>{throw s},0)}function p(){var s=Er;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,c){const h=xe.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var xe=new W(()=>new Vu,s=>s.reset());class Vu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,Le=!1,Er=new Nt,Ks=()=>{const s=l.Promise.resolve(void 0);Me=()=>{s.then(Du)}};var Du=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(c){I(c)}var a=xe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Le=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Nu=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function Fe(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Dt){t:{try{tt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ku[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Fe.aa.h.call(this)}}D(Fe,ht);var ku={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),Ou=0;function xu(s,a,c,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=T,this.key=++Ou,this.da=this.fa=!1}function Tn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,a,c,h,T){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=Tr(s,a,h,T);return-1<b?(a=s[b],c||(a.fa=!1)):(a=new xu(a,this.src,R,!!h,T),a.fa=c,s.push(a)),a};function vr(s,a){var c=a.type;if(c in s.g){var h=s.g[c],T=Array.prototype.indexOf.call(h,a,void 0),R;(R=0<=T)&&Array.prototype.splice.call(h,T,1),R&&(Tn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Tr(s,a,c,h){for(var T=0;T<s.length;++T){var R=s[T];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==h)return T}return-1}var Ir="closure_lm_"+(1e6*Math.random()|0),Ar={};function Qs(s,a,c,h,T){if(Array.isArray(a)){for(var R=0;R<a.length;R++)Qs(s,a[R],c,h,T);return null}return c=Js(c),s&&s[vn]?s.K(a,c,f(h)?!!h.capture:!1,T):Mu(s,a,c,!1,h,T)}function Mu(s,a,c,h,T,R){if(!a)throw Error("Invalid event type");var b=f(T)?!!T.capture:!!T,G=Rr(s);if(G||(s[Ir]=G=new In(s)),c=G.add(a,c,h,b,R),c.proxy)return c;if(h=Lu(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)Nu||(T=b),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(Xs(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Lu(){function s(c){return a.call(s.src,s.listener,c)}const a=Fu;return s}function Ws(s,a,c,h,T){if(Array.isArray(a))for(var R=0;R<a.length;R++)Ws(s,a[R],c,h,T);else h=f(h)?!!h.capture:!!h,c=Js(c),s&&s[vn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],c=Tr(R,c,h,T),-1<c&&(Tn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=Rr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Tr(a,c,h,T)),(c=-1<s?a[s]:null)&&wr(c))}function wr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[vn])vr(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(Xs(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=Rr(a))?(vr(c,s),c.h==0&&(c.src=null,a[Ir]=null)):Tn(s)}}}function Xs(s){return s in Ar?Ar[s]:Ar[s]="on"+s}function Fu(s,a){if(s.da)s=!0;else{a=new Fe(a,this);var c=s.listener,h=s.ha||s.src;s.fa&&wr(s),s=c.call(h,a)}return s}function Rr(s){return s=s[Ir],s instanceof In?s:null}var Cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Js(s){return typeof s=="function"?s:(s[Cr]||(s[Cr]=function(a){return s.handleEvent(a)}),s[Cr])}function dt(){Lt.call(this),this.i=new In(this),this.M=this,this.F=null}D(dt,Lt),dt.prototype[vn]=!0,dt.prototype.removeEventListener=function(s,a,c,h){Ws(this,s,a,c,h)};function Et(s,a){var c,h=s.F;if(h)for(c=[];h;h=h.F)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var T=a;a=new ht(h,s),y(a,T)}if(T=!0,c)for(var R=c.length-1;0<=R;R--){var b=a.g=c[R];T=An(b,h,!0,a)&&T}if(b=a.g=s,T=An(b,h,!0,a)&&T,T=An(b,h,!1,a)&&T,c)for(R=0;R<c.length;R++)b=a.g=c[R],T=An(b,h,!1,a)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],h=0;h<c.length;h++)Tn(c[h]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},dt.prototype.L=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function An(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,R=0;R<a.length;++R){var b=a[R];if(b&&!b.da&&b.capture==c){var G=b.listener,ut=b.ha||b.src;b.fa&&vr(s.i,b),T=G.call(ut,h)!==!1&&T}}return T&&!h.defaultPrevented}function Ys(s,a,c){if(typeof s=="function")c&&(s=w(s,c));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function Zs(s){s.g=Ys(()=>{s.g=null,s.i&&(s.i=!1,Zs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Uu extends Lt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Zs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(s){Lt.call(this),this.h=s,this.g={}}D(Ue,Lt);var ti=[];function ei(s){at(s.g,function(a,c){this.g.hasOwnProperty(c)&&wr(a)},s),s.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),ei(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sr=l.JSON.stringify,Bu=l.JSON.parse,ju=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Pr(){}Pr.prototype.h=null;function ni(s){return s.h||(s.h=s.i())}function ri(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){ht.call(this,"d")}D(br,ht);function Vr(){ht.call(this,"c")}D(Vr,ht);var re={},si=null;function wn(){return si=si||new dt}re.La="serverreachability";function ii(s){ht.call(this,re.La,s)}D(ii,ht);function je(s){const a=wn();Et(a,new ii(a))}re.STAT_EVENT="statevent";function oi(s,a){ht.call(this,re.STAT_EVENT,s),this.stat=a}D(oi,ht);function vt(s){const a=wn();Et(a,new oi(a,s))}re.Ma="timingevent";function ai(s,a){ht.call(this,re.Ma,s),this.size=a}D(ai,ht);function qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function qu(s,a,c,h,T,R){s.info(function(){if(s.g)if(R)for(var b="",G=R.split("&"),ut=0;ut<G.length;ut++){var $=G[ut].split("=");if(1<$.length){var ft=$[0];$=$[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+$+"&"):b+(ft+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+c+`
`+b})}function $u(s,a,c,h,T,R,b){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+c+`
`+R+" "+b})}function fe(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Hu(s,c)+(h?" "+h:"")})}function zu(s,a){s.info(function(){return"TIMEOUT: "+a})}$e.prototype.info=function(){};function Hu(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var h=c[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Sr(c)}catch{return a}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ui={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dr;function Cn(){}D(Cn,Pr),Cn.prototype.g=function(){return new XMLHttpRequest},Cn.prototype.i=function(){return{}},Dr=new Cn;function Ft(s,a,c,h){this.j=s,this.i=a,this.l=c,this.R=h||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ci}function ci(){this.i=null,this.g="",this.h=!1}var li={},Nr={};function kr(s,a,c){s.L=1,s.v=Vn(kt(a)),s.m=c,s.P=!0,hi(s,null)}function hi(s,a){s.F=Date.now(),Sn(s),s.A=kt(s.v);var c=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),Ri(c.i,"t",h),s.C=0,c=s.j.J,s.h=new ci,s.g=$i(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Uu(w(s.Y,s,s.g),s.O)),a=s.U,c=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ti[0]=T.toString()),T=ti);for(var R=0;R<T.length;R++){var b=Qs(c,T[R],h||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),qu(s.i,s.u,s.A,s.l,s.R,s.m)}Ft.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ot(s)==3?a.j():this.Y(s)},Ft.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Ot(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Ni(this.g)))){this.J||mt!=4||a==7||(a==8||0>=ge?je(3):je(2)),Or(this);var c=this.g.Z();this.X=c;e:if(di(this)){var h=Ni(this.g);s="";var T=h.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),ze(this);var b="";break e}this.h.i=new l.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(R&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,$u(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var G,ut=this.g;if((G=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(G)){var $=G;break e}}$=null}if(c=$)fe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,c);else{this.o=!1,this.s=3,vt(12),se(this),ze(this);break t}}if(this.P){c=!0;let wt;for(;!this.J&&this.C<b.length;)if(wt=Gu(this,b),wt==Nr){mt==4&&(this.s=4,vt(14),c=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==li){this.s=4,vt(15),fe(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else fe(this.i,this.l,wt,null),xr(this,wt);if(di(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)fe(this.i,this.l,b,"[Invalid Chunked Response]"),se(this),ze(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),jr(ft),ft.M=!0,vt(11))}}else fe(this.i,this.l,b,null),xr(this,b);mt==4&&se(this),this.o&&!this.J&&(mt==4?Ui(this.j,this):(this.o=!1,Sn(this)))}else cc(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),se(this),ze(this)}}}catch{}finally{}};function di(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Gu(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?Nr:(c=Number(a.substring(c,h)),isNaN(c)?li:(h+=1,h+c>a.length?Nr:(a=a.slice(h,h+c),s.C=h+c,a)))}Ft.prototype.cancel=function(){this.J=!0,se(this)};function Sn(s){s.S=Date.now()+s.I,fi(s,s.I)}function fi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=qe(w(s.ba,s),a)}function Or(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Ft.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(zu(this.i,this.A),this.L!=2&&(je(),vt(17)),se(this),this.s=2,ze(this)):fi(this,this.S-s)};function ze(s){s.j.G==0||s.J||Ui(s.j,s)}function se(s){Or(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ei(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function xr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Mr(c.h,s))){if(!s.K&&Mr(c.h,s)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Mn(c),On(c);else break t;Br(c),vt(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=qe(w(c.Za,c),6e3));if(1>=gi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else oe(c,11)}else if((s.K||c.g==s)&&Mn(c),!z(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(c.T=$[0],$=$[1],c.G==2)if($[0]=="c"){c.K=$[1],c.ia=$[2];const ft=$[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=$[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const ge=$[5];ge!=null&&typeof ge=="number"&&0<ge&&(h=1.5*ge,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const wt=s.g;if(wt){const Fn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var R=h.h;R.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Lr(R,R.h),R.h=null))}if(h.D){const qr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;qr&&(h.ya=qr,K(h.I,h.D,qr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var b=s;if(h.qa=qi(h,h.J?h.ia:null,h.W),b.K){_i(h.h,b);var G=b,ut=h.L;ut&&(G.I=ut),G.B&&(Or(G),Sn(G)),h.g=b}else Li(h);0<c.i.length&&xn(c)}else $[0]!="stop"&&$[0]!="close"||oe(c,7);else c.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?oe(c,7):Ur(c):$[0]!="noop"&&c.l&&c.l.ta($),c.v=0)}}je(4)}catch{}}var Ku=class{constructor(s,a){this.g=s,this.map=a}};function mi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function gi(s){return s.h?1:s.g?s.g.size:0}function Mr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Lr(s,a){s.g?s.g.add(a):s.h=a}function _i(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}mi.prototype.cancel=function(){if(this.i=yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function yi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return x(s.i)}function Qu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],c=s.length,h=0;h<c;h++)a.push(s[h]);return a}a=[],c=0;for(h in s)a[c++]=s[h];return a}function Wu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const h in s)a[c++]=h;return a}}}function Ei(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Wu(s),h=Qu(s),T=h.length,R=0;R<T;R++)a.call(void 0,h[R],c&&c[R],s)}var vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xu(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var h=s[c].indexOf("="),T=null;if(0<=h){var R=s[c].substring(0,h);T=s[c].substring(h+1)}else R=s[c];a(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ie){this.h=s.h,Pn(this,s.j),this.o=s.o,this.g=s.g,bn(this,s.s),this.l=s.l;var a=s.i,c=new Ke;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Ti(this,c),this.m=s.m}else s&&(a=String(s).match(vi))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=He(a[2]||""),this.g=He(a[3]||"",!0),bn(this,a[4]),this.l=He(a[5]||"",!0),Ti(this,a[6]||"",!0),this.m=He(a[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}ie.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ge(a,Ii,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ge(a,Ii,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ge(c,c.charAt(0)=="/"?Zu:Yu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ge(c,ec)),s.join("")};function kt(s){return new ie(s)}function Pn(s,a,c){s.j=c?He(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function bn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ti(s,a,c){a instanceof Ke?(s.i=a,nc(s.i,s.h)):(c||(a=Ge(a,tc)),s.i=new Ke(a,s.h))}function K(s,a,c){s.i.set(a,c)}function Vn(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function He(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ge(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Ju),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ju(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ii=/[#\/\?@]/g,Yu=/[#\?:]/g,Zu=/[#\?]/g,tc=/[#\?@]/g,ec=/#/g;function Ke(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ut(s){s.g||(s.g=new Map,s.h=0,s.i&&Xu(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Ke.prototype,n.add=function(s,a){Ut(this),this.i=null,s=me(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Ai(s,a){Ut(s),a=me(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function wi(s,a){return Ut(s),a=me(s,a),s.g.has(a)}n.forEach=function(s,a){Ut(this),this.g.forEach(function(c,h){c.forEach(function(T){s.call(a,T,h,this)},this)},this)},n.na=function(){Ut(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const T=s[h];for(let R=0;R<T.length;R++)c.push(a[h])}return c},n.V=function(s){Ut(this);let a=[];if(typeof s=="string")wi(this,s)&&(a=a.concat(this.g.get(me(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Ut(this),this.i=null,s=me(this,s),wi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ri(s,a,c){Ai(s,a),0<c.length&&(s.i=null,s.g.set(me(s,a),x(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const R=encodeURIComponent(String(h)),b=this.V(h);for(h=0;h<b.length;h++){var T=R;b[h]!==""&&(T+="="+encodeURIComponent(String(b[h]))),s.push(T)}}return this.i=s.join("&")};function me(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function nc(s,a){a&&!s.j&&(Ut(s),s.i=null,s.g.forEach(function(c,h){var T=h.toLowerCase();h!=T&&(Ai(this,h),Ri(this,T,c))},s)),s.j=a}function rc(s,a){const c=new $e;if(l.Image){const h=new Image;h.onload=S(Bt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=S(Bt,c,"TestLoadImage: error",!1,a,h),h.onabort=S(Bt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=S(Bt,c,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function sc(s,a){const c=new $e,h=new AbortController,T=setTimeout(()=>{h.abort(),Bt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(R=>{clearTimeout(T),R.ok?Bt(c,"TestPingServer: ok",!0,a):Bt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Bt(c,"TestPingServer: error",!1,a)})}function Bt(s,a,c,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(c)}catch{}}function ic(){this.g=new ju}function oc(s,a,c){const h=c||"";try{Ei(s,function(T,R){let b=T;f(T)&&(b=Sr(T)),a.push(h+R+"="+encodeURIComponent(b))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Dn,Pr),Dn.prototype.g=function(){return new Nn(this.l,this.j)},Dn.prototype.i=(function(s){return function(){return s}})({});function Nn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Nn,dt),n=Nn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,We(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ci(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ci(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Qe(this):We(this),this.readyState==3&&Ci(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Qe(this))},n.Qa=function(s){this.g&&(this.response=s,Qe(this))},n.ga=function(){this.g&&Qe(this)};function Qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,We(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function We(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Si(s){let a="";return at(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function Fr(s,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=Si(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):K(s,a,c))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var ac=/^https?$/i,uc=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dr.g(),this.v=this.o?ni(this.o):ni(Dr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Pi(this,R);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)c.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const R of h.keys())c.set(R,h.get(R));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uc,a,void 0))||h||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of c)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Di(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Pi(this,R)}};function Pi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,bi(s),kn(s)}function bi(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Vi(this):this.bb())},n.bb=function(){Vi(this)};function Vi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)Ys(s.Ea,0,s);else if(Et(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=b===0){var T=String(s.D).match(vi)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),h=!ac.test(T?T.toLowerCase():"")}c=h}if(c)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var R=2<Ot(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",bi(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){Di(s);const c=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Et(s,"ready");try{c.onreadystatechange=h}catch{}}}function Di(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Bu(a)}};function Ni(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function cc(s){const a={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(z(s[h]))continue;var c=E(s[h]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[T]||[];a[T]=R,R.push(c)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function ki(s){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,s),this.cb=Xe("retryDelaySeedMs",1e4,s),this.Wa=Xe("forwardChannelMaxRetries",2,s),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new mi(s&&s.concurrentRequestLimit),this.Da=new ic,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ki.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,h){vt(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=qi(this,null,this.W),xn(this)};function Ur(s){if(Oi(s),s.G==3){var a=s.U++,c=kt(s.I);if(K(c,"SID",s.K),K(c,"RID",a),K(c,"TYPE","terminate"),Je(s,c),a=new Ft(s,s.j,a),a.L=2,a.v=Vn(kt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=$i(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Sn(a)}ji(s)}function On(s){s.g&&(jr(s),s.g.cancel(),s.g=null)}function Oi(s){On(s),s.u&&(l.clearTimeout(s.u),s.u=null),Mn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function xn(s){if(!pi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Me||Ks(),Le||(Me(),Le=!0),Er.add(a,s),s.B=0}}function lc(s,a){return gi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=qe(w(s.Ga,s,a),Bi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Ft(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Mi(this,T,a),c=kt(this.I),K(c,"RID",s),K(c,"CVER",22),this.D&&K(c,"X-HTTP-Session-Id",this.D),Je(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Si(R)))+"&"+a:this.m&&Fr(c,this.m,R)),Lr(this.h,T),this.Ua&&K(c,"TYPE","init"),this.P?(K(c,"$req",a),K(c,"SID","null"),T.T=!0,kr(T,c,null)):kr(T,c,a),this.G=2}}else this.G==3&&(s?xi(this,s):this.i.length==0||pi(this.h)||xi(this))};function xi(s,a){var c;a?c=a.l:c=s.U++;const h=kt(s.I);K(h,"SID",s.K),K(h,"RID",c),K(h,"AID",s.T),Je(s,h),s.m&&s.o&&Fr(h,s.m,s.o),c=new Ft(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Mi(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Lr(s.h,c),kr(c,h,a)}function Je(s,a){s.H&&at(s.H,function(c,h){K(a,h,c)}),s.l&&Ei({},function(c,h){K(a,h,c)})}function Mi(s,a,c){c=Math.min(s.i.length,c);var h=s.l?w(s.l.Na,s.l,s):null;t:{var T=s.i;let R=-1;for(;;){const b=["count="+c];R==-1?0<c?(R=T[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let G=!0;for(let ut=0;ut<c;ut++){let $=T[ut].g;const ft=T[ut].map;if($-=R,0>$)R=Math.max(0,T[ut].g-100),G=!1;else try{oc(ft,b,"req"+$+"_")}catch{h&&h(ft)}}if(G){h=b.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,h}function Li(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Me||Ks(),Le||(Me(),Le=!0),Er.add(a,s),s.v=0}}function Br(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=qe(w(s.Fa,s),Bi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Fi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=qe(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),On(this),Fi(this))};function jr(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Fi(s){s.g=new Ft(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);K(a,"RID","rpc"),K(a,"SID",s.K),K(a,"AID",s.T),K(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(a,"TO",s.ja),K(a,"TYPE","xmlhttp"),Je(s,a),s.m&&s.o&&Fr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Vn(kt(a)),c.m=null,c.P=!0,hi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Br(this),vt(19))};function Mn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ui(s,a){var c=null;if(s.g==a){Mn(s),jr(s),s.g=null;var h=2}else if(Mr(s.h,a))c=a.D,_i(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=wn(),Et(h,new ai(h,c)),xn(s)}else Li(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&lc(s,a)||h==2&&Br(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function Bi(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function oe(s,a){if(s.j.info("Error code "+a),a==2){var c=w(s.fb,s),h=s.Xa;const T=!h;h=new ie(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pn(h,"https"),Vn(h),T?rc(h.toString(),c):sc(h.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(a),ji(s),Oi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ji(s){if(s.G=0,s.ka=[],s.l){const a=yi(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function qi(s,a,c){var h=c instanceof ie?kt(c):new ie(c);if(h.g!="")a&&(h.g=a+"."+h.g),bn(h,h.s);else{var T=l.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var R=new ie(null);h&&Pn(R,h),a&&(R.g=a),T&&bn(R,T),c&&(R.l=c),h=R}return c=s.D,a=s.ya,c&&a&&K(h,c,a),K(h,"VER",s.la),Je(s,h),h}function $i(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new Dn({eb:c})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zi(){}n=zi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ln(){}Ln.prototype.g=function(s,a){return new At(s,a)};function At(s,a){dt.call(this),this.g=new ki(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!z(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!z(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new pe(this)}D(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ur(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Sr(s),s=c);a.i.push(new Ku(a.Ya++,s)),a.G==3&&xn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,At.aa.N.call(this)};function Hi(s){br.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(Hi,br);function Gi(){Vr.call(this),this.status=1}D(Gi,Vr);function pe(s){this.g=s}D(pe,zi),pe.prototype.ua=function(){Et(this.g,"a")},pe.prototype.ta=function(s){Et(this.g,new Hi(s))},pe.prototype.sa=function(s){Et(this.g,new Gi)},pe.prototype.ra=function(){Et(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,va=function(){return new Ln},Ea=function(){return wn()},ya=re,rs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,zn=Rn,ui.COMPLETE="complete",_a=ui,ri.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ye=ri,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ga=J}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const io="@firebase/firestore",oo="4.8.0";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ne="11.10.0";/**
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
 */const he=new ca("@firebase/firestore");function _e(){return he.logLevel}function V(n,...t){if(he.logLevel<=B.DEBUG){const e=t.map(ws);he.debug(`Firestore (${Ne}): ${n}`,...e)}}function Mt(n,...t){if(he.logLevel<=B.ERROR){const e=t.map(ws);he.error(`Firestore (${Ne}): ${n}`,...e)}}function Xt(n,...t){if(he.logLevel<=B.WARN){const e=t.map(ws);he.warn(`Firestore (${Ne}): ${n}`,...e)}}function ws(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ta(n,r,e)}function Ta(n,t,e){let r=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Mt(r),new Error(r)}function X(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ta(t,i,r)}function j(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends De{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Ia{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ql{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Wl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Xl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},l=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Ia(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Jl{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Yl{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Jl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ao{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ao(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ao(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function th(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Aa(){return new TextEncoder}/**
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
 */class Rs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=th(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function F(n,t){return n<t?-1:n>t?1:0}function ss(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return F(r,i);{const o=Aa(),u=eh(o.encode(uo(n,e)),o.encode(uo(t,e)));return u!==0?u:F(r,i)}}e+=r>65535?2:1}return F(n.length,t.length)}function uo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function eh(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return F(n[e],t[e]);return F(n.length,t.length)}function Re(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const co="__name__";class Rt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Rt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Rt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const r=Rt.isNumericId(t),i=Rt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Rt.extractNumericId(t).compare(Rt.extractNumericId(e)):ss(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ht.fromString(t.substring(4,t.length-2))}}class Q extends Rt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const nh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Rt{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return nh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===co}static keyField(){return new Tt([co])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(r+=l,i++):(o(),i++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
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
 */function wa(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function rh(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function lo(n){if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ho(n){if(O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ih(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function ln(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ih(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function rt(n,t){const e={typeString:n};return t&&(e.value=t),e}function pn(n,t){if(!sh(n))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const fo=-62135596800,mo=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*mo);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<fo)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mo}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(pn(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-fo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:rt("string",nt._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
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
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new nt(0,0))}static max(){return new M(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const hn=-1;function oh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new Jt(i,O.empty(),t)}function ah(n){return new Jt(n.readTime,n.key,hn)}class Jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Jt(M.min(),O.empty(),hn)}static max(){return new Jt(M.max(),O.empty(),hn)}}function uh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:F(n.largestBatchId,t.largestBatchId))}/**
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
 */const ch="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function or(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==ch)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let i=0,o=0,u=!1;t.forEach((l=>{++i,l.next((()=>{++o,u&&o===i&&e()}),(d=>r(d)))})),u=!0,o===i&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((i=>i?C.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,i)=>{const o=t.length,u=new Array(o);let l=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next((_=>{u[f]=_,++l,l===o&&r(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new C(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function hh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ke(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}ar.ue=-1;/**
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
 */const dh=-1;function ur(n){return n==null}function is(n){return n===0&&1/n==-1/0}/**
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
 */const Ra="";function fh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=po(t)),t=mh(n.get(e),t);return po(t)}function mh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ra:e+="";break;default:e+=o}}return e}function po(n){return n+Ra+""}/**
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
 */function go(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ph(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new jt([])}unionWith(t){let e=new it(Tt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new jt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ca("Invalid base64 string: "+o):o}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const gh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=gh.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */const Sa="server_timestamp",Pa="__type__",ba="__previous_value__",Va="__local_write_time__";function Cs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Pa])===null||e===void 0?void 0:e.stringValue)===Sa}function cr(n){const t=n.mapValue.fields[ba];return Cs(t)?cr(t):t}function dn(n){const t=Yt(n.mapValue.fields[Va].timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class _h{constructor(t,e,r,i,o,u,l,d,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=_}}const Zn="(default)";class fn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const yh="__type__",Eh="__max__",jn={mapValue:{}},vh="__vector__",os="value";function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cs(n)?4:Ih(n)?9007199254740991:Th(n)?10:11:L(28295,{value:n})}function bt(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return dn(n).isEqual(dn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Yt(i.timestampValue),l=Yt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Zt(i.bytesValue).isEqual(Zt(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return Y(i.geoPointValue.latitude)===Y(o.geoPointValue.latitude)&&Y(i.geoPointValue.longitude)===Y(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return Y(i.integerValue)===Y(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Y(i.doubleValue),l=Y(o.doubleValue);return u===l?is(u)===is(l):isNaN(u)&&isNaN(l)}return!1})(n,t);case 9:return Re(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(go(u)!==go(l))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(l[d]===void 0||!bt(u[d],l[d])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function mn(n,t){return(n.values||[]).find((e=>bt(e,t)))!==void 0}function Ce(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return F(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const l=Y(o.integerValue||o.doubleValue),d=Y(u.integerValue||u.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1})(n,t);case 3:return yo(n.timestampValue,t.timestampValue);case 4:return yo(dn(n),dn(t));case 5:return ss(n.stringValue,t.stringValue);case 6:return(function(o,u){const l=Zt(o),d=Zt(u);return l.compareTo(d)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const l=o.split("/"),d=u.split("/");for(let f=0;f<l.length&&f<d.length;f++){const _=F(l[f],d[f]);if(_!==0)return _}return F(l.length,d.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const l=F(Y(o.latitude),Y(u.latitude));return l!==0?l:F(Y(o.longitude),Y(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Eo(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var l,d,f,_;const A=o.fields||{},w=u.fields||{},S=(l=A[os])===null||l===void 0?void 0:l.arrayValue,D=(d=w[os])===null||d===void 0?void 0:d.arrayValue,x=F(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=D==null?void 0:D.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:Eo(S,D)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===jn.mapValue&&u===jn.mapValue)return 0;if(o===jn.mapValue)return 1;if(u===jn.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const w=ss(d[A],_[A]);if(w!==0)return w;const S=Ce(l[d[A]],f[_[A]]);if(S!==0)return S}return F(d.length,_.length)})(n.mapValue,t.mapValue);default:throw L(23264,{le:e})}}function yo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return F(n,t);const e=Yt(n),r=Yt(t),i=F(e.seconds,r.seconds);return i!==0?i:F(e.nanos,r.nanos)}function Eo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ce(e[i],r[i]);if(o)return o}return F(e.length,r.length)}function Se(n){return as(n)}function as(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Yt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Zt(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=as(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${as(e.fields[u])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function Hn(n){switch(te(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=cr(n);return t?16+Hn(t):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Hn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return gn(r.fields,((o,u)=>{i+=o.length+Hn(u)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function us(n){return!!n&&"integerValue"in n}function Ss(n){return!!n&&"arrayValue"in n}function vo(n){return!!n&&"nullValue"in n}function To(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kr(n){return!!n&&"mapValue"in n}function Th(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[yh])===null||e===void 0?void 0:e.stringValue)===vh}function rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return gn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=rn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ih(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Eh}/**
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
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Kr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(e)}setAll(t){let e=Tt.emptyPath(),r={},i=[];t.forEach(((u,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=l.popLast()}u?r[l.lastSegment()]=rn(u):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Kr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Kr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){gn(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Ct(rn(this.value))}}/**
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
 */class _t{constructor(t,e,r,i,o,u,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,M.min(),M.min(),M.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,M.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,M.min(),M.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,M.min(),M.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tr{constructor(t,e){this.position=t,this.inclusive=e}}function Io(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=Ce(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ao(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ah(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Da{}class st extends Da{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Rh(t,e,r):e==="array-contains"?new Ph(t,r):e==="in"?new bh(t,r):e==="not-in"?new Vh(t,r):e==="array-contains-any"?new Dh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ch(t,r):new Sh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ce(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Da{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Vt(t,e)}matches(t){return Na(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Na(n){return n.op==="and"}function ka(n){return wh(n)&&Na(n)}function wh(n){for(const t of n.filters)if(t instanceof Vt)return!1;return!0}function cs(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Se(n.value);if(ka(n))return n.filters.map((t=>cs(t))).join(",");{const t=n.filters.map((e=>cs(e))).join(",");return`${n.op}(${t})`}}function Oa(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)})(n,t):n instanceof Vt?(function(r,i){return i instanceof Vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,u,l)=>o&&Oa(u,i.filters[l])),!0):!1})(n,t):void L(19439)}function xa(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${Se(e.value)}`})(n):n instanceof Vt?(function(e){return e.op.toString()+" {"+e.getFilters().map(xa).join(" ,")+"}"})(n):"Filter"}class Rh extends st{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ch extends st{constructor(t,e){super(t,"in",e),this.keys=Ma("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sh extends st{constructor(t,e){super(t,"not-in",e),this.keys=Ma("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ma(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>O.fromName(r.referenceValue)))}class Ph extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ss(e)&&mn(e.arrayValue,this.value)}}class bh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&mn(this.value.arrayValue,e)}}class Vh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!mn(this.value.arrayValue,e)}}class Dh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ss(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>mn(this.value.arrayValue,r)))}}/**
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
 */class Nh{constructor(t,e=null,r=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Pe=null}}function wo(n,t=null,e=[],r=[],i=null,o=null,u=null){return new Nh(n,t,e,r,i,o,u)}function Ps(n){const t=j(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>cs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Se(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Se(r))).join(",")),t.Pe=e}return t.Pe}function bs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ah(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Oa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ao(n.startAt,t.startAt)&&Ao(n.endAt,t.endAt)}function ls(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class lr{constructor(t,e=null,r=[],i=[],o=null,u="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=d,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kh(n,t,e,r,i,o,u,l){return new lr(n,t,e,r,i,o,u,l)}function Vs(n){return new lr(n)}function Ro(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Oh(n){return n.collectionGroup!==null}function sn(n){const t=j(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new it(Tt.comparator);return u.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new er(o,r))})),e.has(Tt.keyField().canonicalString())||t.Te.push(new er(Tt.keyField(),r))}return t.Te}function Pt(n){const t=j(n);return t.Ie||(t.Ie=xh(t,sn(n))),t.Ie}function xh(n,t){if(n.limitType==="F")return wo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new er(i.field,o)}));const e=n.endAt?new tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new tr(n.startAt.position,n.startAt.inclusive):null;return wo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function hs(n,t,e){return new lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function hr(n,t){return bs(Pt(n),Pt(t))&&n.limitType===t.limitType}function La(n){return`${Ps(Pt(n))}|lt:${n.limitType}`}function ye(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>xa(i))).join(", ")}]`),ur(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Se(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Se(i))).join(",")),`Target(${r})`})(Pt(n))}; limitType=${n.limitType})`}function dr(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of sn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(u,l,d){const f=Io(u,l,d);return u.inclusive?f<=0:f<0})(r.startAt,sn(r),i)||r.endAt&&!(function(u,l,d){const f=Io(u,l,d);return u.inclusive?f>=0:f>0})(r.endAt,sn(r),i))})(n,t)}function Mh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fa(n){return(t,e)=>{let r=!1;for(const i of sn(n)){const o=Lh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Lh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,u,l){const d=u.data.field(o),f=l.data.field(o);return d!==null&&f!==null?Ce(d,f):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){gn(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return ph(this.inner)}size(){return this.innerSize}}/**
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
 */const Fh=new Z(O.comparator);function ee(){return Fh}const Ua=new Z(O.comparator);function Ze(...n){let t=Ua;for(const e of n)t=t.insert(e.key,e);return t}function Uh(n){let t=Ua;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ue(){return on()}function Ba(){return on()}function on(){return new de((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Bh=new it(O.comparator);function q(...n){let t=Bh;for(const e of n)t=t.add(e);return t}const jh=new it(F);function qh(){return jh}/**
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
 */function $h(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(t)?"-0":t}}function zh(n){return{integerValue:""+n}}/**
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
 */class fr{constructor(){this._=void 0}}function Hh(n,t,e){return n instanceof ds?(function(i,o){const u={fields:{[Pa]:{stringValue:Sa},[Va]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Cs(o)&&(o=cr(o)),o&&(u.fields[ba]=o),{mapValue:u}})(e,t):n instanceof nr?ja(n,t):n instanceof rr?qa(n,t):(function(i,o){const u=Kh(i,o),l=Co(u)+Co(i.Ee);return us(u)&&us(i.Ee)?zh(l):$h(i.serializer,l)})(n,t)}function Gh(n,t,e){return n instanceof nr?ja(n,t):n instanceof rr?qa(n,t):e}function Kh(n,t){return n instanceof fs?(function(r){return us(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class ds extends fr{}class nr extends fr{constructor(t){super(),this.elements=t}}function ja(n,t){const e=$a(t);for(const r of n.elements)e.some((i=>bt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class rr extends fr{constructor(t){super(),this.elements=t}}function qa(n,t){let e=$a(t);for(const r of n.elements)e=e.filter((i=>!bt(i,r)));return{arrayValue:{values:e}}}class fs extends fr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Co(n){return Y(n.integerValue||n.doubleValue)}function $a(n){return Ss(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qh(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof nr&&i instanceof nr||r instanceof rr&&i instanceof rr?Re(r.elements,i.elements,bt):r instanceof fs&&i instanceof fs?bt(r.Ee,i.Ee):r instanceof ds&&i instanceof ds})(n.transform,t.transform)}class ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ce}static exists(t){return new ce(void 0,t)}static updateTime(t){return new ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ds{}function za(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Xh(n.key,ce.none()):new Ns(n.key,n.data,ce.none());{const e=n.data,r=Ct.empty();let i=new it(Tt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new mr(n.key,r,new jt(i.toArray()),ce.none())}}function Wh(n,t,e){n instanceof Ns?(function(i,o,u){const l=i.value.clone(),d=Po(i.fieldTransforms,o,u.transformResults);l.setAll(d),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()})(n,t,e):n instanceof mr?(function(i,o,u){if(!Gn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=Po(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ha(i)),d.setAll(l),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function an(n,t,e,r){return n instanceof Ns?(function(o,u,l,d){if(!Gn(o.precondition,u))return l;const f=o.value.clone(),_=bo(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof mr?(function(o,u,l,d){if(!Gn(o.precondition,u))return l;const f=bo(o.fieldTransforms,d,u),_=u.data;return _.setAll(Ha(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,u,l){return Gn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l})(n,t,e)}function So(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Re(r,i,((o,u)=>Qh(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ns extends Ds{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends Ds{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ha(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Po(n,t,e){const r=new Map;X(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,l=t.data.field(o.field);r.set(o.field,Gh(u,l,e[i]))}return r}function bo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Hh(o,u,t))}return r}class Xh extends Ds{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Wh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=an(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ba();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const d=za(u,l);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,((e,r)=>So(e,r)))&&Re(this.baseMutations,t.baseMutations,((e,r)=>So(e,r)))}}/**
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
 */class Yh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Zh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var et,U;function Ga(n){if(n===void 0)return Mt("GRPC error has no .code"),P.UNKNOWN;switch(n){case et.OK:return P.OK;case et.CANCELLED:return P.CANCELLED;case et.UNKNOWN:return P.UNKNOWN;case et.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case et.INTERNAL:return P.INTERNAL;case et.UNAVAILABLE:return P.UNAVAILABLE;case et.UNAUTHENTICATED:return P.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case et.NOT_FOUND:return P.NOT_FOUND;case et.ALREADY_EXISTS:return P.ALREADY_EXISTS;case et.PERMISSION_DENIED:return P.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case et.ABORTED:return P.ABORTED;case et.OUT_OF_RANGE:return P.OUT_OF_RANGE;case et.UNIMPLEMENTED:return P.UNIMPLEMENTED;case et.DATA_LOSS:return P.DATA_LOSS;default:return L(39323,{code:n})}}(U=et||(et={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const td=new Ht([4294967295,4294967295],0);function Vo(n){const t=Aa().encode(n),e=new pa;return e.update(t),new Uint8Array(e.digest())}function Do(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ht([e,r],0),new Ht([i,o],0)]}class ks{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tn(`Invalid padding: ${e}`);if(r<0)throw new tn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Ht.fromNumber(this.fe)}pe(t,e,r){let i=t.add(e.multiply(Ht.fromNumber(r)));return i.compare(td)===1&&(i=new Ht([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Vo(t),[r,i]=Do(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(r,i,o);if(!this.ye(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ks(o,i,e);return r.forEach((l=>u.insert(l))),u}insert(t){if(this.fe===0)return;const e=Vo(t),[r,i]=Do(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(r,i,o);this.we(u)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new pr(M.min(),i,new Z(F),ee(),q())}}class _n{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new _n(r,e,q(),q(),q())}}/**
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
 */class Kn{constructor(t,e,r,i){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=i}}class Ka{constructor(t,e){this.targetId=t,this.De=e}}class Qa{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class No{constructor(){this.ve=0,this.Ce=ko(),this.Fe=lt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),r=q();return this.Ce.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:o})}})),new _n(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=ko()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ed{constructor(t){this.We=t,this.Ge=new Map,this.ze=ee(),this.je=qn(),this.Je=qn(),this.He=new Z(F)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,i)=>{this.nt(i)&&e(i)}))}it(t){const e=t.targetId,r=t.De.count,i=this.st(e);if(i){const o=i.target;if(ls(o))if(r===0){const u=new O(o.path);this.Xe(e,u,_t.newNoDocument(u,M.min()))}else X(r===1,20013,{expectedCount:r});else{const u=this.ot(e);if(u!==r){const l=this._t(t),d=l?this.ut(l,t,u):1;if(d!==0){this.rt(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,f)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=Zt(r).toUint8Array()}catch(d){if(d instanceof Ca)return Xt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new ks(u,i,o)}catch(d){return Xt(d instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.fe===0?null:l}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const u=this.We.lt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Xe(e,o,null),i++)})),i}Pt(t){const e=new Map;this.Ge.forEach(((o,u)=>{const l=this.st(u);if(l){if(o.current&&ls(l.target)){const d=new O(l.target.path);this.Tt(d).has(u)||this.It(u,d)||this.Xe(u,d,_t.newNoDocument(d,t))}o.Ne&&(e.set(u,o.Le()),o.ke())}}));let r=q();this.Je.forEach(((o,u)=>{let l=!0;u.forEachWhile((d=>{const f=this.st(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.ze.forEach(((o,u)=>u.setReadTime(t)));const i=new pr(t,e,this.He,this.ze,r);return this.ze=ee(),this.je=qn(),this.Je=qn(),this.He=new Z(F),i}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new No,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new it(F),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new it(F),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new No),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function qn(){return new Z(O.comparator)}function ko(){return new Z(O.comparator)}const nd={asc:"ASCENDING",desc:"DESCENDING"},rd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sd={and:"AND",or:"OR"};class id{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ms(n,t){return n.useProto3Json||ur(t)?t:{value:t}}function od(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ad(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ie(n){return X(!!n,49232),M.fromTimestamp((function(e){const r=Yt(e);return new nt(r.seconds,r.nanos)})(n))}function ud(n,t){return ps(n,t).canonicalString()}function ps(n,t){const e=(function(i){return new Q(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Wa(n){const t=Q.fromString(n);return X(tu(t),10190,{key:t.toString()}),t}function Qr(n,t){const e=Wa(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Ja(e))}function Xa(n,t){return ud(n.databaseId,t)}function cd(n){const t=Wa(n);return t.length===4?Q.emptyPath():Ja(t)}function Oo(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ja(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ld(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,_){return f.useProto3Json?(X(_===void 0||typeof _=="string",58123),lt.fromBase64String(_||"")):(X(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),lt.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&(function(f){const _=f.code===void 0?P.UNKNOWN:Ga(f.code);return new N(_,f.message||"")})(u);e=new Qa(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qr(n,r.document.name),o=Ie(r.document.updateTime),u=r.document.createTime?Ie(r.document.createTime):M.min(),l=new Ct({mapValue:{fields:r.document.fields}}),d=_t.newFoundDocument(i,o,u,l),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Qr(n,r.document),o=r.readTime?Ie(r.readTime):M.min(),u=_t.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Kn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Qr(n,r.document),o=r.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return L(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Zh(i,o),l=r.targetId;e=new Ka(l,u)}}return e}function hd(n,t){return{documents:[Xa(n,t.path)]}}function dd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Xa(n,i);const o=(function(f){if(f.length!==0)return Za(Vt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((_=>(function(w){return{field:Ee(w.field),direction:pd(w.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=ms(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{Vt:e,parent:i}}function fd(n){let t=cd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){X(r===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(A){const w=Ya(A);return w instanceof Vt&&ka(w)?w.getFilters():[w]})(e.where));let u=[];e.orderBy&&(u=(function(A){return A.map((w=>(function(D){return new er(ve(D.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(w)))})(e.orderBy));let l=null;e.limit&&(l=(function(A){let w;return w=typeof A=="object"?A.value:A,ur(w)?null:w})(e.limit));let d=null;e.startAt&&(d=(function(A){const w=!!A.before,S=A.values||[];return new tr(S,w)})(e.startAt));let f=null;return e.endAt&&(f=(function(A){const w=!A.before,S=A.values||[];return new tr(S,w)})(e.endAt)),kh(t,i,u,o,l,"F",d,f)}function md(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ya(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ve(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ve(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ve(e.unaryFilter.field);return st.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return st.create(ve(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Vt.create(e.compositeFilter.filters.map((r=>Ya(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function pd(n){return nd[n]}function gd(n){return rd[n]}function _d(n){return sd[n]}function Ee(n){return{fieldPath:n.canonicalString()}}function ve(n){return Tt.fromServerFormat(n.fieldPath)}function Za(n){return n instanceof st?(function(e){if(e.op==="=="){if(To(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NAN"}};if(vo(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(To(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NAN"}};if(vo(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(e.field),op:gd(e.op),value:e.value}}})(n):n instanceof Vt?(function(e){const r=e.getFilters().map((i=>Za(i)));return r.length===1?r[0]:{compositeFilter:{op:_d(e.op),filters:r}}})(n):L(54877,{filter:n})}function tu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(t,e,r,i,o=M.min(),u=M.min(),l=lt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class yd{constructor(t){this.gt=t}}function Ed(n){const t=fd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hs(t,t.limit,"L"):t}/**
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
 */class vd{constructor(){this.Dn=new Td}addToCollectionParentIndex(t,e){return this.Dn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Jt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Td{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new it(Q.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(Q.comparator)).toArray()}}/**
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
 */const xo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eu=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(eu,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class Pe{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Pe(0)}static ur(){return new Pe(-1)}}/**
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
 */const Mo="LruGarbageCollector",Id=1048576;function Lo([n,t],[e,r]){const i=F(n,e);return i===0?F(t,r):i}class Ad{constructor(t){this.Tr=t,this.buffer=new it(Lo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Lo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class wd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){V(Mo,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ke(e)?V(Mo,"Ignoring IndexedDB error during garbage collection: ",e):await or(e)}await this.Rr(3e5)}))}}class Rd{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(ar.ue);const r=new Ad(e);return this.Vr.forEachTarget(t,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(t,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(xo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xo):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,i,o,u,l,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,l=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,d=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(f=Date.now(),_e()<=B.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(d-l)+`ms
	Removed ${A} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function Cd(n,t){return new Rd(n,t)}/**
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
 */class Sd{constructor(){this.changes=new de((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Pd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class bd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&an(r.mutation,i,jt.empty(),nt.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const i=ue();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let u=Ze();return o.forEach(((l,d)=>{u=u.insert(l,d.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,l)=>{e.set(u,l)}))}))}computeViews(t,e,r,i){let o=ee();const u=on(),l=(function(){return on()})();return e.forEach(((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof mr)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),an(_.mutation,f,_.mutation.getFieldMask(),nt.now())):u.set(f.key,jt.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((f,_)=>u.set(f,_))),e.forEach(((f,_)=>{var A;return l.set(f,new Pd(_,(A=u.get(f))!==null&&A!==void 0?A:null))})),l)))}recalculateAndSaveOverlays(t,e){const r=on();let i=new Z(((u,l)=>u-l)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const l of u)l.keys().forEach((d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||jt.empty();_=l.applyToLocalView(f,_),r.set(d,_);const A=(i.get(l.batchId)||q()).add(d);i=i.insert(l.batchId,A)}))})).next((()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,_=d.value,A=Ba();_.forEach((w=>{if(!o.has(w)){const S=za(e.get(w),r.get(w));S!==null&&A.set(w,S),o=o.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return C.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Oh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(ue());let l=hn,d=o;return u.next((f=>C.forEach(f,((_,A)=>(l<A.largestBatchId&&(l=A.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next((w=>{d=d.insert(_,w)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,d,f,q()))).next((_=>({batchId:l,changes:Uh(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let i=Ze();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Ze();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(d=>{const f=(function(A,w){return new lr(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next((_=>{_.forEach(((A,w)=>{u=u.insert(A,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((u=>{o.forEach(((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,_t.newInvalidDocument(_)))}));let l=Ze();return u.forEach(((d,f)=>{const _=o.get(d);_!==void 0&&an(_.mutation,f,jt.empty(),nt.now()),dr(e,f)&&(l=l.insert(d,f))})),l}))}}/**
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
 */class Vd{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return C.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ie(i.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(i){return{name:i.name,query:Ed(i.bundledQuery),readTime:Ie(i.readTime)}})(e)),C.resolve()}}/**
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
 */class Dd{constructor(){this.overlays=new Z(O.comparator),this.kr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return C.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.wt(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=ue(),o=e.length+1,u=new O(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z(((f,_)=>f-_));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=ue(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=ue(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,_)=>l.set(f,_))),!(l.size()>=i)););return C.resolve(l)}wt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Yh(e,r));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
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
 */class Nd{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class Os{constructor(){this.qr=new it(ot.Qr),this.$r=new it(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new O(new Q([])),r=new ot(e,t),i=new ot(e,t+1),o=[];return this.$r.forEachInRange([r,i],(u=>{this.Wr(u),o.push(u.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new Q([])),r=new ot(e,t),i=new ot(e,t+1);let o=q();return this.$r.forEachInRange([r,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new ot(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||F(t.Hr,e.Hr)}static Ur(t,e){return F(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
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
 */class kd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new it(ot.Qr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Jh(o,e,r,i);this.mutationQueue.push(u);for(const l of i)this.Yr=this.Yr.add(new ot(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?dh:this.er-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,i],(u=>{const l=this.Zr(u.Hr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(F);return e.forEach((i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],(l=>{r=r.add(l.Hr)}))})),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new ot(new O(o),0);let l=new it(F);return this.Yr.forEachWhile((d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(d.Hr)),!0)}),u),C.resolve(this.ei(l))}ei(t){const e=[];return t.forEach((r=>{const i=this.Zr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){X(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(e.mutations,(i=>{const o=new ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new ot(e,0),i=this.Yr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Od{constructor(t){this.ni=t,this.docs=(function(){return new Z(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=ee();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ee();const u=e.path,l=new O(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||uh(ah(_),r)<=0||(i.has(_.key)||dr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ri(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new xd(this)}getSize(t){return C.resolve(this.size)}}class xd extends Sd{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class Md{constructor(t){this.persistence=t,this.ii=new de((e=>Ps(e)),bs),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.si=0,this.oi=new Os,this.targetCount=0,this._i=Pe.ar()}forEachTarget(t,e){return this.ii.forEach(((r,i)=>e(i))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),C.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.hr(e),C.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ii.forEach(((u,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),C.waitFor(o).next((()=>i))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.oi.containsKey(e))}}/**
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
 */class nu{constructor(t,e){this.ai={},this.overlays={},this.ui=new ar(0),this.ci=!1,this.ci=!0,this.li=new Nd,this.referenceDelegate=t(this),this.hi=new Md(this),this.indexManager=new vd,this.remoteDocumentCache=(function(i){return new Od(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new yd(e),this.Ti=new Vd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new kd(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Ld(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(t,e){return C.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class Ld extends lh{constructor(t){super(),this.currentSequenceNumber=t}}class xs{constructor(t){this.persistence=t,this.Ai=new Os,this.Ri=null}static Vi(t){return new xs(t)}get mi(){if(this.Ri)return this.Ri;throw L(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(r=>{const i=O.fromPath(r);return this.fi(t,i).next((o=>{o||e.removeEntry(i,M.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return C.or([()=>C.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.gi=new de((r=>fh(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Cd(this,e)}static Vi(t,e){return new sr(t,e)}Ii(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return C.forEach(this.gi,((r,i)=>this.Sr(t,r,i).next((o=>o?C.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,(u=>this.Sr(t,u,e).next((l=>{l||(r++,o.removeEntry(u,M.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Hn(t.data.value)),e}Sr(t,e,r){return C.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ms{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=i}static Es(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ms(t,e.fromCache,r,i)}}/**
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
 */class Fd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ud{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Vc()?8:hh(Pc())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ps(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ys(t,e,i,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new Fd;return this.ws(t,e,u).next((l=>{if(o.result=l,this.Rs)return this.Ss(t,e,u,l.size)}))})).next((()=>o.result))}Ss(t,e,r,i){return r.documentReadCount<this.Vs?(_e()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(_e()<=B.DEBUG&&V("QueryEngine","Query:",ye(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(_e()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):C.resolve())}ps(t,e){if(Ro(e))return C.resolve(null);let r=Pt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=hs(e,null,"F"),r=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=q(...o);return this.gs.getDocuments(t,u).next((l=>this.indexManager.getMinOffset(t,r).next((d=>{const f=this.bs(e,l);return this.Ds(e,f,u,d.readTime)?this.ps(t,hs(e,null,"F")):this.vs(t,f,e,d)}))))})))))}ys(t,e,r,i){return Ro(e)||i.isEqual(M.min())?C.resolve(null):this.gs.getDocuments(t,r).next((o=>{const u=this.bs(e,o);return this.Ds(e,u,r,i)?C.resolve(null):(_e()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ye(e)),this.vs(t,u,e,oh(i,hn)).next((l=>l)))}))}bs(t,e){let r=new it(Fa(t));return e.forEach(((i,o)=>{dr(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,r){return _e()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ye(e)),this.gs.getDocumentsMatchingQuery(t,e,Jt.min(),r)}vs(t,e,r,i){return this.gs.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
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
 */const Ls="LocalStore",Bd=3e8;class jd{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Z(F),this.Ms=new de((o=>Ps(o)),bs),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bd(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function qd(n,t,e,r){return new jd(n,t,e,r)}async function ru(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],l=[];let d=q();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next((f=>({Bs:f,removedBatchIds:u,addedBatchIds:l})))}))}))}function su(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function $d(n,t){const e=j(n),r=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const l=[];t.targetChanges.forEach(((_,A)=>{const w=i.get(A);if(!w)return;l.push(e.hi.removeMatchingKeys(o,_.removedDocuments,A).next((()=>e.hi.addMatchingKeys(o,_.addedDocuments,A))));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),i=i.insert(A,S),(function(x,k,W){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Bd?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(w,S,_)&&l.push(e.hi.updateTargetData(o,S))}));let d=ee(),f=q();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),l.push(zd(o,u,t.documentUpdates).next((_=>{d=_.Ls,f=_.ks}))),!r.isEqual(M.min())){const _=e.hi.getLastRemoteSnapshotVersion(o).next((A=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(_)}return C.waitFor(l).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(e.Fs=i,o)))}function zd(n,t,e){let r=q(),i=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=ee();return e.forEach(((l,d)=>{const f=o.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(l,d.readTime),u=u.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(l,d)):V(Ls,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)})),{Ls:u,ks:i}}))}function Hd(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.hi.getTargetData(r,t).next((o=>o?(i=o,C.resolve(i)):e.hi.allocateTargetId(r).next((u=>(i=new qt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function gs(n,t,e){const r=j(n),i=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!ke(u))throw u;V(Ls,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(i.target)}function Fo(n,t,e){const r=j(n);let i=M.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(d,f,_){const A=j(d),w=A.Ms.get(_);return w!==void 0?C.resolve(A.Fs.get(w)):A.hi.getTargetData(f,_)})(r,u,Pt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,l.targetId).next((d=>{o=d}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,t,e?i:M.min(),e?o:q()))).next((l=>(Gd(r,Mh(t),l),{documents:l,qs:o})))))}function Gd(n,t,e){let r=n.xs.get(t)||M.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class Uo{constructor(){this.activeTargetIds=qh()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kd{constructor(){this.Fo=new Uo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Uo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Qd{xo(t){}shutdown(){}}/**
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
 */const Bo="ConnectivityMonitor";class jo{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(Bo,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){V(Bo,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $n=null;function _s(){return $n===null?$n=(function(){return 268435456+Math.round(2147483648*Math.random())})():$n++,"0x"+$n.toString(16)}/**
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
 */const Wr="RestConnection",Wd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xd{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Zn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const u=_s(),l=this.Go(t,e.toUriEncodedString());V(Wr,`Sending RPC '${t}' ${u}:`,l,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(d,i,o);const{host:f}=new URL(l),_=Is(f);return this.jo(t,l,d,r,_).then((A=>(V(Wr,`Received RPC '${t}' ${u}: `,A),A)),(A=>{throw Xt(Wr,`RPC '${t}' ${u} failed with error: `,A,"url: ",l,"request:",r),A}))}Jo(t,e,r,i,o,u){return this.Wo(t,e,r,i,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ne})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}Go(t,e){const r=Wd[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Jd{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const pt="WebChannelConnection";class Yd extends Xd{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,i,o){const u=_s();return new Promise(((l,d)=>{const f=new ga;f.setWithCredentials(!0),f.listenOnce(_a.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case zn.NO_ERROR:const A=f.getResponseJson();V(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),l(A);break;case zn.TIMEOUT:V(pt,`RPC '${t}' ${u} timed out`),d(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const w=f.getStatus();if(V(pt,`RPC '${t}' ${u} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const x=(function(W){const z=W.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(z)>=0?z:P.UNKNOWN})(D.status);d(new N(x,D.message))}else d(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new N(P.UNAVAILABLE,"Connection failed."));break;default:L(9055,{c_:t,streamId:u,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{V(pt,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(i);V(pt,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",_,r,15)}))}P_(t,e,r){const i=_s(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=va(),l=Ea(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.zo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");V(pt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const A=u.createWebChannel(_,d);this.T_(A);let w=!1,S=!1;const D=new Jd({Ho:k=>{S?V(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(w||(V(pt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),w=!0),V(pt,`RPC '${t}' stream ${i} sending:`,k),A.send(k))},Yo:()=>A.close()}),x=(k,W,z)=>{k.listen(W,(H=>{try{z(H)}catch(tt){setTimeout((()=>{throw tt}),0)}}))};return x(A,Ye.EventType.OPEN,(()=>{S||(V(pt,`RPC '${t}' stream ${i} transport opened.`),D.s_())})),x(A,Ye.EventType.CLOSE,(()=>{S||(S=!0,V(pt,`RPC '${t}' stream ${i} transport closed`),D.__(),this.I_(A))})),x(A,Ye.EventType.ERROR,(k=>{S||(S=!0,Xt(pt,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),D.__(new N(P.UNAVAILABLE,"The operation could not be completed")))})),x(A,Ye.EventType.MESSAGE,(k=>{var W;if(!S){const z=k.data[0];X(!!z,16349);const H=z,tt=(H==null?void 0:H.error)||((W=H[0])===null||W===void 0?void 0:W.error);if(tt){V(pt,`RPC '${t}' stream ${i} received error:`,tt);const Dt=tt.status;let at=(function(g){const y=et[g];if(y!==void 0)return Ga(y)})(Dt),v=tt.message;at===void 0&&(at=P.INTERNAL,v="Unknown error status: "+Dt+" with message "+tt.message),S=!0,D.__(new N(at,v)),A.close()}else V(pt,`RPC '${t}' stream ${i} received:`,z),D.a_(z)}})),x(l,ya.STAT_EVENT,(k=>{k.stat===rs.PROXY?V(pt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===rs.NOPROXY&&V(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Xr(){return typeof document<"u"?document:null}/**
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
 */function iu(n){return new id(n,!0)}/**
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
 */class ou{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const qo="PersistentStream";class Zd{constructor(t,e,r,i,o,u,l,d){this.Fi=t,this.w_=r,this.S_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ou(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Mt(e.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===e&&this.W_(r,i)}),(r=>{t((()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return V(qo,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(V(qo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tf extends Zd{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=ld(this.serializer,t),r=(function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?Ie(u.readTime):M.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Oo(this.serializer),e.addTarget=(function(o,u){let l;const d=u.target;if(l=ls(d)?{documents:hd(o,d)}:{query:dd(o,d).Vt},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=ad(o,u.resumeToken);const f=ms(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){l.readTime=od(o,u.snapshotVersion.toTimestamp());const f=ms(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const r=md(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Oo(this.serializer),e.removeTarget=t,this.k_(e)}}/**
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
 */class ef{}class nf extends ef{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Wo(t,ps(e,r),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())}))}Jo(t,e,r,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,l])=>this.connection.Jo(t,ps(e,r),i,u,l,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class rf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Mt(e),this._a=!1):V("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const be="RemoteStore";class sf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{En(this)&&(V(be,"Restarting streams for network reachability change."),await(async function(d){const f=j(d);f.Ia.add(4),await yn(f),f.Aa.set("Unknown"),f.Ia.delete(4),await gr(f)})(this))}))})),this.Aa=new rf(r,i)}}async function gr(n){if(En(n))for(const t of n.da)await t(!0)}async function yn(n){for(const t of n.da)await t(!1)}function au(n,t){const e=j(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),js(e)?Bs(e):Oe(e).x_()&&Us(e,t))}function Fs(n,t){const e=j(n),r=Oe(e);e.Ta.delete(t),r.x_()&&uu(e,t),e.Ta.size===0&&(r.x_()?r.B_():En(e)&&e.Aa.set("Unknown"))}function Us(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Oe(n).H_(t)}function uu(n,t){n.Ra.$e(t),Oe(n).Y_(t)}function Bs(n){n.Ra=new ed({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Oe(n).start(),n.Aa.aa()}function js(n){return En(n)&&!Oe(n).M_()&&n.Ta.size>0}function En(n){return j(n).Ia.size===0}function cu(n){n.Ra=void 0}async function of(n){n.Aa.set("Online")}async function af(n){n.Ta.forEach(((t,e)=>{Us(n,t)}))}async function uf(n,t){cu(n),js(n)?(n.Aa.la(t),Bs(n)):n.Aa.set("Unknown")}async function cf(n,t,e){if(n.Aa.set("Online"),t instanceof Qa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,t)}catch(r){V(be,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $o(n,r)}else if(t instanceof Kn?n.Ra.Ye(t):t instanceof Ka?n.Ra.it(t):n.Ra.et(t),!e.isEqual(M.min()))try{const r=await su(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const l=o.Ra.Pt(u);return l.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.Ta.get(f);_&&o.Ta.set(f,_.withResumeToken(d.resumeToken,u))}})),l.targetMismatches.forEach(((d,f)=>{const _=o.Ta.get(d);if(!_)return;o.Ta.set(d,_.withResumeToken(lt.EMPTY_BYTE_STRING,_.snapshotVersion)),uu(o,d);const A=new qt(_.target,d,f,_.sequenceNumber);Us(o,A)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){V(be,"Failed to raise snapshot:",r),await $o(n,r)}}async function $o(n,t,e){if(!ke(t))throw t;n.Ia.add(1),await yn(n),n.Aa.set("Offline"),e||(e=()=>su(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(be,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await gr(n)}))}async function zo(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),V(be,"RemoteStore received new credentials");const r=En(e);e.Ia.add(3),await yn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await gr(e)}async function lf(n,t){const e=j(n);t?(e.Ia.delete(2),await gr(e)):t||(e.Ia.add(2),await yn(e),e.Aa.set("Unknown"))}function Oe(n){return n.Va||(n.Va=(function(e,r,i){const o=j(e);return o.ia(),new tf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Zo:of.bind(null,n),e_:af.bind(null,n),n_:uf.bind(null,n),J_:cf.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),js(n)?Bs(n):n.Aa.set("Unknown")):(await n.Va.stop(),cu(n))}))),n.Va}/**
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
 */class qs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,l=new qs(t,e,u,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(n,t){if(Mt("AsyncQueue",`${t}: ${n}`),ke(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ae{static emptySet(t){return new Ae(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Ze(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ae;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Ho{constructor(){this.fa=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):L(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ve{constructor(t,e,r,i,o,u,l,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach((l=>{u.push({type:0,doc:l})})),new Ve(t,e,Ae.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class hf{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class df{constructor(){this.queries=Go(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const i=j(e),o=i.queries;i.queries=Go(),o.forEach(((u,l)=>{for(const d of l.wa)d.onError(r)}))})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Go(){return new de((n=>La(n)),hr)}async function hu(n,t){const e=j(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(r=2):(o=new hf,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=lu(u,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&$s(e)}async function du(n,t){const e=j(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.wa.indexOf(t);u>=0&&(o.wa.splice(u,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ff(n,t){const e=j(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.wa)l.Ca(i)&&(r=!0);u.ya=i}}r&&$s(e)}function mf(n,t,e){const r=j(n),i=r.queries.get(t);if(i)for(const o of i.wa)o.onError(e);r.queries.delete(t)}function $s(n){n.Da.forEach((t=>{t.next()}))}var ys,Ko;(Ko=ys||(ys={})).Fa="default",Ko.Cache="cache";class fu{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ys.Cache}}/**
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
 */class mu{constructor(t){this.key=t}}class pu{constructor(t){this.key=t}}class pf{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=Fa(t),this.eu=new Ae(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new Ho,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,A)=>{const w=i.get(_),S=dr(this.query,A)?A:null,D=!!w&&this.mutatedKeys.has(w.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;w&&S?w.data.isEqual(S.data)?D!==x&&(r.track({type:3,doc:S}),k=!0):this.iu(w,S)||(r.track({type:2,doc:S}),k=!0,(d&&this.Xa(S,d)>0||f&&this.Xa(S,f)<0)&&(l=!0)):!w&&S?(r.track({type:0,doc:S}),k=!0):w&&!S&&(r.track({type:1,doc:w}),k=!0,(d||f)&&(l=!0)),k&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{eu:u,ru:r,Ds:l,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const u=t.ru.pa();u.sort(((_,A)=>(function(S,D){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{At:k})}};return x(S)-x(D)})(_.type,A.type)||this.Xa(_.doc,A.doc))),this.su(r),i=i!=null&&i;const l=e&&!i?this.ou():[],d=this.Za.size===0&&this.current&&!i?1:0,f=d!==this.Ya;return this.Ya=d,u.length!==0||f?{snapshot:new Ve(this.query,t.eu,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ho,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new pu(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new mu(r))})),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Ve.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const zs="SyncEngine";class gf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _f{constructor(t){this.key=t,this.lu=!1}}class yf{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new de((l=>La(l)),hr),this.Tu=new Map,this.Iu=new Set,this.du=new Z(O.comparator),this.Eu=new Map,this.Au=new Os,this.Ru={},this.Vu=new Map,this.mu=Pe.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ef(n,t,e=!0){const r=vu(n);let i;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await gu(r,t,e,!0),i}async function vf(n,t){const e=vu(n);await gu(e,t,!0,!1)}async function gu(n,t,e,r){const i=await Hd(n.localStore,Pt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Tf(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&au(n.remoteStore,i),l}async function Tf(n,t,e,r,i){n.gu=(A,w,S)=>(async function(x,k,W,z){let H=k.view.nu(W);H.Ds&&(H=await Fo(x.localStore,k.query,!1).then((({documents:v})=>k.view.nu(v,H))));const tt=z&&z.targetChanges.get(k.targetId),Dt=z&&z.targetMismatches.get(k.targetId)!=null,at=k.view.applyChanges(H,x.isPrimaryClient,tt,Dt);return Wo(x,k.targetId,at._u),at.snapshot})(n,A,w,S);const o=await Fo(n.localStore,t,!0),u=new pf(t,o.qs),l=u.nu(o.documents),d=_n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(l,n.isPrimaryClient,d);Wo(n,e,f._u);const _=new gf(t,e,u);return n.Pu.set(t,_),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),f.snapshot}async function If(n,t,e){const r=j(n),i=r.Pu.get(t),o=r.Tu.get(i.targetId);if(o.length>1)return r.Tu.set(i.targetId,o.filter((u=>!hr(u,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Fs(r.remoteStore,i.targetId),Es(r,i.targetId)})).catch(or)):(Es(r,i.targetId),await gs(r.localStore,i.targetId,!0))}async function Af(n,t){const e=j(n),r=e.Pu.get(t),i=e.Tu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fs(e.remoteStore,r.targetId))}async function _u(n,t){const e=j(n);try{const r=await $d(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Eu.get(o);u&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.lu=!0:i.modifiedDocuments.size>0?X(u.lu,14607):i.removedDocuments.size>0&&(X(u.lu,42227),u.lu=!1))})),await Eu(e,r,t)}catch(r){await or(r)}}function Qo(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Pu.forEach(((o,u)=>{const l=u.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(u,l){const d=j(u);d.onlineState=l;let f=!1;d.queries.forEach(((_,A)=>{for(const w of A.wa)w.va(l)&&(f=!0)})),f&&$s(d)})(r.eventManager,t),i.length&&r.hu.J_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function wf(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Eu.get(t),o=i&&i.key;if(o){let u=new Z(O.comparator);u=u.insert(o,_t.newNoDocument(o,M.min()));const l=q().add(o),d=new pr(M.min(),new Map,new Z(F),u,l);await _u(r,d),r.du=r.du.remove(o),r.Eu.delete(t),Hs(r)}else await gs(r.localStore,t,!1).then((()=>Es(r,t,e))).catch(or)}function Es(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||yu(n,r)}))}function yu(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Fs(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Hs(n))}function Wo(n,t,e){for(const r of e)r instanceof mu?(n.Au.addReference(r.key,t),Rf(n,r)):r instanceof pu?(V(zs,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||yu(n,r.key)):L(19791,{yu:r})}function Rf(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(V(zs,"New document in limbo: "+e),n.Iu.add(r),Hs(n))}function Hs(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new O(Q.fromString(t)),r=n.mu.next();n.Eu.set(r,new _f(e)),n.du=n.du.insert(e,r),au(n.remoteStore,new qt(Pt(Vs(e.path)),r,"TargetPurposeLimboResolution",ar.ue))}}async function Eu(n,t,e){const r=j(n),i=[],o=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,d)=>{u.push(r.gu(d,t,e).then((f=>{var _;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(f){i.push(f);const A=Ms.Es(d.targetId,f);o.push(A)}})))})),await Promise.all(u),r.hu.J_(i),await(async function(d,f){const _=j(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>C.forEach(f,(w=>C.forEach(w.Is,(S=>_.persistence.referenceDelegate.addReference(A,w.targetId,S))).next((()=>C.forEach(w.ds,(S=>_.persistence.referenceDelegate.removeReference(A,w.targetId,S)))))))))}catch(A){if(!ke(A))throw A;V(Ls,"Failed to update sequence numbers: "+A)}for(const A of f){const w=A.targetId;if(!A.fromCache){const S=_.Fs.get(w),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);_.Fs=_.Fs.insert(w,x)}}})(r.localStore,o))}async function Cf(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){V(zs,"User change. New user:",t.toKey());const r=await ru(e.localStore,t);e.currentUser=t,(function(o,u){o.Vu.forEach((l=>{l.forEach((d=>{d.reject(new N(P.CANCELLED,u))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Eu(e,r.Bs)}}function Sf(n,t){const e=j(n),r=e.Eu.get(t);if(r&&r.lu)return q().add(r.key);{let i=q();const o=e.Tu.get(t);if(!o)return i;for(const u of o){const l=e.Pu.get(u);i=i.unionWith(l.view.tu)}return i}}function vu(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wf.bind(null,t),t.hu.J_=ff.bind(null,t.eventManager),t.hu.pu=mf.bind(null,t.eventManager),t}class ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=iu(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return qd(this.persistence,new Ud,t.initialUser,this.serializer)}Du(t){return new nu(xs.Vi,this.serializer)}bu(t){return new Kd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ir.provider={build:()=>new ir};class Pf extends ir{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){X(this.persistence.referenceDelegate instanceof sr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wd(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new nu((r=>sr.Vi(r,e)),this.serializer)}}class vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cf.bind(null,this.syncEngine),await lf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new df})()}createDatastore(t){const e=iu(t.databaseInfo.databaseId),r=(function(o){return new Yd(o)})(t.databaseInfo);return(function(o,u,l,d){return new nf(o,u,l,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,u,l){return new sf(r,i,o,u,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Qo(this.syncEngine,e,0)),(function(){return jo.C()?new jo:new Qd})())}createSyncEngine(t,e){return(function(i,o,u,l,d,f,_){const A=new yf(i,o,u,l,d,f);return _&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=j(i);V(be,"RemoteStore shutting down."),o.Ia.add(5),await yn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}vs.provider={build:()=>new vs};/**
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
 */class Tu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const ne="FirestoreClient";class bf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Rs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{V(ne,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(V(ne,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=lu(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Jr(n,t){n.asyncQueue.verifyOperationInProgress(),V(ne,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await ru(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>{Xt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Xt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=t}async function Xo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Vf(n);V(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>zo(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>zo(t.remoteStore,i))),n._onlineComponents=t}async function Vf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(ne,"Using user provided OfflineComponentProvider");try{await Jr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Xt("Error using user provided cache. Falling back to memory cache: "+e),await Jr(n,new ir)}}else V(ne,"Using default OfflineComponentProvider"),await Jr(n,new Pf(void 0));return n._offlineComponents}async function Df(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(ne,"Using user provided OnlineComponentProvider"),await Xo(n,n._uninitializedComponentsProvider._online)):(V(ne,"Using default OnlineComponentProvider"),await Xo(n,new vs))),n._onlineComponents}async function Iu(n){const t=await Df(n),e=t.eventManager;return e.onListen=Ef.bind(null,t.syncEngine),e.onUnlisten=If.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Af.bind(null,t.syncEngine),e}function Nf(n,t,e={}){const r=new Gt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,l,d,f){const _=new Tu({next:w=>{_.Ou(),u.enqueueAndForget((()=>du(o,A)));const S=w.docs.has(l);!S&&w.fromCache?f.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&d&&d.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),A=new fu(Vs(l.path),_,{includeMetadataChanges:!0,ka:!0});return hu(o,A)})(await Iu(n),n.asyncQueue,t,e,r))),r.promise}function kf(n,t,e={}){const r=new Gt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,l,d,f){const _=new Tu({next:w=>{_.Ou(),u.enqueueAndForget((()=>du(o,A))),w.fromCache&&d.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),A=new fu(l,_,{includeMetadataChanges:!0,ka:!0});return hu(o,A)})(await Iu(n),n.asyncQueue,t,e,r))),r.promise}/**
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
 */function Au(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Jo=new Map;/**
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
 */const wu="firestore.googleapis.com",Yo=!0;class Zo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wu,this.ssl=Yo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Yo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=eu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Id)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Au((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _r{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ql;switch(r.type){case"firstParty":return new Yl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Jo.get(e);r&&(V("ComponentProvider","Removing Datastore"),Jo.delete(e),r.terminate())})(this),Promise.resolve()}}function Of(n,t,e,r={}){var i;n=ln(n,_r);const o=Is(t),u=n._getSettings(),l=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),d=`${t}:${e}`;o&&(Ac(`https://${d}`),Sc("Firestore",!0)),u.host!==wu&&u.host!==d&&Xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:d,ssl:o,emulatorOptions:r});if(!Xn(f,l)&&(n._setSettings(f),r.mockUserToken)){let _,A;if(typeof r.mockUserToken=="string")_=r.mockUserToken,A=gt.MOCK_USER;else{_=wc(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new gt(w)}n._authCredentials=new Wl(new Ia(_,A))}}/**
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
 */class yr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new yr(this.firestore,t,this._query)}}class yt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(pn(e,yt._jsonSchema))return new yt(t,r||null,new O(Q.fromString(e.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:rt("string",yt._jsonSchemaVersion),referencePath:rt("string")};class Kt extends yr{constructor(t,e,r){super(t,e,Vs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new O(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function Wf(n,t,...e){if(n=ua(n),wa("collection","path",t),n instanceof _r){const r=Q.fromString(t,...e);return ho(r),new Kt(n,null,r)}{if(!(n instanceof yt||n instanceof Kt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return ho(r),new Kt(n.firestore,null,r)}}function Xf(n,t,...e){if(n=ua(n),arguments.length===1&&(t=Rs.newId()),wa("doc","path",t),n instanceof _r){const r=Q.fromString(t,...e);return lo(r),new yt(n,null,new O(r))}{if(!(n instanceof yt||n instanceof Kt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return lo(r),new yt(n.firestore,n instanceof Kt?n.converter:null,new O(r))}}/**
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
 */const ta="AsyncQueue";class ea{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ou(this,"async_queue_retry"),this.oc=()=>{const r=Xr();r&&V(ta,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=Xr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Xr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Gt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!ke(t))throw t;V(ta,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,Mt("INTERNAL UNHANDLED ERROR: ",na(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=qs.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&L(47125,{hc:na(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function na(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Gs extends _r{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ea,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ea(t),this._firestoreClient=void 0,await t}}}function xf(n,t){const e=typeof n=="object"?n:Ll(),r=typeof n=="string"?n:Zn,i=Nl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Tc("firestore");o&&Of(i,...o)}return i}function Ru(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Mf(n),n._firestoreClient}function Mf(n){var t,e,r;const i=n._freezeSettings(),o=(function(l,d,f,_){return new _h(l,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Au(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new bf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(lt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(pn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:rt("string",St._jsonSchemaVersion),bytes:rt("string")};/**
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
 */class Cu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Qt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(t){if(pn(t,Qt._jsonSchema))return new Qt(t.latitude,t.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:rt("string",Qt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
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
 */class Wt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(pn(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Wt(t.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:rt("string",Wt._jsonSchemaVersion),vectorValues:rt("object")};const Lf=new RegExp("[~\\*/\\[\\]]");function Ff(n,t,e){if(t.search(Lf)>=0)throw ra(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Cu(...t.split("."))._internalPath}catch{throw ra(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ra(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new N(P.INVALID_ARGUMENT,o+n+u)}/**
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
 */class Su{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Uf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Uf extends Su{data(){return super.data()}}function Pu(n,t){return typeof t=="string"?Ff(n,t):t instanceof Cu?t._internalPath:t._delegate._internalPath}/**
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
 */function Bf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jf{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return gn(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[os].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((u=>Y(u.doubleValue)));return new Wt(o)}convertGeoPoint(t){return new Qt(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=cr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(dn(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);X(tu(r),9688,{name:t});const i=new fn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Mt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class en{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class le extends Su{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Pu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=le._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}le._jsonSchemaVersion="firestore/documentSnapshot/1.0",le._jsonSchema={type:rt("string",le._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class Qn extends le{data(t={}){return super.data(t)}}class we{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Qn(this._firestore,this._userDataWriter,r.key,r,new en(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((l=>{const d=new Qn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new en(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const d=new Qn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new en(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:qf(l.type),doc:d,oldIndex:f,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=we._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Rs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function qf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */function Jf(n){n=ln(n,yt);const t=ln(n.firestore,Gs);return Nf(Ru(t),n._key).then((e=>$f(t,n,e)))}we._jsonSchemaVersion="firestore/querySnapshot/1.0",we._jsonSchema={type:rt("string",we._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class bu extends jf{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Yf(n){n=ln(n,yr);const t=ln(n.firestore,Gs),e=Ru(t),r=new bu(t);return Bf(n._query),kf(e,n._query).then((i=>new we(t,r,n,i)))}function $f(n,t,e){const r=e.docs.get(t._key),i=new bu(n);return new le(n,i,t._key,r,new en(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ne=i})(Ml),Yn(new un("firestore",((r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),l=new Gs(new Xl(r.getProvider("auth-internal")),new Zl(u,r.getProvider("app-check-internal")),(function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(f.options.projectId,_)})(u,i),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Te(io,oo,t),Te(io,oo,"esm2017")})();var zf="firebase",Hf="11.10.0";/**
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
 */Te(zf,Hf,"app");const Gf={apiKey:"AIzaSyBNhj7FFc58FcURF6dRVwuUbOPBfffs-RU",authDomain:"eyder-26.firebaseapp.com",projectId:"eyder-26",storageBucket:"eyder-26.firebasestorage.app",messagingSenderId:"668440909769",appId:"1:668440909769:web:0ee45a7b213dc921943a18"},Kf=da(Gf),Zf=xf(Kf);export{Xf as a,Jf as b,Wf as c,Zf as d,Yf as g};
