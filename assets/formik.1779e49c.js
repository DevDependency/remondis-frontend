import{r as p}from"./react.77f75928.js";import{r as D}from"./react-fast-compare.28c49cfe.js";import{d as te}from"./deepmerge.39b49f80.js";import{i as Te,t as be,c as Fe,a as Pe}from"./lodash-es.789b6cb5.js";import{w as He}from"./tiny-warning.49191a0e.js";import"./hoist-non-react-statics.7be3bd10.js";function T(){return T=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a])}return t},T.apply(this,arguments)}function je(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function ie(t,n){if(t==null)return{};var u={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(u[r]=t[r]);return u}function ge(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Ae=function(n){return Array.isArray(n)&&n.length===0},I=function(n){return typeof n=="function"},W=function(n){return n!==null&&typeof n=="object"},Ge=function(n){return String(Math.floor(Number(n)))===n},Z=function(n){return Object.prototype.toString.call(n)==="[object String]"},Ie=function(n){return p.exports.Children.count(n)===0},ee=function(n){return W(n)&&I(n.then)};function g(t,n,u,a){a===void 0&&(a=0);for(var r=be(n);t&&a<r.length;)t=t[r[a++]];return t===void 0?u:t}function V(t,n,u){for(var a=Fe(t),r=a,i=0,o=be(n);i<o.length-1;i++){var c=o[i],y=g(t,o.slice(0,i+1));if(y&&(W(y)||Array.isArray(y)))r=r[c]=Fe(y);else{var S=o[i+1];r=r[c]=Ge(S)&&Number(S)>=0?[]:{}}}return(i===0?t:r)[o[i]]===u?t:(u===void 0?delete r[o[i]]:r[o[i]]=u,i===0&&u===void 0&&delete a[o[i]],a)}function Re(t,n,u,a){u===void 0&&(u=new WeakMap),a===void 0&&(a={});for(var r=0,i=Object.keys(t);r<i.length;r++){var o=i[r],c=t[o];W(c)?u.get(c)||(u.set(c,!0),a[o]=Array.isArray(c)?[]:{},Re(c,n,u,a[o])):a[o]=n}return a}var $=p.exports.createContext(void 0);$.displayName="FormikContext";var We=$.Provider;$.Consumer;function $e(){var t=p.exports.useContext($);return t||He(!1),t}function Ke(t,n){switch(n.type){case"SET_VALUES":return T({},t,{values:n.payload});case"SET_TOUCHED":return T({},t,{touched:n.payload});case"SET_ERRORS":return D(t.errors,n.payload)?t:T({},t,{errors:n.payload});case"SET_STATUS":return T({},t,{status:n.payload});case"SET_ISSUBMITTING":return T({},t,{isSubmitting:n.payload});case"SET_ISVALIDATING":return T({},t,{isValidating:n.payload});case"SET_FIELD_VALUE":return T({},t,{values:V(t.values,n.payload.field,n.payload.value)});case"SET_FIELD_TOUCHED":return T({},t,{touched:V(t.touched,n.payload.field,n.payload.value)});case"SET_FIELD_ERROR":return T({},t,{errors:V(t.errors,n.payload.field,n.payload.value)});case"RESET_FORM":return T({},t,n.payload);case"SET_FORMIK_STATE":return n.payload(t);case"SUBMIT_ATTEMPT":return T({},t,{touched:Re(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return T({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return T({},t,{isSubmitting:!1});default:return t}}var x={},G={};function ze(t){var n=t.validateOnChange,u=n===void 0?!0:n,a=t.validateOnBlur,r=a===void 0?!0:a,i=t.validateOnMount,o=i===void 0?!1:i,c=t.isInitialValid,y=t.enableReinitialize,S=y===void 0?!1:y,U=t.onSubmit,A=ie(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=T({validateOnChange:u,validateOnBlur:r,validateOnMount:o,onSubmit:U},A),b=p.exports.useRef(d.initialValues),O=p.exports.useRef(d.initialErrors||x),C=p.exports.useRef(d.initialTouched||G),M=p.exports.useRef(d.initialStatus),_=p.exports.useRef(!1),L=p.exports.useRef({});p.exports.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var ae=p.exports.useReducer(Ke,{values:d.initialValues,errors:d.initialErrors||x,touched:d.initialTouched||G,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=ae[0],m=ae[1],ue=p.exports.useCallback(function(e,l){return new Promise(function(s,f){var v=d.validate(e,l);v==null?s(x):ee(v)?v.then(function(h){s(h||x)},function(h){f(h)}):s(v)})},[d.validate]),K=p.exports.useCallback(function(e,l){var s=d.validationSchema,f=I(s)?s(l):s,v=l&&f.validateAt?f.validateAt(l,e):qe(e,f);return new Promise(function(h,F){v.then(function(){h(x)},function(w){w.name==="ValidationError"?h(Ye(w)):F(w)})})},[d.validationSchema]),oe=p.exports.useCallback(function(e,l){return new Promise(function(s){return s(L.current[e].validate(l))})},[]),le=p.exports.useCallback(function(e){var l=Object.keys(L.current).filter(function(f){return I(L.current[f].validate)}),s=l.length>0?l.map(function(f){return oe(f,g(e,f))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(f){return f.reduce(function(v,h,F){return h==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||h&&(v=V(v,l[F],h)),v},{})})},[oe]),Ce=p.exports.useCallback(function(e){return Promise.all([le(e),d.validationSchema?K(e):{},d.validate?ue(e):{}]).then(function(l){var s=l[0],f=l[1],v=l[2],h=te.all([s,f,v],{arrayMerge:Je});return h})},[d.validate,d.validationSchema,le,ue,K]),k=R(function(e){return e===void 0&&(e=E.values),m({type:"SET_ISVALIDATING",payload:!0}),Ce(e).then(function(l){return _.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:l})),l})});p.exports.useEffect(function(){o&&_.current===!0&&D(b.current,d.initialValues)&&k(b.current)},[o,k]);var H=p.exports.useCallback(function(e){var l=e&&e.values?e.values:b.current,s=e&&e.errors?e.errors:O.current?O.current:d.initialErrors||{},f=e&&e.touched?e.touched:C.current?C.current:d.initialTouched||{},v=e&&e.status?e.status:M.current?M.current:d.initialStatus;b.current=l,O.current=s,C.current=f,M.current=v;var h=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:s,touched:f,status:v,values:l,isValidating:!!e&&!!e.isValidating,submitCount:!!e&&!!e.submitCount&&typeof e.submitCount=="number"?e.submitCount:0}})};if(d.onReset){var F=d.onReset(E.values,Ee);ee(F)?F.then(h):h()}else h()},[d.initialErrors,d.initialStatus,d.initialTouched]);p.exports.useEffect(function(){_.current===!0&&!D(b.current,d.initialValues)&&(S&&(b.current=d.initialValues,H()),o&&k(b.current))},[S,d.initialValues,H,o,k]),p.exports.useEffect(function(){S&&_.current===!0&&!D(O.current,d.initialErrors)&&(O.current=d.initialErrors||x,m({type:"SET_ERRORS",payload:d.initialErrors||x}))},[S,d.initialErrors]),p.exports.useEffect(function(){S&&_.current===!0&&!D(C.current,d.initialTouched)&&(C.current=d.initialTouched||G,m({type:"SET_TOUCHED",payload:d.initialTouched||G}))},[S,d.initialTouched]),p.exports.useEffect(function(){S&&_.current===!0&&!D(M.current,d.initialStatus)&&(M.current=d.initialStatus,m({type:"SET_STATUS",payload:d.initialStatus}))},[S,d.initialStatus,d.initialTouched]);var se=R(function(e){if(L.current[e]&&I(L.current[e].validate)){var l=g(E.values,e),s=L.current[e].validate(l);return ee(s)?(m({type:"SET_ISVALIDATING",payload:!0}),s.then(function(f){return f}).then(function(f){m({type:"SET_FIELD_ERROR",payload:{field:e,value:f}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:e,value:s}}),Promise.resolve(s))}else if(d.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),K(E.values,e).then(function(f){return f}).then(function(f){m({type:"SET_FIELD_ERROR",payload:{field:e,value:f[e]}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),_e=p.exports.useCallback(function(e,l){var s=l.validate;L.current[e]={validate:s}},[]),ke=p.exports.useCallback(function(e){delete L.current[e]},[]),ce=R(function(e,l){m({type:"SET_TOUCHED",payload:e});var s=l===void 0?r:l;return s?k(E.values):Promise.resolve()}),fe=p.exports.useCallback(function(e){m({type:"SET_ERRORS",payload:e})},[]),de=R(function(e,l){var s=I(e)?e(E.values):e;m({type:"SET_VALUES",payload:s});var f=l===void 0?u:l;return f?k(s):Promise.resolve()}),j=p.exports.useCallback(function(e,l){m({type:"SET_FIELD_ERROR",payload:{field:e,value:l}})},[]),B=R(function(e,l,s){m({type:"SET_FIELD_VALUE",payload:{field:e,value:l}});var f=s===void 0?u:s;return f?k(V(E.values,e,l)):Promise.resolve()}),pe=p.exports.useCallback(function(e,l){var s=l,f=e,v;if(!Z(e)){e.persist&&e.persist();var h=e.target?e.target:e.currentTarget,F=h.type,w=h.name,Q=h.id,X=h.value,Be=h.checked,ar=h.outerHTML,Se=h.options,Ne=h.multiple;s=l||w||Q,f=/number|range/.test(F)?(v=parseFloat(X),isNaN(v)?"":v):/checkbox/.test(F)?Xe(g(E.values,s),Be,X):Se&&Ne?Qe(Se):X}s&&B(s,f)},[B,E.values]),z=R(function(e){if(Z(e))return function(l){return pe(l,e)};pe(e)}),N=R(function(e,l,s){l===void 0&&(l=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:e,value:l}});var f=s===void 0?r:s;return f?k(E.values):Promise.resolve()}),ve=p.exports.useCallback(function(e,l){e.persist&&e.persist();var s=e.target,f=s.name,v=s.id,h=s.outerHTML,F=l||f||v;N(F,!0)},[N]),Y=R(function(e){if(Z(e))return function(l){return ve(l,e)};ve(e)}),he=p.exports.useCallback(function(e){I(e)?m({type:"SET_FORMIK_STATE",payload:e}):m({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),me=p.exports.useCallback(function(e){m({type:"SET_STATUS",payload:e})},[]),ye=p.exports.useCallback(function(e){m({type:"SET_ISSUBMITTING",payload:e})},[]),q=R(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(e){var l=e instanceof Error,s=!l&&Object.keys(e).length===0;if(s){var f;try{if(f=Ve(),f===void 0)return}catch(v){throw v}return Promise.resolve(f).then(function(v){return _.current&&m({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(_.current)throw m({type:"SUBMIT_FAILURE"}),v})}else if(_.current&&(m({type:"SUBMIT_FAILURE"}),l))throw e})}),Me=R(function(e){e&&e.preventDefault&&I(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&I(e.stopPropagation)&&e.stopPropagation(),q().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),Ee={resetForm:H,validateForm:k,validateField:se,setErrors:fe,setFieldError:j,setFieldTouched:N,setFieldValue:B,setStatus:me,setSubmitting:ye,setTouched:ce,setValues:de,setFormikState:he,submitForm:q},Ve=R(function(){return U(E.values,Ee)}),Oe=R(function(e){e&&e.preventDefault&&I(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&I(e.stopPropagation)&&e.stopPropagation(),H()}),we=p.exports.useCallback(function(e){return{value:g(E.values,e),error:g(E.errors,e),touched:!!g(E.touched,e),initialValue:g(b.current,e),initialTouched:!!g(C.current,e),initialError:g(O.current,e)}},[E.errors,E.touched,E.values]),Le=p.exports.useCallback(function(e){return{setValue:function(s,f){return B(e,s,f)},setTouched:function(s,f){return N(e,s,f)},setError:function(s){return j(e,s)}}},[B,N,j]),De=p.exports.useCallback(function(e){var l=W(e),s=l?e.name:e,f=g(E.values,s),v={name:s,value:f,onChange:z,onBlur:Y};if(l){var h=e.type,F=e.value,w=e.as,Q=e.multiple;h==="checkbox"?F===void 0?v.checked=!!f:(v.checked=!!(Array.isArray(f)&&~f.indexOf(F)),v.value=F):h==="radio"?(v.checked=f===F,v.value=F):w==="select"&&Q&&(v.value=v.value||[],v.multiple=!0)}return v},[Y,z,E.values]),J=p.exports.useMemo(function(){return!D(b.current,E.values)},[b.current,E.values]),xe=p.exports.useMemo(function(){return typeof c<"u"?J?E.errors&&Object.keys(E.errors).length===0:c!==!1&&I(c)?c(d):c:E.errors&&Object.keys(E.errors).length===0},[c,J,E.errors,d]),Ue=T({},E,{initialValues:b.current,initialErrors:O.current,initialTouched:C.current,initialStatus:M.current,handleBlur:Y,handleChange:z,handleReset:Oe,handleSubmit:Me,resetForm:H,setErrors:fe,setFormikState:he,setFieldTouched:N,setFieldValue:B,setFieldError:j,setStatus:me,setSubmitting:ye,setTouched:ce,setValues:de,submitForm:q,validateForm:k,validateField:se,isValid:xe,dirty:J,unregisterField:ke,registerField:_e,getFieldProps:De,getFieldMeta:we,getFieldHelpers:Le,validateOnBlur:r,validateOnChange:u,validateOnMount:o});return Ue}function dr(t){var n=ze(t),u=t.component,a=t.children,r=t.render,i=t.innerRef;return p.exports.useImperativeHandle(i,function(){return n}),p.exports.createElement(We,{value:n},u?p.exports.createElement(u,n):r?r(n):a?I(a)?a(n):Ie(a)?null:p.exports.Children.only(a):null)}function Ye(t){var n={};if(t.inner){if(t.inner.length===0)return V(n,t.path,t.message);for(var r=t.inner,u=Array.isArray(r),a=0,r=u?r:r[Symbol.iterator]();;){var i;if(u){if(a>=r.length)break;i=r[a++]}else{if(a=r.next(),a.done)break;i=a.value}var o=i;g(n,o.path)||(n=V(n,o.path,o.message))}}return n}function qe(t,n,u,a){u===void 0&&(u=!1),a===void 0&&(a={});var r=ne(t);return n[u?"validateSync":"validate"](r,{abortEarly:!1,context:a})}function ne(t){var n=Array.isArray(t)?[]:{};for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var a=String(u);Array.isArray(t[a])===!0?n[a]=t[a].map(function(r){return Array.isArray(r)===!0||Te(r)?ne(r):r!==""?r:void 0}):Te(t[a])?n[a]=ne(t[a]):n[a]=t[a]!==""?t[a]:void 0}return n}function Je(t,n,u){var a=t.slice();return n.forEach(function(i,o){if(typeof a[o]>"u"){var c=u.clone!==!1,y=c&&u.isMergeableObject(i);a[o]=y?te(Array.isArray(i)?[]:{},i,u):i}else u.isMergeableObject(i)?a[o]=te(t[o],i,u):t.indexOf(i)===-1&&a.push(i)}),a}function Qe(t){return Array.from(t).filter(function(n){return n.selected}).map(function(n){return n.value})}function Xe(t,n,u){if(typeof t=="boolean")return Boolean(n);var a=[],r=!1,i=-1;if(Array.isArray(t))a=t,i=t.indexOf(u),r=i>=0;else if(!u||u=="true"||u=="false")return Boolean(n);return n&&u&&!r?a.concat(u):r?a.slice(0,i).concat(a.slice(i+1)):a}var Ze=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.exports.useLayoutEffect:p.exports.useEffect;function R(t){var n=p.exports.useRef(t);return Ze(function(){n.current=t}),p.exports.useCallback(function(){for(var u=arguments.length,a=new Array(u),r=0;r<u;r++)a[r]=arguments[r];return n.current.apply(void 0,a)},[])}var er=p.exports.forwardRef(function(t,n){var u=t.action,a=ie(t,["action"]),r=u!=null?u:"#",i=$e(),o=i.handleReset,c=i.handleSubmit;return p.exports.createElement("form",Object.assign({onSubmit:c,ref:n,onReset:o,action:r},a))});er.displayName="Form";var rr=function(n,u,a){var r=P(n),i=r[u];return r.splice(u,1),r.splice(a,0,i),r},tr=function(n,u,a){var r=P(n),i=r[u];return r[u]=r[a],r[a]=i,r},re=function(n,u,a){var r=P(n);return r.splice(u,0,a),r},nr=function(n,u,a){var r=P(n);return r[u]=a,r},P=function(n){if(n){if(Array.isArray(n))return[].concat(n);var u=Object.keys(n).map(function(a){return parseInt(a)}).reduce(function(a,r){return r>a?r:a},0);return Array.from(T({},n,{length:u+1}))}else return[]},ir=function(t){je(n,t);function n(a){var r;return r=t.call(this,a)||this,r.updateArrayField=function(i,o,c){var y=r.props,S=y.name,U=y.formik.setFormikState;U(function(A){var d=typeof c=="function"?c:i,b=typeof o=="function"?o:i,O=V(A.values,S,i(g(A.values,S))),C=c?d(g(A.errors,S)):void 0,M=o?b(g(A.touched,S)):void 0;return Ae(C)&&(C=void 0),Ae(M)&&(M=void 0),T({},A,{values:O,errors:c?V(A.errors,S,C):A.errors,touched:o?V(A.touched,S,M):A.touched})})},r.push=function(i){return r.updateArrayField(function(o){return[].concat(P(o),[Pe(i)])},!1,!1)},r.handlePush=function(i){return function(){return r.push(i)}},r.swap=function(i,o){return r.updateArrayField(function(c){return tr(c,i,o)},!0,!0)},r.handleSwap=function(i,o){return function(){return r.swap(i,o)}},r.move=function(i,o){return r.updateArrayField(function(c){return rr(c,i,o)},!0,!0)},r.handleMove=function(i,o){return function(){return r.move(i,o)}},r.insert=function(i,o){return r.updateArrayField(function(c){return re(c,i,o)},function(c){return re(c,i,null)},function(c){return re(c,i,null)})},r.handleInsert=function(i,o){return function(){return r.insert(i,o)}},r.replace=function(i,o){return r.updateArrayField(function(c){return nr(c,i,o)},!1,!1)},r.handleReplace=function(i,o){return function(){return r.replace(i,o)}},r.unshift=function(i){var o=-1;return r.updateArrayField(function(c){var y=c?[i].concat(c):[i];return o<0&&(o=y.length),y},function(c){var y=c?[null].concat(c):[null];return o<0&&(o=y.length),y},function(c){var y=c?[null].concat(c):[null];return o<0&&(o=y.length),y}),o},r.handleUnshift=function(i){return function(){return r.unshift(i)}},r.handleRemove=function(i){return function(){return r.remove(i)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(ge(r)),r.pop=r.pop.bind(ge(r)),r}var u=n.prototype;return u.componentDidUpdate=function(r){this.props.validateOnChange&&this.props.formik.validateOnChange&&!D(g(r.formik.values,r.name),g(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},u.remove=function(r){var i;return this.updateArrayField(function(o){var c=o?P(o):[];return i||(i=c[r]),I(c.splice)&&c.splice(r,1),c},!0,!0),i},u.pop=function(){var r;return this.updateArrayField(function(i){var o=i;return r||(r=o&&o.pop&&o.pop()),o},!0,!0),r},u.render=function(){var r={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,o=i.component,c=i.render,y=i.children,S=i.name,U=i.formik,A=ie(U,["validate","validationSchema"]),d=T({},r,{form:A,name:S});return o?p.exports.createElement(o,d):c?c(d):y?typeof y=="function"?y(d):Ie(y)?null:p.exports.Children.only(y):null},n}(p.exports.Component);ir.defaultProps={validateOnChange:!0};export{dr as F,er as a,ze as u};
