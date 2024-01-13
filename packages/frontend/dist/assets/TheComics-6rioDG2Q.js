import{_ as d,f as x,T as _,B as m,e as h,j as i,d as a,c as o,F as g,b as u,k as r,a as t,t as s,n as f,i as y}from"./index-DxfYYbLv.js";const b={name:"TheComics",components:{TheImage:x,TheIcon:_},props:{comicList:{type:Array,required:!0},emptyListMsg:{type:String}},setup(){return{BASE_URL:m,goBook:h}}},k={class:"absolute left-1/2 -translate-x-1/2 w-full max-w-4xl min-w-[300px] text-white px-1"},w={class:"card-body bg-primary rounded-b-2xl pt-4 px-4 pb-3"},T={class:"text-base text-center tracking-wide font-NotoSerif font-black"},v={class:"text-xs text-neutral-content font-Noto font-black"},L={class:"text-xs opacity-80 space-x-1 text-accent-content"},B={key:0,class:"relative top-20 text-lg text-center font-black font-base"};function C(I,N,n,c,S,V){const p=i("TheImage"),l=i("TheIcon");return a(),o("main",k,[(a(!0),o(g,null,u(n.comicList,e=>(a(),o("div",{key:e._id,class:"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 inline-flex card mb-4 px-4 md:px-3 lg:px-2 align-top"},[r(p,{src:`${c.BASE_URL}/${e._id}/${e.coverImage.chapter}/${e.coverImage.page}.webp`,blur:!1,class:"cursor-pointer",onClick:A=>c.goBook(e._id)},null,8,["src","onClick"]),t("div",w,[t("h1",T,s(e.name),1),t("span",v,s(e.author),1),t("div",L,[r(l,{type:"eye",size:"xs"}),t("span",null,s(e.viewCount),1),f("   "),r(l,{type:"heart",size:"xs"}),t("span",null,s(e.favoriteCount),1)])])]))),128)),n.comicList.length===0&&n.emptyListMsg?(a(),o("h1",B,s(n.emptyListMsg),1)):y("",!0)])}const M=d(b,[["render",C]]);export{M as T};
