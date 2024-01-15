import{_ as z,f as U,T as E,B as L,k as i,d as x,c as v,a as t,t as d,l as n,p as h,F as T,q as F,R as A,v as M,r as b,h as P,o as V,w as G,x as J,n as y,y as m,j as O,z as B,A as H,b as N,C as Q,D as W,E as X,G as j,H as Y,I as S,J as I,K as Z,L as D,M as $,N as ee,O as te,P as se,Q as oe,S as ne,U as ae,V as le,W as ce,X as re,Y as ie,Z as de,$ as me,a0 as ue}from"./index-pwZJV_yM.js";import{T as pe}from"./TheModal-M8Ht-IBl.js";const he={name:"TheComment",components:{TheImage:U,TheIcon:E},props:{comment:{type:Object,required:!0},index:{type:Number,required:!0}},setup(_){const{content:s,createdAt:u,likes:e,userId:c}=_.comment,{_id:l,username:r}=c;return{BASE_URL:L,uid:l,username:r,createdAt:u,content:s,likes:e}}},xe={class:"divider divider-neutral text-accent"},_e={class:"navbar px-0 lg:px-4 3xl:px-6 gap-3 3xl:gap-x-4"},ge={class:"flex-none size-12 lg:size-14 3xl:h-16 3xl:w-16 rounded-full bg-primary overflow-hidden"},fe={class:"flex-1 flex-col 3xl:gap-y-0.5 items-start font-Noto break-all"},be={class:"text-base text-white 3xl:text-lg"},ve={class:"text-xs 3xl:text-sm text-accent-content"},ke={class:"text-neutral-content 3xl:text-lg"},we={class:"flex-none"};function ye(_,s,u,e,c,l){const r=i("TheImage"),a=i("TheIcon");return x(),v(T,null,[t("div",xe,d(u.index),1),t("article",_e,[t("div",ge,[n(r,{blur:!1,class:"size-full rounded-full z-10 border-2 border-neutral",src:`${e.BASE_URL}/avatar/${e.uid}.webp`},null,8,["src"])]),t("div",fe,[t("h3",be,d(e.username),1),t("span",ve,d(new Date(e.createdAt).toLocaleString()),1),t("p",ke,d(e.content),1)]),t("div",we,[n(a,{type:"thumbs-up"}),h("    "),t("span",null,d(e.likes),1)])])],64)}const Te=z(he,[["render",ye]]),Ce={name:"TheComments",components:{TheButton:F,TheIcon:E,TheComment:Te,RouterLink:A},setup(){const _=M(),{id:s}=_.params,{token:u}=j,e=b(""),c=b(0),l=b(),r=P(()=>!e.value),a=b(!1),g=new IntersectionObserver(o=>{o.forEach(C=>{a.value=!C.isIntersecting})},{root:null,rootMargin:"0px 0px 9999px 0px"}),f=b([]);return V(async()=>{const o=await G(s);o&&o.code===200&&(f.value=o.data,c.value=o.data.length),l.value&&g.observe(l.value)}),J(()=>{g.disconnect()}),{token:u,inputComment:e,commentInputEl:l,isSubmitDisabled:r,isScrollButtonShow:a,comments:f,commentCount:c,commentSubmitHandler:async()=>{const o=await Y({id:s,content:e.value});o&&o.code===200&&(S({msg:I.SUBMIT_COMMENT_SUCCESS,messageType:"success",popupType:"toast",toastPos:["bottom","right"]}),setTimeout(()=>{Z()},1e3))},scrollToCommentInputEl:()=>{l.value.scrollIntoView({behavior:"smooth",block:"start"})}}}},Se={class:"relative top-4 w-full mx-auto px-4 pb-4 card rounded max-w-3xl bg-primary"},Ie={class:"text-xl 3xl:text-2xl mt-6 mb-8 text-center font-base font-black"},Be={class:"w-full"},ze=["disabled"],Ee={class:"fixed top-20 w-full flex justify-center"};function Re(_,s,u,e,c,l){const r=i("RouterLink"),a=i("TheButton"),g=i("TheComment"),f=i("TheIcon");return x(),v(T,null,[t("main",Se,[t("h1",Ie,d(e.commentCount)+"  评论 ",1),e.token?O("",!0):(x(),y(r,{key:0,to:{name:"login"},class:"text-xs link-info link-hover self-center font-base mb-3"},{default:m(()=>[h("当前未登录,立即登录")]),_:1})),t("div",Be,[B(t("textarea",{ref:"commentInputEl",disabled:!e.token,"onUpdate:modelValue":s[0]||(s[0]=p=>e.inputComment=p),placeholder:"输入评论",rows:"3",class:"textarea textarea-secondary block mx-auto max-w-lg w-full mb-4 text-accent-content 3xl:placeholder:text-base"},null,8,ze),[[H,e.inputComment]])]),n(a,{type:"info",disabled:e.isSubmitDisabled,class:"h-10 w-20 self-end font-base",onClick:e.commentSubmitHandler},{default:m(()=>[h("提交")]),_:1},8,["disabled","onClick"]),(x(!0),v(T,null,N(e.comments,(p,w)=>(x(),y(g,{comment:p,index:w+1},null,8,["comment","index"]))),256))]),(x(),y(X,{to:"body"},[n(W,null,{default:m(()=>[B(t("div",Ee,[n(a,{type:"info",shape:"circle",class:"shadow-md shadow-info 3xl:btn-lg",onClick:e.scrollToCommentInputEl},{default:m(()=>[n(f,{type:"arrow-up",class:"3xl:text-xl"})]),_:1},8,["onClick"])],512),[[Q,e.isScrollButtonShow]])]),_:1})]))],64)}const Ne=z(Ce,[["render",Re],["__scopeId","data-v-78f5dddc"]]),De={name:"TheBook",methods:{goSearchResult:D},components:{TheComments:Ne,TheButton:F,TheIcon:E,TheImage:U,TheModal:pe,RouterLink:A},props:{comic:{type:Object,required:!0}},setup(_){const s=M(),{comic:u}=_,{token:e}=j,c=b(!1),l=b(s.meta.isProgressRemembered);$(l,k=>{localStorage.setItem("isProgressRemembered",String(k)),s.meta.isProgressRemembered=k});const{name:r,_id:a,coverImage:g,updatedAt:f,chapters:p,author:w,tags:o,description:C,status:q}=u,{viewCount:K,favoriteCount:R}=ee(u);return V(async()=>{if(!e.value)return;const k=await te(a);k&&k.data&&(c.value=!0)}),{BASE_URL:L,isFavorited:c,isProgressRemembered:l,id:a,coverImage:g,name:r,date:f,viewCount:K,favoriteCount:R,chapters:p,author:w,tags:o,description:C,status:q,addOrDeleteFavoriteFn:async()=>{if(!e.value){S({msg:I.NO_TOKEN,messageType:"info",popupType:"alert"});return}c.value?(await oe(a)).code===200&&(c.value=!1,R.value--,S({msg:I.DELETE_FAVORITE_SUCCESS,messageType:"success",popupType:"toast",toastPos:["end","bottom"]})):(await ne({id:a})).code===200&&(c.value=!0,R.value++,S({msg:I.ADD_FAVORITE_SUCCESS,messageType:"success",popupType:"toast",toastPos:["start","bottom"]}))}}}},Fe={class:"relative w-full top-20 px-3 sm:px-4 md:px-8 lg:px-6 pb-8"},Me={class:"relative w-full mx-auto card rounded max-w-3xl bg-primary lg:card-side lg:py-4"},Ve={key:0,class:"absolute bookmark border-[32px] -left-4 -top-4 xl:border-[40px]"},Oe=t("p",{class:"absolute -left-6 -top-6 text-warning-content xl:text-lg font-base font-extrabold"}," 完结 ",-1),Ue=[Oe],Le={class:"relative flex items-center justify-center pb-6 pt-8 md:px-6 lg:px-0 xl:px-4 lg:basis-1/2 lg:flex-shrink-0"},Ae={class:"card-body pt-4 md:pt-6 px-6 md:px-12 rounded-b-xl xl:text-lg"},Pe={class:"card-title text-2xl self-center pb-2 font-NotoSerif font-black text-white"},He={class:"text-accent lg:text-sm xl:text-base opacity-80 whitespace-nowrap"},je=t("i",{class:"fa-solid fa-eye"},null,-1),qe=t("i",{class:"fa-solid fa-heart"},null,-1),Ke=t("i",{class:"fa-solid fa-book"},null,-1),Ge={class:"text-white font-base"},Je={class:"space-x-1.5 text-white font-base"},Qe={class:"text-white font-base flex"},We=t("span",{class:"whitespace-nowrap"},"简介：",-1),Xe={class:"text-neutral-content break-all font-NotoSerif font-black"},Ye=ae('<div class="mx-auto rating mb-4"><input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning"><input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning" checked><input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning"><input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning"><input type="radio" name="rating-1" class="mask mask-star size-8 bg-warning"></div><h3 class="text-xl 3xl:text-2xl mx-auto font-base font-black">章节</h3>',2),Ze={class:"flex items-center"},$e=t("label",{for:"progress",class:"mr-6 3xl:text-lg"},"是否记忆阅读进度",-1),et={class:"grid grid-cols-4 gap-x-6 place-items-center"};function tt(_,s,u,e,c,l){const r=i("TheImage"),a=i("TheButton"),g=i("TheIcon"),f=i("TheModal"),p=i("router-link"),w=i("TheComments");return x(),v("main",Fe,[t("div",Me,[e.status==="completed"?(x(),v("div",Ve,Ue)):O("",!0),t("div",Le,[n(r,{src:`${e.BASE_URL}/${e.id}/${e.coverImage.chapter}/${e.coverImage.page}.webp`,class:"rounded-lg w-2/3 lg:rounded-lg h-fit"},null,8,["src"])]),t("div",Ae,[t("h1",Pe,d(e.name),1),t("div",He,[t("span",null,d(new Date(e.date).toLocaleDateString()),1),h("  |  "),je,h("  "),t("span",null,d(e.viewCount),1),h("  "),qe,h("  "),t("span",null,d(e.favoriteCount),1),h("  |  "),Ke,h("  "),t("span",null,d(e.chapters),1)]),t("div",Ge,[h(" 作者： "),n(a,{type:"secondary",class:"font-Noto",size:"sm",onClick:s[0]||(s[0]=o=>l.goSearchResult(e.author,"author"))},{default:m(()=>[h(d(e.author),1)]),_:1})]),t("div",Je,[h(" 标签： "),(x(!0),v(T,null,N(e.tags,o=>(x(),y(a,{key:o,class:"font-Noto",type:"secondary",size:"sm",onClick:C=>l.goSearchResult(o,"tag")},{default:m(()=>[h(d(o),1)]),_:2},1032,["onClick"]))),128))]),t("div",Qe,[We,t("span",Xe,d(e.description),1)]),n(a,{type:"error",class:"w-32 lg:w-28 xl:w-32 mx-auto my-3",onClick:e.addOrDeleteFavoriteFn},{default:m(()=>[n(g,{type:"heart",class:"text-lg lg:text-md xl:text-lg text-white",variant:e.isFavorited?"solid":"regular"},null,8,["variant"])]),_:1},8,["onClick"]),Ye,t("div",null,[n(a,{type:"secondary",size:"sm",shape:"square",class:"block mx-auto",onclick:"document.getElementById('settingsModal').showModal()"},{default:m(()=>[n(g,{type:"gear",class:"text-success"})]),_:1})]),n(f,{id:"settingsModal",class:"bg-primary font-base"},{default:m(()=>[t("div",Ze,[$e,B(t("input",{type:"checkbox",id:"progress",value:"true","onUpdate:modelValue":s[1]||(s[1]=o=>e.isProgressRemembered=o),class:"checkbox checkbox-xs checkbox-success"},null,512),[[se,e.isProgressRemembered]])])]),_:1}),t("div",et,[(x(!0),v(T,null,N(e.chapters,o=>(x(),y(p,{key:o,to:{name:"read",params:{id:e.id,chapter:o}},class:"btn btn-sm btn-secondary w-12",replace:""},{default:m(()=>[h(d(o),1)]),_:2},1032,["to"]))),128))])])]),n(w)])}const st=z(De,[["render",tt]]),ot={name:"BookView",methods:{goSearchResult:D},components:{TheBook:st,TheNavigation:le,TheButton:F,TheIcon:E},setup(){const _=M(),{id:s}=_.params,u=b(""),e=P(()=>!u.value),c=b(null);return V(async()=>{const l=await ce(s);l&&l.code===200&&(c.value=l.data),document.title="",document.title=c.value.name}),{goBack:re,goHome:ie,goSearch:de,goSearchResult:D,comic:c,keyword:u,isSearchDisabled:e}}},nt=t("span",{class:"router-text"},"<  Back",-1),at=[nt],lt={class:"nav-input-container"};function ct(_,s,u,e,c,l){const r=i("TheIcon"),a=i("TheButton"),g=i("TheNavigation"),f=i("TheBook");return x(),v("main",null,[n(g,{class:"z-50 shadow-md shadow-primary"},{left:m(()=>[t("div",{class:"text-white btn btn-ghost tracking-wider font-medium text-lg px-4",onClick:s[0]||(s[0]=(...p)=>e.goBack&&e.goBack(...p))},at)]),right:m(()=>[t("div",lt,[B(t("input",{type:"text",placeholder:"搜索标题或标签",class:"nav-input","onUpdate:modelValue":s[1]||(s[1]=p=>e.keyword=p),onKeyup:s[2]||(s[2]=me(p=>e.goSearchResult(e.keyword),["enter"]))},null,544),[[H,e.keyword,void 0,{trim:!0}]]),n(r,{type:"magnifying-glass",class:"absolute left-4"}),n(a,{shape:"circle",type:"error",disabled:e.isSearchDisabled,class:"absolute right-4 size-6 3xl:size-8 shadow-md",onClick:s[3]||(s[3]=p=>e.goSearchResult(e.keyword))},{default:m(()=>[n(r,{size:"sm",type:"arrow-right",class:ue(["text-base",{"text-white":!e.isSearchDisabled}])},null,8,["class"])]),_:1},8,["disabled"])]),n(a,{type:"ghost",size:"md",shape:"circle",class:"lg:hidden btn-md text-white",onClick:e.goSearch},{default:m(()=>[n(r,{type:"magnifying-glass",class:"text-base sm:text-lg xl:text-xl 3xl:text-2xl lg:hidden"})]),_:1},8,["onClick"]),n(a,{type:"ghost",size:"md",shape:"circle",class:"btn-md text-white",onClick:e.goHome},{default:m(()=>[n(r,{type:"house",size:"base",class:"router-icon"})]),_:1},8,["onClick"])]),_:1}),e.comic?(x(),y(f,{key:0,comic:e.comic,class:"z-0"},null,8,["comic"])):O("",!0)])}const mt=z(ot,[["render",ct]]);export{mt as default};
