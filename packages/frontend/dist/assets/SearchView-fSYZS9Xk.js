import{_ as w,p as y,T as S,V as C,R as T,q as B,r,s as q,N as H,o as N,ab as V,X as j,c as b,k as i,x as f,a as s,F as _,b as z,i as p,m as R,M as D,j as d,d as h,y as O,z as I,$ as M,a0 as E,t as F}from"./index-DxfYYbLv.js";import{T as K}from"./TheComics-6rioDG2Q.js";const L=[{id:"name",label:"标题"},{id:"tag",label:"标签"},{id:"author",label:"作者"}],U={name:"SearchView",components:{TheButton:y,TheIcon:S,TheComics:K,TheNavigation:C,RouterLink:T},setup(){const c=B(),a=Object.keys(c.query)[0],o=Object.values(c.query)[0]?r(Object.values(c.query)[0]):r(""),t=q(()=>!o.value.trim()),g=r(!1),n=r(a||"name"),l=r([]);H(()=>Object.values(c.query)[0],e=>{o.value=String(e)});const u=r([]);return N(async()=>{if(o.value.trim()){const e=await V(o.value,n.value);u.value=e.data}g.value=!0}),{goBack:j,route:c,searchTypes:L,searchType:n,keyword:o,searchComics:u,isSearchDisabled:t,isRequestCompleted:g,searchSettingCheckBoxes:l,searchHandler:()=>{o.value.trim()&&D(o.value,n.value)},checkSearchSettingHandler:e=>{l.value.forEach(m=>{m!==e.target&&(m.checked=!1)}),n.value=e.target.value},isSearchSettingChecked:e=>n.value===e}}},X=s("span",{class:"text-2xl 3xl:text-3xl"},"<",-1),A=[X],G={class:"relative flex-grow flex items-center pr-2 font-Noto"},J={class:"z-10 fixed top-16 py-0 navbar bg-primary rounded-b-box flex-col font-base"},P=s("div",{class:"relative top-0 my-0 w-full divider divider-accent"},null,-1),Q={class:"w-full mb-4 px-6 whitespace-nowrap flex-col items-start gap-2"},W=s("span",{class:"mt-3 text-accent-content font-black"},"搜寻设定",-1),Y={class:"w-full flex items-center gap-3"},Z=["checked","value","id"],$=["for"],ee={key:0,class:"absolute top-80 text-xl text-center w-full text-white font-black font-base"};function te(c,a,o,t,g,n){const l=d("TheIcon"),u=d("TheButton"),k=d("router-link"),v=d("TheNavigation"),x=d("TheComics");return h(),b("main",null,[i(v,{class:"z-10"},{left:f(()=>[s("button",{class:"text-white btn btn-sm btn-ghost tracking-wider font-medium text-lg px-4",onClick:a[0]||(a[0]=(...e)=>t.goBack&&t.goBack(...e))},A)]),right:f(()=>[s("div",G,[O(s("input",{type:"text",placeholder:"搜索标题或标签",class:"nav-input","onUpdate:modelValue":a[1]||(a[1]=e=>t.keyword=e),onKeyup:a[2]||(a[2]=M((...e)=>t.searchHandler&&t.searchHandler(...e),["enter"]))},null,544),[[I,t.keyword]]),i(l,{type:"magnifying-glass",class:"absolute left-4"}),i(u,{shape:"circle",type:"error",disabled:t.isSearchDisabled,class:"absolute right-4 size-6 shadow-md border-none",onClick:t.searchHandler},{default:f(()=>[i(l,{size:"sm",type:"arrow-right",class:E(["text-base",{"text-white":!t.isSearchDisabled}])},null,8,["class"])]),_:1},8,["disabled","onClick"])]),i(k,{to:{name:"home"},class:"relative btn 2xl:btn-lg btn-info btn-circle shadow-neutral shadow-md text-white"},{default:f(()=>[i(l,{type:"house",class:"router-icon"})]),_:1})]),_:1}),s("div",J,[P,s("div",Q,[W,s("div",Y,[(h(!0),b(_,null,z(t.searchTypes,e=>(h(),b(_,{key:e.id},[s("input",{ref_for:!0,ref:"searchSettingCheckBoxes",onChange:a[3]||(a[3]=(...m)=>t.checkSearchSettingHandler&&t.checkSearchSettingHandler(...m)),checked:t.isSearchSettingChecked(e.id),value:e.id,id:e.id,type:"checkbox",class:"checkbox checkbox-success checkbox-xs"},null,40,Z),s("label",{for:e.id,class:"mr-4"},F(e.label),9,$)],64))),128))])])]),t.isRequestCompleted&&t.searchComics.length===0&&Object.values(t.route.query)[0]?(h(),b("h1",ee," 什么也没有找见 ")):p("",!0),t.searchComics?(h(),R(x,{key:1,class:"top-48","comic-list":t.searchComics},null,8,["comic-list"])):p("",!0)])}const oe=w(U,[["render",te]]);export{oe as default};
