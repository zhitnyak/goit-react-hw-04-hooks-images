(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,n){},2:function(e,t,n){e.exports={p:"App_p__2g-ke",App:"App_App__ScXgk",Searchbar:"App_Searchbar__YFg_T",SearchForm:"App_SearchForm__1650y",SearchFormButton:"App_SearchFormButton__QDb3h",SearchFormButtonLabel:"App_SearchFormButtonLabel__11Rm_",SearchFormInput:"App_SearchFormInput__2zawi",ImageGallery:"App_ImageGallery__MkEoM",wrapper:"App_wrapper__aVUZj",ImageGalleryItem:"App_ImageGalleryItem__1sWF0",ImageGalleryItemImage:"App_ImageGalleryItemImage__1WmT6",Overlay:"App_Overlay__38qew",Modal:"App_Modal__2ZepC",Button:"App_Button__4QxGy",Spinner:"App_Spinner__1FYJa"}},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(15),n(4)),s=n(2),u=n.n(s),l=n(1);var p=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(l.jsx)("header",{className:u.a.Searchbar,children:Object(l.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(l.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(l.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(l.jsx)("input",{className:u.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)},value:r})]})})},j=n(8);var m=function(e){var t=e.src,n=e.alt,a=e.onClick,c=e.id;return Object(l.jsx)("li",{className:u.a.ImageGalleryItem,onClick:function(){a(t,n,c)},children:Object(l.jsx)("img",{src:t,alt:n,className:u.a.ImageGalleryItemImage,id:c})})};var b=function(e){var t=e.onClose,n=e.onLeft,c=e.onRight,r=e.src,o=e.tags;Object(a.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));var i=function(e){"Escape"===e.code?t():"ArrowLeft"===e.code?n():"ArrowRight"===e.code&&c()};return Object(l.jsx)("div",{className:u.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:r,alt:o,className:u.a.Modal})})})},h=function(e){var t=e.onClick;return Object(l.jsx)("button",{type:"button",className:u.a.Button,onClick:t,children:"Load more"})},d=n(10),g=n.n(d),f=function(){return Object(l.jsx)("div",{className:u.a.Spinner,children:Object(l.jsx)(g.a,{type:"Oval",color:"#DCB60E",height:60,width:60,style:{textAlign:"center",paddingTop:"20px"}})})};n(37);var O=function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("22603097-01ea7c9e46d89c9af2e821f90","&image_type=photo&orientation=horizontal&per_page=12"))};var _=function(e){var t=e.query,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)("idle"),p=Object(i.a)(s,2),d=p[0],g=p[1],_=Object(a.useState)(1),v=Object(i.a)(_,2),S=v[0],x=v[1],y=Object(a.useState)(!1),I=Object(i.a)(y,2),w=I[0],A=I[1],k=Object(a.useState)(null),F=Object(i.a)(k,2),L=F[0],N=F[1],C=Object(a.useState)(""),B=Object(i.a)(C,2),E=B[0],G=B[1],R=Object(a.useState)(""),M=Object(i.a)(R,2),U=M[0],q=M[1],T=Object(a.useState)(""),D=Object(i.a)(T,2),J=D[0],z=D[1],Q=Object(a.useState)(""),W=Object(i.a)(Q,2),Y=W[0],Z=W[1];Object(a.useEffect)((function(){""!==t&&(g("pending"),O(t).then((function(e){return e.ok?e.json():Promise.reject(new Error("no images on request"))})).then((function(e){var n=e.hits;if(0===n.length)g("rejected");else{var a=H(n);o(a),g("resolved"),x((function(e){return e+1})),N(t)}})).catch((function(e){g("rejected"),console.log(e)})))}),[t]);var H=function(e){var t=[];return e.forEach((function(e){var n=e.id,a=e.largeImageURL,c=e.tags;t.push({id:n,largeImageURL:a,tags:c})})),t},P=function(){A((function(e){return!e})),G("")},V=function(e,t,n){z(e),Z(t),P(),r.map((function(e,t){return e.id===n&&q(t),""}))};return"idle"===d?"":"pending"===d?Object(l.jsx)(f,{}):"rejected"===d?Object(l.jsxs)("p",{className:u.a.p,children:['Sorry, "',t,'" not found']}):"resolved"===d?Object(l.jsxs)("div",{className:u.a.wrapper,children:[w&&Object(l.jsx)(b,{onClose:P,onLeft:function(){U>0&&(G(r[U-1].largeImageURL),q((function(e){return e-1})))},onRight:function(){U<r.length-1&&(G(r[U+1].largeImageURL),q((function(e){return e+1})))},src:E||J,tags:Y}),Object(l.jsx)("ul",{className:u.a.ImageGallery,children:r.map((function(e){var t=e.largeImageURL,n=e.tags,a=e.id;return Object(l.jsx)(m,{src:t,alt:n,onClick:V,id:a},a)}))}),Object(l.jsx)(h,{onClick:function(){O(L,S).then((function(e){return e.json()})).then((function(e){var t=e.hits,n=H(t);o((function(e){return[].concat(Object(j.a)(e),Object(j.a)(n))})),x((function(e){return e+1}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){g("rejected"),console.log(e)}))}})]}):void 0};var v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{onSubmit:function(e){c(e)}}),Object(l.jsx)(_,{query:n})]})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9767ffe8.chunk.js.map