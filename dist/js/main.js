(()=>{"use strict";new Swiper(".swiper",{slidesPerView:1,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".arrow-left",prevEl:".arrow-right"},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}}),(()=>{const e=document.querySelector(".modal-callback"),t=e.querySelector(".modal-close"),l=document.querySelectorAll(".modal-overlay"),o=document.querySelector(".header"),n=document.querySelector("body");l.forEach((t=>{o.addEventListener("click",(l=>{l.target.classList.contains("callback-btn")&&(l.preventDefault(),t.style.display="block",e.style.display="block")}))})),n.addEventListener("click",(t=>{t.target.closest(".modal-overlay")&&(t.target.style.display="none",e.style.display="none")})),t.addEventListener("click",(()=>{e.style.display="none",l.forEach((e=>{e.style.display="none"}))}))})(),(()=>{document.querySelector(".top-slider");const e=document.querySelectorAll(".item");let t=0;setInterval((()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block"}),3e3)})(),(()=>{const t=document.querySelector(".modal-callback"),l=(t.querySelector(".modal-close"),document.querySelectorAll(".modal-overlay")),o=document.querySelectorAll(".services-elements .element .absolute"),n=document.querySelector(".button-services");o.forEach((o=>{o.addEventListener("click",(()=>{e.preventDefault(),l.forEach((e=>{e.style.display="block"})),t.style.display="block"}))})),n.addEventListener("click",(()=>{e.preventDefault(),l.forEach((e=>{e.style.display="block"})),t.style.display="block"}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".accordeon .element-content");e.addEventListener("click",(e=>{if(e.target.closest(".element")){const o=e.target.closest(".element");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),l[t].style.display="block"):(e.classList.remove("active"),l[t].style.display="none")}))}}))})(),(()=>{const e=document.getElementById("form1"),t=document.createElement("div");e.addEventListener("submit",(l=>{l.preventDefault(),e.querySelectorAll("input");const o=new FormData(e),n={};var c;t.textContent="загрузка...",e.append(t),o.forEach(((e,t)=>{n[t]=e})),console.log("submit"),(c=n,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((e=>{console.log(e),t.textContent="Спасибо! наш менеджер с вами свяжется!"})).catch((e=>{t.textContent="ошибка..."})).finally((()=>{e.reset()}))}))})(),document.querySelector(".form-name").addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s]/,"")})),document.querySelector(".form-phone").addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+0-9]/,"")}))})();