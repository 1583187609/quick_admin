import{T as e,a0 as l,M as s}from"./@element-plus-df896130.js";import{aa as a,_ as t}from"./index-df51bfa3.js";import{u as o}from"./element-plus-568f2232.js";import{d as i,e as n,k as r,ai as p,aq as m,o as c,c as u,a as d,F as j,W as f,V as h,Q as v,R as k,u as x,K as b,a9 as y,bm as C,bk as g}from"./@vue-2b5461a3.js";import"./dayjs-70c6b0b9.js";import"./call-bind-2df1f9b5.js";import"./get-intrinsic-176af07e.js";import"./es-errors-c8ed318b.js";import"./has-symbols-456daba2.js";import"./has-proto-c2a23985.js";import"./function-bind-afbcd6f2.js";import"./hasown-c3b72c9b.js";import"./set-function-length-af5653fd.js";import"./define-data-property-80a6b8d7.js";import"./es-define-property-c2edbfb6.js";import"./gopd-991ce5b0.js";import"./has-property-descriptors-52e43c9d.js";import"./lodash-e3f0fdcb.js";import"./qs-349681aa.js";import"./side-channel-4fcbcfeb.js";import"./object-inspect-1fd817f8.js";import"./axios-b9284f1b.js";import"./pinia-5cbb4d0f.js";import"./mock-281f81b0.js";import"./mockjs-21e11712.js";import"./vue-router-27db6c8e.js";import"./nprogress-61860a65.js";import"./vite-plugin-mock-fcfbfb18.js";import"./path-to-regexp-83a43451.js";import"./vue-i18n-aaa7cda4.js";import"./@intlify-34459bb4.js";import"./xlsx-8a748b86.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-2ec33eb0.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";const V=e=>(C("data-v-f18883b6"),e=e(),g(),e),F={class:"ml-h"},B={key:1,class:"placeholder"},w={class:"list f-sb-fs-w all-hide-scroll f-1"},L=[V((()=>d("span",{class:"f-c-c",style:{height:"32px",width:"32px","font-size":"22px"}},"无",-1))),V((()=>d("span",{class:"text line-1"},"none",-1)))],_=["onClick"],A=t(i({__name:"IconPicker",props:{modelValue:{default:""}},emits:["update:modelValue"],setup(t,{emit:i}){const C=["Avatar","Briefcase","CaretTop","CaretRight","CaretBottom","CaretLeft","Checked","Comment","DCaret","Flag","Grid","Checked","Failed","List","Management","Menu","Histogram","Platform","Opportunity","Promotion","Shop","Stamp","TrendCharts","Ticket","Tools"],g=["Eleme","Expand","Fold","Select","SemiSelect","Share"],V=t,A=i,{formItem:S}=o(),T=n(""),z=n(!1),I=n("All"),W={All:[],Line:[],Filled:[],Bold:[]};Object.keys(e).filter((e=>{W.All.push(e),e.endsWith("Filled")||e.endsWith("Bold")||g.includes(e)||C.includes(e)?e.endsWith("Filled")||C.includes(e)?W.Filled.push(e):(e.endsWith(I.value)||g.includes(e))&&W.Bold.push(e):W.Line.push(e)}));const M=r((()=>{const e=W[I.value];return T.value?e.filter((e=>{const l=T.value.toLowerCase();return e.toLowerCase().includes(l)})):e})),P=r({get:()=>V.modelValue,set(e){A("update:modelValue",e),null==S||S.validate("change")}});function q(e){P.value=e,z.value=!1}return(e,t)=>{const o=p("BaseIcon"),i=p("el-tab-pane"),n=p("el-tabs"),r=p("el-input"),C=p("BaseCopy"),g=m("focus");return c(),u(j,null,[d("div",{onClick:t[0]||(t[0]=e=>z.value=!0),class:"icon-box f-c-c"},[P.value?(c(),u(j,{key:0},[f(o,{class:"line-1",style:{"line-height":"1"},size:"28",name:P.value},null,8,["name"]),d("span",F,h(P.value),1)],64)):(c(),u("span",B," 点击选择图标 "))]),f(a,{title:"选择图标",modelValue:z.value,"onUpdate:modelValue":t[5]||(t[5]=e=>z.value=e),footer:null},{default:v((()=>[f(n,{modelValue:I.value,"onUpdate:modelValue":t[1]||(t[1]=e=>I.value=e),class:"f-0",onTabClick:t[2]||(t[2]=e=>I.value=e.paneName)},{default:v((()=>[f(i,{label:"所有图标",name:"All"}),f(i,{label:"线框风格",name:"Line"}),f(i,{label:"加粗风格",name:"Bold"}),f(i,{label:"实底风格",name:"Filled"})])),_:1},8,["modelValue"]),k(f(r,{class:"search",placeholder:"请输入图标名称","prefix-icon":x(l),"suffix-icon":x(s),modelValue:T.value,"onUpdate:modelValue":t[3]||(t[3]=e=>T.value=e),tabindex:"1"},null,8,["prefix-icon","suffix-icon","modelValue"]),[[g]]),d("ul",w,[d("li",{onClick:t[4]||(t[4]=e=>q("")),class:b(["item f-c-c-c",{active:""==P.value}])},L,2),(c(!0),u(j,null,y(M.value,((e,l)=>(c(),u("li",{onClick:l=>q(e),class:b(["item f-c-c-c",{active:P.value==e}]),key:l},[f(o,{name:e,size:"28"},null,8,["name"]),f(C,{class:"text line-1",text:e,clickIconCopy:"",stop:""},null,8,["text"])],10,_)))),128)),(c(),u(j,null,y(9,((e,l)=>d("li",{class:"item f-c-c-c f-empty",key:l}))),64))])])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-f18883b6"]]);export{A as default};
