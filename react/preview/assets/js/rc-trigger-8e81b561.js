import{f as T,g as A,e as S,o as Te,p as re,h as Pe,b as u,i as ye,j as be,a as ke,q as l,_ as Se}from"./@babel-25fffde3.js";import{r as a}from"./react-0fb5d424.js";import{R as xe}from"./react-dom-0d6193a3.js";import{z as we,j as E,d as ue,m as De,C as Q,p as Ne,D as $,s as Ee,k as Ae,P as Oe}from"./rc-util-48ba7f71.js";import{c as z}from"./classnames-fe2c27d8.js";import{C as K}from"./rc-motion-eb90ae56.js";import{R as Re}from"./rc-align-3928b621.js";function He(n,d,c){return c?n[0]===d[0]:n[0]===d[0]&&n[1]===d[1]}function Ve(n,d,c){var m=n[d]||{};return T(T({},m),c)}function _e(n,d,c,m){for(var h=c.points,s=Object.keys(n),e=0;e<s.length;e+=1){var i=s[e];if(He(n[i].points,h,m))return"".concat(d,"-placement-").concat(i)}return""}function ce(n){var d=n.prefixCls,c=n.motion,m=n.animation,h=n.transitionName;return c||(m?{motionName:"".concat(d,"-").concat(m)}:h?{motionName:h}:null)}function Le(n){var d=n.prefixCls,c=n.visible,m=n.zIndex,h=n.mask,s=n.maskMotion,e=n.maskAnimation,i=n.maskTransitionName;if(!h)return null;var t={};return(s||i||e)&&(t=T({motionAppear:!0},ce({motion:s,prefixCls:d,transitionName:i,animation:e}))),a.createElement(K,A({},t,{visible:c,removeOnLeave:!0}),function(o){var r=o.className;return a.createElement("div",{style:{zIndex:m},className:z("".concat(d,"-mask"),r)})})}var le=["measure","alignPre","align",null,"motion"];const Ie=function(n,d){var c=we(null),m=S(c,2),h=m[0],s=m[1],e=a.useRef();function i(r){s(r,!0)}function t(){E.cancel(e.current)}function o(r){t(),e.current=E(function(){i(function(f){switch(h){case"align":return"motion";case"motion":return"stable"}return f}),r==null||r()})}return a.useEffect(function(){i("measure")},[n]),a.useEffect(function(){switch(h){case"measure":d();break}h&&(e.current=E(Te(re().mark(function r(){var f,g;return re().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:f=le.indexOf(h),g=le[f+1],g&&f!==-1&&i(g);case 3:case"end":return p.stop()}},r)}))))},[h]),a.useEffect(function(){return function(){t()}},[]),[h,o]},Fe=function(n){var d=a.useState({width:0,height:0}),c=S(d,2),m=c[0],h=c[1];function s(i){var t=i.offsetWidth,o=i.offsetHeight,r=i.getBoundingClientRect(),f=r.width,g=r.height;Math.abs(t-f)<1&&Math.abs(o-g)<1&&(t=f,o=g),h({width:t,height:o})}var e=a.useMemo(function(){var i={};if(n){var t=m.width,o=m.height;n.indexOf("height")!==-1&&o?i.height=o:n.indexOf("minHeight")!==-1&&o&&(i.minHeight=o),n.indexOf("width")!==-1&&t?i.width=t:n.indexOf("minWidth")!==-1&&t&&(i.minWidth=t)}return i},[n,m]);return[e,s]};var fe=a.forwardRef(function(n,d){var c=n.visible,m=n.prefixCls,h=n.className,s=n.style,e=n.children,i=n.zIndex,t=n.stretch,o=n.destroyPopupOnHide,r=n.forceRender,f=n.align,g=n.point,v=n.getRootDomNode,p=n.getClassNameFromAlign,M=n.onAlign,P=n.onMouseEnter,x=n.onMouseLeave,b=n.onMouseDown,O=n.onTouchStart,R=n.onClick,L=a.useRef(),D=a.useRef(),B=a.useState(),I=S(B,2),F=I[0],W=I[1],U=Fe(t),H=S(U,2),j=H[0],X=H[1];function Y(){t&&X(v())}var w=Ie(c,Y),Z=S(w,2),y=Z[0],q=Z[1],he=a.useState(0),ee=S(he,2),te=ee[0],oe=ee[1],G=a.useRef();ue(function(){y==="alignPre"&&oe(0)},[y]);function ve(){return g||v}function ie(){var C;(C=L.current)===null||C===void 0||C.forceAlign()}function ge(C,k){var N=p(k);F!==N&&W(N),oe(function(_){return _+1}),y==="align"&&(M==null||M(C,k))}ue(function(){y==="align"&&(te<3?ie():q(function(){var C;(C=G.current)===null||C===void 0||C.call(G)}))},[te]);var V=T({},ce(n));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(C){var k=V[C];V[C]=function(N,_){return q(),k==null?void 0:k(N,_)}});function ne(){return new Promise(function(C){G.current=C})}a.useEffect(function(){!V.motionName&&y==="motion"&&q()},[V.motionName,y]),a.useImperativeHandle(d,function(){return{forceAlign:ie,getElement:function(){return D.current}}});var Ce=T(T({},j),{},{zIndex:i,opacity:y==="motion"||y==="stable"||!c?void 0:0,pointerEvents:!c&&y!=="stable"?"none":void 0},s),se=!0;f!=null&&f.points&&(y==="align"||y==="stable")&&(se=!1);var ae=e;return a.Children.count(e)>1&&(ae=a.createElement("div",{className:"".concat(m,"-content")},e)),a.createElement(K,A({visible:c,ref:D,leavedClassName:"".concat(m,"-hidden")},V,{onAppearPrepare:ne,onEnterPrepare:ne,removeOnLeave:o,forceRender:r}),function(C,k){var N=C.className,_=C.style,Me=z(m,h,F,N);return a.createElement(Re,{target:ve(),key:"popup",ref:L,monitorWindowResize:!0,disabled:se,align:f,onAlign:ge},a.createElement("div",{ref:k,className:Me,onMouseEnter:P,onMouseLeave:x,onMouseDownCapture:b,onTouchStartCapture:O,onClick:R,style:T(T({},_),Ce)},ae))})});fe.displayName="PopupInner";var de=a.forwardRef(function(n,d){var c=n.prefixCls,m=n.visible,h=n.zIndex,s=n.children,e=n.mobile;e=e===void 0?{}:e;var i=e.popupClassName,t=e.popupStyle,o=e.popupMotion,r=o===void 0?{}:o,f=e.popupRender,g=n.onClick,v=a.useRef();a.useImperativeHandle(d,function(){return{forceAlign:function(){},getElement:function(){return v.current}}});var p=T({zIndex:h},t),M=s;return a.Children.count(s)>1&&(M=a.createElement("div",{className:"".concat(c,"-content")},s)),f&&(M=f(M)),a.createElement(K,A({visible:m,ref:v,removeOnLeave:!0},r),function(P,x){var b=P.className,O=P.style,R=z(c,i,b);return a.createElement("div",{ref:x,className:R,onClick:g,style:T(T({},O),p)},M)})});de.displayName="MobilePopupInner";var $e=["visible","mobile"],me=a.forwardRef(function(n,d){var c=n.visible,m=n.mobile,h=Pe(n,$e),s=a.useState(c),e=S(s,2),i=e[0],t=e[1],o=a.useState(!1),r=S(o,2),f=r[0],g=r[1],v=T(T({},h),{},{visible:i});a.useEffect(function(){t(c),c&&m&&g(De())},[c,m]);var p=f?a.createElement(de,A({},v,{mobile:m,ref:d})):a.createElement(fe,A({},v,{ref:d}));return a.createElement("div",null,a.createElement(Le,v),p)});me.displayName="Popup";var pe=a.createContext(null);function J(){}function ze(){return""}function Be(n){return n?n.ownerDocument:window.document}var We=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function Ue(n){var d=function(c){ye(h,c);var m=be(h);function h(s){var e;ke(this,h),e=m.call(this,s),u(l(e),"popupRef",a.createRef()),u(l(e),"triggerRef",a.createRef()),u(l(e),"portalContainer",void 0),u(l(e),"attachId",void 0),u(l(e),"clickOutsideHandler",void 0),u(l(e),"touchOutsideHandler",void 0),u(l(e),"contextMenuOutsideHandler1",void 0),u(l(e),"contextMenuOutsideHandler2",void 0),u(l(e),"mouseDownTimeout",void 0),u(l(e),"focusTime",void 0),u(l(e),"preClickTime",void 0),u(l(e),"preTouchTime",void 0),u(l(e),"delayTimer",void 0),u(l(e),"hasPopupMouseDown",void 0),u(l(e),"onMouseEnter",function(t){var o=e.props.mouseEnterDelay;e.fireEvents("onMouseEnter",t),e.delaySetPopupVisible(!0,o,o?null:t)}),u(l(e),"onMouseMove",function(t){e.fireEvents("onMouseMove",t),e.setPoint(t)}),u(l(e),"onMouseLeave",function(t){e.fireEvents("onMouseLeave",t),e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)}),u(l(e),"onPopupMouseEnter",function(){e.clearDelayTimer()}),u(l(e),"onPopupMouseLeave",function(t){var o;t.relatedTarget&&!t.relatedTarget.setTimeout&&Q((o=e.popupRef.current)===null||o===void 0?void 0:o.getElement(),t.relatedTarget)||e.delaySetPopupVisible(!1,e.props.mouseLeaveDelay)}),u(l(e),"onFocus",function(t){e.fireEvents("onFocus",t),e.clearDelayTimer(),e.isFocusToShow()&&(e.focusTime=Date.now(),e.delaySetPopupVisible(!0,e.props.focusDelay))}),u(l(e),"onMouseDown",function(t){e.fireEvents("onMouseDown",t),e.preClickTime=Date.now()}),u(l(e),"onTouchStart",function(t){e.fireEvents("onTouchStart",t),e.preTouchTime=Date.now()}),u(l(e),"onBlur",function(t){e.fireEvents("onBlur",t),e.clearDelayTimer(),e.isBlurToHide()&&e.delaySetPopupVisible(!1,e.props.blurDelay)}),u(l(e),"onContextMenu",function(t){t.preventDefault(),e.fireEvents("onContextMenu",t),e.setPopupVisible(!0,t)}),u(l(e),"onContextMenuClose",function(){e.isContextMenuToShow()&&e.close()}),u(l(e),"onClick",function(t){if(e.fireEvents("onClick",t),e.focusTime){var o;if(e.preClickTime&&e.preTouchTime?o=Math.min(e.preClickTime,e.preTouchTime):e.preClickTime?o=e.preClickTime:e.preTouchTime&&(o=e.preTouchTime),Math.abs(o-e.focusTime)<20)return;e.focusTime=0}e.preClickTime=0,e.preTouchTime=0,e.isClickToShow()&&(e.isClickToHide()||e.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault();var r=!e.state.popupVisible;(e.isClickToHide()&&!r||r&&e.isClickToShow())&&e.setPopupVisible(!e.state.popupVisible,t)}),u(l(e),"onPopupMouseDown",function(){if(e.hasPopupMouseDown=!0,clearTimeout(e.mouseDownTimeout),e.mouseDownTimeout=window.setTimeout(function(){e.hasPopupMouseDown=!1},0),e.context){var t;(t=e.context).onPopupMouseDown.apply(t,arguments)}}),u(l(e),"onDocumentClick",function(t){if(!(e.props.mask&&!e.props.maskClosable)){var o=t.target,r=e.getRootDomNode(),f=e.getPopupDomNode();(!Q(r,o)||e.isContextMenuOnly())&&!Q(f,o)&&!e.hasPopupMouseDown&&e.close()}}),u(l(e),"getRootDomNode",function(){var t=e.props.getTriggerDOMNode;if(t)return t(e.triggerRef.current);try{var o=Ne(e.triggerRef.current);if(o)return o}catch{}return xe.findDOMNode(l(e))}),u(l(e),"getPopupClassNameFromAlign",function(t){var o=[],r=e.props,f=r.popupPlacement,g=r.builtinPlacements,v=r.prefixCls,p=r.alignPoint,M=r.getPopupClassNameFromAlign;return f&&g&&o.push(_e(g,v,t,p)),M&&o.push(M(t)),o.join(" ")}),u(l(e),"getComponent",function(){var t=e.props,o=t.prefixCls,r=t.destroyPopupOnHide,f=t.popupClassName,g=t.onPopupAlign,v=t.popupMotion,p=t.popupAnimation,M=t.popupTransitionName,P=t.popupStyle,x=t.mask,b=t.maskAnimation,O=t.maskTransitionName,R=t.maskMotion,L=t.zIndex,D=t.popup,B=t.stretch,I=t.alignPoint,F=t.mobile,W=t.forceRender,U=t.onPopupClick,H=e.state,j=H.popupVisible,X=H.point,Y=e.getPopupAlign(),w={};return e.isMouseEnterToShow()&&(w.onMouseEnter=e.onPopupMouseEnter),e.isMouseLeaveToHide()&&(w.onMouseLeave=e.onPopupMouseLeave),w.onMouseDown=e.onPopupMouseDown,w.onTouchStart=e.onPopupMouseDown,a.createElement(me,A({prefixCls:o,destroyPopupOnHide:r,visible:j,point:I&&X,className:f,align:Y,onAlign:g,animation:p,getClassNameFromAlign:e.getPopupClassNameFromAlign},w,{stretch:B,getRootDomNode:e.getRootDomNode,style:P,mask:x,zIndex:L,transitionName:M,maskAnimation:b,maskTransitionName:O,maskMotion:R,ref:e.popupRef,motion:v,mobile:F,forceRender:W,onClick:U}),typeof D=="function"?D():D)}),u(l(e),"attachParent",function(t){E.cancel(e.attachId);var o=e.props,r=o.getPopupContainer,f=o.getDocument,g=e.getRootDomNode(),v;r?(g||r.length===0)&&(v=r(g)):v=f(e.getRootDomNode()).body,v?v.appendChild(t):e.attachId=E(function(){e.attachParent(t)})}),u(l(e),"getContainer",function(){if(!e.portalContainer){var t=e.props.getDocument,o=t(e.getRootDomNode()).createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",e.portalContainer=o}return e.attachParent(e.portalContainer),e.portalContainer}),u(l(e),"setPoint",function(t){var o=e.props.alignPoint;!o||!t||e.setState({point:{pageX:t.pageX,pageY:t.pageY}})}),u(l(e),"handlePortalUpdate",function(){e.state.prevPopupVisible!==e.state.popupVisible&&e.props.afterPopupVisibleChange(e.state.popupVisible)}),u(l(e),"triggerContextValue",{onPopupMouseDown:e.onPopupMouseDown});var i;return"popupVisible"in s?i=!!s.popupVisible:i=!!s.defaultPopupVisible,e.state={prevPopupVisible:i,popupVisible:i},We.forEach(function(t){e["fire".concat(t)]=function(o){e.fireEvents(t,o)}}),e}return Se(h,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,i=this.state;if(i.popupVisible){var t;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(t=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=$(t,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(t=t||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=$(t,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(t=t||e.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=$(t,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=$(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),E.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return((e=this.popupRef.current)===null||e===void 0?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,i=e.popupPlacement,t=e.popupAlign,o=e.builtinPlacements;return i&&o?Ve(o,i,t):t}},{key:"setPopupVisible",value:function(e,i){var t=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),t&&i&&e&&this.setPoint(i)}},{key:"delaySetPopupVisible",value:function(e,i,t){var o=this,r=i*1e3;if(this.clearDelayTimer(),r){var f=t?{pageX:t.pageX,pageY:t.pageY}:null;this.delayTimer=window.setTimeout(function(){o.setPopupVisible(e,f),o.clearDelayTimer()},r)}else this.setPopupVisible(e,t)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var i=this.props.children.props,t=this.props;return i[e]&&t[e]?this["fire".concat(e)]:i[e]||t[e]}},{key:"isClickToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return e==="contextMenu"||e.length===1&&e[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("contextMenu")!==-1||t.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("click")!==-1||t.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("hover")!==-1||t.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("hover")!==-1||t.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var e=this.props,i=e.action,t=e.showAction;return i.indexOf("focus")!==-1||t.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var e=this.props,i=e.action,t=e.hideAction;return i.indexOf("focus")!==-1||t.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var e;(e=this.popupRef.current)===null||e===void 0||e.forceAlign()}}},{key:"fireEvents",value:function(e,i){var t=this.props.children.props[e];t&&t(i);var o=this.props[e];o&&o(i)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,i=this.props,t=i.children,o=i.forceRender,r=i.alignPoint,f=i.className,g=i.autoDestroy,v=a.Children.only(t),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,r&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var M=z(v&&v.props&&v.props.className,f);M&&(p.className=M);var P=T({},p);Ee(v)&&(P.ref=Ae(this.triggerRef,v.ref));var x=a.cloneElement(v,P),b;return(e||this.popupRef.current||o)&&(b=a.createElement(n,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&g&&(b=null),a.createElement(pe.Provider,{value:this.triggerContextValue},x,b)}}],[{key:"getDerivedStateFromProps",value:function(e,i){var t=e.popupVisible,o={};return t!==void 0&&i.popupVisible!==t&&(o.popupVisible=t,o.prevPopupVisible=i.popupVisible),o}}]),h}(a.Component);return u(d,"contextType",pe),u(d,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:ze,getDocument:Be,onPopupVisibleChange:J,afterPopupVisibleChange:J,onPopupAlign:J,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),d}const Ke=Ue(Oe);export{Ke as T};
