import{_ as x,e as y,f,T as g,r as m,o as v,h as C,B as k,c as a,F as w,b,i as p,u as B,j as _,d as n,k as u,a as I,t as H}from"./index-WPQsPB7g.js";const T={name:"HistoryView",methods:{goBook:y},components:{TheImage:f,TheIcon:g},setup(){const{history:r,removeHistoryFromStorage:l}=B,i=m(!1),e=m([]),d=o=>{l(o),e.value=e.value.filter(s=>s._id!==o)};return v(async()=>{const o=await C(r.value);if(o&&o.code===200){const s=o.data;e.value=s.sort((c,t)=>r.value.indexOf(t._id)-r.value.indexOf(c._id))}i.value=!0}),{BASE_URL:k,removeHistoryComic:d,historyComics:e,isRequestComplete:i}}},V={class:"relative top-40 mx-auto w-full max-w-screen-2xl min-w-[300px] px-1 space-y-4 text-white"},R={class:"card-body text-center bg-primary rounded-b-2xl font-base py-6 px-0 whitespace-nowrap"},S={key:1,class:"relative top-20 text-lg text-center font-base font-black"};function E(r,l,i,e,d,o){const s=_("TheImage"),c=_("TheIcon");return n(),a("main",V,[e.historyComics.length!==0?(n(!0),a(w,{key:0},b(e.historyComics,t=>(n(),a("div",{key:t._id,class:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 card inline-flex px-4 md:px-3 lg:px-2 indicator"},[u(s,{blur:!1,class:"cursor-pointer",src:`${e.BASE_URL}/${t._id}/${t.coverImage.chapter}/${t.coverImage.page}.webp`,onClick:h=>o.goBook(t._id)},null,8,["src","onClick"]),u(c,{type:"circle-xmark",class:"indicator-item right-3 cursor-pointer fa-solid text-error",onClick:h=>e.removeHistoryComic(t._id)},null,8,["onClick"]),I("div",R,H(t.name),1)]))),128)):p("",!0),e.isRequestComplete&&e.historyComics.length===0?(n(),a("h1",S," 当前未观看漫画哦 ")):p("",!0)])}const L=x(T,[["render",E]]);export{L as default};
