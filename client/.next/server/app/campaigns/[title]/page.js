(()=>{var e={};e.id=681,e.ids=[681],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6113:e=>{"use strict";e.exports=require("crypto")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},7557:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>p,routeModule:()=>m,tree:()=>o});var a=s(3137),n=s(4647),r=s(4183),l=s.n(r),i=s(1775),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);s.d(t,d);let c=a.AppPageRouteModule,o=["",{children:["campaigns",{children:["[title]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,184)),"H:\\CrowdfundingDapp\\Decentralized-CrowdFundingApp\\client\\src\\app\\campaigns\\[title]\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8044)),"H:\\CrowdfundingDapp\\Decentralized-CrowdFundingApp\\client\\src\\app\\layout.jsx"],loading:[()=>Promise.resolve().then(s.bind(s,2697)),"H:\\CrowdfundingDapp\\Decentralized-CrowdFundingApp\\client\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["H:\\CrowdfundingDapp\\Decentralized-CrowdFundingApp\\client\\src\\app\\campaigns\\[title]\\page.jsx"],u="/campaigns/[title]/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:n.x.APP_PAGE,page:"/campaigns/[title]/page",pathname:"/campaigns/[title]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},3351:(e,t,s)=>{Promise.resolve().then(s.bind(s,8448))},8448:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(80),n=s(2451),r=s.n(n),l=s(8939),i=s(4751),d=s(9885),c=s(7114),o=s(3500),p=s(252),u=s(7111),x=s(3189),m=s(7794);let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,c.useRouter)(),{selectedCampaign:t,contract:s}=(0,m.useEthersContext)(),[n,h]=(0,d.useState)(0),[g,f]=(0,d.useState)([]),[j,b]=(0,d.useState)(!1);(0,d.useEffect)(()=>{if(null===t)return e.back();t.donations.sort((e,t)=>t.amount-e.amount);let s=t.donations.slice(0,10);f(s)},[]);let handleSubmit=async e=>{if(e.preventDefault(),0===n)return i.toast.error("Please enter an amount");if(0>=(0,p.Z)(t.deadline))return i.toast.error("Campaign has ended");b(!0);try{await s.donate(t.id,{value:l.fi(n),gasLimit:1e6}),i.toast.success("Donation Successful!")}catch(e){i.toast.error("Donation Failed!")}h(0),b(!1)};return(0,a.jsxs)("main",{children:[(0,a.jsxs)("div",{className:"flex gap-4 md:flex-row flex-col",children:[a.jsx("div",{className:"w-full h-full max-h-[300px] md:max-h-none md:h-[400px] xl:h-[500px]",children:a.jsx("img",{className:"rounded-lg w-full object-cover h-full max-h-[300px] md:max-h-none",src:t?.imageUrl,alt:t?.title,width:1400,height:800})}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row md:flex-col justify-between gap-4",children:[(0,a.jsxs)("div",{className:"rounded-lg bg-neutral-800 min-w-[124px] w-full",children:[a.jsx("p",{className:"p-4 text-center text-2xl",children:(0,p.Z)(t?.deadline)>0?(0,p.Z)(t?.deadline):"Ended"}),a.jsx("p",{className:"bg-neutral-700 w-full rounded-b-lg p-2 text-sm text-neutral-400 text-center",children:(0,p.Z)(t?.deadline)>0?"Days Left":"Status"})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-neutral-800 min-w-[124px] w-full",children:[a.jsx("p",{className:"p-4 text-center text-2xl",children:t?.collectedAmount??0}),(0,a.jsxs)("p",{className:"bg-neutral-700 w-full rounded-b-lg p-2 text-sm text-neutral-400 text-center",children:["Raised of ",t?.target]})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-neutral-800 min-w-[124px] w-full",children:[a.jsx("p",{className:"p-4 text-center text-2xl",children:t?.donations?.length??0}),a.jsx("p",{className:"bg-neutral-700 w-full rounded-b-lg p-2 text-sm text-neutral-400 text-center",children:"Donations"})]})]})]}),(0,a.jsxs)("div",{className:`grid gap-4 ${(0,p.Z)(t?.deadline)>0?"grid-cols-1 md:grid-cols-4":"grid-cols-1"}`,children:[(0,a.jsxs)("div",{className:"col-span-4 md:col-span-3",children:[(0,a.jsxs)("div",{className:"mt-8",children:[a.jsx("h4",{className:"text-xl font-semibold uppercase mb-2",children:"Creator"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[a.jsx(r(),{className:"p-3 bg-neutral-800 rounded-full",src:u.default,alt:t?.owner,width:48,height:48}),a.jsx("p",{className:"truncate text-neutral-400",children:t?.owner})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[a.jsx("h4",{className:"text-xl font-semibold uppercase mb-2",children:"Story"}),a.jsx("p",{className:"text-neutral-400",children:t?.description})]}),(0,a.jsxs)("div",{className:"mt-8",children:[a.jsx("h4",{className:"text-xl font-semibold uppercase mb-2",children:"Top Donations"}),a.jsx("div",{className:"flex flex-col gap-4",children:g?.length>0?g.map((e,t)=>a.jsx("div",{className:"bg-neutral-800 p-4 rounded-lg",children:(0,a.jsxs)("p",{className:"text-neutral-400 flex items-center gap-2",children:[a.jsx(o.$$w,{className:"text-2xl text-emerald-500"})," ",(0,a.jsxs)("b",{children:[e.amount," ",a.jsx("span",{className:"hidden md:inline",children:"Eth"})]})," ","from ",a.jsx("span",{className:"truncate",children:e.donator})]})},t)):a.jsx("p",{className:"text-neutral-400",children:"No donations yet."})})]})]}),(0,p.Z)(t?.deadline)>0&&(0,a.jsxs)("div",{className:"col-span-4 md:col-span-1 mt-8",children:[a.jsx("h4",{className:"text-xl font-semibold uppercase",children:"Fund"}),(0,a.jsxs)("form",{onSubmit:handleSubmit,className:"bg-neutral-800 rounded-lg p-4",children:[a.jsx(x.yt,{label:"Amount",placeholder:"ETH 0.1",type:"number",value:n,onChange:e=>h(e.target.value)}),(0,a.jsxs)("div",{className:"bg-neutral-900 text-sm rounded-lg p-2 my-4",children:[a.jsx("p",{children:"Back it because you believe in it."}),a.jsx("p",{className:"text-neutral-500 text-sm mt-2",children:"Support the project for no reward, just because it speaks to you."})]}),a.jsx(x.Hd,{type:"submit",onClick:handleSubmit,className:"w-full font-semibold p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-all duration-200F",loading:j,children:"Fund Campaign"})]})]})]})]})}},184:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>r,default:()=>d});var a=s(7536);let n=(0,a.createProxy)(String.raw`H:\CrowdfundingDapp\Decentralized-CrowdFundingApp\client\src\app\campaigns\[title]\page.jsx`),{__esModule:r,$$typeof:l}=n,i=n.default,d=i},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(6885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[882,335,885,563],()=>__webpack_exec__(7557));module.exports=s})();