import{_ as w,b as y,T as S,V as C,R as T,v as B,r,k as H,M as q,o as N,ae as V,X as z,c as f,f as i,w as b,d as s,F as x,e as R,m as p,p as j,L as D,h as d,i as h,z as O,A as I,$ as L,a0 as M,t as E}from"./index-CdcUHPY5.js";import{T as F}from"./TheComics-ZZftxZG_.js";const K=[{id:"name",label:"标题"},{id:"tag",label:"标签"},{id:"author",label:"作者"}],A={name:"SearchView",components:{TheButton:y,TheIcon:S,TheComics:F,TheNavigation:C,RouterLink:T},setup(){const c=B(),a=Object.keys(c.query)[0],o=Object.values(c.query)[0]?r(Object.values(c.query)[0]):r(""),t=H(()=>!o.value.trim()),g=r(!1),n=r(a||"name"),l=r([]);q(()=>Object.values(c.query)[0],e=>{o.value=String(e)});const u=r([]);return N(async()=>{if(o.value.trim()){const e=await V(o.value,n.value);u.value=e.data}g.value=!0}),{goBack:z,route:c,searchTypes:K,searchType:n,keyword:o,searchComics:u,isSearchDisabled:t,isRequestCompleted:g,searchSettingCheckBoxes:l,searchHandler:()=>{o.value.trim()&&D(o.value,n.value)},checkSearchSettingHandler:e=>{l.value.forEach(m=>{m!==e.target&&(m.checked=!1)}),n.value=e.target.value},isSearchSettingChecked:e=>n.value===e}}},U=s("span",{class:"text-2xl 3xl:text-3xl"},"<",-1),X=[U],G={class:"relative flex-grow flex items-center pr-2 font-Noto"},J={class:"z-10 fixed top-16 py-0 navbar bg-primary rounded-b-box flex-col font-base"},P=s("div",{class:"relative top-0 my-0 w-full divider divider-secondary"},null,-1),Q={class:"w-full mb-4 px-6 whitespace-nowrap flex-col items-start gap-2"},W=s("span",{class:"mt-3 text-accent-content font-black"},"搜寻设定",-1),Y={class:"w-full flex items-center gap-3"},Z=["checked","value","id"],$=["for"],ee={key:0,class:"absolute top-80 text-xl text-center w-full text-white font-black font-base"};function te(c,a,o,t,g,n){const l=d("TheIcon"),u=d("TheButton"),v=d("router-link"),k=d("TheNavigation"),_=d("TheComics");return h(),f("main",null,[i(k,{class:"z-10"},{left:b(()=>[s("button",{class:"text-white btn btn-sm btn-ghost tracking-wider font-medium text-lg px-4",onClick:a[0]||(a[0]=(...e)=>t.goBack&&t.goBack(...e))},X)]),right:b(()=>[s("div",G,[O(s("input",{type:"text",placeholder:"搜索标题或标签",class:"nav-input","onUpdate:modelValue":a[1]||(a[1]=e=>t.keyword=e),onKeyup:a[2]||(a[2]=L((...e)=>t.searchHandler&&t.searchHandler(...e),["enter"]))},null,544),[[I,t.keyword]]),i(l,{type:"magnifying-glass",class:"absolute left-4"}),i(u,{shape:"circle",type:"error",disabled:t.isSearchDisabled,class:"absolute right-4 size-6 shadow-md border-none",onClick:t.searchHandler},{default:b(()=>[i(l,{size:"sm",type:"arrow-right",class:M(["text-base",{"text-white":!t.isSearchDisabled}])},null,8,["class"])]),_:1},8,["disabled","onClick"])]),i(v,{to:{name:"home"},class:"relative btn 2xl:btn-lg btn-info btn-circle shadow-neutral shadow-md text-white"},{default:b(()=>[i(l,{type:"house",class:"router-icon"})]),_:1})]),_:1}),s("div",J,[P,s("div",Q,[W,s("div",Y,[(h(!0),f(x,null,R(t.searchTypes,e=>(h(),f(x,{key:e.id},[s("input",{ref_for:!0,ref:"searchSettingCheckBoxes",onChange:a[3]||(a[3]=(...m)=>t.checkSearchSettingHandler&&t.checkSearchSettingHandler(...m)),checked:t.isSearchSettingChecked(e.id),value:e.id,id:e.id,type:"checkbox",class:"checkbox checkbox-success checkbox-xs"},null,40,Z),s("label",{for:e.id,class:"mr-4"},E(e.label),9,$)],64))),128))])])]),t.isRequestCompleted&&t.searchComics.length===0&&Object.values(t.route.query)[0]?(h(),f("h1",ee," 什么也没有找见 ")):p("",!0),t.searchComics?(h(),j(_,{key:1,class:"top-48","comic-list":t.searchComics},null,8,["comic-list"])):p("",!0)])}const oe=w(A,[["render",te]]);export{oe as default};