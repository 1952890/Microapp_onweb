!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(){var e=n(2);i=(0,r.render)((0,r.h)(e.default||e),document.body,i)}n(6);var r=n(1),i=void 0;o()},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,s;for(s=arguments.length;s-- >2;)B.push(arguments[s]);for(n&&n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((i=B.pop())instanceof Array)for(s=i.length;s--;)B.push(i[s]);else null!=i&&i!==!0&&i!==!1&&("number"==typeof i&&(i=String(i)),a="string"==typeof i,a&&r?o[o.length-1]+=i:((o||(o=[])).push(i),r=a));var c=new t(e,n||void 0,o||R);return V.vnode&&V.vnode(c),c}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function s(e){return"string"==typeof e}function c(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function u(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function l(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},c=a,u=s(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,l=0;l<o.length-1;l++)c=c[o[l]]||(c[o[l]]=!l&&e.state[o[l]]||{});c[o[l]]=u,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==Y.push(e)&&(V.debounceRendering||H)(p)}function p(){var e,t=Y;for(Y=[];e=t.pop();)e._dirty&&P(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(b(e),t||I)}function m(e,t){return s(t)?e instanceof Text:s(t.nodeName)?!e._componentConstructor&&v(e,t.nodeName):a(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||F(e.nodeName)===F(t)}function b(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=c(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||s(o)||s(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!s(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||$[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=e._listeners||(e._listeners={});t=F(t.substring(2)),o?u[t]||e.addEventListener(t,N,!!K[t]):u[t]&&e.removeEventListener(t,N,!!K[t]),u[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)g(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var l=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",F(l[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(l?e.setAttributeNS("http://www.w3.org/1999/xlink",F(l[1]),o):e.setAttribute(t,o))}else e.className=o||""}function g(e,t,n){try{e[t]=n}catch(e){}}function N(e){return this._listeners[e.type](V.event&&V.event(e)||e)}function x(e){if(y(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||F(e.nodeName);(q[t]||(q[t]=[])).push(e)}}function w(e,t){var n=F(e),o=q[n]&&q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function C(){for(var e;e=Q.pop();)V.afterMount&&V.afterMount(e),e.componentDidMount&&e.componentDidMount()}function S(e,t,n,o,r,i){X++||(Z=r&&void 0!==r.ownerSVGElement,ee=e&&!(J in e));var a=k(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--X||(ee=!1,i||C()),a}function k(e,t,n,o){for(var r=t&&t.attributes&&t.attributes.ref;d(t);)t=h(t,n);if(null==t&&(t=""),s(t))return e&&e instanceof Text&&e.parentNode?e.nodeValue!=t&&(e.nodeValue=t):(e&&E(e),e=document.createTextNode(t)),e;if(a(t.nodeName))return L(e,t,n,o);var i=e,c=String(t.nodeName),u=Z,l=t.children;if(Z="svg"===c||"foreignObject"!==c&&Z,e){if(!v(e,c)){for(i=w(c,Z);e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),E(e)}}else i=w(c,Z);var f=i.firstChild,p=i[J];if(!p){i[J]=p={};for(var m=i.attributes,b=m.length;b--;)p[m[b].name]=m[b].value}return!ee&&l&&1===l.length&&"string"==typeof l[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=l[0]&&(f.nodeValue=l[0]):(l&&l.length||f)&&O(i,l,n,o,!!p.dangerouslySetInnerHTML),T(i,t.attributes,p),r&&(p.ref=r)(i),Z=u,i}function O(e,t,n,o,r){var i,a,s,c,u=e.childNodes,l=[],f={},p=0,d=0,h=u.length,v=0,b=t&&t.length;if(h)for(var _=0;_<h;_++){var g=u[_],N=g[J],x=b?(a=g._component)?a.__key:N?N.key:null:null;null!=x?(p++,f[x]=g):(ee||r||N||g instanceof Text)&&(l[v++]=g)}if(b)for(var _=0;_<b;_++){s=t[_],c=null;var x=s.key;if(null!=x)p&&x in f&&(c=f[x],f[x]=void 0,p--);else if(!c&&d<v)for(i=d;i<v;i++)if(a=l[i],a&&m(a,s)){c=a,l[i]=void 0,i===v-1&&v--,i===d&&d++;break}c=k(c,s,n,o),c&&c!==e&&(_>=h?e.appendChild(c):c!==u[_]&&(c===u[_+1]&&y(u[_]),e.insertBefore(c,u[_]||null)))}if(p)for(var _ in f)f[_]&&E(f[_]);for(;d<=v;)c=l[v--],c&&E(c)}function E(e,t){var n=e._component;if(n)U(n,!t);else{e[J]&&e[J].ref&&e[J].ref(null),t||x(e);for(var o;o=e.lastChild;)E(o,t)}}function T(e,t,n){var o;for(o in n)t&&o in t||null==n[o]||_(e,o,n[o],n[o]=void 0,Z);if(t)for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||_(e,o,n[o],n[o]=t[o],Z)}function j(e){var t=e.constructor.name,n=te[t];n?n.push(e):te[t]=[e]}function A(e,t,n){var o=new e(t,n),r=te[e.name];if(W.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function M(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&V.syncComponentUpdates===!1&&e.base?f(e):P(e,1,r)),e.__ref&&e.__ref(e))}function P(e,t,n,i){if(!e._disable){var s,c,u,l,f=e.props,p=e.state,m=e.context,v=e.prevProps||f,y=e.prevState||p,_=e.prevContext||m,g=e.base,N=e.nextBase,x=g||N,w=e._component;if(g&&(e.props=v,e.state=y,e.context=_,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,m)===!1?s=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,m),e.props=f,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!s){for(e.render&&(c=e.render(f,p,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));d(c);)c=h(c,m);var k,O,T=c&&c.nodeName;if(a(T)){var j=b(c);u=w,u&&u.constructor===T&&j.key==u.__key?M(u,j,1,m):(k=u,u=A(T,j,m),u.nextBase=u.nextBase||N,u._parentComponent=e,e._component=u,M(u,j,0,m),P(u,1,n,!0)),O=u.base}else l=x,k=w,k&&(l=e._component=null),(x||1===t)&&(l&&(l._component=null),O=S(l,c,m,n||!g,x&&x.parentNode,!0));if(x&&O!==x&&u!==w){var L=x.parentNode;L&&O!==L&&(L.replaceChild(O,x),k||(x._component=null,E(x)))}if(k&&U(k,O!==x),e.base=O,O&&!i){for(var W=e,D=e;D=D._parentComponent;)(W=D).base=O;O._component=W,O._componentConstructor=W.constructor}}!g||n?Q.unshift(e):s||(e.componentDidUpdate&&e.componentDidUpdate(v,y,_),V.afterUpdate&&V.afterUpdate(e));var B,R=e._renderCallbacks;if(R)for(;B=R.pop();)B.call(e);X||i||C()}}function L(e,t,n,o){for(var r=e&&e._component,i=r,a=e,s=r&&e._componentConstructor===t.nodeName,c=s,u=b(t);r&&!c&&(r=r._parentComponent);)c=r.constructor===t.nodeName;return r&&c&&(!o||r._component)?(M(r,u,3,n,o),e=r.base):(i&&!s&&(U(i,!0),e=a=null),r=A(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,a=null),M(r,u,1,n,o),e=r.base,a&&e!==a&&(a._component=null,E(a))),e}function U(e,t){V.beforeUnmount&&V.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;if(o)U(o,t);else if(n){n[J]&&n[J].ref&&n[J].ref(null),e.nextBase=n,t&&(y(n),j(e));for(var r;r=n.lastChild;)E(r,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function D(e,t,n){return S(n,e,{},!1,t)}var V={},B=[],R=[],z={},F=function(e){return z[e]||(z[e]=e.toLowerCase())},G="undefined"!=typeof Promise&&Promise.resolve(),H=G?function(e){G.then(e)}:setTimeout,I={},J="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",$={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},K={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Y=[],q={},Q=[],X=0,Z=!1,ee=!1,te={};o(W.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=l(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){P(this,2)},render:function(){}}),e.h=n,e.cloneElement=u,e.Component=W,e.render=D,e.rerender=p,e.options=V})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(){for(var e=[],t=0;t<10;t++)e.push({id:t,name:d()+" "+d(),unread:Math.max(0,20*Math.random()|-10)});return e}t.__esModule=!0;var c=n(1),u=n(3),l=o(u),f=2,p="Shakira Lucas Norah Erick Gay Rachal Mable Orval Tracie Linh Rhoda Von Sarita Kaye Yanira Carter Hal Jamison Cari Kayleigh Bella Ehtel Latoyia Jenniffer Ryan Loralee Grazyna Roland Andy Billi".split(" "),d=function(){return p[.9999*Math.random()*p.length|0]},h=function(e){function t(){var n,o,a;r(this,t);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return n=o=i(this,e.call.apply(e,[this].concat(u))),o.state={items:s()},o.explainWebWorker=function(){o.setState({message:"\n\t\t\t\tclick and additional layer comes out\n\t\t\t".replace(/\t+/g,"").trim()})},o.closeMessage=function(){o.setState({message:null})},o.next=function(){for(var e=o.state.items.slice(),t=f;t--;)e[Math.random()*e.length|0].unread++;o.setState({items:e})},a=n,i(o,a)}return a(t,e),t.prototype.componentDidMount=function(){setTimeout(this.next,100)},t.prototype.componentWillUpdate=function(){this.started=Date.now()},t.prototype.componentDidUpdate=function(){this.elapsed=Date.now()-this.started,setTimeout(this.next,500)},t.prototype.render=function(e,t){var n=t.items,o=t.message;return(0,c.h)("div",{class:"app"},(0,c.h)("div",{class:"bar bar-header bar-dark"},(0,c.h)("button",{class:"button icon ion-information-circled",onClick:this.explainWorkerDelay}),(0,c.h)("h1",{class:"title"},"实习作业"),(0,c.h)("progress-spinner",{dark:!0,style:"margin-left: 10px;"})),(0,c.h)("div",{class:"content has-header"},(0,c.h)("div",{class:"list"},(0,c.h)("a",{class:"item item-avatar item-icon-right",target:"_blank"},(0,c.h)("h2",null,"running in a Web Worker"),(0,c.h)("i",{class:"icon ion-ios-arrow-forward"})),(0,c.h)("div",{class:"item item-checkbox"},(0,c.h)("label",{class:"checkbox"},(0,c.h)("input",{type:"checkbox",id:"use-vis"})),"test checkbox"),(0,c.h)("div",{class:"item item-divider"},n.length," data_pass_example"),n.map(function(e){return(0,c.h)(l.default,e)}))),(0,c.h)("div",{class:"dialog"+(o?" open":""),onClick:this.closeMessage},(0,c.h)("div",{class:"inner"},o||"")))},t}(c.Component);t.default=h},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),s=function(e){function t(){var n,i,a;o(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=r(this,e.call.apply(e,[this].concat(c))),i.toggle=function(e){console.log("toggle",e),i.setState({selected:!i.state.selected})},a=n,r(i,a)}return i(t,e),t.prototype.render=function(e,t){for(var n=e.name,o=e.unread,r=t.selected,i=Date.now();Date.now()-1<i;);return(0,a.h)("div",{class:"item item-icon-left"+(o?" item-icon-right":""),onClick:this.toggle,style:r?"background:#EEE;":""},(0,a.h)("i",{class:"icon "+(r?"ion-checkmark-circled":"ion-chatbubble")}),n,o?(0,a.h)("span",{class:"badge badge-royal unread"},o):null)},t}(a.Component);t.default=s},function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(){function e(e,n,o){o.target=e,o.type=n;for(var r=f.length;r--;){var i=f[r],a=e===i._target;if(!a&&i._options.subtree)do if(a=e===i._target)break;while(e=e.parentNode);a&&(i._records.push(o),p||(p=!0,(0,c.setImmediate)(t)))}}function t(){p=!1;for(var e=f.length;e--;){var t=f[e];t._records.length&&t.callback(t.takeRecords())}}function n(e){return new m(null,String(e).toUpperCase())}function a(e,t){var o=n(t);return o.namespace=e,o}function u(e){return new h(e)}function l(){var e=new b;return(0,c.assign)(e,e.defaultView={document:e,MutationObserver:_,Document:b,Node:d,Text:h,Element:m,SVGElement:v,Event:y}),(0,c.assign)(e,{documentElement:e,createElement:n,createElementNS:a,createTextNode:u}),e.appendChild(e.body=n("body")),e}var f=[],p=!1,d=function(){function t(e,n){i(this,t),this.nodeType=e,this.nodeName=n,this.childNodes=[]}return t.prototype.appendChild=function(t){t.remove(),t.parentNode=this,this.childNodes.push(t),this.children&&1===t.nodeType&&this.children.push(t),e(this,"childList",{addedNodes:[t],previousSibling:this.childNodes[this.childNodes.length-2]})},t.prototype.insertBefore=function(t,n){t.remove();var o=(0,c.splice)(this.childNodes,n,t),r=void 0;if(n){if(~o&&1===t.nodeType){for(;o<this.childNodes.length&&1!==(r=this.childNodes[o]).nodeType||n===t;)o++;r&&(0,c.splice)(this.children,n,t)}e(this,"childList",{addedNodes:[t],nextSibling:n})}else this.appendChild(t)},t.prototype.replaceChild=function(e,t){t.parentNode===this&&(this.insertBefore(e,t),t.remove())},t.prototype.removeChild=function(t){var n=(0,c.splice)(this.childNodes,t);1===t.nodeType&&(0,c.splice)(this.children,t),e(this,"childList",{removedNodes:[t],previousSibling:this.childNodes[n-1],nextSibling:this.childNodes[n]})},t.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)},t}(),h=function(t){function n(e){i(this,n);var r=o(this,t.call(this,3,"#text"));return r.data=e,r}return r(n,t),s(n,[{key:"textContent",get:function(){return this.data},set:function(t){var n=this.data;this.data=t,e(this,"characterData",{oldValue:n})}},{key:"nodeValue",get:function(){return this.data},set:function(e){this.textContent=e}}]),n}(d),m=function(t){function n(e,r){i(this,n);var a=o(this,t.call(this,e||1,r));return a.attributes=[],a.children=[],a.__handlers={},a.style={},Object.defineProperty(a,"className",{set:function(e){a.setAttribute("class",e)},get:function(){return a.getAttribute("style")}}),Object.defineProperty(a.style,"cssText",{set:function(e){a.setAttribute("style",e)},get:function(){return a.getAttribute("style")}}),a}return r(n,t),n.prototype.setAttribute=function(e,t){this.setAttributeNS(null,e,t)},n.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},n.prototype.removeAttribute=function(e){this.removeAttributeNS(null,e)},n.prototype.setAttributeNS=function(t,n,o){var r=(0,c.findWhere)(this.attributes,(0,c.createAttributeFilter)(t,n)),i=r&&r.value;r||this.attributes.push(r={ns:t,name:n}),r.value=String(o),e(this,"attributes",{attributeName:n,attributeNamespace:t,oldValue:i})},n.prototype.getAttributeNS=function(e,t){var n=(0,c.findWhere)(this.attributes,(0,c.createAttributeFilter)(e,t));return n&&n.value},n.prototype.removeAttributeNS=function(t,n){(0,c.splice)(this.attributes,(0,c.createAttributeFilter)(t,n)),e(this,"attributes",{attributeName:n,attributeNamespace:t,oldValue:this.getAttributeNS(t,n)})},n.prototype.addEventListener=function(e,t){(this.__handlers[(0,c.toLower)(e)]||(this.__handlers[(0,c.toLower)(e)]=[])).push(t)},n.prototype.removeEventListener=function(e,t){(0,c.splice)(this.__handlers[(0,c.toLower)(e)],t,0,!0)},n.prototype.dispatchEvent=function(e){var t=e.currentTarget=this,n=e.cancelable,o=void 0,r=void 0;do if(o=t.__handlers&&t.__handlers[(0,c.toLower)(e.type)])for(r=o.length;r--&&(o[r].call(t,e)!==!1&&!e._end||!n););while(e.bubbles&&(!n||!e._stop)&&(e.target=t=t.parentNode));return!e.defaultPrevented},n}(d),v=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return r(t,e),t}(m),b=function(e){function t(){return i(this,t),o(this,e.call(this,9,"#document"))}return r(t,e),t}(m),y=function(){function e(t,n){i(this,e),this.type=t,this.bubbles=!!n.bubbles,this.cancelable=!!n.cancelable}return e.prototype.stopPropagation=function(){this._stop=!0},e.prototype.stopImmediatePropagation=function(){this._end=this._stop=!0},e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),_=function(){function e(t){i(this,e),this.callback=t,this._records=[]}return e.prototype.observe=function(e,t){this.disconnect(),this._target=e,this._options=t||{},f.push(this)},e.prototype.disconnect=function(){this._target=null,(0,c.splice)(f,this)},e.prototype.takeRecords=function(){return this._records.splice(0,this._records.length)},e}();return l()}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=a;var c=n(5)},function(e,t){"use strict";function n(e,t){for(var n in t)e[n]=t[n]}function o(e){return String(e).toLowerCase()}function r(e,t){return function(n){return n.ns===e&&o(n.name)===o(t)}}function i(e,t,n,o){var r=e?a(e,t,!0,o):-1;return~r&&(n?e.splice(r,0,n):e.splice(r,1)),r}function a(e,t,n,o){for(var r=e.length;r--&&("function"!=typeof t||o?e[r]!==t:!t(e[r])););return n?r:e[r]}t.__esModule=!0,t.assign=n,t.toLower=o,t.createAttributeFilter=r,t.splice=i,t.findWhere=a;var s="undefined"!=typeof Promise&&Promise.resolve();t.setImmediate=s?function(e){s.then(e)}:setTimeout},function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=void 0;return e&&"object"===("undefined"==typeof e?"undefined":s(e))&&(t=e.__id),"string"==typeof e&&(t=e),t?"BODY"===e.nodeName?l.body:v.get(t):null}function r(e){var t=o(e.target);t&&(e.target=t,e.bubbles=!0,t.dispatchEvent(e))}function i(e){if(!e||"object"!==("undefined"==typeof e?"undefined":s(e)))return e;if(Array.isArray(e))return e.map(i);if(e instanceof l.defaultView.Node){var t=e.__id;t||(t=e.__id=String(++d)),v.set(t,e)}var n={};for(var o in e)e.hasOwnProperty(o)&&m.indexOf(o)<0&&(n[o]=e[o]);return n.childNodes&&n.childNodes.length&&(n.childNodes=i(n.childNodes)),n}function a(e){postMessage(JSON.parse(JSON.stringify(e)))}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(4),u=t(c),l=e.document=(0,u.default)();for(var f in l.defaultView)l.defaultView.hasOwnProperty(f)&&(e[f]=l.defaultView[f]);var p="/",d=({_current:"/",get href(){return p},get pathname(){return p.replace(/^(([a-z0-9]+\:)?\/\/[^\/]+|[?#].*$)/g,"")},get search(){return(p.match(/\?([^#]*)(#.*)?$/)||[])[1]},get hash(){return(p.match(/#(.*)$/)||[])[1]}},0),h=["addedNodes","removedNodes","nextSibling","previousSibling","target"],m=["children","parentNode","__handlers","_component","_componentConstructor"],v=new Map;new MutationObserver(function(e){for(var t=e.length;t--;)for(var n=e[t],o=h.length;o--;){var r=h[o];n[r]=i(n[r])}a({type:"MutationRecord",mutations:e})}).observe(l,{subtree:!0}),addEventListener("message",function(e){var t=e.data;switch(t.type){case"init":p=t.url;break;case"event":r(t.event)}})}).call(t,function(){return this}())}]);
//# sourceMappingURL=61726344fd76bd19736a.worker.js.map