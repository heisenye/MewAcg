import{_ as S,f as O,T as B,B as U,j as l,d,c as v,a as t,k as n,t as u,n as i,F as k,p as D,R as H,q as L,r as T,s as $,o as M,v as j,x as q,m as y,y as p,i as N,z as R,A as K,b as F,C as G,D as J,E as Q,G as V,H as W,I as C,J as I,K as X,L as Y,M as Z,N as ee,O as te,P as oe,Q as se,S as ne,U as ae,V as ce,W as le,X as re,Y as ie}from"./index-c3TPtZRx.js";import{T as de}from"./TheModal-Z1zoT2_r.js";const me={name:"TheComment",components:{TheImage:O,TheIcon:B},props:{comment:{type:Object,required:!0}},setup(r){const{content:o,createdAt:m,likes:e,userId:a}=r.comment,{_id:f,username:c}=a;return{uid:f,username:c,createdAt:m,content:o,likes:e,BASE_URL:U}}},ue=t("div",{class:"divider divider-neutral"},null,-1),pe={class:"navbar px-0 gap-x-3"},_e={class:"flex-none size-12 rounded-full bg-primary overflow-hidden"},he={class:"flex-1 flex-col items-start font-Noto"},xe={class:"text-base text-white"},fe={class:"text-xs text-accent-content"},ge={class:"text-neutral-content"},be={class:"flex-none text-neutral-content"};function ve(r,o,m,e,a,f){const c=l("TheImage"),s=l("TheIcon");return d(),v(k,null,[ue,t("main",pe,[t("div",_e,[n(c,{blur:!1,class:"size-full rounded-full z-10 border-2 border-neutral",src:`${e.BASE_URL}/avatar/${e.uid}.webp`},null,8,["src"])]),t("div",he,[t("h3",xe,u(e.username),1),t("div",fe,u(new Date(e.createdAt).toLocaleString()),1),t("p",ge,u(e.content),1)]),t("div",be,[n(s,{type:"thumbs-up"}),i("    "),t("span",null,u(e.likes),1)])])],64)}const Te=S(me,[["render",ve]]),ye={name:"TheComments",components:{TheButton:D,TheIcon:B,TheComment:Te,RouterLink:H},setup(){const r=L(),{id:o}=r.params,{token:m}=V,e=T(""),a=T(),f=$(()=>!e.value),c=T(!1),s=new IntersectionObserver(_=>{_.forEach(h=>{c.value=!h.isIntersecting})},{root:null,rootMargin:"0px 0px 9999px 0px"}),x=T([]);return M(async()=>{const _=await j(o);_&&_.code===200&&(x.value=_.data),a.value&&s.observe(a.value)}),q(()=>{s.disconnect()}),{token:m,inputComment:e,commentInputEl:a,isSubmitDisabled:f,isScrollButtonShow:c,comments:x,commentSubmitHandler:async()=>{const _=await W({id:o,content:e.value});_&&_.code===200&&(C({msg:I.SUBMIT_COMMENT_SUCCESS,messageType:"success",popupType:"toast",toastPos:["bottom","right"]}),setTimeout(()=>{X()},1e3))},scrollToCommentInputEl:()=>{a.value.scrollIntoView({behavior:"smooth",block:"start"})}}}},we=r=>(Y("data-v-12e38813"),r=r(),Z(),r),ke={class:"relative top-4 w-full mx-auto px-4 pb-4 card rounded max-w-3xl bg-primary"},Ce=we(()=>t("h1",{class:"text-xl mt-6 mb-8 text-center font-base font-black"},"评论",-1)),Ie={class:"w-full"},Se=["disabled"],Be={class:"fixed top-20 w-full flex justify-center"};function Ee(r,o,m,e,a,f){const c=l("RouterLink"),s=l("TheButton"),x=l("TheComment"),b=l("TheIcon");return d(),v(k,null,[t("main",ke,[Ce,e.token?N("",!0):(d(),y(c,{key:0,to:{name:"login"},class:"text-xs link-info link-hover self-center font-base mb-3"},{default:p(()=>[i("当前未登录,立即登录")]),_:1})),t("div",Ie,[R(t("textarea",{ref:"commentInputEl",disabled:!e.token,"onUpdate:modelValue":o[0]||(o[0]=g=>e.inputComment=g),placeholder:"输入评论",rows:"3",class:"textarea textarea-secondary block mx-auto max-w-lg w-full mb-4 text-accent-content"},null,8,Se),[[K,e.inputComment]])]),n(s,{type:"neutral",disabled:e.isSubmitDisabled,class:"h-10 w-20 self-end font-base",onClick:e.commentSubmitHandler},{default:p(()=>[i("提交")]),_:1},8,["disabled","onClick"]),(d(!0),v(k,null,F(e.comments,g=>(d(),y(x,{comment:g},null,8,["comment"]))),256))]),(d(),y(Q,{to:"body"},[n(J,null,{default:p(()=>[R(t("div",Be,[n(s,{type:"info",shape:"circle",class:"shadow-md shadow-info",onClick:e.scrollToCommentInputEl},{default:p(()=>[n(b,{type:"arrow-up"})]),_:1},8,["onClick"])],512),[[G,e.isScrollButtonShow]])]),_:1})]))],64)}const Re=S(ye,[["render",Ee],["__scopeId","data-v-12e38813"]]),Fe={name:"TheBook",components:{TheComments:Re,TheButton:D,TheIcon:B,TheImage:O,TheModal:de},props:{comic:{type:Object,required:!0}},setup(r){const o=L(),{comic:m}=r,{token:e}=V,a=T(!1),f=T(o.meta.isProgressRemembered);ee(f,w=>{localStorage.setItem("isProgressRemembered",String(w)),o.meta.isProgressRemembered=w});const{name:c,_id:s,coverImage:x,updatedAt:b,chapters:g,author:_,tags:h,description:z,status:A}=m,{viewCount:P,favoriteCount:E}=te(m);return M(async()=>{if(!e.value)return;(await oe(s)).data&&(a.value=!0)}),{BASE_URL:U,isFavorited:a,isProgressRemembered:f,id:s,coverImage:x,name:c,date:b,viewCount:P,favoriteCount:E,chapters:g,author:_,tags:h,description:z,status:A,addOrDeleteFavoriteFn:async()=>{if(!e.value){C({msg:I.NO_TOKEN,messageType:"info",popupType:"alert"});return}a.value?(await ne(s)).code===200&&(a.value=!1,E.value--,C({msg:I.DELETE_FAVORITE_SUCCESS,messageType:"success",popupType:"toast",toastPos:["end","bottom"]})):(await ae({id:s})).code===200&&(a.value=!0,E.value++,C({msg:I.ADD_FAVORITE_SUCCESS,messageType:"success",popupType:"toast",toastPos:["start","bottom"]}))}}}},De={class:"relative w-full top-20 px-3 sm:px-4 md:px-8 lg:px-4 pb-8"},Le={class:"relative w-full mx-auto card rounded max-w-3xl bg-primary lg:card-side lg:py-4"},Me={key:0,class:"absolute bookmark border-[32px] -left-4 -top-4 xl:border-[40px]"},Ne=t("p",{class:"absolute -left-6 -top-6 text-warning-content xl:text-lg font-base font-extrabold"}," 完结 ",-1),Oe=[Ne],Ue={class:"relative flex items-center justify-center pb-6 pt-8 md:px-6 lg:px-0 xl:px-4 lg:w-3/5"},Ve={class:"card-body pt-4 md:pt-6 px-6 md:px-10 lg:px-4 rounded-b-xl xl:text-lg"},ze={class:"card-title text-2xl self-center pb-2 font-base font-extrabold text-white"},Ae={class:"text-accent opacity-80"},Pe=t("i",{class:"fa-solid fa-eye"},null,-1),He=t("i",{class:"fa-solid fa-heart"},null,-1),$e=t("i",{class:"fa-solid fa-book"},null,-1),je={class:"text-white font-base"},qe={class:"btn btn-sm btn-secondary"},Ke={class:"space-x-1.5 text-white font-base"},Ge={class:"text-white font-base"},Je={class:"opacity-80"},Qe=t("h3",{class:"font-base text-lg mx-auto"},"章节",-1),We={class:"flex items-center"},Xe=t("label",{for:"progress",class:"mr-6"},"是否记忆阅读进度",-1),Ye={class:"grid grid-cols-4 gap-x-6 place-items-center"};function Ze(r,o,m,e,a,f){const c=l("TheImage"),s=l("TheButton"),x=l("TheIcon"),b=l("TheModal"),g=l("RouterLink"),_=l("TheComments");return d(),v("main",De,[t("div",Le,[e.status==="completed"?(d(),v("div",Me,Oe)):N("",!0),t("div",Ue,[n(c,{src:`${e.BASE_URL}/${e.id}/${e.coverImage.chapter}/${e.coverImage.page}.webp`,class:"rounded-lg w-3/5 lg:rounded-lg h-fit"},null,8,["src"])]),t("div",Ve,[t("h1",ze,u(e.name),1),t("div",Ae,[t("span",null,u(new Date(e.date).toLocaleDateString()),1),i("  |  "),Pe,i("  "),t("span",null,u(e.viewCount),1),i("  "),He,i("  "),t("span",null,u(e.favoriteCount),1),i("  |  "),$e,i("  "),t("span",null,u(e.chapters),1)]),t("div",je,[i(" 作者："),t("button",qe,u(e.author),1)]),t("div",Ke,[i(" 标签： "),(d(!0),v(k,null,F(e.tags,h=>(d(),y(s,{key:h,type:"secondary",size:"sm"},{default:p(()=>[i(u(h),1)]),_:2},1024))),128))]),t("div",Ge,[i(" 简介："),t("span",Je,u(e.description),1)]),n(s,{type:"error",class:"w-32 lg:w-28 xl:w-32 mx-auto my-3",onClick:e.addOrDeleteFavoriteFn},{default:p(()=>[n(x,{type:"heart",class:"text-lg lg:text-md xl:text-lg text-white",variant:e.isFavorited?"solid":"regular"},null,8,["variant"])]),_:1},8,["onClick"]),Qe,t("div",null,[n(s,{type:"secondary",size:"sm",shape:"square",class:"block mx-auto",onclick:"document.getElementById('settings').showModal()"},{default:p(()=>[n(x,{type:"gear",class:"text-success"})]),_:1})]),n(b,{id:"settings",class:"bg-primary font-base"},{default:p(()=>[t("div",We,[Xe,R(t("input",{type:"checkbox",id:"progress",value:"true","onUpdate:modelValue":o[0]||(o[0]=h=>e.isProgressRemembered=h),class:"checkbox checkbox-xs checkbox-success"},null,512),[[se,e.isProgressRemembered]])])]),_:1}),t("div",Ye,[(d(!0),v(k,null,F(e.chapters,h=>(d(),y(g,{key:h,to:{name:"read",params:{id:e.id,chapter:h}},class:"btn btn-sm btn-secondary w-12",replace:""},{default:p(()=>[i(u(h),1)]),_:2},1032,["to"]))),128))])])]),n(_)])}const et=S(Fe,[["render",Ze]]),tt={name:"BookView",components:{TheBook:et,TheNavigation:ce,TheButton:D,TheIcon:B},setup(){const r=L(),{id:o}=r.params,m=T(null);return M(async()=>{const e=await le(o);e.code===200&&(m.value=e.data)}),{comic:m,goBack:re,goHome:ie}}},ot=t("span",{class:"text-xl 2xl:text-2xl 2xl:tracking-wider"},"<  Back",-1),st=[ot],nt={class:"nav-input-container"},at=t("input",{type:"text",placeholder:"搜索标题或标签",class:"nav-input"},null,-1);function ct(r,o,m,e,a,f){const c=l("TheIcon"),s=l("TheButton"),x=l("TheNavigation"),b=l("TheBook");return d(),v("main",null,[n(x,{class:"z-50 shadow-md shadow-primary"},{left:p(()=>[t("div",{class:"text-white btn btn-ghost tracking-wider font-medium text-lg px-4",onClick:o[0]||(o[0]=(...g)=>e.goBack&&e.goBack(...g))},st)]),right:p(()=>[t("div",nt,[at,n(c,{type:"magnifying-glass",class:"absolute left-4"})]),n(s,{type:"ghost",size:"md",shape:"circle",class:"lg:hidden btn-md text-white"},{default:p(()=>[n(c,{type:"magnifying-glass",class:"text-base sm:text-lg xl:text-xl 2xl:text-2xl lg:hidden"})]),_:1}),n(s,{type:"ghost",size:"md",shape:"circle",class:"btn-md text-white",onClick:e.goHome},{default:p(()=>[n(c,{type:"house",class:"text-base sm:text-lg xl:text-xl 2xl:text-2xl"})]),_:1},8,["onClick"])]),_:1}),e.comic?(d(),y(b,{key:0,comic:e.comic,class:"z-0"},null,8,["comic"])):N("",!0)])}const dt=S(tt,[["render",ct]]);export{dt as default};
