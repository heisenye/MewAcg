import{_ as T,T as k,n as R,Y as U,U as A,f,h as C,Z as L,L as O,B as j,r as m,c as B,a as e,b as c,v as i,t as h,z as P,C as d,A as p,$ as z,a0 as E,o as S,s as V}from"./index-sgCXFzMl.js";const I=["image/jpeg","image/png","image/jpg","image/gif"],D={name:"ProfileView",components:{TheIcon:k,TheButton:R,TheAvatar:U},setup(){const _=A(),{token:a}=P(),l=f(),s=f(),o=f(""),v=()=>{URL.revokeObjectURL(o.value),o.value="",d({msg:p.UPLOAD_ERROR,messageType:"error",popupType:"alert"})},u=()=>{URL.revokeObjectURL(o.value),o.value="",l.value.value=null},n=()=>{const t=l.value.files[0];if(!t)return;const x=t.type;if(I.includes(x))o.value=URL.createObjectURL(t),s.value.showModal();else{d({msg:p.AVATAR_FORMAT_ERROR,messageType:"error",popupType:"alert"}),l.value.value=null;return}t.size>1024*1024*10&&(d({msg:p.AVATAR_SIZE_ERROR,messageType:"error",popupType:"alert"}),l.value.value=null)},g=async()=>{d({msg:p.UPLOADING,messageType:"info",popupType:"alert"});const t=new FormData;t.append("avatar",l.value.files[0]),(await z(t)).code===200&&E()};C(async()=>{try{const t=await L(a.value);t.code===200&&_.setUser(t.data)}catch(t){console.error(t)}}),O(()=>{o.value&&URL.revokeObjectURL(o.value)});const{username:r,id:w,createdAt:y,logout:b}=_;return{username:r,id:w,createdAt:y,previewSrc:o,input:l,modal:s,showPreview:n,uploadError:v,cancelUpload:u,uploadAvatar:g,logout:b,BASE_URL:j}}},M={class:"absolute top-36 w-full px-3 md:px-4 lg:px-5"},N={class:"relative max-w-2xl w-full left-1/2 -translate-x-1/2 space-y-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3"},F={class:"navbar rounded-xl bg-primary w-full text-sm px-4 lg:col-span-2"},Z={class:"mx-4 lg:mx-6 flex-1"},G={class:"text-xl lg:text-2xl tracking-wider"},Y={class:"navbar rounded-xl bg-primary w-full text-sm px-4"},q={class:"flex-none lg:flex lg:flex-col lg:w-full lg:items-start lg:pl-2"},H=e("span",{class:"text-xl tracking-wider text-white pr-4"},"UID",-1),J={class:"tracking-wider"},K={class:"navbar rounded-xl bg-primary w-full text-sm px-4"},Q=e("span",{class:"font-base_3 text-lg text-white pr-4"},"注册时间",-1),W={class:"text-lg tracking-wide"},X={class:"modal",ref:"modal"},$={class:"modal-box bg-primary"},ee={method:"dialog"},se={class:"relative flex justify-center z-0"},te={class:"rounded-full h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 overflow-hidden"},oe=["src"],ae={class:"flex justify-center"},le=e("span",{class:"font-base_3"},"上传",-1),ne={method:"dialog",class:"hidden lg:block mx-auto"},ce=e("span",{class:"font-base_3"},"取消",-1),re={method:"dialog",class:"modal-backdrop"};function ie(_,a,l,s,o,v){const u=m("TheAvatar"),n=m("TheButton"),g=m("TheIcon");return S(),B("main",M,[e("div",N,[e("div",F,[c(n,{type:"secondary",shape:"circle",class:"relative h-20 w-20 lg:h-24 lg:w-24"},{default:i(()=>[e("input",{type:"file",class:"hidden h-0 w-0",ref:"input",onChange:a[0]||(a[0]=(...r)=>s.showPreview&&s.showPreview(...r))},null,544),c(u,{size:"2xl",class:"w-full hover:opacity-40 transition-opacity z-20",onClick:a[1]||(a[1]=()=>s.input.click())})]),_:1}),e("div",Z,[e("span",G,h(s.username),1)]),c(n,{type:"error",class:"z-50 h-10 lg:h-12 lg:w-20 lg:text-base text-black font-base_2",onClick:s.logout},{default:i(()=>[V(" 登出 ")]),_:1},8,["onClick"])]),e("div",Y,[e("div",q,[H,e("span",J,h(s.id),1)])]),e("div",K,[Q,e("span",W,h(s.createdAt),1)])]),e("dialog",X,[e("div",$,[e("form",ee,[c(n,{type:"ghost",shape:"circle",class:"absolute right-0 top-0 z-10"},{default:i(()=>[c(g,{type:"xmark-circle",class:"text-lg"})]),_:1})]),e("div",se,[e("div",te,[e("img",{src:s.previewSrc,alt:"",class:"w-full h-full object-cover"},null,8,oe)])]),e("div",ae,[c(n,{type:"neutral",class:"w-32 lg:w-20 mx-auto my-3",onClick:s.uploadAvatar},{default:i(()=>[le]),_:1},8,["onClick"]),e("form",ne,[c(n,{type:"info",class:"w-20 my-3",onClick:s.cancelUpload},{default:i(()=>[ce]),_:1},8,["onClick"])])])]),e("form",re,[e("button",{onClick:a[2]||(a[2]=(...r)=>s.cancelUpload&&s.cancelUpload(...r))})])],512)])}const pe=T(D,[["render",ie]]);export{pe as default};
