(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{419:function(t,e,n){"use strict";n.r(e);n(257),n(6),n(78),n(192);var r={head:function(){return{title:"สถานะบอท"}},data:function(){return{guildcount:null,pingaver:null,shardcount:null,rs:null,ht:null,ls:null,sec1:!1,sec2:!1,sec3:!1}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;fetch("https://ht.many.win/status",{method:"get",cache:"no-store"}).then((function(t){return t.json()})).then((function(e){t.ht=e.data,t.sec1=!0})),fetch("https://bstats.many.win/lstats",{method:"get",cache:"no-store"}).then((function(t){return t.json()})).then((function(e){t.ls=e,t.sec2=!0})),fetch("https://bstats.many.win/stats",{method:"get",cache:"no-store"}).then((function(t){return t.json()})).then((function(e){var n=Object.values(e);t.guildcount=n.reduce((function(t,e){return t+e.guildcount}),0),t.pingaver=Math.round(n.reduce((function(t,e){return t+e.ping}),0)/n.length),t.shardcount=n.length,t.rs=e,t.sec3=!0}))}))},c=r,v=n(86),d=n(124),_=n.n(d),l=n(410),o=n(387),m=n(418),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("เครื่องเซิร์ฟบอท")]),t._v(" "),e("div",[t._v(t._s(t.ht.UptimeMonitorName))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("CPU %")]),t._v(" "),e("div",[t._v(t._s(t.ht.Stats[0].CPU))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("IO Wait %")]),t._v(" "),e("div",[t._v(t._s(t.ht.Stats[0].IOWait))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Ram %")]),t._v(" "),e("div",[t._v(t._s(t.ht.Stats[0].RAM))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Network In (Mbps)")]),t._v(" "),e("div",[t._v(t._s(Math.round(t.ht.Stats[0].NetIn/125e3)))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Network Out (Mbps)")]),t._v(" "),e("div",[t._v(t._s(Math.round(t.ht.Stats[0].NetOut/125e3)))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec3?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("จำนวนเซิร์ฟทั้งหมด")]),t._v(" "),e("div",[t._v(t._s(t.guildcount))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec3?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("ปิงเฉลี่ยทั้งหมด")]),t._v(" "),e("div",[t._v(t._s(t.pingaver))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec3?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("จำนวน Shard(s) ทั้งหมด")]),t._v(" "),e("div",[t._v(t._s(t.shardcount))])]):t._e()],1)],1),t._v(" "),t.sec2?e("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.ls,(function(n,i){return e("v-card",{key:i,staticClass:"mx-2 mt-4 mb-4",staticStyle:{"min-width":"180px"}},[e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Lavalink : "+t._s(i))]),t._v(" "),e("div",[t._v("จำนวนตัวเล่น : "+t._s(n.stats.players))]),t._v(" "),e("div",[t._v("ตัวเล่นที่ใช้งาน : "+t._s(n.stats.playingPlayers))]),t._v(" "),e("div",[t._v("แรม : "+t._s((n.stats.memory.used/1e6).toFixed(0))+"/"+t._s((n.stats.memory.allocated/1e6).toFixed(0))+" MB")]),t._v(" "),e("div",[t._v("CPU : "+t._s((100*n.stats.cpu.lavalinkLoad).toFixed(3))+"/100 %")])]),t._v(" "),e("v-card-actions",[n.online?e("v-card-text",{staticClass:"green--text"},[t._v("\n          ออนไลน์\n        ")]):e("v-card-text",{staticClass:"red--text"},[t._v(" ออฟไลน์ ")])],1)],1)})),1):t._e(),t._v(" "),t.sec3?e("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.rs,(function(n,i){return e("v-card",{key:i,staticClass:"mx-2 mt-4 mb-4",staticStyle:{"min-width":"130px"}},[e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Shard(s) : "+t._s(i))]),t._v(" "),e("div",[t._v("เซิร์ฟ : "+t._s(n.guildcount))]),t._v(" "),e("div",[t._v("ปิง : "+t._s(n.ping))])]),t._v(" "),e("v-card-actions",[n.online?e("v-card-text",{staticClass:"green--text"},[t._v("\n          ออนไลน์\n        ")]):e("v-card-text",{staticClass:"red--text"},[t._v(" ออฟไลน์ ")])],1)],1)})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:l.a,VCardActions:o.a,VCardText:o.b,VRow:m.a})}}]);