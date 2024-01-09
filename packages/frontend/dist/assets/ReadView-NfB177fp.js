import{_ as I,f as S,q as k,r as u,s as C,N as E,o as B,x as z,B as M,j as m,d as g,c as f,F as y,b as N,k as r,Z as R,a as i,t as b,V as W,T as $,p as L,$ as V,y as p,m as D,i as P,z as A,A as U}from"./index-c3TPtZRx.js";import{T as F}from"./TheModal-Z1zoT2_r.js";const j=(c,n)=>{let s;return function(...e){s&&clearTimeout(s),s=setTimeout(()=>{c.apply(this,e)},n)}},q={50:"w-1/2",60:"w-3/5",70:"w-[70%]",80:"w-4/5",90:"w-[90%]",100:"w-full"},H={name:"TheRead",components:{TheImage:S},props:{pages:{type:Number,required:!0},imageWidth:{type:String,default:"100"}},setup(c){const n=k(),{id:s,chapter:e}=n.params,d=u(0),h=u("0"),o=Array.from({length:c.pages},(a,v)=>`${v+1}.webp`),t=u([]),l=()=>{const a=new Date;d.value=a.getHours(),h.value=a.getMinutes().toString().padStart(2,"0")};l(),setInterval(l,2e4);const w=C(()=>q[c.imageWidth]),x=u("p1");E(x,a=>{localStorage.setItem(`${s}-${e}`,String(a))});const _=new IntersectionObserver((a,v)=>{a.forEach(T=>{T.intersectionRatio===1&&(x.value=T.target.id)})},{threshold:1});return B(()=>{t.value.forEach(a=>{_.observe(a)})}),z(()=>{t.value.forEach(a=>{_.unobserve(a)})}),{BASE_URL:M,comicPageList:o,id:s,chapter:e,hours:d,minutes:h,imageWidthClass:w,comicPages:t}}},O=["id"],Y={class:"fixed bottom-0 left-0 px-2 rounded bg-black opacity-80 text-sm text-white"};function Z(c,n,s,e,d,h){const o=m("TheImage");return g(),f(y,null,[(g(!0),f(y,null,N(e.comicPageList,(t,l)=>(g(),f("div",{ref_for:!0,ref:"comicPages",key:t,class:"relative mx-auto top-20 px-4 my-3 max-w-xl",id:`p${l+1}`},[r(o,{src:`${e.BASE_URL}/${e.id}/${e.chapter}/${t}`,lazy:!0,class:R([e.imageWidthClass,"mx-auto"])},null,8,["src","class"])],8,O))),128)),i("span",Y,b(e.hours)+":"+b(e.minutes),1)],64)}const G=I(H,[["render",Z]]),J={name:"ReadView",components:{TheRead:G,TheNavigation:W,TheImage:S,TheIcon:$,TheButton:L,TheModal:F},setup(){const c=k(),{id:n,chapter:s}=c.params,e=u(0),d=u(!1),h=u("100"),o=(()=>{let t=0;return j(()=>{const l=window.scrollY;l-t>0?d.value=!0:d.value=!1,t=l},100)})();return B(async()=>{const t=await V(n,s);e.value=t.data.pages,window.addEventListener("scroll",o)}),z(()=>{window.removeEventListener("scroll",o)}),{pages:e,isScrollingDown:d,imageWidth:h}}},K={class:"relative"},Q=i("div",{class:"w-full flex justify-between text-xs px-1"},[i("span",null,"|"),i("span",null,"|"),i("span",null,"|"),i("span",null,"|"),i("span",null,"|"),i("span",null,"|")],-1);function X(c,n,s,e,d,h){const o=m("TheIcon"),t=m("router-link"),l=m("TheButton"),w=m("TheModal"),x=m("TheNavigation"),_=m("TheRead");return g(),f("main",K,[r(x,{class:R([{"-translate-y-16":e.isScrollingDown},"z-50 transition-all shadow-md shadow-primary duration-500"])},{left:p(()=>[r(t,{to:{name:"book"},class:"relative btn btn-ghost text-white",replace:""},{default:p(()=>[r(o,{type:"arrow-left",size:"lg",class:"xl:text-xl 2xl:text-2xl"})]),_:1})]),right:p(()=>[r(l,{type:"ghost",shape:"circle",size:"md",onclick:"document.getElementById('resizeImageModal').showModal()"},{default:p(()=>[r(o,{type:"magnifying-glass-plus",size:"lg",class:"xl:text-xl 2xl:text-2xl text-white"})]),_:1}),r(w,{id:"resizeImageModal",class:"fixed top-8"},{default:p(()=>[A(i("input",{type:"range",min:"50",max:"100",value:"100",step:"10",class:"range range-info range-xs","onUpdate:modelValue":n[0]||(n[0]=a=>e.imageWidth=a)},null,512),[[U,e.imageWidth]]),Q]),_:1}),r(t,{to:{name:"home"},class:"relative btn btn-ghost btn-circle text-white"},{default:p(()=>[r(o,{type:"house",size:"lg",class:"xl:text-xl 2xl:text-2xl"})]),_:1})]),_:1},8,["class"]),e.pages?(g(),D(_,{key:0,pages:e.pages,"image-width":e.imageWidth},null,8,["pages","image-width"])):P("",!0)])}const ae=I(J,[["render",X]]);export{ae as default};
