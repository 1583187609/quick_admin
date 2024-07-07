import{r as _,j as d}from"./react-0fb5d424.js";import{l as $}from"./lodash-a5a67b6f.js";import{i as E,e as z,u as B,a as I,b as O,c as W,d as N,f as G,g as q,h as H,j as D,k as T,l as k,m as R,n as P}from"./echarts-37faf3f0.js";import{x as J,B as U}from"./antd-d4271c6f.js";import{J as K}from"./@ant-design-60842819.js";const p=[["#2EB7F5","#B8F2FF"],["#FFAA00","#FFE867"],["#F95741","#fdb498"],["#FFAA00","#FFE867"],["#2EB7F5","#B8F2FF"],["#F95741","#fdb498"]],x={axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#eee"}},axisLabel:{color:"#999",fontSize:12},nameTextStyle:{color:"#999"}},v={top:0,left:"center",color:"#666",fontSize:16},y=z;B([I,O,W,N,G,q,H,D,T,k,R,P]);let S=null;const M={title:{text:"ECharts 入门示例"},tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]},L=({className:t="",height:s="300px",width:e="100%",theme:o="macarons",option:l=M})=>{const r=_.useRef(null),a=$.merge({color:p.map(i=>i[0])},l);function n(){S.resize()}return _.useEffect(()=>(S=E(r==null?void 0:r.current,o),S.setOption(a,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[a]),d.jsx("div",{className:t,style:{height:s,width:e},ref:r})},Q={legend:{},tooltip:{trigger:"axis"},xAxis:{type:"category",...x},yAxis:{type:"value",...x},grid:{left:0,top:40,right:0,bottom:0,containLabel:!0}},V=[["product","2015","2016","2017"],["第一季度",43.3,85.8,93.7],["第二季度",83.1,73.4,55.1],["第三季度",86.4,65.2,82.5],["第四季度",72.4,53.9,39.1]];function A(t){return new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:p[t][0]},{offset:1,color:p[t][0]}])}const ut=({title:t,unit:s,data:e=V,smooth:o=!1,symbolSize:l=6,option:r,...a})=>{var u;const n=(e==null?void 0:e[0])||["product"],i=((u=n==null?void 0:n.slice(1))==null?void 0:u.map((m,h)=>({type:"line",symbolSize:l,smooth:o,lineStyle:{color:A(h)},itemStyle:{color:A(h)}})))||[],f=$.merge({},Q,{...t&&{title:{text:t,...v}},...s&&{yAxis:{name:s}},dataset:{source:e},series:i},r);return d.jsx(L,{option:f,...a})},C={legend:{},barWidth:16,barGap:"50%",tooltip:{trigger:"item"},xAxis:{type:"category",...x},yAxis:{type:"value",...x},grid:{left:0,top:30,right:0,bottom:0,containLabel:!0}},X=[["product","2015","2016","2017"],["第一季度",43.3,85.8,93.7],["第二季度",83.1,73.4,55.1],["第三季度",86.4,65.2,82.5],["第四季度",72.4,53.9,39.1]];function Y(t,s){return s?new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:p[t][0]},{offset:1,color:p[t][1]}]):e=>{const o=e.dataIndex;return new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:p[o][0]},{offset:1,color:p[o][1]}])}}const mt=({title:t,unit:s,data:e=X,option:o,...l})=>{var f;const r=(o==null?void 0:o.barWidth)||C.barWidth,a=e[0]||["product"],n=((f=a==null?void 0:a.slice(1))==null?void 0:f.map((u,m)=>({type:"bar",itemStyle:{borderRadius:[r/2,r/2,0,0],color:Y(m,a.length>2)},label:{show:!0,position:"top",color:"#666",fontSize:14}})))||[],i=$.merge({},C,{...t&&{title:{text:t,...v}},...s&&{yAxis:{name:s}},dataset:{source:e},series:n},o);return d.jsx(L,{option:i,...l})},Z={tooltip:{trigger:"item"},barWidth:12,barGap:"50%",grid:[{left:0,width:"47%",bottom:30,top:40,containLabel:!0},{right:0,width:"47%",bottom:30,top:40,containLabel:!0}]},tt=[[["name","国内","国外"],["示例1",30,22],["示例2",14,42],["示例3",18,23]],[["name","国内","国外"],["示例1",23,62],["示例2",65,88],["示例3",66,48]]],ht=({titles:t=["标题1","标题2"],units:s=["元","元"],datas:e=tt,option:o,...l})=>{let[r,a,n,i,f]=[[],[],[],[],[]];e.forEach((h,c)=>{const w=t[c],b=s[c];a.push({gridIndex:c,left:c==0?"25%":"75%",bottom:0,textAlign:"center",text:`{label|${w}}  {amount|${m(h.slice(1))}${b}}`,textStyle:{rich:{label:{fontSize:14,fontWeight:"bold",color:"#666"},amount:{color:"#333",fontSize:15,fontWeight:"bold"}}}}),i.push({type:"category",gridIndex:c,...x}),f.push({type:"value",gridIndex:c,name:b,...x}),r.push({source:h});const j=h[0];for(let F=0;F<j.length-1;F++)n.push({type:"bar",xAxisIndex:c,yAxisIndex:c,datasetIndex:c,itemStyle:{color:new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:p[F][0]},{offset:1,color:p[F][1]}]),borderRadius:[6,6,0,0]},label:{show:!0,position:"top",color:"#666",fontSize:14}})});const u=$.merge({},Z,{title:a,grid:[{left:0,width:"47%",bottom:30,top:40,containLabel:!0},{right:0,width:"47%",bottom:30,top:40,containLabel:!0}],xAxis:i,yAxis:f,dataset:r,series:n});function m(h){let c=0;return h.forEach(w=>{for(let b=1;b<w.length;b++)c+=Number(w[b])}),c}return d.jsx(L,{option:u,...l})},et={tooltip:{},legend:{itemGap:20,itemHeight:12,itemWidth:12,color:"#999",fontSize:14,rich:{label:{width:150},value:{color:"#333",fontWeight:"bold",width:100}}}},ot=[["主要负责人用车",150],["其他公务用车",149],["经营和业务保险专用车",150]];function st(){return{legend:{x:"5%",y:"center",orient:"vertical"}}}const gt=({title:t,unit:s,data:e=ot,hollow:o=!0,radius:l=[72,93],center:r=["75%","50%"],option:a,...n})=>{const i=$.merge({},et,{...t&&{title:{text:t,...v}},...o?st():{},dataset:{source:e},series:[{type:"pie",...o?f():{},itemStyle:{borderColor:"#fff",borderWidth:2,color:u=>{const m=u.dataIndex;return new y.graphic.LinearGradient(0,0,0,1,[{offset:0,color:p[m][0]},{offset:1,color:p[m][1]}])}}}]},a);function f(){let u=0;return e.forEach(m=>{u+=Number(m[1])}),{radius:l,center:r,label:{show:!0,position:"center",color:"#4c4a4a",formatter:`{value|${u}}
\r{label|车辆总数${s?`(${s})`:""}}`,rich:{value:{color:"#333",fontSize:24,lineHeight:24,fontWeight:"bold"},label:{color:"#999",fontSize:14,lineHeight:24,fontWeight:"bold"}},emphasis:{show:!0}}}}return d.jsx(L,{option:i,...n})},rt="_head_ql0m8_17",at="_title_ql0m8_21",nt="_badge_ql0m8_34",it="_body_ql0m8_41",g={"base-section":"_base-section_ql0m8_11",head:rt,title:at,badge:nt,"fold-icon":"_fold-icon_ql0m8_37",body:it},bt=({className:t="",style:s,title:e,right:o,count:l=0,overflowCount:r=99,fold:a,children:n})=>{const[i,f]=_.useState(!1);return d.jsxs("div",{style:s,className:`${t} ${g["base-section"]}`,children:[d.jsxs("header",{className:`${g.head} f-sb-c`,children:[d.jsx("div",{className:`${g.title} f-fs-c`,children:e}),!!l&&d.jsx(J,{className:g.badge,count:l,overflowCount:r}),o,a&&d.jsx(U,{className:`${g["fold-btn"]} ml-h`,type:"link",onClick:()=>f(!i),icon:d.jsx(K,{className:`${g["fold-icon"]} ${i?"":"rotate-180"}`})})]}),d.jsx("div",{className:`${g.body}`,style:{maxHeight:i?"0":"100vh",padding:i?"0 16px":"8px 16px"},children:n})]})};export{bt as B,ut as L,gt as P,L as a,mt as b,ht as c};
