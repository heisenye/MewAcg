import{_ as b,T as k,p as R,a5 as U,a1 as C,r as f,o as L,a6 as O,w as j,B as I,c as S,a as e,k as l,x as c,t as m,E as B,H as d,I as p,a7 as E,J as z,j as h,d as P,n as V}from"./index-XfEk3bFd.js";const D=["image/jpeg","image/png","image/jpg"],M={name:"ProfileView",components:{TheIcon:k,TheButton:R,TheAvatar:U},setup(){const g=C(),{token:o}=B,n=f(),s=f(),t=f(""),x=()=>{URL.revokeObjectURL(t.value),t.value="",d({msg:p.UPLOAD_ERROR,messageType:"error",popupType:"alert"})},u=()=>{URL.revokeObjectURL(t.value),t.value="",n.value.value=null},v=()=>{const a=n.value.files[0];if(!a)return;const _=a.type;if(D.includes(_))t.value=URL.createObjectURL(a),s.value.showModal();else{d({msg:p.AVATAR_FORMAT_ERROR,messageType:"error",popupType:"alert"}),n.value.value=null;return}a.size>1024*1024*10&&(d({msg:p.AVATAR_SIZE_ERROR,messageType:"error",popupType:"alert"}),n.value.value=null)},r=async()=>{s.value.close();const a=d({msg:p.UPLOADING,messageType:"info",popupType:"alert",duration:8e3}),_=new FormData;_.append("avatar",n.value.files[0]);const w=await E(_);w&&w.code===200&&(a.close(),d({msg:p.UPLOAD_SUCCESS,messageType:"success",popupType:"toast",toastPos:["bottom","end"]}),setTimeout(()=>{z()},1e3))};L(async()=>{const a=await O(o.value);a.code===200&&g.setUser(a.data)}),j(()=>{t.value&&URL.revokeObjectURL(t.value)});const{username:i,id:y,createdAt:T,logout:A}=g;return{username:i,id:y,createdAt:T,previewSrc:t,uploadAvatarInput:n,previewAvatarModal:s,previewAvatar:v,uploadError:x,cancelUpload:u,uploadAvatar:r,logout:A,BASE_URL:I}}},N={class:"absolute top-36 w-full px-3 md:px-4 lg:px-5"},F={class:"relative max-w-2xl w-full left-1/2 -translate-x-1/2 space-y-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3"},G={class:"navbar rounded-xl bg-primary w-full text-sm px-4 lg:col-span-2"},H={class:"mx-4 lg:mx-6 flex-1"},J={class:"text-xl lg:text-2xl tracking-wider font-Noto"},Z={class:"navbar rounded-xl bg-primary w-full px-4"},q={class:"flex-none lg:flex lg:flex-col lg:w-full lg:items-start lg:pl-2"},K=e("span",{class:"text-xl pr-4 tracking-widest text-white"},"UID",-1),Q={class:"text-sm tracking-wider"},W={class:"navbar px-4 rounded-xl bg-primary w-full text-lg"},X=e("span",{class:"pr-6 tracking-wider text-white font-base font-black"},"注册时间",-1),Y={class:"tracking-wide"},$={class:"modal",ref:"previewAvatarModal"},ee={class:"modal-box bg-primary"},se={method:"dialog"},te={class:"relative flex justify-center z-0"},ae={class:"rounded-full h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 overflow-hidden"},oe=["src"],le={class:"flex justify-center"},ne=e("span",{class:"font-base"},"上传",-1),re={method:"dialog",class:"hidden lg:block mx-auto"},ce=e("span",{class:"font-base"},"取消",-1),ie={method:"dialog",class:"modal-backdrop"};function de(g,o,n,s,t,x){const u=h("TheIcon"),v=h("TheAvatar"),r=h("TheButton");return P(),S("main",N,[e("div",F,[e("div",G,[l(r,{type:"secondary",shape:"circle",class:"relative size-20 lg:size-24 overflow-hidden"},{default:c(()=>[e("input",{type:"file",class:"hidden h-0 w-0",ref:"uploadAvatarInput",onChange:o[0]||(o[0]=(...i)=>s.previewAvatar&&s.previewAvatar(...i))},null,544),l(v,{class:"w-full hover:opacity-40 hover:scale-110 transition-all duration-500 z-20",onClick:o[1]||(o[1]=()=>s.uploadAvatarInput.click())},{default:c(()=>[l(u,{type:"user",size:"2xl",class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-3xl text-neutral"})]),_:1})]),_:1}),e("div",H,[e("span",J,m(s.username),1)]),l(r,{type:"error",class:"z-50 h-10 lg:h-12 lg:w-20 lg:text-base font-base",onClick:s.logout},{default:c(()=>[V(" 登出 ")]),_:1},8,["onClick"])]),e("div",Z,[e("div",q,[K,e("span",Q,m(s.id),1)])]),e("div",W,[X,e("span",Y,m(s.createdAt),1)])]),e("dialog",$,[e("div",ee,[e("form",se,[l(r,{type:"ghost",shape:"circle",class:"absolute right-0 top-0 z-10"},{default:c(()=>[l(u,{type:"xmark-circle",class:"text-lg"})]),_:1})]),e("div",te,[e("div",ae,[e("img",{src:s.previewSrc,alt:"",class:"w-full h-full object-cover"},null,8,oe)])]),e("div",le,[l(r,{type:"neutral",class:"w-32 lg:w-20 mx-auto my-3",onClick:s.uploadAvatar},{default:c(()=>[ne]),_:1},8,["onClick"]),e("form",re,[l(r,{type:"info",class:"w-20 my-3",onClick:s.cancelUpload},{default:c(()=>[ce]),_:1},8,["onClick"])])])]),e("form",ie,[e("button",{onClick:o[2]||(o[2]=(...i)=>s.cancelUpload&&s.cancelUpload(...i))})])],512)])}const ue=b(M,[["render",de]]);export{ue as default};
