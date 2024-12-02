(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},3028:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>f,pages:()=>u,routeModule:()=>p,tree:()=>l}),r(2841),r(9442),r(996);var n=r(170),a=r(5002),o=r(3876),i=r.n(o),s=r(6299),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2841)),"C:\\Users\\PC\\Desktop\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9442)),"C:\\Users\\PC\\Desktop\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\PC\\Desktop\\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\\src\\app\\page.tsx"],f="/page",d={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9265:(e,t,r)=>{Promise.resolve().then(r.bind(r,2894)),Promise.resolve().then(r.bind(r,3747)),Promise.resolve().then(r.bind(r,8856)),Promise.resolve().then(r.bind(r,2081)),Promise.resolve().then(r.bind(r,1159))},5783:(e,t,r)=>{"use strict";var n=r(6617),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var a=p(r);a&&a!==m&&e(t,a,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var s=c(t),g=c(r),h=0;h<i.length;++h){var y=i[h];if(!o[y]&&!(n&&n[y])&&!(g&&g[y])&&!(s&&s[y])){var v=d(r,y);try{l(t,y,v)}catch(e){}}}}return t}},4597:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var n=r(1561),a=r.n(n)},5889:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let n=r(352),a=r(6870),o=r(7247),i=a._(r(8964)),s=n._(r(6817)),c=n._(r(9901)),l=r(1807),u=r(1098),f=r(8127);r(8963);let d=r(1579),p=n._(r(9857)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,a,o,i){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let y=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:a,height:s,width:c,decoding:l,className:u,style:f,fetchPriority:d,placeholder:p,loading:m,unoptimized:y,fill:v,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:E,sizesInput:_,onLoad:j,onError:P,...S}=e;return(0,o.jsx)("img",{...S,...h(d),loading:m,width:c,height:s,decoding:l,"data-nimg":v?"fill":"1",className:u,style:f,sizes:a,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,p,x,b,w,y,_))},[r,p,x,b,w,P,y,_,t]),onLoad:e=>{g(e.currentTarget,p,x,b,w,y,_)},onError:e=>{E(!0),"empty"!==p&&w(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,o.jsx)(c.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),n=(0,i.useContext)(f.ImageConfigContext),a=(0,i.useMemo)(()=>{let e=m||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:c}=e,g=(0,i.useRef)(s);(0,i.useEffect)(()=>{g.current=s},[s]);let h=(0,i.useRef)(c);(0,i.useEffect)(()=>{h.current=c},[c]);let[x,b]=(0,i.useState)(!1),[w,E]=(0,i.useState)(!1),{props:_,meta:j}=(0,l.getImgProps)(e,{defaultLoader:p.default,imgConf:a,blurComplete:x,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:E,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8679:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.AmpContext},5142:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.HeadManagerContext},8127:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.ImageConfigContext},7892:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1807:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(8963);let n=r(8226),a=r(1098);function o(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,c,l,{src:u,sizes:f,unoptimized:d=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:x=!1,style:b,overrideSrc:w,onLoad:E,onLoadingComplete:_,placeholder:j="empty",blurDataURL:P,fetchPriority:S,decoding:k="async",layout:O,objectFit:R,objectPosition:C,lazyBoundary:A,lazyRoot:N,...M}=e,{imgConf:T,showAltText:$,blurComplete:z,defaultLoader:I}=t,D=T||a.imageConfigDefault;if("allSizes"in D)s=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);s={...D,allSizes:e,deviceSizes:t}}if(void 0===I)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=M.loader||I;delete M.loader,delete M.srcSet;let U="__next_img_default"in L;if(U){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!f&&(f=t)}let W="",F=i(y),Y=i(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,l=e.blurHeight,P=P||e.blurDataURL,W=e.src,!x){if(F||Y){if(F&&!Y){let t=F/e.width;Y=Math.round(e.height*t)}else if(!F&&Y){let t=Y/e.height;F=Math.round(e.width*t)}}else F=e.width,Y=e.height}}let X=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(d=!0,X=!1),s.unoptimized&&(d=!0),U&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(d=!0),p&&(S="high");let q=i(h),H=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:C}:{},$?{}:{color:"transparent"},b),B=z||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:Y,blurWidth:c,blurHeight:l,blurDataURL:P||"",objectFit:H.objectFit})+'")':'url("'+j+'")',G=B?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},V=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:o,sizes:i,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}}(t,a,i),u=c.length-1;return{sizes:i||"w"!==l?i:"100vw",srcSet:c.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===l?e:n+1)+l).join(", "),src:s({config:t,src:r,quality:o,width:c[u]})}}({config:s,src:u,unoptimized:d,width:F,quality:q,sizes:f,loader:L});return{props:{...M,loading:X?"lazy":m,fetchPriority:S,width:F,height:Y,decoding:k,className:g,style:{...H,...G},sizes:V.sizes,srcSet:V.srcSet,src:w||V.src},meta:{unoptimized:d,priority:p,placeholder:j,fill:x}}}},9901:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let n=r(352),a=r(6870),o=r(7247),i=a._(r(8964)),s=n._(r(8070)),c=r(8679),l=r(5142),u=r(7892);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(8963);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let o=!0,i=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){i=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8226:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:o,objectFit:i}=e,s=n?40*n:t,c=a?40*a:r,l=s&&c?"viewBox='0 0 "+s+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1098:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},1561:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},getImageProps:function(){return s}});let n=r(352),a=r(1807),o=r(5889),i=n._(r(9857));function s(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=o.Image},9857:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8070:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(8964),a=()=>{},o=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function s(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9507:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case i:case o:case f:case d:return e;default:switch(e=e&&e.$$typeof){case l:case c:case u:case m:case p:case s:return e;default:return t}}case n:return t}}}(e)===a}},4768:(e,t,r)=>{"use strict";e.exports=r(9507)},8952:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case o:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case h:case g:case c:return e;default:return t}}case a:return t}}}function E(e){return w(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=h,t.Memo=g,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return E(e)||w(e)===u},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===h},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===s||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===x||e.$$typeof===b||e.$$typeof===y)},t.typeOf=w},6617:(e,t,r)=>{"use strict";e.exports=r(8952)},2894:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(7247);r(8964);var a=r(4597),o=r(2787),i=r(6280),s=r(7431),c=r(4932);function l(){let{ref:e}=(0,c.r)("#about");return n.jsx(o.E.section,{className:"max-w-5xl mx-auto text-center mt-16 px-6 sm:px-12 leading-8 scroll-mt-28",initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{delay:.175},ref:e,id:"about",children:(0,n.jsxs)("div",{className:"container mx-auto",children:[n.jsx(s.pT,{direction:"up",delay:400,cascade:!0,damping:.1,triggerOnce:!0,children:n.jsx(i.Z,{children:"About Me"})}),(0,n.jsxs)("div",{className:"grid gap-10 sm:gap-16 lg:grid-cols-2  items-center text-start",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center mt-12",children:[n.jsx(s.pT,{direction:"up",delay:600,cascade:!0,damping:.1,triggerOnce:!0,children:(0,n.jsxs)("p",{className:"mt-4 text-med leading-loose text-gray-700 dark:text-white/70",children:["I'm ",n.jsx("span",{className:"font-extrabold text-xl",children:"Omkar Bhavare"}),", a Software Development Engineer based in Pune, with a zest for creating impactful digital experiences. With nearly three years of experience in",n.jsx("span",{className:"font-extrabold text-xl",children:" Full-Stack development"}),", I specialize in React.js, JavaScript, and AWS. I thrive on transforming complex challenges into elegant solutions."]})}),n.jsx(s.pT,{direction:"up",delay:800,cascade:!0,damping:.1,triggerOnce:!0,children:(0,n.jsxs)("p",{className:"mt-4 text-lg leading-loose text-gray-700 dark:text-white/70",children:["Outside of work, I'm an avid tech enthusiast who loves exploring new trends and tools in development. Whether it's building a collaborative real-time code editor or optimizing performance for gaming applications, I enjoy",n.jsx("span",{className:"font-extrabold text-xl",children:" pushing the boundaries"})," of what's possible with technology."]})}),n.jsx(s.pT,{direction:"up",delay:1e3,cascade:!0,damping:.1,triggerOnce:!0,children:n.jsx("p",{className:"mt-4 text-lg leading-loose text-gray-700 dark:text-white/70",children:"I invite you to connect with me if you're interested in collaboration or simply want to share insights about the ever-evolving tech landscape!"})})]}),n.jsx("div",{className:"flex justify-center",children:n.jsx(s.pT,{direction:"right",delay:600,cascade:!0,damping:.1,triggerOnce:!0,children:n.jsx(a.default,{src:"/about.png",width:"800",height:"800",alt:"portrait",quality:"100",priority:!0,className:"rounded-full object-cover"})})})]})]})})}},3747:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r(7247),a=r(8964),o=r(2787),i=r(4932);function s({text:e,disabled:t}){return n.jsx("button",{type:"submit",className:"h-12 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all",disabled:t,children:e})}let c={_origin:"https://api.emailjs.com"},l=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}let f=(e,t,r={})=>new Promise((n,a)=>{let o=new XMLHttpRequest;o.addEventListener("load",({target:e})=>{let t=new u(e);200===t.status||"OK"===t.text?n(t):a(t)}),o.addEventListener("error",({target:e})=>{a(new u(e))}),o.open("POST",c._origin+e,!0),Object.keys(r).forEach(e=>{o.setRequestHeader(e,r[e])}),o.send(t)}),d={send:(e,t,r,n)=>{let a=n||c._userID;return l(a,e,t),f("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})}};var p=r(6280);function m(){let{ref:e}=(0,i.r)("#contact"),[t,r]=(0,a.useState)({senderEmail:"",message:""}),[c,l]=(0,a.useState)(!1),[u,f]=(0,a.useState)(""),m=e=>{r({...t,[e.target.name]:e.target.value})};return(0,n.jsxs)(o.E.section,{id:"contact",ref:e,className:"mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},viewport:{once:!0},children:[n.jsx(p.Z,{children:"Contact Me"}),n.jsx("p",{className:"text-gray-700 -mt-6 dark:text-white/80",children:"Feel free to contact me directly through this form"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),l(!0),d.send("service_9hcj9pf","template_9nx5odh",{senderEmail:t.senderEmail,message:t.message},"akreZzG01YIIoqy5a").then(()=>{f("Email sent successfully!"),l(!1),r({senderEmail:"",message:""})}).catch(e=>{console.error("EmailJS Error:",e.text||e),f("Failed to send email. Please try again."),l(!1)})},className:"mt-10 flex flex-col dark:text-black",children:[n.jsx("input",{className:"h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none",name:"senderEmail",type:"email",required:!0,maxLength:500,placeholder:"Your email",value:t.senderEmail,onChange:m}),n.jsx("textarea",{className:"h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none",name:"message",placeholder:"Your message",required:!0,maxLength:5e3,value:t.message,onChange:m}),n.jsx(s,{text:c?"Sending...":"Submit",disabled:c})]}),u&&n.jsx("p",{className:"mt-4 text-gray-700 dark:text-white/80",children:u})]})}},8856:(e,t,r)=>{"use strict";r.d(t,{default:()=>w});var n=r(7247),a=r(4597),o=r(8964),i=r.n(o),s=r(2787),c=r(7431),l=r(9906),u={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=i().createContext&&i().createContext(u),d=function(){return(d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function m(e){return function(t){return i().createElement(g,d({attr:d({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return i().createElement(t.tag,d({key:r},t.attr),e(t.child))})}(e.child))}}function g(e){var t=function(t){var r,n=e.attr,a=e.size,o=e.title,s=p(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i().createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:d(d({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&i().createElement("title",null,o),e.children)};return void 0!==f?i().createElement(f.Consumer,null,function(e){return t(e)}):t(u)}function h(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(e)}function y(e){return m({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"}}]})(e)}var v=r(4932),x=r(7911);let b=(0,r(4523).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);function w(){let{ref:e}=(0,v.r)("#home",.5),{setActiveSection:t,setTimeOfLastClick:r}=(0,x.q)();return(0,n.jsxs)("section",{ref:e,id:"home",className:"mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem]",children:[n.jsx("div",{className:"flex items-center justify-center",children:(0,n.jsxs)("div",{className:"relative",children:[n.jsx(s.E.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:125,damping:10,duration:.2},children:n.jsx(a.default,{src:"/boy.png",width:"480",height:"480",alt:"portrait",quality:"100",priority:!0,className:"rounded-full object-cover shadow-xl"})}),n.jsx(s.E.span,{className:"text-6xl absolute bottom-8 right-12",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:125,damping:10,duration:.2},children:"\uD83D\uDC4B"})]})}),n.jsx(c.pT,{direction:"up",delay:400,cascade:!0,damping:.1,triggerOnce:!0,children:(0,n.jsxs)("h1",{className:"mb-10 mt-4 px-4 text-2xl sm:text-4xl",children:[n.jsx("span",{className:"font-medium !leading-[1.5] ",children:"Transform your ideas into a stunning website."})," "," ",n.jsx("p",{className:"text-[14px]",children:" Hi there! I'm a passionate software developer on a mission to bring your digital dreams to life with creative solutions and engaging user experiences. "})]})}),(0,n.jsxs)(s.E.div,{className:"flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium",initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,n.jsxs)(l.default,{href:"#contact",className:"group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition",onClick:()=>{t("#contact"),r(Date.now())},children:["Connect ",n.jsx(b,{color:"#9ca3af"})]}),n.jsx("a",{className:"bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60",href:"https://www.linkedin.com/in/omkarbhavare/",target:"_blank",children:n.jsx(h,{})}),n.jsx("a",{className:"bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60",href:"https://github.com/omkarbhavare",target:"_blank",children:n.jsx(y,{})})]})]})}},2081:(e,t,r)=>{"use strict";let n,a;r.d(t,{default:()=>B});var o=r(7247),i=r(8964),s=r(6280),c=r(6155),l=r(4597),u=r(1575),f=r(4811),d=r(2117);let p=new WeakMap;function m({target:e,contentRect:t,borderBoxSize:r}){var n;null===(n=p.get(e))||void 0===n||n.forEach(n=>{n({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:r}=t[0];return{width:e,height:r}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,r)}})})}function g(e){e.forEach(m)}let h=new Set;var y=r(787),v=r(3074);let x=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),b=()=>({time:0,x:x(),y:x()}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function E(e,t,r,n){let a=r[t],{length:o,position:i}=w[t],s=a.current,c=r.time;a.current=e["scroll"+i],a.scrollLength=e["scroll"+o]-e["client"+o],a.offset.length=0,a.offset[0]=0,a.offset[1]=a.scrollLength,a.progress=(0,y.Y)(0,a.scrollLength,a.current);let l=n-c;a.velocity=l>50?0:(0,v.R)(a.current-s,l)}let _={All:[[0,0],[1,1]]},j={start:0,center:.5,end:1};function P(e,t,r=0){let n=0;if(void 0!==j[e]&&(e=j[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?n=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?n=t/100*document.documentElement.clientWidth:e.endsWith("vh")?n=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(n=t*e),r+n}let S=[0,0];var k=r(684),O=r(9037);let R={x:0,y:0};var C=r(5573);let A=new WeakMap,N=new WeakMap,M=new WeakMap,T=e=>e===document.documentElement?window:e;var $=r(9881);function z(e,t){(0,d.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let I=()=>({scrollX:(0,u.BX)(0),scrollY:(0,u.BX)(0),scrollXProgress:(0,u.BX)(0),scrollYProgress:(0,u.BX)(0)}),D=e=>e&&"object"==typeof e&&e.mix,L=e=>D(e)?e.mix:void 0;var U=r(9951);function W(e,t){let r=function(e){let t=(0,f.h)(()=>(0,u.BX)(e)),{isStatic:r}=(0,i.useContext)(U._);if(r){let[,r]=(0,i.useState)(e);(0,i.useEffect)(()=>t.on("change",r),[])}return t}(t()),n=()=>r.set(t());return n(),(0,$.L)(()=>{let t=()=>C.Wi.update(n,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,C.Pn)(n)}}),r}function F(e,t,r,n){if("function"==typeof e)return function(e){u.S1.current=[],e();let t=W(u.S1.current,e);return u.S1.current=void 0,t}(e);let a="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],a=e[1+r],o=e[2+r],i=e[3+r],s=(0,k.s)(a,o,{mixer:L(o[0]),...i});return t?s(n):s}(t,r,n);return Array.isArray(e)?Y(e,a):Y([e],([e])=>a(e))}function Y(e,t){let r=(0,f.h)(()=>[]);return W(e,()=>{r.length=0;let n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)})}var X=r(2787);function q({title:e,description:t,tags:r,imageUrl:s,link:c}){let u=(0,i.useRef)(null),{scrollYProgress:d}=function({container:e,target:t,layoutEffect:r=!0,...o}={}){let s=(0,f.h)(I);return(r?$.L:i.useEffect)(()=>(z("target",t),z("container",e),function(e,{container:t=document.documentElement,...r}={}){let o=M.get(t);o||(o=new Set,M.set(t,o));let i=function(e,t,r,n={}){return{measure:()=>(function(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight})(e,n.target,r),update:t=>{E(e,"x",r,t),E(e,"y",r,t),r.time=t,(n.offset||n.target)&&function(e,t,r){let{offset:n=_.All}=r,{target:a=e,axis:o="y"}=r,i="y"===o?"height":"width",s=a!==e?function(e,t){let r={x:0,y:0},n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if("svg"===n.tagName){let e=n.getBoundingClientRect(),t=(n=n.parentElement).getBoundingClientRect();r.x+=e.left-t.left,r.y+=e.top-t.top}else if(n instanceof SVGGraphicsElement){let{x:e,y:t}=n.getBBox();r.x+=e,r.y+=t;let a=null,o=n.parentNode;for(;!a;)"svg"===o.tagName&&(a=o),o=n.parentNode;n=a}else break;return r}(a,e):R,c=a===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in a&&"svg"!==a.tagName?a.getBBox():{width:a.clientWidth,height:a.clientHeight},l={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate,f=n.length;for(let e=0;e<f;e++){let r=function(e,t,r,n){let a=Array.isArray(e)?e:S,o=0;return"number"==typeof e?a=[e,e]:"string"==typeof e&&(a=(e=e.trim()).includes(" ")?e.split(" "):[e,j[e]?e:"0"]),P(a[0],r,n)-P(a[1],t)}(n[e],l[i],c[i],s[o]);u||r===t[o].interpolatorOffsets[e]||(u=!0),t[o].offset[e]=r}u&&(t[o].interpolate=(0,k.s)(t[o].offset,(0,O.Y)(n)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,r,n)},notify:()=>t(r)}}(t,e,b(),r);if(o.add(i),!A.has(t)){let e=()=>{for(let e of o)e.measure()},r=()=>{for(let e of o)e.update(C.frameData.timestamp)},i=()=>{for(let e of o)e.notify()},s=()=>{C.Wi.read(e,!1,!0),C.Wi.read(r,!1,!0),C.Wi.update(i,!1,!0)};A.set(t,s);let c=T(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&N.set(t,"function"==typeof t?(h.add(t),a||(a=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};h.forEach(e=>e(t))},window.addEventListener("resize",a)),()=>{h.delete(t),!h.size&&a&&(a=void 0)}):function(e,t){var r;n||"undefined"==typeof ResizeObserver||(n=new ResizeObserver(g));let a=("string"==typeof(r=e)?r=document.querySelectorAll(r):r instanceof Element&&(r=[r]),Array.from(r||[]));return a.forEach(e=>{let r=p.get(e);r||(r=new Set,p.set(e,r)),r.add(t),null==n||n.observe(e)}),()=>{a.forEach(e=>{let r=p.get(e);null==r||r.delete(t),(null==r?void 0:r.size)||null==n||n.unobserve(e)})}}(t,s)),c.addEventListener("scroll",s,{passive:!0})}let s=A.get(t);return C.Wi.read(s,!1,!0),()=>{var e;(0,C.Pn)(s);let r=M.get(t);if(!r||(r.delete(i),r.size))return;let n=A.get(t);A.delete(t),n&&(T(t).removeEventListener("scroll",n),null===(e=N.get(t))||void 0===e||e(),window.removeEventListener("resize",n))}}(({x:e,y:t})=>{s.scrollX.set(e.current),s.scrollXProgress.set(e.progress),s.scrollY.set(t.current),s.scrollYProgress.set(t.progress)},{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(o.offset)]),s}({target:u,offset:["0 1","1.33 1"]}),m=F(d,[0,1],[.8,1]),y=F(d,[0,1],[.6,1]);return o.jsx(X.E.div,{ref:u,style:{scale:m,opacity:y},className:"group mb-3 sm:mb-8 last:mb-0",children:o.jsx("section",{className:"bg-white max-w-full md:max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20",children:(0,o.jsxs)("div",{className:"pt-3 pb-6 px-4 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col sm:flex-row items-center h-auto",children:[(0,o.jsxs)("div",{className:"flex-1 sm:max-w-[50%]",children:[o.jsx("h3",{className:"text-2xl font-semibold",children:e}),o.jsx("p",{className:"mt-1 leading-relaxed text-gray-700 dark:text-white/70",children:t}),o.jsx("ul",{className:"flex flex-wrap mt-4 gap-2 sm:mt-auto",children:r.map((e,t)=>o.jsx("li",{className:"bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70",children:e},t))}),o.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:o.jsx("button",{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition",children:"Preview"})})]}),o.jsx("div",{className:"flex justify-center sm:justify-end mt-4 sm:mt-0 sm:ml-6 sm:max-w-[40%]",children:o.jsx(l.default,{src:s,alt:"Project I worked on",quality:95,width:300,height:200,className:"rounded-t-lg shadow-2xl transition object-contain sm:max-w-[300px] sm:max-h-[200px]"})})]})})})}var H=r(4932);function B(){let{ref:e}=(0,H.r)("#projects",.1);return(0,o.jsxs)("section",{ref:e,id:"projects",className:"scroll-mt-28 mb-28",children:[o.jsx(s.Z,{children:"My works"}),o.jsx("div",{children:c.nD.map((e,t)=>(0,i.createElement)(q,{...e,key:t}))})]})}},6280:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7247);function a({children:e}){return n.jsx("h2",{className:"text-3xl font-medium capitalize mb-8 text-center",children:e})}r(8964)},1159:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(7247);r(8964);var a=r(6280),o=r(6155),i=r(4932),s=r(2787);let c={initial:{opacity:0,y:100},animate:e=>({opacity:1,y:0,transition:{delay:.05*e}})};function l(){let{ref:e}=(0,i.r)("#skills");return(0,n.jsxs)("section",{id:"skills",ref:e,className:"mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40",children:[n.jsx(a.Z,{children:"My Skills"}),n.jsx("ul",{className:"flex flex-wrap justify-center gap-2 text-lg text-gray-800",children:o.ZU.map((e,t)=>n.jsx(s.E.li,{className:"bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80",variants:c,initial:"initial",whileInView:"animate",viewport:{once:!0},custom:t,children:e},t))})]})}},6155:(e,t,r)=>{"use strict";r.d(t,{ZU:()=>a,nD:()=>n});let n=[{title:"IMDB+ Clone",description:"Built an IMDb rating clone featuring real-time data, pagination, search, bookmarking, manual ratings, multilingual support, and local storage!",tags:["React","Javascript","Tailwind","NodeJS"],imageUrl:"/imdb.jpg",link:"https://cineverse-1x8a2lqhz-omkarbhavares-projects.vercel.app/"},{title:"Expense Tracker",description:"Developed an Expense Tracker app to manage accounts effectively, enabling users to log expenses, categorize transactions & latest trends in economy.",tags:["React","Restful APIs","NodeJs"],imageUrl:"/money.png",link:"https://money-ball.vercel.app/"},{title:"Swiggy Clone",description:"I'm building a Swiggy clone, a feature-rich food delivery application that includes functionalities like user authentication, restaurant listing, order & payment.",tags:["React","Redux","Swiggy API","Tailwind","NodeJS","JEST"],imageUrl:"/swiggy.png",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy--OfGwMTiud7ENwpDxXgFwFo9IHtct5Kw&s"},{title:"Hirit Job Portal + Resume Builder",description:"Built an engaging Hirit Job Portal for users to search jobs and create resumes, while recruiters can easily post listings!",tags:["React","Redux","Javascript","Tailwind","Supabase"],imageUrl:"/job.jpeg",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy--OfGwMTiud7ENwpDxXgFwFo9IHtct5Kw&s"}],a=["HTML","CSS","JavaScript","TypeScript","React","Next.js","Node.js","Git","Tailwind","Prisma","MongoDB","Redux Toolkit","Express","Framer Motion","JAVA","AWS","Docker"]},4932:(e,t,r)=>{"use strict";r.d(t,{r:()=>o});var n=r(7911);r(8964);var a=r(337);function o(e,t=.75){let{ref:r,inView:o}=(0,a.YD)({threshold:t}),{setActiveSection:i,timeOfLastClick:s}=(0,n.q)();return{ref:r}}},886:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION:function(){return n},FLIGHT_PARAMETERS:function(){return c},NEXT_DID_POSTPONE_HEADER:function(){return u},NEXT_ROUTER_PREFETCH_HEADER:function(){return o},NEXT_ROUTER_STATE_TREE:function(){return a},NEXT_RSC_UNION_QUERY:function(){return l},NEXT_URL:function(){return i},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_HEADER:function(){return r}});let r="RSC",n="Next-Action",a="Next-Router-State-Tree",o="Next-Router-Prefetch",i="Next-Url",s="text/x-component",c=[[r],[a],[o]],l="_rsc",u="x-nextjs-postponed";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6410:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var a={},o=t.split(n),i=(r||{}).decode||e,s=0;s<o.length;s++){var c=o[s],l=c.indexOf("=");if(!(l<0)){var u=c.substr(0,l).trim(),f=c.substr(++l,c.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==a[u]&&(a[u]=function(e,t){try{return t(e)}catch(t){return e}}(f,i))}}return a},t.serialize=function(e,t,n){var o=n||{},i=o.encode||r;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!a.test(e))throw TypeError("argument name is invalid");var s=i(t);if(s&&!a.test(s))throw TypeError("argument val is invalid");var c=e+"="+s;if(null!=o.maxAge){var l=o.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(o.domain){if(!a.test(o.domain))throw TypeError("option domain is invalid");c+="; Domain="+o.domain}if(o.path){if(!a.test(o.path))throw TypeError("option path is invalid");c+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(c+="; HttpOnly"),o.secure&&(c+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},4644:(e,t)=>{"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var a="",o=r+1;o<e.length;){var i=e.charCodeAt(o);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i){a+=e[o++];continue}break}if(!a)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:a}),r=o;continue}if("("===n){var s=1,c="",o=r+1;if("?"===e[o])throw TypeError('Pattern cannot start with "?" at '+o);for(;o<e.length;){if("\\"===e[o]){c+=e[o++]+e[o++];continue}if(")"===e[o]){if(0==--s){o++;break}}else if("("===e[o]&&(s++,"?"!==e[o+1]))throw TypeError("Capturing groups are not allowed at "+o);c+=e[o++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!c)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:c}),r=o;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,i="[^"+o(t.delimiter||"/#?")+"]+?",s=[],c=0,l=0,u="",f=function(e){if(l<r.length&&r[l].type===e)return r[l++].value},d=function(e){var t=f(e);if(void 0!==t)return t;var n=r[l];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},p=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};l<r.length;){var m=f("CHAR"),g=f("NAME"),h=f("PATTERN");if(g||h){var y=m||"";-1===a.indexOf(y)&&(u+=y,y=""),u&&(s.push(u),u=""),s.push({name:g||c++,prefix:y,suffix:"",pattern:h||i,modifier:f("MODIFIER")||""});continue}var v=m||f("ESCAPED_CHAR");if(v){u+=v;continue}if(u&&(s.push(u),u=""),f("OPEN")){var y=p(),x=f("NAME")||"",b=f("PATTERN")||"",w=p();d("CLOSE"),s.push({name:x||(b?c++:""),pattern:x&&!b?i:b,prefix:y,suffix:w,modifier:f("MODIFIER")||""});continue}d("END")}return s}function n(e,t){void 0===t&&(t={});var r=i(t),n=t.encode,a=void 0===n?function(e){return e}:n,o=t.validate,s=void 0===o||o,c=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"==typeof o){r+=o;continue}var i=t?t[o.name]:void 0,l="?"===o.modifier||"*"===o.modifier,u="*"===o.modifier||"+"===o.modifier;if(Array.isArray(i)){if(!u)throw TypeError('Expected "'+o.name+'" to not repeat, but got an array');if(0===i.length){if(l)continue;throw TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<i.length;f++){var d=a(i[f],o);if(s&&!c[n].test(d))throw TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but got "'+d+'"');r+=o.prefix+d+o.suffix}continue}if("string"==typeof i||"number"==typeof i){var d=a(String(i),o);if(s&&!c[n].test(d))throw TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+d+'"');r+=o.prefix+d+o.suffix;continue}if(!l){var p=u?"an array":"a string";throw TypeError('Expected "'+o.name+'" to be '+p)}}return r}}function a(e,t,r){void 0===r&&(r={});var n=r.decode,a=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var o=n[0],i=n.index,s=Object.create(null),c=1;c<n.length;c++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return a(e,r)}):s[r.name]=a(n[e],r)}}(c);return{path:o,index:i,params:s}}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var n=r.strict,a=void 0!==n&&n,s=r.start,c=r.end,l=r.encode,u=void 0===l?function(e){return e}:l,f="["+o(r.endsWith||"")+"]|$",d="["+o(r.delimiter||"/#?")+"]",p=void 0===s||s?"^":"",m=0;m<e.length;m++){var g=e[m];if("string"==typeof g)p+=o(u(g));else{var h=o(u(g.prefix)),y=o(u(g.suffix));if(g.pattern){if(t&&t.push(g),h||y){if("+"===g.modifier||"*"===g.modifier){var v="*"===g.modifier?"?":"";p+="(?:"+h+"((?:"+g.pattern+")(?:"+y+h+"(?:"+g.pattern+"))*)"+y+")"+v}else p+="(?:"+h+"("+g.pattern+")"+y+")"+g.modifier}else p+="("+g.pattern+")"+g.modifier}else p+="(?:"+h+y+")"+g.modifier}}if(void 0===c||c)a||(p+=d+"?"),p+=r.endsWith?"(?="+f+")":"$";else{var x=e[e.length-1],b="string"==typeof x?d.indexOf(x[x.length-1])>-1:void 0===x;a||(p+="(?:"+d+"(?="+f+"))?"),b||(p+="(?="+d+"|"+f+")")}return new RegExp(p,i(r))}function c(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?RegExp("(?:"+e.map(function(e){return c(e,t,n).source}).join("|")+")",i(n)):s(r(e,n),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return n(r(e,t),t)},t.tokensToFunction=n,t.match=function(e,t){var r=[];return a(c(e,r,t),r,t)},t.regexpToFunction=a,t.tokensToRegexp=s,t.pathToRegexp=c},4564:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataRoute:function(){return d}});let n=r(8269),a=function(e){return e&&e.__esModule?e:{default:e}}(r(1573)),o=r(1556),i=r(7419),s=r(7446),c=r(2061),l=r(270);function u(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,c.normalizeAppPath)(e),s=(0,i.getNamedRouteRegex)(n,!1),f=(0,o.interpolateDynamicPath)(n,t,s),d=u(e),p=d?`-${d}`:"",{name:m,ext:g}=a.default.parse(r);return(0,l.normalizePathSep)(a.default.join(f,`${m}${p}${g}`))}function d(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":e.endsWith("/sitemap")?t+=".xml":r=u(e.slice(0,-(a.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:o,name:i,ext:s}=a.default.parse(t),c=(0,n.isStaticMetadataRoute)(e);t=a.default.posix.join(o,`${i}${r?`-${r}`:""}${s}`,c?"":"[[...__metadata_id__]]","route")}return t}},8269:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return a},isMetadataRoute:function(){return u},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return l},isStaticMetadataRouteFile:function(){return c}});let n=r(270),a={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},o=["js","jsx","ts","tsx"],i=e=>`(?:${e.join("|")})`;function s(e,t,r){let o=[RegExp(`^[\\\\/]robots${r?`\\.${i(t.concat("txt"))}$`:""}`),RegExp(`^[\\\\/]manifest${r?`\\.${i(t.concat("webmanifest","json"))}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`\\.${i(t.concat("xml"))}$`:""}`),RegExp(`[\\\\/]${a.icon.filename}\\d?${r?`\\.${i(t.concat(a.icon.extensions))}$`:""}`),RegExp(`[\\\\/]${a.apple.filename}\\d?${r?`\\.${i(t.concat(a.apple.extensions))}$`:""}`),RegExp(`[\\\\/]${a.openGraph.filename}\\d?${r?`\\.${i(t.concat(a.openGraph.extensions))}$`:""}`),RegExp(`[\\\\/]${a.twitter.filename}\\d?${r?`\\.${i(t.concat(a.twitter.extensions))}$`:""}`)],s=(0,n.normalizePathSep)(e);return o.some(e=>e.test(s))}function c(e){return s(e,[],!0)}function l(e){return"/robots"===e||"/manifest"===e||c(e)}function u(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,o,!1)}},9787:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(6410);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},3732:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return a},extractInterceptionRouteInformation:function(){return i},isInterceptionRouteAppPath:function(){return o}});let n=r(2061),a=["(..)(..)","(.)","(..)","(...)"];function o(e){return void 0!==e.split("/").find(e=>a.find(t=>e.startsWith(t)))}function i(e){let t,r,o;for(let n of e.split("/"))if(r=a.find(e=>n.startsWith(e))){[t,o]=e.split(r,2);break}if(!t||!r||!o)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":o="/"===t?`/${o}`:t+"/"+o;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);o=t.split("/").slice(0,-1).concat(o).join("/");break;case"(...)":o="/"+o;break;case"(..)(..)":let i=t.split("/");if(i.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);o=i.slice(0,-2).concat(o).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:o}}},1556:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return g},interpolateDynamicPath:function(){return p},normalizeDynamicRouteParams:function(){return m},normalizeVercelUrl:function(){return d}});let n=r(7360),a=r(4444),o=r(546),i=r(7419),s=r(2627),c=r(8863),l=r(5316),u=r(2061),f=r(8912);function d(e,t,r,a,o){if(a&&t&&o){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query)))(e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)||(r||Object.keys(o.groups)).includes(e))&&delete t.query[e];e.url=(0,n.format)(t)}}function p(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let{optional:a,repeat:o}=r.groups[n],i=`[${o?"...":""}${n}]`;a&&(i=`[${i}]`);let s=e.indexOf(i);if(s>-1){let r;let a=t[n];r=Array.isArray(a)?a.map(e=>e&&encodeURIComponent(e)).join("/"):a?encodeURIComponent(a):"",e=e.slice(0,s)+r+e.slice(s+i.length)}}return e}function m(e,t,r,n){let a=!0;return r?{params:e=Object.keys(r.groups).reduce((o,i)=>{let s=e[i];"string"==typeof s&&(s=(0,u.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,u.normalizeRscURL)(e)),e)));let c=n[i],l=r.groups[i].optional;return((Array.isArray(c)?c.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(c))||void 0===s&&!(l&&t))&&(a=!1),l&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${i}]]`))&&(s=void 0,delete e[i]),s&&"string"==typeof s&&r.groups[i].repeat&&(s=s.split("/")),s&&(o[i]=s),o},{}),hasValidParams:a}:{params:e,hasValidParams:!1}}function g({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:u,trailingSlash:g,caseSensitive:h}){let y,v,x;return u&&(y=(0,i.getNamedRouteRegex)(e,!1),x=(v=(0,s.getRouteMatcher)(y))(e)),{handleRewrites:function(i,s){let f={},d=s.pathname,p=n=>{let l=(0,o.getPathMatch)(n.source+(g?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!h})(s.pathname);if((n.has||n.missing)&&l){let e=(0,c.matchHas)(i,s.query,n.has,n.missing);e?Object.assign(l,e):l=!1}if(l){let{parsedDestination:o,destQuery:i}=(0,c.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:l,query:s.query});if(o.protocol)return!0;if(Object.assign(f,i,l),Object.assign(s.query,o.query),delete o.query,Object.assign(s,o),d=s.pathname,r&&(d=d.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,a.normalizeLocalePath)(d,t.locales);d=e.pathname,s.query.nextInternalLocale=e.detectedLocale||l.nextInternalLocale}if(d===e)return!0;if(u&&v){let e=v(d);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])p(e);if(d!==e){let t=!1;for(let e of n.afterFiles||[])if(t=p(e))break;if(!t&&!(()=>{let t=(0,l.removeTrailingSlash)(d||"");return t===(0,l.removeTrailingSlash)(e)||(null==v?void 0:v(t))})()){for(let e of n.fallback||[])if(t=p(e))break}}return f},defaultRouteRegex:y,dynamicRouteMatcher:v,defaultRouteMatches:x,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:a}=y;return{re:{exec:o=>{let i=Object.fromEntries(new URLSearchParams(o)),s=t&&n&&i["1"]===n;for(let e of Object.keys(i)){let t=i[e];e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)&&(i[e.substring(f.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete i[e])}let c=Object.keys(a||{}),l=e=>{if(t){let a=Array.isArray(e),o=a?e[0]:e;if("string"==typeof o&&t.locales.some(e=>e.toLowerCase()===o.toLowerCase()&&(n=e,r.locale=n,!0)))return a&&e.splice(0,1),!a||0===e.length}return!1};return c.every(e=>i[e])?c.reduce((t,r)=>{let n=null==a?void 0:a[r];return n&&!l(i[r])&&(t[e[n].pos]=i[r]),t},{}):Object.keys(i).reduce((e,t)=>{if(!l(i[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:i[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,y,x),normalizeVercelUrl:(e,t,r)=>d(e,t,r,u,y),interpolateDynamicPath:(e,t)=>p(e,t,y)}}},7196:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return a}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function a(e){return r.test(e)?e.replace(n,"\\$&"):e}},7446:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&4294967295;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},4444:(e,t)=>{"use strict";function r(e,t){let r;let n=e.split("/");return(t||[]).some(t=>!!n[1]&&n[1].toLowerCase()===t.toLowerCase()&&(r=t,n.splice(1,1),e=n.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},1573:(e,t,r)=>{"use strict";let n;n=r(5315),e.exports=n},8427:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},270:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},2061:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return o},normalizeRscURL:function(){return i}});let n=r(8427),a=r(819);function o(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,a.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function i(e){return e.replace(/\.rsc($|\?)/,"$1")}},550:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return a}}),r(5903);let n=r(73);function a(e,t){let r=new URL("http://n"),a=t?new URL(t,r):e.startsWith(".")?new URL("http://n"):r,{pathname:o,searchParams:i,search:s,hash:c,href:l,origin:u}=new URL(e,a);if(u!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:o,query:(0,n.searchParamsToUrlQuery)(i),search:s,hash:c,href:l.slice(r.origin.length)}}},4940:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return o}});let n=r(73),a=r(550);function o(e){if(e.startsWith("/"))return(0,a.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},546:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return a}});let n=r(4644);function a(e,t){let r=[],a=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),o=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(a.source),a.flags):a,r);return(e,n)=>{if("string"!=typeof e)return!1;let a=o(e);if(!a)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete a.params[e.name];return{...n,...a.params}}}},8863:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return f},matchHas:function(){return u},prepareDestination:function(){return d}});let n=r(4644),a=r(7196),o=r(4940),i=r(3732),s=r(886),c=r(9787);function l(e){return e.replace(/__ESC_COLON_/gi,":")}function u(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let a={},o=r=>{let n;let o=r.key;switch(r.type){case"header":o=o.toLowerCase(),n=e.headers[o];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,c.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[o];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return a[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(o)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{a[e]=t.groups[e]}):"host"===r.type&&t[0]&&(a.host=t[0])),!0}return!1};return!!r.every(e=>o(e))&&!n.some(e=>o(e))&&a}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function d(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let c=e.destination;for(let t of Object.keys({...e.params,...r}))c=c.replace(RegExp(":"+(0,a.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t);let u=(0,o.parseUrl)(c),d=u.query,p=l(""+u.pathname+(u.hash||"")),m=l(u.hostname||""),g=[],h=[];(0,n.pathToRegexp)(p,g),(0,n.pathToRegexp)(m,h);let y=[];g.forEach(e=>y.push(e.name)),h.forEach(e=>y.push(e.name));let v=(0,n.compile)(p,{validate:!1}),x=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(d))Array.isArray(r)?d[t]=r.map(t=>f(l(t),e.params)):"string"==typeof r&&(d[t]=f(l(r),e.params));let b=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!b.some(e=>y.includes(e)))for(let t of b)t in d||(d[t]=e.params[t]);if((0,i.isInterceptionRouteAppPath)(p))for(let t of p.split("/")){let r=i.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){e.params["0"]=r;break}}try{let[r,n]=(t=v(e.params)).split("#",2);u.hostname=x(e.params),u.pathname=r,u.hash=(n?"#":"")+(n||""),delete u.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return u.query={...r,...u.query},{newUrl:t,destQuery:d,parsedDestination:u}}},73:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,a]=e;Array.isArray(a)?a.forEach(e=>t.append(r,n(e))):t.set(r,n(a))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return o},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return a}})},5316:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},2627:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return a}});let n=r(5903);function a(e){let{re:t,groups:r}=e;return e=>{let a=t.exec(e);if(!a)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=a[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>o(e)):t.repeat?[o(n)]:o(n))}),i}}},7419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return c},parseParameter:function(){return i}});let n=r(3732),a=r(7196),o=r(5316);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){let{key:e,optional:n,repeat:c}=i(o[1]);return r[e]={pos:s++,repeat:c,optional:n},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=i(o[1]);return r[e]={pos:s++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function c(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function l(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:o,keyPrefix:s}=e,{key:c,optional:l,repeat:u}=i(n),f=c.replace(/\W/g,"");s&&(f=""+s+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),s?o[f]=""+s+c:o[f]=c;let p=t?(0,a.escapeStringRegexp)(t):"";return u?l?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function u(e,t){let r;let i=(0,o.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),c={};return{namedParameterizedRoute:i.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return l({getSafeRouteKey:s,interceptionMarker:r,segment:o[1],routeKeys:c,keyPrefix:t?"nxtI":void 0})}return o?l({getSafeRouteKey:s,segment:o[1],routeKeys:c,keyPrefix:t?"nxtP":void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:c}}function f(e,t){let r=u(e,t);return{...c(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=s(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:a}=u(e,!1);return{namedRegex:"^"+a+(n?"(?:(/.*)?)":"")+"$"}}},819:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DEFAULT_SEGMENT_KEY:function(){return a},PAGE_SEGMENT_KEY:function(){return n},isGroupSegment:function(){return r}});let n="__PAGE__",a="__DEFAULT__"},5903:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return h},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return c},getLocationOrigin:function(){return i},getURL:function(){return s},isAbsoluteUrl:function(){return o},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return r||(r=!0,t=e(...a)),t}}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>a.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=i();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Error('"'+c(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class g extends Error{}class h extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},2841:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(2051),a=r(5347);let o=(0,a.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\about.tsx#default`),i=(0,a.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\contact.tsx#default`),s=(0,a.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\intro.tsx#default`),c=(0,a.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\projects.tsx#default`),l=(0,a.createProxy)(String.raw`C:\Users\PC\Desktop\Next-js-14-Personal-Portfolio-Website-Using-Framer-Motion-master\src\components\skills.tsx#default`);function u(){return(0,n.jsxs)("main",{className:"flex flex-col items-center pt-20 md:pt-28 px-4",children:[n.jsx(s,{}),n.jsx(o,{}),n.jsx(c,{}),n.jsx(l,{}),n.jsx(i,{})]})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(4564);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},673:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7431:(e,t,r)=>{"use strict";r.d(t,{pT:()=>te});var n,a=r(7247),o=r(8964),i=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),s=Math.abs,c=String.fromCharCode,l=Object.assign;function u(e,t,r){return e.replace(t,r)}function f(e,t){return e.indexOf(t)}function d(e,t){return 0|e.charCodeAt(t)}function p(e,t,r){return e.slice(t,r)}function m(e){return e.length}function g(e,t){return t.push(e),e}var h=1,y=1,v=0,x=0,b=0,w="";function E(e,t,r,n,a,o,i){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:h,column:y,length:i,return:""}}function _(e,t){return l(E("",null,null,"",null,null,0),e,{length:-e.length},t)}function j(){return b=x<v?d(w,x++):0,y++,10===b&&(y=1,h++),b}function P(){return d(w,x)}function S(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function k(e){return h=y=1,v=m(w=e),x=0,[]}function O(e){var t,r;return(t=x-1,r=function e(t){for(;j();)switch(b){case t:return x;case 34:case 39:34!==t&&39!==t&&e(b);break;case 40:41===t&&e(t);break;case 92:j()}return x}(91===e?e+2:40===e?e+1:e),p(w,t,r)).trim()}var R="-ms-",C="-moz-",A="-webkit-",N="comm",M="rule",T="decl",$="@keyframes";function z(e,t){for(var r="",n=e.length,a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function I(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case T:return e.return=e.return||e.value;case N:return"";case $:return e.return=e.value+"{"+z(e.children,n)+"}";case M:e.value=e.props.join(",")}return m(r=z(e.children,n))?e.return=e.value+"{"+r+"}":""}function D(e){var t=e.length;return function(r,n,a,o){for(var i="",s=0;s<t;s++)i+=e[s](r,n,a,o)||"";return i}}function L(e){var t;return t=function e(t,r,n,a,o,i,s,l,v){for(var _,k=0,R=0,C=s,A=0,M=0,T=0,$=1,z=1,I=1,D=0,L="",F=o,Y=i,X=a,q=L;z;)switch(T=D,D=j()){case 40:if(108!=T&&58==d(q,C-1)){-1!=f(q+=u(O(D),"&","&\f"),"&\f")&&(I=-1);break}case 34:case 39:case 91:q+=O(D);break;case 9:case 10:case 13:case 32:q+=function(e){for(;b=P();)if(b<33)j();else break;return S(e)>2||S(b)>3?"":" "}(T);break;case 92:q+=function(e,t){for(var r;--t&&j()&&!(b<48)&&!(b>102)&&(!(b>57)||!(b<65))&&(!(b>70)||!(b<97)););return r=x+(t<6&&32==P()&&32==j()),p(w,e,r)}(x-1,7);continue;case 47:switch(P()){case 42:case 47:g(E(_=function(e,t){for(;j();)if(e+b===57)break;else if(e+b===84&&47===P())break;return"/*"+p(w,t,x-1)+"*"+c(47===e?e:j())}(j(),x),r,n,N,c(b),p(_,2,-2),0),v);break;default:q+="/"}break;case 123*$:l[k++]=m(q)*I;case 125*$:case 59:case 0:switch(D){case 0:case 125:z=0;case 59+R:-1==I&&(q=u(q,/\f/g,"")),M>0&&m(q)-C&&g(M>32?W(q+";",a,n,C-1):W(u(q," ","")+";",a,n,C-2),v);break;case 59:q+=";";default:if(g(X=U(q,r,n,k,R,o,l,L,F=[],Y=[],C),i),123===D){if(0===R)e(q,r,X,X,F,i,C,l,Y);else switch(99===A&&110===d(q,3)?100:A){case 100:case 108:case 109:case 115:e(t,X,X,a&&g(U(t,X,X,0,0,o,l,L,o,F=[],C),Y),o,Y,C,l,a?F:Y);break;default:e(q,X,X,X,[""],Y,0,l,Y)}}}k=R=M=0,$=I=1,L=q="",C=s;break;case 58:C=1+m(q),M=T;default:if($<1){if(123==D)--$;else if(125==D&&0==$++&&125==(b=x>0?d(w,--x):0,y--,10===b&&(y=1,h--),b))continue}switch(q+=c(D),D*$){case 38:I=R>0?1:(q+="\f",-1);break;case 44:l[k++]=(m(q)-1)*I,I=1;break;case 64:45===P()&&(q+=O(j())),A=P(),R=C=m(L=q+=function(e){for(;!S(P());)j();return p(w,e,x)}(x)),D++;break;case 45:45===T&&2==m(q)&&($=0)}}return i}("",null,null,null,[""],e=k(e),0,[0],e),w="",t}function U(e,t,r,n,a,o,i,c,l,f,d){for(var m=a-1,g=0===a?o:[""],h=g.length,y=0,v=0,x=0;y<n;++y)for(var b=0,w=p(e,m+1,m=s(v=i[y])),_=e;b<h;++b)(_=(v>0?g[b]+" "+w:u(w,/&\f/g,g[b])).trim())&&(l[x++]=_);return E(e,t,r,0===a?M:c,l,f,d)}function W(e,t,r,n){return E(e,t,r,T,p(e,0,n),p(e,n+1,-1),n)}var F="undefined"!=typeof document,Y=function(e,t,r){for(var n=0,a=0;n=a,a=P(),38===n&&12===a&&(t[r]=1),!S(a);)j();return p(w,e,x)},X=function(e,t){var r=-1,n=44;do switch(S(n)){case 0:38===n&&12===P()&&(t[r]=1),e[r]+=Y(x-1,t,r);break;case 2:e[r]+=O(n);break;case 4:if(44===n){e[++r]=58===P()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=c(n)}while(n=j());return e},q=function(e,t){var r;return r=X(k(e),t),w="",r},H=new WeakMap,B=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||H.get(r))&&!n){H.set(e,!0);for(var a=[],o=q(t,a),i=r.props,s=0,c=0;s<o.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=a[s]?o[s].replace(/&\f/g,i[l]):i[l]+" "+o[s]}}},G=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},V=F?void 0:function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}}(function(){var e,t;return e=function(){var e={};return function(t){return e[t]}},t=Object.create(null),function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}),J=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case T:e.return=function e(t,r){switch(45^d(t,0)?(((r<<2^d(t,0))<<2^d(t,1))<<2^d(t,2))<<2^d(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+C+t+R+t+t;case 6828:case 4268:return A+t+R+t+t;case 6165:return A+t+R+"flex-"+t+t;case 5187:return A+t+u(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+R+"flex-$1$2")+t;case 5443:return A+t+R+"flex-item-"+u(t,/flex-|-self/,"")+t;case 4675:return A+t+R+"flex-line-pack"+u(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+R+u(t,"shrink","negative")+t;case 5292:return A+t+R+u(t,"basis","preferred-size")+t;case 6060:return A+"box-"+u(t,"-grow","")+A+t+R+u(t,"grow","positive")+t;case 4554:return A+u(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(t)-1-r>6)switch(d(t,r+1)){case 109:if(45!==d(t,r+4))break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+C+(108==d(t,r+3)?"$3":"$2-$3"))+t;case 115:return~f(t,"stretch")?e(u(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==d(t,r+1))break;case 6444:switch(d(t,m(t)-3-(~f(t,"!important")&&10))){case 107:return u(t,":",":"+A)+t;case 101:return u(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===d(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+R+"$2box$3")+t}break;case 5936:switch(d(t,r+11)){case 114:return A+t+R+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+R+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+R+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+R+t+t}return t}(e.value,e.length);break;case $:return z([_(e,{value:u(e.value,"@","@"+A)})],n);case M:if(e.length){var a,o;return a=e.props,o=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return z([_(e,{props:[u(t,/:(read-\w+)/,":"+C+"$1")]})],n);case"::placeholder":return z([_(e,{props:[u(t,/:(plac\w+)/,":"+A+"input-$1")]}),_(e,{props:[u(t,/:(plac\w+)/,":"+C+"$1")]}),_(e,{props:[u(t,/:(plac\w+)/,R+"input-$1")]})],n)}return""},a.map(o).join("")}}}],Q=function(e){var t=e.key;if(F&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var n=e.stylisPlugins||J,a={},o=[];F&&(l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)a[t[r]]=!0;o.push(e)}));var s=[B,G];if(F){var c,l,u,f,d=[I,(c=function(e){f.insert(e)},function(e){!e.root&&(e=e.return)&&c(e)})],p=D(s.concat(n,d));u=function(e,t,r,n){f=r,z(L(e?e+"{"+t.styles+"}":t.styles),p),n&&(y.inserted[t.name]=!0)}}else{var m=D(s.concat(n,[I])),g=V(n)(t),h=function(e,t){var r=t.name;return void 0===g[r]&&(g[r]=z(L(e?e+"{"+t.styles+"}":t.styles),m)),g[r]};u=function(e,t,r,n){var a=t.name,o=h(e,t);return void 0===y.compat?(n&&(y.inserted[a]=!0),o):n?void(y.inserted[a]=o):o}}var y={key:t,sheet:new i({key:t,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:u};return y.sheet.hydrate(o),y},K="undefined"!=typeof document;function Z(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}var ee=function(e,t,r){var n=e.key+"-"+t.name;(!1===r||!1===K&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},et=function(e,t,r){ee(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a="",o=t;do{var i=e.insert(t===o?"."+n:"",o,e.sheet,!0);K||void 0===i||(a+=i),o=o.next}while(void 0!==o);if(!K&&0!==a.length)return a}},er={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},en=/[A-Z]|^ms/g,ea=/_EMO_([^_]+?)_([^]*?)_EMO_/g,eo=function(e){return 45===e.charCodeAt(1)},ei=function(e){return null!=e&&"boolean"!=typeof e},es=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}(function(e){return eo(e)?e:e.replace(en,"-$&").toLowerCase()}),ec=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ea,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===er[e]||eo(e)||"number"!=typeof t||0===t?t:t+"px"};function el(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)n={name:a.name,styles:a.styles,next:n},a=a.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=el(e,t,r[a])+";";else for(var o in r){var i=r[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=o+"{"+t[i]+"}":ei(i)&&(n+=es(o)+":"+ec(o,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var s=0;s<i.length;s++)ei(i[s])&&(n+=es(o)+":"+ec(o,i[s])+";");else{var c=el(e,t,i);switch(o){case"animation":case"animationName":n+=es(o)+":"+c+";";break;default:n+=o+"{"+c+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var o=n,i=r(e);return n=o,el(e,t,i)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var eu=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function ef(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a,o=!0,i="";n=void 0;var s=e[0];null==s||void 0===s.raw?(o=!1,i+=el(r,t,s)):i+=s[0];for(var c=1;c<e.length;c++)i+=el(r,t,e[c]),o&&(i+=s[c]);eu.lastIndex=0;for(var l="";null!==(a=eu.exec(i));)l+="-"+a[1];return{name:function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(i)+l,styles:i,next:n}}var ed=!!o.useInsertionEffect&&o.useInsertionEffect,ep="undefined"!=typeof document&&ed||function(e){return e()};ed||o.useLayoutEffect;var em="undefined"!=typeof document,eg=o.createContext("undefined"!=typeof HTMLElement?Q({key:"css"}):null);eg.Provider;var eh=function(e){return(0,o.forwardRef)(function(t,r){return e(t,(0,o.useContext)(eg),r)})};em||(eh=function(e){return function(t){var r=(0,o.useContext)(eg);return null===r?(r=Q({key:"css"}),o.createElement(eg.Provider,{value:r},e(t,r))):e(t,r)}});var ey=o.createContext({}),ev={}.hasOwnProperty,ex="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",eb=function(e,t){var r={};for(var n in t)ev.call(t,n)&&(r[n]=t[n]);return r[ex]=e,r},ew=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;ee(t,r,n);var a=ep(function(){return et(t,r,n)});if(!em&&void 0!==a){for(var i,s=r.name,c=r.next;void 0!==c;)s+=" "+c.name,c=c.next;return o.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null},eE=eh(function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[ex],i=[n],s="";"string"==typeof e.className?s=Z(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var c=ef(i,void 0,o.useContext(ey));s+=t.key+"-"+c.name;var l={};for(var u in e)ev.call(e,u)&&"css"!==u&&u!==ex&&(l[u]=e[u]);return l.className=s,r&&(l.ref=r),o.createElement(o.Fragment,null,o.createElement(ew,{cache:t,serialized:c,isStringTag:"string"==typeof a}),o.createElement(a,l))});r(673),r(5783);var e_=a.Fragment;function ej(e,t,r){return ev.call(t,"css")?a.jsx(eE,eb(e,t),r):a.jsx(e,t,r)}function eP(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return ef(t)}var eS=function(){var e=eP.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ek=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var o=t[n];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a},eO=function(e){var t,r=e.cache,n=e.serializedArr,a=ep(function(){for(var e="",t=0;t<n.length;t++){var a=et(r,n[t],!1);em||void 0===a||(e+=a)}if(!em)return e});return em||0===a.length?null:o.createElement("style",((t={})["data-emotion"]=r.key+" "+n.map(function(e){return e.name}).join(" "),t.dangerouslySetInnerHTML={__html:a},t.nonce=r.sheet.nonce,t))},eR=eh(function(e,t){var r=[],n=function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var o=ef(n,t.registered);return r.push(o),ee(t,o,!1),t.key+"-"+o.name},a={css:n,cx:function(){for(var e,r,a,o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return a=Z(t.registered,r=[],e=ek(i)),r.length<2?e:a+n(r)},theme:o.useContext(ey)},i=e.children(a);return o.createElement(o.Fragment,null,o.createElement(eO,{cache:t,serializedArr:r}),i)}),eC=r(337),eA=r(4768);eS`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,eS`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,eS`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,eS`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,eS`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,eS`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eS`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eS`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,eS`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,eS`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,eS`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,eS`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eS`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let eN=eS`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,eM=eS`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eT=eS`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e$=eS`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ez=eS`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eI=eS`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eD=eS`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eL=eS`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eU=eS`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eW=eS`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eF=eS`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eY=eS`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eX=eS`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function eq(e){var t;return t=()=>null,r=>r?e():t()}function eH(e){return eq(()=>({opacity:0}))(e)}let eB=e=>{let{cascade:t=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:i=0,keyframes:s=eI,triggerOnce:c=!1,className:l,style:u,childClassName:f,childStyle:d,children:p,onVisibilityChange:m}=e,g=(0,o.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:n=eI,iterationCount:a=1}){return eP`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:s,duration:a}),[a,s]);return void 0==p?null:!function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(p)?(0,eA.isFragment)(p)?ej(eJ,{...e,animationStyles:g}):ej(e_,{children:o.Children.map(p,(s,p)=>{if(!(0,o.isValidElement)(s))return null;let h=n+(t?p*a*r:0);switch(s.type){case"ol":case"ul":return ej(eR,{children:({cx:t})=>ej(s.type,{...s.props,className:t(l,s.props.className),style:Object.assign({},u,s.props.style),children:ej(eB,{...e,children:s.props.children})})});case"li":return ej(eC.df,{threshold:i,triggerOnce:c,onChange:m,children:({inView:e,ref:t})=>ej(eR,{children:({cx:r})=>ej(s.type,{...s.props,ref:t,className:r(f,s.props.className),css:eq(()=>g)(e),style:Object.assign({},d,s.props.style,eH(!e),{animationDelay:h+"ms"})})})});default:return ej(eC.df,{threshold:i,triggerOnce:c,onChange:m,children:({inView:e,ref:t})=>ej("div",{ref:t,className:l,css:eq(()=>g)(e),style:Object.assign({},u,eH(!e),{animationDelay:h+"ms"}),children:ej(eR,{children:({cx:e})=>ej(s.type,{...s.props,className:e(f,s.props.className),style:Object.assign({},d,s.props.style)})})})})}})}):ej(eV,{...e,animationStyles:g,children:String(p)})},eG={display:"inline-block",whiteSpace:"pre"},eV=e=>{var t,r;let{animationStyles:n,cascade:a=!1,damping:o=.5,delay:i=0,duration:s=1e3,fraction:c=0,triggerOnce:l=!1,className:u,style:f,children:d,onVisibilityChange:p}=e,{ref:m,inView:g}=(0,eC.YD)({triggerOnce:l,threshold:c,onChange:p});return(t=()=>ej("div",{ref:m,className:u,style:Object.assign({},f,eG),children:d.split("").map((e,t)=>ej("span",{css:eq(()=>n)(g),style:{animationDelay:i+t*s*o+"ms"},children:e},t))}),r=()=>ej(eJ,{...e,children:d}),e=>e?t():r())(a)},eJ=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:n=!1,className:a,style:o,children:i,onVisibilityChange:s}=e,{ref:c,inView:l}=(0,eC.YD)({triggerOnce:n,threshold:r,onChange:s});return ej("div",{ref:c,className:a,css:eq(()=>t)(l),style:Object.assign({},o,eH(!l)),children:i})},eQ=(eS`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,eS`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,eS`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,eS`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,eS`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,eS`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`),eK=eS`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,eZ=eS`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,e0=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,e1=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,e3=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,e5=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,e2=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,e4=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,e6=eS`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,e7=eS`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,e8=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,e9=eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,te=e=>{let{big:t=!1,direction:r,reverse:n=!1,...a}=e;return ej(eB,{keyframes:(0,o.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?eK:eM;case"bottom-right":return t?eZ:eT;case"down":return e?t?e1:ez:t?e0:e$;case"left":return e?t?e5:eD:t?e3:eI;case"right":return e?t?e4:eU:t?e2:eL;case"top-left":return t?e6:eW;case"top-right":return t?e7:eF;case"up":return e?t?e9:eX:t?e8:eY;default:return t?eQ:eN}})(t,n,r),[t,r,n]),...a})};eS`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,eS`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,eS`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,eS`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,eS`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,eS`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,eS`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,eS`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,eS`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eS`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eS`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eS`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eS`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eS`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,eS`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eS`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,eS`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,eS`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,eS`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,eS`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,eS`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eS`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eS`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eS`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eS`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,eS`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eS`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,eS`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,eS`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`},337:(e,t,r)=>{"use strict";r.d(t,{YD:()=>p,df:()=>d});var n=r(8964),a=Object.defineProperty,o=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t,r)=>o(e,"symbol"!=typeof t?t+"":t,r),s=new Map,c=new WeakMap,l=0,u=void 0;function f(e,t,r={},n=u){if(void 0===window.IntersectionObserver&&void 0!==n){let a=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}let{id:a,observer:o,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(c.has(r)||(l+=1,c.set(r,l.toString())),c.get(r)):"0":e[t]}`}).toString(),r=s.get(t);if(!r){let n;let a=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var r;let o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=a.get(t.target))||r.forEach(e=>{e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:a},s.set(t,r)}return r}(r),f=i.get(e)||[];return i.has(e)||i.set(e,f),f.push(t),o.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(i.delete(e),o.unobserve(e)),0===i.size&&(o.disconnect(),s.delete(a))}}var d=class extends n.Component{constructor(e){super(e),i(this,"node",null),i(this,"_unobserveCb",null),i(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),i(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=f(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:r,threshold:a,root:o,rootMargin:i,onChange:s,skip:c,trackVisibility:l,delay:u,initialInView:f,fallbackInView:d,...p}=this.props;return n.createElement(t||"div",{ref:this.handleNode,...p},e)}};function p({threshold:e,delay:t,trackVisibility:r,rootMargin:a,root:o,triggerOnce:i,skip:s,initialInView:c,fallbackInView:l,onChange:u}={}){var d;let[p,m]=n.useState(null),g=n.useRef(),[h,y]=n.useState({inView:!!c,entry:void 0});g.current=u,n.useEffect(()=>{let n;if(!s&&p)return n=f(p,(e,t)=>{y({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&i&&n&&(n(),n=void 0)},{root:o,rootMargin:a,threshold:e,trackVisibility:r,delay:t},l),()=>{n&&n()}},[Array.isArray(e)?e.toString():e,p,o,a,i,s,r,l,t]);let v=null==(d=h.entry)?void 0:d.target,x=n.useRef();p||!v||i||s||x.current===v||(x.current=v,y({inView:!!c,entry:void 0}));let b=[m,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[379,163,784],()=>r(3028));module.exports=n})();