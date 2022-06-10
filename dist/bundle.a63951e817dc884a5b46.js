(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(537),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap);"]),c.push([n.id,":root {\n  --background-c: rgb(255, 255, 255);\n  --background-d-c: rgb(221, 221, 221);\n  --text-c: rgb(120, 120, 120);\n  --defender-c: rgb(43, 121, 255);\n  --defender-l-c: rgb(153, 189, 251);\n  --attacker-c: rgb(248, 61, 61);\n  --attacker-l-c: rgb(249, 153, 153);\n}\n\n* {\n  font-family: 'Inter', sans-serif;\n  color: var(--white-c);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  border-radius: 10px;\n  font-size: 2rem;\n  text-align: center;\n  width: 350px;\n  margin: 35px 0;\n  padding: 10px 0;\n}\n\nh2 {\n  font-size: 4rem;\n}\n\np {\n  font-size: 1.5rem;\n  color: var(--text-c);\n}\n\n#player {\n  border: 4px solid var(--defender-c);\n  background-color: var(--background-c);\n  color: var(--defender-c);\n}\n\n#computer {\n  border: 4px solid var(--attacker-c);\n  background-color: var(--background-c);\n  color: var(--attacker-c);\n}\n\n.container {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n\n.player,\n.computer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(11, 40px);\n  grid-template-rows: repeat(11, 40px);\n  gap: 8px;\n}\n\n.grid {\n  background-color: var(--background-d-c);\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n}\n\n.gridS {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  font-size: 1.4rem;\n  color: var(--text-c);\n}\n\n.screen {\n  background-color: var(--background-d-c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.hide {\n  display: none;\n}\n\n#won h2 {\n  color: var(--defender-c);\n}\n\n#lost h2 {\n  color: var(--attacker-c);\n}\n\n@media (max-width: 1040px) {\n  .container {\n    flex-direction: column;\n    align-items: center;\n  }\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAEA;EACE,kCAAkC;EAClC,oCAAoC;EACpC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;EAClC,8BAA8B;EAC9B,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;EAChC,qBAAqB;EACrB,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;AACV;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,uCAAuC;EACvC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;EACrB;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');\n\n:root {\n  --background-c: rgb(255, 255, 255);\n  --background-d-c: rgb(221, 221, 221);\n  --text-c: rgb(120, 120, 120);\n  --defender-c: rgb(43, 121, 255);\n  --defender-l-c: rgb(153, 189, 251);\n  --attacker-c: rgb(248, 61, 61);\n  --attacker-l-c: rgb(249, 153, 153);\n}\n\n* {\n  font-family: 'Inter', sans-serif;\n  color: var(--white-c);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  border-radius: 10px;\n  font-size: 2rem;\n  text-align: center;\n  width: 350px;\n  margin: 35px 0;\n  padding: 10px 0;\n}\n\nh2 {\n  font-size: 4rem;\n}\n\np {\n  font-size: 1.5rem;\n  color: var(--text-c);\n}\n\n#player {\n  border: 4px solid var(--defender-c);\n  background-color: var(--background-c);\n  color: var(--defender-c);\n}\n\n#computer {\n  border: 4px solid var(--attacker-c);\n  background-color: var(--background-c);\n  color: var(--attacker-c);\n}\n\n.container {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n\n.player,\n.computer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(11, 40px);\n  grid-template-rows: repeat(11, 40px);\n  gap: 8px;\n}\n\n.grid {\n  background-color: var(--background-d-c);\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n}\n\n.gridS {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  font-size: 1.4rem;\n  color: var(--text-c);\n}\n\n.screen {\n  background-color: var(--background-d-c);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.hide {\n  display: none;\n}\n\n#won h2 {\n  color: var(--defender-c);\n}\n\n#lost h2 {\n  color: var(--attacker-c);\n}\n\n@media (max-width: 1040px) {\n  .container {\n    flex-direction: column;\n    align-items: center;\n  }\n}"],sourceRoot:""}]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),c=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(c).concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],A=r.base?s[0]+r.base:s[0],d=a[A]||0,l="".concat(A," ").concat(d);a[A]=d+1;var E=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==E)e[E].references++,e[E].updater(u);else{var p=o(u,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:p,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),A=0;A<a.length;A++){var d=t(a[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r={};(()=>{t.d(r,{UR:()=>x,n1:()=>b,mO:()=>B});var n=t(379),e=t.n(n),o=t(795),a=t.n(o),c=t(569),i=t.n(c),s=t(565),A=t.n(s),d=t(216),l=t.n(d),E=t(589),u=t.n(E),p=t(426),h={};h.styleTagTransform=u(),h.setAttributes=A(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const C=class{constructor(n){this.length=n,this.hits=n}hit(){this.hits-=1}isSunk(){return 0===this.hits}},f=class{constructor(){this.board=[["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E","E","E"]],this.ships=[],this.shipNum=1}place(n,e){const t=["A","B","C","D","E","F","G","H","I","J"],r=[n.slice(0,1),n.slice(1,3)],o=[e.slice(0,1),e.slice(1,3)],a=t.indexOf(r[0]),c=t.indexOf(o[0]);c-a==0?this.ships.push([n,e,new C(o[1]-r[1]+1),`${this.shipNum}`]):this.ships.push([n,e,new C(c-a+1),`${this.shipNum}`]);for(let n=0;n<c-a+1;n++)this.board[a+n][r[1]-1]=`${this.shipNum}`;for(let n=0;n<o[1]-r[1]+1;n++)this.board[a][r[1]-1+n]=`${this.shipNum}`;this.shipNum++}receiveAttack(n){let e;e=n.startsWith("X")?n.slice(1):n;const t=["A","B","C","D","E","F","G","H","I","J"],r=[e.slice(0,1),e.slice(1,3)],o=t.indexOf(r[0]);if("X"===this.board[o][r[1]-1])return!1;if("E"===this.board[o][r[1]-1])return this.board[o][r[1]-1]="O",!0;const a=this.ships.find((n=>n[3]===this.board[o][r[1]-1]));if(a[0].split("")[1]===a[1].split("")[1]){const n=t.indexOf(a[0].split("")[0]);a[2].hit(o-n+1)}else a[2].hit(r[1]-a[0]+1);return this.board[o][r[1]-1]="X",!0}shipsSunk(){return!!this.ships.every((n=>n[2].isSunk()))}};let m=1;const g=class{constructor(n,e){this.type=n,this.id=e}turn(){const n=document.getElementById("player"),e=document.getElementById("computer");0===m?(m=1,n.style.backgroundColor="var(--background-c)",n.style.color="var(--defender-c)",e.style.backgroundColor="var(--attacker-c)",e.style.color="var(--background-c)"):(m=0,n.style.backgroundColor="var(--defender-c)",n.style.color="var(--background-c)",e.style.backgroundColor="var(--background-c)",e.style.color="var(--attacker-c)")}checkTurn(){return m===this.id}attack(n){if("player"===this.type)b.receiveAttack(n.target.id);else{const n=["A","B","C","D","E","F","G","H","I","J"],e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());if(B.receiveAttack(`${n[e]}${t+1}`))return;x.attack()}}},v=function(){const n=["A","B","C","D","E","F","G","H","I","J"];let e=0,t=1;B.board.forEach((r=>{r.forEach((r=>{const o=document.getElementById(`${n[e]}${t}`);switch(r){case"E":break;case"O":o.style.backgroundColor="var(--attacker-l-c)";break;case"X":o.style.backgroundColor="var(--attacker-c";break;default:o.style.backgroundColor="var(--defender-c"}t++})),e++,t=1})),e=0,t=1,b.board.forEach((r=>{r.forEach((r=>{const o=document.getElementById(`X${n[e]}${t}`);switch(r){case"O":o.style.backgroundColor="var(--defender-l-c";break;case"X":o.style.backgroundColor="var(--defender-c"}t++})),e++,t=1}))};let b,B,y,x;b=new f,b.place("A1","A5"),b.place("B1","B4"),b.place("C1","C3"),b.place("D1","D3"),b.place("E1","E2"),B=new f,B.place("A1","A5"),B.place("B1","B4"),B.place("C1","C3"),B.place("D1","D3"),B.place("E1","E2"),y=new g("player",0),x=new g("computer",1),v(),y.turn(),document.querySelector("#enemyBoard").addEventListener("click",(()=>{"grid"===event.target.className&&!1!==y.checkTurn()&&(y.attack(event),b.shipsSunk()?document.getElementById("won").classList.remove("hide"):(v(),y.turn(),setTimeout((()=>{x.attack(),v()}),1e3),setTimeout((()=>{B.shipsSunk()?document.getElementById("lost").classList.remove("hide"):y.turn()}),1100)))}))})()})();
//# sourceMappingURL=bundle.a63951e817dc884a5b46.js.map