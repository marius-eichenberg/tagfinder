webpackJsonp([1],{0:function(n,t,l){n.exports=l("x35b")},"6GLz":function(n,t){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="6GLz"},x35b:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("3j3K"),u=function(){return function(){}}(),o=function(){return function(){}}(),i=l("2Je8"),r=function(){function n(n){this.name=n,this.count=1}return n.prototype.incrementCount=function(){this.count++},n}(),c=l("KdFd"),a=function(){function n(n){this.http=n,this.rootURL="https://www.instagram.com/"}return n.prototype.getMediaByTag=function(n){var t=this.rootURL+"explore/tags/"+n+"/";return this.http.get(t,{responseType:"text"})},n.ctorParameters=function(){return[{type:c.c}]},n}(),s=function(){function n(n){this.dataService=n,this.placeholderText="Describe your image.",this.placeholderSubtext="Use #hashtags to get further tags suggested.",this.showPlaceholder=!0,this.showStartButton=!0,this.showMoreButton=!1,this.tags=new Array,this.tags_in_text=new Array,this.cached_tags=new Array,this.selected_tags=new Array,this.selectedCount=0,this.text="",this.regExTag=/#[^\n|#|@| ]*/g}return n.prototype.ngOnInit=function(){},n.prototype.startSearch=function(){var n=this;if(""!==this.text){var t=this.text.match(this.regExTag);null!=t&&t.forEach(function(t){t=t.slice(1),n.tags_in_text.push(new r(t)),n.updateSelectedCount(),n.getMediaByTag(t)})}},n.prototype.focusInput=function(n){this.showPlaceholder=!1,n.focus()},n.prototype.defocusInput=function(){""===this.text&&(this.showPlaceholder=!0)},n.prototype.getMediaByTag=function(n){var t=this;this.dataService.getMediaByTag(n).subscribe(function(n){n.match(t.regExTag).forEach(function(n){n=n.slice(1);var l=t.tags.find(function(t){return t.name===n});null!=t.tags_in_text.find(function(t){return t.name===n})||(null==l?t.tags.push(new r(n)):l.incrementCount())}),t.tags.sort(function(n,t){return t.count-n.count}),t.tags=t.tags.slice(0,30),t.cached_tags=t.tags.slice(),t.showStartButton=!1,t.showMoreButton=!0})},n.prototype.getMediaByTagAndCache=function(n){var t=this;this.dataService.getMediaByTag(n).subscribe(function(n){n.match(t.regExTag).forEach(function(n){n=n.slice(1);var l=t.cached_tags.find(function(t){return t.name===n});null==l?t.cached_tags.push(new r(n)):l.incrementCount()}),t.cached_tags.sort(function(n,t){return n.selected?-1e3:t.selected?1e3:t.count-n.count}),t.cached_tags=t.cached_tags.slice(0,50)})},n.prototype.showMore=function(){this.tags=this.cached_tags.slice()},n.prototype.toggleTag=function(n){if(n.selected=!n.selected,n.selected)this.selected_tags.push(n.name);else{var t=this.selected_tags.indexOf(n.name);t>0&&this.selected_tags.slice(t,1)}this.getMediaByTagAndCache(n.name),this.updateSelectedCount()},n.prototype.updateSelectedCount=function(){var n=0;this.tags.forEach(function(t){t.selected&&n++}),this.selectedCount=n+this.tags_in_text.length},n.prototype.getText=function(){var n="";return this.tags.forEach(function(t){t.selected&&(n=n+"#"+t.name+" ")}),this.text+"\n.\n.\n.\n"+n},n.ctorParameters=function(){return[{type:a}]},n}(),_=l("yQLj"),g=l("1HDE"),f=[[".selected[_ngcontent-%COMP%]{color:#333;background-color:azure;border:1px solid azure}ul[_ngcontent-%COMP%]{padding:0}li[_ngcontent-%COMP%]{float:left;display:block;margin:3px 5px;border:1px solid;border-radius:4px;padding:7px 20px;line-height:16px;font-size:15px}.textarea[_ngcontent-%COMP%]   #input[_ngcontent-%COMP%]:focus{outline:0}.textarea[_ngcontent-%COMP%]{position:relative;width:100%;height:100px;border-bottom:2px solid rgba(130,105,206,.8)}.textarea[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;width:1px;height:20%;background-color:rgba(255,255,255,.5);left:5px;bottom:7px;-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:1.4s;animation-duration:1.4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;opacity:1}.textarea[_ngcontent-%COMP%]   #input[_ngcontent-%COMP%]:focus + i[_ngcontent-%COMP%]{display:none}@-webkit-keyframes blink{from{opacity:1}to{opacity:0}}@keyframes blink{from{opacity:1}to{opacity:0}}#input[_ngcontent-%COMP%]{min-height:10px;position:absolute;bottom:0;left:0;margin:0 12px 7px;right:0;overflow:auto;max-height:93px;scroll-behavior:smooth}.placeholder[_ngcontent-%COMP%]{opacity:.5;position:absolute;bottom:0;left:0;margin:0 12px 7px;right:0}#more_button[_ngcontent-%COMP%], #start_button[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.08);border-color:rgba(255,255,255,.08)}#copy[_ngcontent-%COMP%]{position:absolute;width:80%;bottom:10%;z-index:1;left:10%;right:10%;height:50px;border:none;border-radius:3px;line-height:16px;font-size:15px;color:#fff;background-image:linear-gradient(15deg,#ff7aa1 0,#ff9195 100%);-webkit-box-shadow:0 16px 19px 0 rgba(0,0,0,.14);box-shadow:0 16px 19px 0 rgba(0,0,0,.14)}"]],p=e._12({encapsulation:0,styles:f,data:{}});function h(n){return e._29(0,[(n()(),e._15(0,0,null,null,6,"div",[["class","placeholder"]],null,[[null,"click"]],function(n,t,l){var u=!0,o=n.component;"click"===t&&(u=!1!==o.focusInput(e._26(n.parent,5))&&u);return u},null,null)),(n()(),e._28(-1,null,["\n    "])),(n()(),e._15(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e._28(3,null,["",""])),(n()(),e._28(-1,null,["\n    "])),(n()(),e._15(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._28(6,null,["","\n  "]))],null,function(n,t){var l=t.component;n(t,3,0,l.placeholderText),n(t,6,0,l.placeholderSubtext)})}function d(n){return e._29(0,[(n()(),e._15(0,0,null,null,0,"i",[],null,null,null,null,null))],null,null)}function b(n){return e._29(0,[(n()(),e._15(0,0,null,null,1,"li",[["id","start_button"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;"click"===t&&(e=!1!==u.startSearch()&&e);return e},null,null)),(n()(),e._28(-1,null,["go for it ..."]))],null,null)}function m(n){return e._29(0,[(n()(),e._15(0,0,null,null,2,"li",[],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;"click"===t&&(e=!1!==u.toggleTag(n.context.$implicit)&&e);return e},null,null)),e._13(1,278528,null,0,i.h,[e.y,e.z,e.n,e.M],{ngClass:[0,"ngClass"]},null),(n()(),e._28(2,null,["\n    ","\n  "]))],function(n,t){n(t,1,0,t.context.$implicit.selected?"selected":"")},function(n,t){n(t,2,0,t.context.$implicit.name)})}function x(n){return e._29(0,[(n()(),e._15(0,0,null,null,1,"li",[["id","more_button"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;"click"===t&&(e=!1!==u.showMore()&&e);return e},null,null)),(n()(),e._28(-1,null,["gimme more ..."]))],null,null)}function y(n){return e._29(0,[(n()(),e._28(-1,null,["\n"])),(n()(),e._15(1,0,null,null,12,"div",[["class","textarea"]],null,null,null,null,null)),(n()(),e._28(-1,null,["\n  "])),(n()(),e._28(-1,null,["\n            "])),(n()(),e._28(-1,null,["\n\n\n  "])),(n()(),e._15(5,0,[["newTag",1]],null,1,"p",[["contenteditable",""],["id","input"]],null,[[null,"keyup.enter"],[null,"blur"],[null,"focus"],[null,"focusout"]],function(n,t,l){var u=!0,o=n.component;"keyup.enter"===t&&(u=!1!==o.defocusInput()&&u);"blur"===t&&(u=!1!==(o.text=e._26(n,5).innerText)&&u);"focus"===t&&(u=!1!==o.focusInput(e._26(n,5))&&u);"focusout"===t&&(u=!1!==o.defocusInput()&&u);return u},null,null)),(n()(),e._28(6,null,["\n    ","\n  "])),(n()(),e._28(-1,null,["\n\n  "])),(n()(),e._9(16777216,null,null,1,null,h)),e._13(9,16384,null,0,i.j,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(n()(),e._28(-1,null,["\n  "])),(n()(),e._9(16777216,null,null,1,null,d)),e._13(12,16384,null,0,i.j,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(n()(),e._28(-1,null,["\n"])),(n()(),e._28(-1,null,["\n\n"])),(n()(),e._15(15,0,null,null,10,"ul",[],null,null,null,null,null)),(n()(),e._28(-1,null,["\n  "])),(n()(),e._9(16777216,null,null,1,null,b)),e._13(18,16384,null,0,i.j,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(n()(),e._28(-1,null,["\n  "])),(n()(),e._9(16777216,null,null,1,null,m)),e._13(21,802816,null,0,i.i,[e.Y,e.V,e.y],{ngForOf:[0,"ngForOf"]},null),(n()(),e._28(-1,null,["\n  "])),(n()(),e._9(16777216,null,null,1,null,x)),e._13(24,16384,null,0,i.j,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(n()(),e._28(-1,null,["\n"])),(n()(),e._28(-1,null,["\n\n"])),(n()(),e._15(27,0,null,null,2,"button",[["id","copy"],["ngxClipboard",""]],null,[[null,"click"]],function(n,t,l){var u=!0;"click"===t&&(u=!1!==e._26(n,28).onClick(l.target)&&u);return u},null,null)),e._13(28,212992,null,0,_.a,[g.b,e.M],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(n()(),e._28(29,null,["Copy text with "," #hashtags"])),(n()(),e._28(-1,null,["\n"]))],function(n,t){var l=t.component;n(t,9,0,l.showPlaceholder),n(t,12,0,l.showPlaceholder),n(t,18,0,l.showStartButton),n(t,21,0,l.tags),n(t,24,0,l.showMoreButton);n(t,28,0,"",l.getText())},function(n,t){var l=t.component;n(t,6,0,l.text),n(t,29,0,l.selectedCount)})}var w=e._10("app-tagfinder",s,function(n){return e._29(0,[(n()(),e._15(0,0,null,null,1,"app-tagfinder",[],null,null,null,y,p)),e._13(1,114688,null,0,s,[a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),k=l("5oXY"),v=[[""]],C=e._12({encapsulation:0,styles:v,data:{}});function M(n){return e._29(0,[(n()(),e._15(0,0,null,null,4,"div",[["id","router-outlet"]],null,null,null,null,null)),(n()(),e._28(-1,null,["\n  "])),(n()(),e._15(2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e._13(3,212992,null,0,k.m,[k.b,e.Y,e.k,[8,null],e.i],null,null),(n()(),e._28(-1,null,["\n"])),(n()(),e._28(-1,null,["\n"]))],function(n,t){n(t,3,0)},null)}var O=e._10("app-root",o,function(n){return e._29(0,[(n()(),e._15(0,0,null,null,1,"app-root",[],null,null,null,M,C)),e._13(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),P=l("Qbdm"),T=l("JBDL"),j=function(){return function(){}}(),E=l("QNV0"),I=e._11(u,[o],function(n){return e._24([e._25(512,e.k,e._7,[[8,[w,O]],[3,e.k],e.E]),e._25(5120,e.A,e._23,[[3,e.A]]),e._25(4608,i.l,i.k,[e.A]),e._25(5120,e.c,e._16,[]),e._25(5120,e.y,e._21,[]),e._25(5120,e.z,e._22,[]),e._25(4608,P.c,P.t,[i.c]),e._25(6144,e.Q,null,[P.c]),e._25(4608,P.f,P.g,[]),e._25(5120,P.d,function(n,t,l,e){return[new P.l(n),new P.p(t),new P.o(l,e)]},[i.c,i.c,i.c,P.f]),e._25(4608,P.e,P.e,[P.d,e.G]),e._25(135680,P.n,P.n,[i.c]),e._25(4608,P.m,P.m,[P.e,P.n]),e._25(6144,e.O,null,[P.m]),e._25(6144,P.q,null,[P.n]),e._25(4608,e.W,e.W,[e.G]),e._25(4608,P.h,P.h,[i.c]),e._25(4608,P.j,P.j,[i.c]),e._25(4608,c.h,c.m,[i.c,e.J,c.k]),e._25(4608,c.n,c.n,[c.h,c.l]),e._25(5120,c.a,function(n){return[n]},[c.n]),e._25(4608,c.j,c.j,[]),e._25(6144,c.i,null,[c.j]),e._25(4608,c.g,c.g,[c.i]),e._25(6144,c.b,null,[c.g]),e._25(5120,c.f,c.o,[c.b,[2,c.a]]),e._25(4608,c.c,c.c,[c.f]),e._25(5120,k.a,k.v,[k.k]),e._25(4608,k.d,k.d,[]),e._25(6144,k.f,null,[k.d]),e._25(135680,k.n,k.n,[k.k,e.D,e.j,e.w,k.f]),e._25(4608,k.e,k.e,[]),e._25(5120,k.h,k.y,[k.w]),e._25(5120,e.b,function(n){return[n]},[k.h]),e._25(5120,T.a,T.c,[]),e._25(5120,g.b,g.a,[P.b,T.a,[3,g.b]]),e._25(4608,a,a,[c.c]),e._25(512,i.b,i.b,[]),e._25(1024,e.o,P.r,[]),e._25(1024,e.F,function(){return[k.r()]},[]),e._25(512,k.w,k.w,[e.w]),e._25(1024,e.d,function(n,t,l){return[P.s(n,t),k.x(l)]},[[2,P.i],[2,e.F],k.w]),e._25(512,e.e,e.e,[[2,e.d]]),e._25(131584,e._14,e._14,[e.G,e._8,e.w,e.o,e.k,e.e]),e._25(2048,e.g,null,[e._14]),e._25(512,e.f,e.f,[e.g]),e._25(512,P.a,P.a,[[3,P.a]]),e._25(512,c.e,c.e,[]),e._25(512,c.d,c.d,[]),e._25(1024,k.q,k.t,[[3,k.k]]),e._25(512,k.p,k.c,[]),e._25(512,k.b,k.b,[]),e._25(256,k.g,{},[]),e._25(1024,i.g,k.s,[i.n,[2,i.a],k.g]),e._25(512,i.f,i.f,[i.g]),e._25(512,e.j,e.j,[]),e._25(512,e.D,e.T,[e.j,[2,e.U]]),e._25(1024,k.i,function(){return[[{path:"",component:s}]]},[]),e._25(1024,k.k,k.u,[e.g,k.p,k.b,i.f,e.w,e.D,e.j,k.i,k.g,[2,k.o],[2,k.j]]),e._25(512,k.l,k.l,[[2,k.q],[2,k.k]]),e._25(512,j,j,[]),e._25(512,T.b,T.b,[]),e._25(512,E.a,E.a,[]),e._25(512,u,u,[]),e._25(256,c.k,"XSRF-TOKEN",[]),e._25(256,c.l,"X-XSRF-TOKEN",[])])});Object(e._2)(),Object(P.k)().bootstrapModuleFactory(I).catch(function(n){return console.log(n)})}},[0]);