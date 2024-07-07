import{f as I,g as pe,b as W,i as ze,j as We,a as me,_ as Re,e as D,c as Se,h as je}from"./@babel-25fffde3.js";import{r as o}from"./react-0fb5d424.js";import{c as q}from"./classnames-fe2c27d8.js";import{R as Ke}from"./rc-resize-observer-745b2131.js";import{j as H,p as Ve,d as oe}from"./rc-util-48ba7f71.js";var Me=o.forwardRef(function(t,v){var u=t.height,e=t.offset,c=t.children,a=t.prefixCls,l=t.onInnerResize,r=t.innerProps,n={},i={display:"flex",flexDirection:"column"};return e!==void 0&&(n={height:u,position:"relative",overflow:"hidden"},i=I(I({},i),{},{transform:"translateY(".concat(e,"px)"),position:"absolute",left:0,right:0,top:0})),o.createElement("div",{style:n},o.createElement(Ke,{onResize:function(s){var d=s.offsetHeight;d&&l&&l()}},o.createElement("div",pe({style:i,className:q(W({},"".concat(a,"-holder-inner"),a)),ref:v},r),c)))});Me.displayName="Filler";var Ae=20;function ge(t){return"touches"in t?t.touches[0].pageY:t.pageY}var Be=function(t){ze(u,t);var v=We(u);function u(){var e;me(this,u);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return e=v.call.apply(v,[this].concat(a)),e.moveRaf=null,e.scrollbarRef=o.createRef(),e.thumbRef=o.createRef(),e.visibleTimeout=null,e.state={dragging:!1,pageY:null,startTop:null,visible:!1},e.delayHidden=function(){clearTimeout(e.visibleTimeout),e.setState({visible:!0}),e.visibleTimeout=setTimeout(function(){e.setState({visible:!1})},2e3)},e.onScrollbarTouchStart=function(r){r.preventDefault()},e.onContainerMouseDown=function(r){r.stopPropagation(),r.preventDefault()},e.patchEvents=function(){window.addEventListener("mousemove",e.onMouseMove),window.addEventListener("mouseup",e.onMouseUp),e.thumbRef.current.addEventListener("touchmove",e.onMouseMove),e.thumbRef.current.addEventListener("touchend",e.onMouseUp)},e.removeEvents=function(){var r;window.removeEventListener("mousemove",e.onMouseMove),window.removeEventListener("mouseup",e.onMouseUp),(r=e.scrollbarRef.current)===null||r===void 0||r.removeEventListener("touchstart",e.onScrollbarTouchStart),e.thumbRef.current&&(e.thumbRef.current.removeEventListener("touchstart",e.onMouseDown),e.thumbRef.current.removeEventListener("touchmove",e.onMouseMove),e.thumbRef.current.removeEventListener("touchend",e.onMouseUp)),H.cancel(e.moveRaf)},e.onMouseDown=function(r){var n=e.props.onStartMove;e.setState({dragging:!0,pageY:ge(r),startTop:e.getTop()}),n(),e.patchEvents(),r.stopPropagation(),r.preventDefault()},e.onMouseMove=function(r){var n=e.state,i=n.dragging,f=n.pageY,s=n.startTop,d=e.props.onScroll;if(H.cancel(e.moveRaf),i){var g=ge(r)-f,p=s+g,R=e.getEnableScrollRange(),b=e.getEnableHeightRange(),w=b?p/b:0,x=Math.ceil(w*R);e.moveRaf=H(function(){d(x)})}},e.onMouseUp=function(){var r=e.props.onStopMove;e.setState({dragging:!1}),r(),e.removeEvents()},e.getSpinHeight=function(){var r=e.props,n=r.height,i=r.count,f=n/i*10;return f=Math.max(f,Ae),f=Math.min(f,n/2),Math.floor(f)},e.getEnableScrollRange=function(){var r=e.props,n=r.scrollHeight,i=r.height;return n-i||0},e.getEnableHeightRange=function(){var r=e.props.height,n=e.getSpinHeight();return r-n||0},e.getTop=function(){var r=e.props.scrollTop,n=e.getEnableScrollRange(),i=e.getEnableHeightRange();if(r===0||n===0)return 0;var f=r/n;return f*i},e.showScroll=function(){var r=e.props,n=r.height,i=r.scrollHeight;return i>n},e}return Re(u,[{key:"componentDidMount",value:function(){this.scrollbarRef.current.addEventListener("touchstart",this.onScrollbarTouchStart),this.thumbRef.current.addEventListener("touchstart",this.onMouseDown)}},{key:"componentDidUpdate",value:function(c){c.scrollTop!==this.props.scrollTop&&this.delayHidden()}},{key:"componentWillUnmount",value:function(){this.removeEvents(),clearTimeout(this.visibleTimeout)}},{key:"render",value:function(){var c=this.state,a=c.dragging,l=c.visible,r=this.props,n=r.prefixCls,i=r.direction,f=this.getSpinHeight(),s=this.getTop(),d=this.showScroll(),g=d&&l,p=i==="rtl"?{left:0}:{right:0};return o.createElement("div",{ref:this.scrollbarRef,className:q("".concat(n,"-scrollbar"),W({},"".concat(n,"-scrollbar-show"),d)),style:I(I({width:8,top:0,bottom:0},p),{},{position:"absolute",display:g?null:"none"}),onMouseDown:this.onContainerMouseDown,onMouseMove:this.delayHidden},o.createElement("div",{ref:this.thumbRef,className:q("".concat(n,"-scrollbar-thumb"),W({},"".concat(n,"-scrollbar-thumb-moving"),a)),style:{width:"100%",height:f,top:s,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"},onMouseDown:this.onMouseDown}))}}]),u}(o.Component);function Ge(t){var v=t.children,u=t.setRef,e=o.useCallback(function(c){u(c)},[]);return o.cloneElement(v,{ref:e})}function Ze(t,v,u,e,c,a){var l=a.getKey;return t.slice(v,u+1).map(function(r,n){var i=v+n,f=c(r,i,{}),s=l(r);return o.createElement(Ge,{key:s,setRef:function(g){return e(r,g)}},f)})}var qe=function(){function t(){me(this,t),this.maps=void 0,this.maps=Object.create(null)}return Re(t,[{key:"set",value:function(u,e){this.maps[u]=e}},{key:"get",value:function(u){return this.maps[u]}}]),t}();function Je(t,v,u){var e=o.useState(0),c=D(e,2),a=c[0],l=c[1],r=o.useRef(new Map),n=o.useRef(new qe),i=o.useRef();function f(){H.cancel(i.current)}function s(){f(),i.current=H(function(){r.current.forEach(function(g,p){if(g&&g.offsetParent){var R=Ve(g),b=R.offsetHeight;n.current.get(p)!==b&&n.current.set(p,R.offsetHeight)}}),l(function(g){return g+1})})}function d(g,p){var R=t(g),b=r.current.get(R);p?(r.current.set(R,p),s()):r.current.delete(R),!b!=!p&&(p?v==null||v(g):u==null||u(g))}return o.useEffect(function(){return f},[]),[d,s,n.current,a]}function Qe(t,v,u,e,c,a,l,r){var n=o.useRef();return function(i){if(i==null){r();return}if(H.cancel(n.current),typeof i=="number")l(i);else if(i&&Se(i)==="object"){var f,s=i.align;"index"in i?f=i.index:f=v.findIndex(function(R){return c(R)===i.key});var d=i.offset,g=d===void 0?0:d,p=function R(b,w){if(!(b<0||!t.current)){var x=t.current.clientHeight,j=!1,F=w;if(x){for(var E=w||s,U=0,P=0,L=0,y=Math.min(v.length,f),k=0;k<=y;k+=1){var J=c(v[k]);P=U;var N=u.get(J);L=P+(N===void 0?e:N),U=L,k===f&&N===void 0&&(j=!0)}var C=null;switch(E){case"top":C=P-g;break;case"bottom":C=L-x+g;break;default:{var Y=t.current.scrollTop,Q=Y+x;P<Y?F="top":L>Q&&(F="bottom")}}C!==null&&C!==t.current.scrollTop&&l(C)}n.current=H(function(){j&&a(),R(b-1,F)},2)}};p(3)}}}function Xe(t,v,u){var e=t.length,c=v.length,a,l;if(e===0&&c===0)return null;e<c?(a=t,l=v):(a=v,l=t);var r={__EMPTY_ITEM__:!0};function n(p){return p!==void 0?u(p):r}for(var i=null,f=Math.abs(e-c)!==1,s=0;s<l.length;s+=1){var d=n(a[s]),g=n(l[s]);if(d!==g){i=s,f=f||d!==n(l[s+1]);break}}return i===null?null:{index:i,multiple:f}}function et(t,v,u){var e=o.useState(t),c=D(e,2),a=c[0],l=c[1],r=o.useState(null),n=D(r,2),i=n[0],f=n[1];return o.useEffect(function(){var s=Xe(a||[],t||[],v);(s==null?void 0:s.index)!==void 0&&(u==null||u(s.index),f(t[s.index])),l(t)},[t]),[i]}var tt=(typeof navigator>"u"?"undefined":Se(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const be=function(t,v){var u=o.useRef(!1),e=o.useRef(null);function c(){clearTimeout(e.current),u.current=!0,e.current=setTimeout(function(){u.current=!1},50)}var a=o.useRef({top:t,bottom:v});return a.current.top=t,a.current.bottom=v,function(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=l<0&&a.current.top||l>0&&a.current.bottom;return r&&n?(clearTimeout(e.current),u.current=!1):(!n||u.current)&&c(),!u.current&&n}};function rt(t,v,u,e){var c=o.useRef(0),a=o.useRef(null),l=o.useRef(null),r=o.useRef(!1),n=be(v,u);function i(s){if(t){H.cancel(a.current);var d=s.deltaY;c.current+=d,l.current=d,!n(d)&&(tt||s.preventDefault(),a.current=H(function(){var g=r.current?10:1;e(c.current*g),c.current=0}))}}function f(s){t&&(r.current=s.detail===l.current)}return[i,f]}var nt=14/15;function ot(t,v,u){var e=o.useRef(!1),c=o.useRef(0),a=o.useRef(null),l=o.useRef(null),r,n=function(d){if(e.current){var g=Math.ceil(d.touches[0].pageY),p=c.current-g;c.current=g,u(p)&&d.preventDefault(),clearInterval(l.current),l.current=setInterval(function(){p*=nt,(!u(p,!0)||Math.abs(p)<=.1)&&clearInterval(l.current)},16)}},i=function(){e.current=!1,r()},f=function(d){r(),d.touches.length===1&&!e.current&&(e.current=!0,c.current=Math.ceil(d.touches[0].pageY),a.current=d.target,a.current.addEventListener("touchmove",n),a.current.addEventListener("touchend",i))};r=function(){a.current&&(a.current.removeEventListener("touchmove",n),a.current.removeEventListener("touchend",i))},oe(function(){return t&&v.current.addEventListener("touchstart",f),function(){var s;(s=v.current)===null||s===void 0||s.removeEventListener("touchstart",f),r(),clearInterval(l.current)}},[t])}var it=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","component","onScroll","onVisibleChange","innerProps"],at=[],ut={overflowY:"auto",overflowAnchor:"none"};function lt(t,v){var u=t.prefixCls,e=u===void 0?"rc-virtual-list":u,c=t.className,a=t.height,l=t.itemHeight,r=t.fullHeight,n=r===void 0?!0:r,i=t.style,f=t.data,s=t.children,d=t.itemKey,g=t.virtual,p=t.direction,R=t.component,b=R===void 0?"div":R,w=t.onScroll,x=t.onVisibleChange,j=t.innerProps,F=je(t,it),E=!!(g!==!1&&a&&l),U=E&&f&&l*f.length>a,P=o.useState(0),L=D(P,2),y=L[0],k=L[1],J=o.useState(!1),N=D(J,2),C=N[0],Y=N[1],Q=q(e,W({},"".concat(e,"-rtl"),p==="rtl"),c),S=f||at,T=o.useRef(),ie=o.useRef(),ae=o.useRef(),O=o.useCallback(function(h){return typeof d=="function"?d(h):h==null?void 0:h[d]},[d]),Ee={getKey:O};function K(h){k(function(m){var M;typeof h=="function"?M=h(m):M=h;var $=Ce(M);return T.current.scrollTop=$,$})}var ue=o.useRef({start:0,end:S.length}),Te=o.useRef(),ye=et(S,O),He=D(ye,1),we=He[0];Te.current=we;var xe=Je(O,null,null),V=D(xe,4),_e=V[0],le=V[1],se=V[2],De=V[3],A=o.useMemo(function(){if(!E)return{scrollHeight:void 0,start:0,end:S.length-1,offset:void 0};if(!U){var h;return{scrollHeight:((h=ie.current)===null||h===void 0?void 0:h.offsetHeight)||0,start:0,end:S.length-1,offset:void 0}}for(var m=0,M,$,_,Ue=S.length,z=0;z<Ue;z+=1){var Ye=S[z],Oe=O(Ye),de=se.get(Oe),ne=m+(de===void 0?l:de);ne>=y&&M===void 0&&(M=z,$=m),ne>y+a&&_===void 0&&(_=z),m=ne}return M===void 0&&(M=0,$=0,_=Math.ceil(a/l)),_===void 0&&(_=S.length-1),_=Math.min(_+1,S.length),{scrollHeight:m,start:M,end:_,offset:$}},[U,E,y,S,De,a]),X=A.scrollHeight,B=A.start,G=A.end,Le=A.offset;ue.current.start=B,ue.current.end=G;var ee=X-a,te=o.useRef(ee);te.current=ee;function Ce(h){var m=h;return Number.isNaN(te.current)||(m=Math.min(m,te.current)),m=Math.max(m,0),m}var ce=y<=0,fe=y>=ee,Ie=be(ce,fe);function Pe(h){var m=h;K(m)}function ke(h){var m=h.currentTarget.scrollTop;m!==y&&K(m),w==null||w(h)}var Ne=rt(E,ce,fe,function(h){K(function(m){var M=m+h;return M})}),ve=D(Ne,2),re=ve[0],he=ve[1];ot(E,T,function(h,m){return Ie(h,m)?!1:(re({preventDefault:function(){},deltaY:h}),!0)}),oe(function(){function h(m){E&&m.preventDefault()}return T.current.addEventListener("wheel",re),T.current.addEventListener("DOMMouseScroll",he),T.current.addEventListener("MozMousePixelScroll",h),function(){T.current&&(T.current.removeEventListener("wheel",re),T.current.removeEventListener("DOMMouseScroll",he),T.current.removeEventListener("MozMousePixelScroll",h))}},[E]);var $e=Qe(T,S,se,l,O,le,K,function(){var h;(h=ae.current)===null||h===void 0||h.delayHidden()});o.useImperativeHandle(v,function(){return{scrollTo:$e}}),oe(function(){if(x){var h=S.slice(B,G+1);x(h,S)}},[B,G,S]);var Fe=Ze(S,B,G,_e,s,Ee),Z=null;return a&&(Z=I(W({},n?"height":"maxHeight",a),ut),E&&(Z.overflowY="hidden",C&&(Z.pointerEvents="none"))),o.createElement("div",pe({style:I(I({},i),{},{position:"relative"}),className:Q},F),o.createElement(b,{className:"".concat(e,"-holder"),style:Z,ref:T,onScroll:ke},o.createElement(Me,{prefixCls:e,height:X,offset:Le,onInnerResize:le,ref:ie,innerProps:j},Fe)),E&&o.createElement(Be,{ref:ae,prefixCls:e,scrollTop:y,height:a,scrollHeight:X,count:S.length,direction:p,onScroll:Pe,onStartMove:function(){Y(!0)},onStopMove:function(){Y(!1)}}))}var st=o.forwardRef(lt);st.displayName="List";export{st as L};
