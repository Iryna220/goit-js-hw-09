const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){o||(o=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),console.log("good work"))})),e.addEventListener("click",(function(){clearInterval(o),o=null}));let o=null;
//# sourceMappingURL=01-color-switcher.dafd2f12.js.map
