import{g as f}from"./chunk-VVJUAPSS.js";import{Ja as x,Ma as g,Na as n,Oa as o,P as c,Pa as h,Qa as O,Ra as P,Sa as b,Ta as y,Ua as i,Va as s,Wa as w,Y as _,Z as m,ea as v,fa as C,tb as E,ub as d,va as M,ya as a}from"./chunk-CQIZP45R.js";function F(t,r){if(t&1){let e=O();n(0,"div",5),h(1,"img",6),n(2,"h3"),i(3),o(),n(4,"p"),i(5),o(),n(6,"p")(7,"strong"),i(8,"Date: "),o(),i(9),o(),n(10,"button",7),P("click",function(){let j=v(e).$implicit,k=b();return C(k.addToCart(j))}),i(11,"Add to Cart"),o()()}if(t&2){let e=r.$implicit;a(),y("alt",e.name),g("src",e.imageUrl,M),a(2),s(e.name),a(2),s(e.description),a(4),s(e.date)}}var l=class t{events=[{id:1,name:"Live Music Event",description:"Join us for an evening of live music!",date:"2024-10-15",imageUrl:"https://image.wedmegood.com/resized/450X/uploads/member/525015/1724480180__R9A9654.JPG?crop=7,96,1347,757"},{id:2,name:"Art Exhibition",description:"Explore the latest art pieces from local artists.",date:"2024-10-22",imageUrl:"https://image.wedmegood.com/resized/450X/uploads/member/3501985/1664971410_IMG_20220716_WA0028.jpg?crop=7,86,737,414"},{id:3,name:"Bougainvillea Banquets",description:"Banquet Halls, 3 Star Hotels with Banquets",date:"2024-11-05",imageUrl:"https://image.wedmegood.com/resized/450X/uploads/member/24977015/1722237231_IMG_20230417_150441.jpg?crop=6,138,1348,758"}];addToCart(r){alert(`${r.name} has been added to your cart!`)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-home"]],standalone:!0,features:[w],decls:9,vars:1,consts:[[1,"home"],[1,"hero"],[1,"event-section"],[1,"event-list"],["class","event-card",4,"ngFor","ngForOf"],[1,"event-card"],[3,"src","alt"],[3,"click"]],template:function(e,u){e&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),i(3,"Welcome to the Event Management System"),o()(),n(4,"div",2)(5,"h2"),i(6,"Featured Events"),o(),n(7,"div",3),x(8,F,12,5,"div",4),o()()()),e&2&&(a(8),g("ngForOf",u.events))},dependencies:[d,E],styles:['.home[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{background:linear-gradient(135deg,#007bffb3,#007bff80),url(https://example.com/your-background-image.jpg) center/cover no-repeat;color:#fff;text-align:center;margin-bottom:20px;height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;overflow:hidden}.home[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;margin:0;z-index:2;animation:_ngcontent-%COMP%_fadeIn 1s ease-in}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.home[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:#00000080;z-index:1}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]{margin:50px}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.8rem;text-align:center}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px 5px 0 0;width:360px;text-align:center;padding-bottom:20px}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:5px 5px 0 0}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;background-color:#007bff;color:#fff;border:none;border-radius:5px;padding:10px;cursor:pointer}.home[_ngcontent-%COMP%]   .event-section[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}']})};var H=[{path:"",component:l}],p=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=c({imports:[f.forChild(H),f]})};var S=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=m({type:t});static \u0275inj=c({imports:[d,p]})};export{S as HomeModule};
