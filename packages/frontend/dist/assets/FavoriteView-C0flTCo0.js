import{T as n}from"./TheComics-Okfj7VCM.js";import{_ as r,f as i,r as a,o as m,m as p,B as l,e as f,n as u,j as _,k as d,d as C}from"./index-pwZJV_yM.js";const v={name:"FavoriteView",components:{TheComics:n,TheImage:i},setup(){const o=a(!1),s=a([]);return m(async()=>{const e=await p();e&&e.code===200&&(s.value=e.data),o.value=!0}),{BASE_URL:l,favoriteComics:s,isRequestCompleted:o,goBook:f}}};function h(o,s,e,t,k,B){const c=d("TheComics");return t.isRequestCompleted?(C(),u(c,{key:0,class:"top-40","empty-list-msg":"当前未收藏漫画哦","comic-list":t.favoriteComics},null,8,["comic-list"])):_("",!0)}const w=r(v,[["render",h]]);export{w as default};
