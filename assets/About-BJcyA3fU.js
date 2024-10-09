import{r as y,g as Y,j as l,s as G,e as J}from"./index-_1ve942z.js";import{C as Q}from"./CTA-BaQhUGIJ.js";var W={exports:{}},X="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z=X,ee=Z;function D(){}function U(){}U.resetWarningCache=D;var te=function(){function e(a,t,r,o,s,d){if(d!==ee){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:U,resetWarningCache:D};return i.PropTypes=i,i};W.exports=te();var B=W.exports,O={},q={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function i(){for(var r="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(r=t(r,a(s)))}return r}function a(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return i.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var s in r)n.call(r,s)&&r[s]&&(o=t(o,s));return o}function t(r,o){return o?r?r+" "+o:r+o:r}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(q);var z=q.exports;O.__esModule=!0;O.default=void 0;var ne=R(y),h=R(B),re=R(z);function R(e){return e&&e.__esModule?e:{default:e}}const L=({animate:e=!0,className:n="",layout:i="2-columns",lineColor:a="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),ne.default.createElement("div",{className:(0,re.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":i==="2-columns","vertical-timeline--one-column-left":i==="1-column"||i==="1-column-left","vertical-timeline--one-column-right":i==="1-column-right"})},t));L.propTypes={children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]).isRequired,className:h.default.string,animate:h.default.bool,layout:h.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:h.default.string};var ie=L;O.default=ie;var V={};function T(){return T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},T.apply(this,arguments)}function ae(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,I(e,n)}function I(e,n){return I=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},I(e,n)}function le(e,n){if(e==null)return{};var i={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&(i[t]=e[t]);return i}var E=new Map,w=new WeakMap,$=0,H=void 0;function se(e){H=e}function oe(e){return e?(w.has(e)||($+=1,w.set(e,$.toString())),w.get(e)):"0"}function ce(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?oe(e.root):e[n])}).toString()}function de(e){var n=ce(e),i=E.get(n);if(!i){var a=new Map,t,r=new IntersectionObserver(function(o){o.forEach(function(s){var d,u=s.isIntersecting&&t.some(function(f){return s.intersectionRatio>=f});e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=u),(d=a.get(s.target))==null||d.forEach(function(f){f(u,s)})})},e);t=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:r,elements:a},E.set(n,i)}return i}function C(e,n,i,a){if(i===void 0&&(i={}),a===void 0&&(a=H),typeof window.IntersectionObserver>"u"&&a!==void 0){var t=e.getBoundingClientRect();return n(a,{isIntersecting:a,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var r=de(i),o=r.id,s=r.observer,d=r.elements,u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(n),s.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(d.delete(e),s.unobserve(e)),d.size===0&&(s.disconnect(),E.delete(o))}}var ue=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function A(e){return typeof e.children!="function"}var j=function(e){ae(n,e);function n(a){var t;return t=e.call(this,a)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(r){t.node&&(t.unobserve(),!r&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=r||null,t.observeNode()},t.handleChange=function(r,o){r&&t.props.triggerOnce&&t.unobserve(),A(t.props)||t.setState({inView:r,entry:o}),t.props.onChange&&t.props.onChange(r,o)},t.state={inView:!!a.initialInView,entry:void 0},t}var i=n.prototype;return i.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,r=t.threshold,o=t.root,s=t.rootMargin,d=t.trackVisibility,u=t.delay,f=t.fallbackInView;this._unobserveCb=C(this.node,this.handleChange,{threshold:r,root:o,rootMargin:s,trackVisibility:d,delay:u},f)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!A(this.props)){var t=this.state,r=t.inView,o=t.entry;return this.props.children({inView:r,entry:o,ref:this.handleNode})}var s=this.props,d=s.children,u=s.as,f=le(s,ue);return y.createElement(u||"div",T({ref:this.handleNode},f),d)},n}(y.Component);j.displayName="InView";j.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function fe(e){var n=e===void 0?{}:e,i=n.threshold,a=n.delay,t=n.trackVisibility,r=n.rootMargin,o=n.root,s=n.triggerOnce,d=n.skip,u=n.initialInView,f=n.fallbackInView,m=y.useRef(),b=y.useState({inView:!!u}),x=b[0],_=b[1],k=y.useCallback(function(g){m.current!==void 0&&(m.current(),m.current=void 0),!d&&g&&(m.current=C(g,function(S,P){_({inView:S,entry:P}),P.isIntersecting&&s&&m.current&&(m.current(),m.current=void 0)},{root:o,rootMargin:r,threshold:i,trackVisibility:t,delay:a},f))},[Array.isArray(i)?i.toString():i,o,r,s,d,t,f,a]);y.useEffect(function(){!m.current&&x.entry&&!s&&!d&&_({inView:!!u})});var p=[k,x.inView,x.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const pe=Object.freeze(Object.defineProperty({__proto__:null,InView:j,default:j,defaultFallbackInView:se,observe:C,useInView:fe},Symbol.toStringTag,{value:"Module"})),me=Y(pe);V.__esModule=!0;V.default=void 0;var v=M(y),c=M(B),N=M(z),he=me;function M(e){return e&&e.__esModule?e:{default:e}}const K=({children:e="",className:n="",contentArrowStyle:i=null,contentStyle:a=null,date:t="",dateClassName:r="",icon:o=null,iconClassName:s="",iconOnClick:d=null,onTimelineElementClick:u=null,iconStyle:f=null,id:m="",position:b="",style:x=null,textClassName:_="",intersectionObserverProps:k={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:p=!1})=>v.default.createElement(he.InView,k,({inView:g,ref:S})=>v.default.createElement("div",{ref:S,id:m,className:(0,N.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:x},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:f,onClick:d,className:(0,N.default)(s,"vertical-timeline-element-icon",{"bounce-in":g||p,"is-hidden":!(g||p)})},o),v.default.createElement("div",{style:a,onClick:u,className:(0,N.default)(_,"vertical-timeline-element-content",{"bounce-in":g||p,"is-hidden":!(g||p)})},v.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,N.default)(r,"vertical-timeline-element-date")},t)))));K.propTypes={children:c.default.oneOfType([c.default.arrayOf(c.default.node),c.default.node]),className:c.default.string,contentArrowStyle:c.default.shape({}),contentStyle:c.default.shape({}),date:c.default.node,dateClassName:c.default.string,icon:c.default.element,iconClassName:c.default.string,iconStyle:c.default.shape({}),iconOnClick:c.default.func,onTimelineElementClick:c.default.func,id:c.default.string,position:c.default.string,style:c.default.shape({}),textClassName:c.default.string,visible:c.default.bool,intersectionObserverProps:c.default.shape({root:c.default.object,rootMargin:c.default.string,threshold:c.default.number,triggerOnce:c.default.bool})};var ve=K;V.default=ve;var F={VerticalTimeline:O.default,VerticalTimelineElement:V.default};const be=()=>l.jsxs("section",{className:"max-container",children:[l.jsxs("h1",{className:"head-text",children:["Hello, I'm"," ",l.jsx("span",{className:"red-gold-gradient-text font-semibold drop-shadow",children:"RokeshKannan Velrajan"})," ","👋"]}),l.jsx("div",{className:"mt-5 flex flex-col gap-3 text-slate-500",children:l.jsx("p",{children:"FullStack Developer based in India, dedicated to transforming technical education through hands-on learning. I empower aspiring developers by blending innovative teaching methods with practical application development."})}),l.jsxs("div",{className:"py-10 flex flex-col",children:[l.jsx("h3",{className:"subhead-text",children:"My Skills"}),l.jsx("div",{className:"mt-16 flex flex-wrap gap-12",children:G.map(e=>l.jsxs("div",{className:"block-container w-20 h-20",children:[l.jsx("div",{className:"btn-back rounded-xl"}),l.jsx("div",{className:"btn-front rounded-xl flex justify-center items-center",children:l.jsx("img",{src:e.imageUrl,alt:e.name,className:"w-1/2 h-1/2 object-contain"})})]},e.name))})]}),l.jsxs("div",{className:"py-16",children:[l.jsx("h3",{className:"subhead-text",children:"Work Experience."}),l.jsx("div",{className:"mt-5 flex flex-col gap-3 text-slate-500",children:l.jsx("p",{children:"I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the preview:"})}),l.jsx("div",{className:"mt-12 flex",children:l.jsx(F.VerticalTimeline,{children:J.map(e=>l.jsxs(F.VerticalTimelineElement,{date:e.date,iconStyle:{background:e.iconBg},icon:l.jsx("div",{className:"flex justify-center items-center w-full h-full",children:l.jsx("img",{src:e.icon,alt:e.company_name,className:"w-full h-full object-cover rounded-full"})}),contentStyle:{borderBottom:"8px",borderStyle:"solid",borderBottomColor:e.iconBg,boxShadow:"none"},children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-black text-xl font-poppins font-semibold",children:e.title}),l.jsx("p",{className:"text-black-500 font-medium text-base",style:{margin:0},children:e.company_name})]}),l.jsx("ul",{className:"my-5 list-disc ml-5 space-y-2",children:e.points.map((n,i)=>l.jsx("li",{className:"text-black-500/50 font-normal pl-1 text-sm",children:n},`experience-point-${i}`))})]},e.company_name))})})]}),l.jsx("hr",{className:"border-slate-200"}),l.jsxs("div",{className:"py-16",children:[l.jsx("h3",{className:"subhead-text",children:"Download My Resume"}),l.jsx("p",{className:"mt-2 text-slate-500",children:"For a detailed view of my experience and skills, you can download my resume below:"}),l.jsx("a",{href:"https://drive.google.com/file/d/1qU47fSKrzYpaknMEMAC0M9z-YSGuV6IU/view?usp=sharing",download:!0,className:"mt-5 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg btn",children:"Download Resume"})]}),l.jsx(Q,{})]});export{be as default};
