(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"882e":function(e,t,i){},d558:function(e,t,i){"use strict";var s=i("882e"),a=i.n(s);a.a},ff5d:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("led-layout-edit")],1)},a=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-pa-md"},[i("div",{ref:"frame",staticClass:"layout-editor-qmenu",style:{position:"relative",height:this.frameHeight+"px"}},[i("q-resize-observer",{attrs:{debounce:200},on:{resize:e.onFrameResize}}),i("q-menu",{attrs:{"touch-position":"","context-menu":"",target:".layout-editor-qmenu"}},[i("q-list",{attrs:{dense:""}},[i("q-item",{attrs:{disable:!e.canUndo,clickable:""},on:{click:function(t){return t.stopPropagation(),e.undo()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{right:"",name:"undo"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$q.lang.editor.undo))])],1)],1),i("q-item",{attrs:{disable:!e.canRedo,clickable:""},on:{click:function(t){return t.stopPropagation(),e.redo()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{right:"",name:"redo"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$q.lang.editor.redo))])],1)],1),i("q-separator"),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return t.stopPropagation(),e.createNewLed()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{right:"",name:"add"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.add")))])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup",value:-1!=e.lastActive,expression:"lastActive != -1"}],attrs:{clickable:"",disable:-1==e.lastActive},on:{click:function(t){return t.stopPropagation(),e.removeLed()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{right:"",name:"remove"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$tc("conf.layout.remove",1)))])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup",value:e.frameLeds.length>0,expression:"frameLeds.length > 0"}],attrs:{clickable:"",disable:0==e.frameLeds.length},on:{click:function(t){return t.stopPropagation(),e.removeLeds()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{right:"",name:"remove"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$tc("conf.layout.remove",2)))])],1)],1),i("q-separator"),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup",value:-1!=e.lastActive,expression:"lastActive != -1"}],attrs:{clickable:"",disable:-1==e.lastActive},on:{click:function(t){return t.stopPropagation(),e.handleLedName(t)}}},[i("q-item-section",{attrs:{avatar:""}}),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.ledName")))])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup",value:e.frameLeds.length>0,expression:"frameLeds.length > 0"}],attrs:{clickable:"",disable:0==e.frameLeds.length},on:{click:function(t){e.nameLedsDialog=!e.nameLedsDialog}}},[i("q-item-section",{attrs:{avatar:""}}),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.ledName"))+" ...")])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup",value:e.frameLeds.length>0,expression:"frameLeds.length > 0"}],attrs:{clickable:"",disable:0==e.frameLeds.length},on:{click:function(t){e.moveVisible=!e.moveVisible}}},[i("q-item-section",{attrs:{avatar:""}}),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.ledOrder"))+" ...")])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return t.stopPropagation(),e.handleVisibleLeds(t)}}},[i("q-item-section",{attrs:{avatar:""}}),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.ledVisible"))+" ...")])],1)],1),i("q-separator"),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{tag:"label",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-radio",{staticClass:"q-pl-sm",attrs:{dense:"",val:"x"},model:{value:e.axisOption,callback:function(t){e.axisOption=t},expression:"axisOption"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.movexaxis")))])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{tag:"label",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-radio",{staticClass:"q-pl-sm",attrs:{dense:"",val:"y"},model:{value:e.axisOption,callback:function(t){e.axisOption=t},expression:"axisOption"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.moveyaxis")))])],1)],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{tag:"label",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-radio",{staticClass:"q-pl-sm",attrs:{dense:"",val:"both"},model:{value:e.axisOption,callback:function(t){e.axisOption=t},expression:"axisOption"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$t("conf.layout.movexyaxis")))])],1)],1),i("q-separator"),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return t.stopPropagation(),e.resetLayout()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{right:"",name:"fas fa-trash-alt"}})],1),i("q-item-section",[i("q-item-label",[e._v(e._s(e.$q.lang.label.reset))])],1)],1)],1)],1),e._l(e.frameLeds,(function(t,s){return i("vue-draggable-resizable",{key:t.id,staticClass:"flex flex-center absolute",class:{"lle-visibility":!e.isVisible(s),"cursor-pointer":e.isVisible(s),"lle-default":e.currentActive!=s},attrs:{"class-name-active":"lle-active","class-name-handle":"editor-handle",x:t.x,y:t.y,w:t.width,h:t.height,axis:e.axisOption,active:e.isVisible(s)&&e.currentActive==s,resizable:e.isVisible(s),draggable:e.isVisible(s),parent:!0},on:{dragstop:function(t,i){return e.onDragStop(s,t,i)},resizestop:function(t,i,a,r){return e.onResizeStop(s,t,i,a,r)},activated:function(t){return e.onActivated(s)},deactivated:function(t){return e.onDeactivated(s)}}},[i("div",[e._v(e._s(s+1)+"\n      ")]),t.name?[i("q-tooltip",[e._v(e._s(t.name))])]:e._e()],2)}))],2),i("q-dialog",{model:{value:e.moveVisible,callback:function(t){e.moveVisible=t},expression:"moveVisible"}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("conf.layout.ledOrder")))])]),i("q-card-section",{staticClass:"q-dialog__message"},[e._v("\n        "+e._s(e.$t("conf.layout.ledOrderMsg"))+"\n      ")]),i("q-card-section",[i("draggable",{staticClass:"row",attrs:{group:"ledlayoutorder","ghost-class":"favourite-ghost",animation:150},model:{value:e.frameLeds,callback:function(t){e.frameLeds=t},expression:"frameLeds"}},e._l(e.frameLeds,(function(t,s){return i("div",{key:s,staticClass:"grid-item row justify-center items-center cursor-pointer",class:e.$q.dark.isActive?"bg-grey-8":"bg-grey-3"},[e._v(e._s(s+1)+"\n            "),t.name?[i("q-tooltip",[e._v(e._s(t.name))])]:e._e()],2)})),0)],1),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$q.lang.label.ok,color:"primary"}})],1)],1)],1),i("q-dialog",{on:{"before-hide":e.calcFrameLedsToLed},model:{value:e.nameLedsDialog,callback:function(t){e.nameLedsDialog=t},expression:"nameLedsDialog"}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("conf.layout.ledName")))])]),i("q-card-section",{staticClass:"q-dialog__message"},[e._v("\n        "+e._s(e.$t("conf.layout.ledNameMsg2"))+"\n      ")]),i("q-card-section",[i("div",{staticClass:"row"},e._l(e.frameLeds,(function(t,s){return i("div",{key:s,staticClass:"grid-item row justify-center items-center cursor-pointer",class:e.$q.dark.isActive?"bg-grey-8":"bg-grey-3"},[e._v(e._s(s+1)+"\n            "),t.name?[i("q-tooltip",[e._v(e._s(t.name))])]:e._e(),i("q-popup-edit",{attrs:{buttons:"",title:e.$t("conf.layout.ledName")+" "+(s+1),validate:e.ledNameValidation},on:{hide:e.ledNameValidation,save:function(t){return e.saveName(s,t)},"before-show":function(t){e.currLedName=e.frameLeds[s].name||""}},model:{value:e.currLedName,callback:function(t){e.currLedName=t},expression:"currLedName"}},[i("q-input",{attrs:{error:e.ledNameError,"error-message":e.ledNameErrorMsg,dense:"",autofocus:""},model:{value:e.currLedName,callback:function(t){e.currLedName=t},expression:"currLedName"}})],1)],2)})),0)]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$q.lang.label.ok,color:"primary"}})],1)],1)],1)],1)},n=[],o=(i("7514"),i("6762"),i("2fdb"),i("6b54"),i("06db"),i("967e")),c=i.n(o),l=(i("96cf"),i("fa84")),d=i.n(l),m=(i("7f7f"),i("f751"),i("fb19")),u=i.n(m),h=i("310e"),f=i.n(h),p=i("ed08"),v=i("e325"),g={name:"PageLedLayout",mixins:[v["k"],v["c"],v["d"],v["b"],v["j"]],components:{"vue-draggable-resizable":u.a,draggable:f.a},data:function(){return{currLedName:"",ledNameErrorMsg:"",ledNameError:!1,axisOption:"both",currentActive:-1,lastActive:-1,visibleLeds:[],moveVisible:!1,nameLedsDialog:!1,currLeds:[],frameLeds:[],frameWidth:100,frameHeight:100}},mounted:function(){this.resetLayout(!0),this.onFrameResize({width:this.$refs.frame.offsetWidth})},methods:{onFrameResize:function(e){this.frameWidth=e.width,this.frameHeight=Math.round(e.width/1.6),this.calcLedsToFrame()},onResizeStop:function(e,t,i,s,a){this.storeUndoItem(this.frameLeds),this.$set(this.frameLeds,e,Object.assign({},this.frameLeds[e],{width:s,height:a,x:t,y:i})),this.$set(this.currLeds,e,this.calcFrameLedToLed({x:t,y:i,width:s,height:a}))},onDragStop:function(e,t,i){if(this.frameLeds[e].x!==t||this.frameLeds[e].y!==i){this.storeUndoItem(this.frameLeds);var s=this.frameLeds[e].width,a=this.frameLeds[e].height;this.$set(this.frameLeds,e,Object.assign({},this.frameLeds[e],{x:t,y:i})),this.$set(this.currLeds,e,this.calcFrameLedToLed({x:t,y:i,width:s,height:a}))}},calcFrameLedsToLed:function(){var e=this,t=[];this.frameLeds.forEach((function(i){t.push(e.calcFrameLedToLed(i))})),this.currLeds=t},calcFrameLedToLed:function(e){var t,i,s,a,r=e.x,n=e.y,o=e.width,c=e.height,l=e.name;return t=Object(p["b"])(r/this.frameWidth),i=Object(p["b"])((r+o)/this.frameWidth),s=Object(p["b"])(n/this.frameHeight),a=Object(p["b"])((n+c)/this.frameHeight),{hmin:t,hmax:i,vmin:s,vmax:a,name:l}},calcLedsToFrame:function(){var e=this,t=[];this.currLeds.forEach((function(i){t.push(e.calcLedToFrameLed(i))})),this.frameLeds=t},calcLedToFrameLed:function(e){var t,i,s,a,r,n;return r=this.getRandomHash(),t=Math.round(e.hmin*this.frameWidth),i=Math.round(e.vmin*this.frameHeight),s=Math.round((e.hmax-e.hmin)*this.frameWidth),a=Math.round((e.vmax-e.vmin)*this.frameHeight),n=e.name,{x:t,y:i,width:s,height:a,id:r,name:n}},resetLayout:function(){var e=d()(c.a.mark((function e(t){var i;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,this.openConfirmDialog({title:this.$t("conf.layout.reset"),msg:this.$t("conf.layout.confResetMsg")});case 3:return i=e.sent,i&&this._performReset(),e.abrupt("return");case 6:this._performReset();case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),_performReset:function(){this.currLeds=this.unfreeze(this.$store.getters["api/getLeds"]),this.calcLedsToFrame(),this.resetUndoItems(),this.visibleLeds=[],this.axisOption="both"},undo:function(){this.frameLeds=this.undoItem(),this.calcFrameLedsToLed()},redo:function(){this.frameLeds=this.redoItem(),this.calcFrameLedsToLed()},onActivated:function(e){this.currentActive=e,this.lastActive=e},onDeactivated:function(e){var t=this;this.currentActive=-1,setTimeout((function(){t.lastActive=-1}),100)},createNewLed:function(){this.storeUndoItem(this.frameLeds),this.currLeds.push({hmin:.4,hmax:.6,vmin:.4,vmax:.6}),this.calcLedsToFrame(),this.$q.notify(this.$t("conf.layout.ledAdded",{lednr:"("+this.currLeds.length+")"})),this.currentActive=this.currLeds.length-1,this.lastActive=this.currLeds.length-1},handleVisibleLeds:function(){var e=d()(c.a.mark((function e(){var t,i,s=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.openPromptDialog({title:this.$t("conf.layout.ledVisible"),msg:this.$t("conf.layout.ledVisibleMsg"),model:this.visibleLeds.map((function(e){return e+1})).toString()});case 2:t=e.sent,t&&(i=this.stringExpToInteger(t).map((function(e){return e-1})),this.visibleLeds=i.filter((function(e){return void 0!==s.frameLeds[e]})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleLedName:function(){var e=d()(c.a.mark((function e(){var t,i;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(-1!==this.lastActive){e.next=2;break}return e.abrupt("return");case 2:return t=this.lastActive,e.next=5,this.openPromptDialog({title:this.$t("conf.layout.ledName"),msg:this.$t("conf.layout.ledNameMsg",{lednr:this.lastActive+1})});case 5:i=e.sent,i&&(this.storeUndoItem(this.frameLeds),this.$set(this.frameLeds[t],"name",i),this.$set(this.currLeds[t],"name",i));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeLed:function(){-1!==this.lastActive&&(this.storeUndoItem(this.frameLeds),this.$q.notify(this.$tc("conf.layout.ledRemoved",1,{lednr:"("+(this.lastActive+1)+")"})),this.currLeds.splice(this.lastActive,1),this.frameLeds.splice(this.lastActive,1))},removeLeds:function(){var e=d()(c.a.mark((function e(){var t,i,s,a=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.openPromptDialog({title:this.$tc("conf.layout.remove",2),msg:this.$t("conf.layout.removeLedsMsg")});case 2:t=e.sent,t&&(i=this.stringExpToInteger(t).map((function(e){return e-1})),s=i.filter((function(e){return void 0!==a.frameLeds[e]})),s.length&&(this.storeUndoItem(this.frameLeds),this.frameLeds=this.frameLeds.filter((function(e,t,i){return!s.includes(t)})),this.currLeds=this.currLeds.filter((function(e,t,i){return!s.includes(t)})),this.visibleLeds=this.visibleLeds.filter((function(e,t,i){return!s.includes(e)})),this.$q.notify(this.$tc("conf.layout.ledRemoved",s.length,{lednr:"("+s.map((function(e){return e+1})).toString()+")"}))));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),isVisible:function(e){return 0===this.visibleLeds.length||this.visibleLeds.includes(e)},ledNameValidation:function(e){if(void 0!==e){var t=e.trim();return!this.frameLeds.find((function(e){return e.name==t}))||(this.ledNameError=!0,this.ledNameErrorMsg=this.$t("validate.unique",['"'.concat(e,'"')]),!1)}return this.ledNameError=!1,this.ledNameErrorMsg="",!0},saveName:function(e,t){void 0===t||""===t.trim()?(this.$delete(this.frameLeds[e],"name"),this.$delete(this.currLeds[e],"name")):(this.$set(this.frameLeds[e],"name",t.trim()),this.$set(this.currLeds[e],"name",t.trim()))}}},L=g,b=(i("d558"),i("2877")),q=Object(b["a"])(L,r,n,!1,null,null,null),x=q.exports,y={name:"PageLedLayout",components:{"led-layout-edit":x},data:function(){return{}},computed:{},mounted:function(){},methods:{}},_=y,$=Object(b["a"])(_,s,a,!1,null,null,null);t["default"]=$.exports}}]);