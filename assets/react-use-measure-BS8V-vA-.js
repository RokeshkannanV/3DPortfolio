import{r as o}from"./react-CCeLOw5g.js";import{c as z}from"./debounce-oKQO3gbh.js";function X(t){let{debounce:r,scroll:s,polyfill:f,offsetSize:l}=t===void 0?{debounce:0,scroll:!1,offsetSize:!1}:t;const c=f||(typeof window>"u"?class{}:window.ResizeObserver);if(!c)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[h,m]=o.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),e=o.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:h}),a=r?typeof r=="number"?r:r.scroll:null,d=r?typeof r=="number"?r:r.resize:null,v=o.useRef(!1);o.useEffect(()=>(v.current=!0,()=>void(v.current=!1)));const[g,w,u]=o.useMemo(()=>{const n=()=>{if(!e.current.element)return;const{left:C,top:y,width:L,height:R,bottom:x,right:B,x:S,y:D}=e.current.element.getBoundingClientRect(),i={left:C,top:y,width:L,height:R,bottom:x,right:B,x:S,y:D};e.current.element instanceof HTMLElement&&l&&(i.height=e.current.element.offsetHeight,i.width=e.current.element.offsetWidth),Object.freeze(i),v.current&&!W(e.current.lastBounds,i)&&m(e.current.lastBounds=i)};return[n,d?z(n,d):n,a?z(n,a):n]},[m,l,a,d]);function b(){e.current.scrollContainers&&(e.current.scrollContainers.forEach(n=>n.removeEventListener("scroll",u,!0)),e.current.scrollContainers=null),e.current.resizeObserver&&(e.current.resizeObserver.disconnect(),e.current.resizeObserver=null)}function p(){e.current.element&&(e.current.resizeObserver=new c(u),e.current.resizeObserver.observe(e.current.element),s&&e.current.scrollContainers&&e.current.scrollContainers.forEach(n=>n.addEventListener("scroll",u,{capture:!0,passive:!0})))}const O=n=>{!n||n===e.current.element||(b(),e.current.element=n,e.current.scrollContainers=E(n),p())};return H(u,!!s),M(w),o.useEffect(()=>{b(),p()},[s,u,w]),o.useEffect(()=>b,[]),[O,h,g]}function M(t){o.useEffect(()=>{const r=t;return window.addEventListener("resize",r),()=>void window.removeEventListener("resize",r)},[t])}function H(t,r){o.useEffect(()=>{if(r){const s=t;return window.addEventListener("scroll",s,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",s,!0)}},[t,r])}function E(t){const r=[];if(!t||t===document.body)return r;const{overflow:s,overflowX:f,overflowY:l}=window.getComputedStyle(t);return[s,f,l].some(c=>c==="auto"||c==="scroll")&&r.push(t),[...r,...E(t.parentElement)]}const T=["x","y","top","bottom","left","right","width","height"],W=(t,r)=>T.every(s=>t[s]===r[s]);export{X as u};
