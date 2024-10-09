import{c as N}from"./@react-three-CSCsKIJt.js";import{r as h}from"./react-CCeLOw5g.js";function b(){return b=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},b.apply(this,arguments)}function R(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,y(t,r)}function y(t,r){return y=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},y(t,r)}function x(t,r){if(t==null)return{};var i={},n=Object.keys(t),e,o;for(o=0;o<n.length;o++)e=n[o],!(r.indexOf(e)>=0)&&(i[e]=t[e]);return i}var V=new Map,p=new WeakMap,m=0,C=void 0;function A(t){C=t}function E(t){return t?(p.has(t)||(m+=1,p.set(t,m.toString())),p.get(t)):"0"}function U(t){return Object.keys(t).sort().filter(function(r){return t[r]!==void 0}).map(function(r){return r+"_"+(r==="root"?E(t.root):t[r])}).toString()}function W(t){var r=U(t),i=V.get(r);if(!i){var n=new Map,e,o=new IntersectionObserver(function(c){c.forEach(function(s){var a,u=s.isIntersecting&&e.some(function(f){return s.intersectionRatio>=f});t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=u),(a=n.get(s.target))==null||a.forEach(function(f){f(u,s)})})},t);e=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:r,observer:o,elements:n},V.set(r,i)}return i}function w(t,r,i,n){if(i===void 0&&(i={}),n===void 0&&(n=C),typeof window.IntersectionObserver>"u"&&n!==void 0){var e=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:e,intersectionRect:e,rootBounds:e}),function(){}}var o=W(i),c=o.id,s=o.observer,a=o.elements,u=a.get(t)||[];return a.has(t)||a.set(t,u),u.push(r),s.observe(t),function(){u.splice(u.indexOf(r),1),u.length===0&&(a.delete(t),s.unobserve(t)),a.size===0&&(s.disconnect(),V.delete(c))}}var $=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function M(t){return typeof t.children!="function"}var v=function(t){R(r,t);function r(n){var e;return e=t.call(this,n)||this,e.node=null,e._unobserveCb=null,e.handleNode=function(o){e.node&&(e.unobserve(),!o&&!e.props.triggerOnce&&!e.props.skip&&e.setState({inView:!!e.props.initialInView,entry:void 0})),e.node=o||null,e.observeNode()},e.handleChange=function(o,c){o&&e.props.triggerOnce&&e.unobserve(),M(e.props)||e.setState({inView:o,entry:c}),e.props.onChange&&e.props.onChange(o,c)},e.state={inView:!!n.initialInView,entry:void 0},e}var i=r.prototype;return i.componentDidUpdate=function(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var e=this.props,o=e.threshold,c=e.root,s=e.rootMargin,a=e.trackVisibility,u=e.delay,f=e.fallbackInView;this._unobserveCb=w(this.node,this.handleChange,{threshold:o,root:c,rootMargin:s,trackVisibility:a,delay:u},f)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!M(this.props)){var e=this.state,o=e.inView,c=e.entry;return this.props.children({inView:o,entry:c,ref:this.handleNode})}var s=this.props,a=s.children,u=s.as,f=x(s,$);return h.createElement(u||"div",b({ref:this.handleNode},f),a)},r}(h.Component);v.displayName="InView";v.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function P(t){var r=t===void 0?{}:t,i=r.threshold,n=r.delay,e=r.trackVisibility,o=r.rootMargin,c=r.root,s=r.triggerOnce,a=r.skip,u=r.initialInView,f=r.fallbackInView,d=h.useRef(),_=h.useState({inView:!!u}),g=_[0],O=_[1],S=h.useCallback(function(I){d.current!==void 0&&(d.current(),d.current=void 0),!a&&I&&(d.current=w(I,function(j,k){O({inView:j,entry:k}),k.isIntersecting&&s&&d.current&&(d.current(),d.current=void 0)},{root:c,rootMargin:o,threshold:i,trackVisibility:e,delay:n},f))},[Array.isArray(i)?i.toString():i,c,o,s,a,e,f,n]);h.useEffect(function(){!d.current&&g.entry&&!s&&!a&&O({inView:!!u})});var l=[S,g.inView,g.entry];return l.ref=l[0],l.inView=l[1],l.entry=l[2],l}const z=Object.freeze(Object.defineProperty({__proto__:null,InView:v,default:v,defaultFallbackInView:A,observe:w,useInView:P},Symbol.toStringTag,{value:"Module"})),L=N(z);export{L as r};
