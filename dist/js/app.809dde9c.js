(function(){"use strict";var e={4554:function(e,t,n){var o=n(4275),a=n(6035);const r={apiKey:"AIzaSyAMVTH1d1XH1wrMuHQfL5ylMALHUZNaqzo",authDomain:"ecommerce-e2e95.firebaseapp.com",projectId:"ecommerce-e2e95",storageBucket:"ecommerce-e2e95.appspot.com",messagingSenderId:"220808067960",appId:"1:220808067960:web:b5d3ec58a2feeacf17668d",measurementId:"G-4H4ECEBFBZ"},i=(0,o.ZF)(r);(0,a.ad)(i)},1700:function(e,t,n){var o=n(9242),a=n(3396);function r(e,t,n,o,r,i){const l=(0,a.up)("navbarView"),s=(0,a.up)("FooterView");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l),(0,a.Wm)(s)])}var i=n.p+"img/dark-logo.dd82c222.png";const l={class:"navbar navbar-expand-lg",style:{background:"#1B998B"}},s={class:"container"},c=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),u=(0,a._)("img",{class:"logo",src:i,alt:""},null,-1),d={class:"container-fluid"},m={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"}},p={class:"nav-item"},v=(0,a.Uk)("Home"),h={class:"nav-item"},g=(0,a.Uk)("Products"),b={class:"nav-item"},y=(0,a.Uk)("My Products"),w={class:"nav-item"},k=(0,a.Uk)("Log In"),_={class:"nav-item"},C=(0,a.Uk)("Orders"),A={class:"nav-item"},x=(0,a._)("i",{class:"fas fa-shopping-cart"},null,-1);function S(e,t,n,o,r,i){const S=(0,a.up)("router-link"),j=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",l,[(0,a._)("div",s,[c,(0,a.Wm)(S,{to:"/"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("div",d,[(0,a._)("div",m,[(0,a._)("ul",f,[(0,a._)("li",p,[(0,a.Wm)(S,{class:"nav-link active",style:{color:"white"},"aria-current":"page",to:"/"},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a._)("li",h,[(0,a.Wm)(S,{class:"nav-link",to:"/products"},{default:(0,a.w5)((()=>[g])),_:1})]),(0,a._)("li",b,[r.CheckAuth?((0,a.wg)(),(0,a.j4)(S,{key:0,class:"nav-link",to:"/myproducts"},{default:(0,a.w5)((()=>[y])),_:1})):(0,a.kq)("",!0)]),(0,a._)("li",w,[null==r.CheckAuth?((0,a.wg)(),(0,a.j4)(S,{key:0,class:"nav-link",to:"/login"},{default:(0,a.w5)((()=>[k])),_:1})):(0,a.kq)("",!0)]),(0,a._)("li",_,[r.CheckAuth?((0,a.wg)(),(0,a.j4)(S,{key:0,class:"nav-link",to:"/orders"},{default:(0,a.w5)((()=>[C])),_:1})):(0,a.kq)("",!0)]),(0,a._)("li",A,[r.CheckAuth?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"nav-link",style:{cursor:"pointer"},onClick:t[0]||(t[0]=(...e)=>i.logout&&i.logout(...e))},"Logout")):(0,a.kq)("",!0)]),(0,a._)("li",null,[(0,a.Wm)(S,{id:"cart",to:"/cart",class:"cart","data-totalitems":i.count},{default:(0,a.w5)((()=>[x])),_:1},8,["data-totalitems"])])])])])])]),(0,a.Wm)(j)],64)}n(4554);var j=n(4028),O=n(5696);const E=(0,j.v0)();var N={name:"NavbarView",data(){return{CheckAuth:null}},methods:{logout(){(0,j.w7)(E).then((()=>{localStorage.removeItem("uidUser"),O.Z.push("/")})).catch((e=>{console.log(e)}))}},created(){(0,j.Aj)(E,(e=>{this.CheckAuth=e||null}))},computed:{count(){return this.$store.state.count}}},T=n(89);const q=(0,T.Z)(N,[["render",S]]);var F=q;const I={class:"footer"},P={class:"container"},H={class:"py-5",style:{"padding-bottom":"1rem !important"}},B={class:"row"},M={class:"col-md-4 links footer_block"},L=(0,a._)("img",{class:"size",src:i,alt:"",srcset:""},null,-1),Z=(0,a._)("p",null," At SochBlooms, we believe that every moment deserves a touch of beauty. As a premier florist, we are dedicated to delivering high-quality, fresh flowers at affordable prices, right to your doorstep. Whether it's a celebration, a heartfelt gesture, or just a way to brighten your day, we ensure fast and reliable delivery so your special moments never have to wait. Experience the perfect blend of elegance, freshness, and convenience with SochBlooms – because every bloom tells a story! 🌸🚀 ",-1),D=(0,a._)("br",null,null,-1),W=(0,a.uE)('<div class="col-md-4"><h5>Section</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li><li class="nav-item mb-2"><a href="Features" class="nav-link p-0 text-muted">Features</a></li><li class="nav-item mb-2"><a href="Pricing" class="nav-link p-0 text-muted">Pricing</a></li><li class="nav-item mb-2"><a href="FAQs" class="nav-link p-0 text-muted">FAQs</a></li><li class="nav-item mb-2"><a href="bout" class="nav-link p-0 text-muted">About</a></li></ul></div><div class="col-md-4"><form><h5>Subscribe to our newsletter</h5><p>Monthly digest of what&#39;s new and exciting from us.</p><div class="d-flex flex-column flex-sm-row w-100 gap-2"><label for="newsletter1" class="visually-hidden">Email address</label><input id="newsletter1" type="text" class="form-control" placeholder="Email address"><button class="btn btn-primary" type="button" style="height:38px;background-color:#5C2751;"> Subscribe </button></div></form></div>',2),U=(0,a._)("div",{class:"d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"},[(0,a._)("p",{style:{"padding-left":"35%"}}," © 2025 Company, Inc. All rights reserved. ")],-1);function V(e,t,n,o,r,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("div",P,[(0,a._)("footer",H,[(0,a._)("div",B,[(0,a._)("div",M,[(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[L])),_:1}),Z,D]),W]),U])])])}var G={name:"FooterView"};const z=(0,T.Z)(G,[["render",V]]);var Q=z,J={name:"App",components:{NavbarView:F,FooterView:Q}};const K=(0,T.Z)(J,[["render",r]]);var X=K,Y=n(65);let $=localStorage.getItem("cart"),R=localStorage.getItem("count");var ee=(0,Y.MT)({state(){return{count:R?parseInt(R):0,cart:$?JSON.parse($):[]}},getters:{},mutations:{addToCart(e,t){let n=e.cart.find((e=>e.key==t.key));n?(n.quantity++,n.totalPrice=n.quantity*n.price):(e.cart.push(t),e.count++),this.commit("saveCart")},removeFromCart(e,t){let n=e.cart.indexOf(t);n>-1&&(e.count--,e.cart.splice(n,1),e.cart.splice()),this.commit("saveCart")},decrementQuentity(e,t){let n=e.cart.find((e=>e.key==t.key));n&&n.quantity>1&&(n.quantity--,n.totalPrice=n.quantity*n.price),this.commit("saveCart")},saveCart(e){localStorage.setItem("cart",JSON.stringify(e.cart)),localStorage.setItem("count",e.count)},resetCart(e){e.cart=[],e.count=0,localStorage.setItem("cart",JSON.stringify(e.cart)),localStorage.setItem("count",e.count)}},actions:{},modules:{}});n(7154),n(9867);(0,o.ri)(X).use(ee).use(O.Z).mount("#app")},5696:function(e,t,n){n.d(t,{Z:function(){return w}});n(4554);var o=n(2483),a=n(4028),r=n(3396);const i={class:"wrapper",style:{color:"var(--title-color)","text-align":"center",padding:"60px 0"}},l=(0,r._)("h2",{style:{"font-size":"160px",color:"var(--title-color)","line-height":"1",margin:"0 0 25px"}}," 404 ",-1),s=(0,r._)("div",null,null,-1),c=(0,r._)("h4",null,"Sorry, The page you were looking for in Our site does not exist.",-1),u=(0,r._)("br",null,null,-1);function d(e,t,n,o,a,d){return(0,r.wg)(),(0,r.iD)("div",i,[l,s,c,u,(0,r._)("button",{type:"button",class:"btn btn-primary",style:{background:"#5C2751"},onClick:t[0]||(t[0]=(...e)=>d.GoToHome&&d.GoToHome(...e))}," GO BACK HOME ")])}var m={name:"NotFound",methods:{GoToHome(){w.push("/")}}},f=n(89);const p=(0,f.Z)(m,[["render",d]]);var v=p;const h=(0,a.v0)(),g=()=>new Promise(((e,t)=>{const n=(0,a.Aj)(h,(t=>{n(),e(t)}),t)})),b=[{path:"/",name:"home",component:()=>n.e(642).then(n.bind(n,7642))},{path:"/signin",name:"signin",component:()=>n.e(328).then(n.bind(n,9328))},{path:"/:pathMatch(.*)*",name:"NotFound",component:v},{path:"/products",name:"products",component:()=>n.e(348).then(n.bind(n,348))},{path:"/myproducts",name:"myproducts",component:()=>n.e(50).then(n.bind(n,8050)),meta:{requiresAuth:!0}},{path:"/products/:id",name:"details",component:()=>n.e(810).then(n.bind(n,7810))},{path:"/products/:id",name:"LinkNotFound",component:()=>n.e(819).then(n.bind(n,1819))},{path:"/login",name:"login",component:()=>n.e(289).then(n.bind(n,2289))},{path:"/logout",name:"logout",component:()=>n.e(642).then(n.bind(n,7642)),meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>n.e(381).then(n.bind(n,7381))},{path:"/cart",name:"cart",component:()=>n.e(0).then(n.bind(n,2257))},{path:"/orders",name:"OrdersView",component:()=>n.e(322).then(n.bind(n,2322)),meta:{requiresAuth:!0}}],y=(0,o.p7)({history:(0,o.PO)("/"),routes:b});var w=y;y.beforeEach((async(e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));o&&!await g()?n("signin"):n()}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{0:"5c4fd299",50:"cbe289f8",289:"3fb5bd12",322:"d8df9f8e",328:"6569e551",348:"fb59a504",381:"b3861853",642:"ebbc34dd",810:"4e76246b",819:"de97c246"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{50:"1090684d",322:"fa871dd1",328:"059f4c21",348:"ac3ab2c1",642:"69e750df",810:"a101ac66"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="myprojectvuejs:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var l,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=o),e[o]=[a];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return a();e(o,l,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={50:1,322:1,328:1,348:1,642:1,810:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1700)}));o=n.O(o)})();
//# sourceMappingURL=app.809dde9c.js.map