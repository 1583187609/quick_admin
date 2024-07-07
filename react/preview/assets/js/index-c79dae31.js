import{r as c,j as m}from"./react-0fb5d424.js";import{l as x}from"./lodash-a5a67b6f.js";import{c as X,u as Y}from"./@wangeditor-f081fcca.js";import{s as h,l as z}from"./index-fad10ce8.js";import"./dayjs-e40d92c3.js";import"./@babel-25fffde3.js";import"./react-dom-0d6193a3.js";import"./scheduler-765c72db.js";import"./react-router-dom-57ec7c88.js";import"./react-router-460b03e0.js";import"./@remix-run-ac850e23.js";import"./react-redux-54c164ec.js";import"./use-sync-external-store-29364900.js";import"./mock-52f1b85d.js";import"./mockjs-9c967a30.js";import"./antd-e92fabd5.js";import"./rc-util-48ba7f71.js";import"./react-is-e8e5dbb3.js";import"./classnames-fe2c27d8.js";import"./rc-resize-observer-745b2131.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-motion-eb90ae56.js";import"./@ant-design-595a63b1.js";import"./@emotion-c0b5c018.js";import"./stylis-c78c9806.js";import"./@ctrl-fb5a5473.js";import"./rc-picker-6e445fc6.js";import"./@rc-component-ed6c637d.js";import"./rc-tabs-3b6d1d00.js";import"./rc-dropdown-3ade4447.js";import"./rc-menu-83466686.js";import"./rc-overflow-114563da.js";import"./rc-trigger-8e81b561.js";import"./rc-align-3928b621.js";import"./dom-align-ecb06dd6.js";import"./rc-cascader-5bc29b89.js";import"./rc-select-3f77be03.js";import"./rc-virtual-list-27fe0724.js";import"./rc-tree-586f51e7.js";import"./rc-input-number-83428087.js";import"./rc-collapse-62224ade.js";import"./rc-drawer-f0808ac3.js";import"./rc-field-form-10847344.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-image-1fde4eb3.js";import"./rc-dialog-fa40b945.js";import"./rc-notification-3e0c56c9.js";import"./rc-tooltip-f3685bbd.js";import"./rc-rate-49702ee4.js";import"./rc-slider-a4dd6cf2.js";import"./rc-steps-fcee3d43.js";import"./rc-switch-9e1e6b4a.js";import"./rc-table-dcede9bc.js";import"./rc-pagination-88d89b42.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-d7b3fa29.js";import"./rc-input-3e170e62.js";import"./rc-textarea-3d294471.js";import"./rc-upload-215eca2a.js";import"./rc-progress-48fe049f.js";import"./@reduxjs-c09949f6.js";import"./redux-ea15d17b.js";import"./reselect-8f3bbdd7.js";import"./redux-thunk-f771c803.js";import"./axios-4a70c6fc.js";import"./qs-0173dd19.js";import"./side-channel-5b5a05bd.js";import"./get-intrinsic-45907aec.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-61637ca6.js";import"./has-57b382c3.js";import"./call-bind-c38f6426.js";import"./object-inspect-42714f7a.js";import"./vite-plugin-mock-d7a8ead1.js";import"./path-to-regexp-31db6522.js";function V(e){return e=Number(e)/1024,e>=1024?e=(e/1024).toFixed(2)+"MB":e=e.toFixed(2)+"kb",e}function v(e){return e.isEmpty()||e.getText()===""}function L(e=5*1024*1024){return{fieldName:"file",allowedFileTypes:["image/*"],maxFileSize:e,meta:{path:"/ums-admin/editor-image"},withCredentials:!0,customInsert(t,i){if(!t){h("系统异常","error");return}const{data:r,code:s,msg:p="上传失败"}=t;if(s!==200){h(p,"error");return}i(r==null?void 0:r.url,"","")},onError(t){const{size:i}=t;i>e&&h(`图片大小不能超过${V(e)}`,"warning")}}}function tt(e="",t=[],i=[],r="color: red;",s="color: darkorange;"){const p=new RegExp(`(${t.join("|")})|(${i.join("|")})`,"gi");return e?e.replace(p,(a,f,b)=>`<span style="${t.includes(a)?r:s}">${a}</span>`):""}function et(e=""){const t=document.createElement("div");return t.innerHTML=e,t.innerText}function C(e={}){let t="";return t=Object.entries(e).map(([r,s],p)=>(r=r.replace(/([A-Z])/g,"-$1").toLowerCase(),`${r}:${s};`)).join(""),t}const rt="_tips_mzo10_16",k={"base-editor":"_base-editor_mzo10_11",tips:rt};let O="",j=!1;const R="",ot={wrong:{color:"red"},sens:{color:"darkorange"}},it=["header1","bold","indent","delIndent","justifyLeft","justifyRight","justifyCenter","justifyJustify","bulletedList","numberedList","uploadImage","redo","undo","fullScreen"],st={},mt={placeholder:"请输入内容",autoFocus:!1,MENU_CONF:{uploadImage:{}},customPaste(e,t){const{clipboardData:i}=t||{},r=(i==null?void 0:i.getData("text/plain"))||"";try{const s=e.getFragment();if(Array.isArray(s)&&s.some(f=>f.type==="table"))return e.insertText(r),t.preventDefault(),!1;const a=r.split("\r").map(f=>`<div>${(f||"").replace(/([]|\r|\n)/g,"")}</div>`).join("");e.dangerouslyInsertHtml(a)}catch{e.insertText(r.replace(/([]|\r)/g,""))}return t.preventDefault(),!1}},Ae=({className:e="",value:t="",onCreated:i,onChange:r,onBlur:s,onFocus:p,editorStyle:a={height:"300px"},toolbarKeys:f=it,maxLength:b,toolbarConfig:E={},editorConfig:D={},toolbarProps:U={},editorProps:Z={},showImgTips:M=!1,wordsList:n,wordsStyle:w,insertMenu:y})=>{var W,H,I,K;const[J,T]=c.useState(""),N=c.useRef(!1),[g,$]=c.useState(null),{wrong:F,sens:S}=x.merge({},ot,w),l=L(),_=l==null?void 0:l.allowedFileTypes.map(o=>o.split("/")[1]).join("、"),P=V(l==null?void 0:l.maxFileSize),u=x.merge({},st,E,{toolbarKeys:f}),q=x.merge({},mt,{onBlur(){j=!1,s==null||s()},onFocus(){j=!0,p==null||p()},MENU_CONF:{uploadImage:l}},D,{maxLength:b});c.useEffect(()=>{y==null||y()},[]),c.useEffect(()=>()=>{g&&(g.destroy(),$(null))},[g]),c.useEffect(()=>{if(!t)T(R);else{if(n&&!j){const{wrong:o,sens:d}=n;t=et(t),t=tt(t,o,d,C(F),C(S))}t.startsWith("<p>")||(t="<p>"+t),t.endsWith("</p>")||(t+="</p>"),T(t)}},[t,n]);function B(o){$(o),i==null||i(o)}const G=x.debounce(o=>{const d=v(o)?R:o.getHtml();if(O!==d){const A=o.getText();O=d,N.current?setTimeout(()=>{console.log("onChange--------------------Z"),r==null||r(d,A,o)},50):(console.log("onChange--------------------"),r==null||r(d,A,o))}},500),Q=c.useCallback(o=>{N.current=(o.ctrlKey||o.metaKey)&&o.key==="z"},[]);return z("keydown",Q),m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:`${e} ${k["base-editor"]}`,children:[!!((W=u.toolbarKeys)!=null&&W.length)&&m.jsx(X,{mode:"default",style:{borderBottom:"1px solid #ccc"},editor:g,defaultConfig:u,...U}),m.jsx(Y,{mode:"simple",style:a,value:J,onCreated:B,onChange:G,defaultConfig:q,...Z})]}),M&&((H=u==null?void 0:u.toolbarKeys)==null?void 0:H.includes("uploadImage"))&&m.jsxs("div",{className:k.tips,children:["注：",_==="*"?"":`图片只能上传${_}格式，`,"每张图片大小不能超过",P,"。"]}),!!n&&m.jsxs("div",{className:"f-sb-c mt-8",children:[m.jsxs("div",{className:"f-1",children:[m.jsx("span",{children:"疑似敏感词："}),m.jsx("span",{style:S,children:(I=n==null?void 0:n.sens)==null?void 0:I.join("、")})]}),m.jsxs("div",{className:"f-1",children:[m.jsx("span",{children:"疑似错别字："}),m.jsx("span",{style:F,children:(K=n==null?void 0:n.wrong)==null?void 0:K.join("、")})]})]})]})};export{Ae as default};
