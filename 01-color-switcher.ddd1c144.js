!function(){const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.body};let n=null;function o(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(e){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval(o,1e3)})),t.btnStop.addEventListener("click",(function(o){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n),n=0})),t.btnStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.ddd1c144.js.map
