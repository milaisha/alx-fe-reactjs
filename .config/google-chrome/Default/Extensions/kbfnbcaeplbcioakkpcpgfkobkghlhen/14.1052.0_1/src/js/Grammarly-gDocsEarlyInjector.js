!function(){var e;!function(e){e.full="full",e.limited="limited"}(e||(e={}));function t(e,t,n,o=document,i=!1){const r=e,a=o.documentElement;if(i){const e=o.createElement("link");e.href=r,e.rel="preload",e.as="script",e.onload=()=>{e.remove()},a.prepend(e)}const c=o.createElement("script");c.async=!1,c.defer=!1,c.src=r,c.type="text/javascript",t&&c.setAttribute("data-ext-id",t),n&&c.setAttribute("data-ext-version",n),c.onload=()=>{c.remove()},a.prepend(c)}!function(e,n,o){let i=!0;try{const r=o(),a=r.experiment;r.dynamicConfig&&a&&(t(n("Grammarly-gDocsEarlyInjectedCs.js"),e,void 0,void 0,!0),i=!1)}catch(e){console.error("Grammarly error: Unable to initialize on gdocs due to exception: ",e)}i&&t(n("Grammarly-gDocsCanvasFallbackInjected.js"),e,void 0,void 0,!0),function(e="grammarly-desktop-integration"){var t,n;const o=`\n  div.${e} {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select:none;\n    user-select:none;\n  }\n\n  div.${e}:before {\n    content: attr(data-content);\n  }\n`,i=document.createElement("style");i.textContent=o;const r=document.createElement("div");r.setAttribute("aria-label","grammarly-integration"),r.setAttribute("role","group"),r.setAttribute("tabindex","-1"),r.setAttribute("class",e);const a=document.createElement(e);return a.attachShadow({mode:"open"}),a.setAttribute("data-grammarly-shadow-root","true"),null===(t=a.shadowRoot)||void 0===t||t.appendChild(i),null===(n=a.shadowRoot)||void 0===n||n.appendChild(r),document.documentElement.appendChild(a),{activate:(e,t,n)=>{null==r||r.setAttribute("data-content",JSON.stringify(t?{mode:t,isActive:e,isUserDisabled:n}:{isActive:e}))},remove:()=>{var e;null===(e=null==a?void 0:a.parentNode)||void 0===e||e.removeChild(a)}}}().activate(!0)}(chrome.runtime.id,(e=>chrome.runtime.getURL(`src/js/${e}`)),function(e,t,n,o){function i(){const e=t.getItem(n);if(e)try{return JSON.parse(e)}catch(e){}}return chrome.storage.local.get(e,(e=>{const r=JSON.stringify(o(i(),e));t.setItem(n,r)})),chrome.storage.onChanged.addListener(((r,a)=>{if("local"===a){const a={};let c=!1;for(const[t,n]of Object.entries(r))e.includes(t)&&(a[t]=n.newValue,c=!0);if(c){const e=JSON.stringify(o(i(),a));t.setItem(n,e)}}})),function(){return o(i(),{})}}(["user","dynamicConfig"],localStorage,"grammarly.gDocs",(function(e,t){var n,o;const i=t.dynamicConfig?Object.keys(t.dynamicConfig).find((e=>e.startsWith("gDocsCanvasConfig"))):null;return{experiment:(null===(n=t.user)||void 0===n?void 0:n.experiments)?t.user.experiments.gdocsCanvas:null==e?void 0:e.experiment,dynamicConfig:i?null===(o=t.dynamicConfig[i])||void 0===o?void 0:o.enableCanvas:null==e?void 0:e.dynamicConfig}})))}();