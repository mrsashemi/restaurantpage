(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([e.id,"#content {\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    font-size: 10vmin;\n}\n\n.subHeader {\n    text-align: center;\n    font-size: 5vmin;\n}\n\n.menu,\n.about,\n.contact,\nimg {\n    height: auto;\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.bolaniBro {\n    height: 70vmin;\n    width: 70vmin;\n    position: relative;\n    right: 5%;\n    z-index: 2;\n}\n\n.bolaniChef {\n    width: 60%;\n    bottom: 25%;\n}\n\n.bolaniChef:active {\n    bottom: 20%;\n}\n\n.rightBolani {\n    width: 70%;\n    left: -50%;\n    bottom: 1%;\n    z-index: 3;\n}\n\n.rightBolani:active {\n    padding: 5vmin;\n}\n\n.leftBolani {\n    width: 70%;\n    left: 65%;\n    bottom: 16%;\n    z-index: 4;\n}\n\n.leftBolani:active {\n    padding: 5vmin;\n}\n\n.rightSmoke {\n    width: 35%;\n    left: -50%;\n    bottom: 15%;\n    opacity: 75%;\n}\n\n.leftSmoke {\n    width: 40%;\n    left: 80%;\n    bottom: 30%;\n    opacity: 75%;\n}\n\n.menu {\n    width: fit-content;\n    display: none;\n    background-color: white;\n    font-size: 3vmin;\n    left: -50%;\n    bottom: 30%;\n    z-index: 6;\n}\n\n.about {\n    display: none;\n    font-size: 3vmin;\n    bottom: 85%;\n    left: 52%;\n}\n\n.contact {\n    width: fit-content;\n    background-color: white;\n    display: none;\n    font-size: 3vmin;\n    left: 92%;\n    bottom: 42%;\n    z-index: 7;\n}\n\n.menuPage {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 0.5vmin;\n    font-size: 2vmin;\n}\n\n.menuList {\n    list-style-type: none;\n    padding: 0;\n    font-weight: 500;\n}\n\nli {\n    margin: 1vmin;\n}\n\n.aboutPage {\n    font-size: 3.5vmin;\n    margin: 1vmin;\n}\n\n.aboutStory {\n    font-size: 2.25vmin;\n    margin: 1vmin;\n}\n\n.contactPage {\n    font-size: 3.5vmin;\n    margin-top: 2vmin;\n}\n\n\nlabel {\n    font-size: 2.25vmin;\n    margin: 0.5vmin;\n}\n\n#fname,\n#lname,\n#email {\n    margin-right: 4vmin;\n}\n\n#userForm {\n    margin-top: 4vmin;\n}",""]);const c=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(r[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);a&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],c=0;c<e.length;c++){var l=e[c],s=a.base?l[0]+a.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var m=t(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,a);a.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=t(i[r]);n[c].references--}for(var l=a(e,o),s=0;s<i.length;s++){var d=t(i[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var a={};(()=>{t.d(a,{f:()=>w});var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),c=t.n(r),l=t(565),s=t.n(l),d=t(216),u=t.n(d),m=t(589),p=t.n(m),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=t.p+"1d30b66b8aeabac8f7af.png",b=t.p+"cb6da68f5aa9c4f56ded.png",g=t.p+"7a1491e6706bb18e3097.png",y=t.p+"7fb6e31682efad587144.png",C=t.p+"76c173261ed9e8172a25.png",x=document.getElementById("content");window.addEventListener("load",(()=>{setTimeout((()=>{B(x,5,"flex")}),500)}));const E=document.createElement("div");E.textContent="BOLANI BROS",E.className="header",x.appendChild(E);const w=document.createElement("div");function N(e){let n=.75,t=setInterval((function(){n<=.1&&(clearInterval(t),e.style.display="none"),e.style.opacity=n,e.style.filter=`alpha(opacity = ${100*n})`,n-=.1*n}),20)}function B(e,n,t){let a=.1;e.style.display=t;let o=setInterval((function(){a>=.75&&clearInterval(o),e.style.opacity=a,e.style.filter=`alpha(opacity = ${100*a})`,a+=.1*a}),n)}w.textContent="Oven Fresh HOT Delicious",w.className="subHeader",x.appendChild(w),function(){const e=document.createElement("div");e.className="bolaniBro";const n=new Image;n.className="bolaniChef",n.src=v;const t=new Image;t.className="rightBolani",t.src=b;const a=new Image;a.className="rightSmoke",a.src=y;const o=new Image;o.className="leftBolani",o.src=g;const i=new Image;i.className="leftSmoke",i.src=C,e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(o),e.appendChild(i),x.appendChild(e);const r=document.createElement("div");r.className="menu",r.textContent="Menu & Locations";const c=document.createElement("div");c.className="about",c.textContent="About";const l=document.createElement("div");l.className="contact",l.textContent="Contact",e.appendChild(r),e.appendChild(c),e.appendChild(l),n.addEventListener("mouseenter",(()=>{n.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",n.style.cursor="pointer",B(c,20,"block")})),n.addEventListener("mouseleave",(()=>{n.style.filter="none",N(c)})),n.addEventListener("click",(()=>{!function(){w.textContent="About US";const e=document.createElement("div");e.className="aboutPage",e.textContent="It all started years ago ordering from a local Afghan restaurant in Fremont...";const n=document.createElement("div");n.className="aboutStory",n.textContent="For our founders, Hasib and Adeeb, food wasn't just food, it was a career and it was also art. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",w.appendChild(e),w.appendChild(n)}()})),t.addEventListener("mouseenter",(()=>{t.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",t.style.cursor="pointer",N(a),B(r,20,"block")})),t.addEventListener("mouseleave",(()=>{t.style.filter="none",B(a,20,"block"),N(r)})),t.addEventListener("click",(()=>{!function(){w.textContent="Menu AND Location";const e=document.createElement("div");e.className="menuPage";const n=document.createElement("ul");n.className="menuList",n.textContent="All Bolani's come in 2 sizes - Personal (8.99) or Family (13.99)";const t=document.createElement("li");t.textContent="Bolani Gandana - Classic fried flatbeard stuffed with leeks, herbs, and potatoes";const a=document.createElement("li");a.textContent="Bolani Kachaloo - Classic fried flatbeard stuffed with herbs, and potatoes";const o=document.createElement("li");o.textContent="Boolani - Spooky special! Fried flatbeard stuffed with pumpkin, potatoes, herbs, and ghost pepper powder";const i=document.createElement("li");i.textContent="Brolani - House favorite! Fried flatbeard stuffed with butternut squash, leeks, herbs, and ghost pepper powder";const r=document.createElement("div");r.textContent="All Bolani's can be made Spicy upon request and come with choice of Yuzu Chutney or our House Mint and Itachi Cucumber Sauce. Extra sauce is 1.00";const c=document.createElement("div");c.textContent="We're located in Oakland, CA on 999 Fake Ave. Call in an order at 999-999-9999 or Find us on every major delivery service.",w.appendChild(e),e.appendChild(n),n.appendChild(t),n.appendChild(a),n.appendChild(o),n.appendChild(i),e.appendChild(r),e.appendChild(c)}()})),o.addEventListener("mouseenter",(()=>{o.style.filter="invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)",o.style.cursor="pointer",N(i),B(l,20,"block")})),o.addEventListener("mouseleave",(()=>{o.style.filter="none",B(i,20,"block"),N(l)})),o.addEventListener("click",(()=>{!function(){w.textContent="Contact US";const e=document.createElement("div");e.className="contactPage",e.textContent="Feel free to submit any and all inquiries below";const n=document.createElement("form");n.className="contactForm";const t=document.createElement("input");t.type="radio",t.id="general",t.name="inquiry_type",t.value="general";const a=document.createElement("label");a.htmlFor="general",a.textContent="General Inquiry";const o=document.createElement("br"),i=document.createElement("input");i.type="radio",i.id="ghostKitchen",i.name="inquiry_type",i.value="ghostKitchen";const r=document.createElement("label");r.htmlFor="ghostKitchen",r.textContent="Franchising or Ghost Kitchens";const c=document.createElement("br"),l=document.createElement("input");l.type="radio",l.id="bolaniBox",l.name="inquiry_type",l.value="bolaniBox";const s=document.createElement("label");s.htmlFor="bolaniBox",s.textContent="Order Bolani Boxes";const d=document.createElement("br"),u=document.createElement("label");u.htmlFor="fname",u.textContent="First Name:";const m=document.createElement("input");m.type="text",m.id="fname",m.name="fname";const p=document.createElement("label");p.htmlFor="lname",p.textContent="Last Name:";const f=document.createElement("input");f.type="text",f.id="lname",f.name="lname";const h=document.createElement("label");h.htmlFor="email",h.textContent="E-Mail:";const v=document.createElement("input");v.type="email",v.id="email",v.name="email";const b=document.createElement("br"),g=document.createElement("textarea");g.rows="4",g.cols="50",g.name="message",g.id="userForm",g.textContent="Enter inquiry here...";const y=document.createElement("br"),C=document.createElement("input");C.type="submit",C.id="submitButton",w.appendChild(e),w.appendChild(n),n.appendChild(t),n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(r),n.appendChild(c),n.appendChild(l),n.appendChild(s),n.appendChild(d),n.appendChild(u),n.append(m),n.appendChild(p),n.append(f),n.appendChild(h),n.append(v),n.appendChild(b),n.appendChild(g),n.appendChild(y),n.appendChild(C)}()}))}()})()})();