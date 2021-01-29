(this["webpackJsonpsound-monitor"]=this["webpackJsonpsound-monitor"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(14),n(15),n(1)),s=n.n(o),u=n(2),l=n(3),v=n(4),d=n(5),h=n(6),m=(n(17),n(18),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={monitoring:!1,level:0},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("article",{className:"input-device"},r.a.createElement("div",{className:"input-device-name"},r.a.createElement("p",null,this.props.deviceInfo.label)),this.state.monitoring?r.a.createElement("button",{onClick:function(){e._stop()}},"stop"):r.a.createElement("button",{onClick:function(){e._start()}},"play"),r.a.createElement("progress",{max:"300",value:this.state.level}))}},{key:"_start",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AudioContext,e.next=3,navigator.mediaDevices.getUserMedia({audio:{deviceId:this.props.deviceInfo.deviceId}});case 3:n=e.sent,a=t.createMediaStreamSource(n),r=t.createAnalyser(),i=new Uint8Array(r.frequencyBinCount),a.connect(r),r.connect(t.destination),this.setState({monitoring:!0,context:t,analyser:r,dataArray:i}),this._tick();case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_stop",value:function(){var e;null===(e=this.state.context)||void 0===e||e.close(),this.setState({monitoring:!1})}},{key:"_tick",value:function(){if(this.state.analyser&&this.state.dataArray){try{this.state.analyser.getByteTimeDomainData(this.state.dataArray);var e=this.state.dataArray.reduce((function(e,t){return Math.max(e,t)}));this.setState({level:e})}catch(t){return void console.error(t)}requestAnimationFrame(this._tick.bind(this))}}}]),n}(r.a.Component)),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={devices:[]},a}return Object(v.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Sound Monitor")),r.a.createElement("main",null,r.a.createElement("section",null,this.state.devices.map((function(e){return r.a.createElement(m,{key:e.deviceId,deviceInfo:e})})))))}},{key:"componentDidMount",value:function(){var e=this;this._refreshDevices(),setInterval((function(){return e._refreshDevices()}),1e3)}},{key:"_refreshDevices",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:t=e.sent.filter((function(e){return"audioinput"===e.kind&&"default"!==e.deviceId})),this.setState({devices:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a25c5c6c.chunk.js.map