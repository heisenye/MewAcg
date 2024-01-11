import{_ as x,f as d,T as _,B as m,e as h,j as l,d as a,c as o,F as g,b as u,k as r,a as t,t as s,n as f,i as y}from"./index-p3EK_-Ry.js";const w={name:"TheComics",components:{TheImage:d,TheIcon:_},props:{comicList:{type:Array,required:!0},emptyListMsg:{type:String}},setup(){return{BASE_URL:m,goBook:h}}},b={class:"absolute left-1/2 -translate-x-1/2 w-full max-w-4xl min-w-[300px] text-white px-1"},k={class:"card-body bg-primary rounded-b-2xl pt-4 px-4 pb-3"},T={class:"font-NotoSerif text-sm text-center tracking-wide sm:text-base whitespace-nowrap"},v={class:"text-xs font-Noto text-neutral-content"},L={class:"text-xs opacity-80 space-x-1 text-accent-content"},B={key:0,class:"relative top-20 text-lg text-center font-black font-base"};function C(I,N,n,c,S,V){const p=l("TheImage"),i=l("TheIcon");return a(),o("main",b,[(a(!0),o(g,null,u(n.comicList,e=>(a(),o("div",{key:e._id,class:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 inline-flex card mb-4 px-4 md:px-3 lg:px-2 align-top"},[r(p,{src:`${c.BASE_URL}/${e._id}/${e.coverImage.chapter}/${e.coverImage.page}.webp`,blur:!1,class:"cursor-pointer",onClick:A=>c.goBook(e._id)},null,8,["src","onClick"]),t("div",k,[t("h1",T,s(e.name),1),t("span",v,s(e.author),1),t("div",L,[r(i,{type:"eye",size:"xs"}),t("span",null,s(e.viewCount),1),f("   "),r(i,{type:"heart",size:"xs"}),t("span",null,s(e.favoriteCount),1)])])]))),128)),n.comicList.length===0&&n.emptyListMsg?(a(),o("h1",B,s(n.emptyListMsg),1)):y("",!0)])}const M=x(w,[["render",C]]);export{M as T};
