import{at as f,h as c,a7 as g,au as l}from"./c5M_NGkN.js";function o(s){var r,i,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(r=0;r<a;r++)s[r]&&(i=o(s[r]))&&(t&&(t+=" "),t+=i)}else for(i in s)s[i]&&(t&&(t+=" "),t+=i);return t}function p(){for(var s,r,i=0,t="",a=arguments.length;i<a;i++)(s=arguments[i])&&(r=o(s))&&(t&&(t+=" "),t+=r);return t}function y(s){return typeof s=="object"?p(s):s!=null?s:""}function A(s,r,i,t){var _;var a=(_=s.__attributes)!=null?_:s.__attributes={};c&&(a[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||a[r]!==(a[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[f]=i),i==null?s.removeAttribute(r):typeof i!="string"&&u(s).includes(r)?s[r]=i:s.setAttribute(r,i))}var n=new Map;function u(s){var r=n.get(s.nodeName);if(r)return r;n.set(s.nodeName,r=[]);for(var i,t=s,a=Element.prototype;a!==t;){i=l(t);for(var _ in i)i[_].set&&r.push(_);t=g(t)}return r}function N(s){if(!c&&s.loading==="lazy"){var r=s.src;s[f]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[f]!=="eager"&&(s.loading="lazy"),s.src=r})}}function v(s,r,i){var t=s.__className,a=e(r);c&&s.getAttribute("class")===a?s.__className=a:(t!==a||c&&s.getAttribute("class")!==a)&&(a===""?s.removeAttribute("class"):s.setAttribute("class",a),s.__className=a)}function x(s,r,i){var t=s.__className,a=e(r);c&&s.className===a?s.__className=a:(t!==a||c&&s.className!==a)&&(r==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function e(s,r){return(s==null?"":s)+""}export{A as a,x as b,y as c,N as h,v as s};
