"use strict";(()=>{var e={};e.id=461,e.ids=[461],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},9796:e=>{e.exports=require("zlib")},3440:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>g,originalPathname:()=>x,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>m});var r={};a.r(r),a.d(r,{PUT:()=>PUT}),a(5655);var i=a(3323),s=a(4647),n=a(6886),o=a(4239);async function PUT(e,{params:t}){try{let{id:e}=t,{contract:a}=(0,o.Z)();return await a.closeCampaign(e,{gasLimit:1e6}),n.Z.json({},{status:200,statusText:"Campaign closed successfully."})}catch(e){n.Z.json({},{status:500,statusText:"Somethings went wrong."})}}let p=i.AppRouteRouteModule,u=new p({definition:{kind:s.x.APP_ROUTE,page:"/api/campaigns/[id]/route",pathname:"/api/campaigns/[id]",filename:"route",bundlePath:"app/api/campaigns/[id]/route"},resolvedPagePath:"H:\\CrowdfundingDapp\\Decentralized-CrowdFundingApp\\client\\src\\app\\api\\campaigns\\[id]\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:l,headerHooks:g,staticGenerationBailout:m}=u,x="/api/campaigns/[id]/route"}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[882,118,727,886,239],()=>__webpack_exec__(3440));module.exports=a})();