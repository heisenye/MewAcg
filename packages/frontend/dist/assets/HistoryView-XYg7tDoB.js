import{_ as f,e as g,f as v,T as y,r as x,o as b,h as k,B as C,c as r,a as n,t as d,F as w,b as I,i as B,u as T,j as p,d as i,k as u}from"./index-WvGktPry.js";const H={name:"HistoryView",methods:{goBook:g},components:{TheImage:v,TheIcon:y},setup(){const{history:a,removeHistoryFromStorage:m}=T,c=x(!1),e=x([]),_=o=>{m(o),e.value=e.value.filter(s=>s._id!==o)};return b(async()=>{const o=await k(a.value);if(o&&o.code===200){const s=o.data;e.value=s.sort((l,t)=>a.value.indexOf(t._id)-a.value.indexOf(l._id))}c.value=!0}),{BASE_URL:C,removeHistoryComic:_,historyComics:e,isRequestCompleted:c}}},S={class:"relative top-40 mx-auto w-full max-w-screen-2xl min-w-[300px] px-1 text-white"},N={class:"divider divider-secondary"},V={class:"card-body text-xs text-center bg-primary rounded-b-xl py-4 px-0 font-bold font-NotoSerif"},R={class:"2xl:text-base break-all"},$={class:"text-neutral-content font-Noto"},E={key:0,class:"relative top-20 text-lg text-center font-base font-black"};function F(a,m,c,e,_,o){const s=p("TheImage"),l=p("TheIcon");return i(),r("main",S,[n("div",N,d(new Date().toISOString().split("T")[0]),1),(i(!0),r(w,null,I(e.historyComics,t=>(i(),r("div",{key:t._id,class:"w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 card inline-flex mb-4 px-2 md:px-3 lg:px-2 indicator align-top"},[u(s,{blur:!1,class:"cursor-pointer max-h-44 2xl:max-h-48 rounded-t-xl",src:`${e.BASE_URL}/${t._id}/${t.coverImage.chapter}/${t.coverImage.page}.webp`,onClick:h=>o.goBook(t._id)},null,8,["src","onClick"]),u(l,{type:"xmark",class:"indicator-item badge badge-error right-3 cursor-pointer fa-solid text-black",onClick:h=>e.removeHistoryComic(t._id)},null,8,["onClick"]),n("div",V,[n("span",R,d(t.name),1),n("span",$,d(t.author),1)])]))),128)),e.isRequestCompleted&&e.historyComics.length===0?(i(),r("h1",E," 当前未观看漫画哦 ")):B("",!0)])}const O=f(H,[["render",F]]);export{O as default};
