import{a9 as e,ac as a,ad as t}from"./index-700f23c0.js";import{b as r}from"./mock-1fecdf25.js";import p from"./UploadAvatar-4f381ab7.js";import{d as s,$ as o,e as l,ai as d,o as n,P as u,Q as i,W as m,u as c,L as x}from"./@vue-2b5461a3.js";const b=s({name:"SystemUserAccountAddEdit",__name:"AddEdit",props:{id:{},pureText:{type:Boolean},refreshList:{}},setup(s){const b=s,{id:y}=b,f=o({gender:0,status:1,type:3,age:18}),g=l([{prop:"avatar",label:"头像",required:!1,type:"custom",extra:{tips:"只能上传.jpg,.png,.gif,.jpeg类型，且大小不超过1M"}},{prop:"nickname",label:"昵称",required:!1,attrs:{maxlength:16}},{prop:"name",label:"姓名",attrs:{maxlength:6}},{prop:"gender",label:"性别",type:"radio-group",options:"Gender",attrs:{type:"button"},extra:{span:12}},{prop:"age",label:"年龄",type:"input-number",extra:{span:12},attrs:{min:0,max:150}},{prop:"type",label:"角色类型",type:"select",required:!0,extra:{span:12},options:"RoleType"},{prop:"status",label:"启用状态",type:"radio-group",required:!0,extra:{span:12},options:"EnableStatus",attrs:{type:"button"}},{prop:"phone",label:"电话",required:!0,extra:{span:12,valid:"phone"}},{prop:"psd",label:"密码",required:!0,extra:{span:12,valid:"password"}},{prop:"address",label:"居住地址",required:!1,type:"cascader",options:"Region",attrs:{style:"width: 100%"}},{prop:"remark",label:"备注",attrs:{type:"textarea"}}]);return y&&e({id:y}).then((e=>{Object.assign(f,e)})),(e,s)=>{const o=d("BaseForm");return n(),u(o,{request:c(r),modelValue:f,"onUpdate:modelValue":s[0]||(s[0]=e=>f=e),style:x({width:e.pureText?"350px":"550px"}),fields:g.value,pureText:e.pureText,fetch:c(y)?c(a):c(t),fetchSuccess:e.refreshList},{avatar:i((({form:e})=>[m(p,{modelValue:e.avatar,"onUpdate:modelValue":a=>e.avatar=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["request","modelValue","style","fields","pureText","fetch","fetchSuccess"])}}});export{b as _};
