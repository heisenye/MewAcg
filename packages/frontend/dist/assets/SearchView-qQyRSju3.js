import{_ as y,p as g,T as b,U as v,q as C,r as c,s as T,M as B,o as S,a8 as q,W as N,c as u,k as s,x as l,i as x,m as V,a9 as F,j as r,d,a as i,y as z,z as D,aa as R,Y as I}from"./index-0FWMremO.js";import{T as M}from"./TheComics-wjw7dn4p.js";const K={name:"SearchView",components:{TheButton:g,TheIcon:b,TheComics:M,TheNavigation:v},setup(){const a=C(),t=a.query.keyword?c(a.query.keyword):c(""),m=T(()=>!t.value.trim()),e=c(!1);B(()=>a.query.keyword,o=>{t.value=String(o)});const h=c([]);return S(async()=>{if(t.value.trim()){const o=await q(t.value);h.value=o.data}e.value=!0}),{goBack:N,keyword:t,isSearchDisabled:m,searchComics:h,isRequestCompleted:e,searchFn:()=>{t.value.trim()&&F(t.value)}}}},U=i("span",{class:"text-2xl"},"<",-1),j=[U],E={class:"relative flex-grow flex items-center pr-2 font-Noto"},W={key:0,class:"absolute top-44 text-xl text-center w-full text-white font-black font-base"};function Y(a,t,m,e,h,p){const o=r("TheIcon"),w=r("TheButton"),f=r("router-link"),_=r("TheNavigation"),k=r("TheComics");return d(),u("main",null,[s(_,null,{left:l(()=>[i("button",{class:"text-white btn btn-sm btn-ghost tracking-wider font-medium text-lg px-4",onClick:t[0]||(t[0]=(...n)=>e.goBack&&e.goBack(...n))},j)]),right:l(()=>[i("div",E,[z(i("input",{type:"text",placeholder:"搜索标题或标签",class:"nav-input","onUpdate:modelValue":t[1]||(t[1]=n=>e.keyword=n),onKeyup:t[2]||(t[2]=R((...n)=>e.searchFn&&e.searchFn(...n),["enter"]))},null,544),[[D,e.keyword]]),s(o,{type:"magnifying-glass",class:"absolute left-4"}),s(w,{shape:"circle",type:"error",disabled:e.isSearchDisabled,class:"absolute right-4 size-6 shadow-md border-none"},{default:l(()=>[s(o,{size:"sm",type:"arrow-right",class:I(["text-base",{"text-white":!e.isSearchDisabled}]),onClick:e.searchFn},null,8,["class","onClick"])]),_:1},8,["disabled"])]),s(f,{to:{name:"home"},class:"relative btn btn-info btn-circle shadow-neutral shadow-md text-white"},{default:l(()=>[s(o,{type:"house",class:"lg:text-lg xl:text-xl 2xl:text-2xl"})]),_:1})]),_:1}),e.isRequestCompleted&&e.searchComics.length===0&&a.$route.query.keyword?(d(),u("h1",W," 什么也没有找见 ")):x("",!0),e.searchComics?(d(),V(k,{key:1,class:"top-20","comic-list":e.searchComics},null,8,["comic-list"])):x("",!0)])}const H=y(K,[["render",Y]]);export{H as default};
