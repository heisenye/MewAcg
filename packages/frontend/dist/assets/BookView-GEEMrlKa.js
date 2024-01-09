import{_ as S,f as O,T as B,B as U,j as l,d as p,c as v,a as t,k as n,t as m,n as i,F as w,p as D,R as H,q as L,r as T,s as $,o as M,v as j,x as q,m as k,y as u,i as N,z as R,A as K,b as F,C as G,D as J,E as V,G as Q,H as C,I,J as W,K as X,L as Y,M as Z,N as ee,O as te,P as oe,Q as se,S as ne,U as ae,V as ce,W as le,X as re}from"./index-3VTe_6sT.js";import{T as ie}from"./TheModal-jsG6speO.js";const de={name:"TheComment",components:{TheImage:O,TheIcon:B},props:{comment:{type:Object,required:!0}},setup(r){const{content:o,createdAt:d,likes:e,userId:a}=r.comment,{_id:f,username:c}=a;return{uid:f,username:c,createdAt:d,content:o,likes:e,BASE_URL:U}}},me=t("div",{class:"divider divider-neutral"},null,-1),pe={class:"navbar px-0 gap-x-3"},ue={class:"flex-none size-12 rounded-full bg-primary overflow-hidden"},_e={class:"flex-1 flex-col items-start font-Noto"},he={class:"text-base text-white"},xe={class:"text-xs text-accent-content"},fe={class:"text-neutral-content"},ge={class:"flex-none text-neutral-content"};function be(r,o,d,e,a,f){const c=l("TheImage"),s=l("TheIcon");return p(),v(w,null,[me,t("main",pe,[t("div",ue,[n(c,{blur:!1,class:"size-full rounded-full z-10 border-2 border-neutral",src:`${e.BASE_URL}/avatar/${e.uid}.webp`},null,8,["src"])]),t("div",_e,[t("h3",he,m(e.username),1),t("div",xe,m(new Date(e.createdAt).toLocaleString()),1),t("p",fe,m(e.content),1)]),t("div",ge,[n(s,{type:"thumbs-up"}),i("    "),t("span",null,m(e.likes),1)])])],64)}const ve=S(de,[["render",be]]),Te={name:"TheComments",components:{TheButton:D,TheIcon:B,TheComment:ve,RouterLink:H},setup(){const r=L(),{id:o}=r.params,{token:d}=V,e=T(""),a=T(),f=$(()=>!e.value),c=T(!1),s=new IntersectionObserver(_=>{_.forEach(h=>{c.value=!h.isIntersecting})},{root:null,rootMargin:"0px 0px 9999px 0px"}),x=T([]);return M(async()=>{const _=await j(o);_&&_.code===200&&(x.value=_.data),a.value&&s.observe(a.value)}),q(()=>{s.disconnect()}),{token:d,inputComment:e,commentInputEl:a,isSubmitDisabled:f,isScrollButtonShow:c,comments:x,commentSubmitHandler:async()=>{const _=await Q({id:o,content:e.value});_&&_.code===200&&(C({msg:I.SUBMIT_COMMENT_SUCCESS,messageType:"success",popupType:"toast",toastPos:["bottom","right"]}),setTimeout(()=>{W()},1e3))},scrollToCommentInputEl:()=>{a.value.scrollIntoView({behavior:"smooth",block:"start"})}}}},ye=r=>(X("data-v-7ce0440b"),r=r(),Y(),r),we={class:"relative top-4 w-full mx-auto px-4 pb-4 card rounded max-w-3xl bg-primary"},ke=ye(()=>t("h1",{class:"text-xl mt-6 mb-8 text-center font-base font-black"},"评论",-1)),Ce={class:"w-full"},Ie=["disabled"];function Se(r,o,d,e,a,f){const c=l("RouterLink"),s=l("TheButton"),x=l("TheComment"),b=l("TheIcon");return p(),v(w,null,[t("main",we,[ke,e.token?N("",!0):(p(),k(c,{key:0,to:{name:"login"},class:"text-xs link-info link-hover self-center font-base mb-3"},{default:u(()=>[i("当前未登录,立即登录")]),_:1})),t("div",Ce,[R(t("textarea",{ref:"commentInputEl",disabled:!e.token,"onUpdate:modelValue":o[0]||(o[0]=g=>e.inputComment=g),placeholder:"输入评论",rows:"3",class:"textarea textarea-secondary block mx-auto max-w-lg w-full mb-4 text-accent-content"},null,8,Ie),[[K,e.inputComment]])]),n(s,{type:"neutral",disabled:e.isSubmitDisabled,class:"h-10 w-20 self-end font-base",onClick:e.commentSubmitHandler},{default:u(()=>[i("提交")]),_:1},8,["disabled","onClick"]),(p(!0),v(w,null,F(e.comments,g=>(p(),k(x,{comment:g},null,8,["comment"]))),256))]),n(J,null,{default:u(()=>[R(n(s,{type:"info",shape:"circle",style:{translate:"-50% 0"},class:"fixed top-20 left-1/2 shadow-md shadow-info",onClick:e.scrollToCommentInputEl},{default:u(()=>[n(b,{type:"arrow-up"})]),_:1},8,["onClick"]),[[G,e.isScrollButtonShow]])]),_:1})],64)}const Be=S(Te,[["render",Se],["__scopeId","data-v-7ce0440b"]]),Ee={name:"TheBook",components:{TheComments:Be,TheButton:D,TheIcon:B,TheImage:O,TheModal:ie},props:{comic:{type:Object,required:!0}},setup(r){const o=L(),{comic:d}=r,{token:e}=V,a=T(!1),f=T(o.meta.isProgressRemembered);Z(f,y=>{localStorage.setItem("isProgressRemembered",String(y)),o.meta.isProgressRemembered=y});const{name:c,_id:s,coverImage:x,updatedAt:b,chapters:g,author:_,tags:h,description:z,status:A}=d,{viewCount:P,favoriteCount:E}=ee(d);return M(async()=>{if(!e.value)return;(await te(s)).data&&(a.value=!0)}),{BASE_URL:U,isFavorited:a,isProgressRemembered:f,id:s,coverImage:x,name:c,date:b,viewCount:P,favoriteCount:E,chapters:g,author:_,tags:h,description:z,status:A,addOrDeleteFavoriteFn:async()=>{if(!e.value){C({msg:I.NO_TOKEN,messageType:"info",popupType:"alert"});return}a.value?(await se(s)).code===200&&(a.value=!1,E.value--,C({msg:I.DELETE_FAVORITE_SUCCESS,messageType:"success",popupType:"toast",toastPos:["end","bottom"]})):(await ne({id:s})).code===200&&(a.value=!0,E.value++,C({msg:I.ADD_FAVORITE_SUCCESS,messageType:"success",popupType:"toast",toastPos:["start","bottom"]}))}}}},Re={class:"relative w-full top-20 px-3 sm:px-4 md:px-8 lg:px-4 pb-8"},Fe={class:"relative w-full mx-auto card rounded max-w-3xl bg-primary lg:card-side lg:py-4"},De={key:0,class:"absolute bookmark border-[32px] -left-4 -top-4 xl:border-[40px]"},Le=t("p",{class:"absolute -left-6 -top-6 text-warning-content xl:text-lg font-base font-extrabold"}," 完结 ",-1),Me=[Le],Ne={class:"relative flex items-center justify-center pb-6 pt-8 md:px-6 lg:px-0 xl:px-4 lg:w-3/5"},Oe={class:"card-body pt-4 md:pt-6 px-6 md:px-10 lg:px-4 rounded-b-xl xl:text-lg"},Ue={class:"card-title text-2xl self-center pb-2 font-base font-extrabold text-white"},Ve={class:"text-accent opacity-80"},ze=t("i",{class:"fa-solid fa-eye"},null,-1),Ae=t("i",{class:"fa-solid fa-heart"},null,-1),Pe=t("i",{class:"fa-solid fa-book"},null,-1),He={class:"text-white font-base"},$e={class:"btn btn-sm btn-secondary"},je={class:"space-x-1.5 text-white font-base"},qe={class:"text-white font-base"},Ke={class:"opacity-80"},Ge=t("h3",{class:"font-base text-lg mx-auto"},"章节",-1),Je={class:"flex items-center"},Qe=t("label",{for:"progress",class:"mr-6"},"是否记忆阅读进度",-1),We={class:"grid grid-cols-4 gap-x-6 place-items-center"};function Xe(r,o,d,e,a,f){const c=l("TheImage"),s=l("TheButton"),x=l("TheIcon"),b=l("TheModal"),g=l("RouterLink"),_=l("TheComments");return p(),v("main",Re,[t("div",Fe,[e.status==="completed"?(p(),v("div",De,Me)):N("",!0),t("div",Ne,[n(c,{src:`${e.BASE_URL}/${e.id}/${e.coverImage.chapter}/${e.coverImage.page}.webp`,class:"rounded-lg w-3/5 lg:rounded-lg h-fit"},null,8,["src"])]),t("div",Oe,[t("h1",Ue,m(e.name),1),t("div",Ve,[t("span",null,m(new Date(e.date).toLocaleDateString()),1),i("  |  "),ze,i("  "),t("span",null,m(e.viewCount),1),i("  "),Ae,i("  "),t("span",null,m(e.favoriteCount),1),i("  |  "),Pe,i("  "),t("span",null,m(e.chapters),1)]),t("div",He,[i(" 作者："),t("button",$e,m(e.author),1)]),t("div",je,[i(" 标签： "),(p(!0),v(w,null,F(e.tags,h=>(p(),k(s,{key:h,type:"secondary",size:"sm"},{default:u(()=>[i(m(h),1)]),_:2},1024))),128))]),t("div",qe,[i(" 简介："),t("span",Ke,m(e.description),1)]),n(s,{type:"error",class:"w-32 lg:w-28 xl:w-32 mx-auto my-3",onClick:e.addOrDeleteFavoriteFn},{default:u(()=>[n(x,{type:"heart",class:"text-lg lg:text-md xl:text-lg text-white",variant:e.isFavorited?"solid":"regular"},null,8,["variant"])]),_:1},8,["onClick"]),Ge,t("div",null,[n(s,{type:"secondary",size:"sm",shape:"square",class:"block mx-auto",onclick:"document.getElementById('settings').showModal()"},{default:u(()=>[n(x,{type:"gear",class:"text-success"})]),_:1})]),n(b,{id:"settings",class:"bg-primary font-base"},{default:u(()=>[t("div",Je,[Qe,R(t("input",{type:"checkbox",id:"progress",value:"true","onUpdate:modelValue":o[0]||(o[0]=h=>e.isProgressRemembered=h),class:"checkbox checkbox-xs checkbox-success"},null,512),[[oe,e.isProgressRemembered]])])]),_:1}),t("div",We,[(p(!0),v(w,null,F(e.chapters,h=>(p(),k(g,{key:h,to:{name:"read",params:{id:e.id,chapter:h}},class:"btn btn-sm btn-secondary w-12",replace:""},{default:u(()=>[i(m(h),1)]),_:2},1032,["to"]))),128))])])]),n(_)])}const Ye=S(Ee,[["render",Xe]]),Ze={name:"BookView",components:{TheBook:Ye,TheNavigation:ae,TheButton:D,TheIcon:B},setup(){const r=L(),{id:o}=r.params,d=T(null);return M(async()=>{const e=await ce(o);e.code===200&&(d.value=e.data)}),{comic:d,goBack:le,goHome:re}}},et=t("span",{class:"text-xl 2xl:text-2xl 2xl:tracking-wider"},"<  Back",-1),tt=[et],ot={class:"nav-input-container"},st=t("input",{type:"text",placeholder:"搜索标题或标签",class:"nav-input"},null,-1);function nt(r,o,d,e,a,f){const c=l("TheIcon"),s=l("TheButton"),x=l("TheNavigation"),b=l("TheBook");return p(),v("main",null,[n(x,{class:"z-50 shadow-md shadow-primary"},{left:u(()=>[t("div",{class:"text-white btn btn-ghost tracking-wider font-medium text-lg px-4",onClick:o[0]||(o[0]=(...g)=>e.goBack&&e.goBack(...g))},tt)]),right:u(()=>[t("div",ot,[st,n(c,{type:"magnifying-glass",class:"absolute left-4"})]),n(s,{type:"ghost",size:"md",shape:"circle",class:"lg:hidden btn-md text-white"},{default:u(()=>[n(c,{type:"magnifying-glass",class:"text-base sm:text-lg xl:text-xl 2xl:text-2xl lg:hidden"})]),_:1}),n(s,{type:"ghost",size:"md",shape:"circle",class:"btn-md text-white",onClick:e.goHome},{default:u(()=>[n(c,{type:"house",class:"text-base sm:text-lg xl:text-xl 2xl:text-2xl"})]),_:1},8,["onClick"])]),_:1}),e.comic?(p(),k(b,{key:0,comic:e.comic,class:"z-0"},null,8,["comic"])):N("",!0)])}const rt=S(Ze,[["render",nt]]);export{rt as default};
