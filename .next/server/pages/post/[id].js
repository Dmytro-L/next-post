(()=>{var t={};t.id=687,t.ids=[687,888,660],t.modules={6353:t=>{t.exports={navbar:"HeaderComponent_navbar__QyLYO",active:"HeaderComponent_active__Wl1tv"}},1613:t=>{t.exports={post:"PostItem_post__D9fif"}},2317:(t,e,r)=>{"use strict";r.a(t,async(t,s)=>{try{r.r(e),r.d(e,{config:()=>g,default:()=>d,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>m,routeModule:()=>P,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>v});var a=r(7093),i=r(5244),n=r(1323),l=r(5211),o=r(4807),c=r(5794),u=t([c]);c=(u.then?(await u)():u)[0];let d=(0,n.l)(c,"default"),p=(0,n.l)(c,"getStaticProps"),h=(0,n.l)(c,"getStaticPaths"),x=(0,n.l)(c,"getServerSideProps"),g=(0,n.l)(c,"config"),m=(0,n.l)(c,"reportWebVitals"),v=(0,n.l)(c,"unstable_getStaticProps"),S=(0,n.l)(c,"unstable_getStaticPaths"),b=(0,n.l)(c,"unstable_getStaticParams"),j=(0,n.l)(c,"unstable_getServerProps"),f=(0,n.l)(c,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/post/[id]",pathname:"/post/[id]",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:c});s()}catch(t){s(t)}})},641:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var s=r(997),a=r(1664),i=r.n(a),n=r(6353),l=r.n(n),o=r(1162);let c=()=>{let{theme:t,setTheme:e}=(0,o.useTheme)();return(0,s.jsxs)("div",{className:l().navbar,children:[s.jsx(i(),{href:"/",children:"Home"}),s.jsx(i(),{href:"about",children:"About"}),"light"===t?s.jsx("button",{onClick:()=>e("dark"),suppressHydrationWarning:!0,children:"Dark"}):s.jsx("button",{onClick:()=>e("light"),suppressHydrationWarning:!0,children:"Light"})]})},u=({children:t})=>(0,s.jsxs)("div",{children:[s.jsx(c,{}),t]})},9010:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var s=r(997),a=r(641),i=r(6813);let n=({post:t})=>s.jsx(a.Z,{children:s.jsx(i.Z,{post:t})})},4807:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var s=r(997);r(6961);var a=r(1162);function i({Component:t,pageProps:e}){return s.jsx(a.ThemeProvider,{children:s.jsx(t,{...e})})}},5211:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>Document});var s=r(997),a=r(6859);function Document(){return(0,s.jsxs)(a.Html,{lang:"en",children:[s.jsx(a.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},5794:(t,e,r)=>{"use strict";r.a(t,async(t,s)=>{try{r.r(e),r.d(e,{default:()=>u,getStaticPaths:()=>o,getStaticProps:()=>c});var a=r(997),i=r(9010),n=r(857),l=t([n]);n=(l.then?(await l)():l)[0];let o=async()=>{let t=await n.L.getAll();return{paths:t.map(t=>({params:{id:t.id.toString()}})),fallback:"blocking"}},c=async({params:t})=>{let e=await n.L.getSinglePost(String(t?.id));return{props:{post:e},revalidate:60}},u=({post:t})=>a.jsx(i.Z,{post:t});s()}catch(t){s(t)}})},857:(t,e,r)=>{"use strict";r.a(t,async(t,s)=>{try{r.d(e,{L:()=>n});var a=r(9648),i=t([a]);(a=(i.then?(await i)():i)[0]).default.defaults.baseURL="https://jsonplaceholder.typicode.com";let n={async getAll(){let{data:t}=await a.default.get("/posts");return t},async getSinglePost(t){let{data:e}=await a.default.get("/posts",{params:{id:t}});return e[0]}};s()}catch(t){s(t)}})},6813:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var s=r(997),a=r(1664),i=r.n(a),n=r(1613),l=r.n(n),o=r(1163);let c=({post:t})=>{let{pathname:e}=(0,o.useRouter)();return(0,s.jsxs)("div",{className:l().post,children:[s.jsx("h2",{children:t.title}),s.jsx("p",{children:t.body}),"/"===e?s.jsx(i(),{href:`/post/${t.id}`,children:"Read more"}):s.jsx(i(),{href:"/",children:"Back"})]})}},6961:()=>{},1162:t=>{"use strict";t.exports=require("next-themes")},2785:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:t=>{"use strict";t.exports=require("react")},6405:t=>{"use strict";t.exports=require("react-dom")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},9648:t=>{"use strict";t.exports=import("axios")},7147:t=>{"use strict";t.exports=require("fs")},1017:t=>{"use strict";t.exports=require("path")},2781:t=>{"use strict";t.exports=require("stream")},9796:t=>{"use strict";t.exports=require("zlib")}};var e=require("../../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),s=e.X(0,[859,559,163],()=>r(2317));module.exports=s})();