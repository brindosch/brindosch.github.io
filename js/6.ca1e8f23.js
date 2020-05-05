(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0f1d":function(t,e,n){"use strict";var i=n("f178"),s=n.n(i);s.a},cf3a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{staticStyle:{background:"linear-gradient(to bottom, #1e2f48 0%,#206bad 52%,#00bdce 100%)"}},[t.$q.platform.is.electron?n("span",{staticClass:"z-top full-width text-right absolute-top-left text-blue-grey-4 q-electron-drag",staticStyle:{"min-height":"50px"}},[n("q-btn",{attrs:{dense:"",flat:"",size:"sm",icon:"minimize"},on:{click:t.minimize}}),n("q-btn",{attrs:{dense:"",flat:"",size:"sm",icon:"crop_square"},on:{click:t.maximize}}),n("q-btn",{attrs:{dense:"",flat:"",size:"sm",icon:"close"},on:{click:t.closeApp}})],1):t._e(),n("season-overlay"),n("q-page-container",[n("router-view")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed"},["winter"==t.currentSeason?n("season-snow"):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{ref:"snow_flake_canvas"})},c=[],l=(n("6c7b"),{name:"SeasonSnow",data:function(){return{canvas:null,ctx:null,requestFrameId:null,flakes:[],flakeCount:55,mY:-100,mX:-100}},mounted:function(){this.canvas=this.$refs.snow_flake_canvas,this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.$q.screen.width+20,this.canvas.height=this.$q.screen.height+20,this.$q.platform.is.mobile&&(this.flakeCount=15),this.canvas.addEventListener("mousemove",this.updateMousePos),this.init(),this.$q.appVisible||this.stopAnimation()},beforeDestroy:function(){this.stopAnimation()},watch:{"$q.screen.width":function(t){this.canvas.width=t+20},"$q.screen.height":function(t){this.canvas.height=t+20},"$q.appVisibile":function(t){t?this.snow():this.stopAnimation()}},methods:{init:function(){for(var t=0;t<this.flakeCount;t++){var e=Math.floor(Math.random()*this.canvas.width),n=Math.floor(Math.random()*this.canvas.height),i=3*Math.random()+2,s=1*Math.random()+.5,a=.5*Math.random()+.3;this.flakes.push({speed:s,velY:s,velX:0,x:e,y:n,size:i,stepSize:Math.random()/30,step:0,opacity:a})}this.snow()},snow:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.flakeCount;t++){var e=this.flakes[t],n=this.mX,i=this.mY,s=150,a=e.x,o=e.y,r=Math.sqrt((a-n)*(a-n)+(o-i)*(o-i));if(r<s){var c=s/(r*r),l=(n-a)/r,h=(i-o)/r,u=c/2;e.velX-=u*l,e.velY-=u*h}else e.velX*=.98,e.velY<=e.speed&&(e.velY=e.speed),e.velX+=Math.cos(e.step+=.05)*e.stepSize;e.y+=e.velY,e.x+=e.velX,(e.y>=this.canvas.height||e.y<=0)&&this.reset(e),(e.x>=this.canvas.width||e.x<=0)&&this.reset(e),this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,2*Math.PI),this.ctx.fillStyle="rgba(255,255,255,"+e.opacity+")",this.ctx.fill()}this.requestFrameId=window.requestAnimationFrame(this.snow)},reset:function(t){t.x=Math.floor(Math.random()*this.canvas.width),t.y=0,t.size=3*Math.random()+2,t.speed=1*Math.random()+.5,t.velY=t.speed,t.velX=0,t.opacity=.5*Math.random()+.3},stopAnimation:function(){window.cancelAnimationFrame(this.requestFrameId)},updateMousePos:function(t){this.mX=t.clientX,this.mY=t.clientY}}}),h=l,u=(n("0f1d"),n("2877")),d=Object(u["a"])(h,r,c,!1,null,null,null),m=d.exports,f=n("bd4c"),v={name:"SeasonOverlay",components:{"season-snow":m},data:function(){return{currentSeason:"none"}},created:function(){var t=new Date,e=f["b"].getWeekOfYear(t);(e>=48||e<=6)&&(this.currentSeason="winter")}},p=v,w=Object(u["a"])(p,a,o,!1,null,null,null),x=w.exports,b={name:"LayoutClean",components:{"season-overlay":x},created:function(){this.$q.addressbarColor.set("#1e2f48"),this.$q.platform.is.cordova&&"android"===cordova.platformId&&StatusBar.backgroundColorByHexString("#1e2f48")},methods:{minimize:function(){window.electron.minimize()},maximize:function(){window.electron.isMaximized()?window.electron.unmaximize():window.electron.maximize()},closeApp:function(){window.electron.close()}}},q=b,y=Object(u["a"])(q,i,s,!1,null,null,null);e["default"]=y.exports},f178:function(t,e,n){}}]);