"use strict";(self.webpackChunkpronsk_site=self.webpackChunkpronsk_site||[]).push([[277],{2700:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var n=a(7059),c=a(7294),r=a(4942),i=a(885),l=a(5987),s=a(5655);var D=function(e,t){var a=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},o=a(9424),u=a(6400),d=a(9129),f=Math.pow(2,31)-1;function b(e,t,a){var n=a-Date.now();e.current=n<=f?setTimeout(t,n):setTimeout((function(){return b(e,t,a)}),f)}function p(){var e=(0,u.Z)(),t=(0,c.useRef)();return(0,d.Z)((function(){return clearTimeout(t.current)})),(0,c.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,c){void 0===c&&(c=0),e()&&(a(),c<=f?t.current=setTimeout(n,c):b(t,n,Date.now()+c))},clear:a}}),[])}var B=a(1324),m=a(5900),w=a.n(m),g=a(5210),v=(0,a(8870).Z)("carousel-caption"),h=a(9541),y=a(5893),x=["as","bsPrefix","className"];function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=c.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,c=e.bsPrefix,r=e.className,i=(0,l.Z)(e,x),s=w()(r,(0,h.vE)(c,"carousel-item"));return(0,y.jsx)(n,j(j({ref:t},i),{},{className:s}))}));C.displayName="CarouselItem";var S=C;function O(e,t){var a=0;return c.Children.map(e,(function(e){return c.isValidElement(e)?t(e,a++):e}))}var k=a(1831),N=a(9059),A=a(558),z=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,y.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,y.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var Z=c.forwardRef((function(e,t){var a=(0,g.Ch)(e,{activeIndex:"onSelect"}),n=a.as,r=void 0===n?"div":n,u=a.bsPrefix,d=a.slide,f=a.fade,b=a.controls,m=a.indicators,v=a.indicatorLabels,x=a.activeIndex,E=a.onSelect,j=a.onSlide,C=a.onSlid,S=a.interval,F=a.keyboard,P=a.onKeyDown,Z=a.pause,_=a.onMouseOver,T=a.onMouseOut,M=a.wrap,L=a.touch,R=a.onTouchStart,q=a.onTouchMove,J=a.onTouchEnd,K=a.prevIcon,V=a.prevLabel,X=a.nextIcon,H=a.nextLabel,G=a.variant,Q=a.className,U=a.children,W=(0,l.Z)(a,z),Y=(0,h.vE)(u,"carousel"),$=(0,h.SC)(),ee=(0,c.useRef)(null),te=(0,c.useState)("next"),ae=(0,i.Z)(te,2),ne=ae[0],ce=ae[1],re=(0,c.useState)(!1),ie=(0,i.Z)(re,2),le=ie[0],se=ie[1],De=(0,c.useState)(!1),oe=(0,i.Z)(De,2),ue=oe[0],de=oe[1],fe=(0,c.useState)(x||0),be=(0,i.Z)(fe,2),pe=be[0],Be=be[1];(0,c.useEffect)((function(){ue||x===pe||(ee.current?ce(ee.current):ce((x||0)>pe?"next":"prev"),d&&de(!0),Be(x||0))}),[x,ue,pe,d]),(0,c.useEffect)((function(){ee.current&&(ee.current=null)}));var me,we=0;!function(e,t){var a=0;c.Children.forEach(e,(function(e){c.isValidElement(e)&&t(e,a++)}))}(U,(function(e,t){++we,t===x&&(me=e.props.interval)}));var ge=(0,o.Z)(me),ve=(0,c.useCallback)((function(e){if(!ue){var t=pe-1;if(t<0){if(!M)return;t=we-1}ee.current="prev",null==E||E(t,e)}}),[ue,pe,E,M,we]),he=(0,s.Z)((function(e){if(!ue){var t=pe+1;if(t>=we){if(!M)return;t=0}ee.current="next",null==E||E(t,e)}})),ye=(0,c.useRef)();(0,c.useImperativeHandle)(t,(function(){return{element:ye.current,prev:ve,next:he}}));var xe=(0,s.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ye.current)&&($?ve():he())})),Ee="next"===ne?"start":"end";D((function(){d||(null==j||j(pe,Ee),null==C||C(pe,Ee))}),[pe]);var je="".concat(Y,"-item-").concat(ne),Ce="".concat(Y,"-item-").concat(Ee),Se=(0,c.useCallback)((function(e){(0,N.Z)(e),null==j||j(pe,Ee)}),[j,pe,Ee]),Oe=(0,c.useCallback)((function(){de(!1),null==C||C(pe,Ee)}),[C,pe,Ee]),ke=(0,c.useCallback)((function(e){if(F&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?he(e):ve(e));case"ArrowRight":return e.preventDefault(),void($?ve(e):he(e))}null==P||P(e)}),[F,P,ve,he,$]),Ne=(0,c.useCallback)((function(e){"hover"===Z&&se(!0),null==_||_(e)}),[Z,_]),Ae=(0,c.useCallback)((function(e){se(!1),null==T||T(e)}),[T]),ze=(0,c.useRef)(0),Fe=(0,c.useRef)(0),Ie=p(),Pe=(0,c.useCallback)((function(e){ze.current=e.touches[0].clientX,Fe.current=0,"hover"===Z&&se(!0),null==R||R(e)}),[Z,R]),Ze=(0,c.useCallback)((function(e){e.touches&&e.touches.length>1?Fe.current=0:Fe.current=e.touches[0].clientX-ze.current,null==q||q(e)}),[q]),_e=(0,c.useCallback)((function(e){if(L){var t=Fe.current;Math.abs(t)>40&&(t>0?ve(e):he(e))}"hover"===Z&&Ie.set((function(){se(!1)}),S||void 0),null==J||J(e)}),[L,Z,ve,he,Ie,S,J]),Te=null!=S&&!le&&!ue,Me=(0,c.useRef)();(0,c.useEffect)((function(){var e,t;if(Te){var a=$?ve:he;return Me.current=window.setInterval(document.visibilityState?xe:a,null!=(e=null!=(t=ge.current)?t:S)?e:void 0),function(){null!==Me.current&&clearInterval(Me.current)}}}),[Te,ve,he,ge,S,xe,$]);var Le=(0,c.useMemo)((function(){return m&&Array.from({length:we},(function(e,t){return function(e){null==E||E(t,e)}}))}),[m,we,E]);return(0,y.jsxs)(r,I(I({ref:ye},W),{},{onKeyDown:ke,onMouseOver:Ne,onMouseOut:Ae,onTouchStart:Pe,onTouchMove:Ze,onTouchEnd:_e,className:w()(Q,Y,d&&"slide",f&&"".concat(Y,"-fade"),G&&"".concat(Y,"-").concat(G)),children:[m&&(0,y.jsx)("div",{className:"".concat(Y,"-indicators"),children:O(U,(function(e,t){return(0,y.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=v&&v.length?v[t]:"Slide ".concat(t+1),className:t===pe?"active":void 0,onClick:Le?Le[t]:void 0,"aria-current":t===pe},t)}))}),(0,y.jsx)("div",{className:"".concat(Y,"-inner"),children:O(U,(function(e,t){var a=t===pe;return d?(0,y.jsx)(A.Z,{in:a,onEnter:a?Se:void 0,onEntered:a?Oe:void 0,addEndListener:k.Z,children:function(t,n){return c.cloneElement(e,I(I({},n),{},{className:w()(e.props.className,a&&"entered"!==t&&je,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Ce)}))}}):c.cloneElement(e,{className:w()(e.props.className,a&&"active")})}))}),b&&(0,y.jsxs)(y.Fragment,{children:[(M||0!==x)&&(0,y.jsxs)(B.Z,{className:"".concat(Y,"-control-prev"),onClick:ve,children:[K,V&&(0,y.jsx)("span",{className:"visually-hidden",children:V})]}),(M||x!==we-1)&&(0,y.jsxs)(B.Z,{className:"".concat(Y,"-control-next"),onClick:he,children:[X,H&&(0,y.jsx)("span",{className:"visually-hidden",children:H})]})]})]}))}));Z.displayName="Carousel",Z.defaultProps=P;var _=Object.assign(Z,{Caption:v,Item:S}),T=500,M={objectFit:"cover",margin:"auto"};var L=function(){return c.createElement(_,null,c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/zakat2.png",height:T,style:M,quality:100,alt:"Закат на Покровке",__imageData:a(9934)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/musey.jpg",height:T,style:M,quality:100,alt:"Музей",__imageData:a(7415)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/церковь.png",height:T,style:M,quality:100,alt:"Елшино",__imageData:a(3685)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/памятник.jpg",height:T,style:M,quality:100,alt:"Елшино",__imageData:a(5349)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/Рыбалка2.jpg",height:T,style:M,quality:100,alt:"Елшино",__imageData:a(5524)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/монастырь.jpg",height:T,style:M,quality:100,alt:"Елшино",__imageData:a(4161)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/артисты.jpg",height:T,style:M,quality:100,alt:"Елшино",__imageData:a(7420)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),c.createElement(_.Item,null,c.createElement("div",{style:{display:"flex"}},c.createElement(n.S,{src:"../../images/slider/танцы.jpg",height:T,style:M,quality:100,alt:"Елшино",__imageData:a(5089)}),c.createElement(_.Caption,null,c.createElement("h3",null,"First slide label"),c.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))))}},4161:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/38402023b5ed5dc0678d9236a631b190/b7222/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.jpg","srcSet":"/static/38402023b5ed5dc0678d9236a631b190/bf270/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.jpg 386w,\\n/static/38402023b5ed5dc0678d9236a631b190/74e72/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.jpg 772w,\\n/static/38402023b5ed5dc0678d9236a631b190/b7222/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.jpg 1544w","sizes":"(min-width: 1544px) 1544px, 100vw"},"sources":[{"srcSet":"/static/38402023b5ed5dc0678d9236a631b190/38924/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.webp 386w,\\n/static/38402023b5ed5dc0678d9236a631b190/5c0b6/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.webp 772w,\\n/static/38402023b5ed5dc0678d9236a631b190/1b002/%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C.webp 1544w","type":"image/webp","sizes":"(min-width: 1544px) 1544px, 100vw"}]},"width":1544,"height":500}')},7420:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/fd3fd29890b9fbec70a76ffb9c206478/426dc/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.jpg","srcSet":"/static/fd3fd29890b9fbec70a76ffb9c206478/ea544/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.jpg 320w,\\n/static/fd3fd29890b9fbec70a76ffb9c206478/39b9c/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.jpg 640w,\\n/static/fd3fd29890b9fbec70a76ffb9c206478/426dc/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/fd3fd29890b9fbec70a76ffb9c206478/5d763/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.webp 320w,\\n/static/fd3fd29890b9fbec70a76ffb9c206478/5eeaa/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.webp 640w,\\n/static/fd3fd29890b9fbec70a76ffb9c206478/d95d8/%D0%B0%D1%80%D1%82%D0%B8%D1%81%D1%82%D1%8B.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":494}')},9934:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#888888","images":{"fallback":{"src":"/static/1e80a47efb3155d80a74cb875cf8cbc8/bbd02/zakat2.png","srcSet":"/static/1e80a47efb3155d80a74cb875cf8cbc8/c3338/zakat2.png 380w,\\n/static/1e80a47efb3155d80a74cb875cf8cbc8/cf540/zakat2.png 759w,\\n/static/1e80a47efb3155d80a74cb875cf8cbc8/bbd02/zakat2.png 1518w","sizes":"(min-width: 1518px) 1518px, 100vw"},"sources":[{"srcSet":"/static/1e80a47efb3155d80a74cb875cf8cbc8/5e17d/zakat2.webp 380w,\\n/static/1e80a47efb3155d80a74cb875cf8cbc8/c26e6/zakat2.webp 759w,\\n/static/1e80a47efb3155d80a74cb875cf8cbc8/ee7e1/zakat2.webp 1518w","type":"image/webp","sizes":"(min-width: 1518px) 1518px, 100vw"}]},"width":1518,"height":500}')},7415:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#685858","images":{"fallback":{"src":"/static/cd1617651b8b00464f66e26d8ba87a01/96cb9/musey.jpg","srcSet":"/static/cd1617651b8b00464f66e26d8ba87a01/03521/musey.jpg 382w,\\n/static/cd1617651b8b00464f66e26d8ba87a01/5674a/musey.jpg 764w,\\n/static/cd1617651b8b00464f66e26d8ba87a01/96cb9/musey.jpg 1527w,\\n/static/cd1617651b8b00464f66e26d8ba87a01/52c44/musey.jpg 3054w","sizes":"(min-width: 1527px) 1527px, 100vw"},"sources":[{"srcSet":"/static/cd1617651b8b00464f66e26d8ba87a01/b58d1/musey.webp 382w,\\n/static/cd1617651b8b00464f66e26d8ba87a01/914ce/musey.webp 764w,\\n/static/cd1617651b8b00464f66e26d8ba87a01/cdea2/musey.webp 1527w,\\n/static/cd1617651b8b00464f66e26d8ba87a01/f97e2/musey.webp 3054w","type":"image/webp","sizes":"(min-width: 1527px) 1527px, 100vw"}]},"width":1527,"height":500.00000000000006}')},5524:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#585838","images":{"fallback":{"src":"/static/85fd1d24508d6d261e235c44046c53ad/18ae5/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.jpg","srcSet":"/static/85fd1d24508d6d261e235c44046c53ad/cf921/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.jpg 387w,\\n/static/85fd1d24508d6d261e235c44046c53ad/8642c/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.jpg 775w,\\n/static/85fd1d24508d6d261e235c44046c53ad/18ae5/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.jpg 1549w","sizes":"(min-width: 1549px) 1549px, 100vw"},"sources":[{"srcSet":"/static/85fd1d24508d6d261e235c44046c53ad/f09d1/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.webp 387w,\\n/static/85fd1d24508d6d261e235c44046c53ad/7e935/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.webp 775w,\\n/static/85fd1d24508d6d261e235c44046c53ad/a55de/%D0%A0%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B02.webp 1549w","type":"image/webp","sizes":"(min-width: 1549px) 1549px, 100vw"}]},"width":1549,"height":500}')},3685:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#384818","images":{"fallback":{"src":"/static/aa54fae0217043aeae26acb235830ae1/03bf8/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.png","srcSet":"/static/aa54fae0217043aeae26acb235830ae1/2938f/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.png 383w,\\n/static/aa54fae0217043aeae26acb235830ae1/2055b/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.png 766w,\\n/static/aa54fae0217043aeae26acb235830ae1/03bf8/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.png 1531w","sizes":"(min-width: 1531px) 1531px, 100vw"},"sources":[{"srcSet":"/static/aa54fae0217043aeae26acb235830ae1/a5e19/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.webp 383w,\\n/static/aa54fae0217043aeae26acb235830ae1/16663/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.webp 766w,\\n/static/aa54fae0217043aeae26acb235830ae1/62e92/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.webp 1531w","type":"image/webp","sizes":"(min-width: 1531px) 1531px, 100vw"}]},"width":1531,"height":500}')},5349:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/f885ba2dd619f72edf00b55cc39d3ef0/f1ed8/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.jpg","srcSet":"/static/f885ba2dd619f72edf00b55cc39d3ef0/1847b/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.jpg 385w,\\n/static/f885ba2dd619f72edf00b55cc39d3ef0/62b04/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.jpg 771w,\\n/static/f885ba2dd619f72edf00b55cc39d3ef0/f1ed8/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.jpg 1541w","sizes":"(min-width: 1541px) 1541px, 100vw"},"sources":[{"srcSet":"/static/f885ba2dd619f72edf00b55cc39d3ef0/2e88f/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.webp 385w,\\n/static/f885ba2dd619f72edf00b55cc39d3ef0/e9fdb/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.webp 771w,\\n/static/f885ba2dd619f72edf00b55cc39d3ef0/ac796/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA.webp 1541w","type":"image/webp","sizes":"(min-width: 1541px) 1541px, 100vw"}]},"width":1541,"height":500}')},5089:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d5512966afba2f228e3c817384898eb9/47f3f/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.jpg","srcSet":"/static/d5512966afba2f228e3c817384898eb9/8f3ab/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.jpg 320w,\\n/static/d5512966afba2f228e3c817384898eb9/3a3c2/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.jpg 640w,\\n/static/d5512966afba2f228e3c817384898eb9/47f3f/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.jpg 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/d5512966afba2f228e3c817384898eb9/71b5d/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.webp 320w,\\n/static/d5512966afba2f228e3c817384898eb9/4cd19/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.webp 640w,\\n/static/d5512966afba2f228e3c817384898eb9/728a0/%D1%82%D0%B0%D0%BD%D1%86%D1%8B.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":491}')}}]);
//# sourceMappingURL=9a7fab29ca7205fffba9c8ec45ac297d2e0a860a-6e4c20c4b9639cc67eda.js.map