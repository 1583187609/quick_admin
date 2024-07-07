import{h as Je,g as Qe,b as ee,f as z,e as q,d as te,c as dt}from"./@babel-25fffde3.js";import{r as t}from"./react-0fb5d424.js";import{c as Ee}from"./classnames-fe2c27d8.js";import{K as p,A as ft,o as mt}from"./rc-util-48ba7f71.js";var le=t.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});function Pe(e,c,r){return(e-c)/(r-c)}function He(e,c,r,f){var o=Pe(c,r,f),l={};switch(e){case"rtl":l.right="".concat(o*100,"%"),l.transform="translateX(50%)";break;case"btt":l.bottom="".concat(o*100,"%"),l.transform="translateY(50%)";break;case"ttb":l.top="".concat(o*100,"%"),l.transform="translateY(-50%)";break;default:l.left="".concat(o*100,"%"),l.transform="translateX(-50%)";break}return l}function me(e,c){return Array.isArray(e)?e[c]:e}var gt=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],ht=t.forwardRef(function(e,c){var r,f,o=e.prefixCls,l=e.value,s=e.valueIndex,y=e.onStartMove,M=e.style,x=e.render,k=e.dragging,b=e.onOffsetChange,g=Je(e,gt),u=t.useContext(le),n=u.min,v=u.max,i=u.direction,m=u.disabled,a=u.keyboard,h=u.range,j=u.tabIndex,w=u.ariaLabelForHandle,R=u.ariaLabelledByForHandle,L=u.ariaValueTextFormatterForHandle,B="".concat(o,"-handle"),E=function(N){m||y(N,s)},C=function(N){if(!m&&a){var $=null;switch(N.which||N.keyCode){case p.LEFT:$=i==="ltr"||i==="btt"?-1:1;break;case p.RIGHT:$=i==="ltr"||i==="btt"?1:-1;break;case p.UP:$=i!=="ttb"?1:-1;break;case p.DOWN:$=i!=="ttb"?-1:1;break;case p.HOME:$="min";break;case p.END:$="max";break;case p.PAGE_UP:$=2;break;case p.PAGE_DOWN:$=-2;break}$!==null&&(N.preventDefault(),b($,s))}},X=He(i,l,n,v),T=t.createElement("div",Qe({ref:c,className:Ee(B,(r={},ee(r,"".concat(B,"-").concat(s+1),h),ee(r,"".concat(B,"-dragging"),k),r)),style:z(z({},X),M),onMouseDown:E,onTouchStart:E,onKeyDown:C,tabIndex:m?null:me(j,s),role:"slider","aria-valuemin":n,"aria-valuemax":v,"aria-valuenow":l,"aria-disabled":m,"aria-label":me(w,s),"aria-labelledby":me(R,s),"aria-valuetext":(f=me(L,s))===null||f===void 0?void 0:f(l)},g));return x&&(T=x(T,{index:s,prefixCls:o,value:l,dragging:k})),T}),bt=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],yt=t.forwardRef(function(e,c){var r=e.prefixCls,f=e.style,o=e.onStartMove,l=e.onOffsetChange,s=e.values,y=e.handleRender,M=e.draggingIndex,x=Je(e,bt),k=t.useRef({});return t.useImperativeHandle(c,function(){return{focus:function(g){var u;(u=k.current[g])===null||u===void 0||u.focus()}}}),t.createElement(t.Fragment,null,s.map(function(b,g){return t.createElement(ht,Qe({ref:function(n){n?k.current[g]=n:delete k.current[g]},dragging:M===g,prefixCls:r,style:me(f,g),key:g,value:b,valueIndex:g,onStartMove:o,onOffsetChange:l,render:y},x))}))});function ze(e){var c="touches"in e?e.touches[0]:e;return{pageX:c.pageX,pageY:c.pageY}}function Ct(e,c,r,f,o,l,s,y,M){var x=t.useState(null),k=q(x,2),b=k[0],g=k[1],u=t.useState(-1),n=q(u,2),v=n[0],i=n[1],m=t.useState(r),a=q(m,2),h=a[0],j=a[1],w=t.useState(r),R=q(w,2),L=R[0],B=R[1],E=t.useRef(null),C=t.useRef(null);t.useEffect(function(){v===-1&&j(r)},[r,v]),t.useEffect(function(){return function(){document.removeEventListener("mousemove",E.current),document.removeEventListener("mouseup",C.current),document.removeEventListener("touchmove",E.current),document.removeEventListener("touchend",C.current)}},[]);var X=function(_,P){h.some(function(O,J){return O!==_[J]})&&(P!==void 0&&g(P),j(_),s(_))},T=function(_,P){if(_===-1){var O=L[0],J=L[L.length-1],ge=f-O,he=o-J,A=P*(o-f);A=Math.max(A,ge),A=Math.min(A,he);var ae=l(O+A);A=ae-O;var re=L.map(function(se){return se+A});X(re)}else{var I=(o-f)*P,ne=te(h);ne[_]=L[_];var ce=M(ne,I,_,"dist");X(ce.values,ce.value)}},U=t.useRef(T);U.current=T;var N=function(_,P){_.stopPropagation();var O=r[P];i(P),g(O),B(r);var J=ze(_),ge=J.pageX,he=J.pageY,A=function(I){I.preventDefault();var ne=ze(I),ce=ne.pageX,se=ne.pageY,be=ce-ge,ye=se-he,Ce=e.current.getBoundingClientRect(),Se=Ce.width,Q=Ce.height,G;switch(c){case"btt":G=-ye/Q;break;case"ttb":G=ye/Q;break;case"rtl":G=-be/Se;break;default:G=be/Se}U.current(P,G)},ae=function re(I){I.preventDefault(),document.removeEventListener("mouseup",re),document.removeEventListener("mousemove",A),document.removeEventListener("touchend",re),document.removeEventListener("touchmove",A),E.current=null,C.current=null,i(-1),y()};document.addEventListener("mouseup",ae),document.addEventListener("mousemove",A),document.addEventListener("touchend",ae),document.addEventListener("touchmove",A),E.current=A,C.current=ae},$=t.useMemo(function(){var K=te(r).sort(function(P,O){return P-O}),_=te(h).sort(function(P,O){return P-O});return K.every(function(P,O){return P===_[O]})?h:r},[r,h]);return[v,b,$,N]}function St(e){var c=e.prefixCls,r=e.style,f=e.start,o=e.end,l=e.index,s=e.onStartMove,y=t.useContext(le),M=y.direction,x=y.min,k=y.max,b=y.disabled,g=y.range,u="".concat(c,"-track"),n=Pe(f,x,k),v=Pe(o,x,k),i=function(h){!b&&s&&s(h,-1)},m={};switch(M){case"rtl":m.right="".concat(n*100,"%"),m.width="".concat(v*100-n*100,"%");break;case"btt":m.bottom="".concat(n*100,"%"),m.height="".concat(v*100-n*100,"%");break;case"ttb":m.top="".concat(n*100,"%"),m.height="".concat(v*100-n*100,"%");break;default:m.left="".concat(n*100,"%"),m.width="".concat(v*100-n*100,"%")}return t.createElement("div",{className:Ee(u,g&&"".concat(u,"-").concat(l+1)),style:z(z({},m),r),onMouseDown:i,onTouchStart:i})}function Mt(e){var c=e.prefixCls,r=e.style,f=e.values,o=e.startPoint,l=e.onStartMove,s=t.useContext(le),y=s.included,M=s.range,x=s.min,k=t.useMemo(function(){if(!M){if(f.length===0)return[];var b=o??x,g=f[0];return[{start:Math.min(b,g),end:Math.max(b,g)}]}for(var u=[],n=0;n<f.length-1;n+=1)u.push({start:f[n],end:f[n+1]});return u},[f,M,o,x]);return y?k.map(function(b,g){var u=b.start,n=b.end;return t.createElement(St,{index:g,prefixCls:c,style:me(r,g),start:u,end:n,key:g,onStartMove:l})}):null}function kt(e){var c=e.prefixCls,r=e.style,f=e.children,o=e.value,l=e.onClick,s=t.useContext(le),y=s.min,M=s.max,x=s.direction,k=s.includedStart,b=s.includedEnd,g=s.included,u="".concat(c,"-text"),n=He(x,o,y,M);return t.createElement("span",{className:Ee(u,ee({},"".concat(u,"-active"),g&&k<=o&&o<=b)),style:z(z({},n),r),onMouseDown:function(i){i.stopPropagation()},onClick:function(){l(o)}},f)}function Et(e){var c=e.prefixCls,r=e.marks,f=e.onClick,o="".concat(c,"-mark");return r.length?t.createElement("div",{className:o},r.map(function(l){var s=l.value,y=l.style,M=l.label;return t.createElement(kt,{key:s,prefixCls:o,style:y,value:s,onClick:f},M)})):null}function xt(e){var c=e.prefixCls,r=e.value,f=e.style,o=e.activeStyle,l=t.useContext(le),s=l.min,y=l.max,M=l.direction,x=l.included,k=l.includedStart,b=l.includedEnd,g="".concat(c,"-dot"),u=x&&k<=r&&r<=b,n=z(z({},He(M,r,s,y)),typeof f=="function"?f(r):f);return u&&(n=z(z({},n),typeof o=="function"?o(r):o)),t.createElement("span",{className:Ee(g,ee({},"".concat(g,"-active"),u)),style:n})}function Rt(e){var c=e.prefixCls,r=e.marks,f=e.dots,o=e.style,l=e.activeStyle,s=t.useContext(le),y=s.min,M=s.max,x=s.step,k=t.useMemo(function(){var b=new Set;if(r.forEach(function(u){b.add(u.value)}),f&&x!==null)for(var g=y;g<=M;)b.add(g),g+=x;return Array.from(b)},[y,M,x,f,r]);return t.createElement("div",{className:"".concat(c,"-step")},k.map(function(b){return t.createElement(xt,{prefixCls:c,key:b,value:b,style:o,activeStyle:l})}))}function $t(e,c,r,f,o,l){var s=t.useCallback(function(u){var n=isFinite(u)?u:e;return n=Math.min(c,u),n=Math.max(e,n),n},[e,c]),y=t.useCallback(function(u){if(r!==null){var n=e+Math.round((s(u)-e)/r)*r,v=function(h){return(String(h).split(".")[1]||"").length},i=Math.max(v(r),v(c),v(e)),m=Number(n.toFixed(i));return e<=m&&m<=c?m:null}return null},[r,e,c,s]),M=t.useCallback(function(u){var n=s(u),v=f.map(function(a){return a.value});r!==null&&v.push(y(u)),v.push(e,c);var i=v[0],m=c-e;return v.forEach(function(a){var h=Math.abs(n-a);h<=m&&(i=a,m=h)}),i},[e,c,f,r,s,y]),x=function u(n,v,i){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof v=="number"){var a,h=n[i],j=h+v,w=[];f.forEach(function(C){w.push(C.value)}),w.push(e,c),w.push(y(h));var R=v>0?1:-1;m==="unit"?w.push(y(h+R*r)):w.push(y(j)),w=w.filter(function(C){return C!==null}).filter(function(C){return v<0?C<=h:C>=h}),m==="unit"&&(w=w.filter(function(C){return C!==h}));var L=m==="unit"?h:j;a=w[0];var B=Math.abs(a-L);if(w.forEach(function(C){var X=Math.abs(C-L);X<B&&(a=C,B=X)}),a===void 0)return v<0?e:c;if(m==="dist")return a;if(Math.abs(v)>1){var E=te(n);return E[i]=a,u(E,v-R,i,m)}return a}else{if(v==="min")return e;if(v==="max")return c}},k=function(n,v,i){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",a=n[i],h=x(n,v,i,m);return{value:h,changed:h!==a}},b=function(n){return l===null&&n===0||typeof l=="number"&&n<l},g=function(n,v,i){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",a=n.map(M),h=a[i],j=x(a,v,i,m);if(a[i]=j,o===!1){var w=l||0;i>0&&a[i-1]!==h&&(a[i]=Math.max(a[i],a[i-1]+w)),i<a.length-1&&a[i+1]!==h&&(a[i]=Math.min(a[i],a[i+1]-w))}else if(typeof l=="number"||l===null){for(var R=i+1;R<a.length;R+=1)for(var L=!0;b(a[R]-a[R-1])&&L;){var B=k(a,1,R);a[R]=B.value,L=B.changed}for(var E=i;E>0;E-=1)for(var C=!0;b(a[E]-a[E-1])&&C;){var X=k(a,-1,E-1);a[E-1]=X.value,C=X.changed}for(var T=a.length-1;T>0;T-=1)for(var U=!0;b(a[T]-a[T-1])&&U;){var N=k(a,-1,T-1);a[T-1]=N.value,U=N.changed}for(var $=0;$<a.length-1;$+=1)for(var K=!0;b(a[$+1]-a[$])&&K;){var _=k(a,1,$+1);a[$+1]=_.value,K=_.changed}}return{value:a[i],values:a}};return[M,g]}var Lt=t.forwardRef(function(e,c){var r,f=e.prefixCls,o=f===void 0?"rc-slider":f,l=e.className,s=e.style,y=e.disabled,M=y===void 0?!1:y,x=e.keyboard,k=x===void 0?!0:x,b=e.autoFocus,g=e.onFocus,u=e.onBlur,n=e.min,v=n===void 0?0:n,i=e.max,m=i===void 0?100:i,a=e.step,h=a===void 0?1:a,j=e.value,w=e.defaultValue,R=e.range,L=e.count,B=e.onChange,E=e.onBeforeChange,C=e.onAfterChange,X=e.allowCross,T=X===void 0?!0:X,U=e.pushable,N=U===void 0?!1:U,$=e.draggableTrack,K=e.reverse,_=e.vertical,P=e.included,O=P===void 0?!0:P,J=e.startPoint,ge=e.trackStyle,he=e.handleStyle,A=e.railStyle,ae=e.dotStyle,re=e.activeDotStyle,I=e.marks,ne=e.dots,ce=e.handleRender,se=e.tabIndex,be=se===void 0?0:se,ye=e.ariaLabelForHandle,Ce=e.ariaLabelledByForHandle,Se=e.ariaValueTextFormatterForHandle,Q=t.useRef(),G=t.useRef(),xe=t.useMemo(function(){return _?K?"ttb":"btt":K?"rtl":"ltr"},[K,_]),Y=t.useMemo(function(){return isFinite(v)?v:0},[v]),ve=t.useMemo(function(){return isFinite(m)?m:100},[m]),ue=t.useMemo(function(){return h!==null&&h<=0?1:h},[h]),Ve=t.useMemo(function(){return N===!0?ue:N>=0?N:!1},[N,ue]),Re=t.useMemo(function(){var D=Object.keys(I||{});return D.map(function(S){var d=I[S],H={value:Number(S)};return d&&dt(d)==="object"&&!t.isValidElement(d)&&("label"in d||"style"in d)?(H.style=d.style,H.label=d.label):H.label=d,H}).filter(function(S){var d=S.label;return d||typeof d=="number"}).sort(function(S,d){return S.value-d.value})},[I]),Ze=$t(Y,ve,ue,Re,T,Ve),Oe=q(Ze,2),$e=Oe[0],Te=Oe[1],pe=ft(w,{value:j}),Ne=q(pe,2),V=Ne[0],et=Ne[1],W=t.useMemo(function(){var D=V==null?[]:Array.isArray(V)?V:[V],S=q(D,1),d=S[0],H=d===void 0?Y:d,F=V===null?[]:[H];if(R){if(F=te(D),L||V===void 0){var fe=L>=0?L+1:2;for(F=F.slice(0,fe);F.length<fe;){var ie;F.push((ie=F[F.length-1])!==null&&ie!==void 0?ie:Y)}}F.sort(function(Z,Me){return Z-Me})}return F.forEach(function(Z,Me){F[Me]=$e(Z)}),F},[V,R,Y,L,$e]),Fe=t.useRef(W);Fe.current=W;var oe=function(S){return R?S:S[0]},we=function(S){var d=te(S).sort(function(H,F){return H-F});B&&!mt(d,Fe.current,!0)&&B(oe(d)),et(d)},Ae=function(S){if(!M){var d=0,H=ve-Y;W.forEach(function(fe,ie){var Z=Math.abs(S-fe);Z<=H&&(H=Z,d=ie)});var F=te(W);F[d]=S,R&&!W.length&&L===void 0&&F.push(S),E==null||E(oe(F)),we(F),C==null||C(oe(F))}},tt=function(S){S.preventDefault();var d=G.current.getBoundingClientRect(),H=d.width,F=d.height,fe=d.left,ie=d.top,Z=d.bottom,Me=d.right,We=S.clientX,qe=S.clientY,ke;switch(xe){case"btt":ke=(Z-qe)/F;break;case"ttb":ke=(qe-ie)/F;break;case"rtl":ke=(Me-We)/H;break;default:ke=(We-fe)/H}var vt=Y+ke*(ve-Y);Ae($e(vt))},at=t.useState(null),Be=q(at,2),De=Be[0],Xe=Be[1],rt=function(S,d){if(!M){var H=Te(W,S,d);E==null||E(oe(W)),we(H.values),C==null||C(oe(H.values)),Xe(H.value)}};t.useEffect(function(){if(De!==null){var D=W.indexOf(De);D>=0&&Q.current.focus(D)}Xe(null)},[De]);var nt=t.useMemo(function(){return $&&ue===null?!1:$},[$,ue]),ut=function(){C==null||C(oe(Fe.current))},ot=Ct(G,xe,W,Y,ve,$e,we,ut,Te),_e=q(ot,4),Ye=_e[0],it=_e[1],Le=_e[2],lt=_e[3],je=function(S,d){lt(S,d),E==null||E(oe(Fe.current))},Ke=Ye!==-1;t.useEffect(function(){if(!Ke){var D=W.lastIndexOf(it);Q.current.focus(D)}},[Ke]);var de=t.useMemo(function(){return te(Le).sort(function(D,S){return D-S})},[Le]),ct=t.useMemo(function(){return R?[de[0],de[de.length-1]]:[Y,de[0]]},[de,R,Y]),Ue=q(ct,2),Ie=Ue[0],Ge=Ue[1];t.useImperativeHandle(c,function(){return{focus:function(){Q.current.focus(0)},blur:function(){var S=document,d=S.activeElement;G.current.contains(d)&&(d==null||d.blur())}}}),t.useEffect(function(){b&&Q.current.focus(0)},[]);var st=t.useMemo(function(){return{min:Y,max:ve,direction:xe,disabled:M,keyboard:k,step:ue,included:O,includedStart:Ie,includedEnd:Ge,range:R,tabIndex:be,ariaLabelForHandle:ye,ariaLabelledByForHandle:Ce,ariaValueTextFormatterForHandle:Se}},[Y,ve,xe,M,k,ue,O,Ie,Ge,R,be,ye,Ce,Se]);return t.createElement(le.Provider,{value:st},t.createElement("div",{ref:G,className:Ee(o,l,(r={},ee(r,"".concat(o,"-disabled"),M),ee(r,"".concat(o,"-vertical"),_),ee(r,"".concat(o,"-horizontal"),!_),ee(r,"".concat(o,"-with-marks"),Re.length),r)),style:s,onMouseDown:tt},t.createElement("div",{className:"".concat(o,"-rail"),style:A}),t.createElement(Mt,{prefixCls:o,style:ge,values:de,startPoint:J,onStartMove:nt?je:null}),t.createElement(Rt,{prefixCls:o,marks:Re,dots:ne,style:ae,activeStyle:re}),t.createElement(yt,{ref:Q,prefixCls:o,style:he,values:Le,draggingIndex:Ye,onStartMove:je,onOffsetChange:rt,onFocus:g,onBlur:u,handleRender:ce}),t.createElement(Et,{prefixCls:o,marks:Re,onClick:Ae})))});export{Lt as S};
