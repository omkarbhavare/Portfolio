exports.id=784,exports.ids=[784],exports.modules={25:(e,t,r)=>{Promise.resolve().then(r.bind(r,1960)),Promise.resolve().then(r.bind(r,2411)),Promise.resolve().then(r.bind(r,2105)),Promise.resolve().then(r.bind(r,6472)),Promise.resolve().then(r.bind(r,4928)),Promise.resolve().then(r.bind(r,7911)),Promise.resolve().then(r.bind(r,3982))},6302:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},2105:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var s=r(7247),a=r(8964),i=r(2787),o=r(1715),n=r(1929),l=r(9906),d=r(7911),c=r(1601);let m=({links:e})=>{let[t,r]=(0,a.useState)(!1),{activeSection:m,setActiveSection:h,setTimeOfLastClick:x}=(0,d.q)();return(0,s.jsxs)("div",{className:"md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2",children:[s.jsx(i.E.button,{className:"bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950",variants:{visible:{scale:1,opacity:.7,y:0},tap:{scale:.85},hover:{scale:1.2}},initial:"visible",whileTap:"tap",whileHover:"hover",children:s.jsx(c.ZP,{toggled:t,toggle:r,size:20})}),s.jsx(o.M,{children:t&&s.jsx(i.E.div,{variants:{start:{scale:.6,opacity:.7,y:-20},visible:{scale:1,opacity:.9,y:0}},initial:"start",animate:"visible",className:" w-full bg-white drop-shadow  border border-slate-400 dark:border-white border-opacity-60 shadow-2xl rounded-2xl flex flex-col items-center justify-center dark:bg-gray-950 p-1",children:e.map((t,r)=>s.jsx(i.E.div,{className:"w-full",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:s.jsx(l.default,{className:(0,n.Z)("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",{"text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded":m===t.hash,"rounded-t-xl round":0===r,"rounded-b-xl round":r===e.length-1}),href:t.hash,onClick:()=>{h(t.hash),x(Date.now())},children:t.nameEng})},t.hash))})})]})}},6472:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(7247);r(8964);var a=r(2787),i=r(9906),o=r(1929),n=r(7911);function l({links:e}){let{activeSection:t,setActiveSection:r,setTimeOfLastClick:l}=(0,n.q)();return s.jsx("header",{className:"hidden md:flex items-center justify-center fixed z-[999] w-full mt-4",children:s.jsx(a.E.div,{className:"flex p-1  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:s.jsx("ul",{className:"flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500",children:e.map(e=>s.jsx(a.E.li,{className:"flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,s.jsxs)(i.default,{className:(0,o.Z)("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":t===e.hash}),href:e.hash,onClick:()=>{r(e.hash),l(Date.now())},children:[e.nameEng,e.hash===t&&s.jsx(a.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},e.hash))})})})}},4928:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var s=r(7247),a=r(3982),i=r(8964),o=r(1715),n=r(2787);function l({activeButton:e,hiddenButton:t,setActiveButton:r}){let[a,l]=(0,i.useState)(!1),d={visible:{scale:1,opacity:.7,y:0},hover:{scale:1.2},hidden:{scale:.5,opacity:0,y:50}};return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[s.jsx(o.M,{children:a&&s.jsx(n.E.button,{initial:"hidden",animate:"visible",exit:"hidden",variants:d,transition:{duration:.3},className:"hidden  md:flex items-center justify-center w-[2rem] h-[2rem] bg-white  drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full dark:bg-gray-950",children:s.jsx("p",{className:"text-sm font-semibold",children:t})},"languageSwitcher")}),s.jsx(n.E.button,{className:"bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950",variants:d,initial:"visible",whileHover:"hover",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:r,children:s.jsx("p",{className:"font-semibold",children:e})})]})}var d=r(2662),c=r(5495);function m(){let{theme:e,toggleTheme:t}=(0,a.F)();return s.jsx("div",{className:"fixed bottom-5 right-5",children:s.jsx(l,{activeButton:"light"===e?s.jsx(d.Z,{}):s.jsx(c.Z,{}),hiddenButton:"light"===e?s.jsx(c.Z,{size:14}):s.jsx(d.Z,{size:14}),setActiveButton:t})})}},7911:(e,t,r)=>{"use strict";r.d(t,{default:()=>o,q:()=>n});var s=r(7247),a=r(8964);let i=(0,a.createContext)(null);function o({children:e}){let[t,r]=(0,a.useState)("#home"),[o,n]=(0,a.useState)(0);return s.jsx(i.Provider,{value:{activeSection:t,setActiveSection:r,timeOfLastClick:o,setTimeOfLastClick:n},children:e})}function n(){let e=(0,a.useContext)(i);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},3982:(e,t,r)=>{"use strict";r.d(t,{F:()=>n,default:()=>o});var s=r(7247),a=r(8964);let i=(0,a.createContext)(null);function o({children:e}){let[t,r]=(0,a.useState)("light");return s.jsx(i.Provider,{value:{theme:t,toggleTheme:()=>{"light"===t?(r("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(r("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:e})}function n(){let e=(0,a.useContext)(i);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},9442:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v,metadata:()=>y});var s=r(2051),a=r(2683),i=r.n(a);r(5023),r(6269);var o=r(5347);(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\containers\active-section.tsx#ActiveSectionContext`);let n=(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\containers\active-section.tsx#default`);(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\containers\active-section.tsx#useActiveSectionContext`);var l=r(9171),d=r(247);let c=(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\containers\theme-context.tsx#default`);function m({children:e}){return s.jsx(c,{children:(0,s.jsxs)(n,{children:[s.jsx(l.c,{}),s.jsx(d.x7,{}),e]})})}function h(){return s.jsx("footer",{className:"mb-5 px-4 text-center text-gray-600",children:s.jsx("small",{className:"mb-2 block text-lg font-semibold",children:"\xa9 Made by Omkar Bhavare \uD83E\uDEF6"})})}(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\containers\theme-context.tsx#useTheme`);let x=(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\theme-controller.tsx#default`),u=(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\hamburger-menu.tsx#default`),b=(0,o.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\header.tsx#default`),g=[{nameEng:"Home",hash:"#home"},{nameEng:"About",hash:"#about"},{nameEng:"Projects",hash:"#projects"},{nameEng:"Skills",hash:"#skills"},{nameEng:"Contact",hash:"#contact"}];function f(){return(0,s.jsxs)("nav",{children:[s.jsx(u,{links:g}),s.jsx(b,{links:g})]})}let y={title:"Omkar Bhavare Portfolio",description:"Frontend Advance Personal portfolio"};function v({children:e}){return s.jsx("html",{lang:"en",className:"!scroll-smooth",children:(0,s.jsxs)("body",{className:`${i().variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`,children:[s.jsx("div",{className:"bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"}),s.jsx("div",{className:"bg-[#dbd7fb] absolute top-[-1rem] -z-[10]  flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"}),(0,s.jsxs)(m,{children:[s.jsx(f,{}),e,s.jsx(h,{}),s.jsx(x,{})]})]})})}},5023:()=>{}};