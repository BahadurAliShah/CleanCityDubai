(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t)}return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l,u=e.src,y=e.sizes,w=e.unoptimized,_=void 0!==w&&w,C=e.priority,S=void 0!==C&&C,E=e.loading,L=e.className,x=e.quality,z=e.width,R=e.height,k=e.fill,M=e.style,P=e.onLoadingComplete,I=e.placeholder,A=void 0===I?"empty":I,Z=e.blurDataURL,T=c(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoadingComplete","placeholder","blurDataURL"]),j=s.useContext(g.ImageConfigContext),D=s.useMemo(function(){var e=h||j||p.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[j]),q=T,N=b;if("loader"in q){if(q.loader){var B=q.loader;N=function(e){e.config;var t=c(e,["config"]);return B(t)}}delete q.loader}var U,O,H="",W=$(z),G=$(R);if(U=u,"object"==typeof U&&(v(U)||void 0!==(O=U).src)){var F=v(u)?u.default:u;if(!F.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(F)));if(!F.height||!F.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(F)));if(t=F.blurWidth,n=F.blurHeight,Z=Z||F.blurDataURL,H=F.src,!k){if(W||G){if(W&&!G){var K=W/F.width;G=Math.round(F.height*K)}else if(!W&&G){var V=G/F.height;W=Math.round(F.width*V)}}else W=F.width,G=F.height}}u="string"==typeof u?u:H;var J=!S&&("lazy"===E||void 0===E);(u.startsWith("data:")||u.startsWith("blob:"))&&(_=!0,J=!1),D.unoptimized&&(_=!0);var Q=o(s.useState(!1),2),X=Q[0],Y=Q[1],ee=o(s.useState(!1),2),et=ee[0],en=ee[1],er=$(x),eo=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},et?{}:{color:"transparent"},M),ei="blur"===A&&Z&&!X?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:W,heightInt:G,blurWidth:t,blurHeight:n,blurDataURL:Z}),'")')}:{},ea=function(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.width,a=e.quality,l=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n){var r=e.deviceSizes,o=e.allSizes;if(n){for(var a=/(^|\s)(1?\d?\d)vw/g,l=[];u=a.exec(n);u)l.push(parseInt(u[2]));if(l.length){var u,c,s=.01*(c=Math).min.apply(c,i(l));return{widths:o.filter(function(e){return e>=r[0]*s}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,l),s=c.widths,f=c.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map(function(e,r){return"".concat(u({config:t,src:n,quality:a,width:e})," ").concat("w"===f?e:r+1).concat(f)}).join(", "),src:u({config:t,src:n,quality:a,width:s[d]})}}({config:D,src:u,unoptimized:_,width:W,quality:er,sizes:y,loader:N}),el=u,eu="imagesizes";eu="imageSizes";var ec=(r(l={},"imageSrcSet",ea.srcSet),r(l,eu,ea.sizes),l),es=s.useRef(P);s.useEffect(function(){es.current=P},[P]);var ef=a({isLazy:J,imgAttributes:ea,heightInt:G,widthInt:W,qualityInt:er,className:L,imgStyle:eo,blurStyle:ei,loading:E,config:D,fill:k,unoptimized:_,placeholder:A,loader:N,srcString:el,onLoadingCompleteRef:es,setBlurComplete:Y,setShowAltText:en},q);return s.default.createElement(s.default.Fragment,null,s.default.createElement(m,Object.assign({},ef)),S?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},ec))):null)};var a=n(6495).Z,l=n(2648).Z,u=n(1598).Z,c=n(7273).Z,s=u(n(7294)),f=l(n(5443)),d=n(2730),p=n(9309),g=n(9977);n(3794);var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function v(e){return void 0!==e.default}function $(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,n,r,o){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){e.parentNode&&("blur"===n&&o(!0),(null==r?void 0:r.current)&&r.current(e))}))}var m=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,o=(e.qualityInt,e.className),i=e.imgStyle,l=e.blurStyle,u=e.isLazy,f=e.fill,d=e.placeholder,p=e.loading,g=e.srcString,h=(e.config,e.unoptimized,e.loader,e.onLoadingCompleteRef),v=e.setBlurComplete,$=e.setShowAltText,m=e.onLoad,b=e.onError,w=c(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=u?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},w,t,{width:r,height:n,decoding:"async","data-nimg":"future".concat(f?"-fill":""),className:o,loading:p,style:a({},i,l),ref:s.useCallback(function(e){e&&(b&&(e.src=e.src),e.complete&&y(e,g,d,h,v))},[g,d,h,v,b,]),onLoad:function(e){y(e.currentTarget,g,d,h,v),m&&m(e)},onError:function(e){$(!0),"blur"===d&&v(!0),b&&b(e)}})))};function b(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),l=n(6273),u=n(2725),c=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),g=void 0!==a.default.useTransition,h={};function v(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var $=a.default.forwardRef(function(e,t){var n,o,$=e.href,y=e.as,m=e.children,b=e.prefetch,w=e.passHref,_=e.replace,C=e.shallow,S=e.scroll,E=e.locale,L=e.onClick,x=e.onMouseEnter,z=e.onTouchStart,R=e.legacyBehavior,k=void 0===R?!0!==Boolean(!0):R,M=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,k&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var P=!1!==b,I=r(g?a.default.useTransition():[],2)[1],A=a.default.useContext(c.RouterContext),Z=a.default.useContext(s.AppRouterContext);Z&&(A=Z);var T=a.default.useMemo(function(){var e=r(l.resolveHref(A,$,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(A,y):n||t}},[A,$,y]),j=T.href,D=T.as,q=a.default.useRef(j),N=a.default.useRef(D);k&&(o=a.default.Children.only(n));var B=k?o&&"object"==typeof o&&o.ref:t,U=r(f.useIntersection({rootMargin:"200px"}),3),O=U[0],H=U[1],W=U[2],G=a.default.useCallback(function(e){(N.current!==D||q.current!==j)&&(W(),N.current=D,q.current=j),O(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,j,W,O]);a.default.useEffect(function(){var e=H&&P&&l.isLocalURL(j),t=void 0!==E?E:A&&A.locale,n=h[j+"%"+D+(t?"%"+t:"")];e&&!n&&v(A,j,D,{locale:t})},[D,j,H,E,P,A]);var F={ref:G,onClick:function(e){k||"function"!=typeof L||L(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,u,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(f=e).currentTarget.target)||"_self"===d)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var f,d,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};c?c(p):p()}}(e,A,j,D,_,C,S,E,Z?I:void 0,P)},onMouseEnter:function(e){k||"function"!=typeof x||x(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!P&&Z)&&l.isLocalURL(j)&&v(A,j,D,{priority:!0})},onTouchStart:function(e){k||"function"!=typeof z||z(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!P&&Z)&&l.isLocalURL(j)&&v(A,j,D,{priority:!0})}};if(!k||w||"a"===o.type&&!("href"in o.props)){var K=void 0!==E?E:A&&A.locale,V=A&&A.isLocaleDomain&&d.getDomainLocale(D,K,A.locales,A.domainLocales);F.href=V||p.addBasePath(u.addLocale(D,K,A&&A.defaultLocale))}return k?a.default.cloneElement(o,F):a.default.createElement("a",Object.assign({},M,F),n)});t.default=$,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=r(o.useState(!1),2),f=s[0],d=s[1],p=r(o.useState(null),2),g=p[0],h=p[1];return o.useEffect(function(){if(a){if(!c&&!f&&g&&g.tagName){var e,r,o,s,p,h,v;return e=g,r=function(e){return e&&d(e)},p=(s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),l.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,h=s.observer,(v=s.elements).set(e,r),h.observe(e),function(){if(v.delete(e),h.unobserve(e),0===v.size){h.disconnect(),l.delete(p);var t=u.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});t>-1&&u.splice(t,1)}}}}else if(!f){var $=i.requestIdleCallback(function(){return d(!0)});return function(){return i.cancelIdleCallback($)}}},[g,c,n,t,f]),[h,f,o.useCallback(function(){d(!1)},[])]};var o=n(7294),i=n(9311),a="function"==typeof IntersectionObserver,l=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,n=e.heightInt,r=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,a=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r||t," ").concat(o||n,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(a,"%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},1608:function(e,t,n){e.exports=n(8461)},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);