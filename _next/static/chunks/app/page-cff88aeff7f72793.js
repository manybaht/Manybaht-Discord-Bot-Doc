(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3047:function(e,l,s){Promise.resolve().then(s.bind(s,278))},278:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return h}});var t=s(7437),a=s(2265),n=s(4232),i=s(6136),d=s(1196);i.kL.register(i.uw,i.f$,i.od,i.jn,i.Dx,i.u,i.Gu,i.De);var r=()=>{var e,l,s,n,i,r,o;let[m,x]=(0,a.useState)({labels:[24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],datasets:[{fill:!0,label:"จำนวนตัวเล่น",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],borderColor:"#FF7000",backgroundColor:"#FFA500",tension:.3}]}),[c,u]=(0,a.useState)(!1),[h,p]=(0,a.useState)(null),[b,f]=(0,a.useState)([]),[g,v]=(0,a.useState)(0),[w,j]=(0,a.useState)(!0),[y,N]=(0,a.useState)(Array(25).fill(0)),k=0,P=null,D=Array(30).fill(0);function E(e){fetch("outside"===e?"https://bstats.many.win/recentsongs":"https://sgapi.many.win/bot/recentsongs",{method:"get",cache:"no-store"}).then(e=>e.json()).then(e=>{(null==e?void 0:e.length)>0&&f(e)})}function C(e){fetch("outside"===e?"https://bstats.many.win/playerinfo":"https://sgapi.many.win/bot/playerinfo",{method:"get",cache:"no-store"}).then(e=>e.json()).then(e=>{(null==e?void 0:e.history)&&(x(l=>({labels:[...l.labels],datasets:[{fill:!0,label:"จำนวนตัวเล่น",data:Object.values(null==e?void 0:e.history),borderColor:"#FF7000",backgroundColor:"#FFA500",tension:.3}]})),u(!0))})}function I(e){fetch("outside"===e?"https://bstats.many.win/statsnew":"https://sgapi.many.win/bot/statsnew",{method:"get",cache:"no-store"}).then(e=>e.json()).then(e=>{let l={playingPlayer:0,pausedPlayer:0,notPlaying:0,shard:0,guild:0,member:0,status:"ปกติ",ping:0,warning:[],playerInfo:null,biggestPlayerCount:0,pingInfo:[]};for(let[s,t]of Object.entries(e))if(s.includes("MNB")&&!s.includes("DEBUG")){if(l.playingPlayer+=t.playingPlayers,l.pausedPlayer+=t.pausedPlayers,l.notPlaying+=t.notPlayingPlayers,l.shard+=t.shards.length,"operational"!==t.status&&(l.status="พบความผิดปกติ"),t.statusDescriptions)for(let e=0;e<t.statusDescriptions.length;e++)l.warning.push({node:s,detail:t.statusDescriptions[e]});for(let e=0;e<t.shards.length;e++)l.guild+=t.shards[e].availableGuilds,l.member+=t.shards[e].members,l.ping+=t.shards[e].latency}if(P){var s,t;l.playerInfo=P,l.playerInfo.push(null==l?void 0:l.playingPlayer),(null==l?void 0:null===(s=l.playerInfo)||void 0===s?void 0:s.length)>30&&(null==l||null===(t=l.playerInfo)||void 0===t||t.shift())}else l.playerInfo=Array(30).fill(null==l?void 0:l.playingPlayer);let a=Math.max(...null==l?void 0:l.playerInfo);l.biggestPlayerCount=a,D.push(parseInt((null==l?void 0:l.ping)/(null==l?void 0:l.shard))),D.shift(),P=null==l?void 0:l.playerInfo,N(D),p(l)})}return(0,a.useEffect)(()=>{let e=new Proxy(new URLSearchParams(window.location.search),{get:(e,l)=>e.get(l)}),l=null==e?void 0:e.region;I(l),C(l),E(l),setInterval(()=>{v(++k*("outside"===l?1.7:6.7)),k>=("outside"===l?60:15)?(I(l),C(l),E(l),v(100),j(!1),k=0):2===k&&j(!0)},1e3)},[]),(0,t.jsxs)("div",{className:"px-5 pb-5",children:[(0,t.jsx)("div",{className:"max-w bg-neutral-950 rounded overflow-hidden shadow-lg m-2",children:(0,t.jsx)("div",{className:"bg-orange-600 p-1",style:{width:"".concat(g||"0","%")}})}),(0,t.jsxs)("div",{className:"flex flex-col xl:flex-row w-full gap-3 my-4",children:[(0,t.jsxs)("div",{className:"flex flex-col w-full xl:w-1/2 border-2 border-[#1E1E1E] rounded-lg p-4 "+(h?"":"blur-[1.5px] animate-pulse"),children:[(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("div",{className:"flex flex-col xl:flex-row w-full px-2 items-center",children:[(0,t.jsx)("p",{className:"font-medium text-white sm:text-lg",children:"Players"}),(0,t.jsxs)("div",{className:"flex flex-row xl:ml-auto gap-3",children:[(0,t.jsxs)("p",{className:"font-bold text-[#2DB843] sm:text-sm",children:["● ",(0,t.jsxs)("span",{className:"font-medium text-white",children:["Playing ",null!==(i=null==h?void 0:h.playingPlayer)&&void 0!==i?i:0]})]}),(0,t.jsxs)("p",{className:"font-bold text-[#F6C039] sm:text-sm",children:["● ",(0,t.jsxs)("span",{className:"font-medium text-white",children:["Not Playing ",null!==(r=null==h?void 0:h.notPlaying)&&void 0!==r?r:0]})]})]})]}),(0,t.jsx)("div",{className:"flex flex-row h-14 m-2 gap-1 items-end "+(h?"":"bg-neutral-950"),children:null==h?void 0:null===(e=h.playerInfo)||void 0===e?void 0:e.map((e,l)=>(0,t.jsx)("div",{className:"bg-[#2DB843] h-full w-full rounded-lg",style:{height:"".concat(parseInt(100*e/(null==h?void 0:h.biggestPlayerCount)),"%")}},l))})]}),(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("div",{className:"flex flex-col xl:flex-row w-full px-2 items-center",children:[(0,t.jsx)("p",{className:"font-medium text-white sm:text-lg",children:"Pings"}),(0,t.jsx)("div",{className:"flex flex-row xl:ml-auto gap-3",children:(0,t.jsxs)("p",{className:"font-bold sm:text-sm "+((null==y?void 0:y[29])>150?"text-red-500":"text-lime-500"),children:["● ",(0,t.jsxs)("span",{className:"font-medium text-white",children:[null!==(o=null==y?void 0:y[29])&&void 0!==o?o:0," ms"]})]})})]}),(0,t.jsx)("div",{className:"flex flex-row h-14 m-2 gap-1",children:null==y?void 0:y.map((e,l)=>(0,t.jsx)("div",{className:"h-full w-full rounded-lg "+(e>150?"bg-red-500":h?"bg-lime-500":"bg-neutral-950")},l))})]})]}),(0,t.jsx)("div",{className:"flex flex-grow w-full xl:w-1/2 border-2 border-[#1E1E1E] rounded-lg p-4 "+(c?"":"blur-[1.5px] animate-pulse"),children:(0,t.jsx)(d.x1,{options:{responsive:!0,maintainAspectRatio:!1,animation:!1,plugins:{legend:{position:"top"},title:{display:!0,text:"จำนวนตัวเล่นใน 24 ชั่วโมงที่ผ่านมา"}}},data:m})})]}),(0,t.jsxs)("div",{className:"flex flex-col 2xl:flex-row gap-2 w-full border-2 border-[#1E1E1E] rounded-lg p-4",children:[(0,t.jsx)("div",{className:"max-w bg-neutral-950 rounded overflow-hidden shadow-lg w-full",children:(0,t.jsxs)("div",{className:"px-7 py-4",children:[(0,t.jsx)("div",{className:"font-bold text-white text-xl mb-2",children:"จำนวนเซิร์ฟ"}),(0,t.jsx)("p",{className:"text-gray-400 text-base "+((null==h?void 0:h.status)&&w?"":"blur-[1px] animate-pulse"),children:(null==h?void 0:h.member)&&w?Intl.NumberFormat().format(h.guild):"กำลังดึงข้อมูล"})]})}),(0,t.jsx)("div",{className:"max-w bg-neutral-950 rounded overflow-hidden shadow-lg w-full",children:(0,t.jsxs)("div",{className:"px-7 py-4",children:[(0,t.jsx)("div",{className:"font-bold text-white text-xl mb-2",children:"จำนวน Shards"}),(0,t.jsx)("p",{className:"text-gray-400 text-base "+((null==h?void 0:h.status)&&w?"":"blur-[1px] animate-pulse"),children:(null==h?void 0:h.member)&&w?Intl.NumberFormat().format(h.shard):"กำลังดึงข้อมูล"})]})}),(0,t.jsx)("div",{className:"max-w bg-neutral-950 rounded overflow-hidden shadow-lg w-full",children:(0,t.jsxs)("div",{className:"px-7 py-4",children:[(0,t.jsx)("div",{className:"font-bold text-white text-xl mb-2",children:"จำนวนผู้ใช้"}),(0,t.jsx)("p",{className:"text-gray-400 text-base "+((null==h?void 0:h.status)&&w?"":"blur-[1px] animate-pulse"),children:(null==h?void 0:h.member)&&w?Intl.NumberFormat().format(h.member):"กำลังดึงข้อมูล"})]})}),(0,t.jsx)("div",{className:"max-w bg-neutral-950 rounded overflow-hidden shadow-lg w-full",children:(0,t.jsxs)("div",{className:"px-7 py-4",children:[(0,t.jsx)("div",{className:"font-bold text-white text-xl mb-2",children:"สถานะบอท"}),(0,t.jsx)("p",{className:"text-base "+((null==h?void 0:h.status)&&w?(null==h?void 0:h.status)==="ปกติ"?"text-lime-400":"text-red-500":"text-gray-400 blur-[1px] animate-pulse"),children:(null==h?void 0:h.status)&&w?null==h?void 0:h.status:"กำลังดึงข้อมูล"})]})})]}),(0,t.jsx)("div",{className:(null==h?void 0:null===(l=h.warning)||void 0===l?void 0:l.length)>0?"px-7 py-4":"",children:(0,t.jsx)("div",{className:"flex flex-row gap-2 flex-wrap max-2xl:justify-center "+((null==h?void 0:null===(s=h.warning)||void 0===s?void 0:s.length)>0&&w?"":"blur-[1.5px] animate-pulse"),children:null==h?void 0:null===(n=h.warning)||void 0===n?void 0:n.map((e,l)=>(0,t.jsxs)("div",{className:"text-white p-1 rounded-lg bg-red-800 w-fit text-[10px] sm:text-xs sm:p-2",children:[e.node," ",e.detail]},l))})}),(0,t.jsx)("p",{className:"text-white text-base mt-4 mb-2 text-center "+(b[0]?"":"blur-[1px] animate-pulse"),children:"เพลงที่เล่นล่าสุด"}),(0,t.jsxs)("div",{className:"flex flex-col 2xl:grid 2xl:grid-cols-2",children:[null==b?void 0:b.map((e,l)=>{var s,a,n,i,d;return(0,t.jsxs)("div",{className:"flex flex-row max-w items-center bg-neutral-950 rounded overflow-hidden shadow-lg m-2 "+(e&&w?"":"blur-[1px] animate-pulse"),children:[(0,t.jsx)("div",{className:"h-12 w-12 rounded shrink-0 ml-4 md:h-20 md:w-20 md:ml-2 bg-cover bg-center bg-neutral-900",style:{backgroundImage:"url(".concat(null==e?void 0:null===(s=e.info)||void 0===s?void 0:s.artworkUrl,")")},alt:"recentsong"+l}),(0,t.jsxs)("div",{className:"px-2 sm:px-4 py-4",children:[(0,t.jsx)("div",{className:"line-clamp-1 text-xs text-white font-bold mb-2 sm:text-lg md:text-xl",children:null!==(i=null==e?void 0:null===(a=e.info)||void 0===a?void 0:a.title)&&void 0!==i?i:"ชื่อเพลง"}),(0,t.jsx)("p",{className:"line-clamp-1 text-xs text-gray-400 md:text-base",children:null!==(d=null==e?void 0:null===(n=e.info)||void 0===n?void 0:n.author)&&void 0!==d?d:"ชื่อศิลปิน"})]})]},l)}),(0,t.jsxs)("div",{className:"animate-pulse flex flex-row max-w items-center bg-neutral-950 rounded overflow-hidden shadow-lg m-2 blur-[1px] "+(b[0]?"hidden":""),children:[(0,t.jsx)("img",{className:"h-12 w-12 rounded ml-6 md:h-20 md:w-20 md:ml-2",src:"https://cdn.jsdelivr.net/gh/manybaht/manybaht.github.io@main/storages/images/new_laibaht.webp",alt:"placeHolderSong1"}),(0,t.jsxs)("div",{className:"px-2 sm:px-4 py-4",children:[(0,t.jsx)("div",{className:"line-clamp-1 text-xs text-white font-bold mb-2 sm:text-lg md:text-xl",children:"ชื่อเพลง"}),(0,t.jsx)("p",{className:"line-clamp-1 text-sm text-gray-400 md:text-base",children:"ชื่อศิลปิน"})]})]}),(0,t.jsxs)("div",{className:"animate-pulse flex flex-row max-w items-center bg-neutral-950 rounded overflow-hidden shadow-lg m-2 blur-[1px] "+(b[1]?"hidden":""),children:[(0,t.jsx)("img",{className:"h-12 w-12 rounded ml-6 md:h-20 md:w-20 md:ml-2",src:"https://cdn.jsdelivr.net/gh/manybaht/manybaht.github.io@main/storages/images/new_laibaht.webp",alt:"placeHolderSong2"}),(0,t.jsxs)("div",{className:"px-2 sm:px-4 py-4",children:[(0,t.jsx)("div",{className:"line-clamp-1 text-xs text-white font-bold mb-2 sm:text-lg md:text-xl",children:"ชื่อเพลง"}),(0,t.jsx)("p",{className:"line-clamp-1 text-sm text-gray-400 md:text-base",children:"ชื่อศิลปิน"})]})]})]})]})};let o=(0,n.default)(()=>s.e(84).then(s.bind(s,4084)),{loadableGenerated:{webpack:()=>[4084]},ssr:!1}),m=(0,n.default)(()=>s.e(335).then(s.bind(s,6335)),{loadableGenerated:{webpack:()=>[6335]},ssr:!1}),x=(0,n.default)(()=>s.e(408).then(s.bind(s,408)),{loadableGenerated:{webpack:()=>[408]},ssr:!1}),c=(0,n.default)(()=>s.e(427).then(s.bind(s,5427)),{loadableGenerated:{webpack:()=>[5427]},ssr:!1}),u=(0,n.default)(()=>s.e(56).then(s.bind(s,1056)),{loadableGenerated:{webpack:()=>[1056]},ssr:!1});function h(){let[e,l]=(0,a.useState)("info"),s=e=>l(e);return(0,t.jsxs)("main",{className:"flex min-h-screen items-center justify-center flex-col bg-[#1E1E1E] p-6 md:items-start md:p-12 md:flex-row-reverse",children:[(0,t.jsx)("p",{className:"invisible fixed top-0",children:"บอท, บอทเพลง, บอทเพลงดิส, บอทเพลงดิสคอร์ด, บอทเพลง Discord, Discord, Discord Bot, discord bot, discord music bot, bot music, bot music discord, บอทเปิดเพลงในดิส, บอทเพลง ดิส, บอทเพลง ดิสคอร์ด, บอทเพลง Dis, บอทเปิดเพลงในไทย, บอทเพลงไทย, บอทเพลงดิสไทย"}),(0,t.jsxs)("div",{className:"w-full m-2 rounded bg-[#171717] overflow-hidden md:max-w-sm",children:[(0,t.jsx)("img",{className:"w-full",alt:"manybaht",src:"https://cdn.jsdelivr.net/gh/manybaht/manybaht.github.io@main/storages/images/new_laibaht.webp"}),(0,t.jsxs)("div",{className:"px-6 py-4 text-center",children:[(0,t.jsx)("div",{className:"font-medium text-orange-400 text-2xl mt-2 mb-2",children:"Manybaht (เวอร์ชั่น 3)"}),(0,t.jsx)("div",{className:"font-medium text-white text-xl mt-2",children:"เริ่มต้นใช้งาน /help"})]}),(0,t.jsx)("div",{className:"px-6 pb-3 text-center",children:(0,t.jsx)("a",{href:"https://discord.com/oauth2/authorize?client_id=483104273761304577&permissions=11534344&scope=bot%20applications.commands",target:"_blank",children:(0,t.jsxs)("span",{className:"cursor-pointer inline-block bg-orange-950 rounded-full px-3 py-2 text-sm font-semibold",children:["\uD83D\uDCE9 ",(0,t.jsx)("span",{className:"text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-transparent bg-clip-text animate-gradient",children:"เชิญบอทเข้าดิส"})]})})}),(0,t.jsxs)("div",{className:"px-6 pb-3 text-center",children:[(0,t.jsx)("a",{href:"https://discord.com/invite/Q3B76tWvnJ",target:"_blank",children:(0,t.jsx)("span",{className:"cursor-pointer inline-block bg-neutral-950 rounded-full px-3 py-2 text-sm font-semibold text-white mx-1 mb-2 hover:text-orange-400",children:"\uD83D\uDEE0️ ดิสช่วยเหลือ"})}),(0,t.jsx)("a",{href:"https://discord.com/invite/Q3B76tWvnJ",target:"_blank",children:(0,t.jsx)("span",{className:"cursor-pointer inline-block bg-neutral-950 rounded-full px-3 py-2 text-sm font-semibold text-white mx-1 mb-2 hover:text-orange-400",children:"\uD83D\uDCAC ติดต่อลงโฆษณา"})})]}),(0,t.jsxs)("div",{className:"px-6 pb-4 text-center",children:[(0,t.jsxs)("p",{className:"text-[#767676] text-md mt-2 md:mt-0",children:["บอทเพลงคุณภาพสูง ไม่มีคำสั่งพรีเมี่ยม",(0,t.jsx)("br",{}),"ไม่มีโหวตปลดล็อกคำสั่ง แค่เอาเข้าก็เล่นได้เลย"]}),(0,t.jsxs)("p",{className:"text-[#767676] text-md mt-2",children:["รองรับการเล่น ",(0,t.jsx)("span",{className:"text-red-600 font-medium",children:"Youtube "}),"และ ",(0,t.jsx)("span",{className:"text-green-600 font-medium",children:"Spotify"})]})]})]}),(0,t.jsxs)("div",{className:"w-full m-2 rounded bg-[#171717] overflow-hidden",children:[(0,t.jsxs)("div",{className:"px-6 pt-6 text-center",children:[(0,t.jsx)("span",{onClick:()=>s("info"),className:"cursor-pointer inline-block bg-neutral-950 rounded-md px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:text-orange-400",children:"สถานะบอท"}),(0,t.jsx)("span",{onClick:()=>s("invite"),className:"cursor-pointer inline-block bg-neutral-950 rounded-md px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:text-orange-400",children:"วิธีเอาบอทเข้าดิส"}),(0,t.jsx)("span",{onClick:()=>s("play"),className:"cursor-pointer inline-block bg-neutral-950 rounded-md px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:text-orange-400",children:"วิธีเล่นเพลง"}),(0,t.jsx)("span",{onClick:()=>s("fix"),className:"cursor-pointer inline-block bg-neutral-950 rounded-md px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:text-orange-400",children:"คำถามพบบ่อย/แก้ปัญหาเบื้องต้น"}),(0,t.jsx)("span",{onClick:()=>s("privacy"),className:"cursor-pointer inline-block bg-neutral-950 rounded-md px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:text-orange-400",children:"นโยบายข้อมูลส่วนตัว"}),(0,t.jsx)("span",{onClick:()=>s("term"),className:"cursor-pointer inline-block bg-neutral-950 rounded-md px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:text-orange-400",children:"ข้อตกลงการใช้งาน"})]}),"info"===e&&(0,t.jsx)(r,{}),"invite"===e&&(0,t.jsx)(o,{}),"play"===e&&(0,t.jsx)(m,{}),"fix"===e&&(0,t.jsx)(x,{}),"privacy"===e&&(0,t.jsx)(c,{}),"term"===e&&(0,t.jsx)(u,{})]})]})}}},function(e){e.O(0,[674,319,971,69,744],function(){return e(e.s=3047)}),_N_E=e.O()}]);