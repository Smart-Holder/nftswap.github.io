(window.webpackJsonp=window.webpackJsonp||[]).push([["nft101-cli_6"],{GCib:function(e,t,a){"use strict";var r=a("pZEK");t.a=class extends r.f{_render(){return r.c.createElement("div",{className:"footer-container"},r.c.createElement("div",{className:"md-grid footer"},r.c.createElement("div",{className:"md-cell md-cell--12"},r.c.createElement("div",{className:"subscribe-container"},r.c.createElement("div",{className:"subscribe-center-wrapper"},r.c.createElement("h3",null,"Subscribe to our newsletter"),r.c.createElement("div",{className:"form-container"},r.c.createElement("form",{action:"https://blockchainjobs.us15.list-manage.com/subscribe/post?u=5dfce9177b2176b567e783c36&id=6bf850e75d",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate contact_form",target:"_blank"},r.c.createElement("input",{className:"subscribe-input",type:"email",name:"EMAIL",id:"email",placeholder:"Email address","aria-label":"Enter your e-mail address","aria-describedby":"email-addon",required:!0}),r.c.createElement("span",{className:"input-group-text signup-addon",id:"email-addon"},r.c.createElement("button",{className:"submit-email",style:{display:"none"}}))),r.c.createElement("button",null,"Subscribe"))))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("a",{className:"footer-sr-logo",href:"https://superrare.co/"},"SuperRare"),r.c.createElement("p",{className:"footer-copyright"},"© 2020 SuperRare"))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("p",{className:"footer-column-title"},"Community"),r.c.createElement("a",{className:"footer-link",href:"https://editorial.superrare.co/",target:"_blank",rel:"noopener noreferrer"},"Editorial"),r.c.createElement("a",{className:"footer-link",href:"https://discord.gg/pGeAWrP",target:"_blank",rel:"noopener noreferrer"},"Discord"),r.c.createElement("a",{className:"footer-link",href:"https://www.instagram.com/superrare.co/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),r.c.createElement("a",{className:"footer-link",href:"https://twitter.com/SuperRare",target:"_blank",rel:"noopener noreferrer"},"Twitter"),r.c.createElement("a",{className:"footer-link",href:"https://medium.com/@SuperRare_co",target:"_blank",rel:"noopener noreferrer"},"Blog"),r.c.createElement("a",{className:"footer-link",href:"https://help.superrare.co/",target:"_blank",rel:"noopener noreferrer"},"Help Center"))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("p",{className:"footer-column-title"},"For Artists"),r.c.createElement("a",{className:"footer-link",href:"https://docs.google.com/forms/d/e/1FAIpQLScTZhB9On31j-uoFzMD3hg0gGNf3hgjVyBz1xwCHsOBSydvPw/viewform",target:"_blank",rel:"noopener noreferrer"},"Submit artist profile"))),r.c.createElement("div",{className:"md-cell md-cell--3 md-cell--12-tablet"},r.c.createElement("div",{className:"footer-link-container"},r.c.createElement("p",{className:"footer-column-title"},"Legal"),r.c.createElement("a",{className:"footer-link",href:"https://www.notion.so/SuperRare-Community-Guidelines-b9c4fc521f4344a39cac7bd13d44a56f",target:"_blank",rel:"noopener noreferrer"},"Community Guidelines"),r.c.createElement("a",{className:"footer-link",href:"https://www.notion.so/SuperRare-Terms-of-Service-075a82773af34aab99dde323f5aa044e",target:"_blank",rel:"noopener noreferrer"},"Terms of Service"),r.c.createElement("a",{className:"footer-link",href:"https://www.notion.so/SuperRare-Privacy-Policy-30db13e22c3648099a785b99afc7c584",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),r.c.createElement("a",{className:"footer-link",href:"mailto:ip@superrare.com"},"Report content")))))}render(){return null}}},Legu:function(e,t,a){"use strict";a.r(t);var r=a("pZEK"),n=a("YR/N"),l=a("GCib"),c=(a("y8fx"),a("rDn7")),m=a("AFK3"),s=a("xkwK"),o=a("Qw5D"),i=a.n(o),d=a("mwj5");t.default=class extends r.b{constructor(){super(...arguments),this.state={new_TokenId:""}}async _Transfer(e,t,a){var r=Object(s.b)(["uint16","uint16","string"],[0,0,a]),n=i.a.from(r.slice(2),"hex"),l=s.g.addressNoJump();try{await c.a.show(),await s.f.safeTransferFrom(e,l,s.c.contractAddress,BigInt(t),n),m.b.alert("NFT Swap OK",()=>location.href="/mynft")}finally{c.a.close()}}async _NFTSwap(){var e=this.refs.erc721.value,t=this.refs.erc721_id.value,a=this.refs.erc721_name.value;await this._Transfer(e,t,a),await new Promise(e=>{m.b.confirm({text:r.c.createElement("div",null,r.c.createElement("div",null,"转移完成，现在就去出售?"))},t=>e(t))})&&this.history.push(`/details?token=${e}&tokenId=${t}`)}async _NEWNFT(){var e=s.f.contractAddress,t="0x"+Object(d.rng)(32).toString("hex"),a=this.refs.nft_name.value,n=this.refs.nft_uri.value,l=Object(s.b)(["uint16","uint16","string"],[0,0,a]),o=i.a.from(l.slice(2),"hex");try{await c.a.show(),this.setState({new_TokenId:t}),await s.f.safeMintURI(e,s.c.contractAddress,BigInt(t),n,o)}finally{c.a.close()}await new Promise(e=>{m.b.confirm({text:r.c.createElement("div",null,r.c.createElement("div",null,"创建成功，现在就去出售?"))},t=>e(t))})&&this.history.push(`/details?token=${e}&tokenId=${t}`)}_Sell(){this.history.push("/mynft")}render(){return r.c.createElement("div",{className:"marketplace-page app-page sell"},r.c.createElement(n.a,null),r.c.createElement("div",{className:"container"},r.c.createElement("div",{className:"row"},r.c.createElement("div",{className:"col-md-12"},r.c.createElement("h1",{className:"marketplace__title"},"Publish"))),r.c.createElement("div",{className:"panel",style:{border:"none"}},r.c.createElement("div",{className:"txt"},r.c.createElement("span",null,"创建新的NFT资产")),"ERC721协约：",s.c.contractAddress,r.c.createElement("br",null),r.c.createElement("br",null),"ERC721资产ID：",this.state.new_TokenId,r.c.createElement("br",null),r.c.createElement("br",null),"ERC721资产名称：",r.c.createElement("input",{ref:"nft_name",style:{width:"600px"}}),r.c.createElement("br",null),r.c.createElement("br",null),"ERC721资产URI：",r.c.createElement("input",{ref:"nft_uri",style:{width:"600px"}}),r.c.createElement("br",null),r.c.createElement("br",null),r.c.createElement("div",null,r.c.createElement("button",{onClick:()=>this._NEWNFT()},"创建"))),r.c.createElement("div",{className:"panel"},r.c.createElement("div",{className:"txt"},r.c.createElement("h3",null,"或"),r.c.createElement("span",null,"现有资产转移到NFTSwap")),"ERC721协约：",r.c.createElement("input",{ref:"erc721",style:{width:"600px"}}),r.c.createElement("br",null),r.c.createElement("br",null),"ERC721资产ID：",r.c.createElement("input",{ref:"erc721_id",style:{width:"600px"}}),r.c.createElement("br",null),r.c.createElement("br",null),"ERC721资产名称：",r.c.createElement("input",{ref:"erc721_name",style:{width:"600px"}}),r.c.createElement("br",null),r.c.createElement("br",null),r.c.createElement("div",null,r.c.createElement("button",{onClick:()=>this._NFTSwap()},"转移"))),r.c.createElement("div",{className:"panel"},r.c.createElement("div",{className:"txt"},r.c.createElement("h3",null,"或"),r.c.createElement("span",null,"将ERC721资产转移到 ",s.c.contractAddress," 协约 ")),r.c.createElement("button",{onClick:()=>this._Sell()},"转移完成去出售"))),r.c.createElement(l.a,null))}}},"YR/N":function(e,t,a){"use strict";var r=a("pZEK");t.a=class extends r.f{render(){return r.c.createElement("div",{className:"nav-container"},r.c.createElement("div",{className:"toolbar-nav-wrapper",style:{backgroundColor:"rgb(255, 255, 255)"}},r.c.createElement("header",{className:"md-paper md-paper--2 md-toolbar md-toolbar--fixed toolbar-nav",style:{boxShadow:"none",backgroundColor:"rgb(255, 255, 255)"}},r.c.createElement("button",{type:"button",className:"md-btn md-btn--icon md-pointer--hover md-inline-block md-btn--toolbar md-toolbar--action-left"},r.c.createElement("i",{className:"md-icon material-icons md-text--inherit"},"menu")),r.c.createElement("div",{className:"md-cell--right md-toolbar--action-right"},r.c.createElement("div",{className:"desktop-nav-container"},r.c.createElement("div",{className:"desktop-nav"},r.c.createElement(r.a,{className:"desktop-nav-link home-nav-link active",to:"/",style:{textDecoration:"none"}},r.c.createElement("h3",null,"NFTSwap")),r.c.createElement(r.a,{className:"desktop-nav-link",rel:"noreferrer",to:"/nft101"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"NFT101")),r.c.createElement(r.a,{className:"desktop-nav-link",to:"/mynft"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"MYNFT")),r.c.createElement(r.a,{className:"desktop-nav-link",to:"/income"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"INCOME")),r.c.createElement(r.a,{className:"desktop-nav-link active",to:"/publish"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block"},"PUBLISH"))))))),r.c.createElement("a",{className:"mobile-nav-logo active",href:"/"},r.c.createElement("h3",null,"SuperRare")),r.c.createElement("a",{className:"mobile-nav__notifications-link",href:"/chuxuewen/notifications"},r.c.createElement("button",{type:"button",className:"md-btn md-btn--flat md-btn--text md-pointer--hover md-text--theme-primary md-ink--primary md-inline-block mobile-nav-notifications-btn border"},r.c.createElement("i",{className:"","data-fa-i2svg":""},r.c.createElement("svg",{className:"svg-inline--fa fa-bell fa-w-14","aria-hidden":"true","data-prefix":"fal","data-icon":"bell",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","data-fa-i2svg":""},r.c.createElement("path",{fill:"currentColor",d:"M433.884 366.059C411.634 343.809 384 316.118 384 208c0-79.394-57.831-145.269-133.663-157.83A31.845 31.845 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 6.75 2.095 13.008 5.663 18.17C121.831 62.731 64 128.606 64 208c0 108.118-27.643 135.809-49.893 158.059C-16.042 396.208 5.325 448 48.048 448H160c0 35.29 28.71 64 64 64s64-28.71 64-64h111.943c42.638 0 64.151-51.731 33.941-81.941zM224 480c-17.645 0-32-14.355-32-32h64c0 17.645-14.355 32-32 32zm175.943-64H48.048c-14.223 0-21.331-17.296-11.314-27.314C71.585 353.836 96 314.825 96 208c0-70.741 57.249-128 128-128 70.74 0 128 57.249 128 128 0 106.419 24.206 145.635 59.257 180.686C421.314 398.744 414.11 416 399.943 416z"}))))))}}},p9Ud:function(e,t,a){(t=a("cFq8")(!1)).push([e.i,".sell .panel{border-top:solid 1px #aaa;padding-bottom:10px}.sell .panel .txt{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:10px;padding-left:0;font-weight:bold}.sell .panel .txt h3{color:#f00;margin:0}\n",""]),e.exports=t},y8fx:function(e,t,a){var r=a("/sWS"),n=a("p9Ud");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1},c=(r(n,l),n.locals?n.locals:{});e.exports=c}}]);