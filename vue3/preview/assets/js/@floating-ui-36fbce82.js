const t=Math.min,e=Math.max,n=Math.round,o=Math.floor,i=t=>({x:t,y:t}),r={left:"right",right:"left",bottom:"top",top:"bottom"},l={start:"end",end:"start"};function c(n,o,i){return e(n,t(o,i))}function s(t,e){return"function"==typeof t?t(e):t}function a(t){return t.split("-")[0]}function f(t){return t.split("-")[1]}function u(t){return"x"===t?"y":"x"}function d(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(a(t))?"y":"x"}function h(t){return u(m(t))}function p(t){return t.replace(/start|end/g,(t=>l[t]))}function g(t){return t.replace(/left|right|bottom|top/g,(t=>r[t]))}function y(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function w(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function x(t,e,n){let{reference:o,floating:i}=t;const r=m(e),l=h(e),c=d(l),s=a(e),u="y"===r,p=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,y=o[c]/2-i[c]/2;let w;switch(s){case"top":w={x:p,y:o.y-i.height};break;case"bottom":w={x:p,y:o.y+o.height};break;case"right":w={x:o.x+o.width,y:g};break;case"left":w={x:o.x-i.width,y:g};break;default:w={x:o.x,y:o.y}}switch(f(e)){case"start":w[l]-=y*(n&&u?-1:1);break;case"end":w[l]+=y*(n&&u?-1:1)}return w}async function v(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:h=0}=s(e,t),p=y(h),g=c[m?"floating"===d?"reference":"floating":d],x=w(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:a})),v="floating"===d?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),R=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},T=w(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:a}):v);return{top:(x.top-T.top+p.top)/R.y,bottom:(T.bottom-x.bottom+p.bottom)/R.y,left:(x.left-T.left+p.left)/R.x,right:(T.right-x.right+p.right)/R.x}}function b(t){return E(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function T(t){var e;return null==(e=(E(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function E(t){return t instanceof Node||t instanceof R(t).Node}function L(t){return t instanceof Element||t instanceof R(t).Element}function A(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function O(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof R(t).ShadowRoot)}function D(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function S(t){return["table","td","th"].includes(b(t))}function P(t){const e=C(),n=k(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function C(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function F(t){return["html","body","#document"].includes(b(t))}function k(t){return R(t).getComputedStyle(t)}function H(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function W(t){if("html"===b(t))return t;const e=t.assignedSlot||t.parentNode||O(t)&&t.host||T(t);return O(e)?e.host:e}function B(t){const e=W(t);return F(e)?t.ownerDocument?t.ownerDocument.body:t.body:A(e)&&D(e)?e:B(e)}function V(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=B(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=R(i);return r?e.concat(l,l.visualViewport||[],D(i)?i:[],l.frameElement&&n?V(l.frameElement):[]):e.concat(i,V(i,[],n))}function M(t){const e=k(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=A(t),l=r?t.offsetWidth:o,c=r?t.offsetHeight:i,s=n(o)!==l||n(i)!==c;return s&&(o=l,i=c),{width:o,height:i,$:s}}function z(t){return L(t)?t:t.contextElement}function N(t){const e=z(t);if(!A(e))return i(1);const o=e.getBoundingClientRect(),{width:r,height:l,$:c}=M(e);let s=(c?n(o.width):o.width)/r,a=(c?n(o.height):o.height)/l;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const I=i(0);function q(t){const e=R(t);return C()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:I}function X(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),l=z(t);let c=i(1);e&&(o?L(o)&&(c=N(o)):c=N(t));const s=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==R(t))&&e}(l,n,o)?q(l):i(0);let a=(r.left+s.x)/c.x,f=(r.top+s.y)/c.y,u=r.width/c.x,d=r.height/c.y;if(l){const t=R(l),e=o&&L(o)?R(o):o;let n=t,i=n.frameElement;for(;i&&o&&e!==n;){const t=N(i),e=i.getBoundingClientRect(),o=k(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,f*=t.y,u*=t.x,d*=t.y,a+=r,f+=l,n=R(i),i=n.frameElement}}return w({width:u,height:d,x:a,y:f})}const Y=[":popover-open",":modal"];function $(t){return Y.some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function _(t){return X(T(t)).left+H(t).scrollLeft}function j(t,n,o){let r;if("viewport"===n)r=function(t,e){const n=R(t),o=T(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=C();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,o);else if("document"===n)r=function(t){const n=T(t),o=H(t),i=t.ownerDocument.body,r=e(n.scrollWidth,n.clientWidth,i.scrollWidth,i.clientWidth),l=e(n.scrollHeight,n.clientHeight,i.scrollHeight,i.clientHeight);let c=-o.scrollLeft+_(t);const s=-o.scrollTop;return"rtl"===k(i).direction&&(c+=e(n.clientWidth,i.clientWidth)-r),{width:r,height:l,x:c,y:s}}(T(t));else if(L(n))r=function(t,e){const n=X(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,l=A(t)?N(t):i(1);return{width:t.clientWidth*l.x,height:t.clientHeight*l.y,x:r*l.x,y:o*l.y}}(n,o);else{const e=q(t);r={...n,x:n.x-e.x,y:n.y-e.y}}return w(r)}function G(t,e){const n=W(t);return!(n===e||!L(n)||F(n))&&("fixed"===k(n).position||G(n,e))}function J(t,e,n){const o=A(e),r=T(e),l="fixed"===n,c=X(t,!0,l,e);let s={scrollLeft:0,scrollTop:0};const a=i(0);if(o||!o&&!l)if(("body"!==b(e)||D(r))&&(s=H(e)),o){const t=X(e,!0,l,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=_(r));return{x:c.left+s.scrollLeft-a.x,y:c.top+s.scrollTop-a.y,width:c.width,height:c.height}}function K(t){return"static"===k(t).position}function Q(t,e){return A(t)&&"fixed"!==k(t).position?e?e(t):t.offsetParent:null}function U(t,e){const n=R(t);if($(t))return n;if(!A(t)){let e=W(t);for(;e&&!F(e);){if(L(e)&&!K(e))return e;e=W(e)}return n}let o=Q(t,e);for(;o&&S(o)&&K(o);)o=Q(o,e);return o&&F(o)&&K(o)&&!P(o)?n:o||function(t){let e=W(t);for(;A(e)&&!F(e);){if(P(e))return e;e=W(e)}return null}(t)||n}const Z={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const l="fixed"===r,c=T(o),s=!!e&&$(e.floating);if(o===c||s&&l)return n;let a={scrollLeft:0,scrollTop:0},f=i(1);const u=i(0),d=A(o);if((d||!d&&!l)&&(("body"!==b(o)||D(c))&&(a=H(o)),A(o))){const t=X(o);f=N(o),u.x=t.x+o.clientLeft,u.y=t.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-a.scrollLeft*f.x+u.x,y:n.y*f.y-a.scrollTop*f.y+u.y}},getDocumentElement:T,getClippingRect:function(n){let{element:o,boundary:i,rootBoundary:r,strategy:l}=n;const c=[..."clippingAncestors"===i?$(o)?[]:function(t,e){const n=e.get(t);if(n)return n;let o=V(t,[],!1).filter((t=>L(t)&&"body"!==b(t))),i=null;const r="fixed"===k(t).position;let l=r?W(t):t;for(;L(l)&&!F(l);){const e=k(l),n=P(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||D(l)&&!n&&G(t,l))?o=o.filter((t=>t!==l)):i=e,l=W(l)}return e.set(t,o),o}(o,this._c):[].concat(i),r],s=c[0],a=c.reduce(((n,i)=>{const r=j(o,i,l);return n.top=e(r.top,n.top),n.right=t(r.right,n.right),n.bottom=t(r.bottom,n.bottom),n.left=e(r.left,n.left),n}),j(o,s,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:U,getElementRects:async function(t){const e=this.getOffsetParent||U,n=this.getDimensions,o=await n(t.floating);return{reference:J(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=M(t);return{width:e,height:n}},getScale:N,isElement:L,isRTL:function(t){return"rtl"===k(t).direction}};function tt(n,i,r,l){void 0===l&&(l={});const{ancestorScroll:c=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=l,d=z(n),m=c||s?[...d?V(d):[],...V(i)]:[];m.forEach((t=>{c&&t.addEventListener("scroll",r,{passive:!0}),s&&t.addEventListener("resize",r)}));const h=d&&f?function(n,i){let r,l=null;const c=T(n);function s(){var t;clearTimeout(r),null==(t=l)||t.disconnect(),l=null}return function a(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),s();const{left:d,top:m,width:h,height:p}=n.getBoundingClientRect();if(f||i(),!h||!p)return;const g={rootMargin:-o(m)+"px "+-o(c.clientWidth-(d+h))+"px "+-o(c.clientHeight-(m+p))+"px "+-o(d)+"px",threshold:e(0,t(1,u))||1};let y=!0;function w(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return a();e?a(!1,e):r=setTimeout((()=>{a(!1,1e-7)}),1e3)}y=!1}try{l=new IntersectionObserver(w,{...g,root:c.ownerDocument})}catch(x){l=new IntersectionObserver(w,g)}l.observe(n)}(!0),s}(d,r):null;let p,g=-1,y=null;a&&(y=new ResizeObserver((t=>{let[e]=t;e&&e.target===d&&y&&(y.unobserve(i),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=y)||t.observe(i)}))),r()})),d&&!u&&y.observe(d),y.observe(i));let w=u?X(n):null;return u&&function t(){const e=X(n);!w||e.x===w.x&&e.y===w.y&&e.width===w.width&&e.height===w.height||r();w=e,p=requestAnimationFrame(t)}(),r(),()=>{var t;m.forEach((t=>{c&&t.removeEventListener("scroll",r),s&&t.removeEventListener("resize",r)})),null==h||h(),null==(t=y)||t.disconnect(),y=null,u&&cancelAnimationFrame(p)}}const et=v,nt=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:l,middlewareData:c}=e,u=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=a(n),c=f(n),u="y"===m(n),d=["left","top"].includes(l)?-1:1,h=r&&u?-1:1,p=s(e,t);let{mainAxis:g,crossAxis:y,alignmentAxis:w}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&"number"==typeof w&&(y="end"===c?-1*w:w),u?{x:y*h,y:g*d}:{x:g*d,y:y*h}}(e,t);return l===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:l}}}}},ot=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...d}=s(t,e),h={x:n,y:o},p=await v(e,d),g=m(a(i)),y=u(g);let w=h[y],x=h[g];if(r){const t="y"===y?"bottom":"right";w=c(w+p["y"===y?"top":"left"],w,w-p[t])}if(l){const t="y"===g?"bottom":"right";x=c(x+p["y"===g?"top":"left"],x,x-p[t])}const b=f.fn({...e,[y]:w,[g]:x});return{...b,data:{x:b.x-n,y:b.y-o}}}}},it=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:c,platform:u,elements:m}=e,{mainAxis:y=!0,crossAxis:w=!0,fallbackPlacements:x,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:T=!0,...E}=s(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const L=a(i),A=a(c)===c,O=await(null==u.isRTL?void 0:u.isRTL(m.floating)),D=x||(A||!T?[g(c)]:function(t){const e=g(t);return[p(t),e,p(e)]}(c));x||"none"===R||D.push(...function(t,e,n,o){const i=f(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(a(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(p)))),r}(c,T,R,O));const S=[c,...D],P=await v(e,E),C=[];let F=(null==(o=r.flip)?void 0:o.overflows)||[];if(y&&C.push(P[L]),w){const t=function(t,e,n){void 0===n&&(n=!1);const o=f(t),i=h(t),r=d(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=g(l)),[l,g(l)]}(i,l,O);C.push(P[t[0]],P[t[1]])}if(F=[...F,{placement:i,overflows:C}],!C.every((t=>t<=0))){var k,H;const t=((null==(k=r.flip)?void 0:k.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(H=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:H.placement;if(!n)switch(b){case"bestFit":{var W;const t=null==(W=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:W[0];t&&(n=t);break}case"initialPlacement":n=c}if(i!==n)return{reset:{placement:n}}}return{}}}},rt=e=>({name:"arrow",options:e,async fn(n){const{x:o,y:i,placement:r,rects:l,platform:a,elements:u,middlewareData:m}=n,{element:p,padding:g=0}=s(e,n)||{};if(null==p)return{};const w=y(g),x={x:o,y:i},v=h(r),b=d(v),R=await a.getDimensions(p),T="y"===v,E=T?"top":"left",L=T?"bottom":"right",A=T?"clientHeight":"clientWidth",O=l.reference[b]+l.reference[v]-x[v]-l.floating[b],D=x[v]-l.reference[v],S=await(null==a.getOffsetParent?void 0:a.getOffsetParent(p));let P=S?S[A]:0;P&&await(null==a.isElement?void 0:a.isElement(S))||(P=u.floating[A]||l.floating[b]);const C=O/2-D/2,F=P/2-R[b]/2-1,k=t(w[E],F),H=t(w[L],F),W=k,B=P-R[b]-H,V=P/2-R[b]/2+C,M=c(W,V,B),z=!m.arrow&&null!=f(r)&&V!==M&&l.reference[b]/2-(V<W?k:H)-R[b]/2<0,N=z?V<W?V-W:V-B:0;return{[v]:x[v]+N,data:{[v]:M,centerOffset:V-M-N,...z&&{alignmentOffset:N}},reset:z}}}),lt=(t,e,n)=>{const o=new Map,i={platform:Z,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(e));let a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=x(a,o,s),d=o,m={},h=0;for(let p=0;p<c.length;p++){const{name:n,fn:r}=c[p],{x:g,y:y,data:w,reset:v}=await r({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:m,rects:a,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,m={...m,[n]:{...m[n],...w}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(a=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):v.rects),({x:f,y:u}=x(a,d,s))),p=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:m}})(t,e,{...i,platform:r})};export{rt as a,tt as b,lt as c,et as d,it as f,nt as o,ot as s};
