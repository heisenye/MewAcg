import{_,e as f,f as x,r as d,w as h,o as g,h as v,B as y,u,c as a,F as w,b as k,i as C,j as b,d as r,k as B,a as m,t as H}from"./index-qFNUfYlZ.js";const I={name:"HistoryView",methods:{goBook:f},components:{TheImage:x},setup(){const{history:s}=u,n=d(!1),o=d([]);return h(()=>{o.value=o.value.filter(e=>s.value.includes(e._id))}),g(async()=>{const e=await v(s.value);if(e&&e.code===200){const l=e.data;o.value=l.sort((i,c)=>s.value.indexOf(c._id)-s.value.indexOf(i._id))}n.value=!0}),{BASE_URL:y,useHistory:u,historyComics:o,isRequestComplete:n}}},V={class:"relative top-40 mx-auto w-full max-w-screen-2xl min-w-[300px] px-1 space-y-4 text-white"},E=["onClick"],R={class:"card-body text-center bg-primary rounded-b-2xl font-base py-6 px-0 whitespace-nowrap"},S={key:0,class:"relative top-20 text-lg font-black text-center font-base"};function $(s,n,o,e,l,i){const c=b("TheImage");return r(),a("main",V,[(r(!0),a(w,null,k(e.historyComics,t=>(r(),a("div",{key:t._id,class:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 card inline-flex px-4 md:px-3 lg:px-2 indicator"},[B(c,{blur:!1,class:"cursor-pointer",src:`${e.BASE_URL}/${t._id}/${t.coverImage.chapter}/${t.coverImage.page}.webp`,onClick:p=>i.goBook(t._id)},null,8,["src","onClick"]),m("i",{class:"indicator-item cursor-pointer fa-solid fa-circle-xmark absolute right-2",onClick:p=>e.useHistory.removeHistoryFromStorage(t._id)},null,8,E),m("div",R,H(t.name),1)]))),128)),e.isRequestComplete&&e.historyComics.length===0?(r(),a("h1",S," 当前未观看漫画哦 ")):C("",!0)])}const L=_(I,[["render",$]]);export{L as default};
