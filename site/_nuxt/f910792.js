(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{420:function(t,e,v){"use strict";v.r(e);var n=v(18),r=(v(6),v(78),v(258),v(50),v(65),{head:function(){return{title:"สถานะบอท"}},data:function(){return{ht:null,sec1:!1,guildcount:0,shardcount:0,membercount:0,sec2:!1,objinfo:{},objshard:[],objcount:0}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;fetch("https://ht.many.win/status",{method:"get",cache:"no-store"}).then((function(t){return t.json()})).then((function(e){t.ht=e.data,t.sec1=!0})),fetch("https://bstats.many.win/statsnew",{method:"get",cache:"no-store"}).then((function(t){return t.json()})).then((function(e){for(var v=0,r=Object.entries(e);v<r.length;v++){var c=Object(n.a)(r[v],2),d=c[0],l=c[1];if(d.includes("MNB")){t.objcount++,t.objinfo["MNB"+t.objcount]=l,t.shardcount=t.shardcount+l.shards.length;for(var i=0;i<l.shards.length;i++)t.guildcount=t.guildcount+l.shards[i].availableGuilds,t.membercount=t.membercount+l.shards[i].members,t.objshard.push(l.shards[i])}}t.sec2=!0}))}))}),c=r,d=v(86),l=v(124),_=v.n(l),o=v(410),m=v(387),x=v(418),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("เครื่องเซิร์ฟบอท")]),t._v(" "),e("div",[t._v(t._s(t.ht.UptimeMonitorName))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("CPU %")]),t._v(" "),e("div",[t._v(t._s(t.ht.Stats[0].CPU))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("IO Wait %")]),t._v(" "),e("div",[t._v(t._s(t.ht.Stats[0].IOWait))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Ram %")]),t._v(" "),e("div",[t._v(t._s(t.ht.Stats[0].RAM))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Network In (Mbps)")]),t._v(" "),e("div",[t._v(t._s(Math.round(t.ht.Stats[0].NetIn/125e3)))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec1?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Network Out (Mbps)")]),t._v(" "),e("div",[t._v(t._s(Math.round(t.ht.Stats[0].NetOut/125e3)))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec2?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("จำนวนเซิร์ฟทั้งหมด")]),t._v(" "),e("div",[t._v(t._s(t.guildcount))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec2?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("จำนวน Shard(s) ทั้งหมด")]),t._v(" "),e("div",[t._v(t._s(t.shardcount))])]):t._e()],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-4 mb-4"},[t.sec2?e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("จำนวน Member(s) ทั้งหมด")]),t._v(" "),e("div",[t._v(t._s(t.membercount))])]):t._e()],1)],1),t._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.objinfo,(function(v,i){return e("v-card",{key:i,staticClass:"mx-2 mt-4 mb-4",staticStyle:{"min-width":"130px"}},[e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("Cluster : "+t._s(i))]),t._v(" "),v.totalPlayers===v.playingPlayers+v.pausedPlayers+v.notPlayingPlayers+v.notConnectedPlayers?e("div",{staticClass:"green--text"},[t._v("ตัวเล่น : "+t._s(v.totalPlayers))]):e("div",{staticClass:"red--text"},[t._v("ตัวเล่น : "+t._s(v.totalPlayers))]),t._v(" "),e("div",[t._v("ตัวเล่นใช้งาน : "+t._s(v.playingPlayers))]),t._v(" "),e("div",[t._v("ตัวเล่นที่หยุด : "+t._s(v.pausedPlayers))]),t._v(" "),e("div",[t._v("ตัวเล่นที่ไม่ได้ทำงาน : "+t._s(v.notPlayingPlayers))]),t._v(" "),e("div",[t._v("ตัวเล่นที่ไม่ได้เชื่อมต่อ : "+t._s(v.notConnectedPlayers))]),t._v(" "),v.redisConnection?e("div",{staticClass:"green--text"},[t._v("REDIS")]):e("div",{staticClass:"red--text"},[t._v("REDIS")]),t._v(" "),t._l(v.lavalinkNodeConnections,(function(v,n){return e("div",{key:n},[e("div",v?{staticClass:"green--text"}:{staticClass:"red--text"},[t._v(t._s(n))])])}))],2),t._v(" "),e("v-card-actions",["operational"===v.status?e("v-card-text",{staticClass:"green--text"},[t._v("\n          ทำงานปกติ\n        ")]):"degraded"===v.status?e("v-card-text",{staticClass:"yellow--text"},[t._v("\n          ทำงานได้ไม่เต็มประสิทธิภาพ\n        ")]):e("v-card-text",{staticClass:"red--text"},[t._v(" ผิดปกติ ")]),t._v(" "),v.statusDescriptions?e("v-card-text",[t._v("\n          "+t._s(v.statusDescriptions)+"\n        ")]):t._e()],1)],1)})),1),t._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.objshard,(function(v,i){return e("v-card",{key:i,staticClass:"mx-2 mt-4 mb-4",staticStyle:{"min-width":"130px"}},[e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("ID : "+t._s(v.id))]),t._v(" "),v.availableGuilds<950?e("div",[t._v("เซิร์ฟ : "+t._s(v.availableGuilds))]):v.availableGuilds<1e3?e("div",{staticClass:"yellow--text"},[t._v("เซิร์ฟ : "+t._s(v.availableGuilds))]):e("div",{staticClass:"red--text"},[t._v("เซิร์ฟ : "+t._s(v.availableGuilds))]),t._v(" "),v.inVoiceChannels>0?e("div",{staticClass:"orange--text"},[t._v("หลายบาทในห้องเสียง : "+t._s(v.inVoiceChannels))]):e("div",[t._v("หลายบาทในห้องเสียง : "+t._s(v.inVoiceChannels))]),t._v(" "),v.latency<100?e("div",{staticClass:"green--text"},[t._v("ปิง : "+t._s(v.latency)+" ms")]):v.latency<200?e("div",{staticClass:"yellow--text"},[t._v("ปิง : "+t._s(v.latency)+" ms")]):e("div",{staticClass:"red--text"},[t._v("ปิง : "+t._s(v.latency)+" ms")]),t._v(" "),e("div",[t._v("ผู้ใช้ทั้งหมด : "+t._s(v.members))]),t._v(" "),e("div",[t._v("ดิสใช้งานไม่ได้ : "+t._s(v.unavailableGuilds))])]),t._v(" "),e("v-card-actions",[v.online?e("v-card-text",{staticClass:"green--text"},[t._v("\n          ออนไลน์\n        ")]):e("v-card-text",{staticClass:"red--text"},[t._v(" ออฟไลน์ ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:o.a,VCardActions:m.a,VCardText:m.b,VRow:x.a})}}]);