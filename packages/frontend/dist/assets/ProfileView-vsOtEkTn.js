import{_ as T,T as A,p as R,a8 as U,R as C,a4 as L,r as h,o as j,a9 as O,w as I,B as S,c as z,a as e,k as s,x as o,t as m,E as B,H as p,I as u,aa as E,J as P,j as g,d as V,n as D}from"./index-WvGktPry.js";const M=["image/jpeg","image/png","image/jpg"],N={name:"ProfileView",components:{TheIcon:A,TheButton:R,TheAvatar:U,RouterLink:C},setup(){const x=L(),{token:r}=B,c=h(),t=h(),l=h(""),w=()=>{URL.revokeObjectURL(l.value),l.value="",p({msg:u.UPLOAD_ERROR,messageType:"error",popupType:"alert"})},i=()=>{URL.revokeObjectURL(l.value),l.value="",c.value.value=null},v=()=>{const a=c.value.files[0];if(!a)return;const _=a.type;if(M.includes(_))l.value=URL.createObjectURL(a),t.value.showModal();else{p({msg:u.AVATAR_FORMAT_ERROR,messageType:"error",popupType:"alert"}),c.value.value=null;return}a.size>1024*1024*10&&(p({msg:u.AVATAR_SIZE_ERROR,messageType:"error",popupType:"alert"}),c.value.value=null)},n=async()=>{t.value.close();const a=p({msg:u.UPLOADING,messageType:"info",popupType:"alert",duration:8e3}),_=new FormData;_.append("avatar",c.value.files[0]);const y=await E(_);y&&y.code===200&&(a.close(),p({msg:u.UPLOAD_SUCCESS,messageType:"success",popupType:"toast",toastPos:["bottom","end"]}),setTimeout(()=>{P()},1e3))};j(async()=>{const a=await O(r.value);a&&a.code===200&&x.setUser(a.data)}),I(()=>{l.value&&URL.revokeObjectURL(l.value)});const{username:f,id:d,createdAt:b,logout:k}=x;return{BASE_URL:S,uid:d,username:f,createdAt:b,previewSrc:l,uploadAvatarInput:c,previewAvatarModal:t,previewAvatar:v,uploadError:w,cancelUpload:i,uploadAvatar:n,logout:k}}},F={class:"absolute top-36 w-full px-3 md:px-4 lg:px-5"},G={class:"relative max-w-2xl w-full left-1/2 -translate-x-1/2 space-y-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3"},H={class:"navbar rounded-xl bg-primary w-full text-sm px-4 lg:col-span-2"},J={class:"mx-4 lg:mx-6 flex-1"},Z={class:"text-xl lg:text-2xl tracking-wider font-Noto"},q={class:"navbar px-4 rounded-xl bg-primary w-full"},K={class:"flex-none lg:flex lg:flex-col lg:w-full lg:items-start lg:pl-2"},Q=e("span",{class:"text-xl pr-4 tracking-widest text-white"},"UID",-1),W={class:"text-sm tracking-wider"},X={class:"navbar px-4 rounded-xl bg-primary w-full text-lg"},Y=e("span",{class:"pr-6 tracking-wider text-white font-base font-black"},"注册时间",-1),$={class:"tracking-wide"},ee={class:"navbar px-4 rounded-box bg-primary w-full lg:col-span-2 flex font-base font-black"},te=e("span",{class:"whitespace-nowrap"},"我的收藏",-1),se=e("span",{class:"text-lg lg:text-xl flex-1 text-white font-Poppins"},">",-1),ae=e("div",{class:"divider divider-horizontal mx-3"},null,-1),oe=e("span",{class:"whitespace-nowrap"},"历史浏览",-1),le=e("span",{class:"text-lg flex-1 text-white font-Poppins"},">",-1),ne={class:"modal",ref:"previewAvatarModal"},re={class:"modal-box bg-primary"},ce={method:"dialog"},ie={class:"relative flex justify-center z-0"},de={class:"rounded-full h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 overflow-hidden"},pe=["src"],ue={class:"flex justify-center"},fe=e("span",{class:"font-base"},"上传",-1),_e={method:"dialog",class:"hidden lg:block mx-auto"},ge=e("span",{class:"font-base"},"取消",-1),xe={method:"dialog",class:"modal-backdrop"};function ve(x,r,c,t,l,w){const i=g("TheIcon"),v=g("TheAvatar"),n=g("TheButton"),f=g("router-link");return V(),z("main",F,[e("div",G,[e("div",H,[s(n,{type:"secondary",shape:"circle",class:"relative size-20 lg:size-24 overflow-hidden"},{default:o(()=>[e("input",{type:"file",class:"hidden h-0 w-0",ref:"uploadAvatarInput",onChange:r[0]||(r[0]=(...d)=>t.previewAvatar&&t.previewAvatar(...d))},null,544),s(v,{class:"w-full hover:opacity-40 hover:scale-110 transition-all duration-500 z-20",onClick:r[1]||(r[1]=()=>t.uploadAvatarInput.click())},{default:o(()=>[s(i,{type:"user",size:"2xl",class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-3xl text-neutral"})]),_:1})]),_:1}),e("div",J,[e("span",Z,m(t.username),1)]),s(n,{type:"error",class:"z-50 h-10 lg:h-12 lg:w-20 lg:text-base font-base",onClick:t.logout},{default:o(()=>[D(" 登出 ")]),_:1},8,["onClick"])]),e("div",q,[e("div",K,[Q,e("span",W,m(t.uid),1)])]),e("div",X,[Y,e("span",$,m(t.createdAt),1)]),e("div",ee,[s(f,{to:{name:"favorite"},class:"btn btn-ghost flex-1 px-0 justify-start gap-4 flex-nowrap"},{default:o(()=>[s(n,{type:"error",class:"bg-error/25 hover:bg-error/50 border-none xl:flex-1"},{default:o(()=>[s(i,{type:"heart",class:"text-error"})]),_:1}),te,se]),_:1}),ae,s(f,{to:{name:"history"},class:"btn btn-ghost flex-1 px-0 justify-start gap-4 flex-nowrap"},{default:o(()=>[s(n,{type:"info",class:"bg-info/25 hover:bg-info/50 border-none xl:flex-1"},{default:o(()=>[s(i,{type:"clock-rotate-left",class:"text-info"})]),_:1}),oe,le]),_:1})])]),e("dialog",ne,[e("div",re,[e("form",ce,[s(n,{type:"ghost",shape:"circle",class:"absolute right-0 top-0 z-10"},{default:o(()=>[s(i,{type:"xmark-circle",class:"text-lg"})]),_:1})]),e("div",ie,[e("div",de,[e("img",{src:t.previewSrc,alt:"",class:"w-full h-full object-cover"},null,8,pe)])]),e("div",ue,[s(n,{type:"neutral",class:"w-32 lg:w-20 mx-auto my-3",onClick:t.uploadAvatar},{default:o(()=>[fe]),_:1},8,["onClick"]),e("form",_e,[s(n,{type:"info",class:"w-20 my-3",onClick:t.cancelUpload},{default:o(()=>[ge]),_:1},8,["onClick"])])])]),e("form",xe,[e("button",{onClick:r[2]||(r[2]=(...d)=>t.cancelUpload&&t.cancelUpload(...d))})])],512)])}const me=T(N,[["render",ve]]);export{me as default};
