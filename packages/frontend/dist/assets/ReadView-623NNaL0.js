import{_ as I,a as S,v as k,r as h,k as R,M as C,o as B,y as z,B as E,h as p,i as x,c as w,F as y,e as $,f as i,a0 as M,d as c,t as b,V,T as W,b as D,a1 as L,a2 as N,w as _,p as P,m as A,G as U,z as F,A as O}from"./index-CdcUHPY5.js";import{T as j}from"./TheModal-DjNmprpP.js";const q=(d,o)=>{let n;return function(...e){n&&clearTimeout(n),n=setTimeout(()=>{d.apply(this,e)},o)}},G={50:"w-1/2",60:"w-3/5",70:"w-[70%]",80:"w-4/5",90:"w-[90%]",100:"w-full"},H={name:"TheRead",components:{TheImage:S},props:{pages:{type:Number,required:!0},imageWidth:{type:String,default:"100"}},setup(d){const o=k(),{id:n,chapter:e}=o.params,m=h(0),g=h("0"),l=Array.from({length:d.pages},(a,v)=>`${v+1}.webp`),t=h([]),r=()=>{const a=new Date;m.value=a.getHours(),g.value=a.getMinutes().toString().padStart(2,"0")};r(),setInterval(r,2e4);const s=R(()=>G[d.imageWidth]),u=h("p1");C(u,a=>{localStorage.setItem(`${n}-${e}`,String(a))});const f=new IntersectionObserver((a,v)=>{a.forEach(T=>{T.intersectionRatio===1&&(u.value=T.target.id)})},{threshold:1});return B(()=>{t.value.forEach(a=>{f.observe(a)})}),z(()=>{t.value.forEach(a=>{f.unobserve(a)})}),{BASE_URL:E,comicPageList:l,id:n,chapter:e,hours:m,minutes:g,imageWidthClass:s,comicPages:t}}},Y=["id"],J={class:"fixed bottom-0 left-0 px-2 rounded bg-black opacity-80 text-sm text-white"};function K(d,o,n,e,m,g){const l=p("TheImage");return x(),w(y,null,[(x(!0),w(y,null,$(e.comicPageList,(t,r)=>(x(),w("div",{ref_for:!0,ref:"comicPages",key:t,class:"relative mx-auto top-20 px-4 my-3 max-w-xl",id:`p${r+1}`},[i(l,{src:`${e.BASE_URL}/${e.id}/${e.chapter}/${t}`,lazy:!0,class:M([e.imageWidthClass,"mx-auto"])},null,8,["src","class"])],8,Y))),128)),c("span",J,b(e.hours)+":"+b(e.minutes),1)],64)}const Q=I(H,[["render",K]]),X={name:"ReadView",components:{TheRead:Q,TheNavigation:V,TheImage:S,TheIcon:W,TheButton:D,TheModal:j},setup(){const d=k(),{id:o,chapter:n}=d.params,{token:e}=U,m=h(0),g=new Date().toISOString().split("T")[0],l=h("100"),t=h(!1),r=(()=>{let s=0;return q(()=>{const u=window.scrollY;u-s>0?t.value=!0:t.value=!1,s=u},100)})();return B(async()=>{const s=await L(o,n);s&&s.code===200&&(m.value=s.data.pages),document.title="",document.title=`${s.data.comicId.name} - ${s.data.chapter}`,window.addEventListener("scroll",r),e&&await N(o,g)}),z(()=>{window.removeEventListener("scroll",r)}),{pages:m,isScrollingDown:t,imageWidth:l}}},Z={class:"relative"},ee=c("div",{class:"w-full flex justify-between text-xs px-1"},[c("span",null,"|"),c("span",null,"|"),c("span",null,"|"),c("span",null,"|"),c("span",null,"|"),c("span",null,"|")],-1);function te(d,o,n,e,m,g){const l=p("TheIcon"),t=p("router-link"),r=p("TheButton"),s=p("TheModal"),u=p("TheNavigation"),f=p("TheRead");return x(),w("main",Z,[i(u,{class:M([{"-translate-y-16":e.isScrollingDown},"z-50 transition-all shadow-md shadow-primary duration-500"])},{left:_(()=>[i(t,{to:{name:"book"},class:"relative btn btn-ghost text-white",replace:""},{default:_(()=>[i(l,{type:"arrow-left",size:"lg",class:"xl:text-xl 2xl:text-2xl"})]),_:1})]),right:_(()=>[i(r,{type:"ghost",shape:"circle",size:"md",onclick:"document.getElementById('resizeImageModal').showModal()"},{default:_(()=>[i(l,{type:"magnifying-glass-plus",size:"lg",class:"xl:text-xl 2xl:text-2xl text-white"})]),_:1}),i(s,{id:"resizeImageModal",class:"fixed top-8"},{default:_(()=>[F(c("input",{type:"range",min:"50",max:"100",value:"100",step:"10",class:"range range-info range-xs","onUpdate:modelValue":o[0]||(o[0]=a=>e.imageWidth=a)},null,512),[[O,e.imageWidth]]),ee]),_:1}),i(t,{to:{name:"home"},class:"relative btn btn-ghost btn-circle text-white"},{default:_(()=>[i(l,{type:"house",size:"lg",class:"xl:text-xl 2xl:text-2xl"})]),_:1})]),_:1},8,["class"]),e.pages?(x(),P(f,{key:0,pages:e.pages,"image-width":e.imageWidth},null,8,["pages","image-width"])):A("",!0)])}const oe=I(X,[["render",te]]);export{oe as default};
