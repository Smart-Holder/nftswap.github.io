(window.webpackJsonp=window.webpackJsonp||[]).push([["nft101-cli_1"],{GCib:function(e,t,a){"use strict";var r=a("pZEK");t.a=class extends r.f{_render(){return r.c.createElement("div",{className:"footer-container"},r.c.createElement("div",{className:"md-grid footer"},r.c.createElement("div",{className:"md-cell md-cell--12"},r.c.createElement("div",{className:"subscribe-container"},r.c.createElement("div",{className:"subscribe-center-wrapper"},r.c.createElement("h3",null,"Subscribe to our newsletter"),r.c.createElement("div",{className:"form-container"},r.c.createElement("form",{action:"https://blockchainjobs.us15.list-manage.com/subscribe/post?u=5dfce9177b2176b567e783c36&id=6bf850e75d",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate contact_form",target:"_blank"},r.c.createElement("input",{className:"subscribe-input",type:"email",name:"EMAIL",id:"email",placeholder:"Email address","aria-label":"Enter your e-mail address","aria-describedby":"email-addon",required:!0}),r.c.createElement("span",{className:"input-group-text signup-addon",id:"email-addon"},r.c.createElement("button",{className:"submit-email",style:{display:"none"}}))),r.c.createElement("button",null,"Subscribe"))))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("a",{className:"footer-sr-logo",href:"https://superrare.co/"},"SuperRare"),r.c.createElement("p",{className:"footer-copyright"},"© 2020 SuperRare"))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("p",{className:"footer-column-title"},"Community"),r.c.createElement("a",{className:"footer-link",href:"https://editorial.superrare.co/",target:"_blank",rel:"noopener noreferrer"},"Editorial"),r.c.createElement("a",{className:"footer-link",href:"https://discord.gg/pGeAWrP",target:"_blank",rel:"noopener noreferrer"},"Discord"),r.c.createElement("a",{className:"footer-link",href:"https://www.instagram.com/superrare.co/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),r.c.createElement("a",{className:"footer-link",href:"https://twitter.com/SuperRare",target:"_blank",rel:"noopener noreferrer"},"Twitter"),r.c.createElement("a",{className:"footer-link",href:"https://medium.com/@SuperRare_co",target:"_blank",rel:"noopener noreferrer"},"Blog"),r.c.createElement("a",{className:"footer-link",href:"https://help.superrare.co/",target:"_blank",rel:"noopener noreferrer"},"Help Center"))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("p",{className:"footer-column-title"},"For Artists"),r.c.createElement("a",{className:"footer-link",href:"https://docs.google.com/forms/d/e/1FAIpQLScTZhB9On31j-uoFzMD3hg0gGNf3hgjVyBz1xwCHsOBSydvPw/viewform",target:"_blank",rel:"noopener noreferrer"},"Submit artist profile"))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("p",{className:"footer-column-title"},"Legal"),r.c.createElement("a",{className:"footer-link",href:"https://www.notion.so/SuperRare-Community-Guidelines-b9c4fc521f4344a39cac7bd13d44a56f",target:"_blank",rel:"noopener noreferrer"},"Community Guidelines"),r.c.createElement("a",{className:"footer-link",href:"https://www.notion.so/SuperRare-Terms-of-Service-075a82773af34aab99dde323f5aa044e",target:"_blank",rel:"noopener noreferrer"},"Terms of Service"),r.c.createElement("a",{className:"footer-link",href:"https://www.notion.so/SuperRare-Privacy-Policy-30db13e22c3648099a785b99afc7c584",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),r.c.createElement("a",{className:"footer-link",href:"mailto:ip@superrare.com"},"Report content")))))}render(){return null}}},PTXD:function(e,t,a){"use strict";a.r(t);var r=a("pZEK"),c=a("YR/N"),l=a("GCib"),n=a("nEva"),m=a("xkwK");a("uPBg");t.default=class extends r.b{constructor(){super(...arguments),this.state={}}async triggerLoad(){this.setState({assets:await m.c.myNFTs()})}renderContent(){var e=this.state.assets;return r.c.createElement("div",{className:"row new-grid-row-margin-l-r"},e?0==e.length?r.c.createElement("div",null,"Empty data"):e.map((e,t)=>r.c.createElement(n.a,{assets:e,key:t})):r.c.createElement("div",null,"Loading..."))}render(){return r.c.createElement("div",{className:"marketplace-page app-page mynft"},r.c.createElement(c.a,null),r.c.createElement("div",{className:"container"},r.c.createElement("div",{className:"row"},r.c.createElement("div",{className:"col-md-12"},r.c.createElement("h1",{className:"marketplace__title"},"MYNFT"))),this.renderContent()),r.c.createElement(l.a,null))}}},"YR/N":function(e,t,a){"use strict";var r=a("pZEK");t.a=class extends r.f{render(){return r.c.createElement("div",{className:"nav-container"},r.c.createElement("div",{className:"toolbar-nav-wrapper",style:{backgroundColor:"rgb(255, 255, 255)"}},r.c.createElement("header",{className:"md-paper md-paper--2 md-toolbar md-toolbar--fixed toolbar-nav",style:{boxShadow:"none",backgroundColor:"rgb(255, 255, 255)"}},r.c.createElement("button",{type:"button",className:"md-btn md-btn--icon md-pointer--hover md-inline-block md-btn--toolbar md-toolbar--action-left"},r.c.createElement("i",{className:"md-icon material-icons md-text--inherit"},"menu")),r.c.createElement("div",{className:"md-cell--right md-toolbar--action-right"},r.c.createElement("div",{className:"desktop-nav-container"},r.c.createElement("div",{className:"desktop-nav"},r.c.createElement(r.a,{className:"desktop-nav-link home-nav-link active",to:"/",style:{textDecoration:"none"}},r.c.createElement("h3",null,"NFTSwap")),r.c.createElement(r.a,{className:"desktop-nav-link",rel:"noreferrer",to:"/nft101"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"NFT101")),r.c.createElement(r.a,{className:"desktop-nav-link",to:"/mynft"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"MYNFT")),r.c.createElement(r.a,{className:"desktop-nav-link",to:"/income"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"INCOME")),r.c.createElement(r.a,{className:"desktop-nav-link active",to:"/publish"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"PUBLISH"))))))),r.c.createElement("a",{className:"mobile-nav-logo active",href:"/"},r.c.createElement("h3",null,"SuperRare")),r.c.createElement("a",{className:"mobile-nav__notifications-link",href:"/chuxuewen/notifications"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block mobile-nav-notifications-btn border"},r.c.createElement("i",{className:"","data-fa-i2svg":""},r.c.createElement("svg",{className:"svg-inline--fa fa-bell fa-w-14","aria-hidden":"true","data-prefix":"fal","data-icon":"bell",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","data-fa-i2svg":""},r.c.createElement("path",{fill:"currentColor",d:"M433.884 366.059C411.634 343.809 384 316.118 384 208c0-79.394-57.831-145.269-133.663-157.83A31.845 31.845 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 6.75 2.095 13.008 5.663 18.17C121.831 62.731 64 128.606 64 208c0 108.118-27.643 135.809-49.893 158.059C-16.042 396.208 5.325 448 48.048 448H160c0 35.29 28.71 64 64 64s64-28.71 64-64h111.943c42.638 0 64.151-51.731 33.941-81.941zM224 480c-17.645 0-32-14.355-32-32h64c0 17.645-14.355 32-32 32zm175.943-64H48.048c-14.223 0-21.331-17.296-11.314-27.314C71.585 353.836 96 314.825 96 208c0-70.741 57.249-128 128-128 70.74 0 128 57.249 128 128 0 106.419 24.206 145.635 59.257 180.686C421.314 398.744 414.11 416 399.943 416z"}))))))}}},kITX:function(e,t,a){(t=a("cFq8")(!1)).push([e.i,"",""]),e.exports=t},nEva:function(e,t,a){"use strict";var r=a("pZEK"),c=a("wedd");t.a=class extends r.f{render(){var{tokenURI:e,token:t,tokenId:a,selling:l,asset:n}=this.props.assets;return r.c.createElement("div",{className:"collectible-card col-sm-6 col-md-4"},r.c.createElement(r.a,{to:`/details?token=${t}&tokenId=${a}`},r.c.createElement("section",{className:"md-media md-media--1-1"},r.c.createElement("div",null,-1==e.indexOf(".mp4")?r.c.createElement("img",{src:e,className:"new-grid-img"}):r.c.createElement("div",null,r.c.createElement("div",{className:"new-grid-img",style:{width:"640px",height:"360px"}},r.c.createElement("video",{src:e,preload:"auto",autoPlay:!0,loop:!0,playsInline:!0,"webkit-playsinline":"","x5-playsinline":"",style:{width:"100%",height:"100%"}})))))),r.c.createElement("div",{className:"collectible-card__info-container"},r.c.createElement("div",{className:"collectible-card__first-section",style:{width:"95%"}},r.c.createElement("a",{className:"collectible-card__name",href:"#"},n.name||String(a))),r.c.createElement("div",{className:"collectible-card__price-item-container"},r.c.createElement("div",{className:"collectible-card__price-item"},r.c.createElement("a",{className:"collectible-card__price-number",href:"#"},r.c.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},r.c.createElement("span",null,c.b(null==l?void 0:l.order.maxSellPrice)),r.c.createElement("span",{className:"eth-symbol",style:{fontSize:"15px"}},"Ξ")," ($",r.c.createElement("span",null,c.c(null==l?void 0:l.order.maxSellPrice)),")")),r.c.createElement("p",{className:"collectible-card__price-text "},"Max price")),r.c.createElement("div",{className:"collectible-card__price-item"},r.c.createElement("a",{className:"collectible-card__price-number",href:"#"},r.c.createElement("span",null,c.b(null==l?void 0:l.order.buyPrice)),r.c.createElement("span",{className:"eth-symbol",style:{fontSize:"15px"}},"Ξ"),"($",r.c.createElement("span",null,c.c(null==l?void 0:l.order.buyPrice)),")"),r.c.createElement("p",{className:"collectible-card__price-text"},"Current offer by",r.c.createElement("a",{className:"collectible-card__price-username",href:"#"},c.a(null==l?void 0:l.order.bigBuyer))))),r.c.createElement("div",{className:"collectible-card__user-section",style:{visibility:"visible"}},r.c.createElement("hr",{className:"collectible-card__user-section-divider"}),r.c.createElement("div",{className:"collectible-card__user-container"},r.c.createElement("div",{className:"collectible-card__user-item"},r.c.createElement("div",{className:"collectible-card__user-title"}," ARTIST "),r.c.createElement("a",{className:"user",href:"#"},r.c.createElement("div",{className:"md-inline-block md-avatar md-avatar--default user__avatar"},r.c.createElement("img",{src:"/test/tmp/Market _ SuperRare_files/QmYvnX9ZMFGf1XxmNi42G3BUXanYKDfu9BvZK9o4QusGva",className:"md-avatar-img"})),r.c.createElement("div",{className:"user__username"}," None "))),r.c.createElement("div",{className:"collectible-card__user-item"},r.c.createElement("div",{className:"collectible-card__user-title"},"OWNER"),r.c.createElement("a",{className:"user",href:"#"},r.c.createElement("div",{className:"md-inline-block md-avatar md-avatar--default user__avatar"},r.c.createElement("img",{src:"/test/tmp/Market _ SuperRare_files/QmYvnX9ZMFGf1XxmNi42G3BUXanYKDfu9BvZK9o4QusGva",className:"md-avatar-img"})),r.c.createElement("div",{className:"user__username"},n.owner)))))))}}},uPBg:function(e,t,a){var r=a("/sWS"),c=a("kITX");"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var l={insert:"head",singleton:!1},n=(r(c,l),c.locals?c.locals:{});e.exports=n},wedd:function(e,t,a){"use strict";function r(e,t){return e&&!function(e){return"0x0000000000000000000000000000000000000000"==e}(e)?e:t||"None"}function c(e){return e?(Number(e)/1e18).toFixed(2):"0.0"}function l(e){return e?(Number(e)/1e18*1800).toFixed(1):"0.0"}a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return l}))}}]);