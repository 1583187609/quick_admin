var e,a,t;import{c as n}from"./index-df51bfa3.js";import"./dayjs-70c6b0b9.js";import"./lodash-e3f0fdcb.js";import{a as i}from"./_config-0a862e30.js";import{d as s,bd as r,k as g,o as p,P as o,M as u,u as c,ai as d}from"./@vue-2b5461a3.js";const l=s({name:"Pagination",__name:"Pagination",props:r({currPage:{},pageSize:{},total:{},pageSizes:{}},Object.assign({pageSize:10,currPage:1,pageSizes:()=>[10,20,30,50,100]},null==(t=null==(a=null==(e=n)?void 0:e.BaseCrud)?void 0:a._components)?void 0:t.Pagination)),emits:["update:currPage","update:pageSize","update:sizeChange","update:currentChange"],setup(e,{emit:a}){const t=e,n=a,s=g({get:()=>t.currPage,set:e=>n("update:currPage",e)}),r=g({get:()=>t.pageSize,set:e=>n("update:pageSize",e)});return(e,a)=>{const t=d("el-pagination");return p(),o(t,u({class:"f-c-c mt-h f-0",currentPage:s.value,"onUpdate:currentPage":a[0]||(a[0]=e=>s.value=e),pageSize:r.value,"onUpdate:pageSize":a[1]||(a[1]=e=>r.value=e),total:e.total,pageSizes:e.pageSizes,onSizeChange:a[2]||(a[2]=e=>n("update:sizeChange",e)),onCurrentChange:a[3]||(a[3]=e=>n("update:currentChange",e))},c(i)),null,16,["currentPage","pageSize","total","pageSizes"])}}});export{l as _};
