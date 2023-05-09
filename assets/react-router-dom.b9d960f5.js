import"./react.77f75928.js";import{e as l}from"./react-router.101cda78.js";import{c as u,b as c,E as d}from"./@remix-run.73424bb3.js";/**
 * React Router DOM v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o(){return o=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},o.apply(this,arguments)}function v(r,e){return u({basename:e==null?void 0:e.basename,history:c({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||f(),routes:l(r)}).initialize()}function f(){var r;let e=(r=window)==null?void 0:r.__staticRouterHydrationData;return e&&e.errors&&(e=o({},e,{errors:m(e.errors)})),e}function m(r){if(!r)return null;let e=Object.entries(r),t={};for(let[a,n]of e)n&&n.__type==="RouteErrorResponse"?t[a]=new d(n.status,n.statusText,n.data,n.internal===!0):t[a]=n;return t}var s;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmitImpl="useSubmitImpl",r.UseFetcher="useFetcher"})(s||(s={}));var i;(function(r){r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(i||(i={}));export{v as c};
