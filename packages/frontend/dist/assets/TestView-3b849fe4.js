import{_ as l,d as m,B as i,r,o as p,c as h,a as s,b as T,f as c,h as f,s as $}from"./index-d4ee50db.js";import{T as v}from"./TheModal-e504af90.js";const x={name:"TheTest",components:{TheImage:m},props:{modelValue:{type:String,default:""}},setup(){return{BASE_URL:i}},mounted(){}},B={class:"scroll-auto"},V=["value"],b={class:"absolute top-[900px] w-1/2"},g=s("h1",{class:"absolute top-[2000px]"},"hello",-1);function I(t,e,n,a,u,d){const o=r("TheImage");return p(),h("div",null,[s("div",B,[s("input",{class:"input",type:"text",value:n.modelValue,onInput:e[0]||(e[0]=_=>t.$emit("update:modelValue",_.target.value))},null,40,V),s("div",b,[T(o,{class:"",src:`${a.BASE_URL}/64d4e7a7cccc4bf7d491a7e6/1/1.webp`},null,8,["src"])]),g])])}const k=l(x,[["render",I]]),w={components:{TheModal:v,TheTest:k},setup(){const t=c(""),e=c(null);return f(()=>{}),{searchText:t,val:e}}};function E(t,e,n,a,u,d){const o=r("TheTest");return p(),$(o)}const A=l(w,[["render",E]]);export{A as default};
