import{_ as x,e as f,f as y,T as g,r as d,w as v,o as w,h as k,B as C,u as m,c as a,F as b,b as B,i as I,j as u,d as r,k as p,a as T,t as H}from"./index-NwoOo72q.js";const V={name:"HistoryView",methods:{goBook:f},components:{TheImage:y,TheIcon:g},setup(){const{history:s}=m,n=d(!1),o=d([]);return v(()=>{o.value=o.value.filter(e=>s.value.includes(e._id))}),w(async()=>{const e=await k(s.value);if(e&&e.code===200){const l=e.data;o.value=l.sort((i,c)=>s.value.indexOf(c._id)-s.value.indexOf(i._id))}n.value=!0}),{BASE_URL:C,useHistory:m,historyComics:o,isRequestComplete:n}}},E={class:"relative top-40 mx-auto w-full max-w-screen-2xl min-w-[300px] px-1 space-y-4 text-white"},R={class:"card-body text-center bg-primary rounded-b-2xl font-base py-6 px-0 whitespace-nowrap"},S={key:0,class:"relative top-20 text-lg text-center font-base font-black"};function $(s,n,o,e,l,i){const c=u("TheImage"),_=u("TheIcon");return r(),a("main",E,[(r(!0),a(b,null,B(e.historyComics,t=>(r(),a("div",{key:t._id,class:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 card inline-flex px-4 md:px-3 lg:px-2 indicator"},[p(c,{blur:!1,class:"cursor-pointer",src:`${e.BASE_URL}/${t._id}/${t.coverImage.chapter}/${t.coverImage.page}.webp`,onClick:h=>i.goBook(t._id)},null,8,["src","onClick"]),p(_,{type:"circle-xmark",class:"indicator-item right-3 cursor-pointer fa-solid text-error",onClick:h=>e.useHistory.removeHistoryFromStorage(t._id)},null,8,["onClick"]),T("div",R,H(t.name),1)]))),128)),e.isRequestComplete&&e.historyComics.length===0?(r(),a("h1",S," 当前未观看漫画哦 ")):I("",!0)])}const L=x(V,[["render",$]]);export{L as default};
