"use strict";(self["webpackChunkimpact_front"]=self["webpackChunkimpact_front"]||[]).push([[688],{2688:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Q});var l=t(3673),n=t(2323);function s(e,a,t,s,i,c){const o=(0,l.up)("q-card-section"),r=(0,l.up)("q-btn"),u=(0,l.up)("q-img"),d=(0,l.up)("q-item-label"),m=(0,l.up)("q-card"),p=(0,l.up)("q-item"),g=(0,l.up)("Article");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(m,{class:"justify-evenly q-ma-lg bg-none",flat:"",square:"",style:{padding:"0 200px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"text-h4",style:{"text-transform":"uppercase",color:"white","font-weight":"900","text-align":"center"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.lang("wiki_modpack")),1)])),_:1}),(0,l.Wm)(o,{style:{"text-transform":"uppercase",color:"white","text-align":"center"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.lang("wiki_credits")),1)])),_:1}),(0,l.Wm)(o,{class:"text-h3 text-bold",style:{"text-transform":"uppercase",color:"white","text-align":"center"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.lang("wiki_mechanics")),1)])),_:1}),(0,l.Wm)(o,{class:"q-pa-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{to:"/",style:{"border-radius":"0"},size:"lg",flat:"",icon:"keyboard_backspace","text-color":"white"})])),_:1}),(0,l.Wm)(o,{class:"items-center q-pa-none",style:{"text-align":"center"}},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{flat:"",square:"",style:{"padding-top":"20px","padding-bottom":"20px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"row justify-center",flat:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.mechanics,(a=>((0,l.wg)(),(0,l.j4)(p,{key:a["id"],clickable:"",onClick:t=>e.go(a["slug"])},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"q-pa-none q-ma-none bg-none ",flat:"",square:"",style:{width:"100%",height:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{src:a["img"],height:"205px",width:"205px"},null,8,["src"]),(0,l.Wm)(d,{lines:"1",style:{"text-transform":"uppercase"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.lang("wiki_mechanics_"+a["slug"])),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onGoBack:e.goBack},null,8,["onGoBack"])])),_:1})],64)}const i=JSON.parse('[{"id":0,"name":"ore generation","slug":"oregeneration","article":"wiki/mechanics/oregeneration.md","img":"https://cdn.discordapp.com/attachments/916393114166525974/928074818505560064/111.png"},{"id":1,"name":"parallelism","slug":"parallelism","article":"wiki/mechanics/parallelism.md","img":"https://cdn.discordapp.com/attachments/916393114166525974/939784614275330088/PARALLELISM.png"}]');function c(e,a,t,n,s,i){const c=(0,l.up)("q-icon"),o=(0,l.up)("q-btn"),r=(0,l.up)("q-card-section"),u=(0,l.up)("q-card"),d=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(d,{modelValue:n.dialog,"onUpdate:modelValue":a[1]||(a[1]=e=>n.dialog=e),"full-height":"","full-width":"",onHide:a[2]||(a[2]=a=>e.$emit("goBack"))},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"q-pa-lg",flat:"",square:""},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{flat:"",id:"follow",onClick:a[0]||(a[0]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{color:"grey",size:"xl",name:"close"})])),_:1}),(0,l.Wm)(r,{class:"q-pa-none",innerHTML:n.compiledMd},null,8,["innerHTML"])])),_:1})])),_:1},8,["modelValue"])}t(71);var o=t(1959),r=t(9582),u=t(8483),d=t(5948);const m={setup(){const e=(0,r.yj)(),a=(0,o.iH)(!1),t=(0,o.iH)(null),n=(0,o.iH)(""),s=(0,o.iH)(""),c=async()=>{if(m.has(t.value.article))n.value=m.get(t.value.article);else{const e=u.Qc(await(await fetch(s.value+"/"+t.value.article)).text());m.set(t.value.article,e),n.value=e}},m=new Map,{locale:p}=(0,d.QT)({useScope:"global"}),g=e=>{p.value=e};return(0,l.bv)((()=>{p.value=null===localStorage.getItem("lang")?"en-US":localStorage.getItem("lang"),s.value="ru-RU"!==p.value?"en":"ru",e.hash&&(t.value=i.find((a=>a.slug==e.hash.substring(1))),c(),a.value=!0)})),(0,l.YP)(e,(e=>{e.hash&&(t.value=i.find((a=>a.slug==e.hash.substring(1))),c(),a.value=!0)})),(0,l.YP)(p,(e=>{localStorage.setItem("lang",e)})),{dialog:a,target:t,compiledMd:n,locale:p,lang:g}}};var p=t(3045),g=t(151),h=t(4607),w=t(4554),f=t(5589),k=t(7518),_=t.n(k);m.render=c;const v=m;_()(m,"components",{QDialog:p.Z,QCard:g.Z,QBtn:h.Z,QIcon:w.Z,QCardSection:f.Z});var q=t(4132);const b=(0,l.aZ)({name:"Mechanics",components:{Article:v},setup(){const{t:e}=(0,d.QT)();let a=(0,o.iH)("impact"),t=(0,o.iH)("all");q.Z;const l=(0,r.tv)(),n=e=>{l.push({hash:`#${e}`})},s=()=>{l.push({hash:""})};return{splitterModel:(0,o.iH)(15),mechanics:i,lang:e,tab:a,tabsTiers:t,go:n,goBack:s}}});var x=t(3414),W=t(4027),y=t(2350);b.render=s,b.__scopeId="data-v-57e2dd0a";const Q=b;_()(b,"components",{QCard:g.Z,QCardSection:f.Z,QBtn:h.Z,QItem:x.Z,QImg:W.Z,QItemLabel:y.Z})}}]);