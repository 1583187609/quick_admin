import{j as u}from"./react-0fb5d424.js";import{y as d}from"./antd-d4271c6f.js";const c={bordered:!0,tableLayout:"fixed",size:"middle"},f={align:"center",className:"table-center"},g={size:"default",defaultPageSize:20,defaultCurrent:1,showSizeChanger:!0,showTotal:(e,s)=>`共 ${e} 条`,showQuickJumper:!0,pageSizeOptions:[10,20,30,40,50]},m=({columns:e=[],dataSource:s=[],rowKey:a="id",...n})=>{const r=Object.assign({},c,n),o=e==null?void 0:e.map(t=>Object.assign({},f,t)),i=s.map((t,l)=>(t[a]||(t[a]=l),t));return u.jsx(d,{rowKey:a,columns:o,dataSource:i,pagination:!1,...r})};export{m as B,c as a,g as b,f as d};
